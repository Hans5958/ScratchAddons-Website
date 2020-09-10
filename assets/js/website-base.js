let darkTheme = false
let toggle = document.querySelector("#dark-toggle")

const update = () => {
	document.body.classList.toggle("dark")
	darkTheme = !darkTheme
	localStorage.setItem("darkTheme", darkTheme)
	try {
		if (darkTheme) {
			toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>'
		} else {
			toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>'
		}
	} finally {}
}

document.addEventListener("DOMContentLoaded", () => {
	toggle = document.querySelector("#dark-toggle")

	if (localStorage.getItem("darkTheme")) {
		if (localStorage.getItem("darkTheme") == "true") {
			update()
		}
	} else {
		if (window.matchMedia("(prefers-color-scheme: dark)")) {
			update()
		}
	}	
	
	toggle.addEventListener("click", () => {
		update()
	})
})

