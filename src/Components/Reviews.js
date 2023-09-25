import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as api from "../Functions/UserFuns"
import ReviewC from "../Components/ReviewComps/ReviewC"
function Reviews() {
    const [reviews,setReviews] = useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        api.getAllReviews()
        .then(response => {
            setReviews(response.data.$values)
            console.log("los reviews",response.data.$values);
        })
    },[])

    const handleRevClick = (revid)=>{
      navigate(`review/${revid}`)
    }
  return (
    <div>{reviews.map((review)=>{
      return (
        <a
        key={review.reviewName}
        onClick={()=> handleRevClick(review.revId)}        
        >
        <ReviewC review={review}></ReviewC>

        </a>
      )
    })}</div>
  )
}

export default Reviews