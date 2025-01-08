import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from 'next-sanity';

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
};

const client = createClient(config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, comment } = JSON.parse(req.body);
      await client.create({
        _type: 'comment',
        name,
        email,
        comment,
        approved: false, // Set to false initially for moderation
      });
      res.status(200).json({ message: 'Comment submitted successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to submit comment.', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}