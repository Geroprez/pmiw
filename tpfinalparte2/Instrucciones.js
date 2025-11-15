class Instrucciones {
  constructor() {}
  
  dibujar() {
    if (pantallas.imagenes[1]) {
      image(pantallas.imagenes[1], 0, 0, width, height);
    } else {
      background(150, 200, 100);
    }
    
    fill(255);
    textSize(28);
    textAlign(CENTER, CENTER);
    text("INSTRUCCIONES", width/2, height/6);
    
    textSize(16);
    textAlign(LEFT);
    text("Usa las flechas ← → para mover al personaje", width/4, height/3);
    text("Recoge 10 limones o 10 quesos para ganar", width/4, height/3 + 30);
    text("Evita las ratas o perderás vidas", width/4, height/3 + 60);
    text("Solamente tenes 3 vidas", width/4, height/3 + 90);
    
    fill(255, 0, 0);
    rect(245, 380, 150, 50);
    fill(255, 0, 0);
    rect(245, 440, 150, 40);
    
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Jugar", 320, 405);
    text("Volver", 320, 460);
  }
  
  manejarClick() {
    if (mouseX > 245 && mouseX < 395 && mouseY > 380 && mouseY < 430) {
      pantallas.pantallaActual = 3;
    }
    if (mouseX > 245 && mouseX < 395 && mouseY > 440 && mouseY < 480) {
      pantallas.pantallaActual = 0;
    }
  }
}
