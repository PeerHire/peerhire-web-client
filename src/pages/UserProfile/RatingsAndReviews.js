import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./RatingsAndReviews.scss";

function RatingsAndReviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      projectName: "Project A",
      reviewer: "John Doe",
      rating: 4,
      comment: "Great work!",
      date: "2023-05-10",
    },
    {
      id: 2,
      projectName: "Project B",
      reviewer: "Jane Smith",
      rating: 5,
      comment: "Excellent service!",
      date: "2023-06-12",
    },
    {
      id: 3,
      projectName: "Project C",
      reviewer: "Alice Brown",
      rating: 3,
      comment: "Good, but can improve.",
      date: "2023-07-15",
    },
  ]);

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} color={index < rating ? "#ffc107" : "#e4e5e9"} />
        ))}
      </div>
    );
  };

  return (
    <div className="ratings-reviews">
      <div className="header">
        <h2>Ratings and Reviews</h2>
      </div>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-entry">
            <div className="project-name">{review.projectName}</div>
            <div className="review-rating">{renderStars(review.rating)}</div>
            <div className="review-comment">"{review.comment}"</div>
            <div className="reviewer-name">- {review.reviewer}</div>
            <div className="review-date">
              {new Date(review.date).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingsAndReviews;
