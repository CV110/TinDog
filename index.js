import {Info} from "./Dog.js"
import {dogs} from "./data.js"

const nope = document.getElementById("cross")
const like = document.getElementById("hearth")

let isWaiting = false

let dogsArray = dogs.map( num => num) 

    function render() {
    isWaiting = false
    if(dogsArray.length>0) {
        const currentDog = new Info(dogsArray[0]) 
        document.getElementById("main").innerHTML = currentDog.getMainPhoto()
    }
}

function getResetBtn() {
    document.getElementById("main").innerHTML = `<div class="reset" id="reset"><span class="button">Reset</span></div>`
    rbtn.style.display = "block"
}
const rbtn = document.getElementById("reset")


like.addEventListener("click", function() {
    
    if(!isWaiting && dogsArray.length!=0) {
        if(dogsArray.length>0) {
            const currentDog = new Info(dogsArray[0]) 
            document.getElementById("main").innerHTML = currentDog.getLiked()
            
        }
        dogsArray.shift()
        setTimeout(render, 2000)
        isWaiting = true
        if(dogsArray.length===0) {
            setTimeout(getResetBtn, 2000)
        }
    }
})

nope.addEventListener("click", function() {
    if(!isWaiting && dogsArray.length!=0) {
        if(dogsArray.length>0) {
            const currentDog = new Info(dogsArray[0]) 
            document.getElementById("main").innerHTML = currentDog.getCross()
            
        }
        dogsArray.shift()
        setTimeout(render, 2000)
        isWaiting = true
        if(dogsArray.length===0) {
            setTimeout(getResetBtn, 2000)
         }
    } 
})

render()

rbtn.addEventListener("click", function() {
    dogsArray = dogs.map( num => num) 
    rbtn.style.display = "none"
    render()
})




