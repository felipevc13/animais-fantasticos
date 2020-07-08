/* eslint-disable import/extensions */
import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector('[data-menu="lista"]');
  const eventos = ["click", "touchstart"];
  function openMenu() {
    menuList.classList.add("ativo");
    menuButton.classList.add("ativo");
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
