import React, { useEffect, useState } from 'react'
import * as api from "../../Functions/UserFuns"


function Tags({tags,setTags}) {  
  const [tag, setTag] = useState("");
  
  const [suggestedTags, setSuggestedTags] = useState([]); // Example suggested tags

  useEffect(()=>{
    api.getAllTags()
    .then(response => {
      
      console.log("FETCHED TAGS: ",response.data.$values)
      setSuggestedTags(response.data.$values)
    })
      .catch((er)=>console.log(er))
  },[])

  const handleInputChange = (e) => {
    setTag(e.target.value);
  };

  const handleAddTag = () => {
    if (tag.trim() !== '' && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((t) => t !== tagToRemove);
    setTags(updatedTags);
  };

  const handleSuggestedTagClick = (suggestedTag) => {
    if(!tags.includes(suggestedTag))
    setTags([...tags, suggestedTag]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleAddTag}
            >
              Add Tag
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Type tags..."
            value={tag}
            onChange={handleInputChange}
          />
        </div>
          
          <div className="mt-3">
            {tags.map((t, index) => (
              <span key={index} className="badge bg-secondary m-1">
                {t}{' '}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => handleRemoveTag(t)}
                />
              </span>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <div className="border p-3">
            <h5>Suggested Tags</h5>
            {suggestedTags.map((suggestedTag) => (
              <button
                key={suggestedTag}
                type="button"
                className="btn btn-outline-secondary m-1"
                onClick={() => handleSuggestedTagClick(suggestedTag)}
              >
                {suggestedTag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags