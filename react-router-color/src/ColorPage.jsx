import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./ColorPage.css";

const ColorPage = ({ colors }) => {
  const { name } = useParams();
  const [color, setColor] = useState({ name: "", background: "" });
  const [lightText, setLightText] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    function loadColor() {
      let data = colors.filter((color) => {
        return color.name == name;
      });
      if (!data.length) {
        navigate("/");
      } else {
        setColor(data[0]);
        let colorHexArr = data[0].background.slice(1).split("");
        let numArr = colorHexArr.filter((n) => {
          if (!isNaN(n)) return n;
        });
        let letterArr = colorHexArr.filter((l) => {
          if (isNaN(l)) return l;
        });
        if (letterArr.length > numArr.length) {
          setLightText(false);
        } else {
          setLightText(true);
        }
      }
    }
    loadColor();
  }, []);

  let classes = `color-page ${lightText ? "light-text" : ""}`;

  return (
    <div className={classes} style={{ backgroundColor: color.background }}>
      <div className="description">
        <h1 className="title">This is {color.name}.</h1>
        <h1>Isn't it nice?</h1>
        <h1>
          <Link to="/colors">Go back</Link>
        </h1>
      </div>
    </div>
  );
};

export default ColorPage;
