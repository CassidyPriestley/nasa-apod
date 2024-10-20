import "./NasaCard.css";
import { Link } from "react-router-dom";

export const NasaCard = ({ data }) => {
  const { title, date, copyright, explanation, hdurl } = data;
  return (
    <div className="cardContainer">
      <div className="left">
        <img src={hdurl} alt={title} />
      </div>
      <div className="details">
        <div className="typewriter">
          <h1>{title}</h1>
        </div>
        <p>
          {date} | {copyright}
        </p>
        <p className="explanation">{explanation}</p>
        <Link to="/" className="btnLink">
          <button className="backToHomeBtn">Back Home</button>
        </Link>
      </div>
    </div>
  );
};
