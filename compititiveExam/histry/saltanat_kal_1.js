const questions = [
    {
        topHeading: "सल्तनत काल पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. दिल्ली सल्तनत का पहला वंश कौन सा था?",
        answers: shuffle([
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: false },
            { text: "गुलाम वंश", correct: true },
            { text: "लोदी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली सल्तनत की शुरुआत 1206 ई. में कुतुबुद्दीन ऐबक द्वारा स्थापित <b>गुलाम वंश (या मामलुक वंश)</b> से हुई थी।"
    },
    {
        question: "प्रश्न 2. गुलाम वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "रजिया सुल्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कुतुबुद्दीन ऐबक</b> मुहम्मद गोरी का एक गुलाम था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसने 1206 ई. में दिल्ली में <b>गुलाम वंश की नींव</b> रखी।"
    },
    {
        question: "प्रश्न 3. सल्तनत काल में 'इक्ता' का क्या अर्थ था?",
        answers: shuffle([
            { text: "वंशानुगत भूमि अनुदान", correct: false },
            { text: "नकद वेतन के बदले दिया जाने वाला भूमि राजस्व का अधिकार", correct: true },
            { text: "धार्मिक दान में दी गई भूमि", correct: false },
            { text: "बंजर भूमि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इक्ता</b> एक प्रशासनिक अनुदान था, न कि वंशानुगत संपत्ति।<br><br><i class='fa-solid fa-angles-right icon'></i> इक्तादार को उस भूमि से <b>राजस्व वसूलने और कानून-व्यवस्था बनाए रखने का अधिकार</b> था।"
    },
    {
        question: "प्रश्न 4. कुतुब मीनार की नींव किस शासक ने रखी थी?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध सूफी संत <b>ख्वाजा कुतुबुद्दीन बख्तियार काकी</b> की स्मृति में <b>कुतुब मीनार</b> का निर्माण कार्य <b>कुतुबुद्दीन ऐबक</b> ने शुरू करवाया था।"
    },
    {
        question: "प्रश्न 5. दिल्ली सल्तनत का वास्तविक संस्थापक किसे माना जाता है?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "आरामशाह", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "बलबन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने न केवल सल्तनत को सुदृढ़ किया, बल्कि बगदाद के खलीफा से <b>सुल्तान के पद की वैधानिक स्वीकृति</b> भी प्राप्त की।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसे <b>वास्तविक संस्थापक</b> माना जाता है।"
    },
    {
        question: "प्रश्न 6. 'इक्ता प्रणाली' की शुरुआत किसने की थी?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "इल्तुतमिश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इक्ता प्रणाली एक प्रशासनिक व्यवस्था थी जिसके तहत सैनिकों और अधिकारियों को वेतन के बदले भूमि का एक टुकड़ा (इक्ता) दिया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रणाली की शुरुआत <b>इल्तुतमिश</b> ने की थी।"
    },
    {
        question: "प्रश्न 7. 'तुर्कान-ए-चिहालगानी' (चालीस तुर्क सरदारों का दल) का गठन किसने किया था?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "रजिया सुल्तान", correct: false },
            { text: "बलबन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने अपने वफादार <b>चालीस तुर्क गुलामों</b> का एक दल बनाया था, जो प्रशासन में उसकी मदद करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे <b>'चालीसा दल'</b> भी कहा जाता है।"
    },
    {
        question: "प्रश्न 8. दिल्ली सल्तनत की पहली और एकमात्र महिला शासिका कौन थी?",
        answers: shuffle([
            { text: "चाँद बीबी", correct: false },
            { text: "नूरजहाँ", correct: false },
            { text: "मुमताज महल", correct: false },
            { text: "रजिया सुल्तान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>रजिया सुल्तान</b> इल्तुतमिश की पुत्री थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने 1236 से 1240 ई. तक दिल्ली सल्तनत पर शासन किया और वह <b>पहली और एकमात्र महिला शासिका</b> थी।"
    },
    {
        question: "प्रश्न 9. रजिया सुल्तान के पतन का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "उसका महिला होना", correct: false },
            { text: "तुर्क अमीरों का षड्यंत्र", correct: true },
            { text: "मंगोल आक्रमण", correct: false },
            { text: "उसकी प्रशासनिक विफलता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रजिया का एक महिला होकर पुरुषों की तरह शासन करना और गैर-तुर्क अमीर याकूत को महत्व देना तुर्क अमीरों (चिहालगानी) को पसंद नहीं आया।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने <b>षड्यंत्र कर उसे गद्दी से हटा दिया</b>, इसलिए <b>तुर्क अमीरों का षड्यंत्र</b> मुख्य कारण था।"
    },
    {
        question: "प्रश्न 10. 'सिजदा' और 'पैबोस' की प्रथा किसने शुरू की?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: false },
            { text: "ग्यासुद्दीन बलबन", correct: true },
            { text: "इल्तुतमिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने दरबार में सुल्तान की प्रतिष्ठा और शक्ति बढ़ाने के लिए ईरानी परंपरा 'सिजदा' (घुटनों पर बैठकर सुल्तान के सामने सिर झुकाना) और <b>'पैबोस' (सुल्तान के कदम चूमना)</b> की शुरुआत की।"
    },
    {
        question: "प्रश्न 11. 'लौह एवं रक्त' की नीति किस सुल्तान ने अपनाई थी?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: true },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने विद्रोहियों और शत्रुओं के प्रति कठोरता और निर्ममता की नीति को <b>'लौह एवं रक्त' की नीति</b> कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे <b>बलबन</b> ने अपनाया था।"
    },
    {
        question: "प्रश्न 12. 'तुर्कान-ए-चिहालगानी' का दमन किसने किया?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "रजिया सुल्तान", correct: false },
            { text: "बलबन", correct: true },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> स्वयं 'चिहालगानी' का सदस्य था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन सुल्तान बनने के बाद उसने इसकी शक्ति को समाप्त कर दिया ताकि <b>सुल्तान की सर्वोच्चता</b> स्थापित हो सके।"
    },
    {
        question: "प्रश्न 13. सल्तनत काल में सैन्य विभाग 'दीवान-ए-अर्ज' की स्थापना किसने की?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: true },
            { text: "जलालुद्दीन खिलजी", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने सेना को मजबूत करने और मंगोल आक्रमणों का सामना करने के लिए एक अलग सैन्य विभाग <b>'दीवान-ए-अर्ज' की स्थापना</b> की।"
    },
    {
        question: "प्रश्न 14. दिल्ली को सल्तनत की राजधानी के रूप में किसने स्थापित किया?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "बलबन", correct: false },
            { text: "रजिया सुल्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुतुबुद्दीन ऐबक ने लाहौर से शासन किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने राजधानी को लाहौर से <b>दिल्ली स्थानांतरित</b> किया और इसे सल्तनत की राजधानी के रूप में स्थापित किया।"
    },
    {
        question: "प्रश्न 15. गुलाम वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "कैकुबाद", correct: false },
            { text: "शम्सुद्दीन क्यूमर्स", correct: true },
            { text: "नसीरुद्दीन महमूद", correct: false },
            { text: "बहराम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शम्सुद्दीन क्यूमर्स</b> एक बालक शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसकी हत्या करके जलालुद्दीन खिलजी ने 1290 ई. में <b>खिलजी वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 16. खिलजी वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "जलालुद्दीन फिरोज खिलजी", correct: true },
            { text: "मुबारक खिलजी", correct: false },
            { text: "मलिक काफूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जलालुद्दीन फिरोज खिलजी</b> ने गुलाम वंश के अंतिम शासक की हत्या कर 1290 ई. में <b>खिलजी वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 17. दिल्ली के किस सुल्तान ने अपने चाचा की हत्या कर गद्दी पर अधिकार किया?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "सिकंदर लोदी", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन खिलजी</b> ने अपने चाचा और ससुर <b>जलालुद्दीन खिलजी</b> की 1296 ई. में कड़ा (इलाहाबाद) में धोखे से हत्या कर दी और सुल्तान बन गया।"
    },
    {
        question: "प्रश्न 18. 'सिकंदर-ए-सानी' (दूसरा सिकंदर) की उपाधि किसने धारण की?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी विशाल विजयों के कारण <b>अलाउद्दीन खिलजी</b> ने स्वयं को <b>'सिकंदर-ए-सानी'</b> या 'दूसरा सिकंदर' घोषित किया था।"
    },
    {
        question: "प्रश्न 19. बाजार नियंत्रण प्रणाली या मूल्य नियंत्रण नीति किसने लागू की?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन खिलजी</b> ने एक बड़ी स्थायी सेना बनाए रखने के लिए सैनिकों को कम वेतन पर संतुष्ट रखने हेतु <b>बाजार में वस्तुओं की कीमतें निश्चित</b> कर दी थीं।"
    },
    {
        question: "प्रश्न 20. दक्षिण भारत पर आक्रमण करने वाला दिल्ली सल्तनत का पहला सुल्तान कौन था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "ग्यासुद्दीन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन खिलजी</b> पहला सुल्तान था जिसने अपने सेनापति <b>मलिक काफूर</b> के नेतृत्व में <b>दक्षिण भारत</b> के राज्यों पर सफल अभियान भेजे।"
    },
    {
        question: "प्रश्न 21. अलाउद्दीन खिलजी का प्रसिद्ध सेनापति कौन था, जिसने दक्षिण भारत के अभियानों का नेतृत्व किया?",
        answers: shuffle([
            { text: "जफर खान", correct: false },
            { text: "नुसरत खान", correct: false },
            { text: "उलूग खान", correct: false },
            { text: "मलिक काफूर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मलिक काफूर</b>, जिसे 'हजार दीनारी' भी कहा जाता है, एक हिजड़ा गुलाम था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसने देवगिरि, वारंगल, द्वारसमुद्र और मदुरै तक <b>दक्षिण भारत</b> में सफल अभियान किए।"
    },
    {
        question: "प्रश्न 22. 'अलाई दरवाजा' का निर्माण किस सुल्तान ने करवाया था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाई दरवाजा</b> दिल्ली में कुतुब मीनार परिसर में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे इस्लामी वास्तुकला का एक उत्कृष्ट नमूना माना जाता है, जिसका निर्माण <b>अलाउद्दीन खिलजी</b> ने करवाया था।"
    },
    {
        question: "प्रश्न 23. 'घरी' (गृह कर) और 'चरी' (चराई कर) नामक दो नए कर किसने लगाए?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी आय बढ़ाने के लिए <b>अलाउद्दीन खिलजी</b> ने भू-राजस्व के अलावा घरों पर <b>'घरी'</b> और दुधारू पशुओं पर <b>'चरी'</b> नामक कर भी लगाए।"
    },
    {
        question: "प्रश्न 24. सल्तनत काल में स्थायी सेना (standing army) रखने की शुरुआत किसने की?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन खिलजी</b> पहला सुल्तान था जिसने एक बड़ी और <b>स्थायी सेना (standing army)</b> का गठन किया और सैनिकों को <b>नकद वेतन</b> देना शुरू किया।"
    },
    {
        question: "प्रश्न 25. चित्तौड़ का प्रसिद्ध 'कीर्ति स्तंभ' किसके शासनकाल में बनाया गया था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "राणा कुंभा", correct: true },
            { text: "राणा सांगा", correct: false },
            { text: "राणा प्रताप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि अलाउद्दीन ने चित्तौड़ पर आक्रमण किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन <b>कीर्ति स्तंभ</b> का निर्माण मेवाड़ के शासक <b>राणा कुंभा</b> ने मालवा पर अपनी विजय के उपलक्ष्य में करवाया था।"
    },
    {
        question: "प्रश्न 26. तुगलक वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "ग्यासुद्दीन तुगलक (गाजी मलिक)", correct: true },
            { text: "नसीरुद्दीन महमूद तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गाजी मलिक</b> ने 1320 ई. में अंतिम खिलजी शासक खुसरव शाह की हत्या कर <b>ग्यासुद्दीन तुगलक</b> के नाम से <b>तुगलक वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 27. दिल्ली के किस सुल्तान को 'पागल' या 'रक्तपिपासु' कहा जाता है?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "बलबन", correct: false },
            { text: "इब्राहिम लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी विवादास्पद और असफल योजनाओं, जैसे राजधानी परिवर्तन और सांकेतिक मुद्रा, के कारण इतिहासकारों ने <b>मुहम्मद बिन तुगलक</b> को <b>'बुद्धिमान मूर्ख', 'पागल' और 'रक्तपिपासु'</b> जैसी संज्ञाएं दी हैं।"
    },
    {
        question: "प्रश्न 28. किस सुल्तान ने अपनी राजधानी दिल्ली से देवगिरि (दौलताबाद) स्थानांतरित की?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1327 ई. में, <b>मुहम्मद बिन तुगलक</b> ने मंगोल आक्रमणों से सुरक्षा और दक्षिण भारत पर बेहतर नियंत्रण के लिए राजधानी को दिल्ली से <b>दौलताबाद</b> स्थानांतरित करने का असफल प्रयास किया।"
    },
    {
        question: "प्रश्न 29. सांकेतिक मुद्रा (Token Currency) का प्रचलन किसने किया?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चांदी की कमी के कारण, <b>मुहम्मद बिन तुगलक</b> ने चांदी के 'टंका' के मूल्य के बराबर <b>कांसे के सिक्के</b> चलाए।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन टकसाल पर नियंत्रण न होने के कारण यह <b>सांकेतिक मुद्रा</b> योजना भी असफल रही।"
    },
    {
        question: "प्रश्न 30. प्रसिद्ध अफ्रीकी यात्री इब्न बतूता किसके शासनकाल में भारत आया?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोरक्को का यात्री <b>इब्न बतूता 1333 ई. में भारत आया</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन तुगलक</b> ने उसे दिल्ली का काजी नियुक्त किया और बाद में चीन में अपना राजदूत बनाकर भेजा।"
    },
    {
        question: "प्रश्न 31. इब्न बतूता द्वारा लिखित यात्रा वृत्तांत का क्या नाम है?",
        answers: shuffle([
            { text: "किताब-उल-हिन्द", correct: false },
            { text: "शाहनामा", correct: false },
            { text: "रहला", correct: true },
            { text: "तारीख-ए-फिरोजशाही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'रहला' (अर्थ-यात्रा)</b> इब्न बतूता द्वारा अरबी भाषा में लिखा गया ग्रंथ है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें उसने <b>मुहम्मद बिन तुगलक</b> के समय के भारत का विस्तृत वर्णन किया है।"
    },
    {
        question: "प्रश्न 32. किस सुल्तान ने कृषि के विकास के लिए 'दीवान-ए-अमीर-कोही' नामक विभाग की स्थापना की?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'दीवान-ए-अमीर-कोही'</b> नामक यह एक <b>कृषि विभाग</b> था जिसकी स्थापना <b>मुहम्मद बिन तुगलक</b> ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उद्देश्य कृषि योग्य भूमि का विस्तार करना और किसानों को ऋण (सोंधर) देकर खेती को बढ़ावा देना था।"
    },
    {
        question: "प्रश्न 33. सल्तनत काल में नहरों का सबसे बड़ा जाल किसने बनवाया?",
        answers: shuffle([
            { text: "ग्यासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोज शाह तुगलक</b> ने सिंचाई व्यवस्था में सुधार के लिए <b>पांच बड़ी नहरों का निर्माण</b> करवाया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे कृषि उत्पादन में भारी वृद्धि हुई और वह सल्तनत काल में <b>नहरों का सबसे बड़ा जाल</b> बनवाने वाला शासक बना।"
    },
    {
        question: "प्रश्न 34. ब्राह्मणों पर भी 'जजिया' कर लगाने वाला पहला सुल्तान कौन था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इससे पहले जजिया कर से ब्राह्मणों को छूट प्राप्त थी।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन <b>फिरोज शाह तुगलक</b> ने अपनी कट्टर धार्मिक नीति के तहत <b>ब्राह्मणों पर भी यह कर</b> लगा दिया।"
    },
    {
        question: "प्रश्न 35. 'दीवान-ए-खैरात' (दान विभाग) और 'दार-उल-शफा' (अस्पताल) की स्थापना किसने की?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोज शाह तुगलक</b> ने लोक कल्याणकारी कार्यों के तहत गरीब मुसलमानों, अनाथों और विधवाओं की सहायता के लिए <b>'दीवान-ए-खैरात'</b> और मुफ्त इलाज के लिए <b>'दार-उल-शफा' (अस्पताल)</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 36. किस सुल्तान ने अपनी आत्मकथा 'फुतुहात-ए-फिरोजशाही' लिखी?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'फुतुहात-ए-फिरोजशाही'</b> <b>फिरोज शाह तुगलक</b> द्वारा लिखित एक छोटी आत्मकथा है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें उसने अपने प्रशासनिक सुधारों और धार्मिक नीतियों का वर्णन किया है।"
    },
    {
        question: "प्रश्न 37. तैमूर लंग ने किस वर्ष भारत पर आक्रमण किया?",
        answers: shuffle([
            { text: "1398 ई.", correct: true },
            { text: "1414 ई.", correct: false },
            { text: "1296 ई.", correct: false },
            { text: "1327 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समरकंद के शासक <b>तैमूर</b> ने <b>1398 ई.</b> में तुगलक वंश के अंतिम शासक नसीरुद्दीन महमूद तुगलक के समय <b>दिल्ली पर आक्रमण</b> किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और भारी लूटपाट और नरसंहार किया।"
    },
    {
        question: "प्रश्न 38. सैय्यद वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "मुबारक शाह", correct: false },
            { text: "खिज्र खान", correct: true },
            { text: "मुहम्मद शाह", correct: false },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैमूर के आक्रमण के बाद फैली अव्यवस्था का लाभ उठाकर उसके प्रतिनिधि <b>खिज्र खान</b> ने <b>1414 ई.</b> में दिल्ली में <b>सैय्यद वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 39. दिल्ली सल्तनत पर शासन करने वाला पहला अफगान वंश कौन सा था?",
        answers: shuffle([
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: false },
            { text: "सैय्यद वंश", correct: false },
            { text: "लोदी वंश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी वंश</b> के शासक <b>अफगान मूल</b> के थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे पहले के सभी वंश तुर्क मूल के थे, इसलिए लोदी वंश <b>दिल्ली सल्तनत पर शासन करने वाला पहला अफगान वंश</b> था।"
    },
    {
        question: "प्रश्न 40. लोदी वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "सिकंदर लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "बहलोल लोदी", correct: true },
            { text: "दौलत खान लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> ने 1451 ई. में अंतिम सैय्यद शासक को हटाकर <b>लोदी वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 41. आगरा शहर की स्थापना किसने की?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: true },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1504 ई. में</b>, <b>सिकंदर लोदी</b> ने राजस्थान के शासकों पर नियंत्रण रखने और व्यापार मार्गों को सुरक्षित करने के उद्देश्य से यमुना नदी के किनारे <b>आगरा शहर की स्थापना</b> की।"
    },
    {
        question: "प्रश्न 42. भूमि मापने के लिए 'गज-ए-सिकंदरी' पैमाना किसने प्रचलित किया?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "सिकंदर लोदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> ने भूमि की पैमाइश और लगान निर्धारण के लिए लगभग 30 इंच का एक नया पैमाना <b>'गज-ए-सिकंदरी'</b> शुरू किया।"
    },
    {
        question: "प्रश्न 43. 'गुलरुखी' उपनाम से फारसी में कविताएँ कौन लिखता था?",
        answers: shuffle([
            { text: "अमीर खुसरो", correct: false },
            { text: "सिकंदर लोदी", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "इब्न बतूता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान <b>सिकंदर लोदी</b> साहित्य और कला का प्रेमी था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह <b>'गुलरुखी'</b> के उपनाम से <b>फारसी भाषा में कविताएं</b> लिखता था।"
    },
    {
        question: "प्रश्न 44. पानीपत का प्रथम युद्ध (1526 ई.) किसके बीच हुआ था?",
        answers: shuffle([
            { text: "बाबर और राणा सांगा", correct: false },
            { text: "बाबर और इब्राहिम लोदी", correct: true },
            { text: "अकबर और हेमू", correct: false },
            { text: "हुमायूँ और शेरशाह सूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध 21 अप्रैल 1526 को काबुल के शासक <b>बाबर और दिल्ली के सुल्तान इब्राहिम लोदी</b> के बीच हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> इस युद्ध में बाबर की विजय हुई और भारत में <b>मुगल साम्राज्य की नींव</b> पड़ी।"
    },
    {
        question: "प्रश्न 45. दिल्ली सल्तनत का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "सिकंदर लोदी", correct: false },
            { text: "बहलोल लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: true },
            { text: "नसीरुद्दीन महमूद तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b>, लोदी वंश और <b>दिल्ली सल्तनत दोनों का अंतिम सुल्तान</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो पानीपत के प्रथम युद्ध में बाबर के हाथों मारा गया।"
    },
    {
        question: "प्रश्न 46. 'तूती-ए-हिन्द' (भारत का तोता) किसे कहा जाता है?",
        answers: shuffle([
            { text: "अल-बिरूनी", correct: false },
            { text: "इब्न बतूता", correct: false },
            { text: "अमीर खुसरो", correct: true },
            { text: "जियाउद्दीन बरनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अमीर खुसरो</b> एक महान कवि, संगीतकार और इतिहासकार थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें <b>खड़ी बोली हिन्दी</b>, सितार और कव्वाली का जनक भी माना जाता है, इसलिए उन्हें <b>'तूती-ए-हिन्द'</b> कहा जाता है।"
    },
    {
        question: "प्रश्न 47. सल्तनत काल में 'दीवान-ए-विजारत' किस विभाग से संबंधित था?",
        answers: shuffle([
            { text: "सैन्य विभाग", correct: false },
            { text: "वित्त विभाग", correct: true },
            { text: "विदेश विभाग", correct: false },
            { text: "पत्राचार विभाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'दीवान-ए-विजारत'</b> सल्तनत का सबसे महत्वपूर्ण विभाग था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो <b>वित्त और राजस्व</b> का प्रबंधन करता था और इसका प्रमुख <b>'वजीर'</b> होता था।"
    },
    {
        question: "प्रश्न 48. सल्तनत काल की आधिकारिक भाषा क्या थी?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: true },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली सल्तनत के सुल्तानों ने <b>फारसी</b> को अपनी <b>राजभाषा</b> बनाया और सभी प्रशासनिक कार्य इसी भाषा में होते थे।"
    },
    {
        question: "प्रश्न 49. 'अढ़ाई दिन का झोपड़ा' कहाँ स्थित है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "अजमेर", correct: true },
            { text: "लाहौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका निर्माण <b>कुतुबुद्दीन ऐबक</b> ने एक संस्कृत विद्यालय को तोड़कर करवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह <b>अजमेर, राजस्थान</b> में स्थित एक मस्जिद है।"
    },
    {
        question: "प्रश्न 50. सल्तनत काल में 'खराज', 'खम्स', 'जजिया' और 'जकात' क्या थे?",
        answers: shuffle([
            { text: "शहरों के नाम", correct: false },
            { text: "सुल्तानों के पद", correct: false },
            { text: "विभिन्न प्रकार के कर", correct: true },
            { text: "सैन्य टुकड़ियों के नाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी सल्तनत काल में लागू <b>विभिन्न प्रकार के कर</b> थे।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>'खराज'</b> भू-राजस्व, <b>'खम्स'</b> युद्ध में लूट का हिस्सा, <b>'जजिया'</b> गैर-मुसलमानों पर धार्मिक कर और <b>'जकात'</b> मुसलमानों पर धार्मिक कर था।"
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