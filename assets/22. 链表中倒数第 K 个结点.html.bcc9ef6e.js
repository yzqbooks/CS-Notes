import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c as o,a as n,b as c,F as l,d as s,e as i}from"./app.5ce5af5d.js";const r={},u=n("h1",{id:"_22-\u94FE\u8868\u4E2D\u5012\u6570\u7B2C-k-\u4E2A\u7ED3\u70B9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_22-\u94FE\u8868\u4E2D\u5012\u6570\u7B2C-k-\u4E2A\u7ED3\u70B9","aria-hidden":"true"},"#"),s(" 22. \u94FE\u8868\u4E2D\u5012\u6570\u7B2C K \u4E2A\u7ED3\u70B9")],-1),d={href:"https://www.nowcoder.com/practice/886370fe658f41b498d40fb34ae76ff9?tpId=13&tqId=11167&tab=answerKey&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},k=s("\u725B\u5BA2\u7F51"),m=i(`<h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h2><p>\u8BBE\u94FE\u8868\u7684\u957F\u5EA6\u4E3A N\u3002\u8BBE\u7F6E\u4E24\u4E2A\u6307\u9488 P1 \u548C P2\uFF0C\u5148\u8BA9 P1 \u79FB\u52A8 K \u4E2A\u8282\u70B9\uFF0C\u5219\u8FD8\u6709 N - K \u4E2A\u8282\u70B9\u53EF\u4EE5\u79FB\u52A8\u3002\u6B64\u65F6\u8BA9 P1 \u548C P2 \u540C\u65F6\u79FB\u52A8\uFF0C\u53EF\u4EE5\u77E5\u9053\u5F53 P1 \u79FB\u52A8\u5230\u94FE\u8868\u7ED3\u5C3E\u65F6\uFF0CP2 \u79FB\u52A8\u5230\u7B2C N - K \u4E2A\u8282\u70B9\u5904\uFF0C\u8BE5\u4F4D\u7F6E\u5C31\u662F\u5012\u6570\u7B2C K \u4E2A\u8282\u70B9\u3002</p><p>![img](https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/6b504f1f-bf76-4aab-a146-a9c7a58c2029.png&quot; width=&quot;500)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">FindKthToTail</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> P1 <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>P1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> k<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        P1 <span class="token operator">=</span> P1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> P2 <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>P1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        P1 <span class="token operator">=</span> P1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        P2 <span class="token operator">=</span> P2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> P2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(_,h){const a=t("ExternalLinkIcon");return p(),o(l,null,[u,n("p",null,[n("a",d,[k,c(a)])]),m],64)}var w=e(r,[["render",v],["__file","22. \u94FE\u8868\u4E2D\u5012\u6570\u7B2C K \u4E2A\u7ED3\u70B9.html.vue"]]);export{w as default};
