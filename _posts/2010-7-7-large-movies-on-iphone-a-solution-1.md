---
layout: post
title:  "large movies on iphone - a solution"
date:   2010-7-7 10:00:00 +0100
categories: habari
---
<p><strong>Problem</strong></p>
<p>I recently came across a small problem. When trying to get a movie (using the html5 video tag ofcourse) I found out that the iPhone doesn't play movies larger than  640 x 480 pixels and with a base profile other than H.264. Don't believe me, but look at <a href="http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariWebContent/CreatingVideoforSafarioniPhone/CreatingVideoforSafarioniPhone.html#//apple_ref/doc/uid/TP40006514-SW9">their page</a>.</p>
<p>As the client really wanted his rather large movie on the page and did not wanted it to be scaled down a notch, I was presented with a challenge. He also really wanted it to work on his beloved iPhone... What is a guy to do?</p>
<p><strong>Solution</strong></p>
<p>After some time I came up with a solution and a rather simple one it is. I use the rather excellent <a id="html5media" href="http://github.com/etianen/html5media">html5media</a> script to get it to work in browsers without support for the video tag and want it to work in as many browsers as possible. So I already have two different sources in my video tag.</p>
<p>Like this:</p>
<pre><code>&lt;video
	poster="pathto/poster.png"
	width="780"
	height="470"
	controls
	preload&gt;
	&lt;source
		src="pathto/movie.ogv"
		type='video/ogg; codecs="theora, vorbis"'&gt;&lt;/source&gt;
	&lt;source
		src="pathto/movie.mp4"
		type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'&gt;&lt;/source&gt;
&lt;/video&gt;</code></pre>
<p>As the movie I tried to play was to big, the iPhone didn't wanted to play it. Turned out all I had to do was include a <strong>third</strong> source into the video tag, pointing to a iPhone specific file, like this:</p>
<pre><code>&lt;video
  poster="pathto/poster.png"
  width="780"
  height="470"
  controls
  preload&gt;
  &lt;source
    src="pathto/movie.ogv"
    type='video/ogg; codecs="theora, vorbis"'&gt;&lt;/source&gt;
  &lt;source
    src="pathto/movie.mp4"
    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'&gt;&lt;/source&gt;
  &lt;source
    <span style="color: red;"> src="pathto/movie.m4v"<br /></span>
    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'&gt;&lt;/source&gt;
&lt;/video&gt;</code></pre>
<p>Here you go, a solution to play large video's on your website, without compromising the quality for the desktop and still get it to work on the iPhone...</p>
<p>I hope this will help someone and if you have a better solution, please let me know...</p><strong>Links</strong><p>Some stuff I used to get the whole video she-bang working:</p><dl><dt><a href="http://camendesign.com/code/video_for_everybody">camendesign</a></dt><dd>This got me started</dd><dt><a href="http://github.com/etianen/html5media">html5media</a></dt><dd>And this is what I use now to get it to work.</dd></dl>