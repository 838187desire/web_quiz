const questions = [
    {
        topHeading: "चालक, अर्धचालक और कुचालक पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. चालन बैंड (Conduction Band) में होते हैं?",
        answers: shuffle([
            { text: "संयोजी इलेक्ट्रॉन", correct: false },
            { text: "मुक्त इलेक्ट्रॉन", correct: true },
            { text: "नाभिक", correct: false },
            { text: "न्यूट्रॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालन बैंड ऊर्जा स्तरों का वह समूह है जो सामान्यतः खाली या आंशिक रूप से भरा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब इलेक्ट्रॉन इस बैंड में पहुँच जाते हैं, तो वे क्रिस्टल में घूमने के लिए स्वतंत्र होते हैं और विद्युत चालन में योगदान करते हैं।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से कौन सा कथन चालकों के लिए सत्य है?",
        answers: shuffle([
            { text: "इनमें कोई संयोजकता बैंड नहीं होता है", correct: false },
            { text: "इनका चालन बैंड हमेशा पूरी तरह से भरा होता है", correct: false },
            { text: "संयोजकता बैंड और चालन बैंड के बीच कोई ऊर्जा अंतराल नहीं होता है", correct: true },
            { text: "ये केवल निम्न तापमान पर चालन करते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकों में वर्जित ऊर्जा अंतराल शून्य होता है क्योंकि बैंड एक-दूसरे पर अतिव्यापित होते हैं।"
    },
    {
        question: "प्रश्न 3. यदि डोपिंग की मात्रा बढ़ा दी जाए, तो बाह्य अर्धचालक की चालकता पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "घट जाएगी", correct: false },
            { text: "बढ़ जाएगी", correct: true },
            { text: "अपरिवर्तित रहेगी", correct: false },
            { text: "पहले घटेगी फिर बढ़ेगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डोपिंग की मात्रा बढ़ाने से बहुसंख्यक आवेश वाहकों (इलेक्ट्रॉन या होल) की संख्या बढ़ जाती है, जिससे अर्धचालक की चालकता सीधे तौर पर बढ़ जाती है।"
    },
    {
        question: "प्रश्न 4. P-N संधि डायोड में धारा मुख्यतः किस दिशा में आसानी से प्रवाहित होती है?",
        answers: shuffle([
            { text: "P-क्षेत्र से N-क्षेत्र की ओर", correct: true },
            { text: "N-क्षेत्र से P-क्षेत्र की ओर", correct: false },
            { text: "दोनों दिशाओं में समान रूप से", correct: false },
            { text: "किसी भी दिशा में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब P-क्षेत्र को बैटरी के धनात्मक सिरे से और N-क्षेत्र को ऋणात्मक सिरे से जोड़ा जाता है (अग्र अभिनति), तो डायोड आसानी से धारा प्रवाहित होने देता है।"
    },
    {
        question: "प्रश्न 5. 'तापायनिक उत्सर्जन' की घटना किस प्रकार के पदार्थों में देखी जाती है?",
        answers: shuffle([
            { text: "अर्धचालकों में", correct: false },
            { text: "कुचालकों में", correct: false },
            { text: "चालकों (धातुओं) में", correct: true },
            { text: "विद्युत अपघट्यों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब धातुओं को बहुत अधिक गर्म किया जाता है, तो उनके मुक्त इलेक्ट्रॉन पर्याप्त ऊष्मीय ऊर्जा पाकर धातु की सतह से बाहर उत्सर्जित हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे तापायनिक उत्सर्जन कहते हैं।"
    },
    {
        question: "प्रश्न 6. कमरे के तापमान पर, एक शुद्ध अर्धचालक में कुछ चालकता होती है, इसका क्या कारण है?",
        answers: shuffle([
            { text: "अशुद्धियों की उपस्थिति", correct: false },
            { text: "ऊष्मीय ऊर्जा के कारण इलेक्ट्रॉन-होल युग्मों का बनना", correct: true },
            { text: "दाब का प्रभाव", correct: false },
            { text: "प्रकाश का प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कमरे का तापमान कुछ सहसंयोजक बंधों को तोड़ने के लिए पर्याप्त ऊष्मीय ऊर्जा प्रदान करता है, जिससे सीमित संख्या में मुक्त इलेक्ट्रॉन और होल बनते हैं जो चालन करते हैं।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से कौन सा यौगिक अर्धचालक का उदाहरण है?",
        answers: shuffle([
            { text: "सिलिकॉन", correct: false },
            { text: "जर्मेनियम", correct: false },
            { text: "कैडमियम सल्फाइड", correct: true },
            { text: "कार्बन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यौगिक अर्धचालक दो या दो से अधिक तत्वों से मिलकर बनते हैं, जैसे गैलियम आर्सेनाइड (GaAs), कैडमियम सल्फाइड (CdS) आदि।<br><br><i class='fa-solid fa-angles-right icon'></i> सिलिकॉन और जर्मेनियम तात्विक अर्धचालक हैं।"
    },
    {
        question: "प्रश्न 8. मुक्त इलेक्ट्रॉनों की गतिशीलता (mobility) किसमें अधिकतम होती है?",
        answers: shuffle([
            { text: "चालकों में", correct: true },
            { text: "अर्धचालकों में", correct: false },
            { text: "कुचालकों में", correct: false },
            { text: "विद्युत अपघट्यों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकों में इलेक्ट्रॉनों की गति के मार्ग में बाधाएं (टक्करें) अर्धचालकों की तुलना में कम होती हैं (क्रिस्टल संरचना के कारण), और उनमें आवेश वाहकों का घनत्व बहुत अधिक होता है, जिससे उनकी गतिशीलता उच्च होती है।"
    },
    {
        question: "प्रश्न 9. होलों की गतिशीलता इलेक्ट्रॉनों की गतिशीलता की तुलना में कैसी होती है?",
        answers: shuffle([
            { text: "अधिक", correct: false },
            { text: "कम", correct: true },
            { text: "बराबर", correct: false },
            { text: "हमेशा शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होल का प्रवाह वास्तव में एक बंध से दूसरे बंध में इलेक्ट्रॉनों के कूदने की एक क्रमिक प्रक्रिया है, जो चालन बैंड में एक मुक्त इलेक्ट्रॉन की गति की तुलना में धीमी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, होलों की गतिशीलता कम होती है।"
    },
    {
        question: "प्रश्न 10. एक डायोड को 'अग्र अभिनत' (Forward Biased) कब कहा जाता है?",
        answers: shuffle([
            { text: "जब P-क्षेत्र को निम्न विभव और N-क्षेत्र को उच्च विभव पर रखा जाता है", correct: false },
            { text: "जब P-क्षेत्र को उच्च विभव और N-क्षेत्र को निम्न विभव पर रखा जाता है", correct: true },
            { text: "जब दोनों को समान विभव पर रखा जाता है", correct: false },
            { text: "जब कोई विभव नहीं लगाया जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अग्र अभिनति की परिभाषा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, अवक्षय परत की चौड़ाई कम हो जाती है और धारा आसानी से प्रवाहित होती है।"
    },
    {
        question: "प्रश्न 11. एक डायोड को 'पश्च अभिनत' (Reverse Biased) कब कहा जाता है?",
        answers: shuffle([
            { text: "जब P-क्षेत्र को निम्न विभव और N-क्षेत्र को उच्च विभव पर रखा जाता है", correct: true },
            { text: "जब P-क्षेत्र को उच्च विभव और N-क्षेत्र को निम्न विभव पर रखा जाता है", correct: false },
            { text: "जब उस पर प्रत्यावर्ती विभव लगाया जाता है", correct: false },
            { text: "जब उसे गर्म किया जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पश्च अभिनति की परिभाषा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, अवक्षय परत की चौड़ाई बढ़ जाती है और लगभग कोई धारा (केवल अल्पसंख्यक वाहकों के कारण बहुत कम क्षरण धारा) प्रवाहित नहीं होती है।"
    },
    {
        question: "प्रश्न 12. चालकों की प्रतिरोधकता की कोटि क्या होती है?",
        answers: shuffle([
            { text: "बहुत उच्च", correct: false },
            { text: "बहुत निम्न", correct: true },
            { text: "मध्यम", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अच्छे चालक धारा का बहुत कम विरोध करते हैं, इसलिए उनकी प्रतिरोधकता का मान बहुत कम (लगभग 10^{-8} ओम-मीटर) होता है।"
    },
    {
        question: "प्रश्न 13. कुचालकों की प्रतिरोधकता की कोटि क्या होती है?",
        answers: shuffle([
            { text: "बहुत उच्च", correct: true },
            { text: "बहुत निम्न", correct: false },
            { text: "मध्यम", correct: false },
            { text: "अनंत के निकट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुचालक धारा का बहुत अधिक विरोध करते हैं, इसलिए उनकी प्रतिरोधकता का मान बहुत उच्च (लगभग 10^{10} से 10^{16} ओम-मीटर) होता है।"
    },
    {
        question: "प्रश्न 14. अर्धचालकों की प्रतिरोधकता की कोटि क्या होती है?",
        answers: shuffle([
            { text: "चालकों और कुचालकों के बीच", correct: true },
            { text: "चालकों से भी कम", correct: false },
            { text: "कुचालकों से भी अधिक", correct: false },
            { text: "हमेशा स्थिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धचालकों की प्रतिरोधकता का मान चालकों की तुलना में अधिक लेकिन कुचालकों की तुलना में कम होता है।"
    },
    {
        question: "प्रश्न 15. दाता ऊर्जा स्तर (Donor energy level) कहाँ बनता है?",
        answers: shuffle([
            { text: "संयोजकता बैंड के ठीक ऊपर", correct: false },
            { text: "चालन बैंड के ठीक नीचे", correct: true },
            { text: "संयोजकता बैंड के ठीक नीचे", correct: false },
            { text: "चालन बैंड के ठीक ऊपर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> N-प्रकार के अर्धचालक में, पंचसंयोजी अशुद्धि के अतिरिक्त इलेक्ट्रॉन एक नया ऊर्जा स्तर बनाते हैं जो वर्जित ऊर्जा अंतराल में चालन बैंड के बहुत निकट होता है।"
    },
    {
        question: "प्रश्न 16. किसी चालक में इलेक्ट्रॉनों की यादृच्छिक गति का कारण क्या है?",
        answers: shuffle([
            { text: "आरोपित विद्युत क्षेत्र", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: true },
            { text: "नाभिकीय बल", correct: false },
            { text: "गुरुत्वाकर्षण बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कमरे के तापमान पर, चालक के परमाणु (आयन) अपनी माध्य स्थिति के परितः कंपन करते रहते हैं और मुक्त इलेक्ट्रॉन इन कंपायमान आयनों से टकराकर लगातार अपनी दिशा बदलते रहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गति ऊष्मीय ऊर्जा के कारण होती है।"
    },
    {
        question: "प्रश्न 17. क्या प्रकाश एक कुचालक के माध्यम से उसकी चालकता को प्रभावित कर सकता है?",
        answers: shuffle([
            { text: "हाँ, प्रकाश-चालकता द्वारा", correct: true },
            { text: "नहीं, कभी नहीं", correct: false },
            { text: "केवल यदि कुचालक चुंबकीय हो", correct: false },
            { text: "केवल यदि कुचालक बहुत ठंडा हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि आपतित फोटॉनों की ऊर्जा कुचालक के ऊर्जा अंतराल से अधिक है, तो वे इलेक्ट्रॉनों को संयोजकता बैंड से चालन बैंड में उत्तेजित कर सकते हैं, जिससे पदार्थ की चालकता अस्थायी रूप से बढ़ जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे प्रकाश-चालकता कहते हैं।"
    },
    {
        question: "प्रश्न 18. पीजोइलेक्ट्रिक प्रभाव, जिसमें दाब लगाने पर वोल्टेज उत्पन्न होता है, किस प्रकार के पदार्थों में देखा जाता है?",
        answers: shuffle([
            { text: "सभी चालकों में", correct: false },
            { text: "कुछ विशेष क्रिस्टलीय कुचालकों में", correct: true },
            { text: "सभी अर्धचालकों में", correct: false },
            { text: "गैसों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वार्ट्ज जैसे कुछ क्रिस्टलीय कुचालकों में यह गुण होता है कि जब उन पर यांत्रिक प्रतिबल लगाया जाता है, तो उनके फलकों पर विभवांतर उत्पन्न हो जाता है।"
    },
    {
        question: "प्रश्न 19. ग्रेफाइट, जो कार्बन का एक अपरूप है, विद्युत का ________ है।",
        answers: shuffle([
            { text: "कुचालक", correct: false },
            { text: "सुचालक", correct: true },
            { text: "अर्धचालक", correct: false },
            { text: "अतिचालक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेफाइट की परतदार संरचना में, प्रत्येक कार्बन परमाणु तीन अन्य से जुड़ा होता है, और चौथा इलेक्ट्रॉन परतों के बीच घूमने के लिए स्वतंत्र होता है, जिससे यह एक अच्छा सुचालक बन जाता है।"
    },
    {
        question: "प्रश्न 20. हीरा, जो कार्बन का ही एक अपरूप है, विद्युत का ________ है।",
        answers: shuffle([
            { text: "कुचालक", correct: true },
            { text: "सुचालक", correct: false },
            { text: "अर्धचालक", correct: false },
            { text: "अतिचालक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीरे की त्रिविमीय क्रिस्टल संरचना में, सभी चारों संयोजी इलेक्ट्रॉन मजबूत सहसंयोजक बंधों में बंधे होते हैं और कोई भी मुक्त इलेक्ट्रॉन नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका ऊर्जा अंतराल भी बहुत बड़ा होता है, जिससे यह एक उत्कृष्ट कुचालक बनता है।"
    },
    {
        question: "प्रश्न 21. विद्युत अपघट्य (Electrolyte) विलयन विद्युत का चालन क्यों करते हैं?",
        answers: shuffle([
            { text: "मुक्त इलेक्ट्रॉनों के कारण", correct: false },
            { text: "होलों के कारण", correct: false },
            { text: "धनात्मक और ऋणात्मक आयनों की गति के कारण", correct: true },
            { text: "सहसंयोजक बंधों के टूटने के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत अपघट्य विलयनों में, आवेश वाहक इलेक्ट्रॉन या होल नहीं, बल्कि धनात्मक आयन (धनायन) और ऋणात्मक आयन (ऋणायन) होते हैं।"
    },
    {
        question: "प्रश्न 22. किस प्रकार के ठोस में मुक्त इलेक्ट्रॉन 'इलेक्ट्रॉन गैस' या 'इलेक्ट्रॉन समुद्र' का निर्माण करते हैं?",
        answers: shuffle([
            { text: "आयनिक ठोस", correct: false },
            { text: "सहसंयोजक ठोस", correct: false },
            { text: "धात्विक ठोस (चालक)", correct: true },
            { text: "आणविक ठोस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धात्विक बंध में, संयोजी इलेक्ट्रॉन अपने परमाणुओं को छोड़कर पूरे क्रिस्टल जालक में घूमने के लिए स्वतंत्र हो जाते हैं, जो धनात्मक आयनों के एक 'समुद्र' में गैस की तरह व्यवहार करते हैं।"
    },
    {
        question: "प्रश्न 23. यदि एक चालक तार को बीच में से काट दिया जाए, तो उसके दो टुकड़ों की प्रतिरोधकता पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "दोगुनी हो जाएगी", correct: false },
            { text: "आधी हो जाएगी", correct: false },
            { text: "अपरिवर्तित रहेगी", correct: true },
            { text: "चार गुनी हो जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता पदार्थ का गुण है, यह विमाओं पर निर्भर नहीं करती।<br><br><i class='fa-solid fa-angles-right icon'></i> काटने से केवल प्रतिरोध बदलेगा, प्रतिरोधकता नहीं।"
    },
    {
        question: "प्रश्न 24. एक कुचालक में चालन बैंड की स्थिति कैसी होती है?",
        answers: shuffle([
            { text: "पूरी तरह से भरा हुआ", correct: false },
            { text: "आंशिक रूप से भरा हुआ", correct: false },
            { text: "संयोजकता बैंड पर अतिव्यापित", correct: false },
            { text: "पूरी तरह से खाली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य परिस्थितियों में, कुचालक का संयोजकता बैंड पूरी तरह से भरा होता है और चालन बैंड पूरी तरह से खाली होता है, और उनके बीच एक बड़ा ऊर्जा अंतराल होता है।"
    },
    {
        question: "प्रश्न 25. एक अर्धचालक में, होल की गति की दिशा मानी जाती है?",
        answers: shuffle([
            { text: "विद्युत क्षेत्र की दिशा में", correct: true },
            { text: "विद्युत क्षेत्र की विपरीत दिशा में", correct: false },
            { text: "विद्युत क्षेत्र के लंबवत", correct: false },
            { text: "यह यादृच्छिक होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि होल को एक प्रभावी धनात्मक आवेश वाहक माना जाता है, उस पर विद्युत क्षेत्र की दिशा में ही बल लगता है और वह उसी दिशा में गति करता है।"
    },
    {
        question: "प्रश्न 26. जब एक इलेक्ट्रॉन और एक होल का पुनर्संयोजन (recombination) होता है, तो क्या होता है?",
        answers: shuffle([
            { text: "ऊर्जा अवशोषित होती है", correct: false },
            { text: "ऊर्जा उत्सर्जित होती है", correct: true },
            { text: "एक नया परमाणु बनता है", correct: false },
            { text: "कोई प्रभाव नहीं पड़ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब चालन बैंड से एक इलेक्ट्रॉन संयोजकता बैंड में एक होल के साथ मिलता है, तो वह अपनी अतिरिक्त ऊर्जा को ऊष्मा या प्रकाश (फोटॉन) के रूप में उत्सर्जित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> LED इसी सिद्धांत पर काम करते हैं।"
    },
    {
        question: "प्रश्न 27. निम्नलिखित में से कौन सा कथन असत्य है?",
        answers: shuffle([
            { text: "चालक ओम के नियम का पालन करते हैं", correct: false },
            { text: "अर्धचालक अन-ओमीय होते हैं", correct: false },
            { text: "सभी कुचालक आदर्श कुचालक होते हैं", correct: true },
            { text: "अर्धचालकों की चालकता डोपिंग से बढ़ाई जा सकती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोई भी कुचालक आदर्श नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनमें बहुत कम संख्या में आवेश वाहक हो सकते हैं, और एक पर्याप्त उच्च वोल्टेज पर उनका भंजन हो सकता है।"
    },
    {
        question: "प्रश्न 28. वह अधिकतम ऊर्जा जिसे संयोजकता बैंड में एक इलेक्ट्रॉन परम शून्य ताप पर ग्रहण कर सकता है, क्या कहलाती है?",
        answers: shuffle([
            { text: "चालन ऊर्जा", correct: false },
            { text: "फर्मी ऊर्जा", correct: true },
            { text: "बंधन ऊर्जा", correct: false },
            { text: "आयनन ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फर्मी ऊर्जा परम शून्य ताप पर इलेक्ट्रॉनों द्वारा अधिकृत उच्चतम ऊर्जा स्तर को परिभाषित करती है।"
    },
    {
        question: "प्रश्न 29. क्या होता है जब एक P-N संधि पर प्रकाश आपतित होता है?",
        answers: shuffle([
            { text: "यह गर्म हो जाती है", correct: false },
            { text: "यह एक विभवांतर उत्पन्न करती है", correct: true },
            { text: "यह चुंबकीय हो जाती है", correct: false },
            { text: "यह टूट जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपतित फोटॉन संधि के पास इलेक्ट्रॉन-होल युग्म उत्पन्न करते हैं, जिन्हें संधि का आंतरिक विद्युत क्षेत्र अलग-अलग कर देता है, जिससे एक विभवांतर उत्पन्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह फोटोडायोड और सौर सेल का कार्य सिद्धांत है।"
    },
    {
        question: "प्रश्न 30. ट्रांजिस्टर, जो प्रवर्धन और स्विचिंग के लिए उपयोग किया जाता है, मूल रूप से क्या है?",
        answers: shuffle([
            { text: "एक चालक युक्ति", correct: false },
            { text: "एक कुचालक युक्ति", correct: false },
            { text: "एक अर्धचालक युक्ति", correct: true },
            { text: "एक चुंबकीय युक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रांजिस्टर तीन अर्धचालक परतों (जैसे NPN या PNP) से बनी एक युक्ति है, जो आधुनिक इलेक्ट्रॉनिक्स का आधार है।"
    },
    {
        question: "प्रश्न 31. अर्धचालकों के संबंध में 'गतिशीलता' (Mobility) का क्या अर्थ है?",
        answers: shuffle([
            { text: "आवेश वाहकों का कुल वेग", correct: false },
            { text: "प्रति इकाई विद्युत क्षेत्र में आवेश वाहकों का औसत अनुगमन वेग", correct: true },
            { text: "आवेश वाहकों की कुल संख्या", correct: false },
            { text: "आवेश वाहकों द्वारा तय की गई दूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिशीलता यह मापती है कि किसी दिए गए विद्युत क्षेत्र में आवेश वाहक कितनी आसानी से या तेजी से गति कर सकते हैं।"
    },
    {
        question: "प्रश्न 32. मुक्त इलेक्ट्रॉनों का घनत्व किसमें सर्वाधिक होता है?",
        answers: shuffle([
            { text: "चालकों में", correct: true },
            { text: "अर्धचालकों में", correct: false },
            { text: "कुचालकों में", correct: false },
            { text: "निर्वात में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकों की उच्च चालकता का मुख्य कारण उनमें प्रति इकाई आयतन में मुक्त इलेक्ट्रॉनों की बहुत अधिक संख्या (लगभग 10^{28} प्रति घन मीटर) का होना है।"
    },
    {
        question: "प्रश्न 33. दाता अशुद्धि के कारण अर्धचालक के ऊर्जा बैंड आरेख में क्या परिवर्तन होता है?",
        answers: shuffle([
            { text: "एक नया ऊर्जा स्तर संयोजकता बैंड के ठीक ऊपर बनता है", correct: false },
            { text: "एक नया ऊर्जा स्तर चालन बैंड के ठीक नीचे बनता है", correct: true },
            { text: "ऊर्जा अंतराल बढ़ जाता है", correct: false },
            { text: "ऊर्जा अंतराल घट जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नया 'दाता स्तर' इलेक्ट्रॉनों को बहुत कम ऊर्जा लेकर चालन बैंड में कूदने की अनुमति देता है, जिससे चालकता बढ़ जाती है।"
    },
    {
        question: "प्रश्न 34. ग्राही अशुद्धि के कारण अर्धचालक के ऊर्जा बैंड आरेख में क्या परिवर्तन होता है?",
        answers: shuffle([
            { text: "एक नया ऊर्जा स्तर संयोजकता बैंड के ठीक ऊपर बनता है", correct: true },
            { text: "एक नया ऊर्जा स्तर चालन बैंड के ठीक नीचे बनता है", correct: false },
            { text: "फर्मी स्तर चालन बैंड में चला जाता है", correct: false },
            { text: "फर्मी स्तर अपरिवर्तित रहता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नया 'ग्राही स्तर' संयोजकता बैंड से इलेक्ट्रॉनों को बहुत कम ऊर्जा लेकर कूदने की अनुमति देता है, जिससे संयोजकता बैंड में होल बन जाते हैं और चालकता बढ़ जाती है।"
    },
    {
        question: "प्रश्न 35. 'जेनर भंजन' (Zener Breakdown) की घटना किसमें होती है?",
        answers: shuffle([
            { text: "चालकों में उच्च धारा पर", correct: false },
            { text: "कुचालकों में उच्च दाब पर", correct: false },
            { text: "अत्यधिक मादित (heavily doped) अर्धचालक डायोड में", correct: true },
            { text: "शुद्ध अर्धचालकों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक भारी मादित P-N संधि को पश्च अभिनत किया जाता है, तो एक निश्चित वोल्टेज पर अवक्षय परत में बहुत तीव्र विद्युत क्षेत्र के कारण सहसंयोजक बंध टूट जाते हैं, जिससे धारा तेजी से बढ़ती है।"
    },
    {
        question: "प्रश्न 36. 'एवलांश भंजन' (Avalanche Breakdown) की घटना किसमें होती है?",
        answers: shuffle([
            { text: "सामान्य मादित अर्धचालक डायोड में", correct: true },
            { text: "शुद्ध चालकों में", correct: false },
            { text: "अतिचालकों में", correct: false },
            { text: "कुचालकों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक सामान्य मादित P-N संधि को पश्च अभिनत किया जाता है, तो उच्च वोल्टेज पर अल्पसंख्यक वाहक इतना वेग प्राप्त कर लेते हैं कि वे परमाणुओं से टकराकर और अधिक इलेक्ट्रॉन-होल युग्म उत्पन्न करते हैं, जिससे एक एवलांश (हिमस्खलन) की तरह धारा तेजी से बढ़ती है।"
    },
    {
        question: "प्रश्न 37. निम्नलिखित में से कौन सा पदार्थ कमरे के तापमान पर सबसे अधिक प्रतिरोधकता प्रदर्शित करेगा?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "सिलिकॉन", correct: false },
            { text: "जर्मेनियम", correct: false },
            { text: "क्वार्ट्ज (कांच)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वार्ट्ज एक उत्कृष्ट कुचालक है, इसलिए इसकी प्रतिरोधकता चालक (तांबा) और अर्धचालकों (सिलिकॉन, जर्मेनियम) की तुलना में बहुत अधिक होगी।"
    },
    {
        question: "प्रश्न 38. कुचालकों का उपयोग कहाँ किया जाता है?",
        answers: shuffle([
            { text: "कनेक्टिंग तार बनाने में", correct: false },
            { text: "विद्युत उपकरणों को विद्युतरोधी बनाने में", correct: true },
            { text: "हीटिंग एलीमेंट बनाने में", correct: false },
            { text: "सौर पैनल बनाने में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुचालकों का मुख्य उपयोग विद्युत धारा को अवांछित पथों पर जाने से रोकना और सुरक्षा प्रदान करना है, जैसे तारों के ऊपर प्लास्टिक का आवरण।"
    },
    {
        question: "प्रश्न 39. दाता परमाणुओं पर कैसा आवेश होता है (जब वे इलेक्ट्रॉन दान कर देते हैं)?",
        answers: shuffle([
            { text: "धनात्मक", correct: true },
            { text: "ऋणात्मक", correct: false },
            { text: "उदासीन", correct: false },
            { text: "कोई आवेश नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक दाता परमाणु (जो मूल रूप से उदासीन था) अपना एक अतिरिक्त इलेक्ट्रॉन चालन बैंड में दान कर देता है, तो वह स्वयं एक स्थिर धनात्मक आयन बन जाता है।"
    },
    {
        question: "प्रश्न 40. ग्राही परमाणुओं पर कैसा आवेश होता है (जब वे इलेक्ट्रॉन ग्रहण कर लेते हैं)?",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: true },
            { text: "उदासीन", correct: false },
            { text: "परिवर्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक ग्राही परमाणु (जो मूल रूप से उदासीन था) संयोजकता बैंड से एक इलेक्ट्रॉन ग्रहण करके एक होल बनाता है, तो वह स्वयं एक स्थिर ऋणात्मक आयन बन जाता है।"
    },
    {
        question: "प्रश्न 41. शुद्ध अर्धचालकों को ________ भी कहा जाता है।",
        answers: shuffle([
            { text: "अपमिश्रित अर्धचालक", correct: false },
            { text: "नैज अर्धचालक", correct: true },
            { text: "यौगिक अर्धचालक", correct: false },
            { text: "अकार्बनिक अर्धचालक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नैज (Intrinsic) अर्धचालक पूरी तरह से शुद्ध होते हैं और उनमें कोई जानबूझकर मिलाई गई अशुद्धि नहीं होती है।"
    },
    {
        question: "प्रश्न 42. किसी चालक की चालकता निर्भर करती है:",
        answers: shuffle([
            { text: "केवल मुक्त इलेक्ट्रॉनों की संख्या पर", correct: false },
            { text: "केवल इलेक्ट्रॉनों की गतिशीलता पर", correct: false },
            { text: "मुक्त इलेक्ट्रॉनों की संख्या और उनकी गतिशीलता दोनों पर", correct: true },
            { text: "आरोपित वोल्टेज पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकता (\sigma) का सूत्र \sigma = ne\mu होता है, जहाँ n आवेश वाहकों की संख्या और \mu उनकी गतिशीलता है।"
    },
    {
        question: "प्रश्न 43. किसी पदार्थ का वह गुण जो उसे अच्छा चालक या कुचालक बनाता है, वह है:",
        answers: shuffle([
            { text: "उसकी कठोरता", correct: false },
            { text: "उसका घनत्व", correct: false },
            { text: "उसकी प्रतिरोधकता", correct: true },
            { text: "उसकी तन्यता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता वह मौलिक गुण है जो यह निर्धारित करता है कि कोई पदार्थ विद्युत धारा के प्रवाह का कितना विरोध करेगा।"
    },
    {
        question: "प्रश्न 44. एक P-N संधि मूल रूप से क्या कार्य करती है?",
        answers: shuffle([
            { text: "एक प्रवर्धक के रूप में", correct: false },
            { text: "एक दिष्टकारी (एकदिशीय स्विच) के रूप में", correct: true },
            { text: "एक दोलित्र के रूप में", correct: false },
            { text: "एक ऊर्जा स्रोत के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> P-N संधि का सबसे मौलिक गुण यह है कि यह धारा को केवल एक दिशा (अग्र अभिनति) में बहने देती है और विपरीत दिशा (पश्च अभिनति) में रोक देती है, जो दिष्टकरण का आधार है।"
    },
    {
        question: "प्रश्न 45. सभी धातुएं विद्युत की सुचालक होती हैं क्योंकि:",
        answers: shuffle([
            { text: "उनके परमाणु नरम होते हैं", correct: false },
            { text: "उनमें बड़ी संख्या में मुक्त इलेक्ट्रॉन होते हैं", correct: true },
            { text: "वे भारी होती हैं", correct: false },
            { text: "उनका गलनांक उच्च होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धात्विक बंध की प्रकृति के कारण, धातुओं में संयोजी इलेक्ट्रॉन अपने परमाणुओं से बंधे नहीं होते और पूरे क्रिस्टल में घूमने के लिए स्वतंत्र होते हैं, जो उन्हें उत्कृष्ट चालक बनाता है।"
    },
    {
        question: "प्रश्न 46. प्लास्टिक और रबर जैसे बहुलक सामान्यतः होते हैं:",
        answers: shuffle([
            { text: "चालक", correct: false },
            { text: "अर्धचालक", correct: false },
            { text: "कुचालक", correct: true },
            { text: "अतिचालक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन पदार्थों में इलेक्ट्रॉन मजबूत सहसंयोजक बंधों में बंधे होते हैं और चालन के लिए कोई मुक्त इलेक्ट्रॉन उपलब्ध नहीं होता है, इसलिए वे बहुत अच्छे कुचालक होते हैं।"
    },
    {
        question: "प्रश्न 47. किसी पदार्थ के चालक, अर्धचालक या कुचालक होने का निर्धारण कौन करता है?",
        answers: shuffle([
            { text: "केवल संयोजकता इलेक्ट्रॉनों की संख्या", correct: false },
            { text: "केवल परमाणुओं का आकार", correct: false },
            { text: "उसका ऊर्जा बैंड अंतराल", correct: true },
            { text: "उसका गलनांक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्जित ऊर्जा बैंड अंतराल का मान ही सबसे मौलिक मानदंड है जो इन तीन प्रकार के पदार्थों में भेद करता है।"
    },
    {
        question: "प्रश्न 48. N-प्रकार के अर्धचालक में, दाता आयन होते हैं:",
        answers: shuffle([
            { text: "गतिशील और धनात्मक", correct: false },
            { text: "स्थिर और धनात्मक", correct: true },
            { text: "गतिशील और ऋणात्मक", correct: false },
            { text: "स्थिर और ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दाता परमाणु जब अपना इलेक्ट्रॉन दान कर देता है, तो वह एक धनात्मक आयन बन जाता है, लेकिन यह आयन क्रिस्टल जालक में अपनी जगह पर स्थिर रहता है और गति नहीं करता।"
    },
    {
        question: "प्रश्न 49. P-प्रकार के अर्धचालक में, ग्राही आयन होते हैं:",
        answers: shuffle([
            { text: "गतिशील और धनात्मक", correct: false },
            { text: "स्थिर और धनात्मक", correct: false },
            { text: "गतिशील और ऋणात्मक", correct: false },
            { text: "स्थिर और ऋणात्मक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्राही परमाणु जब एक इलेक्ट्रॉन ग्रहण कर लेता है, तो वह एक ऋणात्मक आयन बन जाता है, लेकिन यह आयन भी क्रिस्टल जालक में स्थिर रहता है।"
    },
    {
        question: "प्रश्न 50. मानव शरीर विद्युत का ________ है।",
        answers: shuffle([
            { text: "एक अच्छा चालक", correct: false },
            { text: "एक अच्छा कुचालक", correct: false },
            { text: "एक अर्धचालक", correct: false },
            { text: "परिस्थितियों के आधार पर एक चालक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव शरीर में आयनों युक्त तरल पदार्थ होने के कारण यह विद्युत का चालन कर सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> शुष्क त्वचा का प्रतिरोध अधिक होता है, लेकिन गीली होने पर यह बहुत कम हो जाता है, जिससे यह एक अच्छा चालक बन जाता है।"
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