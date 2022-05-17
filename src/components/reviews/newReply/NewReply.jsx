import PropTypes from "prop-types"
import "./newReply.css";
import { useDispatch } from "react-redux";
import { update } from "../../../redux/replySlice";

const NewReply = ({ id = null, content = "", author = "", setEdit }) => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    dispatch(
      update({ id, content: event.target[0].value, author: target[1].value })
    );
    target.reset();
    if (setEdit) {
      setEdit(false);
    }
  };

  return (
    <div className="new-reply">
      <h2>Write a reply:</h2>
      <form className="new-reply-form" onSubmit={handleSubmit}>
        <textarea className="new-reply-content" defaultValue={content} />
        <label htmlFor="name">
          <span> Name: </span>
          <input id="name" type="text" defaultValue={author} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

NewReply.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.any,
  setEdit: PropTypes.func
}

export default NewReply;
