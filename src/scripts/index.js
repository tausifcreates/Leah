// Opens and closes the header menu on narrow screens, which Bootstrap's
// collapse plugin and jQuery did before.
const toggler = document.querySelector(".navbar-toggler");
const menu = document.getElementById("navbarSupportedContent");
const navbar = document.querySelector(".navbar");

toggler?.addEventListener("click", () => {
  const open = menu.classList.toggle("show");
  toggler.setAttribute("aria-expanded", String(open));
  navbar.classList.toggle("expanded", open);
});
