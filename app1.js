let btn=document.querySelector("#btn")

let colors=["#c0b2ff","#000026","#392b47","#142433","#141433","#5b797e"]
      
let backgroundColor=document.querySelector("main")

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click",()=>{
    let colorText=document.querySelector(".color")
    let colorNumber=getRandomNumber()
    colorText.textContent=colors[colorNumber]
    backgroundColor.style.background=colors[colorNumber]  
})    


