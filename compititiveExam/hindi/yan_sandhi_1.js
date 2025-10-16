const questions = [
    {
        topHeading: "यण संधि पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'अत्यधिक' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "अत्य + अधिक", correct: false },
            { text: "अति + अधिक", correct: true },
            { text: "अ + अत्यधिक", correct: false },
            { text: "अत्य + अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'अति' (इ) और 'अधिक' (अ) मिलकर 'य' बन गए हैं, जो यण संधि का नियम है (इ + अ = य)।"
    },
    {
        question: "प्रश्न 2. 'इत्यादि' शब्द में कौन-सी संधि है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "वृद्धि संधि", correct: false },
            { text: "यण संधि", correct: true },
            { text: "दीर्घ संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'इति + आदि' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'इ' और 'आ' मिलकर 'या' बन रहे हैं।"
    },
    {
        question: "प्रश्न 3. 'स्वच्छ' शब्द का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "स्व + अच्छ", correct: false },
            { text: "सु + अच्छ", correct: true },
            { text: "सु + आच्छ", correct: false },
            { text: "स्व + च्छ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'सु' (उ) और 'अच्छ' (अ) मिलकर 'व' बन गए हैं (उ + अ = व), जो यण संधि का उदाहरण है।"
    },
    {
        question: "प्रश्न 4. 'स्वागत' में कौन-सी संधि है?",
        answers: shuffle([
            { text: "व्यंजन संधि", correct: false },
            { text: "यण संधि", correct: true },
            { text: "दीर्घ संधि", correct: false },
            { text: "वृद्धि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'सु + आगत' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'उ' और 'आ' मिलकर 'वा' बन रहे हैं।"
    },
    {
        question: "प्रश्न 5. 'प्रत्येक' का संधि-विच्छेद करें।",
        answers: shuffle([
            { text: "प्रति + एक", correct: true },
            { text: "प्रत्य + एक", correct: false },
            { text: "प्रति + ऐक", correct: false },
            { text: "प्र + त्येक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'प्रति' (इ) और 'एक' (ए) मिलकर 'ये' बन गए हैं (इ + ए = ये)।"
    },
    {
        question: "प्रश्न 6. 'अन्वय' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "अन् + वय", correct: false },
            { text: "अनु + अय", correct: true },
            { text: "अनू + अय", correct: false },
            { text: "अनु + वय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'अनु' (उ) और 'अय' (अ) मिलकर 'व' बन गए हैं (उ + अ = व)।"
    },
    {
        question: "प्रश्न 7. यदि 'इ', 'ई', 'उ', 'ऊ' या 'ऋ' के बाद कोई भिन्न स्वर आए तो इनका परिवर्तन क्रमशः 'य', 'व', 'र' में हो जाता है। यह कौन-सी संधि है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "वृद्धि संधि", correct: false },
            { text: "अयादि संधि", correct: false },
            { text: "यण संधि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह यण संधि का foundational नियम है।"
    },
    {
        question: "प्रश्न 8. 'पित्राज्ञा' शब्द का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "पितृ + आज्ञा", correct: true },
            { text: "पितर + आज्ञा", correct: false },
            { text: "पित् + आज्ञा", correct: false },
            { text: "पित्रा + आज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'पितृ' (ऋ) और 'आज्ञा' (आ) मिलकर 'रा' बन गए हैं (ऋ + आ = रा)।"
    },
    {
        question: "प्रश्न 9. 'अत्याचार' शब्द में कौन-सी संधि है?",
        answers: shuffle([
            { text: "दीर्घ", correct: false },
            { text: "गुण", correct: false },
            { text: "वृद्धि", correct: false },
            { text: "यण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'अति + आचार' है (इ + आ = या)।"
    },
    {
        question: "प्रश्न 10. 'यद्यपि' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "यद्य + अपि", correct: false },
            { text: "यद् + यपि", correct: false },
            { text: "यदि + अपि", correct: true },
            { text: "यदा + अपि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'यदि' (इ) और 'अपि' (अ) मिलकर 'य' बना रहे हैं।"
    },
    {
        question: "प्रश्न 11. 'मध्वालय' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "मधु + आलय", correct: true },
            { text: "मध्व + आलय", correct: false },
            { text: "मधु + अलय", correct: false },
            { text: "मधि + आलय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'मधु' (उ) और 'आलय' (आ) मिलकर 'वा' बन रहे हैं (उ + आ = वा)।"
    },
    {
        question: "प्रश्न 12. 'नद्यर्पण' शब्द में कौन-सी संधि है?",
        answers: shuffle([
            { text: "यण संधि", correct: true },
            { text: "गुण संधि", correct: false },
            { text: "वृद्धि संधि", correct: false },
            { text: "दीर्घ संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'नदी + अर्पण' है (ई + अ = य)।"
    },
    {
        question: "प्रश्न 13. 'उपर्युक्त' का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "उपरि + उक्त", correct: true },
            { text: "उपर् + युक्त", correct: false },
            { text: "उपर + उक्त", correct: false },
            { text: "उपरि + युक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'उपरि' (इ) और 'उक्त' (उ) मिलकर 'यु' बन गए हैं (इ + उ = यु)।"
    },
    {
        question: "प्रश्न 14. 'अन्वेषण' शब्द का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "अन्वे + षण", correct: false },
            { text: "अन् + एषण", correct: false },
            { text: "अनु + एषण", correct: true },
            { text: "अन + वेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'अनु' (उ) और 'एषण' (ए) मिलकर 'वे' बन गए हैं (उ + ए = वे)।"
    },
    {
        question: "प्रश्न 15. 'देवी + आगमन' की संधि क्या होगी?",
        answers: shuffle([
            { text: "देव्यागमन", correct: true },
            { text: "देविआगमन", correct: false },
            { text: "देवआगमन", correct: false },
            { text: "देव्योगमन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'देवी' (ई) और 'आगमन' (आ) मिलकर 'या' बना रहे हैं।"
    },
    {
        question: "प्रश्न 16. 'लघ्वादेश' का संधि-विच्छेद करें।",
        answers: shuffle([
            { text: "लघु + आदेश", correct: true },
            { text: "लघ्व + आदेश", correct: false },
            { text: "लाघु + आदेश", correct: false },
            { text: "लघु + वादेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'लघु' (उ) और 'आदेश' (आ) मिलकर 'वा' बन रहे हैं।"
    },
    {
        question: "प्रश्न 17. 'प्रत्युत्तर' में कौन-सी संधि है?",
        answers: shuffle([
            { text: "गुण", correct: false },
            { text: "यण", correct: true },
            { text: "वृद्धि", correct: false },
            { text: "दीर्घ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'प्रति + उत्तर' है (इ + उ = यु)।"
    },
    {
        question: "प्रश्न 18. 'धात्विक' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "धा + त्विक", correct: false },
            { text: "धातु + इक", correct: true },
            { text: "धात् + विक", correct: false },
            { text: "धातव + इक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'धातु' (उ) और 'इक' (इ) मिलकर 'वि' बन रहे हैं (उ + इ = वि)।"
    },
    {
        question: "प्रश्न 19. 'पितृ + अनुमति' का सही संधि पद है-",
        answers: shuffle([
            { text: "पितृनुमति", correct: false },
            { text: "पित्रनुमति", correct: true },
            { text: "पितरानुमति", correct: false },
            { text: "पितृमति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'पितृ' (ऋ) और 'अनुमति' (अ) मिलकर 'र' बन रहे हैं (ऋ + अ = र)।"
    },
    {
        question: "प्रश्न 20. 'अभ्युदय' शब्द में कौन-सी संधि है?",
        answers: shuffle([
            { text: "गुण", correct: false },
            { text: "अयादि", correct: false },
            { text: "यण", correct: true },
            { text: "दीर्घ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'अभि + उदय' है (इ + उ = यु)।"
    },
    {
        question: "प्रश्न 21. 'व्यूह' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "व्य + ऊह", correct: false },
            { text: "व् + यूह", correct: false },
            { text: "वि + ऊह", correct: true },
            { text: "वी + ऊह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'वि' (इ) और 'ऊह' (ऊ) मिलकर 'यू' बन रहे हैं।"
    },
    {
        question: "प्रश्न 22. 'अन्वित' का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "अनु + इत", correct: true },
            { text: "अन् + वित", correct: false },
            { text: "अनू + इत", correct: false },
            { text: "अन + वित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'अनु' (उ) और 'इत' (इ) मिलकर 'वि' बन रहे हैं।"
    },
    {
        question: "प्रश्न 23. 'अति + ऊष्म' की संधि क्या होगी?",
        answers: shuffle([
            { text: "अत्यूष्म", correct: true },
            { text: "अतिऊष्म", correct: false },
            { text: "अतूष्म", correct: false },
            { text: "अत्योष्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'अति' (इ) और 'ऊष्म' (ऊ) मिलकर 'यू' बन रहे हैं।"
    },
    {
        question: "प्रश्न 24. 'पितृ + इच्छा' की संधि से बना शब्द है-",
        answers: shuffle([
            { text: "पितृच्छा", correct: false },
            { text: "पित्रेच्छा", correct: false },
            { text: "पित्रिच्छा", correct: true },
            { text: "पितरिच्छा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'पितृ' (ऋ) और 'इच्छा' (इ) मिलकर 'रि' बन रहे हैं।"
    },
    {
        question: "प्रश्न 25. 'पर्यावरण' शब्द का संधि-विच्छेद कौन-सा है?",
        answers: shuffle([
            { text: "पर्या + वरण", correct: false },
            { text: "परिधि + आवरण", correct: false },
            { text: "परि + आवरण", correct: true },
            { text: "परिध + आवरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'परि' (इ) और 'आवरण' (आ) मिलकर 'या' बन रहे हैं।"
    },
    {
        question: "प्रश्न 26. 'गुरूवोदन' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "गुरु + ओदन", correct: true },
            { text: "गुरु + वोदन", correct: false },
            { text: "गुरो + ओदन", correct: false },
            { text: "गुरू + ओदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'गुरु' (उ) और 'ओदन' (ओ) मिलकर 'वो' बन रहे हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> (उ + ओ = वो)"
    },
    {
        question: "प्रश्न 27. 'न्यून' में कौन-सी संधि है?",
        answers: shuffle([
            { text: "यण संधि", correct: true },
            { text: "वृद्धि संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'नि + ऊन' है (इ + ऊ = यू)।"
    },
    {
        question: "प्रश्न 28. 'वध्वर्थ' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "वधु + अर्थ", correct: false },
            { text: "वध्व + अर्थ", correct: false },
            { text: "वधू + अर्थ", correct: true },
            { text: "वध + वर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'वधू' (ऊ) और 'अर्थ' (अ) मिलकर 'व' बन रहे हैं।"
    },
    {
        question: "प्रश्न 29. 'जात्यभिमान' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "जात्य + अभिमान", correct: false },
            { text: "जाति + अभिमान", correct: true },
            { text: "जातो + अभिमान", correct: false },
            { text: "जात्या + अभिमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'जाति' (इ) और 'अभिमान' (अ) मिलकर 'य' बन रहे हैं।"
    },
    {
        question: "प्रश्न 30. 'सु + आगतम्' में संधि होने पर कौन सा शब्द बनेगा?",
        answers: shuffle([
            { text: "सुआगतम्", correct: false },
            { text: "स्वागतम्", correct: true },
            { text: "स्वागम्", correct: false },
            { text: "सुगतम्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उ' और 'आ' मिलकर 'वा' बनते हैं।"
    },
    {
        question: "प्रश्न 31. 'देव्यर्पण' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "देव्य + अर्पण", correct: false },
            { text: "देवी + अर्पण", correct: true },
            { text: "देव + अर्पण", correct: false },
            { text: "देवि + अर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'देवी' (ई) और 'अर्पण' (अ) मिलकर 'य' बन रहे हैं।"
    },
    {
        question: "प्रश्न 32. 'प्रत्यंग' में कौन-सी संधि है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "यण संधि", correct: true },
            { text: "दीर्घ संधि", correct: false },
            { text: "वृद्धि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'प्रति + अंग' है (इ + अ = य)।"
    },
    {
        question: "प्रश्न 33. 'अन्वीक्षा' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "अन + वीक्षा", correct: false },
            { text: "अन्वि + क्षा", correct: false },
            { text: "अनु + ईक्षा", correct: true },
            { text: "अनू + ईक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'अनु' (उ) और 'ईक्षा' (ई) मिलकर 'वी' बन रहे हैं।"
    },
    {
        question: "प्रश्न 34. 'लाकृति' में कौन-सी संधि है?",
        answers: shuffle([
            { text: "यण संधि", correct: true },
            { text: "गुण संधि", correct: false },
            { text: "अयादि संधि", correct: false },
            { text: "वृद्धि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'लृ + आकृति' है।<br><br><i class='fa-solid fa-angles-right icon'></i> संस्कृत व्याकरण के अनुसार 'लृ' के बाद भिन्न स्वर आने पर 'ल' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह यण संधि का एक विशेष नियम है।"
    },
    {
        question: "प्रश्न 35. 'इ' + 'आ' = 'या' किस संधि में इस प्रकार का परिवर्तन होता है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "अयादि संधि", correct: false },
            { text: "वृद्धि संधि", correct: false },
            { text: "यण संधि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह यण संधि के नियमों में से एक है, जैसे 'इति + आदि = इत्यादि'।"
    },
    {
        question: "प्रश्न 36. 'गुर्वाज्ञा' का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "गुर्व + आज्ञा", correct: false },
            { text: "गुरु + आज्ञा", correct: true },
            { text: "गुर + वाज्ञा", correct: false },
            { text: "गुर्वी + आज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'गुरु' (उ) और 'आज्ञा' (आ) मिलकर 'वा' बन रहे हैं।"
    },
    {
        question: "प्रश्न 37. 'सख्यैश्वर्य' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "सखि + ऐश्वर्य", correct: false },
            { text: "सखी + ऐश्वर्य", correct: true },
            { text: "सख्य + ऐश्वर्य", correct: false },
            { text: "सख + यैश्वर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'सखी' (ई) और 'ऐश्वर्य' (ऐ) मिलकर 'यै' बन रहे हैं।"
    },
    {
        question: "प्रश्न 38. 'प्रत्युपकार' में निहित संधि है-",
        answers: shuffle([
            { text: "यण", correct: true },
            { text: "गुण", correct: false },
            { text: "वृद्धि", correct: false },
            { text: "व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'प्रति + उपकार' है (इ + उ = यु)।"
    },
    {
        question: "प्रश्न 39. 'ऋ' + 'अ' = 'र' किस संधि का नियम है?",
        answers: shuffle([
            { text: "दीर्घ संधि", correct: false },
            { text: "वृद्धि संधि", correct: false },
            { text: "यण संधि", correct: true },
            { text: "गुण संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह यण संधि का नियम है, जैसे 'पितृ + अनुमति = पित्रनुमति'।"
    },
    {
        question: "प्रश्न 40. 'अध्यक्ष' में कौन-सी संधि है?",
        answers: shuffle([
            { text: "यण संधि", correct: true },
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: false },
            { text: "वृद्धि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'अधि + अक्ष' है (इ + अ = य)।"
    },
    {
        question: "प्रश्न 41. 'मध्वरि' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "मध् + वरि", correct: false },
            { text: "मधु + अरि", correct: true },
            { text: "मधू + अरि", correct: false },
            { text: "मध्व + रि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'मधु' (उ) और 'अरि' (अ) मिलकर 'व' बन रहे हैं।"
    },
    {
        question: "प्रश्न 42. 'नद्यैश्वर्य' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "नदी + ऐश्वर्य", correct: true },
            { text: "नदि + ऐश्वर्य", correct: false },
            { text: "नद्य + ऐश्वर्य", correct: false },
            { text: "नद् + यैश्वर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'नदी' (ई) और 'ऐश्वर्य' (ऐ) मिलकर 'यै' बन रहे हैं।"
    },
    {
        question: "प्रश्न 43. 'उ' + 'इ' = 'वि' किस शब्द में यह नियम लागू होता है?",
        answers: shuffle([
            { text: "अन्वय", correct: false },
            { text: "अन्वित", correct: true },
            { text: "अन्वेषण", correct: false },
            { text: "अन्वीक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'अनु + इत' है, जहाँ 'उ' और 'इ' मिलकर 'वि' बनाते हैं।"
    },
    {
        question: "प्रश्न 44. 'अभ्यागत' का संधि-विच्छेद करें।",
        answers: shuffle([
            { text: "अभ्य + आगत", correct: false },
            { text: "अभि + आगत", correct: true },
            { text: "अ + भ्यागत", correct: false },
            { text: "अभी + आगत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'अभि' (इ) और 'आगत' (आ) मिलकर 'या' बन रहे हैं।"
    },
    {
        question: "प्रश्न 45. 'पर्युत्सुक' में कौन-सी संधि है?",
        answers: shuffle([
            { text: "गुण", correct: false },
            { text: "यण", correct: true },
            { text: "वृद्धि", correct: false },
            { text: "दीर्घ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'परि + उत्सुक' है (इ + उ = यु)।"
    },
    {
        question: "प्रश्न 46. 'त्र्यंबक' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "त्रि + अंबक", correct: true },
            { text: "त्रय + अंबक", correct: false },
            { text: "त्रि + यंबक", correct: false },
            { text: "त्र्य + अंबक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'त्रि' (इ) और 'अंबक' (अ) मिलकर 'य' बन रहे हैं।"
    },
    {
        question: "प्रश्न 47. 'अति + अल्प' की सही संधि क्या है?",
        answers: shuffle([
            { text: "अतिअल्प", correct: false },
            { text: "अताल्प", correct: false },
            { text: "अत्यल्प", correct: true },
            { text: "अतीअल्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इ' और 'अ' मिलकर 'य' बनते हैं।"
    },
    {
        question: "प्रश्न 48. 'पितृ + उपदेश' की संधि होगी-",
        answers: shuffle([
            { text: "पित्रोपदेश", correct: false },
            { text: "पितृपदेश", correct: false },
            { text: "पित्रूपदेश", correct: false },
            { text: "पित्रुपदेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'पितृ' (ऋ) और 'उपदेश' (उ) मिलकर 'रु' बन रहे हैं।"
    },
    {
        question: "प्रश्न 49. 'दध्योदन' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "दधि + ओदन", correct: true },
            { text: "दध्य + ओदन", correct: false },
            { text: "दधि + औदन", correct: false },
            { text: "दध + योदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'दधि' (इ) और 'ओदन' (ओ) मिलकर 'यो' बन रहे हैं।"
    },
    {
        question: "प्रश्न 50. 'अण्वस्त्र' में कौन-सी संधि है?",
        answers: shuffle([
            { text: "दीर्घ", correct: false },
            { text: "यण", correct: true },
            { text: "गुण", correct: false },
            { text: "व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'अणु + अस्त्र' है (उ + अ = व)।"
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