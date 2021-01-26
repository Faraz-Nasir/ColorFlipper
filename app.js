let btn=document.querySelector("#btn")

let colors=["rgba(444,3,441)","red","black","blue","green","violet"]

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


