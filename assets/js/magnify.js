(function( $ ) {
	$.fn.magnify = function( options ) {
		
		var settings = $.extend({
			original: '',
			magnifiedClass: '',
			magnifiedCSS: ''
		}, options);
		
		this.filter('img').each(function() {
			var i = $(this);
			var io = new Image();
			io.src = i.attr('src');
			io.onload = function() {
				var w = io.width;
				var h = io.height;
				
				i.wrap(document.createElement('div'));
				var m = document.createElement('div');
				m.className = settings.magnifiedClass;
				m.style.backgroundImage = "url('" + i.attr("src") + "')";
				var p = i.parent();
				p.append(m);
				p.mousemove(function(e){
					var div = $('div', this),
						img = $('img', this),
						o = $(this).offset();
					var mx = e.pageX - o.left;
					var my = e.pageY - o.top;
					
					if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0) {
						div.fadeIn(100);
					} else {
						div.fadeOut(100);
					}
					if(div.is(":visible")) {
						var rx = Math.round(mx/img.width()*w - div.width()/2)*-1;
						var ry = Math.round(my/img.height()*h - div.height()/2)*-1;
						div[0].style.backgroundPosition = rx + "px " + ry + "px";
						div[0].style.left = (mx - div.width()/2) + "px";
						div[0].style.top = (my + div.height()) + "px";
					}
				});
				p.mouseleave(function() {
					this.querySelectorAll('div').forEach(function(element){
						element.style.display = 'none';
					});
				});
			}
		});
	};
}( jQuery ));

$(document).ready(function(){
    $('.magnify-this').magnify({magnifiedClass:'magnify-lens'})
});