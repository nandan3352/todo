
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";
import { useMemo } from "react";
import { NewNote } from "./NewNote";
import { useLocalStorage } from "./useLocalStorage";
import  {NoteList}  from "./NoteList";
import { NoteLayout } from "./NoteLayout";
import { Note } from "./Note";
import { EditNote } from "./EditNote";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import NotFoundPage from "./components/NotFound";

function App() {
  const [notes, setNotes] = useLocalStorage("NOTES", []);
  const [tags, setTags] = useLocalStorage("TAGS", []);
  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return { ...note, tags: tags.filter((tag) => note.tagIds.includes(tag.id)) };
    });
  }, [notes, tags]);
  function onCreateNote({ tags, ...data }) {
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
    ]);
  }
  function onUpdateNote(id, { tags, ...data }) {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, ...data, tagIds: tags.map((tag) => tag.id) } : note))
    );
  }
  function onDeleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }
  function addTag(tag) {
    setTags((prev) => [...prev, tag]);
  }
  function updateTag(id, label) {
    setTags((prevTags) =>
      prevTags.map((tag) => (tag.id === id ? { ...tag, label } : tag))
    );
  }
  function deleteTag(id) {
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
  }
  return (
    <Container className="my-4">
      <Routes>
      <Route path="/login" element={<Login/>} />
{/* <Route path="/app" element={<App/>} /> */}
<Route path="/signup" element={<Signup/>} />
        <Route
          path="/app"
          element={<NoteList notes={notesWithTags} availableTags={tags} onUpdateTag={updateTag} onDeleteTag={deleteTag} />}
        />
        <Route
          path="/new"
          element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags} />}
        />
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDelete={onDeleteNote} />} />
          <Route
            path="edit"
            element={<EditNote onSubmit={onUpdateNote} onAddTag={addTag} availableTags={tags} />}
          />
        </Route>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Container>
  );
}
export default App;