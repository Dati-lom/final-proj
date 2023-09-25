import React from 'react'

  function CommentC({comment}) {

    return (
      <div className="p-2 mt-2 focus:outline-1 text-light focus:outline-light font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-[60vw] bg-dark">
        
      <div className="text-bolder">{comment.username}</div>
      <div className="  ">{comment.text}</div>
    </div>
    )
  }

export default CommentC