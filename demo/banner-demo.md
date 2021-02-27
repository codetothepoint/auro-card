# Banner

The `auro-banner` element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image, and details.

The details are broken down into `prefix`, `title`, `description`, `action`, and `disclaimer`.

## Component use cases

Use the `auro-banner` element to:

* grab the attention of a user
* direct your user to another resource for further information

## Do not...

Use `auro-banner` as the primary source of information.

## Default element

The default `auro-banner` element features configuration options when using using the `displayImage`, `contentImage`, `prefix`, `title`, `description`, `action` and `disclaimer` slots for structured content placement.

Notice the use of the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink) element and the `action` slot in the following examples. All the [properties](https://auro.alaskaair.com/components/auro/hyperlink/api) of the Hyperlink element are directly applicable.

## Billboard

The `auro-banner` element with the `billboard` property features a single configuration using the `displayImage`, `contentImage`, `description`, `action` and `disclaimer` slots for structured content placement.

### Background image slot

The background image slot is configured to work with the HTML [picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) element.

```html
<picture slot="displayImage">
  <source srcset="https://picsum.photos/id/430/1024/600" media="(min-width: 736px)">
  <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
  <source srcset="https://picsum.photos/id/430/320/1200" media="(min-width: 320px)">
  <img src="https://picsum.photos/id/430/225/550" alt="" />
</picture>
```

This allows the editor the upmost in image flexibility for cropped images placed at different breakpoints. A slotted `img` element is the default image shown when less than the first defined breakpoint.

<div class="exampleWrapper">
  <auro-banner billboard>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/430/1024/600" media="(min-width: 736px)">
      <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
      <source srcset="https://picsum.photos/id/430/320/1200" media="(min-width: 320px)">
      <img src="https://picsum.photos/id/430/225/550" alt="" />
    </picture>
    <img
      slot="contentImage"
      src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert 0"/>
    <p slot="description">
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
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
<auro-banner billboard>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/430/1024/600" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/430/320/1200" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/430/225/550" alt="" />
  </picture>
  <img
    slot="contentImage"
    src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
    alt="Random insert 0"/>
  <p slot="description">
    We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
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

## Hero

The following example illustrates a `auro-banner` custom element with the `hero` template style. This template configuration also supports the `slim` and `onDark` attributes. This example also illustrates the use of the `prefix` slot.

Notice for the `displayImage` slot, this example is using a single `img` element.

```html
<img src="https://picsum.photos/id/10/550/550" alt="" slot="displayImage" />
```

The `picture` element could be used if necessary.

<div class="exampleWrapper">
  <auro-banner hero>
    <img src="https://picsum.photos/id/10/550/550" alt="" slot="displayImage" />
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
  <img src="https://picsum.photos/id/10/550/550" alt="" slot="displayImage" />
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

## Marquee

The following example illustrates a `auro-banner` custom element with the `marquee` template style. This template configuration also supports the `slim` and `onDark` attributes.

Notice for the `displayImage` slot, this example is using a single `img` element.

<div class="exampleWrapper">
  <auro-banner marquee>
    <img src="https://picsum.photos/id/82/550/460" alt="" slot="displayImage" />
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
  <img src="https://picsum.photos/id/82/450/460" alt="" slot="displayImage" />
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

## Marquee solid

The following example illustrates a `auro-banner` custom element with the `marquee solid` template style. With this configuration, `onDark` is implied.

<div class="exampleWrapper">
  <auro-banner marquee solid slim>
    <img src="https://picsum.photos/id/1015/550/400" alt="" slot="displayImage" />
    <auro-alaska official ondark style="width: 192px" slot="contentImage"></auro-alaska>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <auro-hyperlink
      cta
      secondary
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
<auro-banner marquee solid slim>
  <img src="https://picsum.photos/id/1015/550/460" alt="" slot="displayImage" />
  <auro-alaska official ondark style="width: 192px" slot="contentImage"></auro-alaska>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <auro-hyperlink
    cta
    secondary
    ondark
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
</auro-accordion>

## Slim / alignRight / onDark

The following example illustrates a series of additional API options available to the `auro-banner` element. In this example, this shows how a user can augment the `billboard` theme of the `auro-banner`. Also notice the use of the `title` slot versus the `image` slot in the previous example.

For the call-to-action button, see in the example code that it is required to set the `onDark` attribute on the `auro-hyperlink` element itself. This is **not** controlled by the `auro-banner` element.

<div class="exampleWrapper">
  <auro-banner billboard slim alignRight onDark>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/120/1024/600" media="(min-width: 736px)">
      <source srcset="https://picsum.photos/id/120/736/1400" media="(min-width: 375px)">
      <source srcset="https://picsum.photos/id/120/320/1200" media="(min-width: 320px)">
      <img src="https://picsum.photos/id/120/225/550" alt="" />
    </picture>
    <span slot="title">Car Rental</span>
    <p slot="description">
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
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
<auro-banner billboard slim alignRight onDark>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/120/1024/600" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/120/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/120/320/1200" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/120/225/550" alt="" />
  </picture>
  <span slot="title">Car Rental</span>
  <p slot="description">
    We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
  </p>
  <auro-hyperlink
    cta
    secondary
    ondark
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
</auro-accordion>
