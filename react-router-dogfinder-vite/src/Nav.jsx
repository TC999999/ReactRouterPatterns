import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ dogs }) => {
  return (
    <div className="navbar">
      {dogs.map((dog) => {
        return <Link to={`/dogs/${dog.src}`}>{dog.name}</Link>;
      })}
    </div>
  );
};

export default Nav;
