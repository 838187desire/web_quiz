const questions = [
    {
        topHeading: "सिकंदर (अलेक्जेंडर) पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.64)"
    },
    {
        question: "सिकंदर के आक्रमण के समय भारत में किस प्रकार के सिक्के प्रचलित थे?",
        answers: shuffle([
            { text: "केवल यूनानी सिक्के", correct: false },
            { text: "केवल भारतीय सिक्के", correct: true },
            { text: "भारत-यूनानी शैली के सिक्के", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण से पहले भारत में भारतीय शैली के सिक्के ही प्रचलित थे, जिसे पंच-मार्क (punch-marked) सिक्के कहा जाता था।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके साम्राज्य का विभाजन किस कारण से हुआ था?",
        answers: shuffle([
            { text: "उत्तराधिकारी की कमी", correct: false },
            { text: "सेनापतियों के बीच संघर्ष", correct: true },
            { text: "विदेशी आक्रमण", correct: false },
            { text: "जनता का विद्रोह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु के बाद उसके प्रमुख सेनापतियों (डायडोची) के बीच सत्ता संघर्ष शुरू हो गया, जिसके परिणामस्वरूप उसका विशाल साम्राज्य कई हिस्सों में विभाजित हो गया।"
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
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की सेना लंबे समय से चले आ रहे युद्धों से थक चुकी थी और उसने व्यास नदी के तट से आगे बढ़कर मगध की ओर जाने से इनकार कर दिया।"
    },
    {
        question: "सिकंदर के हमले के समय उत्तर-पश्चिमी भारत कितने स्वतंत्र राज्यों में विभाजित था?",
        answers: shuffle([
            { text: "5", correct: false },
            { text: "10", correct: false },
            { text: "15", correct: false },
            { text: "28", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के समय उत्तर-पश्चिमी भारत कई छोटे-छोटे राज्यों में विभाजित था।"
    },
    {
        question: "किस भारतीय शासक ने सिकंदर की अधीनता स्वीकार नहीं की, बल्कि उसके विरुद्ध विद्रोह किया?",
        answers: shuffle([
            { text: "राजा पोरस", correct: true },
            { text: "तक्षशिला का शासक आम्भी", correct: false },
            { text: "असकनी के शासक", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आम्भी ने अधीनता स्वीकार की थी, जबकि पोरस ने उसके साथ युद्ध किया।"
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
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु के कारण को लेकर इतिहासकारों में मतभेद है।"
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
        question: "सिकंदर के आक्रमण से पूर्व किस भारतीय राज्य ने यूनानी शासकों के साथ वैवाहिक संबंध स्थापित किए थे?",
        answers: shuffle([
            { text: "तक्षशिला", correct: true },
            { text: "राजा पोरस का राज्य", correct: false },
            { text: "गांधार", correct: false },
            { text: "ऐसा कोई प्रमाण नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तक्षशिला के शासक आम्भी ने सिकंदर की अधीनता स्वीकार करने के बाद उससे मित्रता स्थापित की थी।"
    },
    {
        question: "सिकंदर ने अपने सैनिकों को व्यास नदी के आगे बढ़ने के लिए राजी करने के लिए क्या किया?",
        answers: shuffle([
            { text: "उसने उन्हें अधिक धन देने का वादा किया", correct: false },
            { text: "उसने उन्हें युद्ध का भय दिखाया", correct: false },
            { text: "उसने उन्हें भावनात्मक भाषण दिया", correct: false },
            { text: "वह उन्हें राजी करने में असफल रहा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने अपने सैनिकों को कई भाषण दिए, लेकिन वे लगातार युद्धों से थके हुए थे और आगे बढ़ने को तैयार नहीं हुए।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके साम्राज्य का विभाजन किस सम्मेलन में हुआ था?",
        answers: shuffle([
            { text: "बेबीलोन का सम्मेलन", correct: false },
            { text: "ट्रायपरादिसस का सम्मेलन", correct: false },
            { text: "दोनों (A और B)", correct: true },
            { text: "ऐसा कोई सम्मेलन नहीं हुआ था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु के तुरंत बाद 323 ईसा पूर्व में बेबीलोन में उसके साम्राज्य के विभाजन पर चर्चा हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में 321 ईसा पूर्व में ट्रायपरादिसस में इसे अंतिम रूप दिया गया।"
    },
    {
        question: "किस यूनानी सेनापति ने सिकंदर के बाद भारत के कुछ क्षेत्रों पर शासन किया?",
        answers: shuffle([
            { text: "निरयाकस", correct: false },
            { text: "फिलिप", correct: true },
            { text: "एंटीगोनस", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने अपने अभियान के दौरान अपने जनरल फिलिप को झेलम और सिंधु नदियों के बीच के क्षेत्रों का शासक नियुक्त किया था।"
    },
    {
        question: "सिकंदर ने किस भारतीय दार्शनिक से भेंट की थी?",
        answers: shuffle([
            { text: "गौतम बुद्ध", correct: false },
            { text: "महावीर", correct: false },
            { text: "दण्डामिस", correct: true },
            { text: "चाणक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी स्रोतों के अनुसार, सिकंदर ने दण्डामिस नामक भारतीय दार्शनिक से भेंट की थी, जो किसी राजा के अधीन नहीं था।"
    },
    {
        question: "सिकंदर का भारत पर आक्रमण किस भारतीय शासक के लिए वरदान साबित हुआ?",
        answers: shuffle([
            { text: "घनानंद", correct: false },
            { text: "आम्भी", correct: false },
            { text: "पोरस", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण से उत्तर-पश्चिमी भारत में यूनानी शासन स्थापित हुआ, लेकिन बाद में चंद्रगुप्त मौर्य ने इन कमजोर यूनानी शासकों को हटाकर एक विशाल साम्राज्य की स्थापना की।"
    },
    {
        question: "सिकंदर ने किस भारतीय शासक के साथ अपनी बेटी का विवाह किया था?",
        answers: shuffle([
            { text: "पोरस", correct: false },
            { text: "आम्भी", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "किसी के साथ नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने अपने जीवनकाल में भारतीय शासकों के साथ कोई वैवाहिक संबंध स्थापित नहीं किया था।"
    },
    {
        question: "सिकंदर के आक्रमण से भारत में पहली बार किस प्रकार के सिक्के जारी हुए?",
        answers: shuffle([
            { text: "केवल यूनानी सिक्के", correct: false },
            { text: "केवल भारतीय सिक्के", correct: false },
            { text: "भारत-यूनानी शैली के सिक्के", correct: true },
            { text: "स्वर्ण सिक्के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के बाद, भारत में यूनानी शैली से प्रभावित सिक्के जारी हुए, जिन्हें इंडो-ग्रीक सिक्के कहा गया।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके साम्राज्य को कुल कितने भागों में विभाजित किया गया था?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के साम्राज्य को मुख्य रूप से तीन भागों में विभाजित किया गया था, जिनके शासक सेल्यूकस (एशिया), टॉलेमी (मिस्र) और एंटीगोनस (मेसेडोनिया) थे।"
    },
    {
        question: "'सिकंदर की कब्र' नामक शहर किस स्थान पर स्थित है?",
        answers: shuffle([
            { text: "बेबीलोन", correct: false },
            { text: "अलेक्जेंड्रिया (मिस्र)", correct: true },
            { text: "पेला", correct: false },
            { text: "फारस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर का शव पहले मेसेडोनिया ले जाया जा रहा था, लेकिन टॉलेमी ने उसे मिस्र के अलेक्जेंड्रिया में दफनाया था।"
    },
    {
        question: "सिकंदर ने किस नदी के तट पर अपनी जीत के बाद शहर 'निसेया' की स्थापना की थी?",
        answers: shuffle([
            { text: "झेलम", correct: true },
            { text: "व्यास", correct: false },
            { text: "सिंधु", correct: false },
            { text: "रावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झेलम के युद्ध में जीत के बाद, सिकंदर ने इस शहर की स्थापना की थी।"
    },
    {
        question: "किस यूनानी इतिहासकार ने सिकंदर के अभियानों को 'एक दैवीय कार्य' बताया?",
        answers: shuffle([
            { text: "एरियन", correct: true },
            { text: "प्लोटार्क", correct: false },
            { text: "कर्टियस", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एरियन ने अपनी पुस्तक 'एनोबेस ऑफ अलेक्जेंडर' में सिकंदर के अभियानों को दैवीय प्रेरणा से प्रेरित बताया है।"
    },
    {
        question: "सिकंदर ने किस वर्ष फारसी साम्राज्य के अंतिम शासक डेरियस III को हराया?",
        answers: shuffle([
            { text: "333 ईसा पूर्व", correct: false },
            { text: "331 ईसा पूर्व", correct: true },
            { text: "327 ईसा पूर्व", correct: false },
            { text: "323 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह गोगामेला का युद्ध था, जिसमें सिकंदर ने डेरियस III को निर्णायक रूप से हराया।"
    },
    {
        question: "सिकंदर के आक्रमण के समय किस भारतीय दार्शनिक ने उसका विरोध किया था?",
        answers: shuffle([
            { text: "दण्डामिस", correct: false },
            { text: "चाणक्य", correct: true },
            { text: "गौतम बुद्ध", correct: false },
            { text: "कपिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाणक्य ने सिकंदर के आक्रमण को भारत के लिए खतरा माना और भारतीय शासकों को एकजुट होने के लिए प्रेरित किया।"
    },
    {
        question: "सिकंदर ने किस भारतीय शासक के सामने 'एक राजा की तरह' समर्पण करने की मांग रखी थी?",
        answers: shuffle([
            { text: "आम्भी", correct: false },
            { text: "पोरस", correct: true },
            { text: "घनानंद", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झेलम के युद्ध के बाद, जब पोरस को बंदी बनाया गया, तो सिकंदर ने उससे पूछा कि उसके साथ कैसा व्यवहार किया जाए, तो पोरस ने जवाब दिया, \"एक राजा की तरह।\""
    },
    {
        question: "सिकंदर ने अपने किस सेनापति को जल मार्ग से वापस भेजा था?",
        answers: shuffle([
            { text: "सेल्यूकस निकेटर", correct: false },
            { text: "टॉलेमी", correct: false },
            { text: "निरयाकस", correct: true },
            { text: "फिलिप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने निरयाकस के नेतृत्व में अपनी नौसेना को सिंधु नदी से अरब सागर के रास्ते वापस भेजा था।"
    },
    {
        question: "सिकंदर ने किस भारतीय शासक को पराजित कर उसके राज्य को वापस नहीं लौटाया था?",
        answers: shuffle([
            { text: "आम्भी", correct: false },
            { text: "पोरस", correct: false },
            { text: "अभिसार", correct: false },
            { text: "कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने पोरस और अन्य भारतीय शासकों को उनके राज्य वापस लौटा दिए थे, लेकिन उन्हें अपनी अधीनता में रखा था।"
    },
    {
        question: "सिकंदर के आक्रमण से भारत में किस धर्म का उदय हुआ?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: false },
            { text: "ईसाई धर्म", correct: false },
            { text: "किसी भी धर्म का नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर का अभियान एक राजनीतिक और सैन्य अभियान था।"
    },
    {
        question: "सिकंदर की मृत्यु का एक संभावित कारण क्या था, जो यूनानी स्रोतों में मिलता है?",
        answers: shuffle([
            { text: "युद्ध में लगी चोट", correct: false },
            { text: "अत्यधिक शराब का सेवन", correct: true },
            { text: "जहर", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ यूनानी लेखकों के अनुसार, सिकंदर की मृत्यु अत्यधिक शराब के सेवन और उसके बाद के बुखार से हुई थी।"
    },
    {
        question: "सिकंदर के साम्राज्य में भारत का कौन सा हिस्सा शामिल था?",
        answers: shuffle([
            { text: "संपूर्ण उत्तर भारत", correct: false },
            { text: "केवल पंजाब और सिंध का हिस्सा", correct: true },
            { text: "केवल मगध साम्राज्य", correct: false },
            { text: "संपूर्ण भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने केवल उत्तर-पश्चिमी भारत के कुछ हिस्सों पर विजय प्राप्त की थी, जिसमें पंजाब और सिंध के क्षेत्र शामिल थे।"
    },
    {
        question: "सिकंदर की सेना ने किस नदी के तट से आगे बढ़ने से इनकार किया था, जो उसके अभियान का अंतिम बिंदु बन गया?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "झेलम", correct: false },
            { text: "चिनाब", correct: false },
            { text: "व्यास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यास नदी ही सिकंदर के भारत अभियान का अंतिम बिंदु था।"
    },
    {
        question: "सिकंदर ने किस भारतीय शासक से मित्रता स्थापित की थी?",
        answers: shuffle([
            { text: "पोरस", correct: false },
            { text: "आम्भी", correct: false },
            { text: "अभिसार", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने पहले आम्भी की अधीनता स्वीकार की, फिर पोरस से युद्ध के बाद मित्रता स्थापित की और अभिसार के शासक ने भी उसकी अधीनता स्वीकार की।"
    },
    {
        question: "सिकंदर के आक्रमण से भारत में किस प्रकार का व्यापार बढ़ा?",
        answers: shuffle([
            { text: "केवल समुद्री व्यापार", correct: false },
            { text: "केवल थल व्यापार", correct: false },
            { text: "समुद्री और थल दोनों व्यापार", correct: true },
            { text: "कोई व्यापार नहीं बढ़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण से भारत और यूनान के बीच नए थल और समुद्री मार्ग खुले, जिससे व्यापार में वृद्धि हुई।"
    },
    {
        question: "सिकंदर का भारत पर आक्रमण किस क्षेत्र से शुरू हुआ था?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "सिंध", correct: false },
            { text: "गांधार", correct: true },
            { text: "मगध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने खैबर दर्रे से गांधार में प्रवेश किया, जहाँ तक्षशिला के शासक आम्भी ने उसकी अधीनता स्वीकार की।"
    },
    {
        question: "सिकंदर के अभियान का वर्णन करने वाले किस यूनानी लेखक ने उसे 'विश्व विजेता' कहा था?",
        answers: shuffle([
            { text: "एरियन", correct: false },
            { text: "कर्टियस", correct: false },
            { text: "प्लोटार्क", correct: false },
            { text: "किसी ने नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विश्व विजेता' (Conqueror of the World) की उपाधि सिकंदर को आधुनिक इतिहासकारों ने दी है, उसके समकालीन यूनानी लेखकों ने नहीं।"
    },
    {
        question: "सिकंदर की सेना को किस भारतीय राज्य के बारे में सुनकर भयभीत हो गई थी?",
        answers: shuffle([
            { text: "तक्षशिला", correct: false },
            { text: "पोरस का राज्य", correct: false },
            { text: "मगध", correct: true },
            { text: "गांधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी स्रोतों के अनुसार, सिकंदर की सेना मगध के शासक घनानंद की विशाल सेना के बारे में सुनकर भयभीत हो गई थी, जिसमें 2 लाख पैदल सैनिक और 3,000 हाथी शामिल थे।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके साम्राज्य का विभाजन करने वाले सेनापतियों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "डायडोची", correct: true },
            { text: "हेलेनिक", correct: false },
            { text: "मासिडोनियन", correct: false },
            { text: "डायनोसस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डायडोची' (Diadochi) यूनानी शब्द है, जिसका अर्थ है 'उत्तराधिकारी'।<br><br><i class='fa-solid fa-angles-right icon'></i> सिकंदर के सेनापति जिन्होंने उसके साम्राज्य को आपस में बांटा, उन्हें डायडोची कहा गया।"
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