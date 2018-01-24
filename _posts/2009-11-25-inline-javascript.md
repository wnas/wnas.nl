---
layout: post
title:  "Inline JavaScript"
date:   2009-11-25 10:00:00 +0100
categories: habari
---
<p>As we all know, or should know, the usage of inline JavaScript is not done. For various reasons, it blocks the rendering of your page, it is bad for maintenance and so on.</p><p>There is however, one notable exception to this rule. Sometimes it can be usefull to know if you have JavaScript enabled, so you can hide certain elements that depend on a user action. For instance, you have a login button that, when clicked, shows you a box for your username and password with a login button. You don't want to hide this with <abbr title="Cascading StyleSheets">CSS</abbr>, so you would do that with javascript. Which you have put at the bottom of your html, just as <a href="http://www.stevesouders.com/" rel="met">sir Souders</a> ordained. So at document ready the script kicks in and hides the right element. As this is not noticable on a fast site, sometimes the user can see a Flash of Unstyled Content.</p><p>So to countermand that, you can set a class on the <code><abbr title="Hyper Text Markup Language">HTML</abbr></code> element to let the CSS know that it has to hide the correct stuff.</p>
<pre><code>&#60;script type="text/javascript"&#62;
	document.documentElement.className += ' js-on';
&#60;/script&#62;</code></pre><p>With this in place you can write CSS to rely on the JavaScript and not have a Flash of  Unstyled Content. In my opinion this is the <strong>only</strong> correct usage of Inline JavaScript.</p>
