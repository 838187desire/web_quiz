const questions = [
    {
        topHeading: "बाबर पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. बाबर के तोपखाने की गाड़ियाँ (अरबा) किस चीज की बनी होती थीं?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "लकड़ी", correct: false },
            { text: "चमड़ा", correct: false },
            { text: "लकड़ी और चमड़े की रस्सियाँ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तोपों को रखने वाली गाड़ियाँ <b>लकड़ी</b> की होती थीं और उन्हें आपस में <b>चमड़े की मजबूत रस्सियों</b> से जोड़ा जाता था।"
    },
    {
        question: "प्रश्न 2. खानवा के युद्ध में राणा सांगा का साथ किस अफगान सरदार ने दिया था?",
        answers: shuffle([
            { text: "दौलत खान लोदी", correct: false },
            { text: "आलम खान लोदी", correct: false },
            { text: "महमूद लोदी", correct: true },
            { text: "शेर खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्राहिम लोदी का भाई <b>महमूद लोदी</b>, जो अफगानों का नेता था, ने खानवा के युद्ध में बाबर के खिलाफ <b>राणा सांगा</b> का साथ दिया था।"
    },
    {
        question: "प्रश्न 3. खानवा के युद्ध में राणा सांगा के घायल होने के बाद राजपूत सेना का नेतृत्व किसने किया?",
        answers: shuffle([
            { text: "मेदिनी राय", correct: false },
            { text: "झाला अज्जा", correct: true },
            { text: "उदय सिंह", correct: false },
            { text: "मालदेव राठौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब <b>राणा सांगा</b> युद्ध में घायल हो गए, तो उनके जैसा राजसी छत्र धारण कर <b>झाला अज्जा</b> ने युद्ध का नेतृत्व संभाला ताकि सेना का मनोबल बना रहे।"
    },
    {
        question: "प्रश्न 4. बाबर ने अपने साम्राज्य को अपने बेटों में बाँटने की सलाह किससे ली थी?",
        answers: shuffle([
            { text: "अपने पिता से", correct: false },
            { text: "तैमूर की परंपरा से", correct: true },
            { text: "अपने वजीर मीर खलीफा से", correct: false },
            { text: "चंगेज खान की परंपरा से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तैमूरी परंपरा</b> के अनुसार, साम्राज्य को शासक के पुत्रों के बीच विभाजित कर दिया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाबर ने <b>हुमायूँ</b> को इसी परंपरा का पालन करने की वसीयत की थी।"
    },
    {
        question: "प्रश्न 5. बाबर द्वारा शुरू की गई 'खत-ए-बाबरी' क्या थी?",
        answers: shuffle([
            { text: "एक प्रकार की लिपि", correct: true },
            { text: "एक प्रकार की राजस्व प्रणाली", correct: false },
            { text: "एक प्रकार का सिक्का", correct: false },
            { text: "एक शाही फरमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'खत-ए-बाबरी'</b> एक विशेष प्रकार की <b>सुलेखन लिपि</b> थी जिसका आविष्कार बाबर ने किया था।"
    },
    {
        question: "प्रश्न 6. बाबर ने काबुल में 'शाहरुख' नामक चांदी का सिक्का चलाया। यह किसके नाम पर था?",
        answers: shuffle([
            { text: "अपने पिता", correct: false },
            { text: "अपने पुत्र", correct: false },
            { text: "तैमूर के पुत्र शाहरुख मिर्जा", correct: true },
            { text: "ईरान के शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिक्का <b>तैमूर के पुत्र और उत्तराधिकारी शाहरुख मिर्जा</b> के सम्मान में चलाया गया था, जो तैमूरियों के एक महान शासक थे।"
    },
    {
        question: "प्रश्न 7. बाबर ने कंधार पर कब स्थायी रूप से अधिकार कर लिया?",
        answers: shuffle([
            { text: "1504", correct: false },
            { text: "1512", correct: false },
            { text: "1522", correct: true },
            { text: "1526", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई प्रयासों के बाद, <b>1522</b> में बाबर ने <b>कंधार</b> को स्थायी रूप से जीत लिया, जिससे भारत पर आक्रमण के लिए उसका पश्चिमी flank सुरक्षित हो गया।"
    },
    {
        question: "प्रश्न 8. बाबर ने किस रिश्तेदार को खानवा के युद्ध के बाद अफगानों से निपटने के लिए पूर्व में भेजा था?",
        answers: shuffle([
            { text: "हुमायूँ", correct: true },
            { text: "कामरान", correct: false },
            { text: "हिंदाल", correct: false },
            { text: "असकरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खानवा की जीत के बाद, बाबर ने अपने पुत्र <b>हुमायूँ</b> को पूर्वी अफगानों के विद्रोह को दबाने के लिए भेजा था।"
    },
    {
        question: "प्रश्न 9. बाबर की मृत्यु के बारे में प्रचलित कहानी के अनुसार, उसने किसकी बीमारी अपने ऊपर ले ली थी?",
        answers: shuffle([
            { text: "अपनी पत्नी की", correct: false },
            { text: "अपनी माँ की", correct: false },
            { text: "अपने पुत्र हुमायूँ की", correct: true },
            { text: "अपने मित्र की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक प्रसिद्ध किंवदंती के अनुसार, जब <b>हुमायूँ</b> गंभीर रूप से बीमार हो गया, तो बाबर ने ईश्वर से प्रार्थना की कि वह हुमायूँ की बीमारी उसे दे दे और उसके बेटे को जीवनदान दे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद हुमायूँ ठीक हो गया और बाबर बीमार पड़कर मर गया।"
    },
    {
        question: "प्रश्न 10. बाबर के शव को आगरा से काबुल कौन ले गया था?",
        answers: shuffle([
            { text: "हुमायूँ", correct: false },
            { text: "कामरान", correct: false },
            { text: "उसकी विधवा पत्नी बेगा बेगम (या मुबारक युसुफजई)", correct: true },
            { text: "शेरशाह सूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकारों के अनुसार, <b>शेरशाह सूरी</b> के शासनकाल के दौरान बाबर की एक अफगान विधवा पत्नी ने उसके अवशेषों को <b>आगरा से काबुल</b> ले जाकर दफनाया।"
    },
    {
        question: "प्रश्न 11. बाबर के आक्रमण के समय भारत की राजनीतिक स्थिति कैसी थी?",
        answers: shuffle([
            { text: "एक मजबूत केंद्रीय सत्ता थी", correct: false },
            { text: "कई छोटे-छोटे राज्यों में विभाजित और राजनीतिक रूप से अस्थिर थी", correct: true },
            { text: "केवल दो प्रमुख शक्तियाँ थीं", correct: false },
            { text: "पूरी तरह से शांतिपूर्ण थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस समय दिल्ली सल्तनत कमजोर हो चुकी थी और भारत कई <b>स्वतंत्र राज्यों</b> (जैसे मेवाड़, गुजरात, बंगाल, विजयनगर) में बंटा हुआ था, जो आपस में लड़ते रहते थे।"
    },
    {
        question: "प्रश्न 12. बाबर को पंजाब के किस सूबेदार ने इब्राहिम लोदी के खिलाफ आमंत्रित किया था?",
        answers: shuffle([
            { text: "आलम खान लोदी", correct: false },
            { text: "दिलावर खान", correct: false },
            { text: "दौलत खान लोदी", correct: true },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>दौलत खान लोदी</b> इब्राहिम लोदी के व्यवहार से असंतुष्ट था और उसने अपनी स्थिति को मजबूत करने के लिए बाबर को मदद के लिए बुलाया था।"
    },
    {
        question: "प्रश्न 13. बाबर ने अपनी आत्मकथा में भारत की किस चीज की प्रशंसा की है?",
        answers: shuffle([
            { text: "यहाँ के लोग", correct: false },
            { text: "यहाँ के मौसम", correct: false },
            { text: "यहाँ की विशाल धन-संपत्ति और कारीगर", correct: true },
            { text: "यहाँ के घोड़े", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर ने भारत के लोगों, मौसम और फलों की आलोचना की, लेकिन उसने स्वीकार किया कि \"हिंदुस्तान का मुख्य लाभ यह है कि यह एक विशाल देश है और यहाँ <b>सोने-चांदी की बड़ी मात्रा</b> है\" और यहाँ के <b>कारीगर बहुत कुशल</b> हैं।"
    },
    {
        question: "प्रश्न 14. बाबर द्वारा बनवाए गए आराम बाग का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "शालीमार बाग", correct: false },
            { text: "निशात बाग", correct: false },
            { text: "नूर-ए-अफगान", correct: true },
            { text: "हयात बख्श बाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आगरा में बाबर द्वारा स्थापित इस बाग को <b>'नूर-ए-अफगान'</b> (अफगान का प्रकाश) भी कहा जाता था।"
    },
    {
        question: "प्रश्न 15. पानीपत के प्रथम युद्ध में इब्राहिम लोदी के साथ कौन सा महत्वपूर्ण राजा मारा गया था?",
        answers: shuffle([
            { text: "मेदिनी राय", correct: false },
            { text: "राणा सांगा", correct: false },
            { text: "ग्वालियर का राजा विक्रमाजीत", correct: true },
            { text: "मालदेव राठौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्वालियर के तोमर राजा <b>विक्रमाजीत</b> ने इब्राहिम लोदी का साथ दिया और पानीपत के युद्ध में वीरतापूर्वक लड़ते हुए मारे गए।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध <b>कोहिनूर हीरा</b> उन्हीं के परिवार से हुमायूँ को मिला था।"
    },
    {
        question: "प्रश्न 16. चंदेरी के युद्ध का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "अफगानों को हराना", correct: false },
            { text: "राजपूतों की शक्ति को पूरी तरह से कुचलना और मालवा के रास्ते को सुरक्षित करना", correct: true },
            { text: "धन लूटना", correct: false },
            { text: "राणा सांगा से बदला लेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खानवा के बाद, <b>चंदेरी</b> राजपूत शक्ति का एक और महत्वपूर्ण केंद्र था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस पर विजय प्राप्त करके बाबर ने राजपूताना में अपनी स्थिति मजबूत की और <b>गुजरात तथा मालवा का मार्ग खोल दिया</b>।"
    },
    {
        question: "प्रश्न 17. बाबर ने कंधार को किससे जीता था?",
        answers: shuffle([
            { text: "उजबेकों से", correct: false },
            { text: "ईरान के सफवियों से", correct: false },
            { text: "अर्घूनों से", correct: true },
            { text: "अफगानों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1522</b> में, बाबर ने <b>शाह बेग अर्घून</b> से कंधार का किला छीन लिया था।"
    },
    {
        question: "प्रश्न 18. बाबर ने किस सूफी सिलसिले में रुचि दिखाई?",
        answers: shuffle([
            { text: "चिश्ती", correct: false },
            { text: "सुहरावर्दी", correct: false },
            { text: "कादिरी", correct: false },
            { text: "नक्शबंदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर <b>नक्शबंदी</b> सूफी संत <b>ख्वाजा उबैदुल्ला अहरार</b> का अनुयायी था और उसने अपनी आत्मकथा में उनके प्रति गहरी श्रद्धा व्यक्त की है।"
    },
    {
        question: "प्रश्न 19. 'भेरा का किला' वर्तमान में कहाँ स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "अफगानिस्तान", correct: false },
            { text: "पाकिस्तान", correct: true },
            { text: "उज्बेकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>भेरा</b>, जहाँ बाबर ने पहली बार तोपों का इस्तेमाल किया था, वर्तमान में <b>पाकिस्तान के पंजाब प्रांत</b> में स्थित है।"
    },
    {
        question: "प्रश्न 20. बाबर की सेना में 'तुलुगमा' का नेतृत्व कौन करता था?",
        answers: shuffle([
            { text: "तोपची", correct: false },
            { text: "घुड़सवार तीरंदाज", correct: true },
            { text: "पैदल सैनिक", correct: false },
            { text: "हाथी सवार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तुलुगमा रणनीति</b> का मुख्य हिस्सा तेज गति वाले <b>घुड़सवार तीरंदाज</b> होते थे, जो दुश्मन को किनारों और पीछे से घेरते थे।"
    },
    {
        question: "प्रश्न 21. बाबर के आक्रमण के समय दिल्ली की सल्तनत की कमजोरी का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "बाहरी आक्रमण", correct: false },
            { text: "अकाल", correct: false },
            { text: "सुल्तान और अफगान सरदारों के बीच अविश्वास और संघर्ष", correct: true },
            { text: "आर्थिक दिवालियापन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b> एक निरंकुश शासक था, जिससे दौलत खान लोदी जैसे शक्तिशाली अफगान अमीर नाराज थे और उन्होंने सुल्तान के खिलाफ साजिशें रचीं।"
    },
    {
        question: "प्रश्न 22. बाबर ने अपने किस बेटे को कोहिनूर हीरा भेंट किया था?",
        answers: shuffle([
            { text: "कामरान", correct: false },
            { text: "असकरी", correct: false },
            { text: "हिंदाल", correct: false },
            { text: "हुमायूँ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आगरा पर कब्जा करने के बाद, <b>हुमायूँ</b> ने ग्वालियर के राजा विक्रमाजीत के परिवार से प्राप्त प्रसिद्ध <b>कोहिनूर हीरा</b> बाबर को भेंट किया, जिसे बाबर ने वापस हुमायूँ को दे दिया।"
    },
    {
        question: "प्रश्न 23. बाबर ने किस निर्माण कार्य को 'हिंदुस्तानी तरीके' से बनवाया और उसकी आलोचना की?",
        answers: shuffle([
            { text: "काबुली बाग मस्जिद", correct: false },
            { text: "आगरा की मस्जिद", correct: false },
            { text: "ग्वालियर में एक महल", correct: true },
            { text: "आराम बाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बाबरनामा</b> में, बाबर ने ग्वालियर में राजा मान सिंह के महल की प्रशंसा की है लेकिन यह भी लिखा है कि उसने स्थानीय कारीगरों से जो इमारतें बनवाईं, वे व्यवस्थित और सुंदर नहीं थीं।"
    },
    {
        question: "प्रश्न 24. बाबर के साम्राज्य में कौन सा क्षेत्र शामिल नहीं था?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "दिल्ली-आगरा क्षेत्र", correct: false },
            { text: "बंगाल", correct: true },
            { text: "काबुल और कंधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि बाबर ने घाघरा के युद्ध में बंगाल के शासक <b>नुसरत शाह</b> को संधि करने के लिए मजबूर किया, लेकिन <b>बंगाल</b> पूरी तरह से उसके साम्राज्य में शामिल नहीं हुआ था।"
    },
    {
        question: "प्रश्न 25. 'बाबरी' नामक चांदी का सिक्का बाबर ने कहाँ चलाया था?",
        answers: shuffle([
            { text: "काबुल", correct: false },
            { text: "कंधार", correct: true },
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कंधार</b> विजय के बाद, बाबर ने वहाँ <b>'बाबरी'</b> नामक एक विशेष प्रकार का चांदी का सिक्का जारी किया था।"
    },
    {
        question: "प्रश्न 26. बाबर की विजयों का सही कालानुक्रम क्या है?",
        answers: shuffle([
            { text: "खानवा, पानीपत, घाघरा, चंदेरी", correct: false },
            { text: "पानीपत, खानवा, चंदेरी, घाघरा", correct: true },
            { text: "पानीपत, चंदेरी, खानवा, घाघरा", correct: false },
            { text: "खानवा, घाघरा, पानीपत, चंदेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर के भारत में चार प्रमुख युद्धों का सही क्रम है: <b>पानीपत (1526)</b>, <b>खानवा (1527)</b>, <b>चंदेरी (1528)</b>, और <b>घाघरा (1529)</b>।"
    },
    {
        question: "प्रश्न 27. बाबर ने अपनी आत्मकथा में किस नदी का कई बार उल्लेख किया है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सिंधु", correct: true },
            { text: "काबुल नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में प्रवेश करने के लिए <b>सिंधु नदी</b> को पार करना एक महत्वपूर्ण चरण था, इसलिए बाबर ने अपनी आत्मकथा में इसका कई बार जिक्र किया है।"
    },
    {
        question: "प्रश्न 28. बाबर के चरित्र का कौन सा गुण उसकी आत्मकथा से प्रकट होता है?",
        answers: shuffle([
            { text: "वह एक कठोर और निर्दयी व्यक्ति था", correct: false },
            { text: "वह प्रकृति प्रेमी, साहसी और स्पष्टवादी था", correct: true },
            { text: "वह एक धोखेबाज और षड्यंत्रकारी था", correct: false },
            { text: "वह एक आलसी और विलासी शासक था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बाबरनामा</b> से पता चलता है कि बाबर <b>प्रकृति से बहुत प्रेम</b> करता था और उसने अपनी सफलताओं और विफलताओं दोनों को बिना किसी लाग-लपेट के ईमानदारी से लिखा है।"
    },
    {
        question: "प्रश्न 29. राणा सांगा की मृत्यु कैसे हुई?",
        answers: shuffle([
            { text: "खानवा के युद्ध में", correct: false },
            { text: "बाबर द्वारा हत्या कर दी गई", correct: false },
            { text: "युद्ध के बाद उसके ही सामंतों द्वारा जहर दे दिया गया", correct: true },
            { text: "बीमारी से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खानवा के युद्ध में घायल होने के बाद, <b>राणा सांगा</b> बाबर से एक और युद्ध की तैयारी कर रहे थे।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन उनके ही कुछ सामंत जो और युद्ध नहीं चाहते थे, ने उन्हें <b>जहर देकर मार डाला</b>।"
    },
    {
        question: "प्रश्न 30. बाबर ने किस भारतीय पक्षी को सबसे सुंदर बताया है?",
        answers: shuffle([
            { text: "मोर", correct: true },
            { text: "तोता", correct: false },
            { text: "कबूतर", correct: false },
            { text: "बाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबरनामा में बाबर ने <b>मोर</b> की सुंदरता की बहुत प्रशंसा की है, हालांकि उसने भारत के अधिकांश जानवरों और पक्षियों को आकर्षक नहीं माना।"
    },
    {
        question: "प्रश्न 31. बाबर ने किस विजय के बाद गाजी की उपाधि धारण की?",
        answers: shuffle([
            { text: "पानीपत की विजय", correct: false },
            { text: "खानवा की विजय", correct: true },
            { text: "चंदेरी की विजय", correct: false },
            { text: "घाघरा की विजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खानवा के युद्ध</b> में राणा सांगा को पराजित करने के बाद बाबर ने <b>गाजी</b> की उपाधि धारण की।"
    },
    {
        question: "प्रश्न 32. बाबर ने अपनी सैन्य सफलताओं के लिए किसे श्रेय दिया?",
        answers: shuffle([
            { text: "अपनी विशाल सेना को", correct: false },
            { text: "अपने तोपखाने को", correct: false },
            { text: "ईश्वर की कृपा और अपनी दृढ़ता को", correct: true },
            { text: "अपने सहयोगियों के धोखे को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर अपनी आत्मकथा में अक्सर अपनी जीतों को <b>ईश्वर की कृपा</b> का परिणाम बताता है, साथ ही वह अपने <b>धैर्य और दृढ़ संकल्प</b> के महत्व को भी स्वीकार करता है।"
    },
    {
        question: "प्रश्न 33. पानीपत के प्रथम युद्ध में बाबर के पास लगभग कितने सैनिक थे?",
        answers: shuffle([
            { text: "1 लाख", correct: false },
            { text: "50,000", correct: false },
            { text: "12,000 से 15,000", correct: true },
            { text: "25,000", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्राहिम लोदी की लगभग एक लाख की सेना की तुलना में, बाबर की सेना बहुत छोटी थी, जिसमें लगभग <b>12,000 से 15,000</b> सैनिक थे।"
    },
    {
        question: "प्रश्न 34. बाबर ने अपने साम्राज्य को 'जागीरों' में बांटा, यह व्यवस्था उसने किससे सीखी थी?",
        answers: shuffle([
            { text: "तैमूरियों और मंगोलों से", correct: true },
            { text: "दिल्ली सल्तनत से", correct: false },
            { text: "ईरान के सफवियों से", correct: false },
            { text: "उस्मानी तुर्कों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>मध्य एशियाई परंपरा</b> थी जिसमें विजित प्रदेशों को सरदारों और रिश्तेदारों के बीच <b>जागीर</b> के रूप में बांट दिया जाता था।"
    },
    {
        question: "प्रश्न 35. 'बाघों का राजकुमार' किसे कहा जाता है?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "तैमूर", correct: false },
            { text: "चंगेज खान", correct: false },
            { text: "बाबर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बाबर</b> के नाम का अर्थ <b>'बाघ'</b> होता है, और उसके साहसिक और लड़ाकू स्वभाव के कारण उसे यह उपमा दी जाती है।"
    },
    {
        question: "प्रश्न 36. बाबर की वंशावली में तुर्क और मंगोल दोनों रक्त का मिश्रण था। इस वंश को क्या कहा गया?",
        answers: shuffle([
            { text: "तैमूरी वंश", correct: false },
            { text: "चगताई तुर्क वंश", correct: true },
            { text: "मंगोल वंश", correct: false },
            { text: "मुगल वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंगेज खान के दूसरे बेटे <b>चगताई खान</b> के नाम पर, इस तुर्क-मंगोल मिश्रित वंश को <b>'चगताई'</b> कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>'मुगल'</b> शब्द बाद में लोकप्रिय हुआ।"
    },
    {
        question: "प्रश्न 37. बाबर ने अपने किस अभियान को 'मूर्तिपूजा के खिलाफ युद्ध' के रूप में वर्णित किया?",
        answers: shuffle([
            { text: "बाजौर अभियान", correct: false },
            { text: "चंदेरी अभियान", correct: true },
            { text: "खानवा अभियान", correct: false },
            { text: "पानीपत अभियान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चंदेरी</b> में राजपूतों के खिलाफ युद्ध के बाद, बाबर ने विजय के प्रतीक के रूप में राजपूतों के सिरों की एक मीनार बनवाई और इस अभियान को मूर्तिपूजा के विरुद्ध एक सफलता बताया।"
    },
    {
        question: "प्रश्न 38. बाबर ने भारत पर आक्रमण का एक कारण क्या बताया?",
        answers: shuffle([
            { text: "भारत पर शासन करना उसका वंशानुगत अधिकार था", correct: true },
            { text: "वह भारत को लूटना चाहता था", correct: false },
            { text: "वह भारत में इस्लाम का प्रसार करना चाहता था", correct: false },
            { text: "उसे राणा सांगा ने धोखा दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि उसके पूर्वज <b>तैमूर</b> ने दिल्ली पर विजय प्राप्त की थी, बाबर का मानना था कि पंजाब और दिल्ली के क्षेत्रों पर शासन करना उसका वैध <b>वंशानुगत अधिकार</b> है।"
    },
    {
        question: "प्रश्न 39. बाबर के जीवन का सबसे बड़ा दुर्भाग्य क्या था?",
        answers: shuffle([
            { text: "भारत पर आक्रमण", correct: false },
            { text: "अपने पैतृक घर (मध्य एशिया) को खोना", correct: true },
            { text: "हुमायूँ का जन्म", correct: false },
            { text: "खानवा का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर अपनी पूरी जिंदगी <b>समरकंद और फरगना</b> को वापस पाने की लालसा रखता रहा।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत का बादशाह बनने के बाद भी, उसका मन हमेशा अपनी <b>मध्य एशियाई मातृभूमि</b> में लगा रहा।"
    },
    {
        question: "प्रश्न 40. बाबर की न्याय प्रणाली कैसी थी?",
        answers: shuffle([
            { text: "बहुत व्यवस्थित और लिखित कानूनों पर आधारित", correct: false },
            { text: "त्वरित और कठोर, इस्लामी कानून (शरीयत) पर आधारित", correct: true },
            { text: "हिंदुओं और मुसलमानों के लिए अलग-अलग", correct: false },
            { text: "उसने कोई न्याय प्रणाली स्थापित नहीं की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर एक सैनिक था और उसका शासनकाल छोटा था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी न्याय व्यवस्था मुख्य रूप से सैन्य अनुशासन और <b>शरीयत</b> पर आधारित थी, जिसमें निर्णय जल्दी और अक्सर कठोरता से दिए जाते थे।"
    },
    {
        question: "प्रश्न 41. बाबर ने किस शहर के बारे में लिखा है कि 'काबुल की जलवायु जैसी स्वास्थ्यवर्धक जगह पूरी दुनिया में नहीं है'?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "समरकंद", correct: false },
            { text: "काबुल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर को <b>काबुल</b> से बहुत प्रेम था और उसने अपनी आत्मकथा में वहाँ के मौसम, फलों और प्राकृतिक सौंदर्य की बहुत प्रशंसा की है।"
    },
    {
        question: "प्रश्न 42. खानवा के युद्ध के बाद बाबर ने कौन सा निर्णय लिया जो उसकी दूरदर्शिता को दर्शाता है?",
        answers: shuffle([
            { text: "राजपूतों का पूरी तरह से सफाया कर देना", correct: false },
            { text: "राणा सांगा के पुत्रों के साथ संधि करना", correct: false },
            { text: "दिल्ली को अपनी राजधानी बनाना", correct: false },
            { text: "आगरा को अपनी राजधानी बनाना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर ने समझा कि दिल्ली के बजाय <b>आगरा</b> रणनीतिक रूप से राजपूताना, मालवा और पूर्वी क्षेत्रों पर नियंत्रण के लिए बेहतर केंद्र है, इसलिए उसने आगरा को अपनी <b>राजधानी</b> के रूप में विकसित किया।"
    },
    {
        question: "प्रश्न 43. बाबर का वजीर (प्रधानमंत्री) कौन था?",
        answers: shuffle([
            { text: "मीर बाकी", correct: false },
            { text: "मीर खलीफा (निजामुद्दीन)", correct: true },
            { text: "उस्ताद अली", correct: false },
            { text: "मुस्तफा खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मीर खलीफा</b> बाबर का एक पुराना और विश्वसनीय सरदार था, जो उसके प्रधानमंत्री के रूप में कार्य करता था।"
    },
    {
        question: "प्रश्न 44. बाबर की मृत्यु के समय हुमायूँ कहाँ का सूबेदार था?",
        answers: shuffle([
            { text: "काबुल", correct: false },
            { text: "पंजाब", correct: false },
            { text: "संभल", correct: false },
            { text: "बदख्शां", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हुमायूँ बदख्शां</b> (मध्य एशिया) में सूबेदार था, जहाँ वह बीमार पड़ गया और उसे इलाज के लिए आगरा लाया गया।"
    },
    {
        question: "प्रश्न 45. बाबर ने अपनी आत्मकथा में किस जानवर का विस्तृत वर्णन किया है जो भारत में पाया जाता है?",
        answers: shuffle([
            { text: "बाघ", correct: false },
            { text: "शेर", correct: false },
            { text: "हाथी", correct: true },
            { text: "गैंडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर ने <b>हाथी</b> को एक अद्भुत और बुद्धिमान जानवर बताया है और युद्ध तथा अन्य कार्यों में उसके उपयोग का विस्तृत वर्णन किया है।"
    },
    {
        question: "प्रश्न 46. बाबर ने किस कारण से भारत में रहने का निश्चय किया?",
        answers: shuffle([
            { text: "उसे भारत का मौसम पसंद था", correct: false },
            { text: "मध्य एशिया में उजबेकों का खतरा और भारत की विशाल संपत्ति", correct: true },
            { text: "उसके सैनिकों ने वापस जाने से मना कर दिया", correct: false },
            { text: "राणा सांगा ने उसे चुनौती दी थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर जानता था कि वह <b>उजबेकों</b> के कारण मध्य एशिया में एक स्थायी साम्राज्य नहीं बना सकता, जबकि भारत में अपार <b>धन-संपदा और राजनीतिक कमजोरी</b> थी, जो एक साम्राज्य स्थापित करने के लिए अनुकूल थी।"
    },
    {
        question: "प्रश्न 47. बाबर ने किस नदी के किनारे अपने विजय स्तंभ का निर्माण करवाया था?",
        answers: shuffle([
            { text: "यमुना", correct: true },
            { text: "गंगा", correct: false },
            { text: "घाघरा", correct: false },
            { text: "सिंधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राणा सांगा पर <b>खानवा की जीत</b> के बाद, बाबर ने आगरा के पास <b>यमुना नदी</b> के किनारे एक बाग और विजय स्तंभ का निर्माण करवाया था।"
    },
    {
        question: "प्रश्न 48. बाबर द्वारा उपयोग की जाने वाली तुर्की तोपें कैसी थीं?",
        answers: shuffle([
            { text: "बहुत भारी और स्थिर", correct: false },
            { text: "हल्की और आसानी से एक स्थान से दूसरे स्थान पर ले जाने योग्य", correct: true },
            { text: "केवल किलों को तोड़ने के लिए", correct: false },
            { text: "केवल जहाजों पर इस्तेमाल के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर की तोपें अपेक्षाकृत <b>हल्की</b> थीं, जिन्हें बैलगाड़ियों पर रखकर तेजी से रणभूमि में कहीं भी ले जाया जा सकता था, जो उसकी सफलता का एक कारण बना।"
    },
    {
        question: "प्रश्न 49. बाबर के चार पुत्रों के नाम क्या थे?",
        answers: shuffle([
            { text: "हुमायूँ, शेरशाह, असकरी, हिंदाल", correct: false },
            { text: "हुमायूँ, कामरान, असकरी, हिंदाल", correct: true },
            { text: "हुमायूँ, अकबर, कामरान, असकरी", correct: false },
            { text: "हुमायूँ, परवेज, खुर्रम, शहरयार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर के चार प्रमुख पुत्र थे: <b>हुमायूँ</b> (सबसे बड़ा), <b>कामरान</b>, <b>असकरी</b> और <b>हिंदाल</b> (सबसे छोटा)।"
    },
    {
        question: "प्रश्न 50. बाबर ने भारत में जो साम्राज्य स्थापित किया, वह किस नाम से जाना गया?",
        answers: shuffle([
            { text: "तैमूरी साम्राज्य", correct: false },
            { text: "अफगान साम्राज्य", correct: false },
            { text: "तुर्की साम्राज्य", correct: false },
            { text: "मुगल साम्राज्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि वे स्वयं को तैमूरी या चगताई तुर्क कहते थे, लेकिन भारत में उनके द्वारा स्थापित साम्राज्य को <b>'मुगल'</b> (मंगोल का फारसी रूप) साम्राज्य के नाम से जाना गया।"
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