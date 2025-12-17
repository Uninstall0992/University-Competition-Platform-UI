import type { VercelRequest, VercelResponse } from '@vercel/node';
import client from './_lib/mongodb';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  try {
    if (request.method === 'GET') {
      const { competitionId } = request.query;

      if (!competitionId) {
        return response.status(400).json({ error: 'Missing competitionId query parameter' });
      }

      const db = client.db('ucomp');
      const commentsCollection = db.collection('comments');

      const comments = await commentsCollection
        .find({ competitionId: competitionId as string })
        .sort({ createdAt: -1 })
        .toArray();

      return response.status(200).json(comments);
    } else if (request.method === 'POST') {
      const { competitionId, author, text, 'cf-turnstile-response': turnstileToken } = request.body;

      if (!competitionId || !author || !text || !turnstileToken) {
        return response.status(400).json({ error: 'Missing required fields' });
      }

      // TODO: Replace with your Cloudflare Turnstile secret key
      const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
      if (!secretKey) {
        console.error('CLOUDFLARE_TURNSTILE_SECRET_KEY is not set');
        return response.status(500).json({ error: 'Internal Server Error' });
      }

      const verificationURL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
      const verificationResponse = await fetch(verificationURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: secretKey,
          response: turnstileToken,
        }),
      });

      const verificationData = await verificationResponse.json();

      if (!verificationData.success) {
        return response.status(400).json({ error: 'Cloudflare Turnstile verification failed' });
      }

      const db = client.db('ucomp');
      const commentsCollection = db.collection('comments');
      
      const result = await commentsCollection.insertOne({
        competitionId,
        author,
        text,
        createdAt: new Date(),
      });

      return response.status(201).json({ message: 'Comment added', commentId: result.insertedId });
    } else {
      response.setHeader('Allow', ['GET', 'POST']);
      return response.status(405).end(`Method ${request.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
