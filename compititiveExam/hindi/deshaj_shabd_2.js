const questions = [
    {
        topHeading: "देशज शब्दों पर आधारित 50 MCQs, part_ 2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1: 'कपास' शब्द किस प्रकार का है?",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कपास' शब्द की उत्पत्ति द्रविड़ भाषाओं से मानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> पर हिंदी में इसे देशज के रूप में वर्गीकृत किया जाता है।"
    },
    {
        question: "प्रश्न 2: 'कौड़ी' शब्द का वर्ग बताइए।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कौड़ी' शब्द की उत्पत्ति का स्रोत संस्कृत नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 3: 'झंझट' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झंझट' शब्द की व्युत्पत्ति अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बोलचाल से हिंदी में आया है।"
    },
    {
        question: "प्रश्न 4: 'झिलमिल' शब्द का प्रकार क्या है?",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झिलमिल' शब्द भी अनुकरणात्मक या ध्वन्यात्मक आधार पर बना देशज शब्द है।"
    },
    {
        question: "प्रश्न 5: 'ठप्पा' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठप्पा' शब्द का स्रोत अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज श्रेणी में आता है।"
    },
    {
        question: "प्रश्न 6: 'डाब' (नारियल) शब्द है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "पुर्तगाली", correct: false },
            { text: "अरबी", correct: false },
            { text: "तत्सम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डाब' शब्द का प्रयोग पूर्वी भारत की क्षेत्रीय बोलियों में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज है।"
    },
    {
        question: "प्रश्न 7: 'बौखलाना' शब्द का संबंध है-",
        answers: shuffle([
            { text: "तत्सम से", correct: false },
            { text: "तद्भव से", correct: false },
            { text: "देशज से", correct: true },
            { text: "विदेशी से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बौखलाना' क्रिया देशज है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी उत्पत्ति का कोई अन्य स्रोत नहीं है।"
    },
    {
        question: "प्रश्न 8: 'भोंदू' शब्द है-",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भोंदू' शब्द स्थानीय बोलियों की देन है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह देशज है।"
    },
    {
        question: "प्रश्न 9: 'लुगदी' शब्द की श्रेणी क्या है?",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लुगदी' शब्द का स्रोत अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज शब्द माना जाता है।"
    },
    {
        question: "प्रश्न 10: 'भोपू' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भोपू' शब्द ध्वनि के अनुकरण पर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 11: 'मकई' शब्द का प्रकार बताइए।",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मकई' शब्द भारत की स्थानीय उपज से जुड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे देशज माना जाता है।"
    },
    {
        question: "प्रश्न 12: 'घोटाला' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घोटाला' शब्द की व्युत्पत्ति का कोई ज्ञात स्रोत नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज है।"
    },
    {
        question: "प्रश्न 13: 'थपथपाना' शब्द है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थपथपाना' शब्द ध्वनि के अनुकरण पर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह देशज है।"
    },
    {
        question: "प्रश्न 14: 'डगमगाना' शब्द का स्रोत क्या है?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "अरबी", correct: false },
            { text: "देशज", correct: true },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डगमगाना' शब्द की उत्पत्ति का स्रोत अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 15: 'चपटा' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चपटा' शब्द स्थानीय बोलियों से आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कोई शास्त्रीय व्युत्पत्ति नहीं है।"
    },
    {
        question: "प्रश्न 16: 'बुदबुदाना' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुदबुदाना' ध्वनि के अनुकरण से बना देशज शब्द है।"
    },
    {
        question: "प्रश्न 17: 'झाँसा' शब्द है-",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झाँसा' शब्द का कोई ज्ञात स्रोत नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बोलचाल से आया देशज शब्द है।"
    },
    {
        question: "प्रश्न 18: 'टट्टी' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'टट्टी' (बाँस की फट्टियों का पर्दा) शब्द देशज है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो ग्रामीण क्षेत्रों में प्रचलित है।"
    },
    {
        question: "प्रश्न 19: 'ठसक' शब्द का प्रकार बताइए।",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठसक' शब्द की उत्पत्ति का कोई स्रोत ज्ञात नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज है।"
    },
    {
        question: "प्रश्न 20: 'डाका' शब्द है-",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डाका' शब्द भी उन शब्दों में से है जो स्थानीय बोलियों से हिंदी में आए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह देशज है।"
    },
    {
        question: "प्रश्न 21: 'ढोंग' शब्द की श्रेणी क्या है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढोंग' शब्द की व्युत्पत्ति अज्ञात है और यह आम बोलचाल में प्रचलित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह देशज है।"
    },
    {
        question: "प्रश्न 22: 'धब्बा' शब्द है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धब्बा' शब्द का स्रोत अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 23: 'भिनभिनाना' शब्द का स्रोत क्या है?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "अरबी", correct: false },
            { text: "देशज (अनुकरणात्मक)", correct: true },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भिनभिनाना' मक्खियों की आवाज का अनुकरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह देशज है।"
    },
    {
        question: "प्रश्न 24: 'फुदकना' शब्द का प्रकार क्या है?",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फुदकना' शब्द क्रिया का रूप है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी उत्पत्ति देशज है।"
    },
    {
        question: "प्रश्न 25: 'लोध' शब्द है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोध' शब्द की व्युत्पत्ति अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 26: 'मेहरारू' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेहरारू' (पत्नी) शब्द पूर्वी उत्तर प्रदेश और बिहार की क्षेत्रीय बोलियों का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह देशज है।"
    },
    {
        question: "प्रश्न 27: 'लटपट' शब्द की श्रेणी क्या है?",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लटपट' एक द्विरुक्त या अनुकरणात्मक शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो देशज की श्रेणी में आता है।"
    },
    {
        question: "प्रश्न 28: 'सनसनाहट' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सनसनाहट' हवा की आवाज के अनुकरण से बना देशज शब्द है।"
    },
    {
        question: "प्रश्न 29: 'हुर्र' (किसी को भगाने का शब्द) है-",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हुर्र' जैसे शब्द जिनका प्रयोग ध्वनि उत्पन्न करने के लिए होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वे देशज होते हैं।"
    },
    {
        question: "प्रश्न 30: 'खुरपी' शब्द का स्रोत क्या है?",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुरपी' एक कृषि औजार है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द देशज है।"
    },
    {
        question: "प्रश्न 31: 'अटकल' शब्द का प्रकार क्या है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अटकल' (अनुमान) शब्द की उत्पत्ति का कोई स्रोत ज्ञात नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज है।"
    },
    {
        question: "प्रश्न 32: 'चहचहाना' शब्द है-",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चहचहाना' पक्षियों की ध्वनि का अनुकरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऐसे शब्द देशज होते हैं।"
    },
    {
        question: "प्रश्न 33: 'छछूंदर' शब्द का प्रकार बताइए।",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छछूंदर' शब्द की उत्पत्ति का कोई ज्ञात स्रोत नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज है।"
    },
    {
        question: "प्रश्न 34: 'झुनझुना' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झुनझुना' ध्वनि के अनुकरण पर बना शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह देशज है।"
    },
    {
        question: "प्रश्न 35: 'टक्कर' शब्द का स्रोत है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: false },
            { text: "संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'टक्कर' शब्द की व्युत्पत्ति अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बोलचाल की भाषा से आया है।"
    },
    {
        question: "प्रश्न 36: 'ठिगना' शब्द किस श्रेणी का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठिगना' शब्द की उत्पत्ति का कोई स्रोत ज्ञात नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज है।"
    },
    {
        question: "प्रश्न 37: 'डिबिया' शब्द का लिंग और प्रकार क्या है?",
        answers: shuffle([
            { text: "पुल्लिंग, देशज", correct: false },
            { text: "स्त्रीलिंग, देशज", correct: true },
            { text: "स्त्रीलिंग, तत्सम", correct: false },
            { text: "पुल्लिंग, तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डिबिया' एक देशज शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्त्रीलिंग है।"
    },
    {
        question: "प्रश्न 38: 'थैला' शब्द है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थैला' शब्द की उत्पत्ति का स्रोत ज्ञात नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आम प्रयोग का देशज शब्द है।"
    },
    {
        question: "प्रश्न 39: 'चरमराहट' शब्द है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चरमराहट' किसी चीज के टूटने या दबने की आवाज का अनुकरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 40: 'पिल्ला' शब्द है-",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिल्ला' (कुत्ते का बच्चा) शब्द द्रविड़ भाषा परिवार से आया माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हिंदी में इसे देशज के तौर पर गिना जाता है।"
    },
    {
        question: "प्रश्न 41: 'लोधड़ा' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोधड़ा' (मांस का टुकड़ा) शब्द देशज है।"
    },
    {
        question: "प्रश्न 42: 'हड़बड़ाना' शब्द का प्रकार क्या है?",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हड़बड़ाना' क्रिया का रूप देशज है।"
    },
    {
        question: "प्रश्न 43: 'अंटा' (कंचा) शब्द है-",
        answers: shuffle([
            { text: "विदेशी", correct: false },
            { text: "देशज", correct: true },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंटा' शब्द क्षेत्रीय खेल से जुड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज है।"
    },
    {
        question: "प्रश्न 44: 'उलजलूल' शब्द किस श्रेणी का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उलजलूल' शब्द का कोई ज्ञात स्रोत नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मनगढ़ंत देशज शब्द है।"
    },
    {
        question: "प्रश्न 45: 'कचर-कचर करना' में 'कचर-कचर' है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज (अनुकरणात्मक)", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कचर-कचर' ध्वनि का अनुकरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह देशज शब्द है।"
    },
    {
        question: "प्रश्न 46: 'कलई' शब्द है-",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "देशज", correct: true },
            { text: "फारसी", correct: false },
            { text: "तत्सम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कलई' (बर्तनों पर की जाने वाली कोटिंग) शब्द देशज माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि कुछ स्रोत इसे अरबी भी मानते हैं।"
    },
    {
        question: "प्रश्न 47: 'खोपड़ी' शब्द का प्रकार बताइए।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "देशज", correct: true },
            { text: "तद्भव", correct: false },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खोपड़ी' शब्द का विकास 'कर्पर' (तत्सम) से हुआ है पर इसका रूप देशज की तरह है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे देशज माना जाता है।"
    },
    {
        question: "प्रश्न 48: 'चपत' (थप्पड़) शब्द है-",
        answers: shuffle([
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false },
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चपत' शब्द का स्रोत अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज है।"
    },
    {
        question: "प्रश्न 49: 'चुस्की' शब्द है-",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "देशज", correct: true },
            { text: "तुर्की", correct: false },
            { text: "जापानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चुस्की' शब्द स्थानीय बोलियों से आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज है।"
    },
    {
        question: "प्रश्न 50: 'छींटाकशी' में 'छींटा' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छींटा' शब्द की व्युत्पत्ति अज्ञात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशज शब्द है।"
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