import{_ as s,c as a,o as n,R as l}from"./chunks/framework.35669211.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"React/useState和useReducer.md"}'),p={name:"React/useState和useReducer.md"},o=l(`<h3 id="usestate" tabindex="-1">useState <a class="header-anchor" href="#usestate" aria-label="Permalink to &quot;useState&quot;">​</a></h3><p>在 React 函数组件中存储内部 state 通常会使用 useState hook 传入一个初始值，在初次渲染时创建 state，之后会返回当前的 state。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> setState</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#A6ACCD;">(initialState)</span></span></code></pre></div><p>下面是一个点击+1的 demo</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setN</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;{</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setN</span><span style="color:#A6ACCD;">(n </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">+1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>useState 接收一个初始值，返回一个length 为2 的数组；</li><li>数组第一项首次渲染时与初始值相等，第二项为一个函数，接收一个新的值或者函数，将新的值设置为新的 state</li><li>useState 声明在函数组件顶层，每次渲染都会执行 知道原理之后，实现一个简易版的 useState</li></ul><h3 id="实现一个简单的-usestate" tabindex="-1">实现一个简单的 useState <a class="header-anchor" href="#实现一个简单的-usestate" aria-label="Permalink to &quot;实现一个简单的 useState&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> state</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myUseState </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">initialState</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initialState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">newState</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newState</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 执行渲染函数</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setState</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这样写组件只能初始化一个变量，如果有多个怎么办？</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 使用 index 来记录组件内 useState 顺序</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myUseState </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">initialState</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">currentIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">currentIndex</span><span style="color:#F07178;"> ] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">currentIndex</span><span style="color:#F07178;"> ] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initialState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">currentIndex</span><span style="color:#F07178;"> ]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">newState</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">currentIndex</span><span style="color:#F07178;"> ] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newState</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">// 重置 index</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 执行渲染函数</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">currentIndex</span><span style="color:#F07178;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setState</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>每次组件渲染，执行 myUseState，如果没有触发 setState 函数，则会将初始值赋值给 state，执行 setState 后组件会再此渲染一次，此时 产生一个新的 state，值为 newState，然后将这个新的 state 返回。所以，setState 并不会改变原有的 state，而是产生一个新的 state。</p><p>如果组件内有多个 useState</p><ul><li>通过 index 可以记录 useState 的顺序；</li><li>每次渲染都是产生新的 state[currentIndex]</li><li>每次渲染 useState 的顺序不能发生改变，所以不能在条件语句中使用 useState</li><li>setState 并不会改变原有的 state，而是产生一个新的 state.</li></ul><h3 id="usereducer" tabindex="-1">useReducer <a class="header-anchor" href="#usereducer" aria-label="Permalink to &quot;useReducer&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dispatch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useReducer</span><span style="color:#A6ACCD;">(reducer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> initialArg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> init)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>useReducer 接收一个形如 <code>(state, action) =&gt; newState</code> 的 reducer，并返回当前的 state 以及与其对应的 dispatch 方法；</p><p>如果 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 时，useReducer 比 useState 更加适用。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> initialState </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">n</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> reducer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">action</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">action</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">n</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">n</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unknow type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dispatch</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useReducer</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">reducer</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initialState</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">n: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dispatch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">+1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dispatch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">-1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>使用 useReducer 步骤：</p><ul><li>创建初始值：initialState ；</li><li>创建所有操作内容：reducer；</li><li>传入 useReducer 函数中，返回相应的读写；</li><li>使用 dispatch 传入对应的 action 的 type 实现对 state 的操作。</li></ul>`,20),t=[o];function e(c,r,y,F,D,C){return n(),a("div",null,t)}const u=s(p,[["render",e]]);export{i as __pageData,u as default};
