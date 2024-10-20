import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds">
        <div className="btnContainer">
          <Link to="/nasa-apod">
            <button className="enterBtn">See into the stars</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
