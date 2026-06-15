import { getGalleryTreeWithInfo } from "@/app/backend/getGallery";
import GalleryClient from "./GalleryClient";

export default async function Home() {
  const galleries = await getGalleryTreeWithInfo();

  return (
    <div>
      {/* Render a client-side gallery UI that handles navigation and album views */}
      {/* Pass the server-fetched gallery tree to the client component */}
      <GalleryClient galleries={galleries} />
    </div>
  );
}
