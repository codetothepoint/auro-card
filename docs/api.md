# auro-banner

The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.

## Attributes

| Attribute    | Type      | Description                                      |
|--------------|-----------|--------------------------------------------------|
| `alignLeft`  | `Boolean` | to be used when we want the text aligned to the left |
| `alignRight` | `Boolean` | to be used when we want the text aligned to the right |
| `billboard`  | `Boolean` | to be used for billboard style configuration     |
| `onDark`     | `Boolean` | to be used when the background image or color is dark and changes the text and cta color |
| `slim`       | `Boolean` | to be used when we want a slimmer padding to the default banner |
| `solid`      | `Boolean` | to be used when you want a solid color as opposed to a transparent background |

## Properties

| Property        | Attribute       | Type      | Description                                      |
|-----------------|-----------------|-----------|--------------------------------------------------|
| `hero`          | `hero`          | `Boolean` | to be used for hero style configuration          |
| `marquee`       | `marquee`       | `Boolean` | to be used for marquee style configuration       |
| `roundedBorder` | `roundedBorder` | `Boolean` | to be used for roundedBorder style configuration |

## Slots

| Name           | Description                                     |
|----------------|-------------------------------------------------|
| `action`       | call to action                                  |
| `contentImage` | image placement                                 |
| `description`  | main body of content                            |
| `disclaimer`   | disclaimer copy                                 |
| `displayImage` | placement for `<picture />` or `<img>` elements |
| `prefix`       | placement for smaller text above title          |
| `title`        | placement for header                            |


# auro-card

The auro-card element provides users a flexible way to convey a summary of information.

## Slots

| Name          | Description          |
|---------------|----------------------|
| `cta`         | call to action       |
| `description` | main body of copy    |
| `disclaimer`  | disclaimer copy      |
| `image`       | card image placement |
| `title`       | card heading         |
