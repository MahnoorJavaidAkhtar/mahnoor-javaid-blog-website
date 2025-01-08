import { createClient } from 'next-sanity';

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2023-01-01',
  useCdn: true,
};

const client = createClient(config);

export async function fetchComments() {
  return await client.fetch(`*[_type == "comment" && approved == true]`);
}