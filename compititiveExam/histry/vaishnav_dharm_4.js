const questions = [
    {
        topHeading: "वैष्णव धर्म पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.32)"
    },
    {
        question: "भगवान विष्णु के 'वामन' अवतार का संबंध किस राजा से है?",
        answers: [
            { text: "रावण", correct: false },
            { text: "हिरण्यकशिपु", correct: false },
            { text: "राजा बलि", correct: true },
            { text: "कंस", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वामन अवतार में, भगवान विष्णु ने बौने ब्राह्मण का रूप धारण कर दानव राजा बलि से तीन पग भूमि माँगी थी।"
    },
    {
        question: "'निंबार्काचार्य' किस दार्शनिक सिद्धांत के प्रवर्तक थे?",
        answers: [
            { text: "द्वैताद्वैत", correct: true },
            { text: "अद्वैत", correct: false },
            { text: "द्वैत", correct: false },
            { text: "विशिष्टाद्वैत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निंबार्काचार्य ने 'द्वैताद्वैत' दर्शन का प्रतिपादन किया था, जिसके अनुसार आत्मा और परमात्मा में एक साथ भेद और अभेद दोनों हैं।"
    },
    {
        question: "'भगवद गीता' में वर्णित 'भक्तियोग' का क्या अर्थ है?",
        answers: [
            { text: "फल की इच्छा के बिना कर्तव्य करना", correct: false },
            { text: "ईश्वर के प्रति पूर्ण समर्पण और प्रेम", correct: true },
            { text: "ध्यान करना", correct: false },
            { text: "यज्ञ करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भक्तियोग' का अर्थ है भगवान के प्रति पूर्ण श्रद्धा और प्रेम के माध्यम से मोक्ष प्राप्त करना।"
    },
    {
        question: "'पुष्टि मार्ग' किस देवता की पूजा पर केंद्रित है?",
        answers: [
            { text: "राम", correct: false },
            { text: "शिव", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "ब्रह्मा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वल्लभाचार्य द्वारा स्थापित 'पुष्टि मार्ग' विशेष रूप से भगवान कृष्ण की भक्ति और उनकी कृपा पर केंद्रित है।"
    },
    {
        question: "'दशावतार' में 'बुद्ध' किस नंबर का अवतार माना जाता है?",
        answers: [
            { text: "सातवाँ", correct: false },
            { text: "आठवाँ", correct: false },
            { text: "नौवाँ", correct: true },
            { text: "दसवाँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध धर्म के संस्थापक गौतम बुद्ध को वैष्णव परंपरा में भगवान विष्णु का नौवां अवतार माना जाता है।"
    },
    {
        question: "'श्री संप्रदाय' की स्थापना किस सदी में हुई थी?",
        answers: [
            { text: "8वीं सदी", correct: false },
            { text: "11वीं सदी", correct: true },
            { text: "14वीं सदी", correct: false },
            { text: "16वीं सदी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्री संप्रदाय की स्थापना 11वीं सदी में रामानुज ने की थी।"
    },
    {
        question: "'वैष्णव धर्म' में 'हरि' शब्द का क्या अर्थ है?",
        answers: [
            { text: "शिव", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हरि' भगवान विष्णु के कई नामों में से एक है।"
    },
    {
        question: "'आलवार' संतों ने किस भाषा में भक्ति गीत और कविताएं लिखी थीं?",
        answers: [
            { text: "कन्नड़", correct: false },
            { text: "तेलुगु", correct: false },
            { text: "तमिल", correct: true },
            { text: "मलयालम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संतों ने वैष्णव धर्म का प्रचार करने के लिए तमिल भाषा में भक्ति गीत लिखे।"
    },
    {
        question: "'जगन्नाथ पुरी' की रथ यात्रा के दौरान किस देवता का रथ सबसे बड़ा होता है?",
        answers: [
            { text: "जगन्नाथ", correct: true },
            { text: "बलभद्र", correct: false },
            { text: "सुभद्रा", correct: false },
            { text: "सभी के रथ समान होते हैं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगन्नाथ पुरी की रथ यात्रा में भगवान जगन्नाथ का रथ 'नंदीघोष' सबसे बड़ा और ऊँचा होता है।"
    },
    {
        question: "'वैष्णव धर्म' का 'ब्रह्म संप्रदाय' किस दार्शनिक सिद्धांत पर आधारित है?",
        answers: [
            { text: "अद्वैत", correct: false },
            { text: "द्वैत", correct: true },
            { text: "विशिष्टाद्वैत", correct: false },
            { text: "शुद्धाद्वैत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य द्वारा स्थापित ब्रह्म संप्रदाय 'द्वैत' दर्शन पर आधारित है, जो ईश्वर और आत्मा को दो अलग-अलग सत्ताओं के रूप में मानता है।"
    },
    {
        question: "'द्वारकाधीश' मंदिर किस राज्य में स्थित है?",
        answers: [
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "पंजाब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात के द्वारका में स्थित द्वारकाधीश मंदिर भगवान कृष्ण को समर्पित है।"
    },
    {
        question: "'वैष्णव धर्म' के 'अद्वैतवाद' से भिन्न 'विशिष्टाद्वैतवाद' दर्शन के अनुसार, आत्मा और परमात्मा के बीच क्या संबंध है?",
        answers: [
            { text: "वे पूरी तरह से भिन्न हैं।", correct: false },
            { text: "वे पूरी तरह से एक हैं।", correct: false },
            { text: "वे एक होकर भी भिन्न हैं।", correct: true },
            { text: "उनका कोई संबंध नहीं है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशिष्टाद्वैतवाद के अनुसार, आत्मा (चित) और भौतिक जगत (अचित) परमात्मा (ब्रह्म) के ही अंश हैं, इसलिए वे एक होकर भी अपनी व्यक्तिगत पहचान बनाए रखते हैं।"
    },
    {
        question: "'रामायण' महाकाव्य में भगवान राम को किसका अवतार माना गया है?",
        answers: [
            { text: "शिव", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामायण में, भगवान राम को भगवान विष्णु का सातवाँ अवतार माना गया है।"
    },
    {
        question: "'माधवाचार्य' किस सदी में हुए थे?",
        answers: [
            { text: "10वीं सदी", correct: false },
            { text: "13वीं सदी", correct: true },
            { text: "16वीं सदी", correct: false },
            { text: "18वीं सदी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य (1238-1317) 13वीं सदी के एक महान दार्शनिक और 'ब्रह्म संप्रदाय' के संस्थापक थे।"
    },
    {
        question: "'वैष्णव धर्म' में 'कल्कि' अवतार किस युग में प्रकट होंगे?",
        answers: [
            { text: "सतयुग", correct: false },
            { text: "त्रेता युग", correct: false },
            { text: "द्वापर युग", correct: false },
            { text: "कलियुग", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कल्कि' भगवान विष्णु का अंतिम अवतार है, जो कलियुग के अंत में प्रकट होंगे।"
    },
    {
        question: "'गरुड़' को किस रूप में दर्शाया जाता है?",
        answers: [
            { text: "मानव रूप", correct: false },
            { text: "पक्षी रूप (बाज)", correct: true },
            { text: "नाग रूप", correct: false },
            { text: "सिंह रूप", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गरुड़ को पक्षियों का राजा और भगवान विष्णु का वाहन माना जाता है, जिन्हें एक विशाल बाज के रूप में दर्शाया जाता है।"
    },
    {
        question: "'वैकुंठ' का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "जहां कोई बाधा नहीं है", correct: true },
            { text: "ज्ञान का स्थान", correct: false },
            { text: "मोक्ष का स्थान", correct: false },
            { text: "ईश्वर का स्थान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वैकुंठ' का अर्थ है 'वह स्थान जहाँ कोई बाधा नहीं है' या 'सृष्टि का परम निवास'।"
    },
    {
        question: "'चैतन्य महाप्रभु' किस देवता की पूजा पर विशेष बल देते थे?",
        answers: [
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चैतन्य महाप्रभु ने गौड़ीय संप्रदाय की स्थापना की, जो विशेष रूप से भगवान कृष्ण की भक्ति पर केंद्रित था।"
    },
    {
        question: "'वैष्णव धर्म' में 'पद्मनाभ' शब्द किस देवता का नाम है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पद्मनाभ' का अर्थ है 'कमल की नाभि वाला', जो भगवान विष्णु के कई नामों में से एक है।"
    },
    {
        question: "'भगवत गीता' में वर्णित 'स्थितप्रज्ञ' की अवधारणा किससे संबंधित है?",
        answers: [
            { text: "एक योद्धा", correct: false },
            { text: "एक योगी", correct: true },
            { text: "एक बुद्धिमान व्यक्ति", correct: false },
            { text: "एक भक्त", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्थितप्रज्ञ' उस योगी को कहते हैं जिसकी बुद्धि सुख-दुःख, लाभ-हानि में स्थिर रहती है।"
    },
    {
        question: "'आलवार' संतों का संबंध किस क्षेत्र से था?",
        answers: [
            { text: "उत्तर भारत", correct: false },
            { text: "पूर्वी भारत", correct: false },
            { text: "दक्षिण भारत", correct: true },
            { text: "पश्चिमी भारत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संत 7वीं से 10वीं शताब्दी के दौरान दक्षिण भारत (मुख्यतः तमिलनाडु) में वैष्णव भक्ति आंदोलन के प्रचारक थे।"
    },
    {
        question: "'वैष्णव धर्म' का 'पुष्टि मार्ग' किस पर आधारित है?",
        answers: [
            { text: "ज्ञान", correct: false },
            { text: "तपस्या", correct: false },
            { text: "भगवान की कृपा", correct: true },
            { text: "कर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वल्लभाचार्य का 'पुष्टि मार्ग' इस सिद्धांत पर आधारित है कि मोक्ष केवल भगवान की कृपा (पुष्टि) से ही प्राप्त किया जा सकता है।"
    },
    {
        question: "'दशावतार' में 'वराह' किस नंबर का अवतार है?",
        answers: [
            { text: "दूसरा", correct: false },
            { text: "तीसरा", correct: true },
            { text: "चौथा", correct: false },
            { text: "पाँचवाँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवान विष्णु के दस अवतारों में 'वराह' (सूअर) तीसरा अवतार है।"
    },
    {
        question: "'माधवाचार्य' द्वारा स्थापित 'ब्रह्म संप्रदाय' का दार्शनिक सिद्धांत क्या था?",
        answers: [
            { text: "द्वैत", correct: true },
            { text: "अद्वैत", correct: false },
            { text: "विशिष्टाद्वैत", correct: false },
            { text: "शुद्धाद्वैत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य ने 'द्वैतवाद' दर्शन का प्रतिपादन किया था, जो ईश्वर और आत्मा को अलग-अलग मानता है।"
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
        question: "'रामानंद' के शिष्यों में कौन-से प्रसिद्ध संत शामिल थे?",
        answers: [
            { text: "शंकराचार्य", correct: false },
            { text: "कबीर और रविदास", correct: true },
            { text: "सूरदास और मीराबाई", correct: false },
            { text: "तुकाराम और नामदेव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामानंद ने उत्तर भारत में भक्ति आंदोलन को लोकप्रिय बनाया और उनके शिष्यों में कबीर, रविदास, धन्ना और सेना जैसे संत शामिल थे।"
    },
    {
        question: "'वैष्णव धर्म' में 'गोविंद' शब्द का क्या अर्थ है?",
        answers: [
            { text: "इंद्रियों का स्वामी", correct: false },
            { text: "गायों का स्वामी", correct: true },
            { text: "स्वर्ग का स्वामी", correct: false },
            { text: "पृथ्वी का स्वामी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोविंद' का शाब्दिक अर्थ 'गायों का स्वामी' है, जो भगवान कृष्ण के बचपन से जुड़ा एक नाम है।"
    },
    {
        question: "'दशावतार' में 'राम' को किस नंबर का अवतार माना जाता है?",
        answers: [
            { text: "पाँचवाँ", correct: false },
            { text: "छठा", correct: false },
            { text: "सातवाँ", correct: true },
            { text: "आठवाँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामायण के नायक भगवान राम को भगवान विष्णु का सातवाँ अवतार माना गया है।"
    },
    {
        question: "'वैष्णव धर्म' का 'ब्रह्म संप्रदाय' किस दार्शनिक सिद्धांत पर आधारित है?",
        answers: [
            { text: "विशिष्टाद्वैत", correct: false },
            { text: "द्वैत", correct: true },
            { text: "अद्वैत", correct: false },
            { text: "शुद्धाद्वैत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य द्वारा स्थापित ब्रह्म संप्रदाय 'द्वैत' दर्शन पर आधारित है, जो ईश्वर और आत्मा को दो अलग-अलग और स्वतंत्र सत्ताओं के रूप में मानता है।"
    },
    {
        question: "'जगन्नाथ पुरी' का मंदिर किस राज्य में स्थित है?",
        answers: [
            { text: "पश्चिम बंगाल", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तमिलनाडु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगन्नाथ मंदिर भारत के ओडिशा राज्य के पुरी शहर में स्थित है।"
    },
    {
        question: "'अलवर' संतों की भक्ति कविताओं का संग्रह किस नाम से जाना जाता है?",
        answers: [
            { text: "तिरुप्पवाई", correct: false },
            { text: "दिव्य प्रबंधम्", correct: true },
            { text: "तमिल वेद", correct: false },
            { text: "श्री सूक्त", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संतों द्वारा रचित भक्ति गीतों के संग्रह को 'दिव्य प्रबंधम्' के नाम से जाना जाता है।"
    },
    {
        question: "'वैष्णव धर्म' में 'कल्कि' अवतार किस उद्देश्य के लिए जाना जाता है?",
        answers: [
            { text: "धर्म की पुनः स्थापना", correct: true },
            { text: "वेदों की रक्षा", correct: false },
            { text: "हिरण्याक्ष का वध", correct: false },
            { text: "समुद्र मंथन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कल्कि, भगवान विष्णु का दसवां और अंतिम अवतार है, जो कलियुग के अंत में दुष्टों का संहार कर धर्म की पुनः स्थापना करेंगे।"
    },
    {
        question: "'चैतन्य महाप्रभु' किस संप्रदाय के संस्थापक थे?",
        answers: [
            { text: "श्री संप्रदाय", correct: false },
            { text: "गौड़ीय संप्रदाय", correct: true },
            { text: "रुद्र संप्रदाय", correct: false },
            { text: "निंबार्क संप्रदाय", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चैतन्य महाप्रभु ने 16वीं शताब्दी में गौड़ीय वैष्णव संप्रदाय की स्थापना की थी, जो कृष्ण भक्ति पर केंद्रित है।"
    },
    {
        question: "'नरसिंह' अवतार में भगवान विष्णु ने किसका वध किया था?",
        answers: [
            { text: "रावण", correct: false },
            { text: "हिरण्यकशिपु", correct: true },
            { text: "कंस", correct: false },
            { text: "हिरण्याक्ष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंह (आधा मानव, आधा शेर) अवतार में भगवान विष्णु ने अपने भक्त प्रह्लाद की रक्षा के लिए उसके पिता हिरण्यकशिपु का वध किया था।"
    },
    {
        question: "'वैष्णव धर्म' में 'पद्मनाभ' शब्द का क्या अर्थ है?",
        answers: [
            { text: "कमल की नाभि वाला", correct: true },
            { text: "कमल के नेत्रों वाला", correct: false },
            { text: "कमल के चरणों वाला", correct: false },
            { text: "कमल के हृदय वाला", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पद्मनाभ' का अर्थ है 'कमल की नाभि वाला', जो भगवान विष्णु के कई नामों में से एक है।"
    },
    {
        question: "'वृंदावन' किस भारतीय राज्य में स्थित है?",
        answers: [
            { text: "राजस्थान", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "मध्य प्रदेश", correct: false },
            { text: "बिहार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृंदावन, भगवान कृष्ण के जीवन से जुड़ा एक महत्वपूर्ण तीर्थस्थल है, जो उत्तर प्रदेश के मथुरा जिले में स्थित है।"
    },
    {
        question: "'भगवद गीता' किस महाकाव्य का एक भाग है?",
        answers: [
            { text: "रामायण", correct: false },
            { text: "महाभारत", correct: true },
            { text: "उपनिषद", correct: false },
            { text: "पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवद गीता, जिसमें भगवान कृष्ण और अर्जुन के बीच संवाद का वर्णन है, महाभारत के भीष्म पर्व का एक हिस्सा है।"
    },
    {
        question: "'माधवाचार्य' किस दार्शनिक सिद्धांत के प्रवर्तक थे?",
        answers: [
            { text: "अद्वैतवाद", correct: false },
            { text: "विशिष्टाद्वैतवाद", correct: false },
            { text: "द्वैतवाद", correct: true },
            { text: "शुद्धाद्वैतवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य ने 'द्वैतवाद' दर्शन का प्रतिपादन किया था, जिसके अनुसार ईश्वर और आत्मा पूरी तरह से भिन्न हैं।"
    },
    {
        question: "'अलवर' संतों का संबंध किस क्षेत्र से था?",
        answers: [
            { text: "उत्तर भारत", correct: false },
            { text: "पूर्वी भारत", correct: false },
            { text: "दक्षिण भारत", correct: true },
            { text: "पश्चिमी भारत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संत 7वीं से 10वीं शताब्दी के दौरान दक्षिण भारत (मुख्यतः तमिलनाडु) में वैष्णव भक्ति आंदोलन के प्रचारक थे।"
    },
    {
        question: "'वैकुंठ' किस देवता का निवास स्थान माना जाता है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदू धर्म के अनुसार, वैकुंठ या वैकुंठ लोक भगवान विष्णु का निवास स्थान है।"
    },
    {
        question: "'श्री संप्रदाय' के संस्थापक रामानुज किस दार्शनिक सिद्धांत के प्रवर्तक थे?",
        answers: [
            { text: "अद्वैतवाद", correct: false },
            { text: "विशिष्टाद्वैतवाद", correct: true },
            { text: "द्वैतवाद", correct: false },
            { text: "शुद्धाद्वैतवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामानुज ने 'विशिष्टाद्वैतवाद' दर्शन का प्रतिपादन किया था।"
    },
    {
        question: "'वैष्णव धर्म' में 'पुष्टि मार्ग' की स्थापना किसने की थी?",
        answers: [
            { text: "रामानुज", correct: false },
            { text: "माधवाचार्य", correct: false },
            { text: "वल्लभाचार्य", correct: true },
            { text: "चैतन्य महाप्रभु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वल्लभाचार्य ने 'पुष्टि मार्ग' नामक वैष्णव संप्रदाय की स्थापना की थी, जो कृष्ण भक्ति और उनकी कृपा पर जोर देता है।"
    },
    {
        question: "'गरुड़' किस पौराणिक पक्षी का राजा माना जाता है?",
        answers: [
            { text: "हंस", correct: false },
            { text: "मोर", correct: false },
            { text: "बाज", correct: true },
            { text: "गिद्ध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गरुड़ को पक्षियों का राजा और भगवान विष्णु का वाहन माना जाता है, जिन्हें एक बाज के रूप में दर्शाया गया है।"
    },
    {
        question: "'जगन्नाथ' शब्द का अर्थ क्या है?",
        answers: [
            { text: "पृथ्वी के स्वामी", correct: false },
            { text: "ब्रह्मांड के स्वामी", correct: true },
            { text: "ज्ञान के सागर", correct: false },
            { text: "महान योगी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जगन्नाथ' शब्द का शाब्दिक अर्थ है 'जगत (ब्रह्मांड) के नाथ (स्वामी)'।"
    },
    {
        question: "'सोमनाथ' मंदिर किस देवता को समर्पित है?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोमनाथ मंदिर शैव धर्म से संबंधित है, न कि वैष्णव धर्म से।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बारह ज्योतिर्लिंगों में से एक है।"
    },
    {
        question: "'दशावतार' में 'कूर्म' (कछुआ) किस नंबर का अवतार है?",
        answers: [
            { text: "पहला", correct: false },
            { text: "दूसरा", correct: true },
            { text: "तीसरा", correct: false },
            { text: "चौथा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूर्म' अवतार, भगवान विष्णु के दस अवतारों में दूसरा है।"
    },
    {
        question: "'वैष्णव' शब्द का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "विष्णु का भक्त", correct: true },
            { text: "सृष्टि का पालनकर्ता", correct: false },
            { text: "शक्तिशाली", correct: false },
            { text: "दानवीर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वैष्णव' का अर्थ है 'विष्णु का अनुयायी' या 'विष्णु का भक्त'।"
    },
    {
        question: "'निंबार्क संप्रदाय' किस दार्शनिक सिद्धांत के प्रवर्तक थे?",
        answers: [
            { text: "अद्वैत", correct: false },
            { text: "द्वैत", correct: false },
            { text: "विशिष्टाद्वैत", correct: false },
            { text: "द्वैताद्वैत", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निंबार्काचार्य द्वारा स्थापित निंबार्क संप्रदाय 'द्वैताद्वैत' दर्शन पर आधारित है।"
    },
    {
        question: "'वैष्णव धर्म' में 'मोक्ष' प्राप्ति का सबसे सरल मार्ग किसे माना जाता है?",
        answers: [
            { text: "ज्ञान", correct: false },
            { text: "कर्म", correct: false },
            { text: "भक्ति", correct: true },
            { text: "ध्यान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैष्णव धर्म में भक्ति को मोक्ष प्राप्ति का सबसे सरल और श्रेष्ठ मार्ग माना जाता है, जिसमें ईश्वर के प्रति प्रेम और समर्पण पर जोर दिया जाता है।"
    },
    {
        question: "'भागवत पुराण' किस देवता को समर्पित है और वैष्णव धर्म का एक प्रमुख ग्रंथ है?",
        answers: [
            { text: "शिव", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु (और उनके अवतारों)", correct: true },
            { text: "शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भागवत पुराण, जिसे श्रीमद्भागवतम् भी कहते हैं, वैष्णव धर्म का एक अत्यंत महत्वपूर्ण ग्रंथ है जिसमें भगवान विष्णु और उनके अवतारों, विशेषकर कृष्ण की लीलाओं का वर्णन है।"
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