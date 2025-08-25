const questions = [
    {
        topHeading: "प्रागैतिहासिक काल पर आधारित बहुविकल्पीय प्रश्न part 6 (quiz_no.6)"
    },
    {
        question: "'पुरापाषाण काल' को कितने भागों में विभाजित किया गया है?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल को निम्न पुरापाषाण काल, मध्य पुरापाषाण काल और उच्च पुरापाषाण काल में विभाजित किया गया है।"
    },
    {
        question: "'ताम्रपाषाण काल' की 'मालवा संस्कृति' किस राज्य में स्थित थी?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मालवा संस्कृति मध्य प्रदेश के मालवा क्षेत्र में विकसित हुई थी, और इसका प्रमुख स्थल नवदाटोली था।"
    },
    {
        question: "'नवपाषाण काल' का कौन सा पुरास्थल 'गेहूं' और 'जौ' के सबसे पुराने साक्ष्य के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: true },
            { text: "कोल्डीहवा", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "चिरांद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़, जो अब पाकिस्तान में है, नवपाषाण काल का एक प्रमुख स्थल है, जहाँ से 7000 ई.पू. के गेहूं और जौ की खेती के सबसे पुराने साक्ष्य मिले हैं।"
    },
    {
        question: "'भारत में पहली बार' 'पुरापाषाण औजार' कहाँ से मिला था?",
        answers: shuffle([
            { text: "सोहन घाटी", correct: false },
            { text: "बेलन घाटी", correct: false },
            { text: "पल्लवरम", correct: true },
            { text: "हथनौरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉबर्ट ब्रूस फुट ने 1863 में तमिलनाडु के पल्लवरम से भारत का पहला पुरापाषाण कालीन हस्तकुठार (Handaxe) खोजा था।"
    },
    {
        question: "'मध्यपाषाण काल' के 'औजार' किस प्रकार के थे?",
        answers: shuffle([
            { text: "बड़े और अपरिष्कृत", correct: false },
            { text: "पॉलिश किए हुए", correct: false },
            { text: "छोटे और नुकीले (माइक्रोलिथ)", correct: true },
            { text: "धातु से बने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल में औजारों का आकार बहुत छोटा हो गया था, जिन्हें 'सूक्ष्म पाषाण' या 'माइक्रोलिथ' कहा जाता है।"
    },
    {
        question: "'बुर्जहोम' से प्राप्त 'गर्तवास' (pit-dwelling) का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "शिकार के लिए", correct: false },
            { text: "भंडारण के लिए", correct: false },
            { text: "ठंड से बचाव के लिए", correct: true },
            { text: "जंगली जानवरों से बचाव के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जम्मू-कश्मीर में स्थित बुर्जहोम में लोग जमीन के अंदर गड्ढों में रहते थे, जो यहाँ की ठंडी जलवायु से बचने का एक तरीका था।"
    },
    {
        question: "'लौह युग' में 'पेंटेड ग्रे वेयर' (Painted Grey Ware) संस्कृति किस क्षेत्र से संबंधित है?",
        answers: shuffle([
            { text: "उत्तर भारत", correct: true },
            { text: "दक्षिण भारत", correct: false },
            { text: "पूर्वी भारत", correct: false },
            { text: "पश्चिमी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेंटेड ग्रे वेयर' (चित्रित धूसर मृदभांड) संस्कृति लौह युग की एक विशिष्ट पहचान है, जो उत्तर भारत के गंगा-यमुना दोआब क्षेत्र में पाई जाती है।"
    },
    {
        question: "'चिरांद' से प्राप्त 'हड्डी के औजार' किस काल के हैं?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: true },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिरांद (बिहार) नवपाषाण कालीन स्थल है, जहाँ से हिरण के सींगों से बने बड़ी संख्या में हड्डी के औजार मिले हैं।"
    },
    {
        question: "'आहार संस्कृति' को 'बनास संस्कृति' क्यों कहते हैं?",
        answers: shuffle([
            { text: "यह बनास नदी के किनारे स्थित थी।", correct: true },
            { text: "यहाँ बनास नाम का एक राजा था।", correct: false },
            { text: "यहाँ बनास नाम का एक औजार मिला था।", correct: false },
            { text: "यहाँ बनास नाम का एक शहर था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार संस्कृति (ताम्रपाषाण काल) का विकास राजस्थान में बनास नदी के किनारे हुआ था, इसलिए इसे 'बनास संस्कृति' भी कहते हैं।"
    },
    {
        question: "'इनामगाँव' से प्राप्त 'मातृ देवी' की प्रतिमाएं किस चीज से बनी हैं?",
        answers: shuffle([
            { text: "पत्थर", correct: false },
            { text: "धातु", correct: false },
            { text: "हड्डी", correct: false },
            { text: "पकी हुई मिट्टी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) से पकी हुई मिट्टी (terracotta) से बनी मातृ देवी की प्रतिमाएं मिली हैं।"
    },
    {
        question: "'भीमबेटका' किसलिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "बौद्ध प्रतिमाएं", correct: false },
            { text: "शैलचित्र", correct: true },
            { text: "हड़प्पा कालीन अवशेष", correct: false },
            { text: "पुरापाषाण कालीन औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका (मध्य प्रदेश) अपने हजारों प्रागैतिहासिक शैलचित्रों के लिए विश्व प्रसिद्ध है, जो पुरापाषाण और मध्यपाषाण काल के मानव जीवन को दर्शाते हैं।"
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
        question: "'पुरापाषाण काल' में 'मानव का जीवनयापन' कैसा था?",
        answers: shuffle([
            { text: "स्थायी और कृषि-आधारित", correct: false },
            { text: "खानाबदोश और शिकारी-संग्राहक", correct: true },
            { text: "पशुपालक और खानाबदोश", correct: false },
            { text: "व्यापार-आधारित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल का मानव भोजन की तलाश में भटकता रहता था, इसलिए उसका जीवन खानाबदोश और शिकारी-संग्राहक था।"
    },
    {
        question: "'कोल्डीहवा' से प्राप्त 'चावल' के साक्ष्य किस काल के हैं?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: true },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्डीहवा, उत्तर प्रदेश में बेलन नदी घाटी में स्थित है, और यहाँ से नवपाषाण काल में चावल की खेती के साक्ष्य मिले हैं।"
    },
    {
        question: "'इनामगाँव' से किस फसल की खेती के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "गेहूं और जौ", correct: false },
            { text: "बाजरा और चावल", correct: false },
            { text: "दालें और मटर", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) से गेहूं, जौ, बाजरा, चावल, दालों और मटर सहित कई फसलों की खेती के साक्ष्य मिले हैं।"
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
        question: "'भारतीय पुरातत्व सर्वेक्षण' (ASI) की स्थापना किसके काल में हुई थी?",
        answers: shuffle([
            { text: "लॉर्ड विलियम बेंटिंक", correct: false },
            { text: "लॉर्ड कर्जन", correct: false },
            { text: "लॉर्ड कैनिंग", correct: true },
            { text: "लॉर्ड डलहौजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय पुरातत्व सर्वेक्षण की स्थापना 1861 में लॉर्ड कैनिंग के शासनकाल में हुई थी, और इसके पहले महानिदेशक अलेक्जेंडर कनिंघम थे।"
    },
    {
        question: "'ताम्रपाषाण काल' का कौन सा पुरास्थल 'गुजरात' में स्थित है?",
        answers: shuffle([
            { text: "कायथा", correct: false },
            { text: "इनामगाँव", correct: false },
            { text: "लोटेश्वर", correct: true },
            { text: "नवदाटोली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोटेश्वर, गुजरात में स्थित एक ताम्रपाषाण कालीन स्थल है।"
    },
    {
        question: "'मध्यपाषाण काल' में 'पशुपालन' के सबसे पुराने साक्ष्य कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "बागोर और आदमगढ़", correct: true },
            { text: "मेहरगढ़ और कोल्डीहवा", correct: false },
            { text: "सराय नाहर राय और महदहा", correct: false },
            { text: "बुर्जहोम और चिरांद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल में पशुपालन के सबसे पुराने साक्ष्य राजस्थान के बागोर और मध्य प्रदेश के आदमगढ़ से मिले हैं।"
    },
    {
        question: "'कायथा संस्कृति' के किस पुरास्थल से 'पकी हुई मिट्टी' की मातृ देवी की प्रतिमाएं मिली हैं?",
        answers: shuffle([
            { text: "कायथा", correct: true },
            { text: "इनामगाँव", correct: false },
            { text: "नवदाटोली", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायथा (मध्य प्रदेश) से पकी हुई मिट्टी (terracotta) की मातृ देवी की प्रतिमाएं मिली हैं, जो तत्कालीन धार्मिक विश्वासों को दर्शाती हैं."
    },
    {
        question: "'महापाषाण संस्कृति' किस काल से संबंधित है?",
        answers: shuffle([
            { text: "ताम्रपाषाण काल", correct: false },
            { text: "लौह युग", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापाषाण (Megalithic) संस्कृति, जो बड़े पत्थरों से बनी कब्रों के लिए प्रसिद्ध है, दक्षिण भारत में लौह युग से संबंधित है।"
    },
    {
        question: "'हथनौरा' पुरास्थल से प्राप्त 'मानव जीवाश्म' की प्रजाति क्या थी?",
        answers: shuffle([
            { text: "होमो सेपियंस", correct: false },
            { text: "होमो इरेक्टस", correct: true },
            { text: "नियंडरथल", correct: false },
            { text: "होमो हैबिलिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हथनौरा से प्राप्त मानव खोपड़ी का जीवाश्म 'होमो इरेक्टस' का है, जिसे 'नर्मदा मानव' भी कहा जाता है।"
    },
    {
        question: "'नवपाषाण काल' में 'बुर्जहोम' से किस जानवर को दफनाने के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "भेड़", correct: false },
            { text: "बकरी", correct: false },
            { text: "कुत्ता", correct: true },
            { text: "गाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुर्जहोम (जम्मू-कश्मीर) में कुछ कब्रों में मानव शवों के साथ कुत्ते के शवों को भी दफनाया गया था, जो यहाँ की एक अनूठी विशेषता है।"
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
        question: "'ताम्रपाषाण काल' का कौन सा पुरास्थल 'दायमाबाद' किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "गोदावरी", correct: true },
            { text: "भीमा", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "मूला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दायमाबाद, महाराष्ट्र में गोदावरी नदी के किनारे स्थित एक महत्वपूर्ण ताम्रपाषाण कालीन स्थल है।"
    },
    {
        question: "'पुरापाषाण काल' को 'पुराना पाषाण काल' क्यों कहते हैं?",
        answers: shuffle([
            { text: "क्योंकि इस काल के औजार बहुत पुराने हैं।", correct: false },
            { text: "क्योंकि इस काल का मानव बहुत पुराना है।", correct: false },
            { text: "क्योंकि यह मानव इतिहास का सबसे पुराना काल है।", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरापाषाण' (Paleolithic) शब्द ग्रीक भाषा के 'पैलेओ' (पुराना) और 'लिथोस' (पत्थर) से मिलकर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मानव इतिहास का सबसे पुराना काल है, जिसमें सबसे पुराने और अपरिष्कृत पत्थर के औजार मिले हैं।"
    },
    {
        question: "'लौह युग' में 'पेंटेड ग्रे वेयर' (Painted Grey Ware) संस्कृति किस क्षेत्र से संबंधित है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "गंगा-यमुना दोआब", correct: true },
            { text: "गुजरात", correct: false },
            { text: "तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लौह युग में 'पेंटेड ग्रे वेयर' (चित्रित धूसर मृदभांड) संस्कृति का प्रमुख केंद्र गंगा-यमुना दोआब क्षेत्र था, जहाँ से इसके साक्ष्य बड़ी संख्या में मिले हैं।"
    },
    {
        question: "'कोल्डीहवा' से 'चावल' के साक्ष्य के साथ और क्या मिला है?",
        answers: shuffle([
            { text: "गेहूँ", correct: false },
            { text: "जौ", correct: false },
            { text: "मिट्टी के बर्तन", correct: true },
            { text: "धातु के औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्डीहवा (उत्तर प्रदेश) में नवपाषाण काल के चावल के साक्ष्य के साथ-साथ हाथ से बने मिट्टी के बर्तन भी मिले हैं।"
    },
    {
        question: "'मध्यपाषाण काल' के 'मानव कंकाल' कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "सराय नाहर राय", correct: false },
            { text: "महदहा", correct: false },
            { text: "आदमगढ़", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल के इन सभी स्थलों (सराय नाहर राय, महदहा, आदमगढ़) से मानव कंकाल मिले हैं, जो उस काल की दफनाने की प्रथा को दर्शाते हैं।"
    },
    {
        question: "'कायथा संस्कृति' की पहचान क्या है?",
        answers: shuffle([
            { text: "लाल और काले चित्रित बर्तन", correct: false },
            { text: "भूरे और बैंगनी चित्रित बर्तन", correct: true },
            { text: "सादे मिट्टी के बर्तन", correct: false },
            { text: "काली और नीली मिट्टी के बर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायथा संस्कृति (ताम्रपाषाण काल) के बर्तन भूरे रंग के थे, जिन पर बैंगनी रंग से ज्यामितीय आकृतियाँ बनाई गई थीं।"
    },
    {
        question: "'रॉबर्ट ब्रूस फुट' ने भारत में पहली बार पुरापाषाण कालीन औजार कब खोजा?",
        answers: shuffle([
            { text: "1861", correct: false },
            { text: "1863", correct: true },
            { text: "1865", correct: false },
            { text: "1871", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉबर्ट ब्रूस फुट ने 1863 में तमिलनाडु के पल्लवरम से भारत का पहला पुरापाषाण कालीन हस्तकुठार (Handaxe) खोजा था।"
    },
    {
        question: "'चिरांद' से प्राप्त 'हड्डी के औजारों' के लिए कौन सा जानवर जिम्मेदार था?",
        answers: shuffle([
            { text: "भैंस", correct: false },
            { text: "गाय", correct: false },
            { text: "हिरण", correct: true },
            { text: "बकरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिरांद (बिहार) में नवपाषाण काल के हिरण के सींगों (Antlers) से बने बड़ी संख्या में औजार और हथियार मिले हैं।"
    },
    {
        question: "'महापाषाण संस्कृति' का मुख्य केंद्र कहाँ था?",
        answers: shuffle([
            { text: "गंगा घाटी", correct: false },
            { text: "नर्मदा घाटी", correct: false },
            { text: "दक्षिण भारत", correct: true },
            { text: "पूर्वी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापाषाण (Megalithic) संस्कृति, जो बड़े पत्थरों से बनी कब्रों के लिए प्रसिद्ध है, का उदय और विस्तार मुख्य रूप से दक्षिण भारत में हुआ।"
    },
    {
        question: "'इनामगाँव' से प्राप्त 'मातृ देवी' की प्रतिमाएं किस चीज से बनी हैं?",
        answers: shuffle([
            { text: "पत्थर", correct: false },
            { text: "मिट्टी", correct: true },
            { text: "धातु", correct: false },
            { text: "हड्डी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) से पकी हुई मिट्टी (terracotta) से बनी मातृ देवी की प्रतिमाएं मिली हैं।"
    },
    {
        question: "'बुर्जहोम' से प्राप्त 'गर्त आवास' (pit-dwelling) किस उद्देश्य से बनाए गए थे?",
        answers: shuffle([
            { text: "जल संचयन के लिए", correct: false },
            { text: "शिकार के लिए", correct: false },
            { text: "ठंड से बचाव के लिए", correct: true },
            { text: "जंगली जानवरों से बचाव के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुर्जहोम (जम्मू-कश्मीर) में लोग जमीन के अंदर गड्ढों में रहते थे, जो यहाँ की ठंडी जलवायु से बचने का एक तरीका था।"
    },
    {
        question: "'मध्यपाषाण काल' की 'अग्नि' का उपयोग कहाँ होता था?",
        answers: shuffle([
            { text: "केवल प्रकाश के लिए", correct: false },
            { text: "भोजन पकाने और सुरक्षा के लिए", correct: true },
            { text: "केवल गर्मी के लिए", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल में मानव ने आग का नियंत्रित उपयोग भोजन पकाने, खुद को गर्म रखने और जंगली जानवरों से अपनी रक्षा के लिए करना शुरू कर दिया था।"
    },
    {
        question: "'लौह युग' में 'पेंटेड ग्रे वेयर' (PGW) संस्कृति के लोग किस प्रकार के घरों में रहते थे?",
        answers: shuffle([
            { text: "मिट्टी के घर", correct: true },
            { text: "लकड़ी के घर", correct: false },
            { text: "पत्थर के घर", correct: false },
            { text: "घास-फूस के घर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेंटेड ग्रे वेयर संस्कृति के लोग मिट्टी और घास-फूस के बने घरों में रहते थे।"
    },
    {
        question: "'भारत में मानव' का पहला जीवाश्म किस नदी घाटी में मिला था?",
        answers: shuffle([
            { text: "सिंधु घाटी", correct: false },
            { text: "गंगा घाटी", correct: false },
            { text: "नर्मदा घाटी", correct: true },
            { text: "ब्रह्मपुत्र घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में 'होमो इरेक्टस' (नर्मदा मानव) का जीवाश्म मध्य प्रदेश की नर्मदा घाटी में स्थित हथनौरा पुरास्थल से मिला था।"
    },
    {
        question: "'नवपाषाण काल' में 'पहिए का आविष्कार' क्यों हुआ था?",
        answers: shuffle([
            { text: "कृषि को आसान बनाने के लिए", correct: false },
            { text: "शिकार करने के लिए", correct: false },
            { text: "मिट्टी के बर्तन बनाने के लिए", correct: true },
            { text: "यात्रा करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में पहिए का आविष्कार मुख्य रूप से मिट्टी के बर्तनों को चाक पर बनाने के लिए हुआ था, जिससे बर्तनों का निर्माण आसान और अधिक कुशल हो गया।"
    },
    {
        question: "'ताम्रपाषाण काल' का कौन सा पुरास्थल 'अन्नागार' (Granary) के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "इनामगाँव", correct: true },
            { text: "नवदाटोली", correct: false },
            { text: "कायथा", correct: false },
            { text: "आहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) में ताम्रपाषाण काल का एक विशाल अन्नागार मिला है, जो इस बात का संकेत है कि यहाँ के लोग कृषि पर निर्भर थे।"
    },
    {
        question: "'अल्टामिरा गुफाओं' में किस जानवर के चित्र सबसे अधिक हैं?",
        answers: shuffle([
            { text: "घोड़ा", correct: false },
            { text: "हिरण", correct: false },
            { text: "बाइसन (जंगली भैंसा)", correct: true },
            { text: "जंगली सूअर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेन की अल्टामिरा गुफाओं में पुरापाषाण कालीन चित्रकला में बाइसन के चित्र सबसे अधिक हैं।"
    },
    {
        question: "'नवदाटोली' किस ताम्रपाषाण कालीन संस्कृति से संबंधित है?",
        answers: shuffle([
            { text: "कायथा संस्कृति", correct: false },
            { text: "आहार संस्कृति", correct: false },
            { text: "मालवा संस्कृति", correct: true },
            { text: "जोरवे संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवदाटोली, मध्य प्रदेश में स्थित है, और यह मालवा संस्कृति का एक प्रमुख स्थल है।"
    },
    {
        question: "'मानव द्वारा पहला पालतू जानवर' कौन सा था?",
        answers: shuffle([
            { text: "गाय", correct: false },
            { text: "भेड़", correct: false },
            { text: "बकरी", correct: false },
            { text: "कुत्ता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक साक्ष्यों के अनुसार, मानव द्वारा पालतू बनाया गया सबसे पहला जानवर कुत्ता था।"
    },
    {
        question: "'भारत में पुरापाषाण काल' के औजारों की सबसे बड़ी विशेषता क्या थी?",
        answers: shuffle([
            { text: "वे बहुत छोटे थे।", correct: false },
            { text: "वे पॉलिश किए हुए थे।", correct: false },
            { text: "वे बड़े और अपरिष्कृत थे।", correct: true },
            { text: "वे धातु से बने थे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पुरापाषाण काल के औजार, जैसे हस्तकुठार और विदारणी, बड़े और अपरिष्कृत होते थे, जिन्हें पत्थरों के टुकड़ों से बनाया जाता था।"
    },
    {
        question: "'इनामगाँव' से किस प्रकार के शवाधान मिले हैं?",
        answers: shuffle([
            { text: "पूर्ण शवाधान", correct: false },
            { text: "आंशिक शवाधान", correct: false },
            { text: "कलश शवाधान", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) में पूर्ण शवाधान, आंशिक शवाधान और कलश शवाधान की प्रथाएं प्रचलित थीं।"
    },
    {
        question: "'चिरांद' से प्राप्त 'हड्डी के औजार' किस काल के हैं?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: true },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिरांद (बिहार) एक नवपाषाण कालीन स्थल है, जहाँ से हिरण के सींगों से बने हड्डी के औजार मिले हैं।"
    },
    {
        question: "'ताम्रपाषाण काल' का कौन सा पुरास्थल 'गुजरात' में स्थित है?",
        answers: shuffle([
            { text: "कायथा", correct: false },
            { text: "इनामगाँव", correct: false },
            { text: "लोटेश्वर", correct: true },
            { text: "नवदाटोली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोटेश्वर, गुजरात में स्थित एक ताम्रपाषाण कालीन स्थल है।"
    },
    {
        question: "'पेंटेड ग्रे वेयर' (Painted Grey Ware) संस्कृति किस काल से संबंधित है?",
        answers: shuffle([
            { text: "ताम्रपाषाण काल", correct: false },
            { text: "लौह युग", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "हड़प्पा काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेंटेड ग्रे वेयर' (चित्रित धूसर मृदभांड) संस्कृति लौह युग की एक विशिष्ट पहचान है।"
    },
    {
        question: "'भीमबेटका' को यूनेस्को की विश्व धरोहर स्थल में कब शामिल किया गया?",
        answers: shuffle([
            { text: "1982", correct: false },
            { text: "1999", correct: false },
            { text: "2003", correct: true },
            { text: "2011", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के शैलचित्रों को 2003 में यूनेस्को द्वारा विश्व धरोहर स्थल घोषित किया गया था।"
    },
    {
        question: "'नवपाषाण काल' में 'मनका' बनाने का उद्योग कहाँ था?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "चिरांद", correct: false },
            { text: "इनामगाँव", correct: true },
            { text: "बुर्जहोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) से बड़ी संख्या में मनके बनाने के अवशेष और मनके बनाने के कारखाने मिले हैं, जो यहाँ के मनका उद्योग को दर्शाते हैं।"
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