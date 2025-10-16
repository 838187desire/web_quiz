const questions = [
    {
        topHeading: "गॉल्जीकाय पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. गॉल्जी काय की खोज का श्रेय किस वैज्ञानिक को दिया जाता है?",
        answers: shuffle([
            { text: "रॉबर्ट हुक", correct: false },
            { text: "रॉबर्ट ब्राउन", correct: false },
            { text: "कैमिलो गॉल्जी", correct: true },
            { text: "जॉर्ज पैलाडे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतालवी वैज्ञानिक कैमिलो गॉल्जी ने 1898 में उल्लू की तंत्रिका कोशिकाओं में इस कोशिकांग की खोज की थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके लिए उन्हें 1906 में नोबेल पुरस्कार से सम्मानित किया गया।"
    },
    {
        question: "प्रश्न 2. कोशिका का 'यातायात प्रबंधक' (Traffic Police) किस कोशिकांग को कहा जाता है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "राइबोसोम", correct: false },
            { text: "लाइसोसोम", correct: false },
            { text: "गॉल्जी काय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय एंडोप्लाज्मिक रेटिकुलम से आने वाले प्रोटीन और लिपिड को छाँटने, संशोधित करने और उन्हें उनके सही गंतव्य तक भेजने का कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसी कारण इसे कोशिका का यातायात प्रबंधक कहते हैं।"
    },
    {
        question: "प्रश्न 3. गॉल्जी काय का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "प्रोटीन संश्लेषण", correct: false },
            { text: "ऊर्जा उत्पादन", correct: false },
            { text: "पदार्थों का स्राव, संवेष्टन (पैकेजिंग) और संशोधन", correct: true },
            { text: "आनुवंशिक सूचना का भंडारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका प्राथमिक कार्य ER से प्राप्त अणुओं को संशोधित करना, उन्हें थैलियों (vesicles) में पैक करना और कोशिका के भीतर या बाहर स्रावित करना है।"
    },
    {
        question: "प्रश्न 4. पादप कोशिकाओं में गॉल्जी काय को किस अन्य नाम से जाना जाता है?",
        answers: shuffle([
            { text: "स्फीरोसोम", correct: false },
            { text: "डिक्टियोसोम", correct: true },
            { text: "परऑक्सिसोम", correct: false },
            { text: "ग्लाइऑक्सिसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिकाओं और कुछ निम्न अकशेरुकी जीवों में गॉल्जी काय बिखरी हुई इकाइयों के रूप में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिन्हें डिक्टियोसोम कहा जाता है।"
    },
    {
        question: "प्रश्न 5. शुक्राणु (Sperm) के एक्रोसोम (Acrosome) का निर्माण किस कोशिकांग द्वारा होता है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "केंद्रक", correct: false },
            { text: "गॉल्जी काय", correct: true },
            { text: "राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक्रोसोम शुक्राणु के सिर पर एक टोपी जैसी संरचना होती है जिसमें एंजाइम होते हैं जो अंडे को भेदने में मदद करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसका निर्माण गॉल्जी काय द्वारा होता है।"
    },
    {
        question: "प्रश्न 6. गॉल्जी काय की चपटी, झिल्लीदार थैलियों को क्या कहते हैं?",
        answers: shuffle([
            { text: "क्रिस्टी", correct: false },
            { text: "थाइलाकोइड", correct: false },
            { text: "सिस्टर्नी (Cisternae)", correct: true },
            { text: "ग्रेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय एक दूसरे के समानांतर रखी कई चपटी, डिस्क जैसी थैलियों या कुंडों (सिस्टर्नी) से मिलकर बना होता है।"
    },
    {
        question: "प्रश्न 7. गॉल्जी काय का वह सिरा जो केंद्रक और एंडोप्लाज्मिक रेटिकुलम की ओर होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "ट्रांस-फेस (Trans-face)", correct: false },
            { text: "सिस-फेस (Cis-face)", correct: true },
            { text: "मध्य-फेस (Medial-face)", correct: false },
            { text: "परिपक्व-फेस (Maturing face)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिस-फेस या निर्माणकारी सिरा (forming face) उत्तल होता है और यह ER से आने वाली पुटिकाओं (vesicles) को ग्रहण करता है।"
    },
    {
        question: "प्रश्न 8. निम्नलिखित में से किस कोशिकांग का निर्माण गॉल्जी काय द्वारा होता है?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "लाइसोसोम", correct: true },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "केंद्रिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम का निर्माण गॉल्जी काय में प्रोटीन और लिपिड की पैकेजिंग प्रक्रिया के परिणामस्वरूप होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  गॉल्जी काय से पाचन एंजाइमों से भरी थैलियाँ अलग होकर लाइसोसोम बनाती हैं।"
    },
    {
        question: "प्रश्न 9. ग्लाइकोप्रोटीन और ग्लाइकोलिपिड के निर्माण का प्रमुख स्थल कौन सा है?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: false },
            { text: "रिक्तिका", correct: false },
            { text: "गॉल्जी काय", correct: true },
            { text: "परऑक्सिसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय में प्रोटीन और लिपिड में कार्बोहाइड्रेट (शर्करा) की श्रृंखलाएं जोड़ी जाती हैं, इस प्रक्रिया को ग्लाइकोसाइलेशन कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे ग्लाइकोप्रोटीन और ग्लाइकोलिपिड बनते हैं।"
    },
    {
        question: "प्रश्न 10. गॉल्जी काय किन कोशिकाओं में अनुपस्थित होता है?",
        answers: shuffle([
            { text: "पादप कोशिकाओं में", correct: false },
            { text: "जंतु कोशिकाओं में", correct: false },
            { text: "प्रोकैरियोटिक कोशिकाओं और स्तनधारियों की लाल रक्त कणिकाओं में", correct: true },
            { text: "कवक कोशिकाओं में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कोशिकाओं (जैसे बैक्टीरिया) में झिल्ली युक्त कोशिकांग नहीं होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  परिपक्व स्तनधारी RBC में भी केंद्रक और अन्य कोशिकांगों के साथ गॉल्जी काय नहीं होता है।"
    },
    {
        question: "प्रश्न 11. कोशिका भित्ति के लिए आवश्यक पॉलीसेकेराइड का संश्लेषण कहाँ होता है?",
        answers: shuffle([
            { text: "राइबोसोम में", correct: false },
            { text: "कोशिका झिल्ली में", correct: false },
            { text: "गॉल्जी काय में (डिक्टियोसोम)", correct: true },
            { text: "माइटोकॉन्ड्रिया में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिकाओं में, डिक्टियोसोम कोशिका भित्ति के निर्माण के लिए आवश्यक पेक्टिन और हेमिसेलूलोज जैसे जटिल पॉलीसेकेराइड का संश्लेषण करते हैं।"
    },
    {
        question: "प्रश्न 12. गॉल्जी काय का वह सिरा जो कोशिका झिल्ली की ओर होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "सिस-फेस", correct: false },
            { text: "ट्रांस-फेस", correct: true },
            { text: "निर्माणकारी सिरा", correct: false },
            { text: "ग्रहण करने वाला सिरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रांस-फेस या परिपक्व सिरा (maturing face) अवतल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यहाँ से संशोधित अणु पुटिकाओं (vesicles) के रूप में पैक होकर अपने गंतव्य के लिए निकलते हैं।"
    },
    {
        question: "प्रश्न 13. गॉल्जी काय और एंडोप्लाज्मिक रेटिकुलम के संयुक्त कार्य को क्या कहते हैं?",
        answers: shuffle([
            { text: "कोशिकीय श्वसन", correct: false },
            { text: "अंतःझिल्ली तंत्र (Endomembrane system)", correct: true },
            { text: "प्रकाश संश्लेषण", correct: false },
            { text: "कोशिका चक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतःझिल्ली तंत्र कोशिका के उन झिल्लीदार अंगों का समूह है जो पदार्थों के परिवहन और संशोधन के लिए मिलकर काम करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसमें ER, गॉल्जी काय, लाइसोसोम और रिक्तिकाएं शामिल हैं।"
    },
    {
        question: "प्रश्न 14. स्रावी कोशिकाओं (Secretory cells) में कौन सा कोशिकांग अधिक विकसित होता है?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "गॉल्जी काय", correct: true },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "लाइसोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्न्याशय या लार ग्रंथियों जैसी कोशिकाएं जो एंजाइम और हार्मोन का स्राव करती हैं, उनमें पदार्थों की पैकेजिंग और स्राव के लिए एक बड़ा और अधिक विकसित गॉल्जी काय होता है।"
    },
    {
        question: "प्रश्न 15. गॉल्जी काय की सिस्टर्नी के ढेर का व्यास लगभग कितना होता है?",
        answers: shuffle([
            { text: "5 से 10 µm", correct: false },
            { text: "0.5 से 1.0 µm", correct: true },
            { text: "10 से 20 µm", correct: false },
            { text: "0.1 से 0.2 µm", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी सिस्टर्नी का व्यास लगभग 0.5 से 1.0 माइक्रोमीटर (µm) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये एक ढेर में संकेंद्रित रूप से व्यवस्थित रहती हैं।"
    },
    {
        question: "प्रश्न 16. पदार्थों को कोशिका से बाहर निकालने की प्रक्रिया (exocytosis) में अंतिम चरण किस कोशिकांग से जुड़ा है?",
        answers: shuffle([
            { text: "केंद्रक", correct: false },
            { text: "राइबोसोम", correct: false },
            { text: "गॉल्जी काय", correct: true },
            { text: "माइटोकॉन्ड्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय पदार्थों को स्रावी पुटिकाओं (secretory vesicles) में पैक करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो कोशिका झिल्ली से मिलकर अपने अंदर के पदार्थ को कोशिका से बाहर निकाल देती हैं।"
    },
    {
        question: "प्रश्न 17. गॉल्जी काय में प्रोटीन का संशोधन किस प्रक्रिया का एक उदाहरण है?",
        answers: shuffle([
            { text: "अनुलेखन (Transcription)", correct: false },
            { text: "अनुवादोत्तर संशोधन (Post-translational modification)", correct: true },
            { text: "प्रतिकृति (Replication)", correct: false },
            { text: "रूपांतरण (Transformation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम पर प्रोटीन बनने (अनुवाद) के बाद, गॉल्जी काय में उनमें कई तरह के संशोधन होते हैं, जैसे ग्लाइकोसाइलेशन।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे अनुवादोत्तर संशोधन कहा जाता है।"
    },
    {
        question: "प्रश्न 18. निम्नलिखित में से कौन सा कार्य गॉल्जी काय का नहीं है?",
        answers: shuffle([
            { text: "लाइसोसोम का निर्माण", correct: false },
            { text: "लिपिड का संश्लेषण", correct: true },
            { text: "ग्लाइकोप्रोटीन का निर्माण", correct: false },
            { text: "एक्रोसोम का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिपिड और स्टेरॉयड का संश्लेषण मुख्य रूप से चिकनी एंडोप्लाज्मिक रेटिकुलम (Smooth ER) में होता है, गॉल्जी काय में नहीं।"
    },
    {
        question: "प्रश्न 19. गॉल्जी पुटिकाएं (Golgi vesicles) किससे बनती हैं?",
        answers: shuffle([
            { text: "सिस्टर्नी के मुकुलन (budding) से", correct: true },
            { text: "माइटोकॉन्ड्रिया के विखंडन से", correct: false },
            { text: "राइबोसोम के संयोजन से", correct: false },
            { text: "केंद्रक झिल्ली से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय की सिस्टर्नी के किनारों से छोटी-छोटी थैलियाँ मुकुलन द्वारा अलग होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिन्हें पुटिकाएं या वेसिकल्स कहते हैं।"
    },
    {
        question: "प्रश्न 20. गॉल्जी उपकरण को देखने के लिए कैमिलो गॉल्जी ने किस अभिरंजन तकनीक का उपयोग किया था?",
        answers: shuffle([
            { text: "ग्राम स्टेनिंग", correct: false },
            { text: "सिल्वर नाइट्रेट स्टेनिंग", correct: true },
            { text: "क्रिस्टल वायलेट स्टेनिंग", correct: false },
            { text: "सैफ्रेनिन स्टेनिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैमिलो गॉल्जी ने एक विशेष अभिरंजन तकनीक विकसित की थी जिसमें सिल्वर नाइट्रेट का उपयोग किया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे तंत्रिका कोशिकाओं के अंदर गॉल्जी काय की संरचना स्पष्ट दिखाई दी।"
    },
    {
        question: "प्रश्न 21. गॉल्जी काय किस प्रकार के लिपिड के परिवहन में मदद करता है?",
        answers: shuffle([
            { text: "केवल ट्राइग्लिसराइड्स", correct: false },
            { text: "केवल स्टेरॉयड", correct: false },
            { text: "ER में संश्लेषित लिपिड और प्रोटीन", correct: true },
            { text: "केवल फॉस्फोलिपिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय एंडोप्लाज्मिक रेटिकुलम (ER) से आने वाले लिपिड और प्रोटीन दोनों को ग्रहण करता है और उन्हें आगे संसाधित करता है।"
    },
    {
        question: "प्रश्न 22. कोशिका विभाजन के दौरान कोशिका प्लेट (Cell plate) के निर्माण में कौन सा कोशिकांग मदद करता है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "केंद्रक", correct: false },
            { text: "गॉल्जी काय (डिक्टियोसोम)", correct: true },
            { text: "राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिका विभाजन के अंत में, गॉल्जी काय से उत्पन्न पुटिकाएं कोशिका के केंद्र में एकत्रित होकर कोशिका प्लेट का निर्माण करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बाद में नई कोशिका भित्ति बन जाती है।"
    },
    {
        question: "प्रश्न 23. गॉल्जी काय की क्रियाशीलता किस कोशिकांग पर निर्भर करती है?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: false },
            { text: "एंडोप्लाज्मिक रेटिकुलम (ER)", correct: true },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "केंद्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय अपने कार्य के लिए कच्चे माल (प्रोटीन और लिपिड) के लिए सीधे एंडोप्लाज्मिक रेटिकुलम पर निर्भर रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यदि ER काम करना बंद कर दे, तो गॉल्जी काय का कार्य भी रुक जाएगा।"
    },
    {
        question: "प्रश्न 24. गॉल्जी काय की संरचना में सिस्टर्नी के अलावा और क्या शामिल होता है?",
        answers: shuffle([
            { text: "केवल सिस्टर्नी", correct: false },
            { text: "सिस्टर्नी, नलिकाएं और पुटिकाएं", correct: true },
            { text: "केवल पुटिकाएं", correct: false },
            { text: "सिस्टर्नी और राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय का पूरा तंत्र सिस्टर्नी, उनसे जुड़ी छोटी नलिकाओं (tubules) और उनसे अलग होती पुटिकाओं (vesicles) से मिलकर बनता है।"
    },
    {
        question: "प्रश्न 25. निम्नलिखित में से किस प्रक्रिया में गॉल्जी काय शामिल नहीं है?",
        answers: shuffle([
            { text: "हार्मोन का स्राव", correct: false },
            { text: "एंजाइम का स्राव", correct: false },
            { text: "ATP का उत्पादन", correct: true },
            { text: "बलगम (Mucus) का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ATP का उत्पादन या कोशिकीय श्वसन का मुख्य स्थल माइटोकॉन्ड्रिया है, गॉल्जी काय नहीं।"
    },
    {
        question: "प्रश्न 26. गॉल्जी उपकरण को कोशिका का \"मध्य पुरुष\" (Middleman) क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि यह कोशिका के मध्य में स्थित होता है", correct: false },
            { text: "क्योंकि यह संश्लेषण और अंतिम गंतव्य के बीच कार्य करता है", correct: true },
            { text: "क्योंकि यह केवल प्रोटीन का परिवहन करता है", correct: false },
            { text: "क्योंकि यह सबसे छोटा कोशिकांग है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ER (संश्लेषण स्थल) से अणुओं को प्राप्त करता है और उन्हें पैक करके उनके अंतिम गंतव्य (जैसे कोशिका झिल्ली या लाइसोसोम) तक भेजता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए इसे मध्यस्थ या \"मिडिलमैन\" कहते हैं।"
    },
    {
        question: "प्रश्न 27. प्रोटीन की छंटाई (Protein sorting) का कार्य प्रमुख रूप से कहाँ होता है?",
        answers: shuffle([
            { text: "राइबोसोम पर", correct: false },
            { text: "केंद्रक में", correct: false },
            { text: "गॉल्जी काय के ट्रांस-नेटवर्क में", correct: true },
            { text: "माइटोकॉन्ड्रिया में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय के ट्रांस-गोलगी नेटवर्क (TGN) में प्रोटीनों पर विशेष सिग्नल लगाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो यह निर्धारित करते हैं कि उन्हें कोशिका में कहाँ भेजा जाना है।"
    },
    {
        question: "प्रश्न 28. गॉल्जी काय की झिल्ली की मोटाई होती है-",
        answers: shuffle([
            { text: "कोशिका झिल्ली से अधिक", correct: false },
            { text: "कोशिका झिल्ली से कम", correct: true },
            { text: "कोशिका झिल्ली के बराबर", correct: false },
            { text: "ER की झिल्ली से अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आमतौर पर, गॉल्जी काय की झिल्ली की मोटाई एंडोप्लाज्मिक रेटिकुलम और कोशिका झिल्ली के बीच की होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन यह ER से मोटी और प्लाज्मा झिल्ली से पतली होती है।"
    },
    {
        question: "प्रश्न 29. यदि कोशिका से गॉल्जी काय को हटा दिया जाए तो क्या होगा?",
        answers: shuffle([
            { text: "श्वसन रुक जाएगा", correct: false },
            { text: "प्रोटीन संश्लेषण रुक जाएगा", correct: false },
            { text: "स्राव और जटिल अणुओं का निर्माण रुक जाएगा", correct: true },
            { text: "प्रकाश संश्लेषण रुक जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय के बिना, कोशिका प्रोटीन और लिपिड को संशोधित, पैक और स्रावित नहीं कर पाएगी।<br><br><i class='fa-solid fa-angles-right icon'></i>  लाइसोसोम जैसे महत्वपूर्ण कोशिकांगों का निर्माण भी बाधित होगा।"
    },
    {
        question: "प्रश्न 30. गॉल्जी काय की सिस्टर्नी एक निश्चित अभिविन्यास में क्यों व्यवस्थित रहती हैं?",
        answers: shuffle([
            { text: "ऊर्जा बचाने के लिए", correct: false },
            { text: "अणुओं के एकदिशीय प्रवाह को सुनिश्चित करने के लिए", correct: true },
            { text: "कोशिका को संरचनात्मक सहायता देने के लिए", correct: false },
            { text: "DNA की रक्षा करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिस-फेस से ट्रांस-फेस तक का निश्चित अभिविन्यास यह सुनिश्चित करता है कि अणु एक व्यवस्थित क्रम में संशोधित और संसाधित हों।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे एक कुशल उत्पादन लाइन बनती है।"
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