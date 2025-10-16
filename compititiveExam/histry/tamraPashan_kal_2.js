const questions = [
    {
        topHeading: "ताम्रपाषाणिक संस्कृतियों पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जोरवे संस्कृति के लोग किस प्रकार के वस्त्रों का उपयोग करते थे?",
        answers: shuffle([
            { text: "ऊनी", correct: false },
            { text: "रेशमी", correct: false },
            { text: "सूती और सन", correct: true },
            { text: "नायलॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगांव जैसे स्थलों से मिली चरखे की तकलियाँ और सन (फ्लैक्स) के रेशे इस बात का प्रमाण हैं कि वे सूती और सन के धागे कातते और कपड़े बुनते थे।"
    },
    {
        question: "प्रश्न 2. 'प्रभास संस्कृति' और 'रंगपुर संस्कृति' का संबंध किस क्षेत्र से है?",
        answers: shuffle([
            { text: "मध्य प्रदेश", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों संस्कृतियाँ गुजरात के सौराष्ट्र क्षेत्र में विकसित हुईं और इन्हें उत्तर-हड़प्पा ताम्रपाषाणिक संस्कृतियाँ माना जाता है।"
    },
    {
        question: "प्रश्न 3. ताम्रपाषाणिक काल में शिशु मृत्यु दर कैसी थी?",
        answers: shuffle([
            { text: "बहुत कम", correct: false },
            { text: "मध्यम", correct: false },
            { text: "बहुत अधिक", correct: true },
            { text: "अज्ञात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक स्थलों पर बड़ी संख्या में बच्चों की कब्रों का मिलना इस बात का संकेत है कि पोषण और स्वास्थ्य संबंधी समस्याओं के कारण ताम्रपाषाण काल में शिशु मृत्यु दर काफी अधिक थी।"
    },
    {
        question: "प्रश्न 4. किस संस्कृति के लोग पत्थर के घरों में रहते थे?",
        answers: shuffle([
            { text: "जोरवे संस्कृति", correct: false },
            { text: "आहार संस्कृति", correct: true },
            { text: "मालवा संस्कृति", correct: false },
            { text: "कायथा संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार संस्कृति के लोग आमतौर पर मिट्टी की ईंटों के घरों में रहते थे, लेकिन कुछ स्थानों पर नींव और दीवारों के लिए पत्थरों का भी उपयोग किया जाता था।"
    },
    {
        question: "प्रश्न 5. 'सोथी-सिसवल संस्कृति' को कभी-कभी किस बड़ी सभ्यता का प्रारंभिक चरण माना जाता है?",
        answers: shuffle([
            { text: "वैदिक सभ्यता", correct: false },
            { text: "मौर्य सभ्यता", correct: false },
            { text: "हड़प्पा सभ्यता", correct: true },
            { text: "गुप्त सभ्यता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरियाणा और राजस्थान में पाई जाने वाली सोथी-सिसवल संस्कृति के मृदभांड और अन्य विशेषताएं प्रारंभिक हड़प्पा काल से मिलती-जुलती हैं, इसलिए इसे प्राक्-हड़प्पा संस्कृति माना जाता है।"
    },
    {
        question: "प्रश्न 6. ताम्रपाषाणिक बस्तियों का अंत लगभग किस समय अवधि में हुआ?",
        answers: shuffle([
            { text: "3000 ईसा पूर्व", correct: false },
            { text: "2000 ईसा पूर्व", correct: false },
            { text: "700 ईसा पूर्व", correct: true },
            { text: "100 ईस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि अलग-अलग क्षेत्रों में संस्कृतियाँ अलग-अलग समय पर समाप्त हुईं, लेकिन जोरवे संस्कृति जैसी अंतिम प्रमुख ताम्रपाषाणिक संस्कृति का अंत लगभग 700 ईसा पूर्व के आसपास हो गया था।"
    },
    {
        question: "प्रश्न 7. तांबे की कुल्हाड़ियों का एक बड़ा जखीरा किस कायथा स्थल से मिला है?",
        answers: shuffle([
            { text: "कायथा", correct: false },
            { text: "त्रिपुरी", correct: false },
            { text: "उज्जैन", correct: false },
            { text: "गुंगेरिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश के गुंगेरिया से तांबे की वस्तुओं का अब तक का सबसे बड़ा ढेर मिला है, जिसमें 424 तांबे के उपकरण और 102 चांदी के पतले पत्थर शामिल हैं।"
    },
    {
        question: "प्रश्न 8. इनामगांव में दफनाए गए एक व्यक्ति को चार पैरों वाले मिट्टी के कलश में दफनाया गया था, यह व्यक्ति कौन हो सकता है?",
        answers: shuffle([
            { text: "एक बच्चा", correct: false },
            { text: "एक महिला", correct: false },
            { text: "एक मुखिया या सरदार", correct: true },
            { text: "एक विदेशी व्यापारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बस्ती के केंद्र में एक घर के आंगन में एक वयस्क पुरुष को चार पैरों वाले एक बड़े मिट्टी के कलश में बैठी हुई मुद्रा में दफनाया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक विशिष्ट और सम्मानजनक दफन विधि है, जो संभवतः किसी महत्वपूर्ण व्यक्ति (मुखिया) के लिए थी।"
    },
    {
        question: "प्रश्न 9. जोरवे संस्कृति में बस्तियों का विन्यास कैसा होता था?",
        answers: shuffle([
            { text: "एक रेखीय पैटर्न में", correct: true },
            { text: "एक वृत्ताकार पैटर्न में", correct: false },
            { text: "अव्यवस्थित और बिखरा हुआ", correct: false },
            { text: "ग्रिड पैटर्न में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगांव जैसे स्थलों पर घर एक दूसरे के करीब और एक सीधी रेखा में बने होते थे, जिनके बीच में एक सामान्य गली या रास्ता होता था।"
    },
    {
        question: "प्रश्न 10. कौन सा स्थल तांबे के व्यापार के लिए जाना जाता था और संभवतः खेत्री (राजस्थान) की खानों से तांबा प्राप्त करता था?",
        answers: shuffle([
            { text: "इनामगांव", correct: false },
            { text: "आहार", correct: true },
            { text: "नवदाटोली", correct: false },
            { text: "दैमाबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार संस्कृति राजस्थान की प्रसिद्ध खेत्री तांबा खानों के पास स्थित थी और यह तांबे के अयस्क को पिघलाकर उपकरण बनाने और उन्हें अन्य क्षेत्रों में निर्यात करने का एक प्रमुख केंद्र था।"
    },
    {
        question: "प्रश्न 11. ताम्रपाषाणिक काल में सबसे आम पालतू पशु कौन सा था?",
        answers: shuffle([
            { text: "घोड़ा और हाथी", correct: false },
            { text: "ऊँट और गधा", correct: false },
            { text: "मवेशी (गाय, बैल)", correct: true },
            { text: "बिल्ली और कुत्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक स्थलों से मिली हड्डियों में सबसे बड़ी संख्या मवेशियों की है, जो दर्शाता है कि वे कृषि, दूध और मांस के लिए सबसे महत्वपूर्ण पशु थे।"
    },
    {
        question: "प्रश्न 12. जोरवे संस्कृति का नामकरण किस आधार पर हुआ है?",
        answers: shuffle([
            { text: "इसके खोजकर्ता के नाम पर", correct: false },
            { text: "एक प्रमुख नदी के नाम पर", correct: false },
            { text: "एक प्रतिनिधि स्थल के नाम पर", correct: true },
            { text: "एक राजा के नाम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोरवे संस्कृति का नाम महाराष्ट्र के अहमदनगर जिले में स्थित 'जोरवे' नामक पुरातात्विक स्थल के नाम पर रखा गया है, जहाँ इस संस्कृति की पहचान पहली बार हुई थी।"
    },
    {
        question: "प्रश्न 13. किस ताम्रपाषाणिक संस्कृति के मृदभांडों पर हड़प्पा का प्रभाव स्पष्ट रूप से दिखाई देता है?",
        answers: shuffle([
            { text: "मालवा संस्कृति", correct: false },
            { text: "जोरवे संस्कृति", correct: false },
            { text: "आहार संस्कृति", correct: false },
            { text: "कायथा संस्कृति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायथा संस्कृति के कुछ बर्तनों, विशेषकर मजबूत लाल लेप वाले बर्तनों का डिजाइन और बनावट हड़प्पा के मृदभांडों से मिलती-जुलती है।"
    },
    {
        question: "प्रश्न 14. 'नेवासा' (महाराष्ट्र) से किस महत्वपूर्ण वस्तु का साक्ष्य मिला है?",
        answers: shuffle([
            { text: "लोहे की तलवार", correct: false },
            { text: "सोने के सिक्के", correct: false },
            { text: "रेशम का धागा", correct: false },
            { text: "कपास का कपड़ा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेवासा से तांबे के मनकों में लिपटा हुआ कपास के कपड़े का एक टुकड़ा मिला है, जो भारत में कपास के उपयोग का एक महत्वपूर्ण और प्रत्यक्ष प्रमाण है।"
    },
    {
        question: "प्रश्न 15. ताम्रपाषाणिक संस्कृतियों को हड़प्पा सभ्यता से कैसे अलग किया जा सकता है?",
        answers: shuffle([
            { text: "हड़प्पा शहरी थी, जबकि ताम्रपाषाणिक संस्कृतियाँ ग्रामीण थीं", correct: false },
            { text: "हड़प्पा कांस्य का व्यापक उपयोग करते थे, जबकि ताम्रपाषाणिक लोग मुख्य रूप से तांबे का", correct: false },
            { text: "हड़प्पा के पास लेखन कला थी, जबकि ताम्रपाषाणिक लोगों के पास नहीं थी", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी प्रमुख अंतर हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हड़प्पा एक नगरीय, कांस्य युगीन और साक्षर सभ्यता थी, जबकि अधिकांश ताम्रपाषाणिक संस्कृतियाँ ग्रामीण, तांबे का सीमित उपयोग करने वाली और निरक्षर थीं।"
    },
    {
        question: "प्रश्न 16. 'चंदोली' और 'सोनगांव' किस ताम्रपाषाणिक संस्कृति के स्थल हैं?",
        answers: shuffle([
            { text: "आहार संस्कृति", correct: false },
            { text: "मालवा संस्कृति", correct: false },
            { text: "जोरवे संस्कृति", correct: true },
            { text: "कायथा संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंदोली और सोनगांव महाराष्ट्र में स्थित हैं और ये दोनों जोरवे संस्कृति के महत्वपूर्ण स्थल हैं।"
    },
    {
        question: "प्रश्न 17. ताम्रपाषाणिक काल में सबसे आम पालतू पशु कौन सा था?",
        answers: shuffle([
            { text: "घोड़ा और हाथी", correct: false },
            { text: "ऊँट और गधा", correct: false },
            { text: "मवेशी (गाय, बैल)", correct: true },
            { text: "बिल्ली और कुत्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक स्थलों से मिली हड्डियों में सबसे बड़ी संख्या मवेशियों की है, जो दर्शाता है कि वे कृषि, दूध और मांस के लिए सबसे महत्वपूर्ण पशु थे।"
    },
    {
        question: "प्रश्न 18. ताम्रपाषाणिक काल में सबसे आम पालतू पशु कौन सा था?",
        answers: shuffle([
            { text: "घोड़ा और हाथी", correct: false },
            { text: "ऊँट और गधा", correct: false },
            { text: "मवेशी (गाय, बैल)", correct: true },
            { text: "बिल्ली और कुत्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक स्थलों से मिली हड्डियों में सबसे बड़ी संख्या मवेशियों की है, जो दर्शाता है कि वे कृषि, दूध और मांस के लिए सबसे महत्वपूर्ण पशु थे।"
    },
    {
        question: "प्रश्न 19. जोरवे संस्कृति में बस्तियों का पदानुक्रम कैसा था?",
        answers: shuffle([
            { text: "सभी बस्तियाँ एक समान थीं", correct: false },
            { text: "कुछ बड़ी क्षेत्रीय केंद्र और कई छोटी बस्तियाँ थीं", correct: true },
            { text: "केवल एक बड़ी राजधानी थी", correct: false },
            { text: "कोई स्थायी बस्ती नहीं थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दैमाबाद और इनामगांव जैसे स्थल बड़े क्षेत्रीय केंद्र के रूप में कार्य करते थे, जिनके अधीन कई छोटे-छोटे गांव और बस्तियाँ थीं, जो एक पदानुक्रमित व्यवस्था को दर्शाता है।"
    },
    {
        question: "प्रश्न 20. किस ताम्रपाषाणिक स्थल से चावल की खेती का स्पष्ट प्रमाण मिला है?",
        answers: shuffle([
            { text: "केवल आहार", correct: false },
            { text: "इनामगांव और पूर्वी भारत के स्थल", correct: true },
            { text: "केवल कायथा", correct: false },
            { text: "किसी भी स्थल से नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि मुख्य फसल जौ और गेहूँ थी, लेकिन महाराष्ट्र के इनामगांव और बिहार-बंगाल के पांडु राजार ढिबि जैसे स्थलों से चावल के भी प्रमाण मिले हैं।"
    },
    {
        question: "प्रश्न 21. ताम्रपाषाणिक लोगों का जीवन कैसा था?",
        answers: shuffle([
            { text: "पूरी तरह से शांतिपूर्ण", correct: false },
            { text: "युद्ध और संघर्ष से भरा हुआ", correct: false },
            { text: "कठिन और कम जीवन प्रत्याशा वाला", correct: true },
            { text: "बहुत आरामदायक और लंबा जीवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीमित तकनीक, स्वास्थ्य सुविधाओं की कमी, पोषण संबंधी समस्याएं और उच्च शिशु मृत्यु दर के कारण उनका जीवन काफी कठिन और छोटा होता था।"
    },
    {
        question: "प्रश्न 22. 'नागदा' नामक स्थल किस ताम्रपाषाणिक संस्कृति से संबंधित है?",
        answers: shuffle([
            { text: "जोरवे संस्कृति", correct: false },
            { text: "मालवा संस्कृति", correct: true },
            { text: "आहार संस्कृति", correct: false },
            { text: "रंगपुर संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागदा मध्य प्रदेश में चंबल नदी के किनारे स्थित है और यह मालवा संस्कृति का एक महत्वपूर्ण प्रारंभिक स्थल है।"
    },
    {
        question: "प्रश्न 23. ताम्रपाषाणिक काल में तांबे के उपकरण बनाने के लिए किस तकनीक का प्रयोग किया जाता था?",
        answers: shuffle([
            { text: "लेजर कटिंग", correct: false },
            { text: "3डी प्रिंटिंग", correct: false },
            { text: "ढलाई (Casting) और प्रहार (Hammering)", correct: true },
            { text: "वेल्डिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे अयस्क को पिघलाकर सांचों में ढालते थे और फिर हथौड़े से पीटकर उन्हें वांछित आकार और मजबूती प्रदान करते थे।"
    },
    {
        question: "प्रश्न 24. वह कौन सी संस्कृति है जो गंगा घाटी की पहली कृषि आधारित ग्रामीण संस्कृति मानी जाती है?",
        answers: shuffle([
            { text: "जोरवे संस्कृति", correct: false },
            { text: "आहार संस्कृति", correct: false },
            { text: "ताम्रनिधि और गैरिक मृदभांड संस्कृति", correct: true },
            { text: "मालवा संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा-यमुना दोआब में विकसित हुई गैरिक मृदभांड (OCP) और ताम्रनिधि संस्कृति इस क्षेत्र की पहली ज्ञात संस्कृति थी जिसके लोग कृषि और स्थायी बस्तियों में रहते थे।"
    },
    {
        question: "प्रश्न 25. इनामगांव के लोगों का मुख्य भोजन क्या था?",
        answers: shuffle([
            { text: "केवल मांस", correct: false },
            { text: "केवल फल", correct: false },
            { text: "जौ, बाजरा, दालें और मांस", correct: true },
            { text: "पिज्जा और बर्गर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगांव से जौ, गेहूँ, बाजरा, मसूर, मटर जैसी फसलों के जले हुए दाने और पालतू तथा जंगली जानवरों की कटी हुई हड्डियाँ मिली हैं, जो उनके मिश्रित आहार को दर्शाती हैं।"
    },
    {
        question: "प्रश्न 26. किस ताम्रपाषाणिक संस्कृति का अंत नगरीकरण की शुरुआत के साथ हुआ?",
        answers: shuffle([
            { text: "मालवा संस्कृति", correct: false },
            { text: "कायथा संस्कृति", correct: false },
            { text: "जोरवे संस्कृति का अंतिम चरण", correct: true },
            { text: "आहार संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोरवे संस्कृति के अंतिम चरण में दैमाबाद जैसे स्थल आकार में काफी बड़े हो गए थे और उनमें नगरीकरण के कुछ लक्षण दिखाई देने लगे थे, हालांकि यह प्रक्रिया पूरी नहीं हो सकी।"
    },
    {
        question: "प्रश्न 27. 'मछली पकड़ना' किस ताम्रपाषाणिक क्षेत्र के लोगों के जीवन का एक महत्वपूर्ण हिस्सा था?",
        answers: shuffle([
            { text: "राजस्थान के शुष्क क्षेत्र", correct: false },
            { text: "पूर्वी भारत (बंगाल और बिहार)", correct: true },
            { text: "मध्य प्रदेश के पहाड़ी क्षेत्र", correct: false },
            { text: "गुजरात का रेगिस्तानी क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंगाल और बिहार में नदियों और तालाबों की प्रचुरता के कारण, यहाँ के ताम्रपाषाणिक लोगों (जैसे पांडु राजार ढिबि के निवासी) के आहार में चावल के साथ-साथ मछली भी एक प्रमुख भोजन था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके लिए वे हड्डी के बंसी कांटों का उपयोग करते थे।"
    },
    {
        question: "प्रश्न 28. जोरवे संस्कृति में किस प्रकार के आवास नहीं पाए जाते हैं?",
        answers: shuffle([
            { text: "आयताकार घर", correct: false },
            { text: "गोलाकार झोपड़ियाँ", correct: false },
            { text: "बड़े सार्वजनिक भवन", correct: true },
            { text: "मुखिया का बड़ा घर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोरवे संस्कृति में व्यक्तिगत आवास (छोटे-बड़े) और अन्न भंडार तो मिले हैं, लेकिन हड़प्पा सभ्यता की तरह कोई बड़े सार्वजनिक भवन जैसे 'विशाल स्नानागार' या 'सभा भवन' नहीं मिले हैं।"
    },
    {
        question: "प्रश्न 29. ताम्रपाषाणिक कुम्हार द्वारा चाक का उपयोग क्या दर्शाता है?",
        answers: shuffle([
            { text: "प्रौद्योगिकी में पिछड़ापन", correct: false },
            { text: "बड़े पैमाने पर उत्पादन और विशेषज्ञता", correct: true },
            { text: "केवल शौक के लिए बर्तन बनाना", correct: false },
            { text: "व्यापार का अभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुम्हार के चाक का उपयोग यह दर्शाता है कि बर्तन केवल घरेलू जरूरत के लिए नहीं, बल्कि बड़े पैमाने पर बनाए जा रहे थे और कुछ लोग इस काम में विशेषज्ञ हो गए थे।"
    },
    {
        question: "प्रश्न 30. 'बालाथल' स्थल का संबंध किस संस्कृति से है?",
        answers: shuffle([
            { text: "मालवा संस्कृति", correct: false },
            { text: "आहार-बनास संस्कृति", correct: true },
            { text: "जोरवे संस्कृति", correct: false },
            { text: "कायथा संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बालाथल राजस्थान में स्थित एक महत्वपूर्ण आहार संस्कृति का स्थल है, जहाँ से एक किलेबंद परिसर और हड़प्पा के संपर्क के प्रमाण मिले हैं।"
    },
    {
        question: "प्रश्न 31. ताम्रपाषाणिक समाज की संरचना का स्वरूप क्या था?",
        answers: shuffle([
            { text: "पूर्णतः समतावादी", correct: false },
            { text: "राजतंत्रीय", correct: false },
            { text: "सामाजिक स्तरीकरण की शुरुआत", correct: true },
            { text: "वर्ण-आधारित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवासों के आकार में भिन्नता, दफनाने की प्रथाओं में अंतर और कुछ कीमती वस्तुओं का कुछ ही लोगों के पास मिलना यह संकेत देता है कि समाज में मुखिया और सामान्य जन जैसे स्तर बनने शुरू हो गए थे।"
    },
    {
        question: "प्रश्न 32. 'प्रकाश' और 'नासिक' किस संस्कृति के प्रमुख स्थल हैं?",
        answers: shuffle([
            { text: "आहार संस्कृति", correct: false },
            { text: "कायथा संस्कृति", correct: false },
            { text: "जोरवे संस्कृति", correct: true },
            { text: "मालवा संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश (तापी घाटी में) और नासिक (गोदावरी घाटी में) महाराष्ट्र में स्थित जोरवे संस्कृति के महत्वपूर्ण स्थल हैं।"
    },
    {
        question: "प्रश्न 33. ताम्रपाषाणिक स्थलों की खुदाई से प्राप्त रेडियोकार्बन तिथियों से क्या निर्धारित करने में मदद मिलती है?",
        answers: shuffle([
            { text: "लोगों का आहार", correct: false },
            { text: "संस्कृति का कालक्रम", correct: true },
            { text: "जलवायु की स्थिति", correct: false },
            { text: "व्यापारिक मार्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडियोकार्बन डेटिंग एक वैज्ञानिक विधि है जिसका उपयोग पुरातात्विक स्थलों से मिले जैविक अवशेषों (जैसे हड्डी, कोयला, अनाज) की आयु निर्धारित करने के लिए किया जाता है, जिससे हमें संस्कृति के समय का पता चलता है।"
    },
    {
        question: "प्रश्न 34. ताम्रपाषाणिक युग में तांबा कहाँ से प्राप्त किया जाता था?",
        answers: shuffle([
            { text: "केवल आयात द्वारा", correct: false },
            { text: "स्थानीय खानों जैसे खेत्री (राजस्थान) और सिंहभूम (झारखंड) से", correct: true },
            { text: "समुद्र से", correct: false },
            { text: "यह अज्ञात है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में तांबे के कई स्रोत थे और ताम्रपाषाणिक लोग इन स्थानीय खानों से अयस्क निकालकर उसका उपयोग करते थे, जैसा कि आहार संस्कृति के मामले में खेत्री से संबंध स्पष्ट है।"
    },
    {
        question: "प्रश्न 35. इनामगांव में किस प्रकार के चूल्हों का प्रयोग होता था?",
        answers: shuffle([
            { text: "गैस स्टोव", correct: false },
            { text: "बिजली का हीटर", correct: false },
            { text: "घर के अंदर और बाहर बने मिट्टी के चूल्हे", correct: true },
            { text: "माइक्रोवेव ओवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगांव के घरों के अंदर और आंगनों में मिट्टी के बने एक या एक से अधिक मुंह वाले चूल्हों के अवशेष मिले हैं, जिनका उपयोग खाना पकाने के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 36. ताम्रपाषाणिक और हड़प्पा संस्कृति के बीच क्या संबंध था?",
        answers: shuffle([
            { text: "दोनों में कोई संबंध नहीं था", correct: false },
            { text: "ताम्रपाषाणिक संस्कृति हड़प्पा से पूरी तरह से विकसित हुई", correct: false },
            { text: "कुछ ताम्रपाषाणिक संस्कृतियाँ हड़प्पा की समकालीन थीं और उनमें आपसी संपर्क था", correct: true },
            { text: "हड़प्पा संस्कृति ताम्रपाषाणिक संस्कृति का एक हिस्सा थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायथा और आहार जैसी संस्कृतियाँ हड़प्पा की समकालीन थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन स्थलों से हड़प्पा से व्यापार और सांस्कृतिक आदान-प्रदान के प्रमाण मिलते हैं, लेकिन ये स्वतंत्र ग्रामीण संस्कृतियाँ थीं।"
    },
    {
        question: "प्रश्न 37. बच्चों को कलश में दफनाने की प्रथा का क्या संभावित कारण हो सकता है?",
        answers: shuffle([
            { text: "यह एक सजा थी", correct: false },
            { text: "यह पुनर्जन्म या गर्भ में वापसी का प्रतीकात्मक रूप था", correct: true },
            { text: "कलश आसानी से उपलब्ध थे", correct: false },
            { text: "जमीन की कमी थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातत्वविदों का मानना है कि कलश को गर्भ का प्रतीक माना जाता था और बच्चों को उसमें दफनाना उनकी आत्मा की सुरक्षित वापसी या पुनर्जन्म की कामना से जुड़ा एक धार्मिक विश्वास हो सकता है।"
    },
    {
        question: "प्रश्न 38. जोरवे संस्कृति के लोग मृतकों के साथ बर्तन क्यों रखते थे?",
        answers: shuffle([
            { text: "स्थान भरने के लिए", correct: false },
            { text: "परलोक में उपयोग के लिए", correct: true },
            { text: "यह एक गलती थी", correct: false },
            { text: "बर्तनों को नष्ट करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश प्राचीन समाजों की तरह, जोरवे के लोग भी मृत्यु के बाद जीवन में विश्वास करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका मानना था कि मृतक को परलोक में भोजन और पानी के लिए इन बर्तनों की आवश्यकता होगी।"
    },
    {
        question: "प्रश्न 39. 'डाइसिंग स्टोन' (पासे) का मिलना क्या इंगित करता है?",
        answers: shuffle([
            { text: "गणितीय ज्ञान", correct: false },
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "मनोरंजन और खेल", correct: true },
            { text: "व्यापार में माप-तौल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ ताम्रपाषाणिक स्थलों से पासे मिले हैं, जो यह दर्शाते हैं कि लोग अपने खाली समय में इस तरह के खेल खेलकर मनोरंजन करते थे।"
    },
    {
        question: "प्रश्न 40. ताम्रपाषाण काल के किस चरण को 'प्रारंभिक जोरवे' कहा जाता है?",
        answers: shuffle([
            { text: "जब संस्कृति अपने चरम पर थी", correct: false },
            { text: "जब संस्कृति का पतन हो रहा था", correct: false },
            { text: "मालवा संस्कृति के पतन और जोरवे के उदय के बीच का संक्रमण काल", correct: true },
            { text: "जब संस्कृति केवल जोरवे स्थल तक सीमित थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र में मालवा संस्कृति के बाद और पूरी तरह से विकसित जोरवे संस्कृति से पहले के काल को 'प्रारंभिक जोरवे' कहा जाता है, जिसमें दोनों संस्कृतियों के लक्षण मिलते हैं।"
    },
    {
        question: "प्रश्न 41. ताम्रपाषाणिक संस्कृतियों ने भारत के इतिहास में क्या योगदान दिया?",
        answers: shuffle([
            { text: "उन्होंने पहली बार बड़े साम्राज्यों की स्थापना की", correct: false },
            { text: "उन्होंने लौह प्रौद्योगिकी की नींव रखी", correct: false },
            { text: "उन्होंने भारत के बड़े हिस्से में पहली बार स्थायी कृषि आधारित गाँव बसाए", correct: true },
            { text: "उन्होंने लेखन और मुद्रा प्रणाली का आविष्कार किया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी के बाहर, भारत के एक विशाल भू-भाग पर पहली स्थायी ग्रामीण बस्तियों की स्थापना का श्रेय ताम्रपाषाणिक लोगों को ही जाता है, जिसने भविष्य के सामाजिक विकास की नींव रखी।"
    },
    {
        question: "प्रश्न 42. कौन सा स्थल मालवा पठार के पश्चिमी भाग में स्थित है और मालवा संस्कृति का प्रतिनिधित्व करता है?",
        answers: shuffle([
            { text: "कायथा", correct: false },
            { text: "नागदा", correct: true },
            { text: "एरण", correct: false },
            { text: "दैमाबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागदा उज्जैन के पास चंबल नदी के तट पर स्थित है और यह मालवा संस्कृति के प्रमुख स्थलों में से एक है।"
    },
    {
        question: "प्रश्न 43. आहार संस्कृति के लोग तांबे के अलावा किस उद्योग में भी संलग्न थे?",
        answers: shuffle([
            { text: "हाथी दांत का काम", correct: false },
            { text: "लघुपाषाण उपकरण उद्योग", correct: true },
            { text: "कांच उद्योग", correct: false },
            { text: "रेशम उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तांबे के साथ-साथ, आहार के लोग पत्थर के छोटे और कुशल ब्लेड बनाने में भी माहिर थे, जिसका उपयोग वे दैनिक कार्यों के लिए करते थे।"
    },
    {
        question: "प्रश्न 44. दैमाबाद से प्राप्त कांस्य रथ को कौन चला रहा है?",
        answers: shuffle([
            { text: "एक देवता", correct: false },
            { text: "एक राजा", correct: false },
            { text: "एक नग्न मानव आकृति", correct: true },
            { text: "एक पशु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध दैमाबाद कांस्य संग्रह में एक रथ है जिसे दो बैल खींच रहे हैं और उसे एक नग्न पुरुष चला रहा है।"
    },
    {
        question: "प्रश्न 45. इनामगांव में पाए गए अनाज के दानों से क्या पता चलता है?",
        answers: shuffle([
            { text: "वे केवल एक ही फसल उगाते थे", correct: false },
            { text: "वे फसल चक्र (crop rotation) और दोहरी फसल प्रणाली जानते थे", correct: true },
            { text: "वे कृषि नहीं जानते थे", correct: false },
            { text: "वे केवल आयातित अनाज खाते थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक ही स्थल से रबी (जौ, गेहूँ) और खरीफ (बाजरा, चावल) दोनों मौसमों की फसलों का मिलना यह दर्शाता है कि वे साल में दो फसलें उगाना और संभवतः फसल चक्र अपनाना जानते थे।"
    },
    {
        question: "प्रश्न 46. ताम्रपाषाणिक काल में चाक पर बने बर्तनों के अलावा और कौन से बर्तन प्रचलित थे?",
        answers: shuffle([
            { text: "स्टील के बर्तन", correct: false },
            { text: "हाथ से बने खुरदरे बर्तन", correct: true },
            { text: "कांच के बर्तन", correct: false },
            { text: "प्लास्टिक के बर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाक के उपयोग के बावजूद, घरेलू उपयोग के लिए, विशेषकर खाना पकाने के लिए, हाथ से बने मोटे और खुरदरे बर्तनों का भी प्रचलन था।"
    },
    {
        question: "प्रश्न 47. ताम्रपाषाण काल के लोगों को 'आद्य-इतिहास' (Proto-historic) काल में क्यों रखा जाता है?",
        answers: shuffle([
            { text: "क्योंकि वे पत्थर के औजार इस्तेमाल करते थे", correct: false },
            { text: "क्योंकि वे धातु का उपयोग करते थे, लेकिन उनके पास लेखन कला नहीं थी", correct: true },
            { text: "क्योंकि वे शहरों में रहते थे", correct: false },
            { text: "क्योंकि वे वैदिक धर्म का पालन करते थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आद्य-इतिहास उस काल को कहते हैं जब सभ्यता में धातु जैसी भौतिक प्रगति तो हो जाती है, लेकिन लेखन का विकास नहीं होता।<br><br><i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाणिक संस्कृतियाँ इसी श्रेणी में आती हैं।"
    },
    {
        question: "प्रश्न 48. ताम्रपाषाणिक काल के अंत में बस्तियों का आकार छोटा क्यों होने लगा?",
        answers: shuffle([
            { text: "समृद्धि बढ़ने के कारण", correct: false },
            { text: "जलवायु के शुष्क होने और संसाधनों की कमी के कारण", correct: true },
            { text: "लोगों के शहरों में बसने के कारण", correct: false },
            { text: "जनसंख्या में कमी के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतिम चरण में, वर्षा की कमी ने कृषि उत्पादन को प्रभावित किया, जिससे संसाधनों पर दबाव बढ़ा और बड़ी बस्तियाँ बिखरकर छोटी-छोटी इकाइयों में बंट गईं।"
    },
    {
        question: "प्रश्न 49. 'वाटगल' नामक ताम्रपाषाणिक स्थल किस क्षेत्र में स्थित है?",
        answers: shuffle([
            { text: "गंगा घाटी", correct: false },
            { text: "ब्रह्मपुत्र घाटी", correct: false },
            { text: "कृष्णा-तुंगभद्रा दोआब (कर्नाटक)", correct: true },
            { text: "चंबल घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वाटगल कर्नाटक के रायचूर दोआब में स्थित एक महत्वपूर्ण स्थल है, जहाँ नवपाषाण काल से ताम्रपाषाण काल में संक्रमण के साक्ष्य मिलते हैं।"
    },
    {
        question: "प्रश्न 50. किस ताम्रपाषाणिक संस्कृति में शवाधान का कोई साक्ष्य नहीं मिला है?",
        answers: shuffle([
            { text: "जोरवे संस्कृति", correct: false },
            { text: "मालवा संस्कृति", correct: true },
            { text: "आहार संस्कृति", correct: false },
            { text: "कायथा संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक आश्चर्यजनक तथ्य है कि नवदाटोली जैसे विशाल मालवा संस्कृति के स्थल से भी किसी कब्रिस्तान या व्यवस्थित शवाधान का कोई स्पष्ट प्रमाण नहीं मिला है, जिससे उनकी अंतिम संस्कार प्रथाओं के बारे में अनिश्चितता बनी हुई है।"
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