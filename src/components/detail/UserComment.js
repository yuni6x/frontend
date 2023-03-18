import React from "react";

function UserComment({ rating, review, imageReview, Penyewa }) {
  return (
    <>
    {
        console.log(imageReview)
    }
      <h3>{rating}</h3>
      <h3>{review}</h3>
      {
        imageReview ?
        <img src={`http://localhost:3005/`+imageReview} alt="review" width={40}></img> : ''
      }
      <h3>{Penyewa?.fullName}</h3>
    </>
  );
}

export default UserComment;
