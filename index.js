var timg = document.getElementsByClassName("video")[0].getElementsByTagName("img")[0];
var lis0 = document.getElementsByClassName("bd")[0].getElementsByTagName("li");
for(var i = 0; i < lis0.length; i++) {
	lis0[i].index = i;
	lis0[i].onmouseover = function() {
		changeli(this.index);
		count = this.index + 1;
		timg.src = "images/top-" + count + ".jpg";
	}
}

function changeli(a) {
	for(var i = 0; i < 5; i++) {
		lis0[i].className = '';
	}
	lis0[a].className = 'curli';
}

var lis = document.getElementsByClassName("tab")[0].getElementsByTagName("li");
var divs = document.getElementsByClassName("content")[0].getElementsByClassName("cdiv");

for(var i = 0; i < lis.length; i++) {
	lis[i].index = i;
	lis[i].onmouseover = function() {
		show(this.index);
	}
}

function show(a) {
	for(var i = 0; i < lis.length; i++) {
		lis[i].className = '';
		divs[i].className = 'cdiv';
	}
	lis[a].className = "curli";
	divs[a].className = divs[a].className + " curdiv";
}

var lishou = document.getElementsByClassName("shoufengqin")[0].getElementsByTagName("li");
var shouclass = ['shengong', 'yushan', 'zhongjian', 'badao'];
for(var i = 0; i < lishou.length; i++) {
	lishou[i].index = i;
	lishou[i].onmouseover = function() {
		shoufengqin(this.index);
	}
}

function shoufengqin(a) {
	for(var i = 0; i < lishou.length; i++) {
		lishou[i].className = shouclass[i];
	}
	lishou[a].className += ' cur';
}

/****************************************************************
     SONP - Smooth ONePage Scroll - Simple JS based on JQuery

     - Section sizes
     - Smooth scroll
     - Sections navigation
     - Parallax effect
     - One simple JS file (no more)

     Author: Tales Luna - http://taleslunadev.com/

 ****************************************************************/

var pagesMax = 0;
$(document).ready(function() {
	var pages = ["官网首页", "游戏资讯", "游戏特色", "职业介绍", "大国风范", "返回顶部"];
	// Create navigation list
	$("body").append("<ul class='sonp-navigation-menu'></li></ul>");

	// Define section classes
	$(".sonp-section").each(function(index) {
		$(this).addClass("sonp-section-" + index);
		pagesMax++;
		// Add section on navigation list
		$(".sonp-navigation-menu").append("<li class='sonp-navigation-item' data-section='" + index + "'>" + pages[index] + "</li>");

	});
	$(".sonp-navigation-menu").append("<li class='sonp-navigation-item' data-section='0'>" + pages[pagesMax] + "</li>");
	// Item navigation list event
	$(".sonp-navigation-item").click(function() {
		var section = $(this).attr("data-section");
		$("html, body").stop().animate({
			scrollTop: $(".sonp-section-" + section).offset().top
		}, 1000);
		pageIndex = section;
	});

	// Define CSS default styles...
	$(this).defineCss();

});

// Control scroll time
var time = new Date().getTime();

// Scroll events (mouse and keys)
$(window).bind("keydown.key40 DOMMouseScroll mousewheel", function(event) {

	event.preventDefault();

	// Update time
	var now = new Date().getTime();

	// Check page refresh. (F5)
	if(event.keyCode == 116) {
		location.reload();
	}

	// Check time of scrolling...
	if(now - time >= 100) {
		time = now;
		// Down event
		if(event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 || event.keyCode == 40) {
			// Next section element
			$(".sonp-section").nextPage();
		} else if(event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 || event.keyCode == 38) {
			// Previous section element
			$(".sonp-section").prevPage();
		}

		event.stopPropagation();
	} else {
		time = now;
		return 0;
	}

});

// Section index number/position
pageIndex = 0;

// Next section function
$.fn.nextPage = function() {

	if(pageIndex < pagesMax - 1) {

		pageIndex++;

		var top = $(this).next(".sonp-section-" + pageIndex).offset().top;
		$("html, body").stop().animate({
			scrollTop: top
		}, 1000);

	}

};

// Previous section function
$.fn.prevPage = function() {

	if(pageIndex > 0) {

		pageIndex--;

		var top = $(this).prev(".sonp-section-" + pageIndex).offset().top;
		$("html, body").stop().animate({
			scrollTop: top
		}, 1000);

	}

};

// Define styles...
$.fn.defineCss = function() {

	// Width and Height 100% //
	$("html, body").css({
		"width": "100%",
		"height": "100%"
	});

	// Remove scrollbar
	$(".no-scroll").css({
		"overflow": "hidden"
	});

	// Define small size to element (200px)
	$(".sonp-small").each(function() {
		$(this).css({
			"width": "100%",
			"height": "200px"
		});
	});
	$(".sonp-zz").each(function() {
		$(this).css({
			"width": "100%",
			"height": "440px"
		});
	});

	// Define middle size to element (50%)
	$(".sonp-middle").each(function() {
		$(this).css({
			"width": "100%",
			"height": "50%"
		});
	});
	$(".sonp-zidingyi").each(function() {
		$(this).css({
			"width": "100%",
			"height": "385px"
		});
	});

	// Define full size to element (100%)
	$(".sonp-full").each(function() {
		$(this).css({
			"width": "100%",
			"height": "100%"
		});
	});

	// Realize parallax effect
	$(".sonp-parallax").each(function() {

		var parallax = $(this);

		$(window).scroll(function() {
			var scrollPosition = -($(window).scrollTop() / 5);

			var imagePosition = '50% ' + scrollPosition + 'px';

			parallax.css('background-position', imagePosition);

		});
	});
};

// Print console logs...
log = function(text) {
	console.log(text);
};

! function(t) {
	function i(i, e) {
		this.$container = i,
			this.options = t.extend({
				startSlide: 0,
				item: ".hiSlider-item",
				isFullScreen: !1,
				isFlexible: !1,
				isSupportTouch: "__proto__" in {},
				isShowPage: !0,
				isShowTitle: !0,
				titleAttr: "data-title",
				isShowControls: !0,
				isAuto: !0,
				intervalTime: 5e3,
				affectTime: 300,
				mode: "move",
				direction: "left",
				onSwipeStart: t.noop,
				onSwipeMove: t.noop,
				minSwipeLength: 30,
				onSwipeCancel: t.noop,
				onSwipeEnd: t.noop,
				onSwipeLeft: t.noop,
				onSwipeRight: t.noop,
				onSwipeTop: t.noop,
				onSwipeBottom: t.noop,
				onInited: t.noop,
				onMoveBefore: t.noop,
				onMoveAfter: t.noop,
				onSelected: t.noop
			}, e), this.init()
	}
	i.prototype = {
		init: function() {
			this.$item = this.$container.find(this.options.item), this.size = this.$item.size(), this.curIndex = this.options.startSlide, this.setLayout(), this.playTimer = null, this.options.isAuto && this.autoPlay(), this.options.isFlexible && t(window).on("resize.hiSlider", t.proxy(this, "resize")), this.options.isSupportTouch && this.touch()
		},
		touch: function() {
			var t = this,
				i = {},
				e = this.options,
				o = e.minSwipeLength;
			this.$container.on("touchstart", function(t) {
				var o = t.originalEvent.touches[0];
				i.x1 = o.pageX, i.y1 = o.pageY, e.onSwipeStart.call(this, i)
			}).on("touchmove", function(t) {
				var o = t.originalEvent.touches[0];
				i.x2 = o.pageX, i.y2 = o.pageY, e.onSwipeMove.call(this, i)
			}).on("touchend", function(n) {
				if(i.x2 && Math.abs(i.x1 - i.x2) > o || i.y2 && Math.abs(i.y1 - i.y2) > o) {
					var s = t.swipeDirection(i.x1, i.x2, i.y1, i.y2);
					e["onSwipe" + s].call(this, i), t.moveTo(s), e.onSwipeEnd.call(this, i)
				} else e.onSwipeCancel.call(this, i);
				i = {}
			})
		},
		moveTo: function(t) {
			var i = this,
				e = i.options.direction;
			"top" == e ? "Bottom" == t ? i[i.options.mode + "Prev"]() : "Top" == t && i[i.options.mode]() : "left" == e && ("Right" == t ? i[i.options.mode + "Prev"]() : "Left" == t && i[i.options.mode]())
		},
		swipeDirection: function(t, i, e, o) {
			var n = Math.abs(t - i),
				s = Math.abs(e - o);
			return n >= s ? t - i > 0 ? "Left" : "Right" : e - o > 0 ? "Top" : "Bottom"
		},
		move: function() {
			var t, i = this;
			i.options.isAuto && i.autoPlay(), ++i.curIndex == i.size && (i.curIndex = 0, i.$container.css(i.getMove()), i.curIndex++), i.setTitle(), i.setPages(), t = i.curIndex == i.size - 1 ? 0 : i.curIndex, i.options.onMoveBefore.call(i.$container, i.$item, t), i.$container.stop(!1, !0).animate(i.getMove(), i.options.affectTime, function() {
				i.options.onMoveAfter.call(this, i.$item, t)
			})
		},
		movePrev: function(t) {
			var i = this;
			1 != t && ("move" == i.options.mode ? 0 == i.curIndex && (i.curIndex = i.size - 1, i.$container.css(i.getMove())) : 0 == i.curIndex && (i.curIndex = i.size), i.curIndex--), i.options.isAuto && i.autoPlay(), i.setTitle(), i.setPages(), i.options.onMoveBefore.call(i.$container, i.$item, i.curIndex), i.$container.stop(!1, !0).animate(i.getMove(), i.options.affectTime, function() {
				i.options.onMoveAfter.call(this, i.$item, i.curIndex)
			})
		},
		getMove: function(t) {
			var i = {},
				e = this.getSize(),
				o = this.options.direction;
			return "top" == o ? (i.top = -this.curIndex * e.height, t && (i.width = e.width)) : (i.left = -this.curIndex * e.width, t && (i.height = e.height)), i
		},
		fade: function() {
			var t = this;
			t.options.isAuto && t.autoPlay(), t.curIndex++, t.curIndex > t.size - 1 && (t.curIndex = 0), t.setTitle(), t.setPages(), t.options.onMoveBefore.call(t.$container, t.$item, t.curIndex), t.$item.fadeOut(t.options.affectTime).eq(t.curIndex).fadeIn(t.options.affectTime, function() {
				t.options.onMoveAfter.call(this, t.$item, t.curIndex)
			})
		},
		fadePrev: function(t) {
			var i = this;
			1 != t && ("move" == i.options.mode ? 0 == i.curIndex && (i.curIndex = i.size - 1, i.$container.css(i.getMove())) : 0 == i.curIndex && (i.curIndex = i.size), i.curIndex--), i.options.isAuto && i.autoPlay(), i.setTitle(), i.setPages(), i.options.onMoveBefore.call(i.$container, i.$item, i.curIndex), i.$item.fadeOut(i.options.affectTime).eq(i.curIndex).fadeIn(i.options.affectTime, function() {
				i.options.onMoveAfter.call(this, i.$item, i.curIndex)
			})
		},
		setPages: function() {
			if(this.options.isShowPage && this.$pages) {
				var i = this.curIndex;
				i == this.size - 1 && "move" == this.options.mode && (i = 0), t("a", this.$pages).eq(i).addClass("active").siblings().removeClass("active")
			}
		},
		setTitle: function() {
			if(this.options.isShowTitle && this.$title) {
				var i = this.$item.eq(this.curIndex);
				this.$title.html(t.isFunction(this.options.titleAttr) ? this.options.titleAttr.call(i, this.curIndex) : i.attr(this.options.titleAttr))
			}
		},
		setLayout: function() {
			var i = (this.options, this.getSetCss());
			this.$item.css(i.item), this.$container.css(i.container).wrap('<div class="hiSlider-wrap"/>'), this.$wrap = this.$container.parent(), this.$wrap.css(i.wrap), this.options.isShowTitle && (this.$title = t('<div class="hiSlider-title"/>').insertAfter(this.$container), this.setTitle()), this.options.isShowPage && (this.$pages = t('<div class="hiSlider-pages">' + this.getPages() + "</div>").insertAfter(this.$container), this.pagesSwitch()), this.options.isShowControls && (this.$prev = t('<a href="javascript:;" class="hiSlider-btn-prev">prev</a>'), this.$next = t('<a href="javascript:;" class="hiSlider-btn-next">next</a>'), this.$container.after(this.$prev.add(this.$next)), this.controlsSwitch()), "move" == this.options.mode ? (this.$container.append(this.$item.eq(0).clone().addClass("item-clone")), this.$item = this.$container.find(this.options.item), this.size = this.$item.size()) : this.setFade(), this.options.onInited.call(this.$container, this.$item, this.options.startSlide)
		},
		resize: function() {
			var t, i = this;
			clearTimeout(t), t = setTimeout(function() {
				i.$wrap.add(i.$item).css(i.getSize(i.options.direction)), i.$container.css(i.getMove(!0))
			}, 300)
		},
		setFade: function() {
			this.$item.hide().eq(this.curIndex).show()
		},
		getSetCss: function() {
			var t = this.getSize(),
				i = {},
				e = Math.min(this.options.startSlide, this.size);
			return "fade" == this.options.mode ? (t.position = "absolute", i.height = t.height, i.width = t.width) : ("top" == this.options.direction ? (i.height = 100 * (this.size + 1) + "%", i.width = t.width, i.top = -(e * t.height)) : (i.height = t.height, i.width = 100 * (this.size + 1) + "%", i.left = -(e * t.width), t["float"] = "left"), i.position = "relative"), {
				item: t,
				container: i,
				wrap: {
					overflow: "hidden",
					position: "relative",
					width: t.width,
					height: t.height
				}
			}
		},
		autoPlay: function() {
			var i = this;
			this.$item.length <= 1 || (clearTimeout(i.playTimer), i.playTimer = setTimeout(t.proxy(i, i.options.mode), i.options.intervalTime))
		},
		controlsSwitch: function() {
			var i = this;
			this.$next.on("click", t.proxy(i, i.options.mode)), this.$prev.on("click", t.proxy(i, i.options.mode + "Prev"))
		},
		pagesSwitch: function() {
			if(this.options.isShowPage && this.$pages) {
				var i = this;
				t("a", this.$pages).on("click", function() {
					t(this).hasClass("active") || (i.curIndex = t(this).index(), i.options.onSelected.call(this, i.curIndex), i[i.options.mode + "Prev"](!0))
				})
			}
		},
		getPages: function() {
			var i = [],
				e = this.curIndex;
			return t(this.$item).each(function(t) {
				var o = t == e ? 'class="active"' : "";
				i.push('<a href="javascript:;" ' + o + ">" + (t + 1) + "</a>")
			}), i.join("")
		},
		getSize: function() {
			var i, e = this.$item.eq(0);
			if(this.options.isFullScreen) i = {
				width: t(window).width(),
				height: t(window).height()
			};
			else if(this.options.isFlexible) {
				var e = this.$wrap ? this.$wrap.parent() : this.$container.parent();
				i = "top" == this.options.direction ? {
					height: e.height()
				} : {
					width: e.width()
				}
			}
			return i || {
				width: e.width(),
				height: e.height()
			}
		}
	}, t.fn.hiSlider = function(e) {
		return this.each(function() {
			t(this).data("mr.slider", new i(t(this), e))
		}), this
	}
}(window.jQuery);

$('.hiSlider1').hiSlider({
	intervalTime: 3000,
	isShowTitle: false
});
$('.hiSlider2').hiSlider({
	intervalTime: 3000
});