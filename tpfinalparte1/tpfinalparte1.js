//https://youtu.be/qEqrHqyRKV0 link del video



let sonido;
let imagenes = [];
let pantallaActual = 0;
let textos;
let fuente;
let pantallas = [];
let boton1X = 135, boton1Y = 370, ancho1 = 100, alto1 = 50;
let boton2X = 380, boton2Y = 370, ancho2 = 100, alto2 = 50;
let boton3X = 260, boton3Y = 400, ancho3 = 50, alto3 = 100;
let colorTransparente;



function preload(){
for (let i = 0; i < 26; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".png");
  }
  fuente = loadFont("data/texto.ttf");
  textos = loadStrings("data/Letra.txt");
  colorTransparente = color(255,255,255,120);
  userStartAudio();
  sonido = loadSound('data/sonido.mp3');
}


function setup() {
createCanvas(640,480);
textFont(fuente);
sonido.loop();
}



function draw() {
  background(200);
  dibujarPantalla();
}
