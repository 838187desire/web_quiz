const questions = [
    {
        topHeading: "पुल्लिंग पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. निम्नलिखित में से कौन सा शब्द पुल्लिंग है?",
        answers: shuffle([
            { text: "कपट", correct: true },
            { text: "सुन्दरता", correct: false },
            { text: "मूर्खता", correct: false },
            { text: "निद्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपट एक भाव है जिसे पुल्लिंग माना जाता है, जबकि सुन्दरता, मूर्खता और निद्रा स्त्रीलिंग शब्द हैं।"
    },
    {
        question: "प्रश्न 2. इनमें से कौन सा शब्द पुल्लिंग नहीं है?",
        answers: shuffle([
            { text: "बनावट", correct: true },
            { text: "छाता", correct: false },
            { text: "सूर्य", correct: false },
            { text: "अमरूद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बनावट' शब्द स्त्रीलिंग है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिन भाववाचक संज्ञाओं के अंत में 'वट' होता है, वे प्रायः स्त्रीलिंग होती हैं।"
    },
    {
        question: "प्रश्न 3. 'गिद्ध' शब्द का लिंग क्या है?",
        answers: shuffle([
            { text: "पुल्लिंग", correct: true },
            { text: "स्त्रीलिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "नपुंसकलिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पक्षियों के नाम प्रायः पुल्लिंग होते हैं, जैसे गिद्ध, कौआ, तोता आदि।"
    },
    {
        question: "प्रश्न 4. निम्नलिखित में पुल्लिंग शब्द छाँटिए।",
        answers: shuffle([
            { text: "चाहत", correct: false },
            { text: "रंगत", correct: false },
            { text: "मेहनत", correct: false },
            { text: "आहार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार किया जाता है, इसलिए यह पुल्लिंग शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> चाहत, रंगत और मेहनत स्त्रीलिंग शब्द हैं।"
    },
    {
        question: "प्रश्न 5. 'कवि' शब्द का स्त्रीलिंग रूप क्या है?",
        answers: shuffle([
            { text: "कवियत्री", correct: false },
            { text: "कवयित्री", correct: true },
            { text: "कवित्री", correct: false },
            { text: "कवीयत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कवि' का सही स्त्रीलिंग रूप 'कवयित्री' होता है, यह वर्तनी की दृष्टि से भी शुद्ध है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से कौन सा शब्द हमेशा पुल्लिंग रहता है?",
        answers: shuffle([
            { text: "मछली", correct: false },
            { text: "मकड़ी", correct: false },
            { text: "गैंडा", correct: true },
            { text: "कोयल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैंडा शब्द नित्य पुल्लिंग है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका स्त्रीलिंग रूप 'मादा गैंडा' होता है।"
    },
    {
        question: "प्रश्न 7. 'पानी' शब्द का लिंग निर्धारित करें।",
        answers: shuffle([
            { text: "पुल्लिंग", correct: true },
            { text: "स्त्रीलिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव पदार्थों के नाम जैसे पानी, घी, तेल, दूध आदि पुल्लिंग होते हैं।"
    },
    {
        question: "प्रश्न 8. 'दही' शब्द क्या है?",
        answers: shuffle([
            { text: "पुल्लिंग", correct: true },
            { text: "स्त्रीलिंग", correct: false },
            { text: "नपुंसकलिंग", correct: false },
            { text: "उभयलिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दही खट्टा होता है, 'होती है' नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह पुल्लिंग शब्द है।"
    },
    {
        question: "प्रश्न 9. निम्न में से पुल्लिंग शब्द कौन सा है?",
        answers: shuffle([
            { text: "दया", correct: false },
            { text: "माया", correct: false },
            { text: "भाषा", correct: false },
            { text: "आभार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आभार व्यक्त किया जाता है, इसलिए यह पुल्लिंग शब्द है।"
    },
    {
        question: "प्रश्न 10. 'गीदड़' का स्त्रीलिंग क्या होगा?",
        answers: shuffle([
            { text: "गीदड़ीन", correct: false },
            { text: "गीदड़नी", correct: false },
            { text: "गीदड़ी", correct: true },
            { text: "गिदड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ प्राणीवाचक पुल्लिंग शब्दों के अंत में 'ई' लगाकर स्त्रीलिंग बनाया जाता है, जैसे गीदड़ से गीदड़ी।"
    },
    {
        question: "प्रश्न 11. कौन सा शब्द पुल्लिंग है?",
        answers: shuffle([
            { text: "आशा", correct: false },
            { text: "आज्ञा", correct: false },
            { text: "गरिमा", correct: false },
            { text: "सागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सागर, महासागर आदि के नाम पुल्लिंग होते हैं।"
    },
    {
        question: "प्रश्न 12. 'विधुर' शब्द का स्त्रीलिंग कौन सा है?",
        answers: shuffle([
            { text: "विधुरी", correct: false },
            { text: "विधुरनी", correct: false },
            { text: "विधवा", correct: true },
            { text: "विधुराइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस स्त्री का पति मर गया हो उसे 'विधवा' कहते हैं और जिस पुरुष की पत्नी मर गई हो उसे 'विधुर' कहते हैं।"
    },
    {
        question: "प्रश्न 13. निम्नलिखित शब्दों में से पुल्लिंग शब्द का चयन कीजिए।",
        answers: shuffle([
            { text: "सूची-पत्र", correct: true },
            { text: "किताब", correct: false },
            { text: "गंगा", correct: false },
            { text: "संसद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूची-पत्र देखा जाता है, इसलिए यह पुल्लिंग है।<br><br><i class='fa-solid fa-angles-right icon'></i> किताब, गंगा और संसद स्त्रीलिंग हैं।"
    },
    {
        question: "प्रश्न 14. इनमें से कौन सा शब्द पुल्लिंग है?",
        answers: shuffle([
            { text: "अ) अदालत", correct: false },
            { text: "ब) गिलास", correct: true },
            { text: "'अ' और 'ब' दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिलास टूट गया (न कि टूट गई), इसलिए यह पुल्लिंग है।<br><br><i class='fa-solid fa-angles-right icon'></i> अदालत स्त्रीलिंग शब्द है (अदालत ने फैसला सुनाया)।"
    },
    {
        question: "प्रश्न 15. 'तन' शब्द का लिंग निर्धारित कीजिए।",
        answers: shuffle([
            { text: "पुल्लिंग", correct: true },
            { text: "स्त्रीलिंग", correct: false },
            { text: "उभयलिंगी", correct: false },
            { text: "नपुंसकलिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शरीर के अंगों के नाम जैसे तन, मन, सिर, बाल, हाथ, पैर आदि पुल्लिंग होते हैं।"
    },
    {
        question: "प्रश्न 16. कौन सा शब्द पुल्लिंग है?",
        answers: shuffle([
            { text: "मंजिल", correct: false },
            { text: "भरमार", correct: false },
            { text: "पुलिंदा", correct: true },
            { text: "मर्यादा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलिंदा (गट्ठर) बनाया जाता है, इसलिए यह पुल्लिंग है।"
    },
    {
        question: "प्रश्न 17. 'नर' शब्द का स्त्रीलिंग रूप है-",
        answers: shuffle([
            { text: "नारी", correct: true },
            { text: "महिला", correct: false },
            { text: "औरत", correct: false },
            { text: "मादा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नर' का सटीक स्त्रीलिंग विलोम 'नारी' होता है।"
    },
    {
        question: "प्रश्न 18. निम्न में पुल्लिंग शब्द है-",
        answers: shuffle([
            { text: "रात", correct: false },
            { text: "बात", correct: false },
            { text: "गीत", correct: true },
            { text: "मात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गीत गाया जाता है, इसलिए यह पुल्लिंग है।<br><br><i class='fa-solid fa-angles-right icon'></i> रात, बात, मात स्त्रीलिंग हैं।"
    },
    {
        question: "प्रश्न 19. 'सम्राट' शब्द का स्त्रीलिंग क्या है?",
        answers: shuffle([
            { text: "सम्राज्ञी", correct: true },
            { text: "सम्राटी", correct: false },
            { text: "सम्राट्नी", correct: false },
            { text: "सम्राटिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सम्राट' का सही स्त्रीलिंग रूप 'सम्राज्ञी' होता है।"
    },
    {
        question: "प्रश्न 20. निम्नलिखित में से पुल्लिंग शब्द है-",
        answers: shuffle([
            { text: "घास", correct: false },
            { text: "आय", correct: false },
            { text: "व्यय", correct: true },
            { text: "नहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यय (खर्च) किया जाता है या होता है, इसलिए यह पुल्लिंग है।"
    },
    {
        question: "प्रश्न 21. कौन सा शब्द पुल्लिंग है?",
        answers: shuffle([
            { text: "दीमक", correct: false },
            { text: "रात", correct: false },
            { text: "वर्षा", correct: false },
            { text: "विधुर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विधुर एक पुरुष के लिए प्रयुक्त होता है, अतः यह पुल्लिंग है।"
    },
    {
        question: "प्रश्न 22. 'बुढ़ापा' शब्द में कौन सा लिंग है?",
        answers: shuffle([
            { text: "पुल्लिंग", correct: true },
            { text: "स्त्रीलिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिन भाववाचक संज्ञाओं के अंत में 'पा', 'पन', 'त्व' आदि आते हैं, वे प्रायः पुल्लिंग होती हैं।"
    },
    {
        question: "प्रश्न 23. 'सोमवार' क्या है?",
        answers: shuffle([
            { text: "पुल्लिंग", correct: true },
            { text: "स्त्रीलिंग", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिनों और महीनों के नाम पुल्लिंग होते हैं।"
    },
    {
        question: "प्रश्न 24. 'नेता' शब्द का स्त्रीलिंग रूप क्या है?",
        answers: shuffle([
            { text: "नेत्री", correct: true },
            { text: "नेतिन", correct: false },
            { text: "नेतृ", correct: false },
            { text: "नेताजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ता' से अंत होने वाले पुल्लिंग शब्दों का स्त्रीलिंग 'त्री' लगाकर बनता है, जैसे नेता से नेत्री, दाता से दात्री।"
    },
    {
        question: "प्रश्न 25. निम्नलिखित में से पुल्लिंग शब्द को चुनिए।",
        answers: shuffle([
            { text: "याचना", correct: false },
            { text: "संस्था", correct: false },
            { text: "प्रवेश", correct: true },
            { text: "सेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रवेश किया जाता है या मिलता है, इसलिए यह पुल्लिंग शब्द है।"
    },
    {
        question: "प्रश्न 26. 'लोहा' कौन सा लिंग है?",
        answers: shuffle([
            { text: "स्त्रीलिंग", correct: false },
            { text: "पुल्लिंग", correct: true },
            { text: "उभयलिंग", correct: false },
            { text: "नपुंसकलिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धातुओं के नाम प्रायः पुल्लिंग होते हैं, जैसे सोना, ताँबा, पीतल, लोहा।<br><br><i class='fa-solid fa-angles-right icon'></i> (अपवाद - चाँदी)"
    },
    {
        question: "प्रश्न 27. 'विद्वान' शब्द का स्त्रीलिंग क्या होगा?",
        answers: shuffle([
            { text: "विदुषी", correct: true },
            { text: "विद्वानी", correct: false },
            { text: "विद्वता", correct: false },
            { text: "विदुशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विद्वान' पुरुष के लिए और 'विदुषी' महिला के लिए प्रयोग होता है।"
    },
    {
        question: "प्रश्न 28. निम्न में से कौन सा शब्द पुल्लिंग है?",
        answers: shuffle([
            { text: "इच्छा", correct: false },
            { text: "राष्ट्र", correct: true },
            { text: "रक्षा", correct: false },
            { text: "योग्यता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्र एक विशाल भू-भाग होता है, यह पुल्लिंग शब्द है।"
    },
    {
        question: "प्रश्न 29. 'हलवाई' का स्त्रीलिंग है?",
        answers: shuffle([
            { text: "हलवाइन", correct: true },
            { text: "हलवानी", correct: false },
            { text: "हलवाईन", correct: false },
            { text: "हलुवाइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आई' अंत वाले कुछ जातिवाचक शब्दों में 'इन' लगाकर स्त्रीलिंग बनाया जाता है, जैसे हलवाई से हलवाइन।"
    },
    {
        question: "प्रश्न 30. निम्न में पुल्लिंग शब्द है -",
        answers: shuffle([
            { text: "क्षमा", correct: false },
            { text: "घटना", correct: false },
            { text: "क्षेत्र", correct: true },
            { text: "रीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षेत्र होता है (न कि होती है), अतः यह पुल्लिंग है।"
    },
    {
        question: "प्रश्न 31. 'कहार' का लिंग बदलें।",
        answers: shuffle([
            { text: "कहारिन", correct: true },
            { text: "कहारनी", correct: false },
            { text: "कहारी", correct: false },
            { text: "कहराइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कहार' जातिवाचक शब्द का स्त्रीलिंग 'कहारिन' होता है।"
    },
    {
        question: "प्रश्न 32. इनमें से पुल्लिंग शब्द बताएँ।",
        answers: shuffle([
            { text: "उम्मीद", correct: false },
            { text: "बचपन", correct: true },
            { text: "बेकारी", correct: false },
            { text: "पूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बचपन होता है, होती नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक भाववाचक पुल्लिंग संज्ञा है।"
    },
    {
        question: "प्रश्न 33. 'साधु' का स्त्रीलिंग शब्द है?",
        answers: shuffle([
            { text: "साधुनी", correct: false },
            { text: "साध्वी", correct: true },
            { text: "साध्वीनी", correct: false },
            { text: "सधुवाइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साधु का सही स्त्रीलिंग रूप 'साध्वी' है।"
    },
    {
        question: "प्रश्न 34. 'पहिया' शब्द का लिंग क्या है?",
        answers: shuffle([
            { text: "पुल्लिंग", correct: true },
            { text: "स्त्रीलिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहिया घूमता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'या' प्रत्यय वाले कुछ शब्द पुल्लिंग होते हैं।"
    },
    {
        question: "प्रश्न 35. 'भगवान' का स्त्रीलिंग क्या है?",
        answers: shuffle([
            { text: "भगवानी", correct: false },
            { text: "भगवती", correct: true },
            { text: "भाग्यवान", correct: false },
            { text: "भागिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वान' अंत वाले शब्दों का स्त्रीलिंग 'वती' लगाकर बनता है, जैसे भगवान से भगवती, बलवान से बलवती।"
    },
    {
        question: "प्रश्न 36. निम्न में से कौन सा शब्द पुल्लिंग है?",
        answers: shuffle([
            { text: "वायु", correct: false },
            { text: "प्रभुता", correct: false },
            { text: "विराम", correct: true },
            { text: "छवि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विराम लिया जाता है, इसलिए यह पुल्लिंग है।"
    },
    {
        question: "प्रश्न 37. 'भेड़िया' शब्द का स्त्रीलिंग रूप क्या है?",
        answers: shuffle([
            { text: "भेड़िनी", correct: false },
            { text: "भेड़िआइन", correct: false },
            { text: "मादा भेड़िया", correct: true },
            { text: "भेड़ियी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भेड़िया नित्य पुल्लिंग शब्द है, इसका लिंग परिवर्तन 'मादा' शब्द लगाकर किया जाता है।"
    },
    {
        question: "प्रश्न 38. कौन सा शब्द पुल्लिंग है?",
        answers: shuffle([
            { text: "लगन", correct: false },
            { text: "मीमांसा", correct: false },
            { text: "आहट", correct: false },
            { text: "माधुर्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधुर्य एक भाव है, जो पुल्लिंग माना जाता है।"
    },
    {
        question: "प्रश्न 39. 'वीर' शब्द का स्त्रीलिंग है?",
        answers: shuffle([
            { text: "वीरांगना", correct: true },
            { text: "वीरगति", correct: false },
            { text: "वीरावती", correct: false },
            { text: "वीरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वीर' पुरुष के लिए और 'वीरांगना' स्त्री के लिए प्रयोग होता है।"
    },
    {
        question: "प्रश्न 40. 'पराठा' शब्द का लिंग क्या है?",
        answers: shuffle([
            { text: "पुल्लिंग", correct: true },
            { text: "स्त्रीलिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खाने की वस्तुओं में पराठा, हलवा, रायता आदि पुल्लिंग होते हैं।"
    },
    {
        question: "प्रश्न 41. 'श्रीमान' का स्त्रीलिंग रूप है-",
        answers: shuffle([
            { text: "श्रीमति", correct: false },
            { text: "श्रीमती", correct: true },
            { text: "श्रीमानी", correct: false },
            { text: "श्रीमना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मान' अंत वाले शब्दों का स्त्रीलिंग 'मती' लगाकर बनता है, जैसे श्रीमान से श्रीमती, बुद्धिमान से बुद्धिमती।"
    },
    {
        question: "प्रश्न 42. इनमें से पुल्लिंग शब्द कौन सा है?",
        answers: shuffle([
            { text: "जेल (जेल)", correct: false },
            { text: "शरबत", correct: true },
            { text: "चाय", correct: false },
            { text: "लस्सी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेय पदार्थों में शरबत, दूध, काढ़ा पुल्लिंग हैं, जबकि चाय, कॉफी, लस्सी स्त्रीलिंग हैं।"
    },
    {
        question: "प्रश्न 43. 'युवक' का स्त्रीलिंग है-",
        answers: shuffle([
            { text: "युवती", correct: true },
            { text: "युवकी", correct: false },
            { text: "बालिका", correct: false },
            { text: "महिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'युवक' का सही स्त्रीलिंग रूप 'युवती' होता है।"
    },
    {
        question: "प्रश्न 44. निम्न में पुल्लिंग शब्द छाँटिए।",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "सरकार", correct: false },
            { text: "मंडल", correct: true },
            { text: "समिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंडल का गठन होता है, इसलिए यह पुल्लिंग है।"
    },
    {
        question: "प्रश्न 45. 'वर' शब्द का स्त्रीलिंग क्या है?",
        answers: shuffle([
            { text: "वारी", correct: false },
            { text: "वधू", correct: true },
            { text: "वरी", correct: false },
            { text: "दुल्हन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवाह के समय लड़के को 'वर' और लड़की को 'वधू' कहते हैं।"
    },
    {
        question: "प्रश्न 46. कौन सा शब्द पुल्लिंग है?",
        answers: shuffle([
            { text: "मणि", correct: false },
            { text: "चाँदी", correct: false },
            { text: "मोती", correct: true },
            { text: "माला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रत्न और धातुओं में 'मोती' पुल्लिंग होता है, जबकि मणि और चाँदी स्त्रीलिंग हैं।"
    },
    {
        question: "प्रश्न 47. 'बिलाव' शब्द का स्त्रीलिंग क्या होगा?",
        answers: shuffle([
            { text: "बिल्लौटा", correct: false },
            { text: "बिल्ली", correct: true },
            { text: "बिलैया", correct: false },
            { text: "बिल्ला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिलाव' (नर बिल्ली) का स्त्रीलिंग 'बिल्ली' होता है।"
    },
    {
        question: "प्रश्न 48. 'शहद' शब्द है-",
        answers: shuffle([
            { text: "पुल्लिंग", correct: true },
            { text: "स्त्रीलिंग", correct: false },
            { text: "उभयलिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शहद मीठा होता है, अतः यह पुल्लिंग है।"
    },
    {
        question: "प्रश्न 49. 'लेखक' का स्त्रीलिंग है?",
        answers: shuffle([
            { text: "लेखिका", correct: true },
            { text: "लेखकी", correct: false },
            { text: "लेखनी", correct: false },
            { text: "लिखाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अक' अंत वाले शब्दों का स्त्रीलिंग 'इका' लगाकर बनता है, जैसे लेखक से लेखिका, पाठक से पाठिका।"
    },
    {
        question: "प्रश्न 50. निम्नलिखित में से पुल्लिंग शब्द कौन सा है?",
        answers: shuffle([
            { text: "बनावट", correct: false },
            { text: "सजावट", correct: false },
            { text: "बचपन", correct: true },
            { text: "लिखावट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाववाचक संज्ञा 'बचपन' पुल्लिंग है।"
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