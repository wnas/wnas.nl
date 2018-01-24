---
layout: post
title:  "reDesign v7 (now without AJAX)"
date:   2007-6-6 10:00:00 +0100
categories: habari
---
After a couple of months, I decided to redesign (realign) my site yet again. I still rather like it. The illustration at the top is one of my personal favorites, not  in the least as I created it for the birth card of my youngest son 'Pieter'.

But there were some usability issues that concerned me. Not that I lost any sleep over it, but still. There was way to little crowd participation in the form of comments and stuff. People didn't find it easy enough to navigate to other pages and such. So I changed the whole bit. Keep reading to learn what I have changed, that you can see. But more importantly, <strong>why</strong>?

<!--more-->

The comments are now fixed on the left side, or at least for people who use decent browsers <em>(cough, not IE)</em> to make it easier to comment. After all, it saves you one click. In the previous version of the design, you had to click the link (which had a non obvious text), to get to a seperate comment page. That didn't quite made sense, didn't it. Now you can comment as you read.

Future versions will include the fixed comment for IE and a live preview of how your comments will display..

The links to the next and previous articles are

I removed the AJAX search box. Blasphemy, I hear the crowd shout, thou willst not remove any of the holy AJAX thingamics. And to make matters worse, in daily life, I implement that functionality. But let me explain my decision, so hear me out;

In the previous version of my design, the search box had a 'google suggest' kinda functionality. You typed and a max of 10 results dropped down below. Those results were reachable with the keyboard, so far so good. BUT, it didn't always work as planned in all of the browsers that I tested it in. And the results that you got were short and sometimes that hindered me. As I have always said, this is my site, so I  call the shots. So for my own purpose, a seperate page with the search results is more usable, the results are displayed with more detail, so I can have more information on which I can make my choice.

All of the css stuff is now standards and I have yet to implement some IE 6 and below fixes. The fixed comments are not fixed yet in IE 6 for instance and I think more things will tend to go wrong. At this moment I will not worry about it, as the majority of my readers do use a proper browser. I will create a seperate post, just to collect the comments on things that go wrong.