const questions = [
    {
        topHeading: "प्रकृत विलोम पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'अवनि' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अम्बर", correct: true },
            { text: "सितारा", correct: false },
            { text: "धरा", correct: false },
            { text: "शशांक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवनि' का अर्थ 'पृथ्वी' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और इसका विपरीतार्थक शब्द 'अम्बर' है, जिसका अर्थ 'आकाश' होता है।"
    },
    {
        question: "प्रश्न 2. 'हर्ष' का विलोम शब्द है:",
        answers: shuffle([
            { text: "उल्लास", correct: false },
            { text: "आनंद", correct: false },
            { text: "विषाद", correct: true },
            { text: "खुशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर्ष' का अर्थ 'खुशी' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'विषाद' का अर्थ 'दुख' होता है, जो इसका सटीक विलोम है।"
    },
    {
        question: "प्रश्न 3. 'अपव्यय' का विलोम शब्द है:",
        answers: shuffle([
            { text: "मितव्यय", correct: true },
            { text: "अल्पव्यय", correct: false },
            { text: "व्यय", correct: false },
            { text: "अव्यय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपव्यय' का अर्थ 'फिजूलखर्ची' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'मितव्यय' है, जिसका अर्थ 'कम खर्च करना' है।"
    },
    {
        question: "प्रश्न 4. 'उत्थान' का विलोम शब्द है:",
        answers: shuffle([
            { text: "पतन", correct: true },
            { text: "उड़ान", correct: false },
            { text: "अर्ध", correct: false },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उत्थान' का अर्थ 'उन्नति' या 'उठना' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'पतन' होता है, जिसका अर्थ 'गिरावट' है।"
    },
    {
        question: "प्रश्न 5. 'संन्यासी' का विलोम शब्द है:",
        answers: shuffle([
            { text: "गृहस्थ", correct: true },
            { text: "भोगी", correct: false },
            { text: "राजा", correct: false },
            { text: "ब्रह्मचर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संन्यासी' वह होता है जो सांसारिक जीवन त्याग देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'गृहस्थ' पारिवारिक जीवन जीता है।"
    },
    {
        question: "प्रश्न 6. 'आलोक' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अद्भुत", correct: false },
            { text: "अज्ञात", correct: false },
            { text: "अंधकार", correct: true },
            { text: "रात्रि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आलोक' का अर्थ 'प्रकाश' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका सही विलोम 'अंधकार' है।"
    },
    {
        question: "प्रश्न 7. 'जेष्ठ' का विलोम शब्द है:",
        answers: shuffle([
            { text: "कनिष्ठ", correct: true },
            { text: "पूर्व", correct: false },
            { text: "भूत", correct: false },
            { text: "अग्रज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जेष्ठ' का अर्थ 'सबसे बड़ा' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'कनिष्ठ' का अर्थ 'सबसे छोटा' होता है।"
    },
    {
        question: "प्रश्न 8. 'गमन' का विलोम शब्द है:",
        answers: shuffle([
            { text: "जाना", correct: false },
            { text: "उतरना", correct: false },
            { text: "आगमन", correct: true },
            { text: "चढ़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गमन' का अर्थ 'जाना' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विपरीत 'आगमन' होता है, जिसका अर्थ 'आना' है।"
    },
    {
        question: "प्रश्न 9. 'मौन' का विलोम शब्द है:",
        answers: shuffle([
            { text: "मुखर", correct: true },
            { text: "मौखिक", correct: false },
            { text: "मयंक", correct: false },
            { text: "विकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मौन' का अर्थ 'चुप रहना' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'मुखर' है, जिसका अर्थ 'बोलने वाला' होता है।"
    },
    {
        question: "प्रश्न 10. 'विस्तार' का विलोम शब्द है:",
        answers: shuffle([
            { text: "लघु", correct: false },
            { text: "छोटा", correct: false },
            { text: "सूक्ष्म", correct: false },
            { text: "संक्षेप", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विस्तार' का अर्थ 'फैलाव' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'संक्षेप' है, जिसका अर्थ 'संक्षिप्त करना' है।"
    },
    {
        question: "प्रश्न 11. 'गरिमा' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अंधकार", correct: false },
            { text: "लघिमा", correct: true },
            { text: "घृणा", correct: false },
            { text: "नीचता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरिमा' का अर्थ 'महिमा' या 'बड़प्पन' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'लघिमा' है, जिसका अर्थ 'छोटापन' है।"
    },
    {
        question: "प्रश्न 12. 'अनाथ' का विलोम शब्द है:",
        answers: shuffle([
            { text: "धनी", correct: false },
            { text: "सनाथ", correct: true },
            { text: "निर्धन", correct: false },
            { text: "बेकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनाथ' वह होता है जिसका कोई स्वामी या पालक न हो।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'सनाथ' है, जिसका कोई स्वामी हो।"
    },
    {
        question: "प्रश्न 13. 'अल्पज्ञ' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अवज्ञ", correct: false },
            { text: "सर्वज्ञ", correct: true },
            { text: "अभिज्ञ", correct: false },
            { text: "कृतज्ञ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अल्पज्ञ' का अर्थ 'कम जानने वाला' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'सर्वज्ञ' है, जिसका अर्थ 'सब कुछ जानने वाला' है।"
    },
    {
        question: "प्रश्न 14. 'सकारात्मक' का विलोम शब्द है:",
        answers: shuffle([
            { text: "नकारात्मक", correct: true },
            { text: "आशात्मक", correct: false },
            { text: "निराशात्मक", correct: false },
            { text: "संभावात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सकारात्मक' का विलोम 'नकारात्मक' होता है।"
    },
    {
        question: "प्रश्न 15. 'सम्मुख' का विलोम शब्द है:",
        answers: shuffle([
            { text: "उन्मुख", correct: false },
            { text: "विमुख", correct: true },
            { text: "प्रमुख", correct: false },
            { text: "अधिमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सम्मुख' का अर्थ 'सामने' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'विमुख' है, जिसका अर्थ 'दूसरी ओर मुँह किये हुए' है।"
    },
    {
        question: "प्रश्न 16. 'अथ' का विलोम शब्द है:",
        answers: shuffle([
            { text: "इति", correct: true },
            { text: "अंत", correct: false },
            { text: "अर्थ", correct: false },
            { text: "अध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अथ' का अर्थ 'आरंभ' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'इति' है, जिसका अर्थ 'समाप्ति' होता है।"
    },
    {
        question: "प्रश्न 17. 'उर्वर' का विलोम शब्द है:",
        answers: shuffle([
            { text: "उत्कृष्ट", correct: false },
            { text: "ऊसर", correct: true },
            { text: "अतिवृष्टि", correct: false },
            { text: "उत्मर्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उर्वर' भूमि वह होती है जो उपजाऊ हो।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'ऊसर' है, जिसका अर्थ 'बंजर भूमि' है।"
    },
    {
        question: "प्रश्न 18. 'थोक' का विलोम शब्द है:",
        answers: shuffle([
            { text: "परचून", correct: true },
            { text: "थाक", correct: false },
            { text: "थोया", correct: false },
            { text: "प्रायिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थोक' का अर्थ 'बड़ी मात्रा में' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'परचून' या 'फुटकर' होता है।"
    },
    {
        question: "प्रश्न 19. 'भूषण' का विलोम शब्द है:",
        answers: shuffle([
            { text: "विष्णु", correct: false },
            { text: "भूषक", correct: false },
            { text: "दूषण", correct: true },
            { text: "भूषा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भूषण' का अर्थ 'अलंकार' या 'गहना' है, जो शोभा बढ़ाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'दूषण' है, जो दोषपूर्ण हो।"
    },
    {
        question: "प्रश्न 20. 'ऋणात्मक' का विलोम शब्द है:",
        answers: shuffle([
            { text: "धनात्मक", correct: true },
            { text: "मानात्मक", correct: false },
            { text: "अनात्मक", correct: false },
            { text: "गुणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऋणात्मक' का विपरीत 'धनात्मक' होता है।"
    },
    {
        question: "प्रश्न 21. 'धर्म' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अधर्म", correct: true },
            { text: "पापी", correct: false },
            { text: "कर्म", correct: false },
            { text: "सुधर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धर्म' का सटीक विलोम 'अधर्म' होता है।"
    },
    {
        question: "प्रश्न 22. 'मूक' का विलोम शब्द है:",
        answers: shuffle([
            { text: "हास", correct: false },
            { text: "वाचाल", correct: true },
            { text: "शाप", correct: false },
            { text: "अल्पभाषी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मूक' का अर्थ 'गूंगा' या 'चुप रहने वाला' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'वाचाल' है, जिसका अर्थ 'बहुत बोलने वाला' है।"
    },
    {
        question: "प्रश्न 23. 'आकर्षण' का विलोम शब्द है:",
        answers: shuffle([
            { text: "आकृष्ट", correct: false },
            { text: "विकर्षण", correct: true },
            { text: "अनाकर्षण", correct: false },
            { text: "पराकर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आकर्षण' का अर्थ 'खिंचाव' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'विकर्षण' है, जिसका अर्थ 'दूर हटना' है।"
    },
    {
        question: "प्रश्न 24. 'अभिज्ञ' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अनभिज्ञ", correct: true },
            { text: "जानकार", correct: false },
            { text: "विज्ञ", correct: false },
            { text: "चतुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिज्ञ' का अर्थ 'जानने वाला' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'अनभिज्ञ' है, जिसका अर्थ 'न जानने वाला' है।"
    },
    {
        question: "प्रश्न 25. 'कृतज्ञ' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अकृतज्ञ", correct: false },
            { text: "कृतघ्न", correct: true },
            { text: "संवेदनशील", correct: false },
            { text: "जड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कृतज्ञ' वह होता है जो किए हुए उपकार को मानता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'कृतघ्न' है, जो उपकार को नहीं मानता।"
    },
    {
        question: "प्रश्न 26. 'संकीर्ण' का विलोम शब्द है:",
        answers: shuffle([
            { text: "उत्कीर्ण", correct: false },
            { text: "उदार", correct: false },
            { text: "विस्तीर्ण", correct: true },
            { text: "अनुदार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संकीर्ण' का अर्थ 'संकरा' या 'तंग' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'विस्तीर्ण' है, जिसका अर्थ 'फैला हुआ' है।"
    },
    {
        question: "प्रश्न 27. 'अनुरक्ति' का विलोम शब्द है:",
        answers: shuffle([
            { text: "विराग", correct: false },
            { text: "विरक्ति", correct: true },
            { text: "तिरोभाव", correct: false },
            { text: "आसक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुरक्ति' का अर्थ 'प्रेम' या 'आसक्ति' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'विरक्ति' है।"
    },
    {
        question: "प्रश्न 28. 'सापेक्ष' का विलोम शब्द है:",
        answers: shuffle([
            { text: "असापेक्ष", correct: false },
            { text: "निष्पक्ष", correct: false },
            { text: "निरपेक्ष", correct: true },
            { text: "आपेक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सापेक्ष' का अर्थ है 'किसी से संबंध रखने वाला'।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'निरपेक्ष' है।"
    },
    {
        question: "प्रश्न 29. 'विग्रह' का विलोम शब्द है:",
        answers: shuffle([
            { text: "संधि", correct: true },
            { text: "अविग्रह", correct: false },
            { text: "आग्रह", correct: false },
            { text: "ग्रहण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विग्रह' का अर्थ 'अलग करना' होता है (जैसे समास-विग्रह)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'संधि' है, जिसका अर्थ 'जोड़ना' है।"
    },
    {
        question: "प्रश्न 30. 'आर्द्र' का विलोम शब्द है:",
        answers: shuffle([
            { text: "नम", correct: false },
            { text: "शुष्क", correct: true },
            { text: "गीला", correct: false },
            { text: "लचीला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आर्द्र' का अर्थ 'नमी युक्त' या 'गीला' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'शुष्क' है, जिसका अर्थ 'सूखा' है।"
    },
    {
        question: "प्रश्न 31. 'साधु' का विलोम शब्द है:",
        answers: shuffle([
            { text: "साध्वी", correct: false },
            { text: "संन्यासी", correct: false },
            { text: "असाधु", correct: true },
            { text: "गृहस्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साधु' का अर्थ 'सज्जन' या 'अच्छा व्यक्ति' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'असाधु' है।"
    },
    {
        question: "प्रश्न 32. 'महान' का विलोम शब्द है:",
        answers: shuffle([
            { text: "क्षुद्र", correct: true },
            { text: "वीर", correct: false },
            { text: "धीर", correct: false },
            { text: "सज्जन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महान' का अर्थ 'बड़ा' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'क्षुद्र' है, जिसका अर्थ 'छोटा' या 'तुच्छ' है।"
    },
    {
        question: "प्रश्न 33. 'स्पृश्य' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अस्पृश्य", correct: true },
            { text: "अस्पृश्यता", correct: false },
            { text: "स्पृश", correct: false },
            { text: "स्पर्श", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्पृश्य' का अर्थ 'छूने योग्य' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'अस्पृश्य' है।"
    },
    {
        question: "प्रश्न 34. 'आमिष' का विलोम शब्द है:",
        answers: shuffle([
            { text: "सामिष", correct: false },
            { text: "निरामिष", correct: true },
            { text: "मांसाहारी", correct: false },
            { text: "शाकाहारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आमिष' का अर्थ 'मांस युक्त भोजन' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'निरामिष' है, जिसका अर्थ 'मांस रहित' है।"
    },
    {
        question: "प्रश्न 35. 'व्यष्टि' का विलोम शब्द है:",
        answers: shuffle([
            { text: "वृष्टि", correct: false },
            { text: "समष्टि", correct: true },
            { text: "दृष्टि", correct: false },
            { text: "सृष्टि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्यष्टि' का अर्थ 'व्यक्ति' या 'एक' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'समष्टि' है, जिसका अर्थ 'समूह' या 'समाज' है।"
    },
    {
        question: "प्रश्न 36. 'नैसर्गिक' का विलोम शब्द है:",
        answers: shuffle([
            { text: "सात्विक", correct: false },
            { text: "कृत्रिम", correct: true },
            { text: "तामसिक", correct: false },
            { text: "प्राकृतिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नैसर्गिक' का अर्थ 'प्राकृतिक' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'कृत्रिम' है, जिसका अर्थ 'बनावटी' है।"
    },
    {
        question: "प्रश्न 37. 'आरोह' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अवरोह", correct: true },
            { text: "समारोह", correct: false },
            { text: "निर्मोह", correct: false },
            { text: "प्रवाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आरोह' का अर्थ 'ऊपर चढ़ना' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'अवरोह' है, जिसका अर्थ 'नीचे उतरना' है।"
    },
    {
        question: "प्रश्न 38. 'सूक्ष्म' का विलोम शब्द है:",
        answers: shuffle([
            { text: "स्थूल", correct: true },
            { text: "बारीक", correct: false },
            { text: "क्षीण", correct: false },
            { text: "पतला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूक्ष्म' का अर्थ 'बहुत छोटा' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'स्थूल' है, जिसका अर्थ 'बड़ा' या 'मोटा' है।"
    },
    {
        question: "प्रश्न 39. 'अधुनातन' का विलोम शब्द है:",
        answers: shuffle([
            { text: "सनातन", correct: false },
            { text: "पुरातन", correct: true },
            { text: "अद्यतन", correct: false },
            { text: "विगत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधुनातन' का अर्थ 'आधुनिक' या 'नया' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'पुरातन' है, जिसका अर्थ 'प्राचीन' है।"
    },
    {
        question: "प्रश्न 40. 'सृष्टि' का विलोम शब्द है:",
        answers: shuffle([
            { text: "मरण", correct: false },
            { text: "प्रलय", correct: true },
            { text: "वृष्टि", correct: false },
            { text: "मोक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सृष्टि' का अर्थ 'रचना' या 'निर्माण' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'प्रलय' है, जिसका अर्थ 'विनाश' है।"
    },
    {
        question: "प्रश्न 41. 'अति' का विलोम शब्द है:",
        answers: shuffle([
            { text: "न्यून", correct: false },
            { text: "कम", correct: false },
            { text: "अल्प", correct: true },
            { text: "नगण्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अति' का अर्थ 'बहुत अधिक' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'अल्प' है, जिसका अर्थ 'बहुत कम' है।"
    },
    {
        question: "प्रश्न 42. 'बहिरंग' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अंतरंग", correct: true },
            { text: "सर्वांग", correct: false },
            { text: "चतुरंग", correct: false },
            { text: "अभ्यंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहिरंग' का अर्थ 'बाहरी अंग' या 'बाहरी रूप' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'अंतरंग' है, जिसका अर्थ 'आंतरिक' है।"
    },
    {
        question: "प्रश्न 43. 'अनागत' का विलोम शब्द है:",
        answers: shuffle([
            { text: "वर्तमान", correct: false },
            { text: "भूतकालिक", correct: false },
            { text: "विगत", correct: false },
            { text: "आगत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनागत' का अर्थ 'जो न आया हो' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'आगत' है, जिसका अर्थ 'आया हुआ' है।"
    },
    {
        question: "प्रश्न 44. 'उत्कृष्ट' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अपकृष्ट", correct: false },
            { text: "निकृष्ट", correct: true },
            { text: "व्यर्थ", correct: false },
            { text: "विकराल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उत्कृष्ट' का अर्थ 'श्रेष्ठ' या 'उत्तम' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'निकृष्ट' है, जिसका अर्थ 'नीच' या 'घटिया' है।"
    },
    {
        question: "प्रश्न 45. 'निषिद्ध' का विलोम शब्द है:",
        answers: shuffle([
            { text: "सिद्ध", correct: false },
            { text: "विहित", correct: true },
            { text: "घृणित", correct: false },
            { text: "निश्चित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निषिद्ध' का अर्थ 'जिस पर रोक लगी हो' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'विहित' है, जिसका अर्थ 'अनुमत' या 'उचित' है।"
    },
    {
        question: "प्रश्न 46. 'करुण' का विलोम शब्द है:",
        answers: shuffle([
            { text: "निष्ठुर", correct: true },
            { text: "कठोर", correct: false },
            { text: "निर्दयी", correct: false },
            { text: "कोमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'करुण' का अर्थ 'दया से भरा हुआ' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'निष्ठुर' है, जिसमें दया न हो।"
    },
    {
        question: "प्रश्न 47. 'चिरंतन' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अलौकिक", correct: false },
            { text: "नश्वर", correct: true },
            { text: "लौकिक", correct: false },
            { text: "नैसर्गिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिरंतन' का अर्थ 'जो हमेशा बना रहे' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'नश्वर' है, जिसका अर्थ 'नाशवान' है।"
    },
    {
        question: "प्रश्न 48. 'अनभिज्ञ' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अज्ञ", correct: false },
            { text: "प्रज्ञ", correct: false },
            { text: "अभिज्ञ", correct: true },
            { text: "अविज्ञ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनभिज्ञ' का अर्थ 'अनजान' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'अभिज्ञ' का अर्थ 'जानकार' होता है।"
    },
    {
        question: "प्रश्न 49. 'व्यास' का विलोम शब्द है:",
        answers: shuffle([
            { text: "समास", correct: true },
            { text: "संक्षेप", correct: false },
            { text: "संश्लेषण", correct: false },
            { text: "लघु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्यास' का अर्थ 'विस्तार' या 'फैलाव' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'समास' है, जिसका अर्थ 'संक्षेप' है।"
    },
    {
        question: "प्रश्न 50. 'प्रवेश' का विलोम शब्द है:",
        answers: shuffle([
            { text: "निकास", correct: false },
            { text: "द्वार", correct: false },
            { text: "निर्गम", correct: true },
            { text: "प्रस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रवेश' का अर्थ 'अंदर आना' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'निर्गम' है, जिसका अर्थ 'बाहर निकलना' है।"
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