const questions = [
    {
        topHeading: "महाजनपदों के उदय पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. सोलह महाजनपदों की सूची किस बौद्ध ग्रंथ में मिलती है?",
        answers: shuffle([
            { text: "दीघ निकाय", correct: false },
            { text: "मज्झिम निकाय", correct: false },
            { text: "खुद्दक निकाय", correct: false },
            { text: "अंगुत्तर निकाय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथ '<b>अंगुत्तर निकाय</b>' में सबसे पहले <b>सोलह महाजनपदों</b> की एक सुव्यवस्थित सूची मिलती है, जो छठी शताब्दी ईसा पूर्व के भारत की राजनीतिक स्थिति को दर्शाती है।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से कौन सा एक महाजनपद नहीं था?",
        answers: shuffle([
            { text: "मगध", correct: false },
            { text: "कोसल", correct: false },
            { text: "वत्स", correct: false },
            { text: "ताम्रलिप्ति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध, कोसल और वत्स शक्तिशाली महाजनपद थे, जबकि <b>ताम्रलिप्ति</b> एक प्रसिद्ध प्राचीन <b>बंदरगाह</b> था, न कि एक महाजनपद।"
    },
    {
        question: "प्रश्न 3. विश्व का पहला गणतंत्र वैशाली में किसके द्वारा स्थापित किया गया था?",
        answers: shuffle([
            { text: "मौर्य", correct: false },
            { text: "नंद", correct: false },
            { text: "गुप्त", correct: false },
            { text: "लिच्छवि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैशाली के <b>लिच्छवियों</b> ने <b>वज्जि संघ</b> का गठन किया, जिसे विश्व का प्रथम <b>गणतंत्र</b> माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ का शासन किसी एक राजा के बजाय एक गण या संघ द्वारा चलाया जाता था।"
    },
    {
        question: "प्रश्न 4. मगध की प्रारंभिक राजधानी कौन सी थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "वैशाली", correct: false },
            { text: "गिरिव्रज (राजगृह)", correct: true },
            { text: "चम्पा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध साम्राज्य की शुरुआती राजधानी <b>गिरिव्रज</b> थी, जिसे <b>राजगृह</b> भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पाँच पहाड़ियों से घिरी एक सुरक्षित जगह थी।"
    },
    {
        question: "प्रश्न 5. हर्यक वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "अजातशत्रु", correct: false },
            { text: "बिम्बिसार", correct: true },
            { text: "उदायिन", correct: false },
            { text: "नागदशक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बिम्बिसार</b> को <b>हर्यक वंश</b> का संस्थापक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने 544 ईसा पूर्व से 492 ईसा पूर्व तक शासन किया और वैवाहिक संबंधों तथा विजयों के माध्यम से मगध का विस्तार किया।"
    },
    {
        question: "प्रश्न 6. किस शासक ने गंगा और सोन नदियों के संगम पर पाटलिपुत्र नामक नगर की स्थापना की?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदायिन", correct: true },
            { text: "काला शोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु के पुत्र <b>उदायिन</b> ने अपनी राजधानी को राजगृह से <b>पाटलिपुत्र</b> स्थानांतरित किया और इस नगर की स्थापना गंगा, सोन और गंडक नदियों के संगम पर की, जो सामरिक और व्यापारिक दृष्टि से महत्वपूर्ण था।"
    },
    {
        question: "प्रश्न 7. शिशुनाग वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "शिशुनाग", correct: true },
            { text: "कालाशोक", correct: false },
            { text: "नन्दिवर्धन", correct: false },
            { text: "महानंदिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्यक वंश के अंतिम शासक नागदशक को अपदस्थ कर उसके अमात्य <b>शिशुनाग</b> ने 412 ईसा पूर्व में <b>शिशुनाग वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 8. नंद वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false },
            { text: "पांडुक", correct: false },
            { text: "कैवर्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महापद्मनंद</b> ने शिशुनाग वंश का अंत कर <b>नंद वंश</b> की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> पुराणों में उसे 'सर्वक्षत्रांतक' (सभी क्षत्रियों का नाश करने वाला) और 'एकराट' की उपाधि दी गई है।"
    },
    {
        question: "प्रश्न 9. सिकंदर के आक्रमण के समय उत्तर भारत पर निम्नलिखित राजवंशों में से किस एक का शासन था?",
        answers: shuffle([
            { text: "नंद", correct: true },
            { text: "मौर्य", correct: false },
            { text: "शुंग", correct: false },
            { text: "कण्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब 326 ईसा पूर्व में सिकंदर ने भारत पर आक्रमण किया, उस समय मगध पर <b>नंद वंश</b> के शासक <b>धनानंद</b> का शासन था।"
    },
    {
        question: "प्रश्न 10. प्राचीन भारत में चम्पा किस महाजनपद की राजधानी थी?",
        answers: shuffle([
            { text: "अंग", correct: true },
            { text: "मगध", correct: false },
            { text: "वज्जि", correct: false },
            { text: "काशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अंग महाजनपद</b>, जो वर्तमान बिहार के भागलपुर और मुंगेर क्षेत्रों में स्थित था, की राजधानी <b>चम्पा</b> थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे बाद में बिम्बिसार ने मगध में मिला लिया था।"
    },
    {
        question: "प्रश्न 11. उज्जैन का प्राचीन नाम क्या था?",
        answers: shuffle([
            { text: "तक्षशिला", correct: false },
            { text: "इंद्रप्रस्थ", correct: false },
            { text: "अवंतिका", correct: true },
            { text: "पांचाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवंति महाजनपद की दो राजधानियाँ थीं - उत्तरी अवंति की राजधानी उज्जैनी और दक्षिणी अवंति की राजधानी महिष्मती।<br><br><i class='fa-solid fa-angles-right icon'></i> उज्जैन का प्राचीन नाम <b>अवंतिका</b> था।"
    },
    {
        question: "प्रश्न 12. मत्स्य महाजनपद की राजधानी कहाँ थी?",
        answers: shuffle([
            { text: "कौशाम्बी", correct: false },
            { text: "इंद्रप्रस्थ", correct: false },
            { text: "मथुरा", correct: false },
            { text: "विराटनगर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मत्स्य महाजनपद</b> आधुनिक राजस्थान के जयपुर, अलवर और भरतपुर क्षेत्रों में स्थित था और इसकी राजधानी <b>विराटनगर</b> थी।"
    },
    {
        question: "प्रश्न 13. गोदावरी नदी के तट पर स्थित एकमात्र महाजनपद कौन सा था?",
        answers: shuffle([
            { text: "अवंति", correct: false },
            { text: "वत्स", correct: false },
            { text: "कंबोज", correct: false },
            { text: "अस्मक (या अश्मक)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अस्मक</b> दक्षिण भारत में स्थित <b>एकमात्र</b> महाजनपद था, जो <b>गोदावरी नदी</b> के तट पर स्थित था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी राजधानी पोतन या पोटिल थी।"
    },
    {
        question: "प्रश्न 14. किस शासक को 'उग्रसेन' (भयंकर सेना का स्वामी) भी कहा जाता था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंद वंश के संस्थापक <b>महापद्मनंद</b> को उसकी विशाल सेना के कारण पालि ग्रंथों में '<b>उग्रसेन</b>' कहा गया है।"
    },
    {
        question: "प्रश्न 15. छठी शताब्दी ईसा पूर्व में 'शूक्तिमती' किसकी राजधानी थी?",
        answers: shuffle([
            { text: "पांचाल", correct: false },
            { text: "कुरु", correct: false },
            { text: "चेदि", correct: true },
            { text: "अवंति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चेदि महाजनपद</b>, जो आधुनिक बुंदेलखंड क्षेत्र में स्थित था, की राजधानी <b>शूक्तिमती</b> या सोत्थिवती थी।"
    },
    {
        question: "प्रश्न 16. किस प्राचीन नगर के अवशेष कुम्हरार स्थल से प्राप्त हुए हैं?",
        answers: shuffle([
            { text: "वैशाली", correct: false },
            { text: "पाटलिपुत्र", correct: true },
            { text: "कपिलवस्तु", correct: false },
            { text: "श्रावस्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पटना (बिहार) के पास स्थित <b>कुम्हरार</b> में हुई खुदाई से प्राचीन <b>पाटलिपुत्र</b> नगर के अवशेष प्राप्त हुए हैं, जिसमें मौर्यकालीन राजप्रासाद भी शामिल है।"
    },
    {
        question: "प्रश्न 17. मगध के किस शासक ने पहली बार युद्ध में हाथियों का बड़े पैमाने पर प्रयोग किया?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "महापद्मनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध के उत्कर्ष में <b>हाथियों</b> की उपलब्धता एक बड़ा कारण थी।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>अजातशत्रु</b> ने अपनी सेना में हाथियों का प्रभावी ढंग से इस्तेमाल किया था।"
    },
    {
        question: "प्रश्न 18. कोसल महाजनपद की राजधानी क्या थी?",
        answers: shuffle([
            { text: "मथुरा", correct: false },
            { text: "कौशाम्बी", correct: false },
            { text: "श्रावस्ती", correct: true },
            { text: "वाराणसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कोसल महाजनपद</b> की दो राजधानियाँ थीं - उत्तरी भाग की राजधानी <b>श्रावस्ती</b> और दक्षिणी भाग की राजधानी साकेत (अयोध्या)।"
    },
    {
        question: "प्रश्न 19. काशी महाजनपद किसके लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "घोड़ों के व्यापार के लिए", correct: false },
            { text: "सूती और रेशमी वस्त्रों के लिए", correct: true },
            { text: "मिट्टी के बर्तनों के लिए", correct: false },
            { text: "शिक्षा के केंद्र के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>काशी महाजनपद</b>, जिसकी राजधानी वाराणसी थी, अपने <b>सूती और रेशमी वस्त्रों</b> तथा घोड़ों के बाजार के लिए विख्यात था।"
    },
    {
        question: "प्रश्न 20. 'अजातशत्रु' के वंश का नाम क्या था?",
        answers: shuffle([
            { text: "मौर्य", correct: false },
            { text: "हर्यक", correct: true },
            { text: "नंद", correct: false },
            { text: "गुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अजातशत्रु हर्यक वंश</b> का एक शक्तिशाली शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपने पिता बिम्बिसार की हत्या करके सिंहासन प्राप्त किया था।"
    },
    {
        question: "प्रश्न 21. भारत में सिक्कों (मुद्रा) का प्रचलन कब हुआ?",
        answers: shuffle([
            { text: "अशोक के शासनकाल में", correct: false },
            { text: "कनिष्क के शासनकाल में", correct: false },
            { text: "600 ईसा पूर्व में", correct: true },
            { text: "300 ईसा पूर्व में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सबसे पुराने सिक्के, जिन्हें '<b>आहत सिक्के</b>' या 'पंच-मार्क सिक्के' कहा जाता है, का प्रचलन लगभग <b>छठी शताब्दी ईसा पूर्व</b> (महाजनपद काल) में हुआ था।"
    },
    {
        question: "प्रश्न 22. 'महाशिलाकंटक' और 'रथमूसल' जैसे नवीन हथियारों का प्रयोग किस शासक ने किया था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "शिशुनाग", correct: false },
            { text: "महापद्मनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अजातशत्रु</b> ने वज्जि संघ (लिच्छवियों) के खिलाफ युद्ध में '<b>महाशिलाकंटक</b>' (पत्थर फेंकने वाला यंत्र) और '<b>रथमूसल</b>' (गदा युक्त रथ) जैसे गुप्त हथियारों का प्रयोग किया था।"
    },
    {
        question: "प्रश्न 23. सिकंदर महान की मृत्यु कहाँ हुई थी?",
        answers: shuffle([
            { text: "फारस", correct: false },
            { text: "बेबीलोन", correct: true },
            { text: "मेसीडोनिया", correct: false },
            { text: "तक्षशिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत से लौटने के बाद, 323 ईसा पूर्व में सिकंदर की 32 वर्ष की आयु में <b>बेबीलोन</b> (आधुनिक इराक) में ज्वर के कारण मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 24. पालि ग्रंथों में गाँव के मुखिया को क्या कहा गया है?",
        answers: shuffle([
            { text: "ग्रामणी", correct: false },
            { text: "भोजक या ग्रामभोजक", correct: true },
            { text: "ज्येष्ठक", correct: false },
            { text: "ग्रामपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाजनपद काल के दौरान पालि भाषा के ग्रंथों में गाँव के मुखिया के लिए '<b>भोजक</b>' या '<b>ग्रामभोजक</b>' शब्द का प्रयोग किया गया है।"
    },
    {
        question: "प्रश्न 25. नंद वंश का अंतिम सम्राट कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "कालाशोक", correct: false },
            { text: "उदायिन", correct: false },
            { text: "धनानंद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>धनानंद</b> नंद वंश का अंतिम शासक था, जो अपनी धन-लिप्सा और क्रूरता के लिए कुख्यात था।<br><br><i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य ने चाणक्य की सहायता से उसे पराजित कर मौर्य वंश की स्थापना की।"
    },
    {
        question: "प्रश्न 26. तक्षशिला किस महाजनपद की राजधानी थी?",
        answers: shuffle([
            { text: "गांधार", correct: true },
            { text: "कंबोज", correct: false },
            { text: "कुरु", correct: false },
            { text: "कोसल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गांधार महाजनपद</b>, जो वर्तमान पाकिस्तान के रावलपिंडी और पेशावर क्षेत्र में था, की राजधानी <b>तक्षशिला</b> थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शिक्षा और व्यापार का एक प्रमुख केंद्र था।"
    },
    {
        question: "प्रश्न 27. वत्स महाजनपद की राजधानी कहाँ थी?",
        answers: shuffle([
            { text: "मथुरा", correct: false },
            { text: "श्रावस्ती", correct: false },
            { text: "कौशाम्बी", correct: true },
            { text: "वाराणसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>वत्स महाजनपद</b>, जो आधुनिक प्रयागराज (इलाहाबाद) के आसपास केंद्रित था, की राजधानी <b>कौशाम्बी</b> थी।"
    },
    {
        question: "प्रश्न 28. 'श्रेणी' (Guild) क्या थी?",
        answers: shuffle([
            { text: "राजा के सलाहकारों की समिति", correct: false },
            { text: "एक ही व्यवसाय करने वाले व्यापारियों और शिल्पकारों का संगठन", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक सैन्य टुकड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाजनपद काल में व्यापार और उद्योग के विकास के साथ, एक ही प्रकार का व्यवसाय करने वाले शिल्पकारों और व्यापारियों ने अपने संगठन बना लिए थे, जिन्हें '<b>श्रेणी</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 29. सिकंदर के साथ भारत आने वाला इतिहासकार कौन नहीं था?",
        answers: shuffle([
            { text: "नियार्कस", correct: false },
            { text: "आनेसिक्रिटस", correct: false },
            { text: "अरिस्टोबुलस", correct: false },
            { text: "हेरोडोटस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियार्कस, आनेसिक्रिटस और अरिस्टोबुलस सिकंदर की सेना के साथ भारत आए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>हेरोडोटस</b> को 'इतिहास का पिता' कहा जाता है, लेकिन वह सिकंदर से पहले के यूनानी इतिहासकार थे।"
    },
    {
        question: "प्रश्न 30. सूरसेन महाजनपद की राजधानी कहाँ थी?",
        answers: shuffle([
            { text: "कौशाम्बी", correct: false },
            { text: "मथुरा", correct: true },
            { text: "इंद्रप्रस्थ", correct: false },
            { text: "अहिच्छत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सूरसेन महाजनपद</b> आधुनिक ब्रजमंडल क्षेत्र में स्थित था और इसकी राजधानी <b>मथुरा</b> थी, जो एक महत्वपूर्ण धार्मिक और व्यापारिक केंद्र था।"
    },
    {
        question: "प्रश्न 31. कुरु महाजनपद की राजधानी क्या थी?",
        answers: shuffle([
            { text: "हस्तिनापुर", correct: false },
            { text: "इंद्रप्रस्थ", correct: true },
            { text: "मथुरा", correct: false },
            { text: "साकेत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कुरु महाजनपद</b> आधुनिक दिल्ली, मेरठ और हरियाणा के क्षेत्रों में फैला था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी राजधानी <b>इंद्रप्रस्थ</b> (आधुनिक दिल्ली) थी।"
    },
    {
        question: "प्रश्न 32. मगध के उत्कर्ष का प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "उपजाऊ भूमि और कृषि अधिशेष", correct: false },
            { text: "लौह अयस्क की खानों की उपलब्धता", correct: false },
            { text: "सामरिक महत्व की राजधानियाँ", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध के उदय के पीछे गंगा के मैदान की उपजाऊ भूमि, छोटानागपुर पठार में लोहे के भंडारों तक पहुँच, और राजगृह तथा पाटलिपुत्र जैसी सुरक्षित राजधानियों जैसे <b>कई कारक जिम्मेदार थे</b>।"
    },
    {
        question: "प्रश्न 33. किस महाजनपद का शाब्दिक अर्थ 'पशुपालक समुदाय' है?",
        answers: shuffle([
            { text: "वत्स", correct: true },
            { text: "पांचाल", correct: false },
            { text: "चेदि", correct: false },
            { text: "कुरु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>वत्स</b>' का संबंध 'बछड़े' या 'वंशज' से है, जो इस क्षेत्र के प्रारंभिक <b>पशुपालक समाज</b> की ओर संकेत करता है।"
    },
    {
        question: "प्रश्न 34. ईरान के हखमनी शासक डेरियस (दारा) प्रथम ने भारत के किस भाग को जीतकर अपना 20वाँ प्रांत बनाया?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "गांधार", correct: false },
            { text: "सिंधु", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 516 ईसा पूर्व में, ईरानी शासक <b>डेरियस प्रथम</b> ने <b>पंजाब, सिंधु और गांधार</b> के कुछ हिस्सों पर कब्जा कर लिया और इसे फारसी साम्राज्य का 20वाँ प्रांत (क्षत्रपी) बनाया, जो सबसे अधिक राजस्व देता था।"
    },
    {
        question: "प्रश्न 35. 'अष्टकुलक' शब्द का प्रयोग किसके लिए किया जाता था?",
        answers: shuffle([
            { text: "आठ मंत्रियों की परिषद", correct: false },
            { text: "आठ प्रकार के कर", correct: false },
            { text: "आठ गाँवों का समूह", correct: false },
            { text: "एक परामर्शदायी संस्था", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>अष्टकुलक</b>' एक <b>संस्था</b> थी जिसमें संभवतः आठ कुलों के प्रमुख शामिल होते थे और यह संस्था प्रशासनिक मामलों में सलाह देती थी।"
    },
    {
        question: "प्रश्न 36. किस शासक को 'पितृहंता' (पिता की हत्या करने वाला) के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "उदायिन", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "कालाशोक", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध और जैन ग्रंथों के अनुसार, <b>अजातशत्रु</b> ने सिंहासन के लिए अपने पिता बिम्बिसार की हत्या कर दी थी, इसलिए उसे '<b>पितृहंता</b>' कहा जाता है।"
    },
    {
        question: "प्रश्न 37. निम्नलिखित में से कौन सा एक गणतांत्रिक महाजनपद था?",
        answers: shuffle([
            { text: "मगध", correct: false },
            { text: "कोसल", correct: false },
            { text: "वत्स", correct: false },
            { text: "वज्जि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>वज्जि</b> आठ कुलों का एक संघ था, जिसमें लिच्छवि सबसे प्रमुख थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक <b>गणराज्य</b> था, जहाँ शासन एक निर्वाचित परिषद द्वारा चलाया जाता था।"
    },
    {
        question: "प्रश्न 38. पांचाल महाजनपद की उत्तरी राजधानी कहाँ थी?",
        answers: shuffle([
            { text: "काम्पिल्य", correct: false },
            { text: "अहिच्छत्र", correct: true },
            { text: "मथुरा", correct: false },
            { text: "कौशाम्बी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>पांचाल महाजनपद</b> गंगा नदी द्वारा दो भागों में बँटा हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तरी पांचाल की राजधानी <b>अहिच्छत्र</b> और दक्षिणी पांचाल की राजधानी काम्पिल्य थी।"
    },
    {
        question: "प्रश्न 39. गौतम बुद्ध के समय का प्रसिद्ध वैद्य जीवक किसके दरबार से संबंधित था?",
        answers: shuffle([
            { text: "प्रसेनजित", correct: false },
            { text: "उदायिन", correct: false },
            { text: "बिम्बिसार", correct: true },
            { text: "चंडप्रद्योत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जीवक</b> एक प्रसिद्ध राजवैद्य था जो मगध के राजा <b>बिम्बिसार</b> के दरबार में था।<br><br><i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अवंति के राजा चंडप्रद्योत के पीलिया रोग के इलाज के लिए भी जीवक को भेजा था।"
    },
    {
        question: "प्रश्न 40. 'द्वितीय नगरीकरण' (Second Urbanisation) का काल किसे कहा जाता है?",
        answers: shuffle([
            { text: "हड़प्पा काल", correct: false },
            { text: "वैदिक काल", correct: false },
            { text: "महाजनपद काल", correct: true },
            { text: "मौर्य काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी सभ्यता के बाद, भारत में नगरों का दूसरा चरण <b>महाजनपद काल</b> (लगभग 600 ईसा पूर्व) में गंगा घाटी में शुरू हुआ, जिसे '<b>द्वितीय नगरीकरण</b>' की संज्ञा दी जाती है।"
    },
    {
        question: "प्रश्न 41. कंबोज महाजनपद किसके लिए विख्यात था?",
        answers: shuffle([
            { text: "शिक्षा", correct: false },
            { text: "वस्त्र उद्योग", correct: false },
            { text: "श्रेष्ठ घोड़ों", correct: true },
            { text: "कृषि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कंबोज महाजनपद</b>, जो उत्तर-पश्चिमी सीमा पर स्थित था, अपने <b>उत्कृष्ट घोड़ों</b> के लिए प्रसिद्ध था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी राजधानी हाटक या राजपुर थी।"
    },
    {
        question: "प्रश्न 42. जैन ग्रंथ 'भगवती सूत्र' में कितने महाजनपदों का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "12", correct: false },
            { text: "14", correct: false },
            { text: "16", correct: true },
            { text: "18", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथ 'अंगुत्तर निकाय' की तरह ही, जैन ग्रंथ '<b>भगवती सूत्र</b>' में भी <b>सोलह महाजनपदों</b> की सूची मिलती है, हालाँकि कुछ नाम भिन्न हैं।"
    },
    {
        question: "प्रश्न 43. मगध के राजा अजातशत्रु का किस गणराज्य के साथ लंबा संघर्ष चला?",
        answers: shuffle([
            { text: "शाक्य (कपिलवस्तु)", correct: false },
            { text: "मल्ल (कुशीनारा)", correct: false },
            { text: "वज्जि (वैशाली)", correct: true },
            { text: "कोलिय (रामग्राम)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अजातशत्रु</b> ने अपने मंत्री वस्सकार की मदद से <b>वज्जि संघ</b> में फूट डाली और एक लंबे युद्ध के बाद वैशाली पर विजय प्राप्त की।"
    },
    {
        question: "प्रश्न 44. 'नंद वंश' के शासन का अंत किसने किया?",
        answers: shuffle([
            { text: "सिकंदर", correct: false },
            { text: "पोरस", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "अशोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाणक्य (कौटिल्य) के मार्गदर्शन में, <b>चंद्रगुप्त मौर्य</b> ने नंद वंश के अंतिम शासक धनानंद को पराजित कर 322 ईसा पूर्व में <b>मौर्य साम्राज्य</b> की नींव रखी।"
    },
    {
        question: "प्रश्न 45. महाजनपद काल में 'बलि साधक' कौन अधिकारी होते थे?",
        answers: shuffle([
            { text: "कर वसूलने वाले", correct: true },
            { text: "सेना का नेतृत्व करने वाले", correct: false },
            { text: "न्याय करने वाले", correct: false },
            { text: "कृषि की देखरेख करने वाले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बलि' एक प्रकार का अनिवार्य कर था, और इसे वसूलने वाले अधिकारियों को '<b>बलिसाधक</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 46. मगध की सेना में किस जानवर की महत्वपूर्ण भूमिका थी?",
        answers: shuffle([
            { text: "घोड़ा", correct: false },
            { text: "ऊँट", correct: false },
            { text: "हाथी", correct: true },
            { text: "बैल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध के आस-पास के जंगलों में <b>हाथी</b> आसानी से उपलब्ध थे, जिनका उपयोग किलों को तोड़ने और दलदली इलाकों में सेना को बढ़त दिलाने के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 47. वत्स महाजनपद की राजधानी कौशाम्बी किस नदी के किनारे स्थित थी?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: true },
            { text: "सरस्वती", correct: false },
            { text: "सरयू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वत्स महाजनपद, जिसकी राजधानी कौशाम्बी (आधुनिक प्रयागराज के पास) थी, <b>यमुना नदी</b> के तट पर स्थित एक महत्वपूर्ण व्यापारिक केंद्र था।"
    },
    {
        question: "प्रश्न 48. 'एकराट' की उपाधि किस शासक ने धारण की थी?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महापद्मनंद</b> ने आस-पास के कई क्षत्रिय राजवंशों का विनाश करके एक विशाल साम्राज्य की स्थापना की और '<b>एकराट</b>' (एकमात्र सम्राट) की उपाधि धारण की।"
    },
    {
        question: "प्रश्न 49. सिकंदर और पोरस के बीच प्रसिद्ध 'हाइडेस्पीज का युद्ध' किस नदी के तट पर हुआ था?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "झेलम (वितस्ता)", correct: true },
            { text: "चिनाब (अस्किनी)", correct: false },
            { text: "रावी (परुष्णी)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 326 ईसा पूर्व में सिकंदर और राजा पोरस (पुरु) के बीच यह ऐतिहासिक युद्ध <b>झेलम नदी</b> के तट पर हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> यूनानी इतिहास में झेलम को '<b>हाइडेस्पीज</b>' कहा गया है।"
    },
    {
        question: "प्रश्न 50. महाजनपद काल में व्यापारिक मार्गों पर सुरक्षा का प्रबंध कौन करता था?",
        answers: shuffle([
            { text: "व्यापारी स्वयं", correct: false },
            { text: "श्रेणियाँ", correct: false },
            { text: "राजा", correct: true },
            { text: "स्थानीय सामंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य की आय का एक प्रमुख स्रोत व्यापार था, इसलिए <b>राजा</b> व्यापारिक मार्गों को डाकुओं से सुरक्षित रखने का प्रयास करता था और इसके बदले व्यापारियों से कर वसूलता था।"
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