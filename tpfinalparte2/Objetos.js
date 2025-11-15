class Objetos {
  constructor(tipo, velocidad) {
    this.tipo = tipo;
    this.x = random(50, 590);
    this.y = 0;
    this.velocidad = velocidad;
    this.diametro = 50;
    this.imagen = null;
  }
  
  dibujar() {
    if (this.imagen) {
      image(this.imagen, this.x - this.diametro/2, this.y - this.diametro/2, this.diametro, this.diametro);
    }
  }
  
  actualizar() {
    this.y += this.velocidad;
  }
  
  reiniciar() {
    this.y = 0;
    this.x = random(50, 590);
  }
  
  colisionaCon(personaje) {
    return this.y > personaje.y && this.y < personaje.y + personaje.alto &&
           this.x > personaje.x && this.x < personaje.x + personaje.ancho;
  }
  
  llegoAlFondo() {
    return this.y > 480;
  }
}
