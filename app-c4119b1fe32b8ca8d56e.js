webpackJsonp([0xd2a57dc1d8840000],{"./.cache/api-runner-browser.js":function(e,t,o){"use strict";var n=[{plugin:o("./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js"),options:{plugins:[],trackingId:"UA-17658948-19"}}];e.exports=function(e,t,o){var s=n.map(function(o){if(o.plugin[e]){var n=o.plugin[e](t,o.options);return n}});return s=s.filter(function(e){return"undefined"!=typeof e}),s.length>0?s:o?[o]:[]}},"./.cache/async-requires.js":function(e,t,o){"use strict";t.components={"page-component---src-pages-404-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js"),"page-component---src-pages-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js")},t.json={"404.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),"index.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),"404-html.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json")},t.layouts={index:o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o("./node_modules/babel-runtime/helpers/extends.js"),a=n(s),r=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),u=n(r),i=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),d=n(i),c=o("./node_modules/babel-runtime/helpers/createClass.js"),l=n(c),f=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=n(f),m=o("./node_modules/babel-runtime/helpers/inherits.js"),h=n(m),g=o("./node_modules/react/react.js"),b=n(g),j=o("./.cache/loader.js"),_=n(j),y=o("./.cache/emitter.js"),v=n(y),x=function(e){function t(e){(0,d.default)(this,t);var o=(0,p.default)(this,(t.__proto__||(0,u.default)(t)).call(this));return o.state={location:e.location,pageResources:_.default.getResourcesForPathname(e.location.pathname)},o}return(0,h.default)(t,e),(0,l.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var o=_.default.getResourcesForPathname(e.location.pathname);o?this.setState({location:e.location,pageResources:o}):_.default.getResourcesForPathname(e.location.pathname,function(o){t.setState({location:e.location,pageResources:o})})}}},{key:"componentDidMount",value:function(){var e=this;v.default.on("onPostLoadPageResources",function(t){t.page.path===_.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath))}},{key:"render",value:function(){return this.state.pageResources?(0,g.createElement)(this.state.pageResources.component,(0,a.default)({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null}}]),t}(b.default.Component);t.default=x},"./.cache/emitter.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=o("./node_modules/mitt/dist/mitt.js"),a=n(s),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,t,o){"use strict";var n=o("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var a=o.slice(t.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),s[a])return s[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,n.matchPath)(a,{path:e.path})||(0,n.matchPath)(a,{path:e.matchPath}))return r=e,s[a]=e,!0}else if((0,n.matchPath)(a,{path:e.path,exact:!0}))return r=e,s[a]=e,!0;return!1}),r}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xa2868bfb69fc9000,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xe70826b53c045000,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x81b8806e42603000,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./.cache/loader.js":function(e,t,o){(function(t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=o("./node_modules/babel-runtime/core-js/get-iterator.js"),a=n(s),r=o("./.cache/find-page.js"),u=n(r),i=o("./.cache/emitter.js"),d=n(i),c=void 0,l={},f={},p={},m={},h={},g=[],b=[],j={},_=[],y={},v=function(e){return e&&e.default||e},x=void 0,R=!0;x=o("./.cache/prefetcher.js")({getNextQueuedResources:function(){return _.slice(-1)[0]},createResourceDownload:function(e){S(e,function(){_=_.filter(function(t){return t!==e}),x.onResourcedFinished(e)})}}),d.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),d.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var w=function(e,t){return y[e]>y[t]?1:y[e]<y[t]?-1:0},P=function(e,t){return j[e]>j[t]?1:j[e]<j[t]?-1:0},S=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[e])t.nextTick(function(){o(null,m[e])});else{var n="page-c"===e.slice(0,6)?f.components[e]:f.json[e];n(function(t,n){m[e]=n,o(t,n)})}},E=function(e,o){h[e]?t.nextTick(function(){o(null,h[e])}):S(e,function(t,n){if(t)o(t);else{var s=v(n());h[e]=s,o(t,s)}})},k=1,D={empty:function(){b=[],j={},y={},_=[],g=[]},addPagesArray:function(e){g=e;var t="";c=(0,u.default)(e,t)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return b.pop()},enqueue:function(e){if(!g.some(function(t){return t.path===e}))return!1;var t=1/k;k+=1,j[e]?j[e]+=1:j[e]=1,D.has(e)||b.unshift(e),b.sort(P);var o=c(e);return o.jsonName&&(y[o.jsonName]?y[o.jsonName]+=1+t:y[o.jsonName]=1+t,_.indexOf(o.jsonName)!==-1||m[o.jsonName]||_.unshift(o.jsonName)),o.componentChunkName&&(y[o.componentChunkName]?y[o.componentChunkName]+=1+t:y[o.componentChunkName]=1+t,_.indexOf(o.componentChunkName)!==-1||m[o.jsonName]||_.unshift(o.componentChunkName)),_.sort(w),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:_,resourcesCount:y}},getPages:function(){return{pathArray:b,pathCount:j}},getPage:function(e){return c(e)},has:function(e){return b.some(function(t){return t===e})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){var t=!0,o=!1,n=void 0;try{for(var s,r=(0,a.default)(e);!(t=(s=r.next()).done);t=!0){var u=s.value;u.unregister()}}catch(e){o=!0,n=e}finally{try{!t&&r.return&&r.return()}finally{if(o)throw n}}window.location.reload()})),R=!1;var n=c(e);if(!n)return void console.log("A page wasn't found for \""+e+'"');if(e=n.path,p[e])return t.nextTick(function(){o(p[e]),d.default.emit("onPostLoadPageResources",{page:n,pageResources:p[e]})}),p[e];d.default.emit("onPreLoadPageResources",{path:e});var s=void 0,r=void 0,u=function(){if(s&&r){p[e]={component:s,json:r,page:n};var t={component:s,json:r,page:n};o(t),d.default.emit("onPostLoadPageResources",{page:n,pageResources:t})}};return E(n.componentChunkName,function(e,t){e&&console.log("Loading the component for "+n.path+" failed"),s=t,u()}),void E(n.jsonName,function(e,t){e&&console.log("Loading the JSON for "+n.path+" failed"),r=t,u()})},peek:function(e){return b.slice(-1)[0]},length:function(){return b.length},indexOf:function(e){return b.length-b.indexOf(e)-1}};e.exports=D}).call(t,o("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,t){e.exports=[{componentChunkName:"page-component---src-pages-404-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,o=e.createResourceDownload,n=[],s=[],a=function(){var e=t();e&&(s.push(e),o(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":n.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":n=n.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===n.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:n,resourcesDownloading:s}},empty:function(){n=[],s=[]}}}},0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){window.___history||(window.___history=e,e.listen(function(e,t){(0,d.default)("onRouteUpdate",{location:e,action:t})}))}function a(e,t){var o=t.location.pathname,n=(0,d.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(n.length>0)return n[0];if(e){var s=e.location.pathname;if(s===o)return!1}return!0}var r=o("./node_modules/babel-runtime/helpers/extends.js"),u=n(r),i=o("./.cache/api-runner-browser.js"),d=n(i),c=o("./node_modules/react/react.js"),l=n(c),f=o("./node_modules/react-dom/index.js"),p=n(f),m=o("./node_modules/react-router-dom/index.js"),h=o("./node_modules/react-router-scroll/lib/index.js"),g=o("./node_modules/history/createBrowserHistory.js"),b=n(g),j=o("./.cache/emitter.js"),_=n(j),y=o("./.cache/pages.json"),v=n(y),x=o("./.cache/component-renderer.js"),R=n(x),w=o("./.cache/async-requires.js"),P=n(w),S=o("./.cache/loader.js"),E=n(S);window.___emitter=_.default,E.default.addPagesArray(v.default),E.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=E.default,window.matchPath=m.matchPath,(0,d.default)("onClientEntry"),(0,d.default)("registerServiceWorker").length>0&&o("./.cache/register-service-worker.js");var k=function(e){function t(n){n.page.path===E.default.getPage(e).path&&(_.default.off("onPostLoadPageResources",t),clearTimeout(o),window.___history.push(e))}if(window.location.pathname!==e){var o=setTimeout(function(){_.default.off("onPostLoadPageResources",t),_.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);E.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):_.default.on("onPostLoadPageResources",t)}};window.___navigateTo=k;var D=(0,b.default)();(0,d.default)("onRouteUpdate",{location:D.location,action:D.action});var N=(0,d.default)("replaceRouterComponent",{history:D})[0],C=function(e){var t=e.children;return l.default.createElement(m.BrowserRouter,{history:D},t)},U=function(e){P.default.layouts.index?P.default.layouts.index(function(t,o){var n=o();e(n)}):e(function(e){return l.default.createElement("div",null,e.children())})};U(function(e){E.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,c.createElement)(N?N:C,null,(0,c.createElement)(h.ScrollContext,{shouldUpdateScroll:a},(0,c.createElement)((0,m.withRouter)(e),{children:function(e){return(0,c.createElement)(m.Route,{render:function(t){s(t.history);var o=e?e:t;return E.default.getPage(o.location.pathname)?(0,c.createElement)(R.default,(0,u.default)({},o)):(0,c.createElement)(R.default,{location:{pathname:"/404.html"}})}})}})))},o=(0,d.default)("wrapRootComponent",{Root:t},t)[0];p.default.render(l.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,d.default)("onInitialClientRender")})})})},"./.cache/register-service-worker.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=o("./.cache/emitter.js"),a=n(s),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js":function(e,t,o){"use strict";t.onRouteUpdate=function(e){var t=e.location;"function"==typeof ga&&(ga("set","page",(t||{}).pathname),ga("send","pageview"))}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,t,o){"use strict";function n(){function e(e){var t=n.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,n=document.querySelector("head"),s=o.e,a=o.s;o.e=function(n,r){var u=!1,i=!0,d=function(e){r&&(r(o,e),r=null)};return!a&&t&&t[n]?void d(!0):(s(n,function(){u||(u=!0,i?setTimeout(function(){d()}):d())}),void(u||(i=!1,e(function(){u||(u=!0,a?a[n]=void 0:(t||(t={}),t[n]=!0),d(!0))}))))}}n()},"./node_modules/mitt/dist/mitt.js":function(e,t){function o(e){return e=e||Object.create(null),{on:function(t,o){(e[t]||(e[t]=[])).push(o)},off:function(t,o){e[t]&&e[t].splice(e[t].indexOf(o)>>>0,1)},emit:function(t,o){(e[t]||[]).map(function(e){e(o)}),(e["*"]||[]).map(function(e){e(t,o)})}}}e.exports=o},"./node_modules/process/browser.js":function(e,t){function o(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function s(e){if(c===setTimeout)return setTimeout(e,0);if((c===o||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function a(e){if(l===clearTimeout)return clearTimeout(e);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function r(){h&&p&&(h=!1,p.length?m=p.concat(m):g=-1,m.length&&u())}function u(){if(!h){var e=s(r);h=!0;for(var t=m.length;t;){for(p=m,m=[];++g<t;)p&&p[g].run();g=-1,t=m.length}p=null,h=!1,a(e)}}function i(e,t){this.fun=e,this.array=t}function d(){}var c,l,f=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:o}catch(e){c=o}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(e){l=n}}();var p,m=[],h=!1,g=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o];m.push(new i(e,t)),1!==m.length||h||s(u)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=d,f.addListener=d,f.once=d,f.off=d,f.removeListener=d,f.removeAllListeners=d,f.emit=d,f.prependListener=d,f.prependOnceListener=d,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xef47e37750d80000,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-preset-env/lib/index.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-preset-stage-0/lib/index.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x7107efd8fd846000,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-preset-env/lib/index.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-preset-stage-0/lib/index.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x37beb808d31a9600,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-preset-env/lib/index.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-preset-stage-0/lib/index.js","/Users/tatelucas/Sites/D-dotdash.co/dotdash/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}}});
//# sourceMappingURL=app-c4119b1fe32b8ca8d56e.js.map