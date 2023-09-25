import axios from "axios"

const APIURL = "https://localhost:7191/api/User"

const api = axios.create({
    baseURL:APIURL,
    headers:{Authorization: `Bearer ${localStorage.getItem('Token')}`}
});


export const createReview = (createReviewRequest,userId) => api.post(`/create-review/${userId}`, createReviewRequest);
export const createTag = (request) => api.post(`/create-tag/`,request);

export const getReview = (id) => api.get(`/get-review/${id}`)
export const deleteReview = (id) => api.delete('/delete-review', { params: { id } });


export const getComments = (revId,userId,sortStatus)=> api.get(`/get-comments/${revId}/user/${userId}?sortStatus=${sortStatus}`)
export const addComments = (request)=> api.post(`/add-comment`,request);

export const likeComments = (userId,commentId)=> api.put(`/like-comment/${commentId}`,{params:{userId,commentId}})

export const getAllReviews = ()=> api.get("/get-all-reviews")
export const getUserReviews = (userId) => api.get(`/get-all-reviews/${userId}`);
export const getAllTags = ()=> api.get("/get-all-tags")

export const createPiece = (revId,pieceName)=> api.post(`/add-piece/${revId}?pieceName=${pieceName}`)

export const ratePiece = (userId,pieceId,amount)=> api.get(`/get-rating/${userId}/pieceId/${pieceId}?amount=${amount}`);
export const getRevByP = (pieceName)=> api.get(`get-reviews-by-piece?pieceName=${pieceName}`);

export const likeReview = (userId,revId) => api.post(`/like-review/${revId}/user/${userId}`)
export const checkLike = (userId,revId) => api.post(`/check-like/${revId}/user/${userId}`)
