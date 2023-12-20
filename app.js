const express = require("express");
const cors = require('cors');
const app = express();
const puerto = 3030;

const corsOptions = {
  origin: 'http://localhost:8100',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
// Middleware para procesar JSON
app.use(express.json());

// Ruta de ejemplo
app.get("/", (req, res) => {
  res.send("¡Hola, esta es tu API!");
});

app.get("/api/noticias", (req, res) => {
  const news = [
    {
      id: 1,
      titulo: "Gómez afronta reto con mezcla de tradición y analítica",
      subtitulo: "Este domingo tendría su primer partido completo; el del sábado fue suspendido por lluvia",
      descripcion: `SANTO DOMINGO. Complementar lo tradicional con la información de última generación será la forma en la cual el nuevo manager de los Tigres del Licey afronte el reto que se le presenta.

      Gilbert Gómez delineó su manera de pensar en ese sentido luego de ser designado en la posición en sustitución de José Offerman antes del partido del sábado por la tarde ante las Estrellas Orientales que fue suspendido por lluvia.
      
      «Es una mezcla de todo. La analítica nos da una información, pero tenemos que ver el juego, tener sentimiento», explicó Gómez en su primera entrevista como manager del equipo que viene de ser campeón nacional y del caribe.
      
      El técnico, que ejercía las funciones de coach de control de calidad, reveló que ahora varias personas tendrán a su cargo asumir esas responsabilidades.
      
      «La información es la misma, todos pueden indagar. Luego vamos a filtrar, hacer un plan y decidir cual vamos a utilizar en las líneas», añadió.
      
      Agregó que el tipo de grupo y el juego va a influir en el estilo a imprimir en determinado equipo.
      
      «Hay días que no tienes las mismas condiciones, en otros momentos no tienes las piezas en las mismas condiciones, a veces los elementos fluyen y en otras no», declaró.
      
      Confió en que la transición de coach de control de calidad a manager no será tan difícil para él, ya que maneja la información personal y analítica de los jugadores, dadas sus tendencias en el juego, pero que ahora tendrá que poner junta toda esa información, hacerla lo más simple posible y tomar la mejor decisión que se pueda.
      
      «Es un privilegio y un honor para mí estar en esta posición. No pasa en las circunstancias que uno hubiese deseado, pero estamos listos, en la pelota nada está escrito», dijo el entrenador de 31 años.
      
      Reconoció que en el torneo de béisbol otoño invernal «prácticamente todos los partidos son un juego siete» y más cuando la temporada regular va llegando a su final en medio de la lucha por la clasificación.
      
      «Es buscar la manera de ganar el juego de hoy, las piezas que como grupo pensamos que nos van a ayudar a tener el resultado positivo. Es comunicación, es dejar saber a los muchachos que lo más importante es ganar el partido», añadió.`,
      imagen: "https://lidom.com/media/uploads/2023/12/Gilbert-gomez-728x398.webp"
    },
    {
      id: 2,
      titulo: "Gigantes ganan séptimo en línea y Águilas ven detenida su racha de tres triunfos",
      subtitulo: "El equipo francomacorisano busca ganar el liderato de la serie regular",
      descripcion: `Santo Domingo. Los Gigantes del Cibao ganaron su séptimo partido corrido con una ofensiva oportuna y un pitcheo que enderezó a partir del segundo para vencer a las Águilas Cibaeñas 4-2 en el Estadio Cibao este domingo.

      Jordany Valdespín empujó dos de las cuatro vueltas de su equipo y Emilio Vargas mejoró su comando del segundo episodio en adelante hasta salir en el quinto luego seb4 y 2 tercios.
      Los Gigantes desconocen el amargo de una derrota desde el pasado 7 de diciembre, cuando perdieron 7-3 el segundo de una doble cartelera ante los Toros del Este.
      En su racha victoriosa han por pinado dos blanqueadas, las dos a los Tigres del Licey.
      El conjunto francomacorisano se aproxima a conquistar el título de la serie regular, ahora con marca dle 28-17, con las Estrellas (24-20) a tres juegos y medio.
      El conjunto verde descansó este domingo.
      Las Águilas (20-26) sufren un revés que as aleja del cuarto lugar, en una jornada en que los Tigres del Licey (22-23) derrotaron a los Leones del Escogido.
      
      Las Águilas marcaron primero dos carreras en el inicio del partido gracias a dos dobles consecutivos de Coco Montes y Michael Pérez para poner el partido 2-0.
      José Sirí dio un espectáculo para la primera vuelta de los Gigantes. Recibió boleto de Braden Webb, se robó la intermedia. Webb otorga otro boleto a Luis García y Luis Santana se sacrifica, en la acción Iría se había desprendido en robo para tercera y una vez ejecutado el toque continúo hacia el plato para ganarle al disparó del inicialista.
      Henry Urrutia siguió con un doble al central para empujar a García y Jordan y Valdespín disparó sencillo al central que empujó a Urrutia para darle la ventaja a los Gigantes antes de que Pedro Payano se hiciera cargo del montículo para sacar los últimos dos outs del capítulo.
      La cuarta carrera vino en el el sexto, ahora ante Richard Rodríguez tras un sencillo de Valdespín para que anotara Urrutia.`,
      imagen: "https://lidom.com/media/uploads/2023/12/IMG-20231217-WA0066-360x256.webp"
    },
    {
      id: 3,
      titulo: "Las Estrellas buscan esta noche su pase 22 al Round Robin",
      subtitulo: "Las Estrellas tiene en uno su número mágico para avanzar a la segunda ronda del certamen.",
      descripcion: `SANTO DOMINGO. -Las Estrellas Orientales buscarán su paso por vez 22 a la serie de Round Robin a partir de las 7:30 de la noche ante los Toros del Este en el Estadio Francisco Micheli de la ciudad de La Romana.

      El zurdo Garrett Dávila en su tercera salida de la temporada será el responsable desde la lomita, luego de enfrentar a Licey (Dic 7) y a los Gigantes en San Francisco de Macorís (Dic 12).
      
      Ha trabajado en 4.1 entradas, con tres hits, dos carreras limpias, un cuadrangular y cuatro bases por bolas. En sus previos compromisos las Estrellas han perdido, 4-7 ante Gigantes y 1-5 ante Licey.
      
      Las Estrellas tiene en uno su número mágico para avanzar a la segunda ronda del certamen. Con récord de 24-20, las Estrellas solo necesitan colocarse fuera del alcance de sus rivales de esta noche, los Toros (18-26) y de las Águilas (20-26) para avanzar a la fase de semifondo.
      
      Tanto los Toros como las Águilas, al máximo de victorias al cual pueden aspirar en la actual Serie Regular es a 24, cifra que ya tienen las Estrellas.
      
      Las Estrellas no jugaron el sábado, por la suspensión por lluvia ante. Licey, ni el domingo, por el día libre. Su último juego fue el viernes.
      
      Los Gigantes fueron los primeros en clasificar al Todos contra Todos, el pasado viernes, y están en el primer lugar con marca de 28-17 con siete triunfos seguidos.
      
      Las Estrellas con 24-20 están a 3.5 juegos faltando cinco juegos para terminar la temporada. En 1987-88 y en 2013-15 fueron los equipos con más victorias que han presentado los Orientales en estos juegos.
      
      Han llegado cinco veces en primero; Cuatro en segundo; Cinco en tercero y siete en cuarto lugar.
      
      Los Orientales llegarán a los juegos del Todos contra Todos, por cuarta vez seguida desde la 2020-21. La primera edición fue en 1985-86, pero las Estrellas comenzaron a asistir desde el año siguiente.
      
      La temporada 2023-2024 de la Liga de Béisbol Profesional de la República Dominicana, Copa BanReservas del campeonato de béisbol otoño-invernal 2023-2024 está dedicada a la comunicadora Onfalia Morillo Messina.`,
      imagen: "https://lidom.com/media/uploads/2023/12/Estadio-Francisco-A-Michelliiii-360x211.webp"
    },
    {
      id: 4,
      titulo: "Toros anuncian debut de Candelario para este lunes y contratación de importado",
      subtitulo: "Estará en el roster en sustitución de Pablo Reyes",
      descripcion: `LA ROMANA. Buscando escalar posiciones en la recta final de la Serie Regular, los Toros del Este confirmaron el debut de Jeimer Candelario así como la contratación del importado Troy Johnston.

      El anuncio lo hizo Jesús Mejía, gerente general de los Toros, quien indicó que Candelario estará en uniforme este lunes cuando los Toros reciban a las Estrellas Orientales.
      
      Candelario viene de firmar contrato de tres temporadas y 45 millones de dólares con los Rojos de Cincinnati y ha demostrado ser un jugador de momentos de presión en la liga.
      
      De por vida en playoffs en la pelota dominicana, el antesalista tiene una línea ofensiva de .330/.410/.504 con 8 jonrones y 30 remolcadas en 63 partidos.
      
      Entre todas las etapas, Jeimer batea .273/.356/.411 con 10 cuadrangulares y 58 empujadas en su carrera en LIDOM.
      
      Jeimer estará sustituyendo en el roster a Pablo Reyes, quien no va más por instrucciones de su organización, los Medias Rojas de Boston.
      
      De su lado, la gerencia taurina anunció al inicialista y jardinero Troy Johnston quien viene de una destacada actuación en las menores con los Marlins de Miami.
      
      Johnston, bateador zurdo de 26 años, viene de pegar 26 cuadrangulares y remolcar 116 carreras entre AA y AAA, bateando .307/.399/.549 en 134 partidos. El jugador ya se encuentra el país y debutará cuando considere el dirigente Mendy López.
      
      Los Toros arrancan la semana a tres juegos y medio del cuarto lugar clasificatorio que poseen los Tigres, pero la tropa taurina tendrá la oportunidad de acercarse con dos partidos restantes ante el equipo azul.`,
      imagen: "https://lidom.com/media/uploads/2023/12/candelario-toros-360x240.webp"
    },
    {
      id: 5,
      titulo: "Los Gigantes anuncian el debut de Marcell Ozuna para el martes",
      subtitulo: "El Oso viene de una de sus mejores temporadas en las Grandes Ligas",
      descripcion: `San Francisco de Macorís. Los Gigantes del Cibao anunciaron el debut del estelar jugador Marcell Ozuna para el próximo martes cuando reciban a los Leones del Escogido en San Francisco de Macorís a las 7:00 p.m.

      Ozuna ha estado en comunicación con la gerencia del equipo durante todo el año y solo esperaba cumplir con algunos compromisos profesionales antes de realizar su debut.
      
      La información fue ofrecida por el Gerente General Luis “Pipe” Urueta en medio de una entrevista para el canal de YouTube del club, donde aprovechó para destacar la entrega y compromiso que siente Marcell por la franquicia.
      
      Marcell en LIDOM
      El poderoso bateador derecho de los Gigantes ha participado en cinco temporadas desde el 2012, cuando conectó nueve cuadrangulares y produjo 27 carreras como novato.
      
      El Oso acumula 17 vuelacercas con 63 carreras remolcadas en 124 partidos en sus cinco años en LIDOM.
      
      Marcell jugará con los Gigantes por tercer año consecutivo, incluyendo la temporada 2021-2022 cuando resultó electo el MVP de la serie final.
      
      En las Grandes Ligas
      En las Mayores Ozuna suma 11 temporadas siendo un titular en la mayoría, donde presenta promedio de .269 con OBP de .329 incluyendo 236 cuadrangulares y 776
      carreras remolcadas.
      
      Lo más impresionante de la participación de Marcell Ozuna en esta temporada con los Gigantes es que viene de una de sus mejores temporadas en las Mayores, tras conectar 40 cuadrangulares (marca personal) y 100 remolcadas con 29 dobles y promedio de .274 con los Bravos de Atlanta.`,
      imagen: "https://lidom.com/media/uploads/2022/01/Marcell-Ozuna-22-2-360x274.webp"
    },
    {
      id: 6,
      titulo: "Suspendido cuarto partido por lluvias en San Francisco de Macorís",
      subtitulo: "El juego corresponde al número 22 en el Estadio Julián Javier de San Francisco de Macoris",
      descripcion: `SANTO DOMINGO-El encuentro de Toros del Este ante Gigantes del Cibao fue suspendido por lluvias en la segunda entrada este viernes en el Estadio Julián Javier en San Francisco de Macorís.

      Es el cuarto juego que se suspende por lluvias esta temporada en el estadio de los Gigantes del Cibao, quienes ya habían pasado al Round Robin más temprano.
      
      Las suspensiones de este invierno han sido ante el Escogido (Oct 25) y Toros (Oct 27,Oct 18 y Dic 15) siendo la octava ante los Toros desde el 2006.
      
      El encuentro número 22 de la Serie Regular en San Francisco de Macorís fue suspendido por los efectos de una vaguada ubicada en diferentes niveles de la troposfera, combinada con la llegada de un sistema frontal y la humedad transportada por el viento de dirección noreste.
      
      La Oficina Nacional de Meteorología (Onamet),  indicó que las lluvias en ocasiones pueden estar acompañadas de tormentas eléctricas y ráfagas de viento sobre provincias del noreste.
      
      Los Gigantes se convirtieron en el primer equipo clasificado, cuando el Escogido derrotó a las Águilas 2-0 en el primer juego de la doble cartelera del viernes en Santo Domingo.`,
      imagen: "https://lidom.com/media/uploads/2023/12/Suspendido-vs-TOR-1-360x200.webp"
    },
    {
      id: 7,
      titulo: "Tyler Viza vs Cameron Gann abren doble juego en Santo Domingo",
      subtitulo: "Desde el 21 de noviembre del 2010 los Leones del Escogido han perdido siete juegos seguids en jornadas de doble carteleras.",
      descripcion: `SANTO DOMINGO, – El estadounidense Tyler Viza se enfrentará por primera vez al Escogido en esta temporada en el primero de la doble cartelera de la tarde del viernes en el Estadio Quisqueya Juan Marichal.

      Viza con marca de 2-1 y 2.79 de efectividad, tiene 16 ponches en 19.1 entradas, 23 hits, siete carreras, seis limpias, un jonrón y cuatro boletos.
      
      Mientras que Cameron Gann, en cuatro juegos tiene marca de 0-1 y 8.03 de efectividad, con 12 ponches en 12.1 entradas, trece hits, once limpias, siete bases por bolas.
      
      Se enfrentó a las Águilas por una entrada de tres carreras limpias, tres boletos y ponche en la derrota del Escogido 8-14 en Santo Domingo el 27 de octubre.
      
      Las Águilas que vienen de derrotar a las Estrellas 7-6 en la previa en San Pedro de Macorís, llegan con registro de 18-24, a tres juegos del cuarto lugar, cuando les faltan ocho juegos para completar la serie regular.
      
      Tienen un serio compromiso con los Leones del Escogido, equipo al que jugarán en doble cartelera a partir de las tres de la tarde.`,
      imagen: "https://lidom.com/media/uploads/2023/12/Estadio-Quisqueya-JM-360x202.webp"
    },
    {
      id: 8,
      titulo: "Emilio Bonifacio: “Estos son los partidos que dan campeonatos”",
      subtitulo: "El Licey venció 7-6 en dramático partido a las Águilas la noche del martes",
      descripcion: `SANTO DOMINGO. Los Tigres del Licey ganaron la serie particular a las Águilas Cibaeñas 6-4 tras lograr la victoria en el último partido de la temporada entre los rivales históricos en un encuentro que según el capitán Emilio Bonifacio, mostró la identidad de campeones del conjunto azul.

      “Estos son los partidos que dan campeonato, no nos rendimos. Apoyamos a Jairo que lamentablemente no pudo sacar los tres outs en el noveno, eso es lo que hacen los equipos campeones, venir de atrás”, expresó.
      
      El capitán Azul dio crédito a Ramón Hernández que impulsó la energía, confianza y motivación de los azules desde el dugout.
      
      “Hubo mucho ánimo, escuchar a Ramón Hernández que dijo “nosotros hicimos cuatro carreras ¿por qué no podemos hacer más?”, eso fue tremendo para animarnos. Mucho crédito a Michael que empezó en inning con hit, tomamos buenos turnos y gracias a Dios pudimos sacar el juego”, destacó.
      
      Bonifacio bateó de 4-2 con una base por bola intencional, una anotada y una remolcada. Fue el encargado de traer la primera carrera de los azules con un sencillo hacia la banda contraria que remolcó a Sergio Alcántara con un out en el octavo capítulo. De esa manera, sirvió la mesa para Mel Rojas Jr. que conectó uno de los cuadrangulares más dramáticos de la campaña.
      
      “Me mantuve con mi plan, mi approach en todo el turno fue no hacerle swing al slider. Yo sé que le gusta tirarlo (William Jerez) para la pierna de atrás así que fue a buscar la recta, la tiró y gracias a Dios y pude conectar de hit”, destacó.
      
      Bonifacio, catalogado por Mel Rojas Jr como “la bujía y mejor jugador del equipo”, volvió ayer a la alineación de los Tigres tras sufrir un hematoma en una pierna que lo dejó fuera cinco encuentros.
      
      “Tenía un hematoma, la pierna estaba muy negra, pero en mi último partido anotó desde primera cómodo, no tenía ningún dolor. Estaba preparado desde el viernes para regresar, pero tenía que esperar el roster semanal. Solo fue un movimiento de precaución, era mejor perderme un par de partidos y volver que seguir y luego perderme el resto de la temporada”, concluyó.
      
      Ahora, el capitán azul ha conectado de hit en sus últimos ocho partidos y se ha conseguido llegar a las bases en 16 de manera consecutiva. Es tercero en porcentaje de embasarse con .414 y a pesar de su ausencia de cinco partidos sigue tercero en la liga en anotadas con 25.`,
      imagen: "https://lidom.com/media/uploads/2023/12/emilio-bonifacio-240x360.webp"
    },
    {
      id: 9,
      titulo: "Raúl Valdés empata con Pedro Borbón como el quinto más ganador de LIDOM",
      subtitulo: "Ante el Escogido en el Estadio Francisco Micheli, Valdés, en trece juegos tiene marca de 5-6, 2.68 de efectividad y 58 ponches en 67.1 entradas, con 58 hits, 25 carreras, 20 limpias, cinco jonrones y 16 boletos gratis.",
      descripcion: `SANTO DOMINGO. -Raúl Valdés, de los Toros, con su cuarto triunfo de la temporada en la noche del martes 8-0 ante el Escogido, empató con Pedro Borbón con 56 triunfos en la Liga Dominicana.

      Junior Lake conectó el único hit del juego en un batazo por la tercera base en la primera entrada del juego celebrado en el Estadio Francisco Micheli de la ciudad de La Romana.
      
      Valdés tiene marca de 4-5, 4.34 de efectividad en nueve partidos en los que ha ponchado a 32 en 45.2 entradas, con 41 hits permitidos, 24 carreras, 22 carreras limpias, seis jonrones y quince boletos.
      
      Ahora, Pedro Borbón y Raúl Valdés, con sus 56 triunfos cada uno, están ubicados en el quinto puesto de los lanzadores con más victorias desde 1951.
      
      Siguen en el listado, Efraín Valdez (60), Silvano Quezada (64), Federico Olivo (79) y Diomedes Olivo (86).
      
      En 156 aperturas su récord es de 56-55, con 3.11 de efectividad,655 ponches en 856.1 entradas lanzadas, con 772 hits.
      
      363 carreras, 296 carreras limpias, 61 jonrones, 252 bases por bolas, 10 bases intencionales y 26 pelotazos en veinte temporadas.
      
      Ante el Escogido en el Estadio Francisco Micheli, Valdés, en trece juegos tiene marca de 5-6, 2.68 de efectividad y 58 ponches en 67.1 entradas, con 58 hits, 25 carreras, 20 limpias, cinco jonrones y 16 boletos gratis.
      
      El del martes fue su sexto juego de ocho ponches o más en el circuito invernal dominicano.`,
      imagen: "https://lidom.com/media/uploads/2023/12/Raul-Valdes-360x184.webp"
    },
    {
      id: 10,
      titulo: "Gigantes siguen en racha con su cuarto triunfo al vencer a Estrellas, que siguen sin ganar en cuatro juegos",
      subtitulo: "Franco y Santana lideran triunfo cibaeño y opacan el debut de Fernando Tatis Jr.",
      descripcion: `Santo Domingo. Carlos Franco dio un jonrón y empujó cuatro carreras y Luis Santana también la botó y remolcó otras dos para juntos estropear el debut de Fernando Tatis Jr en un triunfo 7-4 de los Gigantes del Cibao sobre las Estrellas Orientales en el Estadio Julián Javier.
      El encuentro fue detenido por más de una hora debido a la lluvia, por lo que concluyó pasada la media noche con el triunfo cibaeño que compila su cuarto triunfo corrido y extienden a cuatro la cadena negativa de las Estrellas.
      La victoria aleja a los Gigantes (25-17) a dos juegos y medio sobre sobre las Estrellas (22-19), cuando les restan ocho y nueve, respectivamente para concluir la serie regular.
      Las Estrellas desaprovecharon la derrota de los Leones del Escogido (22-19) para seguir empatados en la segunda posición con unos Tigres del Licey (21-20) a un partido completo.
      Blas Castaño (1-0, 2.79) lanzó un cuarto y quinto episodio de 2 hits ante ocho bateadores para ser el lanzador ganador y Reymín Guduán tuvo un relevo de cinco outs con su entrada y dos tercios de dos hits, una carrera y cuatro ponches para su salvamento número 11 de la temporada.
      Gerson Moreno (2-2; 3.77) cargó con la derrota.
      Tatis Jr., quien estuvo de designado, se fue de 3-0, una anotada, un boleto y un ponche.
      Las Estrellas tomaron la ventaja en el primer tercio del juego con una en el segundo y dos en el tercero para ponerse 3-0. Un rodado al lanzador puso el juego 1-0; un elevado de sacrificio de Dairon Blanco y doble de Vidal Bruján dieron la ventaja a los orientales.
      En el cuarto, un jonrón de Franco, ante Garret Dávila, que también trajo a la goma a Edwin Espinal puso el partido por la mínima.
      Otro episodio de dos vueltas, en el quinto, Franco produjo otras dos con sencillo ante José Manuel Fernández que llevó al plato a José Sirí y a Leury García y así los Gigantes tomaron el control 4-3. Fernández entró a lanzar por Gerson Moreno quien dejó laa bases llenas.
      En el séptimo, después del receso por la lluvia, Erick Mejía recibió boleto con las bases llenas y anotó Leury García, la quinta de los cibaeños.
      Las Estrellas se pusieron por la mínima en el octavo con un doble de Arauz, que remolcó a Vidal Bruján.
      Pero la respuesta de los Gigantes amplió la ventaja al marcar dos carreras, gracias al cuadrangular de Luis Santana ante Julián Fernández con un compañero en circulación para el 7-4.
      Por las Estrellas, Franco bateó de 3-2, un jonrón, con una anotada y cuatro impulsadas; Santana, de 3-2, un jonrón, una anotada y dos empujadas Erick Mejía de 3-1, una remolcada.
      Por las Estrellas, Jonathan Arauz de 4-1, un doble y dos empujadas y Vidal Bruján de 4-2, un doble, una anotada y una empujada.`,
      imagen: "https://lidom.com/media/uploads/2023/12/IMG-20231213-WA0012-360x241.webp"
    },
  ];

  res.json(news);
});

app.get('/api/noticia/:id', (req, res) => {
  const parametro = req.params.id;

  const news = [
    {
      id: 1,
      titulo: "Gómez afronta reto con mezcla de tradición y analítica",
      subtitulo: "Este domingo tendría su primer partido completo; el del sábado fue suspendido por lluvia",
      descripcion: `SANTO DOMINGO. Complementar lo tradicional con la información de última generación será la forma en la cual el nuevo manager de los Tigres del Licey afronte el reto que se le presenta.

      Gilbert Gómez delineó su manera de pensar en ese sentido luego de ser designado en la posición en sustitución de José Offerman antes del partido del sábado por la tarde ante las Estrellas Orientales que fue suspendido por lluvia.
      
      «Es una mezcla de todo. La analítica nos da una información, pero tenemos que ver el juego, tener sentimiento», explicó Gómez en su primera entrevista como manager del equipo que viene de ser campeón nacional y del caribe.
      
      El técnico, que ejercía las funciones de coach de control de calidad, reveló que ahora varias personas tendrán a su cargo asumir esas responsabilidades.
      
      «La información es la misma, todos pueden indagar. Luego vamos a filtrar, hacer un plan y decidir cual vamos a utilizar en las líneas», añadió.
      
      Agregó que el tipo de grupo y el juego va a influir en el estilo a imprimir en determinado equipo.
      
      «Hay días que no tienes las mismas condiciones, en otros momentos no tienes las piezas en las mismas condiciones, a veces los elementos fluyen y en otras no», declaró.
      
      Confió en que la transición de coach de control de calidad a manager no será tan difícil para él, ya que maneja la información personal y analítica de los jugadores, dadas sus tendencias en el juego, pero que ahora tendrá que poner junta toda esa información, hacerla lo más simple posible y tomar la mejor decisión que se pueda.
      
      «Es un privilegio y un honor para mí estar en esta posición. No pasa en las circunstancias que uno hubiese deseado, pero estamos listos, en la pelota nada está escrito», dijo el entrenador de 31 años.
      
      Reconoció que en el torneo de béisbol otoño invernal «prácticamente todos los partidos son un juego siete» y más cuando la temporada regular va llegando a su final en medio de la lucha por la clasificación.
      
      «Es buscar la manera de ganar el juego de hoy, las piezas que como grupo pensamos que nos van a ayudar a tener el resultado positivo. Es comunicación, es dejar saber a los muchachos que lo más importante es ganar el partido», añadió.`,
      imagen: "https://lidom.com/media/uploads/2023/12/Gilbert-gomez-728x398.webp"
    },
    {
      id: 2,
      titulo: "Gigantes ganan séptimo en línea y Águilas ven detenida su racha de tres triunfos",
      subtitulo: "El equipo francomacorisano busca ganar el liderato de la serie regular",
      descripcion: `Santo Domingo. Los Gigantes del Cibao ganaron su séptimo partido corrido con una ofensiva oportuna y un pitcheo que enderezó a partir del segundo para vencer a las Águilas Cibaeñas 4-2 en el Estadio Cibao este domingo.

      Jordany Valdespín empujó dos de las cuatro vueltas de su equipo y Emilio Vargas mejoró su comando del segundo episodio en adelante hasta salir en el quinto luego seb4 y 2 tercios.
      Los Gigantes desconocen el amargo de una derrota desde el pasado 7 de diciembre, cuando perdieron 7-3 el segundo de una doble cartelera ante los Toros del Este.
      En su racha victoriosa han por pinado dos blanqueadas, las dos a los Tigres del Licey.
      El conjunto francomacorisano se aproxima a conquistar el título de la serie regular, ahora con marca dle 28-17, con las Estrellas (24-20) a tres juegos y medio.
      El conjunto verde descansó este domingo.
      Las Águilas (20-26) sufren un revés que as aleja del cuarto lugar, en una jornada en que los Tigres del Licey (22-23) derrotaron a los Leones del Escogido.
      
      Las Águilas marcaron primero dos carreras en el inicio del partido gracias a dos dobles consecutivos de Coco Montes y Michael Pérez para poner el partido 2-0.
      José Sirí dio un espectáculo para la primera vuelta de los Gigantes. Recibió boleto de Braden Webb, se robó la intermedia. Webb otorga otro boleto a Luis García y Luis Santana se sacrifica, en la acción Iría se había desprendido en robo para tercera y una vez ejecutado el toque continúo hacia el plato para ganarle al disparó del inicialista.
      Henry Urrutia siguió con un doble al central para empujar a García y Jordan y Valdespín disparó sencillo al central que empujó a Urrutia para darle la ventaja a los Gigantes antes de que Pedro Payano se hiciera cargo del montículo para sacar los últimos dos outs del capítulo.
      La cuarta carrera vino en el el sexto, ahora ante Richard Rodríguez tras un sencillo de Valdespín para que anotara Urrutia.`,
      imagen: "https://lidom.com/media/uploads/2023/12/IMG-20231217-WA0066-360x256.webp"
    },
    {
      id: 3,
      titulo: "Las Estrellas buscan esta noche su pase 22 al Round Robin",
      subtitulo: "Las Estrellas tiene en uno su número mágico para avanzar a la segunda ronda del certamen.",
      descripcion: `SANTO DOMINGO. -Las Estrellas Orientales buscarán su paso por vez 22 a la serie de Round Robin a partir de las 7:30 de la noche ante los Toros del Este en el Estadio Francisco Micheli de la ciudad de La Romana.

      El zurdo Garrett Dávila en su tercera salida de la temporada será el responsable desde la lomita, luego de enfrentar a Licey (Dic 7) y a los Gigantes en San Francisco de Macorís (Dic 12).
      
      Ha trabajado en 4.1 entradas, con tres hits, dos carreras limpias, un cuadrangular y cuatro bases por bolas. En sus previos compromisos las Estrellas han perdido, 4-7 ante Gigantes y 1-5 ante Licey.
      
      Las Estrellas tiene en uno su número mágico para avanzar a la segunda ronda del certamen. Con récord de 24-20, las Estrellas solo necesitan colocarse fuera del alcance de sus rivales de esta noche, los Toros (18-26) y de las Águilas (20-26) para avanzar a la fase de semifondo.
      
      Tanto los Toros como las Águilas, al máximo de victorias al cual pueden aspirar en la actual Serie Regular es a 24, cifra que ya tienen las Estrellas.
      
      Las Estrellas no jugaron el sábado, por la suspensión por lluvia ante. Licey, ni el domingo, por el día libre. Su último juego fue el viernes.
      
      Los Gigantes fueron los primeros en clasificar al Todos contra Todos, el pasado viernes, y están en el primer lugar con marca de 28-17 con siete triunfos seguidos.
      
      Las Estrellas con 24-20 están a 3.5 juegos faltando cinco juegos para terminar la temporada. En 1987-88 y en 2013-15 fueron los equipos con más victorias que han presentado los Orientales en estos juegos.
      
      Han llegado cinco veces en primero; Cuatro en segundo; Cinco en tercero y siete en cuarto lugar.
      
      Los Orientales llegarán a los juegos del Todos contra Todos, por cuarta vez seguida desde la 2020-21. La primera edición fue en 1985-86, pero las Estrellas comenzaron a asistir desde el año siguiente.
      
      La temporada 2023-2024 de la Liga de Béisbol Profesional de la República Dominicana, Copa BanReservas del campeonato de béisbol otoño-invernal 2023-2024 está dedicada a la comunicadora Onfalia Morillo Messina.`,
      imagen: "https://lidom.com/media/uploads/2023/12/Estadio-Francisco-A-Michelliiii-360x211.webp"
    },
    {
      id: 4,
      titulo: "Toros anuncian debut de Candelario para este lunes y contratación de importado",
      subtitulo: "Estará en el roster en sustitución de Pablo Reyes",
      descripcion: `LA ROMANA. Buscando escalar posiciones en la recta final de la Serie Regular, los Toros del Este confirmaron el debut de Jeimer Candelario así como la contratación del importado Troy Johnston.

      El anuncio lo hizo Jesús Mejía, gerente general de los Toros, quien indicó que Candelario estará en uniforme este lunes cuando los Toros reciban a las Estrellas Orientales.
      
      Candelario viene de firmar contrato de tres temporadas y 45 millones de dólares con los Rojos de Cincinnati y ha demostrado ser un jugador de momentos de presión en la liga.
      
      De por vida en playoffs en la pelota dominicana, el antesalista tiene una línea ofensiva de .330/.410/.504 con 8 jonrones y 30 remolcadas en 63 partidos.
      
      Entre todas las etapas, Jeimer batea .273/.356/.411 con 10 cuadrangulares y 58 empujadas en su carrera en LIDOM.
      
      Jeimer estará sustituyendo en el roster a Pablo Reyes, quien no va más por instrucciones de su organización, los Medias Rojas de Boston.
      
      De su lado, la gerencia taurina anunció al inicialista y jardinero Troy Johnston quien viene de una destacada actuación en las menores con los Marlins de Miami.
      
      Johnston, bateador zurdo de 26 años, viene de pegar 26 cuadrangulares y remolcar 116 carreras entre AA y AAA, bateando .307/.399/.549 en 134 partidos. El jugador ya se encuentra el país y debutará cuando considere el dirigente Mendy López.
      
      Los Toros arrancan la semana a tres juegos y medio del cuarto lugar clasificatorio que poseen los Tigres, pero la tropa taurina tendrá la oportunidad de acercarse con dos partidos restantes ante el equipo azul.`,
      imagen: "https://lidom.com/media/uploads/2023/12/candelario-toros-360x240.webp"
    },
    {
      id: 5,
      titulo: "Los Gigantes anuncian el debut de Marcell Ozuna para el martes",
      subtitulo: "El Oso viene de una de sus mejores temporadas en las Grandes Ligas",
      descripcion: `San Francisco de Macorís. Los Gigantes del Cibao anunciaron el debut del estelar jugador Marcell Ozuna para el próximo martes cuando reciban a los Leones del Escogido en San Francisco de Macorís a las 7:00 p.m.

      Ozuna ha estado en comunicación con la gerencia del equipo durante todo el año y solo esperaba cumplir con algunos compromisos profesionales antes de realizar su debut.
      
      La información fue ofrecida por el Gerente General Luis “Pipe” Urueta en medio de una entrevista para el canal de YouTube del club, donde aprovechó para destacar la entrega y compromiso que siente Marcell por la franquicia.
      
      Marcell en LIDOM
      El poderoso bateador derecho de los Gigantes ha participado en cinco temporadas desde el 2012, cuando conectó nueve cuadrangulares y produjo 27 carreras como novato.
      
      El Oso acumula 17 vuelacercas con 63 carreras remolcadas en 124 partidos en sus cinco años en LIDOM.
      
      Marcell jugará con los Gigantes por tercer año consecutivo, incluyendo la temporada 2021-2022 cuando resultó electo el MVP de la serie final.
      
      En las Grandes Ligas
      En las Mayores Ozuna suma 11 temporadas siendo un titular en la mayoría, donde presenta promedio de .269 con OBP de .329 incluyendo 236 cuadrangulares y 776
      carreras remolcadas.
      
      Lo más impresionante de la participación de Marcell Ozuna en esta temporada con los Gigantes es que viene de una de sus mejores temporadas en las Mayores, tras conectar 40 cuadrangulares (marca personal) y 100 remolcadas con 29 dobles y promedio de .274 con los Bravos de Atlanta.`,
      imagen: "https://lidom.com/media/uploads/2022/01/Marcell-Ozuna-22-2-360x274.webp"
    },
    {
      id: 6,
      titulo: "Suspendido cuarto partido por lluvias en San Francisco de Macorís",
      subtitulo: "El juego corresponde al número 22 en el Estadio Julián Javier de San Francisco de Macoris",
      descripcion: `SANTO DOMINGO-El encuentro de Toros del Este ante Gigantes del Cibao fue suspendido por lluvias en la segunda entrada este viernes en el Estadio Julián Javier en San Francisco de Macorís.

      Es el cuarto juego que se suspende por lluvias esta temporada en el estadio de los Gigantes del Cibao, quienes ya habían pasado al Round Robin más temprano.
      
      Las suspensiones de este invierno han sido ante el Escogido (Oct 25) y Toros (Oct 27,Oct 18 y Dic 15) siendo la octava ante los Toros desde el 2006.
      
      El encuentro número 22 de la Serie Regular en San Francisco de Macorís fue suspendido por los efectos de una vaguada ubicada en diferentes niveles de la troposfera, combinada con la llegada de un sistema frontal y la humedad transportada por el viento de dirección noreste.
      
      La Oficina Nacional de Meteorología (Onamet),  indicó que las lluvias en ocasiones pueden estar acompañadas de tormentas eléctricas y ráfagas de viento sobre provincias del noreste.
      
      Los Gigantes se convirtieron en el primer equipo clasificado, cuando el Escogido derrotó a las Águilas 2-0 en el primer juego de la doble cartelera del viernes en Santo Domingo.`,
      imagen: "https://lidom.com/media/uploads/2023/12/Suspendido-vs-TOR-1-360x200.webp"
    },
    {
      id: 7,
      titulo: "Tyler Viza vs Cameron Gann abren doble juego en Santo Domingo",
      subtitulo: "Desde el 21 de noviembre del 2010 los Leones del Escogido han perdido siete juegos seguids en jornadas de doble carteleras.",
      descripcion: `SANTO DOMINGO, – El estadounidense Tyler Viza se enfrentará por primera vez al Escogido en esta temporada en el primero de la doble cartelera de la tarde del viernes en el Estadio Quisqueya Juan Marichal.

      Viza con marca de 2-1 y 2.79 de efectividad, tiene 16 ponches en 19.1 entradas, 23 hits, siete carreras, seis limpias, un jonrón y cuatro boletos.
      
      Mientras que Cameron Gann, en cuatro juegos tiene marca de 0-1 y 8.03 de efectividad, con 12 ponches en 12.1 entradas, trece hits, once limpias, siete bases por bolas.
      
      Se enfrentó a las Águilas por una entrada de tres carreras limpias, tres boletos y ponche en la derrota del Escogido 8-14 en Santo Domingo el 27 de octubre.
      
      Las Águilas que vienen de derrotar a las Estrellas 7-6 en la previa en San Pedro de Macorís, llegan con registro de 18-24, a tres juegos del cuarto lugar, cuando les faltan ocho juegos para completar la serie regular.
      
      Tienen un serio compromiso con los Leones del Escogido, equipo al que jugarán en doble cartelera a partir de las tres de la tarde.`,
      imagen: "https://lidom.com/media/uploads/2023/12/Estadio-Quisqueya-JM-360x202.webp"
    },
    {
      id: 8,
      titulo: "Emilio Bonifacio: “Estos son los partidos que dan campeonatos”",
      subtitulo: "El Licey venció 7-6 en dramático partido a las Águilas la noche del martes",
      descripcion: `SANTO DOMINGO. Los Tigres del Licey ganaron la serie particular a las Águilas Cibaeñas 6-4 tras lograr la victoria en el último partido de la temporada entre los rivales históricos en un encuentro que según el capitán Emilio Bonifacio, mostró la identidad de campeones del conjunto azul.

      “Estos son los partidos que dan campeonato, no nos rendimos. Apoyamos a Jairo que lamentablemente no pudo sacar los tres outs en el noveno, eso es lo que hacen los equipos campeones, venir de atrás”, expresó.
      
      El capitán Azul dio crédito a Ramón Hernández que impulsó la energía, confianza y motivación de los azules desde el dugout.
      
      “Hubo mucho ánimo, escuchar a Ramón Hernández que dijo “nosotros hicimos cuatro carreras ¿por qué no podemos hacer más?”, eso fue tremendo para animarnos. Mucho crédito a Michael que empezó en inning con hit, tomamos buenos turnos y gracias a Dios pudimos sacar el juego”, destacó.
      
      Bonifacio bateó de 4-2 con una base por bola intencional, una anotada y una remolcada. Fue el encargado de traer la primera carrera de los azules con un sencillo hacia la banda contraria que remolcó a Sergio Alcántara con un out en el octavo capítulo. De esa manera, sirvió la mesa para Mel Rojas Jr. que conectó uno de los cuadrangulares más dramáticos de la campaña.
      
      “Me mantuve con mi plan, mi approach en todo el turno fue no hacerle swing al slider. Yo sé que le gusta tirarlo (William Jerez) para la pierna de atrás así que fue a buscar la recta, la tiró y gracias a Dios y pude conectar de hit”, destacó.
      
      Bonifacio, catalogado por Mel Rojas Jr como “la bujía y mejor jugador del equipo”, volvió ayer a la alineación de los Tigres tras sufrir un hematoma en una pierna que lo dejó fuera cinco encuentros.
      
      “Tenía un hematoma, la pierna estaba muy negra, pero en mi último partido anotó desde primera cómodo, no tenía ningún dolor. Estaba preparado desde el viernes para regresar, pero tenía que esperar el roster semanal. Solo fue un movimiento de precaución, era mejor perderme un par de partidos y volver que seguir y luego perderme el resto de la temporada”, concluyó.
      
      Ahora, el capitán azul ha conectado de hit en sus últimos ocho partidos y se ha conseguido llegar a las bases en 16 de manera consecutiva. Es tercero en porcentaje de embasarse con .414 y a pesar de su ausencia de cinco partidos sigue tercero en la liga en anotadas con 25.`,
      imagen: "https://lidom.com/media/uploads/2023/12/emilio-bonifacio-240x360.webp"
    },
    {
      id: 9,
      titulo: "Raúl Valdés empata con Pedro Borbón como el quinto más ganador de LIDOM",
      subtitulo: "Ante el Escogido en el Estadio Francisco Micheli, Valdés, en trece juegos tiene marca de 5-6, 2.68 de efectividad y 58 ponches en 67.1 entradas, con 58 hits, 25 carreras, 20 limpias, cinco jonrones y 16 boletos gratis.",
      descripcion: `SANTO DOMINGO. -Raúl Valdés, de los Toros, con su cuarto triunfo de la temporada en la noche del martes 8-0 ante el Escogido, empató con Pedro Borbón con 56 triunfos en la Liga Dominicana.

      Junior Lake conectó el único hit del juego en un batazo por la tercera base en la primera entrada del juego celebrado en el Estadio Francisco Micheli de la ciudad de La Romana.
      
      Valdés tiene marca de 4-5, 4.34 de efectividad en nueve partidos en los que ha ponchado a 32 en 45.2 entradas, con 41 hits permitidos, 24 carreras, 22 carreras limpias, seis jonrones y quince boletos.
      
      Ahora, Pedro Borbón y Raúl Valdés, con sus 56 triunfos cada uno, están ubicados en el quinto puesto de los lanzadores con más victorias desde 1951.
      
      Siguen en el listado, Efraín Valdez (60), Silvano Quezada (64), Federico Olivo (79) y Diomedes Olivo (86).
      
      En 156 aperturas su récord es de 56-55, con 3.11 de efectividad,655 ponches en 856.1 entradas lanzadas, con 772 hits.
      
      363 carreras, 296 carreras limpias, 61 jonrones, 252 bases por bolas, 10 bases intencionales y 26 pelotazos en veinte temporadas.
      
      Ante el Escogido en el Estadio Francisco Micheli, Valdés, en trece juegos tiene marca de 5-6, 2.68 de efectividad y 58 ponches en 67.1 entradas, con 58 hits, 25 carreras, 20 limpias, cinco jonrones y 16 boletos gratis.
      
      El del martes fue su sexto juego de ocho ponches o más en el circuito invernal dominicano.`,
      imagen: "https://lidom.com/media/uploads/2023/12/Raul-Valdes-360x184.webp"
    },
    {
      id: 10,
      titulo: "Gigantes siguen en racha con su cuarto triunfo al vencer a Estrellas, que siguen sin ganar en cuatro juegos",
      subtitulo: "Franco y Santana lideran triunfo cibaeño y opacan el debut de Fernando Tatis Jr.",
      descripcion: `Santo Domingo. Carlos Franco dio un jonrón y empujó cuatro carreras y Luis Santana también la botó y remolcó otras dos para juntos estropear el debut de Fernando Tatis Jr en un triunfo 7-4 de los Gigantes del Cibao sobre las Estrellas Orientales en el Estadio Julián Javier.
      El encuentro fue detenido por más de una hora debido a la lluvia, por lo que concluyó pasada la media noche con el triunfo cibaeño que compila su cuarto triunfo corrido y extienden a cuatro la cadena negativa de las Estrellas.
      La victoria aleja a los Gigantes (25-17) a dos juegos y medio sobre sobre las Estrellas (22-19), cuando les restan ocho y nueve, respectivamente para concluir la serie regular.
      Las Estrellas desaprovecharon la derrota de los Leones del Escogido (22-19) para seguir empatados en la segunda posición con unos Tigres del Licey (21-20) a un partido completo.
      Blas Castaño (1-0, 2.79) lanzó un cuarto y quinto episodio de 2 hits ante ocho bateadores para ser el lanzador ganador y Reymín Guduán tuvo un relevo de cinco outs con su entrada y dos tercios de dos hits, una carrera y cuatro ponches para su salvamento número 11 de la temporada.
      Gerson Moreno (2-2; 3.77) cargó con la derrota.
      Tatis Jr., quien estuvo de designado, se fue de 3-0, una anotada, un boleto y un ponche.
      Las Estrellas tomaron la ventaja en el primer tercio del juego con una en el segundo y dos en el tercero para ponerse 3-0. Un rodado al lanzador puso el juego 1-0; un elevado de sacrificio de Dairon Blanco y doble de Vidal Bruján dieron la ventaja a los orientales.
      En el cuarto, un jonrón de Franco, ante Garret Dávila, que también trajo a la goma a Edwin Espinal puso el partido por la mínima.
      Otro episodio de dos vueltas, en el quinto, Franco produjo otras dos con sencillo ante José Manuel Fernández que llevó al plato a José Sirí y a Leury García y así los Gigantes tomaron el control 4-3. Fernández entró a lanzar por Gerson Moreno quien dejó laa bases llenas.
      En el séptimo, después del receso por la lluvia, Erick Mejía recibió boleto con las bases llenas y anotó Leury García, la quinta de los cibaeños.
      Las Estrellas se pusieron por la mínima en el octavo con un doble de Arauz, que remolcó a Vidal Bruján.
      Pero la respuesta de los Gigantes amplió la ventaja al marcar dos carreras, gracias al cuadrangular de Luis Santana ante Julián Fernández con un compañero en circulación para el 7-4.
      Por las Estrellas, Franco bateó de 3-2, un jonrón, con una anotada y cuatro impulsadas; Santana, de 3-2, un jonrón, una anotada y dos empujadas Erick Mejía de 3-1, una remolcada.
      Por las Estrellas, Jonathan Arauz de 4-1, un doble y dos empujadas y Vidal Bruján de 4-2, un doble, una anotada y una empujada.`,
      imagen: "https://lidom.com/media/uploads/2023/12/IMG-20231213-WA0012-360x241.webp"
    },
  ];

  let noticia = news.find(x => x.id == parametro);

  res.json(noticia);
});

app.get("/api/calendario", (req, res) => {
  const calendario = [
    {
      Fecha: "19-12-2023",
      Visitante: "Leones Leones",
      Casa: "Gigantes Gigantes",
      Hora: "07:00 pm",
    },
    {
      Fecha: "19-12-2023",
      Visitante: "Toros Toros",
      Casa: "Tigres Tigres",
      Hora: "07:15 pm",
    },
    {
      Fecha: "19-12-2023",
      Visitante: "Aguilas Aguilas",
      Casa: "Estrellas Estrellas",
      Hora: "07:30 pm",
    },
    {
      Fecha: "20-12-2023",
      Visitante: "Gigantes Gigantes",
      Casa: "Leones Leones",
      Hora: "07:15 pm",
    },
    {
      Fecha: "20-12-2023",
      Visitante: "Estrellas Estrellas",
      Casa: "Aguilas Aguilas",
      Hora: "07:30 pm",
    },
    {
      Fecha: "20-12-2023",
      Visitante: "Tigres Tigres",
      Casa: "Toros Toros",
      Hora: "07:30 pm",
    },
    {
      Fecha: "21-12-2023",
      Visitante: "Aguilas Aguilas",
      Casa: "Gigantes Gigantes",
      Hora: "07:00 pm",
    },
    {
      Fecha: "21-12-2023",
      Visitante: "Leones Leones",
      Casa: "Tigres Tigres",
      Hora: "07:15 pm",
    },
    {
      Fecha: "21-12-2023",
      Visitante: "Toros Toros",
      Casa: "Estrellas Estrellas",
      Hora: "07:30 pm",
    },
    {
      Fecha: "22-12-2023",
      Visitante: "Aguilas Aguilas",
      Casa: "Gigantes Gigantes",
      Hora: "07:05 pm",
    },
    {
      Fecha: "22-12-2023",
      Visitante: "Tigres Tigres",
      Casa: "Leones Leones",
      Hora: "07:15 pm",
    },
    {
      Fecha: "22-12-2023",
      Visitante: "Estrellas Estrellas",
      Casa: "Toros Toros",
      Hora: "07:35 pm",
    },
  ];

  res.json(calendario);
});

app.get("/api/posiciones", (req, res) => {
  const posiciones = [
    {
      ID: 1,
      Equipo: "Gigantes Gigantes",
      G: 28,
      P: 17,
      DIF: "-",
      GC: "-",
      EO: 8,
      LE: 4,
      TL: 6,
      AC: 4,
      TE: 6,
      PCT: ".622",
      CASA: "12 - 9",
      RUTA: "16 - 8",
    },
    {
      ID: 2,
      Equipo: "Estrellas Estrellas",
      G: 24,
      P: 20,
      DIF: "3.5",
      GC: 2,
      EO: "-",
      LE: 6,
      TL: 5,
      AC: 5,
      TE: 6,
      PCT: ".545",
      CASA: "12 - 11",
      RUTA: "12 - 9",
    },
    {
      ID: 3,
      Equipo: "Leones Leones",
      G: 23,
      P: 23,
      DIF: "5.5",
      GC: 4,
      EO: 4,
      LE: "-",
      TL: 4,
      AC: 7,
      TE: 4,
      PCT: ".500",
      CASA: "11 - 12",
      RUTA: "12 - 11",
    },
    {
      ID: 4,
      Equipo: "Tigres Tigres",
      G: 22,
      P: 23,
      DIF: "6",
      GC: 4,
      EO: 4,
      LE: 4,
      TL: "-",
      AC: 6,
      TE: 4,
      PCT: ".489",
      CASA: "9 - 13",
      RUTA: "13 - 10",
    },
    {
      ID: 5,
      Equipo: "Aguilas Aguilas",
      G: 20,
      P: 26,
      DIF: "8.5",
      GC: 4,
      EO: 3,
      LE: 3,
      TL: 4,
      AC: "-",
      TE: 6,
      PCT: ".435",
      CASA: "9 - 15",
      RUTA: "11 - 11",
    },
    {
      ID: 6,
      Equipo: "Toros Toros",
      G: 18,
      P: 26,
      DIF: "9.5",
      GC: 3,
      EO: 1,
      LE: 6,
      TL: 4,
      AC: 4,
      TE: "-",
      PCT: ".409",
      CASA: "8 - 14",
      RUTA: "10 - 12",
    },
  ];

  res.json(posiciones);
});

app.get("/api/equipos", (req, res) => {
  const equipos = [
    {
      "id": 1,
      "nombre": "Gigantes del Cibao",
      "abreviatura": "GIG",
      "ciudad": "San Francisco de Macorís",
      "estadio": "Estadio Julián Javier",
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/d8b8a0a312b685f33e63d453b0d2db83.png"
    },
    {
      "id": 2,
      "nombre": "Estrellas Orientales",
      "abreviatura": "EO",
      "ciudad": "San Pedro de Macorís",
      "estadio": "Estadio Tetelo Vargas",
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/bc83c5669a23ea41ef5f755bfbd50ebd.png"
    },
    {
      "id": 3,
      "nombre": "Leones del Escogido",
      "abreviatura": "LE",
      "ciudad": "Santo Domingo",
      "estadio": "Estadio Quisqueya Juan Marichal",
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/3657a463e594aec7d83697355ad2e541.png"
    },
    {
      "id": 4,
      "nombre": "Tigres del Licey",
      "abreviatura": "TL",
      "ciudad": "Santo Domingo",
      "estadio": "Estadio Quisqueya Juan Marichal",
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/9888ecc384811ab5781b0310ae9401a9.png"
    },
    {
      "id": 5,
      "nombre": "Aguilas Cibaeñas",
      "abreviatura": "AC",
      "ciudad": "Santiago",
      "estadio": "Estadio Cibao",
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/f0fb0b8bc2a38afca24fa01fd5f74635.png"
    },
    {
      "id": 6,
      "nombre": "Toros del Este",
      "abreviatura": "TE",
      "ciudad": "La Romana",
      "estadio": "Estadio Francisco Micheli",
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/0d180431331e93a791f23a77d4b94122.png"
    }
  ];

  res.json(equipos);
});



app.get('/api/equipo/:id', (req, res) => {
  const parametro = req.params.id;

  const equipos = [
    {
      "id": 1,
      "nombre": "Estadio Julián Javier",
      "equipo_local": "Gigantes del Cibao",
      "conocido_como": "El Establo de la Muerte",
      "localidad": "San Francisco de Macorís, RD",
      "inauguracion": "1975",
      "remodelacion": "210-2016",
      "capacidad": "12,000 espectadores sentados",
      "dimensiones": {
        "left_field": "330 pies (101m)",
        "left_center_field": "355 pies (108 m)",
        "center_field": "385 pies (117 m)",
        "right_center_field": "350 pies (107 m)",
        "right_field": "330 pies (101 m)"
      },
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/df9f8432190189645a0a546ae8c9c1c5.jpg"
    },
    {
      "id": 2,
      "nombre": "Estadio Tetelo Vargas",
      "equipo_local": "Estrellas Orientales",
      "conocido_como": "El coloso del Ensanche La Fe",
      "localidad": "Av. Circunvalación, San Pedro de Macorís",
      "arquitecto": "Bienvenido Martínez Brea",
      "inauguracion": "25 de noviembre de 1959",
      "remodelacion": "2007-2010",
      "capacidad": "5,350 espectadores sentados",
      "dimensiones": {
        "left_field": "335 pies (102 m)",
        "left_center_field": "365 pies (111 m)",
        "center_field": "385 pies (117 m)",
        "right_center_field": "365 pies (111 m)",
        "right_field": "335 pies (102 m)"
      },
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/e9e5d48aac980d7568981a7e5cb41e7c.jpg"
    },
    {
      "id": 3,
      "nombre": "Estadio Quisqueya",
      "equipos_local": "Leones del Escogido",
      "conocido_como": "El coloso del Ensanche La Fe",
      "localidad": "Av. Tiradentes, Ensanche La Fe, Santo Domingo",
      "arquitecto": "Bienvenido Martínez Brea",
      "inauguracion": "23 de Octubre de 1955",
      "remodelacion": "2007",
      "ampliacion": "2010",
      "capacidad": "11,379 espectadores sentados",
      "dimensiones": {
        "left_field": "335 pies (102 m)",
        "left_center_field": "383 pies (111 m)",
        "center_field": "411 pies (117 m)",
        "right_center_field": "383 pies (111 m)",
        "right_field": "335 pies (102 m)"
      },
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/21a4511df523f9442476169059418e87.jpg"
    }, 
    {
      "id": 4,
      "nombre": "Estadio Quisqueya",
      "equipos_local": "Tigres del Licey",
      "conocido_como": "El glorioso de la capital",
      "localidad": "Av. Tiradentes, Ensanche La Fe, Santo Domingo",
      "arquitecto": "Bienvenido Martínez Brea",
      "inauguracion": "23 de Octubre de 1955",
      "remodelacion": "2007",
      "ampliacion": "2010",
      "capacidad": "11,379 espectadores sentados",
      "dimensiones": {
        "left_field": "335 pies (102 m)",
        "left_center_field": "383 pies (111 m)",
        "center_field": "411 pies (117 m)",
        "right_center_field": "383 pies (111 m)",
        "right_field": "335 pies (102 m)"
      },
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/21a4511df523f9442476169059418e87.jpg"
    },    
    {
      "id": 5,
      "nombre": "Estadio Cibao",
      "equipo_local": "Águilas Cibaeñas",
      "conocido_como": "El Valle de la Muerte",
      "localidad": "Av. Imbert, Santiago, RD",
      "arquitecto": "Bienvenido Martínez Brea",
      "ing_arquitecto": "Juan B. Sánchez Correa",
      "inauguracion": "25 de Octubre de 1958",
      "remodelacion": "1973-74",
      "ampliacion": "2007",
      "capacidad": "18,077 espectadores aproximadamente",
      "dimensiones": {
        "left_field": "335 pies (102 m)",
        "left_center_field": "383 pies (117 m)",
        "center_field": "411 pies (125 m)",
        "right_center_field": "383 pies (117 m)",
        "right_field": "335 pies (102 m)"
      },
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/b52eef3e540e60acc0c4218fa8a83f9b.jpg"
    },
    {
      "id": 6,
      "nombre": "Estadio Francisco A. Micheli",
      "equipo_local": "Toro del Este",
      "conocido_como": "El Corral",
      "localidad": "La Romana, RD",
      "inauguracion": "19 de noviembre de 1979",
      "remodelacion": "2013",
      "capacidad": "10,000 personas",
      "dimensiones": {
        "left_field": "330 pies",
        "left_center_field": "370 pies",
        "center_field": "390 pies",
        "right_center_field": "370 pies",
        "right_field": "330 pies"
      },
      "imagen": "https://s3.amazonaws.com/cdn.baseball-new.com/92fcf36b4a2319d42fc98655ac7740b4.jpg"
    }
  ];

  let equipo = equipos.find(x => x.id == parametro);

  res.json(equipo);
});

// Ruta para obtener una lista de elementos (simulada)
app.get("/api/elementos", (req, res) => {
  const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];
  res.json(elementos);
});

// Ruta para agregar un elemento
app.post("/api/elementos", (req, res) => {
  const nuevoElemento = req.body;
  // Aquí podrías agregar lógica para guardar el elemento en una base de datos, por ejemplo.
  res.json({ mensaje: "Elemento agregado con éxito", elemento: nuevoElemento });
});

// Inicia el servidor
app.listen(puerto, () => {
  console.log(`API escuchando en http://localhost:${puerto}`);
});
