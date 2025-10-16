const questions = [
    {
        topHeading: "विजयनगर साम्राज्य पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. विजयनगर साम्राज्य की स्थापना किस वर्ष हुई थी?",
        answers: shuffle([
            { text: "1326 ई.", correct: false },
            { text: "1336 ई.", correct: true },
            { text: "1346 ई.", correct: false },
            { text: "1356 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर साम्राज्य</b> की स्थापना <b>1336 ई.</b> में <b>हरिहर और बुक्का</b> नामक दो भाइयों ने <b>तुंगभद्रा नदी</b> के दक्षिणी तट पर की थी।"
    },
    {
        question: "प्रश्न 2. विजयनगर साम्राज्य की स्थापना के समय दिल्ली का सुल्तान कौन था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोज शाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस समय दक्षिण में <b>विजयनगर साम्राज्य</b> की स्थापना हुई, उस समय <b>दिल्ली सल्तनत</b> पर <b>तुगलक वंश</b> के शासक <b>मुहम्मद बिन तुगलक</b> का शासन था।"
    },
    {
        question: "प्रश्न 3. विजयनगर साम्राज्य में 'देवदासी' प्रथा का संबंध किससे था?",
        answers: shuffle([
            { text: "राजदरबार से", correct: false },
            { text: "मंदिरों में ईश्वर की सेवा के लिए समर्पित महिलाएँ", correct: true },
            { text: "सेना की महिला टुकड़ी", correct: false },
            { text: "रानियों की दासियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>देवदासियाँ</b> वे महिलाएँ होती थीं जिनका विवाह <b>देवताओं</b> से कर दिया जाता था और वे अपना जीवन मंदिर में <b>नृत्य और संगीत</b> द्वारा <b>ईश्वर की सेवा</b> में व्यतीत करती थीं।"
    },
    {
        question: "प्रश्न 4. हरिहर और बुक्का को विजयनगर साम्राज्य स्थापित करने की प्रेरणा किस संत से मिली थी?",
        answers: shuffle([
            { text: "रामानुजाचार्य", correct: false },
            { text: "माधवाचार्य", correct: false },
            { text: "संत विद्यारण्य", correct: true },
            { text: "वल्लभाचार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>संत विद्यारण्य</b> ने <b>हरिहर और बुक्का</b> को <b>तुर्कों के विरुद्ध हिन्दू धर्म</b> की रक्षा के लिए एक स्वतंत्र राज्य स्थापित करने के लिए प्रेरित किया और उनका मार्गदर्शन किया।"
    },
    {
        question: "प्रश्न 5. विजयनगर साम्राज्य की प्रारंभिक राजधानी क्या थी?",
        answers: shuffle([
            { text: "अनेगोंडी", correct: true },
            { text: "विजयनगर (हम्पी)", correct: false },
            { text: "पेनुकोंडा", correct: false },
            { text: "चंद्रगिरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साम्राज्य की स्थापना के समय उनकी पहली राजधानी <b>तुंगभद्रा नदी</b> के उत्तरी तट पर स्थित <b>अनेगोंडी</b> थी।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में उन्होंने नदी के दक्षिणी तट पर <b>विजयनगर (हम्पी)</b> को अपनी राजधानी बनाया।"
    },
    {
        question: "प्रश्न 6. विजयनगर का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "वीरों का शहर", correct: false },
            { text: "जीत का शहर", correct: true },
            { text: "देवताओं का शहर", correct: false },
            { text: "समृद्ध शहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>विजयनगर</b>' एक <b>संस्कृत शब्द</b> है जिसका अर्थ 'विजय' या '<b>जीत का शहर</b>' होता है।"
    },
    {
        question: "प्रश्न 7. विजयनगर साम्राज्य का सबसे बड़ा प्रतिद्वंद्वी कौन सा मुस्लिम राज्य था?",
        answers: shuffle([
            { text: "बीदर सल्तनत", correct: false },
            { text: "गोलकुंडा सल्तनत", correct: false },
            { text: "बहमनी सल्तनत", correct: true },
            { text: "गुजरात सल्तनत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थापना के समय से ही <b>विजयनगर</b> और <b>बहमनी सल्तनत</b> के बीच <b>रायचूर दोआब</b> पर नियंत्रण को लेकर लगातार संघर्ष चलता रहा।"
    },
    {
        question: "प्रश्न 8. विजयनगर और बहमनी साम्राज्यों के बीच संघर्ष का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "धार्मिक मतभेद", correct: false },
            { text: "कृष्णा-तुंगभद्रा दोआब पर अधिकार", correct: true },
            { text: "व्यापार मार्गों पर नियंत्रण", correct: false },
            { text: "हाथियों की प्राप्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कृष्णा और तुंगभद्रा नदियों</b> के बीच का अत्यधिक <b>उपजाऊ क्षेत्र</b>, जिसे <b>रायचूर दोआब</b> कहा जाता है, दोनों साम्राज्यों के बीच विवाद की मुख्य जड़ था।"
    },
    {
        question: "प्रश्न 9. 'वेदमार्ग प्रतिष्ठापक' की उपाधि किस विजयनगर शासक ने धारण की थी?",
        answers: shuffle([
            { text: "हरिहर प्रथम", correct: false },
            { text: "बुक्का प्रथम", correct: true },
            { text: "देवराय प्रथम", correct: false },
            { text: "कृष्णदेवराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बुक्का प्रथम</b> ने <b>वैदिक धर्म</b> को बढ़ावा दिया और 'वेदों के मार्ग को स्थापित करने वाला' अर्थात '<b>वेदमार्ग प्रतिष्ठापक</b>' की उपाधि धारण की।"
    },
    {
        question: "प्रश्न 10. संगम वंश के किस शासक ने 'महाराजाधिराज' की उपाधि धारण की?",
        answers: shuffle([
            { text: "बुक्का प्रथम", correct: false },
            { text: "हरिहर द्वितीय", correct: true },
            { text: "देवराय प्रथम", correct: false },
            { text: "देवराय द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हरिहर द्वितीय</b> पहला विजयनगर शासक था जिसने अपने पूर्वजों की 'राजा' या 'महाराजा' की उपाधियों के स्थान पर '<b>महाराजाधिराज</b>' जैसी <b>शाही उपाधि</b> धारण की।"
    },
    {
        question: "प्रश्न 11. किस विजयनगर शासक ने अपनी सेना में तुर्की तीरंदाजों को भर्ती किया था?",
        answers: shuffle([
            { text: "हरिहर द्वितीय", correct: false },
            { text: "देवराय प्रथम", correct: true },
            { text: "देवराय द्वितीय", correct: false },
            { text: "कृष्णदेवराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहमनी सेना</b> की बेहतर <b>घुड़सवार सेना और तीरंदाजी</b> का मुकाबला करने के लिए, <b>देवराय प्रथम</b> ने पहली बार बड़ी संख्या में <b>मुस्लिम (तुर्की) तीरंदाजों</b> को अपनी सेना में शामिल किया।"
    },
    {
        question: "प्रश्न 12. प्रसिद्ध इतालवी यात्री निकोलो डे कोंटी किसके शासनकाल में विजयनगर आया था?",
        answers: shuffle([
            { text: "हरिहर द्वितीय", correct: false },
            { text: "देवराय प्रथम", correct: true },
            { text: "देवराय द्वितीय", correct: false },
            { text: "कृष्णदेवराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>निकोलो डे कोंटी</b> <b>1420-21 ई.</b> के आसपास <b>देवराय प्रथम</b> के शासनकाल के दौरान <b>विजयनगर</b> की यात्रा पर आया था और उसने शहर का विस्तृत वर्णन किया है।"
    },
    {
        question: "प्रश्न 13. संगम वंश का सबसे प्रतापी शासक कौन था?",
        answers: shuffle([
            { text: "हरिहर प्रथम", correct: false },
            { text: "बुक्का प्रथम", correct: false },
            { text: "देवराय प्रथम", correct: false },
            { text: "देवराय द्वितीय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>देवराय द्वितीय</b> को <b>संगम वंश</b> का सबसे <b>शक्तिशाली शासक</b> माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपने साम्राज्य का काफी विस्तार किया और <b>कला-साहित्य</b> को संरक्षण दिया।"
    },
    {
        question: "प्रश्न 14. 'गजबेटेकर' (हाथियों का शिकारी) की उपाधि किस विजयनगर शासक ने धारण की थी?",
        answers: shuffle([
            { text: "देवराय प्रथम", correct: false },
            { text: "कृष्णदेवराय", correct: false },
            { text: "देवराय द्वितीय", correct: true },
            { text: "अच्युतदेव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिलेखों में <b>देवराय द्वितीय</b> को 'इमाडि देवराय' और '<b>गजबेटेकर</b>' की उपाधियों से संबोधित किया गया है, जो उसकी <b>सैन्य शक्ति</b> का प्रतीक है।"
    },
    {
        question: "प्रश्न 15. फारस (ईरान) के राजदूत अब्दुर्रज्जाक ने किसके शासनकाल में विजयनगर की यात्रा की?",
        answers: shuffle([
            { text: "देवराय प्रथम", correct: false },
            { text: "देवराय द्वितीय", correct: true },
            { text: "मल्लिकार्जुन", correct: false },
            { text: "कृष्णदेवराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फारसी शासक शाहरूख</b> के दूत <b>अब्दुर्रज्जाक</b> ने <b>1443 ई.</b> में <b>देवराय द्वितीय</b> के दरबार का दौरा किया और <b>विजयनगर</b> के <b>वैभव और समृद्धि</b> का अद्भुत वर्णन किया।"
    },
    {
        question: "प्रश्न 16. विजयनगर में 'प्रथम बलापहार' (First Usurpation) द्वारा किस वंश की स्थापना हुई?",
        answers: shuffle([
            { text: "संगम वंश", correct: false },
            { text: "सालुव वंश", correct: true },
            { text: "तुलुव वंश", correct: false },
            { text: "अराविडु वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>संगम वंश</b> के अंतिम अयोग्य शासकों के समय जब साम्राज्य विघटन के कगार पर था, तब सेनापति <b>सालुव नरसिंह</b> ने <b>1485 ई.</b> में <b>सिंहासन पर अधिकार</b> कर लिया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस घटना को '<b>प्रथम बलापहार</b>' कहा जाता है।"
    },
    {
        question: "प्रश्न 17. सालुव वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "वीर नरसिंह", correct: false },
            { text: "सालुव नरसिंह", correct: true },
            { text: "इम्माडि नरसिंह", correct: false },
            { text: "कृष्णदेवराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सालुव नरसिंह</b> ने <b>संगम वंश</b> को समाप्त कर <b>सालुव वंश</b> की नींव रखी और साम्राज्य को नष्ट होने से बचाया।"
    },
    {
        question: "प्रश्न 18. तुलुव वंश की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "सालुव नरसिंह", correct: false },
            { text: "नरसा नायक", correct: false },
            { text: "वीर नरसिंह", correct: true },
            { text: "कृष्णदेवराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सालुव वंश</b> के पतन के बाद, उनके सेनापति <b>नरसा नायक के पुत्र वीर नरसिंह</b> ने <b>1505 ई.</b> में सिंहासन पर अधिकार कर <b>तुलुव वंश</b> की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे '<b>द्वितीय बलापहार</b>' कहा जाता है।"
    },
    {
        question: "प्रश्न 19. विजयनगर साम्राज्य का सबसे महान और प्रसिद्ध शासक कौन था?",
        answers: shuffle([
            { text: "देवराय द्वितीय", correct: false },
            { text: "सालुव नरसिंह", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "अच्युतदेव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तुलुव वंश</b> के <b>कृष्णदेवराय (1509-1529 ई.)</b> को न केवल विजयनगर का, बल्कि <b>भारत के महानतम शासकों</b> में से एक माना जाता है।"
    },
    {
        question: "प्रश्न 20. कृष्णदेवराय किस वंश से संबंधित थे?",
        answers: shuffle([
            { text: "संगम वंश", correct: false },
            { text: "सालुव वंश", correct: false },
            { text: "तुलुव वंश", correct: true },
            { text: "अराविडु वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कृष्णदेवराय</b> <b>तुलुव वंश</b> के तीसरे और सबसे शक्तिशाली शासक थे।"
    },
    {
        question: "प्रश्न 21. कृष्णदेवराय के शासनकाल को किस भाषा के साहित्य का 'स्वर्ण युग' कहा जाता है?",
        answers: shuffle([
            { text: "तमिल", correct: false },
            { text: "कन्नड़", correct: false },
            { text: "संस्कृत", correct: false },
            { text: "तेलुगु", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कृष्णदेवराय</b> स्वयं एक महान विद्वान थे और उन्होंने <b>तेलुगु साहित्य</b> को बहुत संरक्षण दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके दरबार में '<b>अष्टदिग्गज</b>' नामक आठ महान <b>तेलुगु कवि</b> थे।"
    },
    {
        question: "प्रश्न 22. 'अष्टदिग्गज' किसके दरबार में रहते थे?",
        answers: shuffle([
            { text: "देवराय द्वितीय", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "अच्युतदेव राय", correct: false },
            { text: "सदाशिव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>अष्टदिग्गज</b>' <b>कृष्णदेवराय</b> के दरबार के <b>आठ महान तेलुगु कवियों</b> का समूह था, जिसमें <b>अल्लसानि पेद्दन</b> सर्वप्रमुख थे।"
    },
    {
        question: "प्रश्न 23. 'सालुवाभ्युदयम्' नामक ग्रंथ की रचना किसने की?",
        answers: shuffle([
            { text: "सालुव नरसिंह", correct: false },
            { text: "कृष्णदेवराय", correct: false },
            { text: "राजनाथ डिंडिम", correct: true },
            { text: "अल्लसानि पेद्दन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ग्रंथ <b>सालुव वंश</b> के संस्थापक <b>सालुव नरसिंह</b> के जीवन और उपलब्धियों का वर्णन करता है।"
    },
    {
        question: "प्रश्न 24. 'आंध्र भोज' और 'अभिनव भोज' के नाम से किसे जाना जाता है?",
        answers: shuffle([
            { text: "देवराय द्वितीय", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "रामराय", correct: false },
            { text: "तिरुमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>साहित्य और कला</b> के महान संरक्षक होने के कारण, <b>कृष्णदेवराय</b> को '<b>आंध्र भोज</b>' और '<b>अभिनव भोज</b>' जैसी उपाधियाँ दी गईं।"
    },
    {
        question: "प्रश्न 25. प्रसिद्ध पुर्तगाली यात्री डोमिंगो पेस किसके शासनकाल में विजयनगर आया था?",
        answers: shuffle([
            { text: "देवराय द्वितीय", correct: false },
            { text: "सालुव नरसिंह", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "सदाशिवराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>डोमिंगो पेस</b> ने <b>कृष्णदेवराय</b> के शासनकाल में <b>विजयनगर</b> की यात्रा की और <b>सम्राट के व्यक्तित्व</b>, <b>शहर के वैभव</b> और <b>महानवमी उत्सव</b> का सजीव वर्णन किया।"
    },
    {
        question: "प्रश्न 26. कृष्णदेवराय ने किस प्रसिद्ध मंदिर का निर्माण करवाया था?",
        answers: shuffle([
            { text: "विरूपाक्ष मंदिर", correct: false },
            { text: "विट्ठलस्वामी मंदिर", correct: false },
            { text: "हजारा राम मंदिर", correct: true },
            { text: "मीनाक्षी मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हजारा राम मंदिर</b> और <b>कृष्णस्वामी मंदिर</b> का निर्माण <b>कृष्णदेवराय</b> ने करवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>हजारा राम मंदिर</b> की दीवारों पर <b>रामायण के दृश्य</b> उकेरे गए हैं।"
    },
    {
        question: "प्रश्न 27. कृष्णदेवराय ने 'यवनराज्य स्थापनाचार्य' की उपाधि क्यों धारण की?",
        answers: shuffle([
            { text: "यवनों (मुसलमानों) को हराने के कारण", correct: false },
            { text: "बीदर के सुल्तान को मुक्त कराकर पुनः गद्दी पर बैठाने के कारण", correct: true },
            { text: "पुर्तगालियों से संधि करने के कारण", correct: false },
            { text: "अपनी नौसेना को मजबूत करने के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब <b>बहमनी सुल्तान महमूद शाह</b> अपने ही अमीरों द्वारा कैद कर लिया गया था, तब <b>कृष्णदेवराय</b> ने उसे छुड़वाकर <b>बीदर की गद्दी</b> पर पुनः स्थापित किया, जिसके उपलक्ष्य में यह उपाधि धारण की।"
    },
    {
        question: "प्रश्न 28. कृष्णदेवराय के दरबार में 'अष्टदिग्गज' में सर्वप्रमुख कौन थे?",
        answers: shuffle([
            { text: "तेनाली राम कृष्ण", correct: false },
            { text: "नंदी तिम्मन", correct: false },
            { text: "धूर्जटि", correct: false },
            { text: "अल्लसानि पेद्दन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अल्लसानि पेद्दन</b> को '<b>आंध्र कविता पितामह</b>' (तेलुगु कविता का पितामह) कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी प्रमुख रचना '<b>मनुचरितम्</b>' है।"
    },
    {
        question: "प्रश्न 29. पुर्तगाली गवर्नर अल्बुकर्क ने किसके साथ अच्छे संबंध स्थापित किए थे?",
        answers: shuffle([
            { text: "देवराय प्रथम", correct: false },
            { text: "देवराय द्वितीय", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "रामराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कृष्णदेवराय</b> ने <b>पुर्तगालियों</b> के साथ <b>मैत्रीपूर्ण संबंध</b> बनाए।<br><br><i class='fa-solid fa-angles-right icon'></i> पुर्तगालियों ने उन्हें <b>अरबी घोड़े</b> की आपूर्ति में मदद की, जिसके बदले में <b>कृष्णदेवराय</b> ने उन्हें <b>भटकल</b> में एक किला बनाने की अनुमति दी।"
    },
    {
        question: "प्रश्न 30. विजयनगर साम्राज्य की प्रशासनिक व्यवस्था में 'नायंकर प्रणाली' क्या थी?",
        answers: shuffle([
            { text: "ग्राम प्रशासन की व्यवस्था", correct: false },
            { text: "नगर प्रशासन की व्यवस्था", correct: false },
            { text: "प्रांतों में सैन्य प्रमुखों को भूमि का आवंटन", correct: true },
            { text: "न्याय व्यवस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>दिल्ली सल्तनत की इक्ता प्रणाली</b> जैसी थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें राजा, <b>सैन्य प्रमुखों (नायकों)</b> को एक भू-क्षेत्र ('<b>अमरम</b>') देता था, जिसके बदले में नायक राजा को एक निश्चित <b>सैन्य सहायता और वार्षिक कर</b> प्रदान करता था।"
    },
    {
        question: "प्रश्न 31. विजयनगर में 'आयगार व्यवस्था' किससे संबंधित थी?",
        answers: shuffle([
            { text: "केंद्रीय प्रशासन", correct: false },
            { text: "प्रांतीय प्रशासन", correct: false },
            { text: "ग्राम प्रशासन", correct: true },
            { text: "नगर प्रशासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आयगार व्यवस्था</b> के अंतर्गत, प्रत्येक गाँव को एक <b>स्वतंत्र प्रशासनिक इकाई</b> के रूप में संगठित किया जाता था, जिसका शासन <b>12 सरकारी अधिकारियों</b> के एक समूह द्वारा किया जाता था, जिन्हें '<b>आयगार</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 32. विजयनगर साम्राज्य की आय का सबसे बड़ा स्रोत क्या था?",
        answers: shuffle([
            { text: "व्यापार कर", correct: false },
            { text: "भू-राजस्व", correct: true },
            { text: "बंदरगाहों से आय", correct: false },
            { text: "खानों से आय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कृषि</b> साम्राज्य की <b>अर्थव्यवस्था का आधार</b> थी, और <b>भूमि पर लगने वाला कर (लगान)</b> राज्य की <b>आय का मुख्य स्रोत</b> था, जो सामान्यतः उपज का 1/3 से 1/6 भाग तक होता था।"
    },
    {
        question: "प्रश्न 33. विजयनगर काल में 'शिस्ट' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का सिक्का", correct: false },
            { text: "एक सैन्य पद", correct: false },
            { text: "भू-राजस्व कर", correct: true },
            { text: "एक विवाह कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर साम्राज्य</b> में <b>भू-राजस्व</b> या <b>भूमि कर</b> को '<b>शिस्ट</b>' के नाम से जाना जाता था।"
    },
    {
        question: "प्रश्न 34. विजयनगर साम्राज्य में विवाह कर (Marriage Tax) के बारे में क्या सत्य है?",
        answers: shuffle([
            { text: "यह सभी पर लागू था", correct: false },
            { text: "यह केवल अमीरों पर लागू था", correct: false },
            { text: "यह वर और वधु दोनों पक्षों से लिया जाता था", correct: false },
            { text: "यह एक अलोकप्रिय कर था जिसे कृष्णदेवराय ने समाप्त कर दिया था", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विवाह कर</b> एक बहुत ही <b>अलोकप्रिय कर</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>कृष्णदेवराय</b> ने अपनी प्रजा के हित में इस कर को <b>समाप्त कर दिया</b> था।"
    },
    {
        question: "प्रश्न 35. विजयनगर साम्राज्य की स्वर्ण मुद्रा को क्या कहा जाता था?",
        answers: shuffle([
            { text: "दीनार", correct: false },
            { text: "टका", correct: false },
            { text: "वराह या पगोडा", correct: true },
            { text: "पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर</b> की मानक <b>स्वर्ण मुद्रा</b> '<b>वराह</b>' थी, जिसे <b>यूरोपीय यात्रियों</b> ने '<b>पगोडा</b>' कहा।<br><br><i class='fa-solid fa-angles-right icon'></i> इन सिक्कों पर अक्सर <b>हिंदू देवी-देवताओं</b> के चित्र अंकित होते थे।"
    },
    {
        question: "प्रश्न 36. विजयनगर साम्राज्य में मनुष्यों के क्रय-विक्रय को क्या कहा जाता था?",
        answers: shuffle([
            { text: "देवदान", correct: false },
            { text: "बेसवग", correct: true },
            { text: "जौनपुर", correct: false },
            { text: "शिस्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर साम्राज्य</b> में <b>दास प्रथा</b> प्रचलित थी और मनुष्यों की खरीद-फरोख्त को '<b>बेसवग</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 37. विजयनगर काल में 'भंडारवाद' भूमि का क्या अर्थ था?",
        answers: shuffle([
            { text: "मंदिरों को दान दी गई भूमि", correct: false },
            { text: "नायकों को दी गई भूमि", correct: false },
            { text: "सीधे राज्य के नियंत्रण वाली भूमि", correct: true },
            { text: "ब्राह्मणों को दी गई कर-मुक्त भूमि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>भंडारवाद</b>' गाँव की वे भूमियाँ होती थीं जो <b>सीधे राजा या केंद्र सरकार के नियंत्रण</b> में होती थीं और जिनसे प्राप्त होने वाला राजस्व सीधे <b>राजकोष</b> में जाता था।"
    },
    {
        question: "प्रश्न 38. विजयनगर का सबसे महत्वपूर्ण आयात क्या था?",
        answers: shuffle([
            { text: "मसाले", correct: false },
            { text: "वस्त्र", correct: false },
            { text: "घोड़े", correct: true },
            { text: "सोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी सेना, विशेषकर <b>घुड़सवार सेना</b> को मजबूत करने के लिए <b>विजयनगर साम्राज्य</b> <b>अरब, फारस और पुर्तगाल</b> से बड़ी संख्या में अच्छी नस्ल के <b>घोड़ों का आयात</b> करता था।"
    },
    {
        question: "प्रश्न 39. हम्पी, जो विजयनगर की राजधानी थी, किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: false },
            { text: "तुंगभद्रा", correct: true },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर</b> (आधुनिक <b>हम्पी</b>) के खंडहर <b>कर्नाटक</b> में <b>तुंगभद्रा नदी</b> के तट पर स्थित हैं।"
    },
    {
        question: "प्रश्न 40. विजयनगर की वास्तुकला शैली की एक प्रमुख विशेषता क्या है?",
        answers: shuffle([
            { text: "मेहराब और गुंबद का प्रयोग", correct: false },
            { text: "ऊँचे शिखर और गोपुरम", correct: false },
            { text: "अलंकृत स्तंभों वाले 'कल्याण मंडप'", correct: true },
            { text: "संगमरमर का व्यापक उपयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर</b> के मंदिरों में देवी-देवताओं के विवाह समारोहों के लिए बनाए गए भव्य और कलात्मक स्तंभों वाले '<b>कल्याण मंडप</b>' एक <b>विशिष्ट विशेषता</b> है।"
    },
    {
        question: "प्रश्न 41. प्रसिद्ध विट्ठलस्वामी मंदिर, जिसमें 56 संगीतमय स्तंभ हैं, कहाँ स्थित है?",
        answers: shuffle([
            { text: "कांचीपुरम", correct: false },
            { text: "बेलूर", correct: false },
            { text: "हम्पी", correct: true },
            { text: "श्रीरंगम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मंदिर <b>हम्पी</b> में स्थित है और <b>विजयनगर वास्तुकला</b> का एक <b>उत्कृष्ट उदाहरण</b> है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके स्तंभों पर थपथपाने से <b>संगीत की अलग-अलग ध्वनियाँ</b> निकलती हैं।"
    },
    {
        question: "प्रश्न 42. हम्पी में स्थित प्रसिद्ध 'पत्थर का रथ' किस मंदिर का हिस्सा है?",
        answers: shuffle([
            { text: "विरूपाक्ष मंदिर", correct: false },
            { text: "हजारा राम मंदिर", correct: false },
            { text: "विट्ठलस्वामी मंदिर", correct: true },
            { text: "कृष्णस्वामी मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रतिष्ठित <b>पत्थर का रथ</b> वास्तव में एक <b>गरुड़ मंदिर</b> है जो <b>विट्ठलस्वामी मंदिर परिसर</b> के भीतर स्थित है।"
    },
    {
        question: "प्रश्न 43. विजयनगर का सबसे पुराना और प्रमुख मंदिर कौन सा है, जो आज भी पूजा-अर्चना का केंद्र है?",
        answers: shuffle([
            { text: "विट्ठलस्वामी मंदिर", correct: false },
            { text: "विरूपाक्ष मंदिर", correct: true },
            { text: "हजारा राम मंदिर", correct: false },
            { text: "अच्युतराय मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विरूपाक्ष मंदिर भगवान शिव</b> को समर्पित है और यह <b>विजयनगर की स्थापना से भी पहले</b> का माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह <b>हम्पी</b> का मुख्य <b>पूजा स्थल</b> है।"
    },
    {
        question: "प्रश्न 44. 'महानवमी डिब्बा' क्या था?",
        answers: shuffle([
            { text: "एक मंदिर", correct: false },
            { text: "एक महल", correct: false },
            { text: "एक विशाल मंच जहाँ राजा महानवमी त्योहार के दौरान समारोहों की अध्यक्षता करता था", correct: true },
            { text: "एक अन्न भंडार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक <b>ऊँचा और विशाल मंच</b> था, जिसका उपयोग राजा द्वारा <b>महानवमी (दशहरा)</b> के भव्य उत्सवों के दौरान <b>सेना की परेड</b> देखने, <b>नृत्य और संगीत</b> के कार्यक्रमों का आनंद लेने के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 45. विजयनगर शैली के मंदिरों में ऊँचे और अलंकृत प्रवेश द्वारों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "शिखर", correct: false },
            { text: "विमान", correct: false },
            { text: "गोपुरम या रायगोपुरम", correct: true },
            { text: "मंडप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विजयनगर</b> के शासकों, विशेषकर <b>कृष्णदेवराय</b> ने मंदिरों में <b>विशाल और भव्य गोपुरमों (प्रवेश द्वारों)</b> का निर्माण करवाया, जिन्हें उनकी शक्ति के प्रतीक के रूप में '<b>रायगोपुरम</b>' भी कहा जाता है।"
    },
    {
        question: "प्रश्न 46. हम्पी के खंडहरों को किस वर्ष यूनेस्को द्वारा विश्व धरोहर स्थल घोषित किया गया?",
        answers: shuffle([
            { text: "1980", correct: false },
            { text: "1986", correct: true },
            { text: "1992", correct: false },
            { text: "2000", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हम्पी</b> में स्थित <b>विजयनगर साम्राज्य</b> के स्मारकों के समूह को उनके <b>ऐतिहासिक और सांस्कृतिक महत्व</b> के कारण <b>1986</b> में <b>यूनेस्को की विश्व धरोहर सूची</b> में शामिल किया गया।"
    },
    {
        question: "प्रश्न 47. विजयनगर साम्राज्य के पतन का मुख्य कारण कौन सा युद्ध था?",
        answers: shuffle([
            { text: "रायचूर का युद्ध", correct: false },
            { text: "दीव का युद्ध", correct: false },
            { text: "तालिकोटा का युद्ध", correct: true },
            { text: "अदोनी का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1565 ई.</b> में हुआ <b>तालिकोटा का युद्ध विजयनगर साम्राज्य</b> के लिए एक <b>विनाशकारी पराजय</b> थी, जिसने उसके गौरव का अंत कर दिया।"
    },
    {
        question: "प्रश्न 48. तालिकोटा का युद्ध किस वर्ष लड़ा गया था?",
        answers: shuffle([
            { text: "1526 ई.", correct: false },
            { text: "1556 ई.", correct: false },
            { text: "1565 ई.", correct: true },
            { text: "1576 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध <b>23 जनवरी 1565</b> को <b>विजयनगर साम्राज्य</b> और <b>दक्कन की सल्तनतों</b> के संयुक्त संघ के बीच लड़ा गया था।"
    },
    {
        question: "प्रश्न 49. तालिकोटा के युद्ध को अन्य किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "a) बन्नीहट्टी का युद्ध", correct: false },
            { text: "b) राक्षस-तंगड़ी का युद्ध", correct: false },
            { text: "a), b) दोनों", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध <b>राक्षस और तंगड़ी</b> नामक दो गाँवों के पास लड़ा गया था, इसलिए इसे '<b>राक्षस-तंगड़ी का युद्ध</b>' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> '<b>बन्नीहट्टी का युद्ध</b>' भी इसी का एक अन्य नाम है।"
    },
    {
        question: "प्रश्न 50. विजयनगर में 'करनिकम' कौन होता था?",
        answers: shuffle([
            { text: "एक सैनिक", correct: false },
            { text: "एक जासूस", correct: false },
            { text: "गाँव का लेखाकार (Accountant)", correct: true },
            { text: "एक पुजारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आयगार व्यवस्था</b> के अंतर्गत, '<b>करनिकम</b>' गाँव का <b>लेखा-जोखा रखने वाला प्रमुख अधिकारी</b> था।"
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