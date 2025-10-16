const questions = [
    {
        topHeading: "राज्यों और केंद्र के बीच शक्तियों के विभाजन पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान की सातवीं अनुसूची के तहत शक्तियों का विभाजन कितनी सूचियों में किया गया है?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान की सातवीं अनुसूची में केंद्र और राज्यों के बीच विधायी शक्तियों को तीन सूचियों में बांटा गया है: संघ सूची, राज्य सूची और समवर्ती सूची।"
    },
    {
        question: "प्रश्न 2. 'संघ सूची' (Union List) में शामिल विषयों पर कानून बनाने का अनन्य अधिकार किसे है?",
        answers: shuffle([
            { text: "राज्य विधानमंडल", correct: false },
            { text: "संसद", correct: true },
            { text: "राष्ट्रपति", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संघ सूची में राष्ट्रीय महत्व के विषय शामिल हैं (जैसे रक्षा, विदेश मामले, रेलवे) और इन पर कानून बनाने का एकमात्र अधिकार भारतीय संसद को है।"
    },
    {
        question: "प्रश्न 3. 'राज्य सूची' (State List) में वर्णित विषयों पर सामान्य परिस्थितियों में कानून कौन बना सकता है?",
        answers: shuffle([
            { text: "केवल संसद", correct: false },
            { text: "केवल राज्य विधानमंडल", correct: true },
            { text: "संसद और राज्य विधानमंडल दोनों", correct: false },
            { text: "राष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य सूची में स्थानीय महत्व के विषय (जैसे पुलिस, कृषि, सार्वजनिक स्वास्थ्य) होते हैं, जिन पर कानून बनाने का अधिकार सामान्यतः राज्य विधानमंडलों को होता है।"
    },
    {
        question: "प्रश्न 4. 'समवर्ती सूची' (Concurrent List) के विषयों पर कानून बनाने का अधिकार किसे है?",
        answers: shuffle([
            { text: "केवल संसद", correct: false },
            { text: "केवल राज्य विधानमंडल", correct: false },
            { text: "संसद और राज्य विधानमंडल दोनों", correct: true },
            { text: "केवल राज्यसभा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समवर्ती सूची के विषयों (जैसे शिक्षा, वन, विवाह) पर संसद और राज्य विधानमंडल दोनों कानून बना सकते हैं।"
    },
    {
        question: "प्रश्न 5. यदि समवर्ती सूची के किसी विषय पर संसद और राज्य विधानमंडल द्वारा बनाए गए कानूनों में टकराव होता है, तो क्या होगा?",
        answers: shuffle([
            { text: "राज्य का कानून मान्य होगा", correct: false },
            { text: "संसद का कानून मान्य होगा", correct: true },
            { text: "दोनों कानून रद्द हो जाएंगे", correct: false },
            { text: "राष्ट्रपति का निर्णय अंतिम होगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 254 के अनुसार, यदि समवर्ती सूची के विषय पर केंद्र और राज्य के कानून में कोई विरोध होता है, तो केंद्रीय कानून राज्य के कानून पर अभिभावी (override) होगा।"
    },
    {
        question: "प्रश्न 6. 'अवशिष्ट शक्तियाँ' (Residuary Powers) किसमें निहित हैं?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "राज्य", correct: false },
            { text: "संसद", correct: true },
            { text: "सर्वोच्च न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 248 के अनुसार, वे सभी विषय जो किसी भी सूची (संघ, राज्य, या समवर्ती) में शामिल नहीं हैं, 'अवशिष्ट शक्तियाँ' कहलाते हैं और इन पर कानून बनाने की शक्ति संसद में निहित है।"
    },
    {
        question: "प्रश्न 7. किस अनुच्छेद के तहत राज्यसभा, राष्ट्रीय हित में राज्य सूची के विषय पर कानून बनाने के लिए संसद को अधिकृत कर सकती है?",
        answers: shuffle([
            { text: "अनुच्छेद 248", correct: false },
            { text: "अनुच्छेद 249", correct: true },
            { text: "अनुच्छेद 250", correct: false },
            { text: "अनुच्छेद 252", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 249 के अनुसार, यदि राज्यसभा उपस्थित और मतदान करने वाले सदस्यों के दो-तिहाई बहुमत से यह प्रस्ताव पारित करती है कि राष्ट्रीय हित में आवश्यक है, तो संसद राज्य सूची के किसी भी विषय पर कानून बना सकती है।"
    },
    {
        question: "प्रश्न 8. राष्ट्रीय आपातकाल (अनुच्छेद 352) के दौरान राज्य सूची के विषयों पर कानून बनाने की शक्ति किसे प्राप्त हो जाती है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "राज्यपाल", correct: false },
            { text: "संसद", correct: true },
            { text: "राज्य विधानमंडल की शक्तियां निलंबित हो जाती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 250 के अनुसार, जब राष्ट्रीय आपातकाल लागू होता है, तो संसद को राज्य सूची में वर्णित किसी भी विषय पर भारत के संपूर्ण राज्यक्षेत्र या उसके किसी भाग के लिए कानून बनाने की शक्ति प्राप्त हो जाती है।"
    },
    {
        question: "प्रश्न 9. जब दो या दो से अधिक राज्य अनुरोध करें, तो संसद राज्य सूची के विषय पर कानून बना सकती है। यह प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 251", correct: false },
            { text: "अनुच्छेद 252", correct: true },
            { text: "अनुच्छेद 253", correct: false },
            { text: "अनुच्छेद 249", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 252 के तहत, यदि दो या अधिक राज्यों के विधानमंडल यह संकल्प पारित करते हैं कि राज्य सूची के किसी विषय पर संसद द्वारा कानून बनाना वांछनीय है, तो संसद उन राज्यों के लिए कानून बना सकती है।"
    },
    {
        question: "प्रश्न 10. अंतरराष्ट्रीय करारों को प्रभावी करने के लिए संसद राज्य सूची के विषय पर कानून बना सकती है। यह शक्ति किस अनुच्छेद से मिलती है?",
        answers: shuffle([
            { text: "अनुच्छेद 250", correct: false },
            { text: "अनुच्छेद 252", correct: false },
            { text: "अनुच्छेद 253", correct: true },
            { text: "अनुच्छेद 356", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 253 संसद को किसी अन्य देश के साथ की गई किसी संधि, करार या अभिसमय के कार्यान्वयन के लिए भारत के संपूर्ण राज्यक्षेत्र या उसके किसी भाग के लिए कोई भी कानून बनाने की शक्ति देता है, भले ही वह विषय राज्य सूची का हो।"
    },
    {
        question: "प्रश्न 11. राज्य में राष्ट्रपति शासन (अनुच्छेद 356) लागू होने पर, राज्य के लिए कानून बनाने की शक्ति किसे मिल जाती है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "संसद", correct: true },
            { text: "उच्च न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी राज्य में राष्ट्रपति शासन लगाया जाता है, तो उस राज्य के विधानमंडल की शक्तियाँ संसद द्वारा या उसके प्राधिकार के अधीन प्रयोग की जाती हैं।"
    },
    {
        question: "प्रश्न 12. भारतीय संविधान में शक्तियों के विभाजन की योजना किस देश के संविधान से ली गई है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "कनाडा", correct: true },
            { text: "यूनाइटेड किंगडम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान में एक मजबूत केंद्र के साथ संघीय व्यवस्था और अवशिष्ट शक्तियों का केंद्र में निहित होना, कनाडाई संविधान से प्रेरित है।"
    },
    {
        question: "प्रश्न 13. निम्नलिखित में से कौन सा विषय संघ सूची में शामिल है?",
        answers: shuffle([
            { text: "पुलिस", correct: false },
            { text: "कृषि", correct: false },
            { text: "बैंकिंग", correct: true },
            { text: "सार्वजनिक स्वास्थ्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैंकिंग, मुद्रा, रक्षा, रेलवे और विदेश मामले राष्ट्रीय महत्व के विषय हैं, इसलिए ये संघ सूची में शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> पुलिस, कृषि और सार्वजनिक स्वास्थ्य राज्य सूची के विषय हैं।"
    },
    {
        question: "प्रश्न 14. निम्नलिखित में से कौन सा विषय समवर्ती सूची में है?",
        answers: shuffle([
            { text: "निगम कर", correct: false },
            { text: "जनगणना", correct: false },
            { text: "विवाह और तलाक", correct: true },
            { text: "डाकघर बचत बैंक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवाह और तलाक, आपराधिक कानून, शिक्षा, वन और ट्रेड यूनियन जैसे विषय समवर्ती सूची में हैं, जिन पर केंद्र और राज्य दोनों का अधिकार क्षेत्र होता है।"
    },
    {
        question: "प्रश्न 15. कराधान (Taxation) से संबंधित विधायी शक्तियाँ किस सूची में उल्लिखित हैं?",
        answers: shuffle([
            { text: "केवल संघ सूची में", correct: false },
            { text: "केवल राज्य सूची में", correct: false },
            { text: "संघ और राज्य दोनों सूचियों में", correct: true },
            { text: "अवशिष्ट शक्तियों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कराधान की शक्तियाँ संघ और राज्यों के बीच स्पष्ट रूप से विभाजित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> संघ सूची में आयकर (कृषि आय को छोड़कर), सीमा शुल्क आदि हैं, जबकि राज्य सूची में कृषि आय पर कर, भूमि और भवनों पर कर आदि शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> समवर्ती सूची में कोई कर प्रविष्टि नहीं है।"
    },
    {
        question: "प्रश्न 16. केंद्र सरकार किस अनुच्छेद के तहत राज्यों को प्रशासनिक निर्देश दे सकती है?",
        answers: shuffle([
            { text: "अनुच्छेद 256", correct: true },
            { text: "अनुच्छेद 262", correct: false },
            { text: "अनुच्छेद 263", correct: false },
            { text: "अनुच्छेद 312", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 256 यह प्रावधान करता है कि प्रत्येक राज्य की कार्यपालिका शक्ति का इस प्रकार प्रयोग किया जाएगा कि संसद द्वारा बनाए गए कानूनों का अनुपालन सुनिश्चित हो।<br><br><i class='fa-solid fa-angles-right icon'></i> केंद्र इस संबंध में राज्यों को आवश्यक निर्देश दे सकता है।"
    },
    {
        question: "प्रश्न 17. यदि कोई राज्य केंद्र द्वारा दिए गए निर्देशों का पालन करने में विफल रहता है, तो क्या परिणाम हो सकता है?",
        answers: shuffle([
            { text: "राज्य पर वित्तीय जुर्माना लगाया जा सकता है", correct: false },
            { text: "मुख्यमंत्री को बर्खास्त किया जा सकता है", correct: false },
            { text: "उस राज्य में राष्ट्रपति शासन लगाया जा सकता है", correct: true },
            { text: "सर्वोच्च न्यायालय हस्तक्षेप कर सकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 365 के अनुसार, यदि कोई राज्य संघ द्वारा दिए गए किन्हीं निर्देशों का पालन करने में असफल रहता है, तो राष्ट्रपति के लिए यह मानना विधिपूर्ण होगा कि ऐसी स्थिति उत्पन्न हो गई है जिसमें उस राज्य का शासन संविधान के उपबंधों के अनुसार नहीं चलाया जा सकता है, और वह अनुच्छेद 356 के तहत राष्ट्रपति शासन लगा सकता है।"
    },
    {
        question: "प्रश्न 18. 'अखिल भारतीय सेवाओं' (All-India Services) का सृजन कौन कर सकता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "संघ लोक सेवा आयोग (UPSC)", correct: false },
            { text: "राज्यसभा द्वारा पारित प्रस्ताव पर संसद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 312 के तहत, यदि राज्यसभा उपस्थित और मतदान करने वाले सदस्यों के कम से कम दो-तिहाई बहुमत से यह संकल्प पारित करती है कि राष्ट्रीय हित में ऐसा करना आवश्यक है, तो संसद नई अखिल भारतीय सेवाओं का सृजन कर सकती है।"
    },
    {
        question: "प्रश्न 19. अखिल भारतीय सेवाओं (IAS, IPS, IFS) के सदस्यों पर अंतिम नियंत्रण किसका होता है?",
        answers: shuffle([
            { text: "राज्य सरकार", correct: false },
            { text: "केंद्र सरकार", correct: true },
            { text: "राष्ट्रपति", correct: false },
            { text: "UPSC", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि अखिल भारतीय सेवाओं के अधिकारी राज्यों में काम करते हैं और राज्य सरकार के तत्काल नियंत्रण में होते हैं, लेकिन उनका भर्ती, प्रशिक्षण और उन पर अंतिम अनुशासनात्मक कार्रवाई का अधिकार केंद्र सरकार के पास होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केंद्र को राज्यों के प्रशासन पर महत्वपूर्ण नियंत्रण प्रदान करता है।"
    },
    {
        question: "प्रश्न 20. 'अंतर-राज्य परिषद' (Inter-State Council) का गठन कौन करता है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 263 राष्ट्रपति को यह शक्ति देता है कि यदि उन्हें लगता है कि सार्वजनिक हितों की सेवा होगी, तो वे राज्यों के बीच समन्वय स्थापित करने के लिए एक अंतर-राज्य परिषद की स्थापना कर सकते हैं।"
    },
    {
        question: "प्रश्न 21. अंतर-राज्य परिषद की स्थापना किस आयोग की सिफारिश पर की गई थी?",
        answers: shuffle([
            { text: "राजमन्नार आयोग", correct: false },
            { text: "प्रशासनिक सुधार आयोग", correct: false },
            { text: "सरकारिया आयोग", correct: true },
            { text: "पुंछी आयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्र-राज्य संबंधों पर सरकारिया आयोग (1983-88) की सिफारिशों के आधार पर 1990 में पहली बार अंतर-राज्य परिषद का गठन किया गया था।"
    },
    {
        question: "प्रश्न 22. दो या दो से अधिक राज्यों के बीच नदी-जल विवादों के न्यायनिर्णयन के लिए कानून बनाने की शक्ति किसे दी गई है?",
        answers: shuffle([
            { text: "सर्वोच्च न्यायालय", correct: false },
            { text: "संबंधित राज्य", correct: false },
            { text: "संसद", correct: true },
            { text: "राष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 262 संसद को अंतर-राज्यीय नदियों या नदी-घाटियों के जल के प्रयोग, वितरण या नियंत्रण के संबंध में किसी भी विवाद या शिकायत के न्यायनिर्णयन के लिए कानून द्वारा प्रावधान करने का अधिकार देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> संसद ऐसे विवादों को सर्वोच्च न्यायालय के अधिकार क्षेत्र से बाहर भी कर सकती है।"
    },
    {
        question: "प्रश्न 23. राज्यपाल की नियुक्ति किसके द्वारा की जाती है और वह किसके प्रसादपर्यंत पद धारण करता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यपाल की नियुक्ति राष्ट्रपति द्वारा की जाती है और वह केंद्र के एक एजेंट के रूप में कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका कार्यकाल राष्ट्रपति के प्रसादपर्यंत होता है, जो केंद्र को राज्यों पर महत्वपूर्ण प्रशासनिक नियंत्रण प्रदान करता है।"
    },
    {
        question: "प्रश्न 24. राष्ट्रीय महत्व के मार्गों और संचार साधनों के निर्माण और रखरखाव के संबंध में केंद्र किसे निर्देश दे सकता है?",
        answers: shuffle([
            { text: "लोक निर्माण विभाग", correct: false },
            { text: "राज्यों को", correct: true },
            { text: "नगरपालिकाओं को", correct: false },
            { text: "भारतीय राष्ट्रीय राजमार्ग प्राधिकरण को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 257 के तहत, केंद्र राज्यों को राष्ट्रीय या सैन्य महत्व के संचार साधनों के निर्माण और रखरखाव के लिए निर्देश दे सकता है।"
    },
    {
        question: "प्रश्न 25. 'क्षेत्रीय परिषदों' (Zonal Councils) का गठन किसके द्वारा किया गया है?",
        answers: shuffle([
            { text: "संविधान के अनुच्छेद 263 के तहत", correct: false },
            { text: "राष्ट्रपति के एक आदेश द्वारा", correct: false },
            { text: "संसद के एक अधिनियम द्वारा", correct: true },
            { text: "नीति आयोग द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षेत्रीय परिषदें सांविधिक निकाय हैं, संवैधानिक नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनका गठन राज्य पुनर्गठन अधिनियम, 1956 के तहत किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत को पांच क्षेत्रों में बांटा गया है और प्रत्येक क्षेत्र की एक क्षेत्रीय परिषद है।"
    },
     {
        question: "प्रश्न 26. 'वित्त आयोग' (Finance Commission) का गठन किस अनुच्छेद के तहत किया जाता है?",
        answers: shuffle([
            { text: "अनुच्छेद 263", correct: false },
            { text: "अनुच्छेद 275", correct: false },
            { text: "अनुच्छेद 280", correct: true },
            { text: "अनुच्छेद 324", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 280 के तहत, राष्ट्रपति हर पांच साल में एक वित्त आयोग का गठन करता है, जो संघ और राज्यों के बीच करों के शुद्ध आगमों के वितरण के बारे में सिफारिशें करता है।"
    },
    {
        question: "प्रश्न 27. वित्त आयोग का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "वार्षिक बजट तैयार करना", correct: false },
            { text: "मौद्रिक नीति निर्धारित करना", correct: false },
            { text: "केंद्र और राज्यों के बीच राजस्व के वितरण की सिफारिश करना", correct: true },
            { text: "राज्यों के वित्तीय कुप्रबंधन की जांच करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वित्त आयोग का प्रमुख कार्य संघ और राज्यों के बीच करों की शुद्ध आय के वितरण और राज्यों के बीच ऐसी आय के आवंटन के सिद्धांतों के बारे में राष्ट्रपति को सिफारिश करना है।"
    },
    {
        question: "प्रश्न 28. 'भारत की संचित निधि' (Consolidated Fund of India) का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 266", correct: true },
            { text: "अनुच्छेद 267", correct: false },
            { text: "अनुच्छेद 280", correct: false },
            { text: "अनुच्छेद 112", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 266 भारत सरकार को प्राप्त होने वाले सभी राजस्व, ऋणों और अग्रिमों की चुकौती से प्राप्तियों से मिलकर बनी भारत की संचित निधि का प्रावधान करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी तरह राज्यों की भी अपनी संचित निधि होती है।"
    },
    {
        question: "प्रश्न 29. संसद द्वारा लगाए गए कुछ शुल्क और कर, जो राज्यों द्वारा संग्रहीत और विनियोजित किए जाते हैं, का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 268", correct: true },
            { text: "अनुच्छेद 269", correct: false },
            { text: "अनुच्छेद 270", correct: false },
            { text: "अनुच्छेद 271", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 268 उन शुल्कों (जैसे स्टांप शुल्क) का वर्णन करता है जो संघ द्वारा लगाए जाते हैं लेकिन राज्यों द्वारा एकत्र और उपयोग किए जाते हैं।"
    },
    {
        question: "प्रश्न 30. 'सेवा कर' (Service Tax) का प्रावधान किस शक्ति के तहत किया गया था?",
        answers: shuffle([
            { text: "संघ सूची", correct: false },
            { text: "राज्य सूची", correct: false },
            { text: "समवर्ती सूची", correct: false },
            { text: "अवशिष्ट शक्ति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेवा कर को अनुच्छेद 248 के तहत संसद की अवशिष्ट विधायी शक्तियों का उपयोग करके पेश किया गया था क्योंकि यह मूल रूप से किसी भी सूची में वर्णित नहीं था।<br><br><i class='fa-solid fa-angles-right icon'></i> अब इसे GST में समाहित कर लिया गया है।"
    },
    {
        question: "प्रश्न 31. वस्तु एवं सेवा कर (GST) परिषद का अध्यक्ष कौन होता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "केंद्रीय वित्त मंत्री", correct: true },
            { text: "RBI गवर्नर", correct: false },
            { text: "नीति आयोग के उपाध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 279A के तहत गठित GST परिषद की अध्यक्षता केंद्रीय वित्त मंत्री करते हैं, और सभी राज्यों के वित्त मंत्री इसके सदस्य होते हैं।"
    },
    {
        question: "प्रश्न 32. संविधान का कौन सा भाग केंद्र और राज्यों के बीच संबंधों से संबंधित है?",
        answers: shuffle([
            { text: "भाग X", correct: false },
            { text: "भाग XI", correct: false },
            { text: "भाग XII", correct: false },
            { text: "भाग XI और XII दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग XI केंद्र और राज्यों के बीच विधायी और प्रशासनिक संबंधों से संबंधित है, जबकि भाग XII वित्तीय संबंधों से संबंधित है।"
    },
    {
        question: "प्रश्न 33. 'भारत की आकस्मिकता निधि' (Contingency Fund of India) किसके अधिकार में रहती है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "वित्त मंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "संसद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 267 के अनुसार, भारत की आकस्मिकता निधि राष्ट्रपति के अधीन होती है और वह संसद की मंजूरी से पहले किसी भी अप्रत्याशित व्यय को पूरा करने के लिए इससे अग्रिम राशि निकाल सकता है।"
    },
    {
        question: "प्रश्न 34. कृषि आय पर कर कौन लगा सकता है?",
        answers: shuffle([
            { text: "केंद्र सरकार", correct: false },
            { text: "राज्य सरकार", correct: true },
            { text: "नगर निगम", correct: false },
            { text: "केंद्र और राज्य दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृषि आय पर कर लगाना राज्य सूची का विषय है, इसलिए इस पर कर लगाने का अधिकार केवल राज्य सरकारों को है।"
    },
    {
        question: "प्रश्न 35. वित्तीय आपातकाल (अनुच्छेद 360) के दौरान क्या होता है?",
        answers: shuffle([
            { text: "राज्यों की वित्तीय स्वायत्तता समाप्त हो जाती है", correct: false },
            { text: "केंद्र राज्यों को उनके वित्तीय मामलों के संबंध में निर्देश दे सकता है", correct: false },
            { text: "न्यायाधीशों और सरकारी कर्मचारियों के वेतन में कटौती की जा सकती है", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वित्तीय आपातकाल के दौरान, संघ की कार्यपालिका शक्ति का विस्तार किसी भी राज्य को वित्तीय औचित्य संबंधी सिद्धांतों का पालन करने के लिए निर्देश देने तक हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति राज्यों के धन विधेयकों को अपने विचार के लिए आरक्षित करने और न्यायाधीशों सहित सभी सरकारी कर्मचारियों के वेतन में कटौती का आदेश दे सकते हैं।"
    },
    {
        question: "प्रश्न 36. सरकारिया आयोग का गठन किस उद्देश्य से किया गया था?",
        answers: shuffle([
            { text: "पंचायती राज सुधार", correct: false },
            { text: "केंद्र-राज्य संबंधों की समीक्षा", correct: true },
            { text: "चुनावी सुधार", correct: false },
            { text: "बैंकिंग क्षेत्र में सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1983 में गठित सरकारिया आयोग का उद्देश्य केंद्र और राज्यों के बीच सभी क्षेत्रों- विधायी, प्रशासनिक और वित्तीय- में संबंधों की जांच करना और सुधारों की सिफारिश करना था।"
    },
    {
        question: "प्रश्न 37. भारतीय संघवाद को \"सहकारी संघवाद\" (Cooperative Federalism) किसने कहा है?",
        answers: shuffle([
            { text: "आइवर जेनिंग्स", correct: false },
            { text: "के. सी. व्हेयर", correct: false },
            { text: "ग्रैनविल ऑस्टिन", correct: true },
            { text: "बी. आर. अम्बेडकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रैनविल ऑस्टिन ने भारतीय संघवाद की प्रकृति को सहकारी संघवाद के रूप में वर्णित किया, जहाँ केंद्र और राज्य एक-दूसरे के साथ सहयोग करते हुए कार्य करते हैं।"
    },
    {
        question: "प्रश्न 38. निम्नलिखित में से कौन सी संस्था केंद्र-राज्य विवादों का समाधान करती है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: true },
            { text: "अंतर-राज्य परिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 131 के तहत, केंद्र और एक या अधिक राज्यों के बीच, या राज्यों के बीच किसी भी विवाद पर निर्णय देने का मूल क्षेत्राधिकार सर्वोच्च न्यायालय के पास है।"
    },
    {
        question: "प्रश्न 39. पुंछी आयोग (2007) का संबंध किससे था?",
        answers: shuffle([
            { text: "केंद्र-राज्य संबंध", correct: true },
            { text: "गरीबी उन्मूलन", correct: false },
            { text: "प्रशासनिक सुधार", correct: false },
            { text: "न्यायिक सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यायमूर्ति मदन मोहन पुंछी की अध्यक्षता में इस आयोग का गठन केंद्र-राज्य संबंधों के क्षेत्र में नई चुनौतियों का आकलन करने के लिए किया गया था, जो सरकारिया आयोग के बाद उत्पन्न हुई थीं।"
    },
    {
        question: "प्रश्न 40. \"एकल नागरिकता\" का प्रावधान शक्तियों के विभाजन पर क्या प्रभाव डालता है?",
        answers: shuffle([
            { text: "यह राज्यों को मजबूत करता है", correct: false },
            { text: "यह केंद्र को मजबूत करता है", correct: true },
            { text: "इसका कोई प्रभाव नहीं पड़ता है", correct: false },
            { text: "यह नागरिकों के अधिकारों को सीमित करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेरिका के विपरीत, भारत में दोहरी नागरिकता (केंद्र और राज्य) नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> एकल नागरिकता पूरे देश के लिए एक समान अधिकार और पहचान को बढ़ावा देती है और एक मजबूत केंद्र की ओर झुकाव दर्शाती है।"
    },
    {
        question: "प्रश्न 41. राज्य सूची के विषय पर राज्यसभा द्वारा पारित प्रस्ताव कितने समय तक लागू रहता है?",
        answers: shuffle([
            { text: "छह महीने", correct: false },
            { text: "एक वर्ष", correct: true },
            { text: "दो वर्ष", correct: false },
            { text: "जब तक राज्यसभा उसे निरस्त न कर दे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 249 के तहत पारित ऐसा प्रस्ताव एक वर्ष की अवधि के लिए लागू रहता है, हालांकि इसे हर बार एक वर्ष के लिए आगे बढ़ाया जा सकता है।"
    },
    {
        question: "प्रश्न 42. क्या संसद किसी भारतीय राज्य की सीमाओं या नाम में परिवर्तन कर सकती है?",
        answers: shuffle([
            { text: "नहीं, यह केवल राज्य विधानमंडल कर सकता है", correct: false },
            { text: "हाँ, लेकिन केवल संबंधित राज्य की सहमति से", correct: false },
            { text: "हाँ, साधारण बहुमत से और राज्यों की राय जानने के बाद", correct: true },
            { text: "हाँ, लेकिन केवल दो-तिहाई बहुमत से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 3 के तहत संसद को नए राज्यों का निर्माण करने और मौजूदा राज्यों के क्षेत्रों, सीमाओं या नामों में परिवर्तन करने की शक्ति है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके लिए संबंधित राज्य के विचार जानना आवश्यक है, लेकिन उन विचारों को मानने के लिए संसद बाध्य नहीं है।"
    },
    {
        question: "प्रश्न 43. 42वें संविधान संशोधन, 1976 द्वारा कौन से विषय राज्य सूची से समवर्ती सूची में स्थानांतरित किए गए थे?",
        answers: shuffle([
            { text: "पुलिस, जेल, कृषि", correct: false },
            { text: "शिक्षा, वन, नाप और तौल, वन्यजीवों का संरक्षण", correct: true },
            { text: "बैंकिंग, बीमा, रेलवे", correct: false },
            { text: "पंचायती राज, भूमि सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस संशोधन ने पांच विषयों को राज्य सूची से समवर्ती सूची में स्थानांतरित कर दिया, जिससे इन पर केंद्र को भी कानून बनाने की शक्ति मिल गई।"
    },
    {
        question: "प्रश्न 44. किस स्थिति में राज्य विधानमंडल द्वारा पारित कोई विधेयक कानून नहीं बन सकता?",
        answers: shuffle([
            { text: "यदि मुख्यमंत्री उसे अस्वीकार कर दे", correct: false },
            { text: "यदि विधानसभा अध्यक्ष उस पर हस्ताक्षर न करे", correct: false },
            { text: "यदि राज्यपाल उसे राष्ट्रपति के विचार के लिए आरक्षित कर ले और राष्ट्रपति अनुमति न दे", correct: true },
            { text: "यदि उच्च न्यायालय उसे असंवैधानिक घोषित कर दे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 201 के तहत, जब कोई विधेयक राष्ट्रपति के विचार के लिए आरक्षित किया जाता है, तो राष्ट्रपति उस पर अनुमति दे सकता है या रोक सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केंद्र को राज्य विधान पर एक वीटो शक्ति प्रदान करता है।"
    },
    {
        question: "प्रश्न 45. \"वित्तीय स्वायत्तता\" के संदर्भ में राज्यों की केंद्र पर निर्भरता का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "राज्यों के पास कर लगाने की सीमित शक्तियाँ हैं", correct: false },
            { text: "प्रमुख राजस्व स्रोत केंद्र के पास हैं", correct: false },
            { text: "राज्यों के खर्चे उनकी आय से अधिक होते हैं", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यों के पास राजस्व के स्रोत सीमित हैं जबकि उनकी विकासात्मक जिम्मेदारियाँ बहुत अधिक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अधिकांश बड़े और लचीले कर (जैसे आयकर, निगम कर) केंद्र के अधिकार क्षेत्र में आते हैं, जिससे राज्य वित्तीय सहायता और अनुदान के लिए केंद्र पर बहुत अधिक निर्भर रहते हैं।"
    },
    {
        question: "प्रश्न 46. नीति आयोग (NITI Aayog) की भूमिका केंद्र-राज्य संबंधों में क्या है?",
        answers: shuffle([
            { text: "यह एक वैधानिक निकाय है जो अनुदान बांटता है", correct: false },
            { text: "यह एक संवैधानिक निकाय है जो विवादों को सुलझाता है", correct: false },
            { text: "यह \"सहकारी संघवाद\" को बढ़ावा देने वाला एक थिंक टैंक है", correct: true },
            { text: "यह राज्यों पर केंद्र की नीतियों को लागू करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> योजना आयोग के स्थान पर बनाया गया नीति आयोग, राज्यों को नीति निर्माण प्रक्रिया में शामिल करके सहकारी संघवाद को बढ़ावा देने का प्रयास करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राज्यों को वित्तीय आवंटन नहीं करता है।"
    },
    {
        question: "प्रश्न 47. भारतीय संविधान की प्रकृति क्या है?",
        answers: shuffle([
            { text: "पूर्णतः संघात्मक", correct: false },
            { text: "पूर्णतः एकात्मक", correct: false },
            { text: "संसदीय", correct: false },
            { text: "संरचना में संघात्मक, किन्तु भावना में एकात्मक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान में शक्तियों के विभाजन, लिखित संविधान और स्वतंत्र न्यायपालिका जैसी संघात्मक विशेषताएं हैं, लेकिन एक मजबूत केंद्र, एकल नागरिकता और आपातकालीन प्रावधानों जैसी एकात्मक विशेषताएं भी हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे \"अर्ध-संघीय\" (Quasi-Federal) भी कहा जाता है।"
    },
    {
        question: "प्रश्न 48. संघ द्वारा वसूले जाने वाले और राज्यों के साथ साझा किए जाने वाले करों का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 268", correct: false },
            { text: "अनुच्छेद 269", correct: false },
            { text: "अनुच्छेद 270", correct: true },
            { text: "अनुच्छेद 275", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 270 उन करों से संबंधित है जो संघ द्वारा लगाए और एकत्र किए जाते हैं और फिर संघ और राज्यों के बीच वित्त आयोग की सिफारिशों के अनुसार वितरित किए जाते हैं (जैसे आयकर)।"
    },
    {
        question: "प्रश्न 49. 'ऋण' (Borrowing) लेने के संबंध में क्या सही है?",
        answers: shuffle([
            { text: "केंद्र और राज्य दोनों भारत के भीतर और बाहर से ऋण ले सकते हैं", correct: false },
            { text: "केवल केंद्र ही ऋण ले सकता है", correct: false },
            { text: "केंद्र भारत के भीतर और बाहर से, जबकि राज्य केवल भारत के भीतर से ऋण ले सकते हैं", correct: true },
            { text: "राज्य बिना केंद्र की अनुमति के ऋण नहीं ले सकते", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 292 केंद्र को भारत और विदेश से ऋण लेने की अनुमति देता है, जबकि अनुच्छेद 293 राज्यों को केवल भारत के भीतर से ऋण लेने की अनुमति देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि राज्य पर केंद्र का कोई बकाया ऋण है तो वह केंद्र की सहमति के बिना नया ऋण नहीं ले सकता।"
    },
    {
        question: "प्रश्न 50. समवर्ती सूची का विचार किस देश के संविधान से लिया गया है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "आयरलैंड", correct: false },
            { text: "दक्षिण अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान में समवर्ती सूची और संसद के दोनों सदनों की संयुक्त बैठक का प्रावधान ऑस्ट्रेलियाई संविधान से प्रेरित है।"
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