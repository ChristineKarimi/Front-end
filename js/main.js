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

