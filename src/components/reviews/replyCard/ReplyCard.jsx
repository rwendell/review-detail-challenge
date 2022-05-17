import PropTypes from "prop-types"
import { useSelector } from "react-redux";
import { useState } from "react";
import { getDateString } from "../utils";
import "./replyCard.css";
import NewReply from "../newReply/NewReply";

const ReplyCard = ({ id, author, published_at, content }) => {
  const replyDate = getDateString(published_at);
  const reply = useSelector((state) => state.reply[id]);

  const [isEdit, setEdit] = useState(false);

  return isEdit ? (
    <NewReply
      id={id}
      author={reply?.author || author}
      content={reply?.content || content}
      setEdit={setEdit}
    />
  ) : (
    <div className="reply-card">
      <div className="reply-card-content">
        {reply?.content || content}
        <div onClick={() => setEdit(true)} className="reply-card-edit">
          Edit This Reply
        </div>
      </div>
      <div className="reply-card-footer">
        <p>{reply?.author || author}</p>{" "}
        <p className="reply-card-date">{replyDate}</p>
      </div>
    </div>
  );
};

ReplyCard.propTypes = {
  author: PropTypes.any,
  content: PropTypes.any,
  id: PropTypes.any,
  published_at: PropTypes.any
}

export default ReplyCard;
