// Pre entrega 1 - Curso Javascript Flex - CoderHouse - Ramiro Hosman


// Variables globales

let carrito = [];
let billetera = 0;
let nombre = "Sin nombre";
let saludo = "Bienvenido";
let mensaje = "Menu Principal";
let productos = [
    {id: 1, nombre: "Mate térmico", precio: 6000},
    {id: 2, nombre: "Mate calabaza Torpedo", precio: 15000},
    {id: 3, nombre: "Mate Calabaza Camionero", precio: 18000},
    {id: 4, nombre: "Mate Imperial", precio: 25000},
];

//Funciones

const ingresarDatosUsuario = () => {

    confirmacion = confirm("¿Deseas ingresar tus datos?")
    if(confirmacion){
        do{
            nombre = prompt("Ingresa tu nombre");
            if(!nombre){
                alert("El nombre no puede estar vacío!");
            }
        }while(!nombre)
        
        let genero;

        do{
            genero = prompt("Ingresa 'M' para masculino, 'F' para femenino o 'X' para otro" ).toUpperCase();
            if(genero != "M" && genero != "F" && genero != "X"){
                alert("No se ingresó un género válido. Por favor, ingresa 'M', 'F' o 'X'.");
            }
        }while(genero != "M" && genero != "F" && genero != "X");;
    
        switch (genero) {
            case "M":
                mensaje = "Bienvenido " + nombre + "!";
                break;
            case "F":
                mensaje = "Bienvenida " + nombre + "!";
                break;
            case "X":
                mensaje = "Bienvenidx " + nombre + "!";
            default:
                alert("No se ingresó un género válido!")
                break;
        }
        alert(mensaje);
    } 
}

const mostrarProductos = () => {
    for(const producto of productos){
        console.log("ID:" + producto.id + "\nNombre: " + producto.nombre + "\nPrecio: $" + producto.precio)
    }
}

const menuPrincipal = () => {
    console.log("LISTADO DE MATES EN VENTA");
    mostrarProductos()
    console.log("MENU PRINCIPAL")
    
}

/*Funciones a desarrollar
mostrarproductos en el main 
validaciones para el ingreso del usuario
agregar algún producto al carrito
Hacer las opciones y seleccion con switch

*/
ingresarDatosUsuario();
mostrarProductos();
menuPrincipal();