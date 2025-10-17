const questions = [
    {
        topHeading: "त्वरण पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. त्वरण की परिभाषा क्या है?",
        answers: shuffle([
            { text: "दूरी में परिवर्तन की दर", correct: false },
            { text: "चाल में परिवर्तन की दर", correct: false },
            { text: "वेग में परिवर्तन की दर", correct: true },
            { text: "विस्थापन में परिवर्तन की दर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण को किसी वस्तु के वेग में प्रति इकाई समय में होने वाले परिवर्तन के रूप में परिभाषित किया जाता है।"
    },
    {
        question: "प्रश्न 2. त्वरण किस प्रकार की भौतिक राशि है?",
        answers: shuffle([
            { text: "अदिश", correct: false },
            { text: "सदिश", correct: true },
            { text: "प्रदेश (टेंसर)", correct: false },
            { text: "न तो सदिश और न ही अदिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण में परिमाण और दिशा दोनों होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह एक सदिश राशि है।"
    },
    {
        question: "प्रश्न 3. त्वरण का एस.आई. (SI) मात्रक क्या है?",
        answers: shuffle([
            { text: "मीटर/सेकंड", correct: false },
            { text: "मीटर/सेकंड²", correct: true },
            { text: "मीटर-सेकंड", correct: false },
            { text: "मीटर²-सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण का मात्रक वेग के मात्रक (मीटर/सेकंड) को समय के मात्रक (सेकंड) से विभाजित करके प्राप्त किया जाता है।"
    },
    {
        question: "प्रश्न 4. यदि कोई वस्तु एकसमान वेग से गतिमान है, तो उसका त्वरण क्या होगा?",
        answers: shuffle([
            { text: "एकरूप", correct: false },
            { text: "परिवर्ती", correct: false },
            { text: "शून्य", correct: true },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वेग का अर्थ है कि वेग में कोई परिवर्तन नहीं हो रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि त्वरण वेग में परिवर्तन की दर है, इसलिए त्वरण शून्य होगा।"
    },
    {
        question: "प्रश्न 5. मंदन (Retardation) को और क्या कहा जाता है?",
        answers: shuffle([
            { text: "धनात्मक त्वरण", correct: false },
            { text: "ऋणात्मक त्वरण", correct: true },
            { text: "शून्य त्वरण", correct: false },
            { text: "औसत त्वरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी वस्तु का वेग समय के साथ घटता है, तो उसके त्वरण को मंदन या ऋणात्मक त्वरण कहते हैं।"
    },
    {
        question: "प्रश्न 6. वेग-समय ग्राफ का ढलान (slope) क्या दर्शाता है?",
        answers: shuffle([
            { text: "दूरी", correct: false },
            { text: "विस्थापन", correct: false },
            { text: "चाल", correct: false },
            { text: "त्वरण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग-समय ग्राफ का ढलान (वेग में परिवर्तन / समय में परिवर्तन) त्वरण को निरूपित करता है।"
    },
    {
        question: "प्रश्न 7. जब कोई वस्तु मुक्त रूप से पृथ्वी की ओर गिरती है, तो उसकी गति में कैसा त्वरण होता है?",
        answers: shuffle([
            { text: "शून्य त्वरण", correct: false },
            { text: "एकरूप त्वरण", correct: true },
            { text: "परिवर्ती त्वरण", correct: false },
            { text: "ऋणात्मक त्वरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायु प्रतिरोध को नगण्य मानने पर, वस्तु केवल गुरुत्वीय त्वरण (g) के अधीन गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो एक स्थिर मान है।"
    },
    {
        question: "प्रश्न 8. एकसमान वृत्तीय गति में, त्वरण की दिशा क्या होती है?",
        answers: shuffle([
            { text: "गति की दिशा में", correct: false },
            { text: "वृत्त की स्पर्शरेखा के अनुदिश", correct: false },
            { text: "वृत्त के केंद्र की ओर", correct: true },
            { text: "वृत्त के केंद्र से बाहर की ओर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वृत्तीय गति में, वेग की दिशा लगातार बदलती रहती है, जिससे एक त्वरण उत्पन्न होता है जिसे अभिकेंद्रीय त्वरण कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> और यह हमेशा वृत्त के केंद्र की ओर निर्देशित होता है।"
    },
    {
        question: "प्रश्न 9. त्वरण का विमीय सूत्र क्या है?",
        answers: shuffle([
            { text: "[LT⁻¹]", correct: false },
            { text: "[LT⁻²]", correct: true },
            { text: "[MLT⁻¹]", correct: false },
            { text: "[MLT⁻²]", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण = वेग/समय = (दूरी/समय)/समय = [L]/[T²] = [LT⁻²]।"
    },
    {
        question: "प्रश्न 10. यदि किसी वस्तु का वेग और त्वरण एक ही दिशा में हों, तो वस्तु की चाल:",
        answers: shuffle([
            { text: "बढ़ेगी", correct: true },
            { text: "घटेगी", correct: false },
            { text: "स्थिर रहेगी", correct: false },
            { text: "शून्य हो जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब त्वरण वेग की दिशा में कार्य करता है, तो यह वस्तु के वेग के परिमाण (चाल) को बढ़ाता है।"
    },
    {
        question: "प्रश्न 11. चलती बस में ब्रेक लगाने पर उत्पन्न त्वरण की दिशा क्या होती है?",
        answers: shuffle([
            { text: "बस की गति की दिशा में", correct: false },
            { text: "बस की गति की दिशा के विपरीत", correct: true },
            { text: "गति के लंबवत", correct: false },
            { text: "कोई निश्चित दिशा नहीं होती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रेक लगाने से मंदन उत्पन्न होता है, जो एक ऋणात्मक त्वरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> और इसकी दिशा हमेशा गति की दिशा के विरुद्ध होती है।"
    },
    {
        question: "प्रश्न 12. क्या किसी वस्तु का वेग शून्य होते हुए भी उसमें त्वरण हो सकता है?",
        answers: shuffle([
            { text: "हाँ", correct: true },
            { text: "नहीं", correct: false },
            { text: "केवल निर्वात में", correct: false },
            { text: "केवल घर्षण की उपस्थिति में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी गेंद को ऊपर की ओर फेंका जाता है, तो उच्चतम बिंदु पर उसका वेग क्षण भर के लिए शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन गुरुत्वीय त्वरण (g) अभी भी उस पर नीचे की ओर कार्य कर रहा होता है।"
    },
    {
        question: "प्रश्न 13. न्यूटन के गति के दूसरे नियम के अनुसार, त्वरण किसके समानुपाती होता है?",
        answers: shuffle([
            { text: "वस्तु पर लगे बल के", correct: true },
            { text: "वस्तु के द्रव्यमान के", correct: false },
            { text: "वस्तु के वेग के", correct: false },
            { text: "वस्तु के संवेग के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन का दूसरा नियम (F=ma) कहता है कि किसी वस्तु में उत्पन्न त्वरण उस पर लगाए गए कुल बल के सीधे समानुपाती और उसके द्रव्यमान के व्युत्क्रमानुपाती होता है।"
    },
    {
        question: "प्रश्न 14. यदि किसी वस्तु का विस्थापन-समय ग्राफ एक परवलय (parabola) है, तो वस्तु का त्वरण:",
        answers: shuffle([
            { text: "शून्य है", correct: false },
            { text: "स्थिर है", correct: true },
            { text: "बढ़ रहा है", correct: false },
            { text: "घट रहा है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक परवलयिक विस्थापन-समय ग्राफ एकसमान त्वरित गति को इंगित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँ त्वरण स्थिर रहता है (जैसे s = ut + ½at²)।"
    },
    {
        question: "प्रश्न 15. एकसमान वृत्तीय गति में वस्तु की चाल स्थिर रहती है, फिर भी वह त्वरित क्यों होती है?",
        answers: shuffle([
            { text: "क्योंकि उसका द्रव्यमान बदलता है", correct: false },
            { text: "क्योंकि उसकी दिशा लगातार बदलती है", correct: true },
            { text: "क्योंकि उस पर कोई बल नहीं लगता", correct: false },
            { text: "क्योंकि उसकी गतिज ऊर्जा बदलती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण, वेग में किसी भी परिवर्तन (परिमाण या दिशा) के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वृत्तीय गति में दिशा बदलने से वेग बदलता है, जिससे त्वरण उत्पन्न होता है।"
    },
    {
        question: "प्रश्न 16. गुरुत्वीय त्वरण 'g' का मान कहाँ पर अधिकतम होता है?",
        answers: shuffle([
            { text: "पृथ्वी के केंद्र पर", correct: false },
            { text: "भूमध्य रेखा पर", correct: false },
            { text: "ध्रुवों पर", correct: true },
            { text: "अंतरिक्ष में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी ध्रुवों पर थोड़ी चपटी है, जिससे ध्रुवों की केंद्र से दूरी कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण के व्युत्क्रम वर्ग नियम के अनुसार, दूरी कम होने पर 'g' का मान बढ़ जाता है।"
    },
    {
        question: "प्रश्न 17. त्वरण-समय ग्राफ और समय-अक्ष के बीच घिरा क्षेत्रफल क्या दर्शाता है?",
        answers: shuffle([
            { text: "विस्थापन", correct: false },
            { text: "दूरी", correct: false },
            { text: "वेग में परिवर्तन", correct: true },
            { text: "औसत त्वरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षेत्रफल (त्वरण × समय) वेग में हुए कुल परिवर्तन (Δv) को निरूपित करता है।"
    },
    {
        question: "प्रश्न 18. यदि त्वरण, वेग की दिशा के लंबवत हो, तो वस्तु का पथ कैसा होगा?",
        answers: shuffle([
            { text: "सरल रेखीय", correct: false },
            { text: "परवलयिक", correct: false },
            { text: "वृत्तीय या वक्रीय", correct: true },
            { text: "स्थिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्थिति एकसमान वृत्तीय गति में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँ अभिकेंद्रीय त्वरण हमेशा वेग के लंबवत होता है, जो केवल दिशा बदलता है, परिमाण नहीं।"
    },
    {
        question: "प्रश्न 19. एक लिफ्ट जो ऊपर की ओर त्वरित हो रही है, में बैठे व्यक्ति को अपना भार कैसा महसूस होगा?",
        answers: shuffle([
            { text: "बढ़ा हुआ", correct: true },
            { text: "घटा हुआ", correct: false },
            { text: "वास्तविक भार के बराबर", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊपर की ओर त्वरण के कारण व्यक्ति पर एक अतिरिक्त ऊपर की ओर आभासी बल लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे उसका आभासी भार (R = mg + ma) बढ़ जाता है।"
    },
    {
        question: "प्रश्न 20. \"तात्क्षणिक त्वरण\" का क्या अर्थ है?",
        answers: shuffle([
            { text: "पूरी यात्रा का औसत त्वरण", correct: false },
            { text: "किसी विशेष क्षण पर त्वरण", correct: true },
            { text: "प्रारंभिक त्वरण", correct: false },
            { text: "अंतिम त्वरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तात्क्षणिक त्वरण समय के एक बहुत ही छोटे अंतराल पर वेग में परिवर्तन की दर है।"
    },
    {
        question: "प्रश्न 21. असमान त्वरण का क्या अर्थ है?",
        answers: shuffle([
            { text: "वेग स्थिर है।", correct: false },
            { text: "त्वरण का परिमाण या दिशा या दोनों समय के साथ बदल रहे हैं।", correct: true },
            { text: "त्वरण शून्य है।", correct: false },
            { text: "वस्तु स्थिर है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असमान या परिवर्ती त्वरण का मतलब है कि त्वरण का मान स्थिर नहीं है।"
    },
    {
        question: "प्रश्न 22. गति के समीकरण (v = u + at, आदि) किस प्रकार के त्वरण के लिए मान्य हैं?",
        answers: shuffle([
            { text: "केवल शून्य त्वरण", correct: false },
            { text: "केवल एकसमान त्वरण", correct: true },
            { text: "केवल परिवर्ती त्वरण", correct: false },
            { text: "किसी भी प्रकार के त्वरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गति के ये मानक समीकरण केवल तभी लागू होते हैं जब त्वरण का मान पूरी गति के दौरान स्थिर रहता है।"
    },
    {
        question: "प्रश्न 23. एक कार विरामावस्था से शुरू होकर एकसमान त्वरण से गति करती है। उसका वेग-समय ग्राफ कैसा होगा?",
        answers: shuffle([
            { text: "समय-अक्ष के समांतर एक रेखा", correct: false },
            { text: "एक परवलय", correct: false },
            { text: "मूल बिंदु से गुजरने वाली एक सीधी रेखा", correct: true },
            { text: "एक वक्र जो नीचे की ओर झुकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान त्वरण का अर्थ है कि वेग-समय ग्राफ का ढलान स्थिर है, जिससे एक सीधी रेखा बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> विरामावस्था से शुरू होने का मतलब है कि यह मूल बिंदु से शुरू होती है।"
    },
    {
        question: "प्रश्न 24. एक गेंद को ऊर्ध्वाधर रूप से ऊपर की ओर फेंका जाता है। पूरी यात्रा के दौरान उसका त्वरण:",
        answers: shuffle([
            { text: "पहले घटता है फिर बढ़ता है", correct: false },
            { text: "पहले बढ़ता है फिर घटता है", correct: false },
            { text: "स्थिर रहता है", correct: true },
            { text: "शून्य हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बार जब गेंद हाथ से छूट जाती है, तो उस पर केवल गुरुत्वीय त्वरण (g) नीचे की ओर कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो पूरी उड़ान के दौरान (ऊपर जाते समय और नीचे आते समय) स्थिर रहता है।"
    },
    {
        question: "प्रश्न 25. यदि किसी वस्तु पर कोई बाहरी बल कार्य न कर रहा हो, तो उसका त्वरण क्या होगा?",
        answers: shuffle([
            { text: "शून्य", correct: true },
            { text: "स्थिर", correct: false },
            { text: "परिवर्ती", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के पहले नियम (जड़त्व का नियम) के अनुसार, यदि कुल बल शून्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> तो त्वरण भी शून्य होगा और वस्तु अपनी गति की अवस्था को बनाए रखेगी।"
    },
    {
        question: "प्रश्न 26. अभिकेंद्रीय त्वरण का परिमाण किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "वस्तु की चाल पर", correct: false },
            { text: "वृत्तीय पथ की त्रिज्या पर", correct: false },
            { text: "वस्तु के द्रव्यमान पर", correct: true },
            { text: "वस्तु के कोणीय वेग पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिकेंद्रीय त्वरण का सूत्र a = v²/r होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो केवल चाल (v) और त्रिज्या (r) पर निर्भर करता है, द्रव्यमान (m) पर नहीं।"
    },
    {
        question: "प्रश्न 27. प्रक्षेप्य गति (Projectile Motion) में, उच्चतम बिंदु पर त्वरण क्या होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "गुरुत्वीय त्वरण (g) के बराबर", correct: true },
            { text: "g से कम", correct: false },
            { text: "g से अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रक्षेप्य पर हर बिंदु पर, जिसमें उच्चतम बिंदु भी शामिल है।<br><br><i class='fa-solid fa-angles-right icon'></i> केवल गुरुत्वीय त्वरण (g) नीचे की ओर कार्य करता है।"
    },
    {
        question: "प्रश्न 28. यदि किसी वस्तु का त्वरण शून्य है, तो उसका वेग-समय ग्राफ कैसा होगा?",
        answers: shuffle([
            { text: "मूल बिंदु से गुजरती एक सीधी रेखा", correct: false },
            { text: "समय-अक्ष के समांतर एक सीधी रेखा", correct: true },
            { text: "y-अक्ष के समांतर एक सीधी रेखा", correct: false },
            { text: "एक परवलय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शून्य त्वरण का अर्थ है एकसमान वेग।<br><br><i class='fa-solid fa-angles-right icon'></i> ग्राफ पर, यह एक क्षैतिज रेखा द्वारा दर्शाया जाएगा जिसका ढलान शून्य है।"
    },
    {
        question: "प्रश्न 29. कोणीय त्वरण (Angular acceleration) का संबंध किससे है?",
        answers: shuffle([
            { text: "रैखिक वेग में परिवर्तन से", correct: false },
            { text: "कोणीय वेग में परिवर्तन से", correct: true },
            { text: "रैखिक विस्थापन में परिवर्तन से", correct: false },
            { text: "कोणीय संवेग में परिवर्तन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय त्वरण को कोणीय वेग में परिवर्तन की दर के रूप में परिभाषित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ठीक वैसे ही जैसे रैखिक त्वरण रैखिक वेग में परिवर्तन की दर है।"
    },
    {
        question: "प्रश्न 30. किसी वस्तु का त्वरण ऋणात्मक होने का क्या अर्थ है?",
        answers: shuffle([
            { text: "वस्तु की चाल हमेशा घट रही है।", correct: false },
            { text: "त्वरण सदिश की दिशा वेग सदिश की दिशा के विपरीत है।", correct: true },
            { text: "वस्तु हमेशा धीमी हो रही है।", correct: false },
            { text: "वस्तु ऋणात्मक दिशा में गति कर रही है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋणात्मक त्वरण का सबसे सटीक अर्थ यह है कि त्वरण की दिशा वेग की दिशा के विपरीत है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे चाल कम हो जाती है।"
    },
    {
        question: "प्रश्न 31. एकसमान त्वरण का उदाहरण है:",
        answers: shuffle([
            { text: "वृत्ताकार पथ पर दौड़ता एक धावक", correct: false },
            { text: "भीड़-भाड़ वाली सड़क पर चलती एक कार", correct: false },
            { text: "एक निश्चित ऊँचाई से गिराया गया पत्थर", correct: true },
            { text: "दोलन करता हुआ एक लोलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त रूप से गिरती हुई वस्तु एकसमान गुरुत्वीय त्वरण (g) के तहत गति करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी उदाहरणों में त्वरण परिवर्ती है।"
    },
    {
        question: "प्रश्न 32. भारी और हल्की वस्तुओं को समान ऊँचाई से निर्वात में गिराने पर, कौन सी वस्तु पहले पृथ्वी पर पहुँचेगी?",
        answers: shuffle([
            { text: "भारी वस्तु", correct: false },
            { text: "हल्की वस्तु", correct: false },
            { text: "दोनों एक साथ", correct: true },
            { text: "यह उनके आकार पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निर्वात में, वायु प्रतिरोध नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सभी वस्तुओं पर समान गुरुत्वीय त्वरण (g) लगता है, इसलिए वे एक साथ पहुँचती हैं।"
    },
    {
        question: "प्रश्न 33. यदि कोई वस्तु स्थिर अवस्था से यात्रा शुरू करती है, तो उसका प्रारंभिक वेग क्या होता है?",
        answers: shuffle([
            { text: "शून्य", correct: true },
            { text: "एक", correct: false },
            { text: "अनंत", correct: false },
            { text: "ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थिर अवस्था या विरामावस्था का अर्थ है कि वस्तु की प्रारंभिक गति शून्य है।"
    },
    {
        question: "प्रश्न 34. त्वरण की दिशा हमेशा होती है:",
        answers: shuffle([
            { text: "वेग की दिशा में", correct: false },
            { text: "विस्थापन की दिशा में", correct: false },
            { text: "वस्तु पर लगे कुल बल की दिशा में", correct: true },
            { text: "गति के पथ की स्पर्शरेखा के अनुदिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के दूसरे नियम (F=ma) के अनुसार, त्वरण (a) की दिशा हमेशा उस पर लगने वाले शुद्ध बल (F) की दिशा में होती है।"
    },
    {
        question: "प्रश्न 35. यदि वेग-समय ग्राफ एक वक्र है, तो त्वरण:",
        answers: shuffle([
            { text: "शून्य है", correct: false },
            { text: "स्थिर है", correct: false },
            { text: "परिवर्ती है", correct: true },
            { text: "अनंत है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वक्र ग्राफ का मतलब है कि उसका ढलान हर बिंदु पर बदल रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि वेग-समय ग्राफ का ढलान त्वरण है, इसलिए त्वरण परिवर्ती है।"
    },
    {
        question: "प्रश्न 36. एक ट्रेन स्टेशन से चलना शुरू करती है और एकसमान त्वरण प्राप्त करती है। कुछ समय बाद उसका वेग स्थिर हो जाता है। इस गति के लिए त्वरण-समय ग्राफ कैसा होगा?",
        answers: shuffle([
            { text: "पहले एक स्थिर धनात्मक मान, फिर शून्य", correct: true },
            { text: "लगातार बढ़ता हुआ", correct: false },
            { text: "लगातार घटता हुआ", correct: false },
            { text: "पहले शून्य, फिर एक स्थिर मान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब ट्रेन एकसमान त्वरण प्राप्त करती है, तो त्वरण स्थिर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब वेग स्थिर हो जाता है, तो त्वरण शून्य हो जाता है।"
    },
    {
        question: "प्रश्न 37. एकसमान चाल से वक्रीय पथ पर गतिमान वस्तु में त्वरण क्यों होता है?",
        answers: shuffle([
            { text: "चाल बदलने के कारण", correct: false },
            { text: "दिशा बदलने के कारण", correct: true },
            { text: "द्रव्यमान बदलने के कारण", correct: false },
            { text: "ऊर्जा बदलने के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग एक सदिश राशि है।<br><br><i class='fa-solid fa-angles-right icon'></i> दिशा में कोई भी परिवर्तन वेग में परिवर्तन का कारण बनता है, और वेग में परिवर्तन की दर ही त्वरण है।"
    },
    {
        question: "प्रश्न 38. 'g' (गुरुत्वीय त्वरण) का मान किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "पृथ्वी के द्रव्यमान पर", correct: false },
            { text: "पृथ्वी की त्रिज्या पर", correct: false },
            { text: "वस्तु के द्रव्यमान पर", correct: true },
            { text: "पृथ्वी की सतह से ऊँचाई पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वीय त्वरण (g = GM/R²) केवल ग्रह (पृथ्वी) के द्रव्यमान और त्रिज्या पर निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> गिरने वाली वस्तु के द्रव्यमान पर नहीं।"
    },
    {
        question: "प्रश्न 39. जड़त्वीय निर्देश तंत्र में, यदि किसी वस्तु पर कोई बल नहीं लग रहा है, तो उसका त्वरण:",
        answers: shuffle([
            { text: "निश्चित रूप से शून्य होगा।", correct: true },
            { text: "स्थिर लेकिन अशून्य हो सकता है।", correct: false },
            { text: "निश्चित रूप से बढ़ेगा।", correct: false },
            { text: "निश्चित रूप से घटेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह न्यूटन के पहले नियम का प्रत्यक्ष कथन है।"
    },
    {
        question: "प्रश्न 40. सरल आवर्त गति (SHM) में, त्वरण अधिकतम कहाँ होता है?",
        answers: shuffle([
            { text: "साम्यावस्था पर", correct: false },
            { text: "चरम स्थितियों (endpoints) पर", correct: true },
            { text: "साम्यावस्था और चरम स्थिति के बीच", correct: false },
            { text: "हर जगह समान रहता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल आवर्त गति में त्वरण विस्थापन के समानुपाती (a ∝ -x) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि विस्थापन चरम स्थितियों पर अधिकतम होता है, इसलिए त्वरण भी वहीं अधिकतम होता है।"
    },
    {
        question: "प्रश्न 41. किसी पिंड का त्वरण उसके वेग में परिवर्तन के अलावा और क्या इंगित कर सकता है?",
        answers: shuffle([
            { text: "उसकी स्थिति", correct: false },
            { text: "उस पर कार्य करने वाला शुद्ध बल", correct: true },
            { text: "उसकी गतिज ऊर्जा", correct: false },
            { text: "उसका तापमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> F=ma के अनुसार, यदि त्वरण ज्ञात है, तो उस पर लगने वाले शुद्ध बल की गणना की जा सकती है (यदि द्रव्यमान ज्ञात हो)।"
    },
    {
        question: "प्रश्न 42. एक कार जो एक मोड़ पर धीमी हो रही है, में त्वरण की दिशा क्या होगी?",
        answers: shuffle([
            { text: "केंद्र की ओर", correct: false },
            { text: "गति के विपरीत", correct: false },
            { text: "केंद्र की ओर और गति के विपरीत का परिणामी", correct: true },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोड़ के कारण एक अभिकेंद्रीय त्वरण (केंद्र की ओर) और धीमा होने के कारण एक स्पर्शीय मंदन (गति के विपरीत) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुल त्वरण इन दोनों का सदिश योग होगा।"
    },
    {
        question: "प्रश्न 43. यदि त्वरण समय के साथ रैखिक रूप से बढ़ता है, तो इस गति को क्या कहते हैं?",
        answers: shuffle([
            { text: "एकरूप गति", correct: false },
            { text: "एकरूप त्वरित गति", correct: false },
            { text: "जर्क (Jerk)", correct: true },
            { text: "दोलनी गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण में परिवर्तन की दर को \"जर्क\" कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि त्वरण रैखिक रूप से बढ़ रहा है, तो इसका मतलब है कि जर्क स्थिर है।"
    },
    {
        question: "प्रश्न 44. किसी ढलान पर बिना फिसले लुढ़कती हुई एक गेंद का त्वरण:",
        answers: shuffle([
            { text: "g के बराबर होता है", correct: false },
            { text: "g sin(θ) के बराबर होता है", correct: false },
            { text: "g sin(θ) से कम होता है", correct: true },
            { text: "g sin(θ) से अधिक होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि गेंद केवल फिसलती, तो त्वरण g sin(θ) होता।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन लुढ़कने के लिए घूर्णी गति की भी आवश्यकता होती है, जिसमें कुछ ऊर्जा खर्च होती है, जिससे रैखिक त्वरण कम हो जाता है।"
    },
    {
        question: "प्रश्न 45. एक रॉकेट का त्वरण उड़ान के दौरान क्यों बढ़ता है, भले ही इंजन एक स्थिर बल प्रदान कर रहा हो?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण कम होने के कारण", correct: false },
            { text: "ईंधन जलने से रॉकेट का द्रव्यमान कम होने के कारण", correct: true },
            { text: "वायु प्रतिरोध कम होने के कारण", correct: false },
            { text: "इंजन की दक्षता बढ़ने के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> F=ma के अनुसार, यदि बल (F) स्थिर है और द्रव्यमान (m) घट रहा है, तो त्वरण (a) को बढ़ना चाहिए।"
    },
    {
        question: "प्रश्न 46. जब कोई धावक दौड़ पूरी करने के बाद रुकता है, तो उसका अंतिम त्वरण होता है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक (मंदन)", correct: true },
            { text: "शून्य", correct: false },
            { text: "यह उसकी चाल पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग को कम करके शून्य पर लाने के लिए गति की दिशा के विपरीत एक त्वरण की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे मंदन कहते हैं।"
    },
    {
        question: "प्रश्न 47. शून्य त्वरण पर, क्या कोई वस्तु गति में हो सकती है?",
        answers: shuffle([
            { text: "नहीं, वह हमेशा स्थिर रहेगी", correct: false },
            { text: "हाँ, एकसमान वेग के साथ", correct: true },
            { text: "हाँ, परिवर्ती वेग के साथ", correct: false },
            { text: "केवल वृत्तीय पथ पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शून्य त्वरण का मतलब है कि वेग में कोई परिवर्तन नहीं हो रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यानी वस्तु या तो स्थिर है या एकसमान वेग से चल रही है।"
    },
    {
        question: "प्रश्न 48. त्वरण का वस्तु के द्रव्यमान से क्या संबंध है (एक निश्चित बल के लिए)?",
        answers: shuffle([
            { text: "समानुपाती", correct: false },
            { text: "व्युत्क्रमानुपाती", correct: true },
            { text: "कोई संबंध नहीं", correct: false },
            { text: "वर्ग के समानुपाती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> F=ma या a = F/m के अनुसार, यदि बल F स्थिर है, तो त्वरण (a) द्रव्यमान (m) के व्युत्क्रमानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारी वस्तुओं में कम त्वरण होता है।"
    },
    {
        question: "प्रश्न 49. एक लिफ्ट जो नीचे की ओर त्वरित हो रही है, में गुरुत्वीय त्वरण का आभासी मान:",
        answers: shuffle([
            { text: "g से अधिक होता है", correct: false },
            { text: "g से कम होता है", correct: true },
            { text: "g के बराबर होता है", correct: false },
            { text: "शून्य होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीचे की ओर त्वरण भारहीनता की भावना पैदा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे आभासी गुरुत्व (g - a) कम हो जाता है।"
    },
    {
        question: "प्रश्न 50. यदि किसी वस्तु पर लगने वाला बल दोगुना कर दिया जाए और उसका द्रव्यमान आधा कर दिया जाए, तो उसका त्वरण:",
        answers: shuffle([
            { text: "अपरिवर्तित रहेगा", correct: false },
            { text: "दोगुना हो जाएगा", correct: false },
            { text: "आधा हो जाएगा", correct: false },
            { text: "चार गुना हो जाएगा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> a = F/m।<br><br><i class='fa-solid fa-angles-right icon'></i> नया त्वरण a' = (2F) / (m/2) = 4(F/m) = 4a।"
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