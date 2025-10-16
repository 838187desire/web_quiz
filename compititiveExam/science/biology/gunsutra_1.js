const questions = [
    {
        topHeading: "गुणसूत्र (Chromosome) पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मानव की एक दैहिक कोशिका (somatic cell) में गुणसूत्रों की कुल संख्या कितनी होती है?",
        answers: shuffle([
            { text: "23", correct: false },
            { text: "46", correct: true },
            { text: "44", correct: false },
            { text: "22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्य की प्रत्येक दैहिक कोशिका में 23 जोड़े गुणसूत्र होते हैं, अर्थात कुल 46 गुणसूत्र।<br><br><i class='fa-solid fa-angles-right icon'></i>  इनमें से 22 जोड़े ऑटोसोम और 1 जोड़ा लिंग गुणसूत्र होता है।"
    },
    {
        question: "प्रश्न 2. गुणसूत्र (Chromosome) किससे बने होते हैं?",
        answers: shuffle([
            { text: "केवल DNA", correct: false },
            { text: "DNA और प्रोटीन", correct: true },
            { text: "DNA, RNA और प्रोटीन", correct: false },
            { text: "केवल RNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक गुणसूत्र मुख्य रूप से DNA (डीऑक्सीराइबोन्यूक्लिक एसिड) और हिस्टोन नामक प्रोटीन के संघनित रूप से बने होते हैं।"
    },
    {
        question: "प्रश्न 3. कोशिका के किस भाग में गुणसूत्र पाए जाते हैं?",
        answers: shuffle([
            { text: "कोशिका द्रव्य", correct: false },
            { text: "केंद्रक (Nucleus)", correct: true },
            { text: "लाइसोसोम", correct: false },
            { text: "गॉल्जी काय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक कोशिकाओं में, गुणसूत्र कोशिका के केंद्रक के भीतर स्थित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ वे आनुवंशिक जानकारी को संग्रहीत करते हैं।"
    },
    {
        question: "प्रश्न 4. गुणसूत्र का कौन सा भाग दो क्रोमैटिड (chromatids) को एक साथ जोड़ता है?",
        answers: shuffle([
            { text: "टेलोमेयर", correct: false },
            { text: "सेंट्रोमेयर", correct: true },
            { text: "क्रोमोनेमा", correct: false },
            { text: "मैट्रिक्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेंट्रोमेयर गुणसूत्र का वह संकुचित क्षेत्र है जहाँ कोशिका विभाजन के दौरान दो सिस्टर क्रोमैटिड एक-दूसरे से जुड़े रहते हैं।"
    },
    {
        question: "प्रश्न 5. लिंग निर्धारण करने वाले गुणसूत्रों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "ऑटोसोम (Autosomes)", correct: false },
            { text: "एलोसोम (Allosomes)", correct: true },
            { text: "पॉलीसोम", correct: false },
            { text: "हेटेरोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलोसोम को लिंग गुणसूत्र (Sex Chromosomes) भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  मनुष्यों में, ये X और Y गुणसूत्र होते हैं जो लिंग का निर्धारण करते हैं।"
    },
    {
        question: "प्रश्न 6. 'क्रोमोसोम' शब्द का प्रयोग सबसे पहले किसने किया था?",
        answers: shuffle([
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "वाल्डेयर", correct: true },
            { text: "फ्लेमिंग", correct: false },
            { text: "सटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जर्मन शरीर रचना विज्ञानी हेनरिक वॉन वाल्डेयर ने 1888 में इन संरचनाओं के लिए 'क्रोमोसोम' शब्द गढ़ा।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका अर्थ 'रंगीन शरीर' (colored body) है।"
    },
    {
        question: "प्रश्न 7. DNA को गुणसूत्र के रूप में पैक करने में कौन सा प्रोटीन मदद करता है?",
        answers: shuffle([
            { text: "एल्ब्यूमिन", correct: false },
            { text: "ग्लोब्युलिन", correct: false },
            { text: "हिस्टोन", correct: true },
            { text: "केराटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिस्टोन क्षारीय प्रोटीन हैं जो DNA अणु को लपेटकर और संघनित करके क्रोमेटिन बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो आगे चलकर गुणसूत्र का रूप लेता है।"
    },
    {
        question: "प्रश्न 8. डाउन सिंड्रोम (Down Syndrome) किस गुणसूत्र की त्रिसूत्रता (Trisomy) के कारण होता है?",
        answers: shuffle([
            { text: "गुणसूत्र 18", correct: false },
            { text: "गुणसूत्र 13", correct: false },
            { text: "गुणसूत्र 21", correct: true },
            { text: "X गुणसूत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डाउन सिंड्रोम एक आनुवंशिक विकार है जो गुणसूत्र संख्या 21 की दो प्रतियों के बजाय तीन प्रतियां होने के कारण होता है।"
    },
    {
        question: "प्रश्न 9. जब सेंट्रोमेयर गुणसूत्र के बिल्कुल मध्य में स्थित होता है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "एक्रोसेंट्रिक", correct: false },
            { text: "मेटासेंट्रिक", correct: true },
            { text: "सब-मेटासेंट्रिक", correct: false },
            { text: "टिलोसेंट्रिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेटासेंट्रिक गुणसूत्र में सेंट्रोमेयर ठीक बीच में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे इसकी दोनों भुजाएं (p और q) बराबर लंबाई की होती हैं और यह 'V' आकार का दिखता है।"
    },
    {
        question: "प्रश्न 10. गुणसूत्रों के सिरों पर मौजूद सुरक्षात्मक कैप को क्या कहा जाता है?",
        answers: shuffle([
            { text: "सेंट्रोमेयर", correct: false },
            { text: "जीन", correct: false },
            { text: "टेलोमेयर", correct: true },
            { text: "काइनेटोकोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेलोमेयर गुणसूत्रों के अंतिम सिरों पर स्थित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और वे गुणसूत्रों को क्षतिग्रस्त होने या अन्य गुणसूत्रों से जुड़ने से रोकते हैं।"
    },
    {
        question: "प्रश्न 11. किसी जीव के गुणसूत्रों के संपूर्ण सेट का सचित्र निरूपण क्या कहलाता है?",
        answers: shuffle([
            { text: "जीनोम", correct: false },
            { text: "कैरियोटाइप", correct: true },
            { text: "जीनोटाइप", correct: false },
            { text: "फेनोटाइप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैरियोटाइप एक व्यक्ति के गुणसूत्रों का एक संगठित प्रोफाइल है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें गुणसूत्रों को आकार, सेंट्रोमेयर की स्थिति और बैंडिंग पैटर्न के अनुसार व्यवस्थित किया जाता है।"
    },
    {
        question: "प्रश्न 12. पुरुषों में कौन सा लिंग गुणसूत्र संयोजन पाया जाता है?",
        answers: shuffle([
            { text: "XX", correct: false },
            { text: "XY", correct: true },
            { text: "XO", correct: false },
            { text: "YY", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरुषों में एक X और एक Y लिंग गुणसूत्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि महिलाओं में दो X (XX) गुणसूत्र होते हैं।"
    },
    {
        question: "प्रश्न 13. टर्नर सिंड्रोम (Turner Syndrome) में गुणसूत्रों की स्थिति क्या होती है?",
        answers: shuffle([
            { text: "44 + XXY", correct: false },
            { text: "44 + XYY", correct: false },
            { text: "44 + XXX", correct: false },
            { text: "44 + XO", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टर्नर सिंड्रोम केवल महिलाओं को प्रभावित करने वाला एक आनुवंशिक विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें एक X गुणसूत्र पूर्ण या आंशिक रूप से अनुपस्थित होता है, जिससे कुल 45 गुणसूत्र (44+XO) होते हैं।"
    },
    {
        question: "प्रश्न 14. प्रोकैरियोटिक कोशिकाओं (जैसे बैक्टीरिया) में गुणसूत्र कैसा होता है?",
        answers: shuffle([
            { text: "रैखिक और केंद्रक में बंद", correct: false },
            { text: "वृत्ताकार और कोशिका द्रव्य में बिखरा हुआ", correct: true },
            { text: "रैखिक और कोशिका द्रव्य में बिखरा हुआ", correct: false },
            { text: "वृत्ताकार और एक केंद्रक झिल्ली में बंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कोशिकाओं में एक वास्तविक केंद्रक नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उनका एकल गुणसूत्र आमतौर पर वृत्ताकार (circular) होता है और न्यूक्लिऑइड नामक क्षेत्र में स्थित होता है।"
    },
    {
        question: "प्रश्न 15. गुणसूत्रों की संख्या में परिवर्तन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "उत्परिवर्तन (Mutation)", correct: false },
            { text: "बहुगुणिता (Polyploidy)", correct: false },
            { text: "असुगुणिता (Aneuploidy)", correct: true },
            { text: "विलोपन (Deletion)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असुगुणिता वह स्थिति है जिसमें किसी जीव की कोशिकाओं में सामान्य संख्या से एक या अधिक गुणसूत्रों की कमी या अधिकता होती है।"
    },
    {
        question: "प्रश्न 16. क्रोमेटिन (Chromatin) क्या है?",
        answers: shuffle([
            { text: "कोशिका विभाजन के दौरान दिखाई देने वाली संरचना", correct: false },
            { text: "DNA, प्रोटीन और RNA का जटिल मिश्रण", correct: true },
            { text: "केवल हिस्टोन प्रोटीन का समूह", correct: false },
            { text: "गुणसूत्र का अंतिम सिरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रोमेटिन वह पदार्थ है जिससे यूकैरियोटिक गुणसूत्र बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह DNA, हिस्टोन प्रोटीन और कुछ मात्रा में RNA से मिलकर बना होता है।"
    },
    {
        question: "प्रश्न 17. क्लाइनफेल्टर सिंड्रोम (Klinefelter Syndrome) का गुणसूत्र संयोजन क्या है?",
        answers: shuffle([
            { text: "44 + XO", correct: false },
            { text: "44 + XXY", correct: true },
            { text: "45 + XY", correct: false },
            { text: "44 + XYY", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक आनुवंशिक स्थिति है जो पुरुषों को प्रभावित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें एक अतिरिक्त X गुणसूत्र होता है, जिससे कुल 47 गुणसूत्र (44+XXY) हो जाते हैं।"
    },
    {
        question: "प्रश्न 18. दैहिक गुणसूत्रों (Autosomes) की संख्या कितनी होती है?",
        answers: shuffle([
            { text: "1 जोड़ा", correct: false },
            { text: "2 जोड़े", correct: false },
            { text: "22 जोड़े", correct: true },
            { text: "23 जोड़े", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्यों में 23 जोड़े गुणसूत्रों में से, 22 जोड़े ऑटोसोम होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो दैहिक लक्षणों को नियंत्रित करते हैं और लिंग निर्धारण में शामिल नहीं होते हैं।"
    },
    {
        question: "प्रश्न 19. अर्धसूत्री विभाजन (Meiosis) के परिणामस्वरूप बनने वाली कोशिकाओं में गुणसूत्रों की संख्या होती है?",
        answers: shuffle([
            { text: "द्विगुणित (Diploid)", correct: false },
            { text: "अगुणित (Haploid)", correct: true },
            { text: "त्रिगुणित (Triploid)", correct: false },
            { text: "चतुर्गुणित (Tetraploid)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धसूत्री विभाजन में गुणसूत्रों की संख्या आधी हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे युग्मक (gametes) बनते हैं जिनमें गुणसूत्रों का केवल एक सेट (अगुणित) होता है।"
    },
    {
        question: "प्रश्न 20. विशाल गुणसूत्र (Giant Chromosome) का एक उदाहरण है:",
        answers: shuffle([
            { text: "X-गुणसूत्र", correct: false },
            { text: "Y-गुणसूत्र", correct: false },
            { text: "पॉलीटीन गुणसूत्र", correct: true },
            { text: "ऑटोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पॉलीटीन गुणसूत्र बहुत बड़े आकार के होते हैं जो कुछ कीटों (जैसे ड्रोसोफिला) की लार ग्रंथियों में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये DNA की कई प्रतियों के दोहराव से बनते हैं।"
    },
    {
        question: "प्रश्न 21. सेंट्रोमेयर की स्थिति के आधार पर कौन सा गुणसूत्र का प्रकार नहीं है?",
        answers: shuffle([
            { text: "मेटासेंट्रिक", correct: false },
            { text: "एक्रोसेंट्रिक", correct: false },
            { text: "ऑटोसोमल", correct: true },
            { text: "टिलोसेंट्रिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑटोसोमल गुणसूत्रों का एक कार्यात्मक वर्गीकरण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  न कि सेंट्रोमेयर की स्थिति के आधार पर संरचनात्मक वर्गीकरण।"
    },
    {
        question: "प्रश्न 22. 'जीन' (Gene) कहाँ स्थित होते हैं?",
        answers: shuffle([
            { text: "गुणसूत्रों पर", correct: true },
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "लाइसोसोम में", correct: false },
            { text: "गॉल्जी काय में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीन आनुवंशिकता की मूल इकाई हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और ये DNA के खंड होते हैं जो गुणसूत्रों पर एक रैखिक क्रम में व्यवस्थित होते हैं।"
    },
    {
        question: "प्रश्न 23. बार बॉडी (Barr Body) क्या है?",
        answers: shuffle([
            { text: "एक सक्रिय Y गुणसूत्र", correct: false },
            { text: "एक निष्क्रिय X गुणसूत्र", correct: true },
            { text: "एक अतिरिक्त ऑटोसोम", correct: false },
            { text: "गुणसूत्र का सेंट्रोमेयर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महिलाओं की दैहिक कोशिकाओं में, दो X गुणसूत्रों में से एक निष्क्रिय होकर संघनित हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे बार बॉडी कहते हैं।"
    },
    {
        question: "प्रश्न 24. जब गुणसूत्र का एक टुकड़ा टूटकर उलटे क्रम में जुड़ जाता है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "विलोपन (Deletion)", correct: false },
            { text: "द्विगुणन (Duplication)", correct: false },
            { text: "प्रतिलोमन (Inversion)", correct: true },
            { text: "स्थानांतरण (Translocation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिलोमन एक प्रकार का गुणसूत्रीय उत्परिवर्तन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें गुणसूत्र का एक खंड 180 डिग्री घूमकर पुनः जुड़ जाता है।"
    },
    {
        question: "प्रश्न 25. सेंट्रोमेयर पर स्थित प्रोटीन की डिस्क जैसी संरचना जो स्पिंडल फाइबर से जुड़ती है, कहलाती है?",
        answers: shuffle([
            { text: "टेलोमेयर", correct: false },
            { text: "क्रोमैटिड", correct: false },
            { text: "काइनेटोकोर", correct: true },
            { text: "सैटेलाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काइनेटोकोर सेंट्रोमेयर पर एक जटिल प्रोटीन संरचना है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो कोशिका विभाजन के दौरान स्पिंडल फाइबर के जुड़ने के लिए स्थल प्रदान करती है।"
    },
    {
        question: "प्रश्न 26. किस सिंड्रोम को 'क्राई-डू-चैट' (Cri-du-chat) सिंड्रोम कहा जाता है?",
        answers: shuffle([
            { text: "गुणसूत्र 5 के विलोपन के कारण", correct: true },
            { text: "गुणसूत्र 21 की त्रिसूत्रता के कारण", correct: false },
            { text: "एक अतिरिक्त Y गुणसूत्र के कारण", correct: false },
            { text: "एक अतिरिक्त X गुणसूत्र के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक दुर्लभ आनुवंशिक विकार है जो गुणसूत्र संख्या 5 की छोटी भुजा (p-arm) के एक हिस्से के विलोपन के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इससे प्रभावित शिशु बिल्ली की तरह रोते हैं।"
    },
    {
        question: "प्रश्न 27. समसूत्री विभाजन (Mitosis) की किस अवस्था में गुणसूत्र सबसे स्पष्ट दिखाई देते हैं?",
        answers: shuffle([
            { text: "प्रोफेज (Prophase)", correct: false },
            { text: "मेटाफेज (Metaphase)", correct: true },
            { text: "एनाफेज (Anaphase)", correct: false },
            { text: "टेलोफेज (Telophase)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेटाफेज अवस्था में गुणसूत्र पूरी तरह से संघनित हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और कोशिका की मध्य रेखा (मेटाफेज प्लेट) पर पंक्तिबद्ध हो जाते हैं, जिससे वे अध्ययन के लिए सबसे स्पष्ट होते हैं।"
    },
    {
        question: "प्रश्न 28. यदि किसी कोशिका में गुणसूत्रों के दो से अधिक सेट हों, तो वह स्थिति क्या कहलाती है?",
        answers: shuffle([
            { text: "असुगुणिता (Aneuploidy)", correct: false },
            { text: "अगुणित (Haploid)", correct: false },
            { text: "बहुगुणिता (Polyploidy)", correct: true },
            { text: "द्विगुणित (Diploid)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहुगुणिता वह स्थिति है जब किसी जीव की कोशिकाओं में गुणसूत्रों के दो से अधिक पूर्ण सेट होते हैं (जैसे, 3n, 4n)।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह पौधों में आम है।"
    },
    {
        question: "प्रश्न 29. Y गुणसूत्र पर स्थित जीन क्या कहलाते हैं?",
        answers: shuffle([
            { text: "ऑटोसोमल जीन", correct: false },
            { text: "होलैंड्रिक जीन", correct: true },
            { text: "लिंक्ड जीन", correct: false },
            { text: "अप्रभावी जीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> Y गुणसूत्र पर मौजूद जीनों को होलैंड्रिक जीन कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इनकी वंशागति केवल पिता से पुत्र में होती है।"
    },
    {
        question: "प्रश्न 30. न्यूक्लियोसोम (Nucleosome) में क्या शामिल होता है?",
        answers: shuffle([
            { text: "केवल DNA", correct: false },
            { text: "केवल हिस्टोन प्रोटीन", correct: false },
            { text: "हिस्टोन अष्टक (octamer) के चारों ओर लिपटा DNA", correct: true },
            { text: "एक पूर्ण गुणसूत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूक्लियोसोम क्रोमेटिन की मूल संरचनात्मक इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें DNA का एक खंड आठ हिस्टोन प्रोटीन (हिस्टोन अष्टक) के एक कोर के चारों ओर लिपटा होता है।"
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