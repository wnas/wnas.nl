---
layout: post
title:  "Link dump - front end testing"
date:   2015-1-15 10:00:00 +0100
categories: habari
---
  <h1>Front end testing</h1>
  <p>Today I will be looking at front end testing, below are some links</p>
  <h2>Articles</h2>
  <dl>
    <dt><a href="http://fourword.fourkitchens.com/article/series/casperjs">Testing with casper.js</a></dt>
    <dd><p>Enter <a href="#casper">CasperJS</a>, a functional testing tool for the frontend. It is built upon JavaScript, the language we’re already using to power the web. It’s easy to learn and just as versatile as the browser itself.</p></dd>
    <dt><a href="http://mattsnider.com/using-phantomcss-for-regression-testing-your-css/">Using PhantomCSS for Regression Testing Your CSS</a></dt>
    <dd><p><a href="#phantom">PhantomCSS</a> uses CasperJS, built on PhantomJS as a testing framework with screenshot capabilities, and ResembleJS to compare images.</p></dd>
    <dt><a href="https://github.com/jrcryer/grunt-pagespeed">grunt-pagespeed</a></dt><dd><p><a href="#grunt">Grunt</a> plugin to run Google PageSpeed Insights as part of CI</p></dd>
    <dt><a href="https://github.com/macbre/phantomas">Phantomas</a></dt><dd><p>Phantomas
is a PhantomJS-based
web performance metrics tool</p></dd>
  <dt><a href="https://github.com/rupl/frontend-testing/blob/gh-pages/examples/grunt/perfbudget/Gruntfile.js">grunt-perfbudget</a></dt><dd><p>Tim Kadlec, who first suggested performance budgets, recently released this tool to help teams meet their goals.</p></dd><dt><a href="https://github.com/BBC-News/wraith#wraith">Wraith</a></dt><dd><p>Wraith uses either Phantom or Slimer (your choice) to take screenshots of two environments, producing a visual diff of the two screenshots.</p></dd>
  <dt><a href="http://www.hook42.com/blog/wraith-tutorial-designers-and-others-new-front-end-ops">Wraith tutorial for designers </a></dt><dd><p>With new responsive websites, it's more important than ever to look at your site at different widths. But this can be time consuming and repetitive. Also, you may want to see how your dev site compares to your live site - for example "Did this small change I made to the css on one page change much on other pages?" Again, time consuming to do by hand. Luckily for us, here comes Wraith to the rescue! </p></dd>
  <dt><a href="https://ghostinspector.com/">Ghost Inspector</a></dt><dd><p>Automated test recording for Casper, not free though.</p><p>Your code has to be public though, not behind a firewall or on an intranet...</p></dd>
<dt><a href="https://drupalize.me/blog/201410/using-remote-debugger-casperjs-and-phantomjs">Remote debug casper</a></dt>
<dd><p>If you use casper extensively, you could do with a debugger.</p></dd>
<dt><a href="https://speakerdeck.com/nathanbirrell/visual-regression-testing-with-huxley">Huxley</a></dt><dd><p><a href="#huxley">Huxley</a> is a test-like system for catching visual regressions in Web applications.</p><p>Looks nice, but is no longer maintained...</p></dd>
   
  </dl>
  <h2>Resources</h2>
  <ul><li><a id="casper" href="http://casperjs.org/">Casper.js</a></li><li><a id="phantom" href="https://github.com/Huddle/PhantomCSS">PanthomCSS</a></li>
  <li><a id="grunt" href="http://gruntjs.com/">Grunt</a></li>
  <li><a href="http://rubyinstaller.org/">Ruby installer for Windows</a></li>
  <li><a id="huxley" href="https://github.com/facebookarchive/huxley">huxley</a></li>