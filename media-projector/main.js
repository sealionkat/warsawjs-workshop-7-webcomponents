class MediaProjector extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({mode: 'open'});
    console.log('MediaProjector');
  }

  connectedCallback() {
    let currentDocument = document.currentScript.ownerDocument;

    this.shadow.appendChild(currentDocument.querySelector('template').content.cloneNode(true));
    let slidesContainer = this.shadow.querySelector('#slide');

    this.slider = new Slider({slides: this.children, container: slidesContainer});
  }
}

window.customElements.define('media-projector', MediaProjector);