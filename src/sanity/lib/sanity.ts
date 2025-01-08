// lib/sanity.ts
import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: '37xcwmh9', // Replace with your actual Project ID
  dataset: 'production', // Replace with your actual Dataset name
  apiVersion: '2023-01-01', // Optional: Use your preferred API version
  useCdn: true, // Set to true for faster response if data is not frequently updated
});

export async function fetchBlogs() {
  return await sanityClient.fetch(`
    *[_type == "blog"]{
      _id,
      title,
      author,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      content
    }
  `);
}

