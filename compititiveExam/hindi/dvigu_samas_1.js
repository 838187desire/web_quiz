const questions = [
    {
        topHeading: "द्विगु समास पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'पंचवटी' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु समास", correct: true },
            { text: "कर्मधारय समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचवटी' का विग्रह 'पाँच वटों (वृक्षों) का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ पहला पद 'पंच' (पाँच) संख्यावाची है, इसलिए यह द्विगु समास है।"
    },
    {
        question: "प्रश्न 2. 'त्रिफला' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "तीन हैं फल जो", correct: false },
            { text: "तीन फलों का समाहार", correct: true },
            { text: "तीन फल वाला", correct: false },
            { text: "तीन और फल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्रिफला का अर्थ तीन फलों का समूह या समाहार होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि पहला पद संख्यावाची है, यह द्विगु समास का उदाहरण है।"
    },
    {
        question: "प्रश्न 3. जिस समास का पहला पद संख्यावाचक विशेषण होता है, वह कहलाता है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false },
            { text: "द्विगु समास", correct: true },
            { text: "कर्मधारय समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्विगु समास की परिभाषा के अनुसार, इसका पूर्वपद (पहला पद) संख्यावाची होता है और समस्त पद एक समूह का बोध कराता है।"
    },
    {
        question: "प्रश्न 4. 'नवग्रह' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "द्विगु समास", correct: true },
            { text: "द्वंद्व समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नवग्रह' का समास विग्रह 'नौ ग्रहों का समूह' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'नव' संख्या का बोध करा रहा है, अतः यह द्विगु समास है।"
    },
    {
        question: "प्रश्न 5. 'दोपहर' का समास विग्रह होगा-",
        answers: shuffle([
            { text: "दूसरा पहर", correct: false },
            { text: "दो पहरों का समाहार", correct: true },
            { text: "दो पहरों में", correct: false },
            { text: "दो और पहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दोपहर' शब्द में 'दो' संख्यावाची है और यह 'दो पहरों के समूह' का बोध कराता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह द्विगु समास है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से कौन सा शब्द द्विगु समास का उदाहरण है?",
        answers: shuffle([
            { text: "पीताम्बर", correct: false },
            { text: "चौराहा", correct: true },
            { text: "नीलकंठ", correct: false },
            { text: "दशानन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चौराहा' का विग्रह 'चार राहों का समाहार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ पूर्वपद 'चौ' (चार) संख्यावाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्प बहुव्रीहि समास के उदाहरण हैं।"
    },
    {
        question: "प्रश्न 7. 'सप्ताह' शब्द में समास है-",
        answers: shuffle([
            { text: "द्विगु समास", correct: true },
            { text: "द्वंद्व समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्ताह' का विग्रह 'सात दिनों (अह्नों) का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सप्त' संख्यावाची है, इसलिए यहाँ द्विगु समास है।"
    },
    {
        question: "प्रश्न 8. 'चतुर्भुज' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "केवल द्विगु", correct: false },
            { text: "केवल बहुव्रीहि", correct: false },
            { text: "द्विगु और बहुव्रीहि दोनों", correct: true },
            { text: "केवल कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि 'चतुर्भुज' का विग्रह 'चार भुजाओं का समूह' करें तो यह द्विगु समास है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि इसका विग्रह 'चार हैं भुजाएँ जिसकी' अर्थात् विष्णु करें, तो यह बहुव्रीहि समास है।<br><br><i class='fa-solid fa-angles-right icon'></i> विकल्प के अनुसार यहाँ दोनों की संभावना है।"
    },
    {
        question: "प्रश्न 9. 'शताब्दी' का सही समास विग्रह है-",
        answers: shuffle([
            { text: "शत अब्दों (वर्षों) का समूह", correct: true },
            { text: "सौ हैं अब्द जिसमें", correct: false },
            { text: "शत और अब्द", correct: false },
            { text: "शत है जो अब्द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शताब्दी' शब्द में 'शत' (सौ) संख्यावाची है और यह सौ वर्षों के समूह को दर्शाता है, अतः यह द्विगु समास है।"
    },
    {
        question: "प्रश्न 10. 'अठन्नी' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: false },
            { text: "द्वंद्व समास", correct: false },
            { text: "द्विगु समास", correct: true },
            { text: "कर्मधारय समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अठन्नी' का विग्रह 'आठ आनों का समाहार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'आठ' संख्यावाची होने के कारण यह द्विगु समास है।"
    },
    {
        question: "प्रश्न 11. 'नवरात्रि' शब्द का समास विग्रह और भेद बताइए।",
        answers: shuffle([
            { text: "नौ रात्रियों का समाहार - द्विगु समास", correct: true },
            { text: "नव है जो रात्रि - कर्मधारय समास", correct: false },
            { text: "नौ और रात्रि - द्वंद्व समास", correct: false },
            { text: "रात्रि का नवम भाग - तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नवरात्रि' शब्द का पहला पद 'नव' (नौ) संख्यावाची है और यह नौ रात्रियों के समूह का बोध कराता है।"
    },
    {
        question: "प्रश्न 12. किस विकल्प में द्विगु समास नहीं है?",
        answers: shuffle([
            { text: "त्रिभुवन", correct: false },
            { text: "पंचानन", correct: true },
            { text: "नवरत्न", correct: false },
            { text: "सप्तर्षि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचानन' का अर्थ है 'पाँच हैं आनन (मुख) जिसके' अर्थात् शिव।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ यह तीसरा अर्थ दे रहा है, इसलिए यह बहुव्रीहि समास है, द्विगु नहीं।"
    },
    {
        question: "प्रश्न 13. 'तिरंगा' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु समास", correct: true },
            { text: "द्वंद्व समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तिरंगा' का विग्रह 'तीन रंगों का समाहार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि यह भारत के राष्ट्रीय ध्वज के लिए रूढ़ हो गया है, पर मूल रूप से पहला पद संख्यावाची होने के कारण इसे द्विगु समास में गिना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि विकल्प में बहुव्रीहि हो तो वह भी सही हो सकता है।"
    },
    {
        question: "प्रश्न 14. 'त्रिवेणी' का समास विग्रह है-",
        answers: shuffle([
            { text: "तीन वेणियों का समाहार", correct: true },
            { text: "तीन हैं वेणी जहाँ", correct: false },
            { text: "तीन और वेणी", correct: false },
            { text: "तीन नदियों वाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिवेणी' शब्द तीन धाराओं (वेणियों) के समूह को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> पहला पद 'त्रि' संख्यावाची है।"
    },
    {
        question: "प्रश्न 15. 'षट्कोण' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'षट्कोण' का विग्रह 'छह कोणों का समाहार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'षट्' (छह) संख्यावाची है।"
    },
    {
        question: "प्रश्न 16. 'चौमासा' शब्द किस समास का उदाहरण है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "द्विगु", correct: true },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चौमासा' का विग्रह 'चार मासों का समूह' होता है, अतः यह द्विगु समास है।"
    },
    {
        question: "प्रश्न 17. 'दोराहा' शब्द का विग्रह क्या होगा?",
        answers: shuffle([
            { text: "दो राहों वाला", correct: false },
            { text: "दो राहें और", correct: false },
            { text: "राहों का दूसरा", correct: false },
            { text: "दो राहों का समाहार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दोराहा' में 'दो' संख्यावाची है और यह दो राहों के समूह को इंगित करता है।"
    },
    {
        question: "प्रश्न 18. 'एकांकी' शब्द में समास है-",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एकांकी' का विग्रह 'एक अंक का (नाटक)' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'एक' संख्यावाची है, अतः यह द्विगु समास है।"
    },
    {
        question: "प्रश्न 19. 'त्रिलोक' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिलोक' का विग्रह 'तीन लोकों का समाहार' है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'त्रि' संख्यावाची है।"
    },
    {
        question: "प्रश्न 20. 'पंचपात्र' का अर्थ है-",
        answers: shuffle([
            { text: "पाँच हैं पात्र जो", correct: false },
            { text: "पाँच पात्रों का समाहार", correct: true },
            { text: "पाँच और पात्र", correct: false },
            { text: "पाँचवाँ पात्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचपात्र' शब्द में 'पंच' (पाँच) संख्यावाची है और यह समूह का बोध कराता है, इसलिए यह द्विगु समास है।"
    },
    {
        question: "प्रश्न 21. निम्नलिखित में से किस शब्द में द्विगु समास है?",
        answers: shuffle([
            { text: "राम-लक्ष्मण", correct: false },
            { text: "घनश्याम", correct: false },
            { text: "पंजाब", correct: true },
            { text: "नराधम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंजाब' का विग्रह 'पाँच आबों (नदियों) का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'पंज' (पाँच) संख्यावाची है।"
    },
    {
        question: "प्रश्न 22. 'द्विगु' शब्द का ही सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "दो गायों का समाहार", correct: true },
            { text: "दो हैं जो गु", correct: false },
            { text: "दो और गु", correct: false },
            { text: "दूसरी गाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वयं 'द्विगु' शब्द भी द्विगु समास का उदाहरण है, जिसका अर्थ 'दो गायों का समूह' होता है।"
    },
    {
        question: "प्रश्न 23. 'सप्तसिंधु' में समास बताइए।",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्तसिंधु' का विग्रह 'सात सिंधुओं (नदियों) का समूह' है।<br><br><i class='fa-solid fa-angles-right icon'></i> पहला पद संख्यावाची है।"
    },
    {
        question: "प्रश्न 24. 'चारपाई' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चारपाई' का विग्रह 'चार पायौं (पैरों) का समाहार' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यद्यपि यह एक विशेष वस्तु (खाट) के लिए रूढ़ है, फिर भी व्याकरणिक रूप से इसे द्विगु में रखा जाता है।"
    },
    {
        question: "प्रश्न 25. 'दुधारी' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुधारी' का विग्रह 'दो धारों का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'दु' (दो) संख्यावाची है।"
    },
    {
        question: "प्रश्न 26. 'त्रिकोना' का समास विग्रह है-",
        answers: shuffle([
            { text: "तीन हैं कोने जिसके", correct: false },
            { text: "तीन कोनों का समाहार", correct: true },
            { text: "तीन और कोना", correct: false },
            { text: "तीसरा कोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिकोना' में 'त्रि' (तीन) संख्यावाची है और यह तीन कोनों के समूह का बोध कराता है।"
    },
    {
        question: "प्रश्न 27. 'छमाही' में समास है-",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छमाही' का विग्रह 'छह माह का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'छह' संख्यावाची है।"
    },
    {
        question: "प्रश्न 28. किस समूह के सभी शब्द द्विगु समास के उदाहरण हैं?",
        answers: shuffle([
            { text: "त्रिलोक, सप्ताह, शताब्दी", correct: true },
            { text: "चौराहा, पीताम्बर, त्रिभुज", correct: false },
            { text: "दोपहर, दशानन, पंचवटी", correct: false },
            { text: "नवरत्न, नीलकंठ, त्रिफला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस विकल्प के सभी शब्दों (तीन लोकों का समूह, सात दिनों का समूह, सौ वर्षों का समूह) में पहला पद संख्यावाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्पों में बहुव्रीहि समास के शब्द भी शामिल हैं।"
    },
    {
        question: "प्रश्न 29. 'नवनिधि' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नवनिधि' का विग्रह 'नौ निधियों का समाहार' होता है।"
    },
    {
        question: "प्रश्न 30. 'पंचतंत्र' का समास विग्रह क्या होगा?",
        answers: shuffle([
            { text: "पाँच हैं तंत्र जिसमें", correct: false },
            { text: "पाँच तंत्रों का समाहार", correct: true },
            { text: "पाँच और तंत्र", correct: false },
            { text: "पाँचवाँ तंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचतंत्र' में 'पंच' संख्यावाची है और यह पाँच तंत्रों के समूह को दर्शाता है।"
    },
    {
        question: "प्रश्न 31. 'चौकड़ी' शब्द में समास है-",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चौकड़ी' का विग्रह 'चार कड़ियों का समूह' होता है।"
    },
    {
        question: "प्रश्न 32. 'सप्तपदी' का सही विग्रह है-",
        answers: shuffle([
            { text: "सात पद हैं जिसमें", correct: false },
            { text: "सातवाँ पद", correct: false },
            { text: "सात पदों का समाहार", correct: true },
            { text: "सात और पद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्तपदी' में 'सप्त' (सात) संख्यावाची है और यह सात पदों (कदमों) के समूह का बोध कराता है।"
    },
    {
        question: "प्रश्न 33. 'अष्टाध्यायी' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अष्टाध्यायी' का विग्रह 'आठ अध्यायों का समाहार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पाणिनी की प्रसिद्ध रचना का नाम भी है, लेकिन व्याकरणिक संरचना द्विगु की है।"
    },
    {
        question: "प्रश्न 34. 'सतसई' शब्द किस समास का उदाहरण है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सतसई' का विग्रह 'सात सौ (दोहों) का समाहार' है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सत' (सात) संख्या का सूचक है।"
    },
    {
        question: "प्रश्न 35. वह समास, जिसमें उत्तर पद प्रधान हो तथा पूर्व पद संख्यावाची हो, कहलाता है-",
        answers: shuffle([
            { text: "तत्पुरुष समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false },
            { text: "द्विगु समास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह द्विगु समास की स्पष्ट परिभाषा है।"
    },
    {
        question: "प्रश्न 36. 'त्रिभुज' शब्द में समास है-",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिभुज' का विग्रह 'तीन भुजाओं का समाहार' होता है।"
    },
    {
        question: "प्रश्न 37. 'दुनाली' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुनाली' का विग्रह 'दो नालियों (नलों) का समूह' होता है।"
    },
    {
        question: "प्रश्न 38. 'चौपाल' शब्द में समास है-",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चौपाल' का विग्रह 'चार पालों (स्थानों) का समाहार' होता है।"
    },
    {
        question: "प्रश्न 39. 'पंचामृत' का विग्रह है-",
        answers: shuffle([
            { text: "पाँचवाँ अमृत", correct: false },
            { text: "पाँच प्रकार के अमृत", correct: false },
            { text: "पाँच अमृतों का समाहार", correct: true },
            { text: "अमृत रूपी पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचामृत' पाँच अमृत (दूध, दही, घी, शहद, शक्कर) के समूह को कहते हैं, अतः यह द्विगु समास है।"
    },
    {
        question: "प्रश्न 40. 'चौखट' शब्द में समास है-",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चौखट' का विग्रह 'चार खूँटों (किनारों) का समाहार' होता है।"
    },
    {
        question: "प्रश्न 41. 'त्रियुगी' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रियुगी' का विग्रह 'तीन युगों का समाहार' होता है।"
    },
    {
        question: "प्रश्न 42. 'दुमंज़िला' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "दो हैं मंज़िल जिसमें", correct: false },
            { text: "दो मंज़िलों का समाहार", correct: true },
            { text: "दूसरी मंज़िल", correct: false },
            { text: "दो और मंज़िल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुमंज़िला' में 'दु' (दो) संख्यावाची है और यह समूह का बोध कराता है।"
    },
    {
        question: "प्रश्न 43. 'अठकोना' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: true },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अठकोना' का विग्रह 'आठ कोनों का समाहार' होता है।"
    },
    {
        question: "प्रश्न 44. 'पंचगव्य' में समास बताइए।",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचगव्य' का विग्रह 'पाँच गव्यों (गाय से प्राप्त वस्तुएँ) का समाहार' होता है।"
    },
    {
        question: "प्रश्न 45. किस विकल्प में द्विगु समास का सही प्रयोग हुआ है?",
        answers: shuffle([
            { text: "दशमुख", correct: false },
            { text: "चवन्नी", correct: true },
            { text: "लम्बोदर", correct: false },
            { text: "गजानन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चवन्नी' का विग्रह 'चार आनों का समाहार' है, जो द्विगु समास है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्प बहुव्रीहि समास के हैं।"
    },
    {
        question: "प्रश्न 46. 'द्विअक्षर' का विग्रह है-",
        answers: shuffle([
            { text: "दो और अक्षर", correct: false },
            { text: "दो अक्षरों वाला", correct: false },
            { text: "दूसरा अक्षर", correct: false },
            { text: "दो अक्षरों का समाहार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्विअक्षर' में 'द्वि' संख्यावाची है, अतः यह द्विगु समास है।"
    },
    {
        question: "प्रश्न 47. 'तिमाही' शब्द का समास है-",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "द्विगु", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तिमाही' का विग्रह 'तीन माहों का समाहार' होता है।"
    },
    {
        question: "प्रश्न 48. 'नवरस' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नवरस' का विग्रह 'नौ रसों का समाहार' होता है।"
    },
    {
        question: "प्रश्न 49. 'चतुर्वर्ण' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुर्वर्ण' का विग्रह 'चार वर्णों का समाहार' होता है।"
    },
    {
        question: "प्रश्न 50. 'चौमासा' में समास है-",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चौमासा' का विग्रह 'चार मासों का समाहार' है।"
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