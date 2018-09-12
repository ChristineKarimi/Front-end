function myFunction() {
	var checkBox = document.getElementById("men"); // MENS CLOTHES SECTION
	var text = document.getElementById("menclothes");
	if (checkBox.checked == true) {
		menclothes.style.display = "block";
	} else {
		menclothes.style.display = "none";
	}



	var checkBox = document.getElementById("women"); // WOMENS CLOTHES SECTION
	var text = document.getElementById("womenclothes");
	if (checkBox.checked == true) {
		womenclothes.style.display = "block";
	} else {
		womenclothes.style.display = "none";
	}


	var checkBox = document.getElementById("children"); // CHILDREN CLOTHES SECTION
	var text = document.getElementById("childrenclothes");
	if (checkBox.checked == true) {
		childrenclothes.style.display = "block";
	} else {
		childrenclothes.style.display = "none";
	}

	document.getElementById("btn").innerHTML = ""; //SEE ALL PRODUCTS BUTTON

}



/*scroll to top*/

$(document).ready(function () {
	$(function () {
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			scrollDistance: 300, // Distance from top/bottom before showing element (px)
			scrollFrom: 'top', // 'top' or 'bottom'
			scrollSpeed: 300, // Speed back to top (ms)
			easingType: 'linear', // Scroll to top easing (see http://easings.net/)
			animation: 'fade', // Fade, slide, none
			animationSpeed: 200, // Animation in speed (ms)
			scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
			//scrollTarget: false, // Set a custom target element for scrolling to the top
			scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
			scrollTitle: false, // Set a custom <a> title if required.
			scrollImg: false, // Set true to use image
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});