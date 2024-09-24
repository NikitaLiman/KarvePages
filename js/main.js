const HamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

HamMenu.addEventListener('click', () => {
    HamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


const Menu = document.getElementById('Menu')
const contentOffScreenMenu = document.getElementById('contentOffScreenMenu');
let btn = document.getElementById('btn');
function scrollFunction() {
	if (window.scrollY > 0) {
		Menu.style.backgroundColor = 'black'
		offScreenMenu.style.width = '100%'
        contentOffScreenMenu.style.padding = '10px 135px'
        btn.style.marginTop = '20px'
	} else {
		Menu.style.backgroundColor = 'transparent'
		offScreenMenu.style.width = ''
         contentOffScreenMenu.style.padding = '10px 20px'
         btn.style.marginTop = '20px'
	}
}

window.addEventListener('scroll', scrollFunction);


$('.slider1').owlCarousel({
	loop: true,
	margin: 50,
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});

$(document).ready(function () {
	$('.slider2').owlCarousel({
		loop: false,
		margin: 10,
		stagePadding: 100,
		navSpeed:1000,
		nav: true,
		dots: false,
		autoWidth: true,
		responsive: {
			0: {
				items: 1,
			},
			700: {
				items: 4,
			},
			800: {
				items: 4,
			},
			900: {
				items: 4,
			},
			1000: {
				items: 4,
			},
		},
	})
});

const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
	function AnimOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index]
			const animItemHeight = animItem.offsetHeight
			const animItemOffset = offset(animItem).top
			const AnimStart = 4

			let animitempoint = window.innerHeight - animItemHeight / AnimStart

			if (animItemHeight > window.innerHeight) {
				animitempoint = window.innerHeight - window.innerHeight / AnimStart
			}

			if (
				window.scrollY > animItemOffset - animitempoint &&
				window.scrollY < animItemOffset + animItemHeight
			) {
				animItem.classList.add('_active')
			} else {
				animItem.classList.remove('_active')
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	window.addEventListener('scroll', AnimOnScroll)
	setTimeout(() => {
		AnimOnScroll()
	}, 300)
}

















