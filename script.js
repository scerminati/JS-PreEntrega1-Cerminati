let nombre;
let health = 10;
let coins = 0;
let combat = 5;
function inventario(health, coins, combat) {
  return (inventarioActual =
    "\n\nTienes " +
    health +
    " puntos de vida, " +
    coins +
    " monedas y " +
    combat +
    " puntos de combate.");
}

function bruja(health, combat) {
  return (brujaActual =
    "\n\nLa bruja tiene " +
    health +
    " puntos de vida y " +
    combat +
    " puntos de combate.");
}

function pelea(combate) {
  return Math.floor(Math.random() * combate);
}

nombre = prompt(
  "¡Una cordial bienvenida!\n\nPara comenzar, introduce tu nombre aquí debajo. ¡No te preocupes! No estarás firmando ningún contrato...\nPor ahora."
);
while (nombre == "" || nombre == null) {
  nombre = prompt(
    "¡No quieras escaparte! Necesito tu nombre, prometo que no es para realizar un hechizo.\n\nPor favor, introduce tu nombre."
  );
}

alert(
  "Sir " +
    nombre +
    ", ¡un gusto conocerte! Has llegado en el momento indicado, necesitamos tu ayuda.\n\nDebes saber que en nuestro reino, Javascra, una terrible amenaza acecha en el temible castillo que tenemos delante.\n\nMira, te mostraré. Sígueme."
);
alert(
  "Presta mucha atención.\n\nVerás, el castillo que ves en el camino de adelante, es custodiado por un enorme dragón que lo ha invadido, y ha sacado a todos con su temible fuego hace algunas lunas llenas atrás. El castillo contaba con un puente que cruza el río, pero el fuego del dragón lo ha deshecho. Si tomas ese camino, no podrás regresar. ¡Pero necesitamos que vayas a por él! No estamos apurados, debo confesarte, pero nos gustaria que nos puedas ayudar.\n\nPor otro lado, en el camino de la izquierda, tienes el bosque encantado. Puedes descubrir algún que otro encanto en él, podrías investigarlo, y siempre puedes regresar aquí... Si no mueres en el intento, claro. En el bosque hay criaturas que pueden atentar contra ti.\n\nPor último, en este camino que tienes a la derecha, irás al muelle, donde se encuentra un pequeño poblado, ahí se han refugiado la mayoría de los sirvientes del castillo. El rey y la reina se encuentran seguros en un lugar que no puedo decirte...\n\nEn fin, Sir " +
    nombre +
    ", ¡necesitamos de tu ayuda!"
);

let castillo = 0;
let monedas = 10;
let camino;
let bosqueB;
let cabañaB;
let brujaH = 10;
let brujaC = 2;
let brujaB;

do {
  console.log(monedas);
  camino = principal();

  switch (camino) {
    case 1:
      alert(
        "'El Bosque Encantado: Donde los árboles susurran secretos y la magia cobra vida.'\nLo cierto es que nunca escuché a un árbol susurrar, pero igualmente, deberías tener cuidado.\n\nSir " +
          nombre +
          ", encuentras a tu izquierda la continuación del bosque. Una dulce voz te llama la atención. A tu derecha, sin embargo, una lúgubre cabaña te invita a pasar."
      );
      bosqueB = true;
      do {
        caminoBosque = bosque();
        switch (caminoBosque) {
          case 0:
            bosqueB = false;
            break;
          case 1:
            alert(
              "Sigues la dulce voz, y a medida que te adentras esdoin el bosque, te da un poco de sueño.\n\nTe duermes sin darte cuenta. Algo te picotea en el brazo. Pierdes 1 de vida.\n\nAl despertarte, te encuentras nuevamente frente a los tres caminos."
            );
            health--;
            bosqueB = false;
            break;
          case 2:
            alert(
              "Entras a la cabaña ya sin pensarlo nuevamente. Sientes un frío importante, te tiembla el cuerpo. Sientes miedo, y sabes que no eres la única persona ahí dentro."
            );
            cabañaB = true;
            do {
              caminoCabaña = cabaña();
              switch (caminoCabaña) {
                case 0:
                  cabañaB = false;
                  break;
                case 1:
                  brujaB = true;
                  do {
                    if (brujaH > 0) {
                      alert(
                        "Una horrible figura te observa desde una esquina. Observa que sus manos está haciendo movimientos extraños. ¡Deberás derrotar a la bruja!"
                          );
                          brujaCombate()

                    } else {
                      alert(
                        "Ya has derrotado a la bruja, no hay más nada que ver aquí."
                      );
                      brujaB = false;
                    }
                    break;
                  } while (brujaB);
                case 2:
                  if (monedas == 10) {
                    alert(
                      "Exploras la cocina, encuentras, en una alacena, un pequeño cofre.\n\nLo abres... ¡Dentro hay 10 monedas! Las guardas antes que nadie te vea"
                    );
                    monedas = 0;
                    coins = coins + 10;
                  } else {
                    alert(
                      "Ya exploraste esteso lugar, te recomiendo que busques en otro lado."
                    );
                  }
              }
            } while (cabañaB);
        }
        break;
      } while (bosqueB);

    case 2:
      castillo = 1;
      break;

    case 3:
      break;
  }
} while (castillo == 0 && health > 0);

function principal() {
  do {
    path = Number(
      prompt(
        "¡Debes escoger tu camino! Ingresa debajo el número donde deseas dirigirte:\n\n1. Bosque.\n2. Castillo (¡Importante! No podrás regresar).\n3. Muelle" +
          inventario(health, coins, combat)
      )
    );
  } while (path != 1 && path != 2 && path != 3);
  return path;
}

function bosque() {
  do {
    path = Number(
      prompt(
        "Debes escoger tu camino. \n\n1. Adentrarte más en el bosque.\n2. Entrar a la cabaña.\n0. Regresar al comienzo." +
          inventario(health, coins, combat)
      )
    );
  } while (path != 1 && path != 2 && path != 0);
  return path;
}

function cabaña() {
  do {
    path = Number(
      prompt(
        "Debes escoger tu camino. \n\n1. Bajar al sótano.\n2. Explorar la cocina.\n0. Volver hacia atrás." +
          inventario(health, coins, combat)
      )
    );
  } while (path != 1 && path != 2 && path != 0);
  return path;
}

function brujaCombate()
do {
    path = Number(
      prompt(
        "Debes escoger tu acción. \n\n1. Pelear.\n2. Huir" +
          inventario(health, coins, combat) + bruja(brujaH, brujaC)
      )
    );
  } while (path != 1 && path != 2);
  return path;