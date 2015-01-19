## Website Performance Optimization portfolio project

### Developer notes

### General changes

All CSS content has been inlined to remove render blocking.
All pages satisfy the desired 90+ page speed insight scores for desktop and mobile.
All images have been optimized on a one by one basis considering resolution, size on page, and transparency.
Unused CSS has been removed from the live versions of the files (using grunt uncss).
Grunt is used to minimize and uglify css, html, and javascript.  However, use in the html files currently requires a bit of hand-tweaking, something that would not be desireable in a production enviornment.  There's more to master here.

The site can be viewed on github at:

http://nbeaulieu.github.io/frontend-nanodegree-mobile-portfolio/
http://nbeaulieu.github.io/frontend-nanodegree-mobile-portfolio/index.min.html

http://nbeaulieu.github.io/frontend-nanodegree-mobile-portfolio/project-2048.html
http://nbeaulieu.github.io/frontend-nanodegree-mobile-portfolio/project-2048.min.html

http://nbeaulieu.github.io/frontend-nanodegree-mobile-portfolio/project-webperf.html
http://nbeaulieu.github.io/frontend-nanodegree-mobile-portfolio/project-webperf.min.html

http://nbeaulieu.github.io/frontend-nanodegree-mobile-portfolio/project-mobile.html
http://nbeaulieu.github.io/frontend-nanodegree-mobile-portfolio/project-mobile.min.html

### Pizza Page:

The page achieves the 60 fps benchmark.  To accomplish this, I made a number of optimizations including (but not comprehensive, necessarily): optimizing the flow and relfow of the pizza mover javascript, debouncing the update by requesting an update via the browser's requestAnimationFrame instead of on every scroll, creating a more appropriate max number of scrollable pizzas since so many weren't visible, changing the CSS to hide the scrollable pizzas on overflow-y, and optimizing the page images based on resolution and transparency.

Page Speed Insight scores: 90+ for mobile and desktop.  The changes can be viewed in the minimized versions of the HTML (pizza.min.html) and Javascript (main.min.js) files are used.  I've left commented links in the file for review.  However, these versions are not live since readability for the reviewer goes way down!  To see this live, please analyze the pizza.min.html version of the site.

The site can be viewed on github at:
http://nbeaulieu.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html
http://nbeaulieu.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.min.html

### Original notes for project completion

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
