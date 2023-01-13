function window_loc(id){
    console.log('erere',id)
    
    var vaariantes=document.getElementById(id)
    if(vaariantes){
        console.log(vaariantes.dataset)
         let identificador= vaariantes.dataset.identificador;
         console.log(identificador)
        let price= vaariantes.dataset.price;
        console.log(price)
        let ide='changediverprice-' + identificador
     var pricechange=document.getElementById(ide)
    if(pricechange)

         pricechange.innerHTML =vaariantes.dataset.price;
         
      
       
    }
//     for (let i = 0; i < vaariantes.children.length; i++) {
// if(vaariantes.children[i].id ==id)
//         console.log('yes')
//     }
    // fetch('/products/product-handle?section_id=product-template')

    // .then(response => response.text())
    
    // .then(data => console.log(data));
}