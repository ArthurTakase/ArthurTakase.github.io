// JavaScript Document

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
	if (themeName === 'theme-light') {
		document.getElementById("theme_picture").setAttribute("src", "img/all/moon.png");
		document.getElementById("yt").setAttribute("src", "img/index/yt_light.png");
		document.getElementById("twitter").setAttribute("src", "img/index/twitter_light.png");
		document.getElementById("twitter1").setAttribute("src", "img/index/twitter_light.png");
		document.getElementById("git").setAttribute("src", "img/index/git_light.png");
		document.getElementById("discord").setAttribute("src", "img/index/discord_light.png");
		document.getElementById("arrow").setAttribute("src", "img/index/arrow_light.png");
	}
	else {
		document.getElementById("theme_picture").setAttribute("src", "img/all/sun.png");
		document.getElementById("yt").setAttribute("src", "img/index/yt.png");
		document.getElementById("twitter").setAttribute("src", "img/index/twitter.png");
		document.getElementById("twitter1").setAttribute("src", "img/index/twitter.png");
		document.getElementById("git").setAttribute("src", "img/index/git.png");
		document.getElementById("discord").setAttribute("src", "img/index/discord.png");
		document.getElementById("arrow").setAttribute("src", "img/index/arrow.png");
	}
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-dark');
	} else {
		setTheme('theme-light');
   }
})();