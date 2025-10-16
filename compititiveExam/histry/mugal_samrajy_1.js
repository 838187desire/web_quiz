const questions = [
    {
        topHeading: "मुगल साम्राज्य पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारत में मुगल साम्राज्य का संस्थापक कौन था?",
        answers: shuffle([
            { text: "हुमायूँ", correct: false },
            { text: "अकबर", correct: false },
            { text: "जहीरुद्दीन मुहम्मद बाबर", correct: true },
            { text: "शेरशाह सूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बाबर</b> ने <b>1526 ई.</b> में <b>पानीपत के प्रथम युद्ध</b> में <b>इब्राहिम लोदी</b> को हराकर भारत में <b>मुगल वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 2. बाबर का जन्म किस वर्ष और कहाँ हुआ था?",
        answers: shuffle([
            { text: "1483, फरगना", correct: true },
            { text: "1494, काबुल", correct: false },
            { text: "1480, समरकंद", correct: false },
            { text: "1488, गजनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर का जन्म <b>14 फरवरी 1483</b> को मध्य एशिया की रियासत <b>फरगना</b> (आधुनिक उज्बेकिस्तान में) में हुआ था।"
    },
    {
        question: "प्रश्न 3. बाबर पितृ पक्ष से किसका वंशज था?",
        answers: shuffle([
            { text: "चंगेज खान", correct: false },
            { text: "तैमूर लंग", correct: true },
            { text: "उस्मान प्रथम", correct: false },
            { text: "महमूद गजनवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर अपने पिता की ओर से <b>तैमूर</b> का <b>पाँचवाँ वंशज</b> था।"
    },
    {
        question: "प्रश्न 4. बाबर मातृ पक्ष से किसका वंशज था?",
        answers: shuffle([
            { text: "तैमूर लंग", correct: false },
            { text: "चंगेज खान", correct: true },
            { text: "अलप्तगीन", correct: false },
            { text: "नादिर शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर अपनी माँ <b>कुतलुग निगार खानम</b> की ओर से मंगोल शासक <b>चंगेज खान</b> का <b>चौदहवाँ वंशज</b> था।"
    },
    {
        question: "प्रश्न 5. पानीपत का प्रथम युद्ध कब और किसके बीच हुआ?",
        answers: shuffle([
            { text: "1526, बाबर और राणा सांगा", correct: false },
            { text: "1527, बाबर और इब्राहिम लोदी", correct: false },
            { text: "1526, बाबर और इब्राहिम लोदी", correct: true },
            { text: "1528, बाबर और महमूद लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऐतिहासिक युद्ध <b>21 अप्रैल 1526</b> को <b>बाबर</b> और दिल्ली सल्तनत के अंतिम सुल्तान <b>इब्राहिम लोदी</b> के बीच लड़ा गया, जिसमें <b>बाबर</b> की विजय हुई।"
    },
    {
        question: "प्रश्न 6. बाबर ने पानीपत के प्रथम युद्ध में किस युद्ध नीति का प्रयोग किया था?",
        answers: shuffle([
            { text: "गुरिल्ला युद्ध नीति", correct: false },
            { text: "तुलुगमा युद्ध नीति", correct: true },
            { text: "घेराबंदी नीति", correct: false },
            { text: "नौसैनिक युद्ध नीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तुलुगमा नीति</b> में सेना को विभिन्न टुकड़ियों में बाँटकर दुश्मन को चारों ओर से घेरा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाबर ने यह नीति <b>उज्बेकों</b> से सीखी थी।"
    },
    {
        question: "प्रश्न 7. भारत में पहली बार तोपखाने का प्रभावी ढंग से उपयोग किस युद्ध में किया गया?",
        answers: shuffle([
            { text: "खानवा का युद्ध", correct: false },
            { text: "घाघरा का युद्ध", correct: false },
            { text: "पानीपत का प्रथम युद्ध", correct: true },
            { text: "चंदेरी का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर की जीत का एक मुख्य कारण उसका शक्तिशाली <b>तोपखाना</b> था, जिसका संचालन <b>उस्ताद अली</b> और <b>मुस्तफा</b> नामक दो तुर्की अधिकारियों ने किया।"
    },
    {
        question: "प्रश्न 8. खानवा का युद्ध (1527 ई.) बाबर और किसके बीच लड़ा गया था?",
        answers: shuffle([
            { text: "इब्राहिम लोदी", correct: false },
            { text: "महमूद लोदी", correct: false },
            { text: "मेदिनी राय", correct: false },
            { text: "राणा सांगा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध <b>17 मार्च 1527</b> को आगरा के पास <b>खानवा</b> नामक स्थान पर <b>बाबर</b> और मेवाड़ के राजपूत शासक <b>राणा सांगा</b> के बीच हुआ, जिसमें बाबर विजयी रहा।"
    },
    {
        question: "प्रश्न 9. किस युद्ध में विजय के बाद बाबर ने 'गाजी' की उपाधि धारण की?",
        answers: shuffle([
            { text: "पानीपत का प्रथम युद्ध", correct: false },
            { text: "खानवा का युद्ध", correct: true },
            { text: "चंदेरी का युद्ध", correct: false },
            { text: "घाघरा का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'गाजी'</b> का अर्थ होता है 'काफिरों को मारने वाला' या 'धर्मयोद्धा'।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>राणा सांगा</b> के खिलाफ मिली इस महत्वपूर्ण जीत के बाद बाबर ने यह उपाधि धारण की।"
    },
    {
        question: "प्रश्न 10. बाबर ने किस युद्ध में 'जिहाद' (धर्मयुद्ध) का नारा दिया था?",
        answers: shuffle([
            { text: "पानीपत का युद्ध", correct: false },
            { text: "चंदेरी का युद्ध", correct: false },
            { text: "घाघरा का युद्ध", correct: false },
            { text: "खानवा का युद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजपूतों की विशाल सेना के सामने अपनी सेना का मनोबल बढ़ाने के लिए बाबर ने इस युद्ध को <b>'जिहाद'</b> घोषित किया और <b>शराब के बर्तन तुड़वा</b> दिए थे।"
    },
    {
        question: "प्रश्न 11. चंदेरी का युद्ध (1528 ई.) किसके बीच हुआ था?",
        answers: shuffle([
            { text: "बाबर और राणा सांगा", correct: false },
            { text: "बाबर और मेदिनी राय", correct: true },
            { text: "बाबर और महमूद लोदी", correct: false },
            { text: "बाबर और नुसरत शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध <b>बाबर</b> और मालवा के राजपूत शासक <b>मेदिनी राय</b> के बीच हुआ, जिसमें मेदिनी राय की हार हुई।"
    },
    {
        question: "प्रश्न 12. बाबर ने अपनी आत्मकथा 'तुजुक-ए-बाबरी' किस भाषा में लिखी?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: false },
            { text: "तुर्की (चगताई)", correct: true },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'तुजुक-ए-बाबरी'</b> जिसे <b>'बाबरनामा'</b> भी कहते हैं, बाबर द्वारा अपनी मातृभाषा <b>चगताई तुर्की</b> में लिखी गई थी।"
    },
    {
        question: "प्रश्न 13. 'बाबरनामा' का फारसी में अनुवाद किसने किया?",
        answers: shuffle([
            { text: "अबुल फजल", correct: false },
            { text: "फैजी", correct: false },
            { text: "बदायूंनी", correct: false },
            { text: "अब्दुर्रहीम खान-ए-खाना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर के नवरत्नों में से एक, <b>अब्दुर्रहीम खान-ए-खाना</b> ने <b>'बाबरनामा'</b> का तुर्की से <b>फारसी</b> में अनुवाद किया था।"
    },
    {
        question: "प्रश्न 14. घाघरा का युद्ध (1529 ई.) बाबर ने किसके विरुद्ध लड़ा था?",
        answers: shuffle([
            { text: "राजपूतों के विरुद्ध", correct: false },
            { text: "मराठों के विरुद्ध", correct: false },
            { text: "अफगानों के विरुद्ध", correct: true },
            { text: "पुर्तगालियों के विरुद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध <b>बाबर</b> और बंगाल तथा बिहार के संयुक्त <b>अफगान शासकों</b> (महमूद लोदी के नेतृत्व में) के बीच <b>घाघरा नदी</b> के तट पर लड़ा गया था।"
    },
    {
        question: "प्रश्न 15. मध्यकालीन भारत का पहला युद्ध कौन सा था जो जल और थल दोनों पर लड़ा गया?",
        answers: shuffle([
            { text: "खानवा का युद्ध", correct: false },
            { text: "पानीपत का प्रथम युद्ध", correct: false },
            { text: "चंदेरी का युद्ध", correct: false },
            { text: "घाघरा का युद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस युद्ध में बाबर की सेना ने नदी के एक किनारे <b>थल</b> पर और दूसरे किनारे नावों की मदद से <b>जल</b> में भी युद्ध किया था।"
    },
    {
        question: "प्रश्न 16. 'मुबइयान' नामक एक नई पद्य शैली का विकास किसने किया?",
        answers: shuffle([
            { text: "अमीर खुसरो", correct: false },
            { text: "बाबर", correct: true },
            { text: "हुमायूँ", correct: false },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर एक कुशल सेनापति होने के साथ-साथ एक साहित्यकार भी था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने <b>'मुबइयान'</b> नामक एक <b>तुर्की काव्य शैली</b> का विकास किया।"
    },
    {
        question: "प्रश्न 17. बाबर की मृत्यु कब और कहाँ हुई?",
        answers: shuffle([
            { text: "1530, दिल्ली", correct: false },
            { text: "1530, आगरा", correct: true },
            { text: "1540, काबुल", correct: false },
            { text: "1535, लाहौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>26 दिसंबर 1530</b> को <b>आगरा</b> में बाबर की मृत्यु हो गई।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रारंभ में उसे आगरा के <b>'आरामबाग'</b> में दफनाया गया।"
    },
    {
        question: "प्रश्न 18. बाबर का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "लाहौर", correct: false },
            { text: "काबुल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाद में, उसकी अंतिम इच्छा के अनुसार, उसके अवशेषों को <b>काबुल</b> (अफगानिस्तान) ले जाकर दफनाया गया, जहाँ उसका मकबरा है।"
    },
    {
        question: "प्रश्न 19. बाबर का उत्तराधिकारी कौन था?",
        answers: shuffle([
            { text: "कामरान", correct: false },
            { text: "असकरी", correct: false },
            { text: "हिंदाल", correct: false },
            { text: "नसीरुद्दीन मुहम्मद हुमायूँ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर की मृत्यु के बाद, उसका सबसे बड़ा पुत्र <b>हुमायूँ 1530 ई.</b> में मुगल सिंहासन पर बैठा।"
    },
    {
        question: "प्रश्न 20. हुमायूँ ने अपने भाइयों में साम्राज्य का विभाजन किया। कामरान को कौन सा क्षेत्र मिला?",
        answers: shuffle([
            { text: "मेवात और अलवर", correct: false },
            { text: "संभल", correct: false },
            { text: "काबुल और कंधार", correct: true },
            { text: "केवल दिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ ने अपने भाई <b>कामरान</b> को <b>काबुल और कंधार</b>, <b>असकरी</b> को <b>संभल</b> और <b>हिंदाल</b> को <b>मेवात तथा अलवर</b> का क्षेत्र दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विभाजन बाद में उसकी <b>कमजोरी</b> का कारण बना।"
    },
    {
        question: "प्रश्न 21. हुमायूँ ने 'दीनपनाह' (धर्म का शरण स्थल) नामक एक नए नगर की स्थापना कहाँ की थी?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: true },
            { text: "लाहौर", correct: false },
            { text: "फतेहपुर सीकरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1533 ई.</b> में <b>हुमायूँ</b> ने <b>दिल्ली</b> में यमुना नदी के तट पर <b>'दीनपनाह'</b> नामक एक नए शहर की नींव रखी थी।"
    },
    {
        question: "प्रश्न 22. 'चौसा का युद्ध' (1539 ई.) हुमायूँ और किसके बीच हुआ था?",
        answers: shuffle([
            { text: "बहादुर शाह", correct: false },
            { text: "शेर खान (शेरशाह सूरी)", correct: true },
            { text: "महमूद लोदी", correct: false },
            { text: "राणा सांगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध <b>बक्सर के निकट चौसा</b> नामक स्थान पर हुआ, जिसमें अफगान नेता <b>शेर खान</b> ने <b>हुमायूँ</b> को बुरी तरह पराजित किया।"
    },
    {
        question: "प्रश्न 23. किस युद्ध में पराजय के बाद शेर खान ने 'शेरशाह' की उपाधि धारण की?",
        answers: shuffle([
            { text: "कन्नौज का युद्ध", correct: false },
            { text: "सूरजगढ़ का युद्ध", correct: false },
            { text: "चौसा का युद्ध", correct: true },
            { text: "कालिंजर का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चौसा</b> के युद्ध में शानदार जीत के बाद, <b>शेर खान</b> ने <b>'शेरशाह'</b> की उपाधि धारण की और अपने नाम के सिक्के चलाने तथा खुतबा पढ़वाने का आदेश दिया।"
    },
    {
        question: "प्रश्न 24. 'कन्नौज' या 'बिलग्राम' का युद्ध कब हुआ था?",
        answers: shuffle([
            { text: "1539 ई.", correct: false },
            { text: "1540 ई.", correct: true },
            { text: "1542 ई.", correct: false },
            { text: "1555 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>17 मई 1540</b> को हुए इस युद्ध में <b>शेरशाह</b> ने <b>हुमायूँ</b> को एक बार फिर निर्णायक रूप से हराया, जिसके बाद हुमायूँ को भारत छोड़कर भागना पड़ा।"
    },
    {
        question: "प्रश्न 25. शेरशाह सूरी का वास्तविक नाम क्या था?",
        answers: shuffle([
            { text: "हसन खान", correct: false },
            { text: "बहार खान लोहानी", correct: false },
            { text: "फरीद खान", correct: true },
            { text: "इस्लाम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शेरशाह सूरी</b> का बचपन का नाम <b>फरीद</b> था।"
    },
    {
        question: "प्रश्न 26. फरीद को 'शेर खान' की उपाधि किसने दी थी?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: false },
            { text: "दक्षिण बिहार के सूबेदार बहार खान लोहानी", correct: true },
            { text: "इब्राहिम लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फरीद</b> द्वारा एक ही वार में एक शेर को मार देने से प्रसन्न होकर, <b>बहार खान लोहानी</b> ने उसे <b>'शेर खान'</b> की उपाधि प्रदान की थी।"
    },
    {
        question: "प्रश्न 27. शेरशाह सूरी ने किस वंश की स्थापना की?",
        answers: shuffle([
            { text: "लोदी वंश", correct: false },
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: false },
            { text: "सूर वंश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1540 ई.</b> में <b>हुमायूँ</b> को हराकर <b>शेरशाह</b> ने दिल्ली में द्वितीय अफगान साम्राज्य, यानी <b>सूर वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 28. 'ग्रैंड ट्रंक रोड' (सड़क-ए-आजम) की मरम्मत किसने करवाई और उसे विकसित किया?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "अशोक", correct: false },
            { text: "शेरशाह सूरी", correct: true },
            { text: "जहाँगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि यह मार्ग प्राचीन काल से अस्तित्व में था, लेकिन <b>शेरशाह</b> ने सोनारगाँव (बंगाल) से पेशावर (पाकिस्तान) तक इसकी मरम्मत करवाई, इसके किनारे सराय बनवाए और इसे एक प्रमुख व्यापारिक मार्ग बनाया।"
    },
    {
        question: "प्रश्न 29. शेरशाह सूरी की भू-राजस्व प्रणाली कौन सी थी?",
        answers: shuffle([
            { text: "इक्ता प्रणाली", correct: false },
            { text: "मनसबदारी प्रणाली", correct: false },
            { text: "रैयतवाड़ी प्रणाली", correct: true },
            { text: "स्थायी बंदोबस्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शेरशाह</b> ने सीधे किसानों (रैयत) से संपर्क स्थापित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> भूमि की पैमाइश (माप) के आधार पर लगान निर्धारित किया जाता था, जो सामान्यतः उपज का एक-तिहाई होता था।"
    },
    {
        question: "प्रश्न 30. 'पट्टा' और 'कबूलियत' की व्यवस्था किसने शुरू की?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "अकबर", correct: false },
            { text: "शेरशाह सूरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पट्टा' एक दस्तावेज था जिसमें किसान की भूमि और उसे कितना लगान देना है, इसका उल्लेख होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> 'कबूलियत' किसान द्वारा इसे स्वीकार करने का एक पत्र था।"
    },
    {
        question: "प्रश्न 31. शेरशाह सूरी ने किस प्रकार के सिक्के चलाए?",
        answers: shuffle([
            { text: "केवल सोने के", correct: false },
            { text: "केवल तांबे के", correct: false },
            { text: "सोने और चांदी के", correct: false },
            { text: "चांदी का 'रुपया' और तांबे का 'दाम'", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने मुद्रा प्रणाली में सुधार करते हुए <b>178 ग्रेन</b> का शुद्ध चांदी का सिक्का 'रुपया' और <b>380 ग्रेन</b> का तांबे का 'दाम' चलाया, जो मुगल काल में भी मानक बने रहे।"
    },
    {
        question: "प्रश्न 32. शेरशाह सूरी का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "सासाराम (बिहार)", correct: true },
            { text: "कालिंजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने अपने जीवनकाल में ही सासाराम में एक झील के बीच में एक अष्टकोणीय भव्य मकबरे का निर्माण शुरू करवाया था, जो इंडो-इस्लामिक वास्तुकला का एक सुंदर नमूना है।"
    },
    {
        question: "प्रश्न 33. शेरशाह सूरी की मृत्यु कैसे हुई?",
        answers: shuffle([
            { text: "युद्ध में लड़ते हुए", correct: false },
            { text: "बीमारी से", correct: false },
            { text: "कालिंजर किले की घेराबंदी के दौरान तोप का गोला फटने से", correct: true },
            { text: "उसके बेटे ने हत्या कर दी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1545 ई.</b> में कालिंजर (बुंदेलखंड) के किले पर आक्रमण के दौरान 'उक्का' नामक आग्नेयास्त्र (रॉकेट) के फटने से वह बुरी तरह घायल हो गया और उसकी मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 34. 'हुमायूँनामा' की रचना किसने की?",
        answers: shuffle([
            { text: "हुमायूँ", correct: false },
            { text: "रोशन आरा बेगम", correct: false },
            { text: "जहाँ आरा बेगम", correct: false },
            { text: "गुलबदन बेगम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'हुमायूँनामा'</b> की रचना हुमायूँ की सौतेली बहन <b>गुलबदन बेगम</b> ने <b>अकबर</b> के अनुरोध पर की थी।"
    },
    {
        question: "प्रश्न 35. हुमायूँ ने किस युद्ध में विजय प्राप्त कर दिल्ली पर पुनः अधिकार किया?",
        answers: shuffle([
            { text: "चौसा का युद्ध", correct: false },
            { text: "कन्नौज का युद्ध", correct: false },
            { text: "मच्छीवाड़ा का युद्ध", correct: false },
            { text: "सरहिन्द का युद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1555 ई.</b> में सरहिन्द के युद्ध में हुमायूँ ने सिकंदर शाह सूर को पराजित कर <b>15 वर्षों के निर्वासन</b> के बाद दिल्ली और आगरा पर फिर से अधिकार कर लिया।"
    },
    {
        question: "प्रश्न 36. हुमायूँ की मृत्यु कैसे हुई?",
        answers: shuffle([
            { text: "युद्ध में", correct: false },
            { text: "बीमारी से", correct: false },
            { text: "सीढ़ियों से गिरकर", correct: true },
            { text: "हत्या कर दी गई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1556 ई.</b> में, दिल्ली में अपने 'दीनपनाह' भवन में स्थित पुस्तकालय (शेर मंडल) की सीढ़ियों से गिरने के कारण हुमायूँ की मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 37. \"हुमायूँ जीवन भर लड़खड़ाता रहा और लड़खड़ाते हुए ही उसकी मृत्यु हो गई।\" यह टिप्पणी किस इतिहासकार की है?",
        answers: shuffle([
            { text: "अबुल फजल", correct: false },
            { text: "बदायूंनी", correct: false },
            { text: "लेन-पूल", correct: true },
            { text: "विन्सेंट स्मिथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार <b>स्टेनली लेन-पूल</b> ने हुमायूँ के अस्थिर और संघर्षपूर्ण जीवन पर यह प्रसिद्ध टिप्पणी की है।"
    },
    {
        question: "प्रश्न 38. अकबर का जन्म कहाँ हुआ था?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "अमरकोट", correct: true },
            { text: "काबुल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ के निर्वासन काल के दौरान, <b>15 अक्टूबर 1542</b> को सिंध के <b>अमरकोट</b> के राणा वीरसाल के महल में <b>अकबर</b> का जन्म हुआ था।"
    },
    {
        question: "प्रश्न 39. अकबर का राज्याभिषेक कहाँ हुआ था?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "फतेहपुर सीकरी", correct: false },
            { text: "कलानौर (पंजाब)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ की मृत्यु की खबर मिलने पर, मात्र <b>13 वर्ष</b> की आयु में, <b>बैरम खान</b> ने <b>14 फरवरी 1556</b> को पंजाब के <b>कलानौर</b> नामक स्थान पर ईंटों का सिंहासन बनाकर अकबर का राज्याभिषेक कर दिया।"
    },
    {
        question: "प्रश्न 40. अकबर का संरक्षक कौन था?",
        answers: shuffle([
            { text: "मुनीम खान", correct: false },
            { text: "बैरम खान", correct: true },
            { text: "टोडरमल", correct: false },
            { text: "मान सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बैरम खान</b> एक योग्य सेनापति और हुमायूँ का वफादार था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अकबर के शुरुआती शासनकाल (1556-1560) में <b>संरक्षक</b> के रूप में मुगल साम्राज्य को संभाला।"
    },
    {
        question: "प्रश्न 41. पानीपत का द्वितीय युद्ध (5 नवंबर 1556) किसके बीच हुआ?",
        answers: shuffle([
            { text: "अकबर और राणा प्रताप", correct: false },
            { text: "अकबर और सिकंदर सूर", correct: false },
            { text: "अकबर (बैरम खान) और हेमू", correct: true },
            { text: "अकबर और बहादुर शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध मुगल सेना (जिसका नेतृत्व बैरम खान कर रहा था) और आदिल शाह सूर के हिंदू सेनापति हेमचंद्र विक्रमादित्य (हेमू) के बीच हुआ, जिसमें मुगल सेना विजयी रही।"
    },
    {
        question: "प्रश्न 42. 'विक्रमादित्य' की उपाधि धारण करने वाला अंतिम हिंदू शासक कौन था?",
        answers: shuffle([
            { text: "राणा सांगा", correct: false },
            { text: "राणा प्रताप", correct: false },
            { text: "शिवाजी", correct: false },
            { text: "हेमू", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेमू ने दिल्ली पर अधिकार करने के बाद <b>'विक्रमादित्य'</b> की उपाधि धारण की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> वह यह उपाधि धारण करने वाला भारत का 14वां शासक था।"
    },
    {
        question: "प्रश्न 43. अकबर के शासनकाल के 'पर्दा शासन' या 'पेटिकोट सरकार' (1560-1562) के दौरान मुख्य भूमिका में कौन था?",
        answers: shuffle([
            { text: "बैरम खान", correct: false },
            { text: "महाम अनगा", correct: true },
            { text: "नूरजहाँ", correct: false },
            { text: "मुमताज महल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैरम खान के पतन के बाद, अकबर पर उसकी धाय माँ महाम अनगा और उसके रिश्तेदारों का प्रभाव रहा।<br><br><i class='fa-solid fa-angles-right icon'></i> इस काल को 'पर्दा शासन' कहा जाता है।"
    },
    {
        question: "प्रश्न 44. हल्दीघाटी का प्रसिद्ध युद्ध (1576 ई.) अकबर और किसके बीच हुआ था?",
        answers: shuffle([
            { text: "राणा उदय सिंह", correct: false },
            { text: "राणा सांगा", correct: false },
            { text: "महाराणा प्रताप", correct: true },
            { text: "राजा मान सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऐतिहासिक युद्ध <b>18 जून 1576</b> को मेवाड़ के शासक महाराणा प्रताप और अकबर की मुगल सेना (जिसका नेतृत्व राजा मान सिंह और आसफ खान कर रहे थे) के बीच हुआ।"
    },
    {
        question: "प्रश्न 45. हल्दीघाटी के युद्ध में मुगल सेना का नेतृत्व किसने किया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "बैरम खान", correct: false },
            { text: "टोडरमल", correct: false },
            { text: "राजा मान सिंह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर स्वयं इस युद्ध में उपस्थित नहीं था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी सेना का नेतृत्व आमेर के <b>राजा मान सिंह</b> कर रहे थे।"
    },
    {
        question: "प्रश्न 46. अकबर ने 'दास प्रथा' का अंत कब किया?",
        answers: shuffle([
            { text: "1562 ई.", correct: true },
            { text: "1563 ई.", correct: false },
            { text: "1564 ई.", correct: false },
            { text: "1571 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने मानवीय दृष्टिकोण अपनाते हुए <b>1562 ई.</b> में युद्ध बंदियों को दास बनाने की प्रथा पर रोक लगा दी।"
    },
    {
        question: "प्रश्न 47. अकबर ने 'तीर्थयात्रा कर' कब समाप्त किया?",
        answers: shuffle([
            { text: "1562 ई.", correct: false },
            { text: "1563 ई.", correct: true },
            { text: "1564 ई.", correct: false },
            { text: "1575 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी धार्मिक सहिष्णुता की नीति के तहत, अकबर ने <b>1563 ई.</b> में हिंदुओं के तीर्थ स्थानों पर लगने वाले कर को समाप्त कर दिया।"
    },
    {
        question: "प्रश्न 48. अकबर ने 'जजिया कर' कब समाप्त किया?",
        answers: shuffle([
            { text: "1563 ई.", correct: false },
            { text: "1564 ई.", correct: true },
            { text: "1579 ई.", correct: false },
            { text: "1582 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1564 ई.</b> में अकबर ने गैर-मुसलमानों पर लगने वाले जजिया कर को भी समाप्त कर दिया, जो उसकी धार्मिक उदारता का एक महत्वपूर्ण कदम था।"
    },
    {
        question: "प्रश्न 49. अकबर ने अपनी नई राजधानी 'फतेहपुर सीकरी' का निर्माण किस विजय के उपलक्ष्य में करवाया था?",
        answers: shuffle([
            { text: "मेवाड़ विजय", correct: false },
            { text: "रणथंभौर विजय", correct: false },
            { text: "गुजरात विजय", correct: true },
            { text: "बंगाल विजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1572-73 ई. की <b>गुजरात विजय</b> की स्मृति में, अकबर ने आगरा के पास अपनी नई राजधानी <b>फतेहपुर सीकरी</b> का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 50. 'बुलंद दरवाजा' का निर्माण अकबर ने क्यों करवाया था?",
        answers: shuffle([
            { text: "अपने राज्याभिषेक के लिए", correct: false },
            { text: "गुजरात विजय के उपलक्ष्य में", correct: true },
            { text: "दीन-ए-इलाही की घोषणा के लिए", correct: false },
            { text: "अपने पुत्र सलीम (जहाँगीर) के जन्म पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुलंद दरवाजा फतेहपुर सीकरी का मुख्य प्रवेश द्वार है, जिसे अकबर ने अपनी गुजरात विजय की यादगार के तौर पर बनवाया था।"
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