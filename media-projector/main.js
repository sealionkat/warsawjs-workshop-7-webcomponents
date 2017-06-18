class MediaProjector extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({mode: 'open'});
    console.log('MediaProjector');
  }

  connectedCallback() {
    let currentDocument = document.currentScript.ownerDocument;

    this.shadow.appendChild(currentDocument.querySelector('template').content.cloneNode(true));
    this.playButton = this.shadow.querySelector('#play-button span');
    this.playButton.addEventListener('click', this.startSlideshow.bind(this));
  }

  startSlideshow() {
    let slidesContainer = this.shadow.querySelector('#slide');
    this.slider = new Slider({slides: this.children, container: slidesContainer});
    this.playButton.removeEventListener('click', this.startSlideshow);
  }
}

window.customElements.define('media-projector', MediaProjector);