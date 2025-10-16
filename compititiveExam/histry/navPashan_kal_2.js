const questions = [
    {
        topHeading: "नवपाषाण काल पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. नवपाषाणिक कुल्हाड़ियों का मुख्य उपयोग क्या था?",
        answers: shuffle([
            { text: "जानवरों का शिकार करना", correct: false },
            { text: "युद्ध लड़ना", correct: false },
            { text: "भूमि को साफ करना और लकड़ी काटना", correct: true },
            { text: "धार्मिक अनुष्ठान करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पॉलिशदार पत्थर की कुल्हाड़ियाँ (सेल्ट) कृषि के लिए <b>जंगल साफ करने, लकड़ी काटने</b> और घर बनाने के लिए लकड़ी तैयार करने में बहुत प्रभावी थीं।"
    },
    {
        question: "प्रश्न 2. भारत में व्यवस्थित रूप से नवपाषाणिक स्थलों की खोज का श्रेय किसे दिया जाता है?",
        answers: shuffle([
            { text: "डॉ. प्राइमरोस", correct: true },
            { text: "अलेक्जेंडर कनिंघम", correct: false },
            { text: "जॉन मार्शल", correct: false },
            { text: "रॉबर्ट ब्रूस फुट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1842 में, <b>डॉ. प्राइमरोस</b> ने कर्नाटक के लिंगसुगुर में पहली बार नवपाषाणिक उपकरण (पॉलिशदार पत्थर की छुरी और तीर की नोंक) खोजे, जिसने भारत में इस काल के अध्ययन की नींव रखी।"
    },
    {
        question: "प्रश्न 3. आंध्र प्रदेश का कौन सा स्थल नवपाषाण काल का प्रतिनिधित्व करता है?",
        answers: shuffle([
            { text: "पिक्लीहल", correct: false },
            { text: "हल्लूर", correct: false },
            { text: "उतनूर", correct: true },
            { text: "पय्यमपल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>उतनूर</b> वर्तमान तेलंगाना (पूर्व में आंध्र प्रदेश का हिस्सा) में स्थित एक महत्वपूर्ण नवपाषाणिक स्थल है, जो अपने <b>राख के टीलों</b> और पशु बाड़ों के लिए जाना जाता है।"
    },
    {
        question: "प्रश्न 4. कृषि के उदय ने मानव समाज को क्या प्रदान किया?",
        answers: shuffle([
            { text: "अधिक खाली समय", correct: false },
            { text: "भोजन की निश्चितता और स्थायी जीवन", correct: true },
            { text: "बेहतर स्वास्थ्य", correct: false },
            { text: "पूर्ण समानता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृषि ने भोजन की आपूर्ति को शिकार की तुलना में अधिक <b>विश्वसनीय</b> बना दिया, जिससे मानव को एक स्थान पर <b>स्थायी रूप से बसने</b> का अवसर मिला।"
    },
    {
        question: "प्रश्न 5. किस नवपाषाणिक स्थल से जौ की छह-पंक्ति वाली किस्म के प्रमाण मिले हैं?",
        answers: shuffle([
            { text: "कोल्डिहवा", correct: false },
            { text: "मेहरगढ़", correct: true },
            { text: "बुर्जहोम", correct: false },
            { text: "चिरांद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मेहरगढ़</b> के शुरुआती कृषि साक्ष्यों में जौ की उन्नत किस्में भी शामिल हैं, जो उस समय के कृषि ज्ञान को दर्शाती हैं।"
    },
    {
        question: "प्रश्न 6. पहिये का प्राचीनतम उपयोग किस रूप में हुआ था?",
        answers: shuffle([
            { text: "गाड़ी खींचने के लिए", correct: false },
            { text: "कुम्हार के चाक के रूप में", correct: true },
            { text: "पानी निकालने के लिए", correct: false },
            { text: "खिलौनों के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि पहिये का सबसे पहला उपयोग बर्तन बनाने वाले <b>कुम्हार के चाक</b> के रूप में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> परिवहन में इसका उपयोग बाद में शुरू हुआ।"
    },
    {
        question: "प्रश्न 7. नवपाषाण काल का कौन सा स्थल झेलम नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "गुफ्कराल", correct: false },
            { text: "मार्तंड", correct: false },
            { text: "बुर्जहोम", correct: true },
            { text: "अवंतीपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रीनगर के पास स्थित <b>बुर्जहोम</b> प्राचीन काल में <b>झेलम नदी</b> के किनारे एक झील के ऊपर स्थित था, जो यहाँ के निवासियों के लिए मछली पकड़ने और परिवहन का एक अच्छा स्रोत था।"
    },
    {
        question: "प्रश्न 8. नवपाषाण काल में मानव बस्तियों की सुरक्षा के लिए क्या उपाय किए जाते थे?",
        answers: shuffle([
            { text: "बड़ी सेना रखी जाती थी", correct: false },
            { text: "बस्तियों के चारों ओर खाई या बाड़ बनाई जाती थी", correct: true },
            { text: "कोई सुरक्षा उपाय नहीं थे", correct: false },
            { text: "वे गुफाओं में छिप जाते थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ नवपाषाणिक स्थलों पर, जैसे कि महगड़ा, बस्तियों के चारों ओर <b>सुरक्षात्मक बाड़ या खाई</b> के प्रमाण मिले हैं, जो जंगली जानवरों या अन्य समूहों से सुरक्षा के लिए बनाए गए होंगे।"
    },
    {
        question: "प्रश्न 9. 'ब्लैक एंड रेड वेयर' (काले और लाल मृदभांड) का संबंध किस काल से है?",
        answers: shuffle([
            { text: "केवल नवपाषाण काल", correct: false },
            { text: "केवल ताम्रपाषाण काल", correct: false },
            { text: "नवपाषाण-ताम्रपाषाण काल और उसके बाद", correct: true },
            { text: "केवल लौह युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>काले और लाल मृदभांड</b>, जिन्हें बनाने की एक विशेष तकनीक थी, नवपाषाण काल के अंतिम चरण में दिखाई देने लगे और <b>ताम्रपाषाण काल और लौह युग</b> में बहुत लोकप्रिय हुए।"
    },
    {
        question: "प्रश्न 10. नवपाषाण युग के लोग किस प्रकार की धार्मिक मान्यताओं का पालन करते थे?",
        answers: shuffle([
            { text: "एकेश्वरवाद", correct: false },
            { text: "संगठित धर्म", correct: false },
            { text: "प्रकृति पूजा और मातृदेवी की पूजा", correct: true },
            { text: "नास्तिकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक साक्ष्यों, जैसे कि मिट्टी की बनी नारी-मूर्तियों से, यह अनुमान लगाया जाता है कि नवपाषाणिक लोग उर्वरता और प्रकृति की शक्तियों, विशेष रूप से <b>मातृदेवी की पूजा</b> करते थे।"
    },
    {
        question: "प्रश्न 11. किस भारतीय स्थल से नवपाषाण काल से लेकर हड़प्पा सभ्यता तक के सांस्कृतिक विकास का निरंतर क्रम मिलता है?",
        answers: shuffle([
            { text: "कालीबंगा", correct: false },
            { text: "धौलावीरा", correct: false },
            { text: "मेहरगढ़", correct: true },
            { text: "राखीगढ़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मेहरगढ़</b> एक अनूठा स्थल है जहाँ लगभग <b>7000 ईसा पूर्व के नवपाषाण काल</b> से लेकर लगभग 2500 ईसा पूर्व की विकसित हड़प्पा सभ्यता तक के सांस्कृतिक विकास के सभी चरण देखे जा सकते हैं।"
    },
    {
        question: "प्रश्न 12. विंध्य क्षेत्र के किस नवपाषाणिक स्थल से बड़ी संख्या में पाषाण उपकरण और लघुपाषाण उपकरण मिले हैं?",
        answers: shuffle([
            { text: "चोपानी-मांडो", correct: false },
            { text: "महगड़ा", correct: false },
            { text: "कोल्डिहवा", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के विंध्य क्षेत्र में स्थित ये सभी स्थल (<b>चोपानी-मांडो, महगड़ा, कोल्डिहवा</b>) नवपाषाणिक संस्कृति के महत्वपूर्ण केंद्र थे, जहाँ से विभिन्न प्रकार के पाषाण उपकरण प्राप्त हुए हैं।"
    },
    {
        question: "प्रश्न 13. नवपाषाणिक बस्तियों के उदय का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "जलवायु का अत्यधिक ठंडा हो जाना", correct: false },
            { text: "जनसंख्या में भारी कमी", correct: false },
            { text: "खाद्य उत्पादन तकनीकों का विकास", correct: true },
            { text: "बड़े राज्यों का उदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कृषि और पशुपालन</b> जैसी खाद्य उत्पादन तकनीकों ने मानव को भोजन के लिए भटकने की आवश्यकता से मुक्त कर दिया, जिससे वे एक ही स्थान पर <b>स्थायी बस्तियाँ</b> बनाकर रहने में सक्षम हुए।"
    },
    {
        question: "प्रश्न 14. मस्की, जो एक नवपाषाणिक स्थल है, किस लिए भी प्रसिद्ध है?",
        answers: shuffle([
            { text: "सोने की खानों के लिए", correct: false },
            { text: "अशोक के शिलालेख के लिए", correct: true },
            { text: "बड़े बंदरगाह के लिए", correct: false },
            { text: "विश्वविद्यालय के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक में स्थित मस्की एक नवपाषाणिक स्थल होने के साथ-साथ एक प्रसिद्ध ऐतिहासिक स्थल भी है जहाँ से <b>सम्राट अशोक का एक लघु शिलालेख</b> मिला है जिसमें उनका नाम 'देवानांप्रिय अशोक' मिलता है।"
    },
    {
        question: "प्रश्न 15. नवपाषाण काल में व्यापार का स्वरूप कैसा था?",
        answers: shuffle([
            { text: "मुद्रा आधारित", correct: false },
            { text: "पूर्णतः अनुपस्थित", correct: false },
            { text: "वस्तु-विनिमय प्रणाली पर आधारित", correct: true },
            { text: "अंतरराष्ट्रीय समुद्री व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में व्यापार सीमित था और <b>वस्तु-विनिमय (barter system)</b> पर आधारित था, जिसमें एक वस्तु के बदले दूसरी वस्तु (जैसे अनाज के बदले पत्थर के औजार) का आदान-प्रदान किया जाता था।"
    },
    {
        question: "प्रश्न 16. किस क्षेत्र के नवपाषाणिक लोग मछली पकड़ने पर बहुत अधिक निर्भर थे?",
        answers: shuffle([
            { text: "बलूचिस्तान", correct: false },
            { text: "कश्मीर घाटी", correct: true },
            { text: "राजस्थान", correct: false },
            { text: "मध्य भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बुर्जहोम</b> जैसे स्थल झीलों के किनारे स्थित थे, और यहाँ से मिले हड्डी के बने <b>मछली पकड़ने के कांटे (fish hooks)</b> इस बात का प्रमाण हैं कि मछली पकड़ना उनके भोजन का एक महत्वपूर्ण हिस्सा था।"
    },
    {
        question: "प्रश्न 17. ब्रह्मगिरि नवपाषाणिक स्थल की खोज किसने की थी?",
        answers: shuffle([
            { text: "आर. डी. बनर्जी", correct: false },
            { text: "दया राम साहनी", correct: false },
            { text: "मॉर्टिमर व्हीलर", correct: true },
            { text: "एस. आर. राव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर <b>मॉर्टिमर व्हीलर</b> ने 1947 में कर्नाटक के चित्रदुर्ग जिले में स्थित ब्रह्मगिरि स्थल पर उत्खनन किया, जिससे दक्षिण भारत की नवपाषाणिक और महापाषाणिक संस्कृतियों पर महत्वपूर्ण प्रकाश पड़ा।"
    },
    {
        question: "प्रश्न 18. नवपाषाण काल में कृषि के विकास ने किस सामाजिक संस्था को जन्म दिया?",
        answers: shuffle([
            { text: "राजतंत्र", correct: false },
            { text: "निजी संपत्ति और परिवार", correct: true },
            { text: "वर्ण व्यवस्था", correct: false },
            { text: "शहरी निगम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब लोगों ने जमीन पर खेती करना शुरू किया, तो भूमि और उपज पर अधिकार की भावना विकसित हुई, जिसने <b>निजी संपत्ति</b> और स्थायी <b>पारिवारिक इकाइयों</b> की अवधारणा को मजबूत किया।"
    },
    {
        question: "प्रश्न 19. नवपाषाणिक औजार 'मूसल और खरल' (pestle and mortar) का उपयोग किस लिए किया जाता था?",
        answers: shuffle([
            { text: "जानवरों को मारने के लिए", correct: false },
            { text: "जमीन खोदने के लिए", correct: false },
            { text: "अनाज पीसने के लिए", correct: true },
            { text: "मिट्टी के बर्तन बनाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मूसल और खरल</b> का उपयोग कृषि से प्राप्त <b>अनाज (जैसे गेहूँ, जौ) को पीसकर आटा</b> बनाने के लिए किया जाता था, जो आज भी भारतीय रसोई में उपयोग होता है।"
    },
    {
        question: "प्रश्न 20. कौन सा नवपाषाणिक स्थल अपनी वृत्ताकार झोपड़ियों के लिए जाना जाता है?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "चिरांद", correct: false },
            { text: "महगड़ा", correct: true },
            { text: "बुर्जहोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महगड़ा</b> (और कुछ हद तक बुर्जहोम के शुरुआती चरण) में <b>वृत्ताकार या अंडाकार झोपड़ियों</b> के फर्श मिले हैं, जिनके चारों ओर खंभे गाड़ने के लिए छेद बने होते थे।"
    },
    {
        question: "प्रश्न 21. 'ऐशमाउंड' (राख के टीले) का निर्माण किससे संबंधित है?",
        answers: shuffle([
            { text: "धार्मिक अग्नि अनुष्ठान", correct: false },
            { text: "मृतकों का दाह संस्कार", correct: false },
            { text: "पशुओं के गोबर का मौसमी दहन", correct: true },
            { text: "औद्योगिक अपशिष्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्वानों का मानना है कि दक्षिण भारत के नवपाषाणिक पशुपालक समुदाय मौसमी शिविरों में इकट्ठे हुए <b>पशुओं के गोबर</b> को समय-समय पर जला देते थे, जिससे इन विशाल <b>राख के टीलों</b> का निर्माण हुआ।"
    },
    {
        question: "प्रश्न 22. नवपाषाण काल के किस चरण में चाक-निर्मित मृदभांड प्रचलित हुए?",
        answers: shuffle([
            { text: "प्रारंभिक चरण", correct: false },
            { text: "मध्य चरण", correct: false },
            { text: "उत्तर चरण", correct: true },
            { text: "कभी नहीं हुए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल के प्रारंभिक चरणों में हाथ से बने बर्तन उपयोग में थे।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>चाक का उपयोग</b> और उससे बने सुडौल बर्तन इस काल के <b>बाद के या अंतिम चरणों</b> में अधिक प्रचलित हुए।"
    },
    {
        question: "प्रश्न 23. चोपानी-मांडो स्थल क्यों महत्वपूर्ण है?",
        answers: shuffle([
            { text: "यह विश्व में मिट्टी के बर्तनों के उपयोग के प्राचीनतम साक्ष्यों में से एक प्रदान करता है", correct: true },
            { text: "यहाँ से लोहे के उपकरण मिले हैं", correct: false },
            { text: "यह एक बंदरगाह शहर था", correct: false },
            { text: "यहाँ गर्त-आवास मिले हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के बेलन घाटी में स्थित <b>चोपानी-मांडो</b> से मध्यपाषाण काल के अंतिम चरण और नवपाषाण काल की शुरुआत के बीच के संक्रमण काल के साक्ष्य मिले हैं, जिनमें <b>हाथ से बने मिट्टी के बर्तनों के प्राचीनतम प्रमाण</b> शामिल हैं।"
    },
    {
        question: "प्रश्न 24. भारत में नवपाषाण काल का समय सामान्यतः कब से कब तक माना जाता है?",
        answers: shuffle([
            { text: "10,000 ईसा पूर्व से 8000 ईसा पूर्व", correct: false },
            { text: "7000 ईसा पूर्व से 1000 ईसा पूर्व", correct: true },
            { text: "4000 ईसा पूर्व से 2500 ईसा पूर्व", correct: false },
            { text: "1000 ईसा पूर्व से 500 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के विभिन्न भागों में नवपाषाण काल की शुरुआत और अंत अलग-अलग समय पर हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> मेहरगढ़ में यह 7000 ईसा पूर्व में शुरू हुआ, जबकि दक्षिण भारत में यह लगभग 2500 ईसा पूर्व से 1000 ईसा पूर्व तक चला।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए <b>7000 ईसा पूर्व से 1000 ईसा पूर्व</b> एक व्यापक समयावधि है।"
    },
    {
        question: "प्रश्न 25. नवपाषाणिक समाज में श्रम विभाजन का आधार क्या था?",
        answers: shuffle([
            { text: "जाति", correct: false },
            { text: "धन", correct: false },
            { text: "लिंग और आयु", correct: true },
            { text: "शिक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह माना जाता है कि नवपाषाणिक समाजों में कार्य का विभाजन मुख्य रूप से <b>लिंग</b> (पुरुषों के लिए शिकार, कृषि का भारी काम; महिलाओं के लिए घर, बच्चे, और हल्का कृषि कार्य) और <b>आयु</b> के आधार पर होता था।"
    },
    {
        question: "प्रश्न 26. कौन सा स्थल नवपाषाणिक और ताम्रपाषाणिक दोनों संस्कृतियों का प्रतिनिधित्व करता है?",
        answers: shuffle([
            { text: "केवल बुर्जहोम", correct: false },
            { text: "केवल मेहरगढ़", correct: false },
            { text: "चिरांद", correct: true },
            { text: "केवल हल्लूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चिरांद</b> में पहले नवपाषाणिक संस्कृति विकसित हुई और बाद के स्तरों से <b>ताम्रपाषाणिक संस्कृति</b> के भी अवशेष मिले हैं, जिसमें काले और लाल मृदभांड शामिल हैं।"
    },
    {
        question: "प्रश्न 27. 'स्लेट' पत्थर का उपयोग नवपाषाण काल में किस लिए होता था?",
        answers: shuffle([
            { text: "मूर्तियाँ बनाने के लिए", correct: false },
            { text: "आयताकार हार्वेस्टर (फसल काटने के औजार) बनाने के लिए", correct: true },
            { text: "घर की छत बनाने के लिए", correct: false },
            { text: "लिखने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कश्मीर के बुर्जहोम जैसे स्थलों से स्लेट पत्थर से बने <b>आयताकार चाकू या हार्वेस्टर</b> मिले हैं, जिनके किनारों पर धार होती थी और संभवतः इनका उपयोग <b>फसल काटने</b> के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 28. नवपाषाण काल के लोगों के जीवन में कुत्तों का क्या महत्व था?",
        answers: shuffle([
            { text: "केवल भोजन के स्रोत के रूप में", correct: false },
            { text: "शिकार में सहायता और सुरक्षा के लिए", correct: true },
            { text: "परिवहन के लिए", correct: false },
            { text: "धार्मिक बलि के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुत्ता सबसे पहले पालतू बनाए गए जानवरों में से एक था और यह मानव के <b>शिकार अभियानों में मदद</b> करता था तथा बस्तियों को जंगली जानवरों से <b>सुरक्षा</b> प्रदान करता था।"
    },
    {
        question: "प्रश्न 29. उस प्रक्रिया को क्या कहते हैं जिसके द्वारा जंगली पौधों को खेती के लिए अनुकूलित किया गया?",
        answers: shuffle([
            { text: "पशुपालन", correct: false },
            { text: "शहरीकरण", correct: false },
            { text: "औद्योगीकरण", correct: false },
            { text: "डोमेस्टिकेशन (पालतूकरण/ग्राम्यन)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>डोमेस्टिकेशन</b> वह प्रक्रिया है जिसके द्वारा मानव ने जंगली पौधों और जानवरों को अपने उपयोग के लिए चुना और उन्हें धीरे-धीरे कृषि और पशुपालन के अनुकूल बनाया।"
    },
    {
        question: "प्रश्न 30. नवपाषाण काल के पतन और ताम्रपाषाण काल के उदय का मुख्य तकनीकी कारण क्या था?",
        answers: shuffle([
            { text: "लोहे की खोज", correct: false },
            { text: "लेखन का विकास", correct: false },
            { text: "धातु विज्ञान (विशेषकर तांबा) का ज्ञान", correct: true },
            { text: "बड़े जहाजों का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब मानव ने अयस्क से धातु निकालने और उसे औजारों और अन्य वस्तुओं में ढालने की तकनीक सीख ली, तो यह एक बड़ा क्रांतिकारी कदम था जिसने पाषाण युग का अंत और <b>धातु युग (तांबा) की शुरुआत</b> की।"
    },
    {
        question: "प्रश्न 31. किस स्थल से पालिशदार पत्थर की कुल्हाड़ियों के निर्माण का कारखाना मिला है?",
        answers: shuffle([
            { text: "ब्रह्मगिरि", correct: false },
            { text: "संगनकल्लु", correct: true },
            { text: "मेहरगढ़", correct: false },
            { text: "चिरांद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक के <b>संगनकल्लु</b> में पहाड़ी के ऊपर बड़ी संख्या में अधूरे और तैयार पॉलिशदार पत्थर के औजार मिले हैं, जिससे यह अनुमान लगाया जाता है कि यह स्थान इन औजारों के <b>निर्माण का एक प्रमुख केंद्र या कारखाना</b> था।"
    },
    {
        question: "प्रश्न 32. नवपाषाण युग में बुनाई के प्राचीनतम साक्ष्य किस रूप में मिले हैं?",
        answers: shuffle([
            { text: "बुने हुए कपड़ों के टुकड़े", correct: false },
            { text: "मिट्टी पर बुने हुए कपड़ों की छाप", correct: true },
            { text: "चरखे के अवशेष", correct: false },
            { text: "हड्डी की सुइयां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ नवपाषाणिक स्थलों से मिले मिट्टी के बर्तनों के टुकड़ों पर <b>कपड़े या चटाई की छाप</b> मिली है, जो अप्रत्यक्ष रूप से बुनाई कला के अस्तित्व को प्रमाणित करती है।"
    },
    {
        question: "प्रश्न 33. नवपाषाण युग में मानव जीवन प्रत्याशा (life expectancy) कैसी थी?",
        answers: shuffle([
            { text: "बहुत अधिक (लगभग 80 वर्ष)", correct: false },
            { text: "मध्यम (लगभग 50 वर्ष)", correct: false },
            { text: "बहुत कम (लगभग 20-30 वर्ष)", correct: true },
            { text: "अज्ञात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंकालों के अध्ययन से पता चलता है कि बेहतर पोषण के बावजूद, बीमारियाँ, शिशु मृत्यु दर और कठिन जीवनशैली के कारण नवपाषाणिक मानव की औसत आयु बहुत कम थी (लगभग <b>20-30 वर्ष</b>)।"
    },
    {
        question: "प्रश्न 34. किस नवपाषाणिक स्थल से नावों के चित्र वाले मृदभांड के टुकड़े मिले हैं?",
        answers: shuffle([
            { text: "बुर्जहोम", correct: false },
            { text: "मेहरगढ़", correct: false },
            { text: "मोहनजोदड़ो (सिंधु घाटी)", correct: true },
            { text: "कोल्डिहवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नावों का स्पष्ट चित्रण बाद की <b>सिंधु घाटी सभ्यता</b> (जैसे मोहनजोदड़ो) में मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में जल परिवहन का अनुमान नदियों के किनारे बसी बस्तियों से लगाया जाता है, पर स्पष्ट चित्र दुर्लभ हैं।"
    },
    {
        question: "प्रश्न 35. नवपाषाण काल में कृषि की शुरुआत ने मानव आहार को कैसे प्रभावित किया?",
        answers: shuffle([
            { text: "आहार पूरी तरह से मांसाहारी हो गया", correct: false },
            { text: "आहार में कार्बोहाइड्रेट (अनाज) की मात्रा बढ़ गई", correct: true },
            { text: "आहार में कोई बदलाव नहीं आया", correct: false },
            { text: "लोग केवल फल खाने लगे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृषि की शुरुआत के साथ, गेहूँ, जौ, और चावल जैसे <b>अनाज</b> मानव आहार का मुख्य हिस्सा बन गए, जिससे भोजन में <b>कार्बोहाइड्रेट की मात्रा बढ़ी</b>।"
    },
    {
        question: "प्रश्न 36. गुफ्कराल के लोग किस गतिविधि में निपुण थे?",
        answers: shuffle([
            { text: "धातु का काम", correct: false },
            { text: "पत्थर और हड्डी के औजार बनाना", correct: true },
            { text: "समुद्री व्यापार", correct: false },
            { text: "बड़े शहरों का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गुफ्कराल</b> (कुम्हार की गुफा) से बड़ी संख्या में पत्थर के पॉलिशदार औजार और विशेष रूप से <b>हड्डी के औजार</b> (जैसे सुई, हारपून) मिले हैं, जो उनकी इस कला में निपुणता को दर्शाते हैं।"
    },
    {
        question: "प्रश्न 37. नवपाषाण काल में मृत्यु संस्कार कैसे किए जाते थे?",
        answers: shuffle([
            { text: "शवों को खुले में छोड़ दिया जाता था", correct: false },
            { text: "शवों को जलाया जाता था", correct: false },
            { text: "शवों को व्यवस्थित रूप से कब्रों में दफनाया जाता था", correct: true },
            { text: "शवों को नदियों में बहा दिया जाता था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश नवपाषाणिक संस्कृतियों में मृतकों को बस्तियों के भीतर या पास में स्थित <b>कब्रिस्तानों में दफनाने</b> की प्रथा थी।"
    },
    {
        question: "प्रश्न 38. कृषि के लिए पहली बार भूमि को जोतने के लिए किस उपकरण का उपयोग किया गया होगा?",
        answers: shuffle([
            { text: "लोहे का हल", correct: false },
            { text: "ट्रैक्टर", correct: false },
            { text: "पत्थर या लकड़ी का साधारण हल (Hoe/Digging Stick)", correct: true },
            { text: "कोई उपकरण नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुरुआती कृषि में, जमीन को बीज बोने के लिए तैयार करने हेतु साधारण उपकरणों जैसे <b>खोदने वाली छड़ी (Digging Stick) या पत्थर के फावड़े (Hoe)</b> का उपयोग किया जाता था।"
    },
    {
        question: "प्रश्न 39. नवपाषाणिक स्थल 'सेनूवर' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "बिहार", correct: true },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "मध्य प्रदेश", correct: false },
            { text: "झारखंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सेनूवर बिहार</b> के रोहतास जिले में स्थित एक महत्वपूर्ण नवपाषाण-ताम्रपाषाणिक स्थल है, जहाँ से चावल, जौ, गेहूँ और दालों की खेती के प्रमाण मिले हैं।"
    },
    {
        question: "प्रश्न 40. नवपाषाण काल को 'खाद्य-उत्पादक क्रांति' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि लोगों ने खाना पकाना शुरू किया", correct: false },
            { text: "क्योंकि मानव शिकारी-संग्राहक से खाद्य-उत्पादक बन गया", correct: true },
            { text: "क्योंकि नए प्रकार के खाद्य पदार्थ खोजे गए", correct: false },
            { text: "क्योंकि भोजन का व्यापार शुरू हुआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में मानव ने पहली बार भोजन के लिए प्रकृति पर निर्भर रहने के बजाय स्वयं <b>अनाज उगाना और पशु पालना</b> शुरू किया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जीवन शैली में एक <b>क्रांतिकारी परिवर्तन</b> था।"
    },
    {
        question: "प्रश्न 41. मेहरगढ़ की खुदाई किस पुरातत्ववेत्ता के निर्देशन में हुई थी?",
        answers: shuffle([
            { text: "जीन-फ्रेंकोइस जैरिज और रिचर्ड मीडो", correct: true },
            { text: "सर मॉर्टिमर व्हीलर", correct: false },
            { text: "अलेक्जेंडर कनिंघम", correct: false },
            { text: "जॉन मार्शल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रांसीसी पुरातत्ववेत्ता <b>जीन-फ्रेंकोइस जैरिज और उनकी टीम</b> ने 1974 में मेहरगढ़ में उत्खनन शुरू किया, जिससे भारतीय उपमहाद्वीप में नवपाषाण काल की समझ में क्रांति आ गई।"
    },
    {
        question: "प्रश्न 42. नवपाषाण काल में अतिरिक्त अनाज का भंडारण कहाँ किया जाता था?",
        answers: shuffle([
            { text: "पेड़ों की खोखल में", correct: false },
            { text: "बड़े मिट्टी के बर्तनों और अन्न भंडारों (Granaries) में", correct: true },
            { text: "गुफाओं में", correct: false },
            { text: "इसका कोई प्रमाण नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृषि से प्राप्त <b>अतिरिक्त अनाज</b> को भविष्य के उपयोग के लिए सुरक्षित रखना आवश्यक था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके लिए लोग <b>बड़े आकार के मिट्टी के बर्तन</b> बनाते थे या घरों के भीतर विशेष <b>अन्न भंडार (Granaries)</b> बनाते थे।"
    },
    {
        question: "प्रश्न 43. नवपाषाण काल में सामाजिक संगठन का आधार क्या था?",
        answers: shuffle([
            { text: "रक्त संबंध (Kinship)", correct: true },
            { text: "आर्थिक स्थिति", correct: false },
            { text: "सैन्य शक्ति", correct: false },
            { text: "धार्मिक पद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाणिक समाज मुख्य रूप से <b>रक्त संबंधों (Kinship)</b> पर आधारित था।<br><br><i class='fa-solid fa-angles-right icon'></i> परिवार, कुल और कबीले सामाजिक संगठन की मूल इकाइयाँ थीं।"
    },
    {
        question: "प्रश्न 44. पूर्वोत्तर भारत की नवपाषाणिक संस्कृति पर किस विदेशी क्षेत्र का प्रभाव दिखाई देता है?",
        answers: shuffle([
            { text: "मेसोपोटामिया", correct: false },
            { text: "मिस्र", correct: false },
            { text: "चीन और दक्षिण-पूर्व एशिया", correct: true },
            { text: "मध्य एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वोत्तर भारत (जैसे दाओजली हेडिंग) में मिले कुछ औजारों और मृदभांडों की शैली <b>चीन और दक्षिण-पूर्व एशिया</b> की नवपाषाणिक संस्कृतियों से मिलती-जुलती है, जो इस क्षेत्र के साथ संपर्क का संकेत देती है।"
    },
    {
        question: "प्रश्न 45. किस पशु का उपयोग नवपाषाण काल में भार ढोने के लिए शुरू हुआ?",
        answers: shuffle([
            { text: "घोड़ा", correct: false },
            { text: "ऊँट", correct: false },
            { text: "बैल", correct: true },
            { text: "हाथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मवेशियों को पालतू बनाने के बाद, <b>बैल</b> का उपयोग न केवल मांस और दूध के लिए बल्कि कृषि कार्य (हल खींचने) और <b>भार ढोने</b> के लिए भी किया जाने लगा।"
    },
    {
        question: "प्रश्न 46. नवपाषाण काल में मानव स्वास्थ्य पर कृषि का क्या नकारात्मक प्रभाव पड़ा?",
        answers: shuffle([
            { text: "लोग लंबे और मजबूत हो गए", correct: false },
            { text: "दांतों की समस्याएं और संक्रामक रोग बढ़े", correct: true },
            { text: "कोई नकारात्मक प्रभाव नहीं पड़ा", correct: false },
            { text: "लोगों की आयु बढ़ गई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनाज आधारित आहार से <b>दांतों में कैविटी</b> बढ़ी।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, एक स्थान पर बड़ी संख्या में लोगों और जानवरों के रहने से <b>संक्रामक रोगों</b> के फैलने का खतरा भी बढ़ गया।"
    },
    {
        question: "प्रश्न 47. 'टेराकोटा' (पकी हुई मिट्टी) की छोटी मूर्तियों का निर्माण किस काल में शुरू हुआ?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: true },
            { text: "लौह युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>नवपाषाण काल</b> में, विशेषकर मेहरगढ़ जैसे स्थलों से, <b>पकी हुई मिट्टी (टेराकोटा)</b> से बनी मानव (विशेषकर मातृदेवी) और पशुओं की छोटी-छोटी मूर्तियाँ मिली हैं।"
    },
    {
        question: "प्रश्न 48. नवपाषाण काल के संदर्भ में, 'शवाधान' (Burial) का क्या अर्थ है?",
        answers: shuffle([
            { text: "जन्म का उत्सव", correct: false },
            { text: "विवाह की रस्म", correct: false },
            { text: "मृतक को दफनाने की प्रक्रिया", correct: true },
            { text: "एक प्रकार का त्योहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शवाधान</b> का तात्पर्य <b>मृतक के शरीर का अंतिम संस्कार</b> करने की विधि से है।<br><br><i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में मुख्य विधि दफनाना थी।"
    },
    {
        question: "प्रश्न 49. कौन सा स्थल मध्य गंगा घाटी में नवपाषाणिक संस्कृति का एक प्रमुख केंद्र था?",
        answers: shuffle([
            { text: "बुर्जहोम", correct: false },
            { text: "मेहरगढ़", correct: false },
            { text: "कोल्डिहवा और महगड़ा", correct: true },
            { text: "पिक्लीहल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के बेलन घाटी क्षेत्र में स्थित <b>कोल्डिहवा और महगड़ा</b> मध्य गंगा घाटी में नवपाषाणिक बस्तियों के उत्कृष्ट उदाहरण हैं।"
    },
    {
        question: "प्रश्न 50. नवपाषाण काल की समाप्ति का क्या कारण था?",
        answers: shuffle([
            { text: "एक बड़ी बाढ़", correct: false },
            { text: "जलवायु परिवर्तन", correct: false },
            { text: "धातु प्रौद्योगिकी का विकास", correct: true },
            { text: "एक महामारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे-जैसे <b>तांबे और फिर कांसे जैसी धातुओं</b> को बनाने और उपयोग करने की तकनीक विकसित हुई, पत्थर के औजारों पर निर्भरता कम होती गई, जिससे धीरे-धीरे नवपाषाण काल समाप्त हो गया।"
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