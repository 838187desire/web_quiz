const questions = [
    {
        topHeading: "इस्लाम धर्म पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.36)"
    },
    {
        question: "'सूफीवाद' में 'सिलसिला' शब्द का क्या अर्थ है?",
        answers: [
            { text: "एक प्रकार की प्रार्थना", correct: false },
            { text: "सूफी संतों की वंशावली", correct: true },
            { text: "एक धार्मिक पुस्तक", correct: false },
            { text: "सूफी संगीत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सिलसिला' सूफीवाद में एक आध्यात्मिक परंपरा या वंशावली को संदर्भित करता है, जो गुरु और शिष्य के माध्यम से एक पीढ़ी से दूसरी पीढ़ी तक चलती है।"
    },
    {
        question: "'कुरान' को अंतिम रूप से किस खलीफा के शासनकाल में एक पुस्तक के रूप में संकलित किया गया?",
        answers: [
            { text: "अबू बक्र", correct: false },
            { text: "उमर", correct: false },
            { text: "उस्मान", correct: true },
            { text: "अली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तीसरे खलीफा उस्मान के शासनकाल में कुरान को एक ही, मानकीकृत और प्रामाणिक पुस्तक के रूप में संकलित किया गया, जिससे विभिन्न पाठों के बीच मतभेदों को दूर किया जा सके।"
    },
    {
        question: "'अंकारा का युद्ध' (Battle of Ankara) किसके बीच हुआ था?",
        answers: [
            { text: "तैमूर लंग और उमय्यद साम्राज्य", correct: false },
            { text: "तैमूर लंग और उस्मानी साम्राज्य", correct: true },
            { text: "मंगोल और अब्बासी साम्राज्य", correct: false },
            { text: "क्रूसेडर और फातिमी साम्राज्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1402 ईस्वी में हुए इस युद्ध में तैमूर लंग ने उस्मानी सुल्तान बायजीद प्रथम को हराया था।"
    },
    {
        question: "'इस्लाम' में 'तवाफ' का क्या अर्थ है?",
        answers: [
            { text: "एक पहाड़ी के बीच दौड़ना", correct: false },
            { text: "काबा के चारों ओर सात बार परिक्रमा करना", correct: true },
            { text: "शैतान को पत्थर मारना", correct: false },
            { text: "हज के दौरान उपवास करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तवाफ' हज और उमरा का एक महत्वपूर्ण अनुष्ठान है, जिसमें मुस्लिम तीर्थयात्री मक्का में काबा के चारों ओर सात बार परिक्रमा करते हैं।"
    },
    {
        question: "पैगंबर मुहम्मद की किस पत्नी को 'उम्म-अल-मुमिनीन' (मोमिनों की माँ) कहा जाता है?",
        answers: [
            { text: "फातिमा", correct: false },
            { text: "आयशा", correct: true },
            { text: "खदीजा", correct: false },
            { text: "जैनब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयशा पैगंबर मुहम्मद की सबसे प्रसिद्ध पत्नियों में से एक थीं और इस्लामी इतिहास में एक महत्वपूर्ण विद्वान और हदीस की संरक्षक मानी जाती हैं।"
    },
    {
        question: "'अल-अंदलूस' (Al-Andalus) किस क्षेत्र का इस्लामी नाम है?",
        answers: [
            { text: "तुर्की", correct: false },
            { text: "स्पेन", correct: true },
            { text: "मिस्र", correct: false },
            { text: "उत्तरी अफ्रीका", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अल-अंदलूस' मध्ययुगीन काल में इबेरियन प्रायद्वीप (आधुनिक स्पेन और पुर्तगाल) का इस्लामी नाम था, जिस पर 8वीं से 15वीं शताब्दी तक मुसलमानों का शासन रहा।"
    },
    {
        question: "'जकात' का भुगतान करना इस्लाम के किस स्तंभ का हिस्सा है?",
        answers: [
            { text: "पहला स्तंभ (शहादा)", correct: false },
            { text: "दूसरा स्तंभ (सलात)", correct: false },
            { text: "तीसरा स्तंभ (जकात)", correct: true },
            { text: "चौथा स्तंभ (सौम)", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जकात इस्लाम का तीसरा स्तंभ है, जिसमें सक्षम मुसलमानों को अपनी संपत्ति का एक निर्धारित प्रतिशत गरीबों और जरूरतमंदों को दान करना होता है।"
    },
    {
        question: "'सूफीवाद' में 'सम' (Sama) का क्या अर्थ है?",
        answers: [
            { text: "सामूहिक प्रार्थना", correct: false },
            { text: "आध्यात्मिक संगीत और नृत्य", correct: true },
            { text: "कुरान का अध्ययन", correct: false },
            { text: "उपवास", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सम' सूफीवाद में एक अनुष्ठान है, जिसमें रहस्यवादी अनुभव को प्राप्त करने के लिए संगीत, कविता और नृत्य का उपयोग किया जाता है।"
    },
    {
        question: "'मदीना' शहर का नाम किसके आगमन के बाद बदल गया?",
        answers: [
            { text: "अली", correct: false },
            { text: "अबू बक्र", correct: false },
            { text: "पैगंबर मुहम्मद", correct: true },
            { text: "उमर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैगंबर मुहम्मद के 622 ईस्वी में याथ्रिब (पुराना नाम) पहुंचने के बाद शहर का नाम बदलकर 'मदीना-अल-नबी' (पैगंबर का शहर) या संक्षेप में 'मदीना' रखा गया।"
    },
    {
        question: "'खलीफा' पद को वंशानुगत किसने बनाया?",
        answers: [
            { text: "अबू बक्र", correct: false },
            { text: "उमर", correct: false },
            { text: "अली", correct: false },
            { text: "मुआविया", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उमय्यद खिलाफत के संस्थापक मुआविया ने खिलाफत के सिद्धांत को बदल दिया और इसे एक वंशानुगत राजशाही बना दिया, जो राशिदून खिलाफत की लोकतांत्रिक पद्धति से अलग था।"
    },
    {
        question: "'इमाम गजाली' का संबंध किस क्षेत्र से था?",
        answers: [
            { text: "खगोल विज्ञान", correct: false },
            { text: "गणित", correct: false },
            { text: "दर्शन और धर्मशास्त्र", correct: true },
            { text: "चिकित्सा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इमाम गजाली (Al-Ghazali) 11वीं सदी के एक प्रमुख इस्लामी विद्वान थे, जिन्होंने दर्शन और धर्मशास्त्र को एकीकृत करने का प्रयास किया था।"
    },
    {
        question: "'मुहर्रम' का महीना किस घटना के लिए महत्वपूर्ण है?",
        answers: [
            { text: "हज", correct: false },
            { text: "इमाम हुसैन की शहादत", correct: true },
            { text: "पैगंबर मुहम्मद का जन्म", correct: false },
            { text: "कुरान का अवतरण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहर्रम के महीने में, विशेषकर अशूरा (10वां दिन) को, कर्बला में इमाम हुसैन की शहादत की याद में शोक मनाया जाता है।"
    },
    {
        question: "'सूफीवाद' की स्थापना का उद्देश्य क्या था?",
        answers: [
            { text: "राजनीतिक शक्ति प्राप्त करना", correct: false },
            { text: "कुरान की नई व्याख्या प्रस्तुत करना", correct: false },
            { text: "इस्लाम में आध्यात्मिकता को पुनर्जीवित करना", correct: true },
            { text: "इस्लामी कानून में सुधार करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूफीवाद का उद्देश्य इस्लाम के औपचारिक नियमों के बजाय व्यक्तिगत भक्ति, प्रेम और ईश्वर के साथ सीधे संबंध पर ध्यान केंद्रित करके आध्यात्मिकता को पुनर्जीवित करना था।"
    },
    {
        question: "'फातिमी खिलाफत' किस संप्रदाय से संबंधित थी?",
        answers: [
            { text: "सुन्नी", correct: false },
            { text: "शिया", correct: true },
            { text: "खारिजी", correct: false },
            { text: "सूफी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फातिमी खिलाफत (909-1171 ईस्वी) इस्माइली शिया संप्रदाय से संबंधित थी, जिसकी राजधानी काहिरा (मिस्र) थी।"
    },
    {
        question: "'मुगल साम्राज्य' के संस्थापक कौन थे?",
        answers: [
            { text: "अकबर", correct: false },
            { text: "बाबर", correct: true },
            { text: "हुमायूँ", correct: false },
            { text: "औरंगजेब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर ने 1526 में पानीपत की पहली लड़ाई जीतकर भारत में मुगल साम्राज्य की स्थापना की थी।"
    },
    {
        question: "'इमाम' शब्द का क्या अर्थ है?",
        answers: [
            { text: "एक राजा", correct: false },
            { text: "एक विद्वान", correct: false },
            { text: "नमाज का नेतृत्व करने वाला", correct: true },
            { text: "एक पैगंबर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इमाम' वह व्यक्ति होता है जो सामूहिक नमाज (प्रार्थना) का नेतृत्व करता है।"
    },
    {
        question: "'अंकारा' के युद्ध में, किस शासक ने उस्मानी सुल्तान को हराया था?",
        answers: [
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "चंगेज खान", correct: false },
            { text: "तैमूर लंग", correct: true },
            { text: "महमूद गजनवी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैमूर लंग ने 1402 ईस्वी में अंकारा के युद्ध में उस्मानी सुल्तान बायजीद प्रथम को हराया, जिससे उस्मानी साम्राज्य कमजोर हो गया था।"
    },
    {
        question: "'इस्लामी स्वर्ण युग' का संबंध किस काल से था?",
        answers: [
            { text: "5वीं-7वीं सदी", correct: false },
            { text: "8वीं-13वीं सदी", correct: true },
            { text: "14वीं-16वीं सदी", correct: false },
            { text: "17वीं-19वीं सदी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 8वीं से 13वीं सदी तक के काल को 'इस्लामी स्वर्ण युग' कहा जाता है, जिसमें अब्बासी खिलाफत के दौरान विज्ञान, कला और संस्कृति का अभूतपूर्व विकास हुआ।"
    },
    {
        question: "'सुन्नी' और 'शिया' के बीच के विभाजन का मूल कारण क्या था?",
        answers: [
            { text: "आर्थिक असमानता", correct: false },
            { text: "धार्मिक ग्रंथों की व्याख्या", correct: false },
            { text: "पैगंबर मुहम्मद के बाद राजनीतिक नेतृत्व", correct: true },
            { text: "सामाजिक वर्ग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों संप्रदायों के बीच का मुख्य मतभेद यह था कि पैगंबर मुहम्मद के निधन के बाद इस्लामी समुदाय का नेतृत्व किसे करना चाहिए।"
    },
    {
        question: "'हज' यात्रा के दौरान किस पहाड़ पर तीर्थयात्री 'वुकुफ' (Wukuf) नामक अनुष्ठान करते हैं?",
        answers: [
            { text: "माउंट सफा", correct: false },
            { text: "माउंट मरवा", correct: false },
            { text: "माउंट नूर", correct: false },
            { text: "माउंट अराफात", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हज का सबसे महत्वपूर्ण अनुष्ठान 'वुकुफ' है, जिसमें तीर्थयात्री माउंट अराफात पर एक दिन के लिए रुकते हैं, जहाँ वे अल्लाह से प्रार्थना करते हैं।"
    },
    {
        question: "'इब्न-अल-हयथम' (Alhazen) को किस विज्ञान का जनक माना जाता है?",
        answers: [
            { text: "खगोल विज्ञान", correct: false },
            { text: "प्रकाशिकी", correct: true },
            { text: "रसायन विज्ञान", correct: false },
            { text: "भूगोल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्न-अल-हयथम 10वीं सदी के एक प्रसिद्ध गणितज्ञ और भौतिक विज्ञानी थे, जिन्हें प्रकाशिकी (Optics) के क्षेत्र में उनके योगदान के लिए जाना जाता है।"
    },
    {
        question: "'मस्जिद-ए-अक्सा' किस शहर में है?",
        answers: [
            { text: "मक्का", correct: false },
            { text: "मदीना", correct: false },
            { text: "यरूशलम", correct: true },
            { text: "दमिश्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-अक्सा मस्जिद यरूशलम के पुराने शहर में स्थित है और इस्लाम में तीसरा सबसे पवित्र स्थल है।"
    },
    {
        question: "'अहमदिया' आंदोलन के संस्थापक कौन थे?",
        answers: [
            { text: "मुहम्मद अली जिन्ना", correct: false },
            { text: "सर सैयद अहमद खान", correct: false },
            { text: "मिर्ज़ा गुलाम अहमद", correct: true },
            { text: "सैयद अहमद बरेलवी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहमदिया आंदोलन की स्थापना 19वीं शताब्दी के अंत में मिर्ज़ा गुलाम अहमद ने की थी।"
    },
    {
        question: "'शिर्क' (Shirk) का क्या अर्थ है?",
        answers: [
            { text: "दान देना", correct: false },
            { text: "बहुदेववाद", correct: true },
            { text: "प्रार्थना करना", correct: false },
            { text: "उपवास करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिर्क' का अर्थ है 'साझेदारी' या 'सहभागिता', और यह इस्लाम में सबसे बड़ा पाप माना जाता है, जिसमें अल्लाह के साथ किसी और को पूजनीय माना जाता है।"
    },
    {
        question: "'अल-अंदलूस' के तहत स्पेन में किस प्रमुख शहर को ज्ञान और संस्कृति का केंद्र माना जाता था? A) ग्रेनाडा B) कॉर्डोबा C) सेविले D) टोलेडो सही उत्तर: B) कॉर्डोबा व्याख्या: कॉर्डोबा अल-अंदलूस की राजधानी था और इस्लामी शासन के तहत यह ज्ञान, कला और विज्ञान का एक प्रमुख केंद्र बन गया था।"
    },
    {
        question: "'उस्मानी साम्राज्य' के संस्थापक कौन थे?",
        answers: [
            { text: "उस्मान गाजी", correct: true },
            { text: "मोहम्मद द्वितीय", correct: false },
            { text: "सुलेमान महान", correct: false },
            { text: "औरंगजेब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस्मानी (ऑटोमन) साम्राज्य की स्थापना 13वीं सदी के अंत में उस्मान गाजी ने की थी।"
    },
    {
        question: "'हुरूफ' (Huruf) क्या है?",
        answers: [
            { text: "एक प्रकार की प्रार्थना", correct: false },
            { text: "इस्लामी सुलेख (Calligraphy) में प्रयोग होने वाले वर्ण", correct: true },
            { text: "एक धार्मिक पुस्तक", correct: false },
            { text: "एक सूफ़ी अनुष्ठान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हुरूफ' अरबी भाषा के वर्ण हैं, जिनका प्रयोग इस्लामी कला और वास्तुकला में सुंदर सुलेख (कैलीग्राफी) बनाने के लिए किया जाता है।"
    },
    {
        question: "'अल-मावरदी' किस क्षेत्र से संबंधित एक प्रमुख इस्लामी विद्वान थे?",
        answers: [
            { text: "खगोल विज्ञान", correct: false },
            { text: "राजनीति विज्ञान और न्यायशास्त्र", correct: true },
            { text: "दर्शन", correct: false },
            { text: "चिकित्सा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-मावरदी 11वीं सदी के एक प्रभावशाली इस्लामी न्यायविद् और राजनीतिज्ञ थे, जिन्हें इस्लामी सरकार के सिद्धांतों पर उनकी रचनाओं के लिए जाना जाता है।"
    },
    {
        question: "'मुआविया' किस खिलाफत के संस्थापक थे?",
        answers: [
            { text: "राशिदून खिलाफत", correct: false },
            { text: "उमय्यद खिलाफत", correct: true },
            { text: "अब्बासी खिलाफत", correct: false },
            { text: "उस्मानी खिलाफत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुआविया ने चौथे खलीफा अली की मृत्यु के बाद 661 ईस्वी में उमय्यद खिलाफत की स्थापना की थी।"
    },
    {
        question: "'शिया' और 'सुन्नी' के बीच किस ऐतिहासिक घटना को लेकर सबसे गहरा विभाजन हुआ?",
        answers: [
            { text: "बद्र का युद्ध", correct: false },
            { text: "कर्बला का युद्ध", correct: true },
            { text: "खंदक का युद्ध", correct: false },
            { text: "हुनैना का युद्ध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 680 ईस्वी में कर्बला के युद्ध में इमाम हुसैन की शहादत ने शिया और सुन्नी के बीच के विभाजन को स्थायी बना दिया।"
    },
    {
        question: "'दमिश्क' किस खिलाफत की राजधानी था?",
        answers: [
            { text: "राशिदून खिलाफत", correct: false },
            { text: "उमय्यद खिलाफत", correct: true },
            { text: "अब्बासी खिलाफत", correct: false },
            { text: "फातिमी खिलाफत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उमय्यद खिलाफत (661-750 ईस्वी) की राजधानी दमिश्क (सीरिया) थी।"
    },
    {
        question: "'मुहर्रम' का महीना किस घटना के लिए महत्वपूर्ण है?",
        answers: [
            { text: "हज", correct: false },
            { text: "इमाम हुसैन की शहादत", correct: true },
            { text: "पैगंबर मुहम्मद का जन्म", correct: false },
            { text: "कुरान का अवतरण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहर्रम का महीना कर्बला की लड़ाई में पैगंबर मुहम्मद के नवासे इमाम हुसैन की शहादत की याद दिलाता है।"
    },
    {
        question: "'सूफीवाद' का क्या अर्थ है?",
        answers: [
            { text: "इस्लामी कानून का कड़ाई से पालन", correct: false },
            { text: "ईश्वर की खोज में रहस्यवादी और आध्यात्मिक साधना", correct: true },
            { text: "राजनीतिक सत्ता का विस्तार", correct: false },
            { text: "कुरान का शाब्दिक अर्थ लगाना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूफीवाद इस्लाम का एक रहस्यवादी और आध्यात्मिक पक्ष है जो ईश्वर के साथ सीधे व्यक्तिगत संबंध और प्रेम पर जोर देता है।"
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
        question: "'खलीफा' शब्द का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "पैगंबर", correct: false },
            { text: "ईश्वर", correct: false },
            { text: "उत्तराधिकारी", correct: true },
            { text: "शासक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खलीफा' का अर्थ है 'उत्तराधिकारी' या 'प्रतिनिधि'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पैगंबर मुहम्मद के बाद इस्लामी समुदाय के प्रमुख को दिया गया शीर्षक था।"
    },
    {
        question: "इस्लाम में 'शरीयत' के मुख्य स्रोत क्या हैं?",
        answers: [
            { text: "केवल कुरान", correct: false },
            { text: "कुरान और हदीस", correct: true },
            { text: "केवल हदीस", correct: false },
            { text: "शासक के आदेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शरीयत के दो मुख्य स्रोत कुरान (अल्लाह का प्रत्यक्ष वचन) और हदीस (पैगंबर मुहम्मद के कथन और कार्य) हैं।"
    },
    {
        question: "'मस्जिद' शब्द का क्या अर्थ है?",
        answers: [
            { text: "सभा स्थल", correct: false },
            { text: "प्रार्थना स्थल", correct: true },
            { text: "शिक्षण स्थल", correct: false },
            { text: "न्याय का स्थल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मस्जिद' शब्द का शाब्दिक अर्थ है 'सजदा करने का स्थान', यानी वह स्थान जहाँ झुककर अल्लाह की इबादत की जाती है।"
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
        question: "'हज' के दौरान तीर्थयात्री किस रंग के कपड़े पहनते हैं?",
        answers: [
            { text: "काला", correct: false },
            { text: "सफेद", correct: true },
            { text: "हरा", correct: false },
            { text: "लाल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हज के दौरान, पुरुष तीर्थयात्री 'इहराम' नामक सफेद और बिना सिला हुआ कपड़ा पहनते हैं, जो सभी को एक समान दर्जा देता है।"
    },
    {
        question: "'इस्लाम' में 'तौहीद' (Tawhid) का क्या अर्थ है?",
        answers: [
            { text: "पैगंबरों में विश्वास", correct: false },
            { text: "ईश्वर की एकता", correct: true },
            { text: "परलोक में विश्वास", correct: false },
            { text: "स्वर्ग और नरक का सिद्धांत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तौहीद' इस्लाम का सबसे मूल सिद्धांत है, जिसका अर्थ है कि अल्लाह एकमात्र, अविभाज्य, और अद्वितीय ईश्वर है।"
    },
    {
        question: "'अब्बासी खिलाफत' की राजधानी क्या थी?",
        answers: [
            { text: "दमिश्क", correct: false },
            { text: "बगदाद", correct: true },
            { text: "काहिरा", correct: false },
            { text: "कॉर्डोबा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब्बासी खिलाफत के दौरान, बगदाद कला, विज्ञान और संस्कृति का एक महत्वपूर्ण केंद्र बन गया था।"
    },
    {
        question: "'रमज़ान' के महीने का क्या महत्व है?",
        answers: [
            { text: "हज यात्रा का महीना", correct: false },
            { text: "उपवास (रोजा) रखने का महीना", correct: true },
            { text: "पैगंबर मुहम्मद का जन्म का महीना", correct: false },
            { text: "ज़कात देने का महीना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रमज़ान इस्लामी कैलेंडर का नौवां महीना है, जिसे उपवास और आत्म-नियंत्रण के लिए पवित्र माना जाता है।"
    },
    {
        question: "'काबा' कहाँ स्थित है?",
        answers: [
            { text: "यरूशलम", correct: false },
            { text: "मदीना", correct: false },
            { text: "मक्का", correct: true },
            { text: "बगदाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काबा, जिसे 'अल्लाह का घर' भी कहा जाता है, एक घनाकार इमारत है जो मक्का में स्थित है और इस्लाम का सबसे पवित्र स्थल है।"
    },
    {
        question: "'ईदुल फितर' का त्योहार किस घटना का प्रतीक है?",
        answers: [
            { text: "हज का समापन", correct: false },
            { text: "रमज़ान के उपवास का समापन", correct: true },
            { text: "पैगंबर मुहम्मद का जन्म", correct: false },
            { text: "नए इस्लामी वर्ष की शुरुआत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईदुल फितर, जिसे 'मीठी ईद' भी कहते हैं, रमज़ान के पवित्र महीने के उपवास की समाप्ति के बाद मनाया जाता है।"
    },
    {
        question: "पैगंबर मुहम्मद के बाद इस्लाम के पहले खलीफा कौन थे?",
        answers: [
            { text: "अली इब्न अबी तालिब", correct: false },
            { text: "उमर इब्न अल-खत्ताब", correct: false },
            { text: "अबू बक्र", correct: true },
            { text: "उस्मान इब्न अफ्फान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैगंबर मुहम्मद की मृत्यु के बाद, अबू बक्र को इस्लाम का पहला खलीफा (उत्तराधिकारी) चुना गया था।"
    },
    {
        question: "'शिया' और 'सुन्नी' इस्लाम के दो प्रमुख संप्रदाय किस विवाद से उत्पन्न हुए?",
        answers: [
            { text: "कुरान की व्याख्या", correct: false },
            { text: "नमाज की विधि", correct: false },
            { text: "पैगंबर के बाद के उत्तराधिकार का मुद्दा", correct: true },
            { text: "ज़कात का वितरण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिया और सुन्नी संप्रदायों के बीच मतभेद पैगंबर मुहम्मद की मृत्यु के बाद नेतृत्व के उत्तराधिकार को लेकर शुरू हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> सुन्नी अबू बक्र को मानते हैं, जबकि शिया अली को।"
    },
    {
        question: "'जakat' का क्या अर्थ है?",
        answers: [
            { text: "हज", correct: false },
            { text: "दान", correct: true },
            { text: "उपवास", correct: false },
            { text: "प्रार्थना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जकात इस्लाम के पाँच स्तंभों में से एक है, जिसमें प्रत्येक धनी मुसलमान को अपनी संपत्ति का एक निर्धारित हिस्सा गरीबों और जरूरतमंदों को दान करना होता है।"
    },
    {
        question: "'हिजरा' का क्या अर्थ है?",
        answers: [
            { text: "युद्ध", correct: false },
            { text: "हज यात्रा", correct: false },
            { text: "पैगंबर मुहम्मद का मक्का से मदीना प्रवास", correct: true },
            { text: "रोजा रखना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिजरा' 622 ईस्वी में पैगंबर मुहम्मद और उनके अनुयायियों के मक्का से मदीना (उस समय याथ्रिब कहा जाता था) के प्रवास को कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी घटना से इस्लामी कैलेंडर की शुरुआत हुई।"
    },
    {
        question: "इस्लाम का सबसे पवित्र ग्रंथ कौन-सा है?",
        answers: [
            { text: "बाइबिल", correct: false },
            { text: "कुरान", correct: true },
            { text: "वेद", correct: false },
            { text: "तोराह", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरान इस्लाम का सबसे पवित्र ग्रंथ है, जिसे मुसलमानों का मानना है कि अल्लाह ने पैगंबर मुहम्मद पर जिब्राइल (Gabriel) नामक फरिश्ते के माध्यम से प्रकट किया था।"
    },
    {
        question: "इस्लाम के पाँच स्तंभों (Five Pillars of Islam) में से कौन-सा पहला स्तंभ है?",
        answers: [
            { text: "हज (Hajj)", correct: false },
            { text: "शहादा (Shahada)", correct: true },
            { text: "सलात (Salat)", correct: false },
            { text: "ज़कात (Zakat)", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शहादा पहला और सबसे महत्वपूर्ण स्तंभ है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विश्वास की घोषणा है कि 'अल्लाह के सिवा कोई उपास्य नहीं है, और मुहम्मद अल्लाह के रसूल हैं।'।"
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