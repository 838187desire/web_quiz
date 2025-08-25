const questions = [
    {
        topHeading: "प्रागैतिहासिक काल पर आधारित बहुविकल्पीय प्रश्न part 3 (quiz_no.3)"
    },
    {
        question: "'कायथा संस्कृति' का पुरास्थल किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "चंबल", correct: false },
            { text: "काली सिंध", correct: true },
            { text: "बेतवा", correct: false },
            { text: "नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायथा संस्कृति ताम्रपाषाण काल की एक महत्वपूर्ण संस्कृति है, जिसका प्रमुख स्थल कायथा मध्य प्रदेश में काली सिंध नदी के किनारे स्थित है।"
    },
    {
        question: "'ताम्रपाषाण काल' में किस स्थान से 'मातृ देवी' की प्रतिमाएं मिली हैं?",
        answers: shuffle([
            { text: "इनामगाँव", correct: true },
            { text: "आहार", correct: false },
            { text: "नवदाटोली", correct: false },
            { text: "कायथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र के ताम्रपाषाण कालीन स्थल इनामगाँव से मातृ देवी की प्रतिमाएं मिली हैं, जो तत्कालीन धार्मिक विश्वासों को दर्शाती हैं।"
    },
    {
        question: "'उच्च पुरापाषाण काल' का एक प्रमुख पुरास्थल 'बेलन घाटी' कहाँ स्थित है?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "मध्य प्रदेश", correct: false },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेलन घाटी, उत्तर प्रदेश में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से निम्न, मध्य और उच्च पुरापाषाण काल के अलावा मध्यपाषाण और नवपाषाण काल के भी साक्ष्य मिले हैं।"
    },
    {
        question: "'लोहे के औजारों' का उपयोग किस काल में शुरू हुआ?",
        answers: shuffle([
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false },
            { text: "कांस्य युग", correct: false },
            { text: "लौह युग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लौह युग वह काल है जब मानव ने लोहे को गलाकर औजार और हथियार बनाना शुरू किया, जिसने कृषि और सैन्य प्रौद्योगिकी में क्रांति ला दी।"
    },
    {
        question: "'पल्लवरम' से प्राप्त औजार का नाम क्या है?",
        answers: shuffle([
            { text: "सूक्ष्म पाषाण", correct: false },
            { text: "हस्तकुठार", correct: true },
            { text: "ब्लेड", correct: false },
            { text: "पॉलिश की हुई कुल्हाड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉबर्ट ब्रूस फुट ने 1863 में पल्लवरम से भारत का पहला पुरापाषाण कालीन औजार, एक हस्तकुठार (Handaxe), खोजा था।"
    },
    {
        question: "'भीमबेटका' को यूनेस्को की विश्व धरोहर स्थल में कब शामिल किया गया?",
        answers: shuffle([
            { text: "1982", correct: false },
            { text: "1999", correct: false },
            { text: "2003", correct: true },
            { text: "2011", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश के रायसेन जिले में स्थित भीमबेटका के शैलचित्रों को 2003 में यूनेस्को द्वारा विश्व धरोहर स्थल घोषित किया गया था।"
    },
    {
        question: "'आहार संस्कृति' के लोग किस धातु का उपयोग बड़े पैमाने पर करते थे?",
        answers: shuffle([
            { text: "तांबा", correct: true },
            { text: "कांस्य", correct: false },
            { text: "लोहा", correct: false },
            { text: "चांदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार संस्कृति (बनास संस्कृति) में तांबे के औजार और बर्तन बड़ी मात्रा में मिले हैं, जिससे पता चलता है कि यहाँ के लोग तांबे का उपयोग व्यापक रूप से करते थे।"
    },
    {
        question: "'प्रागैतिहासिक' शब्द किसने गढ़ा था?",
        answers: shuffle([
            { text: "रॉबर्ट ब्रूस फुट", correct: false },
            { text: "अलेक्जेंडर कनिंघम", correct: false },
            { text: "डेनियल विल्सन", correct: true },
            { text: "वी.एस. वाकणकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्कॉटिश पुरातत्वविद् डेनियल विल्सन ने 1851 में अपनी पुस्तक \"द आर्कियोलॉजी एंड प्रीहिस्टोरिक एनल्स ऑफ स्कॉटलैंड\" में पहली बार 'प्रीहिस्टोरिक' शब्द का प्रयोग किया था।"
    },
    {
        question: "'नवदाटोली' से 'झुके हुए घुटनों' वाले 'मानव कंकाल' किस काल के हैं?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवदाटोली से मिले मानव कंकाल मध्यपाषाण काल के हैं, जिनमें से एक कंकाल को झुके हुए घुटनों की अवस्था में दफनाया गया था।"
    },
    {
        question: "'मेहरगढ़' किस क्षेत्र में स्थित है?",
        answers: shuffle([
            { text: "गंगा घाटी", correct: false },
            { text: "सिंधु घाटी", correct: false },
            { text: "बोलन घाटी", correct: true },
            { text: "सोन घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़, जो नवपाषाण काल का एक प्रमुख स्थल है, वर्तमान पाकिस्तान के बलूचिस्तान प्रांत में बोलन नदी घाटी में स्थित है।"
    },
    {
        question: "'हाथ की कुल्हाड़ी' और 'विदारणी' किस संस्कृति की विशेषता थी?",
        answers: shuffle([
            { text: "अश्ल्युलियन संस्कृति", correct: true },
            { text: "सोहन संस्कृति", correct: false },
            { text: "बेलन संस्कृति", correct: false },
            { text: "मद्रास संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हाथ की कुल्हाड़ी' (Handaxe) और 'विदारणी' (Cleaver) अश्ल्युलियन संस्कृति के प्रमुख औजार थे, जो निम्न पुरापाषाण काल से संबंधित है।"
    },
    {
        question: "'नवपाषाण काल' में किस प्रकार के औजारों का उपयोग किया जाता था?",
        answers: shuffle([
            { text: "बड़े और अपरिष्कृत पत्थर के औजार", correct: false },
            { text: "ब्लेड और ब्यूरिन", correct: false },
            { text: "पॉलिश किए गए और घिसे हुए पत्थर के औजार", correct: true },
            { text: "धातु के औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में पत्थरों को घिसकर और पॉलिश करके औजार बनाए जाते थे, जो अधिक मजबूत और कुशल होते थे।"
    },
    {
        question: "'महानगरी' (Megalithic) कब्रें किस काल से संबंधित हैं?",
        answers: shuffle([
            { text: "ताम्रपाषाण काल", correct: false },
            { text: "लौह युग", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापाषाण (Megalithic) कब्रें, जो बड़े पत्थरों से बनी होती थीं, दक्षिण भारत में लौह युग से संबंधित हैं।"
    },
    {
        question: "'मध्यपाषाण काल' का कौन सा पुरास्थल 'सबसे बड़ा मानव बस्ती' माना जाता है?",
        answers: shuffle([
            { text: "बागोर", correct: true },
            { text: "आदमगढ़", correct: false },
            { text: "सराय नाहर राय", correct: false },
            { text: "लंगनाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान में स्थित बागोर पुरास्थल मध्यपाषाण काल का सबसे बड़ा ज्ञात मानव बस्ती है।"
    },
    {
        question: "'अल्टामिरा' गुफाएं किस देश में स्थित हैं?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "जर्मनी", correct: false },
            { text: "स्पेन", correct: true },
            { text: "इटली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्टामिरा गुफाएं स्पेन में स्थित हैं और यह अपने पुरापाषाण कालीन शैलचित्रों के लिए विश्व प्रसिद्ध हैं।"
    },
    {
        question: "'ताम्रपाषाण काल' में किस स्थान से 'हाथीदांत' का सबसे बड़ा टुकड़ा मिला है?",
        answers: shuffle([
            { text: "कायथा", correct: false },
            { text: "इनामगाँव", correct: true },
            { text: "नवदाटोली", correct: false },
            { text: "आहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) से हाथीदांत का एक टुकड़ा मिला है, जो इस बात का संकेत है कि यहाँ के लोग हाथीदांत का उपयोग करते थे।"
    },
    {
        question: "'सिंधु घाटी सभ्यता' किस काल से संबंधित है?",
        answers: shuffle([
            { text: "प्रागैतिहासिक काल", correct: false },
            { text: "आदि-ऐतिहासिक काल", correct: true },
            { text: "ऐतिहासिक काल", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी सभ्यता को आदि-ऐतिहासिक काल (Proto-historic Period) में रखा गया है क्योंकि यहाँ लिखित साक्ष्य (लिपि) तो मिले हैं, लेकिन उन्हें अभी तक पढ़ा नहीं जा सका है।"
    },
    {
        question: "'चिरांद' किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: true },
            { text: "घाघरा", correct: false },
            { text: "गंडक", correct: false },
            { text: "सोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिहार में स्थित चिरांद नवपाषाण कालीन स्थल गंगा नदी के किनारे स्थित है।"
    },
    {
        question: "'नवपाषाण काल' में 'पहिए का आविष्कार' किस उद्देश्य से हुआ?",
        answers: shuffle([
            { text: "कृषि को आसान बनाने के लिए", correct: false },
            { text: "शिकार करने के लिए", correct: false },
            { text: "मिट्टी के बर्तन बनाने के लिए", correct: true },
            { text: "यात्रा करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में पहिए का आविष्कार मुख्य रूप से मिट्टी के बर्तनों को चाक पर बनाने के लिए हुआ था, जिससे बर्तनों का निर्माण आसान और अधिक कुशल हो गया।"
    },
    {
        question: "'भीमबेटका' में शैलचित्रों की खोज किस वर्ष हुई थी?",
        answers: shuffle([
            { text: "1957", correct: true },
            { text: "1963", correct: false },
            { text: "1982", correct: false },
            { text: "2003", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के शैलचित्रों की खोज 1957 में प्रसिद्ध पुरातत्वविद् वी.एस. वाकणकर द्वारा की गई थी।"
    },
    {
        question: "'नवपाषाण काल' में किस स्थान पर 'बैलगाड़ी' के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: true },
            { text: "बुर्जहोम", correct: false },
            { text: "चिरांद", correct: false },
            { text: "कोल्डीहवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़ से पहिए और बैलगाड़ी के शुरुआती साक्ष्य मिले हैं, जो नवपाषाण काल में परिवहन के विकास को दर्शाता है।"
    },
    {
        question: "'लोहियापुरा' किस काल का पुरास्थल है?",
        answers: shuffle([
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false },
            { text: "लौह युग", correct: true },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोहियापुरा (Lohiyapura) उत्तर प्रदेश में स्थित एक लौह युग का स्थल है।"
    },
    {
        question: "'मध्य पुरापाषाण काल' की एक महत्वपूर्ण संस्कृति कौन सी थी?",
        answers: shuffle([
            { text: "मद्रास संस्कृति", correct: false },
            { text: "अश्ल्युलियन संस्कृति", correct: false },
            { text: "मुस्तेरियन संस्कृति", correct: true },
            { text: "सोहन संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य पुरापाषाण काल की मुख्य संस्कृति को मुस्तेरियन संस्कृति कहा जाता है, जो नियंडरथल मानव से जुड़ी थी।"
    },
    {
        question: "'ताम्रपाषाण संस्कृति' में 'वृत्ताकार और आयताकार' मकान किस पुरास्थल से मिले हैं?",
        answers: shuffle([
            { text: "नवदाटोली", correct: false },
            { text: "इनामगाँव", correct: true },
            { text: "आहार", correct: false },
            { text: "कायथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) से ताम्रपाषाण काल के वृत्ताकार और आयताकार मकानों के साक्ष्य मिले हैं।"
    },
    {
        question: "'पुरापाषाण काल' का अंत किस घटना से माना जाता है?",
        answers: shuffle([
            { text: "आग की खोज", correct: false },
            { text: "हिमयुग का अंत", correct: true },
            { text: "कृषि का आरंभ", correct: false },
            { text: "पहिए का आविष्कार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल का अंत लगभग 10,000 ई.पू. में अंतिम हिमयुग की समाप्ति के साथ हुआ, जिसके बाद जलवायु गर्म और शुष्क हो गई।"
    },
    {
        question: "'पुरापाषाण काल' को कितने भागों में विभाजित किया गया है?",
        answers: shuffle([
            { text: "दो (2)", correct: false },
            { text: "तीन (3)", correct: true },
            { text: "चार (4)", correct: false },
            { text: "पाँच (5)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल को तीन भागों में बांटा गया है: निम्न पुरापाषाण काल (Lower Paleolithic), मध्य पुरापाषाण काल (Middle Paleolithic), और उच्च पुरापाषाण काल (Upper Paleolithic)।"
    },
    {
        question: "'कोयम्बटूर' के पास स्थित 'पेलियमपट्टी' किस काल का पुरास्थल है?",
        answers: shuffle([
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false },
            { text: "लौह युग", correct: false },
            { text: "मध्यपाषाण काल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तमिलनाडु में कोयम्बटूर के पास स्थित पेलियमपट्टी एक महत्वपूर्ण मध्यपाषाण कालीन पुरास्थल है, जहाँ से सूक्ष्म पाषाण औजारों के साक्ष्य मिले हैं।"
    },
    {
        question: "'मानव द्वारा पहला पालतू पशु' कौन सा था?",
        answers: shuffle([
            { text: "भेड़", correct: false },
            { text: "बकरी", correct: false },
            { text: "कुत्ता", correct: true },
            { text: "गाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक साक्ष्यों के अनुसार, मानव द्वारा पालतू बनाया गया सबसे पहला जानवर कुत्ता था, जिसके साक्ष्य मध्यपाषाण काल से मिलते हैं।"
    },
    {
        question: "'मालवा संस्कृति' किस काल से संबंधित है?",
        answers: shuffle([
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: true },
            { text: "लौह युग", correct: false },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मालवा संस्कृति मध्य प्रदेश के मालवा क्षेत्र में विकसित हुई ताम्रपाषाण काल की एक संस्कृति थी, जो अपने लाल और काले चित्रित बर्तनों के लिए प्रसिद्ध है।"
    },
    {
        question: "'नवपाषाण काल' के किस स्थल से 'कृषि और पशुपालन' के सबसे पुराने साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: true },
            { text: "कोल्डीहवा", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "चिरांद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़, जो वर्तमान पाकिस्तान में है, नवपाषाण काल का एक प्रमुख स्थल है, जहाँ से कृषि और पशुपालन के सबसे पुराने साक्ष्य (7000 ई.पू.) मिले हैं।"
    },
    {
        question: "'इनामगाँव' से प्राप्त 'संवृत्त शवाधान' (Fractional Burial) से क्या पता चलता है?",
        answers: shuffle([
            { text: "मृतकों को दफनाने का धार्मिक तरीका", correct: false },
            { text: "युद्ध में मारे गए लोगों को दफनाने का तरीका", correct: false },
            { text: "मृतकों को आंशिक रूप से दफनाने का तरीका", correct: true },
            { text: "मृतकों को पूर्ण रूप से दफनाने का तरीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवृत्त शवाधान में पहले शव को खुले में छोड़ दिया जाता था और बाद में बची हुई हड्डियों को इकट्ठा करके दफनाया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ताम्रपाषाण काल की एक प्रमुख प्रथा थी।"
    },
    {
        question: "'मेहरगढ़' किस नदी घाटी पर स्थित है?",
        answers: shuffle([
            { text: "बोलन", correct: true },
            { text: "सिंधु", correct: false },
            { text: "झेलम", correct: false },
            { text: "गंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़, जो नवपाषाण और ताम्रपाषाण काल का एक महत्वपूर्ण स्थल है, पाकिस्तान में बोलन नदी घाटी में स्थित है।"
    },
    {
        question: "'नवपाषाण काल' में 'मनका' बनाने का उद्योग कहाँ स्थित था?",
        answers: shuffle([
            { text: "इनामगाँव", correct: true },
            { text: "बुर्जहोम", correct: false },
            { text: "कोल्डीहवा", correct: false },
            { text: "मेहरगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) से बड़ी संख्या में मनके बनाने के अवशेष और मनके बनाने के कारखाने मिले हैं, जो यहाँ के मनका उद्योग को दर्शाते हैं।"
    },
    {
        question: "'हथनौरा' पुरास्थल किस काल से संबंधित है?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: true },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हथनौरा, मध्य प्रदेश में नर्मदा नदी के किनारे स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से निम्न पुरापाषाण काल का मानव खोपड़ी का जीवाश्म मिला था।"
    },
    {
        question: "'सिंधु घाटी सभ्यता' का सबसे पश्चिमी स्थल कौन सा है?",
        answers: shuffle([
            { text: "लोथल", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "सुत्कागेनडोर", correct: true },
            { text: "आलमगीरपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुत्कागेनडोर, जो वर्तमान पाकिस्तान में है, सिंधु घाटी सभ्यता का सबसे पश्चिमी स्थल है, जो बलूचिस्तान में मकरान तट पर स्थित है।"
    },
    {
        question: "'भीमबेटका' में शैलचित्रों का विषय क्या था?",
        answers: shuffle([
            { text: "शिकार के दृश्य", correct: false },
            { text: "नृत्य और संगीत", correct: false },
            { text: "पशु", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के शैलचित्रों में मानव के दैनिक जीवन, जैसे शिकार, नृत्य, संगीत और पशुओं का चित्रण किया गया है।"
    },
    {
        question: "'लौह युग' के प्रमुख साक्ष्य भारत में कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "दक्षिण भारत", correct: true },
            { text: "उत्तर भारत", correct: false },
            { text: "पूर्वी भारत", correct: false },
            { text: "पश्चिमी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में लौह युग के साक्ष्य मुख्य रूप से दक्षिण भारत में महापाषाण (Megalithic) कब्रों से मिले हैं।"
    },
    {
        question: "'मेगालिथ' का अर्थ क्या है?",
        answers: shuffle([
            { text: "छोटा पत्थर", correct: false },
            { text: "बड़ा पत्थर", correct: true },
            { text: "मिट्टी", correct: false },
            { text: "धातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेगालिथ' शब्द दो ग्रीक शब्दों 'मेगा' (बड़ा) और 'लिथोस' (पत्थर) से मिलकर बना है, जिसका अर्थ है 'बड़ा पत्थर'।"
    },
    {
        question: "'कोल्डीहवा' से प्राप्त 'चावल' के साक्ष्य की तिथि क्या है?",
        answers: shuffle([
            { text: "5000 ई.पू.", correct: false },
            { text: "6500 ई.पू.", correct: true },
            { text: "7000 ई.पू.", correct: false },
            { text: "8000 ई.पू.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्डीहवा (उत्तर प्रदेश) से प्राप्त चावल के साक्ष्य की तिथि लगभग 6500 ई.पू. है, जो भारत में चावल की खेती का सबसे पुराना प्रमाण है।"
    },
    {
        question: "'हाथीदांत' का उपयोग किस ताम्रपाषाण कालीन स्थल पर होता था?",
        answers: shuffle([
            { text: "नवदाटोली", correct: false },
            { text: "इनामगाँव", correct: true },
            { text: "कायथा", correct: false },
            { text: "आहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) से हाथीदांत की चूड़ियाँ और अन्य वस्तुएं मिली हैं, जो इस बात का संकेत है कि यहाँ के लोग हाथीदांत का उपयोग करते थे।"
    },
    {
        question: "'मध्यपाषाण काल' के 'हड्डियों के औजार' कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "सराय नाहर राय", correct: false },
            { text: "बागोर", correct: false },
            { text: "महदहा", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल के इन सभी स्थलों (सराय नाहर राय, बागोर, महदहा) से बड़ी संख्या में हड्डी के औजार मिले हैं।"
    },
    {
        question: "'बुर्जहोम' से प्राप्त 'गर्त आवास' (Pit-dwelling) का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "दुश्मनों से बचाव", correct: false },
            { text: "वर्षा से बचाव", correct: false },
            { text: "ठंड से बचाव", correct: true },
            { text: "जंगली जानवरों से बचाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुर्जहोम (जम्मू-कश्मीर) में लोग जमीन में गड्ढे खोदकर रहते थे, जो यहाँ की ठंडी जलवायु से बचने का एक तरीका था।"
    },
    {
        question: "'ताम्रपाषाण काल' के लोग किस धातु से अपरिचित थे?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "कांस्य", correct: false },
            { text: "लोहा", correct: true },
            { text: "चांदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाण काल के लोग तांबा और कांस्य का उपयोग करना जानते थे, लेकिन लोहे का ज्ञान उन्हें नहीं था।"
    },
    {
        question: "'महानदी कोलफील्ड्स लिमिटेड' (MCL) का मुख्यालय कहाँ है?",
        answers: shuffle([
            { text: "भुवनेश्वर", correct: false },
            { text: "कटक", correct: false },
            { text: "संबलपुर", correct: true },
            { text: "राउरकेला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानदी कोलफील्ड्स लिमिटेड (MCL) का मुख्यालय ओडिशा के संबलपुर में स्थित है, और यह कोल इंडिया लिमिटेड (CIL) की एक सहायक कंपनी है।"
    },
    {
        question: "'भारतीय पुरातत्व सर्वेक्षण' (ASI) की स्थापना कब हुई थी?",
        answers: shuffle([
            { text: "1861", correct: true },
            { text: "1871", correct: false },
            { text: "1881", correct: false },
            { text: "1901", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय पुरातत्व सर्वेक्षण की स्थापना 1861 में ब्रिटिश सरकार द्वारा की गई थी और इसके पहले महानिदेशक अलेक्जेंडर कनिंघम थे।"
    },
    {
        question: "'नवपाषाण काल' में 'चावल' के सबसे पुराने साक्ष्य कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "कोल्डीहवा", correct: true },
            { text: "चिरांद", correct: false },
            { text: "बुर्जहोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्डीहवा (उत्तर प्रदेश) में नवपाषाण काल से संबंधित पुरास्थल से चावल के सबसे पुराने साक्ष्य मिले हैं।"
    },
    {
        question: "'मध्यपाषाण काल' के दौरान 'मनुष्य की दफनाने की प्रथा' कैसी थी?",
        answers: shuffle([
            { text: "मृतकों को जलाया जाता था।", correct: false },
            { text: "मृतकों को दफनाया जाता था।", correct: true },
            { text: "मृतकों को पानी में बहा दिया जाता था।", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल के पुरास्थलों जैसे सराय नाहर राय और महदहा से मानव कंकाल मिले हैं, जो यह दर्शाते हैं कि मृतकों को दफनाने की प्रथा प्रचलित थी।"
    },
    {
        question: "'नवपाषाण काल' में 'कृषि' के सबसे पुराने साक्ष्य कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: true },
            { text: "कोल्डीहवा", correct: false },
            { text: "चिरांद", correct: false },
            { text: "बुर्जहोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़, जो अब पाकिस्तान में है, नवपाषाण काल का एक प्रमुख स्थल है, जहाँ से कृषि (गेहूं और जौ) के सबसे पुराने साक्ष्य मिले हैं।"
    },
    {
        question: "'ताम्रपाषाण काल' में 'इनामगाँव' किस नदी के किनारे स्थित था?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "भीमा", correct: false },
            { text: "मूला", correct: false },
            { text: "घोड", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव, महाराष्ट्र में घोड नदी के किनारे स्थित एक महत्वपूर्ण ताम्रपाषाण कालीन स्थल है।"
    },
    {
        question: "'लौह युग' में 'पेंटेड ग्रे वेयर' (Painted Grey Ware) संस्कृति किस क्षेत्र में पाई जाती है?",
        answers: shuffle([
            { text: "उत्तर भारत", correct: true },
            { text: "दक्षिण भारत", correct: false },
            { text: "पूर्वी भारत", correct: false },
            { text: "पश्चिमी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लौह युग के दौरान उत्तर भारत में 'पेंटेड ग्रे वेयर' संस्कृति का विकास हुआ, जिसमें चित्रित धूसर मृदभांड (बर्तन) प्रमुख थे।"
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