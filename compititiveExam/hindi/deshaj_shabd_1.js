const questions = [
    {
        topHeading: "देशज शब्दों पर आधारित 50 MCQs, part_ 1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1: निम्नलिखित में से कौन सा शब्द देशज है?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "लोटा", correct: true },
            { text: "खेत", correct: false },
            { text: "डॉक्टर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोटा' शब्द की उत्पत्ति का कोई ज्ञात स्रोत नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्थानीय बोलियों से विकसित हुआ है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "प्रश्न 2: 'पगड़ी' शब्द किस श्रेणी का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पगड़ी' शब्द की व्युत्पत्ति अज्ञात है और यह क्षेत्रीय प्रभाव के कारण भाषा में आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 3: इनमें से कौन सा शब्द देशज नहीं है?",
        answers: shuffle([
            { text: "तेंदुआ", correct: false },
            { text: "खिड़की", correct: false },
            { text: "सूर्य", correct: true },
            { text: "पेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूर्य' एक तत्सम (संस्कृत) शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'तेंदुआ', 'खिड़की' और 'पेट' देशज शब्द हैं।"
    },
    {
        question: "प्रश्न 4: 'खिचड़ी' शब्द का प्रकार बताइए।",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खिचड़ी' शब्द आवश्यकतानुसार स्थानीय स्तर पर गढ़ लिया गया शब्द है, जिसकी उत्पत्ति का पता नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह देशज है।"
    },
    {
        question: "प्रश्न 5: निम्नलिखित में से देशज शब्द छाँटिए।",
        answers: shuffle([
            { text: "तारीख", correct: false },
            { text: "डिबिया", correct: true },
            { text: "सूरज", correct: false },
            { text: "जन्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डिबिया' शब्द देशज है क्योंकि इसकी उत्पत्ति किसी ज्ञात भाषा स्रोत से नहीं हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'तारीख' विदेशी, 'सूरज' तद्भव और 'जन्म' तत्सम शब्द है।"
    },
    {
        question: "प्रश्न 6: 'फटाफट' शब्द है-",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फटाफट' एक ध्वन्यात्मक अनुकरण से बना शब्द है और इसकी उत्पत्ति स्थानीय है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह देशज है।"
    },
    {
        question: "प्रश्न 7: 'ठठेरा' शब्द निम्नलिखित में से किस वर्ग का है?",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठठेरा' शब्द उन शब्दों में से है जो क्षेत्रीय बोलियों से हिंदी में आए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 8: कौन सा शब्द देशज है?",
        answers: shuffle([
            { text: "कटोरा", correct: true },
            { text: "कलम", correct: false },
            { text: "इनाम", correct: false },
            { text: "हस्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कटोरा' शब्द की उत्पत्ति अज्ञात है और यह आम बोलचाल से आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह देशज है।"
    },
    {
        question: "प्रश्न 9: 'जूता' कैसा शब्द है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: false },
            { text: "जापानी", correct: false },
            { text: "देशज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जूता' शब्द की व्युत्पत्ति का कोई निश्चित स्रोत ज्ञात नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत की स्थानीय बोलियों की देन है।"
    },
    {
        question: "प्रश्न 10: निम्नलिखित विकल्पों में से देशज शब्द की पहचान करें।",
        answers: shuffle([
            { text: "फुनगी", correct: true },
            { text: "कर्ण", correct: false },
            { text: "वानर", correct: false },
            { text: "अमीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फुनगी' (पेड़ का ऊपरी सिरा) शब्द देशज है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'कर्ण' और 'वानर' तत्सम हैं तथा 'अमीर' विदेशी शब्द है।"
    },
    {
        question: "प्रश्न 11: 'गड़बड़' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "आगत", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गड़बड़' शब्द की उत्पत्ति का स्रोत अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बोलचाल में स्वतः उत्पन्न हुआ शब्द है।"
    },
    {
        question: "प्रश्न 12: 'तोंद' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "फारसी", correct: false },
            { text: "यह एक देशज शब्द है", correct: true },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तोंद' शब्द का किसी अन्य भाषा से संबंध स्थापित नहीं हो पाया है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः इसे देशज माना जाता है।"
    },
    {
        question: "प्रश्न 13: निम्नलिखित में से कौन सा शब्द देशज नहीं है?",
        answers: shuffle([
            { text: "झाड़ू", correct: false },
            { text: "टक्कर", correct: false },
            { text: "चाय", correct: true },
            { text: "ठेठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाय' चीनी भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द देशज हैं।"
    },
    {
        question: "प्रश्न 14: 'चसक' शब्द है-",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चसक' शब्द का प्रयोग स्थानीय स्तर पर होता है और इसकी कोई ज्ञात व्युत्पत्ति नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह देशज है।"
    },
    {
        question: "प्रश्न 15: 'चिड़िया' शब्द किसका उदाहरण है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिड़िया' शब्द की उत्पत्ति किसी संस्कृत या विदेशी भाषा से नहीं हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 16: 'कलाई' शब्द है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कलाई' शब्द आम बोलचाल से विकसित हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह एक देशज शब्द है।"
    },
    {
        question: "प्रश्न 17: 'खुरपा' शब्द का स्रोत क्या है?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "अरबी", correct: false },
            { text: "देशज", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुरपा' एक औजार का नाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द क्षेत्रीय भाषाओं से हिंदी में आया है और देशज है।"
    },
    {
        question: "प्रश्न 18: निम्नलिखित में से देशज शब्द कौन-सा है?",
        answers: shuffle([
            { text: "परात", correct: true },
            { text: "औरत", correct: false },
            { text: "आलपिन", correct: false },
            { text: "ग्राम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परात' देशज शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'औरत' अरबी, 'आलपिन' पुर्तगाली और 'ग्राम' तत्सम शब्द है।"
    },
    {
        question: "प्रश्न 19: 'बाजरा' शब्द की श्रेणी क्या है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाजरा' जैसे अनाज का नाम स्थानीय उपज से जुड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द देशज माना जाता है।"
    },
    {
        question: "प्रश्न 20: 'भिंडी' शब्द है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भिंडी' शब्द की उत्पत्ति का स्रोत अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे देशज शब्दों की श्रेणी में रखा जाता है।"
    },
    {
        question: "प्रश्न 21: 'टाँग' शब्द किस प्रकार का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'टाँग' शब्द की व्युत्पत्ति अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बोलचाल की भाषा से आया है, इसलिए देशज है।"
    },
    {
        question: "प्रश्न 22: 'ढक्कन' शब्द है-",
        answers: shuffle([
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढक्कन' शब्द स्थानीय आवश्यकता के अनुसार गढ़ा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 23: इनमें से कौन सा शब्द देशज है?",
        answers: shuffle([
            { text: "ढोर", correct: true },
            { text: "रात्रि", correct: false },
            { text: "कार्य", correct: false },
            { text: "वकील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढोर' (पशु) शब्द देशज है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'रात्रि' और 'कार्य' तत्सम हैं, जबकि 'वकील' अरबी शब्द है।"
    },
    {
        question: "प्रश्न 24: 'पटाखा' शब्द का संबंध किससे है?",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "आगत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पटाखा' शब्द की उत्पत्ति का स्रोत ज्ञात नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक देशज शब्द है।"
    },
    {
        question: "प्रश्न 25: 'बड़बड़ाना' क्रिया किस प्रकार के शब्द से बनी है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "विदेशी", correct: false },
            { text: "अनुकरणात्मक देशज", correct: true },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बड़बड़ाना' ध्वनि के अनुकरण से बना शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज श्रेणी में आता है।"
    },
    {
        question: "प्रश्न 26: 'लपलपाना' शब्द है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लपलपाना' अनुकरणात्मक शब्द है जो स्थानीय बोलियों से विकसित हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह देशज है।"
    },
    {
        question: "प्रश्न 27: 'टटोलना' शब्द का स्रोत क्या है?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "देशज", correct: true },
            { text: "पुर्तगाली", correct: false },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'टटोलना' क्रिया देशज है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका कोई अन्य स्रोत नहीं है।"
    },
    {
        question: "प्रश्न 28: 'खटिया' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "पुर्तगाली", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खटिया' शब्द 'खाट' से बना है और यह ग्रामीण व क्षेत्रीय बोलियों का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः देशज है।"
    },
    {
        question: "प्रश्न 29: 'छोरा' शब्द का स्रोत क्या है?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "देशज", correct: true },
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छोरा' (लड़का) शब्द का प्रयोग क्षेत्रीय बोलियों में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 30: निम्नलिखित में से देशज शब्द छाँटिए।",
        answers: shuffle([
            { text: "स्टेशन", correct: false },
            { text: "घपला", correct: true },
            { text: "मस्तक", correct: false },
            { text: "दुग्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घपला' शब्द की उत्पत्ति का कोई स्रोत ज्ञात नहीं है, यह देशज है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'स्टेशन' अंग्रेजी, 'मस्तक' और 'दुग्ध' तत्सम शब्द हैं।"
    },
    {
        question: "प्रश्न 31: 'झोला' कैसा शब्द है?",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झोला' शब्द की व्युत्पत्ति अज्ञात है और यह आम बोलचाल में प्रचलित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह देशज है।"
    },
    {
        question: "प्रश्न 32: 'ऊटपटाँग' शब्द किस श्रेणी का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऊटपटाँग' शब्द आवश्यकतानुसार गढ़ा गया है और इसका कोई ज्ञात स्रोत नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह देशज है।"
    },
    {
        question: "प्रश्न 33: 'चिमटा' शब्द का प्रकार बताइए।",
        answers: shuffle([
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिमटा' शब्द स्थानीय बोलियों से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे देशज शब्द माना जाता है।"
    },
    {
        question: "प्रश्न 34: 'छप्पर' शब्द है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छप्पर' शब्द का स्रोत अज्ञात है और यह ग्रामीण परिवेश की बोलियों से आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः देशज है।"
    },
    {
        question: "प्रश्न 35: इनमें से कौन सा शब्द देशज है?",
        answers: shuffle([
            { text: "झुग्गी", correct: true },
            { text: "अग्नि", correct: false },
            { text: "किताब", correct: false },
            { text: "क्षत्रिय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झुग्गी' शब्द देशज है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अग्नि' और 'क्षत्रिय' तत्सम हैं तथा 'किताब' अरबी शब्द है।"
    },
    {
        question: "प्रश्न 36: 'ठेस' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "आगत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठेस' शब्द की उत्पत्ति का पता नहीं चलता।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्षेत्रीय भाषा से आया हुआ शब्द है।"
    },
    {
        question: "प्रश्न 37: 'डकार' शब्द की व्युत्पत्ति हुई है-",
        answers: shuffle([
            { text: "संस्कृत से", correct: false },
            { text: "फारसी से", correct: false },
            { text: "इसका स्रोत अज्ञात है (देशज)", correct: true },
            { text: "अंग्रेजी से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डकार' एक अनुकरणात्मक शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे देशज की श्रेणी में रखा जाता है।"
    },
    {
        question: "प्रश्न 38: 'ढेर' शब्द है-",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढेर' शब्द का प्रयोग आम बोलचाल में होता है और इसका कोई ज्ञात भाषाई स्रोत नहीं है।"
    },
    {
        question: "प्रश्न 39: 'धड़ाम' शब्द किसका उदाहरण है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज (ध्वन्यात्मक)", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धड़ाम' शब्द किसी वस्तु के गिरने की ध्वनि का अनुकरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऐसे शब्द देशज होते हैं।"
    },
    {
        question: "प्रश्न 40: 'धक्का' शब्द किस वर्ग का है?",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "अरबी", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धक्का' शब्द की उत्पत्ति का स्रोत अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 41: 'ढिबरी' शब्द की श्रेणी क्या है?",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढिबरी' (एक प्रकार का लैंप) शब्द देशज है।"
    },
    {
        question: "प्रश्न 42: निम्नलिखित में से कौन-सा शब्द देशज नहीं है?",
        answers: shuffle([
            { text: "फुर्ती", correct: false },
            { text: "बकबक", correct: false },
            { text: "अदालत", correct: true },
            { text: "मुक्का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अदालत' अरबी भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'फुर्ती', 'बकबक' और 'मुक्का' देशज शब्द हैं।"
    },
    {
        question: "प्रश्न 43: 'धौंस' शब्द का प्रकार बताइए।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धौंस' शब्द की उत्पत्ति का कोई ज्ञात स्रोत नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज है।"
    },
    {
        question: "प्रश्न 44: 'लात' शब्द का स्रोत है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "संस्कृत", correct: false },
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लात' शब्द आम बोलचाल का शब्द है जिसकी व्युत्पत्ति का कोई स्रोत ज्ञात नहीं है।"
    },
    {
        question: "प्रश्न 45: 'हुड़दंग' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हुड़दंग' शब्द की उत्पत्ति का स्रोत अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बोलचाल में प्रचलित देशज शब्द है।"
    },
    {
        question: "प्रश्न 46: 'हिनहिनाना' कैसा शब्द है?",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "अनुकरणात्मक देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिनहिनाना' घोड़े की आवाज का अनुकरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार के ध्वनि-सूचक शब्द देशज होते हैं।"
    },
    {
        question: "प्रश्न 47: 'जुगाड़' शब्द को किस श्रेणी में रखा जाता है?",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "विदेशी", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जुगाड़' शब्द हाल ही में प्रचलित हुआ एक लोकप्रिय देशज शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी उत्पत्ति का कोई शास्त्रीय स्रोत नहीं है।"
    },
    {
        question: "प्रश्न 48: 'खचाखच' शब्द है-",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: false },
            { text: "देशज", correct: true },
            { text: "जापानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खचाखच' शब्द भी ध्वन्यात्मक अनुकरण के आधार पर बना देशज शब्द है।"
    },
    {
        question: "प्रश्न 49: 'ठुमरी' शब्द क्या है?",
        answers: shuffle([
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठुमरी' एक संगीत शैली का नाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द देशज है, जिसकी उत्पत्ति भारत में ही हुई है।"
    },
    {
        question: "प्रश्न 50: 'फुनगी' शब्द है-",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फुनगी' (पेड़ का सबसे ऊपरी हिस्सा) शब्द देशज है।"
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