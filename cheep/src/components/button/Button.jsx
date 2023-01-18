import "./index.css"

const Button = ({ isModalEnabled, func }) => {
  return isModalEnabled ? (
    <button onClick={func} className='Button passive'>
      Close
    </button>
  ) : (
    <button onClick={func} className="Button active">
      New Post
    </button>
  );
};
  
  export default Button;