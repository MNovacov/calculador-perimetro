import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrianguloEscaleno, TrianguloEquilatero } from '../../models/figura-geometrica';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class TrianguloComponent {
  tipoTriangulo: string = 'escaleno';
  lado1: number | null = null;
  lado2: number | null = null;
  lado3: number | null = null;
  resultado: number | null = null;
  mostrarFormula: boolean = false;

  calcular() {
    if (this.tipoTriangulo === 'escaleno' && this.lado1 !== null && this.lado2 !== null && this.lado3 !== null) {
      const triangulo = new TrianguloEscaleno(this.lado1, this.lado2, this.lado3);
      this.resultado = triangulo.calcularPerimetro();
    } else if (this.tipoTriangulo === 'equilatero' && this.lado1 !== null) {
      const triangulo = new TrianguloEquilatero(this.lado1);
      this.resultado = triangulo.calcularPerimetro();
    }
  }

  toggleFormula() {
    this.mostrarFormula = !this.mostrarFormula;
  }

  get formValid(): boolean {
    if (this.tipoTriangulo === 'equilatero') {
      return this.lado1 !== null;
    } else {
      return this.lado1 !== null && this.lado2 !== null && this.lado3 !== null;
    }
  }
}