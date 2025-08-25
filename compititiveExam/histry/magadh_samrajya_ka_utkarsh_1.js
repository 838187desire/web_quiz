const questions = [
    {
        topHeading: "मगध राज्य के उत्कर्ष पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.57)"
    },
    {
        question: "बिम्बिसार ने किस वैवाहिक संबंध के माध्यम से मगध की स्थिति को मजबूत किया?",
        answers: shuffle([
            { text: "लिच्छवी राजकुमारी चेलना के साथ", correct: false },
            { text: "कौशल राजकुमारी महाकोशला के साथ", correct: false },
            { text: "पंजाब की मद्र राजकुमारी खेमा के साथ", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अपनी शक्ति को बढ़ाने और अपने पड़ोसी राज्यों के साथ शांतिपूर्ण संबंध स्थापित करने के लिए कई वैवाहिक गठबंधन किए।"
    },
    {
        question: "मगध की प्रारंभिक राजधानी कौन सी थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "वैशाली", correct: false },
            { text: "गिरिव्रज (राजगृह)", correct: true },
            { text: "चंपा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध की प्रारंभिक राजधानी गिरिव्रज थी, जिसे राजगृह के नाम से भी जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पाँच पहाड़ियों से घिरा होने के कारण प्राकृतिक रूप से सुरक्षित थी।"
    },
    {
        question: "हर्यंक वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "शिशुनाग", correct: false },
            { text: "महापद्मनंद", correct: false },
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार (544-492 ईसा पूर्व) को हर्यंक वंश का संस्थापक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने मगध साम्राज्य को विस्तार दिया और इसे एक शक्तिशाली राज्य बनाया।"
    },
    {
        question: "किस शासक ने अंग राज्य को मगध में मिलाया?",
        answers: shuffle([
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "बिम्बिसार", correct: true },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अंग के शासक ब्रह्मदत्त को हराकर अंग को मगध में मिला लिया।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे मगध की शक्ति और आर्थिक समृद्धि में वृद्धि हुई।"
    },
    {
        question: "बिम्बिसार किस धर्म का अनुयायी था?",
        answers: shuffle([
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: false },
            { text: "दोनों (जैन और बौद्ध धर्म)", correct: true },
            { text: "शैव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने बौद्ध और जैन दोनों धर्मों का संरक्षण किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने बुद्ध और महावीर दोनों से भेंट की थी।"
    },
    {
        question: "किस शासक को 'कुणिक' के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु, जो बिम्बिसार का पुत्र था, उसे 'कुणिक' के नाम से जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपने पिता की हत्या करके सिंहासन प्राप्त किया था।"
    },
    {
        question: "अजातशत्रु ने किस राज्य के साथ युद्ध में 'रथ-मुसल' और 'महाशिलाकंटक' जैसे हथियारों का प्रयोग किया?",
        answers: shuffle([
            { text: "अंग", correct: false },
            { text: "वज्जि संघ", correct: true },
            { text: "अवन्ति", correct: false },
            { text: "कौशल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने वज्जि संघ (वैशाली) को हराने के लिए इन दो नए और शक्तिशाली हथियारों का इस्तेमाल किया था।"
    },
    {
        question: "प्रथम बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम बौद्ध संगीति 483 ईसा पूर्व में राजगृह में अजातशत्रु के संरक्षण में आयोजित की गई थी, जब बुद्ध का महापरिनिर्वाण हुआ था।"
    },
    {
        question: "किस शासक ने पाटलिपुत्र (वर्तमान पटना) की स्थापना की और उसे मगध की राजधानी बनाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: true },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयीन (अजातशत्रु का पुत्र) ने गंगा और सोन नदी के संगम पर पाटलिपुत्र शहर की स्थापना की और उसे राजगृह से हटाकर मगध की राजधानी बनाया।"
    },
    {
        question: "हर्यंक वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "नागदशक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागदशक हर्यंक वंश का अंतिम शासक था, जिसे उसके अमात्य शिशुनाग ने अपदस्थ करके शिशुनाग वंश की स्थापना की।"
    },
    {
        question: "शिशुनाग वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "शिशुनाग", correct: true },
            { text: "कालासोक", correct: false },
            { text: "महापद्मनंद", correct: false },
            { text: "उदयीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने हर्यंक वंश के अंतिम शासक नागदशक को हटाकर शिशुनाग वंश की स्थापना की।"
    },
    {
        question: "किस शिशुनाग शासक ने वैशाली को मगध की राजधानी बनाया?",
        answers: shuffle([
            { text: "शिशुनाग", correct: true },
            { text: "कालासोक", correct: false },
            { text: "नंदीवर्धन", correct: false },
            { text: "उदयीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने अपनी राजधानी पाटलिपुत्र से हटाकर वैशाली स्थानांतरित की थी।"
    },
    {
        question: "द्वितीय बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?",
        answers: shuffle([
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "कालासोक", correct: true },
            { text: "अशोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय बौद्ध संगीति 383 ईसा पूर्व में वैशाली में कालाशोक के संरक्षण में आयोजित की गई थी।"
    },
    {
        question: "नंद वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "धनानंद", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "कालासोक", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने शिशुनाग वंश के अंतिम शासक को हराकर नंद वंश की स्थापना की थी।"
    },
    {
        question: "किस शासक को 'सर्वक्षत्रान्तक' (सभी क्षत्रियों का विनाशक) कहा जाता है?",
        answers: shuffle([
            { text: "अजातशत्रु", correct: false },
            { text: "धनानंद", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "अशोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद एक शक्तिशाली और महत्वाकांक्षी शासक था, जिसने कई क्षत्रिय राज्यों को नष्ट कर अपने साम्राज्य का विस्तार किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण उसे 'सर्वक्षत्रान्तक' कहा जाता है।"
    },
    {
        question: "नंद वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "घनानंद", correct: true },
            { text: "कालासोक", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घनानंद नंद वंश का अंतिम शासक था, जिसे चंद्रगुप्त मौर्य ने चाणक्य की सहायता से हराकर मौर्य साम्राज्य की स्थापना की।"
    },
    {
        question: "सिकंदर के आक्रमण के समय मगध का शासक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "घनानंद", correct: true },
            { text: "कालासोक", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सिकंदर ने 326 ईसा पूर्व में भारत पर आक्रमण किया था, उस समय मगध पर नंद वंश का अंतिम शासक घनानंद शासन कर रहा था।"
    },
    {
        question: "मगध के किस शासक ने अवन्ति के शक्तिशाली राज्य को जीतकर मगध में मिलाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने अवन्ति को जीतकर मगध साम्राज्य का विस्तार किया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक बड़ी सैन्य सफलता थी जिसने मगध को और अधिक शक्तिशाली बना दिया।"
    },
    {
        question: "मगध साम्राज्य के उत्थान में किस कारण का योगदान था?",
        answers: shuffle([
            { text: "उपजाऊ भूमि", correct: false },
            { text: "लोहे की उपलब्धता", correct: false },
            { text: "रणनीतिक स्थान", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध का उत्थान कई कारकों पर निर्भर था, जैसे गंगा के मैदानी इलाकों की उपजाऊ भूमि, लोहे की खदानों की उपलब्धता और इसकी राजधानी का रणनीतिक स्थान।"
    },
    {
        question: "बिम्बिसार ने किस वैवाहिक संबंध के माध्यम से मगध की स्थिति को मजबूत किया?",
        answers: shuffle([
            { text: "लिच्छवी राजकुमारी चेलना के साथ", correct: false },
            { text: "कौशल राजकुमारी महाकोशला के साथ", correct: false },
            { text: "पंजाब की मद्र राजकुमारी खेमा के साथ", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अपनी शक्ति को बढ़ाने और अपने पड़ोसी राज्यों के साथ शांतिपूर्ण संबंध स्थापित करने के लिए कई वैवाहिक गठबंधन किए।"
    },
    {
        question: "मगध के किस शासक ने वज्जि संघ को जीतने के लिए अपने मंत्री वस्सकार को बुद्ध के पास भेजा था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने वज्जि संघ के बीच फूट डालने के लिए अपने मंत्री वस्सकार को बुद्ध के पास भेजा था, ताकि वह उनकी आंतरिक कमजोरी का पता लगा सके।"
    },
    {
        question: "हर्यंक वंश के किस शासक को 'पितृहन्ता' कहा जाता है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "A और B दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने अपने पिता बिम्बिसार की हत्या की थी, और उदयीन ने अपने पिता अजातशत्रु की हत्या की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इन दोनों को 'पितृहन्ता' कहा जाता है।"
    },
    {
        question: "किस नदी के तट पर पाटलिपुत्र शहर बसाया गया था?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "सोन", correct: false },
            { text: "दोनों नदियों के संगम पर", correct: true },
            { text: "गंडक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाटलिपुत्र शहर की स्थापना गंगा और सोन नदी के संगम पर की गई थी, जो इसे एक महत्वपूर्ण जलमार्ग और रणनीतिक केंद्र बनाता था।"
    },
    {
        question: "नंद वंश के किस शासक के समय में जैन धर्म का व्यापक प्रचार-प्रसार हुआ?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: true },
            { text: "घनानंद", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "उदयीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद के शासनकाल के दौरान जैन धर्म को काफी संरक्षण मिला, जिसके कारण यह मगध में काफी लोकप्रिय हुआ।"
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
        question: "कौन सा महाजनपद मगध के उत्थान से पहले सबसे शक्तिशाली था?",
        answers: shuffle([
            { text: "अवन्ति", correct: true },
            { text: "वत्स", correct: false },
            { text: "कौशल", correct: false },
            { text: "अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवन्ति मगध के उत्थान से पहले एक शक्तिशाली महाजनपद था।<br><br><i class='fa-solid fa-angles-right icon'></i> मगध ने इसे शिशुनाग के शासनकाल में जीतकर अपने साम्राज्य में मिला लिया।"
    },
    {
        question: "अजातशत्रु ने अपने पिता बिम्बिसार की हत्या क्यों की थी?",
        answers: shuffle([
            { text: "साम्राज्य के विस्तार के लिए", correct: false },
            { text: "जैन धर्म के प्रभाव के कारण", correct: false },
            { text: "सिंहासन प्राप्त करने के लिए", correct: true },
            { text: "बौद्ध धर्म के प्रभाव के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने अपने पिता बिम्बिसार को मारकर सिंहासन प्राप्त किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण उसे 'पितृहन्ता' कहा जाता है।"
    },
    {
        question: "बिम्बिसार ने किस चिकित्सक को महात्मा बुद्ध की सेवा में भेजा था?",
        answers: shuffle([
            { text: "जीवक", correct: true },
            { text: "चरक", correct: false },
            { text: "सुश्रुत", correct: false },
            { text: "धनवंतरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार का राजवैद्य जीवक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने महात्मा बुद्ध के बीमार होने पर उनकी सेवा के लिए जीवक को भेजा था।"
    },
    {
        question: "अजातशत्रु के बाद हर्यंक वंश का शासक कौन बना?",
        answers: shuffle([
            { text: "उदयीन", correct: true },
            { text: "अनिरुद्ध", correct: false },
            { text: "मुंडक", correct: false },
            { text: "नागदशक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु की मृत्यु के बाद उसका पुत्र उदयीन सिंहासन पर बैठा।"
    },
    {
        question: "शिशुनाग वंश का वह शासक कौन था जिसके शासनकाल में द्वितीय बौद्ध संगीति आयोजित की गई थी?",
        answers: shuffle([
            { text: "शिशुनाग", correct: false },
            { text: "कालासोक", correct: true },
            { text: "नंदीवर्धन", correct: false },
            { text: "महाबोधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालाशोक के शासनकाल में 383 ईसा पूर्व में वैशाली में द्वितीय बौद्ध संगीति का आयोजन हुआ था।"
    },
    {
        question: "किस मगध शासक को बौद्ध ग्रंथों में 'पित्रहंता' के रूप में चित्रित किया गया है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "A और B दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथों के अनुसार, अजातशत्रु ने अपने पिता बिम्बिसार की हत्या की थी, इसलिए उसे 'पितृहन्ता' कहा जाता है।"
    },
    {
        question: "नंद वंश का वह कौन सा शासक था जिसने 'कलिंग' को जीतकर मगध में मिलाया?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false },
            { text: "कालासोक", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने कलिंग पर विजय प्राप्त की और वहाँ से एक जैन प्रतिमा को मगध ले आया था।"
    },
    {
        question: "नंद वंश के शासकों को जैन ग्रंथों में किस रूप में चित्रित किया गया है?",
        answers: shuffle([
            { text: "उदार और धार्मिक", correct: false },
            { text: "क्रूर और लोभी", correct: true },
            { text: "शक्तिशाली और विजेता", correct: false },
            { text: "धर्म के संरक्षक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन ग्रंथों के अनुसार, नंद शासक, विशेषकर धनानंद, को अपनी जनता पर अत्याचार करने वाला और अत्याधिक धन इकट्ठा करने वाला शासक बताया गया है।"
    },
    {
        question: "मगध की राजधानी राजगृह का निर्माण किस शासक ने करवाया था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजगृह (गिरिव्रज) को बिम्बिसार ने एक विस्तृत और भव्य राजधानी के रूप में विकसित किया था।"
    },
    {
        question: "किस शासक ने वज्जि संघ को जीतकर मगध साम्राज्य का विस्तार किया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने लंबे संघर्ष के बाद वज्जि संघ (जिसमें वैशाली भी शामिल था) को हराकर मगध में मिला लिया था।"
    },
    {
        question: "महापद्मनंद ने कौन सी उपाधि धारण नहीं की थी?",
        answers: shuffle([
            { text: "एकराट", correct: false },
            { text: "एकछत्र", correct: false },
            { text: "सर्वक्षत्रान्तक", correct: false },
            { text: "पितृहन्ता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद को 'एकराट', 'एकछत्र' और 'सर्वक्षत्रान्तक' जैसी उपाधियाँ दी गई थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'पितृहन्ता' की उपाधि हर्यंक वंश के शासकों को दी गई थी।"
    },
    {
        question: "नंद शासकों को बौद्ध ग्रंथों में किस रूप में जाना जाता है?",
        answers: shuffle([
            { text: "क्षत्रिय", correct: false },
            { text: "शूद्र", correct: true },
            { text: "वैश्य", correct: false },
            { text: "ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध और जैन ग्रंथों में नंद शासकों को शूद्र वंश का बताया गया है।"
    },
    {
        question: "अजातशत्रु के शासनकाल में कौन से प्रमुख शहर स्थापित हुए थे?",
        answers: shuffle([
            { text: "राजगृह और वैशाली", correct: false },
            { text: "पाटलिपुत्र और वैशाली", correct: false },
            { text: "राजगृह और पाटलिपुत्र", correct: false },
            { text: "पाटलिग्राम (जो बाद में पाटलिपुत्र बना) और दुर्ग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने वज्जि संघ के आक्रमणों से अपनी राजधानी की रक्षा के लिए गंगा के किनारे 'पाटलिग्राम' नामक एक दुर्ग का निर्माण करवाया था, जो बाद में पाटलिपुत्र के रूप में विकसित हुआ।"
    },
    {
        question: "नंद वंश का संस्थापक महापद्मनंद किस कारण से प्रसिद्ध है?",
        answers: shuffle([
            { text: "जैन धर्म के संरक्षण के लिए", correct: false },
            { text: "विशाल सैन्य शक्ति के लिए", correct: false },
            { text: "साम्राज्य विस्तार के लिए", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद एक शक्तिशाली और महत्वाकांक्षी शासक था, जिसने कई राज्यों को जीतकर एक विशाल साम्राज्य का निर्माण किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने जैन धर्म को भी संरक्षण दिया और अपनी सैन्य शक्ति के लिए भी जाना जाता था।"
    },
    {
        question: "किस वंश के शासकों को पुराणों में 'शुद्र' कहा गया है?",
        answers: shuffle([
            { text: "हर्यंक वंश", correct: false },
            { text: "शिशुनाग वंश", correct: false },
            { text: "नंद वंश", correct: true },
            { text: "मौर्य वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराणों में नंद वंश के शासकों को शूद्र बताया गया है, जो उनके निम्न सामाजिक मूल का संकेत देता है।"
    },
    {
        question: "शिशुनाग वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "कालासोक", correct: false },
            { text: "नंदीवर्धन", correct: true },
            { text: "शिशुनाग", correct: false },
            { text: "महापद्मनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्धन, जिसे महानंदीन भी कहा जाता है, शिशुनाग वंश का अंतिम शासक था।"
    },
    {
        question: "किस मगध शासक को 'सर्वक्षत्रान्तक' (क्षत्रियों का नाश करने वाला) कहा गया है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने भारत के कई हिस्सों पर विजय प्राप्त कर क्षत्रिय राज्यों का अंत किया, इसलिए उसे यह उपाधि दी गई थी।"
    },
    {
        question: "किस शासक ने अपनी राजधानी वैशाली से फिर पाटलिपुत्र स्थानांतरित की?",
        answers: shuffle([
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "कालासोक", correct: true },
            { text: "घनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने अपनी राजधानी वैशाली बनाई थी, लेकिन उसके पुत्र कालाशोक ने फिर से पाटलिपुत्र को मगध की राजधानी बनाया।"
    },
    {
        question: "नंद वंश के किस शासक ने मगध को एक साम्राज्यवादी शक्ति में बदल दिया?",
        answers: shuffle([
            { text: "घनानंद", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "कालासोक", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने मगध को केवल एक राज्य से एक विशाल और शक्तिशाली साम्राज्य में बदल दिया था।"
    },
    {
        question: "मगध के उत्थान का एक मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "शासकों की धार्मिक सहिष्णुता", correct: false },
            { text: "कुशल शासन प्रणाली", correct: false },
            { text: "आर्थिक और सैन्य दोनों क्षेत्रों में बढ़त", correct: true },
            { text: "उपर्युक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध का उत्थान उसकी आर्थिक समृद्धि (उपजाऊ भूमि और व्यापार) और सैन्य शक्ति (लोहे के हथियारों और हाथी) के कारण हुआ।"
    },
    {
        question: "मगध का कौन सा शासक जैन धर्म का संरक्षक था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "महापद्मनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने जैन और बौद्ध दोनों धर्मों को संरक्षण दिया, लेकिन उसके बाद उदयीन और महापद्मनंद भी जैन धर्म के प्रति उदार थे।"
    },
    {
        question: "मगध में हर्यंक वंश के पतन का क्या कारण था?",
        answers: shuffle([
            { text: "बाहरी आक्रमण", correct: false },
            { text: "शासकों की पितृहन्ता प्रवृत्ति", correct: true },
            { text: "आर्थिक संकट", correct: false },
            { text: "धार्मिक असहिष्णुता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्यंक वंश के शासक अपने पिता की हत्या करके सिंहासन पर बैठे थे, जिसके कारण लोगों में असंतोष था और वंश कमजोर हुआ।"
    },
    {
        question: "मगध में नंद वंश का शासन कब समाप्त हुआ?",
        answers: shuffle([
            { text: "सिकंदर के आक्रमण के बाद", correct: false },
            { text: "चंद्रगुप्त मौर्य द्वारा घनानंद की हत्या के बाद", correct: true },
            { text: "अशोक के राज्याभिषेक के बाद", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य ने चाणक्य की सहायता से नंद वंश के अंतिम शासक घनानंद को पराजित करके मगध में मौर्य साम्राज्य की स्थापना की थी।"
    },
    {
        question: "मगध साम्राज्य में हाथियों का उपयोग सर्वप्रथम किस शासक ने किया था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "महापद्मनंद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंद शासकों ने अपनी सैन्य शक्ति को बढ़ाने के लिए हाथियों का व्यापक उपयोग किया था, जो उनके प्रतिद्वंद्वियों के पास नहीं थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे उन्हें युद्ध में काफी लाभ मिला।"
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