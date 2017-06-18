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
    this.shadow.querySelector('h1').innerHTML = this.attributes.text.value;
  }

}

window.customElements.define('mockup-element', MockupElement);