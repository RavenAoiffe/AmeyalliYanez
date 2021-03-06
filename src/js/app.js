document.addEventListener('DOMContentLoaded', function () {
  scrollNav();
  // navegacionFija();
})
/* INICIO */


/* CALENDARIO */

TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".grid-ins li", 1, {
  scale: .5,
  cycle: {
    y: [-50, 50]
  },
  stagger: {
    from: "center",
    amount: 0.75
  }
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger2",
  duration: "50%",
  triggerHook: 0.25
}).setTween(tl)
  .addTo(controller);

/* Estaciones*/


function animacion_en_x(elementosAmover, trigger, x1, x2) {
  TweenLite.defaultEase = Linear.easeNone;
  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();
  tl.staggerFrom(elementosAmover, 1, {
    scale: 1.2,
    cycle: {
      x: [x1, x2]
    },
    stagger: {
      from: "center",
      amount: 0.75
    }
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    duration: "50%",
    triggerHook: 0.25
  }).setTween(tl)
    .addTo(controller);
}


function animacion_en_y(elementosAmovery, triggery, y1, y2, escala) {
  TweenLite.defaultEase = Linear.easeNone;
  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();
  tl.staggerFrom(elementosAmovery, 1, {
    scale: escala,
    cycle: {
      x: [y1, y2]
    },
    stagger: {
      from: "center",
      amount: 0.75
    }
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: triggery,
    duration: "50%",
    triggerHook: 0.25
  }).setTween(tl)
    .addTo(controller);
}


/*Simplificar funciones*/
animacion_en_x(".tween", '#contigo', -500, 500);
animacion_en_x(".grid-estacion > div", '#trigger4', -100, 100);
animacion_en_y("#Anteriores .primera > img", '#trigger6', -100, 100, 1);
animacion_en_y("#Anteriores .tercera > img", '#trigger8', -50, 50, 1);
animacion_en_y("#Anteriores .segunda > img", "#trigger7", -150, 150, 1);

/* SCROLL NAV */

function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion-principal li a');
  const enlace_interno = document.querySelectorAll('.enlace_interno');
  //guardar todos en un solo arreglo
  const enlaces_total = Object.assign({}, enlaces, enlace_interno);


  enlaces.forEach(
    function (enlace) {
      click_smoth(enlace);
    }
  )
  enlace_interno.forEach(
    function (enlace_i) {
      click_smoth(enlace_i)
    }
  )

}

function click_smoth(enlace) {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();

    const seccion = document.querySelector(e.target.attributes.href.value);
    seccion.scrollIntoView({
      behavior: 'smooth'
    });
  })
}
$(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
    $('#menu').addClass("fijo");
  }
  else {
    $('#menu').removeClass("fijo");
  }
});

const memnu_movil = document.querySelector('#menu_movil');
const navegacion = document.querySelector('#navegacion');
const navegacion_desp = document.querySelectorAll('#navegacion li');

memnu_movil.addEventListener('click', function (e) {
  e.preventDefault();
  navegacion.classList.toggle('display');
})

navegacion_desp.forEach(
  function (nav) {
    nav.addEventListener('click', function (e) {
      e.preventDefault();
      navegacion.classList.toggle('display');
    })
  }
)

const semblanzas = {
  semblanza1: '<strong>Antonio Ramos Revillas</strong> es escritor, editor y gestor cultural. Egresado de la carrera de Letras Españolas de la UANL y editor y docente del Programa Nacional Salas de Lectura. Fue asistente editorial en Suma y Punto de lectura de Santillana Ediciones Generales y editor de Jus, de 2008 a 2011. Desde el 2016 es el director de la Editorial Universitaria de la UANL, sello que publica alrededor de 100 libros al año. En 2014 fue seleccionado por el Hay Festival, el British Council y Conaculta dentro de la lista México 20, la selección de los 20 narradores menores de 40 años más importantes del país. Ha sido becario del Centro Mexicano de Escritores, del Fondo Nacional para la Cultura y las Artes y de la Fundación para las Letras Mexicanas y ha obtenido distintos premios nacionales por sus libros de cuento. Es autor de libros para niños y jóvenes que han sido seleccionados en varias ocasiones por la SEP para su proyecto Libros del Rincón. En 2013 publicó con Editorial El Naranjo el libro álbum <i>Mi abuelo el luchador</i> que fue ganador en la XXXIV Selección del Banco del Libro de Venezuela como uno de los tres mejores libros en español publicados ese año y la novela <i>La guarida de las lechuzas</i> que obtuvo en 2014 los premios internacionales de la Fundación Cuatrogatos, el International Latino Book Award y The White Ravens que otorga la Biblioteca de la Juventud en Munich, reconocimiento que repitió en 2017 con el libro álbum <i>Yo te pego, tú me pegas</i> editado por 3 abejas. En 2015 recibió el Premio a las Artes de la UANL. Ha sido miembro del SNCA.',
  imagen1: 'fabr_antonio.jpg',
  semblanza2: '<strong>Paola Morán Leyva</strong> es editora y gestora cultural.  Estudió Relaciones Internacionales en la Facultad de Ciencias Políticas y Sociales de la UNAM. Ha sido editora de Historia del Fondo de Cultura Económica, coordinadora de Producción Editorial de El Colegio de México, coordinadora nacional del antiguo Conaculta y directora de la Feria Internacional Infantil y Juvenil (FILIJ) que organiza la Dirección General de Publicaciones de la Secretaría de Cultura. Fue directora de Turner de México.  Actualmente es secretaria técnica de vinculación de la Coordinación de Difusión Cultural de la Universidad Nacional Autónoma de México (Cultura UNAM). Disfruta escribiendo Historia para niños: <i>El pasado de Ana</i> (Conapred, 2014), <i>Diario de Cristina. Visión de una adolescente en la turbulenta Guerra de Reforma</i> (SM 2010), <i>El Porfiriato</i> (Nostra ediciones, 2006), <i>Grandes protagonistas de la historia mexicana: Ignacio Zaragoza</i> (Planeta, 2002), entre otros.  ',
  imagen2: 'fabr_paola.jpg',
  semblanza3: '<strong>Nelly Palafox López</strong> trabaja actualmente como asesora editorial del Ayuntamiento de Xalapa. Ha sido editora de Humanidades y subgerente editorial en el Fondo de Cultura Económica. Fue subdirectora editorial de Proyectos Históricos en el Consejo Nacional para la Cultura y las Artes, hoy Secretaría de Educación. Colaboró con Editorial Planeta en la dictaminación de novelas cuando Andrés Ramírez era el director editorial. Fue reconocida con la beca de la Fundación para las Letras Mexicanas en el área de Ensayo. Ha escrito en coautoría con Adolfo Castañón el libro <i>Para leer a Juan José Arreola</i>. De autoría única, tiene una tesis doctoral sobre los libros para aprender a leer que utilizaron los niños mexicanos a finales del siglo XIX: aiADe ángeles, héroes y perlas</i>. Es también profesora de literatura en la Facultad de Lengua y Literatura Hispánicas de la Universidad Veracruzana y madre de Pablo, adolescente jaranero, y hábil maestro de Photoshop y iMovie.             ',
  imagen3: 'fabr_nelly.jpg',
  semblanza4: '<strong>Mariana Mendía</strong> estudió letras hispánicas en la Universidad Nacional Autónoma de México. Ha colaborado para diversas instituciones y grupos editoriales mexicanos como el Fondo de Cultura Económica, Editorial Santillana y la UNAM. En Ediciones Castillo Macmillan se desempeñó como gerente de Literatura Infantil y Juvenil durante casi seis años. En la actualidad es editor-at-large para la Dirección General de Publicaciones y Fomento Editorial de la UNAM, entidad para la que desarrolla la colección de libros para jóvenes Hilo de Aracne. Ha impartido talleres de edición en diversos espacios. En 2018 sentó las bases para el Premio Hispanoamericano Castillo de Literatura Infantil y Juvenil para conmemorar los 40 años de Ediciones Castillo y cerrar la celebración de los 175 años del grupo Macmillan en México. Ha creado colecciones de LIJ para todas las etapas lectoras, y algunas de las ediciones en las que ha trabajado han obtenido reconocimientos importantes en México (premios en las categorías Libro Infantil Ilustrado, Juvenil y Arte de la Cámara Nacional de la Industria Editorial Mexicana, Premio LIPP La Brasserie, Premio Antonio García Cubas); Latinoamérica (Asociación de Literatura Infantil y Juvenil de la Argentina, Premio del Banco de Libro de Venezuela); y en otros países (Premio Fundación Cuatrogatos, Lista de Honor de IBBY, selección White Ravens de la Biblioteca Internacional de la Juventud de Múnich).     ',
  imagen4: 'fabr_mariana.jpg',
  semblanza5: '<strong>Clarisa Moura</strong> es licenciada en Diseño y Comunicación Visual por la Universidad Nacional de La Plata, Argentina 1996.  Diplomada en Gestión Cultural por la Facultad de Diseño y Arte de la UNAM y directora de Vértigo Galería, espacio cultural de la Ciudad de México. Su trabajo se desarrolla en tres grandes áreas: gestión de proyectos culturales comunitarios, interdisciplinarios con perspectiva de género. Curaduría y gestión de exposiciones de gráfica contemporánea y proyectos editoriales independientes. Ha realizado la dirección de arte de la colección Vindictas editada por la Dirección General de Publicaciones y Fomento Editorial de la UNAM, colección que rescata para los nuevos lectores la obra de escritoras latinoamericanas injustamente poco leídas. Llevó a cabo la dirección de arte y diseño de <i>Recetario para la memoria</i>, proyecto fotográfico, gastronómico y social de Zahara Gómez y las Rastreadoras del Fuerte, así como el diseño y coordinación del proyecto de empoderamiento creativo-económico para mujeres privadas de la libertad, “Recreando Libertad” en el Centro de Reinserción Social Femenil “Tepepan” de la Ciudad de México. Hizo la curaduría y gestión del proyecto colectivo #vivanlasmujeres para la campaña de Amnistía Internacional México sobre Violencia de Género y Feminicidios, que reúne más de 100 creadoras de Iberoamérica. ',
  imagen5: 'fabr_clarisa.jpg',
  semblanza6: '<strong>Celeste Jaime</strong> es diseñadora y artista visual. Radica en Morelia, Michoacán. Es fundadora de ALTER.nativa Gráfica, empresa orientada desde 2011 a la generación de productos visuales relacionados con el ámbito cultural. Se ha especializado en el diseño editorial y la encuadernación artística, trabajando proyectos colaborativos con numerosos creadores generando carpetas y libros de artista, así como productos editoriales independientes. Está a cargo del diseño de la colección de Alternativa Ediciones, publicaciones autogestivas de bajo costo. En el ámbito de la gestión, ha sido parte de la coordinación de “Originaria. Gira de mujeres poetas en lenguas indígenas”, proyecto que busca aportar a la visibilización y conocimientos de las lenguas originarias del país. Es egresada de la Escuela Popular de Bellas Artes de la Universidad Michoacana de San Nicolás de Hidalgo. Su especialidad es la estampa y su principal producción actualmente es el dibujo, el grabado y la ilustración. Cuenta con más de 20 muestras colectivas y tres muestras individuales. Ha expuesto en foros de México, Estados Unidos, Bulgaria, Rusia, Chile y Costa Rica. Su trabajo ha sido seleccionado en la Bienal Nacional de Arte Universitario, la Bienal Nacional de Grabado J.G. Posada, el Concurso Internacional de Grabado El Caliu 2005, y ha recibido menciones honoríficas en el Concurso Latinoamericano de Exlibris J.G. Posada y en la Bienal Nacional Alfredo Zalce 2007.',
  imagen6: 'fabr_celeste.jpg',
  semblanza7: '<strong>Carlos  Gallardo  Sánchez</strong>  es editor y redactor. Estudió la Maestría en Diseño y Producción Editorial por la Universidad Autónoma Metropolitana (UAM). Realizó la antología <i>Poemas mexicanos sobre el libro y otros versos de lo impreso</i>  (2018) y coordinó la <i>Guía literaria del Centro Histórico de Cuernavaca</i> (2019). Es autor de <i>Esquirlas</i> (2018), libro de aforismos. Ha  impartido   clases   de  edición   en  la  Escuela   de  Escritores   “Ricardo  Garibay” (México)   y   en   el   Consejo   Latinoamericano   de   Ciencias   Sociales   (Argentina). Actualmente   es   jefe   de   publicaciones   de   la   UAM   Unidad  Cuajimalpa,   donde desarrolla proyectos como la Unidad de Impresiones Urgentes o la serie  de presentes amistosos sobre cultura del libro, además del sello editorial académico.',
  imagen7: 'fabr_carlos_gallardo.jpg',
  semblanza8: '<strong>Carlos Armenta</strong> estudió la Licenciatura en Letras Hispánicas en la Universidad de Guadalajara. Es editor y librero en Impronta Casa Editora, donde desarrolla un proyecto alejado de las técnicas convencionales de impresión; en sus máquinas, casi antigüedades, se hacen libros tipográficos, con tipos móviles y linotipia. Se pretende retomar el arte del libro que se ha dejado de lado en la inmediatez de las manufacturas masivas y así regresarle al libro su cualidad de objeto y la experiencia sensorial que implica la lectura.<br><br></br>La propuesta de la editorial es, como su nombre lo dice, habitar una casa donde el espacio permita una pluralidad de actividades culturales independientes. Casa Impronta, además de albergar la editorial y ser un taller-museo abierto al público, ofrece servicios de diseño e imprenta especializados, imparte talleres de oficio de arte tipográfico y gráfico, acoge artistas, impresores y aficionados que vienen a trabajar en proyectos propios, tiene una librería, una galería de arte y una cafetería. Así, la casa se ubica en Penitenciaría 414, entre La Paz y Libertad en Guadalajara, Jalisco.',
  imagen8: 'fabr_carlos_armenta.jpg',
  semblanza9: '<strong>Socorro Venegas </strong> escritora y editora. Ha publicado, entre otros, el libro de cuentos <i>La memoria donde ardía</i> (Páginas de Espuma, 2019), las novelas <i>Vestido de novia</i> (Tusquets, 2014) y <i>La noche será negra y blanca</i> (Era, 2009). También ha recibido el Premio Nacional de Cuento “Benemérito de América”, Premio Nacional de Novela Ópera Prima “Carlos Fuentes”, Premio al Fomento de la Lectura de la Feria del Libro de León. Además fue directora general adjunta de Fomento al Libro y la Lectura de Conaculta y dirigió las colecciones de libros para niños y jóvenes del Fondo de Cultura Económica. Escribe la columna Modo Avión en la revista electrónica de literatura Literal. Actualmente es directora general de Publicaciones y Fomento Editorial de la UNAM, donde creó la colección de novela y memoria Vindictas, que rescata la obra de escritoras del siglo XX. ',
  imagen9: 'fabr_socorro.jpg',
  semblanza10: 'Jorge Carrión es escritor, crítico cultural de La Vanguardia y el New York Times y codirector del Máster en Creación Literaria de la UPF-BSM. Ha publicado, entre otros libros de novela y de ensayo, <i>Los muertos, Teleshakespeare, Librerías, Contra Amazon</i> y <i>Lo viral</i>. Es el creador del pódcast <i>Solaris, ensayos sonoros</i>. Ha sido traducido a quince idiomas.',
  imagen10: 'hombre.png'
}

const participantes = document.querySelectorAll('.participante');

participantes.forEach(
  function (participante) {
    participante.addEventListener('click', function (e) {
      e.preventDefault();
      var href = participante.href;

      var separador = '#';
      var hrefParticipante = href.split(separador);

      const ventana_modal = document.createElement('div');
      ventana_modal.classList.add('ventana_modal');

      const texto_modal = document.createElement('div');
      texto_modal.classList.add('texto_modal');

      //boton para cerrar la imagen
      const cerrarImagen = document.createElement('a');
      cerrarImagen.textContent = 'X';
      cerrarImagen.classList.add('btn-cerrar');

      //texto de la biogrfia
      const semblanza = document.createElement('P');
      //Imagen
      const imagen = document.createElement('IMG');
      //imagen.src = `build/img/grande/${id}.webp`;     

      //switch
      switch (hrefParticipante[1]) {
        case '1':
          imagen.src = `build/img/participantes/${semblanzas.imagen1}`;
          semblanza.innerHTML = semblanzas.semblanza1;
          break;
        case '2':
          imagen.src = `build/img/participantes/${semblanzas.imagen2}`;
          semblanza.innerHTML = semblanzas.semblanza2;
          break;
        case '3':
          imagen.src = `build/img/participantes/${semblanzas.imagen3}`;
          semblanza.innerHTML = semblanzas.semblanza3;
          break;
        case '4':
          imagen.src = `build/img/participantes/${semblanzas.imagen4}`;
          semblanza.innerHTML = semblanzas.semblanza4;
          break;
        case '5':
          imagen.src = `build/img/participantes/${semblanzas.imagen5}`;
          semblanza.innerHTML = semblanzas.semblanza5;
          break;
        case '6':
          imagen.src = `build/img/participantes/${semblanzas.imagen6}`;
          semblanza.innerHTML = semblanzas.semblanza6;
          break;
        case '7':
          imagen.src = `build/img/participantes/${semblanzas.imagen7}`;
          semblanza.innerHTML = semblanzas.semblanza7;
          break;
        case '8':
          imagen.src = `build/img/participantes/${semblanzas.imagen8}`;
          semblanza.innerHTML = semblanzas.semblanza8;
          break;
          case '9':
          imagen.src = `build/img/participantes/${semblanzas.imagen9}`;
          semblanza.innerHTML = semblanzas.semblanza9;
          break;
          case '10':
            imagen.src = `build/img/participantes/${semblanzas.imagen10}`;
            semblanza.innerHTML = semblanzas.semblanza10;
          break;
        default: break;
      }

      ventana_modal.appendChild(texto_modal);
      texto_modal.appendChild(cerrarImagen);
      texto_modal.appendChild(imagen);
      texto_modal.appendChild(semblanza);



      //cuando se preciona cierra imagen
      cerrarImagen.onclick = function () {
        ventana_modal.remove();
      }

      ventana_modal.onclick = function () {
        ventana_modal.remove();
      }

      //mostrar en html
      const body = document.querySelector('body');
      body.appendChild(ventana_modal);

    })
  }
)


const imprimirInfocorrecta = (imagen, semblanza, semblanzas, no) => {
  imagen.src = `build/img/participantes/${semblanzas.imagen + no}`;
  semblanza.innerHTML = semblanzas.semblanza + no;
}