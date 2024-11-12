//link del Video: https://youtu.be/lBRix4_hzmc




let imagenes = [];
let pantallaActual = 0;
let fuente;
let sonidoFondo;
let posXBoton = 110, posYBoton = 360, anchoBoton = 100, altoBoton = 50;
let posXBoton2 = 430, posYBoton2 = 360, anchoBoton2 = 100, altoBoton2 = 50;
let posTextoActual = 0
let click = false;


let pantallas = [];

function preload() {
  for (let i = 0; i < 18; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".png");
  }
  fuente = loadFont("data/angrybirds-regular.ttf");
  userStartAudio();
  sonidoFondo = loadSound("data/sonidojuego.mp3");
  
  pantallas = [
    pantalla0, pantalla1, pantalla2, pantalla3, pantalla4, pantalla5,
    pantalla6, pantalla7, pantalla8, pantalla9, pantalla10, pantalla11,
    pantalla12, pantalla13, pantalla14, pantalla15, pantalla16, pantalla17
  ];
}

function setup() {
  createCanvas(640, 480);
  textFont(fuente);
  sonidoFondo.loop();
}

function draw() {
  background(200);
  image(imagenes[pantallaActual], 0, 0, width, height);
  mostrarPantalla();
  dibujarBotones();
}

function mostrarPantalla() {
  if (pantallas[pantallaActual]) {
    pantallas[pantallaActual]();
  }
}
