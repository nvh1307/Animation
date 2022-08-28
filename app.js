var animationElement = document.querySelectorAll('.show-on-scrool')
console.log(animationElement)
function toggle(element){
    // 1 item
    var rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight
    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        // ben trong window
        element.classList.add('start')
    }else{
        // ben ngoai window
        element.classList.remove('start')

    }

}

function checkAnimation(){
    animationElement.forEach(el=>{
        toggle(el)
    })
}

window.onscroll = checkAnimation