---
layout: post
title:  "html5 video and chrome"
date:   2010-6-22 10:00:00 +0100
categories: habari
---
<script src="http://html5media.googlecode.com/svn/trunk/src/html5media.min.js"></script>
<p>Just found a weird <em>feature</em> in Google's chrome browser, version 5.0.375.70. It seems that if you put the ogg src before the mp4, it won't play...</p><pre><code>      &lt;video 
        class="video" 
        poster="http://wnas.nl/files/movie/example.jpg" 
        width="780" 
        height="470" 
        controls preload&gt;
          
          &lt;source 
            src="http://wnas.nl/files/movie/example.mp4" 
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'&gt;
          &lt;/source&gt;

		&lt;source 
           src="http://wnas.nl/files/movie/example.ogv" 
           type='video/ogg; codecs="theora, vorbis"'&gt;
          &lt;/source&gt;
    &lt;/video&gt;
  
</code></pre>
<video id="essent" width="390" height="235" preload="" controls="" poster="http://static.essent.nl/media/video/pre_loader.gif" class="video">
						<source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="http://static.essent.nl/media/video/mijn_essent_promo/mijn-essent.mp4"></source>    
						<source type="video/ogg; codecs=&quot;theora, vorbis&quot;" src="http://static.essent.nl/media/video/mijn_essent_promo/mijn-essent.ogv"></source>
						    
						</video>
<p>So you need to pay attention to one more thing when doing video and want it to work cross-browser...</p>
<video id="wilfredsmoking" width="320" height="240" preload="" controls="" poster="http://wnas.nl/files/movie/example.jpg" class="video">
<source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="http://wnas.nl/files/movie/example.mp4"></source><source type="video/ogg; codecs=&quot;theora, vorbis&quot;" src="http://wnas.nl/files/movie/example.ogv"></source></video><p><em>And yes, I am aware that it won't play in IE and I don't care :).</em> What I do care about is that the second video won't play in chrome for some reason, if anyone has a clue...</p><p>But what bothers me is that the iPhone won't play the thing if it's got a poster frame... So you need to omit that if you care about the iphone. I thought that they had that fixed with the ios4 upgrade, but apperently not...</p>
<video width="320" height="240" preload="" controls=""  class="video">
						   						    <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="http://wnas.nl/files/movie/example.mp4"> <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" src="http://wnas.nl/files/movie/example.ogv"></source>
</source>
						</video>