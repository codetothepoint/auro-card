/* eslint-disable no-underscore-dangle, no-magic-numbers, max-statements */

// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

import "@alaskaairux/auro-header";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-card element provides users a flexible way to convey a summary of information.
 *
 * @slot title - card heading
 * @slot image - card image placement
 * @slot description - main body of copy
 * @slot cta - call to action
 * @slot disclaimer - disclaimer copy
 */
class AuroCard extends LitElement {

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    return html`
      <auro-header slot="title" level="2" display="600">
        <slot name="title"></slot>
      </auro-header>

      <div class="imageWrapper">
        <slot name="image"></slot>
      </div>

      <div>
        <slot name="description" class="description"></slot>
        <slot name="action"></slot>
        <slot name="disclaimer" class="disclaimer"></slot>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-card")) {
  customElements.define("auro-card", AuroCard);
}
