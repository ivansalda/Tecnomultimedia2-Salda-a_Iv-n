//-------->Link al video: 


//-------->Link a la pagina: https://ivansalda.github.io/Tecnomultimedia2-Salda-a_Iv-n/


//manchas que caigan y que se muevan en horizontal 
// 1 Objetos y 2 Metodos (Mar y cielo)
//poner un parametro del trazo que diga si es cielo o rio y que en cada lugar condicionarlo si es cielo o Mar.
//agregar el parametro para que los colores cambian con el mouse y despues el sonido (Variable).
let MarArre = [];
let CieloArre = [];
let AcentoArre = [];
let trazos = [];
let cantidadTrazos = 13;
let Cielo1;
let Mar1;

let visible = false;
// ----------------- SONIDO ----------------------------------------------------------
let micro, audioContext;
let haySonido;
let amplitud, amplitudCruda, preAmplitud, varAmplitud;
let frecuencia, frecuenciaCruda, preFrecuencia, varFrecuencia;
const pichModel = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
let duracion, silencio;

// ------------------VALOR DE SONIDO--------------------------------------------------------------------------------------------
const minAmplitud = 0.02; // Valor de amplitud minima (refencia por si quieren cambiarlo 0.02) 
const maxAmplitud = 0.8; // Valor de amplitud Maxima (refencia por si quieren cambiarlo 0.8)

const maxFrecuencia = 800;    // Valor de Frecuencia Maxima (refencia por si quieren cambiarlo 800)
const minFrecuencia = 100;    // Valor de Frecuencia minima (refencia por si quieren cambiarlo 100) 





//--------------------------------------------------------------------------------------------------------------------
function preload() {
  for (let i = 0; i < cantidadTrazos; i++) {
    let nombre = "data/trazo" + nf(i, 2) + ".png";
    trazos[i] = loadImage(nombre);
  }

}

function setup() {
  let canvas = createCanvas(windowWidth / 3, windowHeight);
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
  imageMode(CENTER);
  colorMode(HSB, 360, 100, 100, 100);
  Cielo1 = new Cielo(0);
  Mar1 = new Mar(0);
  

  //------------------------ SONIDO-------------------------
  audioContext = getAudioContext();
  micro = new p5.AudioIn();
  micro.start(startPitch);
  userStartAudio();
  preAmplitud = 0;
  preFrecuencia = 0;

  //----------------------------------------------------------
  // for (let i = 0; i < 50; i++) {
  //   CieloArre[i] = new Cielo(0)
  // }
  // for (let i = 0; i < 50; i++) {
  //   MarArre[i] = new Mar(0)
  // }

}

function draw() {
  if (frameRate() >= 60) {
    frameRate(60);
  }
  amplitudCruda = micro.getLevel();      //volumen del sonido
  amplitud = lerp(amplitudCruda, preAmplitud, 0.5);   //suavizar input de amplitud
  amplitud = constrain(amplitudCruda, minAmplitud, maxAmplitud); //Controla que los minimos y maximos sean los limites
  varAmplitud = amplitud - preAmplitud;
  frecuencia = lerp(frecuenciaCruda, preFrecuencia, 0.5);   //suavizar input de frecuencia
  frecuencia = constrain(frecuencia, minFrecuencia, maxFrecuencia); //Controla que los minimos y maximos sean los limites


  haySonido = amplitud > minAmplitud



  background(52, 40, 95, 97);


  if (visible == false && haySonido) {
    // console.log (int(random(cantidadTrazos)));
    // image (trazos[int (random(cantidadTrazos))],200,200,200,200);
    for (let i = 0; i < 160; i++) {
      CieloArre[i] = new Cielo(trazos[int(random(cantidadTrazos))]);
    }
    for (let i = 0; i < 70; i++) {
      MarArre[i] = new Mar(trazos[int(random(cantidadTrazos))]);
    }
    for (let i = 0; i < 20; i++) {
      AcentoArre[i] = new Acento(trazos[int(random(cantidadTrazos))]);
    }


    visible = true;

  }

  if (visible == true) {
    for (let i = 0; i < 160; i++) {
      CieloArre[i].mover();
      // CieloArre[i].CamColor(map(frecuenciaCruda, minFrecuencia, maxFrecuencia, 340, 260));
      // MarArre[i].CamColor(map(frecuenciaCruda, minFrecuencia, maxFrecuencia, 340, 260)); 
      if (haySonido === true) {
        silencio = 0;

        CieloArre[i].CamColor(map(frecuenciaCruda, minFrecuencia, maxFrecuencia, 340, 260));
        if (varAmplitud > 0.2) {
          CieloArre[i].colorTormenta();

        }
      } else {
        let Delay = 30 * getFrameRate();
        let preDelay = 16 * getFrameRate();
        if (silencio < Delay) {
          silencio++;
          if (silencio > preDelay) {
            CieloArre[i].CamColor(map(silencio, preDelay, Delay, CieloArre[i].color, 194));
          }
        }
      }
    }
    for (let i = 0; i < 20; i++) {
      AcentoArre[i].mover();
      if (haySonido === true) {
        silencio = 0;


        if (varAmplitud > 0.2) {

          AcentoArre[i].colorTormenta();

        }
      // } else {
      //   let Delay = 30 * getFrameRate();
      //   let preDelay = 16 * getFrameRate();
        // if (silencio < Delay) {
        //   silencio++;
        //   if (silencio > preDelay) {
        //     AcentoArre[i].CamColor(map(silencio, preDelay, Delay, MarArre[i].color, 194));
        //   }
        // }
      }
    }

    for (let i = 0; i < 70; i++) {
      MarArre[i].mover();
      if (haySonido === true) {
        silencio = 0;

        MarArre[i].CamColor(map(frecuenciaCruda, minFrecuencia, maxFrecuencia, 340, 260));

        if (varAmplitud > 0.2) {

          MarArre[i].colorTormenta();

        }
      } else {
        let Delay = 30 * getFrameRate();
        let preDelay = 16 * getFrameRate();
        if (silencio < Delay) {
          silencio++;
          if (silencio > preDelay) {
            MarArre[i].CamColor(map(silencio, preDelay, Delay, MarArre[i].color, 194));
          }
        }
      }
    }

  
  }

  console.log(amplitud);

  preAmplitud = amplitud;       //guardar datos del último sonido
  preFrecuencia = frecuencia;

}

function startPitch() {
  pitch = ml5.pitchDetection(pichModel, audioContext, micro.stream, modelLoaded);
}
function modelLoaded() {
  getPitch();
}
function getPitch() {
  pitch.getPitch(function (err, frequency) {
    if (frequency) {
      frecuenciaCruda = frequency;
    }
    getPitch();
  })
}




