const questions = [
    {
        topHeading: "तत्सम-तद्भव शब्दों पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1: 'अग्नि' का तद्भव शब्द क्या है?",
        answers: shuffle([
            { text: "आग", correct: true },
            { text: "पवन", correct: false },
            { text: "जल", correct: false },
            { text: "वायु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्नि' एक तत्सम (संस्कृत) शब्द है, जिसका तद्भव (हिन्दी) रूप 'आग' होता है।"
    },
    {
        question: "प्रश्न 2: निम्नलिखित में से कौन-सा शब्द तत्सम है?",
        answers: shuffle([
            { text: "खेत", correct: false },
            { text: "अजीब", correct: false },
            { text: "क्षेत्र", correct: true },
            { text: "काम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षेत्र' तत्सम शब्द है, जिसका तद्भव रूप 'खेत' होता है।"
    },
    {
        question: "प्रश्न 3: 'हस्त' का तद्भव रूप क्या होगा?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "हाथ", correct: true },
            { text: "हथियार", correct: false },
            { text: "हस्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हस्त' एक संस्कृत (तत्सम) शब्द है, जिसका सरल हिन्दी रूप 'हाथ' (तद्भव) है।"
    },
    {
        question: "प्रश्न 4: 'दूध' का तत्सम रूप क्या है?",
        answers: shuffle([
            { text: "दुग्ध", correct: true },
            { text: "दधि", correct: false },
            { text: "क्षीर", correct: false },
            { text: "पेय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दूध' तद्भव शब्द का तत्सम रूप 'दुग्ध' होता है।"
    },
    {
        question: "प्रश्न 5: 'कर्पूर' शब्द का तद्भव रूप कौन-सा है?",
        answers: shuffle([
            { text: "कपड़ा", correct: false },
            { text: "कपूर", correct: true },
            { text: "करकट", correct: false },
            { text: "कपाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कर्पूर' (तत्सम) का तद्भव रूप 'कपूर' है।"
    },
    {
        question: "प्रश्न 6: निम्नलिखित में से कौन-सा शब्द तद्भव है?",
        answers: shuffle([
            { text: "ग्राम", correct: false },
            { text: "अश्रु", correct: false },
            { text: "सूर्य", correct: false },
            { text: "गाँव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गाँव' तद्भव शब्द है, जिसका तत्सम रूप 'ग्राम' होता है।"
    },
    {
        question: "प्रश्न 7: 'मयूर' का तद्भव शब्द क्या है?",
        answers: shuffle([
            { text: "मोर", correct: true },
            { text: "मुकुट", correct: false },
            { text: "मौसी", correct: false },
            { text: "महीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मयूर' तत्सम शब्द का तद्भव रूप 'मोर' होता है।"
    },
    {
        question: "प्रश्न 8: 'आम्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आम", correct: true },
            { text: "अम्ल", correct: false },
            { text: "अमरूद", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आम्र' एक तत्सम शब्द है, जिसका तद्भव रूप 'आम' होता है।"
    },
    {
        question: "प्रश्न 9: 'कार्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कर्म", correct: false },
            { text: "कारज", correct: false },
            { text: "सेवा", correct: false },
            { text: "काज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कार्य' (तत्सम) का तद्भव रूप 'काज' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'कारज' इसका अर्द्ध-तत्सम रूप है।"
    },
    {
        question: "प्रश्न 10: 'हृदय' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "हिय", correct: true },
            { text: "दिल", correct: false },
            { text: "मन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हृदय' तत्सम शब्द का तद्भव रूप 'हिय' होता है।"
    },
    {
        question: "प्रश्न 11: 'वानर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "बानर", correct: false },
            { text: "बन्दर", correct: true },
            { text: "कपि", correct: false },
            { text: "(a) और (b) दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वानर' तत्सम शब्द का सही तद्भव रूप 'बन्दर' होता है।"
    },
    {
        question: "प्रश्न 12: 'रात्रि' का तद्भव शब्द क्या है?",
        answers: shuffle([
            { text: "रात", correct: true },
            { text: "निशा", correct: false },
            { text: "रजनी", correct: false },
            { text: "यामिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रात्रि' एक तत्सम शब्द है, जिसका तद्भव रूप 'रात' है।"
    },
    {
        question: "प्रश्न 13: 'ग्राहक' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गाहक", correct: true },
            { text: "लेने वाला", correct: false },
            { text: "खरीदार", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्राहक' तत्सम शब्द का तद्भव रूप 'गाहक' होता है।"
    },
    {
        question: "प्रश्न 14: निम्नलिखित में से तत्सम शब्द कौन-सा है?",
        answers: shuffle([
            { text: "सूरज", correct: false },
            { text: "स्वर्ण", correct: true },
            { text: "कुआँ", correct: false },
            { text: "कपूत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वर्ण' तत्सम शब्द है, जिसका तद्भव रूप 'सोना' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सूरज' का तत्सम 'सूर्य', 'कुआँ' का 'कूप' और 'कपूत' का 'कुपुत्र' होता है।"
    },
    {
        question: "प्रश्न 15: 'अक्षि' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आँख", correct: true },
            { text: "नयन", correct: false },
            { text: "लोचन", correct: false },
            { text: "चक्षु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अक्षि' तत्सम शब्द का तद्भव रूप 'आँख' होता है।"
    },
    {
        question: "प्रश्न 16: 'दधि' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दूध", correct: false },
            { text: "घी", correct: false },
            { text: "दही", correct: true },
            { text: "मट्ठा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दधि' एक तत्सम शब्द है, जिसका तद्भव रूप 'दही' है।"
    },
    {
        question: "प्रश्न 17: 'गोमय' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गोमूत्र", correct: false },
            { text: "गाय", correct: false },
            { text: "गोबर", correct: true },
            { text: "गोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोमय' तत्सम शब्द का तद्भव रूप 'गोबर' होता है।"
    },
    {
        question: "प्रश्न 18: 'भ्रमर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "भौंरा", correct: true },
            { text: "मधुमक्खी", correct: false },
            { text: "तितली", correct: false },
            { text: "पतंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भ्रमर' (तत्सम) का तद्भव रूप 'भौंरा' है।"
    },
    {
        question: "प्रश्न 19: निम्नलिखित में से तद्भव शब्द कौन-सा है?",
        answers: shuffle([
            { text: "कोकिल", correct: false },
            { text: "कोयल", correct: true },
            { text: "काक", correct: false },
            { text: "कर्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोयल' तद्भव शब्द है, जिसका तत्सम रूप 'कोकिल' होता है।"
    },
    {
        question: "प्रश्न 20: 'स्नेह' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नेह", correct: true },
            { text: "प्रेम", correct: false },
            { text: "प्यार", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्नेह' तत्सम शब्द का तद्भव रूप 'नेह' होता है।"
    },
    {
        question: "प्रश्न 21: 'उष्ट्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "ऊँट", correct: true },
            { text: "ऊँचा", correct: false },
            { text: "ओठ", correct: false },
            { text: "ऊसर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उष्ट्र' तत्सम शब्द है, जिसका तद्भव रूप 'ऊँट' होता है।"
    },
    {
        question: "प्रश्न 22: 'चन्द्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "चाँद", correct: true },
            { text: "चंदा", correct: false },
            { text: "चंद्रमा", correct: false },
            { text: "शशि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चन्द्र' (तत्सम) का तद्भव रूप 'चाँद' है।"
    },
    {
        question: "प्रश्न 23: निम्नलिखित में से तत्सम शब्द का चयन कीजिए।",
        answers: shuffle([
            { text: "बारात", correct: false },
            { text: "वर्षा", correct: true },
            { text: "हाथी", correct: false },
            { text: "आँसू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वर्षा' तत्सम शब्द है, जिसका तद्भव रूप 'बरसात' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'बारात' का तत्सम 'वरयात्रा', 'हाथी' का 'हस्ती' और 'आँसू' का 'अश्रु' होता है।"
    },
    {
        question: "प्रश्न 24: 'मृत्यु' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "मौत", correct: true },
            { text: "मरना", correct: false },
            { text: "मृत", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृत्यु' तत्सम शब्द का तद्भव रूप 'मौत' होता है।"
    },
    {
        question: "प्रश्न 25: 'जिह्वा' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "जान", correct: false },
            { text: "जीवन", correct: false },
            { text: "जीभ", correct: true },
            { text: "जिव्हा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जिह्वा' तत्सम शब्द है, जिसका तद्भव रूप 'जीभ' होता है।"
    },
    {
        question: "प्रश्न 26: 'पर्यंक' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पलंग", correct: true },
            { text: "पंख", correct: false },
            { text: "पकवान", correct: false },
            { text: "परिक्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पर्यंक' एक तत्सम शब्द है, जिसका तद्भव रूप 'पलंग' होता है।"
    },
    {
        question: "प्रश्न 27: निम्नलिखित में से कौन-सा शब्द तत्सम नहीं है?",
        answers: shuffle([
            { text: "पक्ष", correct: false },
            { text: "वायु", correct: false },
            { text: "साईं", correct: true },
            { text: "राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साईं' एक तद्भव शब्द है, जिसका तत्सम रूप 'स्वामी' होता है।"
    },
    {
        question: "प्रश्न 28: 'कपाट' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कपड़ा", correct: false },
            { text: "किवाड़", correct: true },
            { text: "काँटा", correct: false },
            { text: "कमर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कपाट' (तत्सम) का तद्भव रूप 'किवाड़' होता है।"
    },
    {
        question: "प्रश्न 29: 'गर्दभ' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गर्दन", correct: false },
            { text: "गधा", correct: true },
            { text: "गाय", correct: false },
            { text: "गहरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गर्दभ' तत्सम शब्द का तद्भव रूप 'गधा' है।"
    },
    {
        question: "प्रश्न 30: 'मक्षिका' किसका तत्सम शब्द है?",
        answers: shuffle([
            { text: "मछली", correct: false },
            { text: "मच्छर", correct: false },
            { text: "मक्खी", correct: true },
            { text: "मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मक्षिका' तत्सम शब्द है, जिसका तद्भव रूप 'मक्खी' होता है।"
    },
    {
        question: "प्रश्न 31: 'हरिद्रा' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "हरा", correct: false },
            { text: "हल्दी", correct: true },
            { text: "हार", correct: false },
            { text: "हीरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हरिद्रा' एक तत्सम शब्द है, जिसका तद्भव रूप 'हल्दी' है।"
    },
    {
        question: "प्रश्न 32: 'अट्टालिका' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अटारी", correct: true },
            { text: "अटाला", correct: false },
            { text: "अटल", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अट्टालिका' तत्सम शब्द का तद्भव रूप 'अटारी' होता है।"
    },
    {
        question: "प्रश्न 33: निम्नलिखित में से कौन-सा शब्द तद्भव है?",
        answers: shuffle([
            { text: "भ्रमर", correct: false },
            { text: "व्याघ्र", correct: false },
            { text: "क्षीर", correct: false },
            { text: "भौंरा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भौंरा' तद्भव शब्द है, जिसका तत्सम रूप 'भ्रमर' होता है।"
    },
    {
        question: "प्रश्न 34: 'नृत्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नाचना", correct: false },
            { text: "नाच", correct: true },
            { text: "नौ", correct: false },
            { text: "नया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नृत्य' तत्सम शब्द का तद्भव रूप 'नाच' होता है."
    },
    {
        question: "प्रश्न 35: 'शृंगार' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सिंगार", correct: true },
            { text: "श्रृंगार", correct: false },
            { text: "शृंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शृंगार' तत्सम शब्द का तद्भव रूप 'सिंगार' होता है।"
    },
    {
        question: "प्रश्न 36: 'सर्प' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "साँप", correct: true },
            { text: "सर्पिला", correct: false },
            { text: "सीधा", correct: false },
            { text: "सपेरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्प' तत्सम शब्द का तद्भव रूप 'साँप' है।"
    },
    {
        question: "प्रश्न 37: 'पत्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पत्ता", correct: true },
            { text: "चिट्ठी", correct: false },
            { text: "पन्ना", correct: false },
            { text: "पंख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पत्र' तत्सम शब्द का एक तद्भव रूप 'पत्ता' होता है।"
    },
    {
        question: "प्रश्न 38: 'अंधकार' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अंधेरा", correct: false },
            { text: "अँधेरा", correct: true },
            { text: "रात्रि", correct: false },
            { text: "तम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंधकार' तत्सम शब्द का तद्भव रूप 'अँधेरा' है।"
    },
    {
        question: "प्रश्न 39: 'स्कंध' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कंधा", correct: true },
            { text: "स्तंभ", correct: false },
            { text: "खंडहर", correct: false },
            { text: "स्कन्द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्कंध' तत्सम शब्द का तद्भव रूप 'कंधा' होता है।"
    },
    {
        question: "प्रश्न 40: 'अक्षर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आखर", correct: true },
            { text: "अक्षर", correct: false },
            { text: "शब्द", correct: false },
            { text: "वर्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अक्षर' तत्सम शब्द का तद्भव रूप 'आखर' या 'अक्खर' होता है।"
    },
    {
        question: "प्रश्न 41: 'लवण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नोन", correct: true },
            { text: "नमक", correct: false },
            { text: "क्षार", correct: false },
            { text: "लवंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लवण' तत्सम शब्द का तद्भव रूप 'नोन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'नमक' फारसी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 42: निम्नलिखित में से तत्सम शब्द कौन-सा है?",
        answers: shuffle([
            { text: "कान", correct: false },
            { text: "जीभ", correct: false },
            { text: "मुख", correct: true },
            { text: "दाँत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुख' तत्सम शब्द है, जिसका तद्भव रूप 'मुँह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'कान' का 'कर्ण', 'जीभ' का 'जिह्वा' और 'दाँत' का 'दंत' तत्सम रूप है।"
    },
    {
        question: "प्रश्न 43: 'सपत्नी' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सौतन", correct: true },
            { text: "सहेली", correct: false },
            { text: "पत्नी", correct: false },
            { text: "बहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सपत्नी' तत्सम शब्द का तद्भव रूप 'सौत' या 'सौतन' होता है।"
    },
    {
        question: "प्रश्न 44: 'वानर' शब्द का तद्भव रूप है-",
        answers: shuffle([
            { text: "वानर", correct: false },
            { text: "बन्र", correct: false },
            { text: "बांदर", correct: false },
            { text: "बन्दर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वानर' तत्सम शब्द का तद्भव रूप 'बन्दर' है।"
    },
    {
        question: "प्रश्न 45: 'दर्शन' का तद्भव रूप है-",
        answers: shuffle([
            { text: "दर्सन", correct: false },
            { text: "दरसन", correct: true },
            { text: "दरस", correct: false },
            { text: "दसर्न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दर्शन' तत्सम शब्द का तद्भव रूप 'दरसन' होता है।"
    },
    {
        question: "प्रश्न 46: निम्नलिखित में कौन-सा शब्द तत्सम है?",
        answers: shuffle([
            { text: "उद्गम", correct: true },
            { text: "खेत", correct: false },
            { text: "कोट", correct: false },
            { text: "अजीब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उद्गम' तत्सम शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेष शब्द तद्भव या विदेशी हैं।"
    },
    {
        question: "प्रश्न 47: 'अपील' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: false },
            { text: "विदेशज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपील' अंग्रेजी भाषा का शब्द है, इसलिए यह विदेशज है।"
    },
    {
        question: "प्रश्न 48: 'मगही' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: true },
            { text: "देशज", correct: false },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मगही' शब्द 'मागधी' का तद्भव रूप है।"
    },
    {
        question: "प्रश्न 49: 'संधि' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: true },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: false },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संधि' एक संस्कृत शब्द है, अतः यह तत्सम है।"
    },
    {
        question: "प्रश्न 50: 'लोटा' शब्द है-",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोटा' शब्द की उत्पत्ति का पता नहीं चलता, अतः यह देशज शब्द है।"
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