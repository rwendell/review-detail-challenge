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

const ReviewCard = ({ id, author, place, published_at, rating, content }) => {
  const reviewDate = new Date(published_at).toLocaleDateString();

  return (
    <div className="review-card">
      <h2>{place}</h2>
      <span>{getRatingEmoji(rating)}</span>
      <p className="review-card-content">{content}</p>
      <div className="review-card-footer">
        <p>{author}</p> <p className="review-card-date">{reviewDate}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
