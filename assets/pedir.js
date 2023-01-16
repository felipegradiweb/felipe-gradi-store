const responseModal = document.querySelector(".modal-container");
function window_loc(id){
     var vaariantes=document.getElementById(id)
    if(vaariantes){ 
        
         let identificador= vaariantes.dataset.identificador;    
        let ide='changediverprice-' + identificador
        let pic='changepicture-' + identificador
        let available='buttonForm-' + identificador
     var pricechange=document.getElementById(ide)
     var picturechange = document.getElementById(pic)
     var buttonAvailable = document.getElementById(available)
     if(buttonAvailable  ){
        if(vaariantes.dataset.available =='false'){
            buttonAvailable.disabled=true
            buttonAvailable.innerHTML ='Sold out';
            buttonAvailable.classList.remove('btn-primary')
            
            buttonAvailable.classList.add('btn-danger')
        }else{
            buttonAvailable.disabled=false
            buttonAvailable.classList.remove('btn-danger')
            buttonAvailable.classList.add('btn-primary')
            buttonAvailable.innerHTML ='Agregar al carrito';}
         
     }
    if(pricechange  || picturechange) {
            pricechange.innerHTML ='$' + vaariantes.dataset.price;
            picturechange.src=vaariantes.dataset.picture;
        } 
    }
  }

var all= document.querySelectorAll('.background-list_productspipe')
if(all) {
var childrens=all
for (let i=0 ; i<childrens.length;i++){
        let maspeque=childrens[i]
         maspeque.addEventListener("mouseover", (e)=>{
            var id=e.target.id
            var otroid= e.target.id.replace('changepicture','changepicturehidden')
          
            if(otroid && otroid.includes('changepicturehidden') ){
                var ap=document.getElementById(otroid)
                
                if( ap ){

                    ap.classList.remove('desaparecerimagen')
                }else return
                
            }
            if(id &&id.includes('changepicture')){
                var desap=document.getElementById(id)
             if(desap){
                 desap.classList.add('desaparecerimagen')
             }
            }
          })
     
          maspeque.addEventListener("mouseout", (e)=>{
            var id=e.target.id
            var otroid= e.target.id.replace('changepicturehidden','changepicture')
         
            var ap=document.getElementById(otroid)
            if(otroid  && otroid.includes('changepicture')){
                ap.classList.remove('desaparecerimagen')
                ap.classList.add('aparecerimagen')
            }
            if(id &&id.includes('changepicture')){
                var desap=document.getElementById(id)
             if(desap){
                desap.classList.remove('aparecerimagen')
                 desap.classList.add('desaparecerimagen')
             }
            }
          })
    
    ;}

  
}

async function agregarProductoAlCarrito(variant_id,color){ 
    let data = {
      'items':[{
        'id': variant_id,
        'quantity': 1,'Color':color
      }]
    };
  
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })  .then((res) => res.json())
    .then(response => {
      let items=   response.items
      for (let i=0 ; i<items.length;i++){
        var nameProd = document.getElementById('nameProduct')
        var colorProd = document.getElementById('colorProduct')
        var priceProd = document.getElementById('priceProduct')
        var imageProd = document.getElementById('imageProduct')
        if(nameProd || colorProd || priceProd){

            nameProd.innerHTML =items[i].product_title;
            colorProd.innerHTML =items[i].variant_title;
            priceProd.innerHTML = '$' + items[i].price;
            imageProd.src = items[i].image;
        }
        console.log(items[i])  
      }
        responseModal.classList.remove('none')

    })
    .catch((error) => {
      
      console.log('Error:', error);
    });
  }
document.addEventListener("submit", (event) => {
    var childrens=event.target
for (let i=0 ; i<childrens.length;i++){
if(childrens[i].checked == true){
let color=childrens[i].dataset.color
let id=childrens[i].id
if(id || color){
   
     agregarProductoAlCarrito(id,color)
}
   
}
}
    event.preventDefault();
})
const button_close = document.getElementById("button-close-t");

button_close &&button_close.addEventListener("click", (e) => {
    responseModal.classList.add("none");
    e.preventDefault();
  });