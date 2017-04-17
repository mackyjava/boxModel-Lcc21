var imagen= document.getElementsByClassName("box-work");
  imagen[0].addEventListener("click",mostrar,true);
imagen[1].addEventListener("click",mostrar,true);
imagen[2].addEventListener("click",mostrar,true);
imagen[3].addEventListener("click",mostrar,true);
imagen[4].addEventListener("click",mostrar,true);
imagen[5].addEventListener("click",mostrar,true);
imagen[6].addEventListener("click",mostrar,true);
imagen[7].addEventListener("click",mostrar,true);
imagen[8].addEventListener("click",mostrar,true);
function mostrar() {
	imagenC=this;
	imagenC.style.transform="scale(2)";
	imagenC.style.background="pink";
	boton=document.createElement("button");
	boton.value="x";
	imagenC.appendChild(boton);
}

 function ocultar (){
	this.style.transform="null";
}