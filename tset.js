let email =document.querySelector(".input")
let password = document.querySelector("#pas")
let pA = document.querySelector(".alertA")
let pB = document.querySelector(".alertB")


function typeEmail(){
    if(email.value.length < 12){
     pA.style.display ='block' 
     pA.innerHTML ="Wrong address"
     pA.style.color='red'
       

    }else{
        pA.style.display ='block' 
        pA.innerHTML ="Right address"
        pA.style.color='green'
   

    }
}


function tyPassword(){
  if(password.value.length < 8){
   pB.style.display ='block' 
   pB.innerHTML ="Wrong password"
   pB.style.color='red'

     

  }else{
      pB.style.display ='block' 
      pB.innerHTML ="Right password"
      pB.style.color='green'


  }
}