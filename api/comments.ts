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
      const { competitionId, author, text, 'h-captcha-response': hCaptchaToken } = request.body;

      if (!competitionId || !author || !text || !hCaptchaToken) {
        return response.status(400).json({ error: 'Missing required fields' });
      }

      const secretKey = process.env.HCAPTCHA_SECRET_KEY;
      if (!secretKey) {
        console.error('HCAPTCHA_SECRET_KEY is not set');
        return response.status(500).json({ error: 'Internal Server Error' });
      }

      const verificationURL = 'https://hcaptcha.com/siteverify';
      const verificationResponse = await fetch(verificationURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `response=${hCaptchaToken}&secret=${secretKey}`,
      });

      const verificationData = await verificationResponse.json();

      if (!verificationData.success) {
        return response.status(400).json({ error: 'hCaptcha verification failed' });
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
