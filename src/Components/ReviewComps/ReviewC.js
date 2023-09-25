import React from 'react'

function ReviewC({review}){

  return (
    <div className="bg-dark border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex mb-3 ml-2 mt-2 relative">
  {review.imageUrl ? (
    <img
      src={review.imageUrl}
      alt={`Image for ${review.reviewName}`}
      className="h-40 w-60 object-contain"
    />
  ) : (
    <div className="h-40 w-60 bg-black flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-16 w-16 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </div>
  )}
  <div className="flex-1  p-4">
  
  <div className="absolute top-0 right-0 m-2 bg-gray-700 text-white px-2 py-1 rounded-full text-xs">
    {review.rating}
  </div>
   <h2 className="text-xl absolute top-0 mt-1 font-semibold text-light">{review.reviewName}</h2>

    <p className="text-gray-500 mt-2">{review.reviewText}</p>

    <div className="absolute bottom-0 mb-3  right-0">
      {review.tags.split(',').map((tag) => (
        <span
          key={tag}
          className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full mr-2">
          {tag.trim()}
        </span>
      ))}
    </div>
  </div>
</div>

  

  );
}

export default ReviewC