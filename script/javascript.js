/*
	<https://y.st./>
	Copyright © 2015-2016 //y.st. <mailto:copyright@y.st>

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org./licenses/>.
*/

// Redirect bad URIs to the main page. Bad URIs either aren't using TLS
// ("http:" instead of "https:") or they're using the wrong host name.
// This should be done via HTTP redirects, not JavaScript, but that
// isn't available on all hosts.
if(window.location.href.substring(0, 14) != "https://y.st./") {
	window.location.replace("https://y.st./");
}

// This function causes the left and right arrow keys to load previous
// and next pages in a sequence. As of writing, this is only used on
// the weblog pages.
function document__onkeyup(event) {
	switch(event.keyCode) {
		case 37: // left arrow key
			var anchor = document.querySelector("a[rel=prev]");
			if(anchor) {
				document.location.href = anchor.getAttribute("href");
			}
		break;
		case 39: // right arrow key
			var anchor = document.querySelector("a[rel=next]");
			if(anchor) {
				document.location.href = anchor.getAttribute("href");
			}
		break;
	}
}
document.onkeyup = document__onkeyup;
