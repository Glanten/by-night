// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get all clan glyphs and modals
  const glyphs = document.querySelectorAll(".clan_glyph");
  const modals = document.querySelectorAll(".clan_modal");

  // Loop through each glyph and attach a click event listener
  glyphs.forEach((glyph) => {
    glyph.addEventListener("click", function () {
      // Get the modal ID and corresponding content file
      const modalId = this.getAttribute("modal_id");
      const modal = document.getElementById(modalId);

      // Fetch the HTML content based on the glyph clicked
      const clanName = this.id; // e.g., "brujah", "gangrel", etc.
      fetch(`clans/${clanName}.html`)
        .then((response) => response.text())
        .then((data) => {
          // Inject the fetched content into the modal content container
          modal.querySelector(".clan_modal_content").innerHTML = data;

          // Display the modal after loading the content
          modal.style.display = "block";
        })
        .catch((error) => {
          console.error("Error loading modal content:", error);
        });
    });
  });

  // Close the modal if the user clicks outside the modal content
  window.addEventListener("click", function (event) {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
