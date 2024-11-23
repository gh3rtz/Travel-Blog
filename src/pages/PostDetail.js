// src/pages/PostDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../data/posts.json';
import f1Image from '../assets/f1.jpg';
import mountainImage from '../assets/mountain.jpg';

const PostDetail = () => {
  const { id } = useParams();
  const post = postsData.find((post) => post.id.toString() === id);

  if (!post) return <p className="text-center text-gray-800 dark:text-white">Post not found.</p>;

  // Mapping the image names to imported images
  const images = {
    "f1.jpg": f1Image,
    "mountain.jpg": mountainImage,
  };

  const imageUrl = images[post.image];

  // Splitting long descriptions into two paragraphs if necessary
  const splitDescription = (desc) => {
    const maxLength = 200; // Set a max length before splitting
    if (desc.length > maxLength) {
      const firstPart = desc.slice(0, maxLength);
      const remainingPart = desc.slice(maxLength);
      return [firstPart, remainingPart];
    }
    return [desc];
  };

  const descriptionParagraphs = splitDescription(post.description);

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center sm:text-left">{post.title}</h1>
      <p className="text-gray-500 mb-6 text-center sm:text-left">{new Date(post.date).toLocaleDateString()}</p>
      {imageUrl ? (
        <div className="flex justify-center sm:justify-start mb-6">
          <img 
            src={imageUrl} 
            alt={post.title} 
            className="w-full sm:w-3/4 lg:w-1/2 max-h-96 object-cover rounded-md shadow-lg"
          />
        </div>
      ) : (
        <p className="text-red-500">Image not found.</p>
      )}
      <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-center sm:text-left">
        {descriptionParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
