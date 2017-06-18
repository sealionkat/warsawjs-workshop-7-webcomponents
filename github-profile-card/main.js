class GithubProfileCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    let currentDocument = document.currentScript.ownerDocument;

    this.shadow.appendChild(currentDocument.querySelector('template').content.cloneNode(true));
  }
}

window.customElements.define('github-profile-card', GithubProfileCard);