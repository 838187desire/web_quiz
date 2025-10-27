const questions = [
    {
        topHeading: "संवेग संरक्षण पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. किसी वस्तु के द्रव्यमान और वेग के गुणनफल को क्या कहते हैं?",
        answers: shuffle([
            { text: "बल", correct: false },
            { text: "आवेग", correct: false },
            { text: "संवेग", correct: true },
            { text: "त्वरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिकी में, किसी वस्तु के संवेग को उसके द्रव्यमान और वेग के गुणनफल के रूप में परिभाषित किया जाता है।"
    },
    {
        question: "प्रश्न 2. संवेग किस प्रकार की राशि है?",
        answers: shuffle([
            { text: "अदिश राशि", correct: false },
            { text: "सदिश राशि", correct: true },
            { text: "प्रदेश राशि", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग एक सदिश राशि है क्योंकि इसमें परिमाण के साथ-साथ दिशा भी होती है,<br><br><i class='fa-solid fa-angles-right icon'></i> जो वेग की दिशा में होती है।"
    },
    {
        question: "प्रश्न 3. संवेग का S.I. मात्रक क्या है?",
        answers: shuffle([
            { text: "किलोग्राम-मीटर", correct: false },
            { text: "किलोग्राम-मीटर/सेकंड", correct: true },
            { text: "किलोग्राम/मीटर", correct: false },
            { text: "न्यूटन-सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि संवेग = द्रव्यमान × वेग, इसका मात्रक (किलोग्राम) × (मीटर/सेकंड) यानी किलोग्राम-मीटर/सेकंड होता है।"
    },
    {
        question: "प्रश्न 4. संवेग संरक्षण का नियम क्या कहता है?",
        answers: shuffle([
            { text: "किसी भी निकाय का संवेग हमेशा बढ़ता है।", correct: false },
            { text: "यदि किसी निकाय पर कोई बाहरी बल न लगे, तो उसका कुल संवेग स्थिर रहता है।", correct: true },
            { text: "किसी भी निकाय का संवेग हमेशा घटता है।", correct: false },
            { text: "बल लगाने पर संवेग संरक्षित रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नियम बताता है कि एक विलगित निकाय (isolated system) का कुल संवेग समय के साथ परिवर्तित नहीं होता है।"
    },
    {
        question: "प्रश्न 5. रॉकेट का प्रक्षेपण किस सिद्धांत पर आधारित है?",
        answers: shuffle([
            { text: "ऊर्जा संरक्षण", correct: false },
            { text: "द्रव्यमान संरक्षण", correct: false },
            { text: "रैखिक संवेग संरक्षण", correct: true },
            { text: "कोणीय संवेग संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉकेट पीछे की ओर उच्च वेग से गैसों को बाहर निकालता है, जिससे संवेग संरक्षण के अनुसार, रॉकेट आगे की ओर बढ़ता है।"
    },
    {
        question: "प्रश्न 6. बंदूक से गोली चलाने पर, बंदूक पीछे की ओर क्यों हटती है (प्रतिक्षेप)?",
        answers: shuffle([
            { text: "न्यूटन के पहले नियम के कारण", correct: false },
            { text: "ऊर्जा संरक्षण के नियम के कारण", correct: false },
            { text: "संवेग संरक्षण के नियम के कारण", correct: true },
            { text: "न्यूटन के गुरुत्वाकर्षण नियम के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोली चलने से पहले निकाय (बंदूक + गोली) का कुल संवेग शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> गोली आगे जाने पर, कुल संवेग को शून्य बनाए रखने के लिए बंदूक पीछे की ओर हटती है।"
    },
    {
        question: "प्रश्न 7. बल और समय-अंतराल के गुणनफल को क्या कहते हैं?",
        answers: shuffle([
            { text: "कार्य", correct: false },
            { text: "शक्ति", correct: false },
            { text: "आवेग", correct: true },
            { text: "संवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेग, किसी वस्तु पर लगे बल और उस समय-अंतराल का गुणनफल है, जिसके लिए बल लगाया गया था।"
    },
    {
        question: "प्रश्न 8. आवेग किसके बराबर होता है?",
        answers: shuffle([
            { text: "संवेग में परिवर्तन के", correct: true },
            { text: "गतिज ऊर्जा में परिवर्तन के", correct: false },
            { text: "बल में परिवर्तन के", correct: false },
            { text: "त्वरण में परिवर्तन के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेग-संवेग प्रमेय के अनुसार, किसी वस्तु पर लगाया गया आवेग उसके संवेग में हुए परिवर्तन के बराबर होता है।"
    },
    {
        question: "प्रश्न 9. यदि किसी वस्तु का वेग दोगुना कर दिया जाए, तो उसका संवेग...",
        answers: shuffle([
            { text: "आधा हो जाएगा।", correct: false },
            { text: "दोगुना हो जाएगा।", correct: true },
            { text: "चार गुना हो जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग वेग के सीधे समानुपाती होता है (p∝v)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए वेग दोगुना करने पर संवेग भी दोगुना हो जाएगा।"
    },
    {
        question: "प्रश्न 10. दो वस्तुओं की टक्कर में, यदि कोई बाहरी बल कार्य न कर रहा हो, तो क्या संरक्षित रहता है?",
        answers: shuffle([
            { text: "केवल गतिज ऊर्जा", correct: false },
            { text: "केवल स्थितिज ऊर्जा", correct: false },
            { text: "कुल संवेग", correct: true },
            { text: "केवल वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी प्रकार की टक्कर में (प्रत्यास्थ या अप्रत्यास्थ), यदि निकाय विलगित है, तो उसका कुल संवेग हमेशा संरक्षित रहता है।"
    },
    {
        question: "प्रश्न 11. एक स्थिर वस्तु का संवेग कितना होता है?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "एक", correct: false },
            { text: "शून्य", correct: true },
            { text: "ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि वस्तु स्थिर है, उसका वेग शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए संवेग (p=mv) भी शून्य होगा।"
    },
    {
        question: "प्रश्न 12. न्यूटन का गति का दूसरा नियम संवेग के पदों में कैसे व्यक्त किया जा सकता है?",
        answers: shuffle([
            { text: "बल संवेग के बराबर होता है।", correct: false },
            { text: "बल संवेग में परिवर्तन की दर के बराबर होता है।", correct: true },
            { text: "बल संवेग के व्युत्क्रमानुपाती होता है।", correct: false },
            { text: "बल और संवेग में कोई संबंध नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के दूसरे नियम का अधिक सामान्य रूप यह है कि किसी वस्तु पर लगाया गया शुद्ध बाहरी बल उसके संवेग में परिवर्तन की दर के बराबर होता है (F=Δp/Δt)।"
    },
    {
        question: "प्रश्न 13. वह टक्कर जिसमें संवेग और गतिज ऊर्जा दोनों संरक्षित रहते हैं, क्या कहलाती है?",
        answers: shuffle([
            { text: "अप्रत्यास्थ टक्कर", correct: false },
            { text: "प्रत्यास्थ टक्कर", correct: true },
            { text: "पूर्णतः अप्रत्यास्थ टक्कर", correct: false },
            { text: "नाभिकीय टक्कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्यास्थ टक्कर में, निकाय का कुल संवेग और कुल गतिज ऊर्जा दोनों टक्कर से पहले और बाद में समान रहते हैं।"
    },
    {
        question: "प्रश्न 14. वह टक्कर जिसमें केवल संवेग संरक्षित रहता है, लेकिन गतिज ऊर्जा नहीं, क्या कहलाती है?",
        answers: shuffle([
            { text: "प्रत्यास्थ टक्कर", correct: false },
            { text: "सरल टक्कर", correct: false },
            { text: "अप्रत्यास्थ टक्कर", correct: true },
            { text: "आदर्श टक्कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अप्रत्यास्थ टक्कर में, गतिज ऊर्जा का कुछ हिस्सा ऊष्मा, ध्वनि या विरूपण में बदल जाता है, इसलिए यह संरक्षित नहीं रहती है।"
    },
    {
        question: "प्रश्न 15. जब दो वस्तुएं टक्कर के बाद आपस में जुड़ जाती हैं, तो उस टक्कर को कहते हैं:",
        answers: shuffle([
            { text: "प्रत्यास्थ टक्कर", correct: false },
            { text: "आंशिक प्रत्यास्थ टक्कर", correct: false },
            { text: "पूर्णतः अप्रत्यास्थ टक्कर", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्णतः अप्रत्यास्थ टक्कर में, वस्तुएं एक साथ चिपक जाती हैं और एक ही वेग से चलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें गतिज ऊर्जा की हानि अधिकतम होती है।"
    },
    {
        question: "प्रश्न 16. क्रिकेट का खिलाड़ी गेंद को लपकते (कैच करते) समय अपने हाथों को पीछे की ओर क्यों खींचता है?",
        answers: shuffle([
            { text: "गेंद को गति देने के लिए", correct: false },
            { text: "आवेग को बढ़ाने के लिए", correct: false },
            { text: "संवेग परिवर्तन की दर को कम करने के लिए", correct: true },
            { text: "एक आदत के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाथ पीछे खींचने से संवेग परिवर्तन में लगने वाला समय बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि बल = संवेग परिवर्तन / समय, समय बढ़ने से हाथ पर लगने वाला बल कम हो जाता है।"
    },
    {
        question: "प्रश्न 17. संवेग की विमा क्या है?",
        answers: shuffle([
            { text: "[MLT⁻²]", correct: false },
            { text: "[ML²T⁻²]", correct: false },
            { text: "[MLT⁻¹]", correct: true },
            { text: "[ML⁻¹T⁻¹]", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग = द्रव्यमान × वेग, जिसकी विमा [M]×[LT⁻¹]=[MLT⁻¹] होती है।"
    },
    {
        question: "प्रश्न 18. यदि दो भिन्न द्रव्यमान की वस्तुओं का संवेग समान है, तो किसकी गतिज ऊर्जा अधिक होगी?",
        answers: shuffle([
            { text: "भारी वस्तु की", correct: false },
            { text: "हल्की वस्तु की", correct: true },
            { text: "दोनों की बराबर होगी", correct: false },
            { text: "निर्धारित नहीं किया जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा और संवेग में संबंध K=p²/2m है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि संवेग (p) समान है, तो गतिज ऊर्जा द्रव्यमान (m) के व्युत्क्रमानुपाती होगी।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, हल्की वस्तु की गतिज ऊर्जा अधिक होगी।"
    },
    {
        question: "प्रश्न 19. नाव से किनारे पर कूदते समय, नाव पीछे की ओर क्यों हट जाती है?",
        answers: shuffle([
            { text: "जल के प्रतिरोध के कारण", correct: false },
            { text: "ऊर्जा संरक्षण के कारण", correct: false },
            { text: "संवेग संरक्षण के कारण", correct: true },
            { text: "जड़त्व के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यक्ति के आगे कूदने पर (आगे की दिशा में संवेग), कुल संवेग को संरक्षित रखने के लिए नाव पीछे की ओर संवेग प्राप्त करती है।"
    },
    {
        question: "प्रश्न 20. एक बम विस्फोट होकर कई टुकड़ों में बंट जाता है। इस प्रक्रिया में क्या संरक्षित रहता है?",
        answers: shuffle([
            { text: "केवल गतिज ऊर्जा", correct: false },
            { text: "केवल स्थितिज ऊर्जा", correct: false },
            { text: "कुल संवेग", correct: true },
            { text: "कुल वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विस्फोट एक आंतरिक बल है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि कोई बाहरी बल नहीं है, विस्फोट से पहले (शून्य) और बाद में निकाय का कुल संवेग संरक्षित रहता है।"
    },
    {
        question: "प्रश्न 21. आवेग का S.I. मात्रक क्या है?",
        answers: shuffle([
            { text: "न्यूटन", correct: false },
            { text: "जूल", correct: false },
            { text: "वाट", correct: false },
            { text: "न्यूटन-सेकंड", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेग = बल × समय, इसलिए इसका मात्रक न्यूटन-सेकंड (N·s) होता है, जो कि kg·m/s के बराबर है।"
    },
    {
        question: "प्रश्न 22. यदि किसी निकाय पर लगने वाला कुल बाहरी बल शून्य हो, तो...",
        answers: shuffle([
            { text: "उसका वेग संरक्षित रहेगा।", correct: false },
            { text: "उसका त्वरण संरक्षित रहेगा।", correct: false },
            { text: "उसका संवेग संरक्षित रहेगा।", correct: true },
            { text: "उसकी गतिज ऊर्जा संरक्षित रहेगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह संवेग संरक्षण के नियम की मूल शर्त है।<br><br><i class='fa-solid fa-angles-right icon'></i> Fext​=0 होने पर Δp=0 होता है।"
    },
    {
        question: "प्रश्न 23. बिलियर्ड गेंदों की टक्कर लगभग किस प्रकार की टक्कर होती है?",
        answers: shuffle([
            { text: "अप्रत्यास्थ", correct: false },
            { text: "पूर्णतः अप्रत्यास्थ", correct: false },
            { text: "प्रत्यास्थ", correct: true },
            { text: "नाभिकीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिलियर्ड गेंदों को बहुत कठोर बनाया जाता है ताकि टक्कर के दौरान गतिज ऊर्जा का क्षय न्यूनतम हो,<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इनकी टक्कर लगभग प्रत्यास्थ होती है।"
    },
    {
        question: "प्रश्न 24. एक भारी ट्रक और एक छोटी कार समान वेग से चल रहे हैं। किसका संवेग अधिक होगा?",
        answers: shuffle([
            { text: "कार का", correct: false },
            { text: "ट्रक का", correct: true },
            { text: "दोनों का बराबर होगा", correct: false },
            { text: "उनके रंग पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग द्रव्यमान के समानुपाती होता है (p=mv)।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि वेग समान है, भारी वाहन (ट्रक) का संवेग अधिक होगा।"
    },
    {
        question: "प्रश्न 25. किसी गतिशील वस्तु के संवेग को शून्य करने के लिए क्या आवश्यक है?",
        answers: shuffle([
            { text: "उसका द्रव्यमान शून्य करना", correct: false },
            { text: "उसका वेग शून्य करना", correct: true },
            { text: "उस पर बल लगाना", correct: false },
            { text: "उसकी दिशा बदलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु का संवेग तभी शून्य हो सकता है जब या तो उसका द्रव्यमान शून्य हो (जो संभव नहीं) या उसका वेग शून्य हो, अर्थात वह स्थिर अवस्था में आ जाए।"
    },
    {
        question: "प्रश्न 26. कोणीय संवेग संरक्षण का नियम कब लागू होता है?",
        answers: shuffle([
            { text: "जब निकाय पर कोई बाहरी बल न हो।", correct: false },
            { text: "जब निकाय पर कोई बाहरी बल आघूर्ण न हो।", correct: true },
            { text: "जब निकाय का वेग स्थिर हो।", correct: false },
            { text: "जब निकाय का द्रव्यमान स्थिर हो।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस प्रकार रैखिक संवेग के लिए बाहरी बल शून्य होना चाहिए, उसी प्रकार घूर्णन गति में कोणीय संवेग के संरक्षण के लिए बाहरी बल आघूर्ण शून्य होना चाहिए।"
    },
    {
        question: "प्रश्न 27. एक घूमती हुई कुर्सी पर बैठा व्यक्ति अपनी बाहें फैला ले, तो उसकी कोणीय चाल...",
        answers: shuffle([
            { text: "बढ़ जाएगी।", correct: false },
            { text: "घट जाएगी।", correct: true },
            { text: "अपरिवर्तित रहेगी।", correct: false },
            { text: "शून्य हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाहें फैलाने से जड़त्व आघूर्ण बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोणीय संवेग (L=Iω) को संरक्षित रखने के लिए, यदि जड़त्व आघूर्ण (I) बढ़ता है, तो कोणीय चाल (ω) घट जाएगी।"
    },
    {
        question: "प्रश्न 28. एक विलगित निकाय (isolated system) क्या है?",
        answers: shuffle([
            { text: "एक निकाय जिस पर गुरुत्वाकर्षण बल नहीं लगता।", correct: false },
            { text: "एक निकाय जो बहुत दूर स्थित है।", correct: false },
            { text: "एक निकाय जिस पर कोई बाहरी बल कार्य नहीं करता है।", correct: true },
            { text: "एक निकाय जिसका तापमान स्थिर है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग संरक्षण के नियम के लिए यह एक आवश्यक शर्त है।"
    },
    {
        question: "प्रश्न 29. कीचड़ की एक गेंद दीवार से टकराकर चिपक जाती है। यह किस प्रकार की टक्कर है?",
        answers: shuffle([
            { text: "प्रत्यास्थ", correct: false },
            { text: "अप्रत्यास्थ", correct: false },
            { text: "पूर्णतः अप्रत्यास्थ", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि गेंद दीवार से चिपक जाती है (दोनों का अंतिम वेग समान है), यह एक पूर्णतः अप्रत्यास्थ टक्कर है।"
    },
    {
        question: "प्रश्न 30. संवेग संरक्षण का नियम न्यूटन के किस नियम/नियमों का परिणाम है?",
        answers: shuffle([
            { text: "केवल पहले नियम का", correct: false },
            { text: "केवल दूसरे नियम का", correct: false },
            { text: "दूसरे और तीसरे नियम का", correct: true },
            { text: "केवल तीसरे नियम का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन का तीसरा नियम (क्रिया-प्रतिक्रिया) यह सुनिश्चित करता है कि एक निकाय के भीतर आंतरिक बल कुल संवेग को नहीं बदलते, और दूसरा नियम (F=Δp/Δt) बताता है कि बाहरी बल के बिना संवेग नहीं बदलेगा।"
    },
    {
        question: "प्रश्न 31. यदि एक हल्की और एक भारी वस्तु को समान ऊंचाई से गिराया जाए, तो जमीन पर टकराने से ठीक पहले किसका संवेग अधिक होगा (वायु प्रतिरोध नगण्य)?",
        answers: shuffle([
            { text: "हल्की वस्तु का", correct: false },
            { text: "भारी वस्तु का", correct: true },
            { text: "दोनों का बराबर होगा", correct: false },
            { text: "यह उनके आकार पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों समान वेग से जमीन पर पहुँचेंगी, लेकिन संवेग (p=mv) द्रव्यमान पर भी निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, भारी वस्तु का संवेग अधिक होगा।"
    },
    {
        question: "प्रश्न 32. किसी वस्तु पर लगाया गया बल उसके संवेग में परिवर्तन की दर के...",
        answers: shuffle([
            { text: "बराबर होता है।", correct: true },
            { text: "व्युत्क्रमानुपाती होता है।", correct: false },
            { text: "वर्ग के बराबर होता है।", correct: false },
            { text: "कोई संबंध नहीं होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह न्यूटन के दूसरे नियम की संवेग के रूप में परिभाषा है।"
    },
    {
        question: "प्रश्न 33. एक वस्तु वृत्ताकार पथ पर एक समान चाल से गति कर रही है। इसका...",
        answers: shuffle([
            { text: "वेग संरक्षित है।", correct: false },
            { text: "संवेग संरक्षित है।", correct: false },
            { text: "गतिज ऊर्जा संरक्षित है।", correct: true },
            { text: "त्वरण शून्य है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल स्थिर होने के कारण गतिज ऊर्जा (1/2mv²) संरक्षित है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन वेग की दिशा लगातार बदल रही है, इसलिए वेग और संवेग दोनों संरक्षित नहीं हैं।"
    },
    {
        question: "प्रश्न 34. किसी पिंड के संवेग में परिवर्तन की दिशा...",
        answers: shuffle([
            { text: "हमेशा पिंड की गति की दिशा में होती है।", correct: false },
            { text: "पिंड पर लगने वाले कुल बल की दिशा में होती है।", correct: true },
            { text: "हमेशा पिंड की गति की विपरीत दिशा में होती है।", correct: false },
            { text: "हमेशा लंबवत होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि आवेग (FΔt) एक सदिश है जो बल की दिशा में होता है, और यह संवेग में परिवर्तन (Δp) के बराबर है, इसलिए संवेग में परिवर्तन की दिशा भी बल की दिशा में ही होती है।"
    },
    {
        question: "प्रश्न 35. दो समान द्रव्यमान की वस्तुएं विपरीत दिशाओं से आकर प्रत्यास्थ रूप से टकराती हैं। यदि उनकी चाल समान है, तो टक्कर के बाद क्या होगा?",
        answers: shuffle([
            { text: "वे एक दूसरे से चिपक जाएंगी।", correct: false },
            { text: "वे रुक जाएंगी।", correct: false },
            { text: "वे अपनी दिशाएं बदलकर उसी चाल से वापस लौट जाएंगी।", correct: true },
            { text: "वे एक दूसरे को पार कर जाएंगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्यास्थ टक्कर में, समान द्रव्यमान की वस्तुएं अपने वेगों का आदान-प्रदान कर लेती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ, वे प्रभावी रूप से अपनी दिशाएं उलट देंगी।"
    },
    {
        question: "प्रश्न 36. संवेग संरक्षण किसके लिए लागू होता है?",
        answers: shuffle([
            { text: "केवल स्थूल वस्तुओं के लिए", correct: false },
            { text: "केवल सूक्ष्म कणों के लिए", correct: false },
            { text: "सूक्ष्म और स्थूल दोनों प्रकार की वस्तुओं के लिए", correct: true },
            { text: "केवल ग्रहों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग संरक्षण एक मौलिक नियम है जो परमाणुओं से लेकर आकाशगंगाओं तक सभी पैमानों पर लागू होता है।"
    },
    {
        question: "प्रश्न 37. एक गेंद को फर्श पर गिराया जाता है। गेंद और पृथ्वी के निकाय के लिए, टक्कर के दौरान...",
        answers: shuffle([
            { text: "केवल गेंद का संवेग संरक्षित रहता है।", correct: false },
            { text: "केवल पृथ्वी का संवेग संरक्षित रहता है।", correct: false },
            { text: "गेंद और पृथ्वी का कुल संवेग संरक्षित रहता है।", correct: true },
            { text: "किसी का भी संवेग संरक्षित नहीं रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गेंद पर पृथ्वी गुरुत्वाकर्षण बल लगाती है, और पृथ्वी पर गेंद।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक आंतरिक बल है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि हम गेंद और पृथ्वी को एक निकाय मानें, तो कोई बाहरी बल नहीं है, और कुल संवेग संरक्षित रहता है।"
    },
    {
        question: "प्रश्न 38. घर्षण बल की उपस्थिति में, किसी वस्तु का संवेग...",
        answers: shuffle([
            { text: "संरक्षित रहता है।", correct: false },
            { text: "संरक्षित नहीं रहता है।", correct: true },
            { text: "हमेशा बढ़ता है।", correct: false },
            { text: "हमेशा शून्य होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण एक बाहरी बल है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब यह किसी वस्तु पर कार्य करता है, तो उसका संवेग बदल जाता है (आमतौर पर कम हो जाता है)।"
    },
    {
        question: "प्रश्न 39. आवेग की विमा किसके समान है?",
        answers: shuffle([
            { text: "बल", correct: false },
            { text: "कार्य", correct: false },
            { text: "शक्ति", correct: false },
            { text: "संवेग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि आवेग संवेग में परिवर्तन के बराबर होता है, इसलिए दोनों की विमाएं समान होती हैं, अर्थात [MLT⁻¹]।"
    },
    {
        question: "प्रश्न 40. एक तैराक पानी में आगे बढ़ने के लिए पानी को पीछे धकेलता है। यह किस सिद्धांत का एक उदाहरण है?",
        answers: shuffle([
            { text: "ऊर्जा संरक्षण", correct: false },
            { text: "संवेग संरक्षण (या न्यूटन का तीसरा नियम)", correct: true },
            { text: "उत्प्लावन बल", correct: false },
            { text: "श्यानता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी को पीछे धकेलने पर (पीछे की ओर संवेग), तैराक को आगे की ओर बराबर संवेग प्राप्त होता है, जिससे कुल संवेग संरक्षित रहता है।"
    },
    {
        question: "प्रश्न 41. संवेग का सूत्र p=mv कब मान्य होता है?",
        answers: shuffle([
            { text: "केवल जब वस्तु आराम पर हो।", correct: false },
            { text: "केवल जब वस्तु प्रकाश की गति से चल रही हो।", correct: false },
            { text: "उन गतियों के लिए जो प्रकाश की गति से बहुत कम हैं।", correct: true },
            { text: "यह कभी मान्य नहीं होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपेक्षिकता के सिद्धांत के अनुसार, प्रकाश की गति के करीब की गतियों के लिए संवेग का सूत्र बदल जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> p=mv चिरसम्मत भौतिकी में मान्य है।"
    },
    {
        question: "प्रश्न 42. यदि समान बल दो अलग-अलग वस्तुओं पर समान समय के लिए लगाया जाता है, तो...",
        answers: shuffle([
            { text: "दोनों वस्तुओं के वेग में समान परिवर्तन होगा।", correct: false },
            { text: "दोनों वस्तुओं के त्वरण में समान परिवर्तन होगा।", correct: false },
            { text: "दोनों वस्तुओं के संवेग में समान परिवर्तन होगा।", correct: true },
            { text: "दोनों वस्तुओं की गतिज ऊर्जा में समान परिवर्तन होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि आवेग = FΔt = Δp, यदि F और Δt दोनों के लिए समान हैं, तो संवेग में परिवर्तन (Δp) भी समान होगा।"
    },
    {
        question: "प्रश्न 43. एक जेट विमान किस सिद्धांत पर कार्य करता है?",
        answers: shuffle([
            { text: "ऊर्जा संरक्षण", correct: false },
            { text: "रैखिक संवेग संरक्षण", correct: true },
            { text: "बर्नूली का सिद्धांत", correct: false },
            { text: "कोणीय संवेग संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉकेट की तरह, एक जेट इंजन भी हवा और गैसों को पीछे की ओर धकेलता है ताकि विमान को आगे की ओर एक संवेग मिल सके।"
    },
    {
        question: "प्रश्न 44. किसी निकाय का द्रव्यमान केंद्र वह बिंदु है...",
        answers: shuffle([
            { text: "जहाँ निकाय का सारा द्रव्यमान केंद्रित होता है।", correct: false },
            { text: "जो हमेशा निकाय के अंदर होता है।", correct: false },
            { text: "जिसका वेग निकाय के कुल संवेग को परिभाषित करता है।", correct: true },
            { text: "जहाँ गुरुत्वाकर्षण बल कार्य नहीं करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी निकाय का कुल संवेग उसके कुल द्रव्यमान और उसके द्रव्यमान केंद्र के वेग के गुणनफल के बराबर होता है (Ptotal​=Mtotal​×Vcm​)।"
    },
    {
        question: "प्रश्न 45. यदि किसी निकाय के द्रव्यमान केंद्र का वेग स्थिर है, तो इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "निकाय पर कोई बल नहीं लग रहा है।", correct: false },
            { text: "निकाय पर लगने वाला कुल बाहरी बल शून्य है।", correct: true },
            { text: "निकाय का तापमान स्थिर है।", correct: false },
            { text: "निकाय घूम रहा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि द्रव्यमान केंद्र का वेग स्थिर है, तो उसका त्वरण शून्य है, जिसका अर्थ है कि निकाय पर कुल बाहरी बल शून्य है और उसका कुल संवेग संरक्षित है।"
    },
    {
        question: "प्रश्न 46. दो स्केटर्स एक-दूसरे को धक्का देते हैं और अलग हो जाते हैं। यदि एक का द्रव्यमान दूसरे से अधिक है, तो...",
        answers: shuffle([
            { text: "दोनों समान गति से चलेंगे।", correct: false },
            { text: "भारी स्केटर तेजी से चलेगा।", correct: false },
            { text: "हल्का स्केटर तेजी से चलेगा।", correct: true },
            { text: "दोनों स्थिर रहेंगे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग संरक्षण के अनुसार, दोनों को बराबर और विपरीत संवेग (m₁v₁=m₂v₂) मिलेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, जिसका द्रव्यमान कम होगा, उसका वेग अधिक होगा।"
    },
    {
        question: "प्रश्न 47. एक गेंद दीवार से प्रत्यास्थ रूप से टकराती है। गेंद के संवेग में परिवर्तन...",
        answers: shuffle([
            { text: "शून्य है।", correct: false },
            { text: "गेंद के प्रारंभिक संवेग के बराबर है।", correct: false },
            { text: "गेंद के प्रारंभिक संवेग का दोगुना है।", correct: true },
            { text: "अनंत है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि गेंद का प्रारंभिक संवेग 'p' है, तो टकराकर वापस लौटने पर उसका संवेग '-p' हो जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> संवेग में परिवर्तन = अंतिम संवेग - प्रारंभिक संवेग = (−p)−(p)=−2p।<br><br><i class='fa-solid fa-angles-right icon'></i> परिमाण 2p है।"
    },
    {
        question: "प्रश्न 48. किसी वस्तु पर थोड़े समय के लिए कार्य करने वाले एक बड़े बल को क्या कहा जाता है?",
        answers: shuffle([
            { text: "स्थिर बल", correct: false },
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "आवेगी बल", correct: true },
            { text: "अभिकेंद्रीय बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेगी बल वे बल होते हैं जो बहुत कम समय के लिए लगते हैं, जैसे कि क्रिकेट के बल्ले से गेंद को मारना।"
    },
    {
        question: "प्रश्न 49. टक्करों में, क्या हमेशा संरक्षित रहता है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "यांत्रिक ऊर्जा", correct: false },
            { text: "कुल ऊर्जा और कुल संवेग", correct: true },
            { text: "वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी टक्कर में, यदि निकाय विलगित है, तो कुल संवेग हमेशा संरक्षित रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुल ऊर्जा भी हमेशा संरक्षित रहती है, हालांकि इसका रूप बदल सकता है (गतिज ऊर्जा ऊष्मा में बदल सकती है)।"
    },
    {
        question: "प्रश्न 50. यदि किसी वस्तु का द्रव्यमान आधा कर दिया जाए और वेग दोगुना कर दिया जाए, तो नया संवेग...",
        answers: shuffle([
            { text: "आधा हो जाएगा।", correct: false },
            { text: "दोगुना हो जाएगा।", correct: false },
            { text: "चार गुना हो जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नया संवेग = (m/2) × (2v) = mv, जो प्रारंभिक संवेग के बराबर है।"
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