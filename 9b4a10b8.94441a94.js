(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=(n(0),n(198));const s={title:"Install",sidebar_label:"Install"},a={unversionedId:"introduction/install",id:"introduction/install",isDocsHomePage:!1,title:"Install",description:"@nestjs-query/core",source:"@site/docs/introduction/install.md",slug:"/introduction/install",permalink:"/nestjs-query/docs/introduction/install",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/introduction/install.md",version:"current",sidebar_label:"Install",sidebar:"docs",previous:{title:"Getting Started",permalink:"/nestjs-query/docs/introduction/getting-started"},next:{title:"Example",permalink:"/nestjs-query/docs/introduction/example"}},c=[{value:"@nestjs-query/core",id:"nestjs-querycore",children:[]},{value:"@nestjs-query/query-graphql",id:"nestjs-queryquery-graphql",children:[]},{value:"@nestjs-query/query-typeorm",id:"nestjs-queryquery-typeorm",children:[]},{value:"@nestjs-query/query-sequelize",id:"nestjs-queryquery-sequelize",children:[]},{value:"@nestjs-query/query-mongoose",id:"nestjs-queryquery-mongoose",children:[]}],i={rightToc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"nestjs-querycore"},"@nestjs-query/core"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i @nestjs-query/core @nestjs/common class-transformer\n")),Object(o.b)("h2",{id:"nestjs-queryquery-graphql"},"@nestjs-query/query-graphql"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i @nestjs-query/query-graphql @nestjs/common @nestjs/graphql graphql graphql-relay graphql-subscriptions class-transformer class-validator dataloader\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," has opted for peer dependencies to follow nest conventions and to prevent duplicate installations of packages."),Object(o.b)("h2",{id:"nestjs-queryquery-typeorm"},"@nestjs-query/query-typeorm"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i @nestjs-query/query-typeorm @nestjs/common @nestjs/typeorm class-transformer typeorm\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-typeorm")," has opted for peer dependencies to follow nest conventions and to prevent duplicate installations of packages."),Object(o.b)("h2",{id:"nestjs-queryquery-sequelize"},"@nestjs-query/query-sequelize"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i @nestjs-query/query-sequelize @nestjs/common @nestjs/sequelize sequelize sequelize-typescript\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-sequelize")," has opted for peer dependencies to follow nest conventions and to prevent duplicate installations of packages."),Object(o.b)("h2",{id:"nestjs-queryquery-mongoose"},"@nestjs-query/query-mongoose"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i @nestjs-query/query-mongoose @nestjs/common @nestjs/mongoose mongoose mongodb\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-mongoose")," has opted for peer dependencies to follow nest conventions and to prevent duplicate installations of packages."))}l.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,b=p["".concat(a,".").concat(y)]||p[y]||d[y]||s;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);