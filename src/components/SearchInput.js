import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchInput = () => {
  return (
    <div className="relative w-1/2">
      <input
        type="text"
        placeholder="Search by keyword"
        className="w-full pr-4 pl-10 py-3.5 border border-gray-400 rounded-full outline-gray-500"
      />
      <div className="absolute -translate-y-1/2 top-1/2 left-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500" />
      </div>
    </div>
  );
};

export default SearchInput;
