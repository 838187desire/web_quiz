const questions = [
    {
        topHeading: "वृद्धिसंधि पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'एकैक' शब्द का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "एकै + क", correct: false },
            { text: "एक + कैक", correct: false },
            { text: "एक + एक", correct: true },
            { text: "एको + एक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'एक' के अंत का 'अ' और दूसरे 'एक' के आरंभ का 'ए' मिलकर 'ऐ' बन जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ए = ऐ।"
    },
    {
        question: "प्रश्न 2. 'सदा + एव' की सही संधि क्या होगी?",
        answers: shuffle([
            { text: "सदाएव", correct: false },
            { text: "सदाइव", correct: false },
            { text: "सदैव", correct: true },
            { text: "सदोव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'सदा' के 'आ' और 'एव' के 'ए' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + ए = ऐ।"
    },
    {
        question: "प्रश्न 3. 'महौषध' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "यण संधि", correct: false },
            { text: "अयादि संधि", correct: false },
            { text: "वृद्धि संधि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'महा + औषध' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'औ' मिलकर 'औ' बनते हैं, जो वृद्धि संधि का नियम है।"
    },
    {
        question: "प्रश्न 4. 'मतैक्य' का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "मता + ऐक्य", correct: false },
            { text: "मत + ऐक्य", correct: true },
            { text: "मत + एक्य", correct: false },
            { text: "मति + ऐक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'मत' के 'अ' और 'ऐक्य' के 'ऐ' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ऐ = ऐ।"
    },
    {
        question: "प्रश्न 5. जब 'अ' या 'आ' के बाद 'ए' या 'ऐ' आए, तो दोनों के मेल से क्या बनता है?",
        answers: shuffle([
            { text: "ए", correct: false },
            { text: "ऐ", correct: true },
            { text: "इ", correct: false },
            { text: "ई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वृद्धि संधि का एक प्रमुख नियम है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - एक + एक = एकैक।"
    },
    {
        question: "प्रश्न 6. 'परम + ओजस्वी' की संधि करने पर कौन सा शब्द बनेगा?",
        answers: shuffle([
            { text: "परमोजस्वी", correct: false },
            { text: "परमाजस्वी", correct: false },
            { text: "परमौजस्वी", correct: true },
            { text: "परमेस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'परम' के 'अ' और 'ओजस्वी' के 'ओ' का मेल होने पर 'औ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ओ = औ।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से किस शब्द में वृद्धि संधि है?",
        answers: shuffle([
            { text: "देवेंद्र", correct: false },
            { text: "सूर्योदय", correct: false },
            { text: "तथैव", correct: true },
            { text: "स्वागत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तथैव' का संधि-विच्छेद 'तथा + एव' (आ + ए = ऐ) है, जो वृद्धि संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य शब्दों में गुण और यण संधि है।"
    },
    {
        question: "प्रश्न 8. 'महैश्वर्य' का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "महा + ऐश्वर्य", correct: true },
            { text: "मह + श्वर्य", correct: false },
            { text: "महा + इश्वर्य", correct: false },
            { text: "महै + श्वर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'महा' के 'आ' और 'ऐश्वर्य' के 'ऐ' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + ऐ = ऐ।"
    },
    {
        question: "प्रश्न 9. 'वसुधैव' शब्द में किन वर्णों की संधि हुई है?",
        answers: shuffle([
            { text: "आ + ए", correct: true },
            { text: "अ + ए", correct: false },
            { text: "आ + ऐ", correct: false },
            { text: "अ + ऐ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'वसुधा + एव' है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 'आ' और 'ए' वर्णों की संधि हुई है।"
    },
    {
        question: "प्रश्न 10. वृद्धि संधि किस संधि का एक भेद है?",
        answers: shuffle([
            { text: "व्यंजन संधि", correct: false },
            { text: "विसर्ग संधि", correct: false },
            { text: "स्वर संधि", correct: true },
            { text: "अयादि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि स्वर संधि के पाँच भेदों (दीर्घ, गुण, वृद्धि, यण, अयादि) में से एक है।"
    },
    {
        question: "प्रश्न 11. 'हितैषी' शब्द का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "हिता + एषी", correct: false },
            { text: "हित + ऐषी", correct: false },
            { text: "हित + एषी", correct: true },
            { text: "हि + तैषी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'हित' के 'अ' और 'एषी' के 'ए' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ए = ऐ।"
    },
    {
        question: "प्रश्न 12. 'महा + ओज' की संधि से बनने वाला शब्द है-",
        answers: shuffle([
            { text: "महाज", correct: false },
            { text: "महज", correct: false },
            { text: "महोज", correct: false },
            { text: "महौज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'महा' के 'आ' और 'ओज' के 'ओ' का मेल होने पर 'औ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + ओ = औ।"
    },
    {
        question: "प्रश्न 13. जब 'अ' या 'आ' के बाद 'ओ' या 'औ' आए, तो दोनों के मेल से क्या बनता है?",
        answers: shuffle([
            { text: "ओ", correct: false },
            { text: "औ", correct: true },
            { text: "उ", correct: false },
            { text: "ऊ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वृद्धि संधि का दूसरा प्रमुख नियम है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - परम + औषध = परमौषध।"
    },
    {
        question: "प्रश्न 14. निम्नलिखित में से कौन सा शब्द वृद्धि संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "सदैव", correct: false },
            { text: "महौज", correct: false },
            { text: "गुरुपदेश", correct: true },
            { text: "एकैक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुरुपदेश' का संधि-विच्छेद 'गुरु + उपदेश' (उ + उ = ऊ) है, जो दीर्घ संधि का उदाहरण है।"
    },
    {
        question: "प्रश्न 15. 'पुत्रैषणा' शब्द का संधि-विच्छेद करें।",
        answers: shuffle([
            { text: "पुत्र + ऐषणा", correct: false },
            { text: "पुत्र + एषणा", correct: true },
            { text: "पुत्रा + एषणा", correct: false },
            { text: "पुत्रै + षणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'पुत्र' के 'अ' और 'एषणा' के 'ए' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ए = ऐ।"
    },
    {
        question: "प्रश्न 16. 'परमौषध' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "यण संधि", correct: false },
            { text: "वृद्धि संधि", correct: true },
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'परम + औषध' (अ + औ = औ) होता है, जो वृद्धि संधि का नियम है।"
    },
    {
        question: "प्रश्न 17. 'वनौषधि' का सही संधि-विच्छेद कौन सा है?",
        answers: shuffle([
            { text: "वन + औषधि", correct: true },
            { text: "वनौ + षधि", correct: false },
            { text: "वन + औसधि", correct: false },
            { text: "वना + औषधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'वन' के 'अ' और 'औषधि' के 'औ' का मेल होने पर 'औ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + औ = औ।"
    },
    {
        question: "प्रश्न 18. 'आ + औ' के मेल से कौन सा वर्ण बनेगा?",
        answers: shuffle([
            { text: "ओ", correct: false },
            { text: "औ", correct: true },
            { text: "आव", correct: false },
            { text: "अव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वृद्धि संधि का नियम है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण: महा + औषध = महौषध।"
    },
    {
        question: "प्रश्न 19. 'विश्वैक्य' शब्द का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "विश्व + एक्य", correct: false },
            { text: "विश्व + ऐक्य", correct: true },
            { text: "विश्वा + ऐक्य", correct: false },
            { text: "विश्वै + क्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'विश्व' के 'अ' और 'ऐक्य' के 'ऐ' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ऐ = ऐ।"
    },
    {
        question: "प्रश्न 20. 'परमौज' में कौन सा संधि नियम लागू होता है?",
        answers: shuffle([
            { text: "अ + ओ = औ", correct: true },
            { text: "आ + ओ = औ", correct: false },
            { text: "अ + औ = औ", correct: false },
            { text: "आ + औ = औ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'परम + ओज' है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 'अ' और 'ओ' के मेल का नियम लागू होता है।"
    },
    {
        question: "प्रश्न 21. 'धनैषी' शब्द का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "धन + ऐषी", correct: false },
            { text: "धना + एषी", correct: false },
            { text: "धन + एषी", correct: true },
            { text: "धन् + एषी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'धन' के 'अ' और 'एषी' के 'ए' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ए = ऐ।"
    },
    {
        question: "प्रश्न 22. 'महा + ऐरावत' की सही संधि क्या होगी?",
        answers: shuffle([
            { text: "महाएरावत", correct: false },
            { text: "महैरावत", correct: true },
            { text: "महोरावत", correct: false },
            { text: "महरावत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'महा' के 'आ' और 'ऐरावत' के 'ऐ' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + ऐ = ऐ।"
    },
    {
        question: "प्रश्न 23. वृद्धि संधि की पहचान क्या है?",
        answers: shuffle([
            { text: "शब्द के बीच में 'ए', 'ओ', 'अर' की ध्वनि", correct: false },
            { text: "शब्द के बीच में 'ऐ', 'औ' की मात्रा", correct: true },
            { text: "शब्द के बीच में 'आ', 'ई', 'ऊ' की मात्रा", correct: false },
            { text: "शब्द के बीच में 'य', 'व', 'र' से पहले आधा वर्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि से बने शब्दों के बीच में प्रायः 'ऐ' ( ै ) और 'औ' ( ौ ) की मात्राएँ आती हैं।"
    },
    {
        question: "प्रश्न 24. 'तत्रैव' शब्द का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "तत्र + एव", correct: true },
            { text: "तत्रा + एव", correct: false },
            { text: "तत् + एव", correct: false },
            { text: "तत्र + ऐव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'तत्र' के 'अ' और 'एव' के 'ए' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ए = ऐ।"
    },
    {
        question: "प्रश्न 25. 'एक + एक = एकैक' में कौन सा संधि नियम है?",
        answers: shuffle([
            { text: "अ + इ = ए", correct: false },
            { text: "अ + ए = ऐ", correct: true },
            { text: "आ + ए = ऐ", correct: false },
            { text: "अ + उ = ओ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ प्रथम शब्द का अंतिम वर्ण 'अ' और द्वितीय शब्द का प्रथम वर्ण 'ए' है, जिनके मेल से 'ऐ' बनता है।"
    },
    {
        question: "प्रश्न 26. 'गंगौघ' शब्द का सही संधि-विच्छेद चुनें।",
        answers: shuffle([
            { text: "गंगा + औघ", correct: false },
            { text: "गंग + ओघ", correct: false },
            { text: "गंगा + ओघ", correct: true },
            { text: "गंगौ + घ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'गंगा' के 'आ' और 'ओघ' के 'ओ' का मेल होने पर 'औ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + ओ = औ।"
    },
    {
        question: "प्रश्न 27. किस विकल्प में वृद्धि संधि का सही प्रयोग हुआ है?",
        answers: shuffle([
            { text: "राज + इंद्र = राजेंद्र", correct: false },
            { text: "लोक + उक्ति = लोकोक्ति", correct: false },
            { text: "स्व + इच्छा = स्वेच्छा", correct: false },
            { text: "लोक + एषणा = लोकैषणा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ + ए = ऐ' का नियम लग रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्पों में गुण संधि है।"
    },
    {
        question: "प्रश्न 28. 'मत + ऐक्य' की संधि क्या होगी?",
        answers: shuffle([
            { text: "मतैक्य", correct: true },
            { text: "मतएक्य", correct: false },
            { text: "मताऐक्य", correct: false },
            { text: "मतोएक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'मत' के 'अ' और 'ऐक्य' के 'ऐ' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ऐ = ऐ।"
    },
    {
        question: "प्रश्न 29. 'दिव्यौषध' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "दिव्य + औषध", correct: true },
            { text: "दिव्या + औषध", correct: false },
            { text: "दिवि + औषध", correct: false },
            { text: "दिव्यो + षध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'दिव्य' के 'अ' और 'औषध' के 'औ' का मेल होने पर 'औ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + औ = औ।"
    },
    {
        question: "प्रश्न 30. 'रमैश्वर्य' शब्द में किन वर्णों की संधि हुई है?",
        answers: shuffle([
            { text: "आ + ए", correct: false },
            { text: "अ + ऐ", correct: false },
            { text: "आ + ऐ", correct: true },
            { text: "अ + ए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'रमा + ऐश्वर्य' है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 'आ' और 'ऐ' वर्णों की संधि हुई है।"
    },
    {
        question: "प्रश्न 31. 'विचारैक्य' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "विचारा + ऐक्य", correct: false },
            { text: "विचार + ऐक्य", correct: true },
            { text: "विचार + एक्य", correct: false },
            { text: "विचारो + ऐक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'विचार' के 'अ' और 'ऐक्य' के 'ऐ' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ऐ = ऐ।"
    },
    {
        question: "प्रश्न 32. 'अ + ओ' के मेल से कौन सा वर्ण बनता है?",
        answers: shuffle([
            { text: "ए", correct: false },
            { text: "ओ", correct: false },
            { text: "औ", correct: true },
            { text: "ऐ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वृद्धि संधि का नियम है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण: परम + ओज = परमौज।"
    },
    {
        question: "प्रश्न 33. निम्नलिखित में से वृद्धि संधि वाला शब्द चुनें।",
        answers: shuffle([
            { text: "नयन", correct: false },
            { text: "यद्यपि", correct: false },
            { text: "सदैव", correct: true },
            { text: "इत्यादि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सदैव' (सदा + एव) में वृद्धि संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'नयन' में अयादि, 'यद्यपि' और 'इत्यादि' में यण संधि है।"
    },
    {
        question: "प्रश्न 34. 'तथा + एव' = 'तथैव' में प्रयुक्त संधि का नाम है-",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: false },
            { text: "वृद्धि संधि", correct: true },
            { text: "यण संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ + ए = ऐ' का नियम लागू हो रहा है, जो वृद्धि संधि का नियम है।"
    },
    {
        question: "प्रश्न 35. 'स्वैच्छिक' का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "स्व + ऐच्छिक", correct: false },
            { text: "स्वेच्छा + इक", correct: true },
            { text: "स्व + एच्छिक", correct: false },
            { text: "स्वा + इच्छिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह शब्द 'स्व + इच्छा + इक' से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> पहले 'स्व + इच्छा' में गुण संधि होकर 'स्वेच्छा' बना, फिर 'इक' प्रत्यय जुड़ा।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, यदि इसे 'स्व + ऐच्छिक' माना जाए, तो यह वृद्धि संधि जैसा दिखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नोट: यह एक जटिल शब्द-रचना है।"
    },
    {
        question: "प्रश्न 36. 'भावैक्य' शब्द का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "भाव + एक्य", correct: false },
            { text: "भाव + ऐक्य", correct: true },
            { text: "भावा + एक्य", correct: false },
            { text: "भावे + क्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'भाव' के 'अ' और 'ऐक्य' के 'ऐ' का मेल होने पर 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ऐ = ऐ।"
    },
    {
        question: "प्रश्न 37. 'मतैक्य' में कौन सी संधि है?",
        answers: shuffle([
            { text: "दीर्घ", correct: false },
            { text: "गुण", correct: false },
            { text: "वृद्धि", correct: true },
            { text: "यण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'मत + ऐक्य' (अ + ऐ = ऐ) है, जो वृद्धि संधि है।"
    },
    {
        question: "प्रश्न 38. 'नव + ऐश्वर्य' की सही संधि है-",
        answers: shuffle([
            { text: "नवैश्वर्य", correct: true },
            { text: "नवोश्वर्य", correct: false },
            { text: "नवेश्वर्य", correct: false },
            { text: "नवाश्वर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'नव' के 'अ' और 'ऐश्वर्य' के 'ऐ' के मेल से 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ऐ = ऐ।"
    },
    {
        question: "प्रश्न 39. 'परम + औषध' की संधि करने पर क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "परमौषध", correct: true },
            { text: "परमौषद", correct: false },
            { text: "परमउषध", correct: false },
            { text: "परमोषध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'परम' के 'अ' और 'औषध' के 'औ' के मेल से 'औ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + औ = औ।"
    },
    {
        question: "प्रश्न 40. 'अ + ऐ = ऐ' नियम किस संधि को इंगित करता है?",
        answers: shuffle([
            { text: "दीर्घ संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "वृद्धि संधि", correct: true },
            { text: "अयादि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वृद्धि संधि का एक नियम है, जैसे - मत + ऐक्य = मतैक्य।"
    },
    {
        question: "प्रश्न 41. 'हित + एषी' की सही संधि क्या है?",
        answers: shuffle([
            { text: "हितेशी", correct: false },
            { text: "हितैषी", correct: true },
            { text: "हितोशी", correct: false },
            { text: "हिताशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'हित' के 'अ' और 'एषी' के 'ए' के मेल से 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ए = ऐ।"
    },
    {
        question: "प्रश्न 42. 'जलौघ' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "जल + ओघ", correct: true },
            { text: "जला + ओघ", correct: false },
            { text: "जल + औघ", correct: false },
            { text: "जलो + घ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'जल' के 'अ' और 'ओघ' के 'ओ' के मेल से 'औ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ओ = औ।"
    },
    {
        question: "प्रश्न 43. किस समूह के सभी शब्द वृद्धि संधि युक्त हैं?",
        answers: shuffle([
            { text: "सदैव, महौषध, पवन", correct: false },
            { text: "एकैक, मतैक्य, परमौज", correct: true },
            { text: "नयन, तथैव, स्वागत", correct: false },
            { text: "महौज, इत्यादि, देवेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस विकल्प के तीनों शब्दों (एक+एक, मत+ऐक्य, परम+ओज) में वृद्धि संधि के नियम लागू हो रहे हैं।"
    },
    {
        question: "प्रश्न 44. 'प्रौढ़' का संधि विच्छेद है-",
        answers: shuffle([
            { text: "प्र + ऊढ़", correct: true },
            { text: "प्रौ + ढ", correct: false },
            { text: "प्र + ओढ़", correct: false },
            { text: "प्रौ + ओढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह गुण संधि का अपवाद है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम के अनुसार 'अ + ऊ' से 'ओ' बनना चाहिए था, किन्तु यहाँ वृद्धि होकर 'औ' बनता है।"
    },
    {
        question: "प्रश्न 45. 'देवैश्वर्य' का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "देव + ऐश्वर्य", correct: true },
            { text: "देवा + ऐश्वर्य", correct: false },
            { text: "देवे + श्वर्य", correct: false },
            { text: "देव + इश्वर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'देव' के 'अ' और 'ऐश्वर्य' के 'ऐ' के मेल से 'ऐ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + ऐ = ऐ।"
    },
    {
        question: "प्रश्न 46. 'आ + ए = ऐ' नियम का सही उदाहरण है-",
        answers: shuffle([
            { text: "एकैक", correct: false },
            { text: "तथैव", correct: true },
            { text: "मतैक्य", correct: false },
            { text: "महौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तथैव' का विच्छेद 'तथा + एव' होता है, जिसमें 'आ' और 'ए' का मेल होता है।"
    },
    {
        question: "प्रश्न 47. 'कृष्णौत्कण्ठ्यम्' शब्द में संधि है-",
        answers: shuffle([
            { text: "यण संधि", correct: false },
            { text: "दीर्घ संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "वृद्धि संधि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'कृष्ण + औत्कण्ठ्यम्' (अ + औ = औ) है, जो वृद्धि संधि का नियम है।"
    },
    {
        question: "प्रश्न 48. 'राजाज्ञा' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "वृद्धि संधि", correct: false },
            { text: "यण संधि", correct: false },
            { text: "दीर्घ संधि", correct: true },
            { text: "गुण संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'राज + आज्ञा' या 'राजा + आज्ञा' (अ/आ + आ = आ) होता है, जो दीर्घ संधि है।"
    },
    {
        question: "प्रश्न 49. 'अक्षौहिणी' शब्द का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "अक्ष + ऊहिणी", correct: true },
            { text: "अक्ष + ओहिणी", correct: false },
            { text: "अक्षौ + हिणी", correct: false },
            { text: "अक्ष + औहिणी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह गुण संधि का अपवाद है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम से 'अ + ऊ' का 'ओ' होना चाहिए था, पर यहाँ वृद्धि होकर 'औ' हो जाता है।"
    },
    {
        question: "प्रश्न 50. 'महौत्सुक्य' का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "महा + उत्सुक्य", correct: false },
            { text: "मह + औत्सुक्य", correct: false },
            { text: "महा + औत्सुक्य", correct: true },
            { text: "महो + त्सुक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'महा' के 'आ' और 'औत्सुक्य' के 'औ' के मेल से 'औ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + औ = औ।"
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