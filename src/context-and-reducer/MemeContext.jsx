// src/context/MemeContext.jsx

import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, memeReducer } from "./MemeReducer"; // Import the initial state and reducer

const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(memeReducer, initialState); // Use the imported reducer and initial state

  useEffect(() => {
    const loadMemesFromLocalStorage = () => {
      const memes = JSON.parse(localStorage.getItem("memes"));
      return memes || []; // Return the memes or an empty array if none found
    };

    const fetchMemes = async () => {
      const API_URL = "https://api.imgflip.com/get_memes";
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.data.memes; // Return the array of memes
      } catch (error) {
        console.error("Error fetching memes:", error);
        return []; // Return an empty array in case of error
      }
    };

    const loadMemes = async () => {
      let memes = loadMemesFromLocalStorage();

      if (memes.length === 0) {
        memes = await fetchMemes();
        localStorage.setItem("memes", JSON.stringify(memes));
      }

      dispatch({ type: "LOAD_MEMES", payload: memes });
    };

    loadMemes();
  }, []);

  return (
    <MemeContext.Provider value={{ memes: state.memes }}>
      {children}
    </MemeContext.Provider>
  );
};

// Custom hook to use the MemeContext
export const useMemes = () => {
  return useContext(MemeContext);
};
