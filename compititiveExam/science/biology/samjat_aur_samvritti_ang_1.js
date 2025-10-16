const questions = [
    {
        topHeading: "समजात और समवृत्ति अंगों पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1: वे अंग जिनकी संरचना और उत्पत्ति समान होती है, लेकिन कार्य भिन्न होते हैं, क्या कहलाते हैं?",
        answers: shuffle([
            { text: "समवृत्ति अंग", correct: false },
            { text: "समजात अंग", correct: true },
            { text: "अवशेषी अंग", correct: false },
            { text: "जीवाश्म अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समजात अंग (Homologous organs) वे होते हैं जिनकी मूल संरचना और भ्रूणीय विकास समान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन वे अलग-अलग कार्य करने के लिए अनुकूलित हो जाते हैं।"
    },
    {
        question: "प्रश्न 2: मनुष्य का हाथ, व्हेल का फ्लिपर और चमगादड़ का पंख किस प्रकार के अंगों के उदाहरण हैं?",
        answers: shuffle([
            { text: "समजात अंग", correct: true },
            { text: "समवृत्ति अंग", correct: false },
            { text: "अवशेषी अंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन सभी अंगों की हड्डियों की मूल संरचना समान है (ह्यूमरस, रेडियस, अल्ना आदि), जो एक साझा पूर्वज को इंगित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  भले ही उनके कार्य (पकड़ना, तैरना, उड़ना) अलग-अलग हों।"
    },
    {
        question: "प्रश्न 3: पक्षी के पंख और कीट के पंख किस प्रकार के अंग हैं?",
        answers: shuffle([
            { text: "समजात अंग", correct: false },
            { text: "समवृत्ति अंग", correct: true },
            { text: "विकासात्मक अंग", correct: false },
            { text: "अवशेषी अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पक्षी के पंख हड्डियों और पंखों से बने होते हैं जबकि कीट के पंख काइटिन की पतली झिल्ली से बने होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इनकी उत्पत्ति और संरचना भिन्न है, लेकिन दोनों का कार्य (उड़ना) समान है।"
    },
    {
        question: "प्रश्न 4: समजात अंग किस प्रकार के विकास को दर्शाते हैं?",
        answers: shuffle([
            { text: "अभिसारी विकास (Convergent Evolution)", correct: false },
            { text: "अपसारी विकास (Divergent Evolution)", correct: true },
            { text: "समानांतर विकास (Parallel Evolution)", correct: false },
            { text: "प्रतिगामी विकास (Retrogressive Evolution)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपसारी विकास में, एक साझा पूर्वज से संबंधित प्रजातियां अलग-अलग वातावरण के अनुकूल होने के लिए विभिन्न दिशाओं में विकसित होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे समजात अंगों का निर्माण होता है।"
    },
    {
        question: "प्रश्न 5: वे अंग जिनकी उत्पत्ति और संरचना भिन्न होती है, लेकिन कार्य समान होते हैं, क्या कहलाते हैं?",
        answers: shuffle([
            { text: "समजात अंग", correct: false },
            { text: "अवशेषी अंग", correct: false },
            { text: "संयोजी अंग", correct: false },
            { text: "समवृत्ति अंग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समवृत्ति अंग (Analogous organs) वे होते हैं जो समान कार्य करने के लिए विकसित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन उनकी आंतरिक संरचना और विकासात्मक उत्पत्ति पूरी तरह से भिन्न होती है।"
    },
    {
        question: "प्रश्न 6: समवृत्ति अंग किस प्रकार के विकास का परिणाम हैं?",
        answers: shuffle([
            { text: "अपसारी विकास", correct: false },
            { text: "अभिसारी विकास", correct: true },
            { text: "कृत्रिम विकास", correct: false },
            { text: "चक्रीय विकास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिसारी विकास में, असंबंधित प्रजातियां समान पर्यावरणीय दबावों के कारण समान लक्षण या अंग विकसित करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे समवृत्ति अंगों का निर्माण होता है।"
    },
    {
        question: "प्रश्न 7: निम्नलिखित में से कौन सा जोड़ा समजात अंगों का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "मेंढक के अग्रपाद और पक्षी के पंख", correct: false },
            { text: "बोगेनविलिया के कांटे और कुकुरबिटा के प्रतान", correct: false },
            { text: "आलू और शकरकंद", correct: true },
            { text: "मनुष्य के दांत और हाथी के दांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलू एक रूपांतरित तना है, जबकि शकरकंद एक रूपांतरित जड़ है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यद्यपि दोनों भोजन संग्रहित करते हैं, उनकी उत्पत्ति और संरचना भिन्न है, इसलिए वे समवृत्ति हैं, समजात नहीं।"
    },
    {
        question: "प्रश्न 8: ऑक्टोपस की आँख और स्तनधारी की आँख किसका उदाहरण हैं?",
        answers: shuffle([
            { text: "समजात अंग", correct: false },
            { text: "समवृत्ति अंग", correct: true },
            { text: "अवशेषी अंग", correct: false },
            { text: "ये दोनों अंग नहीं हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों आँखें देखने का कार्य करती हैं (समान कार्य), लेकिन उनके विकासात्मक पैटर्न और आंतरिक संरचना (जैसे रेटिना की व्यवस्था) में बहुत अंतर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह अभिसारी विकास का एक क्लासिक उदाहरण है।"
    },
    {
        question: "प्रश्न 9: बोगेनविलिया के कांटे और कुकुरबिटा (लौकी) के प्रतान (tendrils) समजात अंग क्यों माने जाते हैं?",
        answers: shuffle([
            { text: "क्योंकि वे समान दिखते हैं", correct: false },
            { text: "क्योंकि वे दोनों पौधों को सहारा देते हैं", correct: false },
            { text: "क्योंकि दोनों कक्षीय कली (axillary bud) से विकसित होते हैं", correct: true },
            { text: "क्योंकि वे समान कार्य करते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि कांटा सुरक्षा के लिए और प्रतान चढ़ने के लिए होता है, दोनों की उत्पत्ति कक्षीय कली से होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उनकी समान संरचना और विकास को दर्शाता है।"
    },
    {
        question: "प्रश्न 10: डॉल्फ़िन के फ्लिपर और पेंगुइन के फ्लिपर किस प्रकार के अंग हैं?",
        answers: shuffle([
            { text: "समजात अंग", correct: false },
            { text: "समवृत्ति अंग", correct: true },
            { text: "अवशेषी अंग", correct: false },
            { text: "समजात और समवृत्ति दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉल्फ़िन एक स्तनधारी है और पेंगुइन एक पक्षी है।<br><br><i class='fa-solid fa-angles-right icon'></i>  उनके फ्लिपर तैरने के लिए हैं (समान कार्य), लेकिन उनकी आंतरिक हड्डी की संरचना और विकासवादी उत्पत्ति बहुत अलग है, इसलिए वे समवृत्ति हैं।"
    },
    {
        question: "प्रश्न 11: समजातता (Homology) किस बारे में प्रमाण प्रदान करती है?",
        answers: shuffle([
            { text: "साझा वंश (Common Ancestry)", correct: true },
            { text: "समान निवास स्थान", correct: false },
            { text: "समान जीवनशैली", correct: false },
            { text: "स्वतंत्र विकास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब विभिन्न प्रजातियों में समान मूल संरचना वाले अंग पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो यह इस बात का एक मजबूत सबूत है कि वे एक साझा पूर्वज से विकसित हुए हैं।"
    },
    {
        question: "प्रश्न 12: निम्नलिखित में से कौन सा समवृत्ति अंगों का एक जोड़ा है?",
        answers: shuffle([
            { text: "घोड़े का अग्रपाद और मनुष्य का हाथ", correct: false },
            { text: "तिलचट्टे का पंख और कबूतर का पंख", correct: true },
            { text: "बंदर की पूंछ और कुत्ते की पूंछ", correct: false },
            { text: "मेंढक का दिल और मगरमच्छ का दिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिलचट्टे का पंख काइटिन से और कबूतर का पंख हड्डियों से बना होता है (भिन्न संरचना)।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन दोनों उड़ने के काम आते हैं (समान कार्य)।"
    },
    {
        question: "प्रश्न 13: आलू (तना) और अदरक (प्रकंद) पौधों के किस प्रकार के अंग हैं?",
        answers: shuffle([
            { text: "समजात अंग", correct: true },
            { text: "समवृत्ति अंग", correct: false },
            { text: "तने का रूपांतरण", correct: false },
            { text: "फूल का रूपांतरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलू और अदरक दोनों ही भूमिगत तने के रूपांतरण हैं जो भोजन संग्रहित करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  चूँकि दोनों की मूल उत्पत्ति 'तना' है, वे समजात हैं।"
    },
    {
        question: "प्रश्न 14: विकास के अध्ययन में समजात और समवृत्ति अंगों का महत्व क्या है?",
        answers: shuffle([
            { text: "वे प्रजातियों के बीच विकासवादी संबंधों को समझने में मदद करते हैं", correct: true },
            { text: "वे केवल जीवों के कार्यों का वर्णन करते हैं", correct: false },
            { text: "वे आनुवंशिक कोड को समझने में मदद करते हैं", correct: false },
            { text: "वे जलवायु परिवर्तन का अध्ययन करने में मदद करते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समजातता साझा वंश को इंगित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि समवृत्तिता यह दर्शाती है कि कैसे विभिन्न वंश समान पर्यावरणीय चुनौतियों के लिए अनुकूलित हो सकते हैं। दोनों ही विकासवादी संबंधों को समझने में महत्वपूर्ण हैं।"
    },
    {
        question: "प्रश्न 15: मानव में अपेंडिक्स (Appendix) और अक्ल दाढ़ (Wisdom teeth) किस प्रकार के अंग हैं?",
        answers: shuffle([
            { text: "समजात अंग", correct: false },
            { text: "समवृत्ति अंग", correct: false },
            { text: "अवशेषी अंग", correct: true },
            { text: "पूरी तरह से कार्यात्मक अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवशेषी अंग वे संरचनाएं हैं जो हमारे पूर्वजों में कार्यात्मक थीं लेकिन अब उनका कोई महत्वपूर्ण कार्य नहीं रह गया है।<br><br><i class='fa-solid fa-angles-right icon'></i>  (जैसे अपेंडिक्स का उपयोग सेलूलोज़ पाचन में होता था)।"
    },
    {
        question: "प्रश्न 16: तितली और चमगादड़ दोनों उड़ सकते हैं। उनके पंख एक उदाहरण हैं:",
        answers: shuffle([
            { text: "अपसारी विकास का", correct: false },
            { text: "अनुकूली विकिरण का", correct: false },
            { text: "अभिसारी विकास का", correct: true },
            { text: "सह-विकास का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि तितली एक कीट है और चमगादड़ एक स्तनपायी है, उनके पंखों की संरचना अलग-अलग है लेकिन कार्य समान है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो अभिसारी विकास का परिणाम है।"
    },
    {
        question: "प्रश्न 17: कौन सा कथन समजात अंगों के बारे में सही है?",
        answers: shuffle([
            { text: "उनकी उत्पत्ति भिन्न और कार्य समान होते हैं", correct: false },
            { text: "उनकी उत्पत्ति समान और कार्य समान होते हैं", correct: false },
            { text: "उनकी उत्पत्ति समान और कार्य भिन्न हो सकते हैं", correct: true },
            { text: "वे हमेशा अवशेषी होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समजातता का मूल सिद्धांत यही है कि एक समान संरचनात्मक योजना को विभिन्न कार्यों के लिए संशोधित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए उनकी उत्पत्ति समान होती है, लेकिन कार्य भिन्न हो सकते हैं।"
    },
    {
        question: "प्रश्न 18: मछली के गलफड़े और मनुष्य के फेफड़े किस प्रकार के अंग हैं?",
        answers: shuffle([
            { text: "A) समजात अंग", correct: false },
            { text: "B) समवृत्ति अंग", correct: true },
            { text: "A), B) दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों श्वसन अंग हैं (समान कार्य), लेकिन उनकी संरचना और विकास पूरी तरह से अलग हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  गलफड़े पानी से ऑक्सीजन लेते हैं जबकि फेफड़े हवा से, इसलिए वे समवृत्ति अंग हैं।"
    },
    {
        question: "प्रश्न 19: कौन सा कथन समवृत्ति अंगों के लिए सत्य है?",
        answers: shuffle([
            { text: "वे हमेशा एक साझा पूर्वज का संकेत देते हैं", correct: false },
            { text: "वे हमेशा अभिसारी विकास का परिणाम होते हैं", correct: true },
            { text: "उनकी भ्रूणीय उत्पत्ति समान होती है", correct: false },
            { text: "उनकी मूल संरचना समान होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समवृत्तिता तब उत्पन्न होती है जब विभिन्न वंशों को समान पर्यावरणीय समस्याओं का सामना करना पड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और वे स्वतंत्र रूप से समान समाधान (जैसे पंख) विकसित करते हैं, जो अभिसारी विकास का परिणाम है।"
    },
    {
        question: "प्रश्न 20: कशेरुकियों (Vertebrates) के अग्रपाद (forelimbs) किस बात का एक उत्कृष्ट उदाहरण हैं?",
        answers: shuffle([
            { text: "समजातता (Homology)", correct: true },
            { text: "समवृत्तिता (Analogy)", correct: false },
            { text: "अनुवांशिक विचलन (Genetic Drift)", correct: false },
            { text: "उत्परिवर्तन (Mutation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी कशेरुकियों (मनुष्य, चमगादड़, व्हेल, घोड़ा) के अग्रपादों में हड्डियों का एक ही मूल पैटर्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उनके साझा कशेरुकी पूर्वज को दर्शाता है, इसलिए यह समजातता का उदाहरण है।"
    },
    {
        question: "प्रश्न 21: पौधों में, गाजर (जड़) और मूली (जड़) किस प्रकार के अंग हैं?",
        answers: shuffle([
            { text: "समजात अंग", correct: true },
            { text: "समवृत्ति अंग", correct: false },
            { text: "तने का रूपांतरण", correct: false },
            { text: "फूल का रूपांतरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाजर और मूली दोनों ही मूसला जड़ (tap root) के रूपांतरण हैं जो भोजन संग्रहित करने के लिए फूल गए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  चूंकि दोनों की उत्पत्ति 'जड़' से हुई है, वे समजात हैं।"
    },
    {
        question: "प्रश्न 22: किसी प्रजाति के विकासवादी इतिहास को क्या कहा जाता है?",
        answers: shuffle([
            { text: "भ्रूण विज्ञान (Embryology)", correct: false },
            { text: "जातिवृत्त (Phylogeny)", correct: true },
            { text: "पारिस्थितिकी (Ecology)", correct: false },
            { text: "जीवाश्मिकी (Paleontology)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जातिवृत्त या फाइलोजेनी (Phylogeny), प्रजातियों या समूहों के बीच विकासवादी संबंधों का अध्ययन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और समजात अंगों का विश्लेषण इसे निर्धारित करने का एक प्रमुख उपकरण है।"
    },
    {
        question: "प्रश्न 23: मधुमक्खी का डंक और बिच्छू का डंक किसका उदाहरण है?",
        answers: shuffle([
            { text: "समजात अंग", correct: false },
            { text: "समवृत्ति अंग", correct: true },
            { text: "अवशेषी अंग", correct: false },
            { text: "लैंगिक अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों का उपयोग आत्मरक्षा या शिकार के लिए जहर इंजेक्ट करने (समान कार्य) के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन मधुमक्खी का डंक उसके अंडरोपक (ovipositor) का एक रूपांतरण है, जबकि बिच्छू का डंक उसकी पूंछ के अंतिम खंड का हिस्सा है (भिन्न उत्पत्ति)।"
    },
    {
        question: "प्रश्न 24: कौन सी संरचनात्मक समानता विकासवादी संबंधों का बेहतर प्रमाण देती है?",
        answers: shuffle([
            { text: "समवृत्ति", correct: false },
            { text: "समजातता", correct: true },
            { text: "अनुकूलन", correct: false },
            { text: "भिन्नता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समजातता सीधे तौर पर साझा वंश से जुड़ी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो प्रजातियों के बीच घनिष्ठ विकासवादी संबंध का सबसे मजबूत प्रमाण है।"
    },
    {
        question: "प्रश्न 25: कीवी पक्षी के पंख, जो उड़ने में असमर्थ हैं, क्या कहलाते हैं?",
        answers: shuffle([
            { text: "समजात अंग", correct: false },
            { text: "समवृत्ति अंग", correct: false },
            { text: "अवशेषी अंग", correct: true },
            { text: "कार्यात्मक अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये पंख उन पूर्वजों के अवशेष हैं जो उड़ सकते थे।<br><br><i class='fa-solid fa-angles-right icon'></i>  अब उनका उड़ने का कार्य समाप्त हो गया है, इसलिए वे अवशेषी माने जाते हैं।"
    },
    {
        question: "प्रश्न 26: तोते के पंख और टिड्डे के पंख में क्या समानता है?",
        answers: shuffle([
            { text: "संरचना", correct: false },
            { text: "उत्पत्ति", correct: false },
            { text: "कार्य", correct: true },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनकी संरचना और उत्पत्ति पूरी तरह से अलग हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन इनमें एकमात्र समानता यह है कि दोनों ही उड़ने के कार्य में उपयोग होते हैं।"
    },
    {
        question: "प्रश्न 27: पादप प्रतान (Plant tendrils) जो विभिन्न संरचनाओं (तना या पत्ती) से उत्पन्न हो सकते हैं, एक अच्छा उदाहरण हैं:",
        answers: shuffle([
            { text: "केवल समजातता का", correct: false },
            { text: "केवल समवृत्तिता का", correct: false },
            { text: "समजातता और समवृत्तिता दोनों का (संदर्भ के आधार पर)", correct: true },
            { text: "अवशेषी अंगों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मटर में प्रतान पत्ती का रूपांतरण है, जबकि अंगूर में यह तने का रूपांतरण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  दोनों चढ़ने में मदद करते हैं (समान कार्य), लेकिन उनकी उत्पत्ति अलग है, इसलिए वे समवृत्ति हैं। (हालांकि, कुकुरबिटा और अंगूर के प्रतान दोनों तने से उत्पन्न होते हैं, इसलिए वे आपस में समजात हैं)।"
    },
    {
        question: "प्रश्न 28: एक 'जीवित जीवाश्म' (Living Fossil) क्या है?",
        answers: shuffle([
            { text: "एक जीवाश्म जो अभी भी जीवित है", correct: false },
            { text: "एक विलुप्त प्रजाति का जीवाश्म", correct: false },
            { text: "एक जीवित प्रजाति जो लाखों वर्षों से अपरिवर्तित है और अपने विलुप्त रिश्तेदारों से मिलती-जुलती है", correct: true },
            { text: "एक हाल ही में खोजा गया जीवाश्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, सीलोकैंथ (Coelacanth) मछली।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये जीव विकास की धीमी गति को दर्शाते हैं और समजात अंगों के अध्ययन में मदद करते हैं।"
    },
    {
        question: "प्रश्न 29: व्हेल और सील दोनों स्तनधारी हैं और तैरने के लिए फ्लिपर का उपयोग करते हैं। उनके फ्लिपर हैं:",
        answers: shuffle([
            { text: "समजात अंग", correct: true },
            { text: "समवृत्ति अंग", correct: false },
            { text: "अवशेषी अंग", correct: false },
            { text: "कोई विकासवादी संबंध नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि व्हेल और सील दोनों स्तनधारी हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  उनके फ्लिपर एक सामान्य चार-पैर वाले स्थलीय पूर्वज के अग्रपादों से विकसित हुए हैं। इसलिए, उनकी मूल संरचना समान है, और वे समजात हैं।"
    },
    {
        question: "प्रश्न 30: विकास का कौन सा प्रमाण सीधे तौर पर एक साझा पूर्वज से वंशानुक्रम को दर्शाता है?",
        answers: shuffle([
            { text: "जीवाश्म रिकॉर्ड", correct: false },
            { text: "भौगोलिक वितरण", correct: false },
            { text: "समजात संरचनाएं", correct: true },
            { text: "समवृत्ति संरचनाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समजात संरचनाएं, परिभाषा के अनुसार, एक साझा पूर्वज से विरासत में मिली संशोधित संरचनाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो सीधे तौर पर वंशानुक्रम और विकासवादी संबंधों को दर्शाती हैं।"
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