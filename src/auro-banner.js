/* eslint-disable no-negated-condition */
/* eslint-disable no-underscore-dangle, no-magic-numbers, max-statements */

// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-banner-css.js";

import "@alaskaairux/auro-header";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.
 * @attr {Boolean} billboard - to be used for billboard style configuration
 * @attr {Boolean} hero - to be used for hero style configuration
 * @attr {Boolean} marquee - to be used for marquee style configuration
 * @attr {Boolean} roundedBorder - to be used for roundedBorder style configuration
 * @attr {Boolean} solid - to be used when you want a solid color as opposed to a transparent background
 * @attr {Boolean} slim - to be used when we want a slimmer padding to the default banner
 * @attr {Boolean} alignRight - to be used when we want the text aligned to the right
 * @attr {Boolean} alignLeft - to be used when we want the text aligned to the left
 * @attr {Boolean} onDark - to be used when the background image or color is dark and changes the text and cta color
 * @slot displayImage - placement for `<picture />` or `<img>` elements
 * @slot prefix - placement for smaller text above title
 * @slot title - placement for header
 * @slot contentImage - image placement
 * @slot description - main body of content
 * @slot action - call to action
 * @slot disclaimer - disclaimer copy
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

  static get properties() {
    return {
      ...super.properties,
      hero: {
        type: Boolean
      },
      marquee: {
        type: Boolean
      },
      roundedBorder: {
        type: Boolean
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

    return html`
      <div class="bannerWrapper">
      ${!this.roundedBorder
        ? html`
        <slot name="displayImage" class="displayImage"></slot>`
        : html``
      }

        <div class="bodyWrapper">
          ${this.hero
            ? html`
              <auro-header level="2" display="300" margin="top" size="none" class="title prefix">
                <slot name="prefix"></slot>
              </auro-header>

              <auro-header level="2" display="600" margin="both" size="none" class="title">
                <slot name="title"></slot>
              </auro-header>`
            : html``
          }

          ${this.marquee
            ? html`
              <auro-header level="2" display="400" margin="both" size="none" class="title marquee">
                <slot name="title"></slot>
              </auro-header>`
            : html``
          }

          ${!this.roundedBorder && !this.marquee && !this.hero
            ? html`
              <auro-header level="2" display="600" margin="both" size="none" class="title">
                <slot name="title"></slot>
              </auro-header>`
            : html``
          }

          <slot name="contentImage" class="imageWrapper"></slot>


          <div class="contentWrapper">
          ${this.roundedBorder
            ? html`
              <auro-header level="2" display="300" margin="both" size="none" class="title prefix">
                <slot name="prefix"></slot>
              </auro-header>

              <auro-header level="2" display="600" margin="both" size="none" class="title">
                <slot name="title"></slot>
              </auro-header>`
            : html``
          }
            <slot name="description" class="description"></slot>
            <slot name="action" class="action"></slot>
            <slot name="disclaimer" class="disclaimer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-banner")) {
  customElements.define("auro-banner", AuroBanner);
}
