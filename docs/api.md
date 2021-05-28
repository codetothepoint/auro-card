# auro-banner

The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.

## Properties

| Property       | Attribute      | Type      | Default | Description                                      |
|----------------|----------------|-----------|---------|--------------------------------------------------|
| `prefersLeft`  | `prefersLeft`  | `Boolean` | false   | The left column will move to the top at the lower breakpoint |
| `prefersRight` | `prefersRight` | `Boolean` | false   | The right column will move to the top at the lower breakpoint.  If both or neither are set, `prefersRight` is the default. |
| `ratio`        | `ratio`        | `String`  | "1:1"   | in the format 'X:Y' where 'X' and 'Y' are two integers. |

## Slots

| Name      | Description                   |
|-----------|-------------------------------|
| `left`    | Content in the left column.   |
| `overlay` | Content in the front overlay. |
| `right`   | Content in the right column.  |


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
