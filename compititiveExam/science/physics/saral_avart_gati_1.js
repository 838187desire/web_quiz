const questions = [
    {
        topHeading: "सरल आवर्त गति (SHM) और दोलन पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. सरल आवर्त गति (SHM) किस प्रकार की गति का एक विशिष्ट उदाहरण है?",
        answers: shuffle([
            { text: "एकसमान गति", correct: false },
            { text: "असमान गति", correct: false },
            { text: "आवर्ती गति", correct: true },
            { text: "घूर्णी गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल आवर्त गति एक विशेष प्रकार की आवर्ती और दोलनी गति है जिसमें वस्तु एक निश्चित पथ पर एक निश्चित समयांतराल में अपनी गति को दोहराती है।"
    },
    {
        question: "प्रश्न 2. सरल आवर्त गति कर रहे कण पर लगने वाला प्रत्यानयन बल हमेशा किस दिशा में होता है?",
        answers: shuffle([
            { text: "गति की दिशा में", correct: false },
            { text: "गति की विपरीत दिशा में", correct: false },
            { text: "माध्य स्थिति की ओर", correct: true },
            { text: "माध्य स्थिति से दूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल आवर्त गति में, प्रत्यानयन बल हमेशा कण को उसकी साम्यावस्था या माध्य स्थिति की ओर लाने का प्रयास करता है।"
    },
    {
        question: "प्रश्न 3. सरल आवर्त गति में, प्रत्यानयन बल किसके समानुपाती होता है?",
        answers: shuffle([
            { text: "वेग के", correct: false },
            { text: "त्वरण के", correct: false },
            { text: "माध्य स्थिति से विस्थापन के", correct: true },
            { text: "आयाम के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुक के नियम के अनुसार, सरल आवर्त गति में प्रत्यानयन बल (F) माध्य स्थिति से विस्थापन (x) के अनुक्रमानुपाती होता है, अर्थात F∝−x।"
    },
    {
        question: "प्रश्न 4. सरल आवर्त गति कर रहे कण का वेग कहाँ पर अधिकतम होता है?",
        answers: shuffle([
            { text: "माध्य स्थिति पर", correct: true },
            { text: "चरम स्थितियों पर (अंतिम बिंदुओं पर)", correct: false },
            { text: "माध्य और चरम स्थिति के बीच में", correct: false },
            { text: "हर जगह समान रहता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कण अपनी माध्य स्थिति से गुजरता है, तो उस पर कोई बल नहीं लगता और उसका वेग अधिकतम होता है।"
    },
    {
        question: "प्रश्न 5. सरल आवर्त गति कर रहे कण का त्वरण कहाँ पर अधिकतम होता है?",
        answers: shuffle([
            { text: "माध्य स्थिति पर", correct: false },
            { text: "चरम स्थितियों पर", correct: true },
            { text: "माध्य और चरम स्थिति के बीच में", correct: false },
            { text: "शून्य होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चरम स्थितियों पर विस्थापन अधिकतम होता है, इसलिए प्रत्यानयन बल और त्वरण भी अधिकतम होते हैं।"
    },
    {
        question: "प्रश्न 6. सरल आवर्त गति में, कण का वेग चरम स्थितियों पर कितना होता है?",
        answers: shuffle([
            { text: "अधिकतम", correct: false },
            { text: "न्यूनतम", correct: false },
            { text: "शून्य", correct: true },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण अपनी गति की दिशा बदलने से ठीक पहले चरम बिंदुओं पर क्षण भर के लिए रुक जाता है, इसलिए उसका वेग शून्य होता है।"
    },
    {
        question: "प्रश्न 7. सरल आवर्त गति में, कण का त्वरण माध्य स्थिति पर कितना होता है?",
        answers: shuffle([
            { text: "अधिकतम", correct: false },
            { text: "न्यूनतम", correct: false },
            { text: "शून्य", correct: true },
            { text: "एकसमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्य स्थिति पर विस्थापन शून्य होता है, इसलिए प्रत्यानयन बल और परिणामी त्वरण भी शून्य होता है।"
    },
    {
        question: "प्रश्न 8. एक पूर्ण दोलन में लगा समय क्या कहलाता है?",
        answers: shuffle([
            { text: "आवृत्ति", correct: false },
            { text: "आवर्तकाल", correct: true },
            { text: "आयाम", correct: false },
            { text: "कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी कण द्वारा एक पूर्ण दोलन या कंपन को पूरा करने में लगने वाले समय को उसका आवर्तकाल (Time Period) कहते हैं।"
    },
    {
        question: "प्रश्न 9. एक सेकंड में किए गए दोलनों की संख्या को क्या कहते हैं?",
        answers: shuffle([
            { text: "आवर्तकाल", correct: false },
            { text: "आयाम", correct: false },
            { text: "आवृत्ति", correct: true },
            { text: "तरंगदैर्घ्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवृत्ति (Frequency) प्रति इकाई समय (एक सेकंड) में होने वाले दोलनों की संख्या है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मात्रक हर्ट्ज (Hz) है।"
    },
    {
        question: "प्रश्न 10. आवर्तकाल (T) और आवृत्ति (f) के बीच क्या संबंध है?",
        answers: shuffle([
            { text: "T=f", correct: false },
            { text: "T=1/f", correct: true },
            { text: "T=f²", correct: false },
            { text: "T=2f", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्तकाल और आवृत्ति एक दूसरे के व्युत्क्रमानुपाती होते हैं।"
    },
    {
        question: "प्रश्न 11. सरल आवर्त गति में, माध्य स्थिति से अधिकतम विस्थापन को क्या कहते हैं?",
        answers: shuffle([
            { text: "आवर्तकाल", correct: false },
            { text: "आवृत्ति", correct: false },
            { text: "कला", correct: false },
            { text: "आयाम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयाम (Amplitude) दोलन कर रहे कण का उसकी माध्य स्थिति से किसी एक ओर का अधिकतम विस्थापन होता है।"
    },
    {
        question: "प्रश्न 12. एक सरल लोलक की गति, यदि आयाम बहुत छोटा हो, तो किस प्रकार की गति होती है?",
        answers: shuffle([
            { text: "वृत्तीय गति", correct: false },
            { text: "एकसमान गति", correct: false },
            { text: "सरल आवर्त गति", correct: true },
            { text: "प्रक्षेप्य गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटे कोणीय विस्थापनों के लिए, एक सरल लोलक का दोलन लगभग सरल आवर्त गति होता है।"
    },
    {
        question: "प्रश्न 13. सरल आवर्त गति करते हुए कण की कुल ऊर्जा...",
        answers: shuffle([
            { text: "हमेशा बढ़ती है।", correct: false },
            { text: "हमेशा घटती है।", correct: false },
            { text: "संरक्षित रहती है।", correct: true },
            { text: "माध्य स्थिति पर शून्य होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि कोई अवमंदन बल (जैसे वायु प्रतिरोध) न हो, तो सरल आवर्त गति में कण की कुल यांत्रिक ऊर्जा (गतिज + स्थितिज) संरक्षित रहती है।"
    },
    {
        question: "प्रश्न 14. सरल आवर्त गति में, कण की गतिज ऊर्जा कहाँ अधिकतम होती है?",
        answers: shuffle([
            { text: "चरम स्थितियों पर", correct: false },
            { text: "माध्य स्थिति पर", correct: true },
            { text: "हर जगह समान", correct: false },
            { text: "माध्य और चरम स्थिति के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि माध्य स्थिति पर वेग अधिकतम होता है, इसलिए गतिज ऊर्जा (1/2mv²) भी वहीं अधिकतम होती है।"
    },
    {
        question: "प्रश्न 15. सरल आवर्त गति में, कण की स्थितिज ऊर्जा कहाँ अधिकतम होती है?",
        answers: shuffle([
            { text: "माध्य स्थिति पर", correct: false },
            { text: "चरम स्थितियों पर", correct: true },
            { text: "हर जगह शून्य", correct: false },
            { text: "माध्य और चरम स्थिति के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चरम स्थितियों पर विस्थापन अधिकतम होता है, जिससे संग्रहीत स्थितिज ऊर्जा भी अधिकतम होती है।"
    },
    {
        question: "प्रश्न 16. सरल आवर्त गति में, माध्य स्थिति पर कण की कौन सी ऊर्जा शून्य होती है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "स्थितिज ऊर्जा", correct: true },
            { text: "कुल ऊर्जा", correct: false },
            { text: "यांत्रिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्य स्थिति को शून्य विस्थापन का बिंदु माना जाता है, इसलिए यहाँ पर स्थितिज ऊर्जा शून्य होती है।"
    },
    {
        question: "प्रश्न 17. सरल आवर्त गति में, चरम स्थितियों पर कण की कौन सी ऊर्जा शून्य होती है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: true },
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "कुल ऊर्जा", correct: false },
            { text: "प्रत्यास्थ ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि चरम स्थितियों पर वेग शून्य होता है, इसलिए गतिज ऊर्जा भी शून्य होती है।"
    },
    {
        question: "प्रश्न 18. किसी क्षण पर दोलन करते कण की स्थिति और गति की दिशा को व्यक्त करने वाली राशि को क्या कहते हैं?",
        answers: shuffle([
            { text: "आयाम", correct: false },
            { text: "आवृत्ति", correct: false },
            { text: "कला", correct: true },
            { text: "आवर्तकाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कला (Phase) एक कोण है जो किसी निश्चित समय पर कण की स्थिति और गति की दिशा का वर्णन करता है।"
    },
    {
        question: "प्रश्न 19. एक स्प्रिंग से लटके द्रव्यमान की गति क्या है?",
        answers: shuffle([
            { text: "वृत्तीय गति", correct: false },
            { text: "सरल आवर्त गति", correct: true },
            { text: "एकसमान गति", correct: false },
            { text: "प्रक्षेप्य गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक स्प्रिंग से जुड़े द्रव्यमान को विस्थापित करके छोड़ा जाता है, तो वह अपनी माध्य स्थिति के इधर-उधर सरल आवर्त गति करता है।"
    },
    {
        question: "प्रश्न 20. झूले पर झूलते हुए एक व्यक्ति यदि खड़ा हो जाए, तो झूले का आवर्तकाल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "शून्य हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खड़े होने पर, गुरुत्व केंद्र ऊपर उठ जाता है, जिससे लोलक की प्रभावी लंबाई कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि आवर्तकाल लंबाई के वर्गमूल के समानुपाती होता है, इसलिए आवर्तकाल घट जाएगा।"
    },
    {
        question: "प्रश्न 21. एक सरल लोलक का आवर्तकाल किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "लोलक की लंबाई पर", correct: false },
            { text: "गुरुत्वीय त्वरण पर", correct: false },
            { text: "लोलक के गोलक के द्रव्यमान पर", correct: true },
            { text: "स्थान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श सरल लोलक का आवर्तकाल उसके गोलक (bob) के द्रव्यमान और आयाम (छोटे आयामों के लिए) से स्वतंत्र होता है।"
    },
    {
        question: "प्रश्न 22. यदि एक सरल लोलक को चंद्रमा पर ले जाया जाए, तो उसका आवर्तकाल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: true },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "अनंत हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा पर गुरुत्वीय त्वरण (g) पृथ्वी की तुलना में कम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि आवर्तकाल 'g' के वर्गमूल के व्युत्क्रमानुपाती होता है (T∝1/g​), इसलिए 'g' कम होने पर आवर्तकाल बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 23. सेकंड लोलक (Seconds Pendulum) का आवर्तकाल कितना होता है?",
        answers: shuffle([
            { text: "1 सेकंड", correct: false },
            { text: "2 सेकंड", correct: true },
            { text: "0.5 सेकंड", correct: false },
            { text: "4 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेकंड लोलक वह लोलक है जिसका आवर्तकाल ठीक 2 सेकंड होता है (एक चरम से दूसरे तक जाने में 1 सेकंड)।"
    },
    {
        question: "प्रश्न 24. गर्मियों में लोलक वाली घड़ियाँ सुस्त क्यों हो जाती हैं?",
        answers: shuffle([
            { text: "हवा के प्रतिरोध के कारण।", correct: false },
            { text: "तापमान बढ़ने से लोलक की लंबाई बढ़ जाती है।", correct: true },
            { text: "गुरुत्वीय त्वरण कम हो जाता है।", correct: false },
            { text: "तापमान बढ़ने से लोलक की लंबाई घट जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्मीय प्रसार के कारण गर्मियों में लोलक की लंबाई थोड़ी बढ़ जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबाई बढ़ने से आवर्तकाल बढ़ जाता है, जिससे घड़ी सुस्त हो जाती है।"
    },
    {
        question: "प्रश्न 25. सरल आवर्त गति में, विस्थापन और त्वरण के बीच कलांतर (phase difference) कितना होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "90 डिग्री (π/2 रेडियन)", correct: false },
            { text: "180 डिग्री (π रेडियन)", correct: true },
            { text: "270 डिग्री (3π/2 रेडियन)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण हमेशा विस्थापन की विपरीत दिशा में होता है (a∝−x), इसलिए उनके बीच 180 डिग्री का कलांतर होता है।"
    },
    {
        question: "प्रश्न 26. सरल आवर्त गति में, वेग और विस्थापन के बीच कलांतर कितना होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "90 डिग्री (π/2 रेडियन)", correct: true },
            { text: "180 डिग्री (π रेडियन)", correct: false },
            { text: "45 डिग्री (π/4 रेडियन)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब विस्थापन शून्य (माध्य स्थिति) होता है, तो वेग अधिकतम होता है, और जब विस्थापन अधिकतम (चरम स्थिति) होता है, तो वेग शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 90 डिग्री का कलांतर दर्शाता है।"
    },
    {
        question: "प्रश्न 27. किसी दोलनी गति में ऊर्जा का क्षय होने पर दोलनों का आयाम धीरे-धीरे कम हो जाता है। इस गति को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रणोदित दोलन", correct: false },
            { text: "अवमंदित दोलन", correct: true },
            { text: "सरल आवर्त गति", correct: false },
            { text: "अनुनाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई अवरोधी बल (जैसे घर्षण या वायु प्रतिरोध) दोलक की ऊर्जा को लगातार कम करता है, तो उसे अवमंदित दोलन (Damped Oscillation) कहते हैं।"
    },
    {
        question: "प्रश्न 28. जब किसी दोलक पर एक बाह्य आवर्ती बल लगाया जाता है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "मुक्त दोलन", correct: false },
            { text: "अवमंदित दोलन", correct: false },
            { text: "प्रणोदित दोलन", correct: true },
            { text: "सरल आवर्त गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रणोदित दोलन (Forced Oscillation) में, एक बाहरी स्रोत लगातार दोलक को ऊर्जा प्रदान करता है।"
    },
    {
        question: "प्रश्न 29. अनुनाद (Resonance) की घटना कब होती है?",
        answers: shuffle([
            { text: "जब बाह्य बल की आवृत्ति दोलक की स्वाभाविक आवृत्ति से बहुत कम होती है।", correct: false },
            { text: "जब बाह्य बल की आवृत्ति दोलक की स्वाभाविक आवृत्ति से बहुत अधिक होती है।", correct: false },
            { text: "जब बाह्य बल की आवृत्ति दोलक की स्वाभाविक आवृत्ति के बराबर हो जाती है।", correct: true },
            { text: "जब कोई बाह्य बल नहीं होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनाद एक विशेष स्थिति है जिसमें प्रणोदित दोलनों का आयाम बहुत अधिक बढ़ जाता है क्योंकि चालक बल की आवृत्ति वस्तु की प्राकृतिक आवृत्ति से मेल खाती है।"
    },
    {
        question: "प्रश्न 30. सैनिकों को पुल पार करते समय कदम से कदम मिलाकर न चलने की सलाह क्यों दी जाती है?",
        answers: shuffle([
            { text: "थकान से बचने के लिए।", correct: false },
            { text: "अनुशासन बनाए रखने के लिए।", correct: false },
            { text: "अनुनाद की घटना से बचने के लिए।", correct: true },
            { text: "पुल को गंदा होने से बचाने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि सैनिकों के कदमों की आवृत्ति पुल की स्वाभाविक आवृत्ति से मेल खा गई, तो अनुनाद के कारण पुल में बड़े आयाम के कंपन उत्पन्न हो सकते हैं, जिससे उसके टूटने का खतरा होता है।"
    },
    {
        question: "प्रश्न 31. सरल आवर्त गति किसका प्रक्षेपण है?",
        answers: shuffle([
            { text: "एकसमान प्रक्षेप्य गति का", correct: false },
            { text: "एकसमान वृत्तीय गति का उसके किसी व्यास पर", correct: true },
            { text: "असमान वृत्तीय गति का", correct: false },
            { text: "एक सीधी रेखा पर गति का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि कोई कण एक वृत्त पर एकसमान चाल से चलता है, तो उस कण का किसी भी व्यास पर बना प्रक्षेप (छाया) सरल आवर्त गति करता है।"
    },
    {
        question: "प्रश्न 32. एक U-नली में दोलन करता द्रव स्तंभ किस गति का उदाहरण है?",
        answers: shuffle([
            { text: "सरल आवर्त गति", correct: true },
            { text: "घूर्णी गति", correct: false },
            { text: "एकसमान गति", correct: false },
            { text: "अनियमित गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि U-नली में द्रव को थोड़ा विस्थापित करके छोड़ दिया जाए, तो वह अपनी माध्य स्थिति के इधर-उधर लगभग सरल आवर्त गति करता है।"
    },
    {
        question: "प्रश्न 33. सरल आवर्त गति में, कौन सी राशि समय के साथ ज्यावक्रीय (sinusoidally) रूप से बदलती है?",
        answers: shuffle([
            { text: "केवल विस्थापन", correct: false },
            { text: "केवल वेग", correct: false },
            { text: "केवल त्वरण", correct: false },
            { text: "विस्थापन, वेग और त्वरण तीनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल आवर्त गति में, विस्थापन, वेग और त्वरण सभी समय के फलन के रूप में साइन (sine) या कोसाइन (cosine) वक्र का अनुसरण करते हैं।"
    },
    {
        question: "प्रश्न 34. एक स्प्रिंग का बल नियतांक (k) क्या दर्शाता है?",
        answers: shuffle([
            { text: "स्प्रिंग की लंबाई", correct: false },
            { text: "स्प्रिंग का द्रव्यमान", correct: false },
            { text: "स्प्रिंग की कठोरता", correct: true },
            { text: "स्प्रिंग का पदार्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल नियतांक 'k' स्प्रिंग की कठोरता का माप है।<br><br><i class='fa-solid fa-angles-right icon'></i> अधिक 'k' का मान मतलब अधिक कठोर स्प्रिंग, जिसे खींचने या दबाने के लिए अधिक बल की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 35. एक स्प्रिंग-द्रव्यमान निकाय का आवर्तकाल स्प्रिंग के बल नियतांक (k) पर कैसे निर्भर करता है?",
        answers: shuffle([
            { text: "'k' के समानुपाती", correct: false },
            { text: "'k' के व्युत्क्रमानुपाती", correct: false },
            { text: "'k' के वर्गमूल के समानुपाती", correct: false },
            { text: "'k' के वर्गमूल के व्युत्क्रमानुपाती", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्तकाल का सूत्र T∝1/√k होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यानी, जितनी कठोर स्प्रिंग होगी, आवर्तकाल उतना ही कम होगा।"
    },
    {
        question: "प्रश्न 36. एक स्प्रिंग-द्रव्यमान निकाय का आवर्तकाल द्रव्यमान (m) पर कैसे निर्भर करता है?",
        answers: shuffle([
            { text: "'m' के समानुपाती", correct: false },
            { text: "'m' के व्युत्क्रमानुपाती", correct: false },
            { text: "'m' के वर्गमूल के समानुपाती", correct: true },
            { text: "'m' के वर्गमूल के व्युत्क्रमानुपाती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्तकाल का सूत्र T∝√m होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यानी, जितना भारी द्रव्यमान होगा, आवर्तकाल उतना ही अधिक होगा।"
    },
    {
        question: "प्रश्न 37. सरल आवर्त गति में, जब कण माध्य स्थिति से आयाम की आधी दूरी पर होता है, तो उसकी ऊर्जा का कितना भाग गतिज और कितना स्थितिज होता है?",
        answers: shuffle([
            { text: "आधी गतिज, आधी स्थितिज", correct: false },
            { text: "एक-चौथाई स्थितिज, तीन-चौथाई गतिज", correct: true },
            { text: "तीन-चौथाई स्थितिज, एक-चौथाई गतिज", correct: false },
            { text: "सारी ऊर्जा गतिज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थितिज ऊर्जा विस्थापन के वर्ग के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> आधी दूरी पर, स्थितिज ऊर्जा कुल ऊर्जा की एक-चौथाई होती है, और शेष तीन-चौथाई गतिज ऊर्जा होती है।"
    },
    {
        question: "प्रश्न 38. निम्नलिखित में से कौन सी गति आवश्यक रूप से आवर्ती है?",
        answers: shuffle([
            { text: "एक सीधी सड़क पर कार की गति", correct: false },
            { text: "पृथ्वी का अपनी धुरी पर घूमना", correct: true },
            { text: "एक पेड़ से गिरता हुआ पत्ता", correct: false },
            { text: "एक बल्लेबाज द्वारा मारा गया शॉट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्ती गति वह है जो एक निश्चित समय के बाद खुद को दोहराती है।<br><br><i class='fa-solid fa-angles-right icon'></i> पृथ्वी का घूर्णन एक निश्चित आवर्तकाल (24 घंटे) के साथ एक आवर्ती गति है।"
    },
    {
        question: "प्रश्न 39. क्या सभी दोलनी गतियाँ आवर्ती होती हैं?",
        answers: shuffle([
            { text: "हाँ", correct: true },
            { text: "नहीं", correct: false },
            { text: "केवल यदि आयाम छोटा हो", correct: false },
            { text: "केवल निर्वात में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोलनी गति (Oscillatory motion) में वस्तु एक माध्य स्थिति के इधर-उधर गति करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह परिभाषा के अनुसार एक निश्चित समय में खुद को दोहराती है, इसलिए यह हमेशा आवर्ती होती है।"
    },
    {
        question: "प्रश्न 40. क्या सभी आवर्ती गतियाँ दोलनी होती हैं?",
        answers: shuffle([
            { text: "हाँ, हमेशा", correct: false },
            { text: "नहीं, आवश्यक नहीं", correct: true },
            { text: "केवल यदि वे सरल आवर्त गति हों", correct: false },
            { text: "केवल यदि वे वृत्ताकार हों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वृत्त में एकसमान गति आवर्ती है, लेकिन यह दोलनी नहीं है क्योंकि यह किसी माध्य स्थिति के इधर-उधर नहीं होती है।"
    },
    {
        question: "प्रश्न 41. सरल आवर्त गति की आवश्यक शर्त क्या है?",
        answers: shuffle([
            { text: "गति एक सीधी रेखा में होनी चाहिए।", correct: false },
            { text: "प्रत्यानयन बल विस्थापन के समानुपाती और विपरीत दिशा में होना चाहिए।", correct: true },
            { text: "आवर्तकाल हमेशा 2 सेकंड होना चाहिए।", correct: false },
            { text: "आयाम बहुत बड़ा होना चाहिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सरल आवर्त गति की मूल और सबसे महत्वपूर्ण परिभाषा है (F∝−x)।"
    },
    {
        question: "प्रश्न 42. लिसाजू आकृतियाँ (Lissajous figures) कब बनती हैं?",
        answers: shuffle([
            { text: "जब दो सरल आवर्त गतियाँ एक ही दिशा में मिलती हैं।", correct: false },
            { text: "जब दो सरल आवर्त गतियाँ एक दूसरे के लंबवत मिलती हैं।", correct: true },
            { text: "जब एक सरल आवर्त गति अवमंदित होती है।", correct: false },
            { text: "अनुनाद की स्थिति में।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक कण पर एक साथ दो लंबवत सरल आवर्त गतियाँ कार्य करती हैं, तो उसके पथ से जो आकृतियाँ बनती हैं, उन्हें लिसाजू आकृतियाँ कहते हैं।"
    },
    {
        question: "प्रश्न 43. सरल आवर्त गति में, समय के साथ गतिज और स्थितिज ऊर्जा का परिवर्तन...",
        answers: shuffle([
            { text: "स्थिर रहता है।", correct: false },
            { text: "आवर्ती रूप से होता है।", correct: true },
            { text: "रैखिक रूप से होता है।", correct: false },
            { text: "चरघातांकी रूप से होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा स्थितिज ऊर्जा में और स्थितिज ऊर्जा गतिज ऊर्जा में लगातार बदलती रहती है, और यह परिवर्तन भी आवर्ती होता है।"
    },
    {
        question: "प्रश्न 44. सरल आवर्त गति की आवृत्ति किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल आयाम पर", correct: false },
            { text: "दोलक के भौतिक गुणों (जैसे द्रव्यमान, लंबाई, कठोरता) पर", correct: true },
            { text: "प्रारंभिक वेग पर", correct: false },
            { text: "गति की दिशा पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी निकाय की स्वाभाविक आवृत्ति उसके आंतरिक गुणों द्वारा निर्धारित होती है, न कि इस बात से कि दोलन कैसे शुरू हुआ।"
    },
    {
        question: "प्रश्न 45. यदि एक सरल लोलक एक ऐसी लिफ्ट में है जो ऊपर की ओर त्वरित हो रही है, तो उसका आवर्तकाल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "शून्य हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊपर की ओर त्वरित होने पर, प्रभावी गुरुत्वीय त्वरण (geff​=g+a) बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि T∝1/√g, प्रभावी 'g' बढ़ने से आवर्तकाल घट जाएगा।"
    },
    {
        question: "प्रश्न 46. अवमंदन बल की दिशा हमेशा...",
        answers: shuffle([
            { text: "गति की दिशा में होती है।", correct: false },
            { text: "गति की दिशा के विपरीत होती है।", correct: true },
            { text: "विस्थापन की दिशा में होती है।", correct: false },
            { text: "त्वरण की दिशा में होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवमंदन बल (जैसे वायु प्रतिरोध) हमेशा गति का विरोध करता है, जिससे दोलक की ऊर्जा कम हो जाती है।"
    },
    {
        question: "प्रश्न 47. तनी हुई डोरी में कंपन किस प्रकार की गति है?",
        answers: shuffle([
            { text: "सरल आवर्त गति", correct: false },
            { text: "प्रक्षेप्य गति", correct: false },
            { text: "वृत्तीय गति", correct: false },
            { text: "यह एक तरंग गति है जिसमें प्रत्येक कण सरल आवर्त गति करता है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सितार या गिटार के तार में, पूरा तार एक तरंग पैटर्न में कंपन करता है, लेकिन तार का प्रत्येक छोटा खंड अपनी माध्य स्थिति के बारे में सरल आवर्त गति करता है।"
    },
    {
        question: "प्रश्न 48. सरल आवर्त गति में, जब गतिज ऊर्जा और स्थितिज ऊर्जा बराबर होती हैं, तो विस्थापन कितना होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "आयाम के बराबर", correct: false },
            { text: "A/√2", correct: true },
            { text: "A/2", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब दोनों ऊर्जाएँ बराबर होती हैं, तो प्रत्येक कुल ऊर्जा का आधा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह x=±A/√2 विस्थापन पर होता है।"
    },
    {
        question: "प्रश्न 49. एक खोखले गोले में भरे पारे से बना एक लोलक दोलन कर रहा है। यदि पारा धीरे-धीरे नीचे से निकल जाए, तो आवर्तकाल...",
        answers: shuffle([
            { text: "लगातार बढ़ेगा।", correct: false },
            { text: "लगातार घटेगा।", correct: false },
            { text: "पहले बढ़ेगा और फिर अपने मूल मान पर वापस आ जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे-जैसे पारा निकलता है, गुरुत्व केंद्र नीचे जाता है, जिससे प्रभावी लंबाई बढ़ती है और आवर्तकाल बढ़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब सारा पारा निकल जाता है, तो गुरुत्व केंद्र वापस खोखले गोले के केंद्र में आ जाता है, और आवर्तकाल अपने प्रारंभिक मान पर लौट आता है।"
    },
    {
        question: "प्रश्न 50. अनुनाद का एक व्यावहारिक उदाहरण है:",
        answers: shuffle([
            { text: "एक गेंद का गिरना", correct: false },
            { text: "एक कार का चलना", correct: false },
            { text: "रेडियो का एक विशिष्ट स्टेशन पर ट्यून होना", correct: true },
            { text: "एक नाव का तैरना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडियो ट्यूनिंग में, हम सर्किट की आवृत्ति को आने वाली रेडियो तरंगों की आवृत्ति से मिलाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जब वे मेल खाते हैं, तो अनुनाद होता है, और वह स्टेशन स्पष्ट रूप से सुनाई देता है।"
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