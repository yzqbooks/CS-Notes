import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as i,c as l,a as n,b as o,F as c,d as s,e as d}from"./app.d02315a2.js";const r={},u=n("h1",{id:"_20-\u8868\u793A\u6570\u503C\u7684\u5B57\u7B26\u4E32",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_20-\u8868\u793A\u6570\u503C\u7684\u5B57\u7B26\u4E32","aria-hidden":"true"},"#"),s(" 20. \u8868\u793A\u6570\u503C\u7684\u5B57\u7B26\u4E32")],-1),p={href:"https://www.nowcoder.com/practice/e69148f8528c4039ad89bb2546fd4ff8?tpId=13&tqId=11206&tab=answerKey&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},v=s("\u725B\u5BA2\u7F51"),m=d(`<h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u9898\u76EE\u63CF\u8FF0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>true

&quot;+100&quot;
&quot;5e2&quot;
&quot;-123&quot;
&quot;3.1416&quot;
&quot;-1E-16&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>false

&quot;12e&quot;
&quot;1a3.14&quot;
&quot;1.2.3&quot;
&quot;+-5&quot;
&quot;12e+4.3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h2><p>\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\u5339\u914D\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>[]  \uFF1A \u5B57\u7B26\u96C6\u5408
()  \uFF1A \u5206\u7EC4
?   \uFF1A \u91CD\u590D 0 ~ 1 \u6B21
+   \uFF1A \u91CD\u590D 1 ~ n \u6B21
*   \uFF1A \u91CD\u590D 0 ~ n \u6B21
.   \uFF1A \u4EFB\u610F\u5B57\u7B26
\\\\. \uFF1A \u8F6C\u4E49\u540E\u7684 .
\\\\d \uFF1A \u6570\u5B57
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> isNumeric <span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token string">&quot;[+-]?\\\\d*(\\\\.\\\\d+)?([eE][+-]?\\\\d+)?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(k,_){const a=t("ExternalLinkIcon");return i(),l(c,null,[u,n("p",null,[n("a",p,[v,o(a)])]),m],64)}var g=e(r,[["render",b],["__file","20. \u8868\u793A\u6570\u503C\u7684\u5B57\u7B26\u4E32.html.vue"]]);export{g as default};
