import{_ as s,c as a,o as n,R as e}from"./chunks/framework.5dd80646.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Git/git笔记一.md"}'),l={name:"Git/git笔记一.md"},t=e(`<h3 id="_1-基础命令" tabindex="-1">1. 基础命令 <a class="header-anchor" href="#_1-基础命令" aria-label="Permalink to &quot;1. 基础命令&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">$  git init      </span></span>
<span class="line"><span style="color:#A6ACCD;">//  初始化仓库，建立.git目录，又叫工作树，存储了管理当前目录所需的仓库数据</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$  git status</span></span>
<span class="line"><span style="color:#A6ACCD;">//  查看当前工作树的状态 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$  git add</span></span>
<span class="line"><span style="color:#A6ACCD;">//  向暂存区添加文件，暂存区是提交之前的一个临时区域</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$  git commit</span></span>
<span class="line"><span style="color:#A6ACCD;">//  从暂存区提交文件至本地仓库，git commit -m &#39;first commit&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$  git log</span></span>
<span class="line"><span style="color:#A6ACCD;">//  查看以往仓库中提交的日志，每个提交信息都会记录一个相应的 hash 值</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$  git diff</span></span>
<span class="line"><span style="color:#A6ACCD;">//  查看工作树、暂存区、最新提交之间的差别</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$  git remote add </span></span>
<span class="line"><span style="color:#A6ACCD;">//  在推送远程仓库之前，需要添加远程仓库，本地仓库与远程仓库建立链接</span></span>
<span class="line"><span style="color:#A6ACCD;">//  示例 git remote add origin git@github.com:xxxxx，orgin可以理解为远程仓库的一个别名</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$  git push</span></span>
<span class="line"><span style="color:#A6ACCD;">//  将本地仓库内容推送至远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">//  示例 git push -u origin marster 其中 -u 可以在推送的同时与远程分支做关联，默认此分支为推送与拉取的远程分支的信息</span></span></code></pre></div><ul><li>对以上基础命令的补充拓展</li></ul><blockquote><p><code>git log --pretty=short</code> 只显示第一行提交信息 <code>git log &lt;fileName&gt;</code> 只显示相应文件的提交日志 <code>git diff HEAD</code> 查看本次提交与上次提交之间有什么差别，HEAD 是指向当前分支中最新一次提交的指针（好习惯）</p></blockquote><h3 id="_2-git-分支命令" tabindex="-1">2. git 分支命令 <a class="header-anchor" href="#_2-git-分支命令" aria-label="Permalink to &quot;2. git 分支命令&quot;">​</a></h3><p>在日常协作开发中，通常会建立不同的分支，不同的分支中，可以进行完全不同的作业，等到该分支作业完成后再与主分支 marster 合并</p><ul><li><p><code>git branch</code> 显示分支一览表 列出当前仓库所有分支列表，第一个前面有 * 的为当前所在分支</p></li><li><p><code>git checkout -b</code> 创建，切换到其它分支 示例：创建名为 feature-A 的分支</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$  git checkout -b feature-A</span></span>
<span class="line"><span style="color:#A6ACCD;">//  也可以使用下面的两条命令代替</span></span>
<span class="line"><span style="color:#A6ACCD;">$  git branch feature-A</span></span>
<span class="line"><span style="color:#A6ACCD;">$  git checkout feature-A</span></span></code></pre></div></li><li><p><code>git merge</code> 合并分支</p><blockquote><p>特性分支：集中实现单一功能主题的分支，除此之外不进行任何作业，如 feature-A 主干分支：特性分支的原点，主干分支中没有开发到一半的代码，可随时供他人查看，如 marster | <em>如果特性分支任务完成，需要将其合并至主干分支</em></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//  将 feature-A 分支合并至 marster，首先要切换至 marster 分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$  git branch marster</span></span>
<span class="line"><span style="color:#A6ACCD;">$  git merge --no-ff feature-A</span></span></code></pre></div><blockquote><p><strong>! 注意：</strong> --no-ff 参数是禁止快进式合并，如果不加该参数，git 合并两个分支时，如果顺着 marster 可以到达 feature-A，就会简单的把 HEAD（最新一次 commit 记录） 指针移动到 feature-A 上，并没有创建 commit，如果删除分支的话会导致丢失信息；</p></blockquote></li><li><p><code>git log --graph</code> 以图表的形式查看分支 使用该命令可以清晰地看到从第一次 commit 到当前状态的分支变化过程，可以借此命令输出提交日志</p></li></ul><h3 id="_3-进阶命令" tabindex="-1">3. 进阶命令 <a class="header-anchor" href="#_3-进阶命令" aria-label="Permalink to &quot;3. 进阶命令&quot;">​</a></h3><ul><li><p><code>git reset</code> 回溯历史版本（后悔药） 示例：回溯到创建特性分支 feature-A 之前，并且新创建一个 fix-B 分支</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$  git reset --hard 5894c5738cd2f23156f2992f983e8a8fcba6411f</span></span></code></pre></div><blockquote><p><strong>!注意：</strong> -- hard 后面的是想要回溯到时间点的 hash 值，可以通过 git log 查看； 使用该命令后，就完全回溯至指定版本了，同时指定版本以外的文件内容都会丢失，使用之前可以先将工作区内容 commit，<strong>慎用！</strong>； 可以通过 git pull origin marster 的方式重新更新至线上最新版本</p></blockquote><p>此时，创建一个新的特性分支 fix-B：<code>git checkout -b fix-B</code>，任务完成，这是需要回到回溯之前的时间点，但是 git log 只能展示以当前状态为最新状态的日志，这样就拿不到回溯之前的 hash 值，怎么办？</p></li><li><p><code>git reflog</code> 查看当前仓库执行过的所有的操作日志 使用 git reflog 可以找到回溯之前在特性分支 feature-A 合并之后时间点的 hash 值，继续使用 git reset --hard 回溯（推进）历史，到达回溯之前的状态，这时候需要将 fix-B 分支合并至主干分支，但是由于 feature-A 和 fix-B 更改的部分会产生冲突，所以需要解决冲突后再合并，最后提交解决后的结果。</p></li><li><p><code>git commit --amend</code> 修改提交信息 想要修改上一次提交信息可以使用此命令，在打开的编辑器中修改提交信息后保存关闭。</p></li><li><p><code>git rebase -i</code> 压缩提交历史 有时候我们提交完一次后发现有些小问题需要小修改，修改完之后又要提交一次，但是不想要这次提交信息出现在日志里，想要保证提交日志的连贯整洁。就需要将这次‘小修改’的提交压缩至上一次提交：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$  git rebase -i HEAD~2</span></span>
<span class="line"><span style="color:#A6ACCD;">//  HEAD~2 表示压缩的范围为 HEAD 所指的最新提交和上一次提交</span></span></code></pre></div><blockquote><p>执行此命令后，在自动打开的编辑器中将需要被压缩的提交‘小修改’的前缀 pick 改为 fixup 保存退出，压缩完毕，此时执行 git log 会发现‘小修改’不见了，但是修改的内容还在。</p></blockquote><p><em>推荐常用此命令可以保持 git 提交日志的整洁性</em></p></li></ul>`,9),p=[t];function o(i,c,r,g,A,d){return n(),a("div",null,p)}const h=s(l,[["render",o]]);export{u as __pageData,h as default};
