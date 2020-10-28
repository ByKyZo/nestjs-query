(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(2),o=(n(0),n(198)),r=n(202),i=n(203);const l={title:"Relations"},s={unversionedId:"persistence/mongoose/relations",id:"persistence/mongoose/relations",isDocsHomePage:!1,title:"Relations",description:"Relations work a little differently in mongoose when compared to other relational ORMs such as sequelize or typescript. You can read more about relations (references) in mongoose here",source:"@site/docs/persistence/mongoose/relations.mdx",slug:"/persistence/mongoose/relations",permalink:"/nestjs-query/docs/persistence/mongoose/relations",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/mongoose/relations.mdx",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/nestjs-query/docs/persistence/mongoose/getting-started"},next:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/mongoose/custom-service"}},c=[{value:"One to Many/Many To One Example",id:"one-to-manymany-to-one-example",children:[]},{value:"Many To Many Example",id:"many-to-many-example",children:[]}],d={rightToc:c};function m({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Relations work a little differently in ",Object(o.b)("inlineCode",{parentName:"p"},"mongoose")," when compared to other relational ORMs such as ",Object(o.b)("inlineCode",{parentName:"p"},"sequelize")," or ",Object(o.b)("inlineCode",{parentName:"p"},"typescript"),". You can read more about relations (references) in ",Object(o.b)("inlineCode",{parentName:"p"},"mongoose")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/populate.html"}),"here")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There are multiple ways to set of references in ",Object(o.b)("inlineCode",{parentName:"p"},"mongoose")," there are intended as starting point."))),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Filtering on references is not supported by mongoose."))),Object(o.b)("h2",{id:"one-to-manymany-to-one-example"},"One to Many/Many To One Example"),Object(o.b)("p",null,"To set up a one to many/many to one relationship in mongoose you will store a reference in your document"),Object(o.b)("p",null,"For example lets add sub tasks to our todo items by storing a ",Object(o.b)("inlineCode",{parentName:"p"},"todoItem")," ref on our ",Object(o.b)("inlineCode",{parentName:"p"},"subTask")),Object(o.b)(r.a,{defaultValue:"todoitem",values:[{label:"TodoItemEntity",value:"todoitem"},{label:"SubTaskEntity",value:"subtask"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"todoitem",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item/todo-item.entity.ts" {32-36}',title:'"todo-item/todo-item.entity.ts"',"{32-36}":!0}),"import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';\nimport { SchemaTypes, Types, Document } from 'mongoose';\n\n@Schema({ timestamps: true })\nexport class TodoItemEntity extends Document {\n  @Prop({ required: true })\n  title!: string;\n\n  @Prop()\n  description?: string;\n\n  @Prop({ required: true })\n  completed!: boolean;\n\n  @Prop({ default: Date.now })\n  createdAt!: Date;\n\n  @Prop({ default: Date.now })\n  updatedAt!: Date;\n\n  @Prop({ default: 0 })\n  priority!: number;\n\n  @Prop()\n  createdBy?: string;\n\n  @Prop()\n  updatedBy?: string;\n}\n\nexport const TodoItemEntitySchema = SchemaFactory.createForClass(TodoItemEntity);\nTodoItemEntitySchema.virtual('subTasks', {\n  ref: 'SubTaskEntity',\n  localField: '_id',\n  foreignField: 'todoItem',\n});\n"))),Object(o.b)(i.a,{value:"subtask",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="sub-task/sub-task.entity.ts" {15-16}',title:'"sub-task/sub-task.entity.ts"',"{15-16}":!0}),"import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';\nimport { SchemaTypes, Types, Document } from 'mongoose';\n\n@Schema({ timestamps: true })\nexport class SubTaskEntity extends Document {\n  @Prop({ required: true })\n  title!: string;\n\n  @Prop()\n  description?: string;\n\n  @Prop({ required: true })\n  completed!: boolean;\n\n  @Prop({ type: SchemaTypes.ObjectId, ref: 'TodoItemEntity', required: true })\n  todoItem!: Types.ObjectId;\n\n  @Prop()\n  createdAt!: Date;\n\n  @Prop()\n  updatedAt!: Date;\n\n  @Prop()\n  createdBy?: string;\n\n  @Prop()\n  updatedBy?: string;\n}\n\nexport const SubTaskEntitySchema = SchemaFactory.createForClass(SubTaskEntity);\n\n")))),Object(o.b)("p",null,"Now that we have the relationship defined we can add the ",Object(o.b)("inlineCode",{parentName:"p"},"@Relation")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@Connection")," to our DTOs"),Object(o.b)(r.a,{defaultValue:"todoitem",values:[{label:"TodoItemDTO",value:"todoitem"},{label:"SubTaskDTO",value:"subtask"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"todoitem",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item/todo-item.dto.ts"',title:'"todo-item/todo-item.dto.ts"'}),"import { FilterableField, KeySet, Connection } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../../sub-task/dto/sub-task.dto';\n\n@ObjectType('TodoItem')\n@KeySet(['id'])\n// disable the remove because mongoose does not support removing a virtual\n@Connection('subTasks', () => SubTaskDTO, { disableRemove: true })\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  createdAt!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updatedAt!: Date;\n\n  @Field()\n  age!: number;\n\n  @FilterableField()\n  priority!: number;\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n"))),Object(o.b)(i.a,{value:"subtask",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="sub-task/sub-task.dto.ts"',title:'"sub-task/sub-task.dto.ts"'}),"import { FilterableField, KeySet, Relation } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../../todo-item/dto/todo-item.dto';\n\n@ObjectType('SubTask')\n@KeySet(['id'])\n// disable the remove because a sub task cannot exist without a todoitem\n@Relation('todoItem', () => TodoItemDTO, { disableRemove: true })\nexport class SubTaskDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  createdAt!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updatedAt!: Date;\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")))),Object(o.b)("h2",{id:"many-to-many-example"},"Many To Many Example"),Object(o.b)("p",null,"In this example we'll add ",Object(o.b)("inlineCode",{parentName:"p"},"tags")," to ",Object(o.b)("inlineCode",{parentName:"p"},"todoItems")," by storing an array of ",Object(o.b)("inlineCode",{parentName:"p"},"tag")," references on the ",Object(o.b)("inlineCode",{parentName:"p"},"todoItems"),"."),Object(o.b)(r.a,{defaultValue:"todoitem",values:[{label:"TodoItemEntity",value:"todoitem"},{label:"TagEntity",value:"tag"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"todoitem",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item/todo-item.entity.ts" {21-23}',title:'"todo-item/todo-item.entity.ts"',"{21-23}":!0}),"import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';\nimport { SchemaTypes, Types, Document } from 'mongoose';\n\n@Schema({ timestamps: true })\nexport class TodoItemEntity extends Document {\n  @Prop({ required: true })\n  title!: string;\n\n  @Prop()\n  description?: string;\n\n  @Prop({ required: true })\n  completed!: boolean;\n\n  @Prop({ default: Date.now })\n  createdAt!: Date;\n\n  @Prop({ default: Date.now })\n  updatedAt!: Date;\n\n  // notice the brackets around the prop options\n  @Prop([{ type: SchemaTypes.ObjectId, ref: 'TagEntity' }])\n  tags!: Types.ObjectId[];\n\n  @Prop({ default: 0 })\n  priority!: number;\n\n  @Prop()\n  createdBy?: string;\n\n  @Prop()\n  updatedBy?: string;\n}\n\nexport const TodoItemEntitySchema = SchemaFactory.createForClass(TodoItemEntity);\n"))),Object(o.b)(i.a,{value:"tag",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="tag/tag.entity.ts" {23-27}',title:'"tag/tag.entity.ts"',"{23-27}":!0}),"import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';\nimport { Document } from 'mongoose';\n\n@Schema({ timestamps: true })\nexport class TagEntity extends Document {\n  @Prop({ required: true })\n  name!: string;\n\n  @Prop()\n  createdAt!: Date;\n\n  @Prop()\n  updatedAt!: Date;\n\n  @Prop()\n  createdBy?: string;\n\n  @Prop()\n  updatedBy?: string;\n}\n\nexport const TagEntitySchema = SchemaFactory.createForClass(TagEntity);\nTagEntitySchema.virtual('todoItems', {\n  ref: 'TodoItemEntity',\n  localField: '_id',\n  foreignField: 'tags',\n});\n\n")))),Object(o.b)("p",null,"Now that we have the relationship defined we can add the ",Object(o.b)("inlineCode",{parentName:"p"},"@Connection")," to our DTOS"),Object(o.b)(r.a,{defaultValue:"todoitem",values:[{label:"TodoItemDTO",value:"todoitem"},{label:"TagDTO",value:"tag"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"todoitem",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item/todo-item.dto.ts"',title:'"todo-item/todo-item.dto.ts"'}),"import { FilterableField, KeySet, Connection } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { TagDTO } from '../../tag/dto/tag.dto';\n\n@ObjectType('TodoItem')\n@KeySet(['id'])\n@Connection('tags', () => TagDTO)\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  createdAt!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updatedAt!: Date;\n\n  @Field()\n  age!: number;\n\n  @FilterableField()\n  priority!: number;\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n"))),Object(o.b)(i.a,{value:"tag",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="tag/tag.dto.ts"',title:'"tag/tag.dto.ts"'}),"import { FilterableField, KeySet, Connection } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../../todo-item/dto/todo-item.dto';\n\n@ObjectType('Tag')\n@KeySet(['id'])\n// disable update and remove since it is a virtual in the entity\n@Connection('todoItems', () => TodoItemDTO, { disableUpdate: true, disableRemove: true })\nexport class TagDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  name!: string;\n\n  @FilterableField(() => GraphQLISODateTime)\n  createdAt!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updatedAt!: Date;\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n")))))}m.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),b=a,u=m["".concat(i,".").concat(b)]||m[b]||p[b]||r;return n?o.a.createElement(u,l(l({ref:t},c),{},{components:n})):o.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},199:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},200:function(e,t,n){"use strict";var a=n(0),o=n(201);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},201:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},202:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(200),i=n(199),l=n(47),s=n.n(l);const c=37,d=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:m,groupId:p,className:b}=e,{tabGroupChoices:u,setTabGroupChoices:y}=Object(r.a)(),[g,O]=Object(a.useState)(l),[j,f]=Object(a.useState)(!1);if(null!=p){const e=u[p];null!=e&&e!==g&&m.some((t=>t.value===e))&&O(e)}const T=e=>{O(e),null!=p&&y(p,e)},h=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||f(!0)},F=()=>{f(!1)};return Object(a.useEffect)((()=>(window.addEventListener("keydown",v),window.addEventListener("mousedown",F),()=>{window.removeEventListener("keydown",v),window.removeEventListener("mousedown",F)})),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},b)},m.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===e}),style:j?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case d:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),v(e)},onFocus:()=>T(e),onClick:()=>{T(e),f(!1)},onPointerDown:()=>f(!1)},t)))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((e=>e.props.value===g))[0]))}},203:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);