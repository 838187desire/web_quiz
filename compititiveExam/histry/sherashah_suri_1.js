const questions = [
    {
        topHeading: "शेरशाह सूरी पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. शेरशाह सूरी का बचपन का नाम क्या था?",
        answers: shuffle([
            { text: "हसन खाँ", correct: false },
            { text: "फरीद खाँ", correct: true },
            { text: "इस्लाम शाह", correct: false },
            { text: "बहार खाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह सूरी का मूल नाम <b>फरीद खाँ</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके पिता का नाम <b>हसन खाँ</b> था।"
    },
    {
        question: "प्रश्न 2. फरीद खाँ के पिता, हसन खाँ, कहाँ के जागीरदार थे?",
        answers: shuffle([
            { text: "चुनार", correct: false },
            { text: "सासाराम (बिहार)", correct: true },
            { text: "जौनपुर", correct: false },
            { text: "आगरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हसन खाँ सूर</b>, जौनपुर राज्य के अंतर्गत <b>सासाराम</b> के एक छोटे जागीरदार थे।"
    },
    {
        question: "प्रश्न 3. फरीद खाँ को 'शेर खाँ' की उपाधि किसने दी थी?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: false },
            { text: "बहार खाँ लोहानी", correct: true },
            { text: "दरिया खाँ लोहानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण बिहार के सूबेदार <b>बहार खाँ लोहानी</b> ने फरीद द्वारा एक ही वार में एक शेर को मारने के कारण उसे <b>'शेर खाँ'</b> की उपाधि प्रदान की थी।"
    },
    {
        question: "प्रश्न 4. बहार खाँ लोहानी ने बाद में कौन सी उपाधि धारण की?",
        answers: shuffle([
            { text: "शेरशाह", correct: false },
            { text: "सुल्तान मुहम्मद शाह नूहानी", correct: true },
            { text: "इस्लाम शाह", correct: false },
            { text: "हजरत-ए-आला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्राहिम लोदी की मृत्यु के बाद, बहार खाँ लोहानी ने स्वयं को स्वतंत्र शासक घोषित कर <b>'सुल्तान मुहम्मद शाह नूहानी'</b> की उपाधि धारण की।"
    },
    {
        question: "प्रश्न 5. शेर खाँ ने किस मुगल शासक की सेना में कुछ समय के लिए काम किया था?",
        answers: shuffle([
            { text: "हुमायूँ", correct: false },
            { text: "बाबर", correct: true },
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेर खाँ ने <b>चंदेरी के युद्ध</b> के दौरान <b>बाबर</b> की मुगल सेना में सेवा की थी, जहाँ उसने मुगलों की सैन्य रणनीति और कमजोरियों को करीब से देखा।"
    },
    {
        question: "प्रश्न 6. किस किले पर अधिकार करने के बाद शेर खाँ की शक्ति में अत्यधिक वृद्धि हुई?",
        answers: shuffle([
            { text: "कालिंजर का किला", correct: false },
            { text: "चुनार का किला", correct: true },
            { text: "रोहतासगढ़ का किला", correct: false },
            { text: "ग्वालियर का किला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेर खाँ ने चुनार के किलेदार ताज खाँ की विधवा <b>'लाड मलिका'</b> से विवाह करके <b>चुनार के शक्तिशाली किले</b> और अपार संपत्ति पर अधिकार कर लिया।"
    },
    {
        question: "प्रश्न 7. 'हजरत-ए-आला' की उपाधि शेर खाँ ने कब धारण की?",
        answers: shuffle([
            { text: "चौसा के युद्ध के बाद", correct: false },
            { text: "बंगाल के शासक नुसरत शाह को हराने के बाद", correct: true },
            { text: "चुनार पर अधिकार करने के बाद", correct: false },
            { text: "कन्नौज के युद्ध के बाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1529</b> में बंगाल के शासक <b>नुसरत शाह</b> को पराजित करने के बाद शेर खाँ ने <b>'हजरत-ए-आला'</b> की उपाधि धारण की और अपनी शक्ति का प्रदर्शन किया।"
    },
    {
        question: "प्रश्न 8. चौसा का युद्ध शेरशाह और हुमायूँ के बीच कब लड़ा गया था?",
        answers: shuffle([
            { text: "1538", correct: false },
            { text: "1539", correct: true },
            { text: "1540", correct: false },
            { text: "1542", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चौसा का युद्ध <b>26 जून, 1539</b> को बक्सर के पास हुमायूँ और शेर खाँ के बीच हुआ, जिसमें हुमायूँ की विनाशकारी हार हुई।"
    },
    {
        question: "प्रश्न 9. शेरशाह ने 'सरकार' स्तर पर कानून व्यवस्था बनाए रखने की जिम्मेदारी किसे सौंपी?",
        answers: shuffle([
            { text: "मुंसिफ-ए-मुंसिफान", correct: false },
            { text: "शिकदार-ए-शिकदारान", correct: true },
            { text: "फौजदार", correct: false },
            { text: "कोतवाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शिकदार-ए-शिकदारान</b> 'सरकार' में शांति, सुरक्षा और कानून व्यवस्था के लिए सर्वोच्च अधिकारी था।"
    },
    {
        question: "प्रश्न 10. कन्नौज (बिलग्राम) का युद्ध कब हुआ था?",
        answers: shuffle([
            { text: "17 मई, 1540", correct: true },
            { text: "26 जून, 1539", correct: false },
            { text: "22 जून, 1555", correct: false },
            { text: "15 जनवरी, 1556", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध शेरशाह और हुमायूँ के बीच हुआ एक <b>निर्णायक युद्ध</b> था, जिसमें हुमायूँ की अंतिम रूप से हार हुई और उसे भारत से निर्वासित होना पड़ा।"
    },
    {
        question: "प्रश्न 11. किस युद्ध को जीतने के बाद शेरशाह दिल्ली और आगरा के सिंहासन पर बैठा?",
        answers: shuffle([
            { text: "चौसा का युद्ध", correct: false },
            { text: "कालिंजर का अभियान", correct: false },
            { text: "कन्नौज (बिलग्राम) का युद्ध", correct: true },
            { text: "सरहिंद का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कन्नौज</b> की जीत ने शेरशाह के लिए दिल्ली का रास्ता खोल दिया और उसने <b>सूर साम्राज्य</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 12. शेरशाह सूरी ने किस राजवंश की स्थापना की?",
        answers: shuffle([
            { text: "लोदी वंश", correct: false },
            { text: "खिलजी वंश", correct: false },
            { text: "सूर वंश", correct: true },
            { text: "नूहानी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने हुमायूँ को हराकर भारत में <b>द्वितीय अफगान साम्राज्य</b>, यानी <b>सूर वंश</b>, की नींव रखी।"
    },
    {
        question: "प्रश्न 13. शेरशाह ने उत्तर-पश्चिमी सीमा को सुरक्षित करने के लिए किस विशाल किले का निर्माण करवाया था?",
        answers: shuffle([
            { text: "पुराना किला, दिल्ली", correct: false },
            { text: "रोहतासगढ़ किला (पंजाब)", correct: true },
            { text: "चुनार का किला", correct: false },
            { text: "आगरा का किला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुगलों और गक्खर जनजाति के हमलों से बचने के लिए शेरशाह ने झेलम नदी के किनारे एक विशाल और सुदृढ़ <b>रोहतासगढ़ किले</b> का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 14. शेरशाह ने मालवा पर कब विजय प्राप्त की?",
        answers: shuffle([
            { text: "1540", correct: false },
            { text: "1541", correct: false },
            { text: "1542", correct: true },
            { text: "1543", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कन्नौज विजय के बाद अपनी स्थिति मजबूत करते हुए शेरशाह ने <b>1542</b> में <b>मालवा</b> पर आक्रमण कर उसे अपने अधीन कर लिया।"
    },
    {
        question: "प्रश्न 15. रायसीन के किले पर विजय शेरशाह के चरित्र पर एक 'धब्बा' क्यों मानी जाती है?",
        answers: shuffle([
            { text: "उसने किले को तोपों से उड़ा दिया था", correct: false },
            { text: "उसने धोखे से राजपूत शासक पूरनमल और उसके परिवार की हत्या कर दी थी", correct: true },
            { text: "उसने बहुत अधिक धन लूटा था", correct: false },
            { text: "यह युद्ध बहुत लंबा चला था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने कुरान की शपथ लेकर <b>पूरनमल</b> को सुरक्षित बाहर निकलने का वचन दिया था, लेकिन बाद में उसने वचन तोड़कर <b>राजपूतों का कत्लेआम</b> कर दिया।"
    },
    {
        question: "प्रश्न 16. \"मैं मुट्ठी भर बाजरे के लिए लगभग हिंदुस्तान का साम्राज्य खो चुका था।\" - यह कथन शेरशाह ने किस अभियान के दौरान कहा था?",
        answers: shuffle([
            { text: "मालवा अभियान", correct: false },
            { text: "रायसीन अभियान", correct: false },
            { text: "मारवाड़ अभियान", correct: true },
            { text: "कालिंजर अभियान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1544</b> में मारवाड़ के शासक <b>मालदेव</b> के साथ हुए <b>गिरी-सुमेल के युद्ध</b> में राजपूतों के शौर्य से शेरशाह को भारी कठिनाई का सामना करना पड़ा और वह बाल-बाल जीता।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी संदर्भ में उसने यह बात कही।"
    },
    {
        question: "प्रश्न 17. गिरी-सुमेल का युद्ध शेरशाह और किसके बीच हुआ था?",
        answers: shuffle([
            { text: "राणा सांगा", correct: false },
            { text: "राव मालदेव", correct: true },
            { text: "राजा पूरनमल", correct: false },
            { text: "कीरत सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध <b>मारवाड़ (जोधपुर)</b> के शासक <b>राव मालदेव</b> और शेरशाह सूरी के बीच लड़ा गया था।"
    },
    {
        question: "प्रश्न 18. शेरशाह का अंतिम सैन्य अभियान कौन सा था?",
        answers: shuffle([
            { text: "मारवाड़ अभियान", correct: false },
            { text: "मेवाड़ अभियान", correct: false },
            { text: "कालिंजर अभियान", correct: true },
            { text: "बंगाल अभियान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1545</b> में शेरशाह ने बुंदेलखंड में स्थित <b>कालिंजर</b> के शक्तिशाली किले पर आक्रमण किया, जो उसका <b>अंतिम अभियान</b> साबित हुआ।"
    },
    {
        question: "प्रश्न 19. शेरशाह सूरी की मृत्यु कैसे हुई?",
        answers: shuffle([
            { text: "युद्ध में लड़ते हुए", correct: false },
            { text: "बीमारी के कारण", correct: false },
            { text: "'उक्का' नामक आग्नेयास्त्र के गोले के फटने से", correct: true },
            { text: "एक षड्यंत्र के द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिंजर किले की घेराबंदी के दौरान, किले की दीवार से टकराकर लौटा एक गोला बारूद के ढेर पर गिर गया, जिससे हुए <b>विस्फोट</b> में शेरशाह बुरी तरह घायल हो गया और उसकी मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 20. शेरशाह की मृत्यु किस वर्ष हुई?",
        answers: shuffle([
            { text: "1540", correct: false },
            { text: "1542", correct: false },
            { text: "1545", correct: true },
            { text: "1555", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह की मृत्यु <b>22 मई, 1545</b> को कालिंजर अभियान के दौरान हुई।"
    },
    {
        question: "प्रश्न 21. शेरशाह सूरी का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "काबुल", correct: false },
            { text: "सासाराम (बिहार)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने अपने जीवन काल में ही बिहार के <b>सासाराम</b> में एक कृत्रिम झील के बीच में अपने भव्य मकबरे का निर्माण शुरू करवाया था।"
    },
    {
        question: "प्रश्न 22. शेरशाह का मकबरा किस स्थापत्य शैली का उत्कृष्ट उदाहरण है?",
        answers: shuffle([
            { text: "मुगल शैली", correct: false },
            { text: "तुर्की शैली", correct: false },
            { text: "इंडो-इस्लामिक (अफगान) शैली", correct: true },
            { text: "फारसी शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मकबरा भारतीय और इस्लामी स्थापत्य कला के तत्वों का एक सुंदर मिश्रण प्रस्तुत करता है और इसे <b>पूर्व-मुगल काल</b> की सर्वश्रेष्ठ इमारतों में से एक माना जाता है।"
    },
    {
        question: "प्रश्न 23. दिल्ली में 'पुराना किला' का निर्माण किसने पूरा करवाया और उसका विस्तार किया?",
        answers: shuffle([
            { text: "हुमायूँ", correct: false },
            { text: "शेरशाह सूरी", correct: true },
            { text: "अकबर", correct: false },
            { text: "फिरोज शाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ द्वारा शुरू किए गए 'दीनपनाह' को ध्वस्त कर उसी स्थान पर <b>शेरशाह</b> ने <b>'पुराना किला'</b> का निर्माण करवाया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अंदर <b>'किला-ए-कुहना'</b> मस्जिद भी बनवाई।"
    },
    {
        question: "प्रश्न 24. 'किला-ए-कुहना' मस्जिद का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: false },
            { text: "शेरशाह सूरी", correct: true },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मस्जिद दिल्ली के पुराना किला के अंदर स्थित है और इसका निर्माण <b>शेरशाह</b> ने अपने छोटे शासनकाल के दौरान करवाया था।"
    },
    {
        question: "प्रश्न 25. 'रोहतासगढ़ का किला' (बिहार) पर शेरशाह ने कैसे अधिकार किया था?",
        answers: shuffle([
            { text: "युद्ध जीतकर", correct: false },
            { text: "संधि करके", correct: false },
            { text: "धोखे से", correct: true },
            { text: "खरीदकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब शेरशाह बंगाल अभियान पर था, तो उसने अपने खजाने और हरम की सुरक्षा के लिए रोहतास के हिंदू राजा से किले में शरण माँगी और फिर <b>धोखे से किले पर कब्जा</b> कर लिया।"
    },
    {
        question: "प्रश्न 26. 'सरकार' नामक प्रशासनिक इकाई में कौनसे दो प्रमुख अधिकारी होते थे?",
        answers: shuffle([
            { text: "सूबेदार और दीवान", correct: false },
            { text: "शिकदार-ए-शिकदारान और मुंसिफ-ए-मुंसिफान", correct: true },
            { text: "आमिल और कोतवाल", correct: false },
            { text: "फौजदार और कानूनगो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'शिकदार-ए-शिकदारान'</b> (प्रमुख शिकदार) कानून और व्यवस्था देखता था, जबकि <b>'मुंसिफ-ए-मुंसिफान'</b> (प्रमुख मुंसिफ) राजस्व और न्यायिक मामलों का प्रभारी था।"
    },
    {
        question: "प्रश्न 27. 'परगना' स्तर पर प्रमुख अधिकारी कौन थे?",
        answers: shuffle([
            { text: "शिकदार और मुंसिफ", correct: true },
            { text: "चौधरी और मुकद्दम", correct: false },
            { text: "पटवारी और कानूनगो", correct: false },
            { text: "आमिल और बितिकची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परगना में एक <b>'शिकदार'</b> (सैन्य अधिकारी), एक <b>'मुंसिफ'</b> या <b>'अमीन'</b> (राजस्व अधिकारी), एक <b>'फोतदार'</b> (खजांची) और दो <b>'कारकुन'</b> (क्लर्क) होते थे।"
    },
    {
        question: "प्रश्न 28. शेरशाह का साम्राज्य कितने 'सरकारों' (जिलों) में बँटा हुआ था?",
        answers: shuffle([
            { text: "25", correct: false },
            { text: "36", correct: false },
            { text: "47", correct: true },
            { text: "66", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रशासन की सुविधा के लिए, शेरशाह ने अपने पूरे साम्राज्य को <b>47 सरकारों</b> (या जिलों) में विभाजित किया था।"
    },
    {
        question: "प्रश्न 29. भूमि की पैमाइश के लिए शेरशाह ने किस मापक का प्रयोग किया?",
        answers: shuffle([
            { text: "जरीब", correct: false },
            { text: "गज़-ए-सिकंदरी", correct: true },
            { text: "इलाही गज़", correct: false },
            { text: "देहसाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने भूमि मापने के लिए सिकंदर लोदी द्वारा शुरू किए गए 32 अंगुल वाले <b>'गज़-ए-सिकंदरी'</b> का प्रयोग किया, जिसमें सन की डंडी का उपयोग होता था।"
    },
    {
        question: "प्रश्न 30. शेरशाह के शासन काल में भू-राजस्व की दर सामान्यतः क्या थी?",
        answers: shuffle([
            { text: "उपज का एक-चौथाई (1/4)", correct: false },
            { text: "उपज का एक-तिहाई (1/3)", correct: true },
            { text: "उपज का आधा (1/2)", correct: false },
            { text: "उपज का एक-छठा (1/6)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूमि की उत्पादकता के आधार पर उसे उत्तम, मध्यम और निम्न श्रेणियों में बाँटकर उपज का <b>1/3 हिस्सा</b> लगान के रूप में निर्धारित किया गया था।"
    },
    {
        question: "प्रश्न 31. 'पट्टा' और 'कबूलियत' की प्रथा किसने शुरू की?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "शेरशाह सूरी", correct: true },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'पट्टा'</b> एक सरकारी पत्र होता था जिसमें किसान की जमीन और देय लगान का ब्यौरा होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>'कबूलियत'</b> किसान द्वारा दिया जाने वाला सहमति पत्र था।"
    },
    {
        question: "प्रश्न 32. शेरशाह द्वारा चलाए गए चाँदी के सिक्के का क्या नाम था?",
        answers: shuffle([
            { text: "टका", correct: false },
            { text: "जीतल", correct: false },
            { text: "रुपया", correct: true },
            { text: "अशर्फी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने पुराने घिसे-पिटे सिक्कों को बंद कर 178 ग्रेन वजन का मानक चाँदी का <b>'रुपया'</b> और 380 ग्रेन का ताँबे का <b>'दाम'</b> चलाया।"
    },
    {
        question: "प्रश्न 33. शेरशाह द्वारा चलाए गए ताँबे के सिक्के को क्या कहा जाता था?",
        answers: shuffle([
            { text: "पैसा", correct: false },
            { text: "दाम", correct: true },
            { text: "टंका", correct: false },
            { text: "मोहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह का ताँबे का सिक्का <b>'दाम'</b> कहलाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> चाँदी के 'रुपये' और ताँबे के 'दाम' के बीच <b>1:64</b> का अनुपात था।"
    },
    {
        question: "प्रश्न 34. 'ग्रांड ट्रंक रोड' (सड़क-ए-आजम) की मरम्मत और पुनर्निर्माण किसने करवाया?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "शेरशाह सूरी", correct: true },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि यह मार्ग प्राचीन काल से अस्तित्व में था, लेकिन <b>शेरशाह</b> ने इसे बंगाल के <b>सोनारगाँव</b> से लेकर पश्चिमोत्तर में <b>पेशावर</b> तक पक्का करवाया, सरायों का निर्माण किया और इसे व्यापार के लिए सुगम बनाया।"
    },
    {
        question: "प्रश्न 35. शेरशाह ने यात्रियों और व्यापारियों की सुविधा के लिए सड़कों पर क्या बनवाया?",
        answers: shuffle([
            { text: "महल", correct: false },
            { text: "किले", correct: false },
            { text: "सराय", correct: true },
            { text: "अस्पताल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने लगभग हर <b>दो कोस</b> (लगभग 8 कि.मी.) की दूरी पर एक <b>सराय</b> का निर्माण करवाया, जहाँ हिंदुओं और मुसलमानों के लिए अलग-अलग ठहरने और भोजन की व्यवस्था थी।"
    },
    {
        question: "प्रश्न 36. शेरशाह की सरायों को 'साम्राज्य की धमनियां' किसने कहा है?",
        answers: shuffle([
            { text: "डॉ. के.आर. कानूनगो", correct: true },
            { text: "अब्बास खाँ सरवानी", correct: false },
            { text: "विन्सेंट स्मिथ", correct: false },
            { text: "लेनपूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार <b>कालिकारंजन कानूनगो</b> ने सरायों के महत्व को देखते हुए उन्हें <b>साम्राज्य की धमनियां</b> (arteries of the empire) कहा, क्योंकि वे संचार और व्यापार की जीवन रेखा थीं।"
    },
    {
        question: "प्रश्न 37. 'डाक प्रथा' को व्यवस्थित रूप से संगठित करने का श्रेय किसे दिया जाता है?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "शेरशाह सूरी", correct: true },
            { text: "अकबर", correct: false },
            { text: "औरंगज़ेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शेरशाह</b> ने अपनी सरायों का उपयोग <b>डाक चौकियों</b> के रूप में किया, जहाँ हरकारे (दूत) डाक को एक चौकी से दूसरी चौकी तक तेजी से पहुँचाते थे।"
    },
    {
        question: "प्रश्न 38. शेरशाह की सैन्य व्यवस्था में 'दाग' और 'हुलिया' प्रथा को किसने पुनर्जीवित किया?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "सिकंदर लोदी", correct: false },
            { text: "शेरशाह सूरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भ्रष्टाचार को रोकने के लिए उसने अलाउद्दीन खिलजी द्वारा शुरू की गई <b>'दाग'</b> (घोड़ों को दागना) और <b>'हुलिया'</b> (सैनिकों का विस्तृत विवरण रखना) प्रथा को सख्ती से लागू किया।"
    },
    {
        question: "प्रश्न 39. शेरशाह का उत्तराधिकारी कौन बना?",
        answers: shuffle([
            { text: "आदिल शाह", correct: false },
            { text: "सिकंदर शाह", correct: false },
            { text: "इस्लाम शाह", correct: true },
            { text: "फिरोज शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह की मृत्यु के बाद, अमीरों ने उसके बड़े बेटे आदिल खाँ की जगह उसके छोटे बेटे <b>जलाल खाँ</b> को गद्दी पर बैठाया, जिसने <b>'इस्लाम शाह'</b> की उपाधि धारण की।"
    },
    {
        question: "प्रश्न 40. शेरशाह के शासन काल की जानकारी का प्रमुख स्रोत 'तारीख-ए-शेरशाही' किसने लिखा?",
        answers: shuffle([
            { text: "अब्बास खाँ सरवानी", correct: true },
            { text: "गुलबदन बेगम", correct: false },
            { text: "जौहर आफताबची", correct: false },
            { text: "बदायूँनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'तारीख-ए-शेरशाही'</b> या <b>'तोहफा-ए-अकबरशाही'</b> की रचना <b>अब्बास खाँ सरवानी</b> ने अकबर के आदेश पर की थी।"
    },
    {
        question: "प्रश्न 41. शेरशाह को 'एक महान शासक और प्रशासक' के रूप में क्यों याद किया जाता है?",
        answers: shuffle([
            { text: "उसके विशाल साम्राज्य के लिए", correct: false },
            { text: "उसकी सैन्य विजयों के लिए", correct: false },
            { text: "उसके प्रशासनिक, न्यायिक और राजस्व सुधारों के लिए", correct: true },
            { text: "उसकी धार्मिक कट्टरता के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह का महत्व केवल एक विजेता के रूप में नहीं, बल्कि एक कुशल प्रशासक के रूप में है जिसने ऐसी व्यवस्थाएं स्थापित कीं जिन्हें बाद में <b>अकबर</b> ने भी अपनाया।"
    },
    {
        question: "प्रश्न 42. शेरशाह ने किस शहर का नाम बदलकर 'शेरगढ़' रखा था?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "कन्नौज", correct: true },
            { text: "चुनार", correct: false },
            { text: "सासाराम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कन्नौज</b> के पुराने शहर को नष्ट करने के बाद, शेरशाह ने उसी स्थान पर <b>'शेरगढ़'</b> नामक एक नए शहर की स्थापना की।"
    },
    {
        question: "प्रश्न 43. शेरशाह के साम्राज्य में स्थानीय अपराधों के लिए किसे उत्तरदायी ठहराया जाता था?",
        answers: shuffle([
            { text: "शिकदार", correct: false },
            { text: "मुंसिफ", correct: false },
            { text: "गाँव का मुखिया (मुकद्दम)", correct: true },
            { text: "कोतवाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह ने यह सिद्धांत लागू किया कि यदि किसी गाँव की सीमा में कोई चोरी या हत्या होती है और अपराधी नहीं पकड़ा जाता है, तो उसकी भरपाई के लिए <b>गाँव का मुखिया</b> जिम्मेदार होगा।"
    },
    {
        question: "प्रश्न 44. शेरशाह का बचपन कहाँ बीता था और उसने अपनी प्रारंभिक शिक्षा कहाँ प्राप्त की थी?",
        answers: shuffle([
            { text: "सासाराम", correct: false },
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "जौनपुर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने पिता से अनबन के कारण फरीद सासाराम छोड़कर <b>जौनपुर</b> चला गया, जो उस समय <b>'पूर्व का शिराज'</b> कहलाता था और शिक्षा का एक प्रमुख केंद्र था।"
    },
    {
        question: "प्रश्न 45. 'रुपया' शब्द का प्रयोग सबसे पहले किसने किया था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "शेरशाह सूरी", correct: true },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शेरशाह</b> ने ही अपने चाँदी के मानक सिक्के के लिए <b>'रुपया'</b> शब्द का प्रचलन किया, जो आज भी कई देशों की मुद्रा है।"
    },
    {
        question: "प्रश्न 46. शेरशाह ने किस लोदी शासक के यहाँ पहले नौकरी की थी?",
        answers: shuffle([
            { text: "बहलोल लोदी", correct: false },
            { text: "सिकंदर लोदी", correct: false },
            { text: "इब्राहिम लोदी", correct: true },
            { text: "दौलत खाँ लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने पिता की मृत्यु के बाद, फरीद अपनी जागीर प्राप्त करने के लिए आगरा गया और <b>इब्राहिम लोदी</b> की सेवा में शामिल हो गया।"
    },
    {
        question: "प्रश्न 47. शेरशाह ने बंगाल को नियंत्रित करने के लिए क्या किया?",
        answers: shuffle([
            { text: "पूरे बंगाल को एक सूबेदार के अधीन रखा", correct: false },
            { text: "बंगाल को कई छोटी 'सरकारों' में विभाजित कर दिया", correct: true },
            { text: "बंगाल को सीधे केंद्र से शासित किया", correct: false },
            { text: "बंगाल को एक स्वतंत्र राज्य बना दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंगाल में बार-बार होने वाले विद्रोहों को रोकने के लिए, शेरशाह ने उसे <b>19 सरकारों</b> में बाँट दिया और उन पर नियंत्रण के लिए एक गैर-सैन्य अधिकारी <b>'अमीन-ए-बंगाल'</b> की नियुक्ति की।"
    },
    {
        question: "प्रश्न 48. शेरशाह के तोपखाने का प्रमुख कौन था?",
        answers: shuffle([
            { text: "मीर आतिश", correct: false },
            { text: "उस्ताद अली कुली", correct: false },
            { text: "मुस्तफा रूमी", correct: false },
            { text: "उसकी सेना में व्यवस्थित तोपखाना नहीं था", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेरशाह की सेना में पैदल, घुड़सवार और हाथी सेना प्रमुख थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके पास एक मजबूत और व्यवस्थित <b>तोपखाना नहीं था</b>, जो उसकी एक कमजोरी मानी जाती है।"
    },
    {
        question: "प्रश्न 49. 'कानूनगो' का क्या कार्य था?",
        answers: shuffle([
            { text: "कानून और व्यवस्था बनाए रखना", correct: false },
            { text: "भूमि संबंधी रिकॉर्ड रखना", correct: true },
            { text: "न्याय करना", correct: false },
            { text: "कर वसूलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कानूनगो</b> परगने में <b>भूमि संबंधी रिकॉर्ड</b> रखने वाला एक वंशानुगत अधिकारी होता था, जो राजस्व प्रशासन में महत्वपूर्ण भूमिका निभाता था।"
    },
    {
        question: "प्रश्न 50. शेरशाह के बारे में किसने कहा कि \"वह बुद्धिमान में न तो पहला था और न ही अंतिम, लेकिन वह सर्वश्रेष्ठ था\"?",
        answers: shuffle([
            { text: "अब्बास खाँ सरवानी", correct: false },
            { text: "बदायूँनी", correct: false },
            { text: "डॉ. के.आर. कानूनगो", correct: true },
            { text: "विन्सेंट स्मिथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार <b>कानूनगो</b> ने शेरशाह की प्रशासनिक प्रतिभा की प्रशंसा करते हुए यह टिप्पणी की।"
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