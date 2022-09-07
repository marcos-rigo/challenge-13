let num = Number(prompt("Ingrese un número"));


if (isNaN(num)){
    alert("Ingresa un número")
}else {
    if (num%2==0) {
        alert ("El número ingresado "+num+ " es par");
        console.log ("El número ingresado "+num+" es par");
    }else {
        alert ("El número ingresado "+num+ " es impar");
        console.log ("El número ingresado"+num+" es impar");
    }
    
}


