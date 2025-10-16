const questions = [
    {
        topHeading: "शेरशाह सूरी पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. शेरशाह की धार्मिक नीति कैसी थी?",
        answers: shuffle([
            { text: "वह कट्टर सुन्नी था और हिंदुओं पर अत्याचार करता था", correct: false },
            { text: "वह धार्मिक रूप से सहिष्णु था लेकिन राजनीतिक लाभ के लिए कभी-कभी कठोर हो जाता था", correct: true },
            { text: "वह पूरी तरह से धर्मनिरपेक्ष था", correct: false },
            { text: "वह शिया धर्म का अनुयायी था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्यतः उसकी नीति सहिष्णु थी और उसने प्रशासन में हिंदुओं को भी नियुक्त किया,लेकिन रायसीन जैसे मामलों में उसने धार्मिक कट्टरता का प्रदर्शन किया।"
    },
    {
        question: "प्रश्न 2. शेरशाह ने अपने सिक्कों पर अपना नाम किस लिपि में खुदवाया?",
        answers: shuffle([
            { text: "केवल अरबी", correct: false },
            { text: "केवल फारसी", correct: false },
            { text: "अरबी और देवनागरी", correct: true },
            { text: "अरबी और तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने अपने सिक्कों पर अरबी लिपि के साथ-साथ देवनागरी लिपि में भी अपना नाम 'श्रीशेरशाही' अंकित करवाया, जो उसकी व्यावहारिक नीति को दर्शाता है।"
    },
    {
        question: "प्रश्न 3. शेरशाह ने व्यापार और वाणिज्य को बढ़ावा देने के लिए क्या कदम उठाया?",
        answers: shuffle([
            { text: "उसने सभी आंतरिक चुंगियाँ (कर) समाप्त कर दीं", correct: false },
            { text: "उसने केवल दो स्थानों पर कर वसूली की अनुमति दी", correct: false },
            { text: "उसने एक समान मुद्रा प्रणाली लागू की", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने व्यापार को सुगम बनाने के लिए सड़कों और सरायों का निर्माण किया, मानक मुद्रा चलाई और केवल दो सीमा बिंदुओं (साम्राज्य में प्रवेश और बिक्री स्थल पर) पर कर लगाया।"
    },
    {
        question: "प्रश्न 4. शेरशाह के समय गुप्तचर विभाग का प्रमुख क्या कहलाता था?",
        answers: shuffle([
            { text: "बरीद-ए-मुमालिक", correct: true },
            { text: "वाकिया-नवीस", correct: false },
            { text: "मुहतसिब", correct: false },
            { text: "काजी-उल-कुजात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बरीद-ए-मुमालिक गुप्तचर और सूचना विभाग का प्रमुख होता था, जिसके तहत पूरे साम्राज्य में 'बरीद' (गुप्तचर) फैले हुए थे।"
    },
    {
        question: "प्रश्न 5. शेरशाह ने न्याय प्रशासन के लिए क्या व्यवस्था की?",
        answers: shuffle([
            { text: "उसने केवल इस्लामी कानूनों को लागू किया", correct: false },
            { text: "उसने प्रत्येक बुधवार को स्वयं न्याय के लिए बैठने की प्रथा शुरू की", correct: true },
            { text: "उसने न्याय के लिए कोई विशेष व्यवस्था नहीं की", correct: false },
            { text: "उसने हिंदुओं के लिए अलग न्यायालय बनाए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह न्याय को बहुत महत्व देता था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह सुल्तान के रूप में न्याय का सर्वोच्च स्रोत था और हर बुधवार को जनता की फरियाद सुनने के लिए दरबार लगाता था।"
    },
    {
        question: "प्रश्न 6. शेरशाह ने जौनपुर में शिक्षा प्राप्त करते समय किस विषय में महारत हासिल की थी?",
        answers: shuffle([
            { text: "सैन्य विज्ञान", correct: false },
            { text: "अरबी और फारसी साहित्य", correct: true },
            { text: "गणित और खगोल विज्ञान", correct: false },
            { text: "चिकित्सा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जौनपुर में उसने अरबी, फारसी भाषा और साहित्य का गहन अध्ययन किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने प्रसिद्ध फारसी कवि शेख सादी की कृतियों 'गुलिस्तां' और 'बोस्तां' को कंठस्थ कर लिया था।"
    },
    {
        question: "प्रश्न 7. शेरशाह ने अपने पिता की जागीर का प्रबंधन करते हुए किस वर्ग के हितों की रक्षा की?",
        answers: shuffle([
            { text: "जमींदारों", correct: false },
            { text: "सैनिकों", correct: false },
            { text: "किसानों", correct: true },
            { text: "व्यापारियों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी जागीर का प्रबंधन करते हुए फरीद ने विद्रोही जमींदारों को दबाया और किसानों को संरक्षण दिया, जिससे जागीर की आय में बहुत वृद्धि हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> यहीं से उसे राजस्व सुधारों का पहला अनुभव मिला।"
    },
    {
        question: "प्रश्न 8. शेरशाह की मृत्यु के समय कालिंजर का शासक कौन था?",
        answers: shuffle([
            { text: "पूरनमल", correct: false },
            { text: "मालदेव", correct: false },
            { text: "कीरत सिंह", correct: true },
            { text: "वीरभान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिंजर का चंदेल राजपूत शासक कीरत सिंह था, जिसने रीवा के राजा वीरभान को शरण दी थी, जो शेरशाह का शत्रु था।"
    },
    {
        question: "प्रश्न 9. 'शेरशाह सूरी मार्ग' आज किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "राष्ट्रीय राजमार्ग 1 (NH-1) और राष्ट्रीय राजमार्ग 2 (NH-2) का सम्मिलित भाग", correct: true },
            { text: "यमुना एक्सप्रेसवे", correct: false },
            { text: "ईस्ट-वेस्ट कॉरिडोर", correct: false },
            { text: "गोल्डन क्वाड्रिलेटरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐतिहासिक ग्रांड ट्रंक रोड का भारतीय हिस्सा मोटे तौर पर पुराने NH-1 (दिल्ली-अमृतसर) और NH-2 (दिल्ली-कोलकाता) के अनुरूप है।"
    },
    {
        question: "प्रश्न 10. किस इतिहासकार ने कहा कि \"यदि भाग्य ने उसका साथ दिया होता और वह अधिक समय तक जीवित रहता, तो आप भारत में महान मुगलों को नहीं पाते\"?",
        answers: shuffle([
            { text: "लेनपूल", correct: false },
            { text: "विन्सेंट स्मिथ", correct: false },
            { text: "एच. जी. कीन", correct: true },
            { text: "डॉ. कानूनगो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथन शेरशाह की असाधारण क्षमताओं और उसके द्वारा स्थापित मजबूत शासन प्रणाली को रेखांकित करता है।"
    },
    {
        question: "प्रश्न 11. शेरशाह के केंद्रीय प्रशासन में कितने प्रमुख विभाग थे?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह का केंद्रीय प्रशासन चार मुख्य विभागों में संगठित था: दीवान-ए-विजारत (वित्त), दीवान-ए-आरिज (सैन्य), दीवान-ए-रसालत (विदेश) और दीवान-ए-इंशा (पत्राचार)।"
    },
    {
        question: "प्रश्न 12. 'दीवान-ए-विजारत' का प्रमुख कौन होता था?",
        answers: shuffle([
            { text: "आरिज-ए-मुमालिक", correct: false },
            { text: "वजीर", correct: true },
            { text: "दबीर-ए-खास", correct: false },
            { text: "काजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वजीर वित्त और राजस्व विभाग का प्रमुख होता था और अन्य विभागों पर भी सामान्य पर्यवेक्षण रखता था।"
    },
    {
        question: "प्रश्न 13. शेरशाह के सैन्य विभाग 'दीवान-ए-आरिज' का प्रमुख क्या कहलाता था?",
        answers: shuffle([
            { text: "मीर बख्शी", correct: false },
            { text: "आरिज-ए-मुमालिक", correct: true },
            { text: "सिपहसालार", correct: false },
            { text: "खान-ए-खाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरिज-ए-मुमालिक सेना की भर्ती, संगठन, अनुशासन और वेतन के लिए जिम्मेदार होता था।"
    },
    {
        question: "प्रश्न 14. शेरशाह की मुद्रा प्रणाली को बाद में किस मुगल शासक ने मानक के रूप में अपनाया?",
        answers: shuffle([
            { text: "हुमायूँ", correct: false },
            { text: "अकबर", correct: true },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर की मुद्रा प्रणाली काफी हद तक शेरशाह द्वारा स्थापित 'रुपया' और 'दाम' की प्रणाली पर ही आधारित थी, जिसमें मामूली बदलाव किए गए।"
    },
    {
        question: "प्रश्न 15. शेरशाह ने किस शहर को 'पूर्व का द्वार' और विद्रोह का केंद्र मानते हुए नष्ट कर दिया था?",
        answers: shuffle([
            { text: "गौड़ (बंगाल)", correct: false },
            { text: "जौनपुर", correct: false },
            { text: "कन्नौज", correct: true },
            { text: "लाहौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कन्नौज की रणनीतिक स्थिति और उसके ऐतिहासिक महत्व को समाप्त करने के लिए शेरशाह ने उसे नष्ट कर दिया और पास में शेरगढ़ नामक नया शहर बसाया।"
    },
    {
        question: "प्रश्न 16. शेरशाह ने अपने साम्राज्य की उत्तरी सीमा कहाँ तक पहुँचा दी थी?",
        answers: shuffle([
            { text: "काबुल तक", correct: false },
            { text: "झेलम नदी तक", correct: true },
            { text: "सिंधु नदी तक", correct: false },
            { text: "कश्मीर तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर-पश्चिम में उसका साम्राज्य झेलम नदी तक फैला हुआ था, जहाँ उसने रोहतासगढ़ का किला बनवाया था।"
    },
    {
        question: "प्रश्न 17. शेरशाह के शासनकाल में किसानों को अकाल या फसल खराब होने पर राज्य द्वारा दिए जाने वाले ऋण को क्या कहा जाता था?",
        answers: shuffle([
            { text: "खराज", correct: false },
            { text: "जकात", correct: false },
            { text: "तकावी", correct: true },
            { text: "खिदमाती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तकावी ऋण' एक प्रकार का कृषि ऋण था जो किसानों को बीज, औजार खरीदने या अन्य कृषि संबंधी जरूरतों के लिए मुश्किल समय में दिया जाता था।"
    },
    {
        question: "प्रश्न 18. शेरशाह द्वारा भूमि की पैमाइश के लिए ली जाने वाली फीस को क्या कहते थे?",
        answers: shuffle([
            { text: "जरीबाना", correct: true },
            { text: "महासिलाना", correct: false },
            { text: "खुम्स", correct: false },
            { text: "खराज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जरीबाना' भूमि सर्वेक्षण शुल्क था और 'महाफिलाना' कर संग्रह शुल्क था, जो किसानों को भू-राजस्व के अतिरिक्त देना पड़ता था।"
    },
    {
        question: "प्रश्न 19. शेरशाह के समय सेना की भर्ती कौन करता था?",
        answers: shuffle([
            { text: "वजीर", correct: false },
            { text: "सुल्तान स्वयं", correct: true },
            { text: "आरिज-ए-मुमालिक", correct: false },
            { text: "शिकदार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह अपनी सेना के संगठन पर व्यक्तिगत ध्यान देता था और अक्सर सैनिकों की भर्ती वह स्वयं उनकी योग्यता देखकर करता था।"
    },
    {
        question: "प्रश्न 20. शेरशाह के चरित्र की तुलना किस यूरोपीय शासक से की जाती है?",
        answers: shuffle([
            { text: "नेपोलियन बोनापार्ट", correct: false },
            { text: "जूलियस सीजर", correct: false },
            { text: "ऑगस्टस सीजर", correct: false },
            { text: "ओलिवर क्रॉमवेल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह की तुलना उसकी प्रशासनिक क्षमता और एक सामान्य स्तर से उठकर शासक बनने के कारण अंग्रेजी शासक ओलिवर क्रॉमवेल से की जाती है।"
    },
    {
        question: "प्रश्न 21. \"अकबर, शेरशाह के सुधारों का केवल एक बुद्धिमान संशोधक था।\" - यह विचार किसका है?",
        answers: shuffle([
            { text: "विन्सेंट स्मिथ", correct: true },
            { text: "विलियम क्रुक", correct: false },
            { text: "स्टेनले लेनपूल", correct: false },
            { text: "आर.पी. त्रिपाठी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वी. ए. स्मिथ का मानना था कि अकबर ने कोई मौलिक सुधार नहीं किए, बल्कि शेरशाह द्वारा स्थापित की गई प्रणालियों को ही आगे बढ़ाया और उनमें सुधार किया।"
    },
    {
        question: "प्रश्न 22. शेरशाह ने किस राजपूत राज्य पर बिना युद्ध किए ही अधिकार कर लिया था?",
        answers: shuffle([
            { text: "मारवाड़", correct: false },
            { text: "मेवाड़", correct: true },
            { text: "आमेर", correct: false },
            { text: "कालिंजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मारवाड़ विजय के बाद, मेवाड़ के राणा उदयसिंह ने शेरशाह की विशाल सेना का सामना करने के बजाय बिना लड़े ही चित्तौड़ के किले की चाबियाँ उसे सौंप दीं।"
    },
    {
        question: "प्रश्न 23. शेरशाह की सेना में सबसे महत्वपूर्ण अंग कौन सा था?",
        answers: shuffle([
            { text: "पैदल सेना", correct: false },
            { text: "घुड़सवार सेना", correct: true },
            { text: "हाथी सेना", correct: false },
            { text: "तोपखाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अफगान सेना की ताकत उसकी तीव्र गति वाली और अनुशासित घुड़सवार सेना थी, जिसने उसे कई युद्धों में निर्णायक बढ़त दिलाई।"
    },
    {
        question: "प्रश्न 24. शेरशाह की मृत्यु के समय उसके साथ कौन सा हिंदू राजा मित्रवत था?",
        answers: shuffle([
            { text: "राजा मालदेव", correct: false },
            { text: "राजा पूरनमल", correct: false },
            { text: "राजा कीरत सिंह", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिए गए विकल्पों में से कोई भी शेरशाह का मित्र नहीं था।<br><br><i class='fa-solid fa-angles-right icon'></i> मालदेव और पूरनमल उसके शत्रु थे और कीरत सिंह के खिलाफ तो वह अपना अंतिम अभियान लड़ रहा था।"
    },
    {
        question: "प्रश्न 25. शेरशाह के साम्राज्य का विस्तार पूर्व में कहाँ तक था?",
        answers: shuffle([
            { text: "कामरूप (असम)", correct: false },
            { text: "सोनारगाँव (बंगाल)", correct: true },
            { text: "कटक (ओडिशा)", correct: false },
            { text: "पटना (बिहार)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह का साम्राज्य पूर्व में बंगाल के सोनारगाँव से लेकर पश्चिम में सिंधु नदी तक फैला हुआ था।"
    },
    {
        question: "प्रश्न 26. शेरशाह की शिक्षा-दीक्षा किस भाषा पर केंद्रित थी?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अरबी और फारसी", correct: true },
            { text: "संस्कृत", correct: false },
            { text: "हिंदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस समय की प्रशासनिक और साहित्यिक भाषा फारसी थी और धार्मिक भाषा अरबी थी।<br><br><i class='fa-solid fa-angles-right icon'></i> शेरशाह ने इन दोनों भाषाओं में प्रवीणता हासिल की।"
    },
    {
        question: "प्रश्न 27. शेरशाह ने अपने साम्राज्य की एकता बनाए रखने के लिए किस नीति का पालन किया?",
        answers: shuffle([
            { text: "कठोर सैन्य दमन", correct: false },
            { text: "केंद्रीकृत प्रशासन और व्यक्तिगत नियंत्रण", correct: true },
            { text: "सामंती व्यवस्था को बढ़ावा", correct: false },
            { text: "धार्मिक सहिष्णुता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने सारी शक्तियाँ अपने हाथ में रखीं और एक मजबूत केंद्रीय शासन की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> वह व्यक्तिगत रूप से प्रशासन के हर पहलू की निगरानी करता था।"
    },
    {
        question: "प्रश्न 28. मलिक मुहम्मद जायसी ने अपनी प्रसिद्ध कृति 'पद्मावत' की रचना किसके शासनकाल में की थी?",
        answers: shuffle([
            { text: "हुमायूँ", correct: false },
            { text: "बाबर", correct: false },
            { text: "शेरशाह सूरी", correct: true },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पद्मावत' की रचना 1540-41 के आसपास हुई, जब दिल्ली पर शेरशाह सूरी का शासन था।"
    },
    {
        question: "प्रश्न 29. शेरशाह के बाद सूर वंश का पतन क्यों शुरू हो गया?",
        answers: shuffle([
            { text: "उसके उत्तराधिकारियों की अयोग्यता", correct: false },
            { text: "मुगलों का फिर से आक्रमण", correct: false },
            { text: "आंतरिक विद्रोह और गृहयुद्ध", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लाम शाह एक योग्य शासक था, लेकिन उसकी मृत्यु के बाद उसके उत्तराधिकारी कमजोर साबित हुए, जिससे साम्राज्य में अराजकता फैल गई और हुमायूँ को भारत पर पुनः अधिकार करने का अवसर मिल गया।"
    },
    {
        question: "प्रश्न 30. शेरशाह द्वारा बनाई गई सबसे लंबी सड़क कौन सी थी?",
        answers: shuffle([
            { text: "आगरा से बुरहानपुर", correct: false },
            { text: "आगरा से जोधपुर", correct: false },
            { text: "लाहौर से मुल्तान", correct: false },
            { text: "सोनारगाँव से पेशावर (सड़क-ए-आजम)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सड़क लगभग 1500 कोस लंबी थी और साम्राज्य की सबसे महत्वपूर्ण धमनी थी, जिसे बाद में ग्रांड ट्रंक रोड कहा गया।"
    },
    {
        question: "प्रश्न 31. शेरशाह के शासनकाल में खुफिया जानकारी कौन एकत्र करता था?",
        answers: shuffle([
            { text: "बरीद और मुनहियन", correct: true },
            { text: "कोतवाल", correct: false },
            { text: "फौजदार", correct: false },
            { text: "काजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बरीद' आधिकारिक समाचार लेखक और गुप्तचर होते थे, जबकि 'मुनहियन' व्यक्तिगत रूप से सुल्तान को गुप्त सूचनाएँ देने वाले जासूस होते थे।"
    },
    {
        question: "प्रश्न 32. शेरशाह ने किस मुगल शहजादी से विवाह का प्रस्ताव रखा था, जिसे हुमायूँ ने ठुकरा दिया था?",
        answers: shuffle([
            { text: "गुलबदन बेगम", correct: false },
            { text: "मासूमा सुल्तान बेगम", correct: true },
            { text: "गुलरुख बेगम", correct: false },
            { text: "बेगा बेगम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुनार के पहले घेरे के बाद, शेरशाह ने हुमायूँ की बहन मासूमा सुल्तान बेगम से विवाह का प्रस्ताव रखा था, जिसे हुमायूँ ने अपमानजनक मानकर अस्वीकार कर दिया था।"
    },
    {
        question: "प्रश्न 33. शेरशाह ने 'आमिलों' की नियुक्ति किस कार्य के लिए की थी?",
        answers: shuffle([
            { text: "सैन्य नेतृत्व", correct: false },
            { text: "भू-राजस्व का निर्धारण और वसूली", correct: true },
            { text: "न्याय प्रदान करना", correct: false },
            { text: "किलों की सुरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आमिल' या 'अमीन' राजस्व अधिकारी होते थे, जिनका मुख्य कार्य भूमि की पैमाइश करवाना, लगान निर्धारित करना और उसकी वसूली करना था।"
    },
    {
        question: "प्रश्न 34. 'अकबर का अग्रगामी' (Forerunner of Akbar) किसे कहा जाता है?",
        answers: shuffle([
            { text: "हुमायूँ", correct: false },
            { text: "बाबर", correct: false },
            { text: "इस्लाम शाह", correct: false },
            { text: "शेरशाह सूरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह को यह उपाधि इसलिए दी जाती है क्योंकि उसने प्रशासन, राजस्व और मुद्रा के क्षेत्र में जो सुधार किए, उन्हीं को अकबर ने आगे बढ़ाया।"
    },
    {
        question: "प्रश्न 35. शेरशाह ने साम्राज्य में शांति और व्यवस्था के लिए कौन सा सिद्धांत अपनाया?",
        answers: shuffle([
            { text: "उदारता और क्षमा", correct: false },
            { text: "कठोर दंड और स्थानीय उत्तरदायित्व", correct: true },
            { text: "केवल नैतिक उपदेश", correct: false },
            { text: "साम, दाम, दंड, भेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने अपराधों के लिए बहुत कठोर दंड निर्धारित किए और स्थानीय अधिकारियों (जैसे मुकद्दम) को उनके क्षेत्र में होने वाले अपराधों के लिए जिम्मेदार ठहराया।"
    },
    {
        question: "प्रश्न 36. शेरशाह की सेना में सैनिकों को वेतन कैसे दिया जाता था?",
        answers: shuffle([
            { text: "जागीर के रूप में", correct: false },
            { text: "नकद वेतन", correct: true },
            { text: "लूट के माल में हिस्सा देकर", correct: false },
            { text: "कृषि भूमि देकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जागीरदारी प्रथा के भ्रष्टाचार को खत्म करने के लिए शेरशाह ने अपनी सेना को सीधे शाही खजाने से नकद वेतन देने की प्रथा शुरू की।"
    },
    {
        question: "प्रश्न 37. शेरशाह ने पटना शहर को पुनः स्थापित किया और उसे किस प्रांत की राजधानी बनाया?",
        answers: shuffle([
            { text: "बंगाल", correct: false },
            { text: "जौनपुर", correct: false },
            { text: "मालवा", correct: false },
            { text: "बिहार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राचीन पाटलिपुत्र के खंडहरों पर शेरशाह ने पटना शहर को फिर से बसाया और उसे बिहार की प्रांतीय राजधानी बनाया।"
    },
    {
        question: "प्रश्न 38. गिरी-सुमेल के युद्ध में मालदेव के कौन से दो वीर सेनापति मारे गए थे?",
        answers: shuffle([
            { text: "आल्हा और ऊदल", correct: false },
            { text: "गोरा और बादल", correct: false },
            { text: "जयमल और पत्ता", correct: false },
            { text: "जैता और कूँपा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैता और कूँपा ने असाधारण वीरता का प्रदर्शन किया और लगभग शेरशाह को हरा ही दिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> शेरशाह ने उनकी वीरता की प्रशंसा भी की।"
    },
    {
        question: "प्रश्न 39. शेरशाह के मकबरे की सबसे प्रमुख विशेषता क्या है?",
        answers: shuffle([
            { text: "यह संगमरमर से बना है", correct: false },
            { text: "यह एक झील के बीच में स्थित है", correct: true },
            { text: "इसमें मीनारें हैं", correct: false },
            { text: "यह भूमिगत है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सासाराम में स्थित यह अष्टकोणीय मकबरा एक विशाल कृत्रिम तालाब के केंद्र में एक ऊँचे चबूतरे पर बना है, जो इसे अद्वितीय बनाता है।"
    },
    {
        question: "प्रश्न 40. शेरशाह के शासन का स्वरूप कैसा था?",
        answers: shuffle([
            { text: "लोकतांत्रिक", correct: false },
            { text: "कुलीनतांत्रिक", correct: false },
            { text: "प्रबुद्ध निरंकुशता", correct: true },
            { text: "सामंती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह एक निरंकुश शासक था, लेकिन उसने अपनी शक्ति का प्रयोग जनता की भलाई और एक कुशल प्रशासन स्थापित करने के लिए किया, इसलिए उसके शासन को 'प्रबुद्ध निरंकुशता' कहा जा सकता है।"
    },
    {
        question: "प्रश्न 41. शेरशाह का जन्म किस वंश में हुआ था?",
        answers: shuffle([
            { text: "लोदी वंश", correct: false },
            { text: "खिलजी वंश", correct: false },
            { text: "सूर वंश (अफगान)", correct: true },
            { text: "नूहानी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह का संबंध अफगानों की सूर जनजाति से था।"
    },
    {
        question: "प्रश्न 42. शेरशाह ने अपने साम्राज्य के सभी हिस्सों को जोड़ने के लिए कितनी प्रमुख सड़कों का निर्माण या मरम्मत करवाई?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने चार मुख्य सड़कों का निर्माण करवाया था - (1) सोनारगाँव से पेशावर, (2) आगरा से बुरहानपुर, (3) आगरा से जोधपुर और चित्तौड़, (4) लाहौर से मुल्तान।"
    },
    {
        question: "प्रश्न 43. 'जरीब' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक सैन्य पद", correct: false },
            { text: "भूमि मापने की एक जंजीर या रस्सी", correct: true },
            { text: "एक प्रकार का सिक्का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने भूमि की पैमाइश के लिए सन की डंडी वाली जरीब का इस्तेमाल करवाया ताकि माप में सटीकता रहे।"
    },
    {
        question: "प्रश्न 44. शेरशाह की सेना में लगभग कितने घुड़सवार थे?",
        answers: shuffle([
            { text: "50,000", correct: false },
            { text: "1,00,000", correct: false },
            { text: "1,50,000", correct: true },
            { text: "2,00,000", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब्बास खाँ सरवानी के अनुसार, शेरशाह की स्थायी सेना में 1,50,000 घुड़सवार, 25,000 पैदल सैनिक और 5,000 हाथी थे।"
    },
    {
        question: "प्रश्न 45. शेरशाह के शासनकाल में मुख्य काजी क्या कहलाता था?",
        answers: shuffle([
            { text: "मुफ्ती", correct: false },
            { text: "काजी-उल-कुजात", correct: true },
            { text: "मीर-ए-अदल", correct: false },
            { text: "कोतवाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काजी-उल-कुजात सल्तनत और मुगल काल में न्याय विभाग का सर्वोच्च अधिकारी होता था, जो सुल्तान के बाद मुख्य न्यायाधीश था।"
    },
    {
        question: "प्रश्न 46. शेरशाह ने किस अफगान सरदार की विधवा से विवाह करके बिहार पर अपना प्रभाव स्थापित किया?",
        answers: shuffle([
            { text: "दरिया खाँ लोहानी", correct: false },
            { text: "बहार खाँ लोहानी", correct: true },
            { text: "दौलत खाँ लोदी", correct: false },
            { text: "इब्राहिम खाँ सूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान मुहम्मद शाह नूहानी (बहार खाँ) की मृत्यु के बाद शेर खाँ ने उसकी विधवा 'दूदू बीबी' से विवाह कर लिया और उसके नाबालिग बेटे जलाल खाँ का संरक्षक बन गया।"
    },
    {
        question: "प्रश्न 47. 'सूरजगढ़ की लड़ाई' (1534) में शेर खाँ ने किसे पराजित किया था?",
        answers: shuffle([
            { text: "हुमायूँ को", correct: false },
            { text: "बंगाल और लोहानी अफगानों की संयुक्त सेना को", correct: true },
            { text: "मालदेव को", correct: false },
            { text: "गुजरात के बहादुर शाह को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस युद्ध में विजय ने शेर खाँ को पूरे बिहार का निर्विवाद शासक बना दिया।"
    },
    {
        question: "प्रश्न 48. शेरशाह के शासनकाल में टंकसाल (सिक्के ढालने का स्थान) कहाँ-कहाँ थे?",
        answers: shuffle([
            { text: "केवल दिल्ली और आगरा", correct: false },
            { text: "लगभग 23 स्थानों पर", correct: true },
            { text: "केवल लाहौर और जौनपुर", correct: false },
            { text: "केवल पटना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने अपने साम्राज्य के विभिन्न हिस्सों में लगभग 23 टंकसालें स्थापित कीं ताकि मानकीकृत सिक्कों का व्यापक प्रचलन हो सके।"
    },
    {
        question: "प्रश्न 49. शेरशाह के चरित्र में कौन सा गुण नहीं था?",
        answers: shuffle([
            { text: "प्रशासनिक प्रतिभा", correct: false },
            { text: "सैन्य कौशल", correct: false },
            { text: "कूटनीतिक चातुर्य", correct: false },
            { text: "वास्तु कला में गहरी रुचि न होना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने कई भव्य इमारतें (जैसे पुराना किला, सासाराम का मकबरा) बनवाईं, जो दर्शाती हैं कि उसे वास्तुकला में गहरी रुचि थी।"
    },
    {
        question: "प्रश्न 50. शेरशाह की लगान वसूली की कौन सी विधि थी?",
        answers: shuffle([
            { text: "केवल नकद", correct: false },
            { text: "केवल अनाज (जिंस)", correct: false },
            { text: "नकद या जिंस दोनों का विकल्प", correct: true },
            { text: "बटाई प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि शेरशाह नकद में लगान लेना पसंद करता था, लेकिन किसानों को अपनी सुविधा के अनुसार अनाज के रूप में भी लगान चुकाने की छूट थी।"
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