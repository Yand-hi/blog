import{_ as e,c,o as t,R as o}from"./chunks/framework.5dd80646.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Webpack/Tree-shaking.md"}'),a={name:"Webpack/Tree-shaking.md"},r=o("<p><code>tree-shaking</code> 直译“摇树”，你可以将应用程序想象成一棵树。绿色表示实际用到的 source code(源码) 和 library(库)，是树上活的树叶。灰色表示未引用代码，是秋天树上枯萎的树叶。为了除去死去的树叶，你必须摇动这棵树，使它们落下。</p><p>通常用于移除 JS 文件上下文中未被引用的代码块</p><p>原理：基于 esm 模块进行静态分析，通过 AST 将用不到的代码移除，从而减小打包体积。</p><p>Vue2 中 <code>Vue.nextTick()</code> 这种全局 API 不支持 <code>Tree shaking</code> 无论是否使用过，都会包含在打包文件中；</p><p>Vue3 中考虑支持 <code>Tree shaking</code>，全局 API 通过具名导出进行访问 <code>nextTick(() =&gt; {})</code>;</p>",5),s=[r];function _(n,d,p,i,T,k){return t(),c("div",null,s)}const m=e(a,[["render",_]]);export{l as __pageData,m as default};
