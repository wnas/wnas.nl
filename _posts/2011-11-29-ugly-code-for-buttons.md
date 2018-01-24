---
layout: post
title:  "ugly code for buttons"
date:   2011-11-29 10:00:00 +0100
categories: habari
---
<p>Just a quick warning, if you are the person responsible for this kind of code, I will tell your mom. I really will.</p>
<pre><code>&#60;span 
	class="button-active" 
	id="xf-384"&#62;
	&#60;div 
		id="x176901972nav-button" 
		class="xbl-component xbl-fr-button"&#62;
		&#60;span 
			id="x176901972nav-button$xf-1369" 
			class="yui-button yui-push-button xforms-group"&#62;
			&#60;span 
				class="first-child"&#62;
				&#60;button 
					id="x176901972nav-button$xf-1370" 
					class="xforms-control xforms-trigger" 
					type="button" 
					tabindex="0"&#62;
					Uw gegevens
				&#60;/button&#62;
			&#60;/span&#62;
		&#60;/span&#62;
	&#60;/div&#62;
&#60;/span&#62;</code></pre>
<p>This is wrong on so many levels, I can't even begin to describe it. The CSS written to style this is even worse. The sad thing is that this could be done, with just the <strong>frigging</strong> <code>button</code> and nothing else.</p><p>I can't even think of a reason why someone would want to do this, other than complete contempt for the world. This is obviously being written by someone who thinks front end code is very hard to do, like a java developer.</p><p><strong>Quick piece of advice</strong>, hire a decent front end developer and don't do it your self…</p><p><small>The sad thing is that I saw this on a governmental site, so tax payers will pay for this incompetence.</small></p><p>The proper code for this should of course be this:</p>
<pre><code>&#60;button 
	id="x176901972nav-button$xf-1370"&#62;
	Uw gegevens
&#60;/button&#62;</code></pre><p data-twit="uglybuttons">Although I think the id could be more logical, but I'll give the back end guys that…</p>