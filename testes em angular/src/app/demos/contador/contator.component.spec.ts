import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ContadorComponent } from "./contator.component";

describe("ContadorComponete", () => {
  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;
  //Estrutura padrão
  beforeEach(() => {
    //configura o modulo
    TestBed.configureTestingModule({
      declarations: [ContadorComponent],
    });
    //instanciação da class
    fixture = TestBed.createComponent(ContadorComponent);
    //utilização das propriedades do component
    component = fixture.componentInstance;

    component.valor = 0;
  });

  it("Deve incrementar corretamente", () => {
    component.incrementar();
    expect(component.valor).toBe(1);
  });

  it("Deve decrementar corretamente", () => {
    component.incrementar();
    expect(component.valor).toBe(1);
    component.decrementar();
    expect(component.valor).toBe(0);
  });

  it("não deve decrementar a baixo do valor permitido", () => {
    component.incrementar();
    expect(component.valor).toBe(1);
    component.decrementar();
    expect(component.valor).toBe(0);
    component.decrementar();
    component.decrementar();
    component.decrementar();
    component.decrementar();
    expect(component.valor).toBe(0);
  });

  it("Não deve incrementar a cima do valor permitido", () => {
    for (var i = 0; i < 200; i++) {
      component.incrementar();
    }
    expect(component.valor).toBe(100);
  });
});
