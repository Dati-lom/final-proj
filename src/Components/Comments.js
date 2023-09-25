import React,{useEffect, useState} from 'react'
import * as api from '../Functions/UserFuns'
import CommentC from './ReviewComps/CommentC';

function Comments({comments,setComments,revId}) {
  const [comment, setComment] = useState("");
  const userId = localStorage.getItem("userId")

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  
  const handlePostComment= (commentText) =>{
    const commentDto = {text:comment,ReviewId:revId,UserId:userId}
    api.addComments(commentDto)
    .then(response => {
      console.log(response.data);
      setComments([...comments,response.data])
    }).catch(er => console.log(er))
  }

  return (
    <div>
        <div className="flex justify-between mt-5">
        </div>
        <textarea
          placeholder="Add your comment..."
          className="p-2 focus:outline-1 text-light focus:outline-light font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-[60vw] bg-dark"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="text-sm font-semibold absolute bg-light w-fit text-dark py-2 rounded px-3"
            onClick={handlePostComment}
          >
            Post
          </button>

        </div>
        <div>
          {comments.map(c=> {return (
            <>
              <CommentC comment={c}></CommentC>
            </>
          );})}
        </div>
        
        </div>
      
  )
}

export default Comments