---
layout: post
title:  "Unobtrusive dynamic select boxes (revisited)"
date:   2007-3-7 10:00:00 +0100
categories: habari
---
Quite a while back I wrote about the <a href="http://wnas.nl/bobbyvandersluiscom-unobtrusive-dynamic-select-boxes" title="previous article">unobtrusive dynamic select boxes</a>, a wonderfull technique by <a href="http://www.bobbyvandersluis.com/articles/unobtrusivedynamicselect.php" title="bobby van der sluis">Bobby van der Sluis</a> (a fellow dutchman and happy clog). I said that I wanted to use them and I have. But after a while I came upon some limitations for use in the real world.
In this post I will describe those limitations and how I changed the code to suit my needs.
<!--more-->The original code made use of Id's to identify the dropdowns and placed those Id's in the javascript code. When implementing them, I did so in web applications where the Id is owned by the back end guys. These guys often (think) that they absolutely need them and can not life without the sole ownership of the Id.
Further more, the dependancy of the id's that are hard coded in the javascript set limitations on the html code that I have to produce. And it limits the amount of dynamic selects that I can use on a page to one set. Not that it is necessaryly smart to use a lot of dynamic select boxes in a user interface kinda way.
But if you see the trend of the web these days, with one page applications. The need to include more than one set on a single page is getting more real each day.
So to come to the point, I changed the code to depend not on Id's but on certain classnames. That sets me free to include as much sets as I want in a application.
See the code here
<a href='http://www.wnas.nl/files/unobtrusive-drop/uds.js' title='Unobtrusive dynamic select boxes (code)'><code>code</code></a>. I did my best to describe what I did in the comments, so read those and try to improve on it. Please let me know what you think...
There are two functions that are needed to make this work, first getElementsByTagName by <a href="http://www.snook.ca/" title="jonathan snook">Jonathan Snook</a> and <a href="http://www.robertnyman.com/" title="robert nyman">Robert Nyman</a>   and a addition of my own (together with tino loos), GetElementValueFromClassName.
Get the code here<a href='http://www.wnas.nl/files/unobtrusive-drop3/tools.js' title='tools'><code>tools</code></a>
See if you can use it, but believe me, you can use it in more ways than you can think of now.
For instance, use Ajax to fill the dropdowns, to easily drill down into loads of data, without letting your user wait.

<!-- technorati tags begin -->
<p class="tags">technorati tags:
<a href="http://technorati.com/tag/javascript" rel="tag">javascript</a>, <a href="http://technorati.com/tag/unobtrusive" rel="tag">unobtrusive</a>, <a href="http://technorati.com/tag/css" rel="tag">css</a>, <a href="http://technorati.com/tag/html" rel="tag">html</a>, <a href="http://technorati.com/tag/internet" rel="tag">internet</a>, <a href="http://technorati.com/tag/ajax" rel="tag">ajax</a></p>
<!-- technorati tags end -->