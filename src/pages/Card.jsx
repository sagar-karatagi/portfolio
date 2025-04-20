import React from 'react';

const Card = () => {
  const title = "Sample Card";
  const description = "This is a description for the sample card. It's beautifully designed with great attention to detail.";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="w-96 bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 hover:text-indigo-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-lg text-gray-700">{description}</p>
        </div>
        <div className="flex justify-center mb-6">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
            Click me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
