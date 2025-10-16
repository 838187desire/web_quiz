const questions = [
    {
        topHeading: "भारत पर अरबों का आक्रमण पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारत पर पहला सफल मुस्लिम (अरब) आक्रमण किस वर्ष हुआ था?",
        answers: shuffle([
            { text: "647 ई.", correct: false },
            { text: "712 ई.", correct: true },
            { text: "1001 ई.", correct: false },
            { text: "1191 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन कासिम</b> के नेतृत्व में अरबों ने <b>712 ई.</b> में <b>सिंध पर सफल आक्रमण</b> किया, जो भारत पर पहला सफल मुस्लिम आक्रमण माना जाता है।"
    },
    {
        question: "प्रश्न 2. 712 ई. में सिंध पर अरब आक्रमण के समय वहाँ का शासक कौन था?",
        answers: shuffle([
            { text: "जयपाल", correct: false },
            { text: "दाहिर", correct: true },
            { text: "भीमदेव", correct: false },
            { text: "आनंदपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंध पर अरब आक्रमण के समय वहाँ <b>ब्राह्मण वंश</b> का राजा <b>दाहिर</b> शासन कर रहा था।"
    },
    {
        question: "प्रश्न 3. अरब आक्रमणकारी मुहम्मद बिन कासिम किसका सेनापति था?",
        answers: shuffle([
            { text: "उमय्यद खलीफा अल-वालिद का", correct: false },
            { text: "इराक के हाकिम अल-हज्जाज का", correct: true },
            { text: "अब्बासी खलीफा अल-मंसूर का", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन कासिम</b> इराक के गवर्नर <b>अल-हज्जाज बिन यूसुफ</b> का भतीजा और दामाद था, और उसी के आदेश पर उसने सिंध पर आक्रमण किया था।"
    },
    {
        question: "प्रश्न 4. सिंध पर आक्रमण करने के लिए मुहम्मद बिन कासिम को किस खलीफा ने अनुमति दी थी?",
        answers: shuffle([
            { text: "अल-मंसूर", correct: false },
            { text: "हारून-अल-रशीद", correct: false },
            { text: "अल-वालिद प्रथम", correct: true },
            { text: "अल-महदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस समय <b>उमय्यद वंश</b> के खलीफा <b>अल-वालिद प्रथम</b> का शासन था और उसी ने अल-हज्जाज को भारत पर आक्रमण की स्वीकृति प्रदान की थी।"
    },
    {
        question: "प्रश्न 5. अरबों द्वारा सिंध विजय का विस्तृत वृत्तांत किस ग्रंथ में मिलता है?",
        answers: shuffle([
            { text: "किताब-उल-हिन्द", correct: false },
            { text: "चचनामा", correct: true },
            { text: "तारीख-ए-फिरोजशाही", correct: false },
            { text: "तुगलकनामा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>चचनामा</b>' (फतहनामा-ए-सिंध) अरबों की सिंध विजय का सबसे महत्वपूर्ण और विस्तृत स्रोत है, जिसे अली अहमद ने अरबी से फारसी में अनुवादित किया था।"
    },
    {
        question: "प्रश्न 6. मुहम्मद बिन कासिम ने सबसे पहले सिंध के किस क्षेत्र पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "निरुन", correct: false },
            { text: "सेहवान", correct: false },
            { text: "देबल", correct: true },
            { text: "आलोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद बिन कासिम की सेना ने सबसे पहले सिंध के प्रसिद्ध <b>बंदरगाह शहर देबल</b> पर आक्रमण कर उसे जीता था।"
    },
    {
        question: "प्रश्न 7. अरब आक्रमण का तात्कालिक कारण क्या माना जाता है?",
        answers: shuffle([
            { text: "इस्लाम का प्रचार", correct: false },
            { text: "भारत की धन-संपदा लूटना", correct: false },
            { text: "देबल के समुद्री डाकुओं द्वारा अरबी जहाजों को लूटना", correct: true },
            { text: "साम्राज्य विस्तार की नीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तात्कालिक कारण <b>श्रीलंका</b> से आ रहे अरबी जहाजों को <b>देबल के पास समुद्री डाकुओं द्वारा लूटना</b> और राजा दाहिर द्वारा हर्जाना देने से इनकार करना था।"
    },
    {
        question: "प्रश्न 8. मुहम्मद बिन कासिम ने किस शहर को 'स्वर्ण नगरी' (City of Gold) कहा था?",
        answers: shuffle([
            { text: "देबल", correct: false },
            { text: "अरोर", correct: false },
            { text: "ब्राह्मणवाद", correct: false },
            { text: "मुल्तान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुल्तान</b> से अरबों को इतनी अधिक मात्रा में सोना प्राप्त हुआ कि मुहम्मद बिन कासिम ने उसे '<b>स्वर्ण नगरी</b>' का नाम दिया।"
    },
    {
        question: "प्रश्न 9. राजा दाहिर के पिता का क्या नाम था?",
        answers: shuffle([
            { text: "चच", correct: true },
            { text: "जयसिंह", correct: false },
            { text: "हर्ष", correct: false },
            { text: "राय साहसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा दाहिर <b>ब्राह्मण वंश के संस्थापक चच</b> के पुत्र थे, जिन्होंने राय वंश के बाद सिंध में सत्ता स्थापित की थी।"
    },
    {
        question: "प्रश्न 10. भारत में सर्वप्रथम 'जजिया' कर किसने लगाया था?",
        answers: shuffle([
            { text: "महमूद गजनवी", correct: false },
            { text: "मुहम्मद गोरी", correct: false },
            { text: "मुहम्मद बिन कासिम", correct: true },
            { text: "कुतुबुद्दीन ऐबक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन कासिम</b> ने ही सिंध के जीते हुए क्षेत्रों में <b>गैर-मुसलमानों पर 'जजिया'</b> नामक सुरक्षात्मक कर लगाया था।"
    },
    {
        question: "प्रश्न 11. अरबों ने सिंध में किन लोगों को 'जिम्मी' (संरक्षित) का दर्जा दिया?",
        answers: shuffle([
            { text: "केवल बौद्धों को", correct: false },
            { text: "केवल हिंदुओं को", correct: false },
            { text: "हिंदुओं और बौद्धों दोनों को", correct: true },
            { text: "केवल पारसियों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों ने <b>जजिया देने वाले गैर-मुसलमानों</b> (हिंदुओं और बौद्धों) को '<b>जिम्मी</b>' का दर्जा दिया, जिसका अर्थ था कि उनकी जान-माल की सुरक्षा मुस्लिम शासक करेंगे।"
    },
    {
        question: "प्रश्न 12. राजा दाहिर और मुहम्मद बिन कासिम के बीच हुए निर्णायक युद्ध को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "तराइन का युद्ध", correct: false },
            { text: "चंदावर का युद्ध", correct: false },
            { text: "रावर का युद्ध", correct: true },
            { text: "देबल का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>20 जून 712 ई.</b> को <b>रावर</b> नामक स्थान पर राजा दाहिर और मुहम्मद बिन कासिम की सेनाओं के बीच भयंकर युद्ध हुआ, जिसमें दाहिर की हार हुई।"
    },
    {
        question: "प्रश्न 13. 'चचनामा' मूल रूप से किस भाषा में लिखा गया था?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: true },
            { text: "संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>चचनामा</b>' मूल रूप से <b>अरबी भाषा</b> में किसी अज्ञात लेखक द्वारा लिखा गया था, जिसका बाद में फारसी में अनुवाद हुआ।"
    },
    {
        question: "प्रश्न 14. अरब आक्रमण के समय सिंध की राजधानी क्या थी?",
        answers: shuffle([
            { text: "देबल", correct: false },
            { text: "मुल्तान", correct: false },
            { text: "निरुन", correct: false },
            { text: "आलोर (अरोर)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा दाहिर के शासनकाल में <b>आलोर (अरोर)</b> सिंध की राजधानी हुआ करती थी।"
    },
    {
        question: "प्रश्न 15. मुहम्मद बिन कासिम की मृत्यु कैसे हुई?",
        answers: shuffle([
            { text: "राजा दाहिर के साथ युद्ध में", correct: false },
            { text: "एक अन्य भारतीय राजा द्वारा पराजित होने पर", correct: false },
            { text: "खलीफा सुलेमान के आदेश पर उसे बंदी बनाकर मार दिया गया", correct: true },
            { text: "बीमारी के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खलीफा अल-वालिद की मृत्यु के बाद नए खलीफा <b>सुलेमान</b> ने राजनीतिक कारणों से <b>मुहम्मद बिन कासिम</b> को वापस बुलाकर <b>बंदी बना लिया और उसे मृत्युदंड दिया</b>।"
    },
    {
        question: "प्रश्न 16. किस भारतीय खगोलशास्त्रीय ग्रंथ का अरबी में अनुवाद किया गया, जिससे अरबों ने भारतीय खगोल विज्ञान को सीखा?",
        answers: shuffle([
            { text: "आर्यभटीय", correct: false },
            { text: "सूर्य सिद्धांत", correct: false },
            { text: "ब्रह्मस्फुट सिद्धांत", correct: true },
            { text: "लीलावती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ब्रह्मगुप्त</b> द्वारा रचित '<b>ब्रह्मस्फुट सिद्धांत</b>' और 'खंडखाद्यक' का अरबी में 'अल-सिंदहिंद' और 'अल-अर्कंद' नाम से अनुवाद हुआ, जिससे अरबों ने भारतीय ज्योतिष और खगोल विज्ञान का ज्ञान प्राप्त किया।"
    },
    {
        question: "प्रश्न 17. अरबों ने भारत से क्या सीखा जो बाद में यूरोप तक पहुँचा?",
        answers: shuffle([
            { text: "दशमलव प्रणाली और अंक", correct: false },
            { text: "शतरंज का खेल", correct: false },
            { text: "आयुर्वेद का ज्ञान", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों ने भारत से <b>दशमलव प्रणाली, शून्य का प्रयोग, शतरंज</b> और <b>आयुर्वेद चिकित्सा पद्धति</b> सीखी और इस ज्ञान को यूरोप तक पहुँचाया।"
    },
    {
        question: "प्रश्न 18. राजा दाहिर की मृत्यु के बाद उसकी पत्नी ने जौहर कर लिया था, उनका नाम क्या था?",
        answers: shuffle([
            { text: "रानी पद्मावती", correct: false },
            { text: "रानी लक्ष्मीबाई", correct: false },
            { text: "रानीबाई", correct: true },
            { text: "रानी दुर्गावती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>रावर के किले</b> में राजा दाहिर की मृत्यु के बाद उनकी पत्नी <b>रानीबाई</b> ने अरबों के हाथों अपमान से बचने के लिए अन्य महिलाओं के साथ <b>जौहर (आत्मदाह)</b> कर लिया था।"
    },
    {
        question: "प्रश्न 19. अरब आक्रमण के समय भारत में कौन सा शक्तिशाली साम्राज्य मौजूद नहीं था?",
        answers: shuffle([
            { text: "गुर्जर-प्रतिहार", correct: false },
            { text: "राष्ट्रकूट", correct: false },
            { text: "पाल", correct: false },
            { text: "गुप्त साम्राज्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब आक्रमण (8वीं सदी) के समय <b>गुप्त साम्राज्य का पतन</b> हो चुका था और भारत में गुर्जर-प्रतिहार, पाल और राष्ट्रकूट जैसी क्षेत्रीय शक्तियाँ थीं।"
    },
    {
        question: "प्रश्न 20. मुहम्मद बिन कासिम के आक्रमण के समय उसकी आयु लगभग कितनी थी?",
        answers: shuffle([
            { text: "17 वर्ष", correct: true },
            { text: "25 वर्ष", correct: false },
            { text: "35 वर्ष", correct: false },
            { text: "42 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह माना जाता है कि जब मुहम्मद बिन कासिम ने सिंध पर आक्रमण का नेतृत्व किया, तब वह केवल <b>17 वर्ष</b> का एक युवा सेनापति था।"
    },
    {
        question: "प्रश्न 21. 'किताब फुतूह अल-बलदान' का लेखक कौन है, जिसमें सिंध विजय का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "अल-बरुनी", correct: false },
            { text: "अल-बिलादुरी", correct: true },
            { text: "इब्न बतूता", correct: false },
            { text: "अल-मसूदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अल-बिलादुरी</b> की पुस्तक '<b>किताब फुतूह अल-बलदान</b>' में अरबों द्वारा की गई विभिन्न विजयों का वर्णन है, जिसमें सिंध विजय भी शामिल है।"
    },
    {
        question: "प्रश्न 22. अरबों ने सिंध में कौन सी मुद्रा प्रचलित की?",
        answers: shuffle([
            { text: "टका", correct: false },
            { text: "जीतल", correct: false },
            { text: "दीनार", correct: false },
            { text: "दिरहम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों ने सिंध के क्षेत्रों में अपनी मुद्रा '<b>दिरहम</b>' का प्रचलन शुरू किया था।"
    },
    {
        question: "प्रश्न 23. मुहम्मद बिन कासिम ने किस स्थान पर विजय के बाद वहाँ के मंदिर के शिखर पर लगे ध्वज को नहीं उतारा, जिससे स्थानीय लोगों ने आत्मसमर्पण कर दिया?",
        answers: shuffle([
            { text: "अरोर", correct: false },
            { text: "मुल्तान", correct: false },
            { text: "देबल", correct: true },
            { text: "सेहवान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>देबल</b> के किले में एक मंदिर के शिखर पर एक लाल ध्वज लगा था।<br><br><i class='fa-solid fa-angles-right icon'></i> जब अरबों की 'मंजनीक' (गुलेल) से ध्वज गिरा दिया गया, तो रक्षकों का मनोबल टूट गया और उन्होंने आत्मसमर्पण कर दिया।"
    },
    {
        question: "प्रश्न 24. अरब आक्रमण का भारत पर दीर्घकालिक राजनीतिक प्रभाव क्या पड़ा?",
        answers: shuffle([
            { text: "भारत में इस्लामी राज्य की स्थापना हुई", correct: false },
            { text: "भारत में सामंतवाद का उदय हुआ", correct: false },
            { text: "कोई विशेष दीर्घकालिक राजनीतिक प्रभाव नहीं पड़ा", correct: true },
            { text: "संपूर्ण भारत पर अरबों का कब्जा हो गया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों का शासन केवल <b>सिंध और मुल्तान</b> तक ही सीमित रह गया और वे भारत की आंतरिक राजनीति में कोई बड़ा और स्थायी बदलाव नहीं ला सके।"
    },
    {
        question: "प्रश्न 25. पंचतंत्र का अरबी अनुवाद 'कलीला-व-दिमना' किसने किया?",
        answers: shuffle([
            { text: "अल-बरुनी", correct: false },
            { text: "अमीर खुसरो", correct: false },
            { text: "इब्न-अल-मुकफ्फा", correct: true },
            { text: "फिरदौसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय ग्रंथ '<b>पंचतंत्र</b>' का अरबी अनुवाद <b>इब्न-अल-मुकफ्फा</b> ने '<b>कलीला-व-दिमना</b>' नाम से किया था, जो अरब जगत में बहुत लोकप्रिय हुआ।"
    },
    {
        question: "प्रश्न 26. राजा दाहिर किस वंश से संबंधित था?",
        answers: shuffle([
            { text: "राय वंश", correct: false },
            { text: "ब्राह्मण वंश", correct: true },
            { text: "मौर्य वंश", correct: false },
            { text: "राजपूत वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा दाहिर के पिता <b>चच</b> ने राय वंश के अंतिम शासक की हत्या कर सिंध में <b>ब्राह्मण वंश</b> की नींव रखी थी।"
    },
    {
        question: "प्रश्न 27. अरबों के बाद भारत में आगे के आक्रमणों का मार्ग किसने प्रशस्त किया?",
        answers: shuffle([
            { text: "अरबों की विजय ने", correct: true },
            { text: "अरबों की विफलता ने", correct: false },
            { text: "सिंध की भौगोलिक स्थिति ने", correct: false },
            { text: "भारतीय शासकों की आपसी फूट ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों की <b>सिंध विजय</b> ने भविष्य के <b>तुर्की आक्रमणकारियों</b> (जैसे गजनवी और गोरी) के लिए भारत में प्रवेश का एक मार्ग खोल दिया।"
    },
    {
        question: "प्रश्न 28. सिंध के किस शहर पर विजय के दौरान बौद्ध भिक्षुओं ने मुहम्मद बिन कासिम का साथ दिया था?",
        answers: shuffle([
            { text: "आलोर", correct: false },
            { text: "निरुन", correct: true },
            { text: "सेहवान", correct: false },
            { text: "देबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>निरुन</b> के <b>बौद्ध अनुयायियों</b> ने बिना किसी प्रतिरोध के मुहम्मद बिन कासिम का स्वागत किया और आत्मसमर्पण कर दिया।"
    },
    {
        question: "प्रश्न 29. मुहम्मद बिन कासिम द्वारा लगाए गए जजिया कर से किन्हें मुक्त रखा गया था?",
        answers: shuffle([
            { text: "ब्राह्मणों और महिलाओं को", correct: false },
            { text: "बच्चों और बूढ़ों को", correct: false },
            { text: "विकलांगों को", correct: false },
            { text: "ये सभी ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्यतः जजिया कर से <b>ब्राह्मणों, बच्चों, महिलाओं, बूढ़ों</b> और <b>विकलांगों</b> को मुक्त रखा जाता था।"
    },
    {
        question: "प्रश्न 30. 'मंजनीक' क्या था जिसका प्रयोग अरब सेना ने किया था?",
        answers: shuffle([
            { text: "एक प्रकार की तलवार", correct: false },
            { text: "एक प्रकार का तोप", correct: false },
            { text: "पत्थर फेंकने वाला एक युद्ध यंत्र (गुलेल)", correct: true },
            { text: "एक नौसैनिक जहाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>मंजनीक</b>' एक विशाल <b>गुलेल</b> जैसा यंत्र था जिसका उपयोग अरब सेना किले की दीवारों पर बड़े-बड़े पत्थर फेंकने के लिए करती थी।"
    },
    {
        question: "प्रश्न 31. अरबों को सिंध से आगे बढ़ने से रोकने में किस भारतीय राजवंश की महत्वपूर्ण भूमिका थी?",
        answers: shuffle([
            { text: "चोल राजवंश", correct: false },
            { text: "पाल राजवंश", correct: false },
            { text: "गुर्जर-प्रतिहार राजवंश", correct: true },
            { text: "राष्ट्रकूट राजवंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गुर्जर-प्रतिहार शासक नागभट्ट प्रथम</b> ने अरबों को सिंध से आगे राजस्थान और पश्चिमी भारत में बढ़ने से सफलतापूर्वक रोका था।"
    },
    {
        question: "प्रश्न 32. अरब आक्रमण के समय, सिंध क्षेत्र में कौन सा धर्म प्रमुख था?",
        answers: shuffle([
            { text: "केवल हिंदू धर्म", correct: false },
            { text: "केवल बौद्ध धर्म", correct: false },
            { text: "हिंदू और बौद्ध धर्म दोनों", correct: true },
            { text: "जैन धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस समय सिंध की आबादी में <b>हिंदू और बौद्ध धर्मों</b> के अनुयायी बड़ी संख्या में मौजूद थे।"
    },
    {
        question: "प्रश्न 33. अरबों ने सिंध में कौन सी नई बागवानी फसलें शुरू कीं?",
        answers: shuffle([
            { text: "आम और केला", correct: false },
            { text: "सेब और संतरा", correct: false },
            { text: "अंगूर और अनार", correct: true },
            { text: " कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खजूर के अलावा, अरबों ने मध्य पूर्वी फल जैसे <b>अंगूर और अनार</b> की खेती को भी सिंध के कुछ हिस्सों में बढ़ावा दिया।"
    },
    {
        question: "प्रश्न 34. अरब व्यापारियों को भारत में अपने व्यापारिक केंद्र स्थापित करने की अनुमति किसने दी थी?",
        answers: shuffle([
            { text: "गुर्जर-प्रतिहारों ने", correct: false },
            { text: "पालों ने", correct: false },
            { text: "राष्ट्रकूटों ने", correct: true },
            { text: "चोलों ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>राष्ट्रकूट शासकों</b> ने अरब व्यापारियों के साथ मैत्रीपूर्ण संबंध बनाए रखे और उन्हें अपने राज्य में बसने तथा व्यापार करने की अनुमति दी।"
    },
    {
        question: "प्रश्न 35. सिंध पर अरबों के कब्जे के बाद वहाँ किस भाषा को आधिकारिक संरक्षण मिला?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "संस्कृत", correct: false },
            { text: "अरबी", correct: true },
            { text: "सिंधी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब शासन के तहत, <b>अरबी भाषा</b> को प्रशासन और विद्वता की भाषा के रूप में संरक्षण और बढ़ावा मिला।"
    },
    {
        question: "प्रश्न 36. राजा दाहिर के पुत्र का क्या नाम था जिसने अरबों का प्रतिरोध जारी रखा?",
        answers: shuffle([
            { text: "आनंदपाल", correct: false },
            { text: "त्रिलोचनपाल", correct: false },
            { text: "जयसिंह", correct: true },
            { text: "भीमपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा दाहिर की मृत्यु के बाद उनके पुत्र <b>जयसिंह</b> ने कुछ समय तक अरबों के खिलाफ संघर्ष जारी रखा, लेकिन बाद में उसने इस्लाम स्वीकार कर लिया।"
    },
    {
        question: "प्रश्न 37. अरब आक्रमण के सांस्कृतिक परिणामों में सबसे महत्वपूर्ण क्या था?",
        answers: shuffle([
            { text: "भारतीय वास्तुकला का विनाश", correct: false },
            { text: "ज्ञान-विज्ञान का आदान-प्रदान", correct: true },
            { text: "भारतीय संगीत का पतन", correct: false },
            { text: "बड़े पैमाने पर धर्म परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस संपर्क का सबसे महत्वपूर्ण परिणाम <b>भारतीय ज्ञान (गणित, खगोल, चिकित्सा)</b> का अरब जगत में और वहाँ से यूरोप में प्रसार था।"
    },
    {
        question: "प्रश्न 38. 'चचनामा' का फारसी में अनुवाद किसके शासनकाल में हुआ?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "नासिरुद्दीन कुबाचा", correct: true },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अली बिन हामिद बिन अबी बक्र कूफी ने उच के शासक <b>नासिरुद्दीन कुबाचा</b> के समय में 'चचनामा' का अरबी से <b>फारसी</b> में अनुवाद किया।"
    },
    {
        question: "प्रश्न 39. अरबों ने भारत में किस फसल की खेती शुरू की?",
        answers: shuffle([
            { text: "कपास", correct: false },
            { text: "खजूर", correct: true },
            { text: "गेहूं", correct: false },
            { text: "चावल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों ने सिंध क्षेत्र में <b>खजूर</b> की खेती को बढ़ावा दिया और ऊँट पालन भी शुरू किया।"
    },
    {
        question: "प्रश्न 40. सिंध पर अरबों का शासन लगभग कितने वर्षों तक रहा?",
        answers: shuffle([
            { text: "50 वर्ष", correct: false },
            { text: "100 वर्ष", correct: false },
            { text: "लगभग 300 वर्ष", correct: true },
            { text: "500 से अधिक वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 8वीं सदी की शुरुआत से लेकर 11वीं सदी की शुरुआत में महमूद गजनवी के आक्रमणों तक सिंध और मुल्तान के कुछ हिस्सों पर अरबों का नियंत्रण बना रहा।"
    },
    {
        question: "प्रश्न 41. कौन सा अरब यात्री राष्ट्रकूट राजा अमोघवर्ष के दरबार में आया था?",
        answers: shuffle([
            { text: "अल-मसूदी", correct: false },
            { text: "सुलेमान", correct: true },
            { text: "इब्न हौकल", correct: false },
            { text: "अल-इदरीसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब यात्री <b>सुलेमान</b> ने 9वीं शताब्दी में भारत की यात्रा की और <b>राष्ट्रकूट शासकों</b> को दुनिया के चार महानतम शासकों में से एक बताया।"
    },
    {
        question: "प्रश्न 42. अरब आक्रमण से पहले, सिंध की सामाजिक संरचना कैसी थी?",
        answers: shuffle([
            { text: "समतावादी", correct: false },
            { text: "आदिवासी और कबीलाई", correct: true },
            { text: "कठोर जाति-आधारित पदानुक्रम", correct: false },
            { text: "व्यापारिक संघों पर आधारित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शहरी केंद्रों के बाहर, सिंध का समाज मुख्य रूप से विभिन्न <b>जाट, मेड</b> और अन्य कबीलों में संगठित था, जिनकी अपनी-अपनी निष्ठाएँ और सरदार थे।"
    },
    {
        question: "प्रश्न 43. मुहम्मद बिन कासिम से पहले सिंध पर आक्रमण करने के लिए भेजे गए अरब सेनापति कौन थे जो असफल रहे?",
        answers: shuffle([
            { text: "a) उबैदुल्लाह", correct: false },
            { text: "b) बुदैल", correct: false },
            { text: "a), b) दोनों", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद बिन कासिम के अभियान से पहले, अल-हज्जाज ने <b>उबैदुल्लाह</b> और <b>बुदैल</b> के नेतृत्व में दो अभियान भेजे थे, लेकिन वे दोनों पराजित हुए और मारे गए।"
    },
    {
        question: "प्रश्न 44. 'हिंदसा' शब्द का प्रयोग अरब किस संदर्भ में करते थे?",
        answers: shuffle([
            { text: "भारतीय तलवारों के लिए", correct: false },
            { text: "भारतीय कपड़ों के लिए", correct: false },
            { text: "भारतीय अंकों (Numerals) के लिए", correct: true },
            { text: "भारतीय मसालों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों ने भारतीय अंक प्रणाली को '<b>हिंदसा</b>' (हिंद से प्राप्त) कहा, जो बाद में 'अरबी अंक' के रूप में दुनिया भर में प्रसिद्ध हुई।"
    },
    {
        question: "प्रश्न 45. अरब आक्रमण ने भारत के किस हिस्से को शेष भारत से राजनीतिक और सांस्कृतिक रूप से कुछ समय के लिए अलग कर दिया?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "गुजरात", correct: false },
            { text: "सिंध", correct: true },
            { text: "बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों के कब्जे के बाद, <b>सिंध क्षेत्र</b> राजनीतिक रूप से शेष भारतीय राज्यों से कट गया और बगदाद के खलीफा के अधीन आ गया।"
    },
    {
        question: "प्रश्न 46. अरबों के आक्रमण के समय किस भारतीय बंदरगाह का मिस्र और फारस के साथ गहन व्यापारिक संबंध था?",
        answers: shuffle([
            { text: "कालीकट", correct: false },
            { text: "सूरत", correct: false },
            { text: "देबल", correct: true },
            { text: "ताम्रलिप्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>देबल</b> सिंध का एक प्रमुख <b>अंतरराष्ट्रीय बंदरगाह</b> था जहाँ से पश्चिमी देशों के साथ व्यापार होता था।"
    },
    {
        question: "प्रश्न 47. राजा दाहिर का चचेरा भाई, जिसने सेहवान के किले की रक्षा की, उसका क्या नाम था?",
        answers: shuffle([
            { text: "बज्र", correct: true },
            { text: "जयसिंह", correct: false },
            { text: "गोपीनाथ", correct: false },
            { text: "विक्रम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सेहवान के किले</b> का शासक <b>बज्र</b> था, जो राजा दाहिर का चचेरा भाई था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने कुछ प्रतिरोध के बाद किला छोड़ दिया।"
    },
    {
        question: "प्रश्न 48. सिंध में अरब शासन के दौरान स्थानीय हिंदुओं से वसूले जाने वाले भू-राजस्व को क्या कहा जाता था?",
        answers: shuffle([
            { text: "जजिया", correct: false },
            { text: "जकात", correct: false },
            { text: "खराज", correct: true },
            { text: "उश्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>खराज</b>' वह <b>भू-राजस्व</b> था जो गैर-मुस्लिम किसानों से वसूला जाता था, जबकि 'जजिया' एक प्रति व्यक्ति सैन्य-सुरक्षा कर था।"
    },
    {
        question: "प्रश्न 49. 'बैटल ऑफ राजस्थान' (राजस्थान का युद्ध) किनके बीच लड़ी गई थी?",
        answers: shuffle([
            { text: "गुर्जर-प्रतिहार और अरब", correct: true },
            { text: "चौहान और तुर्क", correct: false },
            { text: "राष्ट्रकूट और अरब", correct: false },
            { text: "चालुक्य और अरब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध लगभग <b>738 ई.</b> में <b>गुर्जर-प्रतिहार शासक नागभट्ट प्रथम</b> के नेतृत्व वाले भारतीय गठबंधन और अरब सेना के बीच हुआ, जिसमें अरबों की निर्णायक हार हुई।"
    },
    {
        question: "प्रश्न 50. अरबों ने सिंध में शासन की कौन सी प्रणाली लागू करने का प्रयास किया?",
        answers: shuffle([
            { text: "सामंती प्रणाली", correct: false },
            { text: "इक्ता प्रणाली", correct: true },
            { text: "मनसबदारी प्रणाली", correct: false },
            { text: "जमींदारी प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों ने सिंध में भूमि को '<b>इक्ता</b>' के रूप में <b>सैन्य अधिकारियों</b> को बांटने की प्रथा शुरू की, जो बाद में दिल्ली सल्तनत द्वारा व्यापक रूप से अपनाई गई।"
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