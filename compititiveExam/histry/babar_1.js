const questions = [
    {
        topHeading: "बाबर पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मुगल साम्राज्य का संस्थापक कौन था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "हुमायूँ", correct: false },
            { text: "जहीरुद्दीन मुहम्मद बाबर", correct: true },
            { text: "तैमूरलंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर ने 1526 में पानीपत के प्रथम युद्ध में विजय प्राप्त कर भारत में मुगल साम्राज्य की नींव रखी।"
    },
    {
        question: "प्रश्न 2. बाबर का जन्म कब हुआ था?",
        answers: shuffle([
            { text: "14 फरवरी, 1483", correct: true },
            { text: "15 अप्रैल, 1494", correct: false },
            { text: "20 मार्च, 1480", correct: false },
            { text: "10 जनवरी, 1485", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर का जन्म वैलेंटाइन दिवस के दिन, 14 फरवरी 1483 को हुआ था।"
    },
    {
        question: "प्रश्न 3. बाबर का जन्म कहाँ हुआ था?",
        answers: shuffle([
            { text: "काबुल, अफगानिस्तान", correct: false },
            { text: "समरकंद, उज्बेकिस्तान", correct: false },
            { text: "फरगना घाटी, उज्बेकिस्तान", correct: true },
            { text: "हेरात, अफगानिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर का जन्म मध्य एशिया की एक छोटी सी रियासत, फरगना की राजधानी अंदीझान में हुआ था।"
    },
    {
        question: "प्रश्न 4. बाबर के पिता का क्या नाम था?",
        answers: shuffle([
            { text: "शेख मुबारक", correct: false },
            { text: "उमर शेख मिर्जा", correct: true },
            { text: "अब्दुल्ला खान", correct: false },
            { text: "सुल्तान अहमद मिर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उमर शेख मिर्जा, तैमूरलंग के परपोते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> और फरगना रियासत के शासक थे।"
    },
    {
        question: "प्रश्न 5. बाबर अपनी माँ की ओर से किस मंगोल शासक का वंशज था?",
        answers: shuffle([
            { text: "हलाकू खान", correct: false },
            { text: "कुबलाई खान", correct: false },
            { text: "तैमूरलंग", correct: false },
            { text: "चंगेज खान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर की माँ, कुतलुग निगार खानम, प्रसिद्ध मंगोल विजेता चंगेज खान के वंश की थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> बाबर अपनी माँ की ओर से चंगेज खान का 14वाँ वंशज था।"
    },
    {
        question: "प्रश्न 6. बाबर अपने पिता की ओर से किस तुर्क-मंगोल विजेता का वंशज था?",
        answers: shuffle([
            { text: "चंगेज खान", correct: false },
            { text: "तैमूर लंग", correct: true },
            { text: "महमूद गजनवी", correct: false },
            { text: "अत्तिला दहूण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर अपने पिता, उमर शेख मिर्जा की ओर से, 14वीं शताब्दी के महान विजेता तैमूरलंग का पाँचवाँ वंशज था।"
    },
    {
        question: "प्रश्न 7. बाबर फरगना की गद्दी पर कब बैठा?",
        answers: shuffle([
            { text: "1490", correct: false },
            { text: "1494", correct: true },
            { text: "1498", correct: false },
            { text: "1500", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने पिता उमर शेख मिर्जा की आकस्मिक मृत्यु के बाद, बाबर मात्र 11 वर्ष की अल्पायु में 1494 ई. में फरगना का शासक बना।"
    },
    {
        question: "प्रश्न 8. बाबर का पूरा नाम क्या था?",
        answers: shuffle([
            { text: "जलालुद्दीन मुहम्मद बाबर", correct: false },
            { text: "नसीरुद्दीन मुहम्मद बाबर", correct: false },
            { text: "जहीरुद्दीन मुहम्मद बाबर", correct: true },
            { text: "शम्सुद्दीन मुहम्मद बाबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर का पूरा नाम जहीरुद्दीन मुहम्मद था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>'बाबर'</b> एक उपनाम है जिसका तुर्की भाषा में अर्थ <b>'बाघ'</b> होता है।"
    },
    {
        question: "प्रश्न 9. बाबर ने किस महत्वपूर्ण मध्य एशियाई शहर को जीता और खोया?",
        answers: shuffle([
            { text: "बुखारा", correct: false },
            { text: "ताशकंद", correct: false },
            { text: "समरकंद", correct: true },
            { text: "हेरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समरकंद, जो तैमूर की राजधानी थी, को जीतना बाबर का सपना था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने इसे तीन बार जीता और तीनों बार उसे यह शहर खोना पड़ा।"
    },
    {
        question: "प्रश्न 10. सर-ए-पुल के युद्ध (1501 ई.) में बाबर को किसने पराजित किया था?",
        answers: shuffle([
            { text: "उबैदुल्ला खान", correct: false },
            { text: "अब्दुल्ला खान उजबेक", correct: false },
            { text: "शैबानी खान उजबेक", correct: true },
            { text: "जानी बेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस युद्ध में उजबेक सरदार शैबानी खान ने बाबर को बुरी तरह पराजित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके कारण बाबर को समरकंद छोड़ना पड़ा और उसकी बहन खानजादा बेगम को बंदी बना लिया गया।"
    },
    {
        question: "प्रश्न 11. मध्य एशिया में असफल होने के बाद बाबर ने किस शहर पर अधिकार कर उसे अपना केंद्र बनाया?",
        answers: shuffle([
            { text: "कंधार", correct: false },
            { text: "गजनी", correct: false },
            { text: "काबुल", correct: true },
            { text: "बल्ख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1504 ई. में, बाबर ने काबुल पर अधिकार कर लिया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसने उसे भारत पर आक्रमण के लिए एक सुरक्षित और रणनीतिक आधार प्रदान किया।"
    },
    {
        question: "प्रश्न 12. बाबर ने 'पादशाह' (बादशाह) की उपाधि कब धारण की?",
        answers: shuffle([
            { text: "फरगना का शासक बनने पर", correct: false },
            { text: "समरकंद जीतने पर", correct: false },
            { text: "काबुल जीतने के बाद", correct: true },
            { text: "पानीपत के युद्ध के बाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1504 में काबुल पर विजय प्राप्त करने के बाद, बाबर ने 1507 ई. में अपने पूर्वजों द्वारा धारण की जाने वाली <b>'मिर्जा'</b> की उपाधि को त्यागकर 'पादशाह' की उपाधि धारण की।"
    },
    {
        question: "प्रश्न 13. भारत पर आक्रमण करने से पहले बाबर ने कितनी बार छोटे अभियान किए थे?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानीपत के प्रथम युद्ध (1526) से पहले, बाबर ने 1519 से 1524 के बीच भारत के सीमावर्ती क्षेत्रों पर चार बार आक्रमण किए थे।"
    },
    {
        question: "प्रश्न 14. बाबर को भारत पर आक्रमण करने के लिए किसने आमंत्रित किया था?",
        answers: shuffle([
            { text: "दौलत खान लोदी", correct: false },
            { text: "आलम खान लोदी", correct: false },
            { text: "राणा सांगा", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब के सूबेदार दौलत खान लोदी, इब्राहिम लोदी के चाचा आलम खान लोदी और मेवाड़ के शासक राणा सांगा।<br><br><i class='fa-solid fa-angles-right icon'></i> इन तीनों ने अपने-अपने कारणों से बाबर को इब्राहिम लोदी के खिलाफ भारत पर आक्रमण करने का निमंत्रण भेजा था।"
    },
    {
        question: "प्रश्न 15. पानीपत के प्रथम युद्ध के समय दिल्ली का सुल्तान कौन था?",
        answers: shuffle([
            { text: "सिकंदर लोदी", correct: false },
            { text: "बहलोल लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: true },
            { text: "दौलत खान लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्राहिम लोदी, लोदी वंश का अंतिम शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो पानीपत के प्रथम युद्ध में बाबर के विरुद्ध लड़ा था।"
    },
    {
        question: "प्रश्न 16. पानीपत का प्रथम युद्ध कब लड़ा गया था?",
        answers: shuffle([
            { text: "21 अप्रैल, 1526", correct: true },
            { text: "17 मार्च, 1527", correct: false },
            { text: "29 जनवरी, 1528", correct: false },
            { text: "6 मई, 1529", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह निर्णायक युद्ध 21 अप्रैल, 1526 को हरियाणा के पानीपत नामक स्थान पर बाबर और इब्राहिम लोदी की सेनाओं के बीच हुआ।"
    },
    {
        question: "प्रश्न 17. पानीपत के प्रथम युद्ध में बाबर की जीत का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "उसकी विशाल सेना", correct: false },
            { text: "इब्राहिम लोदी की कायरता", correct: false },
            { text: "उसकी सैन्य कुशलता और तोपखाना", correct: true },
            { text: "अफगान सरदारों का विश्वासघात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर की सेना छोटी थी, लेकिन उसकी तुलुगमा युद्ध नीति और तोपों के प्रभावी प्रयोग ने उसे इब्राहिम लोदी की विशाल सेना पर निर्णायक जीत दिलाई।"
    },
    {
        question: "प्रश्न 18. 'तुलुगमा' युद्ध पद्धति क्या थी?",
        answers: shuffle([
            { text: "तोपों को सजाने की विधि", correct: false },
            { text: "सेना को दाएं, बाएं और मध्य भागों में विभाजित करने की रणनीति", correct: true },
            { text: "एक प्रकार की नौसैनिक रणनीति", correct: false },
            { text: "किले की घेराबंदी करने की तकनीक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसमें सेना के एक हिस्से को दुश्मन के flanks (पार्श्व) और पीछे से चक्कर लगाकर हमला करने के लिए भेजा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे दुश्मन घिर जाता था।"
    },
    {
        question: "प्रश्न 19. बाबर ने तोपों को सजाने के लिए किस विधि का प्रयोग किया था?",
        answers: shuffle([
            { text: "यूनानी विधि", correct: false },
            { text: "मंगोल विधि", correct: false },
            { text: "उस्मानी विधि (रूमी विधि)", correct: true },
            { text: "फारसी विधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस विधि में, दो गाड़ियों (अरबा) के बीच जगह छोड़कर तोपों को रखा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> और उन्हें चमड़े की रस्सियों से बाँध दिया जाता था ताकि तोपची सुरक्षित रहकर गोलाबारी कर सकें।"
    },
    {
        question: "प्रश्न 20. पानीपत के प्रथम युद्ध में बाबर के तोपखाने का नेतृत्व किसने किया था?",
        answers: shuffle([
            { text: "मीर बाकी और चिन तैमूर", correct: false },
            { text: "उस्ताद अली और मुस्तफा खान", correct: true },
            { text: "ख्वाजा कलां और मीर खलीफा", correct: false },
            { text: "हिंदाल और कामरान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस्ताद अली और मुस्तफा खान बाबर के दो प्रमुख और कुशल तुर्क तोपची थे।<br><br><i class='fa-solid fa-angles-right icon'></i> जिन्होंने पानीपत की जीत में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 21. कौन सा लोदी सुल्तान युद्ध के मैदान में मारा जाने वाला दिल्ली सल्तनत का एकमात्र सुल्तान था?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: true },
            { text: "महमूद लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्राहिम लोदी पानीपत के प्रथम युद्ध में लड़ते हुए मारा गया।"
    },
    {
        question: "प्रश्न 22. 'बाबर' शब्द का तुर्की भाषा में क्या अर्थ है?",
        answers: shuffle([
            { text: "सिंह", correct: false },
            { text: "चीता", correct: false },
            { text: "बाघ", correct: true },
            { text: "भेड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाबर' शब्द तुर्की भाषा से लिया गया है, जिसका अर्थ बाघ होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उसके साहसिक और लड़ाकू स्वभाव को दर्शाता है।"
    },
    {
        question: "प्रश्न 23. खानवा का युद्ध कब हुआ था?",
        answers: shuffle([
            { text: "1526", correct: false },
            { text: "1527", correct: true },
            { text: "1528", correct: false },
            { text: "1529", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध 17 मार्च, 1527 को आगरा के पास खानवा नामक स्थान पर हुआ था।"
    },
    {
        question: "प्रश्न 24. खानवा का युद्ध बाबर और किसके बीच हुआ था?",
        answers: shuffle([
            { text: "इब्राहिम लोदी", correct: false },
            { text: "महमूद लोदी", correct: false },
            { text: "मेदिनी राय", correct: false },
            { text: "राणा सांगा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध मुगल सेना और मेवाड़ के शासक राणा संग्राम सिंह (राणा सांगा) के नेतृत्व वाले राजपूत महासंघ के बीच लड़ा गया।"
    },
    {
        question: "प्रश्न 25. बाबर ने किस युद्ध से पहले शराब के बर्तनों को तोड़ने और शराब न पीने की कसम खाई थी?",
        answers: shuffle([
            { text: "पानीपत का युद्ध", correct: false },
            { text: "खानवा का युद्ध", correct: true },
            { text: "चंदेरी का युद्ध", correct: false },
            { text: "घाघरा का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजपूतों की विशाल सेना को देखकर जब बाबर के सैनिकों का मनोबल गिरने लगा, तो उसने अपनी सेना में जोश भरने के लिए शराब त्यागने की घोषणा की।<br><br><i class='fa-solid fa-angles-right icon'></i> और इस युद्ध को 'जिहाद' (धर्मयुद्ध) का नारा दिया।"
    },
    {
        question: "प्रश्न 26. किस युद्ध में विजय के बाद बाबर ने 'गाजी' की उपाधि धारण की?",
        answers: shuffle([
            { text: "पानीपत", correct: false },
            { text: "खानवा", correct: true },
            { text: "चंदेरी", correct: false },
            { text: "घाघरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गाजी' का अर्थ होता है 'धर्मयोद्धा' या 'काफिरों का वध करने वाला'।<br><br><i class='fa-solid fa-angles-right icon'></i> खानवा में राजपूतों पर अपनी जीत को उसने इस्लाम की जीत बताया और यह उपाधि धारण की।"
    },
    {
        question: "प्रश्न 27. बाबर के अनुसार, राणा सांगा ने उसे भारत पर आक्रमण के लिए आमंत्रित करते समय किस स्थान पर मदद का वादा किया था, लेकिन बाद में मुकर गया?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "पानीपत", correct: false },
            { text: "आगरा", correct: true },
            { text: "बयाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबरनामा के अनुसार, राणा सांगा ने वादा किया था कि जब बाबर दिल्ली पर हमला करेगा, तो वह आगरा पर हमला करेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन राणा सांगा ने ऐसा नहीं किया, जो खानवा के युद्ध का एक कारण बना।"
    },
    {
        question: "प्रश्न 28. चंदेरी का युद्ध (1528) बाबर ने किसके खिलाफ लड़ा था?",
        answers: shuffle([
            { text: "राणा सांगा", correct: false },
            { text: "महमूद लोदी", correct: false },
            { text: "मेदिनी राय", correct: true },
            { text: "नुसरत शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंदेरी मालवा और बुंदेलखंड की सीमा पर एक महत्वपूर्ण रणनीतिक किला था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाबर ने यहाँ के राजपूत शासक मेदिनी राय को पराजित किया।"
    },
    {
        question: "प्रश्न 29. घाघरा का युद्ध कब और किसके बीच हुआ था?",
        answers: shuffle([
            { text: "1529, बाबर और राजपूत", correct: false },
            { text: "1528, बाबर और मेदिनी राय", correct: false },
            { text: "1529, बाबर और अफगान", correct: true },
            { text: "1527, बाबर और राणा सांगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 6 मई, 1529 को यह युद्ध बाबर और महमूद लोदी के नेतृत्व में बिहार और बंगाल के संयुक्त अफगान शासकों के बीच लड़ा गया।"
    },
    {
        question: "प्रश्न 30. मध्यकालीन भारत का वह कौन सा प्रथम युद्ध था जो जल और थल दोनों पर लड़ा गया?",
        answers: shuffle([
            { text: "खानवा", correct: false },
            { text: "चंदेरी", correct: false },
            { text: "घाघरा", correct: true },
            { text: "पानीपत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध घाघरा नदी के तट पर लड़ा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें बाबर की सेना ने जमीन के साथ-साथ नावों का भी प्रभावी ढंग से इस्तेमाल किया।"
    },
    {
        question: "प्रश्न 31. बाबर का भारत में अंतिम युद्ध कौन सा था?",
        answers: shuffle([
            { text: "खानवा का युद्ध", correct: false },
            { text: "चंदेरी का युद्ध", correct: false },
            { text: "पानीपत का युद्ध", correct: false },
            { text: "घाघरा का युद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घाघरा का युद्ध बाबर द्वारा भारत में लड़ा गया अंतिम बड़ा युद्ध था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद उसने अपने साम्राज्य को संगठित करने पर ध्यान केंद्रित किया।"
    },
    {
        question: "प्रश्न 32. बाबर ने अपनी आत्मकथा किस नाम से लिखी थी?",
        answers: shuffle([
            { text: "शाहनामा", correct: false },
            { text: "अकबरनामा", correct: false },
            { text: "तुजुक-ए-बाबरी (बाबरनामा)", correct: true },
            { text: "तारीख-ए-बाबरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर ने अपनी जीवनी स्वयं लिखी, जिसे 'वाकयात-ए-बाबरी' या 'तुजुक-ए-बाबरी' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे <b>'बाबरनामा'</b> के नाम से भी जाना जाता है।"
    },
    {
        question: "प्रश्न 33. बाबरनामा मूल रूप से किस भाषा में लिखी गई थी?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: false },
            { text: "चगताई तुर्की", correct: true },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर की मातृभाषा चगताई तुर्की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसने अपनी आत्मकथा इसी भाषा में लिखी, जो उसकी साहित्यिक प्रतिभा का प्रमाण है।"
    },
    {
        question: "प्रश्न 34. बाबरनामा का फारसी भाषा में अनुवाद किसने किया था?",
        answers: shuffle([
            { text: "अबुल फजल", correct: false },
            { text: "फैजी", correct: false },
            { text: "बदायूंनी", correct: false },
            { text: "अब्दुर्रहीम खान-ए-खाना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर के शासनकाल में, उसके नवरत्नों में से एक और बैरम खान के पुत्र अब्दुर्रहीम खान-ए-खाना ने बाबरनामा का तुर्की से फारसी में अनुवाद किया।"
    },
    {
        question: "प्रश्न 35. बाबरनामा में बाबर ने भारत के बारे में क्या उल्लेख किया है?",
        answers: shuffle([
            { text: "भारत में अच्छे फल, घोड़े और ठंडी हवा की कमी", correct: false },
            { text: "भारत एक विशाल और धनी देश है", correct: false },
            { text: "यहाँ के लोग सुंदर नहीं हैं लेकिन कारीगर कुशल हैं", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबरनामा में, बाबर ने हिंदुस्तान के मौसम, लोगों, जानवरों, फलों और नदियों का विस्तृत वर्णन किया है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने यहाँ की कई चीजों की आलोचना की लेकिन यहाँ की दौलत और कारीगरी की प्रशंसा भी की।"
    },
    {
        question: "प्रश्न 36. बाबर ने किस भारतीय शासक को उस समय का सबसे शक्तिशाली शासक बताया?",
        answers: shuffle([
            { text: "इब्राहिम लोदी", correct: false },
            { text: "राणा सांगा", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "नुसरत शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबरनामा में बाबर ने तत्कालीन भारत के पाँच मुस्लिम और दो हिंदू शासकों का उल्लेख किया है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिनमें विजयनगर के शासक कृष्णदेवराय को सबसे शक्तिशाली बताया है।"
    },
    {
        question: "प्रश्न 37. 'मुबइयान' क्या है?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक सैन्य पद", correct: false },
            { text: "बाबर द्वारा विकसित एक काव्य शैली", correct: true },
            { text: "एक प्रकार का सिक्का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर ने तुर्की पद्य की एक नई शैली 'मुबइयान' का विकास किया था।"
    },
    {
        question: "प्रश्न 38. 'चारबाग' शैली के बगीचों को भारत में लोकप्रिय बनाने का श्रेय किसे दिया जाता है?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "शाहजहाँ", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "बाबर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर को औपचारिक उद्यानों (चारबाग) का बहुत शौक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने आगरा में <b>'आरामबाग' (नूर-ए-अफगान)</b> नामक पहला चारबाग शैली का बगीचा बनवाया।"
    },
    {
        question: "प्रश्न 39. पानीपत में 'काबुली बाग मस्जिद' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "इब्राहिम लोदी", correct: false },
            { text: "शेरशाह सूरी", correct: false },
            { text: "बाबर", correct: true },
            { text: "हुमायूँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानीपत के प्रथम युद्ध में अपनी जीत के उपलक्ष्य में, बाबर ने अपनी पत्नी मुसम्मत काबुली बेगम के नाम पर इस मस्जिद का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 40. अयोध्या में स्थित 'बाबरी मस्जिद' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: false },
            { text: "बाबर का सेनापति मीर बाकी", correct: true },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि 1528-29 में, बाबर के एक सेनापति मीर बाकी ने अयोध्या में इस मस्जिद का निर्माण करवाया था।"
    },
    {
        question: "प्रश्न 41. बाबर की मृत्यु कब हुई?",
        answers: shuffle([
            { text: "1528", correct: false },
            { text: "1529", correct: false },
            { text: "1530", correct: true },
            { text: "1531", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 26 दिसंबर, 1530 को लगभग 47 वर्ष की आयु में आगरा में बाबर की मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 42. बाबर को प्रारंभ में कहाँ दफनाया गया था?",
        answers: shuffle([
            { text: "काबुल में", correct: false },
            { text: "दिल्ली के दीनपनाह में", correct: false },
            { text: "आगरा के आराम बाग में", correct: true },
            { text: "सासाराम में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसकी मृत्यु के बाद, उसे आगरा में ही उसके द्वारा बनवाए गए आरामबाग (अब रामबाग) में दफनाया गया था।"
    },
    {
        question: "प्रश्न 43. बाबर का मकबरा अंततः कहाँ बनाया गया?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "लाहौर", correct: false },
            { text: "काबुल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर की इच्छा थी कि उसे काबुल में दफनाया जाए।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में, शेरशाह सूरी या हुमायूँ के शासनकाल में उसके अवशेषों को काबुल ले जाकर उसकी पसंदीदा जगह पर दफनाया गया।"
    },
    {
        question: "प्रश्न 44. बाबर ने अपने उत्तराधिकारी के रूप में किसे चुना था?",
        answers: shuffle([
            { text: "कामरान", correct: false },
            { text: "हुमायूँ", correct: true },
            { text: "हिंदाल", correct: false },
            { text: "असकरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर ने अपने सबसे बड़े पुत्र हुमायूँ को अपना उत्तराधिकारी नियुक्त किया था।"
    },
    {
        question: "प्रश्न 45. 'रिसाल-ए-उसज' (खत-ए-बाबरी) की रचना किसने की?",
        answers: shuffle([
            { text: "अमीर खुसरो", correct: false },
            { text: "बाबर", correct: true },
            { text: "हुमायूँ", correct: false },
            { text: "मीर बाकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बाबर द्वारा रचित एक काव्य रचना है।"
    },
    {
        question: "प्रश्न 46. बाबर ने पहली बार भारत के किस क्षेत्र पर आक्रमण किया था?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "सिंध", correct: false },
            { text: "बाजौर और भेरा", correct: true },
            { text: "कश्मीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1519 में अपने पहले अभियान में, बाबर ने युसुफजई जाति के खिलाफ आक्रमण किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और बाजौर तथा भेरा के किलों पर अधिकार कर लिया।"
    },
    {
        question: "प्रश्न 47. बाबर ने किस किले पर आक्रमण के दौरान पहली बार तोपखाने का प्रयोग किया था?",
        answers: shuffle([
            { text: "काबुल का किला", correct: false },
            { text: "कंधार का किला", correct: false },
            { text: "भेरा का किला", correct: true },
            { text: "लाहौर का किला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1519 में अपने पहले भारतीय अभियान के दौरान भेरा के किले को जीतने के लिए बाबर ने पहली बार तोपों का इस्तेमाल किया था।"
    },
    {
        question: "प्रश्न 48. बाबर के भारत पर आक्रमण के समय विजयनगर का शासक कौन था?",
        answers: shuffle([
            { text: "देवराय द्वितीय", correct: false },
            { text: "अच्युतदेव राय", correct: false },
            { text: "कृष्णदेवराय", correct: true },
            { text: "सदाशिवराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर के भारत आक्रमण (1526) के समय दक्षिण भारत में विजयनगर के महान शासक कृष्णदेवराय का शासन था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिनका बाबर ने अपनी आत्मकथा में उल्लेख किया है।"
    },
    {
        question: "प्रश्न 49. बाबर ने अपनी दादी 'ऐसान दौलत बेगम' से क्या सीखा?",
        answers: shuffle([
            { text: "कविता लिखना", correct: false },
            { text: "तलवार चलाना", correct: false },
            { text: "कूटनीति और शासन चलाना", correct: true },
            { text: "बागवानी करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर की दादी एक बहुत ही बुद्धिमान और साहसी महिला थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> बाबर ने अपनी आत्मकथा में लिखा है कि उसने अपने शुरुआती दिनों में शासन और कूटनीति की कई बातें उन्हीं से सीखीं।"
    },
    {
        question: "प्रश्न 50. बाबर ने किस भाषा में एक दीवान (काव्य संग्रह) का संकलन किया था?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर ने तुर्की भाषा में एक काव्य संग्रह (दीवान) का संकलन भी किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो उसकी साहित्यिक रुचि को दर्शाता है।"
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