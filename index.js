var acc = document.getElementsByClassName("index_accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var index_panel = this.nextElementSibling;
    if (index_panel.style.display === "block") {
      index_panel.style.display = "none";
    } else {
      index_panel.style.display = "block";
    }
  });
}
