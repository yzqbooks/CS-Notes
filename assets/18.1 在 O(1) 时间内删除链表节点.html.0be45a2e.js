import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{e as s}from"./app.5ce5af5d.js";const a={},e=s(`<h1 id="_18-1-\u5728-o-1-\u65F6\u95F4\u5185\u5220\u9664\u94FE\u8868\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_18-1-\u5728-o-1-\u65F6\u95F4\u5185\u5220\u9664\u94FE\u8868\u8282\u70B9" aria-hidden="true">#</a> 18.1 \u5728 O(1) \u65F6\u95F4\u5185\u5220\u9664\u94FE\u8868\u8282\u70B9</h1><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h2><p>\u2460 \u5982\u679C\u8BE5\u8282\u70B9\u4E0D\u662F\u5C3E\u8282\u70B9\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u5C06\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u503C\u8D4B\u7ED9\u8BE5\u8282\u70B9\uFF0C\u7136\u540E\u4EE4\u8BE5\u8282\u70B9\u6307\u5411\u4E0B\u4E0B\u4E2A\u8282\u70B9\uFF0C\u518D\u5220\u9664\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1)\u3002</p><p>![img](https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/1176f9e1-3442-4808-a47a-76fbaea1b806.png&quot; width=&quot;600)</p><p>\u2461 \u5426\u5219\uFF0C\u5C31\u9700\u8981\u5148\u904D\u5386\u94FE\u8868\uFF0C\u627E\u5230\u8282\u70B9\u7684\u524D\u4E00\u4E2A\u8282\u70B9\uFF0C\u7136\u540E\u8BA9\u524D\u4E00\u4E2A\u8282\u70B9\u6307\u5411 null\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(N)\u3002</p><p>![img](https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/4bf8d0ba-36f0-459e-83a0-f15278a5a157.png&quot; width=&quot;600)</p><p>\u7EFC\u4E0A\uFF0C\u5982\u679C\u8FDB\u884C N \u6B21\u64CD\u4F5C\uFF0C\u90A3\u4E48\u5927\u7EA6\u9700\u8981\u64CD\u4F5C\u8282\u70B9\u7684\u6B21\u6570\u4E3A N-1+N=2N-1\uFF0C\u5176\u4E2D N-1 \u8868\u793A N-1 \u4E2A\u4E0D\u662F\u5C3E\u8282\u70B9\u7684\u6BCF\u4E2A\u8282\u70B9\u4EE5 O(1) \u7684\u65F6\u95F4\u590D\u6742\u5EA6\u64CD\u4F5C\u8282\u70B9\u7684\u603B\u6B21\u6570\uFF0CN \u8868\u793A 1 \u4E2A\u5C3E\u8282\u70B9\u4EE5 O(N) \u7684\u65F6\u95F4\u590D\u6742\u5EA6\u64CD\u4F5C\u8282\u70B9\u7684\u603B\u6B21\u6570\u3002(2N-1)/N ~ 2\uFF0C\u56E0\u6B64\u8BE5\u7B97\u6CD5\u7684\u5E73\u5747\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1)\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> tobeDelete<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> tobeDelete <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tobeDelete<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8981\u5220\u9664\u7684\u8282\u70B9\u4E0D\u662F\u5C3E\u8282\u70B9</span>
        <span class="token class-name">ListNode</span> next <span class="token operator">=</span> tobeDelete<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        tobeDelete<span class="token punctuation">.</span>val <span class="token operator">=</span> next<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        tobeDelete<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> tobeDelete<span class="token punctuation">)</span>
             <span class="token comment">// \u53EA\u6709\u4E00\u4E2A\u8282\u70B9</span>
            head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">!=</span> tobeDelete<span class="token punctuation">)</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function t(p,o){return e}var i=n(a,[["render",t],["__file","18.1 \u5728 O(1) \u65F6\u95F4\u5185\u5220\u9664\u94FE\u8868\u8282\u70B9.html.vue"]]);export{i as default};
