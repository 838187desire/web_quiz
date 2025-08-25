const questions = [
    {
        topHeading: "दक्षिण भारत के प्रमुख राजवंश पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.91)"
    },
    {
        question: "विजयनगर साम्राज्य का संस्थापक कौन था?",
        answers: shuffle([
            { text: "कृष्णदेव राय", correct: false },
            { text: "हरिहर और बुक्का", correct: true },
            { text: "सालुव नरसिंह", correct: false },
            { text: "वीर नरसिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरिहर और बुक्का नामक दो भाइयों ने 1336 ईस्वी में तुंगभद्रा नदी के तट पर विजयनगर साम्राज्य की स्थापना की थी।"
    },
    {
        question: "विजयनगर साम्राज्य की राजधानी क्या थी?",
        answers: shuffle([
            { text: "मदुरै", correct: false },
            { text: "हलेबिड", correct: false },
            { text: "हम्पी", correct: true },
            { text: "द्वारसमुद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विजयनगर साम्राज्य की राजधानी हम्पी थी, जो आधुनिक कर्नाटक में स्थित है।"
    },
    {
        question: "किस विजयनगर शासक के शासनकाल को तेलुगु साहित्य का 'स्वर्ण युग' कहा जाता है?",
        answers: shuffle([
            { text: "हरिहर II", correct: false },
            { text: "देवराय II", correct: false },
            { text: "कृष्णदेव राय", correct: true },
            { text: "सदाशिव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णदेव राय (1509-1529 ईस्वी) विजयनगर साम्राज्य के सबसे महान शासक थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका शासनकाल तेलुगु साहित्य का स्वर्ण युग माना जाता है।"
    },
    {
        question: "'अष्टदिग्गज' नामक आठ विद्वानों का समूह किस विजयनगर शासक के दरबार में था?",
        answers: shuffle([
            { text: "हरिहर और बुक्का", correct: false },
            { text: "देवराय II", correct: false },
            { text: "कृष्णदेव राय", correct: true },
            { text: "वीर नरसिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अष्टदिग्गज' नामक आठ विद्वान कृष्णदेव राय के दरबार में रहते थे, जिनमें सबसे प्रमुख 'अल्लसानी पेद्दन' थे, जिन्हें 'आंध्र कविता पितामह' कहा जाता था।"
    },
    {
        question: "'तालीकोटा का युद्ध' किस वर्ष लड़ा गया था?",
        answers: shuffle([
            { text: "1526 ईस्वी", correct: false },
            { text: "1545 ईस्वी", correct: false },
            { text: "1565 ईस्वी", correct: true },
            { text: "1576 ईस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तालीकोटा का युद्ध 1565 ईस्वी में विजयनगर साम्राज्य और दक्कन की चार मुस्लिम सल्तनतों (अहमदनगर, बीजापुर, गोलकोंडा और बीदर) के बीच लड़ा गया था।"
    },
    {
        question: "बहमनी साम्राज्य का संस्थापक कौन था?",
        answers: shuffle([
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "अलाउद्दीन हसन बहमन शाह", correct: true },
            { text: "मुहम्मद शाह I", correct: false },
            { text: "फिरोज शाह बहमनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन हसन बहमन शाह, जिसे हसन गंगू भी कहते हैं, ने 1347 ईस्वी में बहमनी साम्राज्य की स्थापना की थी।"
    },
    {
        question: "बहमनी साम्राज्य की राजधानी क्या थी?",
        answers: shuffle([
            { text: "गोलकुंडा", correct: false },
            { text: "बीजापुर", correct: false },
            { text: "गुलबर्गा", correct: true },
            { text: "बीदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमनी साम्राज्य की प्रारंभिक राजधानी गुलबर्गा थी, जिसे बाद में अहमद शाह वली ने बीदर स्थानांतरित कर दिया था।"
    },
    {
        question: "'तालीकोटा के युद्ध' के समय विजयनगर साम्राज्य का शासक कौन था?",
        answers: shuffle([
            { text: "कृष्णदेव राय", correct: false },
            { text: "सदाशिव राय", correct: true },
            { text: "रामराय", correct: false },
            { text: "देवराय II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तालीकोटा के युद्ध के समय सदाशिव राय नाममात्र का शासक था, जबकि वास्तविक शक्ति उसके प्रधानमंत्री रामराय के हाथों में थी।"
    },
    {
        question: "विजयनगर साम्राज्य में 'अमरम' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "सेना को दी जाने वाली भूमि", correct: true },
            { text: "एक प्रशासनिक इकाई", correct: false },
            { text: "एक धार्मिक अनुष्ठान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विजयनगर साम्राज्य में सैनिकों और अधिकारियों को वेतन के बदले दी जाने वाली भूमि को 'अमरम' कहा जाता था।"
    },
    {
        question: "'पुहर' या 'कावेरीपट्टनम' नामक प्रसिद्ध बंदरगाह किस राजवंश का था?",
        answers: shuffle([
            { text: "चेर", correct: false },
            { text: "चोल", correct: true },
            { text: "पांड्य", correct: false },
            { text: "पल्लव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुहर (या कावेरीपट्टनम) चोलों का एक प्रसिद्ध बंदरगाह था, जिसका वर्णन संगम साहित्य में भी मिलता है।"
    },
    {
        question: "किस विजयनगर शासक ने 'अमुक्तमाल्यदा' नामक तेलुगु ग्रंथ की रचना की थी?",
        answers: shuffle([
            { text: "हरिहर", correct: false },
            { text: "बुक्का", correct: false },
            { text: "देवराय II", correct: false },
            { text: "कृष्णदेव राय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णदेव राय एक महान विद्वान थे और उन्होंने 'अमुक्तमाल्यदा' नामक एक तेलुगु ग्रंथ की रचना की, जो राजनीति और शासन पर आधारित था।"
    },
    {
        question: "किस यात्री ने अपनी यात्रा के दौरान विजयनगर साम्राज्य की समृद्धि का वर्णन किया है?",
        answers: shuffle([
            { text: "इब्नबतूता", correct: false },
            { text: "निकोलो कोंटी", correct: true },
            { text: "मार्को पोलो", correct: false },
            { text: "फाह्यान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतालवी यात्री निकोलो कोंटी ने 15वीं शताब्दी में विजयनगर की यात्रा की और वहाँ की समृद्धि और भव्यता का विस्तृत वर्णन किया।"
    },
    {
        question: "बहमनी साम्राज्य के अंतिम शासक कौन थे?",
        answers: shuffle([
            { text: "अलाउद्दीन हसन बहमन शाह", correct: false },
            { text: "मुहम्मद शाह III", correct: false },
            { text: "कलीमुल्लाह शाह", correct: true },
            { text: "महमूद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कलीमुल्लाह शाह बहमनी साम्राज्य का अंतिम शासक था, जिसकी मृत्यु के बाद बहमनी साम्राज्य पाँच स्वतंत्र राज्यों में टूट गया।"
    },
    {
        question: "किस विजयनगर शासक ने 'गजबेटकर' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "हरिहर I", correct: false },
            { text: "बुक्का I", correct: false },
            { text: "देवराय II", correct: true },
            { text: "कृष्णदेव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवराय II (1422-1446 ईस्वी) को 'गजबेटकर' (हाथियों का शिकारी) की उपाधि मिली थी, जो उसकी सैन्य शक्ति का प्रतीक था।"
    },
    {
        question: "'विजयनगर' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "विजय का शहर", correct: true },
            { text: "ज्ञान का शहर", correct: false },
            { text: "व्यापार का शहर", correct: false },
            { text: "राजाओं का शहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विजयनगर' दो संस्कृत शब्दों 'विजय' और 'नगर' से मिलकर बना है, जिसका अर्थ 'विजय का शहर' होता है।"
    },
    {
        question: "'गोलकुंडा' का किला किस राजवंश के शासकों द्वारा बनवाया गया था?",
        answers: shuffle([
            { text: "बहमनी", correct: false },
            { text: "काकतीय", correct: true },
            { text: "विजयनगर", correct: false },
            { text: "कुतुबशाही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोलकुंडा का किला मूल रूप से काकतीय शासकों द्वारा बनवाया गया था, जिसे बाद में बहमनी और कुतुबशाही शासकों ने पुनर्निर्मित किया।"
    },
    {
        question: "'होयसल' कला के उत्कृष्ट उदाहरण, जैसे 'बेलूर' और 'हलेबिड' के मंदिर, किस शैली के हैं?",
        answers: shuffle([
            { text: "नागर शैली", correct: false },
            { text: "द्रविड़ शैली", correct: false },
            { text: "वेसर शैली", correct: false },
            { text: "होयसल शैली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेलूर और हलेबिड के मंदिर होयसल शैली में निर्मित हैं, जो बारीक नक्काशी और स्टार के आकार के आधार के लिए प्रसिद्ध है।"
    },
    {
        question: "बहमनी साम्राज्य की स्थापना किस नदी के तट पर हुई थी?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "गोदावरी", correct: false },
            { text: "तुंगभद्रा", correct: true },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमनी साम्राज्य की स्थापना अलाउद्दीन हसन बहमन शाह ने तुंगभद्रा नदी के तट पर की थी।"
    },
    {
        question: "किस विदेशी यात्री ने विजयनगर साम्राज्य की राजधानी हम्पी को 'दुनिया के सबसे शानदार शहरों में से एक' बताया था?",
        answers: shuffle([
            { text: "निकोलो कोंटी", correct: false },
            { text: "डोमिंगो पेस", correct: true },
            { text: "अब्दुर रज्जाक", correct: false },
            { text: "फर्नाओ नुनिज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुर्तगाली यात्री डोमिंगो पेस ने कृष्णदेव राय के शासनकाल में विजयनगर की यात्रा की थी और उसके वैभव का वर्णन किया था।"
    },
    {
        question: "'बृहदेश्वर मंदिर' (तंजौर) का निर्माण किस चोल शासक ने करवाया था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा I", correct: true },
            { text: "राजेन्द्र चोल I", correct: false },
            { text: "कुलोत्तुंग चोल I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा I ने 1010 ईस्वी में तंजौर में बृहदेश्वर मंदिर का निर्माण करवाया था, जिसे राजराजेश्वर मंदिर भी कहा जाता है।"
    },
    {
        question: "बहमनी साम्राज्य के अंतिम शासक कौन थे, जिनकी मृत्यु के बाद साम्राज्य का विघटन हुआ?",
        answers: shuffle([
            { text: "महमूद शाह", correct: false },
            { text: "कलीमुल्लाह शाह", correct: true },
            { text: "फिरोज शाह बहमनी", correct: false },
            { text: "अहमद शाह वली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कलीमुल्लाह शाह की मृत्यु के बाद, बहमनी साम्राज्य पाँच स्वतंत्र सल्तनतों (बीजापुर, अहमदनगर, गोलकोंडा, बीदर और बरार) में विभाजित हो गया।"
    },
    {
        question: "'वीरगंगैकोंड' की उपाधि किस चोल शासक ने धारण की थी?",
        answers: shuffle([
            { text: "राजराजा I", correct: false },
            { text: "राजेन्द्र चोल I", correct: true },
            { text: "आदित्य I", correct: false },
            { text: "परंतक I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेन्द्र चोल I ने गंगा नदी के तट तक उत्तरी भारत के राज्यों पर विजय प्राप्त करने के बाद 'वीरगंगैकोंड' की उपाधि धारण की थी।"
    },
    {
        question: "'गंडभेदंड' नामक उपाधि किस शासक ने धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन II", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "राजराजा I", correct: false },
            { text: "कृष्णदेव राय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णदेव राय ने अपनी सैन्य सफलताओं के बाद 'गंडभेदंड' (दुश्मनों के गालों को तोड़ने वाला) जैसी कई उपाधियाँ धारण की थीं।"
    },
    {
        question: "किस विजयनगर शासक ने पुर्तगालियों के साथ सैन्य गठबंधन किया था?",
        answers: shuffle([
            { text: "हरिहर", correct: false },
            { text: "बुक्का", correct: false },
            { text: "देवराय II", correct: false },
            { text: "कृष्णदेव राय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णदेव राय ने पुर्तगालियों के साथ अच्छे संबंध बनाए रखे और उनसे घोड़े खरीदने के लिए एक समझौता किया था, जिससे उसकी सैन्य शक्ति में वृद्धि हुई।"
    },
    {
        question: "'काकतीय' राजवंश के प्रसिद्ध शासक रुद्रमादेवी ने किस नाम से शासन किया था?",
        answers: shuffle([
            { text: "रुद्रदेव", correct: true },
            { text: "प्रतापरुद्र", correct: false },
            { text: "रुद्रमादेव", correct: false },
            { text: "रानी दुर्गावती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रानी रुद्रमादेवी ने पुरुष शासकों की तरह 'रुद्रदेव' नाम से शासन किया था, जो उसकी शक्ति और नेतृत्व का प्रतीक था।"
    },
    {
        question: "किस विजयनगर शासक को 'आंध्रभोज' के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "हरिहर I", correct: false },
            { text: "देवराय II", correct: false },
            { text: "कृष्णदेव राय", correct: true },
            { text: "सदाशिव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णदेव राय एक महान विद्वान और कला, साहित्य के संरक्षक थे, जिसके कारण उन्हें 'आंध्रभोज' के नाम से भी जाना जाता है।"
    },
    {
        question: "'अमुक्तमाल्यदा' नामक ग्रंथ की रचना किस शासक ने की थी?",
        answers: shuffle([
            { text: "अल्लसानी पेद्दन", correct: false },
            { text: "तेनालीराम", correct: false },
            { text: "कृष्णदेव राय", correct: true },
            { text: "देवराय II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमुक्तमाल्यदा' नामक तेलुगु महाकाव्य की रचना स्वयं विजयनगर शासक कृष्णदेव राय ने की थी।"
    },
    {
        question: "बहमनी साम्राज्य के विघटन के बाद बने पाँच स्वतंत्र राज्यों में से कौन-सा राज्य शामिल नहीं था?",
        answers: shuffle([
            { text: "बीजापुर", correct: false },
            { text: "अहमदनगर", correct: false },
            { text: "बीदर", correct: false },
            { text: "मदुरै", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमनी साम्राज्य के विघटन के बाद बीजापुर, अहमदनगर, गोलकोंडा, बीदर और बरार नामक पाँच स्वतंत्र राज्य बने थे।<br><br><i class='fa-solid fa-angles-right icon'></i> मदुरै एक अलग ही राजवंश था।"
    },
    {
        question: "'तालीकोटा के युद्ध' का तत्कालीन कारण क्या था?",
        answers: shuffle([
            { text: "विजयनगर और बहमनी राज्यों के बीच व्यापारिक विवाद", correct: false },
            { text: "विजयनगर के शासक रामराय की आक्रामक नीतियां", correct: false },
            { text: "विजयनगर द्वारा बीजापुर के राजा को अपमानित करना", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामराय की आक्रामक नीतियां और मुस्लिम सुल्तानों के बीच हस्तक्षेप ने दक्कन सल्तनतों को एकजुट होने के लिए प्रेरित किया, जिसके परिणामस्वरूप तालीकोटा का युद्ध हुआ।"
    },
    {
        question: "संगम काल में 'शिल्पादिकारम' नामक महाकाव्य की रचना किसने की थी?",
        answers: shuffle([
            { text: "तोल्काप्पियर", correct: false },
            { text: "इलंगो अडिगल", correct: true },
            { text: "तिरुवल्लुवर", correct: false },
            { text: "कपिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिल्पादिकारम' नामक तमिल महाकाव्य की रचना चेर शासक सेनगुट्टुवन के भाई इलंगो अडिगल ने की थी।"
    },
    {
        question: "किस विजयनगर शासक ने 'विट्ठलस्वामी मंदिर' का निर्माण करवाया था?",
        answers: shuffle([
            { text: "हरिहर I", correct: false },
            { text: "बुक्का I", correct: false },
            { text: "कृष्णदेव राय", correct: true },
            { text: "देवराय II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम्पी का प्रसिद्ध विट्ठलस्वामी मंदिर विजयनगर शासक कृष्णदेव राय ने बनवाया था।"
    },
    {
        question: "'तुगलकनामा' नामक ग्रंथ में किस यात्री ने विजयनगर साम्राज्य की समृद्धि का वर्णन किया था?",
        answers: shuffle([
            { text: "मार्को पोलो", correct: false },
            { text: "इब्न बतूता", correct: true },
            { text: "अब्दुर रज्जाक", correct: false },
            { text: "निकोलो कोंटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्न बतूता ने मुहम्मद बिन तुगलक के शासनकाल में भारत की यात्रा की थी और उसने विजयनगर साम्राज्य की समृद्ध व्यापारिक गतिविधियों का उल्लेख किया था।"
    },
    {
        question: "किस विजयनगर शासक को 'दक्षिण भारत के महानतम शासकों' में गिना जाता है?",
        answers: shuffle([
            { text: "हरिहर I", correct: false },
            { text: "बुक्का I", correct: false },
            { text: "कृष्णदेव राय", correct: true },
            { text: "देवराय II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णदेव राय को उनकी सैन्य सफलता, साहित्य के संरक्षण और प्रशासनिक सुधारों के कारण विजयनगर साम्राज्य का सबसे महान शासक माना जाता है।"
    },
    {
        question: "बहमनी शासकों की राजकीय भाषा क्या थी?",
        answers: shuffle([
            { text: "फारसी", correct: true },
            { text: "उर्दू", correct: false },
            { text: "अरबी", correct: false },
            { text: "दक्खिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमनी शासकों की राजकीय भाषा फारसी थी, जबकि दक्कन में दक्खिनी नामक एक नई भाषा का भी विकास हुआ था।"
    },
    {
        question: "'अहोबिलम' नामक जैन मंदिर का निर्माण किस चालुक्य शासक ने करवाया था?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "विक्रमादित्य II", correct: true },
            { text: "तैलप II", correct: false },
            { text: "विनयादित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य द्वितीय के शासनकाल में अहोबिलम में प्रसिद्ध जैन मंदिर का निर्माण हुआ था।"
    },
    {
        question: "'कविराजमार्ग' के लेखक अमोघवर्ष I किस धर्म के अनुयायी थे?",
        answers: shuffle([
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "बौद्ध धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट शासक अमोघवर्ष I जैन धर्म के अनुयायी थे और उन्होंने कई जैन विद्वानों को संरक्षण भी दिया था।"
    },
    {
        question: "'एकाश्म रथ' मंदिर (महाबलीपुरम) किस शासक के शासनकाल में बनाए गए थे?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाबलीपुरम के रथ मंदिर नरसिंहवर्मन I के शासनकाल में बनवाए गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें एक ही चट्टान को काटकर बनाया गया है।"
    },
    {
        question: "'मदुरै' किस राजवंश की राजधानी थी?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "चेर", correct: false },
            { text: "पांड्य", correct: true },
            { text: "विजयनगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पांड्य राजवंश की राजधानी मदुरै थी, जो संगम काल और बाद के समय में भी एक महत्वपूर्ण केंद्र रहा।"
    },
    {
        question: "'तंजाई पेरुवूदैयार कोइल' किस मंदिर का तमिल नाम है?",
        answers: shuffle([
            { text: "बृहदेश्वर मंदिर", correct: true },
            { text: "मीनाक्षी मंदिर", correct: false },
            { text: "Shore Temple", correct: false },
            { text: "कैलाशनाथ मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तंजौर के बृहदेश्वर मंदिर को तमिल में 'तंजाई पेरुवूदैयार कोइल' के नाम से जाना जाता है।"
    },
    {
        question: "किस चोल शासक के शासनकाल में 'उलवांडई' नामक प्रशासनिक विभाग बनाया गया था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा I", correct: true },
            { text: "राजेन्द्र चोल I", correct: false },
            { text: "आदित्य I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा I ने एक मजबूत और कुशल प्रशासन स्थापित किया था, जिसमें 'उलवांडई' नामक एक नया विभाग शामिल था।"
    },
    {
        question: "किस पल्लव शासक ने चालुक्य शासक पुलकेशिन II को पराजित कर मार डाला था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "परमेश्वरवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने चालुक्य शासक पुलकेशिन II को पराजित कर मार डाला और 'वातापीकोंड' की उपाधि धारण की थी।"
    },
    {
        question: "'सदाशिव राय' किस वंश का अंतिम शासक था, जो तालीकोटा के युद्ध के समय विजयनगर साम्राज्य का नाममात्र का शासक था?",
        answers: shuffle([
            { text: "संगम वंश", correct: false },
            { text: "सालुव वंश", correct: false },
            { text: "तुलुव वंश", correct: true },
            { text: "अराविदु वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सदाशिव राय तुलुव वंश का अंतिम शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी मृत्यु के बाद अराविदु वंश ने सत्ता संभाली, लेकिन साम्राज्य पहले ही कमजोर हो चुका था।"
    },
    {
        question: "किस चालुक्य शासक ने राष्ट्रकूट शासक दंतिदुर्ग को पराजित किया था?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "विक्रमादित्य II", correct: false },
            { text: "कीर्तिवर्मन II", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंतिदुर्ग ने स्वयं अंतिम चालुक्य शासक कीर्तिवर्मन II को पराजित कर राष्ट्रकूट साम्राज्य की स्थापना की थी।"
    },
    {
        question: "'अब्दुर रज्जाक' नामक फारसी यात्री ने किस विजयनगर शासक के शासनकाल में भारत की यात्रा की थी?",
        answers: shuffle([
            { text: "देवराय I", correct: false },
            { text: "देवराय II", correct: true },
            { text: "कृष्णदेव राय", correct: false },
            { text: "अच्युतदेव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फारसी यात्री अब्दुर रज्जाक ने 1442-1443 ईस्वी के आसपास देवराय द्वितीय के शासनकाल में विजयनगर की यात्रा की थी।"
    },
    {
        question: "'हलेबिड' में स्थित 'होयसलेश्वर मंदिर' किस देवता को समर्पित है?",
        answers: shuffle([
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "सूर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हलेबिड का होयसलेश्वर मंदिर भगवान शिव को समर्पित है और यह अपनी बारीक नक्काशी और जटिल मूर्तिकला के लिए प्रसिद्ध है।"
    },
    {
        question: "विजयनगर साम्राज्य का प्रशासन किस प्रणाली पर आधारित था?",
        answers: shuffle([
            { text: "सामंतवादी प्रणाली", correct: false },
            { text: "नायक प्रणाली", correct: true },
            { text: "जागीरदारी प्रणाली", correct: false },
            { text: "भू-राजस्व प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विजयनगर साम्राज्य की प्रशासनिक व्यवस्था 'नायक प्रणाली' पर आधारित थी, जिसमें नायकों को उनकी सेवाओं के बदले भू-राजस्व के अधिकार दिए जाते थे।"
    },
    {
        question: "'तैलप II' ने किस शासक को पराजित कर कल्याणी के चालुक्य वंश की स्थापना की थी?",
        answers: shuffle([
            { text: "ध्रुव", correct: false },
            { text: "कृष्ण III", correct: false },
            { text: "कीर्तिवर्मन II", correct: false },
            { text: "कर्क II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैलप II ने राष्ट्रकूट शासक कर्क II को पराजित कर कल्याणी के चालुक्य वंश की स्थापना की थी।"
    },
    {
        question: "'इब्राहिम कुतुब शाह' ने किस किले का पुनर्निर्माण करवाया था, जिसे बाद में गोलकुंडा के किले के रूप में जाना गया?",
        answers: shuffle([
            { text: "वारंगल", correct: false },
            { text: "बीजापुर", correct: false },
            { text: "गुलबर्गा", correct: false },
            { text: "गोलकुंडा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोलकुंडा का किला मूल रूप से काकतीय शासकों द्वारा बनवाया गया था, लेकिन इब्राहिम कुतुब शाह ने इसका पुनर्निर्माण करवाया।"
    },
    {
        question: "चोल प्रशासन में 'आयुर', 'काल्कु', और 'एरी' जैसे शब्द किस संदर्भ में प्रयुक्त होते थे?",
        answers: shuffle([
            { text: "भू-राजस्व", correct: true },
            { text: "सैन्य इकाइयां", correct: false },
            { text: "बंदरगाह", correct: false },
            { text: "कृषि उपकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी शब्द चोल प्रशासन में भू-राजस्व और करों के प्रकारों को दर्शाते हैं।"
    },
    {
        question: "'महाभारत' का तेलुगु में अनुवाद किसने किया था, जो विजयनगर शासकों के दरबार में थे?",
        answers: shuffle([
            { text: "अल्लसानी पेद्दन", correct: false },
            { text: "कृष्णदेव राय", correct: false },
            { text: "नन्नैया, तिक्कन और येर्राप्रेगडा", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाभारत' का तेलुगु में अनुवाद 11वीं और 13वीं शताब्दी में नन्नैया, तिक्कन और येर्राप्रेगडा नामक कवियों ने किया था।"
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