const questions = [
    {
        topHeading: "सिकंदर (अलेक्जेंडर) पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.63)"
    },
    {
        question: "सिकंदर के भारत अभियान का मुख्य सैन्य लक्ष्य क्या था?",
        answers: shuffle([
            { text: "सिंधु घाटी के शासकों को हराना", correct: false },
            { text: "गंगा घाटी के शासकों को हराना", correct: false },
            { text: "फारसी साम्राज्य के भारतीय प्रांतों पर कब्जा करना", correct: true },
            { text: "संपूर्ण भारत पर विजय प्राप्त करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर का अभियान फारसी साम्राज्य को पूरी तरह से नष्ट करने का था।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत का उत्तर-पश्चिमी भाग तब फारसी साम्राज्य का एक प्रांत था, जिसे जीतने के लिए वह भारत आया था।"
    },
    {
        question: "सिकंदर ने भारत में किस नदी के तट पर अपनी जीत की स्मृति में एक शहर 'निकिया' (Nicaea) की स्थापना की?",
        answers: shuffle([
            { text: "झेलम", correct: true },
            { text: "व्यास", correct: false },
            { text: "सिंधु", correct: false },
            { text: "रावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झेलम के युद्ध में जीत के बाद, सिकंदर ने 'निकिया' (जीत) नामक शहर की स्थापना की।"
    },
    {
        question: "सिकंदर ने अपनी सेना को वापस बुलाने के लिए किस नदी के तट पर बारह विशाल वेदी (altars) का निर्माण करवाया?",
        answers: shuffle([
            { text: "झेलम", correct: false },
            { text: "चिनाब", correct: false },
            { text: "व्यास", correct: true },
            { text: "सतलुज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यास नदी सिकंदर के अभियान की अंतिम सीमा थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यहां से वापस जाते समय उसने अपने सैनिकों की स्मृति में 12 वेदी बनवाईं।"
    },
    {
        question: "सिकंदर के आक्रमण से भारत के किस क्षेत्र में राजनीतिक रिक्तता (political vacuum) उत्पन्न हुई?",
        answers: shuffle([
            { text: "पूर्वी भारत", correct: false },
            { text: "पश्चिमी भारत", correct: false },
            { text: "उत्तर-पश्चिमी भारत", correct: true },
            { text: "दक्षिण भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के जाने के बाद उत्तर-पश्चिमी भारत में यूनानी शासन स्थापित हुआ, जो बाद में कमजोर पड़ गया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस रिक्तता का लाभ चंद्रगुप्त मौर्य ने उठाया।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके साम्राज्य का विभाजन करने वाले सेनापतियों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "डायनोसस", correct: false },
            { text: "डायडोची", correct: true },
            { text: "हेलेनिक", correct: false },
            { text: "मासिडोनियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डायडोची' सिकंदर के सेनापतियों के लिए इस्तेमाल किया जाने वाला शब्द है, जिन्होंने उसकी मृत्यु के बाद उसके साम्राज्य को आपस में बांटा था।"
    },
    {
        question: "सिकंदर का भारत अभियान लगभग कितने महीनों तक चला?",
        answers: shuffle([
            { text: "12 महीने", correct: false },
            { text: "19 महीने", correct: true },
            { text: "24 महीने", correct: false },
            { text: "36 महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने 326 ईसा पूर्व में भारत में प्रवेश किया और 325 ईसा पूर्व के अंत में वापस चला गया, इस प्रकार उसका अभियान लगभग 19 महीने तक चला।"
    },
    {
        question: "सिकंदर के आक्रमण के समय मगध साम्राज्य का शासक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "धनानंद", correct: true },
            { text: "बिम्बिसार", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के भारत पर आक्रमण के समय, नंद वंश का अंतिम शासक धनानंद मगध पर शासन कर रहा था।"
    },
    {
        question: "सिकंदर के आक्रमण का एक महत्वपूर्ण आर्थिक परिणाम क्या था?",
        answers: shuffle([
            { text: "भारत में स्वर्ण का प्रवाह बढ़ गया", correct: false },
            { text: "भारत और पश्चिम के बीच व्यापारिक मार्ग बंद हो गए", correct: false },
            { text: "भारत और पश्चिम के बीच व्यापारिक मार्ग खुल गए", correct: true },
            { text: "भारत की अर्थव्यवस्था पूरी तरह से ध्वस्त हो गई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के अभियानों के बाद भारत और यूनान के बीच नए समुद्री और थल मार्गों की खोज हुई, जिससे दोनों क्षेत्रों के बीच व्यापार को बढ़ावा मिला।"
    },
    {
        question: "सिकंदर ने भारत में किस नदी के तट पर अपनी सेना का पुनर्गठन किया था?",
        answers: shuffle([
            { text: "सतलुज", correct: false },
            { text: "रावी", correct: false },
            { text: "चिनाब", correct: false },
            { text: "झेलम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झेलम के युद्ध के बाद सिकंदर ने अपनी सेना का पुनर्गठन किया था।"
    },
    {
        question: "सिकंदर के साथ भारत आने वाले किस इतिहासकार ने 'एनोबेस ऑफ अलेक्जेंडर' नामक पुस्तक लिखी?",
        answers: shuffle([
            { text: "एरियन", correct: true },
            { text: "मेगास्थनीज", correct: false },
            { text: "कर्टियस", correct: false },
            { text: "प्लोटार्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एरियन ने सिकंदर के अभियानों का विस्तृत वर्णन किया है।"
    },
    {
        question: "सिकंदर के आक्रमण का क्या प्रभाव हुआ कि मौर्य साम्राज्य की स्थापना हुई?",
        answers: shuffle([
            { text: "इसने भारतीय राज्यों को कमजोर कर दिया", correct: false },
            { text: "इसने चंद्रगुप्त मौर्य को सिकंदर का सेनापति बना दिया", correct: false },
            { text: "इसने भारतीय राज्यों को अपनी कमजोरी का एहसास कराया", correct: true },
            { text: "इसने मगध साम्राज्य को ध्वस्त कर दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण ने भारतीय शासकों को यह एहसास दिलाया कि एकीकरण के बिना वे विदेशी आक्रमणों का सामना नहीं कर सकते।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके साम्राज्य का कौनसा हिस्सा सेल्यूकस निकेटर को मिला?",
        answers: shuffle([
            { text: "मेसेडोनिया", correct: false },
            { text: "एशिया माइनर", correct: false },
            { text: "पश्चिमी एशिया और भारत के प्रदेश", correct: true },
            { text: "मिस्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेल्यूकस निकेटर ने सिकंदर के पूर्वी साम्राज्य पर शासन किया, जिसमें पश्चिमी एशिया (मेसोपोटामिया, ईरान) और भारत के सीमावर्ती क्षेत्र शामिल थे।"
    },
    {
        question: "सिकंदर ने किस भारतीय शासक के राज्य को जीतने के बाद उसे वापस लौटा दिया?",
        answers: shuffle([
            { text: "आम्भी", correct: false },
            { text: "पोरस", correct: true },
            { text: "अभिसार", correct: false },
            { text: "उपर्युक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने पोरस की बहादुरी से प्रभावित होकर उसका राज्य वापस कर दिया था।"
    },
    {
        question: "सिकंदर के आक्रमण के समय भारत का सबसे शक्तिशाली और समृद्ध शासक कौन था?",
        answers: shuffle([
            { text: "पोरस", correct: false },
            { text: "आम्भी", correct: false },
            { text: "घनानंद", correct: true },
            { text: "चंद्रगुप्त मौर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के समय घनानंद मगध का शासक था, और मगध सबसे शक्तिशाली राज्य था।"
    },
    {
        question: "सिकंदर ने भारत के किस शासक की अधीनता स्वीकार नहीं की थी?",
        answers: shuffle([
            { text: "आम्भी", correct: false },
            { text: "पोरस", correct: false },
            { text: "अभिसार", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने किसी भी भारतीय शासक की अधीनता स्वीकार नहीं की थी।"
    },
    {
        question: "सिकंदर ने भारत में किस नदी के तट पर अपनी जीत की स्मृति में एक शहर 'अलेक्जेंड्रिया' की स्थापना की?",
        answers: shuffle([
            { text: "झेलम", correct: true },
            { text: "व्यास", correct: false },
            { text: "सिंधु", correct: false },
            { text: "सतलुज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने झेलम नदी के तट पर 'अलेक्जेंड्रिया' नामक शहर की स्थापना की थी, जिसे 'निकिया' के नाम से भी जाना जाता है।"
    },
    {
        question: "सिकंदर के आक्रमण से भारत में किस कला शैली का विकास हुआ, जिसे गांधार कला भी कहा जाता है?",
        answers: shuffle([
            { text: "भारतीय-रोमन", correct: false },
            { text: "भारतीय-फारसी", correct: false },
            { text: "भारतीय-यूनानी", correct: true },
            { text: "भारतीय-चीनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला, जो बौद्ध मूर्तियों में दिखाई देती है, भारतीय और यूनानी (हेलेनिस्टिक) कला का मिश्रण है।"
    },
    {
        question: "सिकंदर का अभियान कितने समय तक चला, जब वह अपने पिता की मृत्यु के बाद शासक बना?",
        answers: shuffle([
            { text: "लगभग 5 वर्ष", correct: false },
            { text: "लगभग 10 वर्ष", correct: false },
            { text: "लगभग 13 वर्ष", correct: true },
            { text: "लगभग 20 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर 336 ईसा पूर्व में शासक बना और 323 ईसा पूर्व में उसकी मृत्यु हुई, इस प्रकार उसका शासनकाल लगभग 13 वर्ष तक चला।"
    },
    {
        question: "किस यूनानी इतिहासकार ने सिकंदर को 'महान' (the Great) कहा था?",
        answers: shuffle([
            { text: "मेगास्थनीज", correct: false },
            { text: "हेरोडोटस", correct: false },
            { text: "एरियन", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महान' (the Great) की उपाधि सिकंदर को आधुनिक इतिहासकारों ने दी थी।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके साम्राज्य का विभाजन किस सम्मेलन में हुआ था?",
        answers: shuffle([
            { text: "बेबीलोन का सम्मेलन", correct: false },
            { text: "ट्रायपरादिसस का सम्मेलन", correct: false },
            { text: "दोनों (A और B)", correct: true },
            { text: "ऐसा कोई सम्मेलन नहीं हुआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु के तुरंत बाद 323 ईसा पूर्व में बेबीलोन में और बाद में 321 ईसा पूर्व में ट्रायपरादिसस में उसके साम्राज्य का विभाजन हुआ।"
    },
    {
        question: "सिकंदर के आक्रमण के समय भारत में किस प्रकार की राजनीतिक व्यवस्था थी?",
        answers: shuffle([
            { text: "राजशाही", correct: false },
            { text: "गणतंत्र", correct: false },
            { text: "दोनों (A और B)", correct: true },
            { text: "केवल राजशाही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के समय भारत में कई राजतंत्र और गणतंत्र दोनों मौजूद थे।"
    },
    {
        question: "किस भारतीय दार्शनिक ने सिकंदर को प्रभावित किया, जिसका उल्लेख यूनानी स्रोतों में मिलता है?",
        answers: shuffle([
            { text: "चाणक्य", correct: false },
            { text: "दण्डामिस", correct: true },
            { text: "कपिल", correct: false },
            { text: "गौतम बुद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी स्रोतों में दण्डामिस नामक एक भारतीय दार्शनिक का उल्लेख मिलता है, जो सिकंदर की अधीनता स्वीकार करने से इनकार कर दिया था।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके साम्राज्य का कौनसा हिस्सा टॉलेमी I को मिला?",
        answers: shuffle([
            { text: "मेसेडोनिया", correct: false },
            { text: "एशिया माइनर", correct: false },
            { text: "पश्चिमी एशिया", correct: false },
            { text: "मिस्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के सेनापति टॉलेमी I को मिस्र का शासक बनाया गया, जिसने टॉलेमिक राजवंश की स्थापना की।"
    },
    {
        question: "सिकंदर ने अपने किस सेनापति को जल मार्ग से वापस भेजा था?",
        answers: shuffle([
            { text: "सेल्यूकस निकेटर", correct: false },
            { text: "टॉलेमी", correct: false },
            { text: "निरयाकस", correct: true },
            { text: "फिलिप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने निरयाकस के नेतृत्व में अपनी नौसेना को सिंधु नदी के रास्ते हिंद महासागर से वापस भेजा था।"
    },
    {
        question: "सिकंदर ने भारत के किस शासक की पुत्री से विवाह किया था?",
        answers: shuffle([
            { text: "पोरस", correct: false },
            { text: "आम्भी", correct: false },
            { text: "अभिसार", correct: false },
            { text: "किसी भी भारतीय शासक की पुत्री से नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने फारसी और बैक्ट्रियन राजकुमारी से विवाह किया था, लेकिन किसी भी भारतीय शासक की पुत्री से नहीं।"
    },
    {
        question: "सिकंदर के आक्रमण के बाद भारत में किस प्रकार के सिक्कों का चलन बढ़ा?",
        answers: shuffle([
            { text: "केवल स्वर्ण सिक्के", correct: false },
            { text: "केवल रजत सिक्के", correct: false },
            { text: "भारत-यूनानी (Indo-Greek) शैली के सिक्के", correct: true },
            { text: "चीनी शैली के सिक्के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के बाद यूनानी शैली से प्रभावित सिक्के जारी हुए, जिनमें एक तरफ यूनानी और दूसरी तरफ भारतीय आकृति होती थी।"
    },
    {
        question: "सिकंदर के आक्रमण के समय, भारत का कौन सा हिस्सा सबसे अधिक विकसित और समृद्ध था?",
        answers: shuffle([
            { text: "गांधार", correct: false },
            { text: "पंजाब", correct: false },
            { text: "मगध", correct: true },
            { text: "दक्षिण भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के समय मगध साम्राज्य अपनी अपार धन-संपदा और विशाल सेना के लिए प्रसिद्ध था।"
    },
    {
        question: "किस यूनानी इतिहासकार ने लिखा कि सिकंदर ने भारत में 12 साल तक शासन किया?",
        answers: shuffle([
            { text: "एरियन", correct: false },
            { text: "प्लोटार्क", correct: true },
            { text: "स्ट्रैबो", correct: false },
            { text: "मेगास्थनीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी लेखक प्लूटार्क ने सिकंदर के बारे में कई लेख लिखे हैं, हालांकि यह दावा गलत है।"
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
        question: "सिकंदर के किस सेनापति को 'सिकंदरिया' (अफगानिस्तान) का शासक बनाया गया?",
        answers: shuffle([
            { text: "सेल्यूकस निकेटर", correct: true },
            { text: "निरयाकस", correct: false },
            { text: "फिलिप", correct: false },
            { text: "एंटिगोनस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु के बाद, सेल्यूकस निकेटर को उसके पूर्वी साम्राज्य का शासक बनाया गया, जिसमें अफगानिस्तान भी शामिल था।"
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
    },
    {
        question: "सिकंदर के आक्रमण से भारत में किस धर्म का प्रचार-प्रसार हुआ?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: false },
            { text: "ईसाई धर्म", correct: false },
            { text: "किसी भी धर्म का नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर का अभियान एक राजनीतिक और सैन्य अभियान था, जिसका उद्देश्य धार्मिक प्रचार नहीं था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका मुख्य लक्ष्य साम्राज्य विस्तार था।"
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