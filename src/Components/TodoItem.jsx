import { useState } from "react";
import TodoTextInput from "./TodoTextInput";
import { useDispatch } from "react-redux";
import { noteEdited, noteDeleted, noteCompleted } from "../Features/TodoSlice";

const TodoItem = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const handleSave = (note) => {
    if (note.text !== "") {
      dispatch(noteEdited(note));
    } else {
      dispatch(noteDeleted(note));
    }
    setIsEditing(false);
  };
  const handleDoubleClick = (event) => {
    setIsEditing(true);
  };
  const changeCompleted = () => {
    dispatch(noteCompleted(note));
  };

  return (
    <>
      <div className="flex">
        <input
          type="checkbox"
          className="w-6 h-6 rounded-full mr-4"
          value={note.completed}
          onChange={changeCompleted}
        ></input>
        {!isEditing && (
          <div
            className={
              (note.completed ? "line-through opacity-60" : "") + " w-full"
            }
            onDoubleClick={handleDoubleClick}
          >
            {note.text}
          </div>
        )}
        {isEditing && (
          <TodoTextInput
            mode="editing"
            note={note}
            onSave={handleSave}
          ></TodoTextInput>
        )}
      </div>
    </>
  );
};

export default TodoItem;
