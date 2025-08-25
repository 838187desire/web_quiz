const questions = [
    {
        topHeading: "सामवेद पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.53)"
    },
    {
        question: "सामवेद का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "मंत्रों का संग्रह", correct: false },
            { text: "यज्ञ का ज्ञान", correct: false },
            { text: "संगीत का विज्ञान", correct: false },
            { text: "गान का संग्रह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साम' शब्द का अर्थ 'गाना' या 'गीत' होता है, और 'वेद' का अर्थ 'ज्ञान'।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार, सामवेद का शाब्दिक अर्थ 'गीतों का ज्ञान' या 'गान का संग्रह' है।"
    },
    {
        question: "सामवेद के मंत्रों का गान करने वाला पुरोहित क्या कहलाता था?",
        answers: shuffle([
            { text: "होता", correct: false },
            { text: "उद्गाता", correct: true },
            { text: "अध्वर्यु", correct: false },
            { text: "ब्रह्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद के मंत्रों को एक विशेष लय और ताल में गाया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इन मंत्रों का गान करने वाले पुरोहित को 'उद्गाता' कहा जाता था।"
    },
    {
        question: "सामवेद का अधिकांश भाग किस वेद के मंत्रों से लिया गया है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: true },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false },
            { text: "ब्राह्मण ग्रंथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद में कुल मंत्रों में से लगभग 1,810 मंत्र ऋग्वेद से लिए गए हैं, जो इसे ऋग्वेद पर आधारित बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन मंत्रों को यज्ञों के समय विशेष लय में गाया जाता था।"
    },
    {
        question: "सामवेद की प्रमुख शाखाएं (शाखाएँ) कौनसी हैं?",
        answers: shuffle([
            { text: "वाजसनेयी और माध्यंदिन", correct: false },
            { text: "तैत्तिरीय और मैत्रायणी", correct: false },
            { text: "कौथुम, राणायनीय और जैमिनीय", correct: true },
            { text: "काठक और कपिष्ठल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद की तीन प्रमुख शाखाएं हैं, जिनमें से कौथुम शाखा गुजरात में, राणायनीय महाराष्ट्र में और जैमिनीय शाखा कर्नाटक में प्रचलित है।"
    },
    {
        question: "सामवेद का प्रमुख ब्राह्मण ग्रंथ कौन सा है?",
        answers: shuffle([
            { text: "ऐतरेय ब्राह्मण", correct: false },
            { text: "शतपथ ब्राह्मण", correct: false },
            { text: "ताण्ड्य ब्राह्मण (पंचविंश ब्राह्मण)", correct: true },
            { text: "गोपथ ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद से संबंधित कई ब्राह्मण ग्रंथ हैं, जिनमें ताण्ड्य ब्राह्मण (जिसे पंचविंश ब्राह्मण भी कहते हैं), षड्विंश ब्राह्मण और जैमिनीय ब्राह्मण प्रमुख हैं।"
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
        question: "सामवेद को कितने भागों में विभाजित किया गया है?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद को मुख्य रूप से दो भागों में विभाजित किया गया है: पूर्वार्चिक, जिसमें मंत्रों का क्रमबद्ध संग्रह है, और उत्तरार्चिक, जिसमें यज्ञ संबंधी मंत्रों का संग्रह है।"
    },
    {
        question: "सामवेद का कौन सा भाग 'गान' कहलाता है?",
        answers: shuffle([
            { text: "संहिता", correct: false },
            { text: "ब्राह्मण", correct: false },
            { text: "आरण्यक", correct: false },
            { text: "वह भाग जिसमें मंत्रों को गाने का तरीका बताया गया है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद के दो मुख्य भाग हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> एक भाग में मंत्रों का संग्रह है, जिसे आर्चिक कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> दूसरा भाग 'गान' कहलाता है, जिसमें यह बताया गया है कि इन मंत्रों को विशेष लय और धुन में कैसे गाया जाना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गायन पद्धति ही सामवेद का सार है और इसे भारतीय संगीत का मूल स्रोत माना जाता है।"
    },
    {
        question: "सामवेद के किस भाग में अग्नि, इंद्र और सोम से संबंधित मंत्र हैं?",
        answers: shuffle([
            { text: "पूर्वार्चिक", correct: true },
            { text: "उत्तरार्चिक", correct: false },
            { text: "जैमिनीय शाखा", correct: false },
            { text: "ताण्ड्य ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद का पूर्वार्चिक भाग अग्नि, इंद्र और सोम जैसे प्रमुख वैदिक देवताओं से संबंधित मंत्रों का संग्रह है, जिन्हें यज्ञों में गाया जाता था।"
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
        question: "'अद्वैतवाद' के दर्शन से संबंधित कौन सा उपनिषद सामवेद से जुड़ा है?",
        answers: shuffle([
            { text: "तैत्तिरीय उपनिषद", correct: false },
            { text: "श्वेताश्वतर उपनिषद", correct: false },
            { text: "केन उपनिषद", correct: true },
            { text: "माण्डूक्य उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन उपनिषद सामवेद की तलवकार शाखा से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें 'केन' शब्द का अर्थ है 'किसके द्वारा', और यह ब्रह्म की प्रकृति पर दार्शनिक प्रश्न पूछता है, जो अद्वैतवाद के सिद्धांतों का आधार है।"
    },
    {
        question: "सामवेद का कौन सा भाग 'आरण्यक' कहलाता है?",
        answers: shuffle([
            { text: "छान्दोग्य ब्राह्मण", correct: false },
            { text: "जैमिनीय उपनिषद ब्राह्मण", correct: false },
            { text: "जैमिनीय आरण्यक", correct: false },
            { text: "तलवकार आरण्यक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद से संबंधित आरण्यक ग्रंथ हैं: तलवकार आरण्यक और जैमिनीय आरण्यक।"
    },
    {
        question: "'पंचविंश ब्राह्मण' किस वेद का ब्राह्मण ग्रंथ है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचविंश ब्राह्मण' सामवेद का सबसे विशाल और महत्वपूर्ण ब्राह्मण ग्रंथ है, जिसे 'ताण्ड्य महाब्राह्मण' भी कहा जाता है।"
    },
    {
        question: "सामवेद की कौन सी शाखा का प्रचलन महाराष्ट्र और दक्षिण भारत में अधिक है?",
        answers: shuffle([
            { text: "कौथुम", correct: false },
            { text: "जैमिनीय", correct: false },
            { text: "राणायनीय", correct: true },
            { text: "शौनक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद की राणायनीय शाखा का प्रचलन मुख्य रूप से महाराष्ट्र और दक्षिण भारत के कुछ हिस्सों में है।"
    },
    {
        question: "सामवेद का कौन सा उपनिषद 'सत्यकाम जाबाल' की कहानी के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "केन उपनिषद", correct: false },
            { text: "बृहदारण्यक उपनिषद", correct: false },
            { text: "छान्दोग्य उपनिषद", correct: true },
            { text: "मुण्डक उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छान्दोग्य उपनिषद में सत्यकाम जाबाल की कहानी का वर्णन है, जो अपनी माता के सत्य बोलने के कारण एक ऋषि से ज्ञान प्राप्त करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उपनिषद ब्रह्म, आत्मा और कर्म के सिद्धांतों को समझाता है।"
    },
    {
        question: "सामवेद में 'उद्गाता' के सहायक पुरोहित कौन होते थे?",
        answers: shuffle([
            { text: "मैत्रावरुण", correct: false },
            { text: "प्रतिहर्ता", correct: true },
            { text: "अध्वर्यु", correct: false },
            { text: "पोता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उद्गाता के तीन सहायक पुरोहित होते थे: प्रतिहर्ता, प्रस्तोता और सुब्रह्मण्य।"
    },
    {
        question: "सामवेद का कौन सा खंड मुख्य रूप से गृहस्थ जीवन और कर्मकांडों से संबंधित है?",
        answers: shuffle([
            { text: "पूर्वार्चिक", correct: false },
            { text: "उत्तरार्चिक", correct: true },
            { text: "गान", correct: false },
            { text: "संहिता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तरार्चिक में वे मंत्र हैं जिनका प्रयोग यज्ञों और विशेष अवसरों पर गृहस्थ जीवन के कर्मकांडों के लिए किया जाता था।"
    },
    {
        question: "'सामवेद' का 'साम' शब्द किस धातु से बना है?",
        answers: shuffle([
            { text: "सम्", correct: true },
            { text: "स", correct: false },
            { text: "सन्", correct: false },
            { text: "साम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साम' शब्द 'सम्' धातु से बना है, जिसका अर्थ 'शांत करना', 'सामंजस्य स्थापित करना' या 'गाना' होता है।"
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
        question: "सामवेद के 'छान्दोग्य उपनिषद' में वर्णित 'त्रिवृत्करण' का सिद्धांत किससे संबंधित है?",
        answers: shuffle([
            { text: "तीन देवताओं का एकीकरण", correct: false },
            { text: "तीन वेदों का ज्ञान", correct: false },
            { text: "तीन मौलिक तत्वों का संयोजन", correct: true },
            { text: "तीन प्रकार के यज्ञ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिवृत्करण' का सिद्धांत बताता है कि सृष्टि के तीन मौलिक तत्व (अग्नि, जल और पृथ्वी) किस प्रकार मिलकर सभी वस्तुओं का निर्माण करते हैं।"
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
        question: "सामवेद की कौन सी शाखा को 'राणा' शाखा के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "कौथुम", correct: false },
            { text: "राणायनीय", correct: true },
            { text: "जैमिनीय", correct: false },
            { text: "शौनक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद की राणायनीय शाखा को 'राणा' शाखा भी कहते हैं।"
    },
    {
        question: "सामवेद के 'छान्दोग्य उपनिषद' का 'ओम्' के संदर्भ में क्या महत्व है?",
        answers: shuffle([
            { text: "यह 'ओम्' को एक साधारण ध्वनि बताता है।", correct: false },
            { text: "यह 'ओम्' को एक संगीत की धुन बताता है।", correct: false },
            { text: "यह 'ओम्' को 'उद्गीथ' के रूप में पूजा जाने योग्य बताता है।", correct: true },
            { text: "यह 'ओम्' का उल्लेख नहीं करता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छान्दोग्य उपनिषद में 'उद्गीथ' (ओम्) को सबसे महत्वपूर्ण तत्व माना गया है और इसे ब्रह्म का प्रतीक मानकर पूजा करने का विधान है।"
    },
    {
        question: "सामवेद का कौन सा ब्राह्मण ग्रंथ कर्मकांडों के 'प्रायश्चित' (penance) का वर्णन करता है?",
        answers: shuffle([
            { text: "ताण्ड्य ब्राह्मण", correct: false },
            { text: "षड्विंश ब्राह्मण", correct: true },
            { text: "जैमिनीय ब्राह्मण", correct: false },
            { text: "वंश ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> षड्विंश ब्राह्मण का एक भाग 'अद्भुत ब्राह्मण' कहलाता है, जिसमें प्रायश्चित कर्मों और अपशकुनों के शमन का वर्णन है।"
    },
    {
        question: "सामवेद के किस भाग में मंत्रों के संगीतबद्ध रूप का वर्णन है?",
        answers: shuffle([
            { text: "पूर्वार्चिक", correct: false },
            { text: "गान", correct: true },
            { text: "संहिता", correct: false },
            { text: "आरण्यक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद के मंत्रों का पाठ 'अर्चिक' कहलाता है, जबकि उनके संगीतबद्ध रूप को 'गान' कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गान ही सामवेद का मूल स्वरूप है।"
    },
    {
        question: "सामवेद के 'छान्दोग्य उपनिषद' में 'उद्दालक आरुणि' और उनके पुत्र 'श्वेतकेतु' के बीच का संवाद किस विषय पर केंद्रित है?",
        answers: shuffle([
            { text: "मोक्ष", correct: false },
            { text: "आत्मा और ब्रह्म की एकता", correct: true },
            { text: "कर्मकांड", correct: false },
            { text: "पुनर्जन्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह संवाद 'तत् त्वम् असि' (वह तुम हो) के महावाक्य के लिए प्रसिद्ध है, जिसमें पिता उद्दालक आरुणि अपने पुत्र को आत्मा और ब्रह्म की अभिन्नता का ज्ञान देते हैं।"
    },
    {
        question: "सामवेद की कौन सी शाखा का 'ब्राह्मण' ग्रंथ बहुत विस्तृत और प्राचीन माना जाता है?",
        answers: shuffle([
            { text: "जैमिनीय", correct: false },
            { text: "राणायनीय", correct: false },
            { text: "कौथुम", correct: true },
            { text: "इन सभी का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद की कौथुम शाखा का ताण्ड्य महाब्राह्मण सबसे विशाल और प्राचीन है, जबकि राणायनीय और जैमिनीय शाखाओं के ब्राह्मण भी महत्वपूर्ण हैं।"
    },
    {
        question: "सामवेद के मंत्रों के लिए प्रयुक्त 'सप्त स्वर' (सात स्वर) का सर्वप्रथम उल्लेख किस ग्रंथ में मिलता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद के ब्राह्मण", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संगीत के सात स्वरों का सबसे पहला स्पष्ट उल्लेख सामवेद के ब्राह्मण ग्रंथों में मिलता है, जहाँ उनका प्रयोग सामगान के लिए किया गया है।"
    },
    {
        question: "'ताण्ड्य महाब्राह्मण' में किस यज्ञ के 25 प्रकारों का वर्णन है?",
        answers: shuffle([
            { text: "अश्वमेध", correct: false },
            { text: "वाजपेय", correct: false },
            { text: "सोमयज्ञ", correct: true },
            { text: "राजसूय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताण्ड्य महाब्राह्मण में सोमयज्ञ के विभिन्न प्रकारों का विस्तृत वर्णन है, जिनमें से 25 विशेष रूप से उल्लिखित हैं।"
    },
    {
        question: "सामवेद के 'पूर्वार्चिक' और 'उत्तरार्चिक' के अलावा एक और भाग क्या है जो सामगान की विधि बताता है?",
        answers: shuffle([
            { text: "ब्राह्मण", correct: false },
            { text: "आरण्यक", correct: false },
            { text: "गान", correct: true },
            { text: "उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद संहिता के दो भाग (पूर्वार्चिक और उत्तरार्चिक) हैं, जबकि गान (गायन) सामवेद का ही एक महत्वपूर्ण अंग है जो मंत्रों को संगीतबद्ध रूप देता है।"
    },
    {
        question: "सामवेद में 'उद्गाता' पुरोहित का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "यज्ञ का निरीक्षण", correct: false },
            { text: "ऋग्वेद के मंत्रों का पाठ", correct: false },
            { text: "सामवेद के मंत्रों का गान", correct: true },
            { text: "यज्ञ की वेदी का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उद्गाता' का शाब्दिक अर्थ 'गायन करने वाला' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका प्रमुख कार्य यज्ञों के दौरान सामवेद के मंत्रों का गायन करना था।"
    },
    {
        question: "सामवेद के किस उपनिषद में 'उद्गीथ विद्या' का वर्णन है?",
        answers: shuffle([
            { text: "बृहदारण्यक उपनिषद", correct: false },
            { text: "केन उपनिषद", correct: false },
            { text: "छान्दोग्य उपनिषद", correct: true },
            { text: "तैत्तिरीय उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छान्दोग्य उपनिषद का एक बड़ा भाग 'उद्गीथ विद्या' को समर्पित है, जिसमें 'ॐ' और सामगान की आध्यात्मिक व्याख्या की गई है।"
    },
    {
        question: "'जैमिनीय उपनिषद ब्राह्मण' किस शाखा से संबंधित है?",
        answers: shuffle([
            { text: "कौथुम", correct: false },
            { text: "राणायनीय", correct: false },
            { text: "जैमिनीय", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैमिनीय उपनिषद ब्राह्मण सामवेद की जैमिनीय शाखा से संबंधित है।"
    },
    {
        question: "सामवेद के किस ब्राह्मण ग्रंथ को 'अद्भुत ब्राह्मण' भी कहा जाता है?",
        answers: shuffle([
            { text: "ताण्ड्य ब्राह्मण", correct: false },
            { text: "षड्विंश ब्राह्मण", correct: true },
            { text: "जैमिनीय ब्राह्मण", correct: false },
            { text: "वंश ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> षड्विंश ब्राह्मण का अंतिम खंड 'अद्भुत ब्राह्मण' कहलाता है, जिसमें दैवीय शक्तियों, जादू और प्रायश्चित कर्मों का वर्णन है।"
    },
    {
        question: "सामवेद का वह पुरोहित जो यज्ञ में 'ॐ' का घोष करता था, क्या कहलाता था?",
        answers: shuffle([
            { text: "होता", correct: false },
            { text: "प्रस्तोता", correct: true },
            { text: "प्रतिहर्ता", correct: false },
            { text: "सुब्रह्मण्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रस्तोता' उद्गाता का एक सहायक पुरोहित था जो यज्ञ की शुरुआत में 'ॐ' का घोष करता था।"
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
        question: "'वंश ब्राह्मण' किस वेद से संबंधित है और इसका विषय क्या है?",
        answers: shuffle([
            { text: "ऋग्वेद, देवताओं की वंशावली", correct: false },
            { text: "यजुर्वेद, राजाओं की वंशावली", correct: false },
            { text: "सामवेद, ऋषि परंपरा की वंशावली", correct: true },
            { text: "अथर्ववेद, ऋषियों की वंशावली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वंश ब्राह्मण सामवेद का ही एक ब्राह्मण ग्रंथ है, जिसमें सामगान करने वाले ऋषियों की वंशावली का वर्णन है।"
    },
    {
        question: "सामवेद के किस भाग में ऋषि जैमिनी के अनुयायियों के नाम का उल्लेख है?",
        answers: shuffle([
            { text: "पूर्वार्चिक", correct: false },
            { text: "उत्तरार्चिक", correct: false },
            { text: "जैमिनीय ब्राह्मण", correct: true },
            { text: "ताण्ड्य ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैमिनीय ब्राह्मण में जैमिनी ऋषि के अनुयायियों और उनकी शिक्षाओं का उल्लेख मिलता है।"
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
        question: "सामवेद में 'सामगान' की कितनी मुख्य शैलियाँ बताई गई हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामगान की चार प्रमुख शैलियाँ हैं: ग्रामगेय, अरण्यगेय, ऊह और ऊह्य।"
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
        question: "सामवेद की कौन सी शाखा का प्रचलन कर्नाटक और दक्षिण भारत के कुछ हिस्सों में है?",
        answers: shuffle([
            { text: "कौथुम", correct: false },
            { text: "राणायनीय", correct: false },
            { text: "जैमिनीय", correct: true },
            { text: "शौनक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद की जैमिनीय शाखा का प्रचलन मुख्य रूप से कर्नाटक और दक्षिण भारत के कुछ अन्य भागों में है।"
    },
    {
        question: "सामवेद का कौन सा ब्राह्मण ग्रंथ 'उपनिषद्' के रूप में भी जाना जाता है?",
        answers: shuffle([
            { text: "ताण्ड्य ब्राह्मण", correct: false },
            { text: "षड्विंश ब्राह्मण", correct: false },
            { text: "तलवकार ब्राह्मण", correct: true },
            { text: "जैमिनीय ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तलवकार ब्राह्मण का एक भाग, जो कि उपनिषद के रूप में जाना जाता है, 'केन उपनिषद' कहलाता है।"
    },
    {
        question: "सामवेद में 'सोम' का क्या महत्व है?",
        answers: shuffle([
            { text: "यह एक देवता का नाम है।", correct: false },
            { text: "यह एक पेय पदार्थ है जो यज्ञों में अर्पित किया जाता है।", correct: true },
            { text: "यह एक वृक्ष का नाम है।", correct: false },
            { text: "यह एक प्रकार का यज्ञ है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद के अधिकांश मंत्रों का गायन सोमयज्ञ के दौरान किया जाता था, जिसमें सोम रस को देवताओं को अर्पित किया जाता था।"
    },
    {
        question: "सामवेद के किस भाग में देवताओं की प्रशंसा और स्तुति के लिए मंत्र हैं?",
        answers: shuffle([
            { text: "पूर्वार्चिक", correct: true },
            { text: "उत्तरार्चिक", correct: false },
            { text: "आरण्यक", correct: false },
            { text: "संहिता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वार्चिक भाग में देवताओं, विशेष रूप से इंद्र, अग्नि और सोम की प्रशंसा के लिए मंत्रों का संग्रह है।"
    },
    {
        question: "सामवेद की किस शाखा में सबसे कम मंत्र हैं?",
        answers: shuffle([
            { text: "जैमिनीय", correct: true },
            { text: "कौथुम", correct: false },
            { text: "राणायनीय", correct: false },
            { text: "इन सभी में लगभग समान हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैमिनीय शाखा को 'न्यून संहिता' भी कहा जाता है क्योंकि इसमें कौथुम और राणायनीय शाखाओं की तुलना में मंत्रों की संख्या कम है।"
    },
    {
        question: "सामवेद के मंत्रों की गायन शैली को क्या कहा जाता है?",
        answers: shuffle([
            { text: "अर्चना", correct: false },
            { text: "सामगान", correct: true },
            { text: "गान", correct: false },
            { text: "उद्गीथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद के मंत्रों की विशिष्ट गायन शैली को 'सामगान' कहते हैं, जो भारतीय शास्त्रीय संगीत का मूल स्रोत माना जाता है।"
    },
    {
        question: "सामवेद के 'वंश ब्राह्मण' में किस ऋषि परंपरा का उल्लेख है?",
        answers: shuffle([
            { text: "गौतम और भारद्वाज", correct: false },
            { text: "अत्रि और वशिष्ठ", correct: false },
            { text: "जैमिनी और उसके शिष्य", correct: true },
            { text: "सभी ऋषियों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वंश ब्राह्मण' मुख्य रूप से जैमिनी ऋषि और उनके शिष्यों की परंपरा का वर्णन करता है, जो सामवेद के शिक्षण को आगे बढ़ाते थे।"
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