const questions = [
    {
        topHeading: "संविधान संशोधन पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान में पहला संशोधन कब किया गया?",
        answers: shuffle([
            { text: "1950", correct: false },
            { text: "1951", correct: true },
            { text: "1952", correct: false },
            { text: "1953", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहला संविधान संशोधन 1951 में किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके द्वारा सामाजिक और आर्थिक रूप से पिछड़े वर्गों के लिए विशेष प्रावधान किए गए।"
    },
    {
        question: "प्रश्न 2. किस संविधान संशोधन द्वारा मतदान की आयु 21 वर्ष से घटाकर 18 वर्ष कर दी गई?",
        answers: shuffle([
            { text: "60वां", correct: false },
            { text: "61वां", correct: true },
            { text: "62वां", correct: false },
            { text: "63वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1989 में 61वें संविधान संशोधन द्वारा मतदान की आयु 21 वर्ष से घटाकर 18 वर्ष कर दी गई।"
    },
    {
        question: "प्रश्न 3. किस संविधान संशोधन को 'लघु संविधान' (Mini-Constitution) कहा जाता है?",
        answers: shuffle([
            { text: "42वां", correct: true },
            { text: "44वां", correct: false },
            { text: "73वां", correct: false },
            { text: "74वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1976 में हुए 42वें संविधान संशोधन में व्यापक बदलाव किए गए, जिस कारण इसे 'लघु संविधान' कहा जाता है।"
    },
    {
        question: "प्रश्न 4. 73वां संविधान संशोधन किससे संबंधित है?",
        answers: shuffle([
            { text: "नगरपालिका", correct: false },
            { text: "पंचायती राज", correct: true },
            { text: "दलबदल कानून", correct: false },
            { text: "शिक्षा का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 73वां संविधान संशोधन 1992 में पंचायती राज व्यवस्था को संवैधानिक दर्जा देने के लिए किया गया।"
    },
    {
        question: "प्रश्न 5. 74वां संविधान संशोधन किससे संबंधित है?",
        answers: shuffle([
            { text: "नगरपालिका", correct: true },
            { text: "पंचायती राज", correct: false },
            { text: "दलबदल कानून", correct: false },
            { text: "शिक्षा का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 74वां संविधान संशोधन 1992 में शहरी स्थानीय निकायों (नगरपालिका) को संवैधानिक दर्जा देने के लिए किया गया।"
    },
    {
        question: "प्रश्न 6. किस संविधान संशोधन द्वारा संपत्ति के अधिकार को मौलिक अधिकार से हटा दिया गया?",
        answers: shuffle([
            { text: "42वां", correct: false },
            { text: "44वां", correct: true },
            { text: "52वां", correct: false },
            { text: "61वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संविधान संशोधन (1978) द्वारा संपत्ति के अधिकार को मौलिक अधिकार की सूची से हटाकर अनुच्छेद 300-A के तहत एक कानूनी अधिकार बना दिया गया।"
    },
    {
        question: "प्रश्न 7. 52वां संविधान संशोधन किससे संबंधित है?",
        answers: shuffle([
            { text: "दलबदल कानून", correct: true },
            { text: "आरक्षण", correct: false },
            { text: "पंचायती राज", correct: false },
            { text: "जीएसटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 52वां संविधान संशोधन (1985) दलबदल को रोकने के लिए लाया गया था।"
    },
    {
        question: "प्रश्न 8. 86वां संविधान संशोधन किससे संबंधित है?",
        answers: shuffle([
            { text: "शिक्षा का अधिकार", correct: true },
            { text: "जीएसटी", correct: false },
            { text: "आरक्षण", correct: false },
            { text: "दलबदल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 86वें संविधान संशोधन (2002) द्वारा 6 से 14 वर्ष के बच्चों के लिए मुफ्त और अनिवार्य शिक्षा को मौलिक अधिकार बनाया गया।"
    },
    {
        question: "प्रश्न 9. 101वां संविधान संशोधन किससे संबंधित है?",
        answers: shuffle([
            { text: "जीएसटी", correct: true },
            { text: "शिक्षा का अधिकार", correct: false },
            { text: "आरक्षण", correct: false },
            { text: "दलबदल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 101वां संविधान संशोधन (2016) वस्तु एवं सेवा कर (GST) को लागू करने से संबंधित है।"
    },
    {
        question: "प्रश्न 10. 103वां संविधान संशोधन किससे संबंधित है?",
        answers: shuffle([
            { text: "आर्थिक रूप से कमजोर वर्गों के लिए आरक्षण", correct: true },
            { text: "जीएसटी", correct: false },
            { text: "राष्ट्रीय पिछड़ा वर्ग आयोग", correct: false },
            { text: "शिक्षा का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 103वां संविधान संशोधन (2019) सामान्य वर्ग के आर्थिक रूप से कमजोर वर्गों (EWS) को 10% आरक्षण प्रदान करता है।"
    },
    {
        question: "प्रश्न 11. किस संविधान संशोधन द्वारा दिल्ली को राष्ट्रीय राजधानी क्षेत्र (NCT) का दर्जा दिया गया?",
        answers: shuffle([
            { text: "69वां", correct: true },
            { text: "70वां", correct: false },
            { text: "71वां", correct: false },
            { text: "72वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 69वें संविधान संशोधन (1991) द्वारा दिल्ली को राष्ट्रीय राजधानी क्षेत्र का दर्जा दिया गया और विधानसभा का प्रावधान किया गया।"
    },
    {
        question: "प्रश्न 12. 102वां संविधान संशोधन किससे संबंधित है?",
        answers: shuffle([
            { text: "राष्ट्रीय पिछड़ा वर्ग आयोग को संवैधानिक दर्जा", correct: true },
            { text: "जीएसटी", correct: false },
            { text: "EWS आरक्षण", correct: false },
            { text: "शिक्षा का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 102वां संविधान संशोधन (2018) राष्ट्रीय पिछड़ा वर्ग आयोग (NCBC) को संवैधानिक दर्जा प्रदान करता है।"
    },
    {
        question: "प्रश्न 13. किस संविधान संशोधन द्वारा आठवीं अनुसूची में कोंकणी, मणिपुरी और नेपाली भाषाओं को शामिल किया गया?",
        answers: shuffle([
            { text: "71वां", correct: true },
            { text: "72वां", correct: false },
            { text: "73वां", correct: false },
            { text: "74वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 71वें संविधान संशोधन (1992) द्वारा कोंकणी, मणिपुरी और नेपाली भाषाओं को आठवीं अनुसूची में शामिल किया गया।"
    },
    {
        question: "प्रश्न 14. किस संविधान संशोधन द्वारा आठवीं अनुसूची में बोडो, डोगरी, मैथिली और संथाली भाषाओं को शामिल किया गया?",
        answers: shuffle([
            { text: "91वां", correct: false },
            { text: "92वां", correct: true },
            { text: "93वां", correct: false },
            { text: "94वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 92वें संविधान संशोधन (2003) द्वारा बोडो, डोगरी, मैथिली और संथाली भाषाओं को आठवीं अनुसूची में शामिल किया गया।"
    },
    {
        question: "प्रश्न 15. किस संविधान संशोधन द्वारा लोकसभा सीटों की संख्या 525 से बढ़ाकर 545 कर दी गई?",
        answers: shuffle([
            { text: "31वां", correct: true },
            { text: "32वां", correct: false },
            { text: "33वां", correct: false },
            { text: "34वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 31वें संविधान संशोधन (1973) द्वारा लोकसभा की सीटों की संख्या 525 से बढ़ाकर 545 कर दी गई।"
    },
    {
        question: "प्रश्न 16. किस संविधान संशोधन द्वारा गोवा को पूर्ण राज्य का दर्जा दिया गया?",
        answers: shuffle([
            { text: "55वां", correct: false },
            { text: "56वां", correct: true },
            { text: "57वां", correct: false },
            { text: "58वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 56वें संविधान संशोधन (1987) द्वारा गोवा को एक पूर्ण राज्य का दर्जा दिया गया।"
    },
    {
        question: "प्रश्न 17. किस संविधान संशोधन द्वारा सिक्किम को भारतीय संघ का 22वां राज्य बनाया गया?",
        answers: shuffle([
            { text: "35वां", correct: false },
            { text: "36वां", correct: true },
            { text: "37वां", correct: false },
            { text: "38वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 36वें संविधान संशोधन (1975) द्वारा सिक्किम को भारतीय संघ का 22वां राज्य बनाया गया।"
    },
    {
        question: "प्रश्न 18. किस संविधान संशोधन द्वारा सहकारी समितियों को संवैधानिक दर्जा दिया गया?",
        answers: shuffle([
            { text: "96वां", correct: false },
            { text: "97वां", correct: true },
            { text: "98वां", correct: false },
            { text: "99वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 97वें संविधान संशोधन (2011) द्वारा सहकारी समितियों को संवैधानिक दर्जा और संरक्षण प्रदान किया गया।"
    },
    {
        question: "प्रश्न 19. किस संविधान संशोधन द्वारा मंत्री परिषद के आकार को सीमित किया गया?",
        answers: shuffle([
            { text: "90वां", correct: false },
            { text: "91वां", correct: true },
            { text: "92वां", correct: false },
            { text: "93वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 91वें संविधान संशोधन (2003) द्वारा केंद्र और राज्यों में मंत्री परिषद के आकार को लोकसभा या विधानसभा की कुल सदस्य संख्या के 15% तक सीमित कर दिया गया।"
    },
    {
        question: "प्रश्न 20. किस संविधान संशोधन द्वारा राष्ट्रीय न्यायिक नियुक्ति आयोग (NJAC) का गठन किया गया, जिसे बाद में सुप्रीम कोर्ट ने रद्द कर दिया?",
        answers: shuffle([
            { text: "98वां", correct: false },
            { text: "99वां", correct: true },
            { text: "100वां", correct: false },
            { text: "101वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 99वें संविधान संशोधन (2014) द्वारा राष्ट्रीय न्यायिक नियुक्ति आयोग (NJAC) का गठन किया गया था, लेकिन सुप्रीम कोर्ट ने इसे असंवैधानिक घोषित कर दिया।"
    },
    {
        question: "प्रश्न 21. 100वां संविधान संशोधन किससे संबंधित है?",
        answers: shuffle([
            { text: "भारत-बांग्लादेश भूमि सीमा समझौता", correct: true },
            { text: "जीएसटी", correct: false },
            { text: "EWS आरक्षण", correct: false },
            { text: "NCBC", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 100वां संविधान संशोधन (2015) भारत और बांग्लादेश के बीच भूमि सीमा समझौते से संबंधित है।"
    },
    {
        question: "प्रश्न 22. 104वां संविधान संशोधन किससे संबंधित है?",
        answers: shuffle([
            { text: "लोकसभा और राज्य विधानसभाओं में SC/ST के लिए आरक्षण का विस्तार", correct: true },
            { text: "जीएसटी", correct: false },
            { text: "EWS आरक्षण", correct: false },
            { text: "NCBC", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 104वां संविधान संशोधन (2020) लोकसभा और राज्य विधानसभाओं में अनुसूचित जातियों और अनुसूचित जनजातियों के लिए आरक्षण को 10 वर्षों के लिए और बढ़ाता है।"
    },
    {
        question: "प्रश्न 23. किस संविधान संशोधन द्वारा 'समाजवादी', 'धर्मनिरपेक्ष' और 'अखंडता' शब्द प्रस्तावना में जोड़े गए?",
        answers: shuffle([
            { text: "42वां", correct: true },
            { text: "44वां", correct: false },
            { text: "24वां", correct: false },
            { text: "25वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 42वें संविधान संशोधन (1976) द्वारा प्रस्तावना में 'समाजवादी', 'धर्मनिरपेक्ष' और 'अखंडता' शब्द जोड़े गए।"
    },
    {
        question: "प्रश्न 24. किस संविधान संशोधन द्वारा मौलिक कर्तव्यों को संविधान में जोड़ा गया?",
        answers: shuffle([
            { text: "42वां", correct: true },
            { text: "44वां", correct: false },
            { text: "86वां", correct: false },
            { text: "91वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 42वें संविधान संशोधन (1976) द्वारा सरदार स्वर्ण सिंह समिति की सिफारिश पर मौलिक कर्तव्यों को संविधान में जोड़ा गया।"
    },
    {
        question: "प्रश्न 25. किस संविधान संशोधन द्वारा राष्ट्रपति के लिए मंत्रिमंडल की सलाह मानना अनिवार्य कर दिया गया?",
        answers: shuffle([
            { text: "42वां", correct: true },
            { text: "44वां", correct: false },
            { text: "24वां", correct: false },
            { text: "25वां", correct: false }
        ]),
        Explanation: "<i class='fa-sol,id fa-angles-right icon'></i> 42वें संविधान संशोधन ने राष्ट्रपति को मंत्रिमंडल की सलाह मानने के लिए बाध्यकारी बना दिया।"
    },
     {
        question: "प्रश्न 26. किस संविधान संशोधन द्वारा राष्ट्रपति को यह अधिकार दिया गया कि वह मंत्रिमंडल की सलाह को एक बार पुनर्विचार के लिए लौटा सकता है?",
        answers: shuffle([
            { text: "42वां", correct: false },
            { text: "44वां", correct: true },
            { text: "24वां", correct: false },
            { text: "25वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संविधान संशोधन (1978) ने राष्ट्रपति को यह शक्ति दी कि वह मंत्रिमंडल की सलाह को एक बार पुनर्विचार के लिए वापस भेज सकता है, लेकिन पुनर्विचार के बाद दी गई सलाह को मानना अनिवार्य होगा।"
    },
    {
        question: "प्रश्न 27. किस संविधान संशोधन द्वारा लोकसभा और विधानसभाओं का कार्यकाल 5 वर्ष से बढ़ाकर 6 वर्ष कर दिया गया था?",
        answers: shuffle([
            { text: "42वां", correct: true },
            { text: "44वां", correct: false },
            { text: "39वां", correct: false },
            { text: "40वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 42वें संविधान संशोधन द्वारा लोकसभा और विधानसभाओं का कार्यकाल 5 वर्ष से बढ़ाकर 6 वर्ष कर दिया गया था, जिसे बाद में 44वें संशोधन द्वारा पुनः 5 वर्ष कर दिया गया।"
    },
    {
        question: "प्रश्न 28. किस संविधान संशोधन द्वारा लोकसभा और विधानसभाओं का कार्यकाल पुनः 6 वर्ष से घटाकर 5 वर्ष कर दिया गया?",
        answers: shuffle([
            { text: "42वां", correct: false },
            { text: "44वां", correct: true },
            { text: "39वां", correct: false },
            { text: "40वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संविधान संशोधन द्वारा लोकसभा और विधानसभाओं का कार्यकाल वापस 6 वर्ष से घटाकर 5 वर्ष कर दिया गया।"
    },
    {
        question: "प्रश्न 29. किस संविधान संशोधन द्वारा यह स्पष्ट किया गया कि संसद मौलिक अधिकारों सहित संविधान के किसी भी हिस्से में संशोधन कर सकती है?",
        answers: shuffle([
            { text: "24वां", correct: true },
            { text: "25वां", correct: false },
            { text: "26वां", correct: false },
            { text: "27वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 24वें संविधान संशोधन (1971) ने गोलकनाथ मामले के फैसले को पलटते हुए संसद को यह अधिकार दिया कि वह मौलिक अधिकारों सहित संविधान के किसी भी हिस्से में संशोधन कर सकती है।"
    },
    {
        question: "प्रश्न 30. 7वां संविधान संशोधन (1956) किससे संबंधित है?",
        answers: shuffle([
            { text: "राज्यों का भाषाई आधार पर पुनर्गठन", correct: true },
            { text: "पंचायती राज", correct: false },
            { text: "दलबदल", correct: false },
            { text: "मौलिक कर्तव्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 7वें संविधान संशोधन द्वारा राज्यों का भाषाई आधार पर पुनर्गठन किया गया और राज्य पुनर्गठन आयोग की सिफारिशों को लागू किया गया।"
    },
    {
        question: "प्रश्न 31. किस संविधान संशोधन द्वारा दादरा और नगर हवेली को केंद्र शासित प्रदेश के रूप में भारत में शामिल किया गया?",
        answers: shuffle([
            { text: "10वां", correct: true },
            { text: "11वां", correct: false },
            { text: "12वां", correct: false },
            { text: "13वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 10वें संविधान संशोधन (1961) द्वारा दादरा और नगर हवेली को केंद्र शासित प्रदेश के रूप में भारत में शामिल किया गया।"
    },
    {
        question: "प्रश्न 32. किस संविधान संशोधन द्वारा गोवा, दमन और दीव को केंद्र शासित प्रदेश के रूप में भारत में शामिल किया गया?",
        answers: shuffle([
            { text: "10वां", correct: false },
            { text: "11वां", correct: false },
            { text: "12वां", correct: true },
            { text: "13वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 12वें संविधान संशोधन (1962) द्वारा गोवा, दमन और दीव को केंद्र शासित प्रदेश के रूप में भारत में शामिल किया गया।"
    },
    {
        question: "प्रश्न 33. किस संविधान संशोधन द्वारा नागालैंड को राज्य का दर्जा दिया गया?",
        answers: shuffle([
            { text: "12वां", correct: false },
            { text: "13वां", correct: true },
            { text: "14वां", correct: false },
            { text: "15वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 13वें संविधान संशोधन (1962) द्वारा नागालैंड को राज्य का दर्जा प्रदान किया गया।"
    },
    {
        question: "प्रश्न 34. किस संविधान संशोधन द्वारा पुडुचेरी को केंद्र शासित प्रदेश के रूप में भारत में शामिल किया गया?",
        answers: shuffle([
            { text: "12वां", correct: false },
            { text: "13वां", correct: false },
            { text: "14वां", correct: true },
            { text: "15वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 14वें संविधान संशोधन (1962) द्वारा पुडुचेरी (पूर्व में पांडिचेरी) को केंद्र शासित प्रदेश के रूप में भारत में शामिल किया गया।"
    },
    {
        question: "प्रश्न 35. किस संविधान संशोधन द्वारा सिंधी भाषा को आठवीं अनुसूची में 15वीं भाषा के रूप में शामिल किया गया?",
        answers: shuffle([
            { text: "21वां", correct: true },
            { text: "22वां", correct: false },
            { text: "23वां", correct: false },
            { text: "24वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 21वें संविधान संशोधन (1967) द्वारा सिंधी भाषा को आठवीं अनुसूची में शामिल किया गया।"
    },
    {
        question: "प्रश्न 36. किस संविधान संशोधन द्वारा मेघालय को स्वायत्त राज्य का दर्जा दिया गया?",
        answers: shuffle([
            { text: "21वां", correct: false },
            { text: "22वां", correct: true },
            { text: "23वां", correct: false },
            { text: "24वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 22वें संविधान संशोधन (1969) द्वारा असम से अलग करके मेघालय को एक स्वायत्त राज्य बनाया गया।"
    },
    {
        question: "प्रश्न 37. किस संविधान संशोधन द्वारा अरुणाचल प्रदेश और मिजोरम को केंद्र शासित प्रदेश का दर्जा दिया गया?",
        answers: shuffle([
            { text: "27वां", correct: true },
            { text: "28वां", correct: false },
            { text: "29वां", correct: false },
            { text: "30वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 27वें संविधान संशोधन (1971) द्वारा अरुणाचल प्रदेश और मिजोरम को केंद्र शासित प्रदेश बनाया गया।"
    },
    {
        question: "प्रश्न 38. किस संविधान संशोधन द्वारा मिजोरम को पूर्ण राज्य का दर्जा दिया गया?",
        answers: shuffle([
            { text: "53वां", correct: true },
            { text: "54वां", correct: false },
            { text: "55वां", correct: false },
            { text: "56वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 53वें संविधान संशोधन (1986) द्वारा मिजोरम को एक पूर्ण राज्य का दर्जा दिया गया।"
    },
    {
        question: "प्रश्न 39. किस संविधान संशोधन द्वारा अरुणाचल प्रदेश को पूर्ण राज्य का दर्जा दिया गया?",
        answers: shuffle([
            { text: "53वां", correct: false },
            { text: "54वां", correct: false },
            { text: "55वां", correct: true },
            { text: "56वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 55वें संविधान संशोधन (1986) द्वारा अरुणाचल प्रदेश को एक पूर्ण राज्य का दर्जा दिया गया।"
    },
    {
        question: "प्रश्न 40. किस संविधान संशोधन द्वारा राष्ट्रीय आपातकाल के संदर्भ में 'आंतरिक अशांति' शब्द को 'सशस्त्र विद्रोह' से बदल दिया गया?",
        answers: shuffle([
            { text: "42वां", correct: false },
            { text: "44वां", correct: true },
            { text: "38वां", correct: false },
            { text: "39वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संविधान संशोधन द्वारा आपातकाल की घोषणा के लिए 'आंतरिक अशांति' के स्थान पर 'सशस्त्र विद्रोह' शब्द का प्रयोग किया गया।"
    },
    {
        question: "प्रश्न 41. किस संविधान संशोधन द्वारा यह प्रावधान किया गया कि अनुच्छेद 20 और 21 के तहत प्राप्त मौलिक अधिकारों को राष्ट्रीय आपातकाल के दौरान भी निलंबित नहीं किया जा सकता है?",
        answers: shuffle([
            { text: "42वां", correct: false },
            { text: "44वां", correct: true },
            { text: "38वां", correct: false },
            { text: "39वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संविधान संशोधन ने यह सुनिश्चित किया कि राष्ट्रीय आपातकाल के दौरान भी जीवन और व्यक्तिगत स्वतंत्रता के अधिकार (अनुच्छेद 21) और अपराधों के लिए दोषसिद्धि के संबंध में संरक्षण (अनुच्छेद 20) को निलंबित नहीं किया जा सकता।"
    },
    {
        question: "प्रश्न 42. 93वां संविधान संशोधन किससे संबंधित है?",
        answers: shuffle([
            { text: "शिक्षण संस्थानों में OBC के लिए आरक्षण", correct: true },
            { text: "जीएसटी", correct: false },
            { text: "दलबदल", correct: false },
            { text: "पंचायती राज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 93वें संविधान संशोधन (2005) ने राज्य को सामाजिक और शैक्षिक रूप से पिछड़े वर्गों (OBC) के लिए निजी शिक्षण संस्थानों सहित सभी शिक्षण संस्थानों में आरक्षण करने का अधिकार दिया।"
    },
    {
        question: "प्रश्न 43. 26वां संविधान संशोधन (1971) किससे संबंधित है?",
        answers: shuffle([
            { text: "रियासतों के पूर्व शासकों की प्रिवी पर्स की समाप्ति", correct: true },
            { text: "बैंकों का राष्ट्रीयकरण", correct: false },
            { text: "मौलिक अधिकार", correct: false },
            { text: "संपत्ति का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 26वें संविधान संशोधन द्वारा रियासतों के पूर्व शासकों को दी जाने वाली प्रिवी पर्स और विशेषाधिकारों को समाप्त कर दिया गया।"
    },
    {
        question: "प्रश्न 44. संविधान संशोधन विधेयक पर राष्ट्रपति की क्या शक्ति है?",
        answers: shuffle([
            { text: "वह इसे पुनर्विचार के लिए लौटा सकता है", correct: false },
            { text: "वह इसे वीटो कर सकता है", correct: false },
            { text: "उसे अपनी सहमति देनी ही होती है", correct: true },
            { text: "वह प्रधानमंत्री से सलाह लेता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 24वें संविधान संशोधन (1971) के बाद, राष्ट्रपति के लिए संविधान संशोधन विधेयक पर अपनी सहमति देना अनिवार्य कर दिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> वह इसे न तो रोक सकता है और न ही पुनर्विचार के लिए लौटा सकता है।"
    },
    {
        question: "प्रश्न 45. भारतीय संविधान के किस अनुच्छेद में संविधान संशोधन की प्रक्रिया का उल्लेख है?",
        answers: shuffle([
            { text: "अनुच्छेद 368", correct: true },
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 360", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 368 संसद को संविधान में संशोधन करने की शक्ति और प्रक्रिया प्रदान करता है।"
    },
    {
        question: "प्रश्न 46. संविधान संशोधन विधेयक को कहाँ प्रस्तुत किया जा सकता है?",
        answers: shuffle([
            { text: "केवल लोकसभा में", correct: false },
            { text: "केवल राज्यसभा में", correct: false },
            { text: "संसद के किसी भी सदन में", correct: true },
            { text: "केवल विधानसभा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान संशोधन विधेयक को संसद के किसी भी सदन (लोकसभा या राज्यसभा) में प्रस्तुत किया जा सकता है।"
    },
    {
        question: "प्रश्न 47. संविधान संशोधन विधेयक को पारित होने के लिए किस प्रकार के बहुमत की आवश्यकता होती है?",
        answers: shuffle([
            { text: "a) साधारण बहुमत", correct: false },
            { text: "b) बहुमत", correct: false },
            { text: "c) विशेष बहुमत और आधे राज्यों का अनुसमर्थन", correct: false },
            { text: "उपरोक्त (b) और (c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ संशोधनों के लिए संसद के विशेष बहुमत की आवश्यकता होती है, जबकि संघीय ढांचे से संबंधित संशोधनों के लिए विशेष बहुमत के साथ-साथ कम से कम आधे राज्यों के विधानमंडलों के अनुसमर्थन की भी आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 48. 105वां संविधान संशोधन किससे संबंधित है?",
        answers: shuffle([
            { text: "राज्यों को सामाजिक और शैक्षिक रूप से पिछड़े वर्गों (SEBC) की अपनी सूची बनाने का अधिकार", correct: true },
            { text: "जीएसटी", correct: false },
            { text: "EWS आरक्षण", correct: false },
            { text: "NCBC", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 105वां संविधान संशोधन (2021) राज्यों को सामाजिक और शैक्षिक रूप से पिछड़े वर्गों की पहचान करने और उनकी सूची बनाने की शक्ति को पुनर्स्थापित करता है।"
    },
    {
        question: "प्रश्न 49. किस संविधान संशोधन द्वारा आठवीं अनुसूची में 'उड़िया' भाषा का नाम बदलकर 'ओडिया' किया गया?",
        answers: shuffle([
            { text: "96वां", correct: true },
            { text: "97वां", correct: false },
            { text: "98वां", correct: false },
            { text: "99वां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 96वें संविधान संशोधन (2011) द्वारा आठवीं अनुसूची में 'उड़िया' भाषा का नाम बदलकर 'ओडिया' कर दिया गया।"
    },
    {
        question: "प्रश्न 50. किस मामले में सर्वोच्च न्यायालय ने यह निर्णय दिया कि संसद संविधान के 'मूल ढांचे' में संशोधन नहीं कर सकती है?",
        answers: shuffle([
            { text: "गोलकनाथ मामला", correct: false },
            { text: "केशवानंद भारती मामला", correct: true },
            { text: "मिनर्वा मिल्स मामला", correct: false },
            { text: "शंकरी प्रसाद मामला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1973 के ऐतिहासिक केशवानंद भारती मामले में, सर्वोच्च न्यायालय ने 'मूल ढांचे' का सिद्धांत प्रतिपादित किया, जिसके अनुसार संसद संविधान के मूल ढांचे को नहीं बदल सकती।"
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