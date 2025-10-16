const questions = [
    {
        topHeading: "मध्यपाषाण काल पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'मेसोलिथिक' (Mesolithic) शब्द किन दो ग्रीक शब्दों से मिलकर बना है?",
        answers: shuffle([
            { text: "मेसो (मध्य) और लिथोस (पत्थर)", correct: true },
            { text: "माइक्रो (छोटा) और लिथोस (पत्थर)", correct: false },
            { text: "नियो (नया) और लिथोस (पत्थर)", correct: false },
            { text: "पैलियो (पुराना) और लिथोस (पत्थर)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेसोलिथिक' शब्द ग्रीक भाषा के '<b>मेसो</b>' (जिसका अर्थ है मध्य) और '<b>लिथोस</b>' (जिसका अर्थ है पत्थर) से बना है, इसलिए इसे '<b>मध्य पाषाण युग</b>' कहा जाता है।"
    },
    {
        question: "प्रश्न 2. मध्यपाषाण काल, किन दो युगों के बीच का संक्रमण काल है?",
        answers: shuffle([
            { text: "पुरापाषाण और नवपाषाण", correct: true },
            { text: "नवपाषाण और ताम्रपाषाण", correct: false },
            { text: "ताम्रपाषाण और लौह युग", correct: false },
            { text: "लौह युग और कांस्य युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मध्यपाषाण काल</b>, पुरापाषाण काल की शिकारी-संग्राहक जीवनशैली और नवपाषाण काल की कृषि आधारित जीवनशैली के बीच का एक महत्वपूर्ण <b>संक्रमणकालीन चरण</b> था।"
    },
    {
        question: "प्रश्न 3. मध्यपाषाण काल का सबसे प्रमुख और विशिष्ट उपकरण कौन सा है?",
        answers: shuffle([
            { text: "हस्तकुठार (Hand-axe)", correct: false },
            { text: "विदारणी (Cleaver)", correct: false },
            { text: "सूक्ष्मपाषाण (Microlith)", correct: true },
            { text: "पॉलिशदार कुल्हाड़ी (Polished Celt)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल की पहचान उसके अत्यंत छोटे (<b>1 से 5 सेंटीमीटर</b>) पत्थर के औजारों से होती है, जिन्हें <b>सूक्ष्मपाषाण या माइक्रोलिथ</b> कहा जाता है।"
    },
    {
        question: "प्रश्न 4. भूवैज्ञानिक रूप से मध्यपाषाण काल किस युग की शुरुआत से संबंधित है?",
        answers: shuffle([
            { text: "प्लेइस्टोसीन (हिमयुग)", correct: false },
            { text: "होलोसीन (नूतन युग)", correct: true },
            { text: "प्लायोसीन", correct: false },
            { text: "मायोसीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिमयुग (प्लेइस्टोसीन) की समाप्ति और <b>गर्म एवं आर्द्र जलवायु</b> वाले <b>होलोसीन युग</b> की शुरुआत के साथ ही मध्यपाषाण काल का आरंभ हुआ।"
    },
    {
        question: "प्रश्न 5. भारत में पशुपालन का प्राचीनतम साक्ष्य किन मध्यपाषाणकालीन स्थलों से प्राप्त हुआ है?",
        answers: shuffle([
            { text: "सराय नाहर राय और महदहा", correct: false },
            { text: "लंघनाज और टेरी स्थल", correct: false },
            { text: "आदमगढ़ और बागोर", correct: true },
            { text: "भीमबेटका और बीरभानपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश के <b>आदमगढ़</b> और राजस्थान के <b>बागोर</b> से लगभग <b>5000 ईसा पूर्व</b> के पशुपालन के शुरुआती साक्ष्य मिले हैं, जिनमें भेड़, बकरी और मवेशियों की हड्डियाँ शामिल हैं।"
    },
    {
        question: "प्रश्न 6. राजस्थान का कौन सा स्थल भारत का सबसे बड़ा मध्यपाषाणकालीन स्थल माना जाता है?",
        answers: shuffle([
            { text: "तिलवाड़ा", correct: false },
            { text: "डीडवाना", correct: false },
            { text: "बागोर", correct: true },
            { text: "गणेश्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीलवाड़ा जिले में कोठारी नदी के किनारे स्थित <b>बागोर</b> न केवल भारत का <b>सबसे बड़ा</b> बल्कि सबसे अच्छे ढंग से उत्खनित मध्यपाषाणकालीन स्थल है, जहाँ से सूक्ष्मपाषाणों का विशाल भंडार मिला है।"
    },
    {
        question: "प्रश्न 7. मध्यपाषाणकालीन स्थल 'लंघनाज' भारत के किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: false },
            { text: "गुजरात", correct: true },
            { text: "उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लंघनाज</b> <b>गुजरात</b> के मेहसाणा जिले में स्थित एक महत्वपूर्ण मध्यपाषाणकालीन स्थल है, जहाँ से 14 मानव कंकाल, सूक्ष्मपाषाण और जानवरों की हड्डियाँ मिली हैं।"
    },
    {
        question: "प्रश्न 8. उत्तर प्रदेश के प्रतापगढ़ जिले में स्थित कौन सा स्थल मध्यपाषाण काल से संबंधित नहीं है?",
        answers: shuffle([
            { text: "सराय नाहर राय", correct: false },
            { text: "महदहा", correct: false },
            { text: "दमदमा", correct: false },
            { text: "लोथल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोथल</b> गुजरात में स्थित एक <b>हड़प्पाकालीन बंदरगाह</b> शहर है, जबकि <b>सराय नाहर राय, महदहा और दमदमा</b> प्रतापगढ़ (उ.प्र.) के प्रमुख <b>मध्यपाषाणकालीन स्थल</b> हैं।"
    },
    {
        question: "प्रश्न 9. किस मध्यपाषाणकालीन स्थल से हड्डी एवं सींग से निर्मित उपकरणों और आभूषणों का एक बड़ा भंडार मिला है?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "आदमगढ़", correct: false },
            { text: "महदहा", correct: true },
            { text: "पटने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महदहा</b> से बड़ी मात्रा में <b>हड्डी और सींग</b> से बने तीर के अग्रभाग, चाकू, खुरचनी और मृगश्रृंग के छल्लों से बने आभूषण (कुंडल और हार) पाए गए हैं, जो एक कार्यशाला का संकेत देते हैं।"
    },
    {
        question: "प्रश्न 10. एक ही कब्र से तीन मानव कंकाल किस मध्यपाषाणकालीन स्थल से निकले हैं?",
        answers: shuffle([
            { text: "सराय नाहर राय", correct: false },
            { text: "दमदमा", correct: true },
            { text: "महदहा", correct: false },
            { text: "लंघनाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>दमदमा</b> में कुल <b>41 मानव शवाधान</b> पाए गए हैं, जिनमें से <b>एक कब्र में तीन मानव कंकाल</b>, पाँच कब्रों में दो-दो मानव कंकाल और बाकी में एक-एक कंकाल दफनाए गए थे।"
    },
    {
        question: "प्रश्न 11. मध्यपाषाणकालीन शैल चित्रों में किस प्रकार के दृश्यों की प्रधानता है?",
        answers: shuffle([
            { text: "केवल ज्यामितीय आकृतियाँ", correct: false },
            { text: "कृषि और यज्ञ", correct: false },
            { text: "शिकार, नृत्य, मछली पकड़ना और पारिवारिक जीवन", correct: true },
            { text: "राजाओं और युद्धों का चित्रण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल के चित्रों में पुरापाषाण काल की तुलना में विषयों की विविधता बढ़ गई, जिसमें <b>सामूहिक शिकार, नृत्य, शहद इकट्ठा करना और बच्चों के साथ महिलाओं</b> जैसे सामाजिक दृश्य प्रमुख हैं।"
    },
    {
        question: "प्रश्न 12. सूक्ष्मपाषाण औजार बनाने के लिए किस प्रकार के पत्थर का उपयोग किया जाता था?",
        answers: shuffle([
            { text: "क्वार्टजाइट", correct: false },
            { text: "बलुआ पत्थर", correct: false },
            { text: "चर्ट, चाल्सेडनी, जैस्पर और एगेट", correct: true },
            { text: "ग्रेनाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूक्ष्मपाषाण बनाने के लिए <b>महीन कणों वाले सिलिका-प्रधान पत्थर</b> जैसे <b>चर्ट, चाल्सेडनी</b> आदि का उपयोग किया जाता था, क्योंकि इनसे छोटे और तेज धार वाले उपकरण बनाना आसान था।"
    },
    {
        question: "प्रश्न 13. मध्यपाषाण काल में धनुष-बाण के विकास का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "बड़े जानवरों का शिकार करना", correct: false },
            { text: "छोटे और तेज गति वाले जानवरों का शिकार करना", correct: true },
            { text: "युद्ध में उपयोग के लिए", correct: false },
            { text: "केवल एक खेल के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जलवायु परिवर्तन के कारण बड़े जानवर कम हो गए और <b>हिरण, खरगोश</b> जैसे छोटे और तेज जानवर बढ़ गए।<br><br><i class='fa-solid fa-angles-right icon'></i> इनका शिकार करने के लिए दूर से वार करने वाले <b>धनुष-बाण</b> जैसे हथियारों का विकास हुआ।"
    },
    {
        question: "प्रश्न 14. 'टेरी स्थल' (Teri sites) नामक मध्यपाषाणकालीन स्थल कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "राजस्थान के थार मरुस्थल में", correct: false },
            { text: "तमिलनाडु के समुद्र तटीय बालू के टीलों पर", correct: true },
            { text: "मध्य प्रदेश की नर्मदा घाटी में", correct: false },
            { text: "उत्तर प्रदेश की गंगा घाटी में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>टेरी स्थल</b> <b>तमिलनाडु</b> के थूथुकुडी (पूर्व में तिरुनेलवेली) जिले में स्थित हैं, जो <b>लाल रंग के बालू के टीलों</b> से बने हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से मध्यपाषाणकालीन सूक्ष्मपाषाण उपकरण मिले हैं।"
    },
    {
        question: "प्रश्न 15. किस मध्यपाषाणकालीन स्थल से युद्ध या बाहरी आक्रमण का प्रारंभिक साक्ष्य मिलता है, जहाँ एक कंकाल के सीने में तीर फँसा हुआ मिला?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "लंघनाज", correct: false },
            { text: "सराय नाहर राय", correct: true },
            { text: "दमदमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सराय नाहर राय</b> से मिले एक मानव कंकाल की पसलियों में एक <b>सूक्ष्मपाषाण का अग्रभाग (तीर की नोक) धँसा</b> हुआ पाया गया, जिसे मानवीय संघर्ष का एक प्रारंभिक पुरातात्विक साक्ष्य माना जाता है।"
    },
    {
        question: "प्रश्न 16. 'समलंब' (Trapeze) और 'नवचंद्राकार' (Lunate) किस काल के उपकरणों के विशिष्ट प्रकार हैं?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: true },
            { text: "नवपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये <b>ज्यामितीय आकार</b> के सूक्ष्मपाषाण हैं जो <b>मध्यपाषाण काल</b> की विशेषता हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें लकड़ी या हड्डी के हत्थों में लगाकर मिश्रित औजार (जैसे हँसिया या तीर) बनाए जाते थे।"
    },
    {
        question: "प्रश्न 17. मध्यपाषाणकालीन लोगों की जीवनशैली कैसी थी?",
        answers: shuffle([
            { text: "पूर्णतः स्थायी और कृषि आधारित", correct: false },
            { text: "पूर्णतः घुमंतू शिकारी-संग्राहक", correct: false },
            { text: "अर्ध-स्थायी (मौसमी प्रवास) और उन्नत शिकारी-संग्राहक", correct: true },
            { text: "शहरी और व्यापारिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में लोगों ने मौसमी शिविरों में <b>लंबे समय तक रहना</b> शुरू कर दिया था, लेकिन वे अभी भी भोजन की तलाश में एक क्षेत्र से दूसरे क्षेत्र में प्रवास करते थे।"
    },
    {
        question: "प्रश्न 18. बीरभानपुर, एक प्रमुख मध्यपाषाणकालीन स्थल, किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "उड़ीसा", correct: false },
            { text: "पश्चिम बंगाल", correct: true },
            { text: "झारखंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बीरभानपुर</b> <b>पश्चिम बंगाल</b> के बर्धमान जिले में दामोदर नदी के किनारे स्थित एक महत्वपूर्ण मध्यपाषाणकालीन स्थल है, जिसका उत्खनन बी.बी. लाल ने किया था।"
    },
    {
        question: "प्रश्न 19. मध्यपाषाणकालीन मानव द्वारा मृतकों को दफनाने की प्रथा क्या दर्शाती है?",
        answers: shuffle([
            { text: "स्वच्छता के प्रति जागरूकता", correct: false },
            { text: "पारलौकिक जीवन में विश्वास और अनुष्ठानों का विकास", correct: true },
            { text: "भूमि पर स्वामित्व की भावना", correct: false },
            { text: "जनसंख्या नियंत्रण की विधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृतकों को कब्रों में <b>व्यवस्थित रूप से दफनाना</b> और कभी-कभी उनके साथ खाद्य सामग्री या औजार रखना यह इंगित करता है कि वे <b>मृत्यु के बाद के जीवन</b> के बारे में सोचने लगे थे।"
    },
    {
        question: "प्रश्न 20. किस स्थल से एक 'बूचड़खाना' (slaughter house) क्षेत्र का साक्ष्य मिला है, जहाँ बड़ी मात्रा में जानवरों की हड्डियाँ मिली हैं?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "दमदमा", correct: false },
            { text: "महदहा", correct: true },
            { text: "आदमगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महदहा</b> में झील के किनारे एक बड़े क्षेत्र में हिरण, भैंस, सूअर आदि की हड्डियाँ मिली हैं, जिसे एक <b>सामूहिक बूचड़खाना या कसाईखाना</b> माना गया है।"
    },
    {
        question: "प्रश्न 21. मध्यपाषाणकालीन लोगों ने किस जानवर को संभवतः सबसे पहले पालतू बनाया?",
        answers: shuffle([
            { text: "घोड़ा", correct: false },
            { text: "गाय", correct: false },
            { text: "कुत्ता", correct: true },
            { text: "बिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैश्विक साक्ष्यों के आधार पर माना जाता है कि कुत्ते का जंगली पूर्वज (भेड़िया) मानव द्वारा <b>पालतू बनाया गया पहला जानवर</b> था, जिसका उपयोग शिकार में सहायता और सुरक्षा के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 22. मध्यपाषाण काल में 'मिश्रित उपकरण' (Composite tool) से क्या तात्पर्य है?",
        answers: shuffle([
            { text: "दो अलग-अलग धातुओं से बना उपकरण", correct: false },
            { text: "कई छोटे सूक्ष्मपाषाणों को लकड़ी या हड्डी में लगाकर बनाया गया उपकरण", correct: true },
            { text: "पत्थर और मिट्टी से बना उपकरण", correct: false },
            { text: "आयातित और स्थानीय सामग्री से बना उपकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सूक्ष्मपाषाणों</b> को बर्च या राल जैसे चिपकाने वाले पदार्थ से <b>लकड़ी या हड्डी के डंडे</b> पर एक पंक्ति में लगाकर हँसिया, चाकू या तीर का अग्रभाग बनाया जाता था।"
    },
    {
        question: "प्रश्न 23. भारत में सूक्ष्मपाषाण उपकरणों की खोज का श्रेय किसे दिया जाता है?",
        answers: shuffle([
            { text: "रॉबर्ट ब्रूस फुट", correct: false },
            { text: "सी. एल. कार्लाइल", correct: true },
            { text: "जॉन मार्शल", correct: false },
            { text: "अलेक्जेंडर कनिंघम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आर्किबाल्ड कैंपबेल लुइस कार्लाइल</b> (सी. एल. कार्लाइल) ने <b>1867</b> में विंध्य क्षेत्र के शैलाश्रयों से सबसे पहले <b>सूक्ष्मपाषाण उपकरणों</b> की खोज की थी।"
    },
    {
        question: "प्रश्न 24. मध्यपाषाणकालीन मानव झोपड़ियाँ बनाने के लिए किन सामग्रियों का उपयोग करते थे?",
        answers: shuffle([
            { text: "ईंट और सीमेंट", correct: false },
            { text: "पत्थर और लोहा", correct: false },
            { text: "लकड़ी के खंभे, घास-फूस और पत्तियाँ", correct: true },
            { text: "संगमरमर और ग्रेनाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक स्थलों पर मिले <b>खंभों के गड्ढों</b> (post-holes) और फर्श के साक्ष्यों से पता चलता है कि वे गोलाकार या अंडाकार झोपड़ियाँ बनाते थे जिनकी छतें <b>घास-फूस</b> की होती थीं।"
    },
    {
        question: "प्रश्न 25. किस मध्यपाषाणकालीन स्थल से स्त्री-पुरुष को एक साथ दफनाए जाने (युग्म शवाधान) का साक्ष्य मिला है?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "आदमगढ़", correct: false },
            { text: "महदहा", correct: true },
            { text: "बीरभानपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महदहा</b> से कई <b>युग्म शवाधान</b> मिले हैं, जिनमें एक पुरुष और एक महिला को एक ही कब्र में एक साथ दफनाया गया है।"
    },
    {
        question: "प्रश्न 26. मध्यपाषाण काल के लोगों का मुख्य भोजन क्या था?",
        answers: shuffle([
            { text: "केवल कृषि उत्पाद (गेहूँ, चावल)", correct: false },
            { text: "केवल पालतू पशुओं का मांस", correct: false },
            { text: "जंगली जानवरों का शिकार, मछली और कंद-मूल-फल", correct: true },
            { text: "केवल दूध और डेयरी उत्पाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे अभी भी मुख्यतः <b>शिकारी-संग्राहक</b> थे, लेकिन उनके भोजन में मछली, पक्षी, कछुए और जंगली अनाज जैसे नए खाद्य स्रोत भी शामिल हो गए थे।"
    },
    {
        question: "प्रश्न 27. मध्यपाषाण काल में मानव कंकालों के अध्ययन से क्या जानकारी मिलती है?",
        answers: shuffle([
            { text: "उनके राजनीतिक संगठन की", correct: false },
            { text: "उनकी भाषा की", correct: false },
            { text: "उनके स्वास्थ्य, पोषण और औसत आयु की", correct: true },
            { text: "उनकी लेखन प्रणाली की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव कंकालों के विश्लेषण से पुरातत्ववेत्ता उस समय के लोगों की <b>शारीरिक बनावट, बीमारियों, पोषण स्तर और जीवन प्रत्याशा</b> का अनुमान लगा सकते हैं।"
    },
    {
        question: "प्रश्न 28. बागोर (राजस्थान) के उत्खनन का कार्य किस प्रसिद्ध पुरातत्ववेत्ता ने किया?",
        answers: shuffle([
            { text: "जी. आर. शर्मा", correct: false },
            { text: "एच. डी. सांकलिया", correct: false },
            { text: "वी. एन. मिश्र", correct: true },
            { text: "बी. बी. लाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>वीरेंद्र नाथ मिश्र</b> (वी. एन. मिश्र) ने डेक्कन कॉलेज, पुणे की ओर से <b>बागोर</b> में व्यापक उत्खनन कार्य किया, जिससे भारतीय मध्यपाषाण काल के बारे में हमारी समझ में क्रांति आई।"
    },
    {
        question: "प्रश्न 29. गर्त-चूल्हा (Pit-hearth), जो मध्यपाषाणकालीन स्थलों पर पाए जाते हैं, का उपयोग किस लिए होता था?",
        answers: shuffle([
            { text: "पानी जमा करने के लिए", correct: false },
            { text: "कचरा फेंकने के लिए", correct: false },
            { text: "भोजन पकाने और गर्मी के लिए", correct: true },
            { text: "मृतकों को दफनाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सराय नाहर राय</b> जैसे स्थलों पर अंडाकार या गोलाकार <b>गर्त-चूल्हे</b> मिले हैं, जिनमें जली हुई मिट्टी और जानवरों की हड्डियाँ हैं, जो <b>भोजन पकाने</b> का स्पष्ट संकेत हैं।"
    },
    {
        question: "प्रश्न 30. भीमबेटका में मध्यपाषाणकालीन चित्र किन रंगों से बने हैं?",
        answers: shuffle([
            { text: "केवल काले रंग से", correct: false },
            { text: "केवल लाल रंग से", correct: false },
            { text: "मुख्य रूप से लाल और सफेद, कभी-कभी हरे और पीले", correct: true },
            { text: "नीले और सुनहरे रंग से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाणकालीन चित्रों में रंगों की विविधता बढ़ी।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>लाल और सफेद रंग प्रमुख</b> थे, लेकिन कुछ स्थानों पर हरे और पीले रंगों का भी प्रयोग किया गया है।"
    },
    {
        question: "प्रश्न 31. मध्यपाषाण काल में जनसंख्या वृद्धि का एक प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "बेहतर हथियार और खाद्य स्रोतों की विविधता", correct: true },
            { text: "कृषि का विकास", correct: false },
            { text: "शहरों का उदय", correct: false },
            { text: "बाहरी दुनिया से प्रवास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>धनुष-बाण</b> जैसे कुशल हथियारों और मछली पकड़ने जैसी नई तकनीकों के कारण <b>खाद्य सुरक्षा बढ़ी</b>, जिससे जनसंख्या में वृद्धि हुई।"
    },
    {
        question: "प्रश्न 32. दक्षिण भारत में मध्यपाषाणकालीन संस्कृति के अवशेष कहाँ मिले हैं?",
        answers: shuffle([
            { text: "केवल गुफाओं में", correct: false },
            { text: "नदी घाटियों और तटीय क्षेत्रों में", correct: true },
            { text: "केवल पहाड़ों की चोटी पर", correct: false },
            { text: "घने जंगलों के अंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण भारत में कृष्णा, तुंगभद्रा नदी घाटियों और तमिलनाडु के <b>टेरी स्थलों</b> जैसे विभिन्न पारिस्थितिक क्षेत्रों में मध्यपाषाणकालीन सूक्ष्मपाषाण पाए गए हैं।"
    },
    {
        question: "प्रश्न 33. सराय नाहर राय, महदहा और दमदमा स्थल किस भौगोलिक क्षेत्र की विशिष्ट मध्यपाषाण संस्कृति का प्रतिनिधित्व करते हैं?",
        answers: shuffle([
            { text: "थार मरुस्थल", correct: false },
            { text: "मध्य गंगा घाटी", correct: true },
            { text: "दक्कन का पठार", correct: false },
            { text: "पूर्वी घाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये तीनों स्थल <b>मध्य गंगा के मैदानी इलाकों</b> में स्थित हैं और यहाँ की मध्यपाषाण संस्कृति <b>हड्डी के उपकरणों</b> और विशिष्ट दफन प्रथाओं के लिए जानी जाती है।"
    },
    {
        question: "प्रश्न 34. मध्यपाषाणकालीन लोगों के आभूषण मुख्य रूप से किससे बने होते थे?",
        answers: shuffle([
            { text: "सोने और चांदी से", correct: false },
            { text: "हड्डी, सींग और पत्थर के मनकों से", correct: true },
            { text: "लोहे और तांबे से", correct: false },
            { text: "कांच और प्लास्टिक से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महदहा और दमदमा</b> जैसे स्थलों से <b>हिरण के सींग के छल्ले, हड्डी के पेंडेंट और पत्थर के मनकों</b> से बने आभूषण मिले हैं।"
    },
    {
        question: "प्रश्न 35. मध्यपाषाण काल के चित्रों में मनुष्यों को अक्सर किस प्रकार चित्रित किया गया है?",
        answers: shuffle([
            { text: "बहुत यथार्थवादी और विस्तृत", correct: false },
            { text: "'स्टिक-फिगर' (डंडों जैसी आकृति) के रूप में और गतिशील", correct: true },
            { text: "बैठे हुए और ध्यानमग्न", correct: false },
            { text: "विशाल आकार में देवताओं के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल के चित्रों में मानव आकृतियों को <b>सरल रेखाओं</b> से बनाया गया है, लेकिन उन्हें दौड़ते, शिकार करते और नृत्य करते हुए, यानी <b>अत्यधिक गतिशील अवस्था</b> में दिखाया गया है।"
    },
    {
        question: "प्रश्न 36. कौन सी गतिविधि मध्यपाषाण काल में शुरू हुई?",
        answers: shuffle([
            { text: "आग का उपयोग", correct: false },
            { text: "व्यवस्थित दफन प्रक्रिया", correct: true },
            { text: "पत्थर के औजार बनाना", correct: false },
            { text: "गुफाओं में रहना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आग का उपयोग, औजार बनाना और गुफाओं में रहना पुरापाषाण काल में ही शुरू हो चुका था।<br><br><i class='fa-solid fa-angles-right icon'></i> मृतकों को जानबूझकर कब्रों में दफनाने की प्रथा <b>मध्यपाषाण काल में प्रमुख</b> हुई।"
    },
    {
        question: "प्रश्न 37. मध्यपाषाण काल के अंत में किस विकास ने नवपाषाण क्रांति का मार्ग प्रशस्त किया?",
        answers: shuffle([
            { text: "धातु का उपयोग", correct: false },
            { text: "लेखन का आविष्कार", correct: false },
            { text: "जंगली अनाजों का संग्रहण और प्रारंभिक पौध-रोपण", correct: true },
            { text: "बड़े साम्राज्यों का गठन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल के अंत में लोगों ने <b>जंगली अनाजों को इकट्ठा</b> करना और उनके साथ प्रयोग करना शुरू कर दिया, जो धीरे-धीरे <b>कृषि के विकास</b> में परिणत हुआ।"
    },
    {
        question: "प्रश्न 38. 'पचपहाड़' और 'घघरिया' शैलाश्रय किस क्षेत्र में स्थित मध्यपाषाणकालीन स्थल हैं?",
        answers: shuffle([
            { text: "विंध्य क्षेत्र", correct: true },
            { text: "अरावली क्षेत्र", correct: false },
            { text: "पश्चिमी घाट", correct: false },
            { text: "हिमालय क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये शैलाश्रय मध्य प्रदेश और उत्तर प्रदेश के सीमावर्ती <b>कैमूर पर्वत श्रृंखला (विंध्य का हिस्सा)</b> में स्थित हैं और अपनी शैल कला के लिए जाने जाते हैं।"
    },
    {
        question: "प्रश्न 39. मध्यपाषाण काल में कुत्ते को पालतू बनाने का मुख्य उद्देश्य क्या रहा होगा?",
        answers: shuffle([
            { text: "दूध प्राप्त करना", correct: false },
            { text: "मांस के लिए", correct: false },
            { text: "शिकार में सहायता और सुरक्षा", correct: true },
            { text: "परिवहन के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुत्ते अपनी सूंघने की तीव्र क्षमता और सतर्कता के कारण <b>शिकार को खोजने और शिविर की सुरक्षा</b> करने में मानव के लिए बहुत उपयोगी साबित हुए होंगे।"
    },
    {
        question: "प्रश्न 40. कौन सा सूक्ष्मपाषाण उपकरण फसल काटने के लिए हँसिया बनाने में प्रयुक्त होता था?",
        answers: shuffle([
            { text: "बेधनी (Point)", correct: false },
            { text: "खुरचनी (Scraper)", correct: false },
            { text: "नवचंद्राकार (Lunate) ब्लेड", correct: true },
            { text: "ब्यूरिन (Burin)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई छोटे-छोटे <b>नवचंद्राकार ब्लेडों</b> को एक पंक्ति में लकड़ी या हड्डी के हत्थे पर लगाकर एक आदिम <b>हँसिया</b> बनाया जाता था, जिससे जंगली घास या अनाज काटा जाता था।"
    },
    {
        question: "प्रश्न 41. भारत में मानव अस्थिपंजर का सबसे पहला अवशेष किस काल से प्राप्त होता है?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: false },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि हथनोरा से एक खोपड़ी मिली है, लेकिन पूर्ण <b>मानव अस्थिपंजर या कंकाल व्यवस्थित रूप से मध्यपाषाण काल के शवाधानों</b> (जैसे सराय नाहर राय, लंघनाज) से ही मिलने शुरू होते हैं।"
    },
    {
        question: "प्रश्न 42. मध्यपाषाणकालीन अर्थव्यवस्था के लिए कौन सा शब्द सबसे उपयुक्त है?",
        answers: shuffle([
            { text: "खाद्य-उत्पादक अर्थव्यवस्था", correct: false },
            { text: "गहन खाद्य-संग्राहक और आखेटक अर्थव्यवस्था", correct: true },
            { text: "औद्योगिक अर्थव्यवस्था", correct: false },
            { text: "व्यापार-आधारित अर्थव्यवस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में शिकार और संग्रहण की तकनीकों का विकास हुआ और खाद्य स्रोतों का दायरा बढ़ा, इसलिए इसे '<b>गहन</b>' या '<b>उन्नत</b>' खाद्य-संग्राहक अर्थव्यवस्था कहा जाता है।"
    },
    {
        question: "प्रश्न 43. आदमगढ़ शैलाश्रय किस नदी के पास स्थित है?",
        answers: shuffle([
            { text: "चंबल", correct: false },
            { text: "बेतवा", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "ताप्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आदमगढ़ शैलाश्रय</b> मध्य प्रदेश के होशंगाबाद जिले में <b>नर्मदा नदी</b> के पास स्थित है।"
    },
    {
        question: "प्रश्न 44. मध्यपाषाण काल के आवास स्थल कैसे थे?",
        answers: shuffle([
            { text: "बड़े, पत्थर के बने शहर", correct: false },
            { text: "भूमिगत बंकर", correct: false },
            { text: "अस्थायी झोपड़ियाँ और शैलाश्रय", correct: true },
            { text: "लकड़ी के बड़े-बड़े घर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोग या तो <b>प्राकृतिक रूप से उपलब्ध शैलाश्रयों</b> में रहते थे या खुले में <b>घास-फूस और लकड़ी की अस्थायी झोपड़ियाँ</b> बनाकर रहते थे।"
    },
    {
        question: "प्रश्न 45. किस स्थल से फर्श बनाने और खंभे गाड़ने के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "बागोर", correct: true },
            { text: "दमदमा", correct: false },
            { text: "टेरी स्थल", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बागोर</b> में गोलाकार झोपड़ियों के फर्श मिले हैं जिन्हें <b>पत्थरों से बनाया</b> गया था, और <b>खंभे गाड़ने</b> के भी निशान मिले हैं जो छत को सहारा देते थे।"
    },
    {
        question: "प्रश्न 46. मध्यपाषाणकालीन लोगों द्वारा मछली पकड़ने का साक्ष्य किससे मिलता है?",
        answers: shuffle([
            { text: "नावों के अवशेष", correct: false },
            { text: "मछली की हड्डियों और चित्रों से", correct: true },
            { text: "मछली पकड़ने पर लिखे ग्रंथों से", correct: false },
            { text: "जाल के टुकड़ों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई स्थलों से <b>मछली की हड्डियाँ</b> मिली हैं और भीमबेटका जैसे शैलाश्रयों में मछली पकड़ने के दृश्य चित्रित हैं, जो इस गतिविधि की पुष्टि करते हैं।"
    },
    {
        question: "प्रश्न 47. लघुपाषाण उपकरणों की 'फ्लूटिंग तकनीक' (Fluting Technique) क्या है?",
        answers: shuffle([
            { text: "उपकरणों को पॉलिश करने की विधि", correct: false },
            { text: "एक विशेष प्रकार के कोर से समानांतर धार वाले छोटे ब्लेड निकालने की विधि", correct: true },
            { text: "उपकरणों को हत्थे में जोड़ने की विधि", correct: false },
            { text: "पत्थर पर चित्र बनाने की विधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सूक्ष्मपाषाण बनाने की एक कुशल विधि थी, जिसमें एक <b>बेलनाकार कोर</b> पर दबाव डालकर एक के बाद एक कई छोटे-छोटे <b>ब्लेड उतारे</b> जाते थे।"
    },
    {
        question: "प्रश्न 48. मध्यपाषाणकालीन समाज की मूल इकाई क्या थी?",
        answers: shuffle([
            { text: "राष्ट्र", correct: false },
            { text: "राज्य", correct: false },
            { text: "परिवार या बैंड (समूह)", correct: true },
            { text: "जाति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में भी सामाजिक संगठन की मूल इकाई छोटा, आपस में संबंधित <b>समूह या परिवार</b> था, जिसे <b>बैंड</b> कहते हैं, हालांकि ये पुरापाषाण काल की तुलना में बड़े हो सकते थे।"
    },
    {
        question: "प्रश्न 49. मध्यपाषाणकालीन औजारों का छोटा आकार क्यों उपयोगी था?",
        answers: shuffle([
            { text: "क्योंकि बड़े पत्थर उपलब्ध नहीं थे", correct: false },
            { text: "क्योंकि वे बच्चों के खेलने के लिए थे", correct: false },
            { text: "क्योंकि उन्हें मिश्रित उपकरणों में आसानी से लगाया जा सकता था और वे किफायती थे", correct: true },
            { text: "क्योंकि उन्हें छिपाना आसान था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटे औजार बनाने से कच्चे माल की बचत होती थी और उन्हें <b>तीर, भाले या हँसिया</b> जैसे विभिन्न प्रकार के <b>मिश्रित उपकरणों</b> में आसानी से फिट किया जा सकता था।"
    },
    {
        question: "प्रश्न 50. 'महगड़ा' (Mahagara), जो मध्यपाषाण काल से नवपाषाण काल तक के साक्ष्य प्रस्तुत करता है, कहाँ स्थित है?",
        answers: shuffle([
            { text: "नर्मदा घाटी में", correct: false },
            { text: "बेलन घाटी में", correct: true },
            { text: "ब्रह्मपुत्र घाटी में", correct: false },
            { text: "सिंधु घाटी में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महगड़ा</b>, इलाहाबाद (अब प्रयागराज) के पास <b>बेलन नदी घाटी</b> में स्थित है, जहाँ से मध्यपाषाण काल के बाद नवपाषाण काल के पशुबाड़े और झोपड़ियों के भी साक्ष्य मिले हैं।"
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