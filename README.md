<h1 align="center">📐 Calculador de Perímetro</h1>

<p align="center">
  Aplicación híbrida desarrollada con <strong>Ionic + Angular</strong> para calcular el perímetro de figuras geométricas (círculo y triángulo).
</p>


---

## ⚙️ Tecnologías Utilizadas

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- TypeScript
- HTML5 / CSS

---

## 🚀 ¿Qué hace esta app?

La aplicación permite al usuario:

- Seleccionar una figura geométrica (`círculo`, `triángulo escaleno` o `triángulo equilátero`)
- Ingresar los valores necesarios (radio o lados)
- Calcular el perímetro automáticamente
- Visualizar el resultado en pantalla con estilo Ionic

---

## 🧠 Estructura del Código

- **Modelos:** `FiguraGeometrica` es la clase base abstracta que define el método `calcularPerimetro()`, y es heredada por `Circulo`, `TrianguloEscaleno` y `TrianguloEquilatero`.
- **Componentes personalizados:** 
  - `circulo.component` para el cálculo del perímetro de un círculo
  - `triangulo.component` para los triángulos escaleno y equilátero
- **Página Home:** contiene la selección de figuras y la visualización dinámica del componente correspondiente.

---

## 🖼️ Capturas de Pantalla


<img src="https://raw.githubusercontent.com/MNovacov/calculador-perimetro/master/calculador.png" width="400" />


---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:

git clone https://github.com/MNovacov/calculador-perimetro.git
cd calculador-perimetro

## 2. Instalar dependencias:

npm install

## 3. Ejecutar en navegador:

ionic serve
