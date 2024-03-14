const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const elementos2 = document.getElementById('lista-2');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
  elementos1.addEventListener('click', comprarElemento);
  elementos2.addEventListener('click', comprarElemento);
  carrito.addEventListener('click', eliminarElemento);
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
  if (e.target.classList.contains('agregar-carrito')) {
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento);
  }
}

function leerDatosElemento(elemento) {
  const infoElemento = {
    Imagen: elemento.querySelector('img').src,
    titulo: elemento.querySelector('h3').textContent,
    precio: elemento.querySelector('.precio').textContent,
    id: elemento.querySelector('a').getAttribute('data-id')
  }

  insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>
      <img src="${elemento.Imagen}" width="100">
    </td>
    <td>
      ${elemento.titulo}
    </td>
    <td>
      ${elemento.precio}
    </td>
    <td>
      <a href="#" class="borrar" data-id="${elemento.id}">X</a>
    </td>    
  `;
  lista.appendChild(row);
}

function eliminarElemento(e) {
  if (e.target.classList.contains('borrar')) {
    e.target.parentElement.parentElement.remove();
  }
}

function vaciarCarrito() {
  lista.innerHTML = '';
}





document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Detiene el comportamiento por defecto del evento
      var target = this.getAttribute('href'); 
      document.querySelector(target).scrollIntoView({ 
        behavior: 'smooth' 
      }); // Hace scroll hasta el elemento con el ID indicado en el hash
    })
  })
})