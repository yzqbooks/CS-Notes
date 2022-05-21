import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o,c as p,a as n,b as c,F as l,d as s,e as i}from"./app.5ce5af5d.js";const r={},u=n("h1",{id:"_28-\u5BF9\u79F0\u7684\u4E8C\u53C9\u6811",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_28-\u5BF9\u79F0\u7684\u4E8C\u53C9\u6811","aria-hidden":"true"},"#"),s(" 28. \u5BF9\u79F0\u7684\u4E8C\u53C9\u6811")],-1),d={href:"https://www.nowcoder.com/practice/ff05d44dfdb04e1d83bdbdab320efbcb?tpId=13&tqId=11211&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},k=s("NowCoder"),m=i(`<h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u9898\u76EE\u63CF\u8FF0</h2><p>![img](https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/0c12221f-729e-4c22-b0ba-0dfc909f8adf.jpg&quot; width=&quot;300)</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">isSymmetrical</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> pRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">isSymmetrical</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">.</span>left<span class="token punctuation">,</span> pRoot<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">boolean</span> <span class="token function">isSymmetrical</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> t1<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> t2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>t1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> t2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>t1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> t2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>t1<span class="token punctuation">.</span>val <span class="token operator">!=</span> t2<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">isSymmetrical</span><span class="token punctuation">(</span>t1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> t2<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSymmetrical</span><span class="token punctuation">(</span>t1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> t2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(b,f){const a=e("ExternalLinkIcon");return o(),p(l,null,[u,n("p",null,[n("a",d,[k,c(a)])]),m],64)}var w=t(r,[["render",v],["__file","28. \u5BF9\u79F0\u7684\u4E8C\u53C9\u6811.html.vue"]]);export{w as default};
