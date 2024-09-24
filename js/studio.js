const HamMenu = document.querySelector('.ham-menu')
const offScreenMenu = document.querySelector('.off-screen-menu')

HamMenu.addEventListener('click', () => {
	HamMenu.classList.toggle('active')
	offScreenMenu.classList.toggle('active')
})

const Menu = document.getElementById('Menu')
const contentOffScreenMenu = document.getElementById('contentOffScreenMenu')
let btn = document.getElementById('btn')
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

window.addEventListener('scroll', scrollFunction)


const button = document.getElementById('mybutton');
button.style.color = 'black';
button.style.backgroundColor = 'transparent'
button.style.textTransform = 'uppercase';
button.style.border = 'solid 1px black';
button.style.width = '146px';
button.style.height = '46px';
button.style.fontSize = '17px';