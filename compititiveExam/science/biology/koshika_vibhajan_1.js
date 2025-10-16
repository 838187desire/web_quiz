const questions = [
    {
        topHeading: "कोशिका विभाजन पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. कायिक कोशिकाओं (somatic cells) में वृद्धि और मरम्मत के लिए किस प्रकार का कोशिका विभाजन होता है?",
        answers: shuffle([
            { text: "अर्धसूत्री विभाजन (Meiosis)", correct: false },
            { text: "समसूत्री विभाजन (Mitosis)", correct: true },
            { text: "द्विखंडन (Binary Fission)", correct: false },
            { text: "असूत्री विभाजन (Amitosis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समसूत्री विभाजन एक ऐसी प्रक्रिया है जिसमें एक जनक कोशिका दो आनुवंशिक रूप से समान संतति कोशिकाओं में विभाजित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह प्रक्रिया जीवों में वृद्धि, क्षतिग्रस्त ऊतकों की मरम्मत और अलैंगिक जनन के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 2. अर्धसूत्री विभाजन (Meiosis) का अंतिम परिणाम क्या होता है?",
        answers: shuffle([
            { text: "दो द्विगुणित (diploid) कोशिकाएं", correct: false },
            { text: "चार द्विगुणित (diploid) कोशिकाएं", correct: false },
            { text: "दो अगुणित (haploid) कोशिकाएं", correct: false },
            { text: "चार अगुणित (haploid) कोशिकाएं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धसूत्री विभाजन में एक द्विगुणित जनक कोशिका दो चरणों (अर्धसूत्रण I और II) में विभाजित होकर चार आनुवंशिक रूप से भिन्न, अगुणित संतति कोशिकाओं का निर्माण करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिन्हें युग्मक (gametes) कहते हैं।"
    },
    {
        question: "प्रश्न 3. कोशिका चक्र (Cell Cycle) की किस अवस्था में DNA का संश्लेषण या प्रतिकृति (Replication) होता है?",
        answers: shuffle([
            { text: "G1 अवस्था", correct: false },
            { text: "S अवस्था", correct: true },
            { text: "G2 अवस्था", correct: false },
            { text: "M अवस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतरावस्था (Interphase) की S (संश्लेषण) अवस्था के दौरान, कोशिका अपने DNA की एक सटीक प्रतिलिपि बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे प्रत्येक गुणसूत्र में दो सिस्टर क्रोमैटिड हो जाते हैं।"
    },
    {
        question: "प्रश्न 4. 'जीन विनिमय' (Crossing Over) की घटना अर्धसूत्री विभाजन की किस अवस्था में होती है?",
        answers: shuffle([
            { text: "पूर्वावस्था I (Prophase I)", correct: true },
            { text: "मध्यावस्था I (Metaphase I)", correct: false },
            { text: "पूर्वावस्था II (Prophase II)", correct: false },
            { text: "पश्चावस्था I (Anaphase I)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीन विनिमय, जिसमें समजात गुणसूत्रों के बीच आनुवंशिक पदार्थ का आदान-प्रदान होता है, अर्धसूत्री विभाजन की पूर्वावस्था I की पैकिटीन (Pachytene) उप-अवस्था में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह आनुवंशिक विविधता का एक प्रमुख स्रोत है।"
    },
    {
        question: "प्रश्न 5. समसूत्री विभाजन की किस अवस्था में गुणसूत्र कोशिका के मध्य रेखा (Metaphase Plate) पर संरेखित होते हैं?",
        answers: shuffle([
            { text: "पूर्वावस्था (Prophase)", correct: false },
            { text: "मध्यावस्था (Metaphase)", correct: true },
            { text: "पश्चावस्था (Anaphase)", correct: false },
            { text: "अंत्यावस्था (Telophase)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यावस्था के दौरान, सभी गुणसूत्र तर्कु तंतुओं (spindle fibers) द्वारा कोशिका के ठीक बीच में एक काल्पनिक तल पर व्यवस्थित हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे मध्यावस्था प्लेट कहते हैं।"
    },
    {
        question: "प्रश्न 6. समसूत्री विभाजन के पश्चावस्था (Anaphase) के दौरान क्या होता है?",
        answers: shuffle([
            { text: "गुणसूत्र संघनित होते हैं", correct: false },
            { text: "समजात गुणसूत्र अलग होते हैं", correct: false },
            { text: "सिस्टर क्रोमैटिड (अर्धगुणसूत्र) अलग होते हैं", correct: true },
            { text: "केंद्रक झिल्ली का पुनर्निर्माण होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चावस्था में, सेंट्रोमियर विभाजित होता है और प्रत्येक गुणसूत्र के सिस्टर क्रोमैटिड अलग होकर विपरीत ध्रुवों की ओर जाने लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  अब इन्हें संतति गुणसूत्र कहा जाता है।"
    },
    {
        question: "प्रश्न 7. लैंगिक जनन करने वाले जीवों में युग्मक (Gametes) का निर्माण किस प्रक्रिया द्वारा होता है?",
        answers: shuffle([
            { text: "समसूत्री विभाजन", correct: false },
            { text: "अर्धसूत्री विभाजन", correct: true },
            { text: "मुकुलन", correct: false },
            { text: "द्विखंडन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धसूत्री विभाजन को न्यूनीकरण विभाजन (reductional division) भी कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  क्योंकि यह गुणसूत्रों की संख्या को आधा कर देता है, जिससे अगुणित युग्मक (शुक्राणु और अंडाणु) बनते हैं।"
    },
    {
        question: "प्रश्न 8. अर्धसूत्री विभाजन I की पश्चावस्था I (Anaphase I) में क्या अलग होता है?",
        answers: shuffle([
            { text: "सिस्टर क्रोमैटिड", correct: false },
            { text: "समजात गुणसूत्र (Homologous chromosomes)", correct: true },
            { text: "सेंट्रोमियर", correct: false },
            { text: "कोशिका द्रव्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चावस्था I की मुख्य घटना समजात गुणसूत्रों का पृथक्करण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  प्रत्येक गुणसूत्र के जोड़े में से एक विपरीत ध्रुव की ओर जाता है, जबकि सिस्टर क्रोमैटिड अभी भी जुड़े रहते हैं।"
    },
    {
        question: "प्रश्न 9. समसूत्री विभाजन को 'समीकरण विभाजन' (Equational Division) क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि इसमें गुणसूत्रों की संख्या आधी हो जाती है", correct: false },
            { text: "क्योंकि इसमें गुणसूत्रों की संख्या दोगुनी हो जाती है", correct: false },
            { text: "क्योंकि संतति कोशिकाओं में गुणसूत्रों की संख्या जनक कोशिका के समान रहती है", correct: true },
            { text: "क्योंकि यह बहुत तेजी से होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समसूत्री विभाजन के अंत में बनने वाली दो संतति कोशिकाओं में गुणसूत्रों की संख्या और आनुवंशिक संरचना जनक कोशिका के बिल्कुल समान होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसीलिए इसे समीकरण विभाजन कहते हैं।"
    },
    {
        question: "प्रश्न 10. पादप कोशिकाओं में कोशिका द्रव्य विभाजन (Cytokinesis) किसके द्वारा होता है?",
        answers: shuffle([
            { text: "विदलन खांच (Cleavage furrow) द्वारा", correct: false },
            { text: "कोशिका प्लेट (Cell plate) के निर्माण द्वारा", correct: true },
            { text: "संकुचनशील वलय (Contractile ring) द्वारा", correct: false },
            { text: "सीधे विभाजन द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिकाओं में, गॉल्जी उपकरण से निकली पुटिकाएं कोशिका के केंद्र में एकत्रित होकर एक कोशिका प्लेट का निर्माण करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बाहर की ओर बढ़कर नई कोशिका भित्ति बन जाती है।"
    },
    {
        question: "प्रश्न 11. जंतु कोशिकाओं में कोशिका द्रव्य विभाजन (Cytokinesis) कैसे होता है?",
        answers: shuffle([
            { text: "कोशिका प्लेट द्वारा", correct: false },
            { text: "विदलन खांच (Cleavage furrow) द्वारा", correct: true },
            { text: "बीजाणु निर्माण द्वारा", correct: false },
            { text: "केंद्रक विभाजन द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जंतु कोशिकाओं में, कोशिका झिल्ली बाहर से अंदर की ओर धंसकर एक खांच बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो गहरी होती जाती है और अंततः कोशिका को दो भागों में बांट देती है।"
    },
    {
        question: "प्रश्न 12. 'सिनैप्सिस' (Synapsis) की प्रक्रिया, जिसमें समजात गुणसूत्र जोड़े बनाते हैं, कहाँ होती है?",
        answers: shuffle([
            { text: "समसूत्री विभाजन की पूर्वावस्था में", correct: false },
            { text: "अर्धसूत्री विभाजन की पूर्वावस्था I में", correct: true },
            { text: "अर्धसूत्री विभाजन की पूर्वावस्था II में", correct: false },
            { text: "समसूत्री विभाजन की मध्यावस्था में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिनैप्सिस अर्धसूत्री विभाजन की पूर्वावस्था I की जाइगोटीन (Zygotene) उप-अवस्था में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इस प्रक्रिया में समजात गुणसूत्र लंबाई में एक-दूसरे के साथ जुड़कर जोड़े बनाते हैं, जिन्हें बाइवैलेंट कहते हैं।"
    },
    {
        question: "प्रश्न 13. अर्धसूत्री विभाजन का क्या महत्व है?",
        answers: shuffle([
            { text: "यह आनुवंशिक विविधता उत्पन्न करता है", correct: false },
            { text: "यह पीढ़ी-दर-पीढ़ी गुणसूत्र संख्या को स्थिर रखता है", correct: false },
            { text: "यह युग्मक निर्माण के लिए आवश्यक है", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धसूत्री विभाजन जीन विनिमय के माध्यम से विविधता लाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  गुणसूत्र संख्या को आधा करके प्रजातियों में इसे स्थिर रखता है और लैंगिक जनन के लिए युग्मकों का निर्माण करता है।"
    },
    {
        question: "प्रश्न 14. तर्कु तंतु (Spindle fibers) किससे बने होते हैं?",
        answers: shuffle([
            { text: "एक्टिन प्रोटीन", correct: false },
            { text: "मायोसिन प्रोटीन", correct: false },
            { text: "ट्यूबुलिन प्रोटीन", correct: true },
            { text: "केराटिन प्रोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तर्कु तंतु माइक्रोट्यूब्यूल से बनी संरचनाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और माइक्रोट्यूब्यूल ट्यूबुलिन नामक प्रोटीन से बने होते हैं। ये कोशिका विभाजन के दौरान गुणसूत्रों को अलग करने का कार्य करते हैं।"
    },
    {
        question: "प्रश्न 15. कोशिका विभाजन की कौन सी अवस्था सबसे लंबी होती है?",
        answers: shuffle([
            { text: "पूर्वावस्था (Prophase)", correct: true },
            { text: "मध्यावस्था (Metaphase)", correct: false },
            { text: "पश्चावस्था (Anaphase)", correct: false },
            { text: "अंत्यावस्था (Telophase)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वावस्था कोशिका विभाजन की सबसे लंबी अवस्था है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें गुणसूत्रों का संघनन, केंद्रक झिल्ली का विघटन और तर्कु उपकरण का निर्माण जैसी महत्वपूर्ण घटनाएं होती हैं। अर्धसूत्रण में, पूर्वावस्था I सबसे जटिल और लंबी होती है।"
    },
    {
        question: "प्रश्न 16. किस अवस्था में गुणसूत्र अपने सिस्टर क्रोमैटिड के साथ स्पष्ट रूप से दिखाई देते हैं?",
        answers: shuffle([
            { text: "A) अंतरावस्था (Interphase)", correct: false },
            { text: "B) पूर्वावस्था (Prophase)", correct: false },
            { text: "C) मध्यावस्था (Metaphase)", correct: false },
            { text: "B) और C) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वावस्था में गुणसूत्र संघनित होना शुरू होते हैं और मध्यावस्था तक पूरी तरह संघनित होकर स्पष्ट दिखाई देने लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इन दोनों अवस्थाओं में वे अपने जुड़े हुए सिस्टर क्रोमैटिड के साथ देखे जा सकते हैं।"
    },
    {
        question: "प्रश्न 17. कियाज्मेटा (Chiasmata) का निर्माण किस प्रक्रिया का परिणाम है?",
        answers: shuffle([
            { text: "सिनैप्सिस", correct: false },
            { text: "जीन विनिमय (Crossing Over)", correct: true },
            { text: "द्विगुणन", correct: false },
            { text: "अनुलेखन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब समजात गुणसूत्रों के बीच जीन विनिमय होता है, तो वे कुछ बिंदुओं पर 'X' आकार की संरचनाओं द्वारा जुड़े रहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिन्हें कियाज्मेटा कहते हैं। यह पूर्वावस्था I की डिप्लोटीन (Diplotene) उप-अवस्था में दिखाई देता है।"
    },
    {
        question: "प्रश्न 18. अर्धसूत्री विभाजन II (Meiosis II) किसके समान है?",
        answers: shuffle([
            { text: "समसूत्री विभाजन (Mitosis)", correct: true },
            { text: "अर्धसूत्री विभाजन I (Meiosis I)", correct: false },
            { text: "अंतरावस्था (Interphase)", correct: false },
            { text: "द्विखंडन (Binary Fission)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धसूत्री विभाजन II की प्रक्रिया समसूत्री विभाजन के समान होती है, जिसमें सिस्टर क्रोमैटिड अलग होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  अंतर केवल यह है कि यह एक अगुणित कोशिका से शुरू होता है।"
    },
    {
        question: "प्रश्न 19. कोशिका विभाजन को कौन नियंत्रित करता है?",
        answers: shuffle([
            { text: "साइक्लिन और साइक्लिन-आश्रित किनेसेस (CDKs)", correct: true },
            { text: "हार्मोन", correct: false },
            { text: "एंजाइम", correct: false },
            { text: "न्यूरोट्रांसमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका चक्र की प्रगति को साइक्लिन और CDKs नामक प्रोटीन का एक समूह नियंत्रित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये प्रोटीन सुनिश्चित करते हैं कि प्रत्येक चरण सही क्रम में और सही समय पर हो।"
    },
    {
        question: "प्रश्न 20. यदि कोशिका विभाजन के दौरान तर्कु तंतु न बनें तो क्या होगा?",
        answers: shuffle([
            { text: "कोशिका द्रव्य विभाजित नहीं होगा", correct: false },
            { text: "गुणसूत्रों का पृथक्करण नहीं होगा", correct: true },
            { text: "DNA का द्विगुणन नहीं होगा", correct: false },
            { text: "कोशिका तुरंत मर जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तर्कु तंतु गुणसूत्रों से जुड़कर उन्हें मध्यावस्था प्लेट पर संरेखित करते हैं और फिर उन्हें विपरीत ध्रुवों की ओर खींचते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इनके बिना, गुणसूत्र अलग नहीं हो पाएंगे और कोशिका विभाजन असफल हो जाएगा।"
    },
    {
        question: "प्रश्न 21. कैंसर कोशिकाओं की एक विशेषता है:",
        answers: shuffle([
            { text: "नियंत्रित कोशिका विभाजन", correct: false },
            { text: "अनियंत्रित कोशिका विभाजन", correct: true },
            { text: "कोशिका विभाजन की अनुपस्थिति", correct: false },
            { text: "एपोप्टोसिस (क्रमादेशित कोशिका मृत्यु)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैंसर कोशिका चक्र के नियंत्रण संकेतों पर प्रतिक्रिया नहीं करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके कारण वे लगातार और अनियंत्रित रूप से विभाजित होती रहती हैं, जिससे ट्यूमर का निर्माण होता है।"
    },
    {
        question: "प्रश्न 22. सेंट्रोमियर (Centromere) का क्या कार्य है?",
        answers: shuffle([
            { text: "यह DNA का द्विगुणन करता है", correct: false },
            { text: "यह दो सिस्टर क्रोमैटिड को एक साथ जोड़कर रखता है", correct: true },
            { text: "यह राइबोसोम बनाता है", correct: false },
            { text: "यह ऊर्जा उत्पन्न करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेंट्रोमियर एक गुणसूत्र का संकुचित क्षेत्र है जहाँ दो सिस्टर क्रोमैटिड सबसे निकटता से जुड़े होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  यहीं पर तर्कु तंतु भी जुड़ते हैं।"
    },
    {
        question: "प्रश्न 23. कोशिका चक्र की सबसे छोटी अवस्था कौन सी है?",
        answers: shuffle([
            { text: "पूर्वावस्था (Prophase)", correct: false },
            { text: "मध्यावस्था (Metaphase)", correct: false },
            { text: "पश्चावस्था (Anaphase)", correct: true },
            { text: "G1 अवस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चावस्था आमतौर पर कोशिका विभाजन की सबसे छोटी लेकिन सबसे महत्वपूर्ण अवस्था होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें सिस्टर क्रोमैटिड तेजी से अलग होकर विपरीत ध्रुवों की ओर चले जाते हैं।"
    },
    {
        question: "प्रश्न 24. अंतरावस्था (Interphase) के दौरान कोशिका:",
        answers: shuffle([
            { text: "विभाजित होती है", correct: false },
            { text: "आराम करती है", correct: false },
            { text: "वृद्धि करती है और DNA का द्विगुणन करती है", correct: true },
            { text: "सिकुड़ जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतरावस्था को पहले 'विश्राम अवस्था' माना जाता था, लेकिन वास्तव में यह कोशिका के लिए तैयारी की एक बहुत सक्रिय अवधि है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इस दौरान कोशिका आकार में बढ़ती है, अपने कोशिकांगों की संख्या बढ़ाती है, और अपने DNA की प्रतिलिपि बनाती है।"
    },
    {
        question: "प्रश्न 25. समसूत्री विभाजन से बनने वाली संतति कोशिकाएं आनुवंशिक रूप से होती हैं:",
        answers: shuffle([
            { text: "जनक कोशिका से भिन्न", correct: false },
            { text: "जनक कोशिका के समान", correct: true },
            { text: "एक दूसरे से भिन्न", correct: false },
            { text: "अगुणित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समसूत्री विभाजन आनुवंशिक सामग्री की एक सटीक प्रतिलिपि बनाता है और उसे दो संतति कोशिकाओं में समान रूप से वितरित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए वे आनुवंशिक रूप से जनक कोशिका की क्लोन होती हैं।"
    },
    {
        question: "प्रश्न 26. पूर्वावस्था (Prophase) की शुरुआत में क्या होता है?",
        answers: shuffle([
            { text: "गुणसूत्रों का विसंघनन (Decondensation)", correct: false },
            { text: "क्रोमैटिन का संघनन (Condensation)", correct: true },
            { text: "कोशिका द्रव्य का विभाजन", correct: false },
            { text: "DNA का संश्लेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वावस्था की शुरुआत में, लंबे और पतले क्रोमैटिन धागे संघनित और कुंडलित होकर छोटे, मोटे और स्पष्ट गुणसूत्रों का रूप लेना शुरू कर देते हैं।"
    },
    {
        question: "प्रश्न 27. यदि एक जीव की कायिक कोशिका में 40 गुणसूत्र हैं, तो उसके युग्मक में कितने गुणसूत्र होंगे?",
        answers: shuffle([
            { text: "40", correct: false },
            { text: "80", correct: false },
            { text: "20", correct: true },
            { text: "10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युग्मक अर्धसूत्री विभाजन द्वारा बनते हैं, जो गुणसूत्रों की संख्या को आधा कर देता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए, यदि द्विगुणित (2n) संख्या 40 है, तो अगुणित (n) संख्या 20 होगी।"
    },
    {
        question: "प्रश्न 28. कोशिका विभाजन को रोकने वाले रसायन कोल्चीसिन (Colchicine) किस अवस्था में हस्तक्षेप करता है?",
        answers: shuffle([
            { text: "अंतरावस्था", correct: false },
            { text: "पूर्वावस्था", correct: false },
            { text: "मध्यावस्था", correct: true },
            { text: "पश्चावस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्चीसिन तर्कु तंतुओं के निर्माण को रोकता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसके कारण, गुणसूत्र मध्यावस्था प्लेट पर संरेखित तो हो जाते हैं, लेकिन अलग नहीं हो पाते, जिससे कोशिका मध्यावस्था में ही रुक जाती है।"
    },
    {
        question: "प्रश्न 29. 'अंतराल रहित विभाजन' किस प्रकार के कोशिका विभाजन को संदर्भित करता है?",
        answers: shuffle([
            { text: "समसूत्री विभाजन", correct: false },
            { text: "अर्धसूत्री विभाजन", correct: false },
            { text: "असूत्री विभाजन (Amitosis)", correct: true },
            { text: "द्विखंडन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असूत्री विभाजन एक सरल प्रकार का कोशिका विभाजन है जिसमें केंद्रक और कोशिका द्रव्य सीधे दो भागों में विभाजित हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  बिना किसी तर्कु निर्माण या स्पष्ट गुणसूत्र निर्माण के। इसे प्रत्यक्ष विभाजन भी कहते हैं।"
    },
    {
        question: "प्रश्न 30. कोशिका चक्र का सही क्रम क्या है?",
        answers: shuffle([
            { text: "G1 → G2 → S → M", correct: false },
            { text: "M → G1 → G2 → S", correct: false },
            { text: "S → G1 → G2 → M", correct: false },
            { text: "G1 → S → G2 → M", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका चक्र का सही क्रम है: G1 (प्रथम वृद्धि काल), S (संश्लेषण काल, जहाँ DNA की प्रतिकृति होती है), G2 (द्वितीय वृद्धि काल), और M (विभाजन काल, जिसमें समसूत्री/अर्धसूत्री विभाजन होता है)।"
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