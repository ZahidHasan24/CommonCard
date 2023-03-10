function CommonButton({ children, className }) {
  return <button className={`card-button ${className}`}>{children}</button>;
}

function ButtonGroup({ children }) {
  return <div className="card-button-wrapper">{children}</div>;
}

function CardBody({ name, intents }) {
  return (
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <p className="card-subtitle">{`${intents} Intents`}</p>
      <ButtonGroup>
        <CommonButton className="view-button">View</CommonButton>
        <CommonButton className="remove-button">Remove</CommonButton>
      </ButtonGroup>
    </div>
  );
}

export default CardBody;
