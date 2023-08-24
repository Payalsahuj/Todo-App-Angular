import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() {
    // Initialize with some sample data
    this.todos.push(
      { id: 1, title: 'Learn Html', description: 'Need to learn Html in 3 days', completed: false },
      { id: 2, title: 'Learn CSS', description: 'Need to learn CSS in 3 days', completed: true }
    );
  }

  // Method to get all todos
  getTodos(): Todo[] {
    return this.todos;
  }

  // Method to add a new todo
  addTodo(todo: Todo): void {
    this.todos = [...this.todos, todo];
  }


  updateTodo(updatedTodo: Todo): void {
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos = [
        ...this.todos.slice(0, index),
        updatedTodo,
        ...this.todos.slice(index + 1)
      ]; // Create a new array with the updated todo
    }
  }

  // Method to delete a todo
  deleteTodo(todoId: number): void {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }
}






