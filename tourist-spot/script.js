window.scroll(0, 0);
const query = new URLSearchParams(window.location.search);
const header = document.querySelector("header");
const main = document.querySelector("main");
const nav = document.querySelector("nav");
let spot = 0;


const touristSpot = [
  {
    name: "Hinulugang Taktak",
    image_location: "cover-photo-hinulugang-taktak-1024x682.webp",
    query: "hinulugang-taktak",
    g_map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.0831537292283!2d121.162343588855!3d14.594337399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8b17887ca21%3A0x8e09689a39563205!2sHinulugang%20Taktak!5e0!3m2!1sen!2sph!4v1747629744720!5m2!1sen!2sph"
  },
  {
    name: "Pinto Art Museum",
    image_location: "pinto-art.jpg",
    query: "pinto-art-museum",
    g_map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3201657646714!2d121.1614464743464!3d14.580823477562074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7560c9a4dc9%3A0x8278981e4ee4d779!2sPint%C3%B4%20Art%20Museum!5e0!3m2!1sen!2sph!4v1747629105338!5m2!1sen!2sph"
  },
  {
    name: "Antipolo Cathedral",
    image_location: "Antipolo_Cathedral_2025-01-26.jpg",
    query: "antipolo-cathedral",
    g_map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.802593064729!2d121.15816624558138!3d14.5876396420967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bf53fd15d2b1%3A0xa23619ce8136cfc6!2sAntipolo%20Cathedral!5e0!3m2!1sen!2sph!4v1747629187884!5m2!1sen!2sph"
  },
  {
    name: "Mount Purro Nature Reserve",
    image_location: "mpn.jpg",
    query: "mount-purro",
    g_map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.6207573211123!2d121.24144387434826!3d14.677450875192035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bd7aaaaaaab1%3A0x364beff3417b27a9!2sMount%20Purro%20Nature%20Reserve!5e0!3m2!1sen!2sph!4v1747629261012!5m2!1sen!2sph"
  },
  {
    name: "Cloud 9",
    image_location: "Cloud-9-Antipolo-Tour-13.jpg",
    query: "cloud9",
    g_map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123543.77761848195!2d121.01023194335941!3d14.613708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9e5d69c9829%3A0xe3eb41ca7c7d12fa!2sCloud%209%20360%C2%B0%20View!5e0!3m2!1sen!2sph!4v1747629327171!5m2!1sen!2sph"
  }
];


function focuSpot(list) {
  document.getElementById("name").innerHTML = list.name;
  document.getElementById("name-spot").innerHTML = list.name;
  document.getElementById("header-content-wrapper").style.backgroundImage = `url('/img/${list.image_location}')`;
  document.getElementById("name-card").style.backgroundImage = `url('/img/${list.image_location}')`;
  document.getElementById("des-" + list.query).removeAttribute("style");
  document.querySelector("#map-container > iframe").src = list.g_map;
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