// src/pages/Posts.js
import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import postsData from '../data/posts.json';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    setPosts(postsData);
  }, []);

  // Hitung total halaman
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Dapatkan post untuk halaman saat ini
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Fungsi untuk navigasi halaman
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">Travel Posts</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-800 text-white hover:bg-blue-900'}`}
          >
            Previous
          </button>
          
          <span className="text-gray-600 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-blue-800 text-white hover:bg-blue-900'}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Posts;
