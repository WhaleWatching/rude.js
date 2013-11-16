/*
Rude.js

"Nice trick." --by users.

usage:
rude.helloUser([greating] )				Send our best greating to our users
rude.noRightClick()						Disable right click so users can not copy
rude.noDrag()							Disable users dragging photos or text to they can't copy them
rude.noSelect()							Disable users selecting text to they can't copy them
rude.dontLeave([message] )				Most users accidentally close the web page, remind them of this
rude.noCtrl()							Disable users copying text via shortcuts
rude.showBugs()							Show my bugs
rude.keepUpToDate()						Refresh the page in 10 sec so it stays up to date
rude.stayOnSite()						Open all links in a new window so users stay on the site
rude.copyToClipboard()					Copy the current url or a message to the clipboard automatically, only works in IE
rude.preventBack()						Prevent the user from using the back button
rude.kickUsersAss()						Run all rude.js functions

Copyright (c) 2013 Edward

Based on
	Annoying.js (http://kilianvalkhof.com/2011/javascript/annoying-js-how-to-be-an-asshole/) by Kilian Valkhof (kilianvalkhof.com)

Licensed under the MIT license. http://www.opensource.org/licenses/mit-license.php
*/

(function(window ){

	window.rude = {};
	rude.isSendedGreating = false;

	/* Send our best greating to our users */
	rude.helloUser = function(greating ){
		if(rude.isSendedGreating )
			return;
		if (typeof greating === 'undefined') {
			alert('I'm sending my greating for you.' );
			alert('I know you are really appreciate for this great message.' );
		}
		else{
			alert(greating );
		}
		rude.isSendedGreating = true;
	}

	/* Disable right click so users can not copy */
	rude.noRightClick = function(){
		document.oncontextmenu = function(){ return false; };
	}

	/* Disable users dragging photos or text to they can't copy them */
	rude.noDrag = function(){
		document.ondragstart = function(){ return false; };
	}

	/* Disable users selecting text to they can't copy them */
	rude.noSelect = function(){
		//no text selection, in IE, chrome and safari
		document.onselectstart = function(){
			if (event.srcElement.type != 'text' && event.srcElement.type != 'textarea' && event.srcElement.type != 'password') {return false; }
			else {return true; }
		}
		//no text selection, in Firefox
		document.onmousedown=function(e){
		  var obj=e.target;
		  if (obj.tagName.toUpperCase() == 'INPUT' || obj.tagName.toUpperCase() == 'TEXTAREA' || obj.tagName.toUpperCase() == 'PASSWORD') {return true; }
		  else {return false; }
		}
	}

	/* Most users accidentally close the web page, remind them of this */
	rude.dontLeave = function(msg ){
		if (typeof msg === 'undefined' ){
			if(window.onbeforeunload === null )
				window.onbeforeunload = function(){
					return 'Are you sure want to leave?';
				}
			else
				return;
		}
		else {
			window.onbeforeunload = function(){
				return msg;
			}
		}
	}

	/* Disable users copying text via shortcuts */
	rude.noCtrl = function(){
		window.onkeydown = function(e) {
			if(e.ctrlKey ){return false; }
		}
	}

	/* Show my bugs */
	rude.showBugs = function(){
		window.onerror = function(msg ){
			alert('ERROR!!!\nERROR!!!!\n' + msg );
		}
	}

	/* Refresh the page in 10 sec so it stays up to date */
	rude.keepUpToDate = function(){
		setTimeout(
		function(){window.location = window.location; },
		1000*10
		)
	}

	/* Open all links in a new window so users stay on the site */
	rude.stayOnSite = function () {
	for(var i in (a = document.getElementsByTagName('a')) ) {
		a[i].href = 'javascript:window.open(\'' + a[i].href + '\')';
		}
	}

	/* Copy the current url or a message to the clipboard automatically, only works in IE */
	rude.copyToClipboard = function (msg) {
	var text = location.href || msg;
		if (window.clipboardData && clipboardData.setData) {clipboardData.setData('text', text ); }
	}

	/* Prevent the user from using the back button */
	rude.preventBack = function () {
		history.forward();
		setTimeout('rude.preventBack()', 500 );
	}

	/* Run all rude.js functions */
	rude.kickUsersAss = function(){
		rude.helloUser();
		rude.noRightClick();
		rude.noDrag();
		rude.noSelect();
		rude.dontLeave();
		rude.noCtrl();
		rude.showBugs();
		rude.keepUpToDate();
		rude.stayOnSite();
		rude.copyToClipboard();
		rude.preventBack();
	}



}(window ));
