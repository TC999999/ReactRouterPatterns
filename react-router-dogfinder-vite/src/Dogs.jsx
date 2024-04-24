import { Link } from "react-router-dom";
import "./Dogs.css";

const Dogs = ({ dogs }) => {
  return (
    <div className="dogs">
      <h2>Here are all of our dogs!</h2>
      <div className="dogs-list">
        {dogs.map((dog) => {
          return (
            <div className={"dog-link"} key={dog.src}>
              <h4>
                <Link to={`/dogs/${dog.src}`}>{dog.name}</Link>
              </h4>
              <img
                className="dog-img"
                src={`./${dog.src}.jpg`}
                alt={`photo of ${dog.name}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dogs;
