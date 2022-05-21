import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as p,c as o,a as n,b as c,F as l,d as s,e as i}from"./app.5ce5af5d.js";const u={},d=n("h1",{id:"_6-\u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-\u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868","aria-hidden":"true"},"#"),s(" 6. \u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868")],-1),r=n("h2",{id:"\u9898\u76EE\u94FE\u63A5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u76EE\u94FE\u63A5","aria-hidden":"true"},"#"),s(" \u9898\u76EE\u94FE\u63A5")],-1),k={href:"https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&tqId=11156&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},v=s("\u725B\u5BA2\u7F51"),m=i(`<h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u9898\u76EE\u63CF\u8FF0</h2><p>\u4ECE\u5C3E\u5230\u5934\u53CD\u8FC7\u6765\u6253\u5370\u51FA\u6BCF\u4E2A\u7ED3\u70B9\u7684\u503C\u3002</p><p>![img](https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/f5792051-d9b2-4ca4-a234-a4a2de3d5a57.png&quot; width=&quot;300px&quot;&gt;</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h2><h3 id="_1-\u4F7F\u7528\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528\u9012\u5F52" aria-hidden="true">#</a> 1. \u4F7F\u7528\u9012\u5F52</h3><p>\u8981\u9006\u5E8F\u6253\u5370\u94FE\u8868 1-&gt;2-&gt;3\uFF083,2,1)\uFF0C\u53EF\u4EE5\u5148\u9006\u5E8F\u6253\u5370\u94FE\u8868 2-&gt;3(3,2)\uFF0C\u6700\u540E\u518D\u6253\u5370\u7B2C\u4E00\u4E2A\u8282\u70B9 1\u3002\u800C\u94FE\u8868 2-&gt;3 \u53EF\u4EE5\u770B\u6210\u4E00\u4E2A\u65B0\u7684\u94FE\u8868\uFF0C\u8981\u9006\u5E8F\u6253\u5370\u8BE5\u94FE\u8868\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u6C42\u89E3\u51FD\u6570\uFF0C\u4E5F\u5C31\u662F\u5728\u6C42\u89E3\u51FD\u6570\u4E2D\u8C03\u7528\u81EA\u5DF1\uFF0C\u8FD9\u5C31\u662F\u9012\u5F52\u51FD\u6570\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">printListFromTailToHead</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> listNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>listNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ret<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token function">printListFromTailToHead</span><span class="token punctuation">(</span>listNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ret<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>listNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u4F7F\u7528\u5934\u63D2\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u5934\u63D2\u6CD5" aria-hidden="true">#</a> 2. \u4F7F\u7528\u5934\u63D2\u6CD5</h3><p>\u5934\u63D2\u6CD5\u987E\u540D\u601D\u4E49\u662F\u5C06\u8282\u70B9\u63D2\u5165\u5230\u5934\u90E8\uFF1A\u5728\u904D\u5386\u539F\u59CB\u94FE\u8868\u65F6\uFF0C\u5C06\u5F53\u524D\u8282\u70B9\u63D2\u5165\u65B0\u94FE\u8868\u7684\u5934\u90E8\uFF0C\u4F7F\u5176\u6210\u4E3A\u7B2C\u4E00\u4E2A\u8282\u70B9\u3002</p><p>\u94FE\u8868\u7684\u64CD\u4F5C\u9700\u8981\u7EF4\u62A4\u540E\u7EE7\u5173\u7CFB\uFF0C\u4F8B\u5982\u5728\u67D0\u4E2A\u8282\u70B9 node1 \u4E4B\u540E\u63D2\u5165\u4E00\u4E2A\u8282\u70B9 node2\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u540E\u7EE7\u5173\u7CFB\u6765\u5B9E\u73B0\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>node3 <span class="token operator">=</span> node1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node3<span class="token punctuation">;</span>
node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![img](https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/58c8e370-3bec-4c2b-bf17-c8d34345dd17.gif&quot; width=&quot;220px&quot;&gt;</p><p>\u4E3A\u4E86\u80FD\u5C06\u4E00\u4E2A\u8282\u70B9\u63D2\u5165\u5934\u90E8\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86\u4E00\u4E2A\u53EB\u5934\u7ED3\u70B9\u7684\u8F85\u52A9\u8282\u70B9\uFF0C\u8BE5\u8282\u70B9\u4E0D\u5B58\u50A8\u503C\uFF0C\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u8FDB\u884C\u63D2\u5165\u64CD\u4F5C\u3002\u4E0D\u8981\u5C06\u5934\u7ED3\u70B9\u4E0E\u7B2C\u4E00\u4E2A\u8282\u70B9\u6DF7\u8D77\u6765\uFF0C\u7B2C\u4E00\u4E2A\u8282\u70B9\u662F\u94FE\u8868\u4E2D\u7B2C\u4E00\u4E2A\u771F\u6B63\u5B58\u50A8\u503C\u7684\u8282\u70B9\u3002</p><p>![img](https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/0dae7e93-cfd1-4bd3-97e8-325b032b716f-1572687622947.gif&quot; width=&quot;420px&quot;&gt;</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">printListFromTailToHead</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> listNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5934\u63D2\u6CD5\u6784\u5EFA\u9006\u5E8F\u94FE\u8868</span>
    <span class="token class-name">ListNode</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>listNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> memo <span class="token operator">=</span> listNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        listNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> listNode<span class="token punctuation">;</span>
        listNode <span class="token operator">=</span> memo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u6784\u5EFA ArrayList</span>
    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ret<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u4F7F\u7528\u6808" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528\u6808" aria-hidden="true">#</a> 3. \u4F7F\u7528\u6808</h3><p>\u6808\u5177\u6709\u540E\u8FDB\u5148\u51FA\u7684\u7279\u70B9\uFF0C\u5728\u904D\u5386\u94FE\u8868\u65F6\u5C06\u503C\u6309\u987A\u5E8F\u653E\u5165\u6808\u4E2D\uFF0C\u6700\u540E\u51FA\u6808\u7684\u987A\u5E8F\u5373\u4E3A\u9006\u5E8F\u3002</p><p>![img](https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/9d1deeba-4ae1-41dc-98f4-47d85b9831bc.gif&quot; width=&quot;340px&quot;&gt;</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">printListFromTailToHead</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> listNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>listNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>listNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        listNode <span class="token operator">=</span> listNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        ret<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function h(g,b){const a=e("ExternalLinkIcon");return p(),o(l,null,[d,r,n("p",null,[n("a",k,[v,c(a)])]),m],64)}var w=t(u,[["render",h],["__file","6. \u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868.html.vue"]]);export{w as default};
