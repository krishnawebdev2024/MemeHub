import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CreateMeme = () => {
  const location = useLocation();
  const { meme } = location.state || {};
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [showModal, setShowModal] = useState(false); // Modal for empty input
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Modal for meme saved

  const handleSaveToLocalStorage = () => {
    if (!topText || !bottomText) {
      setShowModal(true); // Show error modal if any field is empty
      return;
    }

    const memeData = { topText, bottomText, url: meme.url };
    const existingMemes = JSON.parse(localStorage.getItem("savedMemes")) || [];
    localStorage.setItem(
      "savedMemes",
      JSON.stringify([...existingMemes, memeData])
    );

    // Show success modal instead of alert
    setShowSuccessModal(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-gray-100 mt-[138px]">
      {meme && (
        <div className="relative border border-1 p-4 border-gray-500 flex items-center justify-center shadow-lg rounded-lg overflow-hidden w-full max-w-sm mx-auto">
          <img
            src={meme.url}
            alt={meme.name}
            className="w-80 h-80 object-cover"
          />
          <div className="absolute px-3 py-1 inset-0 flex flex-col items-center justify-between">
            {topText && (
              <div className="absolute top-2 w-full text-center text-white text-2xl font-bold bg-black bg-opacity-65 px-3 py-1  rounded">
                {topText}
              </div>
            )}
            {bottomText && (
              <div className="absolute bottom-2 w-full text-center text-white text-2xl font-bold bg-black bg-opacity-65 px-3 py-1 rounded">
                {bottomText}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-6 w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">
          Create Your Meme
        </h2>

        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded-md bg-gray-100 border border-gray-300 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition"
        />

        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          className="w-full px-4 py-2 mb-6 rounded-md bg-gray-100 border border-gray-300 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition"
        />

        <div className="flex justify-between">
          <button
            onClick={handleSaveToLocalStorage}
            className="w-full mr-2 px-4 py-2 text-lg font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 shadow transition duration-300"
          >
            Save to Local Storage
          </button>
          <Link to="/MemeGallery">
            <button className="w-full ml-2 px-4 py-2 text-lg font-semibold rounded-md bg-gray-600 text-white hover:bg-gray-800 shadow transition duration-300">
              Gallery
            </button>
          </Link>
        </div>
      </div>

      {/* Modal for showing an error if fields are empty */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4 text-red-500">Error</h2>
            <p className="text-gray-700 mb-4">
              Please fill in both the top and bottom text fields before saving.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for showing success message when meme is saved */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4 text-green-500">
              Success
            </h2>
            <p className="text-gray-700 mb-4">
              Your meme has been successfully saved!
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateMeme;
