let stockProductos = [
    {id: 1, nombre: "Buzo 1", tipo: "buzo", cantidad: 1, desc: "En Luli Accesorios", precio: 1200, talle: "L", img: './imagenes/foto1.webp'},
    {id: 2, nombre: "Buzo 2", tipo: "buzo", cantidad: 1, desc: "En Luli Accesorios", precio: 1100, talle: "L", img: './imagenes/foto2.webp'},
    {id: 3, nombre: "Buzo 3", tipo: "buzo", cantidad: 1, desc: "En Luli Accesorios", precio: 1200, talle: "M", img: './imagenes/foto3.webp'},
    {id: 4, nombre: "Buzo 4", tipo: "buzo", cantidad: 1, desc: "En Luli Accesorios", precio: 1400, talle: "M", img: './imagenes/foto4.webp'},
    {id: 5, nombre: "Buzo 5", tipo: "buzo", cantidad: 1, desc: "En Luli Accesorios", precio: 1200, talle: "S", img: './imagenes/foto5.webp'},
    {id: 6, nombre: "Buzo 6", tipo: "buzo", cantidad: 1, desc: "En Luli Accesorios", precio: 1500, talle: "S", img: './imagenes/foto6.webp'},
    {id: 7, nombre: "Remera 1", tipo: "remera", cantidad: 1, desc: "En Luli Accesorios", precio: 500, talle: "L", img: './imagenes/foto7.webp'},
    {id: 8, nombre: "Remera 2", tipo: "remera", cantidad: 1, desc: "En Luli Accesorios", precio: 500, talle: "L", img: './imagenes/foto8.webp'},
    {id: 9, nombre: "Remera 3", tipo: "remera", cantidad: 1, desc: "En Luli Accesorios", precio: 500, talle: "M", img: './imagenes/foto9.webp'},
    {id: 10, nombre: "Remera 4", tipo: "remera", cantidad: 1, desc: "En Luli Accesorios", precio: 700, talle: "M", img: './imagenes/foto10.webp'},
    {id: 11, nombre: "Remera 5", tipo: "remera", cantidad: 1,desc: "En Luli Accesorios", precio: 700, talle: "S", img: './imagenes/foto11.webp'},
    {id: 12, nombre: "Remera 6", tipo: "remera", cantidad: 1, desc: "En Luli Accesorios", precio: 700, talle: "S", img: './imagenes/foto12.webp'},
    {id: 13, nombre: "Camisa 1", tipo: "camisa", cantidad: 1, desc: "UEn Luli Accesorios", precio: 900, talle: "L", img: './imagenes/foto13.webp'},
    {id: 14, nombre: "Camisa 2", tipo: "camisa", cantidad: 1, desc: "En Luli Accesorios", precio: 1400, talle: "S", img: './imagenes/foto14.webp'},
    {id: 15, nombre: "Camisa 3", tipo: "camisa", cantidad: 1, desc: "En Luli Accesorios", precio: 7000, talle: "L", img: './imagenes/foto15.webp'},
    {id: 16, nombre: "Camisa 4", tipo: "camisa", cantidad: 1, desc: "En Luli Accesorios", precio: 777, talle: "S", img: './imagenes/foto16.webp'},
    {id: 17, nombre: "Camisa 5", tipo: "camisa", cantidad: 1, desc: "En Luli Accesorios", precio: 234, talle: "S", img: './imagenes/foto17.webp'},
    {id: 18, nombre: "Camisa 6", tipo: "camisa", cantidad: 1, desc: "En Luli Accesorios", precio: 155600, talle: "M", img: './imagenes/foto18.webp'},
    {id: 19, nombre: "Pantalon 1", tipo: "pantalon", cantidad: 1, desc: "En Luli Accesorios", precio: 1600, talle: "L", img: './imagenes/foto19.webp'},
    {id: 20, nombre: "Pantalon 2", tipo: "pantalon", cantidad: 1, desc: "En Luli Accesorios", precio: 3200, talle: "L", img: './imagenes/foto20.webp'},
    {id: 21, nombre: "Pantalon 3", tipo: "pantalon", cantidad: 1, desc: "UEn Luli Accesorios", precio: 2300, talle: "M", img: './imagenes/foto21.webp'},
    {id: 22, nombre: "Pantalon 4", tipo: "pantalon", cantidad: 1, desc: "En Luli Accesorios", precio: 5600, talle: "M", img: './imagenes/foto22.webp'},
    {id: 23, nombre: "Pantalon 5", tipo: "pantalon", cantidad: 1, desc: "UEn Luli Accesorios", precio: 1700, talle: "S", img: './imagenes/foto23.webp'},
    {id: 24, nombre: "Pantalon 6", tipo: "pantalon", cantidad: 1, desc: "En Luli Accesorios", precio: 800, talle: "S", img: './imagenes/foto24.webp'},
]

const contenedorProductos = document.getElementById('contenedor-productos')

//TERCER PASO

const contenedorCarrito = document.getElementById('carrito-contenedor')
//SEXTO PASO
const botonVaciar = document.getElementById('vaciar-carrito')
const botonEliminar = document.getElementById('boton-eliminar')
//SEXTIMO PASO, MODIFICAR LOS CONTADORES
const contadorCarrito = document.getElementById('contadorCarrito')

//OCTAVO PASO
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
//SEXTO PASO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

//PRIMER PRIMER PASO, INYECTAR EL HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    //2 - SEGUNDO PASO, LUEGO DE QUE INSERTEMOS EL HTML EN EL DOM:
    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener

    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)
        //
    })
})

// 1- PRIMER PASO

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ //SI YA EST?? EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que est?? agregado, le suma la cantidad
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO EST??, AGREGAMOS EL CURSO AL CARRITO
        const item = stockProductos.find((prod) => prod.id === prodId)//Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
}
//agregarAlCarrito(1) //Le pasamos el ID por parametro. Tenemos que asigarle como evento esta funcion al boton
//con el id de su producto correspondiente

// 5 - QUINTO PASO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
    console.log(carrito)
}

const actualizarCarrito = () => {
    //4- CUARTO PASO
    //LOS APPENDS SE VAN ACUMULANDO CON LO QE HABIA ANTES
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    //3 - TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    //SEPTIMO PASO
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    //OCTAVO PASO
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

}