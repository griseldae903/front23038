function guardar(){
    let n = document.getElementById('nombre').value;
    let p= document.getElementById('precio').value;
    let s = document.getElementById('stock').value;
    let i = document.getElementById('imagen').value;

    let producto ={
        nombre: n,
        precio: p,
        stock: s,
        imagen: i
    };
    let url='http://127.0.0.1:5000/productos'//let url='grisseldess.pythonanywhere.com/productos'
    let options ={
        body: JSON.stringify(producto),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}

    }
    fetch(url, options)
    .then(function(){ 
        alert("Producto agregado éxito!");
        window.location.href = './productos.html'

    })
    .catch(error => {
        alert('No pudo agregarse el producto');
        console.error(error);
    })
}