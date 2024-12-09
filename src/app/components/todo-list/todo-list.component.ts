import { Component, inject, OnInit } from '@angular/core';
import { AppState } from '../../store/store';
import { Store } from '@ngrx/store';
import { todoSelector } from '../../store/selector';
import { addTodo, loadTodos, updateTodo } from '../../store/actions';
import { Todo } from '../../models/todo/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  standalone: true,
})
export class TodoListComponent implements OnInit {
  private store = inject(Store<AppState>);
  todos$ = this.store.select(todoSelector);
  isLoading$ = this.store.select((state) => state.todo.loading);

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.store.dispatch(loadTodos());
  }

  addTodo(index: number) {
    const todo: Todo = {
      id: index,
      title: 'New Todo',
      completed: false,
      userId: 1,
    };
    this.store.dispatch(addTodo({ todo }));
  }

  complete(todo: Todo) {
    this.store.dispatch(
      updateTodo({ id: todo.id, todo: { ...todo, completed: true } }),
    );
  }
}
