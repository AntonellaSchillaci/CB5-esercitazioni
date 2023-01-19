import "./index.css";

const Friend = ({ data, setModalContent, setModalEnabled }) => {
  const { id, image, firstName, lastName, address } = data;

  const onHandleClick = () => {
    setModalContent(id);
    setModalEnabled(true);
  };

  return (
    <div className="Friend" onClick={onHandleClick} id={id} >
      <img src={image} alt={lastName} />
      <div className="friendText">
        <h3>{`${firstName} ${lastName}`}</h3>
        <h4>{address.city}</h4>
      </div>
    </div>
  );
};

export default Friend;