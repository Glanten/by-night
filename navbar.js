var acc = document.getElementsByClassName("navbar");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var navlinks = this.nextElementSibling;
    // if (navlinks.style.display === "block") {
    //   navlinks.style.display = "none";
    // } else {
    //   navlinks.style.display = "block";
    // }
    if (navlinks.style.visibility === "visible") {
      navlinks.style.visibility = "hidden";
    } else {
      navlinks.style.visibility = "visible";
    }
  });
}
