---
layout: post
title:  "Previous element selector in javaScript"
date:   2011-7-22 10:00:00 +0100
categories: habari
---
<p>In my current project I got it again, an itch for a <em>Previous</em> selector. It will be very helpful when you don't have the freedom to fully control your HTML you are working with.</p><p>I mean we have next sibling, general sibling and direct child, why can't we have <em>previous</em> child or while we're at it, direct parent. So I want something to complement these…</p>
```
foo > bar { }
/* child combinators
	<a href="http://www.w3.org/TR/css3-selectors/#child-combinators">spec</a>
*/

foo ~ bar { }
/* general sibling
	<a href="http://www.w3.org/TR/css3-selectors/#general-sibling-combinators">specs</a>
*/

foo + bar { }
/* adjacent sibling selector
	<a href="http://www.w3.org/TR/css3-selectors/#adjacent-sibling-combinators">specs</a>
*/

/* what I want is a previous selector, like this */
foo - bar { }

/* and a parent selector… */
foo &#60; bar
```
<p>The problem is browsers now, I've been told that it is really hard to implement. So while we are waiting on something that may never come, we might as well work on a <em>make shift</em> solution. I've build on in javascript and put it on <a href="https://github.com/wnas/jquery-plugins/tree/master/previousSelector">Github</a>. It's pretty simple and I'm sure that somebody can improve upon it.</p>
<h2>Update </h2>
<p>See this <a href="http://james.padolsey.com/javascript/extending-jquerys-selector-capabilities/">article</a> on extending jQuery's selector capabilities too. / thanks to <a href="twitter.com/eising">@eising</a>.</p>
