const questions = [
    {
        topHeading: "जड़त्व पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. निम्नलिखित में से कौन सा कथन गलत है?",
        answers: shuffle([
            { text: "जड़त्व द्रव्यमान पर निर्भर करता है।", correct: false },
            { text: "जड़त्वाघूर्ण द्रव्यमान पर निर्भर करता है।", correct: false },
            { text: "जड़त्व घूर्णन अक्ष पर निर्भर करता है।", correct: true },
            { text: "जड़त्वाघूर्ण घूर्णन अक्ष पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रैखिक जड़त्व (या केवल जड़त्व) का घूर्णन अक्ष से कोई लेना-देना नहीं है; यह केवल द्रव्यमान का गुण है।"
    },
    {
        question: "प्रश्न 2. रैखिक गति में बल का जो स्थान है, घूर्णी गति में वही स्थान किसका है?",
        answers: shuffle([
            { text: "जड़त्वाघूर्ण", correct: false },
            { text: "कोणीय वेग", correct: false },
            { text: "बल आघूर्ण", correct: true },
            { text: "कोणीय संवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल रैखिक त्वरण उत्पन्न करता है, जबकि बल आघूर्ण कोणीय त्वरण उत्पन्न करता है।"
    },
    {
        question: "प्रश्न 3. एक वस्तु को घूर्णी गति प्रदान करना अधिक कठिन होगा यदि:",
        answers: shuffle([
            { text: "उसका जड़त्व कम हो", correct: false },
            { text: "उसका जड़त्वाघूर्ण अधिक हो", correct: true },
            { text: "उसका द्रव्यमान कम हो", correct: false },
            { text: "उसका आकार छोटा हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक जड़त्वाघूर्ण का अर्थ है घूर्णी गति में परिवर्तन के प्रति अधिक प्रतिरोध।"
    },
    {
        question: "प्रश्न 4. जड़त्व और जड़त्वाघूर्ण दोनों:",
        answers: shuffle([
            { text: "गति में परिवर्तन का विरोध करते हैं।", correct: true },
            { text: "सदिश राशियाँ हैं।", correct: false },
            { text: "का मात्रक समान होता है।", correct: false },
            { text: "केवल गतिशील वस्तुओं में होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व रैखिक गति में परिवर्तन का विरोध करता है, और जड़त्वाघूर्ण घूर्णी गति में परिवर्तन का विरोध करता है।"
    },
    {
        question: "प्रश्न 5. किसी वस्तु का द्रव्यमान दोगुना करने पर उसका जड़त्व:",
        answers: shuffle([
            { text: "आधा हो जाएगा", correct: false },
            { text: "दोगुना हो जाएगा", correct: true },
            { text: "चार गुना हो जाएगा", correct: false },
            { text: "अपरिवर्तित रहेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व द्रव्यमान के सीधे समानुपाती होता है।"
    },
    {
        question: "प्रश्न 6. किसी वस्तु का द्रव्यमान दोगुना करने पर (आकार और अक्ष वही रखते हुए) उसका जड़त्वाघूर्ण:",
        answers: shuffle([
            { text: "आधा हो जाएगा", correct: false },
            { text: "दोगुना हो जाएगा", correct: true },
            { text: "चार गुना हो जाएगा", correct: false },
            { text: "अपरिवर्तित रहेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वाघूर्ण भी द्रव्यमान के सीधे समानुपाती होता है।"
    },
    {
        question: "प्रश्न 7. एक कच्चा अंडा और एक उबला हुआ अंडा, दोनों को घुमाया जाता है। कौन जल्दी रुक जाएगा?",
        answers: shuffle([
            { text: "उबला हुआ अंडा", correct: false },
            { text: "कच्चा अंडा", correct: true },
            { text: "दोनों एक साथ रुकेंगे", correct: false },
            { text: "यह उनके आकार पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कच्चे अंडे के अंदर का तरल पदार्थ घर्षण के कारण गति का विरोध करता है और ऊर्जा का क्षय करता है, जबकि उबला हुआ अंडा एक दृढ़ पिंड की तरह घूमता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कच्चे अंडे का जड़त्वाघूर्ण भी अधिक होता है।"
    },
    {
        question: "प्रश्न 8. समांतर अक्ष प्रमेय में पद 'Md²' क्या दर्शाता है?",
        answers: shuffle([
            { text: "द्रव्यमान केंद्र का जड़त्वाघूर्ण", correct: false },
            { text: "नई अक्ष का जड़त्वाघूर्ण", correct: false },
            { text: "जड़त्वाघूर्ण में वृद्धि", correct: true },
            { text: "घूर्णन त्रिज्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वह अतिरिक्त जड़त्वाघूर्ण है जो अक्ष को द्रव्यमान केंद्र से 'd' दूरी तक स्थानांतरित करने के कारण जुड़ता है।"
    },
    {
        question: "प्रश्न 9. जड़त्व एक ________ गुण है, जबकि जड़त्वाघूर्ण एक ________ गुण है।",
        answers: shuffle([
            { text: "अदिश, सदिश", correct: false },
            { text: "आंतरिक, ज्यामितीय", correct: true },
            { text: "घूर्णी, रैखिक", correct: false },
            { text: "सदिश, अदिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व केवल द्रव्यमान (आंतरिक गुण) पर निर्भर करता है, जबकि जड़त्वाघूर्ण द्रव्यमान के साथ-साथ उसके वितरण (ज्यामिति) और अक्ष पर भी निर्भर करता है।"
    },
    {
        question: "प्रश्न 10. एक बच्चा घूमते हुए झूले (merry-go-round) पर किनारे से केंद्र की ओर चलता है। झूले और बच्चे के निकाय का जड़त्वाघूर्ण:",
        answers: shuffle([
            { text: "बढ़ेगा", correct: false },
            { text: "घटेगा", correct: true },
            { text: "अपरिवर्तित रहेगा", correct: false },
            { text: "पहले बढ़ेगा फिर घटेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बच्चे के केंद्र के करीब आने से निकाय का कुल द्रव्यमान घूर्णन अक्ष के पास आ जाता है, जिससे कुल जड़त्वाघूर्ण कम हो जाता है।"
    },
    {
        question: "प्रश्न 11. किसी वस्तु का रैखिक जड़त्व बदलने के लिए क्या बदलना आवश्यक है?",
        answers: shuffle([
            { text: "उसका वेग", correct: false },
            { text: "उसका स्थान", correct: false },
            { text: "उसका द्रव्यमान", correct: true },
            { text: "उसका आकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रैखिक जड़त्व केवल द्रव्यमान का ही एक माप है।"
    },
    {
        question: "प्रश्न 12. किसी वस्तु का घूर्णी जड़त्व बदलने के लिए क्या बदला जा सकता है?",
        answers: shuffle([
            { text: "उसका द्रव्यमान", correct: false },
            { text: "द्रव्यमान का वितरण", correct: false },
            { text: "घूर्णन अक्ष", correct: false },
            { text: "उपरोक्त में से कोई भी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये तीनों कारक जड़त्वाघूर्ण को प्रभावित करते हैं।"
    },
    {
        question: "प्रश्न 13. एक सपाट डिस्क का जड़त्वाघूर्ण उसके व्यास के परितः I है। उसके केंद्र से गुजरने वाली और तल के लंबवत अक्ष के परितः जड़त्वाघूर्ण क्या होगा?",
        answers: shuffle([
            { text: "I", correct: false },
            { text: "2I", correct: true },
            { text: "I/2", correct: false },
            { text: "4I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लंबवत अक्ष प्रमेय के अनुसार, Iz = Ix + Iy।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि डिस्क सममित है, व्यास के परितः जड़त्वाघूर्ण समान होगा (Ix = Iy = I)।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, Iz = I + I = 2I।"
    },
    {
        question: "प्रश्न 14. क्या किसी वस्तु का जड़त्वाघूर्ण उसके जड़त्व (द्रव्यमान) से कम हो सकता है?",
        answers: shuffle([
            { text: "हाँ", correct: true },
            { text: "नहीं", correct: false },
            { text: " ", correct: false },
            { text: " ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाँ, यह संभव है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, 2 किग्रा की वस्तु का जड़त्वाघूर्ण 1.5 किग्रा-मी² हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों की इकाइयाँ और भौतिक अर्थ अलग-अलग हैं, इसलिए सीधी तुलना नहीं की जा सकती।"
    },
    {
        question: "प्रश्न 15. एक खोखले पाइप और उसी द्रव्यमान और त्रिज्या की एक ठोस छड़ में से, अपनी लंबाई के लंबवत और केंद्र से गुजरने वाली अक्ष के परितः किसका जड़त्वाघूर्ण अधिक होगा?",
        answers: shuffle([
            { text: "खोखले पाइप का", correct: true },
            { text: "ठोस छड़ का", correct: false },
            { text: "दोनों का लगभग बराबर होगा", correct: false },
            { text: "पाइप का, क्योंकि वह खोखला है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खोखले पाइप (या वलय) का द्रव्यमान अक्ष से दूर केंद्रित होता है, जबकि ठोस छड़ (या बेलन) का द्रव्यमान वितरित होता है।"
    },
    {
        question: "प्रश्न 16. जड़त्व की विमा [M] है। जड़त्वाघूर्ण की विमा [ML²] है। इन दोनों का अनुपात ([ML²]/[M]) किसकी विमा देता है?",
        answers: shuffle([
            { text: "लंबाई", correct: false },
            { text: "क्षेत्रफल", correct: true },
            { text: "आयतन", correct: false },
            { text: "घनत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> [ML²]/[M] = [L²], जो क्षेत्रफल की विमा है।"
    },
    {
        question: "प्रश्न 17. किसी वस्तु को घुमाने के लिए आवश्यक बल आघूर्ण उसके ________ के समानुपाती होता है।",
        answers: shuffle([
            { text: "जड़त्व", correct: false },
            { text: "द्रव्यमान", correct: false },
            { text: "जड़त्वाघूर्ण", correct: true },
            { text: "कोणीय वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> τ = Iα के अनुसार, समान कोणीय त्वरण (α) उत्पन्न करने के लिए, अधिक जड़त्वाघूर्ण (I) वाली वस्तु को अधिक बल आघूर्ण (τ) की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 18. एक दृढ़ पिंड के लिए, जड़त्वाघूर्ण एक ________ मात्रा है।",
        answers: shuffle([
            { text: "चर", correct: false },
            { text: "स्थिर (एक निश्चित अक्ष के लिए)", correct: true },
            { text: "हमेशा शून्य", correct: false },
            { text: "हमेशा अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब तक वस्तु का आकार या चुनी गई अक्ष नहीं बदलती, उसका जड़त्वाघूर्ण स्थिर रहता है।"
    },
    {
        question: "प्रश्न 19. जड़त्व का सिद्धांत बताता है कि गति बनाए रखने के लिए ________ की आवश्यकता नहीं है।",
        answers: shuffle([
            { text: "द्रव्यमान", correct: false },
            { text: "ऊर्जा", correct: false },
            { text: "बल", correct: true },
            { text: "वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व के अनुसार, एक वस्तु बाहरी बल की अनुपस्थिति में अपनी एकसमान गति को बनाए रखती है।"
    },
    {
        question: "प्रश्न 20. एक कार के पहिये का जड़त्वाघूर्ण उसकी ________ गति को प्रभावित करता है।",
        answers: shuffle([
            { text: "केवल रैखिक", correct: false },
            { text: "केवल घूर्णी", correct: false },
            { text: "रैखिक और घूर्णी दोनों", correct: true },
            { text: "किसी को नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहिये को घुमाने (त्वरित करने) के लिए बल आघूर्ण की आवश्यकता होती है, जो जड़त्वाघूर्ण पर निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अंततः कार की रैखिक गति को प्रभावित करता है।"
    },
    {
        question: "प्रश्न 21. घूर्णन त्रिज्या का मान कम होने का क्या अर्थ है?",
        answers: shuffle([
            { text: "वस्तु का द्रव्यमान कम है।", correct: false },
            { text: "वस्तु का आकार छोटा है।", correct: false },
            { text: "वस्तु का अधिकांश द्रव्यमान घूर्णन अक्ष के पास केंद्रित है।", correct: true },
            { text: "वस्तु तेजी से घूम रही है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटी घूर्णन त्रिज्या का अर्थ है कि द्रव्यमान औसतन अक्ष के बहुत करीब है।"
    },
    {
        question: "प्रश्न 22. एक सममित वस्तु के लिए, द्रव्यमान केंद्र और ज्यामितीय केंद्र:",
        answers: shuffle([
            { text: "हमेशा अलग होते हैं।", correct: false },
            { text: "संपाती होते हैं।", correct: true },
            { text: "एक दूसरे के लंबवत होते हैं।", correct: false },
            { text: "का कोई संबंध नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह जड़त्वाघूर्ण की गणना में एक महत्वपूर्ण अवधारणा है, क्योंकि द्रव्यमान केंद्र से गुजरने वाली अक्ष के परितः जड़त्वाघूर्ण न्यूनतम होता है।"
    },
    {
        question: "प्रश्न 23. जड़त्वाघूर्ण को कभी-कभी ________ आघूर्ण भी कहा जाता है।",
        answers: shuffle([
            { text: "प्रथम", correct: false },
            { text: "द्वितीय", correct: true },
            { text: "तृतीय", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसे द्रव्यमान का द्वितीय आघूर्ण (second moment of mass) भी कहा जाता है क्योंकि इसमें दूरी का वर्ग (r²) शामिल होता है।"
    },
    {
        question: "प्रश्न 24. एक ठोस गोले को पिघलाकर उसी त्रिज्या का एक डिस्क बनाया जाता है। द्रव्यमान वही रहता है। डिस्क के तल के लंबवत और केंद्र से गुजरने वाली अक्ष के परितः जड़त्वाघूर्ण:",
        answers: shuffle([
            { text: "गोले के समान होगा", correct: false },
            { text: "गोले से अधिक होगा", correct: true },
            { text: "गोले से कम होगा", correct: false },
            { text: "शून्य होगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिस्क का जड़त्वाघूर्ण (1/2 MR²) ठोस गोले (2/5 MR²) से अधिक होता है क्योंकि डिस्क में द्रव्यमान औसतन अक्ष से अधिक दूर होता है।"
    },
    {
        question: "प्रश्न 25. रैखिक गति में, जड़त्व गति में परिवर्तन का विरोध करता है। घूर्णी गति में, जड़त्वाघूर्ण ________ में परिवर्तन का विरोध करता है।",
        answers: shuffle([
            { text: "कोणीय स्थिति", correct: false },
            { text: "कोणीय वेग", correct: true },
            { text: "बल आघूर्ण", correct: false },
            { text: "कोणीय त्वरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वाघूर्ण वस्तु की कोणीय वेग की अवस्था (स्थिर या एकसमान घूर्णन) में परिवर्तन का विरोध करता है।"
    },
    {
        question: "प्रश्न 26. क्या जड़त्वाघूर्ण ऋणात्मक हो सकता है?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: " ", correct: false },
            { text: " ", correct: false },
            { text: "नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वाघूर्ण द्रव्यमान (हमेशा धनात्मक) और दूरी के वर्ग (हमेशा धनात्मक) का योग है, इसलिए यह कभी भी ऋणात्मक नहीं हो सकता।"
    },
    {
        question: "प्रश्न 27. जब हम एक दरवाजे को उसके कब्जे के पास से धकेलते हैं, तो उसे खोलना कठिन क्यों होता है?",
        answers: shuffle([
            { text: "क्योंकि जड़त्व अधिक होता है।", correct: false },
            { text: "क्योंकि बल आघूर्ण कम होता है।", correct: true },
            { text: "क्योंकि जड़त्वाघूर्ण अधिक होता है।", correct: false },
            { text: "क्योंकि घर्षण अधिक होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल आघूर्ण = बल × अक्ष से दूरी।<br><br><i class='fa-solid fa-angles-right icon'></i> कब्जे (अक्ष) के पास दूरी कम होती है, इसलिए समान बल के लिए बल आघूर्ण कम होता है, और दरवाजा (जिसका एक निश्चित जड़त्वाघूर्ण है) को घुमाना कठिन होता है।"
    },
    {
        question: "प्रश्न 28. घूर्णन करती वस्तु की गतिज ऊर्जा किसके समानुपाती होती है?",
        answers: shuffle([
            { text: "केवल जड़त्वाघूर्ण के", correct: false },
            { text: "केवल कोणीय वेग के वर्ग के", correct: false },
            { text: "जड़त्वाघूर्ण और कोणीय वेग के वर्ग दोनों के", correct: true },
            { text: "बल आघूर्ण के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घूर्णी गतिज ऊर्जा का सूत्र K.E. = 1/2 Iω² है, जो रैखिक गतिज ऊर्जा (1/2 mv²) के अनुरूप है।"
    },
    {
        question: "प्रश्न 29. एक वस्तु का जड़त्व किस निर्देश तंत्र में समान रहता है?",
        answers: shuffle([
            { text: "केवल जड़त्वीय तंत्र में", correct: false },
            { text: "केवल अजड़त्वीय तंत्र में", correct: false },
            { text: "सभी निर्देश तंत्रों में", correct: true },
            { text: "किसी में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व (द्रव्यमान) वस्तु का एक आंतरिक गुण है और यह पर्यवेक्षक के निर्देश तंत्र पर निर्भर नहीं करता है (गैर-सापेक्षकीय भौतिकी में)।"
    },
    {
        question: "प्रश्न 30. एक वस्तु का जड़त्वाघूर्ण किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "पर्यवेक्षक की गति पर", correct: false },
            { text: "चुने गए घूर्णन अक्ष पर", correct: true },
            { text: "वस्तु की गति पर", correct: false },
            { text: "वस्तु पर लगे बल पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक ही वस्तु के लिए अलग-अलग घूर्णन अक्षों के परितः जड़त्वाघूर्ण का मान अलग-अलग होता है।"
    },
    {
        question: "प्रश्न 31. एक मोटरगाड़ी में फ्लाईव्हील का उपयोग ________ के गुण का लाभ उठाने के लिए किया जाता है।",
        answers: shuffle([
            { text: "जड़त्व", correct: false },
            { text: "जड़त्वाघूर्ण", correct: true },
            { text: "संवेग", correct: false },
            { text: "ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्लाईव्हील का उच्च जड़त्वाघूर्ण इंजन के पावर स्ट्रोक से ऊर्जा संग्रहीत करता है और अन्य स्ट्रोक के दौरान क्रैंकशाफ्ट को सुचारू रूप से घुमाता रहता है।"
    },
    {
        question: "प्रश्न 32. यदि दो पिंडों का द्रव्यमान समान है, तो क्या उनका जड़त्वाघूर्ण भी समान होना आवश्यक है?",
        answers: shuffle([
            { text: "हाँ, हमेशा।", correct: false },
            { text: "नहीं, यह उनके आकार और अक्ष पर निर्भर करता है।", correct: true },
            { text: "हाँ, यदि वे एक ही पदार्थ से बने हैं।", correct: false },
            { text: "हाँ, यदि उनका आयतन समान है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समान द्रव्यमान के एक गोले और एक डिस्क का जड़त्वाघूर्ण अलग-अलग होगा।"
    },
    {
        question: "प्रश्न 33. जड़त्व और जड़त्वाघूर्ण के बीच एक मुख्य अंतर यह है कि जड़त्व ________ है, जबकि जड़त्वाघूर्ण ________ है।",
        answers: shuffle([
            { text: "एक अदिश, एक टेंसर", correct: true },
            { text: "एक बल, एक गुण", correct: false },
            { text: "हमेशा स्थिर, हमेशा चर", correct: false },
            { text: "रैखिक गति के लिए, वृत्तीय गति के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व (द्रव्यमान) एक साधारण अदिश राशि है, जबकि जड़त्वाघूर्ण एक अधिक जटिल टेंसर राशि है क्योंकि यह अक्ष के अभिविन्यास पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 34. किसी पिंड का जड़त्वाघूर्ण उसकी ________ ऊर्जा के भंडारण की क्षमता को भी इंगित करता है।",
        answers: shuffle([
            { text: "रैखिक गतिज", correct: false },
            { text: "स्थितिज", correct: false },
            { text: "घूर्णी गतिज", correct: true },
            { text: "ऊष्मीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> K.E. = 1/2 Iω² के अनुसार, समान कोणीय वेग के लिए, अधिक जड़त्वाघूर्ण वाली वस्तु अधिक घूर्णी गतिज ऊर्जा संग्रहीत करेगी।"
    },
    {
        question: "प्रश्न 35. घूर्णन त्रिज्या की अवधारणा उपयोगी है:",
        answers: shuffle([
            { text: "किसी भी आकार के पिंड की तुलना एक बिंदु द्रव्यमान से करने के लिए।", correct: true },
            { text: "किसी पिंड के द्रव्यमान की गणना के लिए।", correct: false },
            { text: "किसी पिंड के कोणीय वेग की गणना के लिए।", correct: false },
            { text: "बल आघूर्ण की दिशा ज्ञात करने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह हमें एक जटिल द्रव्यमान वितरण को एक प्रभावी दूरी के रूप में सोचने की अनुमति देता है।"
    },
    {
        question: "प्रश्न 36. एक ही द्रव्यमान और लंबाई की दो छड़ें हैं, एक लकड़ी की और एक स्टील की। उनके केंद्र के परितः जड़त्वाघूर्ण होगा:",
        answers: shuffle([
            { text: "स्टील की छड़ का अधिक।", correct: false },
            { text: "लकड़ी की छड़ का अधिक।", correct: false },
            { text: "दोनों का समान।", correct: false },
            { text: "यह उनकी मोटाई पर निर्भर करता है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टील सघन है, इसलिए समान द्रव्यमान और लंबाई के लिए, स्टील की छड़ पतली होगी।<br><br><i class='fa-solid fa-angles-right icon'></i> लकड़ी की छड़ मोटी होगी, जिसका अर्थ है कि उसका द्रव्यमान अक्ष से अधिक दूर तक फैला होगा, जिससे उसका जड़त्वाघूर्ण अधिक हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि हम उन्हें आदर्श रूप से एक-आयामी मानें, तो यह समान होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन वास्तविक दुनिया में, मोटाई मायने रखती है।<br><br><i class='fa-solid fa-angles-right icon'></i> सबसे अच्छा उत्तर मोटाई पर निर्भरता है।"
    },
    {
        question: "प्रश्न 37. जड़त्व की SI इकाई ________ है।",
        answers: shuffle([
            { text: "न्यूटन", correct: false },
            { text: "किलोग्राम", correct: true },
            { text: "मीटर/सेकंड", correct: false },
            { text: "कोई इकाई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रैखिक जड़त्व को द्रव्यमान द्वारा मापा जाता है, जिसकी SI इकाई किलोग्राम है।"
    },
    {
        question: "प्रश्न 38. जड़त्वाघूर्ण का मान किस अक्ष के परितः शून्य हो सकता है?",
        answers: shuffle([
            { text: "द्रव्यमान केंद्र से गुजरने वाली अक्ष", correct: false },
            { text: "पिंड के बाहर स्थित एक अक्ष", correct: false },
            { text: "एक बहुत पतली छड़ के लिए, उसकी अपनी लंबाई के अनुदिश अक्ष", correct: true },
            { text: "कभी नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि हम एक छड़ को आदर्श रूप से एक-आयामी (शून्य त्रिज्या) मानते हैं, तो उसकी लंबाई के अनुदिश अक्ष से सभी द्रव्यमान की दूरी शून्य होगी, जिससे जड़त्वाघूर्ण शून्य हो जाएगा।"
    },
    {
        question: "प्रश्न 39. रैखिक गति में, F=ma घूर्णी गति में, τ=Iα 'I' किसके अनुरूप है?",
        answers: shuffle([
            { text: "F", correct: false },
            { text: "m", correct: true },
            { text: "a", correct: false },
            { text: "τ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस सादृश्य में, जड़त्वाघूर्ण (I) रैखिक गति में द्रव्यमान या जड़त्व (m) के अनुरूप है।"
    },
    {
        question: "प्रश्न 40. एक व्यक्ति घूमती हुई कुर्सी पर बैठा है। यदि वह अपने पैरों को जमीन पर छूकर घर्षण लगाता है, तो वह ________ लगा रहा है।",
        answers: shuffle([
            { text: "एक आंतरिक बल आघूर्ण", correct: false },
            { text: "एक बाहरी बल आघूर्ण", correct: true },
            { text: "एक अभिकेंद्रीय बल", correct: false },
            { text: "एक जड़त्वीय बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमीन निकाय (व्यक्ति + कुर्सी) के बाहर है, इसलिए घर्षण एक बाहरी बल आघूर्ण लगाता है जो निकाय के कोणीय संवेग को बदलता है (उसे धीमा करता है)।"
    },
    {
        question: "प्रश्न 41. किसी वस्तु का जड़त्व उसकी ________ का विरोध करता है।",
        answers: shuffle([
            { text: "गति", correct: false },
            { text: "वेग", correct: false },
            { text: "त्वरण", correct: true },
            { text: "स्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व वेग में परिवर्तन (यानी त्वरण) का विरोध करता है।"
    },
    {
        question: "प्रश्न 42. किसी वस्तु का जड़त्वाघूर्ण उसकी ________ का विरोध करता है।",
        answers: shuffle([
            { text: "घूर्णन", correct: false },
            { text: "कोणीय वेग", correct: false },
            { text: "कोणीय त्वरण", correct: true },
            { text: "बल आघूर्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वाघूर्ण कोणीय वेग में परिवर्तन (यानी कोणीय त्वरण) का विरोध करता है।"
    },
    {
        question: "प्रश्न 43. एक ठोस गोला और एक ठोस बेलन का द्रव्यमान और त्रिज्या समान हैं। उन्हें एक नत समतल पर लुढ़काया जाता है। कौन पहले नीचे पहुँचेगा?",
        answers: shuffle([
            { text: "ठोस गोला", correct: true },
            { text: "ठोस बेलन", correct: false },
            { text: "दोनों एक साथ", correct: false },
            { text: "यह नत समतल के कोण पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिसका जड़त्वाघूर्ण कम होता है, वह तेजी से लुढ़कता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ठोस गोले (2/5 MR²) का जड़त्वाघूर्ण ठोस बेलन (1/2 MR²) से कम होता है।"
    },
    {
        question: "प्रश्न 44. समांतर अक्ष प्रमेय ________ के लिए मान्य है।",
        answers: shuffle([
            { text: "केवल सममित पिंडों", correct: false },
            { text: "केवल असमित पिंडों", correct: false },
            { text: "किसी भी आकार या आकृति के पिंडों", correct: true },
            { text: "केवल वृत्ताकार पिंडों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक सामान्य प्रमेय है जो किसी भी दृढ़ पिंड पर लागू होता है।"
    },
    {
        question: "प्रश्न 45. कोणीय संवेग, जड़त्वाघूर्ण और कोणीय वेग का ________ होता है।",
        answers: shuffle([
            { text: "योग", correct: false },
            { text: "अंतर", correct: false },
            { text: "गुणनफल", correct: true },
            { text: "अनुपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय संवेग (L) जड़त्वाघूर्ण (I) और कोणीय वेग (ω) का गुणनफल है (L = Iω)।"
    },
    {
        question: "प्रश्न 46. किसी वस्तु का जड़त्व शून्य हो सकता है यदि:",
        answers: shuffle([
            { text: "वस्तु स्थिर हो", correct: false },
            { text: "वस्तु निर्वात में हो", correct: false },
            { text: "वस्तु का द्रव्यमान शून्य हो", correct: true },
            { text: "कभी नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व सीधे द्रव्यमान से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> केवल द्रव्यमान रहित कणों (जैसे फोटॉन) का विराम जड़त्व शून्य होता है।"
    },
    {
        question: "प्रश्न 47. किसी वस्तु का जड़त्वाघूर्ण शून्य हो सकता है यदि:",
        answers: shuffle([
            { text: "a) वस्तु स्थिर हो", correct: false },
            { text: "b) वस्तु का द्रव्यमान शून्य हो", correct: false },
            { text: "c) वस्तु का सारा द्रव्यमान घूर्णन अक्ष पर स्थित हो", correct: false },
            { text: "(b) और (c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि द्रव्यमान शून्य है, या यदि सारा द्रव्यमान अक्ष पर है (r=0), तो जड़त्वाघूर्ण शून्य होगा।"
    },
    {
        question: "प्रश्न 48. जड़त्व के कारण, एक सीधी रेखा में गतिमान वस्तु:",
        answers: shuffle([
            { text: "हमेशा त्वरित होती रहेगी।", correct: false },
            { text: "अंततः रुक जाएगी।", correct: false },
            { text: "अपनी दिशा बदलने की प्रवृत्ति नहीं रखेगी।", correct: true },
            { text: "हमेशा एक ही गति से चलेगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दिशा के जड़त्व का वर्णन करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाहरी बल के बिना, वस्तु अपनी सीधी रेखा पथ को नहीं बदलेगी।"
    },
    {
        question: "प्रश्न 49. घूर्णी जड़त्व का मान अधिक होने का अर्थ है:",
        answers: shuffle([
            { text: "वस्तु को घुमाना आसान है।", correct: false },
            { text: "वस्तु को रोकना आसान है।", correct: false },
            { text: "वस्तु की घूर्णी अवस्था को बदलना कठिन है।", correct: true },
            { text: "वस्तु का द्रव्यमान कम है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घूर्णी जड़त्व की परिभाषा है।"
    },
    {
        question: "प्रश्न 50. एक ठोस घन का जड़त्वाघूर्ण किस अक्ष के परितः सबसे कम होगा?",
        answers: shuffle([
            { text: "एक कोने से गुजरने वाली अक्ष", correct: false },
            { text: "एक किनारे के मध्य बिंदु से गुजरने वाली अक्ष", correct: false },
            { text: "एक फलक के केंद्र से गुजरने वाली अक्ष", correct: false },
            { text: "उसके द्रव्यमान केंद्र से गुजरने वाली अक्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समांतर अक्ष प्रमेय के अनुसार, जड़त्वाघूर्ण हमेशा द्रव्यमान केंद्र से गुजरने वाली अक्ष के परितः न्यूनतम होता है।"
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