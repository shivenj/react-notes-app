import moment from "moment";
import { RiFileEditLine, RiDeleteBinLine } from "react-icons/ri";
import { Note } from "../../types";

import "./style.css";

const NoteCard = ({
  note,
  onEdit,
  onDelete,
  onViewNote,
}: {
  note: Note;
  onEdit?: () => void;
  onDelete?: () => void;
  onViewNote?: () => void;
}) => {
  const { title, body, created_at } = note;
  return (
    <div className="cardWrap">
      <div className="card" onClick={onViewNote}>
        <h4 className="title">{title}</h4>
        <p className="createDate">
          {moment(created_at).format("DD MMMM YYYY")}
        </p>
        <p className="noteBody">{body}</p>
        <div className="actions">
          <div
            className="actionButton"
            onClick={(e) => {
              e?.stopPropagation();
              onEdit?.();
            }}
          >
            <RiFileEditLine />
          </div>
          <div
            className="actionButton"
            onClick={(e) => {
              e?.stopPropagation();
              onDelete?.();
            }}
          >
            <RiDeleteBinLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
