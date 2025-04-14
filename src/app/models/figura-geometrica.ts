export abstract class FiguraGeometrica {
    abstract calcularPerimetro(): number;
  }
  
  export class Circulo extends FiguraGeometrica {
    constructor(private radio: number) {
      super();
    }
  
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }
  
  export class TrianguloEscaleno extends FiguraGeometrica {
    constructor(private lado1: number, private lado2: number, private lado3: number) {
      super();
    }
  
    calcularPerimetro(): number {
      return this.lado1 + this.lado2 + this.lado3;
    }
  }
  
  export class TrianguloEquilatero extends FiguraGeometrica {
    constructor(private lado: number) {
      super();
    }
  
    calcularPerimetro(): number {
      return 3 * this.lado;
    }
  }