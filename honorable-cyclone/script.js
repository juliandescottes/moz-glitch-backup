customElements.define('my-first-element', class extends HTMLElement {
	connectedCallback() {
  	this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = '<div>Cannot inspect</div>'
  }
});

customElements.define('my-second-element', class extends HTMLElement {
	connectedCallback() {
  	this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = 'second-element-content'
  }
});