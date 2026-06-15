"use client";
import React from "react";
import { GalleryNode } from "@/app/backend/getGallery";

interface Props {
  name: string;
  node: GalleryNode;
  onOpen: () => void;
}

export default function AlbumTile({ name, node, onOpen }: Props) {
  const info = node.info;

  let coverUrl: string | undefined;
  const base = (process.env.NEXT_PUBLIC_CDN_URL || "").replace(/\/+$/g, "");

  if (info?.cover) {
    const infoPath = node.images[node.images.length - 1] || "";
    const dir = infoPath.replace(/\\/g, "/").replace(/\/info.json$/i, "");
    const coverVal = Array.isArray(info.cover) ? info.cover[0] : info.cover;
    const coverPath = dir ? `${dir}/${coverVal}` : coverVal;
    coverUrl = `${base}/${coverPath.replace(/^\/+/, "")}`;
  } else if (node.images && node.images.length) {
    const firstImage = node.images.find((p) => !p.toLowerCase().endsWith("info.json"));
    if (firstImage) {
      coverUrl = `${base}/${firstImage.replace(/^\/+/, "")}`;
    }
  }

  return (
    <button onClick={onOpen} className="relative h-100 rounded overflow-hidden bg-gray-200 focus:outline-none">
      {/* If info.cover is array, render a small grid of covers for folder preview */}
      {Array.isArray(info?.cover) && info.cover.length > 0 ? (
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0 bg-stone-800">
          {info.cover.slice(0, 4).map((c: string, i: number) => {
            const infoPath = node.images[node.images.length - 1] || "";
            const dir = infoPath.replace(/\\/g, "/").replace(/\/info.json$/i, "");
            const coverPath = dir ? `${dir}/${c}` : c;
            const url = `${base}/${coverPath.replace(/^\/+/, "")}`;
            return <img key={i} src={url} className="w-full h-full object-cover" />;
          })}
        </div>
      ) : coverUrl ? (
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${coverUrl})` }} />
      ) : null}
      <div className="absolute left-2 bottom-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded max-w-3/4">{name}</div>
    </button>
  );
}
