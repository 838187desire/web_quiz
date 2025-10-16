const questions = [
    {
        topHeading: "हुमायूँ पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. हुमायूँ का जन्म कब और कहाँ हुआ था?",
        answers: shuffle([
            { text: "1508, काबुल", correct: true },
            { text: "1506, आगरा", correct: false },
            { text: "1507, दिल्ली", correct: false },
            { text: "1509, फरगना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ का पूरा नाम <b>नसीरुद्दीन मुहम्मद हुमायूँ</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका जन्म <b>6 मार्च 1508</b> को <b>काबुल</b> में हुआ था।"
    },
    {
        question: "प्रश्न 2. हुमायूँ के पिता का क्या नाम था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "बाबर", correct: true },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ मुगल साम्राज्य के संस्थापक <b>बाबर</b> का सबसे बड़ा पुत्र था।"
    },
    {
        question: "प्रश्न 3. कन्नौज के युद्ध में मुगल सेना की हार का एक तात्कालिक कारण क्या था?",
        answers: shuffle([
            { text: "शेरशाह की तोपों का बेहतर होना", correct: false },
            { text: "युद्ध से पहले भारी बारिश होना", correct: true },
            { text: "हुमायूँ का घायल हो जाना", correct: false },
            { text: "मुगल सेना में भगदड़ मचना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युद्ध से ठीक पहले हुई <b>भारी बारिश</b> के कारण मुगल तोपखाना कीचड़ में फँस गया और अप्रभावी हो गया, जिससे <b>शेरशाह की सेना</b> को एक बड़ा फायदा मिला।"
    },
    {
        question: "प्रश्न 4. बाबर ने अपनी मृत्यु से पहले किसे अपना उत्तराधिकारी नियुक्त किया था?",
        answers: shuffle([
            { text: "कामरान मिर्ज़ा", correct: false },
            { text: "हुमायूँ", correct: true },
            { text: "हिंदाल मिर्ज़ा", correct: false },
            { text: "अस्करी मिर्ज़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर अपने सबसे बड़े पुत्र <b>हुमायूँ</b> को बहुत मानता था और उसी को अपना उत्तराधिकारी घोषित किया था।"
    },
    {
        question: "प्रश्न 5. हुमायूँ को संगीत की किस विधा में रुचि थी?",
        answers: shuffle([
            { text: "ध्रुपद", correct: false },
            { text: "खयाल", correct: false },
            { text: "कव्वाली", correct: false },
            { text: "फारसी गजल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ को कविता और संगीत का शौक था और वह <b>फारसी गजलों और शायरी</b> में विशेष रुचि रखता था।"
    },
    {
        question: "प्रश्न 6. अपने पिता के निर्देशानुसार हुमायूँ ने अपने साम्राज्य का बँटवारा अपने भाइयों के साथ किया। उसने कामरान को क्या दिया?",
        answers: shuffle([
            { text: "मेवात और अलवर", correct: false },
            { text: "संभल", correct: false },
            { text: "काबुल और कंधार", correct: true },
            { text: "केवल पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ ने उदारता दिखाते हुए अपने भाई <b>कामरान मिर्ज़ा</b> को <b>काबुल और कंधार</b> का शासन सौंपा।"
    },
    {
        question: "प्रश्न 7. हुमायूँ ने अपने भाई अस्करी मिर्ज़ा को कौन सा क्षेत्र दिया था?",
        answers: shuffle([
            { text: "काबुल", correct: false },
            { text: "संभल", correct: true },
            { text: "मेवात", correct: false },
            { text: "पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ ने <b>अस्करी मिर्ज़ा</b> को <b>संभल</b> की जागीर प्रदान की थी।"
    },
    {
        question: "प्रश्न 8. हिंदाल मिर्ज़ा को हुमायूँ से साम्राज्य के बँटवारे में क्या मिला?",
        answers: shuffle([
            { text: "कंधार", correct: false },
            { text: "गुजरात", correct: false },
            { text: "बंगाल", correct: false },
            { text: "अलवर और मेवात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ ने अपने सबसे छोटे भाई <b>हिंदाल मिर्ज़ा</b> को <b>अलवर और मेवात</b> का क्षेत्र शासन करने के लिए दिया था।"
    },
    {
        question: "प्रश्न 9. हुमायूँ ने अपने प्रशासन को सुचारू बनाने के लिए उसे कितने भागों में बांटा था?",
        answers: shuffle([
            { text: "जल, थल, वायु", correct: false },
            { text: "आग, हवा, पानी और पृथ्वी", correct: true },
            { text: "सैन्य, नागरिक, न्याय", correct: false },
            { text: "केंद्र, प्रांत, जिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ख्वान्दामीर</b> के अनुसार, हुमायूँ ने अपने प्रशासन के विभागों को चार तत्वों के आधार पर बांटा था - <b>आतिश (आग)</b> विभाग तोपखाने से, <b>हवा</b> विभाग शाही घराने से, <b>आब (पानी)</b> विभाग सिंचाई और शरबतखाने से, और <b>खाक (पृथ्वी)</b> विभाग कृषि और निर्माण से संबंधित था।"
    },
    {
        question: "प्रश्न 10. 'दीनपनाह' नामक नए नगर की स्थापना किस मुगल शासक ने की थी?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: true },
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ ने <b>1533</b> में दिल्ली में यमुना नदी के तट पर <b>'दीनपनाह'</b> (धर्म का शरण स्थल) नामक एक नए नगर की नींव रखी।"
    },
    {
        question: "प्रश्न 11. हुमायूँ और शेरशाह के बीच संघर्ष मूलतः किस चीज़ के लिए था?",
        answers: shuffle([
            { text: "धार्मिक वर्चस्व", correct: false },
            { text: "व्यक्तिगत दुश्मनी", correct: false },
            { text: "हिंदुस्तान पर राजनीतिक संप्रभुता", correct: true },
            { text: "व्यापारिक मार्गों पर नियंत्रण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह संघर्ष <b>भारत पर शासन करने के अधिकार</b> को लेकर था, जहाँ अफगान (शेरशाह) मुगलों (हुमायूँ) को बाहरी मानकर उन्हें बाहर निकालना चाहते थे।"
    },
    {
        question: "प्रश्न 12. हुमायूँ ने चुनार के किले पर पहला घेरा कब डाला था?",
        answers: shuffle([
            { text: "1531", correct: false },
            { text: "1532", correct: true },
            { text: "1535", correct: false },
            { text: "1538", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दौराहरिया में जीत के बाद हुमायूँ ने <b>शेर खाँ (शेरशाह)</b> के अधीन <b>चुनार के शक्तिशाली किले</b> पर घेरा डाला।"
    },
    {
        question: "प्रश्न 13. चुनार के पहले घेरे के दौरान शेर खाँ ने हुमायूँ के साथ कैसा समझौता किया?",
        answers: shuffle([
            { text: "पूर्ण आत्मसमर्पण कर दिया", correct: false },
            { text: "किला हुमायूँ को सौंप दिया", correct: false },
            { text: "अपने पुत्र कुतुब खाँ को एक अफगान टुकड़ी के साथ हुमायूँ की सेवा में भेजा", correct: true },
            { text: "हुमायूँ को युद्ध में हरा दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चार महीने के घेरे के बाद शेर खाँ ने हुमायूँ की अधीनता स्वीकार कर ली और अपने पुत्र <b>कुतुब खाँ</b> को मुगल सेवा में भेजकर समझौता कर लिया।"
    },
    {
        question: "प्रश्न 14. गुजरात के किस शासक ने हुमायूँ के शासनकाल में मुगल साम्राज्य के लिए एक बड़ा खतरा पैदा किया?",
        answers: shuffle([
            { text: "मुजफ्फर शाह", correct: false },
            { text: "बहादुर शाह", correct: true },
            { text: "महमूद बेगड़ा", correct: false },
            { text: "अहमद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात का शासक <b>बहादुर शाह</b> एक महत्वाकांक्षी शासक था और उसने अपने साम्राज्य का विस्तार कर <b>मालवा और मेवाड़</b> के कुछ हिस्सों पर अधिकार कर लिया था, जिससे हुमायूँ को खतरा महसूस हुआ।"
    },
    {
        question: "प्रश्न 15. हुमायूँ ने गुजरात के शासक बहादुर शाह पर आक्रमण क्यों किया?",
        answers: shuffle([
            { text: "बहादुर शाह ने चित्तौड़ पर आक्रमण किया", correct: false },
            { text: "बहादुर शाह ने हुमायूँ के शत्रु मुहम्मद जमान मिर्ज़ा को शरण दी", correct: false },
            { text: "बहादुर शाह अपनी शक्ति बढ़ा रहा था", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहादुर शाह की बढ़ती शक्ति, चित्तौड़ पर उसका आक्रमण और हुमायूँ के शत्रुओं को शरण देना, ये सभी कारण <b>हुमायूँ के गुजरात अभियान</b> के लिए जिम्मेदार थे।"
    },
    {
        question: "प्रश्न 16. चित्तौड़ की किस रानी ने बहादुर शाह के आक्रमण के विरुद्ध हुमायूँ से मदद माँगी थी?",
        answers: shuffle([
            { text: "रानी पद्मावती", correct: false },
            { text: "रानी कर्णावती", correct: true },
            { text: "रानी दुर्गावती", correct: false },
            { text: "रानी लक्ष्मीबाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बहादुर शाह ने चित्तौड़ पर आक्रमण किया, तो राणा सांगा की विधवा <b>रानी कर्णावती</b> ने हुमायूँ को <b>राखी</b> भेजकर सहायता की अपील की थी।"
    },
    {
        question: "प्रश्न 17. हुमायूँ ने बहादुर शाह को किस युद्ध में पराजित किया था?",
        answers: shuffle([
            { text: "सारंगपुर का युद्ध", correct: false },
            { text: "मंदसौर का युद्ध", correct: true },
            { text: "खानवा का युद्ध", correct: false },
            { text: "घाघरा का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1535</b> में, हुमायूँ ने <b>मंदसौर</b> के पास बहादुर शाह को निर्णायक रूप से पराजित किया, जिसके बाद बहादुर शाह मांडू और फिर चंपानेर भाग गया।"
    },
    {
        question: "प्रश्न 18. गुजरात विजय के बाद हुमायूँ ने वहाँ का सूबेदार किसे नियुक्त किया?",
        answers: shuffle([
            { text: "हिंदाल मिर्ज़ा", correct: false },
            { text: "कामरान मिर्ज़ा", correct: false },
            { text: "अस्करी मिर्ज़ा", correct: true },
            { text: "तातार खाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात और मालवा पर विजय प्राप्त करने के बाद हुमायूँ ने <b>अस्करी मिर्ज़ा</b> को वहाँ का शासक नियुक्त किया, लेकिन अस्करी की अयोग्यता के कारण मुगलों ने जल्द ही यह क्षेत्र खो दिया।"
    },
    {
        question: "प्रश्न 19. चौसा का प्रसिद्ध युद्ध हुमायूँ और किसके बीच लड़ा गया था?",
        answers: shuffle([
            { text: "बहादुर शाह", correct: false },
            { text: "महमूद लोदी", correct: false },
            { text: "शेर खाँ (शेरशाह)", correct: true },
            { text: "इस्लाम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चौसा का युद्ध</b> <b>26 जून 1539</b> को हुमायूँ और <b>शेर खाँ</b> के बीच हुआ था।"
    },
    {
        question: "प्रश्न 20. गुजरात अभियान से लौटते समय हुमायूँ पर किसने हमला किया था?",
        answers: shuffle([
            { text: "भील और कोली जनजातियों ने", correct: true },
            { text: "राजपूतों ने", correct: false },
            { text: "पुर्तगालियों ने", correct: false },
            { text: "अफगानों ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब हुमायूँ की थकी हुई सेना गुजरात से लौट रही थी, तो स्थानीय <b>भील और कोली लड़ाकों</b> ने उस पर छापामार हमले किए, जिससे उसे काफी नुकसान हुआ।"
    },
    {
        question: "प्रश्न 21. चौसा के युद्ध में हुमायूँ की जान किस भिश्ती (मल्लाह) ने बचाई थी?",
        answers: shuffle([
            { text: "निजाम", correct: true },
            { text: "अली बेग", correct: false },
            { text: "तातार खाँ", correct: false },
            { text: "बैरम खाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युद्ध में हार के बाद जब हुमायूँ अपनी जान बचाने के लिए घोड़े सहित गंगा नदी में कूद गया, तो <b>निजाम</b> नामक एक भिश्ती ने मशक की मदद से उसकी जान बचाई थी।"
    },
    {
        question: "प्रश्न 22. चौसा के युद्ध में विजय के बाद शेर खाँ ने कौन सी उपाधि धारण की?",
        answers: shuffle([
            { text: "सुल्तान-ए-आदिल", correct: false },
            { text: "हजरत-ए-आला", correct: false },
            { text: "शेरशाह", correct: true },
            { text: "जहाँपनाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस शानदार जीत के बाद, शेर खाँ ने <b>'शेरशाह'</b> की उपाधि धारण की और अपने नाम के सिक्के ढलवाए तथा खुतबा पढ़वाया।"
    },
    {
        question: "प्रश्न 23. कन्नौज (बिलग्राम) का युद्ध कब हुआ था?",
        answers: shuffle([
            { text: "17 मई 1540", correct: true },
            { text: "26 जून 1539", correct: false },
            { text: "22 जून 1555", correct: false },
            { text: "15 जनवरी 1556", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध <b>हुमायूँ</b> और <b>शेरशाह सूरी</b> के बीच निर्णायक युद्ध था, जो <b>17 मई 1540</b> को कन्नौज (बिलग्राम) में लड़ा गया।"
    },
    {
        question: "प्रश्न 24. कन्नौज (बिलग्राम) के युद्ध का क्या परिणाम हुआ?",
        answers: shuffle([
            { text: "हुमायूँ विजयी हुआ", correct: false },
            { text: "हुमायूँ की निर्णायक हार हुई और वह भारत से निर्वासित हो गया", correct: true },
            { text: "दोनों के बीच संधि हो गई", correct: false },
            { text: "युद्ध का कोई परिणाम नहीं निकला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस युद्ध में हुमायूँ की सेना बुरी तरह पराजित हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> इस हार के बाद, हिंदुस्तान का सिंहासन <b>शेरशाह</b> के हाथों में चला गया और हुमायूँ को लगभग <b>15 वर्षों</b> के लिए निर्वासित जीवन जीना पड़ा।"
    },
    {
        question: "प्रश्न 25. अपने निर्वासन काल के दौरान हुमायूँ ने किसके यहाँ शरण ली?",
        answers: shuffle([
            { text: "मालदेव", correct: false },
            { text: "ईरान के शाह तहमास्प", correct: false },
            { text: "राणा वीरसाल", correct: false },
            { text: " सभी के यहाँ कुछ समय के लिए", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ पहले सिंध गया, फिर मारवाड़ के शासक <b>मालदेव</b> से सहायता की उम्मीद की, फिर अमरकोट के <b>राणा वीरसाल</b> के यहाँ रहा और अंततः <b>ईरान के शाह</b> के पास शरण ली।"
    },
    {
        question: "प्रश्न 26. हुमायूँ का विवाह हमीदा बानो बेगम से कब और कहाँ हुआ?",
        answers: shuffle([
            { text: "1540, आगरा में", correct: false },
            { text: "1541, सिंध में", correct: true },
            { text: "1545, काबुल में", correct: false },
            { text: "1555, दिल्ली में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने निर्वासन के दौरान <b>1541</b> में, हुमायूँ ने हिंदाल मिर्ज़ा के आध्यात्मिक गुरु मीर बाबा दोस्त उर्फ मीर अली अकबर जामी की पुत्री <b>हमीदा बानो बेगम</b> से निकाह किया।"
    },
    {
        question: "प्रश्न 27. मुगल सम्राट अकबर का जन्म कहाँ हुआ था?",
        answers: shuffle([
            { text: "काबुल", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "अमरकोट", correct: true },
            { text: "आगरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ जब सिंध में <b>अमरकोट</b> के राजपूत शासक <b>राणा वीरसाल</b> के यहाँ शरण लिए हुए था, तभी <b>15 अक्टूबर 1542</b> को हमीदा बानो बेगम ने <b>अकबर</b> को जन्म दिया।"
    },
    {
        question: "प्रश्न 28. किस शासक की मदद से हुमायूँ ने काबुल और कंधार पर पुनः अधिकार किया?",
        answers: shuffle([
            { text: "तुर्की के सुल्तान", correct: false },
            { text: "मिस्र के शासक", correct: false },
            { text: "ईरान के शाह तहमास्प", correct: true },
            { text: "उज्बेक शासक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ईरान के सफवी वंश के शाह तहमास्प</b> ने इस शर्त पर हुमायूँ को सैन्य सहायता दी कि वह शिया धर्म स्वीकार कर ले और कंधार जीतने के बाद ईरान को सौंप दे।"
    },
    {
        question: "प्रश्न 29. हुमायूँ ने काबुल पर कब विजय प्राप्त की?",
        answers: shuffle([
            { text: "1542", correct: false },
            { text: "1545", correct: true },
            { text: "1550", correct: false },
            { text: "1553", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाह तहमास्प की मदद से हुमायूँ ने <b>1545</b> में अपने भाइयों कामरान और अस्करी से <b>कंधार</b> और फिर <b>काबुल</b> छीन लिया।"
    },
    {
        question: "प्रश्न 30. मच्छीवाड़ा का युद्ध कब और किसके बीच हुआ?",
        answers: shuffle([
            { text: "1555, हुमायूँ और सिकंदर सूर", correct: false },
            { text: "1555, हुमायूँ और अफगान सरदार हैबत खाँ", correct: true },
            { text: "1540, हुमायूँ और शेरशाह", correct: false },
            { text: "1539, हुमायूँ और शेरशाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>15 मई 1555</b> को लुधियाना के पास <b>मच्छीवाड़ा</b> नामक स्थान पर हुमायूँ की सेना ने <b>बैरम खाँ</b> के नेतृत्व में अफगान सरदार हैबत खाँ और तातार खाँ को पराजित किया, जिससे पंजाब पर मुगलों का अधिकार हो गया।"
    },
    {
        question: "प्रश्न 31. सरहिंद का युद्ध किसके बीच हुआ था?",
        answers: shuffle([
            { text: "हुमायूँ और शेरशाह", correct: false },
            { text: "अकबर और हेमू", correct: false },
            { text: "हुमायूँ और सिकंदर शाह सूरी", correct: true },
            { text: "बाबर और इब्राहिम लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>22 जून 1555</b> को <b>सरहिंद</b> में हुए इस युद्ध में बैरम खाँ के नेतृत्व में मुगल सेना ने सूर शासक <b>सिकंदर शाह सूरी</b> को निर्णायक रूप से पराजित किया।"
    },
    {
        question: "प्रश्न 32. किस युद्ध में विजय के पश्चात हुमायूँ ने दिल्ली के सिंहासन पर पुनः अधिकार कर लिया?",
        answers: shuffle([
            { text: "चौसा का युद्ध", correct: false },
            { text: "कन्नौज का युद्ध", correct: false },
            { text: "मच्छीवाड़ा का युद्ध", correct: false },
            { text: "सरहिंद का युद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सरहिंद</b> की जीत ने हुमायूँ के लिए दिल्ली का रास्ता खोल दिया और <b>23 जुलाई 1555</b> को वह एक बार फिर दिल्ली के तख्त पर बैठा।"
    },
    {
        question: "प्रश्न 33. 'हुमायूँनामा' की रचना किसने की थी?",
        answers: shuffle([
            { text: "हुमायूँ", correct: false },
            { text: "रोशनआरा बेगम", correct: false },
            { text: "गुलबदन बेगम", correct: true },
            { text: "जहाँआरा बेगम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'हुमायूँनामा'</b> की रचना हुमायूँ की सौतेली बहन <b>गुलबदन बेगम</b> ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ग्रंथ अकबर के अनुरोध पर लिखा गया था।"
    },
    {
        question: "प्रश्न 34. 'हुमायूँनामा' किस भाषा में लिखा गया है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि मुगल दरबार की प्रारंभिक भाषा तुर्की थी, लेकिन <b>'हुमायूँनामा'</b> की रचना <b>फारसी</b> भाषा में की गई थी, जो बाद में मुगल दरबार की मुख्य भाषा बनी।"
    },
    {
        question: "प्रश्न 35. हुमायूँ की मृत्यु कैसे हुई?",
        answers: shuffle([
            { text: "युद्ध में लड़ते हुए", correct: false },
            { text: "बीमारी के कारण", correct: false },
            { text: "दीनपनाह भवन में पुस्तकालय की सीढ़ियों से गिरकर", correct: true },
            { text: "एक षड्यंत्र के द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जनवरी 1556</b> में, हुमायूँ दिल्ली में अपने द्वारा बनवाए गए <b>'दीनपनाह' भवन</b> में स्थित <b>'शेर मंडल'</b> नामक पुस्तकालय की सीढ़ियों से गिर गया और गंभीर रूप से घायल होने के कुछ दिनों बाद उसकी मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 36. किस इतिहासकार ने कहा कि \"हुमायूँ जीवन भर लड़खड़ाता रहा और लड़खड़ाते हुए ही उसकी मृत्यु हो गई\"?",
        answers: shuffle([
            { text: "विन्सेंट स्मिथ", correct: false },
            { text: "लेनपूल", correct: true },
            { text: "अबुल फजल", correct: false },
            { text: "बदायूँनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार <b>स्टेनले लेनपूल</b> ने हुमायूँ के अस्थिर और संघर्षपूर्ण जीवन पर टिप्पणी करते हुए यह प्रसिद्ध कथन कहा था।"
    },
    {
        question: "प्रश्न 37. हुमायूँ का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "काबुल", correct: false },
            { text: "दिल्ली", correct: true },
            { text: "सासाराम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ का मकबरा <b>दिल्ली</b> में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका निर्माण उसकी पत्नी <b>हमीदा बानो बेगम (हाजी बेगम)</b> ने करवाया था।"
    },
    {
        question: "प्रश्न 38. हुमायूँ के मकबरे का वास्तुकार कौन था?",
        answers: shuffle([
            { text: "उस्ताद अहमद लाहौरी", correct: false },
            { text: "मीरक मिर्ज़ा घियाथ", correct: true },
            { text: "उस्ताद ईसा", correct: false },
            { text: "जॉर्ज विटेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ के मकबरे का डिजाइन फारसी वास्तुकार <b>मीरक मिर्ज़ा घियाथ</b> ने तैयार किया था।"
    },
    {
        question: "प्रश्न 39. किस मुगल इमारत को 'ताजमहल का पूर्वगामी' कहा जाता है?",
        answers: shuffle([
            { text: "बीबी का मकबरा", correct: false },
            { text: "हुमायूँ का मकबरा", correct: true },
            { text: "शेरशाह का मकबरा", correct: false },
            { text: "एतमादुद्दौला का मकबरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी <b>चारबाग शैली</b>, दोहरे गुंबद और वास्तुकला की भव्यता के कारण <b>हुमायूँ के मकबरे</b> को ताजमहल का प्रेरणास्रोत या पूर्वगामी माना जाता है।"
    },
    {
        question: "प्रश्न 40. कौन सा मुगल बादशाह ज्योतिष में गहरा विश्वास रखता था और सप्ताह के सातों दिन अलग-अलग रंग के कपड़े पहनता था?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: true },
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हुमायूँ</b> ज्योतिष में अत्यधिक विश्वास करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह प्रत्येक दिन उस दिन के ग्रह के अनुसार विशेष रंग के वस्त्र धारण करता था, जैसे रविवार को पीला और शनिवार को काला।"
    },
    {
        question: "प्रश्न 41. हुमायूँ को भारत से निर्वासित करने में किस अफगान शासक की मुख्य भूमिका थी?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: false },
            { text: "शेरशाह सूरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शेरशाह सूरी</b> ने चौसा और कन्नौज के युद्धों में हुमायूँ को पराजित कर भारत छोड़ने पर मजबूर कर दिया और सूरी वंश की स्थापना की।"
    },
    {
        question: "प्रश्न 42. हुमायूँ की सौतेली बहन का नाम क्या था, जिसने हुमायूँनामा लिखा?",
        answers: shuffle([
            { text: "जेबुन्निसा", correct: false },
            { text: "गुलरुख बेगम", correct: false },
            { text: "गुलबदन बेगम", correct: true },
            { text: "मेहरुन्निसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गुलबदन बेगम</b> बाबर की बेटी और हुमायूँ की सौतेली बहन थी।"
    },
    {
        question: "प्रश्न 43. हुमायूँ के शासनकाल को किन दो अवधियों में विभाजित किया जा सकता है?",
        answers: shuffle([
            { text: "1526-1530 और 1540-1555", correct: false },
            { text: "1530-1540 और 1555-1556", correct: true },
            { text: "1530-1556", correct: false },
            { text: "1526-1540 और 1556-1605", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ ने पहले <b>1530 से 1540</b> तक शासन किया, फिर शेरशाह से हारकर निर्वासित हो गया।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>1555</b> में उसने पुनः सिंहासन प्राप्त किया और <b>1556</b> में अपनी मृत्यु तक शासन किया।"
    },
    {
        question: "प्रश्न 44. दिल्ली में 'पुराना किला' का निर्माण किस शासक ने शुरू करवाया था?",
        answers: shuffle([
            { text: "शेरशाह सूरी", correct: false },
            { text: "हुमायूँ", correct: true },
            { text: "अकबर", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हुमायूँ</b> ने अपने <b>'दीनपनाह'</b> नगर के हिस्से के रूप में <b>'पुराना किला'</b> का निर्माण शुरू करवाया था, जिसे बाद में शेरशाह सूरी ने पूरा किया और इसका विस्तार किया।"
    },
    {
        question: "प्रश्न 45. हुमायूँ की मृत्यु की खबर को अकबर तक पहुँचने तक क्यों छिपाकर रखा गया था?",
        answers: shuffle([
            { text: "ताकि उत्तराधिकार के लिए संघर्ष न हो", correct: true },
            { text: "यह एक शाही परंपरा थी", correct: false },
            { text: "अकबर उस समय बहुत छोटा था", correct: false },
            { text: "शत्रु राज्य आक्रमण न कर दें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ की मृत्यु के समय <b>अकबर पंजाब</b> में सिकंदर सूर से लड़ रहा था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>बैरम खाँ</b> ने अकबर के सुगम राज्याभिषेक को सुनिश्चित करने और विद्रोह को रोकने के लिए हुमायूँ की मृत्यु की खबर को कुछ समय के लिए गुप्त रखा।"
    },
    {
        question: "प्रश्न 46. हुमायूँ की अनुपस्थिति में (1540-1555) दिल्ली पर किस वंश का शासन था?",
        answers: shuffle([
            { text: "लोदी वंश", correct: false },
            { text: "खिलजी वंश", correct: false },
            { text: "सूरी वंश", correct: true },
            { text: "तुगलक वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ को हराकर <b>शेरशाह सूरी</b> ने उत्तर भारत में <b>सूरी साम्राज्य</b> की स्थापना की, जो 1555 तक चला।"
    },
    {
        question: "प्रश्न 47. हुमायूँ का सबसे बड़ा अवगुण जो उसकी असफलता का कारण बना, वह क्या था?",
        answers: shuffle([
            { text: "उसकी क्रूरता", correct: false },
            { text: "उसकी कायरता", correct: false },
            { text: "उसका अफीम का व्यसन और अनिर्णय की स्थिति", correct: true },
            { text: "उसकी धार्मिक कट्टरता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ एक उदार और दयालु व्यक्ति था, लेकिन वह <b>निर्णय लेने में देर करता था</b> और अक्सर अपने शत्रुओं को तैयारी करने का मौका दे देता था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>अफीम के व्यसन</b> ने भी उसकी निर्णय क्षमता को प्रभावित किया।"
    },
    {
        question: "प्रश्न 48. 'शेर मंडल', जहाँ से गिरकर हुमायूँ की मृत्यु हुई, मूल रूप से क्या था?",
        answers: shuffle([
            { text: "एक मस्जिद", correct: false },
            { text: "एक वेधशाला", correct: false },
            { text: "एक पुस्तकालय", correct: false },
            { text: "शेरशाह द्वारा निर्मित एक मंडप", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'शेर मंडल'</b> का निर्माण <b>शेरशाह सूरी</b> ने एक मनोरंजन मंडप के रूप में करवाया था, जिसे हुमायूँ ने अपनी वापसी के बाद एक <b>पुस्तकालय</b> में बदल दिया था।"
    },
    {
        question: "प्रश्न 49. हुमायूँ के तोपखाने का प्रमुख कौन था?",
        answers: shuffle([
            { text: "बैरम खाँ", correct: false },
            { text: "मुनीम खाँ", correct: false },
            { text: "उस्ताद अली कुली", correct: true },
            { text: "मीर आतिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>उस्ताद अली कुली</b> बाबर के समय से ही मुगल तोपखाने के प्रमुख थे और उन्होंने हुमायूँ के अभियानों में भी महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 50. चौसा के युद्ध से पहले शेर खाँ और हुमायूँ के बीच बातचीत करने के लिए किसे भेजा गया था?",
        answers: shuffle([
            { text: "मीर अब्दुल अजीज", correct: false },
            { text: "शेख खलील", correct: true },
            { text: "बैरम खाँ", correct: false },
            { text: "मुल्ला मुहम्मद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ ने सूफी संत <b>शेख खलील</b> को शेर खाँ के पास संधि वार्ता के लिए भेजा था, लेकिन वार्ता असफल रही।"
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