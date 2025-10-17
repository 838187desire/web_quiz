const questions = [
    {
        topHeading: "ऊर्जा पर आधारित 50 बहुविकल्पीय प्रश्न,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जब हम किसी वस्तु पर काम करते हैं, तो उसकी ऊर्जा...",
        answers: shuffle([
            { text: "हमेशा घटती है।", correct: false },
            { text: "हमेशा बढ़ती है।", correct: false },
            { text: "बदल सकती है।", correct: true },
            { text: "अपरिवर्तित रहती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि धनात्मक कार्य किया जाता है तो ऊर्जा बढ़ती है, और यदि ऋणात्मक कार्य किया जाता है तो ऊर्जा घटती है।"
    },
    {
        question: "प्रश्न 2. एक रोलर कोस्टर की सवारी में, उच्चतम बिंदु पर कौन सी ऊर्जा अधिकतम होती है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "स्थितिज ऊर्जा", correct: true },
            { text: "ध्वनि ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोलर कोस्टर जब अपनी चढ़ाई के उच्चतम बिंदु पर होता है, तो उसकी गति न्यूनतम और ऊँचाई अधिकतम होती है, जिससे उसकी स्थितिज ऊर्जा अधिकतम होती है।"
    },
    {
        question: "प्रश्न 3. निम्नलिखित में से किसमें गतिज ऊर्जा नहीं है?",
        answers: shuffle([
            { text: "बहता हुआ पानी", correct: false },
            { text: "चलती हुई गोली", correct: false },
            { text: "खींचा हुआ धनुष", correct: true },
            { text: "उड़ता हुआ पक्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खींचे हुए धनुष में उसकी विकृत अवस्था के कारण प्रत्यास्थ स्थितिज ऊर्जा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> गतिमान न होने के कारण इसमें गतिज ऊर्जा नहीं होती है।"
    },
    {
        question: "प्रश्न 4. \"ऊर्जा संकट\" का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "ऊर्जा का अत्यधिक उत्पादन।", correct: false },
            { text: "अनवीकरणीय ऊर्जा स्रोतों का अत्यधिक उपयोग और उनका क्षरण।", correct: true },
            { text: "नवीकरणीय स्रोतों का उपयोग।", correct: false },
            { text: "ऊर्जा संरक्षण नियमों का पालन।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम ऊर्जा के लिए मुख्य रूप से जीवाश्म ईंधन जैसे सीमित और प्रदूषणकारी स्रोतों पर निर्भर हैं, जिनका भंडार तेजी से समाप्त हो रहा है।"
    },
    {
        question: "प्रश्न 5. जब पटाखे में विस्फोट होता है, तो किस ऊर्जा का रूपांतरण होता है?",
        answers: shuffle([
            { text: "रासायनिक ऊर्जा का प्रकाश, ध्वनि और ऊष्मीय ऊर्जा में", correct: true },
            { text: "प्रकाश ऊर्जा का ध्वनि ऊर्जा में", correct: false },
            { text: "यांत्रिक ऊर्जा का रासायनिक ऊर्जा में", correct: false },
            { text: "ध्वनि ऊर्जा का प्रकाश ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पटाखे के अंदर की रासायनिक ऊर्जा विस्फोट के बाद तेजी से प्रकाश, ध्वनि और ऊष्मा में परिवर्तित हो जाती है।"
    },
    {
        question: "प्रश्न 6. एक पेंडुलम के दोलन में, माध्य स्थिति पर कौन सी ऊर्जा अधिकतम होती है?",
        answers: shuffle([
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "गतिज ऊर्जा", correct: true },
            { text: "ऊष्मीय ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब पेंडुलम अपनी माध्य स्थिति (सबसे निचला बिंदु) से गुजरता है, तो उसकी गति अधिकतम होती है, इसलिए उसकी गतिज ऊर्जा भी अधिकतम होती है।"
    },
    {
        question: "प्रश्न 7. ज्वारीय ऊर्जा का स्रोत क्या है?",
        answers: shuffle([
            { text: "सूर्य की गर्मी", correct: false },
            { text: "पृथ्वी का घूर्णन और चंद्रमा का गुरुत्वाकर्षण", correct: true },
            { text: "पृथ्वी के भीतर की गर्मी", correct: false },
            { text: "पवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्र में ज्वार-भाटा मुख्य रूप से चंद्रमा (और कुछ हद तक सूर्य) के गुरुत्वाकर्षण खिंचाव और पृथ्वी के घूर्णन के कारण उत्पन्न होते हैं।"
    },
    {
        question: "प्रश्न 8. कोयला और पेट्रोलियम किस प्रकार की ऊर्जा के उदाहरण हैं?",
        answers: shuffle([
            { text: "नवीकरणीय ऊर्जा", correct: false },
            { text: "जीवाश्म ईंधन", correct: true },
            { text: "स्वच्छ ऊर्जा", correct: false },
            { text: "परमाणु ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये लाखों साल पहले मृत जीवों के अवशेषों से बने हैं, इसलिए इन्हें जीवाश्म ईंधन कहा जाता है।"
    },
    {
        question: "प्रश्न 9. कौन सा उपकरण रासायनिक ऊर्जा को सीधे विद्युत ऊर्जा में परिवर्तित करता है?",
        answers: shuffle([
            { text: "डायनेमो", correct: false },
            { text: "विद्युत मोटर", correct: false },
            { text: "सौर सेल", correct: false },
            { text: "बैटरी (वोल्टीय सेल)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बैटरी या सेल के अंदर होने वाली रासायनिक अभिक्रियाएं रासायनिक ऊर्जा को सीधे विद्युत ऊर्जा में बदलती हैं।"
    },
    {
        question: "प्रश्न 10. स्थितिज ऊर्जा किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "वस्तु के वेग पर", correct: false },
            { text: "वस्तु के त्वरण पर", correct: false },
            { text: "वस्तु की स्थिति या विन्यास पर", correct: true },
            { text: "वस्तु पर लगे बल पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वीय स्थितिज ऊर्जा ऊँचाई (स्थिति) पर और प्रत्यास्थ स्थितिज ऊर्जा खिंचाव या संपीड़न (विन्यास) पर निर्भर करती है।"
    },
    {
        question: "प्रश्न 11. किसी निकाय की ऊर्जा में परिवर्तन की दर को क्या कहते हैं?",
        answers: shuffle([
            { text: "शक्ति", correct: true },
            { text: "बल", correct: false },
            { text: "कार्य", correct: false },
            { text: "संवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति वह दर है जिस पर ऊर्जा को स्थानांतरित या परिवर्तित किया जाता है (P=E/t)।"
    },
    {
        question: "प्रश्न 12. दो वस्तुओं का द्रव्यमान समान है, लेकिन एक का संवेग दूसरे से दोगुना है। किसकी गतिज ऊर्जा अधिक होगी?",
        answers: shuffle([
            { text: "पहले की", correct: false },
            { text: "दूसरे की (जिसका संवेग दोगुना है)", correct: true },
            { text: "दोनों की बराबर होगी", correct: false },
            { text: "निर्धारित नहीं किया जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि K=p²/2m, यदि द्रव्यमान समान है, तो जिसका संवेग अधिक होगा, उसकी गतिज ऊर्जा भी अधिक होगी।<br><br><i class='fa-solid fa-angles-right icon'></i> संवेग दोगुना होने पर गतिज ऊर्जा चार गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 13. 'हरा सोना' किसे कहा जाता है?",
        answers: shuffle([
            { text: "पेट्रोलियम", correct: false },
            { text: "कोयला", correct: false },
            { text: "वन (पेड़-पौधे)", correct: true },
            { text: "जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वनों को उनकी पारिस्थितिक और आर्थिक महत्ता के कारण 'हरा सोना' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वे जैव ऊर्जा का एक प्रमुख स्रोत हैं।"
    },
    {
        question: "प्रश्न 14. जब घर्षण द्वारा कार्य किया जाता है, तो यांत्रिक ऊर्जा का क्या होता है?",
        answers: shuffle([
            { text: "यह ऊष्मीय ऊर्जा में परिवर्तित हो जाती है।", correct: true },
            { text: "यह संरक्षित रहती है।", correct: false },
            { text: "यह बढ़ जाती है।", correct: false },
            { text: "यह रासायनिक ऊर्जा में बदल जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण एक असंरक्षी बल है जो यांत्रिक ऊर्जा को ऊष्मा के रूप में क्षय कर देता है, जिससे सतह गर्म हो जाती है।"
    },
    {
        question: "प्रश्न 15. एक चलती हुई ट्रेन में बैठे यात्री में कौन सी ऊर्जा होती है?",
        answers: shuffle([
            { text: "केवल स्थितिज ऊर्जा", correct: false },
            { text: "केवल गतिज ऊर्जा", correct: false },
            { text: "स्थितिज और गतिज ऊर्जा दोनों", correct: true },
            { text: "शून्य ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यात्री में ट्रेन के सापेक्ष शून्य गतिज ऊर्जा हो सकती है, लेकिन जमीन के सापेक्ष उसमें गतिज ऊर्जा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, जमीन से ऊंचाई के कारण उसमें स्थितिज ऊर्जा भी होती है।"
    },
    {
        question: "प्रश्न 16. बायोगैस का मुख्य घटक क्या है?",
        answers: shuffle([
            { text: "इथेन", correct: false },
            { text: "प्रोपेन", correct: false },
            { text: "ब्यूटेन", correct: false },
            { text: "मीथेन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बायोगैस मुख्य रूप से मीथेन (लगभग 50-75%) और कार्बन डाइऑक्साइड का मिश्रण है, जो जैविक पदार्थों के अवायवीय अपघटन से उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 17. ऊर्जा का सबसे बड़ा प्राकृतिक स्रोत क्या है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "चंद्रमा", correct: false },
            { text: "सूर्य", correct: true },
            { text: "महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी पर लगभग सभी प्रकार की ऊर्जा (जीवाश्म ईंधन, पवन, जल) का अंतिम स्रोत सूर्य ही है।"
    },
    {
        question: "प्रश्न 18. जब कोई वस्तु किसी सतह पर लुढ़कती है, तो उसमें कौन सी ऊर्जा होती है?",
        answers: shuffle([
            { text: "केवल रैखिक गतिज ऊर्जा", correct: false },
            { text: "केवल घूर्णी गतिज ऊर्जा", correct: false },
            { text: "रैखिक और घूर्णी दोनों गतिज ऊर्जा", correct: true },
            { text: "केवल स्थितिज ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लुढ़कने वाली वस्तु में आगे बढ़ने के कारण रैखिक गतिज ऊर्जा और अपने अक्ष पर घूमने के कारण घूर्णी गतिज ऊर्जा, दोनों होती हैं।"
    },
    {
        question: "प्रश्न 19. 'ब्राउन एनर्जी' शब्द का प्रयोग किसके लिए किया जाता है?",
        answers: shuffle([
            { text: "सौर ऊर्जा", correct: false },
            { text: "जीवाश्म ईंधन से उत्पन्न ऊर्जा", correct: true },
            { text: "पवन ऊर्जा", correct: false },
            { text: "जलविद्युत ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राउन एनर्जी या भूरी ऊर्जा उन स्रोतों को संदर्भित करती है जो पर्यावरण के लिए हानिकारक हैं, जैसे कोयला और तेल।"
    },
    {
        question: "प्रश्न 20. किसी विद्युत परिपथ में ऊर्जा की खपत की दर को क्या कहते हैं?",
        answers: shuffle([
            { text: "विद्युत धारा", correct: false },
            { text: "विद्युत विभव", correct: false },
            { text: "विद्युत शक्ति", correct: true },
            { text: "विद्युत प्रतिरोध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी परिपथ द्वारा प्रति इकाई समय में खपत की गई विद्युत ऊर्जा को उसकी विद्युत शक्ति कहते हैं।"
    },
    {
        question: "प्रश्न 21. श्वसन की प्रक्रिया में किस ऊर्जा का रूपांतरण होता है?",
        answers: shuffle([
            { text: "ऊष्मीय ऊर्जा का रासायनिक ऊर्जा में", correct: false },
            { text: "रासायनिक ऊर्जा (भोजन) का उपयोगी जैविक ऊर्जा (एटीपी) में", correct: true },
            { text: "प्रकाश ऊर्जा का रासायनिक ऊर्जा में", correct: false },
            { text: "यांत्रिक ऊर्जा का रासायनिक ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वसन में, ग्लूकोज में संग्रहीत रासायनिक ऊर्जा को एटीपी (एडेनोसिन ट्राइफॉस्फेट) अणुओं में स्थानांतरित किया जाता है, जो कोशिकाओं के लिए ऊर्जा मुद्रा का काम करते हैं।"
    },
    {
        question: "प्रश्न 22. किसी उपग्रह को उसकी कक्षा में चक्कर लगाने के लिए आवश्यक ऊर्जा कहाँ से मिलती है?",
        answers: shuffle([
            { text: "उसके इंजन से", correct: false },
            { text: "सूर्य से (सौर पैनलों द्वारा)", correct: true },
            { text: "पृथ्वी के चुंबकीय क्षेत्र से", correct: false },
            { text: "एक बार कक्षा में स्थापित होने के बाद, उसे ऊर्जा की आवश्यकता नहीं होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपग्रह के इलेक्ट्रॉनिक उपकरणों को चलाने के लिए आवश्यक विद्युत ऊर्जा सौर पैनलों द्वारा सूर्य के प्रकाश से प्राप्त की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> कक्षा में बने रहने के लिए गुरुत्वाकर्षण और गति संतुलन का काम करते हैं।"
    },
    {
        question: "प्रश्न 23. 'ग्रीन एनर्जी' किसे कहते हैं?",
        answers: shuffle([
            { text: "कोयले से प्राप्त ऊर्जा", correct: false },
            { text: "उन ऊर्जा स्रोतों को जो पर्यावरण को प्रदूषित नहीं करते", correct: true },
            { text: "पेट्रोलियम से प्राप्त ऊर्जा", correct: false },
            { text: "पौधों से प्राप्त ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरित ऊर्जा (Green Energy) उन नवीकरणीय स्रोतों से आती है जो पर्यावरण पर न्यूनतम नकारात्मक प्रभाव डालते हैं, जैसे सौर और पवन ऊर्जा।"
    },
    {
        question: "प्रश्न 24. एक आदर्श ट्रांसफार्मर में कौन सी राशि स्थिर रहती है?",
        answers: shuffle([
            { text: "वोल्टेज", correct: false },
            { text: "धारा", correct: false },
            { text: "शक्ति (ऊर्जा प्रति समय)", correct: true },
            { text: "प्रतिरोध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श ट्रांसफार्मर वोल्टेज और धारा को बदलता है, लेकिन ऊर्जा संरक्षण के नियम के अनुसार, इनपुट शक्ति और आउटपुट शक्ति बराबर रहती हैं।"
    },
    {
        question: "प्रश्न 25. किसी पिंड पर किया गया ऋणात्मक कार्य उसकी ऊर्जा को...",
        answers: shuffle([
            { text: "बढ़ाता है।", correct: false },
            { text: "घटाता है।", correct: true },
            { text: "अपरिवर्तित रखता है।", correct: false },
            { text: "शून्य कर देता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋणात्मक कार्य, जैसे घर्षण द्वारा किया गया कार्य, पिंड से ऊर्जा निकालता है, जिससे उसकी कुल ऊर्जा घट जाती है।"
    },
    {
        question: "प्रश्न 26. ध्वनि की प्रबलता उसकी ऊर्जा के किस गुण पर निर्भर करती है?",
        answers: shuffle([
            { text: "आवृत्ति", correct: false },
            { text: "तरंगदैर्ध्य", correct: false },
            { text: "आयाम", correct: true },
            { text: "गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि तरंग का आयाम जितना अधिक होता है, वह उतनी ही अधिक ऊर्जा ले जाती है और ध्वनि उतनी ही प्रबल होती है।"
    },
    {
        question: "प्रश्न 27. ऊर्जा का पिरामिड हमेशा सीधा क्यों होता है?",
        answers: shuffle([
            { text: "क्योंकि ऊर्जा नीचे से ऊपर की ओर प्रवाहित होती है।", correct: false },
            { text: "क्योंकि प्रत्येक पोषण स्तर पर ऊर्जा का क्षय होता है।", correct: true },
            { text: "क्योंकि उत्पादक हमेशा शीर्ष पर होते हैं।", correct: false },
            { text: "क्योंकि ऊर्जा का पुनर्चक्रण होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब ऊर्जा एक पोषण स्तर से अगले में जाती है, तो ऊष्मा के रूप में इसका एक बड़ा हिस्सा (लगभग 90%) नष्ट हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, प्रत्येक क्रमिक स्तर पर कम ऊर्जा उपलब्ध होती है, जिससे पिरामिड सीधा बनता है।"
    },
    {
        question: "प्रश्न 28. प्रकाश की ऊर्जा उसके किस गुण पर निर्भर करती है?",
        answers: shuffle([
            { text: "तीव्रता पर", correct: false },
            { text: "रंग (आवृत्ति) पर", correct: true },
            { text: "गति पर", correct: false },
            { text: "ध्रुवीकरण पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वांटम सिद्धांत के अनुसार, एक फोटॉन (प्रकाश कण) की ऊर्जा उसकी आवृत्ति के सीधे समानुपाती होती है (E=hν)।"
    },
    {
        question: "प्रश्न 29. यदि किसी वस्तु का द्रव्यमान और वेग दोनों दोगुना कर दिया जाए, तो उसकी गतिज ऊर्जा कितनी हो जाएगी?",
        answers: shuffle([
            { text: "चार गुनी", correct: false },
            { text: "छह गुनी", correct: false },
            { text: "आठ गुनी", correct: true },
            { text: "सोलह गुनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा द्रव्यमान के और वेग के वर्ग के समानुपाती होती है (KE∝mv²)।<br><br><i class='fa-solid fa-angles-right icon'></i> तो, नई गतिज ऊर्जा (2m) × (2v)²=2×4×(mv²)=8 गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 30. ओजोन परत पृथ्वी को सूर्य से आने वाली किस हानिकारक ऊर्जा से बचाती है?",
        answers: shuffle([
            { text: "अवरक्त विकिरण", correct: false },
            { text: "दृश्य प्रकाश", correct: false },
            { text: "पराबैंगनी विकिरण", correct: true },
            { text: "रेडियो तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओजोन परत सूर्य से आने वाली उच्च-ऊर्जा वाली पराबैंगनी (UV) किरणों को अवशोषित कर लेती है, जो जीवित प्राणियों के लिए हानिकारक हैं।"
    },
    {
        question: "प्रश्न 31. पारंपरिक ऊर्जा स्रोत का एक उदाहरण है:",
        answers: shuffle([
            { text: "सौर ऊर्जा", correct: false },
            { text: "पवन ऊर्जा", correct: false },
            { text: "जीवाश्म ईंधन", correct: true },
            { text: "भूतापीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारंपरिक स्रोत वे हैं जो लंबे समय से बड़े पैमाने पर उपयोग किए जा रहे हैं, जैसे कोयला और पेट्रोलियम।<br><br><i class='fa-solid fa-angles-right icon'></i> सौर, पवन आदि गैर-पारंपरिक स्रोत हैं।"
    },
    {
        question: "प्रश्न 32. ऊर्जा का सबसे स्वच्छ रूप किसे माना जाता है?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "नाभिकीय ऊर्जा", correct: false },
            { text: "सौर ऊर्जा", correct: true },
            { text: "प्राकृतिक गैस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर ऊर्जा के उपयोग से कोई ग्रीनहाउस गैस या प्रदूषक उत्सर्जित नहीं होता है, इसलिए इसे सबसे स्वच्छ ऊर्जा रूपों में से एक माना जाता है।"
    },
    {
        question: "प्रश्न 33. चलती बस के अचानक रुकने पर यात्री आगे की ओर क्यों झुक जाते हैं?",
        answers: shuffle([
            { text: "ऊर्जा संरक्षण के कारण", correct: false },
            { text: "गति के जड़त्व के कारण", correct: true },
            { text: "संवेग संरक्षण के कारण", correct: false },
            { text: "घर्षण बल के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बस के रुकने पर यात्री का निचला शरीर तो रुक जाता है, लेकिन ऊपरी शरीर गति के जड़त्व के कारण आगे की गति बनाए रखने की कोशिश करता है, जिससे वह आगे झुक जाता है।"
    },
    {
        question: "प्रश्न 34. एक बंद कमरे में फ्रिज का दरवाजा खुला छोड़ने पर कमरे का तापमान...",
        answers: shuffle([
            { text: "घट जाएगा।", correct: false },
            { text: "बढ़ जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "पहले घटेगा फिर बढ़ेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रिज एक ऊष्मा पंप है जो अंदर की गर्मी को बाहर फेंकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> खुला छोड़ने पर उसका कंप्रेसर लगातार चलेगा और कमरे में कुल ऊष्मा की मात्रा बढ़ जाएगी, जिससे तापमान बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 35. पहाड़ों पर खाना पकाने में अधिक समय क्यों लगता है?",
        answers: shuffle([
            { text: "कम वायुमंडलीय दाब के कारण", correct: true },
            { text: "अधिक ठंड के कारण", correct: false },
            { text: "कम ऑक्सीजन के कारण", correct: false },
            { text: "अधिक आर्द्रता के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊँचाई पर वायुमंडलीय दाब कम होता है, जिससे पानी कम तापमान (100°C से कम) पर ही उबलने लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कम तापमान पर खाना पकने में अधिक समय लगता है।"
    },
    {
        question: "प्रश्न 36. किसी वस्तु पर किया गया कार्य उसकी ऊर्जा में...",
        answers: shuffle([
            { text: "हमेशा वृद्धि करता है।", correct: false },
            { text: "हमेशा कमी करता है।", correct: false },
            { text: "परिवर्तन के बराबर होता है।", correct: true },
            { text: "कोई प्रभाव नहीं डालता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य-ऊर्जा प्रमेय के अनुसार, किया गया शुद्ध कार्य वस्तु की ऊर्जा में हुए कुल परिवर्तन के बराबर होता है।"
    },
    {
        question: "प्रश्न 37. भाप इंजन में किस ऊर्जा का उपयोग होता है?",
        answers: shuffle([
            { text: "रासायनिक ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: true },
            { text: "नाभिकीय ऊर्जा", correct: false },
            { text: "विद्युत ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाप इंजन पानी को उबालकर बनी भाप की ऊष्मीय ऊर्जा को पिस्टन को धकेलने के लिए यांत्रिक ऊर्जा में परिवर्तित करता है।"
    },
    {
        question: "प्रश्न 38. दो अलग-अलग द्रव्यमान की वस्तुएं एक ही ऊंचाई से गिराई जाती हैं। जमीन पर पहुँचने पर किसकी गतिज ऊर्जा अधिक होगी (वायु प्रतिरोध नगण्य)?",
        answers: shuffle([
            { text: "हल्की वस्तु की", correct: false },
            { text: "भारी वस्तु की", correct: true },
            { text: "दोनों की बराबर होगी", correct: false },
            { text: "उनके आकार पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों समान वेग से पहुंचेंगी, लेकिन गतिज ऊर्जा (1/2mv²) द्रव्यमान पर निर्भर करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए भारी वस्तु की गतिज ऊर्जा अधिक होगी।"
    },
    {
        question: "प्रश्न 39. किसी चालक में विद्युत धारा प्रवाहित होने पर ऊष्मा उत्पन्न होती है। यह किस प्रभाव के कारण होता है?",
        answers: shuffle([
            { text: "सीबेक प्रभाव", correct: false },
            { text: "जूल का तापन प्रभाव", correct: true },
            { text: "पेल्टियर प्रभाव", correct: false },
            { text: "हॉल प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक चालक से धारा प्रवाहित होती है, तो इलेक्ट्रॉनों की परमाणुओं से टक्कर के कारण प्रतिरोध उत्पन्न होता है, जिससे विद्युत ऊर्जा ऊष्मीय ऊर्जा में परिवर्तित हो जाती है।"
    },
    {
        question: "प्रश्न 40. किसी माध्यम के कणों के कंपन से कौन सी ऊर्जा संचारित होती है?",
        answers: shuffle([
            { text: "प्रकाश ऊर्जा", correct: false },
            { text: "ध्वनि ऊर्जा", correct: true },
            { text: "नाभिकीय ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि ऊर्जा एक यांत्रिक तरंग है जो किसी माध्यम (ठोस, द्रव, गैस) में कणों के कंपन द्वारा आगे बढ़ती है।"
    },
    {
        question: "प्रश्न 41. वह तापमान जिस पर किसी गैस के अणुओं की गतिज ऊर्जा शून्य हो जाती है, क्या कहलाता है?",
        answers: shuffle([
            { text: "क्वथनांक", correct: false },
            { text: "गलनांक", correct: false },
            { text: "परम शून्य ताप", correct: true },
            { text: "क्रांतिक ताप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परम शून्य (0 केल्विन या -273.15°C) वह सैद्धांतिक तापमान है जिस पर आणविक गति न्यूनतम हो जाती है।"
    },
    {
        question: "प्रश्न 42. एक चलती हुई साइकिल के पहिये में होती है:",
        answers: shuffle([
            { text: "केवल स्थानांतरीय गति", correct: false },
            { text: "केवल घूर्णी गति", correct: false },
            { text: "स्थानांतरीय और घूर्णी दोनों गति", correct: true },
            { text: "कोई गति नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहिया आगे बढ़ता है (स्थानांतरीय गति) और अपने धुरे पर घूमता भी है (घूर्णी गति)।"
    },
    {
        question: "प्रश्न 43. ऊर्जा का गैर-पारंपरिक स्रोत है:",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "डीजल", correct: false },
            { text: "पवन ऊर्जा", correct: true },
            { text: "पेट्रोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पवन ऊर्जा एक नवीकरणीय और गैर-पारंपरिक स्रोत है, जिसका उपयोग हाल के दशकों में बढ़ा है।"
    },
    {
        question: "प्रश्न 44. किसी वस्तु को संपीड़ित करने पर उसमें कौन सी ऊर्जा संचित होती है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "प्रत्यास्थ स्थितिज ऊर्जा", correct: true },
            { text: "गुरुत्वीय स्थितिज ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वस्तु को दबाने या संपीड़ित करने से उसके आकार में परिवर्तन होता है, जिससे उसमें प्रत्यास्थ स्थितिज ऊर्जा संग्रहीत हो जाती है।"
    },
    {
        question: "प्रश्न 45. एक अश्वशक्ति (Horsepower) किसकी इकाई है?",
        answers: shuffle([
            { text: "ऊर्जा", correct: false },
            { text: "शक्ति", correct: true },
            { text: "कार्य", correct: false },
            { text: "बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्वशक्ति शक्ति (ऊर्जा व्यय की दर) की एक इकाई है, न कि ऊर्जा की।"
    },
    {
        question: "प्रश्न 46. वायुमंडलीय दाब का कारण क्या है?",
        answers: shuffle([
            { text: "पृथ्वी का गुरुत्वाकर्षण", correct: true },
            { text: "पृथ्वी का घूर्णन", correct: false },
            { text: "चंद्रमा का गुरुत्वाकर्षण", correct: false },
            { text: "सूर्य की गर्मी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का गुरुत्वाकर्षण अपने चारों ओर मौजूद हवा (वायुमंडल) को खींचता है, और इस हवा के भार के कारण जो दबाव पड़ता है, उसे वायुमंडलीय दाब कहते हैं।"
    },
    {
        question: "प्रश्न 47. एक स्प्रिंग को खींचने में किया गया कार्य स्प्रिंग में किस रूप में संचित होता है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "स्थितिज ऊर्जा", correct: true },
            { text: "ऊष्मीय ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किया गया कार्य स्प्रिंग में प्रत्यास्थ स्थितिज ऊर्जा के रूप में संग्रहीत हो जाता है।"
    },
    {
        question: "प्रश्न 48. यदि किसी निकाय पर बाह्य बल द्वारा कोई कार्य नहीं किया जाता है, तो उसकी कुल ऊर्जा...",
        answers: shuffle([
            { text: "बढ़ती है।", correct: false },
            { text: "घटती है।", correct: false },
            { text: "संरक्षित रहती है।", correct: true },
            { text: "शून्य हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा संरक्षण के सिद्धांत का एक और कथन है: एक विलगित (isolated) प्रणाली की कुल ऊर्जा हमेशा स्थिर रहती है।"
    },
    {
        question: "प्रश्न 49. किसी भी प्रकार के दहन के लिए क्या आवश्यक है?",
        answers: shuffle([
            { text: "ईंधन", correct: false },
            { text: "ऑक्सीजन", correct: false },
            { text: "ऊष्मा (ज्वलन ताप)", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दहन एक रासायनिक प्रक्रिया है जिसमें ईंधन, ऑक्सीजन और पर्याप्त ऊष्मा (ज्वलन ताप तक पहुंचने के लिए) तीनों की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 50. एक गेंद जमीन पर बार-बार टप्पा खाने के बाद अंत में क्यों रुक जाती है?",
        answers: shuffle([
            { text: "क्योंकि उसकी ऊर्जा नष्ट हो जाती है।", correct: false },
            { text: "क्योंकि प्रत्येक टक्कर में ऊर्जा का ऊष्मा और ध्वनि में क्षय होता है।", correct: true },
            { text: "क्योंकि गुरुत्वाकर्षण उसे रोक देता है।", correct: false },
            { text: "क्योंकि जमीन ऊर्जा को अवशोषित कर लेती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टक्कर पूरी तरह से प्रत्यास्थ नहीं होती, जिससे गेंद की यांत्रिक ऊर्जा का कुछ हिस्सा ऊष्मा और ध्वनि में बदल जाता है, और उसकी उछाल लगातार कम होती जाती है।"
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