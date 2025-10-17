const questions = [
    {
        topHeading: "प्रतिध्वनि और अनुनाद पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. प्रतिध्वनि सुनाई देने का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "ध्वनि का अपवर्तन", correct: false },
            { text: "ध्वनि का विवर्तन", correct: false },
            { text: "ध्वनि का परावर्तन", correct: true },
            { text: "ध्वनि का व्यतिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिध्वनि ध्वनि तरंगों के किसी ठोस सतह से टकराकर वापस लौटने के कारण सुनाई देती है, जिसे ध्वनि का परावर्तन कहते हैं।"
    },
    {
        question: "प्रश्न 2. एक स्पष्ट प्रतिध्वनि सुनने के लिए, मूल ध्वनि और परावर्तित ध्वनि के बीच न्यूनतम समय अंतराल कितना होना चाहिए?",
        answers: shuffle([
            { text: "1 सेकंड", correct: false },
            { text: "0.5 सेकंड", correct: false },
            { text: "0.1 सेकंड", correct: true },
            { text: "0.01 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव मस्तिष्क किसी ध्वनि की संवेदना को लगभग 0.1 सेकंड तक बनाए रखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, दो ध्वनियों को अलग-अलग पहचानने के लिए उनके बीच कम से कम इतना समय अंतराल आवश्यक है।"
    },
    {
        question: "प्रश्न 3. हवा में स्पष्ट प्रतिध्वनि सुनने के लिए ध्वनि के स्रोत और परावर्तक सतह के बीच लगभग न्यूनतम दूरी कितनी होनी चाहिए?",
        answers: shuffle([
            { text: "10 मीटर", correct: false },
            { text: "17 मीटर", correct: true },
            { text: "25 मीटर", correct: false },
            { text: "34 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि द्वारा 0.1 सेकंड में तय की गई दूरी (लगभग 34 मीटर) का आधा, क्योंकि ध्वनि को सतह तक जाने और वापस आने दोनों में दूरी तय करनी होती है।"
    },
    {
        question: "प्रश्न 4. जब कोई वस्तु किसी बाहरी आवर्ती बल के प्रभाव में अपनी स्वाभाविक आवृत्ति पर कंपन करती है, तो इस घटना को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रतिध्वनि", correct: false },
            { text: "विस्पंद", correct: false },
            { text: "अनुनाद", correct: true },
            { text: "डॉप्लर प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनाद वह स्थिति है जब लगाए गए बल की आवृत्ति वस्तु की स्वाभाविक कंपन आवृत्ति से मेल खाती है, जिससे कंपन का आयाम बहुत बढ़ जाता है।"
    },
    {
        question: "प्रश्न 5. रेडियो का ट्यूनिंग सर्किट किस सिद्धांत पर कार्य करता है?",
        answers: shuffle([
            { text: "चुंबकीय प्रेरण", correct: false },
            { text: "विद्युत अनुनाद", correct: true },
            { text: "ध्वनि परावर्तन", correct: false },
            { text: "प्रकाशिक तंतु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडियो में, ट्यूनिंग सर्किट की आवृत्ति को वांछित स्टेशन की आवृत्ति के साथ मिलाया जाता है, जिससे अनुनाद होता है और वह स्टेशन स्पष्ट रूप से सुनाई देता है।"
    },
    {
        question: "प्रश्न 6. समुद्र की गहराई मापने या पनडुब्बियों का पता लगाने के लिए किस तकनीक का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "रडार", correct: false },
            { text: "लेसर", correct: false },
            { text: "सोनार", correct: true },
            { text: "लाइडार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोनार (SONAR) प्रणाली प्रतिध्वनि के सिद्धांत का उपयोग करती है, जिसमें पराश्रव्य तरंगें भेजकर उनकी वापसी के समय के आधार पर दूरी की गणना की जाती है।"
    },
    {
        question: "प्रश्न 7. जब सेना के जवान पुल पार करते हैं, तो उन्हें कदम से कदम मिलाकर न चलने की सलाह क्यों दी जाती है?",
        answers: shuffle([
            { text: "ऊर्जा बचाने के लिए", correct: false },
            { text: "पुल को अनुनाद से होने वाले संभावित नुकसान से बचाने के लिए", correct: true },
            { text: "गति को नियंत्रित करने के लिए", correct: false },
            { text: "अनुशासनहीनता को बढ़ावा देने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि सैनिकों के कदमों की आवृत्ति पुल की स्वाभाविक आवृत्ति से मेल खा जाए, तो अनुनाद के कारण पुल में खतरनाक कंपन उत्पन्न हो सकते हैं, जिससे उसके टूटने का खतरा होता है।"
    },
    {
        question: "प्रश्न 8. ध्वनि का बार-बार परावर्तन जिसके कारण ध्वनि का स्थायित्व होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "प्रतिध्वनि", correct: false },
            { text: "अनुरणन", correct: true },
            { text: "विवर्तन", correct: false },
            { text: "व्यतिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुरणन (Reverberation) वह घटना है जिसमें ध्वनि स्रोत के बंद होने के बाद भी ध्वनि बार-बार परावर्तन के कारण कुछ समय तक सुनाई देती है, जैसा कि बड़े हॉल में होता है।"
    },
    {
        question: "प्रश्न 9. निम्नलिखित में से कौन-सा अनुनाद का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "झूले का आयाम बढ़ना जब धक्का उसकी स्वाभाविक आवृत्ति पर लगाया जाए", correct: false },
            { text: "रेडियो को किसी विशेष स्टेशन के लिए ट्यून करना", correct: false },
            { text: "सितार के एक तार को छेड़ने पर दूसरे तार का कंपन करना", correct: false },
            { text: "शांत पानी में पत्थर फेंकने से उत्पन्न लहरें", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी में लहरों का उत्पन्न होना विक्षोभ के प्रसार का उदाहरण है, न कि अनुनाद का।<br><br><i class='fa-solid fa-angles-right icon'></i> अनुनाद के लिए बाहरी आवर्ती बल और स्वाभाविक आवृत्ति का मेल होना आवश्यक है।"
    },
    {
        question: "प्रश्न 10. चमगादड़ रात में उड़ते समय बाधाओं का पता कैसे लगाते हैं?",
        answers: shuffle([
            { text: "अपनी तेज आँखों से", correct: false },
            { text: "पराश्रव्य ध्वनि तरंगों और उनकी प्रतिध्वनि से", correct: true },
            { text: "शरीर से उत्पन्न ऊष्मा से", correct: false },
            { text: "वायु के दबाव में परिवर्तन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चमगादड़ उच्च आवृत्ति की पराश्रव्य तरंगें उत्पन्न करते हैं और वस्तुओं से टकराकर लौटने वाली प्रतिध्वनि को सुनकर बाधाओं की स्थिति और दूरी का पता लगाते हैं।"
    },
    {
        question: "प्रश्न 11. किसी संगीत वाद्ययंत्र की ध्वनि की गुणवत्ता किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल मूल आवृत्ति पर", correct: false },
            { text: "उत्पन्न अधिस्वरकों की संख्या और उनके सापेक्ष आयाम पर", correct: true },
            { text: "वाद्ययंत्र के आकार पर", correct: false },
            { text: "वादक की शक्ति पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी ध्वनि की गुणवत्ता (Timbre) उसमें उपस्थित मूल आवृत्ति के साथ-साथ विभिन्न अधिस्वरकों (overtones) पर निर्भर करती है, जो उसे विशिष्ट पहचान देते हैं।"
    },
    {
        question: "प्रश्न 12. अनुनाद के लिए आवश्यक शर्त क्या है?",
        answers: shuffle([
            { text: "प्रणोदित दोलनों की आवृत्ति वस्तु की स्वाभाविक आवृत्ति से बहुत अधिक होनी चाहिए", correct: false },
            { text: "प्रणोदित दोलनों की आवृत्ति वस्तु की स्वाभाविक आवृत्ति के बराबर होनी चाहिए", correct: true },
            { text: "प्रणोदित दोलनों की आवृत्ति वस्तु की स्वाभाविक आवृत्ति से बहुत कम होनी चाहिए", correct: false },
            { text: "वस्तु की कोई स्वाभाविक आवृत्ति नहीं होनी चाहिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनाद की घटना तभी होती है जब बाहरी आवर्ती बल की आवृत्ति, कंपन करने वाली वस्तु की अपनी स्वाभाविक आवृत्ति से मेल खाती है।"
    },
    {
        question: "प्रश्न 13. कॉन्सर्ट हॉल या सभागारों की छतें वक्राकार क्यों बनाई जाती हैं?",
        answers: shuffle([
            { text: "सुंदरता के लिए", correct: false },
            { text: "ताकि ध्वनि परावर्तन के बाद हॉल के सभी कोनों तक समान रूप से पहुँचे", correct: true },
            { text: "लागत कम करने के लिए", correct: false },
            { text: "छत को मजबूत बनाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वक्राकार सतहें ध्वनि को अवशोषित करने के बजाय उसे फैलाती हैं, जिससे ध्वनि का वितरण पूरे हॉल में बेहतर होता है और अनुरणन कम होता है।"
    },
    {
        question: "प्रश्न 14. माइक्रोवेव ओवन में खाना पकाने की प्रक्रिया किस घटना पर आधारित है?",
        answers: shuffle([
            { text: "ध्वनि अनुनाद", correct: false },
            { text: "प्रकाशिक अनुनाद", correct: false },
            { text: "विद्युतचुंबकीय अनुनाद", correct: true },
            { text: "यांत्रिक अनुनाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइक्रोवेव ओवन में, माइक्रोवेव की आवृत्ति भोजन में मौजूद पानी के अणुओं की स्वाभाविक कंपन आवृत्ति से मेल खाती है, जिससे अनुनाद होता है और अणु तेजी से कंपन करके ऊष्मा उत्पन्न करते हैं।"
    },
    {
        question: "प्रश्न 15. अवमंदन (Damping) का अनुनाद पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "यह अनुनाद के आयाम को बढ़ाता है", correct: false },
            { text: "यह अनुनाद के आयाम को कम करता है", correct: true },
            { text: "इसका अनुनाद पर कोई प्रभाव नहीं पड़ता", correct: false },
            { text: "यह अनुनाद की आवृत्ति को बदल देता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवमंदन एक विरोधी बल है जो दोलनों की ऊर्जा को कम करता है, जिससे अनुनाद की स्थिति में भी कंपन का आयाम सीमित रहता है।"
    },
    {
        question: "प्रश्न 16. प्रतिध्वनि और अनुरणन में मूल अंतर क्या है?",
        answers: shuffle([
            { text: "a) प्रतिध्वनि एकल परावर्तन है, जबकि अनुरणन बहुल परावर्तन है", correct: false },
            { text: "b) प्रतिध्वनि कम दूरी पर होती है, अनुरणन अधिक दूरी पर", correct: false },
            { text: "c) प्रतिध्वनि में ध्वनि स्पष्ट होती है, अनुरणन में अस्पष्ट", correct: false },
            { text: " (a) और (c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिध्वनि एक स्पष्ट, एकल परावर्तित ध्वनि है, जबकि अनुरणन कई सतहों से बार-बार होने वाले परावर्तनों का परिणाम है, जिससे ध्वनि गूंजती है और अस्पष्ट हो जाती है।"
    },
    {
        question: "प्रश्न 17. चिकित्सा के क्षेत्र में 'अल्ट्रासोनोग्राफी' किस सिद्धांत का उपयोग करती है?",
        answers: shuffle([
            { text: "एक्स-रे विवर्तन", correct: false },
            { text: "चुंबकीय अनुनाद", correct: false },
            { text: "पराश्रव्य तरंगों की प्रतिध्वनि", correct: true },
            { text: "डॉप्लर प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्ट्रासाउंड इमेजिंग में, शरीर के अंदर अंगों की तस्वीरें बनाने के लिए उच्च-आवृत्ति वाली ध्वनि तरंगों (पराश्रव्य) को भेजा जाता है और उनकी प्रतिध्वनि का विश्लेषण किया जाता है।"
    },
    {
        question: "प्रश्न 18. खोखले वाद्ययंत्र (जैसे गिटार या वायलिन) में ध्वनि की प्रबलता कैसे बढ़ जाती है?",
        answers: shuffle([
            { text: "तारों के मोटे होने से", correct: false },
            { text: "अनुनाद के कारण", correct: true },
            { text: "वादक द्वारा अधिक बल लगाने से", correct: false },
            { text: "हवा के तापमान से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब तार कंपन करते हैं, तो वे वाद्ययंत्र के खोखले शरीर में हवा को भी कंपन कराते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अनुनाद के कारण, हवा के स्तंभ का कंपन बढ़ जाता है, जिससे ध्वनि की प्रबलता बढ़ जाती है।"
    },
    {
        question: "प्रश्न 19. अनुनाद की तीक्ष्णता (Sharpness) किस कारक पर निर्भर करती है?",
        answers: shuffle([
            { text: "वस्तु के आकार पर", correct: false },
            { text: "लगाए गए बल के आयाम पर", correct: false },
            { text: "अवमंदन की मात्रा पर", correct: true },
            { text: "वस्तु के तापमान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस प्रणाली में अवमंदन कम होता है, उसमें अनुनाद अधिक तीक्ष्ण (यानी एक बहुत ही विशिष्ट आवृत्ति पर बड़े आयाम वाला) होता है।"
    },
    {
        question: "प्रश्न 20. भूकंप के दौरान कुछ इमारतें दूसरों की तुलना में अधिक क्षतिग्रस्त क्यों हो जाती हैं?",
        answers: shuffle([
            { text: "खराब निर्माण सामग्री के कारण", correct: false },
            { text: "इमारत की स्वाभाविक आवृत्ति का भूकंपीय तरंगों की आवृत्ति से मेल खाने के कारण", correct: true },
            { text: "इमारत की ऊंचाई के कारण", correct: false },
            { text: "इमारत की नींव कमजोर होने के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि भूकंपीय तरंगों की आवृत्ति इमारत की स्वाभाविक कंपन आवृत्ति के बराबर हो जाती है, तो अनुनाद के कारण इमारत में विनाशकारी कंपन उत्पन्न हो सकते हैं।"
    },
    {
        question: "प्रश्न 21. ध्वनि तरंगें किस माध्यम में प्रतिध्वनि उत्पन्न नहीं कर सकती हैं?",
        answers: shuffle([
            { text: "ठोस", correct: false },
            { text: "द्रव", correct: false },
            { text: "गैस", correct: false },
            { text: "निर्वात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि तरंगों को संचरण के लिए एक माध्यम की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूंकि निर्वात में कोई कण नहीं होते, इसलिए ध्वनि तरंगें वहां यात्रा नहीं कर सकतीं और न ही परावर्तित हो सकती हैं।"
    },
    {
        question: "प्रश्न 22. किसी प्रणोदित दोलक की स्थायी अवस्था में दोलन की आवृत्ति किसके बराबर होती है?",
        answers: shuffle([
            { text: "दोलक की स्वाभाविक आवृत्ति के", correct: false },
            { text: "बाहरी आवर्ती बल की आवृत्ति के", correct: true },
            { text: "दोनों के औसत के", correct: false },
            { text: "दोनों के अंतर के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में दोलन जटिल हो सकते हैं, लेकिन अंततः दोलक बाहरी बल की आवृत्ति पर ही दोलन करने लगता है।"
    },
    {
        question: "प्रश्न 23. स्टेथोस्कोप में रोगी के दिल की धड़कन की ध्वनि डॉक्टर के कानों तक कैसे पहुँचती है?",
        answers: shuffle([
            { text: "ध्वनि के एकल परावर्तन द्वारा", correct: false },
            { text: "ध्वनि के बहुल परावर्तन द्वारा", correct: true },
            { text: "ध्वनि के अपवर्तन द्वारा", correct: false },
            { text: "ध्वनि के विवर्तन द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेथोस्कोप की नली के अंदर ध्वनि बार-बार परावर्तित होती है, जिससे उसकी तीव्रता बनी रहती है और वह डॉक्टर तक स्पष्ट रूप से पहुँचती है।"
    },
    {
        question: "प्रश्न 24. अनुनाद नली प्रयोग का उपयोग क्या ज्ञात करने के लिए किया जाता है?",
        answers: shuffle([
            { text: "हवा में प्रकाश की गति", correct: false },
            { text: "हवा में ध्वनि की गति", correct: true },
            { text: "पानी का घनत्व", correct: false },
            { text: "गुरुत्वाकर्षण का मान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनाद नली में, एक ज्ञात आवृत्ति के स्रोत का उपयोग करके वायु स्तंभ में अनुनाद उत्पन्न किया जाता है और तरंगदैर्ध्य को मापकर ध्वनि की गति की गणना की जाती है।"
    },
    {
        question: "प्रश्न 25. एक खाली कमरे और फर्नीचर से भरे कमरे में से किसमें अनुरणन अधिक होगा?",
        answers: shuffle([
            { text: "खाली कमरे में", correct: true },
            { text: "फर्नीचर से भरे कमरे में", correct: false },
            { text: "दोनों में बराबर होगा", correct: false },
            { text: "कमरे के आकार पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फर्नीचर, पर्दे और अन्य नरम सतहें ध्वनि की अच्छी अवशोषक होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे ध्वनि ऊर्जा को सोख लेती हैं, जिससे परावर्तन कम होता है और अनुरणन घट जाता है।"
    },
    {
        question: "प्रश्न 26. अनुनाद की घटना किस प्रकार की तरंगों में हो सकती है?",
        answers: shuffle([
            { text: "केवल अनुदैर्ध्य तरंगों में", correct: false },
            { text: "केवल अनुप्रस्थ तरंगों में", correct: false },
            { text: "यांत्रिक और विद्युतचुंबकीय दोनों तरंगों में", correct: true },
            { text: "केवल ध्वनि तरंगों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनाद एक सामान्य तरंग घटना है जो यांत्रिक तरंगों (जैसे ध्वनि, रस्सी में तरंग) और विद्युतचुंबकीय तरंगों (जैसे प्रकाश, रेडियो तरंग) दोनों में देखी जा सकती है।"
    },
    {
        question: "प्रश्न 27. बादलों की गड़गड़ाहट की आवाज़ कई सेकंड तक क्यों सुनाई देती है?",
        answers: shuffle([
            { text: "प्रकाश की तेज गति के कारण", correct: false },
            { text: "बादलों और पृथ्वी के बीच ध्वनि के क्रमिक परावर्तन के कारण", correct: true },
            { text: "हवा के तापमान में भिन्नता के कारण", correct: false },
            { text: "वायुमंडलीय दबाव के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिजली से उत्पन्न ध्वनि विभिन्न बादलों और जमीन से बार-बार परावर्तित होती है, जिससे हमें एक लंबी गड़गड़ाहट के रूप में ध्वनि सुनाई देती है।"
    },
    {
        question: "प्रश्न 28. किसी झूले पर बैठा व्यक्ति खड़े होकर झूलने लगे तो झूले का आवर्तकाल क्या होगा?",
        answers: shuffle([
            { text: "बढ़ जाएगा", correct: false },
            { text: "घट जाएगा", correct: true },
            { text: "अपरिवर्तित रहेगा", correct: false },
            { text: "शून्य हो जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खड़े होने पर, गुरुत्व केंद्र ऊपर उठ जाता है, जिससे झूले की प्रभावी लंबाई कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूंकि आवर्तकाल लंबाई के वर्गमूल के समानुपाती होता है, इसलिए आवर्तकाल घट जाएगा।"
    },
    {
        question: "प्रश्न 29. 'गोल गुम्बज' में फुसफुसाहट भी स्पष्ट रूप से क्यों सुनाई देती है?",
        answers: shuffle([
            { text: "कम वायुमंडलीय दबाव के कारण", correct: false },
            { text: "गुंबद की विशेष वक्राकार संरचना से होने वाले बहुल परावर्तन के कारण", correct: true },
            { text: "दीवारों के चिकना होने के कारण", correct: false },
            { text: "कम तापमान के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोल गुम्बज की अनूठी ज्यामिति ध्वनि तरंगों को बिना अधिक ऊर्जा खोए दीवारों के साथ बार-बार परावर्तित करती है, जिससे बहुत धीमी आवाज़ भी दूर तक पहुँच जाती है।"
    },
    {
        question: "प्रश्न 30. अवमंदित दोलन में, समय के साथ क्या घटता है?",
        answers: shuffle([
            { text: "केवल आवृत्ति", correct: false },
            { text: "केवल आवर्तकाल", correct: false },
            { text: "आयाम", correct: true },
            { text: "तरंग की गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवमंदन बलों (जैसे घर्षण या वायु प्रतिरोध) के कारण दोलन की ऊर्जा लगातार कम होती जाती है, जिससे उसका आयाम समय के साथ घटता जाता है।"
    },
    {
        question: "प्रश्न 31. प्रतिध्वनि द्वारा गहराई का पता लगाने को क्या कहा जाता है?",
        answers: shuffle([
            { text: "ध्वनि परावर्तन", correct: false },
            { text: "प्रतिध्वनि सर्वेक्षण", correct: true },
            { text: "ध्वनि चित्रण", correct: false },
            { text: "आवृत्ति मापन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस तकनीक को 'इको साउंडिंग' या प्रतिध्वनि सर्वेक्षण कहते हैं, जिसका उपयोग मुख्य रूप से समुद्र तल या झीलों के तल का नक्शा बनाने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 32. किसी ओपेरा गायक की आवाज़ से कांच का गिलास टूटना किसका एक प्रसिद्ध उदाहरण है?",
        answers: shuffle([
            { text: "व्यतिकरण", correct: false },
            { text: "विवर्तन", correct: false },
            { text: "अनुनाद", correct: true },
            { text: "अपवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि गायक की आवाज़ की आवृत्ति कांच के गिलास की स्वाभाविक आवृत्ति के बराबर हो जाती है, तो अनुनाद के कारण गिलास में इतने बड़े कंपन उत्पन्न हो सकते हैं कि वह टूट जाए।"
    },
    {
        question: "प्रश्न 33. वह आवृत्ति जिस पर कोई वस्तु बाहरी बल की अनुपस्थिति में स्वाभाविक रूप से कंपन करती है, क्या कहलाती है?",
        answers: shuffle([
            { text: "प्रणोदित आवृत्ति", correct: false },
            { text: "अवमंदित आवृत्ति", correct: false },
            { text: "स्वाभाविक आवृत्ति", correct: true },
            { text: "क्रांतिक आवृत्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वस्तु की अपनी एक या अधिक स्वाभाविक आवृत्तियाँ (Natural Frequencies) होती हैं, जिन पर वह विक्षोभ के बाद कंपन करना पसंद करती है।"
    },
    {
        question: "प्रश्न 34. ध्वनि-रोधक कमरों की दीवारें खुरदरी और नरम सामग्री से क्यों ढकी होती हैं?",
        answers: shuffle([
            { text: "ध्वनि को परावर्तित करने के लिए", correct: false },
            { text: "ध्वनि को अवशोषित करने और अनुरणन कम करने के लिए", correct: true },
            { text: "कमरे को गर्म रखने के लिए", correct: false },
            { text: "सजावट के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खुरदरी और नरम सतहें ध्वनि की खराब परावर्तक और अच्छी अवशोषक होती हैं, जो कमरे के अंदर गूंज को समाप्त करती हैं।"
    },
    {
        question: "प्रश्न 35. अनुनाद के कारण प्रणोदित दोलनों का आयाम...",
        answers: shuffle([
            { text: "बहुत कम हो जाता है", correct: false },
            { text: "थोड़ा कम हो जाता है", correct: false },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "बहुत अधिक हो जाता है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनाद की मुख्य विशेषता ही यह है कि इसमें ऊर्जा का स्थानांतरण बहुत प्रभावी ढंग से होता है, जिससे दोलन का आयाम अधिकतम हो जाता है।"
    },
    {
        question: "प्रश्न 36. यदि आप चंद्रमा पर अपने मित्र को पुकारते हैं, तो वह आपकी आवाज क्यों नहीं सुन पाएगा?",
        answers: shuffle([
            { text: "क्योंकि आप बहुत धीरे बोलते हैं", correct: false },
            { text: "क्योंकि वहां तापमान बहुत कम है", correct: false },
            { text: "क्योंकि ध्वनि के संचरण के लिए कोई माध्यम नहीं है", correct: true },
            { text: "क्योंकि वहां गुरुत्वाकर्षण बहुत कम है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा पर वायुमंडल नहीं है, यानी निर्वात है।<br><br><i class='fa-solid fa-angles-right icon'></i> ध्वनि तरंगें यांत्रिक तरंगें हैं जिन्हें यात्रा करने के लिए माध्यम की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 37. एक तनी हुई डोरी में अप्रगामी तरंगों का निर्माण किसका उदाहरण है?",
        answers: shuffle([
            { text: "अनुनाद", correct: true },
            { text: "अपवर्तन", correct: false },
            { text: "ध्रुवण", correct: false },
            { text: "विवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब डोरी को उसकी स्वाभाविक आवृत्तियों (जिन्हें हार्मोनिक्स भी कहा जाता है) पर कंपित किया जाता है, तो आपतित और परावर्तित तरंगों के अध्यारोपण से अनुनाद के कारण अप्रगामी तरंगें बनती हैं।"
    },
    {
        question: "प्रश्न 38. सोनोग्राफी में उपयोग की जाने वाली तरंगें हैं:",
        answers: shuffle([
            { text: "अवरक्त तरंगें", correct: false },
            { text: "पराश्रव्य तरंगें", correct: true },
            { text: "सूक्ष्म तरंगें", correct: false },
            { text: "रेडियो तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पराश्रव्य तरंगों (Ultrasound waves) की आवृत्ति मानव श्रवण की सीमा से अधिक होती है और वे शरीर के ऊतकों से परावर्तित होकर चित्र बनाती हैं।"
    },
    {
        question: "प्रश्न 39. प्रतिध्वनि सुनने के लिए सतह कैसी होनी चाहिए?",
        answers: shuffle([
            { text: "बड़ी, कठोर और ध्वनि की अच्छी अवशोषक", correct: false },
            { text: "छोटी, नरम और ध्वनि की अच्छी परावर्तक", correct: false },
            { text: "बड़ी, कठोर और ध्वनि की अच्छी परावर्तक", correct: true },
            { text: "छोटी, नरम और ध्वनि की अच्छी अवशोषक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पष्ट प्रतिध्वनि के लिए, सतह का बड़ा होना आवश्यक है ताकि पर्याप्त ध्वनि ऊर्जा परावर्तित हो सके, और कठोर होना चाहिए ताकि ऊर्जा अवशोषित न हो।"
    },
    {
        question: "प्रश्न 40. संगीत के पैमाने 'सा, रे, ग, म, प, ध, नि' की विभिन्न ध्वनियों में क्या भिन्न होता है?",
        answers: shuffle([
            { text: "प्रबलता", correct: false },
            { text: "आवृत्ति", correct: true },
            { text: "गुणवत्ता", correct: false },
            { text: "गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संगीत में प्रत्येक सुर की एक विशिष्ट आवृत्ति (तारत्व) होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सा' से 'नि' तक जाने पर आवृत्ति बढ़ती जाती है।"
    },
    {
        question: "प्रश्न 41. अनुनाद की घटना को किसके द्वारा प्रदर्शित किया जा सकता है?",
        answers: shuffle([
            { text: "दो भिन्न आवृत्तियों के स्वरित्र द्विभुज द्वारा", correct: false },
            { text: "दो समान आवृत्तियों के स्वरित्र द्विभुज द्वारा", correct: true },
            { text: "एक प्रकाश स्रोत और एक प्रिज्म द्वारा", correct: false },
            { text: "एक चुंबक और एक कंपास द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि समान आवृत्ति के दो स्वरित्र द्विभुज (Tuning Forks) पास-पास रखे जाएं और एक को कंपित किया जाए, तो अनुनाद के कारण दूसरा भी स्वतः कंपित होने लगता है।"
    },
    {
        question: "प्रश्न 42. वह प्रणोदित दोलन जिसमें अवमंदन नगण्य होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "अवमंदित दोलन", correct: false },
            { text: "पोषित दोलन", correct: true },
            { text: "मुक्त दोलन", correct: false },
            { text: "सरल आवर्त गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोषित दोलनों (Undamped Oscillations) में, ऊर्जा की हानि की भरपाई बाहरी स्रोत द्वारा लगातार की जाती है, जिससे आयाम स्थिर बना रहता है।"
    },
    {
        question: "प्रश्न 43. ध्वनि की प्रबलता किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "तरंग के आयाम पर", correct: true },
            { text: "तरंग की आवृत्ति पर", correct: false },
            { text: "तरंग की गति पर", correct: false },
            { text: "तरंग के तरंगदैर्ध्य पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि तरंग का आयाम जितना अधिक होगा, ध्वनि उतनी ही प्रबल या तेज होगी।"
    },
    {
        question: "प्रश्न 44. किस तापमान पर हवा में ध्वनि की गति अधिकतम होगी?",
        answers: shuffle([
            { text: "0 डिग्री सेल्सियस", correct: false },
            { text: "20 डिग्री सेल्सियस", correct: false },
            { text: "40 डिग्री सेल्सियस", correct: true },
            { text: "-10 डिग्री सेल्सियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैसों में ध्वनि की गति तापमान के वर्गमूल के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> तापमान बढ़ने पर ध्वनि की गति भी बढ़ती है।"
    },
    {
        question: "प्रश्न 45. अनुनाद वक्र का शिखर क्या दर्शाता है?",
        answers: shuffle([
            { text: "अधिकतम अवमंदन", correct: false },
            { text: "अनुनाद की स्थिति में अधिकतम आयाम", correct: true },
            { text: "न्यूनतम आवृत्ति", correct: false },
            { text: "अधिकतम ऊर्जा हानि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनाद वक्र (आयाम बनाम आवृत्ति का ग्राफ) का शिखर उस आवृत्ति पर होता है जहां अनुनाद होता है, और शिखर की ऊंचाई अधिकतम आयाम को दर्शाती है।"
    },
    {
        question: "प्रश्न 46. एक कुएं में पत्थर गिराने के कुछ समय बाद छपाक की आवाज सुनाई देती है। यह समय अंतराल किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "कुएं की गहराई पर", correct: false },
            { text: "गुरुत्वीय त्वरण पर", correct: false },
            { text: "हवा में ध्वनि की गति पर", correct: false },
            { text: "पत्थर के द्रव्यमान पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त पतन में, वस्तु द्वारा लिया गया समय उसके द्रव्यमान पर निर्भर नहीं करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुल समय पत्थर के गिरने के समय और ध्वनि के ऊपर आने के समय का योग होता है।"
    },
    {
        question: "प्रश्न 47. यांत्रिक तरंगों को ऊर्जा स्थानांतरण के लिए किसकी आवश्यकता होती है?",
        answers: shuffle([
            { text: "विद्युत क्षेत्र", correct: false },
            { text: "चुंबकीय क्षेत्र", correct: false },
            { text: "एक भौतिक माध्यम", correct: true },
            { text: "निर्वात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यांत्रिक तरंगें, जैसे ध्वनि, माध्यम के कणों के दोलन के माध्यम से ऊर्जा का स्थानांतरण करती हैं।"
    },
    {
        question: "प्रश्न 48. ध्वनि बूम (Sonic Boom) की घटना कब होती है?",
        answers: shuffle([
            { text: "जब ध्वनि स्रोत स्थिर हो", correct: false },
            { text: "जब स्रोत की गति ध्वनि की गति से कम हो", correct: false },
            { text: "जब स्रोत की गति ध्वनि की गति से अधिक हो", correct: true },
            { text: "जब स्रोत की गति शून्य हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई वस्तु (जैसे सुपरसोनिक विमान) ध्वनि की गति से तेज चलती है, तो वह अपने पीछे एक शंक्वाकार आघात तरंग छोड़ती है, जिसे ध्वनि बूम के रूप में सुना जाता है।"
    },
    {
        question: "प्रश्न 49. एक बंद ऑर्गन पाइप में किस प्रकार के हार्मोनिक्स उत्पन्न होते हैं?",
        answers: shuffle([
            { text: "केवल सम हार्मोनिक्स", correct: false },
            { text: "केवल विषम हार्मोनिक्स", correct: true },
            { text: "सम और विषम दोनों हार्मोनिक्स", correct: false },
            { text: "कोई हार्मोनिक्स नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंद सिरे पर हमेशा एक निस्पंद (node) और खुले सिरे पर एक प्रस्पंद (antinode) बनने की शर्त के कारण, केवल विषम हार्मोनिक्स (जैसे 1, 3, 5, ...) ही संभव होते हैं।"
    },
    {
        question: "प्रश्न 50. प्रतिध्वनि का उपयोग नहीं किया जाता है:",
        answers: shuffle([
            { text: "समुद्र की गहराई मापने में", correct: false },
            { text: "मानव शरीर के आंतरिक अंगों की जांच में", correct: false },
            { text: "संगीत स्टूडियो में ध्वनि की गुणवत्ता बढ़ाने में", correct: true },
            { text: "तेल और गैस के भंडारों का पता लगाने में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संगीत स्टूडियो में, प्रतिध्वनि और अनुरणन को अवांछनीय माना जाता है, और उन्हें कम करने के लिए ध्वनि-अवशोषक सामग्रियों का उपयोग किया जाता है।"
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