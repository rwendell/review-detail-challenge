import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import NewReply from "../components/reviews/newReply/NewReply";
import ReplyCard from "../components/reviews/replyCard/ReplyCard";
import ReviewCard from "../components/reviews/reviewCard/ReviewCard";

const Review = () => {
  const {
    state: { id, author, place, published_at, rating, content },
  } = useLocation();

  const reply = useSelector((state) => state.reply[id]);

  return (
    <>
      <ReviewCard
        id={id}
        author={author}
        place={place}
        published_at={published_at}
        rating={rating}
        content={content}
        expand
      />

      {reply ? (
        <ReplyCard
          id={Date.now()}
          author={reply.author}
          published_at={new Date()}
          content={reply.content}
        />
      ) : (
        <NewReply id={id} author={reply?.author} content={reply?.content} />
      )}
    </>
  );
};

export default Review;
