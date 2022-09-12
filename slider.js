const navButton = document.getElementById("nav-button");
const sidebar2 = document.querySelector(".sidebar2");
const closeBtn = document.querySelector(".close-btn");
const listButton = document.querySelector(".nav-list-button");


navButton.addEventListener("click", () => {
  sidebar2.classList.toggle("open-bar");
  listButton.classList.toggle('display-none');
  console.log("clicked");

});

closeBtn.addEventListener('click', () => {
  sidebar2.classList.toggle('open-bar');
  listButton.classList.toggle('display-none');
  console.log("clicked");

})


