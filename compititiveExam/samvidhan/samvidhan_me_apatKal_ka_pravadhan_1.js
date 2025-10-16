const questions = [
    {
        topHeading: "संविधान में आपातकाल के प्रावधान पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान के किस भाग में आपातकालीन प्रावधानों का उल्लेख है?",
        answers: shuffle([
            { text: "भाग XV", correct: false },
            { text: "भाग XVII", correct: false },
            { text: "भाग XVIII", correct: true },
            { text: "भाग XX", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के भाग XVIII में अनुच्छेद 352 से 360 तक आपातकालीन प्रावधानों का वर्णन किया गया है।"
    },
    {
        question: "प्रश्न 2. 'सशस्त्र विद्रोह' (armed rebellion) शब्द को किस संविधान संशोधन द्वारा 'आंतरिक अशांति' के स्थान पर प्रतिस्थापित किया गया?",
        answers: shuffle([
            { text: "42वें संविधान संशोधन", correct: false },
            { text: "44वें संविधान संशोधन", correct: true },
            { text: "52वें संविधान संशोधन", correct: false },
            { text: "38वें संविधान संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1975 में 'आंतरिक अशांति' के आधार पर लगे आपातकाल के दुरुपयोग को रोकने के लिए 44वें संविधान संशोधन, 1978 द्वारा इस शब्द को 'सशस्त्र विद्रोह' से बदल दिया गया।"
    },
    {
        question: "प्रश्न 3. राष्ट्रीय आपातकाल की घोषणा को संसद के प्रत्येक सदन द्वारा कितने समय के भीतर अनुमोदित किया जाना आवश्यक है?",
        answers: shuffle([
            { text: "15 दिन", correct: false },
            { text: "एक महीना", correct: true },
            { text: "दो महीने", correct: false },
            { text: "छह महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपातकाल की घोषणा जारी होने के एक महीने के भीतर संसद के दोनों सदनों द्वारा विशेष बहुमत से इसका अनुमोदन आवश्यक है।"
    },
    {
        question: "प्रश्न 4. राष्ट्रीय आपातकाल की घोषणा कौन करता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 352 के तहत, राष्ट्रपति केंद्रीय मंत्रिमंडल की लिखित सिफारिश पर ही राष्ट्रीय आपातकाल की घोषणा कर सकते हैं।"
    },
    {
        question: "प्रश्न 5. भारत में अब तक कितनी बार राष्ट्रीय आपातकाल की घोषणा की गई है?",
        answers: shuffle([
            { text: "एक बार", correct: false },
            { text: "दो बार", correct: false },
            { text: "तीन बार", correct: true },
            { text: "चार बार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में अब तक तीन बार (1962, 1971 और 1975) राष्ट्रीय आपातकाल लगाया गया है।"
    },
    {
        question: "प्रश्न 6. राष्ट्रीय आपातकाल के दौरान कौन से मौलिक अधिकार निलंबित नहीं किए जा सकते?",
        answers: shuffle([
            { text: "अनुच्छेद 14 और 15", correct: false },
            { text: "अनुच्छेद 19 और 21", correct: false },
            { text: "अनुच्छेद 20 और 21", correct: true },
            { text: "अनुच्छेद 29 और 30", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संशोधन के बाद, अनुच्छेद 359 के तहत भी अनुच्छेद 20 (अपराधों के लिए दोषसिद्धि के संबंध में संरक्षण) और अनुच्छेद 21 (प्राण और दैहिक स्वतंत्रता का संरक्षण) को निलंबित नहीं किया जा सकता।"
    },
    {
        question: "प्रश्न 7. जब राष्ट्रीय आपातकाल की घोषणा लागू हो, तो लोकसभा का कार्यकाल संसद द्वारा एक बार में कितने समय के लिए बढ़ाया जा सकता है?",
        answers: shuffle([
            { text: "छह महीने", correct: false },
            { text: "एक वर्ष", correct: true },
            { text: "दो वर्ष", correct: false },
            { text: "तीन महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय आपातकाल के दौरान, संसद विधि द्वारा लोकसभा का कार्यकाल एक बार में एक वर्ष के लिए बढ़ा सकती है, हालांकि यह विस्तार आपातकाल की समाप्ति के बाद छह महीने से अधिक नहीं हो सकता।"
    },
    {
        question: "प्रश्न 8. राष्ट्रीय आपातकाल की घोषणा को वापस लेने के लिए प्रस्ताव कहाँ पेश किया जाना चाहिए?",
        answers: shuffle([
            { text: "केवल राज्यसभा में", correct: false },
            { text: "केवल लोकसभा में", correct: true },
            { text: "संसद के किसी भी सदन में", correct: false },
            { text: "सर्वोच्च न्यायालय में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संशोधन के अनुसार, यदि लोकसभा के कुल सदस्यों का 1/10 हिस्सा अध्यक्ष को लिखित सूचना दे, तो 14 दिनों के भीतर आपातकाल की घोषणा को अस्वीकार करने के प्रस्ताव पर विचार करने के लिए लोकसभा की विशेष बैठक बुलाई जाएगी।"
    },
    {
        question: "प्रश्न 9. किस अनुच्छेद के तहत यह प्रावधान है कि युद्ध या बाहरी आक्रमण के आधार पर आपातकाल लगने पर अनुच्छेद 19 स्वतः निलंबित हो जाएगा?",
        answers: shuffle([
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 358", correct: true },
            { text: "अनुच्छेद 359", correct: false },
            { text: "अनुच्छेद 360", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 358 के अनुसार, जब युद्ध या बाहरी आक्रमण के कारण राष्ट्रीय आपातकाल की घोषणा की जाती है, तो अनुच्छेद 19 के तहत दिए गए मौलिक अधिकार स्वतः ही निलंबित हो जाते हैं।"
    },
    {
        question: "प्रश्न 10. 1975 में आपातकाल की घोषणा के समय भारत के राष्ट्रपति कौन थे?",
        answers: shuffle([
            { text: "वी.वी. गिरि", correct: false },
            { text: "फखरुद्दीन अली अहमद", correct: true },
            { text: "ज्ञानी जैल सिंह", correct: false },
            { text: "नीलम संजीव रेड्डी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1975 में आंतरिक अशांति के आधार पर आपातकाल की घोषणा के समय भारत के राष्ट्रपति फखरुद्दीन अली अहमद थे।"
    },
    {
        question: "प्रश्न 11. राष्ट्रीय आपातकाल के दौरान राज्य सूची के विषयों पर कानून बनाने की शक्ति किसे प्राप्त हो जाती है?",
        answers: shuffle([
            { text: "राज्य विधानमंडल", correct: false },
            { text: "राज्यपाल", correct: false },
            { text: "संसद", correct: true },
            { text: "राष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपातकाल के दौरान, केंद्र-राज्य के विधायी संबंध बदल जाते हैं और संसद को राज्य सूची में वर्णित किसी भी विषय पर कानून बनाने का अधिकार मिल जाता है।"
    },
    {
        question: "प्रश्न 12. क्या राष्ट्रपति राष्ट्रीय आपातकाल की घोषणा भारत के किसी एक हिस्से के लिए कर सकता है?",
        answers: shuffle([
            { text: "नहीं, यह पूरे देश में लागू होता है", correct: false },
            { text: "हाँ, 42वें संशोधन के बाद यह संभव हुआ", correct: true },
            { text: "हाँ, 44वें संशोधन के बाद यह संभव हुआ", correct: false },
            { text: "हाँ, लेकिन केवल राज्यपाल की सिफारिश पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में यह प्रावधान नहीं था, लेकिन 42वें संविधान संशोधन, 1976 के बाद राष्ट्रपति को यह अधिकार दिया गया कि वह भारत के किसी विशेष भाग में भी आपातकाल लागू कर सकता है।"
    },
    {
        question: "प्रश्न 13. राज्यों में संवैधानिक तंत्र की विफलता पर किस अनुच्छेद के तहत राष्ट्रपति शासन लगाया जाता है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 355", correct: false },
            { text: "अनुच्छेद 356", correct: true },
            { text: "अनुच्छेद 360", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 356 के तहत, यदि राष्ट्रपति को राज्यपाल की रिपोर्ट से या अन्यथा यह समाधान हो जाता है कि राज्य में संवैधानिक तंत्र विफल हो गया है, तो वह राष्ट्रपति शासन लगा सकता है।"
    },
    {
        question: "प्रश्न 14. राष्ट्रपति शासन की घोषणा को संसद द्वारा कितने समय के भीतर अनुमोदित किया जाना आवश्यक है?",
        answers: shuffle([
            { text: "एक महीना", correct: false },
            { text: "दो महीने", correct: true },
            { text: "तीन महीने", correct: false },
            { text: "छह महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति शासन की घोषणा को जारी होने की तारीख से दो महीने के भीतर संसद के दोनों सदनों द्वारा साधारण बहुमत से अनुमोदित किया जाना आवश्यक है।"
    },
    {
        question: "प्रश्न 15. एक बार में राष्ट्रपति शासन की अवधि कितनी होती है?",
        answers: shuffle([
            { text: "तीन महीने", correct: false },
            { text: "छह महीने", correct: true },
            { text: "एक वर्ष", correct: false },
            { text: "दो वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसद के अनुमोदन के बाद, राष्ट्रपति शासन एक बार में छह महीने के लिए प्रभावी रहता है।"
    },
    {
        question: "प्रश्न 16. किसी राज्य में राष्ट्रपति शासन की अधिकतम अवधि क्या हो सकती है?",
        answers: shuffle([
            { text: "एक वर्ष", correct: false },
            { text: "दो वर्ष", correct: false },
            { text: "तीन वर्ष", correct: true },
            { text: "कोई सीमा नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति शासन को हर छह महीने में संसदीय अनुमोदन से अधिकतम तीन वर्ष तक बढ़ाया जा सकता है।"
    },
    {
        question: "प्रश्न 17. राष्ट्रपति शासन के दौरान राज्य का बजट कौन पारित करता है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "संसद", correct: true },
            { text: "राष्ट्रपति द्वारा नियुक्त सलाहकार", correct: false },
            { text: "वित्त आयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी राज्य में राष्ट्रपति शासन लागू होता है, तो राज्य का बजट संसद द्वारा पारित किया जाता है।"
    },
    {
        question: "प्रश्न 18. भारत में सर्वप्रथम राष्ट्रपति शासन किस राज्य में लगाया गया था?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "पंजाब", correct: true },
            { text: "उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहली बार राष्ट्रपति शासन 1951 में पंजाब राज्य में लगाया गया था।"
    },
    {
        question: "प्रश्न 19. किस मामले में सर्वोच्च न्यायालय ने कहा कि अनुच्छेद 356 का प्रयोग मनमाने ढंग से नहीं किया जा सकता और यह न्यायिक समीक्षा के अधीन है?",
        answers: shuffle([
            { text: "केशवानंद भारती मामला", correct: false },
            { text: "मिनर्वा मिल्स मामला", correct: false },
            { text: "एस.आर. बोम्मई मामला", correct: true },
            { text: "गोलकनाथ मामला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एस.आर. बोम्मई बनाम भारत संघ (1994) मामले में, सर्वोच्च न्यायालय ने राष्ट्रपति शासन लगाने की केंद्र की शक्ति पर महत्वपूर्ण सीमाएं लगाईं।"
    },
    {
        question: "प्रश्न 20. राष्ट्रपति शासन के दौरान, राज्य की विधायी शक्तियाँ किसे प्राप्त हो जाती हैं?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "मुख्यमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "संसद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति शासन के दौरान, राज्य विधानमंडल की शक्तियाँ संसद को प्राप्त हो जाती हैं।"
    },
    {
        question: "प्रश्न 21. निम्नलिखित में से कौन राष्ट्रपति शासन का प्रभाव नहीं है?",
        answers: shuffle([
            { text: "राज्य मंत्रिपरिषद का विघटन", correct: false },
            { text: "राज्य विधानसभा का निलंबन या विघटन", correct: false },
            { text: "राज्य के उच्च न्यायालय की शक्तियों का हस्तांतरण", correct: true },
            { text: "राज्य का प्रशासन राष्ट्रपति द्वारा चलाया जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति शासन के दौरान, राष्ट्रपति राज्य के उच्च न्यायालय से संबंधित संवैधानिक प्रावधानों को निलंबित नहीं कर सकता और उसकी शक्तियों को अपने हाथ में नहीं ले सकता।"
    },
    {
        question: "प्रश्न 22. अनुच्छेद 356 को 'मृत पत्र' (a dead letter) की संज्ञा किसने दी थी?",
        answers: shuffle([
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "सरदार वल्लभभाई पटेल", correct: false },
            { text: "डॉ. बी.आर. अंबेडकर", correct: true },
            { text: "महात्मा गांधी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा में चर्चा के दौरान डॉ. बी.आर. अंबेडकर ने उम्मीद जताई थी कि इस अनुच्छेद का प्रयोग शायद ही कभी किया जाएगा और यह एक 'मृत पत्र' बनकर रह जाएगा।"
    },
    {
        question: "प्रश्न 23. किस अनुच्छेद के तहत केंद्र सरकार राज्यों को बाहरी आक्रमण और आंतरिक अशांति से बचाने के लिए बाध्य है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 355", correct: true },
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 358", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 355 केंद्र पर यह कर्तव्य लगाता है कि वह प्रत्येक राज्य को बाहरी आक्रमण और आंतरिक गड़बड़ी से बचाए और यह सुनिश्चित करे कि प्रत्येक राज्य की सरकार संविधान के प्रावधानों के अनुसार चल रही है।"
    },
    {
        question: "प्रश्न 24. क्या राष्ट्रपति शासन को न्यायालय में चुनौती दी जा सकती है?",
        answers: shuffle([
            { text: "नहीं, यह राष्ट्रपति का विवेकाधिकार है", correct: false },
            { text: "हाँ, एस.आर. बोम्मई मामले के बाद", correct: true },
            { text: "केवल उच्च न्यायालय में", correct: false },
            { text: "केवल तभी जब यह 3 वर्ष से अधिक हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाँ, एस.आर. बोम्मई मामले के बाद सर्वोच्च न्यायालय ने यह स्पष्ट कर दिया है कि राष्ट्रपति शासन की घोषणा न्यायिक समीक्षा के अधीन है।"
    },
    {
        question: "प्रश्न 25. वित्तीय आपातकाल का प्रावधान किस अनुच्छेद में किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 359", correct: false },
            { text: "अनुच्छेद 360", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान का अनुच्छेद 360 राष्ट्रपति को वित्तीय आपातकाल की घोषणा करने का अधिकार देता है।"
    },
     {
        question: "प्रश्न 26. वित्तीय आपातकाल की घोषणा को संसद द्वारा कितने समय के भीतर अनुमोदित किया जाना आवश्यक है?",
        answers: shuffle([
            { text: "एक महीना", correct: false },
            { text: "दो महीने", correct: true },
            { text: "छह महीने", correct: false },
            { text: "तीन महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वित्तीय आपातकाल की घोषणा को जारी होने की तारीख से दो महीने के भीतर संसद के दोनों सदनों द्वारा साधारण बहुमत से अनुमोदित किया जाना चाहिए।"
    },
    {
        question: "प्रश्न 27. भारत में अब तक कितनी बार वित्तीय आपातकाल लगाया गया है?",
        answers: shuffle([
            { text: "एक बार", correct: false },
            { text: "दो बार", correct: false },
            { text: "तीन बार", correct: false },
            { text: "कभी नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में आज तक कभी भी वित्तीय आपातकाल (अनुच्छेद 360) लागू नहीं किया गया है।"
    },
    {
        question: "प्रश्न 28. वित्तीय आपातकाल के दौरान, राष्ट्रपति किसके वेतन और भत्तों में कमी का आदेश दे सकता है?",
        answers: shuffle([
            { text: "केवल केंद्र सरकार के कर्मचारी", correct: false },
            { text: "केवल राज्य सरकार के कर्मचारी", correct: false },
            { text: "संघ और राज्य सरकार के सभी कर्मचारी", correct: false },
            { text: "ये सभी, जिसमें सर्वोच्च न्यायालय और उच्च न्यायालय के न्यायाधीश भी शामिल हैं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वित्तीय आपातकाल के दौरान राष्ट्रपति केंद्र और राज्य सरकारों के किसी भी या सभी वर्गों के कर्मचारियों के वेतन और भत्तों में कमी का निर्देश दे सकता है, जिसमें सर्वोच्च न्यायालय और उच्च न्यायालय के न्यायाधीश भी शामिल हैं।"
    },
    {
        question: "प्रश्न 29. एक बार संसदीय अनुमोदन के बाद वित्तीय आपातकाल कितने समय तक लागू रहता है?",
        answers: shuffle([
            { text: "छह महीने", correct: false },
            { text: "एक वर्ष", correct: false },
            { text: "तीन वर्ष", correct: false },
            { text: "अनिश्चित काल तक, जब तक इसे वापस न लिया जाए", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बार संसद द्वारा अनुमोदित होने के बाद, वित्तीय आपातकाल अनिश्चित काल तक जारी रहता है जब तक कि राष्ट्रपति इसे वापस लेने की घोषणा न कर दें।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके लिए बार-बार संसदीय अनुमोदन की आवश्यकता नहीं होती है।"
    },
    {
        question: "प्रश्न 30. वित्तीय आपातकाल की घोषणा का आधार क्या है?",
        answers: shuffle([
            { text: "किसी राज्य में संवैधानिक तंत्र की विफलता", correct: false },
            { text: "युद्ध, बाहरी आक्रमण या सशस्त्र विद्रोह", correct: false },
            { text: "भारत या उसके किसी हिस्से की वित्तीय स्थिरता या साख को खतरा", correct: true },
            { text: "देश में गंभीर आर्थिक मंदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 360 के अनुसार, यदि राष्ट्रपति को यह समाधान हो जाए कि ऐसी स्थिति उत्पन्न हो गई है जिससे भारत या उसके किसी क्षेत्र की वित्तीय स्थिरता या साख को खतरा है, तो वह वित्तीय आपातकाल की घोषणा कर सकता है।"
    },
    {
        question: "प्रश्न 31. भारतीय संविधान में आपातकालीन प्रावधान किस देश के संविधान से प्रेरित हैं?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "यूनाइटेड किंगडम", correct: false },
            { text: "जर्मनी का वाइमर संविधान", correct: true },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान में आपातकाल के दौरान मौलिक अधिकारों के निलंबन संबंधी प्रावधान जर्मनी के वाइमर संविधान से लिए गए हैं।"
    },
    {
        question: "प्रश्न 32. आपातकाल की किस घोषणा के लिए 'कैबिनेट की लिखित सलाह' अनिवार्य है?",
        answers: shuffle([
            { text: "राष्ट्रीय आपातकाल (अनुच्छेद 352)", correct: true },
            { text: "राष्ट्रपति शासन (अनुच्छेद 356)", correct: false },
            { text: "वित्तीय आपातकाल (अनुच्छेद 360)", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संविधान संशोधन, 1978 के बाद राष्ट्रीय आपातकाल (अनुच्छेद 352) की घोषणा के लिए राष्ट्रपति को मंत्रिमंडल की लिखित सलाह देना अनिवार्य कर दिया गया।"
    },
    {
        question: "प्रश्न 33. किस प्रकार के आपातकाल के अनुमोदन के लिए संसद में 'विशेष बहुमत' की आवश्यकता होती है?",
        answers: shuffle([
            { text: "राष्ट्रपति शासन", correct: false },
            { text: "वित्तीय आपातकाल", correct: false },
            { text: "राष्ट्रीय आपातकाल", correct: true },
            { text: " कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केवल राष्ट्रीय आपातकाल (अनुच्छेद 352) की घोषणा और इसे जारी रखने के प्रस्ताव को संसद के दोनों सदनों द्वारा विशेष बहुमत (कुल सदस्यता का बहुमत और उपस्थित और मतदान करने वालों का दो-तिहाई बहुमत) से पारित किया जाना चाहिए।"
    },
    {
        question: "प्रश्न 34. आपातकाल के दौरान केंद्र और राज्यों के बीच राजस्व के वितरण से संबंधित प्रावधानों को कौन संशोधित कर सकता है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "वित्त आयोग", correct: false },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय आपातकाल के दौरान राष्ट्रपति केंद्र और राज्यों के बीच करों के संवैधानिक वितरण को संशोधित कर सकता है।"
    },
    {
        question: "प्रश्न 35. किस आपातकाल की घोषणा का मौलिक अधिकारों पर सीधा प्रभाव नहीं पड़ता है?",
        answers: shuffle([
            { text: "राष्ट्रीय आपातकाल (बाहरी आक्रमण के कारण)", correct: false },
            { text: "राष्ट्रीय आपातकाल (सशस्त्र विद्रोह के कारण)", correct: false },
            { text: "राष्ट्रपति शासन", correct: false },
            { text: "वित्तीय आपातकाल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वित्तीय आपातकाल और राष्ट्रपति शासन के दौरान नागरिकों के मौलिक अधिकार सीधे तौर पर प्रभावित या निलंबित नहीं होते हैं, जैसा कि राष्ट्रीय आपातकाल में होता है।"
    },
    {
        question: "प्रश्न 36. अनुच्छेद 359 के तहत राष्ट्रपति को क्या शक्ति प्राप्त है?",
        answers: shuffle([
            { text: "किसी भी मौलिक अधिकार को निलंबित करने की", correct: false },
            { text: "मौलिक अधिकारों के प्रवर्तन के लिए न्यायालय जाने के अधिकार को निलंबित करने की", correct: true },
            { text: "लोकसभा को भंग करने की", correct: false },
            { text: "राज्यों को निर्देश जारी करने की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 359 राष्ट्रपति को यह अधिकार देता है कि वह (अनुच्छेद 20 और 21 को छोड़कर) मौलिक अधिकारों के प्रवर्तन के लिए किसी भी न्यायालय में जाने के अधिकार को निलंबित करने का आदेश जारी कर सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अधिकारों को नहीं, बल्कि उनके उपचार को निलंबित करता है।"
    },
    {
        question: "प्रश्न 37. राष्ट्रपति शासन लागू होने पर राज्य सरकार की शक्तियों का प्रयोग कौन करता है?",
        answers: shuffle([
            { text: "उच्च न्यायालय", correct: false },
            { text: "मुख्यमंत्री", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब राष्ट्रपति शासन लागू होता है, तो राज्यपाल राष्ट्रपति की ओर से राज्य की कार्यकारी शक्तियों का प्रयोग करता है।"
    },
    {
        question: "प्रश्न 38. संसद द्वारा अनुमोदित होने के बाद राष्ट्रीय आपातकाल कितने समय तक प्रभावी रहता है?",
        answers: shuffle([
            { text: "एक महीना", correct: false },
            { text: "दो महीने", correct: false },
            { text: "छह महीने", correct: true },
            { text: "एक वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बार संसद द्वारा अनुमोदित होने के बाद, राष्ट्रीय आपातकाल छह महीने तक जारी रहता है और इसे हर छह महीने में संसदीय अनुमोदन से अनिश्चित काल तक बढ़ाया जा सकता है।"
    },
    {
        question: "प्रश्न 39. 'आंतरिक अशांति' के आधार पर 1975 में आपातकाल की घोषणा संविधान के किस अनुच्छेद के तहत की गई थी?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: true },
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 358", correct: false },
            { text: "अनुच्छेद 360", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1975 में आपातकाल की घोषणा अनुच्छेद 352 के तहत की गई थी, जिसमें उस समय 'आंतरिक अशांति' एक आधार के रूप में शामिल था।"
    },
    {
        question: "प्रश्न 40. क्या राज्य विधानमंडल आपातकाल की घोषणा को रद्द करने के लिए प्रस्ताव पारित कर सकता है?",
        answers: shuffle([
            { text: "हाँ, साधारण बहुमत से", correct: false },
            { text: "हाँ, विशेष बहुमत से", correct: false },
            { text: "नहीं, यह शक्ति केवल संसद के पास है", correct: true },
            { text: "केवल राज्यपाल की सहमति से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नहीं, आपातकाल की घोषणा को रद्द करने या अस्वीकार करने का अधिकार केवल संसद (विशेषकर लोकसभा) को है, राज्य विधानमंडलों को नहीं।"
    },
    {
        question: "प्रश्न 41. अनुच्छेद 356 के दुरुपयोग को रोकने के लिए किस आयोग ने महत्वपूर्ण सिफारिशें दी थीं?",
        answers: shuffle([
            { text: "कोठारी आयोग", correct: false },
            { text: "मंडल आयोग", correct: false },
            { text: "सरकारीया आयोग", correct: true },
            { text: "नानावती आयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्र-राज्य संबंधों पर बने सरकारीया आयोग ने अनुच्छेद 356 के मनमाने प्रयोग को रोकने के लिए कई महत्वपूर्ण सिफारिशें की थीं, जैसे कि इसका प्रयोग अंतिम विकल्प के रूप में किया जाना चाहिए।"
    },
    {
        question: "प्रश्न 42. सशस्त्र विद्रोह के आधार पर राष्ट्रीय आपातकाल लगने पर कौन सा मौलिक अधिकार स्वतः निलंबित नहीं होता है?",
        answers: shuffle([
            { text: "अनुच्छेद 14", correct: false },
            { text: "अनुच्छेद 19", correct: true },
            { text: "अनुच्छेद 25", correct: false },
            { text: "अनुच्छेद 29", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 358 के अनुसार, अनुच्छेद 19 केवल तभी स्वतः निलंबित होता है जब आपातकाल युद्ध या बाहरी आक्रमण के आधार पर लगाया गया हो, सशस्त्र विद्रोह के आधार पर नहीं।"
    },
    {
        question: "प्रश्न 43. राष्ट्रपति शासन को वापस लेने की शक्ति किसमें निहित है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "लोकसभा", correct: false },
            { text: "राज्यपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति किसी भी समय एक बाद की उद्घोषणा द्वारा राष्ट्रपति शासन को वापस ले सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके लिए संसदीय अनुमोदन की आवश्यकता नहीं होती।"
    },
    {
        question: "प्रश्न 44. किस प्रकार के आपातकाल की घोषणा के लिए न्यायिक समीक्षा का दायरा सबसे सीमित है?",
        answers: shuffle([
            { text: "राष्ट्रपति शासन", correct: false },
            { text: "वित्तीय आपातकाल", correct: false },
            { text: "राष्ट्रीय आपातकाल", correct: true },
            { text: "सभी में समान है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि सभी न्यायिक समीक्षा के अधीन हैं, लेकिन युद्ध और बाहरी आक्रमण जैसे मामलों की संवेदनशीलता के कारण राष्ट्रीय आपातकाल में न्यायिक हस्तक्षेप का दायरा अपेक्षाकृत अधिक सीमित माना जाता है।"
    },
    {
        question: "प्रश्न 45. आपातकाल की घोषणा के समय यदि लोकसभा भंग हो, तो अनुमोदन कौन करेगा?",
        answers: shuffle([
            { text: "केवल राज्यसभा", correct: false },
            { text: "नई लोकसभा के गठन तक प्रतीक्षा की जाएगी", correct: false },
            { text: "राज्यसभा अनुमोदन करेगी और नई लोकसभा अपनी पहली बैठक के 30 दिनों के भीतर अनुमोदन करेगी", correct: true },
            { text: "घोषणा स्वतः समाप्त हो जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि घोषणा के समय लोकसभा भंग हो, तो राज्यसभा द्वारा इसका अनुमोदन किया जाना चाहिए और नवगठित लोकसभा को अपनी पहली बैठक से 30 दिनों के भीतर इसका अनुमोदन करना होगा।"
    },
    {
        question: "प्रश्न 46. राष्ट्रीय आपातकाल के दौरान, संसद द्वारा राज्य सूची पर बनाया गया कानून आपातकाल समाप्त होने के कितने समय बाद तक प्रभावी रहता है?",
        answers: shuffle([
            { text: "तीन महीने", correct: false },
            { text: "छह महीने", correct: true },
            { text: "एक वर्ष", correct: false },
            { text: "तुरंत निष्क्रिय हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपातकाल की समाप्ति के छह महीने बाद संसद द्वारा राज्य सूची पर बनाया गया कानून स्वतः ही निष्क्रिय हो जाता है।"
    },
    {
        question: "प्रश्न 47. कौन सा अनुच्छेद केंद्र सरकार को यह निर्देश देने का अधिकार देता है कि राज्य अपनी कार्यकारी शक्ति का प्रयोग कैसे करें?",
        answers: shuffle([
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 365", correct: false },
            { text: "अनुच्छेद 256", correct: false },
            { text: "अनुच्छेद 257", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 256 और 257 के तहत केंद्र सरकार राज्यों को क्रमशः संसदीय कानूनों का अनुपालन सुनिश्चित करने और अपनी कार्यकारी शक्ति का प्रयोग कैसे करें, इस पर निर्देश दे सकती है।"
    },
    {
        question: "प्रश्न 48. अनुच्छेद 365 क्या है?",
        answers: shuffle([
            { text: "वित्तीय आपातकाल का एक रूप", correct: false },
            { text: "मौलिक अधिकारों के निलंबन से संबंधित", correct: false },
            { text: "यदि राज्य केंद्र के निर्देशों का पालन करने में विफल रहता है, तो राष्ट्रपति शासन का आधार", correct: true },
            { text: "राज्यपाल की शक्तियों का वर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 365 के अनुसार, यदि कोई राज्य केंद्र द्वारा दिए गए निर्देशों का पालन करने में विफल रहता है, तो राष्ट्रपति के लिए यह मानना वैध होगा कि राज्य में संवैधानिक तंत्र विफल हो गया है और वह राष्ट्रपति शासन लगा सकता है।"
    },
    {
        question: "प्रश्न 49. आपातकाल के प्रावधानों का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "केंद्र को अधिक शक्तिशाली बनाना", correct: false },
            { text: "देश की संप्रभुता, एकता, अखंडता और सुरक्षा को बनाए रखना", correct: true },
            { text: "राज्यों की स्वायत्तता को समाप्त करना", correct: false },
            { text: "मौलिक अधिकारों को सीमित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपातकालीन प्रावधानों का मूल उद्देश्य असाधारण परिस्थितियों में देश की संप्रभुता, एकता, अखंडता, सुरक्षा और संविधान की रक्षा करना है।"
    },
    {
        question: "प्रश्न 50. राष्ट्रपति शासन के अनुमोदन के लिए किस प्रकार के बहुमत की आवश्यकता होती है?",
        answers: shuffle([
            { text: "साधारण बहुमत", correct: true },
            { text: "प्रभावी बहुमत", correct: false },
            { text: "विशेष बहुमत", correct: false },
            { text: "दो-तिहाई सदस्यों का बहुमत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति शासन और वित्तीय आपातकाल, दोनों के अनुमोदन के लिए संसद के दोनों सदनों में साधारण बहुमत (उपस्थित और मतदान करने वालों का बहुमत) की आवश्यकता होती है।"
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