function dibujarPantalla(){
  
   if (pantallaActual === 0) {
    fill(82,101,255);
    text("EL FLAUTISTA DE HAMELIN \nLA AVENTURA GRAFICA", 40, 100);
    textSize(40);
  } else if(pantallaActual === 1){
    text("Codigo: Geronimo Perez \nImagenes: Grok",40,100);
    
  }else if(pantallaActual === 2){
    textSize(20);
     text("A las orillas de un río al norte de Alemania, reposa una ciudad de paisajes pintorescos llamada Hamelín.",20,200);
    }
    else if(pantallaActual === 3){
      text("Un día, la ciudad se vioatacada por una lamentable plaga: ¡ESTABA LLENA DE RATAS!",20,200);
    } else if(pantallaActual === 4){
      text("Un dia. Un flautista noto que cerca de un pueblo, había una infestación de ratas que hacia que los ciudadanos no podían vivir bien. Que quiere hacer el flautista?", 20, 200);
    } else if(pantallaActual === 5){
      text("El flautista cree que el problema de las ratas es solo temporal y que parecen inofensivas. Asi que decide no ir al pueblo", 20,200);
    } else if(pantallaActual === 6){
      text("El pueblo no sabe como resolver el problema de las ratas. Asi que le preguntan al alcalde sobre esto. Este busca cualquier manera de detener a las ratas.", 20,200);
    } else if(pantallaActual === 7){
      text("Luego de un tiempo, el alcalde le pide a un medico sobre un remedio que puede ahuyentar a las ratas. Este le dice que puede usar limon o algo de queso para atraer. Que solucion decide el alcalde?", 20, 100);
    } else if(pantallaActual === 8){
      text("El alcalde le pidió al pueblo llevar un montón de queso hacia una cueva que esta muy lejos de Hamelin para atraer a las ratas. Los aldeanos obedecieron y llevaron todo el queso que quedaba hacia dicha cueva", 20, 100);

    } else if(pantallaActual === 9){
      text("Sin embargo, en lugar de solucionar el problema, termino empeorando porque las ratas volvieron mas grandes, tanto que pueden hacer agujeros en las paredes. Al final, las ratas se quedaron en Hamelin para siempre", 20, 100);
      
    } else if(pantallaActual === 10){
      text("El alcalde decide usar un montón de limón para ahuyentar a las ratas. Le pide al pueblo poner algo de limon tanto a las casas como al suelo para no atraer a los roedores", 10,200);
      
    } else if(pantallaActual === 11){
     text("Sorprendentemente, esto termina siendo efectivo ya que todas y cada una de las ratas se van del pueblo poco a poco. La ciudad logra librarse de las ratas y pueden vivir tranquilamente otra vez", 10,200);
     
    } else if(pantallaActual === 12){
     text("Curioso por la noticia, el flautista decide entrar en Hamelin. Le pregunto a los civiles porque entraron las ratas. Estos le pidieron ir al ayuntamiento para explicarle mejor la situación", 20, 200);
    } else if(pantallaActual === 13){
     text("Al ir al ayuntamiento, el alcalde le explica el problema de las ratas y le pide ayuda para que se deshaga de ellas. El flautista accede a cambio de 10 monedas de oro. Que decide el alcalde?", 20, 200);
    } else if(pantallaActual === 14){
      text("El flautista, enojado, simplemente decide irse de la ciudad para dejar el tema de las ratas a la suerte de los civiles", 10,200);
    } else if(pantallaActual === 15){
      text("El pueblo al no tener nadie para arreglar lo de las ratas, se lleno de roedores. Al final el pueblo cayo en una plaga incurable porque una de las ratas tenia una enfermedad que contagio a todo el pueblo.",10, 200);
    } else if(pantallaActual === 16){
      text("El flautista, contento y conforme por la aceptación, decidió cumplir su palabra y con la ayuda de su confiable flauta, atrajo todas las ratas del pueblo a un bosque muy lejano.", 10, 200);
    } else if(pantallaActual === 17){
      text ("Luego de terminar con su tarea, el flautista vuelve a la aldea a reclamar su recompensa. Entra en la ayuntamiento para pedirle al alcalde sobre las monedas de oro que le prometió. El alcalde cumpre su promesa y le paga al flautista?", 10, 200);
    } else if(pantallaActual === 18){
      text("El alcalde le paga al flautista las diez monedas de oro que le prometió. Este ultimo se va del pueblo contento con la recompensa", 10, 200);
    } else if(pantallaActual === 19){
      text("Hamelin vive feliz y tranquilo con el problema de las ratas totalmente solucionado.", 10, 200);
    } else if(pantallaActual === 20){
      text("El alcalde rompe su promesa y no le paga al flautista las monedas de oro. Este ultimo se va del pueblo furioso por la mentira del gobernador", 10, 200);
    } else if(pantallaActual === 21){
      text("El flautista, caminando por el bosque, estaba pensando en si tomar venganza hacia el pueblo o simplemente irse. Que hace ahora?", 10, 200);
    } else if(pantallaActual === 22){
      text("El flautista simplemente decide irse del pueblo y no volver. La idea de la venganza no le convencía lo suficiente",10,200);
    } else if(pantallaActual === 23){
     text("A pesar de eso, el pueblo de Hamelin sigue viviendo feliz dado que las ratas se fueron del pueblo .",20,200);
    } else if(pantallaActual === 24){
     text("El flautista decidió tomar el camino de la venganza. Un dia después, volvió el pueblo de Hamelin. Pero en lugar de pedir de vuelta las monedas de oro, Uso su flauta para atraer a los niños pequeños para sacarlos fuera del pueblo. Luego de un rato, los ciudadanos notaron la ausencia de estos, asi que decidieron buscar a los chicos",10,200);
    } else if(pantallaActual === 25){
     text("Los civiles fueron por todos lados por pistas sobre el paradero de los niños y del flautista. Desafortunadamente, no pudieron encontrar ni los chicos, ni el flautista. Al final el pueblo de Hamelin sufrio la mayor tragedia de los últimos años",10,200);
    
    } if(pantallaActual === 0){
   text("iniciar",130,460);
   text("creditos",360,460);
  }if(pantallaActual === 1 || pantallaActual === 2 || pantallaActual === 3 || pantallaActual === 5 || pantallaActual === 6 || pantallaActual === 8 || pantallaActual === 9 || pantallaActual === 10 || pantallaActual === 11 || pantallaActual === 12 || pantallaActual === 14 || pantallaActual === 15 || pantallaActual === 16 || pantallaActual === 18 || pantallaActual === 19 || pantallaActual === 20 || pantallaActual === 22 || pantallaActual === 23 || pantallaActual === 24 || pantallaActual === 25){
    fill(200,0,0);  
    rect(width / 2 - 50, height - 100,ancho1,alto1);
    text("Continuar",width / 2 - 45,460);
   } else if (pantallaActual === 0 || pantallaActual === 4 || pantallaActual === 7 || pantallaActual === 13 || pantallaActual === 17 || pantallaActual === 21){
      fill(200,0,0); 
      rect(boton1X,boton1Y,ancho1,alto1);
      fill(200,0,0); 
      rect(boton2X,boton2Y,ancho2,alto2);
  
    }
}


function mouseClicked() {
  if(pantallaActual === 0){
    if(mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1){
    pantallaActual = 2;
    } else if(mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2){
     pantallaActual = 1;
    }
  } else if(pantallaActual === 1){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 0;
   }
  } else if(pantallaActual === 2){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 3;
   }
  } else if(pantallaActual === 3){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 4;
    }
  } else if(pantallaActual === 4){
    if(mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1){
    pantallaActual = 5;
    } else if(mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2){
     pantallaActual = 12;
    }
  } else if(pantallaActual === 5){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 6;
   }
  } else if(pantallaActual === 6){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 7;
   }
  } else if(pantallaActual === 7){
    if(mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1){
    pantallaActual = 8;
    } else if(mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2){
     pantallaActual = 10;
    }
  } else if(pantallaActual === 8){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 9;
   }
  } else if(pantallaActual === 9){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 0;
   }
  } else if(pantallaActual === 10){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 11;
   }
  } else if(pantallaActual === 11){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 0;
   }
  } else if(pantallaActual === 12){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 13; 
    }
  } else if(pantallaActual === 13){
    if(mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1){
    pantallaActual = 16;
    } else if(mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2){
     pantallaActual = 14;
    }
  } else if(pantallaActual === 14){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 15; 
    }
  } else if(pantallaActual === 15){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 0;
   }
  } else if(pantallaActual === 16){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 17;
    }
  } else if(pantallaActual === 17){
    if(mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1){
    pantallaActual = 20;
    } else if(mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2){
     pantallaActual = 18;
    }
  } else if(pantallaActual === 18){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 19;
    }
  } else if(pantallaActual === 19){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 0;
   }
  } else if(pantallaActual === 20){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 21;
    }
  } else if(pantallaActual === 21){
    if(mouseX > boton1X && mouseX < boton1X + ancho1 && mouseY > boton1Y && mouseY < boton1Y + alto1){
    pantallaActual = 22;
    } else if(mouseX > boton2X && mouseX < boton2X + ancho2 && mouseY > boton2Y && mouseY < boton2Y + alto2){
     pantallaActual = 24;
    }
  } else if(pantallaActual === 22){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 23;
    }
  } else if(pantallaActual === 23){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 0;
   }
  } else if(pantallaActual === 24){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 25;
    }
  } else if(pantallaActual === 25){
   if(mouseX > width / 2 - 50 && mouseX < width / 2 - 50 + ancho1 && mouseY > height - 100 && mouseY < height - 100 + alto1){
    pantallaActual = 0;
   }
  }
}
