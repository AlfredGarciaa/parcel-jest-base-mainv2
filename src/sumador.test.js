import sumar from "./sumador.js";
import dividir from "./divididor.js"
import multiplicar from "./multiplicador.js";
import restar from "./restador";

describe("SUMAR", () => {
  it("deberia sumar dos numeros", () => {
    //Arrange

    const resultado = sumar(3, 2); //Act(ejecutar)
    expect(resultado).toEqual(5); //Assert(verificar)
  });

  it("deberia sumar dos numeros", () => {
    expect(dividir(3, 2)).toEqual(1.5);
  });

  it("deberia sumar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
  //expect(dividir()))
});

describe("FUNCIONES EXTRAS", () => {
  it("deberia dividir dos numeros", () => {
    expect(dividir(20, 5)).toEqual(4);
  });

  it("deberia restar dos numeros", () => {
    expect(restar(12, 17)).toEqual(-5);
  });

});