document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

if (window.innerWidth < 700) {
  window.location.href = "mobile.html";
}

