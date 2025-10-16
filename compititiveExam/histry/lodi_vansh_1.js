const questions = [
    {
        topHeading: "लोदी वंश पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. दिल्ली सल्तनत पर शासन करने वाला प्रथम अफगान वंश कौन सा था?",
        answers: shuffle([
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: false },
            { text: "सैयद वंश", correct: false },
            { text: "लोदी वंश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी वंश</b> दिल्ली सल्तनत का <b>पहला अफगान वंश</b> था, जबकि इससे पहले के सभी शासक <b>तुर्क मूल</b> के थे।"
    },
    {
        question: "प्रश्न 2. लोदी वंश की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "सिकंदर लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "बहलोल लोदी", correct: true },
            { text: "दौलत खान लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद वंश</b> के अंतिम शासक को अपदस्थ कर, <b>बहलोल लोदी</b> ने <b>1451 ई.</b> में लोदी वंश की स्थापना की।"
    },
    {
        question: "प्रश्न 3. लोदी वंश का शासनकाल कब से कब तक रहा?",
        answers: shuffle([
            { text: "1414 ई. से 1451 ई. तक", correct: false },
            { text: "1451 ई. से 1526 ई. तक", correct: true },
            { text: "1398 ई. से 1414 ई. तक", correct: false },
            { text: "1526 ई. से 1540 ई. तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी वंश</b> ने <b>1451 ई.</b> में <b>बहलोल लोदी</b> के सिंहासन पर बैठने से लेकर <b>1526 ई.</b> में <b>पानीपत के प्रथम युद्ध</b> तक शासन किया।"
    },
    {
        question: "प्रश्न 4. बहलोल लोदी ने किस उपाधि के साथ दिल्ली का सिंहासन ग्रहण किया?",
        answers: shuffle([
            { text: "सुल्तान-ए-आजम", correct: false },
            { text: "जिल्ल-ए-इलाही", correct: false },
            { text: "गाजी", correct: false },
            { text: "बहलोल शाह गाजी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> '<b>बहलोल शाह गाजी</b>' की उपाधि के साथ दिल्ली के सिंहासन पर बैठा था।"
    },
    {
        question: "प्रश्न 5. बहलोल लोदी ने अफगानों को भारत में बसने के लिए क्यों आमंत्रित किया?",
        answers: shuffle([
            { text: "अपनी सैन्य शक्ति को मजबूत करने और अफगान भाईचारे को बढ़ावा देने के लिए", correct: true },
            { text: "भारत की जनसंख्या बढ़ाने के लिए", correct: false },
            { text: "कृषि का विकास करने के लिए", correct: false },
            { text: "व्यापार को बढ़ावा देने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> ने <b>रोह (अफगानिस्तान)</b> के अफगानों को यह कहते हुए आमंत्रित किया, \"आओ और भारत की समृद्धि में हिस्सा बटाओ और इसे दुश्मनों से बचाओ।\""
    },
    {
        question: "प्रश्न 6. किस लोदी सुल्तान ने अफगान सरदारों को 'समानों में प्रथम' (primus inter pares) का दर्जा दिया?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: true },
            { text: "सिकंदर लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "किसी ने नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> ने <b>अफगान राजत्व सिद्धांत</b> के अनुसार स्वयं को अन्य सरदारों के बराबर माना और उनके साथ <b>कालीन पर बैठता</b> था।"
    },
    {
        question: "प्रश्न 7. बहलोल लोदी की सबसे महत्वपूर्ण विजय कौन सी थी?",
        answers: shuffle([
            { text: "मालवा विजय", correct: false },
            { text: "गुजरात विजय", correct: false },
            { text: "जौनपुर सल्तनत का विलय", correct: true },
            { text: "मेवाड़ पर विजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> ने एक लंबे संघर्ष के बाद <b>शर्की सल्तनत</b> को पराजित किया और <b>जौनपुर</b> को दिल्ली सल्तनत में मिला लिया, जो उसकी सबसे बड़ी सैन्य उपलब्धि थी।"
    },
    {
        question: "प्रश्न 8. सिकंदर लोदी ने किस सूफी संत की मजार पर जाने पर प्रतिबंध लगा दिया था?",
        answers: shuffle([
            { text: "निजामुद्दीन औलिया", correct: false },
            { text: "बख्तियार काकी", correct: false },
            { text: "सालार मसूद गाजी (बहराइच)", correct: true },
            { text: "मुईनुद्दीन चिश्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> का मानना था कि <b>बहराइच</b> में <b>सालार मसूद गाजी</b> की मजार पर होने वाली गतिविधियाँ <b>गैर-इस्लामिक</b> हैं, इसलिए उसने वहां <b>महिलाओं के जाने पर</b> और जुलूस निकालने पर रोक लगा दी।"
    },
    {
        question: "प्रश्न 9. सिकंदर लोदी का मूल नाम क्या था?",
        answers: shuffle([
            { text: "फरीद खान", correct: false },
            { text: "निजाम खान", correct: true },
            { text: "जौना खान", correct: false },
            { text: "मलिक काफूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b>, जो बहलोल लोदी का पुत्र था, का मूल नाम <b>निजाम खान</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह '<b>सिकंदर शाह</b>' की उपाधि के साथ गद्दी पर बैठा।"
    },
    {
        question: "प्रश्न 10. आगरा शहर की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "अकबर", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "सिकंदर लोदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1504 ई.</b> में, <b>सिकंदर लोदी</b> ने <b>आगरा शहर</b> की स्थापना की और <b>1506 ई.</b> में इसे अपनी <b>राजधानी</b> बनाया।"
    },
    {
        question: "प्रश्न 11. सिकंदर लोदी ने आगरा को अपनी राजधानी क्यों बनाया?",
        answers: shuffle([
            { text: "यह यमुना नदी के किनारे था", correct: false },
            { text: "राजस्थान के शासकों और पूर्वी भारत पर बेहतर नियंत्रण रखने के लिए", correct: true },
            { text: "यह दिल्ली से अधिक सुंदर था", correct: false },
            { text: "अफगान सरदारों के दबाव के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आगरा</b> की <b>रणनीतिक स्थिति</b> ग्वालियर, धौलपुर और पूर्वी <b>राजस्थान के राजपूत राज्यों पर नियंत्रण</b> स्थापित करने के लिए अधिक उपयुक्त थी।"
    },
    {
        question: "प्रश्न 12. भूमि मापने के लिए 'गज-ए-सिकंदरी' पैमाना किसने प्रचलित किया?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "शेरशाह सूरी", correct: false },
            { text: "सिकंदर लोदी", correct: true },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> ने भूमि की सटीक माप के लिए <b>30 इंच</b> का एक नया पैमाना '<b>गज-ए-सिकंदरी</b>' चलाया, जो मुगल काल तक प्रचलित रहा।"
    },
    {
        question: "प्रश्न 13. 'मखजन-ए-अफगानी' ग्रंथ किसने लिखा है, जिसमें लोदियों का वर्णन है?",
        answers: shuffle([
            { text: "अब्दुल्लाह", correct: false },
            { text: "अहमद यादगार", correct: false },
            { text: "नियामतुल्लाह", correct: true },
            { text: "अब्बास खान शेरवानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>नियामतुल्लाह</b> ने जहांगीर के शासनकाल में '<b>मखजन-ए-अफगानी</b>' की रचना की, जिसमें <b>लोदी</b> और <b>सूर वंश</b> के अफगानों का विस्तृत इतिहास है।"
    },
    {
        question: "प्रश्न 14. 'गुलरुखी' उपनाम से फारसी में कविताएं कौन लिखता था?",
        answers: shuffle([
            { text: "अमीर खुसरो", correct: false },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> स्वयं एक विद्वान और कवि था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह '<b>गुलरुखी</b>' (गुलाब का चेहरा) के उपनाम से <b>फारसी भाषा</b> में कविताएं लिखता था।"
    },
    {
        question: "प्रश्न 15. किस लोदी सुल्तान की धार्मिक नीति अत्यंत कट्टर और असहिष्णु मानी जाती है?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "दौलत खान लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> ने <b>नगरकोट</b> के <b>ज्वालामुखी मंदिर</b> की मूर्ति तोड़ी, <b>मथुरा</b> के मंदिरों को नष्ट किया और हिंदुओं पर कई प्रतिबंध लगाए, जिससे उसकी छवि एक <b>कट्टर शासक</b> की बनी।"
    },
    {
        question: "प्रश्न 16. इब्राहिम लोदी का राज्याभिषेक कहाँ हुआ था?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: true },
            { text: "जौनपुर", correct: false },
            { text: "पानीपत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि <b>सिकंदर लोदी</b> ने <b>आगरा</b> को अपनी राजधानी बना लिया था, इसलिए उसकी मृत्यु के बाद <b>1517 ई.</b> में <b>इब्राहिम लोदी</b> का राज्याभिषेक <b>आगरा</b> में ही हुआ।"
    },
    {
        question: "प्रश्न 17. 'मोठ की मस्जिद' का निर्माण किसके शासनकाल में हुआ था?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: true },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "शेरशाह सूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली में स्थित '<b>मोठ की मस्जिद</b>' का निर्माण <b>सिकंदर लोदी</b> के वजीर '<b>मियां भोइया</b>' ने करवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह <b>लोदी वास्तुकला</b> का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "प्रश्न 18. लोदी वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "सिकंदर लोदी", correct: false },
            { text: "बहलोल लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: true },
            { text: "दौलत खान लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b>, सिकंदर लोदी का पुत्र, <b>लोदी वंश</b> और <b>दिल्ली सल्तनत</b> दोनों का अंतिम सुल्तान था।"
    },
    {
        question: "प्रश्न 19. पानीपत का प्रथम युद्ध कब और किसके बीच हुआ था?",
        answers: shuffle([
            { text: "1526 ई. में बाबर और इब्राहिम लोदी के बीच", correct: true },
            { text: "1527 ई. में बाबर और राणा सांगा के बीच", correct: false },
            { text: "1556 ई. में अकबर और हेमू के बीच", correct: false },
            { text: "1191 ई. में गोरी और पृथ्वीराज चौहान के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>पानीपत का प्रथम युद्ध</b> <b>21 अप्रैल, 1526</b> को मुगल आक्रमणकारी <b>बाबर</b> और दिल्ली के सुल्तान <b>इब्राहिम लोदी</b> के बीच लड़ा गया था।"
    },
    {
        question: "प्रश्न 20. दिल्ली सल्तनत का एकमात्र सुल्तान जो युद्ध के मैदान में मारा गया?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "इब्राहिम लोदी", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b> दिल्ली सल्तनत का <b>पहला और एकमात्र सुल्तान</b> था जो <b>युद्ध के मैदान (पानीपत के प्रथम युद्ध)</b> में लड़ते हुए मारा गया।"
    },
    {
        question: "प्रश्न 21. बाबर को भारत पर आक्रमण करने के लिए किसने आमंत्रित किया था?",
        answers: shuffle([
            { text: "राणा सांगा", correct: false },
            { text: "दौलत खान लोदी", correct: false },
            { text: "आलम खान लोदी", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब के सूबेदार <b>दौलत खान लोदी</b>, इब्राहिम लोदी के चाचा <b>आलम खान लोदी</b> और मेवाड़ के शासक <b>राणा सांगा</b>, इन सभी ने विभिन्न कारणों से <b>बाबर</b> को <b>इब्राहिम लोदी</b> के खिलाफ भारत पर आक्रमण करने के लिए आमंत्रित किया था।"
    },
    {
        question: "प्रश्न 22. सिकंदर लोदी ने धौलपुर के किले पर कब अधिकार किया?",
        answers: shuffle([
            { text: "1501 ई.", correct: true },
            { text: "1504 ई.", correct: false },
            { text: "1506 ई.", correct: false },
            { text: "1509 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>राजस्थान</b> पर नियंत्रण स्थापित करने की अपनी नीति के तहत, <b>सिकंदर लोदी</b> ने <b>1501 ई.</b> में <b>धौलपुर</b> के महत्वपूर्ण किले पर कब्जा कर लिया था।"
    },
    {
        question: "प्रश्न 23. किस लोदी सुल्तान ने अफगान सरदारों पर पूर्ण नियंत्रण स्थापित करने का प्रयास किया, जिससे वे नाराज हो गए?",
        answers: shuffle([
            { text: "a) बहलोल लोदी", correct: false },
            { text: "b) सिकंदर लोदी", correct: false },
            { text: "c) इब्राहिम लोदी", correct: false },
            { text: "b) और c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> ने अफगान सरदारों की <b>समानता की नीति को समाप्त</b> कर <b>सुल्तान की श्रेष्ठता</b> स्थापित की।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b> ने इस नीति को और भी <b>कठोरता से लागू</b> किया, जिससे अफगान अमीर उसके खिलाफ हो गए।"
    },
    {
        question: "प्रश्न 24. लोदी वास्तुकला की एक प्रमुख विशेषता क्या है?",
        answers: shuffle([
            { text: "मीनारों का प्रयोग", correct: false },
            { text: "ऊँचे चबूतरे पर बने मकबरे और दोहरे गुंबद", correct: true },
            { text: "लाल बलुआ पत्थर का प्रयोग", correct: false },
            { text: "संगमरमर की जाली का काम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी काल</b> में <b>ऊँचे पार्कों</b> के बीच <b>चबूतरे पर मकबरे</b> बनाने की परंपरा शुरू हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> के मकबरे में पहली बार <b>दोहरे गुंबद</b> का प्रयोग किया गया।"
    },
    {
        question: "प्रश्न 25. बहलोल लोदी ने जौनपुर के किस शर्की शासक को अंतिम रूप से पराजित किया था?",
        answers: shuffle([
            { text: "महमूद शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "हुसैन शाह शर्की", correct: true },
            { text: "मुबारक शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> ने जौनपुर के अंतिम शासक <b>हुसैन शाह शर्की</b> को पराजित कर जौनपुर को दिल्ली सल्तनत में मिला लिया।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>हुसैन शाह</b> बिहार भाग गया।"
    },
    {
        question: "प्रश्न 26. सिकंदर लोदी ने बिहार का प्रशासक किसे नियुक्त किया था?",
        answers: shuffle([
            { text: "दौलत खान लोदी", correct: false },
            { text: "बहार खान नुहानी", correct: false },
            { text: "दरिया खान नुहानी", correct: true },
            { text: "शेर खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंगाल के शासक को हराने के बाद, <b>सिकंदर लोदी</b> ने <b>दरिया खान नुहानी</b> को <b>बिहार</b> का प्रशासक नियुक्त किया।"
    },
    {
        question: "प्रश्न 27. किस लोदी सुल्तान ने कुतुब मीनार की मरम्मत करवाई थी?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: true },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "किसी ने नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह तुगलक</b> के बाद, <b>सिकंदर लोदी</b> ने भी बिजली गिरने से क्षतिग्रस्त हुई <b>कुतुब मीनार</b> की मरम्मत करवाई थी।"
    },
    {
        question: "प्रश्न 28. सिकंदर लोदी की मृत्यु किस कारण हुई थी?",
        answers: shuffle([
            { text: "युद्ध में", correct: false },
            { text: "एक षड्यंत्र में", correct: false },
            { text: "गले की बीमारी (कैंसर) के कारण", correct: true },
            { text: "घोड़े से गिरकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> की मृत्यु <b>1517 ई.</b> में <b>गले की एक गंभीर बीमारी</b> के कारण हुई थी।"
    },
    {
        question: "प्रश्न 29. पानीपत के प्रथम युद्ध में बाबर की जीत का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "उसकी विशाल सेना", correct: false },
            { text: "इब्राहिम लोदी का विश्वासघात", correct: false },
            { text: "उसका तोपखाना और तुलुगमा युद्ध नीति", correct: true },
            { text: "अफगान सरदारों का बाबर से मिल जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बाबर</b> ने भारत में पहली बार युद्ध में <b>तोपों</b> और <b>तुलुगमा</b> (सेना को घेरने की रणनीति) <b>युद्ध पद्धति</b> का प्रभावी ढंग से इस्तेमाल किया, जिसका सामना <b>इब्राहिम लोदी</b> की परंपरागत सेना नहीं कर सकी।"
    },
    {
        question: "प्रश्न 30. दिल्ली सल्तनत का अंत किस युद्ध के बाद हुआ?",
        answers: shuffle([
            { text: "तराइन का दूसरा युद्ध", correct: false },
            { text: "खानवा का युद्ध", correct: false },
            { text: "पानीपत का प्रथम युद्ध", correct: true },
            { text: "घाघरा का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1526</b> में <b>पानीपत के प्रथम युद्ध</b> में <b>इब्राहिम लोदी</b> की हार और मृत्यु के साथ ही <b>दिल्ली सल्तनत</b> और <b>लोदी वंश</b> दोनों का अंत हो गया और भारत में <b>मुगल वंश</b> की स्थापना हुई।"
    },
    {
        question: "प्रश्न 31. लोदी सुल्तानों की मातृभाषा क्या थी?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: false },
            { text: "पश्तो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी शासक</b> अफगानों की <b>पश्तून जनजाति</b> से थे और उनकी <b>मातृभाषा पश्तो</b> थी, हालांकि दरबारी भाषा फारसी थी।"
    },
    {
        question: "प्रश्न 32. बहलोल लोदी ने अपने आधे राज्य का उत्तराधिकारी किसे नियुक्त किया था?",
        answers: shuffle([
            { text: "अपने पुत्र निजाम खान (सिकंदर) को", correct: false },
            { text: "अपने पुत्र बारबक शाह को", correct: true },
            { text: "अपने पोते आजम हुमायूं को", correct: false },
            { text: "किसी को नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल</b> ने अपनी मृत्यु से पहले जौनपुर का विजित राज्य अपने दूसरे पुत्र <b>बारबक शाह</b> को दे दिया था, जिससे बाद में <b>सिकंदर लोदी</b> का उससे संघर्ष हुआ।"
    },
    {
        question: "प्रश्न 33. किस लोदी सुल्तान ने एक कुशल गुप्तचर प्रणाली की स्थापना की?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: true },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> ने अपने साम्राज्य पर नियंत्रण मजबूत करने और अमीरों की गतिविधियों पर नजर रखने के लिए एक बहुत ही <b>कुशल और तेज गुप्तचर (जासूसी) प्रणाली</b> स्थापित की थी।"
    },
    {
        question: "प्रश्न 34. सिकंदर लोदी ने मुहर्रम पर 'ताजिया' निकालने पर क्यों प्रतिबंध लगाया?",
        answers: shuffle([
            { text: "यह महंगा था", correct: false },
            { text: "यह गैर-इस्लामिक प्रथा थी", correct: true },
            { text: "इससे दंगे होते थे", correct: false },
            { text: "सुरक्षा कारणों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक <b>कट्टर सुन्नी मुसलमान</b> होने के कारण, <b>सिकंदर लोदी</b> ने <b>ताजिया निकालने</b> और मुस्लिम महिलाओं को पीरों की मजारों पर जाने जैसी प्रथाओं को <b>इस्लाम के विरुद्ध</b> मानते हुए उन पर प्रतिबंध लगा दिया था।"
    },
    {
        question: "प्रश्न 35. इब्राहिम लोदी के भाई का क्या नाम था जिसने उसके खिलाफ विद्रोह किया और जौनपुर पर अधिकार कर लिया?",
        answers: shuffle([
            { text: "आलम खान", correct: false },
            { text: "दिलावर खान", correct: false },
            { text: "जलाल खान", correct: true },
            { text: "इस्लाम खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंहासन पर बैठने के तुरंत बाद, <b>इब्राहिम लोदी</b> को अपने भाई <b>जलाल खान</b> के विद्रोह का सामना करना पड़ा, जिसने <b>जौनपुर</b> में खुद को स्वतंत्र शासक घोषित कर दिया था।"
    },
    {
        question: "प्रश्न 36. किस लोदी शासक का मकबरा दिल्ली के लोदी गार्डन में स्थित है?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: true },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "तीनों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली के प्रसिद्ध <b>लोदी गार्डन</b> में <b>सिकंदर लोदी</b> का <b>अष्टकोणीय मकबरा</b> स्थित है, जिसका निर्माण उसके पुत्र <b>इब्राहिम लोदी</b> ने करवाया था।"
    },
    {
        question: "प्रश्न 37. पानीपत के प्रथम युद्ध में बाबर के तोपखाने का नेतृत्व कौन कर रहा था?",
        answers: shuffle([
            { text: "बैरम खान और मीर बाकी", correct: false },
            { text: "उस्ताद अली और मुस्तफा खान", correct: true },
            { text: "चिन तैमूर और सुल्तान मिर्जा", correct: false },
            { text: "दिलावर खान और आलम खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>उस्ताद अली कुली</b> और <b>मुस्तफा रूमी</b>, बाबर के दो प्रमुख <b>तोपची (तोपखाना विशेषज्ञ)</b> थे, जिन्होंने पानीपत की जीत में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 38. बहलोल लोदी के शासनकाल में किस महिला ने महत्वपूर्ण भूमिका निभाई?",
        answers: shuffle([
            { text: "उसकी पत्नी बीबी राजी", correct: false },
            { text: "शर्की रानी बीबी राजी", correct: true },
            { text: "उसकी माँ", correct: false },
            { text: "उसकी बहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जौनपुर के शासक महमूद शाह शर्की की पत्नी <b>बीबी राजी</b>, दिल्ली के सैयद शासक की बेटी थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने <b>बहलोल</b> के खिलाफ अपने पति को उकसाने में <b>महत्वपूर्ण भूमिका</b> निभाई।"
    },
    {
        question: "प्रश्न 39. इब्राहिम लोदी के शासनकाल में बिहार का स्वतंत्र शासक कौन बन गया था?",
        answers: shuffle([
            { text: "दरिया खान नुहानी", correct: false },
            { text: "फरीद खान (शेरशाह)", correct: false },
            { text: "बहार खान नुहानी", correct: true },
            { text: "हसन खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b> की कमजोर स्थिति का लाभ उठाकर, <b>दरिया खान नुहानी</b> के पुत्र <b>बहार खान नुहानी</b> ने '<b>सुल्तान मुहम्मद शाह नुहानी</b>' की उपाधि के साथ <b>बिहार</b> को एक <b>स्वतंत्र राज्य</b> घोषित कर दिया।"
    },
    {
        question: "प्रश्न 40. दिल्ली सल्तनत का पतन किस वंश के समय में हुआ?",
        answers: shuffle([
            { text: "तुगलक वंश", correct: false },
            { text: "सैयद वंश", correct: false },
            { text: "लोदी वंश", correct: true },
            { text: "खिलजी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी वंश</b> दिल्ली सल्तनत का <b>अंतिम राजवंश</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>1526</b> में <b>इब्राहिम लोदी</b> की हार के साथ ही सल्तनत का अंत हो गया।"
    },
    {
        question: "प्रश्न 41. बहलोल लोदी किस अफगान कबीले की शाखा से संबंधित था?",
        answers: shuffle([
            { text: "सूर", correct: false },
            { text: "नुहानी", correct: false },
            { text: "शाहूखेल", correct: true },
            { text: "यूसुफजई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> अफगानों के <b>लोदी कबीले</b> की एक महत्वपूर्ण शाखा '<b>शाहूखेल</b>' से संबंधित था।"
    },
    {
        question: "प्रश्न 42. सिकंदर लोदी ने ग्वालियर के किस तोमर शासक पर कई बार असफल आक्रमण किया?",
        answers: shuffle([
            { text: "वीर सिंह देव", correct: false },
            { text: "डूंगरेंद्र सिंह", correct: false },
            { text: "मान सिंह तोमर", correct: true },
            { text: "विक्रमादित्य तोमर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ग्वालियर</b> का किला अपनी मजबूती के लिए प्रसिद्ध था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> ने राजा <b>मान सिंह तोमर</b> के शासनकाल में <b>ग्वालियर</b> को जीतने के कई प्रयास किए, लेकिन वह <b>सफल नहीं</b> हो सका।"
    },
    {
        question: "प्रश्न 43. इब्राहिम लोदी ने अपने किस प्रमुख सरदार को ग्वालियर के किले में कैद कर मार डाला, जिससे अन्य सरदार भयभीत हो गए?",
        answers: shuffle([
            { text: "आजम हुमायूं शेरवानी", correct: true },
            { text: "मियां माखन", correct: false },
            { text: "मियां भोइया", correct: false },
            { text: "दौलत खान लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b> ने संदेह के आधार पर अपने पिता के समय के एक बहुत शक्तिशाली और वफादार सरदार <b>आजम हुमायूं शेरवानी</b> को कैद कर लिया और बाद में उसकी <b>हत्या</b> करवा दी, जिससे अफगान अमीरों में <b>विद्रोह की भावना भड़क उठी</b>।"
    },
    {
        question: "प्रश्न 44. किस संत के आशीर्वाद से बहलोल लोदी को दिल्ली का राज्य प्राप्त होने की भविष्यवाणी की गई थी?",
        answers: shuffle([
            { text: "शेख सलीम चिश्ती", correct: false },
            { text: "निजामुद्दीन औलिया", correct: false },
            { text: "शेख समाउद्दीन", correct: true },
            { text: "कबीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक लोकप्रिय कहानी के अनुसार, एक बार <b>बहलोल लोदी</b> एक संत <b>शेख समाउद्दीन</b> के पास गया, जिन्होंने भविष्यवाणी की कि वह एक दिन <b>दिल्ली का सुल्तान</b> बनेगा।"
    },
    {
        question: "प्रश्न 45. बहलोल लोदी का राज्याभिषेक कहाँ हुआ था?",
        answers: shuffle([
            { text: "लाहौर", correct: false },
            { text: "मुल्तान", correct: false },
            { text: "दिल्ली", correct: true },
            { text: "सरहिन्द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद वंश</b> के शासक के स्वेच्छा से पद त्यागने के बाद, <b>बहलोल लोदी</b> को <b>दिल्ली</b> के अमीरों ने आमंत्रित किया और उसका <b>राज्याभिषेक दिल्ली</b> में ही हुआ।"
    },
    {
        question: "प्रश्न 46. सिकंदर लोदी ने हिंदुओं के किस पवित्र स्थान पर स्नान करने पर प्रतिबंध लगा दिया था?",
        answers: shuffle([
            { text: "गंगा, हरिद्वार में", correct: false },
            { text: "यमुना, मथुरा में", correct: true },
            { text: "सरस्वती, कुरुक्षेत्र में", correct: false },
            { text: "शिप्रा, उज्जैन में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी <b>कट्टर धार्मिक नीति</b> के तहत, <b>सिकंदर लोदी</b> ने <b>मथुरा</b> में हिंदुओं के <b>यमुना नदी</b> में <b>स्नान करने</b> और सिर मुंडवाने की प्रथा पर रोक लगा दी थी।"
    },
    {
        question: "प्रश्न 47. सिकंदर लोदी का मकबरा किस आकार का है?",
        answers: shuffle([
            { text: "वर्गाकार", correct: false },
            { text: "आयताकार", correct: false },
            { text: "अष्टकोणीय", correct: true },
            { text: "गोलाकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> का मकबरा <b>सैयद काल</b> की परंपरा के अनुसार <b>अष्टकोणीय आकार</b> में बनाया गया है और यह एक बड़े चारदीवारी वाले बगीचे के बीच में स्थित है।"
    },
    {
        question: "प्रश्न 48. इब्राहिम लोदी ने मेवाड़ से हारने के बाद मालवा के किस शासक को शरण दी थी?",
        answers: shuffle([
            { text: "महमूद खिलजी प्रथम", correct: false },
            { text: "महमूद खिलजी द्वितीय", correct: true },
            { text: "गयासुद्दीन खिलजी", correct: false },
            { text: "नासिरुद्दीन शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब <b>राणा सांगा</b> ने मालवा पर आक्रमण कर सुल्तान <b>महमूद खिलजी द्वितीय</b> को हराया, तो उसने <b>इब्राहिम लोदी</b> के यहाँ शरण ली।"
    },
    {
        question: "प्रश्न 49. दौलत खान लोदी, जिसने बाबर को आमंत्रित किया, कहाँ का सूबेदार था?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "बंगाल", correct: false },
            { text: "सिंध", correct: false },
            { text: "पंजाब", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>दौलत खान लोदी</b>, <b>इब्राहिम लोदी</b> के शासनकाल में <b>पंजाब (लाहौर)</b> का एक बहुत शक्तिशाली सूबेदार था।<br><br><i class='fa-solid fa-angles-right icon'></i> इब्राहिम लोदी के अपमानजनक व्यवहार के कारण उसने <b>बाबर</b> को बुलाया।"
    },
    {
        question: "प्रश्न 50. पानीपत के प्रथम युद्ध में इब्राहिम लोदी की सेना में लगभग कितने सैनिक थे?",
        answers: shuffle([
            { text: "25,000", correct: false },
            { text: "50,000", correct: false },
            { text: "1,00,000", correct: true },
            { text: "2,00,000", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुमान है कि <b>इब्राहिम लोदी</b> की सेना में लगभग <b>एक लाख सैनिक</b> और <b>1000 हाथी</b> थे, जबकि <b>बाबर</b> की सेना बहुत छोटी (लगभग 12,000-15,000) थी।"
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