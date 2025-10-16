const questions = [
    {
        topHeading: "आनुवंशिक विकारों (सिंड्रोम) पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. डाउन सिंड्रोम (Down Syndrome) किस गुणसूत्र की त्रिसूत्रता (Trisomy) के कारण होता है?",
        answers: shuffle([
            { text: "गुणसूत्र 13", correct: false },
            { text: "गुणसूत्र 18", correct: false },
            { text: "गुणसूत्र 21", correct: true },
            { text: "X-गुणसूत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डाउन सिंड्रोम, जिसे ट्राइसॉमी 21 भी कहा जाता है, गुणसूत्र संख्या 21 की एक अतिरिक्त प्रतिलिपि की उपस्थिति के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे कुल गुणसूत्रों की संख्या 47 हो जाती है।"
    },
    {
        question: "प्रश्न 2. टर्नर सिंड्रोम (Turner Syndrome) से पीड़ित व्यक्ति का जीनोटाइप क्या होता है?",
        answers: shuffle([
            { text: "44 + XXY", correct: false },
            { text: "44 + XYY", correct: false },
            { text: "44 + XO", correct: true },
            { text: "44 + XXX", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टर्नर सिंड्रोम एक ऐसी स्थिति है जिसमें एक महिला में एक X-गुणसूत्र की कमी होती है, जिससे उसका जीनोटाइप 45, XO हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इससे पीड़ित महिलाएं बांझ होती हैं और उनका कद छोटा होता है।"
    },
    {
        question: "प्रश्न 3. क्लाइनफेल्टर सिंड्रोम (Klinefelter Syndrome) किसमें पाया जाता है?",
        answers: shuffle([
            { text: "केवल महिलाओं में", correct: false },
            { text: "केवल पुरुषों में", correct: true },
            { text: "पुरुषों और महिलाओं दोनों में", correct: false },
            { text: "बच्चों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्लाइनफेल्टर सिंड्रोम (47, XXY) केवल पुरुषों में एक अतिरिक्त X-गुणसूत्र की उपस्थिति के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इससे प्रभावित पुरुषों में अविकसित वृषण और कुछ स्त्री जैसे लक्षण विकसित हो जाते हैं।"
    },
    {
        question: "प्रश्न 4. हीमोफिलिया (Haemophilia), जिसे 'रॉयल डिजीज' भी कहा जाता है, किस प्रकार का विकार है?",
        answers: shuffle([
            { text: "ऑटोसोमल प्रभावी", correct: false },
            { text: "ऑटोसोमल अप्रभावी", correct: false },
            { text: "X-सहलग्न अप्रभावी", correct: true },
            { text: "Y-सहलग्न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोफिलिया एक X-सहलग्न अप्रभावी विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें रक्त के थक्के बनाने वाले कारकों की कमी के कारण चोट लगने पर रक्त बहना बंद नहीं होता है।"
    },
    {
        question: "प्रश्न 5. सिकल-सेल एनीमिया (Sickle-Cell Anaemia) में किस प्रोटीन की संरचना में दोष होता है?",
        answers: shuffle([
            { text: "एक्टिन", correct: false },
            { text: "मायोग्लोबिन", correct: false },
            { text: "हीमोग्लोबिन", correct: true },
            { text: "केराटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक बिंदु उत्परिवर्तन (point mutation) के कारण होता है जो हीमोग्लोबिन अणु की बीटा-ग्लोबिन श्रृंखला को प्रभावित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे लाल रक्त कोशिकाएं हंसिया (sickle) के आकार की हो जाती हैं।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से कौन सा एक ऑटोसोमल अप्रभावी (Autosomal Recessive) विकार है?",
        answers: shuffle([
            { text: "हटिंगटन रोग", correct: false },
            { text: "फिनाइलकीटोन्यूरिया (PKU)", correct: true },
            { text: "हीमोफिलिया", correct: false },
            { text: "क्लाइनफेल्टर सिंड्रोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिनाइलकीटोन्यूरिया (PKU) एक चयापचय संबंधी विकार है जो फिनाइलएलानिन हाइड्रोक्सीलेज एंजाइम की कमी के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह एक ऑटोसोमल अप्रभावी विकार है।"
    },
    {
        question: "प्रश्न 7. 'क्राई-डू-चैट' (Cri-du-chat) सिंड्रोम का कारण क्या है?",
        answers: shuffle([
            { text: "गुणसूत्र 5 पर विलोपन (deletion)", correct: true },
            { text: "गुणसूत्र 21 की त्रिसूत्रता", correct: false },
            { text: "एक अतिरिक्त Y-गुणसूत्र", correct: false },
            { text: "एक अतिरिक्त X-गुणसूत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिंड्रोम गुणसूत्र 5 की छोटी भुजा के एक हिस्से के विलोपन (deletion) के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इससे प्रभावित शिशु का रोना बिल्ली के रोने जैसा होता है।"
    },
    {
        question: "प्रश्न 8. वर्णांधता (Colour Blindness) में व्यक्ति किन रंगों में भेद नहीं कर पाता है?",
        answers: shuffle([
            { text: "लाल और हरा", correct: true },
            { text: "नीला और पीला", correct: false },
            { text: "काला और सफेद", correct: false },
            { text: "हरा और नीला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल-हरी वर्णांधता सबसे आम प्रकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह एक X-सहलग्न अप्रभावी विकार है जो आंखों में लाल या हरे शंकु कोशिकाओं (cone cells) में दोष के कारण होता है।"
    },
    {
        question: "प्रश्न 9. एडवर्ड सिंड्रोम (Edward's Syndrome) किस गुणसूत्र की त्रिसूत्रता के कारण होता है?",
        answers: shuffle([
            { text: "गुणसूत्र 13", correct: false },
            { text: "गुणसूत्र 18", correct: true },
            { text: "गुणसूत्र 21", correct: false },
            { text: "Y-गुणसूत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एडवर्ड सिंड्रोम (ट्राइसॉमी 18) एक गंभीर आनुवंशिक स्थिति है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो गुणसूत्र 18 की एक अतिरिक्त प्रतिलिपि के कारण होती है, जिससे विकास संबंधी गंभीर समस्याएं होती हैं।"
    },
    {
        question: "प्रश्न 10. थैलेसीमिया (Thalassemia) रोग शरीर के किस हिस्से को प्रभावित करता है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "मस्तिष्क", correct: false },
            { text: "रक्त", correct: true },
            { text: "फेफड़े", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थैलेसीमिया एक आनुवंशिक रक्त विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें शरीर पर्याप्त हीमोग्लोबिन नहीं बना पाता है, जिससे एनीमिया होता है। यह ग्लोबिन श्रृंखलाओं के संश्लेषण में दोष के कारण होता है।"
    },
    {
        question: "प्रश्न 11. किसी व्यक्ति के गुणसूत्रों के संपूर्ण सेट का सचित्र निरूपण क्या कहलाता है?",
        answers: shuffle([
            { text: "जीनोटाइप", correct: false },
            { text: "फेनोटाइप", correct: false },
            { text: "कैरियोटाइप (Karyotype)", correct: true },
            { text: "जीनोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैरियोटाइप एक व्यक्ति के गुणसूत्रों की एक संगठित प्रोफ़ाइल है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे आकार, सेंट्रोमियर की स्थिति और बैंडिंग पैटर्न के अनुसार व्यवस्थित किया जाता है। इसका उपयोग गुणसूत्रीय असामान्यताओं का पता लगाने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 12. पटाऊ सिंड्रोम (Patau Syndrome) का कारण है:",
        answers: shuffle([
            { text: "गुणसूत्र 13 की त्रिसूत्रता", correct: true },
            { text: "गुणसूत्र 18 की त्रिसूत्रता", correct: false },
            { text: "गुणसूत्र 5 का विलोपन", correct: false },
            { text: "गुणसूत्र X की मोनोसोमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पटाऊ सिंड्रोम, या ट्राइसॉमी 13, गुणसूत्र 13 की एक अतिरिक्त प्रतिलिपि के कारण होने वाला एक गंभीर गुणसूत्रीय विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो गंभीर बौद्धिक अक्षमता और शारीरिक असामान्यताओं का कारण बनता है।"
    },
    {
        question: "प्रश्न 13. हटिंगटन रोग (Huntington's disease) किस प्रकार का आनुवंशिक विकार है?",
        answers: shuffle([
            { text: "ऑटोसोमल अप्रभावी", correct: false },
            { text: "ऑटोसोमल प्रभावी", correct: true },
            { text: "X-सहलग्न अप्रभावी", correct: false },
            { text: "X-सहलग्न प्रभावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हटिंगटन रोग एक न्यूरोडीजेनेरेटिव विकार है जो एक ऑटोसोमल प्रभावी एलील के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसका अर्थ है कि विकार पैदा करने के लिए जीन की केवल एक प्रतिलिपि ही पर्याप्त है।"
    },
    {
        question: "प्रश्न 14. मेंडेलियन विकार (Mendelian disorder) किसके कारण होते हैं?",
        answers: shuffle([
            { text: "गुणसूत्रों की संख्या में परिवर्तन", correct: false },
            { text: "एक एकल जीन (single gene) में परिवर्तन या उत्परिवर्तन", correct: true },
            { text: "हार्मोनल असंतुलन", correct: false },
            { text: "पर्यावरणीय कारक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेंडेलियन विकार, जिन्हें एकल-जीन विकार भी कहा जाता है, एक जीन में उत्परिवर्तन के परिणामस्वरूप होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और मेंडल के वंशानुक्रम के नियमों का पालन करते हैं।"
    },
    {
        question: "प्रश्न 15. सिस्टिक फाइब्रोसिस (Cystic Fibrosis) मुख्य रूप से शरीर की किन ग्रंथियों को प्रभावित करता है?",
        answers: shuffle([
            { text: "अंतःस्रावी ग्रंथियां", correct: false },
            { text: "बहिःस्रावी ग्रंथियां (Exocrine glands)", correct: true },
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "थायरॉयड ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक ऑटोसोमल अप्रभावी विकार है जो शरीर की बलगम, पसीना और पाचक रस बनाने वाली बहिःस्रावी ग्रंथियों (Exocrine glands) को प्रभावित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे ये तरल पदार्थ मोटे और चिपचिपे हो जाते हैं।"
    },
    {
        question: "प्रश्न 16. 'वंशावली विश्लेषण' (Pedigree Analysis) का उपयोग किस लिए किया जाता है?",
        answers: shuffle([
            { text: "गुणसूत्रों की संख्या गिनने के लिए", correct: false },
            { text: "जीन की संरचना का अध्ययन करने के लिए", correct: false },
            { text: "किसी विशेष लक्षण या विकार की वंशागति का पता लगाने के लिए", correct: true },
            { text: "डीएनए फिंगरप्रिंटिंग के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वंशावली चार्ट का उपयोग करके, आनुवंशिकीविद पीढ़ियों के माध्यम से किसी लक्षण के संचरण के पैटर्न का विश्लेषण कर सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह निर्धारित कर सकते हैं कि यह प्रभावी है या अप्रभावी, ऑटोसोमल है या लिंग-सहलग्न।"
    },
    {
        question: "प्रश्न 17. एल्बिनिज्म (Albinism) या रंजकहीनता किस एंजाइम की कमी से होता है?",
        answers: shuffle([
            { text: "कैटलेज", correct: false },
            { text: "टायरोसिनेज (Tyrosinase)", correct: true },
            { text: "एमाइलेज", correct: false },
            { text: "पेप्सिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एल्बिनिज्म में, मेलेनिन नामक रंजक (pigment) का उत्पादन नहीं हो पाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह टायरोसिनेज (Tyrosinase) एंजाइम की कमी के कारण होता है, जो मेलेनिन संश्लेषण के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 18. निम्नलिखित में से कौन सा विकार लिंग-सहलग्न (sex-linked) है?",
        answers: shuffle([
            { text: "सिकल-सेल एनीमिया", correct: false },
            { text: "सिस्टिक फाइब्रोसिस", correct: false },
            { text: "वर्णांधता (Colour Blindness)", correct: true },
            { text: "थैलेसीमिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्णांधता एक सामान्य X-सहलग्न अप्रभावी विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यही कारण है कि यह पुरुषों में महिलाओं की तुलना में बहुत अधिक आम है।"
    },
    {
        question: "प्रश्न 19. वह प्रक्रिया जिसके द्वारा भ्रूण के चारों ओर के एम्नियोटिक द्रव का नमूना लेकर आनुवंशिक विकारों का पता लगाया जाता है, क्या कहलाती है?",
        answers: shuffle([
            { text: "अल्ट्रासोनोग्राफी", correct: false },
            { text: "कोरियोनिक विलस सैंपलिंग (CVS)", correct: false },
            { text: "एम्नियोसेंटेसिस (Amniocentesis)", correct: true },
            { text: "लैप्रोस्कोपी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एम्नियोसेंटेसिस एक प्रसवपूर्व निदान प्रक्रिया है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें भ्रूण की कोशिकाओं का विश्लेषण करके गुणसूत्रीय असामान्यताओं का पता लगाया जाता है।"
    },
    {
        question: "प्रश्न 20. 47, XYY जीनोटाइप वाले सिंड्रोम को क्या कहा जाता है?",
        answers: shuffle([
            { text: "सुपरफीमेल सिंड्रोम", correct: false },
            { text: "जैकब सिंड्रोम (सुपरमेल)", correct: true },
            { text: "टर्नर सिंड्रोम", correct: false },
            { text: "डाउन सिंड्रोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैकब सिंड्रोम पुरुषों में एक अतिरिक्त Y-गुणसूत्र की उपस्थिति के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इससे प्रभावित व्यक्ति अक्सर सामान्य से अधिक लंबे होते हैं लेकिन आमतौर पर सामान्य फेनोटाइप और प्रजनन क्षमता वाले होते हैं।"
    },
    {
        question: "प्रश्न 21. बिंदु उत्परिवर्तन (Point Mutation) का सबसे अच्छा उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "डाउन सिंड्रोम", correct: false },
            { text: "क्लाइनफेल्टर सिंड्रोम", correct: false },
            { text: "सिकल-सेल एनीमिया", correct: true },
            { text: "क्राई-डू-चैट सिंड्रोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकल-सेल एनीमिया डीएनए में केवल एक बेस जोड़ी के परिवर्तन (एक बिंदु उत्परिवर्तन) के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो हीमोग्लोबिन की प्रोटीन श्रृंखला में एक अमीनो एसिड को बदल देता है।"
    },
    {
        question: "प्रश्न 22. कौन सा विकार एक चयापचय की जन्मजात त्रुटि (inborn error of metabolism) है?",
        answers: shuffle([
            { text: "हीमोफिलिया", correct: false },
            { text: "टर्नर सिंड्रोम", correct: false },
            { text: "फिनाइलकीटोन्यूरिया (PKU)", correct: true },
            { text: "हटिंगटन रोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिनाइलकीटोन्यूरिया (PKU) एक चयापचय संबंधी विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  क्योंकि यह एक विशिष्ट एंजाइम की कमी के कारण होता है, जिससे शरीर में फिनाइलएलानिन नामक अमीनो एसिड का संचय होता है, जो मस्तिष्क को नुकसान पहुंचा सकता है।"
    },
    {
        question: "प्रश्न 23. एक महिला वर्णांधता की वाहक (carrier) हो सकती है लेकिन सामान्यतः इससे पीड़ित क्यों नहीं होती?",
        answers: shuffle([
            { text: "क्योंकि उसके पास एक सामान्य Y-गुणसूत्र होता है", correct: false },
            { text: "क्योंकि उसके पास एक और सामान्य X-गुणसूत्र होता है", correct: true },
            { text: "क्योंकि यह केवल पुरुषों को प्रभावित करता है", correct: false },
            { text: "क्योंकि उसके हार्मोन इसे रोकते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्णांधता एक X-सहलग्न अप्रभावी विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  वाहक महिलाओं में, एक X-गुणसूत्र पर दोषपूर्ण जीन होता है, लेकिन दूसरे X-गुणसूत्र पर मौजूद सामान्य जीन इसकी भरपाई कर देता है।"
    },
    {
        question: "प्रश्न 24. एन्यूप्लोइडी (Aneuploidy) का क्या अर्थ है?",
        answers: shuffle([
            { text: "जीन में परिवर्तन", correct: false },
            { text: "गुणसूत्रों की संख्या में असामान्य परिवर्तन", correct: true },
            { text: "गुणसूत्र की संरचना में परिवर्तन", correct: false },
            { text: "एक संपूर्ण गुणसूत्र सेट का जुड़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एन्यूप्लोइडी एक ऐसी स्थिति है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें एक या एक से अधिक गुणसूत्रों की हानि या लाभ होता है, जैसे ट्राइसॉमी (एक अतिरिक्त गुणसूत्र) या मोनोसोमी (एक गुणसूत्र की कमी)।"
    },
    {
        question: "प्रश्न 25. 47, XXX जीनोटाइप वाली स्थिति को क्या कहा जाता है?",
        answers: shuffle([
            { text: "टर्नर सिंड्रोम", correct: false },
            { text: "डाउन सिंड्रोम", correct: false },
            { text: "क्लाइनफेल्टर सिंड्रोम", correct: false },
            { text: "ट्राईसोमी X (सुपरफीमेल)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्थिति महिलाओं में एक अतिरिक्त X-गुणसूत्र की उपस्थिति के कारण होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  अधिकांश महिलाएं सामान्य रूप से विकसित होती हैं और उनमें कोई स्पष्ट लक्षण नहीं दिखते हैं।"
    },
    {
        question: "प्रश्न 26. मायोटोनिक डिस्ट्रॉफी (Myotonic dystrophy) किस प्रकार का विकार है?",
        answers: shuffle([
            { text: "ऑटोसोमल प्रभावी", correct: true },
            { text: "ऑटोसोमल अप्रभावी", correct: false },
            { text: "X-सहलग्न अप्रभावी", correct: false },
            { text: "गुणसूत्रीय विकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मायोटोनिक डिस्ट्रॉफी एक ऑटोसोमल प्रभावी विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो मांसपेशियों की प्रगतिशील कमजोरी और बर्बादी का कारण बनता है।"
    },
    {
        question: "प्रश्न 27. यदि माता-पिता दोनों थैलेसीमिया माइनर (वाहक) हैं, तो उनके बच्चे में थैलेसीमिया मेजर होने की क्या संभावना है?",
        answers: shuffle([
            { text: "100%", correct: false },
            { text: "75%", correct: false },
            { text: "50%", correct: false },
            { text: "25%", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थैलेसीमिया एक ऑटोसोमल अप्रभावी विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यदि दोनों माता-पिता वाहक (Tt) हैं, तो उनके बच्चे के समयुग्मजी अप्रभावी (tt) या थैलेसीमिया मेजर होने की संभावना 25% है।"
    },
    {
        question: "प्रश्न 28. कौन सा आनुवंशिक विकार रक्त के थक्के जमने की प्रक्रिया को प्रभावित करता है?",
        answers: shuffle([
            { text: "थैलेसीमिया", correct: false },
            { text: "हीमोफिलिया", correct: true },
            { text: "सिकल-सेल एनीमिया", correct: false },
            { text: "सिस्टिक फाइब्रोसिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोफिलिया क्लॉटिंग कारकों (आमतौर पर फैक्टर VIII या फैक्टर IX) के उत्पादन में कमी के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो सामान्य रक्त के थक्के जमने के लिए आवश्यक होते हैं।"
    },
    {
        question: "प्रश्न 29. मानव जीनोम में लगभग कितने जीन होते हैं?",
        answers: shuffle([
            { text: "5,000 - 10,000", correct: false },
            { text: "20,000 - 25,000", correct: true },
            { text: "50,000 - 60,000", correct: false },
            { text: "100,000 से अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव जीनोम परियोजना के अनुसार, यह अनुमान लगाया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i>  कि मनुष्यों में लगभग 20,000 से 25,000 प्रोटीन-कोडिंग जीन होते हैं।"
    },
    {
        question: "प्रश्न 30. मेंडेलियन विकार (Mendelian disorder) किसके कारण होते हैं?",
        answers: shuffle([
            { text: "गुणसूत्रों की संख्या में परिवर्तन", correct: false },
            { text: "एक एकल जीन (single gene) में परिवर्तन या उत्परिवर्तन", correct: true },
            { text: "हार्मोनल असंतुलन", correct: false },
            { text: "पर्यावरणीय कारक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेंडेलियन विकार, जिन्हें एकल-जीन विकार भी कहा जाता है, एक जीन में उत्परिवर्तन के परिणामस्वरूप होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और मेंडल के वंशानुक्रम के नियमों का पालन करते हैं।"
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