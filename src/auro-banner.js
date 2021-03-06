/* eslint-disable init-declarations */
/* eslint-disable radix */
/* eslint-disable one-var */
/* eslint-disable no-negated-condition */
/* eslint-disable no-underscore-dangle, no-magic-numbers, max-statements */

// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
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
 * @attr {Boolean} onBackground - This setting provides padding around the banner when used on a background color or image.
 * @attr {String} overlayBg - Sets a background behind the overlay
 * @attr {String} ratio - in the format 'X:Y' where 'X' and 'Y' are two integers.
 * @slot left - Content in the left column.
 * @slot right - Content in the right column.
 * @slot overlay - Content in the front overlay.
 */
class AuroBanner extends LitElement {
    // This function removes a CSS selector if the footer slot is empty
    firstUpdated() {
      const slotNodes = this.shadowRoot.querySelectorAll(`.bannerWrapper slot`);

      for (const item of slotNodes) {
        this.slt = item.assignedNodes();
        // eslint-disable-next-line no-magic-numbers
        if (this.slt.length === 0) {
          item.removeAttribute("class");
        }
      }
    }

  constructor() {
    super();
    this.ratio = "1:1";
    this.overlay = false;
    this.overlayBg = "var(--auro-color-brand-neutral-400)";
    this.flipped = false;
    this.onBackground = false;
    this.inset = false;
  }

  static get properties() {
    return {
      onBackground: {
        type: Boolean,
        reflect: true,
      },
      inset: {
        type: Boolean,
        reflect: true,
      },
      flipped: {
        type: Boolean,
        reflect: true,
      },
      overlay: {
        type: Boolean,
        reflect: true,
      },
      overlayBg: {
        type: String,
      },
      ratio: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    let leftRatio
    let rightRatio

    if (!this.flipped) {
    leftRatio = Number.parseInt(this.ratio.split(":")[0]);
    rightRatio = Number.parseInt(this.ratio.split(":")[1]);
    } else {
      leftRatio = Number.parseInt(this.ratio.split(":")[1]);
      rightRatio = Number.parseInt(this.ratio.split(":")[0]);
    }

    const leftPercent = leftRatio * (100 / (leftRatio + rightRatio));
    const rightPercent = rightRatio * (100 / (leftRatio + rightRatio));

    const leftSlotStyles = {
        flexBasis: `${leftPercent}%`,
      },
      rightSlotStyles = {
        flexBasis: `${rightPercent}%`,
      };

    return html` <div class="bannerWrapper">
        ${leftPercent === 0
          ? html``
          : html`<div class="item content" style=${styleMap(leftSlotStyles)}>
              <slot name="content"></slot>
            </div>`}
        ${rightPercent === 0
          ? html``
          : html`<div class="item graphic" style=${styleMap(rightSlotStyles)}>
              <slot name="graphic"></slot>
            </div>`}
      </div>
      ${this.overlay
        ? html` <div class="overlayContainer">
            <div class="overlayBg" style="background: ${this.overlayBg}">
              <slot name="overlay"></slot>
            </div>
          </div>`
        : html``}`;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-banner")) {
  customElements.define("auro-banner", AuroBanner);
}
