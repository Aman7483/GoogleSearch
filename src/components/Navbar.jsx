import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="py-12 pb-5 flex flex-col sm:flex-row sm:justify-between items-center border-b dark:border-gray-700 border-gray-200 bg-gradient-to-br from-blue-500 via-yellow-400 to-blue-300">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-4">
        
        {/* <Link to="/"> */}
          <div className="flex items-center">
            <span role="img" aria-label="Google Icon" className="text-4xl mr-2">
              🔍
            </span>
            <p className="text-4xl font-bold text-white dark:text-gray-900">
              Google
            </p>
          </div>
        {/* </Link> */}

        <Link to="/">
        <Search className="w-full py-2 px-4 rounded-full shadow-md" />
        </Link>

        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-700 dark:text-gray-300 bg-white rounded-full px-3 py-1 flex-none hover:shadow-lg focus:outline-none"
        >
          {darkTheme ? 'Light ☀' : 'Dark 🌙'}
        </button>
      </div>
    </div>
  );
};
