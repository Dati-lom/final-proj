import React from 'react';

const ReviewCard = ({ reviewName, onDelete }) => {
    return (
      <div className="w-64 p-4 border border-gray-300 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-light font-semibold">{reviewName}</h3>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

export default ReviewCard;