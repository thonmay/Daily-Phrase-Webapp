import React from 'react';

const PhraseCard = ({ phrase, isLoading }) => {
  // Show loading state if data is being fetched
  if (isLoading) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
        </div>
      </div>
    );
  }

  // Show empty state if no phrase is available
  if (!phrase) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <p className="text-gray-500">Select a language to see your daily phrase</p>
      </div>
    );
  }

  // Show the phrase when available
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full transform transition-transform duration-300 hover:-translate-y-1">
      <h2 className="text-2xl font-bold mb-4 text-center">{phrase.original}</h2>
      <p className="text-gray-600 italic mb-4 text-center">{phrase.pronunciation}</p>
      <p className="text-gray-800 text-center">"{phrase.translation}"</p>
    </div>
  );
};

export default PhraseCard;