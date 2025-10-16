const questions = [
    {
        topHeading: "तद्धित प्रत्यय पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'दिल्लीवाला' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ला", correct: false },
            { text: "आला", correct: false },
            { text: "वाला", correct: true },
            { text: "ल्लीवाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिल्ली' शब्द में 'वाला' प्रत्यय जुड़कर स्थान सूचक शब्द 'दिल्लीवाला' बना है।"
    },
    {
        question: "प्रश्न 2. 'तेली' शब्द में मूल शब्द और प्रत्यय क्या है?",
        answers: shuffle([
            { text: "ते + ली", correct: false },
            { text: "तेल + ई", correct: true },
            { text: "तेल् + इ", correct: false },
            { text: "तेलीय + ई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तेल' संज्ञा शब्द में 'ई' प्रत्यय लगने से 'तेली' शब्द बना है, जो कर्ता का सूचक है।"
    },
    {
        question: "प्रश्न 3. 'मुखिया' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "इया", correct: true },
            { text: "या", correct: false },
            { text: "आ", correct: false },
            { text: "मुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुख' शब्द में 'इया' प्रत्यय जोड़कर 'मुखिया' शब्द बनता है, जिसका अर्थ 'प्रमुख व्यक्ति' होता है।"
    },
    {
        question: "प्रश्न 4. 'चायवाला' शब्द किस प्रकार के प्रत्यय का उदाहरण है?",
        answers: shuffle([
            { text: "ऊनवाचक", correct: false },
            { text: "संबंधवाचक", correct: false },
            { text: "कर्तृवाचक", correct: true },
            { text: "भाववाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाय' में 'वाला' प्रत्यय लगने से 'चायवाला' बना है, जो किसी कार्य को करने वाले (कर्ता) का बोध कराता है।"
    },
    {
        question: "प्रश्न 5. 'गुजराती' शब्द का मूल शब्द क्या है?",
        answers: shuffle([
            { text: "गुजर", correct: false },
            { text: "गुजरात", correct: true },
            { text: "रात", correct: false },
            { text: "गुजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुजरात' स्थान में 'ई' प्रत्यय लगाकर 'गुजराती' शब्द बना है।"
    },
    {
        question: "प्रश्न 6. 'दार' प्रत्यय से बना शब्द निम्न में से कौन-सा है?",
        answers: shuffle([
            { text: "देनदार", correct: true },
            { text: "होनहार", correct: false },
            { text: "पालनहार", correct: false },
            { text: "खेवनहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देन' शब्द में 'दार' प्रत्यय लगाकर 'देनदार' शब्द बनाया गया है, जो कर्ता का बोध कराता है।"
    },
    {
        question: "प्रश्न 7. 'कलाकार' में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "कार", correct: true },
            { text: "आर", correct: false },
            { text: "कल", correct: false },
            { text: "आकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कला' शब्द के अंत में 'कार' प्रत्यय जुड़कर 'कलाकार' शब्द बनता है, जिसका अर्थ है कला का ज्ञाता।"
    },
    {
        question: "प्रश्न 8. 'लकड़हारा' शब्द में प्रत्यय है-",
        answers: shuffle([
            { text: "हारा", correct: true },
            { text: "आरा", correct: false },
            { text: "हार", correct: false },
            { text: "रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लकड़ी' शब्द में 'हारा' प्रत्यय लगाकर 'लकड़हारा' शब्द बना है, जो लकड़ी काटने वाले का बोध कराता है।"
    },
    {
        question: "प्रश्न 9. 'बुढ़ापा' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "पा", correct: false },
            { text: "आपा", correct: true },
            { text: "आप", correct: false },
            { text: "बूढ़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बूढ़ा' विशेषण शब्द में 'आपा' प्रत्यय जुड़ने से भाववाचक संज्ञा 'बुढ़ापा' बनती है।"
    },
    {
        question: "प्रश्न 10. 'मिठास' शब्द में किस प्रत्यय का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "आस", correct: true },
            { text: "ठास", correct: false },
            { text: "मीठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मीठा' विशेषण में 'आस' प्रत्यय लगाकर भाववाचक संज्ञा 'मिठास' बनाई गई है।"
    },
    {
        question: "प्रश्न 11. 'बचपन' शब्द का निर्माण किस प्रत्यय से हुआ है?",
        answers: shuffle([
            { text: "पन", correct: true },
            { text: "न", correct: false },
            { text: "चपन", correct: false },
            { text: "बच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बच्चा' शब्द में 'पन' प्रत्यय के योग से 'बचपन' भाववाचक संज्ञा बनी है।"
    },
    {
        question: "प्रश्न 12. 'गुरुत्व' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "व", correct: false },
            { text: "त्व", correct: true },
            { text: "गुरु", correct: false },
            { text: "तव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुरु' शब्द में 'त्व' प्रत्यय लगाकर 'गुरुत्व' भाववाचक संज्ञा बनाई जाती है।"
    },
    {
        question: "प्रश्न 13. 'आई' प्रत्यय से कौन-सा भाववाचक शब्द बना है?",
        answers: shuffle([
            { text: "मिठाई", correct: false },
            { text: "लिखाई", correct: false },
            { text: "भलाई", correct: true },
            { text: "सिलाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भला' विशेषण में 'आई' प्रत्यय जुड़ने से 'भलाई' भाववाचक संज्ञा बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'लिखाई' और 'सिलाई' कृदंत प्रत्यय हैं।"
    },
    {
        question: "प्रश्न 14. 'लालिमा' शब्द में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "मा", correct: false },
            { text: "इमा", correct: true },
            { text: "लाल", correct: false },
            { text: "लिमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लाल' शब्द में 'इमा' प्रत्यय जोड़कर भाववाचक संज्ञा 'लालिमा' का निर्माण हुआ है।"
    },
    {
        question: "प्रश्न 15. 'खटास' शब्द में प्रत्यय बताइए।",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "टास", correct: false },
            { text: "आस", correct: true },
            { text: "खट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खट्टा' शब्द में 'आस' प्रत्यय के योग से 'खटास' शब्द बना है, जो भाव को प्रकट करता है।"
    },
    {
        question: "प्रश्न 16. 'पांडित्य' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "य", correct: true },
            { text: "त्य", correct: false },
            { text: "डित्य", correct: false },
            { text: "इत्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंडित' शब्द में 'य' प्रत्यय लगने से भाववाचक संज्ञा 'पांडित्य' बनती है।"
    },
    {
        question: "प्रश्न 17. 'ता' प्रत्यय से बना भाववाचक शब्द है-",
        answers: shuffle([
            { text: "दाता", correct: false },
            { text: "सुंदरता", correct: true },
            { text: "खाता", correct: false },
            { text: "श्रोता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुंदर' विशेषण में 'ता' प्रत्यय लगाकर 'सुंदरता' भाववाचक संज्ञा बनाई गई है।"
    },
    {
        question: "प्रश्न 18. 'गरिमा' शब्द में कौन-सा प्रत्यय लगा है?",
        answers: shuffle([
            { text: "मा", correct: false },
            { text: "रिमा", correct: false },
            { text: "इमा", correct: true },
            { text: "गरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुरु' शब्द में 'इमा' प्रत्यय के योग से 'गरिमा' शब्द बनता है।"
    },
    {
        question: "प्रश्न 19. 'भारतीय' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "य", correct: false },
            { text: "इय", correct: false },
            { text: "तीय", correct: false },
            { text: "ईय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भारत' संज्ञा में 'ईय' प्रत्यय जुड़कर संबंधवाचक शब्द 'भारतीय' बना है, जिसका अर्थ है 'भारत से संबंधित'।"
    },
    {
        question: "प्रश्न 20. 'ससुराल' शब्द में मूल शब्द और प्रत्यय है-",
        answers: shuffle([
            { text: "ससुरा + ल", correct: false },
            { text: "ससुर + आल", correct: true },
            { text: "ससु + राल", correct: false },
            { text: "स + सुराल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ससुर' शब्द में 'आल' प्रत्यय लगने से संबंध सूचक शब्द 'ससुराल' बना है।"
    },
    {
        question: "प्रश्न 21. 'एरा' प्रत्यय से बना शब्द है-",
        answers: shuffle([
            { text: "सवेरा", correct: false },
            { text: "बसेरा", correct: false },
            { text: "ममेरा", correct: true },
            { text: "लुटेरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मामा' शब्द में 'एरा' प्रत्यय जुड़कर संबंधवाचक शब्द 'ममेरा' बनता है।"
    },
    {
        question: "प्रश्न 22. 'जा' प्रत्यय से बना संबंधवाचक शब्द कौन-सा है?",
        answers: shuffle([
            { text: "पूजा", correct: false },
            { text: "भतीजा", correct: true },
            { text: "खाजा", correct: false },
            { text: "राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भ्राता' (भाई) से 'भतीजा' शब्द 'जा' प्रत्यय लगाकर बना है जो संबंध का बोध कराता है।"
    },
    {
        question: "प्रश्न 23. 'इक' प्रत्यय के योग से बना शब्द है-",
        answers: shuffle([
            { text: "दैनिक", correct: true },
            { text: "बिक", correct: false },
            { text: "अधिक", correct: false },
            { text: "टिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिन' शब्द में 'इक' प्रत्यय लगने से 'दैनिक' शब्द बनता है, जो दिन से संबंध रखता है।"
    },
    {
        question: "प्रश्न 24. 'ननिहाल' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "हाल", correct: false },
            { text: "आल", correct: true },
            { text: "ल", correct: false },
            { text: "निहाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नाना' शब्द में 'आल' प्रत्यय जुड़कर 'ननिहाल' शब्द बना है।"
    },
    {
        question: "प्रश्न 25. 'जैपुरिया' शब्द में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "या", correct: false },
            { text: "इया", correct: true },
            { text: "रिया", correct: false },
            { text: "पुरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जयपुर' स्थानवाचक संज्ञा में 'इया' प्रत्यय जुड़कर 'जैपुरिया' शब्द बना है, जो जयपुर से संबंध रखने वाले का बोध कराता है।"
    },
    {
        question: "प्रश्न 26. 'पारिवारिक' शब्द किस प्रत्यय से बना है?",
        answers: shuffle([
            { text: "रिक", correct: false },
            { text: "इक", correct: true },
            { text: "क", correct: false },
            { text: "वारिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिवार' शब्द में 'इक' प्रत्यय लगने से 'पारिवारिक' शब्द बनता है, जो संबंध को दर्शाता है।"
    },
    {
        question: "प्रश्न 27. 'पहाड़ी' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ई", correct: true },
            { text: "ड़ी", correct: false },
            { text: "अड़ी", correct: false },
            { text: "इ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पहाड़' शब्द में 'ई' प्रत्यय लगाकर उसका छोटा रूप 'पहाड़ी' बनाया गया है, यह ऊनवाचक प्रत्यय है।"
    },
    {
        question: "प्रश्न 28. 'डिबिया' शब्द का मूल शब्द और प्रत्यय है-",
        answers: shuffle([
            { text: "डिब्बा + इया", correct: true },
            { text: "डिब + इया", correct: false },
            { text: "डिबी + या", correct: false },
            { text: "डी + बिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डिब्बा' के छोटे रूप को दर्शाने के लिए 'इया' प्रत्यय लगाकर 'डिबिया' शब्द बनाया गया है।"
    },
    {
        question: "प्रश्न 29. 'लुटिया' शब्द में कौन-सा प्रत्यय प्रयुक्त हुआ है?",
        answers: shuffle([
            { text: "या", correct: false },
            { text: "इया", correct: true },
            { text: "टिया", correct: false },
            { text: "आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोटा' शब्द में 'इया' प्रत्यय जोड़कर उसका लघु रूप 'लुटिया' बनाया गया है।"
    },
    {
        question: "प्रश्न 30. 'कोठरी' शब्द में कौन-सा ऊनवाचक प्रत्यय है?",
        answers: shuffle([
            { text: "री", correct: false },
            { text: "ई", correct: true },
            { text: "अरी", correct: false },
            { text: "ठरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोठा' शब्द में 'ई' प्रत्यय लगाकर उसके छोटे रूप 'कोठरी' को दर्शाया गया है।"
    },
    {
        question: "प्रश्न 31. 'रस्सी' शब्द किस मूल शब्द में 'ई' प्रत्यय लगने से बना है?",
        answers: shuffle([
            { text: "रस", correct: false },
            { text: "रस्सा", correct: true },
            { text: "रसन", correct: false },
            { text: "रास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रस्सा' के लघु रूप को 'रस्सी' कहते हैं, जिसमें 'ई' प्रत्यय का प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 32. 'ढोलक' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "क", correct: true },
            { text: "अक", correct: false },
            { text: "लक", correct: false },
            { text: "ढोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढोल' के छोटे रूप को 'ढोलक' कहते हैं, यहाँ 'क' ऊनवाचक प्रत्यय है।"
    },
    {
        question: "प्रश्न 33. 'चचेरा' शब्द में मूल शब्द और प्रत्यय है-",
        answers: shuffle([
            { text: "चचे + रा", correct: false },
            { text: "च + चेरा", correct: false },
            { text: "चाचा + एरा", correct: true },
            { text: "चच + ऐरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाचा' शब्द में 'एरा' प्रत्यय लगाकर संबंधवाचक शब्द 'चचेरा' बनाया गया है।"
    },
    {
        question: "प्रश्न 34. 'सुनहरा' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "रा", correct: false },
            { text: "हरा", correct: true },
            { text: "सुनहरा", correct: false },
            { text: "अहारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोना' शब्द में 'हरा' प्रत्यय लगने से गुणवाचक शब्द 'सुनहरा' बनता है।"
    },
    {
        question: "प्रश्न 35. 'कौरव' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "अव", correct: false },
            { text: "रव", correct: false },
            { text: "अ", correct: true },
            { text: "व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुरु' शब्द में 'अ' प्रत्यय जुड़ने से 'कौरव' शब्द बना है, जिसका अर्थ है 'कुरु के वंशज'।"
    },
    {
        question: "प्रश्न 36. 'बुद्धिमानी' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "नी", correct: false },
            { text: "आनी", correct: false },
            { text: "मानी", correct: false },
            { text: "ई", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुद्धिमान' विशेषण में 'ई' प्रत्यय जुड़कर भाववाचक संज्ञा 'बुद्धिमानी' बनती है।"
    },
    {
        question: "प्रश्न 37. 'पांडव' शब्द में प्रत्यय है-",
        answers: shuffle([
            { text: "व", correct: false },
            { text: "अव", correct: false },
            { text: "अ", correct: true },
            { text: "डव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पांडु' शब्द में 'अ' प्रत्यय लगाकर 'पांडव' शब्द बनाया गया है, जिसका अर्थ है 'पांडु के पुत्र'।"
    },
    {
        question: "प्रश्न 38. 'सौमित्र' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "र", correct: false },
            { text: "इत्र", correct: false },
            { text: "मित्र", correct: false },
            { text: "अ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुमित्रा' शब्द में 'अ' प्रत्यय जुड़कर 'सौमित्र' (लक्ष्मण) शब्द बना है, अर्थात 'सुमित्रा का पुत्र'।"
    },
    {
        question: "प्रश्न 39. 'गांगेय' शब्द में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "य", correct: false },
            { text: "एय", correct: true },
            { text: "गेय", correct: false },
            { text: "इय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गंगा' शब्द में 'एय' प्रत्यय लगाकर 'गांगेय' (भीष्म) शब्द बना है, जिसका अर्थ है 'गंगा का पुत्र'।"
    },
    {
        question: "प्रश्न 40. 'वैष्णव' शब्द में मूल शब्द क्या है?",
        answers: shuffle([
            { text: "विष्णु", correct: true },
            { text: "वैष्ण", correct: false },
            { text: "विष", correct: false },
            { text: "वव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विष्णु' शब्द में 'अ' प्रत्यय के योग से 'वैष्णव' शब्द बना है, जो विष्णु के उपासक का बोध कराता है।"
    },
    {
        question: "प्रश्न 41. 'धनी' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "नी", correct: false },
            { text: "ई", correct: true },
            { text: "इ", correct: false },
            { text: "धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धन' शब्द में 'ई' प्रत्यय जुड़कर गुणवाचक शब्द 'धनी' बना है।"
    },
    {
        question: "प्रश्न 42. 'रंगीन' शब्द में मूल शब्द और प्रत्यय अलग कीजिए।",
        answers: shuffle([
            { text: "रंग + ईन", correct: true },
            { text: "रंगी + न", correct: false },
            { text: "रं + गीन", correct: false },
            { text: "रंग + इन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रंग' शब्द में 'ईन' प्रत्यय लगने से गुणवाचक विशेषण 'रंगीन' बनता है।"
    },
    {
        question: "प्रश्न 43. 'भूखा' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "आ", correct: true },
            { text: "खा", correct: false },
            { text: "ऊखा", correct: false },
            { text: "भूख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भूख' संज्ञा में 'आ' प्रत्यय लगाकर गुणवाचक विशेषण 'भूखा' बनाया गया है।"
    },
    {
        question: "प्रश्न 44. 'विषैला' शब्द में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "ला", correct: false },
            { text: "ऐला", correct: true },
            { text: "शैला", correct: false },
            { text: "इला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विष' शब्द में 'ऐला' प्रत्यय के योग से 'विषैला' शब्द बना है, जो गुण को दर्शाता है।"
    },
    {
        question: "प्रश्न 45. 'वान' प्रत्यय से बना गुणवाचक शब्द है-",
        answers: shuffle([
            { text: "पहलवान", correct: false },
            { text: "बलवान", correct: true },
            { text: "गाड़ीवान", correct: false },
            { text: "दरबान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बल' शब्द में 'वान' प्रत्यय जुड़कर गुणवाचक शब्द 'बलवान' बना है।"
    },
    {
        question: "प्रश्न 46. 'दयालु' शब्द का प्रत्यय क्या है?",
        answers: shuffle([
            { text: "लु", correct: false },
            { text: "आलु", correct: true },
            { text: "दया", correct: false },
            { text: "लू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दया' शब्द में 'आलु' प्रत्यय के योग से 'दयालु' गुणवाचक शब्द बनता है।"
    },
    {
        question: "प्रश्न 47. 'क्रोधी' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ई", correct: true },
            { text: "धी", correct: false },
            { text: "इ", correct: false },
            { text: "क्रो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्रोध' भाववाचक संज्ञा में 'ई' प्रत्यय लगाकर 'क्रोधी' विशेषण शब्द बनाया गया है।"
    },
    {
        question: "प्रश्न 48. 'चमकीला' शब्द में प्रत्यय बताइए।",
        answers: shuffle([
            { text: "ला", correct: false },
            { text: "कीला", correct: false },
            { text: "ईला", correct: true },
            { text: "चमक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चमक' शब्द में 'ईला' प्रत्यय के योग से 'चमकीला' शब्द बनता है।"
    },
    {
        question: "प्रश्न 49. 'देवरानी' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "नी", correct: false },
            { text: "आनी", correct: true },
            { text: "रानी", correct: false },
            { text: "इनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देवर' पुल्लिंग शब्द में 'आनी' प्रत्यय लगाकर स्त्रीलिंग 'देवरानी' बनाया गया है।"
    },
    {
        question: "प्रश्न 50. 'नागिन' शब्द का मूल शब्द और प्रत्यय क्या है?",
        answers: shuffle([
            { text: "नाग + इन", correct: true },
            { text: "ना + गिन", correct: false },
            { text: "नागि + न", correct: false },
            { text: "नागी + न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नाग' शब्द में 'इन' प्रत्यय लगाकर उसका स्त्रीलिंग 'नागिन' बनाया जाता है।"
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