const questions = [
    {
        topHeading: "वैष्णव धर्म पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.29)"
    },
    {
        question: "वैष्णव धर्म का प्रमुख केंद्रबिंदु कौन-से देवता हैं?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैष्णव धर्म, जिसे वैष्णववाद भी कहते हैं, हिंदू धर्म का एक प्रमुख संप्रदाय है जो भगवान विष्णु या उनके विभिन्न अवतारों को परम सत्य मानता है।"
    },
    {
        question: "'त्रिमूर्ति' की अवधारणा में भगवान विष्णु को किस भूमिका के लिए जाना जाता है?",
        answers: [
            { text: "सृजनकर्ता", correct: false },
            { text: "पालनकर्ता", correct: true },
            { text: "संहारक", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदू धर्म की त्रिमूर्ति (ब्रह्मा, विष्णु, महेश) में, ब्रह्मा सृजनकर्ता, विष्णु पालनकर्ता और महेश (शिव) संहारक हैं।"
    },
    {
        question: "भगवान विष्णु के दस प्रमुख अवतारों (दशावतार) में से पहला अवतार कौन-सा है?",
        answers: [
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "मत्स्य", correct: true },
            { text: "बुद्ध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशावतारों में मत्स्य (मछली) को पहला अवतार माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने एक प्रलय से मनु को बचाया था।"
    },
    {
        question: "दक्षिण भारत में वैष्णव धर्म का प्रचार करने वाले संतों को किस नाम से जाना जाता था?",
        answers: [
            { text: "नयनार", correct: false },
            { text: "आलवार", correct: true },
            { text: "शंकराचार्य", correct: false },
            { text: "अघोरी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संत वैष्णव धर्म के अनुयायी थे, जिन्होंने अपनी भक्ति कविताओं के माध्यम से दक्षिण भारत में इस धर्म को लोकप्रिय बनाया।<br><br><i class='fa-solid fa-angles-right icon'></i> नयनार शैव संत थे।"
    },
    {
        question: "'गरुड़', जो भगवान विष्णु का वाहन है, किस पौराणिक पक्षी का राजा माना जाता है?",
        answers: [
            { text: "हंस", correct: false },
            { text: "बाज", correct: true },
            { text: "मोर", correct: false },
            { text: "गिद्ध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गरुड़ को पक्षियों का राजा और भगवान विष्णु का वाहन माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हिंदू धर्म में उन्हें एक बाज के रूप में दर्शाया गया है।"
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
    },
    {
        question: "'रामायण' महाकाव्य में भगवान राम को किसका अवतार माना गया है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामायण में, भगवान राम को भगवान विष्णु का सातवाँ अवतार माना गया है, जिन्होंने धर्म की स्थापना के लिए जन्म लिया था।"
    },
    {
        question: "'द्वापर युग' में भगवान विष्णु का कौन-सा प्रमुख अवतार हुआ था?",
        answers: [
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "वामन", correct: false },
            { text: "बुद्ध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदू पौराणिक कथाओं के अनुसार, त्रेता युग में राम का अवतार हुआ था, जबकि द्वापर युग में भगवान कृष्ण का अवतार हुआ।"
    },
    {
        question: "वैष्णव धर्म में 'पंचांग' का क्या अर्थ है?",
        answers: [
            { text: "पाँच इंद्रियाँ", correct: false },
            { text: "पाँच तत्व", correct: false },
            { text: "पाँच दैनिक पूजा अनुष्ठान", correct: true },
            { text: "पाँच अवतार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैष्णव धर्म में 'पंचांग' का अर्थ है पाँच दैनिक पूजा अनुष्ठान: अभिगमन, उपादान, इज्या, स्वाध्याय और योग।"
    },
    {
        question: "भगवान विष्णु के 'वामन' अवतार का संबंध किस पौराणिक कथा से है?",
        answers: [
            { text: "समुद्र मंथन", correct: false },
            { text: "हिरण्यकशिपु का वध", correct: false },
            { text: "राजा बलि को पाताल भेजना", correct: true },
            { text: "परशुराम द्वारा क्षत्रियों का विनाश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वामन अवतार में, भगवान विष्णु ने एक बौने ब्राह्मण का रूप धारण कर राजा बलि से तीन पग भूमि माँगी और तीन पगों में तीनों लोकों को नापकर उन्हें पाताल भेज दिया।"
    },
    {
        question: "'जगन्नाथ मंदिर' किस भारतीय राज्य में स्थित है, जो वैष्णव धर्म का एक प्रमुख केंद्र है?",
        answers: [
            { text: "पश्चिम बंगाल", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा के पुरी में स्थित जगन्नाथ मंदिर भगवान विष्णु (जगन्नाथ) को समर्पित एक महत्वपूर्ण वैष्णव तीर्थस्थल है।"
    },
    {
        question: "'वैष्णव' शब्द का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "विष्णु का अनुयायी", correct: true },
            { text: "सृष्टि का पालनकर्ता", correct: false },
            { text: "शक्तिशाली", correct: false },
            { text: "दानवीर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वैष्णव' शब्द संस्कृत के 'विष्णु' शब्द से बना है, जिसका अर्थ है 'विष्णु से संबंधित' या 'विष्णु का अनुयायी'।"
    },
    {
        question: "'भगवद गीता' में भगवान कृष्ण ने किस रूप में उपदेश दिए?",
        answers: [
            { text: "ब्रह्मा के रूप में", correct: false },
            { text: "शिव के रूप में", correct: false },
            { text: "अपने स्वयं के दिव्य रूप में", correct: true },
            { text: "अर्जुन के गुरु के रूप में", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवद गीता में, भगवान कृष्ण ने युद्धभूमि में अर्जुन को अपने स्वयं के परम और दिव्य रूप में उपदेश दिए, जिससे उन्होंने अपनी सर्वोच्चता को सिद्ध किया।"
    },
    {
        question: "'वैष्णव धर्म' के किस संप्रदाय में राधा को कृष्ण की शक्ति के रूप में पूजा जाता है?",
        answers: [
            { text: "श्री संप्रदाय", correct: false },
            { text: "ब्रह्म संप्रदाय", correct: false },
            { text: "रुद्र संप्रदाय", correct: false },
            { text: "गौड़ीय संप्रदाय", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौड़ीय संप्रदाय (चैतन्य महाप्रभु द्वारा स्थापित) में राधा-कृष्ण की युगल पूजा पर विशेष जोर दिया जाता है, जहाँ राधा को कृष्ण की आदि शक्ति माना गया है।"
    },
    {
        question: "भगवान विष्णु के 'परशुराम' अवतार का संबंध किससे है?",
        answers: [
            { text: "क्षत्रियों का विनाश", correct: true },
            { text: "हिरण्यकशिपु का वध", correct: false },
            { text: "समुद्र मंथन", correct: false },
            { text: "जल प्रलय से पृथ्वी की रक्षा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परशुराम, भगवान विष्णु के छठे अवतार हैं, जिन्होंने पृथ्वी से दुष्ट क्षत्रियों का 21 बार संहार किया था।"
    },
    {
        question: "'सिंधु घाटी सभ्यता' से मिली मोहरों पर किस देवता का कोई साक्ष्य नहीं मिला है?",
        answers: [
            { text: "शिव (आद्य-शिव)", correct: false },
            { text: "शक्ति (मातृ देवी)", correct: false },
            { text: "विष्णु", correct: true },
            { text: "नाग देवता", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी सभ्यता के पुरातात्विक साक्ष्यों में 'आद्य-शिव' और मातृ देवी के चित्र तो मिले हैं, लेकिन भगवान विष्णु के किसी भी रूप या उनसे संबंधित साक्ष्य का कोई प्रमाण नहीं मिला है।"
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
        question: "'अलवर' संतों की संख्या कितनी थी?",
        answers: [
            { text: "12", correct: true },
            { text: "63", correct: false },
            { text: "108", correct: false },
            { text: "33", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण भारत में, 12 आलवार संत हुए, जिन्होंने तमिल भाषा में भगवान विष्णु की स्तुति में भक्ति गीत (दिव्य प्रबंध) लिखे।"
    },
    {
        question: "'वैष्णव धर्म' में 'श्री संप्रदाय' की स्थापना किसने की थी?",
        answers: [
            { text: "रामानुज", correct: true },
            { text: "माधवाचार्य", correct: false },
            { text: "वल्लभाचार्य", correct: false },
            { text: "चैतन्य महाप्रभु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामानुज ने श्री संप्रदाय की स्थापना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वैष्णव धर्म का एक प्रमुख संप्रदाय है जो 'विशिष्टाद्वैत' दर्शन पर आधारित है।"
    },
    {
        question: "'द्वारकाधीश मंदिर' किस राज्य में स्थित है?",
        answers: [
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "पंजाब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात के द्वारका में स्थित द्वारकाधीश मंदिर भगवान कृष्ण को समर्पित एक प्रसिद्ध वैष्णव मंदिर है।"
    },
    {
        question: "'कृष्ण' को किस देवता का पूर्ण अवतार माना जाता है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदू धर्म में, भगवान कृष्ण को भगवान विष्णु का सबसे महत्वपूर्ण और पूर्ण अवतार माना जाता है।"
    },
    {
        question: "'नृसिंह' अवतार में भगवान विष्णु ने किसका वध किया था?",
        answers: [
            { text: "रावण", correct: false },
            { text: "हिरण्याक्ष", correct: false },
            { text: "हिरण्यकशिपु", correct: true },
            { text: "कंस", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नृसिंह (आधा मानव, आधा शेर) अवतार में भगवान विष्णु ने अपने भक्त प्रह्लाद की रक्षा के लिए उसके पिता हिरण्यकशिपु का वध किया था।"
    },
    {
        question: "'जगन्नाथ' शब्द का अर्थ क्या है?",
        answers: [
            { text: "सृष्टि के स्वामी", correct: false },
            { text: "ब्रह्मांड के स्वामी", correct: true },
            { text: "पृथ्वी के स्वामी", correct: false },
            { text: "सागर के स्वामी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जगन्नाथ' शब्द संस्कृत से बना है, जिसका अर्थ है 'ब्रह्मांड के स्वामी' या 'जगत के नाथ'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भगवान विष्णु का ही एक रूप है।"
    },
    {
        question: "'वैष्णव धर्म' का 'ब्रह्म संप्रदाय' किसने स्थापित किया था?",
        answers: [
            { text: "रामानुज", correct: false },
            { text: "माधवाचार्य", correct: true },
            { text: "वल्लभाचार्य", correct: false },
            { text: "निंबार्काचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य ने ब्रह्म संप्रदाय की स्थापना की थी, जो 'द्वैत' दर्शन पर आधारित है।"
    },
    {
        question: "वैष्णव धर्म से संबंधित 'विशिष्टाद्वैत' दर्शन के प्रवर्तक कौन थे?",
        answers: [
            { text: "शंकराचार्य", correct: false },
            { text: "माधवाचार्य", correct: false },
            { text: "रामानुज", correct: true },
            { text: "वल्लभाचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामानुज ने 'विशिष्टाद्वैत' (Qualified Non-dualism) दर्शन का प्रतिपादन किया था, जिसके अनुसार आत्मा और परमात्मा एक होते हुए भी भिन्न हैं।"
    },
    {
        question: "'भगवत गीता' किस महाकाव्य का एक भाग है?",
        answers: [
            { text: "रामायण", correct: false },
            { text: "महाभारत", correct: true },
            { text: "उपनिषद", correct: false },
            { text: "पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवद गीता, जिसमें भगवान कृष्ण और अर्जुन के बीच संवाद का वर्णन है, महाभारत के भीष्म पर्व का एक हिस्सा है।"
    },
    {
        question: "भगवान विष्णु के 'कूर्म' (कछुआ) अवतार का संबंध किस पौराणिक घटना से है?",
        answers: [
            { text: "हिरण्यकशिपु का वध", correct: false },
            { text: "राजा बलि का पाताल गमन", correct: false },
            { text: "समुद्र मंथन", correct: true },
            { text: "जल प्रलय से पृथ्वी की रक्षा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कूर्म अवतार में, भगवान विष्णु ने मंदराचल पर्वत को अपनी पीठ पर धारण किया था, जिसका उपयोग देवता और असुरों ने समुद्र मंथन के लिए किया था।"
    },
    {
        question: "'मध्वाचार्य' द्वारा स्थापित वैष्णव संप्रदाय का क्या नाम है?",
        answers: [
            { text: "श्री संप्रदाय", correct: false },
            { text: "ब्रह्म संप्रदाय", correct: true },
            { text: "रुद्र संप्रदाय", correct: false },
            { text: "निंबार्क संप्रदाय", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य ने 'ब्रह्म संप्रदाय' की स्थापना की थी, जो 'द्वैत' दर्शन पर आधारित है, जिसका अर्थ है कि आत्मा और परमात्मा पूरी तरह से भिन्न हैं।"
    },
    {
        question: "भगवान विष्णु के किस अवतार ने 'हिरण्याक्ष' नामक राक्षस का वध किया था?",
        answers: [
            { text: "वामन", correct: false },
            { text: "नरसिंह", correct: false },
            { text: "वराह", correct: true },
            { text: "परशुराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवान विष्णु ने 'वराह' (सूअर) अवतार में पृथ्वी को हिरण्याक्ष से बचाया था और उसका वध किया था।"
    },
    {
        question: "'चैतन्य महाप्रभु' किस वैष्णव संप्रदाय के संस्थापक थे?",
        answers: [
            { text: "श्री संप्रदाय", correct: false },
            { text: "रुद्र संप्रदाय", correct: false },
            { text: "गौड़ीय संप्रदाय", correct: true },
            { text: "निंबार्क संप्रदाय", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौड़ीय संप्रदाय, जो कृष्ण भक्ति पर केंद्रित है, की स्थापना 16वीं शताब्दी में चैतन्य महाप्रभु ने की थी।"
    },
    {
        question: "'अलवर' संतों की कविताओं का संग्रह किस नाम से जाना जाता है?",
        answers: [
            { text: "दिव्य प्रबंधम्", correct: true },
            { text: "तमिल वेद", correct: false },
            { text: "तिरुप्पवाई", correct: false },
            { text: "श्री सूक्त", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संतों द्वारा रचित भक्ति गीतों और कविताओं के संग्रह को 'दिव्य प्रबंधम्' के नाम से जाना जाता है।"
    },
    {
        question: "भगवान विष्णु के दस अवतारों में से 'बुद्ध' किस नंबर पर आते हैं?",
        answers: [
            { text: "सातवें", correct: false },
            { text: "आठवें", correct: false },
            { text: "नौवें", correct: true },
            { text: "दसवें", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशावतारों में बुद्ध को नौवां अवतार माना गया है, जिन्होंने जीवों को अहिंसा का उपदेश दिया।"
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
        question: "'द्वारका' किस भगवान की राजधानी मानी जाती थी?",
        answers: [
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "विष्णु", correct: false },
            { text: "परशुराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाभारत के अनुसार, भगवान कृष्ण ने मथुरा छोड़ने के बाद गुजरात में द्वारका को अपनी राजधानी बनाया था।"
    },
    {
        question: "'वैष्णव धर्म' के किस संप्रदाय में 'द्वैताद्वैत' दर्शन का प्रतिपादन किया गया है?",
        answers: [
            { text: "श्री संप्रदाय", correct: false },
            { text: "ब्रह्म संप्रदाय", correct: false },
            { text: "रुद्र संप्रदाय", correct: false },
            { text: "निंबार्क संप्रदाय", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निंबार्काचार्य द्वारा स्थापित निंबार्क संप्रदाय 'द्वैताद्वैत' दर्शन पर आधारित है, जिसका अर्थ है कि आत्मा और परमात्मा एक साथ भिन्न और अभिन्न दोनों हैं।"
    },
    {
        question: "'जगन्नाथ मंदिर' में पूजे जाने वाले प्रमुख देवता कौन हैं?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "जगन्नाथ, बलभद्र और सुभद्रा", correct: true },
            { text: "कृष्ण और राधा", correct: false },
            { text: "राम और सीता", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगन्नाथ मंदिर में भगवान जगन्नाथ (विष्णु/कृष्ण), उनके बड़े भाई बलभद्र और बहन सुभद्रा की काष्ठ की प्रतिमाएँ पूजी जाती हैं।"
    },
    {
        question: "'गोविंद' और 'केशव' नाम किस देवता के पर्याय हैं?",
        answers: [
            { text: "शिव", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोविंद' और 'केशव' दोनों ही नाम भगवान विष्णु और उनके अवतार कृष्ण के लिए प्रयोग किए जाते हैं।"
    },
    {
        question: "भगवान विष्णु के 'मत्स्य' अवतार का उद्देश्य क्या था?",
        answers: [
            { text: "राजा बलि को पाताल भेजना", correct: false },
            { text: "हिरण्यकशिपु का वध", correct: false },
            { text: "पृथ्वी को जल प्रलय से बचाना", correct: false },
            { text: "वेदों को एक राक्षस से बचाना", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मत्स्य अवतार में भगवान विष्णु ने एक सींग वाली मछली का रूप धारण कर हयग्रीव नामक राक्षस से वेदों को बचाया था।"
    },
    {
        question: "'विष्णु पुराण' किस देवता से संबंधित है?",
        answers: [
            { text: "शिव", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विष्णु पुराण हिंदू धर्म के 18 महापुराणों में से एक है, जिसमें भगवान विष्णु और उनके विभिन्न अवतारों की कहानियों और महिमा का वर्णन है।"
    },
    {
        question: "'माधवाचार्य' किस दार्शनिक सिद्धांत के प्रवर्तक थे?",
        answers: [
            { text: "अद्वैतवाद", correct: false },
            { text: "विशिष्टाद्वैतवाद", correct: false },
            { text: "द्वैतवाद", correct: true },
            { text: "द्वैताद्वैतवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य ने 'द्वैतवाद' दर्शन का प्रतिपादन किया था, जिसके अनुसार ईश्वर, आत्मा और भौतिक जगत एक-दूसरे से पूर्णतः भिन्न हैं।"
    },
    {
        question: "'वैष्णव धर्म' में 'पद्मनाभ' शब्द का क्या अर्थ है?",
        answers: [
            { text: "कमल की नाभि वाला", correct: true },
            { text: "शक्तिशाली भुजाओं वाला", correct: false },
            { text: "कमल के नेत्रों वाला", correct: false },
            { text: "ज्ञान का सागर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पद्मनाभ' शब्द का अर्थ है 'कमल की नाभि वाला'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भगवान विष्णु के उस रूप को दर्शाता है, जिसमें उनकी नाभि से ब्रह्मा जी का कमल निकलता है।"
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
        question: "भगवान कृष्ण के जीवन पर आधारित 'श्रीमद्भागवतम्' किस भाषा में लिखा गया है?",
        answers: [
            { text: "तमिल", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "तेलुगु", correct: false },
            { text: "हिंदी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रीमद्भागवतम्, जिसे भागवत पुराण भी कहते हैं, महर्षि वेदव्यास द्वारा संस्कृत में लिखा गया एक महापुराण है।"
    },
    {
        question: "'जगन्नाथ पुरी' की रथ यात्रा में कौन-से देवता शामिल होते हैं?",
        answers: [
            { text: "केवल जगन्नाथ", correct: false },
            { text: "जगन्नाथ, बलभद्र और सुभद्रा", correct: true },
            { text: "केवल कृष्ण", correct: false },
            { text: "कृष्ण और बलराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगन्नाथ पुरी की प्रसिद्ध रथ यात्रा में भगवान जगन्नाथ, उनके भाई बलभद्र और बहन सुभद्रा के रथ निकाले जाते हैं।"
    },
    {
        question: "'वैष्णव धर्म' के 'अद्वैतवाद' से भिन्न 'विशिष्टाद्वैतवाद' दर्शन के अनुसार, आत्मा और परमात्मा के बीच क्या संबंध है?",
        answers: [
            { text: "वे पूरी तरह से भिन्न हैं।", correct: false },
            { text: "वे पूरी तरह से एक हैं।", correct: false },
            { text: "वे एक होकर भी भिन्न हैं।", correct: true },
            { text: "उनका कोई संबंध नहीं है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशिष्टाद्वैतवाद के अनुसार, आत्मा (चित) और भौतिक जगत (अचित) परमात्मा (ब्रह्म) के ही अंश हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे एक होकर भी अपनी व्यक्तिगत पहचान बनाए रखते हैं।"
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
        question: "'वैष्णव धर्म' में 'नरसिंह' अवतार को किस उद्देश्य के लिए जाना जाता है?",
        answers: [
            { text: "असुरों का संहार", correct: false },
            { text: "भक्त प्रह्लाद की रक्षा", correct: true },
            { text: "वेदों का उद्धार", correct: false },
            { text: "पृथ्वी का उद्धार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंह अवतार में भगवान विष्णु ने अपने भक्त प्रह्लाद की रक्षा के लिए उसके पिता हिरण्यकशिपु का वध किया था।"
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
        question: "'वैष्णव धर्म' में 'पुष्टि मार्ग' की अवधारणा किससे संबंधित है?",
        answers: [
            { text: "ज्ञान मार्ग", correct: false },
            { text: "कर्म मार्ग", correct: false },
            { text: "भगवान की कृपा", correct: true },
            { text: "ध्यान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वल्लभाचार्य का 'पुष्टि मार्ग' इस विश्वास पर आधारित है कि मोक्ष केवल भगवान कृष्ण की विशेष कृपा (पुष्टि) से ही प्राप्त किया जा सकता है।"
    },
    {
        question: "भगवान विष्णु के 'कल्कि' अवतार का क्या उद्देश्य है?",
        answers: [
            { text: "वेदों की रक्षा", correct: false },
            { text: "धर्म की स्थापना", correct: false },
            { text: "कलियुग का अंत", correct: true },
            { text: "हिरण्यकशिपु का वध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कल्कि भगवान विष्णु का दसवां और अंतिम अवतार है, जिनके बारे में माना जाता है कि वे कलियुग के अंत में दुष्टों का संहार करने और धर्म की पुनः स्थापना करने के लिए आएंगे।"
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