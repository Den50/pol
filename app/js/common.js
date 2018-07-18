$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	// Coords objects
	// $(".objects").childs.each(function(item){
	// 	console.log(item);
	// });
	var w_width = window.innerWidth;
	var w_height = window.innerHeight;
	console.log(w_width, w_height);
	var arr = document.getElementsByClassName("objects")[0].children;
	for(var i = 0;i < arr.length;i++){
		var str = arr[i].attributes[1].value;

		if(str.split(",")[2] == "%"){
			var x = +str.split(",")[0];
			var y = +str.split(",")[1];

			// procents ->
			document.getElementsByClassName("object")[i].style.left = (w_width / 100 * x) + "px";
			document.getElementsByClassName("object")[i].style.top = (w_height / 100 * y) + "px";
		}
		else if(str.split(",")[2] == "px"){
			var x = +str.split(",")[0];
			var y = +str.split(",")[1];

			document.getElementsByClassName("object")[i].style.left = x + "px";
			document.getElementsByClassName("object")[i].style.top = y + "px";
		}

		// console.log(i, (w_width / 100 * x) + "px");
		// console.log(i, (w_height / 100 * y) + "px");
		// console.log(50 / w_width);
		// console.log(50 /w_height);

		

	}
});
