import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./style.css";

const SearchInput = ({
  onChange,
  placeholder,
}: {
  onChange?: (
    e: React.InputHTMLAttributes<HTMLInputElement> | undefined
  ) => void;
  placeholder?: string;
}) => {
  return (
    <div className="searchWrap">
      <IoIosSearch className="searchIcon" />
      <input
        className="searchInput"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
