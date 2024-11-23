// src/components/PostCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <Link to={`/posts/${post.id}`}>
        <div className="h-48 w-full flex items-center justify-center overflow-hidden"> {/* Center the image */}
          <img 
            src={require(`../assets/${post.image}`)} 
            alt={post.title} 
            className="h-full w-auto" // Maintain aspect ratio with height filling the container
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">{post.description.substring(0, 100)}...</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
