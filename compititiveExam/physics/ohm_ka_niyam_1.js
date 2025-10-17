const questions = [
    {
        topHeading: "ओम के नियम पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. ओम का नियम किसे परिभाषित करता है?",
        answers: shuffle([
            { text: "केवल प्रतिरोध को", correct: false },
            { text: "केवल धारा को", correct: false },
            { text: "केवल वोल्टता को", correct: false },
            { text: "धारा और विभवांतर के बीच संबंध को", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम का नियम बताता है कि यदि भौतिक अवस्थाएं स्थिर हों, तो किसी चालक के सिरों पर लगाया गया विभवांतर उसमें प्रवाहित होने वाली धारा के अनुक्रमानुपाती होता है।"
    },
    {
        question: "प्रश्न 2. ओम के नियम के अनुसार, यदि विभवांतर को स्थिर रखा जाए, तो धारा और प्रतिरोध के बीच क्या संबंध है?",
        answers: shuffle([
            { text: "धारा प्रतिरोध के अनुक्रमानुपाती होती है", correct: false },
            { text: "धारा प्रतिरोध के व्युत्क्रमानुपाती होती है", correct: true },
            { text: "धारा प्रतिरोध के वर्ग के अनुक्रमानुपाती होती है", correct: false },
            { text: "धारा प्रतिरोध पर निर्भर नहीं करती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम (I = V/R) से, यदि विभवांतर (V) स्थिर है, तो धारा (I) प्रतिरोध (R) के व्युत्क्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि प्रतिरोध बढ़ने पर धारा घटेगी।"
    },
    {
        question: "प्रश्न 3. ओम के नियम का गणितीय रूप क्या है?",
        answers: shuffle([
            { text: "R = V / I", correct: true },
            { text: "V = I / R", correct: false },
            { text: "I = V * R", correct: false },
            { text: "R = I / V", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम को सामान्यतः V = IR के रूप में लिखा जाता है, जहाँ V विभवांतर, I धारा और R प्रतिरोध है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे R = V/I के रूप में भी व्यक्त किया जा सकता है।"
    },
    {
        question: "प्रश्न 4. ओम के नियम में, कौन सी भौतिक राशि को स्थिर माना जाता है?",
        answers: shuffle([
            { text: "धारा", correct: false },
            { text: "विभवांतर", correct: false },
            { text: "प्रतिरोध", correct: false },
            { text: "तापमान और अन्य भौतिक अवस्थाएं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम का नियम तभी लागू होता है जब चालक की भौतिक अवस्थाएं, जैसे कि तापमान, दाब आदि, अपरिवर्तित रहें, क्योंकि इन कारकों के बदलने से प्रतिरोध बदल सकता है।"
    },
    {
        question: "प्रश्न 5. यदि किसी चालक का विभवांतर दोगुना कर दिया जाए और प्रतिरोध अपरिवर्तित रहे, तो धारा पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "आधी हो जाएगी", correct: false },
            { text: "दोगुनी हो जाएगी", correct: true },
            { text: "अपरिवर्तित रहेगी", correct: false },
            { text: "चार गुनी हो जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम (I = V/R) के अनुसार, धारा विभवांतर के सीधे अनुक्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, विभवांतर को दोगुना करने पर धारा भी दोगुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 6. यदि किसी परिपथ में धारा को आधा कर दिया जाए और प्रतिरोध को दोगुना कर दिया जाए, तो विभवांतर पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "आधा हो जाएगा", correct: false },
            { text: "दोगुना हो जाएगा", correct: false },
            { text: "अपरिवर्तित रहेगा", correct: true },
            { text: "चार गुना हो जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> V = IR के अनुसार, नया विभवांतर V' = (I/2) * (2R) = IR होगा, जो मूल विभवांतर V के बराबर है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः विभवांतर अपरिवर्तित रहेगा।"
    },
    {
        question: "प्रश्न 7. प्रतिरोध (Resistance) का SI मात्रक क्या है?",
        answers: shuffle([
            { text: "वोल्ट", correct: false },
            { text: "एम्पीयर", correct: false },
            { text: "ओम", correct: true },
            { text: "वाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत प्रतिरोध का SI मात्रक ओम (Ohm) है, जिसे ग्रीक अक्षर ओमेगा (Ω) से दर्शाया जाता है।"
    },
    {
        question: "प्रश्न 8. एक ओम को कैसे परिभाषित किया जाता है?",
        answers: shuffle([
            { text: "एक एम्पीयर प्रति वोल्ट", correct: false },
            { text: "एक वोल्ट प्रति एम्पीयर", correct: true },
            { text: "एक कूलॉम प्रति सेकंड", correct: false },
            { text: "एक जूल प्रति कूलॉम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम (R = V/I) के अनुसार, यदि किसी चालक के सिरों पर 1 वोल्ट का विभवांतर लगाने पर उसमें से 1 एम्पीयर की धारा प्रवाहित होती है, तो उसका प्रतिरोध 1 ओम होता है।"
    },
    {
        question: "प्रश्न 9. जो चालक ओम के नियम का पालन करते हैं, उन्हें क्या कहा जाता है?",
        answers: shuffle([
            { text: "अन-ओमीय चालक", correct: false },
            { text: "ओमीय चालक", correct: true },
            { text: "अर्धचालक", correct: false },
            { text: "अतिचालक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओमीय चालक या रैखिक चालक वे पदार्थ होते हैं जिनका प्रतिरोध स्थिर रहता है और वे सभी परिस्थितियों में ओम के नियम का पूरी तरह से पालन करते हैं, जैसे कि अधिकांश धातुएं (स्थिर तापमान पर)।"
    },
    {
        question: "प्रश्न 10. निम्नलिखित में से कौन एक अन-ओमीय (non-ohmic) चालक का उदाहरण है?",
        answers: shuffle([
            { text: "तांबे का तार", correct: false },
            { text: "चांदी का तार", correct: false },
            { text: "डायोड वाल्व", correct: true },
            { text: "एल्यूमीनियम का तार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अन-ओमीय चालक वे होते हैं जो ओम के नियम का पालन नहीं करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> डायोड, ट्रांजिस्टर और थर्मिस्टर जैसे अर्धचालक उपकरण इसके उदाहरण हैं, क्योंकि इनका प्रतिरोध धारा या वोल्टेज के साथ बदलता है।"
    },
    {
        question: "प्रश्न 11. ओमीय चालक के लिए विभवांतर (V) और धारा (I) के बीच का ग्राफ कैसा होता है?",
        answers: shuffle([
            { text: "परवलय", correct: false },
            { text: "अतिपरवलय", correct: false },
            { text: "मूल बिंदु से गुजरने वाली एक सीधी रेखा", correct: true },
            { text: "एक वृत्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि V ∝ I (V = IR), V और I के बीच का संबंध रैखिक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, ग्राफ एक सीधी रेखा होती है जो मूल बिंदु से होकर गुजरती है।"
    },
    {
        question: "प्रश्न 12. V-I ग्राफ का ढलान (slope) क्या दर्शाता है?",
        answers: shuffle([
            { text: "प्रतिरोध", correct: true },
            { text: "प्रतिरोधकता", correct: false },
            { text: "चालकता", correct: false },
            { text: "धारा घनत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> V-I ग्राफ (जहाँ V को y-अक्ष पर और I को x-अक्ष पर लिया गया है) का ढलान ΔV/ΔI होता है, जो ओम के नियम के अनुसार प्रतिरोध (R) के बराबर है।"
    },
    {
        question: "प्रश्न 13. I-V ग्राफ का ढलान (slope) क्या दर्शाता है?",
        answers: shuffle([
            { text: "प्रतिरोध", correct: false },
            { text: "प्रतिरोध का व्युत्क्रम (चालकत्व)", correct: true },
            { text: "प्रतिरोधकता", correct: false },
            { text: "आवेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> I-V ग्राफ (जहाँ I को y-अक्ष पर और V को x-अक्ष पर लिया गया है) का ढलान ΔI/ΔV होता है, जो 1/R के बराबर है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1/R को चालकत्व कहते हैं।"
    },
    {
        question: "प्रश्न 14. किसी तार का प्रतिरोध उसकी लंबाई पर कैसे निर्भर करता है?",
        answers: shuffle([
            { text: "लंबाई के व्युत्क्रमानुपाती", correct: false },
            { text: "लंबाई के अनुक्रमानुपाती", correct: true },
            { text: "लंबाई के वर्ग के अनुक्रमानुपाती", correct: false },
            { text: "लंबाई पर निर्भर नहीं करता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी तार का प्रतिरोध (R) उसकी लंबाई (l) के सीधे अनुक्रमानुपाती होता है (R ∝ l)।<br><br><i class='fa-solid fa-angles-right icon'></i> अर्थात, लंबा तार अधिक प्रतिरोध प्रस्तुत करता है।"
    },
    {
        question: "प्रश्न 15. किसी तार का प्रतिरोध उसके अनुप्रस्थ काट के क्षेत्रफल पर कैसे निर्भर करता है?",
        answers: shuffle([
            { text: "क्षेत्रफल के व्युत्क्रमानुपाती", correct: true },
            { text: "क्षेत्रफल के अनुक्रमानुपाती", correct: false },
            { text: "क्षेत्रफल के वर्ग के व्युत्क्रमानुपाती", correct: false },
            { text: "क्षेत्रफल पर निर्भर नहीं करता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी तार का प्रतिरोध (R) उसके अनुप्रस्थ काट के क्षेत्रफल (A) के व्युत्क्रमानुपाती होता है (R ∝ 1/A)।<br><br><i class='fa-solid fa-angles-right icon'></i> अर्थात, मोटा तार कम प्रतिरोध प्रस्तुत करता है।"
    },
    {
        question: "प्रश्न 16. प्रतिरोधकता (Resistivity) का SI मात्रक क्या है?",
        answers: shuffle([
            { text: "ओम", correct: false },
            { text: "ओम/मीटर", correct: false },
            { text: "ओम-मीटर", correct: true },
            { text: "म्हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता (ρ) का सूत्र R = ρ(l/A) से ρ = RA/l होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी इकाई (ओम × मीटर²)/मीटर = ओम-मीटर (Ω•m) है।"
    },
    {
        question: "प्रश्न 17. प्रतिरोधकता किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "तार की लंबाई पर", correct: false },
            { text: "तार की मोटाई पर", correct: false },
            { text: "तार के पदार्थ की प्रकृति और तापमान पर", correct: true },
            { text: "तार के आकार पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता (विशिष्ट प्रतिरोध) किसी पदार्थ का एक आंतरिक गुण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केवल इस बात पर निर्भर करता है कि पदार्थ क्या है और उसका तापमान कितना है, न कि उसके आकार या विमाओं पर।"
    },
    {
        question: "प्रश्न 18. ओम का नियम किस प्रकार के परिपथों पर लागू होता है?",
        answers: shuffle([
            { text: "केवल AC परिपथों पर", correct: false },
            { text: "केवल DC परिपथों पर", correct: false },
            { text: "AC और DC दोनों पर (प्रतिरोधी भार के लिए)", correct: true },
            { text: "केवल अर्धचालक परिपथों पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम का नियम शुद्ध प्रतिरोधी भार वाले AC और DC दोनों परिपथों पर समान रूप से लागू होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, AC परिपथों में प्रेरकत्व और धारिता के लिए इसे प्रतिबाधा (impedance) के रूप में विस्तारित किया जाता है।"
    },
    {
        question: "प्रश्न 19. धातुओं का तापमान बढ़ाने पर उनका प्रतिरोध...?",
        answers: shuffle([
            { text: "घटता है", correct: false },
            { text: "बढ़ता है", correct: true },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "पहले बढ़ता है फिर घटता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तापमान बढ़ाने पर, धातु के आयनों का कंपन बढ़ जाता है, जिससे इलेक्ट्रॉनों के प्रवाह के मार्ग में अधिक टक्करें होती हैं और प्रतिरोध बढ़ जाता है।"
    },
    {
        question: "प्रश्न 20. अर्धचालकों का तापमान बढ़ाने पर उनका प्रतिरोध...?",
        answers: shuffle([
            { text: "घटता है", correct: true },
            { text: "बढ़ता है", correct: false },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "शून्य हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धचालकों में तापमान बढ़ाने पर अधिक आवेश वाहक (इलेक्ट्रॉन और होल) उत्पन्न होते हैं, जिससे उनकी चालकता बढ़ती है और प्रतिरोध घटता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण वे ओम के नियम का पालन नहीं करते हैं।"
    },
    {
        question: "प्रश्न 21. ओम के नियम की एक सीमा क्या है?",
        answers: shuffle([
            { text: "यह केवल धातुओं पर लागू होता है", correct: false },
            { text: "यह सभी तापमानों पर मान्य नहीं है", correct: true },
            { text: "यह निर्वात में लागू नहीं होता", correct: false },
            { text: "यह केवल कम वोल्टेज पर लागू होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम का नियम केवल तभी तक मान्य है जब तक चालक का तापमान स्थिर रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उच्च धारा के कारण जब चालक गर्म हो जाता है, तो उसका प्रतिरोध बदल जाता है और वह नियम से विचलित हो जाता है।"
    },
    {
        question: "प्रश्न 22. एक परिपथ में प्रतिरोध का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "धारा के प्रवाह को बढ़ाना", correct: false },
            { text: "धारा के प्रवाह को नियंत्रित या सीमित करना", correct: true },
            { text: "वोल्टेज उत्पन्न करना", correct: false },
            { text: "आवेश का भंडारण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम के अनुसार, प्रतिरोध परिपथ में बहने वाली धारा की मात्रा को सीमित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग परिपथ के विभिन्न भागों में धारा को नियंत्रित करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 23. चालकत्व (Conductance) प्रतिरोध का ________ है।",
        answers: shuffle([
            { text: "समानुपाती", correct: false },
            { text: "वर्ग", correct: false },
            { text: "व्युत्क्रम", correct: true },
            { text: "वर्गमूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकत्व (G) किसी पदार्थ द्वारा धारा को प्रवाहित होने देने की सुगमता का माप है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रतिरोध (R) का व्युत्क्रम होता है, G = 1/R।"
    },
    {
        question: "प्रश्न 24. चालकत्व का SI मात्रक क्या है?",
        answers: shuffle([
            { text: "ओम", correct: false },
            { text: "हेनरी", correct: false },
            { text: "फैरड", correct: false },
            { text: "सीमेन्स (या म्हो)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकत्व का SI मात्रक सीमेन्स (S) है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'म्हो' (ohm को उल्टा लिखने पर) भी कहा जाता है और इसका प्रतीक ℧ होता है।"
    },
    {
        question: "प्रश्न 25. यदि किसी चालक का प्रतिरोध बहुत अधिक है, तो उसका चालकत्व होगा?",
        answers: shuffle([
            { text: "बहुत अधिक", correct: false },
            { text: "बहुत कम", correct: true },
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि चालकत्व प्रतिरोध का व्युत्क्रम है, इसलिए उच्च प्रतिरोध का अर्थ है बहुत कम चालकत्व।"
    },
    {
        question: "प्रश्न 26. ओम का नियम किसके द्वारा दिया गया था?",
        answers: shuffle([
            { text: "माइकल फैराडे", correct: false },
            { text: "आंद्रे-मैरी एम्पीयर", correct: false },
            { text: "जॉर्ज साइमन ओम", correct: true },
            { text: "एलेसेंड्रो वोल्टा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जर्मन भौतिक विज्ञानी जॉर्ज साइमन ओम ने 1827 में एक चालक में वोल्टेज, धारा और प्रतिरोध के बीच संबंध स्थापित किया था।"
    },
    {
        question: "प्रश्न 27. एक आदर्श एमीटर का प्रतिरोध कितना माना जाता है?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "शून्य", correct: true },
            { text: "एक ओम", correct: false },
            { text: "बहुत अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एमीटर को परिपथ में श्रेणीक्रम में जोड़ा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि इसका प्रतिरोध शून्य होगा, तो यह परिपथ की कुल धारा को प्रभावित नहीं करेगा और सटीक माप देगा।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ओम के नियम के अनुप्रयोगों में महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 28. एक आदर्श वोल्टमीटर का प्रतिरोध कितना माना जाता है?",
        answers: shuffle([
            { text: "अनंत", correct: true },
            { text: "शून्य", correct: false },
            { text: "एक ओम", correct: false },
            { text: "बहुत कम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्टमीटर को परिपथ में समांतर क्रम में जोड़ा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि इसका प्रतिरोध अनंत होगा, तो यह परिपथ से कोई धारा नहीं लेगा और दो बिंदुओं के बीच सटीक विभवांतर मापेगा।"
    },
    {
        question: "प्रश्न 29. विद्युत शक्ति (Power), विभवांतर (V) और प्रतिरोध (R) के बीच क्या संबंध ओम के नियम से निकाला जा सकता है?",
        answers: shuffle([
            { text: "P = V² / R", correct: true },
            { text: "P = V * R", correct: false },
            { text: "P = R / V²", correct: false },
            { text: "P = V / R", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम जानते हैं कि शक्ति P = VI है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओम के नियम (I = V/R) से I का मान रखने पर, हमें P = V(V/R) = V²/R मिलता है।"
    },
    {
        question: "प्रश्न 30. विद्युत शक्ति (Power), धारा (I) और प्रतिरोध (R) के बीच क्या संबंध ओम के नियम से निकाला जा सकता है?",
        answers: shuffle([
            { text: "P = I / R", correct: false },
            { text: "P = I² * R", correct: true },
            { text: "P = R / I²", correct: false },
            { text: "P = I * R", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम जानते हैं कि शक्ति P = VI है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओम के नियम (V = IR) से V का मान रखने पर, हमें P = (IR)I = I²R मिलता है।"
    },
    {
        question: "प्रश्न 31. यदि किसी हीटर का प्रतिरोध दोगुना कर दिया जाए, तो समान वोल्टेज पर उसकी शक्ति कितनी हो जाएगी?",
        answers: shuffle([
            { text: "दोगुनी", correct: false },
            { text: "चार गुनी", correct: false },
            { text: "आधी", correct: true },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति का सूत्र P = V²/R है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि वोल्टेज (V) स्थिर है, तो शक्ति (P) प्रतिरोध (R) के व्युत्क्रमानुपाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः प्रतिरोध को दोगुना करने पर शक्ति आधी हो जाएगी।"
    },
    {
        question: "प्रश्न 32. ओम के नियम का सूक्ष्म रूप (microscopic form) क्या है?",
        answers: shuffle([
            { text: "V = IR", correct: false },
            { text: "J = σE", correct: true },
            { text: "P = VI", correct: false },
            { text: "F = qE", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ओम के नियम का सदिश रूप है, जहाँ J धारा घनत्व है, σ (सिग्मा) चालकता है, और E विद्युत क्षेत्र की तीव्रता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बताता है कि किसी बिंदु पर धारा घनत्व उस बिंदु पर विद्युत क्षेत्र के अनुक्रमानुपाती होता है।"
    },
    {
        question: "प्रश्न 33. ओम के नियम के सूक्ष्म रूप में, 'σ' (सिग्मा) क्या दर्शाता है?",
        answers: shuffle([
            { text: "पृष्ठीय आवेश घनत्व", correct: false },
            { text: "प्रतिरोधकता", correct: false },
            { text: "विद्युत चालकता", correct: true },
            { text: "धारा घनत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> σ (सिग्मा) पदार्थ की विद्युत चालकता को दर्शाता है, जो प्रतिरोधकता (ρ) का व्युत्क्रम है (σ = 1/ρ)।"
    },
    {
        question: "प्रश्न 34. दो प्रतिरोधक जिनका प्रतिरोध R1 और R2 है, श्रेणीक्रम में जुड़े हैं। उनका तुल्य प्रतिरोध ओम के नियम के अनुसार क्या होगा?",
        answers: shuffle([
            { text: "R1 * R2 / (R1 + R2)", correct: false },
            { text: "R1 + R2", correct: true },
            { text: "1/R1 + 1/R2", correct: false },
            { text: "R1 - R2", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रेणीक्रम संयोजन में, कुल विभवांतर अलग-अलग विभवांतरों का योग होता है और धारा समान रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओम का नियम लागू करने पर, तुल्य प्रतिरोध R_eq = R1 + R2 होता है।"
    },
    {
        question: "प्रश्न 35. दो प्रतिरोधक जिनका प्रतिरोध R1 और R2 है, समांतर क्रम में जुड़े हैं। उनका तुल्य प्रतिरोध ओम के नियम के अनुसार क्या होगा?",
        answers: shuffle([
            { text: "R1 + R2", correct: false },
            { text: "(1/R1 + 1/R2)⁻¹", correct: true },
            { text: "R1 - R2", correct: false },
            { text: "R1 * R2", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समांतर क्रम संयोजन में, कुल धारा अलग-अलग धाराओं का योग होती है और विभवांतर समान रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओम का नियम लागू करने पर, 1/R_eq = 1/R1 + 1/R2 होता है, या R_eq = (1/R1 + 1/R2)⁻¹।"
    },
    {
        question: "प्रश्न 36. ओम के नियम का सत्यापन करने वाले प्रयोग में, एक छात्र को एमीटर और वोल्टमीटर को कैसे जोड़ना चाहिए?",
        answers: shuffle([
            { text: "दोनों को श्रेणीक्रम में", correct: false },
            { text: "दोनों को समांतर क्रम में", correct: false },
            { text: "एमीटर को श्रेणीक्रम में और वोल्टमीटर को समांतर क्रम में", correct: true },
            { text: "एमीटर को समांतर क्रम में और वोल्टमीटर को श्रेणीक्रम में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धारा को मापने के लिए एमीटर को प्रतिरोधक के साथ श्रेणीक्रम में जोड़ा जाता है, और विभवांतर को मापने के लिए वोल्टमीटर को प्रतिरोधक के सिरों पर समांतर क्रम में जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 37. यदि किसी तार को खींचकर उसकी लंबाई दोगुनी कर दी जाए, तो उसका नया प्रतिरोध कितना हो जाएगा?",
        answers: shuffle([
            { text: "दोगुना", correct: false },
            { text: "आधा", correct: false },
            { text: "चार गुना", correct: true },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तार को खींचने पर उसका आयतन स्थिर रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबाई दोगुनी (l' = 2l) करने पर, उसका क्षेत्रफल आधा (A' = A/2) हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नया प्रतिरोध R' = ρ(l'/A') = ρ(2l / (A/2)) = 4(ρl/A) = 4R, अर्थात चार गुना हो जाएगा।"
    },
    {
        question: "प्रश्न 38. ओम का नियम किसके प्रवाह का वर्णन करता है?",
        answers: shuffle([
            { text: "इलेक्ट्रॉनों का", correct: true },
            { text: "प्रोटॉनों का", correct: false },
            { text: "न्यूट्रॉनों का", correct: false },
            { text: "फोटॉनों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धात्विक चालकों में, विद्युत धारा मुख्य रूप से मुक्त इलेक्ट्रॉनों के एक निश्चित दिशा में प्रवाह के कारण होती है, और ओम का नियम इसी प्रवाह से संबंधित विभवांतर और प्रतिरोध का वर्णन करता है।"
    },
    {
        question: "प्रश्न 39. एक फ्यूज तार के पदार्थ का प्रतिरोध और गलनांक कैसा होना चाहिए?",
        answers: shuffle([
            { text: "उच्च प्रतिरोध, उच्च गलनांक", correct: false },
            { text: "निम्न प्रतिरोध, निम्न गलनांक", correct: false },
            { text: "उच्च प्रतिरोध, निम्न गलनांक", correct: true },
            { text: "निम्न प्रतिरोध, उच्च गलनांक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोध उच्च होना चाहिए ताकि I²R तापन प्रभाव से यह जल्दी गर्म हो।<br><br><i class='fa-solid fa-angles-right icon'></i> गलनांक निम्न होना चाहिए ताकि एक निश्चित धारा सीमा पार करते ही यह पिघल जाए और परिपथ को तोड़ दे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ओम के नियम के तापीय अनुप्रयोगों से संबंधित है।"
    },
    {
        question: "प्रश्न 40. निम्नलिखित में से कौन सा उपकरण ओम के नियम का पालन नहीं करता है?",
        answers: shuffle([
            { text: "विद्युत हीटर", correct: false },
            { text: "ट्रांजिस्टर", correct: true },
            { text: "तांबे का तार", correct: false },
            { text: "विद्युत बल्ब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रांजिस्टर एक अर्धचालक युक्ति है और इसका V-I संबंध अरैखिक होता है, इसलिए यह ओम के नियम का पालन नहीं करता है।"
    },
    {
        question: "प्रश्न 41. 'शॉर्ट सर्किट' (लघुपथन) की स्थिति में, परिपथ का प्रतिरोध लगभग कितना हो जाता है?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "बहुत अधिक", correct: false },
            { text: "अपरिवर्तित", correct: false },
            { text: "लगभग शून्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शॉर्ट सर्किट में, फेज और न्यूट्रल तार सीधे संपर्क में आ जाते हैं, जिससे परिपथ का प्रतिरोध लगभग शून्य हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओम के नियम (I = V/R) के अनुसार, इससे धारा का मान बहुत अधिक हो जाता है।"
    },
    {
        question: "प्रश्न 42. ओम के नियम के अनुसार, यदि प्रतिरोध शून्य हो, तो धारा का मान क्या होगा?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "एक", correct: false },
            { text: "अनंत", correct: true },
            { text: "नियत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैद्धांतिक रूप से, यदि R=0 है, तो I = V/0, जो गणितीय रूप से अनंत है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अतिचालकता की स्थिति में होता है, जहाँ प्रतिरोध शून्य होता है।"
    },
    {
        question: "प्रश्न 43. एक तार की प्रतिरोधकता निर्भर करती है:",
        answers: shuffle([
            { text: "केवल तार के तापमान पर", correct: false },
            { text: "केवल तार के पदार्थ पर", correct: false },
            { text: "तार के पदार्थ और तापमान दोनों पर", correct: true },
            { text: "तार की लंबाई और क्षेत्रफल पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता पदार्थ का एक आंतरिक गुण है जो तापमान के साथ बदलता है।"
    },
    {
        question: "प्रश्न 44. किसी परिपथ में धारा के प्रवाह के लिए क्या आवश्यक है?",
        answers: shuffle([
            { text: "एक स्विच", correct: false },
            { text: "एक प्रतिरोधक", correct: false },
            { text: "एक विभवांतर", correct: true },
            { text: "एक संधारित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम के अनुसार, बिना विभवांतर (V=0) के किसी भी अशून्य प्रतिरोध वाले परिपथ में कोई धारा (I=0) प्रवाहित नहीं हो सकती।"
    },
    {
        question: "प्रश्न 45. ओम का नियम मूल रूप से ________ के संरक्षण के सिद्धांत का एक रूप है।",
        answers: shuffle([
            { text: "आवेश", correct: false },
            { text: "ऊर्जा", correct: true },
            { text: "संवेग", correct: false },
            { text: "द्रव्यमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब आवेश एक प्रतिरोधक से होकर गुजरता है, तो विभवांतर के कारण विद्युत स्थितिज ऊर्जा ऊष्मा के रूप में क्षय होती है (V = W/q)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रक्रिया ऊर्जा संरक्षण का पालन करती है, और ओम का नियम इस ऊर्जा क्षय की दर को प्रतिरोध से जोड़ता है।"
    },
    {
        question: "प्रश्न 46. एक ही पदार्थ और समान लंबाई के दो तार हैं, लेकिन एक दूसरे से दोगुना मोटा है। मोटे तार का प्रतिरोध पतले तार की तुलना में होगा?",
        answers: shuffle([
            { text: "दोगुना", correct: false },
            { text: "चार गुना", correct: false },
            { text: "एक-चौथाई", correct: true },
            { text: "आधा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोटा तार होने का मतलब है कि उसका व्यास दोगुना है, इसलिए त्रिज्या भी दोगुनी है।<br><br><i class='fa-solid fa-angles-right icon'></i> क्षेत्रफल (A = πr²) चार गुना हो जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि प्रतिरोध क्षेत्रफल के व्युत्क्रमानुपाती है (R ∝ 1/A), प्रतिरोध एक-चौथाई हो जाएगा।"
    },
    {
        question: "प्रश्न 47. मिश्र धातुओं (जैसे नाइक्रोम) का प्रतिरोध शुद्ध धातुओं की तुलना में कैसा होता है?",
        answers: shuffle([
            { text: "कम होता है", correct: false },
            { text: "अधिक होता है", correct: true },
            { text: "लगभग बराबर होता है", correct: false },
            { text: "शून्य होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिश्र धातुओं की प्रतिरोधकता आमतौर पर उनकी घटक शुद्ध धातुओं की तुलना में बहुत अधिक होती है, इसीलिए उनका उपयोग हीटिंग एलीमेंट बनाने में किया जाता है।"
    },
    {
        question: "प्रश्न 48. किसी चालक में इलेक्ट्रॉनों का अनुगमन वेग (drift velocity) और उसमें प्रवाहित धारा के बीच क्या संबंध है?",
        answers: shuffle([
            { text: "वे एक दूसरे के अनुक्रमानुपाती हैं", correct: true },
            { text: "वे एक दूसरे के व्युत्क्रमानुपाती हैं", correct: false },
            { text: "उनके बीच कोई संबंध नहीं है", correct: false },
            { text: "वे एक दूसरे के वर्ग के बराबर हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धारा (I) का मान I = nAev_d होता है, जहाँ v_d अनुगमन वेग है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, धारा अनुगमन वेग के सीधे अनुक्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ओम के नियम की सूक्ष्म व्याख्या का हिस्सा है।"
    },
    {
        question: "प्रश्न 49. ओम के नियम की वैधता के लिए क्या आवश्यक है?",
        answers: shuffle([
            { text: "परिपथ में केवल AC धारा हो", correct: false },
            { text: "परिपथ का तापमान बहुत अधिक हो", correct: false },
            { text: "चालक का प्रतिरोध विभवांतर और धारा से स्वतंत्र हो", correct: true },
            { text: "परिपथ निर्वात में हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम का सार यह है कि प्रतिरोध (R = V/I) एक स्थिरांक है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिन पदार्थों के लिए यह स्थिरांक नहीं रहता (जैसे अर्धचालक), वे इस नियम का पालन नहीं करते हैं।"
    },
    {
        question: "प्रश्न 50. विद्युत अपघट्य (Electrolytes) के विलयन...?",
        answers: shuffle([
            { text: "ओम के नियम का सख्ती से पालन करते हैं", correct: false },
            { text: "ओम के नियम का पालन नहीं करते हैं", correct: true },
            { text: "केवल उच्च तापमान पर ओम के नियम का पालन करते हैं", correct: false },
            { text: "केवल AC धारा के लिए ओम के नियम का पालन करते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत अपघट्यों का प्रतिरोध सांद्रता, तापमान और अन्य कारकों पर निर्भर करता है और उनका V-I संबंध रैखिक नहीं होता है, इसलिए वे आम तौर पर अन-ओमीय होते हैं।"
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