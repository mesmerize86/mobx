import "./styles.css";
import TodoList from "./TodoList";
import { TodoStore } from "./TodoStore";
import Display from "./TodoList/display";

export default function App() {
  return (
    <div className="App">
      <Display todoStore={TodoStore} />
      <TodoList todoStore={TodoStore} />
    </div>
  );
}
