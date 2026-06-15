import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export interface GalleryNode {
  images: string[];
  children: Record<string, GalleryNode>;
  info?: any;
}

export async function getGalleryTree(): Promise<GalleryNode> {
  const root: GalleryNode = {
    images: [],
    children: {},
  };

  let continuationToken: string | undefined;

  do {
    const response = await client.send(
      new ListObjectsV2Command({
        Bucket: process.env.R2_BUCKET!,
        ContinuationToken: continuationToken,
      })
    );

    const objects = response.Contents ?? [];

    for (const object of objects) {
      const key = object.Key;

      if (!key) continue;

      const parts = key.split("/");

      let current = root;

      for (let i = 0; i < parts.length - 1; i++) {
        const folder = parts[i];

        if (!current.children[folder]) {
          current.children[folder] = {
            images: [],
            children: {},
          };
        }

        current = current.children[folder];
      }

      current.images.push(key);
    }

    continuationToken = response.NextContinuationToken;
  } while (continuationToken);

  return root;
}

export async function getGalleryTreeWithInfo(): Promise<GalleryNode> {
  const root = await getGalleryTree();

  async function walk(node: GalleryNode) {
    if (node.images && node.images.length) {
      const infoPath = node.images[node.images.length - 1];
      try {
        const cdn = process.env.NEXT_PUBLIC_CDN_URL;
        if (cdn && infoPath && infoPath.toLowerCase().endsWith("info.json")) {
          const res = await fetch(`${cdn}/${infoPath}`);
          if (res.ok) {
            node.info = await res.json();
          }
        }
      } catch (e) {
        // dafuq is errors?
      }
    }

    for (const key of Object.keys(node.children || {})) {
      await walk(node.children[key]);
    }
  }

  await walk(root);
  return root;
}