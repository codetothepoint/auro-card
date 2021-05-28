# Card

The `<auro-card>` element provides users a flexible way to convey a summary of information. The primary elements of a card include an image, and details.

The details are broken down into `title`, `top`, and `bottom`.

## Component use cases

Use the `<auro-card>` element to:

* grab the attention of a user
* direct your user to another resource for further information

## Do not...

Use `<auro-card>` as the primary source of information.

## Default element

The default `<auro-card>` element features a single configuration using the `title`, `top`, and `bottom` slots for structured content placement.

The card will expand to expand to fill the container it's in. The element will remain centered within the scope of a parent element.

<div class="exampleWrapper">
  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="top"
      src="https://picsum.photos/304?random=0"
      alt="Random insert 0"/>
    <div slot="bottom">
      <p>
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
      <p>
        * Errem tempor eligendi cu eos
      </p>
    </div>
  </auro-card>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card>
  <span slot="title">
    Pri dicat graece abhorreant
  </span>
  <img
    slot="top"
    src="https://picsum.photos/304?random=0"
    alt="Random insert 0"/>
  <div slot="bottom">
    <p>
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
    <p>
      * Errem tempor eligendi cu eos
    </p>
  </div>
</auro-card>
```

</auro-accordion>

## Fixed width and height

To set the height and width of the card instead of having it fill the container it's in, use the `height` and `width` properties.

<div class="exampleWrapper">
  <auro-card width="19rem" height="25rem">
    <img
      slot="top"
      src="https://picsum.photos/304/200?random=1"
      alt="Random insert 0"/>
    <div slot="bottom">
      <p>
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
      <p>
        * Errem tempor eligendi cu eos
      </p>
    </div>
  </auro-card>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card width="19rem" height="25rem">
  <img
    slot="top"
    src="https://picsum.photos/304/200?random=1"
    alt="Random insert 0"/>
  <div slot="bottom">
    <p>
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
    <p>
      * Errem tempor eligendi cu eos
    </p>
  </div>
</auro-card>
```

</auro-accordion>

## Adding in styles
Add in styles into the slot elements to style the content any way you want. The following is an example of text aligning to the left side of the card and dark blue text.

<style>
  .textContainer {
    text-align: left;
    color: darkblue;
  }
</style>

<div class="exampleWrapper">
  <auro-card width="19rem" height="36rem">
    <img
      slot="top"
      src="https://picsum.photos/304?random=2"
      alt="Random insert 0"/>
    <div class="textContainer" slot="bottom">
      <auro-header display="500">Pri dicat graece abhorreant</auro-header>
      <p>
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
      <p>
        * Errem tempor eligendi cu eos
      </p>
    </div>
  </auro-card>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<style>
  .textContainer {
    text-align: left;
    color: darkblue;
  }
</style>

<auro-card width="19rem" height="36rem">
  <img
    slot="top"
    src="https://picsum.photos/304?random=2"
    alt="Random insert 0"/>
  <div class="textContainer" slot="bottom">
    <auro-header display="500">Pri dicat graece abhorreant</auro-header>
    <p>
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
    <p>
      * Errem tempor eligendi cu eos
    </p>
  </div>
</auro-card>
```

</auro-accordion>

## Multi-option layout

When placing multiple `<auro-card>` elements within a single parent container, the following example illustrates using `flexbox` for layout support.

<style>
  @media screen and (min-width: 1024px) {
    .flexLayout {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<div class="exampleWrapper flexLayout">
  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="top"
      src="https://picsum.photos/304?random=3"
      alt="Random insert 0"/>
    <div slot="bottom">
      <p>
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
      <p>
        * Errem tempor eligendi cu eos
      </p>
    </div>
  </auro-card>

  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="top"
      src="https://picsum.photos/304?random=3"
      alt="Random insert 0"/>
    <div slot="bottom">
      <p>
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
      <p>
        * Errem tempor eligendi cu eos
      </p>
    </div>
  </auro-card>

  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="top"
      src="https://picsum.photos/304?random=3"
      alt="Random insert 0"/>
    <div slot="bottom">
      <p>
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
      <p>
        * Errem tempor eligendi cu eos
      </p>
    </div>
  </auro-card>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<style>
  @media screen and (min-width: 1024px) {
    .flexLayout {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<div class="flexLayout">
  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="top"
      src="https://picsum.photos/304?random=3"
      alt="Random insert 0"/>
    <div slot="bottom">
      <p>
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
      <p>
        * Errem tempor eligendi cu eos
      </p>
    </div>
  </auro-card>

  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="top"
      src="https://picsum.photos/304?random=3"
      alt="Random insert 0"/>
    <div slot="bottom">
      <p>
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
      <p>
        * Errem tempor eligendi cu eos
      </p>
    </div>
  </auro-card>

  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="top"
      src="https://picsum.photos/304?random=3"
      alt="Random insert 0"/>
    <div slot="bottom">
      <p>
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
      <p>
        * Errem tempor eligendi cu eos
      </p>
    </div>
  </auro-card>
</div>
```

</auro-accordion>
