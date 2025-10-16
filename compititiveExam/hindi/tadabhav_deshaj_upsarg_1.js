const questions = [
    {
        topHeading: "तद्भव और देशज उपसर्गों पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'अधमरा' शब्द में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अध", correct: true },
            { text: "आध", correct: false },
            { text: "मरा", correct: false },
            { text: "अ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधमरा' में 'अध' उपसर्ग है, जिसका अर्थ 'आधा' होता है।"
    },
    {
        question: "प्रश्न 2. 'अनजान' शब्द में प्रयुक्त उपसर्ग बताइए।",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अन्", correct: false },
            { text: "अन", correct: true },
            { text: "जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनजान' में 'अन' उपसर्ग का प्रयोग हुआ है, जो 'नहीं' या 'अभाव' का अर्थ देता है।"
    },
    {
        question: "प्रश्न 3. निम्नलिखित में से किस शब्द में 'कु' उपसर्ग नहीं है?",
        answers: shuffle([
            { text: "कुरूप", correct: false },
            { text: "कुशल", correct: true },
            { text: "कुकर्म", correct: false },
            { text: "कुचाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुशल' शब्द में 'कु' उपसर्ग नहीं है, यह एक मूल शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अन्य तीनों शब्दों में 'कु' उपसर्ग है जिसका अर्थ 'बुरा' होता है।"
    },
    {
        question: "प्रश्न 4. 'उजड़ना' में कौन सा उपसर्ग हो सकता है?",
        answers: shuffle([
            { text: "उ", correct: true },
            { text: "उज", correct: false },
            { text: "उड़", correct: false },
            { text: "उत्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उजड़ना' में 'उ' उपसर्ग है जो 'उत्' का तद्भव रूप है।"
    },
    {
        question: "प्रश्न 5. 'निडर' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "नि", correct: true },
            { text: "निड्", correct: false },
            { text: "नी", correct: false },
            { text: "निर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निडर' शब्द में 'नि' उपसर्ग है, जिसका अर्थ 'बिना' या 'रहित' होता है, अर्थात 'बिना डर के'।"
    },
    {
        question: "प्रश्न 6. 'अधपका' में उपसर्ग है-",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अध", correct: true },
            { text: "पका", correct: false },
            { text: "आध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधपका' में 'अध' उपसर्ग है, जिसका अर्थ 'आधा' है।"
    },
    {
        question: "प्रश्न 7. 'दुबला' शब्द में उपसर्ग बताइए।",
        answers: shuffle([
            { text: "दु", correct: true },
            { text: "दूब", correct: false },
            { text: "द", correct: false },
            { text: "दुर्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुबला' में 'दु' उपसर्ग है, जिसका अर्थ 'कम' या 'हीन' होता है।"
    },
    {
        question: "प्रश्न 8. 'सुडौल' शब्द में किस उपसर्ग का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "सु", correct: true },
            { text: "सुड्", correct: false },
            { text: "डौल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुडौल' में 'सु' उपसर्ग लगा है, जिसका अर्थ 'अच्छा' होता है।"
    },
    {
        question: "प्रश्न 9. निम्नलिखित में से तद्भव उपसर्ग युक्त शब्द कौन सा है?",
        answers: shuffle([
            { text: "संगम", correct: false },
            { text: "सुपुत्र", correct: false },
            { text: "कपूत", correct: true },
            { text: "प्रतिदिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कपूत' में 'क' तद्भव उपसर्ग है, जबकि 'संगम' और 'सुपुत्र' में तत्सम और 'प्रतिदिन' में संस्कृत उपसर्ग है।"
    },
    {
        question: "प्रश्न 10. 'परहित' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "प", correct: false },
            { text: "पर", correct: true },
            { text: "परि", correct: false },
            { text: "हित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परहित' में 'पर' उपसर्ग है, जिसका अर्थ 'दूसरा' होता है, अर्थात दूसरों का हित।"
    },
    {
        question: "प्रश्न 11. 'बिनदेखा' शब्द में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "बिन", correct: true },
            { text: "बि", correct: false },
            { text: "बिनदे", correct: false },
            { text: "न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिनदेखा' में 'बिन' उपसर्ग है, जिसका अर्थ 'बिना' होता है।"
    },
    {
        question: "प्रश्न 12. 'अछूता' में उपसर्ग बताइए।",
        answers: shuffle([
            { text: "अ", correct: true },
            { text: "आ", correct: false },
            { text: "अछ्", correct: false },
            { text: "छूता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अछूता' में 'अ' उपसर्ग है, जो 'निषेध' या 'अभाव' का अर्थ प्रकट करता है।"
    },
    {
        question: "प्रश्न 13. किस शब्द में 'औ' उपसर्ग का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "औचक", correct: false },
            { text: "औरत", correct: false },
            { text: "औजार", correct: false },
            { text: "औगुन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'औगुन' शब्द में 'औ' उपसर्ग है, जो 'अव' का तद्भव रूप है और 'हीनता' का बोध कराता है।"
    },
    {
        question: "प्रश्न 14. 'निकम्मा' शब्द में प्रयुक्त उपसर्ग है-",
        answers: shuffle([
            { text: "नि", correct: true },
            { text: "निक", correct: false },
            { text: "निकम्", correct: false },
            { text: "न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निकम्मा' में 'नि' उपसर्ग है, जिसका अर्थ 'रहित' या 'बिना' होता है।"
    },
    {
        question: "प्रश्न 15. 'पचमेल' शब्द में कौन सा उपसर्ग माना जा सकता है?",
        answers: shuffle([
            { text: "पच", correct: true },
            { text: "प", correct: false },
            { text: "मेल", correct: false },
            { text: "पच्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पचमेल' में 'पच' (पाँच) को उपसर्ग की तरह प्रयुक्त किया गया है, जो संख्या का बोध कराता है।"
    },
    {
        question: "प्रश्न 16. 'चौराहा' शब्द में प्रयुक्त उपसर्ग है-",
        answers: shuffle([
            { text: "च", correct: false },
            { text: "चौ", correct: true },
            { text: "चार", correct: false },
            { text: "चौरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चौराहा' में 'चौ' उपसर्ग है, जिसका अर्थ 'चार' होता है।"
    },
    {
        question: "प्रश्न 17. 'सजल' में 'स' उपसर्ग का अर्थ है-",
        answers: shuffle([
            { text: "अच्छा", correct: false },
            { text: "सहित", correct: true },
            { text: "अभाव", correct: false },
            { text: "जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सजल' में 'स' उपसर्ग का अर्थ 'सहित' है, अर्थात जल के साथ।"
    },
    {
        question: "प्रश्न 18. निम्नलिखित में से किस शब्द में हिंदी (तद्भव) उपसर्ग है?",
        answers: shuffle([
            { text: "आमरण", correct: false },
            { text: "निहत्था", correct: true },
            { text: "संकल्प", correct: false },
            { text: "उपवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निहत्था' में 'नि' हिंदी का तद्भव उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य शब्दों में संस्कृत (तत्सम) उपसर्ग हैं।"
    },
    {
        question: "प्रश्न 19. 'भरसक' शब्द में उपसर्ग पहचानिए।",
        answers: shuffle([
            { text: "भ", correct: false },
            { text: "भर", correct: true },
            { text: "सक", correct: false },
            { text: "भा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भरसक' में 'भर' उपसर्ग है, जिसका अर्थ 'पूरा' है।"
    },
    {
        question: "प्रश्न 20. 'अनपढ़' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अन", correct: true },
            { text: "आ", correct: false },
            { text: "अप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनपढ़' में 'अन' उपसर्ग है, जो 'अभाव' का सूचक है।"
    },
    {
        question: "प्रश्न 21. 'अधखिला' फूल। इस वाक्य में 'अधखिला' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अध", correct: true },
            { text: "खिला", correct: false },
            { text: "आध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधखिला' में 'अध' उपसर्ग है, जिसका अर्थ 'आधा' है।"
    },
    {
        question: "प्रश्न 22. 'परदादा' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "प", correct: false },
            { text: "पर", correct: true },
            { text: "पर्", correct: false },
            { text: "परा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परदादा' में 'पर' उपसर्ग है, जो 'दूसरी पीढ़ी' का बोध कराता है।"
    },
    {
        question: "प्रश्न 23. 'बहुमूल्य' में उपसर्ग बताइए।",
        answers: shuffle([
            { text: "ब", correct: false },
            { text: "बहु", correct: true },
            { text: "बहम", correct: false },
            { text: "मूल्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहुमूल्य' में 'बहु' उपसर्ग है, जिसका अर्थ 'ज्यादा' होता है।"
    },
    {
        question: "प्रश्न 24. 'कुकर्म' में उपसर्ग है-",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "कु", correct: true },
            { text: "कर्म", correct: false },
            { text: "कुक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुकर्म' में 'कु' उपसर्ग है, जो 'बुरा' के अर्थ में प्रयुक्त होता है।"
    },
    {
        question: "प्रश्न 25. 'चिरकाल' शब्द को बनाने वाला उपसर्ग है-",
        answers: shuffle([
            { text: "चि", correct: false },
            { text: "चिर", correct: true },
            { text: "र", correct: false },
            { text: "काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिरकाल' में 'चिर' उपसर्ग है, जिसका अर्थ 'बहुत देर' या 'हमेशा' होता है।"
    },
    {
        question: "प्रश्न 26. 'नाना' उपसर्ग से बना शब्द है-",
        answers: shuffle([
            { text: "नानी", correct: false },
            { text: "नानासाहेब", correct: false },
            { text: "नानारूप", correct: true },
            { text: "नास्तिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नानारूप' में 'नाना' उपसर्ग है, जिसका अर्थ 'अनेक' या 'विविध' होता है।"
    },
    {
        question: "प्रश्न 27. 'कापुरुष' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "का", correct: true },
            { text: "कापु", correct: false },
            { text: "क", correct: false },
            { text: "पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कापुरुष' में 'का' उपसर्ग है, जिसका अर्थ 'बुरा' या 'कायर' होता है।"
    },
    {
        question: "प्रश्न 28. 'उजड़ना' में कौन सा उपसर्ग हो सकता है?",
        answers: shuffle([
            { text: "उ", correct: true },
            { text: "उज", correct: false },
            { text: "उड़", correct: false },
            { text: "उत्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उजड़ना' में 'उ' उपसर्ग है जो 'उत्' का तद्भव रूप है।"
    },
    {
        question: "प्रश्न 29. 'दुकाल' में कैसा उपसर्ग है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: true },
            { text: "विदेशी", correct: false },
            { text: "देशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुकाल' में 'दु' हिंदी का तद्भव उपसर्ग है, जिसका अर्थ 'बुरा' है।"
    },
    {
        question: "प्रश्न 30. 'सपरिवार' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "स", correct: true },
            { text: "स्व", correct: false },
            { text: "सह", correct: false },
            { text: "सप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सपरिवार' में 'स' उपसर्ग है, जिसका अर्थ 'सहित' होता है।"
    },
    {
        question: "प्रश्न 31. 'अमोल' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "अ", correct: true },
            { text: "अम", correct: false },
            { text: "अन", correct: false },
            { text: "मोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमोल' में 'अ' उपसर्ग है, जिसका तद्भव रूप 'अनमोल' में 'अन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अ' का अर्थ 'बिना' है।"
    },
    {
        question: "प्रश्न 32. 'अचेत' शब्द में उपसर्ग बताइए।",
        answers: shuffle([
            { text: "अ", correct: true },
            { text: "अच्", correct: false },
            { text: "चेत", correct: false },
            { text: "अव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अचेत' में 'अ' उपसर्ग है, जो 'नहीं' के अर्थ में है।"
    },
    {
        question: "प्रश्न 33. 'समदर्शी' में उपसर्ग है-",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "सम्", correct: false },
            { text: "सम", correct: true },
            { text: "दर्शी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समदर्शी' में 'सम' उपसर्ग है, जिसका अर्थ 'समान' होता है।"
    },
    {
        question: "प्रश्न 34. 'लाचार' में 'ला' उपसर्ग किस भाषा का है?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "हिंदी", correct: false },
            { text: "अरबी-फारसी", correct: true },
            { text: "अंग्रेजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लाचार' में 'ला' उपसर्ग अरबी-फारसी का है, जिसका अर्थ 'बिना' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि यह विदेशी है, पर हिंदी में प्रयुक्त होता है।"
    },
    {
        question: "प्रश्न 35. 'सहोदर' में उपसर्ग है-",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "सह", correct: true },
            { text: "सो", correct: false },
            { text: "दर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सहोदर' में 'सह' उपसर्ग है, जिसका अर्थ 'साथ' होता है।"
    },
    {
        question: "प्रश्न 36. 'भरपूर' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "भ", correct: false },
            { text: "भर", correct: true },
            { text: "पूर", correct: false },
            { text: "र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भरपूर' में 'भर' उपसर्ग है, जिसका अर्थ 'पूरा' है।"
    },
    {
        question: "प्रश्न 37. 'चिरायु' में उपसर्ग है-",
        answers: shuffle([
            { text: "चि", correct: false },
            { text: "चिर", correct: true },
            { text: "चिरा", correct: false },
            { text: "आयु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिरायु' में 'चिर' उपसर्ग है, जिसका अर्थ 'दीर्घ' या 'लंबा' होता है।"
    },
    {
        question: "प्रश्न 38. 'परलोक' में उपसर्ग पहचानिए।",
        answers: shuffle([
            { text: "प", correct: false },
            { text: "पर", correct: true },
            { text: "पर्", correct: false },
            { text: "लोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परलोक' में 'पर' उपसर्ग है, जिसका अर्थ 'दूसरा' होता है।"
    },
    {
        question: "प्रश्न 39. 'बिनब्याहा' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "बिन", correct: true },
            { text: "बि", correct: false },
            { text: "ब्याहा", correct: false },
            { text: "न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिनब्याहा' में 'बिन' उपसर्ग है, जो 'बिना' का अर्थ देता है।"
    },
    {
        question: "प्रश्न 40. 'सुघड़' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "सु", correct: true },
            { text: "स", correct: false },
            { text: "सुघ", correct: false },
            { text: "ड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुघड़' में 'सु' उपसर्ग है, जिसका अर्थ 'अच्छा' होता है।"
    },
    {
        question: "प्रश्न 41. 'अंतर्राष्ट्रीय' में उपसर्ग है-",
        answers: shuffle([
            { text: "अंतः", correct: false },
            { text: "अंतर", correct: true },
            { text: "अं", correct: false },
            { text: "राष्ट्रीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंतर्राष्ट्रीय' में 'अंतर' उपसर्ग है, जिसका अर्थ 'के बीच में' होता है।"
    },
    {
        question: "प्रश्न 42. 'कुढंग' शब्द में 'कु' उपसर्ग का अर्थ है-",
        answers: shuffle([
            { text: "अच्छा", correct: false },
            { text: "बुरा", correct: true },
            { text: "साथ", correct: false },
            { text: "नीचे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुढंग' में 'कु' उपसर्ग का प्रयोग 'बुरे' ढंग के अर्थ में हुआ है।"
    },
    {
        question: "प्रश्न 43. निम्नलिखित में से कौन सा शब्द 'अ' उपसर्ग से नहीं बना है?",
        answers: shuffle([
            { text: "अथाह", correct: false },
            { text: "अभेद", correct: false },
            { text: "चूक", correct: true },
            { text: "अटल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चूक' एक मूल शब्द है, इसमें उपसर्ग नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्दों में 'अ' उपसर्ग लगा है।"
    },
    {
        question: "प्रश्न 44. 'दुस्साहस' में उपसर्ग है-",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दुस्", correct: true },
            { text: "दुस्सा", correct: false },
            { text: "स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुस्साहस' में 'दुस्' तत्सम उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> तद्भव में इसका रूप 'दु' हो जाता है, जैसे 'दुबला'।"
    },
    {
        question: "प्रश्न 45. 'परोपकार' में उपसर्ग है-",
        answers: shuffle([
            { text: "प", correct: false },
            { text: "पर", correct: true },
            { text: "परो", correct: false },
            { text: "उपकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परोपकार' ('पर' + उपकार) में 'पर' उपसर्ग है, जिसका अर्थ 'दूसरा' होता है।"
    },
    {
        question: "प्रश्न 46. 'निगोड़ा' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "नि", correct: true },
            { text: "निगो", correct: false },
            { text: "न", correct: false },
            { text: "ड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निगोड़ा' में 'नि' उपसर्ग है, जिसका अर्थ 'रहित' या 'हीन' होता है।"
    },
    {
        question: "प्रश्न 47. 'हमशक्ल' में 'हम' उपसर्ग किस भाषा का है?",
        answers: shuffle([
            { text: "हिंदी", correct: false },
            { text: "संस्कृत", correct: false },
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हमशक्ल' में 'हम' फारसी का उपसर्ग है, जिसका अर्थ 'समान' या 'साथ' होता है।"
    },
    {
        question: "प्रश्न 48. 'अवतंस' में उपसर्ग है-",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अव", correct: true },
            { text: "तंस", correct: false },
            { text: "अत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवतंस' में 'अव' संस्कृत का उपसर्ग है, जिसका अर्थ 'नीचे' या 'हीन' होता है।"
    },
    {
        question: "प्रश्न 49. 'कुपात्र' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "कु", correct: true },
            { text: "पात्र", correct: false },
            { text: "पा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुपात्र' में 'कु' उपसर्ग है, जिसका अर्थ 'बुरा' होता है।"
    },
    {
        question: "प्रश्न 50. 'भरमार' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "भ", correct: false },
            { text: "भर", correct: true },
            { text: "मार", correct: false },
            { text: "र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भरमार' में 'भर' उपसर्ग का प्रयोग हुआ है, जिसका अर्थ 'बहुत अधिक' होता है।"
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