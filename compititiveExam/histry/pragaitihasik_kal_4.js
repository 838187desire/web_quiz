const questions = [
    {
        topHeading: "प्रागैतिहासिक काल पर आधारित बहुविकल्पीय प्रश्न part 4 (quiz_no.4)"
    },
    {
        question: "'पुरापाषाण काल' में 'मनुष्य की दफनाने की प्रथा' कैसी थी?",
        answers: shuffle([
            { text: "मृतकों को जलाया जाता था।", correct: false },
            { text: "मृतकों को दफनाया नहीं जाता था।", correct: true },
            { text: "मृतकों को आंशिक रूप से दफनाया जाता था।", correct: false },
            { text: "मृतकों को पूर्ण रूप से दफनाया जाता था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल में मानव कंकाल बहुत कम मिले हैं, जो दर्शाता है कि इस काल में दफनाने की कोई विशेष प्रथा नहीं थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रथा मध्यपाषाण काल से शुरू हुई।"
    },
    {
        question: "'चिरांद' से प्राप्त हड्डी के औजार किस जानवर से बने हैं?",
        answers: shuffle([
            { text: "भैंस", correct: false },
            { text: "हिरण", correct: true },
            { text: "बकरी", correct: false },
            { text: "कुत्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिहार में स्थित चिरांद नामक नवपाषाण कालीन स्थल से हिरण के सींगों (Antlers) से बने बड़ी संख्या में औजार और हथियार मिले हैं।"
    },
    {
        question: "'सिंधु घाटी सभ्यता' किस काल से संबंधित है?",
        answers: shuffle([
            { text: "प्रागैतिहासिक काल", correct: false },
            { text: "आद्य-ऐतिहासिक काल", correct: true },
            { text: "ऐतिहासिक काल", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी सभ्यता को आद्य-ऐतिहासिक काल (Proto-historic Period) में रखा जाता है, क्योंकि यहाँ लिखित साक्ष्य तो मिले हैं, लेकिन उन्हें अभी तक पढ़ा नहीं जा सका है।"
    },
    {
        question: "'बुर्जहोम' से प्राप्त 'गर्तवास' (pit-dwelling) का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "जंगली जानवरों से सुरक्षा", correct: false },
            { text: "ठंड से सुरक्षा", correct: true },
            { text: "वर्षा से सुरक्षा", correct: false },
            { text: "दुश्मनों से सुरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जम्मू-कश्मीर में स्थित बुर्जहोम में लोग जमीन के अंदर गड्ढों में रहते थे, जो यहाँ की ठंडी जलवायु से बचने का एक तरीका था।"
    },
    {
        question: "'लौह युग' की शुरुआत भारत में किस काल के बाद हुई?",
        answers: shuffle([
            { text: "ताम्रपाषाण काल", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "कांस्य युग", correct: false },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में लौह युग का आगमन ताम्रपाषाण काल के बाद हुआ, जब मानव ने पहली बार लोहे का उपयोग करना शुरू किया।"
    },
    {
        question: "'भीमबेटका' में शैलचित्रों का सबसे अधिक विस्तार किस काल में हुआ?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के अधिकांश और सबसे विस्तृत चित्र मध्यपाषाण काल से संबंधित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन चित्रों में शिकार, नृत्य और अन्य सामाजिक गतिविधियाँ दर्शाई गई हैं।"
    },
    {
        question: "'पुरापाषाण काल' का कौन सा पुरास्थल 'अश्म-कुल्हाड़ी' (Acheulian handaxe) के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "हथनौरा", correct: false },
            { text: "सोहन घाटी", correct: false },
            { text: "पल्लवरम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉबर्ट ब्रूस फुट ने 1863 में पल्लवरम (तमिलनाडु) से भारत का पहला पुरापाषाण कालीन अश्म-कुल्हाड़ी (हस्तकुठार) खोजा था।"
    },
    {
        question: "'नवदाटोली' पुरास्थल किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "कृष्णा", correct: false },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवदाटोली, मध्य प्रदेश में नर्मदा नदी के किनारे स्थित एक महत्वपूर्ण ताम्रपाषाण कालीन स्थल है।"
    },
    {
        question: "'कोल्डीहवा' से प्राप्त 'चावल' के साक्ष्य की तिथि क्या है?",
        answers: shuffle([
            { text: "5000 ई.पू.", correct: false },
            { text: "6500 ई.पू.", correct: true },
            { text: "7000 ई.पू.", correct: false },
            { text: "8000 ई.पू.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्डीहवा (उत्तर प्रदेश) से प्राप्त चावल के साक्ष्य की तिथि लगभग 6500 ई.पू. है, जो भारतीय उपमहाद्वीप में चावल की खेती का सबसे पुराना प्रमाण है।"
    },
    {
        question: "'मालवा संस्कृति' की विशेषता क्या थी?",
        answers: shuffle([
            { text: "लाल और काले चित्रित बर्तन", correct: true },
            { text: "लाल और सफेद चित्रित बर्तन", correct: false },
            { text: "काले और नीले चित्रित बर्तन", correct: false },
            { text: "केवल सादे बर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मालवा संस्कृति (ताम्रपाषाण काल) अपने लाल और काले रंग से चित्रित बर्तनों के लिए प्रसिद्ध थी, जिन पर ज्यामितीय आकृतियाँ बनी होती थीं।"
    },
    {
        question: "'ताम्रपाषाण काल' में 'इनामगाँव' से किस फसल के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "गेहूं और जौ", correct: false },
            { text: "बाजरा और चावल", correct: false },
            { text: "मटर और दालें", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) से गेहूं, जौ, बाजरा, चावल और विभिन्न प्रकार की दालों की खेती के साक्ष्य मिले हैं, जो यहाँ की समृद्ध कृषि को दर्शाते हैं।"
    },
    {
        question: "'पुरापाषाण काल' के औजार किस तरह के थे?",
        answers: shuffle([
            { text: "छोटे और नुकीले", correct: false },
            { text: "पॉलिश किए हुए", correct: false },
            { text: "बड़े और अपरिष्कृत", correct: true },
            { text: "धातु से बने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल में मानव ने पत्थर के बड़े और अपरिष्कृत टुकड़ों से हस्तकुठार और विदारणी जैसे औजार बनाए थे।"
    },
    {
        question: "'मानव' द्वारा 'कृषि का आरंभ' किस काल में हुआ?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: true },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल (Neolithic Period) में ही मानव ने कृषि करना सीखा, जिससे उसकी जीवनशैली में क्रांतिकारी बदलाव आया।"
    },
    {
        question: "'पशुपालन' और 'माइक्रोलिथ' (Microliths) किस काल की विशेषता थी?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल में मानव ने छोटे और नुकीले पत्थर के औजारों (माइक्रोलिथ) का उपयोग करना शुरू किया, और इसी काल में पशुपालन के भी शुरुआती साक्ष्य मिलते हैं।"
    },
    {
        question: "'मेगालिथ' संस्कृति का प्रमुख केंद्र कहाँ था?",
        answers: shuffle([
            { text: "गंगा घाटी", correct: false },
            { text: "नर्मदा घाटी", correct: false },
            { text: "दक्षिण भारत", correct: true },
            { text: "उत्तरी हिमालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेगालिथ (महापाषाण) संस्कृति, जो बड़े पत्थरों से बनी कब्रों के लिए प्रसिद्ध है, का उदय और विस्तार मुख्य रूप से दक्षिण भारत में हुआ।"
    },
    {
        question: "'चिरांद' से प्राप्त 'हड्डी के औजार' किस प्रकार के हैं?",
        answers: shuffle([
            { text: "चाकू और सुई", correct: false },
            { text: "कुदाल और हल", correct: false },
            { text: "तीर-कमान", correct: false },
            { text: "नुकीले हथियार और औजार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिरांद से हिरण के सींगों से बने कई तरह के नुकीले हथियार और औजार मिले हैं, जिनमें सुई और चाकू जैसे औजार भी शामिल हैं।"
    },
    {
        question: "'इनामगाँव' से किस फसल की खेती के साक्ष्य नहीं मिले हैं?",
        answers: shuffle([
            { text: "गेहूं", correct: false },
            { text: "जौ", correct: false },
            { text: "मक्का", correct: true },
            { text: "दालें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मक्का एक नई विश्व (New World) की फसल है, जो भारत में बाद में आई।<br><br><i class='fa-solid fa-angles-right icon'></i> इनामगाँव से गेहूं, जौ, बाजरा, चावल और दालों के साक्ष्य मिले हैं।"
    },
    {
        question: "'लौह युग' की शुरुआत भारत में लगभग कब हुई थी?",
        answers: shuffle([
            { text: "3000 ई.पू.", correct: false },
            { text: "2000 ई.पू.", correct: false },
            { text: "1000 ई.पू.", correct: true },
            { text: "500 ई.पू.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में लोहे का उपयोग लगभग 1000 ई.पू. के आसपास शुरू हुआ, जिसने महाजनपद काल के विकास में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "'नवपाषाण काल' में मानव ने 'कपड़ा बनाना' किस चीज से सीखा?",
        answers: shuffle([
            { text: "कपास", correct: false },
            { text: "ऊन", correct: false },
            { text: "सन और घास", correct: true },
            { text: "रेशम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में मानव ने सन और घास के रेशों से कपड़ा बनाना सीखा था।<br><br><i class='fa-solid fa-angles-right icon'></i> कपास का उपयोग हड़प्पा काल में शुरू हुआ।"
    },
    {
        question: "'भीमबेटका' किस युग से संबंधित है?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के शैलचित्रों में पुरापाषाण, मध्यपाषाण और नवपाषाण तीनों कालों के साक्ष्य मिलते हैं, लेकिन अधिकांश चित्र मध्यपाषाण काल के हैं।"
    },
    {
        question: "'मेहरगढ़' से 'कृषि' के साक्ष्य की तिथि क्या है?",
        answers: shuffle([
            { text: "5000 ई.पू.", correct: false },
            { text: "6000 ई.पू.", correct: false },
            { text: "7000 ई.पू.", correct: true },
            { text: "8000 ई.पू.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़ (पाकिस्तान) में कृषि (गेहूं और जौ) के सबसे पुराने साक्ष्य मिले हैं, जिनकी तिथि लगभग 7000 ई.पू. है।"
    },
    {
        question: "'ताम्रपाषाण काल' का कौन सा पुरास्थल 'सबसे बड़ा बस्ती' माना जाता है?",
        answers: shuffle([
            { text: "कायथा", correct: false },
            { text: "नवदाटोली", correct: true },
            { text: "आहार", correct: false },
            { text: "इनामगाँव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवदाटोली (मध्य प्रदेश) ताम्रपाषाण काल का एक सबसे बड़ा और महत्वपूर्ण स्थल है।"
    },
    {
        question: "'पेंटेड ग्रे वेयर' (Painted Grey Ware) किस काल की पहचान है?",
        answers: shuffle([
            { text: "हड़प्पा काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false },
            { text: "लौह युग", correct: true },
            { text: "नवपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेंटेड ग्रे वेयर' (चित्रित धूसर मृदभांड) संस्कृति लौह युग से जुड़ी थी, जो उत्तरी भारत में फैली थी।"
    },
    {
        question: "'अल्टामिरा गुफाएं' किस काल से संबंधित हैं?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: true },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेन में स्थित अल्टामिरा गुफाएं पुरापाषाण काल के शैलचित्रों के लिए विश्व प्रसिद्ध हैं।"
    },
    {
        question: "'भारत में पहली बार मानव का जीवाश्म' कहाँ से मिला था?",
        answers: shuffle([
            { text: "पल्लवरम", correct: false },
            { text: "हथनौरा", correct: true },
            { text: "बागोर", correct: false },
            { text: "भीमबेटका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में मानव खोपड़ी का पहला जीवाश्म (होमो इरेक्टस) 1982 में मध्य प्रदेश के हथनौरा से मिला था।"
    },
    {
        question: "'पुरापाषाण काल' के 'होमो इरेक्टस' मानव के साक्ष्य भारत में कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "पल्लवरम", correct: false },
            { text: "हथनौरा", correct: true },
            { text: "बागोर", correct: false },
            { text: "मेहरगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हथनौरा (मध्य प्रदेश) से 1982 में 'नर्मदा मानव' की खोपड़ी का जीवाश्म मिला था, जो भारत में 'होमो इरेक्टस' मानव का पहला और एकमात्र साक्ष्य है।"
    },
    {
        question: "'भीमबेटका' के शैलचित्रों का मुख्य रंग क्या था?",
        answers: shuffle([
            { text: "हरा और पीला", correct: false },
            { text: "लाल और सफेद", correct: true },
            { text: "नीला और काला", correct: false },
            { text: "नारंगी और भूरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के शैलचित्रों में मुख्य रूप से लाल और सफेद रंगों का उपयोग किया गया है, जो लोहे और चूने के पत्थरों से बनाए गए थे।"
    },
    {
        question: "'नवपाषाण काल' में 'स्थायी जीवन' का पहला साक्ष्य कहाँ से मिला है?",
        answers: shuffle([
            { text: "चिरांद", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "मेहरगढ़", correct: true },
            { text: "कोल्डीहवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़ से कृषि और पशुपालन के साथ-साथ मिट्टी और धूप में सूखी ईंटों से बने घरों के साक्ष्य मिले हैं, जो स्थायी जीवन को दर्शाते हैं।"
    },
    {
        question: "'मध्यपाषाण काल' के किस स्थल से 'अग्नि' के उपयोग का प्रमाण मिला है?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "आदमगढ़", correct: true },
            { text: "लंगनाज", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश के आदमगढ़ पुरास्थल से अग्नि के उपयोग के साक्ष्य मिले हैं।"
    },
    {
        question: "'मालवा संस्कृति' किस नदी के किनारे स्थित थी?",
        answers: shuffle([
            { text: "नर्मदा", correct: true },
            { text: "चंबल", correct: false },
            { text: "माही", correct: false },
            { text: "बेतवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मालवा संस्कृति ताम्रपाषाण काल की थी, जिसका विकास नर्मदा नदी के किनारे हुआ था, और इसका प्रमुख स्थल नवदाटोली था।"
    },
    {
        question: "'इनामगाँव' से प्राप्त 'सवाधान' किस प्रकार के थे?",
        answers: shuffle([
            { text: "पूर्ण दफन", correct: false },
            { text: "कलश दफन", correct: false },
            { text: "आंशिक दफन", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव में शवों को पूर्ण रूप से, कलश में और आंशिक रूप से दफनाने की प्रथा प्रचलित थी, जो यहाँ की विविधता को दर्शाती है।"
    },
    {
        question: "'ताम्रपाषाण काल' का कौन सा पुरास्थल 'सबसे अधिक ताम्र औजारों' के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "कायथा", correct: true },
            { text: "आहार", correct: false },
            { text: "नवदाटोली", correct: false },
            { text: "इनामगाँव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायथा (मध्य प्रदेश) से बड़ी संख्या में तांबे की चूड़ियाँ और औजार मिले हैं, जो इसे ताम्रपाषाण काल का एक प्रमुख तांबा केंद्र बनाते हैं।"
    },
    {
        question: "'लौह युग' में 'Painted Grey Ware' (PGW) संस्कृति किस क्षेत्र में फैली थी?",
        answers: shuffle([
            { text: "गंगा-यमुना दोआब", correct: true },
            { text: "नर्मदा घाटी", correct: false },
            { text: "दक्षिण भारत", correct: false },
            { text: "पूर्वी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लौह युग में 'पेंटेड ग्रे वेयर' संस्कृति का केंद्र गंगा-यमुना दोआब था, जहाँ से इसके साक्ष्य बड़ी संख्या में मिले हैं।"
    },
    {
        question: "'बुर्जहोम' से प्राप्त 'हड्डी के औजार' किस प्रकार के थे?",
        answers: shuffle([
            { text: "सुई और चाकू", correct: false },
            { text: "कुल्हाड़ी और फावड़ा", correct: false },
            { text: "तीर और भाला", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुर्जहोम (जम्मू-कश्मीर) से हड्डी के कई तरह के औजार मिले हैं, जिनमें सुई, चाकू, कुल्हाड़ी, तीर और भाला शामिल हैं।"
    },
    {
        question: "'आग की खोज' किस काल में हुई?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: true },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आग की खोज निम्न पुरापाषाण काल में हुई थी, जिसका उपयोग मानव ने ठंड से बचने और जानवरों को दूर रखने के लिए किया था।"
    },
    {
        question: "'नवपाषाण काल' में 'बुर्जहोम' से किस जानवर को दफनाने के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "भेड़", correct: false },
            { text: "बकरी", correct: false },
            { text: "कुत्ता", correct: true },
            { text: "गाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुर्जहोम की एक अनूठी विशेषता यह है कि यहाँ के गर्तवासों में मानव शवों के साथ कुत्ते के शवों को भी दफनाया गया था।"
    },
    {
        question: "'कोल्डीहवा' से 'चावल' के साक्ष्य किस काल के हैं?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: true },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्डीहवा, उत्तर प्रदेश में बेलन नदी घाटी में स्थित है, और यहाँ से नवपाषाण काल में चावल की खेती के साक्ष्य मिले हैं।"
    },
    {
        question: "'मध्यपाषाण काल' में किस स्थान से 'हड्डी के आभूषण' मिले हैं?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "महदहा", correct: true },
            { text: "सराय नाहर राय", correct: false },
            { text: "आदमगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महदहा (उत्तर प्रदेश) से मध्यपाषाण काल के हड्डी के आभूषण और औजार बड़ी संख्या में मिले हैं।"
    },
    {
        question: "'हथनौरा' से प्राप्त 'मानव जीवाश्म' की प्रजाति क्या थी?",
        answers: shuffle([
            { text: "होमो सेपियंस", correct: false },
            { text: "होमो इरेक्टस", correct: true },
            { text: "नियंडरथल", correct: false },
            { text: "होमो हैबिलिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हथनौरा से प्राप्त मानव खोपड़ी का जीवाश्म 'होमो इरेक्टस' का है, जिसे 'नर्मदा मानव' भी कहा जाता है।"
    },
    {
        question: "'लौह युग' की शुरुआत भारत में किस काल के बाद हुई?",
        answers: shuffle([
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: true },
            { text: "कांस्य युग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाण काल में तांबे का उपयोग होता था, जबकि इसके बाद के लौह युग में लोहे का उपयोग शुरू हुआ।"
    },
    {
        question: "'ताम्रपाषाण काल' में 'जोरवे संस्कृति' का केंद्र कहाँ था?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोरवे संस्कृति महाराष्ट्र में विकसित हुई थी, जिसके प्रमुख स्थल इनामगाँव, दायमाबाद और चंदोली थे।"
    },
    {
        question: "'चिरांद' से प्राप्त 'मकानों' का आकार कैसा था?",
        answers: shuffle([
            { text: "वृत्ताकार और आयताकार", correct: true },
            { text: "केवल वृत्ताकार", correct: false },
            { text: "केवल आयताकार", correct: false },
            { text: "त्रिकोणीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिरांद में नवपाषाण काल के वृत्ताकार और आयताकार दोनों तरह के मकानों के साक्ष्य मिले हैं।"
    },
    {
        question: "'मध्य पुरापाषाण काल' का मुख्य औजार क्या था?",
        answers: shuffle([
            { text: "हस्तकुठार", correct: false },
            { text: "फलक (Flake) औजार", correct: true },
            { text: "ब्लेड", correct: false },
            { text: "पॉलिश की हुई कुल्हाड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य पुरापाषाण काल के दौरान मानव ने पत्थरों को तोड़कर उनके फलकों (flakes) से विभिन्न प्रकार के औजार बनाए थे।"
    },
    {
        question: "'मेगालिथ' का अर्थ क्या है?",
        answers: shuffle([
            { text: "बड़ा पत्थर", correct: true },
            { text: "छोटा पत्थर", correct: false },
            { text: "धातु", correct: false },
            { text: "गुफा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेगालिथ, जिसका अर्थ है 'बड़ा पत्थर', दक्षिण भारत में लौह युग से जुड़ी कब्रों और स्मारकों को दर्शाता है।"
    },
    {
        question: "'पेंटेड ग्रे वेयर' (Painted Grey Ware) संस्कृति किस काल की है?",
        answers: shuffle([
            { text: "ताम्रपाषाण काल", correct: false },
            { text: "लौह युग", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "हड़प्पा काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेंटेड ग्रे वेयर' (चित्रित धूसर मृदभांड) लौह युग की एक विशिष्ट पहचान है।"
    },
    {
        question: "'भीमबेटका' किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "नर्मदा", correct: true },
            { text: "सोन", correct: false },
            { text: "चंबल", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका की गुफाएं मध्य प्रदेश में नर्मदा नदी घाटी के पास स्थित हैं, जो प्रागैतिहासिक शैलचित्रों के लिए प्रसिद्ध हैं।"
    },
    {
        question: "'ताम्रपाषाण काल' में 'नवदाटोली' का उत्खनन किसने किया था?",
        answers: shuffle([
            { text: "वी.एस. वाकणकर", correct: false },
            { text: "एच.डी. सांकलिया", correct: true },
            { text: "दयाराम साहनी", correct: false },
            { text: "बी.बी. लाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. एच.डी. सांकलिया ने नवदाटोली (मध्य प्रदेश) का उत्खनन किया था, जो ताम्रपाषाण काल का एक महत्वपूर्ण स्थल है।"
    },
    {
        question: "'पुरापाषाण काल' में मानव का मुख्य जीवनयापन क्या था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "शिकार और खाद्य संग्रहण", correct: true },
            { text: "पशुपालन", correct: false },
            { text: "व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल का मानव पूरी तरह से शिकार और खाद्य संग्रहण पर निर्भर था, क्योंकि उसे कृषि और पशुपालन का ज्ञान नहीं था।"
    },
    {
        question: "'आहार संस्कृति' के लोग किस धातु का उपयोग करते थे?",
        answers: shuffle([
            { text: "तांबा", correct: true },
            { text: "लोहा", correct: false },
            { text: "कांस्य", correct: false },
            { text: "चांदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार संस्कृति (बनास संस्कृति) में तांबे के औजारों और बर्तनों का उपयोग व्यापक रूप से होता था, इसलिए इसे ताम्रपाषाण काल की संस्कृति माना जाता है।"
    },
    {
        question: "'नवपाषाण काल' में 'पहिए का आविष्कार' किस उद्देश्य से हुआ?",
        answers: shuffle([
            { text: "परिवहन के लिए", correct: false },
            { text: "चाक पर बर्तन बनाने के लिए", correct: true },
            { text: "कृषि के लिए", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में पहिए का आविष्कार मुख्य रूप से मिट्टी के बर्तनों को चाक पर बनाने के लिए हुआ था, बाद में इसका उपयोग परिवहन के लिए भी किया गया।"
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