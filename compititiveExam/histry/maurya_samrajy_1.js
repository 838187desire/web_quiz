const questions = [
    {
        topHeading: "मौर्य साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.65)"
    },
    {
        question: "मौर्य साम्राज्य की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "बिन्दुसार", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "चाणक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य ने 322 ईसा पूर्व में नंद वंश के अंतिम शासक धनानंद को पराजित करके मौर्य साम्राज्य की स्थापना की थी।"
    },
    {
        question: "चंद्रगुप्त मौर्य के गुरु और प्रधानमंत्री कौन थे?",
        answers: shuffle([
            { text: "मेगस्थनीज", correct: false },
            { text: "कौटिल्य (चाणक्य)", correct: true },
            { text: "उपगुप्त", correct: false },
            { text: "विष्णुगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कौटिल्य, जिन्हें चाणक्य और विष्णुगुप्त के नाम से भी जाना जाता है, चंद्रगुप्त मौर्य के गुरु, मार्गदर्शक और प्रधानमंत्री थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने ही चंद्रगुप्त को मगध का शासक बनने में मदद की थी।"
    },
    {
        question: "'अर्थशास्त्र' नामक पुस्तक के लेखक कौन थे?",
        answers: shuffle([
            { text: "मेगस्थनीज", correct: false },
            { text: "चाणक्य", correct: true },
            { text: "विशाखदत्त", correct: false },
            { text: "कल्हण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्थशास्त्र' राजनीति, प्रशासन, सैन्य रणनीति और अर्थशास्त्र पर आधारित एक प्रसिद्ध ग्रंथ है, जिसकी रचना चाणक्य ने की थी।"
    },
    {
        question: "चंद्रगुप्त मौर्य ने किस यूनानी शासक को हराया था?",
        answers: shuffle([
            { text: "सिकंदर", correct: false },
            { text: "सेल्यूकस निकेटर", correct: true },
            { text: "टॉलेमी", correct: false },
            { text: "एंटिगोनस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य ने 305 ईसा पूर्व में सिकंदर के सेनापति सेल्यूकस निकेटर को पराजित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस संधि के परिणामस्वरूप, सेल्यूकस ने अपनी पुत्री हेलेना का विवाह चंद्रगुप्त से किया और कुछ महत्वपूर्ण क्षेत्र भी दिए।"
    },
    {
        question: "मेगस्थनीज किसके दरबार में राजदूत के रूप में आया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "अशोक", correct: false },
            { text: "बिन्दुसार", correct: false },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेगस्थनीज, सेल्यूकस निकेटर का राजदूत था, जिसे उसने चंद्रगुप्त मौर्य के दरबार में भेजा था।<br><br><i class='fa-solid fa-angles-right icon'></i> मेगस्थनीज ने 'इंडिका' नामक पुस्तक लिखी थी।"
    },
    {
        question: "मेगस्थनीज द्वारा लिखी गई पुस्तक का नाम क्या है?",
        answers: shuffle([
            { text: "अर्थशास्त्र", correct: false },
            { text: "मुद्राराक्षस", correct: false },
            { text: "इंडिका", correct: true },
            { text: "राजतरंगिणी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इंडिका' में मेगस्थनीज ने मौर्यकालीन भारत, विशेषकर राजधानी पाटलिपुत्र और समाज का विस्तृत वर्णन किया है।"
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
        question: "चंद्रगुप्त मौर्य के बाद मौर्य साम्राज्य का अगला शासक कौन बना?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "बिन्दुसार", correct: true },
            { text: "कुणाल", correct: false },
            { text: "दशरथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य के पुत्र बिन्दुसार ने उनके बाद मौर्य साम्राज्य का सिंहासन संभाला।"
    },
    {
        question: "बिन्दुसार को यूनानी लेखकों द्वारा किस नाम से जाना जाता था?",
        answers: shuffle([
            { text: "अमित्रोचेतस (Amitrochates)", correct: true },
            { text: "सेल्यूकस", correct: false },
            { text: "सैंड्रोकोटस", correct: false },
            { text: "प्लोटार्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिन्दुसार को यूनानी लेखकों ने 'अमित्रोचेतस' कहा था, जिसका अर्थ 'शत्रुओं का नाश करने वाला' होता है।"
    },
    {
        question: "अशोक ने किस युद्ध के बाद बौद्ध धर्म को अपनाया था?",
        answers: shuffle([
            { text: "कलिंग का युद्ध", correct: true },
            { text: "तक्षशिला का युद्ध", correct: false },
            { text: "झेलम का युद्ध", correct: false },
            { text: "पाटलिपुत्र का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कलिंग युद्ध (261 ईसा पूर्व) में हुए भीषण रक्तपात को देखकर अशोक का हृदय परिवर्तन हुआ और उसने बौद्ध धर्म को अपना लिया।"
    },
    {
        question: "अशोक का राज्याभिषेक किस वर्ष हुआ था?",
        answers: shuffle([
            { text: "273 ईसा पूर्व", correct: false },
            { text: "269 ईसा पूर्व", correct: true },
            { text: "261 ईसा पूर्व", correct: false },
            { text: "232 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक ने 273 ईसा पूर्व में सिंहासन संभाला था, लेकिन उसका औपचारिक राज्याभिषेक 269 ईसा पूर्व में हुआ था।"
    },
    {
        question: "कलिंग की राजधानी क्या थी?",
        answers: shuffle([
            { text: "तक्षशिला", correct: false },
            { text: "पाटलिपुत्र", correct: false },
            { text: "तोसली", correct: true },
            { text: "उज्जैन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कलिंग का युद्ध कलिंग की राजधानी तोसली को जीतने के लिए लड़ा गया था।"
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
        question: "अशोक के अधिकांश शिलालेख किस भाषा और लिपि में हैं?",
        answers: shuffle([
            { text: "संस्कृत और देवनागरी", correct: false },
            { text: "प्राकृत और ब्राह्मी", correct: true },
            { text: "पाली और खरोष्ठी", correct: false },
            { text: "ग्रीक और अरामाइक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के अधिकांश शिलालेख प्राकृत भाषा और ब्राह्मी लिपि में लिखे गए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तर-पश्चिमी भारत में कुछ शिलालेख खरोष्ठी, ग्रीक और अरामाइक लिपियों में भी पाए गए हैं।"
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
        question: "अशोक के सारनाथ स्तंभ पर कौन सा जानवर नहीं है?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "घोड़ा", correct: false },
            { text: "बैल", correct: false },
            { text: "गेंडा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारनाथ स्तंभ पर चार जानवर हैं: हाथी, घोड़ा, बैल और शेर।<br><br><i class='fa-solid fa-angles-right icon'></i> गेंडा इस पर मौजूद नहीं है।"
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
        question: "कौटिल्य के 'अर्थशास्त्र' में कितने 'अधिकरण' (अध्याय) हैं?",
        answers: shuffle([
            { text: "12", correct: false },
            { text: "15", correct: true },
            { text: "18", correct: false },
            { text: "20", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्थशास्त्र' को 15 'अधिकरणों' (अध्यायों) में विभाजित किया गया है।"
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
        question: "मौर्य साम्राज्य की राजधानी क्या थी?",
        answers: shuffle([
            { text: "उज्जैन", correct: false },
            { text: "तक्षशिला", correct: false },
            { text: "पाटलिपुत्र", correct: true },
            { text: "वैशाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाटलिपुत्र (आधुनिक पटना) मौर्य साम्राज्य की विशाल और सुव्यवस्थित राजधानी थी, जिसका वर्णन मेगस्थनीज ने भी अपनी पुस्तक 'इंडिका' में किया है।"
    },
    {
        question: "अशोक के किस शिलालेख में पड़ोसी देशों, जैसे सीरिया और मिस्र के शासकों के साथ उसके संबंधों का उल्लेख है?",
        answers: shuffle([
            { text: "5वाँ शिलालेख", correct: false },
            { text: "10वाँ शिलालेख", correct: false },
            { text: "13वाँ शिलालेख", correct: true },
            { text: "14वाँ शिलालेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 13वें शिलालेख में कलिंग युद्ध के अलावा, अशोक ने यवन (यूनानी) राजाओं, जैसे सीरिया के एंटिओकस II और मिस्र के टॉलेमी II फिलाडेल्फस के साथ अपने मैत्रीपूर्ण संबंधों का उल्लेख किया है।"
    },
    {
        question: "मौर्य काल में 'पाण' नामक सिक्का किस धातु का बना होता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: true },
            { text: "तांबा", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य काल में 'पाण' चांदी का बना हुआ एक प्रमुख सिक्का था, जबकि तांबे के सिक्के 'मासक' कहलाते थे।"
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
        question: "सारनाथ में स्थित अशोक स्तंभ पर कितने शेर हैं, जो भारतीय राष्ट्रीय प्रतीक का हिस्सा हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारनाथ स्तंभ पर चार शेर एक-दूसरे की ओर पीठ किए हुए हैं, जो शक्ति, साहस, आत्मविश्वास और गौरव का प्रतीक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत का राष्ट्रीय प्रतीक है।"
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
        question: "मौर्य काल में राजकीय भूमि की व्यवस्था करने वाला अधिकारी क्या कहलाता था?",
        answers: shuffle([
            { text: "सीताध्यक्ष", correct: true },
            { text: "समाहर्ता", correct: false },
            { text: "सन्निधाता", correct: false },
            { text: "अग्रोनोमोई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सीताध्यक्ष' राजकीय भूमि (सीता) का प्रमुख अधिकारी था, जो कृषि की देखरेख करता था।"
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
        question: "मौर्य प्रशासन में 'सन्निधाता' का क्या कार्य था?",
        answers: shuffle([
            { text: "सेनाध्यक्ष", correct: false },
            { text: "राजकीय कोष का प्रमुख", correct: true },
            { text: "नगर का प्रमुख", correct: false },
            { text: "न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सन्निधाता' मौर्य काल में राजकीय कोष (राजकोष) और भंडारगृह का प्रभारी होता था।"
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
        question: "मौर्य काल में व्यापारिक जहाजों का नेतृत्व करने वाले अधिकारी को क्या कहा जाता था?",
        answers: shuffle([
            { text: "पोताध्यक्ष", correct: false },
            { text: "नावाध्यक्ष", correct: false },
            { text: "पत्तनाध्यक्ष", correct: true },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पत्तनाध्यक्ष' मौर्य काल में बंदरगाहों (ports) का प्रमुख था, जो व्यापारिक जहाजों का भी प्रबंधन करता था।"
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
        question: "'अशोक के धम्म' का उद्देश्य क्या था?",
        answers: shuffle([
            { text: "बौद्ध धर्म का प्रचार", correct: false },
            { text: "धार्मिक संकीर्णता फैलाना", correct: false },
            { text: "एक सामाजिक-नैतिक आचार संहिता स्थापित करना", correct: true },
            { text: "साम्राज्य का सैन्य विस्तार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक का धम्म धार्मिक प्रचार से अधिक एक सामाजिक-नैतिक संहिता थी, जिसका उद्देश्य प्रजा में उच्च नैतिक मूल्यों को स्थापित करना था।"
    },
    {
        question: "मौर्य साम्राज्य में 'सुपिरंटेंडेंट' (Superintendent) नामक अधिकारी किस विभाग का प्रमुख था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "खान", correct: false },
            { text: "वाणिज्य", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य काल में विभिन्न विभागों के प्रमुखों को 'अध्यक्ष' या 'सुपिरंटेंडेंट' कहा जाता था, जैसे 'लोहाध्यक्ष' (धातु), 'लक्षणाध्यक्ष' (टकसाल) और 'सूत्राध्यक्ष' (वस्त्र)।"
    },
    {
        question: "अशोक ने अपने शिलालेखों में स्वयं को किस नाम से संबोधित किया है?",
        answers: shuffle([
            { text: "देवनांपिय", correct: false },
            { text: "प्रियदर्शी", correct: false },
            { text: "धर्मराज", correct: false },
            { text: "दोनों (A) और (B)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक ने अपने शिलालेखों में खुद को 'देवनांपिय' (देवताओं का प्रिय) और 'प्रियदर्शी' (देखने में सुंदर) कहा है।"
    },
    {
        question: "मौर्य काल में 'राजुक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "न्याय और राजस्व दोनों का कार्य", correct: true },
            { text: "केवल न्याय का कार्य", correct: false },
            { text: "केवल राजस्व का कार्य", correct: false },
            { text: "सैन्य कार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राजुक' नामक अधिकारी अशोक के शासनकाल में न्याय और राजस्व दोनों से संबंधित कार्य करते थे।"
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
        question: "मौर्य काल में 'बलि' और 'भाग' नामक कर किस पर लगाए जाते थे?",
        answers: shuffle([
            { text: "व्यापार पर", correct: false },
            { text: "भूमि पर", correct: true },
            { text: "धार्मिक गतिविधियों पर", correct: false },
            { text: "आयात पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बलि' एक धार्मिक कर था, जबकि 'भाग' उपज का हिस्सा था, जो भूमि राजस्व के रूप में लिया जाता था।"
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
        question: "किस प्राचीन भारतीय ग्रंथ में मौर्य साम्राज्य की नगर-व्यवस्था का विस्तृत वर्णन मिलता है?",
        answers: shuffle([
            { text: "अर्थशास्त्र", correct: false },
            { text: "इंडिका", correct: true },
            { text: "मुद्राराक्षस", correct: false },
            { text: "राजतरंगिणी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेगस्थनीज की 'इंडिका' में मौर्य साम्राज्य की राजधानी पाटलिपुत्र की नगर-व्यवस्था, शासन और समाज का विस्तृत वर्णन मिलता है।"
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