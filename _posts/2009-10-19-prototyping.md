---
layout: post
title:  "Prototyping"
date:   2009-10-19 10:00:00 +0100
categories: habari
---
	<style type="text/css">.choice{display:none;font-size:3em;}fieldset{border:0;}</style>
	<p>Here is a simple help to get you to choose the right method of prototyping a website:</p>
	<fieldset>
		<legend>Prototype method</legend>
		<p>Is this site being made for the internet?</p>
		<input type="radio" name="internet" id="yes" /><label for="yes">yes</label>
		<input type="radio" name="internet" id="no" /><label for="no">no</label>
	</fieldset>
	<strong id="html" class="choice">HTML</strong>
	<strong id="ps" class="choice">Photoshop</strong>
<script type="text/javascript" src="http://wnas.nl/scripts/jquery.js"></script>
	<script type="text/javascript">jQuery(document).ready(function() {		$('#yes').click(function(){$('.choice').hide();$('#html').show();});	$('#no').click(function(){$('.choice').hide();$('#ps').show();});});</script>