const questions = [
    {
        topHeading: "मौलिक अधिकारों की श्रेणियों पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान का कौन सा अनुच्छेद 'कानून के समक्ष समानता' को परिभाषित करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 14", correct: true },
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 14 के अनुसार, राज्य भारत के राज्यक्षेत्र में किसी व्यक्ति को विधि के समक्ष समता से या विधियों के समान संरक्षण से वंचित नहीं करेगा।"
    },
    {
        question: "प्रश्न 2. भारतीय संविधान के किस अनुच्छेद के तहत 'अस्पृश्यता' (छुआछूत) का अंत किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: true },
            { text: "अनुच्छेद 18", correct: false },
            { text: "अनुच्छेद 19", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 17 अस्पृश्यता को समाप्त करने की व्यवस्था करता है और किसी भी रूप में इसका आचरण निषिद्ध करता है।"
    },
    {
        question: "प्रश्न 3. निम्नलिखित में से कौन सा 'स्वतंत्रता के अधिकार' में शामिल नहीं है?",
        answers: shuffle([
            { text: "भाषण और अभिव्यक्ति की स्वतंत्रता", correct: false },
            { text: "शांतिपूर्वक सम्मेलन करने की स्वतंत्रता", correct: false },
            { text: "संपत्ति का अधिकार", correct: true },
            { text: "भारत के राज्यक्षेत्र में कहीं भी आने-जाने की स्वतंत्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संपत्ति के अधिकार को 44वें संविधान संशोधन (1978) द्वारा मौलिक अधिकारों की सूची से हटाकर अनुच्छेद 300-A के तहत एक कानूनी अधिकार बना दिया गया।"
    },
    {
        question: "प्रश्न 4. किस अनुच्छेद के तहत किसी भी व्यक्ति को एक ही अपराध के लिए एक बार से अधिक दंडित नहीं किया जा सकता?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 20", correct: true },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 20(2) दोहरे दंड से संरक्षण प्रदान करता है, जिसका अर्थ है कि किसी भी व्यक्ति पर एक ही अपराध के लिए एक से अधिक बार मुकदमा नहीं चलाया जाएगा और न ही उसे दंडित किया जाएगा।"
    },
    {
        question: "प्रश्न 5. 'प्राण और दैहिक स्वतंत्रता का संरक्षण' किस अनुच्छेद से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: true },
            { text: "अनुच्छेद 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 21 यह प्रावधान करता है कि किसी भी व्यक्ति को विधि द्वारा स्थापित प्रक्रिया के अतिरिक्त उसके जीवन और वैयक्तिक स्वतंत्रता के अधिकार से वंचित नहीं किया जा सकता है।"
    },
    {
        question: "प्रश्न 6. भारतीय संविधान का कौन सा अनुच्छेद 6 से 14 वर्ष की आयु के बच्चों को निःशुल्क और अनिवार्य शिक्षा का अधिकार देता है?",
        answers: shuffle([
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 21-A", correct: true },
            { text: "अनुच्छेद 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 86वें संविधान संशोधन अधिनियम, 2002 द्वारा अनुच्छेद 21-A जोड़ा गया, जो 6 से 14 वर्ष की आयु के सभी बच्चों के लिए निःशुल्क और अनिवार्य शिक्षा को मौलिक अधिकार बनाता है।"
    },
    {
        question: "प्रश्न 7. 'शोषण के विरुद्ध अधिकार' किन अनुच्छेदों में वर्णित है?",
        answers: shuffle([
            { text: "अनुच्छेद 19-22", correct: false },
            { text: "अनुच्छेद 23-24", correct: true },
            { text: "अनुच्छेद 25-28", correct: false },
            { text: "अनुच्छेद 29-30", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 23 मानव के दुर्व्यापार और बलात् श्रम का प्रतिषेध करता है, जबकि अनुच्छेद 24 कारखानों आदि में बच्चों के नियोजन का प्रतिषेध करता है।"
    },
    {
        question: "प्रश्न 8. किस अनुच्छेद के अनुसार 14 वर्ष से कम आयु के किसी भी बच्चे को किसी कारखाने या खान में काम करने के लिए नियोजित नहीं किया जाएगा?",
        answers: shuffle([
            { text: "अनुच्छेद 22", correct: false },
            { text: "अनुच्छेद 23", correct: false },
            { text: "अनुच्छेद 24", correct: true },
            { text: "अनुच्छेद 25", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद बाल श्रम पर रोक लगाता है और बच्चों के स्वास्थ्य और सुरक्षा को सुनिश्चित करता है।"
    },
    {
        question: "प्रश्न 9. भारतीय संविधान का कौन सा अनुच्छेद अंतःकरण की और धर्म को अबाध रूप से मानने, आचरण करने और प्रचार करने की स्वतंत्रता देता है?",
        answers: shuffle([
            { text: "अनुच्छेद 25", correct: true },
            { text: "अनुच्छेद 26", correct: false },
            { text: "अनुच्छेद 27", correct: false },
            { text: "अनुच्छेद 28", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद भारत के सभी नागरिकों को धार्मिक स्वतंत्रता का अधिकार प्रदान करता है।"
    },
    {
        question: "प्रश्न 10. 'संवैधानिक उपचारों का अधिकार' किस अनुच्छेद के तहत प्रदान किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 30", correct: false },
            { text: "अनुच्छेद 31", correct: false },
            { text: "अनुच्छेद 32", correct: true },
            { text: "अनुच्छेद 226", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 32 मौलिक अधिकारों को प्रवर्तित कराने के लिए उच्चतम न्यायालय जाने का अधिकार देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> डॉ. अंबेडकर ने इसे 'संविधान की आत्मा और हृदय' कहा था।"
    },
    {
        question: "प्रश्न 11. मौलिक अधिकारों के प्रवर्तन के लिए उच्चतम न्यायालय कितने प्रकार की रिट जारी कर सकता है?",
        answers: shuffle([
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: true },
            { text: "छह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम न्यायालय अनुच्छेद 32 के तहत पाँच प्रकार की रिट जारी कर सकता है: बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण और अधिकार-पृच्छा।"
    },
    {
        question: "प्रश्न 12. 'बंदी प्रत्यक्षीकरण' (Habeas Corpus) रिट का क्या अर्थ है?",
        answers: shuffle([
            { text: "हम आदेश देते हैं", correct: false },
            { text: "'शरीर को प्रस्तुत करो'", correct: true },
            { text: "प्रमाणित होना", correct: false },
            { text: "किस अधिकार से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रिट उस व्यक्ति के संबंध में न्यायालय द्वारा जारी की जाती है जिसे दूसरे द्वारा हिरासत में रखा गया है, ताकि उसे न्यायालय के समक्ष प्रस्तुत किया जा सके।"
    },
    {
        question: "प्रश्न 13. कौन सा अनुच्छेद राज्य को सैन्य या अकादमिक विशिष्टता को छोड़कर कोई भी उपाधि प्रदान करने से रोकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: false },
            { text: "अनुच्छेद 18", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 18 'उपाधियों के अंत' से संबंधित है, जिसका उद्देश्य सामाजिक समानता को बढ़ावा देना है।"
    },
    {
        question: "प्रश्न 14. निम्नलिखित में से किस अधिकार को आपातकाल के दौरान भी निलंबित नहीं किया जा सकता है?",
        answers: shuffle([
            { text: "भाषण की स्वतंत्रता का अधिकार", correct: false },
            { text: "जीवन और व्यक्तिगत स्वतंत्रता का अधिकार", correct: true },
            { text: "संवैधानिक उपचारों का अधिकार", correct: false },
            { text: "भारत में कहीं भी घूमने का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 20 और 21 द्वारा प्रदत्त अधिकारों को राष्ट्रीय आपातकाल के दौरान भी निलंबित नहीं किया जा सकता है।"
    },
    {
        question: "प्रश्न 15. अनुच्छेद 19 के तहत दी गई स्वतंत्रताएँ किस आधार पर प्रतिबंधित की जा सकती हैं?",
        answers: shuffle([
            { text: "राज्य की सुरक्षा", correct: false },
            { text: "विदेशी राज्यों के साथ मैत्रीपूर्ण संबंध", correct: false },
            { text: "सार्वजनिक व्यवस्था, शालीनता या नैतिकता", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 19(2) से 19(6) में उल्लिखित आधारों पर भाषण, सम्मेलन, संघ आदि की स्वतंत्रताओं पर उचित प्रतिबंध लगाए जा सकते हैं।"
    },
    {
        question: "प्रश्न 16. 'संस्कृति और शिक्षा संबंधी अधिकार' का वर्णन किन अनुच्छेदों में है?",
        answers: shuffle([
            { text: "अनुच्छेद 25-26", correct: false },
            { text: "अनुच्छेद 27-28", correct: false },
            { text: "अनुच्छेद 29-30", correct: true },
            { text: "अनुच्छेद 31-32", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये अनुच्छेद भारत में अल्पसंख्यक वर्गों के हितों के संरक्षण और उन्हें शिक्षण संस्थानों की स्थापना और प्रशासन का अधिकार देते हैं।"
    },
    {
        question: "प्रश्न 17. कौन सा अनुच्छेद अल्पसंख्यक वर्गों को अपनी भाषा, लिपि या संस्कृति को बनाए रखने का अधिकार देता है?",
        answers: shuffle([
            { text: "अनुच्छेद 29", correct: true },
            { text: "अनुच्छेद 30", correct: false },
            { text: "अनुच्छेद 25", correct: false },
            { text: "अनुच्छेद 14", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 29(1) भारत के किसी भी भाग में रहने वाले नागरिकों के किसी भी अनुभाग को, जिसकी अपनी विशेष भाषा, लिपि या संस्कृति है, उसे बनाए रखने का अधिकार होगा।"
    },
    {
        question: "प्रश्न 18. कौन सा मौलिक अधिकार केवल भारतीय नागरिकों को प्राप्त है, विदेशियों को नहीं?",
        answers: shuffle([
            { text: "कानून के समक्ष समानता", correct: false },
            { text: "जीवन और व्यक्तिगत स्वतंत्रता का संरक्षण", correct: false },
            { text: "धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर भेदभाव का निषेध", correct: true },
            { text: "शोषण के विरुद्ध अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 15, 16, 19, 29 और 30 द्वारा प्रदत्त मौलिक अधिकार केवल भारतीय नागरिकों के लिए हैं।"
    },
    {
        question: "प्रश्न 19. 'परमादेश' (Mandamus) रिट का क्या अर्थ है?",
        answers: shuffle([
            { text: "हम आदेश देते हैं", correct: true },
            { text: "शरीर को प्रस्तुत करना", correct: false },
            { text: "मना करना", correct: false },
            { text: "किस अधिकार से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक न्यायिक रिट है जो किसी सार्वजनिक प्राधिकारी को उसके कानूनी कर्तव्यों का पालन करने का निर्देश देती है।"
    },
    {
        question: "प्रश्न 20. किस संशोधन अधिनियम द्वारा मौलिक कर्तव्यों को भारतीय संविधान में जोड़ा गया?",
        answers: shuffle([
            { text: "42वां संशोधन", correct: true },
            { text: "44वां संशोधन", correct: false },
            { text: "52वां संशोधन", correct: false },
            { text: "86वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वर्ण सिंह समिति की सिफारिशों पर 1976 में 42वें संविधान संशोधन द्वारा संविधान में भाग IV-A और अनुच्छेद 51-A जोड़कर मौलिक कर्तव्यों को शामिल किया गया।"
    },
    {
        question: "प्रश्न 21. अनुच्छेद 15 के अनुसार, राज्य किसी नागरिक के विरुद्ध केवल किन आधारों पर भेदभाव नहीं कर सकता?",
        answers: shuffle([
            { text: "केवल धर्म, मूलवंश, जाति", correct: false },
            { text: "केवल लिंग, जन्मस्थान", correct: false },
            { text: "धर्म, मूलवंश, जाति, लिंग, जन्मस्थान या इनमें से किसी के आधार पर", correct: true },
            { text: "धर्म, मूलवंश और निवास स्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 15 सार्वजनिक स्थानों पर भेदभाव पर रोक लगाता है और सामाजिक समानता को बढ़ावा देता है।"
    },
    {
        question: "प्रश्न 22. 'निवारक निरोध' (Preventive Detention) का उल्लेख किस मौलिक अधिकार के तहत किया गया है?",
        answers: shuffle([
            { text: "समता का अधिकार", correct: false },
            { text: "स्वतंत्रता का अधिकार", correct: true },
            { text: "शोषण के विरुद्ध अधिकार", correct: false },
            { text: "संवैधानिक उपचारों का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 22 कुछ दशाओं में गिरफ्तारी और निरोध से संरक्षण प्रदान करता है, जिसमें निवारक निरोध से संबंधित प्रावधान भी शामिल हैं।"
    },
    {
        question: "प्रश्न 23. मौलिक अधिकारों का संरक्षक कौन है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "संसद", correct: false },
            { text: "न्यायपालिका", correct: true },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम न्यायालय (अनुच्छेद 32) और उच्च न्यायालय (अनुच्छेद 226) मौलिक अधिकारों के प्रवर्तन के लिए जिम्मेदार हैं और इन्हें अधिकारों का संरक्षक माना जाता है।"
    },
    {
        question: "प्रश्न 24. कौन सा अनुच्छेद धार्मिक कार्यों के प्रबंधन की स्वतंत्रता प्रदान करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 25", correct: false },
            { text: "अनुच्छेद 26", correct: true },
            { text: "अनुच्छेद 27", correct: false },
            { text: "अनुच्छेद 28", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद प्रत्येक धार्मिक संप्रदाय या उसके किसी अनुभाग को धार्मिक और धर्मार्थ उद्देश्यों के लिए संस्थानों की स्थापना और रखरखाव का अधिकार देता है।"
    },
    {
        question: "प्रश्न 25. मौलिक अधिकारों को निलंबित करने का अधिकार किसके पास है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "सर्वोच्च न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय आपातकाल (अनुच्छेद 352) के दौरान, राष्ट्रपति अनुच्छेद 20 और 21 को छोड़कर अन्य मौलिक अधिकारों को निलंबित कर सकते हैं।"
    },
     {
        question: "प्रश्न 26: 'उत्प्रेषण' (Certiorari) रिट किसके विरुद्ध जारी की जाती है?",
        answers: shuffle([
            { text: "एक निजी व्यक्ति", correct: false },
            { text: "एक सार्वजनिक अधिकारी", correct: false },
            { text: "एक अधीनस्थ न्यायालय या न्यायिक निकाय", correct: true },
            { text: "एक विधायी निकाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रिट एक उच्च न्यायालय द्वारा अधीनस्थ न्यायालय को जारी की जाती है ताकि वह अपने पास लंबित मामले को समीक्षा के लिए उच्च न्यायालय में भेज सके।"
    },
    {
        question: "प्रश्न 27: लोक नियोजन के विषय में 'अवसर की समता' किस अनुच्छेद में दी गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 14", correct: false },
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: true },
            { text: "अनुच्छेद 18", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 16 राज्य के अधीन किसी भी पद पर नियोजन या नियुक्ति से संबंधित विषयों में सभी नागरिकों के लिए अवसर की समानता की गारंटी देता है।"
    },
    {
        question: "प्रश्न 28: किस मामले में सर्वोच्च न्यायालय ने कहा कि मौलिक अधिकारों में संशोधन किया जा सकता है, लेकिन 'मूल ढांचे' में नहीं?",
        answers: shuffle([
            { text: "गोलकनाथ मामला", correct: false },
            { text: "केशवानंद भारती मामला", correct: true },
            { text: "मिनर्वा मिल्स मामला", correct: false },
            { text: "मेनका गांधी मामला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1973 के केशवानंद भारती बनाम केरल राज्य मामले में, सर्वोच्च न्यायालय ने 'संविधान के मूल ढांचे' का ऐतिहासिक सिद्धांत प्रतिपादित किया।"
    },
    {
        question: "प्रश्न 29: यदि कोई कानून मौलिक अधिकारों का उल्लंघन करता है, तो न्यायालय द्वारा उसे शून्य घोषित करने के सिद्धांत को क्या कहा जाता है?",
        answers: shuffle([
            { text: "पृथक्करणीयता का सिद्धांत", correct: false },
            { text: "न्यायिक समीक्षा", correct: true },
            { text: "आच्छादन का सिद्धांत", correct: false },
            { text: "मूल ढांचे का सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यायिक समीक्षा वह शक्ति है जिसके तहत न्यायपालिका विधायिका द्वारा बनाए गए कानूनों और कार्यपालिका के कार्यों की संवैधानिकता की जांच करती है और यदि वे संविधान (विशेषकर मौलिक अधिकारों) का उल्लंघन करते हैं तो उन्हें अमान्य घोषित कर सकती है।"
    },
    {
        question: "प्रश्न 30: मौलिक अधिकारों की प्रकृति क्या है?",
        answers: shuffle([
            { text: "वाद योग्य", correct: true },
            { text: "अवाद योग्य", correct: false },
            { text: "लचीला", correct: false },
            { text: "कठोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वाद योग्य (Justiciable) होने का अर्थ है कि इनके उल्लंघन पर सीधे न्यायालय में जाया जा सकता है।"
    },
    {
        question: "प्रश्न 31: 'अधिकार-पृच्छा' (Quo Warranto) रिट का उद्देश्य क्या है?",
        answers: shuffle([
            { text: "किसी कार्यवाही को रोकना", correct: false },
            { text: "किसी मामले को स्थानांतरित करना", correct: false },
            { text: "किसी सार्वजनिक पद पर किसी व्यक्ति के दावे की वैधता की जांच करना", correct: true },
            { text: "किसी व्यक्ति को रिहा करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रिट न्यायालय द्वारा यह पूछने के लिए जारी की जाती है कि कोई व्यक्ति किस अधिकार या वारंट से कोई सार्वजनिक पद धारण कर रहा है।"
    },
    {
        question: "प्रश्न 32: कौन सा अनुच्छेद किसी विशिष्ट धर्म की अभिवृद्धि के लिए करों के भुगतान के बारे में स्वतंत्रता से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 25", correct: false },
            { text: "अनुच्छेद 26", correct: false },
            { text: "अनुच्छेद 27", correct: true },
            { text: "अनुच्छेद 28", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसके अनुसार, किसी भी व्यक्ति को किसी विशेष धर्म या धार्मिक संप्रदाय की अभिवृद्धि या पोषण में व्यय करने के लिए करों का भुगतान करने हेतु बाध्य नहीं किया जाएगा।"
    },
    {
        question: "प्रश्न 33: भारतीय संविधान में मौलिक अधिकारों का विचार किस देश के संविधान से लिया गया है?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "कनाडा", correct: false },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान के निर्माताओं ने मौलिक अधिकारों की अवधारणा संयुक्त राज्य अमेरिका के 'बिल ऑफ राइट्स' से प्रेरित होकर अपनाई।"
    },
    {
        question: "प्रश्न 34: वाक् और अभिव्यक्ति की स्वतंत्रता में निम्नलिखित में से क्या शामिल है?",
        answers: shuffle([
            { text: "प्रेस की स्वतंत्रता", correct: false },
            { text: "व्यावसायिक विज्ञापन की स्वतंत्रता", correct: false },
            { text: "फोन टैपिंग के विरुद्ध अधिकार", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्वोच्च न्यायालय ने अपने विभिन्न निर्णयों में इन सभी को अनुच्छेद 19(1)(a) के तहत वाक् और अभिव्यक्ति की स्वतंत्रता का हिस्सा माना है।"
    },
    {
        question: "प्रश्न 35: संविधान के भाग III को भारत का 'मैग्नाकार्टा' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि यह बहुत विस्तृत है", correct: false },
            { text: "क्योंकि यह नागरिकों को न्यायोचित मौलिक अधिकार प्रदान करता है", correct: true },
            { text: "क्योंकि इसे संशोधित नहीं किया जा सकता", correct: false },
            { text: "क्योंकि यह राज्य के नीति निदेशक सिद्धांतों से ऊपर है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैग्नाकार्टा (1215) अधिकारों का वह पहला चार्टर था जो इंग्लैंड के राजा ने अपने नागरिकों को दिया था, इसी तरह भाग III भारत के नागरिकों के लिए अधिकारों का चार्टर है।"
    },
    {
        question: "प्रश्न 36: कौन सा अनुच्छेद राज्य को महिलाओं और बच्चों के लिए विशेष प्रावधान करने की अनुमति देता है?",
        answers: shuffle([
            { text: "अनुच्छेद 15(1)", correct: false },
            { text: "अनुच्छेद 15(3)", correct: true },
            { text: "अनुच्छेद 16(2)", correct: false },
            { text: "अनुच्छेद 16(4)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद समानता के अधिकार का अपवाद है और सकारात्मक भेदभाव की अनुमति देता है ताकि महिलाओं और बच्चों की स्थिति में सुधार हो सके।"
    },
    {
        question: "प्रश्न 37: मौलिक अधिकारों के संबंध में 'कानून द्वारा स्थापित प्रक्रिया' (Procedure established by Law) और 'कानून की उचित प्रक्रिया' (Due process of Law) के बीच मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "दोनों एक ही हैं", correct: false },
            { text: "'कानून द्वारा स्थापित प्रक्रिया' संकीर्ण है, जबकि 'कानून की उचित प्रक्रिया' व्यापक है", correct: true },
            { text: "'कानून की उचित प्रक्रिया' केवल प्रक्रिया की जांच करती है, कानून की नहीं", correct: false },
            { text: "भारत में 'कानून की उचित प्रक्रिया' का पालन होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कानून द्वारा स्थापित प्रक्रिया' (भारत में अनुच्छेद 21) का अर्थ है कि कानून वैध है यदि सही प्रक्रिया का पालन किया गया हो, जबकि 'कानून की उचित प्रक्रिया' (अमेरिका में) यह भी देखती है कि कानून स्वयं उचित, निष्पक्ष और तर्कसंगत है या नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> मेनका गांधी मामले के बाद भारतीय न्यायपालिका ने अनुच्छेद 21 की व्यापक व्याख्या की है।"
    },
    {
        question: "प्रश्न 38: किस मौलिक अधिकार के तहत सिखों को कृपाण धारण करने और ले जाने का अधिकार है?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 25", correct: true },
            { text: "अनुच्छेद 29", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 25 का स्पष्टीकरण I यह कहता है कि कृपाण धारण करना और लेकर चलना सिख धर्म के अंग के रूप में माना जाएगा।"
    },
    {
        question: "प्रश्न 39: कौन सा अनुच्छेद कुछ शिक्षण संस्थानों में धार्मिक शिक्षा या धार्मिक उपासना में उपस्थित होने के बारे में स्वतंत्रता प्रदान करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 25", correct: false },
            { text: "अनुच्छेद 26", correct: false },
            { text: "अनुच्छेद 27", correct: false },
            { text: "अनुच्छेद 28", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसके अनुसार, राज्य-निधि से पूर्णतः पोषित किसी शिक्षा संस्था में कोई धार्मिक शिक्षा नहीं दी जाएगी।"
    },
    {
        question: "प्रश्न 40: मौलिक अधिकार...",
        answers: shuffle([
            { text: "असीमित हैं", correct: false },
            { text: "स्थायी हैं", correct: false },
            { text: "वाद योग्य हैं लेकिन असीमित नहीं", correct: true },
            { text: "केवल गैर-नागरिकों के लिए हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक अधिकार निरपेक्ष या असीमित नहीं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य उन पर सार्वजनिक व्यवस्था, नैतिकता और स्वास्थ्य जैसे आधारों पर उचित प्रतिबंध लगा सकता है।"
    },
    {
        question: "प्रश्न 41: व्यक्तिगत स्वतंत्रता के लिए निम्नलिखित में से कौन सी रिट याचिका दायर की जा सकती है?",
        answers: shuffle([
            { text: "परमादेश (Mandamus)", correct: false },
            { text: "बंदी प्रत्यक्षीकरण (Habeas Corpus)", correct: true },
            { text: "अधिकार-पृच्छा (Quo Warranto)", correct: false },
            { text: "उत्प्रेषण (Certiorari)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी व्यक्ति को अवैध रूप से हिरासत में लिया जाता है तो उसकी रिहाई के लिए बंदी प्रत्यक्षीकरण रिट का उपयोग किया जाता है।"
    },
    {
        question: "प्रश्न 42: भारतीय संविधान द्वारा प्रदत्त निम्न में से कौन सा अधिकार गैर-नागरिकों को भी उपलब्ध है?",
        answers: shuffle([
            { text: "अनुच्छेद 19 के तहत स्वतंत्रताएं", correct: false },
            { text: "लोक नियोजन में अवसर की समानता", correct: false },
            { text: "संवैधानिक उपचारों का अधिकार", correct: true },
            { text: "अल्पसंख्यक अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, 28 जैसे अधिकार नागरिकों और गैर-नागरिकों (विदेशी) दोनों को प्राप्त हैं, और इन अधिकारों के हनन पर वे संवैधानिक उपचार (अनुच्छेद 32) का प्रयोग कर सकते हैं।"
    },
    {
        question: "प्रश्न 43: 'निजता का अधिकार' (Right to Privacy) को सर्वोच्च न्यायालय ने किस मौलिक अधिकार का एक अंतर्निहित हिस्सा माना है?",
        answers: shuffle([
            { text: "स्वतंत्रता का अधिकार (अनुच्छेद 19)", correct: false },
            { text: "जीवन और व्यक्तिगत स्वतंत्रता का अधिकार (अनुच्छेद 21)", correct: true },
            { text: "समता का अधिकार (अनुच्छेद 14)", correct: false },
            { text: "शोषण के विरुद्ध अधिकार (अनुच्छेद 23)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यायमूर्ति के.एस. पुट्टास्वामी (सेवानिवृत्त) बनाम भारत संघ मामले (2017) में, सर्वोच्च न्यायालय की नौ-न्यायाधीशों की पीठ ने सर्वसम्मति से निर्णय दिया कि निजता का अधिकार अनुच्छेद 21 के तहत एक मौलिक अधिकार है।"
    },
    {
        question: "प्रश्न 44: सूचना का अधिकार (Right to Information) है:",
        answers: shuffle([
            { text: "A) एक मौलिक अधिकार", correct: false },
            { text: "B) एक विधिक अधिकार", correct: false },
            { text: "A) और B) दोनों", correct: true },
            { text: "न तो A) और नही B)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूचना का अधिकार अधिनियम, 2005 के तहत यह एक विधिक अधिकार है, लेकिन सर्वोच्च न्यायालय ने इसे अनुच्छेद 19(1)(a) के तहत वाक् और अभिव्यक्ति की स्वतंत्रता के मौलिक अधिकार का एक हिस्सा भी माना है।"
    },
    {
        question: "प्रश्न 45: भारतीय संविधान का कौन सा भाग मौलिक अधिकारों से संबंधित है?",
        answers: shuffle([
            { text: "भाग I", correct: false },
            { text: "भाग II", correct: false },
            { text: "भाग III", correct: true },
            { text: "भाग IV", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान का भाग III (अनुच्छेद 12 से 35) मौलिक अधिकारों का वर्णन करता है।"
    },
    {
        question: "प्रश्न 46: कौन सा अनुच्छेद संसद को यह शक्ति देता है कि वह सशस्त्र बलों, अर्धसैनिक बलों, पुलिस बलों आदि के सदस्यों के मौलिक अधिकारों पर प्रतिबंध लगा सके?",
        answers: shuffle([
            { text: "अनुच्छेद 32", correct: false },
            { text: "अनुच्छेद 33", correct: true },
            { text: "अनुच्छेद 34", correct: false },
            { text: "अनुच्छेद 35", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद संसद को कानून द्वारा यह निर्धारित करने का अधिकार देता है कि इन बलों के सदस्यों के लिए मौलिक अधिकारों का अनुप्रयोग किस सीमा तक प्रतिबंधित या निराकृत किया जाएगा ताकि उनके कर्तव्यों का उचित पालन और उनमें अनुशासन बना रहे।"
    },
    {
        question: "प्रश्न 47: अनुच्छेद 12 के अनुसार, 'राज्य' की परिभाषा में क्या शामिल नहीं है?",
        answers: shuffle([
            { text: "भारत सरकार और संसद", correct: false },
            { text: "राज्य सरकारें और विधानमंडल", correct: false },
            { text: "सभी स्थानीय प्राधिकारी", correct: false },
            { text: "एक निजी कंपनी जो सरकारी अनुबंध पर काम कर रही हो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 12 में 'राज्य' की एक व्यापक परिभाषा दी गई है जिसमें सरकारी और विधायी अंग शामिल हैं, लेकिन सामान्यतः निजी निकाय इसमें शामिल नहीं होते, जब तक कि वे राज्य के साधन के रूप में कार्य न कर रहे हों।"
    },
    {
        question: "प्रश्न 48: यदि किसी क्षेत्र में मार्शल लॉ (सैन्य शासन) लागू हो, तो किस अनुच्छेद के तहत मौलिक अधिकारों पर प्रतिबंध लगाया जा सकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 34", correct: true },
            { text: "अनुच्छेद 33", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 34 यह प्रावधान करता है कि जब किसी क्षेत्र में सैन्य शासन लागू हो, तो संसद कानून द्वारा मौलिक अधिकारों पर प्रतिबंध लगा सकती है।"
    },
    {
        question: "प्रश्न 49: 'विदेश यात्रा का अधिकार' किस अनुच्छेद के तहत एक मौलिक अधिकार है?",
        answers: shuffle([
            { text: "अनुच्छेद 14", correct: false },
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 21", correct: true },
            { text: " कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेनका गांधी बनाम भारत संघ (1978) मामले में, सर्वोच्च न्यायालय ने निर्णय दिया कि 'विदेश यात्रा का अधिकार' अनुच्छेद 21 के तहत प्राण और दैहिक स्वतंत्रता के अधिकार का एक हिस्सा है।"
    },
    {
        question: "प्रश्न 50: मौलिक अधिकारों के बारे में निम्नलिखित में से कौन सा कथन सत्य नहीं है?",
        answers: shuffle([
            { text: "ये सामाजिक और आर्थिक लोकतंत्र को बढ़ावा देते हैं।", correct: true },
            { text: "ये संयुक्त राज्य अमेरिका के संविधान से लिए गए हैं।", correct: false },
            { text: "ये पूर्ण नहीं हैं बल्कि योग्य हैं।", correct: false },
            { text: "ये न्यायोचित हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक अधिकार मुख्य रूप से राजनीतिक लोकतंत्र के आदर्शों को बढ़ावा देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> सामाजिक और आर्थिक लोकतंत्र को बढ़ावा देने का उद्देश्य राज्य के नीति निदेशक सिद्धांतों (भाग IV) का है।"
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