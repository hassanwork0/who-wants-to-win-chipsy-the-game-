const week3arr = ["مين فاز بالبريمير ليج في موسم 1994/1995",
"Liverpool",
"Nottingham forest",
"blackburn rovers*",
"Manchester united",
"لعيب سجل هاتريك مع السيتي في 2023/2022",
"هالاند*",
"دي بروين",
"الفاريز",
"بيرناندو سيلفا",
"ارسنال كسب كام برمير ليج",
"13*",
"15",
"17",
"11",
"اغنية قطر الحياة كانت موضوعها ايه؟",
"الهروب من الواقع*",
"كبره في السن",
"بيتكلم عن موته في حادثة",
"الحياة عدت بسرعة",
"ايه اول هيت عمله مروان بابلو",
"سيندباد",
"الغلاف",
"كاس",
"الجميزة*",
"مين برديوسر تراك 21 ويجز",
"مولوتوف",
"الفايف*",
"راشد",
"ليل بابا",
"اكمل : سكتي معروفة",
"العائلة الغنية هتيجي مني انا",
"احنا نولعها بركان",
"ماله الواد ده شايف نفسه كده ليه",
"و فيها كلاب*",
"ايه اول بلد بتزعم انهم عملوا اول طيارة",
"امريكا",
"البرازيل*",
"انجلترا",
"روسيا",
"الصندوق الاسود لونه ايه",
"اصفر",
"احمر*",
"برتقاني",
"اسود",
"مين عمل اول طيارة نفاثة",
"امريكا",
"المانيا*",
"فرنسا",
"ايطاليا",
"اكبر بحر في العالم",
"بحر الصين الجنوبي*",
"بحر المتوسط",
"المحيط الانترتيكي",
"بحر البدرشين",
"حرب الاخوات كانت مبين",
"بروسيا و النمسا",
"بروسيا و روسيا",
"انجلترا و فرنسا*",
"سبانيا و المغرب",
"الحرب العالمية الثانية ابتدت ب ايه",
"المانيا احتلت بولندا*",
"المانيا احتلت فرنسا",
"فرنسا احتلت المانيا",
"انجلترا احتلت فرنسا"];

var week3 = 0;
var week3ans = 0; //1,2,3,4
var week3p = 0;
var week3b = true;

var hover = true;

function week3imp() {
    if (week3arr[week3]) {
        document.getElementById("q").innerHTML = week3arr[week3];

        week3b = true;
        hover = true;
        for (let i = 1; i < 5; ++i) {
            document.getElementById("opt" + i).src = "../images/million.png";
            if (week3arr[++week3].includes("*")) {
                document.getElementById(i).innerHTML = week3arr[week3].replace('*', '');
                week3ans = i;
            } else {
                document.getElementById(i).innerHTML = week3arr[week3];
            }
        }
        ++week3;

    }else{
        window.localStorage.setItem("week3res",week3p);
        document.getElementById("totalp").innerHTML += window.localStorage.getItem("week3res");
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
    if (week3b == true) {

        if (opt != week3ans) {
            document.getElementById("opt" + opt).src = "../images/million - red.png";
        }else{++week3p;}

        document.getElementById("opt" + week3ans).src = "../images/million - win.png";
        week3b = false;
        setTimeout(week3imp, 2000);
    }
}

