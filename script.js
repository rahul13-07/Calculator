var message = "function disabled";

function rtclickcheck(keyp){ if (navigator.appName == "Netscape" && keyp.which == 3){ alert(message); return false; }

if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) { alert(message); return false; } }

document.onmousedown = rtclickcheck;

var flag = 0;
function clearScreen(){
    document.getElementById("result").value = "" ;
    flag = 0;
}
function f(value){
    if(flag == 1){
        clearScreen();
    }
    document.getElementById("result").value += value;
}
function clearElement(){
    if(flag == 1){
        clearScreen();
    }
   var str = document.getElementById("result").value;
   str = str.slice(0,-1);
   document.getElementById("result").value = str;
}
function calculate(){
    var str = document.getElementById("result").value;
    var answer = eval(str);
    document.getElementById("result").value = answer;
    flag = 1;
}
document.addEventListener('keydown', (event) => {
    if (event.key == "0") {document.getElementById("result").value += "0";}
    else if (event.key == "1") {document.getElementById("result").value += "1";}
    else if (event.key == "2") {document.getElementById("result").value += "2";}
    else if (event.key == "3") {document.getElementById("result").value += "3";}
    else if (event.key == "4") {document.getElementById("result").value += "4";}
    else if (event.key == "5") {document.getElementById("result").value += "5";}
    else if (event.key == "6") {document.getElementById("result").value += "6";}
    else if(event.key == "7") {document.getElementById("result").value += "7";}
    else if(event.key == "8") {document.getElementById("result").value += "8";}
    else if(event.key == "9") {document.getElementById("result").value += "9";}
    else if(event.key == "+") {document.getElementById("result").value += "+";}
    else if(event.key == "-") {document.getElementById("result").value += "-";}
    else if(event.key == "*") {document.getElementById("result").value += "*";}
    else if(event.key == "/") {document.getElementById("result").value += "/";}
    else if(event.key == ".") {document.getElementById("result").value += ".";}
    else if(event.key == "=") {calculate();}
    else if(event.key == "Enter") {calculate();}
    else if(event.key == "Backspace") {clearElement();}
});