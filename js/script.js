setInterval(function() {
	var w_kegiatan = new Date("Sep 26, 2019, 09:00:00").getTime();
	var sekarang = new Date().getTime();
	var jarak = w_kegiatan - sekarang;
	var hari = Math.floor(jarak/(1000*60*60*24));
	var jam = Math.floor((jarak%(1000*60*60*24))/(1000*60*60));
	var menit = Math.floor((jarak%(1000*60*60))/(1000*60));
	var detik = Math.floor((jarak%(1000*60))/(1000));
	if(hari <= 0 && jam <= 0 && menit <= 0 && detik <= 0) {
		document.getElementsByClassName("hari")[0].innerHTML = 0;
		document.getElementsByClassName("jam")[0].innerHTML = 0;
		document.getElementsByClassName("menit")[0].innerHTML = 0;
		document.getElementsByClassName("detik")[0].innerHTML = 0;
	}
	else {
		document.getElementsByClassName("hari")[0].innerHTML = hari;
		document.getElementsByClassName("jam")[0].innerHTML = jam;
		document.getElementsByClassName("menit")[0].innerHTML = menit;
		document.getElementsByClassName("detik")[0].innerHTML = detik;
	}
}, 1000);
function toggle_display(param, id) {
	var data = param.getAttribute("data-id");
	var condition = document.getElementById(data);
	var nav = document.getElementById("navi");

	if (id == 0) {
		condition.classList.add("popup-active");
		nav.classList.add("d-none");
	}
	else if(id == 1) {
		condition.classList.remove("popup-active");
		nav.classList.remove("d-none");
	}
}
(function() {
	var toTop = document.getElementsByClassName("back-top")[0];
	var nav = document.getElementById("navi");
	'use strict';
	window.onscroll = function() {
		if(window.pageYOffset >= 200) {
			toTop.style.display = "block";
			nav.classList.add("active");
		} else {
			toTop.style.display = "none";
			nav.classList.remove("active");
		}
	}
	toTop.onclick = function() {
		window.scrollTo(0,0);
	}
})();
(function() {
	var btn = document.getElementsByClassName("menu-bar")[0];
	var nav = document.getElementById("navi");
	btn.addEventListener("click", function() {
		if(nav.classList.contains("toggle")) {
			nav.classList.remove("toggle");
		}
		else {
			nav.classList.add("toggle");
		}
	})
})();
function loading() {
			setTimeout(function() {
				var load = document.getElementById("loading-screen");
				load.style.opacity = "0";
				load.style.zIndex = -999999;
			}, 1000);
		}
