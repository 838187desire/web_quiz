const questions = [
    {
        topHeading: "भारत पर अरबों का आक्रमण पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. राजा दाहिर की हत्या के बाद, ब्राह्मणवाद किले की रक्षा का नेतृत्व किसने किया था?",
        answers: shuffle([
            { text: "राजा दाहिर के पुत्र जयसिंह ने", correct: true },
            { text: "राजा दाहिर की पत्नी रानीबाई ने", correct: false },
            { text: "राजा दाहिर की दूसरी पत्नी रानी लाडी ने", correct: false },
            { text: "एक स्थानीय सरदार ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रावर में दाहिर की मृत्यु के बाद, उनके पुत्र <b>जयसिंह</b> ने <b>ब्राह्मणवाद</b> के किले में प्रतिरोध को संगठित किया था।"
    },
    {
        question: "प्रश्न 2. अरब आक्रमण के समय सिंध का समाज मुख्य रूप से किन दो वर्गों में विभाजित था?",
        answers: shuffle([
            { text: "शासक और किसान", correct: false },
            { text: "ब्राह्मण और शूद्र", correct: true },
            { text: "सैनिक और व्यापारी", correct: false },
            { text: "शहरी और ग्रामीण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंध का समाज मुख्य रूप से शासक <b>ब्राह्मण वर्ग</b> और बहुसंख्यक <b>शूद्र (जाट और मेड)</b> आबादी में विभाजित था, जिनके बीच सामाजिक तनाव मौजूद था।"
    },
    {
        question: "प्रश्न 3. किस भारतीय चिकित्सा ग्रंथ का अरबी में अनुवाद किया गया था?",
        answers: shuffle([
            { text: "a) सुश्रुत संहिता", correct: false },
            { text: "b) चरक संहिता", correct: false },
            { text: "दोनों (a) और (b)", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय <b>चिकित्सा</b> के प्रसिद्ध ग्रंथ '<b>चरक संहिता</b>' और '<b>सुश्रुत संहिता</b>' दोनों का अरबी भाषा में अनुवाद किया गया, जिससे अरबों ने भारतीय चिकित्सा पद्धति का ज्ञान प्राप्त किया।"
    },
    {
        question: "प्रश्न 4. अरबों के सिंध पर शासन का अंत किसके आक्रमणों के कारण हुआ?",
        answers: shuffle([
            { text: "मुहम्मद गोरी", correct: false },
            { text: "तैमूर लंग", correct: false },
            { text: "चंगेज खान", correct: false },
            { text: "महमूद गजनवी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>11वीं सदी</b> की शुरुआत में, <b>महमूद गजनवी</b> ने सिंध और मुल्तान पर आक्रमण कर वहाँ के अरब शासकों को समाप्त कर दिया और उसे अपने <b>साम्राज्य</b> में मिला लिया।"
    },
    {
        question: "प्रश्न 5. सिंध के जाटों और मेडों ने अरब आक्रमणकारियों का साथ क्यों दिया?",
        answers: shuffle([
            { text: "वे इस्लाम अपनाना चाहते थे", correct: false },
            { text: "उन्हें धन का लालच दिया गया था", correct: false },
            { text: "वे राजा दाहिर के दमनकारी शासन से असंतुष्ट थे", correct: true },
            { text: "उन्हें अरबों ने जबरदस्ती अपनी सेना में शामिल किया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा दाहिर के शासनकाल में <b>जाटों और मेडों</b> पर कई <b>सामाजिक और आर्थिक प्रतिबंध</b> लगाए गए थे, जिस कारण उन्होंने अरबों को मुक्तिदाता के रूप में देखा और उनका साथ दिया।"
    },
    {
        question: "प्रश्न 6. बगदाद के 'बैत-उल-हिकमत' (ज्ञान का घर) में किस भारतीय ज्ञान को प्रमुखता से अनुवादित किया गया?",
        answers: shuffle([
            { text: "गणित और खगोल विज्ञान", correct: false },
            { text: "चिकित्सा और दर्शन", correct: false },
            { text: "साहित्य और तर्कशास्त्र", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब्बासी खलीफाओं द्वारा स्थापित '<b>बैत-उल-हिकमत</b>' में भारतीय ज्ञान की विभिन्न शाखाओं, विशेषकर <b>गणित, खगोल और चिकित्सा</b> के ग्रंथों का बड़े पैमाने पर संस्कृत से अरबी में अनुवाद किया गया।"
    },
    {
        question: "प्रश्न 7. मुहम्मद बिन कासिम की सेना में सीरियाई और इराकी सैनिकों के अलावा और कौन शामिल थे?",
        answers: shuffle([
            { text: "तुर्की सैनिक", correct: false },
            { text: "मंगोल सैनिक", correct: false },
            { text: "स्थानीय भारतीय जिन्होंने इस्लाम अपना लिया था", correct: true },
            { text: "अफ्रीकी गुलाम सैनिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे-जैसे अरब आगे बढ़े, उन्होंने स्थानीय लोगों, विशेषकर <b>जाटों और मेडों</b> को अपनी सेना में भर्ती करना शुरू कर दिया था।"
    },
    {
        question: "प्रश्न 8. अरबों द्वारा सिंध विजय को \"एक परिणामहीन विजय\" किसने कहा था?",
        answers: shuffle([
            { text: "विन्सेंट स्मिथ", correct: false },
            { text: "लेनपूल", correct: true },
            { text: "जेम्स मिल", correct: false },
            { text: "आर. सी. मजूमदार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार <b>स्टेनली लेनपूल</b> ने सिंध पर अरब विजय को भारत के इतिहास में एक \"किस्सा\" या \"<b>परिणामहीन विजय</b>\" कहा क्योंकि इसका भारत पर कोई बड़ा और स्थायी प्रभाव नहीं पड़ा।"
    },
    {
        question: "प्रश्न 9. राजा दाहिर के शासन से पहले सिंध पर किस वंश का शासन था?",
        answers: shuffle([
            { text: "मौर्य वंश", correct: false },
            { text: "गुप्त वंश", correct: false },
            { text: "राय वंश", correct: true },
            { text: "पाल वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा दाहिर के पिता <b>चच</b> ने <b>राय वंश</b> के अंतिम शासक राय साहसी द्वितीय के मंत्री के रूप में काम किया और उनकी मृत्यु के बाद सत्ता पर कब्जा कर लिया।"
    },
    {
        question: "प्रश्न 10. अरबों ने सिंध के प्रशासन के लिए स्थानीय अधिकारियों, विशेषकर ब्राह्मणों को क्यों नियुक्त किया?",
        answers: shuffle([
            { text: "a) क्योंकि वे इस्लाम में परिवर्तित हो गए थे", correct: false },
            { text: "b) क्योंकि उन्हें स्थानीय रीति-रिवाजों और राजस्व प्रणाली का ज्ञान था", correct: false },
            { text: "c) क्योंकि अरबों के पास पर्याप्त प्रशासक नहीं थे", correct: false },
            { text: "b) और c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों ने प्रशासन को सुचारू रूप से चलाने के लिए <b>स्थानीय ज्ञान और अनुभव</b> का लाभ उठाया और अपने सीमित <b>प्रशासनिक संसाधनों</b> की कमी को पूरा किया।"
    },
    {
        question: "प्रश्न 11. रावर के युद्ध में राजा दाहिर की हार का एक प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "उसकी सेना का छोटा होना", correct: false },
            { text: "उसके हाथी का घायल होकर नदी में भाग जाना", correct: true },
            { text: "खराब मौसम", correct: false },
            { text: "अरबों के पास बेहतर नौसेना थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युद्ध के दौरान एक जलता हुआ तीर <b>दाहिर के हाथी</b> को लगा, जिससे हाथी बिदक कर नदी की ओर भाग गया।<br><br><i class='fa-solid fa-angles-right icon'></i> सेना ने सोचा कि राजा भाग गया है, जिससे <b>भगदड़ मच गई</b>।"
    },
    {
        question: "प्रश्न 12. श्रीलंका के राजा ने अल-हज्जाज के लिए जो उपहार भेजे थे, उनमें क्या शामिल था?",
        answers: shuffle([
            { text: "कीमती रत्न और मोती", correct: false },
            { text: "मुस्लिम व्यापारियों के अनाथ बच्चे", correct: false },
            { text: "अफ्रीकी गुलाम", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>श्रीलंका</b> (जिसे तब सीलोन कहा जाता था) के राजा ने खलीफा और हज्जाज के लिए उपहार भेजे थे, जिनमें <b>कीमती सामान और दिवंगत अरब व्यापारियों की अनाथ बेटियां</b> शामिल थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हीं जहाजों को लूटा गया था।"
    },
    {
        question: "प्रश्न 13. मुहम्मद बिन कासिम के बाद सिंध का गवर्नर किसे नियुक्त किया गया था?",
        answers: shuffle([
            { text: "yaZid इब्न अबी कबशा", correct: true },
            { text: "हबीब इब्न अल-मुहल्लब", correct: false },
            { text: "जुनैद इब्न अब्द-अर-रहमान अल-मुर्री", correct: false },
            { text: "तमीम इब्न जैद अल-उतबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद बिन कासिम को वापस बुलाए जाने के बाद, <b>यजीद</b> को संक्षिप्त अवधि के लिए गवर्नर बनाया गया, लेकिन उसकी जल्द ही मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 14. \"सिंध का इतिहास अरबों की विजय के साथ शुरू नहीं होता, बल्कि उनकी विजय के साथ समाप्त होता है।\" यह कथन किस ऐतिहासिक परिप्रेक्ष्य को दर्शाता है?",
        answers: shuffle([
            { text: "अरबों ने सिंध की संस्कृति को पूरी तरह नष्ट कर दिया", correct: false },
            { text: "अरब विजय के बाद सिंध एक स्वतंत्र इकाई के रूप में समाप्त हो गया", correct: false },
            { text: "सिंध का अपना एक समृद्ध और प्राचीन इतिहास था जो अरब विजय से पहले का है", correct: true },
            { text: "अरबों ने सिंध को कोई महत्व नहीं दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथन इस बात पर जोर देता है कि सिंध (सिंधु घाटी सभ्यता का केंद्र) का इतिहास बहुत प्राचीन है और <b>अरब विजय</b> उसके लंबे इतिहास का केवल एक अध्याय है, न कि उसकी शुरुआत।"
    },
    {
        question: "प्रश्न 15. अरबों द्वारा सिंध विजय का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "केवल इस्लाम का प्रचार", correct: false },
            { text: "केवल धन लूटना", correct: false },
            { text: "साम्राज्य विस्तार और आर्थिक लाभ दोनों", correct: true },
            { text: "समुद्री डाकुओं को दंडित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि तात्कालिक कारण डाकुओं को दंडित करना था, लेकिन उमय्यद खलीफा का मुख्य उद्देश्य अपने <b>साम्राज्य का विस्तार</b> करना और भारत की <b>अपार धन-संपदा</b> पर नियंत्रण स्थापित करना था।"
    },
    {
        question: "प्रश्न 16. सिंध पर आक्रमण के लिए मुहम्मद बिन कासिम की सेना में लगभग कितने सैनिक थे?",
        answers: shuffle([
            { text: "1,000", correct: false },
            { text: "6,000", correct: true },
            { text: "20,000", correct: false },
            { text: "50,000", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद बिन कासिम ने लगभग <b>6,000 सीरियाई घुड़सवारों</b> और ऊँटों पर सवार सैनिकों की एक सुसज्जित सेना के साथ मकरान के रास्ते सिंध पर आक्रमण किया था।"
    },
    {
        question: "प्रश्न 17. अरबों के आक्रमण के समय, भारत का पश्चिमी तट किसके लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "मसालों के व्यापार", correct: false },
            { text: "सूती वस्त्रों के निर्यात", correct: false },
            { text: "घोड़ों के आयात", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब आक्रमण से पहले, भारत का पश्चिमी तट अरब और फारस के साथ <b>मसालों, वस्त्रों और अन्य वस्तुओं</b> के व्यापार का एक प्रमुख केंद्र था, और यहाँ अच्छी नस्ल के <b>घोड़े आयात</b> किए जाते थे।"
    },
    {
        question: "प्रश्न 18. अरब शासन के तहत, सिंध को प्रशासनिक रूप से किन दो भागों में बांटा गया था?",
        answers: shuffle([
            { text: "उत्तरी और दक्षिणी सिंध", correct: false },
            { text: "मंसूरा और मुल्तान", correct: true },
            { text: "शहरी और ग्रामीण क्षेत्र", correct: false },
            { text: "पूर्वी और पश्चिमी सिंध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबों ने सिंध को दो मुख्य <b>प्रशासनिक इकाइयों</b> या प्रांतों में विभाजित किया, जिनकी राजधानियाँ क्रमशः <b>मंसूरा और मुल्तान</b> थीं।"
    },
    {
        question: "प्रश्न 19. अरबों के आक्रमण ने भारतीय राजाओं को किस सैन्य कमजोरी के प्रति सचेत किया?",
        answers: shuffle([
            { text: "नौसेना की कमी", correct: false },
            { text: "हाथियों पर अत्यधिक निर्भरता", correct: true },
            { text: "घुड़सवार सेना की धीमी गति", correct: false },
            { text: "किलों की कमजोर रक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रावर के युद्ध में दाहिर के हाथी के बिदकने की घटना ने यह स्पष्ट कर दिया कि युद्ध में <b>हाथियों पर अत्यधिक निर्भरता</b> विनाशकारी हो सकती है, जबकि अरबों की तेज गति वाली घुड़सवार सेना अधिक प्रभावी थी।"
    },
    {
        question: "प्रश्न 20. 'अल-सिंदहिंद' क्या था?",
        answers: shuffle([
            { text: "एक अरबी जहाज", correct: false },
            { text: "सिंध का अरबी नाम", correct: false },
            { text: "ब्रह्मगुप्त के ग्रंथ 'ब्रह्मस्फुट सिद्धांत' का अरबी अनुवाद", correct: true },
            { text: "सिंध में प्रचलित एक कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय खगोल विज्ञान ग्रंथ '<b>ब्रह्मस्फुट सिद्धांत</b>' का बगदाद में '<b>अल-सिंदहिंद</b>' नाम से अनुवाद किया गया, जिसका अरब खगोल विज्ञान पर गहरा प्रभाव पड़ा।"
    },
    {
        question: "प्रश्न 21. उमय्यद खलीफाओं के बाद किन खलीफाओं के शासनकाल में भारत के साथ सांस्कृतिक आदान-प्रदान बढ़ा?",
        answers: shuffle([
            { text: "फातिमिद खलीफा", correct: false },
            { text: "अब्बासी खलीफा", correct: true },
            { text: "ऑटोमन खलीफा", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अब्बासी खलीफाओं</b> (विशेषकर अल-मंसूर और हारून-अल-रशीद) ने बगदाद को ज्ञान का केंद्र बनाया और भारतीय <b>विद्वानों</b> को आमंत्रित कर संस्कृत ग्रंथों का अरबी में अनुवाद करवाया।"
    },
    {
        question: "प्रश्न 22. राजा दाहिर के कोषाध्यक्ष ने मुहम्मद बिन कासिम को किस शर्त पर खजाने का पता बताया था?",
        answers: shuffle([
            { text: "उसे गवर्नर बनाने की शर्त पर", correct: false },
            { text: "उसके परिवार की सुरक्षा की शर्त पर", correct: false },
            { text: "उसे बड़ी मात्रा में धन देने की शर्त पर", correct: false },
            { text: "उसकी जान बख्श देने की शर्त पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चचनामा' के अनुसार, राजा दाहिर के एक मंत्री/<b>कोषाध्यक्ष</b> ने अपनी जान बचाने के बदले में मुहम्मद बिन कासिम को शाही खजाने का गुप्त स्थान बता दिया था।"
    },
    {
        question: "प्रश्न 23. अरबों ने किस भारतीय खेल को सीखा और उसे 'शतरंज' नाम दिया?",
        answers: shuffle([
            { text: "खो-खो", correct: false },
            { text: "कबड्डी", correct: false },
            { text: "चौसर", correct: false },
            { text: "चतुरंग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का प्राचीन खेल '<b>चतुरंग</b>' अरबों के माध्यम से फारस और फिर यूरोप पहुँचा, जहाँ यह 'चेस' (<b>शतरंज</b>) के रूप में विकसित हुआ।"
    },
    {
        question: "प्रश्न 24. सिंध के किन दो बंदरगाहों का उल्लेख अरब लेखकों ने प्रमुख व्यापारिक केंद्रों के रूप में किया है?",
        answers: shuffle([
            { text: "देबल और थाट्टा", correct: true },
            { text: "सूरत और भड़ौच", correct: false },
            { text: "कालीकट और गोवा", correct: false },
            { text: "मसूलीपट्टनम और ताम्रलिप्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब भूगोलवेत्ताओं और यात्रियों ने <b>देबल</b> और <b>थाट्टा</b> को सिंध के महत्वपूर्ण बंदरगाह और व्यापारिक केंद्र के रूप में वर्णित किया है।"
    },
    {
        question: "प्रश्न 25. बप्पा रावल, जिन्होंने अरबों को हराया था, किस राज्य के शासक थे?",
        answers: shuffle([
            { text: "मारवाड़", correct: false },
            { text: "मेवाड़", correct: true },
            { text: "अम्बर", correct: false },
            { text: "कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मेवाड़</b> के गुहिल वंश के शासक <b>बप्पा रावल</b> को उस गठबंधन का हिस्सा माना जाता है जिसने नागभट्ट प्रथम के नेतृत्व में अरबों को <b>राजस्थान</b> में हराया था।"
    },
    {
        question: "प्रश्न 26. अरब आक्रमण के समय सिंध की अर्थव्यवस्था का मुख्य आधार क्या था?",
        answers: shuffle([
            { text: "केवल कृषि", correct: false },
            { text: "केवल व्यापार", correct: false },
            { text: "कृषि और व्यापार दोनों", correct: true },
            { text: "पशुपालन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु नदी के कारण भूमि उपजाऊ थी, जिससे <b>कृषि</b> एक प्रमुख गतिविधि थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अतिरिक्त, देबल जैसे बंदरगाहों के माध्यम से <b>अंतर्राष्ट्रीय व्यापार</b> भी अर्थव्यवस्था का एक महत्वपूर्ण हिस्सा था।"
    },
    {
        question: "प्रश्न 27. अल-हज्जाज बिन यूसुफ किस प्रांत का गवर्नर था?",
        answers: shuffle([
            { text: "मिस्र", correct: false },
            { text: "सीरिया", correct: false },
            { text: "फारस", correct: false },
            { text: "इराक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-हज्जाज उमय्यद खलीफा के अधीन <b>इराक और पूर्वी प्रांतों</b> का एक बहुत शक्तिशाली और प्रभावशाली गवर्नर था।"
    },
    {
        question: "प्रश्न 28. मुहम्मद बिन कासिम ने मुल्तान पर कब विजय प्राप्त की?",
        answers: shuffle([
            { text: "712 ई.", correct: false },
            { text: "713 ई.", correct: true },
            { text: "714 ई.", correct: false },
            { text: "715 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंध के मुख्य क्षेत्रों पर नियंत्रण स्थापित करने के बाद, मुहम्मद बिन कासिम ने <b>713 ई.</b> में उत्तर की ओर बढ़कर <b>मुल्तान</b> पर भी कब्जा कर लिया।"
    },
    {
        question: "प्रश्न 29. अरबों के सिंध पर प्रभाव के संदर्भ में, 'मंसुरा' शहर की स्थापना का क्या महत्व है?",
        answers: shuffle([
            { text: "यह एक सैन्य छावनी थी", correct: false },
            { text: "यह सिंध में अरबों द्वारा स्थापित पहली राजधानी थी", correct: true },
            { text: "यह एक प्रमुख व्यापारिक केंद्र था", correct: false },
            { text: "यह एक धार्मिक केंद्र था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मंसूरा</b> शहर को अरबों ने अपनी <b>प्रशासनिक राजधानी</b> के रूप में स्थापित किया था, जो लगभग 200 वर्षों तक सिंध में अरब सत्ता का केंद्र बना रहा।"
    },
    {
        question: "प्रश्न 30. 'तारीख-ए-सिंध' के नाम से किस ग्रंथ को जाना जाता है?",
        answers: shuffle([
            { text: "चचनामा", correct: true },
            { text: "किताब-उल-हिन्द", correct: false },
            { text: "फुतूह-अल-बलदान", correct: false },
            { text: "शाहनामा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>चचनामा</b>' को 'फतहनामा-ए-सिंध' या '<b>तारीख-ए-सिंध</b>' (सिंध का इतिहास) भी कहा जाता है।"
    },
    {
        question: "प्रश्न 31. अरबों और सिंधियों के बीच सांस्कृतिक समन्वय का एक उदाहरण क्या है?",
        answers: shuffle([
            { text: "सिंधी भाषा में अरबी शब्दों का समावेश", correct: false },
            { text: "स्थापत्य शैली का विकास", correct: false },
            { text: "नए संगीत रूपों का उदय", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लंबे समय तक संपर्क में रहने के कारण सिंधी भाषा, <b>वास्तुकला</b> और संस्कृति पर <b>अरबी प्रभाव</b> पड़ा, जिससे एक मिश्रित संस्कृति का विकास हुआ।"
    },
    {
        question: "प्रश्न 32. भारतीय अंक प्रणाली को अरबों तक पहुँचाने में किस भारतीय शहर के दूतमंडल ने भूमिका निभाई?",
        answers: shuffle([
            { text: "कन्नौज", correct: false },
            { text: "उज्जैन", correct: false },
            { text: "सिंध", correct: true },
            { text: "पाटलिपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>773 ई.</b> में <b>सिंध</b> का एक दूतमंडल बगदाद गया, जिसमें भारतीय विद्वान शामिल थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यहीं से अरबों ने भारतीय खगोल विज्ञान और गणित (अंकों सहित) के बारे में गंभीरता से जानना शुरू किया।"
    },
    {
        question: "प्रश्न 33. अरबों के लिए सिंध विजय आर्थिक रूप से बहुत लाभदायक क्यों नहीं रही?",
        answers: shuffle([
            { text: "सिंध एक बहुत गरीब प्रांत था", correct: false },
            { text: "निरंतर विद्रोहों के कारण प्रशासन महंगा था", correct: true },
            { text: "मुख्य व्यापार मार्गों पर उनका नियंत्रण नहीं हो सका", correct: false },
            { text: "भारतीय राजाओं ने व्यापार बंद कर दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंध से प्राप्त राजस्व वहाँ के प्रशासन, सैन्य अभियानों और <b>निरंतर होने वाले विद्रोहों</b> को दबाने में ही खर्च हो जाता था, जिससे खलीफा को कोई विशेष आर्थिक लाभ नहीं हुआ।"
    },
    {
        question: "प्रश्न 34. भारत पर अरब आक्रमण का वर्णन करने वाला पहला यूरोपीय विद्वान कौन था?",
        answers: shuffle([
            { text: "एडवर्ड गिब्बन", correct: false },
            { text: "लेनपूल", correct: false },
            { text: "माउंटस्टुअर्ट एल्फिंस्टन", correct: true },
            { text: "विन्सेंट स्मिथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>माउंटस्टुअर्ट एल्फिंस्टन</b> ने अपनी पुस्तक \"हिस्ट्री ऑफ इंडिया\" (1841) में अरबों के सिंध आक्रमण का व्यवस्थित वर्णन किया।"
    },
    {
        question: "प्रश्न 35. सिंध के अलावा, अरबों ने भारत के किस अन्य तटीय क्षेत्र में अपनी बस्तियाँ बसाईं?",
        answers: shuffle([
            { text: "कोरोमंडल तट", correct: false },
            { text: "मालाबार तट", correct: true },
            { text: "कोंकण तट", correct: false },
            { text: "उत्तरी सरकार तट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंध विजय के अलावा, अरब <b>व्यापारी</b> शांतिपूर्ण तरीके से भारत के <b>मालाबार तट</b> (आधुनिक केरल) पर बसे और वहाँ के स्थानीय शासकों (जैसे जमोरिन) के साथ अच्छे संबंध बनाए।"
    },
    {
        question: "प्रश्न 36. अरब शासन के दौरान सिंध में कौन सी लिपि का प्रयोग बढ़ा?",
        answers: shuffle([
            { text: "देवनागरी", correct: false },
            { text: "ब्राह्मी", correct: false },
            { text: "अरबी लिपि का एक स्थानीय रूप", correct: true },
            { text: "खरोष्ठी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबी भाषा के प्रभाव से, सिंधी भाषा को लिखने के लिए <b>अरबी-फारसी लिपि</b> का एक संशोधित संस्करण विकसित हुआ, जो आज भी <b>पाकिस्तान</b> में उपयोग होता है।"
    },
    {
        question: "प्रश्न 37. राजा दाहिर के साम्राज्य की पूर्वी सीमा किस नदी द्वारा निर्धारित होती थी?",
        answers: shuffle([
            { text: "झेलम", correct: false },
            { text: "सतलुज", correct: false },
            { text: "सिंधु", correct: true },
            { text: "घग्गर-हकरा (लुप्त सरस्वती)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा दाहिर का राज्य मुख्य रूप से <b>सिंधु नदी</b> के निचले हिस्से के दोनों ओर फैला हुआ था।"
    },
    {
        question: "प्रश्न 38. मुहम्मद बिन कासिम की सफलता का एक प्रमुख सैन्य कारण क्या था?",
        answers: shuffle([
            { text: "उसके पास बड़ी तोपें थीं", correct: false },
            { text: "उसकी सेना में अनुशासन और बेहतर रणनीति थी", correct: true },
            { text: "भारतीय सेना ने युद्ध नहीं किया", correct: false },
            { text: "उसे स्थानीय डाकुओं का सहयोग मिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब सेना एक <b>केंद्रीय कमान</b> के तहत <b>अनुशासित</b> थी और उन्होंने <b>बेहतर सैन्य रणनीति</b> का प्रदर्शन किया, जबकि भारतीय सेना सामंती टुकड़ियों में बंटी हुई थी।"
    },
    {
        question: "प्रश्न 39. 'ब्राह्मणवाद की संधि' के तहत मुहम्मद बिन कासिम ने स्थानीय लोगों को क्या रियायतें दीं?",
        answers: shuffle([
            { text: "सभी करों से मुक्ति", correct: false },
            { text: "अपने धर्म का पालन करने और मंदिरों की मरम्मत की अनुमति", correct: true },
            { text: "सेना में उच्च पद", correct: false },
            { text: "मुफ्त जमीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जजिया कर स्वीकार करने के बदले में, अरबों ने आमतौर पर स्थानीय गैर-मुस्लिम आबादी को उनके <b>धार्मिक मामलों में स्वायत्तता</b> दी और अपने <b>पूजा स्थलों को बनाए रखने की अनुमति</b> दी।"
    },
    {
        question: "प्रश्न 40. अरबों ने भारत की किस चीज के व्यापार पर एकाधिकार स्थापित करने का प्रयास किया?",
        answers: shuffle([
            { text: "सोना और चांदी", correct: false },
            { text: "घोड़े और हथियार", correct: false },
            { text: "मसाले और वस्त्र", correct: true },
            { text: "चाय और कॉफी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब <b>व्यापारी</b> भारतीय <b>मसालों और वस्त्रों</b> के यूरोपीय व्यापार में बिचौलिए की भूमिका निभाते थे और इस आकर्षक व्यापार पर अपना नियंत्रण बनाए रखना चाहते थे।"
    },
    {
        question: "प्रश्न 41. खलीफा उमर (द्वितीय) की धार्मिक नीति का सिंध पर क्या प्रभाव पड़ा?",
        answers: shuffle([
            { text: "उसने जबरन धर्मांतरण को बढ़ावा दिया", correct: false },
            { text: "उसने हिंदुओं को इस्लाम में परिवर्तित होने के लिए प्रोत्साहित किया, जजिया से छूट का लालच देकर", correct: true },
            { text: "उसने धार्मिक सहिष्णुता की नीति अपनाई", correct: false },
            { text: "उसने सभी मंदिरों को तोड़ने का आदेश दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खलीफा <b>उमर द्वितीय</b> की नीति <b>धर्मांतरण</b> को प्रोत्साहित करने की थी, और उसने जयसिंह जैसे कई भारतीय प्रमुखों को इस्लाम स्वीकार करने पर उनके राज्य वापस करने का प्रस्ताव दिया।"
    },
    {
        question: "प्रश्न 42. अरबों के बाद, सिंध पर किस स्थानीय राजवंश ने कुछ समय के लिए शासन किया?",
        answers: shuffle([
            { text: "चौहान", correct: false },
            { text: "सोलंकी", correct: false },
            { text: "सम्मा", correct: false },
            { text: "सूमरा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब सत्ता के कमजोर पड़ने के बाद, <b>11वीं शताब्दी</b> में स्थानीय <b>सूमरा राजवंश</b> ने सिंध में अपनी <b>स्वतंत्र सत्ता</b> स्थापित कर ली थी।"
    },
    {
        question: "प्रश्न 43. सिंध में अरबों की सफलता के लिए कौन सा सामाजिक कारक उत्तरदायी था?",
        answers: shuffle([
            { text: "जाति व्यवस्था की कठोरता और सामाजिक विभाजन", correct: false },
            { text: "भारतीय समाज में एकता का अभाव", correct: false },
            { text: "बौद्धों और ब्राह्मण शासकों के बीच तनाव", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंध के समाज में मौजूद <b>जातिगत भेदभाव, विभिन्न धार्मिक समूहों के बीच तनाव</b> और समग्र <b>एकता की कमी</b> ने बाहरी <b>आक्रमणकारी</b> के लिए काम आसान कर दिया।"
    },
    {
        question: "प्रश्न 44. अरबों द्वारा सिंध पर शासन करने के लिए अपनाई गई नीति को क्या कहा जाता है?",
        answers: shuffle([
            { text: "विलय और विनाश की नीति", correct: false },
            { text: "धार्मिक असहिष्णुता की नीति", correct: false },
            { text: "सह-अस्तित्व और व्यावहारिकता की नीति", correct: true },
            { text: "पूर्ण सैन्य शासन की नीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैन्य विजय के बाद, अरबों ने शासन चलाने के लिए <b>व्यावहारिकता</b> अपनाई।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने स्थानीय प्रशासनिक ढाँचे को बनाए रखा और <b>जजिया</b> के बदले धार्मिक स्वतंत्रता दी।"
    },
    {
        question: "प्रश्न 45. अरब आक्रमणकारी भारत को क्या कहते थे?",
        answers: shuffle([
            { text: "आर्यावर्त", correct: false },
            { text: "हिन्द या अल-हिन्द", correct: true },
            { text: "जम्बूद्वीप", correct: false },
            { text: "सोने की चिड़िया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब लेखक और <b>भूगोलवेत्ता</b> सिंधु नदी के पार के क्षेत्र, यानी भारत को '<b>अल-हिन्द</b>' और यहाँ के निवासियों को 'हिंदी' कहते थे।"
    },
    {
        question: "प्रश्न 46. कौन सा अरब भूगोलवेत्ता सिंध के शहर 'मंसुरा' का विस्तृत वर्णन करता है?",
        answers: shuffle([
            { text: "इब्न बतूता", correct: false },
            { text: "अल-मसूदी", correct: true },
            { text: "अल-बरुनी", correct: false },
            { text: "इब्न खुरदादबेह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>10वीं सदी</b> के यात्री <b>अल-मसूदी</b> ने सिंध की यात्रा की और <b>मंसूरा</b> शहर की समृद्धि, इसके शासक और सामाजिक जीवन का वर्णन किया।"
    },
    {
        question: "प्रश्न 47. अरब शासनकाल में सिंध का प्रमुख उद्योग क्या था?",
        answers: shuffle([
            { text: "लौह उद्योग", correct: false },
            { text: "जहाज निर्माण", correct: false },
            { text: "वस्त्र उद्योग", correct: true },
            { text: "चीनी उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंध अपने <b>उच्च गुणवत्ता वाले सूती वस्त्रों</b> के लिए प्रसिद्ध था, और अरब शासन के दौरान भी यह एक प्रमुख उद्योग और निर्यात वस्तु बना रहा।"
    },
    {
        question: "प्रश्न 48. राजा दाहिर के समय में, सिंध के समाज में बौद्धों की स्थिति क्या थी?",
        answers: shuffle([
            { text: "वे शासक वर्ग का हिस्सा थे", correct: false },
            { text: "वे बहुसंख्यक लेकिन राजनीतिक रूप से कमजोर थे", correct: true },
            { text: "वे एक छोटा और सताया हुआ समुदाय थे", correct: false },
            { text: "वे व्यापारी वर्ग पर हावी थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंध की आबादी का एक बड़ा हिस्सा <b>बौद्ध</b> था, लेकिन सत्ता <b>ब्राह्मण शासकों</b> के हाथ में थी, जिससे कुछ हद तक सामाजिक-राजनीतिक तनाव मौजूद था।"
    },
    {
        question: "प्रश्न 49. अरबों ने भारत में मानचित्र-निर्माण (Cartography) के विकास में कैसे योगदान दिया?",
        answers: shuffle([
            { text: "उन्होंने भारतीय मानचित्रों को नष्ट कर दिया", correct: false },
            { text: "उन्होंने भारत के सटीक भौगोलिक विवरण और मानचित्र तैयार किए", correct: true },
            { text: "उन्होंने मानचित्र बनाना भारतीयों से सीखा", correct: false },
            { text: "उनका कोई योगदान नहीं था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब <b>भूगोलवेत्ताओं</b> जैसे अल-इदरीसी ने भारतीय उपमहाद्वीप के अपने समय के <b>सबसे सटीक नक्शे</b> बनाए, जो भारतीय भूगोल के ज्ञान को आगे बढ़ाने में सहायक हुए।"
    },
    {
        question: "प्रश्न 50. मुहम्मद बिन कासिम ने किस भारतीय शासक से सहायता के लिए पत्र लिखा था, लेकिन उसे कोई जवाब नहीं मिला?",
        answers: shuffle([
            { text: "कन्नौज के यशोवर्मन", correct: false },
            { text: "कश्मीर के ललितादित्य", correct: false },
            { text: "राष्ट्रकूट राजा दन्तिदुर्ग", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐसा कोई <b>विश्वसनीय ऐतिहासिक प्रमाण नहीं</b> है कि मुहम्मद बिन कासिम ने किसी प्रमुख भारतीय शासक से सहायता मांगी हो।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपने अभियान को <b>अल-हज्जाज के समर्थन</b> से अंजाम दिया।"
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