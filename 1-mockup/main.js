class MockupElement extends HTMLElement {
  constructor() {
    super();
    console.log('My awesome MockupElement');
    this.shadow = this.attachShadow({mode: 'open'});
    console.log(this.shadow);

    this.shadow.innerHTML = document.querySelector('template').innerHTML;
  }
}

window.customElements.define('mockup-element', MockupElement);