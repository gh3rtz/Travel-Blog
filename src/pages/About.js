import React, { useEffect, useState } from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/8.jpg';
import Audio from '../audio/pasilyo.mp3';

const About = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);

  // Automatically play audio when the component mounts
  useEffect(() => {
    const audio = document.getElementById('background-music');
    audio.play().catch((error) => {
      console.log("Playback prevented: ", error);
    });

    // Set timeout for initial animation duration
    const timer = setTimeout(() => {
      setInitialAnimationDone(true);
    }, 2000); // Change this duration to match your animation time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center text-center py-16 px-4 relative overflow-hidden">
      <audio id="background-music" src={Audio} autoPlay loop />

      <h1 className="text-2xl sm:text-6xl font-bold text-gray-800 dark:text-white mb-4">
        About Us
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-8">
        A passionate traveler and storyteller, sharing our adventures and experiences. From mountains to beaches, each destination offers something unique to discover.
      </p>

      {/* Marquee Section */}
      <div className="relative w-full overflow-hidden py-4">
        <div className={`flex space-x-4 ${initialAnimationDone ? 'animate-marquee' : 'animate-initial-marquee'}`}>
          {images.concat(images).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Travel destination ${index + 1}`}
              className="h-80 w-64 object-cover rounded-md shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
