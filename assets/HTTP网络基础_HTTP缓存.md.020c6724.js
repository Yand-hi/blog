import{_ as e,c as o,o as a,R as c}from"./chunks/framework.5dd80646.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"HTTP网络基础/HTTP缓存.md"}'),t={name:"HTTP网络基础/HTTP缓存.md"},l=c('<h2 id="缓存头-cache-control" tabindex="-1">缓存头 <code>cache-control</code> <a class="header-anchor" href="#缓存头-cache-control" aria-label="Permalink to &quot;缓存头 `cache-control`&quot;">​</a></h2><ul><li><code>Cache-Control: no-store</code>: 没有缓存</li><li><code>Cache-Control: no-cache</code>: 有缓存但是每次请求必须先去服务器验证缓存是否过期，过期返回 304，然后使用本地缓存</li><li><code>Cache-Control: max-age=31536000</code>: 缓存过期时间</li></ul><h2 id="新鲜度校验" tabindex="-1">新鲜度校验 <a class="header-anchor" href="#新鲜度校验" aria-label="Permalink to &quot;新鲜度校验&quot;">​</a></h2><ol><li><code>Last-Modified</code>: 精度低， If-Modified-Since 请求校验</li><li><code>ETag</code>: 精度高， If-None-Match 请求校验</li><li>缓存未失效返回响应 304，失效则获取新的资源并重新缓存</li></ol>',4),i=[l];function r(n,d,_,s,h,T){return a(),o("div",null,i)}const p=e(t,[["render",r]]);export{m as __pageData,p as default};
