import React from 'react';

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  // Define available languages with their flag emojis
  const languages = [
    { id: 'spanish', name: 'Spanish', flag: '🇪🇸' },
    { id: 'french', name: 'French', flag: '🇫🇷' },
    { id: 'italian', name: 'Italian', flag: '🇮🇹' },
    { id: 'german', name: 'German', flag: '🇩🇪' },
    { id: 'chinese', name: 'Chinese', flag: '🇨🇳' },
  ];

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {/* Map through languages array to create buttons */}
      {languages.map((language) => (
        <button
          key={language.id}
          onClick={() => onLanguageChange(language.id)}
          className={`px-4 py-2 rounded-lg flex items-center transition duration-200 ${
            selectedLanguage === language.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <span className="mr-2 text-xl">{language.flag}</span>
          {language.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;