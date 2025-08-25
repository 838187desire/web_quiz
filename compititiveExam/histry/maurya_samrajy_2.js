const questions = [
    {
        topHeading: "मौर्य साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.66)"
    },
    {
        question: "मौर्य काल में न्यायालयों को कितने भागों में विभाजित किया गया था?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कौटिल्य के 'अर्थशास्त्र' के अनुसार, मौर्य काल में दो प्रकार के न्यायालय थे: 'धर्मस्थीय' (दीवानी मामले) और 'कंटकशोधन' (फौजदारी मामले)।"
    },
    {
        question: "मौर्य काल में 'देवताओं का प्रिय' (Devanampiya) की उपाधि किस शासक को दी गई थी?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "बिन्दुसार", correct: false },
            { text: "अशोक", correct: true },
            { text: "दशरथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक ने अपने शिलालेखों में स्वयं को 'देवनांपिय प्रियदर्शी' (देवताओं का प्रिय और देखने में सुंदर) कहा है।"
    },
    {
        question: "अशोक के अधिकांश अभिलेख किस स्थान से प्राप्त हुए हैं?",
        answers: shuffle([
            { text: "दक्षिण भारत", correct: false },
            { text: "उत्तर-पश्चिम भारत", correct: false },
            { text: "पूर्व भारत", correct: false },
            { text: "मध्य भारत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के अधिकांश अभिलेख मध्य भारत के क्षेत्रों, जैसे मध्य प्रदेश, उत्तर प्रदेश और बिहार में पाए गए हैं।"
    },
    {
        question: "किस मौर्य शासक को 'सैंड्रोकोटस' और 'एंड्रोकोटस' के नाम से जाना जाता था?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "बिन्दुसार", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "बृहद्रथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी इतिहासकार जस्टिन ने चंद्रगुप्त मौर्य को 'सैंड्रोकोटस' कहा था, जिसकी पहचान 1793 में विलियम जोन्स ने की थी।"
    },
    {
        question: "मौर्य काल में 'रूपदर्शक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "सिक्कों की शुद्धता की जाँच करना", correct: true },
            { text: "नाटकों का आयोजन करना", correct: false },
            { text: "सैनिकों का निरीक्षण करना", correct: false },
            { text: "राजकीय भवनों की देखरेख करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रूपदर्शक' नामक अधिकारी का मुख्य कार्य सिक्कों की गुणवत्ता और शुद्धता की जाँच करना था।"
    },
    {
        question: "अशोक ने अपने शिलालेखों में किस भाषा का उपयोग नहीं किया है?",
        answers: shuffle([
            { text: "प्राकृत", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "ग्रीक", correct: false },
            { text: "अरामाइक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के शिलालेखों में प्राकृत (अधिकांश), ग्रीक और अरामाइक भाषा का उपयोग किया गया है, लेकिन संस्कृत का नहीं।"
    },
    {
        question: "मौर्य काल में 'पाण' नामक सिक्का किस धातु का बना होता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: true },
            { text: "तांबा", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाण' मौर्य काल का एक प्रमुख चांदी का सिक्का था, जिसका उपयोग व्यापार में होता था।"
    },
    {
        question: "अशोक के सारनाथ स्तंभ के शीर्ष पर कौन सा जानवर उत्कीर्ण है?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "बैल", correct: false },
            { text: "घोड़ा", correct: false },
            { text: "सिंह (शेर)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारनाथ स्तंभ के शीर्ष पर चार शेर हैं जो चारों दिशाओं में देख रहे हैं।"
    },
    {
        question: "मौर्य प्रशासन में 'धर्मस्थीय' न्यायालय किससे संबंधित थे?",
        answers: shuffle([
            { text: "फौजदारी मामले", correct: false },
            { text: "दीवानी मामले", correct: true },
            { text: "राजस्व मामले", correct: false },
            { text: "सैन्य मामले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धर्मस्थीय' न्यायालय दीवानी मामलों (विवाह, संपत्ति विवाद आदि) का निपटारा करते थे।"
    },
    {
        question: "अशोक के बाद मौर्य साम्राज्य का शासक कौन बना?",
        answers: shuffle([
            { text: "दशरथ", correct: true },
            { text: "कुणाल", correct: false },
            { text: "संप्रति", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक की मृत्यु के बाद उसके पोते दशरथ ने सिंहासन संभाला।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने भी अशोक की तरह 'देवनांपिय' की उपाधि धारण की थी।"
    },
    {
        question: "मौर्य काल में 'अग्रहार' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "ब्राह्मणों को दी जाने वाली कर-मुक्त भूमि", correct: true },
            { text: "सेना का एक विभाग", correct: false },
            { text: "एक प्रकार का अनाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्रहार' उस भूमि को कहा जाता था जो ब्राह्मणों को दान में दी जाती थी और उस पर कोई कर नहीं लगता था।"
    },
    {
        question: "अशोक के किस शिलालेख में 'धम्म महामात्र' नामक अधिकारियों का उल्लेख है?",
        answers: shuffle([
            { text: "4वाँ शिलालेख", correct: false },
            { text: "5वाँ शिलालेख", correct: true },
            { text: "6वाँ शिलालेख", correct: false },
            { text: "7वाँ शिलालेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक ने अपने 5वें शिलालेख में 'धम्म महामात्र' नामक अधिकारियों की नियुक्ति का उल्लेख किया है, जिनका कार्य प्रजा के बीच धम्म का प्रचार करना था।"
    },
    {
        question: "'इंडिका' में वर्णित 'पाटलिपुत्र' की शासन व्यवस्था कितने सदस्यों की समिति द्वारा चलाई जाती थी?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "20", correct: false },
            { text: "30", correct: true },
            { text: "40", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेगस्थनीज के अनुसार, पाटलिपुत्र का प्रशासन 30 सदस्यों की एक समिति द्वारा चलाया जाता था, जो पांच-पांच सदस्यों की छह उप-समितियों में विभाजित थी।"
    },
    {
        question: "चंद्रगुप्त मौर्य और सेल्यूकस निकेटर के बीच संधि के बाद, चंद्रगुप्त को कौन से क्षेत्र मिले थे?",
        answers: shuffle([
            { text: "काबुल, कंधार, हेरात और बलूचिस्तान", correct: true },
            { text: "पंजाब और सिंध", correct: false },
            { text: "मगध और गंगा के मैदान", correct: false },
            { text: "केवल काबुल और कंधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेल्यूकस निकेटर ने चंद्रगुप्त मौर्य को काबुल, कंधार, हेरात और बलूचिस्तान के क्षेत्र दिए थे।"
    },
    {
        question: "मौर्य काल में किस प्रकार की कला का विकास हुआ?",
        answers: shuffle([
            { text: "गांधार कला", correct: false },
            { text: "मथुरा कला", correct: false },
            { text: "मौर्यकालीन कला (पॉलिश किए हुए स्तंभ, गुफाएं)", correct: true },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य काल में पॉलिश किए हुए एकाश्म स्तंभ, गुफाएं (जैसे बराबर की गुफाएं) और विशाल मूर्तियां जैसी विशिष्ट कला का विकास हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> गांधार कला का विकास मौर्य काल के बाद हुआ।"
    },
    {
        question: "अशोक ने अपने शिलालेखों में किस लिपि का उपयोग उत्तर-पश्चिमी भारत में किया था?",
        answers: shuffle([
            { text: "ब्राह्मी", correct: false },
            { text: "खरोष्ठी", correct: false },
            { text: "ग्रीक", correct: false },
            { text: "खरोष्ठी और अरामाइक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर-पश्चिमी भारत के क्षेत्रों, जैसे कंधार और मनसेहरा में, अशोक के शिलालेख खरोष्ठी और अरामाइक लिपियों में पाए गए हैं।"
    },
    {
        question: "कौटिल्य के 'अर्थशास्त्र' में 'सप्तांग सिद्धांत' में 'दुर्ग' से क्या तात्पर्य है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "कोष", correct: false },
            { text: "राजधानी", correct: false },
            { text: "किला", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्तांग सिद्धांत' में राज्य के सात अंग बताए गए हैं: स्वामी, अमात्य, जनपद, दुर्ग, कोष, दंड और मित्र।<br><br><i class='fa-solid fa-angles-right icon'></i> 'दुर्ग' का अर्थ है किला या किलेबंदी।"
    },
    {
        question: "मौर्य काल में 'अध्यक्ष' नामक अधिकारी किस विभाग का प्रमुख होता था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "खान", correct: false },
            { text: "व्यापार", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्यक्ष' विभिन्न विभागों के प्रमुख थे, जैसे 'सीताध्यक्ष' (कृषि), 'लोहाध्यक्ष' (खान) और 'पण्याध्यक्ष' (व्यापार)।"
    },
    {
        question: "अशोक के किस शिलालेख में कलिंग युद्ध और उसके परिणामों का विस्तृत वर्णन मिलता है?",
        answers: shuffle([
            { text: "10वाँ शिलालेख", correct: false },
            { text: "11वाँ शिलालेख", correct: false },
            { text: "12वाँ शिलालेख", correct: false },
            { text: "13वाँ शिलालेख", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 13वें शिलालेख में कलिंग युद्ध में हुए नरसंहार का उल्लेख है, जिसने अशोक को धम्म की ओर प्रेरित किया।"
    },
    {
        question: "चंद्रगुप्त मौर्य ने अपने अंतिम दिनों में किस जैन मुनि से दीक्षा ली थी?",
        answers: shuffle([
            { text: "भद्रबाहु", correct: true },
            { text: "स्थूलभद्र", correct: false },
            { text: "उपगुप्त", correct: false },
            { text: "महावीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य ने जैन धर्म को अपनाया और जैन मुनि भद्रबाहु के साथ दक्षिण भारत चले गए थे।"
    },
    {
        question: "मौर्य काल में 'समाहर्ता' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "सेना का प्रमुख", correct: false },
            { text: "राजस्व संग्रह का प्रमुख", correct: true },
            { text: "न्याय का प्रमुख", correct: false },
            { text: "जासूसी विभाग का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समाहर्ता' राजकीय राजस्व संग्रह का प्रभारी होता था।"
    },
    {
        question: "किस मौर्य शासक के शासनकाल में यूनानी राजदूत डायनोसियस भारत आया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "बिन्दुसार", correct: false },
            { text: "अशोक", correct: true },
            { text: "दशरथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी शासक टॉलेमी द्वितीय फिलाडेल्फस ने डायनोसियस को अशोक के दरबार में राजदूत के रूप में भेजा था।"
    },
    {
        question: "अशोक के किस शिलालेख में सभी संप्रदायों के प्रति सहिष्णुता की बात कही गई है?",
        answers: shuffle([
            { text: "10वाँ शिलालेख", correct: false },
            { text: "11वाँ शिलालेख", correct: false },
            { text: "12वाँ शिलालेख", correct: true },
            { text: "13वाँ शिलालेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 12वें शिलालेख में अशोक ने धार्मिक सहिष्णुता पर बल दिया है और कहा है कि सभी संप्रदायों के सार की वृद्धि हो।"
    },
    {
        question: "मौर्य काल में 'दण्डनायक' नामक अधिकारी किस विभाग से संबंधित था?",
        answers: shuffle([
            { text: "न्याय और कानून", correct: true },
            { text: "वित्त", correct: false },
            { text: "कृषि", correct: false },
            { text: "व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दण्डनायक' न्याय और कानून व्यवस्था का अधिकारी था, जो सजा देने का कार्य करता था।"
    },
    {
        question: "मौर्य साम्राज्य में 'अशोका' के नाम का उल्लेख किस शिलालेख में मिलता है?",
        answers: shuffle([
            { text: "रुम्मिनदेई स्तंभ लेख", correct: false },
            { text: "मास्की और गुर्जर लघु शिलालेख", correct: true },
            { text: "सारनाथ स्तंभ लेख", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के अधिकांश अभिलेखों में उसे 'देवनांपिय' कहा गया है, लेकिन मास्की, गुर्जर, नेतुर और उदेगोलम जैसे लघु शिलालेखों में उसका नाम 'अशोका' मिलता है।"
    },
    {
        question: "मौर्य काल में 'मौर्य' शब्द का अर्थ क्या था?",
        answers: shuffle([
            { text: "एक जनजाति का नाम", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रकार की भूमि", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मौर्य' शब्द की उत्पत्ति को लेकर कई मत हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> कुछ विद्वानों का मानना है कि यह 'मोर' नामक पक्षी से संबंधित है, जबकि कुछ अन्य मानते हैं कि यह 'मुर' नामक एक जनजाति से आया है।"
    },
    {
        question: "अशोक के शिलालेखों में किस शिलालेख को 'मास्की शिलालेख' कहा जाता है?",
        answers: shuffle([
            { text: "रुम्मिनदेई स्तंभलेख", correct: false },
            { text: "मास्की और गुर्जर लघु शिलालेख", correct: true },
            { text: "सारनाथ स्तंभलेख", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मास्की (कर्नाटक) में स्थित लघु शिलालेख में अशोक के नाम का स्पष्ट उल्लेख है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उसके सबसे महत्वपूर्ण शिलालेखों में से एक है।"
    },
    {
        question: "मौर्य काल में 'पण्य' नामक अधिकारी किस विभाग से संबंधित था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "व्यापार और वाणिज्य", correct: true },
            { text: "खान", correct: false },
            { text: "जंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पण्य' व्यापार और वाणिज्य का प्रभारी अधिकारी था।"
    },
    {
        question: "मौर्य साम्राज्य के पतन का एक प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "अशोक का बौद्ध धर्म अपनाना", correct: false },
            { text: "आंतरिक विद्रोह और कमजोर उत्तराधिकारी", correct: true },
            { text: "विदेशी आक्रमण", correct: false },
            { text: "आर्थिक संकट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक की मृत्यु के बाद उसके कमजोर उत्तराधिकारी साम्राज्य को एकजुट नहीं रख पाए, जिससे आंतरिक विद्रोह और प्रांतों का अलग होना शुरू हो गया।"
    },
    {
        question: "'अर्थशास्त्र' के अनुसार, राज्य के सात अंगों में 'जनपद' का क्या अर्थ है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "कोष", correct: false },
            { text: "क्षेत्र (राज्य) और जनसंख्या", correct: true },
            { text: "किला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कौटिल्य के 'सप्तांग सिद्धांत' में 'जनपद' का अर्थ है राज्य का क्षेत्र और उसमें रहने वाली जनसंख्या।"
    },
    {
        question: "मौर्य काल में 'अग्रहार' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "ब्राह्मणों को दी जाने वाली कर-मुक्त भूमि", correct: true },
            { text: "सेना का एक विभाग", correct: false },
            { text: "एक प्रकार का अनाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्रहार' उस भूमि को कहा जाता था जो ब्राह्मणों को दान में दी जाती थी और उस पर कोई कर नहीं लगता था।"
    },
    {
        question: "अशोक ने बौद्ध धर्म के प्रचार के लिए अपने पुत्र और पुत्री को कहाँ भेजा था?",
        answers: shuffle([
            { text: "नेपाल", correct: false },
            { text: "श्रीलंका", correct: true },
            { text: "चीन", correct: false },
            { text: "बर्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक ने अपने पुत्र महेंद्र और पुत्री संघमित्रा को बौद्ध धर्म के प्रचार के लिए श्रीलंका भेजा था।"
    },
    {
        question: "मौर्य प्रशासन में 'धर्मस्थीय' न्यायालय किससे संबंधित थे?",
        answers: shuffle([
            { text: "फौजदारी मामले", correct: false },
            { text: "दीवानी मामले", correct: true },
            { text: "राजस्व मामले", correct: false },
            { text: "सैन्य मामले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धर्मस्थीय' न्यायालय दीवानी मामलों (विवाह, संपत्ति विवाद आदि) का निपटारा करते थे।"
    },
    {
        question: "मौर्य साम्राज्य को कुल कितने प्रांतों में विभाजित किया गया था?",
        answers: shuffle([
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के समय मौर्य साम्राज्य को पांच प्रांतों में विभाजित किया गया था: उत्तरापथ (राजधानी तक्षशिला), दक्षिणापथ (सुवर्णगिरि), प्राची (पाटलिपुत्र), अवंति (उज्जैन) और कलिंग (तोसली)।"
    },
    {
        question: "'मुद्राराक्षस' नामक नाटक के लेखक कौन थे, जिसमें चंद्रगुप्त मौर्य और चाणक्य के बारे में बताया गया है?",
        answers: shuffle([
            { text: "विशाखदत्त", correct: true },
            { text: "कल्हण", correct: false },
            { text: "बाणभट्ट", correct: false },
            { text: "शूद्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुद्राराक्षस' की रचना विशाखदत्त ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नाटक चंद्रगुप्त मौर्य द्वारा नंद वंश को उखाड़ फेंकने और सत्ता स्थापित करने की कहानी बताता है।"
    },
    {
        question: "अशोक के किस शिलालेख में कलिंग युद्ध का वर्णन है?",
        answers: shuffle([
            { text: "10वाँ शिलालेख", correct: false },
            { text: "11वाँ शिलालेख", correct: false },
            { text: "12वाँ शिलालेख", correct: false },
            { text: "13वाँ शिलालेख", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के 13वें शिलालेख में कलिंग युद्ध और उसके बाद हुए हृदय परिवर्तन का विस्तृत वर्णन मिलता है।"
    },
    {
        question: "मौर्य काल में 'अग्रोनोमोई' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "सिंचाई की व्यवस्था करना", correct: false },
            { text: "सड़क निर्माण और माप-तोल का निरीक्षण करना", correct: true },
            { text: "भूमि राजस्व का संग्रह करना", correct: false },
            { text: "सैन्य अभियानों का नेतृत्व करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेगस्थनीज के अनुसार, 'अग्रोनोमोई' नामक अधिकारी सड़कों के निर्माण, माप-तोल और सार्वजनिक कार्यों की देखरेख करता था।"
    },
    {
        question: "अशोक के स्तंभों की पहचान किस विशेषता से होती है?",
        answers: shuffle([
            { text: "पॉलिश की हुई सतह", correct: false },
            { text: "पत्थर का प्रकार", correct: false },
            { text: "शीर्ष पर पशु आकृति", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के स्तंभों की प्रमुख विशेषताएं उनकी चमकदार पॉलिश, एक ही पत्थर से बने होना और शीर्ष पर पशु आकृतियां (जैसे शेर, बैल) हैं।"
    },
    {
        question: "मौर्य काल में 'समाहर्ता' का क्या कार्य था?",
        answers: shuffle([
            { text: "सेना का प्रमुख", correct: false },
            { text: "राजस्व संग्रह का प्रमुख", correct: true },
            { text: "न्याय का प्रमुख", correct: false },
            { text: "जासूसी विभाग का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समाहर्ता' मौर्य काल में राजस्व संग्रह (tax collection) का सर्वोच्च अधिकारी था।"
    },
    {
        question: "चंद्रगुप्त मौर्य ने अपने जीवन के अंतिम दिनों में किस धर्म को अपनाया?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "हिन्दू धर्म", correct: false },
            { text: "शैव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य ने अपने अंतिम दिनों में जैन मुनि भद्रबाहु से जैन धर्म की दीक्षा ली और श्रवणबेलगोला (कर्नाटक) में संलेखना (उपवास) द्वारा प्राण त्यागे।"
    },
    {
        question: "मौर्य काल में 'संस्था' नामक गुप्तचरों का क्या कार्य था?",
        answers: shuffle([
            { text: "एक ही स्थान पर रहकर गुप्तचरी करना", correct: true },
            { text: "घूम-घूमकर गुप्तचरी करना", correct: false },
            { text: "सैन्य जानकारी एकत्र करना", correct: false },
            { text: "जासूसी विभाग का नेतृत्व करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संस्था' नामक गुप्तचर एक ही स्थान पर रहकर गुप्तचरी करते थे, जबकि 'संचार' नामक गुप्तचर घूम-घूमकर सूचनाएं एकत्र करते थे।"
    },
    {
        question: "अशोक के किस शिलालेख में पशुबलि और उत्सवों पर प्रतिबंध का उल्लेख है?",
        answers: shuffle([
            { text: "पहला शिलालेख", correct: true },
            { text: "दूसरा शिलालेख", correct: false },
            { text: "तीसरा शिलालेख", correct: false },
            { text: "चौथा शिलालेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के पहले शिलालेख में पशुओं की हत्या पर प्रतिबंध और समाज में उत्सवों को रोकने का आदेश दिया गया है।"
    },
    {
        question: "मौर्य काल में 'अदेवमातृक' भूमि किसे कहा जाता था?",
        answers: shuffle([
            { text: "उपजाऊ भूमि", correct: false },
            { text: "बिना वर्षा के अच्छी फसल देने वाली भूमि", correct: true },
            { text: "बंजर भूमि", correct: false },
            { text: "नदियों के किनारे की भूमि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अदेवमातृक' का अर्थ है 'जिसकी माँ देवता (वर्षा) नहीं है'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह भूमि थी जो बिना वर्षा के भी उपजाऊ होती थी।"
    },
    {
        question: "मौर्य काल में 'एपिग्राफी' (शिलालेखों का अध्ययन) को किस नाम से जाना जाता था?",
        answers: shuffle([
            { text: "अभिलेखशास्त्र", correct: false },
            { text: "पुरालेखशास्त्र", correct: true },
            { text: "मुद्राशास्त्र", correct: false },
            { text: "लिपिशास्त्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरालेखशास्त्र' (Palaeography) प्राचीन लेखन और लिपियों का अध्ययन है, जबकि 'अभिलेखशास्त्र' (Epigraphy) शिलालेखों का अध्ययन है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों एक-दूसरे से संबंधित हैं, लेकिन पुरालेखशास्त्र अधिक व्यापक है।"
    },
    {
        question: "कौटिल्य ने अपने 'अर्थशास्त्र' में कितने प्रकार के मंत्रियों का उल्लेख किया है?",
        answers: shuffle([
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: false },
            { text: "18", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्थशास्त्र' में 18 प्रकार के 'तीर्थ' या मंत्रियों का उल्लेख है, जो विभिन्न प्रशासनिक विभागों के प्रमुख थे।"
    },
    {
        question: "अशोक ने किस स्थान पर बौद्ध धर्म को राजकीय धर्म के रूप में घोषित किया था?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "सारनाथ", correct: false },
            { text: "लुम्बिनी", correct: false },
            { text: "ऐसा कोई प्रमाण नहीं है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक ने बौद्ध धर्म को व्यक्तिगत रूप से अपनाया और उसका प्रचार किया, लेकिन उसने इसे कभी भी आधिकारिक तौर पर राज्य धर्म घोषित नहीं किया।"
    },
    {
        question: "मौर्य काल में किस प्रकार की कला का विकास हुआ?",
        answers: shuffle([
            { text: "गांधार कला", correct: false },
            { text: "मथुरा कला", correct: false },
            { text: "मौर्यकालीन कला (पॉलिश किए हुए स्तंभ, गुफाएं)", correct: true },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य काल में पॉलिश किए हुए एकाश्म स्तंभ, गुफाएं (जैसे बराबर की गुफाएं) और विशाल मूर्तियां जैसी विशिष्ट कला का विकास हुआ।"
    },
    {
        question: "अशोक के शिलालेखों को पढ़ने में पहली बार सफलता किसे मिली?",
        answers: shuffle([
            { text: "अलेक्जेंडर कनिंघम", correct: false },
            { text: "जेम्स प्रिंसेप", correct: true },
            { text: "जॉन मार्शल", correct: false },
            { text: "विलियम जोन्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जेम्स प्रिंसेप ने 1837 में पहली बार अशोक के शिलालेखों को पढ़ने में सफलता प्राप्त की।<br><br><i class='fa-solid fa-angles-right icon'></i> ये शिलालेख ब्राह्मी लिपि में थे।"
    },
    {
        question: "'राजतरंगिणी' के अनुसार, अशोक ने किस शहर की स्थापना की थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "श्रीनगर", correct: true },
            { text: "उज्जैन", correct: false },
            { text: "तक्षशिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कल्हण द्वारा लिखित 'राजतरंगिणी' के अनुसार, कश्मीर में वितस्ता नदी (झेलम) के तट पर स्थित श्रीनगर शहर की स्थापना अशोक ने की थी।"
    },
    {
        question: "मौर्य काल में 'पण्याध्यक्ष' नामक अधिकारी किस विभाग का प्रमुख था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "व्यापार और वाणिज्य", correct: true },
            { text: "खान", correct: false },
            { text: "जंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पण्याध्यक्ष' व्यापार और वाणिज्य से संबंधित कार्यों का प्रमुख अधिकारी था।"
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