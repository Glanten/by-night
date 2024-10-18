// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get all clan glyphs and modals
  const glyphs = document.querySelectorAll(".clan_glyph");
  const modals = document.querySelectorAll(".discipline_modal");
  const closeButtons = document.querySelectorAll(".modal_close");

  // Loop through each glyph and attach a click event listener
  glyphs.forEach((glyph) => {
    glyph.addEventListener("click", function () {
      // Get the modal ID and corresponding content file
      const modalId = this.getAttribute("modal_id");
      const modal = document.getElementById(modalId);

      // Fetch the HTML content based on the glyph clicked
      const disciplineName = this.id; // e.g., "brujah", "gangrel"
      fetch(`disciplines/${disciplineName}.html`)
        .then((response) => response.text())
        .then((data) => {
          // Inject the fetched content into the modal content container
          modal.querySelector(".discipline_modal_content").innerHTML = data;

          // Display the modal after loading the content
          modal.style.display = "block";

          // Re-attach the close button listener (since it may have been replaced by fetched content)
          const closeButton = modal.querySelector(".modal_close");
          closeButton.addEventListener("click", function () {
            modal.style.display = "none";
          });
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
