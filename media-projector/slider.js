const DELAY = 3000;

class Slider {
  constructor({slides, container}) {
    this.startShow({slides, container});
  }

  startShow({slides, container}) {
    const slidesLength = slides.length;
    let slideIndex = 0;

    setInterval(() => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      container.appendChild(slides[slideIndex].cloneNode(true));

      slideIndex++;
      if (slideIndex >= slidesLength) {
        slideIndex = 0;
      }
    }, DELAY);
  }
}
