const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("E:\\JAMstack\\bejamas\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("E:\\JAMstack\\bejamas\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("E:\\JAMstack\\bejamas\\src\\pages\\about.js"))),
  "component---src-pages-careers-js": hot(preferDefault(require("E:\\JAMstack\\bejamas\\src\\pages\\careers.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("E:\\JAMstack\\bejamas\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("E:\\JAMstack\\bejamas\\src\\pages\\index.js"))),
  "component---src-pages-jamstack-services-js": hot(preferDefault(require("E:\\JAMstack\\bejamas\\src\\pages\\jamstackServices.js"))),
  "component---src-pages-pwa-services-js": hot(preferDefault(require("E:\\JAMstack\\bejamas\\src\\pages\\pwaServices.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("E:\\JAMstack\\bejamas\\src\\pages\\services.js")))
}

