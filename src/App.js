import { useState } from "react";
import CardContainer from "./containers/CardContainer";
import { sampleData } from "./data/sampleData";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredData = sampleData.filter((data) =>
    data.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <CardContainer
      searchValue={searchValue}
      handleSearchInputChange={handleSearchInputChange}
      filteredData={filteredData}
    />
  );
}

export default App;
