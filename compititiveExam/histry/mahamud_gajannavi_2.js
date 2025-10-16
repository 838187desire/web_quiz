const questions = [
    {
        topHeading: "महमूद गजनवी पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. महमूद गजनवी ने गजनी में किस नाम से एक विश्वविद्यालय की स्थापना की थी?",
        answers: shuffle([
            { text: "दार-उल-उलूम", correct: false },
            { text: "निजामिया", correct: false },
            { text: "फिरदौसी विश्वविद्यालय", correct: false },
            { text: "इसका कोई विशेष नाम नहीं था, बस एक मदरसे के रूप में जाना जाता था।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने गजनी में एक विशाल <b>मदरसा</b> (उच्च शिक्षा का केंद्र), एक <b>पुस्तकालय</b> और एक <b>संग्रहालय</b> का निर्माण करवाया, जिसे कभी-कभी विश्वविद्यालय के समकक्ष माना जाता है, पर इसका कोई <b>औपचारिक नाम</b> दर्ज नहीं है।"
    },
    {
        question: "प्रश्न 2. महमूद गजनवी के आक्रमण के समय कश्मीर का शासक कौन था?",
        answers: shuffle([
            { text: "दिद्दा", correct: false },
            { text: "संग्रामराज", correct: true },
            { text: "अनंतदेव", correct: false },
            { text: "हर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी ने 1015 ई. और 1021 ई. में कश्मीर पर आक्रमण करने का प्रयास किया, लेकिन <b>लोहकोट किले</b> की मजबूती और खराब मौसम के कारण वह असफल रहा।<br><br><i class='fa-solid fa-angles-right icon'></i> उस समय वहाँ <b>लोहार वंश के संस्थापक संग्रामराज</b> का शासन था।"
    },
    {
        question: "प्रश्न 3. महमूद गजनवी के अभियानों का क्रम निर्धारित करने का सबसे विश्वसनीय स्रोत क्या है?",
        answers: shuffle([
            { text: "फिरदौसी का शाहनामा", correct: false },
            { text: "अल-बिरूनी की किताब-उल-हिन्द", correct: false },
            { text: "उत्बी की किताब-उल-यामिनी", correct: true },
            { text: "निजामुद्दीन अहमद की तबकात-ए-अकबरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि <b>उत्बी</b> एक <b>समकालीन और दरबारी इतिहासकार</b> था, इसलिए उसके ग्रंथ को गजनवी के अभियानों के कालक्रम के लिए सबसे <b>प्रामाणिक</b> माना जाता है, भले ही उसमें अतिशयोक्ति हो।"
    },
    {
        question: "प्रश्न 4. महमूद गजनवी द्वारा नष्ट की गई 'चक्रस्वामी' की मूर्ति किस धातु की बनी थी?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: false },
            { text: "कांसा", correct: true },
            { text: "अष्टधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थानेसर से लूटी गई भगवान विष्णु (चक्रस्वामी) की यह प्रसिद्ध मूर्ति <b>कांसे</b> से बनी हुई थी।"
    },
    {
        question: "प्रश्न 5. 'यमीन-उद-दौला' उपाधि का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "साम्राज्य का बायां हाथ", correct: false },
            { text: "साम्राज्य का दाहिना हाथ", correct: true },
            { text: "साम्राज्य का हृदय", correct: false },
            { text: "साम्राज्य का उत्तराधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह उपाधि खलीफा द्वारा महमूद गजनवी को दी गई थी, जो खलीफा के साम्राज्य के एक शक्तिशाली और विश्वसनीय समर्थक होने का प्रतीक थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है '<b>साम्राज्य का दाहिना हाथ</b>'।"
    },
    {
        question: "प्रश्न 6. महमूद गजनवी किस तुर्क कबीले से था?",
        answers: shuffle([
            { text: "कार्नुक", correct: false },
            { text: "सल्जूक", correct: false },
            { text: "ओगुज़", correct: false },
            { text: "इसमें स्पष्टता नहीं है, उसे सामान्यतः तुर्क कहा जाता है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गजनवी वंश की जातीय उत्पत्ति पर इतिहासकारों में मतभेद है, लेकिन वे फारसी संस्कृति से प्रभावित <b>तुर्क मूल</b> के थे।<br><br><i class='fa-solid fa-angles-right icon'></i> किसी विशिष्ट कबीले का नाम निश्चित रूप से नहीं लिया जाता।"
    },
    {
        question: "प्रश्न 7. महमूद गजनवी के किस अभियान का उद्देश्य गंगा घाटी के समृद्ध मंदिरों को लूटना था?",
        answers: shuffle([
            { text: "नगरकोट अभियान", correct: false },
            { text: "मुल्तान अभियान", correct: false },
            { text: "कन्नौज अभियान", correct: true },
            { text: "कालिंजर अभियान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1018-19 ई.</b> का <b>कन्नौज अभियान</b> विशेष रूप से गंगा के मैदान के धनवान शहरों और मंदिरों, जैसे <b>मथुरा और कन्नौज</b>, को लक्षित करके किया गया था।"
    },
    {
        question: "प्रश्न 8. महमूद गजनवी की मृत्यु के बाद उसका उत्तराधिकारी कौन बना?",
        answers: shuffle([
            { text: "मसूद", correct: true },
            { text: "मुहम्मद", correct: false },
            { text: "इस्माइल", correct: false },
            { text: "सुबुक्तगीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी की मृत्यु के बाद उसके दोनों पुत्रों, मुहम्मद और <b>मसूद</b>, के बीच उत्तराधिकार का युद्ध हुआ जिसमें मसूद विजयी हुआ और अगला सुल्तान बना।"
    },
    {
        question: "प्रश्न 9. महमूद गजनवी के शासनकाल को किस साम्राज्य का 'स्वर्ण युग' माना जाता है?",
        answers: shuffle([
            { text: "दिल्ली सल्तनत का", correct: false },
            { text: "मुगल साम्राज्य का", correct: false },
            { text: "गजनवी साम्राज्य का", correct: true },
            { text: "सामानी साम्राज्य का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी के शासनकाल में <b>गजनवी साम्राज्य</b> अपनी शक्ति, समृद्धि और सांस्कृतिक उपलब्धियों के चरम पर था, इसलिए इसे गजनवी साम्राज्य का <b>स्वर्ण युग</b> कहा जाता है।"
    },
    {
        question: "प्रश्न 10. महमूद गजनवी ने किस शासक को पराजित कर 'नवासा शाह' की उपाधि दी थी?",
        answers: shuffle([
            { text: "जयपाल", correct: false },
            { text: "आनंदपाल", correct: false },
            { text: "सुखपाल (जयपाल का पौत्र)", correct: true },
            { text: "त्रिलोचनपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सुखपाल</b>, जिसने इस्लाम स्वीकार कर लिया था, को महमूद ने पंजाब का गवर्नर नियुक्त किया था और उसे '<b>नवासा शाह</b>' (पोता शासक) की उपाधि दी थी।"
    },
    {
        question: "प्रश्न 11. अल-बिरूनी के अनुसार, तत्कालीन भारतीय समाज कितने वर्णों में विभाजित था?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पांच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-बिरूनी ने अपनी पुस्तक 'किताब-उल-हिन्द' में भारतीय सामाजिक व्यवस्था का वर्णन करते हुए <b>चार प्रमुख वर्णों</b>- ब्राह्मण, क्षत्रिय, वैश्य और शूद्र का उल्लेख किया है।"
    },
    {
        question: "प्रश्न 12. महमूद गजनवी के आक्रमण के समय भारत का कौन सा क्षेत्र अपने समुद्री व्यापार के लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "कश्मीर", correct: false },
            { text: "गंगा घाटी", correct: false },
            { text: "गुजरात और सिंध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गुजरात</b> (सोमनाथ और भड़ौच बंदरगाह) और <b>सिंध</b> (देबल बंदरगाह) उस समय के प्रमुख अंतरराष्ट्रीय व्यापार केंद्र थे, जो उन्हें आर्थिक रूप से बहुत समृद्ध बनाते थे।"
    },
    {
        question: "प्रश्न 13. गजनवी साम्राज्य के पतन का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "भारतीय राजाओं का संयुक्त प्रतिरोध", correct: false },
            { text: "सल्जूक तुर्कों का उदय", correct: true },
            { text: "आंतरिक गृहयुद्ध", correct: false },
            { text: "मंगोल आक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद के उत्तराधिकारी कमजोर थे और उन्हें मध्य एशिया में शक्तिशाली <b>सल्जूक तुर्कों</b> से लगातार चुनौतियों का सामना करना पड़ा।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>दंदानक़ान के युद्ध (1040 ई.)</b> में हार के बाद गजनवी साम्राज्य का पतन शुरू हो गया।"
    },
    {
        question: "प्रश्न 14. महमूद गजनवी की सेना में सबसे भयावह हिस्सा कौन सा माना जाता था?",
        answers: shuffle([
            { text: "घुड़सवार तीरंदाज", correct: true },
            { text: "पैदल सेना", correct: false },
            { text: "हाथी दस्ता", correct: false },
            { text: "गुलाम सैनिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसकी सेना की सबसे बड़ी ताकत उसके तेज-तर्रार और कुशल <b>घुड़सवार तीरंदाज</b> थे, जो तेजी से हमला करके दुश्मन को संभलने का मौका नहीं देते थे।"
    },
    {
        question: "प्रश्न 15. 'सुबुक्तगीन' गजनी का शासक बनने से पहले किसका गुलाम था?",
        answers: shuffle([
            { text: "महमूद गजनवी", correct: false },
            { text: "अलप्तगीन", correct: true },
            { text: "इस्माइल", correct: false },
            { text: "सामानी शासक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सुबुक्तगीन</b> को <b>अलप्तगीन</b> ने एक गुलाम के रूप में खरीदा था और उसकी योग्यता से प्रभावित होकर उसे अपना दामाद और सेनापति बना लिया।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में वह गजनी का शासक बना।"
    },
    {
        question: "प्रश्न 16. महमूद गजनवी ने भटिंडा (पंजाब) के किस शासक को पराजित किया था?",
        answers: shuffle([
            { text: "राजा दाहिर", correct: false },
            { text: "राजा जयपाल", correct: false },
            { text: "राजा बीजी राय", correct: true },
            { text: "राजा आनंदपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने तीसरे अभियान (1004-05 ई.) में, महमूद गजनवी ने भेरा (भटिंडा के पास) के शासक <b>बीजी राय</b> को हराया, जिन्होंने अपमान से बचने के लिए आत्महत्या कर ली थी।"
    },
    {
        question: "प्रश्न 17. महमूद गजनवी के समय हिन्दूशाही राज्य की सीमा कहाँ तक फैली हुई थी?",
        answers: shuffle([
            { text: "केवल पंजाब तक", correct: false },
            { text: "कश्मीर से मुल्तान और काबुल तक", correct: true },
            { text: "केवल सिंध तक", correct: false },
            { text: "गंगा घाटी तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक विशाल और शक्तिशाली राज्य था जो <b>अफगानिस्तान के कुछ हिस्सों से लेकर पंजाब तक</b> फैला था और उत्तर-पश्चिम भारत के लिए एक प्रहरी का काम करता था।"
    },
    {
        question: "प्रश्न 18. महमूद गजनवी की भारतीय विजयों में से किसे 'इस्लाम की सबसे बड़ी विजय' कहा गया है?",
        answers: shuffle([
            { text: "सोमनाथ विजय", correct: true },
            { text: "नगरकोट विजय", correct: false },
            { text: "कन्नौज विजय", correct: false },
            { text: "थानेसर विजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोमनाथ की मूर्तिपूजा के एक प्रमुख केंद्र के रूप में ख्याति के कारण, इसके विनाश को इस्लामी दुनिया में, विशेषकर कट्टरपंथियों द्वारा, <b>इस्लाम की एक महान विजय</b> के रूप में प्रचारित किया गया।"
    },
    {
        question: "प्रश्न 19. बैहाकी को किस शासक ने 'पूर्व का पेप्स' (एक प्रसिद्ध यूनानी इतिहासकार) कहा था?",
        answers: shuffle([
            { text: "लेन-पूल", correct: true },
            { text: "विन्सेंट स्मिथ", correct: false },
            { text: "हेनरी इलियट", correct: false },
            { text: "एडवर्ड गिब्बन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध इतिहासकार <b>स्टेनली लेन-पूल</b> ने बैहाकी के विस्तृत और जीवंत लेखन शैली की तुलना प्रसिद्ध यूनानी इतिहासकार <b>पेप्स</b> से की है।"
    },
    {
        question: "प्रश्न 20. महमूद गजनवी के आक्रमण के समय भारत में किस प्रमुख दर्शन का प्रभाव था?",
        answers: shuffle([
            { text: "बौद्ध दर्शन", correct: false },
            { text: "जैन दर्शन", correct: false },
            { text: "चार्वाक दर्शन", correct: false },
            { text: "शंकराचार्य का अद्वैत वेदांत दर्शन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 8वीं-9वीं शताब्दी में शंकराचार्य द्वारा हिंदू धर्म के पुनरुत्थान के बाद, उनका <b>अद्वैत वेदांत दर्शन</b> भारत में प्रमुख बौद्धिक और दार्शनिक शक्ति बन गया था।"
    },
    {
        question: "प्रश्न 21. महमूद गजनवी ने किस युद्ध में तोपों का प्रयोग करने का प्रयास किया था (हालांकि वे आदिम रूप में थीं)?",
        answers: shuffle([
            { text: "वैहिन्द का युद्ध", correct: false },
            { text: "सोमनाथ का युद्ध", correct: false },
            { text: "जाटों के विरुद्ध युद्ध", correct: false },
            { text: "ऐसा कोई प्रमाण नहीं मिलता है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी के समय में बारूद का उपयोग आग फेंकने वाले उपकरणों (naphtha) के रूप में होता था, लेकिन <b>तोपखाने का विकास बहुत बाद में हुआ</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी सेना में ऐसे किसी हथियार का कोई विश्वसनीय प्रमाण नहीं है।"
    },
    {
        question: "प्रश्न 22. महमूद गजनवी के उत्तराधिकारी मसूद को किस युद्ध में सल्जूकों ने निर्णायक रूप से हराया था?",
        answers: shuffle([
            { text: "मर्व का युद्ध", correct: false },
            { text: "निशापुर का युद्ध", correct: false },
            { text: "दंदानक़ान का युद्ध", correct: true },
            { text: "हेरात का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1040 ई.</b> में हुए <b>दंदानक़ान के युद्ध</b> में सुल्तान मसूद की सल्जूक तुर्कों के हाथों विनाशकारी हार हुई, जिससे गजनवियों ने खुरासान और मध्य एशिया पर अपना नियंत्रण खो दिया।"
    },
    {
        question: "प्रश्न 23. अल-बिरूनी भारत में कितने वर्षों तक रहा?",
        answers: shuffle([
            { text: "लगभग 2 वर्ष", correct: false },
            { text: "लगभग 5 वर्ष", correct: false },
            { text: "लगभग 10 वर्ष", correct: true },
            { text: "लगभग 20 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-बिरूनी 1017 ई. में ख्वारिज्म पर गजनवी के आक्रमण के बाद एक बंदी के रूप में भारत आया और लगभग <b>एक दशक</b> तक यहाँ रहकर उसने भारतीय ज्ञान-विज्ञान का अध्ययन किया।"
    },
    {
        question: "प्रश्न 24. महमूद गजनवी द्वारा तोड़ी गई सोमनाथ की मूर्ति के टुकड़ों का क्या किया गया?",
        answers: shuffle([
            { text: "उन्हें भारत में ही छोड़ दिया गया", correct: false },
            { text: "उन्हें समुद्र में फेंक दिया गया", correct: false },
            { text: "उन्हें गजनी ले जाकर जामा मस्जिद की सीढ़ियों में लगाया गया", correct: true },
            { text: "उन्हें खलीफा को उपहार में दिया गया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लामी इतिहासकारों के अनुसार, मूर्ति के टुकड़ों को गजनी ले जाया गया और वहाँ की <b>मुख्य मस्जिद और महल की सीढ़ियों पर लगाया गया</b> ताकि लोग उन पर पैर रखकर चलें, जो इस्लाम की विजय का प्रतीक था।"
    },
    {
        question: "प्रश्न 25. किस शासक ने महमूद गजनवी को भारत पर आक्रमण करने के लिए उकसाया था?",
        answers: shuffle([
            { text: "मुल्तान के शासक दाउद ने", correct: false },
            { text: "हिन्दूशाही शासक जयपाल ने", correct: false },
            { text: "त्रिलोचनपाल ने", correct: false },
            { text: "ऐसा कोई स्पष्ट प्रमाण नहीं है, उसके अपने उद्देश्य थे।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी को किसी भारतीय शासक ने आक्रमण के लिए नहीं उकसाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके आक्रमण के पीछे <b>धन की लालसा, धार्मिक उत्साह और साम्राज्य विस्तार की महत्वाकांक्षा</b> जैसे स्वयं के कारण थे।"
    },
    {
        question: "प्रश्न 26. गजनवी साम्राज्य की राजभाषा क्या थी?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: true },
            { text: "संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि गजनवी शासक तुर्क मूल के थे, लेकिन उन्होंने अपनी प्रशासनिक और साहित्यिक भाषा के रूप में <b>फारसी</b> को अपनाया, जिससे इस भाषा का बहुत विकास हुआ।"
    },
    {
        question: "प्रश्न 27. महमूद गजनवी की कब्र कहाँ स्थित है?",
        answers: shuffle([
            { text: "लाहौर, पाकिस्तान", correct: false },
            { text: "गजनी, अफगानिस्तान", correct: true },
            { text: "कंधार, अफगानिस्तान", correct: false },
            { text: "हेरात, अफगानिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी को उसकी मृत्यु के बाद उसकी राजधानी <b>गजनी</b> में ही दफनाया गया था, जहाँ आज भी उसका मकबरा मौजूद है।"
    },
    {
        question: "प्रश्न 28. महमूद गजनवी के समकालीन पाल वंश का शासक कौन था?",
        answers: shuffle([
            { text: "धर्मपाल", correct: false },
            { text: "देवपाल", correct: false },
            { text: "महिपाल प्रथम", correct: true },
            { text: "गोपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब महमूद गजनवी उत्तर भारत में आक्रमण कर रहा था, उस समय बंगाल और बिहार में पाल वंश के शक्तिशाली शासक <b>महिपाल प्रथम</b> (लगभग 988-1038 ई.) का शासन था।"
    },
    {
        question: "प्रश्न 29. सोमनाथ से लूटे गए खजाने को ले जाने के लिए महमूद गजनवी ने कितने ऊंटों का इस्तेमाल किया था?",
        answers: shuffle([
            { text: "लगभग 1000", correct: false },
            { text: "लगभग 3000", correct: false },
            { text: "लगभग 5000", correct: false },
            { text: "इतिहासकारों ने संख्या का उल्लेख नहीं किया है, केवल 'अपार' बताया है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐतिहासिक स्रोतों में लूटी गई संपत्ति को \"<b>अपार</b>\" या \"<b>अगणित</b>\" बताया गया है, लेकिन इसे ले जाने के लिए उपयोग किए गए ऊंटों की कोई निश्चित संख्या दर्ज नहीं है।"
    },
    {
        question: "प्रश्न 30. महमूद गजनवी ने जब कन्नौज पर आक्रमण किया, तो वहाँ किस वंश का शासन था?",
        answers: shuffle([
            { text: "पाल वंश", correct: false },
            { text: "राष्ट्रकूट वंश", correct: false },
            { text: "गुर्जर-प्रतिहार वंश", correct: true },
            { text: "चंदेल वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1018 ई. में गजनवी के आक्रमण के समय कन्नौज पर <b>गुर्जर-प्रतिहार वंश</b> का शासन था और तत्कालीन शासक <b>राज्यपाल</b> था, जो बिना लड़े ही भाग गया।"
    },
    {
        question: "प्रश्न 31. महमूद गजनवी की सैन्य रणनीति की सबसे बड़ी विशेषता क्या थी?",
        answers: shuffle([
            { text: "किलों की घेराबंदी", correct: false },
            { text: "हाथियों का प्रयोग", correct: false },
            { text: "गति और आश्चर्य का तत्व", correct: true },
            { text: "नौसैनिक शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वह अपनी सेना के साथ बहुत तेजी से लंबी दूरी तय करता था और दुश्मन पर <b>अचानक हमला</b> करता था, जिससे उन्हें तैयारी का मौका नहीं मिलता था।"
    },
    {
        question: "प्रश्न 32. हिन्दूशाही राजा जयपाल ने किस युद्ध में हार के बाद चिता में कूदकर आत्मदाह कर लिया था?",
        answers: shuffle([
            { text: "कन्नौज का युद्ध", correct: false },
            { text: "कालिंजर का युद्ध", correct: false },
            { text: "थानेसर का युद्ध", correct: false },
            { text: "पेशावर का युद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1001 ई. में पेशावर</b> के पास महमूद गजनवी से मिली अपमानजनक हार के बाद, राजा जयपाल ने स्वयं को शासन के अयोग्य मानकर <b>आत्मदाह</b> कर लिया।"
    },
    {
        question: "प्रश्न 33. महमूद गजनवी द्वारा जीता गया 'ख्वारिज्म' का आधुनिक नाम क्या है?",
        answers: shuffle([
            { text: "खीवा", correct: true },
            { text: "बुखारा", correct: false },
            { text: "समरकंद", correct: false },
            { text: "ताशकंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ख्वारिज्म</b> मध्य एशिया का एक ऐतिहासिक क्षेत्र था, जिसका केंद्र आधुनिक उज़्बेकिस्तान में स्थित <b>खीवा</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> यहीं से अल-बिरूनी को बंदी बनाया गया था।"
    },
    {
        question: "प्रश्न 34. किस ग्रंथ में यह उल्लेख है कि महमूद ने फिरदौसी को प्रत्येक छंद के लिए एक सोने का सिक्का देने का वादा किया था?",
        answers: shuffle([
            { text: "किताब-उल-यामिनी", correct: false },
            { text: "चहार मकाला", correct: true },
            { text: "शाहनामा", correct: false },
            { text: "तारीख-ए-बैहाकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रसिद्ध कहानी <b>निजामी उरूज़ी</b> द्वारा लिखित '<b>चहार मकाला</b>' में मिलती है, हालाँकि इसकी ऐतिहासिकता पर कुछ विद्वान संदेह करते हैं।"
    },
    {
        question: "प्रश्न 35. महमूद गजनवी के आक्रमणों ने भारत में भविष्य के किस आक्रमणकारी के लिए मार्ग प्रशस्त किया?",
        answers: shuffle([
            { text: "तैमूर लंग", correct: false },
            { text: "चंगेज खान", correct: false },
            { text: "मुहम्मद गोरी", correct: true },
            { text: "बाबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गजनवी के आक्रमणों ने उत्तर-पश्चिम भारत की रक्षा पंक्ति को ध्वस्त कर दिया था, जिसका लाभ लगभग 150 वर्षों बाद <b>शहाबुद्दीन मुहम्मद गोरी</b> ने उठाया और भारत में मुस्लिम शासन की नींव रखी।"
    },
    {
        question: "प्रश्न 36. महमूद गजनवी का कौन सा अभियान रेगिस्तानी इलाके की कठिनाइयों के लिए जाना जाता है?",
        answers: shuffle([
            { text: "कन्नौज अभियान", correct: false },
            { text: "कालिंजर अभियान", correct: false },
            { text: "सोमनाथ अभियान", correct: true },
            { text: "मुल्तान अभियान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोमनाथ जाने और विशेषकर वहाँ से <b>कच्छ के रण</b> और <b>थार मरुस्थल</b> से होकर लौटने का मार्ग अत्यंत कठिन और खतरनाक था, जिसमें उसकी सेना को भारी कठिनाई हुई।"
    },
    {
        question: "प्रश्न 37. महमूद गजनवी के जीवन पर आधारित 'गजनी' नामक आधुनिक फिल्म का ऐतिहासिक सत्यता से क्या संबंध है?",
        answers: shuffle([
            { text: "यह पूरी तरह से ऐतिहासिक है", correct: false },
            { text: "यह आंशिक रूप से ऐतिहासिक है", correct: false },
            { text: "इसका महमूद गजनवी के जीवन से कोई लेना-देना नहीं है", correct: true },
            { text: "यह अल-बिरूनी की कहानी है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय फिल्म '<b>गजनी</b>' का नाम केवल एक संदर्भ के रूप में प्रयोग किया गया है;<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कहानी का <b>ऐतिहासिक महमूद गजनवी से कोई संबंध नहीं है</b>।"
    },
    {
        question: "प्रश्न 38. महमूद गजनवी की सेना के हिंदू सैनिकों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "सिपाही", correct: false },
            { text: "हिन्दुस्तानी", correct: false },
            { text: "ये सैनिक अपने धर्म का पालन करने के लिए स्वतंत्र थे", correct: true },
            { text: "उन्हें इस्लाम कबूल करना पड़ता था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण तथ्य है कि उसकी सेना में शामिल हिंदू सैनिक अपने <b>धर्म का पालन करने के लिए पूरी तरह से स्वतंत्र थे</b> और उनके लिए अलग क्वार्टर भी थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उसकी सैन्य व्यावहारिकता को दर्शाता है।"
    },
    {
        question: "प्रश्न 39. महमूद गजनवी की सेना में तुर्कों के अलावा और कौन से सैनिक प्रमुख थे?",
        answers: shuffle([
            { text: "अफगान, भारतीय और फारसी", correct: true },
            { text: "मंगोल और चीनी", correct: false },
            { text: "अरब और मिस्री", correct: false },
            { text: "केवल तुर्क सैनिक थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसकी सेना एक मिश्रित सेना थी जिसमें तुर्कों के अलावा स्थानीय <b>अफगान, ताजिक (फारसी) और यहाँ तक कि हिंदू भारतीय सैनिक</b> भी बड़ी संख्या में शामिल थे।"
    },
    {
        question: "प्रश्न 40. महमूद गजनवी के शासन काल में गजनी किस कला के लिए प्रसिद्ध हुआ?",
        answers: shuffle([
            { text: "चित्रकला", correct: false },
            { text: "संगीत", correct: false },
            { text: "वास्तुकला और उद्यान निर्माण", correct: true },
            { text: "मूर्तिकला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने भारत से लूटे गए धन से गजनी में कई भव्य इमारतें, मस्जिदें और सुंदर <b>बाग-बगीचे</b> बनवाए, जिससे शहर की सुंदरता बहुत बढ़ गई।"
    },
    {
        question: "प्रश्न 41. अल-बिरूनी ने भारत के बारे में लिखते समय किस बात की आलोचना की?",
        answers: shuffle([
            { text: "भारतीय भोजन", correct: false },
            { text: "भारतीय वास्तुकला", correct: false },
            { text: "भारतीयों का अपनी संस्कृति को श्रेष्ठ मानने का अहंकार", correct: true },
            { text: "भारतीय सैन्य रणनीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-बिरूनी ने लिखा कि भारतीय विद्वान और लोग अपनी विद्या और संस्कृति को ही सर्वश्रेष्ठ मानते हैं और <b>बाहरी दुनिया से ज्ञान लेने में संकोच</b> करते हैं, जो उनके पतन का एक कारण था।"
    },
    {
        question: "प्रश्न 42. गजनवी वंश का अंतिम शासक कौन था, जिसे गोरियों ने हराया था?",
        answers: shuffle([
            { text: "मसूद तृतीय", correct: false },
            { text: "बहराम शाह", correct: false },
            { text: "खुसरो मलिक", correct: true },
            { text: "अरसलान शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गजनवी वंश का अंतिम शासक <b>खुसरो मलिक</b> था, जो लाहौर तक सीमित हो गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसे <b>1186 ई.</b> में मुहम्मद गोरी ने पराजित कर बंदी बना लिया और इस वंश का अंत कर दिया।"
    },
    {
        question: "प्रश्न 43. महमूद गजनवी ने किस भारतीय ज्योतिषीय और खगोलीय ज्ञान की प्रशंसा की थी?",
        answers: shuffle([
            { text: "वराहमिहिर की", correct: false },
            { text: "आर्यभट्ट की", correct: false },
            { text: "ब्रह्मगुप्त की", correct: false },
            { text: " सभी के ज्ञान की", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-बिरूनी के माध्यम से महमूद गजनवी और उसके दरबार को भारतीय गणित, ज्योतिष और खगोल विज्ञान की उन्नत परंपरा का पता चला, जिसकी उन्होंने सराहना की।"
    },
    {
        question: "प्रश्न 44. महमूद गजनवी के आक्रमण के समय भारत में कौन सी लिपि प्रमुख रूप से प्रचलित थी?",
        answers: shuffle([
            { text: "खरोष्ठी", correct: false },
            { text: "ब्राह्मी", correct: false },
            { text: "सिद्धम और नागरी", correct: true },
            { text: "अरमाइक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस काल में उत्तर भारत में <b>सिद्धमातृका (सिद्धम)</b> और <b>देवनागरी</b> लिपि के प्रारंभिक रूप का विकास और प्रचलन हो चुका था, जैसा कि गजनवी के संस्कृत सिक्कों से भी पता चलता है।"
    },
    {
        question: "प्रश्न 45. महमूद गजनवी ने किस ईरानी त्योहार को अपने दरबार में धूमधाम से मनाना शुरू किया?",
        answers: shuffle([
            { text: "ईद-उल-फितर", correct: false },
            { text: "नवरोज", correct: true },
            { text: "शब-ए-बारात", correct: false },
            { text: "ईद-उल-अजहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फारसी संस्कृति से प्रभावित होने के कारण, गजनवी दरबार में फारसी नववर्ष '<b>नवरोज</b>' का त्योहार बड़े उत्साह के साथ मनाया जाता था।"
    },
    {
        question: "प्रश्न 46. महमूद गजनवी के बाद गजनवी साम्राज्य की राजधानी कहाँ स्थानांतरित हो गई थी?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "मुल्तान", correct: false },
            { text: "लाहौर", correct: true },
            { text: "गजनी ही बनी रही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सल्जूकों के दबाव के कारण जब मध्य एशिया में गजनवी साम्राज्य का पतन हो गया, तो उसके कमजोर उत्तराधिकारियों ने अपनी राजधानी को सुरक्षित स्थान <b>लाहौर</b> में स्थानांतरित कर दिया।"
    },
    {
        question: "प्रश्न 47. महमूद गजनवी के समकालीन प्रसिद्ध सूफी संत कौन थे?",
        answers: shuffle([
            { text: "मोइनुद्दीन चिश्ती", correct: false },
            { text: "निजामुद्दीन औलिया", correct: false },
            { text: "अबुल हसन अल-खुजविरी (दाता गंज बख्श)", correct: true },
            { text: "बाबा फरीद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध सूफी संत <b>दाता गंज बख्श (अबुल हसन अल-खुजविरी)</b> गजनवी काल में गजनी से <b>लाहौर</b> आए थे, जहाँ आज भी उनकी दरगाह है।"
    },
    {
        question: "प्रश्न 48. महमूद गजनवी के किस कार्य से पता चलता है कि वह केवल एक लुटेरा ही नहीं, बल्कि एक शासक भी था?",
        answers: shuffle([
            { text: "मंदिरों को नष्ट करना", correct: false },
            { text: "भारत से धन लूटना", correct: false },
            { text: "पंजाब में एक व्यवस्थित प्रशासन स्थापित करना", correct: true },
            { text: "युद्ध में क्रूरता दिखाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब को अपने साम्राज्य में मिलाने के बाद उसने वहाँ गवर्नर नियुक्त किए, सिक्के जारी किए और एक <b>प्रशासनिक व्यवस्था</b> स्थापित की, जो उसके शासक होने का प्रमाण है।"
    },
    {
        question: "प्रश्न 49. \"सुल्तान महमूद एक महान सेनापति था, लेकिन एक दूरदर्शी राजनेता नहीं।\" यह कथन किसका हो सकता है?",
        answers: shuffle([
            { text: "अल-बिरूनी", correct: false },
            { text: "लेन-पूल", correct: false },
            { text: "जदुनाथ सरकार", correct: false },
            { text: "मोहम्मद हबीब", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोफेसर <b>मोहम्मद हबीब</b> जैसे आधुनिक इतिहासकारों का मानना है कि महमूद की प्रतिभा सैन्य क्षेत्र तक ही सीमित थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने भारत में एक स्थायी साम्राज्य बनाने का कोई प्रयास नहीं किया, जो उसकी राजनीतिक <b>अदूरदर्शिता</b> को दर्शाता है।"
    },
    {
        question: "प्रश्न 50. महमूद गजनवी ने किस झील के पास बांध बनवाकर सिंचाई की व्यवस्था की थी?",
        answers: shuffle([
            { text: "वुलर झील", correct: false },
            { text: "सांभर झील", correct: false },
            { text: "बंद-ए-सुल्तान (गजनी के पास)", correct: true },
            { text: "पुष्कर झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने अपने साम्राज्य में कृषि को बढ़ावा देने के लिए गजनी के पास एक बड़ी झील पर <b>बांध</b> का निर्माण करवाया था, जो उसके रचनात्मक कार्यों का एक उदाहरण है।"
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