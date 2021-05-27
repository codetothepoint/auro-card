/* eslint-disable one-var */
/* eslint-disable no-negated-condition */
/* eslint-disable no-underscore-dangle, no-magic-numbers, max-statements */

// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { styleMap } from "lit-html/directives/style-map";
import styleCss from "./style-banner-css.js";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";

import "@alaskaairux/auro-header";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.
 * @attr {Boolean} prefersLeft - The left column will move to the top at the lower breakpoint
 * @attr {Boolean} prefersRight - The right column will move to the top at the lower breakpoint.  If both or neither are set, `prefersRight` is the default.
 * @attr {String} overlayBg - Sets a background behind the overlay
 * @attr {String} ratio - in the format 'X:Y' where 'X' and 'Y' are two integers.
 * @slot left - Content in the left column.
 * @slot right - Content in the right column.
 * @slot overlay - Content in the front overlay.
 */
class AuroBanner extends LitElement {
  constructor() {
    super();
    this.ratio = "1:1";
    this.prefersLeft = false;
    this.prefersRight = false;
    this.overlay = false;
    this.overlayBg = "transparent";
    this.leftSidePadding = "var(--auro-size-xxl) var(--auro-size-xxl) var(--auro-size-xxl) var(--auro-size-none)";
    this.rightSidePadding = "";
  }

  static get properties() {
    return {
      prefersLeft: {
        type: Boolean,
      },
      prefersRight: {
        type: Boolean,
      },
      ratio: {
        type: String,
      },
      overlay: {
        type: Boolean,
      },
      overlayBg: {
        type: String,
      },
      leftSidePadding: {
        type: String,
      },
      rightSidePadding: {
        type: String,
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
    const leftRatio = Number.parseInt(this.ratio.split(":")[0]);
    const rightRatio = Number.parseInt(this.ratio.split(":")[1]);

    const leftPercent = leftRatio * (100 / (leftRatio + rightRatio));
    const rightPercent = rightRatio * (100 / (leftRatio + rightRatio));

    const _isPreferenceSet = this.prefersLeft || this.prefersRight;
    const classes = {
        bannerWrapper: true,
        prefersRight: this.prefersRight || !_isPreferenceSet,
        prefersLeft: this.prefersLeft && !this.prefersRight,
      },
      leftSlotStyles = {
        width: `${leftPercent}%`,
        padding: `${this.leftSidePadding}`,
      },
      rightSlotStyles = {
        width: `${rightPercent}%`,
        padding: `${this.rightSidePadding}`,
      };

    return html`
    <div class="${classMap(classes)}">
        <div class="item" style=${styleMap(leftSlotStyles)}>
          <slot name="left"></slot>
        </div>
        <div class="item" style=${styleMap(rightSlotStyles)}>
          <slot name="right"></slot>
        </div>
      </div>
      ${this.overlay
        ? html`
        <div class="overlayContainer">
          <div class="overlayBg" style="background: ${this.overlayBg}">
            <slot name="overlay"></slot>
          </div>
        </div>`
        : html``
      }`
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-banner")) {
  customElements.define("auro-banner", AuroBanner);
}
