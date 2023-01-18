const responseModal = document.querySelector(".modal-container");
const sectionfull = document.getElementById('allCartProducts')

const totalCart = document.querySelector('.modal_unit')
const continuaComprando=document.querySelectorAll('.continuaComprando')

const storageProductDiv = document.getElementById('storageProduct')
const buttondelete=document.querySelectorAll('.button_delete') 

function iniciarcart(){


const clasebuttonCart=document.querySelectorAll('.addto-card')
clasebuttonCart.forEach(e=>{
    e.addEventListener('click',()=>{ 
        agregarProductoAlCarrito(e.value)
   
        
    
    })
  })

  continuaComprando.forEach((e)=>{
    e.addEventListener('click',()=>{ 
        responseModal.classList.add('none')
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
    collectionfactory.children[4].children[0].addEventListener('click',(e)=>{ 
       console.log(e.target)
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
        console.log(response)
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
         
        responseModal.classList.remove('none');
      
      })
      .catch((error) => {
        console.log('Error:', error);
      });
      let data = {
        'items':[{
          'id': variant_id
        }]
      };
    
    //   await fetch('/cart/update.js', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   })  .then((res) => res.json())
    //   .then(response => {
    //     while (storageProductDiv.hasChildNodes()) {
    //       storageProductDiv.removeChild(storageProductDiv.firstChild);
    //     }
    
    //     let items=   response.items
    //     for (let i=0 ; i<items.length;i++){
       
    //       var clone = sectionfull.cloneNode(true);
    //    clone.classList.remove('none')
    
    //    clone.id= 'misproductos-' + i;
    //       var children = clone.childNodes;
    //       for (let index=children.length - 1; index>=0;index--){
    //       // for (var index = 0; index < children.length; index++) {
    //         let collectionref=children[index].children
    //         if(collectionref){
    //           changeallproducts(collectionref,items[i])
        
    //         }
    //       }
          
    //       storageProductDiv.appendChild(clone)
    
    //       console.log(items[i])  
    //     }
         
    //     responseModal.classList.remove('none')
    //   })
    //   .catch((error) => {
        
    //     console.log('Error:', error);
    //   });
    
        
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
         
      
      
        })
        .catch((error) => {
          
          console.log('Error:', error);
        });
        
      }

 
    }
    iniciarcart()