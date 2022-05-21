import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as e,c as o,a as n,b as c,F as l,d as s,e as i}from"./app.5ce5af5d.js";const u={},r=n("h1",{id:"_34-\u4E8C\u53C9\u6811\u4E2D\u548C\u4E3A\u67D0\u4E00\u503C\u7684\u8DEF\u5F84",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_34-\u4E8C\u53C9\u6811\u4E2D\u548C\u4E3A\u67D0\u4E00\u503C\u7684\u8DEF\u5F84","aria-hidden":"true"},"#"),s(" 34. \u4E8C\u53C9\u6811\u4E2D\u548C\u4E3A\u67D0\u4E00\u503C\u7684\u8DEF\u5F84")],-1),k={href:"https://www.nowcoder.com/practice/b736e784e3e34731af99065031301bca?tpId=13&tqId=11177&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},d=s("NowCoder"),m=i(`<h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u9898\u76EE\u63CF\u8FF0</h2><p>\u8F93\u5165\u4E00\u9897\u4E8C\u53C9\u6811\u548C\u4E00\u4E2A\u6574\u6570\uFF0C\u6253\u5370\u51FA\u4E8C\u53C9\u6811\u4E2D\u7ED3\u70B9\u503C\u7684\u548C\u4E3A\u8F93\u5165\u6574\u6570\u7684\u6240\u6709\u8DEF\u5F84\u3002\u8DEF\u5F84\u5B9A\u4E49\u4E3A\u4ECE\u6811\u7684\u6839\u7ED3\u70B9\u5F00\u59CB\u5F80\u4E0B\u4E00\u76F4\u5230\u53F6\u7ED3\u70B9\u6240\u7ECF\u8FC7\u7684\u7ED3\u70B9\u5F62\u6210\u4E00\u6761\u8DEF\u5F84\u3002</p><p>\u4E0B\u56FE\u7684\u4E8C\u53C9\u6811\u6709\u4E24\u6761\u548C\u4E3A 22 \u7684\u8DEF\u5F84\uFF1A10, 5, 7 \u548C 10, 12</p><p>![img](https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/ed77b0e6-38d9-4a34-844f-724f3ffa2c12.jpg&quot; width=&quot;200)</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ArrayList</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ArrayList</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">FindPath</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> target<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">,</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    target <span class="token operator">-=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ret<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> target<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> target<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    path<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(g,h){const a=p("ExternalLinkIcon");return e(),o(l,null,[r,n("p",null,[n("a",k,[d,c(a)])]),m],64)}var f=t(u,[["render",v],["__file","34. \u4E8C\u53C9\u6811\u4E2D\u548C\u4E3A\u67D0\u4E00\u503C\u7684\u8DEF\u5F84.html.vue"]]);export{f as default};
