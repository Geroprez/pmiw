class Juego {
  constructor(personajeImg, limonImg, quesoImg, rataImg) {
    this.personaje = new Personaje();
    
    this.limon = new Objetos('limon', 2);
    this.queso = new Objetos('queso', 3);
    this.rata = new Objetos('rata', 4);
    
    this.contadorLimon = 0;
    this.contadorQueso = 0;
    this.vidas = 3;
    this.juegoActivo = true;
    
    this.cargarObjetos(limonImg, quesoImg, rataImg, personajeImg);
  }
  
  cargarObjetos(limonImg, quesoImg, rataImg, personajeImg) {
    this.personaje.imagen = personajeImg;
    
    this.limon.imagen = limonImg;
    this.queso.imagen = quesoImg;
    this.rata.imagen = rataImg;
  }
  
  dibujarPantallaJuego() {
    if (this.juegoActivo) {
      this.personaje.dibujar();
      this.limon.dibujar();
      this.queso.dibujar();
      this.rata.dibujar();
      
      fill(0);
      textSize(16);
      textAlign(LEFT);
      text("Limones: " + this.contadorLimon + "/10", 20, 30);
      text("Quesos: " + this.contadorQueso + "/10", 20, 60);
      text("Vidas: " + this.vidas, 20, 90);
    }
  }
  
  actualizar() {
    if (pantallas.pantallaActual === 3 && !this.juegoActivo) {
      this.reiniciar();
    }
    
    if (pantallas.pantallaActual !== 3 || !this.juegoActivo) return;
    
    if (keyIsDown(LEFT_ARROW)) {
      this.personaje.mover('izquierda');
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.personaje.mover('derecha');
    }
    
    this.limon.actualizar();
    this.queso.actualizar();
    this.rata.actualizar();
    
    if (this.limon.colisionaCon(this.personaje)) {
      this.contadorLimon++;
      this.limon.reiniciar();
      this.verificarVictoria();
    }
    
    if (this.queso.colisionaCon(this.personaje)) {
      this.contadorQueso++;
      this.queso.reiniciar();
      this.verificarVictoria();
    }
    
    if (this.rata.colisionaCon(this.personaje)) {
      this.vidas--;
      this.rata.reiniciar();
      this.verificarDerrota();
    }
    
    if (this.limon.llegoAlFondo()) {
      this.limon.reiniciar();
    }
    if (this.queso.llegoAlFondo()) {
      this.queso.reiniciar();
    }
    if (this.rata.llegoAlFondo()) {
      this.rata.reiniciar();
    }
  }
  
  verificarVictoria() {
    if (this.contadorLimon >= 10) {
      this.juegoActivo = false;
      pantallas.pantallaActual = 5;
    } else if (this.contadorQueso >= 10) {
      this.juegoActivo = false;
      pantallas.pantallaActual = 4;
    }
  }
  
  verificarDerrota() {
    if (this.vidas <= 0) {
      this.juegoActivo = false;
      pantallas.pantallaActual = 6;
    }
  }
  
  reiniciar() {
    this.personaje = new Personaje();
    this.personaje.imagen = personajeImg;
    
    this.limon.reiniciar();
    this.queso.reiniciar();
    this.rata.reiniciar();
    
    this.contadorLimon = 0;
    this.contadorQueso = 0;
    this.vidas = 3;
    this.juegoActivo = true;
  }
}
