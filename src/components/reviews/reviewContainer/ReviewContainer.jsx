import useSWR from "swr";
import ReviewCard from "../reviewCard/ReviewCard";
import "./reviewContainer.css";
import reviewDataFallback from "../../../../public/reviews.json";

const reviewFetcher = (...args) =>
  fetch(...args, {
    headers: {
      "secret-key":
        "$2b$10$AWJrE/KQqljumaFi8HDlEebQpEihtUjjTkQ8Q.sT1M/954siu8Llu",
    },
  }).then((res) => res.json());

const ReviewContainer = () => {
  // either the api or useSWR is being really flaky, using fallback for now
  /* const { data: reviewData, error: reviewError } = useSWR(
    "https://api.jsonbin.io/b/6283742a38be296761091ca0",
    reviewFetcher

    if (reviewError) {
      return <div className="review-container-error">error fetching data</div>;
    }
  ); */

  const reviewData = reviewDataFallback;

  return (
    <div className="review-container-success">
      {reviewData.map(
        ({ id, author, place, published_at, rating, content }) => (
          <ReviewCard
            id={id}
            author={author}
            place={place}
            published_at={published_at}
            rating={rating}
            content={content}
          />
        )
      )}
    </div>
  );
};

export default ReviewContainer;
