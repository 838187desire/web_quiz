const questions = [
    {
        topHeading: "प्रागैतिहासिक काल पर आधारित बहुविकल्पीय प्रश्न part 10 (quiz_no.10)"
    },
    {
        question: "'जोरवे संस्कृति' किस राज्य में स्थित थी?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "गुजरात", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोरवे संस्कृति (ताम्रपाषाण काल) का प्रमुख केंद्र महाराष्ट्र में था, जिसके प्रमुख स्थल इनामगाँव और दायमाबाद थे।"
    },
    {
        question: "'मध्यपाषाण काल' में 'मानव द्वारा पहला पालतू जानवर' कौन सा था?",
        answers: shuffle([
            { text: "भैंस", correct: false },
            { text: "कुत्ता", correct: true },
            { text: "घोड़ा", correct: false },
            { text: "गाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल में मानव ने शिकार में सहायता के लिए कुत्ते को अपना पहला पालतू जानवर बनाया था।"
    },
    {
        question: "'कोल्डीहवा' से 'चावल' के साक्ष्य की तिथि क्या है?",
        answers: shuffle([
            { text: "5000 ई.पू.", correct: false },
            { text: "6000 ई.पू.", correct: true },
            { text: "7000 ई.पू.", correct: false },
            { text: "8000 ई.पू.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के कोल्डीहवा में 6000 ई.पू. के आसपास चावल की खेती के सबसे पुराने साक्ष्य मिले हैं।"
    },
    {
        question: "'बुर्जहोम' से प्राप्त 'गर्तवास' (pit-dwelling) किस उद्देश्य से बनाए गए थे?",
        answers: shuffle([
            { text: "कृषि के लिए", correct: false },
            { text: "जल संचयन के लिए", correct: false },
            { text: "ठंड से बचाव के लिए", correct: true },
            { text: "जंगली जानवरों से बचाव के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जम्मू-कश्मीर में स्थित बुर्जहोम में लोग जमीन के अंदर गड्ढों में रहते थे, जो यहाँ की ठंडी जलवायु से बचने का एक तरीका था।"
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
        question: "'भीमबेटका' में शैलचित्रों का मुख्य विषय क्या था?",
        answers: shuffle([
            { text: "धार्मिक संस्कार", correct: false },
            { text: "शिकार के दृश्य", correct: true },
            { text: "खेती के तरीके", correct: false },
            { text: "युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के शैलचित्रों में शिकार के दृश्य, सामूहिक नृत्य और जानवरों के चित्र प्रमुखता से दर्शाए गए हैं।"
    },
    {
        question: "'चिरांद' से प्राप्त 'हड्डी के औजार' किस जानवर के थे?",
        answers: shuffle([
            { text: "कुत्ता", correct: false },
            { text: "हिरण", correct: true },
            { text: "भैंस", correct: false },
            { text: "बकरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिहार में स्थित चिरांद नामक नवपाषाण कालीन स्थल से हिरण के सींगों (Antlers) से बने बड़ी संख्या में औजार और हथियार मिले हैं।"
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
        question: "'महापाषाण संस्कृति' का मुख्य केंद्र कहाँ था?",
        answers: shuffle([
            { text: "गंगा घाटी", correct: false },
            { text: "नर्मदा घाटी", correct: false },
            { text: "दक्षिण भारत", correct: true },
            { text: "उत्तरी हिमालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापाषाण (Megalithic) संस्कृति, जो बड़े पत्थरों से बनी कब्रों के लिए प्रसिद्ध है, का उदय और विस्तार मुख्य रूप से दक्षिण भारत में हुआ।"
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
        question: "'हथनौरा' पुरास्थल से प्राप्त 'मानव जीवाश्म' की प्रजाति क्या थी?",
        answers: shuffle([
            { text: "होमो सेपियंस", correct: false },
            { text: "होमो इरेक्टस", correct: true },
            { text: "नियंडरथल", correct: false },
            { text: "होमो हैबिलिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हथनौरा (मध्य प्रदेश) से प्राप्त मानव खोपड़ी का जीवाश्म 'होमो इरेक्टस' का है, जिसे 'नर्मदा मानव' भी कहा जाता है।"
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
        question: "'मध्यपाषाण काल' की 'पशुपालन' के सबसे पुराने साक्ष्य कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "बागोर और आदमगढ़", correct: true },
            { text: "मेहरगढ़ और कोल्डीहवा", correct: false },
            { text: "सराय नाहर राय और महदहा", correct: false },
            { text: "बुर्जहोम और चिरांद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल में पशुपालन के सबसे पुराने साक्ष्य राजस्थान के बागोर और मध्य प्रदेश के आदमगढ़ से मिले हैं।"
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
        question: "'कायथा संस्कृति' के प्रमुख बर्तनों पर किस रंग का उपयोग किया गया था?",
        answers: shuffle([
            { text: "काला और लाल", correct: false },
            { text: "भूरा और बैंगनी", correct: true },
            { text: "नीला और सफेद", correct: false },
            { text: "हरा और पीला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायथा संस्कृति (ताम्रपाषाण काल) के बर्तन भूरे रंग के थे, जिन पर बैंगनी रंग से ज्यामितीय आकृतियाँ बनाई गई थीं।"
    },
    {
        question: "'आग की खोज' किस पुरापाषाण काल में हुई थी?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: true },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आग की खोज निम्न पुरापाषाण काल में हुई थी, लेकिन इसका नियंत्रित और व्यापक उपयोग मध्य पुरापाषाण काल में शुरू हुआ।"
    },
    {
        question: "'ताम्रपाषाण काल' का कौन सा पुरास्थल 'सबसे बड़ा मानव बस्ती' माना जाता है?",
        answers: shuffle([
            { text: "आहार", correct: false },
            { text: "नवदाटोली", correct: false },
            { text: "इनामगाँव", correct: true },
            { text: "दायमाबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव (महाराष्ट्र) ताम्रपाषाण काल का एक सबसे बड़ा और महत्वपूर्ण स्थल है।"
    },
    {
        question: "'नवपाषाण काल' में 'हड्डियों से बने औजार' कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "कोल्डीहवा", correct: false },
            { text: "चिरांद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिहार में स्थित चिरांद नामक नवपाषाण कालीन स्थल से हिरण के सींगों (Antlers) से बने बड़ी संख्या में औजार और हथियार मिले हैं।"
    },
    {
        question: "'लौह युग' में 'दक्षिण भारत' में 'लौह औजारों' के साक्ष्य किस संस्कृति से मिलते हैं?",
        answers: shuffle([
            { text: "महापाषाण संस्कृति", correct: true },
            { text: "ताम्रपाषाण संस्कृति", correct: false },
            { text: "हड़प्पा संस्कृति", correct: false },
            { text: "पेंटेड ग्रे वेयर संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण भारत में लौह युग का आरंभ महापाषाण (Megalithic) संस्कृति से हुआ, जहाँ बड़े पत्थरों से बनी कब्रों से लोहे के औजार और हथियार मिले हैं।"
    },
    {
        question: "'पुरापाषाण काल' में 'मनुष्य' किस प्रकार के उपकरण बनाता था?",
        answers: shuffle([
            { text: "सूक्ष्म पाषाण (Microliths)", correct: false },
            { text: "पॉलिश की हुई कुल्हाड़ी", correct: false },
            { text: "हस्तकुठार (Handaxe)", correct: true },
            { text: "तांबे के औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल का मनुष्य हस्तकुठार और विदारणी जैसे बड़े और अपरिष्कृत पत्थर के औजार बनाता था।"
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
        question: "'रॉबर्ट ब्रूस फुट' को 'भारतीय प्रागितिहास का जनक' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि उन्होंने प्रागैतिहासिक स्थलों की खोज की।", correct: false },
            { text: "क्योंकि उन्होंने पहला पुरापाषाण औजार खोजा।", correct: true },
            { text: "क्योंकि उन्होंने प्रागैतिहासिक संस्कृतियों को वर्गीकृत किया।", correct: false },
            { text: "उपरोक्त सभी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉबर्ट ब्रूस फुट ने 1863 में भारत में पहला पुरापाषाण औजार खोजा, जिसके कारण उन्हें 'भारतीय प्रागितिहास का जनक' कहा जाता है।"
    },
    {
        question: "'नवपाषाण काल' में 'स्थायी जीवन' का पहला साक्ष्य कहाँ से मिला है?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: true },
            { text: "कोल्डीहवा", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "चिरांद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़ से कृषि और पशुपालन के साथ-साथ मिट्टी और धूप में सूखी ईंटों से बने घरों के साक्ष्य मिले हैं, जो स्थायी जीवन को दर्शाते हैं।"
    },
    {
        question: "'आहार संस्कृति' के लोग किस धातु का उपयोग करते थे?",
        answers: shuffle([
            { text: "तांबा", correct: true },
            { text: "लोहा", correct: false },
            { text: "कांस्य", correct: false },
            { text: "चांदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार संस्कृति (बनास संस्कृति) में तांबे के औजार और बर्तन बड़ी मात्रा में मिले हैं, जिससे पता चलता है कि यहाँ के लोग तांबे का उपयोग व्यापक रूप से करते थे।"
    },
    {
        question: "'कोल्डीहवा' किस नदी घाटी पर स्थित है?",
        answers: shuffle([
            { text: "नर्मदा घाटी", correct: false },
            { text: "बेलन घाटी", correct: true },
            { text: "सोन घाटी", correct: false },
            { text: "गंगा घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्डीहवा, उत्तर प्रदेश में बेलन नदी घाटी में स्थित है, और यह नवपाषाण काल का एक महत्वपूर्ण स्थल है।"
    },
    {
        question: "'पुरापाषाण काल' को 'निम्न पुरापाषाण काल' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि इस काल में मानव बहुत निम्न स्तर पर था।", correct: false },
            { text: "क्योंकि यह पुरापाषाण काल का सबसे निचला या प्रारंभिक चरण था।", correct: true },
            { text: "क्योंकि इस काल में औजारों का आकार बहुत छोटा था।", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निम्न पुरापाषाण काल, पुरापाषाण काल का सबसे प्रारंभिक चरण था, जिसमें मानव ने सबसे पहले पत्थर के अपरिष्कृत औजारों का निर्माण शुरू किया था।"
    },
    {
        question: "'नवपाषाण काल' में 'पशुपालन' और 'कृषि' के साक्ष्य कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "कोल्डीहवा", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल के इन सभी स्थलों, मेहरगढ़, कोल्डीहवा और बुर्जहोम से कृषि और पशुपालन के साक्ष्य मिले हैं, जो उस काल के स्थायी जीवन को दर्शाते हैं।"
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
        question: "'मध्यपाषाण काल' के 'औजारों' की क्या विशेषता थी?",
        answers: shuffle([
            { text: "बड़े और अपरिष्कृत", correct: false },
            { text: "पॉलिश किए हुए", correct: false },
            { text: "बहुत छोटे (माइक्रोलिथ)", correct: true },
            { text: "धातु से बने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल के औजारों का आकार बहुत छोटा था, इसलिए उन्हें 'सूक्ष्म पाषाण' या 'माइक्रोलिथ' कहा जाता है।"
    },
    {
        question: "'बुर्जहोम' से प्राप्त 'गर्तवास' (pit-dwelling) किस उद्देश्य से बनाए गए थे?",
        answers: shuffle([
            { text: "जल संचयन के लिए", correct: false },
            { text: "शिकार के लिए", correct: false },
            { text: "ठंड से बचाव के लिए", correct: true },
            { text: "जंगली जानवरों से बचाव के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जम्मू-कश्मीर में स्थित बुर्जहोम में लोग जमीन के अंदर गड्ढों में रहते थे, जो यहाँ की ठंडी जलवायु से बचने का एक तरीका था।"
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
        question: "'भीमबेटका' में शैलचित्रों का मुख्य रंग क्या था?",
        answers: shuffle([
            { text: "हरा और पीला", correct: false },
            { text: "लाल और सफेद", correct: true },
            { text: "नीला और काला", correct: false },
            { text: "नारंगी और भूरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के शैलचित्रों में मुख्य रूप से लाल और सफेद रंगों का उपयोग किया गया है, जो लोहे और चूने के पत्थरों से बनाए गए थे।"
    },
    {
        question: "'मध्यपाषाण काल' के किस स्थल से 'हड्डी के आभूषण' मिले हैं?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "महदहा", correct: true },
            { text: "सराय नाहर राय", correct: false },
            { text: "आदमगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महदहा (उत्तर प्रदेश) से मध्यपाषाण काल के हड्डी के आभूषण और औजार बड़ी संख्या में मिले हैं।"
    },
    {
        question: "'लौह युग' में 'पेंटेड ग्रे वेयर' (Painted Grey Ware) संस्कृति के प्रमुख केंद्र कहाँ थे?",
        answers: shuffle([
            { text: "गंगा-यमुना दोआब", correct: true },
            { text: "नर्मदा घाटी", correct: false },
            { text: "दक्षिण भारत", correct: false },
            { text: "पूर्वी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेंटेड ग्रे वेयर' (चित्रित धूसर मृदभांड) संस्कृति का केंद्र गंगा-यमुना दोआब था, जहाँ से इसके साक्ष्य बड़ी संख्या में मिले हैं।"
    },
    {
        question: "'महापाषाण संस्कृति' का मुख्य केंद्र कहाँ था?",
        answers: shuffle([
            { text: "गंगा घाटी", correct: false },
            { text: "नर्मदा घाटी", correct: false },
            { text: "दक्षिण भारत", correct: true },
            { text: "उत्तरी हिमालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापाषाण (Megalithic) संस्कृति, जो बड़े पत्थरों से बनी कब्रों के लिए प्रसिद्ध है, का उदय और विस्तार मुख्य रूप से दक्षिण भारत में हुआ।"
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
        question: "'बुर्जहोम' से प्राप्त 'कब्रों' की क्या विशेषता थी?",
        answers: shuffle([
            { text: "शवों को जलाया गया था।", correct: false },
            { text: "शवों को पत्थरों के साथ दफनाया गया था।", correct: false },
            { text: "शवों के साथ कुत्ते को दफनाया गया था।", correct: true },
            { text: "शवों को खुले में छोड़ दिया गया था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुर्जहोम (जम्मू-कश्मीर) में कुछ कब्रों में मानव शवों के साथ कुत्ते के शवों को भी दफनाया गया था, जो यहाँ की एक अनूठी विशेषता है।"
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
        question: "'मध्यपाषाण काल' की 'पशुपालन' के सबसे पुराने साक्ष्य कहाँ से मिले हैं?",
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
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायथा (मध्य प्रदेश) से पकी हुई मिट्टी (terracotta) की मातृ देवी की प्रतिमाएं मिली हैं, जो तत्कालीन धार्मिक विश्वासों को दर्शाती हैं।"
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
        question: "'भीमबेटका' को यूनेस्को की विश्व धरोहर स्थल में कब शामिल किया गया?",
        answers: shuffle([
            { text: "1982", correct: false },
            { text: "1999", correct: false },
            { text: "2003", correct: true },
            { text: "2011", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के शैलचित्रों को 2003 में यूनेस्को द्वारा विश्व धरोहर स्थल घोषित किया गया था।"
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