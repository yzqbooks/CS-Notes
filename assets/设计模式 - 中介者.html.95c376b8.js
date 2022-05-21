import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c,a as n,b as e,F as l,e as i,d as s}from"./app.5ce5af5d.js";const u={},d=i(`<h2 id="_5-\u4E2D\u4ECB\u8005-mediator" tabindex="-1"><a class="header-anchor" href="#_5-\u4E2D\u4ECB\u8005-mediator" aria-hidden="true">#</a> 5. \u4E2D\u4ECB\u8005\uFF08Mediator\uFF09</h2><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>\u96C6\u4E2D\u76F8\u5173\u5BF9\u8C61\u4E4B\u95F4\u590D\u6742\u7684\u6C9F\u901A\u548C\u63A7\u5236\u65B9\u5F0F\u3002</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><ul><li>Mediator\uFF1A\u4E2D\u4ECB\u8005\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3\u7528\u4E8E\u4E0E\u5404\u540C\u4E8B\uFF08Colleague\uFF09\u5BF9\u8C61\u901A\u4FE1\u3002</li><li>Colleague\uFF1A\u540C\u4E8B\uFF0C\u76F8\u5173\u5BF9\u8C61</li></ul><p><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/30d6e95c-2e3c-4d32-bf4f-68128a70bc05.png" alt="img"></p><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><p>Alarm\uFF08\u95F9\u949F\uFF09\u3001CoffeePot\uFF08\u5496\u5561\u58F6\uFF09\u3001Calendar\uFF08\u65E5\u5386\uFF09\u3001Sprinkler\uFF08\u55B7\u5934\uFF09\u662F\u4E00\u7EC4\u76F8\u5173\u7684\u5BF9\u8C61\uFF0C\u5728\u67D0\u4E2A\u5BF9\u8C61\u7684\u4E8B\u4EF6\u4EA7\u751F\u65F6\u9700\u8981\u53BB\u64CD\u4F5C\u5176\u5B83\u5BF9\u8C61\uFF0C\u5F62\u6210\u4E86\u4E0B\u9762\u8FD9\u79CD\u4F9D\u8D56\u7ED3\u6784\uFF1A</p><p><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/82cfda3b-b53b-4c89-9fdb-26dd2db0cd02.jpg" alt="img"></p><p>\u4F7F\u7528\u4E2D\u4ECB\u8005\u6A21\u5F0F\u53EF\u4EE5\u5C06\u590D\u6742\u7684\u4F9D\u8D56\u7ED3\u6784\u53D8\u6210\u661F\u5F62\u7ED3\u6784\uFF1A</p><p><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/5359cbf5-5a79-4874-9b17-f23c53c2cb80.jpg" alt="img"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Alarm</span> <span class="token keyword">extends</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mediator<span class="token punctuation">.</span><span class="token function">doEvent</span><span class="token punctuation">(</span><span class="token string">&quot;alarm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAlarm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doAlarm()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CoffeePot</span> <span class="token keyword">extends</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mediator<span class="token punctuation">.</span><span class="token function">doEvent</span><span class="token punctuation">(</span><span class="token string">&quot;coffeePot&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doCoffeePot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doCoffeePot()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Calender</span> <span class="token keyword">extends</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mediator<span class="token punctuation">.</span><span class="token function">doEvent</span><span class="token punctuation">(</span><span class="token string">&quot;calender&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doCalender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doCalender()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sprinkler</span> <span class="token keyword">extends</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mediator<span class="token punctuation">.</span><span class="token function">doEvent</span><span class="token punctuation">(</span><span class="token string">&quot;sprinkler&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSprinkler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doSprinkler()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">doEvent</span><span class="token punctuation">(</span><span class="token class-name">String</span> eventType<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteMediator</span> <span class="token keyword">extends</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Alarm</span> alarm<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">CoffeePot</span> coffeePot<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Calender</span> calender<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Sprinkler</span> sprinkler<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ConcreteMediator</span><span class="token punctuation">(</span><span class="token class-name">Alarm</span> alarm<span class="token punctuation">,</span> <span class="token class-name">CoffeePot</span> coffeePot<span class="token punctuation">,</span> <span class="token class-name">Calender</span> calender<span class="token punctuation">,</span> <span class="token class-name">Sprinkler</span> sprinkler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>alarm <span class="token operator">=</span> alarm<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>coffeePot <span class="token operator">=</span> coffeePot<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>calender <span class="token operator">=</span> calender<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sprinkler <span class="token operator">=</span> sprinkler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doEvent</span><span class="token punctuation">(</span><span class="token class-name">String</span> eventType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>eventType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;alarm&quot;</span><span class="token operator">:</span>
                <span class="token function">doAlarmEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;coffeePot&quot;</span><span class="token operator">:</span>
                <span class="token function">doCoffeePotEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;calender&quot;</span><span class="token operator">:</span>
                <span class="token function">doCalenderEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token function">doSprinklerEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAlarmEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        alarm<span class="token punctuation">.</span><span class="token function">doAlarm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        coffeePot<span class="token punctuation">.</span><span class="token function">doCoffeePot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        calender<span class="token punctuation">.</span><span class="token function">doCalender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sprinkler<span class="token punctuation">.</span><span class="token function">doSprinkler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doCoffeePotEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doCalenderEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSprinklerEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Alarm</span> alarm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Alarm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CoffeePot</span> coffeePot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CoffeePot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Calender</span> calender <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Calender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Sprinkler</span> sprinkler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprinkler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Mediator</span> mediator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteMediator</span><span class="token punctuation">(</span>alarm<span class="token punctuation">,</span> coffeePot<span class="token punctuation">,</span> calender<span class="token punctuation">,</span> sprinkler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u95F9\u949F\u4E8B\u4EF6\u5230\u8FBE\uFF0C\u8C03\u7528\u4E2D\u4ECB\u8005\u5C31\u53EF\u4EE5\u64CD\u4F5C\u76F8\u5173\u5BF9\u8C61</span>
        alarm<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">doAlarm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">doCoffeePot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">doCalender</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">doSprinkler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3>`,21),r=s("All scheduleXXX() methods of "),k={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Timer.html",target:"_blank",rel:"noopener noreferrer"},v=s("java.util.Timer"),m={href:"http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html#execute-java.lang.Runnable-",target:"_blank",rel:"noopener noreferrer"},b=s("java.util.concurrent.Executor#execute()"),f=s("submit() and invokeXXX() methods of "),h={href:"http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ExecutorService.html",target:"_blank",rel:"noopener noreferrer"},y=s("java.util.concurrent.ExecutorService"),g=s("scheduleXXX() methods of "),w={href:"http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ScheduledExecutorService.html",target:"_blank",rel:"noopener noreferrer"},_=s("java.util.concurrent.ScheduledExecutorService"),j={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Method.html#invoke-java.lang.Object-java.lang.Object...-",target:"_blank",rel:"noopener noreferrer"},C=s("java.lang.reflect.Method#invoke()");function x(E,S){const a=p("ExternalLinkIcon");return o(),c(l,null,[d,n("ul",null,[n("li",null,[r,n("a",k,[v,e(a)])]),n("li",null,[n("a",m,[b,e(a)])]),n("li",null,[f,n("a",h,[y,e(a)])]),n("li",null,[g,n("a",w,[_,e(a)])]),n("li",null,[n("a",j,[C,e(a)])])])],64)}var M=t(u,[["render",x],["__file","\u8BBE\u8BA1\u6A21\u5F0F - \u4E2D\u4ECB\u8005.html.vue"]]);export{M as default};
