$(function(){

	// スクロール
	$("#thumb_prev").on("click", function(){
		$("#thumb ul").animate({
			"marginLeft":"0"
		});
	});

	$("#thumb_next").on("click", function(){
		$("#thumb ul").animate({
			"marginLeft":"-930px"
		});
	});

	$("#photo_prev").on("click", function(){
		var id = $("#photo ul").data("id") - 1;

		if(id != -1){
			$("#photo ul").animate({
				"marginLeft": id * -780 + "px"
			});
			$("#photo ul").data("id", id);
		}
	});

	$("#photo_next").on("click", function(){
		var id = $("#photo ul").data("id") + 1;

		if(id != 6){
			$("#photo ul").animate({
				"marginLeft": id * -780 + "px"
			});
			$("#photo ul").data("id", id);
		}
	});

	// クリックして変更する

	 $("#thumb ul li").on("click", function(){

		var id = $("#thumb ul li").index(this) + 1;

		for(i = 0; i < 6; i++){
			$("#photo ul li").eq(i).children("img").attr("src", "lesson4/nail" + id + "/photo" + ( i + 1) + ".jpg");

			$("#photo ul").css("margin-left","0px");
		}

		$("#description").css("margin-left", (id - 1) * -800 + "px");
	 });

})
