import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import State from "../../hooks/State";

function StarRating({ giveRating, orderId }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [review, onReviewChangeHandler] = State("");
  const [imageReview, setImageReview] = useState("");

  function handlerImage(e) {
    console.log(e.target.files[0]);
    setImageReview(e.target.files[0]);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(orderId);
    giveRating({
      orderId,
      rating,
      review,
      imageReview,
    });
  }

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              className="star-button"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "gold" : "gray"}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}

      <form onSubmit={onSubmitHandler}>
        <div className="mt-4 mb-3">
          <label
            htmlFor="image-profile"
            className="form-label"
            style={{ fontWeight: '500' }}
          >
            Add Image
          </label>
          <input
            className="form-control"
            type="file"
            id="image-profile"
            name="image-profile"
            accept="image/*"
            onChange={handlerImage}
          />
        </div>
        <textarea
          type="text"
          className="review-input"
          placeholder="Give your review here..."
          value={review}
          onChange={onReviewChangeHandler}
        />
        <button
          id={orderId}
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "15px" }}
        >
          Submit
        </button>
        \{" "}
      </form>
    </div>
  );
}

export default StarRating;
