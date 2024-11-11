import "./style.css";

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  console.log("id", data);
  let elemento = ev.target.className;
  if (elemento != "andar") {
    console.log(elemento);
    return;
  }
  ev.target.appendChild(document.getElementById(data));
  let pesos = document.getElementById("pesos");
  let andar1 = document.querySelectorAll("#andar1>div");
  andar1 = Array.from(andar1);
  let andar2 = document.querySelectorAll("#andar2>div");
  andar2 = Array.from(andar2);
  let andar3 = document.querySelectorAll("#andar3>div");
  andar3 = Array.from(andar3);
  let peso1 = andar1.reduce((acc, cur) => {
    return acc + parseInt(cur.innerHTML);
  }, 0);
  let peso2 = andar2.reduce((acc, cur) => {
    return acc + parseInt(cur.innerHTML);
  }, 0);
  let peso3 = andar3.reduce((acc, cur) => {
    return acc + parseInt(cur.innerHTML);
  }, 0);
  if (
    peso1 == peso2 &&
    peso2 == peso3 &&
    andar1.length == 1 &&
    andar2.length == 2 &&
    andar3.length == 3
  ) {
    pesos.innerHTML = "Pirâmide Equilibrada";
  } else {
    pesos.innerHTML = `Andar 1: ${peso1}kg, Andar 2: ${peso2}kg, Andar 3: ${peso3}kg`;
  }
}

const elementos = document.querySelectorAll(".elemento");
const andares = document.querySelectorAll(".andar");
elementos.forEach((elemento) => {
  elemento.setAttribute("draggable", true);
  elemento.addEventListener("dragstart", drag);
});
andares.forEach((andar) => {
  andar.addEventListener("dragover", allowDrop);
  andar.addEventListener("drop", drop);
});
