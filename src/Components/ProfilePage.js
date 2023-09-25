import React, { useEffect, useState } from 'react'
import {useParams,useNavigate, Link} from "react-router-dom"
import * as api from '../Functions/UserFuns'
import * as auth from '../Functions/AuthFuns'
import ReviewCard from './ProfilePageComps/ReviewCard';
import SidePanel from './SidePanel';
function ProfilePage() {
    const {userId} = useParams();
    const [reviews,setReviews] = useState([])
    const [canDelete,setCanDelete] = useState(false);
    const navigate = useNavigate()

    
    useEffect(()=>{
        setCanDelete(userId == localStorage.getItem("userId") || localStorage.getItem("userRole") == "true")
        api.getUserReviews(userId)
        .then(response => {
            setReviews(response.data.$values);
        }).catch(er=>console.log(er))
    },[])

    console.log(reviews);

    const handleDeleteReview = (reviewId) => {
        setReviews((prevReviews) => prevReviews.filter((review) => review.$id !== reviewId));
      };
    const  handleLogout = async ()=>{
    try{
          const response = await auth.logout(localStorage.getItem("userName",""))
          console.log(response.data);
          localStorage.setItem("Token","")
          localStorage.setItem("isAuthed","")
          localStorage.setItem("userName","")
          localStorage.setItem("userId","")
          navigate("/")
        }catch(e){
          console.log(e);
        }
      }


      return (
        (
            <div className="w-full overflow-x-auto">
              <table className="min-w-full bg-dark text-light">
                <thead>
                  <tr>
                  <th className="px-6 py-3  font-medium uppercase ">
                      Review Name
                    </th>
                    <th className="px-6 py-3  font-medium uppercase ">
                      Review Name
                    </th>
                    <th className="px-6 py-3  font-medium uppercase ">
                      Tags
                    </th>
                    <th className="px-6 py-3  font-medium uppercase ">
                      Reviewed Piece
                    </th>
                    <th className="px-6 py-3"></th> {/* Empty header for delete button */}
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr key={review.revId}>
                         <td className="px-6 py-4 whitespace-nowrap">{<Link to={`/review/${review.revId}`}>{review.revId}</Link>}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{review.reviewName}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{review.tags}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{review.reviewedPiece}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {canDelete && 
                        <div>
                        <button
                          onClick={() => handleDeleteReview(review.revId)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                        </div>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
          )
}

export default ProfilePage