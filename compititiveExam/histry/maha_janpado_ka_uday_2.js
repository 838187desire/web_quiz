const questions = [
    {
        topHeading: "महाजनपदों का उदय पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.20)"
    },
    {
        question: "मगध साम्राज्य के किस शासक को 'पितृहंता' (अपने पिता का हत्यारा) कहा जाता है?",
        answers: [
            { text: "बिम्बिसार", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "महापद्म नंद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने अपने पिता बिम्बिसार की हत्या करके मगध का सिंहासन प्राप्त किया था, इसलिए उसे 'पितृहंता' कहा जाता है।"
    },
    {
        question: "मगध का कौन सा शासक जैन धर्म का संरक्षक था और उसने अपनी राजधानी को राजगृह से पाटलिपुत्र स्थानांतरित किया?",
        answers: [
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयन", correct: true },
            { text: "शिशुनाग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयन, जो जैन धर्म का अनुयायी था, ने गंगा और सोन नदियों के संगम पर पाटलिपुत्र नगर की स्थापना की और उसे मगध की नई राजधानी बनाया।"
    },
    {
        question: "महाजनपद काल के दौरान किस महाजनपद की राजधानी इंद्रप्रस्थ थी?",
        answers: [
            { text: "पंचाल", correct: false },
            { text: "कुरु", correct: true },
            { text: "मत्स्य", correct: false },
            { text: "शूरसेन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरु महाजनपद की राजधानी इंद्रप्रस्थ थी, जो आधुनिक दिल्ली-मेरठ क्षेत्र में स्थित था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह महाभारत काल से संबंधित एक महत्वपूर्ण स्थान है।"
    },
    {
        question: "'पाणिनी' का संबंध किस महाजनपद के प्रमुख शिक्षा केंद्र से था?",
        answers: [
            { text: "काशी", correct: false },
            { text: "गांधार", correct: true },
            { text: "मगध", correct: false },
            { text: "अवंति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महान वैयाकरण (Grammarian) पाणिनी ने गांधार की राजधानी तक्षशिला में शिक्षा प्राप्त की थी।"
    },
    {
        question: "6वीं शताब्दी ईसा पूर्व में सबसे शक्तिशाली गणतंत्रीय महाजनपद कौन सा था?",
        answers: [
            { text: "मल्ल", correct: false },
            { text: "वज्जि", correct: true },
            { text: "कंबोज", correct: false },
            { text: "कुरु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वज्जि गणराज्य एक शक्तिशाली महाजनपद था जिसमें आठ अलग-अलग कुल शामिल थे, जिनमें लिच्छवि सबसे प्रमुख थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपनी गणतंत्रीय प्रणाली के लिए प्रसिद्ध था।"
    },
    {
        question: "गौतम बुद्ध ने अपना पहला उपदेश 'धर्मचक्र प्रवर्तन' कहाँ दिया था?",
        answers: [
            { text: "श्रावस्ती", correct: false },
            { text: "लुम्बिनी", correct: false },
            { text: "बोधगया", correct: false },
            { text: "सारनाथ", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध ने अपना पहला उपदेश सारनाथ में दिया था, जो वाराणसी (काशी महाजनपद की राजधानी) के पास स्थित था।"
    },
    {
        question: "मगध के किस शासक ने अवंति के शासक प्रद्योत के उपचार के लिए अपने राजवैद्य जीवक को भेजा था?",
        answers: [
            { text: "अजातशत्रु", correct: false },
            { text: "बिम्बिसार", correct: true },
            { text: "शिशुनाग", correct: false },
            { text: "महापद्म नंद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार का अवंति के साथ मैत्रीपूर्ण संबंध था।<br><br><i class='fa-solid fa-angles-right icon'></i> जब अवंति के शासक प्रद्योत को पीलिया हो गया था, तो बिम्बिसार ने अपने राजवैद्य जीवक को उसके उपचार के लिए भेजा था।"
    },
    {
        question: "'नंद वंश' का संस्थापक कौन था जिसने मगध साम्राज्य को चरम सीमा तक पहुँचाया?",
        answers: [
            { text: "महापद्म नंद", correct: true },
            { text: "घनानंद", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "काला अशोक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्म नंद ने शिशुनाग वंश को समाप्त करके नंद वंश की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> वह एक शक्तिशाली शासक था जिसने मगध का विस्तार करके उसे एक विशाल साम्राज्य में बदल दिया।"
    },
    {
        question: "किस महाजनपद को बाद में मगध ने अपने साम्राज्य में मिला लिया?",
        answers: [
            { text: "अंग", correct: false },
            { text: "काशी", correct: false },
            { text: "वज्जि", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध के शासकों ने धीरे-धीरे कई महाजनपदों पर विजय प्राप्त की।<br><br><i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अंग को, अजातशत्रु ने वज्जि को और बाद में मगध ने काशी को भी अपने साम्राज्य में मिला लिया।"
    },
    {
        question: "महाजनपद काल के किस शासक को 'सर्वक्षत्रान्तक' (सभी क्षत्रियों का नाश करने वाला) कहा जाता है?",
        answers: [
            { text: "अजातशत्रु", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "महापद्म नंद", correct: true },
            { text: "काला अशोक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्म नंद को उसके सैन्य अभियानों और कई क्षत्रिय राजवंशों को हराने के कारण 'सर्वक्षत्रान्तक' की उपाधि दी गई थी।"
    },
    {
        question: "'मत्स्य' महाजनपद किस क्षेत्र में स्थित था?",
        answers: [
            { text: "राजस्थान", correct: true },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "बिहार", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मत्स्य महाजनपद आधुनिक राजस्थान के जयपुर, अलवर और भरतपुर क्षेत्रों में स्थित था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी राजधानी विराटनगर थी।"
    },
    {
        question: "महाजनपद काल में 'पंचाल' किस क्षेत्र में स्थित था?",
        answers: [
            { text: "आधुनिक उत्तर प्रदेश", correct: true },
            { text: "आधुनिक पंजाब", correct: false },
            { text: "आधुनिक बिहार", correct: false },
            { text: "आधुनिक राजस्थान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंचाल महाजनपद आधुनिक उत्तर प्रदेश के बरेली, बदायूँ और फर्रुखाबाद जिलों के क्षेत्र में स्थित था।"
    },
    {
        question: "उस महाजनपद का नाम क्या था जिसकी राजधानी कुशीनगर थी और जहाँ बुद्ध को महापरिनिर्वाण प्राप्त हुआ था?",
        answers: [
            { text: "वज्जि", correct: false },
            { text: "कोशल", correct: false },
            { text: "मल्ल", correct: true },
            { text: "काशी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध को मल्ल महाजनपद की राजधानी कुशीनगर में महापरिनिर्वाण प्राप्त हुआ था।"
    },
    {
        question: "किस महाजनपद की राजधानी साकेत (अयोध्या) थी?",
        answers: [
            { text: "अंग", correct: false },
            { text: "काशी", correct: false },
            { text: "कोशल", correct: true },
            { text: "वज्जि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशल महाजनपद की दो राजधानियाँ थीं: उत्तरी कोशल की राजधानी श्रावस्ती और दक्षिणी कोशल की राजधानी साकेत (अयोध्या)।"
    },
    {
        question: "महाजनपद 'कुरु' किस नदी के किनारे स्थित था?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: true },
            { text: "रावी", correct: false },
            { text: "सतलुज", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरु महाजनपद गंगा और यमुना नदियों के दोआब क्षेत्र में स्थित था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी राजधानी इंद्रप्रस्थ थी, जो यमुना के किनारे थी।"
    },
    {
        question: "किस शासक के शासनकाल में मगध की राजधानी पाटलिपुत्र को स्थायी रूप से स्थापित किया गया?",
        answers: [
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयन", correct: true },
            { text: "शिशुनाग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयन ने पाटलिपुत्र नगर की स्थापना की और उसे मगध की राजधानी बनाया, जो बाद में मौर्य और गुप्त साम्राज्यों की भी राजधानी बनी।"
    },
    {
        question: "महाजनपद काल में 'मल्ल' महाजनपद की शासन प्रणाली कैसी थी?",
        answers: [
            { text: "राजतंत्रीय", correct: false },
            { text: "गणतंत्रीय", correct: true },
            { text: "तानाशाही", correct: false },
            { text: "कुलीनतंत्रीय", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मल्ल एक गणतंत्रीय महाजनपद था, जो वज्जि गणराज्य के समान था।"
    },
    {
        question: "महाजनपद 'अवंति' का राजा प्रद्योत किस धर्म का अनुयायी था?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "वैदिक धर्म", correct: false },
            { text: "शैव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवंति का शासक प्रद्योत प्रारंभ में एक क्रूर शासक था, लेकिन बाद में उसने बौद्ध धर्म अपना लिया था।"
    },
    {
        question: "किस महाजनपद ने अपनी शक्तिशाली नौसेना के लिए जाना जाता था?",
        answers: [
            { text: "मगध", correct: false },
            { text: "अंग", correct: true },
            { text: "वत्स", correct: false },
            { text: "अवंति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंग महाजनपद की राजधानी चंपा एक प्रमुख नदी-बंदरगाह था, जिसके कारण उसकी नौसेना बहुत मजबूत थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नौसेना उसे व्यापार में मदद करती थी।"
    },
    {
        question: "महाजनपद काल में 'महामात्य' (Mahamatya) किसे कहा जाता था?",
        answers: [
            { text: "राजा के सेनापति", correct: false },
            { text: "महत्वपूर्ण मंत्री या अधिकारी", correct: true },
            { text: "न्यायाधीश", correct: false },
            { text: "धार्मिक नेता", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महामात्य राजा के महत्वपूर्ण मंत्री या उच्च अधिकारी होते थे, जो शासन में राजा की सहायता करते थे।"
    },
    {
        question: "किस शासक ने मगध की राजधानी राजगृह को चारों ओर से पत्थर की दीवारों से घेर दिया था?",
        answers: [
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयन", correct: false },
            { text: "महापद्म नंद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अपनी राजधानी राजगृह को बाहरी आक्रमणों से बचाने के लिए चारों ओर से पत्थर की दीवारों से सुरक्षित किया था।"
    },
    {
        question: "'वज्जि' महाजनपद की राजधानी वैशाली किस नदी के तट पर स्थित थी?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "गंडक", correct: true },
            { text: "सोन", correct: false },
            { text: "कोसी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वज्जि की राजधानी वैशाली आधुनिक बिहार में गंडक नदी के पास स्थित थी।"
    },
    {
        question: "किस महाजनपद की राजधानी वाराणसी थी, जिसे बाद में मगध ने अपने साम्राज्य में मिला लिया था?",
        answers: [
            { text: "अंग", correct: false },
            { text: "कोशल", correct: false },
            { text: "काशी", correct: true },
            { text: "वत्स", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में, काशी एक शक्तिशाली महाजनपद था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन बाद में इसे कोशल ने जीत लिया और अंततः मगध ने इसे अपने साम्राज्य में मिला लिया।"
    },
    {
        question: "किस महाजनपद को 'हस्ती' (हाथी) के लिए जाना जाता था, जिसकी राजधानी हस्तिनापुर थी?",
        answers: [
            { text: "कुरु", correct: true },
            { text: "पंचाल", correct: false },
            { text: "मत्स्य", correct: false },
            { text: "शूरसेन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरु महाजनपद की राजधानी हस्तिनापुर थी, जिसका नाम 'हस्ती' से आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह महाभारत काल से भी संबंधित है।"
    },
    {
        question: "उस महाजनपद का नाम क्या था जो राजस्थान के अलवर, भरतपुर और जयपुर जिलों के क्षेत्र में स्थित था?",
        answers: [
            { text: "कुरु", correct: false },
            { text: "मत्स्य", correct: true },
            { text: "शूरसेन", correct: false },
            { text: "अवंति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मत्स्य महाजनपद की राजधानी विराटनगर थी और यह आधुनिक राजस्थान के जयपुर, अलवर और भरतपुर क्षेत्रों में स्थित था।"
    },
    {
        question: "किस महाजनपद का शासक 'प्रद्योत' था, जिसने अपनी बेटी का विवाह मगध के शासक उदयन से किया था?",
        answers: shuffle([
            { text: "कोशल", correct: false },
            { text: "अवंति", correct: true },
            { text: "वज्जि", correct: false },
            { text: "अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवंति के शासक प्रद्योत और मगध के शासक उदयन के बीच राजनीतिक संबंध थे, और इस रिश्ते को मजबूत करने के लिए प्रद्योत ने अपनी बेटी वासवदत्ता का विवाह उदयन से करवाया था।"
    },
    {
        question: "किस महाजनपद को शिक्षा और व्यापार के केंद्र के रूप में जाना जाता था, जहाँ 'पाणिनि' ने संस्कृत व्याकरण पर अपना कार्य किया?",
        answers: shuffle([
            { text: "काशी", correct: false },
            { text: "कोशल", correct: false },
            { text: "गांधार", correct: true },
            { text: "वत्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार की राजधानी तक्षशिला थी, जो एक प्रसिद्ध शिक्षा केंद्र था।<br><br><i class='fa-solid fa-angles-right icon'></i> महान वैयाकरण पाणिनि और कौटिल्य (चाणक्य) यहीं से संबंधित थे।"
    },
    {
        question: "किस महाजनपद की राजधानी 'श्रावस्ती' थी, जिसे बुद्ध काल में सबसे बड़ा शहर माना जाता था?",
        answers: shuffle([
            { text: "कोशल", correct: true },
            { text: "अंग", correct: false },
            { text: "वज्जि", correct: false },
            { text: "वत्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशल की राजधानी श्रावस्ती थी, जो बुद्ध के समय एक बहुत ही समृद्ध और घना आबादी वाला शहर था।<br><br><i class='fa-solid fa-angles-right icon'></i> बुद्ध ने अपने जीवन का अधिकांश समय यहीं बिताया था।"
    },
    {
        question: "किस महाजनपद की राजधानी 'कौशांबी' थी और वह अपने रेशम और सूती वस्त्रों के व्यापार के लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "कोशल", correct: false },
            { text: "वत्स", correct: true },
            { text: "अंग", correct: false },
            { text: "काशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वत्स की राजधानी कौशांबी थी, जो एक महत्वपूर्ण व्यापारिक केंद्र था और अपने सूती तथा रेशमी कपड़ों के लिए जाना जाता था।"
    },
    {
        question: "किस महाजनपद ने अपनी विशाल सेना और युद्ध में हाथियों के उपयोग के लिए प्रसिद्धि प्राप्त की?",
        answers: shuffle([
            { text: "कोशल", correct: false },
            { text: "अवंति", correct: false },
            { text: "मगध", correct: true },
            { text: "वज्जि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध के पास जंगलों में उपलब्ध हाथियों की विशाल सेना थी, जिसने उसे अन्य महाजनपदों पर सैन्य बढ़त दिलाई।"
    },
    {
        question: "किस महाजनपद में 'वैशाली' गणराज्य की राजधानी थी, जिसे विश्व का पहला गणराज्य माना जाता है?",
        answers: shuffle([
            { text: "मल्ल", correct: false },
            { text: "वज्जि", correct: true },
            { text: "काशी", correct: false },
            { text: "कुरु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वज्जि एक गणतांत्रिक महाजनपद था, और इसकी राजधानी वैशाली को विश्व का पहला गणराज्य माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ लिच्छवि सबसे प्रमुख कुल थे।"
    },
    {
        question: "किस महाजनपद का शासक 'प्रसेनजित' था, जो गौतम बुद्ध का समकालीन था?",
        answers: shuffle([
            { text: "मगध", correct: false },
            { text: "कोशल", correct: true },
            { text: "वज्जि", correct: false },
            { text: "अवंति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशल का शासक प्रसेनजित था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह गौतम बुद्ध का मित्र और समकालीन था, और उसने बौद्ध धर्म को संरक्षण भी दिया था।"
    },
    {
        question: "किस महाजनपद को 'नंद वंश' के महापद्म नंद ने जीतकर अपने साम्राज्य में मिला लिया था?",
        answers: shuffle([
            { text: "कलिंग", correct: true },
            { text: "कोशल", correct: false },
            { text: "अवंति", correct: false },
            { text: "उपर्युक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्म नंद ने मगध के विस्तार के लिए कई अभियान चलाए।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने कलिंग पर विजय प्राप्त की और वहाँ से जैन तीर्थंकर की मूर्ति को मगध ले आया था।"
    },
    {
        question: "किस महाजनपद की राजधानी 'पोतन' (पोट्टाना) थी और वह दक्षिण भारत में स्थित था?",
        answers: shuffle([
            { text: "अवंति", correct: false },
            { text: "चेदि", correct: false },
            { text: "अश्मक", correct: true },
            { text: "मत्स्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्मक (या अस्मक) एकमात्र महाजनपद था जो उत्तर भारत से बाहर, गोदावरी नदी के तट पर स्थित था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी राजधानी पोतन थी।"
    },
    {
        question: "किस महाजनपद को अंततः मगध में मिलाने का श्रेय 'शिशुनाग' को दिया जाता है?",
        answers: shuffle([
            { text: "काशी", correct: false },
            { text: "कोशल", correct: false },
            { text: "अवंति", correct: true },
            { text: "वज्जि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने अवंति को जीतकर मगध में मिला लिया, जिससे मगध का पश्चिम की ओर विस्तार हुआ।"
    },
    {
        question: "महाजनपद काल के किस शासक ने अपनी राजधानी को राजगृह से पाटलिपुत्र स्थानांतरित किया था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयन", correct: true },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयन, जो मगध के शासक अजातशत्रु का पुत्र था, ने गंगा और सोन नदियों के संगम पर पाटलिपुत्र की स्थापना की और उसे मगध की नई राजधानी बनाया।"
    },
    {
        question: "उस महाजनपद का नाम क्या था, जो अपने उत्तम घोड़ों और सैन्य शक्ति के लिए जाना जाता था और जिसकी राजधानी 'हाटक' थी?",
        answers: shuffle([
            { text: "गांधार", correct: false },
            { text: "कंबोज", correct: true },
            { text: "कुरु", correct: false },
            { text: "मत्स्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंबोज महाजनपद, जिसकी राजधानी हाटक या राजपुर थी, अपने घोड़ों के व्यापार और सैन्य शक्ति के लिए प्रसिद्ध था।"
    },
    {
        question: "किस महाजनपद में 'महावीर' को निर्वाण (मोक्ष) प्राप्त हुआ था?",
        answers: shuffle([
            { text: "वज्जि", correct: false },
            { text: "मल्ल", correct: true },
            { text: "अंग", correct: false },
            { text: "कोशल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के 24वें तीर्थंकर महावीर को मल्ल महाजनपद की राजधानी पावा में निर्वाण प्राप्त हुआ था।"
    },
    {
        question: "'बिम्बिसार' का विवाह किस महाजनपद की राजकुमारी से हुआ था, जिसने मगध को एक बड़ी राजनीतिक शक्ति बना दिया?",
        answers: shuffle([
            { text: "कोशल", correct: false },
            { text: "वज्जि", correct: false },
            { text: "अवंति", correct: false },
            { text: "ए और बी दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अपनी कूटनीतिक नीति के तहत विवाह संबंध बनाए।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने कोशल की राजकुमारी महाकोशला और वज्जि की राजकुमारी चेल्लना से विवाह किया, जिससे मगध की शक्ति और राजनीतिक पहुँच बढ़ी।"
    },
    {
        question: "किस महाजनपद की राजधानी 'महिष्मती' थी?",
        answers: shuffle([
            { text: "चेदि", correct: false },
            { text: "अवंति", correct: true },
            { text: "अश्मक", correct: false },
            { text: "मत्स्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवंति की दो राजधानियाँ थीं: उत्तरी अवंति की राजधानी उज्जयिनी और दक्षिणी अवंति की राजधानी महिष्मती।"
    },
    {
        question: "'छठवीं शताब्दी ईसा पूर्व' में भारतीय इतिहास में 'द्वितीय नगरीकरण' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "मगध साम्राज्य के उदय के कारण", correct: false },
            { text: "सिंधु घाटी सभ्यता के पुनरुत्थान के कारण", correct: false },
            { text: "गंगा घाटी में शहरों के उदय के कारण", correct: true },
            { text: "मौर्य साम्राज्य के गठन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 6वीं शताब्दी ईसा पूर्व में गंगा घाटी में कई बड़े शहरों का विकास हुआ, जिसे भारतीय इतिहास में द्वितीय नगरीकरण के रूप में जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> पहला नगरीकरण सिंधु घाटी सभ्यता में हुआ था।"
    },
    {
        question: "किस महाजनपद में 'मगध' का प्रमुख प्रतिद्वंद्वी था और उसके साथ मगध का बार-बार संघर्ष हुआ?",
        answers: shuffle([
            { text: "कोशल", correct: false },
            { text: "वज्जि", correct: false },
            { text: "अवंति", correct: true },
            { text: "पंचाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवंति महाजनपद, जिसका शासक प्रद्योत था, मगध का सबसे शक्तिशाली प्रतिद्वंद्वी था।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों के बीच कई युद्ध हुए, लेकिन अंततः शिशुनाग ने अवंति को मगध में मिला लिया।"
    },
    {
        question: "'राजगृह' को 'गिरिव्रज' क्यों कहा जाता था?",
        answers: shuffle([
            { text: "यह एक प्राचीन नाम था", correct: false },
            { text: "यह पाँच पहाड़ियों से घिरा हुआ था", correct: true },
            { text: "यह राजा का निवास था", correct: false },
            { text: "यह एक उपजाऊ भूमि पर स्थित था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजगृह (जिसे बाद में राजगीर कहा गया) पाँच पहाड़ियों से घिरा हुआ था, जिसके कारण इसे 'गिरिव्रज' (पहाड़ियों से घिरा स्थान) कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मगध की प्रारंभिक राजधानी थी।"
    },
    {
        question: "'चाणक्य' किस महाजनपद से संबंधित थे?",
        answers: shuffle([
            { text: "मगध", correct: false },
            { text: "गांधार", correct: true },
            { text: "कोशल", correct: false },
            { text: "अवंति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महान दार्शनिक और राजनीतिज्ञ चाणक्य (कौटिल्य) ने गांधार की राजधानी तक्षशिला में शिक्षा प्राप्त की थी।"
    },
    {
        question: "'महाजनपद' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "महान भूमि", correct: false },
            { text: "महान निवास स्थान", correct: false },
            { text: "महान राज्य", correct: true },
            { text: "महान शासक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाजनपद' दो शब्दों से मिलकर बना है: 'महा' (महान) और 'जनपद' (निवास स्थान)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ एक बड़े और शक्तिशाली राज्य से है।"
    },
    {
        question: "महाजनपद 'मत्स्य' की राजधानी क्या थी?",
        answers: shuffle([
            { text: "इंद्रप्रस्थ", correct: false },
            { text: "विराटनगर", correct: true },
            { text: "मथुरा", correct: false },
            { text: "शक्तिमती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मत्स्य महाजनपद की राजधानी विराटनगर थी, जो आधुनिक जयपुर के पास स्थित थी।<br><br><i class='fa-solid fa-angles-right icon'></i> महाभारत काल में पांडवों ने अपने अज्ञातवास का कुछ समय यहीं बिताया था।"
    },
    {
        question: "किस महाजनपद का शासक 'घनानंद' था, जिसे चंद्रगुप्त मौर्य ने हराकर मौर्य साम्राज्य की स्थापना की?",
        answers: shuffle([
            { text: "वज्जि", correct: false },
            { text: "कोशल", correct: false },
            { text: "मगध", correct: true },
            { text: "अवंति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घनानंद मगध के नंद वंश का अंतिम शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसे चाणक्य की मदद से चंद्रगुप्त मौर्य ने पराजित कर मौर्य साम्राज्य की स्थापना की थी।"
    },
    {
        question: "16 महाजनपदों में से कौन सा महाजनपद हिमालय की तलहटी में स्थित था?",
        answers: shuffle([
            { text: "कुरु", correct: false },
            { text: "पंचाल", correct: false },
            { text: "कोशल", correct: true },
            { text: "अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशल महाजनपद हिमालय की तलहटी में स्थित था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी राजधानी श्रावस्ती थी।"
    },
    {
        question: "'महापद्म नंद' को किस शासक के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "पहला साम्राज्य निर्माता", correct: true },
            { text: "पहला गणराज्य शासक", correct: false },
            { text: "पहला बौद्ध शासक", correct: false },
            { text: "पहला जैन शासक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्म नंद को भारत के इतिहास में पहला साम्राज्य निर्माता माना जाता है, जिसने मगध के राज्य को एक विशाल साम्राज्य में बदल दिया।"
    },
    {
        question: "किस महाजनपद को 'राजसूय यज्ञ' और 'अश्वमेध यज्ञ' के लिए जाना जाता था?",
        answers: shuffle([
            { text: "काशी", correct: false },
            { text: "कुरु", correct: true },
            { text: "मगध", correct: false },
            { text: "कोशल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरु महाजनपद, जो महाभारत काल से संबंधित था, राजसूय और अश्वमेध यज्ञ जैसे बड़े-बड़े वैदिक अनुष्ठानों के लिए प्रसिद्ध था।"
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