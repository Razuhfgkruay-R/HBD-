document.querySelector(".flap").addEventListener("click", function () {
  this.classList.add("open");
  document.querySelector(".message").classList.add("show");
});