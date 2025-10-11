function dibujarPantalla(){
  image(imagenes[pantallaActual], 0, 0, width, height);
  noStroke();
  fill(colorTransparente);
  rect(0,0,640,300);
  fill(0); 
  textSize(20); 
  textAlign(CENTER, TOP);
  let partes = textos[pantallaActual].split('|');
  for(let i = 0; i < partes.length; i++) {
    text(partes[i], width/2, height - 400 + (i * 30));
  }
  
  dibujarpantallaInicio();
  dibujarpantallaCreditos();
  dibujarpantallaUnboton();
  dibujarpantallaDosbotones();
}

function dibujarpantallaInicio(){
  if(pantallaActual === 0){
    fill(132,255,121);
    textAlign(CENTER, CENTER);
    
    
    rect(boton1X, boton1Y, ancho1, alto1);
    fill(0);
    text("iniciar", boton1X + ancho1/2, boton1Y + alto1/2);
    
    
    fill(132,255,121);
    rect(boton2X, boton2Y, ancho2, alto2);
    fill(0);
    text("creditos", boton2X + ancho2/2, boton2Y + alto2/2);
  }
}

function dibujarpantallaCreditos(){
  if(pantallaActual === 1){
    fill(132,255,121);
    rect(boton3X, boton3Y, alto3, ancho3);
    fill(0);
    text("volver", 310,415);
  }
}

function dibujarpantallaUnboton(){
  if(pantallaActual === 2 || pantallaActual === 3 || pantallaActual === 5 || pantallaActual === 6 || pantallaActual === 8 || pantallaActual === 10 || pantallaActual === 12 || pantallaActual === 14 || pantallaActual === 16 || pantallaActual === 18 || pantallaActual === 20 || pantallaActual === 22 || pantallaActual === 24){
    fill(132,255,121);
    rect(boton3X, boton3Y, alto3, ancho3);
    fill(0);
    textAlign(CENTER, CENTER);
    text("continuar", boton3X + ancho3, boton3Y + alto3 - 80);
    
  } else if (pantallaActual === 9 || pantallaActual === 11 || pantallaActual === 15 || pantallaActual === 19 || pantallaActual === 23 || pantallaActual === 25){
    fill(132,255,121);
    rect(boton3X, boton3Y, alto3, ancho3);
    fill(0);
    textAlign(CENTER, CENTER);
    text("reiniciar", boton3X + ancho3, boton3Y + alto3 - 80);
  }
}

function dibujarpantallaDosbotones(){
  if(pantallaActual === 4 || pantallaActual === 7 || pantallaActual === 13 || pantallaActual === 17 || pantallaActual === 21){
    
    fill(132,255,121);
    rect(boton1X, boton1Y, ancho1, alto1);
    rect(boton2X, boton2Y, ancho2, alto2);
    
    fill(0);
    textAlign(CENTER, CENTER);
    
    if(pantallaActual === 4) {
      text("No entrar", boton1X + ancho1/2, boton1Y + alto1/2);
      text("Entrar", boton2X + ancho2/2, boton2Y + alto2/2);
    }
    if(pantallaActual === 7) {
      text("Queso", boton1X + ancho1/2, boton1Y + alto1/2);
      text("Limón", boton2X + ancho2/2, boton2Y + alto2/2);
    }
    if(pantallaActual === 13) {
      text("Si", boton1X + ancho1/2, boton1Y + alto1/2);
      text("No", boton2X + ancho2/2, boton2Y + alto2/2);
    }
    if(pantallaActual === 17) {
      text("Cumplir", boton1X + ancho1/2, boton1Y + alto1/2);
      text("Negar", boton2X + ancho2/2, boton2Y + alto2/2);
    }
    if(pantallaActual === 21) {
      text("Venganza", boton1X + ancho1/2, boton1Y + alto1/2);
      text("Irse", boton2X + ancho2/2, boton2Y + alto2/2);
    }
  }
}
 

function mouseClicked(){
  if(pantallaActual === 0){
    if (mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1) {
      pantallaActual = 2;
    } else if (mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2) {
      pantallaActual = 1;
    }
  } else if(pantallaActual === 1){
    if (mouseX > boton3X && mouseX < boton3X + ancho3 && mouseY > boton3Y && mouseY < boton3Y + alto3) {
      pantallaActual = 0;
    }
  } else if(pantallaActual === 2 || pantallaActual === 3 || pantallaActual === 5 || pantallaActual === 6 || pantallaActual === 8 || pantallaActual === 10 || pantallaActual === 12 || pantallaActual === 14 || pantallaActual === 16 || pantallaActual === 18 || pantallaActual === 20 || pantallaActual === 22 || pantallaActual === 24){
    if (mouseX > boton3X && mouseX < boton3X + ancho3 && mouseY > boton3Y && mouseY < boton3Y + alto3) {
      pantallaActual = pantallaActual + 1;
    }
  } else if(pantallaActual === 9 || pantallaActual === 11 || pantallaActual === 15 || pantallaActual === 19 || pantallaActual === 23 || pantallaActual === 25){
    if (mouseX > boton3X && mouseX < boton3X + ancho3 && mouseY > boton3Y && mouseY < boton3Y + alto3) {
      pantallaActual = 0;
    }
  } else if(pantallaActual === 4){
  if (mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1) {
      pantallaActual = 5;
    } else if (mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2) {
      pantallaActual = 12;
    }
  } else if(pantallaActual === 7){
  if (mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1) {
      pantallaActual = 8;
    } else if (mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2) {
      pantallaActual = 10;
    }
  } else if(pantallaActual === 13){
  if (mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1) {
      pantallaActual = 16;
    } else if (mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2) {
      pantallaActual = 14;
    }
  } else if(pantallaActual === 17){
  if (mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1) {
      pantallaActual = 18;
    } else if (mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2) {
      pantallaActual = 20;
    }
  } else if(pantallaActual === 21){
  if (mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1) {
      pantallaActual = 24;
    } else if (mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2) {
      pantallaActual = 22;
    }
  }
}
