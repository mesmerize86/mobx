import React, { useState } from "react";
import { TodoStoreImpl } from "../TodoStore";

type TodoProps = {
  todoStore: TodoStoreImpl;
};

const TodoList: React.FC<TodoProps> = ({ todoStore }) => {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={() => todoStore.addTodoItem(value)}>
        Submit
      </button>
    </>
  );
};

export default TodoList;
