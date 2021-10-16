var first = 0;
var second = 0;
document.addEventListener("keyup", rise);

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

function rise(event){
    console.log(event.keyCode)
    if (event.keyCode==103){
        addDigit(7)
    }
    else if (event.keyCode==104){
        addDigit(8)
    }
    else if (event.keyCode==105){
        addDigit(9)
    }
    else if (event.keyCode==100){
        addDigit(4)
    }
    else if (event.keyCode==101){
        addDigit(5)
    }
    else if (event.keyCode==102){
        addDigit(6)
    }
    else if (event.keyCode==97){
        addDigit(1)
    }
    else if (event.keyCode==98){
        addDigit(2)
    }
    else if (event.keyCode==99){
        addDigit(3)
    }
    else if (event.keyCode==96){
        addDigit(0)
    }
    else if (event.keyCode==107){
        op(2)
    }
    else if (event.keyCode==109){
        op(3)
    }
    else if (event.keyCode==106){
        op(1)
    }
    else if (event.keyCode==111){
        op(0)
    }
    else if (event.keyCode==13){
        clc()
    }
    else if (event.keyCode==32){
        erase()
    }
    else if (event.keyCode==110){
    tw()
    }
}