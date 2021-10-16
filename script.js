var first = 0;
var second = 0;

function addDigit(digit) {
    if (document.getElementById("result").value ==0){
        document.getElementById("result").value =digit;
    }
    else{
        document.getElementById("result").value +=digit;
    }
}

function op(code){
    first = document.getElementById("result").value;
    codes = code;
    erase();
}

function erase(){
    document.getElementById("result").value = "0";
}

function tw(){
    first = document.getElementById("result").value;
    pup = parseInt(first)/parseInt(2);
    document.getElementById("result").value = pup;
}

function clc(){
    second = document.getElementById("result").value;
    if(codes==2){
        itog = parseInt(first)+parseInt(second);
    }
    else if(codes==1){
        itog = parseInt(first)*parseInt(second);
    }
    else if(codes==3){
        itog = parseInt(first)-parseInt(second);
    }
    else if(codes==0){
        itog = parseInt(first)/parseInt(second);
    }
    document.getElementById("result").value = itog;
}

function zxc(){
    first = document.getElementById("result").value;
    qwe = parseInt(first)-parseInt(7);
    document.getElementById("result").value = qwe;
}

function qwe(){
    document.getElementById("result").value = 1000;
}