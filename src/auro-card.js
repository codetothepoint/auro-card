/* eslint-disable no-underscore-dangle, no-magic-numbers, max-statements */

// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
import { styleMap } from 'lit-html/directives/style-map';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

import "@alaskaairux/auro-header";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-card element provides users a flexible way to convey a summary of information.
 *
 * @attr {Integer} width - The width of the card, if not set, it will fill the container.
 * @attr {Integer} height - The height of the card, if not set, it will fill the container.
 * @slot title - Content for the card heading.
 * @slot top - Content on the top of the banner.
 * @slot bottom - Content on the bottom of the banner.
 */
class AuroCard extends LitElement {

  static get properties() {
    return {
      width: {
        type: String
      },
      height: {
        type: String
      }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    const cardStyles = {
      'width': this.width,
      'height': this.height
    };

    return html`
      <div style=${styleMap(cardStyles)}>
        <auro-header slot="title" level="2" display="600">
          <slot name="title"></slot>
        </auro-header>

        <div class="top">
          <slot name="top"></slot>
        </div>

        <div>
          <slot name="bottom"></slot>
        </div>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-card")) {
  customElements.define("auro-card", AuroCard);
}
