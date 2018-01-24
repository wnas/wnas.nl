---
layout: post
title:  "@font-face not working without custum .htaccess declaration"
date:   2010-1-14 10:00:00 +0100
categories: habari
---
<p>I recently started using @font-face in a major website. The time has come to free ourselves from the shackles of the webfonts. I got the chance to host the fonts on a amazon s3 cloudfront instance. Really fast and with the '<a href="http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/">bullet-proof @font-face</a>' solution of Paul Irish I decided to give it a go.</p><p>So I started testing and everything looked very promising, even the <span title="Flash Of Unstyled Text">FOUT</span> wasn't too bad. But when we got around to implementing it in the real templates for the site, my esteemed colleague <a href="http://oudenniel.nl">Maarten</a> found a flaw.</p><p>It seems that the .otf file that we use isn't being read properly in Firefox, but instead gives a weird error.</p>
<pre><code>Failed to load source for: http://wnas.nl/fonts/FrescoStd-Normal.otf </code></pre> 
<p>Safari uses the same .otf file and displays it properly. But with this CSS:</p>
<pre><code>@font-face { 
  font-family:'FrescoStdNormalRegular';
  src: url('http://wnas.nl/fonts/FrescoStd-Normal.eot');
  src: local('no local - Fresco Std Normal Regular'),local('no local-FrescoStd-Normal'), 
  url('http://wnas.nl/fonts/FrescoStd-Normal.woff') 
    format('woff'), 
  url('http://wnas.nl/fonts/FrescoStd-Normal.otf') 
    format('opentype'), 
  url('http://wnas.nl/fonts/FrescoStd-Normal.svg#FrescoStd-Normal') 
    format('svg'); 
}
#test{
	font-family:FrescoStdNormalRegular,courier;
}</code></pre>

<p id="font-face-test">FrescoStdNormalRegular,courier;</p>
<p>Firefox, as you can see, just doesn't render the font, can anyone help me and point out what I am doing wrong? Please let me know in the comments...</p>
<h3>Update</h3>
<p>It seems that this does work on my website, but not locally... Here is a <a href="http://wnas.nl/fonts/font-face.htm">test page</a> where I get two different responses from firefox 3.5.7 on os X 10.6.2.</p>
<ul><li>on the Imac it says : The resource from this URL is not text: http://wnas.nl/fonts/FrescoStd-Normal.otf</li><li>And the macbook pro says: Failed to load source for: http://wnas.nl/fonts/FrescoStd-Normal.otf</li></ul><p>Get the source <a href="http://wnas.nl/fonts/font-face.htm.zip">from here</a> and let me know what happens on your machines through the comments or <a href="http://twitter.com/wnas">twitter</a>.</p>
<h3>#WIN</h3>
<p>Thanks to <a href="http://twitter.com/jwellner">Jeroen</a> who at least does some research, before asking the rest to help, we have a <a href="http://twitter.com/jwellner/status/7752012903">cause</a> and a <a href="#sol">solution</a>. On the <a href="http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/">mozzilla</a> page about font-face it states:</p>
<q>By default, Firefox 3.5 only allows fonts to be loaded for pages served from the same site. </q>
<p>So you should set this in your .htaccess file and you're right as rain.</p>
<pre><code># example Apache .htaccess file to add access control header
 
&#60;FilesMatch "\.(ttf|otf)$"&#62;
&#60;IfModule mod_headers.c&#62;
Header set Access-Control-Allow-Origin "*"
&#60;/IfModule&#62;
&#60;/FilesMatch&#62;</code></pre>
<p>Thanks everybody for helping, I hope someone else benefits from this as well. I just learned something new, the main reason I really like my job!</p>