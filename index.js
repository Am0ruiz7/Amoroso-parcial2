
/*<!-- Ejemplo de como armar el catalogo de productos
<div id="productos">
    <div>
        <img src="producto-de-ejemplo.jpg" alt="Nombre del producto" />
        <div>
            <h3>Producto</h3>
            <p>Descripción del producto</h3>
            <p>Precio: $<span>0</span></p>
            <p>Categoría</p>
            <button>Agregar</button>
        </div>
    </div>*/
let carrito =[];
let precioTotal = 0;
let cantidadProductoTotal= 0;
let contenedor = document.createElement("div");
contenedor.classList.add("container","d-flex","flex-wrap","justify-content-center","p-0");
contenedor.setAttribute("id","contenedorProductos")
productos.forEach(producto => {
    const card =document.createElement("div");
     card.classList.add("class","card");
       card.style.width = "400px";
       card.style.backgroundColor = "white";
  
    //agregar dataset id identificador evento target
    card.dataset.id = producto.id;

    const cardImg = document.createElement("img");
    cardImg.setAttribute("class","card-img-top");
    cardImg.classList.add("mx-auto");
    cardImg.src = producto.imagen;
    cardImg.style.maxWidth = "100%";
// armamos el cadrBody   
   
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body","text-center");

    card.style.background = "light";

    
    
    const cardTitle =document.createElement("h3");
  cardTitle.classList.add("text-center", "card-title");
cardTitle.innerText = producto.nombre;

    const cardText = document.createElement("p");
    cardText.classList.add("text-start","card-text");
    cardText.innerText = producto.descripcion;
    


    const cardPrecio = document.createElement("p");
    cardPrecio.setAttribute("class", "card-precio");
    cardPrecio.innerText = `Precio: ${producto.precio}$`;
     const cardSubtitle = document.createElement("h4");
   cardSubtitle.classList.add("my-3","card-subtitle");
   cardSubtitle.innerText = ` Categoria:${producto.categoría}`;
   cardSubtitle.style.fontSize = "2rem";
   cardSubtitle.style.color = "green"
   cardSubtitle.style.fontWeight = "normal";
//------------boton agregar al carrito
    const cardButton = document.createElement("button");
    cardButton.classList.add("btn-agregarCarrito","btn-success","text-white", "w-100");
  
    cardButton.innerText = "Agregar al Carrito";

    //agregamos eventlistener
    cardButton.addEventListener("click", (e)=>{
//obtengo boton
        const button = e.target;
    //obtengo img hijo del padre
        const cardBody = button.parentNode;
        //obtengo padre de card e img
        const card = cardBody.parentNode;
        
       const productoId = card.dataset.id;
       //busco producto por id
       for(let producto of productos){
        if(producto.id == productoId){
            agregarCarrito(producto);
                    break;
        }
       }

    });
//----------------------------Boton ver Mas-----------------

    const buttonVerMas = document.createElement("button");
    buttonVerMas.classList.add("btn-verDetalle","mx-3","btn-warning","w-100","text-white");
    buttonVerMas.innerText = "Ver Más"
    buttonVerMas.addEventListener("click", ()=>{
        
        let modalProducto = document.querySelector("#modalProducto");
        let modalCarrito = document.querySelector("#modalCarrito");
       
        //-----limpiamos todo---
        if(modalProducto){ modalProducto.remove();}
        if(modalCarrito){modalCarrito.remove();}
        //if(modalComprar){modalComprar.remove();}
        //------------------------------Creamos el Modal-----------------
        modalProducto = document.createElement("div");
        modalProducto.classList.add("modal");
        modalProducto.classList.add("bg-success","text-center", "w-50")
        modalProducto.setAttribute("id","modalProducto");
        modalProducto.dataset.id =producto.id;
        let xCerrar = document.createElement("a");
        
        xCerrar.setAttribute("href","javascript:void(0)")
        xCerrar.classList.add("fs-1", "fw-bold", "color-black","text-end")
        xCerrar.innerText = "X";
        xCerrar.addEventListener("click", ()=>{
            let cerrar = document.querySelector("#modalProducto");
            cerrar.remove();
        })
        modalProducto.appendChild(xCerrar);
        let h3Nombre = document.createElement("h3");
        h3Nombre.innerText = producto.nombre;
        let datosP = document.createElement("div");
        datosP.classList.add("datosProductos");
        let imgProducto = document.createElement("img");
        imgProducto.setAttribute("src",producto.imagen);
        //---------------- informacion del producto----
        let detalleProducto = document.createElement("div");
        detalleProducto.classList.add("detalleProducto");
        let categoriaProducto = document.createElement("p")
        categoriaProducto.innerText = `Categoria: ${producto.categoría}`;
        let precioProducto = document.createElement("p");
        precioProducto.innerText = `Precio: $ ${producto.precio}`;
        let descripcionProducto = document.createElement("p");
        descripcionProducto.innerText = `${producto.descripcion}`;
    //------- botones agregar al carrito--------
    let buttonAgregarCarrito = document.createElement("button");
    buttonAgregarCarrito.innerText = "Agregar Carrito";
    buttonAgregarCarrito.classList.add("btn-agregarCarrito");
    buttonAgregarCarrito.classList.add("btn-warning","btn", "btn-lg","text-white","fs-3")
    buttonAgregarCarrito.addEventListener( "click", ()=>{
        const productoId = producto.id;
        for(let producto of productos){
            if( producto.id == productoId){
                agregarCarrito(producto);
                break;
            }
        }

    });
//-------------------Agregamos al modal-----------
detalleProducto.append(categoriaProducto,precioProducto,descripcionProducto,buttonAgregarCarrito);
datosP.append(imgProducto,detalleProducto);
modalProducto.append(xCerrar,h3Nombre,datosP);

//------------------------agregamos a Section modal detalle producto-----------
    let divModal = document.querySelector("section").append(modalProducto);
 
return divModal;

    })

cardBody.appendChild(cardImg);
cardBody.append(cardTitle,cardSubtitle,cardText,cardPrecio,cardButton,buttonVerMas);
card.appendChild(cardBody);
contenedor.append(card);
   
document.querySelector("section").append(contenedor);
    
});

//-----------------------Agregar al carrito----
function agregarCarrito(producto) {
    let itemCarrito = document.querySelector("#itemsProducto");
    let precioFinal = document.querySelector("#totalPrecioItems");
    let itemCarritoModal = document.querySelector("#pCantidadProductoModal");
    let precioFinalModal = document.querySelector("#pPrecioTotalModal");

    //-------------------Calculamos Precio Total
    if(carrito.length == 0){
        carrito.push(producto);}
    else{
         let productoExistente = false;
            for( let i = 0; i < carrito.length; i++){
                if (carrito[i].id == producto.id){
                    carrito[i].cantidad +=1;
                    productoExistente = true;
                    break;}        
            }
        if (!productoExistente){carrito.push(producto);}
       };
    
    precioTotal += producto.precio;
    cantidadProductoTotal ++;
     
if((itemCarritoModal || precioFinalModal) !=null){
   itemCarritoModal.innerText = "Cantidad Total:" + cantidadProductoTotal ;
  precioFinalModal.innerText = "Total a pagar $" + precioTotal;}
itemCarrito.innerText = cantidadProductoTotal;
precioFinal.innerText = precioTotal;   
   

}

    //---------------eliminar produtos


 function eliminarCarrito(producto){
let itemCarrito = document.querySelector("#itemCarrito")
let precioFinal = document.querySelector("#totalPagar");
let itemCarritoModal = document.querySelector("#pCantidadProductoModal");
let precioFinalModal = document.querySelector("#pPrecioTotalModal");     
        if(producto.cantidad > 1){
            for (let i=0; i < carrito.length; i--){
                if( carrito[i].id == producto.id){
                    carrito[i].cantidad -=1;
                    break;
                }
            }
            
        }
        else{ precioTotal -= (producto.precio * producto.cantidad);
            carrito.splice(indice,1);
            cantidadProductoTotal --;
            contenedor.remove();
        }
      
     
   if((itemCarritoModal || precioFinalModal) !=null){
         itemCarritoModal.innerText = `Cantidad productos: ${cantidadProductoTotal}`;
     precioFinalModal.innerText = 'Total a pagar :' + precioTotal;
       }
        itemCarrito.innerText =cantidadProductoTotal;
        precioFinal.innerText = precioTotal;
    }

//------------Crea boton ver carrito---

let buttonVerCarrito = document.createElement("button");
buttonVerCarrito.classList.add("btn-success","btn","btn-verCarrito","text-white","fs-3");
buttonVerCarrito.setAttribute("id","verCarrito")
buttonVerCarrito.innerText = "Ver Carrito";
buttonVerCarrito.addEventListener('click',()=>{
    verCarrito();
})
document.querySelector("#verCarrito").append(buttonVerCarrito);




//---------ver carrito
const verCarrito= () =>{
      
    let modalCarrito = document.createElement("div");
    if(modalCarrito){modalCarrito.remove();}
      
     modalCarrito.classList.add("modal", "modalCarrito","bg-success","text-center");
     modalCarrito.setAttribute("id","modalCarrito")
     //----------------boton cerrar
     let xCerrar = document.createElement("a");
     xCerrar.setAttribute("href","javascript:void(0)");
     xCerrar.classList.add("fs-1", "fw-bold", "color-black","text-end")
     xCerrar.innerText = "X";
     xCerrar.addEventListener("click", ()=>{
         let cerrar = document.querySelector("#modalCarrito");
         cerrar.remove();
     });
   // modalCarrito.appendChild(xCerrar);
   let contenedorProducto  = document.createElement("div")
   contenedorProducto.classList.add("contenedorModalProductos")
     let h3CarritoNombre = document.createElement("h3");
     h3CarritoNombre.classList.add("modal-title")
     h3CarritoNombre.innerText = "Carrito de Compras";
   //  let totalCarrito = document.createElement("div");
   //  totalCarrito.classList.add("totalCarrito");
     let pPrecioCarrito = document.createElement("p");
     pPrecioCarrito.setAttribute("id","pPrecioTotalModal");
     pPrecioCarrito.innerText = "Total a pagar:" + precioTotal;
     let pCantidadCarrito = document.createElement("p");
     pCantidadCarrito.setAttribute("id","pCantidadProductoModal");
     pCantidadCarrito = "Cantidad de productos :" + cantidadProductoTotal;
 //-------------recorremos el carrito
    for( const producto of carrito){
        let divProductoCarrito = document.createElement("div");
        divProductoCarrito.classList.add("contenedroProducto")
        divProductoCarrito.dataset.id = producto.id;
        let pNombreProducto = document.createElement("p");
       pNombreProducto.innerText = producto.nombre;
       let imgProducto = document.createElement("img");
        imgProducto.setAttribute("src",producto.imagen);
       let pPrecioProducto = document.createElement("p");
       let pPrecioSubtotal = document.createElement("p");
       pPrecioSubtotal = (producto.precio * producto.cantidad);
       pPrecioProducto.innerText = `Subtotal : $ ${pPrecioSubtotal}`;
       let pCantidadProducto = document.createElement("p");
       pCantidadProducto.classList.add("pCantidadProducto");
       pCantidadProducto.innerText = producto.cantidad;  


  divProductoCarrito.append(pNombreProducto,imgProducto,pPrecioProducto,pCantidadProducto);
  contenedorProducto.append(divProductoCarrito);
}
let buttonCarrito = document.createElement("div");
buttonCarrito.classList.add("botonesCarrito","d-flex", "flex-wrap");
let buttonVaciar = document.createElement("button");
buttonVaciar.classList.add("btn-vaciar", "btn-light","w-100");
buttonVaciar.innerText = ("Vaciar carrito");
buttonVaciar.addEventListener("click", ()=>{
      carrito = [];
      precioTotal = 0;
      cantidadProductoTotal =0;
      contenedorProducto.innerHTML = "";
      pPrecioCarrito.innerText = "Total pagar:" + precioTotal;
     pCantidadCarrito.innerText = "Cantidad productos:" + cantidadProductoTotal;
      buttonCarrito.removeChild(buttonVaciar);
      buttonCarrito.removeChild(btnComprar);
     
   });
   let btnComprar = document.createElement("button");
btnComprar.classList.add("btn-warning","btn-verCarrito","text-white","w-100");
btnComprar.setAttribute("id","comprarForm")
btnComprar.innerText = "Comprar";
btnComprar.addEventListener('click',()=>{
    abrirComprarForm();
})

// totalCarrito.append(pPrecioCarrito);
 buttonCarrito.append(buttonVaciar, btnComprar);
 
 modalCarrito.append(xCerrar,h3CarritoNombre,contenedorProducto,pPrecioCarrito,buttonCarrito);
    
 
     //----------------Agrega div seccion productos---
     const sectorProdutos = document.querySelector("#contenedor");
     sectorProdutos.parentNode.appendChild(modalCarrito);
     return sectorProdutos;
    }

// btnComprar.addEventListener("click", ()=>{ abrirComprarForm()})

