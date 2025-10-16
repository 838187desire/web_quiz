const questions = [
    {
        topHeading: "सिंधु घाटी सभ्यता पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. किस सिंधुकालीन स्थल से एक ईंट पर बिल्ली का पीछा करते हुए कुत्ते के पंजों के निशान मिले हैं?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "चन्हूदड़ो", correct: true },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चन्हूदड़ो से प्राप्त एक कच्ची ईंट पर यह रोचक दृश्य अंकित मिला है, जो उनके सामान्य जीवन की झलक देता है।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से किस स्थान से युगल शवाधान/द्वि-शव संस्कार का प्रमाण मिला है?",
        answers: shuffle([
            { text: "कुंतासी", correct: false },
            { text: "धोलावीरा", correct: false },
            { text: "लोथल", correct: true },
            { text: "कालीबंगन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल से तीन युगल समाधियों के साक्ष्य मिले हैं, जहाँ स्त्री और पुरुष को एक साथ दफनाया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सती प्रथा की ओर भी संकेत करता है, यद्यपि यह निश्चित नहीं है।"
    },
    {
        question: "प्रश्न 3. कपास का उत्पादन सर्वप्रथम सिंधु क्षेत्र में हुआ, जिसे ग्रीक या यूनान के लोग किस नाम से पुकारते थे?",
        answers: shuffle([
            { text: "सिन्डन", correct: true },
            { text: "कॉटन", correct: false },
            { text: "'a' और 'b' दोनों", correct: false },
            { text: "हड़प्पा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु क्षेत्र में कपास के उत्पादन के कारण यूनानी लोग इसे 'सिन्डन' कहते थे, जो 'सिंधु' शब्द से ही व्युत्पन्न है।"
    },
    {
        question: "प्रश्न 4. हड़प्पा के काल का 'ताँबे का रथ' किस स्थान से प्राप्त हुआ है?",
        answers: shuffle([
            { text: "कुणाल", correct: false },
            { text: "राखीगढ़ी", correct: false },
            { text: "दैमाबाद", correct: true },
            { text: "वणावली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र के दैमाबाद से तांबे की बनी कई वस्तुएं मिली हैं, जिनमें एक रथ चलाते हुए मनुष्य की आकृति सबसे प्रसिद्ध है।"
    },
    {
        question: "प्रश्न 5. सिंधु लिपि को लिखने की पद्धति क्या थी?",
        answers: shuffle([
            { text: "बाएं से दाएं", correct: false },
            { text: "दाएं से बाएं", correct: false },
            { text: "ऊपर से नीचे", correct: false },
            { text: "बूस्ट्रोफेडन (Boustrophedon)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि सिंधु लिपि पहली पंक्ति में दाएं से बाएं और दूसरी पंक्ति में बाएं से दाएं लिखी जाती थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इस शैली को बूस्ट्रोफेडन कहा जाता है।"
    },
    {
        question: "प्रश्न 6. हड़प्पावासी लाजवर्द (Lapiz Lazuli) का आयात कहाँ से करते थे?",
        answers: shuffle([
            { text: "हिन्दुकुश क्षेत्र के बदख्शां से", correct: true },
            { text: "ईरान से", correct: false },
            { text: "दक्षिण भारत से", correct: false },
            { text: "बलूचिस्तान से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाजवर्द एक कीमती नीले रंग का पत्थर था, जिसका आयात मुख्य रूप से अफगानिस्तान के बदख्शां क्षेत्र से किया जाता था।"
    },
    {
        question: "प्रश्न 7. अफगानिस्तान स्थित सिंधु सभ्यता से संबंधित स्थल कौन-सा है?",
        answers: shuffle([
            { text: "मुंडीगाक", correct: false },
            { text: "शोर्तुघई", correct: false },
            { text: "'a' और 'b' दोनों", correct: true },
            { text: "हड़प्पा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंडीगाक और शोर्तुघई अफगानिस्तान में स्थित सिंधु सभ्यता की व्यापारिक बस्तियाँ थीं।"
    },
    {
        question: "प्रश्न 8. कौन-कौन से नगर सिंधु सभ्यता के बंदरगाह नगर थे?",
        answers: shuffle([
            { text: "लोथल एवं सुत्कागेंडोर", correct: false },
            { text: "अल्लाहदीनो एवं बालाकोट", correct: false },
            { text: "कुंतासी", correct: false },
            { text: "इनमें से सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी स्थल बंदरगाह के रूप में कार्य करते थे, जो सिंधु सभ्यता के समुद्री व्यापार में महत्वपूर्ण भूमिका निभाते थे।"
    },
    {
        question: "प्रश्न 9. मोहनजोदड़ो से प्राप्त पशुपति शिव/आद्य-शिव मुहर में किन-किन जानवरों का अंकन हुआ है?",
        answers: shuffle([
            { text: "व्याघ्र एवं हाथी", correct: false },
            { text: "गैंडा एवं भैंसा", correct: false },
            { text: "हिरण", correct: false },
            { text: "इनमें से सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पशुपति मुहर पर एक योगी के चारों ओर हाथी, बाघ, गैंडा और भैंसा विराजमान हैं, जबकि आसन के नीचे दो हिरण दिखाए गए हैं।"
    },
    {
        question: "प्रश्न 10. चन्हूदड़ो के उत्खनन का निर्देशन किसने किया था?",
        answers: shuffle([
            { text: "जे. एच. मैके ने", correct: true },
            { text: "सर जॉन मार्शल ने", correct: false },
            { text: "आर. ई. एम. व्हीलर ने", correct: false },
            { text: "सर ऑरेल स्टीन ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चन्हूदड़ो का उत्खनन कार्य 1935-36 में अर्नेस्ट जे. एच. मैके के निर्देशन में किया गया था।"
    },
    {
        question: "प्रश्न 11. सिंधु घाटी (हड़प्पा) के लिए 'मेसोपोटामियाई' रिकार्डों में निम्नलिखित में से किस शब्द का प्रयोग किया गया था?",
        answers: shuffle([
            { text: "पिलमुन", correct: false },
            { text: "दिलमुन", correct: false },
            { text: "मेलुहा", correct: true },
            { text: "मेगन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसोपोटामिया के अभिलेखों में 'मेलुहा' नामक स्थान का जिक्र है, जिसकी पहचान सिंधु घाटी क्षेत्र से की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> दिलमुन और माकन मध्यवर्ती व्यापारिक केंद्र थे।"
    },
    {
        question: "प्रश्न 12. निम्नलिखित में से कौन सा एक हड़प्पा स्थल नहीं है?",
        answers: shuffle([
            { text: "चन्हूदड़ो", correct: false },
            { text: "कोटदीजी", correct: false },
            { text: "सोहगौरा", correct: true },
            { text: "देसलपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोहगौरा उत्तर प्रदेश के गोरखपुर में स्थित एक मौर्यकालीन ताम्रपत्र अभिलेख स्थल है, इसका संबंध हड़प्पा सभ्यता से नहीं है।"
    },
    {
        question: "प्रश्न 13. हड़प्पा संस्कृति के संदर्भ में, शैलकृत स्थापत्य (Rock-cut architecture) के प्रमाण कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "कालीबंगा", correct: false },
            { text: "धोलावीरा", correct: true },
            { text: "कोटदीजी", correct: false },
            { text: "आमरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धोलावीरा में पत्थरों को काटकर बनाए गए विशाल जलाशय मिले हैं, जो शैलकृत स्थापत्य का एक उत्कृष्ट उदाहरण हैं।"
    },
    {
        question: "प्रश्न 14. हड़प्पावासी किस धातु से परिचित नहीं थे?",
        answers: shuffle([
            { text: "सोना एवं चाँदी", correct: false },
            { text: "ताँबा एवं कांसा", correct: false },
            { text: "टिन एवं सीसा", correct: false },
            { text: "लोहा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा सभ्यता कांस्य युगीन थी।<br><br><i class='fa-solid fa-angles-right icon'></i> लोहे का प्रयोग भारत में लगभग 1000 ई.पू. के आसपास शुरू हुआ, जो हड़प्पा के पतन के बाद का समय है।"
    },
    {
        question: "प्रश्न 15. निम्नलिखित में से किस स्थल से घरों के दरवाजों का मुख्य सड़क की ओर खुलने का अपवाद मिलता है?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: true },
            { text: "कालीबंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्यतः हड़प्पाकालीन घरों के दरवाजे और खिड़कियाँ मुख्य सड़क पर न खुलकर गलियों में खुलते थे, लेकिन लोथल इसका अपवाद है, जहाँ दरवाजे मुख्य सड़क की ओर खुलते थे।"
    },
    {
        question: "प्रश्न 16. सिंधु घाटी सभ्यता की लिपि कौन-सी थी?",
        answers: shuffle([
            { text: "तमिल", correct: false },
            { text: "खरोष्ठी", correct: false },
            { text: "अज्ञात", correct: true },
            { text: "ब्राह्मी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी सभ्यता की लिपि भाव-चित्रात्मक (Pictographic) थी, जिसमें लगभग 400 चिह्न हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे आज तक पढ़ा नहीं जा सका है, इसलिए यह अज्ञात है।"
    },
    {
        question: "प्रश्न 17. सिंधु लिपि को लिखने की पद्धति क्या थी?",
        answers: shuffle([
            { text: "बाएं से दाएं", correct: false },
            { text: "दाएं से बाएं", correct: false },
            { text: "ऊपर से नीचे", correct: false },
            { text: "बूस्ट्रोफेडन (Boustrophedon)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि सिंधु लिपि पहली पंक्ति में दाएं से बाएं और दूसरी पंक्ति में बाएं से दाएं लिखी जाती थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इस शैली को बूस्ट्रोफेडन कहा जाता है।"
    },
    {
        question: "प्रश्न 18. एक उन्नत जल निकासी व्यवस्था का साक्ष्य प्राप्त हुआ है?",
        answers: shuffle([
            { text: "मोहनजोदड़ो से", correct: false },
            { text: "लोथल से", correct: false },
            { text: "धोलावीरा से", correct: false },
            { text: " सभी से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लगभग सभी प्रमुख नगरों में उन्नत जल निकासी व्यवस्था थी, जिसमें ढकी हुई नालियाँ और मेनहोल शामिल थे।<br><br><i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो और धोलावीरा इसके सर्वोत्तम उदाहरण हैं।"
    },
    {
        question: "प्रश्न 19. निम्नलिखित में से कौन-सा स्थल घग्घर और उसकी सहायक नदियों की घाटी में स्थित है?",
        answers: shuffle([
            { text: "आलमगीरपुर", correct: false },
            { text: "लोथल", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "वणावली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरियाणा का वणावली (बनवाली) प्राचीन सरस्वती (आधुनिक घग्घर) नदी की घाटी में स्थित था।"
    },
    {
        question: "प्रश्न 20. सिंधु घाटी के लोग किसकी पूजा करते थे?",
        answers: shuffle([
            { text: "पशुपति", correct: false },
            { text: "मातृदेवी", correct: false },
            { text: "वृक्ष एवं पशु", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साक्ष्यों के आधार पर यह माना जाता है कि सिंधु घाटी के लोग पशुपति (शिव), मातृदेवी, पीपल जैसे वृक्षों और कूबड़ वाले बैल जैसे पशुओं की पूजा करते थे।"
    },
    {
        question: "प्रश्न 21. हड़प्पा सभ्यता के पतन का सबसे प्रमुख कारण किसे माना जाता है?",
        answers: shuffle([
            { text: "आर्यों का आक्रमण", correct: false },
            { text: "बाढ़", correct: false },
            { text: "जलवायु परिवर्तन", correct: false },
            { text: "विभिन्न कारणों का संयोजन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि आर्य आक्रमण, बाढ़ और जलवायु परिवर्तन जैसे सिद्धांत दिए गए हैं, लेकिन अधिकांश विद्वान मानते हैं कि इस महान सभ्यता का पतन किसी एक कारण से नहीं बल्कि कई कारणों के संयुक्त प्रभाव से हुआ।"
    },
    {
        question: "प्रश्न 22. किस विद्वान ने हड़प्पा सभ्यता के पतन के लिए 'आर्यों के आक्रमण' को उत्तरदायी ठहराया?",
        answers: shuffle([
            { text: "सर जॉन मार्शल", correct: false },
            { text: "मॉर्टिमर व्हीलर", correct: true },
            { text: "जॉर्ज एफ. डेल्स", correct: false },
            { text: "आर. एल. स्टाइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मॉर्टिमर व्हीलर ने मोहनजोदड़ो से मिले कुछ नरकंकालों और ऋग्वेद में इंद्र को 'पुरंदर' (किलों को नष्ट करने वाला) कहे जाने के आधार पर आर्य आक्रमण का सिद्धांत दिया था, जो अब मान्य नहीं है।"
    },
    {
        question: "प्रश्न 23. हड़प्पा सभ्यता के किस स्थल से एक मानव के साथ बकरे को दफनाए जाने का साक्ष्य मिला है?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: true },
            { text: "कालीबंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल की एक कब्र में मानव कंकाल के साथ बकरे के अवशेष मिले हैं, जो पारलौकिक जीवन में विश्वास और बलि प्रथा का संकेत हो सकता है।"
    },
    {
        question: "प्रश्न 24. सिंधु सभ्यता का उत्तरी सीमा स्थल 'मांदा' किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "झेलम", correct: false },
            { text: "चेनाब", correct: true },
            { text: "रावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जम्मू-कश्मीर में स्थित मांदा, सिंधु सभ्यता का सबसे उत्तरी स्थल है, जो चेनाब नदी के दक्षिणी किनारे पर है।"
    },
    {
        question: "प्रश्न 25. सिंधु सभ्यता का दक्षिणी सीमा स्थल 'दैमाबाद' किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "प्रवरा", correct: true },
            { text: "नर्मदा", correct: false },
            { text: "ताप्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र के अहमदनगर जिले में स्थित दैमाबाद, सिंधु सभ्यता का सबसे दक्षिणी स्थल है, जो गोदावरी की सहायक नदी प्रवरा के किनारे स्थित है।"
    },
    {
        question: "प्रश्न 26. हड़प्पाकालीन स्थल 'आलमगीरपुर' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "हरियाणा", correct: false },
            { text: "पंजाब", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलमगीरपुर सिंधु सभ्यता का सबसे पूर्वी स्थल है, जो उत्तर प्रदेश के मेरठ जिले में हिंडन नदी के किनारे स्थित है।"
    },
    {
        question: "प्रश्न 27. हड़प्पाकालीन मुहरों पर सबसे अधिक किस पशु का अंकन मिलता है?",
        answers: shuffle([
            { text: "एकश्रृंगी पशु (यूनिकॉर्न)", correct: true },
            { text: "कूबड़ वाला बैल", correct: false },
            { text: "हाथी", correct: false },
            { text: "बाघ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की मुहरों पर सबसे अधिक संख्या में एक सींग वाले काल्पनिक पशु (यूनिकॉर्न) का चित्रण मिलता है।"
    },
    {
        question: "प्रश्न 28. मनका (Bead) बनाने का कारखाना कहाँ से मिला है?",
        answers: shuffle([
            { text: "a) लोथल", correct: false },
            { text: "b) चन्हूदड़ो", correct: false },
            { text: "'a' और 'b' दोनों", correct: true },
            { text: "कालीबंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और चन्हूदड़ो दोनों ही मनका बनाने के प्रमुख केंद्र थे, जहाँ से कार्नेलियन जैसे कीमती पत्थरों के मनके बनाए जाते थे।"
    },
    {
        question: "प्रश्न 29. किस हड़प्पा स्थल को 'लघु हड़प्पा' या 'लघु मोहनजोदड़ो' भी कहा जाता है?",
        answers: shuffle([
            { text: "कालीबंगा", correct: false },
            { text: "धोलावीरा", correct: false },
            { text: "रंगपुर", correct: false },
            { text: "लोथल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल की नगर योजना, बंदरगाह और अन्य संरचनाएं हड़प्पा और मोहनजोदड़ो से काफी मिलती-जुलती थीं, जिस कारण इसे 'लघु हड़प्पा' भी कहा जाता है।"
    },
    {
        question: "प्रश्न 30. स्वतंत्रता प्राप्ति के पश्चात भारत के किस राज्य में सबसे अधिक संख्या में हड़प्पाकालीन स्थलों की खोज हुई है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "हरियाणा", correct: false },
            { text: "गुजरात", correct: true },
            { text: "पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आजादी के बाद गुजरात में बड़ी संख्या में हड़प्पाकालीन स्थलों का पता चला है, जिनमें लोथल, धोलावीरा, सुरकोटदा और रंगपुर प्रमुख हैं।"
    },
    {
        question: "प्रश्न 31. सिंधु घाटी के लोग किस फल को पसंद करते थे?",
        answers: shuffle([
            { text: "केला", correct: false },
            { text: "अनार", correct: false },
            { text: "खजूर", correct: true },
            { text: "आम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक साक्ष्यों में खजूर की गुठलियाँ मिली हैं, जिससे अनुमान लगाया जाता है कि खजूर उनके आहार का हिस्सा था।"
    },
    {
        question: "प्रश्न 32. हड़प्पा सभ्यता में पवित्र पक्षी कौन सा था?",
        answers: shuffle([
            { text: "मोर", correct: false },
            { text: "कबूतर (फाख्ता)", correct: true },
            { text: "कौआ", correct: false },
            { text: "तोता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई मुहरों और मृद्भांडों पर फाख्ता नामक पक्षी का अंकन मिलता है, जिसे वे पवित्र मानते थे।"
    },
    {
        question: "प्रश्न 33. सिंधु घाटी सभ्यता में शवों को दफनाने की कौन सी प्रथा प्रचलित थी?",
        answers: shuffle([
            { text: "पूर्ण समाधिकरण", correct: false },
            { text: "आंशिक समाधिकरण", correct: false },
            { text: "दाह संस्कार", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में शवों के अंतिम संस्कार की तीनों विधियाँ - पूर्ण समाधिकरण (पूरा दफनाना), आंशिक समाधिकरण (पशु-पक्षियों के खाने के बाद बचे अवशेषों को दफनाना) और दाह संस्कार (जलाने के बाद राख को दफनाना) प्रचलित थीं।"
    },
    {
        question: "प्रश्न 34. हड़प्पा सभ्यता के किस स्थल का निचला शहर भी किले से घिरा हुआ था?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "कालीबंगा", correct: true },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्यतः केवल दुर्ग (ऊपरी शहर) ही किलेबंद होता था, लेकिन कालीबंगा में दुर्ग और निचला शहर दोनों अलग-अलग रक्षा प्राचीरों से घिरे हुए थे।"
    },
    {
        question: "प्रश्न 35. 'स्वास्तिक' चिह्न किस सभ्यता की देन माना जाता है?",
        answers: shuffle([
            { text: "वैदिक सभ्यता", correct: false },
            { text: "सिंधु घाटी सभ्यता", correct: true },
            { text: "मेसोपोटामिया की सभ्यता", correct: false },
            { text: "मिस्र की सभ्यता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी से प्राप्त कई मुहरों पर स्वास्तिक चिह्न का अंकन मिला है, जिससे यह अनुमान लगाया जाता है कि यह चिह्न संभवतः हड़प्पा सभ्यता की देन है।"
    },
    {
        question: "प्रश्न 36. सिंधु सभ्यता के लोग माप-तौल में किस संख्या के गुणकों का प्रयोग करते थे?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "12", correct: false },
            { text: "16", correct: true },
            { text: "20", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा सभ्यता में तौल की इकाई संभवतः 16 के अनुपात में थी, जैसे 16, 64, 160, 320 आदि।"
    },
    {
        question: "प्रश्न 37. किस पशु के अवशेष सिंधु घाटी सभ्यता में प्राप्त नहीं हुए हैं?",
        answers: shuffle([
            { text: "शेर", correct: true },
            { text: "घोड़ा", correct: false },
            { text: "गाय", correct: false },
            { text: "हाथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि बाघ का अंकन मुहरों पर मिलता है, लेकिन सिंधु घाटी सभ्यता के किसी भी स्थल से शेर के अवशेष या अंकन प्राप्त नहीं हुए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> घोड़े के अवशेष सुरकोटदा से मिले हैं, लेकिन इसका व्यापक प्रचलन नहीं था।"
    },
    {
        question: "प्रश्न 38. हड़प्पा सभ्यता के अंतर्गत शल्य चिकित्सा का साक्ष्य कहाँ से मिलता है?",
        answers: shuffle([
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: true },
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगा से एक बच्चे की खोपड़ी मिली है जिसमें छेद हैं, जो शल्य चिकित्सा (सर्जरी) या किसी कर्मकांड का संकेत देते हैं।"
    },
    {
        question: "प्रश्न 39. हड़प्पाकालीन लोगों का मुख्य खाद्यान्न क्या था?",
        answers: shuffle([
            { text: "चावल और मक्का", correct: false },
            { text: "गेहूँ और जौ", correct: true },
            { text: "दालें और बाजरा", correct: false },
            { text: "केवल फल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गेहूँ और जौ सिंधु घाटी के लोगों के मुख्य खाद्यान्न थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अलावा वे मटर, तिल और सरसों भी उगाते थे।"
    },
    {
        question: "प्रश्न 40. सिंधु घाटी सभ्यता के विनाश का एक प्रभावी कारण 'पारिस्थितिक असंतुलन' को किसने माना?",
        answers: shuffle([
            { text: "a) रॉबर्ट राइक्स", correct: false },
            { text: "b) फेयरसर्विस", correct: false },
            { text: "c) एम. आर. साहनी", correct: false },
            { text: "'a' और 'b' दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फेयरसर्विस और रॉबर्ट राइक्स जैसे विद्वानों ने यह मत प्रस्तुत किया कि वनों की कटाई और संसाधनों के अत्यधिक दोहन से पारिस्थितिक असंतुलन पैदा हुआ, जो सभ्यता के पतन का कारण बना।"
    },
    {
        question: "प्रश्न 41. सिंधु घाटी के लोग किस प्रकार के वस्त्रों का उपयोग करते थे?",
        answers: shuffle([
            { text: "केवल ऊनी", correct: false },
            { text: "केवल सूती", correct: false },
            { text: "सूती और ऊनी दोनों", correct: true },
            { text: "रेशमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपास की खेती के कारण सूती वस्त्र प्रमुख थे, लेकिन मोहनजोदड़ो से मिले पुरोहित के मूर्ति पर शॉल जैसा वस्त्र और जलवायु को देखते हुए ऊनी वस्त्रों के प्रयोग का भी अनुमान लगाया जाता है।"
    },
    {
        question: "प्रश्न 42. टेराकोटा का हल (मिट्टी का बना हल) कहाँ से प्राप्त हुआ है?",
        answers: shuffle([
            { text: "धोलावीरा", correct: false },
            { text: "वणावली", correct: true },
            { text: "कालीबंगा", correct: false },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरियाणा के वणावली (बनवाली) से मिट्टी का बना हुआ एक खिलौना-हल मिला है, जो इस बात का प्रमाण है कि वे हल का प्रयोग कृषि में करते थे।"
    },
    {
        question: "प्रश्न 43. सिंधु सभ्यता में 'दुर्ग' का क्या उद्देश्य था?",
        answers: shuffle([
            { text: "केवल शासक वर्ग का निवास", correct: false },
            { text: "उच्च वर्ग का निवास और सार्वजनिक महत्व के भवन", correct: true },
            { text: "केवल अनाज भंडारण", correct: false },
            { text: "केवल धार्मिक अनुष्ठान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्ग (Citadel) नगर के पश्चिमी भाग में एक ऊँचे टीले पर बना होता था, जहाँ संभवतः शासक वर्ग या पुरोहित रहते थे और विशाल स्नानागार तथा अन्नागार जैसे महत्वपूर्ण सार्वजनिक भवन स्थित होते थे।"
    },
    {
        question: "प्रश्न 44. हड़प्पा सभ्यता में प्रयुक्त ईंटों का अनुपात क्या था?",
        answers: shuffle([
            { text: "1:2:3", correct: false },
            { text: "1:2:4", correct: true },
            { text: "1:3:5", correct: false },
            { text: "2:3:4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा सभ्यता में प्रयुक्त ईंटें मानकीकृत थीं, जिनकी मोटाई, चौड़ाई और लंबाई का अनुपात सामान्यतः 1:2:4 होता था।"
    },
    {
        question: "प्रश्न 45. राखीगढ़ी, भारत का सबसे बड़ा हड़प्पाकालीन स्थल, किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "हरियाणा", correct: true },
            { text: "पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राखीगढ़ी हरियाणा के हिसार जिले में स्थित है और क्षेत्रफल की दृष्टि से यह भारतीय उपमहाद्वीप में धोलावीरा और मोहनजोदड़ो से भी बड़ा स्थल माना जा रहा है।"
    },
    {
        question: "प्रश्न 46. किस स्थल पर एक साइनबोर्ड (सूचना-पट्ट) का साक्ष्य मिला है?",
        answers: shuffle([
            { text: "लोथल", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "धोलावीरा", correct: true },
            { text: "राखीगढ़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धोलावीरा के उत्तरी द्वार के पास एक लकड़ी के तख्ते पर जिप्सम से बने दस बड़े अक्षरों वाला एक अभिलेख मिला है, जिसे विश्व का पहला साइनबोर्ड माना जाता है।"
    },
    {
        question: "प्रश्न 47. सिंधु सभ्यता का वह एकमात्र स्थल कौन सा है, जो तीन भागों में विभाजित था?",
        answers: shuffle([
            { text: "मोहनजोदड़ो", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "लोथल", correct: false },
            { text: "धोलावीरा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अन्य नगर सामान्यतः दो भागों (दुर्ग और निचला शहर) में विभाजित थे, लेकिन धोलावीरा तीन भागों में विभाजित था - किला (दुर्ग), मध्य नगर और निचला नगर।"
    },
    {
        question: "प्रश्न 48. फारस की खाड़ी की मुहरें किस हड़प्पा स्थल से मिली हैं?",
        answers: shuffle([
            { text: "रंगपुर", correct: false },
            { text: "रोपड़", correct: false },
            { text: "लोथल", correct: true },
            { text: "मोहनजोदड़ो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल से बटन के आकार की एक गोलाकार मुहर मिली है, जो फारस की खाड़ी क्षेत्र (बहरीन) की है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लोथल के अंतरराष्ट्रीय व्यापार का प्रमाण है।"
    },
    {
        question: "प्रश्न 49. हड़प्पा के लोग किस खेल में रुचि रखते थे?",
        answers: shuffle([
            { text: "कबड्डी", correct: false },
            { text: "शतरंज (पासा)", correct: true },
            { text: "घुड़सवारी", correct: false },
            { text: "कुश्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्खनन में पासे और शतरंज की बिसात जैसी आकृतियाँ मिली हैं, जिससे अनुमान लगाया जाता है कि वे पासे का खेल खेलते थे, जो आधुनिक शतरंज का पूर्वज हो सकता है।"
    },
    {
        question: "प्रश्न 50. हड़प्पाकालीन अर्थव्यवस्था का मूल आधार क्या था?",
        answers: shuffle([
            { text: "कृषि अधिशेष और व्यापार", correct: true },
            { text: "केवल पशुपालन", correct: false },
            { text: "केवल शिकार", correct: false },
            { text: "सैन्य विजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पावासी उन्नत कृषि करते थे, जिससे अनाज का अधिशेष उत्पादन होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी अधिशेष ने व्यापार, शिल्प और शहरीकरण को आधार प्रदान किया।"
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