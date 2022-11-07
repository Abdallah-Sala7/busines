const sec = document.querySelectorAll("section")
const link = document.querySelectorAll(".nav-item")

activeMenue = () => {
  let len = sec.length;

  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  link.forEach((link) => link.classList.remove("active"));
  link[len].classList.add("active");
}

window.addEventListener("scroll", activeMenue);