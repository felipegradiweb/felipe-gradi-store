import "../styles.css";
import './addcart'


var storedProducts = JSON.parse(localStorage.getItem("storedProducts"));
const sectionempty = document.getElementById('avisonoproducts')
const totalorders = document.getElementById('totalproducts')
const totalcustomers = document.getElementById('totalcustomers')

function pruebaConsole(){
    fetch('https://testeo-theta.vercel.app/allorders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
       
      })  .then((res) => res.json())
      .then(response => {
        console.log(response)
        totalorders.innerHTML=response.count + 'products'
      })
      .catch((error) => {
        console.log('Error:', error);
      });
const clasebutton=document.querySelectorAll('.buton_prueba')
if (storedProducts === null || storedProducts.length === 0) {
    sectionempty &&sectionempty.classList.remove('none')
   
    storedProducts = [];
}


  clasebutton.forEach(e=>{
    e.addEventListener('click',()=>{ 
        var product = {
            id: e.value
          };
      e.classList.remove('opacity-low-heart')
        
        storedProducts.push(product)
        localStorage.setItem('storedProducts',JSON.stringify(storedProducts))
    })
  })  
}
pruebaConsole()
const butoon_favorite= document.getElementById('gotoFavorite')
const button_products= document.getElementById('goto-List-products')

button_products &&button_products.addEventListener('click',()=>{
    window.location.href='/pages/whislist'
})
butoon_favorite &&butoon_favorite.addEventListener('click',()=>{
    window.location.href='/pages/FavoritosWish'
})

function verfavoritos(){
    const producto_favorito=document.querySelectorAll('.favorite-product')
    const heart_favorito=document.querySelectorAll('.button-favorite')
   
    const heart_favorito_remove=document.querySelectorAll('.button-favorite-selected')
    // var jsonP=JSON.parse(localStorage.getItem('storedProducts'))
    var elementosarray=[]
    storedProducts.forEach((e)=>{
        elementosarray.push(e.id)
    })
  

    heart_favorito_remove.forEach((e)=>{
        e.addEventListener('click',()=>{ 
            const borrardiv= document.getElementById(`favorite-${e.value}`)
            console.log(e.value)
          var removeArray=storedProducts.filter(element=>element.id !=e.value)
            console.log(removeArray)
 localStorage.setItem('storedProducts',JSON.stringify(removeArray))
            borrardiv.remove()
        })
       
     }) 
    heart_favorito.forEach((e)=>{
        e.addEventListener('click',()=>{ 

        })
        if(elementosarray.includes(e.value)){
          console.log(e)
            e.classList.remove('opacity-low-heart')
               }
     })  
        producto_favorito.forEach((e)=>{
         if(!elementosarray.includes(e.dataset.id)){
           
         e.remove()
                }
      })  
    }

verfavoritos()
