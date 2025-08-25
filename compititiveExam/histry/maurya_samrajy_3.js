const questions = [
    {
        topHeading: "मौर्य साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.67)"
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
        question: "'इंडिका' में वर्णित मौर्य साम्राज्य की नगर-व्यवस्था का विस्तृत वर्णन किस प्राचीन ग्रंथ में मिलता है?",
        answers: shuffle([
            { text: "अर्थशास्त्र", correct: false },
            { text: "इंडिका", correct: true },
            { text: "मुद्राराक्षस", correct: false },
            { text: "राजतरंगिणी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेगस्थनीज की 'इंडिका' में मौर्य साम्राज्य की राजधानी पाटलिपुत्र की नगर-व्यवस्था, शासन और समाज का विस्तृत वर्णन मिलता है।"
    },
    {
        question: "मौर्य काल में 'रूपाजीवा' किसे कहा जाता था?",
        answers: shuffle([
            { text: "राजकीय कलाकार", correct: false },
            { text: "गणिका (वेश्या)", correct: true },
            { text: "जासूस", correct: false },
            { text: "व्यापारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रूपाजीवा' मौर्य काल में राज्य द्वारा मान्यता प्राप्त गणिकाएं या वेश्याएं थीं।"
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
        question: "मौर्य काल में निर्मित 'सुदर्शन झील' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "पुष्यगुप्त वैश्य", correct: true },
            { text: "रुद्रदामन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिरनार (गुजरात) में सुदर्शन झील का निर्माण चंद्रगुप्त मौर्य के प्रांतीय राज्यपाल पुष्यगुप्त वैश्य ने करवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में अशोक ने इसका जीर्णोद्धार करवाया।"
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
        question: "मौर्य काल में 'सीता' से क्या तात्पर्य था?",
        answers: shuffle([
            { text: "एक देवी", correct: false },
            { text: "राजकीय भूमि से प्राप्त आय", correct: true },
            { text: "सीताफल", correct: false },
            { text: "एक प्रकार का कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य काल में राजकीय भूमि को 'सीता' कहा जाता था और इससे होने वाली आय को 'सीताध्यक्ष' नामक अधिकारी द्वारा प्रबंधित किया जाता था।"
    },
    {
        question: "अशोक के स्तंभों पर किस जानवर का चित्र उत्कीर्ण नहीं है?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "बैल", correct: false },
            { text: "घोड़ा", correct: false },
            { text: "गेंडा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारनाथ स्तंभ पर चार जानवर हैं: हाथी, घोड़ा, बैल और शेर।<br><br><i class='fa-solid fa-angles-right icon'></i> गेंडा इस पर मौजूद नहीं है।"
    },
    {
        question: "मौर्य साम्राज्य का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "बिन्दुसार", correct: false },
            { text: "कुणाल", correct: false },
            { text: "बृहद्रथ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहद्रथ मौर्य वंश का अंतिम शासक था, जिसकी हत्या उसके सेनापति पुष्यमित्र शुंग ने करके शुंग वंश की स्थापना की थी।"
    },
    {
        question: "मौर्य काल में 'समाहर्ता' का क्या कार्य था?",
        answers: shuffle([
            { text: "सेना का प्रमुख", correct: false },
            { text: "राजस्व संग्रह का प्रमुख", correct: true },
            { text: "न्याय का प्रमुख", correct: false },
            { text: "जासूसी विभाग का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समाहर्ता मौर्य काल में राजस्व संग्रह (tax collection) का सर्वोच्च अधिकारी था।"
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
        question: "'सैंड्रोकोटस' नाम का उल्लेख किस प्राचीन भारतीय शासक के लिए किया गया है?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "बिन्दुसार", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी और रोमन लेखकों ने चंद्रगुप्त मौर्य को 'सैंड्रोकोटस' और 'एंड्रोकोटस' के नाम से संबोधित किया है।"
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
        question: "मौर्य काल में शिक्षा का प्रमुख केंद्र कौन सा था?",
        answers: shuffle([
            { text: "नालंदा", correct: false },
            { text: "विक्रमशिला", correct: false },
            { text: "तक्षशिला", correct: true },
            { text: "वल्लभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तक्षशिला मौर्य काल में शिक्षा का एक प्रसिद्ध केंद्र था, जहाँ चाणक्य और चंद्रगुप्त मौर्य जैसे महान व्यक्तियों ने शिक्षा प्राप्त की थी।"
    },
    {
        question: "अशोक को बौद्ध धर्म में दीक्षित करने वाले बौद्ध भिक्षु कौन थे?",
        answers: shuffle([
            { text: "उपगुप्त", correct: true },
            { text: "महेंद्र", correct: false },
            { text: "संघमित्रा", correct: false },
            { text: "भद्रबाहु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथों के अनुसार, उपगुप्त नामक बौद्ध भिक्षु ने अशोक को बौद्ध धर्म की दीक्षा दी थी।"
    },
    {
        question: "'इंडिका' के अनुसार, मौर्य समाज कितने वर्गों में विभाजित था?",
        answers: shuffle([
            { text: "चार", correct: false },
            { text: "पांच", correct: false },
            { text: "छह", correct: false },
            { text: "सात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेगस्थनीज ने 'इंडिका' में मौर्य समाज को सात वर्गों में विभाजित बताया है: दार्शनिक, किसान, शिकारी, शिल्पी, सैनिक, निरीक्षक और सभासद।"
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
        question: "अशोक के शिलालेखों में किस लिपि का प्रयोग नहीं हुआ है?",
        answers: shuffle([
            { text: "ब्राह्मी", correct: false },
            { text: "खरोष्ठी", correct: false },
            { text: "अरामाइक", correct: false },
            { text: "देवनागरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवनागरी लिपि का प्रयोग अशोक के शिलालेखों में नहीं हुआ है।"
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
    },
    {
        question: "किस मौर्य शासक के शासनकाल में यूनानी राजदूत डायमेकस भारत आया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "बिन्दुसार", correct: true },
            { text: "दशरथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी शासक एंटिओकस I ने डायमेकस को बिन्दुसार के दरबार में राजदूत के रूप में भेजा था।"
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
        question: "मौर्य साम्राज्य में 'रूपदर्शक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "सिक्कों की शुद्धता की जाँच करना", correct: true },
            { text: "नाटकों का आयोजन करना", correct: false },
            { text: "सैनिकों का निरीक्षण करना", correct: false },
            { text: "राजकीय भवनों की देखरेख करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रूपदर्शक' नामक अधिकारी का मुख्य कार्य सिक्कों की गुणवत्ता और शुद्धता की जाँच करना था।"
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
        question: "मौर्य काल में निर्मित 'सुदर्शन झील' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "पुष्यगुप्त वैश्य", correct: true },
            { text: "रुद्रदामन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिरनार (गुजरात) में सुदर्शन झील का निर्माण चंद्रगुप्त मौर्य के प्रांतीय राज्यपाल पुष्यगुप्त वैश्य ने करवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में अशोक ने इसका जीर्णोद्धार करवाया।"
    },
    {
        question: "'सैंड्रोकोटस' नाम का उल्लेख किस प्राचीन भारतीय शासक के लिए किया गया है?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "बिन्दुसार", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी और रोमन लेखकों ने चंद्रगुप्त मौर्य को 'सैंड्रोकोटस' और 'एंड्रोकोटस' के नाम से संबोधित किया है।"
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
        question: "अशोक के शिलालेखों में किस लिपि का प्रयोग नहीं हुआ है?",
        answers: shuffle([
            { text: "ब्राह्मी", correct: false },
            { text: "खरोष्ठी", correct: false },
            { text: "अरामाइक", correct: false },
            { text: "देवनागरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवनागरी लिपि का प्रयोग अशोक के शिलालेखों में नहीं हुआ है।"
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
    },
    {
        question: "किस मौर्य शासक के शासनकाल में यूनानी राजदूत डायमेकस भारत आया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "बिन्दुसार", correct: true },
            { text: "दशरथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी शासक एंटिओकस I ने डायमेकस को बिन्दुसार के दरबार में राजदूत के रूप में भेजा था।"
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
        question: "मौर्य काल में 'रूपाजीवा' किसे कहा जाता था?",
        answers: shuffle([
            { text: "राजकीय कलाकार", correct: false },
            { text: "गणिका (वेश्या)", correct: true },
            { text: "जासूस", correct: false },
            { text: "व्यापारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रूपाजीवा' मौर्य काल में राज्य द्वारा मान्यता प्राप्त गणिकाएं या वेश्याएं थीं।"
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
        question: "मौर्य काल में निर्मित 'सुदर्शन झील' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "पुष्यगुप्त वैश्य", correct: true },
            { text: "रुद्रदामन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिरनार (गुजरात) में सुदर्शन झील का निर्माण चंद्रगुप्त मौर्य के प्रांतीय राज्यपाल पुष्यगुप्त वैश्य ने करवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में अशोक ने इसका जीर्णोद्धार करवाया।"
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
        question: "मौर्य काल में 'सीता' से क्या तात्पर्य था?",
        answers: shuffle([
            { text: "एक देवी", correct: false },
            { text: "राजकीय भूमि से प्राप्त आय", correct: true },
            { text: "सीताफल", correct: false },
            { text: "एक प्रकार का कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य काल में राजकीय भूमि को 'सीता' कहा जाता था और इससे होने वाली आय को 'सीताध्यक्ष' नामक अधिकारी द्वारा प्रबंधित किया जाता था।"
    },
    {
        question: "अशोक के स्तंभों पर किस जानवर का चित्र उत्कीर्ण नहीं है?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "बैल", correct: false },
            { text: "घोड़ा", correct: false },
            { text: "गेंडा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारनाथ स्तंभ पर चार जानवर हैं: हाथी, घोड़ा, बैल और शेर।<br><br><i class='fa-solid fa-angles-right icon'></i> गेंडा इस पर मौजूद नहीं है।"
    },
    {
        question: "मौर्य साम्राज्य का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "बिन्दुसार", correct: false },
            { text: "कुणाल", correct: false },
            { text: "बृहद्रथ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहद्रथ मौर्य वंश का अंतिम शासक था, जिसकी हत्या उसके सेनापति पुष्यमित्र शुंग ने करके शुंग वंश की स्थापना की थी।"
    },
    {
        question: "मौर्य काल में 'समाहर्ता' का क्या कार्य था?",
        answers: shuffle([
            { text: "सेना का प्रमुख", correct: false },
            { text: "राजस्व संग्रह का प्रमुख", correct: true },
            { text: "न्याय का प्रमुख", correct: false },
            { text: "जासूसी विभाग का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समाहर्ता मौर्य काल में राजस्व संग्रह (tax collection) का सर्वोच्च अधिकारी था।"
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
        question: "मौर्य काल में शिक्षा का प्रमुख केंद्र कौन सा था?",
        answers: shuffle([
            { text: "नालंदा", correct: false },
            { text: "विक्रमशिला", correct: false },
            { text: "तक्षशिला", correct: true },
            { text: "वल्लभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तक्षशिला मौर्य काल में शिक्षा का एक प्रसिद्ध केंद्र था, जहाँ चाणक्य और चंद्रगुप्त मौर्य जैसे महान व्यक्तियों ने शिक्षा प्राप्त की थी।"
    },
    {
        question: "अशोक को बौद्ध धर्म में दीक्षित करने वाले बौद्ध भिक्षु कौन थे?",
        answers: shuffle([
            { text: "उपगुप्त", correct: true },
            { text: "महेंद्र", correct: false },
            { text: "संघमित्रा", correct: false },
            { text: "भद्रबाहु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथों के अनुसार, उपगुप्त नामक बौद्ध भिक्षु ने अशोक को बौद्ध धर्म की दीक्षा दी थी।"
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