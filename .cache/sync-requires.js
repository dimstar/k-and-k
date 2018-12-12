// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/kylemagee/Documents/webapps/kyleandkate.love/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kylemagee/Documents/webapps/kyleandkate.love/src/pages/index.js")),
  "component---src-pages-our-story-js": preferDefault(require("/Users/kylemagee/Documents/webapps/kyleandkate.love/src/pages/our-story.js")),
  "component---src-pages-registry-js": preferDefault(require("/Users/kylemagee/Documents/webapps/kyleandkate.love/src/pages/registry.js"))
}

