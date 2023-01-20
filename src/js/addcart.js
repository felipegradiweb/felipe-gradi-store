import { other_test } from "./utils";

const responseModal = document.querySelector(".modal-container");
const continuaComprando=document.querySelectorAll('.continuaComprando')
const sectionempty = document.getElementById('basketProductsEmpty')
const clasebuttonCart=document.querySelectorAll('.addto-card')
function iniciarcart(){
clasebuttonCart.forEach((e,index)=>{
    e.addEventListener('click',(ele)=>{ 
      ele.preventDefault()
        agregarProductoAlCarrito(e.value)
    })
  })
  continuaComprando.forEach((e)=>{
    e.addEventListener('click',()=>{ 
        responseModal.classList.add('none')
        sectionempty.classList.add('none')
    })
 })
 
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
        other_test(response,false)
       
      
      })
      .catch((error) => {
        console.log('Error:', error);
      });
      }
     
    }


   iniciarcart()