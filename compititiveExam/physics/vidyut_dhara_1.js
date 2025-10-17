const questions = [
    {
        topHeading: "विद्युत धारा पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. विद्युत आवेश की SI इकाई क्या है?",
        answers: shuffle([
            { text: "वोल्ट", correct: false },
            { text: "कूलॉम", correct: true },
            { text: "एम्पीयर", correct: false },
            { text: "ओम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत आवेश का SI मात्रक कूलॉम (Coulomb) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक कूलॉम आवेश लगभग 6.24 x 10¹⁸ इलेक्ट्रॉनों पर स्थित आवेश के बराबर होता है"
    },
    {
        question: "प्रश्न 2. विद्युत धारा को मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "वोल्टमीटर", correct: false },
            { text: "गैल्वेनोमीटर", correct: false },
            { text: "एमीटर", correct: true },
            { text: "पोटेंशियोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एमीटर एक ऐसा उपकरण है जिसका उपयोग किसी परिपथ (सर्किट) में बहने वाली विद्युत धारा को मापने के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे हमेशा परिपथ में श्रेणीक्रम में जोड़ा जाता है"
    },
    {
        question: "प्रश्न 3. किसी चालक में विद्युत धारा का प्रवाह किसके कारण होता है?",
        answers: shuffle([
            { text: "प्रोटॉन", correct: false },
            { text: "न्यूट्रॉन", correct: false },
            { text: "मुक्त इलेक्ट्रॉन", correct: true },
            { text: "पॉज़िट्रॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धातुओं जैसे चालकों में, विद्युत धारा का प्रवाह मुख्य रूप से मुक्त इलेक्ट्रॉनों (free electrons) की गति के कारण होता है"
    },
    {
        question: "प्रश्न 4. विभवांतर (Potential Difference) की SI इकाई क्या है?",
        answers: shuffle([
            { text: "वाट", correct: false },
            { text: "जूल", correct: false },
            { text: "वोल्ट", correct: true },
            { text: "फैरड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभवांतर, जिसे वोल्टेज भी कहा जाता है, का SI मात्रक वोल्ट (Volt) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी परिपथ में दो बिंदुओं के बीच विद्युत विभव के अंतर को मापता है"
    },
    {
        question: "प्रश्न 5. ओम का नियम (Ohm's Law) किसे परिभाषित करता है?",
        answers: shuffle([
            { text: "केवल धारा को", correct: false },
            { text: "केवल प्रतिरोध को", correct: false },
            { text: "केवल वोल्टता को", correct: false },
            { text: "धारा और वोल्टता दोनों को", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम का नियम बताता है कि यदि भौतिक अवस्थाएँ (जैसे ताप) स्थिर रहें, तो किसी चालक के सिरों पर लगाया गया विभवांतर उसमें प्रवाहित होने वाली धारा के अनुक्रमानुपाती होता है (V ∝ I)"
    },
    {
        question: "प्रश्न 6. प्रतिरोध (Resistance) का SI मात्रक क्या है?",
        answers: shuffle([
            { text: "ओम", correct: true },
            { text: "सीमेन्स", correct: false },
            { text: "हेनरी", correct: false },
            { text: "वेबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत प्रतिरोध का SI मात्रक ओम (Ohm) है, जिसे ग्रीक अक्षर ओमेगा (Ω) से दर्शाया जाता है"
    },
    {
        question: "प्रश्न 7. किसी तार का प्रतिरोध किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "तार की लंबाई", correct: false },
            { text: "तार का अनुप्रस्थ काट का क्षेत्रफल", correct: false },
            { text: "तार का पदार्थ", correct: false },
            { text: "तार में प्रवाहित धारा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी तार का प्रतिरोध उसकी लंबाई, अनुप्रस्थ काट के क्षेत्रफल और पदार्थ की प्रकृति (प्रतिरोधकता) पर निर्भर करता है, लेकिन उसमें बहने वाली धारा की मात्रा पर नहीं"
    },
    {
        question: "प्रश्न 8. प्रतिरोधकता (Resistivity) का SI मात्रक क्या है?",
        answers: shuffle([
            { text: "ओम-मीटर", correct: true },
            { text: "ओम/मीटर", correct: false },
            { text: "मीटर/ओम", correct: false },
            { text: "ओम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता किसी पदार्थ का एक आंतरिक गुण है और इसका SI मात्रक ओम-मीटर (Ω·m) होता है"
    },
    {
        question: "प्रश्न 9. निम्नलिखित में से कौन सबसे अच्छा विद्युत चालक है?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: false },
            { text: "एल्यूमीनियम", correct: false },
            { text: "चांदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चांदी सभी धातुओं में सबसे अच्छी विद्युत चालक है, लेकिन महंगी होने के कारण आमतौर पर तांबे और एल्यूमीनियम का उपयोग किया जाता है"
    },
    {
        question: "प्रश्न 10. अतिचालक (Superconductor) वह पदार्थ है जिसमें...",
        answers: shuffle([
            { text: "बहुत अधिक प्रतिरोध होता है", correct: false },
            { text: "शून्य प्रतिरोध होता है", correct: true },
            { text: "ऋणात्मक प्रतिरोध होता है", correct: false },
            { text: "धारा प्रवाहित नहीं होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अतिचालक ऐसे पदार्थ होते हैं जिन्हें एक निश्चित क्रांतिक ताप से नीचे ठंडा करने पर उनका विद्युत प्रतिरोध शून्य हो जाता है"
    },
    {
        question: "प्रश्न 11. घरों में विद्युत उपकरण किस क्रम में जोड़े जाते हैं?",
        answers: shuffle([
            { text: "श्रेणीक्रम (Series)", correct: false },
            { text: "समांतर क्रम (Parallel)", correct: true },
            { text: "मिश्रित क्रम (Mixed)", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घरों में सभी उपकरण समांतर क्रम में जोड़े जाते हैं ताकि प्रत्येक उपकरण को समान वोल्टेज मिल सके और किसी एक उपकरण के खराब होने पर बाकी काम करते रहें"
    },
    {
        question: "प्रश्न 12. विद्युत बल्ब का फिलामेंट किस धातु का बना होता है?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "टंगस्टन", correct: true },
            { text: "नाइक्रोम", correct: false },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टंगस्टन का गलनांक बहुत उच्च (लगभग 3422 डिग्री सेल्सियस) होता है, जिसके कारण यह बिना पिघले उच्च तापमान पर प्रकाश उत्पन्न कर सकता है"
    },
    {
        question: "प्रश्न 13. विद्युत हीटर की कुंडली (coil) किस पदार्थ की बनी होती है?",
        answers: shuffle([
            { text: "टंगस्टन", correct: false },
            { text: "नाइक्रोम", correct: true },
            { text: "तांबा", correct: false },
            { text: "चांदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइक्रोम (निकल और क्रोमियम की मिश्रधातु) का प्रतिरोध उच्च और गलनांक भी उच्च होता है, जो इसे तापन उपकरणों के लिए आदर्श बनाता है"
    },
    {
        question: "प्रश्न 14. विद्युत धारा के ऊष्मीय प्रभाव (Heating Effect) पर आधारित उपकरण कौन सा नहीं है?",
        answers: shuffle([
            { text: "विद्युत प्रेस", correct: false },
            { text: "विद्युत केतली", correct: false },
            { text: "विद्युत पंखा", correct: true },
            { text: "विद्युत हीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत पंखा विद्युत धारा के चुंबकीय प्रभाव पर कार्य करता है, जबकि अन्य सभी उपकरण ऊष्मीय प्रभाव पर आधारित हैं"
    },
    {
        question: "प्रश्न 15. विद्युत शक्ति (Electric Power) का SI मात्रक क्या है?",
        answers: shuffle([
            { text: "जूल", correct: false },
            { text: "वाट", correct: true },
            { text: "न्यूटन", correct: false },
            { text: "पास्कल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत शक्ति का SI मात्रक वाट (Watt) है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक वाट, एक जूल प्रति सेकंड के बराबर होता है"
    },
    {
        question: "प्रश्न 16. फ्यूज तार किस सिद्धांत पर कार्य करता है?",
        answers: shuffle([
            { text: "विद्युत धारा का रासायनिक प्रभाव", correct: false },
            { text: "विद्युत धारा का चुंबकीय प्रभाव", correct: false },
            { text: "विद्युत धारा का ऊष्मीय प्रभाव", correct: true },
            { text: "विद्युत धारा का गैस आयनीकरण प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्यूज तार विद्युत धारा के ऊष्मीय प्रभाव पर कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब धारा एक निश्चित मान से अधिक हो जाती है, तो यह गर्म होकर पिघल जाता है और परिपथ को तोड़ देता है"
    },
    {
        question: "प्रश्न 17. एक अच्छे फ्यूज तार में क्या गुण होना चाहिए?",
        answers: shuffle([
            { text: "उच्च प्रतिरोध और उच्च गलनांक", correct: false },
            { text: "निम्न प्रतिरोध और उच्च गलनांक", correct: false },
            { text: "उच्च प्रतिरोध और निम्न गलनांक", correct: true },
            { text: "निम्न प्रतिरोध और निम्न गलनांक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्यूज तार का प्रतिरोध उच्च होना चाहिए ताकि वह जल्दी गर्म हो और गलनांक निम्न होना चाहिए ताकि वह सुरक्षित धारा सीमा पार होते ही पिघल जाए।<br><br><i class='fa-solid fa-angles-right icon'></i> (आमतौर पर यह टिन और लेड की मिश्रधातु का बना होता है)"
    },
    {
        question: "प्रश्न 18. प्रत्यावर्ती धारा (AC) को दिष्ट धारा (DC) में बदलने वाले उपकरण को क्या कहते हैं?",
        answers: shuffle([
            { text: "इन्वर्टर", correct: false },
            { text: "दिष्टकारी (Rectifier)", correct: true },
            { text: "ट्रांसफॉर्मर", correct: false },
            { text: "मोटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिष्टकारी या रेक्टिफायर एक ऐसा उपकरण है जो प्रत्यावर्ती धारा (AC) को दिष्ट धारा (DC) में परिवर्तित करता है"
    },
    {
        question: "प्रश्न 19. दिष्ट धारा (DC) को प्रत्यावर्ती धारा (AC) में बदलने वाले उपकरण को क्या कहते हैं?",
        answers: shuffle([
            { text: "इन्वर्टर", correct: true },
            { text: "दिष्टकारी", correct: false },
            { text: "डायनेमो", correct: false },
            { text: "ट्रांसफॉर्मर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन्वर्टर एक इलेक्ट्रॉनिक उपकरण है जो दिष्ट धारा (DC) को प्रत्यावर्ती धारा (AC) में परिवर्तित करता है"
    },
    {
        question: "प्रश्न 20. ट्रांसफॉर्मर (Transformer) का उपयोग किस लिए किया जाता है?",
        answers: shuffle([
            { text: "AC को DC में बदलने के लिए", correct: false },
            { text: "DC को AC में बदलने के लिए", correct: false },
            { text: "AC वोल्टेज को बढ़ाने या घटाने के लिए", correct: true },
            { text: "DC वोल्टेज को बढ़ाने या घटाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रांसफॉर्मर का उपयोग केवल प्रत्यावर्ती धारा (AC) के वोल्टेज को बढ़ाने (स्टेप-अप) या घटाने (स्टेप-डाउन) के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह DC पर काम नहीं करता है"
    },
    {
        question: "प्रश्न 21. भारत में घरों में आपूर्ति की जाने वाली AC की आवृत्ति (Frequency) कितनी होती है?",
        answers: shuffle([
            { text: "60 हर्ट्ज", correct: false },
            { text: "50 हर्ट्ज", correct: true },
            { text: "100 हर्ट्ज", correct: false },
            { text: "0 हर्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत सहित दुनिया के कई देशों में घरेलू उपयोग के लिए AC बिजली की मानक आवृत्ति 50 हर्ट्ज होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मतलब है कि धारा एक सेकंड में 50 बार अपनी दिशा बदलती है"
    },
    {
        question: "प्रश्न 22. विद्युत मोटर (Electric Motor) ऊर्जा को कैसे रूपांतरित करती है?",
        answers: shuffle([
            { text: "यांत्रिक ऊर्जा को विद्युत ऊर्जा में", correct: false },
            { text: "विद्युत ऊर्जा को यांत्रिक ऊर्जा में", correct: true },
            { text: "विद्युत ऊर्जा को ऊष्मा ऊर्जा में", correct: false },
            { text: "यांत्रिक ऊर्जा को ऊष्मा ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत मोटर एक ऐसा उपकरण है जो विद्युत ऊर्जा को यांत्रिक ऊर्जा में परिवर्तित करता है, जिससे घूर्णन गति उत्पन्न होती है"
    },
    {
        question: "प्रश्न 23. डायनेमो या जनरेटर (Dynamo/Generator) ऊर्जा को कैसे रूपांतरित करता है?",
        answers: shuffle([
            { text: "विद्युत ऊर्जा को यांत्रिक ऊर्जा में", correct: false },
            { text: "यांत्रिक ऊर्जा को विद्युत ऊर्जा में", correct: true },
            { text: "ऊष्मा ऊर्जा को विद्युत ऊर्जा में", correct: false },
            { text: "रासायनिक ऊर्जा को विद्युत ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायनेमो (या जनरेटर) एक ऐसा उपकरण है जो यांत्रिक ऊर्जा (घूर्णन) को विद्युत ऊर्जा में परिवर्तित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विद्युत चुंबकीय प्रेरण के सिद्धांत पर कार्य करता है"
    },
    {
        question: "प्रश्न 24. एक आदर्श वोल्टमीटर का प्रतिरोध कितना होना चाहिए?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "बहुत कम", correct: false },
            { text: "बहुत अधिक", correct: false },
            { text: "अनंत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श वोल्टमीटर का प्रतिरोध अनंत होना चाहिए ताकि वह परिपथ से कोई धारा न ले और दो बिंदुओं के बीच सटीक विभवांतर माप सके"
    },
    {
        question: "प्रश्न 25. एक आदर्श एमीटर का प्रतिरोध कितना होना चाहिए?",
        answers: shuffle([
            { text: "शून्य", correct: true },
            { text: "बहुत कम", correct: false },
            { text: "बहुत अधिक", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श एमीटर का प्रतिरोध शून्य होना चाहिए ताकि वह परिपथ में जुड़ने पर परिपथ के कुल प्रतिरोध को प्रभावित न करे और धारा का सटीक मान दे सके"
    },
    {
        question: "प्रश्न 26. विद्युत धारा का चुंबकीय प्रभाव (Magnetic Effect) किसने खोजा था?",
        answers: shuffle([
            { text: "माइकल फैराडे", correct: false },
            { text: "हैंस क्रिश्चियन ओर्स्टेड", correct: true },
            { text: "आंद्रे-मैरी एम्पीयर", correct: false },
            { text: "जेम्स क्लर्क मैक्सवेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हैंस क्रिश्चियन ओर्स्टेड ने 1820 में यह खोज की थी कि जब किसी तार में विद्युत धारा प्रवाहित होती है, तो उसके चारों ओर एक चुंबकीय क्षेत्र उत्पन्न हो जाता है"
    },
    {
        question: "प्रश्न 27. विद्युत-चुंबकीय प्रेरण (Electromagnetic Induction) का सिद्धांत किसने दिया?",
        answers: shuffle([
            { text: "ओर्स्टेड", correct: false },
            { text: "मैक्सवेल", correct: false },
            { text: "माइकल फैराडे", correct: true },
            { text: "न्यूटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइकल फैराडे ने विद्युत-चुंबकीय प्रेरण का सिद्धांत दिया, जिसके अनुसार बदलते चुंबकीय क्षेत्र से विद्युत धारा उत्पन्न की जा सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी सिद्धांत पर जनरेटर काम करता है"
    },
    {
        question: "प्रश्न 28. शुष्क सेल (Dry Cell) में कौन सी ऊर्जा विद्युत ऊर्जा में परिवर्तित होती है?",
        answers: shuffle([
            { text: "रासायनिक ऊर्जा", correct: true },
            { text: "ऊष्मा ऊर्जा", correct: false },
            { text: "यांत्रिक ऊर्जा", correct: false },
            { text: "नाभिकीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुष्क सेल, जैसे कि बैटरी, में संचित रासायनिक ऊर्जा को रासायनिक अभिक्रियाओं द्वारा विद्युत ऊर्जा में बदला जाता है"
    },
    {
        question: "प्रश्न 29. तड़ित चालक (Lightning Conductor) बनाने के लिए किस धातु का प्रयोग किया जाता है?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "एल्यूमीनियम", correct: false },
            { text: "तांबा", correct: true },
            { text: "इस्पात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तांबा एक बहुत अच्छा सुचालक है और संक्षारण प्रतिरोधी होता है, इसलिए इसका उपयोग ऊंची इमारतों को बिजली (तड़ित) से बचाने के लिए तड़ित चालक बनाने में किया जाता है"
    },
    {
        question: "प्रश्न 30. किरचॉफ का प्रथम नियम (धारा नियम) किस संरक्षण नियम पर आधारित है?",
        answers: shuffle([
            { text: "ऊर्जा संरक्षण", correct: false },
            { text: "संवेग संरक्षण", correct: false },
            { text: "आवेश संरक्षण", correct: true },
            { text: "द्रव्यमान संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किरचॉफ का प्रथम नियम (जंक्शन नियम) बताता है कि किसी भी जंक्शन पर आने वाली धाराओं का योग जाने वाली धाराओं के योग के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आवेश संरक्षण के सिद्धांत पर आधारित है"
    },
    {
        question: "प्रश्न 31. किरचॉफ का द्वितीय नियम (वोल्टता नियम) किस संरक्षण नियम पर आधारित है?",
        answers: shuffle([
            { text: "ऊर्जा संरक्षण", correct: true },
            { text: "आवेश संरक्षण", correct: false },
            { text: "संवेग संरक्षण", correct: false },
            { text: "कोणीय संवेग संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किरचॉफ का द्वितीय नियम (लूप नियम) बताता है कि किसी भी बंद लूप में सभी विभवांतरों का बीजगणितीय योग शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा संरक्षण के सिद्धांत पर आधारित है"
    },
    {
        question: "प्रश्न 32. अर्धचालक (Semiconductor) पदार्थ का उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "सिलिकॉन", correct: true },
            { text: "कांच", correct: false },
            { text: "रबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिलिकॉन और जर्मेनियम सबसे आम अर्धचालक पदार्थ हैं, जिनकी चालकता चालक और कुचालक के बीच होती है"
    },
    {
        question: "प्रश्न 33. तापमान बढ़ाने पर किसी धातु चालक का प्रतिरोध...?",
        answers: shuffle([
            { text: "घटता है", correct: false },
            { text: "बढ़ता है", correct: true },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "पहले बढ़ता है फिर घटता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तापमान बढ़ाने पर धातु के परमाणुओं का कंपन बढ़ जाता है, जिससे इलेक्ट्रॉनों के प्रवाह में अधिक बाधा उत्पन्न होती है और प्रतिरोध बढ़ जाता है"
    },
    {
        question: "प्रश्न 34. तापमान बढ़ाने पर किसी अर्धचालक का प्रतिरोध...?",
        answers: shuffle([
            { text: "घटता है", correct: true },
            { text: "बढ़ता है", correct: false },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "शून्य हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तापमान बढ़ाने पर अर्धचालकों में अधिक आवेश वाहक (इलेक्ट्रॉन और होल) उत्पन्न होते हैं, जिससे उनकी चालकता बढ़ती है और प्रतिरोध घटता है"
    },
    {
        question: "प्रश्न 35. मानव शरीर का प्रतिरोध लगभग कितना होता है (जब शरीर सूखा हो)?",
        answers: shuffle([
            { text: "10 ओम", correct: false },
            { text: "1000 ओम", correct: false },
            { text: "1 लाख ओम", correct: true },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूखे मानव शरीर का प्रतिरोध बहुत अधिक होता है, लगभग 1,00,000 ओम।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, त्वचा के गीले होने पर यह बहुत कम (लगभग 1000 ओम) हो जाता है"
    },
    {
        question: "प्रश्न 36. विद्युत अपघटन (Electrolysis) में, कैथोड पर कौन सी प्रक्रिया होती है?",
        answers: shuffle([
            { text: "ऑक्सीकरण (Oxidation)", correct: false },
            { text: "अपचयन (Reduction)", correct: true },
            { text: "विघटन", correct: false },
            { text: "संयोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत अपघटन में कैथोड (ऋणात्मक इलेक्ट्रोड) पर धनायन (cations) इलेक्ट्रॉन ग्रहण करते हैं, इस प्रक्रिया को अपचयन कहते हैं"
    },
    {
        question: "प्रश्न 37. गैल्वेनोमीटर को वोल्टमीटर में बदलने के लिए क्या किया जाता है?",
        answers: shuffle([
            { text: "इसके समांतर क्रम में एक निम्न प्रतिरोध जोड़ा जाता है", correct: false },
            { text: "इसके श्रेणीक्रम में एक उच्च प्रतिरोध जोड़ा जाता है", correct: true },
            { text: "इसके समांतर क्रम में एक उच्च प्रतिरोध जोड़ा जाता है", correct: false },
            { text: "इसके श्रेणीक्रम में एक निम्न प्रतिरोध जोड़ा जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैल्वेनोमीटर की कुंडली के साथ श्रेणीक्रम में एक बहुत उच्च मान का प्रतिरोध जोड़कर इसे वोल्टमीटर में परिवर्तित किया जाता है"
    },
    {
        question: "प्रश्न 38. गैल्वेनोमीटर को एमीटर में बदलने के लिए क्या किया जाता है?",
        answers: shuffle([
            { text: "इसके समांतर क्रम में एक निम्न प्रतिरोध (शंट) जोड़ा जाता है", correct: true },
            { text: "इसके श्रेणीक्रम में एक उच्च प्रतिरोध जोड़ा जाता है", correct: false },
            { text: "इसके समांतर क्रम में एक उच्च प्रतिरोध जोड़ा जाता है", correct: false },
            { text: "इसके श्रेणीक्रम में एक निम्न प्रतिरोध जोड़ा जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैल्वेनोमीटर की कुंडली के साथ समांतर क्रम में एक बहुत कम मान का प्रतिरोध (जिसे शंट कहते हैं) जोड़कर इसे एमीटर में परिवर्तित किया जाता है"
    },
    {
        question: "प्रश्न 39. एक बंद परिपथ में, यदि वोल्टेज को दोगुना और प्रतिरोध को आधा कर दिया जाए, तो धारा...?",
        answers: shuffle([
            { text: "आधी हो जाएगी", correct: false },
            { text: "दोगुनी हो जाएगी", correct: false },
            { text: "चार गुनी हो जाएगी", correct: true },
            { text: "अपरिवर्तित रहेगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम (I = V/R) के अनुसार, यदि V को 2V और R को R/2 कर दिया जाए, तो नई धारा I' = (2V) / (R/2) = 4(V/R) = 4I, अर्थात चार गुनी हो जाएगी"
    },
    {
        question: "प्रश्न 40. बिजली के बल्ब के अंदर कौन सी गैस भरी जाती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "हाइड्रोजन", correct: false },
            { text: "नाइट्रोजन या आर्गन", correct: true },
            { text: "कार्बन डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल्ब के अंदर नाइट्रोजन या आर्गन जैसी अक्रिय गैसें भरी जाती हैं ताकि उच्च तापमान पर फिलामेंट का ऑक्सीकरण न हो और वह वाष्पीकृत होकर जल्दी खराब न हो"
    },
    {
        question: "प्रश्न 41. विद्युत धारा की दिशा पारंपरिक रूप से मानी जाती है?",
        answers: shuffle([
            { text: "इलेक्ट्रॉन प्रवाह की दिशा में", correct: false },
            { text: "इलेक्ट्रॉन प्रवाह की विपरीत दिशा में", correct: true },
            { text: "प्रोटॉन प्रवाह की दिशा में", correct: false },
            { text: "न्यूट्रॉन प्रवाह की दिशा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारंपरिक रूप से, विद्युत धारा की दिशा धन आवेश के प्रवाह की दिशा (या इलेक्ट्रॉन के प्रवाह की विपरीत दिशा) में मानी जाती है"
    },
    {
        question: "प्रश्न 42. सीएफएल (CFL) का पूर्ण रूप क्या है?",
        answers: shuffle([
            { text: "कॉम्पैक्ट फ्लोरोसेंट लैंप", correct: true },
            { text: "सेंट्रली फिक्स्ड लैंप", correct: false },
            { text: "केमिकल फ्लोरोसेंट लैंप", correct: false },
            { text: "कंडेंस्ड फ्लोरोसेंट लैंप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CFL का पूरा नाम कॉम्पैक्ट फ्लोरोसेंट लैंप (Compact Fluorescent Lamp) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तापदीप्त बल्बों की तुलना में अधिक ऊर्जा कुशल होता है"
    },
    {
        question: "प्रश्न 43. एलईडी (LED) का पूर्ण रूप क्या है?",
        answers: shuffle([
            { text: "लाइट एमिटिंग डायोड", correct: true },
            { text: "लो एनर्जी डिस्प्ले", correct: false },
            { text: "लाइट एनर्जी डिवाइस", correct: false },
            { text: "लाइट एम्प्लीफाइंग डायोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> LED का पूरा नाम लाइट एमिटिंग डायोड (Light Emitting Diode) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह CFL से भी अधिक ऊर्जा कुशल होता है"
    },
    {
        question: "प्रश्न 44. विद्युत चुंबक (Electromagnet) बनाने के लिए सबसे उपयुक्त धातु कौन सी है?",
        answers: shuffle([
            { text: "कठोर इस्पात", correct: false },
            { text: "नरम लोहा", correct: true },
            { text: "तांबा", correct: false },
            { text: "एल्यूमीनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरम लोहे को आसानी से चुंबकित और विचुंबकित किया जा सकता है, इसलिए यह अस्थायी चुंबक या विद्युत चुंबक बनाने के लिए सबसे उपयुक्त होता है"
    },
    {
        question: "प्रश्न 45. स्थायी चुंबक (Permanent Magnet) बनाने के लिए सबसे उपयुक्त धातु कौन सी है?",
        answers: shuffle([
            { text: "कठोर इस्पात", correct: true },
            { text: "नरम लोहा", correct: false },
            { text: "पीतल", correct: false },
            { text: "चांदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कठोर इस्पात (जैसे एल्निको) एक बार चुंबकित होने के बाद अपने चुंबकत्व को लंबे समय तक बनाए रखता है, इसलिए यह स्थायी चुंबक बनाने के लिए उपयुक्त है"
    },
    {
        question: "प्रश्न 46. चालकता (Conductance) का मात्रक क्या है?",
        answers: shuffle([
            { text: "ओम", correct: false },
            { text: "सीमेन्स", correct: true },
            { text: "फैरड", correct: false },
            { text: "हेनरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकता प्रतिरोध का व्युत्क्रम है और इसका SI मात्रक सीमेन्स (Siemens) है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'म्हो' (mho) भी कहा जाता है"
    },
    {
        question: "प्रश्न 47. बिजली की खपत की वाणिज्यिक इकाई क्या है?",
        answers: shuffle([
            { text: "वाट", correct: false },
            { text: "जूल", correct: false },
            { text: "किलोवाट-घंटा", correct: true },
            { text: "वोल्ट-एम्पीयर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिजली की खपत को मापने की वाणिज्यिक इकाई किलोवाट-घंटा (kWh) है, जिसे सामान्य भाषा में 'यूनिट' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 kWh = 3.6 x 10⁶ जूल"
    },
    {
        question: "प्रश्न 48. विद्युत विभव (Electric Potential) एक _________ राशि है।",
        answers: shuffle([
            { text: "सदिश (Vector)", correct: false },
            { text: "अदिश (Scalar)", correct: true },
            { text: "टेंसर (Tensor)", correct: false },
            { text: "न तो सदिश न अदिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत विभव एक अदिश राशि है क्योंकि इसे व्यक्त करने के लिए केवल परिमाण की आवश्यकता होती है, दिशा की नहीं"
    },
    {
        question: "प्रश्न 49. फ्लेमिंग के वाम-हस्त (बाएं हाथ) नियम में, अंगूठा क्या दर्शाता है?",
        answers: shuffle([
            { text: "चुंबकीय क्षेत्र की दिशा", correct: false },
            { text: "धारा की दिशा", correct: false },
            { text: "चालक पर लगने वाले बल की दिशा", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्लेमिंग के बाएं हाथ के नियम में, यदि तर्जनी चुंबकीय क्षेत्र की दिशा और मध्यमा धारा की दिशा को दर्शाती है, तो अंगूठा चालक पर लगने वाले बल की दिशा को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मोटर के सिद्धांत की व्याख्या करता है"
    },
    {
        question: "प्रश्न 50. किसी चालक के अंदर स्थिरवैद्युत (electrostatic) स्थिति में, विभव...?",
        answers: shuffle([
            { text: "शून्य होता है", correct: false },
            { text: "सभी बिंदुओं पर समान होता है", correct: true },
            { text: "केंद्र में अधिकतम होता है", correct: false },
            { text: "सतह पर अधिकतम होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थिरवैद्युत संतुलन की स्थिति में, एक चालक के अंदर प्रत्येक बिंदु पर विद्युत क्षेत्र शून्य होता है, जिसके परिणामस्वरूप उसके पूरे आयतन में विभव स्थिर और समान रहता है"
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