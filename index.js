const menu = document.querySelector(".menu");
const sideNav = document.querySelector("#sideNav");
const link = document.querySelector("#sideNav ul");

link.onclick = () => {
    sideNav.classList.toggle("visible");
    menu.classList.toggle("visible");
}

menu.onclick = () => {
  sideNav.classList.toggle("visible");
  menu.classList.toggle("visible");
}
