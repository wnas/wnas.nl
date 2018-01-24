---
layout: post
title:  "Pagination script for jquery"
date:   2010-4-20 10:00:00 +0100
categories: habari
---
<p>A small script I wrote to do pagination, sorting and zebra-striping of a list.</p>
<p>As you can see we start of with a <strong>;</strong>, in case some sloppy programmer forgot to add it to the end of his function. Than as a first, we set our namespace as the first thing to do as we don't want to pollute the global namespace. The function is being set as a revealing module pattern.</p>
<pre><code>;var pagination = function () {</code></pre>
<p>We start with an object literal named <strong>config</strong> to contain the common variables, stuff we use more than once. These variables are private to this function only...</p>
<pre>	var config = {
		// default amount to be shown
		defAm : 15,
		// radio buttons for sorting
		sort : $('#sort input[type="radio"]'),
		sortFirst : $('#sort input[type="radio"]:first'),
		// several common classes
		hidden: 'hidden',
		sorted : 'sorted',
		active : 'active'
	};</pre>
<p>We than initiate the function, this is the only thing we make public at the end of this function.</p>
<pre>	var init = function ( t ) {
		// check the first radio, just in case ( to avoid problems )
		config.sortFirst.attr('checked','checked');
		// get the visible li's
		var amountSort = $( t +' li:visible').length;
		// go to the view function.
		view(t,amountSort);
		// go and initialize the sorting function...
		sort(t);
		// as a last thing we get and initiate the script to handle the history stuff.
		$.getScript('js/jquery.ba-hashchange.min',back(t));
	};</pre>
<p>We first start with hiding the list items that need not be shown, the next pages so to speak... When we have done that, we go and build the paging stuff..</p>
<pre>	var view = function ( t,amountSort ) {
		// hide all of the li's other than the ones on the first page.
		$(t+' li').removeClass('even');
		$(t+' li:visible:even').addClass('even');
		// substract 1 to get the correct amount to be shown...
		$(t+' li:visible:gt('+(config.defAm-1)+')').addClass( config.hidden );
		// go to paging.
		paging(t,amountSort);
	};</pre>
<p>We build the paging stuff and make it work.</p>
<pre>	var paging = function ( t,amountSort ) {
		// first we clean up all of the old pagination
		$('.pagination').remove();
		// we than get the amount of pages
		var nr = ((amountSort - ( amountSort % config.defAm ))/config.defAm)+1;
		// build the paging ul before the sort radiobuttons
		$('#sort').before('&lt;ul class="pagination"&gt;&lt;/ul&gt;');
		// loop through the pages, with the cool guy loop
		for ( var i = -1; ++i &lt; nr;){
			// append a li with an a to the ul.pagination for each page
			// and fill it with the correct number
			$('ul.pagination').append('&lt;li&gt;&lt;a href="#"&gt;'+(i+1)+'&lt;/li');
		}
		// make visible that there is an active page.
		$('ul.pagination li:first-child a').addClass( config.active);
		// if we click on a pagination link
		$('ul.pagination a').click( function (e) {
			// get the correct page to show
			// note the ,10) this makes sure we can't slip into octal mode...
			var link = parseInt( $(this).text(),10);
			showHide( t, link);
			// now we need to enable the back button...
			// we do this by setting the location for the hash tag plugin.
			window.location = window.location.toString().split('#')[0] + '#pagination' +link;
			// we stop the default action of the (fake) pagination link...
			return false;
		});
	};</pre>
<p>This function is wat we use to do the showing and hiding. Note the nice and short :) jQuery selector at the bottom.</p>
<pre>	var showHide = function (t,link) {
		// remove the active class
		$('ul.pagination li a').removeClass( config.active );
		// make the clicked one active
		$('ul.pagination li:nth-child('+(link)+') a').addClass( config.active );
		// show all of the li's
		$(t + ' li').removeClass( config.hidden );
		// hide all of the li's not on the correct 'page'
		// :) notice the nice and short jquery selector...
		// it's like this: t = the overall container list.
		// in there we find the li's without the class sorted = li:not(.sorted)
		// either before the number being calculated = :lt('+(link-1)*(config.defAm)+'),
		// note that the number comes from the object literal in config and is therefore easily altered.
		// or after that = '+t + ' li:not(.sorted):gt('+link*(config.defAm-1)+')')
		// and add a class to them...
		// this class also comes from config as I use it more than once..
		$(t+' li:not(.sorted):lt('+(link-1)*(config.defAm)+'), '+t+' li:not(.sorted):gt('+((link*config.defAm)-1)+')').addClass(config.hidden);
		console.log('lt = '+(link-1)*(config.defAm)+' | gt = '+(link*(config.defAm)))
	}</pre>
<p>Here we do the sorting, by checking a radio button, gettings it's value and using that to show list items with that class and hiding others.</p>
<pre>	var sort = function ( t ) {
		// on change
		config.sort.change( function () {
			// remove all of the sorted and hidden classes, thus making all li's visible
			$(t+' li').removeClass( config.sorted );
			$(t+' li').removeClass( config.hidden );
			// get the value of the radio that is checked.
			var v = $(this).val();
			// if we selected a filtering option
			if( !(v == 'nofilter')){
				// hide all of the not chosen li's
				$(t+' li:not(.'+v+')').addClass( config.sorted );
			}
			// go to the view function
			// the two arguments are the list and the amount of visible li's (before paging)
			view( t,$( t +' li:visible').length );
		});
	};</pre>
<p>This small function utilize the hashchange plugin to make the back buttons work when we page through the <em>pages</em></p>
<pre>	var back = function (t) {
		$(window).bind( 'hashchange', function(e) {
			var hash = location.hash || '#pagination1';
			showHide( t, hash.split('pagination')[1]);
		//	alert('movement...');
		});
	};</pre>
<p>Here we make the init function public.</p>
<pre>	return {
		init: init
	};
}();</pre>