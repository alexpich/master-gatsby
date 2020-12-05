const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/alexpich/Desktop/Code/master-gatsby-scratch/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/alexpich/Desktop/Code/master-gatsby-scratch/gatsby/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/alexpich/Desktop/Code/master-gatsby-scratch/gatsby/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/alexpich/Desktop/Code/master-gatsby-scratch/gatsby/src/pages/index.js"))),
  "component---src-pages-order-js": hot(preferDefault(require("/Users/alexpich/Desktop/Code/master-gatsby-scratch/gatsby/src/pages/order.js"))),
  "component---src-pages-presets-js": hot(preferDefault(require("/Users/alexpich/Desktop/Code/master-gatsby-scratch/gatsby/src/pages/presets.js")))
}

