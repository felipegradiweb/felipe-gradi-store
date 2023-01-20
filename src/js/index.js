import "../styles.css";
import './addcart'
var storedProducts = JSON.parse(localStorage.getItem("storedProducts"));
const sectionempty = document.getElementById('avisonoproducts')
const totalorders = document.getElementById('totalproducts')
const totalcustomers = document.getElementById('totalcustomers')
const deseos = document.getElementById('deseos')
const heart_favorito=document.querySelectorAll('.button-favorite')
function pruebaConsole(){
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
    localStorage.setItem('storedProducts',JSON.stringify([]))
}
heart_favorito.forEach(e=>{
    e.addEventListener('click',()=>{ 
        var product = {
            id: e.value
          };
          let newstore=JSON.parse(localStorage.getItem("storedProducts"))
          console.log(e)
          console.log('revisemeeste',e.classList.contains('opacity-low-heart'))
          if(e.classList.contains('opacity-low-heart')){
            e.classList.remove('opacity-low-heart')
            newstore.push(product)
             localStorage.setItem('storedProducts',JSON.stringify(newstore))
          }else{
            console.log('a ver pues')
          }
    })
  })  

}
pruebaConsole()
const butoon_favorite= document.getElementById('gotoFavorite')
const button_products= document.getElementById('goto-List-products')

button_products &&button_products.addEventListener('click',()=>{
    window.location.href='/'
})
butoon_favorite &&butoon_favorite.addEventListener('click',()=>{
    window.location.href='/pages/FavoritosWish'
})

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
    // heart_favorito.forEach((e)=>{
    //     e.addEventListener('click',(ele)=>{ 
    //       ele.preventDefault()
    //     })
    //     if(elementosarray.includes(e.value)){
    //       console.log(e)
    //         e.classList.remove('opacity-low-heart')
    //            }
    //  })  
        producto_favorito.forEach((e)=>{
         if(!elementosarray.includes(e.dataset.id)){
           
         e.remove()
                }
      })  
    }

verfavoritos()
