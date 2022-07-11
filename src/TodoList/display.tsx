import { observer } from "mobx-react";
import React from "react";
import { TodoStoreImpl } from "../TodoStore";

type Props = {
  todoStore: TodoStoreImpl;
};

const DisplayList: React.FC<Props> = observer(({ todoStore }) => {
  const { status } = todoStore;
  const renderList = todoStore.todos.map((todo) => (
    <div key={todo.id}>
      <p onClick={() => todoStore.toggleTodo(todo.id)}>
        [ {todo.completed ? "x" : ""} ]{todo.title}
      </p>
    </div>
  ));
  return (
    <>
      <h2>List</h2>
      {renderList}
      <p>Completed: {status.completed}</p>
      <p>Remaining: {status.remaining}</p>
    </>
  );
});

export default DisplayList;
