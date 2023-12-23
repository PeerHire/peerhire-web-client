import React, { useState } from 'react';
import './RatingsAndReviews.scss';

function RatingsAndReviews() {
    const [reviews, setReviews] = useState([
        { id: 1, reviewer: 'John Doe', rating: 4, comment: 'Great work!' },
        // ... other reviews
    ]);

    // Functionality to add new reviews could be added here

    return (
        <div className="ratings-reviews">
            <h2>Ratings and Reviews</h2>
            <div className="reviews-list">
                {reviews.map(review => (
                    <div key={review.id} className="review-entry">
                        <div className="review-rating">Rating: {review.rating} / 5</div>
                        <div className="review-comment">{review.comment}</div>
                        <div className="reviewer-name">{review.reviewer}</div>
                    </div>
                ))}
            </div>
            {/* Add functionality to submit new reviews */}
        </div>
    );
}

export default RatingsAndReviews;
