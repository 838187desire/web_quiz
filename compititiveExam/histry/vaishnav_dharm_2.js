const questions = [
    {
        topHeading: "वैष्णव धर्म पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.30)"
    },
    {
        question: "'गोवर्धन पर्वत' को उठाने की पौराणिक कथा किस देवता से संबंधित है?",
        answers: [
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "विष्णु", correct: false },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवान कृष्ण ने ब्रजवासियों को इंद्र के प्रकोप से बचाने के लिए अपनी छोटी उंगली पर गोवर्धन पर्वत को उठा लिया था।"
    },
    {
        question: "'जगन्नाथ पुरी' का मंदिर किस राज्य में स्थित है?",
        answers: [
            { text: "ओडिशा", correct: true },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "कर्नाटक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगन्नाथ मंदिर भारत के ओडिशा राज्य के पुरी शहर में स्थित है, जो वैष्णव धर्म के चार धामों में से एक है।"
    },
    {
        question: "'आलवार' संत किस भाषा में अपनी भक्ति कविताएँ लिखते थे?",
        answers: [
            { text: "तेलुगु", correct: false },
            { text: "कन्नड़", correct: false },
            { text: "तमिल", correct: true },
            { text: "मलयालम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संतों ने भगवान विष्णु की स्तुति में तमिल भाषा में भक्ति गीत और कविताएँ लिखी थीं।"
    },
    {
        question: "'परशुराम' किस अवतार को माना जाता है, जिन्होंने पृथ्वी को क्षत्रियों से मुक्त किया था?",
        answers: [
            { text: "विष्णु", correct: true },
            { text: "शिव", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परशुराम भगवान विष्णु के छठे अवतार हैं, जिन्होंने अपने पिता जमदग्नि के अपमान का बदला लेने के लिए पृथ्वी को 21 बार क्षत्रियों से मुक्त किया था।"
    },
    {
        question: "'रामानंद' ने किस भक्ति संप्रदाय का प्रचार किया, जिसने उत्तर भारत में वैष्णव धर्म को लोकप्रिय बनाया?",
        answers: [
            { text: "श्री संप्रदाय", correct: false },
            { text: "रुद्र संप्रदाय", correct: false },
            { text: "राम भक्ति संप्रदाय", correct: true },
            { text: "कृष्ण भक्ति संप्रदाय", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामानंद ने उत्तर भारत में राम भक्ति को लोकप्रिय बनाया।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके शिष्यों में कबीर, रविदास, और धन्ना जैसे संत शामिल थे।"
    },
    {
        question: "'वैष्णव धर्म' में 'ब्रह्म संप्रदाय' के संस्थापक कौन थे?",
        answers: [
            { text: "रामानुज", correct: false },
            { text: "माधवाचार्य", correct: true },
            { text: "वल्लभाचार्य", correct: false },
            { text: "निंबार्काचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य ने 'ब्रह्म संप्रदाय' की स्थापना की थी, जो 'द्वैत' दर्शन पर आधारित है।"
    },
    {
        question: "'भगवद गीता' में वर्णित 'कर्मयोग' का क्या अर्थ है?",
        answers: [
            { text: "केवल पूजा-पाठ करना", correct: false },
            { text: "फल की इच्छा के बिना कर्तव्य करना", correct: true },
            { text: "ध्यान करना", correct: false },
            { text: "त्याग करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवद गीता में भगवान कृष्ण ने अर्जुन को फल की इच्छा के बिना अपने कर्तव्य (कर्म) करने का उपदेश दिया।"
    },
    {
        question: "भगवान विष्णु के किस अवतार ने 'हिरण्याक्ष' नामक राक्षस का वध किया था?",
        answers: [
            { text: "नरसिंह", correct: false },
            { text: "वराह", correct: true },
            { text: "वामन", correct: false },
            { text: "परशुराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वराह (सूअर) अवतार में, भगवान विष्णु ने पृथ्वी को हिरण्याक्ष से बचाया था और उसे अपने दांतों पर उठाकर समुद्र से बाहर निकाला था।"
    },
    {
        question: "'वैष्णव धर्म' का 'पुष्टि मार्ग' किस पर आधारित है?",
        answers: [
            { text: "ज्ञान पर", correct: false },
            { text: "तपस्या पर", correct: false },
            { text: "भगवान की कृपा पर", correct: true },
            { text: "यज्ञों पर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वल्लभाचार्य द्वारा स्थापित 'पुष्टि मार्ग' इस सिद्धांत पर आधारित है कि मोक्ष केवल भगवान की कृपा (पुष्टि) से ही प्राप्त हो सकता है, न कि कर्म या ज्ञान से।"
    },
    {
        question: "'वृंदावन' और 'मथुरा' किस देवता के जीवन से जुड़े प्रमुख तीर्थस्थल हैं?",
        answers: [
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "विष्णु", correct: false },
            { text: "परशुराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृंदावन और मथुरा भगवान कृष्ण के बचपन और युवावस्था से जुड़े हुए स्थान हैं, जहाँ उन्होंने अपनी लीलाएं की थीं।"
    },
    {
        question: "'वैष्णव धर्म' में 'श्री संप्रदाय' का संबंध किस दार्शनिक सिद्धांत से है?",
        answers: [
            { text: "द्वैतवाद", correct: false },
            { text: "अद्वैतवाद", correct: false },
            { text: "विशिष्टाद्वैतवाद", correct: true },
            { text: "शुद्धाद्वैतवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्री संप्रदाय के संस्थापक रामानुज ने 'विशिष्टाद्वैतवाद' दर्शन का प्रतिपादन किया था।"
    },
    {
        question: "'वैष्णव धर्म' का 'संदेहातीत' सिद्धांत किसने प्रतिपादित किया?",
        answers: [
            { text: "रामानुज", correct: false },
            { text: "वल्लभाचार्य", correct: false },
            { text: "माधवाचार्य", correct: false },
            { text: "निंबार्काचार्य", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निंबार्काचार्य द्वारा प्रतिपादित 'संदेहातीत' सिद्धांत को 'द्वैताद्वैत' भी कहते हैं, जिसका अर्थ है कि आत्मा और परमात्मा में एक साथ भेद और अभेद दोनों हैं।"
    },
    {
        question: "'दशावतार' की अवधारणा किस देवता से संबंधित है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: true },
            { text: "शिव", correct: false },
            { text: "शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशावतार, यानी दस अवतार, भगवान विष्णु के दस प्रमुख अवतारों की अवधारणा है, जो विभिन्न युगों में धर्म की रक्षा के लिए अवतरित हुए।"
    },
    {
        question: "'द्वारकाधीश' मंदिर किस राज्य में स्थित है?",
        answers: [
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "पंजाब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात के द्वारका में स्थित द्वारकाधीश मंदिर भगवान कृष्ण को समर्पित एक प्रमुख वैष्णव तीर्थस्थल है।"
    },
    {
        question: "'जगन्नाथ पुरी' की रथ यात्रा किस महीने में होती है?",
        answers: [
            { text: "चैत्र", correct: false },
            { text: "श्रावण", correct: false },
            { text: "आषाढ़", correct: true },
            { text: "कार्तिक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगन्नाथ पुरी की प्रसिद्ध रथ यात्रा हर साल आषाढ़ मास के शुक्ल पक्ष की द्वितीया को आयोजित होती है।"
    },
    {
        question: "'वैष्णव' धर्म के किस संप्रदाय में राधा को कृष्ण की शक्ति के रूप में पूजा जाता है?",
        answers: [
            { text: "श्री संप्रदाय", correct: false },
            { text: "ब्रह्म संप्रदाय", correct: false },
            { text: "रुद्र संप्रदाय", correct: false },
            { text: "गौड़ीय संप्रदाय", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौड़ीय संप्रदाय (चैतन्य महाप्रभु द्वारा स्थापित) में राधा-कृष्ण की युगल उपासना पर विशेष बल दिया जाता है।"
    },
    {
        question: "'वराह' अवतार में भगवान विष्णु ने पृथ्वी को किस राक्षस से बचाया था?",
        answers: [
            { text: "हिरण्यकशिपु", correct: false },
            { text: "हिरण्याक्ष", correct: true },
            { text: "रावण", correct: false },
            { text: "कंस", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवान विष्णु ने वराह अवतार में हिरण्याक्ष नामक राक्षस का वध किया था, जिसने पृथ्वी को समुद्र में छिपा दिया था।"
    },
    {
        question: "'आलवार' संतों का संबंध किस काल से था?",
        answers: [
            { text: "3री-5वीं शताब्दी", correct: false },
            { text: "7वीं-10वीं शताब्दी", correct: true },
            { text: "12वीं-14वीं शताब्दी", correct: false },
            { text: "15वीं-17वीं शताब्दी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संत 7वीं से 10वीं शताब्दी के बीच दक्षिण भारत में भक्ति आंदोलन के प्रमुख प्रचारक थे।"
    },
    {
        question: "'वैष्णव धर्म' में 'पंचांग' का क्या अर्थ है?",
        answers: [
            { text: "पाँच इंद्रियाँ", correct: false },
            { text: "पाँच प्रमुख तीर्थ", correct: false },
            { text: "पाँच दैनिक पूजा अनुष्ठान", correct: true },
            { text: "पाँच अवतार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैष्णव धर्म में पंचांग का अर्थ है पाँच दैनिक अनुष्ठान: अभिगमन, उपादान, इज्या, स्वाध्याय और योग।"
    },
    {
        question: "'वैष्णव धर्म' में 'गोपाल' शब्द किसके लिए प्रयोग किया जाता है?",
        answers: [
            { text: "राम", correct: false },
            { text: "विष्णु", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "परशुराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोपाल' शब्द का अर्थ है 'गाय को पालने वाला'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भगवान कृष्ण के बचपन से जुड़ा एक नाम है।"
    },
    {
        question: "'महाभारत' में भगवान कृष्ण ने अर्जुन को किस रूप में दर्शन दिए?",
        answers: [
            { text: "केवल एक सारथी के रूप में", correct: false },
            { text: "चतुर्भुज विष्णु के रूप में", correct: false },
            { text: "विराट रूप में", correct: true },
            { text: "ब्रह्मा के रूप में", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरुक्षेत्र के युद्ध में, भगवान कृष्ण ने अर्जुन को अपना 'विराट रूप' (सर्वव्यापी, ब्रह्मांडीय रूप) दिखाया था।"
    },
    {
        question: "'कल्कि' अवतार का क्या उद्देश्य है?",
        answers: [
            { text: "सतयुग की स्थापना", correct: false },
            { text: "त्रेतायुग का अंत", correct: false },
            { text: "कलियुग का अंत और धर्म की स्थापना", correct: true },
            { text: "द्वापर युग की स्थापना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कल्कि, भगवान विष्णु का अंतिम अवतार है, जो कलियुग के अंत में दुष्टों का संहार कर धर्म की पुनः स्थापना करेंगे।"
    },
    {
        question: "'वैष्णव धर्म' में 'माधवाचार्य' किस दार्शनिक सिद्धांत के प्रवर्तक थे?",
        answers: [
            { text: "अद्वैतवाद", correct: false },
            { text: "विशिष्टाद्वैतवाद", correct: false },
            { text: "द्वैतवाद", correct: true },
            { text: "शुद्धाद्वैतवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य ने 'द्वैतवाद' दर्शन का प्रतिपादन किया था, जो ईश्वर और आत्मा को अलग-अलग मानता है।"
    },
    {
        question: "'वैकुंठ' किस देवता का निवास स्थान माना जाता है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैकुंठ या वैकुंठ लोक को भगवान विष्णु का निवास स्थान माना जाता है, जहाँ वे अपनी पत्नी लक्ष्मी के साथ रहते हैं।"
    },
    {
        question: "'वैष्णव धर्म' का 'रुद्र संप्रदाय' किसने स्थापित किया था?",
        answers: [
            { text: "रामानुज", correct: false },
            { text: "माधवाचार्य", correct: false },
            { text: "वल्लभाचार्य", correct: true },
            { text: "निंबार्काचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वल्लभाचार्य ने 'रुद्र संप्रदाय' (पुष्टि मार्ग) की स्थापना की थी।"
    },
    {
        question: "भगवान विष्णु के 'परशुराम' अवतार का संबंध किस ऋषि से था?",
        answers: [
            { text: "वशिष्ठ", correct: false },
            { text: "विश्वामित्र", correct: false },
            { text: "जमदग्नि", correct: true },
            { text: "अगस्त्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परशुराम ऋषि जमदग्नि और रेणुका के पुत्र थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने अपने पिता के अपमान का बदला लेने के लिए क्षत्रियों का संहार किया था।"
    },
    {
        question: "'जगन्नाथ' मंदिर में पूजी जाने वाली मूर्तियाँ किस धातु की नहीं, बल्कि किसकी बनी हैं?",
        answers: [
            { text: "पत्थर", correct: false },
            { text: "सोना", correct: false },
            { text: "लकड़ी", correct: true },
            { text: "मिट्टी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगन्नाथ मंदिर में भगवान जगन्नाथ, बलभद्र और सुभद्रा की मूर्तियाँ लकड़ी से बनी हैं, जिन्हें हर 12 या 19 साल में एक विशेष अनुष्ठान (नवकलेवर) के दौरान बदला जाता है।"
    },
    {
        question: "'वैष्णव धर्म' में 'ब्रह्म संप्रदाय' के किस दार्शनिक सिद्धांत का प्रतिपादन किया गया है?",
        answers: [
            { text: "विशिष्टाद्वैत", correct: false },
            { text: "द्वैत", correct: true },
            { text: "अद्वैत", correct: false },
            { text: "शुद्धाद्वैत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधवाचार्य द्वारा स्थापित ब्रह्म संप्रदाय 'द्वैत' दर्शन पर आधारित है, जो ईश्वर और आत्मा को दो अलग-अलग और स्वतंत्र सत्ताओं के रूप में मानता है।"
    },
    {
        question: "'अलवर' संतों की संख्या कितनी थी?",
        answers: [
            { text: "63", correct: false },
            { text: "108", correct: false },
            { text: "12", correct: true },
            { text: "33", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण भारत में 12 आलवार संत हुए, जिन्होंने तमिल भाषा में भक्ति गीत लिखे और वैष्णव धर्म का प्रचार किया।"
    },
    {
        question: "'हरिद्वार' का नाम किस देवता से संबंधित है?",
        answers: [
            { text: "शिव", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हरिद्वार' का अर्थ है 'हरि' (विष्णु) का द्वार।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक प्रसिद्ध वैष्णव तीर्थस्थल है, जहाँ गंगा नदी मैदानी इलाकों में प्रवेश करती है।"
    },
    {
        question: "'दशावतार' में 'राम' को किस नंबर का अवतार माना जाता है?",
        answers: [
            { text: "छठा", correct: false },
            { text: "सातवाँ", correct: true },
            { text: "आठवाँ", correct: false },
            { text: "नौवाँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवान राम, रामायण के नायक, भगवान विष्णु के सातवें अवतार हैं।"
    },
    {
        question: "'भगवद गीता' में वर्णित 'स्थितप्रज्ञ' का क्या अर्थ है?",
        answers: [
            { text: "स्थिर बुद्धि वाला व्यक्ति", correct: true },
            { text: "महान योद्धा", correct: false },
            { text: "ज्ञानी व्यक्ति", correct: false },
            { text: "योगी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्थितप्रज्ञ' उस व्यक्ति को कहते हैं जिसकी बुद्धि सुख-दुःख, लाभ-हानि में स्थिर रहती है और जो सभी परिस्थितियों में समभाव रखता है।"
    },
    {
        question: "'वृंदावन' किस भारतीय राज्य में स्थित है, जो वैष्णव धर्म का एक प्रमुख केंद्र है?",
        answers: [
            { text: "राजस्थान", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "बिहार", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृंदावन, भगवान कृष्ण के बचपन से जुड़ा एक महत्वपूर्ण तीर्थस्थल है, जो उत्तर प्रदेश के मथुरा जिले में स्थित है।"
    },
    {
        question: "'विष्णु पुराण' का संबंध किस युग से है?",
        answers: [
            { text: "सतयुग", correct: false },
            { text: "त्रेता युग", correct: false },
            { text: "द्वापर युग", correct: false },
            { text: "कलियुग", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विष्णु पुराण का संबंध मुख्य रूप से कलियुग से है, क्योंकि इसमें कलियुग की घटनाओं और भविष्यवाणियों का वर्णन किया गया है।"
    },
    {
        question: "'वैष्णव धर्म' में 'गोविंद' शब्द का क्या अर्थ है?",
        answers: [
            { text: "गायों का स्वामी", correct: true },
            { text: "पृथ्वी का स्वामी", correct: false },
            { text: "कमल के नेत्रों वाला", correct: false },
            { text: "दुष्टों का संहारक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोविंद' शब्द का शाब्दिक अर्थ है 'गायों का स्वामी' या 'गोपालक', जो भगवान कृष्ण के बचपन से जुड़ा एक नाम है।"
    },
    {
        question: "'वैकुंठ' किस देवता का निवास स्थान माना जाता है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदू धर्म के अनुसार, वैकुंठ भगवान विष्णु का निवास स्थान है।"
    },
    {
        question: "'पुष्टि मार्ग' की स्थापना किसने की थी?",
        answers: [
            { text: "रामानुज", correct: false },
            { text: "माधवाचार्य", correct: false },
            { text: "वल्लभाचार्य", correct: true },
            { text: "चैतन्य महाप्रभु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वल्लभाचार्य ने 'पुष्टि मार्ग' नामक वैष्णव संप्रदाय की स्थापना की थी।"
    },
    {
        question: "'दशावतार' में भगवान विष्णु के 'परशुराम' अवतार का संबंध किस ऋषि से था?",
        answers: [
            { text: "वशिष्ठ", correct: false },
            { text: "जमदग्नि", correct: true },
            { text: "विश्वामित्र", correct: false },
            { text: "भृगु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परशुराम ऋषि जमदग्नि के पुत्र थे और उनका वंश भृगु था, इसलिए उन्हें भार्गव भी कहा जाता है।"
    },
    {
        question: "'चैतन्य महाप्रभु' किस संप्रदाय के संस्थापक थे?",
        answers: [
            { text: "श्री संप्रदाय", correct: false },
            { text: "रुद्र संप्रदाय", correct: false },
            { text: "गौड़ीय संप्रदाय", correct: true },
            { text: "निंबार्क संप्रदाय", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चैतन्य महाप्रभु ने 16वीं शताब्दी में गौड़ीय वैष्णव संप्रदाय की स्थापना की, जो कृष्ण भक्ति पर केंद्रित है।"
    },
    {
        question: "'अलवर' संतों की भक्ति कविताएँ किसमें संकलित हैं?",
        answers: [
            { text: "तिरुप्पवाई", correct: false },
            { text: "दिव्य प्रबंधम्", correct: true },
            { text: "तमिल वेद", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संतों द्वारा रचित भक्ति गीतों और कविताओं के संग्रह को 'दिव्य प्रबंधम्' के नाम से जाना जाता है।"
    },
    {
        question: "'वैष्णव धर्म' में 'निंबार्क संप्रदाय' का दार्शनिक सिद्धांत क्या था?",
        answers: [
            { text: "अद्वैत", correct: false },
            { text: "द्वैत", correct: false },
            { text: "विशिष्टाद्वैत", correct: false },
            { text: "द्वैताद्वैत", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निंबार्काचार्य द्वारा स्थापित निंबार्क संप्रदाय 'द्वैताद्वैत' दर्शन पर आधारित है, जिसका अर्थ है 'द्वैत और अद्वैत दोनों'।"
    },
    {
        question: "'गरुड़' को किस रूप में दर्शाया जाता है?",
        answers: [
            { text: "मानव रूप", correct: false },
            { text: "पक्षी रूप (बाज)", correct: true },
            { text: "नाग रूप", correct: false },
            { text: "सिंह रूप", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गरुड़, भगवान विष्णु का वाहन, एक बाज के रूप में दर्शाया जाता है।"
    },
    {
        question: "'श्री संप्रदाय' के संस्थापक रामानुज किस दर्शन के प्रवर्तक थे?",
        answers: [
            { text: "अद्वैतवाद", correct: false },
            { text: "विशिष्टाद्वैतवाद", correct: true },
            { text: "द्वैतवाद", correct: false },
            { text: "शुद्धाद्वैतवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामानुज ने 'विशिष्टाद्वैतवाद' दर्शन का प्रतिपादन किया था, जो आत्मा और परमात्मा के बीच संबंध को समझाता है।"
    },
    {
        question: "'वैष्णव धर्म' में 'कल्कि' अवतार का उद्देश्य क्या है?",
        answers: [
            { text: "धर्म की स्थापना", correct: false },
            { text: "दुष्टों का संहार", correct: false },
            { text: "कलियुग का अंत", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कल्कि, भगवान विष्णु का अंतिम अवतार, कलियुग के अंत में दुष्टों का संहार कर धर्म की पुनः स्थापना करेंगे।"
    },
    {
        question: "'भागवत पुराण' का संबंध किस देवता से है?",
        answers: [
            { text: "शिव", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु और उनके अवतार", correct: true },
            { text: "शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भागवत पुराण मुख्य रूप से भगवान विष्णु और उनके अवतारों, विशेषकर भगवान कृष्ण की लीलाओं पर केंद्रित है।"
    },
    {
        question: "'सिंधु घाटी सभ्यता' से प्राप्त किस मोहर पर विष्णु से संबंधित कोई साक्ष्य नहीं मिला है?",
        answers: [
            { text: "मातृ देवी", correct: false },
            { text: "पशुपति महादेव", correct: false },
            { text: "योगी", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी सभ्यता के पुरातात्विक साक्ष्यों में विष्णु से संबंधित कोई भी प्रतीक या प्रतिमा नहीं मिली है।"
    },
    {
        question: "'जगन्नाथ' शब्द का अर्थ क्या है?",
        answers: [
            { text: "पृथ्वी का स्वामी", correct: false },
            { text: "ब्रह्मांड के स्वामी", correct: true },
            { text: "ज्ञान का सागर", correct: false },
            { text: "महान योगी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जगन्नाथ' का अर्थ है 'जगत (ब्रह्मांड) के नाथ (स्वामी)'।"
    },
    {
        question: "भगवान विष्णु के किस अवतार ने 'हिरण्यकशिपु' का वध किया था?",
        answers: [
            { text: "वामन", correct: false },
            { text: "नरसिंह", correct: true },
            { text: "वराह", correct: false },
            { text: "परशुराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवान विष्णु ने अपने भक्त प्रह्लाद की रक्षा के लिए 'नरसिंह' (आधा मानव, आधा शेर) अवतार लिया और हिरण्यकशिपु का वध किया।"
    },
    {
        question: "'वैष्णव धर्म' में 'गोवर्धन' शब्द का संबंध किससे है?",
        answers: [
            { text: "गोवर्धन पर्वत", correct: false },
            { text: "गायों का पोषण", correct: false },
            { text: "कृष्ण की लीलाएँ", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोवर्धन' शब्द का संबंध गोवर्धन पर्वत से है जिसे भगवान कृष्ण ने उठाया था, और यह गायों के पोषण से जुड़ा हुआ है।"
    },
    {
        question: "'द्वारकाधीश' मंदिर किस भगवान को समर्पित है?",
        answers: [
            { text: "राम", correct: false },
            { text: "विष्णु", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "बलराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वारकाधीश मंदिर गुजरात में स्थित है और यह भगवान कृष्ण को समर्पित है, जिन्हें द्वारका का राजा माना जाता है।"
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