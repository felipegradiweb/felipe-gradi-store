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
        let pic='changepicture-' + identificador
     var pricechange=document.getElementById(ide)
     var picturechange = document.getElementById(pic)
    if(pricechange 
        
        || picturechange)

         {
            pricechange.innerHTML =vaariantes.dataset.price;
            picturechange.src=vaariantes.dataset.picture;
 
        }
         
      
       
    }
  

}

var all= document.querySelectorAll('.background-list_productspipe')
if(all) {
console.log(all.children)
var childrens=all
for (let i=0 ; i<childrens.length;i++){
  
        console.log(childrens[i])

         let maspeque=childrens[i]
         maspeque.addEventListener("mouseover", (e)=>{
            var id=e.target.id
            var otroid= e.target.id.replace('changepicture','changepicturehidden')
            console.log(otroid)
            var ap=document.getElementById(otroid)
            if(otroid || ap){

                ap.classList.remove('desaparecerimagen')
                ap.classList.add('aparecerimagen')
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
            console.log(otroid,id)
            var ap=document.getElementById(otroid)
            if(otroid || ap){
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