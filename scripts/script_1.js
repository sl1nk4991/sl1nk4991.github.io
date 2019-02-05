var dark = true;

function change_theme() {
	dark = !dark;
	if (dark == true) {
		document.getElementById("theme").setAttribute("href", "style/style.css");
		document.getElementById("chng_button").innerHTML='<a onclick="change_theme()" class="button18" tabindex="0">Light Theme</a>';
	} else {
		document.getElementById("theme").setAttribute("href", "style/style_w.css");
		document.getElementById("chng_button").innerHTML='<a onclick="change_theme()" class="button18" tabindex="0">Dark Theme</a>';
	}  
}