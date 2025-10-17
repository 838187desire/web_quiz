const questions = [
    {
        topHeading: "ओम के नियम पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. यदि V-I ग्राफ मूल बिंदु से गुजरने वाली सीधी रेखा न होकर वक्र हो, तो चालक कैसा है?",
        answers: shuffle([
            { text: "ओमीय", correct: false },
            { text: "अन-ओमीय", correct: true },
            { text: "अतिचालक", correct: false },
            { text: "कुचालक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वक्र ग्राफ यह दर्शाता है कि V और I का अनुपात (प्रतिरोध) स्थिर नहीं है, जो अन-ओमीय चालकों की विशेषता है।"
    },
    {
        question: "प्रश्न 2. किसी चालक का प्रतिरोध निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "चालक के पदार्थ पर", correct: false },
            { text: "चालक के तापमान पर", correct: false },
            { text: "चालक की लंबाई पर", correct: false },
            { text: "चालक पर आरोपित विभवांतर पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक ओमीय चालक का प्रतिरोध उसकी आंतरिक विशेषता है;<br><br><i class='fa-solid fa-angles-right icon'></i> यह आरोपित विभवांतर या उससे बहने वाली धारा की मात्रा पर निर्भर नहीं करता है।"
    },
    {
        question: "प्रश्न 3. 'प्रतिबाधा' (Impedance) की अवधारणा का उपयोग किस प्रकार के परिपथों के लिए ओम के नियम के विस्तार के रूप में किया जाता है?",
        answers: shuffle([
            { text: "केवल DC परिपथ", correct: false },
            { text: "AC परिपथ", correct: true },
            { text: "केवल खुले परिपथ", correct: false },
            { text: "केवल शॉर्ट सर्किट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> AC परिपथों में, प्रेरक (inductors) और संधारित्र (capacitors) भी धारा का विरोध करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिरोध, प्रेरकीय प्रतिघात और धारितीय प्रतिघात के संयुक्त प्रभाव को प्रतिबाधा (Z) कहते हैं, और AC परिपथ के लिए ओम का नियम V = IZ हो जाता है।"
    },
    {
        question: "प्रश्न 4. अतिचालक (Superconductor) की अवस्था में, पदार्थ का प्रतिरोध कितना होता है?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "बहुत अधिक", correct: false },
            { text: "शून्य", correct: true },
            { text: "एक ओम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अतिचालक वे पदार्थ होते हैं जिनका प्रतिरोध एक निश्चित क्रांतिक तापमान से नीचे शून्य हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस अवस्था में, ओम के नियम के अनुसार, शून्य प्रतिरोध पर धारा बनाए रखने के लिए किसी विभवांतर की आवश्यकता नहीं होती है।"
    },
    {
        question: "प्रश्न 5. यदि किसी चालक का प्रतिरोध समय के साथ बदलता है, तो क्या यह ओम के नियम का पालन करता है?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "नहीं", correct: true },
            { text: "केवल यदि परिवर्तन रैखिक हो", correct: false },
            { text: "केवल AC परिपथों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम की एक मूलभूत शर्त यह है कि एक दिए गए चालक के लिए प्रतिरोध स्थिर होना चाहिए।"
    },
    {
        question: "प्रश्न 6. किसी पदार्थ की चालकता बढ़ने का क्या अर्थ है?",
        answers: shuffle([
            { text: "उसकी प्रतिरोधकता बढ़ गई है", correct: false },
            { text: "उसकी प्रतिरोधकता घट गई है", correct: true },
            { text: "उसकी लंबाई बढ़ गई है", correct: false },
            { text: "उसका क्षेत्रफल घट गया है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकता (σ) प्रतिरोधकता (ρ) का व्युत्क्रम (σ = 1/ρ) है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः चालकता बढ़ने का मतलब है कि पदार्थ धारा का कम विरोध कर रहा है, यानी उसकी प्रतिरोधकता घट गई है।"
    },
    {
        question: "प्रश्न 7. यदि एक तार को दो बराबर भागों में काट दिया जाए, तो प्रत्येक भाग का प्रतिरोध मूल तार के प्रतिरोध का कितना होगा?",
        answers: shuffle([
            { text: "दोगुना", correct: false },
            { text: "आधा", correct: true },
            { text: "बराबर", correct: false },
            { text: "एक-चौथाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोध लंबाई के अनुक्रमानुपाती (R ∝ l) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबाई को आधा करने पर प्रतिरोध भी आधा हो जाएगा।"
    },
    {
        question: "प्रश्न 8. थर्मिस्टर क्या है?",
        answers: shuffle([
            { text: "एक प्रकार का ओमीय प्रतिरोधक", correct: false },
            { text: "एक ऊष्मा-संवेदी अर्धचालक जो ओम के नियम का पालन नहीं करता", correct: true },
            { text: "एक उपकरण जो वोल्टेज मापता है", correct: false },
            { text: "एक अतिचालक पदार्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थर्मिस्टर का प्रतिरोध तापमान के साथ बहुत तेजी से बदलता है, इसलिए यह एक अन-ओमीय उपकरण है जिसका उपयोग तापमान मापने या तापमान संवेदी स्विच के रूप में किया जाता है।"
    },
    {
        question: "प्रश्न 9. ओम के नियम के अनुसार, विभवांतर और धारा का अनुपात क्या देता है?",
        answers: shuffle([
            { text: "शक्ति", correct: false },
            { text: "ऊर्जा", correct: false },
            { text: "प्रतिरोध", correct: true },
            { text: "आवेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिभाषा के अनुसार, R = V/I, अर्थात विभवांतर और धारा का अनुपात चालक का प्रतिरोध है।"
    },
    {
        question: "प्रश्न 10. एक ही धातु के दो तारों की लंबाई और प्रतिरोध समान हैं। उनके व्यासों का अनुपात क्या होगा?",
        answers: shuffle([
            { text: "वे भिन्न हो सकते हैं", correct: false },
            { text: "उनका अनुपात 1:1 होगा", correct: true },
            { text: "उनका अनुपात 2:1 होगा", correct: false },
            { text: "उनका अनुपात 1:2 होगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि पदार्थ, लंबाई और प्रतिरोध समान हैं (R = ρl/A), तो उनका अनुप्रस्थ काट क्षेत्रफल (A) भी समान होना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि क्षेत्रफल समान है, तो उनका व्यास भी समान होगा।"
    },
    {
        question: "प्रश्न 11. यदि किसी परिपथ में वोल्टेज को आधा कर दिया जाए और प्रतिरोध को भी आधा कर दिया जाए, तो धारा...?",
        answers: shuffle([
            { text: "दोगुनी हो जाएगी", correct: false },
            { text: "आधी हो जाएगी", correct: false },
            { text: "चार गुनी हो जाएगी", correct: false },
            { text: "अपरिवर्तित रहेगी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम I = V/R के अनुसार, नई धारा I' = (V/2) / (R/2) = V/R = I होगी।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः धारा अपरिवर्तित रहेगी।"
    },
    {
        question: "प्रश्न 12. एक ओमीय प्रतिरोधक में ऊर्जा का क्षय किस रूप में होता है?",
        answers: shuffle([
            { text: "प्रकाश ऊर्जा", correct: false },
            { text: "ध्वनि ऊर्जा", correct: false },
            { text: "ऊष्मा ऊर्जा", correct: true },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रतिरोधक से धारा प्रवाहित होती है, तो इलेक्ट्रॉन आयनों से टकराते हैं, जिससे उनकी विद्युत ऊर्जा ऊष्मा में परिवर्तित हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे जूल तापन प्रभाव कहते हैं, जो P = I²R द्वारा वर्णित है।"
    },
    {
        question: "प्रश्न 13. ओम का नियम लागू करने के लिए, धारा को कैसा होना चाहिए?",
        answers: shuffle([
            { text: "बहुत अधिक", correct: false },
            { text: "बहुत कम", correct: false },
            { text: "ऐसा कि चालक का तापमान महत्वपूर्ण रूप से न बदले", correct: true },
            { text: "केवल प्रत्यावर्ती (AC)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि धारा बहुत अधिक है, तो चालक गर्म हो जाएगा, उसका प्रतिरोध बदल जाएगा, और ओम का नियम लागू नहीं होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, नियम की वैधता के लिए तापमान का स्थिर रहना महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 14. किसी चालक की प्रतिरोधकता का व्युत्क्रम क्या कहलाता है?",
        answers: shuffle([
            { text: "प्रतिरोध", correct: false },
            { text: "चालकत्व", correct: false },
            { text: "चालकता", correct: true },
            { text: "प्रतिबाधा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत चालकता (σ) प्रतिरोधकता (ρ) का व्युत्क्रम है और यह मापता है कि कोई पदार्थ कितनी आसानी से विद्युत धारा का चालन कर सकता है।"
    },
    {
        question: "प्रश्न 15. प्रकाश उत्सर्जक डायोड (LED) के लिए V-I ग्राफ कैसा होगा?",
        answers: shuffle([
            { text: "मूल बिंदु से गुजरने वाली सीधी रेखा", correct: false },
            { text: "एक परवलयिक वक्र", correct: false },
            { text: "एक अरैखिक वक्र", correct: true },
            { text: "Y-अक्ष के समानांतर एक सीधी रेखा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> LED एक अर्धचालक डायोड है और यह एक अन-ओमीय उपकरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका V-I ग्राफ रैखिक नहीं होता है;<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक निश्चित 'कट-इन' वोल्टेज के बाद तेजी से बढ़ता है।"
    },
    {
        question: "प्रश्न 16. यदि किसी तार के अनुप्रस्थ काट की त्रिज्या आधी कर दी जाए, तो उसका प्रतिरोध कितना हो जाएगा?",
        answers: shuffle([
            { text: "आधा", correct: false },
            { text: "दोगुना", correct: false },
            { text: "चार गुना", correct: true },
            { text: "सोलह गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोध क्षेत्रफल (A = πr²) के व्युत्क्रमानुपाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि त्रिज्या आधी (r/2) की जाती है, तो नया क्षेत्रफल A' = π(r/2)² = A/4 हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, नया प्रतिरोध R' ∝ 1/A' = 1/(A/4) = 4/A, यानी यह मूल प्रतिरोध का चार गुना हो जाएगा।"
    },
    {
        question: "प्रश्न 17. मैंगनिन और कॉन्स्टेंटन जैसी मिश्र धातुओं का उपयोग मानक प्रतिरोधक बनाने के लिए क्यों किया जाता है?",
        answers: shuffle([
            { text: "क्योंकि वे बहुत सस्ती हैं", correct: false },
            { text: "क्योंकि उनकी प्रतिरोधकता बहुत कम है", correct: false },
            { text: "क्योंकि उनका प्रतिरोध ताप गुणांक बहुत कम है", correct: true },
            { text: "क्योंकि वे बहुत मजबूत हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन मिश्र धातुओं का प्रतिरोध तापमान में परिवर्तन के साथ बहुत कम बदलता है, जिससे वे सटीक और स्थिर प्रतिरोधक बनाने के लिए आदर्श होती हैं, जो ओम के नियम के प्रयोगों के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 18. ओम के नियम का कौन सा पहलू विद्युत परिपथों की सुरक्षा में महत्वपूर्ण है?",
        answers: shuffle([
            { text: "V और I का रैखिक संबंध", correct: false },
            { text: "I और R का व्युत्क्रमानुपाती संबंध", correct: true },
            { text: "तापमान पर प्रतिरोध की निर्भरता", correct: false },
            { text: "पदार्थ पर प्रतिरोधकता की निर्भरता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुरक्षा उपकरण जैसे फ्यूज और सर्किट ब्रेकर इस सिद्धांत पर काम करते हैं कि जब प्रतिरोध बहुत कम हो जाता है (जैसे शॉर्ट सर्किट में), तो धारा बहुत अधिक हो जाती है, जिसे रोककर परिपथ की सुरक्षा की जाती है।"
    },
    {
        question: "प्रश्न 19. गैसों में विद्युत चालन...?",
        answers: shuffle([
            { text: "हमेशा ओम के नियम का पालन करता है", correct: false },
            { text: "सामान्य परिस्थितियों में ओम के नियम का पालन नहीं करता", correct: true },
            { text: "केवल निम्न दाब पर ओम के नियम का पालन करता है", correct: false },
            { text: "केवल उच्च दाब पर ओम के नियम का पालन करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य दाब पर गैसें विद्युत की कुचालक होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> आयनीकरण के बाद वे चालन कर सकती हैं, लेकिन उनका V-I संबंध जटिल और अरैखिक होता है।"
    },
    {
        question: "प्रश्न 20. यदि किसी ओमीय चालक के सिरों पर विभवांतर को घटाकर एक-तिहाई कर दिया जाए, तो उसमें प्रवाहित होने वाली धारा...?",
        answers: shuffle([
            { text: "तीन गुनी हो जाएगी", correct: false },
            { text: "नौ गुनी हो जाएगी", correct: false },
            { text: "एक-तिहाई हो जाएगी", correct: true },
            { text: "अपरिवर्तित रहेगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम (I = V/R) के अनुसार, धारा विभवांतर के सीधे अनुक्रमानुपाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> विभवांतर को एक-तिहाई करने पर धारा भी एक-तिहाई हो जाएगी।"
    },
    {
        question: "प्रश्न 21. एक बैटरी का आंतरिक प्रतिरोध क्या है?",
        answers: shuffle([
            { text: "बैटरी के बाहर परिपथ का प्रतिरोध", correct: false },
            { text: "बैटरी के अंदर इलेक्ट्रोलाइट और इलेक्ट्रोड द्वारा प्रस्तुत प्रतिरोध", correct: true },
            { text: "एक चर प्रतिरोधक", correct: false },
            { text: "शून्य प्रतिरोध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैटरी के अंदर के पदार्थ भी धारा के प्रवाह में कुछ बाधा डालते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आंतरिक प्रतिरोध ओम के नियम के अनुसार, टर्मिनल वोल्टेज को EMF से कम कर देता है जब धारा बह रही हो।"
    },
    {
        question: "प्रश्न 22. किसी चालक की विशिष्ट चालकता (Specific Conductance) क्या है?",
        answers: shuffle([
            { text: "विशिष्ट प्रतिरोध का वर्ग", correct: false },
            { text: "विशिष्ट प्रतिरोध का व्युत्क्रम", correct: true },
            { text: "प्रतिरोध का व्युत्क्रम", correct: false },
            { text: "प्रतिरोध का वर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशिष्ट चालकता, जिसे केवल चालकता (σ) भी कहते हैं, विशिष्ट प्रतिरोध या प्रतिरोधकता (ρ) का व्युत्क्रम है।"
    },
    {
        question: "प्रश्न 23. जब एक वोल्टमीटर को किसी प्रतिरोधक के सिरों पर जोड़ा जाता है, तो यह कुछ धारा खींचता है। इससे मापे गए विभवांतर पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "मापा गया मान वास्तविक मान से थोड़ा अधिक होता है", correct: false },
            { text: "मापा गया मान वास्तविक मान से थोड़ा कम होता है", correct: true },
            { text: "मापा गया मान वास्तविक मान के बराबर होता है", correct: false },
            { text: "माप शून्य हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्टमीटर के जुड़ने से परिपथ का कुल प्रतिरोध थोड़ा कम हो जाता है, जिससे ओम के नियम के अनुसार, उस प्रतिरोधक के सिरों पर वास्तविक विभवांतर थोड़ा घट जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक आदर्श (अनंत प्रतिरोध वाले) वोल्टमीटर में यह समस्या नहीं होती।"
    },
    {
        question: "प्रश्न 24. कार्बन प्रतिरोधकों का उपयोग इलेक्ट्रॉनिक परिपथों में क्यों किया जाता है?",
        answers: shuffle([
            { text: "क्योंकि वे तापमान के प्रति बहुत संवेदनशील होते हैं", correct: false },
            { text: "क्योंकि वे बहुत बड़े होते हैं", correct: false },
            { text: "क्योंकि वे सस्ते, छोटे और विस्तृत परास में उपलब्ध होते हैं", correct: true },
            { text: "क्योंकि उनका प्रतिरोध शून्य होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बन प्रतिरोधक लागत-प्रभावी होते हैं और इन्हें बहुत छोटे आकार में उच्च प्रतिरोध मानों के लिए बनाया जा सकता है, जो उन्हें इलेक्ट्रॉनिक उपकरणों के लिए उपयुक्त बनाता है।"
    },
    {
        question: "प्रश्न 25. एक तार का प्रतिरोध 10 ओम है। यदि इसे एक वृत्त के रूप में मोड़ दिया जाए, तो व्यास के किन्हीं दो विपरीत बिंदुओं के बीच तुल्य प्रतिरोध कितना होगा?",
        answers: shuffle([
            { text: "10 ओम", correct: false },
            { text: "5 ओम", correct: false },
            { text: "2.5 ओम", correct: true },
            { text: "20 ओम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यास के विपरीत बिंदु तार को दो 5-ओम के प्रतिरोधों में विभाजित करते हैं जो एक दूसरे के समांतर होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> समांतर में तुल्य प्रतिरोध R_eq = (5 * 5) / (5 + 5) = 25 / 10 = 2.5 ओम होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ओम के नियम का एक परिपथ अनुप्रयोग है।"
    },
    {
        question: "प्रश्न 26. ओम का नियम किसके बीच संबंध स्थापित नहीं करता है?",
        answers: shuffle([
            { text: "धारा और प्रतिरोध", correct: false },
            { text: "विभवांतर और धारा", correct: false },
            { text: "विभवांतर और प्रतिरोध", correct: false },
            { text: "प्रतिरोध और समय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम का नियम V, I, और R के बीच तात्कालिक संबंध का वर्णन करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह समय को एक चर के रूप में शामिल नहीं करता है।"
    },
    {
        question: "प्रश्न 27. किसी चालक का प्रतिरोध किसके द्वारा बढ़ाया जा सकता है?",
        answers: shuffle([
            { text: "उसकी लंबाई घटाकर", correct: false },
            { text: "उसका तापमान घटाकर", correct: false },
            { text: "उसकी मोटाई बढ़ाकर", correct: false },
            { text: "उसकी लंबाई बढ़ाकर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोध लंबाई के अनुक्रमानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, चालक की लंबाई बढ़ाने से उसका प्रतिरोध बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 28. कौन सा पदार्थ ऋणात्मक प्रतिरोध ताप गुणांक दर्शाता है?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "टंगस्टन", correct: false },
            { text: "कार्बन", correct: true },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋणात्मक प्रतिरोध ताप गुणांक का अर्थ है कि तापमान बढ़ने पर प्रतिरोध घटता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गुण अर्धचालकों और कार्बन जैसे कुछ कुचालकों में पाया जाता है।"
    },
    {
        question: "प्रश्न 29. विभवांतर को स्थिर रखते हुए, यदि परिपथ का प्रतिरोध चार गुना कर दिया जाए, तो शक्ति की खपत कितनी हो जाएगी?",
        answers: shuffle([
            { text: "चार गुनी", correct: false },
            { text: "एक-चौथाई", correct: true },
            { text: "सोलह गुनी", correct: false },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति P = V²/R है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि V स्थिर है, तो P प्रतिरोध के व्युत्क्रमानुपाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिरोध को 4 गुना करने पर शक्ति 1/4 हो जाएगी।"
    },
    {
        question: "प्रश्न 30. किसी सुचालक की प्रतिरोधकता का मान होता है:",
        answers: shuffle([
            { text: "बहुत अधिक", correct: false },
            { text: "बहुत कम", correct: true },
            { text: "अनंत", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुचालक वे पदार्थ होते हैं जो धारा को आसानी से प्रवाहित होने देते हैं, जिसका अर्थ है कि उनका प्रतिरोध और प्रतिरोधकता दोनों बहुत कम होते हैं।"
    },
    {
        question: "प्रश्न 31. एक rheostat (धारा नियंत्रक) का उपयोग परिपथ में क्यों किया जाता है?",
        answers: shuffle([
            { text: "वोल्टेज को बढ़ाने के लिए", correct: false },
            { text: "प्रतिरोध को बदलकर धारा को नियंत्रित करने के लिए", correct: true },
            { text: "AC को DC में बदलने के लिए", correct: false },
            { text: "परिपथ को खोलने या बंद करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक धारा नियंत्रक एक चर प्रतिरोधक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी प्रभावी लंबाई को बदलकर, परिपथ का कुल प्रतिरोध बदला जा सकता है, जिससे ओम के नियम के अनुसार धारा का मान नियंत्रित होता है।"
    },
    {
        question: "प्रश्न 32. मुक्त इलेक्ट्रॉनों के लिए, धात्विक चालक के अंदर, विद्युत क्षेत्र की अनुपस्थिति में, उनका औसत वेग कितना होता है?",
        answers: shuffle([
            { text: "प्रकाश का वेग", correct: false },
            { text: "ध्वनि का वेग", correct: false },
            { text: "शून्य", correct: true },
            { text: "बहुत अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत क्षेत्र के बिना, इलेक्ट्रॉन यादृच्छिक रूप से सभी दिशाओं में गति करते हैं, और उनकी गतियों का सदिश योग शून्य होता है, इसलिए कोई शुद्ध प्रवाह या धारा नहीं होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओम का नियम तब लागू होता है जब एक विद्युत क्षेत्र (विभवांतर के कारण) उन्हें एक दिशा में अनुगमन वेग प्रदान करता है।"
    },
    {
        question: "प्रश्न 33. प्रतिरोध का विमीय सूत्र क्या है?",
        answers: shuffle([
            { text: "[ML²T⁻³A⁻²]", correct: true },
            { text: "[ML²T⁻³A⁻¹]", correct: false },
            { text: "[MLT⁻²A⁻²]", correct: false },
            { text: "[ML²T⁻²A⁻¹]", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम V=IR और विभव V=W/q से, R = W/(qI) = W/((It)I) = W/(I²t)।<br><br><i class='fa-solid fa-angles-right icon'></i> विमाएं रखने पर: [ML²T⁻²] / ([A²][T]) = [ML²T⁻³A⁻²]।"
    },
    {
        question: "प्रश्न 34. यदि धारा को स्थिर रखते हुए प्रतिरोध को दोगुना कर दिया जाए, तो विभवांतर पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "आधा हो जाएगा", correct: false },
            { text: "दोगुना हो जाएगा", correct: true },
            { text: "अपरिवर्तित रहेगा", correct: false },
            { text: "चार गुना हो जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम V = IR के अनुसार, यदि धारा (I) स्थिर है, तो विभवांतर (V) प्रतिरोध (R) के सीधे अनुक्रमानुपाती होता है।"
    },
    {
        question: "प्रश्न 35. किसी चालक के लिए, V/I का मान हमेशा स्थिर रहता है, यह कथन है:",
        answers: shuffle([
            { text: "किरचॉफ का नियम", correct: false },
            { text: "कूलॉम का नियम", correct: false },
            { text: "ओम का नियम", correct: true },
            { text: "फैराडे का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ओम के नियम की परिभाषा है, जहाँ स्थिर मान चालक का प्रतिरोध होता है।"
    },
    {
        question: "प्रश्न 36. अन-ओमीय युक्ति का V-I ग्राफ:",
        answers: shuffle([
            { text: "हमेशा Y-अक्ष के समानांतर होता है", correct: false },
            { text: "हमेशा X-अक्ष के समानांतर होता है", correct: false },
            { text: "एक सीधी रेखा नहीं होती है", correct: true },
            { text: "हमेशा मूल बिंदु से शुरू होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अन-ओमीय युक्तियों का प्रतिरोध स्थिर नहीं रहता है, इसलिए उनका V-I ग्राफ रैखिक (सीधी रेखा) नहीं होता है।"
    },
    {
        question: "प्रश्न 37. किस तापमान पर एक चालक का प्रतिरोध लगभग शून्य हो जाता है?",
        answers: shuffle([
            { text: "क्वथनांक पर", correct: false },
            { text: "गलनांक पर", correct: false },
            { text: "परम शून्य के पास (अतिचालकों के लिए)", correct: true },
            { text: "कमरे के तापमान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अतिचालक पदार्थों का प्रतिरोध उनके क्रांतिक तापमान (जो परम शून्य के करीब होता है) से नीचे शून्य हो जाता है।"
    },
    {
        question: "प्रश्न 38. चांदी, तांबे की तुलना में एक बेहतर चालक है क्योंकि:",
        answers: shuffle([
            { text: "चांदी की प्रतिरोधकता तांबे से कम है", correct: true },
            { text: "चांदी की प्रतिरोधकता तांबे से अधिक है", correct: false },
            { text: "चांदी तांबे से अधिक महंगी है", correct: false },
            { text: "चांदी का घनत्व तांबे से अधिक है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बेहतर चालक का अर्थ है कम प्रतिरोध।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि प्रतिरोधकता पदार्थ का गुण है जो प्रतिरोध को निर्धारित करता है, चांदी की कम प्रतिरोधकता उसे एक बेहतर चालक बनाती है।"
    },
    {
        question: "प्रश्न 39. ओम का नियम किसके लिए मान्य नहीं है?",
        answers: shuffle([
            { text: "विद्युत बल्ब का फिलामेंट", correct: true },
            { text: "तांबे का तार", correct: false },
            { text: "चांदी का तार", correct: false },
            { text: "मैंगनिन का तार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बल्ब जलता है, तो उसका फिलामेंट (टंगस्टन) बहुत गर्म हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस उच्च तापमान पर उसका प्रतिरोध काफी बढ़ जाता है, जिससे वह ओम के नियम से विचलित हो जाता है।"
    },
    {
        question: "प्रश्न 40. ओम के नियम के अनुसार, यदि एक चालक का प्रतिरोध बढ़ता है, तो समान विभवांतर के लिए धारा:",
        answers: shuffle([
            { text: "बढ़ती है", correct: false },
            { text: "घटती है", correct: true },
            { text: "अपरिवर्तित रहती है", correct: false },
            { text: "शून्य हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> I = V/R के अनुसार, धारा और प्रतिरोध में व्युत्क्रमानुपाती संबंध है।"
    },
    {
        question: "प्रश्न 41. प्रतिरोधकता की विमाएं किस भौतिक राशि के समान हैं?",
        answers: shuffle([
            { text: "प्रतिरोध", correct: false },
            { text: "विद्युत क्षेत्र", correct: false },
            { text: "किसी के समान नहीं", correct: true },
            { text: "विभवांतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता (ओम-मीटर) की विमाएं प्रतिरोध (ओम), विद्युत क्षेत्र (वोल्ट/मीटर) या विभवांतर (वोल्ट) से भिन्न होती हैं।"
    },
    {
        question: "प्रश्न 42. यदि एक ओमीय प्रतिरोधक के V-I ग्राफ का कोण X-अक्ष से 45 डिग्री है, तो उसका प्रतिरोध कितना है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false },
            { text: "एक ओम", correct: true },
            { text: "निर्धारित नहीं किया जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्राफ का ढलान प्रतिरोध (R) देता है, जो tan(θ) के बराबर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि θ = 45 डिग्री है, तो R = tan(45°) = 1 ओम।"
    },
    {
        question: "प्रश्न 43. व्हीटस्टोन सेतु का सिद्धांत किस नियम पर आधारित है?",
        answers: shuffle([
            { text: "केवल ओम का नियम", correct: false },
            { text: "केवल किरचॉफ का नियम", correct: false },
            { text: "ओम का नियम और किरचॉफ का नियम दोनों", correct: true },
            { text: "फैराडे का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्हीटस्टोन सेतु का संतुलन सिद्धांत किरचॉफ के नियमों का उपयोग करके प्राप्त किया जाता है, जिसमें प्रतिरोधकों में धारा और वोल्टेज की गणना के लिए ओम का नियम लागू होता है।"
    },
    {
        question: "प्रश्न 44. एक ही पदार्थ से बने दो चालकों के लिए, किसका प्रतिरोध अधिक होगा?",
        answers: shuffle([
            { text: "छोटे और मोटे चालक का", correct: false },
            { text: "छोटे और पतले चालक का", correct: false },
            { text: "लंबे और मोटे चालक का", correct: false },
            { text: "लंबे और पतले चालक का", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोध लंबाई (l) के अनुक्रमानुपाती और क्षेत्रफल (A) के व्युत्क्रमानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, सबसे अधिक प्रतिरोध के लिए लंबाई अधिकतम (लंबा) और क्षेत्रफल न्यूनतम (पतला) होना चाहिए।"
    },
    {
        question: "प्रश्न 45. एक परिपथ में धारा मापने के लिए एमीटर का उपयोग किया जाता है। एक अच्छा एमीटर होना चाहिए:",
        answers: shuffle([
            { text: "कम प्रतिरोध वाला", correct: true },
            { text: "उच्च प्रतिरोध वाला", correct: false },
            { text: "कम चालकता वाला", correct: false },
            { text: "उच्च प्रतिरोधकता वाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एमीटर को परिपथ के साथ श्रेणी में जोड़ा जाता है, इसलिए इसका प्रतिरोध बहुत कम होना चाहिए ताकि यह परिपथ के कुल प्रतिरोध और धारा को महत्वपूर्ण रूप से न बदले।"
    },
    {
        question: "प्रश्न 46. निम्नलिखित में से किसका प्रतिरोध सबसे कम होगा?",
        answers: shuffle([
            { text: "1 मीटर लंबा तांबे का तार", correct: false },
            { text: "1 मीटर लंबा चांदी का तार", correct: true },
            { text: "1 मीटर लंबा लोहे का तार", correct: false },
            { text: "1 मीटर लंबा नाइक्रोम का तार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिए गए विकल्पों में चांदी की प्रतिरोधकता सबसे कम है, इसलिए समान विमाओं के लिए इसका प्रतिरोध भी सबसे कम होगा।"
    },
    {
        question: "प्रश्न 47. किसी चालक का प्रतिरोध गुणांक धनात्मक होने का क्या अर्थ है?",
        answers: shuffle([
            { text: "तापमान बढ़ने पर प्रतिरोध घटता है", correct: false },
            { text: "तापमान बढ़ने पर प्रतिरोध बढ़ता है", correct: true },
            { text: "तापमान का प्रतिरोध पर कोई प्रभाव नहीं पड़ता", correct: false },
            { text: "चालक एक अर्धचालक है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी धातुओं और अधिकांश चालकों का प्रतिरोध गुणांक धनात्मक होता है, जिसका अर्थ है कि उनका प्रतिरोध तापमान के साथ बढ़ता है।"
    },
    {
        question: "प्रश्न 48. ओम के नियम का पालन करने वाले उपकरण का एक उदाहरण है:",
        answers: shuffle([
            { text: "जेनर डायोड", correct: false },
            { text: "सौर सेल", correct: false },
            { text: "एक मानक प्रतिरोधक", correct: true },
            { text: "एक वैक्यूम ट्यूब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानक प्रतिरोधक (जैसे मैंगनिन से बने) विशेष रूप से एक स्थिर प्रतिरोध मान प्रदान करने और ओम के नियम का पालन करने के लिए डिज़ाइन किए जाते हैं।"
    },
    {
        question: "प्रश्न 49. यदि विभवांतर, धारा और प्रतिरोध को क्रमशः V, I और R से दर्शाया जाता है, तो ओम के नियम के अनुसार कौन सा कथन असत्य है?",
        answers: shuffle([
            { text: "V = IR", correct: false },
            { text: "I = V/R", correct: false },
            { text: "R = V/I", correct: false },
            { text: "R = I/V", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> R = I/V ओम के नियम का सही गणितीय निरूपण नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> सही संबंध R = V/I है।"
    },
    {
        question: "प्रश्न 50. एक सर्किट ब्रेकर किस सिद्धांत पर काम करता है जो ओम के नियम से संबंधित है?",
        answers: shuffle([
            { text: "A) धारा का चुंबकीय प्रभाव", correct: false },
            { text: "B) धारा का ऊष्मीय प्रभाव", correct: false },
            { text: "C) धारा का रासायनिक प्रभाव", correct: false },
            { text: "A) और B) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थर्मल सर्किट ब्रेकर जूल के तापन नियम (P = I²R) पर काम करते हैं, जो ओम के नियम से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> मैग्नेटिक सर्किट ब्रेकर धारा के चुंबकीय प्रभाव पर काम करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अत्यधिक धारा (कम प्रतिरोध के कारण) इन प्रभावों को ट्रिगर करती है।"
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