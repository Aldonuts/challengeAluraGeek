async function probando(id){
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE"
    });
    const conexionConvertida = await conexion.json();
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al eliminar el producto");
    }
    return conexionConvertida;
}