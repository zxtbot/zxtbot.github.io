//Nav
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const pageslist = document.querySelectorAll("#nav-scrollable > #section2 > li");

let navStatus = false;
function navOpen(e) {
  e.stopPropagation();
  const nav_button = document.querySelector("header > img");

  if (navStatus) {
    nav_button.setAttribute("src", "/img/hamburger-svgrepo-com.svg");
    nav.classList.remove("nav-click");
    document.body.classList.remove("no-overflow");
    header.style.removeProperty("background-color");
    navStatus = false;
  } else {
    nav_button.setAttribute("src", "/img/cross-svgrepo-com.svg");
    nav.classList.add("nav-click");
    document.body.classList.add("no-overflow");
    header.style.backgroundColor = "white";
    navStatus = true;
  }
}

document.getElementById("nav-button").addEventListener("click", navOpen);


//get the page so i can focus them, ahhh code ===>
const page = document.body.getAttribute("page");
switch(page) {
  case "root":
    pageslist[0].classList.add("navListfocus");
  break;
  case "about-us":
    pageslist[2].classList.add("navListfocus");
  break;

  default: 
    console.log("the hell is this: " + page);
}
