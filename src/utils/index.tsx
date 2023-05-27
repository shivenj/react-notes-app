import { Note } from "../types";

export const sortNotes = (
  notes: Note[],
  searchValue: string,
  sortValue: string
) => {
  const filteredNotes = notes?.filter(
    (note: Note) =>
      note?.title?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
      note?.body?.toLowerCase()?.includes(searchValue?.toLowerCase())
  );
  if (sortValue === "title") {
    return filteredNotes?.sort((a: Note, b: Note) =>
      a?.title.localeCompare(b?.title)
    );
  }
  if (sortValue === "createdAt") {
    return filteredNotes?.sort(
      (a: Note, b: Note) => a?.created_at - b?.created_at
    );
  }
  if (sortValue === "lastEdit") {
    return filteredNotes?.sort(
      (a: Note, b: Note) => b?.modified_at - a?.modified_at
    );
  }
  return filteredNotes;
};
