import img from "../images/icon-complete.svg";

const Confirmation = (props) => {
  return (
    <div className={props.confirmDelete}>
      <img alt="" src={img} className="complete-img" />
      <h1>THANK YOU</h1>
      <p className="paragraph">We&apos;ve added your card details</p>
      <button className="confirm-btn" onClick={props.handleConfirmDelete}>
        Continue
      </button>
    </div>
  );
};

export default Confirmation;
