---
layout: post
title:  "Questions for the fronteers exam, a preview."
date:   2008-9-4 10:00:00 +0100
categories: habari
---
<p>As I am working on the questions for the written part of the '<a href="http://fronteers.nl">fronteers</a> <a href="http://fronteers.nl/vereniging/commissies/diplomering">certification</a>', I had (and still have) a lot of difficulty in deciding the level of questions that would be appropriate. To easy is not good, but to hard would also be bad. So how does one figure out the correct level is on questions. One thing is certain, not by himself that is.</p>
<p>That is why we had a test exam a couple of weeks ago, we learned a lot from that. As that how you ask a question is as important as the question itself. If you have a question that can be interpreted a little bit different, people will. Test subject were every bit like clients in that respect, I can tell you that much. Thank god that we have one teacher in our midst, he will help a lot in that respect...</p><p>So for your amusement, I will present a couple of questions to you, some that made it to the exam, some that didn't. If you want to take those as a quick test I would recommend that you would take them without google assistance, as that would be the case in the real world...</p>
<h3>CSS 2.1</h3>
<ol>
<li>
					<p>Welke kleur wordt de paragraaf (<code>p</code>) met deze CSS.</p>
					<p lang="en">What color does the paragraph (<code>p</code>) become with this CSS.</p>
					<pre><code>p { color : red; }
body p { color: green; }
.foo p { color: black; }</code></pre>
					<label for="fr3a"><input type="radio" id="fr3a" name="fr3" value="a" />red</label>
					<label for="fr3b"><input type="radio" id="fr3b" name="fr3" value="b" />green</label>
					<label for="fr3c"><input type="radio" id="fr3c" name="fr3" value="c" />black</label>
				</li>
	<li>
					<p>Welk element wordt rood, met deze HTML,</p>
					<p lang="en">Which element(s) becomes red with this HTML,
					<pre><code>p ~ div + h2[title] { color: red; }</code></pre>
					<p>En deze html</p>
					<pre><code>&#60;p&#62;paragraaf&#60;/p&#62;
&#60;div&#62;division&#60;/div&#62;
&#60;h2 id="a"&#62;heading A&#60;/h2&#62;
&#60;div&#62;
	&#60;h2 id="b"&#62;heading B&#60;/h2&#62;
&#60;/div&#62;
&#60;h2 id="c" title="title"&#62;header C&#60;/h2&#62;</code></pre>
					<label for="fr7a"><input type="radio" id="fr7a" name="fr7" value="a" />heading A</label>
					<label for="fr7b"><input type="radio" id="fr7b" name="fr7" value="c" />heading C</label>
					<label for="fr7c"><input type="radio" id="fr7c" name="fr7" value="b" />heading B</label>
				</li>
<li>
					<p>Hoe breed is deze <code>div</code> in totaal, met deze CSS?</p>
					<p lang="en">How wide is this <code>div</code>, with this CSS?</p>
					<pre><code>div { width : 100px; padding: 10px; border: 1px; }</code></pre>
					<label for="fr5a"><input type="radio" id="fr5a" name="fr5" value="a" />100px</label>
					<label for="fr5b"><input type="radio" id="fr5b" name="fr5" value="b" />111px</label>
					<label for="fr5c"><input type="radio" id="fr5c" name="fr5" value="c" />122px</label>
				</li>
</ol>
<h3>XHTML 1.0 strict</h3>
<ol><li><p>Welke tag geeft een geordende lijst?</p>
					<p lang="en">Which tag creates an ordered list?</p>
					<label for="frx1a"><input type="radio" id="frx1a" name="frx1" value="a"><code>&#60;ul&#62;</code></label>
					<label for="frx1b"><input type="radio" id="frx1b" name="frx1" value="b"><code>&#60;ol&#62;</code></label>
				</li>
				
				<li><p>Is de onderstaande code valide XHTML 1.0 strict ?</p>
					<p lang="en">Is this code valid XHTML 1.0 strict?</p>
					<pre><code>&#60;img src="foo.gif" title="title / description" &#62;</code></pre>
					<label for="frx2a"><input type="radio" id="frx2a" name="frx2" value="a">ja</label>
					<label for="frx2b"><input type="radio" id="frx2b" name="frx2" value="b">nee</label>
				</li><li>
					<p>Waar staat de <code>dt</code> tag voor?</p>
					<p lang="en">Where does the <code>dt</code> tag stand for?</p>
					<label for="frx8a"><input type="radio" id="frh8a" name="frh8" value="a">document type</label>
					<label for="frx8b"><input type="radio" id="frh8b" name="frh8" value="b">definition term</label>
				</li>
</ol>
<h3>HTML 4.0 strict</h3>
	<ol>
				<li>
					<p>Is de <code>body</code> tag verplicht?</p>
					<p lang="en">Is the <code>body</code> tag required ?</p>
					<label for="frh1a"><input type="radio" id="frh1a" name="frh1" value="a">ja</label>
					<label for="frh1b"><input type="radio" id="frh1b" name="frh1" value="b">nee</label>
				</li>
				<li>
					<p>Is de afsluitende <code>/p</code> tag verplicht?</p>
					<p lang="en">Is the closing <code>/p</code> tag required ?</p>
					<label for="frh2a"><input type="radio" id="frh2a" name="frh2" value="a">ja</label>
					<label for="frh2b"><input type="radio" id="frh2b" name="frh2" value="b">nee</label>
				</li>
				<li>
					<p>Is deze html valide HTML 4.0 strict?</p>
					<p lang="en">Is this HTML valid HTML 4.0 strict?</p>
					<pre><code>&#60;TR width=100 &#62;</code></pre>
					<label for="frh3a"><input type="radio" id="frh3a" name="frh3" value="a">ja</label>
					<label for="frh3b"><input type="radio" id="frh3b" name="frh3" value="b">nee</label>
				</li>
			</ol>
<p>All of these questions are right out of the specifications of the <a href="http://w3.org">W3C</a> as those are easily testable and not open to discussion.</p>
<p>What do you think, are these questions too easy, too hard or something else. Please let me know, I will try and put a full exam online in working order before <a href="http://fronteers.nl/congres/2008">Fronteers 2008</a> but as things are going now, I probably won't have the time. This because I will leave for london and <a href="http://www.vivabit.com/atmediaAjax/">@media ajax</a> only two days after fronteers and still have some clients to keep happy...</p> 