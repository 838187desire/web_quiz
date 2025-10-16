const questions = [
    {
        topHeading: "तत्पुरुष समास पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'रसोईघर' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "सम्प्रदान तत्पुरुष", correct: true },
            { text: "अधिकरण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'रसोई के लिए घर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'के लिए' सम्प्रदान कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 2. 'राजपुत्र' शब्द का सही विग्रह क्या है?",
        answers: shuffle([
            { text: "राजा में पुत्र", correct: false },
            { text: "राजा का पुत्र", correct: true },
            { text: "राजा और पुत्र", correct: false },
            { text: "राजा के लिए पुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'का' सम्बन्ध कारक की विभक्ति का लोप है, अतः यह सम्बन्ध तत्पुरुष समास है।"
    },
    {
        question: "प्रश्न 3. 'धर्मभ्रष्ट' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "अपादान तत्पुरुष", correct: true },
            { text: "करण तत्पुरुष", correct: false },
            { text: "सम्प्रदान तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'धर्म से भ्रष्ट' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' विभक्ति अलग होने (हटने) के भाव में है।"
    },
    {
        question: "प्रश्न 4. 'हस्तलिखित' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: true },
            { text: "अपादान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'हस्त से लिखित' या 'हस्त के द्वारा लिखित' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' साधन के अर्थ में प्रयुक्त हुआ है।"
    },
    {
        question: "प्रश्न 5. 'आपबीती' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: true },
            { text: "द्वंद्व समास", correct: false },
            { text: "कर्मधारय समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'आप पर बीती' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'पर' अधिकरण कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से किस शब्द में कर्म तत्पुरुष समास है?",
        answers: shuffle([
            { text: "मुँहतोड़", correct: true },
            { text: "गुणहीन", correct: false },
            { text: "शोकाकुल", correct: false },
            { text: "देशप्रेम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'मुँह को तोड़ने वाला' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' कर्म कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 7. 'देशभक्ति' का सही विग्रह है-",
        answers: shuffle([
            { text: "देश में भक्ति", correct: false },
            { text: "देश की भक्ति", correct: false },
            { text: "देश से भक्ति", correct: false },
            { text: "देश के लिए भक्ति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'के लिए' सम्प्रदान कारक की विभक्ति का लोप है, अतः यह सम्प्रदान तत्पुरुष है।"
    },
    {
        question: "प्रश्न 8. 'जन्मांध' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "करण तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: true },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "कर्म तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'जन्म से अंधा' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' विभक्ति जन्म की अवस्था से अलग होने का भाव प्रकट कर रही है।"
    },
    {
        question: "प्रश्न 9. 'मनमाना' में कौन सा समास है?",
        answers: shuffle([
            { text: "अधिकरण तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: true },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "कर्मधारय समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'मन से माना हुआ' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' साधन या माध्यम का कार्य कर रहा है।"
    },
    {
        question: "प्रश्न 10. 'वनवास' शब्द में समास है-",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: true },
            { text: "सम्प्रदान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'वन में वास' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'में' अधिकरण कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 11. 'गंगाजल' का विग्रह है-",
        answers: shuffle([
            { text: "गंगा और जल", correct: false },
            { text: "गंगा में जल", correct: false },
            { text: "गंगा का जल", correct: true },
            { text: "गंगा से जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'का' सम्बन्ध कारक की विभक्ति का लोप है, अतः यह सम्बन्ध तत्पुरुष है।"
    },
    {
        question: "प्रश्न 12. 'ऋणमुक्त' में कौन सा समास है?",
        answers: shuffle([
            { text: "सम्प्रदान तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'ऋण से मुक्त' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' अलग होने के अर्थ में है।"
    },
    {
        question: "प्रश्न 13. 'चिड़ीमार' का समास विग्रह है-",
        answers: shuffle([
            { text: "चिड़ी को मारने वाला", correct: true },
            { text: "चिड़ी से मारने वाला", correct: false },
            { text: "चिड़ी के लिए मारना", correct: false },
            { text: "चिड़ी में मारना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' कर्म कारक की विभक्ति का लोप है, अतः यह कर्म तत्पुरुष समास है।"
    },
    {
        question: "प्रश्न 14. 'सिरदर्द' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "अधिकरण तत्पुरुष", correct: false },
            { text: "सम्बन्ध तत्पुरुष", correct: true },
            { text: "करण तत्पुरुष", correct: false },
            { text: "द्वंद्व समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका सामान्य विग्रह 'सिर का दर्द' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह सम्बन्ध तत्पुरुष है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुछ विद्वान इसे 'सिर में दर्द' मानकर अधिकरण तत्पुरुष भी कहते हैं, पर सम्बन्ध अधिक प्रचलित है।"
    },
    {
        question: "प्रश्न 15. 'तुलसीकृत' में प्रयुक्त समास है-",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: true },
            { text: "सम्प्रदान तत्पुरुष", correct: false },
            { text: "सम्बन्ध तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'तुलसी द्वारा कृत (रचित)' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'द्वारा' करण कारक की विभक्ति है।"
    },
    {
        question: "प्रश्न 16. 'विद्यार्थी' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "विद्या का अर्थी", correct: true },
            { text: "विद्या के लिए अर्थी", correct: false },
            { text: "विद्या को चाहने वाला", correct: false },
            { text: "विद्या और अर्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'विद्या का अर्थी (चाहने वाला)' होता है, जिसमें 'का' सम्बन्ध कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 17. 'अकालपीड़ित' में कौन सा समास है?",
        answers: shuffle([
            { text: "अपादान तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: true },
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'अकाल से पीड़ित' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' साधन या कारण के अर्थ में है।"
    },
    {
        question: "प्रश्न 18. 'कार्यकुशल' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "अधिकरण तत्पुरुष", correct: true },
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "सम्प्रदान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कार्य में कुशल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'में' अधिकरण कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 19. 'अन्याय' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "नञ् तत्पुरुष", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'न न्याय' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिस समास में पहला पद निषेधात्मक (अ, अन्, न, ना) हो, वह नञ् तत्पुरुष होता है।"
    },
    {
        question: "प्रश्न 20. 'राजदरबार' में कौन सा समास है?",
        answers: shuffle([
            { text: "सम्बन्ध तत्पुरुष", correct: true },
            { text: "अधिकरण तत्पुरुष", correct: false },
            { text: "सम्प्रदान तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'राजा का दरबार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'का' सम्बन्ध कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 21. 'जलमग्न' शब्द का विग्रह होगा-",
        answers: shuffle([
            { text: "जल का मग्न", correct: false },
            { text: "जल में मग्न", correct: true },
            { text: "जल से मग्न", correct: false },
            { text: "जल और मग्न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'में' अधिकरण कारक की विभक्ति का लोप है, अतः यह अधिकरण तत्पुरुष है।"
    },
    {
        question: "प्रश्न 22. 'गगनचुंबी' का सही विग्रह है-",
        answers: shuffle([
            { text: "गगन में चुंबन", correct: false },
            { text: "गगन को चूमने वाला", correct: true },
            { text: "गगन का चुंबन", correct: false },
            { text: "गगन से चुंबन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' कर्म कारक की विभक्ति का लोप है, अतः यह कर्म तत्पुरुष समास है।"
    },
    {
        question: "प्रश्न 23. 'भयभीत' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "करण तत्पुरुष", correct: false },
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: true },
            { text: "सम्बन्ध तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'भय से भीत (डरा हुआ)' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> डरने के भाव में 'से' विभक्ति अपादान कारक की होती है।"
    },
    {
        question: "प्रश्न 24. 'अधर्म' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: false },
            { text: "द्वंद्व समास", correct: false },
            { text: "नञ् तत्पुरुष समास", correct: true },
            { text: "अव्ययीभाव समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'न धर्म' होता है, जो अभाव या निषेध का बोध कराता है।"
    },
    {
        question: "प्रश्न 25. 'लोकप्रिय' में समास है-",
        answers: shuffle([
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'लोक में प्रिय' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'में' अधिकरण कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 26. 'शोकाकुल' में कौन सा समास है?",
        answers: shuffle([
            { text: "करण तत्पुरुष", correct: true },
            { text: "अपादान तत्पुरुष", correct: false },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "कर्म तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'शोक से आकुल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' कारण बताने के अर्थ में है।"
    },
    {
        question: "प्रश्न 27. 'पराधीन' का समास विग्रह है-",
        answers: shuffle([
            { text: "पर के अधीन", correct: true },
            { text: "पर और आधीन", correct: false },
            { text: "पर से आधीन", correct: false },
            { text: "पर को आधीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'पर (दूसरे) के अधीन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'के' सम्बन्ध कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 28. 'पॉकेटमार' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: true },
            { text: "करण तत्पुरुष", correct: false },
            { text: "सम्प्रदान तत्पुरुष", correct: false },
            { text: "अव्ययीभाव समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'पॉकेट को मारने वाला (काटने वाला)' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 29. 'धनहीन' में कौन सा समास है?",
        answers: shuffle([
            { text: "करण तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: true },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'धन से हीन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' अलग होने या रहित होने के भाव में है।"
    },
    {
        question: "प्रश्न 30. 'पुरुषोत्तम' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "अधिकरण तत्पुरुष", correct: true },
            { text: "कर्मधारय समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "द्वंद्व समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'पुरुषों में उत्तम' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'में' अधिकरण कारक की विभक्ति है। (विशेषण-विशेष्य भाव होने पर कर्मधारय भी माना जाता है, पर कारक चिह्न के अनुसार यह अधिकरण तत्पुरुष है)।"
    },
    {
        question: "प्रश्न 31. 'घुड़सवार' का विग्रह क्या होगा?",
        answers: shuffle([
            { text: "घोड़े का सवार", correct: false },
            { text: "घोड़े पर सवार", correct: true },
            { text: "घोड़े के लिए सवार", correct: false },
            { text: "घोड़े से सवार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'पर' अधिकरण कारक की विभक्ति का लोप है, अतः यह अधिकरण तत्पुरुष है।"
    },
    {
        question: "प्रश्न 32. 'प्रेमातुर' में कौन सा समास है?",
        answers: shuffle([
            { text: "करण तत्पुरुष", correct: true },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'प्रेम से आतुर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' विभक्ति कारण दर्शा रही है।"
    },
    {
        question: "प्रश्न 33. 'सत्याग्रह' शब्द का विग्रह होगा-",
        answers: shuffle([
            { text: "सत्य का ग्रह", correct: false },
            { text: "सत्य के लिए आग्रह", correct: true },
            { text: "सत्य में आग्रह", correct: false },
            { text: "सत्य और आग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'के लिए' सम्प्रदान कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 34. 'ग्रामगत' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: true },
            { text: "करण तत्पुरुष", correct: false },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'ग्राम को गत (गया हुआ)' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 35. 'सेनापति' का विग्रह है-",
        answers: shuffle([
            { text: "सेना का पति", correct: true },
            { text: "सेना में पति", correct: false },
            { text: "सेना के लिए पति", correct: false },
            { text: "सेना से पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'का' सम्बन्ध कारक की विभक्ति का लोप है, अतः यह सम्बन्ध तत्पुरुष है।"
    },
    {
        question: "प्रश्न 36. 'शरणागत' में कौन सा समास है?",
        answers: shuffle([
            { text: "अधिकरण तत्पुरुष", correct: false },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "कर्म तत्पुरुष", correct: true },
            { text: "करण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'शरण को आगत (आया हुआ)' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' कर्म कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 37. 'अनदेखा' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "नञ् तत्पुरुष", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'न देखा हुआ' होता है, जो निषेध का भाव प्रकट करता है।"
    },
    {
        question: "प्रश्न 38. 'धर्मविमुख' में कौन सा समास है?",
        answers: shuffle([
            { text: "अपादान तत्पुरुष", correct: true },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'धर्म से विमुख' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' अलग होने के अर्थ में प्रयुक्त हुआ है।"
    },
    {
        question: "प्रश्न 39. 'गृहस्वामी' का विग्रह है-",
        answers: shuffle([
            { text: "गृह में स्वामी", correct: false },
            { text: "गृह का स्वामी", correct: true },
            { text: "गृह के लिए स्वामी", correct: false },
            { text: "गृह पर स्वामी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'का' सम्बन्ध कारक की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 40. 'जलकुंभी' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "अधिकरण तत्पुरुष", correct: true },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'जल में उत्पन्न कुंभी' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अधिकरण तत्पुरुष का उदाहरण है।"
    },
    {
        question: "प्रश्न 41. 'मरणासन्न' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: true },
            { text: "करण तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: false },
            { text: "सम्बन्ध तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'मरण को आसन्न (निकट पहुँचा हुआ)' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 42. 'असंभव' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "नञ् तत्पुरुष", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'न संभव' होता है, जो निषेध का बोध कराता है।"
    },
    {
        question: "प्रश्न 43. 'रेखांकित' का सही विग्रह है-",
        answers: shuffle([
            { text: "रेखा में अंकित", correct: false },
            { text: "रेखा पर अंकित", correct: false },
            { text: "रेखा से अंकित", correct: true },
            { text: "रेखा का अंकित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' करण कारक (साधन) की विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 44. 'नगरवास' में कौन सा समास है?",
        answers: shuffle([
            { text: "अधिकरण तत्पुरुष", correct: true },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'नगर में वास' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'में' विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 45. 'आत्मनिर्भर' में समास है-",
        answers: shuffle([
            { text: "सम्प्रदान तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: false },
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'आत्म (स्वयं) पर निर्भर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'पर' विभक्ति का लोप है।"
    },
    {
        question: "प्रश्न 46. 'जीवनदान' का विग्रह है-",
        answers: shuffle([
            { text: "जीवन का दान", correct: true },
            { text: "जीवन में दान", correct: false },
            { text: "जीवन से दान", correct: false },
            { text: "जीवन के लिए दान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'का' सम्बन्ध कारक की विभक्ति का लोप है, अतः यह सम्बन्ध तत्पुरुष है।"
    },
    {
        question: "प्रश्न 47. 'बाढ़पीड़ित' में कौन सा समास है?",
        answers: shuffle([
            { text: "करण तत्पुरुष", correct: true },
            { text: "अपादान तत्पुरुष", correct: false },
            { text: "सम्प्रदान तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'बाढ़ से पीड़ित' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' कारण के अर्थ में प्रयुक्त हुआ है।"
    },
    {
        question: "प्रश्न 48. 'पददलित' में कौन सा समास है?",
        answers: shuffle([
            { text: "अपादान तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: true },
            { text: "सम्बन्ध तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'पद से दलित (कुचला हुआ)' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' साधन के अर्थ में है।"
    },
    {
        question: "प्रश्न 49. 'नास्तिक' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "नञ् तत्पुरुष", correct: true },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'न आस्तिक' (जो ईश्वर में आस्था न रखे) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'न' निषेधार्थक है।"
    },
    {
        question: "प्रश्न 50. 'आनंदमग्न' में कौन सा समास है?",
        answers: shuffle([
            { text: "सम्बन्ध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: true },
            { text: "करण तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'आनंद में मग्न' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'में' विभक्ति का लोप है।"
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