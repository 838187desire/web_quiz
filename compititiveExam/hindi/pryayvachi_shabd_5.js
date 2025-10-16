const questions = [
    {
        topHeading: "पर्यायवाची शब्दों पर आधारित 50 MCQs, part_5 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'चपला' निम्नलिखित में से किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "नदी", correct: false },
            { text: "बिजली", correct: true },
            { text: "पृथ्वी", correct: false },
            { text: "हवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चपला' का अर्थ है चंचल या अस्थिर, यह बिजली का एक प्रसिद्ध पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> विद्युत्, दामिनी, सौदामिनी भी बिजली के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 2. इनमें से कौन सा शब्द 'बिजली' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "दामिनी", correct: false },
            { text: "सौदामिनी", correct: false },
            { text: "चंचला", correct: false },
            { text: "कोदंड", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोदंड' धनुष का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि दामिनी, सौदामिनी और चंचला बिजली के पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 3. 'विद्युत्' का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "चपला, दामिनी, सौदामिनी", correct: true },
            { text: "चाप, शरासन, पिनाक", correct: false },
            { text: "तीर, शर, सायक", correct: false },
            { text: "खड्ग, असि, कृपाण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विद्युत्' बिजली का तत्सम रूप है।<br><br><i class='fa-solid fa-angles-right icon'></i> चपला, दामिनी और सौदामिनी भी बिजली के ही अन्य पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 4. 'पिनाक' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "बाण", correct: false },
            { text: "तलवार", correct: false },
            { text: "धनुष", correct: true },
            { text: "युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिनाक' भगवान शिव के धनुष का नाम है, इसलिए यह धनुष का एक पर्यायवाची शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> चाप, शरासन और कोदंड भी धनुष के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से कौन सा 'धनुष' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "चाप", correct: false },
            { text: "शरासन", correct: false },
            { text: "नाराच", correct: true },
            { text: "सारंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नाराच' बाण का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> चाप, शरासन (शर अर्थात् बाण का आसन) और सारंग (अनेकार्थी शब्द) धनुष के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 6. 'कोदंड' का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "चाप, शरासन, पिनाक", correct: true },
            { text: "विद्युत्, चपला, दामिनी", correct: false },
            { text: "तीर, शर, शिलीमुख", correct: false },
            { text: "रण, संग्राम, समर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोदंड' भगवान राम के धनुष से संबंधित है और यह धनुष का एक पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> चाप, शरासन और पिनाक भी धनुष के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 7. 'सायक' निम्नलिखित में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "धनुष", correct: false },
            { text: "तलवार", correct: false },
            { text: "युद्ध", correct: false },
            { text: "बाण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सायक' बाण का एक प्रमुख पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> तीर, शर, नाराच और शिलीमुख भी बाण के ही पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 8. इनमें से कौन सा शब्द 'बाण' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "शर", correct: false },
            { text: "नाराच", correct: false },
            { text: "असि", correct: true },
            { text: "शिलीमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'असि' तलवार का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि शर, नाराच और शिलीमुख बाण के पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 9. 'शिलीमुख' शब्द का एक अर्थ 'बाण' है, इसका दूसरा अर्थ क्या होता है?",
        answers: shuffle([
            { text: "पत्थर", correct: false },
            { text: "भौंरा", correct: true },
            { text: "कमल", correct: false },
            { text: "पक्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिलीमुख' एक अनेकार्थी शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाण के अलावा इसका एक प्रसिद्ध अर्थ भौंरा भी होता है।"
    },
    {
        question: "प्रश्न 10. 'असि' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "धनुष", correct: false },
            { text: "बाण", correct: false },
            { text: "तलवार", correct: true },
            { text: "ढाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'असि' तलवार का एक तत्सम पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> खड्ग, कृपाण और करवाल भी तलवार के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 11. निम्नलिखित में से कौन सा 'तलवार' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "खड्ग", correct: false },
            { text: "कृपाण", correct: false },
            { text: "वाहिनी", correct: true },
            { text: "चंद्रहास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाहिनी' सेना का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> खड्ग, कृपाण और चंद्रहास (रावण की तलवार का नाम), तलवार के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 12. 'करवाल' का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "खड्ग, असि, कृपाण", correct: true },
            { text: "रण, संग्राम, लड़ाई", correct: false },
            { text: "फौज, कटक, दल", correct: false },
            { text: "सुधा, पीयूष, अमिय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'करवाल' का अर्थ तलवार होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> खड्ग, असि और कृपाण भी तलवार के ही अन्य पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 13. 'समर' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "सेना", correct: false },
            { text: "शांति", correct: false },
            { text: "युद्ध", correct: true },
            { text: "विजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समर' का अर्थ युद्ध या लड़ाई होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रण, संग्राम और विग्रह भी युद्ध के ही पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 14. इनमें से कौन सा शब्द 'युद्ध' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "रण", correct: false },
            { text: "संग्राम", correct: false },
            { text: "कटक", correct: true },
            { text: "विग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कटक' का अर्थ सेना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रण, संग्राम और विग्रह 'युद्ध' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 15. 'विग्रह' शब्द का एक अर्थ 'लड़ाई' है, इसका दूसरा (विपरीत) अर्थ क्या है?",
        answers: shuffle([
            { text: "संधि", correct: false },
            { text: "समास", correct: true },
            { text: "अलंकार", correct: false },
            { text: "छंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शब्द निर्माण में 'विग्रह' का अर्थ शब्दों को अलग करना होता है, जो 'समास' (शब्दों को जोड़ना) का विलोम है।<br><br><i class='fa-solid fa-angles-right icon'></i> पर्यायवाची के रूप में इसका अर्थ लड़ाई है।"
    },
    {
        question: "प्रश्न 16. 'कटक' निम्नलिखित में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "काँटा", correct: false },
            { text: "वस्त्र", correct: false },
            { text: "सेना", correct: true },
            { text: "राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कटक' का एक प्रमुख अर्थ सेना या फौज होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वाहिनी, अनी और दल भी सेना के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 17. इनमें से कौन सा शब्द 'सेना' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "वाहिनी", correct: false },
            { text: "अनी", correct: false },
            { text: "तरु", correct: true },
            { text: "दल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तरु' वृक्ष का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> वाहिनी, अनी और दल सेना के पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 18. 'अनी' और 'वाहिनी' किसके पर्यायवाची हैं?",
        answers: shuffle([
            { text: "नदी", correct: false },
            { text: "युद्ध", correct: false },
            { text: "सेना", correct: true },
            { text: "तलवार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनी' और 'वाहिनी' दोनों ही शब्द सेना या फौज के लिए प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 19. 'पीयूष' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "विष", correct: false },
            { text: "जल", correct: false },
            { text: "अमृत", correct: true },
            { text: "दूध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पीयूष' का अर्थ अमृत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सुधा, अमिय, सोम और मधु (एक अर्थ में) भी अमृत के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 20. निम्नलिखित में से कौन सा 'अमृत' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "सुधा", correct: false },
            { text: "अमिय", correct: false },
            { text: "चारु", correct: true },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चारु' का अर्थ सुंदर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि सुधा, अमिय और सोम 'अमृत' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 21. 'मधु' एक अनेकार्थी शब्द है, दिए गए विकल्पों में से इसका एक अर्थ क्या है?",
        answers: shuffle([
            { text: "विष", correct: false },
            { text: "कड़वा", correct: false },
            { text: "अमृत", correct: true },
            { text: "खट्टा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मधु' शब्द के अनेक अर्थ हैं, जैसे - शहद, शराब, वसंत ऋतु और अमृत।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ दिए गए विकल्पों में अमृत सही है।"
    },
    {
        question: "प्रश्न 22. 'चारु' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "चतुर", correct: false },
            { text: "चालाक", correct: false },
            { text: "सुंदर", correct: true },
            { text: "चंद्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चारु' का अर्थ सुंदर या मनोहर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रमणीय, ललित और आकर्षक भी सुंदर के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 23. इनमें से कौन सा शब्द 'सुंदर' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "मनोहर", correct: false },
            { text: "रमणीय", correct: false },
            { text: "ललित", correct: false },
            { text: "पर्ण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पर्ण' का अर्थ पत्ता होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मनोहर, रमणीय और ललित 'सुंदर' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 24. 'रमणीय' और 'ललित' किसके पर्यायवाची हैं?",
        answers: shuffle([
            { text: "बगीचा", correct: false },
            { text: "वृक्ष", correct: false },
            { text: "सुंदर", correct: true },
            { text: "बुद्धि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रमणीय' (जिसमें मन रम जाए) और 'ललित' दोनों का ही अर्थ सुंदर या आकर्षक होता है।"
    },
    {
        question: "प्रश्न 25. 'उपवन' निम्नलिखित में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "जंगल", correct: false },
            { text: "घर", correct: false },
            { text: "बगीचा", correct: true },
            { text: "पहाड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपवन' का अर्थ छोटा वन अर्थात् बगीचा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाग, उद्यान, वाटिका और फुलवारी भी बगीचा के ही पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 26. इनमें से कौन सा शब्द 'बगीचा' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "बाग", correct: false },
            { text: "उद्यान", correct: false },
            { text: "विटप", correct: true },
            { text: "वाटिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विटप' वृक्ष का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाग, उद्यान और वाटिका बगीचा के पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 27. 'वाटिका' और 'फुलवारी' किसके पर्यायवाची शब्द हैं?",
        answers: shuffle([
            { text: "फूल", correct: false },
            { text: "पत्ता", correct: false },
            { text: "जड़", correct: false },
            { text: "बगीचा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाटिका' और 'फुलवारी' (फूलों से भरा स्थान) दोनों ही शब्द 'बगीचा' के लिए प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 28. 'विटप' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "पत्ता", correct: false },
            { text: "डाली", correct: false },
            { text: "जड़", correct: false },
            { text: "वृक्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विटप' वृक्ष का एक प्रमुख पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पेड़, तरु, पादप और द्रुम भी वृक्ष के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 29. निम्नलिखित में से कौन सा 'वृक्ष' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "तरु", correct: false },
            { text: "पादप", correct: false },
            { text: "पर्ण", correct: true },
            { text: "द्रुम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पर्ण' पत्ते का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> तरु, पादप (पैरों से पीने वाला) और द्रुम, वृक्ष के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 30. 'तरु' और 'द्रुम' किसके पर्यायवाची हैं?",
        answers: shuffle([
            { text: "फल", correct: false },
            { text: "फूल", correct: false },
            { text: "वृक्ष", correct: true },
            { text: "तना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तरु' और 'द्रुम' दोनों ही संस्कृत भाषा के शब्द हैं और इनका अर्थ वृक्ष या पेड़ होता है।"
    },
    {
        question: "प्रश्न 31. 'पर्ण' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "पंख", correct: false },
            { text: "पृष्ठ", correct: false },
            { text: "पत्ता", correct: true },
            { text: "पानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पर्ण' का अर्थ पत्ता होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'पर्णकुटी' का अर्थ है पत्तों से बनी कुटिया।<br><br><i class='fa-solid fa-angles-right icon'></i> पत्र, दल, किसलय और पल्लव भी पत्ते के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 32. इनमें से कौन सा शब्द 'पत्ता' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "पत्र", correct: false },
            { text: "दल", correct: false },
            { text: "वृंत", correct: true },
            { text: "पल्लव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वृंत' का अर्थ डंठल या डाली होता है, न कि पत्ता।<br><br><i class='fa-solid fa-angles-right icon'></i> पत्र, दल और पल्लव पत्ते के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 33. 'किसलय' और 'पल्लव' का अर्थ क्या है?",
        answers: shuffle([
            { text: "सूखी पत्ती", correct: false },
            { text: "पेड़ की छाल", correct: false },
            { text: "नई कोमल पत्ती", correct: true },
            { text: "पेड़ का तना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किसलय' और 'पल्लव' दोनों का प्रयोग विशेष रूप से पेड़ की नई और कोमल पत्तियों के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 34. 'वृंत' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "जड़", correct: false },
            { text: "पत्ता", correct: false },
            { text: "डाली", correct: true },
            { text: "फल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वृंत' का अर्थ डाली, डंठल या टहनी होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> शाखा और उपशाखा भी इसके पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 35. निम्नलिखित में से कौन सा 'डाली' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "शाखा", correct: false },
            { text: "टहनी", correct: false },
            { text: "मूल", correct: true },
            { text: "उपशाखा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मूल' का अर्थ जड़ होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> शाखा, टहनी और उपशाखा डाली के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 36. 'शाखा' और 'टहनी' किसके पर्यायवाची शब्द हैं?",
        answers: shuffle([
            { text: "वृक्ष", correct: false },
            { text: "जड़", correct: false },
            { text: "पत्ता", correct: false },
            { text: "डाली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शाखा' और 'टहनी' दोनों ही पेड़ की डाली के लिए प्रयुक्त होने वाले सामान्य शब्द हैं।"
    },
    {
        question: "प्रश्न 37. 'मूल' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "तना", correct: false },
            { text: "शाखा", correct: false },
            { text: "जड़", correct: true },
            { text: "पत्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मूल' का अर्थ किसी वस्तु का सबसे निचला या आरंभिक भाग अर्थात् जड़ होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बुनियाद, आधार और नींव भी इसी अर्थ में प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 38. इनमें से कौन सा शब्द 'जड़' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "कंद", correct: false },
            { text: "बुनियाद", correct: false },
            { text: "मति", correct: true },
            { text: "नींव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मति' का अर्थ बुद्धि होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कंद, बुनियाद और नींव 'जड़' या आधार के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 39. 'बुनियाद' और 'नींव' किसके पर्यायवाची हैं?",
        answers: shuffle([
            { text: "शिखर", correct: false },
            { text: "दीवार", correct: false },
            { text: "छत", correct: false },
            { text: "आधार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुनियाद' और 'नींव' किसी भी संरचना के सबसे निचले हिस्से यानी आधार के लिए प्रयुक्त होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> पेड़ के संदर्भ में यह 'जड़' का समानार्थी है।"
    },
    {
        question: "प्रश्न 40. 'प्रज्ञा' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "मूर्खता", correct: false },
            { text: "आलस्य", correct: false },
            { text: "बुद्धि", correct: true },
            { text: "प्रशंसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रज्ञा' का अर्थ विशेष ज्ञान या बुद्धि होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मति, विवेक, मेधा और अक्ल भी बुद्धि के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 41. निम्नलिखित में से कौन सा 'बुद्धि' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "मति", correct: false },
            { text: "विवेक", correct: false },
            { text: "मूढ़", correct: true },
            { text: "मेधा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मूढ़' का अर्थ मूर्ख होता है, जो बुद्धि का विलोम है।<br><br><i class='fa-solid fa-angles-right icon'></i> मति, विवेक और मेधा 'बुद्धि' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 42. 'मेधा' और 'मति' किसके पर्यायवाची हैं?",
        answers: shuffle([
            { text: "मन", correct: false },
            { text: "बुद्धि", correct: true },
            { text: "ज्ञान", correct: false },
            { text: "चेतना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेधा' (धारण करने की क्षमता) और 'मति' दोनों ही शब्द 'बुद्धि' के लिए प्रयुक्त होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'मेधावी' का अर्थ बुद्धिमान होता है।"
    },
    {
        question: "प्रश्न 43. 'मूढ़' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "पंडित", correct: false },
            { text: "विद्वान", correct: false },
            { text: "ज्ञानी", correct: false },
            { text: "मूर्ख", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मूढ़' का अर्थ मूर्ख या बुद्धिहीन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अज्ञानी, जड़ और नासमझ भी मूर्ख के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 44. इनमें से कौन सा शब्द 'मूर्ख' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "अज्ञानी", correct: false },
            { text: "जड़", correct: false },
            { text: "प्राज्ञ", correct: true },
            { text: "बेवकूफ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्राज्ञ' का अर्थ पंडित या विद्वान होता है, जो मूर्ख का विलोम है।<br><br><i class='fa-solid fa-angles-right icon'></i> अज्ञानी, जड़ और बेवकूफ 'मूर्ख' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 45. 'जड़' शब्द का एक अर्थ 'वृक्ष का मूल' है, इसका दूसरा अर्थ क्या है?",
        answers: shuffle([
            { text: "चेतन", correct: false },
            { text: "ज्ञानी", correct: false },
            { text: "चतुर", correct: false },
            { text: "मूर्ख", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जड़' शब्द का प्रयोग चेतना-रहित या बुद्धि-रहित व्यक्ति के लिए भी किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः इसका एक अर्थ 'मूर्ख' है।"
    },
    {
        question: "प्रश्न 46. 'मनीषी' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "मूर्ख", correct: false },
            { text: "राजा", correct: false },
            { text: "पंडित", correct: true },
            { text: "देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मनीषी' का अर्थ मन पर नियंत्रण रखने वाला, ज्ञानी या विद्वान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पंडित का एक पर्यायवाची है।"
    },
    {
        question: "प्रश्न 47. निम्नलिखित में से कौन सा 'पंडित' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "सुधी", correct: false },
            { text: "ज्ञानी", correct: false },
            { text: "प्राज्ञ", correct: false },
            { text: "अज्ञानी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अज्ञानी' का अर्थ है जिसे ज्ञान न हो, यह पंडित का विलोम है।<br><br><i class='fa-solid fa-angles-right icon'></i> सुधी, ज्ञानी और प्राज्ञ 'पंडित' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 48. 'सुधी' और 'प्राज्ञ' किसके पर्यायवाची हैं?",
        answers: shuffle([
            { text: "मूर्ख", correct: false },
            { text: "चतुर", correct: false },
            { text: "विद्वान", correct: true },
            { text: "सामान्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुधी' (अच्छी बुद्धि वाला) और 'प्राज्ञ' (विशेष ज्ञानी) दोनों ही शब्द 'विद्वान' या 'पंडित' के लिए प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 49. 'कूल' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "वंश", correct: false },
            { text: "ठंडा", correct: false },
            { text: "किनारा", correct: true },
            { text: "योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूल' का अर्थ नदी या समुद्र का किनारा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ध्यान दें, 'कुल' का अर्थ वंश या योग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> तट, तीर और पुलिन भी किनारा के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 50. निम्नलिखित में से कौन सा 'किनारा' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "तट", correct: false },
            { text: "तीर", correct: false },
            { text: "तरंग", correct: true },
            { text: "पुलिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तरंग' का अर्थ लहर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि तट, तीर और पुलिन 'किनारा' के पर्यायवाची हैं।"
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