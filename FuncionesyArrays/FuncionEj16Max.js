function maxi (x,y){
    if(x>y){
        return x
    }else {
        return y
    }
}
var a, b
a= parseInt(prompt("Num 1: "))
b= parseInt(prompt("Num 2: "))
document.getElementById("boton1").onclick=function(){
    console.log("Máximo es: "+ maxi(a,b))
}