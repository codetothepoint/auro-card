# Card and Banner

`<auro-card>` and `auro-banner` are [HTML custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
for the purpose of providing a flexible way to convey a summary of information.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/workflow/status/AlaskaAirlines/auro-card/Test%20and%20publish?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/auro-card/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/auro-card?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/auro-card)
[![License](https://img.shields.io/npm/l/@alaskaairux/auro-card?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/auro-card
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what
type of dependency you should use, consider reading this answer:
[stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies).

## WCSS dependency

The `auro-card` and the `auro-banner` have an opinion about use of `img` inside the `picture` element. Please [the WCSS docs](https://alaskaairlines.github.io/WebCoreStyleSheets/#core-css-#{$sym}#{$prefix}picture#{$scope}) for additional information for how to install and manage within your project.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are
[not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties
are pre-generated and included with npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties,
legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component using `<auro-card>` component.

```javascript
import "@alaskaairux/auro-card";
import "@alaskaairux/auro-card/dist/auro-banner";
```

```html
<auro-card>
  <span slot="title">
    Pri dicat graece abhorreant
  </span>
  <img
    slot="image"
    src="https://picsum.photos/304?random=0"
    alt=""/>
  <p slot="description">
    Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
  </p>
  <auro-hyperlink
    nav
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
  <p slot="disclaimer">
    * Errem tempor eligendi cu eos
  </p>
</auro-card>
```

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
    Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
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

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.
Two bundles are available -- `auro-card__bundled.js` for modern browsers and `auro-card__bundled.es5.js` for legacy
browsers (including IE11).

For `auro-banner` see `auro-banner__bundled.js` for modern browsers and `auro-banner__bundled.es5.js` for legacy
browsers (including IE11)

Since the legacy bundle includes many polyfills that are not needed by modern browsers, we recommend you load these
bundles using [differential serving](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) so
that the browser only loads the bundle it needs. To accomplish this, the script tag for the modern bundle should have
`type="module"` and the script tag for the legacy bundle should have the `nomodule` attribute. See the example below.

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any
MAJOR releases, use at your own risk.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@alaskaairux/auro-card@latest/dist/auro-card__bundled.js" type="module"></script>
<script src="https://unpkg.com/@alaskaairux/auro-card@latest/dist/auro-card__bundled.es5.js" nomodule></script>

<script src="https://unpkg.com/@alaskaairux/auro-card@latest/dist/auro-banner__bundled.js" type="module"></script>
<script src="https://unpkg.com/@alaskaairux/auro-card@latest/dist/auro-banner__bundled.es5.js" nomodule></script>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project
prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing)
for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to
open two different shell sessions. One is for the **npm tasks**, the second is to run the **server**.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:8000](http://localhost:8000/)

### Testing

Automated tests are required for every Auro component. See `./test/auro-card.test.js` for the tests for this component.
Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to
commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

### Demo deployment

To deploy a demo version of the component for review, run `npm run demo:build` to create a `./build` directory that can
be pushed to any static server.
