"use client";

import React, { useState } from "react";
import Image from "next/image";
import download from "#/buttons/download.svg"
import close from "#/buttons/close.svg"

interface Props {
  images: string[];
}

export default function PhotoGrid({ images }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [imgSize, setImgSize] = useState<{ width: number; height: number } | null>(null);

  React.useEffect(() => {
    if (!selected) {
      setImgSize(null);
      return;
    }

    let cancelled = false;
    const img = new window.Image();
    img.src = selected;
    img.onload = () => {
      if (cancelled) return;
      const naturalW = img.naturalWidth || img.width;
      const naturalH = img.naturalHeight || img.height;

      const maxW = window.innerWidth * 0.95;
      const maxH = window.innerHeight * 0.95;
      const scale = Math.min(maxW / naturalW, maxH / naturalH, 1);
      setImgSize({ width: Math.round(naturalW * scale), height: Math.round(naturalH * scale) });
    };
    img.onerror = () => {
      if (!cancelled) setImgSize(null);
    };

    return () => {
      cancelled = true;
    };
  }, [selected]);

  return (
    <div className="w-full">
      <div className="masonry-sm">
        {images.map((src) => (
          <div key={src} className="break-inside mb-2 cursor-pointer" onClick={() => setSelected(src)}>
            <Image src={src} width={800} height={600} className="w-full object-cover rounded" alt=""/>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-60 bg-black bg-opacity-80 flex items-center justify-center" onClick={() => setSelected(null)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {imgSize ? (
              <Image src={selected} width={imgSize.width} height={imgSize.height} alt="image" className="object-contain rounded" unoptimized />
            ) : (
              <div style={{ width: '95vw', height: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={selected} width={800} height={600} alt="image" className="object-contain rounded" unoptimized />
              </div>
            )}

            <div className="absolute top-4 right-4 flex gap-2 items-center">
              <a href={selected} download aria-label="Download image" className="p-1 rounded bg-white/90">
                <Image src={download} width={24} height={24} alt="download" className="w-6 h-6" />
              </a>
              <button onClick={() => setSelected(null)} aria-label="Close lightbox" className="p-1 rounded bg-white/90">
                <Image src={close} width={24} height={24} alt="close" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .masonry-sm {
          column-count: 2;
          column-gap: 0.5rem;
        }

        @media (min-width: 640px) {
          .masonry-sm {
            column-count: 3;
          }
        }

        @media (min-width: 768px) {
          .masonry-sm {
            column-count: 4;
          }
        }

        .masonry-sm img {
          width: 100%;
          display: block;
        }
      `}</style>
    </div>
  );
}
