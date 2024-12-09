import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo/todo.model';

@Injectable({ providedIn: 'root' })
export class ToDoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }
}
