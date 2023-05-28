const decrementbtn = document.getElementById("derementbtn")
const incrementbtn = document.getElementById("incrementbtn")
const resetbtn = document.getElementById("resetbtn")
const displayvalue = document.getElementById("displayvalue")


/// decrement btn 
decrementbtn.addEventListener("click" , () => {
    const value = Number(displayvalue.innerText)
    if (value > 0) {
        displayvalue.innerText = value - 1
     } else {
            alert("negative value are not allowed")
        }
})


// incrementbtn

incrementbtn.addEventListener("click",() =>{
    const value = Number(displayvalue.innerText)
    if (value >= 10){
        alert("10+va;lue are not allowed")
    } else {
        displayvalue.innerText = value+1
    }
})


/// resetbtn

resetbtn.addEventListener("click",() =>{
    displayvalue.innerText=0
})