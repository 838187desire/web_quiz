const questions = [
    {
        topHeading: "शाहजहाँ पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. शाहजहाँ का बचपन का नाम क्या था?",
        answers: shuffle([
            { text: "सलीम", correct: false },
            { text: "खुसरो", correct: false },
            { text: "खुर्रम", correct: true },
            { text: "शहरयार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ का मूल नाम शहजादा खुर्रम था।<br><br><i class='fa-solid fa-angles-right icon'></i> 'शाहजहाँ' की उपाधि उसने बादशाह बनने के बाद धारण की।"
    },
    {
        question: "प्रश्न 2. शाहजहाँ का जन्म कब और कहाँ हुआ था?",
        answers: shuffle([
            { text: "1592, लाहौर", correct: true },
            { text: "1595, आगरा", correct: false },
            { text: "1590, दिल्ली", correct: false },
            { text: "1600, फतेहपुर सीकरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ का जन्म 5 जनवरी 1592 को लाहौर (आधुनिक पाकिस्तान) में हुआ था।"
    },
    {
        question: "प्रश्न 3. शाहजहाँ के दरबार में एक फ्रांसीसी चिकित्सक कौन था?",
        answers: shuffle([
            { text: "टैवर्नियर", correct: false },
            { text: "पीटर मुंडी", correct: false },
            { text: "मनुची", correct: false },
            { text: "फ्रांस्वा बर्नियर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बर्नियर एक चिकित्सक था और उसने दारा शिकोह तथा बाद में मुगल दरबार के कई अमीरों के लिए काम किया।"
    },
    {
        question: "प्रश्न 4. शाहजहाँ की माँ 'जगत गोसाईं' किस राजपूत वंश की राजकुमारी थीं?",
        answers: shuffle([
            { text: "मेवाड़ के सिसोदिया", correct: false },
            { text: "आमेर के कछवाहा", correct: false },
            { text: "मारवाड़ (जोधपुर) के राठौड़", correct: true },
            { text: "जैसलमेर के भाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगत गोसाईं मारवाड़ के शासक राजा उदय सिंह की पुत्री थीं।"
    },
    {
        question: "प्रश्न 5. जहाँगीर ने शहजादा खुर्रम को 'शाहजहाँ' की उपाधि किस विजय के उपलक्ष्य में दी थी?",
        answers: shuffle([
            { text: "मेवाड़ विजय", correct: false },
            { text: "कांगड़ा विजय", correct: false },
            { text: "दक्कन विजय (अहमदनगर संधि)", correct: true },
            { text: "कंधार विजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1617 में, जब खुर्रम ने अहमदनगर के खिलाफ सफल अभियान चलाकर उन्हें संधि के लिए विवश किया, तो इस सफलता से प्रसन्न होकर जहाँगीर ने उसे 'शाहजहाँ' (दुनिया का राजा) की उपाधि प्रदान की।"
    },
    {
        question: "प्रश्न 6. शाहजहाँ का राज्याभिषेक कब और कहाँ हुआ?",
        answers: shuffle([
            { text: "1627, लाहौर", correct: false },
            { text: "1628, आगरा", correct: true },
            { text: "1628, दिल्ली", correct: false },
            { text: "1630, बुरहानपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर की मृत्यु के बाद उत्तराधिकार का संघर्ष जीतने के पश्चात, शाहजहाँ ने फरवरी 1628 में आगरा में अपना राज्याभिषेक करवाया।"
    },
    {
        question: "प्रश्न 7. शाहजहाँ ने सिंहासन पर बैठने के लिए अपने किस भाई की हत्या करवाई थी?",
        answers: shuffle([
            { text: "खुसरो मिर्जा", correct: false },
            { text: "शहजादा परवेज", correct: false },
            { text: "शहरयार", correct: false },
            { text: " सभी (और अन्य प्रतिद्वंद्वी)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने ससुर आसफ खान की मदद से, शाहजहाँ ने अपने भाई शहरयार, परवेज के पुत्रों और खुसरो के पुत्रों सहित सिंहासन के सभी संभावित दावेदारों को समाप्त करवा दिया था।"
    },
    {
        question: "प्रश्न 8. शाहजहाँ के राज्यारोहण में किस अमीर ने उसकी सबसे अधिक मदद की?",
        answers: shuffle([
            { text: "महाबत खान", correct: false },
            { text: "आसफ खान", correct: true },
            { text: "अब्दुल्ला खान", correct: false },
            { text: "खानेजहाँ लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आसफ खान, जो नूरजहाँ का भाई और शाहजहाँ का ससुर (मुमताज महल का पिता) था, ने अपनी कूटनीति से शाहजहाँ के लिए सिंहासन का मार्ग प्रशस्त किया।"
    },
    {
        question: "प्रश्न 9. शाहजहाँ ने गद्दी पर बैठने के बाद कौन सी उपाधि धारण की?",
        answers: shuffle([
            { text: "आलमगीर", correct: false },
            { text: "अबुल मुजफ्फर शहाबुद्दीन मुहम्मद साहिब किरन-ए-सानी", correct: true },
            { text: "नुरुद्दीन मुहम्मद बादशाह गाजी", correct: false },
            { text: "सुल्तान-ए-आजम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह शाहजहाँ की पूरी शाही उपाधि थी।<br><br><i class='fa-solid fa-angles-right icon'></i> 'साहिब किरन-ए-सानी' का अर्थ है 'दूसरा तैमूर'।"
    },
    {
        question: "प्रश्न 10. 'ताजगंज' या 'मुमताजाबाद' क्या था?",
        answers: shuffle([
            { text: "एक महल", correct: false },
            { text: "एक मस्जिद", correct: false },
            { text: "ताजमहल के आसपास बसाया गया एक शहर या बाजार", correct: true },
            { text: "एक बाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताजमहल के निर्माण में लगे कारीगरों, मजदूरों और व्यापारियों के लिए तथा मकबरे के रखरखाव के खर्च के लिए शाहजहाँ ने उसके आसपास यह कस्बा बसाया था।"
    },
    {
        question: "प्रश्न 11. किस मुगल बादशाह के शासनकाल को 'मुगल वास्तुकला का स्वर्ण युग' कहा जाता है?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ ने ताजमहल, दिल्ली का लाल किला, जामा मस्जिद जैसी अनेक भव्य और सुंदर इमारतों का निर्माण करवाया, जिसके कारण उसके काल को वास्तुकला का स्वर्ण युग कहते हैं।"
    },
    {
        question: "प्रश्न 12. शाहजहाँ ने अपनी प्रिय पत्नी 'मुमताज महल' की याद में किस विश्व प्रसिद्ध मकबरे का निर्माण करवाया?",
        answers: shuffle([
            { text: "हुमायूँ का मकबरा", correct: false },
            { text: "बीबी का मकबरा", correct: false },
            { text: "ताजमहल", correct: true },
            { text: "एत्मादुद्दौला का मकबरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताजमहल आगरा में यमुना नदी के तट पर स्थित है, जो शाहजहाँ और मुमताज महल के प्रेम का प्रतीक है।"
    },
    {
        question: "प्रश्न 13. मुमताज महल का वास्तविक नाम क्या था?",
        answers: shuffle([
            { text: "मेहरुन्निसा", correct: false },
            { text: "लाडली बेगम", correct: false },
            { text: "अर्जुमंद बानो बेगम", correct: true },
            { text: "जहाँआरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुमताज महल, आसफ खान की पुत्री थीं और उनका मूल नाम अर्जुमंद बानो बेगम था।"
    },
    {
        question: "प्रश्न 14. मुमताज महल की मृत्यु कहाँ हुई थी?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "बुरहानपुर", correct: true },
            { text: "लाहौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1631 में, दक्कन में एक सैन्य अभियान के दौरान, बुरहानपुर (मध्य प्रदेश) में अपनी 14वीं संतान को जन्म देते समय मुमताज महल की मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 15. ताजमहल का निर्माण कार्य कब शुरू हुआ और कब पूरा हुआ?",
        answers: shuffle([
            { text: "1628 - 1648", correct: false },
            { text: "1631 - 1653", correct: true },
            { text: "1635 - 1658", correct: false },
            { text: "1630 - 1650", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताजमहल का निर्माण 1631 में शुरू हुआ और इसे पूरा होने में लगभग 22 वर्ष लगे।"
    },
    {
        question: "प्रश्न 16. ताजमहल के मुख्य वास्तुकार (डिजाइनर) के रूप में किसे जाना जाता है?",
        answers: shuffle([
            { text: "शाहजहाँ", correct: false },
            { text: "उस्ताद ईसा", correct: false },
            { text: "उस्ताद अहमद लाहौरी", correct: true },
            { text: "अमानत खान शिराजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि इसके निर्माण में कई वास्तुकारों का योगदान था, लेकिन समकालीन स्रोतों के अनुसार, उस्ताद अहमद लाहौरी को इसका प्रधान वास्तुकार माना जाता है।"
    },
    {
        question: "प्रश्न 17. ताजमहल के निर्माण के लिए सफेद संगमरमर कहाँ से लाया गया था?",
        answers: shuffle([
            { text: "ईरान से", correct: false },
            { text: "इटली से", correct: false },
            { text: "मकराना, राजस्थान से", correct: true },
            { text: "गुजरात से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताजमहल के लिए उत्कृष्ट गुणवत्ता का सफेद संगमरमर राजस्थान के नागौर जिले में स्थित मकराना की खानों से लाया गया था।"
    },
    {
        question: "प्रश्न 18. 'पिएत्रा ड्यूरा' (Pietra Dura) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार की चित्रकला", correct: false },
            { text: "संगमरमर पर बहुमूल्य पत्थरों की जड़ावट की कला", correct: true },
            { text: "एक प्रकार का संगीत", correct: false },
            { text: "एक वास्तुकला शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक सजावटी तकनीक है जिसमें संगमरमर में खांचे बनाकर उनमें कीमती और अर्ध-कीमती पत्थरों को फूलों और अन्य डिजाइनों में जड़ा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ताजमहल में इसका भव्य प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 19. शाहजहाँ ने अपनी राजधानी आगरा से दिल्ली कब स्थानांतरित की?",
        answers: shuffle([
            { text: "1630", correct: false },
            { text: "1638", correct: true },
            { text: "1648", correct: false },
            { text: "1650", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1638 में, शाहजहाँ ने दिल्ली में यमुना नदी के तट पर एक नई राजधानी 'शाहजहाँनाबाद' (पुरानी दिल्ली) की नींव रखी।"
    },
    {
        question: "प्रश्न 20. दिल्ली के 'लाल किले' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ ने अपनी नई राजधानी शाहजहाँनाबाद में लाल बलुआ पत्थर से इस भव्य किले का निर्माण करवाया, जो मुगल बादशाहों का मुख्य निवास स्थान बना।"
    },
    {
        question: "प्रश्न 21. दिल्ली की प्रसिद्ध 'जामा मस्जिद' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भारत की सबसे बड़ी मस्जिदों में से एक है, जिसका निर्माण शाहजहाँ ने 1650 से 1656 के बीच करवाया था।"
    },
    {
        question: "प्रश्न 22. शाहजहाँ ने 'फौजदार' के पद पर किसे नियुक्त किया?",
        answers: shuffle([
            { text: "राजस्व अधिकारियों को", correct: false },
            { text: "सैन्य कमांडरों को", correct: true },
            { text: "न्यायाधीशों को", correct: false },
            { text: "पुलिस अधिकारियों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फौजदार 'सरकार' (जिले) का मुख्य कार्यकारी और सैन्य अधिकारी होता था, जो कानून और व्यवस्था के लिए जिम्मेदार था।"
    },
    {
        question: "प्रश्न 23. मयूर सिंहासन में कौन सा प्रसिद्ध हीरा जड़ा हुआ था?",
        answers: shuffle([
            { text: "दरिया-ए-नूर", correct: false },
            { text: "होप डायमंड", correct: false },
            { text: "कोह-इ-नूर", correct: true },
            { text: "ओरलोव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध कोहिनूर हीरा मयूर सिंहासन के शीर्ष पर लगा हुआ था।"
    },
    {
        question: "प्रश्न 24. मयूर सिंहासन को भारत से कौन लूटकर ले गया था?",
        answers: shuffle([
            { text: "अहमद शाह अब्दाली", correct: false },
            { text: "तैमूर लंग", correct: false },
            { text: "नादिर शाह", correct: true },
            { text: "चंगेज खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1739 में, फारस के शासक नादिर शाह ने दिल्ली पर आक्रमण किया और मयूर सिंहासन तथा कोहिनूर हीरे को अपने साथ ईरान ले गया।"
    },
    {
        question: "प्रश्न 25. लाल किले के भीतर स्थित 'दीवान-ए-आम' और 'दीवान-ए-खास' का निर्माण किसने करवाया?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ ने लाल किले के अंदर आम जनता की सुनवाई के लिए दीवान-ए-आम और खास अमीरों तथा दूतों से मुलाकात के लिए दीवान-ए-खास का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 26. \"अगर फिरदौस बर रूये ज़मी अस्त, हमी अस्तो, हमी अस्तो, हमी अस्त\" (यदि पृथ्वी पर कहीं स्वर्ग है, तो यहीं है, यहीं है, यहीं है) - यह पंक्ति कहाँ अंकित है?",
        answers: shuffle([
            { text: "ताजमहल पर", correct: false },
            { text: "आगरा के किले पर", correct: false },
            { text: "दिल्ली के लाल किले के दीवान-ए-खास पर", correct: true },
            { text: "फतेहपुर सीकरी पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रसिद्ध फारसी कहावत दीवान-ए-खास की सुंदरता को बयां करती है।"
    },
    {
        question: "प्रश्न 27. शाहजहाँ के शासनकाल को मुगल साम्राज्य का 'स्वर्ण युग' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "केवल सैन्य विजय के कारण", correct: false },
            { text: "केवल धार्मिक सहिष्णुता के कारण", correct: false },
            { text: "शांति, समृद्धि और अभूतपूर्व स्थापत्य विकास के कारण", correct: true },
            { text: "केवल साहित्य के विकास के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसके काल में अपेक्षाकृत शांति बनी रही, साम्राज्य समृद्ध था और वास्तुकला तथा कला अपने चरम पर पहुँची, इसीलिए इसे स्वर्ण युग कहते हैं।"
    },
    {
        question: "प्रश्न 28. शाहजहाँ के शासनकाल में आने वाले फ्रांसीसी यात्री कौन थे?",
        answers: shuffle([
            { text: "रॉल्फ फिच और जॉन मिल्डेनहॉल", correct: false },
            { text: "कैप्टन हॉकिन्स और सर टॉमस रो", correct: false },
            { text: "फ्रांस्वा बर्नियर और जीन-बैप्टिस्ट टैवर्नियर", correct: true },
            { text: "निकोलो मनुची और पीटर मुंडी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बर्नियर एक चिकित्सक था और टैवर्नियर एक जौहरी था।<br><br><i class='fa-solid fa-angles-right icon'></i> इन दोनों ने शाहजहाँ के काल का विस्तृत और आलोचनात्मक वर्णन किया है।"
    },
    {
        question: "प्रश्न 29. आगरा के किले में स्थित 'मोती मस्जिद' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आगरा के किले के परिसर में पूरी तरह से सफेद संगमरमर से बनी इस खूबसूरत मस्जिद का निर्माण शाहजहाँ ने शाही दरबार के सदस्यों के लिए करवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> (ध्यान दें: दिल्ली के लाल किले की मोती मस्जिद औरंगजेब ने बनवाई थी)"
    },
    {
        question: "प्रश्न 30. 'चश्मा-ए-शाही', जो कश्मीर का एक मुगल बाग है, किसने बनवाया?",
        answers: shuffle([
            { text: "जहाँगीर", correct: false },
            { text: "नूरजहाँ", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "दारा शिकोह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस खूबसूरत बाग का निर्माण शाहजहाँ ने 1632 में करवाया था।"
    },
    {
        question: "प्रश्न 31. शाहजहाँ ने बीजापुर और गोलकुंडा के साथ क्या नीति अपनाई?",
        answers: shuffle([
            { text: "उन्हें पूरी तरह से जीत लिया", correct: false },
            { text: "उनसे संधि कर उन्हें मुगल आधिपत्य स्वीकार करने के लिए बाध्य किया", correct: true },
            { text: "उनके साथ मैत्रीपूर्ण गठबंधन किया", correct: false },
            { text: "उनकी ओर कोई ध्यान नहीं दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1636 में, शाहजहाँ ने इन दोनों सल्तनतों को एक संधि के लिए मजबूर किया, जिसके तहत उन्होंने मुगल संप्रभुता स्वीकार कर ली और वार्षिक कर देना शुरू कर दिया।"
    },
    {
        question: "प्रश्न 32. शाहजहाँ ने पुर्तगालियों को हुगली (बंगाल) से कब खदेड़ा?",
        answers: shuffle([
            { text: "1630", correct: false },
            { text: "1632", correct: true },
            { text: "1635", correct: false },
            { text: "1640", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुर्तगालियों द्वारा व्यापार का दुरुपयोग करने, लूटपाट करने और लोगों को जबरन ईसाई बनाने के कारण, शाहजहाँ ने बंगाल के गवर्नर कासिम खान को आदेश देकर 1632 में उन्हें हुगली से बाहर निकाल दिया।"
    },
    {
        question: "प्रश्न 33. शाहजहाँ के शासनकाल की सबसे बड़ी सैन्य विफलता क्या थी?",
        answers: shuffle([
            { text: "दक्कन अभियान", correct: false },
            { text: "पुर्तगालियों के खिलाफ अभियान", correct: false },
            { text: "बल्ख और बदख्शां (मध्य एशिया) अभियान", correct: true },
            { text: "बुंदेला विद्रोह का दमन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1646-47 में, शाहजहाँ ने अपने पूर्वजों की भूमि पर अधिकार करने के लिए मध्य एशिया में एक महंगा और असफल सैन्य अभियान चलाया, जिसमें मुगलों को भारी जन-धन की हानि हुई।"
    },
    {
        question: "प्रश्न 34. मुगलों के हाथ से 'कंधार' स्थायी रूप से किस शासक के काल में निकल गया?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1649 में फारस के शाह ने कंधार पर कब्जा कर लिया।<br><br><i class='fa-solid fa-angles-right icon'></i> शाहजहाँ ने इसे वापस पाने के लिए तीन असफल सैन्य अभियान भेजे, जिसके बाद कंधार हमेशा के लिए मुगलों के हाथ से चला गया।"
    },
    {
        question: "प्रश्न 35. शाहजहाँ के शासनकाल में बुंदेला विद्रोह का नेतृत्व किसने किया था?",
        answers: shuffle([
            { text: "चंपत राय", correct: false },
            { text: "छत्रसाल", correct: false },
            { text: "जुझार सिंह", correct: true },
            { text: "वीर सिंह बुंदेला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओरछा के शासक वीर सिंह बुंदेला के पुत्र जुझार सिंह ने शाहजहाँ के खिलाफ एक बड़ा विद्रोह किया था, जिसे अंततः कुचल दिया गया।"
    },
    {
        question: "प्रश्न 36. दक्कन में शाहजहाँ का वायसराय कौन था, जब वह शहजादा था?",
        answers: shuffle([
            { text: "आसफ खान", correct: false },
            { text: "महाबत खान", correct: false },
            { text: "स्वयं शाहजहाँ (खुर्रम)", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर के शासनकाल में, शहजादा खुर्रम ने दक्कन के वायसराय के रूप में महत्वपूर्ण सैन्य सफलताएँ हासिल की थीं।"
    },
    {
        question: "प्रश्न 37. शाहजहाँ ने किस सिख गुरु के साथ संघर्ष किया?",
        answers: shuffle([
            { text: "गुरु अर्जुन देव", correct: false },
            { text: "गुरु हरगोबिंद", correct: true },
            { text: "गुरु हर राय", correct: false },
            { text: "गुरु तेग बहादुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाज और अन्य मुद्दों को लेकर शाहजहाँ और सिखों के छठे गुरु, गुरु हरगोबिंद जी के बीच कई छोटी-मोटी लड़ाइयाँ हुईं।"
    },
    {
        question: "प्रश्न 38. शाहजहाँ के कितने पुत्रों के बीच उत्तराधिकार का युद्ध हुआ?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ के चार पुत्रों - दारा शिकोह, शाह शुजा, औरंगजेब और मुराद बख्श - के बीच सिंहासन के लिए एक खूनी संघर्ष हुआ।"
    },
    {
        question: "प्रश्न 39. उत्तराधिकार के युद्ध के समय, दारा शिकोह कहाँ का सूबेदार था?",
        answers: shuffle([
            { text: "बंगाल", correct: false },
            { text: "गुजरात", correct: false },
            { text: "दक्कन", correct: false },
            { text: "पंजाब और दिल्ली (पिता के साथ रहता था)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दारा शिकोह शाहजहाँ का सबसे बड़ा और प्रिय पुत्र था और वह राजधानी में ही अपने पिता के साथ रहता था।"
    },
    {
        question: "प्रश्न 40. शाह शुजा किस प्रांत का सूबेदार था?",
        answers: shuffle([
            { text: "दक्कन", correct: false },
            { text: "बंगाल", correct: true },
            { text: "गुजरात", correct: false },
            { text: "काबुल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाह शुजा बंगाल का गवर्नर था और उसने वहीं से अपनी बादशाहत का दावा किया।"
    },
    {
        question: "प्रश्न 41. औरंगजेब किस प्रांत का सूबेदार था?",
        answers: shuffle([
            { text: "बंगाल", correct: false },
            { text: "गुजरात", correct: false },
            { text: "दक्कन", correct: true },
            { text: "मालवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औरंगजेब एक अनुभवी सेनापति था और उत्तराधिकार का युद्ध शुरू होने के समय वह दक्कन का एक शक्तिशाली सूबेदार था।"
    },
    {
        question: "प्रश्न 42. मुराद बख्श किस प्रांत का सूबेदार था?",
        answers: shuffle([
            { text: "बंगाल", correct: false },
            { text: "गुजरात", correct: true },
            { text: "दक्कन", correct: false },
            { text: "सिंध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सबसे छोटा पुत्र मुराद बख्श गुजरात का सूबेदार था और उसने स्वयं को बादशाह घोषित कर दिया था।"
    },
    {
        question: "प्रश्न 43. 'धरमत का युद्ध' (अप्रैल 1658) किनके बीच हुआ?",
        answers: shuffle([
            { text: "औरंगजेब और दारा शिकोह", correct: false },
            { text: "औरंगजेब-मुराद और दारा शिकोह की शाही सेना (जसवंत सिंह के नेतृत्व में)", correct: true },
            { text: "शाह शुजा और दारा शिकोह", correct: false },
            { text: "औरंगजेब और शाह शुजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस युद्ध में औरंगजेब और मुराद की संयुक्त सेना ने जोधपुर के महाराजा जसवंत सिंह के नेतृत्व वाली शाही सेना को पराजित कर दिया।"
    },
    {
        question: "प्रश्न 44. 'सामूगढ़ का युद्ध' (मई 1658) किसके बीच हुआ?",
        answers: shuffle([
            { text: "औरंगजेब और शाह शुजा", correct: false },
            { text: "औरंगजेब और जसवंत सिंह", correct: false },
            { text: "औरंगजेब-मुराद और दारा शिकोह", correct: true },
            { text: "दारा शिकोह और शाह शुजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह उत्तराधिकार का सबसे निर्णायक युद्ध था, जो आगरा के पास सामूगढ़ में लड़ा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें दारा शिकोह की बुरी तरह हार हुई और औरंगजेब का दिल्ली पर अधिकार लगभग तय हो गया।"
    },
    {
        question: "प्रश्न 45. उत्तराधिकार के अंतिम युद्ध 'देवराई का युद्ध' (1659) में औरंगजेब ने किसे अंतिम रूप से पराजित किया?",
        answers: shuffle([
            { text: "शाह शुजा", correct: false },
            { text: "मुराद बख्श", correct: false },
            { text: "दारा शिकोह", correct: true },
            { text: "सुलेमान शिकोह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजमेर के पास देवराई की घाटी में हुए इस युद्ध में दारा की अंतिम हार हुई, जिसके बाद उसे पकड़कर मौत के घाट उतार दिया गया।"
    },
    {
        question: "प्रश्न 46. किस मुगल शहजादे को 'शाह बुलंद इकबाल' की उपाधि दी गई थी?",
        answers: shuffle([
            { text: "औरंगजेब", correct: false },
            { text: "शाह शुजा", correct: false },
            { text: "दारा शिकोह", correct: true },
            { text: "मुराद बख्श", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ ने अपने प्रिय पुत्र दारा शिकोह को 'शाह बुलंद इकबाल' (महान भाग्य का राजा) की उपाधि दी थी।"
    },
    {
        question: "प्रश्न 47. दारा शिकोह ने किस सूफी सिलसिले को अपनाया था?",
        answers: shuffle([
            { text: "चिश्ती", correct: false },
            { text: "सुहरावर्दी", correct: false },
            { text: "नक्शबंदी", correct: false },
            { text: "कादिरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दारा शिकोह एक उदारवादी विचारक था और वह कादिरी सिलसिले के सूफी संत मुल्ला शाह बदख्शी का शिष्य था।"
    },
    {
        question: "प्रश्न 48. दारा शिकोह ने उपनिषदों का फारसी में अनुवाद किस शीर्षक से किया था?",
        answers: shuffle([
            { text: "मज्म-उल-बहरैन", correct: false },
            { text: "सिर्र-ए-अकबर", correct: true },
            { text: "सफीनत-उल-औलिया", correct: false },
            { text: "किताब-उल-हिन्द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सिर्र-ए-अकबर' (सबसे बड़ा रहस्य) के नाम से दारा ने 52 उपनिषदों का अनुवाद करवाया, जिससे भारतीय दर्शन पश्चिम तक पहुँचा।"
    },
    {
        question: "प्रश्न 49. शाहजहाँ को उसके पुत्र औरंगजेब ने कहाँ कैद किया था?",
        answers: shuffle([
            { text: "दिल्ली के लाल किले में", correct: false },
            { text: "ग्वालियर के किले में", correct: false },
            { text: "आगरा के किले के शाह बुर्ज में", correct: true },
            { text: "दौलताबाद के किले में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सत्ता पर कब्जा करने के बाद, औरंगजेब ने अपने पिता शाहजहाँ को 1658 में आगरा के किले में नजरबंद कर दिया।"
    },
    {
        question: "प्रश्न 50. शाहजहाँ की कैद के दौरान उसकी देखभाल किसने की?",
        answers: shuffle([
            { text: "रोशनआरा बेगम", correct: false },
            { text: "गौहरआरा बेगम", correct: false },
            { text: "जहाँआरा बेगम", correct: true },
            { text: "किसी ने नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ की सबसे बड़ी पुत्री जहाँआरा ने स्वेच्छा से अपने पिता के साथ कैद में रहना चुना और उनकी मृत्यु तक उनकी सेवा की।"
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