const questions = [
    {
        topHeading: "शक साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.78)"
    },
    {
        question: "शकों के शासनकाल में भारतीय समाज में क्या बदलाव आया?",
        answers: shuffle([
            { text: "वर्ण-व्यवस्था अधिक कठोर हो गई।", correct: false },
            { text: "शकों को क्षत्रिय वर्ण में स्वीकार किया गया।", correct: true },
            { text: "व्यापार और वाणिज्य में गिरावट आई।", correct: false },
            { text: "समाज में कोई बदलाव नहीं आया।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक शासकों ने भारतीय समाज में धीरे-धीरे अपना स्थान बना लिया और कुछ भारतीय ग्रंथों में उन्हें 'पतित क्षत्रिय' के रूप में स्वीकार किया गया।"
    },
    {
        question: "किस शक शासक ने अपने सिक्कों पर राजा का चित्र और उसकी उपाधियाँ अंकित करवाईं?",
        answers: shuffle([
            { text: "मोगा", correct: false },
            { text: "एजिस", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "नहपान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I के सिक्कों पर उसका यथार्थवादी चित्र और उसकी उपाधियाँ जैसे 'महाक्षत्रप' और 'महाराजाधिराज' अंकित हैं, जो उसकी शक्ति का प्रतीक थीं।"
    },
    {
        question: "शकों के आगमन से भारत में कौन सी नई सैन्य तकनीक का प्रचलन हुआ?",
        answers: shuffle([
            { text: "घुड़सवार सेना का बेहतर उपयोग", correct: true },
            { text: "कवच और हेलमेट का प्रयोग", correct: false },
            { text: "लोहे के हथियारों का उपयोग", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक मध्य एशिया के कुशल घुड़सवार थे, और उनके आगमन से भारत में घुड़सवार सेना के उपयोग और रणनीति में सुधार हुआ।"
    },
    {
        question: "किस शक शासक को 'उज्जैन के विजेता' के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "मोगा", correct: false },
            { text: "नहपान", correct: true },
            { text: "रुद्रदामन I", correct: false },
            { text: "एजिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नहपान ने पश्चिमी भारत में सातवाहन शासकों को हराकर उज्जैन और आसपास के क्षेत्रों पर अधिकार कर लिया था।"
    },
    {
        question: "शकों के पतन के बाद भारत में कौन से शासक आए?",
        answers: shuffle([
            { text: "पहलव", correct: false },
            { text: "कुषाण", correct: true },
            { text: "हिंद-यवन", correct: false },
            { text: "गुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में विदेशी आक्रमणकारियों का सही क्रम हिंद-यवन, शक, पहलव और कुषाण है।<br><br><i class='fa-solid fa-angles-right icon'></i> शकों के बाद कुषाणों का शासन स्थापित हुआ।"
    },
    {
        question: "शकों द्वारा भारतीय समाज में दिए गए किस योगदान को 'यवनिका' (पर्दा) के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "नाट्यकला", correct: true },
            { text: "वास्तुकला", correct: false },
            { text: "ज्योतिष", correct: false },
            { text: "सैन्यकला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यवनिका' शब्द, जिसका अर्थ 'पर्दा' है, यूनानी और शक प्रभाव से भारतीय नाट्यकला में आया था।"
    },
    {
        question: "किस शासक ने जूनागढ़ अभिलेख में अपनी सभी उपलब्धियों का वर्णन करवाया था?",
        answers: shuffle([
            { text: "कनिष्क", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जूनागढ़ अभिलेख में रुद्रदामन I की विजयों, सुदर्शन झील के जीर्णोद्धार और उसके व्यक्तिगत गुणों का विस्तृत वर्णन है।"
    },
    {
        question: "शक संवत की शुरुआत कब हुई थी?",
        answers: shuffle([
            { text: "58 ईसा पूर्व", correct: false },
            { text: "78 ईस्वी", correct: true },
            { text: "319 ईस्वी", correct: false },
            { text: "320 ईस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक संवत की शुरुआत 78 ईस्वी में कुषाण शासक कनिष्क ने की थी, हालांकि इसका नाम 'शक' है।"
    },
    {
        question: "शक शासक किस धर्म को संरक्षण देते थे?",
        answers: shuffle([
            { text: "बौद्ध धर्म और शैव धर्म", correct: false },
            { text: "जैन धर्म और वैष्णव धर्म", correct: false },
            { text: "इन सभी धर्मों को", correct: true },
            { text: "केवल बौद्ध धर्म को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक शासकों ने धार्मिक सहिष्णुता की नीति अपनाई।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके सिक्के और अभिलेखों से पता चलता है कि उन्होंने बौद्ध, जैन, शैव और वैष्णव जैसे सभी प्रमुख धर्मों को संरक्षण दिया।"
    },
    {
        question: "किस शासक ने खुद को 'भगवान' की उपाधि दी थी?",
        answers: shuffle([
            { text: "मोगा", correct: false },
            { text: "एजिस", correct: false },
            { text: "रुद्रदामन I", correct: false },
            { text: "नहपान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नहपान के अभिलेखों से पता चलता है कि वह खुद को 'भगवान' की उपाधि से संबोधित करता था, जो उसकी देवत्व का दावा था।"
    },
    {
        question: "पश्चिमी क्षत्रपों की राजधानी क्या थी?",
        answers: shuffle([
            { text: "नासिक और उज्जैन", correct: true },
            { text: "तक्षशिला", correct: false },
            { text: "मथुरा", correct: false },
            { text: "पाटलिपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिमी क्षत्रपों की दो शाखाएँ थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> क्षहरात वंश की राजधानी नासिक थी, जबकि कार्दमक वंश की राजधानी उज्जैन थी।"
    },
    {
        question: "शकों के भारत पर आक्रमण का प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "व्यापारिक लाभ", correct: false },
            { text: "मध्य एशिया से विस्थापन", correct: true },
            { text: "धार्मिक प्रचार", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य एशिया में हूणों और अन्य जनजातियों के दबाव के कारण शकों को अपना मूल स्थान छोड़कर भारत की ओर आना पड़ा।"
    },
    {
        question: "शक शासकों का सबसे अंतिम क्षेत्र कौन सा था, जहाँ उनका शासन बना रहा?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "मथुरा", correct: false },
            { text: "गुजरात और मालवा", correct: true },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों का शासन गुजरात और मालवा में सबसे अंत तक बना रहा, जिसे चंद्रगुप्त द्वितीय ने समाप्त किया।"
    },
    {
        question: "किस भारतीय शासक को 'शकारि' (शकों का शत्रु) कहा जाता था?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त शासक चंद्रगुप्त द्वितीय ने शकों को पराजित कर उनके साम्राज्य का अंत कर दिया, इसी कारण उसे 'शकारि' कहा गया।"
    },
    {
        question: "शकों के शासनकाल में पश्चिमी भारत के किस बंदरगाह का महत्व बढ़ा?",
        answers: shuffle([
            { text: "मुज़िरिस", correct: false },
            { text: "ताम्रलिप्ति", correct: false },
            { text: "भड़ोच (ब्यारीगाजा)", correct: true },
            { text: "कल्याण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों ने पश्चिमी भारत के बंदरगाह भड़ोच को एक प्रमुख व्यापारिक केंद्र के रूप में विकसित किया, जिससे रोमन साम्राज्य के साथ व्यापार बढ़ा।"
    },
    {
        question: "किस शासक को 'म्लेच्छों का विनाशक' भी कहा गया है?",
        answers: shuffle([
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "रुद्रदामन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासक गौतमीपुत्र सातकर्णी ने नहपान को हराकर 'म्लेच्छों (शकों) के विनाशक' की उपाधि धारण की थी।"
    },
    {
        question: "शकों के सिक्के बनाने की कला पर किस कला का प्रभाव दिखाई देता है?",
        answers: shuffle([
            { text: "रोमन कला", correct: false },
            { text: "यूनानी कला", correct: true },
            { text: "फारसी कला", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों ने हिंद-यवनों की तरह यूनानी कला से प्रभावित होकर अपने सिक्कों पर राजाओं के चित्र और द्विभाषी लेख अंकित करवाए।"
    },
    {
        question: "किस शासक ने पश्चिमी क्षत्रपों पर विजय प्राप्त करने के बाद 'विक्रमादित्य' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "रुद्रदामन I", correct: false },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को हराकर अपनी दूसरी राजधानी उज्जैन बनाई और 'विक्रमादित्य' की उपाधि धारण की।"
    },
    {
        question: "शकों द्वारा भारतीय ज्योतिष में क्या नया योगदान था?",
        answers: shuffle([
            { text: "ग्रहों की गति का नया सिद्धांत", correct: false },
            { text: "सप्ताह के दिनों का क्रम", correct: false },
            { text: "राशिचक्र (Zodiac) का परिचय", correct: true },
            { text: "नक्षत्रों की पहचान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों ने यूनानी ज्योतिष से प्रेरित होकर भारतीय ज्योतिष में राशिचक्र (Zodiac) की अवधारणा का परिचय दिया।"
    },
    {
        question: "शकों का शासनकाल मुख्य रूप से किस क्षेत्र में फैला था?",
        answers: shuffle([
            { text: "मध्य भारत", correct: false },
            { text: "दक्कन", correct: false },
            { text: "पश्चिमोत्तर और पश्चिमी भारत", correct: true },
            { text: "पूर्वी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों ने पंजाब, मथुरा और पश्चिमी भारत (गुजरात, मालवा) में अपनी पाँच शाखाएँ स्थापित की थीं।"
    },
    {
        question: "किस शक शासक के सिक्कों पर \"सत्य\" शब्द अंकित था, जो उसके भारतीय संस्कृति के प्रति लगाव को दर्शाता है?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "एजिस", correct: false },
            { text: "मोगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I के कुछ सिक्कों पर संस्कृत में 'सत्य' (सच्चाई) शब्द अंकित मिलता है, जो उसके भारतीय धर्म और संस्कृति के प्रति सम्मान को दर्शाता है।"
    },
    {
        question: "शकों के शासनकाल में किस धार्मिक समुदाय का प्रभाव मथुरा में बहुत अधिक था?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "वैष्णव धर्म", correct: false },
            { text: "शैव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मथुरा के शक शासकों ने जैन धर्म को संरक्षण दिया, जिसके कारण इस क्षेत्र में जैन धर्म का व्यापक प्रभाव था।"
    },
    {
        question: "किस शासक को भारत में शकों का संस्थापक माना जाता है?",
        answers: shuffle([
            { text: "मोगा", correct: true },
            { text: "एजिस", correct: false },
            { text: "रुद्रदामन I", correct: false },
            { text: "नहपान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोगा को भारत में शक शासन का पहला शासक और संस्थापक माना जाता है, जिसने तक्षशिला में अपनी राजधानी स्थापित की थी।"
    },
    {
        question: "शकों ने भारतीय समाज में अपनी पहचान किस रूप में स्थापित की?",
        answers: shuffle([
            { text: "ब्राह्मण", correct: false },
            { text: "वैश्य", correct: false },
            { text: "क्षत्रिय", correct: true },
            { text: "शूद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धीरे-धीरे शकों को भारतीय समाज में 'पतित क्षत्रिय' के रूप में स्वीकार किया गया, क्योंकि वे शासक वर्ग के थे।"
    },
    {
        question: "किस शक शासक ने सुदर्शन झील का निर्माण करवाया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "अशोक", correct: false },
            { text: "रुद्रदामन I", correct: false },
            { text: "मोगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुदर्शन झील का निर्माण मौर्य शासक चंद्रगुप्त मौर्य के समय में हुआ था, जबकि इसका जीर्णोद्धार रुद्रदामन I ने करवाया था।"
    },
    {
        question: "शकों का कौनसा शासक पश्चिमी क्षत्रपों की कार्दमक शाखा से संबंधित था?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "एजिस", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "मोगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिमी क्षत्रपों में दो प्रमुख राजवंश थे - क्षहरात (जिसका प्रमुख नहपान था) और कार्दमक (जिसका प्रमुख रुद्रदामन I था)।"
    },
    {
        question: "शक शासकों को किस भारतीय शासक ने 'शकारि' की उपाधि दी थी?",
        answers: shuffle([
            { text: "विक्रमादित्य", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "समुद्रगुप्त", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त शासक चंद्रगुप्त द्वितीय ने पश्चिमी क्षत्रपों के अंतिम शासक रुद्रसिंह III को हराकर 'शकारि' (शकों का शत्रु) की उपाधि धारण की थी।"
    },
    {
        question: "किस शक शासक के सिक्कों पर पहली बार तिथियों का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "मोगा", correct: false },
            { text: "एजिस", correct: false },
            { text: "नहपान", correct: false },
            { text: "रुद्रदामन I", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I के सिक्कों पर तिथियाँ (मुख्य रूप से शक संवत में) अंकित होती थीं, जो उसके शासनकाल को दर्शाती हैं।"
    },
    {
        question: "शक शासक किस क्षेत्र से होकर भारत में आए थे?",
        answers: shuffle([
            { text: "पूर्वी यूरोप", correct: false },
            { text: "चीन", correct: false },
            { text: "मध्य एशिया", correct: true },
            { text: "ईरान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक मूल रूप से मध्य एशिया की एक खानाबदोश जनजाति थी, जो वहाँ से विस्थापित होकर भारत में आई थी।"
    },
    {
        question: "किस शक शासक ने सुदर्शन झील का जीर्णोद्धार करवाया था?",
        answers: shuffle([
            { text: "रुद्रदामन I", correct: true },
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "पुष्यगुप्त वैश्य", correct: false },
            { text: "अशोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुदर्शन झील का निर्माण चंद्रगुप्त मौर्य के समय हुआ था, लेकिन रुद्रदामन I ने इसका जीर्णोद्धार करवाया था।"
    },
    {
        question: "शक शासक किस भारतीय राजवंश से वैवाहिक संबंध स्थापित करके अपनी स्थिति मजबूत करते थे?",
        answers: shuffle([
            { text: "मौर्य", correct: false },
            { text: "गुप्त", correct: false },
            { text: "सातवाहन", correct: true },
            { text: "कुषाण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक शासक, जैसे कि रुद्रदामन I ने, सातवाहन शासकों से वैवाहिक संबंध स्थापित करके अपने संघर्षों को कम किया और अपनी शक्ति बढ़ाई।"
    },
    {
        question: "शकों का शासन मुख्य रूप से किस भारतीय राज्य में सबसे लंबे समय तक रहा?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "गुजरात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों की पश्चिमी शाखा का शासन गुजरात और मालवा में सबसे लंबे समय तक चला, जिसे अंत में गुप्त शासक चंद्रगुप्त द्वितीय ने समाप्त किया।"
    },
    {
        question: "किस शक शासक को 'महान राजा' की उपाधि दी गई थी?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "मोगा", correct: false },
            { text: "एजिस", correct: false },
            { text: "रुद्रदामन I", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I, अपनी सैन्य विजयों और प्रशासनिक सुधारों के कारण, शक शासकों में सबसे महान माना जाता है।"
    },
    {
        question: "शकों ने भारतीय समाज में किस प्रकार की वेशभूषा का प्रचलन किया?",
        answers: shuffle([
            { text: "धोती और कुर्ता", correct: false },
            { text: "सलवार और कमीज", correct: false },
            { text: "टोपी, चोगा और पतलून", correct: true },
            { text: "साड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक मध्य एशिया से टोपी, चोगा (लंबा कोट) और पतलून जैसी वेशभूषा लेकर आए थे, जो भारतीय संस्कृति का हिस्सा बन गई।"
    },
    {
        question: "किस शक शासक के सिक्कों पर \"सत्य\" शब्द अंकित था?",
        answers: shuffle([
            { text: "मोगा", correct: false },
            { text: "एजिस", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "नहपान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I के कुछ सिक्कों पर संस्कृत में 'सत्य' (सच्चाई) शब्द अंकित मिलता है, जो उसके भारतीय संस्कृति के प्रति सम्मान को दर्शाता है।"
    },
    {
        question: "शकों द्वारा किस भारतीय शासक को पराजित किया गया था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "वशिष्ठिपुत्र पुलुमावी", correct: true },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I ने सातवाहन शासक वशिष्ठिपुत्र पुलुमावी को दो बार पराजित किया था।"
    },
    {
        question: "शकों ने भारतीय कला में किस कला शैली को बढ़ावा दिया?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: true },
            { text: "गुप्त कला", correct: false },
            { text: "पाल कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवनों के बाद, शक और फिर कुषाणों ने गांधार कला को संरक्षण दिया, जो भारतीय और यूनानी कला का मिश्रण है।"
    },
    {
        question: "शक शासकों की पहली शाखा ने कहाँ पर शासन स्थापित किया था?",
        answers: shuffle([
            { text: "तक्षशिला (पंजाब)", correct: true },
            { text: "मथुरा", correct: false },
            { text: "उज्जैन", correct: false },
            { text: "अफगानिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों की पहली शाखा ने तक्षशिला (पंजाब) में शासन स्थापित किया था, जिसका प्रमुख मोगा था।"
    },
    {
        question: "किस शासक को \"महानक्षत्रप\" की उपाधि मिली थी?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "एजिस", correct: false },
            { text: "मोगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाक्षत्रप' की उपाधि शक शासकों में सबसे शक्तिशाली शासकों को दी जाती थी, और रुद्रदामन I ने यह उपाधि धारण की थी।"
    },
    {
        question: "शकों का भारत में सबसे महत्वपूर्ण योगदान क्या था?",
        answers: shuffle([
            { text: "कृषि में सुधार", correct: false },
            { text: "वाणिज्यिक व्यापार को बढ़ावा", correct: false },
            { text: "धातु के सिक्कों का प्रचलन", correct: false },
            { text: "ज्योतिष और खगोल विज्ञान में सुधार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों ने यूनानी ज्योतिष को भारत में लोकप्रिय बनाया, जिससे भारतीय ज्योतिष में राशिचक्र और अन्य सिद्धांतों का समावेश हुआ।"
    },
    {
        question: "किस शासक को 'शकों के विनाशक' के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "विक्रमादित्य", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी, उज्जैन के विक्रमादित्य और चंद्रगुप्त द्वितीय - इन तीनों शासकों ने अलग-अलग समय पर शकों को हराया था, इसलिए उन्हें 'शकों के विनाशक' के रूप में जाना जाता है।"
    },
    {
        question: "किस शासक ने 'शक संवत' की शुरुआत की थी?",
        answers: shuffle([
            { text: "रुद्रदामन I", correct: false },
            { text: "एजिस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "मोगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शक संवत' की शुरुआत 78 ईस्वी में कुषाण शासक कनिष्क ने की थी।"
    },
    {
        question: "शकों के शासन के दौरान किस लिपि का प्रयोग अधिक हुआ?",
        answers: shuffle([
            { text: "खरोष्ठी और यूनानी", correct: false },
            { text: "ब्राह्मी और खरोष्ठी", correct: true },
            { text: "पाली और प्राकृत", correct: false },
            { text: "संस्कृत और ब्राह्मी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों ने अपने सिक्कों और अभिलेखों में ब्राह्मी और खरोष्ठी दोनों लिपियों का प्रयोग किया, जो भारतीय और यूनानी प्रभाव को दर्शाता है।"
    },
    {
        question: "शकों ने भारत में किस प्रकार की सामाजिक स्थिति प्राप्त की?",
        answers: shuffle([
            { text: "शासक वर्ग", correct: true },
            { text: "व्यापारी वर्ग", correct: false },
            { text: "कृषि वर्ग", correct: false },
            { text: "दास वर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों ने भारत के विभिन्न हिस्सों में अपना शासन स्थापित किया और एक शासक वर्ग के रूप में पहचाने गए।"
    },
    {
        question: "किस शक शासक के सिक्कों पर वैष्णव धर्म से जुड़े प्रतीक मिलते हैं?",
        answers: shuffle([
            { text: "मोगा", correct: false },
            { text: "नहपान", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "एजिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I के कुछ सिक्कों पर विष्णु से जुड़े प्रतीक जैसे चक्र और शंख अंकित मिलते हैं।"
    },
    {
        question: "शकों का शासनकाल भारत में किस कालखंड के अंतर्गत आता है?",
        answers: shuffle([
            { text: "मौर्य काल", correct: false },
            { text: "गुप्त काल", correct: false },
            { text: "मौर्योत्तर काल", correct: true },
            { text: "हर्षवर्धन काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों का शासन मौर्य साम्राज्य के पतन के बाद और गुप्त साम्राज्य के उदय से पहले के काल (लगभग 200 ईसा पूर्व से 300 ईस्वी) में हुआ था, जिसे मौर्योत्तर काल कहा जाता है।"
    },
    {
        question: "शकों के पतन का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "आंतरिक विद्रोह", correct: false },
            { text: "अन्य विदेशी आक्रमण", correct: false },
            { text: "भारतीय शासकों के हमले", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों का पतन आंतरिक संघर्षों, सातवाहनों जैसे भारतीय शासकों के आक्रमणों और अंत में गुप्त शासक चंद्रगुप्त द्वितीय के हमले के कारण हुआ।"
    },
    {
        question: "किस शासक को पश्चिमी भारत में शकों की शक्ति का संस्थापक माना जाता है?",
        answers: shuffle([
            { text: "मोगा", correct: false },
            { text: "एजिस", correct: false },
            { text: "नहपान", correct: true },
            { text: "रुद्रदामन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नहपान ने पश्चिमी भारत में शक शासन की नींव रखी और उज्जैन और नासिक जैसे क्षेत्रों पर शासन किया।"
    },
    {
        question: "शकों के बाद भारत में कौनसा विदेशी राजवंश आया?",
        answers: shuffle([
            { text: "हिंद-यवन", correct: false },
            { text: "कुषाण", correct: false },
            { text: "पहलव", correct: true },
            { text: "हूण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत पर आक्रमण करने वाले विदेशी शासकों का सही क्रम हिंद-यवन, शक, पहलव और कुषाण है।"
    },
    {
        question: "किस शासक ने अपनी पुत्री का विवाह सातवाहन राजा से करवाया था?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "एजिस", correct: false },
            { text: "मोगा", correct: false },
            { text: "रुद्रदामन I", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I ने सातवाहन राजा वशिष्ठिपुत्र पुलुमावी को हराकर अपनी पुत्री का विवाह उससे करवाया, जिससे दोनों साम्राज्यों के बीच संबंध सुधरे।"
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