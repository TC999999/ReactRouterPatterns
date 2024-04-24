import { useParams } from "react-router-dom";

const DogDetail = ({ dogs }) => {
  const { name } = useParams();

  const dog = dogs.filter((val) => {
    if (val.src === name) {
      return val;
    }
  });
  const info = dog[0];

  return (
    <div className={`dog-info-${name}`}>
      <h2>Name: {info.name}</h2>
      <h3>Age: {info.age}</h3>
      <img
        className="dog-img"
        src={`../${name}.jpg`}
        alt={`photo of ${name}`}
      />
      <h3>Facts:</h3>
      <ul>
        {info.facts.map((fact) => {
          return <li>{fact}</li>;
        })}
      </ul>
    </div>
  );
};

export default DogDetail;
