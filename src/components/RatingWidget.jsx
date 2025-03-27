import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RatingWidget.css';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating > 0) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div className="rating-widget">
      <div className="rating-circles">
        {[1, 2, 3, 4, 5].map((circle) => (
          <div
            key={circle}
            className={`circle ${circle <= (hoveredRating || rating) ? 'selected' : ''}`}
            onMouseEnter={() => setHoveredRating(circle)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(circle)}
          >
            {circle}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={rating === 0} className="submit-btn">Submit</button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
