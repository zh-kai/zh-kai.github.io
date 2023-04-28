import{_ as s,o as n,c as a,a as l}from"./app.69c535c4.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"df \u67E5\u770B\u78C1\u76D8\u4FE1\u606F","slug":"df-\u67E5\u770B\u78C1\u76D8\u4FE1\u606F","link":"#df-\u67E5\u770B\u78C1\u76D8\u4FE1\u606F","children":[]},{"level":2,"title":"du \u6D4B\u91CF\u6587\u4EF6 / \u76EE\u5F55\u78C1\u76D8\u5360\u7528\u60C5\u51B5","slug":"du-\u6D4B\u91CF\u6587\u4EF6-\u76EE\u5F55\u78C1\u76D8\u5360\u7528\u60C5\u51B5","link":"#du-\u6D4B\u91CF\u6587\u4EF6-\u76EE\u5F55\u78C1\u76D8\u5360\u7528\u60C5\u51B5","children":[]}],"relativePath":"notes/linux.md","lastUpdated":1682687098000}'),p={name:"notes/linux.md"},e=l(`<h2 id="df-\u67E5\u770B\u78C1\u76D8\u4FE1\u606F" tabindex="-1"><code>df</code> \u67E5\u770B\u78C1\u76D8\u4FE1\u606F <a class="header-anchor" href="#df-\u67E5\u770B\u78C1\u76D8\u4FE1\u606F" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u7528\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">df </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">OPTION</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">FILE</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u78C1\u76D8\u7A7A\u95F4\u4F7F\u7528\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">df</span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u547D\u4EE4\u5E2E\u52A9</span></span>
<span class="line"><span style="color:#A6ACCD;">df --help</span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">df -T</span></span>
<span class="line"><span style="color:#676E95;"># \u5728\u6700\u540E\u4E00\u884C\u663E\u793A\u7EDF\u8BA1</span></span>
<span class="line"><span style="color:#A6ACCD;">df --total</span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A inode \u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">df -i</span></span>
<span class="line"><span style="color:#676E95;"># \u4EE5\u4EBA\u7C7B\u53EF\u8BFB\u65B9\u5F0F\u663E\u793A\u78C1\u76D8\u4F7F\u7528\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">df -h</span></span>
<span class="line"></span></code></pre></div><h2 id="du-\u6D4B\u91CF\u6587\u4EF6-\u76EE\u5F55\u78C1\u76D8\u5360\u7528\u60C5\u51B5" tabindex="-1"><code>du</code> \u6D4B\u91CF\u6587\u4EF6 / \u76EE\u5F55\u78C1\u76D8\u5360\u7528\u60C5\u51B5 <a class="header-anchor" href="#du-\u6D4B\u91CF\u6587\u4EF6-\u76EE\u5F55\u78C1\u76D8\u5360\u7528\u60C5\u51B5" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u8BED\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">du </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">option</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u4E3A\u4EBA\u7C7B\u53EF\u8BFB</span></span>
<span class="line"><span style="color:#A6ACCD;">du -h</span></span>
<span class="line"><span style="color:#676E95;"># \u53EA\u6253\u5370 total size</span></span>
<span class="line"><span style="color:#A6ACCD;">du -s</span></span>
<span class="line"><span style="color:#676E95;"># \u81EA\u5B9A\u4E49\u5757\u5927\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;">du -B </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div>`,4),o=[e];function c(t,r,i,d,y,C){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{A as __pageData,u as default};
