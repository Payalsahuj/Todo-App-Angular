import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) {}

  markAsCompleted(todo: Todo): void {
    todo.completed = true;
    this.todoService.updateTodo(todo);
  }

  deleteTodo(todoId: number): void {
    this.todoService.deleteTodo(todoId);
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo);
  }
}

