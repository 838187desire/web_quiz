const questions = [
    {
        topHeading: "सिकंदर (अलेक्जेंडर) पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.61)"
    },
    {
        question: "सिकंदर (Alexander the Great) किस स्थान का शासक था?",
        answers: shuffle([
            { text: "एथेंस", correct: false },
            { text: "स्पार्टा", correct: false },
            { text: "मेसेडोनिया", correct: true },
            { text: "फारस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर, जिसे अलेक्जेंडर III के नाम से भी जाना जाता है, प्राचीन यूनान के मेसेडोनिया राज्य का शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह फिलिप द्वितीय का पुत्र था।"
    },
    {
        question: "सिकंदर का जन्म किस वर्ष हुआ था?",
        answers: shuffle([
            { text: "356 ईसा पूर्व", correct: true },
            { text: "323 ईसा पूर्व", correct: false },
            { text: "336 ईसा पूर्व", correct: false },
            { text: "340 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर का जन्म 356 ईसा पूर्व में मेसेडोनिया की राजधानी पेला में हुआ था।"
    },
    {
        question: "सिकंदर के पिता का नाम क्या था?",
        answers: shuffle([
            { text: "डेरियस III", correct: false },
            { text: "फिलिप II", correct: true },
            { text: "सेल्यूकस", correct: false },
            { text: "पोरस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के पिता का नाम फिलिप द्वितीय था, जो मेसेडोनिया के राजा थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी मृत्यु के बाद ही सिकंदर ने मेसेडोनिया का सिंहासन संभाला।"
    },
    {
        question: "सिकंदर का गुरु (शिक्षक) कौन था?",
        answers: shuffle([
            { text: "सुकरात", correct: false },
            { text: "प्लेटो", correct: false },
            { text: "अरस्तू", correct: true },
            { text: "होमर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के गुरु महान दार्शनिक अरस्तू थे।<br><br><i class='fa-solid fa-angles-right icon'></i> अरस्तू ने 13 से 16 वर्ष की आयु तक सिकंदर को शिक्षा दी।"
    },
    {
        question: "सिकंदर किस आयु में मेसेडोनिया का शासक बना?",
        answers: shuffle([
            { text: "20 वर्ष", correct: true },
            { text: "25 वर्ष", correct: false },
            { text: "30 वर्ष", correct: false },
            { text: "32 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने पिता फिलिप द्वितीय की हत्या के बाद, सिकंदर 20 वर्ष की आयु में 336 ईसा पूर्व में मेसेडोनिया का शासक बना।"
    },
    {
        question: "सिकंदर ने भारत पर किस वर्ष आक्रमण किया था?",
        answers: shuffle([
            { text: "327 ईसा पूर्व", correct: false },
            { text: "326 ईसा पूर्व", correct: true },
            { text: "325 ईसा पूर्व", correct: false },
            { text: "323 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने विश्व विजय के अभियान के तहत 326 ईसा पूर्व में भारत पर आक्रमण किया।"
    },
    {
        question: "भारत पर आक्रमण के समय सिकंदर किस दर्रे से होकर भारत आया था?",
        answers: shuffle([
            { text: "बोलन दर्रा", correct: false },
            { text: "गोमल दर्रा", correct: false },
            { text: "खैबर दर्रा", correct: true },
            { text: "शिपकिला दर्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने हिंदूकुश पर्वतमाला को पार करते हुए खैबर दर्रे से भारत में प्रवेश किया था।"
    },
    {
        question: "सिकंदर का पहला सामना किस भारतीय शासक के साथ हुआ था?",
        answers: shuffle([
            { text: "पोरस", correct: false },
            { text: "आम्भी", correct: true },
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "घनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में प्रवेश करने के बाद, सिकंदर का पहला सामना तक्षशिला के शासक आम्भी से हुआ, जिसने बिना युद्ध के ही उसकी अधीनता स्वीकार कर ली।"
    },
    {
        question: "आम्भी किस राज्य का शासक था?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "तक्षशिला", correct: true },
            { text: "मगध", correct: false },
            { text: "अवन्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आम्भी गांधार महाजनपद के अंतर्गत आने वाले तक्षशिला का शासक था।"
    },
    {
        question: "सिकंदर और राजा पोरस के बीच प्रसिद्ध युद्ध किस नदी के तट पर हुआ था?",
        answers: shuffle([
            { text: "चिनाब", correct: false },
            { text: "रावी", correct: false },
            { text: "सतलुज", correct: false },
            { text: "झेलम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर और पोरस के बीच 326 ईसा पूर्व में झेलम नदी के तट पर एक भीषण युद्ध हुआ था।"
    },
    {
        question: "झेलम नदी के युद्ध को किस अन्य नाम से जाना जाता है?",
        answers: shuffle([
            { text: "हाइडेस्पेस का युद्ध", correct: true },
            { text: "बुकेफला का युद्ध", correct: false },
            { text: "दासराज युद्ध", correct: false },
            { text: "गोगामेला का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी भाषा में झेलम नदी को हाइडेस्पेस कहा जाता था, इसलिए इस युद्ध को हाइडेस्पेस का युद्ध (Battle of the Hydaspes) भी कहा जाता है।"
    },
    {
        question: "झेलम नदी का प्राचीन नाम क्या था?",
        answers: shuffle([
            { text: "विपाशा", correct: false },
            { text: "वितस्ता", correct: true },
            { text: "परुष्णी", correct: false },
            { text: "शतद्रु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक काल में झेलम नदी को वितस्ता के नाम से जाना जाता था, जबकि व्यास को विपाशा और रावी को परुष्णी कहा जाता था।"
    },
    {
        question: "झेलम के युद्ध में सिकंदर का मुख्य प्रतिद्वंद्वी कौन था?",
        answers: shuffle([
            { text: "आम्भी", correct: false },
            { text: "पोरस", correct: true },
            { text: "घनानंद", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा पोरस का राज्य झेलम और चिनाब नदियों के बीच स्थित था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने सिकंदर का डटकर मुकाबला किया।"
    },
    {
        question: "झेलम के युद्ध में हार के बाद भी, सिकंदर ने पोरस के साथ कैसा व्यवहार किया?",
        answers: shuffle([
            { text: "उसे बंदी बना लिया", correct: false },
            { text: "उसे फाँसी दे दी", correct: false },
            { text: "उसे उसका राज्य वापस लौटा दिया", correct: true },
            { text: "उसे मेसेडोनिया भेज दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोरस की बहादुरी से प्रभावित होकर, सिकंदर ने उसे उसका राज्य वापस लौटा दिया और उसे अपने अधीनस्थ मित्र राजा के रूप में स्वीकार किया।"
    },
    {
        question: "सिकंदर के घोड़े का नाम क्या था?",
        answers: shuffle([
            { text: "रोसुलस", correct: false },
            { text: "ब्यूसेफालस", correct: true },
            { text: "हाइड्रा", correct: false },
            { text: "ओडिसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर का प्रसिद्ध घोड़ा ब्यूसेफालस था, जिसकी मृत्यु झेलम के युद्ध में हुई थी।"
    },
    {
        question: "सिकंदर ने अपने घोड़े की याद में किस शहर की स्थापना की थी?",
        answers: shuffle([
            { text: "अलेक्जेंड्रिया", correct: false },
            { text: "निसेया", correct: false },
            { text: "ब्यूसेफला", correct: true },
            { text: "हेरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने झेलम नदी के तट पर अपने प्रिय घोड़े ब्यूसेफालस की याद में ब्यूसेफला नामक शहर की स्थापना की थी।"
    },
    {
        question: "सिकंदर ने किस नदी के तट से आगे बढ़ने से इनकार कर दिया था?",
        answers: shuffle([
            { text: "सतलुज", correct: false },
            { text: "रावी", correct: false },
            { text: "चिनाब", correct: false },
            { text: "व्यास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की सेना लंबे समय से चले आ रहे युद्धों से थक चुकी थी और उसने व्यास नदी के तट से आगे बढ़कर मगध की ओर जाने से इनकार कर दिया।"
    },
    {
        question: "सिकंदर की सेना ने भारत में आगे बढ़ने से क्यों इनकार किया था?",
        answers: shuffle([
            { text: "वे घनानंद की विशाल सेना से डरते थे", correct: false },
            { text: "वे लगातार युद्ध से थक चुके थे", correct: false },
            { text: "वे भारत के मौसम से अनुकूल नहीं थे", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी स्रोतों के अनुसार, सिकंदर की सेना लंबी यात्रा, लगातार युद्धों और भारत के गर्म मौसम से थकी हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, उन्हें मगध के शासक घनानंद की विशाल सेना की अफवाहों का भी डर था।"
    },
    {
        question: "व्यास नदी का प्राचीन नाम क्या था?",
        answers: shuffle([
            { text: "विपाशा", correct: true },
            { text: "वितस्ता", correct: false },
            { text: "परुष्णी", correct: false },
            { text: "शतद्रु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक काल में व्यास नदी को विपाशा और झेलम को वितस्ता कहा जाता था।"
    },
    {
        question: "सिकंदर ने भारत से वापसी का मार्ग किस वर्ष शुरू किया था?",
        answers: shuffle([
            { text: "326 ईसा पूर्व", correct: false },
            { text: "325 ईसा पूर्व", correct: true },
            { text: "324 ईसा पूर्व", correct: false },
            { text: "323 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यास नदी के तट से वापस लौटने का निर्णय लेने के बाद, सिकंदर ने 325 ईसा पूर्व में भारत से वापसी का मार्ग शुरू किया।"
    },
    {
        question: "भारत से वापस जाते समय सिकंदर की नौसेना का नेतृत्व किसने किया था?",
        answers: shuffle([
            { text: "सेल्यूकस निकेटर", correct: false },
            { text: "निरयाकस", correct: true },
            { text: "प्लोटार्क", correct: false },
            { text: "फिलिप II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत से वापस जाते समय, सिकंदर ने अपनी सेना को दो भागों में विभाजित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> एक भाग का नेतृत्व स्वयं सिकंदर ने थल मार्ग से किया और दूसरे भाग का नेतृत्व नौसेना प्रमुख निरयाकस ने समुद्री मार्ग से किया।"
    },
    {
        question: "सिकंदर की मृत्यु किस स्थान पर हुई थी?",
        answers: shuffle([
            { text: "बेबीलोन", correct: true },
            { text: "तक्षशिला", correct: false },
            { text: "मेसेडोनिया", correct: false },
            { text: "फारस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु 323 ईसा पूर्व में मेसोपोटामिया के शहर बेबीलोन में हुई थी।"
    },
    {
        question: "सिकंदर की मृत्यु किस वर्ष हुई थी?",
        answers: shuffle([
            { text: "326 ईसा पूर्व", correct: false },
            { text: "325 ईसा पूर्व", correct: false },
            { text: "323 ईसा पूर्व", correct: true },
            { text: "320 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु 323 ईसा पूर्व में केवल 32 वर्ष की आयु में हुई थी।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके भारतीय विजित प्रदेशों का उत्तराधिकारी कौन बना?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "पोरस", correct: false },
            { text: "सेल्यूकस निकेटर", correct: true },
            { text: "मेगस्थनीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु के बाद, उसका एक सेनापति सेल्यूकस निकेटर उसके पूर्वी साम्राज्य का उत्तराधिकारी बना।"
    },
    {
        question: "सिकंदर का समकालीन मगध का शासक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "घनानंद", correct: true },
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "बिम्बिसार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सिकंदर ने भारत पर आक्रमण किया, तब मगध पर नंद वंश का अंतिम शासक घनानंद का शासन था।"
    },
    {
        question: "सिकंदर के आक्रमण के समय किस भारतीय राज्य ने उसकी अधीनता स्वीकार नहीं की थी?",
        answers: shuffle([
            { text: "तक्षशिला", correct: false },
            { text: "राजा पोरस का राज्य", correct: true },
            { text: "गांधार", correct: false },
            { text: "उपरोक्त सभी ने स्वीकार कर ली थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तक्षशिला के शासक आम्भी ने सिकंदर की अधीनता स्वीकार कर ली थी, लेकिन राजा पोरस ने इसका डटकर मुकाबला किया।"
    },
    {
        question: "भारत में सिकंदर के अभियान का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "साम्राज्य विस्तार और धन-संपदा प्राप्त करना", correct: true },
            { text: "धार्मिक प्रचार करना", correct: false },
            { text: "भारतीय शासकों को पराजित करना", correct: false },
            { text: "केवल समुद्री मार्ग खोजना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर का अभियान 'विश्व विजय' के सपने का एक हिस्सा था, जिसमें वह अपने साम्राज्य का विस्तार करना और भारत की अपार धन-संपदा प्राप्त करना चाहता था।"
    },
    {
        question: "सिकंदर ने किस साम्राज्य को हराने के बाद भारत की ओर रुख किया?",
        answers: shuffle([
            { text: "रोमन साम्राज्य", correct: false },
            { text: "मिस्र साम्राज्य", correct: false },
            { text: "फारसी साम्राज्य", correct: true },
            { text: "चीनी साम्राज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने गागामेला के युद्ध में फारसी राजा डेरियस III को निर्णायक रूप से हराकर फारसी साम्राज्य पर विजय प्राप्त की और उसके बाद भारत की ओर बढ़ा।"
    },
    {
        question: "सिकंदर के सेनापति का नाम क्या था जिसने भारत में उसके अभियानों में महत्वपूर्ण भूमिका निभाई?",
        answers: shuffle([
            { text: "निरयाकस", correct: false },
            { text: "सेल्यूकस निकेटर", correct: true },
            { text: "प्लोटार्क", correct: false },
            { text: "टॉलेमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेल्यूकस निकेटर सिकंदर का एक प्रमुख सेनापति था, जो बाद में उसके पूर्वी साम्राज्य का उत्तराधिकारी बना और उसका साम्राज्य भारत की सीमा तक फैला हुआ था।"
    },
    {
        question: "सिकंदर ने अपने सैनिकों को किस नदी के तट से वापस लौटने के लिए प्रेरित किया था?",
        answers: shuffle([
            { text: "झेलम", correct: false },
            { text: "व्यास", correct: true },
            { text: "चिनाब", correct: false },
            { text: "रावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यास नदी वह अंतिम सीमा थी जहाँ तक सिकंदर की सेना पहुँची थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यहां से सैनिकों के इनकार के बाद सिकंदर को वापस लौटना पड़ा।"
    },
    {
        question: "सिकंदर के हमले के समय उत्तर-पश्चिमी भारत कितने स्वतंत्र राज्यों में विभाजित था?",
        answers: shuffle([
            { text: "5", correct: false },
            { text: "10", correct: false },
            { text: "15", correct: false },
            { text: "28", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के समय उत्तर-पश्चिमी भारत कई छोटे-छोटे राज्यों में विभाजित था, जिनमें से प्रमुख थे तक्षशिला और पोरस का राज्य।<br><br><i class='fa-solid fa-angles-right icon'></i> यूनानी स्रोतों के अनुसार, इनकी संख्या लगभग 28 थी।"
    },
    {
        question: "किस भारतीय शासक ने सिकंदर की अधीनता स्वीकार नहीं की, बल्कि उसके विरुद्ध विद्रोह किया?",
        answers: shuffle([
            { text: "राजा पोरस", correct: true },
            { text: "तक्षशिला का शासक आम्भी", correct: false },
            { text: "असकनी के शासक", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आम्भी ने अधीनता स्वीकार की थी, जबकि पोरस ने उसके साथ युद्ध किया।<br><br><i class='fa-solid fa-angles-right icon'></i> असकनी के शासक भी अंततः पराजित हुए।"
    },
    {
        question: "सिकंदर के आक्रमण का भारत पर क्या प्रभाव पड़ा?",
        answers: shuffle([
            { text: "इसने भारत में एकीकरण को बढ़ावा दिया", correct: false },
            { text: "इसने भारत-यूनानी कला और संस्कृति के मेल को जन्म दिया", correct: true },
            { text: "इसने भारतीय शासकों को संगठित होने के लिए प्रेरित किया", correct: false },
            { text: "उपर्युक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के बाद भारत में हेलेनिस्टिक (यूनानी) कला और संस्कृति का प्रभाव बढ़ा, जिसे गांधार कला में देखा जा सकता है।"
    },
    {
        question: "'सिकंदरिया' या 'अलेक्जेंड्रिया' नामक शहर की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "सिकंदर", correct: true },
            { text: "सेल्यूकस निकेटर", correct: false },
            { text: "निरयाकस", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने अपने अभियानों के दौरान मिस्र, अफगानिस्तान और अन्य स्थानों पर कई 'अलेक्जेंड्रिया' नामक शहरों की स्थापना की थी।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके साम्राज्य का विभाजन किस कारण से हुआ?",
        answers: shuffle([
            { text: "उत्तराधिकारी की कमी", correct: false },
            { text: "सेनापतियों के बीच संघर्ष", correct: true },
            { text: "विदेशी आक्रमण", correct: false },
            { text: "जनता का विद्रोह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु के बाद उसके प्रमुख सेनापतियों (डायडोची) के बीच सत्ता संघर्ष शुरू हो गया, जिसके परिणामस्वरूप उसका विशाल साम्राज्य कई हिस्सों में विभाजित हो गया।"
    },
    {
        question: "सिकंदर के आक्रमण के समय मगध पर किस वंश का शासन था?",
        answers: shuffle([
            { text: "मौर्य वंश", correct: false },
            { text: "हर्यंक वंश", correct: false },
            { text: "नंद वंश", correct: true },
            { text: "शिशुनाग वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के समय मगध पर नंद वंश के अंतिम और सबसे शक्तिशाली शासक घनानंद का शासन था।"
    },
    {
        question: "किस यूनानी इतिहासकार ने लिखा है कि सिकंदर और पोरस के बीच हुए युद्ध में पोरस के सैनिकों में हाथियों का प्रयोग किया गया था?",
        answers: shuffle([
            { text: "मेगास्थनीज", correct: false },
            { text: "एरियन", correct: true },
            { text: "प्लोटार्क", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी इतिहासकार एरियन ने अपनी पुस्तक 'एनोबेस ऑफ अलेक्जेंडर' में सिकंदर के भारत अभियान और झेलम के युद्ध का विस्तृत वर्णन किया है, जिसमें पोरस की सेना में हाथियों की उपस्थिति का उल्लेख है।"
    },
    {
        question: "सिकंदर का भारत अभियान कितने समय तक चला?",
        answers: shuffle([
            { text: "लगभग 1 वर्ष", correct: false },
            { text: "लगभग 19 महीने", correct: true },
            { text: "लगभग 2 वर्ष", correct: false },
            { text: "लगभग 5 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर 326 ईसा पूर्व में भारत आया और 325 ईसा पूर्व के अंत में वापस चला गया, इस प्रकार उसका अभियान लगभग 19 महीने तक चला।"
    },
    {
        question: "सिकंदर ने भारत के किस क्षेत्र में अपनी विजय का स्मारक स्थापित किया था?",
        answers: shuffle([
            { text: "तक्षशिला", correct: false },
            { text: "झेलम नदी के तट पर", correct: false },
            { text: "व्यास नदी के तट पर", correct: true },
            { text: "सतलुज नदी के तट पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने व्यास नदी के तट पर 12 विशाल वेदी (altars) बनवाकर अपनी विजय का स्मारक स्थापित किया था।"
    },
    {
        question: "सिकंदर के आक्रमण का सबसे महत्वपूर्ण परिणाम क्या था?",
        answers: shuffle([
            { text: "राजनीतिक एकीकरण की शुरुआत", correct: false },
            { text: "व्यापार और वाणिज्य को बढ़ावा", correct: false },
            { text: "भारत और यूनान के बीच सीधा संपर्क स्थापित हुआ", correct: true },
            { text: "मगध साम्राज्य का पतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण से भारत और यूनान के बीच प्रत्यक्ष समुद्री और स्थलीय मार्ग खुले, जिससे व्यापार और सांस्कृतिक आदान-प्रदान को बढ़ावा मिला।"
    },
    {
        question: "किस भारतीय दार्शनिक ने सिकंदर को प्रभावित किया था, जिसका उल्लेख यूनानी स्रोतों में मिलता है?",
        answers: shuffle([
            { text: "चाणक्य", correct: false },
            { text: "दण्डामिस", correct: true },
            { text: "गौतम बुद्ध", correct: false },
            { text: "महावीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी स्रोतों में 'दण्डामिस' नामक एक भारतीय दार्शनिक का उल्लेख मिलता है, जिसने सिकंदर की अधीनता स्वीकार करने से इनकार कर दिया था और सिकंदर उसकी दृढ़ता से बहुत प्रभावित हुआ था।"
    },
    {
        question: "सिकंदर ने भारत में अपनी जीत के बाद दो नए शहरों की स्थापना की थी। वे कौन से थे?",
        answers: shuffle([
            { text: "निसेया और ब्यूसेफला", correct: true },
            { text: "तक्षशिला और पाटलिपुत्र", correct: false },
            { text: "अलेक्जेंड्रिया और पेला", correct: false },
            { text: "मेसेडोनिया और गांधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने झेलम नदी के तट पर दो शहरों की स्थापना की थी: ब्यूसेफला (अपने घोड़े के नाम पर) और निसेया (अपनी जीत की याद में)।"
    },
    {
        question: "सिकंदर की मृत्यु किस रोग के कारण हुई थी, ऐसा माना जाता है?",
        answers: shuffle([
            { text: "मलेरिया", correct: false },
            { text: "टाइफाइड", correct: false },
            { text: "निमोनिया", correct: false },
            { text: "कोई निश्चित प्रमाण नहीं है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु के कारण को लेकर इतिहासकारों में मतभेद है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुछ मानते हैं कि उसे मलेरिया या टाइफाइड बुखार हुआ था, जबकि कुछ अन्य कारणों जैसे जहर या अत्यधिक शराब पीने की बात भी कहते हैं।"
    },
    {
        question: "सिकंदर ने किस फारसी राजा को पराजित कर फारस पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "सायरस II", correct: false },
            { text: "डेरियस III", correct: true },
            { text: "अर्टाज़ेर्क्सीस III", correct: false },
            { text: "ज़ेरेक्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने 331 ईसा पूर्व में गागामेला के युद्ध में फारसी राजा डेरियस III को पराजित करके फारसी साम्राज्य को अपने अधीन कर लिया।"
    },
    {
        question: "किस प्राचीन भारतीय नदी का वर्णन यूनानी लेखकों ने 'ओनोस' के रूप में किया है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "झेलम", correct: false },
            { text: "व्यास", correct: true },
            { text: "चिनाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी लेखकों ने व्यास नदी को 'ओनोस' या 'ह्यफेसीस' (Hyphasis) नाम से संदर्भित किया है।"
    },
    {
        question: "सिकंदर के आक्रमण के समय भारत का सबसे शक्तिशाली राज्य कौन था?",
        answers: shuffle([
            { text: "तक्षशिला", correct: false },
            { text: "मगध", correct: true },
            { text: "पोरस का राज्य", correct: false },
            { text: "अवन्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के समय मगध साम्राज्य नंद वंश के शासक घनानंद के नेतृत्व में भारत का सबसे शक्तिशाली राज्य था।"
    },
    {
        question: "सिकंदर के आक्रमण के समय भारत में कोई केंद्रीय शक्ति क्यों नहीं थी?",
        answers: shuffle([
            { text: "भारतीय शासकों में आपसी संघर्ष था", correct: true },
            { text: "मगध साम्राज्य कमजोर था", correct: false },
            { text: "विदेशी आक्रमण से वे अनभिज्ञ थे", correct: false },
            { text: "सभी शासक एकजुट थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के समय भारत कई छोटे-छोटे राज्यों में बंटा हुआ था, जिनमें आपसी संघर्ष और फूट थी, जिसका लाभ सिकंदर को मिला।"
    },
    {
        question: "'हेलेनिस्टिक' शब्द का संबंध किस सभ्यता से है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "रोमन", correct: false },
            { text: "यूनानी", correct: true },
            { text: "भारतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हेलेनिस्टिक' शब्द यूनानी संस्कृति और भाषा से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> सिकंदर के अभियानों के बाद यूनानी संस्कृति का प्रसार एशिया और अफ्रीका में हुआ, जिसे हेलेनिस्टिक काल कहा जाता है।"
    },
    {
        question: "सिकंदर ने किस युद्ध में पोरस को हराया था?",
        answers: shuffle([
            { text: "पानीपत का युद्ध", correct: false },
            { text: "तराइन का युद्ध", correct: false },
            { text: "झेलम का युद्ध", correct: true },
            { text: "गोगामेला का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर और पोरस के बीच झेलम का युद्ध 326 ईसा पूर्व में लड़ा गया था, जिसमें पोरस की हार हुई थी।"
    },
    {
        question: "सिकंदर के बाद भारत के किस शासक ने यूनानी सेना को पराजित कर अपने साम्राज्य की नींव रखी?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "महापद्मनंद", correct: false },
            { text: "उदयीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु के बाद, चंद्रगुप्त मौर्य ने यूनानी सेनापतियों को पराजित कर मगध में मौर्य साम्राज्य की स्थापना की।"
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