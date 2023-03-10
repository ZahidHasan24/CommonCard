// import boltIcon from "../assets/images/boltIcon.svg";

// function CommonCard({ data }) {
//   const dateOptions = {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   };
//   const timeOptions = {
//     hour: "2-digit",
//     minute: "2-digit",
//   };
//   const { originType, name, intents, dateUpdated } = data;

//   const isAutomated = originType === "automated";
//   const formatedDate = new Date(dateUpdated).toLocaleDateString(
//     "en-us",
//     dateOptions
//   );
//   const formatedTime = new Date(dateUpdated).toLocaleTimeString(
//     "en-us",
//     timeOptions
//   );

//   return (
//     <div className="card">
//       <div
//         className={`card-header${
//           isAutomated ? " automated-origin" : " manual-origin"
//         }`}
//       >
//         {isAutomated && (
//           <img className="card-icon" src={boltIcon} alt="Automated Origin" />
//         )}
//         <h4>{isAutomated ? "Automated Origin" : "Manual Origin"}</h4>
//       </div>
//       <div className="card-body">
//         <h4 className="card-title">{name}</h4>
//         <p className="card-subtitle">{`${intents} Intents`}</p>
//         <div className="card-button-wrapper">
//           <button className="card-button view-button">View</button>
//           <button className="card-button remove-button">Remove</button>
//         </div>
//       </div>
//       <div className="card-footer">
//         <p className="card-footer-text">{`Last Updated: ${formatedDate} @ ${formatedTime}`}</p>
//       </div>
//     </div>
//   );
// }

// export default CommonCard;

import CardHeader from "../CardHeader";
import CardBody from "../CardBody";
import CardFooter from "../CardFooter";

function CommonCard({ data }) {
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const { originType, name, intents, dateUpdated } = data;

  const isAutomated = originType === "automated";
  const formatedDate = new Date(dateUpdated).toLocaleDateString(
    "en-us",
    dateOptions
  );
  const formatedTime = new Date(dateUpdated).toLocaleTimeString(
    "en-us",
    timeOptions
  );

  return (
    <div className="card">
      <CardHeader isAutomated={isAutomated} />
      <CardBody name={name} intents={intents} />
      <CardFooter formatedDate={formatedDate} formatedTime={formatedTime} />
    </div>
  );
}

export default CommonCard;
