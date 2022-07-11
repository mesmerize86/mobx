import { action, computed, makeAutoObservable, observable } from "mobx";
import { v4 as uuidv4 } from "uuid";

type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

export class TodoStoreImpl {
  todos: TodoItem[] = [];

  constructor() {
    makeAutoObservable(this, {
      todos: observable,
      addTodoItem: action,
      toggleTodo: action,
      status: computed
    });
  }

  addTodoItem(title: string) {
    const item = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.todos.push(item);
  }

  toggleTodo(id: number) {
    const index = this.todos.findIndex((i) => i.id === id);
    if (index > -1) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  }

  get status() {
    let completed = 0,
      remaining = 0;
    this.todos.map((todo) => {
      if (todo.completed) {
        completed++;
      } else {
        remaining++;
      }
    });

    return { completed, remaining };
  }
}

export const TodoStore = new TodoStoreImpl();
