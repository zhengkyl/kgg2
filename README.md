# Archived KGG Website Mockup
https://kgg-web.netlify.app/ 

# Why this is Archived
I ultimately decided that this was not the direction to go for a KGG website. I spent a lot of time and made a lot of mistakes. There are a lot of cool things that I got to work on this project. I am especially proud with how the Netlify CMS is integrated with the news section to automatically update the featured posts. The animated menu button is very nice.

This entire project just kind of grew out of scope from what it should have been, a **simple**, **static**, and **aesthetically pleasing** website made as a meme. Nextjs was the wrong choice. The level of integration with the CMS I strived for was wasted effort. No one was going to make posts. Adding a toggleable dark mode just made it uglier half the time. The social and store pages could never be more than a mockup. Lessons learned.

# Old stuff

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

## Weird Miscellaneous Notes

#### News Post Filename vs Path

For aesthitic reasons, I have news posts links in the `news/this-is-title_1969-04-20` format. I refer to this as the *normal slug*. You may notice that the actual files are stored as `news/1969-04-20_this-is-title`. I call this the *reverse slug*. I liked the first version better in the URL, but the second version is must better for storing and loading since it keeps the posts in chronological order. Therefore, whenever working with the *slugs* for news posts, make sure it is in the correct form. 

To go from data last to date first, use ``${slug.slice(-10)}_${slug.slice(0,-11)}`` where slug is the normal slug.

To go from data first to date last, use ``${reverseSlug.slice(11)}_${reverseSlug.slice(0,10)}``, where reverseSlug is the reverse slug.

#### News Article Pages Styling

The body of articles aren't styled correctly. The markdown is rendered directly as html, so no responsive fonts or custom styling. I attemped to do something using the *interweave* package, but could not get it to work. It might be because it requires a polyfill to work for server side rendering. This is also why I added global img styling, because I couldn't styling anything from the markdown.

#### Netlify CMS Collection Specific Media Folders

Setting this up for slideshows was a pain, and I couldn't really do what I want. All I wanted to have media saved in `public/img/slideshow` for one specific slideshow file. I couldn't make it work with file collections (you might notice 30 "test" commits), so now there is a lonely "slideshow" folder collection that will only have one file. This also requires the **_BETA_** version of the CMS, which I wish I figured out earlier.

#### Animated Menu Icon

Yeah, I know it's cool, I made it myself. It's 3 divs with hardcoded animations, so yeah. Perhaps, it would be better to use pseudo elements, but that gets funky. PS, W3 schools has an incorrect tutorial for this. In case you're wondering, the css transform property is executed right to left and relative to the objects original origin.
