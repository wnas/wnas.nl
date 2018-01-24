---
layout: post
title:  "pop up window, with some added stuff"
date:   2006-10-27 10:00:00 +0100
categories: habari
---
The pages that I frequent are now talking about pop up windows, the coincedence is that I have been working on a unobtrusive solution myself. I took some stuff written by better javascripters than me (<a title="martin's page" href="http://www.windgazer.nl">Martin</a>,  <a title="domscripting" href="http://www.domscripting.com/book/sample/">Jeremy Keith</a> and <a title="ppk, whose book I am reading now." href="http://www.quirksmode.org">Peter-Paul Koch</a> among others) and together with a co-worker, Tino Loos, decided to add some things.

But first of, let me say, this is not a post about wether you <strong>should</strong> use popup's. My opinion is, that it should be avoided, but If you have to, do it correct. That is, using unobtrusive javascript and so on.

That being said, let's continue...<!--more-->

The stuff I thought were missing were, mostly, flexibility. So I went and added just that. In my script you not only can call a popup window, just by using a class "popup". You can also define its width and height, by adding the classes "w:800 h:500".

Nice one, isn't it...

Here are some examples, <a class="popup" title="martin's blog" href="http://pebble.windgazer.nl">a link without width or height set</a> and <a class="popup w:800 h:600" title="domscripting" href="http://www.domscripting.com">one</a> with the  width and height set.

In my next post I will explain what I (we) have done, in the meantime, go and check the code, to see for your self...

<strong>Next post</strong>
The javascript for the pop up window.

<strong>The one thereafter</strong>
How to get part of a className, namespaces anyone :)

<em>Maybe before that, a happy clog meeting report</em>

Later