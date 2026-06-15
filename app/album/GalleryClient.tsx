"use client";

import React, { useEffect, useMemo, useState } from "react";
import AlbumTile from "@/app/components/AlbumTile";
import PhotoGrid from "@/app/components/PhotoGrid";

export interface GalleryNode {
  images: string[];
  children: Record<string, GalleryNode>;
}

interface Props {
  galleries: GalleryNode;
}

function buildCdnUrl(path: string) {
  const base = (process.env.NEXT_PUBLIC_CDN_URL || "").replace(/\/+$/g, "");
  if (!base) return path;
  return `${base}/${path.replace(/^\/+/, "")}`;
}

export default function GalleryClient({ galleries }: Props) {
  const root = galleries;
  const [pathStack, setPathStack] = useState<string[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<{
    name: string;
    node: GalleryNode;
    info: any;
  } | null>(null);
  const selectedAlbumRef = React.useRef(selectedAlbum);
  const pathStackRef = React.useRef(pathStack);

  useEffect(() => {
    selectedAlbumRef.current = selectedAlbum;
  }, [selectedAlbum]);

  useEffect(() => {
    pathStackRef.current = pathStack;
  }, [pathStack]);

  useEffect(() => {
    const onPop = (e: PopStateEvent) => {
      if (selectedAlbumRef.current) {
        setSelectedAlbum(null);
        return;
      }

      if (pathStackRef.current && pathStackRef.current.length > 0) {
        setPathStack((s) => s.slice(0, -1));
        return;
      }

    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const getNodeAtPath = (path: string[]) => {
    let current: GalleryNode = root;
    for (const p of path) {
      current = current.children[p];
      if (!current) break;
    }
    return current;
  };

  const currentNode = useMemo(() => getNodeAtPath(pathStack), [pathStack, galleries]);

  const [infoCache, setInfoCache] = useState<Record<string, any>>({});

  async function fetchInfoFor(node: GalleryNode, keyName: string) {
    if (!node || !node.images?.length) return null;
    const infoPath = node.images[node.images.length - 1];
    if (!infoPath) return null;
    if (infoCache[infoPath]) return infoCache[infoPath];

    try {
      const res = await fetch(buildCdnUrl(infoPath));
      if (!res.ok) return null;
      const json = await res.json();
      setInfoCache((s) => ({ ...s, [infoPath]: json }));
      return json;
    } catch (e) {
      return null;
    }
  }

  useEffect(() => {
    if (!currentNode) return;
    const entries = Object.entries(currentNode.children || {});
    entries.forEach(([name, node]) => {
      fetchInfoFor(node, name);
    });
  }, [currentNode]);

  useEffect(() => {
    if (!currentNode) return;
    const infoPath = currentNode.images?.[currentNode.images.length - 1];
    if (infoPath && !infoCache[infoPath]) {
      fetchInfoFor(currentNode, pathStack.join("/"));
    }
  }, [currentNode]);

  if (!currentNode) return <div>No gallery data.</div>;

  const entries = Object.entries(currentNode.children || {});

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center gap-4">
        <button
          onClick={() => {
            if (selectedAlbum) {
              setSelectedAlbum(null);
              return;
            }
            if (pathStack.length === 0) return;
            setPathStack((s) => s.slice(0, -1));
          }}
          disabled={pathStack.length === 0 && !selectedAlbum}
          className="px-3 py-1 rounded bg-gray-800 disabled:opacity-50"
        >
          Back
        </button>
        <div className="text-sm text-white">
          {selectedAlbum
            ? `Album: ${selectedAlbum.info?.name || selectedAlbum.name}`
            : pathStack.length === 0
            ? "Home"
            : `Album: ${currentNode?.info?.name || pathStack[pathStack.length - 1]}`}
        </div>
      </div>

      {!selectedAlbum ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {entries.map(([name, node]) => {
          return (
            <AlbumTile
              key={name}
              name={node.info?.name || name}
              node={node}
              onOpen={async () => {
                const isAlbum = !node.children || Object.keys(node.children).length === 0;
                if (isAlbum) {
                  history.pushState({ gallery: true }, "");
                  const fetchedInfo = (await fetchInfoFor(node, name)) || null;
                  setSelectedAlbum({ name, node, info: fetchedInfo });
                } else {
                  history.pushState({ gallery: true }, "");
                  setPathStack((s) => [...s, name]);
                }
              }}
            />
          );
        })}
      </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-black">{selectedAlbum.info?.name || selectedAlbum.name}</h2>
              <div className="text-sm text-gray-600">
                {selectedAlbum.info?.location && <span>Location: {selectedAlbum.info.location} • </span>}
                {selectedAlbum.info?.date && <span>Date: {selectedAlbum.info.date} • </span>}
                {selectedAlbum.info?.crew && <span>Crew: {selectedAlbum.info.crew} • </span>}
                {selectedAlbum.info?.gear && <span>Gear: {selectedAlbum.info.gear}</span>}
              </div>
            </div>
          </div>

          <PhotoGrid
            images={selectedAlbum.node.images.filter((p) => !p.toLowerCase().endsWith("info.json")).map((p) => buildCdnUrl(p))}
          />
        </div>
      )}
    </div>
  );
}
