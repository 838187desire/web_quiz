const questions = [
    {
        topHeading: "भारत के खनिज संसाधन पर आधारित बहुविकल्पीय प्रश्न part 1  (quiz_no. 97)"
    },
    {
        question: "भारत में सर्वाधिक भंडार किस खनिज का है?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "लौह अयस्क", correct: true },
            { text: "बॉक्साइट", correct: false },
            { text: "अभ्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में लौह अयस्क का सबसे बड़ा भंडार है, खासकर हेमेटाइट और मैग्नेटाइट प्रकार का।"
    },
    {
        question: "'लौह अयस्क' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "छत्तीसगढ़", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में लौह अयस्क का सबसे बड़ा उत्पादक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहां मयूरभंज, सुंदरगढ़ और केंदुझर जिले प्रमुख हैं।"
    },
    {
        question: "'अंकलेश्वर' किसके लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "लौह अयस्क", correct: false },
            { text: "तांबा", correct: false },
            { text: "पेट्रोलियम", correct: true },
            { text: "कोयला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंकलेश्वर, गुजरात में स्थित है, और यह भारत का एक महत्वपूर्ण तेल क्षेत्र है।"
    },
    {
        question: "'हीरा' किस राज्य में पाया जाता है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "छत्तीसगढ़", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश का पन्ना जिला भारत में हीरे के उत्पादन के लिए प्रसिद्ध है।"
    },
    {
        question: "'खेतड़ी' किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "लौह अयस्क", correct: false },
            { text: "तांबा", correct: true },
            { text: "बॉक्साइट", correct: false },
            { text: "कोयला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खेतड़ी, राजस्थान में स्थित है, और यह भारत में तांबे के खनन के लिए एक महत्वपूर्ण केंद्र है।"
    },
    {
        question: "भारत में 'बॉक्साइट' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "झारखंड", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में बॉक्साइट का सबसे बड़ा उत्पादक है, जहां से भारत के कुल बॉक्साइट उत्पादन का 50% से अधिक हिस्सा आता है।"
    },
    {
        question: "'पन्ना' की खाने किस खनिज के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "हीरा", correct: true },
            { text: "चांदी", correct: false },
            { text: "कोयला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पन्ना, मध्य प्रदेश में स्थित है, और यह भारत में हीरे की खानों के लिए विश्व प्रसिद्ध है।"
    },
    {
        question: "'कोडरमा' किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "अभ्रक", correct: true },
            { text: "तांबा", correct: false },
            { text: "लौह अयस्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोडरमा, झारखंड में स्थित है, जिसे 'भारत की अभ्रक राजधानी' के रूप में जाना जाता है।"
    },
    {
        question: "'कोयला' किस प्रकार की चट्टानों में पाया जाता है?",
        answers: shuffle([
            { text: "आग्नेय चट्टानें", correct: false },
            { text: "अवसादी चट्टानें", correct: true },
            { text: "कायांतरित चट्टानें", correct: false },
            { text: "ज्वालामुखी चट्टानें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोयला एक कार्बनिक अवसादी चट्टान है, जो वनस्पतियों और जीवों के अवशेषों से बनती है।"
    },
    {
        question: "'बैलाडीला' की खानें किस खनिज के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "सोना", correct: false },
            { text: "लौह अयस्क", correct: true },
            { text: "कोयला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैलाडीला, छत्तीसगढ़ में स्थित है, और यह भारत में उच्च-गुणवत्ता वाले हेमेटाइट लौह अयस्क के लिए प्रसिद्ध है।"
    },
    {
        question: "भारत में 'सोने' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक का कोलार और रायचूर क्षेत्र भारत में सोने के खनन के लिए प्रसिद्ध हैं।"
    },
    {
        question: "'कोलार' की खानें किस खनिज के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "हीरा", correct: false },
            { text: "सोना", correct: true },
            { text: "कोयला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलार, कर्नाटक में स्थित है, और यह भारत में सोने की सबसे महत्वपूर्ण खानों में से एक है।"
    },
    {
        question: "'सिंगरेनी' की खाने किस खनिज के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "लौह अयस्क", correct: false },
            { text: "कोयला", correct: true },
            { text: "बॉक्साइट", correct: false },
            { text: "अभ्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंगरेनी, तेलंगाना में स्थित है, और यह भारत के प्रमुख कोयला क्षेत्रों में से एक है।"
    },
    {
        question: "भारत में 'मैंगनीज' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "ओडिशा", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश भारत में मैंगनीज का सबसे बड़ा उत्पादक है, जहां बालाघाट और छिंदवाड़ा जिले प्रमुख हैं।"
    },
    {
        question: "'मोसली' की खाने किस खनिज के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "लौह अयस्क", correct: false },
            { text: "बॉक्साइट", correct: false },
            { text: "क्रोमाइट", correct: true },
            { text: "मैंगनीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोसली (सुकिंदा) की खाने, ओडिशा में स्थित हैं, जो भारत में क्रोमाइट के उत्पादन के लिए जानी जाती हैं।"
    },
    {
        question: "'डोलोमाइट' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "मध्य प्रदेश", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "छत्तीसगढ़", correct: false },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में डोलोमाइट का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "'झरिया' किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "लौह अयस्क", correct: false },
            { text: "तांबा", correct: false },
            { text: "कोयला", correct: true },
            { text: "बॉक्साइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झरिया, झारखंड में स्थित है, और यह भारत का सबसे बड़ा कोयला क्षेत्र है।"
    },
    {
        question: "'कुद्रेमुख' किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "लौह अयस्क", correct: true },
            { text: "मैंगनीज", correct: false },
            { text: "सोना", correct: false },
            { text: "बॉक्साइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुद्रेमुख, कर्नाटक में स्थित है, और यह भारत में लौह अयस्क के बड़े भंडारों में से एक है।"
    },
    {
        question: "'राजस्थान' किस खनिज के उत्पादन में एकाधिकार रखता है?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "अभ्रक", correct: false },
            { text: "जस्ता", correct: true },
            { text: "तांबा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान भारत में जस्ते का सबसे बड़ा उत्पादक है, जहां से देश के कुल जस्ता उत्पादन का 90% से अधिक हिस्सा आता है।"
    },
    {
        question: "'डिगबोई' किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "पेट्रोलियम", correct: true },
            { text: "लौह अयस्क", correct: false },
            { text: "मैंगनीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिगबोई, असम में स्थित है, और यह भारत की सबसे पुरानी कार्यरत तेल रिफाइनरी है।"
    },
    {
        question: "'यूरेनियम' भारत के किस राज्य में पाया जाता है?",
        answers: shuffle([
            { text: "झारखंड", correct: true },
            { text: "मध्य प्रदेश", correct: false },
            { text: "छत्तीसगढ़", correct: false },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झारखंड का जादूगोड़ा क्षेत्र भारत में यूरेनियम के खनन के लिए प्रसिद्ध है।"
    },
    {
        question: "'अंकलेश्वर' किसके लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "लौह अयस्क", correct: false },
            { text: "तांबा", correct: false },
            { text: "पेट्रोलियम", correct: true },
            { text: "कोयला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंकलेश्वर, गुजरात में स्थित है, और यह भारत का एक महत्वपूर्ण तेल क्षेत्र है।"
    },
    {
        question: "'ग्रेनाइट' किस प्रकार की चट्टान है?",
        answers: shuffle([
            { text: "अवसादी चट्टान", correct: false },
            { text: "आग्नेय चट्टान", correct: true },
            { text: "कायांतरित चट्टान", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेनाइट एक आग्नेय चट्टान है, जो मैग्मा के ठंडा होने और जमने से बनती है।"
    },
    {
        question: "'नेवेली' की खाने किस खनिज के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "लिग्नाइट", correct: true },
            { text: "पेट्रोलियम", correct: false },
            { text: "यूरेनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेवेली, तमिलनाडु में स्थित है, और यह भारत का सबसे बड़ा लिग्नाइट कोयला क्षेत्र है।"
    },
    {
        question: "'केयर्न एनर्जी' किस क्षेत्र में कार्यरत है?",
        answers: shuffle([
            { text: "कोयला खनन", correct: false },
            { text: "लौह अयस्क खनन", correct: false },
            { text: "तेल और गैस अन्वेषण", correct: true },
            { text: "बॉक्साइट खनन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केयर्न एनर्जी एक प्रमुख तेल और गैस अन्वेषण और उत्पादन कंपनी है, जो भारत के राजस्थान में महत्वपूर्ण तेल क्षेत्रों में काम कर रही है।"
    },
    {
        question: "'मुंबई हाई' किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "लौह अयस्क", correct: false },
            { text: "पेट्रोलियम", correct: true },
            { text: "प्राकृतिक गैस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंबई हाई, मुंबई के तट से दूर अरब सागर में स्थित है, और यह भारत का सबसे बड़ा और सबसे महत्वपूर्ण अपतटीय तेल क्षेत्र है।"
    },
    {
        question: "'जावर' की खानें किस खनिज के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "लौह अयस्क", correct: false },
            { text: "जस्ता", correct: true },
            { text: "तांबा", correct: false },
            { text: "कोयला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जावर, राजस्थान में स्थित है, और यह भारत में जस्ते और सीसे की सबसे पुरानी और सबसे बड़ी खानों में से एक है।"
    },
    {
        question: "'एन्थ्रेसाइट' कोयले की विशेषता क्या है?",
        answers: shuffle([
            { text: "इसमें कार्बन की मात्रा कम होती है।", correct: false },
            { text: "यह सबसे निम्न गुणवत्ता का कोयला है।", correct: false },
            { text: "यह सबसे उच्च गुणवत्ता का कोयला है।", correct: true },
            { text: "यह केवल भारत के झारखंड में पाया जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एन्थ्रेसाइट कोयला सबसे उच्च गुणवत्ता का होता है, जिसमें कार्बन की मात्रा 80% से अधिक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत में जम्मू और कश्मीर के कुछ क्षेत्रों में पाया जाता है।"
    },
    {
        question: "'राजामुंदरी' किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "पेट्रोलियम और प्राकृतिक गैस", correct: true },
            { text: "लौह अयस्क", correct: false },
            { text: "बॉक्साइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजामुंदरी, आंध्र प्रदेश में कृष्णा-गोदावरी बेसिन का एक प्रमुख क्षेत्र है, जो पेट्रोलियम और प्राकृतिक गैस के भंडारों के लिए जाना जाता है।"
    },
    {
        question: "'अभ्रक' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "आंध्र प्रदेश", correct: true },
            { text: "झारखंड", correct: false },
            { text: "बिहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश भारत में अभ्रक का सबसे बड़ा उत्पादक है, जहां नेल्लोर जिले में अच्छी गुणवत्ता का अभ्रक पाया जाता है।"
    },
    {
        question: "'चूना पत्थर' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश भारत में चूना पत्थर का सबसे बड़ा उत्पादक है, जिसका उपयोग सीमेंट उद्योग में बड़े पैमाने पर होता है।"
    },
    {
        question: "'महानदी' बेसिन किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "पेट्रोलियम", correct: false },
            { text: "लौह अयस्क", correct: false },
            { text: "कोयला", correct: true },
            { text: "मैंगनीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानदी बेसिन, ओडिशा और छत्तीसगढ़ में फैला हुआ है, और यह भारत के प्रमुख कोयला क्षेत्रों में से एक है।"
    },
    {
        question: "'जादूगोड़ा' की खानें किस खनिज के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "यूरेनियम", correct: true },
            { text: "कोयला", correct: false },
            { text: "हीरा", correct: false },
            { text: "तांबा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जादूगोड़ा, झारखंड में स्थित है, और यह भारत का एक महत्वपूर्ण यूरेनियम खनन केंद्र है।"
    },
    {
        question: "'पलाउ' (Palu) क्षेत्र किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "अभ्रक", correct: true },
            { text: "बॉक्साइट", correct: false },
            { text: "कोयला", correct: false },
            { text: "क्रोमाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पलाउ क्षेत्र, राजस्थान में स्थित है, जो अभ्रक के उत्पादन के लिए जाना जाता है।"
    },
    {
        question: "भारत में 'क्रोमाइट' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "झारखंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में क्रोमाइट का लगभग 95% से अधिक उत्पादन करता है, विशेषकर सुकिंदा घाटी में।"
    },
    {
        question: "'लिग्नाइट' कोयले का सबसे बड़ा भंडार किस राज्य में है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "छत्तीसगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तमिलनाडु का नेवेली क्षेत्र भारत का सबसे बड़ा लिग्नाइट भंडार है।"
    },
    {
        question: "'तांबा' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "झारखंड", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश, विशेषकर बालाघाट जिले में स्थित मलांजखंड खान, भारत में तांबा का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "'लौह अयस्क' के निर्यात के लिए सबसे महत्वपूर्ण बंदरगाह कौन सा है?",
        answers: shuffle([
            { text: "विशाखापत्तनम", correct: false },
            { text: "पारादीप", correct: true },
            { text: "मुंबई", correct: false },
            { text: "कोलकाता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारादीप बंदरगाह, ओडिशा में स्थित है, और यह मुख्य रूप से लौह अयस्क और कोयले के निर्यात के लिए एक महत्वपूर्ण बंदरगाह है।"
    },
    {
        question: "'मेक इन इंडिया' पहल के तहत किस खनिज क्षेत्र में विदेशी निवेश को बढ़ावा दिया गया है?",
        answers: shuffle([
            { text: "लौह अयस्क", correct: false },
            { text: "बॉक्साइट", correct: false },
            { text: "कोयला", correct: true },
            { text: "सभी खनिज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत सरकार ने 'मेक इन इंडिया' के तहत कोयला क्षेत्र में निजीकरण और विदेशी निवेश को बढ़ावा दिया है, जिससे इस क्षेत्र में उत्पादन और प्रौद्योगिकी में सुधार हो सके।"
    },
    {
        question: "'अबरख' किस प्रकार का खनिज है?",
        answers: shuffle([
            { text: "धात्विक", correct: false },
            { text: "अधात्विक", correct: true },
            { text: "ऊर्जा खनिज", correct: false },
            { text: "मिश्रित खनिज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अबरख एक अधात्विक खनिज है, जिसका उपयोग मुख्य रूप से इलेक्ट्रॉनिक और विद्युत उद्योग में किया जाता है क्योंकि यह विद्युत का कुचालक होता है।"
    },
    {
        question: "'राजस्थान' में 'जस्ते' की खानें किस जिले में स्थित हैं?",
        answers: shuffle([
            { text: "उदयपुर", correct: true },
            { text: "जयपुर", correct: false },
            { text: "अजमेर", correct: false },
            { text: "भीलवाड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान में उदयपुर जिले में स्थित जावर की खानें जस्ते के उत्पादन के लिए प्रसिद्ध हैं।"
    },
    {
        question: "भारत का कौन सा राज्य 'लौह अयस्क और कोयले' दोनों का प्रमुख उत्पादक है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "छत्तीसगढ़", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में लौह अयस्क और कोयले दोनों का एक प्रमुख उत्पादक है, जहां सुंदरगढ़ और केंदुझर में लौह अयस्क और तलचर में कोयला पाया जाता है।"
    },
    {
        question: "'पन्ना' की खानें किस राज्य में स्थित हैं?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "झारखंड", correct: false },
            { text: "छत्तीसगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पन्ना, मध्य प्रदेश में स्थित है, और यह भारत में हीरे के उत्पादन के लिए प्रसिद्ध है।"
    },
    {
        question: "'लौह अयस्क' के मुख्य प्रकार कौन से हैं?",
        answers: shuffle([
            { text: "एन्थ्रेसाइट और बिटुमिनस", correct: false },
            { text: "हेमेटाइट और मैग्नेटाइट", correct: true },
            { text: "लिग्नाइट और पीट", correct: false },
            { text: "बॉक्साइट और क्रोमाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेमेटाइट और मैग्नेटाइट लौह अयस्क के दो मुख्य प्रकार हैं, जो भारत में सबसे अधिक पाए जाते हैं।"
    },
    {
        question: "'भारत में क्रूड ऑयल का सबसे बड़ा अपतटीय क्षेत्र' कौन सा है?",
        answers: shuffle([
            { text: "कृष्णा-गोदावरी बेसिन", correct: false },
            { text: "मुंबई हाई", correct: true },
            { text: "असम-अराकान बेसिन", correct: false },
            { text: "कावेरी बेसिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंबई हाई, भारत का सबसे बड़ा अपतटीय तेल क्षेत्र है, जो देश के कुल कच्चे तेल उत्पादन में महत्वपूर्ण योगदान देता है।"
    },
    {
        question: "'भारत का खनिज संसाधनों का भंडार' किस भूगर्भीय संरचना में पाया जाता है?",
        answers: shuffle([
            { text: "हिमालय", correct: false },
            { text: "उत्तर भारतीय मैदान", correct: false },
            { text: "प्रायद्वीपीय पठार", correct: true },
            { text: "तटीय मैदान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के अधिकांश धात्विक और गैर-धात्विक खनिज संसाधन प्रायद्वीपीय पठार क्षेत्र में पाए जाते हैं, जो गोंडवानालैंड का हिस्सा है।"
    },
    {
        question: "'हीरा' किस चट्टान में पाया जाता है?",
        answers: shuffle([
            { text: "आग्नेय चट्टान", correct: true },
            { text: "अवसादी चट्टान", correct: false },
            { text: "कायांतरित चट्टान", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीरा किम्बरलाइट नामक एक विशेष प्रकार की आग्नेय चट्टान में पाया जाता है, जो पृथ्वी की गहराई से सतह पर आती है।"
    },
    {
        question: "'पेट्रोलियम' किस प्रकार की चट्टानों में पाया जाता है?",
        answers: shuffle([
            { text: "आग्नेय चट्टान", correct: false },
            { text: "अवसादी चट्टान", correct: true },
            { text: "कायांतरित चट्टान", correct: false },
            { text: "सभी प्रकार की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेट्रोलियम और प्राकृतिक गैस कार्बनिक पदार्थों के अवसादी चट्टानों में दबे रहने और अत्यधिक दबाव व ताप के कारण बनते हैं।"
    },
    {
        question: "'सिंघरौली' कोयला क्षेत्र किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "छत्तीसगढ़", correct: false },
            { text: "झारखंड", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघरौली, मध्य प्रदेश और उत्तर प्रदेश की सीमा पर स्थित एक प्रमुख कोयला क्षेत्र है।"
    },
    {
        question: "'थोरियम' का सबसे बड़ा भंडार किस राज्य में है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "केरल", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल में थोरियम का सबसे बड़ा भंडार है, जो मोनोजाइट रेत में पाया जाता है, खासकर इसके तटीय क्षेत्रों में।"
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