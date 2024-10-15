import React from "react";
import { Link } from "react-router-dom";
import heroimage from "../assets/heroimage.jpg"; // Ensure the path is correct

const Home = () => {
  return (
    <div className="flex flex-col-reverse   md:flex-row mb-[80px] mt-[140px]">
      {/* Right Side: Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <img
          src={heroimage} // Use the imported image
          alt="Meme Generator Hero" // Provide a descriptive alt text
          className="w-[700px] h-auto rounded-lg shadow-lg" // Style the image
        />
      </div>

      {/* Left Side: Text and Button */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Create Memes Effortlessly with Our User-Friendly Meme Generator
        </h1>
        <Link to="/MemeGallery">
          <button className="px-6 py-3 text-lg font-semibold rounded-md bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            Create Your Meme Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
