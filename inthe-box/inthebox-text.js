
class IntheboxText extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._text = this.innerHTML

    this._characters = this._text.split('')
    const ele = document.createElement('div')
    ele.innerHTML = this._text
    ele.style.display = 'inline-block'
    ele.style.borderStyle = 'solid'
    ele.style.backgroundColor = 'white'
    ele.style.padding = '10px'
    this._shadowRoot.appendChild(ele)

  }
}

customElements.define('inthebox-text', IntheboxText);
