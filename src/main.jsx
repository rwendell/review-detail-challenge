import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css";
import "typeface-roboto";
import { Provider } from "react-redux";
import Reviews from "./routes/Reviews";
import Header from "./components/header/Header";
import Review from "./routes/Review";
import store from "./redux/store";
import ReviewContainer from "./components/reviews/reviewContainer/ReviewContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <ReviewContainer>
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews/:reviewId" element={<Review />} />
        </Routes>
      </ReviewContainer>
    </BrowserRouter>
  </Provider>
);
