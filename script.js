// Declaración de variables

let nombre;
let health = 10;
let coins = 0;
let combat = 5;
let puntaje = 0;
let castillo = 0;
let monedas = 10;
let camino;
let bosqueB;
let cabañaB;
let muelleB;
let brujaH = 10;
let brujaC = 2;
let brujaB;
let combateB;
let soga = 0;
let observarC = 0;
let observarB;
let espada = 0;
let dragonH = 15;
let dragonC = 10;
let voces = 1;

//Funciones

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

function dragon(health, combat) {
  return (dragonActual =
    "\n\nEl dragón tiene " +
    health +
    " puntos de vida y " +
    combat +
    " puntos de combate.");
}

function pelea(combate) {
  return Math.floor(Math.random() * combate);
}

function puntajeFinal(puntos) {
  alert(
    "¡El juego ha acabado! \n\nObtienes un puntaje final de " + puntos + "/100."
  );
}

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

function brujaCombate() {
  do {
    path = Number(
      prompt(
        "Debes escoger tu acción. \n\n1. Pelear.\n2. Huir" +
          inventario(health, coins, combat) +
          bruja(brujaH, brujaC)
      )
    );
  } while (path != 1 && path != 2);
  return path;
}

function muelle() {
  do {
    path = Number(
      prompt(
        "Debes escoger tu camino. \n\n1. Ir con el vendendor.\n2. Ir al muelle.\n0. Volver hacia atrás." +
          inventario(health, coins, combat)
      )
    );
  } while (path != 1 && path != 2 && path != 0);
  return path;
}

function observar() {
  do {
    path = Number(
      prompt(
        "Un hermoso cuerpo de agua se encuentra frente a ti.\n\nDebes escoger tu acción \n\n1. Seguir mirando el agua.\n0. Volver hacia atrás." +
          inventario(health, coins, combat)
      )
    );
  } while (path != 1 && path != 0);
  return path;
}

function castilloF() {
  do {
    path = Number(
      prompt(
        "Debes escoger tu camino. \n\n1. Enfrentar al dragón.\n2. Escapar del dragón." +
          inventario(health, coins, combat)
      )
    );
  } while (path != 1 && path != 2);
  return path;
}

function dragonCombate() {
  do {
    path = Number(
      prompt(
        "Debes escoger tu acción. \n\n1. Pelear.\n2. Huir" +
          inventario(health, coins, combat) +
          dragon(dragonH, dragonC)
      )
    );
  } while (path != 1 && path != 2);
  return path;
}

//Comienzo código

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

do {
  camino = principal();

  switch (camino) {
    case 1:
      alert(
        "'El Bosque Encantado: Donde los árboles susurran secretos y la magia cobra vida.'\nLo cierto es que nunca escuché a un árbol susurrar, pero igualmente, deberías tener cuidado.\n\nSir " +
          nombre +
          ", encuentras a tu izquierda la continuación del bosque. Una dulce voz te llama la atención. A tu derecha, sin embargo, una lúgubre cabaña te invita a pasar."
      );
      bosqueB = true;
      while (bosqueB) {
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
            if (voces == 1) {
              voces = 0;
              puntaje = puntaje + 5;
            }
            if (health <= 0) {
              alert("¡Te has quedado sin puntos de vida!\n\nFIN DEL JUEGO.");
              puntajeFinal(puntaje);
            }
            bosqueB = false;
            break;
          case 2:
            alert(
              "Entras a la cabaña ya sin pensarlo nuevamente. Sientes un frío importante, te tiembla el cuerpo. Sientes miedo, y sabes que no eres la única persona ahí dentro."
            );
            cabañaB = true;
            while (cabañaB) {
              caminoCabaña = cabaña();
              switch (caminoCabaña) {
                case 0:
                  cabañaB = false;
                  break;
                case 1:
                  brujaB = true;
                  while (brujaB) {
                    if (brujaH <= 0) {
                      alert(
                        "Ya has derrotado a la bruja, no hay nada más que ver aquí"
                      );

                      brujaB = false;
                    }
                    if (brujaH > 0) {
                      alert(
                        "Una horrible figura te observa desde una esquina. Observa que sus manos está haciendo movimientos extraños. ¡Deberás derrotar a la bruja!"
                      );
                      combateB = true;
                      while (combateB) {
                        caminoBruja = brujaCombate();
                        switch (caminoBruja) {
                          case 1:
                            if (brujaH > 0 && health > 0) {
                              brujaH = brujaH - pelea(combat);
                              health = health - pelea(brujaC);

                              if (brujaH <= 0) {
                                alert(
                                  "¡Has derrotado a la bruja!\n\nSubes de nivel, tienes más combate."
                                );
                                combat = combat + 2;
                                health = 15;
                                brujaB = false;
                                combateB = false;
                                puntaje = puntaje + 20;
                              } else if (health <= 0) {
                                alert(
                                  "¡La bruja te ha derrotado! Te has quedado sin vida.\n\nFIN DEL JUEGO."
                                );

                                brujaB = false;
                                combateB = false;
                                cabañaB = false;
                                bosqueB = false;
                                puntajeFinal(puntaje);
                              }
                            }
                            break;

                          case 2:
                            brujaB = false;
                            combateB = false;
                            break;
                        }
                      }
                    }
                  }
                  break;
                case 2:
                  if (monedas == 10) {
                    alert(
                      "Exploras la cocina, encuentras, en una alacena, un pequeño cofre.\n\nLo abres... ¡Dentro hay 10 monedas! Las guardas antes que nadie te vea"
                    );
                    monedas = 0;
                    coins = coins + 10;
                    puntaje = puntaje + 10;
                  } else {
                    alert(
                      "Ya exploraste este lugar, te recomiendo que busques en otro lado."
                    );
                  }
                  break;
              }
            }
            break;
        }
      }
      break;
    case 2:
      castillo = 1;
      break;
    case 3:
      alert(
        "'Muelle Javastra: Venga a nuestro hermoso mercado.'\nSir " +
          nombre +
          ", te encuentras frente a una gran cantidad de tiendas que te llaman la atención. \n\nEn uno de los puestos de tu izquierda, un hombre te saluda efusivamente para que te acerques. A tu derecha, tienes el muelle en todo su esplendor."
      );
      muelleB = true;
      while (muelleB) {
        caminoMuelle = muelle();
        switch (caminoMuelle) {
          case 0:
            muelleB = false;
            break;
          case 1:
            //Venta de soga
            if (soga == 1) {
              alert(
                "'Buenos días, Sir " +
                  nombre +
                  ", recuerde que ya no tengo nada para ofrecerle. Solo quería entablar una conversación con usted.'"
              );
            } else {
              alert(
                "'¡Buenos días! Tengo hoy en oferta esta hermosa soga que le permitirá atravesar hasta los más temibles obstáculos. ¡Solo 10 monedas! ¡Es una oferta de tiempo limitado!"
              );
              if (coins == 10) {
                soga = 1;
                coins = 0;
                puntaje = puntaje + 10;

                alert(
                  "'¡Muchas gracias! Sir " +
                    nombre +
                    ", usted ha hecho una fantástica compra! Vuelva pronto.'"
                );
              } else {
                alert(
                  "'Me parece que usted no tiene monedas suficientes para esta maravillosa soga. Lamento decirle que no puedo rebajarle el precio.'"
                );
              }
            }

            break;
          case 2:
            observarB = true;
            while (observarB) {
              caminoObservar = observar();
              switch (caminoObservar) {
                case 0:
                  observarB = false;
                  break;
                case 1:
                  if (espada == 1) {
                    alert("Ya no hay nada que ver aquí, puedes regresar.");
                    observarB = false;
                  } else {
                    observarC++;
                    if (observarC < 3) {
                      alert(
                        "El agua está muy tranquila, no parece suceder nada."
                      );
                    } else {
                      alert(
                        "¡Hay algo en el agua! Un brillo, un artefacto extraño. Te lanzas al agua sin pensarlo."
                      );
                      alert("Te zambulles. Aguantas la respiración.");
                      alert("Todavía no llegas, aguanta un poco más.");
                      alert("¡Estira la mano! ¡Ya casi!");
                      alert("...");
                      alert("...");
                      alert("...");
                      alert(
                        "¡Has conseguido salir del agua! ¡Y con una espada en la mano! Aumentan tu combate, ahora eres todo un guerrero."
                      );
                      combat = combat + 8;
                      espada = 1;
                      puntaje = puntaje + 20;
                    }
                  }
                  break;
              }
            }

            break;
        }
      }

      break;
  }
} while (castillo == 0 && health > 0);

if (castillo == 1) {
  alert(
    "Ya estamos en la recta final de la aventura. Recuerda, no hay vuelta atrás. De aquí salimos con la victoria o con la muerte, ¡pero a no desesperar, Sir " +
      nombre +
      "! Confio plenamente en ti y en tus habilidades."
  );
  alert(
    "El castillo se encuentra a lo lejos, lo ves que está a unas leguas de distancia. El puente roto está frente a ti ahora, y debes cruzarlo."
  );
  if (soga == 1) {
    alert(
      "¡Fuiste lo suficientemente astuto como para traer la soga contigo! Cruzas con tu soga sin problema y pasas por las puertas del castillo."
    );
  } else {
    alert(
      "Cruzar por el río provocó que te cansaras y que te hicieras algo de daño en el proceso. Aún así, llegas a las puertas del castillo y entras."
    );
    health = health - 3;
  }

  alert(
    "Un gran salón se impone frente a ti. El enorme dragón se encuentra ahí, te ve llegar y abre la boca para escupir fuego. ¡Debes hacer algo al respecto!"
  );

  caminoCastillo = castilloF();
  if (caminoCastillo == 1) {
    combateDragonB = true;
    while (combateDragonB) {
      caminoDragon = dragonCombate();
      switch (caminoDragon) {
        case 1:
          if (dragonH > 0 && health > 0) {
            dragonH = dragonH - pelea(combat);
            health = health - pelea(dragonC);

            if (health <= 0) {
              alert(
                "¡El dragón te ha derrotado! Te has quedado sin vida.\n\nFIN DEL JUEGO."
              );
              combateDragonB = false;
              puntajeFinal(puntaje);
            } else if (dragonH <= 0) {
              alert(
                "¡Has derrotado al dragón! La gloria será por siempre tuya. ¡Felicidades! El reino de Javastra te debe tu vida. Vivirás el resto de tus días siendo honrado y tienes un honorifico título. ¡Hurra Sir " +
                  nombre +
                  "!\n\nFIN DEL JUEGO."
              );
              combateDragonB = false;
              puntaje = puntaje + 35;
              puntajeFinal(puntaje);
              if (puntaje == 100) {
                alert("¡JUEGO PERFECTO! Felicidades.");
              }
            }
          }
          break;

        case 2:
          caminoCastillo = 2;
          break;
      }
    }
  }
  if (caminoCastillo == 2) {
    alert(
      "¡Has decidido huir! Debes correr como tan rápido te den las piernas. El dragón es demasiado fuerte y necesitas salir de ahí. ¡Conoces la salida, es por un costado del castillo! Debes correr, antes que te alcance el dragón!"
    );
    for (let i = 0; i < 5; i++) {
      health = health - pelea(dragonC / 2);
      if (health <= 0) {
        alert(
          "¡El dragón te ha derrotado! Te has quedado sin vida.\n\nFIN DEL JUEGO."
        );
        puntajeFinal(puntaje);
        break;
      } else {
        alert(
          "¡Huye! Turno " +
            (i + 1) +
            "." +
            inventario(health, coins, combat) +
            dragon(dragonH, dragonC)
        );
      }
    }

    if (health > 0) {
      alert(
        "¡Has logrado huir! No pudiste con el dragón. Si bien no has salido con la gloria, has logrado conservar tu vida. Vivirás el resto de tus días escondido.\n\nFIN DEL JUEGO."
      );
      puntaje = puntaje + 10;
      puntajeFinal(puntaje);
    }
  }
}
