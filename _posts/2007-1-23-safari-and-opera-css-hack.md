---
layout: post
title:  "Safari and Opera CSS hack"
date:   2007-1-23 10:00:00 +0100
categories: habari
---
As you may or not may know, I am not too fond of css hacks. The necessary IE conditional comment aside, I tend to avoid them. But something a standardista must do what he has to do in order to make things work.

To serve a style sheet to safari and opera only, I came across a simple hack. Instead of using

<code>
&#60;link rel="stylesheet" type="text/css" href="style.css" /&#62;
</code>

use this instead

<code>
&#60;link rel="stylesheet" type="foo/css" href="safari.css" /&#62;
</code>

This sets you up with a style sheet which is only read by safari and opera. As long as they don't fix it that is.

As long as it works, and I can't stress this enough so I will say it again

<strong>As long as it works</strong>
<p><em>Update, this doesn't work in safari 3.0 beta mac, in windows I haven't been able to test it, but I guess  that It won't work there either. Don't worry though, the hack was mostly usefull to overcome safari's inability to style input elements, something that safari 3.0 can.</em></p>

It will give you a way to serve seperate stylesheets to just about any browser today. Use the <a title="safari hack" href="http://www.ibloomstudios.com/article1/">safari # hack</a> by adding a # after a semi colon, to exclude stuff for safari and therefor giving opera the styles it needs (to escape possible safari/opera problems). Use <a href="http://www.quirksmode.org/css/condcom.html" title="conditional comments">conditional comments</a> for IE's different versions and give firefox what it needs (that is valid css) and your in business.

<em>I came across this hack when developing 'internet aangifte' for the dutch police, as it needed to work in just about any browser available, which is a good thing. The only problem is that we haven't been able (yet) to fix apache struts invalid rendering of the hidden input tag. So the site is not valid xhtml, which is a pity...</em>