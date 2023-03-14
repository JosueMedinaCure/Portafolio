function mostrarProyectos1 (){
    document.getElementById("proyects-1-4").style.left="0%";
    document.getElementById("proyects-5-8").style.left="100%";
    document.getElementById("btn-1").style.background="yellow";
    document.getElementById("btn-2").style.background="#06e9a5";
}

function mostrarProyectos2 (){
  document.getElementById("proyects-1-4").style.left="-100%";
  document.getElementById("proyects-5-8").style.left="0%";
  document.getElementById("btn-1").style.background="#06e9a5";
  document.getElementById("btn-2").style.background="yellow";
}


let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");

 btn1.addEventListener("click", mostrarProyectos1);
 btn2.addEventListener("click", mostrarProyectos2);
















particlesJS(

  {
    "particles": {
      "number": {
        "value": 180,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#7157f7"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0,
          "opacity_min": 1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 130.39543399174545,
        "color": "#8d5591",
        "opacity": .6630079151508454,
        "width": 0
      },
      "move": {
        "enable": true,
        "speed": 5.206824121731046,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab , repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 294.89853095232286,
          "size": 4,
          "duration": 0.16241544246026904,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 120.92007992007991,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);