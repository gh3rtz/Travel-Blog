import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import postsData from '../data/posts.json';

const Home = () => {
  // Limit the number of displayed posts to 8
  const displayedPosts = postsData.slice(0, 8);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-4">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white text-right mb-6">
          Featured Videos
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {/* Video Card 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
              Travel Tips for Beginners
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/nXRLPATS0Ns"
                title="Travel Tips for Beginners"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Video Card 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
              Top Destinations 2024
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/nXRLPATS0Ns"
                title="Top Destinations 2024"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Video Card 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
              Top Destinations 2023
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/nXRLPATS0Ns"
                title="Top Destinations 2024"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="container mx-auto px-4 py-4">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Our Latest Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              {post.image && (
                <img
                  src={require(`../assets/${post.image}`)}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{post.title}</h3>
                {/* Limit the description to 100 characters */}
                <p className="text-gray-600 dark:text-gray-300">
                  {post.description.length > 60 ? `${post.description.substring(0, 60)}...` : post.description}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button to view all posts */}
        {postsData.length > 6 && (
          <div className="flex justify-center mt-8">
            <Link
              to="/posts"
              className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              View All Posts
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
