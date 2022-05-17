import PropTypes from "prop-types"
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getDateString } from "../utils";
import "./reviewCard.css";

const getRatingEmoji = (rating) => {
  if (!rating) return "";

  switch (rating) {
    case 1:
      return "⭐";
    case 2:
      return "⭐⭐";
    case 3:
      return "⭐⭐⭐";
    case 4:
      return "⭐⭐⭐⭐";
    case 5:
      return "⭐⭐⭐⭐⭐";

    default:
      return "";
  }
};

const ReviewCard = ({
  id,
  author,
  place,
  published_at,
  rating,
  content,
  expand,
}) => {
  const reviewDate = getDateString(published_at);
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    const to = `/reviews/${id}`;
    const currentReview = {
      state: {
        id,
        author,
        place,
        published_at,
        rating,
        content,
      },
    };

    navigate(to, currentReview);
  }, [id, navigate]);

  return (
    <div
      className={expand ? "review-card expanded" : "review-card"}
      onClick={expand ? null : onClick}
    >
      <h2>{place}</h2>
      <span>{getRatingEmoji(rating)}</span>
      <p className="review-card-content">{content}</p>
      <div className="review-card-footer">
        <p>{author}</p> <p className="review-card-date">{reviewDate}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  expand: PropTypes.bool,
  id: PropTypes.number,
  place: PropTypes.string,
  published_at: PropTypes.string,
  rating: PropTypes.number
};

export default ReviewCard;
