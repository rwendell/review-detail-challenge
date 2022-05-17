import PropTypes from "prop-types"
import "./reviewContainer.css";

const ReviewContainer = ({ children }) => (
  <div className="review-container">{children}</div>
);

ReviewContainer.propTypes = {
  children: PropTypes.any
};

export default ReviewContainer;
