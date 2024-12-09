import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo/todo.model';

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);
export const loadTodosError = createAction(
  '[Todo] Load Todos Error',
  props<{ error: string }>()
);

export const addTodo = createAction('[Todo] Adding Todo', props<{ todo: Todo }>());
export const updateTodo = createAction('[Todo] Update Todo', props<{ id: number, todo: Todo }>());
