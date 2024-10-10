let imagenes = [];
let pantallaActual = 0;
let pantallas = [];
let fuente;
  
  
  
  
 function preload() {
  for (let i = 0; i < 18; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".png");
  }
  fuente = loadFont("data/Fuente.vlw");
  
}



function setup() {
 createCanvas(640,480);
 
 for (let i = 0; i <18; i++){
   pantallas.push(window["pantalla" + i]);
 
 } textFont(fuente);
}






function draw() {
 background(200);
 image(imagenes[pantallaActual], 0,0,width,height);
 pantallas[pantallaActual]();
 
}
