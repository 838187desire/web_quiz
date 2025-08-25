const questions = [
    {
        topHeading: "सामवेद पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.54)"
    },
    {
        question: "सामवेद के 'ब्राह्मण' ग्रंथ का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "देवताओं की प्रार्थना करना", correct: false },
            { text: "यज्ञ के मंत्रों की व्याख्या करना", correct: true },
            { text: "जादू-टोना और औषधि का वर्णन", correct: false },
            { text: "इतिहास और कहानियाँ सुनाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राह्मण ग्रंथ वेदों के मंत्रों और यज्ञों के कर्मकांडों की विस्तृत व्याख्या करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> सामवेद के ब्राह्मणों का मुख्य उद्देश्य भी सामगान के नियमों और यज्ञों का वर्णन करना है।"
    },
    {
        question: "सामवेद में वर्णित 'उद्गीथ' का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक प्रकार का यज्ञ", correct: false },
            { text: "एक प्रकार का हथियार", correct: false },
            { text: "एक प्रकार का गायन या मंत्र", correct: true },
            { text: "एक प्रकार का पुरोहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उद्गीथ' सामवेद के मंत्रों के गायन का एक विशेष रूप है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'छान्दोग्य उपनिषद' में 'उद्गीथ' को 'ॐ' के रूप में ब्रह्म का प्रतीक माना गया है।"
    },
    {
        question: "'केन उपनिषद' का नाम किस शब्द से लिया गया है?",
        answers: shuffle([
            { text: "केन (अर्थात् 'किसके द्वारा')", correct: true },
            { text: "कैन (अर्थात् 'गाना')", correct: false },
            { text: "केनका (अर्थात् 'ज्ञान')", correct: false },
            { text: "केन (अर्थात् 'ब्रह्म')", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'केन उपनिषद' का पहला शब्द 'केन' ही है, जिसका अर्थ है 'किसके द्वारा'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उपनिषद इस प्रश्न के साथ शुरू होता है कि किसके द्वारा मन, प्राण और वाणी को संचालित किया जाता है।"
    },
    {
        question: "सामवेद के अनुसार, यज्ञ के दौरान 'सोम' को कौन से पुरोहित चढ़ाते थे?",
        answers: shuffle([
            { text: "होता", correct: false },
            { text: "उद्गाता", correct: false },
            { text: "अध्वर्यु", correct: true },
            { text: "ब्रह्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद से संबंधित अध्वर्यु पुरोहित का कार्य यज्ञ के भौतिक कार्यों को सम्पन्न करना था, जिसमें सोम रस को तैयार करना और अग्नि में उसकी आहुति देना शामिल था।"
    },
    {
        question: "सामवेद की किस शाखा में 'जैमिनीय ब्राह्मण' पाया जाता है?",
        answers: shuffle([
            { text: "कौथुम", correct: false },
            { text: "राणायनीय", correct: false },
            { text: "जैमिनीय", correct: true },
            { text: "वाजसनेयी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैमिनीय ब्राह्मण, जैमिनीय आरण्यक और जैमिनीय उपनिषद ब्राह्मण सभी सामवेद की जैमिनीय शाखा से संबंधित हैं।"
    },
    {
        question: "'छान्दोग्य उपनिषद' में किस नदी का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सरस्वती", correct: true },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छान्दोग्य उपनिषद में सरस्वती नदी को ज्ञान और पवित्रता का प्रतीक माना गया है।"
    },
    {
        question: "सामवेद में 'गान' की कितनी मुख्य पुस्तकें हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद में 'सामगान' की चार मुख्य पुस्तकें हैं: ग्रामगेय गान (या वेयगान), आरण्यगेय गान, ऊह गान और ऊह्य गान।"
    },
    {
        question: "सामवेद की कौन सी शाखा 'तलवकार' शाखा के नाम से भी जानी जाती है?",
        answers: shuffle([
            { text: "जैमिनीय", correct: true },
            { text: "राणायनीय", correct: false },
            { text: "कौथुम", correct: false },
            { text: "इन सभी का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद की जैमिनीय शाखा को 'तलवकार' शाखा भी कहा जाता है, क्योंकि तलवकार नामक ऋषि इसके प्रवर्तक माने जाते हैं।"
    },
    {
        question: "सामवेद के किस उपनिषद में 'अग्निविद्या' का वर्णन है?",
        answers: shuffle([
            { text: "केन उपनिषद", correct: false },
            { text: "छान्दोग्य उपनिषद", correct: true },
            { text: "बृहदारण्यक उपनिषद", correct: false },
            { text: "मुण्डक उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छान्दोग्य उपनिषद में 'उद्दालक आरुणि' और 'श्वेतकेतु' के संवाद में अग्नि, जल और पृथ्वी के तत्वों पर आधारित सृष्टि रचना के सिद्धांतों का वर्णन है, जिसे 'अग्नि विद्या' के रूप में भी समझा जा सकता है।"
    },
    {
        question: "'ताण्ड्य ब्राह्मण' में वर्णित 'व्रत्यस्तोम' यज्ञ का उद्देश्य क्या था?",
        answers: shuffle([
            { text: "देवताओं को प्रसन्न करना", correct: false },
            { text: "अच्छी फसल के लिए", correct: false },
            { text: "समाज से बहिष्कृत लोगों को पुनः समाज में शामिल करना", correct: true },
            { text: "राजा का अभिषेक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्रत्यस्तोम' एक विशेष यज्ञ था जिसका उद्देश्य उन लोगों को शुद्ध करना था जो वैदिक अनुष्ठानों से दूर हो गए थे और उन्हें फिर से वैदिक समाज में स्वीकार करना था।"
    },
    {
        question: "सामवेद का कौन सा भाग 'अग्निष्टोम' नामक यज्ञ का विस्तृत वर्णन करता है?",
        answers: shuffle([
            { text: "पूर्वार्चिक", correct: false },
            { text: "उत्तरार्चिक", correct: false },
            { text: "पंचविंश ब्राह्मण", correct: true },
            { text: "जैमिनीय उपनिषद ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंचविंश ब्राह्मण में सोमयज्ञ, विशेषकर अग्निष्टोम यज्ञ, की विधि और महत्व का विस्तृत वर्णन है।"
    },
    {
        question: "सामवेद में कुल कितने मंत्र हैं (पुनरावृत्ति के बिना)?",
        answers: shuffle([
            { text: "1000", correct: false },
            { text: "1549", correct: true },
            { text: "1875", correct: false },
            { text: "1200", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद संहिता में कुल 1875 मंत्र हैं, लेकिन इनमें से 1549 ही मूल मंत्र हैं, बाकी पुनरावृत्ति हैं।"
    },
    {
        question: "सामवेद में कुल कितने 'सामन' हैं?",
        answers: shuffle([
            { text: "लगभग 1000", correct: false },
            { text: "लगभग 1875", correct: true },
            { text: "लगभग 2000", correct: false },
            { text: "लगभग 3000", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद संहिता में कुल 1875 मंत्र हैं, जिनमें से अधिकांश सामन हैं।"
    },
    {
        question: "सामवेद का कौन सा ब्राह्मण ग्रंथ 'महाब्राह्मण' के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "ताण्ड्य ब्राह्मण", correct: true },
            { text: "षड्विंश ब्राह्मण", correct: false },
            { text: "जैमिनीय ब्राह्मण", correct: false },
            { text: "वंश ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताण्ड्य ब्राह्मण को ही उसकी विशालता के कारण 'पंचविंश ब्राह्मण' या 'महाब्राह्मण' भी कहते हैं।"
    },
    {
        question: "'छान्दोग्य उपनिषद' में 'त्रिलोक विद्या' का वर्णन किससे संबंधित है?",
        answers: shuffle([
            { text: "तीन प्रमुख देवताओं का ज्ञान", correct: false },
            { text: "तीन लोकों (पृथ्वी, अंतरिक्ष, स्वर्ग) का ज्ञान", correct: true },
            { text: "तीन वेदों का ज्ञान", correct: false },
            { text: "तीन आश्रमों का ज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिलोक विद्या' में तीनों लोकों के सार और उनके बीच के संबंधों का दार्शनिक वर्णन है।"
    },
    {
        question: "सामवेद का वह पुरोहित जो यज्ञ में 'स्तोभ' नामक विशेष ध्वनि का प्रयोग करता था, क्या कहलाता था?",
        answers: shuffle([
            { text: "होता", correct: false },
            { text: "उद्गाता", correct: false },
            { text: "प्रस्तोता", correct: true },
            { text: "ब्रह्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रस्तोता' उद्गाता का सहायक पुरोहित था जो यज्ञ की शुरुआत में 'ॐ' का घोष और 'स्तोभ' नामक विशेष ध्वनियों का प्रयोग करता था।"
    },
    {
        question: "सामवेद का कौन सा प्रमुख उपनिषद है?",
        answers: shuffle([
            { text: "ईश उपनिषद", correct: false },
            { text: "कठ उपनिषद", correct: false },
            { text: "बृहदारण्यक उपनिषद", correct: false },
            { text: "छान्दोग्य उपनिषद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छान्दोग्य उपनिषद सामवेद का सबसे महत्वपूर्ण और विशाल उपनिषद है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अलावा, केन उपनिषद भी सामवेद से संबंधित है।"
    },
    {
        question: "सामवेद का सबसे प्राचीन ब्राह्मण ग्रंथ कौन सा है?",
        answers: shuffle([
            { text: "ताण्ड्य ब्राह्मण", correct: true },
            { text: "षड्विंश ब्राह्मण", correct: false },
            { text: "जैमिनीय ब्राह्मण", correct: false },
            { text: "वंश ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताण्ड्य ब्राह्मण सामवेद का सबसे प्राचीन और सबसे विशाल ब्राह्मण ग्रंथ है।"
    },
    {
        question: "सामवेद के 'षड्विंश ब्राह्मण' का एक भाग 'अद्भुत ब्राह्मण' किस विषय पर केंद्रित है?",
        answers: shuffle([
            { text: "राजाओं की वंशावली", correct: false },
            { text: "प्रायश्चित और अपशकुन का शमन", correct: true },
            { text: "यज्ञ की विधि", correct: false },
            { text: "सृष्टि की उत्पत्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अद्भुत ब्राह्मण' में उन अपशकुनों का वर्णन है जो यज्ञ के दौरान हो सकते थे, और उन्हें शांत करने के लिए प्रायश्चित अनुष्ठानों का उल्लेख है।"
    },
    {
        question: "सामवेद के 'पूर्वार्चिक' में कितने प्रपाठक (अध्याय) हैं?",
        answers: shuffle([
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false },
            { text: "छह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वार्चिक में चार प्रपाठक हैं, जिनमें अग्नि, इंद्र, सोम और पवमान से संबंधित मंत्रों का संग्रह है।"
    },
    {
        question: "सामवेद के किस उपनिषद में 'त्रिवृत्करण' का सिद्धांत वर्णित है?",
        answers: shuffle([
            { text: "कठ उपनिषद", correct: false },
            { text: "केन उपनिषद", correct: false },
            { text: "छान्दोग्य उपनिषद", correct: true },
            { text: "बृहदारण्यक उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिवृत्करण' का सिद्धांत छान्दोग्य उपनिषद में मिलता है, जो सृष्टि के तीन तत्वों (अग्नि, जल, पृथ्वी) के संयोजन से संबंधित है।"
    },
    {
        question: "सामवेद में 'प्रस्तोता' पुरोहित का क्या कार्य था?",
        answers: shuffle([
            { text: "सामगान को प्रारंभ करना", correct: false },
            { text: "उद्गाता की सहायता करना", correct: false },
            { text: "'स्तोत्र' का पाठ करना", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रस्तोता उद्गाता का एक सहायक पुरोहित था जो सामगान को प्रारंभ करता था और विशेष 'स्तोत्रों' का पाठ भी करता था।"
    },
    {
        question: "सामवेद का कौन सा खंड 'आरण्यागं' कहलाता है?",
        answers: shuffle([
            { text: "पूर्वार्चिक", correct: false },
            { text: "उत्तरार्चिक", correct: false },
            { text: "आरण्यगेय गान", correct: true },
            { text: "ग्रामगेय गान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद के मंत्रों का वह भाग जो जंगल में गाया जाता था, उसे 'आरण्यगेय गान' कहते हैं, जिसे 'आरण्यागं' भी कहा जाता है।"
    },
    {
        question: "सामवेद में 'रथंतर सामन' का संबंध किस देवता से है?",
        answers: shuffle([
            { text: "इंद्र", correct: true },
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रथंतर सामन' एक विशेष सामगान है जिसका संबंध इंद्र देवता से है और इसे उनकी शक्ति और विजय के लिए गाया जाता था।"
    },
    {
        question: "सामवेद की कौन सी शाखा का प्रचलन गुजरात और उत्तर भारत में है?",
        answers: shuffle([
            { text: "कौथुम", correct: true },
            { text: "राणायनीय", correct: false },
            { text: "जैमिनीय", correct: false },
            { text: "इन सभी का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कौथुम शाखा सामवेद की सबसे प्रसिद्ध शाखा है और इसका प्रचलन गुजरात, उत्तर प्रदेश और अन्य उत्तर भारतीय क्षेत्रों में है।"
    },
    {
        question: "सामवेद के किस आरण्यक में 'आत्मा' और 'ब्रह्म' की अभिन्नता का वर्णन है?",
        answers: shuffle([
            { text: "ऐतरेय आरण्यक", correct: false },
            { text: "जैमिनीय आरण्यक", correct: false },
            { text: "तलवकार आरण्यक", correct: true },
            { text: "कौषीतकि आरण्यक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तलवकार आरण्यक, जिसे जैमिनीय उपनिषद ब्राह्मण भी कहते हैं, में आत्मा और ब्रह्म की एकता पर दार्शनिक विचार प्रस्तुत किए गए हैं।"
    },
    {
        question: "सामवेद का कौन सा भाग 'अरण्यगेय गान' कहलाता है?",
        answers: shuffle([
            { text: "गाँव में गाया जाने वाला गान", correct: false },
            { text: "जंगल में गाया जाने वाला गान", correct: true },
            { text: "यज्ञ के समय गाया जाने वाला गान", correct: false },
            { text: "घरेलू अनुष्ठानों में गाया जाने वाला गान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद के 'आरण्यक' खंड के मंत्रों को जंगल में एकांत में गाया जाता था, इसलिए इसे 'आरण्यगेय गान' कहते हैं।"
    },
    {
        question: "सामवेद का कौन सा ब्राह्मण ग्रंथ राजाओं की वंशावली का वर्णन करता है?",
        answers: shuffle([
            { text: "ताण्ड्य ब्राह्मण", correct: false },
            { text: "षड्विंश ब्राह्मण", correct: false },
            { text: "वंश ब्राह्मण", correct: true },
            { text: "जैमिनीय ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वंश ब्राह्मण' सामवेद के ऋषियों और गुरु-शिष्य परंपराओं की वंशावली का वर्णन करता है।"
    },
    {
        question: "सामवेद में 'सोमयज्ञ' के अलावा किस अन्य यज्ञ का वर्णन है?",
        answers: shuffle([
            { text: "अग्निष्टोम", correct: true },
            { text: "राजसूय", correct: false },
            { text: "वाजपेय", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद के ब्राह्मण ग्रंथों में सोमयज्ञ का विस्तृत वर्णन है, और 'अग्निष्टोम' सोमयज्ञ का ही एक प्रमुख प्रकार है।"
    },
    {
        question: "सामवेद में 'उद्गाता' के सहायक पुरोहित 'प्रस्तोता' का क्या कार्य था?",
        answers: shuffle([
            { text: "यज्ञ के मंत्रों को लिखना", correct: false },
            { text: "सामगान का प्रारंभिक भाग गाना", correct: true },
            { text: "यज्ञ की वेदी बनाना", correct: false },
            { text: "यज्ञ का निरीक्षण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रस्तोता' उद्गाता के सहायक के रूप में सामगान की शुरुआत करता था।"
    },
    {
        question: "'ताण्ड्य ब्राह्मण' में 'व्रत्यस्तोम' यज्ञ का वर्णन मिलता है, जिसका संबंध किससे था?",
        answers: shuffle([
            { text: "राजाओं के अभिषेक से", correct: false },
            { text: "शुद्धिकरण अनुष्ठानों से", correct: true },
            { text: "फसल की वृद्धि से", correct: false },
            { text: "युद्ध में विजय से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्रत्यस्तोम' उन लोगों के लिए एक शुद्धिकरण यज्ञ था जो वैदिक अनुष्ठानों से दूर हो गए थे।"
    },
    {
        question: "सामवेद की कौन सी शाखा का 'उपनिषद' 'केन उपनिषद' है?",
        answers: shuffle([
            { text: "कौथुम", correct: false },
            { text: "राणायनीय", correct: false },
            { text: "तलवकार (जैमिनीय)", correct: true },
            { text: "वाजसनेयी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन उपनिषद जैमिनीय शाखा के तलवकार ब्राह्मण का एक भाग है, इसलिए इसे तलवकार उपनिषद भी कहते हैं।"
    },
    {
        question: "'कौथुम शाखा' का प्रचलन किस क्षेत्र में अधिक है?",
        answers: shuffle([
            { text: "दक्षिण भारत", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "गुजरात", correct: true },
            { text: "पूर्वी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद की कौथुम शाखा का प्रचलन मुख्य रूप से गुजरात और पश्चिमी भारत के अन्य क्षेत्रों में है।"
    },
    {
        question: "सामवेद के किस भाग में 'सोमयज्ञ' के दौरान गाये जाने वाले विशिष्ट मंत्रों का संग्रह है?",
        answers: shuffle([
            { text: "पूर्वार्चिक", correct: false },
            { text: "उत्तरार्चिक", correct: true },
            { text: "आरण्यक", correct: false },
            { text: "गान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तरार्चिक में सोमयज्ञ के विभिन्न अनुष्ठानों के लिए विशेष रूप से गाये जाने वाले मंत्रों का संग्रह है।"
    },
    {
        question: "सामवेद का कौन सा खंड 'अद्वैत' दर्शन के सिद्धांतों को प्रस्तुत करता है?",
        answers: shuffle([
            { text: "छान्दोग्य उपनिषद", correct: true },
            { text: "ताण्ड्य ब्राह्मण", correct: false },
            { text: "वंश ब्राह्मण", correct: false },
            { text: "षड्विंश ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छान्दोग्य उपनिषद 'तत् त्वम् असि' (वह तुम हो) जैसे महावाक्यों के माध्यम से आत्मा और ब्रह्म की एकता (अद्वैत) का सिद्धांत प्रस्तुत करता है।"
    },
    {
        question: "सामवेद का कौन सा ब्राह्मण ग्रंथ 'अद्भुत ब्राह्मण' के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "ताण्ड्य ब्राह्मण", correct: false },
            { text: "षड्विंश ब्राह्मण", correct: true },
            { text: "जैमिनीय ब्राह्मण", correct: false },
            { text: "वंश ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> षड्विंश ब्राह्मण का एक भाग 'अद्भुत ब्राह्मण' कहलाता है, जिसमें प्रायश्चित और अपशकुन निवारण का वर्णन है।"
    },
    {
        question: "सामवेद के अनुसार, यज्ञ के दौरान 'सोम' का रस कौन तैयार करता था?",
        answers: shuffle([
            { text: "उद्गाता", correct: false },
            { text: "होता", correct: false },
            { text: "अध्वर्यु", correct: true },
            { text: "ब्रह्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्वर्यु' पुरोहित यज्ञ के भौतिक कार्यों का प्रभारी होता था, जिसमें सोम को पीसकर उसका रस निकालना भी शामिल था।"
    },
    {
        question: "सामवेद की कौन सी शाखा का प्रचलन तमिलनाडु और केरल में है?",
        answers: shuffle([
            { text: "कौथुम", correct: false },
            { text: "राणायनीय", correct: false },
            { text: "जैमिनीय", correct: true },
            { text: "शौनक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैमिनीय शाखा का प्रचलन मुख्य रूप से कर्नाटक, तमिलनाडु और केरल जैसे दक्षिण भारतीय राज्यों में है।"
    },
    {
        question: "'सामगान' की कौन सी शैली गाँव या बस्ती में गाई जाती थी?",
        answers: shuffle([
            { text: "आरण्यगेय गान", correct: false },
            { text: "ग्रामगेय गान", correct: true },
            { text: "ऊह गान", correct: false },
            { text: "ऊह्य गान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्रामगेय गान' वह सामगान था जिसका गायन गाँव या बस्ती में, लोगों के बीच किया जाता था।"
    },
    {
        question: "सामवेद का वह पुरोहित जो यज्ञ की शुरुआत में 'स्तोत्र' का पाठ करता था, क्या कहलाता था?",
        answers: shuffle([
            { text: "होता", correct: false },
            { text: "उद्गाता", correct: false },
            { text: "प्रस्तोता", correct: true },
            { text: "ब्रह्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रस्तोता' उद्गाता का सहायक होता था और सामगान के पहले भाग को गाता था, जिसे 'स्तोत्र' कहते हैं।"
    },
    {
        question: "सामवेद का कौन सा प्रमुख उपनिषद है?",
        answers: shuffle([
            { text: "ईश उपनिषद", correct: false },
            { text: "कठ उपनिषद", correct: false },
            { text: "बृहदारण्यक उपनिषद", correct: false },
            { text: "छान्दोग्य उपनिषद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छान्दोग्य उपनिषद सामवेद का सबसे महत्वपूर्ण और विशाल उपनिषद है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अलावा, केन उपनिषद भी सामवेद से संबंधित है।"
    },
    {
        question: "सामवेद में कुल कितने मंत्र हैं (पुनरावृत्ति के बिना)?",
        answers: shuffle([
            { text: "1000", correct: false },
            { text: "1549", correct: true },
            { text: "1875", correct: false },
            { text: "1200", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद संहिता में कुल 1875 मंत्र हैं, लेकिन इनमें से 1549 ही मूल मंत्र हैं, बाकी पुनरावृत्ति हैं।"
    },
    {
        question: "सामवेद का कौन सा भाग 'अग्निष्टोम' नामक यज्ञ का विस्तृत वर्णन करता है?",
        answers: shuffle([
            { text: "पूर्वार्चिक", correct: false },
            { text: "उत्तरार्चिक", correct: false },
            { text: "पंचविंश ब्राह्मण", correct: true },
            { text: "जैमिनीय उपनिषद ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंचविंश ब्राह्मण में सोमयज्ञ, विशेषकर अग्निष्टोम यज्ञ, की विधि और महत्व का विस्तृत वर्णन है।"
    },
    {
        question: "सामवेद के मंत्रों का पाठ 'अर्चिक' कहलाता है, जबकि उनके संगीतबद्ध रूप को क्या कहते हैं?",
        answers: shuffle([
            { text: "गान", correct: true },
            { text: "स्तोत्र", correct: false },
            { text: "सामन", correct: false },
            { text: "संहिता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद के मंत्रों का पाठ 'अर्चिक' कहलाता है, जबकि उन्हें संगीतबद्ध रूप में 'गान' कहा जाता है।"
    },
    {
        question: "सामवेद के 'छान्दोग्य उपनिषद' में 'सत्यकाम जाबाल' की कहानी का क्या महत्व है?",
        answers: shuffle([
            { text: "यह बताता है कि ज्ञान केवल ब्राह्मणों के लिए है।", correct: false },
            { text: "यह बताता है कि ज्ञान जन्म से नहीं, बल्कि सत्यनिष्ठा से प्राप्त होता है।", correct: true },
            { text: "यह राजाओं की महिमा का वर्णन करता है।", correct: false },
            { text: "यह यज्ञ के महत्व को बताता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सत्यकाम जाबाल अपनी माता के सत्य बोलने के कारण ही ज्ञान प्राप्त कर पाता है, जो यह दर्शाता है कि ज्ञान जन्म के बजाय सत्यनिष्ठा पर निर्भर है।"
    },
    {
        question: "सामवेद का कौन सा भाग 'आरण्यक' कहलाता है?",
        answers: shuffle([
            { text: "जैमिनीय आरण्यक", correct: false },
            { text: "तलवकार आरण्यक", correct: false },
            { text: "दोनों", correct: true },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद से संबंधित दो प्रमुख आरण्यक ग्रंथ हैं: जैमिनीय आरण्यक और तलवकार आरण्यक।"
    },
    {
        question: "सामवेद का 'पंचविंश ब्राह्मण' किस यज्ञ का विस्तृत वर्णन करता है?",
        answers: shuffle([
            { text: "अग्निष्टोम", correct: true },
            { text: "वाजपेय", correct: false },
            { text: "राजसूय", correct: false },
            { text: "अश्वमेध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचविंश ब्राह्मण' में सोमयज्ञ, विशेष रूप से अग्निष्टोम यज्ञ, की विधि और महत्व का विस्तार से वर्णन है।"
    },
    {
        question: "'छान्दोग्य उपनिषद' में वर्णित 'उद्दालक आरुणि' और 'श्वेतकेतु' के संवाद में, पिता अपने पुत्र को किस महावाक्य का उपदेश देते हैं?",
        answers: shuffle([
            { text: "अहं ब्रह्मास्मि", correct: false },
            { text: "तत् त्वम् असि", correct: true },
            { text: "प्रज्ञानं ब्रह्म", correct: false },
            { text: "अयम् आत्मा ब्रह्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तत् त्वम् असि' (वह तुम हो) का महावाक्य छान्दोग्य उपनिषद का सबसे प्रसिद्ध और केंद्रीय उपदेश है, जो आत्मा और ब्रह्म की एकता को दर्शाता है।"
    },
    {
        question: "सामवेद के मंत्रों का गान करने वाला पुरोहित क्या कहलाता था?",
        answers: shuffle([
            { text: "होता", correct: false },
            { text: "उद्गाता", correct: true },
            { text: "अध्वर्यु", correct: false },
            { text: "ब्रह्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उद्गाता' का अर्थ है 'गायन करने वाला'।<br><br><i class='fa-solid fa-angles-right icon'></i> वह सामवेद के मंत्रों का गायन करके यज्ञ को संपन्न कराता था।"
    },
    {
        question: "सामवेद के किस उपनिषद में 'केन' शब्द का अर्थ 'किसके द्वारा' है?",
        answers: shuffle([
            { text: "कठ उपनिषद", correct: false },
            { text: "केन उपनिषद", correct: true },
            { text: "मुंडक उपनिषद", correct: false },
            { text: "मांडूक्य उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन उपनिषद का नाम ही 'केन' शब्द से पड़ा है, जिसका अर्थ 'किसके द्वारा' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उपनिषद इस प्रश्न के साथ शुरू होता है कि किसके द्वारा मन, प्राण और वाणी को संचालित किया जाता है।"
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