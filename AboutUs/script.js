const header = document.querySelector("header");
const member_section = document.getElementById("member");
const nameMem = document.getElementById("name");
const postMem = document.getElementById("pos");

//INTRO
const intro_content_list = Array.from(document.getElementById("intro-content-list").children);
function introSplash() {
  const BorderElements = [document.getElementById("top-right"), document.getElementById("top-left"), document.getElementById("bottom-right"), document.getElementById("buttom-left")];
  BorderElements.forEach((e) => {
    e.removeAttribute("style");
  });
  // document.body.classList.remove("no-overflow");
};
introSplash();

function changeElementIntro() {
  let target = 0;

  function prev() {
    target = (target !== 0) ? target-1 : 2;
    let temp = (target + 1) %  3;

    intro_content_list[temp].style.cssText = "opacity: 0; transform: scale(0.9)";
    setTimeout(() =>{
      intro_content_list[temp].style.cssText = "display: none;";
      intro_content_list[target].removeAttribute("style");
    }, 900);
  }
  function next() {
    target = (target+1) % 3;
    let temp = (target !== 0) ? target-1 : 2;

    intro_content_list[temp].style.cssText = "opacity: 0; transform: scale(0.9)";
    setTimeout(() =>{
      intro_content_list[temp].style.display = "none";
      intro_content_list[target].removeAttribute("style");
    }, 900);
  }

  document.querySelector("#intro-controller-content > button[data-prev]").addEventListener("click", prev);
  document.querySelector("#intro-controller-content > button[data-next]").addEventListener("click", next);
}
changeElementIntro();


//onScroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header-onScroll");
  } else {
    header.classList.remove("header-onScroll");
  }
});


let memberList = [
  {
    name: "Bowen Pinili",
    pos: "Developer",
    img_location: "/img/member-image/bowen.png"
  },
  {
    name: "Jayden Kyle Regal",
    pos: "Developer",
    img_location: "/img/member-image/noImage.png"
  },
  {
    name: "Carl Andrei Madriaga",
    pos: "Content Writer",
    img_location: "/img/member-image/madriaga.png"
  },
  {
    name: "Kean James Boliche",
    pos: "Developer",
    img_location: "/img/member-image/noImage.png"
  },
  {
    name: "Jhon Mark Mondero",
    pos: "Developer",
    img_location: "/img/member-image/noImage.png"
  }
];



/*
  ================================
         FOR MEMBER SECTION
  ================================
*/

const about_show = new IntersectionObserver((entry) => {
  if (entry[0].isIntersecting) {
    header.style.height = "0px";
    header.style.padding = "0px";
    // window.scrollTo(0, window.innerHeight);
    // alert(window.scrollY);
    document.body.style.cssText = "background-color: #023047; color: white;";
  } else {
    header.removeAttribute("style");
    document.body.removeAttribute("style");
  }
}, {threshold: 0.9});

about_show.observe(member_section);

// Initalize the list
const element_memberList = document.querySelector("#member-list > #container");
memberList.forEach((member) => {
  element_memberList.innerHTML += `
                                    <div class="member-card">
                                      <p class="member-card-pos">${member.pos}</p>
                                      <hr />
                                      <h3 class="member-card-name">${member.name}</h3>
                                      <img src="${member.img_location}" />
                                    </div>
                                  `;
});
element_memberList.innerHTML += `<div id="space-member-list"></div>`;

// ==== Member List Event ====
const memberCard = Array.from(document.querySelectorAll("#member-list > #container > .member-card"));
const container = document.querySelector("#member-list > #container");
const imgMem = document.querySelector("#member-image-segment > img");
let member_CurrentFocus = 0;

memberCard[0].classList.add("member-card-active");
imgMem.setAttribute("src", memberList[0].img_location);
nameMem.innerHTML = memberList[0].name;
postMem.innerHTML = memberList[0].pos;


//Card: On Click
memberCard.forEach((element) => {
  element.addEventListener("click", () => {
    let indexOfElement = memberCard.indexOf(element);
    if (indexOfElement !== member_CurrentFocus) {
      element.classList.add("member-card-active");
      memberCard[member_CurrentFocus].classList.remove("member-card-active");
      member_CurrentFocus = indexOfElement;
      container.scrollTo({
        left: element.offsetLeft - 50,
        behavior: 'smooth'
      });
      nameMem.style.transform = "translateX(-10px)"
      nameMem.style.opacity = "0";
      postMem.style.transform = "translateX(-10px)"
      postMem.style.opacity = "0";
      imgMem.style.transform = "translateX(10px)"
      imgMem.style.opacity = "0";
      setTimeout(() => {
        imgMem.setAttribute("src", memberList[indexOfElement].img_location);

        setTimeout(()=> {
          nameMem.innerHTML = memberList[indexOfElement].name;
          postMem.innerHTML = memberList[indexOfElement].pos;
          nameMem.removeAttribute("style");
          postMem.removeAttribute("style");
          imgMem.removeAttribute("style");
        }, 300);
      }, 500);
    }
  });
});
document.getElementById("member").addEventListener("dblclick", () => {
  window.scrollTo(0, window.innerHeight);
})

window.addEventListener("hashchange", (e) => {
  e.preventDefault();
});
