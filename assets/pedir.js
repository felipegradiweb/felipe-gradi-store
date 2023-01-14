function window_loc(id){
     var vaariantes=document.getElementById(id)
    if(vaariantes){ 
         let identificador= vaariantes.dataset.identificador;    
        let ide='changediverprice-' + identificador
        let pic='changepicture-' + identificador
     var pricechange=document.getElementById(ide)
     var picturechange = document.getElementById(pic)
    if(pricechange  || picturechange) {
            pricechange.innerHTML =vaariantes.dataset.price;
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
          
            var ap=document.getElementById(otroid)
            if(otroid && otroid.includes('changepicturehidden')){
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