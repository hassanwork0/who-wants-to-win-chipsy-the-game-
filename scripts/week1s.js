const week1arr = ["صندوق بندورا، كان ",
"صندوق ",
"حله",
"جره *",
"برميل ",
"ايكاروس لما أجنحته دأبت ووقع، مات ازاي ",
"لما وقع على الأرض",
"مات مخنوق من الهوا",
"مات غرقان *",
"ابوه قتله",
"الحصان بيجاسوس يقرب لميدوسا ",
"مخلوق من دمها *",
"مخلوق من لبنها",
"حيوانها الاليف ",
"كانت سرقاه من حد",
"اله اليدريتش",
"حقيقيين ",
"ميثولوجيا ",
"جزء من قصه *",
"نكته طلعت في ال٢٠٠٠",
"ما هي اكثر عاصمه زياره في العالم ",
"القاهره",
"واشينجطون العاصمه ",
"باريس*",
"دبي",
"تايمز سكوير اكتر مكان سياحي بيزار في العالم ",
"اه ",
"لا *",
"ممكن",
"اعتقد",
"اين تقع مدينه البتراء ",
"عمان",
"الاردن*",
"العراق",
"سوريا ",
"متى تأسست امريكا ",
"١٧٧٦ *",
"١٧٩٠",
"١٧٨٠",
"١٧٧٠",
"جو بايدن هو الرئيس رقم ",
"٥٠ ",
"٤٥",
"٦٠",
"٤٦*",
"مين كاتب سيناريو مسلسل الجماعه ",
"وحيد حامد *",
"حامد وحيد",
"يوسف فرانسيس",
"سيف يوسف ",
"مين مخرج انجح بالارقام ",
"محمد سامي*",
"خالد يوسف ",
"اجمد الجندي",
"محمود ياسين",
"اول جزء الكبير كان سنه كام ",
"٢٠٠٩ ",
"٢٠١٠ *",
"٢٠١١",
"٢٠٠٨",
"ايه هو أول فيلم مصري ناطق",
"ولاد الشعب ",
"*ولاد الزوات",
"ولاد الرجال",
"ولاد الحاره ",
"فيلم ابراهيم الابيض سنه كام ",
"٢٠٠٩ *",
"٢٠٠٨",
"٢٠١١",
"٢٠١٢"];

var week1 = 0;
var week1ans = 0; //1,2,3,4
var week1p = 0;
var week1b = true;

var hover = true;

function week1imp() {
    if (week1arr[week1]) {

        document.getElementById("q").innerHTML = week1arr[week1];

        week1b = true;
        hover = true;
        for (let i = 1; i < 5; ++i) {
            document.getElementById("opt" + i).src = "../images/million.png";
            if (week1arr[++week1].includes("*")) {
                document.getElementById(i).innerHTML = week1arr[week1].replace('*', '');
                week1ans = i;
            } else {
                document.getElementById(i).innerHTML = week1arr[week1];
            }
        }
        ++week1;

    }else{
        window.localStorage.setItem("week1res",week1p);
        document.getElementById("totalp").innerHTML += window.localStorage.getItem("week1res");
        document.getElementById("pop").style.display = "block";
        setTimeout(gotoMainPage, 3000);
    }
}
function gotoMainPage(){
    location.replace("../index.html");
}

function test(opt){
    if(hover == true){
        hover = false;
    document.getElementById("opt" + opt).src = "../images/million\ -\ hover.png";
    setTimeout(check,500,opt);
    }else{
        return;
    }
}

function check(opt) {
    if (week1b == true) {

        if (opt != week1ans) {
            document.getElementById("opt" + opt).src = "../images/million - red.png";
        }else{++week1p;}

        document.getElementById("opt" + week1ans).src = "../images/million - win.png";
        week1b = false;
        setTimeout(week1imp, 2000);
    }
}
