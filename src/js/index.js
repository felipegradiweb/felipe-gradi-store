var storedProducts = JSON.parse(localStorage.getItem("storedProducts"));
function pruebaConsole(){
const clasebutton=document.querySelectorAll('.buton_prueba')
if (storedProducts === null) storedProducts = [];

  clasebutton.forEach(e=>{
    e.addEventListener('click',()=>{ 
        var product = {
            id: e.name
          };
        console.log(e.name)
        storedProducts.push(product)
        localStorage.setItem('storedProducts',JSON.stringify(storedProducts))
    })
  })  
}
pruebaConsole()
const butoon_favorite= document.getElementById('gotoFavorite')
butoon_favorite &&butoon_favorite.addEventListener('click',()=>{
    location.href='/'
})