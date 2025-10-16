const questions = [
    {
        topHeading: "प्रोकैरियोटिक और यूकैरियोटिक कोशिका पर आधारित 35 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. प्रोकैरियोटिक कोशिका का सबसे प्रमुख और परिभाषित लक्षण क्या है?",
        answers: shuffle([
            { text: "कोशिका भित्ति की उपस्थिति", correct: false },
            { text: "राइबोसोम की उपस्थिति", correct: false },
            { text: "झिल्ली-बद्ध केंद्रक का अभाव", correct: true },
            { text: "प्लाज्मा झिल्ली की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक और यूकैरियोटिक कोशिका के बीच सबसे मौलिक अंतर एक सुसंगठित, झिल्ली से घिरे केंद्रक की अनुपस्थिति है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोट्स में आनुवंशिक पदार्थ कोशिका द्रव्य में 'न्यूक्लियॉइड' नामक क्षेत्र में होता है।"
    },
    {
        question: "प्रश्न 2. यूकैरियोटिक कोशिकाओं में किस प्रकार के राइबोसोम पाए जाते हैं?",
        answers: shuffle([
            { text: "70S", correct: false },
            { text: "80S", correct: true },
            { text: "50S", correct: false },
            { text: "30S", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक कोशिकाओं के कोशिका द्रव्य में 80S प्रकार के राइबोसोम होते हैं, जो 60S और 40S की दो उप-इकाइयों से बने होते हैं।"
    },
    {
        question: "प्रश्न 3. निम्नलिखित में से कौन एक प्रोकैरियोटिक जीव का उदाहरण है?",
        answers: shuffle([
            { text: "अमीबा", correct: false },
            { text: "खमीर (Yeast)", correct: false },
            { text: "जीवाणु (Bacteria)", correct: true },
            { text: "कवक (Fungus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीवाणु और आर्किया प्रोकैरियोटिक जीवों के उदाहरण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अमीबा, खमीर और कवक यूकैरियोटिक जीव हैं।"
    },
    {
        question: "प्रश्न 4. किस कोशिकांग की उपस्थिति यूकैरियोटिक कोशिका को प्रोकैरियोटिक कोशिका से अलग करती है?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: true },
            { text: "कोशिका झिल्ली", correct: false },
            { text: "कोशिका द्रव्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया एक झिल्ली-बद्ध कोशिकांग है जो केवल यूकैरियोटिक कोशिकाओं में पाया जाता है और कोशिकीय श्वसन के लिए उत्तरदायी है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोट्स में झिल्ली-बद्ध कोशिकांग नहीं होते हैं।"
    },
    {
        question: "प्रश्न 5. प्रोकैरियोटिक कोशिकाओं का आनुवंशिक पदार्थ (DNA) कैसा होता है?",
        answers: shuffle([
            { text: "रैखिक और हिस्टोन प्रोटीन से जुड़ा हुआ", correct: false },
            { text: "वृत्ताकार और हिस्टोन प्रोटीन रहित", correct: true },
            { text: "कई गुणसूत्रों में व्यवस्थित", correct: false },
            { text: "केंद्रक झिल्ली से घिरा हुआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कोशिकाओं में आमतौर पर एक एकल, वृत्ताकार गुणसूत्र होता है जो कोशिका द्रव्य में स्थित होता है और इसमें हिस्टोन प्रोटीन नहीं होते हैं, जो यूकैरियोटिक गुणसूत्रों की विशेषता है।"
    },
    {
        question: "प्रश्न 6. यूकैरियोटिक कोशिकाओं में श्वसन की क्रिया मुख्य रूप से कहाँ होती है?",
        answers: shuffle([
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "कोशिका झिल्ली में", correct: false },
            { text: "माइटोकॉन्ड्रिया में", correct: true },
            { text: "राइबोसोम में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक कोशिकाओं में कोशिकीय श्वसन के क्रेब्स चक्र और इलेक्ट्रॉन परिवहन श्रृंखला जैसी प्रमुख प्रक्रियाएं माइटोकॉन्ड्रिया के भीतर होती हैं।"
    },
    {
        question: "प्रश्न 7. प्रोकैरियोटिक कोशिकाओं में कोशिका विभाजन की विधि क्या है?",
        answers: shuffle([
            { text: "समसूत्री विभाजन (Mitosis)", correct: false },
            { text: "अर्धसूत्री विभाजन (Meiosis)", correct: false },
            { text: "द्विखंडन (Binary Fission)", correct: true },
            { text: "मुकुलन (Budding)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कोशिकाएं सरल द्विखंडन प्रक्रिया द्वारा विभाजित होती हैं, जिसमें कोशिका बस दो समान संतति कोशिकाओं में विभाजित हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें जटिल समसूत्री या अर्धसूत्री प्रक्रिया नहीं होती है।"
    },
    {
        question: "प्रश्न 8. निम्नलिखित में से कौन सी संरचना प्रोकैरियोटिक और यूकैरियोटिक दोनों कोशिकाओं में पाई जाती है?",
        answers: shuffle([
            { text: "गॉल्जी उपकरण", correct: false },
            { text: "लाइसोसोम", correct: false },
            { text: "राइबोसोम", correct: true },
            { text: "एंडोप्लाज्मिक रेटिकुलम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम एकमात्र ऐसा कोशिकांग है जो प्रोकैरियोटिक और यूकैरियोटिक दोनों प्रकार की कोशिकाओं में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रोटीन संश्लेषण के लिए आवश्यक है, हालांकि दोनों में इसका प्रकार (70S बनाम 80S) भिन्न होता है।"
    },
    {
        question: "प्रश्न 9. प्रोकैरियोटिक कोशिका की कोशिका भित्ति मुख्य रूप से किससे बनी होती है?",
        answers: shuffle([
            { text: "सेलूलोज़", correct: false },
            { text: "काइटिन", correct: false },
            { text: "पेप्टिडोग्लाइकन", correct: true },
            { text: "लिग्निन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश जीवाणुओं (प्रोकैरियोट्स) की कोशिका भित्ति पेप्टिडोग्लाइकन (जिसे म्यूरीन भी कहा जाता है) नामक एक अद्वितीय बहुलक से बनी होती है।"
    },
    {
        question: "प्रश्न 10. यूकैरियोटिक गुणसूत्र (Chromosome) किससे बने होते हैं?",
        answers: shuffle([
            { text: "केवल DNA", correct: false },
            { text: "केवल RNA", correct: false },
            { text: "DNA और हिस्टोन प्रोटीन", correct: true },
            { text: "RNA और प्रोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक कोशिकाओं में, रैखिक DNA अणु हिस्टोन नामक प्रोटीन के चारों ओर कसकर लिपटे होते हैं, जिससे क्रोमेटिन बनता है, जो संघनित होकर गुणसूत्र का निर्माण करता है।"
    },
    {
        question: "प्रश्न 11. 'न्यूक्लियॉइड' (Nucleoid) क्षेत्र किस प्रकार की कोशिका में पाया जाता है?",
        answers: shuffle([
            { text: "पादप कोशिका", correct: false },
            { text: "जंतु कोशिका", correct: false },
            { text: "प्रोकैरियोटिक कोशिका", correct: true },
            { text: "कवक कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूक्लियॉइड प्रोकैरियोटिक कोशिका के कोशिका द्रव्य का वह अनियमित आकार का क्षेत्र है जहाँ इसका आनुवंशिक पदार्थ (वृत्ताकार डीएनए) स्थित होता है।"
    },
    {
        question: "प्रश्न 12. सामान्यतः, आकार में कौन सी कोशिकाएं बड़ी और अधिक जटिल होती हैं?",
        answers: shuffle([
            { text: "A) प्रोकैरियोटिक कोशिकाएं", correct: false },
            { text: "B) यूकैरियोटिक कोशिकाएं", correct: true },
            { text: "A), B) दोनों का आकार समान होता है", correct: false },
            { text: "विषाणु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक कोशिकाएं आमतौर पर प्रोकैरियोटिक कोशिकाओं की तुलना में बहुत बड़ी (10-100 माइक्रोमीटर) और संरचनात्मक रूप से अधिक जटिल होती हैं, जिनमें कई झिल्ली-बद्ध कोशिकांग होते हैं।"
    },
    {
        question: "प्रश्न 13. प्रोकैरियोटिक कोशिकाओं में श्वसन एंजाइम कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया में", correct: false },
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "कोशिका झिल्ली (प्लाज्मा मेम्ब्रेन) में", correct: true },
            { text: "न्यूक्लियॉइड में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि प्रोकैरियोट्स में माइटोकॉन्ड्रिया नहीं होते हैं, इसलिए कोशिकीय श्वसन से संबंधित एंजाइम और इलेक्ट्रॉन परिवहन श्रृंखला कोशिका झिल्ली में ही अंतर्निहित होती है।"
    },
    {
        question: "प्रश्न 14. एक सुविकसित कोशिका कंकाल (Cytoskeleton) किसमें पाया जाता है?",
        answers: shuffle([
            { text: "जीवाणु में", correct: false },
            { text: "विषाणु में", correct: false },
            { text: "यूकैरियोटिक कोशिका में", correct: true },
            { text: "नीले-हरे शैवाल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक कोशिकाओं में प्रोटीन तंतुओं (माइक्रोट्यूब्यूल, माइक्रोफिलामेंट्स) से बना एक जटिल कोशिका कंकाल होता है, जो कोशिका को आकार और यांत्रिक सहारा प्रदान करता है।"
    },
    {
        question: "प्रश्न 15. एंडोप्लाज्मिक रेटिकुलम और गॉल्जी उपकरण जैसे अंगक किसमें अनुपस्थित होते हैं?",
        answers: shuffle([
            { text: "प्रोकैरियोटिक कोशिकाओं में", correct: true },
            { text: "जंतु कोशिकाओं में", correct: false },
            { text: "पादप कोशिकाओं में", correct: false },
            { text: "सभी यूकैरियोटिक कोशिकाओं में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडोप्लाज्मिक रेटिकुलम और गॉल्जी उपकरण झिल्ली-बद्ध अंगक हैं जो केवल यूकैरियोटिक कोशिकाओं में पाए जाते हैं और प्रोटीन तथा लिपिड के प्रसंस्करण और परिवहन में शामिल होते हैं।"
    },
    {
        question: "प्रश्न 16. यूकैरियोटिक कोशिका के माइटोकॉन्ड्रिया में किस प्रकार के राइबोसोम पाए जाते हैं?",
        answers: shuffle([
            { text: "80S", correct: false },
            { text: "70S", correct: true },
            { text: "60S", correct: false },
            { text: "40S", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडोसिम्बायोटिक सिद्धांत के अनुसार, माइटोकॉन्ड्रिया की उत्पत्ति प्रोकैरियोटिक जीवों से हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण, यूकैरियोटिक कोशिका के माइटोकॉन्ड्रिया और क्लोरोप्लास्ट में 70S प्रकार के राइबोसोम होते हैं, जो प्रोकैरियोट्स के समान हैं।"
    },
    {
        question: "प्रश्न 17. नील-हरित शैवाल (Blue-Green Algae) किस प्रकार की कोशिका का उदाहरण है?",
        answers: shuffle([
            { text: "यूकैरियोटिक", correct: false },
            { text: "प्रोकैरियोटिक", correct: true },
            { text: "पादप", correct: false },
            { text: "कवक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नील-हरित शैवाल, जिन्हें सायनोबैक्टीरिया भी कहा जाता है, प्रकाशसंश्लेषक जीवाणु हैं और इनकी कोशिका संरचना प्रोकैरियोटिक होती है।"
    },
    {
        question: "प्रश्न 18. कोशिका चक्र (Cell Cycle) की G1, S, G2 और M जैसी अवस्थाएं किसमें होती हैं?",
        answers: shuffle([
            { text: "जीवाणुओं में", correct: false },
            { text: "यूकैरियोटिक कोशिकाओं में", correct: true },
            { text: "विषाणुओं में", correct: false },
            { text: "आर्किया में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका चक्र की ये सु-परिभाषित अवस्थाएं यूकैरियोटिक कोशिकाओं के कोशिका विभाजन (समसूत्री विभाजन) की विशेषता हैं।"
    },
    {
        question: "प्रश्न 19. मीसोसोम (Mesosome) नामक संरचना किस कोशिका से संबंधित है?",
        answers: shuffle([
            { text: "जंतु कोशिका", correct: false },
            { text: "पादप कोशिका", correct: false },
            { text: "प्रोकैरियोटिक कोशिका", correct: true },
            { text: "कवक कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीसोसोम प्रोकैरियोटिक कोशिकाओं की कोशिका झिल्ली के अंतर्वलन (invaginations) हैं, जिनके बारे में माना जाता है कि वे श्वसन और कोशिका विभाजन में सहायता करते हैं।"
    },
    {
        question: "प्रश्न 20. वह प्रक्रिया जिसमें कोशिका बाहरी पदार्थ को झिल्ली द्वारा घेरकर अंदर लेती है (एंडोसाइटोसिस), किसमें होती है?",
        answers: shuffle([
            { text: "A) केवल प्रोकैरियोट्स में", correct: false },
            { text: "B) केवल यूकैरियोट्स में", correct: true },
            { text: "A), B) दोनों में", correct: false },
            { text: "किसी में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडोसाइटोसिस और एक्सोसाइटोसिस जैसी प्रक्रियाएं, जिनमें झिल्ली का उपयोग करके पदार्थों का परिवहन होता है, केवल यूकैरियोटिक कोशिकाओं में पाई जाती हैं।"
    },
    {
        question: "प्रश्न 21. किस कोशिका में एक से अधिक गुणसूत्र होते हैं जो एक झिल्ली द्वारा घिरे केंद्रक में पाए जाते हैं?",
        answers: shuffle([
            { text: "प्रोकैरियोटिक कोशिका", correct: false },
            { text: "यूकैरियोटिक कोशिका", correct: true },
            { text: "बैक्टीरियोफेज", correct: false },
            { text: "माइकोप्लाज्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक कोशिकाओं में कई रैखिक गुणसूत्र होते हैं जो एक दोहरी झिल्ली वाले केंद्रक के भीतर सुरक्षित रहते हैं।"
    },
    {
        question: "प्रश्न 22. यूकैरियोटिक कोशिकाओं के विपरीत, प्रोकैरियोटिक कोशिकाओं में क्या होता है?",
        answers: shuffle([
            { text: "एक जटिल आंतरिक झिल्ली प्रणाली", correct: false },
            { text: "एक सरल संरचना और झिल्ली-बद्ध अंगकों का अभाव", correct: true },
            { text: "समसूत्री विभाजन", correct: false },
            { text: "हिस्टोन प्रोटीन के साथ डीएनए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कोशिकाएं संरचनात्मक रूप से बहुत सरल होती हैं और उनमें यूकैरियोटिक कोशिकाओं में पाए जाने वाले जटिल झिल्ली-बद्ध अंगकों का अभाव होता है।"
    },
    {
        question: "प्रश्न 23. पादप और कवक कोशिकाएं यूकैरियोटिक हैं, लेकिन उनकी कोशिका भित्ति क्रमशः किससे बनी होती है?",
        answers: shuffle([
            { text: "पेप्टिडोग्लाइकन और काइटिन", correct: false },
            { text: "सेलूलोज़ और पेप्टिडोग्लाइकन", correct: false },
            { text: "सेलूलोज़ और काइटिन", correct: true },
            { text: "काइटिन और सेलूलोज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिकाओं की कोशिका भित्ति मुख्य रूप से सेलूलोज़ से बनी होती है, जबकि कवक की कोशिका भित्ति काइटिन से बनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों ही यूकैरियोटिक जीव हैं।"
    },
    {
        question: "प्रश्न 24. कौन सा कथन प्रोकैरियोटिक कोशिका के लिए सही है?",
        answers: shuffle([
            { text: "इसमें क्लोरोप्लास्ट होते हैं।", correct: false },
            { text: "इसमें केंद्रिका (Nucleolus) होती है।", correct: false },
            { text: "इसमें कोई झिल्ली-बद्ध अंगक नहीं होता है।", correct: true },
            { text: "इसमें 80S राइबोसोम होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कोशिका की सबसे निश्चित विशेषताओं में से एक यह है कि इसमें माइटोकॉन्ड्रिया, क्लोरोप्लास्ट, लाइसोसोम आदि जैसे किसी भी झिल्ली-बद्ध अंगक का पूर्ण अभाव होता है।"
    },
    {
        question: "प्रश्न 25. सभी यूकैरियोटिक कोशिकाओं में एक प्रमुख संरचना होती है जो प्रोकैरियोटिक कोशिकाओं में नहीं होती है, वह है:",
        answers: shuffle([
            { text: "कोशिका भित्ति", correct: false },
            { text: "प्लाज्मा झिल्ली", correct: false },
            { text: "केंद्रक (Nucleus)", correct: true },
            { text: "साइटोप्लाज्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सुसंगठित, झिल्ली से घिरा केंद्रक सभी यूकैरियोटिक कोशिकाओं की सार्वभौमिक विशेषता है और यह उन्हें प्रोकैरियोट्स से अलग करता है।"
    },
    {
        question: "प्रश्न 26. अनुलेखन (Transcription) और अनुवादन (Translation) की प्रक्रिया प्रोकैरियोट्स में कहाँ होती है?",
        answers: shuffle([
            { text: "केंद्रक और कोशिका द्रव्य में", correct: false },
            { text: "केवल केंद्रक में", correct: false },
            { text: "कोशिका द्रव्य में एक साथ", correct: true },
            { text: "माइटोकॉन्ड्रिया में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि प्रोकैरियोट्स में केंद्रक नहीं होता है, इसलिए अनुलेखन (DNA से RNA बनना) और अनुवादन (RNA से प्रोटीन बनना) दोनों प्रक्रियाएं कोशिका द्रव्य में लगभग एक साथ होती हैं।"
    },
    {
        question: "प्रश्न 27. कशाभिका (Flagella) की संरचना प्रोकैरियोट्स और यूकैरियोट्स में भिन्न होती है। प्रोकैरियोटिक कशाभिका किस प्रोटीन से बनी होती है?",
        answers: shuffle([
            { text: "ट्यूबुलिन", correct: false },
            { text: "एक्टिन", correct: false },
            { text: "फ्लैजेलिन", correct: true },
            { text: "केराटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कशाभिका एक सरल संरचना है जो फ्लैजेलिन नामक प्रोटीन से बनी होती है, जबकि यूकैरियोटिक कशाभिका अधिक जटिल होती है और ट्यूबुलिन प्रोटीन से बने माइक्रोट्यूब्यूल से बनी होती है।"
    },
    {
        question: "प्रश्न 28. निम्नलिखित में से कौन-सा जीव यूकैरियोटिक कोशिका संरचना का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "प्रोटोजोआ", correct: false },
            { text: "शैवाल (Algae)", correct: false },
            { text: "आर्किया (Archaea)", correct: true },
            { text: "स्लाइम मोल्ड्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्किया, जीवाणुओं की तरह, प्रोकैरियोटिक सूक्ष्मजीवों का एक डोमेन है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रोटोजोआ, शैवाल और स्लाइम मोल्ड्स सभी यूकैरियोटिक हैं।"
    },
    {
        question: "प्रश्न 29. यूकैरियोटिक कोशिकाओं में RNA का प्रसंस्करण (splicing) कहाँ होता है?",
        answers: shuffle([
            { text: "राइबोसोम में", correct: false },
            { text: "केंद्रक में", correct: true },
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "गॉल्जी उपकरण में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक कोशिकाओं में, डीएनए से आरएनए बनने (अनुलेखन) के बाद, आरएनए का प्रसंस्करण (जैसे स्प्लिसिंग) केंद्रक के भीतर ही होता है, इससे पहले कि वह प्रोटीन संश्लेषण के लिए कोशिका द्रव्य में जाए।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रक्रिया प्रोकैरियोट्स में नहीं होती है।"
    },
    {
        question: "प्रश्न 30. प्लाज्मिड (Plasmid) क्या हैं और वे मुख्य रूप से कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "यूकैरियोटिक कोशिकाओं में अतिरिक्त गुणसूत्र", correct: false },
            { text: "प्रोकैरियोटिक कोशिकाओं में मुख्य वृत्ताकार डीएनए", correct: false },
            { text: "प्रोकैरियोटिक कोशिकाओं में छोटे, अतिरिक्त-गुणसूत्रीय डीएनए अणु", correct: true },
            { text: "विषाणुओं का आनुवंशिक पदार्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लाज्मिड छोटे, वृत्ताकार डीएनए अणु होते हैं जो जीवाणु (प्रोकैरियोट्स) में उनके मुख्य गुणसूत्र के अलावा पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे अक्सर एंटीबायोटिक प्रतिरोध जैसे लक्षण प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 31. किस कोशिका प्रकार में कोशिका द्रव्य का प्रवाह (cytoplasmic streaming) देखा जाता है?",
        answers: shuffle([
            { text: "जीवाणु", correct: false },
            { text: "यूकैरियोटिक कोशिका", correct: true },
            { text: "विषाणु", correct: false },
            { text: "आर्किया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका द्रव्य का प्रवाह, जिसे साइक्लोसिस भी कहते हैं, कोशिका के भीतर पोषक तत्वों और अंगकों को वितरित करने के लिए कोशिका द्रव्य की गति है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह यूकैरियोटिक कोशिकाओं की एक विशेषता है, जो उनके बड़े आकार और जटिलता के कारण आवश्यक है।"
    },
    {
        question: "प्रश्न 32. कौन सा कथन असत्य है?",
        answers: shuffle([
            { text: "सभी प्रोकैरियोट्स में कोशिका भित्ति होती है।", correct: false },
            { text: "सभी यूकैरियोट्स बहुकोशिकीय होते हैं।", correct: true },
            { text: "प्रोकैरियोट्स में माइटोकॉन्ड्रिया नहीं होते हैं।", correct: false },
            { text: "यूकैरियोट्स में एक वास्तविक केंद्रक होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथन असत्य है क्योंकि कई यूकैरियोटिक जीव, जैसे अमीबा, पैरामीशियम और खमीर (यीस्ट), एककोशिकीय होते हैं।"
    },
    {
        question: "प्रश्न 33. प्रोकैरियोटिक और यूकैरियोटिक दोनों कोशिकाओं की प्लाज्मा झिल्ली मुख्य रूप से किससे बनी होती है?",
        answers: shuffle([
            { text: "सेलूलोज़ और प्रोटीन", correct: false },
            { text: "पेप्टिडोग्लाइकन", correct: false },
            { text: "फॉस्फोलिपिड और प्रोटीन", correct: true },
            { text: "काइटिन और लिपिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों प्रकार की कोशिकाओं में एक मौलिक रूप से समान प्लाज्मा झिल्ली संरचना होती है, जो फॉस्फोलिपिड की दोहरी परत (बाईलेयर) और उसमें धंसे हुए प्रोटीन से बनी होती है।"
    },
    {
        question: "प्रश्न 34. एंडोसिम्बायोटिक सिद्धांत (Endosymbiotic theory) किसकी उत्पत्ति की व्याख्या करता है?",
        answers: shuffle([
            { text: "प्रोकैरियोटिक कोशिका की", correct: false },
            { text: "विषाणुओं की", correct: false },
            { text: "यूकैरियोटिक कोशिका के कुछ अंगकों (माइटोकॉन्ड्रिया, क्लोरोप्लास्ट) की", correct: true },
            { text: "केंद्रक की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत बताता है कि माइटोकॉन्ड्रिया और क्लोरोप्लास्ट जैसे यूकैरियोटिक अंगक स्वतंत्र प्रोकैरियोटिक जीवों से विकसित हुए हैं जिन्हें एक बड़ी परपोषी कोशिका ने निगल लिया था।"
    },
    {
        question: "प्रश्न 35. यदि किसी कोशिका में झिल्ली-बद्ध अंगकों का अभाव है, लेकिन उसमें प्रोटीन संश्लेषण के लिए राइबोसोम हैं, तो वह कोशिका कौन सी हो सकती है?",
        answers: shuffle([
            { text: "एक पादप कोशिका", correct: false },
            { text: "एक जंतु कोशिका", correct: false },
            { text: "एक प्रोकैरियोटिक कोशिका", correct: true },
            { text: "एक कवक कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झिल्ली-बद्ध अंगकों की अनुपस्थिति और राइबोसोम की उपस्थिति एक प्रोकैरियोटिक कोशिका का स्पष्ट संकेत है।<br><br><i class='fa-solid fa-angles-right icon'></i> राइबोसोम जीवन के लिए आवश्यक प्रोटीन बनाते हैं और सभी कोशिकाओं में मौजूद होते हैं।"
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