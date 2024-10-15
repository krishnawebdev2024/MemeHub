import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const CraftedMemes = () => {
  const [craftedMemes, setCraftedMemes] = useState([]);

  // Retrieve crafted memes from localStorage when the component mounts
  useEffect(() => {
    const savedMemes = JSON.parse(localStorage.getItem("savedMemes")) || [];
    setCraftedMemes(savedMemes);
  }, []);

  // Function to delete all memes from localStorage and update the list
  const handleDeleteAllMemes = () => {
    console.log("Deleting all memes..."); // Debug log
    setCraftedMemes([]); // Clear the state holding memes
    localStorage.removeItem("savedMemes"); // Remove the "savedMemes" key from localStorage
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[140px] mb-20">
      <div className="flex items-center justify-center  bg-blue-500 text-white p-4 w-full text-center">
        <span className="mr-4">You can always create a new meme!</span>
        <Link to="/MemeGallery">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Create Meme
          </button>
        </Link>
        <button
          onClick={handleDeleteAllMemes}
          className="px-6 py-2 ml-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        >
          Clear crafted Memes
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 mt-8">
        Crafted Memes
      </h1>

      {/* Check if there are any crafted memes */}
      {craftedMemes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {craftedMemes.map((meme, index) => (
            <div
              key={index}
              className="relative border border-gray-300 border-2 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={meme.url}
                alt={`Meme ${index}`}
                className="w-64 h-64 object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-between">
                {meme.topText && (
                  <div className="absolute top-2 text-white text-xl font-bold bg-black bg-opacity-50 px-2 z-10 rounded-lg">
                    {meme.topText}
                  </div>
                )}
                {meme.bottomText && (
                  <div className="absolute bottom-2 text-white text-xl font-bold bg-black bg-opacity-50 px-2 z-10 rounded-lg">
                    {meme.bottomText}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-lg font-medium mb-4">
            No crafted memes saved yet. Go and create some memes please!
          </p>
          <Link to="/MemeGallery">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Create Meme
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CraftedMemes;
