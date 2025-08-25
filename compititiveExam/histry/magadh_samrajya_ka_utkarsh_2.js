const questions = [
    {
        topHeading: "मगध राज्य के उत्कर्ष पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.58)"
    },
    {
        question: "महापद्मनंद को किस पुराण में 'सर्वक्षत्रान्तक' कहा गया है?",
        answers: shuffle([
            { text: "मत्स्य पुराण", correct: false },
            { text: "वायु पुराण", correct: true },
            { text: "विष्णु पुराण", correct: false },
            { text: "उपर्युक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायु पुराण में महापद्मनंद को 'सर्वक्षत्रान्तक' अर्थात सभी क्षत्रियों का नाश करने वाला बताया गया है।"
    },
    {
        question: "सिकंदर का समकालीन मगध शासक कौन था, जिसने यूनानी स्रोतों में 'अग्रमिज' या 'जेन्ड्रेमिस' के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "घनानंद", correct: true },
            { text: "शिशुनाग", correct: false },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी स्रोतों में धनानंद को 'अग्रमिज' (Agrammes) या 'जेन्ड्रेमिस' (Xandrames) कहा गया है।"
    },
    {
        question: "हर्यंक वंश के किस शासक ने सबसे पहले मगध को एक साम्राज्यवादी शक्ति के रूप में स्थापित किया?",
        answers: shuffle([
            { text: "बृहद्रथ", correct: false },
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अंग को जीतकर और वैवाहिक संबंधों के माध्यम से मगध को एक साम्राज्यवादी शक्ति के रूप में स्थापित किया।"
    },
    {
        question: "नंद वंश के शासकों को 'क्षत्रिय' मानने का प्रमाण किस स्रोत से मिलता है?",
        answers: shuffle([
            { text: "पुराणों से", correct: false },
            { text: "बौद्ध ग्रंथों से", correct: false },
            { text: "जैन ग्रंथों से", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंद शासकों को बौद्ध और जैन ग्रंथों में शूद्र मूल का बताया गया है, और पुराणों में भी उनके निम्न वंश का संकेत मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोई भी प्रमुख स्रोत उन्हें क्षत्रिय नहीं मानता है।"
    },
    {
        question: "किस मगध शासक ने 'राजधानी' को सुरक्षित करने के लिए चारों ओर दीवार बनवाई?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अपनी राजधानी राजगृह को बाहरी आक्रमणों से सुरक्षित करने के लिए चारों ओर एक मजबूत दीवार का निर्माण करवाया था।"
    },
    {
        question: "मगध साम्राज्य में शामिल होने वाला पहला महाजनपद कौन था?",
        answers: shuffle([
            { text: "वज्जि", correct: false },
            { text: "कौशल", correct: false },
            { text: "अवन्ति", correct: false },
            { text: "अंग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंग को बिम्बिसार ने मगध में मिलाया था, जिससे यह मगध साम्राज्य में शामिल होने वाला पहला महाजनपद बना।"
    },
    {
        question: "मगध के किस शासक ने अपनी सैन्य शक्ति के कारण 'उग्रसेन' की उपाधि धारण की?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "घनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद की विशाल और उग्र सेना के कारण उसे पुराणों में 'उग्रसेन' कहा गया है।"
    },
    {
        question: "मगध के किस शासक ने 'राजगीर' (राजगृह) को अपनी स्थायी राजधानी बनाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने राजगृह को अपनी स्थायी राजधानी के रूप में विकसित किया और उसे एक मजबूत किला बनाया।"
    },
    {
        question: "मगध पर शासन करने वाले वंशों का सही क्रम क्या है?",
        answers: shuffle([
            { text: "शिशुनाग, हर्यंक, नंद, मौर्य", correct: false },
            { text: "हर्यंक, शिशुनाग, नंद, मौर्य", correct: true },
            { text: "नंद, हर्यंक, शिशुनाग, मौर्य", correct: false },
            { text: "मौर्य, हर्यंक, शिशुनाग, नंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध पर शासन करने वाले प्रमुख वंशों का क्रम है: हर्यंक वंश, शिशुनाग वंश, नंद वंश और उसके बाद मौर्य वंश।"
    },
    {
        question: "किस मगध शासक ने कौशल की राजकुमारी महाकोशला से विवाह किया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने कौशल नरेश प्रसेनजित की बहन महाकोशला से विवाह किया था, जिससे उसे काशी का क्षेत्र दहेज में मिला था।"
    },
    {
        question: "नंद वंश के शासकों को पुराणों में 'अक्षय' कहा गया है। इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "कभी न हारने वाला", correct: false },
            { text: "कभी न खत्म होने वाला धन", correct: true },
            { text: "विशाल सेना", correct: false },
            { text: "महान शासक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंद शासक अपनी धन-संपदा के लिए प्रसिद्ध थे।<br><br><i class='fa-solid fa-angles-right icon'></i> पुराणों में उन्हें 'अक्षय' (असीमित) धन का स्वामी बताया गया है।"
    },
    {
        question: "किस मगध शासक के शासनकाल में बुद्ध का महापरिनिर्वाण हुआ था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महात्मा बुद्ध का महापरिनिर्वाण 483 ईसा पूर्व में अजातशत्रु के शासनकाल में हुआ था।"
    },
    {
        question: "किस शासक ने अवन्ति की राजधानी उज्जयिनी को जीत कर मगध में मिलाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने अवन्ति के शासक प्रद्योत को हराकर उसके शक्तिशाली राज्य उज्जयिनी को मगध में मिला लिया था।"
    },
    {
        question: "किस शासक ने अपनी राजधानी पाटलिपुत्र को चारों ओर से घेरकर दुर्ग का निर्माण करवाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: true },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयीन ने पाटलिपुत्र को एक मजबूत और सुरक्षित राजधानी बनाने के लिए चारों ओर से घेरकर एक दुर्ग का निर्माण करवाया था।"
    },
    {
        question: "नंद वंश के शासक किस धर्म को विशेष रूप से संरक्षण देते थे?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "आजीवक संप्रदाय", correct: false },
            { text: "शैव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंद वंश के शासक जैन धर्म के प्रति उदार थे।<br><br><i class='fa-solid fa-angles-right icon'></i> महापद्मनंद और धनानंद दोनों ने जैन संतों को संरक्षण दिया।"
    },
    {
        question: "किस मगध शासक ने अपनी राजधानी को पाटलिपुत्र से हटाकर वैशाली स्थानांतरित किया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "शिशुनाग", correct: true },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने अपनी प्रशासनिक सुविधा के लिए मगध की राजधानी को पाटलिपुत्र से हटाकर वैशाली स्थानांतरित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, उसके उत्तराधिकारी कालाशोक ने पुनः पाटलिपुत्र को ही स्थायी राजधानी बनाया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार, वैशाली को राजधानी बनाने वाला शासक शिशुनाग ही था।"
    },
    {
        question: "हर्यंक वंश के किस शासक ने अपने पिता को कारागार में डालकर स्वयं सिंहासन पर बैठा?",
        answers: shuffle([
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "अनिरुद्ध", correct: false },
            { text: "मुंडक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने अपने पिता बिम्बिसार को कारागार में डाल दिया और अंततः उनकी हत्या करके सिंहासन पर अधिकार कर लिया।"
    },
    {
        question: "मगध साम्राज्य के उत्थान के लिए सबसे महत्वपूर्ण कारक क्या था?",
        answers: shuffle([
            { text: "धार्मिक नीतियां", correct: false },
            { text: "विशाल भौगोलिक क्षेत्र", correct: false },
            { text: "कुशल सैन्य नेतृत्व", correct: true },
            { text: "शासकों की कूटनीतिक नीतियां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध के उत्थान में कुशल सैन्य नेतृत्व और लोहे के हथियारों की उपलब्धता का महत्वपूर्ण योगदान था, जिसने उसे अन्य राज्यों पर विजय प्राप्त करने में मदद की।"
    },
    {
        question: "किस शासक ने नंद वंश की स्थापना की और एक विशाल साम्राज्य का निर्माण किया?",
        answers: shuffle([
            { text: "धनानंद", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "शिशुनाग", correct: false },
            { text: "उदयीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने शिशुनाग वंश का अंत करके नंद वंश की स्थापना की और अपने सैन्य अभियानों के माध्यम से एक विशाल साम्राज्य का निर्माण किया।"
    },
    {
        question: "'पित्रहंता वंश' के रूप में किस वंश को जाना जाता है?",
        answers: shuffle([
            { text: "नंद वंश", correct: false },
            { text: "शिशुनाग वंश", correct: false },
            { text: "हर्यंक वंश", correct: true },
            { text: "मौर्य वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्यंक वंश के कई शासकों ने अपने पिता की हत्या करके सिंहासन प्राप्त किया, इसलिए इसे 'पितृहन्ता वंश' भी कहा जाता है।"
    },
    {
        question: "किस शासक के शासनकाल में गौतम बुद्ध की मृत्यु हुई?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महात्मा बुद्ध का महापरिनिर्वाण अजातशत्रु के शासनकाल में हुआ था।"
    },
    {
        question: "किस मगध शासक ने 'एकछत्र' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "घनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने अपनी विजयों के कारण 'एकछत्र' अर्थात पूरे क्षेत्र का एक ही शासक होने की उपाधि धारण की थी।"
    },
    {
        question: "किस यूनानी लेखक ने घनानंद को 'अग्रमिज' कहा है?",
        answers: shuffle([
            { text: "हेरोडोटस", correct: false },
            { text: "मेगास्थनीज", correct: false },
            { text: "कर्टियस", correct: true },
            { text: "एरियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्टियस और अन्य यूनानी लेखकों ने घनानंद को 'अग्रमिज' कहा है।"
    },
    {
        question: "नंद वंश का सबसे शक्तिशाली शासक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: true },
            { text: "घनानंद", correct: false },
            { text: "कालासोक", correct: false },
            { text: "उदयीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद नंद वंश का सबसे शक्तिशाली और साम्राज्यवादी शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने एक विशाल सेना और साम्राज्य का निर्माण किया था।"
    },
    {
        question: "किस मगध शासक ने बौद्ध धर्म को संरक्षण दिया था और बुद्ध के अनुयायी बन गए थे?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "A और B दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार और अजातशत्रु दोनों ने बौद्ध धर्म को संरक्षण दिया था और महात्मा बुद्ध के अनुयायी बन गए थे।"
    },
    {
        question: "मगध के किस शासक ने 'अवन्ति' को जीत कर मगध में मिलाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने अवन्ति को हराकर मगध साम्राज्य का विस्तार किया था।"
    },
    {
        question: "किस शासक ने 'एकराट' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद को 'एकराट' की उपाधि दी गई थी, जिसका अर्थ है 'एकमात्र शासक'।"
    },
    {
        question: "मगध के उत्थान में किस नदी का महत्वपूर्ण योगदान था?",
        answers: shuffle([
            { text: "यमुना", correct: false },
            { text: "गंगा", correct: true },
            { text: "गोदावरी", correct: false },
            { text: "नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा नदी और उसकी सहायक नदियों ने मगध को उपजाऊ भूमि और महत्वपूर्ण व्यापारिक मार्ग प्रदान किए, जो उसके उत्थान का एक मुख्य कारण था।"
    },
    {
        question: "बिम्बिसार के बाद मगध का शासक कौन बना?",
        answers: shuffle([
            { text: "उदयीन", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "शिशुनाग", correct: false },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने अपने पिता बिम्बिसार को मारकर मगध का सिंहासन प्राप्त किया।"
    },
    {
        question: "किस मगध शासक ने पाटलिपुत्र को स्थायी राजधानी बनाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: true },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयीन ने पाटलिपुत्र को अपनी राजधानी बनाया और उसे एक महत्वपूर्ण शहर के रूप में विकसित किया।"
    },
    {
        question: "नंद वंश का सबसे धनी शासक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "घनानंद", correct: true },
            { text: "शिशुनाग", correct: false },
            { text: "उदयीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घनानंद अपनी असीमित धन-संपदा के लिए प्रसिद्ध था।<br><br><i class='fa-solid fa-angles-right icon'></i> यूनानी लेखकों ने भी उसके अपार धन का उल्लेख किया है।"
    },
    {
        question: "किस शासक के शासनकाल में द्वितीय बौद्ध संगीति आयोजित की गई थी?",
        answers: shuffle([
            { text: "अजातशत्रु", correct: false },
            { text: "कालासोक", correct: true },
            { text: "अशोक", correct: false },
            { text: "कनिष्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय बौद्ध संगीति 383 ईसा पूर्व में वैशाली में कालाशोक के संरक्षण में आयोजित की गई थी।"
    },
    {
        question: "हर्यंक वंश के किस शासक ने अंग को मगध में मिलाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "नागदशक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अंग को जीतकर मगध का विस्तार किया।"
    },
    {
        question: "नंद वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "घनानंद", correct: true },
            { text: "कालासोक", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घनानंद नंद वंश का अंतिम शासक था, जिसे चंद्रगुप्त मौर्य ने पराजित किया।"
    },
    {
        question: "सिकंदर के आक्रमण के समय भारत में कौन सा वंश शासन कर रहा था?",
        answers: shuffle([
            { text: "मौर्य वंश", correct: false },
            { text: "नंद वंश", correct: true },
            { text: "हर्यंक वंश", correct: false },
            { text: "शिशुनाग वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सिकंदर ने भारत पर आक्रमण किया, उस समय मगध पर नंद वंश का शासक घनानंद था।"
    },
    {
        question: "किस शासक को 'सर्वक्षत्रान्तक' कहा गया है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने कई क्षत्रिय राज्यों को जीतकर अपने साम्राज्य का विस्तार किया था, इसलिए उसे 'सर्वक्षत्रान्तक' कहा गया है।"
    },
    {
        question: "मगध साम्राज्य की प्रारंभिक राजधानी 'गिरिव्रज' किस नाम से जानी जाती थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "वैशाली", correct: false },
            { text: "राजगृह", correct: true },
            { text: "चंपा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिरिव्रज को ही राजगृह कहा जाता था।"
    },
    {
        question: "किस शासक को 'कुणिक' के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु को 'कुणिक' कहा जाता था।"
    },
    {
        question: "बिम्बिसार ने अपनी शक्ति को बढ़ाने के लिए कौन सी रणनीति अपनाई?",
        answers: shuffle([
            { text: "केवल युद्ध", correct: false },
            { text: "केवल वैवाहिक संबंध", correct: false },
            { text: "युद्ध और वैवाहिक संबंध दोनों", correct: true },
            { text: "धार्मिक सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अंग के साथ युद्ध किया और कौशल, लिच्छवी और मद्र राज्यों के साथ वैवाहिक संबंध स्थापित किए।"
    },
    {
        question: "किस मगध शासक को बौद्ध धर्म का अनुयायी माना जाता है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "A और B दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार और अजातशत्रु दोनों बौद्ध धर्म के अनुयायी थे।"
    },
    {
        question: "नंद वंश के किस शासक ने कलिंग पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने कलिंग पर विजय प्राप्त की और वहाँ से एक जैन प्रतिमा मगध ले आया था।"
    },
    {
        question: "मगध के किस शासक ने अपनी राजधानी वैशाली से हटाकर पाटलिपुत्र स्थानांतरित की?",
        answers: shuffle([
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "कालासोक", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने वैशाली को राजधानी बनाया था, लेकिन उसके उत्तराधिकारी कालाशोक ने फिर से पाटलिपुत्र को राजधानी बनाया।"
    },
    {
        question: "हर्यंक वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "नागदशक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागदशक हर्यंक वंश का अंतिम शासक था, जिसे शिशुनाग ने अपदस्थ किया।"
    },
    {
        question: "नंद वंश के बाद मगध पर किस वंश का शासन स्थापित हुआ?",
        answers: shuffle([
            { text: "शिशुनाग वंश", correct: false },
            { text: "मौर्य वंश", correct: true },
            { text: "गुप्त वंश", correct: false },
            { text: "शुंग वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंद वंश के अंतिम शासक घनानंद को हराकर चंद्रगुप्त मौर्य ने मौर्य साम्राज्य की स्थापना की।"
    },
    {
        question: "किस मगध शासक ने 'एकराट' और 'एकछत्र' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने भारत के कई हिस्सों पर विजय प्राप्त की और एक विशाल साम्राज्य की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण उसे 'एकराट' और 'एकछत्र' जैसी उपाधियाँ दी गईं।"
    },
    {
        question: "मगध साम्राज्य में किस खनिज की उपलब्धता ने सैन्य शक्ति को बढ़ाने में मदद की?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: true },
            { text: "सोना", correct: false },
            { text: "चांदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध क्षेत्र में लोहे की खदानें प्रचुर मात्रा में उपलब्ध थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इस लोहे का उपयोग बेहतर हथियार और कृषि उपकरण बनाने के लिए किया गया, जिससे सैन्य और आर्थिक दोनों क्षेत्रों में मगध को बढ़त मिली।"
    },
    {
        question: "मगध के किस शासक ने अपनी राजधानी को राजगृह से पाटलिपुत्र स्थानांतरित किया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: true },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयीन ने गंगा और सोन नदी के संगम पर पाटलिपुत्र नामक शहर की स्थापना की और उसे मगध की राजधानी बनाया।"
    },
    {
        question: "कौन सा वंश नंद वंश के बाद मगध पर शासन करने आया?",
        answers: shuffle([
            { text: "शुंग वंश", correct: false },
            { text: "मौर्य वंश", correct: true },
            { text: "गुप्त वंश", correct: false },
            { text: "कण्व वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य ने घनानंद को पराजित कर नंद वंश का अंत किया और मगध में मौर्य वंश की स्थापना की।"
    },
    {
        question: "बिम्बिसार की मृत्यु का कारण क्या था?",
        answers: shuffle([
            { text: "प्राकृतिक मृत्यु", correct: false },
            { text: "युद्ध में हत्या", correct: false },
            { text: "उसके पुत्र अजातशत्रु द्वारा कारागार में हत्या", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथों के अनुसार, अजातशत्रु ने अपने पिता बिम्बिसार को बंदी बनाकर मार डाला था।"
    },
    {
        question: "नंद वंश के शासकों को किस कारण से जनता द्वारा नापसंद किया गया था?",
        answers: shuffle([
            { text: "उनका शूद्र मूल", correct: false },
            { text: "उनकी कर नीति और क्रूरता", correct: true },
            { text: "उनकी धार्मिक असहिष्णुता", correct: false },
            { text: "बाहरी आक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंद शासक, विशेषकर घनानंद, अपनी जनता पर भारी कर लगाते थे और उनका व्यवहार क्रूर था, जिसके कारण वे लोकप्रिय नहीं थे।"
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