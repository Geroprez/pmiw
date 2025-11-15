class Pantallas {
  constructor(imagenesPantallas) {
    this.pantallaActual = 0;
    this.imagenes = imagenesPantallas;
    
    this.inicio = new Inicio();
    this.instrucciones = new Instrucciones();
    this.creditos = new Creditos();
    this.finales = new Finales();
  }
  
  dibujar() {
    if (this.pantallaActual === 0) {
      this.inicio.dibujar();
    } else if (this.pantallaActual === 1) {
      this.instrucciones.dibujar();
    } else if (this.pantallaActual === 2) {
      this.creditos.dibujar();
    } else if (this.pantallaActual === 3) {
      this.dibujarJuego();
    } else if (this.pantallaActual === 4) {
      this.finales.dibujarFinal1();
    } else if (this.pantallaActual === 5) {
      this.finales.dibujarFinal2();
    } else if (this.pantallaActual === 6) {
      this.finales.dibujarFinal3();
    }
  }
  
  dibujarJuego() {
    if (this.imagenes[3]) {
      image(this.imagenes[3], 0, 0, width, height);
    } else {
      background(220);
    }
  }
  
  manejarClick() {
    if (this.pantallaActual === 0) {
      this.inicio.manejarClick();
    } else if (this.pantallaActual === 1) {
      this.instrucciones.manejarClick();
    } else if (this.pantallaActual === 2) {
      this.creditos.manejarClick();
    } else if (this.pantallaActual === 4) {
      this.finales.manejarClickFinal1();
    } else if (this.pantallaActual === 5) {
      this.finales.manejarClickFinal2();
    } else if (this.pantallaActual === 6) {
      this.finales.manejarClickFinal3();
    }
  }
}
