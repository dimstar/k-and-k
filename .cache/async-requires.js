// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/kylemagee/Documents/webapps/kyleandkate.love/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/kylemagee/Documents/webapps/kyleandkate.love/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-our-story-js": () => import("/Users/kylemagee/Documents/webapps/kyleandkate.love/src/pages/our-story.js" /* webpackChunkName: "component---src-pages-our-story-js" */),
  "component---src-pages-registry-js": () => import("/Users/kylemagee/Documents/webapps/kyleandkate.love/src/pages/registry.js" /* webpackChunkName: "component---src-pages-registry-js" */)
}

exports.data = () => import("/Users/kylemagee/Documents/webapps/kyleandkate.love/.cache/data.json")

