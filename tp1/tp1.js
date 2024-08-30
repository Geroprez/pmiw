// video de Youtube : https://youtu.be/3BglNvmV0WQ


let Imagen;
let mostrarLineasNegras = true;
let mostrarLineasBlancas = true;

function preload() {
  Imagen = loadImage("data/Imagen.png");
}

function setup() {
  createCanvas(800, 400);
  noStroke();
}

function draw() {
  noStroke();

  if (devolverValor(mouseY)) {
    actualizarFondo(true, mouseY);
  } else {
    actualizarFondo(false, mouseY);
  }

  for (let j = 0; j < 3; j++) {
    if (j == 0) {
      for (let i = 0; i < 90; i++) {
        fill(200, 200, 255);
        rect(410, (4 * i) + height / 20, width / 2 - 20, 2);
      }
    } else if (j == 1 && mostrarLineasNegras) {
      for (let i = 13; i < 85; i++) {
        fill(0);
        rect(350 + width / 8, (4 * i) + 1, 300, 2);
      }
    } else if (j == 2 && mostrarLineasBlancas) {
      for (let i = 13; i < 85; i++) {
        fill(255);
        rect(width / 4 + 320, (4 * i), width / 5, 2);
      }
      for (let i = width / 2 + 300; i < width - width / 12; i++) {
        stroke(0, map(i, width / 2 + 300, width - width / 12, 10, 0));
        line(i, 60, i, height - 50);
      }
    }
  }

  image(Imagen, 0, 0);
}

function actualizarFondo(estado, mY) {
  if (estado) {
    background(42, 134, map(height / 2, mY, height, 100, 255));
  } else {
    background(42, 134, 229);
  }
}

function devolverValor(mY) {
  return mY > height / 100;
}

function keyPressed() {
  if (key == '1') {
    mostrarLineasNegras = !mostrarLineasNegras;
  } else if (key == '2') {
    mostrarLineasBlancas = !mostrarLineasBlancas;
  } else if (key == 'r') {
    reiniciarPrograma();
  }
}

function reiniciarPrograma() {
  mostrarLineasNegras = true;
  mostrarLineasBlancas = true;
}
