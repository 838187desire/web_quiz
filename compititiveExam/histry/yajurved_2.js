const questions = [
    {
        topHeading: "यजुर्वेद पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.52)"
    },
    {
        question: "यजुर्वेद में किस यज्ञ को 'राज्याभिषेक' से संबंधित माना गया है?",
        answers: shuffle([
            { text: "अश्वमेध", correct: false },
            { text: "वाजपेय", correct: false },
            { text: "राजसूय", correct: true },
            { text: "अग्निष्टोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजसूय यज्ञ राजा के अभिषेक (राज्याभिषेक) के लिए किया जाता था, जो उसके संप्रभुत्व का प्रतीक था।"
    },
    {
        question: "यजुर्वेद में 'पशुबलि' (पशुओं का बलिदान) का उल्लेख किस संदर्भ में मिलता है?",
        answers: shuffle([
            { text: "केवल अश्वमेध यज्ञ में", correct: false },
            { text: "केवल राजसूय यज्ञ में", correct: false },
            { text: "विभिन्न प्रकार के यज्ञों में", correct: true },
            { text: "इसका कोई उल्लेख नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में अश्वमेध, राजसूय आदि जैसे कई यज्ञों में पशुबलि का विस्तृत वर्णन मिलता है।"
    },
    {
        question: "'शतपथ ब्राह्मण' किस वेद से संबंधित है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शतपथ ब्राह्मण शुक्ल यजुर्वेद का सबसे महत्वपूर्ण और विशाल ब्राह्मण ग्रंथ है।"
    },
    {
        question: "यजुर्वेद में 'यज्ञायुध' (Yajnayudha) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "यज्ञ में प्रयुक्त हथियार", correct: false },
            { text: "यज्ञ के लिए बनाए गए औजार", correct: true },
            { text: "यज्ञ में प्रयुक्त अग्नि", correct: false },
            { text: "यज्ञ का स्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यज्ञायुध' का अर्थ है यज्ञ में उपयोग होने वाले उपकरण और औजार, जैसे वेदी, चम्मच आदि।"
    },
    {
        question: "'तैत्तिरीय ब्राह्मण' किस वेद से संबंधित है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैत्तिरीय ब्राह्मण कृष्ण यजुर्वेद का एक प्रमुख ब्राह्मण ग्रंथ है।"
    },
    {
        question: "यजुर्वेद में 'अग्निहोत्र' (Agnihotra) का क्या अर्थ है?",
        answers: shuffle([
            { text: "अग्नि का दान", correct: false },
            { text: "अग्नि की पूजा", correct: false },
            { text: "अग्नि को प्रसन्न करने के लिए दैनिक यज्ञ", correct: true },
            { text: "अग्नि का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्निहोत्र एक दैनिक यज्ञ था जो गृहस्थों द्वारा सुबह और शाम को किया जाता था, जिसमें अग्नि को घी और अनाज अर्पित किया जाता था।"
    },
    {
        question: "'शतपथ ब्राह्मण' में 'पुनर्जन्म' के सिद्धांत का सबसे पहले वर्णन मिलता है। यह किस वेद से संबंधित है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शतपथ ब्राह्मण शुक्ल यजुर्वेद का ग्रंथ है, जिसमें 'पुनर्जन्म' और 'आत्मा की अमरता' जैसे सिद्धांतों का सबसे पहले विस्तृत वर्णन मिलता है।"
    },
    {
        question: "'मैत्रायणी संहिता' किस वेद की शाखा है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैत्रायणी संहिता कृष्ण यजुर्वेद की एक महत्वपूर्ण शाखा है।"
    },
    {
        question: "यजुर्वेद में 'यज्ञ' को किस रूप में माना जाता है?",
        answers: shuffle([
            { text: "केवल एक धार्मिक अनुष्ठान", correct: false },
            { text: "देवताओं को प्रसन्न करने का एकमात्र तरीका", correct: false },
            { text: "एक जटिल कर्मकांड", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में यज्ञ को एक जटिल कर्मकांड, देवताओं को प्रसन्न करने का साधन और धार्मिक जीवन का एक अभिन्न अंग माना गया है।"
    },
    {
        question: "'वाजपेय यज्ञ' का अर्थ क्या है?",
        answers: shuffle([
            { text: "शक्ति का पेय", correct: true },
            { text: "राजा का पेय", correct: false },
            { text: "देवताओं का पेय", correct: false },
            { text: "अमरत्व का पेय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाजपेय' का शाब्दिक अर्थ है 'शक्ति का पेय' या 'शक्ति का यज्ञ', जो राजा द्वारा अपनी शक्ति और समृद्धि बढ़ाने के लिए किया जाता था।"
    },
    {
        question: "'बृहदारण्यक उपनिषद' किस वेद का हिस्सा है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहदारण्यक उपनिषद शुक्ल यजुर्वेद का एक महत्वपूर्ण उपनिषद है, जो सबसे प्राचीन और सबसे विशाल उपनिषदों में से एक है।"
    },
    {
        question: "यजुर्वेद के किस उपनिषद में 'ओम' (ॐ) की महिमा का वर्णन है?",
        answers: shuffle([
            { text: "ईशावास्य उपनिषद", correct: false },
            { text: "कठ उपनिषद", correct: true },
            { text: "मुंडक उपनिषद", correct: false },
            { text: "मांडूक्य उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कठ उपनिषद यजुर्वेद का एक महत्वपूर्ण उपनिषद है जिसमें ओम (ॐ) को ईश्वर के प्रतीक के रूप में वर्णित किया गया है।"
    },
    {
        question: "यजुर्वेद में 'वेदी' (Vedi) का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक प्रकार का ग्रंथ", correct: false },
            { text: "यज्ञ का मंच या वेदी", correct: true },
            { text: "एक प्रकार का हथियार", correct: false },
            { text: "एक प्रकार का बर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में 'वेदी' का अर्थ है वह मंच या स्थान जहाँ यज्ञ और धार्मिक अनुष्ठान किए जाते थे।"
    },
    {
        question: "यजुर्वेद में 'अध्वर्यु' पुरोहित का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "मंत्रों का उच्चारण करना", correct: false },
            { text: "यज्ञ की वेदी बनाना और यज्ञ करना", correct: true },
            { text: "संगीत का पाठ करना", correct: false },
            { text: "सभी यज्ञों का निरीक्षण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अध्वर्यु पुरोहित यज्ञ से संबंधित सभी भौतिक कार्यों (जैसे वेदी बनाना, यज्ञ सामग्री तैयार करना) को सम्पन्न कराता था।"
    },
    {
        question: "'ईशावास्य उपनिषद' किस वेद से संबंधित है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईशावास्य उपनिषद शुक्ल यजुर्वेद का चालीसवां और अंतिम अध्याय है।"
    },
    {
        question: "किस वेद में 'अश्वमेध यज्ञ' और 'राजसूय यज्ञ' का विस्तृत वर्णन मिलता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में अश्वमेध, राजसूय, वाजपेय और अग्निहोत्र जैसे प्रमुख यज्ञों की विधि और मंत्रों का विस्तृत वर्णन है।"
    },
    {
        question: "यजुर्वेद के किस भाग को 'शुक्ल यजुर्वेद' कहा जाता है?",
        answers: shuffle([
            { text: "वह भाग जिसमें केवल मंत्र हैं", correct: true },
            { text: "वह भाग जिसमें मंत्र और व्याख्या दोनों हैं", correct: false },
            { text: "वह भाग जिसमें केवल कर्मकांड हैं", correct: false },
            { text: "वह भाग जिसमें केवल उपनिषद हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्ल यजुर्वेद का अर्थ है 'सफेद' या 'साफ' यजुर्वेद।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें केवल मंत्र और प्रार्थनाएं हैं, जिनकी व्याख्या ब्राह्मण ग्रंथों में की गई है।"
    },
    {
        question: "यजुर्वेद में किस प्रकार के ग्रंथ शामिल हैं?",
        answers: shuffle([
            { text: "केवल पद्य", correct: false },
            { text: "केवल गद्य", correct: false },
            { text: "गद्य और पद्य दोनों", correct: true },
            { text: "केवल गीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद एकमात्र ऐसा वेद है जो गद्य और पद्य दोनों में लिखा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें गद्य के रूप में यज्ञ संबंधी कर्मकांड और पद्य के रूप में मंत्र शामिल हैं।"
    },
    {
        question: "यजुर्वेद का मुख्य विषय क्या है?",
        answers: shuffle([
            { text: "प्रार्थनाएं और स्तुतियाँ", correct: false },
            { text: "धार्मिक अनुष्ठानों और यज्ञों के नियम", correct: true },
            { text: "संगीत और मंत्र", correct: false },
            { text: "जादू-टोना और औषधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद का शाब्दिक अर्थ है 'यज्ञ का ज्ञान'।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मुख्य विषय यज्ञों और धार्मिक अनुष्ठानों को सम्पन्न कराने के लिए आवश्यक मंत्रों और नियमों का संग्रह है।"
    },
    {
        question: "'यज्ञ' शब्द का सर्वप्रथम उल्लेख किस वेद में मिलता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: true },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि यज्ञ की विस्तृत विधि यजुर्वेद में है, लेकिन 'यज्ञ' शब्द का सबसे पहला उल्लेख ऋग्वेद में मिलता है।"
    },
    {
        question: "यजुर्वेद का एक प्रमुख कर्मकांड 'वाजपेय यज्ञ' किस उद्देश्य से किया जाता था?",
        answers: shuffle([
            { text: "राजा के अभिषेक के लिए", correct: false },
            { text: "शक्ति और समृद्धि के लिए", correct: true },
            { text: "पुत्र प्राप्ति के लिए", correct: false },
            { text: "युद्ध में विजय के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वाजपेय यज्ञ राजा द्वारा अपनी शक्ति और समृद्धि बढ़ाने के लिए किया जाता था, जिसमें एक रथ दौड़ का भी आयोजन होता था।"
    },
    {
        question: "यजुर्वेद में 'यूप' (Yupa) क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का बर्तन", correct: false },
            { text: "यज्ञ का स्तंभ", correct: true },
            { text: "एक प्रकार का फल", correct: false },
            { text: "यज्ञ की सामग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यूप' वह स्तंभ था जिससे यज्ञ के लिए पशु को बांधा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में इसकी स्थापना और विधि का विस्तृत वर्णन है।"
    },
    {
        question: "यजुर्वेद की कौन सी शाखा 'दार्शनिक' और 'अध्यात्मिक' विषयों पर अधिक ध्यान देती है?",
        answers: shuffle([
            { text: "कृष्ण यजुर्वेद", correct: true },
            { text: "शुक्ल यजुर्वेद", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्ण यजुर्वेद में मंत्रों के साथ-साथ गद्य में दार्शनिक और आध्यात्मिक व्याख्या भी दी गई है, जो इसे शुक्ल यजुर्वेद से अलग करती है।"
    },
    {
        question: "यजुर्वेद का 'कठ उपनिषद' किससे संबंधित है?",
        answers: shuffle([
            { text: "यज्ञ", correct: false },
            { text: "मृत्यु के बाद जीवन", correct: true },
            { text: "कृषि", correct: false },
            { text: "व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कठ उपनिषद में नचिकेता और यम के बीच का संवाद है, जिसमें मृत्यु के बाद जीवन और आत्मा के स्वरूप पर गहन चर्चा की गई है।"
    },
    {
        question: "'वाजसनेयी संहिता' किस वेद का पाठ है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाजसनेयी संहिता' शुक्ल यजुर्वेद की एक प्रमुख शाखा है।"
    },
    {
        question: "यजुर्वेद में 'यज्ञ' के दौरान किन देवताओं का आह्वान किया जाता था?",
        answers: shuffle([
            { text: "केवल इंद्र", correct: false },
            { text: "केवल अग्नि", correct: false },
            { text: "अग्नि, इंद्र, वरुण और अन्य", correct: true },
            { text: "केवल वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद के मंत्रों में विभिन्न देवताओं जैसे अग्नि, इंद्र, वरुण, सोम आदि का आह्वान किया जाता था ताकि वे यज्ञ को स्वीकार करें।"
    },
    {
        question: "यजुर्वेद में 'राजसूय यज्ञ' का क्या उद्देश्य था?",
        answers: shuffle([
            { text: "राजा का अभिषेक", correct: true },
            { text: "अच्छे मौसम के लिए", correct: false },
            { text: "युद्ध में जीत", correct: false },
            { text: "पुत्र प्राप्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजसूय यज्ञ राजा के अभिषेक (राज्याभिषेक) के लिए किया जाता था, जो उसके संप्रभुत्व का प्रतीक था।"
    },
    {
        question: "यजुर्वेद में 'अध्वर्यु' पुरोहित का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "मंत्रों का उच्चारण करना", correct: false },
            { text: "यज्ञ की वेदी बनाना और यज्ञ करना", correct: true },
            { text: "संगीत का पाठ करना", correct: false },
            { text: "सभी यज्ञों का निरीक्षण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अध्वर्यु पुरोहित यज्ञ से संबंधित सभी भौतिक कार्यों (जैसे वेदी बनाना, यज्ञ सामग्री तैयार करना) को सम्पन्न कराता था।"
    },
    {
        question: "'वाजपेय यज्ञ' का अर्थ क्या है?",
        answers: shuffle([
            { text: "शक्ति का पेय", correct: true },
            { text: "राजा का पेय", correct: false },
            { text: "देवताओं का पेय", correct: false },
            { text: "अमरत्व का पेय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाजपेय' का शाब्दिक अर्थ है 'शक्ति का पेय' या 'शक्ति का यज्ञ', जो राजा द्वारा अपनी शक्ति और समृद्धि बढ़ाने के लिए किया जाता था।"
    },
    {
        question: "यजुर्वेद में 'पशुबलि' (पशुओं का बलिदान) का उल्लेख किस संदर्भ में मिलता है?",
        answers: shuffle([
            { text: "केवल अश्वमेध यज्ञ में", correct: false },
            { text: "केवल राजसूय यज्ञ में", correct: false },
            { text: "विभिन्न प्रकार के यज्ञों में", correct: true },
            { text: "इसका कोई उल्लेख नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में अश्वमेध, राजसूय आदि जैसे कई यज्ञों में पशुबलि का विस्तृत वर्णन मिलता है।"
    },
    {
        question: "यजुर्वेद में 'यूप' (Yupa) क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का बर्तन", correct: false },
            { text: "यज्ञ का स्तंभ", correct: true },
            { text: "एक प्रकार का फल", correct: false },
            { text: "यज्ञ की सामग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यूप' वह स्तंभ था जिससे यज्ञ के लिए पशु को बांधा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में इसकी स्थापना और विधि का विस्तृत वर्णन है।"
    },
    {
        question: "यजुर्वेद की कौन सी शाखा 'दार्शनिक' और 'अध्यात्मिक' विषयों पर अधिक ध्यान देती है?",
        answers: shuffle([
            { text: "कृष्ण यजुर्वेद", correct: true },
            { text: "शुक्ल यजुर्वेद", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्ण यजुर्वेद में मंत्रों के साथ-साथ गद्य में दार्शनिक और आध्यात्मिक व्याख्या भी दी गई है, जो इसे शुक्ल यजुर्वेद से अलग करती है।"
    },
    {
        question: "यजुर्वेद का 'कठ उपनिषद' किससे संबंधित है?",
        answers: shuffle([
            { text: "यज्ञ", correct: false },
            { text: "मृत्यु के बाद जीवन", correct: true },
            { text: "कृषि", correct: false },
            { text: "व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कठ उपनिषद में नचिकेता और यम के बीच का संवाद है, जिसमें मृत्यु के बाद जीवन और आत्मा के स्वरूप पर गहन चर्चा की गई है।"
    },
    {
        question: "'वाजसनेयी संहिता' किस वेद का पाठ है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाजसनेयी संहिता' शुक्ल यजुर्वेद की एक प्रमुख शाखा है।"
    },
    {
        question: "'शतपथ ब्राह्मण' किस वेद से संबंधित है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शतपथ ब्राह्मण शुक्ल यजुर्वेद का सबसे महत्वपूर्ण और विशाल ब्राह्मण ग्रंथ है।"
    },
    {
        question: "'तैत्तिरीय ब्राह्मण' किस वेद से संबंधित है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैत्तिरीय ब्राह्मण कृष्ण यजुर्वेद का एक प्रमुख ब्राह्मण ग्रंथ है।"
    },
    {
        question: "यजुर्वेद में 'अग्निहोत्र' (Agnihotra) का क्या अर्थ है?",
        answers: shuffle([
            { text: "अग्नि का दान", correct: false },
            { text: "अग्नि की पूजा", correct: false },
            { text: "अग्नि को प्रसन्न करने के लिए दैनिक यज्ञ", correct: true },
            { text: "अग्नि का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्निहोत्र एक दैनिक यज्ञ था जो गृहस्थों द्वारा सुबह और शाम को किया जाता था, जिसमें अग्नि को घी और अनाज अर्पित किया जाता था।"
    },
    {
        question: "यजुर्वेद में 'वेदी' (Vedi) का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक प्रकार का ग्रंथ", correct: false },
            { text: "यज्ञ का मंच या वेदी", correct: true },
            { text: "एक प्रकार का हथियार", correct: false },
            { text: "एक प्रकार का बर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में 'वेदी' का अर्थ है वह मंच या स्थान जहाँ यज्ञ और धार्मिक अनुष्ठान किए जाते थे।"
    },
    {
        question: "यजुर्वेद में 'यज्ञायुध' (Yajnayudha) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "यज्ञ में प्रयुक्त हथियार", correct: false },
            { text: "यज्ञ के लिए बनाए गए औजार", correct: true },
            { text: "यज्ञ में प्रयुक्त अग्नि", correct: false },
            { text: "यज्ञ का स्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यज्ञायुध' का अर्थ है यज्ञ में उपयोग होने वाले उपकरण और औजार, जैसे वेदी, चम्मच आदि।"
    },
    {
        question: "'मैत्रायणी संहिता' किस वेद की शाखा है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैत्रायणी संहिता कृष्ण यजुर्वेद की एक महत्वपूर्ण शाखा है।"
    },
    {
        question: "किस वेद में 'अश्वमेध यज्ञ' और 'राजसूय यज्ञ' का विस्तृत वर्णन मिलता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में अश्वमेध, राजसूय, वाजपेय और अग्निहोत्र जैसे प्रमुख यज्ञों की विधि और मंत्रों का विस्तृत वर्णन है।"
    },
    {
        question: "यजुर्वेद के किस भाग को 'शुक्ल यजुर्वेद' कहा जाता है?",
        answers: shuffle([
            { text: "वह भाग जिसमें केवल मंत्र हैं", correct: true },
            { text: "वह भाग जिसमें मंत्र और व्याख्या दोनों हैं", correct: false },
            { text: "वह भाग जिसमें केवल कर्मकांड हैं", correct: false },
            { text: "वह भाग जिसमें केवल उपनिषद हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्ल यजुर्वेद का अर्थ है 'सफेद' या 'साफ' यजुर्वेद।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें केवल मंत्र और प्रार्थनाएं हैं, जिनकी व्याख्या ब्राह्मण ग्रंथों में की गई है।"
    },
    {
        question: "यजुर्वेद के किस भाग को 'कृष्ण यजुर्वेद' कहा जाता है?",
        answers: shuffle([
            { text: "वह भाग जिसमें केवल मंत्र हैं", correct: false },
            { text: "वह भाग जिसमें मंत्र और व्याख्या दोनों हैं", correct: true },
            { text: "वह भाग जिसमें केवल कर्मकांड हैं", correct: false },
            { text: "वह भाग जिसमें केवल उपनिषद हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्ण यजुर्वेद का अर्थ है 'काला' या 'अव्यवस्थित' यजुर्वेद।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें मंत्र और उनकी गद्य में व्याख्या एक साथ मिश्रित हैं।"
    },
    {
        question: "यजुर्वेद का मुख्य विषय क्या है?",
        answers: shuffle([
            { text: "प्रार्थनाएं और स्तुतियाँ", correct: false },
            { text: "धार्मिक अनुष्ठानों और यज्ञों के नियम", correct: true },
            { text: "संगीत और मंत्र", correct: false },
            { text: "जादू-टोना और औषधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद का शाब्दिक अर्थ है 'यज्ञ का ज्ञान'।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मुख्य विषय यज्ञों और धार्मिक अनुष्ठानों को सम्पन्न कराने के लिए आवश्यक मंत्रों और नियमों का संग्रह है।"
    },
    {
        question: "यजुर्वेद में किस प्रकार के ग्रंथ शामिल हैं?",
        answers: shuffle([
            { text: "केवल पद्य", correct: false },
            { text: "केवल गद्य", correct: false },
            { text: "गद्य और पद्य दोनों", correct: true },
            { text: "केवल गीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद एकमात्र ऐसा वेद है जो गद्य और पद्य दोनों में लिखा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें गद्य के रूप में यज्ञ संबंधी कर्मकांड और पद्य के रूप में मंत्र शामिल हैं।"
    },
    {
        question: "'ईशावास्य उपनिषद' किस वेद से संबंधित है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईशावास्य उपनिषद शुक्ल यजुर्वेद का चालीसवां और अंतिम अध्याय है।"
    },
    {
        question: "यजुर्वेद में 'पुरुष' और 'प्रकृति' के दार्शनिक सिद्धांतों का वर्णन किस उपनिषद में मिलता है?",
        answers: shuffle([
            { text: "ईशावास्य उपनिषद", correct: false },
            { text: "तैत्तिरीय उपनिषद", correct: false },
            { text: "श्वेताश्वतर उपनिषद", correct: true },
            { text: "मुंडक उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेताश्वतर उपनिषद यजुर्वेद से संबंधित है, जिसमें सांख्य दर्शन के 'पुरुष' (आत्मा) और 'प्रकृति' (पदार्थ) के दार्शनिक सिद्धांतों का वर्णन है।"
    },
    {
        question: "यज्ञ के समय यजुर्वेद के मंत्रों का उच्चारण करने वाला पुरोहित क्या कहलाता है?",
        answers: shuffle([
            { text: "होता", correct: false },
            { text: "उद्गाता", correct: false },
            { text: "अध्वर्यु", correct: true },
            { text: "ब्रह्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद का पुरोहित 'अध्वर्यु' कहलाता था, जिसका मुख्य कार्य यज्ञ संबंधी कर्मकांडों को संपन्न कराना था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह यज्ञ की वेदी का निर्माण करता था, आग जलाता था और इन कार्यों को करते हुए यजुर्वेद के गद्य और पद्य मंत्रों का पाठ करता था।"
    },
    {
        question: "'अध्वर्यु' पुरोहित का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "मंत्रों का उच्चारण करना", correct: false },
            { text: "यज्ञ की वेदी बनाना और यज्ञ करना", correct: true },
            { text: "संगीत का पाठ करना", correct: false },
            { text: "सभी यज्ञों का निरीक्षण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अध्वर्यु पुरोहित यज्ञ से संबंधित सभी भौतिक कार्यों (जैसे वेदी बनाना, यज्ञ सामग्री तैयार करना) को सम्पन्न कराता था।"
    },
    {
        question: "किस वेद को 'कर्मकांडीय वेद' के रूप में भी जाना जाता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद का मुख्य उद्देश्य यज्ञों और अनुष्ठानों की विधि और मंत्रों का वर्णन करना है, इसलिए इसे 'कर्मकांडीय वेद' कहते हैं।"
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