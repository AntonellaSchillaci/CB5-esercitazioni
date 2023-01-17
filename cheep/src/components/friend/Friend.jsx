import "./index.css";

const Friend = ({ data }) => {
  const { image, firstName, lastName, address } = data;

  return (
    <div className="Friend">
      <img src={image} alt={lastName} />
      <div className="friendText">
        <h3>{`${firstName} ${lastName}`}</h3>
        <h4>{address.city}</h4>
      </div>
    </div>
  );
};

export default Friend;