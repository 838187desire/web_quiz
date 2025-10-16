const questions = [
    {
        topHeading: "तुगागम संधि पर आधारित 58 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'अनुच्छेद' का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "अनु + च्छेद", correct: false },
            { text: "अनु + छेद", correct: true },
            { text: "अनुच् + छेद", correct: false },
            { text: "अन + उच्छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुगागम संधि के नियमानुसार, यदि ह्रस्व स्वर (यहाँ 'उ') के बाद 'छ' वर्ण आता है, तो दोनों के बीच 'च्' का आगम हो जाता है।"
    },
    {
        question: "प्रश्न 2. 'वि + छेद' की सही संधि क्या होगी?",
        answers: shuffle([
            { text: "विछेद", correct: false },
            { text: "वीच्छेद", correct: false },
            { text: "विच्छेद", correct: true },
            { text: "विक्षेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ ह्रस्व स्वर 'इ' के बाद 'छ' आया है, इसलिए तुगागम संधि के अनुसार बीच में 'च्' जुड़ जाएगा।"
    },
    {
        question: "प्रश्न 3. 'स्वच्छंद' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "दीर्घ संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "व्यंजन संधि (तुगागम)", correct: true },
            { text: "यण संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'स्व + छंद' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ह्रस्व स्वर 'अ' के बाद 'छ' आने पर 'च्' का आगम हुआ है, जो तुगागम संधि का नियम है।"
    },
    {
        question: "प्रश्न 4. 'परिच्छेद' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "परि + च्छेद", correct: false },
            { text: "परी + छेद", correct: false },
            { text: "परिच् + छेद", correct: false },
            { text: "परि + छेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व स्वर 'इ' और 'छ' के मध्य 'च्' का आगम हुआ है, अतः सही विच्छेद 'परि + छेद' है।"
    },
    {
        question: "प्रश्न 5. 'आच्छादन' शब्द का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "आ + च्छादन", correct: false },
            { text: "आच् + छादन", correct: false },
            { text: "आ + छादन", correct: true },
            { text: "आछ + ादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ स्वर ('आ') के बाद 'छ' आने पर 'च्' का आगम विकल्प से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'आच्छादन' इसी नियम का उदाहरण है।"
    },
    {
        question: "प्रश्न 6. किस शब्द में तुगागम संधि हुई है?",
        answers: shuffle([
            { text: "सज्जन", correct: false },
            { text: "उच्चारण", correct: false },
            { text: "वृक्षच्छाया", correct: true },
            { text: "उन्नति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'वृक्ष + छाया' है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अ' स्वर के बाद 'छ' आने से 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 7. 'शिव + छाया' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "शिवछाया", correct: false },
            { text: "शिवच्छाया", correct: true },
            { text: "शिवाछाया", correct: false },
            { text: "शिवोछाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिव' के अंत में ह्रस्व 'अ' है और उसके बाद 'छाया' का 'छ' है, इसलिए नियमानुसार 'च्' का आगम होगा।"
    },
    {
        question: "प्रश्न 8. 'पदच्छेद' का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "पद + च्छेद", correct: false },
            { text: "पदा + छेद", correct: false },
            { text: "पद् + छेद", correct: false },
            { text: "पद + छेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पद' के 'अ' और 'छेद' के 'छ' के बीच 'च्' का आगम हुआ है, यह तुगागम संधि है।"
    },
    {
        question: "प्रश्न 9. तुगागम संधि में ह्रस्व स्वर के बाद 'छ' आने पर किसका आगम होता है?",
        answers: shuffle([
            { text: "त्", correct: false },
            { text: "श्", correct: false },
            { text: "च्", correct: true },
            { text: "क्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुगागम संधि का यह मुख्य नियम है कि ह्रस्व स्वर और 'छ' के बीच 'च्' (चकार) का आगम होता है।"
    },
    {
        question: "प्रश्न 10. 'एकच्छत्र' का संधि-विच्छेद करें।",
        answers: shuffle([
            { text: "एक + छत्र", correct: true },
            { text: "एकच् + छत्र", correct: false },
            { text: "एक + च्छत्र", correct: false },
            { text: "एका + छत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एक' के 'अ' स्वर के बाद 'छ' आने पर 'च्' का आगम हुआ है, जिससे 'एकच्छत्र' शब्द बना।"
    },
    {
        question: "प्रश्न 11. 'मातृच्छाया' का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "मातृ + छाया", correct: true },
            { text: "मातृ + च्छाया", correct: false },
            { text: "मात् + रिक्षाया", correct: false },
            { text: "मात्रा + छाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व स्वर 'ऋ' के बाद 'छ' आने पर 'च्' का आगम होता है।"
    },
    {
        question: "प्रश्न 12. निम्नलिखित में से कौन-सा शब्द तुगागम संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "अनुच्छेद", correct: false },
            { text: "स्वच्छ", correct: true },
            { text: "विच्छेद", correct: false },
            { text: "परिच्छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वच्छ' का विच्छेद 'सु + अच्छ' होता है, जिसमें यण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी तुगागम संधि के उदाहरण हैं।"
    },
    {
        question: "प्रश्न 13. 'तरुच्छाया' शब्द का निर्माण किस संधि प्रक्रिया से हुआ है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "तुगागम संधि", correct: true },
            { text: "विसर्ग संधि", correct: false },
            { text: "दीर्घ संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'तरु + छाया' है।<br><br><i class='fa-solid fa-angles-right icon'></i> ह्रस्व 'उ' के बाद 'छ' आने से 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 14. 'शालाच्छादन' में संधि-विच्छेद करने पर 'च्' का आगम क्यों हुआ है?",
        answers: shuffle([
            { text: "ह्रस्व स्वर के बाद 'छ' आने पर", correct: false },
            { text: "व्यंजन के बाद 'छ' आने पर", correct: false },
            { text: "दीर्घ स्वर के बाद 'छ' आने पर (वैकल्पिक)", correct: true },
            { text: "विसर्ग के बाद 'छ' आने पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शाला' (दीर्घ स्वर 'आ') के बाद 'छ' आने पर 'च्' का आगम विकल्प से होता है।"
    },
    {
        question: "प्रश्न 15. 'प्रति + छवि' का सही संधि रूप है-",
        answers: shuffle([
            { text: "प्रतिछवि", correct: false },
            { text: "प्रतीच्छवि", correct: false },
            { text: "प्रतिच्छवि", correct: true },
            { text: "प्रतीछवि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व 'इ' और 'छ' के बीच 'च्' का आगम तुगागम संधि के अनुसार हुआ है।"
    },
    {
        question: "प्रश्न 16. 'मुखच्छवि' का विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "मुख + छवि", correct: true },
            { text: "मुखच् + छवि", correct: false },
            { text: "मुख + च्छवि", correct: false },
            { text: "मुखो + छवि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुख' के 'अ' स्वर और 'छवि' के 'छ' के बीच 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 17. किस समूह के सभी शब्द तुगागम संधि के हैं?",
        answers: shuffle([
            { text: "अनुच्छेद, परोपकार, स्वच्छंद", correct: false },
            { text: "विच्छेद, पदच्छेद, शिवच्छाया", correct: true },
            { text: "आच्छादन, दिग्गज, पावक", correct: false },
            { text: "तरुच्छाया, यद्यपि, गणेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस समूह के तीनों शब्दों का निर्माण ह्रस्व स्वर के बाद 'छ' आने पर 'च्' के आगम से हुआ है।"
    },
    {
        question: "प्रश्न 18. 'छत्रच्छाया' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "छत्र + च्छाया", correct: false },
            { text: "छत्र + छाया", correct: true },
            { text: "छत्रच् + छाया", correct: false },
            { text: "छत्रो + छाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छत्र' के 'अ' के बाद 'छाया' का 'छ' आने पर 'च्' का आगम होता है।"
    },
    {
        question: "प्रश्न 19. तुगागम संधि किस संधि का एक भेद है?",
        answers: shuffle([
            { text: "स्वर संधि", correct: false },
            { text: "व्यंजन संधि", correct: true },
            { text: "विसर्ग संधि", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि इसमें 'च्' व्यंजन का आगम होता है, इसलिए यह व्यंजन संधि के अंतर्गत आती है।"
    },
    {
        question: "प्रश्न 20. 'अंगच्छेद' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "अंग + छेद", correct: true },
            { text: "अंगच् + छेद", correct: false },
            { text: "अंग + च्छेद", correct: false },
            { text: "अं + गच्छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंग' के 'अ' और 'छेद' के 'छ' के बीच तुगागम संधि के नियम से 'च्' आया है।"
    },
    {
        question: "प्रश्न 21. 'संधि-विच्छेद' शब्द में 'विच्छेद' का विच्छेद क्या है?",
        answers: shuffle([
            { text: "वि + च्छेद", correct: false },
            { text: "विच् + छेद", correct: false },
            { text: "वि + छेद", correct: true },
            { text: "वी + छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व 'इ' के बाद 'छ' आने पर 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 22. 'यदि किसी ह्रस्व स्वर के पश्चात् 'छ' वर्ण आए तो 'छ' से पहले 'च्' वर्ण जोड़ दिया जाता है।' यह नियम किस संधि का है?",
        answers: shuffle([
            { text: "श्चुत्व संधि", correct: false },
            { text: "ष्टुत्व संधि", correct: false },
            { text: "तुगागम संधि", correct: true },
            { text: "जश्त्व संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तुगागम (चागम) संधि का स्पष्ट नियम है।"
    },
    {
        question: "प्रश्न 23. 'स्व + छाया' का सही संधि शब्द क्या होगा?",
        answers: shuffle([
            { text: "स्वछाया", correct: false },
            { text: "स्वच्छाया", correct: true },
            { text: "सोछाया", correct: false },
            { text: "स्वाछाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्व' के 'अ' के बाद 'छाया' का 'छ' आने पर 'च्' का आगम होगा।"
    },
    {
        question: "प्रश्न 24. इनमें से किस शब्द का संधि-विच्छेद गलत है?",
        answers: shuffle([
            { text: "अनुच्छेद = अनु + छेद", correct: false },
            { text: "स्वच्छंद = स्व + छंद", correct: false },
            { text: "परिच्छेद = परि + छेद", correct: false },
            { text: "विच्छेद = विच् + छेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विच्छेद' का सही विच्छेद 'वि + छेद' होता है।"
    },
    {
        question: "प्रश्न 25. 'लताच्छाया' का संधि-विच्छेद होगा-",
        answers: shuffle([
            { text: "लता + छाया", correct: true },
            { text: "लता + च्छाया", correct: false },
            { text: "लत् + आच्छाया", correct: false },
            { text: "लताच् + छाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ स्वर 'आ' के बाद 'छ' आने पर 'च्' का आगम (वैकल्पिक) हुआ है।"
    },
    {
        question: "प्रश्न 26. 'वटच्छाया' का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "वट + छाया", correct: true },
            { text: "वटच् + छाया", correct: false },
            { text: "वट + च्छाया", correct: false },
            { text: "वटो + छाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वट' के 'अ' (ह्रस्व स्वर) के बाद 'छ' आने पर 'च्' का आगम अनिवार्य रूप से होता है।"
    },
    {
        question: "प्रश्न 27. 'नदीच्छाया' शब्द में 'च्' का आगम क्यों हुआ है?",
        answers: shuffle([
            { text: "अनिवार्य नियम के तहत", correct: false },
            { text: "वैकल्पिक नियम के तहत", correct: true },
            { text: "यह अपवाद है", correct: false },
            { text: "यह गलत शब्द है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नदी' में दीर्घ 'ई' है, जिसके बाद 'छ' आने पर 'च्' का आगम विकल्प से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 'नदीछाया' भी सही है।"
    },
    {
        question: "प्रश्न 28. 'कपिच्छवि' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "कपि + च्छवि", correct: false },
            { text: "कपि + छवि", correct: true },
            { text: "कपी + छवि", correct: false },
            { text: "कपिच् + छवि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व 'इ' के बाद 'छ' आने के कारण 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 29. 'तुगागम' का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "'त्' का आना", correct: false },
            { text: "'च्' का जाना", correct: false },
            { text: "'तुक्' का आगम", correct: true },
            { text: "वर्णों का लोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्याकरण में इसे 'तुक्' का आगम कहते हैं, जिसमें से 'त्' शेष रहता है और फिर वह 'च्' में बदल जाता है।"
    },
    {
        question: "प्रश्न 30. 'आदि + छादन' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "आदिच्छादन", correct: true },
            { text: "आदिछादन", correct: false },
            { text: "आदछादन", correct: false },
            { text: "आदीछादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व 'इ' के बाद 'छ' आने पर 'च्' का आगम अनिवार्य है।"
    },
    {
        question: "प्रश्न 31. 'शिरच्छेद' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "शिरः + छेद", correct: false },
            { text: "शिर + च्छेद", correct: false },
            { text: "शिरच् + छेद", correct: false },
            { text: "शिर + छेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिर' के 'अ' के बाद 'छ' आने पर 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 32. 'माला + छादन' की संधि करने पर क्या रूप बनेगा?",
        answers: shuffle([
            { text: "अ) मालाछादन", correct: false },
            { text: "ब) मालाच्छादन", correct: false },
            { text: "'अ' और 'ब' दोनों सही हैं", correct: true },
            { text: "मालेच्छादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ स्वर के बाद 'छ' आने पर 'च्' का आगम वैकल्पिक होता है। (मालाछादन और मालाच्छादन दोनों सही हैं)।"
    },
    {
        question: "प्रश्न 33. 'अग्निच्छटा' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "अग्नि + छटा", correct: true },
            { text: "अग्नी + छटा", correct: false },
            { text: "अग्निच् + छटा", correct: false },
            { text: "अग्नि + च्छटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्नि' के ह्रस्व 'इ' के बाद 'छ' आने से 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 34. किस विकल्प में तुगागम संधि का सही प्रयोग नहीं हुआ है?",
        answers: shuffle([
            { text: "तरु + छाया = तरुच्छाया", correct: false },
            { text: "पद + छेद = पदच्छेद", correct: false },
            { text: "सु + छन्द = सुच्छन्द", correct: true },
            { text: "वि + छेद = विच्छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सु + छन्द' की सही संधि 'सुच्छंद' नहीं, बल्कि 'स्वच्छंद' (स्व + छंद) होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सु+छंद' जैसा विच्छेद अशुद्ध है।"
    },
    {
        question: "प्रश्न 35. 'प्रतिच्छेद' का विच्छेद होगा-",
        answers: shuffle([
            { text: "प्रति + छेद", correct: true },
            { text: "प्रती + छेद", correct: false },
            { text: "प्रतिच् + छेद", correct: false },
            { text: "प्रति + च्छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व स्वर 'इ' के बाद 'छ' आने पर 'च्' का आगम होता है।"
    },
    {
        question: "प्रश्न 36. 'एक + छत्र' की संधि है-",
        answers: shuffle([
            { text: "एकछत्र", correct: false },
            { text: "एकोछत्र", correct: false },
            { text: "एकच्छत्र", correct: true },
            { text: "एकेछत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क' के 'अ' के बाद 'छ' आने पर 'च्' का आगम होता है।"
    },
    {
        question: "प्रश्न 37. 'रमाच्छाया' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "रमा + छाया", correct: true },
            { text: "रम + आच्छाया", correct: false },
            { text: "रमाच् + छाया", correct: false },
            { text: "रमा + च्छाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ स्वर 'आ' के बाद 'छ' आने पर 'च्' का आगम (वैकल्पिक) हुआ है।"
    },
    {
        question: "प्रश्न 38. 'शवच्छेदन' का विच्छेद है-",
        answers: shuffle([
            { text: "शव + च्छेदन", correct: false },
            { text: "शवच् + छेदन", correct: false },
            { text: "शव + छेदन", correct: true },
            { text: "शवो + छेदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व स्वर 'अ' के बाद 'छ' आने से 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 39. 'शिशु + छवि' की संधि होगी-",
        answers: shuffle([
            { text: "शिशुछवि", correct: false },
            { text: "शिशुच्छावि", correct: false },
            { text: "शिशुच्छवि", correct: true },
            { text: "शिशोछवि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व 'उ' और 'छ' के मध्य 'च्' का आगम होगा।"
    },
    {
        question: "प्रश्न 40. 'उमाच्छाया' में 'च्' का आगम क्यों हुआ?",
        answers: shuffle([
            { text: "वैकल्पिक नियम से", correct: true },
            { text: "अनिवार्य नियम से", correct: false },
            { text: "यह अशुद्ध है", correct: false },
            { text: "विसर्ग के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उमा' में दीर्घ 'आ' के बाद 'छ' आने पर तुगागम वैकल्पिक होता है।"
    },
    {
        question: "प्रश्न 41. 'उत् + शृंखल' की संधि क्या होती है?",
        answers: shuffle([
            { text: "उच्छृंखल", correct: true },
            { text: "उत्शृंखल", correct: false },
            { text: "उशृंखल", correct: false },
            { text: "उदशृंखल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह 'त्' के बाद 'श' आने का नियम है, जो तुगागम से भिन्न है पर अक्सर साथ पढ़ाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें 'त्' का 'च्' और 'श' का 'छ' हो जाता है।"
    },
    {
        question: "प्रश्न 42. 'ग्रंथिच्छेद' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "ग्रंथिच् + छेद", correct: false },
            { text: "ग्रंथि + छेद", correct: true },
            { text: "ग्रंथी + छेद", correct: false },
            { text: "ग्रंथि + च्छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व 'इ' और 'छ' के बीच 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 43. 'द्वारच्छेद' का विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "द्वार + छेद", correct: true },
            { text: "द्वारच् + छेद", correct: false },
            { text: "द्वार + च्छेद", correct: false },
            { text: "द्वारा + छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्वार' के 'अ' के बाद 'छ' आने से 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 44. 'हिमच्छादित' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "हिम + छादित", correct: true },
            { text: "हिमा + छादित", correct: false },
            { text: "हिमच् + छादित", correct: false },
            { text: "हिम + आच्छादित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिम' के 'अ' स्वर के बाद 'छ' आने से 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 45. 'रचना + छाया' की संधि हो सकती है-",
        answers: shuffle([
            { text: "केवल रचनाच्छाया", correct: false },
            { text: "केवल रचनाछाया", correct: false },
            { text: "रचनाच्छाया और रचनाछाया दोनों", correct: true },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ स्वर 'आ' के बाद 'छ' आने पर 'च्' का आगम वैकल्पिक होता है।"
    },
    {
        question: "प्रश्न 46. 'धनुष + टंकार' में कौन सी संधि है?",
        answers: shuffle([
            { text: "तुगागम संधि", correct: false },
            { text: "ष्टुत्व संधि", correct: false },
            { text: "श्चुत्व संधि", correct: false },
            { text: "विसर्ग संधि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'धनुः + टंकार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तुगागम संधि का उदाहरण नहीं है।"
    },
    {
        question: "प्रश्न 47. 'गृहच्छेद' का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "गृह + छेद", correct: true },
            { text: "गृहच् + छेद", correct: false },
            { text: "गृह + च्छेद", correct: false },
            { text: "गृही + छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व स्वर और 'छ' के मध्य 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 48. 'सीताच्छाया' शब्द का विच्छेद है-",
        answers: shuffle([
            { text: "सीत + आच्छाया", correct: false },
            { text: "सीता + च्छाया", correct: false },
            { text: "सीता + छाया", correct: true },
            { text: "सीताच् + छाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सीता' के दीर्घ 'आ' के बाद 'छ' आने पर 'च्' का आगम वैकल्पिक रूप से हुआ है।"
    },
    {
        question: "प्रश्न 49. 'शब्दच्छेद' का विच्छेद होगा-",
        answers: shuffle([
            { text: "शब्द + छेद", correct: true },
            { text: "शब्दच् + छेद", correct: false },
            { text: "शब्द + च्छेद", correct: false },
            { text: "शब्दी + छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शब्द' के ह्रस्व 'अ' के बाद 'छ' आने पर 'च्' का आगम हुआ है।"
    },
    {
        question: "प्रश्न 50. 'वि + छिन्न' की सही संधि है-",
        answers: shuffle([
            { text: "विछिन्न", correct: false },
            { text: "वीछिन्न", correct: false },
            { text: "विच्छिन्न", correct: true },
            { text: "विछिन्न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व 'इ' के बाद 'छ' आने पर 'च्' का आगम हुआ है।"
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