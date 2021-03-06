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
  semblanza1: '<strong>Antonio Ramos Revillas</strong> es escritor, editor y gestor cultural. Egresado de la carrera de Letras Espa??olas de la UANL y editor y docente del Programa Nacional Salas de Lectura. Fue asistente editorial en Suma y Punto de lectura de Santillana Ediciones Generales y editor de Jus, de 2008 a 2011. Desde el 2016 es el director de la Editorial Universitaria de la UANL, sello que publica alrededor de 100 libros al a??o. En 2014 fue seleccionado por el Hay Festival, el British Council y Conaculta dentro de la lista M??xico 20, la selecci??n de los 20 narradores menores de 40 a??os m??s importantes del pa??s. Ha sido becario del Centro Mexicano de Escritores, del Fondo Nacional para la Cultura y las Artes y de la Fundaci??n para las Letras Mexicanas y ha obtenido distintos premios nacionales por sus libros de cuento. Es autor de libros para ni??os y j??venes que han sido seleccionados en varias ocasiones por la SEP para su proyecto Libros del Rinc??n. En 2013 public?? con Editorial El Naranjo el libro ??lbum <i>Mi abuelo el luchador</i> que fue ganador en la XXXIV Selecci??n del Banco del Libro de Venezuela como uno de los tres mejores libros en espa??ol publicados ese a??o y la novela <i>La guarida de las lechuzas</i> que obtuvo en 2014 los premios internacionales de la Fundaci??n Cuatrogatos, el International Latino Book Award y The White Ravens que otorga la Biblioteca de la Juventud en Munich, reconocimiento que repiti?? en 2017 con el libro ??lbum <i>Yo te pego, t?? me pegas</i> editado por 3 abejas. En 2015 recibi?? el Premio a las Artes de la UANL. Ha sido miembro del SNCA.',
  imagen1: 'fabr_antonio.jpg',
  semblanza2: '<strong>Paola Mor??n Leyva</strong> es editora y gestora cultural.  Estudi?? Relaciones Internacionales en la Facultad de Ciencias Pol??ticas y Sociales de la UNAM. Ha sido editora de Historia del Fondo de Cultura Econ??mica, coordinadora de Producci??n Editorial de El Colegio de M??xico, coordinadora nacional del antiguo Conaculta y directora de la Feria Internacional Infantil y Juvenil (FILIJ) que organiza la Direcci??n General de Publicaciones de la Secretar??a de Cultura. Fue directora de Turner de M??xico.  Actualmente es secretaria t??cnica de vinculaci??n de la Coordinaci??n de Difusi??n Cultural de la Universidad Nacional Aut??noma de M??xico (Cultura UNAM). Disfruta escribiendo Historia para ni??os: <i>El pasado de Ana</i> (Conapred, 2014), <i>Diario de Cristina. Visi??n de una adolescente en la turbulenta Guerra de Reforma</i> (SM 2010), <i>El Porfiriato</i> (Nostra ediciones, 2006), <i>Grandes protagonistas de la historia mexicana: Ignacio Zaragoza</i> (Planeta, 2002), entre otros.  ',
  imagen2: 'fabr_paola.jpg',
  semblanza3: '<strong>Nelly Palafox L??pez</strong> trabaja actualmente como asesora editorial del Ayuntamiento de Xalapa. Ha sido editora de Humanidades y subgerente editorial en el Fondo de Cultura Econ??mica. Fue subdirectora editorial de Proyectos Hist??ricos en el Consejo Nacional para la Cultura y las Artes, hoy Secretar??a de Educaci??n. Colabor?? con Editorial Planeta en la dictaminaci??n de novelas cuando Andr??s Ram??rez era el director editorial. Fue reconocida con la beca de la Fundaci??n para las Letras Mexicanas en el ??rea de Ensayo. Ha escrito en coautor??a con Adolfo Casta????n el libro <i>Para leer a Juan Jos?? Arreola</i>. De autor??a ??nica, tiene una tesis doctoral sobre los libros para aprender a leer que utilizaron los ni??os mexicanos a finales del siglo XIX: aiADe ??ngeles, h??roes y perlas</i>. Es tambi??n profesora de literatura en la Facultad de Lengua y Literatura Hisp??nicas de la Universidad Veracruzana y madre de Pablo, adolescente jaranero, y h??bil maestro de Photoshop y iMovie.             ',
  imagen3: 'fabr_nelly.jpg',
  semblanza4: '<strong>Mariana Mend??a</strong> estudi?? letras hisp??nicas en la Universidad Nacional Aut??noma de M??xico. Ha colaborado para diversas instituciones y grupos editoriales mexicanos como el Fondo de Cultura Econ??mica, Editorial Santillana y la UNAM. En Ediciones Castillo Macmillan se desempe???? como gerente de Literatura Infantil y Juvenil durante casi seis a??os. En la actualidad es editor-at-large para la Direcci??n General de Publicaciones y Fomento Editorial de la UNAM, entidad para la que desarrolla la colecci??n de libros para j??venes Hilo de Aracne. Ha impartido talleres de edici??n en diversos espacios. En 2018 sent?? las bases para el Premio Hispanoamericano Castillo de Literatura Infantil y Juvenil para conmemorar los 40 a??os de Ediciones Castillo y cerrar la celebraci??n de los 175 a??os del grupo Macmillan en M??xico. Ha creado colecciones de LIJ para todas las etapas lectoras, y algunas de las ediciones en las que ha trabajado han obtenido reconocimientos importantes en M??xico (premios en las categor??as Libro Infantil Ilustrado, Juvenil y Arte de la C??mara Nacional de la Industria Editorial Mexicana, Premio LIPP La Brasserie, Premio Antonio Garc??a Cubas); Latinoam??rica (Asociaci??n de Literatura Infantil y Juvenil de la Argentina, Premio del Banco de Libro de Venezuela); y en otros pa??ses (Premio Fundaci??n Cuatrogatos, Lista de Honor de IBBY, selecci??n White Ravens de la Biblioteca Internacional de la Juventud de M??nich).     ',
  imagen4: 'fabr_mariana.jpg',
  semblanza5: '<strong>Clarisa Moura</strong> es licenciada en Dise??o y Comunicaci??n Visual por la Universidad Nacional de La Plata, Argentina 1996.  Diplomada en Gesti??n Cultural por la Facultad de Dise??o y Arte de la UNAM y directora de V??rtigo Galer??a, espacio cultural de la Ciudad de M??xico. Su trabajo se desarrolla en tres grandes ??reas: gesti??n de proyectos culturales comunitarios, interdisciplinarios con perspectiva de g??nero. Curadur??a y gesti??n de exposiciones de gr??fica contempor??nea y proyectos editoriales independientes. Ha realizado la direcci??n de arte de la colecci??n Vindictas editada por la Direcci??n General de Publicaciones y Fomento Editorial de la UNAM, colecci??n que rescata para los nuevos lectores la obra de escritoras latinoamericanas injustamente poco le??das. Llev?? a cabo la direcci??n de arte y dise??o de <i>Recetario para la memoria</i>, proyecto fotogr??fico, gastron??mico y social de Zahara G??mez y las Rastreadoras del Fuerte, as?? como el dise??o y coordinaci??n del proyecto de empoderamiento creativo-econ??mico para mujeres privadas de la libertad, ???Recreando Libertad??? en el Centro de Reinserci??n Social Femenil ???Tepepan??? de la Ciudad de M??xico. Hizo la curadur??a y gesti??n del proyecto colectivo #vivanlasmujeres para la campa??a de Amnist??a Internacional M??xico sobre Violencia de G??nero y Feminicidios, que re??ne m??s de 100 creadoras de Iberoam??rica. ',
  imagen5: 'fabr_clarisa.jpg',
  semblanza6: '<strong>Celeste Jaime</strong> es dise??adora y artista visual. Radica en Morelia, Michoac??n. Es fundadora de ALTER.nativa Gr??fica, empresa orientada desde 2011 a la generaci??n de productos visuales relacionados con el ??mbito cultural. Se ha especializado en el dise??o editorial y la encuadernaci??n art??stica, trabajando proyectos colaborativos con numerosos creadores generando carpetas y libros de artista, as?? como productos editoriales independientes. Est?? a cargo del dise??o de la colecci??n de Alternativa Ediciones, publicaciones autogestivas de bajo costo. En el ??mbito de la gesti??n, ha sido parte de la coordinaci??n de ???Originaria. Gira de mujeres poetas en lenguas ind??genas???, proyecto que busca aportar a la visibilizaci??n y conocimientos de las lenguas originarias del pa??s. Es egresada de la Escuela Popular de Bellas Artes de la Universidad Michoacana de San Nicol??s de Hidalgo. Su especialidad es la estampa y su principal producci??n actualmente es el dibujo, el grabado y la ilustraci??n. Cuenta con m??s de 20 muestras colectivas y tres muestras individuales. Ha expuesto en foros de M??xico, Estados Unidos, Bulgaria, Rusia, Chile y Costa Rica. Su trabajo ha sido seleccionado en la Bienal Nacional de Arte Universitario, la Bienal Nacional de Grabado J.G. Posada, el Concurso Internacional de Grabado El Caliu 2005, y ha recibido menciones honor??ficas en el Concurso Latinoamericano de Exlibris J.G. Posada y en la Bienal Nacional Alfredo Zalce 2007.',
  imagen6: 'fabr_celeste.jpg',
  semblanza7: '<strong>Carlos  Gallardo  S??nchez</strong>  es editor y redactor. Estudi?? la Maestr??a en Dise??o y Producci??n Editorial por la Universidad Aut??noma Metropolitana (UAM). Realiz?? la antolog??a <i>Poemas mexicanos sobre el libro y otros versos de lo impreso</i>  (2018) y coordin?? la <i>Gu??a literaria del Centro Hist??rico de Cuernavaca</i> (2019). Es autor de <i>Esquirlas</i> (2018), libro de aforismos. Ha  impartido   clases   de  edici??n   en  la  Escuela   de  Escritores   ???Ricardo  Garibay??? (M??xico)   y   en   el   Consejo   Latinoamericano   de   Ciencias   Sociales   (Argentina). Actualmente   es   jefe   de   publicaciones   de   la   UAM   Unidad  Cuajimalpa,   donde desarrolla proyectos como la Unidad de Impresiones Urgentes o la serie  de presentes amistosos sobre cultura del libro, adem??s del sello editorial acad??mico.',
  imagen7: 'fabr_carlos_gallardo.jpg',
  semblanza8: '<strong>Carlos Armenta</strong> estudi?? la Licenciatura en Letras Hisp??nicas en la Universidad de Guadalajara. Es editor y librero en Impronta Casa Editora, donde desarrolla un proyecto alejado de las t??cnicas convencionales de impresi??n; en sus m??quinas, casi antig??edades, se hacen libros tipogr??ficos, con tipos m??viles y linotipia. Se pretende retomar el arte del libro que se ha dejado de lado en la inmediatez de las manufacturas masivas y as?? regresarle al libro su cualidad de objeto y la experiencia sensorial que implica la lectura.<br><br></br>La propuesta de la editorial es, como su nombre lo dice, habitar una casa donde el espacio permita una pluralidad de actividades culturales independientes. Casa Impronta, adem??s de albergar la editorial y ser un taller-museo abierto al p??blico, ofrece servicios de dise??o e imprenta especializados, imparte talleres de oficio de arte tipogr??fico y gr??fico, acoge artistas, impresores y aficionados que vienen a trabajar en proyectos propios, tiene una librer??a, una galer??a de arte y una cafeter??a. As??, la casa se ubica en Penitenciar??a 414, entre La Paz y Libertad en Guadalajara, Jalisco.',
  imagen8: 'fabr_carlos_armenta.jpg',
  semblanza9: '<strong>Socorro Venegas </strong> escritora y editora. Ha publicado, entre otros, el libro de cuentos <i>La memoria donde ard??a</i> (P??ginas de Espuma, 2019), las novelas <i>Vestido de novia</i> (Tusquets, 2014) y <i>La noche ser?? negra y blanca</i> (Era, 2009). Tambi??n ha recibido el Premio Nacional de Cuento ???Benem??rito de Am??rica???, Premio Nacional de Novela ??pera Prima ???Carlos Fuentes???, Premio al Fomento de la Lectura de la Feria del Libro de Le??n. Adem??s fue directora general adjunta de Fomento al Libro y la Lectura de Conaculta y dirigi?? las colecciones de libros para ni??os y j??venes del Fondo de Cultura Econ??mica. Escribe la columna Modo Avi??n en la revista electr??nica de literatura Literal. Actualmente es directora general de Publicaciones y Fomento Editorial de la UNAM, donde cre?? la colecci??n de novela y memoria Vindictas, que rescata la obra de escritoras del siglo XX. ',
  imagen9: 'fabr_socorro.jpg',
  semblanza10: 'Jorge Carri??n es escritor, cr??tico cultural de La Vanguardia y el New York Times y codirector del M??ster en Creaci??n Literaria de la UPF-BSM. Ha publicado, entre otros libros de novela y de ensayo, <i>Los muertos, Teleshakespeare, Librer??as, Contra Amazon</i> y <i>Lo viral</i>. Es el creador del p??dcast <i>Solaris, ensayos sonoros</i>. Ha sido traducido a quince idiomas.',
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