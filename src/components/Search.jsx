import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';

const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm, getResults } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue, setSearchTerm]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Trigger the search with type 'web' when Enter key is pressed
      getResults(`?q=${text}&type=web`);
    }
  };

  return (
    <div className="flex justify-center w-full max-w-6xl mx-auto sm:mt-0 mt-3">
      <div className="relative w-full sm:w-96">
        <input
          value={text}
          type="text"
          className="w-full h-14 dark:bg-gray-300 border rounded-full shadow-md outline-none px-6 text-black hover:shadow-lg"
          placeholder="Search Google or type URL"
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Search;
