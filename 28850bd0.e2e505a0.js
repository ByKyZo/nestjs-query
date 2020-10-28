(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{198:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(g,l(l({ref:t},s),{},{components:r})):a.a.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=(r(0),r(198));const o={title:"Initial Release",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/doug-martin",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["nestjs","typeorm","graphql"]},i={permalink:"/nestjs-query/blog/2020/01/26/Initial Release",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/blog/blog/2020-01-26-Initial Release.md",source:"@site/blog/2020-01-26-Initial Release.md",description:"Initial Release of nestjs-query.",date:"2020-01-26T00:00:00.000Z",tags:[{label:"nestjs",permalink:"/nestjs-query/blog/tags/nestjs"},{label:"typeorm",permalink:"/nestjs-query/blog/tags/typeorm"},{label:"graphql",permalink:"/nestjs-query/blog/tags/graphql"}],title:"Initial Release",readingTime:.415,truncated:!1,prevItem:{title:"v0.0.4",permalink:"/nestjs-query/blog/2020/01/27/v0.0.4"}},l=[],c={rightToc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Initial Release of ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query")," is collection of packages to make crud for ",Object(a.b)("inlineCode",{parentName:"p"},"graphql")," (and potentially other transports) easier."),Object(a.b)("p",null,"This library is composed of three packages."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/core"}),Object(a.b)("inlineCode",{parentName:"a"},"@nestjs-query/core"))," - Defines all interfaces and utility types implemented by the other packages."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/graphql"}),Object(a.b)("inlineCode",{parentName:"a"},"@nestjs-query/query-graphql"))," - Package that provides the graphql resolver and decorators for crud endpoints."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/typeorm"}),Object(a.b)("inlineCode",{parentName:"a"},"@nestjs-query/query-typeorm"))," - Package that implements a Typeorm service that can be used by itself or with the graphql resolver provided by ",Object(a.b)("inlineCode",{parentName:"li"},"@nestjs-query/query-graphql"),".")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://doug-martin.github.io/nestjs-query/docs/introduction/getting-started"}),"To read more checkout the docs")))}s.isMDXComponent=!0}}]);