const navLinks = document.querySelectorAll(".nav-item");

// Highlight based on current URL
const currentPage = window.location.pathname;

navLinks.forEach((link) => {
  if (
    link.getAttribute("href") === currentPage ||
    currentPage.includes(link.getAttribute("href"))
  ) {
    link.classList.add("active");
  }

  // Click behavior
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});
