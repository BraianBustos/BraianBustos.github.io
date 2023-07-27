const elemento1 = document.getElementById("uno");
const elemento2 = document.getElementById("dos");
const elemento3 = document.getElementById("tres");
const elemento4 = document.getElementById("cuatro");
const elemento5 = document.getElementById("cinco");
const elemento6 = document.getElementById("seis");
const elemento7 = document.getElementById("siete");
const elemento8 = document.getElementById("ocho");
const elemento9 = document.getElementById("nueve");
const elemento10 = document.getElementById("diez");
const elemento11 = document.getElementById("once");
const elemento12 = document.getElementById("doce");

const Boton = document.querySelector(".confPedido");

let Parrafo1 = document.querySelector(".parrafo1");
const divUno = document.querySelector(".divUno");
let Parrafo2 = document.querySelector(".parrafo2");
const divDos = document.querySelector(".divDos");
let Parrafo3 = document.querySelector(".parrafo3");
const divTres = document.querySelector(".divTres");
let Parrafo4 = document.querySelector(".parrafo4");
const divCuatro = document.querySelector(".divCuatro");
let Parrafo5 = document.querySelector(".parrafo5");
const divCinco = document.querySelector(".divCinco");
let Parrafo6 = document.querySelector(".parrafo6");
const divSeis = document.querySelector(".divSeis");
let Parrafo7 = document.querySelector(".parrafo7");
const divSiete = document.querySelector(".divSiete");
let Parrafo8 = document.querySelector(".parrafo8");
const divOcho = document.querySelector(".divOcho");
let Parrafo9 = document.querySelector(".parrafo9");
const divNueve = document.querySelector(".divNueve");
let Parrafo10= document.querySelector(".parrafo10");
const divDiez = document.querySelector(".divDiez");
let Parrafo11 = document.querySelector(".parrafo11");
const divOnce = document.querySelector(".divOnce");
let Parrafo12 = document.querySelector(".parrafo12");
const divDoce = document.querySelector(".divDoce");


var array = [];

A = 0;

Mostrar = function(elemento){
	return elemento.innerHTML;
}

C1 = 0;
elemento1.addEventListener("click",function() { 				//Al hacer click en el elemento1, comienza a escuchar.
	let A = 0;										
	C1 +=1;
	let Precio = elemento1.getAttribute("data-title"); 			//Selecciona el data-title de elemento1
	let subTot = Precio.split("$"); 				   			//Separa la oración por el signo "$".
	subTot = parseInt(subTot[1]) * C1;				   			//Transforma subTot en Entero.	
	A += subTot;									   			//Suma el valor de subTot a la variable A.
	let B = document.createElement("p");			   			//Crea un elemento de tipo párrafo.	
	B.classList.add("totPre");						   			//Agrega una clase al elemento párrafo creado.
	let totPre = document.createTextNode(`$${A}`);	   			//Crea un nodo de tipo texto.
	B.appendChild(totPre);										//Agrega el nodo texto al parrafo B, como contenido.								
	divUno.setAttribute("style","display:inline;");				//Le da el estilo display a párrafo B.			   					
	divUno.replaceChildren(Mostrar(Parrafo1)," ("+C1+")");		//Reemplaza el contenido con el producto y la cantidad.
	divUno.append(B);											//Agrega el precio al final del párrafo.
	});


C2 = 0;
elemento2.addEventListener("click",function() {
	let A = 0;
	C2 +=1;
	let Precio = elemento2.getAttribute("data-title");
	let subTot = Precio.split("$");
	subTot = parseInt(subTot[1]) * C2;
	A += subTot;
	let B = document.createElement("p");
	B.classList.add("totPre");
	let totPre = document.createTextNode(`$${A}`);
	B.appendChild(totPre);								
	divDos.setAttribute("style","display:inline;")
	divDos.replaceChildren(Mostrar(Parrafo2)," ("+C2+")");
	divDos.append(B);
});

C3 = 0;
elemento3.addEventListener("click",function() {
	let A = 0;
	C3 +=1;
	let Precio = elemento3.getAttribute("data-title");
	let subTot = Precio.split("$");
	subTot = parseInt(subTot[1]) * C3;
	A += subTot;
	let B = document.createElement("p");
	B.classList.add("totPre");
	let totPre = document.createTextNode(`$${A}`);
	B.appendChild(totPre);
	divTres.setAttribute("style","display:inline;");
	divTres.replaceChildren(Mostrar(Parrafo3)," ("+C3+")");
	divTres.append(B);
});

C4 = 0;
elemento4.addEventListener("click",function() {
	let A = 0;
	C4 +=1;
	let Precio = elemento4.getAttribute("data-title");
	let subTot = Precio.split("$");
	subTot = parseInt(subTot[1]) * C4;
	A += subTot;
	let B = document.createElement("p");
	B.classList.add("totPre");
	let totPre = document.createTextNode(`$${A}`);
	B.appendChild(totPre);
	divCuatro.setAttribute("style","display:inline;")
	divCuatro.replaceChildren(Mostrar(Parrafo4)," ("+C4+")");
	divCuatro.append(B);
});

C5 = 0;
elemento5.addEventListener("click",function() {
	let A = 0;
	C5 +=1;
	let Precio = elemento5.getAttribute("data-title");
	let subTot = Precio.split("$");
	subTot = parseInt(subTot[1]) * C5;
	A += subTot;
	let B = document.createElement("p");
	B.classList.add("totPre");
	let totPre = document.createTextNode(`$${A}`);
	B.appendChild(totPre);
	divCinco.setAttribute("style","display:inline;")
	divCinco.replaceChildren(Mostrar(Parrafo5)," ("+C5+")");
	divCinco.append(B);
});

C6 = 0;
elemento6.addEventListener("click",function() {
	let A = 0;
	C6 +=1;
	let Precio = elemento6.getAttribute("data-title");
	let subTot = Precio.split("$");
	subTot = parseInt(subTot[1]) * C6;
	A += subTot;
	let B = document.createElement("p");
	B.classList.add("totPre");
	let totPre = document.createTextNode(`$${A}`);
	B.appendChild(totPre);
	divSeis.setAttribute("style","display:inline;")
	divSeis.replaceChildren(Mostrar(Parrafo6)," ("+C6+")");
	divSeis.append(B);
});

C7 = 0;
elemento7.addEventListener("click",function() {
	let A = 0;
	C7 +=1;
	let Precio = elemento7.getAttribute("data-title");
	let subTot = Precio.split("$");
	subTot = parseInt(subTot[1]) * C7;
	A += subTot;
	let B = document.createElement("p");
	B.classList.add("totPre");
	let totPre = document.createTextNode(`$${A}`);
	B.appendChild(totPre);
	divSiete.setAttribute("style","display:inline;")
	divSiete.replaceChildren(Mostrar(Parrafo7)," ("+C7+")");
	divSiete.append(B);
});

C8 = 0;
elemento8.addEventListener("click",function() {
	let A = 0;
	C8 +=1;
	let Precio = elemento8.getAttribute("data-title");
	let subTot = Precio.split("$");
	subTot = parseInt(subTot[1]) * C8;
	A += subTot;
	let B = document.createElement("p");
	B.classList.add("totPre");
	let totPre = document.createTextNode(`$${A}`);
	B.appendChild(totPre);
	divOcho.setAttribute("style","display:inline;")
	divOcho.replaceChildren(Mostrar(Parrafo8)," ("+C8+")");
	divOcho.append(B);
});

C9 = 0;
elemento9.addEventListener("click",function() {
	let A = 0;
	C9 +=1;
	let Precio = elemento9.getAttribute("data-title");
	let subTot = Precio.split("$");
	subTot = parseInt(subTot[1]) * C9;
	A += subTot;
	let B = document.createElement("p");
	B.classList.add("totPre");
	let totPre = document.createTextNode(`$${A}`);
	B.appendChild(totPre);
	divNueve.setAttribute("style","display:inline;")
	divNueve.replaceChildren(Mostrar(Parrafo9)," ("+C9+")");
	divNueve.append(B);
});

C10 = 0;
elemento10.addEventListener("click",function() {
	let A = 0;
	C10 +=1;
	let Precio = elemento10.getAttribute("data-title");
	let subTot = Precio.split("$");
	subTot = parseInt(subTot[1]) * C10;
	A += subTot;
	let B = document.createElement("p");
	B.classList.add("totPre");
	let totPre = document.createTextNode(`$${A}`);
	B.appendChild(totPre);
	divDiez.setAttribute("style","display:inline;")
	divDiez.replaceChildren(Mostrar(Parrafo10)," ("+C10+")");
	divDiez.append(B);
});

C11 = 0;
elemento11.addEventListener("click",function() {
	let A = 0;
	C11 +=1;
	let Precio = elemento11.getAttribute("data-title");
	let subTot = Precio.split("$");
	subTot = parseInt(subTot[1]) * C11;
	A += subTot;
	let B = document.createElement("p");
	B.classList.add("totPre");
	let totPre = document.createTextNode(`$${A}`);
	B.appendChild(totPre);
	divOnce.setAttribute("style","display:inline;")
	divOnce.replaceChildren(Mostrar(Parrafo11)," ("+C11+")");
	divOnce.append(B);
});

C12 = 0;
elemento12.addEventListener("click",function() {
	let A = 0;
	C12 +=1;
	let Precio = elemento12.getAttribute("data-title");
	let subTot = Precio.split("$");
	subTot = parseInt(subTot[1]) * C12;
	A += subTot;
	let B = document.createElement("p");
	B.classList.add("totPre");
	let totPre = document.createTextNode(`$${A}`);
	B.appendChild(totPre);
	divDoce.setAttribute("style","display:inline;");
	divDoce.append(B);
	divDoce.replaceChildren(Mostrar(Parrafo12)," ("+C12+")");
	divDoce.append(B);
});



var E = 0;
var F = "";

sumar = function(elemento){
	array = [divUno,divDos,divTres,divCuatro,divCinco,divSeis,divSiete,divOcho,divNueve,divDiez,divOnce,divDoce];
	for (i of array){
		if (i != undefined & i != null){
			D = i.getElementsByTagName("p");
		}
		D = D[0];
		if (D != undefined){
			D = D.innerHTML;
			D = D.slice(1);
			D = parseInt(D); 
			E += D;
		}	
	}
	total.replaceChildren("$" + E);
}


total = document.getElementById("Total");
Btotal = document.getElementById("Btotal");

Btotal.addEventListener("click",function(){
	sumar(array);
	E = 0;
});

		












