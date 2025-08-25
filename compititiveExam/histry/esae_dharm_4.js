const questions = [
    {
        topHeading: "ईसाई धर्म पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.44)"
    },
    {
        question: "बाइबिल के 'पुराने नियम' के अनुसार, किस व्यक्ति ने यहूदी लोगों को मिस्र की गुलामी से बाहर निकाला था?",
        answers: shuffle([
            { text: "अब्राहम", correct: false },
            { text: "दाऊद", correct: false },
            { text: "मूसा", correct: true },
            { text: "योना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूसा ने ईश्वर के मार्गदर्शन में मिस्र से यहूदियों को बाहर निकाला था और उन्हें दस आज्ञाएँ दी थीं।"
    },
    {
        question: "बाइबिल के अनुसार, ईश्वर द्वारा बनाया गया पहला पुरुष कौन था?",
        answers: shuffle([
            { text: "आदम", correct: true },
            { text: "नूह", correct: false },
            { text: "अब्राहम", correct: false },
            { text: "मूसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल की उत्पत्ति की पुस्तक के अनुसार, ईश्वर ने आदम को पृथ्वी की मिट्टी से बनाया था और उसे जीवन दिया था।"
    },
    {
        question: "बाइबिल के अनुसार, पहली महिला कौन थी?",
        answers: shuffle([
            { text: "सारा", correct: false },
            { text: "मरियम", correct: false },
            { text: "हव्वा", correct: true },
            { text: "रूत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हव्वा को ईश्वर ने आदम की पसली से बनाया था ताकि वह उसकी साथी बने।"
    },
    {
        question: "ईसाई धर्म में 'प्रायश्चित' (Atonement) का क्या अर्थ है?",
        answers: shuffle([
            { text: "पापों के लिए क्षमा माँगना", correct: false },
            { text: "जीसस की मृत्यु के माध्यम से ईश्वर और मनुष्य के बीच सुलह", correct: true },
            { text: "अच्छे कर्म करना", correct: false },
            { text: "उपवास रखना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रायश्चित वह धार्मिक अवधारणा है जिसके अनुसार जीसस की मृत्यु और पुनरुत्थान के कारण मनुष्य के पापों को क्षमा कर दिया गया है और वह ईश्वर से फिर से जुड़ सकता है।"
    },
    {
        question: "जीसस की 'बीज बोने वाले' की दृष्टांत कथा में चट्टानी जमीन किसका प्रतिनिधित्व करती है?",
        answers: shuffle([
            { text: "वह जो वचन को सुनता है और तुरंत स्वीकार कर लेता है, लेकिन जड़ न होने के कारण जल्दी गिर जाता है।", correct: true },
            { text: "वह जो वचन को सुनता है और उसे अच्छे मन से रखता है।", correct: false },
            { text: "वह जो वचन को सुनता है लेकिन चिंताओं के कारण उसका फल नहीं होता।", correct: false },
            { text: "वह जो वचन को कभी नहीं सुनता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस दृष्टांत में, चट्टानी जमीन उन लोगों को दर्शाती है जो शुरुआत में विश्वास करते हैं, लेकिन मुसीबत आने पर अपने विश्वास से हट जाते हैं।"
    },
    {
        question: "कौन-सा रोमन सम्राट ईसाई धर्म को रोमन साम्राज्य का राजकीय धर्म बनाने के लिए जाना जाता है?",
        answers: shuffle([
            { text: "नीरो", correct: false },
            { text: "डायोक्लेशियन", correct: false },
            { text: "ऑगस्टस", correct: false },
            { text: "थियोडोसियस I", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सम्राट थियोडोसियस I ने 380 ईस्वी में 'थेसालोनिका का आदेश' जारी करके ईसाई धर्म को रोमन साम्राज्य का राजकीय धर्म घोषित किया था।"
    },
    {
        question: "पहला ईसाई शहीद कौन था जिसे पत्थर मारकर मार डाला गया था?",
        answers: shuffle([
            { text: "संत पीटर", correct: false },
            { text: "संत पॉल", correct: false },
            { text: "संत स्टीफन", correct: true },
            { text: "संत जॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल की 'प्रेरितों के कार्य' नामक पुस्तक के अनुसार, संत स्टीफन शुरुआती चर्च के पहले शहीद थे जिन्हें यीशु के बारे में गवाही देने के लिए पत्थर मारकर मार डाला गया था।"
    },
    {
        question: "बाइबिल के 'प्रकाशितवाक्य' (Revelation) नामक पुस्तक में वर्णित 'नई पृथ्वी और नए आकाश' का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक नई भौगोलिक खोज", correct: false },
            { text: "पृथ्वी का पुनर्निर्माण", correct: false },
            { text: "अनंत जीवन की अंतिम स्थिति", correct: true },
            { text: "एक नया राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशितवाक्य की पुस्तक में 'नई पृथ्वी और नए आकाश' का वर्णन ईश्वर के लोगों के लिए अंतिम और शाश्वत निवास स्थान के रूप में किया गया है।"
    },
    {
        question: "किस घटना के कारण इंग्लैंड का चर्च (Church of England) रोमन कैथोलिक चर्च से अलग हो गया?",
        answers: shuffle([
            { text: "प्रोटेस्टेंट सुधार", correct: false },
            { text: "राजा हेनरी VIII का विवाह", correct: true },
            { text: "द ग्रेट स्किज़म", correct: false },
            { text: "धर्मयुद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा हेनरी VIII अपनी शादी को रद्द कराना चाहते थे, और जब पोप ने इनकार कर दिया, तो उन्होंने इंग्लैंड के चर्च को रोमन कैथोलिक चर्च से अलग कर दिया।"
    },
    {
        question: "'एकल ईश्वरवाद' (Monotheism) क्या है?",
        answers: shuffle([
            { text: "कई देवताओं में विश्वास", correct: false },
            { text: "एक ही, सर्वशक्तिमान ईश्वर में विश्वास", correct: true },
            { text: "केवल संतों में विश्वास", correct: false },
            { text: "ईश्वर में विश्वास न करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईसाई धर्म, यहूदी धर्म और इस्लाम की तरह, एक एकेश्वरवादी धर्म है, जिसका अर्थ है कि वे एक ही ईश्वर में विश्वास करते हैं।"
    },
    {
        question: "प्रोटेस्टेंट बाइबिल में कुल कितनी पुस्तकें हैं?",
        answers: shuffle([
            { text: "66", correct: true },
            { text: "73", correct: false },
            { text: "80", correct: false },
            { text: "46", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटेस्टेंट बाइबिल में 66 पुस्तकें हैं: 39 पुराने नियम में और 27 नए नियम में।"
    },
    {
        question: "कैथोलिक बाइबिल में कुल कितनी पुस्तकें हैं?",
        answers: shuffle([
            { text: "66", correct: false },
            { text: "73", correct: true },
            { text: "80", correct: false },
            { text: "46", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैथोलिक बाइबिल में 73 पुस्तकें हैं, जिसमें पुराने नियम में कुछ अतिरिक्त पुस्तकें भी शामिल हैं।"
    },
    {
        question: "'मेल-मिलाप' (Reconciliation) का संस्कार क्या है?",
        answers: shuffle([
            { text: "जीसस के पुनरुत्थान को याद करना।", correct: false },
            { text: "एक पुजारी के सामने पापों को स्वीकार करना और क्षमा प्राप्त करना।", correct: true },
            { text: "एक बीमार व्यक्ति का अभिषेक।", correct: false },
            { text: "विवाह का संस्कार।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेल-मिलाप' के संस्कार में एक व्यक्ति पुजारी के सामने अपने पापों को स्वीकार करता है, और पुजारी ईश्वर की ओर से उसे क्षमा प्रदान करता है।"
    },
    {
        question: "जीसस के शिष्य बनने से पहले मत्ती का पेशा क्या था?",
        answers: shuffle([
            { text: "मछुआरा", correct: false },
            { text: "बढ़ई", correct: false },
            { text: "कर संग्राहक", correct: true },
            { text: "चिकित्सक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मत्ती, जिसे लेवी भी कहा जाता था, एक कर संग्राहक था जिसे जीसस ने अपने शिष्यों में से एक बनने के लिए बुलाया था।"
    },
    {
        question: "'प्रेरितों का पंथ' (Apostles' Creed) किससे शुरू होता है?",
        answers: shuffle([
            { text: "पिता हमारा", correct: false },
            { text: "मैं पिता, पुत्र और पवित्र आत्मा पर विश्वास करता हूँ।", correct: true },
            { text: "महिमा हो पिता को", correct: false },
            { text: "ईश्वर ही महान है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रेरितों का पंथ' का पहला वाक्य है: \"मैं ईश्वर, सर्वशक्तिमान पिता, आकाश और पृथ्वी के निर्माता पर विश्वास करता हूँ।\""
    },
    {
        question: "किस घटना को याद करने के लिए 'पाम संडे' मनाया जाता है?",
        answers: shuffle([
            { text: "जीसस का जन्म", correct: false },
            { text: "जीसस का यरूशलेम में प्रवेश", correct: true },
            { text: "जीसस का पुनरुत्थान", correct: false },
            { text: "अंतिम भोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाम संडे' ईस्टर से एक सप्ताह पहले मनाया जाता है, जो जीसस के यरूशलेम में विजयी प्रवेश को याद करता है।"
    },
    {
        question: "पानी के साथ 'बपतिस्मा' क्या दर्शाता है?",
        answers: shuffle([
            { text: "शुद्धता और पापों से मुक्ति", correct: true },
            { text: "मृत्यु", correct: false },
            { text: "जीवन", correct: false },
            { text: "ज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी के साथ बपतिस्मा विश्वास में मृत्यु, पापों का दफन और जीसस के साथ एक नया जीवन शुरू करने का प्रतीक है।"
    },
    {
        question: "जीसस ने 'अंतिम भोज' के दौरान रोटी देते हुए क्या कहा था?",
        answers: shuffle([
            { text: "यह तुम्हारी आत्मा है।", correct: false },
            { text: "यह तुम्हारा उद्धार है।", correct: false },
            { text: "यह मेरा शरीर है।", correct: true },
            { text: "यह तुम्हारा विश्वास है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंतिम भोज' के दौरान जीसस ने रोटी लेते हुए कहा था, \"लो, खाओ; यह मेरा शरीर है।\"<br><br><i class='fa-solid fa-angles-right icon'></i> यह युकेरिस्ट संस्कार का आधार है।"
    },
    {
        question: "'कैथोलिक' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "पवित्र", correct: false },
            { text: "सार्वभौमिक", correct: true },
            { text: "परमेश्वर", correct: false },
            { text: "रोमन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कैथोलिक' शब्द ग्रीक शब्द 'कथोलिको' से आया है, जिसका अर्थ है 'सार्वभौमिक' या 'सभी लोगों के लिए'।"
    },
    {
        question: "'पुराने नियम' में 'यशायाह' की पुस्तक क्या है?",
        answers: shuffle([
            { text: "इतिहास की पुस्तक", correct: false },
            { text: "कानून की पुस्तक", correct: false },
            { text: "भविष्यवाणियों की पुस्तक", correct: true },
            { text: "ज्ञान की पुस्तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यशायाह की पुस्तक एक प्रमुख भविष्यवक्ता यशायाह के उपदेशों का संग्रह है, जिसमें जीसस के आने की कई भविष्यवाणियाँ हैं।"
    },
    {
        question: "जीसस के बारह शिष्यों को 'प्रेरित' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि वे जीसस के मित्र थे।", correct: false },
            { text: "क्योंकि उन्हें उपदेश देने के लिए भेजा गया था।", correct: true },
            { text: "क्योंकि उन्होंने जीसस को धोखा दिया था।", correct: false },
            { text: "क्योंकि वे जीसस के साथ यात्रा करते थे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रेरित' (Apostle) का शाब्दिक अर्थ है 'भेजा गया'।<br><br><i class='fa-solid fa-angles-right icon'></i> जीसस ने उन्हें अपना उपदेश फैलाने और सुसमाचार सुनाने के लिए भेजा था।"
    },
    {
        question: "ईसाई धर्म में 'अंतिम न्याय' (Final Judgment) का क्या अर्थ है?",
        answers: shuffle([
            { text: "जीसस का जन्म", correct: false },
            { text: "जीसस का पुनरुत्थान", correct: false },
            { text: "जीसस का वापस आकर सभी का न्याय करना", correct: true },
            { text: "दुनिया का अंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईसाई धर्म के अनुसार, 'अंतिम न्याय' का दिन वह दिन होगा जब जीसस वापस आकर सभी लोगों के जीवन और कर्मों के आधार पर उनका न्याय करेंगे।"
    },
    {
        question: "'पुराने नियम' में 'भजन संहिता' (Psalms) की पुस्तक का मुख्य लेखक कौन था?",
        answers: shuffle([
            { text: "मूसा", correct: false },
            { text: "दाऊद", correct: true },
            { text: "सुलैमान", correct: false },
            { text: "यशायाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा दाऊद को भजन संहिता की अधिकांश पुस्तकों का लेखक माना जाता है, जो उनकी प्रार्थनाएँ और गीत हैं।"
    },
    {
        question: "जीसस के उपदेशों के अनुसार, 'परमेश्वर के राज्य' (Kingdom of God) का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक भौगोलिक स्थान", correct: false },
            { text: "एक राजनीतिक साम्राज्य", correct: false },
            { text: "वह क्षेत्र जहाँ ईश्वर का शासन है", correct: true },
            { text: "एक नया मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस ने 'परमेश्वर के राज्य' को एक भौतिक स्थान के बजाय एक आध्यात्मिक वास्तविकता के रूप में सिखाया, जहाँ ईश्वर का शासन और इच्छा सर्वोपरि होती है।"
    },
    {
        question: "'द लास्ट सपर' (अंतिम भोज) को किस प्रसिद्ध चित्रकार ने चित्रित किया था?",
        answers: shuffle([
            { text: "माइकलएंजेलो", correct: false },
            { text: "राफेल", correct: false },
            { text: "लियोनार्डो दा विंची", correct: true },
            { text: "डोनाटेलो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लियोनार्डो दा विंची का 'द लास्ट सपर' अंतिम भोज को दर्शाने वाला दुनिया का सबसे प्रसिद्ध चित्र है।"
    },
    {
        question: "बाइबिल के अनुसार, जीसस के जन्म की घोषणा सबसे पहले किसे की गई थी?",
        answers: shuffle([
            { text: "राजा हेरोदेस को", correct: false },
            { text: "तीन ज्योतिषियों को", correct: false },
            { text: "चरवाहों को", correct: true },
            { text: "राजा दाऊद को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के लूका के सुसमाचार के अनुसार, स्वर्गदूतों ने जीसस के जन्म की घोषणा सबसे पहले बेथलहम के पास के चरवाहों को दी थी।"
    },
    {
        question: "कौन-सा शहर शुरुआती ईसाई धर्म का एक महत्वपूर्ण केंद्र बन गया और जहाँ पहली बार जीसस के अनुयायियों को 'ईसाई' (Christian) कहा गया?",
        answers: shuffle([
            { text: "यरूशलेम", correct: false },
            { text: "रोम", correct: false },
            { text: "अंताकिया", correct: true },
            { text: "बेथलहम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के 'प्रेरितों के कार्य' नामक पुस्तक के अनुसार, अंताकिया (Antioch) वह शहर था जहाँ जीसस के अनुयायियों को पहली बार 'ईसाई' कहा गया था।"
    },
    {
        question: "बाइबिल में 'यीशु के अंतिम भोज' को किस संस्कार के रूप में मनाया जाता है?",
        answers: shuffle([
            { text: "बपतिस्मा", correct: false },
            { text: "विवाह", correct: false },
            { text: "युकेरिस्ट (कम्युनियन)", correct: true },
            { text: "पुष्टिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युकेरिस्ट, जिसे कम्युनियन भी कहा जाता है, जीसस के अंतिम भोज की याद में मनाया जाने वाला एक संस्कार है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें रोटी और दाखमधु को जीसस के शरीर और रक्त का प्रतीक माना जाता है।"
    },
    {
        question: "जीसस की 'उड़ाऊ पुत्र' (Prodigal Son) की दृष्टांत कथा का मुख्य संदेश क्या है?",
        answers: shuffle([
            { text: "धन का महत्व", correct: false },
            { text: "ईश्वर की क्षमा और दया", correct: true },
            { text: "आज्ञा का पालन", correct: false },
            { text: "दूसरों की मदद करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उड़ाऊ पुत्र' की दृष्टांत कथा यह सिखाती है कि ईश्वर हमेशा उन लोगों को क्षमा करने और स्वीकार करने के लिए तैयार रहता है जो पश्चात्ताप करते हैं और उसके पास लौट आते हैं।"
    },
    {
        question: "'पुराने नियम' की किस पुस्तक में 'सृष्टि के निर्माण' की कहानी है?",
        answers: shuffle([
            { text: "निर्गमन", correct: false },
            { text: "उत्पत्ति", correct: true },
            { text: "यशायाह", correct: false },
            { text: "भजन संहिता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल की पहली पुस्तक, उत्पत्ति (Genesis), में ईश्वर द्वारा सृष्टि, आदम और हव्वा, और बाढ़ की कहानी का वर्णन है।"
    },
    {
        question: "जीसस के सूली पर चढ़ने के बाद उनका पुनरुत्थान किस दिन हुआ था?",
        answers: shuffle([
            { text: "शुक्रवार", correct: false },
            { text: "शनिवार", correct: false },
            { text: "रविवार", correct: true },
            { text: "सोमवार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस को शुक्रवार को सूली पर चढ़ाया गया था, और तीसरे दिन, रविवार को उनका पुनरुत्थान हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी दिन को 'ईस्टर संडे' के रूप में मनाया जाता है।"
    },
    {
        question: "ईसाई धर्म में 'पवित्र आत्मा' (Holy Spirit) का प्रतीक आमतौर पर किस रूप में दर्शाया जाता है?",
        answers: shuffle([
            { text: "मेमना", correct: false },
            { text: "मछली", correct: false },
            { text: "कबूतर", correct: true },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के नए नियम में जीसस के बपतिस्मा के समय पवित्र आत्मा को कबूतर के रूप में उतरते हुए दर्शाया गया है।"
    },
    {
        question: "'पुराने नियम' में कौन-सा राजा अपने ज्ञान के लिए प्रसिद्ध था और जिसने यरूशलेम में मंदिर का निर्माण किया था?",
        answers: shuffle([
            { text: "राजा दाऊद", correct: false },
            { text: "राजा सुलैमान", correct: true },
            { text: "राजा शाऊल", correct: false },
            { text: "राजा हेरोदेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा सुलैमान राजा दाऊद का पुत्र था, जो अपने महान ज्ञान और यरूशलेम में पहले मंदिर के निर्माण के लिए जाना जाता है।"
    },
    {
        question: "जीसस की किस दृष्टांत कथा में, एक व्यक्ति को रास्ते में घायल छोड़कर चले जाने के बाद एक सामरी उसकी मदद करता है?",
        answers: shuffle([
            { text: "उड़ाऊ पुत्र की कहानी", correct: false },
            { text: "खोई हुई भेड़ की कहानी", correct: false },
            { text: "अच्छे सामरी की कहानी", correct: true },
            { text: "बीज बोने वाले की कहानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अच्छे सामरी की कहानी में जीसस सिखाते हैं कि सच्चा पड़ोसी वह है जो दूसरों पर दया करता है, भले ही वह किसी भी पृष्ठभूमि का हो।"
    },
    {
        question: "'अंतिम भोज' के दौरान जीसस के साथ कौन थे?",
        answers: shuffle([
            { text: "उनकी माँ", correct: false },
            { text: "उनके बारह शिष्य", correct: true },
            { text: "रोमन सैनिक", correct: false },
            { text: "फरीसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंतिम भोज' जीसस ने अपनी गिरफ्तारी से पहले अपने बारह शिष्यों के साथ किया था।"
    },
    {
        question: "जीसस ने 'पिता हमारा' (The Lord's Prayer) प्रार्थना अपने शिष्यों को कहाँ सिखाई थी?",
        answers: shuffle([
            { text: "यरूशलेम में", correct: false },
            { text: "मंदिर में", correct: false },
            { text: "माउंट पर उपदेश के दौरान", correct: true },
            { text: "अंतिम भोज के दौरान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिता हमारा' प्रार्थना, जो ईसाई धर्म की सबसे महत्वपूर्ण प्रार्थना है, जीसस ने अपने प्रसिद्ध 'माउंट पर उपदेश' के दौरान सिखाई थी।"
    },
    {
        question: "बाइबिल में 'युकेरिस्ट' संस्कार में 'रोटी' क्या दर्शाती है?",
        answers: shuffle([
            { text: "जीसस का रक्त", correct: false },
            { text: "जीसस का शरीर", correct: true },
            { text: "पवित्र आत्मा", correct: false },
            { text: "जीवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'युकेरिस्ट' के संस्कार में, रोटी को जीसस के शरीर का प्रतीक माना जाता है जो मानवता के लिए तोड़ा गया था।"
    },
    {
        question: "जीसस को सूली पर चढ़ाए जाने के बाद उनके शरीर को कब्र में किसने रखा था?",
        answers: shuffle([
            { text: "जूदास", correct: false },
            { text: "संत पीटर", correct: false },
            { text: "अरिमतिया के यूसुफ", correct: true },
            { text: "पोंटियस पाइलेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, अरिमतिया के एक धनी व्यक्ति, यूसुफ ने जीसस के शरीर को एक कब्र में रखा था।"
    },
    {
        question: "जीसस के पुनरुत्थान के बाद, 'पवित्र आत्मा' का उनके शिष्यों पर अवतरण किस दिन हुआ था?",
        answers: shuffle([
            { text: "क्रिसमस", correct: false },
            { text: "गुड फ्राइडे", correct: false },
            { text: "ईस्टर", correct: false },
            { text: "पेंटेकोस्ट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेंटेकोस्ट, ईस्टर के 50 दिन बाद, वह दिन है जब पवित्र आत्मा जीसस के शिष्यों पर अवतरित हुई थी।"
    },
    {
        question: "'ईसाइयत' (Christianity) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "यहूदियों का धर्म", correct: false },
            { text: "मसीह (Christ) के अनुयायियों का धर्म", correct: true },
            { text: "रोमन धर्म", correct: false },
            { text: "पवित्र आत्मा का धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ईसाई' (Christian) शब्द ग्रीक 'क्रिस्टोस' (मसीह) से आया है, और ईसाइयत का अर्थ है मसीह के अनुयायियों का धर्म।"
    },
    {
        question: "बाइबिल के 'नए नियम' के अनुसार, जीसस के जन्म के समय कौन-सा राजा यहूदिया पर शासन कर रहा था?",
        answers: shuffle([
            { text: "सम्राट ऑगस्टस", correct: false },
            { text: "राजा दाऊद", correct: false },
            { text: "राजा हेरोदेस महान", correct: true },
            { text: "राजा सुलैमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नए नियम के अनुसार, राजा हेरोदेस महान के शासनकाल के दौरान जीसस का जन्म हुआ था।"
    },
    {
        question: "ईसाई धर्म में 'साल्वेशन' (मुक्ति) की अवधारणा क्या है?",
        answers: shuffle([
            { text: "केवल अच्छे कर्मों से स्वर्ग जाना।", correct: false },
            { text: "पापों से बचाए जाना और ईश्वर के साथ शाश्वत जीवन प्राप्त करना।", correct: true },
            { text: "धन दान करके पापों को धोना।", correct: false },
            { text: "पुनर्जन्म प्राप्त करना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साल्वेशन' का अर्थ है जीसस की मृत्यु और पुनरुत्थान के माध्यम से पापों से मुक्ति और ईश्वर के साथ मेल-मिलाप प्राप्त करना।"
    },
    {
        question: "बाइबिल में 'पुराने नियम' की कौन-सी पुस्तक ज्ञान की कहानियाँ और उपदेशों से भरी हुई है?",
        answers: shuffle([
            { text: "भजन संहिता", correct: false },
            { text: "नीतिवचन", correct: true },
            { text: "यशायाह", correct: false },
            { text: "दानिय्येल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीतिवचन (Proverbs) की पुस्तक में ज्ञान और बुद्धिमत्ता से संबंधित कई बातें हैं, जो राजा सुलैमान से जुड़ी हैं।"
    },
    {
        question: "जीसस को सूली पर चढ़ाने के लिए किस पहाड़ी पर ले जाया गया था?",
        answers: shuffle([
            { text: "माउंट सिनाई", correct: false },
            { text: "जैतून का पहाड़", correct: false },
            { text: "माउंट गोल्गोथा (कलवरी)", correct: true },
            { text: "माउंट ऑफ टेम्पटेशन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, जीसस को यरूशलेम के बाहर, गोल्गोथा नामक एक पहाड़ी पर सूली पर चढ़ाया गया था, जिसे कलवरी भी कहा जाता है।"
    },
    {
        question: "'मिलान का अध्यादेश' (Edict of Milan) किसने जारी किया था?",
        answers: shuffle([
            { text: "सम्राट नीरो", correct: false },
            { text: "सम्राट कॉन्सटेंटाइन", correct: true },
            { text: "सम्राट डायोक्लेशियन", correct: false },
            { text: "राजा हेरोदेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सम्राट कॉन्सटेंटाइन ने 313 ईस्वी में 'मिलान का अध्यादेश' जारी किया था, जिसने रोमन साम्राज्य में ईसाई धर्म को कानूनी मान्यता दी।"
    },
    {
        question: "बाइबिल के किस पुस्तक में 'सृष्टि के चार घोड़े' (Four Horsemen of the Apocalypse) का वर्णन है?",
        answers: shuffle([
            { text: "उत्पत्ति", correct: false },
            { text: "यशायाह", correct: false },
            { text: "प्रकाशितवाक्य", correct: true },
            { text: "यूहन्ना का सुसमाचार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशितवाक्य की पुस्तक में भविष्य की घटनाओं का वर्णन है, जिसमें 'चार घोड़े' भी शामिल हैं जो युद्ध, अकाल, महामारी और मृत्यु का प्रतिनिधित्व करते हैं।"
    },
    {
        question: "प्रोटेस्टेंट सुधार के जनक मार्टिन लूथर ने किस दस्तावेज को लिखा था?",
        answers: shuffle([
            { text: "बाइबिल", correct: false },
            { text: "नीकैया का पंथ", correct: false },
            { text: "95 थीसिस", correct: true },
            { text: "मिलान का अध्यादेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मार्टिन लूथर ने 1517 में 95 थीसिस लिखकर प्रोटेस्टेंट सुधार की शुरुआत की, जिसमें उन्होंने कैथोलिक चर्च की प्रथाओं पर आपत्ति जताई थी।"
    },
    {
        question: "'अंतिम भोज' के दौरान, जीसस ने किसे बताया कि वह उन्हें धोखा देगा?",
        answers: shuffle([
            { text: "संत पीटर", correct: false },
            { text: "संत पॉल", correct: false },
            { text: "जूदास इस्करियोती", correct: true },
            { text: "संत थॉमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंतिम भोज' के दौरान, जीसस ने अपने शिष्यों को बताया था कि उनमें से एक उन्हें धोखा देगा, और जब उन्होंने रोटी का टुकड़ा जूदास को दिया, तो उन्होंने इशारा किया कि वही है।"
    },
    {
        question: "ईसाई धर्म में 'क्रॉस' (क्रूस) का क्या महत्व है?",
        answers: shuffle([
            { text: "यह एक गहना है।", correct: false },
            { text: "यह जीसस की मृत्यु और पुनरुत्थान का प्रतीक है।", correct: true },
            { text: "यह एक ऐतिहासिक कलाकृति है।", correct: false },
            { text: "यह जीसस के जन्म का प्रतीक है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रॉस ईसाई धर्म का सबसे महत्वपूर्ण प्रतीक है, जो जीसस की मृत्यु और मानव जाति के लिए उनके बलिदान को याद दिलाता है।"
    },
    {
        question: "बाइबिल के अनुसार, 'सृष्टि' के अंत में क्या होगा?",
        answers: shuffle([
            { text: "केवल दुनिया नष्ट हो जाएगी।", correct: false },
            { text: "ईश्वर सभी जीवित और मृत लोगों का न्याय करेगा।", correct: true },
            { text: "दुनिया में कोई बदलाव नहीं आएगा।", correct: false },
            { text: "केवल अच्छे लोग बचेंगे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, 'अंत समय' में जीसस वापस आएंगे और सभी लोगों के कर्मों के आधार पर उनका न्याय करेंगे।"
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