import React from "react";
import { FaStar } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

function UserComment({ rating, review, imageReview, Penyewa, image, order }) {
  console.log(order);
  console.log(image);
  console.log(Penyewa.img)
  return (
    <div className="mb-3">
      <div className="comment-header d-flex align-items-center ">
        {Penyewa.img ? (
          <img src={`http://localhost:3005/` + Penyewa.img} alt="review"></img>
        ) : (
          <img
            src={
              "https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png"
            }
            alt="review"
          ></img>
        )}
        <div className="m-2">
          <p className="m-0">{Penyewa?.fullName}</p>
          <div key={order.id}>
            {[
              Array(rating)
                .fill()
                .map((index) => {
                  return (
                    <FaStar size={15} key={uuidv4()} style={{ color: "gold" }} />
                  );
                }),
            ]}
          </div>
        </div>
      </div>
      <div className="comment-body" style={{ marginLeft: "57px" }}>
        <p>{review}</p>
        {imageReview ? (
          <img
            src={`http://localhost:3005/` + imageReview}
            alt="review"
            width={200}
          ></img>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UserComment;
