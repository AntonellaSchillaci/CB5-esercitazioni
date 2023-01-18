import { useState } from "react";
import "./index.css";

const Filter = ({ setFilterState }) => {
  const [inputFilter, setInputFilter] = useState("");

  const onHandleInput = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFilterState(inputFilter);
  };

  return (
    <div>
      <form className="Filter" onSubmit={onHandleSubmit}>
        <input
          className="inputSearch"
          type="text"
          value={inputFilter}
          onChange={onHandleInput}
          placeholder="Search..."
        />
        <input className="buttonSearch" type="submit" value="🔎" />
      </form>
    </div>
  );
};

export default Filter;