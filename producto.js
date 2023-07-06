class Producto {
    constructor(id,nombre,descripcion,precio,imagen,cantidad,categoría){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
        this.categoría = categoría;
    }

    
}

let productos = [
     new Producto (
        1,
        'Quinoa Blanca',
        'Grano de quinoa, es una semilla con propiedades de un cereal que contiene aminoácidos esenciales y supera su contenido en proteína, magnesio y hierro',
        690,
        'producto/quinoa-blanca.png',
        1,
        'Granos y Cereales'
        
     ),
     new Producto (
        2,
        'Quinoa Roja',
        'Quinoa roja alta en hierro y calcio de fácil absorción',
        730,
        'producto/quinoa-roja.png',
        1,
        'Granos y Cereales'
                
     ),
     new Producto (
       3,
       'Granola de Cacao',
       'Granola de cacao es una de las mejores opciones para el desayuno o merienda saludable',
       600,
       'producto/granola-cacao.png',
       1,
       'Cacao'
        
     ),
        new Producto( 
         4,
        'Tableta cacao 70%',
        'Tableta de cacao al 70% de alto valor calórico rico en antioxidadntes.',
        590,
        'producto/cacao-70.png',
        1,
        'Cacao orgánico'
        
        ),
      new Producto(
        5,
        'Café en Grano',
        'Café orgánico segun su cultivo permite conservar de forma natural mejor el aroma del grano.',
        980,
        'producto/cafe-grano.png',
        1,
        'Café orgánico'
    
      ),
    new Producto (
     6,
     'Café arábico',
     'El café orgánico es aquel que se produce aprovechando los recursos y capacidades naturales su entorno.',
     870,
     'producto/cafe-molido.png',
     1,
     'Café orgánico'
     
    ),
        
];
