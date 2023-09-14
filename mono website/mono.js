
let totalQuantity = document.querySelector('.totalQuantity')

let totalPrice = document.querySelector('.totalPrice')






let quantity1 = document.querySelector('.white.a')

let plus1 = document.querySelector('.black2.a')

let minus1 = document.querySelector('.black1.a')





console.log(totalPrice)

plus1.onclick = function() {

    let price = document.querySelector('.cignature2.a')

    quantity1.innerText = Number(quantity1.innerText) + 1
    
    totalQuantity.innerText = Number(totalQuantity.innerText) + 1

    totalPrice.innerText = Number(totalPrice.innerText) + Number(price.innerText)
    
    console.log(price)
}


minus1.onclick = function() {

    let price = document.querySelector('.cignature2.a')

   
    
    if (totalQuantity.innerText >0 && quantity1.innerText >0) {

        totalQuantity.innerText = Number(totalQuantity.innerText) - 1

        }

        if (totalPrice.innerText >0 && quantity1.innerText >0) { 

            totalPrice.innerText = Number(totalPrice.innerText) - Number(price.innerText)
        
            }

            if (quantity1.innerText >0) { 
    
                quantity1.innerText = Number(quantity1.innerText) - 1
        
                }
}






let quantity2 = document.querySelector('.white.b')

let plus2 = document.querySelector('.black2.b')

let minus2 = document.querySelector('.black1.b')

plus2.onclick = function() {

    let price = document.querySelector('.cignature2.b')

    quantity2.innerText = Number(quantity2.innerText) + 1

    totalQuantity.innerText = Number(totalQuantity.innerText) + 1

    totalPrice.innerText = Number(totalPrice.innerText) + Number(price.innerText)
    
    
}


minus2.onclick = function() {

    let price = document.querySelector('.cignature2.b')

   

        if (totalQuantity.innerText >0 && quantity2.innerText >0) {

        totalQuantity.innerText = Number(totalQuantity.innerText) - 1

        }

        if (totalPrice.innerText >0 && quantity2.innerText >0) {  

        totalPrice.innerText = Number(totalPrice.innerText) - Number(price.innerText)

        }

        if (quantity2.innerText >0) { 

            quantity2.innerText = Number(quantity2.innerText) - 1
    
            }
    
    
}






let quantity3 = document.querySelector('.white.c')

let plus3 = document.querySelector('.black2.c')

let minus3 = document.querySelector('.black1.c')

plus3.onclick = function() {

    let price = document.querySelector('.cignature2.c')

    quantity3.innerText = Number(quantity3.innerText) + 1

    totalQuantity.innerText = Number(totalQuantity.innerText) + 1

    totalPrice.innerText = Number(totalPrice.innerText) + Number(price.innerText)
    
    
}


minus3.onclick = function() {

    let price = document.querySelector('.cignature2.c')

    

        if (totalQuantity.innerText >0 && quantity3.innerText >0) {

        totalQuantity.innerText = Number(totalQuantity.innerText) - 1

        }

        if (totalPrice.innerText >0 && quantity3.innerText >0) { 

        totalPrice.innerText = Number(totalPrice.innerText) - Number(price.innerText)

        }

        if (quantity3.innerText >0) { 

            quantity3.innerText = Number(quantity3.innerText) - 1
        
                }
    
    
}







let quantity4 = document.querySelector('.white.d')

let plus4 = document.querySelector('.black2.d')

let minus4 = document.querySelector('.black1.d')

plus4.onclick = function() {

    let price = document.querySelector('.cignature2.d')

    quantity4.innerText = Number(quantity4.innerText) + 1

    totalQuantity.innerText = Number(totalQuantity.innerText) + 1

    totalPrice.innerText = Number(totalPrice.innerText) + Number(price.innerText)
    
    
}


minus4.onclick = function() {

    let price = document.querySelector('.cignature2.d')

    

        if (totalQuantity.innerText >0 && quantity4.innerText >0) {

        totalQuantity.innerText = Number(totalQuantity.innerText) - 1

        }

        if (totalPrice.innerText >0 && quantity4.innerText >0) {  

        totalPrice.innerText = Number(totalPrice.innerText) - Number(price.innerText)

        }

        if (quantity4.innerText >0) { 

            quantity4.innerText = Number(quantity4.innerText) - 1
    
            }
    
    
}






let quantity5 = document.querySelector('.white.e')

let plus5 = document.querySelector('.black2.e')

let minus5 = document.querySelector('.black1.e')

plus5.onclick = function() {

    let price = document.querySelector('.cignature2.e')

    quantity5.innerText = Number(quantity5.innerText) + 1

    totalQuantity.innerText = Number(totalQuantity.innerText) + 1

    totalPrice.innerText = Number(totalPrice.innerText) + Number(price.innerText)
    
    
}


minus5.onclick = function() {

    let price = document.querySelector('.cignature2.e')

    

        if (totalQuantity.innerText >0 && quantity5.innerText >0) {

        totalQuantity.innerText = Number(totalQuantity.innerText) - 1

        }

        if (totalPrice.innerText >0 && quantity5.innerText >0) { 

        totalPrice.innerText = Number(totalPrice.innerText) - Number(price.innerText)

        }

        if (quantity5.innerText >0) { 

            quantity5.innerText = Number(quantity5.innerText) - 1
    
            }
    
    
}
