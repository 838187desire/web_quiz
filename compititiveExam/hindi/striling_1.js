const questions = [
    {
        topHeading: "स्त्रीलिंग पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. इनमें से कौन-सा शब्द स्त्रीलिंग है?",
        answers: shuffle([
            { text: "मित्र", correct: false },
            { text: "सूचना", correct: true },
            { text: "उपहार", correct: false },
            { text: "अध्याय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूचना' दी जाती है, यह एक स्त्रीलिंग शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि मित्र, उपहार और अध्याय पुल्लिंग शब्द हैं।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से स्त्रीलिंग शब्द को चुनिए।",
        answers: shuffle([
            { text: "धुआँ", correct: false },
            { text: "भत्ता", correct: false },
            { text: "संध्या", correct: true },
            { text: "धावा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संध्या (शाम) होती है, यह स्त्रीलिंग शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेष सभी पुल्लिंग हैं।"
    },
    {
        question: "प्रश्न 3. 'दही' शब्द क्या है?",
        answers: shuffle([
            { text: "स्त्रीलिंग", correct: false },
            { text: "पुल्लिंग", correct: true },
            { text: "नपुंसकलिंग", correct: false },
            { text: "उभयलिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी व्याकरण में 'दही' को पुल्लिंग माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - दही खट्टा है।"
    },
    {
        question: "प्रश्न 4. इनमें से कौन-सा शब्द स्त्रीलिंग नहीं है?",
        answers: shuffle([
            { text: "सुबह", correct: false },
            { text: "दोपहर", correct: false },
            { text: "साँझ", correct: false },
            { text: "दिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिन' होता है या बीतता है, यह पुल्लिंग शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि सुबह, दोपहर, साँझ स्त्रीलिंग हैं।"
    },
    {
        question: "प्रश्न 5. 'विदुषी' शब्द किस शब्द का स्त्रीलिंग रूप है?",
        answers: shuffle([
            { text: "विद्वान", correct: true },
            { text: "विदूषक", correct: false },
            { text: "विदुर", correct: false },
            { text: "विद्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विद्वान' का स्त्रीलिंग 'विदुषी' होता है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से स्त्रीलिंग शब्द है-",
        answers: shuffle([
            { text: "गुलाब", correct: false },
            { text: "حساب", correct: false },
            { text: "शराब", correct: true },
            { text: "जवाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शराब' पी जाती है, यह स्त्रीलिंग शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेष सभी अरबी-फारसी के शब्द पुल्लिंग हैं।"
    },
    {
        question: "प्रश्न 7. 'कवयित्री' का पुल्लिंग शब्द क्या है?",
        answers: shuffle([
            { text: "कवि", correct: true },
            { text: "लेखक", correct: false },
            { text: "कवियता", correct: false },
            { text: "काव्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कवि' का सही स्त्रीलिंग रूप 'कवयित्री' होता है।"
    },
    {
        question: "प्रश्न 8. इनमें से कौन-सा शब्द सदैव स्त्रीलिंग रहता है?",
        answers: shuffle([
            { text: "पक्षी", correct: false },
            { text: "बाज", correct: false },
            { text: "मकड़ी", correct: true },
            { text: "गेंडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मकड़ी' शब्द सदैव स्त्रीलिंग में प्रयोग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका पुल्लिंग रूप 'नर मकड़ी' होता है।"
    },
    {
        question: "प्रश्न 9. 'अहिंसा' शब्द का लिंग बताइए।",
        answers: shuffle([
            { text: "पुल्लिंग", correct: false },
            { text: "स्त्रीलिंग", correct: true },
            { text: "उभयलिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाववाचक संज्ञाएँ जिनके अंत में 'आ', 'ता', 'आई', 'हट' आदि आता है, वे प्रायः स्त्रीलिंग होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अहिंसा की जाती है।"
    },
    {
        question: "प्रश्न 10. निम्नलिखित में से कौन-सा शब्द स्त्रीलिंग है?",
        answers: shuffle([
            { text: "देश", correct: false },
            { text: "नगर", correct: false },
            { text: "द्वीप", correct: false },
            { text: "झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौगोलिक जल भागों में 'झील' शब्द स्त्रीलिंग होता है, जैसे- डल झील।<br><br><i class='fa-solid fa-angles-right icon'></i> देश, नगर, द्वीप पुल्लिंग हैं।"
    },
    {
        question: "प्रश्न 11. 'सम्राज्ञी' का पुल्लिंग क्या होगा?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "महाराजा", correct: false },
            { text: "सम्राट", correct: true },
            { text: "बादशाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सम्राट' का स्त्रीलिंग रूप 'सम्राज्ञी' होता है।"
    },
    {
        question: "प्रश्न 12. कौन-सा शब्द स्त्रीलिंग नहीं है?",
        answers: shuffle([
            { text: "रोटी", correct: false },
            { text: "पूरी", correct: false },
            { text: "पानी", correct: true },
            { text: "नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव पदार्थों में 'पानी', 'घी', 'तेल' आदि पुल्लिंग होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> पानी पिया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रोटी, पूरी और नदी स्त्रीलिंग हैं।"
    },
    {
        question: "प्रश्न 13. 'महान' का स्त्रीलिंग क्या है?",
        answers: shuffle([
            { text: "महती", correct: true },
            { text: "महाना", correct: false },
            { text: "महानी", correct: false },
            { text: "महानिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महान' का स्त्रीलिंग रूप 'महती' होता है, जैसे - महती कृपा।"
    },
    {
        question: "प्रश्न 14. नदियों के नाम प्रायः किस लिंग में होते हैं?",
        answers: shuffle([
            { text: "पुल्लिंग", correct: false },
            { text: "स्त्रीलिंग", correct: true },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश नदियों के नाम (गंगा, यमुना, सरस्वती) स्त्रीलिंग होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अपवाद- ब्रह्मपुत्र, सोन (पुल्लिंग)।"
    },
    {
        question: "प्रश्न 15. 'आत्मा' शब्द का लिंग क्या है?",
        answers: shuffle([
            { text: "स्त्रीलिंग", correct: true },
            { text: "पुल्लिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आत्मा' को स्त्रीलिंग माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - उसकी आत्मा भटक रही है।"
    },
    {
        question: "प्रश्न 16. निम्नलिखित में से स्त्रीलिंग शब्द छाँटिए।",
        answers: shuffle([
            { text: "सलाद", correct: false },
            { text: "सारस", correct: false },
            { text: "सनक", correct: true },
            { text: "सलाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सनक' चढ़ती है या होती है, यह स्त्रीलिंग है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेष शब्द पुल्लिंग हैं।"
    },
    {
        question: "प्रश्न 17. 'पुत्रवान' का स्त्रीलिंग रूप क्या है?",
        answers: shuffle([
            { text: "पुत्री", correct: false },
            { text: "पुत्रवानी", correct: false },
            { text: "पुत्रवती", correct: true },
            { text: "पुत्राणी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिन पुल्लिंग शब्दों के अंत में 'वान' होता है, उनका स्त्रीलिंग 'वती' लगाकर बनाया जाता है।"
    },
    {
        question: "प्रश्न 18. भाषाओं और लिपियों के नाम होते हैं-",
        answers: shuffle([
            { text: "सदैव पुल्लिंग", correct: false },
            { text: "सदैव स्त्रीलिंग", correct: true },
            { text: "कभी पुल्लिंग कभी स्त्रीलिंग", correct: false },
            { text: "निश्चित नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी, देवनागरी, अंग्रेजी, रोमन आदि सभी भाषाएँ और लिपियाँ स्त्रीलिंग होती हैं।"
    },
    {
        question: "प्रश्न 19. इनमें से स्त्रीलिंग शब्द कौन-सा है?",
        answers: shuffle([
            { text: "दुःख", correct: false },
            { text: "गरिमा", correct: true },
            { text: "लेख", correct: false },
            { text: "स्पर्श", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरिमा' होती है, यह स्त्रीलिंग शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> दुःख, लेख, स्पर्श पुल्लिंग हैं।"
    },
    {
        question: "प्रश्न 20. 'आयु' शब्द का लिंग निर्धारित करें।",
        answers: shuffle([
            { text: "पुल्लिंग", correct: false },
            { text: "स्त्रीलिंग", correct: true },
            { text: "उभयलिंग", correct: false },
            { text: "नपुंसकलिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आयु' लंबी होती है या घटती-बढ़ती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्त्रीलिंग शब्द है।"
    },
    {
        question: "प्रश्न 21. 'अध्यापिका' शब्द का पुल्लिंग रूप क्या है?",
        answers: shuffle([
            { text: "गुरु", correct: false },
            { text: "अध्यापक", correct: true },
            { text: "आचार्य", correct: false },
            { text: "प्रवक्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्यापक' का स्त्रीलिंग 'अध्यापिका' होता है।"
    },
    {
        question: "प्रश्न 22. 'व्यवस्था' शब्द है-",
        answers: shuffle([
            { text: "पुल्लिंग", correct: false },
            { text: "स्त्रीलिंग", correct: true },
            { text: "उभयलिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्यवस्था' की जाती है या बनाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक स्त्रीलिंग शब्द है।"
    },
    {
        question: "प्रश्न 23. कौन-सा शब्द स्त्रीलिंग नहीं है?",
        answers: shuffle([
            { text: "छाछ", correct: false },
            { text: "चाय", correct: false },
            { text: "कॉफी", correct: false },
            { text: "काढ़ा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'काढ़ा' पिया जाता है, यह पुल्लिंग है।<br><br><i class='fa-solid fa-angles-right icon'></i> छाछ, चाय, कॉफी स्त्रीलिंग हैं।"
    },
    {
        question: "प्रश्न 24. 'जेठ' का स्त्रीलिंग है-",
        answers: shuffle([
            { text: "जेठिन", correct: false },
            { text: "जेठानी", correct: true },
            { text: "जेठरानी", correct: false },
            { text: "जेठिना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जेठ' (पति का बड़ा भाई) का स्त्रीलिंग 'जेठानी' होता है।"
    },
    {
        question: "प्रश्न 25. तिथियों के नाम (प्रथमा, द्वितीया) किस लिंग में आते हैं?",
        answers: shuffle([
            { text: "पुल्लिंग", correct: false },
            { text: "स्त्रीलिंग", correct: true },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी तिथियों के नाम स्त्रीलिंग होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - आज द्वितीया है।"
    },
    {
        question: "प्रश्न 26. 'दया' शब्द है-",
        answers: shuffle([
            { text: "स्त्रीलिंग", correct: true },
            { text: "पुल्लिंग", correct: false },
            { text: "नपुंसकलिंग", correct: false },
            { text: "उभयलिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दया' की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक भाववाचक संज्ञा है और स्त्रीलिंग है।"
    },
    {
        question: "प्रश्न 27. 'नेता' शब्द का स्त्रीलिंग रूप क्या है?",
        answers: shuffle([
            { text: "नेती", correct: false },
            { text: "नेत्री", correct: true },
            { text: "नेतिन", correct: false },
            { text: "नेताइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नेता' का सही स्त्रीलिंग रूप 'नेत्री' होता है।"
    },
    {
        question: "प्रश्न 28. 'सरकार' शब्द का लिंग क्या है?",
        answers: shuffle([
            { text: "पुल्लिंग", correct: false },
            { text: "स्त्रीलिंग", correct: true },
            { text: "उभयलिंग", correct: false },
            { text: "निश्चित नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सरकार' बनती है, गिरती है या निर्णय लेती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्त्रीलिंग शब्द है।"
    },
    {
        question: "प्रश्न 29. निम्नलिखित में से कौन-सा शब्द स्त्रीलिंग है?",
        answers: shuffle([
            { text: "उत्साह", correct: false },
            { text: "चक्रव्यूह", correct: false },
            { text: "मृत्यु", correct: true },
            { text: "संकल्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृत्यु' आती है या होती है, यह स्त्रीलिंग है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेष शब्द पुल्लिंग हैं।"
    },
    {
        question: "प्रश्न 30. 'वीर' का स्त्रीलिंग क्या होगा?",
        answers: shuffle([
            { text: "वीरांगना", correct: true },
            { text: "वीरावती", correct: false },
            { text: "वीरगति", correct: false },
            { text: "वीरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वीर' पुरुष के लिए और 'वीरांगना' स्त्री के लिए प्रयोग होता है।"
    },
    {
        question: "प्रश्न 31. नक्षत्रों के नाम प्रायः होते हैं-",
        answers: shuffle([
            { text: "पुल्लिंग", correct: false },
            { text: "स्त्रीलिंग", correct: true },
            { text: "उभयलिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्विनी, भरणी, रोहिणी आदि नक्षत्रों के नाम स्त्रीलिंग होते हैं।"
    },
    {
        question: "प्रश्न 32. 'चाय' में कौन-सा लिंग है?",
        answers: shuffle([
            { text: "पुल्लिंग", correct: false },
            { text: "स्त्रीलिंग", correct: true },
            { text: "उभयलिंग", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाय पी जाती है, यह पेय पदार्थ स्त्रीलिंग है।"
    },
    {
        question: "प्रश्न 33. 'लुहार' का स्त्रीलिंग है-",
        answers: shuffle([
            { text: "लुहारी", correct: false },
            { text: "लुहारिन", correct: true },
            { text: "लोहारिन", correct: false },
            { text: "लुहारिणी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जाति या व्यवसायबोधक शब्दों में 'इन' प्रत्यय लगाकर स्त्रीलिंग बनाया जाता है, जैसे- लुहार से लुहारिन।"
    },
    {
        question: "प्रश्न 34. 'सभा' शब्द का लिंग बताइए।",
        answers: shuffle([
            { text: "स्त्रीलिंग", correct: true },
            { text: "पुल्लिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सभा' होती है या बुलाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह समूहवाचक संज्ञा स्त्रीलिंग है।"
    },
    {
        question: "प्रश्न 35. 'डिबिया' शब्द का पुल्लिंग क्या है?",
        answers: shuffle([
            { text: "डिब्बा", correct: true },
            { text: "डिब्बक", correct: false },
            { text: "डिब्ब", correct: false },
            { text: "डिबियाक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डिब्बा' पुल्लिंग है और इसका लघुतावाची स्त्रीलिंग रूप 'डिबिया' होता है।"
    },
    {
        question: "प्रश्न 36. कौन-सा शब्द स्त्रीलिंग नहीं है?",
        answers: shuffle([
            { text: "संतान", correct: false },
            { text: "सवारी", correct: false },
            { text: "भेड़िया", correct: true },
            { text: "गंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भेड़िया' नित्य पुल्लिंग शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका स्त्रीलिंग 'मादा भेड़िया' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> संतान और सवारी को प्रयोग के आधार पर स्त्रीलिंग माना जाता है।"
    },
    {
        question: "प्रश्न 37. 'गायिका' का पुल्लिंग शब्द है-",
        answers: shuffle([
            { text: "गायक", correct: true },
            { text: "गायन", correct: false },
            { text: "संगीतकार", correct: false },
            { text: "गाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गायक' का स्त्रीलिंग 'गायिका' होता है।"
    },
    {
        question: "प्रश्न 38. 'पुलिस' शब्द है-",
        answers: shuffle([
            { text: "पुल्लिंग", correct: false },
            { text: "स्त्रीलिंग", correct: true },
            { text: "उभयलिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी में 'पुलिस' को स्त्रीलिंग माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - पुलिस आ गई।"
    },
    {
        question: "प्रश्न 39. 'पृथ्वी' शब्द का लिंग क्या है?",
        answers: shuffle([
            { text: "स्त्रीलिंग", correct: true },
            { text: "पुल्लिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "नपुंसकलिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रहों के नामों में 'पृथ्वी' स्त्रीलिंग है, जबकि अन्य ग्रह पुल्लिंग हैं।"
    },
    {
        question: "प्रश्न 40. 'ऋषि' का स्त्रीलिंग रूप है-",
        answers: shuffle([
            { text: "ऋषिका", correct: true },
            { text: "ऋषिणी", correct: false },
            { text: "ऋषिपत्नी", correct: false },
            { text: "ऋषी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऋषि' का स्त्रीलिंग 'ऋषिका' होता है।"
    },
    {
        question: "प्रश्न 41. निम्नलिखित में से कौन-सा शब्द स्त्रीलिंग है?",
        answers: shuffle([
            { text: "विवाद", correct: false },
            { text: "सार", correct: false },
            { text: "रूप", correct: false },
            { text: "आय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आय' होती है, जबकि 'व्यय' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 'आय' स्त्रीलिंग है।"
    },
    {
        question: "प्रश्न 42. 'बहन' का पुल्लिंग शब्द क्या है?",
        answers: shuffle([
            { text: "भाई", correct: false },
            { text: "भ्राता", correct: false },
            { text: "बन्धु", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाई, भ्राता, बन्धु सभी 'बहन' के पुल्लिंग रूप में प्रयोग होते हैं।"
    },
    {
        question: "प्रश्न 43. ईकारांत संज्ञाएँ सामान्यतः होती हैं-",
        answers: shuffle([
            { text: "पुल्लिंग", correct: false },
            { text: "स्त्रीलिंग", correct: true },
            { text: "उभयलिंग", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिन संज्ञा शब्दों के अंत में 'ई' आती है, वे प्रायः स्त्रीलिंग होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - नदी, रोटी, चिट्ठी।<br><br><i class='fa-solid fa-angles-right icon'></i> अपवाद - पानी, घी, मोती (पुल्लिंग)।"
    },
    {
        question: "प्रश्न 44. 'समिति' शब्द का लिंग है-",
        answers: shuffle([
            { text: "स्त्रीलिंग", correct: true },
            { text: "पुल्लिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समिति' बनाई जाती है या बैठक करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्त्रीलिंग है।"
    },
    {
        question: "प्रश्न 45. 'ठाकुर' का स्त्रीलिंग रूप क्या है?",
        answers: shuffle([
            { text: "A) ठाकुरी", correct: false },
            { text: "B) ठकुरानी", correct: false },
            { text: "C) ठकुराइन", correct: false },
            { text: "(B) और (C) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठाकुर' का स्त्रीलिंग 'ठकुरानी' (पत्नी के अर्थ में) और 'ठकुराइन' (जाति के अर्थ में) दोनों ही प्रचलित हैं।"
    },
    {
        question: "प्रश्न 46. 'खटमल' शब्द है-",
        answers: shuffle([
            { text: "स्त्रीलिंग", correct: false },
            { text: "पुल्लिंग", correct: true },
            { text: "उभयलिंग", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खटमल' नित्य पुल्लिंग शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका स्त्रीलिंग रूप 'मादा खटमल' होता है।"
    },
    {
        question: "प्रश्न 47. इनमें से कौन-सा शब्द स्त्रीलिंग है?",
        answers: shuffle([
            { text: "हीरा", correct: false },
            { text: "मोती", correct: false },
            { text: "मणि", correct: true },
            { text: "माणिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रत्नों के नाम प्रायः पुल्लिंग होते हैं, लेकिन 'मणि' और 'लाजवर्द' स्त्रीलिंग हैं।"
    },
    {
        question: "प्रश्न 48. 'बुद्धि' शब्द का लिंग बताइए।",
        answers: shuffle([
            { text: "स्त्रीलिंग", correct: true },
            { text: "पुल्लिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुद्धि' होती है, यह स्त्रीलिंग है।"
    },
    {
        question: "प्रश्न 49. 'बिल्ली' का पुल्लिंग क्या होगा?",
        answers: shuffle([
            { text: "A) बिल्ला", correct: false },
            { text: "B) बिलाव", correct: false },
            { text: "C) बिल्लू", correct: false },
            { text: "(A) और (B) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिल्ली' का पुल्लिंग 'बिल्ला' या 'बिलाव' दोनों होता है।"
    },
    {
        question: "प्रश्न 50. 'सेना' शब्द है-",
        answers: shuffle([
            { text: "स्त्रीलिंग", correct: true },
            { text: "पुल्लिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समूहवाचक संज्ञा 'सेना' स्त्रीलिंग होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - सेना आ रही है।"
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