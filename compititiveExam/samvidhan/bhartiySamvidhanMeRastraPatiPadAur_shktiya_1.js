const questions = [
    {
        topHeading: "राष्ट्रपति पद और शक्तियों पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान का कौन सा अनुच्छेद यह कहता है कि \"भारत का एक राष्ट्रपति होगा\"?",
        answers: shuffle([
            { text: "अनुच्छेद 51", correct: false },
            { text: "अनुच्छेद 52", correct: true },
            { text: "अनुच्छेद 53", correct: false },
            { text: "अनुच्छेद 54", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान का अनुच्छेद 52 स्पष्ट रूप से यह प्रावधान करता है कि भारत का एक राष्ट्रपति होगा, जो राष्ट्र का प्रमुख होता है।"
    },
    {
        question: "प्रश्न 2. संघ की कार्यपालिका शक्ति किसमें निहित होती है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "मंत्रिपरिषद", correct: false },
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 53(1) के अनुसार, संघ की कार्यपालिका शक्ति राष्ट्रपति में निहित होगी और वह इसका प्रयोग संविधान के अनुसार स्वयं या अपने अधीनस्थ अधिकारियों के द्वारा करेगा।"
    },
    {
        question: "प्रश्न 3. राष्ट्रपति के निर्वाचक मंडल में कौन शामिल नहीं होता है?",
        answers: shuffle([
            { text: "लोकसभा के निर्वाचित सदस्य", correct: false },
            { text: "राज्यसभा के निर्वाचित सदस्य", correct: false },
            { text: "राज्यों की विधानसभाओं के निर्वाचित सदस्य", correct: false },
            { text: "राज्यों की विधान परिषदों के निर्वाचित सदस्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 54 के अनुसार, राष्ट्रपति के निर्वाचक मंडल में संसद के दोनों सदनों के निर्वाचित सदस्य तथा राज्यों की विधानसभाओं के निर्वाचित सदस्य शामिल होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> विधान परिषदों के सदस्य इस प्रक्रिया में भाग नहीं लेते।"
    },
    {
        question: "प्रश्न 4. राष्ट्रपति पद के उम्मीदवार के लिए न्यूनतम आयु कितनी होनी चाहिए?",
        answers: shuffle([
            { text: "25 वर्ष", correct: false },
            { text: "30 वर्ष", correct: false },
            { text: "35 वर्ष", correct: true },
            { text: "40 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 58(1)(b) के अनुसार, राष्ट्रपति के रूप में चुनाव के लिए पात्र होने के लिए एक व्यक्ति को 35 वर्ष की आयु पूरी करनी होगी।"
    },
    {
        question: "प्रश्न 5. भारत के राष्ट्रपति पर महाभियोग की प्रक्रिया किस अनुच्छेद के तहत शुरू की जा सकती है?",
        answers: shuffle([
            { text: "अनुच्छेद 59", correct: false },
            { text: "अनुच्छेद 60", correct: false },
            { text: "अनुच्छेद 61", correct: true },
            { text: "अनुच्छेद 72", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 61 में 'संविधान के उल्लंघन' के आधार पर राष्ट्रपति के विरुद्ध महाभियोग चलाने की प्रक्रिया का वर्णन है।"
    },
    {
        question: "प्रश्न 6. राष्ट्रपति को पद की शपथ कौन दिलाता है?",
        answers: shuffle([
            { text: "उपराष्ट्रपति", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 60 के अनुसार, राष्ट्रपति अपना पद ग्रहण करने से पहले भारत के मुख्य न्यायाधीश या उनकी अनुपस्थिति में उच्चतम न्यायालय के वरिष्ठतम न्यायाधीश के समक्ष शपथ लेता है।"
    },
    {
        question: "प्रश्न 7. राष्ट्रपति अपना त्यागपत्र किसे सौंपता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री को", correct: false },
            { text: "उपराष्ट्रपति को", correct: true },
            { text: "भारत के मुख्य न्यायाधीश को", correct: false },
            { text: "लोकसभा अध्यक्ष को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 56(1)(a) के अनुसार, राष्ट्रपति, उपराष्ट्रपति को संबोधित अपने हस्ताक्षर सहित लेख द्वारा अपना पद त्याग सकता है।"
    },
    {
        question: "प्रश्न 8. निम्नलिखित में से किसकी नियुक्ति राष्ट्रपति द्वारा नहीं की जाती है?",
        answers: shuffle([
            { text: "भारत के महान्यायवादी", correct: false },
            { text: "नियंत्रक एवं महालेखा परीक्षक", correct: false },
            { text: "राज्यों के राज्यपाल", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकसभा अध्यक्ष का चुनाव लोकसभा के सदस्यों द्वारा अपने में से ही किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी की नियुक्ति राष्ट्रपति द्वारा की जाती है।"
    },
    {
        question: "प्रश्न 9. संसद के दोनों सदनों की संयुक्त बैठक कौन आहूत कर सकता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "राज्यसभा का सभापति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 108 के तहत, यदि किसी विधेयक पर दोनों सदनों के बीच गतिरोध होता है, तो राष्ट्रपति दोनों सदनों की संयुक्त बैठक बुला सकता है।"
    },
    {
        question: "प्रश्न 10. राष्ट्रपति किस अनुच्छेद के तहत उच्चतम न्यायालय से किसी विषय पर सलाह ले सकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 123", correct: false },
            { text: "अनुच्छेद 136", correct: false },
            { text: "अनुच्छेद 143", correct: true },
            { text: "अनुच्छेद 352", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 143 राष्ट्रपति को यह शक्ति देता है कि वह विधि या तथ्य के किसी भी प्रश्न पर उच्चतम न्यायालय की राय ले सकता है, लेकिन यह राय राष्ट्रपति के लिए बाध्यकारी नहीं होती है।"
    },
    {
        question: "प्रश्न 11. राष्ट्रपति की क्षमादान की शक्ति का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 71", correct: false },
            { text: "अनुच्छेद 72", correct: true },
            { text: "अनुच्छेद 61", correct: false },
            { text: "अनुच्छेद 123", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 72 राष्ट्रपति को किसी भी अपराध के लिए सिद्धदोष ठहराए गए व्यक्ति के दण्ड को क्षमा, उसका प्रविलंबन, विराम या परिहार करने की अथवा दंडादेश के निलंबन, परिहार या लघुकरण की शक्ति प्रदान करता है।"
    },
    {
        question: "प्रश्न 12. राष्ट्रपति लोकसभा को भंग कर सकता है:",
        answers: shuffle([
            { text: "भारत के मुख्य न्यायाधीश की सलाह पर", correct: false },
            { text: "लोकसभा की सिफारिश पर", correct: false },
            { text: "केंद्रीय मंत्रिमंडल की सिफारिश पर", correct: true },
            { text: "राज्यसभा की सिफारिश पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 85(2)(b) के तहत राष्ट्रपति प्रधानमंत्री की अध्यक्षता वाले केंद्रीय मंत्रिमंडल की सलाह पर लोकसभा को भंग कर सकता है।"
    },
    {
        question: "प्रश्न 13. संविधान के किस अनुच्छेद के अंतर्गत राष्ट्रपति अध्यादेश जारी कर सकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 78", correct: false },
            { text: "अनुच्छेद 108", correct: false },
            { text: "अनुच्छेद 123", correct: true },
            { text: "अनुच्छेद 143", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब संसद का सत्र न चल रहा हो और किसी विषय पर तत्काल कानून बनाने की आवश्यकता हो, तो राष्ट्रपति अनुच्छेद 123 के तहत अध्यादेश जारी कर सकता है, जिसका प्रभाव संसद द्वारा बनाए गए कानून के समान होता है।"
    },
    {
        question: "प्रश्न 14. राष्ट्रपति द्वारा जारी एक अध्यादेश संसद के सत्र शुरू होने के बाद कितने समय तक रखा जाना आवश्यक है?",
        answers: shuffle([
            { text: "1 माह", correct: false },
            { text: "6 सप्ताह", correct: true },
            { text: "6 माह", correct: false },
            { text: "8 सप्ताह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसद की पुनः बैठक के 6 सप्ताह के भीतर अध्यादेश को संसद द्वारा अनुमोदित किया जाना चाहिए, अन्यथा यह समाप्त हो जाता है।"
    },
    {
        question: "प्रश्न 15. भारत के राष्ट्रपति के पास कौन-सी वीटो शक्ति नहीं है?",
        answers: shuffle([
            { text: "आत्यंतिक वीटो (Absolute Veto)", correct: false },
            { text: "विशेषित वीटो (Qualified Veto)", correct: true },
            { text: "निलंबनकारी वीटो (Suspensive Veto)", correct: false },
            { text: "पॉकेट वीटो (Pocket Veto)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के राष्ट्रपति के पास आत्यंतिक, निलंबनकारी और पॉकेट वीटो हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> विशेषित वीटो, जिसमें विधायिका के उच्च बहुमत द्वारा वीटो को रद्द किया जा सकता है, अमेरिकी राष्ट्रपति के पास है, भारतीय राष्ट्रपति के पास नहीं।"
    },
    {
        question: "प्रश्न 16. संसद द्वारा पारित कोई विधेयक राष्ट्रपति को भेजे जाने पर वह क्या कर सकता है?",
        answers: shuffle([
            { text: "अपनी स्वीकृति दे सकता है।", correct: false },
            { text: "अपनी स्वीकृति रोक सकता है।", correct: false },
            { text: "विधेयक को पुनर्विचार के लिए लौटा सकता है (धन विधेयक को छोड़कर)।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 111 के तहत राष्ट्रपति के पास ये सभी विकल्प होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वह विधेयक पर सहमति दे सकता है, रोक सकता है या पुनर्विचार के लिए वापस भेज सकता है।"
    },
    {
        question: "प्रश्न 17. जब राष्ट्रपति किसी विधेयक को अनिश्चित काल के लिए अपने पास लंबित रखता है, तो इसे क्या कहा जाता है?",
        answers: shuffle([
            { text: "आत्यंतिक वीटो", correct: false },
            { text: "निलंबनकारी वीटो", correct: false },
            { text: "पॉकेट वीटो", correct: true },
            { text: "विशेषित वीटो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान राष्ट्रपति के लिए किसी विधेयक पर निर्णय देने के लिए कोई समय-सीमा निर्धारित नहीं करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब वह कोई कार्रवाई नहीं करता है, तो इसे पॉकेट वीटो का प्रयोग माना जाता है, जैसा कि राष्ट्रपति ज्ञानी जैल सिंह ने 'भारतीय डाकघर (संशोधन) विधेयक' पर किया था।"
    },
    {
        question: "प्रश्न 18. राष्ट्रीय आपातकाल की घोषणा राष्ट्रपति किस आधार पर कर सकता है?",
        answers: shuffle([
            { text: "युद्ध", correct: false },
            { text: "बाह्य आक्रमण", correct: false },
            { text: "सशस्त्र विद्रोह", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 352 के तहत, राष्ट्रपति इन तीनों आधारों पर राष्ट्रीय आपातकाल की घोषणा कर सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सशस्त्र विद्रोह' शब्द को 44वें संशोधन द्वारा 'आंतरिक अशांति' के स्थान पर जोड़ा गया था।"
    },
    {
        question: "प्रश्न 19. किसी राज्य में राष्ट्रपति शासन किस अनुच्छेद के तहत लगाया जाता है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 356", correct: true },
            { text: "अनुच्छेद 360", correct: false },
            { text: "अनुच्छेद 365", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि राष्ट्रपति किसी राज्य के राज्यपाल से रिपोर्ट मिलने पर या अन्यथा इस बात से संतुष्ट हो जाता है कि राज्य में संवैधानिक तंत्र विफल हो गया है, तो वह अनुच्छेद 356 के तहत राष्ट्रपति शासन की घोषणा कर सकता है।"
    },
    {
        question: "प्रश्न 20. वित्तीय आपातकाल का प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 360", correct: true },
            { text: "अनुच्छेद 359", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 360 राष्ट्रपति को वित्तीय आपातकाल की घोषणा करने का अधिकार देता है यदि वह संतुष्ट है कि ऐसी स्थिति उत्पन्न हो गई है जिससे भारत या उसके किसी हिस्से की वित्तीय स्थिरता या साख को खतरा है।"
    },
    {
        question: "प्रश्न 21. राष्ट्रपति के चुनाव से संबंधित विवादों का निपटारा कौन करता है?",
        answers: shuffle([
            { text: "निर्वाचन आयोग", correct: false },
            { text: "संसद", correct: false },
            { text: "उच्चतम न्यायालय", correct: true },
            { text: "उपराष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 71 के अनुसार, राष्ट्रपति या उपराष्ट्रपति के चुनाव से संबंधित सभी शंकाओं और विवादों की जांच और निर्णय उच्चतम न्यायालय द्वारा किया जाएगा और उसका निर्णय अंतिम होगा।"
    },
    {
        question: "प्रश्न 22. भारत के तीनों सशस्त्र बलों का सर्वोच्च कमांडर कौन होता है?",
        answers: shuffle([
            { text: "रक्षा मंत्री", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "फील्ड मार्शल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 53(2) के अनुसार, संघ के रक्षा बलों का सर्वोच्च समादेश (Supreme Command) राष्ट्रपति में निहित होता है।"
    },
    {
        question: "प्रश्न 23. धन विधेयक को संसद में किसकी पूर्व अनुमति से ही प्रस्तुत किया जा सकता है?",
        answers: shuffle([
            { text: "वित्त मंत्री", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "लोकसभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 110 में परिभाषित कोई भी धन विधेयक राष्ट्रपति की सिफारिश के बिना लोकसभा में पेश नहीं किया जा सकता है।"
    },
    {
        question: "प्रश्न 24. वित्त आयोग की नियुक्ति प्रत्येक पाँच वर्ष पर कौन करता है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "वित्त मंत्रालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 280 के तहत, राष्ट्रपति प्रत्येक पाँचवें वर्ष की समाप्ति पर या पहले, एक वित्त आयोग का गठन करता है जो केंद्र और राज्यों के बीच करों के वितरण पर सिफारिशें देता है।"
    },
    {
        question: "प्रश्न 25. \"राष्ट्रपति का पद गरिमा और प्रतिष्ठा का है, लेकिन अधिकार का नहीं।\" यह कथन किसकी भूमिका को दर्शाता है?",
        answers: shuffle([
            { text: "एक वास्तविक कार्यकारी", correct: false },
            { text: "एक संवैधानिक प्रमुख", correct: true },
            { text: "एक तानाशाह", correct: false },
            { text: "एक राजनीतिक नेता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथन संसदीय प्रणाली में राष्ट्रपति की भूमिका को सटीक रूप से दर्शाता है, जहाँ वह राष्ट्र का सर्वोच्च प्रतीक और एकता का केंद्र है, लेकिन वास्तविक कार्यकारी शक्तियाँ मंत्रिपरिषद में निहित होती हैं।"
    },
    {
        question: "प्रश्न 26. कौन भारत के राष्ट्रपति निर्विरोध चुने गए थे?",
        answers: shuffle([
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "डॉ. एस. राधाकृष्णन", correct: false },
            { text: "नीलम संजीव रेड्डी", correct: true },
            { text: "के. आर. नारायणन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीलम संजीव रेड्डी 1977 में एकमात्र ऐसे राष्ट्रपति थे जो निर्विरोध चुने गए थे।"
    },
    {
        question: "प्रश्न 27. राष्ट्रपति के महाभियोग की प्रक्रिया है:",
        answers: shuffle([
            { text: "एक न्यायिक प्रक्रिया", correct: false },
            { text: "एक अर्ध-न्यायिक प्रक्रिया", correct: true },
            { text: "एक विधायी प्रक्रिया", correct: false },
            { text: "एक कार्यकारी प्रक्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक अर्ध-न्यायिक (Quasi-judicial) प्रक्रिया है क्योंकि इसमें संसद के सदस्य आरोपों की जांच करते हैं और निर्णय लेते हैं, जो एक न्यायालय के समान कार्य है।"
    },
    {
        question: "प्रश्न 28. राष्ट्रपति पर महाभियोग का प्रस्ताव लाने के लिए सदन के कितने सदस्यों के हस्ताक्षर आवश्यक हैं?",
        answers: shuffle([
            { text: "सदन की कुल सदस्य संख्या का 1/3", correct: false },
            { text: "सदन की कुल सदस्य संख्या का 1/4", correct: true },
            { text: "सदन की कुल सदस्य संख्या का 1/2", correct: false },
            { text: "सदन की कुल सदस्य संख्या का 2/3", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाभियोग का प्रस्ताव किसी भी सदन में लाया जा सकता है, लेकिन इसके लिए कम से कम 14 दिन की पूर्व सूचना देनी होती है और उस सूचना पर उस सदन के कम से कम एक-चौथाई सदस्यों के हस्ताक्षर होने चाहिए।"
    },
    {
        question: "प्रश्न 29. राष्ट्रपति लोकसभा में कितने आंग्ल-भारतीय समुदाय के सदस्यों को मनोनीत कर सकता था?",
        answers: shuffle([
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 331 के तहत राष्ट्रपति लोकसभा में आंग्ल-भारतीय समुदाय के 2 सदस्यों को मनोनीत कर सकता था, यदि उसकी राय में समुदाय का पर्याप्त प्रतिनिधित्व नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> (नोट: 104वें संविधान संशोधन, 2019 द्वारा यह प्रावधान समाप्त कर दिया गया है।)"
    },
    {
        question: "प्रश्न 30. राष्ट्रपति राज्यसभा में कितने सदस्यों को मनोनीत करता है?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "15", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 80(3) के अनुसार, राष्ट्रपति साहित्य, विज्ञान, कला और समाज सेवा में विशेष ज्ञान या व्यावहारिक अनुभव रखने वाले 12 व्यक्तियों को राज्यसभा के लिए मनोनीत कर सकता है।"
    },
    {
        question: "प्रश्न 31. किस संविधान संशोधन द्वारा राष्ट्रपति के लिए मंत्रिपरिषद की सलाह मानना बाध्यकारी बना दिया गया?",
        answers: shuffle([
            { text: "24वां संशोधन", correct: false },
            { text: "42वां संशोधन", correct: true },
            { text: "44वां संशोधन", correct: false },
            { text: "52वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1976 के 42वें संविधान संशोधन ने राष्ट्रपति के लिए मंत्रिपरिषद की सलाह को मानना बाध्यकारी बना दिया था।"
    },
    {
        question: "प्रश्न 32. किस संविधान संशोधन ने राष्ट्रपति को यह अधिकार दिया कि वह मंत्रिपरिषद की सलाह को एक बार पुनर्विचार के लिए लौटा सकता है?",
        answers: shuffle([
            { text: "42वां संशोधन", correct: false },
            { text: "44वां संशोधन", correct: true },
            { text: "61वां संशोधन", correct: false },
            { text: "73वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1978 के 44वें संशोधन ने यह प्रावधान जोड़ा कि राष्ट्रपति मंत्रिपरिषद की सलाह को एक बार पुनर्विचार के लिए वापस भेज सकता है, लेकिन पुनर्विचार के बाद दी गई सलाह को मानने के लिए वह बाध्य होगा।"
    },
    {
        question: "प्रश्न 33. राष्ट्रपति की मृत्यु, त्यागपत्र या पद से हटाए जाने के कारण हुई रिक्ति को भरने के लिए चुनाव कितने समय के भीतर हो जाना चाहिए?",
        answers: shuffle([
            { text: "3 महीने", correct: false },
            { text: "6 महीने", correct: true },
            { text: "9 महीने", correct: false },
            { text: "1 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 62(2) के अनुसार, ऐसी रिक्ति को भरने के लिए चुनाव रिक्ति की तारीख से छह महीने के भीतर हर हाल में आयोजित किया जाना चाहिए।"
    },
    {
        question: "प्रश्न 34. यदि भारत के राष्ट्रपति और उपराष्ट्रपति दोनों का पद रिक्त हो, तो उनके कार्यों का निर्वहन कौन करेगा?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: true },
            { text: "गृह मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति (कर्तव्यों का निर्वहन) अधिनियम, 1969 के अनुसार, ऐसी स्थिति में भारत के मुख्य न्यायाधीश या उनकी अनुपस्थिति में उच्चतम न्यायालय के वरिष्ठतम न्यायाधीश राष्ट्रपति के रूप में कार्य करेंगे।"
    },
    {
        question: "प्रश्न 35. राष्ट्रपति द्वारा राष्ट्रीय आपातकाल की घोषणा को संसद के प्रत्येक सदन द्वारा कितने समय के भीतर अनुमोदित किया जाना आवश्यक है?",
        answers: shuffle([
            { text: "15 दिन", correct: false },
            { text: "1 महीना", correct: true },
            { text: "2 महीने", correct: false },
            { text: "6 महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपातकाल की घोषणा को संसद के दोनों सदनों द्वारा इसके जारी होने की तारीख से एक महीने के भीतर विशेष बहुमत से अनुमोदित किया जाना चाहिए।"
    },
    {
        question: "प्रश्न 36. भारत की आकस्मिकता निधि (Contingency Fund) किसके नियंत्रण में होती है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "वित्त मंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 267 के तहत, भारत की आकस्मिकता निधि राष्ट्रपति के निपटान में होती है ताकि वह संसद की मंजूरी के बिना किसी भी अप्रत्याशित व्यय को पूरा कर सके।"
    },
    {
        question: "प्रश्न 37. राष्ट्रपति को \"रबर स्टाम्प\" की संज्ञा क्यों दी जाती है?",
        answers: shuffle([
            { text: "A) क्योंकि वह नाममात्र का कार्यकारी प्रमुख है।", correct: false },
            { text: "B) क्योंकि वह वास्तविक शक्तियों का प्रयोग मंत्रिपरिषद की सलाह पर करता है।", correct: false },
            { text: "C) क्योंकि वह संसद के प्रति उत्तरदायी नहीं है।", correct: false },
            { text: "A और B दोनों।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसदीय प्रणाली में, राष्ट्रपति राज्य का औपचारिक प्रमुख होता है जबकि वास्तविक कार्यकारी शक्ति प्रधानमंत्री की अध्यक्षता वाली मंत्रिपरिषद के पास होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति को उनकी सलाह पर कार्य करना होता है, इसलिए आलोचक उन्हें 'रबर स्टाम्प' कहते हैं।"
    },
    {
        question: "प्रश्न 38. अनुसूचित क्षेत्रों की घोषणा करने की शक्ति किसके पास है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "संबंधित राज्य का राज्यपाल", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान की पांचवीं अनुसूची के तहत राष्ट्रपति को किसी भी क्षेत्र को 'अनुसूचित क्षेत्र' के रूप में घोषित करने और उसके क्षेत्र को बदलने का अधिकार है।"
    },
    {
        question: "प्रश्न 39. राष्ट्रपति के निर्वाचन की पद्धति क्या है?",
        answers: shuffle([
            { text: "प्रत्यक्ष निर्वाचन", correct: false },
            { text: "फर्स्ट-पास्ट-द-पोस्ट प्रणाली", correct: false },
            { text: "आनुपातिक प्रतिनिधित्व प्रणाली के अनुसार एकल संक्रमणीय मत द्वारा", correct: true },
            { text: "सूची प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 55(3) में राष्ट्रपति के चुनाव की प्रक्रिया का वर्णन है, जो यह सुनिश्चित करता है कि विजेता उम्मीदवार को वोटों का पूर्ण बहुमत मिले।"
    },
    {
        question: "प्रश्न 40. राष्ट्रपति चुनाव में एक विधायक के वोट का मूल्य कैसे निर्धारित किया जाता है?",
        answers: shuffle([
            { text: "राज्य की जनसंख्या ÷ (विधानसभा के निर्वाचित सदस्य × 100)", correct: false },
            { text: "राज्य की जनसंख्या ÷ (विधानसभा के निर्वाचित सदस्य × 1000)", correct: true },
            { text: "राज्य की कुल जनसंख्या ÷ विधानसभा के कुल सदस्य", correct: false },
            { text: "यह सभी राज्यों के लिए समान होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक विधायक के वोट का मूल्य = (राज्य की कुल जनसंख्या / विधानसभा के कुल निर्वाचित सदस्यों की संख्या) ÷ 1000।"
    },
    {
        question: "प्रश्न 41. प्रधानमंत्री और अन्य मंत्रियों की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "उपराष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 75(1) के अनुसार, प्रधानमंत्री की नियुक्ति राष्ट्रपति द्वारा की जाएगी और अन्य मंत्रियों की नियुक्ति राष्ट्रपति, प्रधानमंत्री की सलाह पर करेगा।"
    },
    {
        question: "प्रश्न 42. संसद के लिए राष्ट्रपति का अभिभाषण कौन तैयार करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति का सचिवालय", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "केंद्रीय मंत्रिमंडल", correct: true },
            { text: "संसदीय कार्य मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति का अभिभाषण वास्तव में सरकार की नीतियों और कार्यक्रमों का एक बयान होता है, जिसे केंद्रीय मंत्रिमंडल द्वारा तैयार किया जाता है और राष्ट्रपति केवल उसे पढ़ता है।"
    },
    {
        question: "प्रश्न 43. निम्नलिखित में से कौन सी राष्ट्रपति की एक विवेकाधीन शक्ति (Discretionary Power) मानी जा सकती है?",
        answers: shuffle([
            { text: "अध्यादेश जारी करना", correct: false },
            { text: "क्षमादान देना", correct: false },
            { text: "जब किसी भी दल को लोकसभा में स्पष्ट बहुमत न हो तो प्रधानमंत्री की नियुक्ति करना", correct: true },
            { text: "महान्यायवादी की नियुक्ति करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐसी स्थिति में, राष्ट्रपति अपने विवेक का प्रयोग यह तय करने के लिए करता है कि किस नेता के पास सदन का विश्वास हासिल करने की सबसे अधिक संभावना है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी कार्य मंत्रिपरिषद की सलाह पर किए जाते हैं।"
    },
    {
        question: "प्रश्न 44. राष्ट्रपति द्वारा दी गई सजा को माफ करने की शक्ति के संदर्भ में, 'लघुकरण' (Commutation) का क्या अर्थ है?",
        answers: shuffle([
            { text: "सजा की अवधि को कम करना।", correct: false },
            { text: "सजा की प्रकृति को बदलना (जैसे मृत्युदंड को आजीवन कारावास में)।", correct: true },
            { text: "सजा पर अस्थायी रोक लगाना।", correct: false },
            { text: "सजा को पूरी तरह से माफ करना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लघुकरण का अर्थ है सजा के स्वरूप को बदलकर उसे हल्का करना, जैसे कठोर कारावास को साधारण कारावास में बदलना।"
    },
    {
        question: "प्रश्न 45. भारत के कौन से मुख्य न्यायाधीश थे जिन्होंने राष्ट्रपति के रूप में भी कार्य किया?",
        answers: shuffle([
            { text: "न्यायमूर्ति पी. एन. भगवती", correct: false },
            { text: "न्यायमूर्ति एम. हिदायतुल्ला", correct: true },
            { text: "न्यायमूर्ति वाई. वी. चंद्रचूड़", correct: false },
            { text: "न्यायमूर्ति पतंजलि शास्त्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यायमूर्ति एम. हिदायतुल्ला ने 1969 में राष्ट्रपति डॉ. जाकिर हुसैन की मृत्यु और उपराष्ट्रपति वी. वी. गिरि के इस्तीफे के बाद कार्यवाहक राष्ट्रपति के रूप में कार्य किया था।"
    },
    {
        question: "प्रश्न 46. राष्ट्रपति भवन को किसने डिजाइन किया था?",
        answers: shuffle([
            { text: "एडवर्ड लुटियंस और हर्बर्ट बेकर", correct: true },
            { text: "ली कॉर्बुजिए", correct: false },
            { text: "चार्ल्स कोरिया", correct: false },
            { text: "लॉरी बेकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति भवन, जो पहले वायसराय हाउस था, ब्रिटिश वास्तुकार एडविन लुटियंस द्वारा डिजाइन की गई नई दिल्ली की योजना का एक प्रमुख हिस्सा था, जिसमें हर्बर्ट बेकर ने भी सहयोग किया था।"
    },
    {
        question: "प्रश्न 47. क्या राष्ट्रपति किसी सार्वजनिक महत्व के मामले पर मंत्रिपरिषद से विचार करने के लिए कह सकता है जिस पर किसी मंत्री ने निर्णय ले लिया हो लेकिन परिषद ने नहीं?",
        answers: shuffle([
            { text: "नहीं, यह प्रधानमंत्री का अधिकार है।", correct: false },
            { text: "हाँ, अनुच्छेद 78 के तहत।", correct: true },
            { text: "हाँ, लेकिन केवल वित्तीय मामलों में।", correct: false },
            { text: "नहीं, यह राष्ट्रपति की शक्तियों से बाहर है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 78(c) राष्ट्रपति को यह अधिकार देता है कि वह प्रधानमंत्री से किसी भी ऐसे मामले को मंत्रिपरिषद के समक्ष विचार के लिए रखने की अपेक्षा कर सकता है।"
    },
    {
        question: "प्रश्न 48. युद्ध की घोषणा या शांति स्थापित करने की शक्ति औपचारिक रूप से किसके पास है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "रक्षा मंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्र के प्रमुख और सशस्त्र बलों के सर्वोच्च कमांडर के रूप में, राष्ट्रपति के नाम पर ही युद्ध की घोषणा या शांति संधि की जाती है, हालांकि यह निर्णय मंत्रिमंडल का होता है।"
    },
    {
        question: "प्रश्न 49. राष्ट्रपति का कार्यकाल 5 वर्ष का होता है, इसकी गणना कब से की जाती है?",
        answers: shuffle([
            { text: "उसके चुनाव की तारीख से", correct: false },
            { text: "जिस दिन वह अपना पद ग्रहण करता है", correct: true },
            { text: "चुनाव परिणाम घोषित होने की तारीख से", correct: false },
            { text: "संसद द्वारा निर्धारित तिथि से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 56(1) के अनुसार, राष्ट्रपति अपने पद ग्रहण की तारीख से पाँच वर्ष की अवधि तक पद धारण करता है।"
    },
    {
        question: "प्रश्न 50. राष्ट्रपति के चुनाव में प्रत्येक संसद सदस्य (MP) के वोट का मूल्य कैसे निर्धारित होता है?",
        answers: shuffle([
            { text: "सभी राज्यों के विधायकों के वोटों के कुल मूल्य को संसद के कुल निर्वाचित सदस्यों से विभाजित करके।", correct: true },
            { text: "यह सभी सांसदों के लिए निश्चित होता है।", correct: false },
            { text: "लोकसभा और राज्यसभा के सांसदों के लिए अलग-अलग होता है।", correct: false },
            { text: "यह जनसंख्या के आधार पर बदलता रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सांसद के वोट का मूल्य = (सभी राज्यों के सभी निर्वाचित विधायकों के वोटों का कुल मूल्य) / (संसद के दोनों सदनों के निर्वाचित सदस्यों की कुल संख्या)।"
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