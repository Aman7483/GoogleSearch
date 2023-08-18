import React from 'react';
import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

const Results = () => {
  const { results, isLoading } = useResultContext();

  if (isLoading) return <Loading />;

  return (
    <div className="sm:px-4 md:px-8 lg:px-16 xl:px-20">
      {results?.map(({ url, title, snippet }, index) => (
        <div key={index} className="bg-white rounded-lg p-4 shadow-md mb-6">
          <a href={url} target="_blank" rel="noreferrer" className="text-blue-700 text-lg hover:underline">
            {title}
          </a>
          <p className="text-sm text-gray-600">{url}</p>
          <p className="text-sm mb-2 text-gray-600">{snippet}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Results;
