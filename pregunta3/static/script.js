
function llenartabla(){
    var precio  = document.getElementById("precio").value
    var cantidad = document.getElementById("cantidad").value
    var compra = document.getElementById("compra").value
    var presupuesto = document.getElementById("presupuesto").value
    var subtotal = cantidad*precio 
    var numproductos = []

    
    
    var precio1 =[] 
    var cantidad1  = []
    var compra1 = []
    var subtotal1 = []


    var precio1 = precio + precio1
    var cantidad1  = cantidad + cantidad1
    var compra1 = compra + compra1
    var subtotal1 = subtotal + subtotal1
    
    
    
    if (subtotal > presupuesto)
        var estado = "sobre"
    else
        var estado = "dento"
    
    
    

    var resultElement1 = document.getElementById("compra1")
    resultElement1.innerText = compra1
    
    var resultElement2 = document.getElementById("precio1")
    resultElement2.innerText = precio1
    
    var resultElement3 = document.getElementById("cantidad1")
    resultElement3.innerText = cantidad1
    
    var resultElement4 = document.getElementById("subtotal1")
    resultElement4.innerText = subtotal

    var resultElement4 = document.getElementById("estado1")
    resultElement4.innerText = estado
   
   

   
}



