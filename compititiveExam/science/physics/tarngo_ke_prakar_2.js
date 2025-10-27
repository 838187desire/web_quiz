const questions = [
    {
        topHeading: " तरंग और उसके प्रकार पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. अप्रगामी तरंग में वे बिंदु जहाँ आयाम अधिकतम होता है, क्या कहलाते हैं?",
        answers: shuffle([
            { text: "निस्पंद", correct: false },
            { text: "प्रस्पंद", correct: true },
            { text: "गर्त", correct: false },
            { text: "संपीडन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रस्पंद (Antinodes) वे बिंदु हैं जहाँ कण अधिकतम आयाम के साथ कंपन करते हैं।"
    },
    {
        question: "प्रश्न 2. किस वैज्ञानिक ने यह परिकल्पना की थी कि गतिशील कणों के साथ तरंगें जुड़ी होती हैं?",
        answers: shuffle([
            { text: "अल्बर्ट आइंस्टीन", correct: false },
            { text: "आइजैक न्यूटन", correct: false },
            { text: "लुई डी ब्रोग्ली", correct: true },
            { text: "मैक्स प्लैंक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डी ब्रोग्ली ने तरंग-कण द्वैतता का प्रस्ताव दिया, जिसके अनुसार सभी गतिशील पदार्थों में तरंग जैसे गुण होते हैं।"
    },
    {
        question: "प्रश्न 3. गतिशील कणों से जुड़ी तरंगों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "यांत्रिक तरंगें", correct: false },
            { text: "विद्युतचुंबकीय तरंगें", correct: false },
            { text: "द्रव्य तरंगें", correct: true },
            { text: "सतही तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन तरंगों को डी ब्रोग्ली तरंगें या द्रव्य तरंगें (Matter waves) कहा जाता है।"
    },
    {
        question: "प्रश्न 4. गुरुत्वाकर्षण तरंगों की भविष्यवाणी सबसे पहले किसने की थी?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "गैलीलियो गैलिली", correct: false },
            { text: "स्टीफन हॉकिंग", correct: false },
            { text: "अल्बर्ट आइंस्टीन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आइंस्टीन ने अपने सामान्य सापेक्षता के सिद्धांत के एक परिणाम के रूप में गुरुत्वाकर्षण तरंगों (अंतरिक्ष-समय में लहरें) के अस्तित्व की भविष्यवाणी की थी।"
    },
    {
        question: "प्रश्न 5. शॉक तरंगें (Shock waves) कब उत्पन्न होती हैं?",
        answers: shuffle([
            { text: "जब कोई वस्तु बहुत धीरे चलती है।", correct: false },
            { text: "जब कोई वस्तु ध्वनि की गति से तेज चलती है।", correct: true },
            { text: "जब प्रकाश निर्वात में चलता है।", correct: false },
            { text: "जब ध्वनि पानी में चलती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई वस्तु (जैसे सुपरसोनिक विमान) ध्वनि की गति से तेज चलती है, तो वह अपने आगे एक उच्च दाब वाली शॉक वेव बनाती है।"
    },
    {
        question: "प्रश्न 6. सुनामी किस प्रकार की तरंगों का एक उदाहरण है?",
        answers: shuffle([
            { text: "A) ज्वारीय तरंगें", correct: false },
            { text: "B) सतही तरंगें", correct: false },
            { text: "C) भूकंपीय तरंगें (एक प्रकार की)", correct: false },
            { text: "B) और C) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुनामी समुद्र के नीचे भूकंप या भूस्खलन से उत्पन्न होने वाली बहुत लंबी तरंगदैर्घ्य वाली सतही तरंगें हैं।"
    },
    {
        question: "प्रश्न 7. एक तनी हुई रस्सी को हिलाने पर उत्पन्न तरंग...",
        answers: shuffle([
            { text: "अनुदैर्ध्य है।", correct: false },
            { text: "अनुप्रस्थ है।", correct: true },
            { text: "विद्युतचुंबकीय है।", correct: false },
            { text: "अवश्रव्य है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रस्सी के हिस्से रस्सी की लंबाई के लंबवत ऊपर-नीचे गति करते हैं।"
    },
    {
        question: "प्रश्न 8. सभी प्रकार की विद्युतचुंबकीय तरंगों में क्या समान होता है?",
        answers: shuffle([
            { text: "उनकी आवृत्ति", correct: false },
            { text: "उनकी तरंगदैर्घ्य", correct: false },
            { text: "उनकी ऊर्जा", correct: false },
            { text: "निर्वात में उनकी चाल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी विद्युतचुंबकीय तरंगें निर्वात में प्रकाश की चाल (c) से यात्रा करती हैं।"
    },
    {
        question: "प्रश्न 9. अनुप्रस्थ और अनुदैर्ध्य दोनों प्रकार की तरंगें किसमें संचारित हो सकती हैं?",
        answers: shuffle([
            { text: "गैसों में", correct: false },
            { text: "निर्वात में", correct: false },
            { text: "तरल पदार्थों के अंदर", correct: false },
            { text: "ठोस पदार्थों में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ठोस पदार्थों में दृढ़ता और संपीड्यता दोनों गुण होते हैं, इसलिए वे दोनों प्रकार की तरंगों का समर्थन कर सकते हैं।"
    },
    {
        question: "प्रश्न 10. एक अकेली, गैर-आवर्ती विक्षोभ को क्या कहा जाता है?",
        answers: shuffle([
            { text: "तरंग ट्रेन", correct: false },
            { text: "तरंग स्पंद", correct: true },
            { text: "आवर्ती तरंग", correct: false },
            { text: "स्थिर तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक तरंग स्पंद (Wave pulse) एक एकल विक्षोभ है जो एक स्थान से दूसरे स्थान तक जाता है, जैसे रस्सी को एक बार झटका देना।"
    },
    {
        question: "प्रश्न 11. तरंग का कौन सा गुण उसकी ऊर्जा के परिमाण को निर्धारित करता है?",
        answers: shuffle([
            { text: "तरंगदैर्घ्य", correct: false },
            { text: "आवृत्ति", correct: false },
            { text: "चाल", correct: false },
            { text: "आयाम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक यांत्रिक तरंग की ऊर्जा उसके आयाम के वर्ग के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> बड़ा आयाम मतलब अधिक ऊर्जा।"
    },
    {
        question: "प्रश्न 12. एक माध्यम से दूसरे माध्यम में जाने पर प्रकाश के मुड़ने की घटना क्या कहलाती है?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: true },
            { text: "विवर्तन", correct: false },
            { text: "ध्रुवीकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवर्तन तरंगों का एक गुण है जो माध्यम बदलने पर उनकी गति में परिवर्तन के कारण होता है।"
    },
    {
        question: "प्रश्न 13. किसी बाधा के किनारों से तरंगों के मुड़ने की घटना क्या कहलाती है?",
        answers: shuffle([
            { text: "अपवर्तन", correct: false },
            { text: "व्यतिकरण", correct: false },
            { text: "विवर्तन", correct: true },
            { text: "परावर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन (Diffraction) तरंगों का वह गुण है जिसके कारण वे बाधाओं के चारों ओर फैल जाती हैं या मुड़ जाती हैं।"
    },
    {
        question: "प्रश्न 14. स्लिंकी (एक लंबा स्प्रिंग) का उपयोग किस प्रकार की तरंगों को प्रदर्शित करने के लिए किया जा सकता है?",
        answers: shuffle([
            { text: "केवल अनुप्रस्थ", correct: false },
            { text: "केवल अनुदैर्ध्य", correct: false },
            { text: "अनुप्रस्थ और अनुदैर्ध्य दोनों", correct: true },
            { text: "केवल विद्युतचुंबकीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्लिंकी को ऊपर-नीचे हिलाकर अनुप्रस्थ तरंगें और आगे-पीछे धकेलकर अनुदैर्ध्य तरंगें आसानी से बनाई जा सकती हैं।"
    },
    {
        question: "प्रश्न 15. मोबाइल फोन संचार के लिए मुख्य रूप से किन तरंगों का उपयोग करता है?",
        answers: shuffle([
            { text: "अवरक्त तरंगें", correct: false },
            { text: "रेडियो तरंगें/सूक्ष्म तरंगें", correct: true },
            { text: "गामा किरणें", correct: false },
            { text: "पराबैंगनी किरणें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोबाइल फोन संचार के लिए विद्युतचुंबकीय स्पेक्ट्रम के रेडियो तरंग और सूक्ष्म तरंग क्षेत्रों का उपयोग करते हैं।"
    },
    {
        question: "प्रश्न 16. ऊष्मा का संचरण विकिरण द्वारा किस रूप में होता है?",
        answers: shuffle([
            { text: "ध्वनि तरंगों के रूप में", correct: false },
            { text: "विद्युतचुंबकीय तरंगों के रूप में", correct: true },
            { text: "यांत्रिक तरंगों के रूप में", correct: false },
            { text: "कणों के प्रवाह के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्मा विकिरण (मुख्य रूप से अवरक्त तरंगें) एक प्रकार का विद्युतचुंबकीय विकिरण है जिसे यात्रा के लिए माध्यम की आवश्यकता नहीं होती है।"
    },
    {
        question: "प्रश्न 17. \"ब्लू शिफ्ट\" और \"रेड शिफ्ट\" की खगोलीय घटनाएँ तरंग के किस गुण से संबंधित हैं?",
        answers: shuffle([
            { text: "विवर्तन", correct: false },
            { text: "डॉप्लर प्रभाव", correct: true },
            { text: "व्यतिकरण", correct: false },
            { text: "ध्रुवीकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई आकाशगंगा हमारी ओर बढ़ती है, तो उसका प्रकाश नीले रंग की ओर विस्थापित (ब्लू शिफ्ट) होता है, और जब दूर जाती है, तो लाल रंग की ओर विस्थापित (रेड शिफ्ट) होता है, जो डॉप्लर प्रभाव का परिणाम है।"
    },
    {
        question: "प्रश्न 18. एक तरंग जो अपने स्रोत से सभी दिशाओं में फैलती है, उसे कहते हैं:",
        answers: shuffle([
            { text: "समतल तरंग", correct: false },
            { text: "गोलीय तरंग", correct: true },
            { text: "रैखिक तरंग", correct: false },
            { text: "स्थिर तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बिंदु स्रोत से उत्पन्न होने वाली तरंगें सभी दिशाओं में समान रूप से फैलती हैं, जिससे गोलीय तरंगाग्र बनते हैं।"
    },
    {
        question: "प्रश्न 19. हवा में ध्वनि तरंगें किस प्रकार की तरंगों का सबसे सामान्य उदाहरण हैं?",
        answers: shuffle([
            { text: "अनुप्रस्थ यांत्रिक", correct: false },
            { text: "अनुदैर्ध्य यांत्रिक", correct: true },
            { text: "अनुप्रस्थ विद्युतचुंबकीय", correct: false },
            { text: "अनुदैर्ध्य विद्युतचुंबकीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि एक यांत्रिक तरंग है (माध्यम की आवश्यकता है) और अनुदैर्ध्य है (कण समानांतर कंपन करते हैं)।"
    },
    {
        question: "प्रश्न 20. प्रकाश तरंगें किस प्रकार की तरंगों का सबसे सामान्य उदाहरण हैं?",
        answers: shuffle([
            { text: "अनुप्रस्थ यांत्रिक", correct: false },
            { text: "अनुदैर्ध्य यांत्रिक", correct: false },
            { text: "अनुप्रस्थ विद्युतचुंबकीय", correct: true },
            { text: "अनुदैर्ध्य विद्युतचुंबकीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश एक विद्युतचुंबकीय तरंग है (माध्यम की आवश्यकता नहीं) और अनुप्रस्थ है (विद्युत और चुंबकीय क्षेत्र संचरण के लंबवत होते हैं)।"
    },
    {
        question: "प्रश्न 21. दो क्रमागत शृंगों या गर्तों के बीच की दूरी को क्या कहते हैं?",
        answers: shuffle([
            { text: "आयाम", correct: false },
            { text: "आवृत्ति", correct: false },
            { text: "आवर्त काल", correct: false },
            { text: "तरंगदैर्घ्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंगदैर्घ्य (Wavelength) एक तरंग के चक्र की स्थानिक अवधि है।"
    },
    {
        question: "प्रश्न 22. दो क्रमागत संपीडनों या विरलनों के बीच की दूरी को क्या कहते हैं?",
        answers: shuffle([
            { text: "आयाम", correct: false },
            { text: "तरंगदैर्घ्य", correct: true },
            { text: "आवृत्ति", correct: false },
            { text: "आवर्त काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुदैर्ध्य तरंगों में, तरंगदैर्घ्य को दो क्रमागत संपीडनों या विरलनों के बीच की दूरी के रूप में परिभाषित किया जाता है।"
    },
    {
        question: "प्रश्न 23. तारों के टिमटिमाने का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "प्रकाश का परावर्तन", correct: false },
            { text: "प्रकाश का वायुमंडलीय अपवर्तन", correct: true },
            { text: "प्रकाश का विवर्तन", correct: false },
            { text: "प्रकाश का प्रकीर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल की विभिन्न परतों का घनत्व और तापमान बदलने से तारों से आने वाला प्रकाश लगातार अपवर्तित होता रहता है, जिससे वे टिमटिमाते हुए प्रतीत होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तरंगों का एक गुण है।"
    },
    {
        question: "प्रश्न 24. एक माध्यम में तरंग की चाल...",
        answers: shuffle([
            { text: "हमेशा स्थिर रहती है।", correct: false },
            { text: "उस माध्यम के गुणों पर निर्भर करती है।", correct: true },
            { text: "तरंग के आयाम पर निर्भर करती है।", correct: false },
            { text: "तरंग की आवृत्ति पर निर्भर करती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी दिए गए माध्यम के लिए, तरंग की चाल स्थिर रहती है और यह उस माध्यम की प्रत्यास्थता और जड़त्व पर निर्भर करती है।"
    },
    {
        question: "प्रश्न 25. पानी के अंदर ध्वनि की चाल हवा की तुलना में...",
        answers: shuffle([
            { text: "कम होती है।", correct: false },
            { text: "अधिक होती है।", correct: true },
            { text: "बराबर होती है।", correct: false },
            { text: "शून्य होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी हवा की तुलना में बहुत अधिक सघन और कम संपीड्य है, जिससे ध्वनि तरंगें उसमें बहुत तेजी से यात्रा करती हैं।"
    },
    {
        question: "प्रश्न 26. एक ही वाद्ययंत्र से उत्पन्न दो ध्वनियों को उनकी किस विशेषता के कारण विभेदित किया जा सकता है?",
        answers: shuffle([
            { text: "तारत्व (Pitch)", correct: false },
            { text: "प्रबलता (Loudness)", correct: false },
            { text: "गुणता (Timbre/Quality)", correct: true },
            { text: "चाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुणता तरंग के आकार या उसमें मौजूद अधिस्वरकों (overtones) पर निर्भर करती है, जो विभिन्न ध्वनियों को एक विशिष्ट पहचान देती है।"
    },
    {
        question: "प्रश्न 27. गिटार के तार को कसने से उत्पन्न ध्वनि का तारत्व...",
        answers: shuffle([
            { text: "बढ़ जाता है।", correct: true },
            { text: "घट जाता है।", correct: false },
            { text: "अपरिवर्तित रहता है।", correct: false },
            { text: "पहले बढ़ता है फिर घटता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तार को कसने से उसका तनाव बढ़ता है, जिससे कंपन की आवृत्ति बढ़ जाती है और परिणामी ध्वनि का तारत्व भी बढ़ जाता है।"
    },
    {
        question: "प्रश्न 28. \"तरंगाग्र\" (Wavefront) क्या है?",
        answers: shuffle([
            { text: "तरंग का उच्चतम बिंदु", correct: false },
            { text: "समान कला में कंपन करने वाले बिंदुओं का बिंदुपथ", correct: true },
            { text: "तरंग का पथ", correct: false },
            { text: "तरंग की ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंगाग्र एक काल्पनिक सतह है जो उन सभी बिंदुओं को जोड़ती है जो एक ही समय में एक ही दोलन अवस्था में होते हैं।"
    },
    {
        question: "प्रश्न 29. किसी तरंग द्वारा एक आवर्त काल में तय की गई दूरी को क्या कहते हैं?",
        answers: shuffle([
            { text: "आयाम", correct: false },
            { text: "विस्थापन", correct: false },
            { text: "तरंगदैर्घ्य", correct: true },
            { text: "आवृत्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तरंगदैर्घ्य की एक और परिभाषा है।"
    },
    {
        question: "प्रश्न 30. किस प्रकार की तरंगें निर्वात में ऊर्जा का संचार कर सकती हैं?",
        answers: shuffle([
            { text: "केवल ध्वनि तरंगें", correct: false },
            { text: "केवल यांत्रिक तरंगें", correct: false },
            { text: "केवल विद्युतचुंबकीय तरंगें", correct: true },
            { text: "सभी प्रकार की तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केवल विद्युतचुंबकीय तरंगों को यात्रा करने के लिए किसी माध्यम की आवश्यकता नहीं होती है।"
    },
    {
        question: "प्रश्न 31. एक स्थिर तरंग में, ऊर्जा...",
        answers: shuffle([
            { text: "एक दिशा में लगातार प्रवाहित होती है।", correct: false },
            { text: "निस्पंदों और प्रस्पंदों के बीच सीमित रहती है।", correct: true },
            { text: "नष्ट हो जाती है।", correct: false },
            { text: "उत्पन्न होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्थिर तरंग में ऊर्जा का शुद्ध प्रवाह नहीं होता है;<br><br><i class='fa-solid fa-angles-right icon'></i> यह दो क्रमागत निस्पंदों के बीच संग्रहीत रहती है।"
    },
    {
        question: "प्रश्न 32. बादल सफेद क्यों दिखाई देते हैं?",
        answers: shuffle([
            { text: "प्रकाश के अपवर्तन के कारण", correct: false },
            { text: "प्रकाश के प्रकीर्णन के कारण", correct: true },
            { text: "प्रकाश के परावर्तन के कारण", correct: false },
            { text: "प्रकाश के व्यतिकरण के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादलों में पानी की बूंदें सभी तरंगदैर्घ्य के प्रकाश को लगभग समान रूप से प्रकीर्णित करती हैं, जिससे वे सफेद दिखाई देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रकाश तरंगों का एक गुण है।"
    },
    {
        question: "प्रश्न 33. एक अनुप्रस्थ तरंग में कणों का वेग कहाँ पर अधिकतम होता है?",
        answers: shuffle([
            { text: "शृंग और गर्त पर", correct: false },
            { text: "माध्य स्थिति पर", correct: true },
            { text: "सभी बिंदुओं पर समान", correct: false },
            { text: "निस्पंदों पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण सरल आवर्त गति करते हैं, और उनका वेग तब अधिकतम होता है जब वे अपनी साम्यावस्था या माध्य स्थिति से गुजरते हैं।"
    },
    {
        question: "प्रश्न 34. एक अनुदैर्ध्य तरंग में, दबाव भिन्नता कहाँ पर अधिकतम होती है?",
        answers: shuffle([
            { text: "केवल संपीडन पर", correct: false },
            { text: "केवल विरलन पर", correct: false },
            { text: "संपीडन और विरलन दोनों पर", correct: true },
            { text: "संपीडन और विरलन के बीच में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संपीडन पर दबाव माध्य से अधिकतम होता है, और विरलन पर दबाव माध्य से न्यूनतम होता है,<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए दबाव में परिवर्तन (भिन्नता) दोनों स्थानों पर अधिकतम होता है।"
    },
    {
        question: "प्रश्न 35. किस प्रकार की तरंगों का वेग उनकी आवृत्ति या तरंगदैर्घ्य पर निर्भर नहीं करता (किसी दिए गए माध्यम में)?",
        answers: shuffle([
            { text: "A) जल तरंगें", correct: false },
            { text: "B) ध्वनि तरंगें", correct: false },
            { text: "C) प्रकाश तरंगें (निर्वात में)", correct: false },
            { text: "B) और C) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक गैर-विक्षेपी माध्यम में, जैसे कि हवा में ध्वनि या निर्वात में प्रकाश, सभी आवृत्तियों की तरंगें एक ही गति से चलती हैं।"
    },
    {
        question: "प्रश्न 36. वाई-फाई और ब्लूटूथ जैसी प्रौद्योगिकियाँ किन तरंगों का उपयोग करती हैं?",
        answers: shuffle([
            { text: "पराश्रव्य तरंगें", correct: false },
            { text: "अवरक्त तरंगें", correct: false },
            { text: "रेडियो तरंगें", correct: true },
            { text: "पराबैंगनी तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये वायरलेस प्रौद्योगिकियाँ सूचना प्रसारित करने के लिए विद्युतचुंबकीय स्पेक्ट्रम के रेडियो आवृत्ति बैंड का उपयोग करती हैं।"
    },
    {
        question: "प्रश्न 37. क्या द्रव्य तरंगें विद्युतचुंबकीय तरंगें हैं?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "नहीं", correct: true },
            { text: "केवल यदि कण आवेशित हो", correct: false },
            { text: "केवल यदि कण तेज गति से चल रहा हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्य तरंगें एक पूरी तरह से अलग प्रकार की तरंग हैं जो पदार्थ से जुड़ी होती हैं;<br><br><i class='fa-solid fa-angles-right icon'></i> वे बदलते विद्युत और चुंबकीय क्षेत्रों से नहीं बनी होती हैं।"
    },
    {
        question: "प्रश्न 38. जब एक वायलिन और एक बांसुरी एक ही नोट (समान आवृत्ति) बजाते हैं, तो हम उन्हें अलग-अलग कैसे पहचानते हैं?",
        answers: shuffle([
            { text: "उनकी प्रबलता के कारण", correct: false },
            { text: "उनके तारत्व के कारण", correct: false },
            { text: "उनकी गुणता (अधिस्वरकों की उपस्थिति) के कारण", correct: true },
            { text: "उनकी गति के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक उपकरण विभिन्न अधिस्वरकों (overtones) का एक अनूठा मिश्रण उत्पन्न करता है, जो तरंग के आकार और ध्वनि की गुणता को निर्धारित करता है।"
    },
    {
        question: "प्रश्न 39. सभी तरंगों के लिए कौन सा गुण सामान्य है?",
        answers: shuffle([
            { text: "वे निर्वात में यात्रा कर सकती हैं।", correct: false },
            { text: "वे अनुप्रस्थ होती हैं।", correct: false },
            { text: "वे ऊर्जा का वहन करती हैं।", correct: true },
            { text: "वे श्रव्य होती हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाहे यांत्रिक हो या विद्युतचुंबकीय, अनुप्रस्थ हो या अनुदैर्ध्य, सभी तरंगों की परिभाषित विशेषता ऊर्जा का संचरण करना है।"
    },
    {
        question: "प्रश्न 40. एक तरंग का आयाम कम होने पर उसकी प्रबलता...",
        answers: shuffle([
            { text: "घट जाती है।", correct: true },
            { text: "बढ़ जाती है।", correct: false },
            { text: "अपरिवर्तित रहती है।", correct: false },
            { text: "शून्य हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि की प्रबलता तरंग की ऊर्जा पर निर्भर करती है, और ऊर्जा आयाम पर निर्भर करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> कम आयाम मतलब कम ऊर्जा और कम प्रबलता।"
    },
    {
        question: "प्रश्न 41. वह माध्यम जिसमें तरंग की गति आवृत्ति पर निर्भर करती है, कहलाता है:",
        answers: shuffle([
            { text: "गैर-विक्षेपी माध्यम", correct: false },
            { text: "विक्षेपी माध्यम", correct: true },
            { text: "प्रत्यास्थ माध्यम", correct: false },
            { text: "आदर्श माध्यम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्षेपण (Dispersion) वह परिघटना है जिसमें विभिन्न आवृत्तियों की तरंगें अलग-अलग गति से चलती हैं, जैसे कि प्रिज्म से गुजरता हुआ प्रकाश।"
    },
    {
        question: "प्रश्न 42. पानी में पत्थर फेंकने से उत्पन्न तरंगें...",
        answers: shuffle([
            { text: "मुख्य रूप से अनुदैर्ध्य होती हैं।", correct: false },
            { text: "मुख्य रूप से अनुप्रस्थ होती हैं।", correct: false },
            { text: "विद्युतचुंबकीय होती हैं।", correct: false },
            { text: "प्रगामी होती हैं।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये तरंगें विक्षोभ के बिंदु से बाहर की ओर यात्रा करती हैं और ऊर्जा का परिवहन करती हैं, इसलिए वे प्रगामी तरंगें हैं।"
    },
    {
        question: "प्रश्न 43. किसी दिए गए माध्यम में, यदि ध्वनि की आवृत्ति दोगुनी हो जाती है, तो उसकी तरंगदैर्घ्य...",
        answers: shuffle([
            { text: "दोगुनी हो जाएगी।", correct: false },
            { text: "आधी हो जाएगी।", correct: true },
            { text: "चार गुनी हो जाएगी।", correct: false },
            { text: "अपरिवर्तित रहेगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि वेग (v=fλ) माध्यम में स्थिर रहता है, यदि आवृत्ति (f) दोगुनी होती है, तो तरंगदैर्घ्य (λ) को आधा होना होगा।"
    },
    {
        question: "प्रश्न 44. कौन सी तरंगें केवल ठोस पदार्थों में ही चल सकती हैं?",
        answers: shuffle([
            { text: "अनुदैर्ध्य तरंगें", correct: false },
            { text: "अनुप्रस्थ यांत्रिक तरंगें", correct: true },
            { text: "ध्वनि तरंगें", correct: false },
            { text: "प्रकाश तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुप्रस्थ यांत्रिक तरंगों को अपरूपण प्रतिबल की आवश्यकता होती है, जो केवल ठोस पदार्थों में मौजूद होता है।"
    },
    {
        question: "प्रश्न 45. कौन सी तरंगें ठोस, द्रव और गैस तीनों में चल सकती हैं?",
        answers: shuffle([
            { text: "अनुदैर्ध्य यांत्रिक तरंगें", correct: true },
            { text: "अनुप्रस्थ यांत्रिक तरंगें", correct: false },
            { text: "प्रकाश तरंगें", correct: false },
            { text: "द्रव्य तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुदैर्ध्य तरंगें (जैसे ध्वनि) सभी पदार्थ की अवस्थाओं में यात्रा कर सकती हैं क्योंकि वे संपीडन पर निर्भर करती हैं।"
    },
    {
        question: "प्रश्न 46. रात में देखने वाले उपकरणों (Night Vision Goggles) में किन तरंगों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "पराबैंगनी", correct: false },
            { text: "एक्स-किरणें", correct: false },
            { text: "अवरक्त", correct: true },
            { text: "सूक्ष्म तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये उपकरण शरीर या वस्तुओं द्वारा उत्सर्जित ऊष्मा (अवरक्त विकिरण) का पता लगाते हैं और उसे एक दृश्यमान छवि में परिवर्तित करते हैं।"
    },
    {
        question: "प्रश्न 47. किस घटना से पता चलता है कि प्रकाश सीधी रेखा में नहीं चलता है?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन", correct: true },
            { text: "ध्रुवीकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन में प्रकाश छोटे छिद्रों या बाधाओं के किनारों पर मुड़ जाता है, जो यह दर्शाता है कि यह हमेशा सख्ती से एक सीधी रेखा में नहीं चलता है।"
    },
    {
        question: "प्रश्न 48. एक गूंज (Echo) किस तरंग घटना का परिणाम है?",
        answers: shuffle([
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन", correct: false },
            { text: "परावर्तन", correct: true },
            { text: "व्यतिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गूंज तब सुनाई देती है जब ध्वनि तरंगें किसी दूर की सतह से परावर्तित होकर वापस श्रोता तक पहुँचती हैं।"
    },
    {
        question: "प्रश्न 49. एक अनुदैर्ध्य तरंग को इस रूप में भी जाना जाता है:",
        answers: shuffle([
            { text: "अपरूपण तरंग", correct: false },
            { text: "दाब तरंग", correct: true },
            { text: "ऐंठन तरंग", correct: false },
            { text: "ध्रुवित तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि यह माध्यम में दाब के उतार-चढ़ाव (संपीड़न और विरलन) के माध्यम से यात्रा करती है, इसे दाब तरंग भी कहा जाता है।"
    },
    {
        question: "प्रश्न 50. एक अनुप्रस्थ तरंग को इस रूप में भी जाना जाता है:",
        answers: shuffle([
            { text: "संपीडन तरंग", correct: false },
            { text: "दाब तरंग", correct: false },
            { text: "अपरूपण तरंग", correct: true },
            { text: "घनत्व तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि यह माध्यम की परतों को एक दूसरे के ऊपर \"अपरूपित\" (shear) करके यात्रा करती है, इसे अपरूपण तरंग भी कहा जाता है।"
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