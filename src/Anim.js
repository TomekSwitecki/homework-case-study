export function fadeInImages() {
    const hiddenElements = document.querySelectorAll(".hidden_left, .hidden_up, .hidden_right, .hidden_opacity, .hidden_down");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // observer.unobserve(entry.target);
          }
          else
          {
            entry.target.classList.remove("show");
          }
        });
      });
      hiddenElements.forEach((el)=>observer.observe(el));
  }

  