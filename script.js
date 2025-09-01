const lineas = [
  "Mira lo que encontraste ",
  "Un detallito del día:",
  "Un recordatorio de que alguien piensa en vos y se tomó el tiempo de hacer esto",
  "Que tengas un lindo día hoy....",
  "Y que alguien te haga sentir especial (spoiler: yo)",
  "Ily",
  "Bss"
  "AJJAAJAJAJAJAJ"
];

let index = 0;

const titulo = document.getElementById("titulo");
const instruccion = document.getElementById("instruccion");
const boton = document.getElementById("boton");
const mensajeDiv = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  if (index === 0) {
    // cambiar instrucción solo la primera vez
    instruccion.textContent = "¡Cada clic revela algo nuevo!";
  }

  if (index < lineas.length) {
    const p = document.createElement("p");
    p.classList.add("linea");
    p.textContent = lineas[index];
    mensajeDiv.appendChild(p);

    setTimeout(() => {
      p.classList.add("mostrar");
    }, 10);

    index++;
  }
});
