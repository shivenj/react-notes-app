import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Note } from "../../types";
import Button from "../Button";
import Input from "../Input";

const AddModal = ({
  modal,
  closeModal,
  addNote,
  editData,
}: {
  modal: boolean;
  closeModal: () => void;
  addNote: (e: Note) => void;
  editData?: Note | any;
}) => {
  const [noteData, setNoteData] = useState({
    title: "",
    body: "",
  });
  const disabled = !noteData?.title || !noteData?.body;

  useEffect(() => {
    if (editData?.id) {
      setNoteData(editData);
    }
  }, [editData]);

  const onChange = (event: any) => {
    const name = event?.target?.name;
    const value = event?.target?.value;
    setNoteData({ ...noteData, [name]: value });
  };

  const onAddNote = () => {
    if (editData?.id) {
      addNote({ ...noteData, modified_at: new Date() });
    } else {
      addNote({ ...noteData, created_at: new Date(), modified_at: new Date() });
    }
    closeModal();
    setNoteData({
      title: "",
      body: "",
    });
  };

  return (
    <div className={`modalWrap ${modal ? "block" : "none"}`}>
      <div className="overlay" onClick={closeModal} />
      <div className="modalCard">
        <div className="modalHeader">
          <p className="headerTitle">
            {editData?.id ? `Edit Note` : `Add Notes`}
          </p>
          <IoCloseSharp className="closeButton" onClick={closeModal} />
        </div>
        <div className="modalBody">
          <Input
            label="Title"
            placeholder="Title"
            name="title"
            value={noteData?.title}
            onChange={onChange}
          />
          <Input
            label="Description"
            placeholder="Description"
            textArea
            name="body"
            value={noteData?.body}
            onChange={onChange}
          />
        </div>
        <div className="modalFooter">
          <Button title="Discard" secondary onClick={closeModal} />
          <Button
            title={editData?.id ? "Edit" : "Add"}
            onClick={onAddNote}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default AddModal;
