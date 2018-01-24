---
layout: post
title:  "CSS vs XSLT"
date:   2005-12-6 10:00:00 +0100
categories: habari
---
<em>Printing in css is the new Grey.</em>

Recently, I have been asked to look into printing with css at work. Luckily for me, right at that time came an article on alistapart called <a href="http://ww.alistapart.com/articles/boom">Printing a Book with CSS: Boom!</a>. This made me set up an discussion at work, XSLT FO vs CSS, with me as an css advocate.

We (I currently work for a dutch goverment department) now use xslt and fo to print documents and I for one, believe that xlst is way to big to be used only for this. CSS is in my opinion a much better tool, as it is simpler to write and maintain. XSLT is the way to go if you actually Transform anything, but if you are going to print stuff of a webpage you don't have to do this...

One disadvantage for xslt is the larger amount of code necessary for simple tasks.
See this xsl example:
<code>
&#60;xsl :template
  match="html:p[@class='copyright' and
ancestor::html:div[@class='head']]"
  priority="100"&#62;
  &#60;fo :block space-before="8pt"
            space-after="8pt"
            font-size="75%"&#62;
   &#60;xsl :apply-templates/&#62;
  &#60;/fo&#62;

</code>

And its css counterpart:
<code>
div.head p.copyright {
   margin-top: 8pt;
   margin-bottom: 8pt;
   font-size: 75%
}
</code>

Conclusion:

Which is better, that depends on the goal you wish to achieve, I vote for css. I will keep you informed of what happens at work...

surely with support for things like
<code>
page-break-after: always;
</code>
css has a good chance.

Also see the site of the <a href="http://www.w3.org/">W3C</a> for more information.