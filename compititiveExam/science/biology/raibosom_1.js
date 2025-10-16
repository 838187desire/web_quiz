const questions = [
    {
        topHeading: "राइबोसोम पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. राइबोसोम का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "ऊर्जा का उत्पादन", correct: false },
            { text: "प्रोटीन का संश्लेषण", correct: true },
            { text: "वसा का संश्लेषण", correct: false },
            { text: "कोशिका विभाजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम कोशिका में वह स्थान है जहाँ mRNA से प्राप्त आनुवंशिक सूचनाओं का अनुवादन करके अमीनो एसिड को जोड़कर प्रोटीन का निर्माण किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसीलिए इसे कोशिका की 'प्रोटीन फैक्ट्री' भी कहते हैं।"
    },
    {
        question: "प्रश्न 2. राइबोसोम किन पदार्थों से बने होते हैं?",
        answers: shuffle([
            { text: "केवल प्रोटीन", correct: false },
            { text: "केवल DNA", correct: false },
            { text: "RNA और प्रोटीन", correct: true },
            { text: "लिपिड और प्रोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम राइबोन्यूक्लियोप्रोटीन कण हैं, जिनका निर्माण मुख्य रूप से राइबोसोमल आरएनए (rRNA) और प्रोटीन से होता है।"
    },
    {
        question: "प्रश्न 3. प्रोकैरियोटिक कोशिकाओं (जैसे जीवाणु) में किस प्रकार के राइबोसोम पाए जाते हैं?",
        answers: shuffle([
            { text: "80S", correct: false },
            { text: "70S", correct: true },
            { text: "60S", correct: false },
            { text: "50S", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कोशिकाओं में 70S प्रकार के राइबोसोम होते हैं, जो 50S (बड़ी उप-इकाई) और 30S (छोटी उप-इकाई) से मिलकर बने होते हैं।"
    },
    {
        question: "प्रश्न 4. यूकैरियोटिक कोशिकाओं के कोशिका द्रव्य में पाए जाने वाले राइबोसोम का प्रकार क्या है?",
        answers: shuffle([
            { text: "70S", correct: false },
            { text: "80S", correct: true },
            { text: "50S", correct: false },
            { text: "30S", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक कोशिकाओं (जैसे पादप और जंतु कोशिका) के कोशिका द्रव्य में 80S प्रकार के राइबोसोम होते हैं, जो 60S और 40S उप-इकाइयों से बने होते हैं।"
    },
    {
        question: "प्रश्न 5. राइबोसोम के प्रकार में 'S' अक्षर का क्या अर्थ है?",
        answers: shuffle([
            { text: "आकार (Size)", correct: false },
            { text: "संरचना (Structure)", correct: false },
            { text: "स्वेडबर्ग इकाई (Svedberg unit)", correct: true },
            { text: "संश्लेषण (Synthesis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'S' स्वेडबर्ग इकाई का प्रतीक है, जो अवसादन गुणांक (Sedimentation Coefficient) को मापता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कण के आकार और घनत्व को दर्शाता है कि वह सेंट्रीफ्यूज में कितनी तेजी से नीचे बैठता है।"
    },
    {
        question: "प्रश्न 6. राइबोसोम की खोज का श्रेय किस वैज्ञानिक को दिया जाता है?",
        answers: shuffle([
            { text: "रॉबर्ट हुक", correct: false },
            { text: "रॉबर्ट ब्राउन", correct: false },
            { text: "जॉर्ज पलाडे", correct: true },
            { text: "कैमिलो गॉल्जी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोमानियाई-अमेरिकी कोशिका जीवविज्ञानी जॉर्ज पलाडे ने 1955 में इलेक्ट्रॉन माइक्रोस्कोप का उपयोग करके राइबोसोम की खोज की थी, जिसके लिए उन्हें नोबेल पुरस्कार से सम्मानित किया गया।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से कौन-सा कोशिकांग झिल्ली-रहित (non-membranous) होता है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "लाइसोसोम", correct: false },
            { text: "गॉल्जी उपकरण", correct: false },
            { text: "राइबोसोम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम एक कोशिकांग है जिसके चारों ओर कोई झिल्ली नहीं होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रोकैरियोटिक और यूकैरियोटिक दोनों कोशिकाओं में पाया जाता है।"
    },
    {
        question: "प्रश्न 8. 'पॉलीसोम' या 'पॉलीराइबोसोम' किसे कहते हैं?",
        answers: shuffle([
            { text: "राइबोसोम का एक समूह", correct: false },
            { text: "mRNA अणु से जुड़े कई राइबोसोम की एक श्रृंखला", correct: true },
            { text: "राइबोसोम के भीतर का प्रोटीन", correct: false },
            { text: "निष्क्रिय अवस्था में मौजूद राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक ही mRNA अणु पर कई राइबोसोम एक साथ जुड़कर प्रोटीन संश्लेषण करते हैं, तो इस संरचना को पॉलीसोम या पॉलीराइबोसोम कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे एक ही प्रोटीन की कई प्रतियां जल्दी बन जाती हैं।"
    },
    {
        question: "प्रश्न 9. यूकैरियोटिक कोशिका के किस भाग में राइबोसोमल RNA (rRNA) का संश्लेषण होता है?",
        answers: shuffle([
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "केंद्रिका (Nucleolus) में", correct: true },
            { text: "माइटोकॉन्ड्रिया में", correct: false },
            { text: "गॉल्जी उपकरण में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रिका (Nucleolus), जो केंद्रक के अंदर एक सघन संरचना है, rRNA के संश्लेषण और राइबोसोम की उप-इकाइयों के संयोजन का मुख्य स्थल है।"
    },
    {
        question: "प्रश्न 10. 70S राइबोसोम की दो उप-इकाइयां (subunits) कौन सी हैं?",
        answers: shuffle([
            { text: "50S और 20S", correct: false },
            { text: "40S और 30S", correct: false },
            { text: "50S और 30S", correct: true },
            { text: "60S और 10S", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 70S राइबोसोम एक बड़ी 50S उप-इकाई और एक छोटी 30S उप-इकाई से मिलकर बना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> स्वेडबर्ग इकाइयां योगात्मक नहीं होती हैं।"
    },
    {
        question: "प्रश्न 11. 80S राइबोसोम की दो उप-इकाइयां कौन सी हैं?",
        answers: shuffle([
            { text: "60S और 20S", correct: false },
            { text: "50S और 30S", correct: false },
            { text: "70S और 10S", correct: false },
            { text: "60S और 40S", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 80S राइबोसोम एक बड़ी 60S उप-इकाई और एक छोटी 40S उप-इकाई से मिलकर बना होता है।"
    },
    {
        question: "प्रश्न 12. कौन-सा कोशिकांग प्रोकैरियोटिक और यूकैरियोटिक दोनों कोशिकाओं में पाया जाता है?",
        answers: shuffle([
            { text: "केंद्रक", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "राइबोसोम", correct: true },
            { text: "एंडोप्लाज्मिक रेटिकुलम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम एकमात्र ऐसा कोशिकांग है जो सभी प्रकार की जीवित कोशिकाओं, चाहे वे प्रोकैरियोटिक हों या यूकैरियोटिक, में सार्वभौमिक रूप से मौजूद होता है, क्योंकि प्रोटीन संश्लेषण सभी के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 13. खुरदरी अंतर्द्रव्यी जालिका (Rough ER) की सतह पर क्या चिपके रहते हैं?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "राइबोसोम", correct: true },
            { text: "गॉल्जी कण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खुरदरी अंतर्द्रव्यी जालिका की सतह पर राइबोसोम चिपके होने के कारण ही उसकी सतह खुरदरी दिखाई देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये राइबोसोम उन प्रोटीनों का संश्लेषण करते हैं जिन्हें कोशिका से बाहर भेजा जाना है या झिल्लियों में स्थापित किया जाना है।"
    },
    {
        question: "प्रश्न 14. राइबोसोम की दोनों उप-इकाइयों को एक साथ जोड़ने के लिए किस आयन की आवश्यकता होती है?",
        answers: shuffle([
            { text: "कैल्शियम (Ca2+)", correct: false },
            { text: "पोटैशियम (K+)", correct: false },
            { text: "मैग्नीशियम (Mg2+)", correct: true },
            { text: "सोडियम (Na+)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैग्नीशियम आयन (Mg2+) की एक निश्चित सांद्रता राइबोसोम की बड़ी और छोटी उप-इकाइयों को एक साथ जुड़कर एक कार्यात्मक राइबोसोम बनाने के लिए आवश्यक होती है।"
    },
    {
        question: "प्रश्न 15. यूकैरियोटिक कोशिका के माइटोकॉन्ड्रिया और क्लोरोप्लास्ट में किस प्रकार के राइबोसोम पाए जाते हैं?",
        answers: shuffle([
            { text: "A) 80S", correct: false },
            { text: "B) 70S", correct: true },
            { text: "A),B) दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडोसिम्बायोटिक सिद्धांत के अनुसार, माइटोकॉन्ड्रिया और क्लोरोप्लास्ट की उत्पत्ति प्रोकैरियोटिक जीवों से हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण, इन कोशिकांगों में प्रोकैरियोट्स के समान 70S राइबोसोम होते हैं।"
    },
    {
        question: "प्रश्न 16. प्रोटीन संश्लेषण की प्रक्रिया को क्या कहा जाता है?",
        answers: shuffle([
            { text: "अनुलेखन (Transcription)", correct: false },
            { text: "प्रतिकृति (Replication)", correct: false },
            { text: "अनुवादन (Translation)", correct: true },
            { text: "परासरण (Osmosis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुवादन वह प्रक्रिया है जिसमें राइबोसोम mRNA पर कोडित संदेश को पढ़कर अमीनो एसिड की एक श्रृंखला (पॉलीपेप्टाइड) का निर्माण करते हैं, जो बाद में प्रोटीन में बदल जाती है।"
    },
    {
        question: "प्रश्न 17. राइबोसोम की छोटी उप-इकाई का क्या कार्य है?",
        answers: shuffle([
            { text: "पेप्टाइड बंध का निर्माण करना", correct: false },
            { text: "अमीनो एसिड को लाना", correct: false },
            { text: "mRNA से जुड़ना और उसे पढ़ना", correct: true },
            { text: "ऊर्जा प्रदान करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटीन संश्लेषण के दौरान, राइबोसोम की छोटी उप-इकाई mRNA अणु से जुड़ती है और उसके कोडॉन को पढ़ने के लिए एक मंच प्रदान करती है।"
    },
    {
        question: "प्रश्न 18. पेप्टाइड बंध (Peptide bond) का निर्माण राइबोसोम के किस भाग में होता है?",
        answers: shuffle([
            { text: "छोटी उप-इकाई में", correct: false },
            { text: "बड़ी उप-इकाई में", correct: true },
            { text: "mRNA बाइंडिंग साइट पर", correct: false },
            { text: "कोशिका द्रव्य में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़ी उप-इकाई में पेप्टिडिल ट्रांसफरेज (peptidyl transferase) नामक एंजाइमेटिक गतिविधि होती है, जो पॉलीपेप्टाइड श्रृंखला में अमीनो एसिड के बीच पेप्टाइड बंध बनाने के लिए जिम्मेदार है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गतिविधि वास्तव में rRNA द्वारा की जाती है।"
    },
    {
        question: "प्रश्न 19. कोशिका द्रव्य में स्वतंत्र रूप से तैरने वाले राइबोसोम द्वारा बनाए गए प्रोटीन का उपयोग कहाँ होता है?",
        answers: shuffle([
            { text: "कोशिका के बाहर स्रावित करने के लिए", correct: false },
            { text: "कोशिका के भीतर ही (कोशिका द्रव्य में)", correct: true },
            { text: "लाइसोसोम बनाने के लिए", correct: false },
            { text: "कोशिका झिल्ली में स्थापित करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका द्रव्य में स्वतंत्र रूप से मौजूद राइबोसोम उन प्रोटीनों का निर्माण करते हैं जो कोशिका द्रव्य में ही कार्य करते हैं, जैसे ग्लाइकोलाइसिस के एंजाइम।"
    },
    {
        question: "प्रश्न 20. राइबोसोम को \"पलाडे कण\" (Palade Particulates) भी क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि वे पलाडे नामक शहर में खोजे गए थे", correct: false },
            { text: "उनके खोजकर्ता जॉर्ज पलाडे के सम्मान में", correct: true },
            { text: "क्योंकि वे पीले (pale) रंग के होते हैं", correct: false },
            { text: "उनके गोल आकार के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जॉर्ज पलाडे द्वारा की गई उनकी खोज के सम्मान में राइबोसोम को कभी-कभी \"पलाडे कण\" भी कहा जाता है।"
    },
    {
        question: "प्रश्न 21. राइबोजाइम (Ribozyme) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार का प्रोटीन एंजाइम", correct: false },
            { text: "एक RNA अणु जिसमें एंजाइम की तरह उत्प्रेरक गुण होते हैं", correct: true },
            { text: "राइबोसोम बनाने वाला एंजाइम", correct: false },
            { text: "एक विशेष प्रकार का लिपिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम की बड़ी उप-इकाई में पाया जाने वाला rRNA (विशेष रूप से 23S rRNA) पेप्टाइड बंध बनाने की उत्प्रेरक क्रिया करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक राइबोजाइम का उत्कृष्ट उदाहरण है, जो यह दर्शाता है कि RNA भी एंजाइम के रूप में कार्य कर सकता है।"
    },
    {
        question: "प्रश्न 22. प्रोटीन संश्लेषण के दौरान tRNA (ट्रांसफर RNA) का क्या कार्य है?",
        answers: shuffle([
            { text: "DNA से संदेश की प्रतिलिपि बनाना", correct: false },
            { text: "राइबोसोम का निर्माण करना", correct: false },
            { text: "कोशिका द्रव्य से अमीनो एसिड को राइबोसोम तक लाना", correct: true },
            { text: "प्रोटीन को उसकी सही जगह पर भेजना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> tRNA अणु एक एडाप्टर की तरह काम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कोशिका द्रव्य से एक विशिष्ट अमीनो एसिड को उठाता है और उसे mRNA के कोडॉन के अनुसार राइबोसोम तक पहुँचाता है।"
    },
    {
        question: "प्रश्न 23. यदि कोशिका से सभी राइबोसोम हटा दिए जाएं तो क्या होगा?",
        answers: shuffle([
            { text: "श्वसन रुक जाएगा", correct: false },
            { text: "प्रकाश संश्लेषण रुक जाएगा", correct: false },
            { text: "प्रोटीन संश्लेषण रुक जाएगा", correct: true },
            { text: "कोशिका विभाजन रुक जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि राइबोसोम प्रोटीन संश्लेषण के लिए अनिवार्य स्थल हैं, इसलिए उनकी अनुपस्थिति में कोशिका कोई भी नया प्रोटीन नहीं बना पाएगी, जिससे उसकी सभी जैविक क्रियाएं अंततः रुक जाएंगी।"
    },
    {
        question: "प्रश्न 24. राइबोसोम का आकार किस इकाई में मापा जाता है?",
        answers: shuffle([
            { text: "माइक्रोन", correct: false },
            { text: "एंगस्ट्रॉम", correct: false },
            { text: "नैनोमीटर", correct: true },
            { text: "डेसीबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम बहुत छोटे कण होते हैं, जिनका व्यास आमतौर पर 20-30 नैनोमीटर (nm) की सीमा में होता है।"
    },
    {
        question: "प्रश्न 25. निष्क्रिय राइबोसोम कोशिका द्रव्य में किस रूप में मौजूद होते हैं?",
        answers: shuffle([
            { text: "पॉलीसोम के रूप में", correct: false },
            { text: "अपनी दो अलग-अलग उप-इकाइयों के रूप में", correct: true },
            { text: "ER से जुड़े हुए", correct: false },
            { text: "एक बड़े समूह के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रोटीन संश्लेषण नहीं हो रहा होता है, तो राइबोसोम की बड़ी और छोटी उप-इकाइयां कोशिका द्रव्य में एक-दूसरे से अलग रहती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे केवल mRNA की उपस्थिति में ही जुड़ती हैं।"
    },
    {
        question: "प्रश्न 26. कौन सा कथन राइबोसोम के बारे में सही नहीं है?",
        answers: shuffle([
            { text: "वे RNA और प्रोटीन से बने होते हैं।", correct: false },
            { text: "वे सभी जीवित कोशिकाओं में पाए जाते हैं।", correct: false },
            { text: "वे आत्म-प्रतिकृति (self-replicating) कर सकते हैं।", correct: true },
            { text: "वे प्रोटीन संश्लेषण में भाग लेते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम स्वयं की प्रतिकृति नहीं बना सकते।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका निर्माण rRNA (केंद्रिका से) और प्रोटीन (कोशिका द्रव्य से) के संयोजन से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> केवल DNA युक्त कोशिकांग जैसे माइटोकॉन्ड्रिया और क्लोरोप्लास्ट ही अर्ध-स्वायत्त रूप से विभाजित हो सकते हैं।"
    },
    {
        question: "प्रश्न 27. राइबोसोम की दोनों उप-इकाइयाँ प्रोटीन संश्लेषण के किस चरण में जुड़ती हैं?",
        answers: shuffle([
            { text: "प्रारंभन (Initiation)", correct: true },
            { text: "दीर्धीकरण (Elongation)", correct: false },
            { text: "समापन (Termination)", correct: false },
            { text: "किसी भी समय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटीन संश्लेषण की शुरुआत (प्रारंभन) में, छोटी उप-इकाई mRNA से जुड़ती है, और फिर बड़ी उप-इकाई आकर एक पूर्ण कार्यात्मक राइबोसोम बनाती है।"
    },
    {
        question: "प्रश्न 28. राइबोसोम प्रोटीन बनाने के लिए किस अणु को 'ब्लूप्रिंट' या 'निर्देश' के रूप में उपयोग करता है?",
        answers: shuffle([
            { text: "DNA", correct: false },
            { text: "rRNA", correct: false },
            { text: "mRNA", correct: true },
            { text: "tRNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैसेंजर RNA (mRNA) केंद्रक में DNA से आनुवंशिक कोड की एक प्रतिलिपि लेकर राइबोसोम तक लाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> राइबोसोम इसी mRNA को पढ़कर प्रोटीन का निर्माण करता है।"
    },
    {
        question: "प्रश्न 29. निम्नलिखित में से किस एंटीबायोटिक का लक्ष्य जीवाणु के 70S राइबोसोम होते हैं?",
        answers: shuffle([
            { text: "पेनिसिलिन", correct: false },
            { text: "टेट्रासाइक्लिन", correct: true },
            { text: "सिप्रोफ्लोक्सासिन", correct: false },
            { text: "एम्पीसिलीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई एंटीबायोटिक्स, जैसे टेट्रासाइक्लिन और एरिथ्रोमाइसिन, विशेष रूप से जीवाणु के 70S राइबोसोम को लक्षित करके उनके प्रोटीन संश्लेषण को रोकते हैं, जबकि मेजबान (मानव) की 80S राइबोसोम अप्रभावित रहते हैं।"
    },
    {
        question: "प्रश्न 30. कोशिका में राइबोसोम कहाँ पाए जा सकते हैं?",
        answers: shuffle([
            { text: "केवल कोशिका द्रव्य में स्वतंत्र रूप से", correct: false },
            { text: "केवल खुरदरी ER से जुड़े हुए", correct: false },
            { text: "माइटोकॉन्ड्रिया और क्लोरोप्लास्ट के मैट्रिक्स में", correct: false },
            { text: "ये सभी स्थानों पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक कोशिकाओं में राइबोसोम कोशिका द्रव्य में स्वतंत्र रूप से, खुरदरी अंतर्द्रव्यी जालिका (RER) की सतह पर, और माइटोकॉन्ड्रिया तथा क्लोरोप्लास्ट (पादप कोशिकाओं में) के अंदर भी पाए जाते हैं।"
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