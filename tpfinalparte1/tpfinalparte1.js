let sonido;
let imagenes = [];
let pantallaActual = 0;
let fuente;
let pantallas = [];
let boton1X = 135, boton1Y = 370, ancho1 = 100, alto1 = 50;
let boton2X = 380, boton2Y = 370, ancho2 = 100, alto2 = 50;



function preload(){
for (let i = 0; i < 26; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".png");
  }
  fuente = loadFont("data/texto.ttf");
}


function setup() {
createCanvas(640,480)
textFont(fuente);
}



function draw() {
  background(200);
  image(imagenes[pantallaActual], 0, 0, width, height);
  dibujarPantalla();
}
