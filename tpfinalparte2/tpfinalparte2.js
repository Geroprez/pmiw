//link del video: https://youtu.be/2-a7NYqIt0Q

let objJuego;
let pantallas;
let sonidoFondo;
let imagenesPantallas = [];
let fuenteTexto;

function preload(){
  personajeImg = loadImage("data/Alcalde.png");
  
  for (let i = 0; i <= 6; i++) {
    imagenesPantallas[i] = loadImage("data/imagen" + i + ".png");
  }
  
  obj1 = loadImage("data/Limon.png");
  obj2 = loadImage("data/Queso.png");
  obj3 = loadImage("data/Rata.png");
  fuenteTexto = loadFont("data/Texto.ttf");
  
  userStartAudio();
  sonidoFondo = loadSound("data/sonido.mp3");
}

function setup() {
  createCanvas(640, 480);
  pantallas = new Pantallas(imagenesPantallas);
  objJuego = new Juego(personajeImg, obj1, obj2, obj3);
  textFont(fuenteTexto);
  sonidoFondo.loop();
}

function draw() {
  pantallas.dibujar();
  
  if (pantallas.pantallaActual === 3) {
    objJuego.dibujarPantallaJuego();
    objJuego.actualizar();
  }
}

function mousePressed() {
  if (pantallas.pantallaActual === 0 || pantallas.pantallaActual === 1 || pantallas.pantallaActual === 2 || pantallas.pantallaActual === 4 || pantallas.pantallaActual === 5 || pantallas.pantallaActual === 6) {
    pantallas.manejarClick();
  }
}
