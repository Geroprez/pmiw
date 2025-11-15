class Creditos {
  constructor() {}
  
  dibujar() {
    if (pantallas.imagenes[2]) {
      image(pantallas.imagenes[2], 0, 0, width, height);
    } else {
      background(200, 100, 150);
    }
    
    fill(255);
    textSize(28);
    textAlign(CENTER, CENTER);
    text("CRÉDITOS", width/2, height/4);
    
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Desarrollado por:", width/2, height/2 - 40);
    text("Geronimo Perez Sosa", width/2, height/2);
    text("Imagenes Sacadas de FreePNG", width/2, height/2 + 40);
    
    fill(255, 0, 0);
    rect(245, 380, 150, 50);
    
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Volver", 320, 405);
  }
  
  manejarClick() {
    if (mouseX > 245 && mouseX < 395 && mouseY > 380 && mouseY < 430) {
      pantallas.pantallaActual = 0;
    }
  }
}
