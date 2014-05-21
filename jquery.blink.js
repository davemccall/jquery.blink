/*
* blink
*
* Puts the blink tag back on the table.
*
* http://www.dave-mccall.com/
*
* Usage:
*  <blink>Awesome</blink>
*
* Released under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {
	$(document).ready(function () {
		$("blink").each(function () {
			var $tag = $(this);
			window.setInterval(function () {
				if ($tag.css("opacity") == 1)
					$tag.css("opacity", 0);
				else
					$tag.css("opacity", 1);
			}, 500);
		});
	});
})(jQuery);