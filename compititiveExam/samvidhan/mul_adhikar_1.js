const questions = [
    {
        topHeading: "मूल अधिकार पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान का कौन सा भाग 'भारत का मैग्ना कार्टा' (Magna Carta of India) कहलाता है?",
        answers: shuffle([
            { text: "भाग II (नागरिकता)", correct: false },
            { text: "भाग III (मौलिक अधिकार)", correct: true },
            { text: "भाग IV (राज्य के नीति निदेशक तत्व)", correct: false },
            { text: "भाग IV-A (मौलिक कर्तव्य)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग III में वर्णित मौलिक अधिकारों को 'भारत का मैग्ना कार्टा' (Magna Carta of India) की संज्ञा दी गई है।<br><br><i class='fa-solid fa-angles-right icon'></i> मैग्ना कार्टा अधिकारों का वह प्रपत्र था जिसे इंग्लैंड के राजा जॉन द्वारा 1215 में जारी किया गया था; यह नागरिकों के मूल अधिकारों से संबंधित पहला लिखित प्रपत्र था।"
    },
    {
        question: "प्रश्न 2. मूल संविधान में कितने मौलिक अधिकार थे?",
        answers: shuffle([
            { text: "छह", correct: false },
            { text: "सात", correct: true },
            { text: "आठ", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूल संविधान में सात मौलिक अधिकार थे।<br><br><i class='fa-solid fa-angles-right icon'></i> संपत्ति का अधिकार (अनुच्छेद 31) भी एक मौलिक अधिकार था, जिसे बाद में हटा दिया गया।"
    },
    {
        question: "प्रश्न 3. संपत्ति के अधिकार को किस संविधान संशोधन द्वारा मूल अधिकारों की सूची से हटा दिया गया?",
        answers: shuffle([
            { text: "42वां संशोधन", correct: false },
            { text: "44वां संशोधन", correct: true },
            { text: "52वां संशोधन", correct: false },
            { text: "61वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1978 में हुए 44वें संविधान संशोधन अधिनियम द्वारा संपत्ति के अधिकार को मौलिक अधिकारों की सूची से हटाकर संविधान के भाग XII में अनुच्छेद 300-क के तहत एक कानूनी (विधिक) अधिकार बना दिया गया।"
    },
    {
        question: "प्रश्न 4. वर्तमान में भारतीय नागरिकों को कितने मौलिक अधिकार प्राप्त हैं?",
        answers: shuffle([
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्तमान में भारतीय नागरिकों को 6 मौलिक अधिकार प्राप्त हैं: 1. समता का अधिकार, 2. स्वतंत्रता का अधिकार, 3. शोषण के विरुद्ध अधिकार, 4. धर्म की स्वतंत्रता का अधिकार, 5. संस्कृति और शिक्षा संबंधी अधिकार, 6. संवैधानिक उपचारों का अधिकार।"
    },
    {
        question: "प्रश्न 5. भारतीय संविधान में मौलिक अधिकार किस देश के संविधान से लिए गए हैं?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "आयरलैंड", correct: false },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान में मूल अधिकारों की अवधारणा संयुक्त राज्य अमेरिका के संविधान में उल्लिखित 'बिल ऑफ राइट्स' (Bill of Rights) से प्रेरित है।"
    },
    {
        question: "प्रश्न 6. संविधान का कौन सा अनुच्छेद 'कानून के समक्ष समता' (Equality before Law) का प्रावधान करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 14", correct: true },
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 14 यह प्रावधान करता है कि \"राज्य, भारत के राज्यक्षेत्र में किसी व्यक्ति को विधि के समक्ष समता से या विधियों के समान संरक्षण से वंचित नहीं करेगा।\""
    },
    {
        question: "प्रश्न 7. 'अस्पृश्यता का अंत' (Abolition of Untouchability) किस मौलिक अधिकार के अंतर्गत आता है?",
        answers: shuffle([
            { text: "स्वतंत्रता का अधिकार", correct: false },
            { text: "समता का अधिकार", correct: true },
            { text: "शोषण के विरुद्ध अधिकार", correct: false },
            { text: "संवैधानिक उपचारों का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अस्पृश्यता का अंत अनुच्छेद 17 के तहत किया गया है, जो समता के अधिकार (अनुच्छेद 14-18) का एक हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी भी रूप में अस्पृश्यता के आचरण को निषिद्ध करता है।"
    },
    {
        question: "प्रश्न 8. भारतीय संविधान का कौन सा अनुच्छेद उपाधियों के अंत (Abolition of Titles) से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: false },
            { text: "अनुच्छेद 18", correct: true },
            { text: "अनुच्छेद 19", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 18 राज्य को सेना या विद्या संबंधी सम्मान के सिवाय और कोई उपाधि प्रदान करने से रोकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत का कोई नागरिक किसी विदेशी राज्य से कोई उपाधि स्वीकार नहीं कर सकता।"
    },
    {
        question: "प्रश्न 9. प्रेस की स्वतंत्रता (Freedom of the Press) किस अनुच्छेद में अंतर्निहित है?",
        answers: shuffle([
            { text: "अनुच्छेद 19(1)(a)", correct: true },
            { text: "अनुच्छेद 19(1)(b)", correct: false },
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रेस की स्वतंत्रता का अलग से उल्लेख नहीं है, लेकिन सर्वोच्च न्यायालय ने इसे अनुच्छेद 19(1)(a) में निहित 'वाक् एवं अभिव्यक्ति की स्वतंत्रता' का ही एक हिस्सा माना है।"
    },
    {
        question: "प्रश्न 10. निम्नलिखित में से कौन सा अधिकार अनुच्छेद 19 के अंतर्गत नहीं आता है?",
        answers: shuffle([
            { text: "वाक् और अभिव्यक्ति की स्वतंत्रता", correct: false },
            { text: "शांतिपूर्वक सम्मेलन करने की स्वतंत्रता", correct: false },
            { text: "संघ बनाने की स्वतंत्रता", correct: false },
            { text: "अंतःकरण की स्वतंत्रता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतःकरण की स्वतंत्रता एक धार्मिक स्वतंत्रता है, जिसका उल्लेख अनुच्छेद 25 में है, न कि अनुच्छेद 19 में।<br><br><i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 19 में छह प्रकार की स्वतंत्रताएँ दी गई हैं।"
    },
    {
        question: "प्रश्न 11. किस अनुच्छेद को 'प्राण एवं दैहिक स्वतंत्रता का संरक्षण' (Protection of Life and Personal Liberty) कहा जाता है?",
        answers: shuffle([
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: true },
            { text: "अनुच्छेद 21A", correct: false },
            { text: "अनुच्छेद 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 21 यह प्रावधान करता है कि \"किसी व्यक्ति को उसके प्राण या दैहिक स्वतंत्रता से विधि द्वारा स्थापित प्रक्रिया के अनुसार ही वंचित किया जाएगा, अन्यथा नहीं।\"<br><br><i class='fa-solid fa-angles-right icon'></i> इसका दायरा बहुत व्यापक है।"
    },
    {
        question: "प्रश्न 12. 6 से 14 वर्ष की आयु के बच्चों के लिए निःशुल्क और अनिवार्य शिक्षा का अधिकार किस अनुच्छेद के तहत एक मौलिक अधिकार है?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 21-क", correct: true },
            { text: "अनुच्छेद 45", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 86वें संविधान संशोधन अधिनियम, 2002 द्वारा अनुच्छेद 21-क जोड़ा गया, जिसने 6 से 14 वर्ष के बच्चों के लिए प्रारंभिक शिक्षा को एक मौलिक अधिकार बना दिया।"
    },
    {
        question: "प्रश्न 13. कौन सा अनुच्छेद कुछ दशाओं में गिरफ्तारी और निरोध से संरक्षण प्रदान करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 22", correct: true },
            { text: "अनुच्छेद 23", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 22 गिरफ्तार किए गए व्यक्ति को कुछ अधिकार देता है, जैसे गिरफ्तारी का कारण जानने का अधिकार, अपनी रुचि के वकील से परामर्श करने का अधिकार और 24 घंटे के भीतर मजिस्ट्रेट के समक्ष पेश होने का अधिकार।"
    },
    {
        question: "प्रश्न 14. 'मानव के दुर्व्यापार और बलात् श्रम का प्रतिषेध' संविधान के किस अनुच्छेद में वर्णित है?",
        answers: shuffle([
            { text: "अनुच्छेद 22", correct: false },
            { text: "अनुच्छेद 23", correct: true },
            { text: "अनुच्छेद 24", correct: false },
            { text: "अनुच्छेद 25", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 23, जो शोषण के विरुद्ध अधिकार का हिस्सा है, मानव तस्करी, बेगार और इसी प्रकार के अन्य बलात् श्रम को प्रतिबंधित करता है।"
    },
    {
        question: "प्रश्न 15. कौन सा अनुच्छेद कारखानों आदि में 14 वर्ष से कम आयु के बच्चों के नियोजन पर रोक लगाता है?",
        answers: shuffle([
            { text: "अनुच्छेद 23", correct: false },
            { text: "अनुच्छेद 24", correct: true },
            { text: "अनुच्छेद 32", correct: false },
            { text: "अनुच्छेद 45", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 24 जोखिम भरे कामों, जैसे कारखानों या खानों में 14 वर्ष से कम आयु के बच्चों के नियोजन को प्रतिबंधित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बाल श्रम के खिलाफ एक महत्वपूर्ण प्रावधान है।"
    },
    {
        question: "प्रश्न 16. भारतीय संविधान का कौन सा अनुच्छेद अल्पसंख्यकों को अपनी रुचि की शिक्षण संस्थाओं की स्थापना और प्रशासन का अधिकार देता है?",
        answers: shuffle([
            { text: "अनुच्छेद 28", correct: false },
            { text: "अनुच्छेद 29", correct: false },
            { text: "अनुच्छेद 30", correct: true },
            { text: "अनुच्छेद 31", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 30 सभी धर्म और भाषा आधारित अल्पसंख्यकों को अपनी पसंद के शैक्षणिक संस्थानों की स्थापना करने और उनका प्रशासन करने का अधिकार प्रदान करता है।"
    },
    {
        question: "प्रश्न 17. डॉ. बी. आर. अम्बेडकर ने किस मौलिक अधिकार को 'संविधान का हृदय और आत्मा' कहा था?",
        answers: shuffle([
            { text: "समता का अधिकार", correct: false },
            { text: "स्वतंत्रता का अधिकार", correct: false },
            { text: "संपत्ति का अधिकार", correct: false },
            { text: "संवैधानिक उपचारों का अधिकार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. अम्बेडकर ने अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार) को संविधान की आत्मा और हृदय कहा था, क्योंकि यह नागरिकों को अपने मौलिक अधिकारों के हनन पर सीधे सर्वोच्च न्यायालय जाने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 18. मौलिक अधिकारों को लागू करने के लिए न्यायालय द्वारा क्या जारी किया जा सकता है?",
        answers: shuffle([
            { text: "अध्यादेश", correct: false },
            { text: "रिट (Writ)", correct: true },
            { text: "अधिसूचना", correct: false },
            { text: "डिक्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 32 के तहत सर्वोच्च न्यायालय और अनुच्छेद 226 के तहत उच्च न्यायालय मौलिक अधिकारों को लागू करने के लिए बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण और अधिकार-पृच्छा जैसी रिट जारी कर सकते हैं।"
    },
    {
        question: "प्रश्न 19. 'बंदी प्रत्यक्षीकरण' (Habeas Corpus) रिट का क्या अर्थ है?",
        answers: shuffle([
            { text: "हम आदेश देते हैं", correct: false },
            { text: "सशरीर प्रस्तुत करो", correct: true },
            { text: "किस अधिकार से", correct: false },
            { text: "प्रमाणित होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रिट उस व्यक्ति के संबंध में न्यायालय द्वारा जारी की जाती है जिसे दूसरे द्वारा हिरासत में रखा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके माध्यम से न्यायालय हिरासत में लिए गए व्यक्ति को अपने समक्ष प्रस्तुत करने का आदेश देता है और हिरासत की वैधता की जांच करता है।"
    },
    {
        question: "प्रश्न 20. मौलिक अधिकारों का निलंबन कौन कर सकता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "सर्वोच्च न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय आपातकाल (अनुच्छेद 352) के दौरान राष्ट्रपति उद्घोषणा द्वारा मौलिक अधिकारों को निलंबित कर सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, अनुच्छेद 20 और 21 को निलंबित नहीं किया जा सकता।"
    },
    {
        question: "प्रश्न 21. निम्नलिखित में से कौन सा मौलिक अधिकार केवल भारतीय नागरिकों को प्राप्त है, विदेशियों को नहीं?",
        answers: shuffle([
            { text: "विधि के समक्ष समता", correct: false },
            { text: "प्राण एवं दैहिक स्वतंत्रता", correct: false },
            { text: "धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर विभेद का प्रतिषेध", correct: true },
            { text: "शोषण के विरुद्ध अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 15, 16, 19, 29 और 30 में दिए गए मौलिक अधिकार केवल भारतीय नागरिकों के लिए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 15 उनमें से एक है।"
    },
    {
        question: "प्रश्न 22. 'परमादेश' (Mandamus) रिट किसके विरुद्ध जारी की जा सकती है?",
        answers: shuffle([
            { text: "किसी भी निजी व्यक्ति के विरुद्ध", correct: false },
            { text: "किसी सार्वजनिक अधिकारी के विरुद्ध, जब वह अपने कानूनी कर्तव्यों का पालन नहीं कर रहा हो", correct: true },
            { text: "राष्ट्रपति के विरुद्ध", correct: false },
            { text: "राज्यपाल के विरुद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमादेश रिट का अर्थ है \"हम आदेश देते हैं।\"<br><br><i class='fa-solid fa-angles-right icon'></i> यह न्यायालय द्वारा किसी सार्वजनिक अधिकारी, निगम या निचली अदालत को उनके सार्वजनिक कर्तव्यों का पालन करने का आदेश देने के लिए जारी की जाती है।"
    },
    {
        question: "प्रश्न 23. मौलिक अधिकारों का संरक्षक कौन है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "न्यायपालिका", correct: true },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में न्यायपालिका (सर्वोच्च न्यायालय और उच्च न्यायालय) को मौलिक अधिकारों का संरक्षक बनाया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि किसी के मौलिक अधिकारों का हनन होता है, तो वह न्यायपालिका की शरण ले सकता है।"
    },
    {
        question: "प्रश्न 24. मौलिक अधिकारों में संशोधन करने में कौन सक्षम है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "लोकसभा", correct: false },
            { text: "संसद", correct: true },
            { text: "सर्वोच्च न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसद मौलिक अधिकारों में संशोधन कर सकती है, लेकिन केशवानंद भारती मामले (1973) के अनुसार, वह संविधान की 'मूल संरचना' (Basic Structure) में संशोधन नहीं कर सकती।"
    },
    {
        question: "प्रश्न 25. अनुच्छेद 15(4) राज्यों को किसके लिए विशेष प्रावधान करने की अनुमति देता है?",
        answers: shuffle([
            { text: "केवल महिलाओं और बच्चों के लिए", correct: false },
            { text: "केवल अनुसूचित जातियों के लिए", correct: false },
            { text: "सामाजिक और शैक्षिक रूप से पिछड़े वर्गों, अनुसूचित जातियों और अनुसूचित जनजातियों के लिए", correct: true },
            { text: "केवल अल्पसंख्यकों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद राज्य को इन वर्गों की उन्नति के लिए विशेष उपबंध करने का अधिकार देता है, जो समता के अधिकार का अपवाद है ताकि सकारात्मक कार्रवाई की जा सके।"
    },
    {
        question: "प्रश्न 26. निवारक निरोध (Preventive Detention) का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 22", correct: true },
            { text: "अनुच्छेद 23", correct: false },
            { text: "अनुच्छेद 24", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 22 का एक खंड निवारक निरोध से संबंधित है, जिसका अर्थ है किसी व्यक्ति को अपराध करने से रोकने के लिए बिना सुनवाई के हिरासत में रखना।"
    },
    {
        question: "प्रश्न 27. \"सिखों द्वारा कृपाण धारण करना और लेकर चलना\" धार्मिक स्वतंत्रता के अधिकार का अंग माना जाता है। यह किस अनुच्छेद के अंतर्गत आता है?",
        answers: shuffle([
            { text: "अनुच्छेद 24", correct: false },
            { text: "अनुच्छेद 25", correct: true },
            { text: "अनुच्छेद 26", correct: false },
            { text: "अनुच्छेद 27", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 25 के स्पष्टीकरण I में कहा गया है कि कृपाण धारण करना और लेकर चलना सिख धर्म के मानने का अंग समझा जाएगा।"
    },
    {
        question: "प्रश्न 28. कौन सा अनुच्छेद धार्मिक कार्यों के प्रबंधन की स्वतंत्रता प्रदान करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 25", correct: false },
            { text: "अनुच्छेद 26", correct: true },
            { text: "अनुच्छेद 27", correct: false },
            { text: "अनुच्छेद 28", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 26 प्रत्येक धार्मिक संप्रदाय को अपने धार्मिक मामलों का प्रबंधन करने, धार्मिक संस्थानों की स्थापना करने और संपत्ति का स्वामित्व तथा प्रशासन करने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 29. कौन सी रिट किसी अधीनस्थ न्यायालय या न्यायिक निकाय को उसकी अधिकारिता से बाहर कार्य करने से रोकने के लिए जारी की जाती है?",
        answers: shuffle([
            { text: "परमादेश", correct: false },
            { text: "बंदी प्रत्यक्षीकरण", correct: false },
            { text: "प्रतिषेध (Prohibition)", correct: true },
            { text: "अधिकार-पृच्छा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिषेध रिट का अर्थ है 'रोकना'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक उच्च न्यायालय द्वारा अधीनस्थ न्यायालय को तब जारी की जाती है जब वह अपने अधिकार क्षेत्र का अतिक्रमण कर रहा हो।"
    },
    {
        question: "प्रश्न 30. निजता का अधिकार (Right to Privacy) को सर्वोच्च न्यायालय ने किस अनुच्छेद के तहत एक मौलिक अधिकार माना है?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: true },
            { text: "अनुच्छेद 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> के.एस. पुट्टस्वामी बनाम भारत संघ (2017) मामले में, सर्वोच्च न्यायालय की नौ-न्यायाधीशों की पीठ ने सर्वसम्मति से निर्णय दिया कि निजता का अधिकार अनुच्छेद 21 के तहत प्राण और दैहिक स्वतंत्रता के अधिकार का एक अभिन्न अंग है।"
    },
    {
        question: "प्रश्न 31. निम्नलिखित में से किसे मौलिक अधिकारों से संबंधित 'मूल संरचना' का सिद्धांत प्रतिपादित करने का श्रेय दिया जाता है?",
        answers: shuffle([
            { text: "गोलकनाथ मामला", correct: false },
            { text: "केशवानंद भारती मामला", correct: true },
            { text: "मिनर्वा मिल्स मामला", correct: false },
            { text: "शंकरी प्रसाद मामला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1973 के ऐतिहासिक केशवानंद भारती बनाम केरल राज्य मामले में, सर्वोच्च न्यायालय ने 'संविधान की मूल संरचना' का सिद्धांत दिया, जिसके अनुसार संसद मौलिक अधिकारों सहित संविधान के किसी भी हिस्से में संशोधन कर सकती है, लेकिन इसकी मूल संरचना को नहीं बदल सकती।"
    },
    {
        question: "प्रश्न 32. लोक नियोजन के विषय में अवसर की समता किस अनुच्छेद में दी गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: true },
            { text: "अनुच्छेद 17", correct: false },
            { text: "अनुच्छेद 18", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 16 राज्य के अधीन किसी भी पद पर नियोजन या नियुक्ति से संबंधित विषयों में सभी नागरिकों के लिए अवसर की समानता की गारंटी देता है।"
    },
    {
        question: "प्रश्न 33. राष्ट्रीय आपातकाल के दौरान कौन से दो मौलिक अधिकार निलंबित नहीं किए जा सकते?",
        answers: shuffle([
            { text: "अनुच्छेद 14 और 15", correct: false },
            { text: "अनुच्छेद 19 और 20", correct: false },
            { text: "अनुच्छेद 20 और 21", correct: true },
            { text: "अनुच्छेद 21 और 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संशोधन के बाद यह प्रावधान किया गया कि राष्ट्रीय आपातकाल के दौरान भी, अपराधों के लिए दोषसिद्धि के संबंध में संरक्षण (अनुच्छेद 20) और प्राण एवं दैहिक स्वतंत्रता का अधिकार (अनुच्छेद 21) निलंबित नहीं होंगे।"
    },
    {
        question: "प्रश्न 34. 'अधिकार-पृच्छा' (Quo Warranto) रिट का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "हम आदेश देते हैं", correct: false },
            { text: "आपका अधिकार क्या है?", correct: true },
            { text: "रोकना", correct: false },
            { text: "सूचित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रिट न्यायालय द्वारा किसी व्यक्ति से यह पूछने के लिए जारी की जाती है कि वह किस अधिकार या प्राधिकार से किसी सार्वजनिक पद पर आसीन है।"
    },
    {
        question: "प्रश्न 35. भारत में मौलिक अधिकार किसके विरुद्ध उपलब्ध हैं?",
        answers: shuffle([
            { text: "केवल राज्य के विरुद्ध", correct: true },
            { text: "केवल निजी व्यक्तियों के विरुद्ध", correct: false },
            { text: "राज्य और निजी व्यक्ति दोनों के विरुद्ध", correct: false },
            { text: "केवल केंद्र सरकार के विरुद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्यतः मौलिक अधिकार राज्य के मनमाने कार्यों के विरुद्ध एक गारंटी हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, कुछ अधिकार जैसे अनुच्छेद 17 (अस्पृश्यता) निजी व्यक्तियों के विरुद्ध भी उपलब्ध हैं, लेकिन अधिकांश अधिकार राज्य के विरुद्ध हैं।"
    },
    {
        question: "प्रश्न 36. किस स्थिति में एक नागरिक के मौलिक अधिकारों पर युक्तियुक्त प्रतिबंध लगाए जा सकते हैं?",
        answers: shuffle([
            { text: "जब भी सरकार चाहे", correct: false },
            { text: "राष्ट्रीय सुरक्षा, सार्वजनिक व्यवस्था और नैतिकता के हित में", correct: true },
            { text: "आर्थिक विकास को बढ़ावा देने के लिए", correct: false },
            { text: "कभी नहीं, क्योंकि वे असीमित हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक अधिकार असीमित नहीं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य उन पर राष्ट्रीय सुरक्षा, लोक व्यवस्था, नैतिकता, विदेशी राज्यों से मैत्रीपूर्ण संबंध जैसे आधारों पर युक्तियुक्त (reasonable) प्रतिबंध लगा सकता है, जैसा कि अनुच्छेद 19(2) से 19(6) में वर्णित है।"
    },
    {
        question: "प्रश्न 37. 'दोहरे दंड' (Double Jeopardy) से संरक्षण किस अनुच्छेद में प्रदान किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 20(1)", correct: false },
            { text: "अनुच्छेद 20(2)", correct: true },
            { text: "अनुच्छेद 20(3)", correct: false },
            { text: "अनुच्छेद 22(1)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 20(2) के अनुसार, किसी भी व्यक्ति को एक ही अपराध के लिए एक बार से अधिक अभियोजित और दंडित नहीं किया जाएगा।"
    },
    {
        question: "प्रश्न 38. कौन सा अनुच्छेद किसी भी व्यक्ति को स्वयं अपने विरुद्ध साक्षी (गवाह) बनने के लिए बाध्य करने से रोकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 20(3)", correct: true },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 22(2)", correct: false },
            { text: "अनुच्छेद 19(1)(d)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 20(3) आत्म-अभिशंसन (Self-incrimination) के विरुद्ध अधिकार प्रदान करता है, जिसका अर्थ है कि किसी भी अपराध के आरोपी व्यक्ति को खुद के खिलाफ सबूत देने के लिए मजबूर नहीं किया जा सकता।"
    },
    {
        question: "प्रश्न 39. अनुच्छेद 29 किससे संबंधित है?",
        answers: shuffle([
            { text: "सभी नागरिकों के लिए समान अवसर", correct: false },
            { text: "अल्पसंख्यकों के हितों का संरक्षण", correct: true },
            { text: "धार्मिक करों से मुक्ति", correct: false },
            { text: "शैक्षणिक संस्थानों की स्थापना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 29 भारत के किसी भी भाग में रहने वाले नागरिकों के किसी भी अनुभाग को, जिसकी अपनी विशेष भाषा, लिपि या संस्कृति है, उसे बनाए रखने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 40. मौलिक अधिकारों की प्रकृति क्या है?",
        answers: shuffle([
            { text: "सकारात्मक (Positive)", correct: false },
            { text: "नकारात्मक (Negative)", correct: false },
            { text: "वाद-योग्य (Justiciable)", correct: true },
            { text: "गैर-वाद योग्य (Non-justiciable)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक अधिकार वाद-योग्य हैं, जिसका अर्थ है कि उनके उल्लंघन पर सीधे न्यायालय में जाया जा सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य के नीति निदेशक तत्व गैर-वाद योग्य होते हैं।"
    },
    {
        question: "प्रश्न 41. विदेश यात्रा का अधिकार किस अनुच्छेद के अंतर्गत आता है?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 14", correct: false },
            { text: "अनुच्छेद 21", correct: true },
            { text: "अनुच्छेद 25", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेनका गांधी बनाम भारत संघ (1978) मामले में, सर्वोच्च न्यायालय ने निर्णय दिया कि विदेश यात्रा का अधिकार अनुच्छेद 21 (प्राण एवं दैहिक स्वतंत्रता) का एक हिस्सा है।"
    },
    {
        question: "प्रश्न 42. निम्नलिखित में से कौन सी स्वतंत्रता अनुच्छेद 19 में वर्णित नहीं है?",
        answers: shuffle([
            { text: "भारत के राज्यक्षेत्र में सर्वत्र अबाध संचरण की स्वतंत्रता", correct: false },
            { text: "कोई भी वृत्ति, उपजीविका, व्यापार या कारोबार करने की स्वतंत्रता", correct: false },
            { text: "हड़ताल करने की स्वतंत्रता", correct: true },
            { text: "शांतिपूर्वक और निरायुध सम्मेलन की स्वतंत्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्वोच्च न्यायालय ने स्पष्ट किया है कि विरोध करने का अधिकार एक मौलिक अधिकार है, लेकिन हड़ताल करने का अधिकार एक मौलिक अधिकार नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक कानूनी अधिकार हो सकता है।"
    },
    {
        question: "प्रश्न 43. 'राज्य' की परिभाषा (मौलिक अधिकारों के संदर्भ में) किस अनुच्छेद में दी गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 11", correct: false },
            { text: "अनुच्छेद 12", correct: true },
            { text: "अनुच्छेद 13", correct: false },
            { text: "अनुच्छेद 36", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग III (मौलिक अधिकार) के प्रयोजनों के लिए, 'राज्य' शब्द की परिभाषा अनुच्छेद 12 में दी गई है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें भारत सरकार और संसद, राज्य सरकारें और विधानमंडल, तथा सभी स्थानीय या अन्य प्राधिकारी शामिल हैं।"
    },
    {
        question: "प्रश्न 44. कौन सा अनुच्छेद यह घोषित करता है कि मौलिक अधिकारों से असंगत या उनका अल्पीकरण करने वाली विधियाँ शून्य होंगी?",
        answers: shuffle([
            { text: "अनुच्छेद 12", correct: false },
            { text: "अनुच्छेद 13", correct: true },
            { text: "अनुच्छेद 32", correct: false },
            { text: "अनुच्छेद 368", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 13 न्यायिक समीक्षा (Judicial Review) का आधार है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रावधान करता है कि कोई भी कानून जो मौलिक अधिकारों का उल्लंघन करता है, वह उल्लंघन की मात्रा तक शून्य (void) होगा।"
    },
    {
        question: "प्रश्न 45. अनुच्छेद 25 के अनुसार, धार्मिक स्वतंत्रता का अधिकार किसके अधीन है?",
        answers: shuffle([
            { text: "सार्वजनिक व्यवस्था, नैतिकता और स्वास्थ्य", correct: true },
            { text: "राज्य की सुरक्षा", correct: false },
            { text: "प्रधानमंत्री के निर्देश", correct: false },
            { text: "यह एक असीमित अधिकार है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धार्मिक स्वतंत्रता का अधिकार पूर्ण नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य इसे सार्वजनिक व्यवस्था, नैतिकता और स्वास्थ्य के आधार पर विनियमित कर सकता है।"
    },
    {
        question: "प्रश्न 46. 'उत्प्रेषण' (Certiorari) रिट का उद्देश्य क्या है?",
        answers: shuffle([
            { text: "किसी व्यक्ति को पद से हटाना", correct: false },
            { text: "किसी अधीनस्थ न्यायालय में चल रहे मामले को उच्च न्यायालय में भेजना", correct: true },
            { text: "किसी व्यक्ति को सशरीर प्रस्तुत करना", correct: false },
            { text: "किसी अधिकारी को कर्तव्य पालन का आदेश देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रिट एक उच्च न्यायालय द्वारा अधीनस्थ न्यायालय को यह आदेश देने के लिए जारी की जाती है कि वह अपने पास लंबित किसी मामले को समीक्षा के लिए वरिष्ठ न्यायालय में भेजे।"
    },
    {
        question: "प्रश्न 47. सूचना का अधिकार (Right to Information) है एक-",
        answers: shuffle([
            { text: "a) मूल अधिकार", correct: false },
            { text: "b) विधिक अधिकार", correct: false },
            { text: "दोनों (a) तथा (b)", correct: true },
            { text: "न तो (a) नही (b)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूचना का अधिकार अधिनियम, 2005 के तहत एक विधिक अधिकार है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अलावा, सर्वोच्च न्यायालय ने इसे अनुच्छेद 19(1)(a) के तहत वाक् एवं अभिव्यक्ति की स्वतंत्रता के मौलिक अधिकार का एक अभिन्न हिस्सा भी माना है।"
    },
    {
        question: "प्रश्न 48. मौलिक कर्तव्य (Fundamental Duties) संविधान के किस भाग में हैं?",
        answers: shuffle([
            { text: "भाग III", correct: false },
            { text: "भाग IV", correct: false },
            { text: "भाग IV-क", correct: true },
            { text: "भाग V", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक कर्तव्यों को स्वर्ण सिंह समिति की सिफारिश पर 42वें संशोधन द्वारा 1976 में संविधान के भाग IV-क में अनुच्छेद 51-क के तहत जोड़ा गया था।"
    },
    {
        question: "प्रश्न 49. शिक्षा संस्थानों में धार्मिक शिक्षा या उपासना में उपस्थित होने से स्वतंत्रता किस अनुच्छेद में दी गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 26", correct: false },
            { text: "अनुच्छेद 27", correct: false },
            { text: "अनुच्छेद 28", correct: true },
            { text: "अनुच्छेद 29", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 28 यह प्रावधान करता है कि राज्य-निधि से पूर्णतः पोषित किसी शिक्षण संस्थान में कोई धार्मिक शिक्षा नहीं दी जाएगी।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य संस्थानों में छात्रों को उनकी सहमति के बिना धार्मिक उपासना में भाग लेने के लिए बाध्य नहीं किया जा सकता।"
    },
    {
        question: "प्रश्न 50. 'विधि द्वारा स्थापित प्रक्रिया' (Procedure established by Law) और 'विधि की सम्यक् प्रक्रिया' (Due Process of Law) में क्या अंतर है?",
        answers: shuffle([
            { text: "कोई अंतर नहीं है।", correct: false },
            { text: "पहला केवल प्रक्रिया की वैधता की जांच करता है, जबकि दूसरा प्रक्रिया की तर्कसंगतता और निष्पक्षता की भी जांच करता है।", correct: true },
            { text: "पहला अमेरिकी अवधारणा है, दूसरा ब्रिटिश।", correct: false },
            { text: "भारत में केवल दूसरा ही लागू होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विधि द्वारा स्थापित प्रक्रिया' (भारत में अनुच्छेद 21 में प्रयुक्त) का अर्थ है कि कानून वैध रूप से बनाया गया है या नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'विधि की सम्यक् प्रक्रिया' (अमेरिकी अवधारणा) यह भी देखती है कि कानून उचित, निष्पक्ष और तर्कसंगत है या नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> मेनका गांधी मामले के बाद भारतीय सर्वोच्च न्यायालय ने अनुच्छेद 21 की व्याख्या में सम्यक् प्रक्रिया के तत्वों को भी शामिल कर लिया है।"
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