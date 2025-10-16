const questions = [
    {
        topHeading: "कर्मधारय समास पर आधारित 58 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'नीलकमल' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु समास", correct: false },
            { text: "कर्मधारय समास", correct: true },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'नीला है जो कमल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'नील' विशेषण और 'कमल' विशेष्य है, इसलिए यह कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 2. 'महात्मा' शब्द का सही विग्रह क्या है?",
        answers: shuffle([
            { text: "महान है जो आत्मा", correct: true },
            { text: "महान और आत्मा", correct: false },
            { text: "आत्मा में महान", correct: false },
            { text: "महान की आत्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'महान' विशेषण आत्मा की विशेषता बता रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह कर्मधारय समास का उदाहरण है।"
    },
    {
        question: "प्रश्न 3. 'कालीमिर्च' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false },
            { text: "कर्मधारय समास", correct: true },
            { text: "बहुव्रीहि समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'काली है जो मिर्च' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें पहला पद 'काली' (विशेषण) और दूसरा पद 'मिर्च' (विशेष्य) है।"
    },
    {
        question: "प्रश्न 4. 'चंद्रमुख' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "कर्मधारय समास", correct: true },
            { text: "द्विगु समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'चंद्र के समान मुख' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ उपमान (चंद्र) और उपमेय (मुख) का संबंध है, इसलिए यह कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से कौन सा शब्द कर्मधारय समास का उदाहरण है?",
        answers: shuffle([
            { text: "राजकुमार", correct: false },
            { text: "पीतांबर", correct: true },
            { text: "रसोईघर", correct: false },
            { text: "दाल-रोटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पीत है जो अंबर' (वस्त्र) के विग्रह के अनुसार यह कर्मधारय समास है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि इसका विग्रह 'पीत हैं अंबर जिसके' (अर्थात् कृष्ण) किया जाए, तो यह बहुव्रीहि होगा, लेकिन विकल्पों के अनुसार यहाँ कर्मधारय अधिक उपयुक्त है।"
    },
    {
        question: "प्रश्न 6. 'मृगनयनी' का विग्रह क्या होगा?",
        answers: shuffle([
            { text: "मृग और नयन", correct: false },
            { text: "मृग के नयन", correct: false },
            { text: "मृग के समान नयन हैं जिसके", correct: false },
            { text: "मृग के समान नयन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ नयनों की उपमा मृग के नयनों से दी गई है (उपमान-उपमेय संबंध), अतः यह कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 7. 'सज्जन' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: true },
            { text: "द्वंद्व समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'सत् (अच्छा) है जो जन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ भी विशेषण-विशेष्य का संबंध है।"
    },
    {
        question: "प्रश्न 8. 'देहलता' का समास विग्रह है-",
        answers: shuffle([
            { text: "देह की लता", correct: false },
            { text: "देह और लता", correct: false },
            { text: "देहरूपी लता", correct: true },
            { text: "लता जैसी देह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ उपमेय (देह) पर उपमान (लता) का आरोप किया गया है, यह रूपक कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 9. 'परमानंद' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: false },
            { text: "कर्मधारय समास", correct: true },
            { text: "द्विगु समास", correct: false },
            { text: "द्वंद्व समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'परम है जो आनंद' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'परम' विशेषण है जो 'आनंद' की विशेषता बता रहा है।"
    },
    {
        question: "प्रश्न 10. 'नीलगाय' शब्द में समास है-",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "अव्ययीभाव", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'नीली है जो गाय' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'नीली' विशेषण और 'गाय' विशेष्य है।"
    },
    {
        question: "प्रश्न 11. 'अधमरा' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: true },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "तत्पुरुष समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'आधा है जो मरा' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अध' (आधा) विशेषण का कार्य कर रहा है।"
    },
    {
        question: "प्रश्न 12. 'घनश्याम' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'घन के समान श्याम' है, जो कर्मधारय समास (उपमान-उपमेय) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि इसका अर्थ कृष्ण लिया जाए तो यह बहुव्रीहि भी हो सकता है।"
    },
    {
        question: "प्रश्न 13. 'चरणकमल' का सही विग्रह है-",
        answers: shuffle([
            { text: "चरण और कमल", correct: false },
            { text: "कमल के समान चरण", correct: true },
            { text: "चरण में कमल", correct: false },
            { text: "चरण का कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ चरणों की उपमा कमल से दी गई है, अतः यह उपमान-उपमेय कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 14. 'महाकवि' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: true },
            { text: "तत्पुरुष समास", correct: false },
            { text: "द्विगु समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'महान है जो कवि' होता है, जिसमें 'महान' विशेषण है।"
    },
    {
        question: "प्रश्न 15. 'नरसिंह' में प्रयुक्त समास है-",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'सिंह के समान नर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ उपमान-उपमेय का संबंध है।"
    },
    {
        question: "प्रश्न 16. 'विद्याधन' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "विद्या का धन", correct: false },
            { text: "विद्या और धन", correct: false },
            { text: "विद्यरूपी धन", correct: true },
            { text: "विद्या के लिए धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसमें विद्या को ही धन का रूप माना गया है, अतः यह रूपक कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 17. किस शब्द में कर्मधारय समास है?",
        answers: shuffle([
            { text: "पंचवटी", correct: false },
            { text: "त्रिफला", correct: false },
            { text: "नवयुवक", correct: true },
            { text: "दशानन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'नव है जो युवक' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'नव' विशेषण युवक की विशेषता बता रहा है।"
    },
    {
        question: "प्रश्न 18. 'शुभागमन' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: true },
            { text: "द्विगु समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'शुभ है जो आगमन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'शुभ' विशेषण है।"
    },
    {
        question: "प्रश्न 19. 'प्राणप्रिय' का विग्रह होगा-",
        answers: shuffle([
            { text: "प्राण और प्रिय", correct: false },
            { text: "प्राणों से प्रिय", correct: false },
            { text: "प्राणों के समान प्रिय", correct: true },
            { text: "प्रिय प्राण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ प्रिय की उपमा प्राणों से दी गई है, जो उपमान-उपमेय संबंध को दर्शाता है।"
    },
    {
        question: "प्रश्न 20. 'लौहपुरुष' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष समास", correct: false },
            { text: "द्वंद्व समास", correct: false },
            { text: "कर्मधारय समास", correct: true },
            { text: "बहुव्रीहि समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'लौह के समान पुरुष' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ पुरुष की दृढ़ता की उपमा लौह से दी गई है।"
    },
    {
        question: "प्रश्न 21. 'कुपुत्र' शब्द में समास है-",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कुत्सित (बुरा) है जो पुत्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'कु' उपसर्ग यहाँ विशेषण का कार्य कर रहा है।"
    },
    {
        question: "प्रश्न 22. 'भवसागर' का सही विग्रह है-",
        answers: shuffle([
            { text: "भव का सागर", correct: false },
            { text: "भव में सागर", correct: false },
            { text: "भव और सागर", correct: false },
            { text: "भवरूपी सागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ संसार (भव) पर सागर का आरोप किया गया है, अतः यह रूपक कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 23. 'महाजन' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: false },
            { text: "द्विगु समास", correct: false },
            { text: "कर्मधारय समास", correct: true },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'महान है जो जन' होता है, जिसमें विशेषण और विशेष्य का संबंध है।"
    },
    {
        question: "प्रश्न 24. 'कनकलता' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: true },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "द्विगु समास", correct: false },
            { text: "द्वंद्व समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कनक के समान लता' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ उपमान (कनक) और उपमेय (लता) का संबंध है।"
    },
    {
        question: "प्रश्न 25. 'दुरात्मा' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'दुष्ट है जो आत्मा' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'दुः' (बुरा) उपसर्ग विशेषण का कार्य कर रहा है।"
    },
    {
        question: "प्रश्न 26. 'कमलनयन' में समास है-",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कमल के समान नयन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ नयनों की उपमा कमल से दी गई है।"
    },
    {
        question: "प्रश्न 27. 'नीलकंठ' में यदि विग्रह 'नीला है जो कंठ' किया जाए तो कौन सा समास होगा?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: false },
            { text: "कर्मधारय समास", correct: true },
            { text: "तत्पुरुष समास", correct: false },
            { text: "द्विगु समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस विग्रह में 'नीला' विशेषण और 'कंठ' विशेष्य है, इसलिए यह कर्मधारय समास होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> (यदि विग्रह 'नीला है कंठ जिसका' अर्थात् शिव हो, तो बहुव्रीहि होगा)।"
    },
    {
        question: "प्रश्न 28. 'क्रोधाग्नि' का विग्रह है-",
        answers: shuffle([
            { text: "क्रोध की अग्नि", correct: false },
            { text: "क्रोधरूपी अग्नि", correct: true },
            { text: "क्रोध और अग्नि", correct: false },
            { text: "अग्नि में क्रोध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ क्रोध पर अग्नि का आरोप किया गया है, यह रूपक कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 29. 'श्यामसुंदर' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: true },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "द्वंद्व समास", correct: false },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'श्याम हैं जो सुंदर' या 'श्याम और सुंदर' दोनों होता है, लेकिन यहाँ विशेषण-विशेष्य का भाव प्रमुख है।"
    },
    {
        question: "प्रश्न 30. 'पुरुषोत्तम' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'पुरुषों में है जो उत्तम' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तत्पुरुष (अधिकरण) का भेद भी माना जाता है, किन्तु विशेषण-विशेष्य संबंध के कारण कर्मधारय अधिक सटीक है।"
    },
    {
        question: "प्रश्न 31. 'वचनामृत' का विग्रह क्या होगा?",
        answers: shuffle([
            { text: "वचन और अमृत", correct: false },
            { text: "अमृत जैसे वचन", correct: false },
            { text: "वचनरूपी अमृत", correct: true },
            { text: "अमृत के लिए वचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ वचन को ही अमृत का रूप माना गया है, अतः यह रूपक कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 32. 'सद्धर्म' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: true },
            { text: "द्विगु समास", correct: false },
            { text: "द्वंद्व समास", correct: false },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'सत् (अच्छा) है जो धर्म' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ विशेषण-विशेष्य का संबंध है।"
    },
    {
        question: "प्रश्न 33. 'सुलोचना' में कर्मधारय का विग्रह होगा-",
        answers: shuffle([
            { text: "सु है लोचन", correct: false },
            { text: "सुंदर हैं जो लोचन", correct: true },
            { text: "सुंदर लोचनों वाली", correct: false },
            { text: "सु और लोचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'सु' (सुंदर) विशेषण है और 'लोचन' विशेष्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> (बहुव्रीहि में 'सुंदर हैं लोचन जिसके' अर्थात् मेघनाद की पत्नी होगा)।"
    },
    {
        question: "प्रश्न 34. 'महाराज' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'महान है जो राजा' होता है, जिसमें 'महान' विशेषण है।"
    },
    {
        question: "प्रश्न 35. 'मुखारविंद' का विग्रह है-",
        answers: shuffle([
            { text: "मुख और अरविंद", correct: false },
            { text: "अरविंदरूपी मुख", correct: true },
            { text: "अरविंद के समान मुख", correct: false },
            { text: "मुख में अरविंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ उपमेय (मुख) पर उपमान (अरविंद/कमल) का अभेद आरोप है, अतः यह रूपक कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 36. 'कृष्णसर्प' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: true },
            { text: "तत्पुरुष समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "द्वंद्व समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कृष्ण (काला) है जो सर्प' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'कृष्ण' विशेषण है।"
    },
    {
        question: "प्रश्न 37. 'मीनाक्षी' में कर्मधारय समास का विग्रह होगा-",
        answers: shuffle([
            { text: "मीन और अक्षी", correct: false },
            { text: "मीन के समान अक्षी", correct: true },
            { text: "मीन जैसी अक्षी वाली", correct: false },
            { text: "मीन पर अक्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्मधारय समास के अनुसार इसका विग्रह 'मछली के समान आँखों' वाला होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> (बहुव्रीहि में 'मछली जैसी आँखों वाली' अर्थात् देवी पार्वती होगा)।"
    },
    {
        question: "प्रश्न 38. 'भलामानस' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'भला है जो मानस (मनुष्य)' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'भला' विशेषण है।"
    },
    {
        question: "प्रश्न 39. 'परमेश्वर' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'परम है जो ईश्वर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'परम' विशेषण है जो 'ईश्वर' की विशेषता बता रहा है।"
    },
    {
        question: "प्रश्न 40. 'नराधम' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'अधम है जो नर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अधम' (नीच) विशेषण है।"
    },
    {
        question: "प्रश्न 41. 'करकमल' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कमल के समान कर (हाथ)' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ उपमान-उपमेय का संबंध है।"
    },
    {
        question: "प्रश्न 42. 'महादेव' में समास है-",
        answers: shuffle([
            { text: "कर्मधारय", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'महान है जो देव' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> (यदि अर्थ 'शिव' लिया जाए तो बहुव्रीहि होगा, पर शाब्दिक संरचना कर्मधारय की है)।"
    },
    {
        question: "प्रश्न 43. 'सदाचार' का सही विग्रह है-",
        answers: shuffle([
            { text: "सदा का आचार", correct: false },
            { text: "सत् है जो आचार", correct: true },
            { text: "सदा और आचार", correct: false },
            { text: "आचार में सत्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'सत्' (अच्छा) विशेषण है जो आचार की विशेषता बता रहा है।"
    },
    {
        question: "प्रश्न 44. 'कदाचार' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: true },
            { text: "नञ् तत्पुरुष समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कुत्सित (बुरा) है जो आचार' होता है।"
    },
    {
        question: "प्रश्न 45. 'प्रधानाध्यापक' में समास है-",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'प्रधान है जो अध्यापक' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'प्रधान' विशेषण का कार्य कर रहा है।"
    },
    {
        question: "प्रश्न 46. 'रक्तकमल' का विग्रह है-",
        answers: shuffle([
            { text: "रक्त और कमल", correct: false },
            { text: "रक्त का कमल", correct: false },
            { text: "रक्त के रंग का कमल", correct: true },
            { text: "कमल जैसा रक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'रक्त (लाल) है जो कमल' भी होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'रक्त' रंग विशेषण है।"
    },
    {
        question: "प्रश्न 47. 'मधुरफल' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'मधुर है जो फल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'मधुर' विशेषण और 'फल' विशेष्य है।"
    },
    {
        question: "प्रश्न 48. 'श्वेतांबर' में कर्मधारय समास का विग्रह होगा-",
        answers: shuffle([
            { text: "श्वेत और अंबर", correct: false },
            { text: "श्वेत है जिसका अंबर", correct: false },
            { text: "श्वेत है जो अंबर", correct: true },
            { text: "अंबर में श्वेत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस विग्रह में 'श्वेत' विशेषण और 'अंबर' (वस्त्र) विशेष्य है, अतः यह कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 49. 'नररत्न' का विग्रह है-",
        answers: shuffle([
            { text: "नरों में रत्न", correct: false },
            { text: "नर और रत्न", correct: false },
            { text: "नररूपी रत्न", correct: true },
            { text: "रत्न जैसा नर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ नर को ही रत्न का रूप माना गया है, यह रूपक कर्मधारय समास है।"
    },
    {
        question: "प्रश्न 50. 'मंदबुद्धि' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'मंद है जो बुद्धि' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'मंद' विशेषण है।"
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