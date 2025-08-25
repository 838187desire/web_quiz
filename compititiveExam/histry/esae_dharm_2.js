const questions = [
    {
        topHeading: "ईसाई धर्म पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.42)"
    },
    {
        question: "बाइबिल के अनुसार, जीसस को धोखा देकर गिरफ्तार करवाने वाला शिष्य कौन था?",
        answers: shuffle([
            { text: "संत पीटर", correct: false },
            { text: "संत पॉल", correct: false },
            { text: "जूदास इस्करियोती", correct: true },
            { text: "संत जॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जूदास इस्करियोती जीसस के बारह शिष्यों में से एक था, जिसने चांदी के 30 सिक्कों के बदले जीसस को धोखा दिया था और उन्हें रोमन सैनिकों के हवाले कर दिया था।"
    },
    {
        question: "ईसाई धर्म में 'अंतिम भोज' के दौरान रोटी और दाखमधु (रोटी और शराब) क्या दर्शाते हैं?",
        answers: shuffle([
            { text: "केवल भोजन और पेय", correct: false },
            { text: "जीसस का शरीर और रक्त", correct: true },
            { text: "दोस्ती और भाईचारा", correct: false },
            { text: "खुशी और दुःख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतिम भोज में जीसस ने रोटी को अपना शरीर और दाखमधु को अपना रक्त बताया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'युकेरिस्ट' संस्कार का आधार है, जो उनकी मृत्यु और पुनरुत्थान को याद करता है।"
    },
    {
        question: "बाइबिल में 'सुसमाचार' (Gospel) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "पुराना नियम", correct: false },
            { text: "नया नियम", correct: false },
            { text: "अच्छी खबर या खुश खबरी", correct: true },
            { text: "ईश्वर का संदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'Gospel' शब्द ग्रीक शब्द 'Euangelion' से आया है, जिसका अर्थ है 'अच्छी खबर'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जीसस के जीवन, उपदेशों और उनके माध्यम से प्राप्त मुक्ति के संदेश को संदर्भित करता है।"
    },
    {
        question: "जीसस की किस दृष्टांत कथा में एक खोए हुए बेटे के घर लौटने की कहानी है?",
        answers: shuffle([
            { text: "अच्छे सामरी की कहानी", correct: false },
            { text: "खोई हुई भेड़ की कहानी", correct: false },
            { text: "उड़ाऊ पुत्र की कहानी", correct: true },
            { text: "बीज बोने वाले की कहानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उड़ाऊ पुत्र (Prodigal Son) की कहानी में जीसस बताते हैं कि ईश्वर अपने उन बच्चों के लिए हमेशा क्षमाशील होता है जो पश्चाताप करके उसके पास लौट आते हैं।"
    },
    {
        question: "'पुराना नियम' मुख्य रूप से किसके बारे में है?",
        answers: shuffle([
            { text: "जीसस का जीवन और उपदेश", correct: false },
            { text: "शुरुआती चर्च का इतिहास", correct: false },
            { text: "यहूदी लोगों का इतिहास और ईश्वर के साथ उनका संबंध", correct: true },
            { text: "भविष्य की भविष्यवाणियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराना नियम यहूदी लोगों के इतिहास, उनके नबियों, और ईश्वर के साथ उनके संबंध का वर्णन करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नया नियम से पहले का समय है।"
    },
    {
        question: "जीसस के पुनरुत्थान के बाद सबसे पहले उन्हें किसने देखा था?",
        answers: shuffle([
            { text: "संत पीटर", correct: false },
            { text: "संत पॉल", correct: false },
            { text: "मरियम मगदलीनी", correct: true },
            { text: "संत जॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, मरियम मगदलीनी सबसे पहली व्यक्ति थीं जिन्होंने जीसस को उनकी कब्र में खाली पाया और फिर उन्हें पुनर्जीवित अवस्था में देखा।"
    },
    {
        question: "जीसस के जन्म के समय कौन-सा राजा यहूदिया पर शासन कर रहा था?",
        answers: shuffle([
            { text: "सम्राट नीरो", correct: false },
            { text: "राजा दाऊद", correct: false },
            { text: "राजा हेरोदेस", correct: true },
            { text: "सम्राट ऑगस्टस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, जब जीसस का जन्म हुआ था, तब राजा हेरोदेस महान यहूदिया पर शासन कर रहा था और उसने नवजात राजा को खोजने के लिए बेथलहम के सभी लड़कों को मरवा दिया था।"
    },
    {
        question: "'आदि पाप' (Original Sin) की अवधारणा किससे संबंधित है?",
        answers: shuffle([
            { text: "जीसस की मृत्यु", correct: false },
            { text: "आदम और हव्वा के द्वारा ईश्वर की आज्ञा का उल्लंघन", correct: true },
            { text: "जूदास का विश्वासघात", correct: false },
            { text: "जीसस का पुनरुत्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आदि पाप' वह पाप है जो आदम और हव्वा ने ईश्वर की अवज्ञा करके किया था, और यह माना जाता है कि यह पाप सभी मनुष्यों में विरासत के रूप में आ गया है।"
    },
    {
        question: "'पवित्र आत्मा' का प्रतीक आमतौर पर किस जानवर के रूप में दर्शाया जाता है?",
        answers: shuffle([
            { text: "मेमना", correct: false },
            { text: "मछली", correct: false },
            { text: "कबूतर", correct: true },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के नए नियम में जीसस के बपतिस्मा के समय पवित्र आत्मा को कबूतर के रूप में उतरते हुए वर्णित किया गया है।"
    },
    {
        question: "'संतों की सहभागिता' (Communion of Saints) क्या है?",
        answers: shuffle([
            { text: "संतों के लिए एक भोज", correct: false },
            { text: "जीवित और मृत ईसाइयों के बीच आध्यात्मिक संबंध", correct: true },
            { text: "केवल संतों के लिए प्रार्थना", correct: false },
            { text: "केवल संतों का इतिहास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संतों की सहभागिता' का अर्थ है कि पृथ्वी पर रहने वाले विश्वासी, स्वर्ग में रहने वाले संत और शुद्धिकरण की प्रक्रिया में रहने वाले लोगों के बीच एक आध्यात्मिक संबंध है।"
    },
    {
        question: "पोप और रोमन सम्राट के बीच संघर्ष के कारण किस घटना को 'महान धर्मयुद्ध' कहा जाता है?",
        answers: shuffle([
            { text: "क्रूसेड", correct: true },
            { text: "मिलान का अध्यादेश", correct: false },
            { text: "प्रोटेस्टेंट सुधार", correct: false },
            { text: "रोमन साम्राज्य का विभाजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रूसेड (धर्मयुद्ध) 11वीं से 13वीं शताब्दी तक हुए धार्मिक युद्ध थे, जो पवित्र भूमि को ईसाई नियंत्रण में लाने के उद्देश्य से लड़े गए थे।"
    },
    {
        question: "'अंतिम निर्णय' (Final Judgment) के बाद, दुष्टों को जिस स्थान पर दंडित किया जाता है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "स्वर्ग", correct: false },
            { text: "पाताल", correct: false },
            { text: "नर्क", correct: true },
            { text: "शुद्धिस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईसाई धर्म में नर्क (Hell) वह स्थान है जहाँ दुष्टों की आत्माओं को उनके पापों के लिए अनंत दंड मिलता है।"
    },
    {
        question: "चर्चों में अक्सर अलग-अलग मौसमों (जैसे लेंट और ईस्टर) के लिए अलग-अलग रंग के वस्त्र (Liturgical Colors) क्यों पहने जाते हैं?",
        answers: shuffle([
            { text: "यह एक फैशन है।", correct: false },
            { text: "यह पूजा के विशेष समय के अर्थ और भावना को दर्शाता है।", correct: true },
            { text: "यह एक परंपरा है जिसका कोई विशेष अर्थ नहीं है।", correct: false },
            { text: "यह पुजारियों की पसंद पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईसाई liturgical रंगों (जैसे बैंगनी, सफेद, हरा और लाल) का उपयोग पूजा के विभिन्न मौसमों, जैसे लेंट (पश्चात्ताप) या ईस्टर (खुशी), के धार्मिक अर्थ को व्यक्त करने के लिए किया जाता है।"
    },
    {
        question: "जीसस के बारह शिष्यों में से किस शिष्य ने उन्हें पहचाने जाने के डर से तीन बार इनकार किया था?",
        answers: shuffle([
            { text: "संत पीटर", correct: true },
            { text: "संत जॉन", correct: false },
            { text: "संत पॉल", correct: false },
            { text: "संत एंड्रयू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, जीसस की गिरफ्तारी के बाद, संत पीटर ने लोगों के सामने यह स्वीकार करने से तीन बार इनकार किया था कि वह जीसस के शिष्य थे।"
    },
    {
        question: "बाइबिल में 'पुराने नियम' की 'भजन संहिता' (Psalms) की पुस्तक में क्या शामिल है?",
        answers: shuffle([
            { text: "इतिहास", correct: false },
            { text: "कानून", correct: false },
            { text: "प्रार्थना और भजन", correct: true },
            { text: "भविष्यवाणियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भजन संहिता की पुस्तक में 150 कविताएँ और गीत हैं जो प्रार्थना, स्तुति और भक्ति के उद्देश्य से लिखे गए थे।"
    },
    {
        question: "जीसस की किस दृष्टांत कथा में यह बताया गया है कि हमें अपने पड़ोसियों से प्रेम करना चाहिए, भले ही वे हमारे विरोधी हों?",
        answers: shuffle([
            { text: "उड़ाऊ पुत्र", correct: false },
            { text: "अच्छे सामरी", correct: true },
            { text: "बीज बोने वाला", correct: false },
            { text: "दस कुंवारियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अच्छे सामरी की कहानी में जीसस बताते हैं कि सच्चा पड़ोसी वह है जो दूसरों की मदद करता है, भले ही वे उसकी जाति या धर्म के न हों।"
    },
    {
        question: "'इचथस' (Ichthus) नामक मछली का प्रतीक क्या दर्शाता है?",
        answers: shuffle([
            { text: "मछली पकड़ने का व्यवसाय", correct: false },
            { text: "पानी", correct: false },
            { text: "जीसस क्राइस्ट, ईश्वर का पुत्र, मुक्तिदाता", correct: true },
            { text: "ज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इचथस' ग्रीक में एक परिवर्णी शब्द है, जिसका अर्थ है \"जीसस क्राइस्ट, ईश्वर का पुत्र, मुक्तिदाता\"।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शुरुआती ईसाइयों द्वारा पहचान के गुप्त प्रतीक के रूप में उपयोग किया जाता था।"
    },
    {
        question: "'संत पॉल' द्वारा लिखी गई बाइबिल की पुस्तकों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "सुसमाचार (Gospels)", correct: false },
            { text: "उपदेश", correct: false },
            { text: "पत्रियाँ (Epistles)", correct: true },
            { text: "रहस्योद्घाटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संत पॉल ने शुरुआती चर्चों को कई पत्र (पत्रियाँ) लिखे, जिनमें ईसाई धर्मशास्त्र और जीवन के सिद्धांतों का वर्णन है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये नए नियम की एक बड़ी संख्या बनाते हैं।"
    },
    {
        question: "वह कौन सा प्राचीन शहर है जहाँ ईसाई धर्म का पहला चर्च स्थापित हुआ था?",
        answers: shuffle([
            { text: "रोम", correct: false },
            { text: "यरूशलेम", correct: true },
            { text: "नासरत", correct: false },
            { text: "कांस्टेंटिनोपल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस के पुनरुत्थान के बाद, यरूशलेम शुरुआती ईसाई चर्च का केंद्र बन गया था।"
    },
    {
        question: "16वीं शताब्दी में हुए 'प्रोटेस्टेंट सुधार' का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "चर्च में धन की कमी", correct: false },
            { text: "कैथोलिक चर्च की प्रथाओं और धर्मशास्त्र के खिलाफ प्रतिक्रिया", correct: true },
            { text: "रोमन साम्राज्य का पतन", correct: false },
            { text: "धर्मयुद्ध की विफलता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटेस्टेंट सुधार मुख्य रूप से कैथोलिक चर्च की 'इंडुलजेंस' की बिक्री और अन्य धार्मिक प्रथाओं के खिलाफ एक आंदोलन था।"
    },
    {
        question: "'बाइबल' के किस भाग में सृष्टि के निर्माण, आदम और हव्वा, और नूह की कहानी है?",
        answers: shuffle([
            { text: "नया नियम", correct: false },
            { text: "पुराना नियम", correct: true },
            { text: "प्रेरितों के कार्य", correct: false },
            { text: "प्रकाशितवाक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल की पहली पुस्तक, 'उत्पत्ति', पुराने नियम का हिस्सा है और इसमें सृष्टि, आदम और हव्वा, और बाढ़ की कहानी सहित कई महत्वपूर्ण प्रारंभिक कहानियाँ हैं।"
    },
    {
        question: "ईसाई धर्म में 'पवित्र सप्ताह' (Holy Week) कब मनाया जाता है?",
        answers: shuffle([
            { text: "क्रिसमस से पहले", correct: false },
            { text: "ईस्टर से पहले", correct: true },
            { text: "पेंटेकोस्ट से पहले", correct: false },
            { text: "लेंट के दौरान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पवित्र सप्ताह ईस्टर से पहले का अंतिम सप्ताह है, जिसमें जीसस के जीवन के अंतिम दिनों को याद किया जाता है, जैसे कि गुड फ्राइडे।"
    },
    {
        question: "बाइबिल के किस भाग को 'प्रेरितों के कार्य' (Acts of the Apostles) कहा जाता है?",
        answers: shuffle([
            { text: "सुसमाचार", correct: false },
            { text: "पुराने नियम की पुस्तक", correct: false },
            { text: "नए नियम की पुस्तक", correct: true },
            { text: "भविष्यवाणियों की पुस्तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रेरितों के कार्य नए नियम की पाँचवीं पुस्तक है, जो जीसस के स्वर्गारोहण के बाद शुरुआती ईसाई चर्च के इतिहास का वर्णन करती है।"
    },
    {
        question: "'मसीहा' (Messiah) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "महान शिक्षक", correct: false },
            { text: "अभिषेक किया गया (Anointed One)", correct: true },
            { text: "भविष्यवक्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मसीहा' शब्द का शाब्दिक अर्थ है 'अभिषेक किया गया'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक ऐसे मुक्तिदाता के लिए एक यहूदी और ईसाई शब्द है जिसका लोगों को इंतजार था।"
    },
    {
        question: "'पेंटेकोस्ट' के दिन क्या हुआ था?",
        answers: shuffle([
            { text: "जीसस का जन्म", correct: false },
            { text: "जीसस का पुनरुत्थान", correct: false },
            { text: "पवित्र आत्मा का प्रेरितों पर अवतरण", correct: true },
            { text: "जीसस का स्वर्गारोहण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेंटेकोस्ट ईस्टर के 50 दिन बाद मनाया जाता है, जब पवित्र आत्मा प्रेरितों पर अवतरित हुई थी, जिससे उन्होंने विभिन्न भाषाओं में बोलना शुरू किया और चर्च की शुरुआत हुई।"
    },
    {
        question: "बाइबिल के 'उत्पत्ति' (Genesis) नामक पुस्तक में ईश्वर ने किस दिन विश्राम किया था?",
        answers: shuffle([
            { text: "पहला दिन", correct: false },
            { text: "तीसरा दिन", correct: false },
            { text: "पांचवां दिन", correct: false },
            { text: "सातवाँ दिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्पत्ति की पुस्तक के अनुसार, ईश्वर ने छह दिनों में सृष्टि की रचना की और सातवें दिन विश्राम किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस दिन को 'सब्बाथ' (विश्राम का दिन) कहा जाता है।"
    },
    {
        question: "बाइबिल के 'पुराने नियम' के अनुसार, ईश्वर ने मूसा को 'दस आज्ञाएं' किस रूप में दी थी?",
        answers: shuffle([
            { text: "एक पत्र के रूप में", correct: false },
            { text: "पत्थर की दो पटियों पर", correct: true },
            { text: "एक मौखिक संदेश के रूप में", correct: false },
            { text: "एक पुस्तक के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, ईश्वर ने मूसा को माउंट सिनाई पर पत्थर की दो पटियों पर दस आज्ञाएं लिखी हुई दी थी।"
    },
    {
        question: "जीसस के जन्म के समय कौन सा रोमन सम्राट शासन कर रहा था?",
        answers: shuffle([
            { text: "नीरो", correct: false },
            { text: "टिबेरियस", correct: false },
            { text: "ऑगस्टस", correct: true },
            { text: "कॉन्सटेंटाइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस के जन्म के समय, रोमन साम्राज्य पर सम्राट ऑगस्टस का शासन था, और उनके आदेश पर ही आबादी की जनगणना हुई थी।"
    },
    {
        question: "जीसस के कितने शिष्य थे जिन्होंने उनके पुनरुत्थान के बाद उन्हें देखा था?",
        answers: shuffle([
            { text: "7", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: false },
            { text: "अनेक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, जीसस के पुनरुत्थान के बाद उन्होंने अपने 12 शिष्यों के साथ-साथ 500 से अधिक लोगों को भी दर्शन दिए थे।"
    },
    {
        question: "'क्रिसमस' का क्या अर्थ है?",
        answers: shuffle([
            { text: "जीसस का पुनरुत्थान", correct: false },
            { text: "जीसस का जन्म", correct: true },
            { text: "जीसस का स्वर्गारोहण", correct: false },
            { text: "जीसस का बपतिस्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिसमस जीसस क्राइस्ट के जन्म का वार्षिक उत्सव है, जिसे दुनिया भर में 25 दिसंबर को मनाया जाता है।"
    },
    {
        question: "बाइबिल में 'मत्ती' के सुसमाचार का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "यह साबित करना कि जीसस केवल एक पैगंबर थे।", correct: false },
            { text: "यह दिखाना कि जीसस यहूदी भविष्यवाणियों के मसीहा थे।", correct: true },
            { text: "यह बताना कि जीसस सिर्फ एक अच्छा शिक्षक थे।", correct: false },
            { text: "यह दिखाना कि जीसस का कोई दिव्य दर्जा नहीं था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मत्ती के सुसमाचार का उद्देश्य यहूदी पाठकों के लिए यह साबित करना था कि जीसस वही मसीहा थे जिनकी भविष्यवाणी पुराने नियम में की गई थी।"
    },
    {
        question: "ईसाई धर्म में 'साल्वेशन' (मुक्ति) की अवधारणा का क्या अर्थ है?",
        answers: shuffle([
            { text: "अच्छे कर्म करके स्वर्ग जाना।", correct: false },
            { text: "पाप से बचाए जाना और ईश्वर के साथ शाश्वत जीवन प्राप्त करना।", correct: true },
            { text: "केवल प्रार्थना करके पापों को धोना।", correct: false },
            { text: "पुनर्जन्म लेना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साल्वेशन का अर्थ है जीसस की मृत्यु और पुनरुत्थान के माध्यम से पाप और उसके परिणामों से मुक्ति प्राप्त करना।"
    },
    {
        question: "वह कौन सा रोमन गवर्नर था जिसने जीसस को सूली पर चढ़ाने का आदेश दिया था?",
        answers: shuffle([
            { text: "सम्राट नीरो", correct: false },
            { text: "पोंटियस पाइलेट", correct: true },
            { text: "सम्राट ऑगस्टस", correct: false },
            { text: "राजा हेरोदेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोंटियस पाइलेट जीसस के समय यहूदिया का रोमन गवर्नर था, जिसने यहूदी नेताओं के दबाव में आकर जीसस को सूली पर चढ़ाने का आदेश दिया था।"
    },
    {
        question: "ईसाई धर्म में 'दया' (Grace) क्या है?",
        answers: shuffle([
            { text: "अच्छे कर्मों का फल", correct: false },
            { text: "ईश्वर की योग्यता-रहित कृपा और दया", correct: true },
            { text: "दूसरों को क्षमा करना", correct: false },
            { text: "दूसरों से क्षमा प्राप्त करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईसाई धर्मशास्त्र में, दया (Grace) को ईश्वर की अयोग्य कृपा और दया के रूप में परिभाषित किया जाता है, जो मनुष्यों को मुक्ति और आध्यात्मिक जीवन देती है।"
    },
    {
        question: "'पुराने नियम' में कौन सा ग्रंथ बाइबिल की सबसे लंबी पुस्तक है?",
        answers: shuffle([
            { text: "भजन संहिता (Psalms)", correct: true },
            { text: "उत्पत्ति (Genesis)", correct: false },
            { text: "यशायाह (Isaiah)", correct: false },
            { text: "नीतिवचन (Proverbs)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भजन संहिता 150 गीतों और प्रार्थनाओं का संग्रह है, जो इसे बाइबिल की सबसे लंबी पुस्तक बनाता है।"
    },
    {
        question: "जीसस ने 'माउंट पर उपदेश' कहाँ दिया था?",
        answers: shuffle([
            { text: "यरूशलेम में", correct: false },
            { text: "बेथलहम में", correct: false },
            { text: "गलील की झील के पास एक पहाड़ी पर", correct: true },
            { text: "रोम में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'माउंट पर उपदेश' (Sermon on the Mount) जीसस का एक प्रसिद्ध उपदेश है जो उन्होंने गलील की झील के पास एक पहाड़ी पर दिया था।"
    },
    {
        question: "ईसाई धर्म में, किस घटना को 'पवित्र आत्मा' के अवतरण के रूप में मनाया जाता है?",
        answers: shuffle([
            { text: "गुड फ्राइडे", correct: false },
            { text: "ईस्टर", correct: false },
            { text: "पेंटेकोस्ट", correct: true },
            { text: "क्रिसमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेंटेकोस्ट ईस्टर के 50 दिन बाद मनाया जाने वाला एक त्योहार है, जिसमें पवित्र आत्मा प्रेरितों पर अवतरित हुई थी, जिसने चर्च की स्थापना को चिह्नित किया।"
    },
    {
        question: "'जीसस' के उपदेशों के अनुसार, सबसे महत्वपूर्ण दो आज्ञाएं कौनसी हैं?",
        answers: shuffle([
            { text: "चोरी न करना और झूठ न बोलना।", correct: false },
            { text: "माता-पिता का सम्मान करना और हत्या न करना।", correct: false },
            { text: "ईश्वर से प्रेम करना और अपने पड़ोसी से प्रेम करना।", correct: true },
            { text: "सब्त के दिन का सम्मान करना और मूर्ति पूजा न करना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस ने सिखाया कि सभी धार्मिक नियमों का सार इन दो आज्ञाओं में निहित है: 'अपने ईश्वर से अपने पूरे दिल, आत्मा और मन से प्रेम करो,' और 'अपने पड़ोसी से अपने आपके समान प्रेम करो।'"
    },
    {
        question: "'पुराने नियम' में कौन सा जानवर जीसस (मसीहा) का प्रतीक माना जाता है?",
        answers: shuffle([
            { text: "शेर", correct: false },
            { text: "साँप", correct: false },
            { text: "मेमना", correct: true },
            { text: "कबूतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराने नियम में 'मेमना' अक्सर बलिदान और मोक्ष का प्रतीक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जीसस को 'ईश्वर का मेमना' कहा जाता है जो दुनिया के पापों को दूर करता है।"
    },
    {
        question: "'क्रूस' पर चढ़ाए जाने के बाद, जीसस का शरीर किस दिन कब्र से गायब हो गया था?",
        answers: shuffle([
            { text: "सोमवार", correct: false },
            { text: "शनिवार", correct: false },
            { text: "शुक्रवार", correct: false },
            { text: "रविवार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, जीसस को शुक्रवार को सूली पर चढ़ाया गया था और रविवार की सुबह उनकी कब्र खाली मिली थी, जो उनके पुनरुत्थान को दर्शाता है।"
    },
    {
        question: "'प्रेरितों के कार्य' नामक पुस्तक मुख्य रूप से किसका वर्णन करती है?",
        answers: shuffle([
            { text: "जीसस के जन्म का", correct: false },
            { text: "शुरुआती ईसाई चर्च के इतिहास का", correct: true },
            { text: "जीसस के उपदेशों का", correct: false },
            { text: "भविष्य की भविष्यवाणियों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रेरितों के कार्य' नामक पुस्तक, जो लूका द्वारा लिखी गई है, जीसस के स्वर्गारोहण के बाद शुरुआती प्रेरितों के मिशनरी कार्यों और चर्च के विकास का वर्णन करती है।"
    },
    {
        question: "ईसाई धर्म के अनुसार, 'पुनरुत्थान' (Resurrection) का क्या अर्थ है?",
        answers: shuffle([
            { text: "आत्मा का पुनर्जन्म", correct: false },
            { text: "शारीरिक मृत्यु के बाद जीवन में वापस आना", correct: true },
            { text: "आध्यात्मिक रूप से जागृत होना", correct: false },
            { text: "केवल आत्मा का स्वर्ग जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुनरुत्थान का अर्थ है कि शरीर की मृत्यु के बाद भी जीवन जारी रहता है और एक नया शरीर प्राप्त होता है, जैसा कि जीसस के साथ हुआ था।"
    },
    {
        question: "'प्रेरित पॉल' का मूल नाम क्या था?",
        answers: shuffle([
            { text: "पीटर", correct: false },
            { text: "शाऊल", correct: true },
            { text: "जॉन", correct: false },
            { text: "जेम्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रेरित पॉल का मूल नाम शाऊल था, जो ईसाइयों का उत्पीड़न करता था, लेकिन एक दिव्य अनुभव के बाद उसने अपना नाम बदलकर पॉल रख लिया और जीसस का अनुयायी बन गया।"
    },
    {
        question: "किस शहर को 'होली लैंड' (पवित्र भूमि) के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "रोम", correct: false },
            { text: "अंताकिया", correct: false },
            { text: "यरूशलेम", correct: true },
            { text: "बेथलहम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यरूशलेम वह शहर है जहाँ जीसस के जीवन की कई महत्वपूर्ण घटनाएँ हुईं, जैसे कि उनका अंतिम भोज, सूली पर चढ़ना और पुनरुत्थान।"
    },
    {
        question: "'द ग्रेट कमीशन' क्या है?",
        answers: shuffle([
            { text: "ईश्वर के 10 आज्ञाएँ।", correct: false },
            { text: "जीसस का अपने शिष्यों को सभी देशों में जाकर उपदेश देने का आदेश।", correct: true },
            { text: "जीसस का माउंट पर दिया गया उपदेश।", correct: false },
            { text: "जीसस का अंतिम भोज।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द ग्रेट कमीशन' में जीसस ने अपने शिष्यों को यह आदेश दिया था कि वे दुनिया के सभी लोगों के पास जाकर उन्हें सुसमाचार सुनाएँ और उन्हें शिष्य बनाएँ।"
    },
    {
        question: "प्रोटेस्टेंट सुधार के बाद कैथोलिक चर्च ने अपनी प्रतिक्रिया किस परिषद के माध्यम से दी?",
        answers: shuffle([
            { text: "नाइसीनी की परिषद", correct: false },
            { text: "यरूशलेम की परिषद", correct: false },
            { text: "ट्रेंट की परिषद", correct: true },
            { text: "वेटिकन परिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रेंट की परिषद (1545-1563) प्रोटेस्टेंट सुधार के जवाब में कैथोलिक चर्च की एक प्रतिक्रिया थी, जिसमें उन्होंने अपनी धार्मिक शिक्षाओं और प्रथाओं की पुष्टि की।"
    },
    {
        question: "'अल्फा और ओमेगा' (Alpha and Omega) का प्रतीक क्या दर्शाता है?",
        answers: shuffle([
            { text: "बाइबिल का पहला और अंतिम अक्षर।", correct: false },
            { text: "जीसस का नाम।", correct: false },
            { text: "जीसस का आदि और अंत होना।", correct: true },
            { text: "जीसस के दो प्रमुख शिष्य।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्फा (Alpha) ग्रीक वर्णमाला का पहला अक्षर है और ओमेगा (Omega) अंतिम।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रतीक दर्शाता है कि जीसस सृष्टि की शुरुआत और अंत हैं।"
    },
    {
        question: "'पुराना नियम' में कौन सा राजा अपने भजनों (Psalms) के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "राजा दाऊद", correct: true },
            { text: "राजा सुलैमान", correct: false },
            { text: "राजा शाऊल", correct: false },
            { text: "राजा हेरोदेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा दाऊद को भजन संहिता की पुस्तक में कई भजनों का लेखक माना जाता है।"
    },
    {
        question: "जीसस के स्वर्गारोहण के बाद, 'प्रेरितों के कार्य' के अनुसार, उन्हें किसने प्रतिस्थापित किया था?",
        answers: shuffle([
            { text: "संत पीटर", correct: false },
            { text: "संत पॉल", correct: false },
            { text: "कोई नहीं", correct: false },
            { text: "संत मत्ती", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस के स्वर्गारोहण के बाद, 11 प्रेरितों ने जुदास इस्करियोती के स्थान पर मत्ती (Matthias) को चुना ताकि उनकी संख्या फिर से बारह हो जाए।"
    },
    {
        question: "'पुराना नियम' में एक भविष्यवक्ता कौन था जिसने भविष्यवाणी की थी कि मसीहा बेथलहम में पैदा होगा?",
        answers: shuffle([
            { text: "यशायाह", correct: false },
            { text: "यिर्मयाह", correct: false },
            { text: "मीका", correct: true },
            { text: "दानिय्येल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भविष्यवक्ता मीका ने अपने ग्रंथ में भविष्यवाणी की थी कि मसीहा (जीसस) बेथलहम नामक शहर में पैदा होगा।"
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