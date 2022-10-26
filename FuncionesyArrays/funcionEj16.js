function suma(num1,num2){
    return num1+num2
}
var a =5
var b = 6
function cambia(){ // hay que asociarlo a un boton para ejecutarlo
    var tit = document.getElementById("titulo").innerHTML=suma(a,b) //Cambiamos título
    console.log("La suma es: "+tit)  
}
//Ejecutamos
document.getElementById("boton").onclick=function(){
    cambia()
}
