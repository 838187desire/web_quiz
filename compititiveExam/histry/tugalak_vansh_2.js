const questions = [
    {
        topHeading: " पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मुहम्मद बिन तुगलक की पांच विवादास्पद योजनाएं कौन सी थीं?",
        answers: shuffle([
            { text: "दोआब में कर वृद्धि, राजधानी परिवर्तन, सांकेतिक मुद्रा, खुरासान और कराचिल अभियान", correct: true },
            { text: "नहर निर्माण, बाग लगाना, अस्पताल खोलना, जजिया लगाना, शहर बसाना", correct: false },
            { text: "बाजार नियंत्रण, मूल्य नियंत्रण, दाग और हुलिया, जासूसी प्रणाली, सेना का गठन", correct: false },
            { text: "इक्ता प्रणाली, चालीसा का गठन, मुद्रा सुधार, मंगोल नीति, कुतुब मीनार निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये पांच बड़ी योजनाएं <b>मुहम्मद बिन तुगलक</b> से जुड़ी हैं, जो अच्छी मंशा के बावजूद खराब क्रियान्वयन के कारण असफल रहीं और सल्तनत के लिए विनाशकारी साबित हुईं।"
    },
    {
        question: "प्रश्न 2. किस सुल्तान के दरबार में सबसे अधिक गुलाम थे?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह</b> को दास रखने का बहुत शौक था और उसके शासनकाल में दासों की संख्या 1,80,000 तक पहुंच गई थी, जो सल्तनत काल में सर्वाधिक थी।"
    },
    {
        question: "प्रश्न 3. 'सिपहसालार' की उपाधि किसने धारण की थी?",
        answers: shuffle([
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "खिज्र खान", correct: true },
            { text: "बहलोल लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैमूर के प्रतिनिधि के रूप में शासन करने वाले <b>सैयद वंश</b> के संस्थापक <b>खिज्र खान</b> ने कभी सुल्तान की उपाधि धारण नहीं की और वह 'रैयत-ए-आला' और 'सिपहसालार' की उपाधियों से ही संतुष्ट रहा। (यह प्रश्न <b>तुगलक वंश</b> के पतन से संबंधित है)।"
    },
    {
        question: "प्रश्न 4. फिरोजशाह तुगलक द्वारा स्थापित नगर 'फिरोजाबाद' आज किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "तुगलकाबाद", correct: false },
            { text: "पुराना किला", correct: false },
            { text: "फिरोज शाह कोटला, दिल्ली", correct: true },
            { text: "हिसार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह तुगलक</b> ने यमुना नदी के किनारे <b>फिरोजाबाद</b> नामक पांचवां शहर बसाया, जिसे आज दिल्ली में <b>फिरोज शाह कोटला</b> के नाम से जाना जाता है।"
    },
    {
        question: "प्रश्न 5. 'खुम्स' (युद्ध में लूट का माल) का 4/5 हिस्सा सैनिकों के बजाय राज्य को देने की प्रथा किसने शुरू की?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी और मुहम्मद बिन तुगलक", correct: true },
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लामी कानून के अनुसार, खुम्स का 1/5 हिस्सा राज्य का और 4/5 हिस्सा सैनिकों का होता था। लेकिन <b>अलाउद्दीन खिलजी</b> और <b>मुहम्मद बिन तुगलक</b> ने इस नियम को उलट दिया और 4/5 हिस्सा स्वयं रखा।"
    },
    {
        question: "प्रश्न 6. खुम्स के इस्लामी नियम को फिर से किसने लागू किया? (4/5 हिस्सा सैनिकों को)",
        answers: shuffle([
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह</b> ने शरीयत के अनुसार शासन करते हुए <b>खुम्स</b> के पुराने नियम को फिर से बहाल कर दिया और लूट के माल का 4/5 हिस्सा सैनिकों को देने का आदेश दिया।"
    },
    {
        question: "प्रश्न 7. सांकेतिक मुद्रा चलाने की प्रेरणा मुहम्मद बिन तुगलक को कहाँ से मिली थी?",
        answers: shuffle([
            { text: "a) चीन के शासक कुबलई खान से", correct: false },
            { text: "b) फारस के शासक से", correct: false },
            { text: "a), b) दोनों", correct: true },
            { text: "यह उसकी अपनी योजना थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन में <b>कुबलई खान</b> ने कागज की मुद्रा और फारस में <b>गजन खान</b> ने चमड़े की मुद्रा चलाने का सफल प्रयोग किया था, जिससे <b>मुहम्मद बिन तुगलक</b> को प्रेरणा मिली, लेकिन वह भारत में इसे ठीक से लागू नहीं कर सका।"
    },
    {
        question: "प्रश्न 8. तुगलक काल में प्रचलित 'दाग' और 'हुलिया' प्रथा का संबंध किससे था?",
        answers: shuffle([
            { text: "कृषि से", correct: false },
            { text: "व्यापार से", correct: false },
            { text: "सेना से", correct: true },
            { text: "न्याय से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रथा <b>अलाउद्दीन खिलजी</b> ने शुरू की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> 'दाग' में घोड़ों को दागा जाता था और 'हुलिया' में सैनिकों का हुलिया दर्ज किया जाता था ताकि भ्रष्टाचार रोका जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>गयासुद्दीन तुगलक</b> ने इसे प्रभावी ढंग से लागू रखा।"
    },
    {
        question: "प्रश्न 9. किस तुगलक सुल्तान ने अकाल-पीड़ितों के लिए 'अकाल संहिता' (Famine Code) तैयार करवाई?",
        answers: shuffle([
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोआब में अपनी कर-वृद्धि की योजना की विफलता और अकाल के बाद, <b>मुहम्मद बिन तुगलक</b> पहला सुल्तान था जिसने <b>अकाल पीड़ितों</b> की सहायता के लिए एक विस्तृत योजना बनाई और <b>अकाल संहिता</b> तैयार करवाई।"
    },
    {
        question: "प्रश्न 10. गयासुद्दीन तुगलक की डाक व्यवस्था कैसी थी?",
        answers: shuffle([
            { text: "बहुत धीमी", correct: false },
            { text: "बहुत ही कुशल और तेज", correct: true },
            { text: "केवल घोड़ों पर आधारित", correct: false },
            { text: "केवल पैदल हरकारों पर आधारित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गयासुद्दीन</b> ने डाक व्यवस्था को इतना सुदृढ़ किया था कि हर तीन-चौथाई मील पर डाक चौकियां थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> घोड़ों और पैदल हरकारों की व्यवस्था इतनी तेज थी कि सिंध से दिल्ली तक की यात्रा का समाचार पांच दिनों में पहुंच जाता था।"
    },
    {
        question: "प्रश्न 11. मुहम्मद बिन तुगलक ने जैन संत 'जिनप्रभा सूरि' के साथ क्या व्यवहार किया?",
        answers: shuffle([
            { text: "उन्हें देश से निकाल दिया", correct: false },
            { text: "उन्हें मृत्युदंड दिया", correct: false },
            { text: "उन्हें अपने दरबार में बुलाकर सम्मानित किया", correct: true },
            { text: "उन पर भारी कर लगा दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी धार्मिक सहिष्णुता के एक उदाहरण के रूप में, <b>मुहम्मद बिन तुगलक</b> ने प्रसिद्ध <b>जैन विद्वान जिनप्रभा सूरि</b> को आधी रात तक अपने साथ विचार-विमर्श करने के लिए आमंत्रित किया और उन्हें सम्मानित किया।"
    },
    {
        question: "प्रश्न 12. फिरोजशाह के शासनकाल में किस एक क्षेत्र पर सल्तनत का नियंत्रण पुनः स्थापित नहीं हो सका?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "सिंध", correct: false },
            { text: "बंगाल", correct: false },
            { text: "दक्षिण भारत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह</b> ने <b>दक्षिण भारत</b> के स्वतंत्र हो चुके राज्यों (विजयनगर और बहमनी) को फिर से जीतने का कोई गंभीर प्रयास नहीं किया और सल्तनत का साम्राज्य उत्तर भारत तक ही सीमित रह गया।"
    },
    {
        question: "प्रश्न 13. 'सिरत-ए-फिरोजशाही' की रचना किसके शासनकाल में हुई?",
        answers: shuffle([
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "नासिरुद्दीन महमूद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>फिरोजशाह तुगलक</b> के शासनकाल का एक और महत्वपूर्ण ऐतिहासिक ग्रंथ है, जिसके लेखक का नाम अज्ञात है।"
    },
    {
        question: "प्रश्न 14. \"वह एक ही साथ देवदूत और राक्षस दोनों था।\" यह कथन मुहम्मद बिन तुगलक के बारे में किसने कहा है?",
        answers: shuffle([
            { text: "बरनी", correct: false },
            { text: "इब्न बतूता", correct: false },
            { text: "ईसामी", correct: true },
            { text: "बदायूंनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार <b>ईसामी</b>, जो <b>मुहम्मद बिन तुगलक</b> का कट्टर आलोचक था, ने उसके परस्पर विरोधी गुणों के कारण यह टिप्पणी की।"
    },
    {
        question: "प्रश्न 15. तुगलक वास्तुकला की प्रमुख सामग्री क्या थी?",
        answers: shuffle([
            { text: "लाल बलुआ पत्थर और संगमरमर", correct: false },
            { text: "केवल संगमरमर", correct: false },
            { text: "सस्ते, स्थानीय रूप से उपलब्ध भूरे पत्थर और गारा", correct: true },
            { text: "ईंटें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तुगलक शासकों</b> ने भव्यता के स्थान पर सादगी और मजबूती पर जोर दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी इमारतों में मुख्य रूप से स्थानीय रूप से उपलब्ध सस्ते पत्थर और गारे का उपयोग किया गया है।"
    },
    {
        question: "प्रश्न 16. मुहम्मद बिन तुगलक ने 'होली' का त्योहार मनाया, यह जानकारी किस स्रोत से मिलती है?",
        answers: shuffle([
            { text: "बरनी की तारीख-ए-फिरोजशाही", correct: false },
            { text: "इब्न बतूता का रेहला", correct: true },
            { text: "ईसामी की फुतूह-उस-सलातीन", correct: false },
            { text: "अमीर खुसरो की कविताएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्न बतूता</b> वर्णन करता है कि <b>मुहम्मद बिन तुगलक</b> एक धर्म सहिष्णु शासक था और वह हिंदुओं के त्योहारों, विशेषकर <b>होली</b> में व्यक्तिगत रूप से भाग लेता था।"
    },
    {
        question: "प्रश्न 17. फिरोजशाह तुगलक का राज्याभिषेक कहाँ हुआ था?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "तुगलकाबाद", correct: false },
            { text: "लाहौर", correct: false },
            { text: "थट्टा (सिंध)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन तुगलक</b> की मृत्यु के बाद, सिंध में ही सेना और अमीरों ने 23 मार्च 1351 को <b>फिरोजशाह</b> का राज्याभिषेक किया।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में दिल्ली में उसका दूसरा राज्याभिषेक हुआ।"
    },
    {
        question: "प्रश्न 18. दिल्ली सल्तनत का अंतिम शक्तिशाली सुल्तान कौन था?",
        answers: shuffle([
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह तुगलक</b> के बाद, <b>तुगलक वंश</b> और <b>दिल्ली सल्तनत</b> का तेजी से पतन हुआ और कोई भी शासक सल्तनत को फिर से संगठित नहीं कर सका।"
    },
    {
        question: "प्रश्न 19. तैमूर ने दिल्ली में कितने दिनों तक कत्लेआम किया था?",
        answers: shuffle([
            { text: "3 दिन", correct: false },
            { text: "7 दिन", correct: false },
            { text: "15 दिन", correct: true },
            { text: "एक महीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली पर विजय प्राप्त करने के बाद, <b>तैमूर</b> की सेना ने शहर में <b>15 दिनों</b> तक भयानक लूटपाट और नरसंहार किया, जिससे दिल्ली पूरी तरह से उजड़ गई।"
    },
    {
        question: "प्रश्न 20. तुगलक काल में 'वली' और 'मुक्ति' किसे कहा जाता था?",
        answers: shuffle([
            { text: "न्यायाधीशों को", correct: false },
            { text: "जासूसों को", correct: false },
            { text: "प्रांतों (इक्ता) के गवर्नरों को", correct: true },
            { text: "मंत्रियों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सल्तनत काल में प्रांतों को <b>इक्ता</b> कहा जाता था और उनके प्रमुख या गवर्नर को 'वली', 'मुक्ति' या 'इक्तादार' कहा जाता था।"
    },
    {
        question: "प्रश्न 21. वारंगल (तेलंगाना) का नाम बदलकर 'सुल्तानपुर' किसने रखा था?",
        answers: shuffle([
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने पिता के शासनकाल में <b>राजकुमार जौना खान</b> ने <b>वारंगल</b> के काकतीय राज्य को जीतकर दिल्ली सल्तनत में मिला लिया और उसका नाम 'सुल्तानपुर' रख दिया।"
    },
    {
        question: "प्रश्न 22. किस सुल्तान ने आज्ञा दी थी कि मृत अमीर या इक्तादार का पद उसके पुत्र, दामाद या दास को दिया जाएगा?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>फिरोजशाह</b> की वंशानुगत नीति का हिस्सा था, जिसने योग्यता के सिद्धांत को समाप्त कर दिया और सल्तनत की सैन्य और प्रशासनिक क्षमता को कमजोर कर दिया।"
    },
    {
        question: "प्रश्न 23. मुहम्मद बिन तुगलक ने 'सोनधर' नामक ऋण किस उद्देश्य से बांटा था?",
        answers: shuffle([
            { text: "विवाह के लिए", correct: false },
            { text: "व्यापार के लिए", correct: false },
            { text: "कृषि के विकास के लिए (कुएं खोदने, बीज खरीदने)", correct: true },
            { text: "घर बनाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>दीवान-ए-कोही</b> विभाग के तहत, सुल्तान ने किसानों को 'सोनधर' या 'तकावी' नामक <b>कृषि ऋण</b> प्रदान किए ताकि वे खेती का विस्तार और सुधार कर सकें।"
    },
    {
        question: "प्रश्न 24. फिरोजशाह तुगलक ने उड़ीसा के किस प्रसिद्ध मंदिर पर आक्रमण किया था?",
        answers: shuffle([
            { text: "कोणार्क सूर्य मंदिर", correct: false },
            { text: "लिंगराज मंदिर", correct: false },
            { text: "जगन्नाथ मंदिर, पुरी", correct: true },
            { text: "मुक्तेश्वर मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने <b>जाजनगर (उड़ीसा) अभियान (1360 ई.)</b> के दौरान, <b>फिरोजशाह</b> ने पुरी के प्रसिद्ध <b>जगन्नाथ मंदिर</b> पर हमला किया और वहाँ की मुख्य मूर्ति को अपवित्र किया।"
    },
    {
        question: "प्रश्न 25. \"भाग्यशाली सैनिक का घोड़ा या तो मोटा-ताजा होता है या युद्ध में मर जाता है।\" यह कथन किस सुल्तान की सैन्य नीति को दर्शाता है?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "बलबन", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथन <b>फिरोजशाह</b> की उस उदार (लेकिन सैन्य दृष्टि से हानिकारक) नीति को दर्शाता है जहाँ वह बूढ़े सैनिकों को भी सेना में बनाए रखता था और निरीक्षण के समय रिश्वतखोरी को भी अनदेखा कर देता था।"
    },
    {
        question: "प्रश्न 26. गयासुद्दीन तुगलक ने भू-राजस्व की दर क्या निश्चित की थी?",
        answers: shuffle([
            { text: "उपज का आधा (1/2)", correct: false },
            { text: "उपज का एक-तिहाई (1/3)", correct: true },
            { text: "उपज का दसवां हिस्सा (1/10) से ग्यारहवां हिस्सा (1/11)", correct: false },
            { text: "उपज का पांचवां हिस्सा (1/5)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गयासुद्दीन</b> ने <b>अलाउद्दीन खिलजी</b> की कठोर भू-राजस्व नीति को उदार बनाया और उपज का लगभग <b>एक-तिहाई (1/3)</b> हिस्सा कर के रूप में निर्धारित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने यह भी आदेश दिया कि एक वर्ष में 1/10 या 1/11 से अधिक की वृद्धि न की जाए।"
    },
    {
        question: "प्रश्न 27. फिरोजशाह तुगलक ने चांदी और तांबे के मिश्रण से बने किस नए सिक्के को बड़ी संख्या में जारी किया?",
        answers: shuffle([
            { text: "टका", correct: false },
            { text: "जीतल", correct: false },
            { text: "अद्धा और बिख", correct: true },
            { text: "दीनार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आम लोगों के दैनिक लेन-देन को सुगम बनाने के लिए, उसने छोटे मूल्य के मिश्रित धातु के सिक्के <b>'अद्धा'</b> (आधा जीतल) और <b>'बिख'</b> (चौथाई जीतल) जारी किए।"
    },
    {
        question: "प्रश्न 28. किस तुगलक शासक के समय में सल्तनत का सबसे अधिक विस्तार हुआ था?",
        answers: shuffle([
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "किसी के नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन तुगलक</b> के शासनकाल के आरंभ में, <b>तुगलक साम्राज्य</b> अपनी चरम सीमा पर था, जो कश्मीर और बलूचिस्तान को छोड़कर लगभग पूरे भारतीय उपमहाद्वीप में फैला हुआ था।"
    },
    {
        question: "प्रश्न 29. तुगलक काल में 'मुशरिफ' कौन होता था?",
        answers: shuffle([
            { text: "सेनापति", correct: false },
            { text: "मुख्य न्यायाधीश", correct: false },
            { text: "महालेखाकार (Accountant General)", correct: true },
            { text: "गुप्तचर प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुशरिफ-ए-मुमालिक' राज्य की आय का लेखा-जोखा रखता था, जबकि 'मुस्तौफी-ए-मुमालिक' व्यय का लेखा-परीक्षण करता था।"
    },
    {
        question: "प्रश्न 30. मुहम्मद बिन तुगलक के शासनकाल में कुल कितने विद्रोह हुए?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "15", correct: false },
            { text: "22", correct: false },
            { text: "34", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसके शासनकाल में कुल <b>34 विद्रोह</b> हुए, जिनमें से <b>27 अकेले दक्षिण भारत</b> में हुए थे, जो उसकी नीतियों की विफलता और साम्राज्य के विघटन का संकेत थे।"
    },
    {
        question: "प्रश्न 31. 'फतवा-ए-फिरोजशाही' क्या है?",
        answers: shuffle([
            { text: "फिरोजशाह की आत्मकथा", correct: false },
            { text: "एक ऐतिहासिक ग्रंथ", correct: false },
            { text: "इस्लामी कानूनों का एक संग्रह", correct: true },
            { text: "एक काव्य संग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>फिरोजशाह तुगलक</b> के शासनकाल में संकलित इस्लामी कानूनों (फतवा) का एक विस्तृत ग्रंथ है।"
    },
    {
        question: "प्रश्न 32. \"सुल्तान को ऐसा कोई काम नहीं करना चाहिए जो इस्लाम की भावना के विरुद्ध हो।\" यह किस सुल्तान का मानना था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "गयासुद्दीन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह</b> ने उलेमा वर्ग को संतुष्ट करने और शरीयत के अनुसार शासन चलाने पर जोर दिया, जो <b>अलाउद्दीन</b> और <b>मुहम्मद बिन तुगलक</b> की नीतियों के विपरीत था।"
    },
    {
        question: "प्रश्न 33. दिल्ली में 'खिड़की मस्जिद' और 'बेगमपुरी मस्जिद' का निर्माण किस तुगलक शासक के प्रधानमंत्री ने करवाया था?",
        answers: shuffle([
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "नासिरुद्दीन महमूद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये मस्जिदें <b>फिरोजशाह तुगलक</b> के प्रधानमंत्री <b>खान-ए-जहाँ तिलंगानी</b> द्वारा बनवाई गई थीं, जो <b>तुगलक वास्तुकला</b> के विशिष्ट उदाहरण हैं।"
    },
    {
        question: "प्रश्न 34. मुहम्मद बिन तुगलक ने किसे 'खान-ए-जहाँ' की उपाधि दी थी?",
        answers: shuffle([
            { text: "इब्न बतूता", correct: false },
            { text: "मलिक मकबूल", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "तातार खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मलिक मकबूल</b>, जो मूल रूप से एक हिंदू था और बाद में मुसलमान बन गया, <b>मुहम्मद बिन तुगलक</b> का एक योग्य प्रशासक था, जिसे उसने 'खान-ए-जहाँ' की उपाधि दी।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में यही व्यक्ति <b>फिरोजशाह</b> का प्रधानमंत्री बना।"
    },
    {
        question: "प्रश्न 35. किस सुल्तान ने सिक्कों पर से खलीफा का नाम हटाकर अपना नाम खुदवाया?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में <b>मुहम्मद बिन तुगलक</b> ने सिक्कों से खलीफा का नाम हटा दिया था, लेकिन जब उसके शासन में विद्रोह बढ़ने लगे, तो उसने अपनी सत्ता को वैधानिकता देने के लिए <b>मिस्र के खलीफा</b> से मान्यता प्राप्त की और सिक्कों पर फिर से खलीफा का नाम अंकित करवाया।"
    },
    {
        question: "प्रश्न 36. फिरोजशाह तुगलक ने चांदी और तांबे के मिश्रण से बने किस नए सिक्के को बड़ी संख्या में जारी किया?",
        answers: shuffle([
            { text: "टका", correct: false },
            { text: "जीतल", correct: false },
            { text: "अद्धा और बिख", correct: true },
            { text: "दीनार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आम लोगों के दैनिक लेन-देन को सुगम बनाने के लिए, उसने छोटे मूल्य के मिश्रित धातु के सिक्के <b>'अद्धा'</b> (आधा जीतल) और <b>'बिख'</b> (चौथाई जीतल) जारी किए।"
    },
    {
        question: "प्रश्न 37. फिरोजशाह तुगलक के सबसे बड़े पुत्र का क्या नाम था जिसकी मृत्यु उसके जीवनकाल में ही हो गई थी?",
        answers: shuffle([
            { text: "गयासुद्दीन तुगलक शाह द्वितीय", correct: false },
            { text: "नासिरुद्दीन मुहम्मद शाह", correct: false },
            { text: "फतेह खान", correct: true },
            { text: "जफर खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह</b> ने अपने प्रिय पुत्र <b>फतेह खान</b> की याद में 'फतेहाबाद' शहर बसाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी मृत्यु से सुल्तान को गहरा आघात लगा।"
    },
    {
        question: "प्रश्न 38. किस सुल्तान ने घोषणा की कि \"जो सैनिक बूढ़ा हो गया है, वह अपने स्थान पर अपने पुत्र, दामाद या दास को भेज सकता है\"?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>फिरोजशाह</b> की सैन्य कमजोरी का प्रतीक था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस नीति ने सेना को वंशानुगत और अक्षम बना दिया।"
    },
    {
        question: "प्रश्न 39. 'सार्वजनिक वितरण प्रणाली' (Public Distribution System) का सल्तनत काल में précurseur कौन था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन खिलजी</b> ने अपनी बाजार नियंत्रण नीति के तहत <b>राशनिंग व्यवस्था</b> शुरू की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह</b> ने भी अकाल के समय अनाज बांटने की व्यवस्था की, लेकिन <b>अलाउद्दीन</b> को इसका प्रणेता माना जाता है। (यह प्रश्न तुलनात्मक समझ के लिए है)।"
    },
    {
        question: "प्रश्न 40. तैमूर के आक्रमण का तात्कालिक परिणाम क्या हुआ?",
        answers: shuffle([
            { text: "तुगलक वंश का अंत और सैयद वंश की स्थापना", correct: true },
            { text: "लोदी वंश की स्थापना", correct: false },
            { text: "मुगल वंश की स्थापना", correct: false },
            { text: "खिलजी वंश की पुनर्स्थापना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तैमूर</b> के आक्रमण ने <b>तुगलक वंश</b> की कमर तोड़ दी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद फैली अराजकता का लाभ उठाकर <b>खिज्र खान</b> ने दिल्ली पर कब्जा कर लिया और <b>सैयद वंश</b> की नींव रखी।"
    },
    {
        question: "प्रश्न 41. मुहम्मद बिन तुगलक की मृत्यु पर किसने कहा, \"राजा को प्रजा से और प्रजा को राजा से मुक्ति मिल गई\"?",
        answers: shuffle([
            { text: "बरनी", correct: false },
            { text: "ईसामी", correct: false },
            { text: "इब्न बतूता", correct: false },
            { text: "बदायूंनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अब्दुल कादिर बदायूंनी</b> ने अपनी पुस्तक 'मुंतखब-उत-तवारीख' में <b>मुहम्मद बिन तुगलक</b> की मृत्यु पर यह प्रसिद्ध टिप्पणी की है।"
    },
    {
        question: "प्रश्न 42. फिरोजशाह तुगलक ने अनुवाद विभाग की स्थापना क्यों की?",
        answers: shuffle([
            { text: "प्रशासन में हिंदी को बढ़ावा देने के लिए", correct: false },
            { text: "तुर्की साहित्य के विकास के लिए", correct: false },
            { text: "भारतीय और इस्लामी ज्ञान-विज्ञान के बीच समन्वय स्थापित करने के लिए", correct: true },
            { text: "अरबी भाषा को लोकप्रिय बनाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान का उद्देश्य <b>संस्कृत के दर्शन, खगोल विज्ञान और संगीत</b> जैसे विषयों के ज्ञान को <b>फारसी भाषा</b> में उपलब्ध कराकर दोनों संस्कृतियों के बीच समझ बढ़ाना था।"
    },
    {
        question: "प्रश्न 43. 'दलिल-ए-फिरोजशाही' किस भारतीय ग्रंथ का फारसी अनुवाद है?",
        answers: shuffle([
            { text: "रामायण", correct: false },
            { text: "महाभारत", correct: false },
            { text: "ज्वालामुखी मंदिर के पुस्तकालय से प्राप्त ज्योतिष और दर्शन का ग्रंथ", correct: true },
            { text: "पंचतंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नगरकोट से प्राप्त 1300 संस्कृत पांडुलिपियों में से एक ज्योतिष ग्रंथ का अनुवाद दरबारी कवि <b>अज्जुद्दीन खालिद किरमानी</b> ने 'दलिल-ए-फिरोजशाही' नाम से किया था।"
    },
    {
        question: "प्रश्न 44. तुगलक काल में 'अमीर-ए-सदा' कौन होते थे?",
        answers: shuffle([
            { text: "100 अमीरों का प्रमुख", correct: false },
            { text: "100 गांवों का प्रशासनिक प्रमुख", correct: true },
            { text: "100 सैनिकों की टुकड़ी का सेनापति", correct: false },
            { text: "100 व्यापारियों का नेता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन तुगलक</b> ने ग्रामीण प्रशासन के लिए <b>'अमीर-ए-सदा'</b> नामक अधिकारियों की नियुक्ति की, जो 100 गांवों के समूह के प्रमुख होते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हीं अमीरों के विद्रोह ने <b>बहमनी साम्राज्य</b> की नींव रखी।"
    },
    {
        question: "प्रश्न 45. किस तुगलक सुल्तान का राज्याभिषेक दो बार हुआ?",
        answers: shuffle([
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "नासिरुद्दीन महमूद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह</b> का पहला राज्याभिषेक मार्च 1351 में <b>सिंध के थट्टा</b> में हुआ और दूसरा, औपचारिक राज्याभिषेक अगस्त 1351 में <b>दिल्ली</b> में हुआ।"
    },
    {
        question: "प्रश्न 46. फिरोजशाह तुगलक के प्रधानमंत्री खान-ए-जहाँ मकबूल मूल रूप से कहाँ का था?",
        answers: shuffle([
            { text: "ईरान", correct: false },
            { text: "तुर्की", correct: false },
            { text: "तेलंगाना का एक ब्राह्मण", correct: true },
            { text: "अफगानिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खान-ए-जहाँ मकबूल</b> का मूल नाम <b>कंगन</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह <b>वारंगल (तेलंगाना) का एक ब्राह्मण</b> था जिसने इस्लाम स्वीकार कर लिया था और अपनी योग्यता से प्रधानमंत्री के पद तक पहुँचा।"
    },
    {
        question: "प्रश्न 47. तुगलक काल में खानकाह क्या था?",
        answers: shuffle([
            { text: "राजकीय कारखाना", correct: false },
            { text: "सूफी संतों का निवास स्थान या आश्रम", correct: true },
            { text: "टकसाल", correct: false },
            { text: "अनाज का गोदाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खानकाह</b> वह स्थान होता था जहाँ <b>सूफी संत</b> रहते थे, ध्यान करते थे और अपने अनुयायियों को उपदेश देते थे।"
    },
    {
        question: "प्रश्न 48. किस सुल्तान ने भ्रष्टाचार को बढ़ावा दिया, जैसा कि अफीफ के एक वृत्तांत से पता चलता है?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार <b>अफीफ</b> ने एक घटना का वर्णन किया है जहाँ सुल्तान ने एक सैनिक को अपना घोड़ा पास कराने के लिए निरीक्षण अधिकारी को रिश्वत देने के लिए एक सोने का सिक्का दिया था, जो उसकी प्रशासन पर ढीली पकड़ को दर्शाता है।"
    },
    {
        question: "प्रश्न 49. \'सल्तनत की सीमा दिल्ली से पालम तक है।\' यह कहावत किस शासक के लिए प्रसिद्ध हुई?",
        answers: shuffle([
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "तैमूर", correct: false },
            { text: "नासिरुद्दीन महमूद शाह", correct: true },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तुगलक वंश के अंतिम शासक नासिरुद्दीन महमूद</b> के समय सल्तनत इतनी कमजोर और विघटित हो गई थी कि उसका वास्तविक शासन <b>दिल्ली</b> और उसके आसपास के कुछ मील के क्षेत्र (<b>पालम</b>) तक ही सीमित रह गया था।"
    },
    {
        question: "प्रश्न 50. मुहम्मद बिन तुगलक की दौलताबाद से दिल्ली वापस लौटने की योजना का कारण क्या था?",
        answers: shuffle([
            { text: "a) पानी की कमी", correct: false },
            { text: "b) उत्तर-पश्चिम सीमा पर मंगोलों का बढ़ता खतरा", correct: false },
            { text: "c) दक्षिण में लगातार विद्रोह", correct: false },
            { text: "b) और c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>दौलताबाद</b> से उत्तर-पश्चिम सीमा को नियंत्रित करना मुश्किल हो रहा था और साथ ही दक्षिण में भी लगातार विद्रोह हो रहे थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इन कारणों से सुल्तान ने वापस <b>दिल्ली</b> लौटने का फैसला किया।"
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