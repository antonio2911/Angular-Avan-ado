import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { Observable, Observer } from "rxjs";
import { Task } from "./task";
import { TasksService } from "./todo.service";
import { Store } from "./todo.store";

const todoList: Task[] = [
  { id: 1, nome: "Reponder E-mails", iniciado: false, finalizado: true },
];

//simular um observable de um objeto comum para metodos http
function createResponse(body) {
  return Observable.create((observer: Observer<any>) => {
    observer.next(body);
  });
}

//criada apenas para substituir o get do http para o get dessa classe pelo useClasse
class MockHttp {
  get() {
    return createResponse(todoList);
  }
}

describe("Task Service", () => {
  let service: TasksService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttp },
        TasksService,
        Store,
      ],
    });
    http = bed.get(HttpClient);
    service = bed.get(TasksService);
  });

  it("deve retornar uma lista de tarefas", () => {
    spyOn(http, "get").and.returnValue(createResponse(todoList));
    service.getTodoList$.subscribe((listaDeTarefas) => {
      expect(listaDeTarefas.length).toBe(1);
      console.log("Lista de tarefas", listaDeTarefas);
      console.log("todolist =>", todoList);
      expect(listaDeTarefas).toEqual(todoList);
    });
  });
});
