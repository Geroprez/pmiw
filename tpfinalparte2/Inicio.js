class Inicio {
  constructor() {}
  
  dibujar() {
    if (pantallas.imagenes[0]) {
      image(pantallas.imagenes[0], 0, 0, width, height);
    } else {
      background(100, 150, 255);
    }
    
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("El Flautista de Hamelin, El minijuego", width/2, height/4);
    
    fill(255, 0, 0);
    rect(220, 200, 200, 50);
    fill(255, 0, 0);
    rect(220, 270, 200, 50);
    
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Jugar", 320, 225);
    text("Créditos", 320, 295);
  }
  
  manejarClick() {
    if (mouseX > 220 && mouseX < 420 && mouseY > 200 && mouseY < 250) {
      pantallas.pantallaActual = 1;
    }
    if (mouseX > 220 && mouseX < 420 && mouseY > 270 && mouseY < 320) {
      pantallas.pantallaActual = 2;
    }
  }
}
