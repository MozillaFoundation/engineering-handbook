---
layout: grid
categories: handbook
---

## Process
As much of our future audience may have only experienced the web through their
mobile devices, anything user-facing should be mobile from the first speck of
an idea onward. This means getting stakeholders and designers on board with a
mobile-first attitude, so we don’t end up with desktop content just squished
down into a mobile box.

## Devices

There are hundreds upon hundreds of device sizes on the market, and it is
unrealistic to try to target each of them. For that reason, we have devised a
matrix of baseline and ideal devices that should be able to run and interact
with all of our products and sites.


|     OS     |      Baseline Version/Device       | Baseline Screen | Baseline ppi |      High-end Version/Device        | High-End Screen | High-end ppi |
|------------|------------------------------------|-----------------|--------------|-------------------------------------|-----------------|--------------|
| Firefox OS |             v1.3/Tarako            |  320px × 480px  |              |             v2.1/Flame              |  480px × 854px  |      163     |
|   Android  |          v4.2/Huawei Y600          |  480px × 854px  |     196      |            v4.4/Nexus 4             |  768px × 1280px |      318     |
|    iOS     | v7.x/iPhone 5 & iPod Touch (5 Gen) | 640px × 1136px  |     326      | 8.x/iPhone 6 & iPod Touch (6th Gen) |  640px × 1136px |      326     |

*note: we need to do some research and update the “screen” column above to a
“viewport” column*

Every engineer should have a FFOS and Android device to test on. Contact your
manager if you do not have access to either to test.

## Details

Always use https to avoid CORS-breaking cell tower proxies.

### Styles

Any style not surrounded by a media query should be explicitly for small screen
mobile viewports. Take advantage of cascading styles and build larger viewports
on top of that mobile base with `@media (min-width: …)`. DON’T use
`@media (max-width: …)`.

CSS3 offers a wealth of new styles and interactions. This can hopefully
eliminate the need for some images and heavy-handed javascript. Utilise new CSS
features as much as possible, while checking <http://caniuse.com/> for
compatibility with our target devices and browsers.

Reading on a small screen can be very difficult. Make sure font sizes are always
large enough to read at a reasonable distance on mobile viewports. 16px is
generally considered safe, but take advantage of user testing when available to
confirm.

### Touch Interactions

- wip

## Further Reading
- Data plans are expensive. Read everything in the low bandwidth chapter.
- Sometimes data is unavailable. Read everything in the no bandwidth chapter.
