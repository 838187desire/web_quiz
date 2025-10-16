const questions = [
    {
        topHeading: "मुगल साम्राज्य पर आधारित 50 MCQs, part_3 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. औरंगजेब के बाद मुगल बादशाह कौन बना?",
        answers: shuffle([
            { text: "काम बख्श", correct: false },
            { text: "आजम शाह", correct: false },
            { text: "मुअज्जम (बहादुर शाह प्रथम)", correct: true },
            { text: "अकबर द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औरंगजेब के पुत्रों के बीच हुए उत्तराधिकार के युद्ध में, मुअज्जम विजयी हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> और 65 वर्ष की आयु में <b>'बहादुर शाह प्रथम'</b> के नाम से गद्दी पर बैठा।"
    },
    {
        question: "प्रश्न 2. किस मुगल बादशाह को 'शाह-ए-बेखबर' कहा जाता था?",
        answers: shuffle([
            { text: "जहाँदार शाह", correct: false },
            { text: "बहादुर शाह प्रथम", correct: true },
            { text: "फर्रुखसियर", correct: false },
            { text: "मुहम्मद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वह राजकीय कार्यों में इतना लापरवाह था कि इतिहासकार खफी खान ने उसे <b>'शाह-ए-बेखबर'</b> (शासक जिसे अपने साम्राज्य की कोई खबर न हो) कहा।"
    },
    {
        question: "प्रश्न 3. किस मुगल बादशाह को 'लम्पट मूर्ख' कहा जाता था?",
        answers: shuffle([
            { text: "बहादुर शाह प्रथम", correct: false },
            { text: "जहाँदार शाह", correct: true },
            { text: "फर्रुखसियर", correct: false },
            { text: "मुहम्मद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँदार शाह एक अयोग्य और विलासी शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो अपनी प्रेमिका लाल कुँवर के प्रभाव में रहता था।"
    },
    {
        question: "प्रश्न 4. 'सैयद बंधुओं' (अब्दुल्ला खान और हुसैन अली खान) को किस रूप में जाना जाता है?",
        answers: shuffle([
            { text: "महान सेनापति", correct: false },
            { text: "महान प्रशासक", correct: false },
            { text: "शासक-निर्माता (King Makers)", correct: true },
            { text: "महान विद्वान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैयद बंधुओं ने परवर्ती मुगल काल में बहुत शक्तिशाली हो गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> और उन्होंने फर्रुखसियर सहित चार मुगल बादशाहों को गद्दी पर बैठाया और हटाया।"
    },
    {
        question: "प्रश्न 5. किस मुगल बादशाह को 'घृणित कायर' कहा जाता था?",
        answers: shuffle([
            { text: "जहाँदार शाह", correct: false },
            { text: "रफी-उद-दरजात", correct: false },
            { text: "रफी-उद-दौला", correct: false },
            { text: "फर्रुखसियर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसकी कायरतापूर्ण और षड्यंत्रकारी प्रकृति के कारण उसे यह नाम दिया गया था।"
    },
    {
        question: "प्रश्न 6. किस मुगल बादशाह के काल में नादिर शाह ने भारत पर आक्रमण किया?",
        answers: shuffle([
            { text: "बहादुर शाह प्रथम", correct: false },
            { text: "फर्रुखसियर", correct: false },
            { text: "मुहम्मद शाह 'रंगीला'", correct: true },
            { text: "शाह आलम द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1739 ई. में फारस के शासक नादिर शाह ने मुहम्मद शाह के शासनकाल में दिल्ली पर आक्रमण किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और करनाल के युद्ध में मुगलों को हराया।"
    },
    {
        question: "प्रश्न 7. किस मुगल बादशाह को 'रंगीला' बादशाह कहा जाता था?",
        answers: shuffle([
            { text: "जहाँदार शाह", correct: false },
            { text: "फर्रुखसियर", correct: false },
            { text: "मुहम्मद शाह", correct: true },
            { text: "अहमद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद शाह अपना अधिकांश समय भोग-विलास, संगीत और नृत्य में बिताता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसे <b>'रंगीला'</b> उपनाम दिया गया।"
    },
    {
        question: "प्रश्न 8. पानीपत का तीसरा युद्ध (1761 ई.) किस मुगल बादशाह के समय में हुआ?",
        answers: shuffle([
            { text: "आलमगीर द्वितीय", correct: false },
            { text: "शाह आलम द्वितीय", correct: true },
            { text: "अकबर द्वितीय", correct: false },
            { text: "बहादुर शाह जफर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध मराठों और अफगान शासक अहमद शाह अब्दाली के बीच हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> उस समय शाह आलम द्वितीय मुगल बादशाह था, हालांकि उसकी शक्ति नाममात्र की थी।"
    },
    {
        question: "प्रश्न 9. बक्सर का युद्ध (1764 ई.) के समय मुगल बादशाह कौन था?",
        answers: shuffle([
            { text: "आलमगीर द्वितीय", correct: false },
            { text: "शाह आलम द्वितीय", correct: true },
            { text: "अकबर द्वितीय", correct: false },
            { text: "बहादुर शाह जफर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस युद्ध में अंग्रेजों ने मुगल बादशाह शाह आलम द्वितीय, अवध के नवाब शुजाउद्दौला और बंगाल के नवाब मीर कासिम की संयुक्त सेना को हराया।"
    },
    {
        question: "प्रश्न 10. अंग्रेजों का पेंशनर बनने वाला पहला मुगल बादशाह कौन था?",
        answers: shuffle([
            { text: "आलमगीर द्वितीय", correct: false },
            { text: "शाह आलम द्वितीय", correct: true },
            { text: "अकबर द्वितीय", correct: false },
            { text: "बहादुर शाह जफर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बक्सर के युद्ध में हार और इलाहाबाद की संधि (1765) के बाद, शाह आलम द्वितीय अंग्रेजों के संरक्षण में आ गया।<br><br><i class='fa-solid fa-angles-right icon'></i> और उनका पेंशनभोगी बन गया।"
    },
    {
        question: "प्रश्न 11. अंतिम मुगल बादशाह कौन था?",
        answers: shuffle([
            { text: "अकबर द्वितीय", correct: false },
            { text: "शाह आलम द्वितीय", correct: false },
            { text: "आलमगीर द्वितीय", correct: false },
            { text: "बहादुर शाह द्वितीय 'जफर'", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहादुर शाह जफर भारत के अंतिम मुगल सम्राट थे।"
    },
    {
        question: "प्रश्न 12. 1857 के विद्रोह का नेतृत्व करने के कारण बहादुर शाह जफर को अंग्रेजों ने कहाँ निर्वासित कर दिया?",
        answers: shuffle([
            { text: "कलकत्ता", correct: false },
            { text: "अंडमान", correct: false },
            { text: "रंगून (बर्मा)", correct: true },
            { text: "लंदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1857 के सिपाही विद्रोह के बाद, अंग्रेजों ने उन्हें कैद कर रंगून (आधुनिक यांगून, म्यांमार) भेज दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँ 1862 में उनकी मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 13. मुगल प्रशासन में 'मीर बख्शी' किस विभाग का प्रमुख होता था?",
        answers: shuffle([
            { text: "वित्त विभाग", correct: false },
            { text: "सैन्य विभाग", correct: true },
            { text: "न्याय विभाग", correct: false },
            { text: "शाही परिवार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'मीर बख्शी'</b> सेना का प्रमुख होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो सैनिकों की भर्ती, हुलिया, रसद और वेतन के लिए जिम्मेदार था।"
    },
    {
        question: "प्रश्न 14. मुगल काल में 'दीवान-ए-आला' या 'वजीर' का क्या कार्य था?",
        answers: shuffle([
            { text: "सेना का नेतृत्व करना", correct: false },
            { text: "राजस्व और वित्त विभाग का प्रमुख होना", correct: true },
            { text: "न्याय करना", correct: false },
            { text: "धार्मिक मामलों को देखना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीवान या वजीर प्रधानमंत्री की तरह होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> और पूरे साम्राज्य के राजस्व और वित्तीय मामलों का प्रमुख होता था।"
    },
    {
        question: "प्रश्न 15. मुगल काल में 'सद्र-उस-सुदूर' किस विभाग से संबंधित था?",
        answers: shuffle([
            { text: "सैन्य मामले", correct: false },
            { text: "राजस्व मामले", correct: false },
            { text: "विदेशी मामले", correct: false },
            { text: "धार्मिक मामले और दान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अधिकारी इस्लामी कानूनों को लागू करवाने, विद्वानों को भूमि अनुदान (मदद-ए-माश) देने।<br><br><i class='fa-solid fa-angles-right icon'></i> और दान-पुण्य के कार्यों की देखरेख करता था।"
    },
    {
        question: "प्रश्न 16. मुगल काल में प्रांतों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "इक्ता", correct: false },
            { text: "सरकार", correct: false },
            { text: "सूबा", correct: true },
            { text: "परगना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुगल साम्राज्य प्रांतों में विभाजित था, जिन्हें 'सूबा' कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> अकबर के समय 15 सूबे थे।"
    },
    {
        question: "प्रश्न 17. सूबे (प्रांत) के प्रमुख को क्या कहा जाता था?",
        answers: shuffle([
            { text: "फौजदार", correct: false },
            { text: "शिकदार", correct: false },
            { text: "सूबेदार या नाजिम", correct: true },
            { text: "आमिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूबेदार प्रांत का सर्वोच्च कार्यकारी अधिकारी होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके पास नागरिक और सैन्य दोनों अधिकार होते थे।"
    },
    {
        question: "प्रश्न 18. मुगल काल में जिले को क्या कहा जाता था?",
        answers: shuffle([
            { text: "सूबा", correct: false },
            { text: "परगना", correct: false },
            { text: "सरकार", correct: true },
            { text: "महाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूबों को जिलों में विभाजित किया गया था, जिन्हें 'सरकार' कहा जाता था।"
    },
    {
        question: "प्रश्न 19. 'सरकार' (जिले) का प्रमुख सैन्य अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "कोतवाल", correct: false },
            { text: "आमिल", correct: false },
            { text: "फौजदार", correct: true },
            { text: "दीवान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फौजदार जिले में कानून-व्यवस्था बनाए रखने और सैन्य प्रशासन के लिए जिम्मेदार होता था।"
    },
    {
        question: "प्रश्न 20. मुगल काल में 'परगना' का प्रमुख अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "शिकदार", correct: true },
            { text: "कानूनगो", correct: false },
            { text: "चौधरी", correct: false },
            { text: "मुकद्दम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सरकार' को 'परगना' (तहसील के समान) में विभाजित किया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> और शिकदार वहाँ का प्रमुख कार्यकारी अधिकारी होता था।"
    },
    {
        question: "प्रश्न 21. मुगल काल में शहर के प्रशासन की देखरेख कौन करता था?",
        answers: shuffle([
            { text: "फौजदार", correct: false },
            { text: "शिकदार", correct: false },
            { text: "कोतवाल", correct: true },
            { text: "आमिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोतवाल शहर का पुलिस प्रमुख होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो कानून-व्यवस्था, बाजारों की निगरानी और साफ-सफाई के लिए जिम्मेदार था।"
    },
    {
        question: "प्रश्न 22. मुगल काल में 'जात' और 'सवार' पद किस व्यवस्था से संबंधित थे?",
        answers: shuffle([
            { text: "भू-राजस्व", correct: false },
            { text: "न्याय", correct: false },
            { text: "मनसबदारी", correct: true },
            { text: "स्थानीय स्वशासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जात' मनसबदार के व्यक्तिगत पद और वेतन को निर्धारित करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'सवार' उसके द्वारा रखे जाने वाले घुड़सवारों की संख्या को इंगित करता था।"
    },
    {
        question: "प्रश्न 23. मुगल चित्रकला की नींव किसने रखी?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: true },
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ ने अपने निर्वासन काल के दौरान फारस में मीर सैयद अली और अब्दुस्समद नामक दो चित्रकारों की सेवाएँ प्राप्त कीं।<br><br><i class='fa-solid fa-angles-right icon'></i> जिन्होंने भारत में मुगल चित्रकला की शुरुआत की।"
    },
    {
        question: "प्रश्न 24. मुगल काल की राजभाषा क्या थी?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: false },
            { text: "उर्दू", correct: false },
            { text: "फारसी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुगलों ने फारसी को अपनी प्रशासनिक और दरबारी भाषा बनाया था।"
    },
    {
        question: "प्रश्न 25. 'पिएत्रा ड्यूरा' (Pietra Dura) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार की चित्रकला", correct: false },
            { text: "एक प्रकार का संगीत", correct: false },
            { text: "संगमरमर पर रत्नों की जड़ावट की कला", correct: true },
            { text: "एक प्रकार की वास्तुकला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक सजावटी कला है जिसमें संगमरमर को खोदकर उसमें बहुमूल्य पत्थरों को जड़ा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका पहला व्यापक प्रयोग एत्मादुद्दौला के मकबरे में और सबसे उत्कृष्ट प्रयोग ताजमहल में हुआ।"
    },
    {
        question: "प्रश्न 26. मुगल काल में 'मदद-ए-माश' क्या था?",
        answers: shuffle([
            { text: "एक सैन्य पद", correct: false },
            { text: "एक प्रकार का कर", correct: false },
            { text: "विद्वानों और धार्मिक लोगों को दी जाने वाली लगान-मुक्त भूमि", correct: true },
            { text: "एक शाही उपाधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसे 'सयूरगल' भी कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भूमि अनुदान के रूप में दी जाती थी और वंशानुगत होती थी।"
    },
    {
        question: "प्रश्न 27. 'रामचरितमानस' के रचयिता तुलसीदास किस मुगल बादशाह के समकालीन थे?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: false },
            { text: "अकबर", correct: true },
            { text: "जहाँगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोस्वामी तुलसीदास ने अकबर के शासनकाल (1556-1605) के दौरान ही अवधी भाषा में <b>'रामचरितमानस'</b> की रचना की।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि वे मुगल दरबार से संबंधित नहीं थे।"
    },
    {
        question: "प्रश्न 28. मुगल काल में 'बटाई' या 'गल्ला बख्शी' क्या था?",
        answers: shuffle([
            { text: "एक सैन्य रणनीति", correct: false },
            { text: "एक प्रकार का सिक्का", correct: false },
            { text: "फसल की साझेदारी पर आधारित एक भू-राजस्व प्रणाली", correct: true },
            { text: "एक धार्मिक त्योहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रणाली में, लगान का निर्धारण नकद में न करके सीधे फसल के हिस्से के रूप में किया जाता था।"
    },
    {
        question: "प्रश्न 29. 'दो-अस्पा' और 'सिंह-अस्पा' की प्रथा किस मुगल बादशाह ने शुरू की?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: true },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मनसबदारी व्यवस्था में एक सुधार था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें मनसबदार को अपने 'जात' पद को बढ़ाए बिना ही अधिक 'सवार' (घुड़सवार) रखने की अनुमति मिल जाती थी।"
    },
    {
        question: "प्रश्न 30. 'फतेहपुर सीकरी' का निर्माण किस प्रकार के पत्थर से किया गया है?",
        answers: shuffle([
            { text: "सफेद संगमरमर", correct: false },
            { text: "लाल बलुआ पत्थर", correct: true },
            { text: "ग्रेनाइट", correct: false },
            { text: "पीला बलुआ पत्थर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फतेहपुर सीकरी की अधिकांश इमारतें, जैसे बुलंद दरवाजा, पंच महल आदि, लाल बलुआ पत्थर से बनी हैं।"
    },
    {
        question: "प्रश्न 31. मुगल काल में 'दस्तक' का क्या अर्थ था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक शाही आदेश", correct: false },
            { text: "शुल्क-मुक्त व्यापार के लिए एक अनुमति पत्र", correct: true },
            { text: "एक सैन्य चौकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईस्ट इंडिया कंपनी को मुगल बादशाह फर्रुखसियर से <b>'दस्तक'</b> जारी करने का अधिकार मिला।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका उन्होंने दुरुपयोग किया जो बाद में संघर्ष का कारण बना।"
    },
    {
        question: "प्रश्न 32. 'आगरा का किला' किसने बनवाया था?",
        answers: shuffle([
            { text: "सिकंदर लोदी", correct: false },
            { text: "बाबर", correct: false },
            { text: "अकबर", correct: true },
            { text: "शाहजहाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि यहाँ पहले से एक किला था, लेकिन वर्तमान में मौजूद लाल बलुआ पत्थर से बने इस भव्य किले का निर्माण अकबर ने शुरू करवाया था।"
    },
    {
        question: "प्रश्न 33. किस मुगल बादशाह ने तंबाकू के प्रयोग पर प्रतिबंध लगा दिया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: true },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में तंबाकू पुर्तगालियों द्वारा लाया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके हानिकारक प्रभावों को देखते हुए, जहाँगीर ने इसके सेवन पर रोक लगाने का आदेश दिया था।"
    },
    {
        question: "प्रश्न 34. 'चारबाग' शैली का भारत में पहला प्रयोग किसके मकबरे में मिलता है?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: true },
            { text: "शेरशाह", correct: false },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली में स्थित हुमायूँ का मकबरा <b>'चारबाग'</b> (एक उद्यान जो चार भागों में विभाजित हो) शैली में बना पहला प्रमुख उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो बाद में मुगल वास्तुकला की एक विशेषता बन गया।"
    },
    {
        question: "प्रश्न 35. 'कलानौर' नामक स्थान का ऐतिहासिक महत्व क्या है?",
        answers: shuffle([
            { text: "बाबर का जन्म हुआ था", correct: false },
            { text: "अकबर का राज्याभिषेक हुआ था", correct: true },
            { text: "हुमायूँ की मृत्यु हुई थी", correct: false },
            { text: "पानीपत का द्वितीय युद्ध हुआ था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहीं पर 1556 ई. में 13 वर्ष के अकबर को मुगल बादशाह घोषित किया गया था।"
    },
    {
        question: "प्रश्न 36. मुगल काल में 'पोलाज', 'परौती', 'चाचर' और 'बंजर' क्या थे?",
        answers: shuffle([
            { text: "सिक्कों के प्रकार", correct: false },
            { text: "भूमि के प्रकार", correct: true },
            { text: "करों के प्रकार", correct: false },
            { text: "कपड़ों के प्रकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भू-राजस्व निर्धारण के लिए भूमि का वर्गीकरण था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>'पोलाज'</b> सबसे उपजाऊ भूमि थी जिस पर हर साल खेती होती थी, जबकि <b>'बंजर'</b> सबसे कम उपजाऊ भूमि थी।"
    },
    {
        question: "प्रश्न 37. मुगल काल में 'रुपया' किस धातु का सिक्का था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: true },
            { text: "तांबा", correct: false },
            { text: "कांसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह द्वारा शुरू किया गया चांदी का 'रुपया' मुगल काल में भी मानक मुद्रा बना रहा।"
    },
    {
        question: "प्रश्न 38. 'तुजुक-ए-जहाँगीरी' (जहाँगीर की आत्मकथा) को पूरा करने का श्रेय किसे दिया जाता है?",
        answers: shuffle([
            { text: "जहाँगीर", correct: false },
            { text: "नूरजहाँ", correct: false },
            { text: "मौतमिद खान", correct: true },
            { text: "आसफ खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने अपनी आत्मकथा लिखना शुरू किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन बाद के वर्षों में इसे मौतमिद खान जैसे लेखकों ने पूरा किया।"
    },
    {
        question: "प्रश्न 39. 'आलमगीरनामा' किसने लिखा?",
        answers: shuffle([
            { text: "औरंगजेब", correct: false },
            { text: "मुहम्मद काजिम", correct: true },
            { text: "अबुल फजल", correct: false },
            { text: "खफी खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह औरंगजेब के शासनकाल के पहले दस वर्षों का आधिकारिक इतिहास है, जिसे मुहम्मद काजिम ने लिखा था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में औरंगजेब ने इतिहास लेखन पर प्रतिबंध लगा दिया था।"
    },
    {
        question: "प्रश्न 40. मुगल काल में 'अमीर-उल-उमरा' की उपाधि किसे दी जाती थी?",
        answers: shuffle([
            { text: "सबसे बड़े पुत्र को", correct: false },
            { text: "सबसे बड़े मनसबदार को", correct: true },
            { text: "प्रधानमंत्री को", correct: false },
            { text: "मुख्य न्यायाधीश को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दरबार में सर्वोच्च पद वाले अमीर या मनसबदार को दी जाने वाली एक सम्मानजनक उपाधि थी।"
    },
    {
        question: "प्रश्न 41. 'शाहजहाँनामा' का लेखक कौन है?",
        answers: shuffle([
            { text: "शाहजहाँ", correct: false },
            { text: "अबुल फजल", correct: false },
            { text: "अब्दुल हमीद लाहौरी", correct: false },
            { text: "इनायत खान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि अब्दुल हमीद लाहौरी ने <b>'पादशाहनामा'</b> लिखा जो शाहजहाँ का आधिकारिक इतिहास है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन इनायत खान द्वारा लिखित <b>'शाहजहाँनामा'</b> भी एक महत्वपूर्ण कृति है।"
    },
    {
        question: "प्रश्न 42. किस मुगल शहजादी ने 'मख्फी' उपनाम से शायरी की?",
        answers: shuffle([
            { text: "गुलबदन बेगम", correct: false },
            { text: "जहाँआरा", correct: false },
            { text: "रोशनआरा", correct: false },
            { text: "जेबुन्निसा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जेबुन्निसा, औरंगजेब की पुत्री, एक विदुषी और कवयित्री थी।<br><br><i class='fa-solid fa-angles-right icon'></i> जो 'मख्फी' (छुपी हुई) के उपनाम से फारसी में कविताएँ लिखती थी।"
    },
    {
        question: "प्रश्न 43. मुगल काल में 'हुंडी' क्या थी?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रकार का हथियार", correct: false },
            { text: "एक प्रकार का विनिमय पत्र (Bill of Exchange)", correct: true },
            { text: "एक शाही फरमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुंडी एक साख-पत्र होता था जिसका उपयोग व्यापारी एक स्थान से दूसरे स्थान पर धन भेजने या उधार लेने के लिए करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे लंबी दूरी का व्यापार सुरक्षित हो जाता था।"
    },
    {
        question: "प्रश्न 44. मुगल काल में नील (Indigo) का उत्पादन मुख्य रूप से कहाँ होता था?",
        answers: shuffle([
            { text: "बंगाल और बिहार", correct: false },
            { text: "गुजरात", correct: false },
            { text: "बयाना (राजस्थान) और सरखेज (गुजरात)", correct: true },
            { text: "कोरोमंडल तट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुगल काल में बयाना का नील सर्वोत्तम गुणवत्ता का माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> और इसका यूरोप में बहुत निर्यात होता था।"
    },
    {
        question: "प्रश्न 45. 'सती प्रथा' को निरुत्साहित करने का प्रयास किस मुगल बादशाह ने किया?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: false },
            { text: "अकबर और औरंगजेब", correct: true },
            { text: "जहाँगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने आदेश जारी किया था कि किसी भी महिला को उसकी इच्छा के विरुद्ध सती होने के लिए बाध्य न किया जाए।<br><br><i class='fa-solid fa-angles-right icon'></i> औरंगजेब ने भी इस प्रथा पर रोक लगाने के लिए आदेश जारी किए थे।"
    },
    {
        question: "प्रश्न 46. 'मुहतसिब' नामक अधिकारी की नियुक्ति किस मुगल बादशाह ने की?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगजेब", correct: true },
            { text: "बहादुर शाह प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'मुहतसिब'</b> का कार्य यह देखना था कि प्रजा शरीयत (इस्लामी कानून) के अनुसार आचरण करती है या नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> वह सार्वजनिक नैतिकता और माप-तौल की भी निगरानी करता था।"
    },
    {
        question: "प्रश्न 47. 'मनुची' जो एक इतालवी यात्री था, किसके शासनकाल में भारत आया?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगजेब", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निकोलाओ मनुची एक तोपची के रूप में दारा शिकोह की सेना में शामिल हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> और बाद में उसने औरंगजेब के शासनकाल का विस्तृत वर्णन <b>'स्टोरिया डो मोगोर'</b> नामक ग्रंथ में किया।"
    },
    {
        question: "प्रश्न 48. मुगल प्रशासन में 'वाकिया-नवीस' का क्या कार्य था?",
        answers: shuffle([
            { text: "जासूसी करना", correct: false },
            { text: "समाचार और घटनाओं को लिखना", correct: true },
            { text: "शाही फरमान लिखना", correct: false },
            { text: "न्याय करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वाकिया-नवीस या समाचार लेखक प्रांतों में होने वाली सभी महत्वपूर्ण घटनाओं का विवरण दर्ज कर केंद्र को भेजते थे।"
    },
    {
        question: "प्रश्न 49. कौन सा मकबरा 'द्वितीय ताजमहल' कहलाता है?",
        answers: shuffle([
            { text: "हुमायूँ का मकबरा", correct: false },
            { text: "एत्मादुद्दौला का मकबरा", correct: false },
            { text: "बीबी का मकबरा (राबिया-उद-दौरानी का मकबरा)", correct: true },
            { text: "जहाँगीर का मकबरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औरंगाबाद में स्थित यह मकबरा ताजमहल की रूपरेखा पर आधारित है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन उसकी तुलना में कम सुंदर है, इसलिए इसे <b>'द्वितीय ताजमहल'</b> या <b>'ताजमहल की फूहड़ नकल'</b> कहते हैं।"
    },
    {
        question: "प्रश्न 50. 'मज्म-उल-बहरैन' (दो समुद्रों का संगम) की रचना किसने की?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "अबुल फजल", correct: false },
            { text: "दारा शिकोह", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस पुस्तक में दारा शिकोह ने हिंदू वेदांत और इस्लामी सूफीवाद के बीच की समानताओं को दर्शाने का प्रयास किया है।"
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