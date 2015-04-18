$(document).ready(function() {

//content here$(document).ready(function() {
	$("#moremenu").hide();
		//this is to get the submenu not to show when the page download, we only want it show when we hover
	$("#more").css('cursor', 'pointer');
		//css is an event that says change the css in this element when you hover over it 
	$("#more").click(function(){
		//when we hover over it, do this (with this being sleect moremenu and then the action toggle)
		$("#moremenu").toggle(300);
		//300 means the speed with which it happens (possibly by seconds)
	});

	$("p").hide();
		//this is to get the submenu not to show when the page download, we only want it show when we hover
	$(".see_more").css('cursor', 'pointer');
		//css is an event that says change the css in this element when you hover over it 
	$(".see_more").click(function(){
		//when we hover over it, do this (with this being sleect moremenu and then the action toggle)
		$(".see_more>p").toggle(300);
		//300 means the speed with which it happens (possibly by seconds)
	});

	$('#clickme').click(function(){
		$("#float_img>img").animate({"left": "200", "height": "900", "width": "900", "top": "-650"});
			//+=this will keep on moving it
		//means 200pixels are added to the left of the image
	});
	
	$("img").css('cursor', 'pointer');
	$("img").click(function(){
		$(this).animate({"height":"400", "width":"auto"});
	});

$("img").click(function(){
		if($(this).height()<399){
			$(this).animate({"height":"400", "width":"auto"});
		}
		else{
			$(this).animate({"height":"200", "width":"auto"});
		}
	});

}

	