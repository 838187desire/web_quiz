const questions = [
    {
        topHeading: "खिलजी वंश पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. खिलजी काल में 'नबिस' कौन होते थे?",
        answers: shuffle([
            { text: "सैनिक", correct: false },
            { text: "जासूस", correct: false },
            { text: "लेखक या क्लर्क", correct: true },
            { text: "न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सल्तनत प्रशासन में 'नबिस' शब्द का प्रयोग विभिन्न प्रकार के लेखकों, लिपिकों या <b>क्लर्कों</b> के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 2. खिलजी वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "जलालुद्दीन फिरोज खिलजी", correct: true },
            { text: "मुबारक खिलजी", correct: false },
            { text: "शिहाबुद्दीन उमर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिलजी वंश</b> की स्थापना 70 वर्षीय <b>जलालुद्दीन फिरोज खिलजी</b> ने <b>1290 ई.</b> में की थी।"
    },
    {
        question: "प्रश्न 3. किस विजय के बाद अलाउद्दीन खिलजी ने 'विश्व विजय' की योजना त्याग दी?",
        answers: shuffle([
            { text: "गुजरात विजय", correct: false },
            { text: "रणथंभौर विजय", correct: false },
            { text: "चित्तौड़ विजय", correct: false },
            { text: "दिल्ली में मंगोल घेरे को हटाने के बाद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तारगी बेग</b> के नेतृत्व में हुए मंगोल आक्रमण (1303 ई.) ने उसे यह अहसास कराया कि पहले अपने साम्राज्य को <b>सुरक्षित और मजबूत</b> करना अधिक महत्वपूर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> बजाय विश्व विजय के सपने देखने के।"
    },
    {
        question: "प्रश्न 4. 'मैं एक वृद्ध मुसलमान हूँ और मुसलमानों का रक्त बहाना मेरी आदत नहीं है।' यह कथन किस सुल्तान का है?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "जलालुद्दीन फिरोज खिलजी", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जलालुद्दीन</b> ने उदार और सहिष्णुता की नीति अपनाई और विद्रोहियों के प्रति भी नरम रुख रखा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी संदर्भ में उसने यह कथन कहा था।"
    },
    {
        question: "प्रश्न 5. जलालुद्दीन खिलजी के शासनकाल में किस ईरानी फकीर को राजद्रोह के आरोप में हाथी के पैरों तले कुचलवा दिया गया था?",
        answers: shuffle([
            { text: "बाबा फरीद", correct: false },
            { text: "निजामुद्दीन औलिया", correct: false },
            { text: "सीधी मौला", correct: true },
            { text: "बख्तियार काकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सीधी मौला</b> पर सुल्तान के खिलाफ षड्यंत्र रचने का आरोप लगा था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके परिणामस्वरूप <b>जलालुद्दीन</b> के आदेश पर उसे मृत्युदंड दिया गया।"
    },
    {
        question: "प्रश्न 6. अलाउद्दीन खिलजी का मूल नाम क्या था?",
        answers: shuffle([
            { text: "जौना खान", correct: false },
            { text: "फरीद खान", correct: false },
            { text: "अली गुरशास्प", correct: true },
            { text: "गाजी मलिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान बनने से पहले अलाउद्दीन खिलजी को <b>अली गुरशास्प</b> के नाम से जाना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह जलालुद्दीन का भतीजा और दामाद था।"
    },
    {
        question: "प्रश्न 7. अलाउद्दीन खिलजी ने अपने चाचा जलालुद्दीन खिलजी की हत्या कहाँ की थी?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "देवगिरि", correct: false },
            { text: "कड़ा-मानिकपुर", correct: true },
            { text: "किलोखरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1296 ई.</b> में देवगिरि से लूटे हुए धन को लेकर जब अलाउद्दीन <b>कड़ा-मानिकपुर</b> (आधुनिक उत्तर प्रदेश में) पहुँचा।<br><br><i class='fa-solid fa-angles-right icon'></i> तो उसने धोखे से गले मिलते समय अपने चाचा <b>जलालुद्दीन</b> की हत्या कर दी।"
    },
    {
        question: "प्रश्न 8. अलाउद्दीन खिलजी ने दिल्ली सल्तनत का सुल्तान बनने के बाद सबसे पहले किस मंगोल आक्रमण को विफल किया?",
        answers: shuffle([
            { text: "कादर खान का आक्रमण", correct: true },
            { text: "सलदी का आक्रमण", correct: false },
            { text: "कुतलुग ख्वाजा का आक्रमण", correct: false },
            { text: "तारगी बेग का आक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान बनने के तुरंत बाद, <b>1297-98 ई.</b> में, उसने <b>कादर खान</b> के नेतृत्व में हुए मंगोल आक्रमण को सफलतापूर्वक विफल किया।"
    },
    {
        question: "प्रश्न 9. 'सिकंदर-ए-सानी' (दूसरा सिकंदर) की उपाधि किस सुल्तान ने धारण की थी?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी लगातार सैन्य सफलताओं और विश्व विजय की महत्वाकांक्षा के कारण <b>अलाउद्दीन खिलजी</b> ने यह उपाधि धारण की।<br><br><i class='fa-solid fa-angles-right icon'></i> और इसे अपने सिक्कों पर भी अंकित करवाया।"
    },
    {
        question: "प्रश्न 10. किस विजय के बाद अलाउद्दीन खिलजी ने 'विश्व विजय' की योजना त्याग दी?",
        answers: shuffle([
            { text: "गुजरात विजय", correct: false },
            { text: "रणथंभौर विजय", correct: false },
            { text: "चित्तौड़ विजय", correct: false },
            { text: "दिल्ली में मंगोल घेरे को हटाने के बाद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तारगी बेग</b> के नेतृत्व में हुए मंगोल आक्रमण (1303 ई.) ने उसे यह अहसास कराया कि पहले अपने साम्राज्य को <b>सुरक्षित और मजबूत</b> करना अधिक महत्वपूर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> बजाय विश्व विजय के सपने देखने के।"
    },
    {
        question: "प्रश्न 11. मलिक काफूर को किस अभियान के दौरान खरीदा गया था?",
        answers: shuffle([
            { text: "रणथंभौर अभियान", correct: false },
            { text: "चित्तौड़ अभियान", correct: false },
            { text: "गुजरात अभियान", correct: true },
            { text: "देवगिरि अभियान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गुजरात विजय</b> के दौरान खंभात बंदरगाह से सेनापति <b>नुसरत खान</b> ने <b>मलिक काफूर</b> नामक एक हिजड़े को 1000 दीनार में खरीदा था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसीलिए उसे <b>'हजार दीनारी'</b> भी कहा जाता है।"
    },
    {
        question: "प्रश्न 12. रणथंभौर पर आक्रमण के समय अलाउद्दीन खिलजी का कौन-सा सेनापति मारा गया था?",
        answers: shuffle([
            { text: "उलूग खान", correct: false },
            { text: "जफर खान", correct: false },
            { text: "नुसरत खान", correct: true },
            { text: "अल्प खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1301 ई.</b> में <b>रणथंभौर</b> के किले की घेराबंदी के दौरान किले से आए एक गोले से <b>नुसरत खान</b> की मृत्यु हो गई थी।"
    },
    {
        question: "प्रश्न 13. चित्तौड़ पर आक्रमण (1303 ई.) का मुख्य कारण क्या बताया जाता है?",
        answers: shuffle([
            { text: "साम्राज्य विस्तार की नीति", correct: false },
            { text: "रानी पद्मिनी को प्राप्त करने की लालसा", correct: false },
            { text: "चित्तौड़ का सामरिक महत्व", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि मलिक मुहम्मद जायसी के <b>'पद्मावत'</b> में रानी पद्मिनी को मुख्य कारण बताया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> तथापि <b>चित्तौड़ का सामरिक महत्व</b> और अलाउद्दीन की <b>साम्राज्यवादी नीति</b> भी प्रमुख कारण थे।"
    },
    {
        question: "प्रश्न 14. चित्तौड़ विजय के बाद अलाउद्दीन ने उसका नाम बदलकर क्या रखा?",
        answers: shuffle([
            { text: "सुल्तानपुर", correct: false },
            { text: "खिज्राबाद", correct: true },
            { text: "अलाउद्दीनपुर", correct: false },
            { text: "फिरोजाबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चित्तौड़ को जीतने के बाद अलाउद्दीन ने इसका शासन अपने बेटे <b>खिज्र खान</b> को सौंप दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसी के नाम पर इसका नाम <b>'खिज्राबाद'</b> रख दिया।"
    },
    {
        question: "प्रश्न 15. दक्षिण भारत में सल्तनत की सेना का पहला सफल आक्रमण किसके नेतृत्व में हुआ?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "उलूग खान", correct: false },
            { text: "मलिक काफूर", correct: true },
            { text: "जफर खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मलिक काफूर</b> के नेतृत्व में ही खिलजी सेना ने दक्षिण भारत के <b>देवगिरि, वारंगल, द्वारसमुद्र और मदुरै</b> जैसे राज्यों पर सफल अभियान किए।"
    },
    {
        question: "प्रश्न 16. किस दक्षिण भारतीय राज्य ने अलाउद्दीन खिलजी की अधीनता स्वीकार नहीं की?",
        answers: shuffle([
            { text: "देवगिरि के यादव", correct: false },
            { text: "वारंगल के काकतीय", correct: false },
            { text: "द्वारसमुद्र के होयसल", correct: false },
            { text: "मदुरै के पाण्ड्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>पाण्ड्य</b> राज्य में आंतरिक संघर्ष का लाभ उठाकर मलिक काफूर ने भारी लूटपाट की।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन वह पाण्ड्य शासक <b>वीर पाण्ड्य</b> को पकड़ नहीं सका और इस राज्य ने पूर्णतः अधीनता स्वीकार नहीं की।"
    },
    {
        question: "प्रश्न 17. वारंगल के किस शासक ने मलिक काफूर को प्रसिद्ध 'कोहिनूर' हीरा भेंट किया था?",
        answers: shuffle([
            { text: "रामचन्द्र देव", correct: false },
            { text: "वीर बल्लाल तृतीय", correct: false },
            { text: "प्रताप रुद्रदेव द्वितीय", correct: true },
            { text: "वीर पाण्ड्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1310 ई.</b> में वारंगल अभियान के दौरान काकतीय शासक <b>प्रताप रुद्रदेव</b> ने अपनी हार के बाद अधीनता स्वीकार करते हुए सोने की मूर्ति और <b>कोहिनूर हीरे</b> सहित अपार संपत्ति मलिक काफूर को सौंपी।"
    },
    {
        question: "प्रश्न 18. अलाउद्दीन खिलजी की बाजार नियंत्रण नीति का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "प्रजा को राहत देना", correct: false },
            { text: "व्यापारियों को दंडित करना", correct: false },
            { text: "एक बड़ी और स्थायी सेना का खर्च कम वेतन पर चलाना", correct: true },
            { text: "जमाखोरी को रोकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन एक विशाल सेना रखना चाहता था।<br><br><i class='fa-solid fa-angles-right icon'></i> सैनिकों को <b>कम नकद वेतन</b> में संतुष्ट रखने के लिए उसने बाजार में सभी आवश्यक वस्तुओं की <b>कीमतें नियंत्रित</b> कर दीं।"
    },
    {
        question: "प्रश्न 19. अलाउद्दीन खिलजी की बाजार व्यवस्था में 'शहना-ए-मंडी' कौन था?",
        answers: shuffle([
            { text: "गुप्तचर अधिकारी", correct: false },
            { text: "न्याय अधिकारी", correct: false },
            { text: "बाजार का अधीक्षक", correct: true },
            { text: "राजस्व अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'शहना-ए-मंडी'</b> पूरी बाजार व्यवस्था का सर्वोच्च अधिकारी होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो कीमतों को लागू करवाता और व्यापारियों पर नियंत्रण रखता था।"
    },
    {
        question: "प्रश्न 20. भूमि की पैमाइश (माप) कराकर राजस्व वसूलने की नीति अपनाने वाला पहला सुल्तान कौन था?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन</b> पहला सुल्तान था जिसने भूमि को <b>'बिस्वा'</b> नामक इकाई में मापने के आधार पर लगान निर्धारित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रणाली को <b>'मसाहत'</b> कहा जाता है।"
    },
    {
        question: "प्रश्न 21. अलाउद्दीन खिलजी ने भू-राजस्व की दर उपज का कितना भाग निर्धारित की?",
        answers: shuffle([
            { text: "एक-तिहाई (1/3)", correct: false },
            { text: "एक-चौथाई (1/4)", correct: false },
            { text: "आधा (1/2)", correct: true },
            { text: "दो-तिहाई (2/3)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी आय बढ़ाने और बिचौलियों को खत्म करने के लिए, उसने लगान की दर को बढ़ाकर <b>उपज का 50%</b> कर दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो सल्तनत काल में सर्वाधिक थी।"
    },
    {
        question: "प्रश्न 22. 'घरी' (गृहकर) और 'चरी' (चराई कर) नामक दो नए कर किस सुल्तान ने लगाए?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भू-राजस्व के अतिरिक्त, <b>अलाउद्दीन</b> ने घरों पर <b>'घरी'</b> कर और दुधारू पशुओं पर <b>'चरी'</b> (चराई) कर लगाकर राज्य की आय में वृद्धि की।"
    },
    {
        question: "प्रश्न 23. सेना में 'दाग' (घोड़ों को दागने) और 'चेहरा' (सैनिकों का हुलिया लिखने) की प्रथा किसने शुरू की?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेना में <b>भ्रष्टाचार और धोखाधड़ी</b> को रोकने के लिए, <b>अलाउद्दीन</b> ने यह प्रणाली शुरू की।<br><br><i class='fa-solid fa-angles-right icon'></i> ताकि निरीक्षण के समय घोड़ों को बदला न जा सके और सैनिकों की जगह कोई और उपस्थित न हो।"
    },
    {
        question: "प्रश्न 24. सल्तनत काल में स्थायी सेना रखने और सैनिकों को नकद वेतन देने की शुरुआत किसने की?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "जलालुद्दीन खिलजी", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन खिलजी</b> सल्तनत का पहला सुल्तान था जिसने <b>इक्ता प्रणाली</b> के स्थान पर एक बड़ी, <b>स्थायी और केंद्रीय रूप से नियंत्रित सेना</b> का गठन किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और उन्हें <b>नकद वेतन</b> देना शुरू किया।"
    },
    {
        question: "प्रश्न 25. अलाउद्दीन खिलजी के समय मंगोलों के आक्रमण से दिल्ली की रक्षा करते हुए कौन-सा सेनापति मारा गया?",
        answers: shuffle([
            { text: "नुसरत खान", correct: false },
            { text: "उलूग खान", correct: false },
            { text: "जफर खान", correct: true },
            { text: "मलिक काफूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1299 ई.</b> में <b>कुतलुग ख्वाजा</b> के आक्रमण के दौरान, <b>जफर खान</b> मंगोलों से वीरतापूर्वक लड़ते हुए मारा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी वीरता से मंगोल इतने भयभीत थे कि वे वापस लौट गए।"
    },
    {
        question: "प्रश्न 26. अलाई दरवाजा, जो इस्लामी वास्तुकला का एक रत्न माना जाता है, का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "कुतुबुद्दीन ऐबक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाई दरवाजा</b> दिल्ली में कुतुबमीनार परिसर का दक्षिणी प्रवेश द्वार है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका निर्माण <b>1311 ई.</b> में <b>अलाउद्दीन खिलजी</b> ने करवाया था और यह तुर्की वास्तुकला का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "प्रश्न 27. 'हजार सितून' (हजार स्तंभों वाला महल) और 'सीरी' का किला किसने बनवाया था?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगोल आक्रमणों से दिल्ली को सुरक्षित करने के लिए <b>अलाउद्दीन</b> ने <b>'सीरी'</b> को अपनी राजधानी बनाया।<br><br><i class='fa-solid fa-angles-right icon'></i> और वहाँ एक मजबूत किला और <b>'हजार सितून'</b> नामक महल का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 28. अलाउद्दीन खिलजी ने राजस्व व्यवस्था में भ्रष्टाचार को समाप्त करने के लिए किस नए विभाग की स्थापना की?",
        answers: shuffle([
            { text: "दीवान-ए-अर्ज", correct: false },
            { text: "दीवान-ए-इंशा", correct: false },
            { text: "दीवान-ए-मुस्तखराज", correct: true },
            { text: "दीवान-ए-रियासत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक प्रकार का <b>राजस्व विभाग</b> था जिसका मुख्य कार्य राजस्व अधिकारियों (आमिलों) के पास बकाया लगान की राशि की जाँच करना।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसे सख्ती से वसूलना था।"
    },
    {
        question: "प्रश्न 29. जलालुद्दीन खिलजी के समय नए मुसलमानों (मंगोलों) के लिए दिल्ली में कौन सी बस्ती बसाई गई थी?",
        answers: shuffle([
            { text: "सीरी", correct: false },
            { text: "किलोखरी", correct: false },
            { text: "मंगोलपुरी", correct: true },
            { text: "जहाँपनाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जलालुद्दीन</b> ने हलाकू के पोते उलूग खान के नेतृत्व में आए लगभग 4000 <b>मंगोलों</b> को इस्लाम स्वीकार करने के बाद दिल्ली के पास बसने की अनुमति दी।<br><br><i class='fa-solid fa-angles-right icon'></i> जो स्थान आज <b>मंगोलपुरी</b> कहलाता है।"
    },
    {
        question: "प्रश्न 30. प्रसिद्ध कवि अमीर खुसरो किस खिलजी शासक के दरबारी थे?",
        answers: shuffle([
            { text: "केवल जलालुद्दीन खिलजी", correct: false },
            { text: "केवल अलाउद्दीन खिलजी", correct: false },
            { text: "जलालुद्दीन और अलाउद्दीन दोनों", correct: true },
            { text: "मुबारक शाह खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अमीर खुसरो</b> ने सल्तनत के कई सुल्तानों का काल देखा था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें <b>जलालुद्दीन खिलजी</b> और <b>अलाउद्दीन खिलजी</b> प्रमुख थे।<br><br><i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन ने उन्हें <b>'राजकवि'</b> का सम्मान दिया।"
    },
    {
        question: "प्रश्न 31. 'खजाइन-उल-फुतुह' (विजयों का खजाना) नामक पुस्तक की रचना किसने की?",
        answers: shuffle([
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "इब्नबतूता", correct: false },
            { text: "अमीर खुसरो", correct: true },
            { text: "हसन निजामी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस पुस्तक में <b>अमीर खुसरो</b> ने <b>अलाउद्दीन खिलजी</b> के शासनकाल की घटनाओं, विशेषकर उसकी विजयों का आँखों देखा वर्णन किया है।"
    },
    {
        question: "प्रश्न 32. किस सुल्तान ने बिचौलियों (खूत, मुकद्दम, चौधरी) के विशेषाधिकार समाप्त कर दिए?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "जलालुद्दीन खिलजी", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "ग्यासुद्दीन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी <b>राजस्व नीति</b> के तहत, <b>अलाउद्दीन</b> ने ग्रामीण क्षेत्रों में वंशानुगत रूप से लगान वसूलने वाले इन बिचौलियों के विशेषाधिकार छीन लिए।<br><br><i class='fa-solid fa-angles-right icon'></i> और उन्हें भी अपनी भूमि पर <b>कर देने के लिए बाध्य</b> किया।"
    },
    {
        question: "प्रश्न 33. अलाउद्दीन खिलजी की मृत्यु के बाद दिल्ली का सुल्तान कौन बना?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह खिलजी", correct: false },
            { text: "शिहाबुद्दीन उमर", correct: true },
            { text: "मलिक काफूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मलिक काफूर</b> ने अलाउद्दीन के एक <b>अल्पायु पुत्र शिहाबुद्दीन उमर</b> को गद्दी पर बैठाया।<br><br><i class='fa-solid fa-angles-right icon'></i> और स्वयं उसका संरक्षक बन गया, ताकि वह सत्ता पर नियंत्रण रख सके।"
    },
    {
        question: "प्रश्न 34. किस खिलजी सुल्तान ने स्वयं को 'खलीफा' घोषित किया और 'अल-वासिक-बिल्लाह' की उपाधि धारण की?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "शिहाबुद्दीन उमर", correct: false },
            { text: "कुतुबुद्दीन मुबारक शाह खिलजी", correct: true },
            { text: "नसीरुद्दीन खुसरव शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुबारक शाह खिलजी</b> ने दिल्ली सल्तनत की खलीफा के प्रति नाममात्र की निष्ठा को भी समाप्त कर दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> और स्वयं को इस्लाम का सर्वोच्च प्रमुख यानी <b>'खलीफा'</b> घोषित कर दिया।"
    },
    {
        question: "प्रश्न 35. वह कौन सा सुल्तान था जो कभी-कभी नग्न होकर या स्त्रियों के वस्त्र पहनकर दरबार में आ जाता था?",
        answers: shuffle([
            { text: "कैकुबाद", correct: false },
            { text: "शिहाबुद्दीन उमर", correct: false },
            { text: "कुतुबुद्दीन मुबारक शाह खिलजी", correct: true },
            { text: "नसीरुद्दीन खुसरव शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जियाउद्दीन बरनी के अनुसार, <b>मुबारक शाह</b> एक अत्यंत विलासी और चरित्रहीन सुल्तान था।<br><br><i class='fa-solid fa-angles-right icon'></i> और वह दरबार में ऐसी <b>अशोभनीय हरकतें</b> किया करता था।"
    },
    {
        question: "प्रश्न 36. खिलजी वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "कुतुबुद्दीन मुबारक शाह खिलजी", correct: false },
            { text: "शिहाबुद्दीन उमर", correct: false },
            { text: "खिज्र खान", correct: false },
            { text: "नसीरुद्दीन खुसरव शाह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खुसरव शाह</b>, जो मूल रूप से एक धर्मांतरित हिंदू था, ने मुबारक शाह की हत्या कर दी।<br><br><i class='fa-solid fa-angles-right icon'></i> और <b>1320 ई.</b> में कुछ महीनों के लिए सुल्तान बना।<br><br><i class='fa-solid fa-angles-right icon'></i> वह <b>खिलजी वंश का अंतिम शासक</b> था।"
    },
    {
        question: "प्रश्न 37. 'पैगंबर का सेनापति' की उपाधि किसने धारण की थी?",
        answers: shuffle([
            { text: "मलिक काफूर", correct: false },
            { text: "मुबारक शाह खिलजी", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "नसीरुद्दीन खुसरव शाह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी स्थिति को मजबूत करने के लिए <b>खुसरव शाह</b> ने <b>'पैगंबर का सेनापति'</b> की उपाधि धारण की थी।"
    },
    {
        question: "प्रश्न 38. खिलजी वंश का अंत किसने किया?",
        answers: shuffle([
            { text: "तैमूर लंग", correct: false },
            { text: "बाबर", correct: false },
            { text: "गाजी मलिक (ग्यासुद्दीन तुगलक)", correct: true },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीपालपुर के गवर्नर <b>गाजी मलिक</b> ने खुसरव शाह के खिलाफ <b>'इस्लाम खतरे में है'</b> का नारा दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसे युद्ध में पराजित किया और <b>1320 ई.</b> में <b>तुगलक वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 39. अलाउद्दीन खिलजी ने देवगिरि के शासक रामचन्द्र देव को कौन सी उपाधि दी थी?",
        answers: shuffle([
            { text: "राय रायन", correct: true },
            { text: "अमीर-उल-उमरा", correct: false },
            { text: "खान-ए-खाना", correct: false },
            { text: "राजाधिराज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रामचन्द्र देव ने विद्रोह किया और बाद में आत्मसमर्पण कर दिया, तो <b>अलाउद्दीन</b> ने उसके साथ सम्मानजनक व्यवहार किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसे <b>'राय रायन'</b> (राजाओं का राजा) की उपाधि दी और गुजरात में नवसारी की जागीर भी प्रदान की।"
    },
    {
        question: "प्रश्न 40. अलाउद्दीन खिलजी के आक्रमण के समय देवगिरि का शासक कौन था?",
        answers: shuffle([
            { text: "प्रताप रुद्रदेव", correct: false },
            { text: "रामचन्द्र देव", correct: true },
            { text: "वीर बल्लाल", correct: false },
            { text: "सुन्दर पाण्ड्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन के <b>1296 ई.</b> और बाद में मलिक काफूर के अभियानों के समय <b>देवगिरि</b> पर <b>यादव वंश</b> के राजा <b>रामचन्द्र देव</b> का शासन था।"
    },
    {
        question: "प्रश्न 41. अलाउद्दीन खिलजी ने सिवाणा (राजस्थान) का किला कब जीता था?",
        answers: shuffle([
            { text: "1301 ई.", correct: false },
            { text: "1303 ई.", correct: false },
            { text: "1305 ई.", correct: false },
            { text: "1308 ई.", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिवाणा</b> का किला, जो मारवाड़ का प्रवेश द्वार माना जाता था, पर उस समय परमार राजपूत <b>शीतल देव</b> का शासन था।<br><br><i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन ने इस किले को जीतकर इसका नाम <b>खैराबाद</b> रखा।"
    },
    {
        question: "प्रश्न 42. अलाउद्दीन खिलजी की आर्थिक नीति का सबसे महत्वपूर्ण पहलू क्या था?",
        answers: shuffle([
            { text: "कृषि सुधार", correct: false },
            { text: "बाजार पर नियंत्रण", correct: true },
            { text: "नए कर लगाना", correct: false },
            { text: "मुद्रा प्रणाली में सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसकी <b>बाजार नियंत्रण नीति</b> एक अनूठा और साहसिक प्रयोग था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका सल्तनत की अर्थव्यवस्था और सैन्य शक्ति पर गहरा प्रभाव पड़ा।"
    },
    {
        question: "प्रश्न 43. अलाउद्दीन खिलजी द्वारा निर्मित 'जमात खाना मस्जिद' कहाँ स्थित है?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "अजमेर", correct: false },
            { text: "दिल्ली", correct: true },
            { text: "लाहौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जमात खाना मस्जिद</b> दिल्ली में निजामुद्दीन औलिया की दरगाह के पास स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> और यह पूरी तरह से इस्लामी शैली में निर्मित भारत की पहली मस्जिदों में से एक है।"
    },
    {
        question: "प्रश्न 44. खिलजी काल में 'दीवान-ए-रियासत' का क्या कार्य था?",
        answers: shuffle([
            { text: "गुप्तचरों पर नियंत्रण", correct: false },
            { text: "बाजार के व्यापारियों पर नियंत्रण", correct: true },
            { text: "सैन्य मामलों का प्रबंधन", correct: false },
            { text: "शाही पत्राचार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन ने इस नए विभाग की स्थापना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका प्रमुख <b>बाजार का नियंत्रक</b> होता था और यह सुनिश्चित करता था कि सभी व्यापारी सरकारी नियमों का पालन करें।"
    },
    {
        question: "प्रश्न 45. अलाउद्दीन खिलजी के किस सेनापति को 'युग का रुस्तम' और 'अपने समय का सबसे वीर पुरुष' कहा जाता था?",
        answers: shuffle([
            { text: "मलिक काफूर", correct: false },
            { text: "नुसरत खान", correct: false },
            { text: "उलूग खान", correct: false },
            { text: "जफर खान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जफर खान</b> अपनी बहादुरी और सैन्य कौशल के लिए इतना प्रसिद्ध था कि मंगोल भी उसके नाम से कांपते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>अमीर खुसरो</b> ने उसे यह उपाधियाँ दी हैं।"
    },
    {
        question: "प्रश्न 46. 'पद्मावत' महाकाव्य के अनुसार, अलाउद्दीन के चित्तौड़ आक्रमण का क्या कारण था?",
        answers: shuffle([
            { text: "धन की प्राप्ति", correct: false },
            { text: "मेवाड़ पर अधिकार", correct: false },
            { text: "रानी पद्मिनी की सुंदरता", correct: true },
            { text: "राणा रतन सिंह को दंडित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मलिक मुहम्मद जायसी</b> ने अपनी रचना <b>'पद्मावत' (1540 ई.)</b> में लिखा है कि अलाउद्दीन ने चित्तौड़ पर आक्रमण <b>रानी पद्मिनी</b> को पाने के लिए किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि इतिहासकार इसे पूरी तरह सत्य नहीं मानते।"
    },
    {
        question: "प्रश्न 47. अलाउद्दीन खिलजी के शासनकाल में मंगोलों ने किसके नेतृत्व में दिल्ली को घेरा था?",
        answers: shuffle([
            { text: "कादर खान", correct: false },
            { text: "सलदी", correct: false },
            { text: "तारगी बेग", correct: true },
            { text: "कुतलुग ख्वाजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1303 ई.</b> में, जब अलाउद्दीन चित्तौड़ अभियान पर था, <b>तारगी बेग</b> के नेतृत्व में मंगोलों ने दिल्ली पर एक गंभीर आक्रमण किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और लगभग दो महीने तक शहर को घेरे रखा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी के बाद अलाउद्दीन ने <b>सीरी का किला</b> बनवाया।"
    },
    {
        question: "प्रश्न 48. किस सुल्तान ने सार्वजनिक वितरण प्रणाली (Public Distribution System) की शुरुआत की?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाजार नियंत्रण नीति के तहत, अकाल या कमी के समय लोगों को निश्चित मूल्य पर अनाज उपलब्ध कराने के लिए उसने <b>राजकीय अन्न भंडारों से राशनिंग</b> की व्यवस्था शुरू की।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे <b>सार्वजनिक वितरण प्रणाली</b> का प्रारंभिक रूप माना जा सकता है।"
    },
    {
        question: "प्रश्न 49. अमीर खुसरो के अनुसार, शतरंज का खेल किसका आविष्कार है?",
        answers: shuffle([
            { text: "यूनानियों का", correct: false },
            { text: "फारसियों का", correct: false },
            { text: "अरबों का", correct: false },
            { text: "भारतीयों का", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अमीर खुसरो</b> ने अपनी रचनाओं में शतरंज को <b>भारतीय मूल</b> का खेल बताया है।<br><br><i class='fa-solid fa-angles-right icon'></i> और इसकी प्रशंसा की है।"
    },
    {
        question: "प्रश्न 50. खिलजी क्रांति से क्या तात्पर्य है?",
        answers: shuffle([
            { text: "खिलजीयों द्वारा किया गया विद्रोह", correct: false },
            { text: "तुर्की अमीरों के जातीय एकाधिकार की समाप्ति", correct: true },
            { text: "एक नए राजवंश की स्थापना", correct: false },
            { text: "आर्थिक सुधारों का दौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिलजी क्रांति</b> का अर्थ केवल सत्ता परिवर्तन नहीं था, बल्कि यह भी था कि अब शासन पर केवल उच्च कुल के तुर्कों का ही अधिकार नहीं रहा।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे यह सिद्ध हुआ कि सत्ता <b>शक्ति और योग्यता</b> से प्राप्त की जा सकती है, न कि केवल वंश से।"
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