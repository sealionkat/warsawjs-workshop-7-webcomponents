class MockupElement extends HTMLElement {
  constructor() {
    super();
    console.log('My awesome MockupElement');
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    console.log('helou, I\'m connected');
    this.shadow.innerHTML = document.querySelector('template').innerHTML;
    this.shadow.querySelector('img').attributes.src.value = this.attributes.image.value;
  }


}

window.customElements.define('mockup-element', MockupElement);