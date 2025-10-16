const questions = [
    {
        topHeading: "पुरापाषाण काल पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'पैलियोलिथिक' (Palaeolithic) शब्द की उत्पत्ति किस भाषा से हुई है?",
        answers: shuffle([
            { text: "लैटिन", correct: false },
            { text: "ग्रीक", correct: true },
            { text: "संस्कृत", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पैलियोलिथिक' शब्द दो ग्रीक शब्दों 'पैलियो' (जिसका अर्थ है पुराना) और 'लिथोस' (जिसका अर्थ है पत्थर) से मिलकर बना है, जिसका সম্মিলিত अर्थ 'पुराना पत्थर युग' होता है।"
    },
    {
        question: "प्रश्न 2. भारत में पुरापाषाणकालीन अनुसंधान के जनक के रूप में किसे जाना जाता है?",
        answers: shuffle([
            { text: "दयाराम साहनी", correct: false },
            { text: "राखालदास बनर्जी", correct: false },
            { text: "रॉबर्ट ब्रूस फुट", correct: true },
            { text: "मॉर्टिमर व्हीलर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉबर्ट ब्रूस फुट एक ब्रिटिश भूविज्ञानी और पुरातत्वविद् थे जिन्होंने 1863 में पल्लवरम (चेन्नई के पास) में भारत के पहले पुरापाषाणकालीन उपकरण की खोज की थी।"
    },
    {
        question: "प्रश्न 3. पुरापाषाण काल को किस अन्य नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "लौह युग", correct: false },
            { text: "कांस्य युग", correct: false },
            { text: "ताम्रपाषाण युग", correct: false },
            { text: "आखेटक एवं खाद्य संग्राहक युग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में मानव जीवन का मुख्य आधार शिकार करना तथा कंद-मूल, फल-फूल इकट्ठा करना था, इसलिए इसे आखेटक (शिकारी) एवं खाद्य संग्राहक युग भी कहते हैं।"
    },
    {
        question: "प्रश्न 4. कालानुक्रम के अनुसार, पुरापाषाण काल को कितने भागों में विभाजित किया गया है?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपकरणों की प्रकृति और जलवायु परिवर्तन के आधार पर पुरापाषाण काल को तीन चरणों में विभाजित किया गया है: निम्न पुरापाषाण काल, मध्य पुरापाषाण काल और उच्च पुरापाषाण काल।"
    },
    {
        question: "प्रश्न 5. निम्न पुरापाषाण काल के सबसे महत्वपूर्ण उपकरण कौन से थे?",
        answers: shuffle([
            { text: "सूक्ष्मपाषाण (Microliths)", correct: false },
            { text: "हस्तकुठार (Hand-axe) और विदारणी (Cleaver)", correct: true },
            { text: "हड्डी के उपकरण", correct: false },
            { text: "पॉलिश किए हुए पत्थर के औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निम्न पुरापाषाण काल की विशेषता कोर उपकरणों जैसे हस्तकुठार, विदारणी और खंडक (chopper) उपकरणों से है, जो मुख्य रूप से बड़े पत्थरों से बनाए जाते थे।"
    },
    {
        question: "प्रश्न 6. भारत में मानव का सबसे पहला ज्ञात जीवाश्म कहाँ से मिला है?",
        answers: shuffle([
            { text: "शिवालिक पहाड़ियाँ", correct: false },
            { text: "नर्मदा घाटी में हथनोरा", correct: true },
            { text: "सोहन घाटी", correct: false },
            { text: "बेलन घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश की नर्मदा घाटी में स्थित हथनोरा नामक स्थान से 'होमो इरेक्टस' या 'आद्य होमो सेपियन्स' की खोपड़ी का जीवाश्म मिला है, जो भारत में मानव का सबसे पुराना प्रमाण है।"
    },
    {
        question: "प्रश्न 7. पुरापाषाण काल के लोगों का मुख्य व्यवसाय क्या था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "पशुपालन", correct: false },
            { text: "शिकार और खाद्य संग्रहण", correct: true },
            { text: "व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल के लोग पूरी तरह से प्रकृति पर निर्भर थे और उनका जीवन शिकार करने तथा कंद-मूल, फल-फूल इकट्ठा करने पर आधारित था।<br><br><i class='fa-solid fa-angles-right icon'></i> वे शिकारी-संग्राहक थे।"
    },
    {
        question: "प्रश्न 8. भीमबेटका की गुफाएँ किस लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "मंदिरों के लिए", correct: false },
            { text: "मूर्तियों के लिए", correct: false },
            { text: "प्रागैतिहासिक शैल चित्रकला के लिए", correct: true },
            { text: "बौद्ध विहारों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश में स्थित भीमबेटका की गुफाएँ पुरापाषाण काल से लेकर मध्यपाषाण काल तक की शैल चित्रकला के लिए विश्व प्रसिद्ध हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन चित्रों में शिकार, नृत्य और दैनिक जीवन के दृश्य हैं।"
    },
    {
        question: "प्रश्न 9. मध्य पुरापाषाण काल में किस प्रकार के उपकरणों की प्रधानता थी?",
        answers: shuffle([
            { text: "कोर उपकरण", correct: false },
            { text: "शल्क (Flake) उपकरण", correct: true },
            { text: "ब्लेड उपकरण", correct: false },
            { text: "सूक्ष्मपाषाण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य पुरापाषाण काल में पत्थर के शल्कों (flakes) से बने उपकरणों का प्रचलन बढ़ा, जिनमें बेधनी (Points), खुरचनी (Scrapers) और वेधनी (Borers) प्रमुख थे।"
    },
    {
        question: "प्रश्न 10. आग के उपयोग का पहला स्पष्ट पुरातात्विक साक्ष्य किस मानव प्रजाति से जुड़ा है?",
        answers: shuffle([
            { text: "होमो हैबिलिस", correct: false },
            { text: "होमो इरेक्टस", correct: true },
            { text: "निएंडरथल", correct: false },
            { text: "होमो सेपियन्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन में चाउ-काउ-तिएन गुफा और अन्य स्थलों से मिले साक्ष्यों से पता चलता है कि होमो इरेक्टस मानव ने निम्न पुरापाषाण काल में ही आग का उपयोग करना सीख लिया था।"
    },
    {
        question: "प्रश्न 11. उच्च पुरापाषाण काल की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "तांबे का प्रयोग", correct: false },
            { text: "नए चकमक उद्योग और होमो सेपियन्स का उदय", correct: true },
            { text: "कृषि की शुरुआत", correct: false },
            { text: "स्थायी निवास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च पुरापाषाण काल में आधुनिक मानव (होमो सेपियन्स) का उदय हुआ और पत्थर के उपकरणों में ब्लेड और ब्यूरिन जैसी नई तकनीकें विकसित हुईं।"
    },
    {
        question: "प्रश्न 12. भारत में शुतुरमुर्ग के अंडे के खोल पर बने मनके किस काल के पुरातात्विक स्थल से मिले हैं?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: false },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: true },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र के पटने नामक पुरास्थल से उच्च पुरापाषाण काल के संदर्भ में शुतुरमुर्ग के अंडे के खोल से बने मनके (beads) प्राप्त हुए हैं, जो उस काल की कला और अलंकरण को दर्शाते हैं।"
    },
    {
        question: "प्रश्न 13. सोहन संस्कृति (Soanian culture) का संबंध भारत के किस क्षेत्र से है?",
        answers: shuffle([
            { text: "दक्षिण भारत", correct: false },
            { text: "गंगा-यमुना दोआब", correct: false },
            { text: "उत्तर-पश्चिम भारत (पोटवार पठार)", correct: true },
            { text: "पूर्वोत्तर भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोहन संस्कृति, जो अब पाकिस्तान में सोहन नदी घाटी और पोटवार पठार में विकसित हुई, भारत के निम्न पुरापाषाण काल का प्रतिनिधित्व करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से खंडक-उपकरण (chopper-chopping tools) मिले हैं।"
    },
    {
        question: "प्रश्न 14. पुरापाषाण काल में औजार बनाने के लिए मुख्यतः किस पत्थर का उपयोग किया जाता था?",
        answers: shuffle([
            { text: "संगमरमर", correct: false },
            { text: "बलुआ पत्थर", correct: false },
            { text: "क्वार्टजाइट", correct: true },
            { text: "ग्रेनाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल के मानव ने अपने उपकरण बनाने के लिए कठोर पत्थरों का उपयोग किया, जिनमें क्वार्टजाइट सबसे प्रमुख था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण पुरापाषाणकालीन मानव को 'क्वार्टजाइट मैन' भी कहा जाता है।"
    },
    {
        question: "प्रश्न 15. कुरनूल गुफाएँ (आंध्र प्रदेश) किस प्रकार के पुरापाषाणकालीन अवशेषों के लिए जानी जाती हैं?",
        answers: shuffle([
            { text: "राख के ढेर", correct: true },
            { text: "पत्थर के उपकरण", correct: false },
            { text: "मानव जीवाश्म", correct: false },
            { text: "गुफा चित्रकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश की कुरनूल गुफाओं से उच्च पुरापाषाण काल के राख के अवशेष मिले हैं, जो उस काल में आग के सुनियोजित इस्तेमाल का स्पष्ट प्रमाण प्रस्तुत करते हैं।"
    },
    {
        question: "प्रश्न 16. 'ब्लेड' और 'ब्यूरिन' जैसे उपकरण किस काल की विशेषता हैं?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: false },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: true },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च पुरापाषाण काल में पत्थर के लंबे और संकरे फलक, जिन्हें 'ब्लेड' कहा जाता है, तथा हड्डी, सींग और हाथीदांत पर नक्काशी के लिए 'ब्यूरिन' (तक्षणी) का उपयोग प्रमुख था।"
    },
    {
        question: "प्रश्न 17. भारत में पुरापाषाणकालीन संस्कृति के अवशेष सामान्यतः कहाँ नहीं मिलते हैं?",
        answers: shuffle([
            { text: "नर्मदा घाटी", correct: false },
            { text: "छोटानागपुर पठार", correct: false },
            { text: "गंगा के जलोढ़ मैदान", correct: true },
            { text: "बेलन घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल में गंगा, सिंधु और यमुना के जलोढ़ मैदानों में औजार बनाने के लिए उपयुक्त पत्थर की कमी के कारण इस संस्कृति के अवशेष लगभग नहीं मिलते हैं।"
    },
    {
        question: "प्रश्न 18. अत्तिरमपक्कम (तमिलनाडु) किस काल के उपकरणों के लिए एक महत्वपूर्ण स्थल है?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: true },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false },
            { text: "महापाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अत्तिरमपक्कम भारत के सबसे महत्वपूर्ण निम्न पुरापाषाणकालीन स्थलों में से एक है, जहाँ से बड़ी संख्या में हस्तकुठार और अन्य उपकरण मिले हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हाल के शोध इसे भारत के सबसे पुराने मानव निवास स्थलों में से एक मानते हैं।"
    },
    {
        question: "प्रश्न 19. पुरापाषाणकालीन मानव के जीवन के बारे में जानकारी का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "लिखित ग्रंथ", correct: false },
            { text: "सिक्के", correct: false },
            { text: "पत्थर के औजार और जीवाश्म", correct: true },
            { text: "वास्तुकला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि पुरापाषाण काल में लेखन कला का विकास नहीं हुआ था, इसलिए उस काल के मानव के बारे में जानकारी का एकमात्र स्रोत उनके द्वारा छोड़े गए पत्थर के उपकरण, जीवाश्म और गुफा चित्र हैं।"
    },
    {
        question: "प्रश्न 20. बेलन घाटी (उत्तर प्रदेश) किस काल के अनुक्रम का प्रतिनिधित्व करती है?",
        answers: shuffle([
            { text: "केवल निम्न पुरापाषाण काल", correct: false },
            { text: "केवल उच्च पुरापाषाण काल", correct: false },
            { text: "निम्न, मध्य और उच्च पुरापाषाण काल", correct: true },
            { text: "केवल नवपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेलन घाटी एक ऐसा अनूठा स्थल है जहाँ से पुरापाषाण काल के तीनों चरणों (निम्न, मध्य, उच्च) के बाद मध्यपाषाण और नवपाषाण काल तक का एक निरंतर सांस्कृतिक अनुक्रम मिलता है।"
    },
    {
        question: "प्रश्न 21. 'होमो इरेक्टस' का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "बुद्धिमान मानव", correct: false },
            { text: "सीधा खड़ा होने वाला मानव", correct: true },
            { text: "उपकरण बनाने वाला मानव", correct: false },
            { text: "गुफा में रहने वाला मानव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'होमो इरेक्टस' मानव प्रजाति की विशेषता दो पैरों पर सीधे खड़े होकर चलना था, जो मानव विकास में एक महत्वपूर्ण चरण था।"
    },
    {
        question: "प्रश्न 22. नेवासा (महाराष्ट्र) पुरास्थल का संबंध किस संस्कृति से है?",
        answers: shuffle([
            { text: "सोहन संस्कृति", correct: false },
            { text: "मद्रासियन संस्कृति", correct: false },
            { text: "मध्य पुरापाषाण संस्कृति", correct: true },
            { text: "आहार संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेवासा मध्य पुरापाषाण काल का एक प्रारूप स्थल है जहाँ से शल्क उपकरणों का एक समृद्ध भंडार मिला है।"
    },
    {
        question: "प्रश्न 23. पुरापाषाण काल का अधिकांश समय किस भूवैज्ञानिक युग से संबंधित है?",
        answers: shuffle([
            { text: "प्लायोसीन (Pliocene)", correct: false },
            { text: "प्लेइस्टोसीन (Pleistocene)", correct: true },
            { text: "होलोसीन (Holocene)", correct: false },
            { text: "मायोसीन (Miocene)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल का अधिकांश समय प्लेइस्टोसीन युग के साथ मेल खाता है, जिसकी विशेषता बार-बार आने वाले हिमयुग और अंतर-हिमयुग थे, जिसने मानव जीवन को गहराई से प्रभावित किया।"
    },
    {
        question: "प्रश्न 24. मद्रासियन संस्कृति (Madrasian Culture) शब्द का प्रयोग किसके लिए किया जाता है?",
        answers: shuffle([
            { text: "उत्तर भारत की खंडक-उपकरण परंपरा", correct: false },
            { text: "दक्षिण भारत की हस्तकुठार परंपरा", correct: true },
            { text: "मध्य भारत की गुफा चित्रकला", correct: false },
            { text: "पश्चिम भारत के सूक्ष्मपाषाण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मद्रासियन संस्कृति का नाम मद्रास (अब चेन्नई) के पास पाए गए उपकरणों के आधार पर रखा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत की निम्न पुरापाषाणकालीन हस्तकुठार (Hand-axe) परंपरा का प्रतिनिधित्व करती है, जिसे एश्यूलियन संस्कृति भी कहते हैं।"
    },
    {
        question: "प्रश्न 25. 'होमो सेपियन्स' (आधुनिक मानव) का उदय किस काल में हुआ?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: false },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: true },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आधुनिक मानव, जिसे वैज्ञानिक रूप से होमो सेपियन्स कहा जाता है, का विकास और प्रसार उच्च पुरापाषाण काल के दौरान हुआ।"
    },
    {
        question: "प्रश्न 26. डीडवाना (राजस्थान) किस प्रकार के निक्षेपों के लिए प्रसिद्ध है, जहाँ पुरापाषाणकालीन उपकरण मिले हैं?",
        answers: shuffle([
            { text: "नदी के जलोढ़ निक्षेप", correct: false },
            { text: "ज्वालामुखी राख के निक्षेप", correct: false },
            { text: "रेत के टीलों (Dunes) के निक्षेप", correct: true },
            { text: "हिमनद निक्षेप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थार मरुस्थल में स्थित डीडवाना में प्राचीन रेत के टीलों के नीचे दबे हुए पुरापाषाण काल के विभिन्न स्तरों के उपकरण मिले हैं, जो उस क्षेत्र के प्राचीन पर्यावरण को दर्शाते हैं।"
    },
    {
        question: "प्रश्न 27. पुरापाषाणकालीन लोगों के धार्मिक विश्वासों का अनुमान किससे लगाया जा सकता है?",
        answers: shuffle([
            { text: "मंदिरों के अवशेषों से", correct: false },
            { text: "पुरोहित वर्ग की उपस्थिति से", correct: false },
            { text: "मातृदेवी की मूर्तियों और दफनाने की प्रथाओं से", correct: true },
            { text: "धार्मिक ग्रंथों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेलन घाटी के लोहंदा नाला से मिली हड्डी की बनी मातृदेवी की मूर्ति और कुछ यूरोपीय स्थलों पर मृतकों को औजारों के साथ दफनाने के साक्ष्य उनके आदिम धार्मिक विश्वासों की ओर संकेत करते हैं।"
    },
    {
        question: "प्रश्न 28. पुरापाषाणकालीन गुफा चित्रकला में मुख्य रूप से किन रंगों का प्रयोग होता था?",
        answers: shuffle([
            { text: "नीला और पीला", correct: false },
            { text: "लाल और हरा", correct: false },
            { text: "गेरुआ (लाल) और सफेद", correct: true },
            { text: "काला और बैंगनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका जैसे स्थलों पर चित्र बनाने के लिए प्राकृतिक खनिज रंगों का उपयोग किया जाता था, जिनमें हेमेटाइट या गेरू से बना लाल रंग और चूना पत्थर से बना सफेद रंग प्रमुख था।"
    },
    {
        question: "प्रश्न 29. भारत में किस क्षेत्र को 'भारतीय प्रागितिहास का टेक्स्ट-बुक' कहा जाता है?",
        answers: shuffle([
            { text: "नर्मदा घाटी", correct: false },
            { text: "सोहन घाटी", correct: false },
            { text: "बेलन घाटी", correct: true },
            { text: "कृष्णा घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेलन घाटी में पुरापाषाण काल से लेकर नवपाषाण काल तक का एक असाधारण और पूर्ण सांस्कृतिक अनुक्रम मिलने के कारण इसे 'भारतीय प्रागितिहास का टेक्स्ट-बुक' की संज्ञा दी गई है।"
    },
    {
        question: "प्रश्न 30. 'लेवालोइसियन तकनीक' (Levallois technique) का संबंध किससे है?",
        answers: shuffle([
            { text: "गुफा चित्रकारी", correct: false },
            { text: "उपकरण बनाने की एक विशिष्ट विधि", correct: true },
            { text: "शवों को दफनाने की प्रथा", correct: false },
            { text: "आग जलाने की विधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेवालोइसियन तकनीक पत्थर के उपकरण बनाने की एक उन्नत विधि थी, जिसमें पहले कोर को एक निश्चित आकार में तैयार किया जाता था और फिर उससे वांछित आकार का शल्क निकाला जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मध्य पुरापाषाण काल में प्रचलित थी।"
    },
    {
        question: "प्रश्न 31. पुरापाषाणकालीन स्थल पैसरा (Paisra) भारत के किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "मध्य प्रदेश", correct: false },
            { text: "बिहार", correct: true },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैसरा, बिहार के मुंगेर जिले में स्थित एक महत्वपूर्ण निम्न पुरापाषाणकालीन स्थल है, जहाँ से आवासीय झोपड़ियों के फर्श और उपकरण बनाने की कार्यशाला के साक्ष्य मिले हैं।"
    },
    {
        question: "प्रश्न 32. किस पुरापाषाणकालीन स्थल से हड्डी से बनी मातृदेवी की प्रतिमा प्राप्त हुई है?",
        answers: shuffle([
            { text: "भीमबेटका", correct: false },
            { text: "हथनोरा", correct: false },
            { text: "लोहंदा नाला (बेलन घाटी)", correct: true },
            { text: "पटने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश की बेलन घाटी में स्थित लोहंदा नाला से उच्च पुरापाषाण काल की, हड्डी (अस्थि) से निर्मित मातृदेवी की एक अनूठी मूर्ति मिली है, जो भारत में प्रागैतिहासिक कला का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "प्रश्न 33. पुरापाषाणकालीन मानव द्वारा बनाए गए चित्रों का मुख्य विषय क्या था?",
        answers: shuffle([
            { text: "देवी-देवताओं का चित्रण", correct: false },
            { text: "कृषि गतिविधियों का चित्रण", correct: false },
            { text: "पशु-पक्षियों और शिकार के दृश्यों का चित्रण", correct: true },
            { text: "राजा-रानियों का चित्रण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाणकालीन शैल चित्रों में मुख्य रूप से बाइसन, हाथी, बाघ, गैंडे जैसे जानवरों और सामूहिक शिकार के दृश्यों को चित्रित किया गया है, जो उनके शिकारी जीवन को दर्शाता है।"
    },
    {
        question: "प्रश्न 34. 'नर्मदा मानव' (Narmada Man) के नाम से प्रसिद्ध जीवाश्म खोपड़ी की खोज किसने की थी?",
        answers: shuffle([
            { text: "एच. डी. सांकलिया", correct: false },
            { text: "वी. एन. मिश्र", correct: false },
            { text: "अरुण सोनकिया", correct: true },
            { text: "जी. आर. शर्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय भूवैज्ञानिक सर्वेक्षण के भूविज्ञानी अरुण सोनकिया ने 1982 में मध्य प्रदेश के हथनोरा में इस महत्वपूर्ण जीवाश्म की खोज की थी।"
    },
    {
        question: "प्रश्न 35. 'फलक संस्कृति' (Flake Culture) नाम किस काल को दिया गया है?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: false },
            { text: "मध्य पुरापाषाण काल", correct: true },
            { text: "उच्च पुरापाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य पुरापाषाण काल में शल्क या फलक से बने उपकरणों की प्रधानता के कारण इसे 'फलक संस्कृति' की संज्ञा भी दी जाती है।"
    },
    {
        question: "प्रश्न 36. रॉबर्ट ब्रूस फुट, जिन्होंने भारत में पहले पुरापाषाणकालीन उपकरण की खोज की, वे पेशे से क्या थे?",
        answers: shuffle([
            { text: "इतिहासकार", correct: false },
            { text: "भूविज्ञानी", correct: true },
            { text: "वनस्पतिशास्त्री", correct: false },
            { text: "भाषाविद्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉबर्ट ब्रूस फुट भारतीय भूवैज्ञानिक सर्वेक्षण विभाग में एक भूविज्ञानी थे।<br><br><i class='fa-solid fa-angles-right icon'></i> अपने भूवैज्ञानिक सर्वेक्षणों के दौरान ही उन्हें पुरातात्विक अवशेषों में रुचि हुई।"
    },
    {
        question: "प्रश्न 37. हुंस्गी-बैचबल घाटी (कर्नाटक) जो एक प्रसिद्ध पुरापाषाणकालीन स्थल है, किस लिए जानी जाती है?",
        answers: shuffle([
            { text: "गुफा चित्रकला", correct: false },
            { text: "उपकरण निर्माण की अनेक छोटी कार्यशालाएँ", correct: true },
            { text: "मानव जीवाश्म", correct: false },
            { text: "कृषि के प्राचीनतम साक्ष्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुंस्गी घाटी में चूना पत्थर से बने निम्न पुरापाषाणकालीन उपकरणों की कई छोटी-छोटी निर्माण स्थली (कार्यशालाएँ) मिली हैं, जो बताती हैं कि यह क्षेत्र औजार बनाने का एक प्रमुख केंद्र था।"
    },
    {
        question: "प्रश्न 38. पुरापाषाणकालीन संदर्भ में 'कोर' (Core) उपकरण से क्या तात्पर्य है?",
        answers: shuffle([
            { text: "पत्थर के छोटे टुकड़े से बना औजार", correct: false },
            { text: "पत्थर के भीतरी भाग (गिट्टी) से सीधे बनाया गया औजार", correct: true },
            { text: "जानवरों की हड्डी से बना औजार", correct: false },
            { text: "लकड़ी से बना औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोर उपकरण वे औजार होते हैं जो मूल पत्थर (गिट्टी या पिंड) को तराश कर बनाए जाते हैं, जबकि उससे निकलने वाले छोटे टुकड़ों (शल्क) को फेंक दिया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हस्तकुठार एक प्रमुख कोर उपकरण है।"
    },
    {
        question: "प्रश्न 39. भारत में उच्च पुरापाषाणकालीन हड्डी के उपकरणों का एक समृद्ध भंडार कहाँ से मिला है?",
        answers: shuffle([
            { text: "भीमबेटका", correct: false },
            { text: "मुच्छतला चिंतामनु गावी (कुरनूल)", correct: true },
            { text: "अत्तिरमपक्कम", correct: false },
            { text: "डीडवाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश की कुरनूल गुफाओं में स्थित मुच्छतला चिंतामनु गावी से बड़ी संख्या में हड्डी से बने उपकरण जैसे खुरचनी, छेनी, सुईयां और भाले की नोकें मिली हैं।"
    },
    {
        question: "प्रश्न 40. भीमबेटका की खोज का श्रेय किस पुरातत्ववेत्ता को दिया जाता है?",
        answers: shuffle([
            { text: "एच. डी. सांकलिया", correct: false },
            { text: "बी. बी. लाल", correct: false },
            { text: "वी. एस. वाकणकर", correct: true },
            { text: "एस. आर. राव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विष्णु श्रीधर वाकणकर (वी. एस. वाकणकर) ने 1957-58 में भीमबेटका की प्रागैतिहासिक शैल गुफाओं और चित्रों की खोज की, जिसने भारत के प्रागैतिहासिक अध्ययन में क्रांति ला दी।"
    },
    {
        question: "प्रश्न 41. एश्यूलियन (Acheulean) परंपरा का संबंध किस काल से है?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: true },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एश्यूलियन परंपरा निम्न पुरापाषाण काल की एक प्रमुख उपकरण बनाने की तकनीक है, जिसकी विशेषता हस्तकुठार और विदारणी जैसे द्विफलकीय (bifacial) उपकरण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे भारत में मद्रासियन संस्कृति भी कहा जाता है।"
    },
    {
        question: "प्रश्न 42. पुरापाषाण काल में मानव द्वारा उपयोग किए जाने वाले आश्रय स्थल का प्रकार क्या था?",
        answers: shuffle([
            { text: "पक्की ईंटों के घर", correct: false },
            { text: "बहुमंजिला इमारतें", correct: false },
            { text: "प्राकृतिक गुफाएँ और शैलाश्रय", correct: true },
            { text: "घास-फूस की स्थायी बस्तियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाणकालीन मानव मौसम की कठोरता और जंगली जानवरों से बचने के लिए प्राकृतिक रूप से उपलब्ध गुफाओं और चट्टानी आश्रयों (शैलाश्रय) का उपयोग करते थे।"
    },
    {
        question: "प्रश्न 43. किस पुरापाषाणकालीन स्थल से एक ही स्थान पर निवास-सह-उपकरण निर्माण केंद्र का साक्ष्य मिला है?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "लंघनाज", correct: false },
            { text: "इसामपुर (कर्नाटक)", correct: true },
            { text: "सराय नाहर राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक के इसामपुर में एक निम्न पुरापाषाणकालीन स्थल की खुदाई की गई है जहाँ साक्ष्य मिले हैं कि यह स्थान न केवल उपकरण बनाने का केंद्र था, बल्कि लोग वहीं रहते भी थे।"
    },
    {
        question: "प्रश्न 44. पुरापाषाण काल और नवपाषाण काल के बीच के संक्रमण काल को क्या कहा जाता है?",
        answers: shuffle([
            { text: "ताम्रपाषाण काल", correct: false },
            { text: "महापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: true },
            { text: "लौह युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल (Mesolithic Age) वह संक्रमणकालीन चरण है जो पुरापाषाण काल के अंत और नवपाषाण काल की शुरुआत के बीच आता है, जिसमें जलवायु परिवर्तन और सूक्ष्मपाषाण उपकरणों का विकास हुआ।"
    },
    {
        question: "प्रश्न 45. ज्वालापुरम (आंध्र प्रदेश) पुरास्थल का क्या महत्व है?",
        answers: shuffle([
            { text: "यह भारत का सबसे बड़ा नवपाषाण स्थल है।", correct: false },
            { text: "यहाँ टोबा ज्वालामुखी की राख के नीचे पुरापाषाणकालीन उपकरण मिले हैं।", correct: true },
            { text: "यहाँ से भारत का एकमात्र निएंडरथल जीवाश्म मिला है।", correct: false },
            { text: "यहाँ भारत की सबसे पुरानी गुफा चित्रकारी है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वालापुरम में लगभग 74,000 साल पहले इंडोनेशिया के टोबा ज्वालामुखी विस्फोट की राख की परत मिली है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस राख के नीचे और ऊपर पुरापाषाणकालीन उपकरण मिलने से यह सिद्ध होता है कि इस विनाशकारी घटना के बाद भी भारत में मानव जीवन जारी रहा।"
    },
    {
        question: "प्रश्न 46. 'खुरचनी' (Scraper) नामक उपकरण का मुख्य उपयोग क्या था?",
        answers: shuffle([
            { text: "जमीन खोदना", correct: false },
            { text: "जानवरों की खाल साफ करना और पेड़ों की छाल उतारना", correct: true },
            { text: "शिकार करना", correct: false },
            { text: "लकड़ी काटना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खुरचनी एक शल्क उपकरण था जिसका उपयोग जानवरों की खाल से मांस और वसा हटाने, खाल को पहनने लायक बनाने तथा लकड़ी और छाल को चिकना करने के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 47. एच. डी. सांकलिया किस विश्वविद्यालय के प्रोफेसर थे और उन्होंने प्रागैतिहासिक पुरातत्व में महत्वपूर्ण योगदान दिया?",
        answers: shuffle([
            { text: "दिल्ली विश्वविद्यालय", correct: false },
            { text: "इलाहाबाद विश्वविद्यालय", correct: false },
            { text: "डेक्कन कॉलेज, पुणे", correct: true },
            { text: "बनारस हिंदू विश्वविद्यालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हसमुख धीरजलाल सांकलिया डेक्कन कॉलेज, पुणे में पुरातत्व विभाग के प्रमुख थे और उन्होंने भारत में, विशेष रूप से महाराष्ट्र और मध्य भारत में, प्रागैतिहासिक अनुसंधान की नींव रखी।"
    },
    {
        question: "प्रश्न 48. मानव विकास में 'होमो हैबिलिस' (Homo habilis) को क्यों महत्वपूर्ण माना जाता है?",
        answers: shuffle([
            { text: "आग का उपयोग करने वाला पहला मानव", correct: false },
            { text: "सीधा चलने वाला पहला मानव", correct: false },
            { text: "उपकरण बनाने वाला पहला मानव", correct: true },
            { text: "गुफाओं में चित्र बनाने वाला पहला मानव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'होमो हैबिलिस' का अर्थ है 'कुशल मानव' या 'औजार बनाने वाला मानव'।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे मानव वंश की पहली प्रजाति माना जाता है जिसने जानबूझकर पत्थर के औजार बनाए।"
    },
    {
        question: "प्रश्न 49. भारत में पुरापाषाणकालीन स्थलों का वितरण मुख्यतः किससे प्रभावित था?",
        answers: shuffle([
            { text: "सोने की उपलब्धता", correct: false },
            { text: "उपजाऊ भूमि की उपलब्धता", correct: false },
            { text: "कच्चे माल (पत्थर) और पानी की उपलब्धता", correct: true },
            { text: "समुद्री मार्गों से निकटता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाणकालीन मानव अपने औजारों के लिए पत्थर और जीवन के लिए पानी पर निर्भर थे, इसलिए उनके निवास स्थल अक्सर नदियों के किनारे और उन पहाड़ी क्षेत्रों में पाए जाते हैं जहाँ क्वार्टजाइट जैसे पत्थर आसानी से उपलब्ध थे।"
    },
    {
        question: "प्रश्न 50. पुरापाषाणकालीन चित्रकला में गतिशील चित्रण का क्या अर्थ है?",
        answers: shuffle([
            { text: "स्थिर जानवरों का चित्रण", correct: false },
            { text: "दौड़ते हुए जानवरों और शिकार करते मनुष्यों का चित्रण", correct: true },
            { text: "ज्यामितीय आकृतियों का चित्रण", correct: false },
            { text: "पेड़-पौधों का चित्रण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के कई चित्रों में जानवरों और मनुष्यों को गतिमान अवस्था में दिखाया गया है, जैसे दौड़ते हुए हिरण या भाला फेंकते हुए शिकारी, जो उनके जीवन की गतिशीलता को दर्शाता है।"
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