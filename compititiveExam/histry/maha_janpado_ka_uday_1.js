const questions = [
    {
        topHeading: "महाजनपदों का उदय पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.19)"
    },
    {
        question: "6वीं शताब्दी ईसा पूर्व में भारत में कुल कितने महाजनपद थे?",
        answers: [
            { text: "12", correct: false },
            { text: "14", correct: false },
            { text: "16", correct: true },
            { text: "18", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथ 'अंगुत्तर निकाय' और जैन ग्रंथ 'भगवती सूत्र' के अनुसार, 6वीं शताब्दी ईसा पूर्व में भारत में 16 महाजनपदों का उदय हुआ था।"
    },
    {
        question: "'अंगुत्तर निकाय' किस धर्म का एक ग्रंथ है जिसमें 16 महाजनपदों का उल्लेख है?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंगुत्तर निकाय' बौद्ध धर्म का एक महत्वपूर्ण ग्रंथ है, जिसमें 16 महाजनपदों की सूची दी गई है।"
    },
    {
        question: "'भगवती सूत्र' किस धर्म का एक ग्रंथ है जिसमें 16 महाजनपदों का उल्लेख है?",
        answers: [
            { text: "जैन धर्म", correct: true },
            { text: "बौद्ध धर्म", correct: false },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भगवती सूत्र' जैन धर्म का एक ग्रंथ है, जो महाजनपदों की जानकारी का दूसरा प्रमुख स्रोत है।"
    },
    {
        question: "सबसे शक्तिशाली महाजनपद कौन सा था जिसने अंततः अन्य सभी पर प्रभुत्व स्थापित किया?",
        answers: [
            { text: "मगध", correct: true },
            { text: "काशी", correct: false },
            { text: "कोशल", correct: false },
            { text: "अवंति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध महाजनपद ने अपनी भौगोलिक स्थिति, उपजाऊ भूमि, और मजबूत सैन्य शक्ति के कारण अन्य महाजनपदों पर प्रभुत्व स्थापित किया और एक विशाल साम्राज्य का निर्माण किया।"
    },
    {
        question: "महाजनपद 'अंग' की राजधानी क्या थी?",
        answers: [
            { text: "चंपा", correct: true },
            { text: "श्रावस्ती", correct: false },
            { text: "कौशांबी", correct: false },
            { text: "वैशाली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंग महाजनपद की राजधानी चंपा थी, जो आधुनिक भागलपुर और मुंगेर (बिहार) के क्षेत्र में स्थित थी।"
    },
    {
        question: "महाजनपद 'मगध' की प्रारंभिक राजधानी क्या थी?",
        answers: [
            { text: "पाटलिपुत्र", correct: false },
            { text: "गिरिव्रज (राजगृह)", correct: true },
            { text: "वैशाली", correct: false },
            { text: "चंपा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध की प्रारंभिक राजधानी गिरिव्रज थी, जिसे बाद में राजगृह के नाम से जाना गया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पाँच पहाड़ियों से घिरा एक रणनीतिक स्थान था।"
    },
    {
        question: "महाजनपद 'काशी' की राजधानी क्या थी?",
        answers: [
            { text: "वाराणसी", correct: true },
            { text: "मथुरा", correct: false },
            { text: "कौशांबी", correct: false },
            { text: "उज्जयिनी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काशी महाजनपद की राजधानी वाराणसी थी, जो एक महत्वपूर्ण धार्मिक और व्यापारिक केंद्र था।"
    },
    {
        question: "महाजनपद 'कोशल' की राजधानी क्या थी?",
        answers: [
            { text: "श्रावस्ती", correct: false },
            { text: "साकेत", correct: false },
            { text: "दोनों A और B", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशल की दो राजधानियाँ थीं: उत्तरी कोशल की राजधानी श्रावस्ती और दक्षिणी कोशल की राजधानी साकेत (अयोध्या)।"
    },
    {
        question: "महाजनपद 'वत्स' की राजधानी क्या थी?",
        answers: [
            { text: "कौशांबी", correct: true },
            { text: "मथुरा", correct: false },
            { text: "पाटलिपुत्र", correct: false },
            { text: "राजगृह", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वत्स महाजनपद की राजधानी कौशांबी थी, जो आधुनिक प्रयागराज (इलाहाबाद) के पास स्थित थी।"
    },
    {
        question: "महाजनपद 'अवंति' की राजधानी क्या थी?",
        answers: [
            { text: "मथुरा", correct: false },
            { text: "उज्जयिनी", correct: true },
            { text: "प्रतिष्ठान", correct: false },
            { text: "कुशीनगर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवंति की दो राजधानियाँ थीं: उत्तरी अवंति की राजधानी उज्जयिनी और दक्षिणी अवंति की राजधानी महिष्मती।"
    },
    {
        question: "महाजनपद 'मल्ल' की राजधानी क्या थी?",
        answers: [
            { text: "पावा और कुशीनगर", correct: true },
            { text: "राजगृह", correct: false },
            { text: "कौशांबी", correct: false },
            { text: "चंपा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मल्ल महाजनपद दो भागों में विभाजित था, जिसकी राजधानियाँ पावा (जहाँ महावीर को निर्वाण प्राप्त हुआ) और कुशीनगर (जहाँ गौतम बुद्ध को महापरिनिर्वाण प्राप्त हुआ) थीं।"
    },
    {
        question: "महाजनपद 'चेदि' की राजधानी क्या थी?",
        answers: [
            { text: "शक्तिमती (सोत्थिवती)", correct: true },
            { text: "कौशांबी", correct: false },
            { text: "उज्जयिनी", correct: false },
            { text: "मथुरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चेदि महाजनपद की राजधानी शक्तिमती थी, जो आधुनिक बुंदेलखंड के पूर्वी भाग में स्थित थी।"
    },
    {
        question: "महाजनपद 'कुरु' की राजधानी क्या थी?",
        answers: [
            { text: "इंद्रप्रस्थ", correct: true },
            { text: "हस्तिनापुर", correct: false },
            { text: "दोनों A और B", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरु महाजनपद की राजधानी इंद्रप्रस्थ थी, जो आधुनिक दिल्ली के क्षेत्र में स्थित थी।"
    },
    {
        question: "महाजनपद 'पंचाल' की राजधानी क्या थी?",
        answers: [
            { text: "अहिच्छत्र और काम्पिल्य", correct: true },
            { text: "मथुरा", correct: false },
            { text: "इंद्रप्रस्थ", correct: false },
            { text: "कौशांबी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंचाल महाजनपद की दो राजधानियाँ थीं: उत्तरी पंचाल की राजधानी अहिच्छत्र और दक्षिणी पंचाल की राजधानी काम्पिल्य।"
    },
    {
        question: "महाजनपद 'मत्स्य' की राजधानी क्या थी?",
        answers: [
            { text: "विराटनगर", correct: true },
            { text: "मथुरा", correct: false },
            { text: "हस्तिनापुर", correct: false },
            { text: "साकेत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मत्स्य महाजनपद की राजधानी विराटनगर थी, जो आधुनिक जयपुर के पास स्थित थी।"
    },
    {
        question: "महाजनपद 'शूरसेन' की राजधानी क्या थी?",
        answers: [
            { text: "कौशांबी", correct: false },
            { text: "मथुरा", correct: true },
            { text: "इंद्रप्रस्थ", correct: false },
            { text: "उज्जयिनी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शूरसेन महाजनपद की राजधानी मथुरा थी, जो यमुना नदी के किनारे स्थित थी।"
    },
    {
        question: "महाजनपद 'अश्मक' (अस्मक) की राजधानी क्या थी?",
        answers: [
            { text: "पोतन (पोट्टाना)", correct: true },
            { text: "उज्जयिनी", correct: false },
            { text: "वैशाली", correct: false },
            { text: "चंपा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्मक एकमात्र ऐसा महाजनपद था जो दक्षिण भारत में गोदावरी नदी के तट पर स्थित था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी राजधानी पोतन या पोट्टाना थी।"
    },
    {
        question: "महाजनपद 'गांधार' की राजधानी क्या थी?",
        answers: [
            { text: "तक्षशिला", correct: true },
            { text: "मथुरा", correct: false },
            { text: "इंद्रप्रस्थ", correct: false },
            { text: "राजगृह", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार महाजनपद की राजधानी तक्षशिला थी, जो शिक्षा और व्यापार का एक महत्वपूर्ण केंद्र था।"
    },
    {
        question: "महाजनपद 'कंबोज' की राजधानी क्या थी?",
        answers: [
            { text: "हाटक (राजपुर)", correct: true },
            { text: "चंपा", correct: false },
            { text: "वैशाली", correct: false },
            { text: "कौशांबी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंबोज महाजनपद की राजधानी हाटक या राजपुर थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पाकिस्तान और अफगानिस्तान के बीच के क्षेत्र में स्थित था।"
    },
    {
        question: "महाजनपद 'वज्जि' किस प्रकार का राज्य था?",
        answers: [
            { text: "राजतंत्रीय", correct: false },
            { text: "गणतंत्रीय", correct: true },
            { text: "कुलीनतंत्रीय", correct: false },
            { text: "साम्राज्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वज्जि एक गणतंत्रीय महाजनपद था, जिसमें कई कुलों (जैसे लिच्छवि, विदेह) का संघ शामिल था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राजतंत्रीय प्रणाली के विपरीत था।"
    },
    {
        question: "वज्जि संघ की राजधानी क्या थी?",
        answers: [
            { text: "वैशाली", correct: true },
            { text: "कौशांबी", correct: false },
            { text: "मथुरा", correct: false },
            { text: "चंपा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वज्जि संघ की राजधानी वैशाली थी, जो लिच्छवि गणराज्य का प्रमुख केंद्र भी था।"
    },
    {
        question: "महाजनपद काल के दौरान किस महाजनपद में लोहा प्रचुर मात्रा में पाया जाता था, जिसने उसकी शक्ति में वृद्धि की?",
        answers: [
            { text: "अंग", correct: false },
            { text: "कोशल", correct: false },
            { text: "मगध", correct: true },
            { text: "अवंति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध के पास राजगीर और गया के पास लोहे के समृद्ध भंडार थे, जिसने उसे शक्तिशाली हथियार बनाने में मदद की।"
    },
    {
        question: "'अजातशत्रु' किस महाजनपद का शासक था?",
        answers: [
            { text: "अंग", correct: false },
            { text: "कोशल", correct: false },
            { text: "मगध", correct: true },
            { text: "अवंति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु मगध के हर्यंक वंश का एक शक्तिशाली शासक था, जिसने अपने पिता बिम्बिसार की हत्या करके सिंहासन प्राप्त किया था।"
    },
    {
        question: "'उदयन' किस महाजनपद का शासक था?",
        answers: [
            { text: "मगध", correct: false },
            { text: "वत्स", correct: true },
            { text: "कोशल", correct: false },
            { text: "अवंति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयन वत्स महाजनपद का प्रसिद्ध शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी कहानी 'स्वप्नवासवदत्ता' नामक नाटक में वर्णित है।"
    },
    {
        question: "किस महाजनपद की राजधानी मथुरा थी और वह कृष्ण की जन्मभूमि मानी जाती है?",
        answers: [
            { text: "काशी", correct: false },
            { text: "शूरसेन", correct: true },
            { text: "कुरु", correct: false },
            { text: "मत्स्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शूरसेन की राजधानी मथुरा थी, जिसे प्राचीन काल से ही कृष्ण की जन्मभूमि और यादवों की राजधानी के रूप में जाना जाता है।"
    },
    {
        question: "किस महाजनपद को शिक्षा और ज्ञान का प्रमुख केंद्र माना जाता था, जहाँ चाणक्य और पाणिनि जैसे विद्वानों ने शिक्षा प्राप्त की थी?",
        answers: shuffle([
            { text: "काशी", correct: false },
            { text: "गांधार", correct: true },
            { text: "अवंति", correct: false },
            { text: "कोशल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार की राजधानी तक्षशिला थी, जो प्राचीन काल में शिक्षा और ज्ञान का एक विश्व प्रसिद्ध केंद्र था।<br><br><i class='fa-solid fa-angles-right icon'></i> चाणक्य और पाणिनि जैसे महान विद्वानों ने यहीं से शिक्षा प्राप्त की थी।"
    },
    {
        question: "गौतम बुद्ध का महापरिनिर्वाण किस महाजनपद में हुआ था?",
        answers: shuffle([
            { text: "वज्जि", correct: false },
            { text: "मल्ल", correct: true },
            { text: "काशी", correct: false },
            { text: "कोशल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध को मल्ल महाजनपद की राजधानी कुशीनगर में महापरिनिर्वाण प्राप्त हुआ था।"
    },
    {
        question: "किस महाजनपद के पास हाथियों की एक बड़ी सेना थी, जो मगध के विस्तार में एक महत्वपूर्ण कारक बनी?",
        answers: shuffle([
            { text: "अंग", correct: false },
            { text: "अवंति", correct: false },
            { text: "वत्स", correct: false },
            { text: "मगध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध के पास घने जंगल थे, जहाँ से उन्हें युद्ध के लिए हाथी आसानी से उपलब्ध हो जाते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> हाथियों की शक्तिशाली सेना ने मगध को अन्य महाजनपदों पर सैन्य बढ़त दिलाई।"
    },
    {
        question: "उस महाजनपद का नाम क्या था जो यमुना नदी के तट पर स्थित था और जिसकी राजधानी मथुरा थी?",
        answers: shuffle([
            { text: "कुरु", correct: false },
            { text: "शूरसेन", correct: true },
            { text: "चेदि", correct: false },
            { text: "मत्स्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शूरसेन महाजनपद यमुना नदी के किनारे स्थित था और इसकी राजधानी मथुरा थी, जो कृष्ण की जन्मभूमि के रूप में भी प्रसिद्ध है।"
    },
    {
        question: "किस महाजनपद में पहली बार गणतंत्र की अवधारणा विकसित हुई थी?",
        answers: shuffle([
            { text: "मगध", correct: false },
            { text: "वज्जि", correct: true },
            { text: "काशी", correct: false },
            { text: "कोशल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वज्जि एक गणतंत्रीय महाजनपद था, जिसमें कई कुलों (जैसे लिच्छवि) का एक संघ था।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ राजशाही के बजाय सामूहिक शासन होता था।"
    },
    {
        question: "राजा बिम्बिसार किस महाजनपद के शासक थे?",
        answers: shuffle([
            { text: "अवंति", correct: false },
            { text: "मगध", correct: true },
            { text: "कोशल", correct: false },
            { text: "अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार मगध के हर्यंक वंश का पहला प्रमुख शासक था, जिसने मगध साम्राज्य की नींव रखी।"
    },
    {
        question: "महाजनपद काल में 'श्रेणी' (Shreni) किसे कहते थे?",
        answers: shuffle([
            { text: "सैनिकों का समूह", correct: false },
            { text: "व्यापारियों और शिल्पकारों का संगठन", correct: true },
            { text: "राजा के सलाहकार", correct: false },
            { text: "धार्मिक नेताओं का समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रेणी व्यापारियों और शिल्पकारों का एक Guild था, जो अपने सदस्यों के हितों की रक्षा करता था और व्यापार को नियंत्रित करता था।"
    },
    {
        question: "किस महाजनपद की राजधानी चंपा थी, जो अपने रेशम और सूती वस्त्रों के व्यापार के लिए प्रसिद्ध थी?",
        answers: shuffle([
            { text: "काशी", correct: false },
            { text: "अंग", correct: true },
            { text: "कोशल", correct: false },
            { text: "वत्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंग महाजनपद की राजधानी चंपा थी, जो एक महत्वपूर्ण नदी-बंदरगाह और व्यापारिक केंद्र था।"
    },
    {
        question: "महाजनपद 'अंग' को अंततः किस महाजनपद ने अपने साम्राज्य में मिला लिया?",
        answers: shuffle([
            { text: "कोशल", correct: false },
            { text: "अवंति", correct: false },
            { text: "मगध", correct: true },
            { text: "वज्जि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध के शासक बिम्बिसार ने अंग पर आक्रमण करके उसे अपने साम्राज्य में मिला लिया, जिससे मगध का विस्तार हुआ।"
    },
    {
        question: "किस महाजनपद की राजधानी उज्जयिनी थी, जो पश्चिमी भारत का एक प्रमुख व्यापारिक केंद्र था?",
        answers: shuffle([
            { text: "अवंति", correct: true },
            { text: "शूरसेन", correct: false },
            { text: "मत्स्य", correct: false },
            { text: "चेदि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवंति महाजनपद की राजधानी उज्जयिनी थी, जो एक प्रमुख व्यापारिक मार्ग पर स्थित होने के कारण बहुत महत्वपूर्ण थी।"
    },
    {
        question: "महाजनपद काल के किस शासक ने अपनी राजधानी को राजगृह से पाटलिपुत्र स्थानांतरित किया था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयन", correct: true },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयन, जो मगध के शासक अजातशत्रु का पुत्र था, ने गंगा और सोन नदियों के संगम पर पाटलिपुत्र की स्थापना की और उसे अपनी राजधानी बनाया।"
    },
    {
        question: "उस महाजनपद का नाम क्या था, जिसकी राजधानी कौशांबी थी और जो अपने सूती कपड़ों के लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "कोशल", correct: false },
            { text: "काशी", correct: false },
            { text: "वत्स", correct: true },
            { text: "पंचाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वत्स महाजनपद की राजधानी कौशांबी थी, जो एक महत्वपूर्ण व्यापारिक केंद्र था और सूती कपड़ों के व्यापार के लिए जाना जाता था।"
    },
    {
        question: "किस महाजनपद ने अपनी विशाल सेना के लिए जाना जाता था और उसका राजा प्रद्योत महासेन था?",
        answers: shuffle([
            { text: "मगध", correct: false },
            { text: "अवंति", correct: true },
            { text: "कोशल", correct: false },
            { text: "पंचाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवंति का शासक प्रद्योत महासेन बहुत शक्तिशाली था और उसकी सेना भी बहुत मजबूत थी।<br><br><i class='fa-solid fa-angles-right icon'></i> मगध के साथ उसका कई बार संघर्ष हुआ।"
    },
    {
        question: "'प्रद्योत' किस महाजनपद का प्रसिद्ध शासक था?",
        answers: shuffle([
            { text: "अवंति", correct: true },
            { text: "मगध", correct: false },
            { text: "वत्स", correct: false },
            { text: "कोशल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रद्योत अवंति महाजनपद का शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह बहुत क्रूर और महत्वाकांक्षी था, जिसका उल्लेख विभिन्न ग्रंथों में मिलता है।"
    },
    {
        question: "किस महाजनपद की राजधानी श्रवास्ती थी, जो अपने भव्य महलों और दीवारों के लिए प्रसिद्ध थी?",
        answers: shuffle([
            { text: "अंग", correct: false },
            { text: "कोशल", correct: true },
            { text: "वत्स", correct: false },
            { text: "काशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशल की राजधानी श्रावस्ती थी, जो अपनी भव्य इमारतों और किलेबंदी के लिए प्रसिद्ध थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण धार्मिक और व्यापारिक केंद्र भी था।"
    },
    {
        question: "महाजनपद काल में 'पंचाल' की दो राजधानियाँ कौन सी थीं?",
        answers: shuffle([
            { text: "मथुरा और अहिच्छत्र", correct: false },
            { text: "अहिच्छत्र और काम्पिल्य", correct: true },
            { text: "इंद्रप्रस्थ और हस्तिनापुर", correct: false },
            { text: "विराटनगर और मथुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तरी पंचाल की राजधानी अहिच्छत्र और दक्षिणी पंचाल की राजधानी काम्पिल्य थी।"
    },
    {
        question: "किस महाजनपद की राजधानी वाराणसी थी, जो धार्मिक और व्यापारिक केंद्र के रूप में प्रसिद्ध थी?",
        answers: shuffle([
            { text: "अंग", correct: false },
            { text: "काशी", correct: true },
            { text: "कोशल", correct: false },
            { text: "वज्जि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काशी महाजनपद की राजधानी वाराणसी थी, जो गंगा नदी के किनारे स्थित थी और एक प्रमुख धार्मिक व व्यापारिक केंद्र थी।"
    },
    {
        question: "महाजनपद काल में 'गांधार' की राजधानी कहाँ थी?",
        answers: shuffle([
            { text: "राजगृह", correct: false },
            { text: "मथुरा", correct: false },
            { text: "चंपा", correct: false },
            { text: "तक्षशिला", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार महाजनपद की राजधानी तक्षशिला थी, जो वर्तमान पाकिस्तान में स्थित है।"
    },
    {
        question: "किस महाजनपद में गणतंत्रात्मक व्यवस्था थी और यह लिच्छवियों का प्रमुख केंद्र था?",
        answers: shuffle([
            { text: "वज्जि", correct: true },
            { text: "मल्ल", correct: false },
            { text: "कुरु", correct: false },
            { text: "पंचाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वज्जि एक गणतंत्रीय महाजनपद था, जिसमें लिच्छवि सबसे प्रमुख कुल थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी राजधानी वैशाली थी।"
    },
    {
        question: "मगध के उत्थान का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "उपजाऊ भूमि", correct: false },
            { text: "लोहे के भंडार", correct: false },
            { text: "गंगा नदी का सामरिक महत्व", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध के उत्थान के कई कारण थे, जिनमें उपजाऊ भूमि, लोहे के भंडार, गंगा नदी का सामरिक और व्यापारिक महत्व, और महत्वाकांक्षी शासक शामिल थे।"
    },
    {
        question: "'बिम्बिसार' का संबंध किस वंश से था?",
        answers: shuffle([
            { text: "शिशुनाग वंश", correct: false },
            { text: "मौर्य वंश", correct: false },
            { text: "हर्यंक वंश", correct: true },
            { text: "नंद वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार हर्यंक वंश का संस्थापक था, जिसने मगध में साम्राज्य की नींव रखी।"
    },
    {
        question: "6वीं शताब्दी ईसा पूर्व में, कौन सा महाजनपद हिमालय की तलहटी में स्थित था?",
        answers: shuffle([
            { text: "कोशल", correct: false },
            { text: "वज्जि", correct: false },
            { text: "दोनों A और B", correct: true },
            { text: "केवल A", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशल और वज्जि दोनों महाजनपद हिमालय की तलहटी में स्थित थे।"
    },
    {
        question: "किस महाजनपद का शासक 'प्रसेनजित' था, जो बुद्ध के समकालीन था?",
        answers: shuffle([
            { text: "काशी", correct: false },
            { text: "मगध", correct: false },
            { text: "कोशल", correct: true },
            { text: "वत्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसेनजित कोशल महाजनपद का शक्तिशाली शासक था, जो गौतम बुद्ध का समकालीन और मित्र था।"
    },
    {
        question: "16 महाजनपदों में से कौन सा महाजनपद दक्षिण भारत में गोदावरी नदी के तट पर स्थित था?",
        answers: shuffle([
            { text: "अवंति", correct: false },
            { text: "अश्मक (अस्मक)", correct: true },
            { text: "वत्स", correct: false },
            { text: "चेदि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्मक (या अस्मक) एकमात्र महाजनपद था जो उत्तर भारत से बाहर, गोदावरी नदी के तट पर स्थित था।"
    },
    {
        question: "किस महाजनपद की राजधानी राजपुर थी, जो अपने उत्तम घोड़ों के लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "गांधार", correct: false },
            { text: "कंबोज", correct: true },
            { text: "कुरु", correct: false },
            { text: "मत्स्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंबोज महाजनपद की राजधानी राजपुर या हाटक थी, जो अपने घोड़ों के व्यापार और उत्कृष्ट सैन्य शक्ति के लिए प्रसिद्ध था।"
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