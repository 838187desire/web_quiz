const questions = [
    {
        topHeading: "संविधान में अधिकार और कर्तव्य पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान का कौन सा भाग 'भारत का मैग्ना कार्टा' (Magna Carta of India) कहलाता है?",
        answers: shuffle([
            { text: "भाग II (नागरिकता)", correct: false },
            { text: "भाग III (मौलिक अधिकार)", correct: true },
            { text: "भाग IV (राज्य के नीति निदेशक तत्व)", correct: false },
            { text: "भाग IV-A (मौलिक कर्तव्य)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग III में वर्णित मौलिक अधिकार इतने व्यापक और महत्वपूर्ण हैं कि इसे 'भारत का मैग्ना कार्टा' की संज्ञा दी गई है।<br><br><i class='fa-solid fa-angles-right icon'></i> मैग्ना कार्टा 1215 में इंग्लैंड के राजा द्वारा जारी किया गया अधिकारों का पहला लिखित चार्टर था।"
    },
    {
        question: "प्रश्न 2. वर्तमान में भारतीय संविधान के तहत नागरिकों को कितने मौलिक अधिकार प्राप्त हैं?",
        answers: shuffle([
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में संविधान में 7 मौलिक अधिकार थे, लेकिन 44वें संविधान संशोधन, 1978 द्वारा 'संपत्ति के अधिकार' को मौलिक अधिकारों की सूची से हटा दिया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> अब यह अनुच्छेद 300-A के तहत एक कानूनी अधिकार है।"
    },
    {
        question: "प्रश्न 3. 'कानून के समक्ष समानता' (Equality before Law) का विचार किस देश के संविधान से लिया गया है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "ब्रिटेन", correct: true },
            { text: "आयरलैंड", correct: false },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कानून के समक्ष समानता' का विचार ब्रिटिश संविधान से लिया गया है, जबकि 'कानूनों का समान संरक्षण' (Equal Protection of Laws) की अवधारणा अमेरिकी संविधान से ली गई है।"
    },
    {
        question: "प्रश्न 4. भारतीय संविधान का कौन सा अनुच्छेद अस्पृश्यता (Untouchability) का उन्मूलन करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: true },
            { text: "अनुच्छेद 18", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 17 अस्पृश्यता को समाप्त करता है और किसी भी रूप में इसके आचरण को दंडनीय अपराध घोषित करता है।"
    },
    {
        question: "प्रश्न 5. डॉ. बी.आर. अंबेडकर ने किस मौलिक अधिकार को 'संविधान का हृदय और आत्मा' कहा था?",
        answers: shuffle([
            { text: "समानता का अधिकार", correct: false },
            { text: "स्वतंत्रता का अधिकार", correct: false },
            { text: "शोषण के विरुद्ध अधिकार", correct: false },
            { text: "संवैधानिक उपचारों का अधिकार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 32 के तहत संवैधानिक उपचारों का अधिकार नागरिकों को अपने मौलिक अधिकारों के हनन के मामले में सीधे सर्वोच्च न्यायालय जाने का अधिकार देता है, इसलिए डॉ. अंबेडकर ने इसे संविधान की आत्मा कहा।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से कौन सी रिट (Writ) किसी अवैध रूप से हिरासत में लिए गए व्यक्ति की रिहाई के लिए जारी की जाती है?",
        answers: shuffle([
            { text: "परमादेश (Mandamus)", correct: false },
            { text: "बंदी प्रत्यक्षीकरण (Habeas Corpus)", correct: true },
            { text: "अधिकार पृच्छा (Quo Warranto)", correct: false },
            { text: "उत्प्रेषण (Certiorari)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बंदी प्रत्यक्षीकरण' का शाब्दिक अर्थ है 'शरीर को प्रस्तुत करना'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रिट अदालत द्वारा उस व्यक्ति या प्राधिकारी को जारी की जाती है जिसने किसी अन्य व्यक्ति को हिरासत में रखा है, ताकि हिरासत की वैधता की जांच हो सके।"
    },
    {
        question: "प्रश्न 7. भारतीय संविधान का कौन सा अनुच्छेद 'भाषण और अभिव्यक्ति की स्वतंत्रता' की गारंटी देता है?",
        answers: shuffle([
            { text: "अनुच्छेद 19(1)(a)", correct: true },
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 19(1)(a) सभी नागरिकों को भाषण और अभिव्यक्ति की स्वतंत्रता का अधिकार देता है, हालांकि इस पर राज्य द्वारा उचित प्रतिबंध लगाए जा सकते हैं।"
    },
    {
        question: "प्रश्न 8. 'प्राण और दैहिक स्वतंत्रता का संरक्षण' (Protection of Life and Personal Liberty) किस अनुच्छेद में वर्णित है?",
        answers: shuffle([
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: true },
            { text: "अनुच्छेद 21A", correct: false },
            { text: "अनुच्छेद 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 21 घोषित करता है कि किसी भी व्यक्ति को कानून द्वारा स्थापित प्रक्रिया के अलावा उसके जीवन या व्यक्तिगत स्वतंत्रता से वंचित नहीं किया जाएगा।"
    },
    {
        question: "प्रश्न 9. 6 से 14 वर्ष की आयु के बच्चों के लिए शिक्षा का अधिकार किस संशोधन द्वारा एक मौलिक अधिकार बनाया गया?",
        answers: shuffle([
            { text: "42वां संशोधन", correct: false },
            { text: "44वां संशोधन", correct: false },
            { text: "86वां संशोधन", correct: true },
            { text: "91वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 86वें संविधान संशोधन अधिनियम, 2002 द्वारा संविधान में अनुच्छेद 21A जोड़ा गया, जिसने 6 से 14 वर्ष के बच्चों के लिए शिक्षा को एक मौलिक अधिकार बना दिया।"
    },
    {
        question: "प्रश्न 10. मौलिक कर्तव्यों को भारतीय संविधान में किस समिति की सिफारिश पर शामिल किया गया था?",
        answers: shuffle([
            { text: "सरकारिया आयोग", correct: false },
            { text: "बलवंत राय मेहता समिति", correct: false },
            { text: "स्वर्ण सिंह समिति", correct: true },
            { text: "अशोक मेहता समिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1976 में 42वें संशोधन द्वारा स्वर्ण सिंह समिति की सिफारिशों के आधार पर संविधान के भाग IV-A में अनुच्छेद 51-A के तहत मौलिक कर्तव्यों को जोड़ा गया था।"
    },
    {
        question: "प्रश्न 11. भारतीय संविधान में मौलिक कर्तव्य किस देश के संविधान से प्रेरित हैं?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "आयरलैंड", correct: false },
            { text: "पूर्व सोवियत संघ (USSR)", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक कर्तव्यों की अवधारणा पूर्व सोवियत संघ के संविधान से ली गई है।"
    },
    {
        question: "प्रश्न 12. वर्तमान में संविधान में कुल कितने मौलिक कर्तव्य सूचीबद्ध हैं?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false },
            { text: "8", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में 10 मौलिक कर्तव्य थे।<br><br><i class='fa-solid fa-angles-right icon'></i> 11वां मौलिक कर्तव्य (माता-पिता का अपने 6-14 वर्ष के बच्चों को शिक्षा के अवसर प्रदान करना) 86वें संशोधन, 2002 द्वारा जोड़ा गया था।"
    },
    {
        question: "प्रश्न 13. राज्य के नीति निदेशक तत्व (DPSP) संविधान के किस भाग में हैं?",
        answers: shuffle([
            { text: "भाग II", correct: false },
            { text: "भाग III", correct: false },
            { text: "भाग IV", correct: true },
            { text: "भाग V", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के भाग IV में अनुच्छेद 36 से 51 तक राज्य के नीति निदेशक तत्वों का वर्णन है।"
    },
    {
        question: "प्रश्न 14. 'ग्राम पंचायतों का संगठन' का निर्देश किस अनुच्छेद में दिया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 40", correct: true },
            { text: "अनुच्छेद 44", correct: false },
            { text: "अनुच्छेद 48", correct: false },
            { text: "अनुच्छेद 50", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 40, जो गांधीवादी सिद्धांतों पर आधारित है, राज्य को ग्राम पंचायतों को संगठित करने और उन्हें स्व-शासन की इकाइयों के रूप में कार्य करने के लिए शक्तियां प्रदान करने का निर्देश देता है।"
    },
    {
        question: "प्रश्न 15. 'समान नागरिक संहिता' (Uniform Civil Code) का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 41", correct: false },
            { text: "अनुच्छेद 42", correct: false },
            { text: "अनुच्छेद 43", correct: false },
            { text: "अनुच्छेद 44", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 44 राज्य को यह निर्देश देता है कि वह भारत के समस्त राज्य क्षेत्र में नागरिकों के लिए एक समान नागरिक संहिता प्राप्त करने का प्रयास करेगा।"
    },
    {
        question: "प्रश्न 16. मौलिक अधिकारों और राज्य के नीति निदेशक तत्वों के बीच मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "मौलिक अधिकार वाद योग्य (न्यायालय द्वारा प्रवर्तनीय) हैं, जबकि DPSP नहीं हैं।", correct: true },
            { text: "DPSP वाद योग्य हैं, जबकि मौलिक अधिकार नहीं हैं।", correct: false },
            { text: "दोनों ही वाद योग्य हैं।", correct: false },
            { text: "दोनों ही वाद योग्य नहीं हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक अधिकारों के हनन पर आप न्यायालय जा सकते हैं (अनुच्छेद 32), लेकिन नीति निदेशक तत्वों को लागू करने के लिए आप न्यायालय नहीं जा सकते (अनुच्छेद 37)।"
    },
    {
        question: "प्रश्न 17. निम्नलिखित में से कौन सा एक मौलिक कर्तव्य नहीं है?",
        answers: shuffle([
            { text: "संविधान का पालन करना", correct: false },
            { text: "सार्वजनिक संपत्ति को सुरक्षित रखना", correct: false },
            { text: "राष्ट्रीय महत्व के स्मारकों की रक्षा करना", correct: true },
            { text: "भारत की संप्रभुता, एकता और अखंडता की रक्षा करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय महत्व के स्मारकों की रक्षा करना अनुच्छेद 49 के तहत एक नीति निदेशक तत्व है, न कि मौलिक कर्तव्य।"
    },
    {
        question: "प्रश्न 18. किस अनुच्छेद के तहत सशस्त्र बलों के सदस्यों के मौलिक अधिकारों को संसद द्वारा प्रतिबंधित किया जा सकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 32", correct: false },
            { text: "अनुच्छेद 33", correct: true },
            { text: "अनुच्छेद 34", correct: false },
            { text: "अनुच्छेद 35", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 33 संसद को यह शक्ति देता है कि वह सशस्त्र बलों, अर्धसैनिक बलों, पुलिस बलों आदि के सदस्यों के मौलिक अधिकारों को प्रतिबंधित कर सकती है ताकि वे अपने कर्तव्यों का उचित पालन कर सकें।"
    },
    {
        question: "प्रश्न 19. 'शोषण के विरुद्ध अधिकार' के अंतर्गत क्या निषिद्ध है?",
        answers: shuffle([
            { text: "मानव का दुर्व्यापार और बंधुआ मजदूरी", correct: false },
            { text: "14 वर्ष से कम आयु के बच्चों का कारखानों में नियोजन", correct: false },
            { text: "अस्पृश्यता का आचरण", correct: false },
            { text: "(A) और (B) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 23 मानव दुर्व्यापार और बेगार पर रोक लगाता है, और अनुच्छेद 24 चौदह वर्ष से कम आयु के बच्चों को किसी कारखाने या खान में काम करने से रोकता है।"
    },
    {
        question: "प्रश्न 20. मौलिक अधिकारों को निलंबित करने का आदेश कौन दे सकता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "संसद", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: false },
            { text: "राष्ट्रपति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय आपातकाल (अनुच्छेद 352) के दौरान, राष्ट्रपति एक आदेश द्वारा मौलिक अधिकारों को निलंबित कर सकते हैं, लेकिन अनुच्छेद 20 और 21 को निलंबित नहीं किया जा सकता।"
    },
    {
        question: "प्रश्न 21. 'कार्यपालिका से न्यायपालिका का पृथक्करण' का प्रावधान संविधान में कहाँ है?",
        answers: shuffle([
            { text: "प्रस्तावना में", correct: false },
            { text: "मौलिक अधिकारों में", correct: false },
            { text: "राज्य के नीति निदेशक तत्वों में", correct: true },
            { text: "सातवीं अनुसूची में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 50 राज्य को लोक सेवाओं में न्यायपालिका को कार्यपालिका से अलग करने के लिए कदम उठाने का निर्देश देता है।"
    },
    {
        question: "प्रश्न 22. 'धार्मिक स्वतंत्रता के अधिकार' के तहत क्या शामिल नहीं है?",
        answers: shuffle([
            { text: "अपने धर्म को मानने, आचरण करने और प्रचार करने की स्वतंत्रता", correct: false },
            { text: "धार्मिक कार्यों के प्रबंधन की स्वतंत्रता", correct: false },
            { text: "किसी विशेष धर्म की अभिवृद्धि के लिए करों के संदाय से स्वतंत्रता", correct: false },
            { text: "जबरन धर्म परिवर्तन कराने की स्वतंत्रता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धार्मिक स्वतंत्रता का अधिकार जबरन धर्म परिवर्तन या प्रलोभन द्वारा धर्म परिवर्तन की अनुमति नहीं देता है।"
    },
    {
        question: "प्रश्न 23. 'अल्पसंख्यकों के हितों का संरक्षण' किस अनुच्छेद से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 25", correct: false },
            { text: "अनुच्छेद 27", correct: false },
            { text: "अनुच्छेद 29", correct: true },
            { text: "अनुच्छेद 30", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 29 भारत के किसी भी भाग में रहने वाले नागरिकों के किसी भी अनुभाग को अपनी विशेष भाषा, लिपि या संस्कृति को बनाए रखने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 24. किस अनुच्छेद के तहत अल्पसंख्यक अपनी पसंद के शिक्षण संस्थानों की स्थापना और प्रशासन कर सकते हैं?",
        answers: shuffle([
            { text: "अनुच्छेद 28", correct: false },
            { text: "अनुच्छेद 29", correct: false },
            { text: "अनुच्छेद 30", correct: true },
            { text: "अनुच्छेद 31", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 30 सभी धर्म या भाषा पर आधारित अल्पसंख्यक वर्गों को अपनी रुचि की शिक्षा संस्थाओं की स्थापना और प्रशासन का अधिकार देता है।"
    },
    {
        question: "प्रश्न 25. राज्य के नीति निदेशक तत्व किस देश के संविधान से लिए गए हैं?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "आयरलैंड", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "दक्षिण अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> DPSP की अवधारणा 1937 के आयरिश संविधान से प्रेरित है, जिसने इसे स्पेनिश संविधान से लिया था।"
    },
     {
        question: "प्रश्न 26. निम्नलिखित में से कौन सा गांधीवादी सिद्धांत पर आधारित एक निदेशक तत्व है?",
        answers: shuffle([
            { text: "समान कार्य के लिए समान वेतन", correct: false },
            { text: "समान नागरिक संहिता", correct: false },
            { text: "कुटीर उद्योगों को प्रोत्साहन", correct: true },
            { text: "कार्यपालिका से न्यायपालिका का पृथक्करण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 43 के तहत कुटीर उद्योगों को बढ़ावा देना गांधीजी के ग्राम स्वराज्य और आत्मनिर्भरता के दर्शन पर आधारित है।"
    },
    {
        question: "प्रश्न 27. 'अंतर्राष्ट्रीय शांति और सुरक्षा की अभिवृद्धि' का उल्लेख कहाँ है?",
        answers: shuffle([
            { text: "प्रस्तावना", correct: false },
            { text: "मौलिक कर्तव्य", correct: false },
            { text: "अनुच्छेद 51 (DPSP)", correct: true },
            { text: "नौवीं अनुसूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 51, जो नीति निदेशक तत्वों का अंतिम अनुच्छेद है, राज्य को अंतर्राष्ट्रीय शांति और सुरक्षा को बढ़ावा देने का निर्देश देता है।"
    },
    {
        question: "प्रश्न 28. 'निवारक निरोध' (Preventive Detention) का उल्लेख किस मौलिक अधिकार के तहत किया गया है?",
        answers: shuffle([
            { text: "समानता का अधिकार", correct: false },
            { text: "स्वतंत्रता का अधिकार", correct: true },
            { text: "शोषण के विरुद्ध अधिकार", correct: false },
            { text: "संवैधानिक उपचारों का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 22 कुछ दशाओं में गिरफ्तारी और निरोध से संरक्षण प्रदान करता है, और इसी में निवारक निरोध से संबंधित प्रावधान भी हैं।"
    },
    {
        question: "प्रश्न 29. किस मामले में सर्वोच्च न्यायालय ने यह निर्णय दिया कि मौलिक अधिकारों में संशोधन किया जा सकता है, लेकिन 'मूल ढांचे' में नहीं?",
        answers: shuffle([
            { text: "गोलकनाथ मामला", correct: false },
            { text: "केशवानंद भारती मामला", correct: true },
            { text: "मिनर्वा मिल्स मामला", correct: false },
            { text: "मेनका गांधी मामला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1973 के ऐतिहासिक केशवानंद भारती बनाम केरल राज्य मामले में, सर्वोच्च न्यायालय ने 'संविधान के मूल ढांचे' का सिद्धांत प्रतिपादित किया।"
    },
    {
        question: "प्रश्न 30. निम्नलिखित में से कौन सा अधिकार केवल भारतीय नागरिकों को प्राप्त है, विदेशियों को नहीं?",
        answers: shuffle([
            { text: "विधि के समक्ष समता (अनुच्छेद 14)", correct: false },
            { text: "प्राण और दैहिक स्वतंत्रता का संरक्षण (अनुच्छेद 21)", correct: false },
            { text: "धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर विभेद का प्रतिषेध (अनुच्छेद 15)", correct: true },
            { text: "अपराधों के लिए दोषसिद्धि के संबंध में संरक्षण (अनुच्छेद 20)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 15, 16, 19, 29 और 30 में दिए गए अधिकार केवल भारतीय नागरिकों के लिए उपलब्ध हैं।"
    },
    {
        question: "प्रश्न 31. 'वैज्ञानिक दृष्टिकोण, मानववाद और ज्ञानार्जन तथा सुधार की भावना का विकास करना' क्या है?",
        answers: shuffle([
            { text: "एक मौलिक अधिकार", correct: false },
            { text: "एक मौलिक कर्तव्य", correct: true },
            { text: "एक नीति निदेशक तत्व", correct: false },
            { text: "प्रस्तावना का एक आदर्श", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51A(h) के तहत भारत के प्रत्येक नागरिक का एक मौलिक कर्तव्य है।"
    },
    {
        question: "प्रश्न 32. मौलिक कर्तव्यों की प्रकृति कैसी है?",
        answers: shuffle([
            { text: "वाद योग्य", correct: false },
            { text: "गैर-वाद योग्य (Non-justiciable)", correct: true },
            { text: "कुछ वाद योग्य और कुछ नहीं", correct: false },
            { text: "राष्ट्रपति द्वारा प्रवर्तनीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीति निदेशक तत्वों की तरह ही, मौलिक कर्तव्यों को भी कानून द्वारा सीधे लागू नहीं किया जा सकता है, अर्थात उनके उल्लंघन पर कोई कानूनी कार्रवाई नहीं हो सकती।"
    },
    {
        question: "प्रश्न 33. 'पर्यावरण का संरक्षण तथा संवर्धन और वन तथा वन्य जीवों की रक्षा' का प्रावधान कहाँ मिलता है?",
        answers: shuffle([
            { text: "केवल नीति निदेशक तत्वों में", correct: false },
            { text: "केवल मौलिक कर्तव्यों में", correct: false },
            { text: "नीति निदेशक तत्वों और मौलिक कर्तव्यों दोनों में", correct: true },
            { text: "केवल मौलिक अधिकारों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 48A (DPSP) राज्य को पर्यावरण की रक्षा करने का निर्देश देता है, जबकि अनुच्छेद 51A(g) (मौलिक कर्तव्य) इसे नागरिकों का कर्तव्य बनाता है।"
    },
    {
        question: "प्रश्न 34. 'अधिकारपृच्छा' (Quo Warranto) रिट का क्या अर्थ है?",
        answers: shuffle([
            { text: "हम आदेश देते हैं", correct: false },
            { text: "शरीर को प्रस्तुत करो", correct: false },
            { text: "किस अधिकार से?", correct: true },
            { text: "रोकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रिट अदालत द्वारा किसी व्यक्ति को यह पूछने के लिए जारी की जाती है कि वह किस अधिकार या वारंट से कोई सार्वजनिक पद धारण कर रहा है।"
    },
    {
        question: "प्रश्न 35. किस संशोधन ने यह प्रावधान किया कि राष्ट्रपति राष्ट्रीय आपातकाल के दौरान भी अनुच्छेद 20 और 21 को निलंबित नहीं कर सकते?",
        answers: shuffle([
            { text: "42वां संशोधन", correct: false },
            { text: "44वां संशोधन", correct: true },
            { text: "61वां संशोधन", correct: false },
            { text: "86वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संविधान संशोधन अधिनियम, 1978 ने यह सुनिश्चित किया कि जीवन और व्यक्तिगत स्वतंत्रता का अधिकार आपातकाल में भी निलंबित नहीं किया जा सकता।"
    },
    {
        question: "प्रश्न 36. उपाधियों का अंत (Abolition of Titles) किस अनुच्छेद के अंतर्गत आता है?",
        answers: shuffle([
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: false },
            { text: "अनुच्छेद 18", correct: true },
            { text: "अनुच्छेद 19", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 18 राज्य को सेना या विद्या संबंधी सम्मान के सिवाय और कोई उपाधि प्रदान करने से रोकता है।"
    },
    {
        question: "प्रश्न 37. 'निजता का अधिकार' (Right to Privacy) को सर्वोच्च न्यायालय ने किस अनुच्छेद का हिस्सा माना है?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: true },
            { text: "अनुच्छेद 14", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> के.एस. पुट्टस्वामी बनाम भारत संघ (2017) मामले में, सर्वोच्च न्यायालय की नौ-न्यायाधीशों की पीठ ने सर्वसम्मति से निजता के अधिकार को अनुच्छेद 21 के तहत जीवन और व्यक्तिगत स्वतंत्रता के अधिकार का एक अंतर्निहित हिस्सा घोषित किया।"
    },
    {
        question: "प्रश्न 38. परमादेश (Mandamus) रिट किसके विरुद्ध जारी की जा सकती है?",
        answers: shuffle([
            { text: "किसी सार्वजनिक अधिकारी के विरुद्ध, उसे अपने कानूनी कर्तव्यों का पालन करने के लिए", correct: true },
            { text: "निजी व्यक्तियों के विरुद्ध", correct: false },
            { text: "भारत के राष्ट्रपति के विरुद्ध", correct: false },
            { text: "उच्च न्यायालय के मुख्य न्यायाधीश के विरुद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परमादेश' का अर्थ है 'हम आदेश देते हैं'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रिट किसी सार्वजनिक अधिकारी, निगम या निचली अदालत को उसके सार्वजनिक कर्तव्यों का पालन करने का आदेश देने के लिए जारी की जाती है।"
    },
    {
        question: "प्रश्न 39. संविधान के किन अनुच्छेदों को 'सामाजिक और आर्थिक न्याय का घोषणापत्र' कहा जा सकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 14-18", correct: false },
            { text: "अनुच्छेद 19-22", correct: false },
            { text: "अनुच्छेद 25-28", correct: false },
            { text: "अनुच्छेद 36-51", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य के नीति निदेशक तत्व (अनुच्छेद 36-51) एक कल्याणकारी राज्य की स्थापना का लक्ष्य रखते हैं और सामाजिक तथा आर्थिक लोकतंत्र के आदर्शों को बढ़ावा देते हैं।"
    },
    {
        question: "प्रश्न 40. मौलिक अधिकारों और नीति निदेशक तत्वों को 'संविधान की अंतरात्मा' किसने कहा?",
        answers: shuffle([
            { text: "बी.आर. अंबेडकर", correct: false },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "ग्रैनविले ऑस्टिन", correct: true },
            { text: "के.एम. मुंशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध संविधान विशेषज्ञ ग्रैनविले ऑस्टिन ने अपनी पुस्तक 'द इंडियन कॉन्स्टिट्यूशन: कॉर्नरस्टोन ऑफ ए नेशन' में मौलिक अधिकारों और DPSP को 'संविधान की अंतरात्मा' के रूप में वर्णित किया है।"
    },
    {
        question: "प्रश्न 41. यदि कोई कानून मौलिक अधिकारों का उल्लंघन करता है, तो उसे शून्य घोषित करने की शक्ति किसके पास है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "महान्यायवादी", correct: false },
            { text: "सर्वोच्च न्यायालय और उच्च न्यायालय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 13 के तहत, सर्वोच्च न्यायालय (अनुच्छेद 32) और उच्च न्यायालय (अनुच्छेद 226) को न्यायिक समीक्षा की शक्ति प्राप्त है, जिससे वे मौलिक अधिकारों के विरुद्ध किसी भी कानून को शून्य घोषित कर सकते हैं।"
    },
    {
        question: "प्रश्न 42. \"सार्वजनिक संपत्ति की रक्षा करना और हिंसा से दूर रहना\" भारत के संविधान में क्या है?",
        answers: shuffle([
            { text: "एक कानूनी अधिकार", correct: false },
            { text: "एक मौलिक कर्तव्य", correct: true },
            { text: "एक नीति निदेशक सिद्धांत", correct: false },
            { text: "एक सामाजिक आदर्श", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51A(i) के तहत प्रत्येक भारतीय नागरिक का एक मौलिक कर्तव्य है।"
    },
    {
        question: "प्रश्न 43. 'काम की न्यायसंगत और मानवोचित दशाओं' का प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 41", correct: false },
            { text: "अनुच्छेद 42", correct: true },
            { text: "अनुच्छेद 43", correct: false },
            { text: "अनुच्छेद 43A", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 42 राज्य को काम की न्यायसंगत और मानवोचित दशाओं को सुनिश्चित करने और प्रसूति सहायता के लिए उपबंध करने का निर्देश देता है।"
    },
    {
        question: "प्रश्न 44. 'मार्शल लॉ' (सैन्य शासन) लागू होने पर किस अनुच्छेद के तहत मौलिक अधिकारों पर प्रतिबंध लग सकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 33", correct: false },
            { text: "अनुच्छेद 34", correct: true },
            { text: "अनुच्छेद 358", correct: false },
            { text: "अनुच्छेद 359", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 34 संसद को यह अधिकार देता है कि जब किसी क्षेत्र में मार्शल लॉ लागू हो, तो वह वहां के लोगों के मौलिक अधिकारों को प्रतिबंधित कर सकती है।"
    },
    {
        question: "प्रश्न 45. वर्मा समिति (1999) का गठन किस उद्देश्य से किया गया था?",
        answers: shuffle([
            { text: "मौलिक अधिकारों में सुधार के लिए", correct: false },
            { text: "कुछ मौलिक कर्तव्यों के कार्यान्वयन के लिए कानूनी प्रावधानों की पहचान करने के लिए", correct: true },
            { text: "केंद्र-राज्य संबंधों की समीक्षा के लिए", correct: false },
            { text: "चुनाव सुधारों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यायमूर्ति जे.एस. वर्मा समिति का गठन कुछ मौलिक कर्तव्यों को प्रभावी बनाने के लिए मौजूदा कानूनी प्रावधानों की पहचान और विश्लेषण करने के लिए किया गया था।"
    },
    {
        question: "प्रश्न 46. निम्नलिखित में से कौन सा अधिकार अब एक मौलिक अधिकार नहीं है?",
        answers: shuffle([
            { text: "हड़ताल का अधिकार", correct: false },
            { text: "संपत्ति का अधिकार", correct: true },
            { text: "सूचना का अधिकार", correct: false },
            { text: "शिक्षा का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संपत्ति का अधिकार 44वें संशोधन, 1978 के बाद एक मौलिक अधिकार नहीं रहा; यह अब अनुच्छेद 300-A के तहत केवल एक कानूनी या संवैधानिक अधिकार है।"
    },
    {
        question: "प्रश्न 47. \"हमारी सामाजिक संस्कृति की गौरवशाली परंपरा का महत्व समझना और उसका परिरक्षण करना\" एक है:",
        answers: shuffle([
            { text: "मौलिक अधिकार", correct: false },
            { text: "मौलिक कर्तव्य", correct: true },
            { text: "नीति निदेशक तत्व", correct: false },
            { text: "सामाजिक नीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51A(f) के तहत वर्णित एक मौलिक कर्तव्य है।"
    },
    {
        question: "प्रश्न 48. 'उत्प्रेषण' (Certiorari) रिट का उद्देश्य क्या है?",
        answers: shuffle([
            { text: "किसी व्यक्ति को पद धारण करने से रोकना", correct: false },
            { text: "किसी निचली अदालत या न्यायाधिकरण को उसके अधिकार क्षेत्र से बाहर काम करने से रोकना", correct: false },
            { text: "किसी निचली अदालत में लंबित मामले को उच्च अदालत में स्थानांतरित करना या उसके फैसले को रद्द करना", correct: true },
            { text: "किसी सार्वजनिक अधिकारी को कार्य करने का आदेश देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्प्रेषण रिट का अर्थ है 'प्रमाणित होना' या 'सूचित करना'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक उच्च न्यायालय द्वारा निचली अदालत को जारी किया जाता है ताकि वह अपने पास लंबित मामले को उच्च न्यायालय को भेज सके।"
    },
    {
        question: "प्रश्न 49. 'लोक नियोजन के विषय में अवसर की समता' किस अनुच्छेद में दी गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 14", correct: false },
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: true },
            { text: "अनुच्छेद 17", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 16 राज्य के अधीन किसी भी पद पर नियोजन या नियुक्ति से संबंधित विषयों में सभी नागरिकों के लिए अवसर की समानता की गारंटी देता है।"
    },
    {
        question: "प्रश्न 50. नीति निदेशक तत्वों का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "एक पुलिस राज्य की स्थापना करना", correct: false },
            { text: "एक कल्याणकारी राज्य की स्थापना करना", correct: true },
            { text: "राजनीतिक लोकतंत्र सुनिश्चित करना", correct: false },
            { text: "सरकार के लिए राजस्व जुटाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निदेशक तत्वों का उद्देश्य सामाजिक और आर्थिक लोकतंत्र की स्थापना करना है, जिससे भारत एक 'कल्याणकारी राज्य' बन सके।"
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