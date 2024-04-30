import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Solution = () => {
  const { operation, num1, num2 } = useParams();
  const [success, setSuccess] = useState(false);
  const [zeroDiv, setZeroDiv] = useState(false);
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    if (!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))) {
      if (operation == "add") {
        setAnswer((a) => parseFloat(num1) + parseFloat(num2));
        setSuccess(true);
      } else if (operation == "subtract") {
        setAnswer((a) => parseFloat(num1) - parseFloat(num2));
        setSuccess(true);
      } else if (operation == "multiply") {
        setAnswer((a) => parseFloat(num1) * parseFloat(num2));
        setSuccess(true);
      } else if (operation == "divide") {
        if (parseFloat(num1) === 0 && parseFloat(num2) === 0) {
          setZeroDiv(true);
        }
        setAnswer((a) => parseFloat(num1) / parseFloat(num2));
        setSuccess(true);
      }
    }
  }, []);

  return (
    <div className="solution">
      {success && !zeroDiv && <h1>The solution is {answer}</h1>}
      {!success && (
        <h1>Error! Could not calculate! Invalid operation or numbers! </h1>
      )}
      {zeroDiv && <h1>Do not divide zero by zero!</h1>}
      <Link to="/calc">Go back</Link>
    </div>
  );
};

export default Solution;
