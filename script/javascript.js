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

// If JavaScript is enabled, users will be forced to use the canonical
// URI scheme and host name. This should really be done with a
// server-side redirect, but I don't always have my website hosted
// somewhere where that's a possibility.
if (location.protocol !== "https:") {
	location.protocol = "https:";
}
