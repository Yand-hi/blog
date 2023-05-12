import{_ as e,c as a,o as t,R as l}from"./chunks/framework.5dd80646.js";const T=JSON.parse('{"title":"http 1.0 瓶颈","description":"","frontmatter":{},"headers":[],"relativePath":"HTTP网络基础/http2.0.md"}'),o={name:"HTTP网络基础/http2.0.md"},i=l(`<h1 id="http-1-0-瓶颈" tabindex="-1">http 1.0 瓶颈 <a class="header-anchor" href="#http-1-0-瓶颈" aria-label="Permalink to &quot;http 1.0 瓶颈&quot;">​</a></h1><ul><li>一条连接只能发送一个请求</li><li>请求只能从客户端开始，客户端不可以接收除了响应以外的指令</li><li>首部未压缩，首部信息多延迟大，互发相同首部信息浪费资源</li><li>可以选择任意压缩格式，非强制压缩发送</li></ul><h2 id="spdy-协议-会话层" tabindex="-1">SPDY 协议，会话层 <a class="header-anchor" href="#spdy-协议-会话层" aria-label="Permalink to &quot;SPDY 协议，会话层&quot;">​</a></h2><h3 id="ajax-异步加载-局部更新" tabindex="-1">AJAX 异步加载，局部更新 <a class="header-anchor" href="#ajax-异步加载-局部更新" aria-label="Permalink to &quot;AJAX 异步加载，局部更新&quot;">​</a></h3><p>局部页面替换加载的异步通信手段，XMLHttpRequest的API，通过js的调用和服务器进行通信，从已加载完毕的页面上发送请求，只更新局部页面。</p><h3 id="comet-服务端推送" tabindex="-1">Comet 服务端推送 <a class="header-anchor" href="#comet-服务端推送" aria-label="Permalink to &quot;Comet 服务端推送&quot;">​</a></h3><p>一旦服务器端有内容更新了，Comet不会让请求等待，而是直接给客户端返回响应。这是一种通过延迟应答，模拟实现服务器端向客户端推送（Server Push）的功能。</p><h3 id="spdy-优点" tabindex="-1">SPDY 优点 <a class="header-anchor" href="#spdy-优点" aria-label="Permalink to &quot;SPDY 优点&quot;">​</a></h3><ul><li>多路复用 通过单一的TCP连接，可以无限制处理多个HTTP请求。所有请求的处理都在一条TCP连接上完成，因此TCP的处理效率得到提高。</li><li>首部压缩 通过单一的TCP连接，可以无限制处理多个HTTP请求。所有请求的处理都在一条TCP连接上完成，因此TCP的处理效率得到提高。</li><li>服务端推送 支持服务器主动向客户端推送数据的功能。这样，服务器可直接发送数据，而不必等待客户端的请求。</li><li>请求优先级 SPDY不仅可以无限制地并发处理请求，还可以给请求逐个分配优先级顺序。这样主要是为了在发送多个请求时，解决因带宽低而导致响应变慢的问题。</li><li>服务器提示 服务器可以主动提示客户端请求所需的资源。由于在客户端发现资源之前就可以获知资源的存在，因此在资源已缓存等情况下，可以避免发送不必要的请求</li></ul><h2 id="websocket-全双工通信" tabindex="-1">WebSocket 全双工通信 <a class="header-anchor" href="#websocket-全双工通信" aria-label="Permalink to &quot;WebSocket 全双工通信&quot;">​</a></h2><pre><code>WebSocket，即Web浏览器与Web服务器之间全双工通信标准。由于是建立在HTTP基础上的协议，因此连接的发起方仍是客户端，而一旦确立WebSocket通信连接，不论服务器还是客户端，任意一方都可直接向对方发送报文。
</code></pre><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ol><li>支持服务器推送</li><li>减少通信量</li><li>建立长连接，通过一次握手升级协议</li></ol><h3 id="一次握手" tabindex="-1">一次握手 <a class="header-anchor" href="#一次握手" aria-label="Permalink to &quot;一次握手&quot;">​</a></h3><p>在 HTTP 连接建立后，通过一次握手建立 WebSocket 通信。</p><ul><li>HTTP 的 <code>Upgrade</code> 首部字段，发送请求握手</li><li>服务器返回状态码101 <code>Switching Protocols</code> 的响应</li><li>握手成功，WebSocket 通信连接，通信之后不再使用 HTTP 的数据帧，而是 WebSocket 的数据帧</li></ul>`,16),r=[i];function h(c,d,s,n,p,P){return t(),a("div",null,r)}const _=e(o,[["render",h]]);export{T as __pageData,_ as default};
