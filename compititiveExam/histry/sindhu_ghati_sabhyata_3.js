const questions = [
    {
        topHeading: "सिंधु घाटी सभ्यता पर आधारित 50 MCQs, part_3 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. सिंधु घाटी के निवासियों को किस वृक्ष से विशेष लगाव था?",
        answers: shuffle([
            { text: "नीम", correct: false },
            { text: "बरगद", correct: false },
            { text: "पीपल", correct: true },
            { text: "आम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई मुहरों पर पीपल के वृक्ष और उसकी पत्तियों का अंकन मिला है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक मुहर पर तो देवता को पीपल की डालियों के बीच दिखाया गया है, जिससे इसकी धार्मिक महत्ता का पता चलता है।"
    },
    {
        question: "प्रश्न 2. हड़प्पा सभ्यता के औजार और हथियार अधिकतर किस धातु के बने होते थे?",
        answers: shuffle([
            { text: "पत्थर और लकड़ी", correct: false },
            { text: "लोहा और इस्पात", correct: false },
            { text: "तांबा और कांसा", correct: true },
            { text: "सोना और चांदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक कांस्य युगीन सभ्यता थी, इसलिए औजार और हथियार बनाने के लिए वे मुख्य रूप से तांबे और कांसे का प्रयोग करते थे।"
    },
    {
        question: "प्रश्न 3. सिंधु घाटी सभ्यता में तराजू कहाँ से मिला है?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: true },
            { text: "सुरकोटदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और मोहनजोदड़ो दोनों जगहों से तराजू और मानकीकृत बाट मिले हैं, जो उनके व्यापार में माप-तौल की सटीकता को दर्शाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> विकल्पों में लोथल प्रमुख है।"
    },
    {
        question: "प्रश्न 4. 'अग्नि वेदिकाएं' (Fire Altars) का साक्ष्य किन हड़प्पा स्थलों से मिला है?",
        answers: shuffle([
            { text: "लोथल और कालीबंगा", correct: true },
            { text: "हड़प्पा और मोहनजोदड़ो", correct: false },
            { text: "चन्हूदड़ो और कोटदीजी", correct: false },
            { text: "रोपड़ और रंगपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और कालीबंगा दोनों स्थलों से ईंटों से बनी आयताकार या वृत्ताकार अग्नि वेदिकाएं मिली हैं, जो संभवतः यज्ञ या किसी धार्मिक अनुष्ठान के लिए प्रयुक्त होती थीं।"
    },
    {
        question: "प्रश्न 5. हड़प्पा सभ्यता में शहरीकरण की प्रमुख विशेषता क्या थी?",
        answers: shuffle([
            { text: "विशाल मंदिर", correct: false },
            { text: "राजाओं के महल", correct: false },
            { text: "ग्रिड आधारित नगर योजना और जल निकासी", correct: true },
            { text: "विशाल सैन्य छावनियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा सभ्यता में मंदिर या महल जैसी कोई भव्य संरचना नहीं मिली है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी असली पहचान इसकी सुनियोजित नगर योजना और स्वच्छता पर आधारित जल निकासी प्रणाली है।"
    },
    {
        question: "प्रश्न 6. सुत्कागेंडोर, जो सिंधु सभ्यता का सबसे पश्चिमी स्थल है, किस नदी के किनारे स्थित था?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "रावी", correct: false },
            { text: "दाश्क", correct: true },
            { text: "हिंडन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुत्कागेंडोर वर्तमान पाकिस्तान के बलूचिस्तान में दाश्क नदी के किनारे स्थित एक तटीय व्यापारिक केंद्र था।"
    },
    {
        question: "प्रश्न 7. चावल की खेती के प्रथम साक्ष्य किस हड़प्पा स्थल से प्राप्त हुए हैं?",
        answers: shuffle([
            { text: "कालीबंगा", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल और रंगपुर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और रंगपुर से धान की भूसी और चावल के दाने मिले हैं, जो सिंधु सभ्यता में चावल की खेती का प्रमाण देते हैं।"
    },
    {
        question: "प्रश्न 8. सिंधु सभ्यता की मुहरों का आकार सामान्यतः कैसा था?",
        answers: shuffle([
            { text: "गोलाकार", correct: false },
            { text: "बेलनाकार", correct: false },
            { text: "वर्गाकार", correct: true },
            { text: "त्रिभुजाकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि आयताकार और गोलाकार मुहरें भी मिली हैं, लेकिन अधिकांश मुहरें वर्गाकार (चौकोर) आकार की थीं।"
    },
    {
        question: "प्रश्न 9. सिंधु घाटी के लोग किस जानवर से अपरिचित थे?",
        answers: shuffle([
            { text: "बैल", correct: false },
            { text: "हाथी", correct: false },
            { text: "गैंडा", correct: false },
            { text: "जिराफ़", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहरों पर बैल, हाथी, गैंडा, बाघ आदि का अंकन मिलता है, लेकिन जिराफ़ का कोई साक्ष्य नहीं मिला है।"
    },
    {
        question: "प्रश्न 10. हड़प्पावासी टिन का आयात मुख्यतः कहाँ से करते थे?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "अफगानिस्तान और ईरान", correct: true },
            { text: "बलूचिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांसा बनाने के लिए तांबे के साथ टिन की आवश्यकता होती थी, जिसका आयात अफगानिस्तान और ईरान से किया जाता था।"
    },
    {
        question: "प्रश्न 11. सिंधु सभ्यता के किस स्थल को 'औद्योगिक शहर' कहा जा सकता है?",
        answers: shuffle([
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "चन्हूदड़ो", correct: true },
            { text: "कालीबंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चन्हूदड़ो में मनका बनाने, मुहरें बनाने, बाट बनाने और धातुकर्म के कई कारखाने मिले हैं, जिस कारण इसे एक औद्योगिक केंद्र माना जाता है।"
    },
    {
        question: "प्रश्न 12. हड़प्पा सभ्यता में ऊँट की हड्डियाँ कहाँ से मिली हैं?",
        answers: shuffle([
            { text: "लोथल", correct: false },
            { text: "सुरकोटदा", correct: false },
            { text: "कालीबंगा", correct: true },
            { text: "हड़प्पा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगा से ऊँट की अस्थियों के साक्ष्य मिले हैं, जो यह दर्शाते हैं कि वे इस पशु से परिचित थे और इसका उपयोग रेगिस्तानी क्षेत्र में परिवहन के लिए करते होंगे।"
    },
    {
        question: "प्रश्न 13. सिंधु सभ्यता के पतन के लिए 'नदी मार्ग में परिवर्तन' का सिद्धांत किसने दिया?",
        answers: shuffle([
            { text: "मॉर्टिमर व्हीलर", correct: false },
            { text: "जॉन मार्शल", correct: false },
            { text: "माधोस्वरूप वत्स और लैम्ब्रिक", correct: true },
            { text: "फेयरसर्विस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन विद्वानों का मत है कि सिंधु, रावी या घग्घर जैसी नदियों ने अपना मार्ग बदल लिया, जिससे जल आपूर्ति बाधित हुई और नगर उजड़ गए।"
    },
    {
        question: "प्रश्न 14. हड़प्पा सभ्यता के बारे में जानकारी का प्रमुख स्रोत क्या है?",
        answers: shuffle([
            { text: "शिलालेख", correct: false },
            { text: "पकी मिट्टी की मुहरों पर अंकित लेख", correct: false },
            { text: "पुरातात्विक खुदाई", correct: true },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि सिंधु लिपि को पढ़ा नहीं जा सका है, इसलिए इस सभ्यता के बारे में हमारी जानकारी का एकमात्र और प्रमुख स्रोत पुरातात्विक उत्खनन से प्राप्त वस्तुएं, नगर और संरचनाएं हैं।"
    },
    {
        question: "प्रश्न 15. सिंधु सभ्यता में शासक वर्ग कौन था, इस बारे में सबसे प्रबल मत क्या है?",
        answers: shuffle([
            { text: "राजाओं का शासन था", correct: false },
            { text: "पुरोहितों का शासन था", correct: false },
            { text: "वणिक (व्यापारी) वर्ग का शासन था", correct: true },
            { text: "कोई केंद्रीय सत्ता नहीं थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभ्यता में व्यापार और वाणिज्य की प्रधानता को देखते हुए, कई विद्वान यह मानते हैं कि शासन की बागडोर व्यापारियों के हाथ में थी, न कि किसी राजा या पुरोहित के।"
    },
    {
        question: "प्रश्न 16. 'ग्रेट बाथ' (विशाल स्नानागार) की खोज किसने की थी?",
        answers: shuffle([
            { text: "दयाराम साहनी", correct: false },
            { text: "आर.डी. बनर्जी (राखालदास बनर्जी)", correct: true },
            { text: "एस.आर. राव", correct: false },
            { text: "बी.बी. लाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो की खोज 1922 में राखालदास बनर्जी ने की थी और वहीं पर विशाल स्नानागार भी मिला था।"
    },
    {
        question: "प्रश्न 17. हड़प्पाकालीन समाज कैसा था?",
        answers: shuffle([
            { text: "पितृसत्तात्मक", correct: false },
            { text: "मातृसत्तात्मक", correct: true },
            { text: "राजतंत्रीय", correct: false },
            { text: "कबीलाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़ी संख्या में मिली मातृदेवी की मूर्तियों के आधार पर यह अनुमान लगाया जाता है कि हड़प्पा समाज संभवतः मातृसत्तात्मक था, जहाँ माँ या स्त्री को परिवार का मुखिया माना जाता था।"
    },
    {
        question: "प्रश्न 18. हड़प्पा सभ्यता की सड़कों की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "वे कच्ची थीं", correct: false },
            { text: "वे बहुत संकरी थीं", correct: false },
            { text: "वे एक दूसरे को समकोण पर काटती थीं", correct: true },
            { text: "वे ढलानदार नहीं थीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा की सड़कें सीधी होती थीं और एक-दूसरे को समकोण (90 डिग्री) पर काटती थीं, जिससे शहर एक ग्रिड पैटर्न में व्यवस्थित होता था।"
    },
    {
        question: "प्रश्न 19. सिंधु घाटी के लोग किस धातु को 'खेतड़ी' (राजस्थान) से प्राप्त करते थे?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: false },
            { text: "टिन", correct: false },
            { text: "तांबा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान की खेतड़ी तांबा खदानें प्राचीन काल से ही तांबे का एक प्रमुख स्रोत रही हैं और हड़प्पावासी यहीं से तांबे का आयात करते थे।"
    },
    {
        question: "प्रश्न 20. हड़प्पा सभ्यता के किस स्थल से अलंकृत ईंटों का प्रयोग फर्श पर किया गया है?",
        answers: shuffle([
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "कालीबंगा", correct: true },
            { text: "चन्हूदड़ो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगा एकमात्र ऐसा स्थल है जहाँ एक घर के फर्श में डिज़ाइनदार (अलंकृत) ईंटों का प्रयोग किया गया है।"
    },
    {
        question: "प्रश्न 21. हड़प्पा सभ्यता का काल निर्धारण किस आधार पर किया गया है?",
        answers: shuffle([
            { text: "मेसोपोटामियाई अभिलेख", correct: false },
            { text: "वैदिक साहित्य", correct: false },
            { text: "रेडियोकार्बन-14 डेटिंग", correct: true },
            { text: "चीनी यात्रियों का विवरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडियोकार्बन-14 (C-14) एक वैज्ञानिक विधि है जिसके द्वारा पुरातात्विक नमूनों की आयु का पता लगाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी विधि से हड़प्पा का काल 2500-1750 ई.पू. निर्धारित किया गया है।"
    },
    {
        question: "प्रश्न 22. सिंधु सभ्यता का कौन-सा स्थल बिना दुर्ग (Citadel) का एकमात्र नगर था?",
        answers: shuffle([
            { text: "कालीबंगा", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "चन्हूदड़ो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चन्हूदड़ो एकमात्र ऐसा हड़प्पाकालीन नगर था जिसमें कोई दुर्ग या किला नहीं मिला है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पूरी तरह से एक औद्योगिक और आवासीय बस्ती थी।"
    },
    {
        question: "प्रश्न 23. हड़प्पा संस्कृति की जानकारी का मुख्य स्रोत है:",
        answers: shuffle([
            { text: "पुरातात्विक खुदाई", correct: true },
            { text: "साहित्य", correct: false },
            { text: "ताम्रपत्र लेख", correct: false },
            { text: "शिलालेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि हड़प्पा लिपि अपठित है और कोई अन्य लिखित साहित्य उपलब्ध नहीं है, इसलिए इस सभ्यता की जानकारी पूरी तरह से पुरातात्विक खुदाई पर निर्भर है।"
    },
    {
        question: "प्रश्न 24. हड़प्पा सभ्यता में शवों को सामान्यतः किस दिशा में सिर रखकर दफनाया जाता था?",
        answers: shuffle([
            { text: "पूर्व-पश्चिम", correct: false },
            { text: "पश्चिम-पूर्व", correct: false },
            { text: "उत्तर-दक्षिण", correct: true },
            { text: "दक्षिण-उत्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा में शवों को सामान्यतः उत्तर दिशा में सिर और दक्षिण दिशा में पैर करके दफनाया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके साथ मृद्भांड और आभूषण भी रखे जाते थे।"
    },
    {
        question: "प्रश्न 25. सिंधु घाटी सभ्यता में किस जानवर को पूज्य माना जाता था, लेकिन उसका अंकन मुहरों पर नहीं मिलता?",
        answers: shuffle([
            { text: "गाय", correct: true },
            { text: "घोड़ा", correct: false },
            { text: "ऊँट", correct: false },
            { text: "भैंसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कूबड़ वाले बैल का अंकन बहुतायत में है, जिसे पवित्र माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन आश्चर्यजनक रूप से गाय का अंकन किसी भी मुहर पर नहीं मिलता है।"
    },
    {
        question: "प्रश्न 26. सिंधु सभ्यता के लोग मनोरंजन के लिए क्या करते थे?",
        answers: shuffle([
            { text: "पासा खेलना और नृत्य", correct: false },
            { text: "शिकार करना", correct: false },
            { text: "संगीत", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साक्ष्यों के आधार पर यह पता चलता है कि वे पासे का खेल, नृत्य, शिकार और संगीत जैसे साधनों से अपना मनोरंजन करते थे।"
    },
    {
        question: "प्रश्न 27. मिट्टी के बर्तनों पर डिजाइन बनाने के लिए किस रंग का प्रयोग होता था?",
        answers: shuffle([
            { text: "हरा", correct: false },
            { text: "पीला", correct: false },
            { text: "काला", correct: true },
            { text: "नीला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा सभ्यता के बर्तन लाल या गुलाबी रंग के होते थे, जिन पर काले रंग से ज्यामितीय आकृतियाँ, पेड़-पौधे और पशु-पक्षियों के चित्र बनाए जाते थे।"
    },
    {
        question: "प्रश्न 28. कौन-सा हड़प्पा स्थल हरियाणा में स्थित नहीं है?",
        answers: shuffle([
            { text: "राखीगढ़ी", correct: false },
            { text: "वणावली", correct: false },
            { text: "मीताथल", correct: false },
            { text: "रोपड़", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राखीगढ़ी, वणावली और मीताथल हरियाणा में स्थित प्रमुख हड़प्पा स्थल हैं, जबकि रोपड़ पंजाब में है।"
    },
    {
        question: "प्रश्न 29. सिंधु घाटी के लोग किस देवी की पूजा करते थे?",
        answers: shuffle([
            { text: "लक्ष्मी", correct: false },
            { text: "सरस्वती", correct: false },
            { text: "काली", correct: false },
            { text: "मातृदेवी (उर्वरता की देवी)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा से प्राप्त एक मुहर में स्त्री के गर्भ से पौधा निकलता दिखाया गया है, जो यह दर्शाता है कि वे पृथ्वी को उर्वरता की देवी मानकर पूजते थे।"
    },
    {
        question: "प्रश्न 30. सिंधु सभ्यता के बाट किस पत्थर के बने होते थे?",
        answers: shuffle([
            { text: "सेलखड़ी", correct: false },
            { text: "चर्ट", correct: true },
            { text: "कार्नेलियन", correct: false },
            { text: "लाजवर्द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा सभ्यता के मानकीकृत बाट घनाकार होते थे और सामान्यतः चर्ट नामक पत्थर से बनाए जाते थे।"
    },
    {
        question: "प्रश्न 31. हड़प्पा सभ्यता में घर बनाने के लिए ईंटों को कैसे जोड़ा जाता था?",
        answers: shuffle([
            { text: "सीमेंट से", correct: false },
            { text: "चूने से", correct: false },
            { text: "मिट्टी के गारे से", correct: false },
            { text: "इंग्लिश बॉन्ड पद्धति से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे ईंटों को एक-दूसरे से मजबूती से जोड़ने के लिए 'इंग्लिश बॉन्ड' जैसी इंटरलॉकिंग पद्धति का उपयोग करते थे, जिसमें एक परत में ईंटों को लंबाई में और दूसरी में चौड़ाई में रखा जाता था।"
    },
    {
        question: "प्रश्न 32. सिंधु सभ्यता के नगरों में प्रवेश के लिए क्या व्यवस्था थी?",
        answers: shuffle([
            { text: "विशाल प्रवेश द्वार", correct: true },
            { text: "भूमिगत मार्ग", correct: false },
            { text: "नदी मार्ग", correct: false },
            { text: "कोई विशेष व्यवस्था नहीं थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा और धोलावीरा जैसे नगरों में रक्षा प्राचीर में बड़े-बड़े प्रवेश द्वार बने होते थे, जो नगर में आने-जाने के रास्ते थे।"
    },
    {
        question: "प्रश्न 33. सिंधु घाटी सभ्यता के लोग किस हथियार से परिचित नहीं थे?",
        answers: shuffle([
            { text: "कुल्हाड़ी", correct: false },
            { text: "भाला", correct: false },
            { text: "धनुष-बाण", correct: false },
            { text: "तलवार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्खनन में कुल्हाड़ी, भाले, कटार और धनुष-बाण मिले हैं, लेकिन तलवार का कोई साक्ष्य नहीं मिला है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे यह भी पता चलता है कि वे अपेक्षाकृत शांतिप्रिय लोग थे।"
    },
    {
        question: "प्रश्न 34. सिंधु घाटी सभ्यता में सबसे सामान्य प्रकार के मृद्भांड (बर्तन) कौन से थे?",
        answers: shuffle([
            { text: "चित्रित धूसर मृद्भांड", correct: false },
            { text: "उत्तरी काले पॉलिशदार मृद्भांड", correct: false },
            { text: "लाल और काले मृद्भांड", correct: true },
            { text: "गैरिक मृद्भांड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस सभ्यता की पहचान लाल रंग की पृष्ठभूमि पर काले रंग से चित्रित मृद्भांडों से होती है, जिन्हें 'Black and Red Ware' कहा जाता है।"
    },
    {
        question: "प्रश्न 35. सिंधु सभ्यता के लोगों का समाज मुख्य रूप से कैसा था?",
        answers: shuffle([
            { text: "ग्रामीण और कृषि आधारित", correct: false },
            { text: "नगरीय और व्यापार आधारित", correct: true },
            { text: "कबीलाई और खानाबदोश", correct: false },
            { text: "सैन्यवादी और आक्रामक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक सुविकसित शहरी सभ्यता थी जिसका आर्थिक आधार उन्नत व्यापार और वाणिज्य था।"
    },
    {
        question: "प्रश्न 36. हड़प्पा सभ्यता में मकानों के अंदर शौचालय और स्नानागार कहाँ बने होते थे?",
        answers: shuffle([
            { text: "घर के केंद्र में", correct: false },
            { text: "छत पर", correct: false },
            { text: "आँगन के एक कोने में", correct: true },
            { text: "घर के बाहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा के घरों में आँगन के एक कोने में स्नानागार और शौचालय बने होते थे, जिनकी नालियाँ घर की मुख्य नाली से जुड़ी होती थीं।"
    },
    {
        question: "प्रश्न 37. हड़प्पा सभ्यता की समकालीन 'सुमेरियन सभ्यता' कहाँ विकसित हुई?",
        answers: shuffle([
            { text: "नील नदी की घाटी में", correct: false },
            { text: "दजला-फरात नदी की घाटी में", correct: true },
            { text: "ह्वांग-हो नदी की घाटी में", correct: false },
            { text: "वोल्गा नदी की घाटी में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुमेरियन सभ्यता (मेसोपोटामिया) आधुनिक इराक में दजला (टिगरिस) और फरात (यूफ्रेट्स) नदियों के बीच विकसित हुई थी।"
    },
    {
        question: "प्रश्न 38. तांबे का दर्पण (आईना) किस हड़प्पा स्थल से मिला है?",
        answers: shuffle([
            { text: "हड़प्पा", correct: true },
            { text: "राखीगढ़ी", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा के उत्खनन में तांबे के बने अंडाकार दर्पण और सुरमा लगाने की सलाई जैसी प्रसाधन सामग्री मिली है।"
    },
    {
        question: "प्रश्न 39. सिंधु घाटी के लोग किस चीज़ से बने हल का प्रयोग करते थे?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "कांसा", correct: false },
            { text: "पत्थर", correct: false },
            { text: "लकड़ी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि बनवाली से मिट्टी का खिलौना-हल मिला है, लेकिन वास्तविक कृषि कार्य के लिए वे लकड़ी के बने हल का प्रयोग करते थे, जिसके आगे पत्थर या तांबे का फाल लगा हो सकता है।"
    },
    {
        question: "प्रश्न 40. सिंधु सभ्यता के पतन के बाद भारत में किस नई संस्कृति का उदय हुआ?",
        answers: shuffle([
            { text: "महाजनपद काल", correct: false },
            { text: "मौर्य संस्कृति", correct: false },
            { text: "वैदिक (आर्य) संस्कृति", correct: true },
            { text: "गुप्त संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 1750 ई.पू. में सिंधु सभ्यता के पतन के बाद, लगभग 1500 ई.पू. के आसपास भारत में एक नई ग्रामीण संस्कृति का उदय हुआ जिसे वैदिक संस्कृति कहा जाता है।"
    },
    {
        question: "प्रश्न 41. आर-37 (R-37) कब्रिस्तान कहाँ मिला है?",
        answers: shuffle([
            { text: "मोहनजोदड़ो", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "हड़प्पा", correct: true },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा के दुर्ग टीले के दक्षिण में एक कब्रिस्तान मिला है, जिसे पुरातत्वविदों ने 'कब्रिस्तान R-37' नाम दिया है।"
    },
    {
        question: "प्रश्न 42. सिंधु सभ्यता के लोगों के लिए दिलमुन क्या था?",
        answers: shuffle([
            { text: "एक देवता", correct: false },
            { text: "एक प्रकार का वस्त्र", correct: false },
            { text: "एक व्यापारिक मध्यस्थ बंदरगाह", correct: true },
            { text: "एक राजा का नाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसोपोटामियाई लेखों में वर्णित दिलमुन की पहचान बहरीन द्वीप से की जाती है, जो सिंधु घाटी और मेसोपोटामिया के बीच व्यापार में मध्यस्थ की भूमिका निभाता था।"
    },
    {
        question: "प्रश्न 43. हड़प्पा सभ्यता में बच्चों के खिलौने मुख्यतः किस चीज के बने होते थे?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "लकड़ी", correct: false },
            { text: "पकी हुई मिट्टी (टेराकोटा)", correct: true },
            { text: "कांसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्खनन में बड़ी संख्या में मिट्टी की बनी गाड़ियाँ, सीटियाँ, पशु-पक्षियों की आकृतियाँ और झूले मिले हैं।"
    },
    {
        question: "प्रश्न 44. सिंधु घाटी सभ्यता का स्वरूप क्या था?",
        answers: shuffle([
            { text: "पूर्णतः धार्मिक", correct: false },
            { text: "पूर्णतः धर्मनिरपेक्ष", correct: false },
            { text: "धर्मनिरपेक्ष, लेकिन धार्मिक तत्वों की उपस्थिति", correct: true },
            { text: "सैन्यवादी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि मातृदेवी और पशुपति की पूजा के साक्ष्य हैं, लेकिन किसी विशाल मंदिर या पुरोहित वर्ग के अत्यधिक प्रभाव का प्रमाण नहीं मिलता, जिससे लगता है कि समाज मुख्यतः धर्मनिरपेक्ष था।"
    },
    {
        question: "प्रश्न 45. \"सिंधु सभ्यता\" शब्द का प्रयोग करने वाला पहला विद्वान कौन था?",
        answers: shuffle([
            { text: "दयाराम साहनी", correct: false },
            { text: "राखालदास बनर्जी", correct: false },
            { text: "जॉन मार्शल", correct: true },
            { text: "अलेक्जेंडर कनिंघम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जॉन मार्शल ने ही 1924 में 'इलस्ट्रेटेड लंदन न्यूज' में एक लेख लिखकर इस नई सभ्यता की खोज की औपचारिक घोषणा की और इसे 'सिंधु सभ्यता' नाम दिया।"
    },
    {
        question: "प्रश्न 46. किस स्थल से भूकंप आने का प्राचीनतम साक्ष्य मिला है?",
        answers: shuffle([
            { text: "धोलावीरा", correct: false },
            { text: "कालीबंगा", correct: true },
            { text: "लोथल", correct: false },
            { text: "हड़प्पा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगा के प्राक्-हड़प्पा स्तर की खुदाई में दीवारों में दरारें और फर्श में उभार मिला है, जिसे भूकंप का साक्ष्य माना जाता है।"
    },
    {
        question: "प्रश्न 47. हड़प्पा के लोग सीसा (Lead) कहाँ से आयात करते थे?",
        answers: shuffle([
            { text: "केवल ईरान से", correct: false },
            { text: "केवल अफगानिस्तान से", correct: false },
            { text: "ईरान, अफगानिस्तान और राजस्थान से", correct: true },
            { text: "केवल कर्नाटक से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीसे का उपयोग विभिन्न कार्यों के लिए किया जाता था और इसका आयात इन तीनों क्षेत्रों से होता था।"
    },
    {
        question: "प्रश्न 48. सिंधु घाटी की जुड़वां राजधानियाँ किसे कहा गया है?",
        answers: shuffle([
            { text: "लोथल और कालीबंगा", correct: false },
            { text: "हड़प्पा और मोहनजोदड़ो", correct: true },
            { text: "चन्हूदड़ो और कोटदीजी", correct: false },
            { text: "हड़प्पा और लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टुअर्ट पिग्गट नामक विद्वान ने इन दोनों नगरों के आकार, महत्व और समान नगर योजना को देखते हुए इन्हें एक विस्तृत साम्राज्य की \"जुड़वां राजधानियाँ\" कहा है।"
    },
    {
        question: "प्रश्न 49. सिंधु सभ्यता में सिंचाई का मुख्य साधन क्या था?",
        answers: shuffle([
            { text: "नहरें", correct: false },
            { text: "कुएँ", correct: false },
            { text: "नदी का बाढ़ का पानी", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे सिंचाई के लिए नदियों के बाढ़ के पानी का उपयोग करते थे, कुओं से भी सिंचाई होती थी और शोर्तुघई (अफगानिस्तान) जैसे स्थलों से नहरों के प्रमाण भी मिले हैं।"
    },
    {
        question: "प्रश्न 50. विशाल अन्नागार (Great Granary) कहाँ स्थित था?",
        answers: shuffle([
            { text: "केवल हड़प्पा में", correct: false },
            { text: "केवल मोहनजोदड़ो में", correct: false },
            { text: "हड़प्पा और मोहनजोदड़ो दोनों में", correct: true },
            { text: "केवल लोथल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो का अन्नागार सबसे बड़ी इमारत है, लेकिन हड़प्पा में भी रावी नदी के पास छह-छह की दो पंक्तियों में बने कुल बारह अन्नागारों का एक समूह मिला है।"
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