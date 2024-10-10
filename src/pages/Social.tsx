import React, { useState } from 'react';
import { Image, Video, MessageSquare, Heart, Share2 } from 'lucide-react';

const Social: React.FC = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Alice', content: 'Just minted my first NFT!', likes: 15, comments: 3 },
    { id: 2, author: 'Bob', content: 'Check out this amazing artwork:', image: 'https://source.unsplash.com/random/800x600?artwork', likes: 32, comments: 7 },
    { id: 3, author: 'Charlie', content: 'New video on DeFi strategies:', video: 'https://www.example.com/defi-video.mp4', likes: 24, comments: 5 },
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([{ id: posts.length + 1, author: 'You', content: newPost, likes: 0, comments: 0 }, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Social Feed</h1>
      <form onSubmit={handlePostSubmit} className="mb-8">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-4 bg-gray-800 rounded-lg text-white"
          rows={3}
        />
        <div className="flex justify-between items-center mt-2">
          <div>
            <button type="button" className="mr-2 text-gray-400 hover:text-white"><Image size={20} /></button>
            <button type="button" className="text-gray-400 hover:text-white"><Video size={20} /></button>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Post</button>
        </div>
      </form>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
              <span className="font-semibold">{post.author}</span>
            </div>
            <p className="mb-4">{post.content}</p>
            {post.image && <img src={post.image} alt="Post content" className="w-full rounded-lg mb-4" />}
            {post.video && <video src={post.video} controls className="w-full rounded-lg mb-4"></video>}
            <div className="flex justify-between text-gray-400">
              <button className="flex items-center hover:text-white"><Heart size={20} className="mr-1" /> {post.likes}</button>
              <button className="flex items-center hover:text-white"><MessageSquare size={20} className="mr-1" /> {post.comments}</button>
              <button className="flex items-center hover:text-white"><Share2 size={20} className="mr-1" /> Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;