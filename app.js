// Pre entrega 1 - Curso Javascript Flex - CoderHouse - Ramiro Hosman


// Variables globales

let carrito = [];
let billetera = 0;
let nombre = "Sin nombre";
let saludo = "Bienvenido";
let mensaje = "Menu Principal";
let productos = [
    {id: 1, nombre: "Mate Térmico", precio: 6000},
    {id: 2, nombre: "Mate Calabaza Torpedo", precio: 15000},
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
        }while(genero != "M" && genero != "F" && genero != "X");
    
        switch (genero) {
            case "M":
                mensaje = "Bienvenido " + nombre + "!";
                break;
            case "F":
                mensaje = "Bienvenida " + nombre + "!";
                break;
            case "X":
                mensaje = "Bienvenidx " + nombre + "!";
                break;
            default:
                alert("No se ingresó un género válido!")
                break;
        }
        alert(mensaje);
    } 
}

const verProductos = () => {
    console.log("LISTADO DE MATES EN VENTA:");

    let mensajeAlerta = "LISTADO DE MATES EN VENTA:\n";

    productos.forEach(producto => {
        console.log(`ID: ${producto.id} | Nombre: ${producto.nombre} | Precio : $${producto.precio}`);
        mensajeAlerta += `ID: ${producto.id} | Nombre: ${producto.nombre} | Precio: $${producto.precio}\n`;
    });

    alert(mensajeAlerta);
}

const agregarProdCarrito = (idProducto) => {
    let productoEncontrado = false;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == idProducto) {
            // Si encuentra el id, agrego el producto al carrito
            carrito.push(productos[i]);
            alert(`El producto "${productos[i].nombre}" ha sido agregado al carrito.`);
            console.log(`El producto "${productos[i].nombre}" ha sido agregado al carrito.`);
            productoEncontrado = true;
            break; // Si lo encuentra sale del bucle
        }
    }
    if (!productoEncontrado) {
        alert("No se encontró un producto con ese ID.");
        console.log("No se encontró un producto con ese ID.");
    }
}

const quitarProdCarrito = (idProducto) => {
    let productoEncontrado = false;

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProducto) {
            // Si el id ingreasado coincide con el id del producto en el carrito...
            const productoEliminado = carrito.splice(i, 1)[0];
            alert(`El producto "${productoEliminado.nombre}" ha sido eliminado del carrito.`)
            console.log(`El producto "${productoEliminado.nombre}" ha sido eliminado del carrito.`);
            productoEncontrado = true;
            break; // Salir del bucle una vez que se haya encontrado y eliminado el producto del carrito
        }
    }

    if (!productoEncontrado) {
        alert("No se encontró un producto con ese ID en el carrito.");
        console.log("No se encontró un producto con ese ID en el carrito.");
    }
}

const verCarrito = () => {
    console.log("CARRITO DE COMPRAS:");

    let mensajeAlert = "CARRITO DE COMPRAS:\n";
    let totalAPagar = 0;

    if (carrito.length == 0) {
        console.log("El carrito está vacío.");
        mensajeAlert += "El carrito está vacío.";
    } else {
        carrito.forEach(producto => {
            console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
            mensajeAlert += `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}\n`;
            totalAPagar += producto.precio;
        });

        console.log(`Total a pagar: ${totalAPagar}`);
        mensajeAlert += `\nTotal a pagar: $${totalAPagar}`;
    }

    alert(mensajeAlert);
}

const menuPrincipal = () => {
    let opcion;
    
    do {
        opcion = prompt(`MENU PRINCIPAL
        1) Ver Productos
        2) Agregar Producto a Carrito
        3) Quitar Producto de Carrito
        4) Ver Carrito
        5) Salir
        Por favor, ingresa el número de la opción que deseas:`);

        switch (opcion) {
            case "1":
                console.log("Has seleccionado Ver Productos.");
                verProductos();
                break;
            case "2":
                console.log("Has seleccionado Agregar Producto a Carrito.");
                const idProducto = prompt("Ingresa el ID del producto que deseas agregar al carrito:");
                agregarProdCarrito(Number(idProducto));
                break;
            case "3":
                console.log("Has seleccionado Quitar Producto de Carrito.");
                const idProductoQuitar = prompt("Ingresa el ID del producto que deseas quitar del carrito:");
                quitarProdCarrito(Number(idProductoQuitar));
                break;
            case "4":
                console.log("Has seleccionado Ver Carrito.");
                verCarrito();
                break;
            case "5":
                console.log("Has seleccionado Salir. ¡Hasta luego!");
                break;
            default:
                alert("Opción no válida. Por favor, selecciona una opción válida.");
                break;
        }
    } while (opcion != "5");
}

ingresarDatosUsuario();
menuPrincipal();