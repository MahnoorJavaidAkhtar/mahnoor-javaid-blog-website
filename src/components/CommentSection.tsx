"use client"
import { useState } from 'react';
import { fetchComments } from '@/sanity/lib/fetchComments';

interface Comment {
  _id: string;
  name: string;
  comment: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const fetchAndSetComments = async () => {
    const comments = await fetchComments();
    setComments(comments);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setSuccessMessage('Comment submitted successfully!');
      setFormData({ name: '', email: '', comment: '' });
      fetchAndSetComments();
    } catch (error) {
      console.error('Failed to submit comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Enter your comments"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {successMessage && <p className="mt-2 text-green-500">{successMessage}</p>}

      <h3 className="mt-8 text-lg font-bold">Comments</h3>
      <ul className="mt-4 space-y-4">
        {comments.map((comment) => (
          <li key={comment._id} className="p-4 border rounded">
            <p className="font-semibold">{comment.name}</p>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}