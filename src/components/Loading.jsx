import React from 'react';
import * as Loader from 'react-loader-spinner';

export const Loading = () => {
  return (
        <div className="flex justify-center items-center">
        <Loader.Circles height="80" width="80" color="#4fa94d" ariaLabel="circles-loading"
          wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
  );
}

export default Loading;