const questions = [
    {
        topHeading: "विजयनगर साम्राज्य पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. तालिकोटा के युद्ध में विजयनगर सेना का नेतृत्व किसने किया था?",
        answers: shuffle([
            { text: "सदाशिव राय", correct: false },
            { text: "आलिया राम राय", correct: true },
            { text: "तिरुमल देव राय", correct: false },
            { text: "वेंकट द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आलिया रामराय</b>, जो एक <b>कुशल राजनीतिज्ञ और सेनापति</b> था, ने इस युद्ध में <b>विजयनगर की सेना</b> का नेतृत्व किया।"
    },
    {
        question: "प्रश्न 2. तालिकोटा के युद्ध में दक्कनी सल्तनतों के संघ में कौन शामिल नहीं था?",
        answers: shuffle([
            { text: "बीजापुर", correct: false },
            { text: "अहमदनगर", correct: false },
            { text: "गोलकुंडा", correct: false },
            { text: "बरार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विजयनगर के विरुद्ध बने इस संघ में चार सल्तनतें - <b>बीजापुर, अहमदनगर, गोलकुंडा और बीदर</b> - शामिल थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>बरार</b> आपसी शत्रुता के कारण इस संघ में शामिल नहीं हुआ।"
    },
    {
        question: "प्रश्न 3. तालिकोटा के युद्ध में विजयनगर की हार का एक प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "सेना की कमी", correct: false },
            { text: "हथियारों की कमी", correct: false },
            { text: "विजयनगर के दो मुस्लिम सेनापतियों का विश्वासघात", correct: true },
            { text: "रामराय की खराब रणनीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युद्ध के एक महत्वपूर्ण मोड़ पर, <b>विजयनगर की सेना</b> में शामिल <b>गिलानी बंधुओं</b> ने अपनी टुकड़ियों के साथ <b>पाला बदल</b> लिया और सल्तनत की सेना से जा मिले, जिसने युद्ध का पासा पलट दिया।"
    },
    {
        question: "प्रश्न 4. तालिकोटा के युद्ध के बाद विजयनगर की राजधानी को कहाँ स्थानांतरित किया गया?",
        answers: shuffle([
            { text: "अनेगोंडी", correct: false },
            { text: "चंद्रगिरि", correct: false },
            { text: "वेल्लोर", correct: false },
            { text: "पेनुकोंडा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हम्पी के विनाश</b> के बाद, <b>रामराय के भाई तिरुमल देव राय</b> ने जीवित बचे राजपरिवार के साथ राजधानी को सुरक्षित स्थान <b>पेनुकोंडा</b> (आधुनिक आंध्र प्रदेश में) स्थानांतरित कर दिया।"
    },
    {
        question: "प्रश्न 5. अराविडु वंश की स्थापना किसने की?",
        answers: shuffle([
            { text: "आलिया राम राय", correct: false },
            { text: "सदाशिव राय", correct: false },
            { text: "तिरुमल देव राय", correct: true },
            { text: "वेंकट द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तालिकोटा के युद्ध</b> के बाद, <b>तिरुमल देव राय</b> ने <b>1570 ई.</b> में <b>सदाशिव राय</b> को अपदस्थ कर <b>अराविडु वंश</b> की स्थापना की, जो विजयनगर पर शासन करने वाला चौथा और <b>अंतिम राजवंश</b> था।"
    },
    {
        question: "प्रश्न 6. विजयनगर साम्राज्य के बारे में जानकारी का मुख्य पुरातात्विक स्रोत क्या है?",
        answers: shuffle([
            { text: "सिक्के", correct: false },
            { text: "शिलालेख", correct: false },
            { text: "हम्पी के खंडहर", correct: true },
            { text: "साहित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हम्पी में मौजूद मंदिर, महल, बाजार और अन्य संरचनाओं के खंडहर</b> विजयनगर की कला, संस्कृति और जीवनशैली के बारे में जानकारी का <b>सबसे महत्वपूर्ण भौतिक स्रोत</b> हैं।"
    },
    {
        question: "प्रश्न 7. पुर्तगाली यात्री फर्नाओ नुनीज किसके शासनकाल में विजयनगर आया?",
        answers: shuffle([
            { text: "कृष्णदेवराय", correct: false },
            { text: "अच्युतदेव राय", correct: true },
            { text: "सदाशिव राय", correct: false },
            { text: "देवराय द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फर्नाओ नुनीज</b> एक <b>घोड़ा व्यापारी</b> था जो <b>अच्युतदेव राय</b> के शासनकाल (लगभग 1535-37 ई.) के दौरान विजयनगर में रहा।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने विजयनगर के इतिहास और <b>सामाजिक प्रथाओं</b> का वर्णन किया है।"
    },
    {
        question: "प्रश्न 8. विजयनगर साम्राज्य में 'कंदाचार' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक त्योहार", correct: false },
            { text: "सैन्य विभाग", correct: true },
            { text: "एक राजस्व इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>कंदाचार</b>' विजयनगर के <b>सैन्य विभाग</b> का नाम था, और इसका प्रमुख अधिकारी 'दंडनायक' या 'सेनापति' कहलाता था।"
    },
    {
        question: "प्रश्न 9. 'तेनालीराम' जो अपनी बुद्धिमत्ता और हास्य के लिए प्रसिद्ध थे, किसके दरबारी थे?",
        answers: shuffle([
            { text: "देवराय द्वितीय", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "रामराय", correct: false },
            { text: "अच्युतदेव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तेनालीराम रामकृष्ण</b> <b>कृष्णदेवराय</b> के दरबार के '<b>अष्टदिग्गजों</b>' में से एक थे और उनकी कहानियाँ आज भी लोकप्रिय हैं।"
    },
    {
        question: "प्रश्न 10. विजयनगर के किस शासक ने चीन में एक दूत भेजा था?",
        answers: shuffle([
            { text: "हरिहर प्रथम", correct: false },
            { text: "बुक्का प्रथम", correct: true },
            { text: "देवराय प्रथम", correct: false },
            { text: "कृष्णदेवराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बुक्का प्रथम</b> ने अपने साम्राज्य के <b>व्यापारिक हितों</b> को बढ़ावा देने के लिए <b>1374 ई.</b> में <b>चीन के मिंग सम्राट</b> के दरबार में एक दूत मंडल भेजा था।"
    },
    {
        question: "प्रश्न 11. विजयनगर साम्राज्य के शासक स्वयं को किसका प्रतिनिधि मानते थे?",
        answers: shuffle([
            { text: "भगवान शिव", correct: false },
            { text: "भगवान विष्णु", correct: false },
            { text: "भगवान विरुपाक्ष", correct: true },
            { text: "भगवान विट्ठल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर</b> के शासक <b>भगवान विरुपाक्ष (शिव का एक रूप)</b> को राज्य का <b>वास्तविक शासक</b> मानते थे और स्वयं को उनके नाम पर शासन करने वाला <b>प्रतिनिधि</b> बताते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> वे अपने सभी शाही आदेशों पर कन्नड़ में '<b>श्री विरुपाक्ष</b>' हस्ताक्षर करते थे।"
    },
    {
        question: "प्रश्न 12. विजयनगर काल में 'रक्तकोड्गे' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का हथियार", correct: false },
            { text: "युद्ध में शौर्य के लिए दी जाने वाली कर-मुक्त भूमि", correct: true },
            { text: "एक धार्मिक अनुष्ठान", correct: false },
            { text: "एक प्रकार का कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि किसी सैनिक की <b>युद्ध में मृत्यु</b> हो जाती थी, तो उसके परिवार को भरण-पोषण के लिए दी जाने वाली <b>कर-मुक्त भूमि</b> को '<b>रक्तकोड्गे</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 13. रूसी यात्री अफनासी निकितिन ने किस विजयनगर बंदरगाह का दौरा किया था?",
        answers: shuffle([
            { text: "कालीकट", correct: false },
            { text: "गोवा", correct: false },
            { text: "भटकल", correct: false },
            { text: "दाभोल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि <b>निकितिन</b> मुख्य रूप से <b>बहमनी साम्राज्य</b> में रहा, उसने विजयनगर के नियंत्रण वाले कुछ क्षेत्रों और <b>दाभोल</b> जैसे बंदरगाहों का भी दौरा किया था।"
    },
    {
        question: "प्रश्न 14. 'जंबाजी कल्याणम्' नामक संस्कृत नाटक की रचना किसने की?",
        answers: shuffle([
            { text: "अल्लसानि पेद्दन", correct: false },
            { text: "देवराय द्वितीय", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "गंगा देवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आमुक्तमाल्यद' (तेलुगु) के अलावा, <b>कृष्णदेवराय संस्कृत</b> के भी विद्वान थे और उन्होंने '<b>जंबाजी कल्याणम्</b>' नाटक की रचना की थी।"
    },
    {
        question: "प्रश्न 15. विजयनगर की किस रानी ने 'मदुरा विजयम्' नामक काव्य की रचना की?",
        answers: shuffle([
            { text: "तिरुमलाम्बा", correct: false },
            { text: "गंगा देवी", correct: true },
            { text: "चिन्नमादेवी", correct: false },
            { text: "वरदाम्बिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गंगा देवी</b>, जो <b>बुक्का प्रथम के पुत्र कुमार कम्पन</b> की पत्नी थीं, ने अपने पति की <b>मदुरै विजय</b> का वर्णन करते हुए '<b>मदुरा विजयम्</b>' नामक <b>संस्कृत काव्य</b> की रचना की।"
    },
    {
        question: "प्रश्न 16. विजयनगर साम्राज्य में 'अमरम' भूमि का क्या अर्थ था?",
        answers: shuffle([
            { text: "ब्राह्मणों को दी गई भूमि", correct: false },
            { text: "नायकों को उनके सैन्य रखरखाव के लिए दी गई भूमि", correct: true },
            { text: "सीधे राजा के अधीन भूमि", correct: false },
            { text: "मंदिरों को दी गई भूमि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>नायंकर व्यवस्था</b> के तहत <b>नायकों</b> को जो भूमि दी जाती थी, उसे '<b>अमरम</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 17. अब्दुर्रज्जाक ने विजयनगर के बारे में क्या कहा?",
        answers: shuffle([
            { text: "\"यह दुनिया का सबसे गरीब शहर है।\"", correct: false },
            { text: "\"दुनिया में इसके जैसा भव्य शहर न तो आँखों ने देखा, न कानों ने सुना।\"", correct: true },
            { text: "\"यह एक छोटा और असुरक्षित शहर है।\"", correct: false },
            { text: "\"यहाँ के लोग बहुत असभ्य हैं।\"", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अब्दुर्रज्जाक</b> विजयनगर की <b>विशालता, समृद्धि और सुरक्षा व्यवस्था</b> से इतना प्रभावित हुआ कि उसने अपने यात्रा वृत्तांत में यह <b>प्रसिद्ध टिप्पणी</b> की।"
    },
    {
        question: "प्रश्न 18. विजयनगर के शासकों ने किस भाषा को सर्वाधिक प्रोत्साहन दिया?",
        answers: shuffle([
            { text: "केवल संस्कृत", correct: false },
            { text: "केवल तेलुगु", correct: false },
            { text: "केवल कन्नड़", correct: false },
            { text: "संस्कृत, तेलुगु, कन्नड़ और तमिल सभी को", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि <b>तेलुगु साहित्य कृष्णदेवराय के काल</b> में चरम पर था, विजयनगर के शासकों ने सभी प्रमुख <b>दक्षिणी भाषाओं</b> और <b>संस्कृत</b> को समान रूप से <b>संरक्षण</b> प्रदान किया।"
    },
    {
        question: "प्रश्न 19. कृष्णदेवराय ने गोलकुंडा का युद्ध किस सुल्तान के साथ लड़ा था?",
        answers: shuffle([
            { text: "यूसुफ आदिलशाह", correct: false },
            { text: "महमूद शाह", correct: false },
            { text: "कुली कुतुब शाह", correct: true },
            { text: "इमाद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कृष्णदेवराय</b> ने <b>गोलकुंडा के संस्थापक सुल्तान कुली कुतुब शाह</b> को एक युद्ध में पराजित किया था।"
    },
    {
        question: "प्रश्न 20. विजयनगर के किस शासक को पुर्तगाली 'एक महान शासक और अत्यंत न्यायप्रिय' बताते हैं?",
        answers: shuffle([
            { text: "देवराय द्वितीय", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "अच्युतदेव राय", correct: false },
            { text: "रामराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>डोमिंगो पेस और डुआर्टे बारबोसा</b> जैसे <b>पुर्तगाली यात्रियों</b> ने <b>कृष्णदेवराय</b> के <b>शासन, न्याय और व्यक्तित्व</b> की बहुत प्रशंसा की है।"
    },
    {
        question: "प्रश्न 21. विजयनगर के किस शासक ने तुंगभद्रा नदी पर एक बाँध बनवाया था?",
        answers: shuffle([
            { text: "बुक्का प्रथम", correct: false },
            { text: "हरिहर द्वितीय", correct: false },
            { text: "देवराय प्रथम", correct: true },
            { text: "कृष्णदेवराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजधानी में पानी की कमी को दूर करने और <b>सिंचाई</b> के लिए, <b>देवराय प्रथम</b> ने <b>तुंगभद्रा नदी</b> पर एक <b>बाँध (हरिद्रा बाँध)</b> का निर्माण करवाया और नहरें निकलवाईं।"
    },
    {
        question: "प्रश्न 22. विजयनगर साम्राज्य में 'कुदि' कौन थे?",
        answers: shuffle([
            { text: "सैनिक", correct: false },
            { text: "किसान जो भूमि के मालिक थे", correct: true },
            { text: "भूमिहीन खेतिहर मजदूर", correct: false },
            { text: "शिल्पकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विजयनगर में <b>कृषक वर्ग</b> को '<b>कुदि</b>' कहा जाता था, जिन्हें भूमि पर <b>व्यक्तिगत अधिकार</b> प्राप्त होते थे।"
    },
    {
        question: "प्रश्न 23. 'लोटस महल' (कमल महल) किस स्थापत्य शैली का मिश्रण है?",
        answers: shuffle([
            { text: "केवल द्रविड़ शैली", correct: false },
            { text: "केवल इस्लामी शैली", correct: false },
            { text: "इंडो-इस्लामिक शैली", correct: true },
            { text: "यूरोपीय शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हम्पी</b> के 'जनाना एनक्लोजर' में स्थित <b>कमल महल</b> की <b>मेहराबदार संरचना इस्लामी वास्तुकला</b> से प्रभावित है, जो इसे <b>इंडो-इस्लामिक शैली</b> का एक सुंदर उदाहरण बनाती है।"
    },
    {
        question: "प्रश्न 24. किस युद्ध के बाद दक्षिण भारत में विजयनगर की सर्वोच्चता स्थापित हुई?",
        answers: shuffle([
            { text: "तालिकोटा का युद्ध", correct: false },
            { text: "रायचूर का युद्ध", correct: true },
            { text: "अदोनी का युद्ध", correct: false },
            { text: "गोवा पर विजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1520 ई.</b> में <b>कृष्णदेवराय</b> ने <b>बीजापुर के इस्माइल आदिलशाह</b> को <b>रायचूर के युद्ध</b> में निर्णायक रूप से पराजित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस जीत ने पूरे <b>दक्षिण भारत</b> में <b>विजयनगर की सैन्य श्रेष्ठता</b> स्थापित कर दी।"
    },
    {
        question: "प्रश्न 25. विजयनगर साम्राज्य में 'उंबलि' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का वस्त्र", correct: false },
            { text: "एक प्रकार का कर", correct: false },
            { text: "विशेष सेवाओं के बदले दी जाने वाली कर-मुक्त भूमि", correct: true },
            { text: "एक सैन्य पद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाँव में <b>विशेष सेवाओं (जैसे चौकीदारी)</b> के बदले में दी जाने वाली <b>लगान-मुक्त भूमि</b> को '<b>उंबलि</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 26. हम्पी में मिली विशाल 'उग्र नरसिंह' की एकाश्म (monolithic) मूर्ति का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "देवराय द्वितीय", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "अच्युतदेव राय", correct: false },
            { text: "सदाशिव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>भगवान विष्णु के नरसिंह अवतार</b> की यह विशाल और भव्य मूर्ति <b>कृष्णदेवराय</b> के शासनकाल में <b>1528 ई.</b> में तराशी गई थी।"
    },
    {
        question: "प्रश्न 27. विजयनगर साम्राज्य में सती प्रथा का प्रचलन था, इसका प्रमाण किससे मिलता है?",
        answers: shuffle([
            { text: "केवल साहित्यिक स्रोतों से", correct: false },
            { text: "केवल पुरातात्विक साक्ष्यों से", correct: false },
            { text: "विदेशी यात्रियों के वृत्तांतों और अभिलेखों से", correct: true },
            { text: "इसका कोई प्रमाण नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>निकोलो कोंटी, नुनीज और बारबोसा</b> जैसे <b>विदेशी यात्रियों</b> ने अपनी आँखों से देखी <b>सती प्रथा</b> का वर्णन किया है।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, कई '<b>सती-पत्थर</b>' (नायकों की मृत्यु पर सती हुई उनकी पत्नियों के स्मारक) भी मिले हैं।"
    },
    {
        question: "प्रश्न 28. आलिया राम राय की कौन सी नीति दक्कनी सल्तनतों के संघ का कारण बनी?",
        answers: shuffle([
            { text: "धार्मिक कट्टरता की नीति", correct: false },
            { text: "साम्राज्य विस्तार की नीति", correct: false },
            { text: "एक सल्तनत का पक्ष लेकर दूसरे के विरुद्ध लड़ाने की नीति", correct: true },
            { text: "शांति और सह-अस्तित्व की नीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>राम राय</b> ने <b>दक्कनी सल्तनतों</b> के <b>आंतरिक मामलों</b> में हस्तक्षेप किया और उनकी आपसी फूट का लाभ उठाकर एक को दूसरे के खिलाफ इस्तेमाल किया।<br><br><i class='fa-solid fa-angles-right icon'></i> अंततः, इस '<b>बाँटो और राज करो</b>' की नीति से तंग आकर सभी सल्तनतों ने उसके विरुद्ध एक हो जाने का फैसला किया।"
    },
    {
        question: "प्रश्न 29. हरिहर और बुक्का पहले किस राज्य के सामंत थे?",
        answers: shuffle([
            { text: "होयसल", correct: false },
            { text: "यादव", correct: false },
            { text: "काकतीय", correct: true },
            { text: "पाण्ड्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि <b>हरिहर और बुक्का</b> प्रारंभ में <b>वारंगल के काकतीय शासक प्रतापरुद्र देव</b> के <b>सामंत</b> थे।"
    },
    {
        question: "प्रश्न 30. विजयनगर साम्राज्य के पतन के बाद कौन से प्रमुख राज्य उभरे?",
        answers: shuffle([
            { text: "a) मैसूर, इक्केरी, केलाडी", correct: false },
            { text: "b) मदुरै, तंजौर, गिंगी", correct: false },
            { text: "a), b) दोनों", correct: true },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर के विघटन</b> के बाद उसके पूर्व <b>नायकों</b> ने अपने-अपने क्षेत्रों में <b>स्वतंत्र राज्यों</b> की स्थापना कर ली, जिनमें <b>मैसूर, मदुरै, तंजौर, केलाडी</b> आदि प्रमुख थे।"
    },
    {
        question: "प्रश्न 31. \"एक महान शासक और न्यायप्रिय व्यक्ति, लेकिन क्रोध का शिकार।\" यह वर्णन डोमिंगो पेस ने किस शासक के लिए किया है?",
        answers: shuffle([
            { text: "देवराय द्वितीय", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "अच्युतदेव राय", correct: false },
            { text: "आलिया राम राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>पेस</b> ने <b>कृष्णदेवराय</b> के <b>कुशल प्रशासन, शारीरिक फिटनेस और न्यायप्रियता</b> की प्रशंसा की, लेकिन साथ ही यह भी उल्लेख किया कि अन्याय होने पर वह <b>अत्यंत क्रोधी</b> हो जाते थे।"
    },
    {
        question: "प्रश्न 32. विजयनगर काल में 'वीर पंचाल' किन्हें कहा जाता था?",
        answers: shuffle([
            { text: "सैनिकों के समूह को", correct: false },
            { text: "ब्राह्मणों के समूह को", correct: false },
            { text: "दस्तकार वर्ग (जैसे लोहार, बढ़ई, सोनार) को", correct: true },
            { text: "व्यापारियों के समूह को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>वीर पंचाल</b>' समाज का एक <b>महत्वपूर्ण दस्तकार वर्ग</b> था, जिसमें <b>सोनार, लोहार, बढ़ई और मूर्तिकार</b> आदि शामिल थे।"
    },
    {
        question: "प्रश्न 33. विजयनगर के शासकों का राजचिह्न (Royal Emblem) क्या था?",
        answers: shuffle([
            { text: "शेर", correct: false },
            { text: "हाथी", correct: false },
            { text: "वराह (सूअर)", correct: true },
            { text: "गरुड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर</b> के शासकों ने <b>वराह (भगवान विष्णु का अवतार)</b> को अपने <b>राजचिह्न (Royal Emblem)</b> के रूप में अपनाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके कई सिक्कों पर वराह का अंकन मिलता है।"
    },
    {
        question: "प्रश्न 34. विजयनगर साम्राज्य में सैन्य प्रमुखों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "आयगार", correct: false },
            { text: "नायक या अमरनायक", correct: true },
            { text: "दंडनायक", correct: false },
            { text: "राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>नायंकर व्यवस्था</b> के अंतर्गत <b>सैन्य प्रमुखों और प्रांतीय गवर्नरों</b> को '<b>नायक</b>' या '<b>अमरनायक</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 35. देवराय द्वितीय ने किस प्रसिद्ध संस्कृत ग्रंथ पर टीका लिखी थी?",
        answers: shuffle([
            { text: "मनुस्मृति", correct: false },
            { text: "ब्रह्मसूत्र", correct: true },
            { text: "रघुवंशम्", correct: false },
            { text: "अर्थशास्त्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>देवराय द्वितीय</b>, जिसे <b>प्रौढ़ देवराय</b> भी कहा जाता है, स्वयं एक विद्वान था और उसने प्रसिद्ध दार्शनिक ग्रंथ '<b>ब्रह्मसूत्र</b>' पर एक <b>टीका (भाष्य)</b> लिखी थी।"
    },
    {
        question: "प्रश्न 36. विजयनगर की सेना में तोपखाने की मौजूदगी का उल्लेख किसने किया है?",
        answers: shuffle([
            { text: "निकोलो कोंटी", correct: false },
            { text: "अब्दुर्रज्जाक", correct: false },
            { text: "डोमिंगो पेस", correct: false },
            { text: "फर्नाओ नुनीज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>नुनीज</b> ने उल्लेख किया है कि विजयनगर की सेना में <b>तोपें और बंदूकें</b> भी थीं, हालाँकि वे संभवतः पुर्तगालियों और तुर्कों की तरह उनके प्रयोग में कुशल नहीं थे।"
    },
    {
        question: "प्रश्न 37. 'वरदाम्बिका परिणयम्' नामक संस्कृत काव्य की रचना किसने की?",
        answers: shuffle([
            { text: "गंगा देवी", correct: false },
            { text: "कृष्णदेवराय", correct: false },
            { text: "तिरुमलाम्बा देवी", correct: true },
            { text: "अल्लसानि पेद्दन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तिरुमलाम्बा देवी</b>, जो <b>अच्युतदेव राय की पत्नी</b> थीं, एक <b>विदुषी महिला</b> थीं और उन्होंने '<b>वरदाम्बिका परिणयम्</b>' नामक ग्रंथ की रचना की।"
    },
    {
        question: "प्रश्न 38. विजयनगर साम्राज्य में 'अथवन' क्या था?",
        answers: shuffle([
            { text: "न्याय विभाग", correct: false },
            { text: "राजस्व विभाग", correct: true },
            { text: "सैन्य विभाग", correct: false },
            { text: "विदेशी विभाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर</b> के <b>केंद्रीय प्रशासन</b> में '<b>अथवन</b>' या '<b>अठावन</b>' <b>राजस्व विभाग</b> को कहा जाता था।"
    },
    {
        question: "प्रश्न 39. कृष्णदेवराय की मृत्यु के बाद विजयनगर का शासक कौन बना?",
        answers: shuffle([
            { text: "सदाशिव राय", correct: false },
            { text: "आलिया राम राय", correct: false },
            { text: "अच्युतदेव राय", correct: true },
            { text: "तिरुमल देव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कृष्णदेवराय</b> की मृत्यु के बाद <b>1529 ई.</b> में उनके <b>सौतेले भाई अच्युतदेव राय सिंहासन</b> पर बैठे।"
    },
    {
        question: "प्रश्न 40. हरिहर और बुक्का ने अपने पिता संगम के नाम पर किस वंश की स्थापना की?",
        answers: shuffle([
            { text: "सालुव", correct: false },
            { text: "तुलुव", correct: false },
            { text: "संगम", correct: true },
            { text: "अराविडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर</b> के <b>पहले राजवंश</b> का नाम उनके पिता '<b>संगम</b>' के नाम पर रखा गया था।"
    },
    {
        question: "प्रश्न 41. विजयनगर के खिलाफ बने महासंघ का नेता कौन था?",
        answers: shuffle([
            { text: "हुसैन निजाम शाह (अहमदनगर)", correct: false },
            { text: "कुली कुतुब शाह (गोलकुंडा)", correct: false },
            { text: "इब्राहिम आदिल शाह (बीजापुर)", correct: false },
            { text: "अली आदिल शाह प्रथम (बीजापुर)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि यह एक <b>संयुक्त संघ</b> था, लेकिन <b>बीजापुर के सुल्तान अली आदिल शाह प्रथम</b> ने इस संघ को बनाने और उसका <b>नेतृत्व</b> करने में सबसे महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 42. विजयनगर के किस शासक ने बहमनी सुल्तान फिरोज शाह बहमनी को हराया था?",
        answers: shuffle([
            { text: "हरिहर द्वितीय", correct: false },
            { text: "देवराय प्रथम", correct: true },
            { text: "देवराय द्वितीय", correct: false },
            { text: "कृष्णदेवराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में कई बार हारने के बाद, <b>देवराय प्रथम</b> ने अंततः अपनी सेना को मजबूत किया और <b>सोनार की बेटी के विवाह</b> से जुड़े युद्ध में <b>फिरोज शाह बहमनी</b> को पराजित किया।"
    },
    {
        question: "प्रश्न 43. 'प्रबंध' शैली को किस विजयनगर शासक के काल में लोकप्रियता मिली?",
        answers: shuffle([
            { text: "देवराय द्वितीय", correct: false },
            { text: "सालुव नरसिंह", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "अच्युतदेव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कृष्णदेवराय</b> के काल को <b>तेलुगु साहित्य</b> में '<b>प्रबंध काल</b>' के रूप में जाना जाता है, क्योंकि इस दौरान इस <b>काव्य शैली</b> का अत्यधिक विकास हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> '<b>आमुक्तमाल्यद</b>' स्वयं एक प्रबंध काव्य है।"
    },
    {
        question: "प्रश्न 44. विजयनगर साम्राज्य में प्रांतों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "शिक", correct: false },
            { text: "परगना", correct: false },
            { text: "मंडलम या राज्य", correct: true },
            { text: "नाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साम्राज्य को <b>प्रशासनिक सुविधा</b> के लिए <b>प्रांतों</b> में विभाजित किया गया था, जिन्हें '<b>मंडलम</b>' या '<b>राज्य</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 45. 'तारा' किस धातु की मुद्रा थी?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: true },
            { text: "तांबा", correct: false },
            { text: "कांसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर</b> में '<b>तारा</b>' <b>चांदी</b> की एक छोटी इकाई की <b>मुद्रा</b> थी।"
    },
    {
        question: "प्रश्न 46. किस यात्री ने विजयनगर के बाजारों को दुनिया के सबसे समृद्ध बाजारों में से एक बताया, जहाँ हर तरह के रत्न बिकते थे?",
        answers: shuffle([
            { text: "इब्न बतूता", correct: false },
            { text: "मार्को पोलो", correct: false },
            { text: "अब्दुर्रज्जाक", correct: true },
            { text: "निकितिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अब्दुर्रज्जाक</b> ने वर्णन किया है कि <b>विजयनगर</b> के बाजारों में <b>हीरे, माणिक और मोती</b> आम वस्तुओं की तरह बेचे जाते थे।"
    },
    {
        question: "प्रश्न 47. विजयनगर साम्राज्य का पतन किस शताब्दी में हुआ?",
        answers: shuffle([
            { text: "15वीं शताब्दी", correct: false },
            { text: "16वीं शताब्दी", correct: false },
            { text: "17वीं शताब्दी", correct: true },
            { text: "18वीं शताब्दी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि <b>तालिकोटा के युद्ध (1565)</b> से इसका गौरव समाप्त हो गया, लेकिन <b>अराविडु वंश</b> के तहत यह साम्राज्य <b>17वीं शताब्दी</b> के मध्य (लगभग 1646 ई.) तक किसी न किसी रूप में अस्तित्व में रहा।"
    },
    {
        question: "प्रश्न 48. हम्पी का नाम स्थानीय मातृदेवी 'पंपादेवी' के नाम पर पड़ा है। पंपादेवी किस भगवान की पत्नी हैं?",
        answers: shuffle([
            { text: "विष्णु", correct: false },
            { text: "विरुपाक्ष (शिव)", correct: true },
            { text: "विट्ठल", correct: false },
            { text: "राम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>पंपा</b>' <b>तुंगभद्रा नदी</b> का प्राचीन नाम है और <b>पंपा देवी</b> यहाँ की स्थानीय देवी हैं, जिन्हें <b>भगवान विरुपाक्ष (शिव) की पत्नी पार्वती</b> का रूप माना जाता है।"
    },
    {
        question: "प्रश्न 49. 'महान्यायकाचार्य' कौन होता था?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "सेनापति", correct: false },
            { text: "मुख्य न्यायाधीश या न्याय मंत्री", correct: true },
            { text: "ग्राम का मुखिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>विजयनगर</b> के <b>केंद्रीय प्रशासन</b> में <b>न्याय का सर्वोच्च अधिकारी</b> होता था।"
    },
    {
        question: "प्रश्न 50. विजयनगर की चित्रकला के अवशेष कहाँ देखे जा सकते हैं?",
        answers: shuffle([
            { text: "हजारा राम मंदिर", correct: false },
            { text: "विट्ठलस्वामी मंदिर", correct: false },
            { text: "विरुपाक्ष मंदिर के मंडप की छत पर", correct: true },
            { text: "लोटस महल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विरूपाक्ष मंदिर के रंग मंडप की छत</b> पर <b>विजयनगर शैली की चित्रकला</b> के सुंदर उदाहरण मिलते हैं, जिनमें <b>रामायण और महाभारत</b> के दृश्य चित्रित हैं।"
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