function configurarTexto(tamano, grosorBorde, colorTexto, colorBorde) {
  textSize(tamano);
  stroke(colorBorde);
  strokeWeight(grosorBorde);
  fill(colorTexto);
}

function pantalla0() {
  configurarTexto(60, 6, 0, 255);
  text("ANGRY BIRDS\nLA AVENTURA GRÁFICA", 40,200);
}

function pantalla1() {
  configurarTexto(30, 6, 0, 255);
  text("Bienvenido al pacífico Reino de los Pájaros,\ndonde la vida transcurre en armonía...\n hasta que algo inesperado rompe la calma.", 30, 50);
}


function pantalla2() {
  configurarTexto(30, 6, 0, 255);
  text("Los cerdos han llegado a la isla y, en un acto\nde traición, han robado los preciados huevos.\nLos pájaros deben unirse y luchar\npor lo que es suyo.", 10, 30);
}

function pantalla3() {
  configurarTexto(30, 6, 0, 255);
  text("Red, Chuck, Bomb y sus amigos se organizan\nen un escuadrón rebelde\npara recuperar los huevos.\n ¿Deberían atacar de inmediato o buscar aliados?", 10, 50);
}

function pantalla4() {
  configurarTexto(30, 6, 0, 255);
  text("Con la sabiduría de Mighty Eagle y la estrategia\nbien pensada, el escuadrón se fortalece.\nEstán listos parala primera batalla.\nEl escuadrón debe decidir:\n¿usar nuevas habilidades o\nconfiar en técnicas tradicionales?" , 10, 60);
}

function pantalla5(){
  configurarTexto(30, 6, 0, 255);
  text("Los pajaros atacaron con todo con sus\ntecnicas tradicionales, pero...", 60, 60);


}

function pantalla6() {
  configurarTexto(30, 6, 0, 255);
  text("El equipo ha superado la primera batalla.\n Gracias a las nuevas habilidades aprendidas,\n avanzan con más confianza hacia el desafío final.", 10, 40);
}

function pantalla7() {
  configurarTexto(30, 6, 0, 255);
  text("Finalmente han llegado a la fortaleza del\nRey Cerdo. El escuadrón debe decidir si atacar\ndirectamente o enviar un espía para obtener\ninformación crucial.", 40, 40);
}

function pantalla8() {
 configurarTexto(30, 6, 0, 255);
  text("Decidieron atacar directamente\nsin saber que era una trampa", 130, 100); 

}

function pantalla9() {
 configurarTexto(30, 6, 0, 255);
  text("Gracias a un valiente espía, el equipo descubre\n la debilidad estructural de la fortaleza cerdo.\n La victoria está al alcance.", 20, 30);
}

function pantalla10(){
 configurarTexto(30, 6, 0, 255);
  text("Con la información obtenida,\n los pájaros planifican un ataque certero.\n La batalla final por los huevos\n está a punto de comenzar.", 10, 30);
}

function pantalla11(){
 configurarTexto(30, 6, 0, 255);
  text("Al confiar en técnicas anticuadas, el escuadrón\n fracasó. Los pájaros pierden y gana el Rey Cerdo.\n¡Game Over!", 10, 40);
}

function pantalla12(){
 configurarTexto(30, 6, 0, 255);
 text("El Rey Cerdo ha sido derrotado.\nLa fortaleza está en ruinas\n y los cerdos están en retirada.", 120, 40);
}

function pantalla13(){
  configurarTexto(30, 6, 0, 255);
  text("El escuadrón atacó sin estrategia y fue derrotado.\nLos cerdos ganan la primera batalla.\n¡Game Over!", 10, 30);


}
function pantalla14(){
 configurarTexto(30, 6, 0, 255);
  text("Decidieron atacar inmediatamente\nesto los puso grabemente en peligro...", 90, 60);

}
function pantalla15(){
 configurarTexto(30, 6, 0, 255);
  text("El ataque falló y los cerdos\n lograron huir con los huevos.\nLa misión ha fracasado.\n¡Game Over!", 20, 40);



}

function pantalla16(){
 configurarTexto(30, 6, 0, 255);
  text("Con estrategia y valentía, los pájaros han\nderrotado a los cerdos y recuperado sus huevos.\nEl Reino de los Pájaros vuelve a estar en paz.\n¡Felicidades!", 10, 30);
}

function pantalla17(){
 configurarTexto(70, 6, 0, 255);
  text("Leonardo Caballero\nGeronimo Perez\nComision 5", 30, 150);
}




function dibujarBotones() {
  fill(0);
  textSize(23);

  if (pantallaActual === 0) {
    text("Iniciar", 130, 460);
    dibujarBotonCuadrado(posXBoton, posYBoton, anchoBoton, altoBoton);
    fill(255, 0, 0);
    text("Créditos", 442, 460);
    dibujarBotonCuadrado(posXBoton2, posYBoton2, anchoBoton2, altoBoton2);
  } else if (pantallaActual === 1 || pantallaActual === 2 || pantallaActual === 5 || pantallaActual === 6 || pantallaActual === 8 || pantallaActual === 9 || pantallaActual === 10 || pantallaActual === 12 || pantallaActual === 14) {
    text("Continuar", 270, 460);
    dibujarBotonCuadrado(width / 2 - 50, height - 100, 100, 50);
  } else if (pantallaActual === 3 || pantallaActual === 7) {
    text("Atacar", 126, 460);
    dibujarBotonCuadrado(width / 4 - 50, height - 100, 100, 50);
    fill(0);
    textSize(23);
    text(pantallaActual === 3 ? "Aliarse" : "Enviar espía", 420, 460);
    dibujarBotonCuadrado((3 * width) / 4 - 50, height - 100, 100, 50);
  } else if (pantallaActual === 4) {
    text("Técnicas tradicionales", 63, 460);
    dibujarBotonCuadrado(width / 4 - 50, height - 100, 100, 50);
    fill(0);
    textSize(23);
    text("Nuevas habilidades", 385, 460);
    dibujarBotonCuadrado((3 * width) / 4 - 50, height - 100, 100, 50);
  }

  if (pantallaActual === 11 || pantallaActual === 13 || pantallaActual === 15 || pantallaActual === 16 || pantallaActual === 17) {
    fill(0, 0, 255);
    textSize(23);
    text("Volver", 558, 460);
    dibujarBotonCuadrado(width - 150, height - 100, 100, 50);
  }

  if (mouseIsPressed && !click) {
    click = true;

    if (pantallaActual === 0) {
      if (mouseX > posXBoton && mouseX < posXBoton + anchoBoton && mouseY > posYBoton && mouseY < posYBoton + altoBoton) {
        pantallaActual = 1;
      } else if (mouseX > posXBoton2 && mouseX < posXBoton2 + anchoBoton2 && mouseY > posYBoton2 && mouseY < posYBoton2 + altoBoton2) {
        pantallaActual = 17;
      }
    } else if (pantallaActual === 1 || pantallaActual === 2) {
      if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual++;
      }
    } else if (pantallaActual === 3) {
      if (mouseX > width / 4 - 50 && mouseX < width / 4 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 14;
      } else if (mouseX > (3 * width) / 4 - 50 && mouseX < (3 * width) / 4 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 4;
      }
    } else if (pantallaActual === 4) {
      if (mouseX > width / 4 - 50 && mouseX < width / 4 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 5;
      } else if (mouseX > (3 * width) / 4 - 50 && mouseX < (3 * width) / 4 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 6;
      }
    } else if (pantallaActual === 5) {
      if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 11;
      } 
    } else if (pantallaActual === 6) {
      if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 7;
      }
    }else if (pantallaActual === 7) {
      if (mouseX > width / 4 - 50 && mouseX < width / 4 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 8;
      } else if (mouseX > (3 * width) / 4 - 50 && mouseX < (3 * width) / 4 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 9;
      }
    } else if (pantallaActual === 8) {
      if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 15;
      }
    } else if (pantallaActual === 9) {
      if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 10;
      }
    } else if (pantallaActual === 10) {
      if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 12;
      }
    } else if (pantallaActual === 12) {
      if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 16;
      }
    } else if (pantallaActual === 14) {
      if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 80 && mouseY < height - 30) {
        pantallaActual = 13;
      }
    }

    if ((pantallaActual === 11 || pantallaActual === 13 || pantallaActual === 15 || pantallaActual === 16 || pantallaActual === 17) && mouseX > width - 150 && mouseX < width - 50 && mouseY > height - 80 && mouseY < height - 30) {
      pantallaActual = 0;
    }
  }
}

function dibujarBotonCuadrado(x, y, ancho, alto){
  fill(255, 0, 0);
  rect(x, y, ancho, alto);
}

function mouseReleased() {
  click = false;
}
