import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js";

describe("SUMAR", () => {
  it("deberia sumar dos numeros", () => {
    //Arrange

    const resultado = sumar(3, 2); //Act(ejecutar)
    expect(resultado).toEqual(5); //Assert(verificar)
  });

  it("deberia sumar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
  //expect(dividir()))
});