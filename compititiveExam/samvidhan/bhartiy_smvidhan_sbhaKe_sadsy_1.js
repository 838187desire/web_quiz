const questions = [
    {
        topHeading: "संविधान सभा के सदस्य पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. संविधान सभा के सदस्यों का चुनाव किस पद्धति के आधार पर किया गया था?",
        answers: shuffle([
            { text: "जनता द्वारा प्रत्यक्ष निर्वाचन", correct: false },
            { text: "भारतीय राष्ट्रीय कांग्रेस और मुस्लिम लीग द्वारा नामांकन", correct: false },
            { text: "प्रांतीय विधानसभाओं द्वारा आनुपातिक प्रतिनिधित्व की एकल संक्रमणीय मत पद्धति", correct: true },
            { text: "गवर्नर-जनरल द्वारा मनोनयन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा के सदस्य सीधे तौर पर वयस्क मताधिकार द्वारा नहीं चुने गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका चुनाव प्रांतीय विधानसभाओं के सदस्यों द्वारा अप्रत्यक्ष रूप से किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें आनुपातिक प्रतिनिधित्व प्रणाली और एकल संक्रमणीय मत का प्रयोग किया गया।"
    },
    {
        question: "प्रश्न 2. डॉ. बी. आर. अम्बेडकर संविधान सभा के लिए पहली बार कहाँ से निर्वाचित हुए थे?",
        answers: shuffle([
            { text: "बम्बई प्रेसीडेंसी", correct: false },
            { text: "पंजाब", correct: false },
            { text: "बंगाल", correct: true },
            { text: "संयुक्त प्रांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. बी. आर. अम्बेडकर का पहला निर्वाचन मुस्लिम लीग की सहायता से अविभाजित भारत के बंगाल प्रांत के जेस्सोर-खुलना क्षेत्र से हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, देश के विभाजन के बाद यह क्षेत्र पूर्वी पाकिस्तान में चला गया।"
    },
    {
        question: "प्रश्न 3. देश के विभाजन के बाद, डॉ. बी. आर. अम्बेडकर संविधान सभा के लिए पुनः कहाँ से निर्वाचित हुए?",
        answers: shuffle([
            { text: "पश्चिम बंगाल", correct: false },
            { text: "बिहार", correct: false },
            { text: "बम्बई प्रेसीडेंसी", correct: true },
            { text: "मद्रास प्रेसीडेंसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभाजन के बाद जब डॉ. अम्बेडकर की सीट पाकिस्तान में चली गई, तो उन्हें संविधान सभा में बनाए रखना आवश्यक था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, बम्बई प्रेसीडेंसी की पूना सीट से कांग्रेस के सदस्य एम. आर. जयकर ने इस्तीफा दिया और उस उपचुनाव में डॉ. अम्बेडकर को निर्वाचित किया गया।"
    },
    {
        question: "प्रश्न 4. संविधान सभा के अस्थायी अध्यक्ष के रूप में डॉ. सच्चिदानंद सिन्हा को चुनने का आधार क्या था?",
        answers: shuffle([
            { text: "वह सबसे विद्वान सदस्य थे", correct: false },
            { text: "वह सभा के सबसे वरिष्ठ सदस्य थे", correct: true },
            { text: "वह कांग्रेस के अध्यक्ष थे", correct: false },
            { text: "ब्रिटिश सरकार द्वारा उनका नाम सुझाया गया था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 9 दिसंबर 1946 को हुई पहली बैठक में, फ्रांस की प्रथा का पालन करते हुए, सभा के सबसे उम्रदराज और वरिष्ठ सदस्य डॉ. सच्चिदानंद सिन्हा को सर्वसम्मति से अस्थायी अध्यक्ष (Pro-tem Speaker) चुना गया था।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से कौन संविधान सभा की प्रारूप समिति (Drafting Committee) के अध्यक्ष थे?",
        answers: shuffle([
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "पं. जवाहरलाल नेहरू", correct: false },
            { text: "सरदार वल्लभभाई पटेल", correct: false },
            { text: "डॉ. बी. आर. अम्बेडकर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के प्रारूप को अंतिम रूप देने के लिए 29 अगस्त, 1947 को प्रारूप समिति का गठन किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> डॉ. बी. आर. अम्बेडकर को इस 7-सदस्यीय समिति का अध्यक्ष नियुक्त किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके योगदान के कारण ही उन्हें 'भारतीय संविधान का जनक' कहा जाता है।"
    },
    {
        question: "प्रश्न 6. संविधान सभा के स्थायी अध्यक्ष डॉ. राजेंद्र प्रसाद को कब चुना गया था?",
        answers: shuffle([
            { text: "9 दिसंबर, 1946", correct: false },
            { text: "11 दिसंबर, 1946", correct: true },
            { text: "13 दिसंबर, 1946", correct: false },
            { text: "22 जनवरी, 1947", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा की दूसरी बैठक 11 दिसंबर, 1946 को हुई, जिसमें डॉ. राजेंद्र प्रसाद को सर्वसम्मति से सभा का स्थायी अध्यक्ष और एच. सी. मुखर्जी को उपाध्यक्ष चुना गया।"
    },
    {
        question: "प्रश्न 7. 'उद्देश्य प्रस्ताव' (Objective Resolution), जो बाद में संविधान की प्रस्तावना बना, संविधान सभा में किसने प्रस्तुत किया था?",
        answers: shuffle([
            { text: "डॉ. बी. आर. अम्बेडकर", correct: false },
            { text: "पं. जवाहरलाल नेहरू", correct: true },
            { text: "सरदार वल्लभभाई पटेल", correct: false },
            { text: "जे. बी. कृपलानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पं. जवाहरलाल नेहरू ने 13 दिसंबर, 1946 को संविधान सभा के समक्ष ऐतिहासिक 'उद्देश्य प्रस्ताव' प्रस्तुत किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रस्ताव ने संविधान के दर्शन और मार्गदर्शक सिद्धांतों की नींव रखी।"
    },
    {
        question: "प्रश्न 8. संविधान सभा में कुल कितनी महिला सदस्य थीं?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "12", correct: false },
            { text: "15", correct: true },
            { text: "18", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा में कुल 15 महिला सदस्यों ने भाग लिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें सरोजिनी नायडू, विजयलक्ष्मी पंडित, सुचेता कृपलानी, राजकुमारी अमृत कौर, हंसा मेहता और बेगम एजाज रसूल जैसी प्रमुख हस्तियाँ शामिल थीं।"
    },
    {
        question: "प्रश्न 9. संविधान सभा की संघ शक्ति समिति (Union Powers Committee) के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "सरदार वल्लभभाई पटेल", correct: false },
            { text: "अल्लादी कृष्णास्वामी अय्यर", correct: false },
            { text: "पं. जवाहरलाल नेहरू", correct: true },
            { text: "के. एम. मुंशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पं. जवाहरलाल नेहरू तीन महत्वपूर्ण समितियों के अध्यक्ष थे: संघ शक्ति समिति, संघीय संविधान समिति, और राज्यों के साथ बातचीत के लिए समिति।"
    },
    {
        question: "प्रश्न 10. संविधान सभा की प्रांतीय संविधान समिति (Provincial Constitution Committee) की अध्यक्षता किसने की?",
        answers: shuffle([
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "सरदार वल्लभभाई पटेल", correct: true },
            { text: "जे. बी. कृपलानी", correct: false },
            { text: "एच. सी. मुखर्जी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरदार वल्लभभाई पटेल ने प्रांतों के संविधान और संरचना से संबंधित मामलों को देखने के लिए गठित प्रांतीय संविधान समिति की अध्यक्षता की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> वह मौलिक अधिकारों और अल्पसंख्यकों पर सलाहकार समिति के भी अध्यक्ष थे।"
    },
    {
        question: "प्रश्न 11. निम्नलिखित में से कौन प्रारूप समिति के सदस्य नहीं थे?",
        answers: shuffle([
            { text: "एन. गोपालस्वामी आयंगर", correct: false },
            { text: "के. एम. मुंशी", correct: false },
            { text: "सरदार वल्लभभाई पटेल", correct: true },
            { text: "सैयद मोहम्मद सादुल्लाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारूप समिति के सात सदस्य थे: डॉ. बी. आर. अम्बेडकर (अध्यक्ष), एन. गोपालस्वामी आयंगर, अल्लादी कृष्णास्वामी अय्यर, डॉ. के. एम. मुंशी, सैयद मोहम्मद सादुल्लाह, एन. माधव राव और टी. टी. कृष्णामाचारी।<br><br><i class='fa-solid fa-angles-right icon'></i> सरदार पटेल प्रारूप समिति के सदस्य नहीं थे।"
    },
    {
        question: "प्रश्न 12. संविधान सभा के संवैधानिक सलाहकार (Constitutional Advisor) के रूप में किसे नियुक्त किया गया था?",
        answers: shuffle([
            { text: "डॉ. बी. आर. अम्बेडकर", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "सर बी. एन. राव", correct: true },
            { text: "के. एम. मुंशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर बेनेगल नरसिंह राव (बी. एन. राव) एक प्रख्यात न्यायविद और सिविल सेवक थे, जिन्हें संविधान सभा का संवैधानिक सलाहकार नियुक्त किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने संविधान का प्रारंभिक मसौदा तैयार किया था, जिस पर प्रारूप समिति ने काम किया।"
    },
    {
        question: "प्रश्न 13. संविधान सभा में एंग्लो-इंडियन समुदाय का प्रतिनिधित्व किसने किया था?",
        answers: shuffle([
            { text: "एच. पी. मोदी", correct: false },
            { text: "फ्रैंक एंथोनी", correct: true },
            { text: "हरेन्द्र कूमार मुखर्जी", correct: false },
            { text: "पी. आर. ठाकुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रैंक एंथोनी एक प्रमुख शिक्षाविद और न्यायविद थे, जिन्हें संविधान सभा में एंग्लो-इंडियन समुदाय का प्रतिनिधित्व करने के लिए नामित किया गया था।"
    },
    {
        question: "प्रश्न 14. संविधान सभा में पारसी समुदाय का प्रतिनिधित्व किस सदस्य ने किया था?",
        answers: shuffle([
            { text: "फ्रैंक एंथोनी", correct: false },
            { text: "एच. सी. मुखर्जी", correct: false },
            { text: "एच. पी. मोदी", correct: true },
            { text: "जयपाल सिंह मुंडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर होमी फिरोजशाह मोदी (एच. पी. मोदी) ने संविधान सभा में पारसी समुदाय का प्रतिनिधित्व किया था।"
    },
    {
        question: "प्रश्न 15. संविधान सभा में मौलिक अधिकारों पर उप-समिति (Sub-Committee on Fundamental Rights) के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "सरदार वल्लभभाई पटेल", correct: false },
            { text: "जे. बी. कृपलानी", correct: true },
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "राजकुमारी अमृत कौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जबकि मौलिक अधिकारों पर मुख्य सलाहकार समिति के अध्यक्ष सरदार पटेल थे, इस समिति के तहत गठित 'मौलिक अधिकार उप-समिति' की अध्यक्षता आचार्य जे. बी. कृपलानी ने की थी।"
    },
    {
        question: "प्रश्न 16. संविधान सभा की एकमात्र मुस्लिम महिला सदस्य कौन थीं?",
        answers: shuffle([
            { text: "जहाँआरा शाहनवाज़", correct: false },
            { text: "बेगम एजाज रसूल", correct: true },
            { text: "आबिदा अहमद", correct: false },
            { text: "फातिमा बीबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेगम एजाज रसूल संविधान सभा की 15 महिला सदस्यों में एकमात्र मुस्लिम महिला थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> वह संयुक्त प्रांत से चुनी गई थीं।"
    },
    {
        question: "प्रश्न 17. संविधान सभा में संचालन समिति (Steering Committee) के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "पं. जवाहरलाल नेहरू", correct: false },
            { text: "डॉ. के. एम. मुंशी", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: true },
            { text: "जी. वी. मावलंकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा के अध्यक्ष होने के नाते, डॉ. राजेंद्र प्रसाद सभा की कार्यवाही के संचालन और नियमों को निर्धारित करने वाली संचालन समिति के भी अध्यक्ष थे।"
    },
    {
        question: "प्रश्न 18. प्रारूप समिति के सदस्य एन. माधव राव ने किसका स्थान लिया था?",
        answers: shuffle([
            { text: "डी. पी. खेतान", correct: false },
            { text: "बी. एल. मित्तर", correct: true },
            { text: "सैयद मोहम्मद सादुल्लाह", correct: false },
            { text: "के. एम. मुंशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में बी. एल. मित्तर प्रारूप समिति के सदस्य थे, लेकिन स्वास्थ्य कारणों से उनके इस्तीफा देने के बाद एन. माधव राव को उनकी जगह सदस्य बनाया गया।"
    },
    {
        question: "प्रश्न 19. 1948 में डी. पी. खेतान की मृत्यु के बाद प्रारूप समिति में किसे सदस्य बनाया गया?",
        answers: shuffle([
            { text: "एन. माधव राव", correct: false },
            { text: "टी. टी. कृष्णामाचारी", correct: true },
            { text: "एच. सी. मुखर्जी", correct: false },
            { text: "अल्लादी कृष्णास्वामी अय्यर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डी. पी. खेतान प्रारूप समिति के मूल सदस्य थे।<br><br><i class='fa-solid fa-angles-right icon'></i> 1948 में उनकी मृत्यु के बाद, टी. टी. कृष्णामाचारी को समिति का नया सदस्य नियुक्त किया गया।"
    },
    {
        question: "प्रश्न 20. संविधान सभा में \"उद्देश्य संकल्प\" को सर्वसम्मति से कब स्वीकार किया गया?",
        answers: shuffle([
            { text: "9 दिसंबर, 1946", correct: false },
            { text: "13 दिसंबर, 1946", correct: false },
            { text: "22 जनवरी, 1947", correct: true },
            { text: "26 नवंबर, 1949", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पं. नेहरू द्वारा 13 दिसंबर, 1946 को प्रस्तुत किए गए 'उद्देश्य प्रस्ताव' पर गहन विचार-विमर्श के बाद, इसे 22 जनवरी, 1947 को संविधान सभा द्वारा सर्वसम्मति से अपनाया गया।"
    },
    {
        question: "प्रश्न 21. संविधान सभा के उपाध्यक्ष के रूप में किसे चुना गया था?",
        answers: shuffle([
            { text: "A) एच. सी. मुखर्जी", correct: false },
            { text: "B) वी. टी. कृष्णामाचारी", correct: false },
            { text: "केवल A", correct: false },
            { text: "A और B दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा के दो उपाध्यक्ष थे।<br><br><i class='fa-solid fa-angles-right icon'></i> एच. सी. मुखर्जी को 11 दिसंबर, 1946 को पहला उपाध्यक्ष चुना गया।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में, वी. टी. कृष्णामाचारी को भी दूसरे उपाध्यक्ष के रूप में चुना गया, जो देसी रियासतों का प्रतिनिधित्व करते थे।"
    },
    {
        question: "प्रश्न 22. संविधान सभा के किस सदस्य ने यह कहा था कि \"प्रारूप समिति एक 'अपवहन समिति' (Drifting Committee) है\"?",
        answers: shuffle([
            { text: "नजीरुद्दीन अहमद", correct: true },
            { text: "के. टी. शाह", correct: false },
            { text: "मौलाना हसरत मोहानी", correct: false },
            { text: "सोमनाथ लाहिड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नजीरुद्दीन अहमद ने प्रारूप समिति द्वारा संविधान बनाने में लिए गए समय की आलोचना करते हुए उसे व्यंग्यात्मक रूप से 'अपवहन समिति' कहा था।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने ड्राफ्टिंग और ड्रिफ्टिंग शब्दों पर व्यंग्य किया था।"
    },
    {
        question: "प्रश्न 23. संविधान सभा के किस सदस्य ने राज्य के नीति निदेशक तत्वों को \"एक ऐसा चेक बताया जिसका भुगतान बैंक की सुविधा पर छोड़ दिया गया है\"?",
        answers: shuffle([
            { text: "डॉ. बी. आर. अम्बेडकर", correct: false },
            { text: "के. एम. मुंशी", correct: false },
            { text: "के. टी. शाह", correct: true },
            { text: "टी. टी. कृष्णामाचारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रो. के. टी. शाह, जो एक समाजवादी सदस्य थे, ने नीति निदेशक तत्वों की गैर-न्यायोचित प्रकृति की आलोचना करते हुए यह प्रसिद्ध टिप्पणी की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका मानना था कि इन्हें कानूनी रूप से बाध्यकारी बनाया जाना चाहिए।"
    },
    {
        question: "प्रश्न 24. संविधान सभा में भाषाई प्रांतों के गठन की व्यवहार्यता की जांच के लिए गठित आयोग के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "सरदार पटेल", correct: false },
            { text: "एस. के. धर", correct: true },
            { text: "पट्टाभि सीतारमैया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा ने जून 1948 में इलाहाबाद उच्च न्यायालय के सेवानिवृत्त न्यायाधीश एस. के. धर की अध्यक्षता में एक 'भाषाई प्रांत आयोग' का गठन किया था ताकि यह जांच की जा सके कि भाषा के आधार पर राज्यों का पुनर्गठन करना कितना उचित है।"
    },
    {
        question: "प्रश्न 25. संविधान सभा में देसी रियासतों के प्रतिनिधियों का चयन किस आधार पर किया गया था?",
        answers: shuffle([
            { text: "रियासतों की जनता द्वारा प्रत्यक्ष चुनाव", correct: false },
            { text: "रियासतों के शासकों द्वारा मनोनयन", correct: true },
            { text: "वायसराय द्वारा नामांकन", correct: false },
            { text: "प्रांतीय विधानसभाओं द्वारा चुनाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैबिनेट मिशन योजना के तहत, देसी रियासतों को आवंटित 93 सीटों के प्रतिनिधियों का चयन रियासतों के प्रमुखों (शासकों) द्वारा परामर्श के माध्यम से नामित किया जाना था, न कि चुनाव द्वारा।"
    },
    {
        question: "प्रश्न 26. संविधान सभा के सदस्य जयपाल सिंह मुंडा किस समुदाय का प्रतिनिधित्व कर रहे थे?",
        answers: shuffle([
            { text: "एंग्लो-इंडियन", correct: false },
            { text: "पारसी", correct: false },
            { text: "अनुसूचित जाति", correct: false },
            { text: "आदिवासी (जनजाति)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जयपाल सिंह मुंडा एक प्रसिद्ध हॉकी खिलाड़ी और राजनीतिज्ञ थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने संविधान सभा में भारत के आदिवासी समुदायों के अधिकारों और हितों का पुरजोर प्रतिनिधित्व किया।"
    },
    {
        question: "प्रश्न 27. निम्नलिखित में से कौन संविधान सभा के सदस्य नहीं थे?",
        answers: shuffle([
            { text: "महात्मा गांधी", correct: true },
            { text: "के.एम. मुंशी", correct: false },
            { text: "जी.वी. मावलंकर", correct: false },
            { text: "जे.बी. कृपलानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महात्मा गांधी और मोहम्मद अली जिन्ना, तत्कालीन भारत के दो सबसे बड़े नेता, संविधान सभा के सदस्य नहीं थे।"
    },
    {
        question: "प्रश्न 28. \"संविधान सभा कांग्रेस थी और कांग्रेस भारत था\" - यह टिप्पणी किस सदस्य या विद्वान ने की थी?",
        answers: shuffle([
            { text: "विंस्टन चर्चिल", correct: false },
            { text: "लॉर्ड माउंटबेटन", correct: false },
            { text: "ग्रैनविले ऑस्टिन", correct: true },
            { text: "क्लेमेंट एटली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध अमेरिकी इतिहासकार और भारतीय संविधान के विशेषज्ञ ग्रैनविले ऑस्टिन ने यह टिप्पणी की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका कारण यह था कि 1946 के चुनावों में कांग्रेस को भारी बहुमत मिला था, जिसके परिणामस्वरूप संविधान सभा में कांग्रेस के सदस्यों का पूर्ण प्रभुत्व था।"
    },
    {
        question: "प्रश्न 29. संविधान सभा के मुख्य प्रारूपकार (Chief Draftsman) के रूप में किसे जाना जाता है?",
        answers: shuffle([
            { text: "डॉ. बी.आर. अम्बेडकर", correct: false },
            { text: "सर बी.एन. राव", correct: false },
            { text: "एस.एन. मुखर्जी", correct: true },
            { text: "प्रेम बिहारी नारायण रायजादा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जबकि बी.एन. राव संवैधानिक सलाहकार और अम्बेडकर प्रारूप समिति के अध्यक्ष थे, एस.एन. मुखर्जी संविधान सभा के मुख्य प्रारूपकार थे, जिनकी भूमिका जटिल प्रस्तावों को स्पष्ट कानूनी भाषा में रखने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> डॉ. अम्बेडकर ने उनकी क्षमता की बहुत प्रशंसा की थी।"
    },
    {
        question: "प्रश्न 30. कार्य संचालन समिति (Order of Business Committee) के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "डॉ. के.एम. मुंशी", correct: true },
            { text: "जी.वी. मावलंकर", correct: false },
            { text: "एन. गोपालस्वामी आयंगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. कन्हैयालाल माणिकलाल मुंशी (के.एम. मुंशी) एक प्रमुख सदस्य थे और उन्होंने कार्य संचालन समिति की अध्यक्षता की, जिसका काम सभा की कार्यवाही के क्रम को निर्धारित करना था।"
    },
    {
        question: "प्रश्न 31. संविधान सभा के किस सदस्य को 'आधुनिक मनु' की संज्ञा दी जाती है?",
        answers: shuffle([
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "पं. जवाहरलाल नेहरू", correct: false },
            { text: "डॉ. बी.आर. अम्बेडकर", correct: true },
            { text: "सरदार वल्लभभाई पटेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राचीन भारत के कानून निर्माता 'मनु' की तरह, डॉ. बी.आर. अम्बेडकर ने आधुनिक भारत के लिए एक व्यापक और प्रगतिशील संविधान के निर्माण में केंद्रीय भूमिका निभाई।<br><br><i class='fa-solid fa-angles-right icon'></i> इस कारण, उन्हें सम्मानपूर्वक 'आधुनिक मनु' भी कहा जाता है।"
    },
    {
        question: "प्रश्न 32. निम्नलिखित महिला सदस्यों में से कौन संयुक्त प्रांत से संबंधित नहीं थीं?",
        answers: shuffle([
            { text: "सुचेता कृपलानी", correct: false },
            { text: "विजयलक्ष्मी पंडित", correct: false },
            { text: "पूर्णिमा बनर्जी", correct: false },
            { text: "अम्मू स्वामीनाथन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुचेता कृपलानी, विजयलक्ष्मी पंडित और पूर्णिमा बनर्जी तीनों संयुक्त प्रांत (वर्तमान उत्तर प्रदेश) से संविधान सभा की सदस्य थीं, जबकि अम्मू स्वामीनाथन मद्रास प्रांत का प्रतिनिधित्व करती थीं।"
    },
    {
        question: "प्रश्न 33. संविधान पर हस्ताक्षर करने वाले अंतिम सदस्य कौन थे?",
        answers: shuffle([
            { text: "डॉ. राजेंद्र प्रसाद", correct: true },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "फिरोज गांधी", correct: false },
            { text: "बी.आर. अम्बेडकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 24 जनवरी, 1950 को जब सदस्यों ने संविधान की प्रतियों पर हस्ताक्षर किए, तो अध्यक्ष के रूप में डॉ. राजेंद्र प्रसाद ने सबसे अंत में हस्ताक्षर किए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> सबसे पहले हस्ताक्षर पं. जवाहरलाल नेहरू ने किए थे।"
    },
    {
        question: "प्रश्न 34. संविधान सभा में मसौदा समिति के एकमात्र कांग्रेसी सदस्य कौन थे?",
        answers: shuffle([
            { text: "टी. टी. कृष्णामाचारी", correct: false },
            { text: "एन. गोपालस्वामी आयंगर", correct: false },
            { text: "के.एम. मुंशी", correct: true },
            { text: "अल्लादी कृष्णास्वामी अय्यर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. के.एम. मुंशी मसौदा समिति (प्रारूप समिति) के सात सदस्यों में से एकमात्र सदस्य थे जो मूल रूप से कांग्रेसी पृष्ठभूमि से थे।"
    },
    {
        question: "प्रश्न 35. संविधान सभा में राष्ट्रीय ध्वज संबंधी तदर्थ समिति (Ad-hoc Committee on the National Flag) के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "सरदार वल्लभभाई पटेल", correct: false },
            { text: "पं. जवाहरलाल नेहरू", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: true },
            { text: "जे.बी. कृपलानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के राष्ट्रीय ध्वज के डिजाइन को अंतिम रूप देने के लिए गठित तदर्थ समिति के अध्यक्ष डॉ. राजेंद्र प्रसाद थे।"
    },
    {
        question: "प्रश्न 36. संविधान सभा के वह सदस्य कौन थे जो बाद में भारत के पहले शिक्षा मंत्री बने?",
        answers: shuffle([
            { text: "डॉ. एस. राधाकृष्णन", correct: false },
            { text: "मौलाना अबुल कलाम आजाद", correct: true },
            { text: "सी. राजगोपालाचारी", correct: false },
            { text: "डॉ. श्यामा प्रसाद मुखर्जी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलाना अबुल कलाम आजाद एक प्रमुख स्वतंत्रता सेनानी और विद्वान थे।<br><br><i class='fa-solid fa-angles-right icon'></i> वह संविधान सभा के सदस्य थे और स्वतंत्र भारत के पहले मंत्रिमंडल में शिक्षा मंत्री बने।"
    },
    {
        question: "प्रश्न 37. संविधान सभा के सदस्य जी. वी. मावलंकर को कौन सी महत्वपूर्ण जिम्मेदारी दी गई थी?",
        answers: shuffle([
            { text: "संविधान सभा के अध्यक्ष की", correct: false },
            { text: "संविधान सभा (विधायिका) के अध्यक्ष की", correct: true },
            { text: "प्रारूप समिति के सदस्य की", correct: false },
            { text: "संवैधानिक सलाहकार की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा दोहरी भूमिका निभा रही थी: संविधान बनाना और एक अंतरिम संसद (विधायिका) के रूप में कार्य करना।<br><br><i class='fa-solid fa-angles-right icon'></i> जब सभा संविधान निर्माण का कार्य करती थी, तो अध्यक्षता डॉ. राजेंद्र प्रसाद करते थे, और जब यह विधायिका के रूप में कार्य करती थी, तो जी.वी. मावलंकर (गणेश वासुदेव मावलंकर) इसकी अध्यक्षता करते थे।"
    },
    {
        question: "प्रश्न 38. संविधान सभा में दलित वर्गों का प्रतिनिधित्व करने वाले प्रमुख सदस्य कौन थे?",
        answers: shuffle([
            { text: "A) डॉ. बी.आर. अम्बेडकर", correct: false },
            { text: "B) जगजीवन राम", correct: false },
            { text: "केवल A", correct: false },
            { text: "A और B दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. बी.आर. अम्बेडकर दलितों के निर्विवाद नेता थे, लेकिन उनके अलावा बाबू जगजीवन राम ने भी संविधान सभा में दलित वर्गों और मजदूरों के हितों का प्रभावशाली ढंग से प्रतिनिधित्व किया।"
    },
    {
        question: "प्रश्न 39. राजकुमारी अमृत कौर, जो संविधान सभा की सदस्य थीं, किस क्षेत्र में योगदान के लिए जानी जाती हैं?",
        answers: shuffle([
            { text: "स्वतंत्र भारत की पहली स्वास्थ्य मंत्री", correct: true },
            { text: "एक प्रमुख शिक्षाविद", correct: false },
            { text: "रियासतों के एकीकरण में भूमिका", correct: false },
            { text: "एक प्रसिद्ध वकील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजकुमारी अमृत कौर कपूरथला के शाही परिवार से थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> वह संविधान सभा की सदस्य थीं और स्वतंत्र भारत की पहली स्वास्थ्य मंत्री बनीं।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने अखिल भारतीय आयुर्विज्ञान संस्थान (AIIMS) की स्थापना में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 40. संविधान सभा में मद्रास प्रांत से एक प्रमुख न्यायविद सदस्य कौन थे, जो प्रारूप समिति में भी शामिल थे?",
        answers: shuffle([
            { text: "टी. टी. कृष्णामाचारी", correct: false },
            { text: "अल्लादी कृष्णास्वामी अय्यर", correct: true },
            { text: "के. संथानम", correct: false },
            { text: "पट्टाभि सीतारमैया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीवान बहादुर सर अल्लादी कृष्णास्वामी अय्यर मद्रास प्रांत के एक प्रतिष्ठित न्यायविद थे।<br><br><i class='fa-solid fa-angles-right icon'></i> वह प्रारूप समिति के एक महत्वपूर्ण सदस्य थे और उन्होंने संविधान के कानूनी पहलुओं पर महत्वपूर्ण योगदान दिया।"
    },
    {
        question: "प्रश्न 41. संविधान सभा के किस सदस्य ने वयस्क मताधिकार को 15 वर्षों के लिए स्थगित करने की वकालत की थी?",
        answers: shuffle([
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "मौलाना अबुल कलाम आजाद", correct: true },
            { text: "सरदार वल्लभभाई पटेल", correct: false },
            { text: "सी. राजगोपालाचारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलाना आजाद ने देश में व्यापक निरक्षरता और विभाजन के बाद के तनावपूर्ण माहौल को देखते हुए यह तर्क दिया था कि वयस्क मताधिकार को तुरंत लागू करने के बजाय 15 वर्षों के लिए टाल दिया जाना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, सभा ने उनके इस सुझाव को स्वीकार नहीं किया।"
    },
    {
        question: "प्रश्न 42. संविधान सभा की एकमात्र दलित महिला सदस्य कौन थीं?",
        answers: shuffle([
            { text: "हंसा मेहता", correct: false },
            { text: "पूर्णिमा बनर्जी", correct: false },
            { text: "लीला रॉय", correct: false },
            { text: "दाक्षायनी वेलायुधन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दाक्षायनी वेलायुधन कोचीन (केरल) से थीं और संविधान सभा की एकमात्र दलित महिला सदस्य थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> वह 34 साल की उम्र में चुनी गई सबसे युवा सदस्यों में से एक थीं।"
    },
    {
        question: "प्रश्न 43. संविधान सभा के किस सदस्य ने आर्थिक न्याय पर जोर देते हुए निदेशक सिद्धांतों में समाजवादी विचारों को शामिल करने की पुरजोर वकालत की?",
        answers: shuffle([
            { text: "एच. वी. कामथ", correct: false },
            { text: "के. टी. शाह", correct: true },
            { text: "शिब्बन लाल सक्सेना", correct: false },
            { text: "महावीर त्यागी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रो. के.टी. शाह एक प्रमुख अर्थशास्त्री और समाजवादी विचारक थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने संविधान सभा की बहसों में बार-बार आर्थिक समानता और समाजवादी सिद्धांतों को संविधान का हिस्सा बनाने की वकालत की।"
    },
    {
        question: "प्रश्न 44. संविधान सभा में सदन समिति (House Committee) के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "बी. पट्टाभि सीतारमैया", correct: true },
            { text: "ए.वी. ठक्कर", correct: false },
            { text: "जे.बी. कृपलानी", correct: false },
            { text: "के.एम. मुंशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. बी. पट्टाभि सीतारमैया, जो एक प्रमुख कांग्रेसी नेता और लेखक थे, संविधान सभा की सदन समिति के अध्यक्ष थे।"
    },
    {
        question: "प्रश्न 45. निम्नलिखित में से कौन संविधान सभा में रियासतों का प्रतिनिधित्व करने वाली समिति (Committee for Negotiating with States) के अध्यक्ष थे?",
        answers: shuffle([
            { text: "सरदार वल्लभभाई पटेल", correct: false },
            { text: "पं. जवाहरलाल नेहरू", correct: true },
            { text: "वी.पी. मेनन", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पं. जवाहरलाल नेहरू उस समिति के अध्यक्ष थे जिसका कार्य देसी रियासतों से बातचीत करके उन्हें संविधान सभा में शामिल होने के लिए राजी करना था।"
    },
    {
        question: "प्रश्न 46. एन. गोपालस्वामी आयंगर, जो प्रारूप समिति के सदस्य थे, संविधान सभा से पहले किस महत्वपूर्ण पद पर थे?",
        answers: shuffle([
            { text: "मद्रास के एडवोकेट जनरल", correct: false },
            { text: "बड़ौदा के दीवान", correct: false },
            { text: "जम्मू और कश्मीर के प्रधानमंत्री", correct: true },
            { text: "मैसूर के दीवान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एन. गोपालस्वामी आयंगर एक कुशल प्रशासक थे।<br><br><i class='fa-solid fa-angles-right icon'></i> संविधान सभा में शामिल होने से पहले, वह महाराजा हरि सिंह के अधीन जम्मू और कश्मीर रियासत के प्रधानमंत्री के रूप में कार्य कर चुके थे।"
    },
    {
        question: "प्रश्न 47. संविधान सभा में राष्ट्रपति के चुनाव की प्रक्रिया पर बहस में किस सदस्य ने एकल संक्रमणीय मत प्रणाली का पुरजोर समर्थन किया?",
        answers: shuffle([
            { text: "पं. जवाहरलाल नेहरू", correct: false },
            { text: "डॉ. बी.आर. अम्बेडकर", correct: true },
            { text: "के.एम. मुंशी", correct: false },
            { text: "सरदार वल्लभभाई पटेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. अम्बेडकर ने राष्ट्रपति चुनाव के लिए आनुपातिक प्रतिनिधित्व प्रणाली के तहत एकल संक्रमणीय मत पद्धति का समर्थन किया ताकि यह सुनिश्चित हो सके कि विजेता उम्मीदवार को बहुमत का समर्थन प्राप्त हो और अल्पसंख्यकों की राय का भी सम्मान हो।"
    },
    {
        question: "प्रश्न 48. किस महिला सदस्य ने संविधान सभा में महिलाओं के लिए समान नागरिक संहिता और समान अधिकारों की वकालत की?",
        answers: shuffle([
            { text: "सरोजिनी नायडू", correct: false },
            { text: "सुचेता कृपलानी", correct: false },
            { text: "हंसा जीवराज मेहता", correct: true },
            { text: "बेगम एजाज रसूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हंसा मेहता एक सुधारवादी, शिक्षाविद और नारीवादी थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने संविधान सभा में महिलाओं के अधिकारों, विशेष रूप से समान नागरिक संहिता की जोरदार वकालत की।"
    },
    {
        question: "प्रश्न 49. संविधान सभा के सदस्य विश्वनाथ दास किस प्रांत का प्रतिनिधित्व करते थे?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "मध्य प्रांत", correct: false },
            { text: "उड़ीसा", correct: true },
            { text: "बम्बई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विश्वनाथ दास उड़ीसा के एक प्रमुख नेता थे और संविधान सभा में उड़ीसा प्रांत का प्रतिनिधित्व करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> वह बाद में उड़ीसा के मुख्यमंत्री भी बने।"
    },
    {
        question: "प्रश्न 50. संविधान सभा के किस सदस्य को 'बिहार का गांधी' भी कहा जाता था?",
        answers: shuffle([
            { text: "डॉ. सच्चिदानंद सिन्हा", correct: false },
            { text: "जयप्रकाश नारायण", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: true },
            { text: "अनुग्रह नारायण सिन्हा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. राजेंद्र प्रसाद की सादगी, विनम्रता और देश के प्रति निस्वार्थ सेवा के कारण उन्हें प्यार और सम्मान से 'बिहार का गांधी' और 'देशरत्न' कहा जाता था।"
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