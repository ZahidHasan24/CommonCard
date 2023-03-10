function CardFooter({ formatedDate, formatedTime }) {
  return (
    <div className="card-footer">
      <p className="card-footer-text">{`Last Updated: ${formatedDate} @ ${formatedTime}`}</p>
    </div>
  );
}
export default CardFooter