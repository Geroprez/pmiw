class Personaje {
  constructor() {
    this.x = 320;
    this.y = 380;
    this.ancho = 100;
    this.alto = 100;
    this.velX = 5;
  }
  
  dibujar() {
    if (this.imagen) {
      image(this.imagen, this.x, this.y, this.ancho, this.alto);
    } else {
      fill(0, 0, 255);
      rect(this.x, this.y, this.ancho, this.alto);
    }
  }
  
  mover(direccion) {
    if (direccion === 'izquierda') {
      this.x -= this.velX;
    }
    if (direccion === 'derecha') {
      this.x += this.velX;
    }
    
    if (this.x < 0) this.x = 0;
    if (this.x > 600) this.x = 600;
  }
}
