const questions = [
    {
        topHeading: "लोदी वंश पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. बहलोल लोदी की अफगान नीति का आधार क्या था?",
        answers: shuffle([
            { text: "निरंकुश राजतंत्र", correct: false },
            { text: "दैवीय राजत्व का सिद्धांत", correct: false },
            { text: "अफगान कबायली समानता और भाईचारा", correct: true },
            { text: "रक्त और लौह की नीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> जानता था कि <b>अफगान सरदार स्वतंत्रता-प्रेमी</b> होते हैं और किसी एक की सर्वोच्चता स्वीकार नहीं करते, इसलिए उसने <b>भाईचारे और समानता</b> पर आधारित नीति अपनाई।"
    },
    {
        question: "प्रश्न 2. सिकंदर लोदी ने अपनी माँ के हिंदू होने के कारण सिंहासन पर अपने दावे को मजबूत करने के लिए क्या किया?",
        answers: shuffle([
            { text: "हिंदुओं को उच्च पद दिए", correct: false },
            { text: "राजपूत राजकुमारी से विवाह किया", correct: false },
            { text: "हिंदुओं के प्रति अत्यंत कट्टर और असहिष्णु नीति अपनाई", correct: true },
            { text: "सभी धर्मों का सम्मान किया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> की माँ एक <b>सुनार की बेटी</b> थी।<br><br><i class='fa-solid fa-angles-right icon'></i> अपने <b>अफगान और मुस्लिम अमीरों</b> के बीच अपनी स्थिति को मजबूत करने और यह साबित करने के लिए कि वह एक <b>सच्चा मुसलमान</b> है, उसने जानबूझकर <b>हिंदुओं के प्रति कठोर नीति</b> अपनाई।"
    },
    {
        question: "प्रश्न 3. लोदी काल में 'वजीर' का पद किसे दिया जाता था?",
        answers: shuffle([
            { text: "सेनापति को", correct: false },
            { text: "प्रधानमंत्री और राजस्व प्रमुख को", correct: true },
            { text: "मुख्य न्यायाधीश को", correct: false },
            { text: "शाही परिवार के सदस्य को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सल्तनत काल</b> की तरह ही, <b>लोदी काल</b> में भी <b>वजीर</b> सुल्तान के बाद <b>सबसे महत्वपूर्ण अधिकारी</b> होता था, जो <b>प्रशासन और वित्त</b> दोनों का प्रमुख होता था।"
    },
    {
        question: "प्रश्न 4. इब्राहिम लोदी के खिलाफ विद्रोह करने वाला उसका चाचा आलम खान लोदी कहाँ का सूबेदार था?",
        answers: shuffle([
            { text: "जौनपुर", correct: false },
            { text: "गुजरात", correct: false },
            { text: "बदायूं", correct: false },
            { text: "आलम खान ने बाबर से शरण ले रखी थी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आलम खान लोदी (अलाउद्दीन)</b> दिल्ली के सिंहासन का <b>दावेदार</b> था और उसने <b>इब्राहिम लोदी</b> से बचने के लिए <b>काबुल में बाबर के यहाँ शरण</b> ले रखी थी।"
    },
    {
        question: "प्रश्न 5. बहलोल लोदी का मकबरा किसने बनवाया था?",
        answers: shuffle([
            { text: "स्वयं बहलोल लोदी ने", correct: false },
            { text: "सिकंदर लोदी ने", correct: true },
            { text: "इब्राहिम लोदी ने", correct: false },
            { text: "शेरशाह सूरी ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने पिता की मृत्यु के बाद, <b>सिकंदर लोदी</b> ने <b>1489 ई.</b> में <b>दिल्ली</b> में <b>बहलोल लोदी का मकबरा</b> बनवाया।"
    },
    {
        question: "प्रश्न 6. इब्राहिम लोदी ने अपने राज्य को मजबूत करने के लिए कौन सा कदम उठाया?",
        answers: shuffle([
            { text: "राजपूतों से संधि", correct: false },
            { text: "शक्तिशाली सरदारों का दमन", correct: true },
            { text: "नई राजधानी का निर्माण", correct: false },
            { text: "मुद्रा सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b> ने एक <b>केंद्रीकृत और निरंकुश राजतंत्र</b> स्थापित करने के उद्देश्य से पुराने और <b>शक्तिशाली अफगान सरदारों को खत्म करने या उन्हें नियंत्रित करने</b> की नीति अपनाई।"
    },
    {
        question: "प्रश्न 7. सिकंदर लोदी ने खाद्यान्न की कमी को पूरा करने के लिए क्या व्यवस्था की?",
        answers: shuffle([
            { text: "विदेशों से अनाज आयात किया", correct: false },
            { text: "किसानों को ऋण दिया", correct: false },
            { text: "सरकारी गोदामों में अनाज का भंडारण करवाया", correct: true },
            { text: "भू-राजस्व माफ कर दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> ने अकाल या कमी के समय जनता को <b>सस्ती दरों पर अनाज</b> उपलब्ध कराने के लिए <b>राज्य द्वारा नियंत्रित गोदामों में अनाज जमा करने</b> की प्रणाली लागू की।"
    },
    {
        question: "प्रश्न 8. लोदी काल के अंत का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "मंगोल आक्रमण", correct: false },
            { text: "सुल्तान और अफगान अमीरों के बीच संघर्ष", correct: true },
            { text: "आर्थिक संकट", correct: false },
            { text: "राजपूतों का उदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी की हठधर्मिता</b> और <b>अफगान सरदारों को नियंत्रित करने की नीति</b> ने उन्हें इतना अलग-थलग कर दिया कि उन्होंने सुल्तान के खिलाफ <b>विदेशी (बाबर) से मदद</b> लेने में भी संकोच नहीं किया।"
    },
    {
        question: "प्रश्न 9. सिकंदर लोदी ने बंगाल के किस शासक के साथ संधि की थी?",
        answers: shuffle([
            { text: "हुसैन शाह शर्की", correct: false },
            { text: "अलाउद्दीन हुसैन शाह", correct: true },
            { text: "नुसरत शाह", correct: false },
            { text: "गयासुद्दीन महमूद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> ने बिहार पर अधिकार करने के बाद बंगाल के शासक <b>अलाउद्दीन हुसैन शाह</b> के साथ एक <b>संधि</b> की, जिसके अनुसार दोनों ने <b>एक-दूसरे के राज्यों पर आक्रमण न करने</b> और <b>एक-दूसरे के शत्रुओं को शरण न देने</b> का वचन दिया।"
    },
    {
        question: "प्रश्न 10. लोदी वंश के शासकों का सही कालानुक्रम क्या है?",
        answers: shuffle([
            { text: "सिकंदर, बहलोल, इब्राहिम", correct: false },
            { text: "बहलोल, सिकंदर, इब्राहिम", correct: true },
            { text: "इब्राहिम, सिकंदर, बहलोल", correct: false },
            { text: "बहलोल, इब्राहिम, सिकंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सबसे पहले <b>बहलोल लोदी (1451-89)</b>, फिर उसका पुत्र <b>सिकंदर लोदी (1489-1517)</b>, और अंत में उसका पुत्र <b>इब्राहिम लोदी (1517-26)</b> ने शासन किया।"
    },
    {
        question: "प्रश्न 11. किस लोदी शासक ने बहलोल लोदी की 'समानों में प्रथम' की नीति को त्यागकर राजत्व को सर्वोच्च बनाया?",
        answers: shuffle([
            { text: "बारबक शाह", correct: false },
            { text: "सिकंदर लोदी", correct: true },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "आलम खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> ने अपने पिता के विपरीत, <b>सुल्तान के पद की गरिमा और शक्ति</b> को स्थापित करने पर जोर दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अमीरों को <b>अपने सामने खड़े रहने</b> और <b>शाही आदेशों का सम्मान करने</b> के लिए मजबूर किया।"
    },
    {
        question: "प्रश्न 12. इब्राहिम लोदी का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "पानीपत", correct: true },
            { text: "ग्वालियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>पानीपत के युद्ध</b> में मारे जाने के बाद, <b>इब्राहिम लोदी</b> को वहीं <b>युद्ध के मैदान के पास दफना</b> दिया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका मकबरा <b>पानीपत</b> में स्थित है।"
    },
    {
        question: "प्रश्न 13. लोदी काल में 'परगना' का मुख्य अधिकारी क्या कहलाता था?",
        answers: shuffle([
            { text: "मुक्ती", correct: false },
            { text: "वली", correct: false },
            { text: "शिकदार", correct: true },
            { text: "चौधरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी प्रशासन</b> में, एक प्रांत कई '<b>शिक</b>' में और प्रत्येक 'शिक' कई '<b>परगना</b>' में विभाजित था।<br><br><i class='fa-solid fa-angles-right icon'></i> परगना का मुख्य सैन्य और प्रशासनिक अधिकारी '<b>शिकदार</b>' होता था।"
    },
    {
        question: "प्रश्न 14. बहलोल लोदी ने जौनपुर पर अधिकार करने के बाद वहां का शासक किसे नियुक्त किया?",
        answers: shuffle([
            { text: "अपने पुत्र निजाम खान को", correct: false },
            { text: "अपने पुत्र बारबक शाह को", correct: true },
            { text: "अपने पोते आजम हुमायूं को", correct: false },
            { text: "मुबारक खान नुहानी को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जौनपुर विजय</b> के बाद, <b>बहलोल लोदी</b> ने वहां अपने <b>बड़े पुत्र बारबक शाह</b> को शासक नियुक्त कर दिया था।"
    },
    {
        question: "प्रश्न 15. लोदी काल में 'मुक्ता' या 'इक्तादार' पर नियंत्रण कैसे रखा जाता था?",
        answers: shuffle([
            { text: "a) उन पर कोई नियंत्रण नहीं था", correct: false },
            { text: "b) उनके खातों (हिसाब-किताब) की नियमित जांच द्वारा", correct: false },
            { text: "c) उन्हें थोड़े-थोड़े समय बाद स्थानांतरित करके", correct: false },
            { text: "b) और c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> जैसे मजबूत शासकों ने <b>मुक्ताओं के खातों की कठोर जांच</b> की और उन्हें एक इक्ता से दूसरे इक्ता में <b>स्थानांतरित करने की प्रथा</b> भी अपनाई ताकि वे बहुत शक्तिशाली न हो सकें।"
    },
    {
        question: "प्रश्न 16. \"सुल्तान का कोई सगा-संबंधी नहीं होता।\" इस कठोर राजत्व सिद्धांत को किस लोदी शासक ने अपनाया?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: true },
            { text: "किसी ने नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b> का मानना था कि सभी सरदार <b>सुल्तान के सेवक</b> हैं और उन्हें <b>पूर्ण आज्ञाकारिता</b> दिखानी चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने इस सिद्धांत को इतनी कठोरता से लागू किया कि यह उसके <b>पतन का कारण</b> बना।"
    },
    {
        question: "प्रश्न 17. लोदी काल में निर्मित मकबरों की छत पर क्या विशेष अलंकरण होता था?",
        answers: shuffle([
            { text: "कमल के फूल का प्रतीक", correct: true },
            { text: "स्वास्तिक का चिह्न", correct: false },
            { text: "कलश", correct: false },
            { text: "मीनारें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी काल</b> के कई मकबरों के <b>गुंबदों के शीर्ष</b> पर एक <b>उल्टे कमल के फूल का सुंदर अलंकरण</b> मिलता है, जो <b>हिंदू वास्तुकला</b> का प्रभाव दर्शाता है।"
    },
    {
        question: "प्रश्न 18. सिकंदर लोदी के समय हिसाब-किताब (लेखा-परीक्षण) की प्रणाली में क्या सुधार हुआ?",
        answers: shuffle([
            { text: "हिसाब-किताब बंद कर दिया गया", correct: false },
            { text: "हिसाब-किताब की कठोर जांच शुरू की गई", correct: true },
            { text: "हिसाब-किताब के लिए एक नया विभाग बनाया गया", correct: false },
            { text: "कोई सुधार नहीं हुआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> एक <b>सख्त प्रशासक</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने <b>अमीरों और अधिकारियों के खातों की नियमित और कठोर जांच</b> की प्रथा शुरू की, जिससे <b>भ्रष्टाचार पर अंकुश</b> लगा।"
    },
    {
        question: "प्रश्न 19. पानीपत के प्रथम युद्ध के बाद बाबर ने किस लोदी शहजादे को शरण दी और बाद में घाघरा के युद्ध में उसके खिलाफ लड़ा?",
        answers: shuffle([
            { text: "जलाल खान", correct: false },
            { text: "दिलावर खान", correct: false },
            { text: "महमूद लोदी", correct: true },
            { text: "आलम खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महमूद लोदी</b>, <b>इब्राहिम लोदी का भाई</b> था, जो पानीपत के बाद <b>अफगान प्रतिरोध का नेता</b> बन गया।<br><br><i class='fa-solid fa-angles-right icon'></i> बाबर ने उसे अंतिम रूप से <b>1529</b> में <b>घाघरा के युद्ध</b> में पराजित किया।"
    },
    {
        question: "प्रश्न 20. लोदी वंश के पतन के समय बंगाल का शासक कौन था?",
        answers: shuffle([
            { text: "अलाउद्दीन हुसैन शाह", correct: false },
            { text: "नुसरत शाह", correct: true },
            { text: "गयासुद्दीन महमूद शाह", correct: false },
            { text: "शम्सुद्दीन इलियास शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस समय <b>पानीपत का युद्ध</b> हुआ, उस समय बंगाल में <b>हुसैन शाही वंश</b> का शासक <b>नुसरत शाह</b> शासन कर रहा था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने भागे हुए अफगानों को शरण दी थी।"
    },
    {
        question: "प्रश्न 21. बहलोल लोदी ने दिल्ली पर अधिकार करने से पहले कहाँ का सूबेदार था?",
        answers: shuffle([
            { text: "मुल्तान और दीपालपुर", correct: false },
            { text: "लाहौर और सरहिन्द", correct: true },
            { text: "बदायूं और संभल", correct: false },
            { text: "आगरा और ग्वालियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद सुल्तानों</b> के अधीन, <b>बहलोल लोदी</b> एक <b>शक्तिशाली अफगान सरदार</b> था और <b>लाहौर तथा सरहिन्द</b> का प्रभारी था।"
    },
    {
        question: "प्रश्न 22. सिकंदर लोदी ने एक ब्राह्मण को किसलिए मृत्युदंड दिया था?",
        answers: shuffle([
            { text: "विद्रोह करने के लिए", correct: false },
            { text: "कर न देने के लिए", correct: false },
            { text: "यह कहने के लिए कि हिंदू और इस्लाम दोनों धर्म समान रूप से सत्य हैं", correct: true },
            { text: "सुल्तान का अपमान करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बोधन</b> नामक एक <b>ब्राह्मण</b> ने जब यह कहा कि <b>सभी धर्म ईश्वर तक पहुँचने के समान मार्ग हैं</b>, तो <b>सिकंदर लोदी</b> ने इसे <b>इस्लाम का अपमान</b> माना और उलेमाओं की सलाह पर उसे <b>मृत्युदंड</b> दे दिया।"
    },
    {
        question: "प्रश्न 23. इब्राहिम लोदी की सेना का सेनापति कौन था जिसने पानीपत के युद्ध में उसे धोखा दिया?",
        answers: shuffle([
            { text: "आलम खान", correct: false },
            { text: "दिलावर खान", correct: false },
            { text: "ऐसा कोई प्रमाण नहीं है", correct: true },
            { text: "आजम हुमायूं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक आम <b>गलत धारणा</b> है।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>ऐतिहासिक साक्ष्यों</b> के अनुसार, <b>इब्राहिम लोदी</b> के किसी भी सेनापति ने युद्ध के मैदान में उसे <b>धोखा नहीं दिया</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी हार का मुख्य कारण <b>बाबर की बेहतर सैन्य रणनीति</b> थी।"
    },
    {
        question: "प्रश्न 24. बहलोल लोदी का शासनकाल कितने वर्षों तक चला?",
        answers: shuffle([
            { text: "26 वर्ष", correct: false },
            { text: "32 वर्ष", correct: false },
            { text: "38 वर्ष", correct: true },
            { text: "42 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> ने <b>1451 से 1489 ई.</b> तक, कुल <b>38 वर्षों</b> तक शासन किया, जो <b>दिल्ली सल्तनत</b> के किसी भी सुल्तान से <b>अधिक लंबा शासनकाल</b> था।"
    },
    {
        question: "प्रश्न 25. 'वाकयात-ए-मुश्ताकी' किसकी रचना है, जिसमें लोदी काल की जानकारी मिलती है?",
        answers: shuffle([
            { text: "अब्बास खान शेरवानी", correct: false },
            { text: "रिजकुल्लाह मुश्ताकी", correct: true },
            { text: "अहमद यादगार", correct: false },
            { text: "अब्दुल्लाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>रिजकुल्लाह मुश्ताकी</b> द्वारा रचित '<b>वाकयात-ए-मुश्ताकी</b>' में <b>लोदी और सूर वंश</b> के शासकों के बारे में <b>रोचक किस्से और प्रशासनिक जानकारी</b> मिलती है।"
    },
    {
        question: "प्रश्न 26. सिकंदर लोदी ने सिंहासन पर बैठने के बाद अपने किस विद्रोही भाई को हराया था?",
        answers: shuffle([
            { text: "जलाल खान", correct: false },
            { text: "आलम खान", correct: false },
            { text: "बारबक शाह", correct: true },
            { text: "हुसैन खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सुल्तान बनने के बाद</b>, <b>सिकंदर लोदी</b> ने <b>जौनपुर</b> के शासक अपने <b>भाई बारबक शाह</b> को पराजित किया, लेकिन बाद में उसे क्षमा कर जौनपुर का शासन वापस सौंप दिया।"
    },
    {
        question: "प्रश्न 27. लोदी सुल्तानों ने किस प्रकार की स्थापत्य शैली को बढ़ावा दिया?",
        answers: shuffle([
            { text: "मुगल शैली", correct: false },
            { text: "राजपूत शैली", correct: false },
            { text: "तुगलक शैली का विकसित रूप", correct: true },
            { text: "फारसी शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी वास्तुकला</b> <b>तुगलक काल की सादगी</b> और <b>सैयद काल की विशेषताओं</b> का मिश्रण थी, जिसमें नई तकनीकों जैसे <b>दोहरे गुंबद</b> का विकास हुआ।"
    },
    {
        question: "प्रश्न 28. इब्राहिम लोदी ने दौलत खान लोदी के पुत्र को दिल्ली क्यों बुलाया था?",
        answers: shuffle([
            { text: "उसे पुरस्कृत करने के लिए", correct: false },
            { text: "उसे अपमानित करने और अपनी शक्ति का प्रदर्शन करने के लिए", correct: true },
            { text: "उसे एक महत्वपूर्ण पद देने के लिए", correct: false },
            { text: "उससे सलाह लेने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b> ने <b>दौलत खान लोदी के पुत्र दिलावर खान</b> को दिल्ली बुलाया और उसे उन <b>विद्रोही अमीरों के शव दिखाए</b> जिन्हें दंडित किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस अपमान से डरकर <b>दिलावर खान काबुल भाग गया</b> और <b>बाबर</b> को सब कुछ बता दिया।"
    },
    {
        question: "प्रश्न 29. आगरा शहर किस नदी के किनारे बसाया गया था?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "गोमती", correct: false },
            { text: "यमुना", correct: true },
            { text: "चंबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> ने <b>आगरा शहर</b> की स्थापना <b>यमुना नदी</b> के तट पर की थी।"
    },
    {
        question: "प्रश्न 30. बहलोल लोदी की मृत्यु कहाँ हुई थी?",
        answers: shuffle([
            { text: "दिल्ली में", correct: false },
            { text: "जौनपुर में", correct: false },
            { text: "ग्वालियर अभियान से लौटते समय रास्ते में", correct: true },
            { text: "लाहौर में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1489 ई.</b> में <b>ग्वालियर</b> पर एक और अभियान से लौटते समय, <b>बहलोल लोदी रास्ते में बीमार पड़ गया</b> और उसकी मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 31. सिकंदर लोदी की न्याय व्यवस्था कैसी थी?",
        answers: shuffle([
            { text: "बहुत कमजोर और पक्षपातपूर्ण", correct: false },
            { text: "बहुत कठोर और निष्पक्ष", correct: true },
            { text: "केवल मुसलमानों के लिए थी", correct: false },
            { text: "केवल हिंदुओं के लिए थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> अपनी <b>न्यायप्रियता</b> के लिए प्रसिद्ध था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह स्वयं मुकदमों की सुनवाई करता था और <b>निर्णय देने में किसी के साथ पक्षपात नहीं करता</b> था।"
    },
    {
        question: "प्रश्न 32. लोदी काल में अफगान अमीरों के कितने वर्ग थे?",
        answers: shuffle([
            { text: "दो - फार्मूली और नुहानी", correct: false },
            { text: "तीन - लोदी, फार्मूली और नुहानी", correct: true },
            { text: "केवल एक - लोदी", correct: false },
            { text: "चार - लोदी, सूर, नुहानी, फार्मूली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी सल्तनत</b> में, <b>अफगान सरदार</b> मुख्य रूप से <b>तीन प्रमुख कुलों</b> में विभाजित थे: <b>लोदी</b> (जो शासक कुल था), <b>नुहानी</b> और <b>फार्मूली</b>।"
    },
    {
        question: "प्रश्न 33. दिल्ली में लोदी गार्डन किस राजवंश की कब्रों के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "तुगलक और लोदी", correct: false },
            { text: "सैयद और लोदी", correct: true },
            { text: "केवल लोदी", correct: false },
            { text: "खिलजी और लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी गार्डन</b> में <b>मुहम्मद शाह (सैयद)</b>, <b>सिकंदर लोदी (लोदी)</b>, <b>शीश गुंबद</b> और <b>बड़ा गुंबद</b> जैसे <b>महत्वपूर्ण मकबरे</b> हैं जो <b>सैयद और लोदी</b> दोनों कालों से संबंधित हैं।"
    },
    {
        question: "प्रश्न 34. पानीपत की लड़ाई के बाद बाबर ने किसे 'कलंदर' की उपाधि धारण की?",
        answers: shuffle([
            { text: "हुमायूं को", correct: false },
            { text: "अपने आपको", correct: true },
            { text: "इब्राहिम लोदी को", correct: false },
            { text: "दौलत खान लोदी को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युद्ध में मिली <b>भारी संपत्ति</b> को काबुल की जनता और अपने सैनिकों में <b>उदारतापूर्वक बांटने</b> के कारण <b>बाबर</b> ने '<b>कलंदर</b>' की उपाधि धारण की।"
    },
    {
        question: "प्रश्न 35. बहलोल लोदी के बारे में क्या सच नहीं है?",
        answers: shuffle([
            { text: "वह सादा जीवन व्यतीत करता था", correct: false },
            { text: "वह अपने सरदारों के साथ कालीन पर बैठता था", correct: false },
            { text: "उसने जौनपुर पर विजय प्राप्त की", correct: false },
            { text: "उसने एक निरंकुश शासक की तरह शासन किया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> ने एक <b>निरंकुश शासक</b> के बजाय एक <b>अफगान कबायली प्रमुख</b> की तरह शासन किया, जो अपने सरदारों को <b>बराबर मानता था</b>।"
    },
    {
        question: "प्रश्न 36. सिकंदर लोदी के वजीर मियां भोइया ने कौन सा मकबरा बनवाया था?",
        answers: shuffle([
            { text: "सिकंदर लोदी का मकबरा", correct: false },
            { text: "बहलोल लोदी का मकबरा", correct: false },
            { text: "शीश गुंबद", correct: false },
            { text: "मोठ की मस्जिद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मियां भोइया</b> ने <b>सिकंदर लोदी</b> के शासनकाल में <b>दिल्ली</b> की प्रसिद्ध <b>मोठ की मस्जिद</b> का निर्माण करवाया था।"
    },
    {
        question: "प्रश्न 37. पानीपत के प्रथम युद्ध में इब्राहिम लोदी का साथ किस राजपूत शासक ने दिया था?",
        answers: shuffle([
            { text: "राणा सांगा", correct: false },
            { text: "मेदिनी राय", correct: false },
            { text: "राजा विक्रमाजीत (ग्वालियर)", correct: true },
            { text: "राजा भारमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ग्वालियर के तोमर शासक राजा विक्रमाजीत</b>, <b>इब्राहिम लोदी</b> के एक <b>वफादार सामंत</b> थे और पानीपत के युद्ध में वे सुल्तान की तरफ से लड़ते हुए <b>वीरगति को प्राप्त हुए</b>।"
    },
    {
        question: "प्रश्न 38. लोदी काल में कृषि की स्थिति कैसी थी?",
        answers: shuffle([
            { text: "बहुत खराब", correct: false },
            { text: "सामान्यतः अच्छी और अनाज सस्ता था", correct: true },
            { text: "लगातार अकाल पड़ते थे", correct: false },
            { text: "कृषि पर ध्यान नहीं दिया गया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी शासकों</b>, विशेषकर <b>सिकंदर लोदी</b>, ने <b>कृषि सुधारों</b> पर ध्यान दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके शासनकाल में <b>कोई बड़ा अकाल नहीं पड़ा</b> और <b>खाद्यान्न बहुत सस्ता</b> था।"
    },
    {
        question: "प्रश्न 39. बहलोल लोदी ने किस हिंदू जाति के लोगों को बड़ी संख्या में सैन्य और प्रशासनिक पदों पर नियुक्त किया?",
        answers: shuffle([
            { text: "कायस्थ", correct: true },
            { text: "राजपूत", correct: false },
            { text: "खत्री", correct: false },
            { text: "बनिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> ने प्रशासन चलाने के लिए हिंदुओं, विशेषकर <b>कायस्थ समुदाय</b> के लोगों पर भरोसा किया और उन्हें <b>उच्च पदों पर नियुक्त</b> किया।"
    },
    {
        question: "प्रश्न 40. सिकंदर लोदी की मृत्यु के बाद अफगान साम्राज्य का विभाजन किसने प्रस्तावित किया?",
        answers: shuffle([
            { text: "दौलत खान लोदी", correct: false },
            { text: "आजम हुमायूं शेरवानी", correct: false },
            { text: "स्वयं इब्राहिम लोदी ने", correct: false },
            { text: "अफगान अमीरों ने", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अफगान अमीरों</b> ने <b>गृहयुद्ध से बचने</b> के लिए <b>साम्राज्य के विभाजन</b> का प्रस्ताव रखा, जिसके तहत इब्राहिम को दिल्ली और उसके भाई जलाल खान को जौनपुर का शासक बनाया जाना था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम</b> ने बाद में इस विभाजन को <b>अस्वीकार</b> कर दिया।"
    },
    {
        question: "प्रश्न 41. लोदी वंश के शासक किस नस्ल के थे?",
        answers: shuffle([
            { text: "मंगोल", correct: false },
            { text: "तुर्क", correct: false },
            { text: "अफगान", correct: true },
            { text: "अरब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी शासक अफगान (पश्तून) मूल</b> के थे, जो <b>दिल्ली पर शासन करने वाले पहले अफगान</b> थे।"
    },
    {
        question: "प्रश्न 42. किस लोदी शासक को संगीत सुनने पर प्रतिबंध लगाने के लिए जाना जाता है, जबकि वह स्वयं संगीत का प्रेमी था?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: true },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "यह जानकारी गलत है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि <b>सिकंदर लोदी</b> को <b>शहनाई सुनना बहुत पसंद</b> था और उसके समय में <b>संगीत पर ग्रंथ</b> भी लिखा गया, लेकिन अपनी <b>कट्टर धार्मिक छवि</b> के कारण उसने <b>सार्वजनिक रूप से संगीत पर प्रतिबंध</b> लगा दिया था।"
    },
    {
        question: "प्रश्न 43. इब्राहिम लोदी के चरित्र की मुख्य कमजोरी क्या थी?",
        answers: shuffle([
            { text: "वह कायर था", correct: false },
            { text: "वह अयोग्य था", correct: false },
            { text: "वह अत्यधिक हठी, शक्की और क्रूर था", correct: true },
            { text: "वह विलासी था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b> एक बहादुर सैनिक था, लेकिन उसका <b>हठी और शक्की स्वभाव</b> ही <b>अफगान सरदारों से उसके खराब संबंधों</b> और अंततः उसके <b>पतन का कारण</b> बना।"
    },
    {
        question: "प्रश्न 44. सिकंदर लोदी ने किसे संगीत सुनने की अनुमति दी थी, जबकि अन्य पर प्रतिबंध था?",
        answers: shuffle([
            { text: "केवल हिंदुओं को", correct: false },
            { text: "केवल अपने वजीर को", correct: false },
            { text: "केवल एक दरबारी संगीतकार शेख लच्छू को", correct: true },
            { text: "किसी को नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किंवदंतियों के अनुसार, <b>शेख लच्छू</b> नामक एक संगीतकार को <b>सुल्तान की निजी महफिलों</b> में गाने की अनुमति थी, जो संगीत के प्रति उसके <b>व्यक्तिगत प्रेम</b> को दर्शाता है।"
    },
    {
        question: "प्रश्न 45. सिकंदर लोदी ने दिल्ली के आसपास के क्षेत्रों पर नियंत्रण के लिए किस शहर को अपना सैन्य मुख्यालय बनाया?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "संभल", correct: true },
            { text: "बयाना", correct: false },
            { text: "धौलपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आगरा को राजधानी बनाने से पहले</b>, <b>सिकंदर लोदी</b> ने दिल्ली के पास <b>संभल</b> को अपना <b>मुख्यालय</b> बनाकर कई वर्षों तक वहां से शासन चलाया।"
    },
    {
        question: "प्रश्न 46. बहलोल लोदी की मृत्यु के समय उसकी आयु कितनी थी?",
        answers: shuffle([
            { text: "लगभग 50 वर्ष", correct: false },
            { text: "लगभग 60 वर्ष", correct: false },
            { text: "लगभग 70 वर्ष", correct: false },
            { text: "लगभग 80 वर्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> ने एक <b>लंबा जीवन</b> जिया और <b>लगभग 80 वर्ष की आयु</b> में उसकी मृत्यु हुई।"
    },
    {
        question: "प्रश्न 47. पानीपत के प्रथम युद्ध के बाद बाबर ने इब्राहिम लोदी की माँ को क्या पद दिया था?",
        answers: shuffle([
            { text: "उसे कैद कर लिया", correct: false },
            { text: "उसे देश से निकाल दिया", correct: false },
            { text: "उसे 'माँ' का दर्जा दिया और एक जागीर प्रदान की", correct: true },
            { text: "उसकी हत्या करवा दी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बाबर</b> ने <b>उदारता</b> दिखाते हुए <b>इब्राहिम लोदी की माँ को सम्मान दिया</b>, लेकिन बाद में उसी महिला ने <b>बाबर को जहर देकर मारने का प्रयास किया</b> था।"
    },
    {
        question: "प्रश्न 48. लोदी काल में हिंदुओं की सामाजिक स्थिति कैसी थी?",
        answers: shuffle([
            { text: "बहुत अच्छी, उन्हें पूर्ण समानता प्राप्त थी", correct: false },
            { text: "सामान्य, वे व्यापार और प्रशासन में शामिल थे लेकिन धार्मिक प्रतिबंध भी थे", correct: true },
            { text: "बहुत खराब, उन्हें सभी पदों से हटा दिया गया था", correct: false },
            { text: "कोई जानकारी उपलब्ध नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी काल</b> में <b>हिंदू व्यापार, वित्त और निचले स्तर के प्रशासन</b> में <b>महत्वपूर्ण भूमिका</b> निभाते थे, लेकिन <b>सिकंदर लोदी</b> जैसे शासकों के समय उन्हें कई <b>धार्मिक प्रतिबंधों</b> का भी सामना करना पड़ा।"
    },
    {
        question: "प्रश्न 49. किस लोदी शासक ने जौनपुर के शर्की शासकों द्वारा नष्ट की गई दिल्ली की इमारतों की मरम्मत करवाई?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: true },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "किसी ने नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शर्की शासकों</b> ने दिल्ली पर आक्रमण के दौरान कुछ <b>इमारतों को नुकसान पहुँचाया</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर लोदी</b> ने दिल्ली की शान को फिर से स्थापित करने के लिए उनकी <b>मरम्मत करवाई</b>।"
    },
    {
        question: "प्रश्न 50. लोदी वंश के शासन की समाप्ति के साथ भारत में किस युग का अंत हुआ?",
        answers: shuffle([
            { text: "प्राचीन काल", correct: false },
            { text: "सल्तनत काल (मध्यकाल का पूर्वार्ध)", correct: true },
            { text: "मुगल काल", correct: false },
            { text: "आधुनिक काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1526</b> में <b>दिल्ली सल्तनत के अंत</b> के साथ ही भारतीय इतिहास में <b>सल्तनत काल समाप्त</b> हो गया और <b>मुगल काल का प्रारंभ</b> हुआ।"
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