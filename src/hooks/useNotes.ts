import React, { useMemo, useState } from "react";
import { Note } from "../types";
import { sortNotes } from "../utils";

export const useNotes = () => {
  const [modal, setModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | any>({});
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const toggleModal = () => {
    setModal(!modal);
    setSelectedNote({});
  };

  const toggleViewModal = () => {
    setViewModal(!viewModal);
  };

  const onAddNote = (note: Note) => {
    setNotes([...notes, { ...note, id: notes?.length + 1 }]);
  };

  const onEditNote = (note: Note) => {
    const prevNotes = [...notes];
    const findIndex = notes?.findIndex(
      (note: Note) => note?.id === selectedNote?.id
    );
    prevNotes?.splice(findIndex, 1, note);
    setNotes(prevNotes);
  };

  const onDeleteNote = (deletedata: Note) => {
    const prevNotes = [...notes];
    const findIndex = notes?.findIndex(
      (note: Note) => note?.id === deletedata?.id
    );
    prevNotes?.splice(findIndex, 1);
    setNotes(prevNotes);
  };

  const setEditNote = (note: Note) => {
    setSelectedNote(note);
    setModal(true);
  };

  const onSearch = (
    event: React.InputHTMLAttributes<HTMLInputElement> | any
  ) => {
    setSearchValue(event?.target?.value);
  };

  const onSort = (sortKey: string) => {
    if (sortKey === sortValue) {
      setSortValue("");
    } else {
      setSortValue(sortKey);
    }
  };

  const formattedNotes = useMemo(
    () => sortNotes(notes, searchValue, sortValue),
    [notes, searchValue, sortValue]
  );

  return {
    formattedNotes,
    sortValue,
    modal,
    viewModal,
    selectedNote,
    setSelectedNote,
    onSort,
    onSearch,
    setEditNote,
    onDeleteNote,
    onEditNote,
    onAddNote,
    toggleViewModal,
    toggleModal,
  };
};
