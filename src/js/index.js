
import './addcart'
var storedProducts = JSON.parse(localStorage.getItem("storedProducts"));
const sectionempty = document.getElementById('avisonoproducts')
const totalorders = document.getElementById('totalproducts')
const totalcustomers = document.getElementById('totalcustomers')
const deseos = document.getElementById('deseos')
const heart_favorito=document.querySelectorAll('.button-favorite')
const butoon_favorite= document.getElementById('gotoFavorite')
const button_products= document.getElementById('goto-List-products')
button_products &&button_products.addEventListener('click',()=>{
    window.location.href='/'
})
butoon_favorite &&butoon_favorite.addEventListener('click',()=>{
    window.location.href='/pages/FavoritosWish'
})
function probando(){
  var aver=document.querySelectorAll('.averq')
  aver.forEach(e=>{
    e.addEventListener('click',(ele)=>{ 
      ele.preventDefault()
    })
  })
}

function listadeseos(){
  deseos &&deseos.classList.remove('none')
    fetch('https://testeo-theta.vercel.app/allorders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
       
      })  .then((res) => res.json())
      .then(response => {
      
        if(totalorders)totalorders.innerHTML=response.count + ' order'
      })
      .catch((error) => {
        console.log('Error:', error);
      });
      fetch('https://testeo-theta.vercel.app/allcustomers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
       
      })  .then((res) => res.json())
      .then(response => {
     
        if(totalcustomers)  totalcustomers.innerHTML=response.count + ' customer'
      })
      .catch((error) => {
        console.log('Error:', error);
      });

if (storedProducts == null || storedProducts.length === 0) {
    sectionempty &&sectionempty.classList.remove('none')
    storedProducts = [];
 
}

heart_favorito.forEach(e=>{
 var array =storedProducts.map(e=>e.id)

  if(array.includes(e.value)){
    e.classList.remove('opacity-low-heart')
  }
    e.addEventListener('click',(ele)=>{ 
        var product = {
            id: e.value
          };
          var newstoreproductos=JSON.parse(localStorage.getItem("storedProducts")) || []
          if(e.classList.contains('opacity-low-heart')){
            e.classList.remove('opacity-low-heart')
          
            if(!array.includes(e.value)){
              newstoreproductos.push(product)
              localStorage.setItem('storedProducts',JSON.stringify(newstoreproductos))
        }
          }else{ e.classList.add('opacity-low-heart')
            let removeArray=newstoreproductos.filter(element=>element.id !=e.value)
            localStorage.setItem('storedProducts',JSON.stringify(removeArray))
          }
         
    })
   

  })  

}

function verfavoritos(){
    const producto_favorito=document.querySelectorAll('.favorite-product')
   
    const heart_favorito_remove=document.querySelectorAll('.button-favorite-selected')
    var elementosarray=[]
    storedProducts.forEach((e)=>{
        elementosarray.push(e.id)
    })
    heart_favorito_remove.forEach((e)=>{
        e.addEventListener('click',()=>{ 
         let newstoreproductos=JSON.parse(localStorage.getItem("storedProducts"))
            let borrardiv= document.getElementById(`favorite-${e.value}`)
          let removeArray=newstoreproductos.filter(element=>element.id !=e.value)
 localStorage.setItem('storedProducts',JSON.stringify(removeArray))
            borrardiv.remove()
            if(removeArray.length == 0){ sectionempty &&sectionempty.classList.remove('none')}
        })
     }) 
 
        producto_favorito.forEach((e)=>{
         if(!elementosarray.includes(e.dataset.id)){
           
         e.remove()
                }
      })  
    }
    probando()
    listadeseos()
    verfavoritos()
