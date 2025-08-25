const questions = [
    {
        topHeading: "मगध राज्य के उत्कर्ष पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.60)"
    },
    {
        question: "नंद वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "शिशुनाग", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "घनानंद", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने शिशुनाग वंश के अंतिम शासक को हटाकर नंद वंश की स्थापना की।"
    },
    {
        question: "सिकंदर के भारत पर आक्रमण के समय मगध का शासक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "घनानंद", correct: true },
            { text: "शिशुनाग", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सिकंदर ने 326 ईसा पूर्व में भारत पर आक्रमण किया, उस समय मगध पर नंद वंश का अंतिम शासक धनानंद था।"
    },
    {
        question: "हर्यंक वंश के किस शासक को 'पितृहन्ता' कहा जाता है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "A और B दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने अपने पिता बिम्बिसार की हत्या करके सिंहासन प्राप्त किया, इसलिए उसे 'पितृहन्ता' कहा जाता है।"
    },
    {
        question: "प्रथम बौद्ध संगीति का आयोजन किसके शासनकाल में हुआ था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम बौद्ध संगीति 483 ईसा पूर्व में राजगृह में अजातशत्रु के संरक्षण में आयोजित की गई थी।"
    },
    {
        question: "किस मगध शासक ने पाटलिपुत्र को अपनी राजधानी बनाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: true },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयीन ने गंगा और सोन नदी के संगम पर पाटलिपुत्र शहर की स्थापना की और उसे मगध की राजधानी बनाया।"
    },
    {
        question: "नंद वंश के शासकों को जैन ग्रंथों में किस रूप में चित्रित किया गया है?",
        answers: shuffle([
            { text: "उदार", correct: false },
            { text: "क्रूर और लोभी", correct: true },
            { text: "शक्तिशाली", correct: false },
            { text: "धार्मिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन ग्रंथों में नंद शासकों को क्रूर और लोभी शासकों के रूप में दर्शाया गया है, विशेषकर धनानंद।"
    },
    {
        question: "मगध के किस शासक ने अंग को मगध में मिलाया था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अंग के शासक ब्रह्मदत्त को हराकर अंग को मगध में मिला लिया।"
    },
    {
        question: "किस शासक ने वैशाली को मगध की राजधानी बनाया था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "शिशुनाग", correct: true },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने अपनी राजधानी पाटलिपुत्र से हटाकर वैशाली स्थानांतरित की थी।"
    },
    {
        question: "मगध साम्राज्य में हाथियों का उपयोग सर्वप्रथम किस वंश ने किया था?",
        answers: shuffle([
            { text: "हर्यंक वंश", correct: false },
            { text: "शिशुनाग वंश", correct: false },
            { text: "नंद वंश", correct: true },
            { text: "मौर्य वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंद शासकों ने अपनी सेना में हाथियों को शामिल किया था, जिससे उनकी सैन्य शक्ति में वृद्धि हुई।"
    },
    {
        question: "किस शासक को 'सर्वक्षत्रान्तक' (सभी क्षत्रियों का विनाशक) कहा जाता है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद एक शक्तिशाली और महत्वाकांक्षी शासक था, जिसने कई क्षत्रिय राज्यों को नष्ट कर अपने साम्राज्य का विस्तार किया।"
    },
    {
        question: "नंद वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "घनानंद", correct: true },
            { text: "कालासोक", correct: false },
            { text: "नंदीवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घनानंद नंद वंश का अंतिम शासक था, जिसे चंद्रगुप्त मौर्य ने पराजित किया।"
    },
    {
        question: "मगध साम्राज्य के उत्थान में किस कारण का योगदान नहीं था?",
        answers: shuffle([
            { text: "उपजाऊ भूमि", correct: false },
            { text: "लोहे की उपलब्धता", correct: false },
            { text: "धार्मिक कट्टरता", correct: true },
            { text: "रणनीतिक स्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध के शासक धार्मिक रूप से सहिष्णु थे और उन्होंने बौद्ध और जैन धर्मों का संरक्षण किया, जिसने उनके उत्थान में योगदान दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> धार्मिक कट्टरता उनके उत्थान का कारण नहीं थी।"
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
        question: "मगध के किस शासक को बौद्ध ग्रंथों में 'पित्रहंता' के रूप में चित्रित किया गया है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "A और B दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथों के अनुसार, अजातशत्रु ने अपने पिता बिम्बिसार की हत्या की थी, इसलिए उसे 'पितृहन्ता' कहा जाता है।"
    },
    {
        question: "कौन सा यूनानी लेखक नंदों की विशाल सेना का उल्लेख करता है?",
        answers: shuffle([
            { text: "मेगास्थनीज", correct: false },
            { text: "हेरोडोटस", correct: false },
            { text: "कर्टियस", correct: false },
            { text: "प्लूटार्क", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लूटार्क ने अपनी रचनाओं में नंदों की विशाल सेना का उल्लेख किया है, जिसमें 2 लाख पैदल सैनिक और 3,000 हाथी शामिल थे।"
    },
    {
        question: "बिम्बिसार ने अपने राजवैद्य जीवक को किस राजा के उपचार के लिए भेजा था?",
        answers: shuffle([
            { text: "कौशल के प्रसेनजित", correct: false },
            { text: "अवन्ति के प्रद्योत", correct: true },
            { text: "वज्जि के चेतक", correct: false },
            { text: "अंग के ब्रह्मदत्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अपने राजवैद्य जीवक को अवन्ति के शासक प्रद्योत के उपचार के लिए भेजा था, जिससे दोनों राज्यों के बीच मित्रता स्थापित हुई।"
    },
    {
        question: "किस शासक ने 'रथ-मुसल' और 'महाशिलाकंटक' जैसे नए हथियारों का प्रयोग किया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने इन नए और शक्तिशाली हथियारों का प्रयोग वज्जि संघ के विरुद्ध युद्ध में किया था।"
    },
    {
        question: "मगध साम्राज्य का वह शासक कौन था जिसने कलिंग पर विजय प्राप्त कर वहाँ से एक जैन प्रतिमा को मगध में लाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने कलिंग पर विजय प्राप्त की और इस विजय के प्रमाण के रूप में एक जैन प्रतिमा को मगध लाया।"
    },
    {
        question: "मगध में नंद वंश का शासन कब समाप्त हुआ?",
        answers: shuffle([
            { text: "सिकंदर के आक्रमण के बाद", correct: false },
            { text: "चंद्रगुप्त मौर्य द्वारा घनानंद की हत्या के बाद", correct: true },
            { text: "अशोक के राज्याभिषेक के बाद", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य ने चाणक्य की सहायता से नंद वंश के अंतिम शासक घनानंद को पराजित करके मगध में मौर्य साम्राज्य की स्थापना की।"
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
        question: "नंद वंश का सबसे धनी शासक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "घनानंद", correct: true },
            { text: "शिशुनाग", correct: false },
            { text: "उदयीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घनानंद अपनी अपार धन-संपदा के लिए प्रसिद्ध था।<br><br><i class='fa-solid fa-angles-right icon'></i> यूनानी लेखकों ने भी उसके धन और शक्ति का उल्लेख किया है।"
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
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिरिव्रज को ही राजगृह कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पाँच पहाड़ियों से घिरा होने के कारण प्राकृतिक रूप से सुरक्षित था।"
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
        question: "प्रथम बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम बौद्ध संगीति 483 ईसा पूर्व में राजगृह में अजातशत्रु के संरक्षण में आयोजित हुई थी।"
    },
    {
        question: "मगध साम्राज्य के उत्थान में किस कारण का योगदान नहीं था?",
        answers: shuffle([
            { text: "गंगा का उपजाऊ मैदान", correct: false },
            { text: "लोहे की उपलब्धता", correct: false },
            { text: "शासकों की धार्मिक सहिष्णुता", correct: false },
            { text: "विदेशी आक्रमण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विदेशी आक्रमण मगध के उत्थान का कारण नहीं थे, बल्कि मगध की शक्ति इतनी थी कि वह विदेशी आक्रमणों का सफलतापूर्वक सामना कर सका।"
    },
    {
        question: "मगध के किस शासक ने 'अवन्ति' को जीत कर मगध में मिलाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "शिशुनाग", correct: true },
            { text: "महापद्मनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने अवन्ति को हराकर मगध साम्राज्य का विस्तार किया।"
    },
    {
        question: "किस मगध शासक ने 'एकराट' और 'एकछत्र' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने भारत के कई हिस्सों पर विजय प्राप्त की और एक विशाल साम्राज्य की स्थापना की, इसी कारण उसे 'एकराट' और 'एकछत्र' जैसी उपाधियाँ दी गईं।"
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
        question: "मगध की पहली राजधानी कौन सी थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "वैशाली", correct: false },
            { text: "गिरिव्रज (राजगृह)", correct: true },
            { text: "चंपा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध की प्रारंभिक राजधानी गिरिव्रज थी, जिसे राजगृह के नाम से भी जाना जाता है।"
    },
    {
        question: "हर्यंक वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "शिशुनाग", correct: false },
            { text: "महापद्मनंद", correct: false },
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार को हर्यंक वंश का संस्थापक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने मगध साम्राज्य को विस्तार दिया।"
    },
    {
        question: "किस शासक को 'कुणिक' के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु, जो बिम्बिसार का पुत्र था, उसे 'कुणिक' के नाम से जाना जाता है।"
    },
    {
        question: "किस शासक ने पाटलिपुत्र (वर्तमान पटना) की स्थापना की और उसे मगध की राजधानी बनाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: true },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयीन (अजातशत्रु का पुत्र) ने गंगा और सोन नदी के संगम पर पाटलिपुत्र शहर की स्थापना की और उसे मगध की राजधानी बनाया।"
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