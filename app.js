var leo = document.getElementById("leo");
var leoPosition = 10;
var leoForward = false;
var leoBackward = false;
var leoPower = false;
var chacha = document.getElementById("chacha");
var chachaPosition = 10;
var chachaForward = false;
var chachaBackward = false;
var chachaPower = false;

function moveChacha(type){
    if(type === 'forward'){
        chachaBackward = false;
        chachaPosition += 5;
        chacha.style.right = chachaPosition + "px";
        chacha.style.width = 600 + "px";
        chacha.style.height = 600 + "px";
        if(!leoForward){
        chacha.src = "Images/chacha-forward.gif";
        }
        chachaForward = true;
    }
    if(type === 'backward'){
        chachaForward = false;
        chachaPosition -= 5;
        chacha.style.right = chachaPosition + "px";
        chacha.style.width = 500 + "px";
        chacha.style.height = 500 + "px";
        if(!chachaBackward){
            chacha.src = "Images/chacha-backward.gif";
        }
        chachaBackward = true;
    }
}
function moveLeo(type){
    if(type === 'forward'){
        leoBackward = false;
        leoPosition += 5;
        leo.style.left = leoPosition + "px";
        if(!leoForward){
        leo.src = "Images/leo-forward.gif";
        }
        leoForward = true;
    }
    if(type === 'backward'){
        leoForward = false;
        leoPosition -= 5;
        leo.style.left = leoPosition + "px";
        if(!leoBackward){
            leo.src = "Images/leo-backward.gif";
        }
        leoBackward = true;
    }
    if(type === " "){
        if(!leoPower){
            leo.src = "Images/leo-power.gif";
        }
        leoPower = true;
    }
}
function action(event){
    if(event.key === 'd'){
        moveLeo('forward');
    }
    else if(event.key === 'a'){  
        moveLeo('backward');
    }
    else if(event.key === " "){
        moveLeo(" ");
    }
    else if(event.key === 'ArrowLeft'){  
        moveChacha('forward');
    }
    else if(event.key === 'ArrowRight'){  
        moveChacha('backward');
    }
}
window.addEventListener('keydown', action);

function resetAction(){
    leo.src = "Images/leo.gif";
    chacha.src = "Images/chacha.gif";
    leoForward = false;
    leoBackward = false;
    leoPower = false;
    chachaForward = false;
    chachaBackward = false;
    chachaPower = false;
    chacha.style.width = 300 + "px";
    chacha.style.height = 300 + "px";
}
window.addEventListener('keyup', resetAction);