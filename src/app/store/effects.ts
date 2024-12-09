import { inject, Injectable } from "@angular/core";
import { ToDoService } from "../services/todoservice.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTodos, loadTodosError, loadTodosSuccess } from "./actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class TodoEffects { 

    actions$ = inject(Actions);
    todoService = inject(ToDoService)
    loadTodos$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadTodos),
            mergeMap(() =>
                this.todoService.getAll().pipe(
                    map(todos => loadTodosSuccess({todos})),
                    catchError(error => of(loadTodosError({error : error.message })))
                )

            )
        )
    );
}