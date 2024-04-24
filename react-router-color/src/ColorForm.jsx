import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ColorForm.css";

const ColorForm = ({ colors, addColor }) => {
  const initialState = { name: "", background: "#ffffff" };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [dupMessage, setDupMessage] = useState(false);
  const [blankMessage, setBlankMessage] = useState(false);
  const [button, setButton] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const preventBlanks = (name, background) => {
    if (name.length) {
      preventDuplicates(name, background);
    } else {
      setBlankMessage(true);
      setButton(false);
      setTimeout(() => {
        setBlankMessage(false);
        setButton(true);
      }, 1000);
    }
  };

  const preventDuplicates = (name, background) => {
    const nameArr = colors.filter((color) => {
      return name == color.name;
    });
    const backgroundArr = colors.filter((color) => {
      return background == color.background;
    });
    if (nameArr.length || backgroundArr.length) {
      setDupMessage(true);
      setButton(false);
      setTimeout(() => {
        setDupMessage(false);
        setButton(true);
      }, 1000);
    } else {
      addColor({ ...formData });
      setFormData(initialState);
      navigate("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, background } = formData;

    preventBlanks(name, background);
  };

  return (
    <div className="color-form-full-background">
      <div className="color-form-div">
        <form id="color-form" onSubmit={handleSubmit}>
          <div className="form-element">
            <label htmlFor="name">Color Name: </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter color name here"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="background">Color: </label>
            <input
              id="background"
              type="color"
              name="background"
              value={formData.background}
              onChange={handleChange}
            />
          </div>
          {button && (
            <div className="form-element">
              <button>Make Color</button>
            </div>
          )}
          {dupMessage && (
            <div className="error-message">
              <p>Color already exists. Please make a different color.</p>
            </div>
          )}
          {blankMessage && (
            <div className="error-message">
              <p>Color name cannot be blank.</p>
            </div>
          )}
          <div className="form-element">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ColorForm;
