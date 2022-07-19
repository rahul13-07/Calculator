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