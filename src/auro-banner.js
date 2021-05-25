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
 * @attr {Boolean} prefersLeft - The left column will move to the top at the lower breakpoint
 * @attr {Boolean} prefersRight - The right column will move to the top at the lower breakpoint.  If both or neither are set, `prefersRight` is the default.
 * @attr {String} ratio - in the format 'X:Y' where 'X' and 'Y' are two integers.
 * @slot left - Content in the left column.
 * @slot right - Content in the right column.
 * @slot overlay - Content in the front overlay.
 */
class AuroBanner extends LitElement {

  constructor() {
    super();
    this.ratio = '1:1';
    this.prefersLeft = false;
    this.prefersRight = false;
  }

  static get properties() {
    return {
      prefersLeft: {
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
    const _isPreferenceSet = this.prefersLeft || this.prefersRight,
    [
      leftRatio,
      rightRatio
    ] = this.ratio.split(':'),
    classes = {
      'bannerWrapper': true,
      'prefersRight': this.prefersRight || !_isPreferenceSet,
      'prefersLeft': this.prefersLeft && !this.prefersRight,
    },
    leftSlotStyles = {
      'flex-grow': leftRatio,
    },
    rightSlotStyles = {
      'flex-grow': rightRatio,
    };

    return html`
    <div class="${classMap(classes)}">
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
