const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () =>{
	const anchoFondo = (window.pageYOffset / altura) * 600;
	if(anchoFondo <=110){
		fondo.style.width = anchoFondo + '%';
	}	
}