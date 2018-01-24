---
layout: post
title:  "programming tip&#8217;s (also for frontend?)"
date:   2007-5-7 10:00:00 +0100
categories: habari
---
I just read an interesting article by 'uncle jen' on (best) coding practices. It focuses more on C and cocoa apps, but I think that these tips will work for javascript and css just as well. Here is one:
<a href="http://mooseyard.com/Jens/2007/05/uncle-jenss-coding-tips/" title="uncle-jenss-coding-tips" rel="external"><blockquote>â€œthe main person youâ€™re writing comments for is yourself, six months in the future.â€?</blockquote></a>
Maybe it is time that we  front-end people realised that we are not so different and that we need to grow up. (saying that in a ' do as I say, not as I do' kinda way.) I mean, for the most part the front end code that I see and , to be perfectly honest, some that I deliver is not very wel crafted. I mean, take a look at some of the code that I am working with right now:
<code>
#k-192-560-1 {
  width: 195;
  margin: 0px;
}</code>
The basic idea was very simple, I see that (as you can). The developer started from a graphic design of some sort and thought: ' this part is divided into two column's of 192 and 560 pixels wide'. And on they went, naming some vital part of the code completly wrong. Omitting values and inserting them in places where they aren't needed.
The fun thing is that people don't do these things to bug you, but still. The naming is far from semanticly correct and now is second on my list. The problem which these people hadn't considered was that different browsers show things differently.
A utterly new concepts I found out some 10+ years  ago...
And after you go through a couple of box models, the naming doesn't quite makes sense anymore. And don't even start about a different graphic design in a few years or months...
The first place on my list is (still going strong) <strong><code>.alignRight {
text-align: left;
}</code></strong>
Do any of you have simular examples, to share, please do. Or do you wish to tell me about any of the mistakes you made in the past...