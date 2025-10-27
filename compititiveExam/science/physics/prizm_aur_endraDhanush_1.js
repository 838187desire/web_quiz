const questions = [
    {
        topHeading: "प्रिज्म और वर्ण-विक्षेपण पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. प्रिज्म क्या है?",
        answers: shuffle([
            { text: "एक गोलाकार पारदर्शी माध्यम", correct: false },
            { text: "एक बेलनाकार पारदर्शी माध्यम", correct: false },
            { text: "किसी कोण पर झुके दो समतल पृष्ठों से घिरा एक समांग पारदर्शी माध्यम", correct: true },
            { text: "एक अपारदर्शी वस्तु जो प्रकाश को रोकती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रिज्म की मानक परिभाषा के अनुसार, यह दो समतल सतहों से बना होता है जो एक दूसरे के साथ एक कोण पर झुकी होती हैं।"
    },
    {
        question: "प्रश्न 2. जब सफेद प्रकाश की किरण एक प्रिज्म से होकर गुजरती है, तो वह अपने घटक रंगों में विभाजित हो जाती है। इस घटना को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रकाश का परावर्तन", correct: false },
            { text: "प्रकाश का अपवर्तन", correct: false },
            { text: "प्रकाश का वर्ण-विक्षेपण", correct: true },
            { text: "प्रकाश का विवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेत प्रकाश का अपने सात संघटक रंगों में विभक्त होने की प्रक्रिया को वर्ण-विक्षेपण (Dispersion) कहते हैं।"
    },
    {
        question: "प्रश्न 3. प्रकाश के वर्ण-विक्षेपण का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "प्रिज्म प्रकाश को रंगीन बना देता है।", correct: false },
            { text: "विभिन्न रंगों के प्रकाश की चाल प्रिज्म के पदार्थ में भिन्न-भिन्न होती है।", correct: true },
            { text: "प्रकाश प्रिज्म की सतहों से परावर्तित होता है।", correct: false },
            { text: "प्रिज्म प्रकाश की ऊर्जा को सोख लेता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रिज्म के पदार्थ का अपवर्तनांक प्रत्येक रंग के लिए थोड़ा अलग होता है, जिससे प्रत्येक रंग अलग-अलग कोण पर मुड़ता है और वे अलग हो जाते हैं।"
    },
    {
        question: "प्रश्न 4. प्रिज्म से गुजरने पर कौन सा रंग सबसे अधिक विचलित (मुड़ता) होता है?",
        answers: shuffle([
            { text: "लाल", correct: false },
            { text: "हरा", correct: false },
            { text: "पीला", correct: false },
            { text: "बैंगनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैंगनी रंग के प्रकाश का तरंगदैर्ध्य सबसे कम होता है, इसलिए प्रिज्म के पदार्थ में उसकी चाल सबसे कम होती है और वह सबसे अधिक विचलित होता है।"
    },
    {
        question: "प्रश्न 5. प्रिज्म से गुजरने पर कौन सा रंग सबसे कम विचलित (मुड़ता) होता है?",
        answers: shuffle([
            { text: "लाल", correct: true },
            { text: "नीला", correct: false },
            { text: "नारंगी", correct: false },
            { text: "बैंगनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल रंग के प्रकाश का तरंगदैर्ध्य सबसे अधिक होता है, इसलिए प्रिज्म के पदार्थ में उसकी चाल सबसे अधिक होती है और वह सबसे कम विचलित होता है।"
    },
    {
        question: "प्रश्न 6. इंद्रधनुष बनने का क्या कारण है?",
        answers: shuffle([
            { text: "वायु में धूल के कणों द्वारा प्रकाश का परावर्तन", correct: false },
            { text: "वायु में उपस्थित पानी की बूंदों द्वारा सूर्य के प्रकाश का विक्षेपण, अपवर्तन और पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "बादलों द्वारा प्रकाश का अवशोषण", correct: false },
            { text: "आकाश का नीला रंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्षा की बूंदें छोटे प्रिज्मों की तरह काम करती हैं, जो सूर्य के प्रकाश को विक्षेपित और परावर्तित करके इंद्रधनुष का निर्माण करती हैं।"
    },
    {
        question: "प्रश्न 7. इंद्रधनुष आकाश में हमेशा किस दिशा में दिखाई देता है?",
        answers: shuffle([
            { text: "सूर्य की दिशा में", correct: false },
            { text: "सूर्य के विपरीत दिशा में", correct: true },
            { text: "उत्तर दिशा में", correct: false },
            { text: "किसी भी दिशा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष देखने के लिए, प्रेक्षक की पीठ सूर्य की ओर होनी चाहिए और वर्षा की बूंदें सामने होनी चाहिए।"
    },
    {
        question: "प्रश्न 8. श्वेत प्रकाश के रंगों के क्रम (स्पेक्ट्रम) को याद रखने के लिए किस संक्षिप्त शब्द का प्रयोग किया जाता है?",
        answers: shuffle([
            { text: "ROYGBIV", correct: false },
            { text: "VIBGYOR", correct: true },
            { text: "BIVGYOR", correct: false },
            { text: "GIBVYOR", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह क्रम बैंगनी, जामुनी, नीला, हरा, पीला, नारंगी और लाल (Violet, Indigo, Blue, Green, Yellow, Orange, Red) को दर्शाता है।"
    },
    {
        question: "प्रश्न 9. प्राथमिक इंद्रधनुष में रंगों का क्रम बाहर से अंदर की ओर कैसा होता है?",
        answers: shuffle([
            { text: "बैंगनी से लाल", correct: false },
            { text: "लाल से बैंगनी", correct: true },
            { text: "हरा से पीला", correct: false },
            { text: "नीला से लाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राथमिक इंद्रधनुष में, जो अधिक चमकीला होता है, सबसे बाहरी चाप लाल रंग का और सबसे भीतरी चाप बैंगनी रंग का होता है।"
    },
    {
        question: "प्रश्न 10. द्वितीयक इंद्रधनुष प्राथमिक इंद्रधनुष के सापेक्ष कहाँ बनता है?",
        answers: shuffle([
            { text: "उसके नीचे", correct: false },
            { text: "उसके ऊपर", correct: true },
            { text: "उसके अंदर", correct: false },
            { text: "उसी स्थान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीयक इंद्रधनुष, जो कम चमकीला होता है, हमेशा प्राथमिक इंद्रधनुष के ऊपर आकाश में दिखाई देता है।"
    },
    {
        question: "प्रश्न 11. द्वितीयक इंद्रधनुष में रंगों का क्रम प्राथमिक इंद्रधनुष की तुलना में कैसा होता है?",
        answers: shuffle([
            { text: "समान होता है।", correct: false },
            { text: "उल्टा होता है।", correct: true },
            { text: "केवल लाल और बैंगनी होते हैं।", correct: false },
            { text: "कोई निश्चित क्रम नहीं होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीयक इंद्रधनुष में रंगों का क्रम उलट जाता है, अर्थात् सबसे बाहरी चाप बैंगनी और भीतरी चाप लाल होता है।"
    },
    {
        question: "प्रश्न 12. प्राथमिक इंद्रधनुष पानी की बूंद के अंदर प्रकाश के कितने पूर्ण आंतरिक परावर्तन के कारण बनता है?",
        answers: shuffle([
            { text: "एक", correct: true },
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राथमिक इंद्रधनुष के निर्माण में एक बार अपवर्तन, एक बार पूर्ण आंतरिक परावर्तन और फिर से एक बार अपवर्तन होता है।"
    },
    {
        question: "प्रश्न 13. द्वितीयक इंद्रधनुष पानी की बूंद के अंदर प्रकाश के कितने पूर्ण आंतरिक परावर्तन के कारण बनता है?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीयक इंद्रधनुष बनने की प्रक्रिया में दो बार पूर्ण आंतरिक परावर्तन होता है, जिससे अधिक ऊर्जा का क्षय होता है और यह धुंधला दिखाई देता है।"
    },
    {
        question: "प्रश्न 14. प्रिज्म के दो अपवर्तक पृष्ठों के बीच के कोण को क्या कहते हैं?",
        answers: shuffle([
            { text: "आपतन कोण", correct: false },
            { text: "निर्गत कोण", correct: false },
            { text: "प्रिज्म कोण या अपवर्तक कोण", correct: true },
            { text: "विचलन कोण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रिज्म की ज्यामिति का एक महत्वपूर्ण पैरामीटर है, जिसे 'A' अक्षर से दर्शाया जाता है।"
    },
    {
        question: "प्रश्न 15. आपतित किरण और निर्गत किरण के बीच के कोण को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रिज्म कोण", correct: false },
            { text: "क्रांतिक कोण", correct: false },
            { text: "विचलन कोण", correct: true },
            { text: "आपतन कोण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विचलन कोण (Angle of Deviation) यह मापता है कि प्रिज्म ने प्रकाश की किरण को उसके मूल पथ से कितना मोड़ा है।"
    },
    {
        question: "प्रश्न 16. न्यूनतम विचलन की स्थिति में, प्रिज्म के अंदर अपवर्तित किरण कैसी होती है?",
        answers: shuffle([
            { text: "प्रिज्म के आधार के समानांतर", correct: true },
            { text: "प्रिज्म के आधार के लंबवत", correct: false },
            { text: "आपतित किरण के समानांतर", correct: false },
            { text: "निर्गत किरण के लंबवत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह न्यूनतम विचलन की एक प्रमुख पहचान है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, आपतन कोण और निर्गत कोण भी बराबर होते हैं।"
    },
    {
        question: "प्रश्न 17. न्यूटन ने यह कैसे प्रदर्शित किया कि श्वेत प्रकाश सात रंगों का मिश्रण है?",
        answers: shuffle([
            { text: "एक प्रिज्म का उपयोग करके", correct: true },
            { text: "एक लेंस का उपयोग करके", correct: false },
            { text: "एक दर्पण का उपयोग करके", correct: false },
            { text: "एक दूरबीन का उपयोग करके", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन ने एक प्रिज्म का उपयोग करके सूर्य के प्रकाश को उसके सात रंगों में विभाजित किया और फिर दूसरे उल्टे प्रिज्म का उपयोग करके उन्हें फिर से सफेद प्रकाश में संयोजित किया।"
    },
    {
        question: "प्रश्न 18. इंद्रधनुष देखने के लिए क्या शर्तें आवश्यक हैं?",
        answers: shuffle([
            { text: "आकाश साफ होना चाहिए।", correct: false },
            { text: "सूर्य प्रेक्षक के पीछे होना चाहिए और वर्षा सामने होनी चाहिए।", correct: true },
            { text: "सूर्य प्रेक्षक के सामने होना चाहिए।", correct: false },
            { text: "रात का समय होना चाहिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का प्रकाश प्रेक्षक के पीछे से आकर सामने की वर्षा की बूंदों पर पड़ना चाहिए।"
    },
    {
        question: "प्रश्न 19. दोपहर के समय इंद्रधनुष क्यों नहीं दिखाई देता?",
        answers: shuffle([
            { text: "क्योंकि दोपहर में वर्षा नहीं होती।", correct: false },
            { text: "क्योंकि सूर्य सीधे सिर के ऊपर होता है।", correct: true },
            { text: "क्योंकि हवा बहुत तेज होती है।", correct: false },
            { text: "क्योंकि बादल घने होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष बनने के लिए आवश्यक ज्यामितीय स्थितियाँ (सूर्य की किरणों और दृष्टि रेखा के बीच का कोण) तब पूरी नहीं होतीं जब सूर्य आकाश में बहुत ऊँचा होता है।"
    },
    {
        question: "प्रश्न 20. एक प्रिज्म द्वारा उत्पन्न स्पेक्ट्रम में रंगों का क्रम किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "प्रिज्म के आकार पर", correct: false },
            { text: "प्रकाश की तीव्रता पर", correct: false },
            { text: "प्रकाश के तरंगदैर्ध्य पर", correct: true },
            { text: "कमरे के तापमान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक रंग का तरंगदैर्ध्य अलग होता है, जिसके कारण प्रिज्म के पदार्थ में उसका अपवर्तनांक और विचलन कोण अलग-अलग होता है।"
    },
    {
        question: "प्रश्न 21. आकाश में इंद्रधनुष का आकार कैसा होता है?",
        answers: shuffle([
            { text: "सीधी रेखा", correct: false },
            { text: "त्रिभुज", correct: false },
            { text: "वृत्ताकार चाप", correct: true },
            { text: "वर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष वास्तव में एक पूरा वृत्त होता है, लेकिन जमीन से हमें आमतौर पर केवल उसका ऊपरी आधा हिस्सा यानी एक चाप ही दिखाई देता है।"
    },
    {
        question: "प्रश्न 22. यदि आप एक हवाई जहाज से देखें तो इंद्रधनुष कैसा दिखाई दे सकता है?",
        answers: shuffle([
            { text: "एक छोटा बिंदु", correct: false },
            { text: "एक सीधी रेखा", correct: false },
            { text: "एक पूर्ण वृत्त", correct: true },
            { text: "दिखाई ही नहीं देगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि हवाई जहाज से क्षितिज (जमीन) की बाधा नहीं होती है, इसलिए सही परिस्थितियों में पूरा वृत्ताकार इंद्रधनुष देखना संभव है।"
    },
    {
        question: "प्रश्न 23. किस वैज्ञानिक ने सबसे पहले इंद्रधनुष की वैज्ञानिक व्याख्या की?",
        answers: shuffle([
            { text: "आइंस्टीन", correct: false },
            { text: "गैलीलियो", correct: false },
            { text: "रेने डेकार्टे", correct: true },
            { text: "न्यूटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेने डेकार्टे ने 1637 में अपवर्तन और परावर्तन के नियमों का उपयोग करके इंद्रधनुष के बनने की सही ज्यामितीय व्याख्या प्रस्तुत की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> न्यूटन ने बाद में इसमें विक्षेपण को जोड़ा।"
    },
    {
        question: "प्रश्न 24. \"अलेक्जेंडर का बैंड\" क्या है?",
        answers: shuffle([
            { text: "इंद्रधनुष में रंगों का क्रम", correct: false },
            { text: "प्राथमिक और द्वितीयक इंद्रधनुष के बीच का गहरा आकाश", correct: true },
            { text: "इंद्रधनुष की चौड़ाई", correct: false },
            { text: "एक प्रकार का प्रिज्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह आकाश का वह अपेक्षाकृत गहरा क्षेत्र है जो दो इंद्रधनुषों के बीच दिखाई देता है, जहाँ से बहुत कम प्रकाश परावर्तित होकर आता है।"
    },
    {
        question: "प्रश्न 25. प्रिज्म का उपयोग किस उपकरण में किया जाता है?",
        answers: shuffle([
            { text: "सूक्ष्मदर्शी", correct: false },
            { text: "टेलीफोन", correct: false },
            { text: "स्पेक्ट्रोमीटर या वर्णक्रममापी", correct: true },
            { text: "बैरोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेक्ट्रोमीटर एक उपकरण है जो प्रकाश को उसके स्पेक्ट्रम में विभाजित करके उसका विश्लेषण करता है, और इसके लिए प्रिज्म एक मुख्य घटक है।"
    },
    {
        question: "प्रश्न 26. शुद्ध स्पेक्ट्रम प्राप्त करने के लिए क्या आवश्यक है?",
        answers: shuffle([
            { text: "एक मोटा प्रिज्म", correct: false },
            { text: "एक संकीर्ण प्रकाश स्रोत (स्लिट)", correct: true },
            { text: "एक रंगीन प्रकाश स्रोत", correct: false },
            { text: "एक बड़ा पर्दा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक संकीर्ण स्लिट यह सुनिश्चित करती है कि विभिन्न रंगों के स्पेक्ट्रम एक दूसरे पर अध्यारोपित न हों, जिससे एक स्पष्ट और शुद्ध स्पेक्ट्रम प्राप्त होता है।"
    },
    {
        question: "प्रश्न 27. जब प्रकाश की किरण प्रिज्म के एक पृष्ठ पर लंबवत आपतित होती है, तो आपतन कोण कितना होता है?",
        answers: shuffle([
            { text: "90 डिग्री", correct: false },
            { text: "45 डिग्री", correct: false },
            { text: "0 डिग्री", correct: true },
            { text: "180 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपतन कोण आपतित किरण और अभिलंब (जो सतह पर लंबवत होता है) के बीच का कोण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि किरण स्वयं सतह पर लंबवत है, तो यह अभिलंब के अनुदिश होगी, और कोण शून्य होगा।"
    },
    {
        question: "प्रश्न 28. चंद्रमा के प्रकाश से इंद्रधनुष क्यों नहीं बनता है?",
        answers: shuffle([
            { text: "क्योंकि चंद्रमा का प्रकाश बहुत धुंधला होता है।", correct: false },
            { text: "क्योंकि चंद्रमा का प्रकाश सफेद नहीं होता।", correct: false },
            { text: "क्योंकि चंद्रमा केवल रात में दिखाई देता है।", correct: false },
            { text: "यह बन सकता है, लेकिन बहुत दुर्लभ होता है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा के प्रकाश से भी इंद्रधनुष बन सकता है, जिसे 'मूनबो' (moonbow) कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन चंद्रमा का प्रकाश बहुत कमजोर होता है, इसलिए यह बहुत दुर्लभ और धुंधला दिखाई देता है, अक्सर सफेद रंग का।"
    },
    {
        question: "प्रश्न 29. किस घटना के कारण साबुन के बुलबुले रंगीन दिखाई देते हैं?",
        answers: shuffle([
            { text: "विक्षेपण", correct: false },
            { text: "व्यतिकरण", correct: true },
            { text: "विवर्तन", correct: false },
            { text: "ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह इंद्रधनुष से भिन्न घटना है।<br><br><i class='fa-solid fa-angles-right icon'></i> साबुन की पतली फिल्म की ऊपरी और निचली सतहों से परावर्तित प्रकाश तरंगों के व्यतिकरण (Interference) के कारण रंग दिखाई देते हैं।"
    },
    {
        question: "प्रश्न 30. पतले प्रिज्म द्वारा उत्पन्न विचलन कोण लगभग किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "प्रिज्म के कोण पर", correct: false },
            { text: "प्रिज्म के पदार्थ के अपवर्तनांक पर", correct: false },
            { text: "आपतन कोण पर", correct: true },
            { text: "प्रकाश के रंग पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहुत पतले प्रिज्मों के लिए, विचलन कोण आपतन कोण पर लगभग निर्भर नहीं करता और मुख्य रूप से प्रिज्म कोण और अपवर्तनांक पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 31. यदि कोई वस्तु लाल दिखाई देती है, तो इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "यह सभी रंगों को अवशोषित करती है।", correct: false },
            { text: "यह केवल लाल रंग को परावर्तित करती है और बाकी को अवशोषित कर लेती है।", correct: true },
            { text: "यह सभी रंगों को परावर्तित करती है।", correct: false },
            { text: "यह लाल रंग उत्सर्जित करती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी अपारदर्शी वस्तु का रंग उस रंग से निर्धारित होता है जिसे वह परावर्तित करती है।"
    },
    {
        question: "प्रश्न 32. प्राथमिक रंग कौन से हैं?",
        answers: shuffle([
            { text: "लाल, पीला, नीला", correct: false },
            { text: "लाल, हरा, नीला", correct: true },
            { text: "लाल, नारंगी, पीला", correct: false },
            { text: "बैंगनी, हरा, नीला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश के संदर्भ में, लाल, हरा और नीला (RGB) प्राथमिक रंग हैं क्योंकि इन्हें मिलाकर अन्य सभी रंग बनाए जा सकते हैं।"
    },
    {
        question: "प्रश्न 33. यदि लाल और हरे प्रकाश को मिलाया जाए, तो कौन सा रंग बनेगा?",
        answers: shuffle([
            { text: "सफेद", correct: false },
            { text: "मैजेंटा", correct: false },
            { text: "पीला", correct: true },
            { text: "सियान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रकाश के योगात्मक मिश्रण का एक उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> टेलीविजन स्क्रीन इसी सिद्धांत पर काम करती है।"
    },
    {
        question: "प्रश्न 34. क्या इंद्रधनुष एक भौतिक वस्तु है जिसे छुआ जा सकता है?",
        answers: shuffle([
            { text: "हाँ, यह पानी की बूंदों का एक संग्रह है।", correct: false },
            { text: "नहीं, यह एक प्रकाशिक भ्रम है।", correct: true },
            { text: "केवल हवाई जहाज से इसे छुआ जा सकता है।", correct: false },
            { text: "यह ठोस होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष की कोई निश्चित स्थिति नहीं होती है; यह प्रेक्षक की स्थिति और सूर्य की स्थिति के सापेक्ष बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> आप कभी भी इंद्रधनुष के अंत तक नहीं पहुँच सकते।"
    },
    {
        question: "प्रश्न 35. प्रिज्म में, आपतन कोण बढ़ने पर विचलन कोण का मान...",
        answers: shuffle([
            { text: "हमेशा बढ़ता है।", correct: false },
            { text: "हमेशा घटता है।", correct: false },
            { text: "पहले घटता है, न्यूनतम होता है, और फिर बढ़ता है।", correct: true },
            { text: "अपरिवर्तित रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विचलन कोण और आपतन कोण के बीच का विशिष्ट संबंध है, जिसके ग्राफ़ का आकार 'U' जैसा होता है।"
    },
    {
        question: "प्रश्न 36. प्रत्यक्ष दृष्टि स्पेक्ट्रोस्कोप में किस प्रकार के प्रिज्मों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "केवल एक क्राउन कांच का प्रिज्म", correct: false },
            { text: "केवल एक फ्लिंट कांच का प्रिज्म", correct: false },
            { text: "क्राउन और फ्लिंट कांच के प्रिज्मों का एक संयोजन", correct: true },
            { text: "खोखले प्रिज्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस संयोजन को इस प्रकार व्यवस्थित किया जाता है कि यह विक्षेपण तो उत्पन्न करता है लेकिन माध्य किरण के लिए कोई विचलन उत्पन्न नहीं करता, जिससे सीधा देखा जा सकता है।"
    },
    {
        question: "प्रश्न 37. यदि श्वेत प्रकाश के मार्ग में एक लाल कांच रख दिया जाए, तो हमें कौन सा रंग दिखाई देगा?",
        answers: shuffle([
            { text: "सफेद", correct: false },
            { text: "लाल", correct: true },
            { text: "काला", correct: false },
            { text: "हरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल कांच केवल लाल रंग के प्रकाश को अपने से होकर गुजरने देता है और बाकी सभी रंगों को अवशोषित कर लेता है।"
    },
    {
        question: "प्रश्न 38. दो इंद्रधनुषों के बीच का आकाश गहरा क्यों होता है?",
        answers: shuffle([
            { text: "क्योंकि वहां बादल होते हैं।", correct: false },
            { text: "क्योंकि उस दिशा से कोई प्रकाश परावर्तित होकर प्रेक्षक तक नहीं पहुँचता है।", correct: true },
            { text: "यह एक दृष्टि भ्रम है।", correct: false },
            { text: "क्योंकि वहां हवा सघन होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष बनने की ज्यामिति के कारण, प्राथमिक और द्वितीयक चापों के बीच के कोणों से कोई भी विक्षेपित प्रकाश प्रेक्षक की आंख तक नहीं पहुंच पाता है।"
    },
    {
        question: "प्रश्न 39. \"स्पेक्ट्रम\" शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "प्रकाश की गति", correct: false },
            { text: "रंगों या तरंगदैर्ध्य का एक बैंड या क्रम", correct: true },
            { text: "एक प्रकार का लेंस", correct: false },
            { text: "प्रकाश की तीव्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेक्ट्रम किसी भी तरंग (जैसे प्रकाश या ध्वनि) को उसके घटक आवृत्तियों या तरंगदैर्ध्य के क्रम में व्यवस्थित करने को कहते हैं।"
    },
    {
        question: "प्रश्न 40. अवर्णक प्रिज्म (Achromatic Prism) का क्या कार्य है?",
        answers: shuffle([
            { text: "केवल विक्षेपण उत्पन्न करना", correct: false },
            { text: "केवल विचलन उत्पन्न करना, विक्षेपण नहीं", correct: true },
            { text: "प्रकाश को सात रंगों में विभाजित करना", correct: false },
            { text: "प्रकाश को अवशोषित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दो अलग-अलग पदार्थों के प्रिज्मों का एक संयोजन है जो प्रकाश को बिना विक्षेपित किए (यानी बिना रंगों में तोड़े) केवल मोड़ने के लिए डिज़ाइन किया गया है।"
    },
    {
        question: "प्रश्न 41. एक प्रिज्म पर आपतित होने वाले प्रकाश का रंग बदलने पर क्या नहीं बदलेगा?",
        answers: shuffle([
            { text: "विचलन कोण", correct: false },
            { text: "अपवर्तनांक", correct: false },
            { text: "प्रिज्म कोण", correct: true },
            { text: "निर्गत कोण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रिज्म कोण (A) प्रिज्म की ज्यामितीय विशेषता है और यह उस पर पड़ने वाले प्रकाश के रंग पर निर्भर नहीं करता है।"
    },
    {
        question: "प्रश्न 42. इंद्रधनुष में दिखाई देने वाले रंग किसके कारण होते हैं?",
        answers: shuffle([
            { text: "पानी की बूंदों के रंग के कारण", correct: false },
            { text: "सूर्य के प्रकाश के विक्षेपण के कारण", correct: true },
            { text: "हवा में मौजूद गैसों के कारण", correct: false },
            { text: "प्रेक्षक की आंखों के रंग के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का श्वेत प्रकाश वास्तव में कई रंगों का मिश्रण होता है, और पानी की बूंदें इन रंगों को अलग कर देती हैं।"
    },
    {
        question: "प्रश्न 43. यदि आप अपने दोस्त के साथ इंद्रधनुष देख रहे हैं, तो क्या आप दोनों को ठीक एक ही इंद्रधनुष दिखाई देता है?",
        answers: shuffle([
            { text: "हाँ, क्योंकि इंद्रधनुष एक ही स्थान पर होता है।", correct: false },
            { text: "नहीं, प्रत्येक व्यक्ति अपना स्वयं का इंद्रधनुष देखता है।", correct: true },
            { text: "केवल तभी जब दोनों एक ही ऊंचाई पर हों।", correct: false },
            { text: "केवल तभी जब दोनों एक ही चश्मा पहने हों।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष का केंद्र प्रेक्षक की आंख से सूर्य तक जाने वाली रेखा पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि दो लोगों की आँखें अलग-अलग स्थानों पर होती हैं, वे थोड़ा अलग-अलग पानी की बूंदों से बना इंद्रधनुष देखते हैं।"
    },
    {
        question: "प्रश्न 44. कांच के स्लैब से गुजरने पर श्वेत प्रकाश का विक्षेपण क्यों नहीं होता है?",
        answers: shuffle([
            { text: "क्योंकि स्लैब रंगहीन होता है।", correct: false },
            { text: "क्योंकि स्लैब की दोनों सतहें समानांतर होती हैं।", correct: true },
            { text: "क्योंकि कांच का अपवर्तनांक बहुत कम होता है।", correct: false },
            { text: "विक्षेपण होता है, लेकिन दिखाई नहीं देता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहली सतह पर होने वाला विक्षेपण दूसरी समानांतर सतह पर उल्टी दिशा में होने वाले विक्षेपण से निरस्त हो जाता है, और सभी रंग फिर से मिलकर श्वेत प्रकाश के रूप में बाहर निकलते हैं।"
    },
    {
        question: "प्रश्न 45. सूर्य के प्रकाश का स्पेक्ट्रम कैसा होता है?",
        answers: shuffle([
            { text: "सतत स्पेक्ट्रम", correct: true },
            { text: "रेखीय स्पेक्ट्रम", correct: false },
            { text: "बैंड स्पेक्ट्रम", correct: false },
            { text: "अवशोषण स्पेक्ट्रम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के प्रकाश में सभी तरंगदैर्ध्य के रंग एक दूसरे में विलीन होते हुए दिखाई देते हैं, इसलिए इसे एक सतत स्पेक्ट्रम कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> (हालांकि इसमें फ्राउनहोफर रेखाएं होती हैं, लेकिन मोटे तौर पर यह सतत होता है)।"
    },
    {
        question: "प्रश्न 46. प्रिज्म के पदार्थ का अपवर्तनांक बढ़ने पर, विचलन कोण पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "यह घटता है।", correct: false },
            { text: "यह बढ़ता है।", correct: true },
            { text: "यह अपरिवर्तित रहता है।", correct: false },
            { text: "यह शून्य हो जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च अपवर्तनांक का अर्थ है कि पदार्थ प्रकाश को अधिक मोड़ेगा, जिससे विचलन कोण का मान बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 47. क्या इंद्रधनुष ठोस, द्रव या गैस है?",
        answers: shuffle([
            { text: "ठोस", correct: false },
            { text: "द्रव", correct: false },
            { text: "गैस", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष कोई पदार्थ नहीं है, बल्कि यह एक प्रकाशिक घटना या भ्रम है।"
    },
    {
        question: "प्रश्न 48. \"अतिरिक्त इंद्रधनुष\" (Supernumerary Rainbows) क्या हैं?",
        answers: shuffle([
            { text: "द्वितीयक इंद्रधनुष", correct: false },
            { text: "प्राथमिक इंद्रधनुष के भीतरी किनारे पर दिखाई देने वाले धुंधले, हरे और बैंगनी बैंड", correct: true },
            { text: "रात में बनने वाले इंद्रधनुष", correct: false },
            { text: "उल्टे इंद्रधनुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये व्यतिकरण की घटना के कारण बनते हैं और आमतौर पर तब दिखाई देते हैं जब वर्षा की बूंदें बहुत छोटी और एक समान आकार की होती हैं।"
    },
    {
        question: "प्रश्न 49. श्वेत प्रकाश के स्पेक्ट्रम में मध्य रंग कौन सा माना जाता है?",
        answers: shuffle([
            { text: "नीला", correct: false },
            { text: "हरा", correct: false },
            { text: "पीला", correct: true },
            { text: "नारंगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंगदैर्ध्य के अनुसार, पीला रंग लगभग स्पेक्ट्रम के बीच में आता है और अक्सर माध्य किरण के विचलन की गणना के लिए उपयोग किया जाता है।"
    },
    {
        question: "प्रश्न 50. यदि हम एक प्रिज्म को पानी में डुबो दें, तो उसके द्वारा उत्पन्न विक्षेपण पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "विक्षेपण बढ़ जाएगा।", correct: false },
            { text: "विक्षेपण घट जाएगा।", correct: true },
            { text: "कोई प्रभाव नहीं पड़ेगा।", correct: false },
            { text: "विक्षेपण समाप्त हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रिज्म और बाहरी माध्यम (पानी) के अपवर्तनांक का अंतर कम हो जाएगा, जिससे प्रकाश कम मुड़ेगा और विक्षेपण भी कम हो जाएगा।"
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