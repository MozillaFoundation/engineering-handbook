---
layout: grid
categories: handbook
---

# Low Bandwidth

Many of our users are either limited by slow connections or limited data plans (or both). We need to optimize our apps to use as little bandwidth as possible. In addition to data constrained users, this benefits all users by ensuring a speedy, responsive experience.

## Visual design guidelines

When designing for low bandwidth users, it's best to rely as little as possible on non-vector imagery. Where possible, pure CSS solutions should be favored as they should be lighter weight and will reduce additional HTTP requests.

When vector illustration can't reasonably be implemented with CSS, it should be exported as a SVG file. If the target client can't support SVG, then an optimized PNG can be used.

## Image optimization

When using image files, be sure to use the format appropriate to the contents of the image.

For photographic imagery (ie: images with a high color pallette) the JPEG format should be used. Experiment with the compression level to try and limit the filesize. A quality of 6-8 is a good starting point.

For images with a low color pallette, where SVG isn't an option, you should use a PNG. Once your PNG is created it should also be run through a PNG crusher to further reduce the size.

For OSX two good tools for PNG optimization are ImageOptim and ImageAlpha. You can (and should) do image optimization as part of your build process.

## Code minification

All code assets should be minified and concatenated for final deployment. JS should be concatenated and run through Uglify to ensure the smallest possible filesize and the fewest necessary HTTP requests by the end user.

## Lazy loading

Try to leverage a lazy loading where possible. If content isn't visible when the page or view is first rendered then it can be load deferred until a user action requires it to be shown. A common example of this is gallery views where many thumbnails are displayed in a list. You can measure the viewport to only load the thumbnails that are currently constrained by the viewport.

### Additional Resources

- [Browser Diet](http://browserdiet.com/en/)
