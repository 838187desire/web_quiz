const questions = [
    {
        topHeading: "विद्युत विभवांतर पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. विद्युत विभव की SI इकाई क्या है?",
        answers: shuffle([
            { text: "एम्पीयर", correct: false },
            { text: "कूलॉम", correct: false },
            { text: "जूल प्रति कूलॉम", correct: true },
            { text: "न्यूटन प्रति कूलॉम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत विभव को एकांक धन आवेश को अनंत से किसी बिंदु तक लाने में किए गए कार्य के रूप में परिभाषित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, इसकी इकाई <b>जूल प्रति कूलॉम</b> होती है, जिसे <b>वोल्ट</b> भी कहा जाता है"
    },
    {
        question: "प्रश्न 2. विभवांतर को मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "एमीटर", correct: false },
            { text: "गैल्वेनोमीटर", correct: false },
            { text: "वोल्टमीटर", correct: true },
            { text: "विभवमापी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>वोल्टमीटर</b> एक ऐसा उपकरण है जिसका उपयोग किसी परिपथ के दो बिंदुओं के बीच विभवांतर (वोल्टेज) को मापने के लिए किया जाता है"
    },
    {
        question: "प्रश्न 3. किसी परिपथ में वोल्टमीटर को कैसे जोड़ा जाता है?",
        answers: shuffle([
            { text: "श्रेणीक्रम में", correct: false },
            { text: "समांतर क्रम में", correct: true },
            { text: "किसी भी क्रम में", correct: false },
            { text: "पहले श्रेणी फिर समांतर में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्टमीटर को हमेशा उन दो बिंदुओं के <b>समांतर क्रम</b> में जोड़ा जाता है जिनके बीच विभवांतर मापना होता है, ताकि वह सही वोल्टेज माप सके"
    },
    {
        question: "प्रश्न 4. एक आदर्श वोल्टमीटर का प्रतिरोध कितना होना चाहिए?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "बहुत कम", correct: false },
            { text: "एक ओम", correct: false },
            { text: "अनंत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक <b>आदर्श वोल्टमीटर</b> का प्रतिरोध <b>अनंत</b> होना चाहिए ताकि वह परिपथ से कोई धारा न ले और विभवांतर का सटीक मान प्रदान कर सके"
    },
    {
        question: "प्रश्न 5. विद्युत धारा का प्रवाह होता है?",
        answers: shuffle([
            { text: "निम्न विभव से उच्च विभव की ओर", correct: false },
            { text: "उच्च विभव से निम्न विभव की ओर", correct: true },
            { text: "केवल एक ही दिशा में", correct: false },
            { text: "विभव पर निर्भर नहीं करता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारंपरिक रूप से, धन आवेश का प्रवाह <b>उच्च विभव</b> वाले बिंदु से <b>निम्न विभव</b> वाले बिंदु की ओर होता है, जिसे विद्युत धारा की दिशा माना जाता है"
    },
    {
        question: "प्रश्न 6. पृथ्वी का विभव पारंपरिक रूप से कितना माना जाता है?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "एक वोल्ट", correct: false },
            { text: "शून्य", correct: true },
            { text: "सौ वोल्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी एक बहुत बड़ा चालक है और इसकी धारिता बहुत अधिक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> गणना में सुविधा के लिए, पृथ्वी के विभव को संदर्भ के रूप में <b>शून्य</b> माना जाता है"
    },
    {
        question: "प्रश्न 7. विद्युत विभव एक _________ राशि है।",
        answers: shuffle([
            { text: "सदिश", correct: false },
            { text: "अदिश", correct: true },
            { text: "प्रदेश (टेंसर)", correct: false },
            { text: "न तो सदिश न अदिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत विभव एक <b>अदिश राशि</b> है क्योंकि इसे व्यक्त करने के लिए केवल परिमाण की आवश्यकता होती है, दिशा की नहीं"
    },
    {
        question: "प्रश्न 8. समविभव पृष्ठ (Equipotential Surface) पर किन्हीं दो बिंदुओं के बीच विभवांतर कितना होता है?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "शून्य", correct: true },
            { text: "एक वोल्ट", correct: false },
            { text: "पृष्ठ के आकार पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>समविभव पृष्ठ</b> एक ऐसा पृष्ठ होता है जिसके प्रत्येक बिंदु पर विभव का मान समान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, इस पृष्ठ पर किन्हीं भी दो बिंदुओं के बीच कोई विभवांतर <b>नहीं होता है</b>"
    },
    {
        question: "प्रश्न 9. समविभव पृष्ठ पर किसी आवेश को एक बिंदु से दूसरे बिंदु तक ले जाने में किया गया कार्य कितना होता है?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "शून्य", correct: true },
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि समविभव पृष्ठ पर विभवांतर <b>शून्य</b> होता है, और कार्य (W) = आवेश (q) × विभवांतर (V), इसलिए किया गया कार्य भी <b>शून्य</b> होता है"
    },
    {
        question: "प्रश्न 10. विद्युत क्षेत्र रेखाएं समविभव पृष्ठ के ________ होती हैं।",
        answers: shuffle([
            { text: "समानांतर", correct: false },
            { text: "किसी भी कोण पर", correct: false },
            { text: "लंबवत", correct: true },
            { text: "45 डिग्री के कोण पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत क्षेत्र की दिशा में विभव सबसे तेजी से घटता है, और यह दिशा हमेशा समविभव पृष्ठ के <b>लंबवत</b> होती है"
    },
    {
        question: "प्रश्न 11. किसी खोखले आवेशित चालक गोले के अंदर विभव का मान कितना होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false },
            { text: "सतह के बराबर और नियत", correct: true },
            { text: "केंद्र पर अधिकतम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खोखले चालक के अंदर विद्युत क्षेत्र <b>शून्य</b> होता है, लेकिन विभव हर जगह उतना ही होता है जितना उसकी सतह पर होता है और यह मान <b>नियत</b> रहता है"
    },
    {
        question: "प्रश्न 12. किसी बिंदु आवेश के कारण विभव दूरी के साथ कैसे परिवर्तित होता है?",
        answers: shuffle([
            { text: "दूरी के वर्ग के व्युत्क्रमानुपाती", correct: false },
            { text: "दूरी के व्युत्क्रमानुपाती", correct: true },
            { text: "दूरी के अनुक्रमानुपाती", correct: false },
            { text: "दूरी पर निर्भर नहीं करता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बिंदु आवेश के कारण विभव (V) का सूत्र V = kq/r होता है, जहाँ r आवेश से दूरी है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः विभव दूरी के <b>व्युत्क्रमानुपाती</b> होता है"
    },
    {
        question: "प्रश्न 13. विद्युत क्षेत्र और विद्युत विभव के बीच क्या संबंध है?",
        answers: shuffle([
            { text: "दोनों एक दूसरे के बराबर हैं", correct: false },
            { text: "विभव, विद्युत क्षेत्र का अवकलन है", correct: false },
            { text: "विद्युत क्षेत्र, ऋणात्मक विभव प्रवणता के बराबर है", correct: true },
            { text: "दोनों असंबंधित हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत क्षेत्र (E) की दिशा में दूरी के साथ विभव में परिवर्तन की दर (<b>विभव प्रवणता</b>) को विद्युत क्षेत्र की तीव्रता कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> सूत्र है: E = -dV/dr"
    },
    {
        question: "प्रश्न 14. विभव प्रवणता (Potential Gradient) की इकाई क्या है?",
        answers: shuffle([
            { text: "वोल्ट-मीटर", correct: false },
            { text: "वोल्ट प्रति मीटर", correct: true },
            { text: "जूल-मीटर", correct: false },
            { text: "न्यूटन-मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभव प्रवणता दूरी के साथ विभव में परिवर्तन की दर है, इसलिए इसकी इकाई <b>वोल्ट प्रति मीटर (V/m)</b> होती है, जो न्यूटन प्रति कूलॉम (N/C) के बराबर भी है"
    },
    {
        question: "प्रश्न 15. यदि दो आवेशित चालकों को एक तार से जोड़ा जाता है, तो आवेश का प्रवाह तब तक होता है जब तक कि...?",
        answers: shuffle([
            { text: "दोनों पर आवेश बराबर न हो जाए", correct: false },
            { text: "दोनों का विभव बराबर न हो जाए", correct: true },
            { text: "दोनों का आकार बराबर न हो जाए", correct: false },
            { text: "दोनों का प्रतिरोध बराबर न हो जाए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेश का प्रवाह हमेशा उच्च विभव से निम्न विभव की ओर होता है और यह प्रवाह तब रुकता है जब दोनों चालकों का <b>विभव समान</b> हो जाता है"
    },
    {
        question: "प्रश्न 16. किसी सेल का विद्युत वाहक बल (EMF) क्या मापता है?",
        answers: shuffle([
            { text: "सेल का आंतरिक प्रतिरोध", correct: false },
            { text: "सेल द्वारा दी गई ऊर्जा प्रति एकांक आवेश", correct: true },
            { text: "सेल से बहने वाली धारा", correct: false },
            { text: "सेल की शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विद्युत वाहक बल (EMF)</b> सेल द्वारा पूरे परिपथ में एकांक आवेश को प्रवाहित करने के लिए दी गई <b>ऊर्जा</b> है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी इकाई भी वोल्ट होती है"
    },
    {
        question: "प्रश्न 17. टर्मिनल विभवांतर और सेल के विद्युत वाहक बल (EMF) में क्या संबंध है?",
        answers: shuffle([
            { text: "टर्मिनल विभवांतर हमेशा EMF के बराबर होता है", correct: false },
            { text: "टर्मिनल विभवांतर हमेशा EMF से अधिक होता है", correct: false },
            { text: "जब सेल से धारा ली जाती है तो टर्मिनल विभवांतर EMF से कम होता है", correct: true },
            { text: "जब सेल से धारा ली जाती है तो टर्मिनल विभवांतर EMF से अधिक होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सेल डिस्चार्ज हो रहा होता है, तो उसके आंतरिक प्रतिरोध के कारण कुछ विभव पतन होता है, जिससे बाहरी परिपथ को मिलने वाला विभवांतर (टर्मिनल वोल्टेज) उसके EMF से <b>कम</b> हो जाता है"
    },
    {
        question: "प्रश्न 18. किरचॉफ का द्वितीय नियम (वोल्टता नियम) किस संरक्षण सिद्धांत पर आधारित है?",
        answers: shuffle([
            { text: "आवेश संरक्षण", correct: false },
            { text: "ऊर्जा संरक्षण", correct: true },
            { text: "संवेग संरक्षण", correct: false },
            { text: "द्रव्यमान संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किरचॉफ का वोल्टता नियम यह बताता है कि किसी भी बंद लूप में सभी विभवांतरों का बीजगणितीय योग शून्य होता है, जो <b>ऊर्जा संरक्षण</b> के सिद्धांत पर आधारित है"
    },
    {
        question: "प्रश्न 19. विभवमापी (Potentiometer) का उपयोग क्या मापने के लिए किया जाता है?",
        answers: shuffle([
            { text: "केवल धारा", correct: false },
            { text: "केवल प्रतिरोध", correct: false },
            { text: "किसी सेल का यथार्थ विद्युत वाहक बल", correct: true },
            { text: "केवल शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विभवमापी</b> एक ऐसा उपकरण है जो बिना कोई धारा लिए विभवांतर मापता है, इसलिए इसका उपयोग किसी सेल का <b>सटीक EMF</b> और आंतरिक प्रतिरोध ज्ञात करने के लिए किया जाता है"
    },
    {
        question: "प्रश्न 20. विभवमापी एक आदर्श वोल्टमीटर के रूप में क्यों कार्य करता है?",
        answers: shuffle([
            { text: "क्योंकि इसका प्रतिरोध शून्य होता है", correct: false },
            { text: "क्योंकि यह शून्य विक्षेप की स्थिति में माप लेता है", correct: true },
            { text: "क्योंकि यह बहुत महंगा होता है", correct: false },
            { text: "क्योंकि यह बहुत छोटा होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>संतुलन की स्थिति</b> में विभवमापी सेल से कोई धारा नहीं खींचता है, जिससे सेल के आंतरिक प्रतिरोध पर कोई विभव पतन नहीं होता और EMF का यथार्थ मान प्राप्त होता है"
    },
    {
        question: "प्रश्न 21. किसी विद्युत द्विध्रुव (Electric Dipole) के कारण उसकी निरक्षीय (equatorial) रेखा पर स्थित बिंदु पर विभव कितना होता है?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्विध्रुव के दोनों आवेशों के कारण निरक्षीय रेखा पर स्थित कोई भी बिंदु समान दूरी पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः एक आवेश के कारण धनात्मक विभव दूसरे आवेश के ऋणात्मक विभव को निरस्त कर देता है, जिससे कुल विभव <b>शून्य</b> होता है"
    },
    {
        question: "प्रश्न 22. किसी विद्युत द्विध्रुव के कारण उसकी अक्षीय (axial) रेखा पर विभव दूरी के साथ कैसे बदलता है?",
        answers: shuffle([
            { text: "दूरी के वर्ग के व्युत्क्रमानुपाती", correct: true },
            { text: "दूरी के व्युत्क्रमानुपाती", correct: false },
            { text: "दूरी के घन के व्युत्क्रमानुपाती", correct: false },
            { text: "दूरी पर निर्भर नहीं करता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक छोटे विद्युत द्विध्रुव के कारण उसकी अक्षीय रेखा पर स्थित दूर के बिंदुओं पर विभव (V) दूरी (r) के <b>वर्ग के व्युत्क्रमानुपाती</b> होता है (V \propto 1/r^2)"
    },
    {
        question: "प्रश्न 23. इलेक्ट्रॉन-वोल्ट (eV) किसकी इकाई है?",
        answers: shuffle([
            { text: "विभव", correct: false },
            { text: "आवेश", correct: false },
            { text: "ऊर्जा", correct: true },
            { text: "शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इलेक्ट्रॉन-वोल्ट</b> ऊर्जा की एक बहुत छोटी इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह गतिज ऊर्जा है जो एक इलेक्ट्रॉन द्वारा 1 वोल्ट के विभवांतर से त्वरित होने पर प्राप्त की जाती है"
    },
    {
        question: "प्रश्न 24. दो समविभव पृष्ठ एक दूसरे को...?",
        answers: shuffle([
            { text: "हमेशा काटते हैं", correct: false },
            { text: "कभी नहीं काटते हैं", correct: true },
            { text: "90 डिग्री पर काटते हैं", correct: false },
            { text: "45 डिग्री पर काटते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि दो समविभव पृष्ठ एक दूसरे को काटते हैं, तो कटान बिंदु पर विभव के दो मान होंगे, जो कि असंभव है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, वे <b>कभी एक दूसरे को नहीं काटते</b>"
    },
    {
        question: "प्रश्न 25. एकसमान विद्युत क्षेत्र में, समविभव पृष्ठ कैसे होते हैं?",
        answers: shuffle([
            { text: "गोलाकार", correct: false },
            { text: "बेलनाकार", correct: false },
            { text: "क्षेत्र के लंबवत समतल पृष्ठ", correct: true },
            { text: "क्षेत्र के समानांतर समतल पृष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान विद्युत क्षेत्र में, विद्युत क्षेत्र रेखाओं के <b>लंबवत समतल पृष्ठों</b> पर विभव का मान समान होता है"
    },
    {
        question: "प्रश्न 26. जब किसी संधारित्र (Capacitor) को आवेशित किया जाता है, तो उसकी प्लेटों के बीच विभवांतर...?",
        answers: shuffle([
            { text: "घटता है", correct: false },
            { text: "बढ़ता है", correct: true },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "शून्य हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संधारित्र पर जैसे-जैसे आवेश की मात्रा बढ़ती है, उसकी प्लेटों के बीच विभवांतर भी उसी अनुपात में <b>बढ़ता है</b> (Q \propto V)"
    },
    {
        question: "प्रश्न 27. किसी चालक के अंदर स्थिरवैद्युतिकी में, विभव होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "परिवर्तनशील", correct: false },
            { text: "नियत", correct: true },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थिरवैद्युतिकी की स्थिति में, चालक के अंदर विद्युत क्षेत्र शून्य होता है, जिसके कारण उसके अंदर प्रत्येक बिंदु पर विभव <b>नियत</b> और सतह के विभव के बराबर होता है"
    },
    {
        question: "प्रश्न 28. धनावेश के समीप किसी बिंदु पर विभव होता है?",
        answers: shuffle([
            { text: "धनात्मक", correct: true },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारंपरिक परिभाषा के अनुसार, एक धनावेश के कारण उसके आस-पास के क्षेत्र में विभव <b>धनात्मक</b> होता है"
    },
    {
        question: "प्रश्न 29. ऋणावेश के समीप किसी बिंदु पर विभव होता है?",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: true },
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक ऋणावेश के कारण उसके आस-पास के क्षेत्र में विभव <b>ऋणात्मक</b> होता है"
    },
    {
        question: "प्रश्न 30. विभवांतर की विमा क्या है?",
        answers: shuffle([
            { text: "[ML^2T^{-3}A^{-1}]", correct: true },
            { text: "[MLT^{-2}A^{-1}]", correct: false },
            { text: "[ML^2T^{-2}A^{-2}]", correct: false },
            { text: "[ML^2T^{-3}A^{-2}]", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभवांतर (V) = कार्य (W) / आवेश (q)।<br><br><i class='fa-solid fa-angles-right icon'></i> कार्य की विमा [ML^2T^{-2}] और आवेश की विमा [AT] होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः V की विमा <b>[ML^2T^{-3}A^{-1}]</b> होगी"
    },
    {
        question: "प्रश्न 31. घरेलू विद्युत परिपथ में 'फेज' तार और 'न्यूट्रल' तार के बीच विभवांतर लगभग कितना होता है?",
        answers: shuffle([
            { text: "110 वोल्ट", correct: false },
            { text: "220 वोल्ट", correct: true },
            { text: "440 वोल्ट", correct: false },
            { text: "0 वोल्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में घरेलू आपूर्ति के लिए मानक वोल्टेज <b>220 वोल्ट</b> है।<br><br><i class='fa-solid fa-angles-right icon'></i> फेज तार उच्च विभव (220 \text{ V}) पर और न्यूट्रल तार शून्य विभव पर होता है"
    },
    {
        question: "प्रश्न 32. शुष्क सेल (Dry Cell) के टर्मिनलों के बीच विभवांतर किसके द्वारा उत्पन्न होता है?",
        answers: shuffle([
            { text: "ऊष्मीय अभिक्रिया", correct: false },
            { text: "प्रकाशीय अभिक्रिया", correct: false },
            { text: "रासायनिक अभिक्रिया", correct: true },
            { text: "नाभिकीय अभिक्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेल के अंदर होने वाली <b>रासायनिक अभिक्रियाएं</b> रासायनिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करती हैं, जिससे उसके इलेक्ट्रोडों के बीच एक विभवांतर स्थापित होता है"
    },
    {
        question: "प्रश्न 33. यदि किसी चालक में धारा प्रवाहित हो रही हो, तो उसके सिरों के बीच विभवांतर आवश्यक रूप से...?",
        answers: shuffle([
            { text: "शून्य होगा", correct: false },
            { text: "अशून्य होगा", correct: true },
            { text: "अनंत होगा", correct: false },
            { text: "नियत रहेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम (V=IR) के अनुसार, यदि किसी प्रतिरोध वाले चालक में अशून्य धारा (I) प्रवाहित हो रही है, तो उसके सिरों पर विभवांतर (V) भी <b>अशून्य</b> होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> (अतिचालक को छोड़कर)"
    },
    {
        question: "प्रश्न 34. तड़ित (बिजली) का गिरना उच्च ________ का एक उदाहरण है।",
        answers: shuffle([
            { text: "प्रतिरोध", correct: false },
            { text: "धारिता", correct: false },
            { text: "विभवांतर", correct: true },
            { text: "प्रेरकत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादलों और पृथ्वी के बीच या दो बादलों के बीच बहुत अधिक <b>विभवांतर</b> उत्पन्न हो जाने के कारण हवा के माध्यम से विद्युत का विसर्जन होता है, जिसे तड़ित कहते हैं"
    },
    {
        question: "प्रश्न 35. दो बिंदुओं के बीच विभवांतर को कभी-कभी क्या कहा जाता है?",
        answers: shuffle([
            { text: "धारा पतन", correct: false },
            { text: "प्रतिरोध पतन", correct: false },
            { text: "विभव पतन (Voltage Drop)", correct: true },
            { text: "शक्ति पतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी प्रतिरोधी अवयव से धारा गुजरती है, तो उसके सिरों पर विभव में कमी आती है, जिसे <b>विभव पतन या वोल्टेज ड्रॉप</b> कहा जाता है"
    },
    {
        question: "प्रश्न 36. किसी आवेशित कण को कम विभव से उच्च विभव तक ले जाने में विद्युत क्षेत्र के विरुद्ध कार्य करना पड़ता है, यह कार्य कण की _________ में परिवर्तित हो जाता है।",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "स्थितिज ऊर्जा", correct: true },
            { text: "ऊष्मीय ऊर्जा", correct: false },
            { text: "नाभिकीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत क्षेत्र के विरुद्ध किया गया कार्य उस कण में विद्युत <b>स्थितिज ऊर्जा</b> के रूप में संचित हो जाता है"
    },
    {
        question: "प्रश्न 37. यदि किसी बिंदु पर विद्युत क्षेत्र शून्य है, तो उस बिंदु पर विभव आवश्यक रूप से होगा?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false },
            { text: "नियत", correct: true },
            { text: "धनात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि विद्युत क्षेत्र शून्य है (E=0), तो विभव प्रवणता (-dV/dr) भी शून्य होगी, जिसका अर्थ है कि विभव दूरी के साथ बदल नहीं रहा है, अर्थात वह <b>नियत</b> है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शून्य भी हो सकता है, पर आवश्यक नहीं"
    },
    {
        question: "प्रश्न 38. यदि किसी क्षेत्र में विभव नियत है, तो उस क्षेत्र में विद्युत क्षेत्र की तीव्रता होगी?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "शून्य", correct: true },
            { text: "नियत लेकिन अशून्य", correct: false },
            { text: "परिवर्तनशील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि विभव नियत है (V=\text{constant}), तो दूरी के साथ उसमें कोई परिवर्तन नहीं होता (dV/dr=0)।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि E = -dV/dr, इसलिए विद्युत क्षेत्र की तीव्रता <b>शून्य</b> होगी"
    },
    {
        question: "प्रश्न 39. एक बिंदु से दूसरे बिंदु तक 2 कूलॉम आवेश ले जाने में यदि 10 जूल कार्य करना पड़े, तो उन बिंदुओं के बीच विभवांतर कितना है?",
        answers: shuffle([
            { text: "20 वोल्ट", correct: false },
            { text: "5 वोल्ट", correct: true },
            { text: "12 वोल्ट", correct: false },
            { text: "8 वोल्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभवांतर V = \text{किया गया कार्य } (W) / \text{आवेश } (q)।<br><br><i class='fa-solid fa-angles-right icon'></i> V = 10 \text{ जूल } / 2 \text{ कूलॉम } = 5 \text{ वोल्ट}"
    },
    {
        question: "प्रश्न 40. फैराडे का पिंजरा (Faraday Cage) किस सिद्धांत पर काम करता है?",
        answers: shuffle([
            { text: "चालक के अंदर विद्युत क्षेत्र शून्य होता है", correct: true },
            { text: "चालक के अंदर विभव शून्य होता है", correct: false },
            { text: "चालक के अंदर आवेश शून्य होता है", correct: false },
            { text: "चालक के अंदर प्रतिरोध शून्य होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फैराडे पिंजरा</b> एक बंद धात्विक खोल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाहरी विद्युत क्षेत्र के प्रभाव में, इसके अंदर <b>विद्युत क्षेत्र शून्य</b> रहता है, यद्यपि विभव नियत होता है"
    },
    {
        question: "प्रश्न 41. विद्युत विभव का मान निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "आवेश की मात्रा पर", correct: false },
            { text: "आवेश से दूरी पर", correct: false },
            { text: "माध्यम की प्रकृति पर", correct: false },
            { text: "परीक्षण आवेश के पथ पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत बल एक संरक्षी बल है, इसलिए दो बिंदुओं के बीच विभवांतर (या किया गया कार्य) <b>परीक्षण आवेश को ले जाने वाले पथ पर निर्भर नहीं करता है</b>, केवल प्रारंभिक और अंतिम बिंदुओं पर निर्भर करता है"
    },
    {
        question: "प्रश्न 42. वोल्ट किसकी तुल्य इकाई है?",
        answers: shuffle([
            { text: "जूल × कूलॉम", correct: false },
            { text: "जूल / कूलॉम", correct: true },
            { text: "कूलॉम / जूल", correct: false },
            { text: "न्यूटन / कूलॉम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभव की परिभाषा V=W/q के अनुसार, <b>1 वोल्ट = 1 \text{ जूल } / 1 \text{ कूलॉम}</b>"
    },
    {
        question: "प्रश्न 43. किसी चालक की धारिता और उस पर आवेश के कारण उत्पन्न विभव में क्या संबंध है?",
        answers: shuffle([
            { text: "धारिता, विभव के अनुक्रमानुपाती होती है", correct: false },
            { text: "धारिता, विभव के व्युत्क्रमानुपाती होती है", correct: false },
            { text: "विभव, धारिता के अनुक्रमानुपाती होता है", correct: false },
            { text: "विभव, आवेश के अनुक्रमानुपाती होता है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी चालक के लिए, उस पर आवेश (Q) बढ़ाने से उसका विभव (V) भी उसी अनुपात में <b>बढ़ता है</b> (Q \propto V), और Q = CV, जहाँ C (धारिता) एक नियतांक है"
    },
    {
        question: "प्रश्न 44. किसी संधारित्र की प्लेटों के बीच विभवांतर दोगुना करने पर उसमें संचित ऊर्जा हो जाएगी?",
        answers: shuffle([
            { text: "आधी", correct: false },
            { text: "दोगुनी", correct: false },
            { text: "चार गुनी", correct: true },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संधारित्र में संचित ऊर्जा U = \frac{1}{2}CV^2 होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि विभव (V) को दोगुना (2V) कर दिया जाए, तो नई ऊर्जा U' = \frac{1}{2}C(2V)^2 = 4(\frac{1}{2}CV^2) = 4U, अर्थात <b>चार गुनी</b> हो जाएगी"
    },
    {
        question: "प्रश्न 45. जब एक साबुन के बुलबुले को ऋणावेशित किया जाता है, तो उसकी त्रिज्या...?",
        answers: shuffle([
            { text: "घटती है", correct: false },
            { text: "बढ़ती है", correct: true },
            { text: "अपरिवर्तित रहती है", correct: false },
            { text: "जानकारी अपर्याप्त है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुलबुले को आवेशित करने पर, समान आवेशों के बीच <b>प्रतिकर्षण</b> के कारण सतह पर बाहर की ओर एक बल लगता है, जिससे उसकी त्रिज्या <b>बढ़ जाती है</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उसके विभव को भी प्रभावित करता है"
    },
    {
        question: "प्रश्न 46. एक बैटरी को 'डेड' या 'मृत' कब कहा जाता है?",
        answers: shuffle([
            { text: "जब उसका प्रतिरोध शून्य हो जाता है", correct: false },
            { text: "जब वह विभवांतर प्रदान करने में असमर्थ हो जाती है", correct: true },
            { text: "जब उसका आकार बदल जाता है", correct: false },
            { text: "जब वह बहुत भारी हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैटरी के अंदर की रासायनिक अभिक्रियाएं जब समाप्त हो जाती हैं, तो वह अपने टर्मिनलों के बीच आवश्यक <b>विभवांतर बनाए नहीं रख पाती</b>, जिससे वह 'डेड' हो जाती है"
    },
    {
        question: "प्रश्न 47. दो आवेशों के निकाय की विद्युत स्थितिज ऊर्जा किस पर निर्भर नहीं करती है?",
        answers: shuffle([
            { text: "आवेशों के परिमाण पर", correct: false },
            { text: "आवेशों के बीच की दूरी पर", correct: false },
            { text: "आवेशों की प्रकृति पर", correct: false },
            { text: "आवेशों को स्थापित करने के तरीके पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत स्थितिज ऊर्जा केवल निकाय की अंतिम विन्यास (आवेशों के मान और उनके बीच की दूरी) पर निर्भर करती है, इस बात पर नहीं कि उस विन्यास को <b>कैसे प्राप्त किया गया है</b>"
    },
    {
        question: "प्रश्न 48. किसी चालक का पृष्ठ हमेशा होता है?",
        answers: shuffle([
            { text: "समदाबीय पृष्ठ", correct: false },
            { text: "समतापीय पृष्ठ", correct: false },
            { text: "समविभव पृष्ठ", correct: true },
            { text: "समायनिक पृष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थिरवैद्युतिकी में, आवेश चालक की सतह पर इस प्रकार वितरित होता है कि पूरी सतह पर विभव का मान एकसमान हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, यह एक <b>समविभव पृष्ठ</b> होता है"
    },
    {
        question: "प्रश्न 49. एक वोल्ट बराबर होता है?",
        answers: shuffle([
            { text: "एक जूल", correct: false },
            { text: "एक न्यूटन प्रति कूलॉम", correct: false },
            { text: "एक जूल प्रति कूलॉम", correct: true },
            { text: "एक कूलॉम प्रति जूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभव की परिभाषा V=W/q के अनुसार, <b>1 वोल्ट = 1 \text{ जूल } / 1 \text{ कूलॉम}</b>"
    },
    {
        question: "प्रश्न 50. किसी सेल का आंतरिक प्रतिरोध बढ़ने से उसके द्वारा दिए जाने वाले टर्मिनल विभवांतर पर क्या प्रभाव पड़ेगा (जब धारा ली जा रही हो)?",
        answers: shuffle([
            { text: "यह बढ़ेगा", correct: false },
            { text: "यह घटेगा", correct: true },
            { text: "यह अपरिवर्तित रहेगा", correct: false },
            { text: "यह शून्य हो जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टर्मिनल विभवांतर V = E - Ir होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि आंतरिक प्रतिरोध (r) बढ़ता है, तो विभव पतन (Ir) का मान बढ़ेगा, जिससे V का मान <b>घट जाएगा</b>"
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