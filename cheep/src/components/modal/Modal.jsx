import { useRef } from 'react';
import "./index.css";

const Modal = ({ children, setModalEnabled }) => {
  const modalRef = useRef(null);

  const onHandleModal = () => setModalEnabled(false);

  const onHandleClick = () => modalRef.current.classList.toggle("modal-on");

  return (
    <div className="modalContainer">
      <div className="Modal" ref={modalRef}>
        <div className="content" onClick={onHandleClick}>{children}</div>
        <div className="overlay" onClick={onHandleModal}></div>
      </div>
    </div>
    
  );
};

export default Modal;