import React, { useState } from 'react'

function MarkDown({handleInputChange,text}) {
    

  return (
    <div>   
        <textarea
          className="form-control"
          rows="5"
          placeholder="Enter your text here"
          value={text}
          onChange={(e) => handleInputChange(e.target.value)}
        ></textarea>
      </div>
  )
}

export default MarkDown