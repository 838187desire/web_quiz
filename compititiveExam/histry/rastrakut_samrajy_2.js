const questions = [
    {
        topHeading: "राष्ट्रकूट साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.96)"
    },
    {
        question: "राष्ट्रकूट शासक 'अमोघवर्ष प्रथम' ने किस नदी के पानी में अपने आपको डुबोकर आत्महत्या कर ली थी?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "तुंगभद्रा", correct: true },
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष प्रथम ने एक बीमारी से ग्रस्त होने पर जैन धर्म की परंपरा के अनुसार तुंगभद्रा नदी में अपने आपको डुबोकर आत्महत्या कर ली थी।"
    },
    {
        question: "राष्ट्रकूटों के बाद, दक्कन में किस राजवंश ने उनकी जगह ली?",
        answers: shuffle([
            { text: "यादव", correct: false },
            { text: "होयसल", correct: false },
            { text: "काकतीय", correct: false },
            { text: "पश्चिमी चालुक्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कल्याणी के पश्चिमी चालुक्यों ने राष्ट्रकूटों का तख्तापलट कर दक्षिण भारत में एक नया साम्राज्य स्थापित किया।"
    },
    {
        question: "एलोरा की गुफा संख्या 16 में स्थित कैलाश मंदिर का निर्माण किस शासक ने करवाया था?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "कृष्ण प्रथम", correct: true },
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुफा संख्या 16 में स्थित कैलाश मंदिर राष्ट्रकूट शासक कृष्ण प्रथम द्वारा बनवाया गया था और यह भगवान शिव को समर्पित है।"
    },
    {
        question: "राष्ट्रकूट काल में 'मुद्गल' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रशासनिक पद", correct: false },
            { text: "एक सैन्य इकाई", correct: false },
            { text: "एक प्रकार की मुद्रा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुद्गल' राष्ट्रकूट साम्राज्य में सोने की एक प्रकार की मुद्रा थी।"
    },
    {
        question: "राष्ट्रकूटों का अंतिम महान शासक कौन था?",
        answers: shuffle([
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "कृष्ण तृतीय", correct: true },
            { text: "इंद्र चतुर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्ण तृतीय राष्ट्रकूट वंश का अंतिम महान शासक था, जिसकी मृत्यु के बाद साम्राज्य का पतन शुरू हो गया था।"
    },
    {
        question: "राष्ट्रकूटों के शासनकाल में 'उभय-दर्शन' का क्या अर्थ था?",
        answers: shuffle([
            { text: "दो धर्मों का मिश्रण", correct: true },
            { text: "दो प्रकार के कर", correct: false },
            { text: "एक प्रशासनिक समिति", correct: false },
            { text: "एक सैन्य इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट काल में 'उभय-दर्शन' जैन और शैव धर्म के मिश्रण को दर्शाता था, जो उनकी धार्मिक सहिष्णुता को प्रदर्शित करता है।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने 'महाराजाधिराज' और 'परमभट्टारक' जैसी उपाधियाँ धारण की थीं?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "ध्रुव", correct: false },
            { text: "गोविंद तृतीय", correct: true },
            { text: "कृष्ण प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद तृतीय ने अपने साम्राज्य विस्तार के बाद 'महाराजाधिराज', 'परमभट्टारक' और 'पृथ्वीवल्लभ' जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "राष्ट्रकूटों के किस शासक ने कन्नौज के लिए हुए त्रिपक्षीय संघर्ष में भाग लिया और गुर्जर-प्रतिहार शासक वत्सराज तथा पाल शासक धर्मपाल को पराजित किया?",
        answers: shuffle([
            { text: "ध्रुव", correct: true },
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष", correct: false },
            { text: "कृष्ण द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुव (धारावर्ष) ने त्रिपक्षीय संघर्ष में हिस्सा लिया और गुर्जर-प्रतिहार शासक वत्सराज तथा पाल शासक धर्मपाल को पराजित किया।"
    },
    {
        question: "राष्ट्रकूटों की कौन-सी शाखा सबसे अधिक शक्तिशाली थी?",
        answers: shuffle([
            { text: "मान्यखेत के राष्ट्रकूट", correct: true },
            { text: "एलिचपुर के राष्ट्रकूट", correct: false },
            { text: "वेंगी के राष्ट्रकूट", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मान्यखेत के राष्ट्रकूटों ने ही एक विशाल साम्राज्य की स्थापना की थी और वे सबसे शक्तिशाली थे।"
    },
    {
        question: "'कन्नड़ साहित्य का स्वर्ण युग' किस राष्ट्रकूट शासक के शासनकाल को माना जाता है?",
        answers: shuffle([
            { text: "ध्रुव", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: true },
            { text: "गोविंद तृतीय", correct: false },
            { text: "कृष्ण तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष प्रथम के शासनकाल में ही कन्नड़ साहित्य का सर्वाधिक विकास हुआ।"
    },
    {
        question: "राष्ट्रकूट साम्राज्य का अंतिम शासक कौन था, जिसे तैलप द्वितीय ने पराजित किया?",
        answers: shuffle([
            { text: "कृष्ण तृतीय", correct: false },
            { text: "कर्क द्वितीय", correct: true },
            { text: "गोविंद चतुर्थ", correct: false },
            { text: "इंद्र चतुर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्क द्वितीय राष्ट्रकूट वंश का अंतिम शासक था, जिसे कल्याणी के चालुक्य शासक तैलप द्वितीय ने 973 ईस्वी में पराजित किया।"
    },
    {
        question: "राष्ट्रकूट काल में 'ग्राम-कूट' कौन होता था?",
        answers: shuffle([
            { text: "प्रांत का प्रमुख", correct: false },
            { text: "जिले का प्रमुख", correct: false },
            { text: "गाँव का प्रमुख", correct: true },
            { text: "सेना का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्राम-कूट' गाँव के प्रशासन का प्रमुख होता था, जो स्थानीय मामलों को देखता था।"
    },
    {
        question: "किस अरब यात्री ने राष्ट्रकूट साम्राज्य को दुनिया के चार महान साम्राज्यों में से एक माना था?",
        answers: shuffle([
            { text: "अल मसूदी", correct: false },
            { text: "सुलेमान", correct: true },
            { text: "इब्नबतूता", correct: false },
            { text: "अलबरूनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 9वीं शताब्दी के अरब यात्री सुलेमान ने राष्ट्रकूट शासक अमोघवर्ष के साम्राज्य की प्रशंसा की थी।"
    },
    {
        question: "'शांतिपुराण' नामक प्रसिद्ध कन्नड़ ग्रंथ की रचना किस राष्ट्रकूट शासक के दरबार में हुई थी?",
        answers: shuffle([
            { text: "ध्रुव", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "गोविंद तृतीय", correct: false },
            { text: "कृष्ण तृतीय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शांतिपुराण' की रचना कन्नड़ कवि पोन्न ने कृष्ण तृतीय के दरबार में की थी।"
    },
    {
        question: "राष्ट्रकूटों के शासनकाल में 'भोगे' या 'भोगपति' कौन होता था?",
        answers: shuffle([
            { text: "गाँव का मुखिया", correct: false },
            { text: "जिले का प्रमुख", correct: false },
            { text: "छोटे प्रशासनिक क्षेत्र का प्रमुख", correct: true },
            { text: "सेना का अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट प्रशासन में 'भोगे' या 'भोगपति' छोटे प्रशासनिक क्षेत्रों के प्रमुख होते थे।"
    },
    {
        question: "राष्ट्रकूट शासक 'गोविंद तृतीय' ने किस नदी के तट पर अपनी विजयों का जश्न मनाया था?",
        answers: shuffle([
            { text: "नर्मदा", correct: true },
            { text: "तुंगभद्रा", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद तृतीय ने उत्तर भारत में अपनी सफलताओं के बाद नर्मदा नदी के तट पर विजय समारोह आयोजित किया था।"
    },
    {
        question: "'एलोरा' और 'एलिफेंटा' की गुफाओं में किस राजवंश की वास्तुकला देखने को मिलती है?",
        answers: shuffle([
            { text: "चालुक्य", correct: false },
            { text: "राष्ट्रकूट", correct: true },
            { text: "पल्लव", correct: false },
            { text: "गुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलोरा और एलिफेंटा गुफाओं में स्थित कई मंदिर और मूर्तिकलाएँ राष्ट्रकूटों के शासनकाल से संबंधित हैं।"
    },
    {
        question: "राष्ट्रकूटों के शासनकाल में 'महावीराचार्य' नामक गणितज्ञ ने किस ग्रंथ की रचना की थी?",
        answers: shuffle([
            { text: "गणितसारसंग्रह", correct: true },
            { text: "सिद्धांत शिरोमणि", correct: false },
            { text: "लीलावती", correct: false },
            { text: "ब्रह्मस्फुटसिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीराचार्य, जो अमोघवर्ष प्रथम के दरबार में रहते थे, ने 'गणितसारसंग्रह' नामक एक प्रसिद्ध ग्रंथ की रचना की थी।"
    },
    {
        question: "राष्ट्रकूटों का राज्य-चिह्न क्या था?",
        answers: shuffle([
            { text: "नंदी (बैल)", correct: false },
            { text: "गरुड़", correct: false },
            { text: "हाथी", correct: false },
            { text: "शेर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूटों का राजकीय चिह्न 'शेर' था, जो उनकी शक्ति और शौर्य का प्रतीक था।"
    },
    {
        question: "राष्ट्रकूट शासक 'ध्रुव' ने कन्नौज के लिए हुए त्रिपक्षीय संघर्ष में किसे पराजित किया था?",
        answers: shuffle([
            { text: "गुर्जर-प्रतिहार शासक वत्सराज", correct: false },
            { text: "पाल शासक धर्मपाल", correct: false },
            { text: "ए और बी दोनों", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुव ने गुर्जर-प्रतिहार शासक वत्सराज और पाल शासक धर्मपाल दोनों को पराजित किया था।"
    },
    {
        question: "'दंतिदुर्ग' ने किस चालुक्य शासक को हराकर राष्ट्रकूट साम्राज्य की नींव रखी थी?",
        answers: shuffle([
            { text: "पुलकेशिन II", correct: false },
            { text: "विक्रमादित्य II", correct: false },
            { text: "कीर्तिवर्मन II", correct: true },
            { text: "विजयादित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंतिदुर्ग ने चालुक्य शासक कीर्तिवर्मन द्वितीय को पराजित कर राष्ट्रकूट साम्राज्य की स्थापना की।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने 'पंडितवत्सल' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "कृष्ण प्रथम", correct: false },
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "इंद्र तृतीय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्र तृतीय को 'पंडितवत्सल' (विद्वानों का संरक्षक) की उपाधि मिली थी, जो कला और साहित्य के प्रति उसके प्रेम को दर्शाती है।"
    },
    {
        question: "राष्ट्रकूटों का पतन किस वंश के उदय के कारण हुआ?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "कल्याणी के चालुक्य", correct: true },
            { text: "पल्लव", correct: false },
            { text: "होयसल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 973 ईस्वी में कल्याणी के चालुक्य शासक तैलप द्वितीय ने राष्ट्रकूटों को पराजित कर अपने वंश की स्थापना की।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने चोलों को 949 ईस्वी के 'तक्कोलम के युद्ध' में पराजित किया था?",
        answers: shuffle([
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "कृष्ण तृतीय", correct: true },
            { text: "इंद्र चतुर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्ण तृतीय ने 949 ईस्वी के 'तक्कोलम के युद्ध' में चोल शासक परंतक I को पराजित किया था।"
    },
    {
        question: "राष्ट्रकूटों के शासनकाल में 'उर' क्या था?",
        answers: shuffle([
            { text: "गाँव की एक प्रशासनिक समिति", correct: true },
            { text: "एक कर का नाम", correct: false },
            { text: "एक प्रकार का सैनिक", correct: false },
            { text: "एक प्रशासनिक इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उर' गाँव की एक प्रशासनिक समिति थी, जो गाँव के स्थानीय प्रशासन का कार्य करती थी।"
    },
    {
        question: "राष्ट्रकूटों की कौन-सी रानी अपने पुत्रों के लिए संरक्षिका के रूप में जानी जाती है, जिसने राज्य का प्रभावी ढंग से प्रबंधन किया?",
        answers: shuffle([
            { text: "रेवादेवी", correct: false },
            { text: "चंद्रिकादेवी", correct: false },
            { text: "शीला महादेवी", correct: true },
            { text: "लोकमहादेवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शीला महादेवी, गोविंद चतुर्थ की माँ और संरक्षिका थीं, जिन्होंने अपने पुत्रों के अल्पायु होने पर शासन का प्रभावी ढंग से संचालन किया था।"
    },
    {
        question: "राष्ट्रकूट शासकों में से किसने 'हिरण्यगर्भ' नामक धार्मिक अनुष्ठान किया था, जिससे उसे क्षत्रिय के रूप में मान्यता मिली?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: true },
            { text: "कृष्ण प्रथम", correct: false },
            { text: "गोविंद तृतीय", correct: false },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंतिदुर्ग ने चालुक्यों को हराने के बाद अपनी स्थिति को मजबूत करने के लिए उज्जैन में 'हिरण्यगर्भ' नामक अनुष्ठान किया था।"
    },
    {
        question: "राष्ट्रकूट काल में 'भट्टारक' शब्द का प्रयोग किसके लिए किया जाता था?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "मंत्री", correct: false },
            { text: "जैन साधु", correct: true },
            { text: "सैनिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट काल में 'भट्टारक' शब्द का प्रयोग जैन साधुओं के लिए किया जाता था, जिन्हें समाज में विशेष सम्मान प्राप्त था।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने 'सुवर्ण-वर्ष' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "गोविंद तृतीय", correct: true },
            { text: "कृष्ण तृतीय", correct: false },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद तृतीय ने अपनी सैन्य सफलताओं और साम्राज्य विस्तार के कारण 'सुवर्ण-वर्ष' की उपाधि धारण की थी।"
    },
    {
        question: "राष्ट्रकूटों के बाद, दक्षिण भारत में कौन-सा राजवंश सबसे शक्तिशाली बनकर उभरा, जिसने राष्ट्रकूटों के पतन का फायदा उठाया?",
        answers: shuffle([
            { text: "चोल", correct: true },
            { text: "चालुक्य", correct: false },
            { text: "पल्लव", correct: false },
            { text: "चेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूटों के पतन के बाद, चोल राजवंश ने अपनी शक्ति को मजबूत किया और दक्षिण भारत में एक प्रमुख शक्ति बन गया।"
    },
    {
        question: "राष्ट्रकूटों के शासनकाल में 'महासंधिविग्रहिक' कौन होता था?",
        answers: shuffle([
            { text: "सेना का प्रमुख", correct: false },
            { text: "शांति और युद्ध का मंत्री", correct: true },
            { text: "न्याय विभाग का प्रमुख", correct: false },
            { text: "राजस्व विभाग का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महासंधिविग्रहिक' विदेश मामलों का मंत्री होता था, जो शांति और युद्ध की नीतियों का निर्धारण करता था।"
    },
    {
        question: "'दंतिदुर्ग' के बाद उसका कौन-सा संबंधी शासक बना, क्योंकि दंतिदुर्ग के कोई पुत्र नहीं था?",
        answers: shuffle([
            { text: "उसका भाई", correct: false },
            { text: "उसका भतीजा", correct: false },
            { text: "उसका चाचा", correct: true },
            { text: "उसका पुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंतिदुर्ग की मृत्यु के बाद उसका चाचा कृष्ण प्रथम शासक बना, क्योंकि दंतिदुर्ग निःसंतान था।"
    },
    {
        question: "राष्ट्रकूटों के किस शासक को 'कविराज' के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "ध्रुव", correct: false },
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: true },
            { text: "कृष्ण तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष प्रथम स्वयं एक महान विद्वान था और उसने 'कविराजमार्ग' नामक ग्रंथ की रचना की थी, इसलिए उसे 'कविराज' भी कहा जाता है।"
    },
    {
        question: "राष्ट्रकूट काल में 'ग्राम-महाजन' क्या था?",
        answers: shuffle([
            { text: "गाँव का मुखिया", correct: false },
            { text: "गाँव के सभी सदस्यों की सभा", correct: true },
            { text: "गाँव का राजस्व अधिकारी", correct: false },
            { text: "गाँव का न्यायधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्राम-महाजन' गाँव के सभी प्रमुख सदस्यों की एक सभा थी, जो स्थानीय मुद्दों पर निर्णय लेती थी।"
    },
    {
        question: "राष्ट्रकूटों का सबसे प्रसिद्ध व्यापारिक बंदरगाह कौन-सा था?",
        answers: shuffle([
            { text: "कावेरीपट्टनम", correct: false },
            { text: "सोपारा", correct: true },
            { text: "मदुरै", correct: false },
            { text: "तंजावुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोपारा राष्ट्रकूटों का एक प्रमुख बंदरगाह था, जो पश्चिमी तट पर स्थित था।"
    },
    {
        question: "राष्ट्रकूटों के शासनकाल में 'दंडनायक' कौन होता था?",
        answers: shuffle([
            { text: "न्याय विभाग का प्रमुख", correct: false },
            { text: "सेना का अधिकारी", correct: true },
            { text: "राजस्व विभाग का प्रमुख", correct: false },
            { text: "गाँव का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दंडनायक' राष्ट्रकूट सेना में एक महत्वपूर्ण अधिकारी होता था।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने 'गंगों' को पराजित कर उनकी राजधानी को जला दिया था?",
        answers: shuffle([
            { text: "गोविंद तृतीय", correct: true },
            { text: "अमोघवर्ष", correct: false },
            { text: "कृष्ण तृतीय", correct: false },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद तृतीय ने गंग शासकों को पराजित कर उनके राज्य को अपने अधीन कर लिया था।"
    },
    {
        question: "राष्ट्रकूटों के शासनकाल में 'उभय-दर्शन' का क्या अर्थ था?",
        answers: shuffle([
            { text: "दो धर्मों का मिश्रण", correct: true },
            { text: "दो प्रकार के कर", correct: false },
            { text: "एक प्रशासनिक समिति", correct: false },
            { text: "एक सैन्य इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट काल में 'उभय-दर्शन' जैन और शैव धर्म के मिश्रण को दर्शाता था, जो उनके धार्मिक सहिष्णुता को प्रदर्शित करता है।"
    },
    {
        question: "राष्ट्रकूटों के दरबार में 'महावीराचार्य' नामक गणितज्ञ ने किस ग्रंथ की रचना की थी?",
        answers: shuffle([
            { text: "गणितसारसंग्रह", correct: true },
            { text: "सिद्धांत शिरोमणि", correct: false },
            { text: "लीलावती", correct: false },
            { text: "ब्रह्मस्फुटसिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीराचार्य, जो अमोघवर्ष प्रथम के दरबार में रहते थे, ने 'गणितसारसंग्रह' नामक एक प्रसिद्ध ग्रंथ की रचना की थी।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने चोलों को 949 ईस्वी के 'तक्कोलम के युद्ध' में पराजित किया था?",
        answers: shuffle([
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "कृष्ण तृतीय", correct: true },
            { text: "इंद्र चतुर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्ण तृतीय ने 949 ईस्वी के 'तक्कोलम के युद्ध' में चोल शासक परंतक I को पराजित किया था।"
    },
    {
        question: "'एलोरा' और 'एलिफेंटा' की गुफाओं में किस राजवंश की वास्तुकला देखने को मिलती है?",
        answers: shuffle([
            { text: "चालुक्य", correct: false },
            { text: "राष्ट्रकूट", correct: true },
            { text: "पल्लव", correct: false },
            { text: "गुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलोरा और एलिफेंटा गुफाओं में स्थित कई मंदिर और मूर्तिकलाएँ राष्ट्रकूटों के शासनकाल से संबंधित हैं।"
    },
    {
        question: "राष्ट्रकूटों का राज्य-चिह्न क्या था?",
        answers: shuffle([
            { text: "नंदी (बैल)", correct: false },
            { text: "गरुड़", correct: false },
            { text: "हाथी", correct: false },
            { text: "शेर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूटों का राजकीय चिह्न 'शेर' था, जो उनकी शक्ति और शौर्य का प्रतीक था।"
    },
    {
        question: "'कन्नड़ साहित्य का स्वर्ण युग' किस राष्ट्रकूट शासक के शासनकाल को माना जाता है?",
        answers: shuffle([
            { text: "ध्रुव", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: true },
            { text: "गोविंद तृतीय", correct: false },
            { text: "कृष्ण तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष प्रथम के शासनकाल में ही कन्नड़ साहित्य का सर्वाधिक विकास हुआ।"
    },
    {
        question: "राष्ट्रकूटों के किस शासक ने कन्नौज के लिए हुए त्रिपक्षीय संघर्ष में भाग लिया और गुर्जर-प्रतिहार शासक वत्सराज तथा पाल शासक धर्मपाल को पराजित किया?",
        answers: shuffle([
            { text: "ध्रुव", correct: true },
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष", correct: false },
            { text: "कृष्ण द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुव (धारावर्ष) ने त्रिपक्षीय संघर्ष में हिस्सा लिया और गुर्जर-प्रतिहार शासक वत्सराज तथा पाल शासक धर्मपाल को पराजित किया।"
    },
    {
        question: "'पंप' नामक प्रसिद्ध कन्नड़ कवि किस राष्ट्रकूट शासक के दरबार में रहते थे?",
        answers: shuffle([
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "कृष्ण तृतीय", correct: false },
            { text: "कृष्ण द्वितीय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंप, जिन्हें कन्नड़ साहित्य के 'आदिकवि' के रूप में जाना जाता है, कृष्ण द्वितीय के दरबार में रहते थे।"
    },
    {
        question: "राष्ट्रकूटों के अंतिम शासक कौन थे, जिन्हें कल्याणी के चालुक्यों ने पराजित किया?",
        answers: shuffle([
            { text: "कृष्ण तृतीय", correct: false },
            { text: "कर्क द्वितीय", correct: true },
            { text: "गोविंद चतुर्थ", correct: false },
            { text: "इंद्र चतुर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्क द्वितीय राष्ट्रकूट वंश का अंतिम शासक था, जिसे कल्याणी के चालुक्य शासक तैलप द्वितीय ने 973 ईस्वी में पराजित किया।"
    },
    {
        question: "राष्ट्रकूटों के शासनकाल में 'उर' क्या था?",
        answers: shuffle([
            { text: "गाँव की एक प्रशासनिक समिति", correct: true },
            { text: "एक कर का नाम", correct: false },
            { text: "एक प्रकार का सैनिक", correct: false },
            { text: "एक प्रशासनिक इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उर' गाँव की एक प्रशासनिक समिति थी, जो गाँव के स्थानीय प्रशासन का कार्य करती थी।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने 'पंडितवत्सल' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "कृष्ण प्रथम", correct: false },
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "इंद्र तृतीय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्र तृतीय को 'पंडितवत्सल' (विद्वानों का संरक्षक) की उपाधि मिली थी, जो कला और साहित्य के प्रति उसके प्रेम को दर्शाती है।"
    },
    {
        question: "राष्ट्रकूट साम्राज्य का अंतिम महान शासक कौन था?",
        answers: shuffle([
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "कृष्ण तृतीय", correct: true },
            { text: "इंद्र चतुर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्ण तृतीय राष्ट्रकूट वंश का अंतिम महान शासक था, जिसकी मृत्यु के बाद साम्राज्य का पतन शुरू हो गया था।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने 'गंगों' को पराजित कर उनकी राजधानी को जला दिया था?",
        answers: shuffle([
            { text: "गोविंद तृतीय", correct: true },
            { text: "अमोघवर्ष", correct: false },
            { text: "कृष्ण तृतीय", correct: false },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद तृतीय ने गंग शासकों को पराजित कर उनके राज्य को अपने अधीन कर लिया था।"
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