/* eslint-disable no-undef, sort-vars, no-implicit-coercion */

import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-card.js';

describe('auro-card', () => {

  it('auro-card is accessible', async () => {
    const el = await fixture(html`
      <auro-card>
        <span slot="title">
          Pri dicat graece abhorreant
        </span>
        <img
          slot="top"
          src="https://picsum.photos/304?random=1"
          alt="Random insert 0"/>
        <div slot="bottom">
          <p>
            Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei.
          </p>
          <p>
            * Errem tempor eligendi cu eos
          </p>
        </div>
      </auro-card>
    `);
    await expect(el).to.not.be.null;
    await expect(el).to.be.accessible();
  });

  it('auro-card custom element is defined', async () => {
    const el = await !!customElements.get("auro-card");

    await expect(el).to.be.true;
  });

  it('auro-card can have set widths and heights', async () => {
    const el = await fixture(html`
      <auro-card width="19rem" height="31rem">
        <img
          slot="top"
          src="https://picsum.photos/304?random=1"
          alt="Random insert 0"/>
        <div slot="bottom">
          <p>
            Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei.
          </p>
          <p>
            * Errem tempor eligendi cu eos
          </p>
        </div>
      </auro-card>
    `);
    await expect(el).to.not.be.null;
    await expect(el.getAttribute('width')).to.equal('19rem');
    await expect(el.getAttribute('height')).to.equal('31rem');
  });
});
