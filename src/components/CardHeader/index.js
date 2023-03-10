import boltIcon from "../../assets/images/boltIcon.svg";
function CardHeader({ isAutomated }) {
  return (
    <div
      className={`card-header${
        isAutomated ? " automated-origin" : " manual-origin"
      }`}
    >
      {isAutomated && (
        <img className="card-icon" src={boltIcon} alt="Automated Origin" />
      )}
      <h4>{isAutomated ? "Automated Origin" : "Manual Origin"}</h4>
    </div>
  );
}

export default CardHeader;
