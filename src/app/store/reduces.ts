import { Todo } from '../models/todo/todo.model';
import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  loadTodos,
  loadTodosError,
  loadTodosSuccess,
  updateTodo,
} from './actions';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string;
}
export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: '',
};
export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({ ...state, todos: [], loading: true })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
  })),
  on(loadTodosError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(addTodo, (state, { todo }) => {
    return { ...state, todos: [...state.todos, todo] };
  })
  ,
  on(updateTodo, (state, { id, todo }) => {
    const index = state.todos.findIndex(item=> item.id === id);

    return { ...state, todos: [ ...state.todos.slice(0, index),
        {...state.todos[index], ...todo},
        ...state.todos.slice(index + 1)] };
  })
);
