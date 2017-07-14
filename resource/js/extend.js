define("extend",["jquery"],function($){
	$.fn.extend({
		floor:function(selector){
			var $aFloor = $(selector).children().eq(0).children();
			var $aCtrl = this.children().eq(0).children();
			$aCtrl.click(function(){
				var that=this;
				$("body,html").stop().animate({
					scrollTop:$aFloor.eq($(that).index()).offset().top
				})
			});
		}
	});
});
