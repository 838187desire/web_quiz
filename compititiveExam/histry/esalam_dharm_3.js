const questions = [
    {
        topHeading: "इस्लाम धर्म पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.35)"
    },
    {
        question: "'बैत-उल-हिकमा' (House of Wisdom) की स्थापना किस अब्बासी खलीफा ने की थी?",
        answers: [
            { text: "हारून अल-रशीद", correct: false },
            { text: "अल-मंसूर", correct: false },
            { text: "अल-मामून", correct: true },
            { text: "अल-मुतावक्किल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैत-उल-हिकमा (ज्ञान का घर) की स्थापना बगदाद में अब्बासी खलीफा अल-मामून ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अनुवाद, अनुसंधान और शिक्षा का एक महत्वपूर्ण केंद्र था।"
    },
    {
        question: "इस्लाम में 'अखिराह' का क्या अर्थ है?",
        answers: [
            { text: "पवित्र यात्रा", correct: false },
            { text: "रोज़ाना की प्रार्थना", correct: false },
            { text: "परलोक या पुनरुत्थान", correct: true },
            { text: "दान देना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अखिराह' का अर्थ है 'परलोक', जिसमें मृत्यु के बाद का जीवन, पुनरुत्थान और न्याय का दिन शामिल है।"
    },
    {
        question: "'तैमूर लंग' ने किस इस्लामी साम्राज्य पर आक्रमण किया था?",
        answers: [
            { text: "अब्बासी साम्राज्य", correct: false },
            { text: "उस्मानी साम्राज्य", correct: true },
            { text: "उमय्यद साम्राज्य", correct: false },
            { text: "फातिमी साम्राज्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1402 ईस्वी में, तैमूर लंग ने अंकारा के युद्ध में उस्मानी साम्राज्य की सेना को हराया था।"
    },
    {
        question: "भारत में 'चिश्ती' सूफी संप्रदाय की स्थापना किसने की थी?",
        answers: [
            { text: "निजामुद्दीन औलिया", correct: false },
            { text: "सलीम चिश्ती", correct: false },
            { text: "ख्वाजा मुईनुद्दीन चिश्ती", correct: true },
            { text: "बाबा फरीद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ख्वाजा मुईनुद्दीन चिश्ती 12वीं सदी के एक सूफी संत थे जिन्होंने भारत में चिश्ती संप्रदाय की नींव रखी।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी दरगाह अजमेर में है।"
    },
    {
        question: "'इब्न-बतूता' किस देश का एक प्रसिद्ध मुस्लिम यात्री था?",
        answers: [
            { text: "ईरान", correct: false },
            { text: "मिस्र", correct: false },
            { text: "मोरक्को", correct: true },
            { text: "तुर्की", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्न-बतूता 14वीं सदी का एक मोरक्कन यात्री और विद्वान था जिसने इस्लामी दुनिया और उससे भी आगे की यात्रा की थी।"
    },
    {
        question: "'मस्जिद-ए-नबवी' (पैगंबर की मस्जिद) की स्थापना किस शहर में हुई थी?",
        answers: [
            { text: "मक्का", correct: false },
            { text: "मदीना", correct: true },
            { text: "यरूशलम", correct: false },
            { text: "दमिश्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मस्जिद-ए-नबवी, जिसे पैगंबर की मस्जिद भी कहते हैं, मदीना में स्थित है।"
    },
    {
        question: "'हज' यात्रा का एक महत्वपूर्ण हिस्सा क्या है, जिसमें तीर्थयात्री काबा के चारों ओर सात बार घूमते हैं?",
        answers: [
            { text: "सई", correct: false },
            { text: "तवाफ", correct: true },
            { text: "मिना", correct: false },
            { text: "जुमैरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तवाफ' वह अनुष्ठान है जिसमें तीर्थयात्री अल्लाह के घर, काबा, की घड़ी की विपरीत दिशा में सात बार परिक्रमा करते हैं।"
    },
    {
        question: "'अबू बक्र' का शासनकाल कितने वर्ष का था?",
        answers: [
            { text: "2 वर्ष", correct: true },
            { text: "10 वर्ष", correct: false },
            { text: "12 वर्ष", correct: false },
            { text: "20 वर्ष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहले खलीफा अबू बक्र ने 632 से 634 ईस्वी तक, यानी लगभग दो साल तक शासन किया।"
    },
    {
        question: "किस खलीफा के काल में 'ईरानी' और 'मिस्री' साम्राज्य पर विजय प्राप्त हुई?",
        answers: [
            { text: "अबू बक्र", correct: false },
            { text: "उमर", correct: true },
            { text: "उस्मान", correct: false },
            { text: "अली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूसरे खलीफा उमर के शासनकाल में, इस्लामी साम्राज्य का सबसे अधिक विस्तार हुआ और फारसी और बीजान्टिन साम्राज्यों के बड़े हिस्से पर विजय प्राप्त की गई।"
    },
    {
        question: "'शिया' इस्लाम के अनुसार, 'इमाम' की भूमिका क्या है?",
        answers: [
            { text: "केवल नमाज का नेतृत्व करना", correct: false },
            { text: "एक आध्यात्मिक और राजनीतिक नेता", correct: true },
            { text: "एक पैगंबर", correct: false },
            { text: "एक राजा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिया इस्लाम में, इमाम को न केवल एक आध्यात्मिक नेता माना जाता है, बल्कि वह समुदाय के लिए एक राजनीतिक और नैतिक मार्गदर्शन भी प्रदान करता है।"
    },
    {
        question: "'मुहर्रम' का महीना किस ऐतिहासिक घटना के लिए महत्वपूर्ण है?",
        answers: [
            { text: "पैगंबर मुहम्मद का जन्म", correct: false },
            { text: "इमाम हुसैन की शहादत", correct: true },
            { text: "कुरान का अवतरण", correct: false },
            { text: "हज का समापन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहर्रम का महीना कर्बला की लड़ाई में पैगंबर मुहम्मद के नवासे इमाम हुसैन की शहादत की याद दिलाता है।"
    },
    {
        question: "'दमिश्क' किस खिलाफत की राजधानी था?",
        answers: [
            { text: "राशिदून खिलाफत", correct: false },
            { text: "उमय्यद खिलाफत", correct: true },
            { text: "अब्बासी खिलाफत", correct: false },
            { text: "उस्मानी खिलाफत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उमय्यद खिलाफत (661-750 ईस्वी) की राजधानी दमिश्क (सीरिया) थी।"
    },
    {
        question: "'सूफीवाद' का लक्ष्य क्या है?",
        answers: [
            { text: "धन कमाना", correct: false },
            { text: "राजनीतिक सत्ता हासिल करना", correct: false },
            { text: "ईश्वर के साथ एक व्यक्तिगत, रहस्यवादी और आध्यात्मिक संबंध स्थापित करना", correct: true },
            { text: "कुरान का शाब्दिक अर्थ लगाना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूफीवाद का अंतिम लक्ष्य 'फना' (स्वयं का विनाश) और 'बका' (अल्लाह के साथ अस्तित्व) की स्थिति को प्राप्त करके ईश्वर के साथ व्यक्तिगत संबंध स्थापित करना है।"
    },
    {
        question: "'इस्लामी स्वर्ण युग' (Islamic Golden Age) का संबंध किस खिलाफत से है?",
        answers: [
            { text: "उमय्यद खिलाफत", correct: false },
            { text: "अब्बासी खिलाफत", correct: true },
            { text: "फातिमी खिलाफत", correct: false },
            { text: "उस्मानी खिलाफत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब्बासी खिलाफत (लगभग 8वीं से 13वीं सदी) को इस्लामी स्वर्ण युग माना जाता है, जिसमें विज्ञान, कला, और संस्कृति का अभूतपूर्व विकास हुआ।"
    },
    {
        question: "'अजमेर' में स्थित दरगाह किस सूफी संप्रदाय से संबंधित है?",
        answers: [
            { text: "कादरी", correct: false },
            { text: "सुहरावर्दी", correct: false },
            { text: "नक्शबंदी", correct: false },
            { text: "चिश्ती", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजमेर की दरगाह चिश्ती संप्रदाय के संस्थापक ख्वाजा मुईनुद्दीन चिश्ती से संबंधित है।"
    },
    {
        question: "'इस्लाम' शब्द का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "ज्ञान", correct: false },
            { text: "समर्पण", correct: true },
            { text: "शांति", correct: false },
            { text: "प्रेम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इस्लाम' का अर्थ है 'अल्लाह की इच्छा के प्रति समर्पण'।"
    },
    {
        question: "'मुहर्रम' के दसवें दिन को किस नाम से जाना जाता है?",
        answers: [
            { text: "लैलातुल कद्र", correct: false },
            { text: "अशूरा", correct: true },
            { text: "शब-ए-बारात", correct: false },
            { text: "ईद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अशूरा' मुहर्रम के दसवें दिन को कहते हैं, जिस दिन इमाम हुसैन की कर्बला में शहादत हुई थी।"
    },
    {
        question: "'इब्न-अल-हयथम' (Alhazen) किस क्षेत्र से संबंधित एक प्रसिद्ध इस्लामी विद्वान थे?",
        answers: [
            { text: "खगोल विज्ञान", correct: false },
            { text: "गणित", correct: false },
            { text: "प्रकाशिकी", correct: true },
            { text: "भूगोल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्न-अल-हयथम एक प्रसिद्ध वैज्ञानिक थे जिन्हें 'आधुनिक प्रकाशिकी का जनक' माना जाता है।"
    },
    {
        question: "'कुरान' में कुल कितने 'सूरह' हैं?",
        answers: [
            { text: "100", correct: false },
            { text: "114", correct: true },
            { text: "120", correct: false },
            { text: "150", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरान में कुल 114 अध्याय हैं, जिन्हें 'सूरह' कहा जाता है।"
    },
    {
        question: "'पैगंबर मुहम्मद' के निधन के बाद इस्लाम के पहले चार खलीफाओं को किस नाम से जाना जाता है?",
        answers: [
            { text: "उमय्यद खलीफा", correct: false },
            { text: "अब्बासी खलीफा", correct: false },
            { text: "राशिदून खलीफा", correct: true },
            { text: "फातिमी खलीफा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लाम के पहले चार खलीफाओं - अबू बक्र, उमर, उस्मान और अली को 'राशिदून' या 'सही रास्ते पर चलने वाले' खलीफा कहा जाता है।"
    },
    {
        question: "'हज' के दौरान 'शैतान को पत्थर मारने' का अनुष्ठान किस स्थान पर होता है?",
        answers: [
            { text: "काबा", correct: false },
            { text: "सफा और मरवा", correct: false },
            { text: "मिना", correct: true },
            { text: "माउंट अराफात", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हज यात्रा के दौरान, मिना में तीन स्तंभों पर पत्थर फेंकने का अनुष्ठान किया जाता है।"
    },
    {
        question: "'इस्लाम' में किस जानवर को सबसे पवित्र माना जाता है?",
        answers: [
            { text: "शेर", correct: false },
            { text: "गाय", correct: false },
            { text: "ऊंट", correct: false },
            { text: "कोई नहीं", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लाम में किसी भी जानवर को 'पवित्र' नहीं माना जाता है, हालाँकि कुछ जानवर जैसे ऊंट, भेड़ और बकरी कुर्बानी के लिए महत्वपूर्ण हैं, और कुछ जानवर जैसे कुत्ता अशुद्ध माने जाते हैं।"
    },
    {
        question: "'उमय्यद' खिलाफत की स्थापना किसने की थी?",
        answers: [
            { text: "अबू बक्र", correct: false },
            { text: "अली", correct: false },
            { text: "मुआविया", correct: true },
            { text: "उमर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुआविया इब्न अबी सुफयान ने 661 ईस्वी में उमय्यद खिलाफत की स्थापना की थी।"
    },
    {
        question: "'इस्लाम' में 'सूफीवाद' का क्या अर्थ है?",
        answers: [
            { text: "इस्लाम का एक कट्टरपंथी पक्ष", correct: false },
            { text: "इस्लाम का एक रहस्यवादी और आध्यात्मिक पक्ष", correct: true },
            { text: "इस्लाम का एक कानूनी पक्ष", correct: false },
            { text: "इस्लाम का एक राजनीतिक पक्ष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूफीवाद ईश्वर के प्रति प्रेम और व्यक्तिगत भक्ति पर केंद्रित है, जो औपचारिक धार्मिक अनुष्ठानों से परे है।"
    },
    {
        question: "'कुरान' की आयतों को क्या कहते हैं?",
        answers: [
            { text: "हदीस", correct: false },
            { text: "सुन्नाह", correct: false },
            { text: "आयत", correct: true },
            { text: "फिक़ह", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरान के प्रत्येक छंद को 'आयत' कहा जाता है।"
    },
    {
        question: "'इस्लामी स्वर्ण युग' के दौरान किस खलीफा ने खगोल विज्ञान और गणित के अध्ययन को बढ़ावा दिया?",
        answers: [
            { text: "हारून अल-रशीद", correct: false },
            { text: "अल-मंसूर", correct: false },
            { text: "अल-मामून", correct: true },
            { text: "अल-मुतावक्किल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब्बासी खलीफा अल-मामून ने बैत-उल-हिकमा (House of Wisdom) की स्थापना की, जहाँ खगोल विज्ञान, गणित और चिकित्सा जैसे क्षेत्रों में अनुवाद और अनुसंधान को प्रोत्साहन मिला।"
    },
    {
        question: "'बद्र का युद्ध' (Battle of Badr) कब हुआ था?",
        answers: [
            { text: "610 ईस्वी", correct: false },
            { text: "622 ईस्वी", correct: false },
            { text: "624 ईस्वी", correct: true },
            { text: "632 ईस्वी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बद्र का युद्ध 624 ईस्वी में पैगंबर मुहम्मद के नेतृत्व में मुसलमानों और मक्का के कुरैश जनजाति के बीच हुआ था, जिसमें मुसलमानों की जीत हुई।"
    },
    {
        question: "'शहादा' (Shahada) का क्या अर्थ है?",
        answers: [
            { text: "प्रार्थना करना", correct: false },
            { text: "विश्वास की घोषणा", correct: true },
            { text: "दान देना", correct: false },
            { text: "उपवास रखना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शहादा इस्लाम का पहला स्तंभ है, जिसमें इस विश्वास की घोषणा की जाती है कि 'अल्लाह के सिवा कोई उपास्य नहीं है, और मुहम्मद अल्लाह के रसूल हैं।'।"
    },
    {
        question: "'सूफीवाद' का कौन-सा संप्रदाय भारत में सबसे लोकप्रिय था?",
        answers: [
            { text: "नक्शबंदी", correct: false },
            { text: "कादरी", correct: false },
            { text: "चिश्ती", correct: true },
            { text: "सुहरावर्दी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में ख्वाजा मुईनुद्दीन चिश्ती द्वारा स्थापित चिश्ती संप्रदाय सबसे अधिक लोकप्रिय हुआ, जिसका केंद्र अजमेर था।"
    },
    {
        question: "'कुरान' की आयतों को सबसे पहले किस भाषा में लिखा गया था?",
        answers: [
            { text: "हिब्रू", correct: false },
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "अरामी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरान को अल्लाह ने पैगंबर मुहम्मद पर अरबी भाषा में अवतरित किया था।"
    },
    {
        question: "'उस्मान इब्न अफ्फान' कौन थे?",
        answers: [
            { text: "पहले खलीफा", correct: false },
            { text: "दूसरे खलीफा", correct: false },
            { text: "तीसरे खलीफा", correct: true },
            { text: "चौथे खलीफा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस्मान इब्न अफ्फान राशिदून खिलाफत के तीसरे खलीफा थे, जिनके शासनकाल में कुरान को एक पुस्तक के रूप में संकलित किया गया।"
    },
    {
        question: "'इस्लाम' में किस शब्द का अर्थ 'प्रार्थना के लिए बुलावा' है?",
        answers: [
            { text: "सलाम", correct: false },
            { text: "अजान", correct: true },
            { text: "फतवा", correct: false },
            { text: "खुतबा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजान वह बुलावा है जो मुअज्जिन द्वारा दिन में पाँच बार नमाज के लिए दिया जाता है।"
    },
    {
        question: "'शरिया' के मुख्य स्रोत क्या हैं?",
        answers: [
            { text: "कुरान और हदीस", correct: true },
            { text: "केवल कुरान", correct: false },
            { text: "केवल हदीस", correct: false },
            { text: "कुरान और इज्मा (सामुदायिक सहमति)", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लामी कानून (शरिया) के दो प्राथमिक स्रोत कुरान और हदीस हैं।"
    },
    {
        question: "'अल-अक्सा मस्जिद' किस शहर में है, जिसे इस्लाम में तीसरा सबसे पवित्र स्थल माना जाता है?",
        answers: [
            { text: "मक्का", correct: false },
            { text: "मदीना", correct: false },
            { text: "यरूशलम", correct: true },
            { text: "बगदाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-अक्सा मस्जिद यरूशलम में स्थित है और इसका इस्लाम में बहुत महत्व है।"
    },
    {
        question: "'शिया' और 'सुन्नी' के बीच किस ऐतिहासिक घटना को लेकर सबसे गहरा विभाजन हुआ?",
        answers: [
            { text: "बद्र का युद्ध", correct: false },
            { text: "कर्बला का युद्ध", correct: true },
            { text: "खंदक का युद्ध", correct: false },
            { text: "हुनैना का युद्ध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 680 ईस्वी में कर्बला के युद्ध में पैगंबर मुहम्मद के नवासे इमाम हुसैन की शहादत हुई, जिसने शिया और सुन्नी के बीच के विभाजन को और गहरा कर दिया।"
    },
    {
        question: "'इमाम हुसैन' कौन थे?",
        answers: [
            { text: "पैगंबर मुहम्मद के पुत्र", correct: false },
            { text: "पैगंबर मुहम्मद के दामाद", correct: false },
            { text: "पैगंबर मुहम्मद के नवासे", correct: true },
            { text: "पैगंबर मुहम्मद के भाई", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इमाम हुसैन पैगंबर मुहम्मद की बेटी फातिमा और उनके दामाद अली के पुत्र थे।"
    },
    {
        question: "'फतह मक्का' का क्या अर्थ है?",
        answers: [
            { text: "मक्का की विजय", correct: true },
            { text: "मक्का में शांति संधि", correct: false },
            { text: "मक्का का प्रस्थान", correct: false },
            { text: "मक्का में हज का आरंभ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फतह मक्का' 630 ईस्वी में पैगंबर मुहम्मद द्वारा बिना किसी प्रतिरोध के मक्का पर विजय को कहते हैं।"
    },
    {
        question: "इस्लाम में 'अह्ल-ए-बैत' (Ahl al-Bayt) का क्या अर्थ है?",
        answers: [
            { text: "मस्जिद के लोग", correct: false },
            { text: "विद्वानों का समूह", correct: false },
            { text: "पैगंबर मुहम्मद का परिवार", correct: true },
            { text: "मक्का के निवासी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अह्ल-ए-बैत' का अर्थ है 'घर के लोग', जो पैगंबर मुहम्मद के परिवार, विशेषकर उनकी बेटी फातिमा और उनके पति अली को संदर्भित करता है।"
    },
    {
        question: "'अब्बासी खिलाफत' के तहत 'अल-मामून' ने किस शहर में 'ज्ञान का घर' (House of Wisdom) की स्थापना की?",
        answers: [
            { text: "दमिश्क", correct: false },
            { text: "काहिरा", correct: false },
            { text: "बगदाद", correct: true },
            { text: "कॉर्डोबा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैत-उल-हिकमा (House of Wisdom) बगदाद में स्थापित हुआ था, जो अब्बासी खिलाफत की राजधानी थी।"
    },
    {
        question: "'मुआविया' किस खिलाफत के संस्थापक थे?",
        answers: [
            { text: "राशिदून खिलाफत", correct: false },
            { text: "उमय्यद खिलाफत", correct: true },
            { text: "अब्बासी खिलाफत", correct: false },
            { text: "उस्मानी खिलाफत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुआविया ने चौथे खलीफा अली की मृत्यु के बाद उमय्यद खिलाफत की स्थापना की, जिसने खिलाफत को वंशानुगत बना दिया।"
    },
    {
        question: "'हज' यात्रा के दौरान कौन-सा अनुष्ठान किया जाता है जिसमें तीर्थयात्री 'सफा' और 'मरवा' नामक दो पहाड़ियों के बीच दौड़ते हैं?",
        answers: [
            { text: "तवाफ", correct: false },
            { text: "सई", correct: true },
            { text: "वुकुफ", correct: false },
            { text: "मुज़दलिफा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सई' वह अनुष्ठान है जिसमें तीर्थयात्री हज़रत हाजरा की अपने बेटे इस्माइल के लिए पानी खोजने की कोशिश की याद में सफा और मरवा पहाड़ियों के बीच सात बार दौड़ते हैं।"
    },
    {
        question: "'उमर इब्न अल-खत्ताब' किस खिलाफत के दूसरे खलीफा थे?",
        answers: [
            { text: "उमय्यद खिलाफत", correct: false },
            { text: "अब्बासी खिलाफत", correct: false },
            { text: "राशिदून खिलाफत", correct: true },
            { text: "उस्मानी खिलाफत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उमर इब्न अल-खत्ताब अबू बक्र के बाद दूसरे खलीफा थे और उन्होंने राशिदून खिलाफत को आगे बढ़ाया।"
    },
    {
        question: "'सूफीवाद' का कौन-सा संप्रदाय भारत में 'बख्तियार काकी' और 'निजामुद्दीन औलिया' जैसे संतों से जुड़ा है?",
        answers: [
            { text: "कादरी", correct: false },
            { text: "सुहरावर्दी", correct: false },
            { text: "चिश्ती", correct: true },
            { text: "नक्शबंदी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुतुबुद्दीन बख्तियार काकी और निजामुद्दीन औलिया दोनों चिश्ती संप्रदाय के प्रमुख संत थे।"
    },
    {
        question: "'हदीस' क्या है?",
        answers: [
            { text: "कुरान का एक अध्याय", correct: false },
            { text: "पैगंबर मुहम्मद के कथनों और कार्यों का संग्रह", correct: true },
            { text: "इस्लामी कानून की एक शाखा", correct: false },
            { text: "एक प्रकार की प्रार्थना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हदीस पैगंबर मुहम्मद के कथनों, कार्यों, और अनुमोदनों का रिकॉर्ड है, जो कुरान के बाद शरीयत का दूसरा सबसे महत्वपूर्ण स्रोत है।"
    },
    {
        question: "इस्लाम में 'अल्लाह' के 99 नामों को क्या कहते हैं?",
        answers: [
            { text: "शहादा", correct: false },
            { text: "अस्मा-उल-हुस्ना", correct: true },
            { text: "कुरान", correct: false },
            { text: "फिक़ह", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अस्मा-उल-हुस्ना' का अर्थ है 'सबसे सुंदर नाम', जो अल्लाह के 99 नामों और गुणों को संदर्भित करता है।"
    },
    {
        question: "'इस्लामी कला' में किस चीज का विशेष महत्व है?",
        answers: [
            { text: "मानव आकृतियाँ", correct: false },
            { text: "पशु आकृतियाँ", correct: false },
            { text: "सुलेख और ज्यामितीय पैटर्न", correct: true },
            { text: "संगीत वाद्ययंत्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूर्ति पूजा के निषेध के कारण इस्लामी कला में सुलेख (कैलीग्राफी) और ज्यामितीय पैटर्न का बहुत महत्व है।"
    },
    {
        question: "'अल-मावरदी' किस क्षेत्र से संबंधित एक प्रमुख इस्लामी विद्वान थे?",
        answers: [
            { text: "दर्शन", correct: false },
            { text: "राजनीति विज्ञान और कानून", correct: true },
            { text: "खगोल विज्ञान", correct: false },
            { text: "चिकित्सा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-मावरदी 11वीं सदी के एक प्रभावशाली इस्लामी न्यायविद् और राजनीतिज्ञ थे, जिन्हें इस्लामी सरकार और प्रशासन के सिद्धांतों पर उनकी रचनाओं के लिए जाना जाता है।"
    },
    {
        question: "'ईदुल फितर' का त्योहार किस बात का प्रतीक है?",
        answers: [
            { text: "हज का समापन", correct: false },
            { text: "उपवास के महीने का समापन", correct: true },
            { text: "पैगंबर मुहम्मद का जन्म", correct: false },
            { text: "नए इस्लामी वर्ष की शुरुआत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईदुल फितर रमज़ान के महीने में उपवास की समाप्ति के बाद मनाया जाता है।"
    },
    {
        question: "इस्लाम में 'जन्नत' का क्या अर्थ है?",
        answers: [
            { text: "नर्क", correct: false },
            { text: "स्वर्ग", correct: true },
            { text: "पवित्र स्थान", correct: false },
            { text: "प्रार्थना का स्थान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जन्नत' इस्लाम में स्वर्ग को कहते हैं।"
    },
    {
        question: "'मस्जिद-ए-अक्सा' (Al-Aqsa Mosque) कहाँ स्थित है?",
        answers: [
            { text: "मक्का", correct: false },
            { text: "मदीना", correct: false },
            { text: "यरूशलम", correct: true },
            { text: "इस्तांबुल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-अक्सा मस्जिद यरूशलम में स्थित है।"
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