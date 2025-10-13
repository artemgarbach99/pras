import 'dragscroll'
import '/src/assets/styles/style.scss'

// бургер меню
function menuInit() {
	if (document.querySelector('._burger-btn')) {
		document.addEventListener('click', function (e) {
			if (bodyLockStatus && e.target.closest('._burger-btn')) {
				bodyLockToggle()
				document.documentElement.classList.toggle('menu-open')
			}
		})
	}
}
function menuOpen() {
	bodyLock()
	document.documentElement.classList.add('menu-open')
}
function menuClose() {
	bodyUnlock()
	document.documentElement.classList.remove('menu-open')
}

let bodyLockStatus = true
let bodyLockToggle = (delay = 0) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay)
	} else {
		bodyLock(delay)
	}
}
let bodyUnlock = (delay = 0) => {
	let body = document.querySelector('body')
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll('[data-lp]')
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index]
				el.style.marginRight = '0px'
			}
			body.style.marginRight = '0px'
			document.documentElement.classList.remove('lock')
		}, delay)
		bodyLockStatus = false
		setTimeout(function () {
			bodyLockStatus = true
		}, delay)
	}
}
let bodyLock = (delay = 0) => {
	let body = document.querySelector('body')
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll('[data-lp]')
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index]
			el.style.marginRight = window.innerWidth - document.querySelector('body').offsetWidth + 'px'
		}
		// body.style.marginRight = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
		body.style.marginRight = '0px'

		document.documentElement.classList.add('lock')

		bodyLockStatus = false
		setTimeout(function () {
			bodyLockStatus = true
		}, delay)
	}
}

menuInit()
