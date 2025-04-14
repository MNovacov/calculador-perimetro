import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Circulo } from '../../models/figura-geometrica';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CirculoComponent {
  radio: number | null = null;
  resultado: number | null = null;
  mostrarFormula: boolean = false;
  readonly PI = Math.PI;

  calcular() {
    if (this.radio !== null) {
      const circulo = new Circulo(this.radio);
      this.resultado = circulo.calcularPerimetro();
    }
  }

  toggleFormula() {
    this.mostrarFormula = !this.mostrarFormula;
  }
}