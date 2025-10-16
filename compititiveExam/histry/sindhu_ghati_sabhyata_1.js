const questions = [
    {
        topHeading: "सिंधु घाटी सभ्यता पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. हड़प्पा सभ्यता का सर्वाधिक मान्यता प्राप्त काल क्या है?",
        answers: shuffle([
            { text: "2800 ई.पू. - 2000 ई.पू.", correct: false },
            { text: "2500 ई.पू. - 1750 ई.पू.", correct: true },
            { text: "3500 ई.पू. - 1800 ई.पू.", correct: false },
            { text: "निश्चित नहीं हो सका है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडियो-कार्बन C-14 जैसी नवीन विश्लेषण पद्धति के द्वारा हड़प्पा सभ्यता का सर्वमान्य काल 2500 ई.पू. से 1750 ई.पू. माना गया है।"
    },
    {
        question: "प्रश्न 2. सिंधु घाटी की सभ्यता निम्नलिखित में से किस सभ्यता के समकालीन नहीं थी?",
        answers: shuffle([
            { text: "मिस्र की सभ्यता", correct: false },
            { text: "मेसोपोटामिया की सभ्यता", correct: false },
            { text: "चीन की सभ्यता", correct: false },
            { text: "ग्रीक की सभ्यता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी की सभ्यता मिस्र, मेसोपोटामिया और चीन की सभ्यताओं की समकालीन थी, लेकिन ग्रीक की सभ्यता इसके बाद विकसित हुई।"
    },
    {
        question: "प्रश्न 3. सिंधु घाटी की सभ्यता कहाँ तक विस्तृत थी?",
        answers: shuffle([
            { text: "पंजाब, दिल्ली और जम्मू-कश्मीर", correct: false },
            { text: "राजस्थान, बिहार, बंगाल और उड़ीसा", correct: false },
            { text: "पंजाब, राजस्थान, गुजरात, उड़ीसा और बंगाल", correct: false },
            { text: "पंजाब, राजस्थान, गुजरात, उत्तर प्रदेश, हरियाणा, सिंध और बलूचिस्तान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी सभ्यता का विस्तार उत्तर में मांदा (जम्मू-कश्मीर) से लेकर दक्षिण में दैमाबाद (महाराष्ट्र) तक और पूर्व में आलमगीरपुर (उत्तरप्रदेश) से लेकर पश्चिम में सुत्कागेंडोर (बलूचिस्तान) तक था।"
    },
    {
        question: "प्रश्न 4. सिंधु घाटी की सभ्यता में घोड़े के अवशेष कहाँ मिले हैं?",
        answers: shuffle([
            { text: "सुरकोटदा", correct: true },
            { text: "वणावली", correct: false },
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात के कच्छ जिले में स्थित सुरकोटदा से घोड़े की अस्थियों के अवशेष प्राप्त हुए हैं, जो इस सभ्यता में घोड़े की उपस्थिति का संकेत देते हैं।"
    },
    {
        question: "प्रश्न 5. सिंधु घाटी स्थल कालीबंगन किस प्रदेश में है?",
        answers: shuffle([
            { text: "राजस्थान में", correct: true },
            { text: "गुजरात में", correct: false },
            { text: "मध्यप्रदेश में", correct: false },
            { text: "उत्तरप्रदेश में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगन (जिसका अर्थ 'काली चूड़ियाँ' है) राजस्थान के हनुमानगढ़ जिले में घग्घर नदी के किनारे स्थित एक प्रमुख हड़प्पा स्थल है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से किस पदार्थ का उपयोग हड़प्पा काल की मुहरों (मुद्राओं) के निर्माण में मुख्य रूप से किया गया था?",
        answers: shuffle([
            { text: "सेलखड़ी", correct: true },
            { text: "कांसा", correct: false },
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा काल की अधिकांश मुहरें मुलायम पत्थर सेलखड़ी (स्टेटाइट) से बनी होती थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन पर विभिन्न जानवरों और लिपि के चित्र अंकित होते थे।"
    },
    {
        question: "प्रश्न 7. हड़प्पा सभ्यता किस युग की थी?",
        answers: shuffle([
            { text: "कांस्य युग", correct: true },
            { text: "नवपाषाण युग", correct: false },
            { text: "पुरापाषाण युग", correct: false },
            { text: "लौह युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा सभ्यता के लोग तांबे में टिन मिलाकर कांसा बनाने की तकनीक जानते थे और इसका व्यापक उपयोग औजार, हथियार और बर्तन बनाने में करते थे, इसलिए इसे कांस्य युगीन सभ्यता कहा जाता है।"
    },
    {
        question: "प्रश्न 8. सिंधु घाटी के लोग किस लिपि का प्रयोग करते थे?",
        answers: shuffle([
            { text: "देवनागरी", correct: false },
            { text: "ब्राह्मी", correct: false },
            { text: "चित्राक्षर (भाव-चित्रात्मक)", correct: true },
            { text: "खरोष्ठी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु लिपि चित्रों और चिन्हों पर आधारित थी, जिसे पिक्टोग्राफिक या भाव-चित्रात्मक लिपि कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक चिन्ह एक शब्द या विचार को व्यक्त करता था।"
    },
    {
        question: "प्रश्न 9. हड़प्पा सभ्यता के निवासी थे?",
        answers: shuffle([
            { text: "ग्रामीण", correct: false },
            { text: "शहरी", correct: true },
            { text: "खानाबदोश", correct: false },
            { text: "जनजातीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा सभ्यता अपनी सुनियोजित नगर योजना, पक्की ईंटों के मकान, उन्नत जल निकासी प्रणाली और व्यापारिक गतिविधियों के कारण एक शहरी सभ्यता थी।"
    },
    {
        question: "प्रश्न 10. सिंधु सभ्यता के घर किससे बनाए जाते थे?",
        answers: shuffle([
            { text: "ईंट से", correct: true },
            { text: "बांस से", correct: false },
            { text: "पत्थर से", correct: false },
            { text: "लकड़ी से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में घरों के निर्माण के लिए मानकीकृत आकार की पक्की ईंटों का प्रयोग किया जाता था, जो इनकी उन्नत निर्माण तकनीक का प्रमाण है।"
    },
    {
        question: "प्रश्न 11. हड़प्पावासी किस वस्तु के उत्पादन में सर्वप्रथम थे?",
        answers: shuffle([
            { text: "मुद्राएँ", correct: false },
            { text: "कांसे के औजार", correct: false },
            { text: "कपास", correct: true },
            { text: "जौ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विश्व में कपास उगाने का श्रेय सबसे पहले हड़प्पा वासियों को दिया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यूनानी लोग इसे 'सिंडोन' कहते थे, जो 'सिंध' शब्द से निकला है।"
    },
    {
        question: "प्रश्न 12. निम्नलिखित विद्वानों में से हड़प्पा सभ्यता का सर्वप्रथम खोजकर्ता कौन था?",
        answers: shuffle([
            { text: "सर जॉन मार्शल", correct: false },
            { text: "आर. डी. बनर्जी", correct: false },
            { text: "ए. कनिंघम", correct: false },
            { text: "दयाराम साहनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय पुरातत्वविद दयाराम साहनी ने 1921 में हड़प्पा स्थल का उत्खनन कर इस सभ्यता की सर्वप्रथम खोज की थी।"
    },
    {
        question: "प्रश्न 13. सिंधु सभ्यता का पत्तननगर (बंदरगाह) कौन-सा था?",
        answers: shuffle([
            { text: "कालीबंगन", correct: false },
            { text: "लोथल", correct: true },
            { text: "रोपड़", correct: false },
            { text: "मोहनजोदड़ो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात में भोगवा नदी के किनारे स्थित लोथल एक प्रमुख बंदरगाह था, जहाँ से मेसोपोटामिया के साथ समुद्री व्यापार होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ एक गोदीबाड़ा (डॉकयार्ड) का साक्ष्य मिला है।"
    },
    {
        question: "प्रश्न 14. पैमानों की खोज ने यह सिद्ध कर दिया है कि सिंधु घाटी के लोग माप और तौल से परिचित थे। यह खोज कहाँ पर हुई?",
        answers: shuffle([
            { text: "कालीबंगन", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "चन्हूदड़ो", correct: false },
            { text: "लोथल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल से हाथी दांत का एक पैमाना और मानकीकृत बाट मिले हैं, जो यह प्रमाणित करते हैं कि सिंधु घाटी के लोग माप और तौल की प्रणाली से भली-भांति परिचित थे।"
    },
    {
        question: "प्रश्न 15. हड़प्पाकालीन समाज किन वर्गों में विभक्त था?",
        answers: shuffle([
            { text: "शिकारी, पुजारी, किसान और क्षत्रिय", correct: false },
            { text: "विद्वान, योद्धा, व्यापारी और श्रमिक", correct: true },
            { text: "ब्राह्मण, क्षत्रिय, वैश्य और शूद्र", correct: false },
            { text: "राजा, पुरोहित, सैनिक और शूद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक साक्ष्यों के आधार पर हड़प्पाकालीन समाज को मुख्यतः विद्वान (पुरोहित), योद्धा, व्यापारी और श्रमिक जैसे वर्गों में विभाजित माना जाता है।"
    },
    {
        question: "प्रश्न 16. सिंधु सभ्यता का सर्वाधिक उपयुक्त नाम क्या है?",
        answers: shuffle([
            { text: "हड़प्पा सभ्यता", correct: true },
            { text: "सिंधु सभ्यता", correct: false },
            { text: "सिंधु घाटी सभ्यता", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातत्व की परंपरा के अनुसार, किसी सभ्यता का नाम उस स्थान के नाम पर रखा जाता है जहाँ उसकी पहली बार खोज हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि हड़प्पा पहला खोजा गया स्थल था, इसलिए इसे 'हड़प्पा सभ्यता' कहना सर्वाधिक उपयुक्त है।"
    },
    {
        question: "प्रश्न 17. हड़प्पा सभ्यता की खोज किस वर्ष में हुई थी?",
        answers: shuffle([
            { text: "1935", correct: false },
            { text: "1942", correct: false },
            { text: "1901", correct: false },
            { text: "1921", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दयाराम साहनी द्वारा हड़प्पा स्थल की खोज और उत्खनन का कार्य वर्ष 1921 में प्रारंभ किया गया था।"
    },
    {
        question: "प्रश्न 18. हड़प्पा सभ्यता के बारे में कौन सी उक्ति सही है?",
        answers: shuffle([
            { text: "उन्हें अश्वमेध की जानकारी थी", correct: false },
            { text: "गाय उनके लिए पवित्र थी", correct: false },
            { text: "उन्होंने पशुपति का सम्मान करना आरंभ किया", correct: true },
            { text: "उनकी संस्कृति सामान्यतः स्थिर नहीं थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से प्राप्त एक मुहर पर योग मुद्रा में बैठे एक देवता का चित्रण है, जिन्हें पशुपति (आद्य-शिव) माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे उनके पशुपति सम्मान का पता चलता है।"
    },
    {
        question: "प्रश्न 19. हड़प्पा के लोगों की सामाजिक पद्धति क्या थी?",
        answers: shuffle([
            { text: "उचित समतावादी", correct: true },
            { text: "दास-श्रमिक आधारित", correct: false },
            { text: "वर्ण आधारित", correct: false },
            { text: "जाति आधारित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपलब्ध साक्ष्यों से हड़प्पा समाज में कोई बड़े सामाजिक भेदभाव का संकेत नहीं मिलता, जिससे यह अनुमान लगाया जाता है कि उनकी सामाजिक पद्धति काफी हद तक समतावादी थी।"
    },
    {
        question: "प्रश्न 20. 'सिंध का नखलिस्तान / बाग' हड़प्पा सभ्यता के किस पुरास्थल को कहा गया है?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "कालीबंगा", correct: false },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो अपने उन्नत शहरीकरण, हरियाली और समृद्धि के कारण 'सिंध का बाग' या 'मृतकों का टीला' के नाम से भी जाना जाता था।"
    },
    {
        question: "प्रश्न 21. सिंधु घाटी के लोग किस लिपि का प्रयोग करते थे?",
        answers: shuffle([
            { text: "देवनागरी", correct: false },
            { text: "ब्राह्मी", correct: false },
            { text: "चित्राक्षर (भाव-चित्रात्मक)", correct: true },
            { text: "खरोष्ठी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु लिपि चित्रों और चिन्हों पर आधारित थी, जिसे पिक्टोग्राफिक या भाव-चित्रात्मक लिपि कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक चिन्ह एक शब्द या विचार को व्यक्त करता था।"
    },
    {
        question: "प्रश्न 22. हड़प्पा सभ्यता के अंतर्गत हल से जोते गए खेत का साक्ष्य कहाँ से मिला है?",
        answers: shuffle([
            { text: "रोपड़", correct: false },
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: true },
            { text: "वणावली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान के कालीबंगा में प्राक्-हड़प्पा काल के हल से जोते गए खेत के साक्ष्य मिले हैं, जो विश्व में कृषि का एक प्राचीनतम प्रमाण है।"
    },
    {
        question: "प्रश्न 23. सैंधव सभ्यता की ईंटों का अलंकरण किस स्थान से मिला है?",
        answers: shuffle([
            { text: "कालीबंगा", correct: true },
            { text: "चन्हूदड़ो", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "वणावली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगा में फर्श के निर्माण में अलंकृत (डिजाइनदार) ईंटों का प्रयोग किया गया है, जबकि अन्य स्थलों पर सादी ईंटों का उपयोग होता था।"
    },
    {
        question: "प्रश्न 24. मोहनजोदड़ो कहाँ स्थित है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "सिंध", correct: true },
            { text: "गुजरात", correct: false },
            { text: "उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो वर्तमान पाकिस्तान के सिंध प्रांत के लरकाना जिले में सिंधु नदी के तट पर स्थित है।"
    },
    {
        question: "प्रश्न 25. सिंधु सभ्यता में वृहत् स्नानागार पाया गया है?",
        answers: shuffle([
            { text: "मोहनजोदड़ो में", correct: true },
            { text: "हड़प्पा में", correct: false },
            { text: "लोथल में", correct: false },
            { text: "कालीबंगा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो के दुर्ग टीले पर स्थित विशाल स्नानागार सिंधु सभ्यता की एक अद्भुत और महत्वपूर्ण संरचना है, जिसका उपयोग संभवतः धार्मिक अनुष्ठानों के लिए होता था।"
    },
    {
        question: "प्रश्न 26. सिंधु सभ्यता की मुद्रा में किस देवता के समतुल्य चित्रांकन मिलता है?",
        answers: shuffle([
            { text: "आद्य-शिव", correct: true },
            { text: "आद्य-ब्रह्मा", correct: false },
            { text: "आद्य-विष्णु", correct: false },
            { text: "आद्य-इंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से प्राप्त पशुपति मुहर पर चित्रित योगी को आद्य-शिव (प्रोटो-शिवा) का रूप माना जाता है, जो हिंदू धर्म में शिव की पूजा की प्राचीनता का संकेत है।"
    },
    {
        question: "प्रश्न 27. निम्नलिखित में से कौन-सा हड़प्पाकालीन स्थल गुजरात में था?",
        answers: shuffle([
            { text: "कालीबंगा", correct: false },
            { text: "रोपड़", correct: false },
            { text: "वणावली", correct: false },
            { text: "लोथल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल गुजरात के अहमदाबाद जिले में भोगवा नदी के किनारे स्थित एक प्रमुख हड़प्पाकालीन बंदरगाह और व्यापारिक केंद्र था।"
    },
    {
        question: "प्रश्न 28. मोहनजोदड़ो का स्थानीय नाम क्या है?",
        answers: shuffle([
            { text: "जीवतों का टीला", correct: false },
            { text: "कंकालों का टीला", correct: false },
            { text: "दासों का टीला", correct: false },
            { text: "मृतकों का टीला", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो का सिंधी भाषा में अर्थ 'मृतकों का टीला' (Mound of the Dead) होता है।"
    },
    {
        question: "प्रश्न 29. हड़प्पा सभ्यता का प्रचलित नाम क्या है?",
        answers: shuffle([
            { text: "सिंधु सभ्यता", correct: false },
            { text: "लोथल सभ्यता", correct: false },
            { text: "सिंधु घाटी की सभ्यता", correct: true },
            { text: "मोहनजोदड़ो की सभ्यता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि इस सभ्यता के अधिकांश आरंभिक स्थल सिंधु नदी और उसकी सहायक नदियों की घाटी में पाए गए, इसलिए इसे 'सिंधु घाटी की सभ्यता' के नाम से जाना जाता है।"
    },
    {
        question: "प्रश्न 30. सैंधव स्थलों के उत्खनन से प्राप्त मुहरों पर निम्नलिखित में से किस पशु का सर्वाधिक उत्कीर्णन हुआ है?",
        answers: shuffle([
            { text: "शेर", correct: false },
            { text: "घोड़ा", correct: false },
            { text: "बैल", correct: true },
            { text: "हाथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैंधव मुहरों पर एक सींग वाले बैल (यूनिकॉर्न) का चित्रण सबसे अधिक संख्या में मिलता है, जो शायद उनका कोई पूजनीय पशु था।"
    },
    {
        question: "प्रश्न 31. सिंधु घाटी सभ्यता जानी जाती है?",
        answers: shuffle([
            { text: "अपने नगर नियोजन के लिए", correct: true },
            { text: "मोहनजोदड़ो एवं हड़प्पा के लिए", correct: false },
            { text: "अपने कृषि संबंधी कार्यों के लिए", correct: false },
            { text: "अपने उद्योगों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी सभ्यता की सबसे बड़ी विशेषता उसकी ग्रिड-पद्धति पर आधारित सुनियोजित नगर योजना, चौड़ी सड़कें और उत्कृष्ट जल निकासी प्रणाली थी।"
    },
    {
        question: "प्रश्न 32. सिंधु सभ्यता का कौन-सा स्थान भारत में स्थित है?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा और मोहनजोदड़ो वर्तमान पाकिस्तान में हैं, जबकि लोथल भारत के गुजरात राज्य में स्थित एक महत्वपूर्ण हड़प्पाकालीन स्थल है।"
    },
    {
        question: "प्रश्न 33. भारत में खोजा गया सबसे पहला पुराना शहर कौन-सा था?",
        answers: shuffle([
            { text: "हड़प्पा", correct: true },
            { text: "पंजाब", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "सिंध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रिटिश भारत में, 1921 में खोजा गया हड़प्पा सबसे पहला शहर था, जिसके बाद इस पूरी सभ्यता का पता चला।"
    },
    {
        question: "प्रश्न 34. भारत में चाँदी की उपलब्धता के प्राचीनतम साक्ष्य मिलते हैं?",
        answers: shuffle([
            { text: "हड़प्पा संस्कृति में", correct: true },
            { text: "पश्चिमी भारत की ताम्रपाषाण संस्कृति में", correct: false },
            { text: "वैदिक संहिताओं में", correct: false },
            { text: "चाँदी के आहत मुद्राओं में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पावासी राजस्थान की जावर और अजमेर खानों से चाँदी प्राप्त करते थे और इसका उपयोग आभूषण बनाने में करते थे।"
    },
    {
        question: "प्रश्न 35. सिंधु सभ्यता के बारे में कौन-सा कथन असत्य है?",
        answers: shuffle([
            { text: "नगरों में नालियों की सुदृढ़ व्यवस्था थी", correct: false },
            { text: "व्यापार और वाणिज्य उन्नत दशा में था", correct: false },
            { text: "मातृदेवी की उपासना की जाती थी", correct: false },
            { text: "लोग लोहे से परिचित थे", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता एक कांस्य-युगीन सभ्यता थी।<br><br><i class='fa-solid fa-angles-right icon'></i> वे तांबा, कांसा, सोना, चाँदी से परिचित थे लेकिन लोहे का ज्ञान उन्हें नहीं था।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में लौह युग का आरंभ उत्तर-वैदिक काल (लगभग 1000 ई.पू.) में हुआ।"
    },
    {
        question: "प्रश्न 36. हड़प्पाकालीन स्थल रोपड़ किस नदी के किनारे स्थित था?",
        answers: shuffle([
            { text: "चेनाब", correct: false },
            { text: "सतलज", correct: true },
            { text: "सिंधु", correct: false },
            { text: "रावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोपड़ (आधुनिक रूपनगर) पंजाब में सतलज नदी के बाएँ तट पर स्थित एक महत्वपूर्ण हड़प्पा स्थल है।"
    },
    {
        question: "प्रश्न 37. हड़प्पा में एक उन्नत जल-प्रबंधन प्रणाली का पता चलता है?",
        answers: shuffle([
            { text: "धोलावीरा में", correct: true },
            { text: "लोथल में", correct: false },
            { text: "कालीबंगन में", correct: false },
            { text: "आलमगीरपुर में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात के धोलावीरा में वर्षा जल संचयन और प्रबंधन की एक अत्यंत उन्नत प्रणाली मिली है, जिसमें बड़े-बड़े जलाशय और नहरें शामिल थीं।"
    },
    {
        question: "प्रश्न 38. हड़प्पा के मिट्टी के बर्तनों पर सामान्यतः किस रंग का उपयोग हुआ था?",
        answers: shuffle([
            { text: "लाल", correct: true },
            { text: "नीला-हरा", correct: false },
            { text: "पांडु", correct: false },
            { text: "नीला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा के मृद्भांड (मिट्टी के बर्तन) लाल या गुलाबी रंग के होते थे, जिन पर काले रंग से विभिन्न प्रकार के डिजाइन और चित्र बनाए जाते थे।"
    },
    {
        question: "प्रश्न 39. सिंधु सभ्यता निम्नलिखित में से किस युग में पड़ता है?",
        answers: shuffle([
            { text: "ऐतिहासिक काल", correct: false },
            { text: "प्रागैतिहासिक काल", correct: false },
            { text: "उत्तर-प्रागैतिहासिक काल", correct: false },
            { text: "आद्य-ऐतिहासिक काल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आद्य-ऐतिहासिक काल उस काल को कहते हैं जिसमें लेखन कला का ज्ञान तो था, लेकिन उसे अभी तक पढ़ा नहीं जा सका है।<br><br><i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की लिपि अभी तक पढ़ी नहीं जा सकी है।"
    },
    {
        question: "प्रश्न 40. सिंधु घाटी सभ्यता की विकसित अवस्था में निम्नलिखित में से किस स्थल से घरों में कुओं के अवशेष मिले हैं?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "लोथल", correct: false },
            { text: "मोहनजोदड़ो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो के लगभग हर घर में निजी कुआँ और स्नानागार होता था, जो उनकी उन्नत जल आपूर्ति व्यवस्था का प्रमाण है।"
    },
    {
        question: "प्रश्न 41. सिंधु घाटी सभ्यता को खोज निकालने में जिन दो भारतीयों का नाम जुड़ा है, वे हैं?",
        answers: shuffle([
            { text: "दयाराम साहनी एवं राखालदास बनर्जी", correct: true },
            { text: "जॉन मार्शल एवं ईश्वरी प्रसाद", correct: false },
            { text: "आशीर्वादीलाल श्रीवास्तव एवं रंगनाथ राव", correct: false },
            { text: "माधोस्वरूप वत्स एवं वी.बी. राव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दयाराम साहनी ने 1921 में हड़प्पा की और राखालदास बनर्जी ने 1922 में मोहनजोदड़ो की खोज की थी।"
    },
    {
        question: "प्रश्न 42. रंगपुर जहाँ हड़प्पा की समकालीन सभ्यता थी, वह है?",
        answers: shuffle([
            { text: "पंजाब में", correct: false },
            { text: "उत्तर प्रदेश में", correct: false },
            { text: "सौराष्ट्र में", correct: true },
            { text: "राजस्थान में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रंगपुर गुजरात के सौराष्ट्र क्षेत्र में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से हड़प्पा सभ्यता के उत्तरकालीन चरण के साक्ष्य मिले हैं, जैसे धान की भूसी।"
    },
    {
        question: "प्रश्न 43. हड़प्पा एवं मोहनजोदड़ो की पुरातात्विक खुदाई के प्रभारी कौन थे?",
        answers: shuffle([
            { text: "लॉर्ड मैकाले", correct: false },
            { text: "सर जॉन मार्शल", correct: true },
            { text: "लॉर्ड क्लाइव", correct: false },
            { text: "कर्नल टॉड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर जॉन मार्शल 1902 से 1928 तक भारतीय पुरातत्व सर्वेक्षण विभाग के महानिदेशक थे और उन्हीं के निर्देशन में हड़प्पा और मोहनजोदड़ो का उत्खनन हुआ।"
    },
    {
        question: "प्रश्न 44. निम्न में से किस पशु की आकृति जो मुहर पर मिली है, जिससे ज्ञात होता है कि सिंधु घाटी एवं मेसोपोटामिया की सभ्यताओं के मध्य व्यापारिक संबंध थे?",
        answers: shuffle([
            { text: "घोड़ा", correct: false },
            { text: "गधा", correct: false },
            { text: "बैल", correct: true },
            { text: "हाथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसोपोटामिया की मुहरों पर सिंधु घाटी के कूबड़ वाले बैल की आकृतियाँ मिली हैं, जो दोनों सभ्यताओं के बीच व्यापारिक संबंधों को दर्शाती हैं।"
    },
    {
        question: "प्रश्न 45. सिंधु घाटी के लोग विश्वास करते थे?",
        answers: shuffle([
            { text: "आत्मा और ब्रह्म में", correct: false },
            { text: "कर्मकांड में", correct: false },
            { text: "यज्ञ प्रणाली में", correct: false },
            { text: "मातृशक्ति में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा से बड़ी संख्या में नारी की मृण्मूर्तियाँ (मिट्टी की मूर्तियाँ) मिली हैं, जिससे यह अनुमान लगाया जाता है कि वे मातृदेवी की पूजा करते थे और मातृशक्ति में विश्वास रखते थे।"
    },
    {
        question: "प्रश्न 46. निम्नलिखित में कौन-सा सिंधु स्थल समुद्र तट पर स्थित नहीं था?",
        answers: shuffle([
            { text: "सुरकोटदा", correct: false },
            { text: "लोथल", correct: false },
            { text: "बालाकोट", correct: false },
            { text: "कोटदीजी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुरकोटदा, लोथल और बालाकोट बंदरगाह नगर थे जो समुद्र तट पर स्थित थे, जबकि कोटदीजी सिंध प्रांत में सिंधु नदी के किनारे एक अंतर्देशीय स्थल था।"
    },
    {
        question: "प्रश्न 47. निम्नलिखित में से कौन मोहनजोदड़ो की सबसे बड़ी इमारत मानी जाती है?",
        answers: shuffle([
            { text: "विशाल स्नानागार", correct: false },
            { text: "विशाल अन्नागार/धान्य कोठार", correct: true },
            { text: "सभा भवन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो में मिला अन्नागार (अनाज का गोदाम) लगभग 45.71 मीटर लंबा और 15.23 मीटर चौड़ा था, जो वहाँ की सबसे बड़ी संरचना है।"
    },
    {
        question: "प्रश्न 48. हड़प्पाकालीन लोगों ने नगरों में घरों के विन्यास के लिए कौन-सी पद्धति अपनाई थी?",
        answers: shuffle([
            { text: "कमल पुष्प की आकृति का", correct: false },
            { text: "गोलाकार आकृति में", correct: false },
            { text: "ग्रिड पद्धति में", correct: true },
            { text: "त्रिभुजाकार आकृति में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पाकालीन नगरों में सड़कें एक-दूसरे को समकोण पर काटती थीं, जिससे नगर शतरंज के बोर्ड की तरह (ग्रिड पैटर्न) विभिन्न खंडों में विभाजित हो जाता था।"
    },
    {
        question: "प्रश्न 49. किस हड़प्पाकालीन स्थल से 'नृत्य मुद्रा वाली स्त्री' की कांस्य मूर्ति प्राप्त हुई है?",
        answers: shuffle([
            { text: "मोहनजोदड़ो से", correct: true },
            { text: "कालीबंगा से", correct: false },
            { text: "हड़प्पा से", correct: false },
            { text: "वणावली से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से प्राप्त कांसे की नर्तकी की मूर्ति हड़प्पाकालीन मूर्तिकला का एक उत्कृष्ट उदाहरण है, जो लुप्त-मोम (lost-wax) तकनीक से बनाई गई थी।"
    },
    {
        question: "प्रश्न 50. सिंधु सभ्यता के पतन के लिए 'विवर्तनिक विक्षोभ' (Tectonic Disturbance) का सिद्धांत किसने दिया?",
        answers: shuffle([
            { text: "आर. एल. राइक्स और डेल्स", correct: true },
            { text: "मॉर्टिमर व्हीलर", correct: false },
            { text: "जॉन मार्शल", correct: false },
            { text: "गार्डन चाइल्ड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस सिद्धांत के अनुसार, भूगर्भीय हलचलों (जैसे भूकंप) के कारण नदियों के मार्ग अवरुद्ध हो गए या उनमें बाढ़ आ गई, जो नगरों के विनाश का कारण बनी।"
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