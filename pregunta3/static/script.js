
function llenartabla(){
    var precio  = document.getElementById("precio").value
    var cantidad = document.getElementById("cantidad").value
    var compra = document.getElementById("compra").value
    var presupuesto = document.getElementById("presupuesto")
    var subtotal = cantidad*precio 

    var precio1 = precio
    var cantidad1 = cantidad
    var compra1 = compra
    var subtotal1 = subtotal
    
    if (subtotal > presupuesto)
        var estado = "sobre"
    else
        var estado = "dentro" 




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



