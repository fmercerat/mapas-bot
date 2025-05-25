import { LitElement, html, css } from 'lit';

export class MapasBot extends LitElement {
  static properties = {
    name: { type: String },
  };

  static styles = css`
    :host {
      display: inline-block;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  `;

  constructor() {
    super();
    this.name = '';
  }

  render() {
    const imageName = this.name.toLowerCase().replace(/\s+/g, '');

    return html`
      <div class="cont">
        <img src="/images/${imageName}.png" alt="Mapa ${this.name}">
      </div>
    `;
  }
}

customElements.define('mapas-bot', MapasBot); 