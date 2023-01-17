

const responseModal = document.querySelector(".modal-container");
const sectionfull = document.getElementById('allCartProducts')
const sectionempty = document.getElementById('basketProductsEmpty')
const totalCart = document.querySelector('.modal_unit')
const storageProductDiv = document.getElementById('storageProduct')




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
function changeallproducts(collectionref,item){
  console.log(collectionref[0])
  let collectionfactory =collectionref[0].children[0].children[2].children[0].children[0]
  collectionfactory.children[3].children[0].innerHTML='$' + item.final_line_price
  collectionfactory.children[2].children[1].value=item.quantity
  collectionfactory.children[2].children[1].id='input' + item.variant_id
  collectionfactory.children[0].children[0].src=item.image
  collectionfactory.children[1].children[1].children[1].innerHTML=item.variant_title
  collectionfactory.children[1].children[0].innerHTML=item.product_title
  collectionfactory.children[4].children[0].value=item.variant_id
}
async function changeProductCarrito(variant_id,cantidad){ 
  let data = {
      'id': variant_id,
      'quantity': cantidad
  };
   await fetch('/cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })  .then((res) => res.json())
  .then(response => {
   
   
    
      fetch('/cart/update.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })  .then((res) => res.json())
      .then(response => {
        while (storageProductDiv.hasChildNodes()) {
          storageProductDiv.removeChild(storageProductDiv.firstChild);
        }
        let item_count =response.item_count;
        if(item_count > 0){let items=   response.items
          for (let i=0 ; i<items.length;i++){
         
            var clone = sectionfull.cloneNode(true);
         clone.classList.remove('none')
      
         clone.id= 'misproductos-' + i;
      
      
      
            var children = clone.childNodes;
            for (let index=children.length - 1; index>=0;index--){
            // for (var index = 0; index < children.length; index++) {
              let collectionref=children[index].children
              if(collectionref){
                var buttonProd = document.querySelector('.button-delete')
                buttonProd.value=items[i].variant_id
            changeallproducts(collectionref,items[i])
              }
            }
            
            storageProductDiv.appendChild(clone)
      
            console.log(items[i])  
          }
           
          responseModal.classList.remove('none') }else{
     
          if(sectionfull || sectionempty){
           
            sectionfull.classList.add('none')
            sectionempty.classList.remove('none')
          }
    
        }
        
      })
      .catch((error) => {
        
        console.log('Error:', error);
      });
   

   
      // responseModal.classList.remove('none')

  })
  .catch((error) => {
    
    console.log('Error:', error);
  });
  
}

async function agregarProductoAlCarrito(variant_id,color){ 

console.log(sectionfull.childNodes)

  let data1 = {
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
    body: JSON.stringify(data1)
  })  .then((res) => res.json())
  .then(response => {
  })
  .catch((error) => {
    console.log('Error:', error);
  });

  let data = {
    'items':[{
      'id': variant_id
     
    }]
  };

  await fetch('/cart/update.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })  .then((res) => res.json())
  .then(response => {
    while (storageProductDiv.hasChildNodes()) {
      storageProductDiv.removeChild(storageProductDiv.firstChild);
    }

    let items=   response.items
    for (let i=0 ; i<items.length;i++){
   
      var clone = sectionfull.cloneNode(true);
   clone.classList.remove('none')

   clone.id= 'misproductos-' + i;



      var children = clone.childNodes;
      for (let index=children.length - 1; index>=0;index--){
      // for (var index = 0; index < children.length; index++) {
        let collectionref=children[index].children
        if(collectionref){
          changeallproducts(collectionref,items[i])
    
        }
      }
      
      storageProductDiv.appendChild(clone)

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
  const button_comprando = document.getElementById("continuaComprando");

  button_comprando &&button_comprando.addEventListener("click", (e) => {
    responseModal.classList.add("none");
    sectionempty.classList.add('none')
    e.preventDefault();
  });
  function borrarPro(e){
    console.log(e.value)
    changeProductCarrito(e.value,0)
   
  }
  function inputchange(e){
    let cantidad=e.value
  let identifi=e.id.replace('input','')
   console.log(identifi,cantidad)
      changeProductCarrito(identifi,cantidad)
   
  }
 
//  function consultarCarrito(){
//   var respuesta= fetch('/cart.js', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })  .then((res) => res.json())
//   .then(response => {
//     console.log(response)
//     if(response){

//       if(response.item_count>0){
//        return  [true,response.items]
//       }else {return  [false,response.items]}
//     }
   

//   })
//   .catch((error) => {
    
//     console.log('Error:', error);
//   });
//   return respuesta
//  }