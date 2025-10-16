const questions = [
    {
        topHeading: "संघीय व्यवस्था और भारत पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1: भारतीय संविधान में \"भारत राज्यों का एक संघ होगा\" यह किस अनुच्छेद में कहा गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 3", correct: false },
            { text: "अनुच्छेद 2", correct: false },
            { text: "अनुच्छेद 1", correct: true },
            { text: "अनुच्छेद 4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान का अनुच्छेद 1(1) घोषित करता है कि \"इंडिया, यानी भारत, राज्यों का एक संघ (Union of States) होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> 'संघ' शब्द का प्रयोग यह स्पष्ट करता है कि भारतीय संघ राज्यों के बीच किसी समझौते का परिणाम नहीं है और किसी भी राज्य को संघ से अलग होने का अधिकार नहीं है।"
    },
    {
        question: "प्रश्न 2: भारतीय संघीय व्यवस्था किस देश के मॉडल पर आधारित है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "कनाडा", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "स्विट्जरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत की संघीय प्रणाली कनाडा के मॉडल से काफी मिलती-जुलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें एक मजबूत केंद्र, अवशिष्ट शक्तियों का केंद्र में निहित होना, और 'यूनियन' शब्द का प्रयोग जैसी विशेषताएं शामिल हैं, जो कनाडाई मॉडल से प्रेरित हैं।"
    },
    {
        question: "प्रश्न 3: निम्नलिखित में से कौन सी भारतीय संघवाद की विशेषता नहीं है?",
        answers: shuffle([
            { text: "शक्तियों का विभाजन", correct: false },
            { text: "लिखित संविधान", correct: false },
            { text: "दोहरी नागरिकता", correct: true },
            { text: "स्वतंत्र न्यायपालिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में एकल नागरिकता का प्रावधान है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोई भी व्यक्ति केवल भारत का नागरिक होता है, किसी विशेष राज्य का नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> दोहरी नागरिकता (केंद्र और राज्य की अलग-अलग) अमेरिकी संघीय व्यवस्था की एक विशेषता है।"
    },
    {
        question: "प्रश्न 4: \"शिक्षा\" का विषय भारतीय संविधान की किस सूची के अंतर्गत आता है?",
        answers: shuffle([
            { text: "संघ सूची", correct: false },
            { text: "राज्य सूची", correct: false },
            { text: "समवर्ती सूची", correct: true },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूल रूप से शिक्षा राज्य सूची का विषय था, लेकिन 1976 में 42वें संविधान संशोधन द्वारा इसे समवर्ती सूची में स्थानांतरित कर दिया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> अब इस पर केंद्र और राज्य दोनों कानून बना सकते हैं।"
    },
    {
        question: "प्रश्न 5: केंद्र और राज्यों के बीच विधायी शक्तियों का विभाजन किस अनुसूची में दिया गया है?",
        answers: shuffle([
            { text: "छठी अनुसूची", correct: false },
            { text: "सातवीं अनुसूची", correct: true },
            { text: "आठवीं अनुसूची", correct: false },
            { text: "नौवीं अनुसूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान की सातवीं अनुसूची में तीन सूचियों - संघ सूची, राज्य सूची और समवर्ती सूची के माध्यम से केंद्र और राज्यों के बीच विधायी शक्तियों का विस्तृत विभाजन किया गया है।"
    },
    {
        question: "प्रश्न 6: भारतीय संविधान में अवशिष्ट शक्तियाँ (Residuary Powers) किसे सौंपी गई हैं?",
        answers: shuffle([
            { text: "राष्ट्रपति को", correct: false },
            { text: "संसद को", correct: true },
            { text: "राज्यों के विधानमंडलों को", correct: false },
            { text: "सर्वोच्च न्यायालय को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 248 के अनुसार, वे सभी विषय जिनका उल्लेख राज्य सूची या समवर्ती सूची में नहीं है (अर्थात अवशिष्ट विषय), उन पर कानून बनाने की अनन्य शक्ति संसद के पास है।"
    },
    {
        question: "प्रश्न 7: किसने भारतीय संघवाद को \"सहकारी संघवाद\" (Cooperative Federalism) कहा था?",
        answers: shuffle([
            { text: "के.सी. व्हेयर", correct: false },
            { text: "मॉरिस जोन्स", correct: false },
            { text: "आइवर जेनिंग्स", correct: false },
            { text: "ग्रेनविले ऑस्टिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध संविधान विशेषज्ञ ग्रेनविले ऑस्टिन ने भारतीय संघवाद को इसकी अनूठी प्रकृति के कारण \"सहकारी संघवाद\" के रूप में वर्णित किया, जहाँ केंद्र और राज्य एक-दूसरे के साथ सहयोग करते हैं।"
    },
    {
        question: "प्रश्न 8: किस अनुच्छेद के तहत राष्ट्रपति शासन लगाया जाता है, जो संघीय सिद्धांत पर आघात करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 356", correct: true },
            { text: "अनुच्छेद 360", correct: false },
            { text: "अनुच्छेद 368", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 356 के तहत, यदि किसी राज्य का शासन संवैधानिक प्रावधानों के अनुसार नहीं चलाया जा सकता, तो राष्ट्रपति उस राज्य में राष्ट्रपति शासन लगा सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इस दौरान राज्य की कार्यकारी और विधायी शक्तियाँ केंद्र के नियंत्रण में आ जाती हैं।"
    },
    {
        question: "प्रश्न 9: \"सरकारिया आयोग\" का गठन किस विषय पर सिफारिशें देने के लिए किया गया था?",
        answers: shuffle([
            { text: "चुनाव सुधार", correct: false },
            { text: "केंद्र-राज्य संबंध", correct: true },
            { text: "बैंकिंग सुधार", correct: false },
            { text: "पुलिस सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1983 में, केंद्र सरकार ने न्यायमूर्ति आर.एस. सरकारिया की अध्यक्षता में केंद्र-राज्य संबंधों की समीक्षा करने और सुधार के लिए सिफारिशें देने हेतु एक आयोग का गठन किया था।"
    },
    {
        question: "प्रश्न 10: अंतर-राज्यीय परिषद (Inter-State Council) की स्थापना किस अनुच्छेद के तहत की जाती है?",
        answers: shuffle([
            { text: "अनुच्छेद 262", correct: false },
            { text: "अनुच्छेद 263", correct: true },
            { text: "अनुच्छेद 280", correct: false },
            { text: "अनुच्छेद 324", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 263 राष्ट्रपति को केंद्र और राज्यों के बीच तथा राज्यों के परस्पर समन्वय स्थापित करने के लिए एक अंतर-राज्यीय परिषद की स्थापना करने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 11: निम्नलिखित में से कौन सा विषय संघ सूची में शामिल है?",
        answers: shuffle([
            { text: "पुलिस", correct: false },
            { text: "सार्वजनिक स्वास्थ्य", correct: false },
            { text: "बैंकिंग और मुद्रा", correct: true },
            { text: "कृषि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैंकिंग, मुद्रा, रक्षा, विदेशी मामले और रेलवे जैसे राष्ट्रीय महत्व के विषय संघ सूची में शामिल हैं, जिन पर केवल संसद कानून बना सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> पुलिस, सार्वजनिक स्वास्थ्य और कृषि राज्य सूची के विषय हैं।"
    },
    {
        question: "प्रश्न 12: भारतीय संविधान को \"अर्ध-संघीय\" (Quasi-Federal) किसने कहा है?",
        answers: shuffle([
            { text: "बी.आर. अंबेडकर", correct: false },
            { text: "के.सी. व्हेयर", correct: true },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "एम.वी. पायली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रिटिश संविधानवेत्ता के.सी. व्हेयर ने भारतीय संविधान की प्रकृति को \"अर्ध-संघीय\" बताया, क्योंकि इसमें संघीय और एकात्मक दोनों प्रणालियों की विशेषताएं मौजूद हैं, लेकिन एकात्मकता की ओर झुकाव अधिक है।"
    },
    {
        question: "प्रश्न 13: यदि समवर्ती सूची के किसी विषय पर संसद और राज्य विधानमंडल द्वारा बनाए गए कानूनों में टकराव होता है, तो क्या होगा?",
        answers: shuffle([
            { text: "राज्य का कानून मान्य होगा।", correct: false },
            { text: "संसद का कानून मान्य होगा।", correct: true },
            { text: "दोनों कानून अमान्य हो जाएंगे।", correct: false },
            { text: "मामला सर्वोच्च न्यायालय को भेजा जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 254 के अनुसार, यदि समवर्ती सूची के विषय पर केंद्रीय कानून और राज्य कानून के बीच कोई विरोध होता है, तो केंद्रीय कानून राज्य के कानून पर अभिभावी (override) होगा।"
    },
    {
        question: "प्रश्न 14: वित्त आयोग (Finance Commission) का गठन कौन करता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "वित्त मंत्री", correct: false },
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 280 के तहत, राष्ट्रपति हर पांच साल में या आवश्यकतानुसार उससे पहले केंद्र और राज्यों के बीच करों के वितरण पर सिफारिशें देने के लिए एक वित्त आयोग का गठन करते हैं।"
    },
    {
        question: "प्रश्न 15: क्षेत्रीय परिषदों (Zonal Councils) का अध्यक्ष कौन होता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "केंद्रीय गृह मंत्री", correct: true },
            { text: "संबंधित राज्यों के मुख्यमंत्री (बारी-बारी से)", correct: false },
            { text: "राष्ट्रपति द्वारा नियुक्त व्यक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षेत्रीय परिषदें सांविधिक निकाय हैं जिनका गठन राज्य पुनर्गठन अधिनियम, 1956 के तहत किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> केंद्रीय गृह मंत्री इन सभी परिषदों के पदेन अध्यक्ष होते हैं।"
    },
    {
        question: "प्रश्न 16: किस स्थिति में संसद राज्य सूची के विषय पर कानून बना सकती है?",
        answers: shuffle([
            { text: "जब राज्यसभा दो-तिहाई बहुमत से प्रस्ताव पारित करे", correct: false },
            { text: "राष्ट्रीय आपातकाल के दौरान", correct: false },
            { text: "जब दो या दो से अधिक राज्य ऐसा करने का अनुरोध करें", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान कुछ असाधारण परिस्थितियों में संसद को राज्य सूची के विषयों पर कानून बनाने का अधिकार देता है, जैसे कि अनुच्छेद 249 (राज्यसभा के प्रस्ताव पर), अनुच्छेद 250 (आपातकाल के दौरान), और अनुच्छेद 252 (राज्यों के अनुरोध पर)।"
    },
    {
        question: "प्रश्न 17: एस.आर. बोम्मई बनाम भारत संघ (1994) का मामला मुख्य रूप से किससे संबंधित है?",
        answers: shuffle([
            { text: "मूल अधिकारों से", correct: false },
            { text: "संविधान के मूल ढांचे से", correct: false },
            { text: "राज्यों में राष्ट्रपति शासन के दुरुपयोग से", correct: true },
            { text: "दलबदल कानून से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस ऐतिहासिक फैसले में, सर्वोच्च न्यायालय ने अनुच्छेद 356 के तहत राष्ट्रपति शासन लगाने की केंद्र सरकार की शक्ति पर महत्वपूर्ण सीमाएं लगाईं और कहा कि इसकी न्यायिक समीक्षा की जा सकती है।"
    },
    {
        question: "प्रश्न 18: वस्तु एवं सेवा कर (GST) परिषद की अध्यक्षता कौन करता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "केंद्रीय वित्त मंत्री", correct: true },
            { text: "आरबीआई गवर्नर", correct: false },
            { text: "नीति आयोग के उपाध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> GST परिषद केंद्र और राज्यों का एक संयुक्त मंच है जिसकी अध्यक्षता केंद्रीय वित्त मंत्री करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सहकारी संघवाद का एक प्रमुख उदाहरण है।"
    },
    {
        question: "प्रश्न 19: भारतीय संघीय व्यवस्था में, किसे \"संतुलन चक्र\" (Balancing Wheel) माना जाता है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "न्यायपालिका", correct: true },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यायपालिका, विशेष रूप से सर्वोच्च न्यायालय, केंद्र और राज्यों के बीच विवादों का समाधान करके और संविधान की व्याख्या करके संघीय संतुलन बनाए रखने में एक महत्वपूर्ण भूमिका निभाती है, इसलिए इसे \"संतुलन चक्र\" कहा जाता है।"
    },
    {
        question: "प्रश्न 20: अखिल भारतीय सेवाओं (All India Services) का सृजन करने की शक्ति किसे प्राप्त है?",
        answers: shuffle([
            { text: "लोकसभा", correct: false },
            { text: "राज्यसभा", correct: true },
            { text: "प्रधानमंत्री कार्यालय", correct: false },
            { text: "संघ लोक सेवा आयोग (UPSC)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 312 के तहत, राज्यसभा को यह अनन्य शक्ति प्राप्त है कि वह राष्ट्रीय हित में एक या अधिक अखिल भारतीय सेवाओं के सृजन के लिए दो-तिहाई बहुमत से प्रस्ताव पारित कर सकती है।"
    },
    {
        question: "प्रश्न 21: राज्यपाल की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "राज्य का विधानमंडल", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यपाल राज्य का संवैधानिक प्रमुख होता है, लेकिन उसकी नियुक्ति केंद्र सरकार की सलाह पर राष्ट्रपति द्वारा की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारतीय व्यवस्था के एकात्मक चरित्र को दर्शाता है।"
    },
    {
        question: "प्रश्न 22: कौन सा अनुच्छेद राज्यों को केंद्र द्वारा दिए गए निर्देशों का पालन सुनिश्चित करने के लिए बाध्य करता है?",
        answers: shuffle([
            { text: "A) अनुच्छेद 256 और 257", correct: false },
            { text: "B) अनुच्छेद 355", correct: false },
            { text: "C) अनुच्छेद 365", correct: false },
            { text: "A) और C) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 256 और 257 केंद्र को राज्यों को निर्देश देने की शक्ति प्रदान करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 365 यह प्रावधान करता है कि यदि कोई राज्य इन निर्देशों का पालन करने में विफल रहता है, तो राष्ट्रपति यह मान सकते हैं कि राज्य में संवैधानिक तंत्र विफल हो गया है और राष्ट्रपति शासन लगा सकते हैं।"
    },
    {
        question: "प्रश्न 23: नीति आयोग (NITI Aayog) की प्रकृति क्या है?",
        answers: shuffle([
            { text: "एक संवैधानिक निकाय", correct: false },
            { text: "एक सांविधिक निकाय", correct: false },
            { text: "एक कार्यकारी आदेश द्वारा गठित निकाय", correct: true },
            { text: "एक स्वायत्त निकाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीति आयोग की स्थापना 1 जनवरी, 2015 को योजना आयोग के स्थान पर एक सरकारी प्रस्ताव (कार्यकारी आदेश) द्वारा की गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह न तो संवैधानिक है और न ही सांविधिक।"
    },
    {
        question: "प्रश्न 24: \"विवाह, तलाक और गोद लेना\" जैसे विषय किस सूची के अंतर्गत आते हैं?",
        answers: shuffle([
            { text: "संघ सूची", correct: false },
            { text: "राज्य सूची", correct: false },
            { text: "समवर्ती सूची", correct: true },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये व्यक्तिगत कानून से संबंधित विषय समवर्ती सूची में रखे गए हैं ताकि देश में एकरूपता और स्थानीय आवश्यकताओं के बीच संतुलन बनाया जा सके।"
    },
    {
        question: "प्रश्न 25: भारत में \"एकल न्यायिक प्रणाली\" का क्या अर्थ है?",
        answers: shuffle([
            { text: "केवल एक ही न्यायालय है।", correct: false },
            { text: "राज्यों के अपने अलग सर्वोच्च न्यायालय हैं।", correct: false },
            { text: "सर्वोच्च न्यायालय के नीचे उच्च न्यायालयों की एक एकीकृत प्रणाली है जो केंद्रीय और राज्य दोनों कानूनों को लागू करती है।", correct: true },
            { text: "सभी न्यायाधीशों की नियुक्ति राष्ट्रपति द्वारा की जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेरिका के विपरीत, जहां संघीय और राज्य कानूनों के लिए अलग-अलग न्यायिक प्रणालियाँ हैं, भारत में एक एकीकृत और एकल न्यायिक प्रणाली है जिसमें सर्वोच्च न्यायालय शीर्ष पर है, और उच्च न्यायालय और अधीनस्थ न्यायालय उसके अधीन हैं।"
    },
     {
        question: "प्रश्न 26: राष्ट्रीय आपातकाल (अनुच्छेद 352) के दौरान राज्य सरकारों का क्या होता है?",
        answers: shuffle([
            { text: "A) वे भंग कर दी जाती हैं।", correct: false },
            { text: "B) वे निलंबित रहती हैं लेकिन भंग नहीं होतीं।", correct: false },
            { text: "C) वे केंद्र सरकार के पूर्ण नियंत्रण में आ जाती हैं।", correct: false },
            { text: "B और C दोनों।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय आपातकाल के दौरान, राज्य सरकारें निलंबित नहीं होतीं, लेकिन राज्य की कार्यकारी और विधायी शक्तियाँ केंद्र के अधीन हो जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे संघीय ढांचा प्रभावी रूप से एकात्मक हो जाता है।"
    },
    {
        question: "प्रश्न 27: कौन सा आयोग केंद्र-राज्य वित्तीय संबंधों की देखरेख करता है?",
        answers: shuffle([
            { text: "योजना आयोग", correct: false },
            { text: "वित्त आयोग", correct: true },
            { text: "चुनाव आयोग", correct: false },
            { text: "अंतर-राज्यीय परिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वित्त आयोग का मुख्य कार्य संघ और राज्यों के बीच करों से प्राप्त शुद्ध आय के वितरण और राज्यों के बीच ऐसी आय के आवंटन के बारे में राष्ट्रपति को सिफारिशें देना है।"
    },
    {
        question: "प्रश्न 28: पुंछी आयोग (Punchhi Commission) का गठन क्यों किया गया था?",
        answers: shuffle([
            { text: "पंचायती राज में सुधार के लिए", correct: false },
            { text: "केंद्र-राज्य संबंधों की समीक्षा के लिए", correct: true },
            { text: "चुनावी वित्तपोषण की जांच के लिए", correct: false },
            { text: "प्रशासनिक सुधारों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरकारिया आयोग के बाद, केंद्र-राज्य संबंधों के नए मुद्दों की जांच के लिए 2007 में न्यायमूर्ति मदन मोहन पुंछी की अध्यक्षता में एक और आयोग का गठन किया गया था।"
    },
    {
        question: "प्रश्न 29: नदी जल विवादों के निपटारे के लिए संसद को कानून बनाने का अधिकार किस अनुच्छेद से मिलता है?",
        answers: shuffle([
            { text: "अनुच्छेद 262", correct: true },
            { text: "अनुच्छेद 263", correct: false },
            { text: "अनुच्छेद 257", correct: false },
            { text: "अनुच्छेद 258", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 262 संसद को अंतर-राज्यीय नदियों या नदी घाटियों के जल के उपयोग, वितरण और नियंत्रण से संबंधित किसी भी विवाद या शिकायत के न्यायनिर्णयन के लिए कानून बनाने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 30: \"जनसंख्या नियंत्रण और परिवार नियोजन\" किस सूची का विषय है?",
        answers: shuffle([
            { text: "संघ सूची", correct: false },
            { text: "राज्य सूची", correct: false },
            { text: "समवर्ती सूची", correct: true },
            { text: "यह संविधान में वर्णित नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस महत्वपूर्ण विषय को 42वें संशोधन द्वारा समवर्ती सूची में जोड़ा गया ताकि केंद्र और राज्य दोनों इस पर कानून बना सकें और प्रभावी ढंग से काम कर सकें।"
    },
    {
        question: "प्रश्न 31: एक नए राज्य के निर्माण या मौजूदा राज्यों की सीमाओं में परिवर्तन करने की शक्ति किसके पास है?",
        answers: shuffle([
            { text: "संबंधित राज्य विधानमंडल", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "संसद", correct: true },
            { text: "सर्वोच्च न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 3 के तहत, संसद साधारण बहुमत से किसी नए राज्य का निर्माण कर सकती है या किसी मौजूदा राज्य के क्षेत्र, सीमाओं या नाम में परिवर्तन कर सकती है।"
    },
    {
        question: "प्रश्न 32: निम्नलिखित में से कौन सा एक भारतीय संविधान का एकात्मक लक्षण है?",
        answers: shuffle([
            { text: "शक्तियों का वितरण", correct: false },
            { text: "संविधान की सर्वोच्चता", correct: false },
            { text: "एकल संविधान", correct: true },
            { text: "कठोर संविधान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में केंद्र और राज्यों (जम्मू और कश्मीर के अपवाद को छोड़कर) के लिए एक ही संविधान है, जो एक मजबूत केंद्र और राष्ट्र की एकता का प्रतीक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक एकात्मक विशेषता है।"
    },
    {
        question: "प्रश्न 33: \"लोक व्यवस्था\" (Public Order) किस सूची का विषय है?",
        answers: shuffle([
            { text: "संघ सूची", correct: false },
            { text: "राज्य सूची", correct: true },
            { text: "समवर्ती सूची", correct: false },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कानून और व्यवस्था बनाए रखना मुख्य रूप से राज्यों की जिम्मेदारी है, इसलिए \"लोक व्यवस्था\" और \"पुलिस\" राज्य सूची के अंतर्गत आते हैं।"
    },
    {
        question: "प्रश्न 34: वित्तीय आपातकाल (अनुच्छेद 360) के दौरान क्या होता है?",
        answers: shuffle([
            { text: "राज्यों के बजट पर केंद्र का नियंत्रण हो जाता है।", correct: false },
            { text: "राष्ट्रपति राज्यों को वित्तीय औचित्य संबंधी सिद्धांत का पालन करने का निर्देश दे सकते हैं।", correct: false },
            { text: "सर्वोच्च और उच्च न्यायालय के न्यायाधीशों सहित सभी सरकारी कर्मचारियों के वेतन में कटौती की जा सकती है।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वित्तीय आपातकाल के दौरान, केंद्र को राज्यों के वित्तीय मामलों पर व्यापक नियंत्रण मिल जाता है, जिसमें वेतन कटौती और राज्य के धन विधेयकों को राष्ट्रपति की स्वीकृति के लिए आरक्षित करना शामिल है।"
    },
    {
        question: "प्रश्न 35: क्या कोई राज्य विधानमंडल अंतरराष्ट्रीय संधियों को लागू करने के लिए बनाए गए केंद्रीय कानून में संशोधन कर सकता है?",
        answers: shuffle([
            { text: "हां, यदि राष्ट्रपति अनुमति दें।", correct: false },
            { text: "हां, साधारण बहुमत से।", correct: false },
            { text: "नहीं, यह संसद की अनन्य शक्ति है।", correct: true },
            { text: "केवल समवर्ती सूची के विषयों पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 253 के अनुसार, संसद को किसी भी अंतरराष्ट्रीय संधि, समझौते या सम्मेलन को लागू करने के लिए पूरे भारत या उसके किसी भी हिस्से के लिए कानून बनाने की शक्ति है, भले ही वह विषय राज्य सूची में आता हो।"
    },
    {
        question: "प्रश्न 36: भारतीय संघ को \"अत्यधिक संघीय\" (Extremely federal) किसने कहा है?",
        answers: shuffle([
            { text: "सर आइवर जेनिंग्स", correct: false },
            { text: "पॉल एप्पलबी", correct: true },
            { text: "बी.आर. अंबेडकर", correct: false },
            { text: "के. संथानम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पॉल एप्पलबी ने भारतीय प्रशासनिक व्यवस्था पर अपनी रिपोर्ट में भारतीय प्रणाली को इसकी मजबूत केंद्रीय नियंत्रण विशेषताओं के बावजूद \"अत्यधिक संघीय\" माना।"
    },
    {
        question: "प्रश्न 37: \"राज्यों की परिषद\" के रूप में किसे जाना जाता है?",
        answers: shuffle([
            { text: "लोकसभा", correct: false },
            { text: "राज्यसभा", correct: true },
            { text: "विधानसभा", correct: false },
            { text: "नीति आयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यसभा संसद का उच्च सदन है और यह भारतीय संघ के राज्यों और केंद्र शासित प्रदेशों का प्रतिनिधित्व करती है, इसलिए इसे \"राज्यों की परिषद\" भी कहा जाता है।"
    },
    {
        question: "प्रश्न 38: किस संवैधानिक संशोधन ने केंद्र को किसी भी राज्य में केंद्रीय बलों को तैनात करने का अधिकार दिया?",
        answers: shuffle([
            { text: "42वां संशोधन", correct: true },
            { text: "44वां संशोधन", correct: false },
            { text: "59वां संशोधन", correct: false },
            { text: "76वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 42वें संशोधन अधिनियम, 1976 ने अनुच्छेद 257A जोड़कर केंद्र को कानून और व्यवस्था की गंभीर स्थिति से निपटने के लिए किसी भी राज्य में सशस्त्र बलों को तैनात करने का अधिकार दिया था, हालांकि इसे 44वें संशोधन द्वारा निरस्त कर दिया गया।"
    },
    {
        question: "प्रश्न 39: \"सहकारी संघवाद\" को बढ़ावा देने में कौन सी संस्था सबसे महत्वपूर्ण भूमिका निभाती है?",
        answers: shuffle([
            { text: "GST परिषद", correct: false },
            { text: "अंतर-राज्यीय परिषद", correct: false },
            { text: "राष्ट्रीय विकास परिषद", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी संस्थाएं ऐसे मंच हैं जहां केंद्र और राज्य सरकारें एक साथ आकर आपसी हित के मुद्दों पर चर्चा करती हैं और निर्णय लेती हैं, जिससे सहकारी संघवाद की भावना को बढ़ावा मिलता है।"
    },
    {
        question: "प्रश्न 40: \"निगम कर\" (Corporation Tax) किसके द्वारा लगाया और वसूला जाता है?",
        answers: shuffle([
            { text: "राज्य सरकार", correct: false },
            { text: "केंद्र सरकार", correct: true },
            { text: "नगर निगम", correct: false },
            { text: "केंद्र और राज्य दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निगम कर, आयकर (कृषि आय को छोड़कर), और सीमा शुल्क जैसे प्रमुख कर केंद्र सरकार द्वारा लगाए और एकत्र किए जाते हैं, हालांकि इसका एक हिस्सा वित्त आयोग की सिफारिशों के अनुसार राज्यों को हस्तांतरित किया जाता है।"
    },
    {
        question: "प्रश्न 41: \"राज्यों की सहमति से कानून बनाने की संसद की शक्ति\" का प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 249", correct: false },
            { text: "अनुच्छेद 250", correct: false },
            { text: "अनुच्छेद 252", correct: true },
            { text: "अनुच्छेद 253", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस अनुच्छेद के अनुसार, यदि दो या दो से अधिक राज्यों के विधानमंडल यह वांछनीय समझें कि राज्य सूची के किसी विषय पर संसद कानून बनाए, तो वे एक प्रस्ताव पारित कर सकते हैं और संसद उस विषय को विनियमित करने के लिए कानून बना सकती है।"
    },
    {
        question: "प्रश्न 42: भारत में संघीय व्यवस्था का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "A) राष्ट्रीय एकता को बनाए रखना", correct: false },
            { text: "B) क्षेत्रीय स्वायत्तता को समायोजित करना", correct: false },
            { text: "B) शक्तियों का दुरुपयोग रोकना", correct: false },
            { text: "A) और B) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संघवाद का दोहरा उद्देश्य है: देश की एकता और अखंडता को सुरक्षित रखना और साथ ही क्षेत्रीय विविधता और स्वायत्तता को समायोजित करना।"
    },
    {
        question: "प्रश्न 43: यदि राष्ट्रीय आपातकाल केवल देश के एक हिस्से में लगाया जाता है, तो क्या संसद पूरे भारत के लिए कानून बना सकती है?",
        answers: shuffle([
            { text: "नहीं, केवल प्रभावित हिस्से के लिए।", correct: false },
            { text: "हाँ, यदि आवश्यक हो तो पूरे भारत के लिए।", correct: true },
            { text: "केवल राष्ट्रपति के आदेश पर।", correct: false },
            { text: "नहीं, यह संभव नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 42वें संशोधन ने यह स्पष्ट कर दिया है कि यदि आपातकाल देश के केवल एक हिस्से में भी लागू हो, तो भी संसद की विधायी शक्ति का विस्तार पूरे देश पर हो जाता है।"
    },
    {
        question: "प्रश्न 44: \"संघीय\" शब्द का प्रयोग भारतीय संविधान में कहाँ किया गया है?",
        answers: shuffle([
            { text: "प्रस्तावना में", correct: false },
            { text: "भाग III में", correct: false },
            { text: "अनुच्छेद 368 में", correct: false },
            { text: "कहीं भी नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिलचस्प बात यह है कि \"संघीय\" (Federal) शब्द का उल्लेख संविधान में कहीं भी नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बजाय, अनुच्छेद 1 भारत को \"राज्यों का संघ\" (Union of States) के रूप में वर्णित करता है।"
    },
    {
        question: "प्रश्न 45: राज्यपाल द्वारा किसी विधेयक को राष्ट्रपति के विचार के लिए आरक्षित रखने की शक्ति किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 200", correct: true },
            { text: "अनुच्छेद 201", correct: false },
            { text: "अनुच्छेद 163", correct: false },
            { text: "अनुच्छेद 169", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 200 राज्यपाल को यह शक्ति देता है कि वह राज्य विधानमंडल द्वारा पारित किसी विधेयक पर अपनी सहमति दे सकता है, रोक सकता है, या उसे राष्ट्रपति के विचार के लिए आरक्षित रख सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केंद्र के नियंत्रण का एक महत्वपूर्ण साधन है।"
    },
    {
        question: "प्रश्न 46: \"बाजार और मेले\" किस सूची का विषय है?",
        answers: shuffle([
            { text: "संघ सूची", correct: false },
            { text: "राज्य सूची", correct: true },
            { text: "समवर्ती सूची", correct: false },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थानीय महत्व के विषय जैसे \"बाजार और मेले\", \"पुलिस\", \"जेल\", \"स्थानीय शासन\" आदि राज्य सूची में शामिल हैं।"
    },
    {
        question: "प्रश्न 47: केंद्र-राज्य संबंधों पर राजमन्नार समिति का गठन किस राज्य ने किया था?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1969 में, तमिलनाडु की DMK सरकार ने केंद्र-राज्य संबंधों की जांच करने और राज्यों को अधिक स्वायत्तता देने के लिए डॉ. पी.वी. राजमन्नार की अध्यक्षता में एक समिति का गठन किया था।"
    },
    {
        question: "प्रश्न 48: कौन सी विशेषता भारतीय और अमेरिकी संघवाद दोनों में समान है?",
        answers: shuffle([
            { text: "एकल नागरिकता", correct: false },
            { text: "अवशिष्ट शक्तियों का केंद्र में होना", correct: false },
            { text: "संविधान की व्याख्या के लिए एक संघीय सर्वोच्च न्यायालय", correct: true },
            { text: "एकीकृत न्यायपालिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों देशों में एक सर्वोच्च न्यायालय है जो संविधान का अंतिम व्याख्याकार है और केंद्र तथा राज्यों के बीच विवादों का निपटारा करता है, जो संघीय प्रणाली के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 49: \"आपराधिक कानून और प्रक्रिया\" किस सूची के अंतर्गत आते हैं?",
        answers: shuffle([
            { text: "संघ सूची", correct: false },
            { text: "राज्य सूची", correct: false },
            { text: "समवर्ती सूची", correct: true },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपराधिक कानून और प्रक्रिया को समवर्ती सूची में रखा गया है ताकि देश भर में कानूनों में एकरूपता बनी रहे, जबकि राज्यों को स्थानीय परिस्थितियों के अनुसार मामूली बदलाव करने की अनुमति हो।"
    },
    {
        question: "प्रश्न 50: \"एकीकृत आदिवासी विकास परियोजना\" (ITDP) किस प्रकार के संघवाद का उदाहरण है?",
        answers: shuffle([
            { text: "प्रतिस्पर्धी संघवाद", correct: false },
            { text: "सहकारी संघवाद", correct: true },
            { text: "सौदेबाजी संघवाद", correct: false },
            { text: "टकराव संघवाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ITDP जैसी योजनाएं, जहां केंद्र और राज्य दोनों मिलकर आदिवासी क्षेत्रों के विकास के लिए धन और संसाधनों का योगदान करते हैं, सहकारी संघवाद का एक उत्कृष्ट उदाहरण हैं।"
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