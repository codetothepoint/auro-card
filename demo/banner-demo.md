# Banner

The `<auro-banner>` element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image and details.

The details are broken down into `left`, `right`, and `overlay`.

## Component use cases

Use the `<auro-banner>` element to:

* grab the attention of a user
* direct your user to another resource for further information

## Do not...

Use `<auro-banner>` as the primary source of information.

## Default element

The default `<auro-banner>` element features configuration options when using using the `displayImage`, `contentImage`, `prefix`, `title`, `description`, `action` and `disclaimer` slots for structured content placement.

Notice the use of the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink) element and the `action` slot in the following examples. All the [properties](https://auro.alaskaair.com/components/auro/hyperlink/api) of the Hyperlink element are directly applicable.

## PrefersRight

The `<auro-banner>` element with the `prefersRight` property features a single configuration using the `left` and `right` slots for structured content placement where the right side of the banner will stack on top of the left side. Note that if `prefersRight` and `prefersLeft` is not set, it will automatically apply `prefersRight`.

<div class="exampleWrapper">
  <auro-banner prefersRight>
    <picture slot="right">
      <source srcset="https://picsum.photos/id/430/1124/800" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/430/1124/1000" media="(min-width: 768px)">
      <source srcset="https://picsum.photos/id/430/736/750" media="(min-width: 736px)">
      <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
      <source srcset="https://picsum.photos/id/430/320/700" media="(min-width: 320px)">
      <img src="https://picsum.photos/id/430/225/550" alt="" />
    </picture>
    <div slot="left">
      <img
        src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner prefersRight>
  <picture slot="right">
    <source srcset="https://picsum.photos/id/430/1124/800" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/430/1124/1000" media="(min-width: 768px)">
    <source srcset="https://picsum.photos/id/430/736/750" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/430/320/700" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/430/225/550" alt="" />
  </picture>
  <div slot="left">
    <img
      src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
```
</auro-accordion>

## PrefersLeft

As opposed to `prefersRight`, the `<auro-banner>` element with the `prefersLeft` property will have the left side of the banner stack above the right side in smaller sizes.

<auro-banner prefersLeft>
  <picture slot="left">
    <source srcset="https://picsum.photos/id/430/1124/800" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/430/1124/1000" media="(min-width: 768px)">
    <source srcset="https://picsum.photos/id/430/736/750" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/430/320/700" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/430/225/550" alt="" />
  </picture>
  <div slot="right">
    <img
      src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner prefersLeft>
  <picture slot="left">
    <source srcset="https://picsum.photos/id/430/1124/800" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/430/1124/1000" media="(min-width: 768px)">
    <source srcset="https://picsum.photos/id/430/736/750" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/430/320/700" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/430/225/550" alt="" />
  </picture>
  <div slot="right">
    <img
      src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
```
</auro-accordion>



## Ratio

The following example illustrates how to use the `ratio` property to control the width of the left and right side of the banner. The structure is `{leftRatio}:{rightRatio}` where the left and right ratios are the comparison of sizes between the two parts of the banner.

<div class="exampleWrapper">
  <auro-banner ratio="2:3">
    <picture slot="right">
      <source srcset="https://picsum.photos/id/42/1124/800" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/42/1124/1000" media="(min-width: 768px)">
      <source srcset="https://picsum.photos/id/42/736/750" media="(min-width: 736px)">
      <source srcset="https://picsum.photos/id/42/736/1400" media="(min-width: 375px)">
      <source srcset="https://picsum.photos/id/42/320/700" media="(min-width: 320px)">
      <img src="https://picsum.photos/id/42/225/550" alt="" />
    </picture>
    <div slot="left">
      <span>Beverages and cocktails</span>
      <p>
        <span style="max-width: 360px;display: block;">Enjoy soft drinks, fresh Starbucks® coffee – including lattes and cappuccinos, and Teavana® tea while you relax. Or try our famous Bloody Mary.</span>
      </p>
      <auro-hyperlink
        cta
        secondary
        ondark
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner ratio="2:3">
  <picture slot="right">
    <source srcset="https://picsum.photos/id/42/1124/800" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/42/1124/1000" media="(min-width: 768px)">
    <source srcset="https://picsum.photos/id/42/736/750" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/42/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/42/320/700" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/42/225/550" alt="" />
  </picture>
  <div slot="left">
    <span>Beverages and cocktails</span>
    <p>
      <span style="max-width: 360px;display: block;">Enjoy soft drinks, fresh Starbucks® coffee – including lattes and cappuccinos, and Teavana® tea while you relax. Or try our famous Bloody Mary.</span>
    </p>
    <auro-hyperlink
      cta
      secondary
      ondark
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
```
</auro-accordion>

## Overlay

The following example illustrates a `<auro-banner>` custom element with the `hero` template style. This example also illustrates the use of the `prefix` slot.

<div class="exampleWrapper">
  <auro-banner hero>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/369/2048/2000" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/369/736/1400" media="(min-width:660px)">
      <img src="https://picsum.photos/id/369/660/420" alt="">
    </picture>
    <span slot="prefix">Duis aute irure dolor</span>
    <span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner hero>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/369/2048/2000" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/369/736/1400" media="(min-width:660px)">
    <img src="https://picsum.photos/id/369/660/420" alt="">
  </picture>
  <span slot="prefix">Duis aute irure dolor</span>
  <span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <auro-hyperlink
    cta
    secondary
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
</auro-accordion>


## Ommiting a side

The following example illustrates a `<auro-banner>` custom element with the `iconic` template style.  The `iconic` template style hides the `displayImage` on small screen sizes and only shows the icon.  This examples also shows how to customize the icon background color using `iconbg`.

<div class="exampleWrapper">
  <auro-banner iconic iconbg="var(--auro-color-brand-neutral-400)">
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/452/2800/2000.jpg" media="(min-width: 1054px)">
      <source srcset="https://picsum.photos/id/452/1500/2000" media="(min-width:660px)">
      <img src="https://picsum.photos/id/452/2800/2000.jpg" alt="">
    </picture>
    <span slot="icon">
      <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
    </span>
    <span slot="title">
      <auro-header level="2" display="800" margin="both" size="none">Lorem ipsum title</auro-header>
      <auro-header level="3" display="300" margin="top" size="none">You can add multiple auro-header's here</auro-header>
    </span>
    <p slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </p>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner iconic iconbg="var(--auro-color-brand-neutral-400)">
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/452/2800/2000.jpg" media="(min-width: 1054px)">
    <source srcset="https://picsum.photos/id/452/1500/2000" media="(min-width:660px)">
    <img src="https://picsum.photos/id/452/2800/2000.jpg" alt="">
  </picture>
  <span slot="icon">
    <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
  </span>
  <span slot="title">
    <auro-header level="2" display="800" margin="both" size="none">Lorem ipsum title</auro-header>
    <auro-header level="3" display="300" margin="top" size="none">You can add multiple auro-header's here</auro-header>
  </span>
  <p slot="description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
  </p>
</auro-banner>
```
</auro-accordion>

## Marquee

The following example illustrates a `<auro-banner>` custom element with the `marquee` template style. This template configuration also supports the `slim` and `onDark` attributes.

<div class="exampleWrapper">
  <auro-banner marquee>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/154/2048/2000" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/154/736/1400" media="(min-width:660px)">
      <img src="https://picsum.photos/id/154/660/420" alt="">
    </picture>
    <span slot="prefix">Duis aute irure dolor</span>
    <span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner marquee>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/154/2048/2000" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/154/736/1400" media="(min-width:660px)">
    <img src="https://picsum.photos/id/154/660/420" alt="">
  </picture>
  <span slot="prefix">Duis aute irure dolor</span>
  <span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <auro-hyperlink
    cta
    secondary
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
</auro-accordion>

## Marquee / solid

The following example illustrates a `<auro-banner>` custom element with the `marquee solid` template style. With this configuration, `onDark` is implied.

<div class="exampleWrapper">
  <auro-banner marquee solid>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/1015/1048/2000" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/1015/736/1400" media="(min-width:660px)">
      <img src="https://picsum.photos/id/1015/660/660" alt="">
    </picture>
    <auro-alaska official ondark style="width: 192px" slot="contentImage"></auro-alaska>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <auro-hyperlink
      cta
      ondark
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner marquee solid>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/1015/1048/2000" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/1015/736/1400" media="(min-width:660px)">
    <img src="https://picsum.photos/id/1015/660/660" alt="">
  </picture>
  <auro-alaska official ondark style="width: 192px" slot="contentImage"></auro-alaska>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <auro-hyperlink
    cta
    ondark
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
</auro-accordion>

## RoundedBorder

The following example illustrates a `<auro-banner>` custom element with the `roundedBorder` variant style. With this configuration, no `displayImage` is used.  Instead only the `contentImage` is used and the rest of the offer is displayed in a row.

<div class="exampleWrapper">
  <auro-banner roundedBorder alignLeft>
  <img src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="" slot="contentImage" />
    <span slot="prefix">Prefix - Limited Time</span>
    <span slot="title">Title - Irure dolor.</span>
    <p slot="description">
      Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div slot="disclaimer">
      * Disclaimer - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <auro-hyperlink
      cta
      secondary
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner roundedBorder alignLeft>
  <img src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="" slot="contentImage" />
  <span slot="prefix">Prefix - Limited Time</span>
  <span slot="title">Title - Irure dolor.</span>
  <p slot="description">
    Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  <div slot="disclaimer">
    * Disclaimer - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
  <auro-hyperlink
    cta
    secondary
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
</auro-accordion>
