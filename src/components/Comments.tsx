import React, { useState, useEffect, useCallback } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Comment {
  _id: string;
  author: string;
  text: string;
  createdAt: string;
}

interface CommentsProps {
  competitionId: string;
}

const Comments: React.FC<CommentsProps> = ({ competitionId }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchComments = useCallback(async () => {
    setIsLoading(true);
    setFetchError(null);
    try {
      const response = await fetch(`/api/comments?competitionId=${competitionId}`);
      if (!response.ok) {
        throw new Error('Tải bình luận thất bại');
      }
      const data = await response.json();
      setComments(data);
    } catch (err: any) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [competitionId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!token) {
      setError('Vui lòng xác minh bạn không phải là robot.');
      return;
    }

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          competitionId,
          author,
          text,
          'h-captcha-response': token,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Gửi bình luận thất bại');
      }

      setAuthor('');
      setText('');
      fetchComments(); // Refresh comments list
    } catch (err: any) {
      setError(err.message);
    }
  };

  const siteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Để lại bình luận</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Tên của bạn"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={{ color: 'white' }}
          />
          <Textarea
            placeholder="Bình luận của bạn"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <HCaptcha
            sitekey={siteKey}
            onVerify={setToken}
          />
          <Button type="submit">Gửi</Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Bình luận</h2>
        {isLoading && <p className="text-white">Đang tải bình luận...</p>}
        {fetchError && <p className="text-red-500">{fetchError}</p>}
        {!isLoading && !fetchError && comments.length === 0 && <p className="text-white">Chưa có bình luận nào.</p>}
        <div className="h-96 overflow-y-auto rounded-md border border-white/30 bg-white/5 backdrop-blur-sm p-4">
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment._id} className="text-white overflow-hidden">
                <CardHeader>
                  <CardTitle className="truncate">{comment.author}</CardTitle>
                  <p className="text-sm text-gray-400 truncate">
                    {new Date(comment.createdAt).toLocaleString()}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-line overflow-hidden text-ellipsis line-clamp-5">
                    {comment.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
