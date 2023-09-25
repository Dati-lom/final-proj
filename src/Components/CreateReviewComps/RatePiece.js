import React, { useContext } from 'react'
import * as api from "../../Functions/UserFuns"
import AuthContext from '../../Context/AuthContext'
function RatePiece({pieceId}) {
const { userId } = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  const handleRatingChange = (e) => {
    const newRating = parseInt(e.target.value, 10);
    setRating(newRating);
  };

  const handleRateClick = (rating) => {
    api.ratePiece(userId,pieceId,rating)
    .then(response => response.data)
    .catch(er => console.log(er));
    
  };

  return (
    <div>
      <h2>RatePiece</h2>
      <p>Rate "{pieceName}" from 0 to 5:</p>
      <input
        type="number"
        min="0"
        max="5"
        value={rating}
        onChange={()=>handleRatingChange(rating)}
      />
      <button onClick={handleRateClick}>Rate</button>
    </div>
  );
}

export default RatePiece