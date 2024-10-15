// src/context/MemeReducer.jsx

// Initial state for the memes
export const initialState = {
  memes: [],
};

// Meme reducer function to manage meme state
export const memeReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_MEMES":
      return { ...state, memes: action.payload };
    default:
      return state;
  }
};
