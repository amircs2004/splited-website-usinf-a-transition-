const containerEL = document.querySelector(".container")
const leftEL = document.querySelector(".left")
const rightEL = document.querySelector(".right")

//
leftEL.addEventListener("mouseenter" , () => {
    containerEL.classList.add("active-left")
})
leftEL.addEventListener("mouseleave" , () => {
    containerEL.classList.remove("active-left")
})

rightEL.addEventListener("mouseenter" , () => {
      containerEL.classList.add("active-right")
})
rightEL.addEventListener("mouseleave" , () =>{
    containerEL.classList.remove("active-right")
})
//