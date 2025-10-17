const questions = [
    {
        topHeading: "विद्युत धारा पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. सौर सेल (Solar Cell) किस सिद्धांत पर कार्य करते हैं?",
        answers: shuffle([
            { text: "फोटोवोल्टिक प्रभाव", correct: true },
            { text: "ऊष्मीय प्रभाव", correct: false },
            { text: "रासायनिक प्रभाव", correct: false },
            { text: "चुंबकीय प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर सेल फोटोवोल्टिक प्रभाव के सिद्धांत पर कार्य करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें सूर्य के प्रकाश (फोटॉन) को सीधे विद्युत ऊर्जा में परिवर्तित किया जाता है।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से कौन एक अचालक (Insulator) नहीं है?",
        answers: shuffle([
            { text: "ग्रेफाइट", correct: true },
            { text: "कांच", correct: false },
            { text: "रबर", correct: false },
            { text: "कागज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेफाइट कार्बन का एक अपरूप है और इसमें मुक्त इलेक्ट्रॉन होने के कारण यह विद्युत का सुचालक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अन्य सभी अचालक हैं।"
    },
    {
        question: "प्रश्न 3. जब कांच की छड़ को रेशम से रगड़ा जाता है, तो छड़ पर कौन सा आवेश आता है?",
        answers: shuffle([
            { text: "धनावेश", correct: true },
            { text: "ऋणावेश", correct: false },
            { text: "कोई आवेश नहीं", correct: false },
            { text: "पहले धनावेश फिर ऋणावेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कांच की छड़ को रेशम से रगड़ा जाता है, तो कांच की छड़ से इलेक्ट्रॉन निकलकर रेशम में चले जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे कांच की छड़ पर धनावेश और रेशम पर ऋणावेश आ जाता है।"
    },
    {
        question: "प्रश्न 4. किसी आवेशित खोखले गोले के अंदर विद्युत क्षेत्र की तीव्रता कितनी होती है?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "एकरूप", correct: false },
            { text: "शून्य", correct: true },
            { text: "बाहरी सतह के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फैराडे के पिंजरे (Faraday Cage) के सिद्धांत के अनुसार, किसी भी आवेशित खोखले चालक के अंदर विद्युत क्षेत्र शून्य होता है।"
    },
    {
        question: "प्रश्न 5. व्हीटस्टोन सेतु (Wheatstone Bridge) का उपयोग क्या मापने के लिए किया जाता है?",
        answers: shuffle([
            { text: "धारा", correct: false },
            { text: "विभवांतर", correct: false },
            { text: "अज्ञात प्रतिरोध", correct: true },
            { text: "शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्हीटस्टोन सेतु एक परिपथ व्यवस्था है जिसका उपयोग बहुत सटीकता से एक अज्ञात प्रतिरोध का मान ज्ञात करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 6. किसी संधारित्र (Capacitor) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "धारा उत्पन्न करना", correct: false },
            { text: "धारा को सीमित करना", correct: false },
            { text: "विद्युत आवेश को संग्रहीत करना", correct: true },
            { text: "वोल्टेज को बढ़ाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संधारित्र एक ऐसा उपकरण है जो विद्युत ऊर्जा को विद्युत क्षेत्र के रूप में संग्रहीत करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग आवेश को स्टोर करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 7. धारिता (Capacitance) का SI मात्रक क्या है?",
        answers: shuffle([
            { text: "हेनरी", correct: false },
            { text: "टेस्ला", correct: false },
            { text: "फैरड", correct: true },
            { text: "वेबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संधारित्र की धारिता का SI मात्रक फैरड (Farad) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> व्यवहार में इसके छोटे मात्रकों जैसे माइक्रोफैरड (μF) और पिकोफैरड (pF) का उपयोग होता है।"
    },
    {
        question: "प्रश्न 8. घरेलू वायरिंग में 'अर्थिंग' (Earthing) का क्या उद्देश्य है?",
        answers: shuffle([
            { text: "बिजली का बिल कम करना", correct: false },
            { text: "वोल्टेज को स्थिर रखना", correct: false },
            { text: "सुरक्षा उपाय के रूप में", correct: true },
            { text: "फ्यूज को जलने से बचाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्थिंग एक सुरक्षा उपाय है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उपकरण के धात्विक आवरण से किसी भी लीकेज करंट को जमीन में भेज देता है, जिससे बिजली के झटके का खतरा समाप्त हो जाता है।"
    },
    {
        question: "प्रश्न 9. विद्युत क्षेत्र (Electric Field) की तीव्रता का मात्रक क्या है?",
        answers: shuffle([
            { text: "न्यूटन प्रति कूलॉम", correct: true },
            { text: "जूल प्रति कूलॉम", correct: false },
            { text: "वोल्ट प्रति सेकंड", correct: false },
            { text: "कूलॉम प्रति मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत क्षेत्र की तीव्रता को किसी बिंदु पर रखे एकांक धन आवेश पर लगने वाले बल के रूप में परिभाषित किया जाता है (E = F/q), इसलिए इसका मात्रक न्यूटन प्रति कूलॉम (N/C) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका एक अन्य मात्रक वोल्ट प्रति मीटर (V/m) भी है।"
    },
    {
        question: "प्रश्न 10. एक आदर्श वोल्टेज स्रोत (Ideal Voltage Source) का आंतरिक प्रतिरोध कितना होता है?",
        answers: shuffle([
            { text: "शून्य", correct: true },
            { text: "एक", correct: false },
            { text: "बहुत अधिक", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श वोल्टेज स्रोत का आंतरिक प्रतिरोध शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ताकि वह बाहरी लोड पर ध्यान दिए बिना अपने टर्मिनलों पर एक स्थिर वोल्टेज प्रदान कर सके।"
    },
    {
        question: "प्रश्न 11. प्रतिरोधों के समांतर क्रम संयोजन में क्या समान रहता है?",
        answers: shuffle([
            { text: "धारा", correct: false },
            { text: "विभवांतर", correct: true },
            { text: "आवेश", correct: false },
            { text: "शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रतिरोधों को समांतर क्रम में जोड़ा जाता है, तो प्रत्येक प्रतिरोध के सिरों पर विभवांतर (वोल्टेज) समान रहता है।"
    },
    {
        question: "प्रश्न 12. प्रतिरोधों के श्रेणीक्रम संयोजन में क्या समान रहता है?",
        answers: shuffle([
            { text: "धारा", correct: true },
            { text: "विभवांतर", correct: false },
            { text: "प्रतिरोध", correct: false },
            { text: "ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रतिरोधों को श्रेणीक्रम में जोड़ा जाता है, तो परिपथ के प्रत्येक भाग में बहने वाली धारा का मान समान रहता है।"
    },
    {
        question: "प्रश्न 13. विद्युत लेपन (Electroplating) विद्युत धारा के किस प्रभाव पर आधारित है?",
        answers: shuffle([
            { text: "ऊष्मीय प्रभाव", correct: false },
            { text: "चुंबकीय प्रभाव", correct: false },
            { text: "रासायनिक प्रभाव", correct: true },
            { text: "प्रकाशीय प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत लेपन एक प्रक्रिया है जिसमें विद्युत धारा का उपयोग करके एक धातु की सतह पर दूसरी धातु की पतली परत चढ़ाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विद्युत धारा के रासायनिक प्रभाव पर आधारित है।"
    },
    {
        question: "प्रश्न 14. किसी चालक की लंबाई दोगुनी करने पर उसका प्रतिरोध हो जाएगा?",
        answers: shuffle([
            { text: "आधा", correct: false },
            { text: "दोगुना", correct: true },
            { text: "चार गुना", correct: false },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी चालक का प्रतिरोध (R) उसकी लंबाई (L) के अनुक्रमानुपाती होता है (R ∝ L)।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः लंबाई को दोगुना करने पर प्रतिरोध भी दोगुना हो जाएगा।"
    },
    {
        question: "प्रश्न 15. किसी चालक तार का अनुप्रस्थ काट क्षेत्रफल दोगुना करने पर उसका प्रतिरोध हो जाएगा?",
        answers: shuffle([
            { text: "आधा", correct: true },
            { text: "दोगुना", correct: false },
            { text: "चार गुना", correct: false },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी चालक का प्रतिरोध (R) उसके अनुप्रस्थ काट क्षेत्रफल (A) के व्युत्क्रमानुपाती होता है (R ∝ 1/A)।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः क्षेत्रफल को दोगुना करने पर प्रतिरोध आधा हो जाएगा।"
    },
    {
        question: "प्रश्न 16. डायोड का उपयोग मुख्य रूप से किस कार्य के लिए किया जाता है?",
        answers: shuffle([
            { text: "प्रवर्धन (Amplification)", correct: false },
            { text: "दोलन (Oscillation)", correct: false },
            { text: "दिष्टकरण (Rectification)", correct: true },
            { text: "मॉडुलन (Modulation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायोड एक अर्धचालक युक्ति है जो धारा को केवल एक दिशा में प्रवाहित होने देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके इस गुण का उपयोग मुख्य रूप से AC को DC में बदलने (दिष्टकरण) के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 17. वह बल जो विद्युत आवेशों के बीच कार्य करता है, कहलाता है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "नाभिकीय बल", correct: false },
            { text: "विद्युत चुंबकीय बल", correct: true },
            { text: "घर्षण बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थिर या गतिमान विद्युत आवेशों के बीच लगने वाले बल को विद्युत चुंबकीय बल कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे कूलॉम के नियम द्वारा वर्णित किया जाता है।"
    },
    {
        question: "प्रश्न 18. एमसीबी (MCB) का पूर्ण रूप क्या है?",
        answers: shuffle([
            { text: "मिनिएचर सर्किट ब्रेकर", correct: true },
            { text: "मेन करंट ब्रेकर", correct: false },
            { text: "मैक्सिमम करंट ब्रेकर", correct: false },
            { text: "मेन सर्किट बोर्ड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> MCB का पूरा नाम मिनिएचर सर्किट ब्रेकर (Miniature Circuit Breaker) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक स्वचालित स्विच है जो ओवरलोड या शॉर्ट सर्किट की स्थिति में परिपथ को बंद कर देता है।"
    },
    {
        question: "प्रश्न 19. शॉर्ट सर्किट के समय परिपथ में धारा का मान...?",
        answers: shuffle([
            { text: "शून्य हो जाता है", correct: false },
            { text: "बहुत कम हो जाता है", correct: false },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "बहुत अधिक बढ़ जाता है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शॉर्ट सर्किट तब होता है जब फेज और न्यूट्रल तार सीधे संपर्क में आ जाते हैं, जिससे परिपथ का प्रतिरोध लगभग शून्य हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और धारा का मान बहुत तेजी से बढ़ जाता है।"
    },
    {
        question: "प्रश्न 20. विद्युत ऊर्जा को ध्वनि ऊर्जा में कौन सा उपकरण परिवर्तित करता है?",
        answers: shuffle([
            { text: "माइक्रोफोन", correct: false },
            { text: "लाउडस्पीकर", correct: true },
            { text: "सितार", correct: false },
            { text: "सौर सेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाउडस्पीकर एक ऐसा उपकरण है जो विद्युत संकेतों (विद्युत ऊर्जा) को ध्वनि तरंगों (ध्वनि ऊर्जा) में परिवर्तित करता है।"
    },
    {
        question: "प्रश्न 21. ध्वनि ऊर्जा को विद्युत ऊर्जा में कौन सा उपकरण परिवर्तित करता है?",
        answers: shuffle([
            { text: "लाउडस्पीकर", correct: false },
            { text: "एम्पलीफायर", correct: false },
            { text: "माइक्रोफोन", correct: true },
            { text: "इयरफोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइक्रोफोन एक ट्रांसड्यूसर है जो ध्वनि तरंगों (ध्वनि ऊर्जा) को विद्युत संकेतों (विद्युत ऊर्जा) में परिवर्तित करता है।"
    },
    {
        question: "प्रश्न 22. निम्नलिखित में से कौन एक विद्युत अन-ओमीय (non-ohmic) चालक है?",
        answers: shuffle([
            { text: "तांबे का तार", correct: false },
            { text: "टंगस्टन फिलामेंट", correct: false },
            { text: "डायोड", correct: true },
            { text: "मैंगनिन तार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अन-ओमीय चालक वे होते हैं जो ओम के नियम का पालन नहीं करते, अर्थात उनके लिए V और I के बीच का ग्राफ एक सीधी रेखा नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> डायोड और ट्रांजिस्टर इसके उदाहरण हैं।"
    },
    {
        question: "प्रश्न 23. बिजली के झटके से बचने के लिए पहने जाने वाले रबर के दस्ताने क्या होते हैं?",
        answers: shuffle([
            { text: "सुचालक", correct: false },
            { text: "अर्धचालक", correct: false },
            { text: "विद्युत रोधी (कुचालक)", correct: true },
            { text: "अतिचालक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रबर विद्युत का कुचालक (Insulator) होता है, अर्थात यह अपने में से होकर विद्युत धारा को प्रवाहित नहीं होने देता।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए रबर के दस्ताने बिजली के झटके से सुरक्षा प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 24. परिनालिका (Solenoid) के अंदर चुंबकीय क्षेत्र होता है?",
        answers: shuffle([
            { text: "सिरों पर अधिक", correct: false },
            { text: "केंद्र में शून्य", correct: false },
            { text: "सभी बिंदुओं पर असमान", correct: false },
            { text: "एकरूप और प्रबल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक लंबी परिनालिका के अंदर चुंबकीय क्षेत्र लगभग एकसमान और उसकी अक्ष के समांतर होता है।"
    },
    {
        question: "प्रश्न 25. कौन सा उपकरण विद्युत धारा की तापीय प्रभाव के सिद्धांत पर काम नहीं करता?",
        answers: shuffle([
            { text: "टोस्टर", correct: false },
            { text: "माइक्रोवेव ओवन", correct: true },
            { text: "इलेक्ट्रिक आयरन", correct: false },
            { text: "गीजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइक्रोवेव ओवन भोजन को गर्म करने के लिए माइक्रोवेव (एक प्रकार की विद्युत चुम्बकीय तरंग) का उपयोग करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> न कि विद्युत धारा के सीधे तापीय प्रभाव का।"
    },
    {
        question: "प्रश्न 26. एक बैटरी का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "इलेक्ट्रॉन उत्पन्न करना", correct: false },
            { text: "इलेक्ट्रॉन नष्ट करना", correct: false },
            { text: "परिपथ में विभवांतर बनाए रखना", correct: true },
            { text: "परिपथ का प्रतिरोध बढ़ाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैटरी रासायनिक ऊर्जा का उपयोग करके अपने टर्मिनलों के बीच एक स्थिर विभवांतर बनाए रखती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे परिपथ में आवेशों का प्रवाह (धारा) निरंतर बना रहता है।"
    },
    {
        question: "प्रश्न 27. किसी पदार्थ की विशिष्ट प्रतिरोधकता (Specific Resistance) किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल पदार्थ की प्रकृति पर", correct: true },
            { text: "पदार्थ की लंबाई पर", correct: false },
            { text: "पदार्थ के अनुप्रस्थ काट क्षेत्रफल पर", correct: false },
            { text: "पदार्थ के आकार पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशिष्ट प्रतिरोधकता या प्रतिरोधकता (Resistivity) पदार्थ का एक आंतरिक गुण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केवल पदार्थ की प्रकृति और तापमान पर निर्भर करता है, उसकी लंबाई या मोटाई पर नहीं।"
    },
    {
        question: "प्रश्न 28. किसी चालक की सतह पर विद्युत क्षेत्र रेखाएं होती हैं?",
        answers: shuffle([
            { text: "सतह के समानांतर", correct: false },
            { text: "सतह पर किसी भी कोण पर", correct: false },
            { text: "सतह के लंबवत", correct: true },
            { text: "सतह पर 45 डिग्री पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत क्षेत्र रेखाएं हमेशा किसी चालक की सतह के लंबवत होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> क्योंकि सतह एक समविभव पृष्ठ (equipotential surface) होती है।"
    },
    {
        question: "प्रश्न 29. फैराडे का विद्युत अपघटन का प्रथम नियम किससे संबंधित है?",
        answers: shuffle([
            { text: "इलेक्ट्रोड पर जमा पदार्थ के परमाणु भार से", correct: false },
            { text: "प्रवाहित विद्युत की मात्रा से", correct: true },
            { text: "विलयन के घनत्व से", correct: false },
            { text: "इलेक्ट्रोड के आकार से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फैराडे का प्रथम नियम कहता है कि विद्युत अपघटन के दौरान किसी इलेक्ट्रोड पर जमा या मुक्त हुए पदार्थ की मात्रा (m) परिपथ में प्रवाहित कुल आवेश (q) के अनुक्रमानुपाती होती है (m ∝ q)।"
    },
    {
        question: "प्रश्न 30. दिष्ट धारा (DC) की आवृत्ति कितनी होती है?",
        answers: shuffle([
            { text: "50 हर्ट्ज", correct: false },
            { text: "60 हर्ट्ज", correct: false },
            { text: "100 हर्ट्ज", correct: false },
            { text: "शून्य हर्ट्ज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिष्ट धारा (DC) समय के साथ अपनी दिशा नहीं बदलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसकी आवृत्ति शून्य होती है।"
    },
    {
        question: "प्रश्न 31. विद्युत धारा घनत्व (Current Density) कैसी राशि है?",
        answers: shuffle([
            { text: "अदिश", correct: false },
            { text: "सदिश", correct: true },
            { text: "प्रदेश (Tensor)", correct: false },
            { text: "विमाहीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत धारा घनत्व किसी चालक के एकांक क्षेत्रफल से अभिलंबवत गुजरने वाली धारा है और इसकी दिशा धारा की दिशा में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह एक सदिश राशि है।"
    },
    {
        question: "प्रश्न 32. तीन-पिन प्लग में सबसे मोटा पिन कौन सा होता है?",
        answers: shuffle([
            { text: "लाइव (फेज) पिन", correct: false },
            { text: "न्यूट्रल पिन", correct: false },
            { text: "अर्थ पिन", correct: true },
            { text: "सभी बराबर होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तीन-पिन प्लग में अर्थ पिन सबसे मोटा और लंबा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सुनिश्चित करता है कि उपकरण का कनेक्शन सबसे पहले अर्थ से हो और सबसे बाद में अर्थ से हटे, जिससे सुरक्षा बढ़ जाती है।"
    },
    {
        question: "प्रश्न 33. चुंबकीय फ्लक्स (Magnetic Flux) का SI मात्रक क्या है?",
        answers: shuffle([
            { text: "टेस्ला", correct: false },
            { text: "वेबर", correct: true },
            { text: "हेनरी", correct: false },
            { text: "गॉस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय फ्लक्स का SI मात्रक वेबर (Weber) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी सतह से गुजरने वाली कुल चुंबकीय क्षेत्र रेखाओं की माप है।"
    },
    {
        question: "प्रश्न 34. चुंबकीय क्षेत्र की तीव्रता का SI मात्रक क्या है?",
        answers: shuffle([
            { text: "वेबर", correct: false },
            { text: "हेनरी", correct: false },
            { text: "टेस्ला", correct: true },
            { text: "ओर्स्टेड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय क्षेत्र की तीव्रता या चुंबकीय प्रेरण का SI मात्रक टेस्ला (Tesla) है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका एक अन्य मात्रक वेबर प्रति वर्ग मीटर (Wb/m²) भी है।"
    },
    {
        question: "प्रश्न 35. जब एक धारावाही चालक को चुंबकीय क्षेत्र में रखा जाता है, तो उस पर लगने वाले बल की दिशा किस नियम से ज्ञात की जाती है?",
        answers: shuffle([
            { text: "ओम का नियम", correct: false },
            { text: "फ्लेमिंग का वाम-हस्त नियम", correct: true },
            { text: "फ्लेमिंग का दक्षिण-हस्त नियम", correct: false },
            { text: "मैक्सवेल का कॉर्क-स्क्रू नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय क्षेत्र में रखे धारावाही चालक पर लगने वाले बल की दिशा फ्लेमिंग के बाएं हाथ के नियम से ज्ञात की जाती है।"
    },
    {
        question: "प्रश्न 36. प्रत्यावर्ती धारा (AC) का शिखर मान और वर्ग माध्य मूल मान (rms value) में क्या संबंध है?",
        answers: shuffle([
            { text: "दोनों बराबर होते हैं", correct: false },
            { text: "शिखर मान rms मान से कम होता है", correct: false },
            { text: "rms मान, शिखर मान का 1/√2 गुना होता है", correct: true },
            { text: "शिखर मान, rms मान का 1/√2 गुना होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्यावर्ती धारा का वर्ग माध्य मूल मान (I_rms) उसके शिखर मान (I_peak) का 1/√2 गुना होता है। (I_rms = I_peak / √2)।"
    },
    {
        question: "प्रश्न 37. घरों में आने वाली 220V की सप्लाई क्या दर्शाती है?",
        answers: shuffle([
            { text: "शिखर वोल्टेज", correct: false },
            { text: "औसत वोल्टेज", correct: false },
            { text: "वर्ग माध्य मूल (rms) वोल्टेज", correct: true },
            { text: "तात्कालिक वोल्टेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घरों में बताई जाने वाली AC वोल्टेज या करंट हमेशा उसका वर्ग माध्य मूल (rms) मान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो समान ऊष्मा उत्पन्न करने वाली DC वोल्टेज के तुल्य होता है।"
    },
    {
        question: "प्रश्न 38. एक विद्युत परिपथ में वोल्टमीटर को कैसे जोड़ा जाता है?",
        answers: shuffle([
            { text: "श्रेणीक्रम में", correct: false },
            { text: "समांतर क्रम में", correct: true },
            { text: "कैसे भी जोड़ा जा सकता है", correct: false },
            { text: "पहले श्रेणी फिर समांतर में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्टमीटर को परिपथ के उन दो बिंदुओं के समांतर क्रम में जोड़ा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिनके बीच का विभवांतर मापना होता है।"
    },
    {
        question: "प्रश्न 39. सीबेक प्रभाव (Seebeck Effect) का उपयोग किसमें होता है?",
        answers: shuffle([
            { text: "मोटर", correct: false },
            { text: "जनरेटर", correct: false },
            { text: "थर्मोकपल (तापयुग्म)", correct: true },
            { text: "ट्रांसफॉर्मर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीबेक प्रभाव के अनुसार जब दो भिन्न धातुओं के तारों के जंक्शनों को अलग-अलग तापमान पर रखा जाता है तो एक विद्युत वाहक बल उत्पन्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी सिद्धांत पर थर्मोकपल कार्य करता है जो तापमान मापता है।"
    },
    {
        question: "प्रश्न 40. पेल्टियर प्रभाव (Peltier Effect), सीबेक प्रभाव का ________ है।",
        answers: shuffle([
            { text: "समान", correct: false },
            { text: "व्युत्क्रम (उलटा)", correct: true },
            { text: "असंबंधित", correct: false },
            { text: "एक विशेष मामला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेल्टियर प्रभाव सीबेक प्रभाव का उल्टा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें जब दो भिन्न धातुओं के जंक्शन से विद्युत धारा प्रवाहित की जाती है, तो एक जंक्शन ठंडा और दूसरा गर्म हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग रेफ्रिजरेशन में होता है।"
    },
    {
        question: "प्रश्न 41. बिजली चमकने के दौरान हवा में विशाल विद्युत धारा प्रवाहित होती है, इसका कारण हवा का ________ है।",
        answers: shuffle([
            { text: "प्रतिरोध समाप्त हो जाना", correct: false },
            { text: "आयनीकरण हो जाना", correct: true },
            { text: "दाब बढ़ जाना", correct: false },
            { text: "घनत्व कम हो जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादलों के बीच अत्यधिक विभवांतर के कारण हवा के अणु आयनित हो जाते हैं और वह विद्युत की चालक बन जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे बिजली के रूप में विशाल धारा प्रवाहित होती है।"
    },
    {
        question: "प्रश्न 42. लेड-एसिड बैटरी (कार की बैटरी) में इलेक्ट्रोलाइट के रूप में किसका उपयोग होता है?",
        answers: shuffle([
            { text: "हाइड्रोक्लोरिक एसिड", correct: false },
            { text: "नाइट्रिक एसिड", correct: false },
            { text: "सल्फ्यूरिक एसिड", correct: true },
            { text: "एसिटिक एसिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेड-एसिड संचायक सेल में तनु सल्फ्यूरिक एसिड (गंधक का अम्ल) का उपयोग विद्युत अपघट्य (इलेक्ट्रोलाइट) के रूप में किया जाता है।"
    },
    {
        question: "प्रश्न 43. जब कोई आवेशित कण एकसमान चुंबकीय क्षेत्र के लंबवत प्रवेश करता है, तो उसका पथ कैसा होता है?",
        answers: shuffle([
            { text: "सीधी रेखा", correct: false },
            { text: "परवलय (Parabola)", correct: false },
            { text: "वृत्त (Circle)", correct: true },
            { text: "सर्पिल (Helix)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय बल (लॉरेंट्ज़ बल) हमेशा कण के वेग के लंबवत कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो उसे एक वृत्ताकार पथ पर गति करने के लिए आवश्यक अभिकेंद्रीय बल प्रदान करता है।"
    },
    {
        question: "प्रश्न 44. निम्नलिखित में से कौन सी युक्ति विद्युत ऊर्जा का भंडारण नहीं करती है?",
        answers: shuffle([
            { text: "संधारित्र", correct: false },
            { text: "प्रेरक (Inductor)", correct: false },
            { text: "बैटरी", correct: false },
            { text: "प्रतिरोधक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधक विद्युत ऊर्जा का भंडारण नहीं करता है, बल्कि यह विद्युत ऊर्जा को ऊष्मा ऊर्जा के रूप में क्षय (dissipate) करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> संधारित्र विद्युत क्षेत्र में और प्रेरक चुंबकीय क्षेत्र में ऊर्जा संग्रहीत करते हैं।"
    },
    {
        question: "प्रश्न 45. एक किलोवाट-घंटा (kWh) कितने जूल के बराबर होता है?",
        answers: shuffle([
            { text: "3.6 x 10³ जूल", correct: false },
            { text: "3.6 x 10⁴ जूल", correct: false },
            { text: "3.6 x 10⁵ जूल", correct: false },
            { text: "3.6 x 10⁶ जूल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1 kWh = 1000 वाट x 3600 सेकंड = 36,00,000 वाट-सेकंड = 3.6 x 10⁶ जूल।"
    },
    {
        question: "प्रश्न 46. विद्युत आवेशों के चारों ओर का वह क्षेत्र जिसमें अन्य आवेश बल का अनुभव करते हैं, कहलाता है?",
        answers: shuffle([
            { text: "चुंबकीय क्षेत्र", correct: false },
            { text: "विद्युत क्षेत्र", correct: true },
            { text: "गुरुत्वाकर्षण क्षेत्र", correct: false },
            { text: "विभव प्रवणता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी विद्युत आवेश के आसपास का वह स्थान जहाँ तक उसका प्रभाव (आकर्षण या प्रतिकर्षण बल) महसूस किया जा सकता है, विद्युत क्षेत्र कहलाता है।"
    },
    {
        question: "प्रश्न 47. किसी बिंदु पर विद्युत विभव को ________ के रूप में परिभाषित किया गया है।",
        answers: shuffle([
            { text: "एकांक आवेश पर लगने वाला बल", correct: false },
            { text: "एकांक आवेश को अनंत से उस बिंदु तक लाने में किया गया कार्य", correct: true },
            { text: "एकांक समय में प्रवाहित आवेश", correct: false },
            { text: "एकांक क्षेत्रफल से गुजरने वाला फ्लक्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत विभव (V) को एकांक धन परीक्षण आवेश (q) को अनंत से विद्युत क्षेत्र के किसी बिंदु तक बिना त्वरण के लाने में किए गए कार्य (W) के रूप में परिभाषित किया जाता है (V = W/q)।"
    },
    {
        question: "प्रश्न 48. जब दो आवेशित वस्तुओं को एक तार से जोड़ा जाता है, तो उनके बीच धारा प्रवाहित नहीं होगी यदि...?",
        answers: shuffle([
            { text: "उनका आवेश समान हो", correct: false },
            { text: "उनकी धारिता समान हो", correct: false },
            { text: "उनका विभव समान हो", correct: true },
            { text: "उनका प्रतिरोध समान हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेश का प्रवाह हमेशा उच्च विभव से निम्न विभव की ओर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि दोनों वस्तुओं का विभव समान है, तो उनके बीच कोई विभवांतर नहीं होगा और कोई धारा प्रवाहित नहीं होगी।"
    },
    {
        question: "प्रश्न 49. मुक्त आकाश (Free Space) की परावैद्युतांक (Permittivity) का मान कितना होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false },
            { text: "एक", correct: false },
            { text: "8.854 x 10⁻¹² फैरड/मीटर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त आकाश या निर्वात की परावैद्युतांक (ε₀) एक भौतिक नियतांक है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका मान लगभग 8.854 x 10⁻¹² F/m होता है।"
    },
    {
        question: "प्रश्न 50. एक आदर्श धारा स्रोत (Ideal Current Source) का आंतरिक प्रतिरोध कितना होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "एक", correct: false },
            { text: "बहुत कम", correct: false },
            { text: "अनंत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श धारा स्रोत का आंतरिक प्रतिरोध अनंत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ताकि वह बाहरी लोड के प्रतिरोध पर ध्यान दिए बिना एक स्थिर धारा प्रदान कर सके।"
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