let nav = document.getElementById("nav");
let heightOffset = 150;

  function addBg(e) {
    this.classList.add("bg-white");
  }

  function removeBg(e) {
    this.classList.remove("bg-white");
  }

window.addEventListener("scroll", function (e) {
  console.log(window.scrollY);

  if (window.scrollY > heightOffset) {
    nav.removeEventListener("mouseover", addBg);
    nav.removeEventListener("mouseout", removeBg);
    nav.classList.add("bg-white");

  } else if (window.scrollY < heightOffset) {

    nav.addEventListener("mouseover", addBg);
    nav.addEventListener("mouseout", removeBg);
    nav.classList.remove("bg-white");

  }
  
});