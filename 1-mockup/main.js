class MockupElement extends HTMLElement {
  constructor() {
    super();
    console.log('My awesome MockupElement');
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    console.log('helou, I\'m connected');
    this.shadow.appendChild(document.querySelector('template').content.cloneNode(true));
    this.shadow.querySelector('img').src = this.attributes.image.value;
  }

}

window.customElements.define('mockup-element', MockupElement);