const questions = [
    {
        topHeading: "पर्यायवाची शब्द पर आधारित 50 बहुविकल्पीय प्रश्न part 5 (quiz_no.36)"
    },
    {
        question: "'बंदर' शब्द का पर्यायवाची इनमें से कौन सा नहीं है?",
        answers: shuffle([
            { text: "वानर", correct: false },
            { text: "कपी", correct: false },
            { text: "शाखामृग", correct: false },
            { text: "सारंग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सारंग' हिरण, मोर या ऊँट का पर्यायवाची है, बंदर का नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> वानर, कपी और शाखामृग 'बंदर' के पर्यायवाची हैं।"
    },
    {
        question: "'मत्स्य' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "मेंढक", correct: false },
            { text: "मछली", correct: true },
            { text: "मगरमच्छ", correct: false },
            { text: "साँप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मत्स्य' मछली का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> मछली के अन्य पर्यायवाची मीन, शफरी, जलजीव, झख हैं।"
    },
    {
        question: "'विषधर' निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "साँप", correct: true },
            { text: "मेंढक", correct: false },
            { text: "मगरमच्छ", correct: false },
            { text: "भेड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विषधर' का अर्थ विष धारण करने वाला, अर्थात साँप होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> साँप के अन्य पर्यायवाची सर्प, भुजंग, नाग, अहि हैं।"
    },
    {
        question: "'दादुर' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "मेंढक", correct: true },
            { text: "घोड़ा", correct: false },
            { text: "मगरमच्छ", correct: false },
            { text: "भेड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दादुर' मेंढक का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> मेंढक के अन्य पर्यायवाची मंडूक, वर्षाभू, दर्दुर, भेक हैं।"
    },
    {
        question: "'सारंग' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "हिरण", correct: true },
            { text: "घोड़ा", correct: false },
            { text: "ऊँट", correct: false },
            { text: "कुत्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिए गए विकल्पों के अनुसार, 'सारंग' हिरण का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> हिरण के अन्य पर्यायवाची मृग, कुरंग, हरिन, कृष्णसार हैं।"
    },
    {
        question: "'तुरंग' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "ऊँट", correct: false },
            { text: "घोड़ा", correct: true },
            { text: "कुत्ता", correct: false },
            { text: "बिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तुरंग' घोड़ा का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> घोड़ा के अन्य पर्यायवाची अश्व, हय, वाजि, घोटक हैं।"
    },
    {
        question: "'क्रमेलक' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "ऊँट", correct: true },
            { text: "कुत्ता", correct: false },
            { text: "बिल्ली", correct: false },
            { text: "चूहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्रमेलक' ऊँट का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊँट के अन्य पर्यायवाची उष्ट्र, महाग्रीव, लंबोष्ठ, सारंग हैं।"
    },
    {
        question: "'शुनक' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "ऊँट", correct: false },
            { text: "कुत्ता", correct: true },
            { text: "बिल्ली", correct: false },
            { text: "चूहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शुनक' कुत्ता का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुत्ता के अन्य पर्यायवाची श्वान, सारमेय, कुक्कुर, सुनहा हैं।"
    },
    {
        question: "'बिडाल' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "चूहा", correct: false },
            { text: "बिल्ली", correct: true },
            { text: "भैंस", correct: false },
            { text: "चींटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिडाल' बिल्ली का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> बिल्ली के अन्य पर्यायवाची मार्जारी, बिल्लौर, मेषिका, मारिजार हैं।"
    },
    {
        question: "'मूषक' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "बिल्ली", correct: false },
            { text: "चूहा", correct: true },
            { text: "भैंस", correct: false },
            { text: "चींटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मूषक' चूहा का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूहा के अन्य पर्यायवाची आखु, गणेशवाहन, खंजक, उंदुर हैं।"
    },
    {
        question: "'महिषी' का इनमें से कौन सा पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "भैंस", correct: false },
            { text: "कासर", correct: false },
            { text: "सैरभी", correct: false },
            { text: "सारंग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सारंग' ऊँट, हिरण आदि का पर्यायवाची है, भैंस का नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> भैंस के पर्यायवाची महिषी, कासर, सैरभी, लुलापा, लुलाया हैं।"
    },
    {
        question: "'पिपीलिका' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "भैंस", correct: false },
            { text: "चींटी", correct: true },
            { text: "मगरमच्छ", correct: false },
            { text: "भेड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिपीलिका' चींटी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> चींटी के अन्य पर्यायवाची पिपीली, पिपीलिक, पिपीलि, चींटी हैं।"
    },
    {
        question: "'नक्र' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "मगरमच्छ", correct: true },
            { text: "भेड़िया", correct: false },
            { text: "सियार", correct: false },
            { text: "गिलहरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नक्र' मगरमच्छ का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> मगरमच्छ के अन्य पर्यायवाची मगर, घड़ियाल, कुंभीर, ग्राह हैं।"
    },
    {
        question: "'वृक' निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "सियार", correct: false },
            { text: "भेड़िया", correct: true },
            { text: "गिलहरी", correct: false },
            { text: "चिड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वृक' भेड़िया का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> भेड़िया के अन्य पर्यायवाची हिंसक, क्रूर, गोमायु, रोहिता हैं।"
    },
    {
        question: "'जंबुक' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "भेड़िया", correct: false },
            { text: "सियार", correct: true },
            { text: "गिलहरी", correct: false },
            { text: "चिड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जंबुक' सियार का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> सियार के अन्य पर्यायवाची श्रृगाल, गोमायु, फेरु हैं।"
    },
    {
        question: "'चिकरोट' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "सियार", correct: false },
            { text: "गिलहरी", correct: true },
            { text: "चिड़िया", correct: false },
            { text: "कबूतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिकरोट' गिलहरी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> गिलहरी के अन्य पर्यायवाची चिकुर, चिकू, चिकारिका, चिकारी हैं।"
    },
    {
        question: "'चटक' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "गिलहरी", correct: false },
            { text: "चिड़िया", correct: true },
            { text: "कबूतर", correct: false },
            { text: "गिद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चटक' चिड़िया का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> चिड़िया के अन्य पर्यायवाची गौरैया, चुटिया, चिरी, चिड़ी हैं।"
    },
    {
        question: "'कपोत' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "चिड़िया", correct: false },
            { text: "कबूतर", correct: true },
            { text: "गिद्ध", correct: false },
            { text: "बाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कपोत' कबूतर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> कबूतर के अन्य पर्यायवाची पारावत, हारित, रक्तलोचन, परेवा हैं।"
    },
    {
        question: "'गृद्ध' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "कबूतर", correct: false },
            { text: "गिद्ध", correct: true },
            { text: "बाज", correct: false },
            { text: "मगरमच्छ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गृद्ध' गिद्ध का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> गिद्ध के अन्य पर्यायवाची गृध्र, गृध्रराज, पक्षीराज, मांसभोजी हैं।"
    },
    {
        question: "'श्येन' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "गिद्ध", correct: false },
            { text: "बाज", correct: true },
            { text: "कौआ", correct: false },
            { text: "मोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्येन' बाज का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाज के अन्य पर्यायवाची श्येनक, पक्षीराज, श्येनपक्ष हैं।"
    },
    {
        question: "'मर्कट' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "हिरण", correct: false },
            { text: "बंदर", correct: true },
            { text: "मछली", correct: false },
            { text: "मगरमच्छ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मर्कट' बंदर का पर्यायवाची है।"
    },
    {
        question: "'झख' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "मछली", correct: true },
            { text: "साँप", correct: false },
            { text: "मेंढक", correct: false },
            { text: "मगरमच्छ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झख' मछली का पर्यायवाची है।"
    },
    {
        question: "'अहि' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "साँप", correct: true },
            { text: "मेंढक", correct: false },
            { text: "मगरमच्छ", correct: false },
            { text: "भेड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अहि' साँप का पर्यायवाची है।"
    },
    {
        question: "'वर्षाभू' शब्द का पर्यायवाची है:",
        answers: shuffle([
            { text: "मेंढक", correct: true },
            { text: "भेड़िया", correct: false },
            { text: "सियार", correct: false },
            { text: "गिलहरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वर्षाभू' का अर्थ वर्षा में उत्पन्न होने वाला, अर्थात मेंढक होता है।"
    },
    {
        question: "'कुरंग' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "भेड़िया", correct: false },
            { text: "हिरण", correct: true },
            { text: "घोड़ा", correct: false },
            { text: "ऊँट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुरंग' हिरण का पर्यायवाची है।"
    },
    {
        question: "'हय' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "ऊँट", correct: false },
            { text: "घोड़ा", correct: true },
            { text: "कुत्ता", correct: false },
            { text: "बिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हय' घोड़ा का पर्यायवाची है।"
    },
    {
        question: "'उष्ट्र' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "ऊँट", correct: true },
            { text: "कुत्ता", correct: false },
            { text: "बिल्ली", correct: false },
            { text: "चूहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उष्ट्र' ऊँट का पर्यायवाची है।"
    },
    {
        question: "'सारमेय' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "ऊँट", correct: false },
            { text: "कुत्ता", correct: true },
            { text: "बिल्ली", correct: false },
            { text: "चूहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सारमेय' कुत्ता का पर्यायवाची है।"
    },
    {
        question: "'मार्जारी' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "चूहा", correct: false },
            { text: "बिल्ली", correct: true },
            { text: "भैंस", correct: false },
            { text: "चींटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मार्जारी' बिल्ली का पर्यायवाची है।"
    },
    {
        question: "'गणेशवाहन' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "बिल्ली", correct: false },
            { text: "चूहा", correct: true },
            { text: "भैंस", correct: false },
            { text: "चींटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गणेशवाहन' का अर्थ गणेश का वाहन, अर्थात चूहा होता है।"
    },
    {
        question: "'कासर' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "भैंस", correct: true },
            { text: "चींटी", correct: false },
            { text: "मगरमच्छ", correct: false },
            { text: "भेड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कासर' भैंस का पर्यायवाची है।"
    },
    {
        question: "'लुलापा' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "चींटी", correct: false },
            { text: "भैंस", correct: true },
            { text: "मगरमच्छ", correct: false },
            { text: "भेड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लुलापा' भैंस का पर्यायवाची है।"
    },
    {
        question: "'ग्राह' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "मगरमच्छ", correct: true },
            { text: "भेड़िया", correct: false },
            { text: "सियार", correct: false },
            { text: "गिलहरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्राह' का अर्थ मगरमच्छ होता है।"
    },
    {
        question: "'गोमायु' निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "(A) भेड़िया", correct: false },
            { text: "(B) सियार", correct: false },
            { text: "(D) दोनों (A) और (B)", correct: true },
            { text: "(C) गिलहरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोमायु' भेड़िया और सियार दोनों का पर्यायवाची है।"
    },
    {
        question: "'श्रृगाल' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "भेड़िया", correct: false },
            { text: "सियार", correct: true },
            { text: "गिलहरी", correct: false },
            { text: "चिड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्रृगाल' सियार का पर्यायवाची है।"
    },
    {
        question: "'चिकुर' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "सियार", correct: false },
            { text: "गिलहरी", correct: true },
            { text: "चिड़िया", correct: false },
            { text: "कबूतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिकुर' गिलहरी का पर्यायवाची है।"
    },
    {
        question: "'गौरैया' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "गिलहरी", correct: false },
            { text: "चिड़िया", correct: true },
            { text: "कबूतर", correct: false },
            { text: "गिद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गौरैया' चिड़िया का पर्यायवाची है।"
    },
    {
        question: "'पारावत' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "चिड़िया", correct: false },
            { text: "कबूतर", correct: true },
            { text: "गिद्ध", correct: false },
            { text: "बाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पारावत' कबूतर का पर्यायवाची है।"
    },
    {
        question: "'गृध्रराज' शब्द का पर्यायवाची है:",
        answers: shuffle([
            { text: "कबूतर", correct: false },
            { text: "गिद्ध", correct: true },
            { text: "बाज", correct: false },
            { text: "मगरमच्छ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गृध्रराज' का अर्थ गिद्धों का राजा होता है।"
    },
    {
        question: "'श्येनक' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "गिद्ध", correct: false },
            { text: "बाज", correct: true },
            { text: "कौआ", correct: false },
            { text: "मोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्येनक' बाज का पर्यायवाची है।"
    },
    {
        question: "'शाखामृग' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "बंदर", correct: true },
            { text: "हिरण", correct: false },
            { text: "घोड़ा", correct: false },
            { text: "ऊँट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शाखामृग' का अर्थ शाखाओं का मृग, अर्थात बंदर होता है।"
    },
    {
        question: "'शफरी' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "मछली", correct: true },
            { text: "साँप", correct: false },
            { text: "मेंढक", correct: false },
            { text: "मगरमच्छ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शफरी' मछली का पर्यायवाची है।"
    },
    {
        question: "'भुजंग' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "साँप", correct: true },
            { text: "मेंढक", correct: false },
            { text: "मगरमच्छ", correct: false },
            { text: "भेड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भुजंग' का अर्थ भुजाओं से चलने वाला, अर्थात साँप होता है।"
    },
    {
        question: "'दर्दुर' शब्द का पर्यायवाची है:",
        answers: shuffle([
            { text: "मेंढक", correct: true },
            { text: "भेड़िया", correct: false },
            { text: "सियार", correct: false },
            { text: "गिलहरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दर्दुर' मेंढक का पर्यायवाची है।"
    },
    {
        question: "'वाजि' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "ऊँट", correct: false },
            { text: "घोड़ा", correct: true },
            { text: "कुत्ता", correct: false },
            { text: "बिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाजि' घोड़ा का पर्यायवाची है।"
    },
    {
        question: "'लंबोष्ठ' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "ऊँट", correct: true },
            { text: "कुत्ता", correct: false },
            { text: "बिल्ली", correct: false },
            { text: "चूहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लंबोष्ठ' का अर्थ लंबे होंठ वाला, अर्थात ऊँट होता है।"
    },
    {
        question: "'कुक्कुर' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "ऊँट", correct: false },
            { text: "कुत्ता", correct: true },
            { text: "बिल्ली", correct: false },
            { text: "चूहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुक्कुर' कुत्ता का पर्यायवाची है।"
    },
    {
        question: "'पिपीली' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "भैंस", correct: false },
            { text: "चींटी", correct: true },
            { text: "मगरमच्छ", correct: false },
            { text: "भेड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिपीली' चींटी का पर्यायवाची है।"
    },
    {
        question: "'कुंभीर' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "मगरमच्छ", correct: true },
            { text: "भेड़िया", correct: false },
            { text: "सियार", correct: false },
            { text: "गिलहरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुंभीर' मगरमच्छ का पर्यायवाची है।"
    },
    {
        question: "'रोहिता' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "भेड़िया", correct: true },
            { text: "सियार", correct: false },
            { text: "गिलहरी", correct: false },
            { text: "चिड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रोहिता' भेड़िया का पर्यायवाची है।"
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