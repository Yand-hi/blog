import{_ as e,c as t,o as s,R as o}from"./chunks/framework.35669211.js";const y=JSON.parse('{"title":"Teleport","description":"","frontmatter":{},"headers":[],"relativePath":"Vue/Vue3/Teleport.md"}'),a={name:"Vue/Vue3/Teleport.md"},l=o(`<h1 id="teleport" tabindex="-1">Teleport <a class="header-anchor" href="#teleport" aria-label="Permalink to &quot;Teleport&quot;">​</a></h1><p>将组件模板中的一部分逻辑移到 DOM 中或者 Vue 实例之外的其他位置，常用于创建一个 Dialog</p><p>比如组件内有需求需要通过点击按钮创建一个模态框，通过 css 进行定位会很复杂，需要设置 <code>position:absolute</code> 和父级以上元素设置配合定位，但是在组件模板中div是深度嵌套的,<code>z-index</code> 设置层叠关系；</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">teleport</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">body</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 告诉 Vue “将这个 HTML 传送到‘body’标签下”。 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">teleport</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Teleport 允许我们控制在 DOM 中哪个父节点下渲染了 HTML，而不必求助于全局状态或将其拆分为两个组件。</p><p>此时里面的 html 元素直接渲染在 body 下，与 <code>&lt;div id=&quot;app&quot;&gt;</code> 平起平坐，可以直接相对 body 进行定位，方便了很多。</p>`,6),p=[l];function n(c,r,i,d,_,D){return s(),t("div",null,p)}const F=e(a,[["render",n]]);export{y as __pageData,F as default};
