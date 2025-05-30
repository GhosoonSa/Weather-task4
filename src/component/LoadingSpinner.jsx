import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-700"></div>
    </div>
  );
};

export default LoadingSpinner;
