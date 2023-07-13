const weekarr = ["صندوق بندورا، كان ",
"صندوق ",
"حله",
"جره *",
"برميل "];

var week = 0;
var weekans = 0; //1,2,3,4
var weekp = 0;
var weekb = true;
var weeko = 0;

var hover = true;

function weekimp() {
    if (weekarr[week]) {

        document.getElementById("q").innerHTML = weekarr[week];

        weekb = true;
        hover = true;
        for (let i = 1; i < 5; ++i) {
            document.getElementById("opt" + i).src = "../images/million.png";
            if (weekarr[++week].includes("*")) {
                document.getElementById(i).innerHTML = weekarr[week].replace('*', '');
                weekans = i;
            } else {
                document.getElementById(i).innerHTML = weekarr[week];
            }
        }
        ++week;

    }else{
        if(weeko == weekans){
            document.getElementById("totalp").innerHTML += "صح";
        }else{
        document.getElementById("totalp").innerHTML += "غلط";
    }
        document.getElementById("pop").style.display = "block";
        setTimeout(gotoMainPage, 3000);
    }
}
function gotoMainPage(){
    location.replace("../index.html");
}

function test(opt){
    weeko = opt;
    if(hover == true){
        hover = false;
    document.getElementById("opt" + opt).src = "../images/million\ -\ hover.png";
    setTimeout(check,500,opt);
    }else{
        return;
    }
}

function check(opt) {
    if (weekb == true) {

        if (opt != weekans) {
            document.getElementById("opt" + opt).src = "../images/million - red.png";
        }else{++weekp;}

        document.getElementById("opt" + weekans).src = "../images/million - win.png";
        weekb = false;
        setTimeout(weekimp, 2000);
    }
}
