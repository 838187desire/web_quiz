const questions = [
    {
        topHeading: "दीर्घसंधि पर आधारित 55 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'विद्यालय' शब्द का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "विद्य + आलय", correct: false },
            { text: "विद्या + आलय", correct: true },
            { text: "विद्या + लय", correct: false },
            { text: "विद्य + अलय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'विद्या' के अंत का 'आ' और 'आलय' के आरंभ का 'आ' मिलकर दीर्घ स्वर 'आ' बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + आ = आ।"
    },
    {
        question: "प्रश्न 2. 'कवींद्र' का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "कव + इंद्र", correct: false },
            { text: "कवि + इंद्र", correct: true },
            { text: "कवी + इंद्र", correct: false },
            { text: "कवि + ईंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'कवि' की 'इ' और 'इंद्र' की 'इ' मिलकर दीर्घ स्वर 'ई' बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: इ + इ = ई।"
    },
    {
        question: "प्रश्न 3. 'भानूदय' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "यण संधि", correct: false },
            { text: "दीर्घ संधि", correct: true },
            { text: "वृद्धि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'भानु + उदय' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'उ' और 'उ' मिलकर दीर्घ स्वर 'ऊ' बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: उ + उ = ऊ।"
    },
    {
        question: "प्रश्न 4. जब दो सवर्ण ह्रस्व या दीर्घ स्वर मिलकर दीर्घ हो जाते हैं, तो कौन सी संधि होती है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: true },
            { text: "वृद्धि संधि", correct: false },
            { text: "यण संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दीर्घ संधि की परिभाषा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें समान स्वर (अ/आ, इ/ई, उ/ऊ) मिलकर अपने दीर्घ रूप में बदल जाते हैं।"
    },
    {
        question: "प्रश्न 5. 'मुनीश' शब्द का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "मुनि + ईश", correct: true },
            { text: "मुनी + श", correct: false },
            { text: "मुनि + इश", correct: false },
            { text: "मुन + ईश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'मुनि' की 'इ' और 'ईश' की 'ई' मिलकर दीर्घ स्वर 'ई' बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: इ + ई = ई।"
    },
    {
        question: "प्रश्न 6. 'परम + अर्थ' की सही संधि क्या होगी?",
        answers: shuffle([
            { text: "परमेर्थ", correct: false },
            { text: "परोर्थ", correct: false },
            { text: "परमार्थ", correct: true },
            { text: "परमाअर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'परम' के 'अ' और 'अर्थ' के 'अ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + अ = आ।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से किस शब्द में दीर्घ संधि है?",
        answers: shuffle([
            { text: "सदैव", correct: false },
            { text: "स्वागत", correct: false },
            { text: "गिरीश", correct: true },
            { text: "यद्यपि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गिरीश' का संधि-विच्छेद 'गिरि + ईश' (इ + ई = ई) है, जो दीर्घ संधि का उदाहरण है।"
    },
    {
        question: "प्रश्न 8. 'देवालय' का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "देव + आलय", correct: true },
            { text: "देवा + लय", correct: false },
            { text: "देव + अलय", correct: false },
            { text: "दे + वालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'देव' के 'अ' और 'आलय' के 'आ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + आ = आ।"
    },
    {
        question: "प्रश्न 9. 'वधूत्सव' शब्द का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "वधू + उत्सव", correct: true },
            { text: "वधु + उत्सव", correct: false },
            { text: "वध + उत्सव", correct: false },
            { text: "वधूत + सव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'वधू' के 'ऊ' और 'उत्सव' के 'उ' का मेल होने पर दीर्घ स्वर 'ऊ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: ऊ + उ = ऊ।"
    },
    {
        question: "प्रश्न 10. 'अतीव' शब्द में किन वर्णों की संधि हुई है?",
        answers: shuffle([
            { text: "अ + इ", correct: false },
            { text: "आ + इ", correct: false },
            { text: "इ + इ", correct: true },
            { text: "अ + ई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'अति + इव' है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 'इ' और 'इ' वर्णों की संधि हुई है।"
    },
    {
        question: "प्रश्न 11. दीर्घ संधि किस संधि का एक भेद है?",
        answers: shuffle([
            { text: "व्यंजन संधि", correct: false },
            { text: "विसर्ग संधि", correct: false },
            { text: "स्वर संधि", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि स्वर संधि के पाँच भेदों (दीर्घ, गुण, वृद्धि, यण, अयादि) में से एक है।"
    },
    {
        question: "प्रश्न 12. 'गीतांजलि' शब्द का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "गीता + अंजलि", correct: false },
            { text: "गीत + अंजलि", correct: true },
            { text: "गीता + जलि", correct: false },
            { text: "गीत + जलि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'गीत' के 'अ' और 'अंजलि' के 'अ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + अ = आ।"
    },
    {
        question: "प्रश्न 13. 'धर्मार्थ' का संधि-विच्छेद करें।",
        answers: shuffle([
            { text: "धर्मा + अर्थ", correct: false },
            { text: "धर्म + अर्थ", correct: true },
            { text: "धरम + आर्थ", correct: false },
            { text: "धर + मार्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'धर्म' के 'अ' और 'अर्थ' के 'अ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + अ = आ।"
    },
    {
        question: "प्रश्न 14. निम्नलिखित में से कौन सा शब्द दीर्घ संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "शिवालय", correct: false },
            { text: "रजनीश", correct: false },
            { text: "महोत्सव", correct: true },
            { text: "विद्यार्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महोत्सव' का संधि-विच्छेद 'महा + उत्सव' (आ + उ = ओ) है, जो गुण संधि का उदाहरण है।"
    },
    {
        question: "प्रश्न 15. 'पृथ्वीश' शब्द का संधि-विच्छेद करें।",
        answers: shuffle([
            { text: "पृथ्वी + ईश", correct: true },
            { text: "पृथ्वि + ईश", correct: false },
            { text: "पृथ + वीश", correct: false },
            { text: "पृथ्वी + इश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'पृथ्वी' की 'ई' और 'ईश' की 'ई' का मेल होने पर दीर्घ स्वर 'ई' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: ई + ई = ई।"
    },
    {
        question: "प्रश्न 16. 'दैत्यारि' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "यण संधि", correct: false },
            { text: "वृद्धि संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'दैत्य + अरि' (अ + अ = आ) होता है, जो दीर्घ संधि का नियम है।"
    },
    {
        question: "प्रश्न 17. 'नारीश्वर' का सही संधि-विच्छेद कौन सा है?",
        answers: shuffle([
            { text: "नारि + ईश्वर", correct: false },
            { text: "नारी + ईश्वर", correct: true },
            { text: "नर + ईश्वर", correct: false },
            { text: "नारी + श्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'नारी' की 'ई' और 'ईश्वर' की 'ई' का मेल होने पर दीर्घ स्वर 'ई' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: ई + ई = ई।"
    },
    {
        question: "प्रश्न 18. 'आ + अ' के मेल से कौन सा वर्ण बनेगा?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "आ", correct: true },
            { text: "आव", correct: false },
            { text: "अव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दीर्घ संधि का नियम है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण: विद्या + अर्थी = विद्यार्थी।"
    },
    {
        question: "प्रश्न 19. 'पराधीन' शब्द का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "परा + अधीन", correct: false },
            { text: "पर + अधीन", correct: true },
            { text: "पर + आधीन", correct: false },
            { text: "परा + धीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'पर' के 'अ' और 'अधीन' के 'अ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + अ = आ।"
    },
    {
        question: "प्रश्न 20. 'रत्नाकर' में कौन सा संधि नियम लागू होता है?",
        answers: shuffle([
            { text: "अ + आ = आ", correct: true },
            { text: "आ + अ = आ", correct: false },
            { text: "अ + अ = आ", correct: false },
            { text: "आ + आ = आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'रत्न + आकर' है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 'अ' और 'आ' के मेल का नियम लागू होता है।"
    },
    {
        question: "प्रश्न 21. 'कपीश' शब्द का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "कप + ईश", correct: false },
            { text: "कपि + ईश", correct: true },
            { text: "कपि + इश", correct: false },
            { text: "कपी + श", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'कपि' की 'इ' और 'ईश' की 'ई' का मेल होने पर दीर्घ स्वर 'ई' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: इ + ई = ई।"
    },
    {
        question: "प्रश्न 22. 'महा + आशय' की सही संधि क्या होगी?",
        answers: shuffle([
            { text: "महाशय", correct: true },
            { text: "महशय", correct: false },
            { text: "महाआशय", correct: false },
            { text: "महोशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'महा' के 'आ' और 'आशय' के 'आ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + आ = आ।"
    },
    {
        question: "प्रश्न 23. दीर्घ संधि की पहचान क्या है?",
        answers: shuffle([
            { text: "शब्द के बीच में 'ए', 'ओ', 'अर' की ध्वनि", correct: false },
            { text: "शब्द के बीच में 'ऐ', 'औ' की मात्रा", correct: false },
            { text: "शब्द के बीच में 'आ', 'ई', 'ऊ' की मात्रा", correct: true },
            { text: "शब्द के बीच में 'य', 'व', 'र' से पहले आधा वर्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि से बने शब्दों के बीच में प्रायः 'आ' ( ा ), 'ई' ( ी ) और 'ऊ' ( ू ) की मात्राएँ आती हैं।"
    },
    {
        question: "प्रश्न 24. 'सत्याग्रह' शब्द का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "सत्य + आग्रह", correct: true },
            { text: "सत्या + ग्रह", correct: false },
            { text: "सत् + आग्रह", correct: false },
            { text: "सत्य + अग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'सत्य' के 'अ' और 'आग्रह' के 'आ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + आ = आ।"
    },
    {
        question: "प्रश्न 25. 'स्वार्थी' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "स्व + अर्थी", correct: true },
            { text: "स्वा + अर्थी", correct: false },
            { text: "सु + अर्थी", correct: false },
            { text: "स्व + आर्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'स्व' के 'अ' और 'अर्थी' के 'अ' का मेल होकर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + अ = आ।"
    },
    {
        question: "प्रश्न 26. 'रेखांश' शब्द का सही संधि-विच्छेद चुनें।",
        answers: shuffle([
            { text: "रेख + अंश", correct: false },
            { text: "रेखा + अंश", correct: true },
            { text: "रेखा + अंशः", correct: false },
            { text: "रेख + अंशः", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'रेखा' के 'आ' और 'अंश' के 'अ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + अ = आ।"
    },
    {
        question: "प्रश्न 27. 'सिंधूर्मि' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "सिंधु + ऊर्मि", correct: true },
            { text: "सिंध + ऊर्मि", correct: false },
            { text: "सिन्धु + उर्मि", correct: false },
            { text: "सिंधु + र्मि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'सिंधु' के 'उ' और 'ऊर्मि' के 'ऊ' का मेल होने पर दीर्घ स्वर 'ऊ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: उ + ऊ = ऊ।"
    },
    {
        question: "प्रश्न 28. 'श्रद्धांजलि' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "श्रद्धा + अंजलि", correct: true },
            { text: "श्रद्ध + अंजलि", correct: false },
            { text: "श्रद्धा + जलि", correct: false },
            { text: "श्रद्धాం + जलि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'श्रद्धा' के 'आ' और 'अंजलि' के 'अ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + अ = आ।"
    },
    {
        question: "प्रश्न 29. 'परीक्षार्थी' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "परी + क्षार्थी", correct: false },
            { text: "परीक्षा + अर्थी", correct: true },
            { text: "पर + इच्छार्थी", correct: false },
            { text: "परिक्षा + अर्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'परीक्षा' के 'आ' और 'अर्थी' के 'अ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + अ = आ।"
    },
    {
        question: "प्रश्न 30. 'रजनीश' शब्द में किन वर्णों की संधि हुई है?",
        answers: shuffle([
            { text: "इ + ई", correct: false },
            { text: "ई + ई", correct: true },
            { text: "इ + इ", correct: false },
            { text: "ई + इ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'रजनी + ईश' है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 'ई' और 'ई' वर्णों की संधि हुई है।"
    },
    {
        question: "प्रश्न 31. 'वार्तालाप' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "वार्त + आलाप", correct: false },
            { text: "वार्ता + आलाप", correct: true },
            { text: "वार्ता + लाप", correct: false },
            { text: "वार्ताल + आप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'वार्ता' के 'आ' और 'आलाप' के 'आ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + आ = आ।"
    },
    {
        question: "प्रश्न 32. 'अभि + इष्ट' की सही संधि है-",
        answers: shuffle([
            { text: "अभीष्ट", correct: true },
            { text: "अभेष्ट", correct: false },
            { text: "अभीइष्ट", correct: false },
            { text: "अभ्यीष्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'अभि' की 'इ' और 'इष्ट' की 'इ' का मेल होने पर दीर्घ स्वर 'ई' बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: इ + इ = ई।"
    },
    {
        question: "प्रश्न 33. 'उ + ऊ' के मेल से कौन सा वर्ण बनता है?",
        answers: shuffle([
            { text: "उ", correct: false },
            { text: "ऊ", correct: true },
            { text: "ओ", correct: false },
            { text: "औ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दीर्घ संधि का नियम है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण: लघु + ऊर्मि = लघूर्मि।"
    },
    {
        question: "प्रश्न 34. निम्नलिखित में से दीर्घ संधि वाला शब्द चुनें।",
        answers: shuffle([
            { text: "परोपकार", correct: false },
            { text: "देहांत", correct: true },
            { text: "महर्षि", correct: false },
            { text: "एकैक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देहांत' (देह + अंत) में 'अ + अ = आ' नियम से दीर्घ संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'परोपकार' और 'महर्षि' में गुण संधि तथा 'एकैक' में वृद्धि संधि है।"
    },
    {
        question: "प्रश्न 35. 'चरणामृत' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "चरण + अमृत", correct: true },
            { text: "चरणा + मृत", correct: false },
            { text: "चरण + आमृत", correct: false },
            { text: "चर + नामृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'चरण' के 'अ' और 'अमृत' के 'अ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + अ = आ।"
    },
    {
        question: "प्रश्न 36. 'सतीष' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "सत + ईश", correct: false },
            { text: "सति + ईश", correct: false },
            { text: "सती + ईश", correct: true },
            { text: "सती + इश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'सती' की 'ई' और 'ईश' की 'ई' का मेल होने पर दीर्घ स्वर 'ई' बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: ई + ई = ई।"
    },
    {
        question: "प्रश्न 37. 'भावार्थ' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "यण संधि", correct: false },
            { text: "दीर्घ संधि", correct: true },
            { text: "अयादि संधि", correct: false },
            { text: "गुण संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संधि-विच्छेद 'भाव + अर्थ' (अ + अ = आ) है, जो दीर्घ संधि का उदाहरण है।"
    },
    {
        question: "प्रश्न 38. 'भूष्मा' का सही संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "भू + ऊष्मा", correct: true },
            { text: "भू + उष्मा", correct: false },
            { text: "भूष + मा", correct: false },
            { text: "भूः + ऊष्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'भू' के 'ऊ' और 'ऊष्मा' के 'ऊ' का मेल होने पर दीर्घ स्वर 'ऊ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: ऊ + ऊ = ऊ।"
    },
    {
        question: "प्रश्न 39. 'हिमालय' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "हिम + आलय", correct: true },
            { text: "हिमा + लय", correct: false },
            { text: "हिम + अलय", correct: false },
            { text: "हि + मालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'हिम' के 'अ' और 'आलय' के 'आ' का मेल होने पर दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + आ = आ।"
    },
    {
        question: "प्रश्न 40. 'सचदेवालय' शब्द में संधि है-",
        answers: shuffle([
            { text: "वृद्धि संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: true },
            { text: "यण संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'सचदेव + आलय' (अ + आ = आ) होता है, जो दीर्घ संधि का नियम है।"
    },
    {
        question: "प्रश्न 41. 'शिक्षार्थी' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "शिक्ष + अर्थी", correct: false },
            { text: "शिक्षा + अर्थी", correct: true },
            { text: "शिक्षा + आर्थी", correct: false },
            { text: "शिक्ष + आर्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'शिक्षा' के 'आ' और 'अर्थी' के 'अ' के मेल से दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: आ + अ = आ।"
    },
    {
        question: "प्रश्न 42. 'इ + ई = ई' नियम किस संधि को इंगित करता है?",
        answers: shuffle([
            { text: "दीर्घ संधि", correct: true },
            { text: "गुण संधि", correct: false },
            { text: "वृद्धि संधि", correct: false },
            { text: "अयादि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दीर्घ संधि का एक नियम है, जैसे - गिरि + ईश = गिरीश।"
    },
    {
        question: "प्रश्न 43. 'वीरांगना' का संधि-विच्छेद है-",
        answers: shuffle([
            { text: "वीर + अंगना", correct: true },
            { text: "वीरा + अंगना", correct: false },
            { text: "वी + रांगना", correct: false },
            { text: "वीर + अंगणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'वीर' के 'अ' और 'अंगना' के 'अ' के मेल से दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + अ = आ।"
    },
    {
        question: "प्रश्न 44. 'यतींद्र' का संधि-विच्छेद क्या होगा?",
        answers: shuffle([
            { text: "यति + इंद्र", correct: true },
            { text: "यती + इंद्र", correct: false },
            { text: "यत + इंद्र", correct: false },
            { text: "यति + ईंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'यति' की 'इ' और 'इंद्र' की 'इ' के मेल से दीर्घ स्वर 'ई' बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: इ + इ = ई।"
    },
    {
        question: "प्रश्न 45. किस समूह के सभी शब्द दीर्घ संधि युक्त हैं?",
        answers: shuffle([
            { text: "हिमालय, देवेंद्र, पवन", correct: false },
            { text: "विद्यार्थी, कपीश, भानूदय", correct: true },
            { text: "नयन, तथैव, स्वागत", correct: false },
            { text: "महौज, इत्यादि, सदैव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस विकल्प के तीनों शब्दों (विद्या+अर्थी, कपि+ईश, भानु+उदय) में दीर्घ संधि के नियम लागू हो रहे हैं।"
    },
    {
        question: "प्रश्न 46. 'पितॄण' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "यण संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: true },
            { text: "वृद्धि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'पितृ + ऋण' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'ऋ' और 'ऋ' मिलकर दीर्घ 'ॠ' बनाते हैं (हिन्दी में रूप समान रहता है)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दीर्घ संधि का उदाहरण है।"
    },
    {
        question: "प्रश्न 47. 'युगांत' का सही संधि-विच्छेद है-",
        answers: shuffle([
            { text: "युग + अंत", correct: true },
            { text: "युगा + अंत", correct: false },
            { text: "युग + अन्", correct: false },
            { text: "युगे + अंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'युग' के 'अ' और 'अंत' के 'अ' के मेल से दीर्घ स्वर 'आ' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नियम: अ + अ = आ।"
    },
    {
        question: "प्रश्न 48. 'आ + आ = आ' नियम का सही उदाहरण है-",
        answers: shuffle([
            { text: "विद्यालय", correct: true },
            { text: "विद्यार्थी", correct: false },
            { text: "शिवालय", correct: false },
            { text: "देहांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विद्यालय' का विच्छेद 'विद्या + आलय' होता है, जिसमें 'आ' और 'आ' का मेल होता है।"
    },
    {
        question: "प्रश्न 49. 'रामायण' शब्द में संधि है-",
        answers: shuffle([
            { text: "यण और व्यंजन संधि", correct: false },
            { text: "दीर्घ और व्यंजन संधि", correct: true },
            { text: "गुण और व्यंजन संधि", correct: false },
            { text: "वृद्धि और व्यंजन संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'राम + अयन' है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'राम + अयन' में पहले दीर्घ संधि से 'रामायन' (अ+अ=आ) बनता है, फिर व्यंजन संधि के नियम से 'न' का 'ण' हो जाता है, जिससे 'रामायण' बनता है।"
    },
    {
        question: "प्रश्न 50. 'पुस्तकालय' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "वृद्धि संधि", correct: false },
            { text: "यण संधि", correct: false },
            { text: "दीर्घ संधि", correct: true },
            { text: "गुण संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'पुस्तक + आलय' (अ + आ = आ) होता है, जो दीर्घ संधि है।"
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