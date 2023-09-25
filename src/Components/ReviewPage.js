import React, { useContext, useEffect, useState } from 'react'
import AuthContext from "../Context/AuthContext"
import {useParams} from "react-router-dom"
import * as api from "../Functions/UserFuns"

import Comments from './Comments';
function ReviewPage() {
  const {revId} = useParams();
  const [comments,setComments] = useState([]);
  const [revObj,setRevObj] = useState();
  const [piece,setPiece] = useState();
  const [rate,setRate] = useState(0);

  const handleInputChange =(e)=>{
    const {value} = e.target;
    setRate(value);
  }

  
  useEffect(()=>{
    console.log("HERE: ",revId);
    api.getReview(revId)
    .then(response =>{
      setRevObj(response.data)
      console.log("HERE",response.data);
    })
    .catch(er=> console.log(er))

    api.getComments(revId,localStorage.getItem("userId") ,1)
    .then(response => {
      console.log(response.data);
      setComments(response.data.$values)
    }).catch(er => console.log(er))
  },[])

  const handleRate = ()=>{
    api.ratePiece(localStorage.getItem("userId"),revObj.pieceFk,rate)
    .then(response => console.log(response))
    .catch(er=>console.log(er))
  }

  console.log("revObj: ",revObj);
  return (
    <div className="bg-dark min-h-screen py-6 flex flex-col items-center justify-center">
  {revObj != null?  
  (<div className="max-w-xl w-full bg-gray-800 border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-6">
      <div className="relative">
        {revObj.imageUrl ? (
          <img
            src={revObj.imageUrl}
            alt={`Image for ${revObj.reviewName}`}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-24 w-24 text-gray-400"
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

        <div className="absolute top-0 left-0 m-4 bg-gray-700 text-white px-2 py-1 rounded-full text-xs">
          {revObj.reviewedPiece}
        </div>
        <div className="absolute top-0 right-0 m-4 bg-dark text-white px-2 py-1 rounded-full text-xs">
          {revObj.group}
        </div>
      </div>

      <div className="p-4">
        <div className="text-lg font-semibold text-gray-200">
          {revObj.reviewName}
        </div>
        <p className="text-gray-300 mt-2">{revObj.reviewText}</p>

        <div className="mt-4">
          {revObj.tags.split(',').map((tag) => (
            <span
              key={tag}
              className="bg-gray-500 text-gray-800 text-sm px-2 py-1 rounded-full mr-2"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-dark min-h py-6 flex flex-row f ">
      
      <div className="mb-1 w-30 ml-2  flex flex-row ">
          
          <input
            type="number"
            className="form-control"
            id="Rating"
            name="Rating"
            max={5}
            min={0}
            value={rate}
            onChange={handleInputChange}
          />
          
        </div>
        <div class="flex flex-col items-center">
  <label for="Rating" class="text-light ml-2">Rate Piece</label>
  <button class="bg-dark rounded text-white mt-2" onClick={handleRate}>Rate</button>
</div>
      </div>
      
    </div>):(<div>Loading ...</div>)
}

<Comments comments={comments} setComments={setComments} revId={revId}></Comments>
</div>

    );
}

export default ReviewPage