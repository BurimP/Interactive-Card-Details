import img from "../images/icon-complete.svg";

const Confirmation = (props) => {
  const handleButtonClick = () => {
    props.onButtonClick(); // Invoke the onButtonClick callback function
  };
  return (
    <div className={props.confirmDelete}>
      <img alt="" src={img} className="complete-img" />
      <h1>THANK YOU</h1>
      <p className="paragraph">We&apos;ve added your card details</p>
      <button
        className="confirm-btn"
        onClick={() => {
          handleButtonClick();
          props.handleConfirmDelete();
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Confirmation;
