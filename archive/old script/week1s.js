const weekonearr = ["صندوق بندورا، كان ",
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
    const weektwoarr = ["اول نسخة لفيفا كانت باسم ",
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

    
    
    var week1 = 0;
    var week1ans = 0; //1,2,3,4
    var week1p = 0;
    var week1b = true;
    
    var hover = true;
    
    function week1imp(arr) {
        switch(arr){
            case 1:
            week1arr = weekonearr;
            break;
            case 2:
            week1arr = weektwoarr;
            break;
        }
        
        if (week1arr[week1]) {
            // Reset all options to the default state before setting new question
            for (let i = 1; i <= 4; i++) {
                document.getElementById("opt" + i).style.backgroundImage = "url('../images/million.png')"; // Reset background
            }
    
            document.getElementById("q").innerHTML = week1arr[week1];
    
            week1b = true;
            hover = true;
            for (let i = 1; i < 5; ++i) {
                if (week1arr[++week1].includes("*")) {
                    document.getElementById(i).innerHTML = week1arr[week1].replace('*', '');
                    week1ans = i;
                } else {
                    document.getElementById(i).innerHTML = week1arr[week1];
                }
            }
            ++week1;
    
        } else {
            alert("good job");
            // setTimeout(gotoMainPage, 3000);
            gotoMainPage();
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
        if (week1b == true) {
            const correctOption = week1ans;
            
            // Check if the selected option is correct or not
            if (opt != correctOption) {
                document.getElementById("opt" + opt).style.backgroundImage = "url('../images/million - red.png')";
                document.getElementById("opt" + week1ans).style.backgroundImage = "url('../images/million - win.png')";
            } else {
                ++week1p;
                document.getElementById("opt" + correctOption).style.backgroundImage = "url('../images/million - win.png')";
            }
            
            // Disable further clicks
            week1b = false;
    
            // Move to next question after 2 seconds
            setTimeout(week1imp, 2000);
        }
    }