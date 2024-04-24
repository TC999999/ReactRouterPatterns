import { Link } from "react-router-dom";
import "./ColorsList.css";

const ColorsList = ({ colors }) => {
  return (
    <div className="color-factory">
      <div className="new-color-link">
        <h1>Welcome to the Color Factory!</h1>
        <h3>
          <Link to="/colors/new">Make a Color</Link>
        </h3>
      </div>
      <div className="color-list">
        <ul>
          {colors.map((color) => {
            return (
              <li className="color-link" key={color.name}>
                <Link to={`/colors/${color.name}`}>{color.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ColorsList;
