document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });

    backToTopButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  window.onload = function () {
    const textElement = document.querySelector('.animated-text');
    const text = textElement.textContent;
    const letters = text.split('');
    let fontSize = 16;

    function animateText() {
      textElement.innerHTML = letters
        .map(letter => `<span class="animated-letter" style="font-size: ${fontSize}px">${letter}</span>`)
        .join('');
      fontSize += 3; 
      if (fontSize <= 32) { 
        requestAnimationFrame(animateText);
      }
    }

    animateText()
  }