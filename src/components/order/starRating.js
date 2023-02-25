import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import State from '../../hooks/State'

function StarRating({giveRating, orderId}) {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [review, onReviewChangeHandler] = State('');

    function onSubmitHandler(event){
        event.preventDefault();
        console.log(orderId)
        giveRating({
            orderId, rating, review
        })
    }

    return (
        <div>
        {
            [...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={ratingValue}>
                        <input type='radio'
                            name='rating'
                            className='star-button'
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            className='star'
                            color={ratingValue <= (hover || rating) ? 'gold' : 'gray'}
                            size={30}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })

        }
            <p>The Rating is {rating}</p>
            <form onSubmit={onSubmitHandler}>
                <textarea type="text" 
                className='review-input' 
                placeholder="Give your review here..."  
                value={review}
                onChange={onReviewChangeHandler}
                />
                
                <button id={orderId} 
                type='submit' 
                className='btn btn-primary' 
                style={{ marginTop: "15px" }}
                
                >Submit</button>
\            </form>
            
        </div>
    )
}

export default StarRating
