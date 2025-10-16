const questions = [
    {
        topHeading: "तुगलक वंश पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. तुगलक वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "गयासुद्दीन तुगलक", correct: true },
            { text: "नासिरुद्दीन महमूद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खुसरो शाह</b> को पराजित करने के बाद <b>गाजी मलिक</b> ने <b>1320 ई.</b> में 'गयासुद्दीन तुगलक' की उपाधि धारण कर तुगलक वंश की स्थापना की।"
    },
    {
        question: "प्रश्न 2. गयासुद्दीन तुगलक का मूल नाम क्या था?",
        answers: shuffle([
            { text: "जौना खान", correct: false },
            { text: "गाजी मलिक", correct: true },
            { text: "फरीद खान", correct: false },
            { text: "खुसरो मलिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान बनने से पहले गयासुद्दीन तुगलक को <b>गाजी मलिक</b> के नाम से जाना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो अलाउद्दीन खिलजी का एक प्रमुख सेनापति था।"
    },
    {
        question: "प्रश्न 3. दिल्ली सल्तनत में नहरों का निर्माण करवाने वाला प्रथम सुल्तान कौन था?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "गयासुद्दीन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसानों को प्रोत्साहित करने और सिंचाई व्यवस्था को बेहतर बनाने के लिए <b>नहर</b> खुदवाने वाला पहला सुल्तान <b>गयासुद्दीन तुगलक</b> था।"
    },
    {
        question: "प्रश्न 4. गयासुद्दीन तुगलक ने किस शहर की स्थापना की थी?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "तुगलकाबाद", correct: true },
            { text: "फिरोजाबाद", correct: false },
            { text: "जौनपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गयासुद्दीन तुगलक ने दिल्ली के पास एक नया किला-बंद शहर <b>'तुगलकाबाद'</b> की नींव रखी।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसे अपनी राजधानी बनाया।"
    },
    {
        question: "प्रश्न 5. किस सूफी संत के साथ गयासुद्दीन तुगलक के संबंध अच्छे नहीं थे?",
        answers: shuffle([
            { text: "शेख बहाउद्दीन जकारिया", correct: false },
            { text: "ख्वाजा मुईनुद्दीन चिश्ती", correct: false },
            { text: "बाबा फरीद", correct: false },
            { text: "शेख निजामुद्दीन औलिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धन के मामले को लेकर <b>गयासुद्दीन तुगलक</b> और प्रसिद्ध चिश्ती संत <b>निजामुद्दीन औलिया</b> के बीच मतभेद था।"
    },
    {
        question: "प्रश्न 6. \"हनूज दिल्ली दूर अस्त\" (दिल्ली अभी दूर है) यह कथन किसने और किसके लिए कहा था?",
        answers: shuffle([
            { text: "अमीर खुसरो ने गयासुद्दीन के लिए", correct: false },
            { text: "निजामुद्दीन औलिया ने गयासुद्दीन तुगलक के लिए", correct: true },
            { text: "मुहम्मद तुगलक ने फिरोज तुगलक के लिए", correct: false },
            { text: "बरनी ने मुहम्मद तुगलक के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब गयासुद्दीन तुगलक बंगाल अभियान से लौट रहा था और उसने संत को दिल्ली छोड़ने का आदेश दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> तो औलिया ने यह प्रसिद्ध उत्तर भेजा था।"
    },
    {
        question: "प्रश्न 7. गयासुद्दीन तुगलक की मृत्यु कैसे हुई थी?",
        answers: shuffle([
            { text: "युद्ध में", correct: false },
            { text: "बीमारी से", correct: false },
            { text: "लकड़ी के महल (स्वागत मंडप) के गिरने से", correct: true },
            { text: "पुत्र द्वारा हत्या से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1325 ई.</b> में बंगाल विजय से लौटते समय, अफगानपुर में उसके पुत्र <b>जौना खान</b> द्वारा बनवाए गए लकड़ी के स्वागत मंडप के ढह जाने से दबकर उसकी मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 8. गयासुद्दीन तुगलक के बाद दिल्ली का सुल्तान कौन बना?",
        answers: shuffle([
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "जौना खान (मुहम्मद बिन तुगलक)", correct: true },
            { text: "खुसरो शाह", correct: false },
            { text: "महमूद तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गयासुद्दीन की मृत्यु के बाद, उसका पुत्र <b>जौना खान</b> 'मुहम्मद बिन तुगलक' की उपाधि के साथ <b>1325 ई.</b> में सिंहासन पर बैठा।"
    },
    {
        question: "प्रश्न 9. दिल्ली सल्तनत के सभी सुल्तानों में सर्वाधिक विद्वान और शिक्षित कौन था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन तुगलक</b> खगोलशास्त्र, गणित, चिकित्सा, तर्कशास्त्र और दर्शन जैसे कई विषयों का ज्ञाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन उसकी योजनाएं अव्यावहारिक साबित हुईं।"
    },
    {
        question: "प्रश्न 10. मुहम्मद बिन तुगलक ने अपनी राजधानी दिल्ली से कहाँ स्थानांतरित की थी?",
        answers: shuffle([
            { text: "लाहौर", correct: false },
            { text: "आगरा", correct: false },
            { text: "दौलताबाद (देवगिरि)", correct: true },
            { text: "कालिंजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1327 ई.</b> में, मुहम्मद बिन तुगलक ने साम्राज्य के केंद्र में होने और मंगोल आक्रमणों से सुरक्षा के कारण अपनी राजधानी दिल्ली से <b>देवगिरि</b> स्थानांतरित की।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसका नाम <b>दौलताबाद</b> रखा।"
    },
    {
        question: "प्रश्न 11. सांकेतिक मुद्रा (Token Currency) का प्रचलन किस सुल्तान ने किया था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1329-30 ई.</b> में, चांदी की कमी के कारण, <b>मुहम्मद बिन तुगलक</b> ने चांदी के 'टका' के मूल्य के बराबर कांसे (या तांबे) के सिक्के चलाए।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे <b>सांकेतिक मुद्रा</b> कहा जाता है।"
    },
    {
        question: "प्रश्न 12. मुहम्मद बिन तुगलक की सांकेतिक मुद्रा की योजना क्यों असफल हुई?",
        answers: shuffle([
            { text: "तांबे की कमी के कारण", correct: false },
            { text: "लोगों ने इसे स्वीकार नहीं किया", correct: false },
            { text: "जाली सिक्कों की बड़े पैमाने पर ढलाई के कारण", correct: true },
            { text: "युद्ध के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान टकसाल पर नियंत्रण नहीं रख सका।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे लोगों ने अपने घरों में ही बड़े पैमाने पर <b>जाली कांसे के सिक्के</b> ढालने शुरू कर दिए, जिससे पूरी अर्थव्यवस्था अस्त-व्यस्त हो गई।"
    },
    {
        question: "प्रश्न 13. प्रसिद्ध अफ्रीकी यात्री इब्न बतूता किसके शासनकाल में भारत आया था?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोरक्को का प्रसिद्ध यात्री <b>इब्न बतूता 1333 ई.</b> में <b>मुहम्मद बिन तुगलक</b> के शासनकाल में भारत आया।<br><br><i class='fa-solid fa-angles-right icon'></i> सुल्तान ने उसे दिल्ली का <b>काजी</b> नियुक्त किया।"
    },
    {
        question: "प्रश्न 14. इब्न बतूता द्वारा लिखा गया यात्रा वृत्तांत किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "किताब-उल-हिन्द", correct: false },
            { text: "सफरनामा", correct: false },
            { text: "रेहला", correct: true },
            { text: "शाहनामा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्न बतूता ने अपनी भारत यात्रा और मुहम्मद बिन तुगलक के शासनकाल की घटनाओं का विस्तृत वर्णन अपनी पुस्तक <b>'किताब-उर-रेहला'</b> या <b>'रेहला'</b> में किया है।"
    },
    {
        question: "प्रश्न 15. मुहम्मद बिन तुगलक ने कृषि के विकास के लिए किस नए विभाग की स्थापना की?",
        answers: shuffle([
            { text: "दीवान-ए-अर्ज", correct: false },
            { text: "दीवान-ए-खैरात", correct: false },
            { text: "दीवान-ए-कोही", correct: true },
            { text: "दीवान-ए-बंदगान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'दीवान-ए-आमिर-कोही'</b> एक कृषि विभाग था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे मुहम्मद बिन तुगलक ने कृषि भूमि का विस्तार करने और फसलों में सुधार करने के उद्देश्य से बनाया था।"
    },
    {
        question: "प्रश्न 16. किस सुल्तान को 'पागल', 'रक्तपिपासु' और 'विरोधाभासों का मिश्रण' कहा गया है?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसकी क्रूरता, अधीरता और अव्यावहारिक योजनाओं के कारण <b>जियाउद्दीन बरनी</b> और <b>इब्न बतूता</b> जैसे इतिहासकारों ने उसे इन विशेषणों से संबोधित किया है।"
    },
    {
        question: "प्रश्न 17. मुहम्मद बिन तुगलक की मृत्यु कहाँ हुई थी?",
        answers: shuffle([
            { text: "दिल्ली में", correct: false },
            { text: "दौलताबाद में", correct: false },
            { text: "लाहौर में", correct: false },
            { text: "थट्टा (सिंध) में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1351 ई.</b> में सिंध में एक विद्रोह को दबाने के लिए अभियान के दौरान <b>थट्टा</b> के पास <b>गोडाल</b> में मुहम्मद बिन तुगलक बीमार पड़ गया।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसकी मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 18. \"सुल्तान को उसकी प्रजा से और प्रजा को उसके सुल्तान से मुक्ति मिल गई।\" यह कथन किसकी मृत्यु पर कहा गया?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार <b>बदायूंनी</b> ने <b>मुहम्मद बिन तुगलक</b> की मृत्यु पर यह टिप्पणी की।<br><br><i class='fa-solid fa-angles-right icon'></i> जो सुल्तान और उसकी प्रजा के बीच तनावपूर्ण संबंधों को दर्शाती है।"
    },
    {
        question: "प्रश्न 19. मुहम्मद बिन तुगलक के बाद दिल्ली का सुल्तान कौन बना?",
        answers: shuffle([
            { text: "उसका पुत्र", correct: false },
            { text: "उसका भाई", correct: false },
            { text: "उसका चचेरा भाई फिरोजशाह तुगलक", correct: true },
            { text: "गयासुद्दीन तुगलक द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद बिन तुगलक निःसंतान था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसकी मृत्यु के बाद अमीरों और उलेमाओं ने उसके चचेरे भाई <b>फिरोजशाह तुगलक</b> को सुल्तान चुना।"
    },
    {
        question: "प्रश्न 20. दिल्ली सल्तनत का कौन सा सुल्तान अपनी नहर प्रणाली, बागों और लोक कल्याणकारी कार्यों के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह तुगलक</b> ने सिंचाई के लिए नहरों का एक बड़ा जाल बिछवाया, लगभग 1200 बाग लगवाए।<br><br><i class='fa-solid fa-angles-right icon'></i> और कई अस्पतालों, सरायों और स्कूलों का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 21. फिरोजशाह तुगलक ने कौन सा नया सिंचाई कर (Water Tax) लगाया?",
        answers: shuffle([
            { text: "जजिया", correct: false },
            { text: "जकात", correct: false },
            { text: "खराज", correct: false },
            { text: "हक-ए-शर्ब", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिरोज ने उलेमाओं की स्वीकृति से उन किसानों पर <b>'हक-ए-शर्ब'</b> नामक <b>सिंचाई कर</b> लगाया जो उसकी नहरों के पानी का उपयोग करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उपज का 1/10वां हिस्सा होता था।"
    },
    {
        question: "प्रश्न 22. ब्राह्मणों पर जजिया कर लगाने वाला पहला सुल्तान कौन था?",
        answers: shuffle([
            { text: "मुहम्मद बिन कासिम", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इससे पहले ब्राह्मणों को <b>जजिया कर</b> से मुक्त रखा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन <b>फिरोजशाह तुगलक</b> ने अपनी कट्टर धार्मिक नीति के तहत ब्राह्मणों पर भी जजिया लगा दिया।"
    },
    {
        question: "प्रश्न 23. 'दीवान-ए-खैरात' विभाग की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक <b>दान विभाग</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे <b>फिरोजशाह</b> ने गरीब मुस्लिम लड़कियों के विवाह, विधवाओं और अनाथों की मदद के लिए स्थापित किया था।"
    },
    {
        question: "प्रश्न 24. 'दार-उल-शफा' क्या था, जिसे फिरोजशाह तुगलक ने स्थापित किया?",
        answers: shuffle([
            { text: "एक दान घर", correct: false },
            { text: "एक राजकीय खैराती अस्पताल", correct: true },
            { text: "एक पुस्तकालय", correct: false },
            { text: "एक अतिथि गृह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिरोजशाह ने दिल्ली में <b>'दार-उल-शफा'</b> नाम से एक <b>खैराती अस्पताल</b> की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँ गरीबों का मुफ्त इलाज और भोजन की व्यवस्था थी।"
    },
    {
        question: "प्रश्न 25. फिरोजशाह तुगलक ने किन शहरों की स्थापना की?",
        answers: shuffle([
            { text: "हिसार, फिरोजाबाद, फतेहाबाद, जौनपुर", correct: true },
            { text: "आगरा, सिकंदराबाद, दिल्ली", correct: false },
            { text: "तुगलकाबाद, दौलताबाद", correct: false },
            { text: "लाहौर, मुल्तान, पेशावर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिरोजशाह को शहर बसाने का बहुत शौक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने <b>हिसार, फिरोजाबाद (दिल्ली), फतेहाबाद</b> और अपने भाई जौना खान की याद में <b>जौनपुर</b> जैसे लगभग 300 नगरों की स्थापना की।"
    },
    {
        question: "प्रश्न 26. अशोक के किन दो स्तंभों को फिरोजशाह तुगलक दिल्ली ले आया था?",
        answers: shuffle([
            { text: "सारनाथ और सांची", correct: false },
            { text: "टोपरा और मेरठ", correct: true },
            { text: "लौरिया नंदनगढ़ और रामपुरवा", correct: false },
            { text: "कौशाम्बी और लुम्बिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिरोजशाह को इतिहास और वास्तुकला में रुचि थी।<br><br><i class='fa-solid fa-angles-right icon'></i> वह अशोक के एक स्तंभ को <b>टोपरा (हरियाणा)</b> से और दूसरे को <b>मेरठ</b> से उखड़वाकर दिल्ली ले आया और उन्हें फिरोजाबाद में स्थापित करवाया।"
    },
    {
        question: "प्रश्न 27. किस सुल्तान ने अपनी आत्मकथा 'फुतूहात-ए-फिरोजशाही' लिखी?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह तुगलक</b> ने फारसी भाषा में अपनी आत्मकथा <b>'फुतूहात-ए-फिरोजशाही'</b> की रचना की।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें उसने अपने प्रशासनिक सुधारों और धार्मिक नीतियों का वर्णन किया है।"
    },
    {
        question: "प्रश्न 28. 'दीवान-ए-बंदगान' विभाग किससे संबंधित था?",
        answers: shuffle([
            { text: "दान से", correct: false },
            { text: "दासों की देखभाल से", correct: true },
            { text: "कृषि से", correct: false },
            { text: "सेना से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह तुगलक</b> के पास लगभग <b>1,80,000 दास</b> थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी उचित देखभाल और प्रबंधन के लिए उसने <b>'दीवान-ए-बंदगान'</b> नामक एक अलग विभाग की स्थापना की।"
    },
    {
        question: "प्रश्न 29. सल्तनत काल में किस वंश ने सबसे अधिक समय तक शासन किया?",
        answers: shuffle([
            { text: "गुलाम वंश", correct: false },
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: true },
            { text: "लोदी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तुगलक वंश</b> ने <b>1320 ई. से 1414 ई.</b> तक, कुल <b>94 वर्षों</b> तक शासन किया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो दिल्ली सल्तनत के सभी वंशों में सबसे लंबा शासनकाल था।"
    },
    {
        question: "प्रश्न 30. तैमूर लंग ने किस तुगलक शासक के समय दिल्ली पर आक्रमण किया था?",
        answers: shuffle([
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "गयासुद्दीन तुगलक द्वितीय", correct: false },
            { text: "अबू बक्र", correct: false },
            { text: "नासिरुद्दीन महमूद शाह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1398 ई.</b> में, जब तुगलक वंश का अंतिम शासक <b>नासिरुद्दीन महमूद शाह</b> दिल्ली पर शासन कर रहा था।<br><br><i class='fa-solid fa-angles-right icon'></i> तब मध्य एशियाई आक्रमणकारी <b>तैमूर लंग</b> ने दिल्ली पर आक्रमण किया और भारी लूटपाट और कत्लेआम मचाया।"
    },
    {
        question: "प्रश्न 31. मुहम्मद बिन तुगलक की कराचिल अभियान की योजना किससे संबंधित थी?",
        answers: shuffle([
            { text: "ईरान पर आक्रमण", correct: false },
            { text: "चीन पर आक्रमण", correct: false },
            { text: "कुमाऊँ की पहाड़ियों में विद्रोह दबाने से", correct: true },
            { text: "श्रीलंका पर आक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कराचिल अभियान</b> का उद्देश्य हिमालय की तराई (कुमाऊँ क्षेत्र) के <b>विद्रोही सरदारों</b> को नियंत्रित करना था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन खराब मौसम और दुर्गम रास्तों के कारण यह अभियान विनाशकारी रूप से असफल रहा।"
    },
    {
        question: "प्रश्न 32. मुहम्मद बिन तुगलक की खुरासान अभियान की योजना क्यों विफल हुई?",
        answers: shuffle([
            { text: "a) सेना ने विद्रोह कर दिया", correct: false },
            { text: "b) मध्य एशिया में राजनीतिक स्थिति बदल जाने के कारण", correct: false },
            { text: "c) खजाने में धन की कमी के कारण", correct: false },
            { text: "b) और c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद बिन तुगलक ने खुरासान (मध्य एशिया) को जीतने के लिए एक विशाल सेना (3,70,000 सैनिक) तैयार की।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन एक साल बाद <b>मध्य एशिया में राजनीतिक समीकरण बदल गए</b> और योजना को रद्द करना पड़ा।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे <b>राजकोष पर भारी बोझ पड़ा</b>।"
    },
    {
        question: "प्रश्न 33. सल्तनत का 'अकबर' किसे कहा जाता है?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसके लोक कल्याणकारी कार्यों, कर सुधारों और प्रशासनिक नरमी के कारण।<br><br><i class='fa-solid fa-angles-right icon'></i> कुछ इतिहासकार (जैसे हेनरी इलियट और एल्फिंस्टन) <b>फिरोजशाह तुगलक</b> को सल्तनत काल का <b>'अकबर'</b> कहते हैं।"
    },
    {
        question: "प्रश्न 34. फिरोजशाह तुगलक ने इक्ता प्रणाली में क्या परिवर्तन किया?",
        answers: shuffle([
            { text: "उसने इसे समाप्त कर दिया", correct: false },
            { text: "उसने इसे वंशानुगत बना दिया", correct: true },
            { text: "उसने नकद वेतन देना शुरू किया", correct: false },
            { text: "उसने इक्ता का आकार छोटा कर दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिरोजशाह ने सैन्य और प्रशासनिक व्यवस्था को कमजोर करते हुए <b>इक्ता (जागीर)</b> और सैनिक पदों को <b>वंशानुगत</b> बना दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका सल्तनत पर दीर्घकालिक रूप से बुरा प्रभाव पड़ा।"
    },
    {
        question: "प्रश्न 35. 'तारीख-ए-फिरोजशाही' और 'फतवा-ए-जहांदारी' का लेखक कौन था?",
        answers: shuffle([
            { text: "अमीर खुसरो", correct: false },
            { text: "इब्न बतूता", correct: false },
            { text: "मिनहाज-उस-सिराज", correct: false },
            { text: "जियाउद्दीन बरनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जियाउद्दीन बरनी</b> तुगलक काल का एक प्रमुख इतिहासकार था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने <b>'तारीख-ए-फिरोजशाही'</b> में बलबन से लेकर फिरोजशाह के शासन तक का इतिहास।<br><br><i class='fa-solid fa-angles-right icon'></i> और <b>'फतवा-ए-जहांदारी'</b> में राजनीतिक दर्शन का वर्णन किया है।"
    },
    {
        question: "प्रश्न 36. किस सुल्तान ने रोजगार दफ्तर (Employment Bureau) की स्थापना की?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह</b> ने बेरोजगारों की मदद के लिए दिल्ली में एक <b>रोजगार दफ्तर</b> स्थापित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो योग्य व्यक्तियों की सूची बनाता था और उन्हें काम दिलाने का प्रयास करता था।"
    },
    {
        question: "प्रश्न 37. किस दक्षिण भारतीय राज्य की स्थापना मुहम्मद बिन तुगलक के शासनकाल में हुई थी?",
        answers: shuffle([
            { text: "a) विजयनगर साम्राज्य", correct: false },
            { text: "b) बहमनी सल्तनत", correct: false },
            { text: "a) ,b) दोनों", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद बिन तुगलक के शासन के अंतिम वर्षों में दक्षिण में विद्रोहों के परिणामस्वरूप <b>1336 ई.</b> में हरिहर और बुक्का ने <b>विजयनगर साम्राज्य</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> तथा <b>1347 ई.</b> में हसन गंगू ने <b>बहमनी सल्तनत</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 38. 'अद्धा' और 'मिश्र' नामक सिक्के किस सुल्तान ने चलाए थे?",
        answers: shuffle([
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह</b> ने आम लोगों के लेन-देन की सुविधा के लिए <b>छोटे मूल्य के सिक्के</b> चलाए।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>'अद्धा'</b> जीतल का आधा और <b>'मिश्र'</b> (या बिख) जीतल का चौथाई मूल्य का सिक्का था।"
    },
    {
        question: "प्रश्न 39. तैमूर के आक्रमण के बाद भारत में किस नए वंश का उदय हुआ?",
        answers: shuffle([
            { text: "लोदी वंश", correct: false },
            { text: "खिलजी वंश", correct: false },
            { text: "सैयद वंश", correct: true },
            { text: "मुगल वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैमूर ने भारत से लौटते समय <b>खिज्र खान</b> को मुल्तान, लाहौर और दीपालपुर का सूबेदार नियुक्त किया।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में खिज्र खान ने दिल्ली पर अधिकार कर <b>सैयद वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 40. तुगलक काल में निर्मित गयासुद्दीन तुगलक के मकबरे की क्या विशेषता है?",
        answers: shuffle([
            { text: "यह संगमरमर से बना है", correct: false },
            { text: "इसकी दीवारें झुकी हुई (sloping walls) हैं", correct: true },
            { text: "इसमें मीनारें हैं", correct: false },
            { text: "यह अष्टकोणीय है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुगलकाबाद किले के पास स्थित गयासुद्दीन के मकबरे की दीवारें पिरामिड की तरह <b>अंदर की ओर झुकी हुई</b> हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे <b>'बत्तर शैली'</b> कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तुगलक वास्तुकला की एक प्रमुख विशेषता है।"
    },
    {
        question: "प्रश्न 41. मुहम्मद बिन तुगलक ने 'इब्न बतूता' को राजदूत बनाकर किस देश में भेजा था?",
        answers: shuffle([
            { text: "मिस्र", correct: false },
            { text: "ईरान", correct: false },
            { text: "चीन", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1342 ई.</b> में, मुहम्मद बिन तुगलक ने <b>इब्न बतूता</b> को मंगोल शासक <b>तोगन तिमूर</b> के दरबार में अपने दूत के रूप में <b>चीन</b> भेजा था।"
    },
    {
        question: "प्रश्न 42. फिरोजशाह तुगलक ने किस ज्वालामुखी मंदिर को तोड़कर उसके पुस्तकालय से 1300 संस्कृत ग्रंथ प्राप्त किए थे?",
        answers: shuffle([
            { text: "कामाख्या मंदिर", correct: false },
            { text: "मार्तंड सूर्य मंदिर", correct: false },
            { text: "ज्वालामुखी मंदिर, नगरकोट (कांगड़ा)", correct: true },
            { text: "महाकालेश्वर मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1365 ई.</b> में नगरकोट अभियान के दौरान, फिरोजशाह ने <b>ज्वालामुखी मंदिर</b> को तोड़ा।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन वहाँ के पुस्तकालय से प्राप्त संस्कृत पांडुलिपियों में से कुछ का <b>फारसी में अनुवाद</b> करवाया।"
    },
    {
        question: "प्रश्न 43. संस्कृत ग्रंथों का फारसी में अनुवाद करने के लिए फिरोजशाह तुगलक ने किस विभाग की स्थापना की?",
        answers: shuffle([
            { text: "दीवान-ए-इंशा", correct: false },
            { text: "दीवान-ए-रिसालत", correct: false },
            { text: "अनुवाद विभाग", correct: true },
            { text: "मकतब खाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिरोजशाह ने ज्ञान-विज्ञान में रुचि दिखाते हुए एक <b>अनुवाद विभाग</b> की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँ संस्कृत के ग्रंथों का फारसी में अनुवाद किया जाता था।"
    },
    {
        question: "प्रश्न 44. मुहम्मद बिन तुगलक द्वारा दोआब क्षेत्र में कर वृद्धि किस वर्ष की गई थी?",
        answers: shuffle([
            { text: "1325 ई.", correct: true },
            { text: "1327 ई.", correct: false },
            { text: "1330 ई.", correct: false },
            { text: "1335 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गद्दी पर बैठते ही सुल्तान ने गंगा-यमुना के उपजाऊ <b>दोआब क्षेत्र</b> में भू-राजस्व की दर बढ़ा दी।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन यह वृद्धि ऐसे समय में की गई जब वहाँ <b>अकाल</b> पड़ा हुआ था, जिससे किसानों ने विद्रोह कर दिया।"
    },
    {
        question: "प्रश्न 45. किस सुल्तान ने पहली बार इस्लामी कानूनों (शरीयत) के अनुसार शासन करने का प्रयास किया?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "इल्तुतमिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह</b> एक कट्टर सुन्नी मुसलमान था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने <b>उलेमाओं</b> को प्रशासन में महत्व दिया और <b>शरीयत</b> द्वारा स्वीकृत केवल चार कर (खराज, खुम्स, जजिया और जकात) ही लगाए।<br><br><i class='fa-solid fa-angles-right icon'></i> और बाकी 23 करों को समाप्त कर दिया।"
    },
    {
        question: "प्रश्न 46. \"मेरे साम्राज्य में विद्रोह इस तरह फैल गया है जैसे किसी को फोड़ा हो जाए, जो एक जगह ठीक होता है तो दूसरी जगह निकल आता है।\" यह कथन किस सुल्तान का है?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने शासनकाल के अंतिम वर्षों में लगातार हो रहे <b>विद्रोहों</b> से परेशान होकर <b>मुहम्मद बिन तुगलक</b> ने यह बात कही थी।"
    },
    {
        question: "प्रश्न 47. तुगलक वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "अबू बक्र शाह", correct: false },
            { text: "गयासुद्दीन तुगलक शाह द्वितीय", correct: false },
            { text: "नासिरुद्दीन महमूद शाह", correct: true },
            { text: "नुसरत शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>नासिरुद्दीन महमूद शाह</b> तुगलक वंश का <b>अंतिम शासक</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके समय में सल्तनत का क्षेत्र दिल्ली से <b>पालम</b> तक ही सिमट कर रह गया था।"
    },
    {
        question: "प्रश्न 48. फिरोजशाह तुगलक के शासनकाल में दासों के निर्यात पर किसने रोक लगाई?",
        answers: shuffle([
            { text: "सुल्तान ने स्वयं", correct: true },
            { text: "उलेमाओं ने", correct: false },
            { text: "अमीरों ने", correct: false },
            { text: "किसी ने नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोजशाह तुगलक</b> ने एक आदेश जारी कर सल्तनत से <b>दासों के निर्यात</b> पर पाबंदी लगा दी थी।"
    },
    {
        question: "प्रश्न 49. जौनपुर शहर की स्थापना किसकी स्मृति में की गई थी?",
        answers: shuffle([
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक (जौना खान)", correct: true },
            { text: "निजामुद्दीन औलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिरोजशाह तुगलक ने अपने चचेरे भाई और पूर्ववर्ती सुल्तान <b>मुहम्मद बिन तुगलक</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका मूल नाम <b>जौना खान</b> था, की याद में जौनपुर शहर की स्थापना की।"
    },
    {
        question: "प्रश्न 50. किस तुगलक सुल्तान ने राज्य के खर्च पर हज की यात्रा की व्यवस्था की?",
        answers: shuffle([
            { text: "गयासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: true },
            { text: "नासिरुद्दीन महमूद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी धार्मिकता और लोक कल्याण की भावना के तहत, <b>फिरोजशाह</b> ने राज्य की ओर से गरीब मुसलमानों को <b>हज यात्रा</b> पर भेजने की व्यवस्था की।"
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