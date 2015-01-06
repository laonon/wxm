/**
 * 根据设备的像素密度比率来动态添加meta标签和设置html基准字号
 */
;(function(win) {

	var isRetina = win.devicePixelRatio >= 2 ? true : false;
	var scale = isRetina ? 0.5 : 1;
	var root = document.documentElement;
	var dw =  window.screen.width;
	var tagMeta = document.createElement('meta');
	var baseFontSize = 10;

	//添加meta标签
	tagMeta.setAttribute('name', 'viewport');
	tagMeta.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	if (root.firstElementChild) {
		root.firstElementChild.appendChild(tagMeta);
	}

	//设置基准字号
	if(isRetina){
		root.style.fontSize = baseFontSize*2*(dw/320) + 'px';
	}else{
		root.style.fontSize = baseFontSize*(dw/320) + 'px';
	}

})(window);