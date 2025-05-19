window.scrollTo(0, 0);
// Global
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const txt_celeb = ["culture", "food", "tradition"];
const txt_color = ["#3a5a40", "#bc6c25", "#8c2f39"];
const sm_part = document.getElementById("sm-change");

function sm_animation() {
  let i = 0;
  sm_part.style.color = txt_color[i];
  sm_part.innerHTML = txt_celeb[i];
  i++;

  setInterval(() =>{
    sm_part.classList.add("sm-out");

    if (i >= 3) i = 0;

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (txt_celeb[i] != undefined) {
          sm_part.classList.add("sm-in");
          sm_part.classList.remove("sm-out");
          sm_part.style.color = txt_color[i];
          sm_part.innerHTML = txt_celeb[i];
        }
        i++;
      }, 1000);
    });
  }, 3000);
}

const landing_hidden = new IntersectionObserver((e) => {
  if (e[0].isIntersecting) {
    header.classList.remove("header-onScroll");
  } else {
    header.classList.add("header-onScroll");
  }
}, {threshold: 0.4});

landing_hidden.observe(document.getElementById("landing"));


//Tourist Spot ===>
function touristSpotClick() {
  const element = Array.from(document.getElementsByClassName("tourist-spot-div"));
  let prev = null;

  element.forEach((e) => {
    e.addEventListener("click", (event) => {
      event.stopPropagation();
      if (prev != null) {
        prev.classList.remove("tourist-spot-div-click");
      }
      e.classList.add("tourist-spot-div-click");
      prev = e;
    });
  });

  document.addEventListener("click", () => {
    if (prev != null) {
      prev.classList.remove("tourist-spot-div-click");
    }
  });

}
touristSpotClick();

//Events
document.addEventListener("DOMContentLoaded", (e) => {
  const about_sumakah = document.getElementById("about-sumakah");
  const ts = document.getElementById("tourist-spot");
  const parentFruits = Array.from(document.querySelectorAll("#ico-container > img"));
  const small_description = document.getElementById("sm-description");
  requestAnimationFrame(() => {
    document.getElementById("title").classList.add("title-anim");
    document.getElementById("textsub-title").classList.add("title-anim");

    parentFruits.forEach((e) => {
      e.classList.remove(e.id + "-art");
    });

    setTimeout(() => {
      document.body.classList.remove("no-overflow");
      header.classList.add("title-anim");
      about_sumakah.classList.add("title-anim");
      ts.classList.add("title-anim");
      header.style.pointerEvents = "unset";
      sm_animation();
      small_description.classList.add("title-anim");
    }, 2000);
  });
});



// Animated wave ====> B.
const wave = document.getElementById("wave-path");

function animateWave() {
  const time = Date.now() / 600;
  const amplitude = 10;

  const points = [
    160 + Math.sin(time) * amplitude,
    144 + Math.sin(time + 1) * amplitude,
    128 + Math.sin(time + 2) * amplitude,
    96 + Math.sin(time + 3) * amplitude,
    112 + Math.sin(time + 4) * amplitude,
    128 + Math.sin(time + 5) * amplitude,
    192 + Math.sin(time + 6) * amplitude,
    224 + Math.sin(time + 7) * amplitude,
    256 + Math.sin(time + 8) * amplitude,
    256 + Math.sin(time + 9) * amplitude,
    245.3 + Math.sin(time + 10) * amplitude,
    235 + Math.sin(time + 11) * amplitude,
    213 + Math.sin(time + 12) * amplitude,
    202.7 + Math.sin(time + 13) * amplitude,
    192 + Math.sin(time + 14) * amplitude
  ];

  const newPath = `
    M0,${points[0]}
    L60,${points[1]}
    C120,${points[2]},240,${points[3]},360,${points[4]}
    C480,${points[5]},600,${points[6]},720,${points[7]}
    C840,${points[8]},960,${points[9]},1080,${points[10]}
    C1200,${points[11]},1320,${points[12]},1380,${points[13]}
    L1440,${points[14]}V320H0Z
  `;

  wave.setAttribute("d", newPath);
  requestAnimationFrame(animateWave);
}

animateWave();

// About Sumakah prt2
const sumakahptrObservrer = new IntersectionObserver((entry) => {
  const headerTitleSumakahPtr2 = document.querySelectorAll('#discover-the-sumakah > .headTextTitle > span');
  const textseg = document.querySelectorAll('#discover-the-sumakah p, #discover-the-sumakah li');
  if (entry[0].isIntersecting) {

    headerTitleSumakahPtr2.forEach(e => {
      e.style.transform = 'translateY(0px)';
      e.style.opacity = '1';
    });

    setTimeout(() => {
      textseg.forEach(e => {
        e.style.transform = 'translateY(0px)';
        e.style.opacity = '1';
      })
    }, 1000);
    
  }



  // console.log(entry);
}, {threshold: 0.3});
sumakahptrObservrer.observe(document.getElementById('discover-the-sumakah'));

//product-list
const observerProductList = new IntersectionObserver((entry) =>{
  const ee = document.querySelectorAll('.card-product');

  if (entry[0].isIntersecting) {
    ee.forEach((e) => {
      e.style.transform = 'translateY(0px)';
      e.style.opacity = '1';
    });
  }
}, {threshold: 0.3});

observerProductList.observe(document.getElementById('product-list'));

//sgan
const sagnificbservrer = new IntersectionObserver((entry) => {
  const headerTitleSumakahPtr2 = document.querySelectorAll('#significance-of-sumakah-festival > .headTextTitle > span');
  if (entry[0].isIntersecting) {

    headerTitleSumakahPtr2.forEach(e => {
      e.style.transform = 'translateY(0px)';
      e.style.opacity = '1';
    });

    setTimeout(() => {
      
    }, 1000);
    
  }



}, {threshold: 0.3});
sagnificbservrer.observe(document.getElementById('significance-of-sumakah-festival'));