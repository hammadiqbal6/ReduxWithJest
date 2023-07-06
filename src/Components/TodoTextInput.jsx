import { useDispatch } from "react-redux";
import { noteAdded } from "../Features/TodoSlice";
import { useEffect, useState } from "react";

const TodoTextInput = ({ mode, note, onSave }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  useEffect(() => {
    setText(note?.text || "");
  }, [note]);

  const handleKeyPress = (event) => {
    if (event.which === 13) {
      setText(text.trim());
      if (mode === "editing") {
        onSave({ ...note, text });
      } else if (text !== "") {
        dispatch(noteAdded({ text, completed: false }));
        setText("");
      }
    }
  };

  const handleBlur = () => {
    if (mode !== "new") {
      onSave({ ...note, text });
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          className="main-input"
          autoFocus={true}
          value={text}
          placeholder={mode === "new" ? "Add new note" : note.text}
          onBlur={handleBlur}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </>
  );
};

export default TodoTextInput;
