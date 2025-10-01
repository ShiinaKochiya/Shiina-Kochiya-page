//i wrote this before btw
//https://github.com/arknights-vns/dreamchasers/blob/main/components/ImageGallery.tsx

import Image from "next/image";

function getLocalImages(filepath, count) {
  return Array.from({ length: count }, (_, i) => `${filepath}/${i + 1}.jpg`);
}

export default function ImageGallery({ filepath, count }) {
  const localImages = getLocalImages(filepath, count);
  return (
    <div className="max-w-screen">
      <div className="max-w-full [column-gap:1.12rem] [column-count:2] md:[column-count:3] lg:[column-count:4]" id="gallery">
        {localImages.map(src => (
          <div
            key={src}
            className="mb-[1.12rem] w-full break-inside-avoid overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              alt="Gallery photo"
              className="block object-cover"
              height={480}
              priority
              src={src}
              width={854}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
