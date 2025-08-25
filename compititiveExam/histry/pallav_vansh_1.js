const questions = [
    {
        topHeading: "पल्लव वंश पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.93)"
    },
    {
        question: "पल्लव वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "सिंहविष्णु", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंहविष्णु को पल्लव वंश का संस्थापक माना जाता है, जिसने 575 ईस्वी के आसपास शासन स्थापित किया।"
    },
    {
        question: "पल्लवों की राजधानी क्या थी?",
        answers: shuffle([
            { text: "मदुरै", correct: false },
            { text: "उरैयूर", correct: false },
            { text: "कांची", correct: true },
            { text: "तंजावुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लवों की राजधानी कांचीपुरम (आधुनिक कांची) थी, जो शिक्षा और संस्कृति का एक महत्वपूर्ण केंद्र था।"
    },
    {
        question: "किस पल्लव शासक को 'अवनीसिंह' की उपाधि से जाना जाता था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "सिंहविष्णु", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंहविष्णु ने अपने शासनकाल में 'अवनीसिंह' (पृथ्वी का शेर) की उपाधि धारण की थी।"
    },
    {
        question: "'महाबलीपुरम' (मामल्लपुरम) के एकाश्म रथ मंदिरों का निर्माण किस पल्लव शासक ने करवाया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I, जिसे 'मामल्ल' के नाम से भी जाना जाता था, ने महाबलीपुरम के प्रसिद्ध रथ मंदिरों का निर्माण करवाया था।"
    },
    {
        question: "चालुक्य शासक पुलकेशिन II ने किस पल्लव शासक को पराजित किया था, जिससे चालुक्य-पल्लव संघर्ष की शुरुआत हुई?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I के शासनकाल में चालुक्य शासक पुलकेशिन II ने पल्लवों पर आक्रमण किया और उसे पराजित किया, जिससे दोनों राजवंशों के बीच संघर्ष शुरू हुआ।"
    },
    {
        question: "किस पल्लव शासक को 'मत्तविलास प्रहसन' नामक संस्कृत व्यंग्य नाटक का लेखक माना जाता है?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I एक कुशल कलाकार, कवि और लेखक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने 'मत्तविलास प्रहसन' नामक व्यंग्य नाटक की रचना की थी।"
    },
    {
        question: "चालुक्य शासक पुलकेशिन II को पराजित करके 'वातापीकोंड' (वातापी का विजेता) की उपाधि किसने धारण की थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "परमेश्वरवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने चालुक्य राजधानी वातापी पर विजय प्राप्त की और पुलकेशिन II को मार डाला, जिसके बाद उसने यह उपाधि धारण की।"
    },
    {
        question: "महाबलीपुरम का 'शोर मंदिर' (Shore Temple) किस पल्लव शासक के शासनकाल में बनवाया गया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II (राजसिंह)", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन II, जिसे 'राजसिंह' के नाम से भी जाना जाता था, ने महाबलीपुरम के शोर मंदिर और कांची के कैलाशनाथ मंदिर का निर्माण करवाया था।"
    },
    {
        question: "'दशकुमारचरित' नामक ग्रंथ के लेखक दंडी किस पल्लव शासक के दरबार में रहते थे?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंडी, जो 'दशकुमारचरित' और 'काव्यादर्श' के लेखक थे, नरसिंहवर्मन II (राजसिंह) के दरबार में एक महान लेखक थे।"
    },
    {
        question: "पल्लव वास्तुकला की किस शैली में चट्टानों को काटकर मंडप (गुफा मंदिर) बनाए जाते थे?",
        answers: shuffle([
            { text: "महेंद्र शैली", correct: true },
            { text: "मामल्ल शैली", correct: false },
            { text: "राजसिंह शैली", correct: false },
            { text: "अपराजित शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I के शासनकाल में शुरू हुई 'महेंद्र शैली' में चट्टानों को काटकर मंडप या गुफा मंदिर बनाए जाते थे।"
    },
    {
        question: "'काशी' के प्रसिद्ध कैलाशनाथ मंदिर का निर्माण किस पल्लव शासक ने करवाया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांची का कैलाशनाथ मंदिर नरसिंहवर्मन II द्वारा बनवाया गया था और यह पल्लव वास्तुकला का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "चालुक्य शासक विक्रमादित्य II ने किस पल्लव शासक को पराजित कर कांची पर कब्जा किया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: true },
            { text: "नरसिंहवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य II ने नंदीवर्मन II को पराजित कर पल्लव राजधानी कांची पर कई बार आक्रमण किया और उसे जीता।"
    },
    {
        question: "किस विदेशी यात्री ने पल्लव शासक नरसिंहवर्मन I के शासनकाल में कांची की यात्रा की थी?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेनसांग", correct: true },
            { text: "इब्नबतूता", correct: false },
            { text: "मार्को पोलो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध चीनी यात्री ह्वेनसांग ने लगभग 640 ईस्वी में पल्लव राजधानी कांची की यात्रा की थी।"
    },
    {
        question: "पल्लव शासक 'नरसिंहवर्मन I' ने किस चोल शासक को पराजित किया था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा I", correct: false },
            { text: "परंतक I", correct: false },
            { text: "आदित्य I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने चोलों को अपने अधीन किया था, जबकि बाद में विजयालय ने पल्लवों से स्वतंत्रता प्राप्त कर चोल साम्राज्य की स्थापना की।"
    },
    {
        question: "'वैकुंठपेरुमल मंदिर' का निर्माण किस पल्लव शासक ने करवाया था, जिसमें पल्लव इतिहास का चित्रण है?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांची में स्थित वैकुंठपेरुमल मंदिर का निर्माण नंदीवर्मन II ने करवाया था, जिसकी दीवारों पर पल्लव इतिहास की मूर्तियाँ अंकित हैं।"
    },
    {
        question: "पल्लवों और चालुक्यों के बीच संघर्ष का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "व्यापारिक मार्ग", correct: false },
            { text: "राजनीतिक प्रभुत्व", correct: true },
            { text: "धार्मिक मतभेद", correct: false },
            { text: "भू-राजस्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लव और चालुक्यों के बीच दक्षिण भारत में राजनीतिक प्रभुत्व स्थापित करने के लिए लंबे समय तक संघर्ष चला।"
    },
    {
        question: "'मामल्लपुरम' में स्थित एकाश्म रथ मंदिर किस शैली के उदाहरण हैं?",
        answers: shuffle([
            { text: "महेंद्र शैली", correct: false },
            { text: "मामल्ल शैली", correct: true },
            { text: "राजसिंह शैली", correct: false },
            { text: "अपराजित शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाबलीपुरम के रथ मंदिरों का निर्माण नरसिंहवर्मन I (मामल्ल) ने करवाया था, इसलिए यह मामल्ल शैली के उदाहरण हैं।"
    },
    {
        question: "किस पल्लव शासक ने चालुक्यों को पराजित कर 'परमेश्वर' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमेश्वरवर्मन I ने चालुक्य शासकों को पराजित कर 'परमेश्वर' और 'महामल्ल' जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "किस शासक को 'राजसिंह' के नाम से भी जाना जाता था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन II ने अपने शासनकाल में 'राजसिंह' (राजाओं में शेर) की उपाधि धारण की थी।"
    },
    {
        question: "पल्लव राजवंश में 'अपराजित' शैली किस शासक के नाम पर थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "अपराजित", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपराजित पल्लव वंश का अंतिम शासक था, और उसके नाम पर ही 'अपराजित शैली' का नामकरण हुआ, जो पल्लव वास्तुकला की अंतिम शैली थी।"
    },
    {
        question: "'वराह गुफा मंदिर' किस पल्लव शासक के शासनकाल में निर्मित हुआ था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाबलीपुरम में स्थित वराह गुफा मंदिर नरसिंहवर्मन I (मामल्ल) के शासनकाल में बनाया गया था, जो मामल्ल शैली का एक उदाहरण है।"
    },
    {
        question: "पल्लव वंश के किस शासक ने अपनी सैन्य शक्ति के लिए 'रणजय' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "सिंहविष्णु", correct: false },
            { text: "परमेश्वरवर्मन I", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमेश्वरवर्मन I को उसकी सैन्य विजयों के कारण 'रणजय' (युद्ध का विजेता) की उपाधि मिली थी।"
    },
    {
        question: "पल्लव काल में 'सभा' क्या थी?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रशासनिक इकाई", correct: false },
            { text: "ब्राह्मणों की एक सभा", correct: true },
            { text: "व्यापारियों का एक समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लव शासन में 'सभा' ब्राह्मणों की एक सभा थी, जो गाँवों के प्रशासन का कार्य करती थी।"
    },
    {
        question: "'कांची' के प्रसिद्ध वैकुंठपेरुमल मंदिर की दीवारों पर किस राजवंश के शासकों का इतिहास उत्कीर्ण है?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "पांड्य", correct: false },
            { text: "चालुक्य", correct: false },
            { text: "पल्लव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैकुंठपेरुमल मंदिर की दीवारों पर पल्लव शासकों के इतिहास और उनके राज्याभिषेक समारोहों का चित्रण मिलता है।"
    },
    {
        question: "पल्लव वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "नंदीवर्मन II", correct: false },
            { text: "अपराजित", correct: true },
            { text: "महेंद्रवर्मन II", correct: false },
            { text: "परमेश्वरवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपराजित पल्लव वंश का अंतिम शासक था, जिसे 897 ईस्वी के आसपास चोल शासक आदित्य I ने पराजित कर पल्लव साम्राज्य का अंत कर दिया।"
    },
    {
        question: "पल्लव शासक महेंद्रवर्मन I किस धर्म का अनुयायी था?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I अपने प्रारंभिक जीवन में जैन धर्म का अनुयायी था, लेकिन बाद में शैव संत अप्पार (तिरुनावुक्करसु) के प्रभाव से शैव धर्म अपना लिया।"
    },
    {
        question: "चालुक्य-पल्लव संघर्ष के दौरान, किस चालुक्य शासक ने पल्लवों की राजधानी कांची पर हमला कर उसे लूट लिया था?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "पुलकेशिन II", correct: false },
            { text: "विक्रमादित्य I", correct: false },
            { text: "विक्रमादित्य II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य II ने अपने शासनकाल में तीन बार पल्लव राजधानी कांची पर आक्रमण किया और उसे जीत लिया।"
    },
    {
        question: "पल्लव शासक महेंद्रवर्मन I ने किस चालुक्य शासक से युद्ध किया था?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "पुलकेशिन II", correct: true },
            { text: "कीर्तिवर्मन I", correct: false },
            { text: "विक्रमादित्य I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लव शासक महेंद्रवर्मन I और चालुक्य शासक पुलकेशिन II के बीच कांची और वातापी में कई युद्ध हुए।"
    },
    {
        question: "पल्लवों की 'मंडप शैली' के मंदिरों का निर्माण किस शासक ने शुरू करवाया था?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I को पल्लव वास्तुकला की शुरुआत का श्रेय दिया जाता है, जिसने चट्टानों को काटकर बनाए गए 'मंडप' शैली के मंदिरों का निर्माण करवाया।"
    },
    {
        question: "महाबलीपुरम के प्रसिद्ध 'पंच पांडव रथ' मंदिर किस शैली के उदाहरण हैं?",
        answers: shuffle([
            { text: "महेंद्र शैली", correct: false },
            { text: "मामल्ल शैली", correct: true },
            { text: "राजसिंह शैली", correct: false },
            { text: "अपराजित शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंच पांडव रथ' मंदिर नरसिंहवर्मन I (मामल्ल) के शासनकाल में बनाए गए थे, और ये मामल्ल शैली की वास्तुकला को दर्शाते हैं।"
    },
    {
        question: "'कांची' के प्रसिद्ध कैलाशनाथ मंदिर को किस अन्य नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "राजसिंहेश्वर मंदिर", correct: true },
            { text: "महाबलीपुरम मंदिर", correct: false },
            { text: "शोर मंदिर", correct: false },
            { text: "विष्णु मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांची का कैलाशनाथ मंदिर नरसिंहवर्मन II (राजसिंह) द्वारा बनवाया गया था, इसलिए इसे 'राजसिंहेश्वर मंदिर' भी कहा जाता है।"
    },
    {
        question: "किस पल्लव शासक ने 'ललितांकुर पल्लव' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I ने 'ललितांकुर पल्लव', 'विचित्रचित्त' और 'चित्रकारपुलि' जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "'पल्लव' वंश के किस शासक ने कांची के वैकुंठपेरुमल मंदिर की दीवारों पर पल्लवों के इतिहास को उत्कीर्ण करवाया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्मन II द्वारा बनवाया गया वैकुंठपेरुमल मंदिर, पल्लव इतिहास और राज्याभिषेक समारोहों की जानकारी प्रदान करता है।"
    },
    {
        question: "पल्लव वास्तुकला की 'राजसिंह शैली' में किस प्रकार के मंदिरों का निर्माण हुआ?",
        answers: shuffle([
            { text: "चट्टानों को काटकर बनाए गए मंडप", correct: false },
            { text: "एकाश्म रथ", correct: false },
            { text: "संरचनात्मक मंदिर (Structure Temples)", correct: true },
            { text: "छोटे गुफा मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन II (राजसिंह) के शासनकाल में पहली बार संरचनात्मक मंदिरों का निर्माण हुआ, जैसे कि शोर मंदिर और कैलाशनाथ मंदिर।"
    },
    {
        question: "'कांची' में स्थित प्रसिद्ध 'मुक्तेश्वर मंदिर' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: true },
            { text: "अपराजित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांची का मुक्तेश्वर मंदिर, जो पल्लव वास्तुकला का एक और उदाहरण है, नंदीवर्मन II ने बनवाया था।"
    },
    {
        question: "पल्लव शासक 'नरसिंहवर्मन I' ने अपनी किस उपाधि के कारण 'महाबलीपुरम' नामक शहर की स्थापना की थी?",
        answers: shuffle([
            { text: "वातापीकोंड", correct: false },
            { text: "महामल्ल", correct: true },
            { text: "अवनीसिंह", correct: false },
            { text: "रणजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I को 'महामल्ल' (महान पहलवान) की उपाधि मिली थी, और उसके नाम पर ही 'मामल्लपुरम' (महाबलीपुरम) शहर का नाम पड़ा।"
    },
    {
        question: "पल्लवों का राज्य-चिह्न क्या था?",
        answers: shuffle([
            { text: "बाघ", correct: false },
            { text: "धनुष", correct: false },
            { text: "मछली", correct: false },
            { text: "नंदी (बैल)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदी (बैल) पल्लव राजवंश का राजकीय चिह्न था, जो उनके शैव धर्म के प्रति लगाव को दर्शाता है।"
    },
    {
        question: "'अवनीभाजन' की उपाधि किस पल्लव शासक ने धारण की थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "सिंहविष्णु", correct: false },
            { text: "परमेश्वरवर्मन I", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमेश्वरवर्मन I ने चालुक्यों पर विजय प्राप्त करने के बाद 'रणजय' और 'अवनीभाजन' (पृथ्वी का रक्षक) जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "पल्लव काल में 'उर' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रशासनिक इकाई", correct: false },
            { text: "गैर-ब्राह्मणों का गाँव", correct: true },
            { text: "व्यापारियों का गाँव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लव और चोल प्रशासन में 'उर' एक सामान्य गाँव था, जहाँ गैर-ब्राह्मण किसान रहते थे।"
    },
    {
        question: "किस पल्लव शासक के शासनकाल में 'महाबलीपुरम' यूनेस्को विश्व धरोहर स्थल बना?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाबलीपुरम के मंदिरों को 1984 में यूनेस्को विश्व धरोहर स्थल घोषित किया गया, जो आधुनिक समय की घटना है।"
    },
    {
        question: "'कांची' के वैकुंठपेरुमल मंदिर का निर्माण किस पल्लव शासक के शासनकाल में हुआ था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैकुंठपेरुमल मंदिर का निर्माण नंदीवर्मन II ने करवाया था, जो पल्लव शासकों में एक प्रमुख वैष्णव शासक था।"
    },
    {
        question: "किस पल्लव शासक को 'मल्ल' की उपाधि से भी जाना जाता था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I को 'महामल्ल' या 'मल्ल' (पहलवान) के रूप में जाना जाता था, जिसने महाबलीपुरम की स्थापना की थी।"
    },
    {
        question: "'मत्तविलास प्रहसन' में किस धार्मिक संप्रदाय पर व्यंग्य किया गया है?",
        answers: shuffle([
            { text: "बौद्ध और जैन", correct: true },
            { text: "शैव और वैष्णव", correct: false },
            { text: "शैव और बौद्ध", correct: false },
            { text: "जैन और वैष्णव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I के इस व्यंग्यात्मक नाटक में बौद्ध भिक्षुओं और जैन संन्यासियों के जीवन पर कटाक्ष किया गया है।"
    },
    {
        question: "किस पल्लव शासक ने चालुक्य शासक विक्रमादित्य II के आक्रमण का सफलतापूर्वक सामना किया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: true },
            { text: "परमेश्वरवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य II ने नंदीवर्मन II के शासनकाल में कांची पर हमला किया, लेकिन नंदीवर्मन II ने अपनी राजधानी की रक्षा की।"
    },
    {
        question: "पल्लव काल में शिक्षा का सबसे बड़ा केंद्र कौन-सा था?",
        answers: shuffle([
            { text: "महाबलीपुरम", correct: false },
            { text: "कांची", correct: true },
            { text: "मदुरै", correct: false },
            { text: "तंजावुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांची पल्लव शासनकाल में शिक्षा और संस्कृति का एक महत्वपूर्ण केंद्र था, जिसे 'घटिका' कहा जाता था।"
    },
    {
        question: "किस पल्लव शासक के शासनकाल में 'पंच पांडव रथ' मंदिर बनाए गए थे?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "परमेश्वरवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाबलीपुरम के रथ मंदिर, जिन्हें पंच रथ भी कहा जाता है, नरसिंहवर्मन I द्वारा बनवाए गए थे।"
    },
    {
        question: "पल्लव वंश के किस शासक ने 'परमेश्वर' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमेश्वरवर्मन I ने अपनी सैन्य सफलताओं के बाद 'परमेश्वर' की उपाधि धारण की थी।"
    },
    {
        question: "'पल्लव' वंश का अंतिम शासक कौन था जिसे चोल शासक आदित्य I ने पराजित किया था?",
        answers: shuffle([
            { text: "नंदीवर्मन II", correct: false },
            { text: "अपराजित", correct: true },
            { text: "महेंद्रवर्मन II", correct: false },
            { text: "परमेश्वरवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल शासक आदित्य I ने 897 ईस्वी में अपराजित को पराजित कर पल्लव साम्राज्य का अंत कर दिया और चोल साम्राज्य का विस्तार किया।"
    },
    {
        question: "किस पल्लव शासक के शासनकाल में चीन से बौद्ध भिक्षु 'बोधिधर्म' का आगमन हुआ था?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध भिक्षु बोधिधर्म, जो भारत से चीन गए थे, का काल पल्लव वंश के प्रारंभिक शासकों के समय था, लेकिन किसी विशिष्ट शासक का उल्लेख नहीं मिलता है।"
    },
    {
        question: "पल्लव काल में 'घटिका' क्या थी?",
        answers: shuffle([
            { text: "एक धार्मिक त्योहार", correct: false },
            { text: "एक प्रशासनिक परिषद", correct: false },
            { text: "एक शिक्षण संस्थान", correct: true },
            { text: "एक कर प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लव काल में 'घटिका' कांची में स्थित एक उच्च शिक्षा का केंद्र था, जहाँ वेदों और अन्य शास्त्रों की शिक्षा दी जाती थी।"
    }
];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }