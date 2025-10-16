const questions = [
    {
        topHeading: "लाइसोसोम पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. कोशिका की 'आत्मघाती थैली' (Suicidal Bag) के रूप में किस कोशिकांग को जाना जाता है?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "गॉल्जी काय", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "लाइसोसोम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोशिका क्षतिग्रस्त या पुरानी हो जाती है, तो लाइसोसोम फट सकते हैं और अपने शक्तिशाली पाचक एंजाइमों से अपनी ही कोशिका को नष्ट कर सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसीलिए इन्हें आत्मघाती थैली कहा जाता है।"
    },
    {
        question: "प्रश्न 2. लाइसोसोम की खोज का श्रेय किस वैज्ञानिक को दिया जाता है?",
        answers: shuffle([
            { text: "रॉबर्ट हुक", correct: false },
            { text: "कैमिलो गॉल्जी", correct: false },
            { text: "क्रिश्चियन डी डूवे", correct: true },
            { text: "जॉर्ज पैलाडे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेल्जियम के साइटोलॉजिस्ट क्रिश्चियन डी डूवे ने 1955 में लाइसोसोम की खोज की थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके लिए उन्हें 1974 में नोबेल पुरस्कार से सम्मानित किया गया।"
    },
    {
        question: "प्रश्न 3. लाइसोसोम में पाए जाने वाले एंजाइम क्या कहलाते हैं?",
        answers: shuffle([
            { text: "ऑक्सीडेज", correct: false },
            { text: "एसिड हाइड्रोलेस (Acid Hydrolases)", correct: true },
            { text: "पोलीमरेज़", correct: false },
            { text: "लाइगेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम में लगभग 50 विभिन्न प्रकार के शक्तिशाली पाचक एंजाइम होते हैं, जिन्हें सामूहिक रूप से एसिड हाइड्रोलेस कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये अम्लीय माध्यम में कार्य करते हैं।"
    },
    {
        question: "प्रश्न 4. लाइसोसोम के एंजाइम किस pH मान पर सर्वाधिक सक्रिय होते हैं?",
        answers: shuffle([
            { text: "7.4 (हल्का क्षारीय)", correct: false },
            { text: "5.0 (अम्लीय)", correct: true },
            { text: "7.0 (उदासीन)", correct: false },
            { text: "8.5 (क्षारीय)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम के अंदर का वातावरण अम्लीय (लगभग 4.5-5.0 pH) होता है, जो इन एंजाइमों की क्रियाशीलता के लिए अनुकूल है।<br><br><i class='fa-solid fa-angles-right icon'></i>  कोशिका द्रव्य का pH उदासीन होने के कारण, लाइसोसोम के फटने पर भी एंजाइम ज्यादा नुकसान नहीं पहुंचा पाते।"
    },
    {
        question: "प्रश्न 5. लाइसोसोम का निर्माण मुख्य रूप से किस कोशिकांग द्वारा होता है?",
        answers: shuffle([
            { text: "केंद्रक", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "गॉल्जी काय और एंडोप्लाज्मिक रेटिकुलम", correct: true },
            { text: "राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोमल एंजाइम का संश्लेषण खुरदरी एंडोप्लाज्मिक रेटिकुलम पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  फिर उन्हें गॉल्जी काय में संशोधित और पैक करके लाइसोसोम का निर्माण किया जाता है।"
    },
    {
        question: "प्रश्न 6. 'ऑटोफैगी' (Autophagy) की प्रक्रिया में कौन सा कोशिकांग शामिल होता है?",
        answers: shuffle([
            { text: "परऑक्सिसोम", correct: false },
            { text: "लाइसोसोम", correct: true },
            { text: "रिक्तिका", correct: false },
            { text: "सेंट्रोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑटोफैगी का अर्थ है 'स्वयं को खाना'।<br><br><i class='fa-solid fa-angles-right icon'></i>  इस प्रक्रिया में लाइसोसोम कोशिका के पुराने या क्षतिग्रस्त अंगों को घेरकर पचा जाता है, जिससे कोशिका का नवीनीकरण होता है।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से कौन सा कार्य लाइसोसोम का नहीं है?",
        answers: shuffle([
            { text: "अंतःकोशिकीय पाचन", correct: false },
            { text: "ATP का संश्लेषण", correct: true },
            { text: "पुराने कोशिकांगों को हटाना", correct: false },
            { text: "जीवाणुओं और विषाणुओं का भक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ATP का संश्लेषण (ऊर्जा उत्पादन) माइटोकॉन्ड्रिया का मुख्य कार्य है, लाइसोसोम का नहीं।"
    },
    {
        question: "प्रश्न 8. कोशिका में प्रवेश करने वाले बाहरी पदार्थों (जैसे जीवाणु) का पाचन क्या कहलाता है?",
        answers: shuffle([
            { text: "ऑटोफैगी", correct: false },
            { text: "हेटरोफैगी (Heterophagy)", correct: true },
            { text: "एक्सोसाइटोसिस", correct: false },
            { text: "ऑटोलिसिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब लाइसोसोम एंडोसाइटोसिस द्वारा ग्रहण किए गए बाहरी पदार्थों का पाचन करता है, तो इस प्रक्रिया को हेटरोफैगी कहा जाता है।"
    },
    {
        question: "प्रश्न 9. मेंढक के टैडपोल की पूंछ का गायब होना किस कोशिकीय प्रक्रिया का उदाहरण है?",
        answers: shuffle([
            { text: "कोशिका विभाजन", correct: false },
            { text: "लाइसोसोमल ऑटोलिसिस (Lysosomal Autolysis)", correct: true },
            { text: "प्रोटीन संश्लेषण", correct: false },
            { text: "प्रकाश संश्लेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायांतरण के दौरान, टैडपोल की पूंछ की कोशिकाओं में लाइसोसोम सक्रिय हो जाते हैं और पूरी पूंछ को पचाकर गायब कर देते हैं।"
    },
    {
        question: "प्रश्न 10. लाइसोसोम किस प्रकार का कोशिकांग है?",
        answers: shuffle([
            { text: "दोहरी झिल्ली युक्त", correct: false },
            { text: "एकल झिल्ली युक्त", correct: true },
            { text: "झिल्ली रहित", correct: false },
            { text: "तिहरी झिल्ली युक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम एक थैली जैसी संरचना है जो एक ही लिपिड बाईलेयर झिल्ली से घिरी होती है।"
    },
    {
        question: "प्रश्न 11. कौन सी मानव कोशिकाएं लाइसोसोम में प्रचुर मात्रा में होती हैं?",
        answers: shuffle([
            { text: "लाल रक्त कोशिकाएं (RBC)", correct: false },
            { text: "फैगोसाइटिक कोशिकाएं (जैसे मैक्रोफेज)", correct: true },
            { text: "तंत्रिका कोशिकाएं", correct: false },
            { text: "हड्डी की कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैक्रोफेज जैसी कोशिकाएं जो रोगाणुओं और बाहरी कणों को निगलने का काम करती हैं, उनमें पाचन के लिए बड़ी संख्या में लाइसोसोम पाए जाते हैं।"
    },
    {
        question: "प्रश्न 12. लाइसोसोमल स्टोरेज रोग (Lysosomal Storage Diseases) क्यों होते हैं?",
        answers: shuffle([
            { text: "लाइसोसोम की संख्या बढ़ने से", correct: false },
            { text: "विशिष्ट लाइसोसोमल एंजाइम की कमी से", correct: true },
            { text: "लाइसोसोम का आकार छोटा होने से", correct: false },
            { text: "माइटोकॉन्ड्रिया की खराबी से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई विशेष लाइसोसोमल एंजाइम आनुवंशिक कारणों से नहीं बनता है, तो वह जिस पदार्थ को पचाता है वह लाइसोसोम में जमा होने लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे गंभीर बीमारियाँ होती हैं।"
    },
    {
        question: "प्रश्न 13. 'टे-सैक्स रोग' (Tay-Sachs disease) किस कोशिकांग की खराबी से संबंधित है?",
        answers: shuffle([
            { text: "गॉल्जी काय", correct: false },
            { text: "राइबोसोम", correct: false },
            { text: "लाइसोसोम", correct: true },
            { text: "केंद्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टे-सैक्स एक आनुवंशिक लाइसोसोमल स्टोरेज रोग है जिसमें लिपिड को तोड़ने वाला एक एंजाइम अनुपस्थित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे तंत्रिका कोशिकाओं में वसा जमा हो जाती है।"
    },
    {
        question: "प्रश्न 14. लाइसोसोम के अंदर अम्लीय वातावरण कैसे बनाए रखा जाता है?",
        answers: shuffle([
            { text: "साइट्रिक एसिड के उत्पादन द्वारा", correct: false },
            { text: "प्रोटॉन पंप (H+ पंप) द्वारा", correct: true },
            { text: "लैक्टिक एसिड के जमाव द्वारा", correct: false },
            { text: "कार्बन डाइऑक्साइड द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम की झिल्ली में एक सक्रिय प्रोटॉन पंप होता है जो ATP की ऊर्जा का उपयोग करके हाइड्रोजन आयनों (प्रोटॉन) को कोशिका द्रव्य से लाइसोसोम के अंदर पंप करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे वह अम्लीय बना रहता है।"
    },
    {
        question: "प्रश्न 15. शुक्राणु के एक्रोसोम में मौजूद एंजाइम, जो निषेचन में मदद करते हैं, किससे संबंधित हैं?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "राइबोसोम", correct: false },
            { text: "संशोधित लाइसोसोम", correct: true },
            { text: "केंद्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्राणु का एक्रोसोम एक प्रकार का विशिष्ट और संशोधित लाइसोसोम ही है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें 'हाइलूरोनिडेज' जैसे एंजाइम होते हैं जो अंडे की झिल्ली को भेदने में मदद करते हैं।"
    },
    {
        question: "प्रश्न 16. कोशिका का 'अपशिष्ट निपटान तंत्र' (Waste Disposal System) किसे कहा जाता है?",
        answers: shuffle([
            { text: "रिक्तिका", correct: false },
            { text: "लाइसोसोम", correct: true },
            { text: "कोशिका भित्ति", correct: false },
            { text: "परऑक्सिसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम कोशिका के अंदर के कचरे, टूटे-फूटे अंगों और बाहरी हानिकारक पदार्थों को पचाकर कोशिका को साफ रखने का काम करता है।"
    },
    {
        question: "प्रश्न 17. प्राथमिक लाइसोसोम (Primary Lysosome) क्या है?",
        answers: shuffle([
            { text: "पाचन के बाद बना लाइसोसोम", correct: false },
            { text: "गॉल्जी काय से तुरंत बना नया लाइसोसोम", correct: true },
            { text: "एक क्षतिग्रस्त लाइसोसोम", correct: false },
            { text: "दो लाइसोसोम का संयोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राथमिक लाइसोसोम गॉल्जी उपकरण से निकलने वाली एक छोटी थैली होती है जिसमें पाचक एंजाइम निष्क्रिय अवस्था में होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और जिसने अभी तक पाचन शुरू नहीं किया है।"
    },
    {
        question: "प्रश्न 18. जब एक प्राथमिक लाइसोसोम किसी फैगोसोम (Phagosome) से जुड़ता है, तो क्या बनता है?",
        answers: shuffle([
            { text: "अवशिष्ट काय (Residual body)", correct: false },
            { text: "द्वितीयक लाइसोसोम (Secondary Lysosome)", correct: true },
            { text: "ऑटोफैगोसोम", correct: false },
            { text: "परऑक्सिसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीयक लाइसोसोम, जिसे फैगोलाइसोसोम भी कहते हैं, तब बनता है जब प्राथमिक लाइसोसोम भोजन या बाहरी कण युक्त फैगोसोम के साथ मिलकर पाचन क्रिया शुरू करता है।"
    },
    {
        question: "प्रश्न 19. अपचित पदार्थों से युक्त लाइसोसोम क्या कहलाता है?",
        answers: shuffle([
            { text: "प्राथमिक लाइसोसोम", correct: false },
            { text: "अवशिष्ट काय (Residual Body)", correct: true },
            { text: "ऑटोफैगोसोम", correct: false },
            { text: "स्फीरोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाचन पूरा होने के बाद, लाइसोसोम में जो अपचित पदार्थ बच जाते हैं, उस संरचना को अवशिष्ट काय कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसे कोशिका एक्सोसाइटोसिस द्वारा बाहर निकाल देती है।"
    },
    {
        question: "प्रश्न 20. निम्नलिखित में से किन कोशिकाओं में लाइसोसोम अनुपस्थित होते हैं?",
        answers: shuffle([
            { text: "यकृत कोशिकाएं", correct: false },
            { text: "श्वेत रक्त कोशिकाएं (WBC)", correct: false },
            { text: "परिपक्व स्तनधारी लाल रक्त कोशिकाएं (RBC)", correct: true },
            { text: "तंत्रिका कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिपक्व स्तनधारी RBC में अधिक हीमोग्लोबिन के लिए जगह बनाने हेतु केंद्रक, माइटोकॉन्ड्रिया और लाइसोसोम जैसे अधिकांश कोशिकांग नहीं होते हैं।"
    },
    {
        question: "प्रश्न 21. 'गॉउचर रोग' (Gaucher's disease) किस एंजाइम की कमी से संबंधित है?",
        answers: shuffle([
            { text: "लाइपेज", correct: false },
            { text: "एमाइलेज", correct: false },
            { text: "ग्लूकोसेरिब्रोसाइडेज (Glucocerebrosidase)", correct: true },
            { text: "पेप्सिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक लाइसोसोमल स्टोरेज रोग है जिसमें ग्लूकोसेरिब्रोसाइडेज एंजाइम की कमी के कारण लिपिड विभिन्न अंगों में जमा हो जाते हैं।"
    },
    {
        question: "प्रश्न 22. लाइसोसोम को कोशिका का 'सफाईकर्मी' (Scavenger) भी कहा जाता है, क्योंकि?",
        answers: shuffle([
            { text: "यह ऊर्जा बनाता है", correct: false },
            { text: "यह मृत कोशिकाओं और कोशिकांगों को साफ करता है", correct: true },
            { text: "यह प्रोटीन बनाता है", correct: false },
            { text: "यह कोशिका को आकार देता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम कोशिका के अंदर और बाहर के मृत जैविक पदार्थों को पचाकर वातावरण को साफ करने का कार्य करता है।"
    },
    {
        question: "प्रश्न 23. लाइसोसोम की झिल्ली इसके पाचक एंजाइमों से स्वयं क्यों नहीं पचती?",
        answers: shuffle([
            { text: "क्योंकि झिल्ली प्रोटीन की बनी होती है", correct: false },
            { text: "क्योंकि झिल्ली अत्यधिक ग्लाइकोसिलेटेड (highly glycosylated) होती है", correct: true },
            { text: "क्योंकि एंजाइम निष्क्रिय होते हैं", correct: false },
            { text: "क्योंकि कोशिका द्रव्य क्षारीय होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम की आंतरिक झिल्ली पर मौजूद ग्लाइकोप्रोटीन (शर्करा-लेपित प्रोटीन) की एक परत एंजाइमों को झिल्ली के संपर्क में आने और उसे पचाने से रोकती है।"
    },
    {
        question: "प्रश्न 24. पौधों में, लाइसोसोम जैसा कार्य कौन सा कोशिकांग करता है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "क्लोरोप्लास्ट", correct: false },
            { text: "केंद्रीय रिक्तिका (Central Vacuole)", correct: true },
            { text: "कोशिका भित्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिकाओं की बड़ी केंद्रीय रिक्तिका में भी हाइड्रोलाइटिक एंजाइम होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह अपशिष्ट भंडारण और पाचन जैसे लाइसोसोम-समान कार्य करती है।"
    },
    {
        question: "प्रश्न 25. मृतोपजीवी पोषण (Saprophytic nutrition) में कवक द्वारा एंजाइमों का स्राव किस कोशिकांग से संबंधित है?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "लाइसोसोम", correct: true },
            { text: "केंद्रक", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कवक अपने लाइसोसोमल एंजाइमों को कोशिका से बाहर मृत कार्बनिक पदार्थों पर स्रावित करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  उसे बाहर ही पचाते हैं और फिर पोषक तत्वों को अवशोषित करते हैं।"
    },
    {
        question: "प्रश्न 26. लाइसोसोम की बहुुरूपता (Polymorphism) का क्या अर्थ है?",
        answers: shuffle([
            { text: "इसका एक ही आकार होता है", correct: false },
            { text: "यह कई अलग-अलग रूपों (प्राथमिक, द्वितीयक आदि) में मौजूद होता है", correct: true },
            { text: "यह केवल गोल होता है", correct: false },
            { text: "यह रंग बदल सकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम अपनी कार्यात्मक अवस्था के आधार पर विभिन्न रूपों में पाया जाता है, जैसे प्राथमिक लाइसोसोम, द्वितीयक लाइसोसोम, और अवशिष्ट काय।<br><br><i class='fa-solid fa-angles-right icon'></i>  इस गुण को बहुरूपता कहते हैं।"
    },
    {
        question: "प्रश्न 27. किस प्रक्रिया द्वारा कोशिका ठोस कणों को ग्रहण करती है, जिसे बाद में लाइसोसोम द्वारा पचाया जाता है?",
        answers: shuffle([
            { text: "पीनोसाइटोसिस (Pinocytosis)", correct: false },
            { text: "फैगोसाइटोसिस (Phagocytosis)", correct: true },
            { text: "एक्सोसाइटोसिस (Exocytosis)", correct: false },
            { text: "परासरण (Osmosis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फैगोसाइटोसिस ('कोशिकीय भक्षण') वह प्रक्रिया है जिसमें कोशिका एक बड़े ठोस कण, जैसे बैक्टीरिया को घेरकर एक फैगोसोम बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बाद में लाइसोसोम से जुड़ जाता है।"
    },
    {
        question: "प्रश्न 28. कैंसर कोशिकाओं के अनियंत्रित विकास में किस कोशिकांग की भूमिका हो सकती है?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "लाइसोसोम", correct: true },
            { text: "सेंट्रोसोम", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ शोध बताते हैं कि कैंसर कोशिकाओं द्वारा स्रावित लाइसोसोमल एंजाइम आस-पास के ऊतकों को नष्ट करके कैंसर के फैलाव (मेटास्टेसिस) में मदद कर सकते हैं।"
    },
    {
        question: "प्रश्न 29. एक सामान्य कोशिका में, लाइसोसोम का फटना कोशिका के लिए घातक क्यों नहीं होता?",
        answers: shuffle([
            { text: "क्योंकि एंजाइम तुरंत निष्क्रिय हो जाते हैं", correct: false },
            { text: "क्योंकि कोशिका द्रव्य का उदासीन pH एंजाइमों को निष्क्रिय कर देता है", correct: true },
            { text: "क्योंकि कोशिका तुरंत नया लाइसोसोम बना लेती है", correct: false },
            { text: "क्योंकि कोशिका में बहुत कम लाइसोसोम होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम के एंजाइम अम्लीय pH (लगभग 5) पर काम करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  कोशिका द्रव्य का pH लगभग 7.2 (उदासीन) होता है, इसलिए अगर लाइसोसोम फट भी जाए, तो एंजाइम काफी हद तक निष्क्रिय हो जाते हैं।"
    },
    {
        question: "प्रश्न 30. लाइसोसोम किस प्रमुख कोशिकीय मार्ग (pathway) का हिस्सा है?",
        answers: shuffle([
            { text: "प्रकाश संश्लेषण मार्ग", correct: false },
            { text: "ग्लाइकोलाइसिस मार्ग", correct: false },
            { text: "अंतःझिल्ली तंत्र (Endomembrane system)", correct: true },
            { text: "क्रेब्स चक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतःझिल्ली तंत्र में ER, गॉल्जी काय, और लाइसोसोम शामिल हैं जो प्रोटीन और लिपिड के संश्लेषण, संशोधन और परिवहन के लिए एक साथ मिलकर काम करते हैं।"
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