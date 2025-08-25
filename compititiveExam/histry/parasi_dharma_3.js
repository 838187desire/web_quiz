const questions = [
    {
        topHeading: "पारसी धर्म पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.47)"
    },
    {
        question: "पारसी धर्म में 'अमेश स्पेंतास' में से 'वोहू मनह' (Vohu Manah) किसका प्रतिनिधित्व करता है?",
        answers: [
            { text: "सत्य", correct: false },
            { text: "अच्छा मन", correct: true },
            { text: "शक्ति", correct: false },
            { text: "भक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वोहू मनह' का अर्थ है 'अच्छा मन'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अहुर मज़्दा की एक दिव्य शक्ति है, जो अच्छे विचार और ज्ञान को दर्शाती है।"
    },
    {
        question: "'जश्ने' (Jashne) त्योहार का संबंध किससे है?",
        answers: [
            { text: "नव वर्ष", correct: false },
            { text: "वसंत विषुव", correct: false },
            { text: "एक सामूहिक धार्मिक उत्सव", correct: true },
            { text: "अंतिम संस्कार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जश्ने' पारसी धर्म में एक सामूहिक उत्सव है, जो महत्वपूर्ण धार्मिक, ऐतिहासिक या मौसमी घटनाओं को मनाने के लिए आयोजित किया जाता है।"
    },
    {
        question: "पारसी धर्म के अनुसार, 'अंतिम निर्णय' के बाद अच्छे लोग जहाँ जाते हैं, उस स्थान को क्या कहते हैं?",
        answers: [
            { text: "जन्नत", correct: false },
            { text: "जहन्नुम", correct: false },
            { text: "गरो देमाना (Garodemana)", correct: true },
            { text: "पुनरुत्थान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरो देमाना' का अर्थ 'गीत का घर' है और यह पारसी धर्म में स्वर्ग को संदर्भित करता है, जहाँ अच्छाई और खुशी का साम्राज्य होता है।"
    },
    {
        question: "भारत में पारसी समुदाय के लिए 'संजान' का ऐतिहासिक महत्व क्या है?",
        answers: [
            { text: "यह उनकी वर्तमान राजधानी है।", correct: false },
            { text: "यह वह स्थान है जहाँ वे ईरान से पलायन के बाद सबसे पहले पहुँचे।", correct: true },
            { text: "यह वह स्थान है जहाँ उनके सभी अग्नि मंदिर हैं।", correct: false },
            { text: "यह वह स्थान है जहाँ उनके संस्थापक का जन्म हुआ था।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 8वीं शताब्दी में ईरान से पलायन के बाद, पारसी समुदाय गुजरात के संजान नामक तट पर पहुँचा था।"
    },
    {
        question: "'अवेस्ता' ग्रंथ के किस भाग को 'धर्मग्रंथ का कानून' माना जाता है?",
        answers: [
            { text: "गाथा", correct: false },
            { text: "यस्ना", correct: false },
            { text: "विसपरद", correct: false },
            { text: "विदेवदत (Videvdad)", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विदेवदत' में धार्मिक कानून और अनुष्ठानों से संबंधित नियम दिए गए हैं, विशेष रूप से शुद्धता और अशुद्धता के बारे में।"
    },
    {
        question: "पारसी धर्म में, 'सुद्रेह' (Sudreh) क्या है?",
        answers: [
            { text: "एक प्रकार की टोपी", correct: false },
            { text: "एक पवित्र कमीज", correct: true },
            { text: "एक प्रकार की बेल्ट", correct: false },
            { text: "एक पवित्र पुस्तक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुद्रेह' एक सफेद, सूती कमीज है जिसे नाभजोट समारोह के बाद पारसी लोग पहनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह धार्मिकता और शुद्धता का प्रतीक है।"
    },
    {
        question: "'सस्सानियन साम्राज्य' की अवधि में पारसी धर्म का विकास किस प्रकार हुआ?",
        answers: [
            { text: "यह एक गुप्त धर्म था।", correct: false },
            { text: "यह राजकीय धर्म बन गया।", correct: true },
            { text: "इसका पूरी तरह से पतन हो गया।", correct: false },
            { text: "यह केवल कुछ ही क्षेत्रों तक सीमित था।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सस्सानियन साम्राज्य (224-651 ईस्वी) के दौरान पारसी धर्म को राजकीय धर्म के रूप में मान्यता मिली और इसका व्यापक रूप से प्रसार हुआ।"
    },
    {
        question: "'पारसी' शब्द किस प्राचीन साम्राज्य से संबंधित है?",
        answers: [
            { text: "रोमन साम्राज्य", correct: false },
            { text: "ग्रीक साम्राज्य", correct: false },
            { text: "फारसी साम्राज्य", correct: true },
            { text: "भारतीय साम्राज्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पारसी' शब्द फारस (Persia) से आया है, जो प्राचीन ईरान का नाम था।"
    },
    {
        question: "पारसी धर्म में, 'अग्नि की पूजा' करने वाले पुजारी को क्या कहते हैं?",
        answers: [
            { text: "इमाम", correct: false },
            { text: "पंडित", correct: false },
            { text: "मोबेद (Mobeds)", correct: true },
            { text: "पादरी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मोबेद' एक पारसी पुजारी होता है, जो अग्नि मंदिर में धार्मिक अनुष्ठान करता है।"
    },
    {
        question: "पारसी धर्म में 'फरवहर' प्रतीक में, मानव आकृति के नीचे दो सर्पिल किसका प्रतिनिधित्व करते हैं?",
        answers: [
            { text: "स्वर्ग और नर्क", correct: false },
            { text: "अच्छी और बुरी पसंद", correct: true },
            { text: "जन्म और मृत्यु", correct: false },
            { text: "प्रकाश और अंधकार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फरवहर के प्रतीक में, नीचे की ओर दो सर्पिल उस द्वैतवादी संघर्ष का प्रतिनिधित्व करते हैं जो हर इंसान को अच्छे और बुरे के बीच एक नैतिक चुनाव करने के लिए मजबूर करता है।"
    },
    {
        question: "'गाथा' में जरथुस्त्र ने किस देवता की प्रशंसा की है?",
        answers: [
            { text: "मिथ्रा", correct: false },
            { text: "वायु", correct: false },
            { text: "अहुर मज़्दा", correct: true },
            { text: "ज़ोरो", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाथाओं में जरथुस्त्र ने अहुर मज़्दा को एकमात्र सर्वशक्तिमान और सर्वोच्च देवता के रूप में प्रस्तुत किया है।"
    },
    {
        question: "'नवरोज' का त्योहार मुख्य रूप से क्या दर्शाता है?",
        answers: [
            { text: "ग्रीष्म ऋतु का आगमन", correct: false },
            { text: "वसंत ऋतु का आगमन और नया साल", correct: true },
            { text: "शरद ऋतु का आगमन", correct: false },
            { text: "शीत ऋतु का आगमन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नवरोज' फारसी में 'नया दिन' के लिए है और यह वसंत विषुव के साथ मेल खाता है, जो प्रकृति के पुनर्जन्म और नए साल की शुरुआत का प्रतीक है।"
    },
    {
        question: "'हौमा' (Haoma) क्या है?",
        answers: [
            { text: "एक पवित्र पौधा और उसका रस", correct: true },
            { text: "एक प्रकार का भोजन", correct: false },
            { text: "एक अग्नि मंदिर का नाम", correct: false },
            { text: "एक देवता का नाम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हौमा एक पवित्र पौधा है जिसका रस पारसी धार्मिक अनुष्ठानों में उपयोग किया जाता है।"
    },
    {
        question: "पारसी धर्म में 'अंतिम निर्णय' को किस नाम से जाना जाता है?",
        answers: [
            { text: "फ्रशोकेरेति (Frashokereti)", correct: true },
            { text: "अशा", correct: false },
            { text: "द्रुज", correct: false },
            { text: "साओश्यंत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फ्रशोकेरेति' का अर्थ है 'दुनिया का नवीनीकरण' और यह उस अंतिम समय को संदर्भित करता है जब अच्छाई बुराई पर अंतिम रूप से विजय प्राप्त करेगी।"
    },
    {
        question: "पारसी धर्म में, 'अग्नि मंदिर' में अग्नि को कितने स्तरों में वर्गीकृत किया गया है?",
        answers: [
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी अग्नि मंदिरों में अग्नि को तीन श्रेणियों में वर्गीकृत किया गया है: दादगाह, दर-ए-मेहर और अतिश बहराम, जो उनके महत्व को दर्शाते हैं।"
    },
    {
        question: "'दादगाह' (Dadgah) क्या है?",
        answers: [
            { text: "एक प्रकार का अंतिम संस्कार", correct: false },
            { text: "अग्नि मंदिर की एक साधारण श्रेणी", correct: true },
            { text: "एक पारसी प्रार्थना", correct: false },
            { text: "एक प्रकार का त्योहार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दादगाह' अग्नि मंदिर की सबसे कम महत्वपूर्ण श्रेणी है, जिसमें अग्नि को दैनिक पूजा के लिए प्रज्वलित किया जाता है।"
    },
    {
        question: "पारसी धर्म में, 'अवेस्ता' के किस भाग में देवताओं और नायकों की प्रशंसा में भजन हैं?",
        answers: [
            { text: "गाथा", correct: false },
            { text: "यस्ना", correct: false },
            { text: "याश्त (Yasht)", correct: true },
            { text: "विदेवदत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'याश्त' अवेस्ता का एक हिस्सा है जिसमें 'यज़तस' (पूजनीय दिव्य प्राणी) की प्रशंसा में 21 भजन शामिल हैं।"
    },
    {
        question: "पारसी धर्म में, 'पुनर्जन्म' की अवधारणा है या नहीं?",
        answers: [
            { text: "है", correct: false },
            { text: "नहीं है", correct: true },
            { text: "केवल कुछ संप्रदायों में है", correct: false },
            { text: "यह एक रहस्य है", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म 'पुनर्जन्म' में विश्वास नहीं करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका मानना है कि आत्मा मृत्यु के बाद 'अंतिम निर्णय' का सामना करती है।"
    },
    {
        question: "पारसी धर्म में, 'अच्छे मन, अच्छे शब्द, अच्छे कर्म' का सिद्धांत किससे संबंधित है?",
        answers: [
            { text: "केवल पुजारियों से", correct: false },
            { text: "सभी मनुष्यों से", correct: true },
            { text: "केवल देवताओं से", correct: false },
            { text: "केवल अंतिम संस्कार से", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पारसी धर्म का केंद्रीय नैतिक सिद्धांत है, जो सभी अनुयायियों को अपने जीवन में पालन करने के लिए प्रोत्साहित करता है।"
    },
    {
        question: "'फ़िरदौसी' द्वारा लिखित 'शाहनामा' नामक महाकाव्य में किस धर्म के राजाओं और नायकों का वर्णन है?",
        answers: [
            { text: "मुस्लिम", correct: false },
            { text: "पारसी", correct: true },
            { text: "हिन्दू", correct: false },
            { text: "बौद्ध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शाहनामा' में प्राचीन फारसी राजाओं और नायकों का वर्णन है, जो पारसी धर्म का पालन करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्राचीन ईरान के इतिहास और मिथकों का एक महत्वपूर्ण स्रोत है।"
    },
    {
        question: "पारसी धर्म में, 'अग्नि मंदिर' में पवित्र अग्नि को बनाए रखने की जिम्मेदारी किसकी होती है?",
        answers: [
            { text: "किसी भी पारसी की", correct: false },
            { text: "केवल महिलाएँ", correct: false },
            { text: "केवल पुजारी (मोबेद)", correct: true },
            { text: "किसी भी भक्त की", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्नि मंदिर में पवित्र अग्नि को प्रज्वलित रखने और उसकी देखभाल करने का कार्य केवल पुजारी (मोबेद) ही करते हैं।"
    },
    {
        question: "'टॉवर ऑफ साइलेंस' को किस नाम से जाना जाता है?",
        answers: [
            { text: "अग्नि मंदिर", correct: false },
            { text: "दख्मा (Dakhma)", correct: true },
            { text: "अगियारी", correct: false },
            { text: "दर-ए-मेहर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दख्मा' पारसी अंतिम संस्कार के लिए एक ऊँची, गोलाकार मीनार है।"
    },
    {
        question: "'जाहिलिया' काल से पहले के अरबों में कौन-सा धर्म प्रचलित था?",
        answers: [
            { text: "इस्लाम", correct: false },
            { text: "ईसाई धर्म", correct: false },
            { text: "पारसी धर्म", correct: false },
            { text: "मूर्ति पूजा", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लाम के उदय से पहले, अरब प्रायद्वीप में विभिन्न कबीलाई देवता और मूर्ति पूजा का प्रचलन था।<br><br><i class='fa-solid fa-angles-right icon'></i> पारसी धर्म मुख्य रूप से ईरान में प्रचलित था।"
    },
    {
        question: "पारसी धर्म में, 'आकाश' की रचना का संबंध किस अमेश स्पेंता से है?",
        answers: [
            { text: "वोहू मनह (Vohu Manah)", correct: false },
            { text: "अशा वहिश्ता (Asha Vahishta)", correct: false },
            { text: "खशथ्रा वैर्या (Khshathra Vairya)", correct: true },
            { text: "हउर्वातात (Haurvatat)", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खशथ्रा वैर्या' का अर्थ है 'वांछित प्रभुत्व'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अहुर मज़्दा की शक्ति और प्रभुत्व का प्रतीक है और यह आकाश की रचना से जुड़ा है।"
    },
    {
        question: "'अवेस्ता' ग्रंथ के मुख्य भाग को क्या कहते हैं?",
        answers: [
            { text: "खुर्दह अवेस्ता", correct: false },
            { text: "यस्ना (Yasna)", correct: true },
            { text: "गाथा", correct: false },
            { text: "याश्त", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यस्ना' अवेस्ता का सबसे महत्वपूर्ण liturgical भाग है, जिसमें 72 अध्याय हैं और जिसमें गाथाएँ भी शामिल हैं।"
    },
    {
        question: "पारसी धर्म में, 'अमेश स्पेंतास' में से 'अशा वहिश्ता' (Asha Vahishta) किसका प्रतिनिधित्व करता है?",
        answers: [
            { text: "अच्छा मन", correct: false },
            { text: "सत्य और पवित्रता", correct: true },
            { text: "भक्ति", correct: false },
            { text: "स्वास्थ्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अशा वहिश्ता' का अर्थ है 'सर्वोत्तम सत्य'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अहुर मज़्दा की एक दिव्य शक्ति है जो ब्रह्मांडीय सत्य, व्यवस्था और पवित्रता का प्रतीक है।"
    },
    {
        question: "पारसी अंतिम संस्कार के बाद, 'पवित्र अग्नि' को वापस अग्नि मंदिर में कब ले जाया जाता है?",
        answers: [
            { text: "तुरंत", correct: false },
            { text: "तीन दिन बाद", correct: false },
            { text: "चार दिन बाद", correct: true },
            { text: "सात दिन बाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी मान्यताओं के अनुसार, मृत्यु के बाद आत्मा चार दिन तक पृथ्वी पर रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> चौथे दिन के बाद, पवित्र अग्नि को पुनः अग्नि मंदिर में स्थापित किया जाता है।"
    },
    {
        question: "पारसी धर्म में 'नवरोज' का उत्सव किस तिथि को मनाया जाता है?",
        answers: [
            { text: "1 जनवरी", correct: false },
            { text: "21 मार्च", correct: true },
            { text: "21 जून", correct: false },
            { text: "25 दिसंबर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवरोज वसंत विषुव के दिन मनाया जाता है, जो आमतौर पर 21 मार्च को पड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वसंत के आगमन और नए साल की शुरुआत का प्रतीक है।"
    },
    {
        question: "'फरवहर' (Faravahar) के प्रतीक में, केंद्र में डिस्क किसका प्रतिनिधित्व करती है?",
        answers: [
            { text: "जीवन का चक्र", correct: true },
            { text: "सूर्य", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "ब्रह्मांड", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फरवहर के केंद्र में स्थित डिस्क या चक्र मानव जीवन के चक्र को दर्शाता है, जिसमें आत्मा का पुनर्जन्म नहीं, बल्कि उसके कर्मों का चक्र शामिल है।"
    },
    {
        question: "पारसी धर्म में 'अग्नि मंदिर' को क्या कहा जाता है?",
        answers: [
            { text: "चर्च", correct: false },
            { text: "मंदिर", correct: false },
            { text: "अगियारी (Agiary)", correct: true },
            { text: "मस्जिद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अगियारी' पारसी अग्नि मंदिर के लिए एक सामान्य नाम है, जिसका अर्थ है 'अग्नि का घर'।"
    },
    {
        question: "'सस्सानियन साम्राज्य' की अवधि के बाद, ईरान में पारसी धर्म का क्या हुआ?",
        answers: [
            { text: "यह पूरी तरह से समाप्त हो गया।", correct: false },
            { text: "यह राजकीय धर्म बना रहा।", correct: false },
            { text: "यह धीरे-धीरे पतन की ओर गया और इस्लाम का प्रसार हुआ।", correct: true },
            { text: "यह एक नया रूप ले लिया।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों के आक्रमण के बाद, पारसी धर्म के अनुयायियों को धार्मिक उत्पीड़न का सामना करना पड़ा, जिससे उनका पतन हुआ और इस्लाम का प्रसार हुआ।"
    },
    {
        question: "पारसी धर्म में, 'अग्नि मंदिर' के पुजारी को क्या कहते हैं?",
        answers: [
            { text: "इमाम", correct: false },
            { text: "पादरी", correct: false },
            { text: "मोबेद (Mobeds)", correct: true },
            { text: "रब्बी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मोबेद' एक पारसी पुजारी है जो अग्नि मंदिर में धार्मिक अनुष्ठान करता है और पवित्र अग्नि की देखभाल करता है।"
    },
    {
        question: "पारसी धर्म में, 'सात कृतियों' के सिद्धांत के अनुसार, 'जल' की रचना का संबंध किस अमेश स्पेंता से है?",
        answers: [
            { text: "अशा वहिश्ता", correct: false },
            { text: "हउर्वातात (Haurvatat)", correct: true },
            { text: "वोहू मनह", correct: false },
            { text: "खशथ्रा वैर्या", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हउर्वातात' का अर्थ है 'पूर्णता' या 'स्वास्थ्य'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अमेश स्पेंता जल की रचना और जीवन को पोषण देने का प्रतीक है।"
    },
    {
        question: "'खुर्दह अवेस्ता' (Khordeh Avesta) में क्या शामिल है?",
        answers: [
            { text: "जरथुस्त्र के उपदेश", correct: false },
            { text: "दैनिक प्रार्थनाएँ और भजन", correct: true },
            { text: "धार्मिक कानून", correct: false },
            { text: "देवताओं के बारे में कहानियाँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुर्दह अवेस्ता' का अर्थ है 'छोटी अवेस्ता'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक प्रार्थना पुस्तक है जिसका उपयोग साधारण पारसी लोग दैनिक जीवन में करते हैं।"
    },
    {
        question: "पारसी धर्म में 'तीन' की संख्या का क्या महत्व है?",
        answers: [
            { text: "तीन प्रमुख देवता", correct: false },
            { text: "'अच्छे विचार, अच्छे शब्द, अच्छे कर्म'", correct: true },
            { text: "तीन प्रमुख त्योहार", correct: false },
            { text: "तीन प्रमुख पुजारी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म के केंद्रीय नैतिक सिद्धांत 'हुमाता, हुख्ता, हुवर्श्ता' में तीन भाग हैं, जो क्रमशः 'अच्छे विचार', 'अच्छे शब्द' और 'अच्छे कर्म' को दर्शाते हैं।"
    },
    {
        question: "पारसी धर्म में 'अंतिम संस्कार' के बाद आत्मा को क्या होता है?",
        answers: [
            { text: "वह पुनर्जन्म लेती है।", correct: false },
            { text: "वह तीन दिन तक पृथ्वी पर रहती है।", correct: true },
            { text: "वह तुरंत स्वर्ग या नर्क चली जाती है।", correct: false },
            { text: "वह एक जानवर के रूप में जन्म लेती है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी मान्यताओं के अनुसार, मृत्यु के बाद आत्मा चार दिन तक पृथ्वी पर रहती है, जिसके बाद वह 'चिनवत ब्रिज' पर अपने अंतिम निर्णय का सामना करती है।"
    },
    {
        question: "'अवेस्ता' ग्रंथ किस भाषा में लिखा गया है?",
        answers: [
            { text: "फारसी", correct: false },
            { text: "संस्कृत", correct: false },
            { text: "अवेस्तान (Avestan)", correct: true },
            { text: "अरबी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवेस्ता, पारसी धर्म का पवित्र ग्रंथ, अवेस्तान नामक एक प्राचीन ईरानी भाषा में लिखा गया था।"
    },
    {
        question: "'सुद्रेह' (Sudreh) क्या है?",
        answers: [
            { text: "एक प्रकार की टोपी", correct: false },
            { text: "एक पवित्र कमीज", correct: true },
            { text: "एक प्रकार का पवित्र धागा", correct: false },
            { text: "एक प्रकार का भोजन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुद्रेह' एक सफेद, सूती कमीज है जिसे पारसी लोग नाभजोट समारोह के बाद पहनते हैं, जो शुद्धता और धार्मिकता का प्रतीक है।"
    },
    {
        question: "पारसी धर्म के अनुसार, 'अंग्र मैन्यु' का क्या अर्थ है?",
        answers: [
            { text: "बुराई की आत्मा", correct: true },
            { text: "पवित्र आत्मा", correct: false },
            { text: "बुद्धिमान प्रभु", correct: false },
            { text: "अच्छा मन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंग्र मैन्यु' का अर्थ है 'बुरी आत्मा'।<br><br><i class='fa-solid fa-angles-right icon'></i> वह पारसी धर्म में अहुर मज़्दा का विरोधी है और बुराई, झूठ और अंधकार का प्रतीक है।"
    },
    {
        question: "पारसी धर्म में 'चिनवत ब्रिज' (Chinvat Bridge) का क्या अर्थ है?",
        answers: [
            { text: "एक पवित्र नदी", correct: false },
            { text: "एक पुल जो स्वर्ग और नर्क को जोड़ता है", correct: true },
            { text: "एक पर्वत", correct: false },
            { text: "एक पवित्र अग्नि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिनवत ब्रिज' को 'निर्णय का पुल' कहा जाता है, जहाँ आत्मा को उसके कर्मों के आधार पर स्वर्ग या नर्क भेजा जाता है।"
    },
    {
        question: "'अहुर' शब्द का अर्थ क्या है?",
        answers: [
            { text: "बुद्धि", correct: false },
            { text: "प्रभु", correct: true },
            { text: "सत्य", correct: false },
            { text: "प्रकाश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अहुर मज़्दा' में 'अहुर' का अर्थ 'प्रभु' है।"
    },
    {
        question: "पारसी धर्म में 'अतिश बहराम' (Atash Behram) क्या है?",
        answers: [
            { text: "एक प्रकार की प्रार्थना", correct: false },
            { text: "सबसे पवित्र अग्नि मंदिर", correct: true },
            { text: "एक प्रकार का भोजन", correct: false },
            { text: "एक प्रकार का त्यौहार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अतिश बहराम' पारसी अग्नि मंदिरों की सर्वोच्च श्रेणी है, जिसमें अग्नि को विशेष अनुष्ठानों के बाद 16 विभिन्न स्रोतों से प्रज्वलित किया जाता है।"
    },
    {
        question: "भारत में 'टाटा समूह' की स्थापना किस प्रसिद्ध पारसी ने की थी?",
        answers: [
            { text: "जमशेदजी टाटा (Jamsetji Tata)", correct: true },
            { text: "रतन टाटा", correct: false },
            { text: "जे.आर.डी. टाटा", correct: false },
            { text: "जमशेदजी जीजीभोय", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमशेदजी टाटा भारत के एक महान उद्योगपति थे जिन्होंने 19वीं सदी में टाटा समूह की स्थापना की थी।"
    },
    {
        question: "पारसी धर्म में, 'अमेषा स्पेंता' में से 'अर्मैती' (Armaiti) किसका प्रतिनिधित्व करता है?",
        answers: [
            { text: "भक्ति", correct: true },
            { text: "स्वास्थ्य", correct: false },
            { text: "अमरता", correct: false },
            { text: "शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्मैती' का अर्थ है 'पवित्र भक्ति'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अहुर मज़्दा की एक दिव्य शक्ति है, जो भक्ति और पृथ्वी की उर्वरता का प्रतीक है।"
    },
    {
        question: "पारसी धर्म में, 'बुराई' को दूर करने के लिए कौन-सा अनुष्ठान किया जाता है?",
        answers: [
            { text: "जश्ने", correct: false },
            { text: "नवरोज", correct: false },
            { text: "प्रार्थना", correct: false },
            { text: "ये सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रार्थना, धार्मिक समारोह और अच्छे कर्मों के माध्यम से पारसी धर्म में बुराई को दूर करने का प्रयास किया जाता है।"
    },
    {
        question: "'फरवहर' प्रतीक में, निचले हिस्से में तीन पंख किसका प्रतिनिधित्व करते हैं?",
        answers: [
            { text: "अच्छे विचार, अच्छे शब्द, अच्छे कर्म", correct: false },
            { text: "बुरे विचार, बुरे शब्द, बुरे कर्म", correct: true },
            { text: "जीवन, मृत्यु, पुनरुत्थान", correct: false },
            { text: "अतीत, वर्तमान, भविष्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फरवहर के निचले हिस्से में तीन पंख बुरे विचारों, बुरे शब्दों और बुरे कर्मों को दर्शाते हैं, जिनसे बचना चाहिए।"
    },
    {
        question: "'अवेस्ता' के किस भाग में जरथुस्त्र के उपदेश और अहुर मज़्दा की स्तुतियाँ हैं?",
        answers: [
            { text: "गाथा (Gathas)", correct: true },
            { text: "यस्ना", correct: false },
            { text: "याश्त", correct: false },
            { text: "विदेवदत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाथाएं अवेस्ता का सबसे प्राचीन और पवित्र हिस्सा हैं और माना जाता है कि ये स्वयं जरथुस्त्र द्वारा रची गई थीं।"
    },
    {
        question: "पारसी धर्म में 'अग्नि' की पूजा किस दिन की जाती है?",
        answers: [
            { text: "केवल त्योहारों पर", correct: false },
            { text: "केवल सोमवार को", correct: false },
            { text: "दैनिक", correct: true },
            { text: "साप्ताहिक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी लोग अग्नि मंदिर में दैनिक रूप से प्रार्थना करते हैं और पवित्र अग्नि की देखभाल करते हैं।"
    },
    {
        question: "'अहुर मज़्दा' द्वारा बनाई गई सात कृतियों में 'अग्नि' का संबंध किस अमेश स्पेंता से है?",
        answers: [
            { text: "अशा वहिश्ता", correct: true },
            { text: "खशथ्रा वैर्या", correct: false },
            { text: "हउर्वातात", correct: false },
            { text: "वोहू मनह", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अशा वहिश्ता' (सत्य और पवित्रता) अग्नि की रचना से जुड़ा हुआ है, क्योंकि अग्नि को पवित्रता और सत्य का प्रतीक माना जाता है।"
    },
    {
        question: "भारत में पारसी समुदाय के आगमन को कौन-सा ऐतिहासिक ग्रंथ वर्णित करता है?",
        answers: [
            { text: "अवेस्ता", correct: false },
            { text: "पुराण", correct: false },
            { text: "किस्सा-ए-संजान (Qissa-i Sanjan)", correct: true },
            { text: "शाहनामा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किस्सा-ए-संजान' 16वीं शताब्दी में लिखी गई एक फारसी कविता है जो ईरान से भारत में पारसी समुदाय के आगमन और उनके प्रारंभिक इतिहास का वर्णन करती है।"
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