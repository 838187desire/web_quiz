const questions = [
    {
        topHeading: "सिकंदर (अलेक्जेंडर) पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.62)"
    },
    {
        question: "सिकंदर के साम्राज्य के विभाजन के बाद, उसके किस सेनापति को मिस्र का शासक बनाया गया?",
        answers: shuffle([
            { text: "सेल्यूकस निकेटर", correct: false },
            { text: "निरयाकस", correct: false },
            { text: "टॉलेमी I", correct: true },
            { text: "एंटीगोनस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु के बाद उसके साम्राज्य का विभाजन हुआ, जिसमें टॉलेमी I सोटर को मिस्र का शासक बनाया गया और उसने टॉलेमिक राजवंश की स्थापना की।"
    },
    {
        question: "सिकंदर के भारत छोड़ने के बाद उसके भारतीय क्षेत्रों का प्रशासन किसके हाथों में सौंपा गया था?",
        answers: shuffle([
            { text: "सेल्यूकस निकेटर", correct: true },
            { text: "निरयाकस", correct: false },
            { text: "फिलिप", correct: false },
            { text: "पोरस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने भारत के जीते हुए प्रदेशों का प्रशासन अपने सेनापति सेल्यूकस निकेटर को सौंपा था, जो बाद में पूर्वी साम्राज्य का शासक बना।"
    },
    {
        question: "किस यूनानी लेखक ने 'एनोबेस ऑफ अलेक्जेंडर' (Anabasis of Alexander) नामक पुस्तक लिखी, जो सिकंदर के अभियानों का एक महत्वपूर्ण स्रोत है?",
        answers: shuffle([
            { text: "एरियन", correct: true },
            { text: "मेगास्थनीज", correct: false },
            { text: "प्लोटार्क", correct: false },
            { text: "कर्टियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एरियन ने अपनी पुस्तक 'एनोबेस ऑफ अलेक्जेंडर' में सिकंदर के भारत अभियान सहित उसके जीवन का विस्तृत वर्णन किया है।"
    },
    {
        question: "सिकंदर ने किस वर्ष फारसी साम्राज्य को पूरी तरह से नष्ट कर दिया था?",
        answers: shuffle([
            { text: "333 ईसा पूर्व", correct: false },
            { text: "331 ईसा पूर्व", correct: true },
            { text: "327 ईसा पूर्व", correct: false },
            { text: "323 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 331 ईसा पूर्व में गोगामेला के युद्ध में डेरियस III को हराने के बाद, सिकंदर ने फारसी साम्राज्य पर निर्णायक विजय प्राप्त की।"
    },
    {
        question: "सिकंदर के आक्रमण के समय भारत का कौन सा हिस्सा सबसे अधिक विकसित और समृद्ध था?",
        answers: shuffle([
            { text: "उत्तर-पश्चिमी भारत", correct: false },
            { text: "गंगा के मैदान", correct: true },
            { text: "दक्षिण भारत", correct: false },
            { text: "मध्य भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध साम्राज्य गंगा के मैदानों में स्थित था, जो कृषि और व्यापार दोनों के लिए अत्यधिक समृद्ध था।<br><br><i class='fa-solid fa-angles-right icon'></i> यही कारण था कि सिकंदर की सेना मगध के बारे में सुनकर भयभीत थी।"
    },
    {
        question: "सिकंदर ने भारत के किस राजा से युद्ध के लिए हाथियों का प्रयोग सीखा?",
        answers: shuffle([
            { text: "पोरस", correct: true },
            { text: "आम्भी", correct: false },
            { text: "घनानंद", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर को झेलम के युद्ध में राजा पोरस की विशाल हाथी सेना का सामना करना पड़ा था।<br><br><i class='fa-solid fa-angles-right icon'></i> युद्ध के बाद उसने अपनी सेना में भी हाथियों को शामिल करना शुरू कर दिया था।"
    },
    {
        question: "सिकंदर के भारत अभियान के बाद भारत में किस कला शैली का विकास हुआ?",
        answers: shuffle([
            { text: "गांधार कला", correct: true },
            { text: "मथुरा कला", correct: false },
            { text: "पाल कला", correct: false },
            { text: "गुप्त कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला भारतीय और यूनानी कला का मिश्रण है, जिसे हेलेनिस्टिक कला का एक उदाहरण माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विकास सिकंदर के बाद हुआ।"
    },
    {
        question: "सिकंदर ने किस भारतीय क्षेत्र को जीतने के बाद अपने जनरल फिलिप को वहां का शासक नियुक्त किया?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "सिंध", correct: false },
            { text: "तक्षशिला", correct: false },
            { text: "झेलम और चिनाब के बीच का क्षेत्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने पोरस के राज्य को वापस लौटाने के बाद, सिंधु और झेलम नदी के बीच के क्षेत्रों को जीतने के बाद वहां फिलिप नामक एक जनरल को शासक नियुक्त किया।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके साम्राज्य के उत्तराधिकारियों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "डायनोसिस", correct: false },
            { text: "डायडोची", correct: true },
            { text: "हेलेनिक", correct: false },
            { text: "बैबिलोनिअन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डायडोची' (Diadochi) यूनानी शब्द है, जिसका अर्थ है 'उत्तराधिकारी'।<br><br><i class='fa-solid fa-angles-right icon'></i> सिकंदर के सेनापति जिन्होंने उसके साम्राज्य को आपस में बांटा, उन्हें डायडोची कहा गया।"
    },
    {
        question: "सिकंदर ने अपनी नौसेना को किस मार्ग से वापस भेजा था?",
        answers: shuffle([
            { text: "थल मार्ग से", correct: false },
            { text: "हिंद महासागर के रास्ते", correct: false },
            { text: "सिंधु नदी और अरब सागर के रास्ते", correct: true },
            { text: "लाल सागर के रास्ते", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने निरयाकस के नेतृत्व में अपनी नौसेना को सिंधु नदी से अरब सागर और फिर फारस की खाड़ी के रास्ते भेजा था।"
    },
    {
        question: "सिकंदर के बाद भारत के किस शासक ने सेल्यूकस निकेटर को हराया?",
        answers: shuffle([
            { text: "पोरस", correct: false },
            { text: "महापद्मनंद", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "अशोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य ने 305 ईसा पूर्व में सेल्यूकस निकेटर को हराया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस युद्ध के बाद एक संधि हुई, जिसके तहत सेल्यूकस को चंद्रगुप्त को कई क्षेत्र देने पड़े।"
    },
    {
        question: "सिकंदर की मृत्यु का एक संभावित कारण क्या माना जाता है?",
        answers: shuffle([
            { text: "युद्ध में लगी चोट", correct: false },
            { text: "जहर देना", correct: false },
            { text: "अत्यधिक बुखार", correct: true },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि मृत्यु का कोई निश्चित कारण ज्ञात नहीं है, सबसे प्रचलित सिद्धांत यह है कि सिकंदर को अत्यधिक बुखार (संभवतः टाइफाइड या मलेरिया) हुआ था।"
    },
    {
        question: "सिकंदर ने भारत में किस नदी के तट पर अपनी जीत की स्मृति में वेदी (altars) का निर्माण करवाया था?",
        answers: shuffle([
            { text: "सतलुज", correct: false },
            { text: "रावी", correct: false },
            { text: "व्यास", correct: true },
            { text: "झेलम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने व्यास नदी के तट पर 12 वेदी (altars) का निर्माण करवाया था, जो उसके भारत अभियान की पूर्वी सीमा थी।"
    },
    {
        question: "सिकंदर ने भारत के किस शासक की पुत्री से विवाह किया था?",
        answers: shuffle([
            { text: "पोरस", correct: false },
            { text: "आम्भी", correct: false },
            { text: "राजा ओफिस", correct: false },
            { text: "किसी भी भारतीय शासक की पुत्री से नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने फारसी राजकुमारी और बैक्ट्रियन राजकुमारी से विवाह किया था, लेकिन किसी भी भारतीय शासक की पुत्री से नहीं।"
    },
    {
        question: "सिकंदर के आक्रमण से भारत में पहली बार किस प्रकार का राजनीतिक प्रभाव पड़ा?",
        answers: shuffle([
            { text: "राज्यों में एकता स्थापित हुई", correct: true },
            { text: "राज्यों में विभाजन बढ़ गया", correct: false },
            { text: "भारत के व्यापारिक मार्ग बंद हो गए", correct: false },
            { text: "उत्तर-पश्चिमी भारत में शांति स्थापित हुई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के बाद भारतीय शासकों को अपनी कमजोरी का एहसास हुआ और उन्होंने एक शक्तिशाली साम्राज्य की आवश्यकता महसूस की, जिससे चंद्रगुप्त मौर्य के नेतृत्व में एकीकरण की शुरुआत हुई।"
    },
    {
        question: "किस यूनानी लेखक ने लिखा कि सिकंदर ने भारत में 12 साल तक शासन किया?",
        answers: shuffle([
            { text: "एरियन", correct: false },
            { text: "प्लूटार्क", correct: true },
            { text: "स्ट्रैबो", correct: false },
            { text: "मेगास्थनीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी लेखक प्लूटार्क ने सिकंदर के बारे में कई लेख लिखे हैं, हालांकि उनका यह दावा कि सिकंदर ने भारत में 12 साल तक शासन किया, गलत है, क्योंकि वह केवल 19 महीने भारत में था।"
    },
    {
        question: "'गांधार कला' किसका मिश्रण है?",
        answers: shuffle([
            { text: "भारतीय और फारसी शैली", correct: false },
            { text: "भारतीय और यूनानी शैली", correct: true },
            { text: "भारतीय और रोमन शैली", correct: false },
            { text: "भारतीय और चीनी शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला शैली को हेलेनिस्टिक शैली से प्रभावित माना जाता है, जो सिकंदर के आक्रमण के बाद भारत में विकसित हुई।"
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
        question: "सिकंदर के भारत अभियान के बाद किस व्यापारिक मार्ग को खोला गया?",
        answers: shuffle([
            { text: "रेशम मार्ग", correct: false },
            { text: "समुद्री मार्ग", correct: true },
            { text: "स्थल मार्ग", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निरयाकस के नेतृत्व में समुद्री अभियान से भारत और पश्चिम के बीच नए समुद्री मार्गों की खोज हुई।"
    },
    {
        question: "सिकंदर के अभियान का एक महत्वपूर्ण सांस्कृतिक परिणाम क्या था?",
        answers: shuffle([
            { text: "बौद्ध धर्म का प्रसार", correct: false },
            { text: "जैन धर्म का प्रसार", correct: false },
            { text: "भारतीय दर्शन का पश्चिम में प्रसार", correct: true },
            { text: "यूनानी दर्शन का भारत में प्रसार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के अभियान से भारत और पश्चिम के बीच संपर्क बढ़ा, जिससे भारतीय दार्शनिक विचारों का पश्चिम में प्रसार हुआ, जिसका उल्लेख यूनानी लेखकों ने किया है।"
    },
    {
        question: "सिकंदर की मृत्यु के बाद उसके साम्राज्य का सबसे बड़ा हिस्सा किसे मिला?",
        answers: shuffle([
            { text: "टॉलेमी", correct: false },
            { text: "सेल्यूकस निकेटर", correct: true },
            { text: "एंटीगोनस", correct: false },
            { text: "निरयाकस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर की मृत्यु के बाद उसके साम्राज्य का एक बड़ा हिस्सा उसके सेनापति सेल्यूकस निकेटर को मिला, जिसने सेल्यूसिड साम्राज्य की स्थापना की।"
    },
    {
        question: "सिकंदर के आक्रमण के समय भारत में कौन सा शासक सबसे शक्तिशाली और लोकप्रिय था?",
        answers: shuffle([
            { text: "आम्भी", correct: false },
            { text: "पोरस", correct: true },
            { text: "घनानंद", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा पोरस ने सिकंदर के सामने बहादुरी से लड़ाई लड़ी और अपनी मातृभूमि की रक्षा की, जिससे वह उस समय भारत में सबसे लोकप्रिय शासकों में से एक था।"
    },
    {
        question: "सिकंदर के आक्रमण के बाद भारत की राजनीतिक स्थिति क्या थी?",
        answers: shuffle([
            { text: "मजबूत और एकजुट", correct: false },
            { text: "कमजोर और खंडित", correct: true },
            { text: "स्थिर और शांत", correct: false },
            { text: "शांतिपूर्ण और समृद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर के आक्रमण के बाद भी उत्तर-पश्चिमी भारत में छोटे-छोटे राज्य कमजोर और विभाजित रहे, जिसका लाभ बाद में चंद्रगुप्त मौर्य ने उठाया।"
    },
    {
        question: "किस यूनानी इतिहासकार ने सिकंदर को 'महान' कहा था?",
        answers: shuffle([
            { text: "मेगास्थनीज", correct: false },
            { text: "हेरोडोटस", correct: false },
            { text: "एरियन", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महान' (the Great) की उपाधि सिकंदर को बाद के रोमन और अन्य इतिहासकारों ने दी थी, यह उसके समकालीन किसी यूनानी लेखक ने नहीं दी थी।"
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
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर का अभियान एक राजनीतिक और सैन्य अभियान था, जिसका धार्मिक उद्देश्यों से कोई संबंध नहीं था।"
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