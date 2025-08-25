const questions = [
    {
        topHeading: "मौर्य साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.68)"
    },
    {
        question: "मौर्य काल में 'पौतवाध्यक्ष' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "माप-तोल का निरीक्षण करना", correct: true },
            { text: "सिंचाई की व्यवस्था करना", correct: false },
            { text: "व्यापारिक मार्गों का रखरखाव करना", correct: false },
            { text: "जहाजों का निर्माण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पौतवाध्यक्ष' नामक अधिकारी का कार्य माप-तोल (weights and measures) के मानकों का निरीक्षण करना था।"
    },
    {
        question: "अशोक के किस शिलालेख में धार्मिक सहिष्णुता पर बल दिया गया है?",
        answers: shuffle([
            { text: "10वाँ शिलालेख", correct: false },
            { text: "11वाँ शिलालेख", correct: false },
            { text: "12वाँ शिलालेख", correct: true },
            { text: "13वाँ शिलालेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 12वें शिलालेख में अशोक ने सभी संप्रदायों के प्रति सम्मान और सहिष्णुता का संदेश दिया है।"
    },
    {
        question: "मौर्य प्रशासन में 'नगरक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "गाँव का प्रमुख", correct: false },
            { text: "नगर का प्रमुख", correct: true },
            { text: "राजस्व संग्रह का प्रमुख", correct: false },
            { text: "सेना का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नगरक' नगर प्रशासन का प्रमुख अधिकारी होता था, जो नगर की व्यवस्था और कानून-व्यवस्था की देखरेख करता था।"
    },
    {
        question: "चंद्रगुप्त मौर्य और सेल्यूकस निकेटर के बीच संधि के बाद, सेल्यूकस ने अपनी पुत्री हेलेना का विवाह किससे किया?",
        answers: shuffle([
            { text: "बिन्दुसार", correct: false },
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "चाणक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेल्यूकस निकेटर ने चंद्रगुप्त मौर्य से संधि के बाद अपनी पुत्री हेलेना का विवाह उससे किया, जिससे दोनों साम्राज्यों के बीच मैत्री संबंध स्थापित हुए।"
    },
    {
        question: "मौर्य काल में 'व्यावहारिक' नामक अधिकारी किस विभाग से संबंधित था?",
        answers: shuffle([
            { text: "न्याय और कानून", correct: true },
            { text: "वित्त", correct: false },
            { text: "कृषि", correct: false },
            { text: "व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्यावहारिक' दीवानी न्यायालयों का न्यायाधीश होता था।"
    },
    {
        question: "अशोक ने अपने शिलालेखों में किस भाषा का उपयोग उत्तर-पश्चिमी भारत में किया था?",
        answers: shuffle([
            { text: "प्राकृत", correct: false },
            { text: "संस्कृत", correct: false },
            { text: "ग्रीक", correct: false },
            { text: "खरोष्ठी और अरामाइक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर-पश्चिमी भारत के कंधार जैसे क्षेत्रों में अशोक के द्विभाषी (ग्रीक और अरामाइक) और खरोष्ठी लिपि के शिलालेख पाए गए हैं।"
    },
    {
        question: "मौर्य काल में 'शून्यागार' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "खाली भूमि का प्रबंधन", correct: true },
            { text: "जासूसी करना", correct: false },
            { text: "अनाज का भंडार करना", correct: false },
            { text: "सिक्कों की ढलाई करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शून्यागार' वह अधिकारी था जो बिना किसी खेती के पड़ी खाली भूमि का प्रबंधन करता था।"
    },
    {
        question: "अशोक के किस शिलालेख में अशोक ने खुद को 'देवनांपिय' (देवताओं का प्रिय) कहा है?",
        answers: shuffle([
            { text: "मास्की लघु शिलालेख", correct: false },
            { text: "कलिंग शिलालेख", correct: false },
            { text: "रुम्मिनदेई स्तंभ लेख", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के लगभग सभी शिलालेखों में, मास्की जैसे कुछ को छोड़कर, उसने खुद को 'देवनांपिय प्रियदर्शी' कहा है।"
    },
    {
        question: "'अर्थशास्त्र' में कितने 'अधिकरण' (अध्याय) हैं?",
        answers: shuffle([
            { text: "12", correct: false },
            { text: "15", correct: true },
            { text: "18", correct: false },
            { text: "20", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्थशास्त्र' को 15 'अधिकरणों' (अध्यायों) में विभाजित किया गया है।"
    },
    {
        question: "मौर्य काल में 'अध्यक्षा' किसे कहा जाता था?",
        answers: shuffle([
            { text: "राज्य के मंत्री", correct: false },
            { text: "विभिन्न विभागों के प्रमुख", correct: true },
            { text: "सेना का प्रमुख", correct: false },
            { text: "गाँव का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य प्रशासन में विभिन्न विभागों के प्रमुखों को 'अध्यक्ष' या 'अध्यक्षा' कहा जाता था, जैसे 'सीताध्यक्ष' और 'पण्याध्यक्ष'।"
    },
    {
        question: "मौर्य साम्राज्य में 'बलि' और 'भाग' नामक कर किस पर लगाए जाते थे?",
        answers: shuffle([
            { text: "व्यापार पर", correct: false },
            { text: "भूमि पर", correct: true },
            { text: "धार्मिक गतिविधियों पर", correct: false },
            { text: "आयात पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बलि' एक धार्मिक कर था, जबकि 'भाग' उपज का हिस्सा था, जो भूमि राजस्व के रूप में लिया जाता था।"
    },
    {
        question: "अशोक के 'धम्म' का उद्देश्य क्या था?",
        answers: shuffle([
            { text: "बौद्ध धर्म का प्रचार", correct: false },
            { text: "धार्मिक संकीर्णता फैलाना", correct: false },
            { text: "एक सामाजिक-नैतिक आचार संहिता स्थापित करना", correct: true },
            { text: "साम्राज्य का सैन्य विस्तार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक का धम्म धार्मिक प्रचार से अधिक एक सामाजिक-नैतिक संहिता थी, जिसका उद्देश्य प्रजा में उच्च नैतिक मूल्यों को स्थापित करना था।"
    },
    {
        question: "मौर्य काल में 'सुपिरंटेंडेंट' (Superintendent) नामक अधिकारी किस विभाग का प्रमुख था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "खान", correct: false },
            { text: "वाणिज्य", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य काल में विभिन्न विभागों के प्रमुखों को 'अध्यक्ष' या 'सुपिरंटेंडेंट' कहा जाता था, जैसे 'लोहाध्यक्ष' (धातु), 'लक्षणाध्यक्ष' (टकसाल) और 'सूत्राध्यक्ष' (वस्त्र)।"
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
        question: "चंद्रगुप्त मौर्य ने जैन धर्म को कहाँ अपनाया था?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "उज्जैन", correct: false },
            { text: "श्रवणबेलगोला", correct: true },
            { text: "राजगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य ने कर्नाटक के श्रवणबेलगोला में जैन मुनि भद्रबाहु के सानिध्य में संलेखना (उपवास) द्वारा अपने प्राण त्यागे।"
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
            { text: "शीर्ष पर पशुआकृति", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के स्तंभों की प्रमुख विशेषताएं उनकी चमकदार पॉलिश, एक ही पत्थर से बने होना और शीर्ष पर पशुआकृतियां (जैसे शेर, बैल) हैं।"
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
        question: "मौर्य काल में 'सेनापति' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "सेना का सर्वोच्च कमांडर", correct: true },
            { text: "राजस्व संग्रह का प्रमुख", correct: false },
            { text: "न्याय का प्रमुख", correct: false },
            { text: "जासूसी विभाग का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सेनापति' मौर्य प्रशासन में सेना का सर्वोच्च कमांडर होता था।"
    },
    {
        question: "'अशोक के धम्म' का मुख्य सिद्धांत क्या था?",
        answers: shuffle([
            { text: "धार्मिक सहिष्णुता", correct: false },
            { text: "अहिंसा", correct: false },
            { text: "माता-पिता का सम्मान", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के धम्म में सार्वभौमिक सद्भाव, धार्मिक सहिष्णुता, अहिंसा, माता-पिता और गुरुओं का सम्मान, और जीवों पर दया जैसे सिद्धांत शामिल थे।"
    },
    {
        question: "मौर्य साम्राज्य में 'बलि' और 'भाग' नामक कर किस पर लगाए जाते थे?",
        answers: shuffle([
            { text: "व्यापार पर", correct: false },
            { text: "भूमि पर", correct: true },
            { text: "धार्मिक गतिविधियों पर", correct: false },
            { text: "आयात पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बलि' एक धार्मिक कर था, जबकि 'भाग' उपज का हिस्सा था, जो भूमि राजस्व के रूप में लिया जाता था।"
    },
    {
        question: "अशोक के सारनाथ स्तंभ पर कौन सा जानवर नहीं है?",
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
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समाहर्ता' मौर्य काल में राजस्व संग्रह (tax collection) का सर्वोच्च अधिकारी था।"
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