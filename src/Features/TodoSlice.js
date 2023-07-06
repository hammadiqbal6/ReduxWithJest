import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    text: "Add a new Note",
    completed: false,
    id: 0,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    noteAdded: (state, action) => {
      let note = action.payload;
      note.id = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      state.push(note);
    },
    noteDeleted: (state, action) =>
      state.filter((note) => note.id !== action.payload.id),
    noteEdited: (state, action) => {
      console.log("edited");
      state.map((note) => {
        if (note.id === action.payload.id) {
          note = action.payload;
        }
        return note;
      });
      return state;
    },
    noteCompleted: (state, action) => {
      console.log("completed");
      state.map((note) => {
        if (note.id === action.payload.id) {
          note.completed = !note.completed;
        }
        return note;
      });
      return state;
    },
    clearCompleted: (state) => state.filter((note) => !note.completed),
  },
});

export const reducer = todoSlice.reducer;
export const {
  noteAdded,
  noteCompleted,
  noteDeleted,
  noteEdited,
  clearCompleted,
} = todoSlice.actions;
