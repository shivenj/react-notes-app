import React from "react";
import {
  AddModal,
  Button,
  NoteCard,
  SearchInput,
  Sort,
  ViewNote,
} from "../../component";
import { Note } from "../../types";
import "./style.css";
import { useNotes } from "../../hooks/useNotes";

const Notes = () => {
  const {
    formattedNotes,
    sortValue,
    setEditNote,
    onAddNote,
    onEditNote,
    onDeleteNote,
    onSearch,
    onSort,
    toggleModal,
    toggleViewModal,
    modal,
    viewModal,
    selectedNote,
    setSelectedNote,
  } = useNotes();

  return (
    <section className="notesWrap">
      <div className="notesHeader">
        <div className="notesLeftWrap">
          {/* <h1 className="notesTitle">All Notes</h1> */}
          <SearchInput placeholder="Search Note" onChange={onSearch} />
          <Sort selected={sortValue} onSelected={(e) => onSort(e)} />
        </div>
        <Button title="Add Notes" onClick={toggleModal} />
      </div>
      <div className="notesCardWrap">
        {formattedNotes?.length ? (
          formattedNotes?.map((note: Note) => (
            <NoteCard
              note={note}
              onEdit={() => setEditNote(note)}
              onDelete={() => onDeleteNote(note)}
              onViewNote={() => {
                setSelectedNote(note);
                toggleViewModal();
              }}
            />
          ))
        ) : (
          <p className="notFound">No data found</p>
        )}
      </div>
      {modal ? (
        <AddModal
          modal={modal}
          closeModal={toggleModal}
          addNote={selectedNote?.id ? onEditNote : onAddNote}
          editData={selectedNote}
        />
      ) : null}
      {viewModal ? (
        <ViewNote
          modal={viewModal}
          closeModal={toggleViewModal}
          note={selectedNote}
        />
      ) : null}
    </section>
  );
};

export default Notes;
