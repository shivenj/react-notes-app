import { useState } from "react";
import { BiSortUp } from "react-icons/bi";
import { AiOutlineSortAscending } from "react-icons/ai";
import { RiEditBoxLine } from "react-icons/ri";
import { MdOutlineCreateNewFolder } from "react-icons/md";

import "./style.css";

const Sort = ({
  selected,
  onSelected,
}: {
  selected: string;
  onSelected: (e: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sortWrap">
      {isOpen && (
        <div className="sortOverlay" onClick={() => setIsOpen(!isOpen)} />
      )}
      <div className="sortIconWrap" onClick={() => setIsOpen(!isOpen)}>
        {selected && <span className="badge" />}
        <BiSortUp />
      </div>
      {isOpen && (
        <div className="sortOptionWrap">
          <div
            className={`sortOption ${selected === "title" && "active"}`}
            onClick={() => {
              onSelected("title");
              setIsOpen(!isOpen);
            }}
          >
            <AiOutlineSortAscending />
            Sort Title
          </div>
          <div
            className={`sortOption ${selected === "createdAt" && "active"}`}
            onClick={() => {
              onSelected("createdAt");
              setIsOpen(!isOpen);
            }}
          >
            <MdOutlineCreateNewFolder />
            Sort Created at
          </div>
          <div
            className={`sortOption ${selected === "lastEdit" && "active"}`}
            onClick={() => {
              onSelected("lastEdit");
              setIsOpen(!isOpen);
            }}
          >
            <RiEditBoxLine />
            Sort Last edited
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;
