import React from 'react';

export const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-center p-8 mt-16 border-t dark:border-gray-700 border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-lg font-semibold mb-2">Keep Searching 😉</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
         This project is made on React and Tailwind, gets search results from RapidAPI.com free API(Exhaustive limit).
         <br></br>Please do not spam with many requests.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://aman7483.github.io/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline" 
          >
            Link to my Portfolio
          </a>
        </div>
      </div>
      <div className="mt-6 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Google Search @AMAN SINGH. All rights reserved.</p>
      </div>
    </div>
  );
};
