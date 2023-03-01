const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

});

function ArgentinaPrograma() {
  var x = document.getElementById("AP40");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}