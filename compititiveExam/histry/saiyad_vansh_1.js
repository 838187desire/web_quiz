const questions = [
    {
        topHeading: "सैयद वंश पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. दिल्ली सल्तनत में तुगलक वंश के तत्काल बाद किस वंश ने शासन किया?",
        answers: shuffle([
            { text: "खिलजी वंश", correct: false },
            { text: "लोदी वंश", correct: false },
            { text: "सैयद वंश", correct: true },
            { text: "गुलाम वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1414 ई. में <b>तुगलक वंश</b> के पतन के बाद <b>खिज्र खान</b> ने दिल्ली में <b>सैयद वंश</b> की स्थापना की, जो दिल्ली सल्तनत का चौथा राजवंश था।"
    },
    {
        question: "प्रश्न 2. सैयद वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "खिज्र खान", correct: true },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान</b>, जो <b>तैमूर लंग</b> का एक सहयोगी था, ने दौलत खान लोदी को पराजित कर 1414 ई. में दिल्ली की सत्ता पर अधिकार किया और <b>सैयद वंश</b> की नींव रखी।"
    },
    {
        question: "प्रश्न 3. सैयद वंश ने दिल्ली सल्तनत पर कब से कब तक शासन किया?",
        answers: shuffle([
            { text: "1398 ई. से 1414 ई. तक", correct: false },
            { text: "1414 ई. से 1451 ई. तक", correct: true },
            { text: "1451 ई. से 1526 ई. तक", correct: false },
            { text: "1320 ई. से 1414 ई. तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद वंश</b> का शासनकाल कुल 37 वर्षों तक चला, जो 1414 ई. में <b>खिज्र खान</b> के सत्ता में आने से शुरू होकर 1451 ई. में <b>आलम शाह</b> के पद त्यागने तक रहा।"
    },
    {
        question: "प्रश्न 4. खिज्र खान स्वयं को किसका वंशज मानता था?",
        answers: shuffle([
            { text: "चंगेज खान", correct: false },
            { text: "पैगंबर मुहम्मद", correct: true },
            { text: "तैमूर लंग", correct: false },
            { text: "गजनी के महमूद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'सैयद'</b> का अर्थ <b>पैगंबर मुहम्मद</b> के वंशज से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान</b> और उसके वंशजों ने इसी आधार पर अपने वंश का नाम <b>सैयद वंश</b> रखा।"
    },
    {
        question: "प्रश्न 5. सैयद शासकों का शासनकाल किन दो प्रमुख शक्तियों के बीच संघर्ष का साक्षी रहा?",
        answers: shuffle([
            { text: "दिल्ली और बंगाल", correct: false },
            { text: "दिल्ली और गुजरात", correct: false },
            { text: "दिल्ली और जौनपुर", correct: true },
            { text: "दिल्ली और मेवाड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद काल</b> में <b>दिल्ली सल्तनत</b> और <b>जौनपुर</b> के <b>शर्की साम्राज्य</b> के बीच उत्तर भारत में प्रभुत्व के लिए लगातार संघर्ष और प्रतिस्पर्धा चलती रही।"
    },
    {
        question: "प्रश्न 6. खिज्र खान किसके प्रतिनिधि के रूप में शासन करता था?",
        answers: shuffle([
            { text: "बगदाद के खलीफा", correct: false },
            { text: "मिस्र के खलीफा", correct: false },
            { text: "तैमूर के पुत्र शाहरुख", correct: true },
            { text: "दौलत खान लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान</b> ने स्वतंत्र शासक के रूप में व्यवहार नहीं किया।<br><br><i class='fa-solid fa-angles-right icon'></i> वह स्वयं को <b>तैमूर लंग</b> और उसके उत्तराधिकारी <b>शाहरुख मिर्जा</b> के प्रतिनिधि के रूप में प्रस्तुत करता था और उन्हें नियमित रूप से कर भेजता था।"
    },
    {
        question: "प्रश्न 7. किस सैयद शासक ने अपने नाम के सिक्के जारी नहीं किए?",
        answers: shuffle([
            { text: "खिज्र खान", correct: true },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी संप्रभुता का दावा न करने के कारण, <b>खिज्र खान</b> ने अपने नाम के सिक्के नहीं चलाए।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके शासनकाल में तुगलक शासकों के पुराने सिक्के ही प्रचलन में रहे।"
    },
    {
        question: "प्रश्न 8. मुबारक शाह की मृत्यु के बाद उत्पन्न अराजकता को किसने समाप्त किया?",
        answers: shuffle([
            { text: "मुहम्मद शाह ने", correct: false },
            { text: "कमाल-उल-मुल्क ने", correct: true },
            { text: "बहलोल लोदी ने", correct: false },
            { text: "आलम शाह ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमीर <b>कमाल-उल-मुल्क</b> ने अन्य वफादार अमीरों के साथ मिलकर हत्यारे वजीर <b>सरवर-उल-मुल्क</b> और उसके सहयोगियों को समाप्त कर दिल्ली में व्यवस्था बहाल की।"
    },
    {
        question: "प्रश्न 9. खिज्र खान के शासनकाल का अधिकांश समय किसमें व्यतीत हुआ?",
        answers: shuffle([
            { text: "साम्राज्य विस्तार में", correct: false },
            { text: "स्थापत्य निर्माण में", correct: false },
            { text: "विद्रोहों को दबाने में", correct: true },
            { text: "साहित्य को संरक्षण देने में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान</b> का शासनकाल बहुत अस्थिर था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपना पूरा समय <b>दोआब, कटेहर</b> और <b>मेवात</b> जैसे क्षेत्रों में हो रहे विद्रोहों और राजस्व वसूली के अभियानों में बिताया।"
    },
    {
        question: "प्रश्न 10. खिज्र खान की मृत्यु किस वर्ष हुई?",
        answers: shuffle([
            { text: "1418 ई.", correct: false },
            { text: "1421 ई.", correct: true },
            { text: "1425 ई.", correct: false },
            { text: "1430 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग सात वर्षों तक शासन करने के बाद, 20 मई <b>1421 ई.</b> को <b>खिज्र खान</b> की मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 11. खिज्र खान का उत्तराधिकारी कौन बना?",
        answers: shuffle([
            { text: "उसका भाई", correct: false },
            { text: "उसका पुत्र मुबारक शाह", correct: true },
            { text: "उसका भतीजा मुहम्मद शाह", correct: false },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान</b> ने अपनी मृत्यु से पहले अपने पुत्र <b>मुबारक शाह</b> को अपना उत्तराधिकारी नामित किया था, जो 1421 ई. में गद्दी पर बैठा।"
    },
    {
        question: "प्रश्न 12. सैयद वंश का कौन सा शासक 'सुल्तान' की उपाधि धारण करने वाला पहला शासक था?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: true },
            { text: "मुहम्मद शाह", correct: false },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने पिता के विपरीत, <b>मुबारक शाह</b> ने तैमूरियों की अधीनता को त्याग दिया और <b>'सुल्तान'</b> तथा <b>'शाह'</b> की उपाधियाँ धारण कर अपनी स्वतंत्रता की घोषणा की।"
    },
    {
        question: "प्रश्न 13. किस सैयद शासक ने अपने नाम के सिक्के जारी किए और खुतबा पढ़वाया?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: true },
            { text: "मुहम्मद शाह", correct: false },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्वतंत्र शासक के रूप में अपनी स्थिति को मजबूत करने के लिए, <b>मुबारक शाह</b> ने अपने नाम के सिक्के चलाए और मस्जिदों में अपने नाम का <b>खुतबा</b> (प्रशंसात्मक उपदेश) पढ़वाया।"
    },
    {
        question: "प्रश्न 14. 'तारीख-ए-मुबारक शाही' नामक प्रसिद्ध ग्रंथ की रचना किसने की?",
        answers: shuffle([
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "अमीर खुसरो", correct: false },
            { text: "याहिया बिन अहमद सरहिन्दी", correct: true },
            { text: "इब्न बतूता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'तारीख-ए-मुबारक शाही'</b> सैयद वंश के इतिहास का सबसे महत्वपूर्ण और एकमात्र समकालीन स्रोत है, जिसकी रचना <b>याहिया बिन अहमद सरहिन्दी</b> ने की थी।"
    },
    {
        question: "प्रश्न 15. 'तारीख-ए-मुबारक शाही' किस शासक को समर्पित है?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: true },
            { text: "मुहम्मद शाह", correct: false },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसा कि नाम से ही स्पष्ट है, लेखक <b>याहिया बिन अहमद सरहिन्दी</b> ने इस पुस्तक को अपने संरक्षक सुल्तान <b>मुबारक शाह</b> को समर्पित किया था।"
    },
    {
        question: "प्रश्न 16. मुबारक शाह ने यमुना नदी के किनारे किस नगर की स्थापना की थी?",
        answers: shuffle([
            { text: "खिज्राबाद", correct: false },
            { text: "फिरोजाबाद", correct: false },
            { text: "मुबारकाबाद", correct: true },
            { text: "शाहजहाँनाबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान <b>मुबारक शाह</b> ने यमुना के तट पर <b>'मुबारकाबाद'</b> नामक एक नए शहर की स्थापना की थी, लेकिन वह इसका निर्माण कार्य पूरा नहीं कर सका।"
    },
    {
        question: "प्रश्न 17. मुबारक शाह का शासनकाल किस प्रमुख चुनौती से ग्रस्त रहा?",
        answers: shuffle([
            { text: "मंगोल आक्रमण", correct: false },
            { text: "आंतरिक विद्रोह और अमीरों के षड्यंत्र", correct: true },
            { text: "अकाल और सूखा", correct: false },
            { text: "धार्मिक कट्टरता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुबारक शाह</b> को भी अपने पिता की तरह <b>खोखरों, मेवातियों</b> और <b>दोआब के जमींदारों</b> के विद्रोहों का लगातार सामना करना पड़ा।"
    },
    {
        question: "प्रश्न 18. खोखर जनजाति के किस नेता ने मुबारक शाह के समय में विद्रोह किया था?",
        answers: shuffle([
            { text: "जसरथ खोखर", correct: true },
            { text: "कमालुद्दीन", correct: false },
            { text: "सारंग खान", correct: false },
            { text: "दिलावर खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब क्षेत्र में <b>जसरथ खोखर</b> एक शक्तिशाली नेता था, जिसने <b>मुबारक शाह</b> के शासनकाल में बार-बार विद्रोह करके सल्तनत के लिए गंभीर चुनौती पेश की।"
    },
    {
        question: "प्रश्न 19. मुबारक शाह की हत्या किसने की?",
        answers: shuffle([
            { text: "जसरथ खोखर ने", correct: false },
            { text: "बहलोल लोदी ने", correct: false },
            { text: "उसके वजीर सरवर-उल-मुल्क ने", correct: true },
            { text: "आलम शाह ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1434 ई. में, जब सुल्तान अपने नए शहर <b>मुबारकाबाद</b> का निरीक्षण कर रहा था, तब उसके ही वजीर <b>सरवर-उल-मुल्क</b> ने षड्यंत्र रचकर उसकी हत्या कर दी।"
    },
    {
        question: "प्रश्न 20. मुबारक शाह का उत्तराधिकारी कौन बना?",
        answers: shuffle([
            { text: "उसका पुत्र", correct: false },
            { text: "उसका भाई", correct: false },
            { text: "उसका दत्तक पुत्र मुहम्मद शाह", correct: true },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुबारक शाह</b> का कोई पुत्र नहीं था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी मृत्यु के बाद, अमीरों ने उसके भाई फरीद खान के पुत्र <b>मुहम्मद शाह</b> को गद्दी पर बैठाया, जिसे <b>मुबारक शाह</b> ने गोद लिया था।"
    },
    {
        question: "प्रश्न 21. मुहम्मद शाह के शासनकाल में सल्तनत की वास्तविक शक्ति किसके हाथों में थी?",
        answers: shuffle([
            { text: "सुल्तान के", correct: false },
            { text: "वजीर सरवर-उल-मुल्क के", correct: true },
            { text: "बहलोल लोदी के", correct: false },
            { text: "जसरथ खोखर के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुरुआती वर्षों में, <b>मुहम्मद शाह</b> केवल नाममात्र का शासक था और सारी शक्ति हत्यारे वजीर <b>सरवर-उल-मुल्क</b> और उसके सहयोगियों के हाथों में केंद्रित थी।"
    },
    {
        question: "प्रश्न 22. किस प्रांतीय शासक ने मुहम्मद शाह के समय दिल्ली पर आक्रमण किया था?",
        answers: shuffle([
            { text: "गुजरात के अहमद शाह", correct: false },
            { text: "जौनपुर के इब्राहिम शाह शर्की", correct: false },
            { text: "मालवा के महमूद खिलजी", correct: true },
            { text: "बंगाल के शम्सुद्दीन इलियास शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1440 ई. में सल्तनत की कमजोरी का फायदा उठाकर <b>मालवा के सुल्तान महमूद खिलजी</b> ने दिल्ली पर आक्रमण कर दिया था।"
    },
    {
        question: "प्रश्न 23. मालवा के महमूद खिलजी के आक्रमण से दिल्ली को बचाने में किस सरदार ने मुहम्मद शाह की मदद की?",
        answers: shuffle([
            { text: "जसरथ खोखर", correct: false },
            { text: "सरवर-उल-मुल्क", correct: false },
            { text: "कमाल-उल-मुल्क", correct: false },
            { text: "बहलोल लोदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सरहिन्द</b> के शक्तिशाली सूबेदार <b>बहलोल लोदी</b> ने अपनी सेना के साथ आकर <b>मुहम्मद शाह</b> की सहायता की, जिसके कारण महमूद खिलजी को वापस लौटना पड़ा।"
    },
    {
        question: "प्रश्न 24. मुहम्मद शाह ने बहलोल लोदी को किस उपाधि से सम्मानित किया?",
        answers: shuffle([
            { text: "खान-ए-खाना", correct: true },
            { text: "खान-ए-जहाँ", correct: false },
            { text: "गाजी", correct: false },
            { text: "अमीर-उल-उमरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसकी सेवाओं से प्रसन्न होकर, सुल्तान <b>मुहम्मद शाह</b> ने <b>बहलोल लोदी</b> को <b>'खान-ए-खाना'</b> (खानों का खान) की उपाधि प्रदान की और उसे अपना पुत्र कहकर पुकारा।"
    },
    {
        question: "प्रश्न 25. सैयद वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "अलाउद्दीन आलम शाह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन आलम शाह</b>, जो <b>मुहम्मद शाह</b> का पुत्र था, 1445 ई. में गद्दी पर बैठा और वह <b>सैयद वंश</b> का चौथा और अंतिम शासक था।"
    },
    {
        question: "प्रश्न 26. सैयद वंश का सबसे अयोग्य और कमजोर शासक किसे माना जाता है?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "अलाउद्दीन आलम शाह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आलम शाह</b> एक अत्यंत कमजोर और विलासी शासक था, जिसे शासन कार्य में कोई रुचि नहीं थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके समय में सल्तनत का क्षेत्र दिल्ली और आसपास के कुछ गाँवों तक ही सिमटकर रह गया था।"
    },
    {
        question: "प्रश्न 27. किस सैयद शासक ने स्वेच्छा से दिल्ली का सिंहासन त्याग दिया?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "अलाउद्दीन आलम शाह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1451 ई. में, अपने वजीर हामिद खान से विवाद के बाद और <b>बहलोल लोदी</b> के बढ़ते प्रभाव को देखते हुए, <b>आलम शाह</b> ने स्वेच्छा से दिल्ली का सिंहासन बहलोल लोदी के लिए छोड़ दिया।"
    },
    {
        question: "प्रश्न 28. दिल्ली का सिंहासन त्यागने के बाद अलाउद्दीन आलम शाह कहाँ जाकर बस गया?",
        answers: shuffle([
            { text: "लाहौर", correct: false },
            { text: "जौनपुर", correct: false },
            { text: "बदायूँ", correct: true },
            { text: "आगरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वह दिल्ली छोड़कर अपनी पसंदीदा जगह <b>बदायूँ</b> चला गया और अपनी मृत्यु (1478 ई.) तक शांतिपूर्वक वहीं रहा।"
    },
    {
        question: "प्रश्न 29. सैयद वंश के शासनकाल में दिल्ली सल्तनत का क्षेत्र कितना विस्तृत था?",
        answers: shuffle([
            { text: "पूरे उत्तर भारत में", correct: false },
            { text: "पंजाब से बंगाल तक", correct: false },
            { text: "केवल दिल्ली और उसके आसपास के कुछ जिलों तक", correct: true },
            { text: "दिल्ली से दक्कन तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद शासकों</b> का नियंत्रण बहुत सीमित क्षेत्र पर था।<br><br><i class='fa-solid fa-angles-right icon'></i> एक कहावत प्रसिद्ध थी कि \"शाह-ए-आलम का राज्य दिल्ली से पालम तक\" है, जो उनकी कमजोर स्थिति को दर्शाता है।"
    },
    {
        question: "प्रश्न 30. सैयद वंश के पतन का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "मंगोल आक्रमण", correct: false },
            { text: "अयोग्य शासक और शक्तिशाली अमीर", correct: true },
            { text: "विदेशी व्यापार में गिरावट", correct: false },
            { text: "धार्मिक विद्रोह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद वंश</b> के शासकों में प्रशासनिक और सैन्य योग्यता का अभाव था, जबकि <b>बहलोल लोदी</b> जैसे प्रांतीय सूबेदार बहुत शक्तिशाली हो गए थे, जिसने अंततः उनके पतन का मार्ग प्रशस्त किया।"
    },
    {
        question: "प्रश्न 31. सैयद वंश के बाद दिल्ली सल्तनत पर किस वंश ने अधिकार किया?",
        answers: shuffle([
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: false },
            { text: "लोदी वंश", correct: true },
            { text: "मुगल वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1451 ई. में <b>बहलोल लोदी</b> ने दिल्ली पर अधिकार कर <b>लोदी वंश</b> की स्थापना की, जो दिल्ली सल्तनत का अंतिम राजवंश था।"
    },
    {
        question: "प्रश्न 32. सैयद शासक किस जातीय मूल के थे?",
        answers: shuffle([
            { text: "तुर्क", correct: false },
            { text: "अफगान", correct: false },
            { text: "मंगोल", correct: false },
            { text: "अरब (पैगंबर के वंशज होने का दावा)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उन्होंने तुर्क या अफगान होने का दावा नहीं किया, बल्कि स्वयं को <b>पैगंबर मुहम्मद</b> का वंशज बताकर <b>अरब मूल</b> का होने का दावा किया।"
    },
    {
        question: "प्रश्न 33. तैमूर लंग ने भारत पर किस वर्ष आक्रमण किया था, जिसने सैयद वंश के उदय का मार्ग प्रशस्त किया?",
        answers: shuffle([
            { text: "1398 ई.", correct: true },
            { text: "1405 ई.", correct: false },
            { text: "1410 ई.", correct: false },
            { text: "1414 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1398 ई.</b> में <b>तैमूर</b> के आक्रमण ने <b>तुगलक वंश</b> को लगभग समाप्त कर दिया और उत्तर भारत में एक राजनीतिक शून्यता पैदा कर दी, जिसका लाभ उठाकर <b>खिज्र खान</b> सत्ता में आया।"
    },
    {
        question: "प्रश्न 34. तैमूर ने भारत से वापस लौटते समय खिज्र खान को कहाँ का सूबेदार नियुक्त किया था?",
        answers: shuffle([
            { text: "दिल्ली और आगरा", correct: false },
            { text: "लाहौर, मुल्तान और दीपालपुर", correct: true },
            { text: "बंगाल और बिहार", correct: false },
            { text: "गुजरात और मालवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान</b> की सेवाओं से प्रसन्न होकर, <b>तैमूर</b> ने उसे इन महत्वपूर्ण पश्चिमी प्रांतों का गवर्नर नियुक्त किया, जिसने दिल्ली पर अधिकार करने के लिए एक आधार प्रदान किया।"
    },
    {
        question: "प्रश्न 35. 'रैयत-ए-आला' का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "महान सुल्तान", correct: false },
            { text: "प्रजा का रक्षक", correct: false },
            { text: "सर्वोच्च मुखिया या ध्वजवाहक", correct: true },
            { text: "ईश्वर का सेवक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक विनम्र उपाधि थी जो यह दर्शाती थी कि <b>खिज्र खान</b> स्वयं को एक संप्रभु शासक के बजाय तैमूरियों का एक अधीनस्थ प्रमुख मानता था।"
    },
    {
        question: "प्रश्न 36. किस सैयद शासक को उसके वजीर द्वारा ही कत्ल कर दिया गया?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: true },
            { text: "मुहम्मद शाह", correct: false },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुबारक शाह</b> को उसके वजीर <b>सरवर-उल-मुल्क</b> ने एक षड्यंत्र के तहत 1434 ई. में मार डाला था।"
    },
    {
        question: "प्रश्न 37. सैयद वंश के किस शासक ने जौनपुर के शर्की शासकों से संघर्ष किया?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: true },
            { text: "मुहम्मद शाह", correct: false },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुबारक शाह</b> को अपने शासनकाल के दौरान <b>जौनपुर के इब्राहिम शाह शर्की</b> की विस्तारवादी महत्वाकांक्षाओं का सामना करना पड़ा।"
    },
    {
        question: "प्रश्न 38. बहलोल लोदी किस सैयद शासक के समय में सरहिन्द (पंजाब) का सूबेदार था?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: true },
            { text: " सभी के समय में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि <b>बहलोल</b> का प्रभाव <b>मुबारक शाह</b> के समय से बढ़ रहा था, लेकिन वह <b>मुहम्मद शाह</b> के शासनकाल के दौरान सरहिन्द का सबसे शक्तिशाली सूबेदार बनकर उभरा।"
    },
    {
        question: "प्रश्न 39. सैयद काल में प्रशासन की सबसे छोटी इकाई क्या थी?",
        answers: shuffle([
            { text: "इक्ता", correct: false },
            { text: "शिक", correct: false },
            { text: "परगना", correct: false },
            { text: "ग्राम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सल्तनत काल की तरह, <b>सैयद काल</b> में भी प्रशासन की सबसे निचली और मौलिक इकाई <b>ग्राम (गाँव)</b> ही थी।"
    },
    {
        question: "प्रश्न 40. 'तारीख-ए-मुबारक शाही' किस भाषा में लिखी गई थी?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: true },
            { text: "संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली सल्तनत की राजभाषा <b>फारसी</b> थी, और <b>याहिया सरहिन्दी</b> ने भी अपनी यह ऐतिहासिक कृति फारसी भाषा में ही लिखी।"
    },
    {
        question: "प्रश्न 41. सैयद वंश के मकबरे किस शैली की वास्तुकला का प्रतिनिधित्व करते हैं?",
        answers: shuffle([
            { text: "मुगल शैली", correct: false },
            { text: "शर्की शैली", correct: false },
            { text: "लोदी शैली का पूर्व रूप (अष्टकोणीय)", correct: true },
            { text: "खिलजी शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद काल</b> में <b>अष्टकोणीय मकबरों</b> का निर्माण शुरू हुआ, जो बाद में <b>लोदी वास्तुकला</b> की एक प्रमुख विशेषता बन गया।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद शाह</b> का मकबरा इसका एक अच्छा उदाहरण है।"
    },
    {
        question: "प्रश्न 42. \"वह एक सैनिक का जीवन जीता था, शासक का नहीं।\" यह कथन किस सैयद शासक के लिए उपयुक्त हो सकता है?",
        answers: shuffle([
            { text: "खिज्र खान", correct: true },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान</b> ने सुल्तान की तरह भव्य दरबार या उपाधियाँ धारण नहीं कीं और अपना पूरा जीवन सैन्य अभियानों और विद्रोहों को दबाने में एक सैनिक की तरह बिताया।"
    },
    {
        question: "प्रश्न 43. सैयद वंश की राजधानी क्या थी?",
        answers: shuffle([
            { text: "लाहौर", correct: false },
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: true },
            { text: "मुबारकाबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि उनका नियंत्रण बहुत कम क्षेत्र पर था, फिर भी <b>सैयद वंश</b> के सभी शासकों ने <b>दिल्ली</b> को ही अपनी राजधानी बनाए रखा।"
    },
    {
        question: "प्रश्न 44. किस सैयद शासक के समय में कहा जाता था कि सल्तनत की सीमा दिल्ली से पालम तक सिमट गई है?",
        answers: shuffle([
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "अलाउद्दीन आलम शाह", correct: true },
            { text: "खिज्र खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन आलम शाह</b> के शासनकाल में सल्तनत इतनी कमजोर और सिकुड़ गई थी कि व्यंग्य में यह कहावत प्रचलित हो गई थी।"
    },
    {
        question: "प्रश्न 45. सैयद शासकों ने किस पूर्ववर्ती राजवंश की प्रशासनिक संरचना को काफी हद तक जारी रखा?",
        answers: shuffle([
            { text: "गुलाम वंश", correct: false },
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: true },
            { text: "किसी का नहीं, अपनी नई संरचना बनाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद शासकों</b> ने कोई बड़ा प्रशासनिक परिवर्तन नहीं किया और काफी हद तक <b>तुगलक काल</b> में स्थापित प्रशासनिक ढाँचे (जैसे इक्ता, शिक, परगना) को ही बनाए रखा।"
    },
    {
        question: "प्रश्न 46. खिज्र खान की मृत्यु के बाद दिल्ली की जनता ने कितने दिनों तक शोक मनाया?",
        answers: shuffle([
            { text: "एक दिन", correct: false },
            { text: "तीन दिन", correct: true },
            { text: "सात दिन", correct: false },
            { text: "चालीस दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फरिश्ता जैसे इतिहासकारों के अनुसार, <b>खिज्र खान</b> एक न्यायप्रिय और लोकप्रिय शासक था, और उसकी मृत्यु पर दिल्ली के लोगों ने काले वस्त्र पहनकर <b>तीन दिनों</b> तक शोक व्यक्त किया।"
    },
    {
        question: "प्रश्न 47. मुबारक शाह ने भटिंडा और दोआब के विद्रोहों को दबाने के लिए किसे भेजा था?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "कमाल-उल-मुल्क", correct: true },
            { text: "जसरथ खोखर", correct: false },
            { text: "अपने वजीर सरवर-उल-मुल्क को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कमाल-उल-मुल्क</b> <b>मुबारक शाह</b> का एक वफादार अमीर था, जिसने सल्तनत के कई आंतरिक विद्रोहों को सफलतापूर्वक दबाया था।"
    },
    {
        question: "प्रश्न 48. सैयद वंश के किस शासक ने हिंदुओं के प्रति सहिष्णुता की नीति अपनाई?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "इसके बारे में स्पष्ट जानकारी का अभाव है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद काल</b> के स्रोत मुख्य रूप से राजनीतिक घटनाओं पर केंद्रित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी धार्मिक नीति, विशेषकर हिंदुओं के प्रति, के बारे में बहुत कम और अस्पष्ट जानकारी मिलती है।"
    },
    {
        question: "प्रश्न 49. सैयद वंश की सबसे बड़ी विफलता क्या थी?",
        answers: shuffle([
            { text: "वे मंगोलों को नहीं रोक सके", correct: false },
            { text: "वे सल्तनत के विघटन को नहीं रोक सके", correct: true },
            { text: "वे कोई सुंदर इमारत नहीं बना सके", correct: false },
            { text: "वे हिंदुओं का विश्वास नहीं जीत सके", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे <b>तुगलक साम्राज्य</b> के पतन के बाद शुरू हुई विघटन की प्रक्रिया को रोकने में पूरी तरह असफल रहे और उनके समय में सल्तनत और भी सिकुड़ गई।"
    },
    {
        question: "प्रश्न 50. सैयद वंश के समय में उत्तर भारत की सबसे शक्तिशाली सल्तनत कौन सी थी?",
        answers: shuffle([
            { text: "दिल्ली सल्तनत", correct: false },
            { text: "जौनपुर सल्तनत (शर्की साम्राज्य)", correct: true },
            { text: "मालवा सल्तनत", correct: false },
            { text: "गुजरात सल्तनत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस समय दिल्ली में <b>सैयद</b> कमजोर हो रहे थे, उस समय <b>जौनपुर के शर्की शासक</b>, विशेषकर <b>इब्राहिम शाह शर्की</b>, उत्तर भारत में एक प्रमुख शक्ति के रूप में उभरे थे।"
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