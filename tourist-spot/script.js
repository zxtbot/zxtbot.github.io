window.scroll(0, 0);
const query = new URLSearchParams(window.location.search);
const header = document.querySelector("header");
const main = document.querySelector("main");
const nav = document.querySelector("nav");
let spot = 0;


const touristSpot = [
  {
    name: "Hinulugang Taktak",
    image_location: "/img/cover-photo-hinulugang-taktak-1024x682.webp",
    query: "hinulugang-taktak"
  },
  {
    name: "Pinto Art Museum",
    image_location: "/img/pinto-art.jpg",
    query: "pinto-art-museum"
  },
  {
    name: "Antipolo Cathedral",
    image_location: "/img/Antipolo_Cathedral_2025-01-26.jpg",
    query: "antipolo-cathedral"
  },
  {
    name: "Mount Purro Nature Reserve",
    image_location: "/img/mpn.jpg",
    query: "mount-purro"
  },
  {
    name: "Cloud 9",
    image_location: "/img/Cloud-9-Antipolo-Tour-13.jpg",
    query: "cloud9"
  }
];


function focuSpot(list) {
  document.getElementById("name").innerHTML = list.name;
  document.getElementById("name-spot").innerHTML = list.name;
  document.getElementById("header-content-wrapper").style.backgroundImage = `url('${list.image_location}')`;
  document.getElementById("des-" + list.query).removeAttribute("style");
}


if (query.has("location")) {
  switch(query.getAll("location")[0]) {
    case "hinulugang-taktak":
      focuSpot(touristSpot[0]);
    break;
    case "pinto-art-museum":
      focuSpot(touristSpot[1]);
      spot = 1;
    break;
    case "antipolo-cathedral":
      focuSpot(touristSpot[2]);
      spot = 2;
    break;
    case "mount-purro":
      focuSpot(touristSpot[3]);
      spot = 3;
    break;
    case "cloud9":
      focuSpot(touristSpot[4]);
      spot = 4;
    break;
    default:
      focuSpot(touristSpot[0]);
  }
} else focuSpot(touristSpot[0]);

//Click
function prev() {
  if (spot === 0) spot = 4;
  else spot--;
  window.open(`/tourist-spot?location=${touristSpot[spot].query}`, '_self');
}
function next() {
  window.open(`/tourist-spot?location=${touristSpot[(spot + 1) % 5].query}`, '_self');
}


//Nav
let navStatus = false;
function navOpen(e) {
  e.stopPropagation();
  const nav_button = document.querySelector("#nav-button");

  if (navStatus) {
    nav_button.setAttribute("src", "/img/hamburger-svgrepo-com.svg");
    nav.classList.remove("nav-click");
    document.body.classList.remove("no-overflow");
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