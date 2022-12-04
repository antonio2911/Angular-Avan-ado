import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from './task';

export interface State {
  todoList: Task[];
}

export const state: State = {
  todoList: [],
};

export class Store {
  //subjetc => guarda o stado da app
  private subjetc = new BehaviorSubject<State>(state);
  private store = this.subjetc.asObservable();

  get value() {
    return this.subjetc.value;
  }

  set(name: string, state: any) {
    this.subjetc.next({
      ...this.value,
      [name]: state,
    });
  }

  public getTodoList(): Observable<Task[]> {
    return this.store.pipe(map((store) => store.todoList));
  }
}
