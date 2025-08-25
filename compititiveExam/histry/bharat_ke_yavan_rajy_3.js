const questions = [
    {
        topHeading: "भारत के यवनराज्य पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.75)"
    },
    {
        question: "हिंद-यवन शासकों के शासन के दौरान किस धातु के सिक्कों का सबसे अधिक प्रचलन था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: false },
            { text: "तांबा", correct: true },
            { text: "शीशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने सोने, चांदी, तांबे और निकेल के सिक्के जारी किए, लेकिन आम जनता के लिए तांबे के सिक्के सबसे अधिक प्रचलन में थे।"
    },
    {
        question: "किस शासक को \"धर्मिक\" (Dharmika) और \"त्रतारा\" (Tratara) की उपाधि दी गई थी?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "डेमेट्रियस", correct: false },
            { text: "अपोलोडोटस", correct: true },
            { text: "स्ट्रेटो I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपोलोडोटस को \"धर्मिक\" और \"त्रतारा\" (मुक्तिदाता) की उपाधि दी गई थी, जो उसके धार्मिक सहिष्णुता और प्रजा की रक्षा करने की नीति को दर्शाती है।"
    },
    {
        question: "हिंद-यवन शासकों ने अपने सिक्कों पर कौन सी दो लिपियों का प्रयोग किया?",
        answers: shuffle([
            { text: "ब्राह्मी और खरोष्ठी", correct: false },
            { text: "खरोष्ठी और यूनानी", correct: true },
            { text: "ब्राह्मी और यूनानी", correct: false },
            { text: "प्राकृत और पाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों के सिक्के द्विभाषी होते थे, जिन पर यूनानी (ग्रीक) और खरोष्ठी लिपि में लेख अंकित होते थे।"
    },
    {
        question: "\"मिलिंद पन्हो\" में राजा मिलिंद और किस बौद्ध भिक्षु के बीच संवाद का वर्णन है?",
        answers: shuffle([
            { text: "वसुमित्र", correct: false },
            { text: "नागसेन", correct: true },
            { text: "अश्वघोष", correct: false },
            { text: "उपगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ग्रंथ बौद्ध भिक्षु नागसेन और हिंद-यवन राजा मिनांडर (मिलिंद) के बीच हुए दार्शनिक संवादों का एक संग्रह है।"
    },
    {
        question: "किस हिंद-यवन शासक ने अपने सिक्कों पर बौद्ध प्रतीकों, जैसे धर्मचक्र और कमल, का चित्रण करवाया?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "स्ट्रेटो I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर ने बौद्ध धर्म को अपनाया और उसके सिक्कों पर बुद्ध और बौद्ध धर्म के प्रतीकों का व्यापक चित्रण मिलता है।"
    },
    {
        question: "यूनानी और भारतीय कला के मिश्रण से विकसित हुई गांधार कला का प्रमुख केंद्र कौन सा था?",
        answers: shuffle([
            { text: "मथुरा", correct: false },
            { text: "तक्षशिला", correct: true },
            { text: "अमरावती", correct: false },
            { text: "पाटलिपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तक्षशिला और उसके आसपास के क्षेत्र गांधार कला शैली के प्रमुख केंद्र थे, जहाँ यूनानी और भारतीय कला का संगम हुआ।"
    },
    {
        question: "किस यूनानी राजदूत ने विदिशा में गरुड़ स्तंभ की स्थापना की, जो वैष्णव धर्म के प्रति उसके लगाव को दर्शाता है?",
        answers: shuffle([
            { text: "मेगस्थनीज", correct: false },
            { text: "डायोनिसियस", correct: false },
            { text: "हेलिओडोरस", correct: true },
            { text: "डायमेकस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग शासक भागभद्र के दरबार में यूनानी राजदूत हेलिओडोरस ने विदिशा में वैष्णव धर्म को अपनाकर गरुड़ स्तंभ की स्थापना करवाई थी।"
    },
    {
        question: "हिंद-यवन शासकों का भारत में आगमन किस शताब्दी में हुआ?",
        answers: shuffle([
            { text: "तीसरी शताब्दी ईसा पूर्व", correct: false },
            { text: "दूसरी शताब्दी ईसा पूर्व", correct: true },
            { text: "पहली शताब्दी ईसा पूर्व", correct: false },
            { text: "पहली शताब्दी ईस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों का भारत में आक्रमण और शासनकाल मुख्य रूप से दूसरी शताब्दी ईसा पूर्व में शुरू हुआ।"
    },
    {
        question: "'मिलिंद पन्हो' में वर्णित संवाद किस स्थान पर हुआ था?",
        answers: shuffle([
            { text: "साकल", correct: true },
            { text: "तक्षशिला", correct: false },
            { text: "मथुरा", correct: false },
            { text: "पाटलिपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा मिनांडर की राजधानी साकल (सियालकोट) में ही राजा और बौद्ध भिक्षु नागसेन के बीच संवाद हुआ था।"
    },
    {
        question: "हिंद-यवन शासन के दौरान भारतीय समाज पर क्या प्रभाव पड़ा?",
        answers: shuffle([
            { text: "वर्ण व्यवस्था मजबूत हुई", correct: false },
            { text: "वर्ण व्यवस्था में परिवर्तन आया", correct: true },
            { text: "समाज पर कोई प्रभाव नहीं पड़ा", correct: false },
            { text: "केवल सैन्य व्यवस्था में बदलाव आया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन और बाद में आए अन्य विदेशी आक्रमणकारियों के कारण भारतीय समाज में वर्ण व्यवस्था की कठोरता में कुछ ढील आई और कई नए विदेशी समूह क्षत्रिय के रूप में स्वीकार किए गए।"
    },
    {
        question: "हिंद-यवन शासकों के बाद भारत में कौन से शासक आए जिन्होंने हिंद-यवन शासकों के सिक्के बनाने की शैली को अपनाया?",
        answers: shuffle([
            { text: "मौर्य", correct: false },
            { text: "गुप्त", correct: false },
            { text: "शक और कुषाण", correct: true },
            { text: "पल्लव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक और कुषाण शासकों ने हिंद-यवन शासकों के बाद उनके क्षेत्रों पर शासन किया और उनके सिक्के बनाने की कला को जारी रखा।"
    },
    {
        question: "किस हिंद-यवन शासक के सिक्कों पर \"अंतिम\" और \"आद्य\" (प्रारंभिक) दोनों की उपाधियाँ मिलती हैं?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "डेमेट्रियस", correct: false },
            { text: "स्ट्रेटो II", correct: true },
            { text: "अपोलोडोटस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्ट्रेटो II के सिक्कों पर उसकी उपाधियाँ \"अंतिम\" और \"आद्य\" दोनों पाई जाती हैं, जो उसके शासनकाल की शुरुआत और अंत को दर्शाती हैं।"
    },
    {
        question: "यूनानी शासक मिनांडर को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "मिलिंद", correct: true },
            { text: "त्रतारा", correct: false },
            { text: "सोटर", correct: false },
            { text: "इन सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय बौद्ध ग्रंथों में हिंद-यवन शासक मिनांडर को \"मिलिंद\" नाम से संबोधित किया गया है।"
    },
    {
        question: "हिंद-यवन शासकों ने भारत में किस प्रकार की सैन्य तकनीकें लाईं?",
        answers: shuffle([
            { text: "घुड़सवार सेना", correct: false },
            { text: "तीरंदाजी", correct: false },
            { text: "भाला", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासक अपने साथ उन्नत घुड़सवार सेना, तीरंदाजी और अन्य सैन्य तकनीकें लाए, जिन्होंने भारतीय युद्ध कला को प्रभावित किया।"
    },
    {
        question: "'मिलिंद पन्हो' ग्रंथ किस धर्म से संबंधित है?",
        answers: shuffle([
            { text: "हिंदू धर्म", correct: false },
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "पारसी धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' एक महत्वपूर्ण बौद्ध ग्रंथ है जिसमें बौद्ध धर्म के सिद्धांतों पर चर्चा की गई है।"
    },
    {
        question: "हिंद-यवन शासकों का भारतीय क्षेत्र से पतन किसके कारण हुआ?",
        answers: shuffle([
            { text: "आंतरिक संघर्ष", correct: false },
            { text: "शक आक्रमण", correct: false },
            { text: "कुषाण आक्रमण", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन साम्राज्य का पतन आंतरिक संघर्षों और बाद में भारत पर शक और कुषाणों के आक्रमणों के कारण हुआ।"
    },
    {
        question: "किस शासक के सिक्के पर देवी लक्ष्मी का चित्र मिलता है, जो उसके भारतीय संस्कृति के प्रति लगाव को दर्शाता है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "अपोलोडोटस I", correct: true },
            { text: "स्ट्रेटो I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपोलोडोटस I के कुछ सिक्कों पर देवी लक्ष्मी का चित्रण मिलता है, जिससे पता चलता है कि उसने भारतीय देवताओं और संस्कृति को सम्मान दिया।"
    },
    {
        question: "'हेलेनिस्टिक' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "केवल भारतीय संस्कृति", correct: false },
            { text: "केवल यूनानी संस्कृति", correct: false },
            { text: "यूनानी और पूर्वी संस्कृति का मिश्रण", correct: true },
            { text: "रोमन संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलेनिस्टिक शब्द का उपयोग सिकंदर के आक्रमणों के बाद यूनानी और पूर्वी संस्कृतियों के मिश्रण को दर्शाने के लिए किया जाता है।"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल में किस यूनानी देवता को अक्सर भारतीय देवताओं के साथ दर्शाया जाता था?",
        answers: shuffle([
            { text: "ज़्यूस", correct: true },
            { text: "हेराक्लेस", correct: false },
            { text: "अपोलो", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन सिक्कों पर यूनानी देवता ज़्यूस को अक्सर भारतीय देवताओं के साथ दर्शाया जाता था, जो धार्मिक समन्वय का एक उदाहरण है।"
    },
    {
        question: "किस शासक ने अपनी राजधानी तक्षशिला में स्थापित की, जबकि डेमेट्रियस ने साकल को अपनी राजधानी बनाया?",
        answers: shuffle([
            { text: "अपोलोडोटस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "स्ट्रेटो II", correct: false },
            { text: "यूक्रेटाइड्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब डेमेट्रियस भारत में आक्रमण कर रहा था, तब यूक्रेटाइड्स ने बैक्ट्रिया में विद्रोह करके अपना स्वतंत्र राज्य स्थापित किया और तक्षशिला को अपनी राजधानी बनाया।"
    },
    {
        question: "'मिलिंद पन्हो' में किस शासक को \"महान और बुद्धिमान\" राजा के रूप में वर्णित किया गया है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "अपोलोडोटस I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' में राजा मिनांडर को एक बुद्धिमान, विद्वान और योग्य राजा के रूप में वर्णित किया गया है।"
    },
    {
        question: "हिंद-यवन शासन के दौरान, कौन से दो प्रमुख केंद्र राजनीतिक और सांस्कृतिक गतिविधियों के लिए महत्वपूर्ण थे?",
        answers: shuffle([
            { text: "मथुरा और पाटलिपुत्र", correct: false },
            { text: "शाकल और तक्षशिला", correct: true },
            { text: "अयोध्या और वाराणसी", correct: false },
            { text: "उज्जैन और कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाकल (मिनांडर की राजधानी) और तक्षशिला (यूक्रेटाइड्स की राजधानी) हिंद-यवन काल के दो सबसे महत्वपूर्ण राजनीतिक और सांस्कृतिक केंद्र थे।"
    },
    {
        question: "किस ग्रंथ में यूनानी आक्रमण और शुंग शासक पुष्यमित्र द्वारा उन्हें रोकने का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "गार्गी संहिता", correct: false },
            { text: "महाभाष्य", correct: false },
            { text: "मालविकाग्निमित्रम्", correct: true },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिदास के नाटक 'मालविकाग्निमित्रम्' में शुंग शासक पुष्यमित्र और यूनानियों के बीच हुए युद्ध का उल्लेख मिलता है।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर अक्सर किस भाषा में द्विभाषी शिलालेख होते थे?",
        answers: shuffle([
            { text: "यूनानी और ब्राह्मी", correct: false },
            { text: "यूनानी और प्राकृत", correct: false },
            { text: "यूनानी और खरोष्ठी", correct: true },
            { text: "यूनानी और संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने मुख्य रूप से यूनानी और खरोष्ठी लिपि का प्रयोग अपने द्विभाषी सिक्कों पर किया।"
    },
    {
        question: "हिंद-यवन शासकों के आगमन से पहले भारत पर किस साम्राज्य का शासन था?",
        answers: shuffle([
            { text: "गुप्त साम्राज्य", correct: false },
            { text: "कुषाण साम्राज्य", correct: false },
            { text: "मौर्योत्तर काल", correct: true },
            { text: "शुंग साम्राज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन आक्रमण मौर्य साम्राज्य के पतन के बाद मौर्योत्तर काल में हुए, जब भारत में कोई केंद्रीय शक्ति नहीं थी।"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल में किस कला शैली का विकास हुआ, जो भारतीय और यूनानी तत्वों का सम्मिश्रण है?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: true },
            { text: "गुप्त कला", correct: false },
            { text: "पाल कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला का विकास हिंद-यवन शासकों के संरक्षण में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शैली भारतीय और यूनानी कला का अद्भुत सम्मिश्रण है, जिसे इंडो-ग्रीक कला भी कहते हैं।"
    },
    {
        question: "'मिलिंद पन्हो' ग्रंथ के अनुसार, मिनांडर ने किससे बौद्ध धर्म की दीक्षा ली थी?",
        answers: shuffle([
            { text: "अश्वघोष", correct: false },
            { text: "नागार्जुन", correct: false },
            { text: "नागसेन", correct: true },
            { text: "उपगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथ 'मिलिंद पन्हो' में राजा मिनांडर और बौद्ध भिक्षु नागसेन के बीच संवाद का वर्णन है, जिसके बाद मिनांडर ने बौद्ध धर्म को अपनाया।"
    },
    {
        question: "भारत में सबसे पहले किस शासकों ने शुद्ध सोने के सिक्के जारी किए थे?",
        answers: shuffle([
            { text: "हिंद-यवन", correct: false },
            { text: "शक", correct: false },
            { text: "कुषाण", correct: true },
            { text: "गुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सबसे पहले सोने के सिक्के हिंद-यवन शासकों ने जारी किए थे, लेकिन सबसे शुद्ध सोने के सिक्के कुषाण शासक कनिष्क ने जारी किए थे।"
    },
    {
        question: "किस हिंद-यवन शासक ने \"राजा राजा\" की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "यूथीडेमस", correct: false },
            { text: "यूक्रेटाइड्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूक्रेटाइड्स ने अपने सिक्कों पर \"राजा राजा\" की उपाधि अंकित करवाई थी, जो उसके साम्राज्य के विस्तार और शक्ति को दर्शाती है।"
    },
    {
        question: "हिंद-यवन शासकों ने अपने सिक्कों पर किस भारतीय देवता के प्रतीकों का चित्रण करवाया था?",
        answers: shuffle([
            { text: "शिव", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "विष्णु", correct: false },
            { text: "बुद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर जैसे हिंद-यवन शासकों ने बौद्ध धर्म को अपनाया और उनके सिक्कों पर बुद्ध और बौद्ध प्रतीकों, जैसे धर्मचक्र, का चित्रण मिलता है।"
    },
    {
        question: "हिंद-यवन साम्राज्य में राजनीतिक अस्थिरता का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "बाहरी आक्रमण", correct: false },
            { text: "आंतरिक संघर्ष और गृह युद्ध", correct: true },
            { text: "धार्मिक असहिष्णुता", correct: false },
            { text: "आर्थिक संकट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन साम्राज्य का पतन बाहरी आक्रमणों के साथ-साथ उत्तराधिकार के लिए आंतरिक संघर्षों और गृह युद्धों के कारण हुआ।"
    },
    {
        question: "'मिलिंद पन्हो' में मिनांडर को किस नाम से संबोधित किया गया है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "मिलिंद", correct: true },
            { text: "धर्म", correct: false },
            { text: "देव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथ 'मिलिंद पन्हो' में मिनांडर को \"राजा मिलिंद\" के नाम से संबोधित किया गया है।"
    },
    {
        question: "हिंद-यवन शासकों ने भारत के किस क्षेत्र में शासन किया?",
        answers: shuffle([
            { text: "पूर्वी भारत", correct: false },
            { text: "उत्तरी भारत", correct: false },
            { text: "पश्चिमोत्तर भारत", correct: true },
            { text: "दक्षिणी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने मुख्य रूप से पश्चिमोत्तर भारत, जिसमें पंजाब, अफगानिस्तान और सिंध के कुछ हिस्से शामिल थे, पर शासन किया।"
    },
    {
        question: "किस यूनानी राजदूत ने विदिशा में गरुड़ स्तंभ की स्थापना की, जो वैष्णव धर्म के प्रति उसके लगाव को दर्शाता है?",
        answers: shuffle([
            { text: "मेगस्थनीज", correct: false },
            { text: "हेलिओडोरस", correct: true },
            { text: "डायमेकस", correct: false },
            { text: "स्ट्रैबो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलिओडोरस, जो तक्षशिला के यूनानी शासक एंटीआल्किदास का राजदूत था, उसने शुंग शासक भागभद्र के दरबार में विदिशा में गरुड़ स्तंभ की स्थापना की थी।"
    },
    {
        question: "हिंद-यवन शासकों का भारत में सबसे महत्वपूर्ण योगदान क्या था?",
        answers: shuffle([
            { text: "लोहे का उपयोग", correct: false },
            { text: "नगरीय विकास", correct: false },
            { text: "मुद्राशास्त्र और कला", correct: true },
            { text: "कृषि विकास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने भारत में यथार्थवादी पोर्ट्रेट वाले सोने के सिक्के जारी किए और गांधार कला को प्रोत्साहन दिया, जो उनका सबसे महत्वपूर्ण योगदान माना जाता है।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर यूनानी और खरोष्ठी लिपि का उपयोग क्यों किया गया था?",
        answers: shuffle([
            { text: "केवल सजावट के लिए", correct: false },
            { text: "यूनानी और स्थानीय आबादी को संबोधित करने के लिए", correct: true },
            { text: "दोनों लिपियों का प्रचलन था", correct: false },
            { text: "केवल व्यापारियों को आकर्षित करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शासकों ने अपनी यूनानी और भारतीय प्रजा दोनों को संबोधित करने के लिए द्विभाषी सिक्कों का उपयोग किया।"
    },
    {
        question: "हिंद-यवन शासकों के पतन के बाद भारत में कौन से शासक आए जिन्होंने हिंद-यवन कला और संस्कृति के तत्वों को अपनाया?",
        answers: shuffle([
            { text: "गुप्त", correct: false },
            { text: "मौर्य", correct: false },
            { text: "कुषाण", correct: true },
            { text: "सातवाहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों ने हिंद-यवन शासकों के पतन के बाद उनके क्षेत्रों पर शासन किया और गांधार कला जैसी उनकी कई सांस्कृतिक और कलात्मक परंपराओं को जारी रखा।"
    },
    {
        question: "'पेरिप्लस ऑफ द एरिथ्रियन सी' नामक रोमन-ग्रीक ग्रंथ में किस भारतीय बंदरगाह का उल्लेख है जहाँ हिंद-यवन सिक्के चलते थे?",
        answers: shuffle([
            { text: "मुज़िरिस", correct: false },
            { text: "भड़ोच (ब्यारीगाजा)", correct: true },
            { text: "ताम्रलिप्ति", correct: false },
            { text: "अरिकामेडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेरिप्लस ऑफ द एरिथ्रियन सी' में मिनांडर के सिक्कों का उल्लेख है जो पश्चिमी भारत के बंदरगाह भड़ोच (ब्यारीगाजा) में व्यापार में इस्तेमाल होते थे।"
    },
    {
        question: "हिंद-यवन शासकों के साम्राज्य में किस नदी को सीमा माना जाता था?",
        answers: shuffle([
            { text: "सिंधु नदी", correct: false },
            { text: "झेलम नदी", correct: false },
            { text: "गंगा नदी", correct: true },
            { text: "रावी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ इतिहासकारों का मानना ​​है कि हिंद-यवन साम्राज्य की पूर्वी सीमा गंगा नदी के किनारे तक फैली हुई थी।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर \"ज़्यूस\" देवता के साथ अक्सर किस भारतीय प्रतीक को चित्रित किया जाता था?",
        answers: shuffle([
            { text: "गरुड़", correct: true },
            { text: "हाथी", correct: false },
            { text: "बैल", correct: false },
            { text: "धर्मचक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन सिक्कों पर यूनानी देवता ज़्यूस को भारतीय देवता इंद्र के समकक्ष माना जाता था और कभी-कभी उसके साथ गरुड़ का चित्रण किया जाता था।"
    },
    {
        question: "किस ग्रंथ में यवन आक्रमण का उल्लेख मिलता है और शुंग शासक पुष्यमित्र द्वारा उन्हें रोकने का वर्णन है?",
        answers: shuffle([
            { text: "गार्गी संहिता", correct: false },
            { text: "महाभाष्य", correct: false },
            { text: "मालविकाग्निमित्रम्", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन सभी ग्रंथों में यवन आक्रमण और उन्हें रोकने के प्रयास का उल्लेख मिलता है, जो शुंग काल के दौरान हुआ था।"
    },
    {
        question: "किस शासक ने अपनी राजधानी तक्षशिला में स्थापित की, जबकि डेमेट्रियस ने साकल को अपनी राजधानी बनाया?",
        answers: shuffle([
            { text: "अपोलोडोटस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "स्ट्रेटो II", correct: false },
            { text: "यूक्रेटाइड्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूक्रेटाइड्स ने बैक्ट्रिया में अपना राज्य स्थापित करने के बाद तक्षशिला को अपनी भारतीय राजधानी बनाया।"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल के दौरान भारत में किस कला शैली का विकास हुआ, जो भारतीय और यूनानी तत्वों का सम्मिश्रण है?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: true },
            { text: "गुप्त कला", correct: false },
            { text: "पाल कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला का विकास हिंद-यवन शासकों के संरक्षण में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शैली भारतीय और यूनानी कला का अद्भुत सम्मिश्रण है, जिसे इंडो-ग्रीक कला भी कहते हैं।"
    },
    {
        question: "किस हिंद-यवन शासक को बौद्ध धर्म का महान संरक्षक माना जाता है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "अपोलोडोटस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर ने बौद्ध धर्म को अपनाया और उसे संरक्षण दिया, जैसा कि 'मिलिंद पन्हो' में वर्णित है।"
    },
    {
        question: "किस शासक के सिक्कों पर द्विभाषी शिलालेख के साथ-साथ राजा की उपाधि 'अपरजेय' भी अंकित थी?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: true },
            { text: "मिनांडर", correct: false },
            { text: "अपोलोडोटस I", correct: false },
            { text: "यूथीडेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस के कुछ सिक्कों पर उसकी उपाधि 'अपरजेय' अंकित थी।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर \"धर्मचक्र\" और \"हाथी\" दोनों के प्रतीक मिलते हैं?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "अपोलोडोटस I", correct: true },
            { text: "यूथीडेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपोलोडोटस I के सिक्कों पर धर्मचक्र और हाथी दोनों के प्रतीक मिलते हैं, जो उसके बौद्ध और भारतीय प्रभाव को दर्शाते हैं।"
    },
    {
        question: "हिंद-यवन शासकों ने भारत के पश्चिमोत्तर सीमा प्रांत में यूनान की प्राचीन कला चलाई, जिसे क्या कहते हैं?",
        answers: shuffle([
            { text: "हेलेनिस्टिक आर्ट", correct: true },
            { text: "मथुरा कला", correct: false },
            { text: "गुप्त कला", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने भारत के पश्चिमोत्तर सीमा प्रांत में यूनानी कला को बढ़ावा दिया, जिसे हेलेनिस्टिक आर्ट के नाम से जाना जाता है।"
    },
    {
        question: "किस शासक को 'भारत के यवन राज्य' का संस्थापक भी माना जाता है, जिसने 180 ईसा पूर्व में आक्रमण किया था?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "डेमेट्रियस I", correct: true },
            { text: "यूक्रेटाइड्स", correct: false },
            { text: "स्ट्रेटो II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस I को भारत में हिंद-यवन शासन का संस्थापक माना जाता है, जिसने लगभग 180 ईसा पूर्व में भारत पर आक्रमण किया था।"
    },
    {
        question: "'मिलिंद पन्हो' में किस शासक को \"महान और बुद्धिमान\" राजा के रूप में वर्णित किया गया है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "अपोलोडोटस I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' में राजा मिनांडर को एक बुद्धिमान, विद्वान और योग्य राजा के रूप में वर्णित किया गया है।"
    },
    {
        question: "हिंद-यवन शासन के दौरान, कौन से दो प्रमुख केंद्र राजनीतिक और सांस्कृतिक गतिविधियों के लिए महत्वपूर्ण थे?",
        answers: shuffle([
            { text: "मथुरा और पाटलिपुत्र", correct: false },
            { text: "शाकल और तक्षशिला", correct: true },
            { text: "अयोध्या और वाराणसी", correct: false },
            { text: "उज्जैन और कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाकल (मिनांडर की राजधानी) और तक्षशिला (यूक्रेटाइड्स की राजधानी) हिंद-यवन काल के दो सबसे महत्वपूर्ण राजनीतिक और सांस्कृतिक केंद्र थे।"
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