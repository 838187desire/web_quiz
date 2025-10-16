const questions = [
    {
        topHeading: "खिलजी वंश पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जलालुद्दीन खिलजी की 'उदारवादी' नीति का एक उदाहरण क्या था?",
        answers: shuffle([
            { text: "उसने मंगोलों को हराया", correct: false },
            { text: "उसने सीधी मौला को मृत्युदंड दिया", correct: false },
            { text: "उसने रणथंभौर का घेरा उठा लिया", correct: false },
            { text: "उसने कड़ा के विद्रोही मलिक छज्जू को क्षमा कर दिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बलबन के भतीजे <b>मलिक छज्जू</b> ने जब विद्रोह किया, तो उसे पकड़ने के बाद जलालुद्दीन ने उसे दंड देने के बजाय <b>क्षमा</b> कर दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो उसकी नरम नीति का प्रतीक है।"
    },
    {
        question: "प्रश्न 2. अलाउद्दीन खिलजी ने अपने किस विद्रोही भतीजे को अंधा करवा दिया था?",
        answers: shuffle([
            { text: "अकत खान", correct: true },
            { text: "मंगू खान", correct: false },
            { text: "उलूग खान", correct: false },
            { text: "नुसरत खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रणथंभौर अभियान के दौरान, अलाउद्दीन के भतीजे <b>अकत खान</b> ने उस पर जानलेवा हमला कर दिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में पकड़े जाने पर उसे मृत्युदंड दिया गया।"
    },
    {
        question: "प्रश्न 3. 'चराई कर' किस पर लगाया जाता था?",
        answers: shuffle([
            { text: "सभी जानवरों पर", correct: false },
            { text: "केवल घोड़ों पर", correct: false },
            { text: "दूध देने वाले पशुओं पर", correct: true },
            { text: "कृषि भूमि पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन द्वारा लगाया गया यह कर उन <b>पशुओं</b> पर लागू होता था जो दूध देते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> और जिन्हें चरागाहों में चराया जाता था।"
    },
    {
        question: "प्रश्न 4. अलाउद्दीन खिलजी के अनुसार, विद्रोहों का मुख्य कारण क्या नहीं था?",
        answers: shuffle([
            { text: "सुल्तान का प्रजा से अनभिज्ञ रहना", correct: false },
            { text: "अमीरों के बीच आपसी रिश्ते और दावतें", correct: false },
            { text: "अमीरों के पास अत्यधिक धन", correct: false },
            { text: "कठोर भू-राजस्व नीति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन का मानना था कि अमीरों के पास <b>अतिरिक्त धन</b>, उनके आपसी मेल-जोल और शराब पीना विद्रोह के मुख्य कारण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> कठोर भू-राजस्व नीति तो इन कारणों को खत्म करने का एक उपाय थी।"
    },
    {
        question: "प्रश्न 5. अलाउद्दीन खिलजी ने शराब और भांग जैसे मादक पदार्थों पर प्रतिबंध क्यों लगाया?",
        answers: shuffle([
            { text: "धार्मिक कारणों से", correct: false },
            { text: "स्वास्थ्य कारणों से", correct: false },
            { text: "विद्रोह और षड्यंत्रों को रोकने के लिए", correct: true },
            { text: "अपनी प्रजा को नैतिक बनाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसका मानना था कि शराब की महफिलों और दावतों में ही अमीर वर्ग सुल्तान के खिलाफ <b>षड्यंत्र</b> रचते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसने इन पर प्रतिबंध लगा दिया।"
    },
    {
        question: "प्रश्न 6. अलाउद्दीन खिलजी का गुप्तचर विभाग किस नाम से जाना जाता था?",
        answers: shuffle([
            { text: "दीवान-ए-अर्ज", correct: false },
            { text: "दीवान-ए-इंशा", correct: false },
            { text: "बरीद-ए-मुमालिक", correct: true },
            { text: "दीवान-ए-रियासत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने एक बहुत ही कुशल <b>गुप्तचर प्रणाली</b> स्थापित की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें <b>'बरीद'</b> (गुप्तचर) और <b>'मुनहियन'</b> (मुखबिर) हर छोटी-बड़ी घटना की सूचना सीधे सुल्तान तक पहुँचाते थे।"
    },
    {
        question: "प्रश्न 7. दक्षिण के किस राज्य को मलिक काफूर ने दो बार पराजित किया?",
        answers: shuffle([
            { text: "वारंगल", correct: false },
            { text: "द्वारसमुद्र", correct: false },
            { text: "मदुरै", correct: false },
            { text: "देवगिरि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहली बार <b>1307 ई.</b> में राजा <b>रामचंद्र देव</b> को और दूसरी बार <b>1313 ई.</b> में उसके पुत्र <b>शंकर देव</b> को मलिक काफूर ने पराजित किया।"
    },
    {
        question: "प्रश्न 8. 'आज कुफ्र का गढ़ इस्लाम का घर हो गया।' रणथंभौर विजय पर यह कथन किसका है?",
        answers: shuffle([
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "अमीर खुसरो", correct: true },
            { text: "हसन निजामी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अमीर खुसरो</b>, जो इस अभियान में अलाउद्दीन के साथ था।<br><br><i class='fa-solid fa-angles-right icon'></i> ने रणथंभौर की विजय के बाद यह प्रसिद्ध टिप्पणी की थी।"
    },
    {
        question: "प्रश्न 9. अलाउद्दीन खिलजी की दक्षिण नीति का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "प्रत्यक्ष शासन स्थापित करना", correct: false },
            { text: "इस्लाम का प्रचार करना", correct: false },
            { text: "धन प्राप्त करना और अधीनता स्वीकार करवाना", correct: true },
            { text: "दक्षिण में व्यापार बढ़ाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन दक्षिण भारत पर सीधा नियंत्रण नहीं चाहता था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी नीति का मूल उद्देश्य वहाँ से अपार <b>धन-संपत्ति</b> प्राप्त करना और वहाँ के शासकों से अपनी संप्रभुता स्वीकार करवाना था।"
    },
    {
        question: "प्रश्न 10. अलाउद्दीन खिलजी की मृत्यु के बाद देवगिरि में किसने स्वतंत्रता की घोषणा कर दी थी?",
        answers: shuffle([
            { text: "रामचन्द्र देव", correct: false },
            { text: "शंकर देव", correct: false },
            { text: "हरपाल देव", correct: true },
            { text: "कर्णदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामचंद्र देव के दामाद <b>हरपाल देव</b> ने अलाउद्दीन की मृत्यु से उत्पन्न अव्यवस्था का लाभ उठाकर देवगिरि को स्वतंत्र घोषित कर दिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे बाद में मुबारक खिलजी ने पराजित किया।"
    },
    {
        question: "प्रश्न 11. अलाउद्दीन खिलजी के समय 'परवाना नवीस' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "भूमि का माप करना", correct: false },
            { text: "वस्तुओं को खरीदने का परमिट (अनुज्ञा पत्र) जारी करना", correct: true },
            { text: "गुप्त सूचना देना", correct: false },
            { text: "न्याय करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाजार नियंत्रण व्यवस्था के तहत, महँगी और दुर्लभ वस्तुओं को खरीदने के लिए व्यापारियों और अमीरों को <b>'दीवान-ए-रियासत'</b> के इस अधिकारी से परमिट लेना पड़ता था।"
    },
    {
        question: "प्रश्न 12. अलाउद्दीन खिलजी के शासनकाल में मंगोलों का अंतिम आक्रमण किसके नेतृत्व में हुआ?",
        answers: shuffle([
            { text: "कुतलुग ख्वाजा", correct: false },
            { text: "तारगी बेग", correct: false },
            { text: "इकबालमंद और कबक", correct: true },
            { text: "सलदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1306-07 ई.</b> में हुआ यह आक्रमण अलाउद्दीन के समय का अंतिम बड़ा मंगोल आक्रमण था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे उसके सेनापति <b>गाजी मलिक</b> ने सफलतापूर्वक विफल कर दिया था।"
    },
    {
        question: "प्रश्न 13. अलाउद्दीन खिलजी ने किन दोआब क्षेत्रों में राजस्व सुधारों को सबसे पहले लागू किया?",
        answers: shuffle([
            { text: "दिल्ली और आगरा", correct: false },
            { text: "लाहौर और मुल्तान", correct: false },
            { text: "अवध और कड़ा", correct: false },
            { text: "मेरठ से कड़ा तक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने सबसे पहले <b>गंगा-यमुना दोआब</b> के सबसे उपजाऊ क्षेत्रों में अपनी कठोर भू-राजस्व नीतियों को लागू किया।<br><br><i class='fa-solid fa-angles-right icon'></i> क्योंकि यह क्षेत्र सबसे समृद्ध था।"
    },
    {
        question: "प्रश्न 14. 'दीवान-ए-वक्फ', जो व्यय के कागजातों की देखभाल करता था, की स्थापना किसने की?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "जलालुद्दीन खिलजी", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जलालुद्दीन खिलजी</b> ने राज्य के खर्चों की उचित देखभाल और लेखा-जोखा के लिए इस विभाग की स्थापना की थी।"
    },
    {
        question: "प्रश्न 15. खिलजी काल में 'आमिल' कौन होता था?",
        answers: shuffle([
            { text: "गाँव का मुखिया", correct: false },
            { text: "शहर का कोतवाल", correct: false },
            { text: "भू-राजस्व वसूल करने वाला सरकारी अधिकारी", correct: true },
            { text: "न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आमिल' सल्तनत काल में भू-राजस्व का <b>निर्धारण और वसूली</b> करने वाले प्रमुख अधिकारी होते थे।"
    },
    {
        question: "प्रश्न 16. किस खिलजी सुल्तान ने सैनिकों को इक्ता के स्थान पर नकद वेतन देना शुरू किया?",
        answers: shuffle([
            { text: "जलालुद्दीन खिलजी", correct: false },
            { text: "मुबारकशाह खिलजी", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "किसी ने नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>अलाउद्दीन के सैन्य सुधारों</b> का एक महत्वपूर्ण हिस्सा था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने इक्ता प्रणाली को समाप्त कर एक स्थायी सेना बनाई जिसे सीधे केंद्रीय खजाने से <b>नकद वेतन</b> दिया जाता था।"
    },
    {
        question: "प्रश्न 17. अलाउद्दीन खिलजी ने गुजरात के किस शासक को पराजित किया था?",
        answers: shuffle([
            { text: "राणा रतन सिंह", correct: false },
            { text: "राजा रामचंद्र देव", correct: false },
            { text: "राजा कर्णदेव द्वितीय", correct: true },
            { text: "हम्मीर देव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात अभियान (1299 ई.) के समय वहाँ के शासक बघेल राजपूत <b>कर्णदेव द्वितीय</b> थे।<br><br><i class='fa-solid fa-angles-right icon'></i> जो पराजित होकर अपनी पुत्री देवल देवी के साथ देवगिरि भाग गए थे।"
    },
    {
        question: "प्रश्न 18. मलिक काफूर ने दक्षिण भारत में अंतिम अभियान किस राज्य के विरुद्ध किया था?",
        answers: shuffle([
            { text: "वारंगल", correct: false },
            { text: "देवगिरि", correct: false },
            { text: "द्वारसमुद्र", correct: false },
            { text: "पाण्ड्य राज्य (मदुरै)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1311 ई.</b> में मलिक काफूर ने <b>मदुरै</b> पर आक्रमण किया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उसका सबसे दक्षिणी अभियान था, जिसमें उसने प्रसिद्ध मीनाक्षी मंदिर सहित कई मंदिरों को लूटा।"
    },
    {
        question: "प्रश्न 19. 'खम्स' (लूट का धन) में सुल्तान का हिस्सा 1/5 से बढ़ाकर 4/5 किसने किया?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लामी कानून के अनुसार सुल्तान का हिस्सा 1/5 होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन अलाउद्दीन ने इसे बदलकर <b>4/5</b> कर दिया और सैनिकों को केवल 1/5 हिस्सा देने का नियम बनाया।"
    },
    {
        question: "प्रश्न 20. अलाउद्दीन की मृत्यु का प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "मलिक काफूर का षड्यंत्र", correct: false },
            { text: "मंगोलों द्वारा हत्या", correct: false },
            { text: "युद्ध में मृत्यु", correct: false },
            { text: "गंभीर बीमारी (जलोदर)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने जीवन के अंतिम वर्षों में अलाउद्दीन <b>'जलोदर'</b> (dropsy) नामक गंभीर बीमारी से पीड़ित हो गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके कारण 1316 ई. में उसकी मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 21. अलाउद्दीन खिलजी के किस पुत्र को मलिक काफूर ने अंधा करवा कर ग्वालियर के किले में कैद कर दिया था?",
        answers: shuffle([
            { text: "शिहाबुद्दीन उमर", correct: false },
            { text: "मुबारकशाह", correct: false },
            { text: "खिज्र खान", correct: true },
            { text: "शादी खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सत्ता पर कब्जा करने के लिए, मलिक काफूर ने अलाउद्दीन के बड़े पुत्रों <b>खिज्र खान और शादी खान</b> को अंधा करवाकर कैद कर लिया था।"
    },
    {
        question: "प्रश्न 22. किस सुल्तान ने 'देवगिरि' का नाम बदलकर 'कुतुबाबाद' रखा था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुबारकशाह खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1318 ई.</b> में देवगिरि के विद्रोह को कुचलने के बाद, <b>मुबारकशाह खिलजी</b> ने देवगिरि का नाम बदलकर 'कुतुबाबाद' रख दिया और उसे सल्तनत में मिला लिया।"
    },
    {
        question: "प्रश्न 23. 'जब उसने राजत्व प्राप्त किया, तो वह शरीयत के नियमों और आदेशों से पूर्णतया स्वतंत्र था।' बरनी ने यह कथन किस सुल्तान के लिए कहा है?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुबारकशाह खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बरनी के अनुसार, <b>अलाउद्दीन</b> का मानना था कि राजनीति में धर्म का हस्तक्षेप नहीं होना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसने उलेमा वर्ग को प्रशासन से दूर रखा।"
    },
    {
        question: "प्रश्न 24. खिलजी काल में कपड़े के बाजार को क्या कहा जाता था?",
        answers: shuffle([
            { text: "शहना-ए-मंडी", correct: false },
            { text: "सराय-ए-अदल", correct: true },
            { text: "गल्ला मंडी", correct: false },
            { text: "दार-उल-अदालत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'सराय-ए-अदल'</b> सरकारी सहायता प्राप्त एक विशेष बाजार था।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँ कपड़े, शक्कर, जड़ी-बूटियाँ और अन्य महँगी वस्तुएँ निर्धारित मूल्य पर बेची जाती थीं।"
    },
    {
        question: "प्रश्न 25. 'जमाखोरी' और 'मुनाफाखोरी' को रोकने के लिए कठोर दंड का प्रावधान किस सुल्तान ने किया?",
        answers: shuffle([
            { text: "जलालुद्दीन खिलजी", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी बाजार नियंत्रण नीति को सफल बनाने के लिए, <b>अलाउद्दीन</b> ने कम तौलने वाले या अधिक कीमत लेने वाले व्यापारियों के शरीर से उतना ही मांस काट लेने का क्रूर दंड निर्धारित किया था।"
    },
    {
        question: "प्रश्न 26. मंगोलों से मुकाबले के लिए अलाउद्दीन खिलजी ने कौन सी नीति अपनाई?",
        answers: shuffle([
            { text: "केवल रक्षात्मक", correct: false },
            { text: "केवल आक्रामक", correct: false },
            { text: "रक्षात्मक और आक्रामक दोनों (लौह एवं रक्त)", correct: true },
            { text: "संधि और वार्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुरुआत में उसने रक्षात्मक नीति अपनाई, लेकिन बाद में उसने <b>आक्रामक नीति</b> अपनाते हुए मंगोलों का पीछा कर उन्हें दंडित करना शुरू किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने सीमावर्ती किलों की मरम्मत भी करवाई।"
    },
    {
        question: "प्रश्न 27. अलाउद्दीन खिलजी के शासनकाल में गुजरात का राज्यपाल कौन था, जिसे दक्षिण के अभियानों में मदद के लिए जाना जाता है?",
        answers: shuffle([
            { text: "उलूग खान", correct: false },
            { text: "नुसरत खान", correct: false },
            { text: "अल्प खान", correct: true },
            { text: "गाजी मलिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अल्प खान</b>, जो अलाउद्दीन का साला था, गुजरात का एक कुशल गवर्नर था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने देवगिरि के अभियानों में <b>मलिक काफूर</b> की सहायता की थी।"
    },
    {
        question: "प्रश्न 28. होयसल वंश की राजधानी 'द्वारसमुद्र' पर मलिक काफूर ने कब आक्रमण किया?",
        answers: shuffle([
            { text: "1307 ई.", correct: false },
            { text: "1310 ई.", correct: false },
            { text: "1311 ई.", correct: true },
            { text: "1313 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वारंगल विजय के बाद, मलिक काफूर ने दक्षिण की ओर बढ़कर होयसल राजा <b>वीर बल्लाल तृतीय</b> की राजधानी द्वारसमुद्र (आधुनिक हलेबिड, कर्नाटक) पर आक्रमण कर उसे संधि के लिए विवश किया।"
    },
    {
        question: "प्रश्न 29. अलाउद्दीन खिलजी की बाजार नीति की जानकारी का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "अमीर खुसरो की 'खजाइन-उल-फुतुह'", correct: false },
            { text: "जियाउद्दीन बरनी की 'तारीख-ए-फिरोजशाही'", correct: true },
            { text: "इब्न बतूता का 'रहला'", correct: false },
            { text: "इसामी की 'फुतुह-उस-सलातीन'", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जियाउद्दीन बरनी</b> ने अपनी पुस्तक में अलाउद्दीन की <b>बाजार नियंत्रण प्रणाली</b> का सबसे विस्तृत और प्रामाणिक वर्णन किया है।"
    },
    {
        question: "प्रश्न 30. 'खिलजी' मूल रूप से कौन थे?",
        answers: shuffle([
            { text: "मंगोल", correct: false },
            { text: "अफगान", correct: false },
            { text: "फारसी", correct: false },
            { text: "तुर्क", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खिलजी मूल रूप से <b>तुर्कों की एक शाखा</b> थे।<br><br><i class='fa-solid fa-angles-right icon'></i> जो लंबे समय तक अफगानिस्तान के हेलमंद नदी घाटी क्षेत्र ('खल्ज' नामक स्थान) में बसने के कारण अफगान समझे जाने लगे थे।"
    },
    {
        question: "प्रश्न 31. अलाउद्दीन खिलजी ने किस सूफी संत के मकबरे का निर्माण शुरू करवाया था?",
        answers: shuffle([
            { text: "मोइनुद्दीन चिश्ती", correct: false },
            { text: "बाबा फरीद", correct: false },
            { text: "बख्तियार काकी", correct: false },
            { text: "निजामुद्दीन औलिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि अलाउद्दीन और <b>निजामुद्दीन औलिया</b> के बीच कभी मुलाकात नहीं हुई, लेकिन सुल्तान उनका सम्मान करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसने दिल्ली में उनकी दरगाह पर <b>जमात खाना मस्जिद</b> का निर्माण शुरू करवाया।"
    },
    {
        question: "प्रश्न 32. 'सुल्तान को अपनी प्रजा से और प्रजा को अपने सुल्तान से मुक्ति मिल गई।' यह कथन किस शासक के लिए कहा गया है, जो खिलजी काल से संबंधित नहीं है?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुबारकशाह खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "ग्यासुद्दीन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक तुलनात्मक प्रश्न है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रसिद्ध कथन इतिहासकार <b>बदायूंनी</b> ने <b>मुहम्मद बिन तुगलक</b> की मृत्यु पर कहा था, जो खिलजी वंश के बाद तुगलक वंश का शासक था।"
    },
    {
        question: "प्रश्न 33. अलाउद्दीन खिलजी के समय दिल्ली का कोतवाल कौन था, जो उसका सलाहकार भी था?",
        answers: shuffle([
            { text: "मलिक काफूर", correct: false },
            { text: "जफर खान", correct: false },
            { text: "अला-उल-मुल्क", correct: true },
            { text: "नुसरत खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अला-उल-मुल्क</b>, जो सुल्तान का मित्र और दिल्ली का कोतवाल था।<br><br><i class='fa-solid fa-angles-right icon'></i> ने ही अलाउद्दीन को विश्व विजय और नया धर्म चलाने जैसी योजनाओं को <b>त्यागने की सलाह</b> दी थी।"
    },
    {
        question: "प्रश्न 34. किस शासक ने अपनी सफलताओं के कारण स्वयं को 'यमीन-उल-खिलाफत नासिरी अमीर-उल-मोमिनीन' घोषित किया?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुबारकशाह खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है - <b>'खिलाफत का दाहिना हाथ, मोमिनों (मुसलमानों) के अमीर का सहायक'</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उपाधि उसने खलीफा के प्रति अपनी नाममात्र की निष्ठा दर्शाने के लिए अपनाई।"
    },
    {
        question: "प्रश्न 35. खिलजी वंश के पतन का तात्कालिक कारण क्या था?",
        answers: shuffle([
            { text: "मंगोल आक्रमण", correct: false },
            { text: "राजपूतों का विद्रोह", correct: false },
            { text: "कमजोर और अयोग्य उत्तराधिकारी", correct: true },
            { text: "आर्थिक संकट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन जैसे शक्तिशाली शासक के बाद <b>मुबारकशाह खिलजी और खुसरव शाह</b> जैसे कमजोर और विलासी शासकों का आना।<br><br><i class='fa-solid fa-angles-right icon'></i> खिलजी वंश के पतन का सबसे प्रमुख और तात्कालिक कारण बना।"
    },
    {
        question: "प्रश्न 36. अलाउद्दीन खिलजी की बाजार व्यवस्था में 'मुनहियन' कौन होते थे?",
        answers: shuffle([
            { text: "गुप्तचर या मुखबिर", correct: true },
            { text: "मूल्य निर्धारक", correct: false },
            { text: "माप-तौल के निरीक्षक", correct: false },
            { text: "परमिट जारी करने वाले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'मुनहियन'</b> वे गुप्तचर होते थे जो बाजार की गतिविधियों पर नजर रखते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> और किसी भी नियम के उल्लंघन की सूचना सीधे सुल्तान तक पहुँचाते थे।"
    },
    {
        question: "प्रश्न 37. अलाउद्दीन खिलजी के बाद मलिक काफूर कितने दिनों तक शासन कर सका?",
        answers: shuffle([
            { text: "10 दिन", correct: false },
            { text: "35 दिन", correct: true },
            { text: "3 महीने", correct: false },
            { text: "1 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन की मृत्यु के बाद, <b>मलिक काफूर</b> केवल <b>35 दिनों</b> तक ही वास्तविक शासक (संरक्षक के रूप में) रह पाया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके बाद अलाउद्दीन के पूर्व अंगरक्षकों द्वारा उसकी हत्या कर दी गई।"
    },
    {
        question: "प्रश्न 38. 'आशिका' या 'देवल रानी-खिज्र खान' नामक प्रसिद्ध प्रेम-काव्य की रचना किसने की थी?",
        answers: shuffle([
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "मलिक मुहम्मद जायसी", correct: false },
            { text: "अमीर खुसरो", correct: true },
            { text: "इसामी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस ग्रंथ में <b>अमीर खुसरो</b> ने अलाउद्दीन के पुत्र <b>खिज्र खान और देवल रानी</b> के बीच प्रेम संबंध का काव्यात्मक वर्णन किया है।"
    },
    {
        question: "प्रश्न 39. खिलजी अमीरों ने जलालुद्दीन को सुल्तान के रूप में क्यों स्वीकार किया?",
        answers: shuffle([
            { text: "क्योंकि वह बहुत शक्तिशाली था", correct: false },
            { text: "क्योंकि वह तुर्क था", correct: false },
            { text: "एक अस्थायी समाधान के रूप में, क्योंकि वह वृद्ध था", correct: true },
            { text: "क्योंकि वह बलबन का वंशज था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्क अमीर किसी शक्तिशाली व्यक्ति को सुल्तान नहीं बनाना चाहते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने सोचा कि <b>जलालुद्दीन वृद्ध और कमजोर</b> है, इसलिए वे आसानी से उसे नियंत्रित कर लेंगे, लेकिन उनका यह अनुमान गलत साबित हुआ।"
    },
    {
        question: "प्रश्न 40. अलाउद्दीन खिलजी ने किन लोगों की भूमि, जो 'मिल्क', 'इनाम' और 'वक्फ' के रूप में दी गई थी, को जब्त कर लिया?",
        answers: shuffle([
            { text: "केवल हिंदू जागीरदारों की", correct: false },
            { text: "केवल मुस्लिम अमीरों की", correct: false },
            { text: "सभी धार्मिक और विशेष अनुदान प्राप्तकर्ताओं की", correct: true },
            { text: "केवल विद्रोही सरदारों की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी शक्ति को केंद्रित करने और अमीरों को कमजोर करने के लिए।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने राज्य द्वारा दी गई लगभग सभी अनुदान भूमियों को जब्त कर <b>'खालसा' (राजकीय) भूमि</b> में परिवर्तित कर दिया।"
    },
    {
        question: "प्रश्न 41. रणथंभौर का शासक कौन था जिसने अलाउद्दीन खिलजी के विद्रोही मंगोल सैनिकों को शरण दी थी?",
        answers: shuffle([
            { text: "राणा रतन सिंह", correct: false },
            { text: "राजा कर्णदेव", correct: false },
            { text: "हम्मीर देव चौहान", correct: true },
            { text: "शीतल देव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात विजय से लौट रहे कुछ नव-मुसलमान मंगोलों ने विद्रोह कर दिया और रणथंभौर के शासक <b>हम्मीर देव</b> के यहाँ शरण ले ली।<br><br><i class='fa-solid fa-angles-right icon'></i> हम्मीर देव द्वारा उन्हें वापस करने से इनकार करना ही रणथंभौर पर आक्रमण का तात्कालिक कारण बना।"
    },
    {
        question: "प्रश्न 42. अलाउद्दीन खिलजी द्वारा निर्मित 'चोर मीनार' या 'टावर ऑफ हेड्स' कहाँ स्थित है?",
        answers: shuffle([
            { text: "सीरी", correct: false },
            { text: "तुगलकाबाद", correct: false },
            { text: "हौज खास, दिल्ली", correct: true },
            { text: "महरौली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मीनार <b>मंगोल आक्रमणकारियों के कटे हुए सिरों</b> को प्रदर्शित करने के लिए बनाई गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> ताकि भविष्य में होने वाले आक्रमणों को रोका जा सके।"
    },
    {
        question: "प्रश्न 43. अलाउद्दीन खिलजी ने दक्षिण भारत के राज्यों से क्या वसूल किया?",
        answers: shuffle([
            { text: "केवल सोना और चांदी", correct: false },
            { text: "केवल घोड़े और हाथी", correct: false },
            { text: "वार्षिक कर (खराज)", correct: true },
            { text: "भूमि का एक हिस्सा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण के राज्यों को हराने के बाद, उसने उन्हें अपने अधीन कर लिया।<br><br><i class='fa-solid fa-angles-right icon'></i> और उनसे प्रतिवर्ष एक निश्चित राशि <b>कर (खराज)</b> के रूप में वसूलने का समझौता किया।"
    },
    {
        question: "प्रश्न 44. 'एक घोड़ा रखने वाले सैनिक' (यक-अस्पा) और 'दो घोड़े रखने वाले सैनिक' (दो-अस्पा) की प्रणाली किसने शुरू की?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "शेरशाह सूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>अलाउद्दीन के सैन्य संगठन</b> का हिस्सा था।<br><br><i class='fa-solid fa-angles-right icon'></i> दो-अस्पा सैनिक को यक-अस्पा सैनिक से लगभग दोगुना वेतन मिलता था क्योंकि वह युद्ध में अधिक प्रभावी होता था।"
    },
    {
        question: "प्रश्न 45. 'जब्ती' या 'मसाहत' प्रणाली के तहत भूमि का सर्वेक्षण किस आधार पर किया जाता था?",
        answers: shuffle([
            { text: "फसल की गुणवत्ता", correct: false },
            { text: "खेत का आकार", correct: true },
            { text: "किसान की हैसियत", correct: false },
            { text: "सिंचाई की सुविधा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रणाली में, भूमि को एक मानक इकाई <b>'बिस्वा'</b> में मापा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसी के आधार पर प्रति बिस्वा उपज का अनुमान लगाकर लगान तय किया जाता था।"
    },
    {
        question: "प्रश्न 46. किस खिलजी शासक को 'उदार' और 'दयालु' होने के कारण शासन के लिए अयोग्य माना गया?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुबारकशाह खिलजी", correct: false },
            { text: "जलालुद्दीन फिरोज खिलजी", correct: true },
            { text: "शिहाबुद्दीन उमर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसकी नरम और क्षमाशील नीति को उसके अमीर और दरबारी <b>कमजोरी</b> मानते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> जो उस युग में एक प्रभावी शासक के लिए उपयुक्त नहीं थी।"
    },
    {
        question: "प्रश्न 47. अलाउद्दीन खिलजी ने किन दो मंगोल नेताओं को दिल्ली में हाथी के पैरों तले कुचलवा दिया था?",
        answers: shuffle([
            { text: "तारगी और कबक", correct: false },
            { text: "उलुग खान और नुसरत खान", correct: false },
            { text: "अली बेग और तरताक", correct: true },
            { text: "कादर खान और सलदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1305 ई.</b> में अमरोहा के युद्ध में इन दोनों मंगोल नेताओं को पकड़ लिया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> और उन्हें क्रूरतापूर्वक <b>मृत्युदंड</b> दिया गया।"
    },
    {
        question: "प्रश्न 48. जलालुद्दीन खिलजी के समय अवध का इक्तादार कौन था, जिसने विद्रोह किया था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मलिक छज्जू", correct: true },
            { text: "अर्कली खान", correct: false },
            { text: "सीधी मौला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मलिक छज्जू</b>, जो बलबन का भतीजा और कड़ा का इक्तादार था, ने सुल्तान बनने का प्रयास किया।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन अलाउद्दीन खिलजी द्वारा पराजित हुआ।"
    },
    {
        question: "प्रश्न 49. 'राजनीति में कोई रिश्तेदारी नहीं होती।' इस सिद्धांत को किस खिलजी सुल्तान ने क्रूरता से लागू किया?",
        answers: shuffle([
            { text: "जलालुद्दीन खिलजी", correct: false },
            { text: "मुबारकशाह खिलजी", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "खुसरव शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सत्ता के लिए <b>अलाउद्दीन</b> ने अपने सगे चाचा और ससुर की हत्या कर दी।<br><br><i class='fa-solid fa-angles-right icon'></i> और बाद में अपने विद्रोही भतीजों और संबंधियों को भी कठोर दंड दिया, जिससे यह सिद्धांत सिद्ध होता है।"
    },
    {
        question: "प्रश्न 50. अलाउद्दीन खिलजी का मकबरा और मदरसा कहाँ स्थित है?",
        answers: shuffle([
            { text: "सीरी किले में", correct: false },
            { text: "तुगलकाबाद में", correct: false },
            { text: "हौज खास में", correct: false },
            { text: "कुतुब मीनार परिसर, महरौली में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन खिलजी का <b>मकबरा</b> और उसके द्वारा स्थापित एक <b>मदरसा</b> कुतुब मीनार परिसर के भीतर ही स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि अब वे खंडहर अवस्था में हैं।"
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