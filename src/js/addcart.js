const responseModal = document.querySelector(".modal-container");
const sectionfull = document.getElementById('allCartProducts')

const totalCart = document.querySelector('.modal_unit')
const continuaComprando=document.querySelectorAll('.continuaComprando')
const sectionempty = document.getElementById('basketProductsEmpty')
const storageProductDiv = document.getElementById('storageProduct')
const buttondelete=document.querySelectorAll('.button_delete') 
const inputdown=document.querySelectorAll('.input-up-btn') 
const inputup=document.querySelectorAll('.input-up-btn') 




function iniciarcart(){

const clasebuttonCart=document.querySelectorAll('.addto-card')
clasebuttonCart.forEach((e,index)=>{
    e.addEventListener('click',(ele)=>{ 
      ele.preventDefault()
      console.log('verlos',e,ele,index)
        agregarProductoAlCarrito(e.value)
    })
  })
  continuaComprando.forEach((e)=>{
    e.addEventListener('click',()=>{ 
        responseModal.classList.add('none')
      
        sectionempty.classList.add('none')
      
    })
   
 })
  function changeallproducts(collectionref,item){
    console.log(collectionref[0])
    let collectionfactory =collectionref[0].children[0].children[2].children[0].children[0]
    collectionfactory.children[3].children[0].innerHTML='$' + item.final_line_price
    collectionfactory.children[2].children[1].value=item.quantity
    collectionfactory.children[2].children[1].id='input' + item.variant_id
    collectionfactory.children[0].children[0].src=item.image
    collectionfactory.children[1].children[1].children[1].innerHTML=item.variant_title
    collectionfactory.children[1].children[0].innerHTML=item.product_title
    collectionfactory.children[4].children[0].value=item.variant_id;
    collectionfactory.children[2].children[0].addEventListener('click',(e)=>{ 
      let inputselected=collectionfactory.children[2].children[0].parentNode.querySelector('input[type=number]')
             let cantidad=inputselected.value
      let identifi=inputselected.id.replace('input','')
 
          changeProductCarrito(identifi,cantidad)
  
  
    })
    collectionfactory.children[2].children[2].addEventListener('click',(e)=>{ 
      let inputselected=collectionfactory.children[2].children[2].parentNode.querySelector('input[type=number]')
      let cantidad=inputselected.value
let identifi=inputselected.id.replace('input','')

   changeProductCarrito(identifi,cantidad)
    })
    collectionfactory.children[4].children[0].addEventListener('click',(e)=>{ 
  
      changeProductCarrito(e.target.value,0)
    })
  }
async function agregarProductoAlCarrito(variant_id){ 
      let data1 = {
        'items':[{
          'id': variant_id,
          'quantity': 1
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
        console.log(response.items[0].quantity)

        let data = {
          'updates':{
             [`${response.items[0].id}`] :response.items[0].quantity
          }
        };
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
      })
      .catch((error) => {
        console.log('Error:', error);
      });
   
    
   
    
        
      }
      async function changeProductCarrito(variant_id,cantidad){ 
        let data = {
          'updates':{
             [`${variant_id}`] :cantidad
          }
        };
         await  fetch('/cart/update.js', {
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
          console.log(item_count)
          if(item_count &&item_count > 0){let items=   response.items
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
        
      }
    }
    iniciarcart()