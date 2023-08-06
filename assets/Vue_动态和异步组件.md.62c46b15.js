import{_ as s,c as a,o as n,R as l}from"./chunks/framework.35669211.js";const C=JSON.parse('{"title":"动态组件","description":"","frontmatter":{},"headers":[],"relativePath":"Vue/动态和异步组件.md"}'),o={name:"Vue/动态和异步组件.md"},p=l(`<h1 id="动态组件" tabindex="-1">动态组件 <a class="header-anchor" href="#动态组件" aria-label="Permalink to &quot;动态组件&quot;">​</a></h1><h2 id="v-bind-is" tabindex="-1">v-bind:is <a class="header-anchor" href="#v-bind-is" aria-label="Permalink to &quot;v-bind:is&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">currentView</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><p>component 是 Vue 内置组件 当 currentView 改变时，组件内容发生改变，改变后不会缓存依赖，因为每次切换都是创建了一个新的实例</p><ul><li>可以使用 <code>keep-alive</code> 缓存组件状态</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">currentView</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 这样是无效的</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my-row</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="keep-alive" tabindex="-1">keep-alive <a class="header-anchor" href="#keep-alive" aria-label="Permalink to &quot;keep-alive&quot;">​</a></h2><p><code>&lt;keep-alive&gt;</code> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <code>&lt;transition&gt;</code> 相似; <code>&lt;keep-alive&gt;</code> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。</p><p>当组件在 <code>&lt;keep-alive&gt;</code> 内被切换，它的 <code>activated</code> 和 <code>deactivated</code> 这两个生命周期钩子函数将会被对应执行。</p><p>保留组件状态和避免重复渲染</p><p><code>include</code> 和 <code>exclude</code> prop 允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示：</p><p><code>max</code> 最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。</p><h1 id="异步组件" tabindex="-1">异步组件 <a class="header-anchor" href="#异步组件" aria-label="Permalink to &quot;异步组件&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async-webpack-example</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 这个动态导入会返回一个 \`Promise\` 对象。</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./my-async-component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>当使用局部注册的时候，你也可以直接提供一个返回 Promise 的函数：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">my-component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./my-async-component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,17),e=[p];function t(c,r,D,i,y,F){return n(),a("div",null,e)}const A=s(o,[["render",t]]);export{C as __pageData,A as default};
