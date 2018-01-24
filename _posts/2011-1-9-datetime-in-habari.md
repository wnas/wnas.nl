---
layout: post
title:  "Datetime in habari"
date:   2011-1-9 10:00:00 +0100
categories: habari
---
<p>Right now I am reading the most excellent <a href="http://introducinghtml5.com/">book</a> by the esteemed <a href="http://twitter.com/brucel" rel="met">Bruce Lawson</a> and his partner in crime <a href="http://twitter.com/rem" rel="met">Remy Sharp</a>. I must say, to start with, that is a great read, which has me <a href="http://twitter.com/#!/wnas/status/24025721936547840">whipping</a> out my laptop. Even on a sunday morning, before my 2nd breakfast, which is really uncommon. I even started to hack away at this site, just for the heck of it...</p><p>And that is the small thing that I wanted to share with you. I don't know why but I haven't gotten around to properly adding the time attribute to this site, even though I got it in #html5 for quite some time now. Somehow it didn't happen, but anyway, here is the code to add it in <a href="http://habariproject.org/en/">habari</a>.</p><pre><code>&#60;time 
  datetime="&#60;?php echo $post-&#62;pubdate-&#62;text_format('{Y}-{m}-{d}'); ?&#62;" 
  pubtime&#62;
    &#60;?php echo $post-&#62;pubdate-&#62;
      text_format('&#60;span&#62;{M}&#60;/span&#62; 
                   &#60;span&#62;{d}&#60;/span&#62;, 
                   &#60;span&#62;{Y}&#60;/span&#62;'); 
    ?&#62;
&#60;/time&#62;</code></pre>
<p>It's just a small bit, but I hope it is of help to someone who uses habari...</p>
<p><em>It's visible content is in dutch / european order, but I'm sure you can change that to suit yours...</em></p>