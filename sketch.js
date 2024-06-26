//-------->LINK A VIDEO EXPLICATIVO: https://youtu.be/UQ3mCKWnjsE

let trazos = [];
let cantidadTrazos = 13;

function preload() {
  for (let i = 0; i < cantidadTrazos; i++) {
    let nombre = "data/trazo" + nf(i, 2) + ".png";
    trazos[i] = loadImage(nombre);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  colorMode(HSB, 360, 100, 100, 100);
}
//manchas que caigan y que se muevan en horizontal 
// 1 Objetos y 2 Metodos (Mar y cielo)
//poner un parametro del trazo que diga si es cielo o rio y que en cada lugar condicionarlo si es cielo o Mar.
//agregar el parametro para que los colores cambian con el mouse y despues el sonido (Variable).
function draw() {
  background (255);

 
}


