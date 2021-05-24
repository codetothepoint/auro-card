/* eslint-disable no-negated-condition */
/* eslint-disable no-underscore-dangle, no-magic-numbers, max-statements */

// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';
import styleCss from "./style-banner-css.js";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";

import "@alaskaairux/auro-header";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.
 * @attr {Boolean} prefersLeft - 
 * @attr {Boolean} prefersRight - 
 * @attr {String} ratio - 
 * @slot left - 
 * @slot right - 
 * @slot overlay - 
 */
class AuroBanner extends LitElement {

  constructor() {
    super();
    this.ratio = '1:1';
  }

  static get properties() {
    return {
      perfersLeft: {
        type: Boolean
      },
      prefersRight: {
        type: Boolean
      },
      ratio: {
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
    const leftRatio, rightRatio = this.ratio.split(':');

    const classes = {
      'prefersRight': this.prefersRight,
      'prefersLeft': this.prefersLeft && !this.prefersRight,
    };
    const leftSlotStyles = {
      'flex-grow': leftRatio,
    };
    const rightSlotStyles = {
      'flex-grow': rightRatio,
    };

    return html`
    <div class="bannerWrapper" class="${classMap(classes)}">
      <slot name="left" style=${styleMap(leftSlotStyles)}></slot>
      <slot name="right" style=${styleMap(rightSlotStyles)}></slot>
      <slot name="overlay"></slot>
    </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-banner")) {
  customElements.define("auro-banner", AuroBanner);
}
