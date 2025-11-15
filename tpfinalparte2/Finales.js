class Finales {
  constructor() {}
  
  dibujarFinal1() {
    if (pantallas.imagenes[4]) {
      image(pantallas.imagenes[4], 0, 0, width, height);
    } else {
      background(255, 200, 100);
    }
    
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡OH NO!", width/2, height/4);
    textSize(20);
    text("Los quesos terminaron atrayendo mas ratas", width/2, height/2);
    
    fill(255, 0, 0);
    rect(245, 380, 150, 50);
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Menú Principal", 320, 405);
  }
  
  dibujarFinal2() {
    if (pantallas.imagenes[5]) {
      image(pantallas.imagenes[5], 0, 0, width, height);
    } else {
      background(255, 255, 100);
    }
    
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡FELICIDADES!", width/2, height/4);
    textSize(20);
    text("Los limones resultaron ser efectivas contra las ratas", width/2, height/2);
    
    fill(255, 0, 0);
    rect(245, 380, 150, 50);
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Menú Principal", 320, 405);
  }
  
  dibujarFinal3() {
    if (pantallas.imagenes[6]) {
      image(pantallas.imagenes[6], 0, 0, width, height);
    } else {
      background(100, 0, 0);
    }
    
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡PERDISTE!", width/2, height/4);
    textSize(20);
    text("No agarres las ratas. Son contagiosas", width/2, height/2);
    
    fill(255, 0, 0);
    rect(245, 380, 150, 50);
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Menú Principal", 320, 405);
  }
  
  manejarClickFinal1() {
    if (mouseX > 245 && mouseX < 395 && mouseY > 380 && mouseY < 430) {
      pantallas.pantallaActual = 0;
    }
  }
  
  manejarClickFinal2() {
    if (mouseX > 245 && mouseX < 395 && mouseY > 380 && mouseY < 430) {
      pantallas.pantallaActual = 0;
    }
  }
  
  manejarClickFinal3() {
    if (mouseX > 245 && mouseX < 395 && mouseY > 380 && mouseY < 430) {
      pantallas.pantallaActual = 0;
    }
  }
}
