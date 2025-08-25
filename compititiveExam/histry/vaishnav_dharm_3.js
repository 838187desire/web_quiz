const questions = [
    {
        topHeading: "वैष्णव धर्म पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.31)"
    },
    {
        question: "भगवान विष्णु के 'परशुराम' अवतार का उद्देश्य क्या था?",
        answers: [
            { text: "वेदों की रक्षा", correct: false },
            { text: "हिरण्यकशिपु का वध", correct: false },
            { text: "पृथ्वी से क्षत्रियों का संहार", correct: true },
            { text: "समुद्र मंथन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परशुराम, भगवान विष्णु के छठे अवतार हैं, जिन्होंने पृथ्वी से दुष्ट और अत्याचारी क्षत्रियों का 21 बार संहार किया था।"
    },
    {
        question: "'जगन्नाथ मंदिर' किस शहर में स्थित है?",
        answers: [
            { text: "भुवनेश्वर", correct: false },
            { text: "पुरी", correct: true },
            { text: "कटक", correct: false },
            { text: "कोणार्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगन्नाथ मंदिर भारत के ओडिशा राज्य के पुरी शहर में स्थित है, जो वैष्णव धर्म के चार धामों में से एक है।"
    },
    {
        question: "'वैष्णव धर्म' में 'श्री संप्रदाय' के किस दार्शनिक सिद्धांत का प्रतिपादन किया गया है?",
        answers: [
            { text: "द्वैतवाद", correct: false },
            { text: "विशिष्टाद्वैतवाद", correct: true },
            { text: "अद्वैतवाद", correct: false },
            { text: "शुद्धाद्वैतवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्री संप्रदाय के संस्थापक रामानुज ने 'विशिष्टाद्वैतवाद' (Qualified Non-dualism) का प्रतिपादन किया था।"
    },
    {
        question: "'आलवार' संतों का संबंध किस काल से था?",
        answers: [
            { text: "3री-5वीं शताब्दी", correct: false },
            { text: "7वीं-10वीं शताब्दी", correct: true },
            { text: "12वीं-14वीं शताब्दी", correct: false },
            { text: "15वीं-17वीं शताब्दी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संत 7वीं से 10वीं शताब्दी के बीच दक्षिण भारत में वैष्णव भक्ति आंदोलन के प्रमुख प्रचारक थे।"
    },
    {
        question: "भगवान विष्णु के 'वराह' अवतार का प्रतीक क्या है?",
        answers: [
            { text: "मछली", correct: false },
            { text: "कछुआ", correct: false },
            { text: "सूअर", correct: true },
            { text: "शेर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वराह, भगवान विष्णु के तीसरे अवतार हैं, जिनका रूप एक सूअर का था।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने हिरण्याक्ष से पृथ्वी को बचाया था।"
    },
    {
        question: "'भागवत पुराण' किस देवता को समर्पित है?",
        answers: [
            { text: "शिव", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु और उनके अवतारों", correct: true },
            { text: "शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भागवत पुराण मुख्य रूप से भगवान विष्णु और उनके अवतारों, विशेषकर भगवान कृष्ण की लीलाओं पर केंद्रित है।"
    },
    {
        question: "'निंबार्क संप्रदाय' के संस्थापक कौन थे?",
        answers: [
            { text: "रामानुज", correct: false },
            { text: "माधवाचार्य", correct: false },
            { text: "निंबार्काचार्य", correct: true },
            { text: "वल्लभाचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निंबार्काचार्य ने 'निंबार्क संप्रदाय' की स्थापना की थी, जो 'द्वैताद्वैत' दर्शन पर आधारित है।"
    },
    {
        question: "'भगवद गीता' में वर्णित 'स्थितप्रज्ञ' का क्या अर्थ है?",
        answers: [
            { text: "महान योद्धा", correct: false },
            { text: "योगी", correct: false },
            { text: "स्थिर बुद्धि वाला व्यक्ति", correct: true },
            { text: "कर्मयोगी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्थितप्रज्ञ' उस व्यक्ति को कहते हैं जिसकी बुद्धि सुख-दुःख, लाभ-हानि में स्थिर रहती है।"
    },
    {
        question: "'द्वारका' शहर किस भगवान से संबंधित है?",
        answers: [
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "विष्णु", correct: false },
            { text: "परशुराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वारका, गुजरात में स्थित एक प्राचीन शहर है, जिसे भगवान कृष्ण ने अपनी राजधानी बनाया था।"
    },
    {
        question: "'पुष्टि मार्ग' की स्थापना किसने की थी?",
        answers: [
            { text: "रामानुज", correct: false },
            { text: "माधवाचार्य", correct: false },
            { text: "वल्लभाचार्य", correct: true },
            { text: "चैतन्य महाप्रभु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वल्लभाचार्य ने 'पुष्टि मार्ग' नामक वैष्णव संप्रदाय की स्थापना की थी, जो कृष्ण की भक्ति और उनकी कृपा पर जोर देता है।"
    },
    {
        question: "'माधवाचार्य' किस दार्शनिक सिद्धांत के प्रवर्तक थे?",
        answers: [
            { text: "अद्वैतवाद", correct: false },
            { text: "विशिष्टाद्वैतवाद", correct: false },
            { text: "द्वैतवाद", correct: true },
            { text: "शुद्धाद्वैतवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य ने 'द्वैतवाद' दर्शन का प्रतिपादन किया था, जिसके अनुसार ईश्वर, आत्मा और भौतिक जगत पूरी तरह से भिन्न हैं।"
    },
    {
        question: "भगवान विष्णु के 'कल्कि' अवतार का क्या उद्देश्य है?",
        answers: [
            { text: "वेदों की रक्षा", correct: false },
            { text: "धर्म की स्थापना", correct: false },
            { text: "कलियुग का अंत", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कल्कि, भगवान विष्णु का अंतिम अवतार है, जो कलियुग के अंत में दुष्टों का संहार कर धर्म की पुनः स्थापना करेंगे।"
    },
    {
        question: "'गरुड़ पुराण' किस देवता से संबंधित है?",
        answers: [
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "ब्रह्मा", correct: false },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गरुड़ पुराण वैष्णव धर्म का एक प्रमुख ग्रंथ है, जिसमें भगवान विष्णु और उनके वाहन गरुड़ के बीच संवाद का वर्णन है।"
    },
    {
        question: "'नरसिंह' अवतार में भगवान विष्णु ने किसका वध किया था?",
        answers: [
            { text: "रावण", correct: false },
            { text: "हिरण्याक्ष", correct: false },
            { text: "हिरण्यकशिपु", correct: true },
            { text: "कंस", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंह (आधा मानव, आधा शेर) अवतार में भगवान विष्णु ने अपने भक्त प्रह्लाद की रक्षा के लिए उसके पिता हिरण्यकशिपु का वध किया था।"
    },
    {
        question: "'दशावतार' की अवधारणा किस देवता से संबंधित है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: true },
            { text: "शिव", correct: false },
            { text: "शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशावतार, यानी दस अवतार, भगवान विष्णु के दस प्रमुख अवतारों की अवधारणा है, जो धर्म की रक्षा के लिए अवतरित हुए।"
    },
    {
        question: "'वृंदावन' और 'मथुरा' किस देवता के जीवन से जुड़े हैं?",
        answers: [
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "विष्णु", correct: false },
            { text: "परशुराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृंदावन और मथुरा भगवान कृष्ण के बचपन और युवावस्था से जुड़े हुए स्थान हैं।"
    },
    {
        question: "'अलवर' संतों की भक्ति कविताओं का संग्रह क्या कहलाता है?",
        answers: [
            { text: "तिरुप्पवाई", correct: false },
            { text: "दिव्य प्रबंधम्", correct: true },
            { text: "तमिल वेद", correct: false },
            { text: "श्री सूक्त", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संतों द्वारा रचित भक्ति गीतों के संग्रह को 'दिव्य प्रबंधम्' के नाम से जाना जाता है।"
    },
    {
        question: "'जगन्नाथ पुरी' की रथ यात्रा में कौन-से देवता शामिल होते हैं?",
        answers: [
            { text: "केवल जगन्नाथ", correct: false },
            { text: "जगन्नाथ, बलभद्र और सुभद्रा", correct: true },
            { text: "केवल कृष्ण", correct: false },
            { text: "कृष्ण और बलराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगन्नाथ पुरी की प्रसिद्ध रथ यात्रा में भगवान जगन्नाथ, उनके बड़े भाई बलभद्र और बहन सुभद्रा के रथ निकाले जाते हैं।"
    },
    {
        question: "'वैकुंठ' किस देवता का निवास स्थान माना जाता है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदू पौराणिक कथाओं के अनुसार, वैकुंठ या वैकुंठ लोक भगवान विष्णु का निवास स्थान है।"
    },
    {
        question: "'गौड़ीय संप्रदाय' के संस्थापक कौन थे?",
        answers: [
            { text: "रामानुज", correct: false },
            { text: "माधवाचार्य", correct: false },
            { text: "चैतन्य महाप्रभु", correct: true },
            { text: "निंबार्काचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौड़ीय संप्रदाय, जो कृष्ण भक्ति पर केंद्रित है, की स्थापना 16वीं शताब्दी में चैतन्य महाप्रभु ने की थी।"
    },
    {
        question: "'रामानंद' किस भक्ति संप्रदाय के प्रमुख प्रचारक थे?",
        answers: [
            { text: "शिव भक्ति", correct: false },
            { text: "राम भक्ति", correct: true },
            { text: "कृष्ण भक्ति", correct: false },
            { text: "देवी भक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामानंद ने उत्तर भारत में राम भक्ति को लोकप्रिय बनाया और उनके शिष्य कबीर जैसे संत थे।"
    },
    {
        question: "'वैष्णव धर्म' में 'पद्मनाभ' शब्द का क्या अर्थ है?",
        answers: [
            { text: "कमल की नाभि वाला", correct: true },
            { text: "कमल के नेत्रों वाला", correct: false },
            { text: "कमल के चरणों वाला", correct: false },
            { text: "कमल के हृदय वाला", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पद्मनाभ' शब्द का अर्थ है 'कमल की नाभि वाला', जो भगवान विष्णु के उस रूप को दर्शाता है, जहाँ उनकी नाभि से ब्रह्मा जी का कमल निकलता है।"
    },
    {
        question: "'वैष्णव धर्म' का 'ब्रह्म संप्रदाय' किस दार्शनिक सिद्धांत पर आधारित है?",
        answers: [
            { text: "अद्वैत", correct: false },
            { text: "द्वैत", correct: true },
            { text: "विशिष्टाद्वैत", correct: false },
            { text: "शुद्धाद्वैत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य द्वारा स्थापित ब्रह्म संप्रदाय 'द्वैत' दर्शन पर आधारित है, जो ईश्वर और आत्मा को अलग-अलग मानता है।"
    },
    {
        question: "भगवान विष्णु के 'कूर्म' (कछुआ) अवतार का संबंध किससे है?",
        answers: [
            { text: "हिरण्याक्ष का वध", correct: false },
            { text: "राजा बलि को पाताल भेजना", correct: false },
            { text: "समुद्र मंथन", correct: true },
            { text: "वेदों का उद्धार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कूर्म अवतार में, भगवान विष्णु ने मंदराचल पर्वत को अपनी पीठ पर धारण किया था, जिसका उपयोग समुद्र मंथन के लिए किया गया था।"
    },
    {
        question: "'वैष्णव' शब्द का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "विष्णु के भक्त", correct: true },
            { text: "शक्तिशाली", correct: false },
            { text: "कल्याणकारी", correct: false },
            { text: "दानशील", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वैष्णव' शब्द का अर्थ है 'विष्णु का अनुयायी' या 'विष्णु का भक्त'।"
    },
    {
        question: "'जगन्नाथ पुरी' की रथ यात्रा के दौरान किस देवता का रथ सबसे आगे चलता है?",
        answers: [
            { text: "जगन्नाथ", correct: false },
            { text: "बलभद्र", correct: true },
            { text: "सुभद्रा", correct: false },
            { text: "कृष्ण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगन्नाथ पुरी की रथ यात्रा में सबसे आगे बलभद्र (भगवान जगन्नाथ के बड़े भाई) का रथ, उसके बाद सुभद्रा का और अंत में जगन्नाथ का रथ चलता है।"
    },
    {
        question: "भगवान विष्णु के 'दशावतार' की अवधारणा का पहला व्यवस्थित वर्णन किस पुराण में मिलता है?",
        answers: [
            { text: "भागवत पुराण", correct: false },
            { text: "मत्स्य पुराण", correct: true },
            { text: "विष्णु पुराण", correct: false },
            { text: "गरुड़ पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशावतारों की अवधारणा का पहला व्यवस्थित उल्लेख मत्स्य पुराण में मिलता है, जहाँ भगवान विष्णु के दस अवतारों को क्रमबद्ध रूप से बताया गया है।"
    },
    {
        question: "'वैकुंठ' का दूसरा नाम क्या है?",
        answers: [
            { text: "शिवलोक", correct: false },
            { text: "ब्रह्मलोक", correct: false },
            { text: "परमानंद", correct: false },
            { text: "बैकुंठ लोक", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैकुंठ को बैकुंठ लोक के नाम से भी जाना जाता है, जिसे भगवान विष्णु का निवास स्थान माना जाता है।"
    },
    {
        question: "'चैतन्य महाप्रभु' किस सदी में हुए थे?",
        answers: [
            { text: "12वीं सदी", correct: false },
            { text: "14वीं सदी", correct: false },
            { text: "16वीं सदी", correct: true },
            { text: "18वीं सदी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चैतन्य महाप्रभु (1486-1534) 16वीं सदी के एक महान संत और गौड़ीय वैष्णव संप्रदाय के संस्थापक थे।"
    },
    {
        question: "'गरुड़' को किस रूप में दर्शाया जाता है?",
        answers: [
            { text: "सिंह", correct: false },
            { text: "हाथी", correct: false },
            { text: "बाज", correct: true },
            { text: "घोड़ा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गरुड़, भगवान विष्णु का वाहन, एक विशालकाय बाज के रूप में दर्शाया जाता है।"
    },
    {
        question: "'अलवर' संतों की भक्ति कविताओं का संग्रह किस नाम से जाना जाता है?",
        answers: [
            { text: "तिरुप्पवाई", correct: false },
            { text: "दिव्य प्रबंधम्", correct: true },
            { text: "नयनादित्यम्", correct: false },
            { text: "वेद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संतों द्वारा रचित भक्ति गीतों के संग्रह को 'दिव्य प्रबंधम्' कहते हैं।"
    },
    {
        question: "'रामानुज' द्वारा स्थापित 'विशिष्टाद्वैतवाद' दर्शन के अनुसार, आत्मा और परमात्मा में क्या संबंध है?",
        answers: [
            { text: "वे पूरी तरह से एक हैं।", correct: false },
            { text: "वे पूरी तरह से भिन्न हैं।", correct: false },
            { text: "वे एक होकर भी भिन्न हैं।", correct: true },
            { text: "उनका कोई संबंध नहीं है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशिष्टाद्वैतवाद के अनुसार, आत्मा और भौतिक जगत परमात्मा के ही अंश हैं, इसलिए वे एक होते हुए भी अपनी व्यक्तिगत पहचान बनाए रखते हैं।"
    },
    {
        question: "'वैष्णव धर्म' में 'गोपाल' शब्द किसके लिए प्रयोग किया जाता है?",
        answers: [
            { text: "राम", correct: false },
            { text: "विष्णु", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "परशुराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोपाल' शब्द का अर्थ है 'गाय को पालने वाला', और यह भगवान कृष्ण के बचपन से जुड़ा एक नाम है।"
    },
    {
        question: "'भगवद गीता' में वर्णित 'कर्मयोग' का क्या अर्थ है?",
        answers: [
            { text: "फल की इच्छा के बिना कर्तव्य करना", correct: true },
            { text: "तपस्या करना", correct: false },
            { text: "दान देना", correct: false },
            { text: "यज्ञ करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कर्मयोग' का सिद्धांत यह है कि व्यक्ति को फल की चिंता किए बिना अपने कर्तव्य का पालन करना चाहिए।"
    },
    {
        question: "'जगन्नाथ' शब्द का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "पृथ्वी का स्वामी", correct: false },
            { text: "स्वर्ग का स्वामी", correct: false },
            { text: "ब्रह्मांड का स्वामी", correct: true },
            { text: "जल का स्वामी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जगन्नाथ' का अर्थ है 'जगत (ब्रह्मांड) के नाथ (स्वामी)'।"
    },
    {
        question: "भगवान विष्णु के किस अवतार ने 'हिरण्यकशिपु' का वध किया था?",
        answers: [
            { text: "वराह", correct: false },
            { text: "वामन", correct: false },
            { text: "नरसिंह", correct: true },
            { text: "परशुराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवान विष्णु ने अपने भक्त प्रह्लाद की रक्षा के लिए 'नरसिंह' (आधा मानव, आधा शेर) अवतार लिया था।"
    },
    {
        question: "'पुष्टि मार्ग' के संस्थापक 'वल्लभाचार्य' किस दार्शनिक सिद्धांत के प्रवर्तक थे?",
        answers: [
            { text: "अद्वैतवाद", correct: false },
            { text: "विशिष्टाद्वैतवाद", correct: false },
            { text: "शुद्धाद्वैतवाद", correct: true },
            { text: "द्वैताद्वैतवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वल्लभाचार्य ने 'शुद्धाद्वैतवाद' (Pure Non-dualism) का प्रतिपादन किया था, जिसके अनुसार आत्मा और परमात्मा शुद्ध रूप से एक हैं।"
    },
    {
        question: "'द्वारकाधीश मंदिर' किस भगवान को समर्पित है?",
        answers: [
            { text: "राम", correct: false },
            { text: "शिव", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "विष्णु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात के द्वारका में स्थित यह मंदिर भगवान कृष्ण को समर्पित है।"
    },
    {
        question: "'माधवाचार्य' द्वारा स्थापित 'ब्रह्म संप्रदाय' का दार्शनिक सिद्धांत क्या था?",
        answers: [
            { text: "द्वैतवाद", correct: true },
            { text: "अद्वैतवाद", correct: false },
            { text: "विशिष्टाद्वैतवाद", correct: false },
            { text: "शुद्धाद्वैतवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य ने 'द्वैतवाद' दर्शन का प्रतिपादन किया था, जो ईश्वर और आत्मा को दो अलग-अलग और स्वतंत्र सत्ताओं के रूप में मानता है।"
    },
    {
        question: "'वैष्णव धर्म' में 'दशावतार' की अवधारणा किस देवता से संबंधित है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशावतार, यानी दस अवतार, भगवान विष्णु के दस प्रमुख अवतारों की अवधारणा है।"
    },
    {
        question: "'कल्कि' अवतार का क्या उद्देश्य है?",
        answers: [
            { text: "सतयुग की स्थापना", correct: false },
            { text: "त्रेतायुग का अंत", correct: false },
            { text: "कलियुग का अंत", correct: true },
            { text: "द्वापर युग की स्थापना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कल्कि, भगवान विष्णु का दसवां और अंतिम अवतार है, जो कलियुग के अंत में प्रकट होंगे।"
    },
    {
        question: "'रामानंद' ने किस भक्ति संप्रदाय का प्रचार किया?",
        answers: [
            { text: "शिव भक्ति", correct: false },
            { text: "राम भक्ति", correct: true },
            { text: "कृष्ण भक्ति", correct: false },
            { text: "देवी भक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामानंद ने उत्तर भारत में राम भक्ति को लोकप्रिय बनाया, और उनके शिष्यों ने भी इस परंपरा को आगे बढ़ाया।"
    },
    {
        question: "'वैष्णव धर्म' में 'पद्मनाभ' शब्द किस देवता का एक नाम है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पद्मनाभ' का अर्थ है 'कमल की नाभि वाला', और यह भगवान विष्णु के नामों में से एक है।"
    },
    {
        question: "'वैष्णव धर्म' में 'नरसिंह' अवतार को किस उद्देश्य के लिए जाना जाता है?",
        answers: [
            { text: "असुरों का संहार", correct: false },
            { text: "भक्त प्रह्लाद की रक्षा", correct: true },
            { text: "वेदों का उद्धार", correct: false },
            { text: "पृथ्वी का उद्धार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंह अवतार का मुख्य उद्देश्य भक्त प्रह्लाद की रक्षा करना था।"
    },
    {
        question: "'भगवत गीता' किस ग्रंथ का हिस्सा है?",
        answers: [
            { text: "रामायण", correct: false },
            { text: "महाभारत", correct: true },
            { text: "उपनिषद", correct: false },
            { text: "पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवद गीता, जिसमें कृष्ण और अर्जुन के बीच संवाद है, महाभारत के भीष्म पर्व का एक भाग है।"
    },
    {
        question: "'सिंधु घाटी सभ्यता' से मिली किस मोहर पर विष्णु से संबंधित कोई साक्ष्य नहीं मिला है?",
        answers: [
            { text: "मातृ देवी", correct: false },
            { text: "पशुपति महादेव", correct: false },
            { text: "योगी", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी सभ्यता के पुरातात्विक साक्ष्यों में विष्णु से संबंधित कोई भी प्रतीक या प्रतिमा नहीं मिली है।"
    },
    {
        question: "'अलवर' संतों का संबंध किस क्षेत्र से था?",
        answers: [
            { text: "उत्तर भारत", correct: false },
            { text: "दक्षिण भारत", correct: true },
            { text: "पूर्वी भारत", correct: false },
            { text: "पश्चिमी भारत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संत 7वीं से 10वीं शताब्दी के दौरान दक्षिण भारत (मुख्यतः तमिलनाडु) में वैष्णव भक्ति आंदोलन के प्रचारक थे।"
    },
    {
        question: "'श्री संप्रदाय' के संस्थापक कौन थे?",
        answers: [
            { text: "शंकराचार्य", correct: false },
            { text: "रामानुज", correct: true },
            { text: "माधवाचार्य", correct: false },
            { text: "वल्लभाचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामानुज ने श्री संप्रदाय की स्थापना की थी।"
    },
    {
        question: "'वृंदावन' और 'मथुरा' किस भगवान के जीवन से जुड़े हैं?",
        answers: [
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृंदावन और मथुरा भगवान कृष्ण के जन्म और बचपन से जुड़े हुए स्थान हैं।"
    },
    {
        question: "'वैष्णव धर्म' का 'ब्रह्म संप्रदाय' किसने स्थापित किया था?",
        answers: [
            { text: "रामानुज", correct: false },
            { text: "माधवाचार्य", correct: true },
            { text: "वल्लभाचार्य", correct: false },
            { text: "निंबार्काचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य ने ब्रह्म संप्रदाय की स्थापना की थी।"
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