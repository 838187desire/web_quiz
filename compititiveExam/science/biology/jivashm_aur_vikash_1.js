const questions = [
    {
        topHeading: "जीवाश्म और विकास पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1: प्राचीन जीवों के संरक्षित अवशेषों या छापों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "नमूना (Specimen)", correct: false },
            { text: "जीवाश्म (Fossil)", correct: true },
            { text: "तलछट (Sediment)", correct: false },
            { text: "चट्टान (Rock)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीवाश्म लाखों साल पहले जीवित रहने वाले जीवों के पत्थर में परिवर्तित अवशेष, जैसे हड्डियाँ, दाँत, या उनके द्वारा छोड़े गए निशान (जैसे पैरों के निशान) होते हैं।"
    },
    {
        question: "प्रश्न 2: जीवाश्मों के अध्ययन को क्या कहते हैं?",
        answers: shuffle([
            { text: "पारिस्थितिकी (Ecology)", correct: false },
            { text: "जीवाश्म विज्ञान (Paleontology)", correct: true },
            { text: "वर्गीकरण (Taxonomy)", correct: false },
            { text: "भ्रूण विज्ञान (Embryology)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीवाश्म विज्ञान (Paleontology) वह वैज्ञानिक अध्ययन है जो जीवाश्मों के माध्यम से पृथ्वी पर जीवन के इतिहास की पड़ताल करता है।"
    },
    {
        question: "प्रश्न 3: अधिकांश जीवाश्म किस प्रकार की चट्टानों में पाए जाते हैं?",
        answers: shuffle([
            { text: "आग्नेय चट्टान (Igneous Rock)", correct: false },
            { text: "अवसादी चट्टान (Sedimentary Rock)", correct: true },
            { text: "कायांतरित चट्टान (Metamorphic Rock)", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवसादी चट्टानें पानी या हवा द्वारा जमा की गई तलछट की परतों से बनती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह प्रक्रिया जीवों के अवशेषों को संरक्षित करने और उन्हें जीवाश्म में बदलने के लिए सबसे उपयुक्त है।"
    },
    {
        question: "प्रश्न 4: जीवाश्मों की आयु निर्धारित करने के लिए किस रेडियोधर्मी समस्थानिक का उपयोग किया जाता है (विशेषकर हाल के जीवाश्मों के लिए)?",
        answers: shuffle([
            { text: "यूरेनियम-238", correct: false },
            { text: "पोटेशियम-40", correct: false },
            { text: "कार्बन-14", correct: true },
            { text: "रूबिडियम-87", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बन-14 डेटिंग एक रेडियोमेट्रिक डेटिंग विधि है जिसका उपयोग लगभग 50,000 वर्ष तक की आयु के कार्बनिक पदार्थों की आयु का पता लगाने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 5: आर्कियोप्टेरिक्स (Archaeopteryx) किसके बीच की एक संयोजी कड़ी (connecting link) माना जाता है?",
        answers: shuffle([
            { text: "उभयचर और सरीसृप", correct: false },
            { text: "सरीसृप और पक्षी", correct: true },
            { text: "मछली और उभयचर", correct: false },
            { text: "सरीसृप और स्तनधारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्कियोप्टेरिक्स के जीवाश्म में सरीसृपों (जैसे दाँत, पूंछ) और पक्षियों (जैसे पंख) दोनों के लक्षण दिखाई देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो यह सिद्ध करता है कि पक्षी सरीसृपों से विकसित हुए हैं।"
    },
    {
        question: "प्रश्न 6: \"मेसोज़ोइक युग\" (Mesozoic Era) को किस नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "स्तनधारियों का युग", correct: false },
            { text: "मछलियों का युग", correct: false },
            { text: "सरीसृपों का युग (डायनासोर का युग)", correct: true },
            { text: "उभयचरों का युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसोज़ोइक युग (लगभग 252 से 66 मिलियन वर्ष पूर्व) के दौरान डायनासोर सहित विशाल सरीसृप पृथ्वी पर प्रमुख स्थलीय जीव थे।"
    },
    {
        question: "प्रश्न 7: वे अंग जिनकी मूल संरचना और उत्पत्ति समान होती है लेकिन कार्य भिन्न होते हैं, क्या कहलाते हैं?",
        answers: shuffle([
            { text: "समरूप अंग (Analogous Organs)", correct: false },
            { text: "समजात अंग (Homologous Organs)", correct: true },
            { text: "अवशेषी अंग (Vestigial Organs)", correct: false },
            { text: "संयोजी अंग (Connecting Organs)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, मनुष्य का हाथ, व्हेल का फ्लिपर और चमगादड़ का पंख समजात अंग हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इनकी आंतरिक हड्डी की संरचना समान होती है, जो एक साझा पूर्वज को इंगित करती है।"
    },
    {
        question: "प्रश्न 8: वे अंग जिनकी उत्पत्ति भिन्न होती है लेकिन कार्य समान होते हैं, क्या कहलाते हैं?",
        answers: shuffle([
            { text: "समरूप अंग (Analogous Organs)", correct: true },
            { text: "समजात अंग (Homologous Organs)", correct: false },
            { text: "अवशेषी अंग (Vestigial Organs)", correct: false },
            { text: "कार्यात्मक अंग (Functional Organs)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, कीट के पंख और पक्षी के पंख समरूप अंग हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  वे दोनों उड़ने के लिए उपयोग होते हैं लेकिन उनकी संरचना और विकासवादी उत्पत्ति बहुत भिन्न होती है। यह अभिसारी विकास को दर्शाता है।"
    },
    {
        question: "प्रश्न 9: मानव शरीर में अपेंडिक्स (appendix) किसका एक उदाहरण है?",
        answers: shuffle([
            { text: "समजात अंग", correct: false },
            { text: "समरूप अंग", correct: false },
            { text: "अवशेषी अंग (Vestigial Organ)", correct: true },
            { text: "एक महत्वपूर्ण पाचन अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवशेषी अंग वे संरचनाएं हैं जो किसी जीव के पूर्वजों में कार्यात्मक थीं लेकिन अब उनका कोई स्पष्ट कार्य नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i>  माना जाता है कि अपेंडिक्स शाकाहारी पूर्वजों में सेल्यूलोज पचाने में मदद करता था।"
    },
    {
        question: "प्रश्न 10: \"जीवित जीवाश्म\" (Living Fossil) किसे कहते हैं?",
        answers: shuffle([
            { text: "एक जीवाश्म जिसमें अभी भी जीवित ऊतक हैं", correct: false },
            { text: "एक ऐसा जीव जो लाखों वर्षों से अपरिवर्तित रहा है और जिसके करीबी रिश्तेदार विलुप्त हो चुके हैं", correct: true },
            { text: "एक बहुत पुराना जीवाश्म", correct: false },
            { text: "एक कृत्रिम रूप से बनाया गया जीवाश्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीलोकैंथ (Coelacanth) मछली और जिन्कगो (Ginkgo) पेड़ जीवित जीवाश्मों के उदाहरण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  वे अपने प्राचीन जीवाश्म पूर्वजों से काफी मिलते-जुलते हैं।"
    },
    {
        question: "प्रश्न 11: चट्टानों की परतों के अध्ययन और उनके सह-संबंध के माध्यम से जीवाश्मों की सापेक्ष आयु का निर्धारण क्या कहलाता है?",
        answers: shuffle([
            { text: "रेडियोमेट्रिक डेटिंग", correct: false },
            { text: "स्ट्रैटीग्राफी (Stratigraphy)", correct: true },
            { text: "जीवाश्म विज्ञान", correct: false },
            { text: "भूविज्ञान (Geology)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्ट्रैटीग्राफी के सिद्धांत के अनुसार, अवसादी चट्टानों की निचली परतें पुरानी होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उनमें पाए जाने वाले जीवाश्म ऊपरी परतों के जीवाश्मों से पुराने होते हैं।"
    },
    {
        question: "प्रश्न 12: किस भूवैज्ञानिक युग को \"मानव का युग\" कहा जाता है?",
        answers: shuffle([
            { text: "मेसोज़ोइक", correct: false },
            { text: "पैलियोज़ोइक", correct: false },
            { text: "सेनोज़ोइक", correct: true },
            { text: "प्रीकैम्ब्रियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेनोज़ोइक युग (लगभग 66 मिलियन वर्ष पूर्व से आज तक) को \"स्तनधारियों का युग\" भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इसी युग में मनुष्यों का विकास हुआ।"
    },
    {
        question: "प्रश्न 13: \"डार्विन के फिंच\" के जीवाश्म और जीवित प्रजातियां किसका एक उत्कृष्ट उदाहरण प्रस्तुत करती हैं?",
        answers: shuffle([
            { text: "अनुकूली विकिरण (Adaptive Radiation)", correct: true },
            { text: "अभिसारी विकास (Convergent Evolution)", correct: false },
            { text: "आनुवंशिक बहाव (Genetic Drift)", correct: false },
            { text: "स्थिर चयन (Stabilizing Selection)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलापागोस द्वीपों पर एक ही पूर्वज प्रजाति से कई फिंच प्रजातियों का विकास हुआ, जो अलग-अलग खाद्य स्रोतों के लिए अनुकूलित हो गईं।<br><br><i class='fa-solid fa-angles-right icon'></i>  उनकी चोंच के आकार में भिन्नता इसका मुख्य प्रमाण है और यह अनुकूली विकिरण है।"
    },
    {
        question: "प्रश्न 14: घोड़े के विकास के जीवाश्म रिकॉर्ड से क्या पता चलता है?",
        answers: shuffle([
            { text: "आकार में कमी", correct: false },
            { text: "पैर की उंगलियों की संख्या में वृद्धि", correct: false },
            { text: "आकार में वृद्धि और पैर की उंगलियों की संख्या में कमी", correct: true },
            { text: "कोई विकासवादी परिवर्तन नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घोड़े का जीवाश्म रिकॉर्ड विकास का एक उत्कृष्ट उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें छोटे, कई उंगलियों वाले पूर्वज (जैसे इओहिप्पस) से लेकर आज के बड़े, एक उंगली (खुर) वाले घोड़े तक के क्रमिक परिवर्तन दिखाई देते हैं।"
    },
    {
        question: "प्रश्न 15: विभिन्न कशेरुकी जीवों के भ्रूणों का प्रारंभिक अवस्था में समान दिखना, विकास का कौन सा प्रमाण प्रस्तुत करता है?",
        answers: shuffle([
            { text: "जीवाश्म प्रमाण", correct: false },
            { text: "भ्रूण विज्ञानी प्रमाण (Embryological Evidence)", correct: true },
            { text: "भौगोलिक प्रमाण", correct: false },
            { text: "आणविक प्रमाण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्न्स्ट हेकेल के \"पुनरावृत्ति सिद्धांत\" के अनुसार, भ्रूण अपने विकास के दौरान अपने पूर्वजों के विकास के चरणों को दोहराते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एक साझा वंश का संकेत है, यह भ्रूण विज्ञानी प्रमाण है।"
    },
    {
        question: "प्रश्न 16: जीवाश्म निर्माण की प्रक्रिया में जीव के कठोर भागों (जैसे हड्डी या खोल) में खनिजों का भर जाना क्या कहलाता है?",
        answers: shuffle([
            { text: "संपीड़न (Compression)", correct: false },
            { text: "पेट्रिफिकेशन या अश्मीभवन (Petrification)", correct: true },
            { text: "मोल्ड (Mold)", correct: false },
            { text: "कास्ट (Cast)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया में, भूजल में घुले हुए खनिज धीरे-धीरे जीव के मूल कार्बनिक पदार्थ को प्रतिस्थापित कर देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे वह पत्थर में बदल जाता है, इसे पेट्रिफिकेशन या अश्मीभवन कहते हैं।"
    },
    {
        question: "प्रश्न 17: डायनासोर किस भूवैज्ञानिक काल में विलुप्त हुए थे?",
        answers: shuffle([
            { text: "ट्रायसिक के अंत में", correct: false },
            { text: "जुरासिक के अंत में", correct: false },
            { text: "क्रिटेशियस के अंत में", correct: true },
            { text: "पैलियोजीन के अंत में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिटेशियस-पैलियोजीन विलुप्ति घटना (लगभग 66 मिलियन वर्ष पूर्व) में डायनासोर (पक्षियों को छोड़कर) और पृथ्वी की कई अन्य प्रजातियां विलुप्त हो गईं।<br><br><i class='fa-solid fa-angles-right icon'></i>  संभवतः एक बड़े क्षुद्रग्रह के प्रभाव के कारण।"
    },
    {
        question: "प्रश्न 18: जीवाश्म अभिलेख (Fossil Record) विकास के बारे में क्या महत्वपूर्ण जानकारी प्रदान करता है?",
        answers: shuffle([
            { text: "यह अधूरा है और कुछ नहीं बताता।", correct: false },
            { text: "यह समय के साथ जीवन रूपों में क्रमिक परिवर्तन को दर्शाता है।", correct: true },
            { text: "यह बताता है कि सभी प्रजातियाँ एक ही समय में बनी थीं।", correct: false },
            { text: "यह केवल सूक्ष्मजीवों के बारे में जानकारी देता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीवाश्म अभिलेख दिखाता है कि जीवन सरल से जटिल रूपों में विकसित हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और कई प्रजातियाँ उत्पन्न हुई हैं और विलुप्त हो गई हैं, जो विकास के सिद्धांत का समर्थन करता है।"
    },
    {
        question: "प्रश्न 19: सूचक जीवाश्म (Index Fossils) का उपयोग किस लिए किया जाता है?",
        answers: shuffle([
            { text: "विलुप्त जीवों के व्यवहार का अध्ययन करने के लिए", correct: false },
            { text: "चट्टान की परतों की सापेक्ष आयु का पता लगाने के लिए", correct: true },
            { text: "प्राचीन जलवायु का पता लगाने के लिए", correct: false },
            { text: "जीवित जीवाश्मों की पहचान करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूचक जीवाश्म उन जीवों के होते हैं जो व्यापक भौगोलिक क्षेत्र में फैले थे लेकिन केवल एक छोटी भूवैज्ञानिक अवधि के लिए ही अस्तित्व में थे।<br><br><i class='fa-solid fa-angles-right icon'></i>  इनकी उपस्थिति चट्टानों की आयु का निर्धारण करने में मदद करती है।"
    },
    {
        question: "प्रश्न 20: होमो निएंडरथेलेंसिस (निएंडरथल) के जीवाश्म किसके विकास का अध्ययन करने के लिए महत्वपूर्ण हैं?",
        answers: shuffle([
            { text: "पक्षियों का", correct: false },
            { text: "घोड़ों का", correct: false },
            { text: "मानव का", correct: true },
            { text: "मछलियों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निएंडरथल हमारे सबसे करीबी विलुप्त मानव रिश्तेदार हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उनके जीवाश्म हमें आधुनिक मनुष्यों के विकास और हमारे पूर्वजों के व्यवहार को समझने में मदद करते हैं।"
    },
    {
        question: "प्रश्न 21: पौधों का वह जीवाश्म जिसमें केवल कार्बन की एक पतली फिल्म बची रहती है, क्या कहलाता है?",
        answers: shuffle([
            { text: "कास्ट (Cast)", correct: false },
            { text: "पेट्रिफाइड वुड (Petrified wood)", correct: false },
            { text: "संपीड़न (Compression)", correct: true },
            { text: "अंबर (Amber)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई जीव तलछट के नीचे दब जाता है, तो दबाव उसके तरल और गैसीय घटकों को बाहर निकाल देता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे केवल कार्बन का एक अवशेष रह जाता है, जैसे पत्तियों के जीवाश्म, इसे संपीड़न कहते हैं।"
    },
    {
        question: "प्रश्न 22: भूवैज्ञानिक समय-सारणी का सबसे बड़ा विभाजन क्या है?",
        answers: shuffle([
            { text: "युग (Era)", correct: false },
            { text: "महाकल्प (Eon)", correct: true },
            { text: "कल्प (Period)", correct: false },
            { text: "शक (Epoch)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूवैज्ञानिक समय का सबसे बड़ा खंड महाकल्प (Eon) (जैसे, फैनरोजोइक, प्रोटेरोजोइक) है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो फिर युगों (Eras) में विभाजित होता है।"
    },
    {
        question: "प्रश्न 23: टिकटालिक (Tiktaalik) का जीवाश्म किसके बीच एक महत्वपूर्ण संक्रमणकालीन रूप प्रदान करता है?",
        answers: shuffle([
            { text: "डायनासोर और पक्षियों", correct: false },
            { text: "मछलियों और चार-पैर वाले स्थलीय कशेरुकियों (टेट्रापोड्स)", correct: true },
            { text: "बंदरों और मनुष्यों", correct: false },
            { text: "कीड़ों और मकड़ियों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिकटालिक में मछलियों (गलफड़े, शल्क) और उभयचरों (चपटी खोपड़ी, मजबूत पंख जैसी भुजाएँ) दोनों की विशेषताएं थीं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो पानी से जमीन पर जीवन के संक्रमण को दर्शाती हैं।"
    },
    {
        question: "प्रश्न 24: पेड़ों की राल (resin) में संरक्षित कीड़ों के जीवाश्म को क्या कहते हैं?",
        answers: shuffle([
            { text: "मोल्ड", correct: false },
            { text: "कास्ट", correct: false },
            { text: "अंबर (Amber)", correct: true },
            { text: "संपीड़न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंबर पेड़ों की जीवाश्मीकृत राल है।<br><br><i class='fa-solid fa-angles-right icon'></i>  कभी-कभी छोटे जीव जैसे कीड़े इस चिपचिपी राल में फंस जाते थे और असाधारण रूप से अच्छी तरह से संरक्षित हो जाते थे।"
    },
    {
        question: "प्रश्न 25: पैलियोज़ोइक युग (Paleozoic Era) की समाप्ति किस घटना से हुई?",
        answers: shuffle([
            { text: "डायनासोरों का उदय", correct: false },
            { text: "स्तनधारियों का उदय", correct: false },
            { text: "पर्मियन-ट्रायसिक विलुप्ति घटना", correct: true },
            { text: "पहले फूल वाले पौधों का दिखना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 252 मिलियन वर्ष पूर्व हुई यह घटना पृथ्वी के इतिहास की सबसे बड़ी सामूहिक विलुप्ति थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें लगभग 96% समुद्री प्रजातियां और 70% स्थलीय कशेरुकी प्रजातियां समाप्त हो गईं।"
    },
    {
        question: "प्रश्न 26: विकास का \"आधुनिक संश्लेषण\" (Modern Synthesis) सिद्धांत किन दो क्षेत्रों को जोड़ता है?",
        answers: shuffle([
            { text: "जीवाश्म विज्ञान और भूविज्ञान", correct: false },
            { text: "डार्विन के प्राकृतिक चयन और मेंडल की आनुवंशिकी", correct: true },
            { text: "भ्रूण विज्ञान और शरीर रचना विज्ञान", correct: false },
            { text: "पारिस्थितिकी और व्यवहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आधुनिक संश्लेषण, जिसे नव-डार्विनवाद भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह डार्विन के विकास के सिद्धांत को आनुवंशिक वंशानुक्रम और जनसंख्या आनुवंशिकी की समझ के साथ एकीकृत करता है।"
    },
    {
        question: "प्रश्न 27: किसी जीव के पदचिन्हों, बिलों या मल के जीवाश्मीकृत अवशेषों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "शरीर जीवाश्म (Body Fossils)", correct: false },
            { text: "ट्रेस जीवाश्म (Trace Fossils)", correct: true },
            { text: "सूक्ष्म जीवाश्म (Microfossils)", correct: false },
            { text: "रासायनिक जीवाश्म (Chemical Fossils)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रेस जीवाश्म जीव के शरीर के हिस्से नहीं होते, बल्कि उसकी गतिविधियों का प्रमाण होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो हमें उसके व्यवहार के बारे में जानकारी देते हैं।"
    },
    {
        question: "प्रश्न 28: लुसी (Lucy) नामक प्रसिद्ध जीवाश्म किस प्रारंभिक मानव पूर्वज प्रजाति का है?",
        answers: shuffle([
            { text: "होमो इरेक्टस", correct: false },
            { text: "ऑस्ट्रेलोपिथेकस एफरेन्सिस", correct: true },
            { text: "होमो हैबिलिस", correct: false },
            { text: "निएंडरथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लुसी 3.2 मिलियन वर्ष पुराना एक असाधारण रूप से पूर्ण जीवाश्म कंकाल है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसने मानव विकास के अध्ययन में महत्वपूर्ण योगदान दिया, विशेष रूप से द्विपादवाद (दो पैरों पर चलना) के विकास को समझने में।"
    },
    {
        question: "प्रश्न 29: व्हेल के जीवाश्म रिकॉर्ड से क्या पता चलता है?",
        answers: shuffle([
            { text: "वे हमेशा समुद्री जीव रहे हैं।", correct: false },
            { text: "वे जमीन पर रहने वाले, खुर वाले स्तनधारियों से विकसित हुए हैं।", correct: true },
            { text: "वे मछलियों से सीधे विकसित हुए हैं।", correct: false },
            { text: "वे सरीसृपों से विकसित हुए हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीवाश्म जैसे पाकीसीटस और रोडोसीटस दिखाते हैं कि व्हेल के पूर्वज जमीन पर रहते थे।<br><br><i class='fa-solid fa-angles-right icon'></i>  और समय के साथ उन्होंने जलीय जीवन के लिए अनुकूलन विकसित किया, जैसे उनके पिछले पैर धीरे-धीरे गायब हो गए।"
    },
    {
        question: "प्रश्न 30: जीवाश्म रिकॉर्ड की अपूर्णता का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "सभी जीव जीवाश्म नहीं बनाते हैं।", correct: false },
            { text: "जीवाश्म बनने के लिए विशिष्ट परिस्थितियों की आवश्यकता होती है।", correct: false },
            { text: "कई जीवाश्म भूवैज्ञानिक प्रक्रियाओं द्वारा नष्ट हो जाते हैं।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीवाश्म बनना एक दुर्लभ घटना है।<br><br><i class='fa-solid fa-angles-right icon'></i>  अधिकांश जीव मरने के बाद सड़ जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जीवाश्म बनने के लिए तेजी से दफन होना और सही रासायनिक वातावरण आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसके अलावा, कई जीवाश्म कटाव या अन्य भूवैज्ञानिक गतिविधियों से नष्ट हो जाते हैं, जिससे जीवाश्म रिकॉर्ड अधूरा रह जाता है।"
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