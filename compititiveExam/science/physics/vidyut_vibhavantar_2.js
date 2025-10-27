const questions = [
    {
        topHeading: "विद्युत विभवांतर पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. किसी धनावेश को विद्युत क्षेत्र की दिशा में ले जाने पर उसकी विद्युत स्थितिज ऊर्जा...?",
        answers: shuffle([
            { text: "बढ़ती है", correct: false },
            { text: "घटती है", correct: true },
            { text: "अपरिवर्तित रहती है", correct: false },
            { text: "पहले बढ़ती है फिर घटती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत क्षेत्र स्वयं धनावेश पर कार्य करता है और उसे उच्च विभव से निम्न विभव की ओर ले जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब क्षेत्र कार्य करता है, तो निकाय की स्थितिज ऊर्जा घटती है और गतिज ऊर्जा में परिवर्तित होती है।"
    },
    {
        question: "प्रश्न 2. किसी ऋणावेश को विद्युत क्षेत्र की दिशा में ले जाने पर उसकी विद्युत स्थितिज ऊर्जा...?",
        answers: shuffle([
            { text: "बढ़ती है", correct: true },
            { text: "घटती है", correct: false },
            { text: "अपरिवर्तित रहती है", correct: false },
            { text: "शून्य हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋणावेश पर विद्युत क्षेत्र के विपरीत दिशा में बल लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसे क्षेत्र की दिशा में ले जाने के लिए बाह्य कारक को कार्य करना पड़ता है, जो निकाय की स्थितिज ऊर्जा के रूप में संचित हो जाता है।"
    },
    {
        question: "प्रश्न 3. यदि एक प्रोटॉन और एक अल्फा कण समान विभवांतर से त्वरित होते हैं, तो किसकी गतिज ऊर्जा अधिक होगी?",
        answers: shuffle([
            { text: "प्रोटॉन की", correct: false },
            { text: "अल्फा कण की", correct: true },
            { text: "दोनों की बराबर होगी", correct: false },
            { text: "उनके द्रव्यमान पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा K = qV होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> अल्फा कण पर आवेश (+2e) प्रोटॉन के आवेश (+e) का दोगुना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि विभवांतर (V) समान है, इसलिए अल्फा कण की गतिज ऊर्जा दोगुनी होगी।"
    },
    {
        question: "प्रश्न 4. विद्युत द्विध्रुव को एकसमान विद्युत क्षेत्र में घुमाने में किया गया कार्य किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "द्विध्रुव आघूर्ण पर", correct: false },
            { text: "विद्युत क्षेत्र की तीव्रता पर", correct: false },
            { text: "प्रारंभिक और अंतिम कोण पर", correct: false },
            { text: "घुमाने के कोणीय वेग पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किया गया कार्य केवल प्रारंभिक और अंतिम स्थितियों (कोणों) पर निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस बात पर नहीं कि उसे कितनी तेजी से घुमाया गया है।"
    },
    {
        question: "प्रश्न 5. 'वोल्टेज रेगुलेटर' का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "धारा को नियंत्रित करना", correct: false },
            { text: "एक स्थिर आउटपुट वोल्टेज प्रदान करना", correct: true },
            { text: "शक्ति को बढ़ाना", correct: false },
            { text: "प्रतिरोध को कम करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्टेज रेगुलेटर एक इलेक्ट्रॉनिक परिपथ है जो इनपुट वोल्टेज या लोड में परिवर्तन के बावजूद एक लगभग स्थिर आउटपुट वोल्टेज बनाए रखता है।"
    },
    {
        question: "प्रश्न 6. किसी आवेशित संधारित्र की प्लेटों के बीच माध्यम के रूप में हवा की जगह परावैद्युत स्लैब रखने पर प्लेटों के बीच विभवांतर...?",
        answers: shuffle([
            { text: "बढ़ जाता है", correct: false },
            { text: "घट जाता है", correct: true },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "पहले घटता है फिर बढ़ता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परावैद्युत पदार्थ के ध्रुवीकरण के कारण प्लेटों के बीच एक विपरीत विद्युत क्षेत्र उत्पन्न होता है, जो कुल विद्युत क्षेत्र को कम कर देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि V = Ed, इसलिए विभवांतर भी घट जाता है।"
    },
    {
        question: "प्रश्न 7. क्या बिना आवेश के किसी वस्तु में विभव हो सकता है?",
        answers: shuffle([
            { text: "हाँ, प्रेरण द्वारा", correct: true },
            { text: "नहीं, कभी नहीं", correct: false },
            { text: "केवल अतिचालकों में", correct: false },
            { text: "केवल अर्धचालकों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि किसी अनावेशित चालक को किसी आवेशित वस्तु के पास लाया जाए, तो प्रेरण के कारण उसके विभिन्न भागों में विभव उत्पन्न हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यद्यपि उसका कुल आवेश शून्य ही रहता है।"
    },
    {
        question: "प्रश्न 8. विभवमापी के तार का पदार्थ कैसा होना चाहिए?",
        answers: shuffle([
            { text: "उच्च प्रतिरोधकता और उच्च प्रतिरोध ताप गुणांक", correct: false },
            { text: "निम्न प्रतिरोधकता और उच्च प्रतिरोध ताप गुणांक", correct: false },
            { text: "उच्च प्रतिरोधकता और निम्न प्रतिरोध ताप गुणांक", correct: true },
            { text: "निम्न प्रतिरोधकता और निम्न प्रतिरोध ताप गुणांक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता उच्च होनी चाहिए ताकि कम लंबाई के तार में पर्याप्त विभव पतन हो सके।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिरोध ताप गुणांक निम्न होना चाहिए ताकि तापमान बदलने पर तार का प्रतिरोध न बदले, जिससे माप सटीक रहे। (जैसे मैंगनिन या कॉन्स्टेंटन)।"
    },
    {
        question: "प्रश्न 9. ओम का नियम लागू होता है जब चालक का ________ स्थिर रहता है।",
        answers: shuffle([
            { text: "प्रतिरोध", correct: false },
            { text: "धारा", correct: false },
            { text: "विभवांतर", correct: false },
            { text: "तापमान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम की मुख्य शर्त यह है कि चालक की भौतिक अवस्थाएं, विशेष रूप से तापमान, स्थिर रहनी चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> क्योंकि तापमान बदलने से प्रतिरोध बदल जाता है।"
    },
    {
        question: "प्रश्न 10. एक खुले परिपथ में (जब कोई धारा प्रवाहित नहीं हो रही हो), एक सेल के टर्मिनलों के बीच विभवांतर बराबर होता है?",
        answers: shuffle([
            { text: "शून्य के", correct: false },
            { text: "सेल के आंतरिक प्रतिरोध के", correct: false },
            { text: "सेल के विद्युत वाहक बल (EMF) के", correct: true },
            { text: "अनंत के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खुले परिपथ में धारा (I) शून्य होती है, इसलिए आंतरिक प्रतिरोध (r) पर कोई विभव पतन (Ir) नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः टर्मिनल विभवांतर (V = E - Ir) EMF (E) के बराबर होता है।"
    },
    {
        question: "प्रश्न 11. विद्युत क्षेत्र में किसी बिंदु पर विभव, उस बिंदु की ________ को निर्धारित करता है।",
        answers: shuffle([
            { text: "आवेश की मात्रा", correct: false },
            { text: "आवेश के प्रवाह की दिशा", correct: true },
            { text: "विद्युत क्षेत्र की दिशा", correct: false },
            { text: "बल की दिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत विभव आवेश के प्रवाह की दिशा को निर्धारित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> धन आवेश हमेशा उच्च विभव से निम्न विभव की ओर प्रवाहित होता है।"
    },
    {
        question: "प्रश्न 12. यदि विभव दूरी के साथ बढ़ता है, तो विद्युत क्षेत्र की दिशा क्या होगी?",
        answers: shuffle([
            { text: "विभव बढ़ने की दिशा में", correct: false },
            { text: "विभव बढ़ने की विपरीत दिशा में", correct: true },
            { text: "विभव की दिशा के लंबवत", correct: false },
            { text: "कोई निश्चित दिशा नहीं होगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत क्षेत्र की दिशा हमेशा उस दिशा में होती है जिधर विभव सबसे तेजी से घटता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, यह विभव बढ़ने की दिशा के विपरीत होगी।"
    },
    {
        question: "प्रश्न 13. सीसे-अम्ल संचायक सेल (कार बैटरी) को चार्ज करते समय, उसका टर्मिनल विभवांतर उसके EMF से...?",
        answers: shuffle([
            { text: "कम होता है", correct: false },
            { text: "अधिक होता है", correct: true },
            { text: "बराबर होता है", correct: false },
            { text: "शून्य होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चार्जिंग के दौरान, सेल को धारा दी जाती है, और टर्मिनल विभवांतर V = E + Ir हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, यह EMF से अधिक होता है।"
    },
    {
        question: "प्रश्न 14. किसी बिंदु पर विभव की परिभाषा के लिए किस आवेश को संदर्भ माना जाता है?",
        answers: shuffle([
            { text: "इकाई ऋणावेश", correct: false },
            { text: "इकाई धनावेश", correct: true },
            { text: "एक इलेक्ट्रॉन", correct: false },
            { text: "एक प्रोटॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी बिंदु पर विद्युत विभव, इकाई धन परीक्षण आवेश को अनंत से उस बिंदु तक लाने में किए गए कार्य के बराबर होता है।"
    },
    {
        question: "प्रश्न 15. दो प्लेटों के बीच विभवांतर नियत है। यदि प्लेटों के बीच की दूरी आधी कर दी जाए, तो विद्युत क्षेत्र की तीव्रता...?",
        answers: shuffle([
            { text: "आधी हो जाएगी", correct: false },
            { text: "दोगुनी हो जाएगी", correct: true },
            { text: "चार गुनी हो जाएगी", correct: false },
            { text: "अपरिवर्तित रहेगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग एकसमान क्षेत्र के लिए, E = V/d होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि V नियत है और d को आधा (d/2) कर दिया जाए, तो नया क्षेत्र E' = V/(d/2) = 2(V/d) = 2E, अर्थात दोगुना हो जाएगा।"
    },
    {
        question: "प्रश्न 16. तड़ित चालक का सिरा नुकीला क्यों बनाया जाता है?",
        answers: shuffle([
            { text: "सुंदर दिखने के लिए", correct: false },
            { text: "प्रतिरोध कम करने के लिए", correct: false },
            { text: "आवेश घनत्व बढ़ाने के लिए", correct: true },
            { text: "वजन कम करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नुकीले सिरों पर पृष्ठीय आवेश घनत्व बहुत अधिक होता है, जिससे वहां विभव प्रवणता बढ़ जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> और कोरोनाविसर्जन द्वारा बादलों के आवेश को धीरे-धीरे निरावेशित करने में मदद मिलती है।"
    },
    {
        question: "प्रश्न 17. वह कौन सी युक्ति है जो रासायनिक ऊर्जा को विद्युत ऊर्जा में बदलकर विभवांतर उत्पन्न करती है?",
        answers: shuffle([
            { text: "मोटर", correct: false },
            { text: "जनरेटर", correct: false },
            { text: "सेल या बैटरी", correct: true },
            { text: "ट्रांसफॉर्मर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत रासायनिक सेल रासायनिक अभिक्रियाओं के माध्यम से अपने इलेक्ट्रोडों के बीच एक विभवांतर स्थापित करते हैं।"
    },
    {
        question: "प्रश्न 18. यदि किसी आवेशित कण का द्रव्यमान दोगुना कर दिया जाए, तो समान विभवांतर से त्वरित होने पर उसकी अंतिम गतिज ऊर्जा...?",
        answers: shuffle([
            { text: "आधी हो जाएगी", correct: false },
            { text: "दोगुनी हो जाएगी", correct: false },
            { text: "चार गुनी हो जाएगी", correct: false },
            { text: "अपरिवर्तित रहेगी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण द्वारा प्राप्त गतिज ऊर्जा K = qV होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केवल आवेश (q) और विभवांतर (V) पर निर्भर करती है, द्रव्यमान पर नहीं।"
    },
    {
        question: "प्रश्न 19. किसी आवेश के कारण उत्पन्न विभव का मान किस माध्यम में अधिकतम होगा?",
        answers: shuffle([
            { text: "पानी", correct: false },
            { text: "हवा या निर्वात", correct: true },
            { text: "कांच", correct: false },
            { text: "अभ्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी माध्यम में विभव V = (1/4πε₀K) * (q/r) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> परावैद्युतांक (K) का मान हवा या निर्वात के लिए न्यूनतम (1) होता है, इसलिए विभव का मान अधिकतम होगा।"
    },
    {
        question: "प्रश्न 20. विद्युत क्षेत्र और समविभव पृष्ठों के बीच का कोण कितना होता है?",
        answers: shuffle([
            { text: "0 डिग्री", correct: false },
            { text: "45 डिग्री", correct: false },
            { text: "90 डिग्री", correct: true },
            { text: "180 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत क्षेत्र रेखाएं हमेशा समविभव पृष्ठों के लंबवत होती हैं।"
    },
    {
        question: "प्रश्न 21. यदि किसी आवेशित कण को एक समविभव पृष्ठ पर चलाया जाए, तो उसकी गतिज ऊर्जा...?",
        answers: shuffle([
            { text: "बढ़ती है", correct: false },
            { text: "घटती है", correct: false },
            { text: "नियत रहती है", correct: true },
            { text: "शून्य हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समविभव पृष्ठ पर चलाने में कोई कार्य नहीं होता (W=0)।<br><br><i class='fa-solid fa-angles-right icon'></i> कार्य-ऊर्जा प्रमेय के अनुसार, किया गया कार्य गतिज ऊर्जा में परिवर्तन के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः गतिज ऊर्जा में कोई परिवर्तन नहीं होगा, अर्थात वह नियत रहेगी।"
    },
    {
        question: "प्रश्न 22. किसी चालक की धारिता को प्रभावित नहीं करता है?",
        answers: shuffle([
            { text: "चालक का आकार", correct: false },
            { text: "चालक के समीप अन्य चालकों की उपस्थिति", correct: false },
            { text: "चालक के चारों ओर का माध्यम", correct: false },
            { text: "चालक पर आवेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धारिता (C = Q/V) किसी चालक का एक ज्यामितीय गुण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उसके आकार, आकृति और आसपास के माध्यम पर निर्भर करती है, लेकिन उस पर उपस्थित आवेश या विभव की मात्रा पर निर्भर नहीं करती।"
    },
    {
        question: "प्रश्न 23. जब हम किसी आवेशित चालक को पृथ्वी से जोड़ते हैं (अर्थिंग), तो चालक का विभव हो जाता है?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "पृथ्वी के बराबर (शून्य)", correct: true },
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की धारिता अनंत होने के कारण, उससे आवेश लेने या देने पर उसके विभव में कोई परिवर्तन नहीं होता, जिसे शून्य माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जुड़ने पर चालक का विभव भी शून्य हो जाता है।"
    },
    {
        question: "प्रश्न 24. वोल्टेज का सबसे छोटा मात्रक निम्नलिखित में से कौन सा है?",
        answers: shuffle([
            { text: "वोल्ट", correct: false },
            { text: "किलोवोल्ट", correct: false },
            { text: "मिलीवोल्ट", correct: false },
            { text: "माइक्रोवोल्ट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइक्रोवोल्ट (μV) एक वोल्ट का दस लाखवां (10⁻⁶) हिस्सा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो दिए गए विकल्पों में सबसे छोटा है।"
    },
    {
        question: "प्रश्न 25. एकसमान रूप से आवेशित पतले गोलीय कोश के कारण उसके बाहर स्थित बिंदु पर विभव का व्यवहार कैसा होता है?",
        answers: shuffle([
            { text: "जैसे सारा आवेश उसके केंद्र पर स्थित हो", correct: true },
            { text: "जैसे सारा आवेश उसकी सतह पर स्थित हो", correct: false },
            { text: "शून्य होता है", correct: false },
            { text: "नियत होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोलीय कोश के बाहर किसी भी बिंदु के लिए, विभव की गणना यह मानकर की जा सकती है कि कोश का संपूर्ण आवेश उसके केंद्र पर केंद्रित है।"
    },
    {
        question: "प्रश्न 26. विभवमापी का सिद्धांत क्या है?",
        answers: shuffle([
            { text: "किसी चालक का प्रतिरोध उसकी लंबाई के अनुक्रमानुपाती होता है", correct: false },
            { text: "एकरूप तार के सिरों पर विभवांतर उसमें प्रवाहित धारा के अनुक्रमानुपाती होता है", correct: false },
            { text: "किसी एकसमान तार में विभव पतन उसकी लंबाई के अनुक्रमानुपाती होता है", correct: true },
            { text: "किरचॉफ का धारा नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि एकसमान अनुप्रस्थ काट वाले तार में नियत धारा प्रवाहित हो, तो तार के किसी भी भाग के सिरों पर विभवांतर उस भाग की लंबाई के अनुक्रमानुपाती होता है।"
    },
    {
        question: "प्रश्न 27. किसी बिंदु पर विद्युत क्षेत्र की तीव्रता शून्य है, परंतु विभव शून्य नहीं है। इसका एक उदाहरण है?",
        answers: shuffle([
            { text: "एक बिंदु आवेश", correct: false },
            { text: "दो बराबर और विपरीत आवेशों के बीच मध्य बिंदु पर", correct: false },
            { text: "आवेशित खोखले गोले के अंदर", correct: true },
            { text: "दो बराबर और समान आवेशों के बीच मध्य बिंदु पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेशित खोखले गोले के अंदर विद्युत क्षेत्र शून्य होता है, लेकिन विभव हर जगह उतना ही होता है जितना सतह पर (जो अशून्य है)।"
    },
    {
        question: "प्रश्न 28. किसी बिंदु पर विभव शून्य है, परंतु विद्युत क्षेत्र की तीव्रता शून्य नहीं है। इसका एक उदाहरण है?",
        answers: shuffle([
            { text: "आवेशित खोखले गोले के अंदर", correct: false },
            { text: "दो बराबर और समान आवेशों के बीच मध्य बिंदु पर", correct: false },
            { text: "एक विद्युत द्विध्रुव की निरक्षीय रेखा पर", correct: true },
            { text: "एक बिंदु आवेश के कारण अनंत पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत द्विध्रुव की निरक्षीय रेखा पर किसी भी बिंदु पर विभव शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन दोनों आवेशों के कारण परिणामी विद्युत क्षेत्र शून्य नहीं होता है।"
    },
    {
        question: "प्रश्न 29. विभवांतर का मापन हमेशा किया जाता है?",
        answers: shuffle([
            { text: "एक बिंदु पर", correct: false },
            { text: "दो बिंदुओं के बीच", correct: true },
            { text: "पूरे परिपथ में", correct: false },
            { text: "किसी एक अवयव के अंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभवांतर, जैसा कि नाम से ही स्पष्ट है, हमेशा दो बिंदुओं के बीच विभव के अंतर को मापता है।<br><br><i class='fa-solid fa-angles-right icon'></i> निरपेक्ष विभव की कोई भौतिक सार्थकता नहीं है।"
    },
    {
        question: "प्रश्न 30. एक प्रोटॉन को दूसरे प्रोटॉन के समीप लाने पर निकाय की स्थितिज ऊर्जा...?",
        answers: shuffle([
            { text: "घटती है", correct: false },
            { text: "बढ़ती है", correct: true },
            { text: "अपरिवर्तित रहती है", correct: false },
            { text: "शून्य हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि दोनों प्रोटॉनों पर समान (धन) आवेश है, वे एक-दूसरे को प्रतिकर्षित करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें पास लाने के लिए प्रतिकर्षण बल के विरुद्ध कार्य करना पड़ता है, जो निकाय की स्थितिज ऊर्जा के रूप में संचित हो जाता है।"
    },
    {
        question: "प्रश्न 31. एक इलेक्ट्रॉन को एक प्रोटॉन के समीप लाने पर निकाय की स्थितिज ऊर्जा...?",
        answers: shuffle([
            { text: "घटती है", correct: true },
            { text: "बढ़ती है", correct: false },
            { text: "अपरिवर्तित रहती है", correct: false },
            { text: "अनंत हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इलेक्ट्रॉन और प्रोटॉन के बीच आकर्षण बल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब वे पास आते हैं, तो क्षेत्र स्वयं कार्य करता है, जिससे निकाय की स्थितिज ऊर्जा घटती है।"
    },
    {
        question: "प्रश्न 32. किसी परिपथ में दो बिंदुओं के बीच विभवांतर की गणना करने के लिए किस नियम का व्यापक रूप से उपयोग किया जाता है?",
        answers: shuffle([
            { text: "किरचॉफ का धारा नियम", correct: false },
            { text: "किरचॉफ का वोल्टता नियम", correct: true },
            { text: "ओम का नियम", correct: false },
            { text: "फैराडे का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किरचॉफ का वोल्टता नियम (या लूप नियम) जटिल परिपथों में किन्हीं भी दो बिंदुओं के बीच विभवांतर की गणना के लिए एक मौलिक उपकरण है।"
    },
    {
        question: "प्रश्न 33. स्थिर वैद्युत परिरक्षण (Electrostatic Shielding) की घटना का आधार क्या है?",
        answers: shuffle([
            { text: "चालक के अंदर विभव शून्य होता है", correct: false },
            { text: "चालक के अंदर विद्युत क्षेत्र शून्य होता है", correct: true },
            { text: "चालक का प्रतिरोध अनंत होता है", correct: false },
            { text: "चालक आवेश उत्पन्न करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी चालक खोल के अंदर विद्युत क्षेत्र शून्य होने के कारण, उसके अंदर का स्थान बाहरी विद्युत क्षेत्रों से परिरक्षित या सुरक्षित रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी का उपयोग संवेदनशील उपकरणों को बचाने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 34. एक आवेश q को त्रिज्या R के वृत्त पर एक चक्कर घुमाने में कितना कार्य करना होगा, यदि वृत्त के केंद्र पर एक अन्य आवेश Q रखा हो?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "शून्य", correct: true },
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्र पर रखे आवेश Q के कारण वृत्त की परिधि एक समविभव पृष्ठ होगी।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि प्रारंभिक और अंतिम बिंदु समान हैं (एक चक्कर के बाद), विस्थापन शून्य है और विभवांतर भी शून्य है, अतः किया गया कार्य शून्य होगा।"
    },
    {
        question: "प्रश्न 35. किसी चालक का विभव बढ़ाने पर उसकी सतह पर आवेश घनत्व...?",
        answers: shuffle([
            { text: "घटता है", correct: false },
            { text: "बढ़ता है", correct: true },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "पहले घटता है फिर बढ़ता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि चालक पर आवेश (Q) उसके विभव (V) के अनुक्रमानुपाती होता है, विभव बढ़ाने का अर्थ है कि उस पर आवेश बढ़ रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> आवेश बढ़ने से सतह पर आवेश घनत्व भी बढ़ता है।"
    },
    {
        question: "प्रश्न 36. यदि n छोटी बूंदों, जिनमें प्रत्येक का विभव V है, को मिलाकर एक बड़ी बूंद बनाई जाए, तो बड़ी बूंद का विभव कितना होगा?",
        answers: shuffle([
            { text: "nV", correct: false },
            { text: "V/n", correct: false },
            { text: "n^(2/3)V", correct: true },
            { text: "n^(1/3)V", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़ी बूंद का आवेश nq और त्रिज्या n^(1/3)r होगी।<br><br><i class='fa-solid fa-angles-right icon'></i> बड़ी बूंद का विभव V' = k(nq) / (n^(1/3)r) = n^(2/3) * (kq/r) = n^(2/3)V होगा।"
    },
    {
        question: "प्रश्न 37. किसी चालक के लिए, उसके विभव (V) और उस पर आवेश (Q) के बीच का ग्राफ कैसा होता है?",
        answers: shuffle([
            { text: "परवलय", correct: false },
            { text: "अतिपरवलय", correct: false },
            { text: "मूल बिंदु से गुजरने वाली सीधी रेखा", correct: true },
            { text: "वृत्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि Q ∝ V या Q = CV होता है, इसलिए Q और V के बीच का ग्राफ एक सीधी रेखा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका ढलान चालक की धारिता (C) को दर्शाता है।"
    },
    {
        question: "प्रश्न 38. कौन सा उपकरण प्रत्यावर्ती विभव (AC Voltage) को बढ़ा या घटा सकता है?",
        answers: shuffle([
            { text: "दिष्टकारी (Rectifier)", correct: false },
            { text: "इन्वर्टर", correct: false },
            { text: "ट्रांसफॉर्मर", correct: true },
            { text: "मोटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रांसफॉर्मर अन्योन्य प्रेरण के सिद्धांत पर कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और इसका उपयोग केवल प्रत्यावर्ती विभव को बढ़ाने (अपचायी) या घटाने (उच्चायी) के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 39. जेनर डायोड का उपयोग मुख्य रूप से किस रूप में होता है?",
        answers: shuffle([
            { text: "प्रवर्धक", correct: false },
            { text: "दिष्टकारी", correct: false },
            { text: "दोलित्र", correct: false },
            { text: "वोल्टेज नियंत्रक (नियामक)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जेनर डायोड को पश्च अभिनति में भंजन क्षेत्र में संचालित करने पर यह अपने सिरों पर एक लगभग नियत विभवांतर बनाए रखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस गुण का उपयोग वोल्टेज को नियंत्रित करने में किया जाता है।"
    },
    {
        question: "प्रश्न 40. किसी बैटरी का 'टर्मिनल' क्या इंगित करता है?",
        answers: shuffle([
            { text: "बैटरी का कुल आवेश", correct: false },
            { text: "बैटरी का कुल प्रतिरोध", correct: false },
            { text: "वे बिंदु जहाँ विभवांतर उपलब्ध होता है", correct: true },
            { text: "बैटरी की कुल ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैटरी के टर्मिनल (धनात्मक और ऋणात्मक) वे बाहरी संयोजन बिंदु होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँ से परिपथ को जोड़ने के लिए विभवांतर प्राप्त किया जाता है।"
    },
    {
        question: "प्रश्न 41. बिजली के उपकरणों पर अंकित वोल्टेज रेटिंग क्या दर्शाती है?",
        answers: shuffle([
            { text: "वह अधिकतम वोल्टेज जिस पर वह काम कर सकता है", correct: false },
            { text: "वह न्यूनतम वोल्टेज जिस पर वह काम करता है", correct: false },
            { text: "वह प्रचालन वोल्टेज जिस पर वह सबसे अच्छी दक्षता देता है", correct: true },
            { text: "वह वोल्टेज जो वह उत्पन्न करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्टेज रेटिंग वह विभवांतर है जिस पर उपकरण को सुरक्षित और कुशलतापूर्वक संचालित करने के लिए डिज़ाइन किया गया है।"
    },
    {
        question: "प्रश्न 42. 'ग्राउंडिंग' या 'अर्थिंग' का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "परिपथ को पूरा करना", correct: false },
            { text: "एक शून्य विभव संदर्भ बिंदु प्रदान करना", correct: true },
            { text: "वोल्टेज को बढ़ाना", correct: false },
            { text: "धारा को कम करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्थिंग का उपयोग सुरक्षा के लिए और परिपथों में एक स्थिर, शून्य विभव वाले संदर्भ बिंदु (Reference Point) प्रदान करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 43. किसी चालक में मुक्त इलेक्ट्रॉनों का प्रवाह तब होता है जब उसके सिरों पर...?",
        answers: shuffle([
            { text: "तापमान का अंतर हो", correct: false },
            { text: "दाब का अंतर हो", correct: false },
            { text: "विभव का अंतर हो", correct: true },
            { text: "घनत्व का अंतर हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इलेक्ट्रॉनों (ऋणावेश) पर विद्युत क्षेत्र के कारण बल लगता है, और विद्युत क्षेत्र विभवांतर के कारण उत्पन्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः विभवांतर ही इलेक्ट्रॉनों को प्रवाहित होने के लिए प्रेरित करता है।"
    },
    {
        question: "प्रश्न 44. एक इलेक्ट्रॉन को 10 वोल्ट के विभवांतर से त्वरित करने पर उसकी गतिज ऊर्जा में कितनी वृद्धि होगी?",
        answers: shuffle([
            { text: "10 जूल", correct: false },
            { text: "10 अर्ग", correct: false },
            { text: "10 इलेक्ट्रॉन-वोल्ट", correct: true },
            { text: "10 वाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा में वृद्धि = qV = (1e) × (10 V) = 10 eV।"
    },
    {
        question: "प्रश्न 45. एक आवेशित कण को एकसमान विद्युत क्षेत्र में विरामावस्था से छोड़ा जाता है। कण की गति कैसी होगी?",
        answers: shuffle([
            { text: "एकरूप वेग से सरल रेखीय गति", correct: false },
            { text: "एकरूप त्वरण से सरल रेखीय गति", correct: true },
            { text: "परिवर्ती त्वरण से सरल रेखीय गति", correct: false },
            { text: "वृत्तीय गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान विद्युत क्षेत्र में कण पर एक नियत बल (F=qE) लगता है, जिससे उसमें एक नियत त्वरण (a=F/m) उत्पन्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः वह सरल रेखा में एकसमान त्वरित गति करेगा, जिससे उसका विभव लगातार बदलेगा।"
    },
    {
        question: "प्रश्न 46. हमारे घरों में विद्युत ऊर्जा मीटर (बिजली का मीटर) क्या रिकॉर्ड करता है?",
        answers: shuffle([
            { text: "औसत धारा", correct: false },
            { text: "औसत वोल्टेज", correct: false },
            { text: "कुल आवेश", correct: false },
            { text: "ऊर्जा की खपत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीटर किलोवाट-घंटा (यूनिट) में ऊर्जा की खपत को मापता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो शक्ति (धारा × विभवांतर) और समय का गुणनफल है।"
    },
    {
        question: "प्रश्न 47. किसी विद्युत परिपथ में 'लघु परिपथन' (शॉर्ट सर्किट) होने पर दो बिंदुओं के बीच विभवांतर हो जाता है?",
        answers: shuffle([
            { text: "बहुत अधिक", correct: false },
            { text: "अपरिवर्तित", correct: false },
            { text: "लगभग शून्य", correct: true },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शॉर्ट सर्किट में दो बिंदुओं के बीच का प्रतिरोध लगभग शून्य हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओम के नियम (V=IR) के अनुसार, शून्य प्रतिरोध वाले पथ के सिरों पर विभवांतर भी लगभग शून्य होता है।"
    },
    {
        question: "प्रश्न 48. जब बादल गरजते हैं, तो बादलों और पृथ्वी के बीच क्या स्थापित होता है?",
        answers: shuffle([
            { text: "उच्च तापमान", correct: false },
            { text: "उच्च दाब", correct: false },
            { text: "उच्च विभवांतर", correct: true },
            { text: "उच्च आर्द्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण के कारण बादलों पर आवेश जमा हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे बादलों और पृथ्वी के बीच एक बहुत बड़ा विभवांतर स्थापित हो जाता है, जो बिजली के रूप में विसर्जित होता है।"
    },
    {
        question: "प्रश्न 49. किसी चालक के अंदर विभव के नियत रहने का क्या कारण है?",
        answers: shuffle([
            { text: "चालक के अंदर आवेश की अनुपस्थिति", correct: false },
            { text: "चालक के अंदर मुक्त इलेक्ट्रॉनों की उपस्थिति", correct: false },
            { text: "चालक के अंदर विद्युत क्षेत्र का शून्य होना", correct: true },
            { text: "चालक का आकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि चालक के अंदर कोई विद्युत क्षेत्र नहीं होता है, इसलिए आवेश को अंदर एक बिंदु से दूसरे बिंदु तक ले जाने में कोई कार्य नहीं करना पड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः विभव नियत रहता है।"
    },
    {
        question: "प्रश्न 50. एक वोल्टमीटर को एमीटर की तरह उपयोग करने के लिए क्या करना होगा?",
        answers: shuffle([
            { text: "इसके श्रेणीक्रम में उच्च प्रतिरोध जोड़ना होगा", correct: false },
            { text: "इसके समांतर क्रम में निम्न प्रतिरोध (शंट) जोड़ना होगा", correct: false },
            { text: "इसके श्रेणीक्रम में निम्न प्रतिरोध जोड़ना होगा", correct: false },
            { text: "ऐसा नहीं किया जा सकता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्टमीटर का आंतरिक प्रतिरोध बहुत अधिक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे एमीटर (जिसका प्रतिरोध बहुत कम होना चाहिए) में बदलना अव्यावहारिक और लगभग असंभव है।"
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