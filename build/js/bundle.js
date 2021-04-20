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


function animacion_en_x(elementosAmover,trigger,x1,x2){
  TweenLite.defaultEase = Linear.easeNone;
  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();
  tl.staggerFrom(elementosAmover, 1, {
    scale: 1.2,
    cycle: {
      x: [x1,x2]
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


function animacion_en_y(elementosAmovery,triggery,y1,y2,escala){
  TweenLite.defaultEase = Linear.easeNone;
  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();
  tl.staggerFrom(elementosAmovery, 1, {
    scale:escala,
    cycle: {
      x: [y1,y2]
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
animacion_en_x(".tween",'#contigo',-500,500);
animacion_en_x(".grid-estacion > div",'#trigger4',-100,100);
animacion_en_y("#Anteriores .primera > img",'#trigger6',-100,100,1);
animacion_en_y("#Anteriores .tercera > img",'#trigger8',-50,50,1);
animacion_en_y("#Anteriores .segunda > img","#trigger7",-150,150,1);

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

memnu_movil.addEventListener('click', function(e){
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