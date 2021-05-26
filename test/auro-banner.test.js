/* eslint-disable no-undef, sort-vars, no-implicit-coercion */

import { fixture, html, expect } from '@open-wc/testing';
// import sinon from 'sinon';
import '../src/auro-banner';

describe('<auro-banner>', () => {    

  it('<auro-banner> custom element is defined', async () => {
    const el = await !!customElements.get("auro-card");

    await expect(el).to.be.true;
  });

  it('is accessible', async () => {
    const el = await fixture(html`
      <auro-banner prefersright ratio="1:3">
        <div slot="left">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
        <img slot="right" src="/pic.png" alt="a test image" />
        <div slot="overlay">
        </div>        
      </auro-banner>
    `);

    await expect(el).to.be.accessible();
  });

  it('with left preference', async () => {
    const el = await fixture(html`
      <auro-banner id="banner" prefersleft ratio="1:3">
        <img slot="left" src="/pic.png" alt="a test image" />
        <div slot="right">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
        <div slot="overlay">
        </div>        
      </auro-banner>
    `);

    //console.log(el.shadowRoot.innerHTML);

    await expect(el.getElementsByClassName('bannerWrapper')).to.not.be.null;
    await expect(el.shadowRoot.innerHTML.indexOf('prefersLeft') > 0).to.equal(true);
    await expect(el.shadowRoot.innerHTML.indexOf('prefersRight') > 0).to.equal(false);

    await expect(el.shadowRoot.innerHTML.match(/<div class="item" style="width: ([0-9]+)%;">/gm)[0].match(/width: ([0-9]+)%;/)[1]).to.equal('25');
    await expect(el.shadowRoot.innerHTML.match(/<div class="item" style="width: ([0-9]+)%;">/gm)[1].match(/width: ([0-9]+)%;/)[1]).to.equal('75');
  });

  it('with right preference', async () => {
    const el = await fixture(html`
      <auro-banner prefersright ratio="1:3">
        <div slot="left">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
          <input type="button">CTA</input>
        </div>
        <img slot="right" src="/pic.png" alt="a test image" />
        <div slot="overlay">
        </div>        
      </auro-banner>
    `);

    await expect(el.getElementsByClassName('bannerWrapper')).to.not.be.null;
    await expect(el.shadowRoot.innerHTML.indexOf('prefersLeft') > 0).to.equal(false);
    await expect(el.shadowRoot.innerHTML.indexOf('prefersRight') > 0).to.equal(true);
  });

  it('prefers right when both preferences set', async () => {
    const el = await fixture(html`
      <auro-banner prefersleft prefersright ratio="1:3">
        <div slot="left">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
          <input type="button">CTA</input>
        </div>
        <img slot="right" src="/pic.png" alt="a test image" />
        <div slot="overlay">
        </div>        
      </auro-banner>
    `);

    await expect(el.getElementsByClassName('bannerWrapper')).to.not.be.null;
    await expect(el.shadowRoot.innerHTML.indexOf('prefersLeft') > 0).to.equal(false);
    await expect(el.shadowRoot.innerHTML.indexOf('prefersRight') > 0).to.equal(true);
  });

  it('prefers right no preference is set', async () => {
    const el = await fixture(html`
      <auro-banner ratio="1:3">
        <div slot="left">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
          <input type="button">CTA</input>
        </div>
        <img slot="right" src="/pic.png" alt="a test image" />
        <div slot="overlay">
        </div>        
      </auro-banner>
    `);

    await expect(el.getElementsByClassName('bannerWrapper')).to.not.be.null;
    await expect(el.shadowRoot.innerHTML.indexOf('prefersLeft') > 0).to.equal(false);
    await expect(el.shadowRoot.innerHTML.indexOf('prefersRight') > 0).to.equal(true);
  });

  it('ratio defaults to 1:1 when none set', async () => {
    const el = await fixture(html`
      <auro-banner>
        <div slot="left">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
          <input type="button">CTA</input>
        </div>
        <img slot="right" src="/pic.png" alt="a test image" />
        <div slot="overlay">
        </div>        
      </auro-banner>
    `);

    await expect(el.getElementsByClassName('bannerWrapper')).to.not.be.null;
    await expect(el.shadowRoot.innerHTML.indexOf('prefersLeft') > 0).to.equal(false);
    await expect(el.shadowRoot.innerHTML.indexOf('prefersRight') > 0).to.equal(true);

    await expect(el.shadowRoot.innerHTML.match(/<div class="item" style="width: ([0-9]+)%;">/gm)[0].match(/width: ([0-9]+)%;/)[1]).to.equal('50');
    await expect(el.shadowRoot.innerHTML.match(/<div class="item" style="width: ([0-9]+)%;">/gm)[1].match(/width: ([0-9]+)%;/)[1]).to.equal('50');
  });
});
