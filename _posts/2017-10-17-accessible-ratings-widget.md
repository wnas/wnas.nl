---
layout: post
title:  "Accessible Ratings widget"
date:   2017-10-17 10:00:00 +0100
categories: habari
---
<p>This week I needed to build a ratings widget, you know the one, one that says something got 2 out of 5 stars for something and needed to show that just with 2 black stars and 3 gray ones. That widget we all know and have been building for years, with images and lots of classes.</p><p>So I started thinking how to do one that has meaning to a person using assistive technology.</p><h4>What</h4><p>First up, what do we need to show? We are talking about something like this:</p>
<img src="../images/rating.png" alt="picture of the ratings widget" />
<p>What we need to figure out now is how to create this, using simple techniques.</p>
<h4>HTML</h4>
<p>What I want to do is create something that is more then a image and (important) easy to maintain. So I started with some simple HTML as my base.</p>
```
<span class="rating">
  <span class="score" data-val="2">Two</span>
  out of
  <span class="scale" data-val="3">five</span>
  stars
</span>
```
<p>This code will show no more and no less than what we need, that we have achieved two out of the three stars and it will read to people using assistive technologies.</p>
<h4>CSS</h4>
