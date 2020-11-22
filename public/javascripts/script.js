const menu = document.querySelector(".menu");
const icon = document.querySelector("#hamburgerIcon");
const listitem = document.querySelector(".menuList");

function closeMenu() {
  if (menu.classList.contains("closed")) {
    menu.classList.remove("closed");
    menu.classList.add("open");
    icon.classList.remove("closed");
    icon.classList.add("open");
    listitem.classList.remove("closed");
    listitem.classList.add("open");
  } else {
    menu.classList.remove("open");
    menu.classList.add("closed");
    icon.classList.remove("open");
    icon.classList.add("closed");
    listitem.classList.remove("open");
    listitem.classList.add("closed");
  }
}

icon.addEventListener("click", closeMenu);

console.log(menu, icon, listitem);
