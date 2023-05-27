import moment from "moment";
import { IoCloseSharp } from "react-icons/io5";
import { Note } from "../../types";
import Button from "../Button";
import "./style.css";

const ViewNote = ({
  modal,
  closeModal,
  note,
}: {
  modal: boolean;
  closeModal: () => void;
  note?: Note | any;
}) => {
  const { title, created_at, body } = note;
  return (
    <div className={`modalWrap ${modal ? "block" : "none"}`}>
      <div className="overlay" onClick={closeModal} />
      <div className="modalCard">
        <div className="modalHeader">
          <p className="headerTitle">Note Detail</p>
          <IoCloseSharp className="closeButton" onClick={closeModal} />
        </div>
        <div className="modalBody">
          <p className="detailLable">Note Title</p>
          <h4 className="viewTitle">{title}</h4>
          <p className="detailLable">Created at</p>
          <h4 className="viewTitle">
            {" "}
            {moment(created_at).format("DD MMMM YYYY")}
          </h4>
          <p className="detailLable">Note Description</p>
          <h4 className="viewTitle"> {body}</h4>
        </div>
        <div className="modalFooter" style={{ justifyContent: "center" }}>
          <Button title={"Close"} onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
