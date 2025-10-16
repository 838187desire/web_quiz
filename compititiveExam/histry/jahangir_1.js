const questions = [
    {
        topHeading: "जहाँगीर पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जहाँगीर का जन्म कब हुआ था?",
        answers: shuffle([
            { text: "30 अगस्त 1569", correct: true },
            { text: "15 अक्टूबर 1542", correct: false },
            { text: "14 फरवरी 1556", correct: false },
            { text: "3 मार्च 1575", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर का जन्म 30 अगस्त 1569 को फतेहपुर सीकरी में स्थित शेख सलीम चिश्ती की कुटिया में हुआ था।"
    },
    {
        question: "प्रश्न 2. जहाँगीर की न्याय की जंजीर में कितनी घंटियाँ थीं?",
        answers: shuffle([
            { text: "12", correct: false },
            { text: "24", correct: false },
            { text: "60", correct: true },
            { text: "100", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 30 गज लंबी इस सोने की जंजीर में 60 घंटियाँ लगी थीं ताकि उनकी आवाज दूर तक सुनाई दे।"
    },
    {
        question: "प्रश्न 3. जहाँगीर की माता का क्या नाम था?",
        answers: shuffle([
            { text: "हमीदा बानो बेगम", correct: false },
            { text: "मरियम-उज-जमानी (हरका बाई)", correct: true },
            { text: "सलीमा सुल्तान बेगम", correct: false },
            { text: "रुकैया बेगम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर की माँ आमेर के राजा भारमल की पुत्री हरका बाई थीं, जिन्हें अकबर ने मरियम-उज-जमानी की उपाधि दी थी।"
    },
    {
        question: "प्रश्न 4. सलीम ने अकबर के विरुद्ध विद्रोह कब किया था?",
        answers: shuffle([
            { text: "1590", correct: false },
            { text: "1599", correct: true },
            { text: "1602", correct: false },
            { text: "1605", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1599 में जब अकबर असीरगढ़ अभियान में व्यस्त था, तब सलीम ने इलाहाबाद में जाकर स्वयं को स्वतंत्र शासक घोषित कर दिया था।"
    },
    {
        question: "प्रश्न 5. सलीम के कहने पर अबुल फजल की हत्या किसने की थी?",
        answers: shuffle([
            { text: "वीर सिंह बुंदेला", correct: true },
            { text: "राजा मान सिंह", correct: false },
            { text: "महाबत खाँ", correct: false },
            { text: "अब्दुर रहीम खान-ए-खाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1602 में, जब अबुल फजल दक्कन से वापस आ रहे थे, तब सलीम के इशारे पर ओरछा के सरदार वीर सिंह बुंदेला ने उनकी हत्या कर दी।"
    },
    {
        question: "प्रश्न 6. जहाँगीर का राज्याभिषेक आगरा में कब हुआ था?",
        answers: shuffle([
            { text: "अक्टूबर 1605", correct: false },
            { text: "नवंबर 1605", correct: true },
            { text: "दिसंबर 1605", correct: false },
            { text: "जनवरी 1606", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर की मृत्यु के बाद, 3 नवंबर 1605 को सलीम ने 'नूर-उद-दीन मुहम्मद जहाँगीर बादशाह गाजी' की उपाधि धारण कर आगरा के किले में अपना राज्याभिषेक करवाया।"
    },
    {
        question: "प्रश्न 7. 'जहाँगीर' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "विश्व का प्रकाश", correct: false },
            { text: "विश्व विजेता", correct: true },
            { text: "न्याय का राजा", correct: false },
            { text: "भाग्यशाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फारसी में 'जहाँ' का अर्थ विश्व और 'गीर' का अर्थ विजेता होता है, अतः जहाँगीर का अर्थ 'विश्व विजेता' है।"
    },
    {
        question: "प्रश्न 8. बादशाह बनने के बाद जहाँगीर ने जो 12 अध्यादेश (आइन-ए-जहाँगीरी) जारी किए, उनमें से एक क्या था?",
        answers: shuffle([
            { text: "सती प्रथा पर प्रतिबंध", correct: false },
            { text: "शराब और अन्य मादक पदार्थों की बिक्री पर प्रतिबंध", correct: true },
            { text: "जजिया कर को पुनः लागू करना", correct: false },
            { text: "बाल विवाह पर रोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने गद्दी पर बैठते ही जन-कल्याण के लिए 12 आदेश जारी किए, जिसमें शराब और भांग जैसे नशीले पदार्थों के उत्पादन और बिक्री पर रोक लगाना भी शामिल था।"
    },
    {
        question: "प्रश्न 9. 'न्याय की जंजीर' (जंजीर-ए-अदल) किस मुगल सम्राट ने स्थापित की थी?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: true },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगज़ेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने आगरा के किले की शाहबुर्ज और यमुना तट पर स्थित पत्थर के खंभे के बीच एक सोने की जंजीर लगवाई थी, जिसे कोई भी फरियादी बजाकर सीधे बादशाह से न्याय की गुहार लगा सकता था।"
    },
    {
        question: "प्रश्न 10. जहाँगीर के सबसे बड़े पुत्र का क्या नाम था जिसने 1606 में विद्रोह किया था?",
        answers: shuffle([
            { text: "खुर्रम", correct: false },
            { text: "परवेज़", correct: false },
            { text: "शहरयार", correct: false },
            { text: "खुसरौ मिर्ज़ा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर के गद्दी पर बैठने के कुछ महीने बाद ही उसके सबसे बड़े बेटे खुसरौ ने विद्रोह कर दिया और वह आगरा से भागकर पंजाब पहुँच गया।"
    },
    {
        question: "प्रश्न 11. खुसरौ के विद्रोह को किस स्थान पर हुए युद्ध में दबा दिया गया?",
        answers: shuffle([
            { text: "लाहौर का युद्ध", correct: false },
            { text: "सरहिंद का युद्ध", correct: false },
            { text: "भैरोवाल का युद्ध", correct: true },
            { text: "पानीपत का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर की शाही सेना ने जालंधर के पास भैरोवाल नामक स्थान पर खुसरौ की सेना को पराजित किया, जिसके बाद खुसरौ को पकड़ लिया गया।"
    },
    {
        question: "प्रश्न 12. जहाँगीर ने किसके बारे में कहा था कि \"मैं बता सकता हूँ कि एक पेंटिंग में किस चित्रकार ने भौंह बनाई है और किसने आँख\"?",
        answers: shuffle([
            { text: "अपनी चित्रकला की समझ के बारे में", correct: true },
            { text: "अबुल हसन की कला के बारे में", correct: false },
            { text: "उस्ताद मंसूर की कला के बारे false में", correct: false },
            { text: "यूरोपीय चित्रकला के बारे में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथन जहाँगीर के चित्रकला के ज्ञान और उसकी पारखी नजर को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका दावा था कि यदि एक ही चित्र को कई कलाकारों ने मिलकर बनाया हो, तो वह बता सकता है कि कौन सा हिस्सा किस कलाकार ने बनाया है।"
    },
    {
        question: "प्रश्न 13. जहाँगीर ने मेवाड़ के किस राणा के विरुद्ध सैन्य अभियान भेजा था?",
        answers: shuffle([
            { text: "महाराणा प्रताप", correct: false },
            { text: "राणा उदय सिंह", correct: false },
            { text: "राणा अमर सिंह", correct: true },
            { text: "राणा राज सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराणा प्रताप के पुत्र राणा अमर सिंह ने मुगलों से संघर्ष जारी रखा।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने बादशाह बनने के बाद उनके विरुद्ध कई अभियान भेजे।"
    },
    {
        question: "प्रश्न 14. मुगल-मेवाड़ संधि कब हुई थी?",
        answers: shuffle([
            { text: "1605", correct: false },
            { text: "1610", correct: false },
            { text: "1615", correct: true },
            { text: "1620", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई अभियानों के बाद, अंततः 1615 में शहजादा खुर्रम (शाहजहाँ) के प्रयासों से राणा अमर सिंह और जहाँगीर के बीच एक सम्मानजनक संधि हुई।"
    },
    {
        question: "प्रश्न 15. मुगल-मेवाड़ संधि की एक महत्वपूर्ण शर्त क्या थी?",
        answers: shuffle([
            { text: "राणा मुगलों को अपनी बेटी देगा", correct: false },
            { text: "राणा मुगल दरबार में व्यक्तिगत रूप से उपस्थित होने के लिए बाध्य नहीं होगा", correct: true },
            { text: "चित्तौड़ का किला मुगलों के पास रहेगा", correct: false },
            { text: "राणा इस्लाम स्वीकार करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संधि की शर्तों के अनुसार, राणा ने मुगलों की अधीनता स्वीकार कर ली, लेकिन उसे व्यक्तिगत रूप से मुगल दरबार में हाजिर होने से छूट दी गई।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके स्थान पर उसका पुत्र कर्ण सिंह दरबार में उपस्थित हुआ।"
    },
    {
        question: "प्रश्न 16. जहाँगीर के शासनकाल की सबसे बड़ी सैन्य सफलता किसे माना जाता है?",
        answers: shuffle([
            { text: "मेवाड़ पर विजय", correct: false },
            { text: "अहमदनगर का विलय", correct: false },
            { text: "कांगड़ा किले पर विजय", correct: true },
            { text: "कंधार पर पुनः अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1620 में, जहाँगीर की सेना ने पंजाब में स्थित कांगड़ा के अजेय माने जाने वाले किले पर विजय प्राप्त की, जिसे अकबर भी नहीं जीत सका था।"
    },
    {
        question: "प्रश्न 17. दक्कन में जहाँगीर का संघर्ष मुख्य रूप से किस राज्य के साथ हुआ?",
        answers: shuffle([
            { text: "गोलकुंडा", correct: false },
            { text: "बीजापुर", correct: false },
            { text: "अहमदनगर", correct: true },
            { text: "खानदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कन में जहाँगीर को अहमदनगर के योग्य वजीर मलिक अम्बर के कड़े प्रतिरोध का सामना करना पड़ा।"
    },
    {
        question: "प्रश्न 18. मलिक अम्बर कौन था?",
        answers: shuffle([
            { text: "बीजापुर का सुल्तान", correct: false },
            { text: "गोलकुंडा का सेनापति", correct: false },
            { text: "अहमदनगर का एक अबीसीनियाई गुलाम और पेशवा (वजीर)", correct: true },
            { text: "एक मराठा सरदार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मलिक अम्बर एक असाधारण सैन्य रणनीतिकार और प्रशासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने दक्कन में छापामार (गुरिल्ला) युद्ध पद्धति को लोकप्रिय बनाया और मुगलों को कड़ी चुनौती दी।"
    },
    {
        question: "प्रश्न 19. शहजादा खुर्रम को 'शाहजहाँ' की उपाधि किस उपलक्ष्य में दी गई?",
        answers: shuffle([
            { text: "मेवाड़ विजय", correct: false },
            { text: "कांगड़ा विजय", correct: false },
            { text: "दक्कन में आंशिक सफलता", correct: true },
            { text: "खुसरौ के विद्रोह को दबाने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1617 में, जब खुर्रम ने अहमदनगर के साथ एक अस्थायी संधि करने में सफलता प्राप्त की, तो जहाँगीर ने प्रसन्न होकर उसे 'शाहजहाँ' (विश्व का राजा) की उपाधि प्रदान की।"
    },
    {
        question: "प्रश्न 20. जहाँगीर ने किससे विवाह किया था जो बाद में 'नूरजहाँ' के नाम से प्रसिद्ध हुई?",
        answers: shuffle([
            { text: "जगत गोसाईं", correct: false },
            { text: "साहिब-ए-जमाल", correct: false },
            { text: "मेहरुन्निसा", correct: true },
            { text: "मान बाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1611 में, जहाँगीर ने शेर अफगन की विधवा मेहरुन्निसा से विवाह किया और उसे पहले 'नूरमहल' (महल का प्रकाश) और बाद में 'नूरजहाँ' (विश्व का प्रकाश) की उपाधि दी।"
    },
    {
        question: "प्रश्न 21. नूरजहाँ का वास्तविक नाम क्या था?",
        answers: shuffle([
            { text: "अर्जुमंद बानो बेगम", correct: false },
            { text: "लाडली बेगम", correct: false },
            { text: "मेहरुन्निसा", correct: true },
            { text: "जहाँआरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नूरजहाँ एक फारसी अमीर मिर्ज़ा गियास बेग की पुत्री थी और उसका असली नाम मेहरुन्निसा था।"
    },
    {
        question: "प्रश्न 22. 'नूरजहाँ गुट' या 'जुंटा' में कौन शामिल नहीं था?",
        answers: shuffle([
            { text: "नूरजहाँ", correct: false },
            { text: "आसफ खाँ", correct: false },
            { text: "एत्मादुद्दौला (मिर्ज़ा गियास बेग)", correct: false },
            { text: "शहजादा खुर्रम (शाहजहाँ)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में खुर्रम इस गुट का हिस्सा था, लेकिन बाद में नूरजहाँ द्वारा अपने दामाद शहरयार को बढ़ावा दिए जाने के कारण वह इस गुट से अलग हो गया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस गुट में मुख्य रूप से नूरजहाँ, उसके पिता एत्मादुद्दौला और भाई आसफ खाँ शामिल थे।"
    },
    {
        question: "प्रश्न 23. जहाँगीर के शासनकाल में किस महत्वपूर्ण प्रांत पर फारस (ईरान) ने पुनः अधिकार कर लिया था?",
        answers: shuffle([
            { text: "काबुल", correct: false },
            { text: "सिंध", correct: false },
            { text: "कंधार", correct: true },
            { text: "बलूचिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1622 में, फारस के शाह अब्बास ने कंधार के महत्वपूर्ण किले पर कब्जा कर लिया, जो मुगलों के लिए एक बड़ी रणनीतिक और प्रतिष्ठा की हानि थी।"
    },
    {
        question: "प्रश्न 24. किस अंग्रेज दूत ने जहाँगीर के दरबार का दौरा किया और व्यापारिक रियायतें प्राप्त करने का प्रयास किया?",
        answers: shuffle([
            { text: "a) कैप्टन हॉकिन्स", correct: false },
            { text: "b) सर थॉमस रो", correct: false },
            { text: "a), b)  दोनों", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैप्टन विलियम हॉकिन्स 1608 में और सर थॉमस रो 1615 में इंग्लैंड के राजा जेम्स प्रथम के दूत के रूप में जहाँगीर के दरबार में आए थे।"
    },
    {
        question: "प्रश्न 25. कैप्टन हॉकिन्स किस जहाज से भारत आया था?",
        answers: shuffle([
            { text: "रेड ड्रैगन", correct: false },
            { text: "हेक्टर", correct: true },
            { text: "मेफ्लावर", correct: false },
            { text: "विक्टोरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैप्टन हॉकिन्स 'हेक्टर' नामक जहाज से 1608 में सूरत के बंदरगाह पर उतरा था।"
    },
    {
        question: "प्रश्न 26. जहाँगीर ने किस अंग्रेज को 'इंग्लिश खान' या 'फिरंगी खान' की उपाधि और 400 का मनसब प्रदान किया था?",
        answers: shuffle([
            { text: "सर थॉमस रो", correct: false },
            { text: "विलियम फिंच", correct: false },
            { text: "कैप्टन विलियम हॉकिन्स", correct: true },
            { text: "जॉन मिल्डेनहॉल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर, हॉकिन्स की तुर्की भाषा बोलने की क्षमता से बहुत प्रभावित हुआ और उसे यह उपाधि तथा मनसब प्रदान किया।"
    },
    {
        question: "प्रश्न 27. सर थॉमस रो का भारत आने का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "मुगल दरबार की भव्यता देखना", correct: false },
            { text: "भारत में ईसाई धर्म का प्रचार करना", correct: false },
            { text: "ईस्ट इंडिया कंपनी के लिए एक व्यापारिक संधि करना", correct: true },
            { text: "भारत का नक्शा तैयार करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर थॉमस रो का मुख्य लक्ष्य जहाँगीर से एक शाही फरमान प्राप्त करना था ताकि अंग्रेज सूरत और अन्य स्थानों पर फैक्ट्रियाँ स्थापित कर सकें और व्यापार कर सकें।"
    },
    {
        question: "प्रश्न 28. मुगल चित्रकला किसके शासनकाल में अपने चरमोत्कर्ष पर पहुँची?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: true },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगज़ेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर स्वयं चित्रकला का एक महान पारखी था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके काल में चित्रकला में यथार्थवाद, प्राकृतिक दृश्यों (पशु-पक्षी, फूल) का चित्रण और छवि-चित्रण (पोर्ट्रेट) अपने शिखर पर पहुँच गया।"
    },
    {
        question: "प्रश्न 29. जहाँगीर के दरबार का सर्वश्रेष्ठ चित्रकार कौन था, जिसे 'नादिर-उल-असर' (युग का आश्चर्य) की उपाधि दी गई थी?",
        answers: shuffle([
            { text: "बिशन दास", correct: false },
            { text: "अबुल हसन", correct: false },
            { text: "उस्ताद मंसूर", correct: true },
            { text: "मनोहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस्ताद मंसूर पक्षियों, पशुओं और फूलों के चित्रण में अद्वितीय थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका बनाया 'साइबेरियन सारस' और 'बंगाल का पुष्प' विश्व प्रसिद्ध हैं।"
    },
    {
        question: "प्रश्न 30. जहाँगीर ने किस चित्रकार को 'नादिर-उज-जमाँ' (युग का शिरोमणि) की उपाधि दी थी?",
        answers: shuffle([
            { text: "अबुल हसन", correct: true },
            { text: "बिशन दास", correct: false },
            { text: "दौलत", correct: false },
            { text: "गोवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अबुल हसन व्यक्ति-चित्रण (पोर्ट्रेट) में माहिर था।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँगीर की आत्मकथा 'तुजुक-ए-जहाँगीरी' के मुखपृष्ठ का चित्र उसी ने बनाया था।"
    },
    {
        question: "प्रश्न 31. जहाँगीर ने अपनी आत्मकथा किस नाम से लिखी?",
        answers: shuffle([
            { text: "जहाँगीरनामा", correct: false },
            { text: "तुजुक-ए-जहाँगीरी", correct: true },
            { text: "इकबालनामा-ए-जहाँगीरी", correct: false },
            { text: "बादशाहनामा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने अपनी आत्मकथा 'तुजुक-ए-जहाँगीरी' फारसी भाषा में लिखी।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में इसे मोतमिद खाँ ने पूरा किया।"
    },
    {
        question: "प्रश्न 32. एत्मादुद्दौला का मकबरा आगरा में किसने बनवाया था?",
        answers: shuffle([
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: false },
            { text: "नूरजहाँ", correct: true },
            { text: "आसफ खाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नूरजहाँ ने अपने पिता मिर्ज़ा गियास बेग (जिन्हें एत्मादुद्दौला की उपाधि मिली थी) की याद में यह मकबरा बनवाया था।"
    },
    {
        question: "प्रश्न 33. किस इमारत में पहली बार बड़े पैमाने पर 'पिएत्रा ड्यूरा' (संगमरमर पर जवाहरात की जड़ावट) का प्रयोग किया गया?",
        answers: shuffle([
            { text: "हुमायूँ का मकबरा", correct: false },
            { text: "बुलंद दरवाजा", correct: false },
            { text: "एत्मादुद्दौला का मकबरा", correct: true },
            { text: "ताजमहल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पहली पूर्णतः संगमरमर से बनी मुगल इमारत थी और इसमें पहली बार पिएत्रा ड्यूरा तकनीक का व्यापक उपयोग किया गया, जो बाद में ताजमहल की एक प्रमुख विशेषता बनी।"
    },
    {
        question: "प्रश्न 34. जहाँगीर के किस पुत्र ने 1623 में विद्रोह किया था?",
        answers: shuffle([
            { text: "खुसरौ", correct: false },
            { text: "परवेज़", correct: false },
            { text: "खुर्रम (शाहजहाँ)", correct: true },
            { text: "शहरयार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नूरजहाँ के बढ़ते प्रभाव और कंधार अभियान पर जाने के आदेश को लेकर हुए मतभेद के कारण शाहजहाँ ने अपने पिता के विरुद्ध विद्रोह कर दिया।"
    },
    {
        question: "प्रश्न 35. जहाँगीर के किस वफादार सेनापति ने 1626 में विद्रोह कर बादशाह और नूरजहाँ को बंदी बना लिया था?",
        answers: shuffle([
            { text: "आसफ खाँ", correct: false },
            { text: "महाबत खाँ", correct: true },
            { text: "अब्दुल्ला खाँ", correct: false },
            { text: "खान-ए-जहाँ लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नूरजहाँ द्वारा अपमानित किए जाने और उसकी शक्ति को कम करने के प्रयासों के कारण महाबत खाँ ने विद्रोह कर दिया और झेलम नदी के तट पर शाही शिविर पर कब्जा कर लिया।"
    },
    {
        question: "प्रश्न 36. जहाँगीर की मृत्यु कब और कहाँ हुई?",
        answers: shuffle([
            { text: "1625, आगरा", correct: false },
            { text: "1626, काबुल", correct: false },
            { text: "1627, लाहौर के पास", correct: true },
            { text: "1628, दिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर कश्मीर से वापस लौट रहा था, तभी रास्ते में राजौरी के पास भिम्बर नामक स्थान पर 1627 में उसकी मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 37. जहाँगीर का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "काबुल", correct: false },
            { text: "शाहदरा (लाहौर)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर को लाहौर के निकट शाहदरा में रावी नदी के किनारे एक बाग में दफनाया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस मकबरे का निर्माण नूरजहाँ ने शुरू करवाया था।"
    },
    {
        question: "प्रश्न 38. जहाँगीर के दरबार में आने वाला पहला अंग्रेज कौन था?",
        answers: shuffle([
            { text: "सर थॉमस रो", correct: false },
            { text: "कैप्टन विलियम हॉकिन्स", correct: true },
            { text: "एडवर्ड टेरी", correct: false },
            { text: "जॉन मिल्डेनहॉल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हॉकिन्स 1608 में जहाँगीर के दरबार में पहुँचा था, जबकि रो 1615 में आया।"
    },
    {
        question: "प्रश्न 39. किस मुगल शासक ने तम्बाकू के प्रयोग पर प्रतिबंध लगाया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: true },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगज़ेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तम्बाकू के दुष्प्रभावों को देखते हुए जहाँगीर ने एक शाही आदेश द्वारा इसके उपयोग पर पाबंदी लगा दी थी।"
    },
    {
        question: "प्रश्न 40. जहाँगीर ने किस राजपूत सरदार को दक्कन में 5000 का मनसब प्रदान किया?",
        answers: shuffle([
            { text: "राजा मान सिंह", correct: false },
            { text: "राजा जय सिंह", correct: false },
            { text: "राजा गज सिंह", correct: true },
            { text: "राय सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मारवाड़ के राजा गज सिंह ने दक्कन में मुगलों की बहुत सेवा की, जिससे प्रसन्न होकर जहाँगीर ने उन्हें एक उच्च मनसब प्रदान किया।"
    },
    {
        question: "प्रश्न 41. जहाँगीर की पहली पत्नी मान बाई (शाह बेगम) किसकी बहन थी?",
        answers: shuffle([
            { text: "राजा भगवंत दास", correct: false },
            { text: "राजा जय सिंह", correct: false },
            { text: "राजा भारमल", correct: false },
            { text: "राजा मान सिंह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मान बाई आमेर के राजा भगवंत दास की पुत्री और अकबर के प्रसिद्ध सेनापति राजा मान सिंह की बहन थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> खुसरौ मिर्ज़ा इन्हीं का पुत्र था।"
    },
    {
        question: "प्रश्न 42. किस रानी ने जहाँगीर की शराब की आदतों से तंग आकर आत्महत्या कर ली थी?",
        answers: shuffle([
            { text: "जगत गोसाईं", correct: false },
            { text: "नूरजहाँ", correct: false },
            { text: "मान बाई (शाह बेगम)", correct: true },
            { text: "रुकैया बेगम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वह जहाँगीर की शराबखोरी और अपने पुत्र खुसरौ के विद्रोही स्वभाव से बहुत दुखी थी, जिसके कारण उसने अफीम खाकर आत्महत्या कर ली।"
    },
    {
        question: "प्रश्न 43. 'इकबालनामा-ए-जहाँगीरी' किसने लिखी?",
        answers: shuffle([
            { text: "जहाँगीर", correct: false },
            { text: "मोतमिद खाँ", correct: true },
            { text: "ख्वाजा कामगार", correct: false },
            { text: "इनायत खाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोतमिद खाँ बख्शी जहाँगीर के शासनकाल का एक आधिकारिक इतिहासकार था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने 'तुजुक-ए-जहाँगीरी' को पूरा करने के अलावा 'इकबालनामा-ए-जहाँगीरी' भी लिखी।"
    },
    {
        question: "प्रश्न 44. जहाँगीर के समय किस शहर को 'गर्द-आबाद' (धूल भरा शहर) कहा जाता था?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "अहमदाबाद", correct: true },
            { text: "पटना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर जब गुजरात गया तो अहमदाबाद की धूल-भरी और गर्म जलवायु से इतना परेशान हुआ कि उसने इसे 'गर्द-आबाद' और 'जहन्नुमाबाद' (नरक का शहर) कहा।"
    },
    {
        question: "प्रश्न 45. नूरजहाँ का पहला पति कौन था?",
        answers: shuffle([
            { text: "आसफ खाँ", correct: false },
            { text: "महाबत खाँ", correct: false },
            { text: "अली कुली बेग (शेर अफगन)", correct: true },
            { text: "वीर सिंह बुंदेला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरुन्निसा का पहला विवाह एक ईरानी साहसी अली कुली बेग से हुआ था, जिसे शेर मारने के कारण जहाँगीर ने 'शेर अफगन' की उपाधि दी थी।"
    },
    {
        question: "प्रश्न 46. नूरजहाँ की पुत्री लाडली बेगम का विवाह किससे हुआ था?",
        answers: shuffle([
            { text: "खुर्रम", correct: false },
            { text: "खुसरौ", correct: false },
            { text: "परवेज़", correct: false },
            { text: "शहरयार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नूरजहाँ ने अपनी बेटी (जो शेर अफगन से थी) लाडली बेगम का विवाह जहाँगीर के सबसे छोटे बेटे शहरयार से कर दिया ताकि वह उसे अगला बादशाह बना सके।"
    },
    {
        question: "प्रश्न 47. जहाँगीर के किस पुत्र को 'नकारा' और 'अयोग्य' माना जाता था?",
        answers: shuffle([
            { text: "खुर्रम", correct: false },
            { text: "परवेज़", correct: false },
            { text: "शहरयार", correct: true },
            { text: "खुसरौ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शहरयार को शासन और सैन्य मामलों में कोई विशेष योग्यता नहीं थी, इसीलिए दरबारी अमीर उसे 'शहरयार-ए-नासुदानी' (अयोग्य शहरयार) कहते थे।"
    },
    {
        question: "प्रश्न 48. जहाँगीर के काल में 'दो-अस्पा' और 'सी-अस्पा' प्रथा किसने शुरू की?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: true },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगज़ेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मनसबदारी व्यवस्था में एक सुधार था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके तहत, किसी मनसबदार को बिना जात पद बढ़ाए, उसके सवार पद को दोगुना (दो-अस्पा) या तिगुना (सी-अस्पा) करने की अनुमति थी, जिससे वह अधिक सैनिक रख सकता था।"
    },
    {
        question: "प्रश्न 49. 'तुजुक-ए-जहाँगीरी' किस भाषा में लिखी गई है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर की आत्मकथा 'बाबरनामा' के विपरीत, जो तुर्की में थी, जहाँगीर ने अपनी आत्मकथा मुगल दरबार की आधिकारिक भाषा फारसी में लिखी।"
    },
    {
        question: "प्रश्न 50. जहाँगीर ने किस हिंदू त्योहार में उत्साह से भाग लिया था?",
        answers: shuffle([
            { text: "दिवाली", correct: false },
            { text: "होली", correct: false },
            { text: "रक्षाबंधन", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने पिता अकबर की तरह, जहाँगीर भी एक उदार शासक था और वह दिवाली, होली, दशहरा और रक्षाबंधन जैसे हिंदू त्योहारों में भाग लेता था और उन्हें मनाता था।"
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