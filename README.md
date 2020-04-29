# KGG Website 2.0

This is the new KGG website.

## Major Features

- Better content management with Netlify CMS
- Dark mode

## Netlify CMS

No longer is coding skill required to update or maintain the website's content. If you have a ~~brain~~ computer input device and the ability to use it, you're set. The access point is at [www.kgg.wtf/admin].

## Dark mode

nuff said

## Developing Info

#### Framework 
The site uses Nextjs, a cool React framework, that does cool stuff. I think one main feature is server side rendering, which is generally faster than client side. Unfortunately, I'm not entirely sure how it works, especially with MaterialUi. I copied some code for that in `public/admin/_document.js` and `public/admin/_app.js` from an official example, so I hope it works. Also, the dark/light mode option is all client side, which makes it a little messy.

#### Styling
We're also now using Material Ui for faster, more responsive, and more beautiful styling. I'm using the MaterialUi styling solution, with _makeStyles_ and _ThemeProvider_, which makes the dark mode styling easier. One thing, the _react-responsive-carousel_ library for the main page slideshow required a global css file imported in `public/admin/_app.js`, which is not perfect, but it's fine.

#### Hosting
Of, course we got Netlify CMS, but the site is also hosted on Netlify. Thats not a requirement, but I wasn't sure at the time, and there's no real reason to change it now. It's important to know that Netlify pushes new builds into production based on the specified branch on Github, which is currently `master`. So if a bad build is pushed into master, the site will crash. Eventually, this should change
to a `production` branch.

## Notes

#### Netlify CMS Collection Specific Media Folders

Setting this up for slideshows was a pain, and I couldn't really do what I want. All I wanted to have media saved in `public/img/slideshow` for one specific slideshow file. I couldn't make it work with file collections (you might notice 30 "test" commits), so now there is a lonely "slideshow" folder collection that will only have one file. This also requires the **_BETA_** version of the CMS, which I wish I figured out earlier.

#### Animated Menu Icon

Yeah, I know it's cool, I made it myself. It's 3 divs with hardcoded animations, so yeah. Perhaps, it would be better to use pseudo elements, but that gets funky when working with CSS in js. PS, W3 schools has an incorrect tutorial for this. In case you're wondering, the css transform property is executed right to left and relative to the objects original origin.
