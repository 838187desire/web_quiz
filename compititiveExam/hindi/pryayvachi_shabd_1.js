const questions = [
    {
        topHeading: "पर्यायवाची शब्दों पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'हवा' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "अनल", correct: false },
            { text: "अनिल", correct: true },
            { text: "अंबु", correct: false },
            { text: "अचल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनिल' का अर्थ हवा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'अनल' का अर्थ आग,<br><br><i class='fa-solid fa-angles-right icon'></i> 'अंबु' का जल और<br><br><i class='fa-solid fa-angles-right icon'></i> 'अचल' का पर्वत होता है।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से कौन सा शब्द 'पवन' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "वायु", correct: false },
            { text: "समीर", correct: false },
            { text: "बयार", correct: false },
            { text: "वारि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वारि' जल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> वायु, समीर, और बयार 'पवन' के पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 3. 'समीर' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "आग", correct: false },
            { text: "बादल", correct: false },
            { text: "हवा", correct: true },
            { text: "जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समीर' शब्द का अर्थ 'हवा' या 'पवन' होता है।"
    },
    {
        question: "प्रश्न 4. 'आकाश' का पर्यायवाची शब्द चुनें।",
        answers: shuffle([
            { text: "व्योम", correct: true },
            { text: "पावक", correct: false },
            { text: "सरिता", correct: false },
            { text: "कानन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्योम' आकाश का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'पावक' आग का, 'सरिता' नदी का और 'कानन' जंगल का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 5. इनमें से कौन सा 'गगन' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "नभ", correct: false },
            { text: "अंबर", correct: false },
            { text: "आसमान", correct: false },
            { text: "महीप", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महीप' राजा का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि नभ, अंबर और आसमान 'गगन' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 6. 'नभ' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "धरती", correct: false },
            { text: "गगन", correct: true },
            { text: "जलधर", correct: false },
            { text: "दिनकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नभ' और 'गगन' दोनों ही आकाश के पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 7. 'फूल' का पर्यायवाची शब्द कौन सा है?",
        answers: shuffle([
            { text: "प्रसून", correct: true },
            { text: "नग", correct: false },
            { text: "पयोद", correct: false },
            { text: "तुरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रसून' का अर्थ फूल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'नग' पर्वत का, 'पयोद' बादल का और 'तुरंग' घोड़े का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 8. निम्नलिखित में से कौन सा शब्द 'कुसुम' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "पुष्प", correct: false },
            { text: "सुमन", correct: false },
            { text: "पुहुप", correct: false },
            { text: "पंकज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंकज' कमल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पुष्प, सुमन और पुहुप 'कुसुम' (फूल) के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 9. 'सुमन' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पुष्प", correct: true },
            { text: "जंगल", correct: false },
            { text: "पर्वत", correct: false },
            { text: "बादल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुमन' और 'पुष्प' दोनों ही फूल के पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 10. 'जल' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "नीर", correct: true },
            { text: "नभ", correct: false },
            { text: "अनल", correct: false },
            { text: "पवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीर' जल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'नभ' आकाश का, 'अनल' आग का और 'पवन' हवा का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 11. इनमें से कौन सा शब्द 'पानी' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "वारि", correct: false },
            { text: "सलिल", correct: false },
            { text: "अंबु", correct: false },
            { text: "अनिल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनिल' हवा का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि वारि, सलिल और अंबु 'पानी' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 12. 'सलिल' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "जल", correct: true },
            { text: "कमल", correct: false },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सलिल' शब्द का प्रयोग जल या पानी के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 13. 'पृथ्वी' का पर्यायवाची शब्द चुनें।",
        answers: shuffle([
            { text: "वसुधा", correct: true },
            { text: "वारिद", correct: false },
            { text: "मयंक", correct: false },
            { text: "गिरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वसुधा' पृथ्वी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'वारिद' बादल का, 'मयंक' चंद्रमा का और 'गिरि' पर्वत का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 14. निम्नलिखित में से कौन सा 'भूमि' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "धरती", correct: false },
            { text: "धरा", correct: false },
            { text: "अचला", correct: false },
            { text: "अचल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अचल' पर्वत का पर्यायवाची है, जिसका अर्थ है जो चल न सके।<br><br><i class='fa-solid fa-angles-right icon'></i> धरती, धरा और अचला 'भूमि' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 15. 'धरा' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "नदी", correct: false },
            { text: "आकाश", correct: false },
            { text: "पृथ्वी", correct: true },
            { text: "सूर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धरा' का अर्थ धारण करने वाली, अर्थात् 'पृथ्वी' होता है।"
    },
    {
        question: "प्रश्न 16. 'भुजंग' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "मेंढक", correct: false },
            { text: "मछली", correct: false },
            { text: "साँप", correct: true },
            { text: "कछुआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भुजंग' का अर्थ 'साँप' होता है।"
    },
    {
        question: "प्रश्न 17. इनमें से कौन सा 'भास्कर' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "रवि", correct: false },
            { text: "दिवाकर", correct: false },
            { text: "आदित्य", correct: false },
            { text: "राकेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राकेश' (रात्रि का ईश) चंद्रमा का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> रवि, दिवाकर और आदित्य 'भास्कर' (सूर्य) के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 18. 'आदित्य' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "चंद्रमा", correct: false },
            { text: "तारा", correct: false },
            { text: "सूर्य", correct: true },
            { text: "ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आदित्य' अदिति के पुत्र, अर्थात् 'सूर्य' का एक नाम है।"
    },
    {
        question: "प्रश्न 19. 'चंद्रमा' का पर्यायवाची शब्द चुनें।",
        answers: shuffle([
            { text: "शशि", correct: true },
            { text: "भास्कर", correct: false },
            { text: "मार्तंड", correct: false },
            { text: "अनल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शशि' चंद्रमा का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'भास्कर' और 'मार्तंड' सूर्य के तथा 'अनल' आग का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 20. निम्नलिखित में से कौन सा 'इंदु' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "राकेश", correct: false },
            { text: "मयंक", correct: false },
            { text: "सुधाकर", correct: false },
            { text: "दिनकर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिनकर' सूर्य का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि राकेश, मयंक और सुधाकर 'इंदु' (चंद्रमा) के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 21. 'मयंक' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "सूर्य", correct: false },
            { text: "चंद्रमा", correct: true },
            { text: "आकाश", correct: false },
            { text: "कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मयंक' चंद्रमा का एक प्रसिद्ध पर्यायवाची शब्द है।"
    },
    {
        question: "प्रश्न 22. 'बादल' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "जलज", correct: false },
            { text: "जलद", correct: true },
            { text: "गिरि", correct: false },
            { text: "तुरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलद' (जल देने वाला) बादल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'जलज' (जल में जन्मा) कमल का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 23. इनमें से कौन सा 'मेघ' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "घन", correct: false },
            { text: "वारिद", correct: false },
            { text: "नीरद", correct: false },
            { text: "नीरधि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीरधि' (नीर को धारण करने वाला) समुद्र का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> घन, वारिद और नीरद 'मेघ' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 24. 'जलधर' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "समुद्र", correct: false },
            { text: "कमल", correct: false },
            { text: "बादल", correct: true },
            { text: "चंद्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलधर' (जल को धारण करने वाला) का अर्थ 'बादल' होता है।"
    },
    {
        question: "प्रश्न 25. 'आग' का पर्यायवाची शब्द चुनें।",
        answers: shuffle([
            { text: "पावक", correct: true },
            { text: "पवन", correct: false },
            { text: "पंकज", correct: false },
            { text: "प्रमोद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पावक' अग्नि का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'पवन' हवा का और 'पंकज' कमल का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 26. निम्नलिखित में से कौन सा 'अग्नि' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "अनल", correct: false },
            { text: "दहन", correct: false },
            { text: "ज्वाला", correct: false },
            { text: "अनिल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनिल' हवा का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'अनल' का अर्थ आग होता है।"
    },
    {
        question: "प्रश्न 27. 'दहन' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "जलना", correct: true },
            { text: "बुझना", correct: false },
            { text: "बहना", correct: false },
            { text: "गिरना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दहन' का शाब्दिक अर्थ 'जलाने की क्रिया' है।<br><br><i class='fa-solid fa-angles-right icon'></i> और यह आग का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 28. 'जंगल' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "कानन", correct: true },
            { text: "सदन", correct: false },
            { text: "अंबर", correct: false },
            { text: "सरोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कानन' जंगल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सदन' घर का, 'अंबर' आकाश का और 'सरोज' कमल का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 29. इनमें से कौन सा 'वन' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "विपिन", correct: false },
            { text: "अरण्य", correct: false },
            { text: "कांतार", correct: false },
            { text: "वारण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वारण' हाथी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> विपिन, अरण्य और कांतार 'वन' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 30. 'विपिन' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "वृक्ष", correct: false },
            { text: "जंगल", correct: true },
            { text: "पुष्प", correct: false },
            { text: "राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विपिन' शब्द का प्रयोग 'जंगल' या 'वन' के लिए होता है।"
    },
    {
        question: "प्रश्न 31. 'पर्वत' का पर्यायवाची शब्द चुनें।",
        answers: shuffle([
            { text: "गिरि", correct: true },
            { text: "गृह", correct: false },
            { text: "गज", correct: false },
            { text: "घन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गिरि' पर्वत का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'गृह' घर का, 'गज' हाथी का और 'घन' बादल का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 32. निम्नलिखित में से कौन सा 'पहाड़' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "शैल", correct: false },
            { text: "अचल", correct: false },
            { text: "नग", correct: false },
            { text: "नभ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नभ' आकाश का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> शैल, अचल और नग 'पहाड़' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 33. 'अचल' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "जो चल न सके", correct: true },
            { text: "जो देख न सके", correct: false },
            { text: "जो सुन न सके", correct: false },
            { text: "जो कह न सके", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अचल' का अर्थ स्थिर या जो चल न सके होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह पर्वत का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 34. 'नदी' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "सरिता", correct: true },
            { text: "सुधा", correct: false },
            { text: "सुमन", correct: false },
            { text: "समीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सरिता' नदी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सुधा' अमृत का, 'सुमन' फूल का और 'समीर' हवा का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 35. इनमें से कौन सा 'तटिनी' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "तरंगिणी", correct: false },
            { text: "सलिला", correct: false },
            { text: "आपगा", correct: false },
            { text: "अंबुद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंबुद' (अंबु देने वाला) बादल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> तरंगिणी, सलिला और आपगा 'तटिनी' (नदी) के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 36. 'तरंगिणी' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "नाव", correct: false },
            { text: "लहर", correct: false },
            { text: "नदी", correct: true },
            { text: "समुद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तरंगिणी' (तरंगों वाली) का अर्थ 'नदी' होता है।"
    },
    {
        question: "प्रश्न 37. 'कमल' का पर्यायवाची शब्द चुनें।",
        answers: shuffle([
            { text: "नीरज", correct: true },
            { text: "नीरद", correct: false },
            { text: "नग", correct: false },
            { text: "नृप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीरज' (नीर में जन्मा) कमल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'नीरद' (नीर देने वाला) बादल का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 38. निम्नलिखित में से कौन सा 'पंकज' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "सरोज", correct: false },
            { text: "जलज", correct: false },
            { text: "अरविंद", correct: false },
            { text: "जलधर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलधर' बादल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> सरोज, जलज और अरविंद 'पंकज' (कमल) के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 39. 'अरविंद' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "गुलाब", correct: false },
            { text: "कमल", correct: true },
            { text: "सूर्य", correct: false },
            { text: "चंद्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अरविंद' का अर्थ 'कमल' होता है।"
    },
    {
        question: "प्रश्न 40. 'घर' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "गृह", correct: true },
            { text: "गिरि", correct: false },
            { text: "घन", correct: false },
            { text: "गज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गृह' घर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'गिरि' पर्वत का, 'घन' बादल का और 'गज' हाथी का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 41. इनमें से कौन सा 'सदन' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "आवास", correct: false },
            { text: "निलय", correct: false },
            { text: "गेह", correct: false },
            { text: "कानन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कानन' जंगल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> आवास, निलय और गेह 'सदन' (घर) के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 42. 'निलय' का क्या अर्थ है?",
        answers: shuffle([
            { text: "निवास स्थान", correct: true },
            { text: "आकाश", correct: false },
            { text: "जल", correct: false },
            { text: "जंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निलय' का अर्थ 'निवास स्थान' या 'घर' होता है।"
    },
    {
        question: "प्रश्न 43. 'राजा' का पर्यायवाची शब्द चुनें।",
        answers: shuffle([
            { text: "नृप", correct: true },
            { text: "खग", correct: false },
            { text: "नग", correct: false },
            { text: "मृग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नृप' राजा का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'खग' पक्षी का, 'नग' पर्वत का और 'मृग' हिरण का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 44. निम्नलिखित में से कौन सा 'भूप' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "नरेश", correct: false },
            { text: "महीप", correct: false },
            { text: "अवनीश", correct: false },
            { text: "दिनेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिनेश' (दिन का ईश) सूर्य का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> नरेश, महीप और अवनीश 'भूप' (राजा) के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 45. 'महीप' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "राजा", correct: true },
            { text: "देवता", correct: false },
            { text: "मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महीप' (मही का पति) का अर्थ 'राजा' होता है।"
    },
    {
        question: "प्रश्न 46. 'घोड़ा' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "अश्व", correct: true },
            { text: "गज", correct: false },
            { text: "केशरी", correct: false },
            { text: "भुजंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अश्व' घोड़े का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'गज' हाथी का, 'केशरी' सिंह का और 'भुजंग' साँप का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 47. इनमें से कौन सा 'हय' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "तुरंग", correct: false },
            { text: "वाजि", correct: false },
            { text: "घोटक", correct: false },
            { text: "कुंजर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुंजर' हाथी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> तुरंग, वाजि और घोटक 'हय' (घोड़ा) के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 48. 'तुरंग' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "घोड़ा", correct: true },
            { text: "हिरण", correct: false },
            { text: "सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तुरंग' का अर्थ 'घोड़ा' होता है।"
    },
    {
        question: "प्रश्न 49. 'हाथी' का पर्यायवाची शब्द चुनें।",
        answers: shuffle([
            { text: "गज", correct: true },
            { text: "हय", correct: false },
            { text: "मृगराज", correct: false },
            { text: "विहग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गज' हाथी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'हय' घोड़े का, 'मृगराज' सिंह का और 'विहग' पक्षी का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 50. निम्नलिखित में से कौन सा 'हस्ती' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "कुंजर", correct: false },
            { text: "द्विप", correct: false },
            { text: "वारण", correct: false },
            { text: "केसरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'केसरी' सिंह का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुंजर, द्विप और वारण 'हस्ती' (हाथी) के पर्यायवाची हैं।"
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