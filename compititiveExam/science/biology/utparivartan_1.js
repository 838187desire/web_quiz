const questions = [
    {
        topHeading: "उत्परिवर्तन पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. आनुवंशिक पदार्थ (डीएनए या आरएनए) के स्थायी परिवर्तन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "अनुकूलन (Adaptation)", correct: false },
            { text: "उत्परिवर्तन (Mutation)", correct: true },
            { text: "अनुवाद (Translation)", correct: false },
            { text: "प्रतिलेखन (Transcription)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्परिवर्तन किसी जीव के जीनोम में डीएनए या आरएनए अनुक्रम में होने वाला एक स्थायी परिवर्तन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यही आनुवंशिक विविधता का मूल स्रोत है।"
    },
    {
        question: "प्रश्न 2. \"उत्परिवर्तन\" शब्द का प्रतिपादन किसने किया था?",
        answers: shuffle([
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "चार्ल्स डार्विन", correct: false },
            { text: "ह्यूगो डी व्रीस", correct: true },
            { text: "जेम्स वाटसन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्यूगो डी व्रीस ने इवनिंग प्रिमरोज़ पौधे पर काम करते हुए उत्परिवर्तन के सिद्धांत को प्रतिपादित किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इस शब्द को लोकप्रिय बनाया।"
    },
    {
        question: "प्रश्न 3. जब डीएनए अनुक्रम में एक क्षार (base) को दूसरे क्षार द्वारा प्रतिस्थापित कर दिया जाता है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "विलोपन (Deletion)", correct: false },
            { text: "निवेशन (Insertion)", correct: false },
            { text: "बिंदु उत्परिवर्तन (Point Mutation)", correct: true },
            { text: "गुणसूत्रीय उत्परिवर्तन (Chromosomal Mutation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिंदु उत्परिवर्तन एक प्रकार का जीन उत्परिवर्तन है जिसमें डीएनए या आरएनए में एकल न्यूक्लियोटाइड क्षार का प्रतिस्थापन, विलोपन या निवेशन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  क्षार का प्रतिस्थापन इसका सबसे आम रूप है।"
    },
    {
        question: "प्रश्न 4. सिकल-सेल एनीमिया (Sickle-cell anemia) किस प्रकार के उत्परिवर्तन का उदाहरण है?",
        answers: shuffle([
            { text: "फ्रेमशिफ्ट उत्परिवर्तन", correct: false },
            { text: "बिंदु उत्परिवर्तन (प्रतिस्थापन)", correct: true },
            { text: "गुणसूत्र का विलोपन", correct: false },
            { text: "बहुगुणिता (Polyploidy)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकल-सेल एनीमिया हीमोग्लोबिन-बीटा जीन में एक बिंदु उत्परिवर्तन के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ ग्लूटामिक एसिड को वैलीन द्वारा प्रतिस्थापित कर दिया जाता है, जिससे लाल रक्त कोशिकाएं हंसिया के आकार की हो जाती हैं।"
    },
    {
        question: "प्रश्न 5. जब डीएनए अनुक्रम में एक या एक से अधिक क्षार युग्मों को जोड़ दिया जाता है या हटा दिया जाता है, जिससे रीडिंग फ्रेम बदल जाता है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "मूक उत्परिवर्तन (Silent Mutation)", correct: false },
            { text: "मिससेंस उत्परिवर्तन (Missense Mutation)", correct: false },
            { text: "फ्रेमशिफ्ट उत्परिवर्तन (Frameshift Mutation)", correct: true },
            { text: "नॉनसेंस उत्परिवर्तन (Nonsense Mutation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रेमशिफ्ट उत्परिवर्तन तब होता है जब क्षारों का निवेशन या विलोपन तीन के गुणक में नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इससे डीएनए के पढ़ने का पूरा क्रम बदल जाता है और गैर-कार्यात्मक प्रोटीन बनता है।"
    },
    {
        question: "प्रश्न 6. वे कारक जो उत्परिवर्तन की दर को बढ़ाते हैं, क्या कहलाते हैं?",
        answers: shuffle([
            { text: "कार्सिनोजेन (Carcinogens)", correct: false },
            { text: "म्यूटाजेन (Mutagens)", correct: true },
            { text: "टेराटोजेन (Teratogens)", correct: false },
            { text: "एलर्जेन (Allergens)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> म्यूटाजेन भौतिक या रासायनिक एजेंट होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो किसी जीव के आनुवंशिक पदार्थ, डीएनए को इस तरह से बदलते हैं कि आनुवंशिक कोड में परिवर्तन हो जाता है।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से कौन एक भौतिक म्यूटाजेन (Physical Mutagen) का उदाहरण है?",
        answers: shuffle([
            { text: "नाइट्रस एसिड", correct: false },
            { text: "एक्रिडीन ऑरेंज", correct: false },
            { text: "पराबैंगनी (UV) किरणें", correct: true },
            { text: "तंबाकू का धुआँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पराबैंगनी किरणें, एक्स-किरणें और गामा किरणें भौतिक म्यूटाजेन हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो डीएनए को सीधे नुकसान पहुंचाकर उत्परिवर्तन का कारण बन सकती हैं।"
    },
    {
        question: "प्रश्न 8. पराबैंगनी (UV) विकिरण के कारण डीएनए में किस प्रकार की क्षति होती है?",
        answers: shuffle([
            { text: "फॉस्फेट बैकबोन का टूटना", correct: false },
            { text: "थाइमिन डाइमर का निर्माण", correct: true },
            { text: "क्षार युग्मों का प्रतिस्थापन", correct: false },
            { text: "डीएनए का विकुंडलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूवी विकिरण डीएनए में आसन्न थाइमिन क्षारों के बीच सहसंयोजक बंध बना सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे थाइमिन डाइमर बनता है जो डीएनए प्रतिकृति और प्रतिलेखन में बाधा डालता है।"
    },
    {
        question: "प्रश्न 9. गुणसूत्रों की संख्या में परिवर्तन के कारण होने वाले उत्परिवर्तन को क्या कहते हैं?",
        answers: shuffle([
            { text: "जीन उत्परिवर्तन", correct: false },
            { text: "फ्रेमशिफ्ट उत्परिवर्तन", correct: false },
            { text: "जीनोमेटिक उत्परिवर्तन (संख्यात्मक उत्परिवर्तन)", correct: true },
            { text: "बिंदु उत्परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रकार के उत्परिवर्तन में गुणसूत्रों के पूरे सेट या व्यक्तिगत गुणसूत्रों की संख्या में परिवर्तन शामिल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जैसे एन्यूप्लोइडी और पॉलीप्लोइडी।"
    },
    {
        question: "प्रश्न 10. डाउन सिंड्रोम (Down Syndrome) किस प्रकार के उत्परिवर्तन का परिणाम है?",
        answers: shuffle([
            { text: "गुणसूत्र 21 की त्रिसूत्रता (Trisomy 21)", correct: true },
            { text: "X-गुणसूत्र की मोनोसोमी", correct: false },
            { text: "जीन का विलोपन", correct: false },
            { text: "बहुगुणिता (Polyploidy)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डाउन सिंड्रोम एक आनुवंशिक विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो गुणसूत्र 21 की एक अतिरिक्त प्रति की उपस्थिति के कारण होता है, जिससे कुल 47 गुणसूत्र हो जाते हैं।"
    },
    {
        question: "प्रश्न 11. जब किसी जीव में गुणसूत्रों के दो से अधिक सेट होते हैं, तो उस स्थिति को क्या कहते हैं?",
        answers: shuffle([
            { text: "एन्यूप्लोइडी (Aneuploidy)", correct: false },
            { text: "पॉलीप्लोइडी (Polyploidy) / बहुगुणिता", correct: true },
            { text: "मोनोसोमी (Monosomy)", correct: false },
            { text: "ट्राइसोमी (Trisomy)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पॉलीप्लोइडी में गुणसूत्रों के तीन या अधिक पूर्ण सेट होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह स्थिति जानवरों में दुर्लभ लेकिन पौधों में आम है, और अक्सर बड़े फलों या फूलों का कारण बनती है।"
    },
    {
        question: "प्रश्न 12. वह उत्परिवर्तन जो दैहिक कोशिकाओं (somatic cells) में होता है और अगली पीढ़ी में स्थानांतरित नहीं होता, क्या कहलाता है?",
        answers: shuffle([
            { text: "जर्मलाइन उत्परिवर्तन", correct: false },
            { text: "कायिक उत्परिवर्तन (Somatic Mutation)", correct: true },
            { text: "वंशानुगत उत्परिवर्तन", correct: false },
            { text: "यादृच्छिक उत्परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायिक उत्परिवर्तन शरीर की गैर-प्रजनन कोशिकाओं में होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और व्यक्ति के जीवनकाल में प्राप्त होते हैं। वे वंशानुगत नहीं होते हैं।"
    },
    {
        question: "प्रश्न 13. वह उत्परिवर्तन जो जनन कोशिकाओं (germ cells) में होता है और अगली पीढ़ी में स्थानांतरित हो सकता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "कायिक उत्परिवर्तन", correct: false },
            { text: "जर्मलाइन उत्परिवर्तन (Germline Mutation)", correct: true },
            { text: "प्रेरित उत्परिवर्तन", correct: false },
            { text: "अनुकूल उत्परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जर्मलाइन उत्परिवर्तन अंडाणु या शुक्राणु कोशिकाओं में होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और निषेचन के बाद जीव की हर कोशिका में मौजूद रहते हैं, इसलिए ये वंशानुगत होते हैं।"
    },
    {
        question: "प्रश्न 14. टर्नर सिंड्रोम (Turner Syndrome) का कारण क्या है?",
        answers: shuffle([
            { text: "एक अतिरिक्त X गुणसूत्र (XXY)", correct: false },
            { text: "एक X गुणसूत्र की अनुपस्थिति (XO)", correct: true },
            { text: "एक अतिरिक्त Y गुणसूत्र (XYY)", correct: false },
            { text: "गुणसूत्र 21 की त्रिसूत्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टर्नर सिंड्रोम महिलाओं में होने वाला एक गुणसूत्रीय विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें एक X गुणसूत्र पूर्ण या आंशिक रूप से अनुपस्थित होता है, जिससे कुल 45 गुणसूत्र (45, XO) होते हैं।"
    },
    {
        question: "प्रश्न 15. क्लाइनफेल्टर सिंड्रोम (Klinefelter Syndrome) का कारण क्या है?",
        answers: shuffle([
            { text: "एक अतिरिक्त X गुणसूत्र (XXY)", correct: true },
            { text: "एक X गुणसूत्र की अनुपस्थिति (XO)", correct: false },
            { text: "एक अतिरिक्त Y गुणसूत्र (XYY)", correct: false },
            { text: "गुणसूत्र 18 की त्रिसूत्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्लाइनफेल्टर सिंड्रोम पुरुषों में होने वाला एक आनुवंशिक विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें एक अतिरिक्त X गुणसूत्र होता है, जिससे गुणसूत्रों की कुल संख्या 47 (47, XXY) हो जाती है।"
    },
    {
        question: "प्रश्न 16. वह उत्परिवर्तन जो अमीनो एसिड अनुक्रम को नहीं बदलता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "नॉनसेंस उत्परिवर्तन", correct: false },
            { text: "मिससेंस उत्परिवर्तन", correct: false },
            { text: "मूक उत्परिवर्तन (Silent Mutation)", correct: true },
            { text: "फ्रेमशिफ्ट उत्परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आनुवंशिक कोड की अपकर्षिता (degeneracy) के कारण, कभी-कभी एक क्षार में परिवर्तन से बनने वाला नया कोडॉन भी उसी अमीनो एसिड को कोड करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ऐसे उत्परिवर्तन का प्रोटीन पर कोई प्रभाव नहीं पड़ता।"
    },
    {
        question: "प्रश्न 17. वह बिंदु उत्परिवर्तन जो एक अमीनो एसिड कोडॉन को स्टॉप कोडॉन में बदल देता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "मूक उत्परिवर्तन", correct: false },
            { text: "मिससेंस उत्परिवर्तन", correct: false },
            { text: "नॉनसेंस उत्परिवर्तन (Nonsense Mutation)", correct: true },
            { text: "फ्रेमशिफ्ट उत्परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नॉनसेंस उत्परिवर्तन के कारण प्रोटीन संश्लेषण समय से पहले समाप्त हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे एक छोटा और अक्सर गैर-कार्यात्मक प्रोटीन बनता है।"
    },
    {
        question: "प्रश्न 18. जब एक गुणसूत्र का एक खंड टूटकर उलटी दिशा में फिर से जुड़ जाता है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "विलोपन (Deletion)", correct: false },
            { text: "द्विगुणन (Duplication)", correct: false },
            { text: "प्रतिलोमन (Inversion)", correct: true },
            { text: "स्थानांतरण (Translocation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिलोमन एक संरचनात्मक गुणसूत्रीय उत्परिवर्तन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें गुणसूत्र का एक खंड 180 डिग्री घूमकर पुनः जुड़ जाता है।"
    },
    {
        question: "प्रश्न 19. जब एक गुणसूत्र का खंड टूटकर किसी गैर-समजात गुणसूत्र से जुड़ जाता है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "विलोपन", correct: false },
            { text: "द्विगुणन", correct: false },
            { text: "प्रतिलोमन", correct: false },
            { text: "स्थानांतरण (Translocation)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थानांतरण में गुणसूत्र के एक हिस्से का आदान-प्रदान दो गैर-समजात गुणसूत्रों के बीच होता है।"
    },
    {
        question: "प्रश्न 20. विकास (Evolution) के लिए उत्परिवर्तन क्यों महत्वपूर्ण हैं?",
        answers: shuffle([
            { text: "वे हमेशा हानिकारक होते हैं", correct: false },
            { text: "वे हमेशा लाभकारी होते हैं", correct: false },
            { text: "वे आनुवंशिक विविधता उत्पन्न करते हैं", correct: true },
            { text: "वे जीवों को स्थिर रखते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्परिवर्तन आनुवंशिक विविधता का अंतिम स्रोत हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिस पर प्राकृतिक चयन कार्य करता है, जिससे नई प्रजातियों का विकास होता है।"
    },
    {
        question: "प्रश्न 21. बिना किसी बाहरी कारक के, डीएनए प्रतिकृति में त्रुटियों के कारण स्वाभाविक रूप से होने वाले उत्परिवर्तन को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रेरित उत्परिवर्तन (Induced Mutation)", correct: false },
            { text: "स्वतः उत्परिवर्तन (Spontaneous Mutation)", correct: true },
            { text: "कायिक उत्परिवर्तन (Somatic Mutation)", correct: false },
            { text: "रासायनिक उत्परिवर्तन (Chemical Mutation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वतः उत्परिवर्तन कोशिकीय प्रक्रियाओं, जैसे डीएनए प्रतिकृति, में होने वाली यादृच्छिक त्रुटियों के परिणामस्वरूप होते हैं।"
    },
    {
        question: "प्रश्न 22. एम्स परीक्षण (Ames test) का उपयोग किसके लिए किया जाता है?",
        answers: shuffle([
            { text: "किसी रसायन की म्यूटाजेनिक क्षमता का आकलन करने के लिए", correct: true },
            { text: "रक्त में शर्करा के स्तर को मापने के लिए", correct: false },
            { text: "डीएनए फिंगरप्रिंटिंग के लिए", correct: false },
            { text: "आनुवंशिक विकारों का निदान करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एम्स परीक्षण एक व्यापक रूप से इस्तेमाल की जाने वाली विधि है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो किसी रसायन के उत्परिवर्तनकारी (म्यूटाजेनिक) होने की क्षमता का पता लगाने के लिए बैक्टीरिया का उपयोग करती है।"
    },
    {
        question: "प्रश्न 23. फिलाडेल्फिया गुणसूत्र (Philadelphia chromosome) किस प्रकार के उत्परिवर्तन का परिणाम है?",
        answers: shuffle([
            { text: "विलोपन", correct: false },
            { text: "प्रतिलोमन", correct: false },
            { text: "स्थानांतरण (Translocation)", correct: true },
            { text: "एन्यूप्लोइडी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिलाडेल्फिया गुणसूत्र गुणसूत्र 9 और 22 के बीच एक विशिष्ट स्थानांतरण के कारण बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह क्रोनिक माइलॉयड ल्यूकेमिया (एक प्रकार का रक्त कैंसर) से जुड़ा है।"
    },
    {
        question: "प्रश्न 24. \"जंपिंग जीन\" (Transposons) की खोज किसने की थी?",
        answers: shuffle([
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "बारबरा मैक्लिंटॉक", correct: true },
            { text: "ह्यूगो डी व्रीस", correct: false },
            { text: "वाटसन और क्रिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बारबरा मैक्लिंटॉक ने मक्के में ट्रांसपोसेबल तत्वों या \"जंपिंग जीन\" की खोज की।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो जीनोम में एक स्थान से दूसरे स्थान पर जा सकते हैं और उत्परिवर्तन का कारण बन सकते हैं।"
    },
    {
        question: "प्रश्न 25. वह उत्परिवर्तन जिसमें एक प्यूरीन क्षार दूसरे प्यूरीन द्वारा या एक पाइरिमिडीन दूसरे पाइरिमिडीन द्वारा प्रतिस्थापित होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "ट्रांजिशन (Transition)", correct: true },
            { text: "ट्रांसवर्सन (Transversion)", correct: false },
            { text: "प्रतिलोमन (Inversion)", correct: false },
            { text: "विलोपन (Deletion)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रांजिशन एक प्रकार का प्रतिस्थापन उत्परिवर्तन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें एक प्यूरीन (A, G) को दूसरे प्यूरीन से या एक पाइरिमिडीन (C, T) को दूसरे पाइरिमिडीन से बदल दिया जाता है।"
    },
    {
        question: "प्रश्न 26. वह उत्परिवर्तन जिसमें एक प्यूरीन को पाइरिमिडीन द्वारा या इसके विपरीत प्रतिस्थापित किया जाता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "ट्रांजिशन (Transition)", correct: false },
            { text: "ट्रांसवर्सन (Transversion)", correct: true },
            { text: "नॉनसेंस उत्परिवर्तन", correct: false },
            { text: "मिससेंस उत्परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रांसवर्सन एक प्रकार का प्रतिस्थापन उत्परिवर्तन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें एक प्यूरीन (A, G) को एक पाइरिमिडीन (C, T) से या इसके विपरीत बदल दिया जाता है।"
    },
    {
        question: "प्रश्न 27. उत्परिवर्तन के प्रभाव के संबंध में क्या सत्य है?",
        answers: shuffle([
            { text: "वे हमेशा हानिकारक होते हैं", correct: false },
            { text: "वे हमेशा लाभकारी होते हैं", correct: false },
            { text: "वे हानिकारक, लाभकारी या तटस्थ हो सकते हैं", correct: true },
            { text: "वे कभी भी तटस्थ नहीं होते", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्परिवर्तन का प्रभाव संदर्भ पर निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  वे रोगों का कारण (हानिकारक), जीवित रहने में मदद (लाभकारी), या कोई स्पष्ट प्रभाव नहीं (तटस्थ) कर सकते हैं।"
    },
    {
        question: "प्रश्न 28. क्राई-डू-चैट (Cri-du-chat) सिंड्रोम किस प्रकार के गुणसूत्रीय उत्परिवर्तन के कारण होता है?",
        answers: shuffle([
            { text: "द्विगुणन (Duplication)", correct: false },
            { text: "प्रतिलोमन (Inversion)", correct: false },
            { text: "विलोपन (Deletion)", correct: true },
            { text: "स्थानांतरण (Translocation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिंड्रोम गुणसूत्र 5 की छोटी भुजा के एक हिस्से के विलोपन के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  प्रभावित शिशु के रोने की आवाज बिल्ली के बच्चे जैसी होती है।"
    },
    {
        question: "प्रश्न 29. कैंसर के विकास में शामिल जीन में होने वाले उत्परिवर्तन को क्या कहते हैं?",
        answers: shuffle([
            { text: "ओन्कोजीन (Oncogenes) और ट्यूमर शमन जीन (Tumor suppressor genes)", correct: true },
            { text: "होलैंड्रिक जीन", correct: false },
            { text: "घातक जीन", correct: false },
            { text: "संरचनात्मक जीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटो-ओन्कोजीन में उत्परिवर्तन उन्हें ओन्कोजीन में बदल सकता है, जो कोशिका वृद्धि को बढ़ावा देता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ट्यूमर शमन जीन में उत्परिवर्तन कोशिका विभाजन पर उनके नियंत्रण को समाप्त कर देता है, जिससे कैंसर हो सकता है।"
    },
    {
        question: "प्रश्न 30. उत्परिवर्तन की दर को कौन सा कारक प्रभावित नहीं करता है?",
        answers: shuffle([
            { text: "तापमान", correct: false },
            { text: "म्यूटाजेन का संपर्क", correct: false },
            { text: "जीव की आयु", correct: false },
            { text: "जीव का आकार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तापमान, म्यूटाजेन का संपर्क और उम्र (कोशिका विभाजन की संख्या बढ़ने के कारण) जैसे कारक उत्परिवर्तन की दर को प्रभावित कर सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन जीव के समग्र आकार का सीधा संबंध उत्परिवर्तन दर से नहीं होता है।"
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