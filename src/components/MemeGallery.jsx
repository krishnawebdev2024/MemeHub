import React, { useState } from "react";
import { useMemes } from "../context-and-reducer/MemeContext"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";

const MemeGallery = () => {
  const { memes } = useMemes();
  const navigate = useNavigate();
  const [selectedMeme, setSelectedMeme] = useState(null);

  const handleMemeSelect = (meme) => {
    setSelectedMeme(meme); // Set the selected meme
    navigate("/create-meme", { state: { meme } }); // Pass meme data using navigate
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-[200px] mb-[150px] ">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {memes.map((meme) => (
          <div
            key={meme.id}
            className="meme-card border border-1 border-gray-400 bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 rounded-lg shadow-lg p-4 "
          >
            <div className="relative group overflow-hidden">
              <img
                src={meme.url}
                alt={meme.name}
                className="w-64 h-64 object-contain rounded-lg transition-transform duration-800 ease-in-out group-hover:scale-105 cursor-pointer"
                onClick={() => handleMemeSelect(meme)}
              />
            </div>
            <button
              onClick={() => handleMemeSelect(meme)} // Optional: Select button
              className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Add Meme
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemeGallery;
