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

const week3arr = ["مين فاز بالبريمير ليج في موسم 1994/1995",
    "Liverpool",
    "Nottingham forest",
    "blackburn rovers*",
    "Manchester united",
    "مين سجل هاتريك مع السيتي في 2022/23",
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
    "موته في حادثة",
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
    "هتيجي مني انا",
    "احنا نولعها بركان",
    "ماله الواد ده شايف نفسه",
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

const week4arr = ["الاسبوع تحت التطوير, هذه رسالة مطولة لتجربة ابعاد الشاشة الخاصة بل اسالة",
    "الاسبوع تحت التطوير, هذه رسالة مطولة لتجربة ابعاد الشاشة الخاصة بل اسالة",
    "صح*الاسبوع تحت التطوير, هذه رسالة مطولة لتجربة ابعاد الشاشة الخاصة بل اسالة",
    "غالاسبوع تحت التطوير, هذه رسالة مطولة لتجربة ابعاد الشاشة الخاصة بل اسالة",
    "غلالاسبوع تحت التطوير, هذه رسالة مطولة لتجربة ابعاد الشاشة الخاصة بل اسالة"];


var week = 0;
var weekans = 0; //1,2,3,4
var weekp = 0;
var weekb = true;

var hover = true;

var weeked = false;

let arr;
var weekarr;

function weekimp() {
    if (!weeked) {
        arr = parseInt(localStorage.getItem("week"));
        switch (arr) {
            case 1:
                weekarr = week1arr;
                break;
            case 2:
                weekarr = week2arr;
                break;
            case 3:
                weekarr = week3arr;
                break;
            case 4:
                weekarr = week4arr;
                break;
        }
        weeked = true;
    }
    if (weekarr[week]) {
        // Reset all options to the default state before setting new question
        for (let i = 1; i <= 4; i++) {
            document.getElementById("opt" + i).style.backgroundImage = "url('../images/million.png')"; // Reset background
        }

        document.getElementById("q").innerHTML = weekarr[week];
        if (window.innerWidth < 450) {
            document.getElementById("ques").style.marginBottom = '20vh';
            var textElement = weekarr[week];
            var textLength = textElement.length; // only works if textElement is a string
            // Calculate font size based on the length of the text
            var fontSize = 20;
            if(textLength > 25){
                fontSize = Math.max(12, 100 / textLength);
            }
            document.getElementById("q").style.fontSize =
             fontSize + "px";
        }


    weekb = true;
    hover = true;
    for (let i = 1; i <= 4; ++i) {
        if (weekarr[++week].includes("*")) {
            document.getElementById(i).innerHTML = weekarr[week].replace('*', '');
            weekans = i;
        } else {
            document.getElementById(i).innerHTML = weekarr[week];
        }
    }
    ++week;

} else {
    //pop up screen
    localStorage.setItem(arr, weekp);
    document.getElementById("totalp").innerHTML += weekp;
    document.getElementById("pop").style.display = "block";
    setTimeout(gotoMainPage, 3000);
}
    }

function gotoMainPage() {
    location.replace("../index.html");
}

function test(opt) {
    if (hover == true) {
        hover = false;
        // Apply hover image for 500ms when an option is clicked
        document.getElementById("opt" + opt).style.backgroundImage = "url('../images/million - hover.png')";

        setTimeout(() => check(opt), 500); // Wait for 500ms before checking the answer
    } else {
        return; // Do nothing if already clicked
    }
}

function check(opt) {
    if (weekb == true) {
        const correctOption = weekans;

        // Check if the selected option is correct or not
        if (opt != correctOption) {
            document.getElementById("opt" + opt).style.backgroundImage = "url('../images/million - red.png')";
            document.getElementById("opt" + weekans).style.backgroundImage = "url('../images/million - win.png')";
        } else {
            ++weekp;
            document.getElementById("opt" + correctOption).style.backgroundImage = "url('../images/million - win.png')";
        }

        // Disable further clicks
        weekb = false;

        // Move to next question after 2 seconds
        setTimeout(weekimp, 2000);
    }
}
