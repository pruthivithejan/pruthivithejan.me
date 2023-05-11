const navLinks: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll("[data-navLink]");

navLinks.forEach((link: HTMLAnchorElement) => {
  if (link.getAttribute("href") === window.location.pathname) {
    link.setAttribute("aria-current", "page");
  }
});
