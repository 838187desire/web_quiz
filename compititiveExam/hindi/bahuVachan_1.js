const questions = [
    {
        topHeading: "बहुवचन पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'लड़का' शब्द का बहुवचन रूप क्या है?",
        answers: shuffle([
            { text: "लड़कियाँ", correct: false },
            { text: "लड़के", correct: true },
            { text: "लड़कों", correct: false },
            { text: "लड़कैन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुल्लिंग संज्ञाएँ जिनके अंत में 'आ' होता है, उनका बहुवचन बनाने के लिए 'आ' को 'ए' में बदल दिया जाता है।"
    },
    {
        question: "प्रश्न 2. 'पुस्तक' शब्द का बहुवचन क्या होगा?",
        answers: shuffle([
            { text: "पुस्तकें", correct: true },
            { text: "पुस्तकालय", correct: false },
            { text: "पुस्तिकाओं", correct: false },
            { text: "पुस्तकों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकारांत स्त्रीलिंग संज्ञाओं का बहुवचन बनाने के लिए अंत में 'एँ' जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 3. 'नदी' शब्द का सही बहुवचन रूप चुनें।",
        answers: shuffle([
            { text: "नदीयाँ", correct: false },
            { text: "नदियाँ", correct: true },
            { text: "नदिएँ", correct: false },
            { text: "नदियें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईकारांत स्त्रीलिंग संज्ञाओं का बहुवचन बनाते समय 'ई' को 'इ' में बदलकर 'याँ' जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 4. इनमें से कौन सा शब्द हमेशा बहुवचन में ही प्रयोग होता है?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "प्राण", correct: true },
            { text: "जनता", correct: false },
            { text: "पानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिन्दी में कुछ शब्द जैसे - प्राण, आँसू, होश, हस्ताक्षर, दर्शन, बाल आदि हमेशा बहुवचन में ही प्रयोग किए जाते हैं।"
    },
    {
        question: "प्रश्न 5. 'गुरु' शब्द का बहुवचन बनाने के लिए कौन सा शब्द जोड़ा जाता है?",
        answers: shuffle([
            { text: "लोग", correct: false },
            { text: "वृंद", correct: false },
            { text: "जन", correct: true },
            { text: "गण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुरु' जैसे आदरणीय शब्दों का बहुवचन बनाने के लिए 'जन' शब्द का प्रयोग किया जाता है, जिससे 'गुरुजन' बनता है।"
    },
    {
        question: "प्रश्न 6. 'चिड़िया' शब्द का बहुवचन रूप क्या है?",
        answers: shuffle([
            { text: "चिड़ियाँ", correct: true },
            { text: "चिड़िएँ", correct: false },
            { text: "चिड़ियाएँ", correct: false },
            { text: "चिड़ियों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिन स्त्रीलिंग संज्ञाओं के अंत में 'या' आता है, उनका बहुवचन बनाने के लिए 'या' के ऊपर चंद्रबिंदु (याँ) लगा दिया जाता है।"
    },
    {
        question: "प्रश्न 7. 'वधू' शब्द का बहुवचन क्या होगा?",
        answers: shuffle([
            { text: "वधु", correct: false },
            { text: "वधुयाँ", correct: false },
            { text: "वधुओं", correct: false },
            { text: "वधुएँ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उकारांत और ऊकारांत स्त्रीलिंग संज्ञाओं का बहुवचन बनाते समय अंत में 'एँ' जोड़ा जाता है और 'ऊ' को 'उ' में बदल दिया जाता है।"
    },
    {
        question: "प्रश्न 8. 'नेता' शब्द का बहुवचन रूप है-",
        answers: shuffle([
            { text: "नेते", correct: false },
            { text: "नेताओं", correct: false },
            { text: "नेतागण", correct: true },
            { text: "नेताएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ संज्ञा शब्दों का बहुवचन बनाने के लिए 'गण' शब्द का प्रयोग किया जाता है, जैसे - नेतागण, मित्रगण।"
    },
    {
        question: "प्रश्न 9. 'साधु' शब्द का बहुवचन क्या है?",
        answers: shuffle([
            { text: "साधुएँ", correct: false },
            { text: "साधुओं", correct: false },
            { text: "साधु", correct: true },
            { text: "साधुजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ पुल्लिंग शब्द एकवचन और बहुवचन में समान रहते हैं, जैसे - साधु, मुनि, घर, पेड़।<br><br><i class='fa-solid fa-angles-right icon'></i> वाक्य के अनुसार उनका वचन निर्धारित होता है।"
    },
    {
        question: "प्रश्न 10. 'बात' का बहुवचन रूप क्या है?",
        answers: shuffle([
            { text: "बातों", correct: false },
            { text: "बातें", correct: true },
            { text: "बातियाँ", correct: false },
            { text: "बतियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकारांत स्त्रीलिंग संज्ञा 'बात' का बहुवचन बनाने के लिए अंत में 'एँ' जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 11. इनमें से कौन सा शब्द सदैव एकवचन में प्रयोग होता है?",
        answers: shuffle([
            { text: "हस्ताक्षर", correct: false },
            { text: "भीड़", correct: true },
            { text: "केश", correct: false },
            { text: "आँसू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भीड़', 'जनता', 'सोना', 'चाँदी', 'पानी' जैसे शब्द समूहवाचक या द्रव्यवाचक होने के कारण सदैव एकवचन में प्रयोग होते हैं।"
    },
    {
        question: "प्रश्न 12. 'माता' शब्द का बहुवचन रूप क्या है?",
        answers: shuffle([
            { text: "माते", correct: false },
            { text: "माताओं", correct: false },
            { text: "माताएँ", correct: true },
            { text: "मातागण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकारांत स्त्रीलिंग संज्ञा 'माता' का बहुवचन बनाने के लिए अंत में 'एँ' जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 13. 'दवा' का बहुवचन क्या होगा?",
        answers: shuffle([
            { text: "दवे", correct: false },
            { text: "दवाएँ", correct: true },
            { text: "दवाइयाँ", correct: false },
            { text: "दवाइयों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दवा' एक आकारांत स्त्रीलिंग शब्द है, इसका बहुवचन 'दवाएँ' होगा।"
    },
    {
        question: "प्रश्न 14. 'अध्यापक' शब्द का बहुवचन रूप है-",
        answers: shuffle([
            { text: "अध्यापकवृंद", correct: true },
            { text: "अध्यापकों", correct: false },
            { text: "अध्यापकगण", correct: false },
            { text: "अध्यापिकाएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्यापक' जैसे सम्मानित पद के लिए बहुवचन बनाने हेतु 'वृंद' शब्द का प्रयोग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'गण' का प्रयोग भी होता है लेकिन 'वृंद' अधिक उपयुक्त है।"
    },
    {
        question: "प्रश्न 15. 'गाड़ी' शब्द का बहुवचन क्या है?",
        answers: shuffle([
            { text: "गाड़िएँ", correct: false },
            { text: "गाड़ियाँ", correct: true },
            { text: "गाड़ियों", correct: false },
            { text: "गाड़ीयाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईकारांत स्त्रीलिंग संज्ञा 'गाड़ी' का बहुवचन बनाने के लिए 'ई' को 'इ' में बदलकर अंत में 'याँ' जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 16. 'आँख' का बहुवचन क्या होगा?",
        answers: shuffle([
            { text: "आँखों", correct: false },
            { text: "आँखें", correct: true },
            { text: "अँखियाँ", correct: false },
            { text: "आँखे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आँख' एक अकारांत स्त्रीलिंग शब्द है, जिसका बहुवचन 'आँखें' होता है।"
    },
    {
        question: "प्रश्न 17. 'बहू' शब्द का बहुवचन रूप क्या है?",
        answers: shuffle([
            { text: "बहूएँ", correct: false },
            { text: "बहुओं", correct: false },
            { text: "बहुएँ", correct: true },
            { text: "बहियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊकारांत स्त्रीलिंग संज्ञाओं का बहुवचन बनाते समय 'ऊ' को 'उ' में बदलकर अंत में 'एँ' जोड़ते हैं।"
    },
    {
        question: "प्रश्न 18. 'कवि' का सही बहुवचन रूप है-",
        answers: shuffle([
            { text: "कवियों", correct: false },
            { text: "कविगण", correct: true },
            { text: "कविवृंद", correct: false },
            { text: "कविजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कवि' शब्द का बहुवचन बनाने के लिए 'गण' प्रत्यय का प्रयोग किया जाता है।"
    },
    {
        question: "प्रश्न 19. निम्नलिखित में से कौन सा शब्द बहुवचन है?",
        answers: shuffle([
            { text: "पौधा", correct: false },
            { text: "लड़का", correct: false },
            { text: "प्राण", correct: true },
            { text: "पुस्तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्राण' शब्द का प्रयोग हमेशा बहुवचन में होता है, जैसे - 'उसके प्राण निकल गए'।"
    },
    {
        question: "प्रश्न 20. 'डिबिया' शब्द का बहुवचन क्या है?",
        answers: shuffle([
            { text: "डिबियाँ", correct: true },
            { text: "डिबिएँ", correct: false },
            { text: "डिबियाएँ", correct: false },
            { text: "डिबियों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'या' पर समाप्त होने वाली स्त्रीलिंग संज्ञाओं का बहुवचन बनाने के लिए 'या' को 'याँ' में बदल दिया जाता है।"
    },
    {
        question: "प्रश्न 21. 'श्रोता' शब्द का बहुवचन क्या होगा?",
        answers: shuffle([
            { text: "श्रोतागण", correct: true },
            { text: "श्रोताएँ", correct: false },
            { text: "श्रोते", correct: false },
            { text: "श्रोताओं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्रोता' शब्द का बहुवचन बनाने के लिए 'गण' का प्रयोग किया जाता है।"
    },
    {
        question: "प्रश्न 22. 'आप' शब्द का बहुवचन क्या है?",
        answers: shuffle([
            { text: "आपलोग", correct: true },
            { text: "हम", correct: false },
            { text: "वे", correct: false },
            { text: "आप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आप' आदरसूचक सर्वनाम है, इसका बहुवचन बनाने के लिए 'लोग' जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 23. 'जाति' शब्द का बहुवचन रूप है-",
        answers: shuffle([
            { text: "जातिएँ", correct: false },
            { text: "जातियों", correct: false },
            { text: "जातियाँ", correct: true },
            { text: "जातियें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इकारांत स्त्रीलिंग संज्ञा 'जाति' का बहुवचन 'जातियाँ' होता है।"
    },
    {
        question: "प्रश्न 24. 'हस्ताक्षर' शब्द क्या है?",
        answers: shuffle([
            { text: "एकवचन", correct: false },
            { text: "सदैव एकवचन", correct: false },
            { text: "बहुवचन", correct: false },
            { text: "सदैव बहुवचन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हस्ताक्षर' शब्द का प्रयोग हमेशा बहुवचन में होता है, जैसे - 'मैंने कागज पर हस्ताक्षर कर दिए'।"
    },
    {
        question: "प्रश्न 25. 'वस्तु' का बहुवचन रूप क्या है?",
        answers: shuffle([
            { text: "वस्तु", correct: false },
            { text: "वस्तुएँ", correct: true },
            { text: "वस्तुओं", correct: false },
            { text: "वस्तियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उकारांत स्त्रीलिंग संज्ञाओं के अंत में 'एँ' जोड़कर बहुवचन बनाया जाता है।"
    },
    {
        question: "प्रश्न 26. 'सड़क' का बहुवचन क्या होगा?",
        answers: shuffle([
            { text: "सड़ाकें", correct: false },
            { text: "सड़ाकों", correct: false },
            { text: "सड़कें", correct: true },
            { text: "सड़के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सड़क' अकारांत स्त्रीलिंग शब्द है, इसका बहुवचन 'सड़कें' होगा।"
    },
    {
        question: "प्रश्न 27. 'थाली' शब्द का बहुवचन रूप क्या है?",
        answers: shuffle([
            { text: "थालीयाँ", correct: false },
            { text: "थालियाँ", correct: true },
            { text: "थालिये", correct: false },
            { text: "थालियों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईकारांत स्त्रीलिंग संज्ञाओं में 'ई' को 'इ' करके 'याँ' जोड़कर बहुवचन बनाते हैं।"
    },
    {
        question: "प्रश्न 28. 'कमरा' का सही बहुवचन रूप है-",
        answers: shuffle([
            { text: "कमरें", correct: false },
            { text: "कमराएँ", correct: false },
            { text: "कमरे", correct: true },
            { text: "कमरों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमरा' आकारांत पुल्लिंग शब्द है, जिसका बहुवचन बनाने के लिए 'आ' को 'ए' में बदला जाता है।"
    },
    {
        question: "प्रश्न 29. 'मुनि' शब्द का बहुवचन रूप है-",
        answers: shuffle([
            { text: "मुनियाँ", correct: false },
            { text: "मुनियों", correct: false },
            { text: "मुनि", correct: true },
            { text: "मुनिगण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ पुल्लिंग शब्द एकवचन और बहुवचन में समान रहते हैं, जैसे - मुनि, साधु, डाकू।"
    },
    {
        question: "प्रश्न 30. 'तिथि' शब्द का बहुवचन है-",
        answers: shuffle([
            { text: "तिथि", correct: false },
            { text: "तिथीयों", correct: false },
            { text: "तिथिएँ", correct: false },
            { text: "तिथियाँ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इकारांत स्त्रीलिंग संज्ञा 'तिथि' का बहुवचन 'तिथियाँ' होता है।"
    },
    {
        question: "प्रश्न 31. 'बालक' का बहुवचन रूप क्या है?",
        answers: shuffle([
            { text: "बालकाएँ", correct: false },
            { text: "बालकों", correct: false },
            { text: "बालकगण", correct: true },
            { text: "बालिके", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बालक' शब्द का बहुवचन बनाने के लिए 'गण' शब्द का प्रयोग किया जाता है।"
    },
    {
        question: "प्रश्न 32. 'गुड़िया' का बहुवचन क्या होगा?",
        answers: shuffle([
            { text: "गुड़ियाएँ", correct: false },
            { text: "गुड़ियों", correct: false },
            { text: "गुड़ियाँ", correct: true },
            { text: "गुड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'या' अंत वाली स्त्रीलिंग संज्ञाओं का बहुवचन बनाने के लिए 'या' पर चंद्रबिंदु लगा दिया जाता है।"
    },
    {
        question: "प्रश्न 33. 'लुटिया' शब्द का बहुवचन क्या है?",
        answers: shuffle([
            { text: "लुटियाँ", correct: true },
            { text: "लुटियाएँ", correct: false },
            { text: "लुटियों", correct: false },
            { text: "लुटिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस स्त्रीलिंग शब्द के अन्त में 'या' आता है, उसका बहुवचन बनाने के लिए अन्त में सिर्फ चन्द्रबिन्दु लगाया जाता है।"
    },
    {
        question: "प्रश्न 34. 'अधिकारी' का बहुवचन रूप है-",
        answers: shuffle([
            { text: "अधिकारीवर्ग", correct: true },
            { text: "अधिकारियों", correct: false },
            { text: "अधिकारिगण", correct: false },
            { text: "अधिकारिएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधिकारी' जैसे शब्दों का बहुवचन बनाने के लिए 'वर्ग' का प्रयोग किया जाता है।"
    },
    {
        question: "प्रश्न 35. 'संतरा' का बहुवचन है-",
        answers: shuffle([
            { text: "संतर", correct: false },
            { text: "संतरों", correct: false },
            { text: "संतराएँ", correct: false },
            { text: "संतरे", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकारांत पुल्लिंग संज्ञा 'संतरा' का बहुवचन 'संतरे' होता है।"
    },
    {
        question: "प्रश्न 36. 'दाल' शब्द का बहुवचन क्या है?",
        answers: shuffle([
            { text: "दालें", correct: true },
            { text: "दालों", correct: false },
            { text: "दालियाँ", correct: false },
            { text: "दलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दाल' अकारांत स्त्रीलिंग शब्द है और इसका बहुवचन बनाने के लिए 'एँ' जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 37. 'आँसू' शब्द है-",
        answers: shuffle([
            { text: "एकवचन", correct: false },
            { text: "बहुवचन", correct: true },
            { text: "दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आँसू' शब्द हमेशा बहुवचन में प्रयोग किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'उसकी आँखों से आँसू बहने लगे'।"
    },
    {
        question: "प्रश्न 38. 'महिला' शब्द का बहुवचन क्या होगा?",
        answers: shuffle([
            { text: "महिला", correct: false },
            { text: "महिलाएँ", correct: true },
            { text: "महिलाओ", correct: false },
            { text: "महिलागण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकारांत स्त्रीलिंग संज्ञा 'महिला' का बहुवचन बनाने के लिए अंत में 'एँ' जोड़ते हैं।"
    },
    {
        question: "प्रश्न 39. 'चाकू' शब्द का बहुवचन क्या है?",
        answers: shuffle([
            { text: "चाकुएँ", correct: false },
            { text: "चाकूओं", correct: false },
            { text: "चाकू", correct: true },
            { text: "चाकियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाकू' शब्द एकवचन और बहुवचन में समान रहता है।"
    },
    {
        question: "प्रश्न 40. 'सभा' का बहुवचन रूप है-",
        answers: shuffle([
            { text: "सभाएँ", correct: true },
            { text: "सभे", correct: false },
            { text: "सभाओं", correct: false },
            { text: "सभाजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकारांत स्त्रीलिंग संज्ञा 'सभा' का बहुवचन 'सभाएँ' होता है।"
    },
    {
        question: "प्रश्न 41. 'टोपी' का बहुवचन रूप क्या है?",
        answers: shuffle([
            { text: "टोपियाँ", correct: true },
            { text: "टोपीयाँ", correct: false },
            { text: "टोपियों", correct: false },
            { text: "टोपिएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'टोपी' ईकारांत स्त्रीलिंग शब्द है, इसका बहुवचन 'टोपियाँ' होता है।"
    },
    {
        question: "प्रश्न 42. 'गली' का बहुवचन क्या होगा?",
        answers: shuffle([
            { text: "गलियाँ", correct: true },
            { text: "गलियों", correct: false },
            { text: "गलीयाँ", correct: false },
            { text: "गलिएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गली' ईकारांत स्त्रीलिंग शब्द है, इसका बहुवचन 'गलियाँ' होता है।"
    },
    {
        question: "प्रश्न 43. 'पाठक' का बहुवचन है-",
        answers: shuffle([
            { text: "पाठकगण", correct: true },
            { text: "पाठकों", correct: false },
            { text: "पाठकाएँ", correct: false },
            { text: "पाठीकाएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाठक' शब्द का बहुवचन बनाने के लिए 'गण' का प्रयोग किया जाता है।"
    },
    {
        question: "प्रश्न 44. 'जनता' शब्द किस वचन में आता है?",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "द्विवचन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जनता' समूह का बोध कराने के बावजूद हमेशा एकवचन में प्रयोग होता है।"
    },
    {
        question: "प्रश्न 45. 'दही' शब्द है-",
        answers: shuffle([
            { text: "पुल्लिंग, एकवचन", correct: true },
            { text: "स्त्रीलिंग, एकवचन", correct: false },
            { text: "पुल्लिंग, बहुवचन", correct: false },
            { text: "स्त्रीलिंग, बहुवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दही' एक द्रव्यवाचक संज्ञा है, जो हमेशा पुल्लिंग और एकवचन में प्रयोग होती है।"
    },
    {
        question: "प्रश्न 46. 'लड़की' शब्द का बहुवचन रूप है-",
        answers: shuffle([
            { text: "लड़कियाँ", correct: true },
            { text: "लड़कीयाँ", correct: false },
            { text: "लड़कियों", correct: false },
            { text: "लड़कीएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईकारांत स्त्रीलिंग संज्ञाओं का बहुवचन बनाते समय 'ई' को 'इ' में बदलकर 'याँ' जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 47. 'गाय' का बहुवचन क्या है?",
        answers: shuffle([
            { text: "गायें", correct: false },
            { text: "गायों", correct: false },
            { text: "गाएँ", correct: true },
            { text: "गौ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गाय' अकारांत स्त्रीलिंग शब्द है, इसका बहुवचन 'गाएँ' होता है।"
    },
    {
        question: "प्रश्न 48. 'माला' का बहुवचन रूप है-",
        answers: shuffle([
            { text: "माले", correct: false },
            { text: "मालाएँ", correct: true },
            { text: "मालाओं", correct: false },
            { text: "मालियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'माला' आकारांत स्त्रीलिंग शब्द है, इसका बहुवचन 'मालाएँ' होगा।"
    },
    {
        question: "प्रश्न 49. 'दर्शन' शब्द का प्रयोग होता है-",
        answers: shuffle([
            { text: "सदैव एकवचन में", correct: false },
            { text: "सदैव बहुवचन में", correct: true },
            { text: "दोनों में", correct: false },
            { text: "किसी में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दर्शन' शब्द का प्रयोग हमेशा बहुवचन में होता है, जैसे 'आपके दर्शन दुर्लभ हैं'।"
    },
    {
        question: "प्रश्न 50. 'बाल' शब्द किस वचन में प्रयुक्त होता है?",
        answers: shuffle([
            { text: "एकवचन", correct: false },
            { text: "बहुवचन", correct: true },
            { text: "दोनों में", correct: false },
            { text: "किसी में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाल' शब्द का प्रयोग हमेशा बहुवचन में होता है, जैसे - 'उसके बाल झड़ रहे हैं'।"
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