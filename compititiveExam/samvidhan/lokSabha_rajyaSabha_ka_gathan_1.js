const questions = [
    {
        topHeading: "राज्यसभा और लोकसभा के गठन पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संसद का उपरी सदन किसे कहा जाता है?",
        answers: shuffle([
            { text: "लोकसभा", correct: false },
            { text: "राज्यसभा", correct: true },
            { text: "विधानसभा", correct: false },
            { text: "मंत्रिपरिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यसभा को 'उच्च सदन' या 'राज्यों की परिषद' कहा जाता है क्योंकि यह राज्यों और केंद्र शासित प्रदेशों का प्रतिनिधित्व करती है।"
    },
    {
        question: "प्रश्न 2. लोकसभा के सदस्यों की अधिकतम संख्या कितनी हो सकती है?",
        answers: shuffle([
            { text: "543", correct: false },
            { text: "545", correct: false },
            { text: "550", correct: true },
            { text: "552", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 104वें संविधान संशोधन (2019) के बाद, एंग्लो-इंडियन समुदाय के दो मनोनीत सदस्यों का प्रावधान समाप्त होने से लोकसभा की अधिकतम संख्या 552 से घटाकर 550 कर दी गई है।"
    },
    {
        question: "प्रश्न 3. राज्यसभा के कितने सदस्य राष्ट्रपति द्वारा मनोनीत किए जाते हैं?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "15", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति साहित्य, कला, विज्ञान और समाज सेवा जैसे क्षेत्रों में विशेष ज्ञान या व्यावहारिक अनुभव रखने वाले 12 सदस्यों को राज्यसभा के लिए मनोनीत करते हैं।"
    },
    {
        question: "प्रश्न 4. लोकसभा का सदस्य बनने के लिए न्यूनतम आयु क्या है?",
        answers: shuffle([
            { text: "21 वर्ष", correct: false },
            { text: "25 वर्ष", correct: true },
            { text: "30 वर्ष", correct: false },
            { text: "35 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 84(b) के अनुसार, लोकसभा सदस्य के लिए न्यूनतम आयु 25 वर्ष और राज्यसभा सदस्य के लिए 30 वर्ष है।"
    },
    {
        question: "प्रश्न 5. राज्यसभा के सदस्यों का कार्यकाल कितना होता है?",
        answers: shuffle([
            { text: "4 वर्ष", correct: false },
            { text: "5 वर्ष", correct: false },
            { text: "6 वर्ष", correct: true },
            { text: "यह एक स्थायी सदन है, सदस्यों का कोई कार्यकाल नहीं होता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यसभा एक स्थायी सदन है और इसके सदस्यों का कार्यकाल 6 वर्ष का होता है, जिसमें से एक-तिहाई सदस्य हर दो साल में सेवानिवृत्त हो जाते हैं।"
    },
    {
        question: "प्रश्न 6. राज्यसभा के सदस्यों का चुनाव किस पद्धति से होता है?",
        answers: shuffle([
            { text: "प्रत्यक्ष मतदान", correct: false },
            { text: "आनुपातिक प्रतिनिधित्व पद्धति के अनुसार एकल संक्रमणीय मत द्वारा", correct: true },
            { text: "फर्स्ट-पास्ट-द-पोस्ट प्रणाली", correct: false },
            { text: "राष्ट्रपति द्वारा मनोनयन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यसभा के सदस्यों का चुनाव राज्यों की विधानसभाओं के निर्वाचित सदस्यों द्वारा आनुपातिक प्रतिनिधित्व प्रणाली के अनुसार किया जाता है।"
    },
    {
        question: "प्रश्न 7. राज्यों और केंद्र शासित प्रदेशों को राज्यसभा में सीटों का आवंटन किस अनुसूची में वर्णित है?",
        answers: shuffle([
            { text: "पहली अनुसूची", correct: false },
            { text: "दूसरी अनुसूची", correct: false },
            { text: "चौथी अनुसूची", correct: true },
            { text: "दसवीं अनुसूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चौथी अनुसूची में विभिन्न राज्यों और केंद्र शासित प्रदेशों के लिए राज्यसभा में सीटों के आवंटन का प्रावधान है, जो जनसंख्या के आधार पर होता है।"
    },
    {
        question: "प्रश्न 8. किस सदन को कभी भंग नहीं किया जा सकता?",
        answers: shuffle([
            { text: "लोकसभा", correct: false },
            { text: "राज्यसभा", correct: true },
            { text: "विधानसभा", correct: false },
            { text: "विधान परिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यसभा एक स्थायी या निरंतर चलने वाला सदन है, और इसे भंग नहीं किया जा सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके सदस्य चरणबद्ध तरीके से सेवानिवृत्त होते हैं।"
    },
    {
        question: "प्रश्न 9. संविधान के किस अनुच्छेद के तहत संसद का गठन किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 76", correct: false },
            { text: "अनुच्छेद 79", correct: true },
            { text: "अनुच्छेद 80", correct: false },
            { text: "अनुच्छेद 81", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 79 में कहा गया है कि संघ के लिए एक संसद होगी जिसमें राष्ट्रपति और दो सदन, राज्यसभा और लोकसभा होंगे।"
    },
    {
        question: "प्रश्न 10. राज्यसभा की संरचना का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 79", correct: false },
            { text: "अनुच्छेद 80", correct: true },
            { text: "अनुच्छेद 81", correct: false },
            { text: "अनुच्छेद 82", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 80 राज्यसभा की संरचना का विस्तृत वर्णन करता है, जिसमें अधिकतम सदस्य संख्या (250) और मनोनीत सदस्यों का प्रावधान शामिल है।"
    },
    {
        question: "प्रश्न 11. लोकसभा की संरचना का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 80", correct: false },
            { text: "अनुच्छेद 81", correct: true },
            { text: "अनुच्छेद 83", correct: false },
            { text: "अनुच्छेद 84", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 81 लोकसभा की संरचना से संबंधित है, जिसमें राज्यों और केंद्र शासित प्रदेशों से सदस्यों के निर्वाचन का प्रावधान है।"
    },
    {
        question: "प्रश्न 12. राज्यसभा का गठन पहली बार किस वर्ष किया गया था?",
        answers: shuffle([
            { text: "1947", correct: false },
            { text: "1950", correct: false },
            { text: "1952", correct: true },
            { text: "1951", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहले आम चुनावों के बाद, 'काउंसिल ऑफ स्टेट्स' (राज्यसभा) का गठन 3 अप्रैल 1952 को हुआ था।"
    },
    {
        question: "प्रश्न 13. भारत में पहली लोकसभा का गठन कब हुआ था?",
        answers: shuffle([
            { text: "26 जनवरी 1950", correct: false },
            { text: "17 अप्रैल 1952", correct: true },
            { text: "15 अगस्त 1947", correct: false },
            { text: "3 अप्रैल 1952", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहले आम चुनावों के बाद, पहली लोकसभा का विधिवत गठन 17 अप्रैल 1952 को हुआ था।"
    },
    {
        question: "प्रश्न 14. किस राज्य से राज्यसभा के लिए सबसे अधिक सदस्य चुने जाते हैं?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "उत्तर प्रदेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनसंख्या के आधार पर सीटों का आवंटन होता है, और सबसे अधिक जनसंख्या वाला राज्य होने के कारण उत्तर प्रदेश से सर्वाधिक 31 सदस्य चुने जाते हैं।"
    },
    {
        question: "प्रश्न 15. लोकसभा में अनुसूचित जातियों (SC) और अनुसूचित जनजातियों (ST) के लिए सीटों का आरक्षण किस अनुच्छेद के तहत किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 330", correct: true },
            { text: "अनुच्छेद 331", correct: false },
            { text: "अनुच्छेद 332", correct: false },
            { text: "अनुच्छेद 243", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 330 लोकसभा में अनुसूचित जातियों और अनुसूचित जनजातियों के लिए सीटों के आरक्षण का प्रावधान करता है।"
    },
    {
        question: "प्रश्न 16. लोकसभा अध्यक्ष (Speaker) का चुनाव कौन करता है?",
        answers: shuffle([
            { text: "भारत के राष्ट्रपति", correct: false },
            { text: "संसद के सभी सदस्य", correct: false },
            { text: "प्रधानमंत्री और मंत्रिपरिषद", correct: false },
            { text: "लोकसभा के सदस्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नई लोकसभा के गठन के बाद, सदस्य अपने में से ही किसी एक को अध्यक्ष के रूप में चुनते हैं।"
    },
    {
        question: "प्रश्न 17. राज्यसभा का पदेन सभापति कौन होता है?",
        answers: shuffle([
            { text: "भारत के राष्ट्रपति", correct: false },
            { text: "भारत के उपराष्ट्रपति", correct: true },
            { text: "राज्यसभा द्वारा निर्वाचित सदस्य", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 64 और 89(1) के अनुसार, भारत का उपराष्ट्रपति राज्यसभा का पदेन सभापति होता है।"
    },
    {
        question: "प्रश्न 18. लोकसभा अध्यक्ष अपना त्यागपत्र किसे सौंपता है?",
        answers: shuffle([
            { text: "राष्ट्रपति को", correct: false },
            { text: "प्रधानमंत्री को", correct: false },
            { text: "लोकसभा उपाध्यक्ष को", correct: true },
            { text: "भारत के मुख्य न्यायाधीश को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकसभा अध्यक्ष अपना त्यागपत्र उपाध्यक्ष को और उपाध्यक्ष अपना त्यागपत्र अध्यक्ष को सौंपता है।"
    },
    {
        question: "प्रश्न 19. राज्यसभा के उपसभापति को कौन चुनता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "उपराष्ट्रपति", correct: false },
            { text: "राज्यसभा के सदस्य", correct: true },
            { text: "संसद के सभी सदस्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यसभा के सदस्य अपने में से ही किसी एक सदस्य को उपसभापति के रूप में चुनते हैं।"
    },
    {
        question: "प्रश्न 20. लोकसभा के पहले अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "डॉ. सर्वपल्ली राधाकृष्णन", correct: false },
            { text: "एस.वी. कृष्णमूर्ति राव", correct: false },
            { text: "जी.वी. मावलंकर", correct: true },
            { text: "एम. ए. अय्यंगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्री गणेश वासुदेव मावलंकर पहली लोकसभा (1952-56) के अध्यक्ष थे।"
    },
    {
        question: "प्रश्न 21. राज्यसभा के पहले सभापति कौन थे?",
        answers: shuffle([
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "एस.वी. कृष्णमूर्ति राव", correct: false },
            { text: "जी.वी. मावलंकर", correct: false },
            { text: "डॉ. सर्वपल्ली राधाकृष्णन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि वे भारत के पहले उपराष्ट्रपति थे, इसलिए वे राज्यसभा के पहले पदेन सभापति भी थे।"
    },
    {
        question: "प्रश्न 22. कोई विधेयक धन विधेयक है या नहीं, इसका अंतिम निर्णय कौन करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "वित्त मंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: true },
            { text: "राज्यसभा के सभापति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 110(3) के अनुसार, कोई विधेयक धन विधेयक है या नहीं, इस पर लोकसभा अध्यक्ष का निर्णय अंतिम होता है।"
    },
    {
        question: "प्रश्न 23. संसद के दोनों सदनों की संयुक्त बैठक की अध्यक्षता कौन करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राज्यसभा के सभापति", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 118(4) के अनुसार, संयुक्त बैठक की अध्यक्षता लोकसभा अध्यक्ष करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी अनुपस्थिति में, उपाध्यक्ष करते हैं।"
    },
    {
        question: "प्रश्न 24. अविश्वास प्रस्ताव (No-confidence motion) किस सदन में पेश किया जा सकता है?",
        answers: shuffle([
            { text: "केवल राज्यसभा में", correct: false },
            { text: "केवल लोकसभा में", correct: true },
            { text: "दोनों में से किसी भी सदन में", correct: false },
            { text: "दोनों सदनों की संयुक्त बैठक में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 75(3) के अनुसार, मंत्रिपरिषद सामूहिक रूप से लोकसभा के प्रति उत्तरदायी होती है, इसलिए अविश्वास प्रस्ताव केवल लोकसभा में ही लाया जा सकता है।"
    },
    {
        question: "प्रश्न 25. राज्यसभा की विशेष शक्ति निम्नलिखित में से किस से संबंधित है?",
        answers: shuffle([
            { text: "धन विधेयक में संशोधन करना", correct: false },
            { text: "सरकार के खिलाफ अविश्वास प्रस्ताव लाना", correct: false },
            { text: "नई अखिल भारतीय सेवाओं का सृजन करना", correct: true },
            { text: "राष्ट्रपति पर महाभियोग चलाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 312 के तहत, राज्यसभा यदि उपस्थित और मतदान करने वाले दो-तिहाई सदस्यों के बहुमत से प्रस्ताव पारित करती है तो संसद नई अखिल भारतीय सेवा बना सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह इसकी अनन्य शक्ति है।"
    },
    {
        question: "प्रश्न 26. धन विधेयक के संबंध में राज्यसभा अधिकतम कितने दिनों की देरी कर सकती है?",
        answers: shuffle([
            { text: "7 दिन", correct: false },
            { text: "14 दिन", correct: true },
            { text: "30 दिन", correct: false },
            { text: "6 महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यसभा को लोकसभा से प्राप्त धन विधेयक को 14 दिनों के भीतर अपनी सिफारिशों के साथ या बिना सिफारिशों के लौटाना होता है।"
    },
    {
        question: "प्रश्न 27. संसद के किसी भी सदन की बैठक के लिए गणपूर्ति (Quorum) क्या है?",
        answers: shuffle([
            { text: "कुल सदस्यों का 1/3", correct: false },
            { text: "कुल सदस्यों का 1/6", correct: false },
            { text: "कुल सदस्यों का 1/10", correct: true },
            { text: "कुल सदस्यों का आधा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 100(3) के अनुसार, किसी भी सदन की बैठक के लिए गणपूर्ति (कोरम) उस सदन की कुल सदस्य संख्या का दसवां हिस्सा है।"
    },
    {
        question: "प्रश्न 28. संसद के दो सत्रों के बीच अधिकतम कितना अंतराल हो सकता है?",
        answers: shuffle([
            { text: "3 महीने", correct: false },
            { text: "4 महीने", correct: false },
            { text: "6 महीने", correct: true },
            { text: "1 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुसार, संसद के एक सत्र की अंतिम बैठक और अगले सत्र की पहली बैठक के बीच छह महीने से अधिक का अंतर नहीं होना चाहिए।"
    },
    {
        question: "प्रश्न 29. एक साधारण विधेयक पर दोनों सदनों में गतिरोध होने पर क्या समाधान है?",
        answers: shuffle([
            { text: "विधेयक समाप्त हो जाता है", correct: false },
            { text: "राष्ट्रपति का निर्णय अंतिम होता है", correct: false },
            { text: "सर्वोच्च न्यायालय हस्तक्षेप करता है", correct: false },
            { text: "दोनों सदनों की संयुक्त बैठक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 108 के तहत, राष्ट्रपति एक साधारण विधेयक पर गतिरोध को हल करने के लिए दोनों सदनों की संयुक्त बैठक बुला सकते हैं।"
    },
    {
        question: "प्रश्न 30. बजट (वार्षिक वित्तीय विवरण) सबसे पहले किस सदन में प्रस्तुत किया जाता है?",
        answers: shuffle([
            { text: "राज्यसभा", correct: false },
            { text: "लोकसभा", correct: true },
            { text: "दोनों सदनों में एक साथ", correct: false },
            { text: "संयुक्त बैठक में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बजट से संबंधित धन विधेयक केवल लोकसभा में ही राष्ट्रपति की पूर्व अनुमति से प्रस्तुत किया जा सकता है।"
    },
    {
        question: "प्रश्न 31. किस अनुच्छेद के तहत राज्यसभा राष्ट्रीय हित में राज्य सूची के विषय पर कानून बनाने के लिए संसद को अधिकृत कर सकती है?",
        answers: shuffle([
            { text: "अनुच्छेद 248", correct: false },
            { text: "अनुच्छेद 249", correct: true },
            { text: "अनुच्छेद 250", correct: false },
            { text: "अनुच्छेद 312", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह राज्यसभा की एक और अनन्य शक्ति है, जहाँ वह दो-तिहाई बहुमत से प्रस्ताव पारित कर संसद को एक वर्ष की अवधि के लिए राज्य सूची के विषय पर कानून बनाने का अधिकार दे सकती है।"
    },
    {
        question: "प्रश्न 32. लोकसभा का विघटन कौन कर सकता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 85(2)(b) के तहत, राष्ट्रपति प्रधानमंत्री की सलाह पर लोकसभा को भंग कर सकते हैं।"
    },
    {
        question: "प्रश्न 33. संसद सदस्य न होते हुए भी कौन संसद की कार्यवाही में भाग ले सकता है, लेकिन मतदान नहीं कर सकता?",
        answers: shuffle([
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "भारत के महान्यायवादी (Attorney General)", correct: true },
            { text: "मुख्य चुनाव आयुक्त", correct: false },
            { text: "कैबिनेट सचिव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 88 के अनुसार, महान्यायवादी को संसद के किसी भी सदन की कार्यवाही में बोलने और भाग लेने का अधिकार है, लेकिन वह मतदान नहीं कर सकता।"
    },
    {
        question: "प्रश्न 34. संविधान संशोधन विधेयक के संबंध में क्या सत्य है?",
        answers: shuffle([
            { text: "यह केवल लोकसभा में प्रस्तुत किया जा सकता है", correct: false },
            { text: "इस पर संयुक्त बैठक बुलाई जा सकती है", correct: false },
            { text: "इसे दोनों सदनों द्वारा अलग-अलग विशेष बहुमत से पारित होना अनिवार्य है", correct: true },
            { text: "राष्ट्रपति इसे पुनर्विचार के लिए लौटा सकते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान संशोधन विधेयक पर दोनों सदनों में गतिरोध होने पर संयुक्त बैठक का कोई प्रावधान नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे दोनों सदनों में अलग-अलग पारित होना होता है।"
    },
    {
        question: "प्रश्न 35. संसद की \"लोकतंत्र की पाठशाला\" किसे कहा जाता है?",
        answers: shuffle([
            { text: "केंद्रीय कक्ष (Central Hall)", correct: false },
            { text: "संसदीय समितियाँ", correct: true },
            { text: "प्रश्न काल", correct: false },
            { text: "शून्य काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसदीय समितियों में विधेयकों और नीतियों की गहन जांच-पड़ताल होती है, जहाँ सांसद दलीय राजनीति से ऊपर उठकर कार्य करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इन्हें लोकतंत्र की पाठशाला या लघु संसद कहा जाता है।"
    },
    {
        question: "प्रश्न 36. किस सदन को 'प्रथम सदन' या 'लोकप्रिय सदन' कहा जाता है?",
        answers: shuffle([
            { text: "राज्यसभा", correct: false },
            { text: "लोकसभा", correct: true },
            { text: "विधानसभा", correct: false },
            { text: "संसद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि इसके सदस्य सीधे जनता द्वारा चुने जाते हैं, इसलिए इसे लोकप्रिय या प्रथम सदन कहते हैं।"
    },
    {
        question: "प्रश्न 37. राज्यसभा को पहले किस नाम से जाना जाता था?",
        answers: shuffle([
            { text: "काउंसिल ऑफ स्टेट्स", correct: true },
            { text: "हाउस ऑफ द पीपल", correct: false },
            { text: "इंपीरियल लेजिस्लेटिव काउंसिल", correct: false },
            { text: "सेंट्रल लेजिस्लेटिव असेंबली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1954 तक राज्यसभा को 'काउंसिल ऑफ स्टेट्स' (राज्यों की परिषद) के नाम से जाना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका हिंदी नाम 'राज्यसभा' 1954 में अपनाया गया।"
    },
    {
        question: "प्रश्न 38. एक वर्ष में लोकसभा के सामान्यतः कितने सत्र होते हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्यतः तीन सत्र होते हैं: बजट सत्र (फरवरी-मई), मानसून सत्र (जुलाई-सितंबर), और शीतकालीन सत्र (नवंबर-दिसंबर)।"
    },
    {
        question: "प्रश्न 39. प्राक्कलन समिति (Estimates Committee) में सदस्य कहाँ से होते हैं?",
        answers: shuffle([
            { text: "केवल राज्यसभा से", correct: false },
            { text: "केवल लोकसभा से", correct: true },
            { text: "लोकसभा और राज्यसभा दोनों से", correct: false },
            { text: "राष्ट्रपति द्वारा मनोनीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सबसे बड़ी संसदीय समिति है, जिसमें केवल लोकसभा से 30 सदस्य होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें राज्यसभा का कोई प्रतिनिधित्व नहीं होता।"
    },
    {
        question: "प्रश्न 40. लोक लेखा समिति (Public Accounts Committee) में कुल कितने सदस्य होते हैं?",
        answers: shuffle([
            { text: "15", correct: false },
            { text: "22", correct: true },
            { text: "30", correct: false },
            { text: "45", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस समिति में 22 सदस्य होते हैं, जिनमें से 15 लोकसभा से और 7 राज्यसभा से होते हैं।"
    },
    {
        question: "प्रश्न 41. किस केंद्र शासित प्रदेश का राज्यसभा में प्रतिनिधित्व नहीं है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "पुडुचेरी", correct: false },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "चंडीगढ़", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्तमान में केवल दिल्ली, पुडुचेरी और जम्मू और कश्मीर का राज्यसभा में प्रतिनिधित्व है क्योंकि उनकी अपनी विधानसभाएं हैं।"
    },
    {
        question: "प्रश्न 42. लोकसभा चुनाव की अधिसूचना कौन जारी करता है?",
        answers: shuffle([
            { text: "गृह मंत्रालय", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "चुनाव आयोग", correct: true },
            { text: "प्रधानमंत्री कार्यालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का चुनाव आयोग लोकसभा और विधानसभा चुनावों के लिए कार्यक्रम और अधिसूचना जारी करने के लिए जिम्मेदार है।"
    },
    {
        question: "प्रश्न 43. संसद सदस्य की अयोग्यता के संबंध में विवाद पर अंतिम निर्णय कौन लेता है (दलबदल को छोड़कर)?",
        answers: shuffle([
            { text: "सदन का पीठासीन अधिकारी", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: false },
            { text: "चुनाव आयोग", correct: false },
            { text: "राष्ट्रपति (चुनाव आयोग की सलाह पर)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 103 के अनुसार, संसद सदस्यों की अयोग्यता पर राष्ट्रपति का निर्णय अंतिम होता है, जो चुनाव आयोग की सलाह के अनुसार दिया जाता है।"
    },
    {
        question: "प्रश्न 44. लोकसभा का सामान्य कार्यकाल 5 वर्ष होता है, इसकी गणना कब से की जाती है?",
        answers: shuffle([
            { text: "चुनाव परिणाम की तारीख से", correct: false },
            { text: "सदस्यों के शपथ ग्रहण की तारीख से", correct: false },
            { text: "उसकी पहली बैठक की तारीख से", correct: true },
            { text: "सरकार के गठन की तारीख से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकसभा का कार्यकाल उसकी पहली बैठक के लिए नियत तारीख से 5 वर्ष का होता है।"
    },
    {
        question: "प्रश्न 45. \"प्रोटेम स्पीकर\" का क्या कर्तव्य होता है?",
        answers: shuffle([
            { text: "अध्यक्ष की अनुपस्थिति में सदन चलाना", correct: false },
            { text: "नए सदस्यों को शपथ दिलाना", correct: true },
            { text: "सदन में अनुशासन बनाए रखना", correct: false },
            { text: "अविश्वास प्रस्ताव पर मतदान कराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटेम स्पीकर (आमतौर पर सबसे वरिष्ठ सदस्य) की नियुक्ति राष्ट्रपति द्वारा की जाती है, और उनका मुख्य कार्य नए लोकसभा सदस्यों को शपथ दिलाना और नए अध्यक्ष के चुनाव तक सदन की अध्यक्षता करना होता है।"
    },
    {
        question: "प्रश्न 46. 104वें संविधान संशोधन अधिनियम, 2019 ने लोकसभा में किस समुदाय के मनोनयन को समाप्त कर दिया?",
        answers: shuffle([
            { text: "अनुसूचित जाति", correct: false },
            { text: "पारसी", correct: false },
            { text: "एंग्लो-इंडियन (आंग्ल-भारतीय)", correct: true },
            { text: "सिख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस संशोधन ने लोकसभा और राज्य विधानसभाओं में एंग्लो-इंडियन समुदाय के लिए सीटों के आरक्षण (मनोनयन द्वारा) को समाप्त कर दिया।"
    },
    {
        question: "प्रश्न 47. लोकसभा या राज्यसभा का सदस्य अपना त्यागपत्र किसे संबोधित करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति को", correct: false },
            { text: "प्रधानमंत्री को", correct: false },
            { text: "अपनी पार्टी के अध्यक्ष को", correct: false },
            { text: "संबंधित सदन के पीठासीन अधिकारी को", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकसभा का सदस्य अध्यक्ष को और राज्यसभा का सदस्य सभापति को अपना लिखित त्यागपत्र सौंपता है।"
    },
    {
        question: "प्रश्न 48. निम्नलिखित में से कौन सी समिति भारत के नियंत्रक और महालेखा परीक्षक (CAG) की रिपोर्ट की जांच करती है?",
        answers: shuffle([
            { text: "प्राक्कलन समिति", correct: false },
            { text: "लोक लेखा समिति", correct: true },
            { text: "विशेषाधिकार समिति", correct: false },
            { text: "सार्वजनिक उपक्रम समिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोक लेखा समिति का मुख्य कार्य CAG द्वारा प्रस्तुत वार्षिक रिपोर्टों की जांच करना है।<br><br><i class='fa-solid fa-angles-right icon'></i> CAG को इस समिति का \"मित्र, दार्शनिक और मार्गदर्शक\" कहा जाता है।"
    },
    {
        question: "प्रश्न 49. यदि कोई संसद सदस्य बिना अनुमति के कितने दिनों तक सदन की बैठकों से अनुपस्थित रहता है तो उसकी सीट रिक्त घोषित की जा सकती है?",
        answers: shuffle([
            { text: "30 दिन", correct: false },
            { text: "60 दिन", correct: true },
            { text: "90 दिन", correct: false },
            { text: "6 महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 101(4) के अनुसार, यदि कोई सदस्य सदन की अनुमति के बिना 60 दिनों की अवधि तक सभी बैठकों से अनुपस्थित रहता है, तो सदन उसकी सीट को रिक्त घोषित कर सकता है।"
    },
    {
        question: "प्रश्न 50. लोकसभा की पहली महिला अध्यक्ष कौन थीं?",
        answers: shuffle([
            { text: "सोनिया गांधी", correct: false },
            { text: "सुषमा स्वराज", correct: false },
            { text: "मीरा कुमार", correct: true },
            { text: "सुमित्रा महाजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीरा कुमार 15वीं लोकसभा (2009-2014) की अध्यक्ष थीं और इस पद को संभालने वाली पहली महिला थीं।"
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