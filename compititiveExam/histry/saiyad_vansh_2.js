const questions = [
    {
        topHeading: "सैयद वंश पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. अलाउद्दीन आलम शाह का वजीर कौन था, जिससे विवाद के कारण उसने दिल्ली छोड़ी?",
        answers: shuffle([
            { text: "सरवर-उल-मुल्क", correct: false },
            { text: "कमाल-उल-मुल्क", correct: false },
            { text: "हमीद खान", correct: true },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान <b>आलम शाह</b> और उसके वजीर <b>हमीद खान</b> के बीच सत्ता को लेकर संघर्ष बढ़ गया था, जिससे तंग आकर और अपनी जान के डर से <b>आलम शाह</b> दिल्ली छोड़कर बदायूँ चला गया।"
    },
    {
        question: "प्रश्न 2. बहलोल लोदी ने दिल्ली पर अधिकार करने से पहले कितनी बार प्रयास किया था?",
        answers: shuffle([
            { text: "एक बार", correct: false },
            { text: "दो बार", correct: true },
            { text: "तीन बार", correct: false },
            { text: "कभी नहीं, उसे आमंत्रित किया गया था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> ने <b>मुहम्मद शाह</b> के जीवनकाल के अंत में और <b>आलम शाह</b> के समय में, कुल दो बार दिल्ली पर कब्जा करने का असफल प्रयास किया था।"
    },
    {
        question: "प्रश्न 3. सैयद वंश के शासकों की कब्रें मुख्य रूप से कहाँ स्थित हैं?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "लाहौर", correct: false },
            { text: "दिल्ली", correct: true },
            { text: "बदायूँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान, मुबारक शाह</b> और <b>मुहम्मद शाह</b> के मकबरे <b>दिल्ली</b> में ही स्थित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>आलम शाह</b> को बदायूँ में दफनाया गया था।"
    },
    {
        question: "प्रश्न 4. सैयद शासकों की आय का मुख्य स्रोत क्या था?",
        answers: shuffle([
            { text: "विदेशी व्यापार", correct: false },
            { text: "जजिया और जकात", correct: false },
            { text: "भू-राजस्व और लूट", correct: true },
            { text: "उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि उनका साम्राज्य बहुत छोटा था, उनकी आय का मुख्य स्रोत आसपास के क्षेत्रों से वसूला जाने वाला <b>भू-राजस्व</b> और विद्रोही जमींदारों के खिलाफ अभियानों से प्राप्त <b>लूट का माल</b> था।"
    },
    {
        question: "प्रश्न 5. 'शाह' की उपाधि धारण करने का क्या महत्व था?",
        answers: shuffle([
            { text: "यह एक सामान्य उपाधि थी", correct: false },
            { text: "यह सुल्तान से बड़ी उपाधि थी", correct: false },
            { text: "यह एक स्वतंत्र और संप्रभु शासक होने का प्रतीक था", correct: true },
            { text: "यह खलीफा द्वारा दी जाती थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुबारक शाह</b> द्वारा यह उपाधि धारण करना इस बात का संकेत था कि वह अब <b>तैमूरियों का अधीनस्थ नहीं</b>, बल्कि एक <b>स्वतंत्र राजा</b> था।"
    },
    {
        question: "प्रश्न 6. मुबारक शाह की हत्या के षड्यंत्र में कौन-कौन शामिल थे?",
        answers: shuffle([
            { text: "केवल सरवर-उल-मुल्क", correct: false },
            { text: "केवल हिंदू अमीर", correct: false },
            { text: "सरवर-उल-मुल्क और कुछ असंतुष्ट मुस्लिम और हिंदू अमीर", correct: true },
            { text: "केवल बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस षड्यंत्र का नेतृत्व वजीर <b>सरवर-उल-मुल्क</b> ने किया था, लेकिन इसमें <b>सिधारन कन्नू</b> जैसे कुछ हिंदू सरदार भी शामिल थे जो सुल्तान से नाराज थे।"
    },
    {
        question: "प्रश्न 7. सैयद वंश के शासन को अक्सर क्या कहा जाता है?",
        answers: shuffle([
            { text: "स्वर्ण युग", correct: false },
            { text: "अंधकार युग", correct: false },
            { text: "संक्रमण काल", correct: true },
            { text: "विस्तार का युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>तुगलकों</b> के पतन और <b>लोदियों</b> के उदय के बीच का एक <b>संक्रमण काल</b> था, जिसमें केंद्रीय सत्ता कमजोर थी और क्षेत्रीय शक्तियाँ उभर रही थीं।"
    },
    {
        question: "प्रश्न 8. मुहम्मद शाह का मकबरा किस आकार का है?",
        answers: shuffle([
            { text: "वर्गाकार", correct: false },
            { text: "आयताकार", correct: false },
            { text: "गोलाकार", correct: false },
            { text: "अष्टकोणीय (अष्टभुजीय)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मकबरा एक ऊँचे चबूतरे पर बना है और इसका आकार <b>अष्टकोणीय</b> है, जो <b>सैयद</b> और <b>लोदी काल</b> की वास्तुकला की एक प्रमुख विशेषता है।"
    },
    {
        question: "प्रश्न 9. खिज्र खान का वजीर कौन था?",
        answers: shuffle([
            { text: "सरवर-उल-मुल्क", correct: false },
            { text: "मलिक काफूर", correct: false },
            { text: "ताज-उल-मुल्क", correct: true },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ताज-उल-मुल्क</b> <b>खिज्र खान</b> का एक योग्य और वफादार वजीर था, जिसने प्रशासन और सैन्य अभियानों में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 10. किस सैयद शासक को 'न्यायप्रिय' और 'परोपकारी' बताया गया है?",
        answers: shuffle([
            { text: "खिज्र खान", correct: true },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समकालीन और बाद के इतिहासकारों, जैसे <b>फरिश्ता</b>, ने <b>खिज्र खान</b> को एक सक्षम सेनापति होने के साथ-साथ एक दयालु और <b>न्यायप्रिय शासक</b> के रूप में भी चित्रित किया है।"
    },
    {
        question: "प्रश्न 11. सैयद वंश के किस शासक ने अपने अमीरों पर सबसे अधिक नियंत्रण रखने का प्रयास किया?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: true },
            { text: "मुहम्मद शाह", correct: false },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुबारक शाह</b> ने अपने पिता के समय के शक्तिशाली <b>अमीरों को नियंत्रित करने</b> और नए अमीरों को बढ़ावा देने का प्रयास किया, जो अंततः उसकी हत्या का एक कारण बना।"
    },
    {
        question: "प्रश्न 12. अलाउद्दीन आलम शाह के सिंहासन त्यागने के समय दिल्ली का वास्तविक नियंत्रण किसके पास था?",
        answers: shuffle([
            { text: "आलम शाह के पास", correct: false },
            { text: "बहलोल लोदी के पास", correct: false },
            { text: "वजीर हमीद खान के पास", correct: true },
            { text: "जौनपुर के सुल्तान के पास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब <b>आलम शाह</b> बदायूँ में था, तब दिल्ली का शासन वस्तुतः उसके वजीर <b>हमीद खान</b> के हाथों में था, जिसने बाद में <b>बहलोल लोदी</b> को दिल्ली आमंत्रित किया।"
    },
    {
        question: "प्रश्न 13. सैयद वंश के समय की मुद्रा प्रणाली कैसी थी?",
        answers: shuffle([
            { text: "उन्होंने सोने के नए सिक्के चलाए", correct: false },
            { text: "उन्होंने चांदी के नए सिक्के चलाए", correct: false },
            { text: "उन्होंने तुगलक काल के सिक्कों को ही जारी रखा", correct: true },
            { text: "वस्तु विनिमय प्रणाली प्रचलित थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुबारक शाह</b> को छोड़कर, जिसने कुछ सिक्के जारी किए, अधिकांश <b>सैयद शासकों</b> ने कोई महत्वपूर्ण मौद्रिक सुधार नहीं किया और <b>तुगलक कालीन सिक्के</b> ही प्रचलन में रहे।"
    },
    {
        question: "प्रश्न 14. सैयद वंश के शासकों का अपनी सेना पर कैसा नियंत्रण था?",
        answers: shuffle([
            { text: "बहुत मजबूत और केंद्रीकृत", correct: false },
            { text: "कमजोर, वे प्रांतीय सूबेदारों की सेना पर निर्भर थे", correct: true },
            { text: "उनके पास कोई स्थायी सेना नहीं थी", correct: false },
            { text: "सेना सीधे खलीफा द्वारा नियंत्रित थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रीय सेना बहुत छोटी और कमजोर थी।<br><br><i class='fa-solid fa-angles-right icon'></i> सुल्तान को किसी भी बड़े अभियान के लिए <b>बहलोल लोदी</b> जैसे शक्तिशाली सूबेदारों की सैन्य सहायता पर निर्भर रहना पड़ता था।"
    },
    {
        question: "प्रश्न 15. खिज्र खान ने कटेहर (रुहेलखंड) के किस विद्रोही शासक के खिलाफ अभियान चलाया?",
        answers: shuffle([
            { text: "जसरथ खोखर", correct: false },
            { text: "हर सिंह", correct: true },
            { text: "हम्मीर देव", correct: false },
            { text: "राणा कुंभा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कटेहर</b> का स्थानीय शासक <b>हर सिंह</b> अक्सर विद्रोह कर देता था और राजस्व देने से इंकार कर देता था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान</b> ने उसके खिलाफ कई दंडात्मक अभियान चलाए।"
    },
    {
        question: "प्रश्न 16. 'खान-ए-खाना' की उपाधि प्राप्त करने के बाद बहलोल लोदी की महत्वाकांक्षा पर क्या प्रभाव पड़ा?",
        answers: shuffle([
            { text: "वह सुल्तान का वफादार बन गया", correct: false },
            { text: "उसकी महत्वाकांक्षा और बढ़ गई", correct: true },
            { text: "उसने राजनीति से संन्यास ले लिया", correct: false },
            { text: "वह जौनपुर के सुल्तान से जा मिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस सम्मान ने <b>बहलोल लोदी</b> को सल्तनत का सबसे <b>शक्तिशाली अमीर</b> बना दिया और दिल्ली के सिंहासन पर अधिकार करने की उसकी इच्छा को और भी प्रबल कर दिया।"
    },
    {
        question: "प्रश्न 17. सैयद वंश की अवधि को भारतीय इतिहास में क्यों महत्वपूर्ण माना जाता है?",
        answers: shuffle([
            { text: "महान विजयों के लिए", correct: false },
            { text: "स्थापत्य के विकास के लिए", correct: false },
            { text: "तुगलक और लोदी वंशों के बीच एक कड़ी के रूप में", correct: true },
            { text: "आर्थिक समृद्धि के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि यह वंश स्वयं में बहुत शक्तिशाली नहीं था, लेकिन इसका अध्ययन यह समझने के लिए महत्वपूर्ण है कि कैसे <b>तुगलक साम्राज्य</b> का विघटन हुआ और <b>अफगान लोदियों</b> के लिए सत्ता में आने का मार्ग प्रशस्त हुआ।"
    },
    {
        question: "प्रश्न 18. याहिया सरहिन्दी किसके संरक्षण में थे?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: true },
            { text: "मुहम्मद शाह", correct: false },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>याहिया बिन अहमद सरहिन्दी</b> को सुल्तान <b>मुबारक शाह</b> का संरक्षण प्राप्त था और उन्होंने उसी के शासनकाल का वर्णन करने के लिए अपना प्रसिद्ध <b>इतिहास ग्रंथ</b> लिखा।"
    },
    {
        question: "प्रश्न 19. सैयद वंश के शासक किस धर्म की किस शाखा के अनुयायी थे?",
        answers: shuffle([
            { text: "शिया इस्लाम", correct: false },
            { text: "सुन्नी इस्लाम", correct: true },
            { text: "सूफीवाद", correct: false },
            { text: "इसके बारे में निश्चित जानकारी नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>दिल्ली सल्तनत</b> के अन्य सुल्तानों की तरह, <b>सैयद शासक</b> भी <b>सुन्नी इस्लाम</b> के अनुयायी थे।"
    },
    {
        question: "प्रश्न 20. मुबारक शाह की मृत्यु के बाद मुहम्मद शाह को सुल्तान बनाने में किस अमीर ने मुख्य भूमिका निभाई?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "कमाल-उल-मुल्क", correct: false },
            { text: "सरवर-उल-मुल्क", correct: true },
            { text: "जसरथ खोखर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुबारक शाह</b> की हत्या के बाद, वजीर <b>सरवर-उल-मुल्क</b> ने ही <b>मुहम्मद शाह</b> को गद्दी पर बैठाया ताकि वह उसके नाम पर स्वयं शासन कर सके।"
    },
    {
        question: "प्रश्न 21. दिल्ली सल्तनत के किस राजवंश को 'राजपूतों का काल' भी कहा जा सकता है, क्योंकि इस दौरान कई राजपूत राज्य स्वतंत्र हो गए?",
        answers: shuffle([
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: false },
            { text: "सैयद वंश", correct: true },
            { text: "लोदी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद वंश</b> की केंद्रीय कमजोरी के कारण <b>मेवाड़, मारवाड़</b> और <b>ग्वालियर</b> जैसे कई <b>राजपूत राज्यों</b> ने अपनी शक्ति का विस्तार किया और लगभग पूरी तरह से <b>स्वतंत्र</b> हो गए।"
    },
    {
        question: "प्रश्न 22. किस सैयद शासक को 'खान-ए-आलम' की उपाधि दी गई थी?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "अलाउद्दीन आलम शाह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान बनने से पहले, <b>अलाउद्दीन आलम शाह</b> को <b>'खान-ए-आलम'</b> की उपाधि से जाना जाता था।"
    },
    {
        question: "प्रश्न 23. सैयद वंश के समय में 'शिक' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक सैन्य टुकड़ी", correct: false },
            { text: "एक प्रशासनिक इकाई (जिले के समान)", correct: true },
            { text: "एक शाही महल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रांतों (<b>इक्ता</b>) को <b>'शिक'</b> में विभाजित किया जाता था, जो आधुनिक <b>जिलों</b> के समान एक प्रशासनिक प्रभाग था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>शिक</b> का प्रमुख <b>'शिकदार'</b> कहलाता था।"
    },
    {
        question: "प्रश्न 24. किस शासक ने बहलोल लोदी को पंजाब का पूर्ण नियंत्रण सौंप दिया था?",
        answers: shuffle([
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: true },
            { text: "अलाउद्दीन आलम शाह", correct: false },
            { text: "किसी ने नहीं, उसने स्वयं कब्जा किया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद शाह</b>, <b>बहलोल लोदी</b> की शक्ति से इतना भयभीत था कि उसने उसे नियंत्रित करने के बजाय उसे संतुष्ट करने के लिए <b>लाहौर</b> और <b>दीपालपुर</b> सहित <b>पंजाब</b> के बड़े हिस्से पर शासन करने की अनुमति दे दी।"
    },
    {
        question: "प्रश्न 25. अलाउद्दीन आलम शाह ने दिल्ली का सिंहासन किसके पक्ष में त्यागा था?",
        answers: shuffle([
            { text: "अपने पुत्र के", correct: false },
            { text: "अपने वजीर हमीद खान के", correct: false },
            { text: "बहलोल लोदी के", correct: true },
            { text: "जौनपुर के सुल्तान के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने <b>बहलोल लोदी</b> को एक पत्र लिखकर उसे अपना <b>'बड़ा भाई'</b> बताया और दिल्ली का सिंहासन <b>स्वेच्छा से</b> उसके लिए त्याग दिया।"
    },
    {
        question: "प्रश्न 26. सैयद वंश का शासनकाल किस प्रमुख राजनीतिक विशेषता से चिह्नित है?",
        answers: shuffle([
            { text: "मजबूत केंद्रीय सत्ता", correct: false },
            { text: "विकेंद्रीकरण और सामंतवाद का उदय", correct: true },
            { text: "तेजी से साम्राज्य विस्तार", correct: false },
            { text: "शांति और समृद्धि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में <b>सुल्तान की शक्ति घट गई</b> और प्रांतीय गवर्नर तथा स्थानीय सरदार लगभग <b>स्वतंत्र शासकों</b> की तरह व्यवहार करने लगे, जिससे राजनीतिक <b>विकेंद्रीकरण</b> को बढ़ावा मिला।"
    },
    {
        question: "प्रश्न 27. तैमूर के आक्रमण का दिल्ली पर क्या तात्कालिक प्रभाव पड़ा?",
        answers: shuffle([
            { text: "दिल्ली समृद्ध हो गई", correct: false },
            { text: "दिल्ली पूरी तरह से उजड़ गई", correct: true },
            { text: "दिल्ली में नई वास्तुकला का विकास हुआ", correct: false },
            { text: "दिल्ली की आबादी बढ़ गई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तैमूर</b> की सेना ने दिल्ली में भयानक नरसंहार और लूटपाट की, जिससे यह भव्य शहर हफ्तों तक एक <b>वीरानी खंडहर</b> में तब्दील हो गया था।"
    },
    {
        question: "प्रश्न 28. खिज्र खान का मकबरा कहाँ है?",
        answers: shuffle([
            { text: "मुबारकाबाद", correct: false },
            { text: "दिल्ली में", correct: true },
            { text: "सोनीपत में", correct: false },
            { text: "इसके स्थान के बारे में निश्चित जानकारी नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान</b> और उसके बाद <b>मुबारक शाह</b>, दोनों के मकबरे <b>दिल्ली</b> में ही स्थित हैं।"
    },
    {
        question: "प्रश्न 29. मुहम्मद शाह को गद्दी से हटाने के लिए किस अमीर ने बहलोल लोदी को आमंत्रित किया था?",
        answers: shuffle([
            { text: "सरवर-उल-मुल्क", correct: false },
            { text: "हमीद खान", correct: false },
            { text: "कमाल-उल-मुल्क", correct: true },
            { text: "इब्राहिम शर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वजीर <b>सरवर-उल-मुल्क</b> की बढ़ती शक्ति से परेशान होकर, अमीर <b>कमाल-उल-मुल्क</b> ने <b>बहलोल लोदी</b> को दिल्ली आकर वजीर को खत्म करने और सुल्तान की मदद करने के लिए आमंत्रित किया था।"
    },
    {
        question: "प्रश्न 30. सैयद वंश के शासकों का क्रम क्या है?",
        answers: shuffle([
            { text: "खिज्र खान, मुहम्मद शाह, मुबारक शाह, आलम शाह", correct: false },
            { text: "खिज्र खान, मुबारक शाह, मुहम्मद शाह, आलम शाह", correct: true },
            { text: "मुबारक शाह, खिज्र खान, मुहम्मद शाह, आलम शाह", correct: false },
            { text: "खिज्र खान, मुबारक शाह, आलम शाह, मुहम्मद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद वंश</b> के चार शासकों का सही कालानुक्रमिक क्रम है: <b>खिज्र खान</b> (1414-21), <b>मुबारक शाह</b> (1421-34), <b>मुहम्मद शाह</b> (1434-45), और <b>अलाउद्दीन आलम शाह</b> (1445-51)।"
    },
    {
        question: "प्रश्न 31. किस सैयद शासक को 'शाह' की उपाधि मरणोपरांत दी गई?",
        answers: shuffle([
            { text: "खिज्र खान", correct: true },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: false },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि <b>खिज्र खान</b> ने जीवन भर <b>'रैयत-ए-आला'</b> की उपाधि का ही प्रयोग किया, लेकिन उसके पुत्र <b>मुबारक शाह</b> ने उसके सम्मान में सिक्कों पर उसे <b>'शाह'</b> और <b>'सुल्तान'</b> के रूप में उल्लेखित किया।"
    },
    {
        question: "प्रश्न 32. बहलोल लोदी द्वारा दिल्ली पर अधिकार को क्या कहा जाता है?",
        answers: shuffle([
            { text: "अफगान क्रांति", correct: false },
            { text: "लोदी विद्रोह", correct: false },
            { text: "एक शांतिपूर्ण सत्ता हस्तांतरण", correct: true },
            { text: "एक सैन्य तख्तापलट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि अंतिम सैयद शासक <b>आलम शाह</b> ने <b>स्वेच्छा से सिंहासन त्याग</b> दिया था, इसलिए <b>बहलोल लोदी</b> का दिल्ली पर अधिकार काफी हद तक <b>शांतिपूर्ण</b> रहा।"
    },
    {
        question: "प्रश्न 33. सैयद वंश के समय में 'परगना' का प्रमुख अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "आमिल", correct: true },
            { text: "मुकद्दम", correct: false },
            { text: "शिकदार", correct: false },
            { text: "चौधरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>परगना</b> (<b>शिक</b> का एक उप-विभाजन) में राजस्व का मुख्य अधिकारी <b>'आमिल'</b> होता था।"
    },
    {
        question: "प्रश्न 34. सैयद वंश के पतन के समय जौनपुर पर किस वंश का शासन था?",
        answers: shuffle([
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: false },
            { text: "शर्की वंश", correct: true },
            { text: "लोदी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद काल</b> के दौरान, <b>जौनपुर</b> में <b>शर्की सुल्तानों</b> का एक शक्तिशाली और स्वतंत्र राज्य स्थापित था, जो दिल्ली के लिए एक चुनौती बना हुआ था।"
    },
    {
        question: "प्रश्न 35. 'मुबारकाबाद' शहर का निर्माण किस उद्देश्य से किया गया था?",
        answers: shuffle([
            { text: "एक नई राजधानी बनाने के लिए", correct: false },
            { text: "एक व्यापारिक केंद्र के रूप में", correct: false },
            { text: "विद्रोही मेवातियों पर नजर रखने के लिए एक सैन्य छावनी के रूप में", correct: true },
            { text: "एक ग्रीष्मकालीन महल के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुबारक शाह</b> ने इस शहर का निर्माण एक रणनीतिक स्थान पर किया था ताकि वह <b>मेवात क्षेत्र</b> के विद्रोहियों पर आसानी से नियंत्रण रख सके।"
    },
    {
        question: "प्रश्न 36. तैमूर ने खिज्र खान को क्यों अपना प्रतिनिधि नियुक्त किया?",
        answers: shuffle([
            { text: "क्योंकि वह तैमूर का रिश्तेदार था", correct: false },
            { text: "क्योंकि उसने तैमूर को हराया था", correct: false },
            { text: "क्योंकि उसने तैमूर के आक्रमण के दौरान उसकी सहायता की थी", correct: true },
            { text: "क्योंकि वह एक सैयद था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब <b>तैमूर</b> ने भारत पर आक्रमण किया, तो <b>मुल्तान</b> के सूबेदार <b>खिज्र खान</b> ने उसकी अधीनता स्वीकार कर ली और उसे <b>सैन्य सहायता</b> प्रदान की, जिससे <b>तैमूर</b> प्रसन्न हुआ।"
    },
    {
        question: "प्रश्न 37. किस सैयद शासक का मकबरा दिल्ली के प्रसिद्ध लोदी गार्डन में स्थित है?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह", correct: true },
            { text: "आलम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लोदी गार्डन</b> में स्थित सुंदर <b>अष्टकोणीय मकबरा</b> सैयद सुल्तान <b>मुहम्मद शाह</b> का है।"
    },
    {
        question: "प्रश्न 38. सैयद काल में हिंदुओं की स्थिति कैसी थी?",
        answers: shuffle([
            { text: "बहुत अच्छी, उन्हें उच्च पद दिए गए", correct: false },
            { text: "बहुत खराब, उन पर अत्याचार हुए", correct: false },
            { text: "पहले की तरह ही, वे जजिया देते रहे और स्थानीय प्रशासन में शामिल थे", correct: true },
            { text: "सभी हिंदुओं को इस्लाम में परिवर्तित कर दिया गया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद काल</b> में <b>हिंदुओं</b> की स्थिति में कोई बड़ा बदलाव नहीं आया।<br><br><i class='fa-solid fa-angles-right icon'></i> वे <b>जजिया कर</b> चुकाते रहे, और स्थानीय स्तर पर हिंदू जमींदार (<b>खूत, मुकद्दम</b>) राजस्व प्रशासन में महत्वपूर्ण भूमिका निभाते रहे।"
    },
    {
        question: "प्रश्न 39. \"वह सुल्तानों में सबसे विनम्र था।\" यह कथन किसके लिए कहा गया है?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "फिरोज शाह तुगलक", correct: false },
            { text: "खिज्र खान", correct: true },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसका <b>'सुल्तान'</b> की उपाधि धारण न करना, <b>तैमूरियों</b> के प्रति निष्ठा दिखाना और एक <b>सरल जीवन जीना</b> उसे दिल्ली के अन्य सुल्तानों की तुलना में अधिक <b>विनम्र शासक</b> के रूप में प्रस्तुत करता है।"
    },
    {
        question: "प्रश्न 40. अलाउद्दीन आलम शाह ने बदायूँ को क्यों पसंद किया?",
        answers: shuffle([
            { text: "क्योंकि वह दिल्ली से अधिक सुरक्षित था", correct: true },
            { text: "क्योंकि उसकी जलवायु अच्छी थी", correct: false },
            { text: "क्योंकि वह उसकी पुरानी जागीर थी", correct: false },
            { text: "क्योंकि वहाँ उसे आध्यात्मिक शांति मिलती थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली की राजनीतिक साजिशों और अस्थिरता की तुलना में, <b>बदायूँ</b> एक शांत और अपेक्षाकृत <b>सुरक्षित स्थान</b> था, जहाँ वह बिना किसी खतरे के रह सकता था।"
    },
    {
        question: "प्रश्न 41. सैयद वंश के शासन की प्रकृति क्या थी?",
        answers: shuffle([
            { text: "एक मजबूत सैन्य तानाशाही", correct: false },
            { text: "एक ढीला-ढाला संघ, जिसमें सुल्तान प्रमुख था", correct: true },
            { text: "एक धर्मशासित राज्य", correct: false },
            { text: "एक लोकतांत्रिक राज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैयद सुल्तान वास्तव में <b>'प्रथम अमंग इक्वल्स'</b> (बराबर वालों में प्रथम) की तरह थे, जिनकी शक्ति अन्य शक्तिशाली <b>अफगान</b> और <b>तुर्क अमीरों</b> पर निर्भर करती थी।"
    },
    {
        question: "प्रश्न 42. सरवर-उल-मुल्क, जिसने मुबारक शाह की हत्या की, मूल रूप से क्या था?",
        answers: shuffle([
            { text: "एक तुर्क अमीर", correct: false },
            { text: "एक अफगान सरदार", correct: false },
            { text: "एक धर्मांतरित हिंदू", correct: true },
            { text: "एक मंगोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सरवर-उल-मुल्क</b> एक निम्न कुल का <b>धर्मांतरित हिंदू</b> था, जिसे <b>मुबारक शाह</b> ने अपने वजीर के पद तक पहुँचाया था, लेकिन उसने ही सुल्तान को धोखा दिया।"
    },
    {
        question: "प्रश्न 43. अलाउद्दीन आलम शाह का शासनकाल कितने वर्षों का था?",
        answers: shuffle([
            { text: "लगभग 2 वर्ष", correct: false },
            { text: "लगभग 6 वर्ष", correct: true },
            { text: "लगभग 10 वर्ष", correct: false },
            { text: "लगभग 15 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने <b>1445 ई. से 1451 ई.</b> तक, लगभग <b>6 वर्षों</b> तक शासन किया, हालांकि उसका वास्तविक नियंत्रण बहुत कम समय तक रहा।"
    },
    {
        question: "प्रश्न 44. सैयद वंश के पतन के बाद उत्तर भारत में किस शक्ति का उदय हुआ?",
        answers: shuffle([
            { text: "तुर्कों का", correct: false },
            { text: "मंगोलों का", correct: false },
            { text: "राजपूतों का", correct: false },
            { text: "अफगानों का", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सैयद वंश</b> के पतन के साथ ही दिल्ली की सत्ता <b>अफगानों</b> (<b>लोदी वंश</b>) के हाथों में आ गई, जो भारत में <b>पहला अफगान राजवंश</b> था।"
    },
    {
        question: "प्रश्न 45. खिज्र खान ने दिल्ली पर अधिकार करने से पहले किसे हराया था?",
        answers: shuffle([
            { text: "नसीरुद्दीन महमूद तुगलक", correct: false },
            { text: "मल्लू इकबाल", correct: false },
            { text: "दौलत खान लोदी", correct: true },
            { text: "इब्राहिम शाह शर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तैमूर</b> के जाने के बाद, दिल्ली पर <b>तुगलक अमीरों</b> का नियंत्रण था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान</b> ने अंतिम तुगलक सरदार <b>दौलत खान लोदी</b> को हराकर दिल्ली पर कब्जा किया।"
    },
    {
        question: "प्रश्न 46. सैयद काल में वास्तुकला की गति धीमी क्यों रही?",
        answers: shuffle([
            { text: "शासकों की रुचि नहीं थी", correct: false },
            { text: "अच्छे कारीगर नहीं थे", correct: false },
            { text: "राजनीतिक अस्थिरता और धन का अभाव", correct: true },
            { text: "धार्मिक प्रतिबंध थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगातार <b>विद्रोहों</b> और <b>सीमित साम्राज्य</b> के कारण <b>सैयद सुल्तानों</b> के पास इतना धन और स्थिरता नहीं थी कि वे <b>खिलजी</b> या <b>तुगलक</b> शासकों की तरह भव्य इमारतों का निर्माण करवा सकें।"
    },
    {
        question: "प्रश्न 47. किस सैयद शासक के समय में 'वजीर' का पद बहुत शक्तिशाली हो गया था?",
        answers: shuffle([
            { text: "खिज्र खान", correct: false },
            { text: "मुबारक शाह", correct: false },
            { text: "मुहम्मद शाह और आलम शाह", correct: true },
            { text: "किसी के नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन दोनों <b>कमजोर शासकों</b> के समय में, उनके वजीर (जैसे <b>सरवर-उल-मुल्क</b> और <b>हमीद खान</b>) सुल्तान से भी अधिक शक्तिशाली हो गए थे और अपनी मनमानी करते थे।"
    },
    {
        question: "प्रश्न 48. खिज्र खान ने किस तुगलक अमीर के यहाँ काम किया था?",
        answers: shuffle([
            { text: "फिरोज शाह तुगलक", correct: true },
            { text: "ग्यासुद्दीन तुगलक", correct: false },
            { text: "मल्लू इकबाल खान", correct: false },
            { text: "दौलत खान लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिज्र खान</b> के पिता <b>मलिक सुलेमान</b> को <b>फिरोज शाह तुगलक</b> ने <b>मुल्तान</b> का गवर्नर नियुक्त किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> पिता की मृत्यु के बाद <b>खिज्र खान</b> को यह पद मिला।"
    },
    {
        question: "प्रश्न 49. सैयद वंश के इतिहास के लिए 'तारीख-ए-मुबारक शाही' इतना महत्वपूर्ण क्यों है?",
        answers: shuffle([
            { text: "क्योंकि यह एकमात्र स्रोत है", correct: false },
            { text: "क्योंकि यह सबसे विश्वसनीय स्रोत है", correct: false },
            { text: "क्योंकि यह एक प्रत्यक्षदर्शी द्वारा लिखा गया है", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह इस काल का <b>एकमात्र विस्तृत, समकालीन</b> और <b>प्रत्यक्षदर्शी</b> द्वारा लिखा गया वृत्तांत है, जिसके बिना <b>सैयद वंश</b> के बारे में हमारी जानकारी बहुत सीमित होती।"
    },
    {
        question: "प्रश्न 50. बहलोल लोदी ने हमीद खान को कैसे पराजित किया?",
        answers: shuffle([
            { text: "एक बड़े युद्ध में", correct: false },
            { text: "धोखे से उसे बंदी बनाकर", correct: true },
            { text: "उसे जहर देकर", correct: false },
            { text: "उसे एक ऊँचे पद का लालच देकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहलोल लोदी</b> ने एक चाल चली और अपने <b>अफगान सैनिकों</b> को मूर्ख बनकर <b>हमीद खान</b> के दरबार में जाने को कहा, जहाँ उन्होंने अचानक उसे पकड़कर <b>कैद कर लिया</b>।"
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