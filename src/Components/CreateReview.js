import React, { useContext, useEffect, useState } from 'react';
import Tags from "../Components/CreateReviewComps/Tags"
import * as api from "../Functions/UserFuns"
import AuthContext from '../Context/AuthContext';

import { Textarea,Input } from "@material-tailwind/react";

const CreateReview = () => {
  const [tags,setTags] = useState([]);
  const userId = localStorage.getItem("userId");
  
  const [formData, setFormData] = useState({
    ReviewName: '',
    ReviewedPiece: '',
    Group: '',
    ReviewText: '',
    ImageUrl: '',
    Tags:[],
    Rating: 0,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(()=>{
    setFormData({
      ...formData,
      Tags:[tags]
    })
  },[tags])

  const handleImageUpload = (imageFile) => {
    // Handle image uploads here and set the image URL in formData
  };
  const request = {
    ...formData,
    Tags:tags
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    let revId;

    api.createReview(request,userId)
    .then(response => {
      console.log("Create REV:",response.data.revId)
      api.createPiece(response.data.revId,formData.ReviewedPiece)
    .then(response => console.log(response.data))
    .catch(er => console.log(er))  
    })
    .catch(er=> console.log(er))

    api.createTag(request,revId).then(response => {
      console.log(response.data)
    }).catch(e => console.log(e))

    
  };


  return (
    <div className="bg-dark text-white w-50 mx-auto p-4 border mt-4 mb-4">
      <div><h2>Create Review</h2></div>
      <form onSubmit={handleSubmit}>
       
        <div className="mb-5">
          <label htmlFor="ReviewName" className="form-label">
            Review Name
          </label>
          <input
            type="text"
            className="form-control"
            id="ReviewName"
            name="ReviewName"
            value={formData.ReviewName}
            onChange={handleInputChange}
          />
          
        </div>
        <div className="mb-5">
          <label htmlFor="ReviewedPiece" className="form-label">
            Reviewed Piece
          </label>
          <input
            type="text"
            className="form-control"
            id="ReviewedPiece"
            name="ReviewedPiece"
            value={formData.ReviewedPiece}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="Group" className="form-label">
            Group
          </label>
          <select
          className="form-select"
          id="groupSelector"
          name='Group'
          value={formData.Group}
          onChange={handleInputChange}
        >
          <option value="">Select a Group</option>
          <option value="Movies">Movies</option>
          <option value="Books">Books</option>
          <option value="Games">Games</option>
        </select>
        </div>
        <div className="mb-5">
          <label htmlFor="ReviewText" className="form-label">
            Review Text
          </label>
           <Textarea size="lg" name='ReviewText' value={formData.ReviewText} onChange={handleInputChange}  />
        </div>
        <div className="mb-5">
          <label htmlFor="ImageUrl" className="form-label">
            Image URL
          </label>
          {/* <ImageUploader onImageUpload={handleImageUpload} /> */}
        </div>
        <div className="mb-5 w-25 ml-auto mr-auto">
          <label htmlFor="Rating" className="form-label">
            Rating
          </label>
          <input
            type="number"
            className="form-control"
            id="Rating"
            name="Rating"
            max={10}
            min={0}
            value={formData.Rating}
            onChange={handleInputChange}
          />
        </div>
        <Tags tags={tags} setTags={setTags} value={formData.Tags} handleParentInput={handleInputChange}></Tags>
        <button type="submit" className="btn btn-primary mb-5 mt-5">
          Create Review
        </button>
      </form>
    </div>
  );
};
export default CreateReview