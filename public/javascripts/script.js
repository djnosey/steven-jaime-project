const icon = document.querySelector("#hamburgerIcon");
const menu = document.querySelector(".menu");

console.log(menu);

icon.addEventListener("click", () => {
  if (icon.classList.contains("closed")) {
    icon.classList.remove("closed");
    icon.classList.add("open");
    menu.classList.remove("closed");
    menu.classList.add("open");
  } else {
    icon.classList.remove("open");
    icon.classList.add("closed");
    menu.classList.remove("open");
    menu.classList.add("closed");
  }
});
