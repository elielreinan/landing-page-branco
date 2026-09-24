(() => {
  "use strict";

  const menuButton = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("#mobile-menu");
  const menuIcon = menuButton?.querySelector("i");

  if (!menuButton || !mobileNav) return;

  const setMenuState = (open) => {
    mobileNav.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");

    if (menuIcon) {
      menuIcon.classList.toggle("fa-bars", !open);
      menuIcon.classList.toggle("fa-xmark", open);
    }
  };

  menuButton.addEventListener("click", () => {
    setMenuState(!mobileNav.classList.contains("is-open"));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });
})();