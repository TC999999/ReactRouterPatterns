import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const initialState = { num1: 0, num2: 0, operation: "add" };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { num1, num2, operation } = formData;
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    let url = `/calc/${operation}/${num1Str}/${num2Str}`;
    setFormData(initialState);
    navigate(url);
  };

  return (
    <div className="HomePage">
      <h1>Welcome to Calculator!</h1>
      <h1>Input your operation below.</h1>
      <h1>Or input into url like /calc/:operation/:number1/:number2</h1>
      <form className="calc-form" onSubmit={handleSubmit}>
        <label htmlFor="num1">First Number: </label>
        <input
          id="num1"
          type="number"
          name="num1"
          value={formData.num1}
          onChange={handleChange}
        />
        <label htmlFor="num2">Second Number: </label>
        <input
          id="num2"
          type="number"
          name="num2"
          value={formData.num2}
          onChange={handleChange}
        />
        <label htmlFor="operation">Operation: </label>
        <select name="operation" id="operation" onChange={handleChange}>
          <option value="add">add</option>
          <option value="subtract">subtract</option>
          <option value="multiply">multiply</option>
          <option value="divide">divide</option>
        </select>
        <button>Calculate</button>
      </form>
    </div>
  );
};

export default Home;
