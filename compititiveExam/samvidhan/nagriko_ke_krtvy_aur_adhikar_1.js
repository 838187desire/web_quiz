const questions = [
    {
        topHeading: "नागरिकों के कर्तव्य और अधिकार पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान के किस भाग को 'भारत का मैग्ना कार्टा' कहा जाता है?",
        answers: shuffle([
            { text: "भाग I (संघ और उसका राज्य क्षेत्र)", correct: false },
            { text: "भाग II (नागरिकता)", correct: false },
            { text: "भाग III (मौलिक अधिकार)", correct: true },
            { text: "भाग IV (राज्य के नीति निदेशक तत्व)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग III में उल्लिखित मौलिक अधिकार इतने व्यापक और महत्वपूर्ण हैं कि इसे 'भारत का मैग्ना कार्टा' की संज्ञा दी गई है, जो नागरिकों को राज्य की शक्तियों के विरुद्ध गारंटी प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 2. मूल संविधान में कितने मौलिक कर्तव्य थे?",
        answers: shuffle([
            { text: "दस", correct: false },
            { text: "ग्यारह", correct: false },
            { text: "आठ", correct: false },
            { text: "शून्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक कर्तव्यों को 1976 में 42वें संविधान संशोधन द्वारा सरदार स्वर्ण सिंह समिति की सिफारिशों पर जोड़ा गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> मूल संविधान (1950) में इनका कोई उल्लेख नहीं था।"
    },
    {
        question: "प्रश्न 3. \"कानून के समक्ष समानता\" का अधिकार किस अनुच्छेद में दिया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 14", correct: true },
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 14 यह सुनिश्चित करता है कि राज्य भारत के राज्य क्षेत्र में किसी भी व्यक्ति को विधि के समक्ष समता से या विधियों के समान संरक्षण से वंचित नहीं करेगा।"
    },
    {
        question: "प्रश्न 4. मौलिक कर्तव्यों को किस संविधान संशोधन द्वारा जोड़ा गया था?",
        answers: shuffle([
            { text: "44वां संशोधन", correct: false },
            { text: "42वां संशोधन", correct: true },
            { text: "24वां संशोधन", correct: false },
            { text: "86वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 42वें संविधान संशोधन अधिनियम, 1976 द्वारा संविधान में एक नया भाग IV-A और अनुच्छेद 51-A जोड़ा गया, जिसमें 10 मौलिक कर्तव्यों को शामिल किया गया।"
    },
    {
        question: "प्रश्न 5. संपत्ति का अधिकार अब किस प्रकार का अधिकार है?",
        answers: shuffle([
            { text: "मौलिक अधिकार", correct: false },
            { text: "कानूनी (विधिक) अधिकार", correct: true },
            { text: "मानव अधिकार", correct: false },
            { text: "प्राकृतिक अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संविधान संशोधन, 1978 द्वारा संपत्ति के अधिकार को मौलिक अधिकारों की सूची से हटाकर अनुच्छेद 300-A के तहत एक कानूनी अधिकार बना दिया गया है।"
    },
    {
        question: "प्रश्न 6. डॉ. बी. आर. अंबेडकर ने किस मौलिक अधिकार को 'संविधान का हृदय और आत्मा' कहा था?",
        answers: shuffle([
            { text: "समानता का अधिकार", correct: false },
            { text: "स्वतंत्रता का अधिकार", correct: false },
            { text: "शोषण के विरुद्ध अधिकार", correct: false },
            { text: "संवैधानिक उपचारों का अधिकार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 32 के तहत संवैधानिक उपचारों का अधिकार नागरिकों को अपने मौलिक अधिकारों के हनन पर सीधे उच्चतम न्यायालय जाने का अधिकार देता है, इसीलिए डॉ. अंबेडकर ने इसे इतना महत्वपूर्ण माना।"
    },
    {
        question: "प्रश्न 7. 6 से 14 वर्ष की आयु के बच्चों को शिक्षा का अवसर प्रदान करना, यह कर्तव्य किस संशोधन द्वारा जोड़ा गया?",
        answers: shuffle([
            { text: "42वां संशोधन", correct: false },
            { text: "44वां संशोधन", correct: false },
            { text: "86वां संशोधन", correct: true },
            { text: "91वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 86वें संविधान संशोधन, 2002 द्वारा अनुच्छेद 51-A में 11वां मौलिक कर्तव्य (k) जोड़ा गया, जो माता-पिता या अभिभावक पर यह कर्तव्य आरोपित करता है।"
    },
    {
        question: "प्रश्न 8. 'अस्पृश्यता का अंत' संविधान के किस अनुच्छेद द्वारा सुनिश्चित किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: true },
            { text: "अनुच्छेद 18", correct: false },
            { text: "अनुच्छेद 19", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 17 अस्पृश्यता को समाप्त करता है और किसी भी रूप में इसके आचरण को निषिद्ध करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक निरपेक्ष अधिकार है, जिसका कोई अपवाद नहीं है।"
    },
    {
        question: "प्रश्न 9. निम्नलिखित में से कौन सा एक मौलिक कर्तव्य नहीं है?",
        answers: shuffle([
            { text: "संविधान का पालन करना", correct: false },
            { text: "भारत की संप्रभुता, एकता और अखंडता की रक्षा करना", correct: false },
            { text: "सार्वजनिक संपत्ति को सुरक्षित रखना", correct: false },
            { text: "राष्ट्रीय महत्व के स्मारकों का संरक्षण करना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय महत्व के स्मारकों का संरक्षण करना राज्य का कर्तव्य है, जो अनुच्छेद 49 (राज्य के नीति निदेशक तत्व) के अंतर्गत आता है, न कि नागरिकों का मौलिक कर्तव्य।"
    },
    {
        question: "प्रश्न 10. क्या मौलिक कर्तव्य न्यायालय में प्रवर्तनीय (enforceable) हैं?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "नहीं", correct: true },
            { text: "कुछ कर्तव्य प्रवर्तनीय हैं", correct: false },
            { text: "संसद द्वारा कानून बनाने पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक अधिकार न्यायालय द्वारा प्रवर्तनीय हैं, लेकिन मौलिक कर्तव्य और नीति निदेशक तत्व गैर-न्यायोचित (non-justiciable) हैं, अर्थात उन्हें लागू कराने के लिए न्यायालय नहीं जाया जा सकता।"
    },
    {
        question: "प्रश्न 11. \"प्राण और दैहिक स्वतंत्रता का संरक्षण\" किस अनुच्छेद में वर्णित है?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: true },
            { text: "अनुच्छेद 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 21 यह गारंटी देता है कि किसी भी व्यक्ति को विधि द्वारा स्थापित प्रक्रिया के अतिरिक्त उसके जीवन और व्यक्तिगत स्वतंत्रता के अधिकार से वंचित नहीं किया जाएगा।"
    },
    {
        question: "प्रश्न 12. मौलिक कर्तव्यों की अवधारणा किस देश के संविधान से प्रेरित है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "यूनाइटेड किंगडम", correct: false },
            { text: "पूर्व सोवियत संघ (USSR)", correct: true },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान में मौलिक कर्तव्यों का विचार पूर्व सोवियत संघ के संविधान से लिया गया है।"
    },
    {
        question: "प्रश्न 13. 'बंदी प्रत्यक्षीकरण' (Habeas Corpus) रिट का उपयोग किसके लिए किया जाता है?",
        answers: shuffle([
            { text: "किसी अधिकारी को कर्तव्य पालन का आदेश देने के लिए", correct: false },
            { text: "किसी व्यक्ति को अवैध हिरासत से मुक्त कराने के लिए", correct: true },
            { text: "किसी मुकदमे को निचली अदालत से ऊपर भेजने के लिए", correct: false },
            { text: "किसी पद की वैधता की जांच करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रिट व्यक्तिगत स्वतंत्रता का सबसे बड़ा रक्षक है, जिसके द्वारा न्यायालय किसी अवैध रूप से हिरासत में लिए गए व्यक्ति को अपने समक्ष प्रस्तुत करने का आदेश देता है।"
    },
    {
        question: "प्रश्न 14. भारत की संप्रभुता, एकता और अखंडता की रक्षा करना और उसे अक्षुण्ण रखना, यह क्या है?",
        answers: shuffle([
            { text: "एक मौलिक अधिकार", correct: false },
            { text: "एक मौलिक कर्तव्य", correct: true },
            { text: "राज्य का नीति निदेशक तत्व", correct: false },
            { text: "एक कानूनी अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51-A (c) के तहत प्रत्येक भारतीय नागरिक का एक मौलिक कर्तव्य है।"
    },
    {
        question: "प्रश्न 15. धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर भेदभाव का निषेध किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 14", correct: false },
            { text: "अनुच्छेद 15", correct: true },
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 15 राज्य को इन आधारों पर किसी भी नागरिक के साथ भेदभाव करने से रोकता है और दुकानों, होटलों आदि में प्रवेश के संबंध में भी समानता सुनिश्चित करता है।"
    },
    {
        question: "प्रश्न 16. मौलिक अधिकारों का निलंबन कौन कर सकता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "उच्चतम न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय आपातकाल के दौरान राष्ट्रपति अनुच्छेद 20 और 21 को छोड़कर अन्य मौलिक अधिकारों को निलंबित कर सकते हैं।"
    },
    {
        question: "प्रश्न 17. 'वैज्ञानिक दृष्टिकोण, मानववाद और ज्ञानार्जन तथा सुधार की भावना का विकास करना' संविधान के किस भाग में है?",
        answers: shuffle([
            { text: "प्रस्तावना", correct: false },
            { text: "मौलिक अधिकार", correct: false },
            { text: "मौलिक कर्तव्य", correct: true },
            { text: "नीति निदेशक तत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51-A (h) के तहत प्रत्येक नागरिक का एक महत्वपूर्ण मौलिक कर्तव्य है।"
    },
    {
        question: "प्रश्न 18. 'शिक्षा का अधिकार' को किस वर्ष मौलिक अधिकार के रूप में जोड़ा गया?",
        answers: shuffle([
            { text: "1976", correct: false },
            { text: "1978", correct: false },
            { text: "2002", correct: true },
            { text: "2009", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 86वें संविधान संशोधन, 2002 द्वारा अनुच्छेद 21-A जोड़कर 6 से 14 वर्ष के बच्चों के लिए शिक्षा को मौलिक अधिकार बनाया गया।"
    },
    {
        question: "प्रश्न 19. निम्नलिखित में से कौन सा अधिकार केवल भारतीय नागरिकों को प्राप्त है?",
        answers: shuffle([
            { text: "विधि के समक्ष समता (अनुच्छेद 14)", correct: false },
            { text: "प्राण और दैहिक स्वतंत्रता (अनुच्छेद 21)", correct: false },
            { text: "धर्म की स्वतंत्रता (अनुच्छेद 25)", correct: false },
            { text: "वाक् और अभिव्यक्ति की स्वतंत्रता (अनुच्छेद 19)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 15, 16, 19, 29 और 30 में दिए गए मौलिक अधिकार केवल भारतीय नागरिकों के लिए हैं, विदेशियों के लिए नहीं।"
    },
    {
        question: "प्रश्न 20. मौलिक कर्तव्यों को लागू करने के लिए किस समिति का गठन किया गया था?",
        answers: shuffle([
            { text: "वर्मा समिति", correct: false },
            { text: "सरकारिया आयोग", correct: false },
            { text: "बलवंत राय मेहता समिति", correct: false },
            { text: "स्वर्ण सिंह समिति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वर्ण सिंह समिति की सिफारिशों के आधार पर ही 1976 में संविधान में मौलिक कर्तव्यों को शामिल किया गया था।"
    },
    {
        question: "प्रश्न 21. 'उपाधियों का अंत' किस मौलिक अधिकार का हिस्सा है?",
        answers: shuffle([
            { text: "स्वतंत्रता का अधिकार", correct: false },
            { text: "समानता का अधिकार", correct: true },
            { text: "शोषण के विरुद्ध अधिकार", correct: false },
            { text: "संवैधानिक उपचारों का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 18 राज्य को सेना या विद्या संबंधी सम्मान के सिवाय और कोई उपाधि प्रदान करने से रोकता है, ताकि समाज में समानता बनी रहे।"
    },
    {
        question: "प्रश्न 22. \"अधिकारों और कर्तव्यों में गहरा संबंध है।\" इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "अधिकार कर्तव्यों के बिना अर्थहीन हैं।", correct: false },
            { text: "एक व्यक्ति का अधिकार दूसरे का कर्तव्य है।", correct: false },
            { text: "कर्तव्य अधिकारों के प्रयोग की पूर्व शर्त हैं।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक लोकतांत्रिक समाज में अधिकार और कर्तव्य एक ही सिक्के के दो पहलू हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अधिकारों का आनंद लेने के लिए कर्तव्यों का पालन करना आवश्यक है।"
    },
    {
        question: "प्रश्न 23. मानव के दुर्व्यापार और बलात् श्रम का प्रतिषेध किस अनुच्छेद में किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 22", correct: false },
            { text: "अनुच्छेद 23", correct: true },
            { text: "अनुच्छेद 24", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद शोषण के विरुद्ध अधिकार के अंतर्गत आता है और मनुष्यों की खरीद-फरोख्त, बेगारी और इसी प्रकार के अन्य जबरन श्रम को प्रतिबंधित करता है।"
    },
    {
        question: "प्रश्न 24. 'हमारी सामासिक संस्कृति की गौरवशाली परंपरा का महत्व समझना और उसका परिरक्षण करना' क्या है?",
        answers: shuffle([
            { text: "एक मौलिक अधिकार", correct: false },
            { text: "एक कानूनी अधिकार", correct: false },
            { text: "एक मौलिक कर्तव्य", correct: true },
            { text: "एक नीति निदेशक सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51-A (f) के तहत भारत के प्रत्येक नागरिक का एक मौलिक कर्तव्य है।"
    },
    {
        question: "प्रश्न 25. मौलिक अधिकारों का संरक्षक कौन है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "कार्यपालिका", correct: false },
            { text: "न्यायपालिका", correct: true },
            { text: "संविधान सभा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम न्यायालय (अनुच्छेद 32) और उच्च न्यायालय (अनुच्छेद 226) नागरिकों के मौलिक अधिकारों की रक्षा के लिए रिट जारी कर सकते हैं।"
    },
    {
        question: "प्रश्न 26. कौन सा अनुच्छेद अल्पसंख्यकों को अपनी रुचि की शिक्षण संस्थाओं की स्थापना और प्रशासन का अधिकार देता है?",
        answers: shuffle([
            { text: "अनुच्छेद 28", correct: false },
            { text: "अनुच्छेद 29", correct: false },
            { text: "अनुच्छेद 30", correct: true },
            { text: "अनुच्छेद 31", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 30 धर्म या भाषा पर आधारित सभी अल्पसंख्यक वर्गों को अपनी पसंद की शिक्षा संस्थाओं की स्थापना और उनके प्रशासन का अधिकार प्रदान करता है।"
    },
    {
        question: "प्रश्न 27. प्राकृतिक पर्यावरण की, जिसके अंतर्गत वन, झील, नदी और वन्य जीव हैं, रक्षा करना और उसका संवर्धन करना, यह किसमें शामिल है?",
        answers: shuffle([
            { text: "केवल मौलिक कर्तव्य", correct: false },
            { text: "केवल नीति निदेशक तत्व", correct: false },
            { text: "मौलिक कर्तव्य और नीति निदेशक तत्व दोनों", correct: true },
            { text: "मौलिक अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51-A (g) के तहत एक मौलिक कर्तव्य भी है और अनुच्छेद 48-A के तहत राज्य का एक नीति निदेशक तत्व भी है।"
    },
    {
        question: "प्रश्न 28. \"किसी भी व्यक्ति को एक ही अपराध के लिए एक से अधिक बार दंडित नहीं किया जाएगा।\" यह किस अधिकार के तहत संरक्षण है?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 20", correct: true },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 20(2) 'दोहरे दंड से संरक्षण' प्रदान करता है, जो एक महत्वपूर्ण आपराधिक न्याय सिद्धांत है।"
    },
    {
        question: "प्रश्न 29. मत देने का अधिकार (Right to Vote) क्या है?",
        answers: shuffle([
            { text: "मौलिक अधिकार", correct: false },
            { text: "संवैधानिक/विधिक अधिकार", correct: true },
            { text: "प्राकृतिक अधिकार", correct: false },
            { text: "नैतिक कर्तव्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मत देने का अधिकार एक मौलिक अधिकार नहीं है, बल्कि यह जन प्रतिनिधित्व अधिनियम, 1951 के तहत एक कानूनी अधिकार है और संविधान के अनुच्छेद 326 से शक्ति प्राप्त करता है।"
    },
    {
        question: "प्रश्न 30. मौलिक अधिकारों में संशोधन करने में कौन सक्षम है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "लोकसभा", correct: false },
            { text: "उच्चतम न्यायालय", correct: false },
            { text: "संसद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसद मौलिक अधिकारों में संशोधन कर सकती है, लेकिन केशवानंद भारती मामले के अनुसार, वह संविधान की 'मूल संरचना' को नहीं बदल सकती।"
    },
    {
        question: "प्रश्न 31. किस स्थिति में मौलिक अधिकारों को सीमित किया जा सकता है?",
        answers: shuffle([
            { text: "जब राज्य में राष्ट्रपति शासन हो", correct: false },
            { text: "जब वित्तीय आपातकाल हो", correct: false },
            { text: "जब राष्ट्रीय आपातकाल घोषित हो", correct: true },
            { text: "किसी भी समय प्रधानमंत्री की सलाह पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 352 के तहत राष्ट्रीय आपातकाल की घोषणा होने पर, अनुच्छेद 20 और 21 को छोड़कर, अन्य मौलिक अधिकारों को निलंबित किया जा सकता है।"
    },
    {
        question: "प्रश्न 32. \"सार्वजनिक संपत्ति को सुरक्षित रखें और हिंसा से दूर रहें\" यह प्रावधान कहाँ मिलता है?",
        answers: shuffle([
            { text: "मौलिक अधिकारों में", correct: false },
            { text: "मौलिक कर्तव्यों में", correct: true },
            { text: "राज्य के नीति निदेशक तत्वों में", correct: false },
            { text: "संविधान की प्रस्तावना में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51-A (i) के तहत प्रत्येक भारतीय नागरिक का एक मौलिक कर्तव्य है।"
    },
    {
        question: "प्रश्न 33. 'सूचना का अधिकार' (RTI) को किस मौलिक अधिकार का हिस्सा माना जाता है?",
        answers: shuffle([
            { text: "समानता का अधिकार (अनुच्छेद 14)", correct: false },
            { text: "वाक् और अभिव्यक्ति की स्वतंत्रता का अधिकार (अनुच्छेद 19(1)(a))", correct: true },
            { text: "जीवन का अधिकार (अनुच्छेद 21)", correct: false },
            { text: "संवैधानिक उपचारों का अधिकार (अनुच्छेद 32)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम न्यायालय ने माना है कि जानने का अधिकार और सूचना पाने का अधिकार, वाक् और अभिव्यक्ति की स्वतंत्रता का एक अभिन्न अंग है।"
    },
    {
        question: "प्रश्न 34. कौन सा अनुच्छेद कारखानों आदि में बच्चों के नियोजन का प्रतिषेध करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 21A", correct: false },
            { text: "अनुच्छेद 23", correct: false },
            { text: "अनुच्छेद 24", correct: true },
            { text: "अनुच्छेद 45", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 14 वर्ष से कम आयु के किसी भी बच्चे को किसी कारखाने या खान में काम करने के लिए या किसी अन्य जोखिम भरे नियोजन में लगाने पर रोक लगाता है।"
    },
    {
        question: "प्रश्न 35. मौलिक अधिकार और राज्य के नीति निदेशक तत्वों में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "अधिकार नकारात्मक हैं, जबकि तत्व सकारात्मक हैं।", correct: false },
            { text: "अधिकार नागरिकों के लिए हैं, जबकि तत्व राज्य के लिए हैं।", correct: false },
            { text: "अधिकार वाद योग्य (न्यायोचित) हैं, जबकि तत्व गैर-वाद योग्य हैं।", correct: true },
            { text: "ये सभी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सबसे महत्वपूर्ण अंतर है।<br><br><i class='fa-solid fa-angles-right icon'></i> मौलिक अधिकारों के हनन पर आप न्यायालय जा सकते हैं, लेकिन नीति निदेशक तत्वों को लागू कराने के लिए नहीं।"
    },
    {
        question: "प्रश्न 36. निजता का अधिकार (Right to Privacy) किस मौलिक अधिकार के अंतर्गत आता है?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: true },
            { text: "अनुच्छेद 14", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> के.एस. पुट्टास्वामी बनाम भारत संघ मामले में, उच्चतम न्यायालय ने निजता के अधिकार को अनुच्छेद 21 के तहत प्राण और दैहिक स्वतंत्रता के अधिकार का एक अंतर्भूत हिस्सा माना है।"
    },
    {
        question: "प्रश्न 37. अपने धर्म को अबाध रूप से मानने, आचरण करने और प्रचार करने की स्वतंत्रता किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 25", correct: true },
            { text: "अनुच्छेद 26", correct: false },
            { text: "अनुच्छेद 27", correct: false },
            { text: "अनुच्छेद 28", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद भारत के सभी व्यक्तियों को अंतःकरण की और धर्म को अबाध रूप से मानने, आचरण करने और प्रचार करने की स्वतंत्रता की गारंटी देता है।"
    },
    {
        question: "प्रश्न 38. निम्नलिखित में से कौन सा कर्तव्य 'वर्मा समिति' (1999) की सिफारिशों से संबंधित है?",
        answers: shuffle([
            { text: "नए मौलिक कर्तव्यों को जोड़ना", correct: false },
            { text: "मौलिक कर्तव्यों को कानूनी रूप से लागू करना", correct: false },
            { text: "मौलिक कर्तव्यों के प्रचालन के लिए कानूनी प्रावधानों की पहचान करना", correct: true },
            { text: "मौलिक कर्तव्यों को संविधान से हटाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्मा समिति का गठन कुछ मौलिक कर्तव्यों के कार्यान्वयन के लिए मौजूदा कानूनी प्रावधानों की पहचान करने और उन्हें प्रभावी बनाने के उपायों का सुझाव देने के लिए किया गया था।"
    },
    {
        question: "प्रश्न 39. 'लोक नियोजन के विषय में अवसर की समता' किस अनुच्छेद में दी गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: true },
            { text: "अनुच्छेद 17", correct: false },
            { text: "अनुच्छेद 18", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 16 राज्य के अधीन किसी भी पद पर नियोजन या नियुक्ति से संबंधित विषयों में सभी नागरिकों के लिए अवसर की समानता की गारंटी देता है।"
    },
    {
        question: "प्रश्न 40. व्यक्तिगत और सामूहिक रूप से सभी क्षेत्रों में उत्कर्ष की ओर बढ़ने का सतत प्रयास करना, यह क्या है?",
        answers: shuffle([
            { text: "एक नैतिक उपदेश", correct: false },
            { text: "प्रस्तावना का एक लक्ष्य", correct: false },
            { text: "एक मौलिक कर्तव्य", correct: true },
            { text: "एक नीति निदेशक सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51-A (j) के तहत एक मौलिक कर्तव्य है, जो राष्ट्र को निरंतर प्रगति की ओर ले जाने के लिए व्यक्तिगत और सामूहिक उत्कृष्टता को प्रोत्साहित करता है।"
    },
    {
        question: "प्रश्न 41. मौलिक अधिकारों की प्रकृति कैसी है?",
        answers: shuffle([
            { text: "पूर्ण (Absolute)", correct: false },
            { text: "गैर-न्यायोचित (Non-justiciable)", correct: false },
            { text: "असीमित (Unlimited)", correct: false },
            { text: "न्यायोचित पर असीमित नहीं (Justiciable but not absolute)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक अधिकार न्यायालय द्वारा लागू किए जा सकते हैं, लेकिन वे असीमित नहीं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य उन पर सार्वजनिक हित में युक्तियुक्त निर्बंधन (reasonable restrictions) लगा सकता है।"
    },
    {
        question: "प्रश्न 42. किस मौलिक अधिकार के तहत सिखों को कृपाण धारण करना और लेकर चलना धार्मिक स्वतंत्रता का अंग माना गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 25", correct: true },
            { text: "अनुच्छेद 29", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 25 के स्पष्टीकरण I में यह प्रावधान है कि कृपाण धारण करना और लेकर चलना सिख धर्म के मानने का अंग समझा जाएगा।"
    },
    {
        question: "प्रश्न 43. संविधान का पालन करें और उसके आदर्शों, संस्थाओं, राष्ट्रध्वज और राष्ट्रगान का आदर करें, यह कौन सा कर्तव्य है?",
        answers: shuffle([
            { text: "पहला", correct: true },
            { text: "दूसरा", correct: false },
            { text: "तीसरा", correct: false },
            { text: "चौथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 51-A में सूचीबद्ध 11 कर्तव्यों में यह सबसे पहला कर्तव्य (a) है।"
    },
    {
        question: "प्रश्न 44. यदि किसी नागरिक के मौलिक अधिकार का हनन होता है, तो वह अनुच्छेद 32 के तहत सीधे कहाँ जा सकता है?",
        answers: shuffle([
            { text: "जिला न्यायालय", correct: false },
            { text: "सत्र न्यायालय", correct: false },
            { text: "उच्च न्यायालय", correct: false },
            { text: "उच्चतम न्यायालय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 32 नागरिकों को अपने मौलिक अधिकारों को लागू कराने के लिए सीधे सर्वोच्च न्यायालय में याचिका दायर करने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 45. अधिकार और कर्तव्य के बीच संबंध को सबसे अच्छा कैसे वर्णित किया जा सकता है?",
        answers: shuffle([
            { text: "वे एक दूसरे के विरोधी हैं।", correct: false },
            { text: "वे सह-संबंधित (co-relative) हैं।", correct: true },
            { text: "अधिकार कर्तव्यों से अधिक महत्वपूर्ण हैं।", correct: false },
            { text: "कर्तव्य अधिकारों से अधिक महत्वपूर्ण हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकार और कर्तव्य आपस में जुड़े हुए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> एक का अधिकार दूसरे का कर्तव्य बन जाता है और कर्तव्यों के पालन से ही अधिकारों का सार्थक उपयोग संभव है।"
    },
    {
        question: "प्रश्न 46. 'बंधुआ मजदूरी उन्मूलन अधिनियम' संसद ने किस मौलिक अधिकार को प्रभावी करने के लिए पारित किया था?",
        answers: shuffle([
            { text: "अनुच्छेद 17", correct: false },
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 23", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अधिनियम अनुच्छेद 23 में उल्लिखित 'बलात् श्रम के प्रतिषेध' को लागू करने के लिए 1976 में बनाया गया था।"
    },
    {
        question: "प्रश्न 47. अपनी भाषा, लिपि और संस्कृति को सुरक्षित रखने का अधिकार किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 26", correct: false },
            { text: "अनुच्छेद 27", correct: false },
            { text: "अनुच्छेद 29", correct: true },
            { text: "अनुच्छेद 30", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 29(1) भारत के किसी भी भाग में रहने वाले नागरिकों के किसी भी अनुभाग को, जिसकी अपनी विशेष भाषा, लिपि या संस्कृति है, उसे बनाए रखने का अधिकार प्रदान करता है।"
    },
    {
        question: "प्रश्न 48. मौलिक कर्तव्यों को संविधान में शामिल करने का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "A) मौलिक अधिकारों को और अधिक मजबूत बनाना।", correct: false },
            { text: "B) विनाशकारी और असंवैधानिक गतिविधियों पर नियंत्रण रखना।", correct: false },
            { text: "C) नागरिकों में अनुशासन और राष्ट्र के प्रति प्रतिबद्धता की भावना पैदा करना।", correct: false },
            { text: "(B) और (C) दोनों।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्तव्यों को शामिल करने का उद्देश्य नागरिकों को यह याद दिलाना था कि अधिकारों का आनंद लेते समय, राष्ट्र के प्रति उनके कुछ कर्तव्य भी हैं और उन्हें राष्ट्र-विरोधी गतिविधियों से दूर रहना चाहिए।"
    },
    {
        question: "प्रश्न 49. 'परमादेश' (Mandamus) रिट किसके विरुद्ध जारी की जा सकती है?",
        answers: shuffle([
            { text: "निजी व्यक्ति", correct: false },
            { text: "निजी कंपनी", correct: false },
            { text: "कोई सार्वजनिक प्राधिकारी या सरकार", correct: true },
            { text: "राष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमादेश रिट का उपयोग किसी सार्वजनिक अधिकारी को उसके कानूनी कर्तव्यों का पालन करने का आदेश देने के लिए किया जाता है, जिसे करने में वह विफल रहा है।"
    },
    {
        question: "प्रश्न 50. क्या मौलिक अधिकार कार्यपालिका और विधायिका दोनों की शक्तियों को सीमित करते हैं?",
        answers: shuffle([
            { text: "हाँ", correct: true },
            { text: "नहीं", correct: false },
            { text: "केवल कार्यपालिका की शक्तियों को", correct: false },
            { text: "केवल विधायिका की शक्तियों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक अधिकार राज्य के विरुद्ध एक गारंटी हैं, और 'राज्य' की परिभाषा (अनुच्छेद 12) में सरकार (कार्यपालिका) और संसद (विधायिका) दोनों शामिल हैं।"
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