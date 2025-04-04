// Global
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const txt_celeb = ["culture", "food", "tradition"];
const txt_color = ["red", "blue", "green"];
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
  }, 2000);
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

window.addEventListener("load", function (e) {
  window.scrollTo(0, 0);
});

window.addEventListener("hashchange", function (e) {
  e.preventDefault();
  window.location.reload();
});