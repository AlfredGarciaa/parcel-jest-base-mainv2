import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero-s");
const second = document.querySelector("#segundo-numero-s");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const first2 = document.querySelector("#primer-numero-m");
const second2 = document.querySelector("#segundo-numero-m");
const form2 = document.querySelector("#multiplicar-form");
const div2 = document.querySelector("#resultado-div2");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first2.value);
  const secondNumber = Number.parseInt(second2.value);

  div2.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});