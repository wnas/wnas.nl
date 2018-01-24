---
layout: post
title:  "chromium bug"
date:   2010-5-10 10:00:00 +0100
categories: habari
---
<p><img style="float: right; margin-right: -100px;" title="images.jpeg" src="http://wnas.nl/user/files/images_20100510085318.jpeg" border="0" alt="images.jpeg" width="106" height="120" />I read an interesting tweet just now by <a href="http://twitter.com/ilinsky/statuses/13744604447">Sergey ilinsky﻿</a>, saying that his bug report to Chromium was being ignored. A bug that let's you include css only for <del>chrome</del> <ins>WebKit</ins> browsers, like apple's safari and google's chrome. Look here for the <a href="http://wnas.nl/files/chromebug/index.html">example page.</a>, the text is red in <del>chromium</del> <ins>WebKit</ins> and black in other browsers. The HTML is valid in case you're wondering, so you won't catch it that way.</p>
<p>All you have to do is to write a phony include that only <del>chromium</del> <ins>WebKit</ins> browser ( today ) will detect and act upon. Like this:</p>
<pre><code>
&lt;link type="<strong>custom/mime+type</strong>"<br />rel="stylesheet" <br />href="css/chromehack.css" /&gt;
</code></pre>
<p>The type="<strong>custom/mime+type</strong>" is what does the magic. <del>Chromium</del> <ins>WebKit</ins> browsers will request the file from the server and add it to the document. What should happen is that browser shouldn't fetch the file or process it for that matter. The chrome team responded with a status: <strong>WontFix</strong>, which is wrong in my opinion. People will use this to write css to over come <em><del>chromium</del> <ins>WebKit</ins> bugs</em> instead of learning what it is they are doing wrong.</p>
<p>The reasoning of the chromium team is:</p>
<blockquote cite="http://code.google.com/u/jon@chromium.org/">
<p>Darin, given the number of web sites this would likely break I don't think we want to be this strict.  If you disagree then I will re-open this.</p>
</blockquote>
<p>I think that there is something to be said about this reasoning, but I am one of those people that wants browsers to be very, very strict... I understand that browsers don't want to "break the web", after all, who remembers the outrage that ensued when microsoft released version 7 of IE. A lot of people blamed IE for their own sloppy coding, breaking bad websites.</p>
<h3>Why should this be fixed?</h3>
<p>A lot of people write css to work around browser bugs, when they should go out and read the <a href="http://www.w3.org/TR/CSS2/">specifications</a>. Very often I see people complain about bugs, they have done something wrong in their <a href="http://wnas.nl/invalid-html">HTML</a>. So when I see a reaction like the wontfix by chromium I think that a lot of people still will take the <em>easy</em> way out and choose the hack, instead of learning to do it the right way. Not knowing that they are walking a fine line, utilizing a "feature" in a browser which may be fixed at any moment, thus rendering their <em>fixes</em> obsolete.</p>
<p>So I hope that they will fix this soon, after all building browsers to allow sloppy coding is encouraging that very thing in my opinion. And yes, I know that the "we render anything you code, even our own front page garbage" is what made IE6 the greatest browser in it's time. But in the end it slowed down the web, as people were not encouraged to write proper code, but got away with building crap.</p>
<h3>Update</h3>
<p><a href="http://blog.getify.com/">Kyle</a> made an excellent point in his <a href="http://wnas.nl/chromium-bug#comment-18947">comment</a>. This is a <strong>WebKit</strong> bug or feature. The browser does not do anything wrong, as this is not being specified. So browsers can do what they want with it. He even makes some good points on how we could be using this. Still I am not conviced and urge people <strong>not</strong> to use this, as it will come back and bite you somewhere...</p>