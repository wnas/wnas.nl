---
layout: post
title:  "A sad day - Opera will support -webkit prefixes"
date:   2012-4-25 10:00:00 +0100
categories: habari
---
<p>Today something which I consider sad happened, Opera announced that it will be supporting some -webkit prefixes. (<a href="http://www.netmagazine.com/news/opera-confirms-webkit-prefix-usage-121923">netmagazine.com</a>) They do so, because:</p>
<blockquote>
<p>cannot reasonably choose to remain incompatible with a significant part of the web, when it's technically simple to enable the features that these websites are using</p></blockquote><p>I think this is wrong, for the same reasons that Opera thinks it is right. Don't get me wrong, I sort of understand why they do this and I have the utmost respect for the Opera people. The reason they are doing this is that developers are writing :</p><pre><code>-webkit-foo: bar;</code></pre><p>While they should be writing:</p><pre>
<code>-webkit-foo:bar;
-o-foo:bar;
-ms-foo:bar;
-moz-foo:bar;
foo:bar;</code></pre>
<p>While I think that trying to get sites to work is a good thing and one that Opera is very good at, I think that supporting -webkit prefixes will not help getting people write proper code, which this is all about. It is only helping the <em>bad seeds</em> that will not be motivated to write good code, code for the web, <strong>NOT</strong> for browsers.</p>
<p>I can't help but think of the <a href="http://en.wikipedia.org/wiki/Browser_wars#The_first_browser_war">first</a> browser wars, when the majority was writing for Internet Explorer and only a small group wrote for the web (<a href="http://en.wikipedia.org/wiki/Asterix">Asterix</a> anyone?) and in the end we won. Or so we thought... I hope that now a larger group will do the right thing and write for the web, and not for browsers.</p>
<p data-twit="operawebkit">So will you join me and write to the specs, do the right thing? I hope you do...</p>