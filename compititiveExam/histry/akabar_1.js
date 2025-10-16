const questions = [
    {
        topHeading: "अकबर पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. अकबर का पूरा नाम क्या था?",
        answers: shuffle([
            { text: "जहीरुद्दीन मुहम्मद अकबर", correct: false },
            { text: "नसीरुद्दीन मुहम्मद अकबर", correct: false },
            { text: "जलालुद्दीन मुहम्मद अकबर", correct: true },
            { text: "शम्सुद्दीन मुहम्मद अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर का पूरा नाम अबुल-फतह जलालुद्दीन मुहम्मद अकबर था।"
    },
    {
        question: "प्रश्न 2. अकबर का जन्म कब और कहाँ हुआ था?",
        answers: shuffle([
            { text: "1540, काबुल", correct: false },
            { text: "1542, अमरकोट", correct: true },
            { text: "1545, आगरा", correct: false },
            { text: "1541, सिंध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब हुमायूँ शेरशाह से हारकर निर्वासित जीवन जी रहा था, तब 15 अक्टूबर 1542 को सिंध के अमरकोट में राणा वीर साल के महल में अकबर का जन्म हुआ।"
    },
    {
        question: "प्रश्न 3. अकबर की माँ का क्या नाम था?",
        answers: shuffle([
            { text: "हाजी बेगम", correct: false },
            { text: "महाम अनगा", correct: false },
            { text: "हमीदा बानो बेगम", correct: true },
            { text: "चाँद बीबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमीदा बानो बेगम हुमायूँ की पत्नी और अकबर की माँ थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे एक शिया मीर बाबा दोस्त की पुत्री थीं।"
    },
    {
        question: "प्रश्न 4. हुमायूँ की मृत्यु के समय अकबर कहाँ था?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "कलानौर, पंजाब", correct: true },
            { text: "काबुल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने पिता हुमायूँ की मृत्यु के समय, अकबर अपने संरक्षक बैरम खान के साथ पंजाब में अफगान विद्रोही सिकंदर सूर के खिलाफ एक सैन्य अभियान पर था।"
    },
    {
        question: "प्रश्न 5. अकबर का राज्याभिषेक किस स्थान पर हुआ था?",
        answers: shuffle([
            { text: "दिल्ली का लाल किला", correct: false },
            { text: "आगरा का किला", correct: false },
            { text: "फतेहपुर सीकरी", correct: false },
            { text: "कलानौर, गुरदासपुर (पंजाब)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 14 फरवरी 1556 को, मात्र 13 वर्ष 4 महीने की आयु में, बैरम खान ने पंजाब के कलानौर नामक स्थान पर ईंटों का एक सिंहासन बनाकर अकबर का राज्याभिषेक कर दिया।"
    },
    {
        question: "प्रश्न 6. अकबर का प्रारंभिक संरक्षक कौन था?",
        answers: shuffle([
            { text: "मुनीम खान", correct: false },
            { text: "आसफ खान", correct: false },
            { text: "बैरम खान", correct: true },
            { text: "राजा टोडर मल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैरम खान एक कुशल सेनापति और हुमायूँ का वफादार साथी था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अकबर के शुरुआती शासन (1556-1560) में संरक्षक ('खान-ए-खाना') के रूप में मुगल सत्ता को संभाला और मजबूत किया।"
    },
    {
        question: "प्रश्न 7. पानीपत का द्वितीय युद्ध कब हुआ था?",
        answers: shuffle([
            { text: "5 नवंबर, 1556", correct: true },
            { text: "21 अप्रैल, 1526", correct: false },
            { text: "18 जून, 1576", correct: false },
            { text: "5 मार्च, 1560", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध मुगल सेना और आदिल शाह सूर के हिंदू सेनापति हेमचंद्र विक्रमादित्य (हेमू) के बीच लड़ा गया था।"
    },
    {
        question: "प्रश्न 8. पानीपत के द्वितीय युद्ध में मुगल सेना का नेतृत्व किसने किया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "हुमायूँ", correct: false },
            { text: "बैरम खान", correct: true },
            { text: "राजा मान सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस युद्ध में अकबर स्वयं उपस्थित था, लेकिन सेना का वास्तविक नेतृत्व उसके संरक्षक बैरम खान ने किया था।"
    },
    {
        question: "प्रश्न 9. पानीपत का द्वितीय युद्ध किसके बीच हुआ था?",
        answers: shuffle([
            { text: "अकबर और राणा प्रताप", correct: false },
            { text: "अकबर और शेरशाह सूरी", correct: false },
            { text: "अकबर और हेमू", correct: true },
            { text: "बाबर और इब्राहिम लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध मुगल साम्राज्य और हेमू के बीच दिल्ली के सिंहासन के लिए एक निर्णायक संघर्ष था, जिसमें हेमू की हार हुई।"
    },
    {
        question: "प्रश्न 10. दिल्ली के सिंहासन पर बैठने वाला अंतिम हिंदू शासक कौन था, जिसने 'विक्रमादित्य' की उपाधि धारण की?",
        answers: shuffle([
            { text: "महाराणा प्रताप", correct: false },
            { text: "शिवाजी", correct: false },
            { text: "राणा सांगा", correct: false },
            { text: "हेमचंद्र (हेमू)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेमू ने आगरा और दिल्ली पर अधिकार करने के बाद स्वयं को 'राजा विक्रमादित्य' की उपाधि से सुशोभित किया था।"
    },
    {
        question: "प्रश्न 11. अकबर ने मालवा पर विजय कब प्राप्त की?",
        answers: shuffle([
            { text: "1560", correct: false },
            { text: "1561", correct: true },
            { text: "1562", correct: false },
            { text: "1564", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1561 में, अकबर ने आधम खान के नेतृत्व में सेना भेजकर मालवा के शासक बाज बहादुर को पराजित किया।"
    },
    {
        question: "प्रश्न 12. मालवा के शासक बाज बहादुर किस कला में निपुण थे?",
        answers: shuffle([
            { text: "चित्रकला", correct: false },
            { text: "वास्तुकला", correct: false },
            { text: "संगीतकला", correct: true },
            { text: "मूर्तिकला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाज बहादुर और उनकी पत्नी रानी रूपमती दोनों ही संगीत और कविता के महान प्रेमी और विशेषज्ञ थे।"
    },
    {
        question: "प्रश्न 13. अकबर ने गोंडवाना (गढ़कटंगा) पर विजय कब प्राप्त की?",
        answers: shuffle([
            { text: "1561", correct: false },
            { text: "1564", correct: true },
            { text: "1568", correct: false },
            { text: "1572", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने आसफ खान के नेतृत्व में सेना भेजकर गोंडवाना पर आक्रमण किया, जहाँ की शासिका रानी दुर्गावती थीं।"
    },
    {
        question: "प्रश्न 14. गोंडवाना की कौन सी वीर हिंदू रानी ने मुगलों के खिलाफ लड़ते हुए अपने प्राण त्याग दिए?",
        answers: shuffle([
            { text: "रानी कर्णावती", correct: false },
            { text: "रानी पद्मिनी", correct: false },
            { text: "रानी दुर्गावती", correct: true },
            { text: "रानी लक्ष्मीबाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंदेल राजकुमारी रानी दुर्गावती ने अपने अल्पायु पुत्र वीर नारायण की संरक्षिका के रूप में शासन किया और मुगल सेना के खिलाफ वीरतापूर्वक लड़ते हुए आत्महत्या कर ली।"
    },
    {
        question: "प्रश्न 15. अकबर ने चित्तौड़गढ़ के किले पर कब विजय प्राप्त की?",
        answers: shuffle([
            { text: "1564", correct: false },
            { text: "1568", correct: true },
            { text: "1572", correct: false },
            { text: "1576", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक लंबी और कठिन घेराबंदी के बाद, अकबर ने 1568 में मेवाड़ की राजधानी चित्तौड़गढ़ पर अधिकार कर लिया।"
    },
    {
        question: "प्रश्न 16. चित्तौड़ के तीसरे साके के समय वहाँ का शासक कौन था?",
        answers: shuffle([
            { text: "महाराणा प्रताप", correct: false },
            { text: "राणा सांगा", correct: false },
            { text: "राणा उदय सिंह", correct: true },
            { text: "राणा कुंभा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आक्रमण के समय, राणा उदय सिंह किले की रक्षा का भार अपने सेनापतियों जयमल और पत्ता को सौंपकर अरावली की पहाड़ियों में चले गए थे।"
    },
    {
        question: "प्रश्न 17. अकबर ने किन दो राजपूत वीरों की वीरता से प्रभावित होकर आगरा के किले के द्वार पर उनकी हाथी पर सवार मूर्तियाँ स्थापित करवाईं?",
        answers: shuffle([
            { text: "राणा प्रताप और मान सिंह", correct: false },
            { text: "जयमल और पत्ता", correct: true },
            { text: "उदय सिंह और भगवान दास", correct: false },
            { text: "आल्हा और ऊदल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चित्तौड़ की रक्षा में जयमल और फत्ता (पत्ता) द्वारा दिखाए गए अदम्य साहस से अकबर इतना प्रभावित हुआ कि उसने उनके सम्मान में ये मूर्तियाँ बनवाईं।"
    },
    {
        question: "प्रश्न 18. अकबर ने रणथंभौर और कालिंजर के किलों पर कब अधिकार किया?",
        answers: shuffle([
            { text: "1568", correct: false },
            { text: "1569", correct: true },
            { text: "1570", correct: false },
            { text: "1571", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चित्तौड़ विजय के बाद, 1569 में अकबर ने रणथंभौर के शासक सुरजन हाड़ा और कालिंजर के शासक रामचंद्र को आत्मसमर्पण के लिए विवश कर दिया।"
    },
    {
        question: "प्रश्न 19. अकबर ने गुजरात पर विजय कब प्राप्त की?",
        answers: shuffle([
            { text: "1569", correct: false },
            { text: "1571", correct: false },
            { text: "1572", correct: true },
            { text: "1576", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात अपनी समृद्धि और बंदरगाहों के कारण बहुत महत्वपूर्ण था।<br><br><i class='fa-solid fa-angles-right icon'></i> अकबर ने 1572 में इसे जीतकर मुगल साम्राज्य में मिला लिया।"
    },
    {
        question: "प्रश्न 20. अकबर ने पहली बार समुद्र कहाँ देखा था?",
        answers: shuffle([
            { text: "बंगाल की खाड़ी में", correct: false },
            { text: "सूरत के पास", correct: false },
            { text: "खंभात (कैम्बे) में", correct: true },
            { text: "गोवा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात अभियान के दौरान ही अकबर ने पहली बार खंभात में समुद्र देखा और पुर्तगाली व्यापारियों से मुलाकात की।"
    },
    {
        question: "प्रश्न 21. अकबर ने किस विजय की स्मृति में अपनी राजधानी फतेहपुर सीकरी में 'बुलंद दरवाजा' का निर्माण करवाया?",
        answers: shuffle([
            { text: "मेवाड़ विजय", correct: false },
            { text: "बंगाल विजय", correct: false },
            { text: "गुजरात विजय", correct: true },
            { text: "काबुल विजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात में हुए विद्रोह को द्रुत गति से दबाने के बाद, इस शानदार विजय की यादगार के रूप में अकबर ने दुनिया के सबसे ऊँचे प्रवेश द्वारों में से एक, बुलंद दरवाजे का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 22. हल्दीघाटी का प्रसिद्ध युद्ध कब लड़ा गया?",
        answers: shuffle([
            { text: "1568", correct: false },
            { text: "1572", correct: false },
            { text: "1576", correct: true },
            { text: "1581", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऐतिहासिक युद्ध 18 जून, 1576 को मेवाड़ के शासक महाराणा प्रताप और मुगल सेना के बीच लड़ा गया।"
    },
    {
        question: "प्रश्न 23. हल्दीघाटी के युद्ध में मुगल सेना का नेतृत्व किसने किया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "बैरम खान", correct: false },
            { text: "आसफ खान", correct: false },
            { text: "राजा मान सिंह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर की ओर से, आमेर के राजा मान सिंह इस युद्ध में मुख्य सेनापति थे और आसफ खान उनके सहायक थे।"
    },
    {
        question: "प्रश्न 24. हल्दीघाटी का युद्ध किसके बीच हुआ था?",
        answers: shuffle([
            { text: "अकबर और राणा उदय सिंह", correct: false },
            { text: "अकबर और राणा सांगा", correct: false },
            { text: "अकबर और महाराणा प्रताप", correct: true },
            { text: "मान सिंह और राणा अमर सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध मेवाड़ की स्वतंत्रता को बनाए रखने के लिए महाराणा प्रताप के संघर्ष का प्रतीक है।"
    },
    {
        question: "प्रश्न 25. महाराणा प्रताप के प्रसिद्ध घोड़े का क्या नाम था?",
        answers: shuffle([
            { text: "पवन", correct: false },
            { text: "बादल", correct: false },
            { text: "चेतक", correct: true },
            { text: "बुलबुल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चेतक अपनी स्वामीभक्ति और बहादुरी के लिए प्रसिद्ध है, जिसने युद्ध में घायल होने के बावजूद महाराणा प्रताप को सुरक्षित स्थान पर पहुँचाया था।"
    },
    {
        question: "प्रश्न 26. अकबर ने काबुल पर कब विजय प्राप्त की?",
        answers: shuffle([
            { text: "1576", correct: false },
            { text: "1581", correct: true },
            { text: "1585", correct: false },
            { text: "1592", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने अपने सौतेले भाई मिर्जा हकीम के विद्रोह को दबाने के लिए काबुल पर आक्रमण किया और 1581 में उसे अपने साम्राज्य में मिला लिया।"
    },
    {
        question: "प्रश्न 27. अकबर ने कश्मीर को मुगल साम्राज्य में कब मिलाया?",
        answers: shuffle([
            { text: "1581", correct: false },
            { text: "1586", correct: true },
            { text: "1590", correct: false },
            { text: "1595", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा भगवान दास और कासिम खान के नेतृत्व में भेजी गई मुगल सेना ने कश्मीर के शासक यूसुफ खान को पराजित कर 1586 में कश्मीर पर अधिकार कर लिया।"
    },
    {
        question: "प्रश्न 28. अकबर के लिए असीरगढ़ की विजय (1601 ई.) क्यों महत्वपूर्ण थी?",
        answers: shuffle([
            { text: "यह उसकी पहली विजय थी", correct: false },
            { text: "यह उसकी अंतिम विजय थी", correct: true },
            { text: "यह सबसे आसान विजय थी", correct: false },
            { text: "इसने उसे बहुत धन दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खानदेश में स्थित असीरगढ़ का किला जीतना अकबर का अंतिम सैन्य अभियान था।<br><br><i class='fa-solid fa-angles-right icon'></i> कहा जाता है कि इस किले के द्वार सोने की चाबियों से खोले गए थे (अर्थात रिश्वत देकर)।"
    },
    {
        question: "प्रश्न 29. अकबर ने अपने साम्राज्य को प्रांतों में विभाजित किया, जिन्हें क्या कहा जाता था?",
        answers: shuffle([
            { text: "इक्ता", correct: false },
            { text: "सरकार", correct: false },
            { text: "परगना", correct: false },
            { text: "सूबा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रशासनिक सुविधा के लिए, अकबर ने 1580 में अपने साम्राज्य को 12 सूबों (प्रांतों) में विभाजित किया, जिनकी संख्या बाद में बढ़कर 15 हो गई।"
    },
    {
        question: "प्रश्न 30. सूबे (प्रांत) के प्रमुख को क्या कहा जाता था?",
        answers: shuffle([
            { text: "फौजदार", correct: false },
            { text: "दीवान", correct: false },
            { text: "सूबेदार या नाजिम", correct: true },
            { text: "कोतवाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूबेदार प्रांत का सर्वोच्च अधिकारी होता था, जिसके पास नागरिक और सैन्य दोनों अधिकार होते थे।"
    },
    {
        question: "प्रश्न 31. अकबर की 'मनसबदारी प्रणाली' किससे संबंधित थी?",
        answers: shuffle([
            { text: "केवल भू-राजस्व से", correct: false },
            { text: "केवल न्याय प्रणाली से", correct: false },
            { text: "सेना और प्रशासन की एक एकीकृत प्रणाली", correct: true },
            { text: "केवल धार्मिक प्रशासन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक ऐसी प्रणाली थी जिसमें प्रत्येक अधिकारी (मनसबदार) को एक पद या 'मनसब' दिया जाता था, जो उसके वेतन और सैन्य उत्तरदायित्व (घुड़सवारों की संख्या) को निर्धारित करता था।"
    },
    {
        question: "प्रश्न 32. मनसबदारी प्रणाली में 'जात' और 'सवार' का क्या अर्थ था?",
        answers: shuffle([
            { text: "पैदल और घुड़सवार सैनिक", correct: false },
            { text: "व्यक्तिगत पद और घुड़सवारों की संख्या", correct: true },
            { text: "नकद वेतन और जागीर", correct: false },
            { text: "हिंदू और मुस्लिम मनसबदार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जात' से अधिकारी का व्यक्तिगत दर्जा और वेतन तय होता था, जबकि 'सवार' से यह तय होता था कि उसे कितने घुड़सवार सैनिक रखने हैं।"
    },
    {
        question: "प्रश्न 33. अकबर की भू-राजस्व प्रणाली को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "इक्ता प्रणाली", correct: false },
            { text: "स्थायी बंदोबस्त", correct: false },
            { text: "दहसाला या जब्ती प्रणाली", correct: true },
            { text: "रैयतवाड़ी प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दहसाला' व्यवस्था में, पिछले दस वर्षों की औसत उपज और कीमतों के आधार पर भू-राजस्व की दरें तय की जाती थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'जब्ती' प्रणाली भी कहते हैं।"
    },
    {
        question: "प्रश्न 34. 'दहसाला बंदोबस्त' को लागू करने का श्रेय किस वित्त मंत्री को दिया जाता है?",
        answers: shuffle([
            { text: "बीरबल", correct: false },
            { text: "अबुल फजल", correct: false },
            { text: "राजा मान सिंह", correct: false },
            { text: "राजा टोडर मल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा टोडर मल, जो पहले शेरशाह सूरी के अधीन भी काम कर चुके थे, अकबर के वित्त मंत्री थे और उन्होंने ही इस सुव्यवस्थित भू-राजस्व प्रणाली को विकसित और लागू किया।"
    },
    {
        question: "प्रश्न 35. 'जब्ती प्रणाली' के तहत, भू-राजस्व की दर क्या थी?",
        answers: shuffle([
            { text: "उपज का आधा (1/2)", correct: false },
            { text: "उपज का एक-चौथाई (1/4)", correct: false },
            { text: "उपज का एक-तिहाई (1/3)", correct: true },
            { text: "उपज का दो-तिहाई (2/3)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूमि की पैमाइश और वर्गीकरण के बाद, कुल उपज का एक-तिहाई हिस्सा लगान के रूप में नकद में लिया जाता था।"
    },
    {
        question: "प्रश्न 36. अकबर के प्रशासन में 'मीर बख्शी' का क्या कर्तव्य था?",
        answers: shuffle([
            { text: "वित्त मंत्री", correct: false },
            { text: "सैन्य विभाग का प्रमुख", correct: true },
            { text: "मुख्य न्यायाधीश", correct: false },
            { text: "शाही परिवार का प्रभारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीर बख्शी सेना का सर्वोच्च अधिकारी होता था, जो मनसबदारों की नियुक्ति, सैनिकों की भर्ती, उनके हुलिया का रिकॉर्ड रखने और वेतन बांटने के लिए जिम्मेदार था।"
    },
    {
        question: "प्रश्न 37. मुगल प्रशासन में 'दीवान' या 'वजीर' का क्या कार्य था?",
        answers: shuffle([
            { text: "सेना का प्रमुख", correct: false },
            { text: "राजस्व और वित्त विभाग का प्रमुख", correct: true },
            { text: "धार्मिक मामलों का प्रमुख", correct: false },
            { text: "न्याय विभाग का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीवान साम्राज्य का प्रधानमंत्री और वित्त मंत्री होता था, जो सभी राजस्व और वित्तीय मामलों की देखरेख करता था।"
    },
    {
        question: "प्रश्न 38. 'सरकार' (जिले) का मुख्य राजस्व अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "फौजदार", correct: false },
            { text: "कोतवाल", correct: false },
            { text: "शिकदार", correct: false },
            { text: "अमलगुजार या आमिल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमलगुजार जिले स्तर पर भू-राजस्व का निर्धारण और वसूली के लिए जिम्मेदार मुख्य अधिकारी था।"
    },
    {
        question: "प्रश्न 39. अकबर ने दास प्रथा पर कब प्रतिबंध लगाया?",
        answers: shuffle([
            { text: "1560", correct: false },
            { text: "1562", correct: true },
            { text: "1563", correct: false },
            { text: "1564", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने 1562 में युद्धबंदियों को दास बनाने और उनके परिवारों को गुलाम बनाने की अमानवीय प्रथा को समाप्त कर दिया।"
    },
    {
        question: "प्रश्न 40. अकबर ने हिंदुओं पर लगने वाला 'तीर्थयात्रा कर' कब समाप्त किया?",
        answers: shuffle([
            { text: "1562", correct: false },
            { text: "1563", correct: true },
            { text: "1564", correct: false },
            { text: "1575", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी धार्मिक सहिष्णुता की नीति को आगे बढ़ाते हुए, अकबर ने 1563 में हिंदुओं के विभिन्न तीर्थ स्थलों पर जाने के लिए लगने वाले कर को समाप्त कर दिया।"
    },
    {
        question: "प्रश्न 41. अकबर ने गैर-मुसलमानों पर लगने वाला 'जजिया कर' कब समाप्त किया?",
        answers: shuffle([
            { text: "1563", correct: false },
            { text: "1564", correct: true },
            { text: "1579", correct: false },
            { text: "1582", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1564 में जजिया कर को समाप्त करना अकबर का एक क्रांतिकारी कदम था, जिसने उसे अपनी हिंदू प्रजा के बीच बहुत लोकप्रिय बना दिया।"
    },
    {
        question: "प्रश्न 42. अकबर ने विभिन्न धर्मों के विद्वानों के साथ धार्मिक चर्चा के लिए 'इबादतखाना' (पूजा गृह) की स्थापना कहाँ की थी?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "लाहौर", correct: false },
            { text: "फतेहपुर सीकरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1575 में, अकबर ने फतेहपुर सीकरी में इबादतखाने का निर्माण करवाया, जहाँ वह इस्लाम, हिंदू धर्म, जैन धर्म, पारसी धर्म और ईसाई धर्म के विद्वानों से चर्चा करता था।"
    },
    {
        question: "प्रश्न 43. 'मजहर' या 'अमोघत्व की घोषणा' (Declaration of Infallibility) अकबर ने कब जारी की?",
        answers: shuffle([
            { text: "1575", correct: false },
            { text: "1578", correct: false },
            { text: "1579", correct: true },
            { text: "1582", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस घोषणा के द्वारा, अकबर ने स्वयं को धार्मिक मामलों पर किसी भी विवाद में अंतिम निर्णायक घोषित कर दिया, जिससे कट्टरपंथी उलेमाओं की शक्ति कम हो गई।"
    },
    {
        question: "प्रश्न 44. 'दीन-ए-इलाही' (ईश्वरीय एकेश्वरवाद) की स्थापना अकबर ने किस वर्ष की?",
        answers: shuffle([
            { text: "1579", correct: false },
            { text: "1580", correct: false },
            { text: "1581", correct: false },
            { text: "1582", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी धर्मों के अच्छे सिद्धांतों को मिलाकर, अकबर ने 'दीन-ए-इलाही' नामक एक नए समरूपवादी विचार को प्रस्तुत किया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कोई नया धर्म नहीं, बल्कि एक सूफी पंथ की तरह था।"
    },
    {
        question: "प्रश्न 45. दीन-ए-इलाही को स्वीकार करने वाला एकमात्र हिंदू दरबारी कौन था?",
        answers: shuffle([
            { text: "राजा मान सिंह", correct: false },
            { text: "राजा टोडर मल", correct: false },
            { text: "राजा भगवान दास", correct: false },
            { text: "बीरबल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बीरबल (जिनका मूल नाम महेश दास था) अकबर के सबसे करीबी मित्रों में से थे और वे एकमात्र हिंदू थे जिन्होंने दीन-ए-इलाही को अपनाया।"
    },
    {
        question: "प्रश्न 46. अकबर की धार्मिक नीति 'सुलह-ए-कुल' का क्या अर्थ है?",
        answers: shuffle([
            { text: "सभी से युद्ध", correct: false },
            { text: "पूर्ण शांति या सभी के साथ सहिष्णुता", correct: true },
            { text: "केवल मुस्लिमों के साथ शांति", correct: false },
            { text: "इस्लाम का प्रभुत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुलह-ए-कुल' अकबर की शासन नीति का मूल आधार था, जिसका उद्देश्य धार्मिक भेदभाव के बिना अपनी सभी प्रजा के साथ शांति, सहिष्णुता और न्याय का व्यवहार करना था।"
    },
    {
        question: "प्रश्न 47. अकबर किस सूफी संत का बहुत सम्मान करता था और अक्सर पैदल ही उनकी दरगाह पर अजमेर जाता था?",
        answers: shuffle([
            { text: "निजामुद्दीन औलिया", correct: false },
            { text: "बाबा फरीद", correct: false },
            { text: "शेख सलीम चिश्ती", correct: false },
            { text: "ख्वाजा मोइनुद्दीन चिश्ती", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर, अजमेर में स्थित ख्वाजा मोइनुद्दीन चिश्ती की दरगाह का बहुत बड़ा भक्त था।"
    },
    {
        question: "प्रश्न 48. अकबर ने अपने पुत्र सलीम (जहाँगीर) का नाम किस सूफी संत के नाम पर रखा था?",
        answers: shuffle([
            { text: "ख्वाजा मोइनुद्दीन चिश्ती", correct: false },
            { text: "निजामुद्दीन औलिया", correct: false },
            { text: "शेख सलीम चिश्ती", correct: true },
            { text: "बाबा फरीद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर को पुत्र रत्न की प्राप्ति सीकरी में रहने वाले सूफी संत शेख सलीम चिश्ती के आशीर्वाद से हुई थी, इसीलिए उसने कृतज्ञता में अपने बेटे का नाम सलीम रखा।"
    },
    {
        question: "प्रश्न 49. इबादतखाने में पारसी धर्म का प्रतिनिधित्व किसने किया था?",
        answers: shuffle([
            { text: "जेसुइट पादरी एक्वाविवा", correct: false },
            { text: "पुरुषोत्तम और देवी", correct: false },
            { text: "दस्तूर मेहरजी राणा", correct: true },
            { text: "हरिविजय सूरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने पारसी धर्म के सिद्धांतों को समझने के लिए नवसारी (गुजरात) से पारसी पुरोहित दस्तूर मेहरजी राणा को आमंत्रित किया था।"
    },
    {
        question: "प्रश्न 50. किस जैन आचार्य को अकबर ने 'जगत गुरु' की उपाधि से सम्मानित किया था?",
        answers: shuffle([
            { text: "भद्रबाहु", correct: false },
            { text: "स्थूलभद्र", correct: false },
            { text: "जिनचंद्र सूरि", correct: false },
            { text: "हीरविजय सूरि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के श्वेतांबर संप्रदाय के आचार्य हीरविजय सूरि से प्रभावित होकर, अकबर ने उन्हें 'जगत गुरु' की उपाधि दी और पशु-पक्षियों के वध पर कुछ दिनों के लिए रोक लगा दी।"
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