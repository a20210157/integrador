alert("buen provecho")
alert("bienvenidos al restaurant, corralito")
entrada=parseInt(prompt("ingrese el precio de la entrada"))
principal=parseInt(prompt("ingrese el precio de la principal"))
postre=parseInt(prompt("ingrese el precio de la postre"))
total=entrada+principal+postre
igv=(total*0.18)+total
console.log("El costo de la entrada es:" ,entrada);
console.log("El costo de la principal es:" ,principal);
console.log("El costo de la postre es:" ,postre);
console.log("El todal es:" ,total);
console.log("El total incluid IGV es:" ,igv);
