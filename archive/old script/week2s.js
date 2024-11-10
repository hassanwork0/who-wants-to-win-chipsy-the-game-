const week2arr = ["اول نسخة لفيفا كانت باسم ",
"FIFA 1994",
"FIFA 1995*",
"FIFA 1996",
"FIFA 1998",
"من هو مؤسس نادي ارسنال ",
"مرتضي منصور ",
"ويليام جيلبرت ",
"ديڤيد دانسكين *",
"نيوتن هيث",
"داد عايز اعمل عيد ميلادي في الاستاد من كلمات",
"اب يوسف *",
"عفروتو ",
"مروان موسي ",
"كريم انزو ",
"من هو مؤسس علم الاجتماع؟",
"هارون ",
"الحسن ابن الهيثم ",
"ابن خالدون *",
"اقليدس ",
"اين يعيش الدب القطبي ",
"عندنا تحت في الشارع ",
"ف بيت اسلام ",
"في القطب الشمالي *",
"في القطب الجنوبي ",
"ماهي الرياضة الغير حقيقية في الاتي ",
"مصارعة الصراصير ",
"فنون القتال عن بعد ",
"مبارزة الاقلام او الكفوف",
"كل دول حقيقة *",
"مين في دول مش من الميثولوجيا الرومانية ",
"اله الخمره ",
"اله الحب ",
"اله الابواب ",
"اله الشجر *",
"اول شركة عملت وجهة المستخدم ",
"Apple",
"Microsoft",
"IBM",
"xerox *",
"مبرمجين الجافا اكثر من عدد سكان",
"استراليا ",
"جنوب افريقيا",
"غانا ",
"ايس لاندا *",
"مين اول لاعب خد الكورة الزهبية ",
"Pelé CAM",
"Stanley Matthews *",
"Alfredo Di Stéfano",
"Maradona",
"مين في الاتي يصنف مقوي جنسي",
"الفول",
"الكيوي *",
"الفراولة ",
"الافوكادو ",
"لعبة ماين كرافت كان اسمها ",
"mine game",
"craft game",
"cave game *",
"Terarria",
"اللمبة الكهربائية من اصل ",
"امريكي",
"بريطاني *",
"ايطالي ",
"صيني",
"ماهي الرياضة المفضلة للعالم البيرت اينشتاين ",
"الابحار *",
"كرة القدم ",
"الصيد ",
"التنس",
"ايه من العلوم دي مش حقيقة",
"علم معرفة المستقبل",
"علم معالجة المثلية",
"علم الرفاهية ",
"علم السفر عبر الذمن *",
"انهي مجرة مش حقيقة ",
"ضرب التبانة ",
"مجرة الابتسامة ",
"NGC 0000*",
"مجرة السيجارة",
"ايه اول فريق لعب فيه الاعب مايكل جوردان",
"Los anglos lakers *",
"chicago bulls",
"BROOKLYN NETS",
"Philadelphia 76ers",
"ايه هي اول دولة عملت الفلوس بل ورق ؟",
"المانيا	 ",
"مصر",
"الصين *",
"المملكة المتحدة",
"كام شخص بيموت من القروش سنويا ",
"5 *",
"50",
"500",
"5000",
"اول فيلم خيال علمي كان في سنة كام",
"1895*",
"1897",
"1902",
"1920"];

var week2 = 0;
var week2ans = 0; //1,2,3,4
var week2p = 0;
var week2b = true;

var hover = true;

function week2imp() {
    if (week2arr[week2]) {

        document.getElementById("q").innerHTML = week2arr[week2];

        week2b = true;
        hover = true;
        for (let i = 1; i < 5; ++i) {
            document.getElementById("opt" + i).src = "../images/million.png";
            if (week2arr[++week2].includes("*")) {
                document.getElementById(i).innerHTML = week2arr[week2].replace('*', '');
                week2ans = i;
            } else {
                document.getElementById(i).innerHTML = week2arr[week2];
            }
        }
        ++week2;

    }else{
        window.localStorage.setItem("week2res",week2p);
        document.getElementById("totalp").innerHTML += window.localStorage.getItem("week2res");
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
    if (week2b == true) {

        if (opt != week2ans) {
            document.getElementById("opt" + opt).src = "../images/million - red.png";
        }else{++week2p;}

        document.getElementById("opt" + week2ans).src = "../images/million - win.png";
        week2b = false;
        setTimeout(week2imp, 2000);
    }
}

