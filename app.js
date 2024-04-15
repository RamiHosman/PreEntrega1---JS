// Pre entrega 1 - Curso Javascript Flex - CoderHouse - Ramiro Hosman




let carrito = [];
let billetera = 0;
let nombre = "Sin nombre"
let productos = [
    {id: 1, nombre: "Mate térmico", precio: 6000},
    {id: 2, nombre: "Mate calabaza Torpedo", precio: 15000},
    {id: 3, nombre: "Mate Calabaza Camionero", precio: 18000},
    {id: 4, nombre: "Mate Imperial", precio: 25000},
];
const ingresarDatosUsuario = () => {

    confirmacion = confirm("¿Deseas ingresar tus datos?")
    if(confirmacion){
        nombre = prompt("Ingresa tu nombre");
        if(nombre == ""){
            alert("Debes ingresar un nombre!");
            error = true
        }   
        let edad = parseInt(prompt("Ingresa tu edad"));
        billetera = parseFloat(prompt("Ingresa la cantidad de dinero que tienes para gastar"));
    }
}

const menuPrincipal = (nombre) => {
    prompt("Bienvenido " + nombre + "!");

}

/*Funciones a desarrollar
mostrarproductos en el main 
validaciones para el ingreso del usuario
agregar algún producto al carrito
Hacer las opciones y seleccion con switch

*/
ingresarDatosUsuario();
menuPrincipal(nombre);