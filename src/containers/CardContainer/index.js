import CommonCard from "../../components/CommonCard";

function CardContainer({ searchValue, handleSearchInputChange, filteredData }) {
  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="card-container">
        {filteredData?.map((data) => (
          <CommonCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
