import { conexionAPI } from "./conexionAPI.js";

const listaProductos = document.querySelector("[data-lista-productos]");

export default function crearCard(imagen, nombre, precio, id){
    const producto = document.createElement("div");
    producto.className = "productoLista";
    producto.id = id;
    producto.innerHTML = `
        <img src="${imagen}" alt="Imagen del producto" class="imgProducto">
        <h4>${nombre}</h4>
        <div class="parteInferiorCard">
            <h3>$ ${precio}</h3>
            <img src="/img/delete.svg" alt="Boton de borrar" class="deleteBtn" onclick="probando(${id})">
        </div>
    `;
    return producto
}

async function listarVideos(){
    try {
        const listaProductosAPI = await conexionAPI.listarProductos();
        if (listaProductosAPI.length > 0) {
            listaProductosAPI.forEach(producto => listaProductos.appendChild(crearCard(producto.imagen, producto.nombre, producto.precio, producto.id)));
        }else{
            listaProductos.innerHTML=`<h2 class="textoErrorProductos">No se han agregado productos.</h2>`;
        }
    } catch (error) {
        listaProductos.innerHTML=`<h2 class="textoErrorProductos">Ha ocurrido un problema con la conexión.</h2>`;
    }
}

listarVideos();