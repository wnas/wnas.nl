---
layout: post
title:  "Adjacent Sibling Selectors with jQuery"
date:   2007-1-25 10:00:00 +0100
categories: habari
---
As I may or may not have told you, I love <a href="http://www.jquery.com" title="jquery">jQuery</a> for its simple syntax. Not that is suitable to replace common (heavy) tasks as striping big tables, because of the speed difference. I mean, dom scripting is still way faster than (to my knowledge) any library.
But it's simple syntax makes it suitable to let non javascript people use it.
As I am leaving a project half way, I have a lot of loose ends. But jQeury lets me leave people with some good building blocks to finish the work.
In this project I employ all the possibilities of css, including <a href="http://www.w3.org/TR/REC-CSS2/selector.html#adjacent-selectors" title="adjacent sibling selectors">Adjacent Sibling Selectors</a> even though they <strong>don't</strong> work in IE.
Here is where jQuery comes to the rescue, with one simple line of code we make IE behave
<code>$("#a + b").addClass("foo");</code>
This is where jQuery shines, it let's people just do stuff.
<em>However, it is still a bit scary, putting guns in the hands of children. See <a href="http://www.quirksmode.org/blog/archives/2007/01/again_javascrip.html" title="js libraries">this</a> article by Peter-Paul Koch, where he collects and reviews quite a few good opinions.</em>