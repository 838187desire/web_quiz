const questions = [
    {
        topHeading: "प्रागैतिहासिक काल पर आधारित बहुविकल्पीय प्रश्न part 2 (quiz_no.2)"
    },
    {
        question: "'सोहन संस्कृति' किस काल से संबंधित है?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: true },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोहन संस्कृति, जिसे 'चोपिंग-चापर संस्कृति' भी कहते हैं, निम्न पुरापाषाण काल की एक प्रमुख संस्कृति है, जो पाकिस्तान में सोहन नदी घाटी में विकसित हुई थी।"
    },
    {
        question: "'मध्य पुरापाषाण काल' को और किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "फलक संस्कृति (Flake Culture)", correct: true },
            { text: "हस्तकुठार संस्कृति", correct: false },
            { text: "चोपिंग-चापर संस्कृति", correct: false },
            { text: "सूक्ष्म पाषाण संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य पुरापाषाण काल के औजारों में बड़े पत्थरों की जगह पत्थरों के फलकों (flakes) से बने औजारों का प्रयोग होने लगा था, इसलिए इसे 'फलक संस्कृति' कहा जाता है।"
    },
    {
        question: "'हथनौरा' पुरास्थल किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "नर्मदा", correct: true },
            { text: "सोन", correct: false },
            { text: "बेतवा", correct: false },
            { text: "चंबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हथनौरा, मध्य प्रदेश में नर्मदा नदी के किनारे स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से 1982 में भारत में मानव खोपड़ी का पहला जीवाश्म (होमो इरेक्टस) मिला था।"
    },
    {
        question: "'ताम्रपाषाण काल' के किस स्थल से 'अन्नागार' (Granary) के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "आहार", correct: false },
            { text: "नवदाटोली", correct: false },
            { text: "कायथा", correct: false },
            { text: "इनामगाँव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव, महाराष्ट्र में स्थित एक ताम्रपाषाण कालीन स्थल है, जहाँ से बस्ती के बीच में एक विशाल अन्नागार मिला है, जो दर्शाता है कि यहाँ के लोग कृषि पर निर्भर थे।"
    },
    {
        question: "'कृषि का आविष्कार' किस काल की सबसे महत्वपूर्ण उपलब्धि थी?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: true },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृषि का आविष्कार नवपाषाण काल की सबसे बड़ी क्रांति थी, जिसने मानव के जीवन को स्थायी बना दिया और खाद्य उत्पादक के रूप में विकसित किया।"
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
        question: "'इनामगाँव' किस ताम्रपाषाण कालीन संस्कृति से संबंधित है?",
        answers: shuffle([
            { text: "कायथा संस्कृति", correct: false },
            { text: "मालवा संस्कृति", correct: false },
            { text: "आहार संस्कृति", correct: false },
            { text: "जोरवे संस्कृति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगाँव, महाराष्ट्र में स्थित है और यह जोरवे संस्कृति का सबसे बड़ा और महत्वपूर्ण स्थल है।"
    },
    {
        question: "'नवपाषाण काल' के 'पोलीस किए गए पत्थर के औजार' कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "बुर्जहोम", correct: false },
            { text: "चिरांद", correct: false },
            { text: "मेहरगढ़", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल की पहचान ही पॉलिश किए गए और घिसे हुए पत्थर के औजारों से होती है, और ऐसे औजार इन सभी प्रमुख स्थलों (बुर्जहोम, चिरांद, मेहरगढ़) से मिले हैं।"
    },
    {
        question: "'बेलन घाटी' से किस काल के पुरातात्विक साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश की बेलन घाटी में पुरापाषाण, मध्यपाषाण और नवपाषाण तीनों कालों के महत्वपूर्ण पुरास्थल मिले हैं, जो यहाँ की लंबी मानव बसावट को दर्शाते हैं।"
    },
    {
        question: "'अल्टामिरा गुफाओं' में किस जानवर के चित्र सबसे अधिक मिले हैं?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "गैंडा", correct: false },
            { text: "बाइसन (जंगली भैंसा)", correct: true },
            { text: "घोड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेन की अल्टामिरा गुफाओं में पुरापाषाण कालीन चित्रों में बाइसन, घोड़े और हिरण जैसे जानवरों का चित्रण किया गया है, जिसमें बाइसन के चित्र प्रमुख हैं।"
    },
    {
        question: "'मध्य पुरापाषाण काल' का मुख्य मानव कौन था?",
        answers: shuffle([
            { text: "होमो सेपियंस", correct: false },
            { text: "होमो इरेक्टस", correct: false },
            { text: "नियंडरथल", correct: true },
            { text: "होमो हैबिलिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य पुरापाषाण काल के दौरान मानव की मुख्य प्रजाति नियंडरथल थी।"
    },
    {
        question: "'कोल्डीहवा' से 'चावल' के साक्ष्य के अलावा और क्या मिला है?",
        answers: shuffle([
            { text: "मवेशियों का बाड़ा", correct: false },
            { text: "मिट्टी के बर्तन", correct: true },
            { text: "गर्तवास", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्डीहवा, जो चावल के प्राचीनतम साक्ष्य के लिए प्रसिद्ध है, से नवपाषाण काल के मिट्टी के बर्तन भी मिले हैं, जो यहाँ के जीवन स्तर को दर्शाते हैं।"
    },
    {
        question: "'ताम्रपाषाण काल' में किस रंग के बर्तनों का अधिक उपयोग होता था?",
        answers: shuffle([
            { text: "लाल और काला", correct: true },
            { text: "भूरा और सफेद", correct: false },
            { text: "नीला और हरा", correct: false },
            { text: "केवल भूरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाण काल की विशेषता लाल और काले रंग के चित्रित मिट्टी के बर्तन थे, जिन पर ज्यामितीय आकृतियाँ बनी होती थीं।"
    },
    {
        question: "'नवपाषाण काल' में मानव 'स्थाई जीवन' क्यों जीने लगा?",
        answers: shuffle([
            { text: "मौसम बदलने के कारण", correct: false },
            { text: "कृषि के कारण", correct: true },
            { text: "सुरक्षा के लिए", correct: false },
            { text: "पहिए के आविष्कार के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में कृषि का विकास होने से मानव को भोजन की तलाश में भटकना नहीं पड़ता था, जिससे वह एक ही स्थान पर रहकर स्थाई जीवन जीने लगा।"
    },
    {
        question: "'पल्लवरम' पुरास्थल किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लवरम तमिलनाडु में स्थित है, जहाँ से रॉबर्ट ब्रूस फुट ने 1863 में भारत में पहला पुरापाषाण कालीन हस्तकुठार खोजा था।"
    },
    {
        question: "'भीमबेटका' किसके लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "बौद्ध प्रतिमाएं", correct: false },
            { text: "शैलचित्र", correct: true },
            { text: "हड़प्पा कालीन अवशेष", correct: false },
            { text: "पुरापाषाण कालीन औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका (मध्य प्रदेश) अपने हजारों शैलचित्रों के लिए विश्व प्रसिद्ध है, जो पुरापाषाण और मध्यपाषाण काल के मानव जीवन को दर्शाते हैं।"
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
        question: "'मेगालिथ' का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "छोटा पत्थर", correct: false },
            { text: "बड़ा पत्थर", correct: true },
            { text: "धातु", correct: false },
            { text: "गुफा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेगालिथ' ग्रीक भाषा के 'मेगास' (बड़ा) और 'लिथोस' (पत्थर) शब्दों से मिलकर बना है, जिसका अर्थ है 'बड़ा पत्थर'।"
    },
    {
        question: "'पशुपालन' और 'सूक्ष्म पाषाण औजार' किस काल की विशेषता है?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल में सूक्ष्म पाषाण औजारों का उपयोग व्यापक रूप से हुआ और इसी काल में पशुपालन के भी आरंभिक साक्ष्य मिलते हैं।"
    },
    {
        question: "'भीमबेटका' की खोज किसने की थी?",
        answers: shuffle([
            { text: "रॉबर्ट ब्रूस फुट", correct: false },
            { text: "वी. एस. वाकणकर", correct: true },
            { text: "दयाराम साहनी", correct: false },
            { text: "आर. बी. घोष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध पुरातत्वविद् वी. एस. वाकणकर ने 1957 में भीमबेटका की गुफाओं की खोज की थी।"
    },
    {
        question: "'नवपाषाण काल' में मानव के 'बर्तन बनाने के लिए चाक' का उपयोग किस लिए होता था?",
        answers: shuffle([
            { text: "भोजन पकाने के लिए", correct: false },
            { text: "मिट्टी के बर्तन बनाने के लिए", correct: true },
            { text: "जल संग्रह के लिए", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में पहिए के आविष्कार के बाद, उसका उपयोग मिट्टी के बर्तन बनाने वाले चाक के रूप में हुआ, जिससे बर्तनों का निर्माण आसान और अधिक कुशल हो गया।"
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
        question: "'जोरवे संस्कृति' किस राज्य की प्रमुख संस्कृति थी?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोरवे संस्कृति महाराष्ट्र में विकसित हुई ताम्रपाषाण काल की एक महत्वपूर्ण संस्कृति थी, जिसके प्रमुख स्थल इनामगाँव, चंदोली और दायमाबाद थे।"
    },
    {
        question: "'लौह युग' में भारत में किस धातु का उपयोग शुरू हुआ?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "कांस्य", correct: false },
            { text: "लोहा", correct: true },
            { text: "चांदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लौह युग की शुरुआत के साथ ही मानव ने लोहे का उपयोग करना शुरू कर दिया, जिससे कृषि और युद्ध के औजारों में एक बड़ा बदलाव आया।"
    },
    {
        question: "'मानव खोपड़ी का पहला जीवाश्म' भारत में कहाँ मिला था?",
        answers: shuffle([
            { text: "पल्लवरम", correct: false },
            { text: "हथनौरा", correct: true },
            { text: "आदमगढ़", correct: false },
            { text: "मेहरगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हथनौरा, मध्य प्रदेश में स्थित एक पुरापाषाण कालीन स्थल है, जहाँ से 1982 में भारत में मानव खोपड़ी का पहला जीवाश्म मिला था।"
    },
    {
        question: "'जोरवे संस्कृति' का सबसे बड़ा स्थल कौन सा है?",
        answers: shuffle([
            { text: "नवदाटोली", correct: false },
            { text: "इनामगाँव", correct: false },
            { text: "दायमाबाद", correct: true },
            { text: "चंदोली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दायमाबाद, महाराष्ट्र में स्थित जोरवे संस्कृति का सबसे बड़ा स्थल है, जहाँ से रथ, हाथी और गैंडे की कांस्य प्रतिमाएं मिली हैं।"
    },
    {
        question: "किस पुरास्थल से गर्त आवास (pit-dwelling) के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "बुर्जहोम", correct: true },
            { text: "कोल्डीहवा", correct: false },
            { text: "सराय नाहर राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुर्जहोम (जम्मू-कश्मीर) नवपाषाण कालीन स्थल है, जहाँ से गर्त आवास (जमीन में गड्ढे खोदकर बनाए गए घर) के साक्ष्य मिले हैं, जो ठंड से बचने के लिए बनाए जाते थे।"
    },
    {
        question: "'ताम्रपाषाण काल' में किस स्थान पर 'शवों को कलश में दफनाया' जाता था?",
        answers: shuffle([
            { text: "मालवा", correct: false },
            { text: "आहार", correct: false },
            { text: "जोरवे", correct: true },
            { text: "कायथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोरवे संस्कृति (महाराष्ट्र) में मृतकों को उनके घरों के फर्श के नीचे, उत्तर-दक्षिण दिशा में, कलश में दफनाया जाता था।"
    },
    {
        question: "किस काल को 'सूक्ष्म पाषाण युग' भी कहा जाता है?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल में औजारों का आकार छोटा हो गया था, और सूक्ष्म पाषाण (Microliths) का उपयोग बड़े पैमाने पर होता था, इसलिए इसे 'सूक्ष्म पाषाण युग' भी कहते हैं।"
    },
    {
        question: "'महापाषाण संस्कृति' का उदय मुख्य रूप से कहाँ हुआ?",
        answers: shuffle([
            { text: "उत्तर भारत", correct: false },
            { text: "दक्षिण भारत", correct: true },
            { text: "पूर्वी भारत", correct: false },
            { text: "पश्चिमी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापाषाण (Megalithic) संस्कृति का उदय और विस्तार मुख्य रूप से दक्षिण भारत में हुआ, जहाँ बड़े पत्थरों से बनी कब्रें और स्मारक बड़ी संख्या में पाए गए हैं।"
    },
    {
        question: "'भीमबेटका' गुफाएं किस नदी के किनारे स्थित हैं?",
        answers: shuffle([
            { text: "नर्मदा", correct: true },
            { text: "सोन", correct: false },
            { text: "चंबल", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका की गुफाएं और शैलाश्रय मध्य प्रदेश में नर्मदा नदी घाटी के पास स्थित हैं, जो प्रागैतिहासिक शैलचित्रों के लिए प्रसिद्ध हैं।"
    },
    {
        question: "'आहार संस्कृति' के लोग किस धातु से अपरिचित थे?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "कांस्य", correct: false },
            { text: "चांदी", correct: false },
            { text: "लोहा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार संस्कृति ताम्रपाषाण काल की थी, और इस काल के लोग तांबा और कांस्य का उपयोग करते थे, लेकिन उन्हें लोहे का ज्ञान नहीं था।"
    },
    {
        question: "'गेहूं और जौ' के सबसे पुराने साक्ष्य किस नवपाषाण कालीन स्थल से मिले हैं?",
        answers: shuffle([
            { text: "बुर्जहोम", correct: false },
            { text: "मेहरगढ़", correct: true },
            { text: "कोल्डीहवा", correct: false },
            { text: "चिरांद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़ (पाकिस्तान) नवपाषाण काल का एक प्रमुख स्थल है, जहाँ से गेहूं और जौ की खेती के सबसे पुराने साक्ष्य मिले हैं, जिनकी तिथि लगभग 7000 ई.पू. है।"
    },
    {
        question: "'चिरांद' से प्राप्त हड्डी के औजार मुख्य रूप से किसके बने हैं?",
        answers: shuffle([
            { text: "हिरण के सींग", correct: true },
            { text: "हाथी दांत", correct: false },
            { text: "भेड़ की हड्डी", correct: false },
            { text: "गाय की हड्डी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिहार में स्थित चिरांद नवपाषाण कालीन स्थल से हिरण के सींगों (Antlers) से बने बड़ी संख्या में औजार और हथियार मिले हैं।"
    },
    {
        question: "'नवदाटोली' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवदाटोली मध्य प्रदेश में नर्मदा नदी के किनारे स्थित एक महत्वपूर्ण ताम्रपाषाण कालीन स्थल है।"
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
        question: "'लोथल' किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "साबरमती", correct: false },
            { text: "भोगवा", correct: true },
            { text: "रावी", correct: false },
            { text: "सिंधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल, गुजरात में भोगवा नदी के किनारे स्थित एक हड़प्पा और ताम्रपाषाण कालीन स्थल है।"
    },
    {
        question: "'पुरातत्व' का जनक किसे माना जाता है?",
        answers: shuffle([
            { text: "रॉबर्ट ब्रूस फुट", correct: false },
            { text: "कर्नल कॉलिन मैकेंज़ी", correct: false },
            { text: "अलेक्जेंडर कनिंघम", correct: true },
            { text: "जॉन मार्शल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलेक्जेंडर कनिंघम को 'भारतीय पुरातत्व का जनक' माना जाता है, जिन्होंने भारत में पुरातात्विक सर्वेक्षण विभाग की स्थापना की थी।"
    },
    {
        question: "'आहार संस्कृति' को और किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "मालवा संस्कृति", correct: false },
            { text: "जोरवे संस्कृति", correct: false },
            { text: "बनास संस्कृति", correct: true },
            { text: "कायथा संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार संस्कृति, जो ताम्रपाषाण काल की है, राजस्थान में बनास नदी के किनारे विकसित हुई थी, इसलिए इसे 'बनास संस्कृति' भी कहा जाता है।"
    },
    {
        question: "किस ताम्रपाषाण कालीन स्थल से 'तांबे के औजारों का विशाल भंडार' मिला है?",
        answers: shuffle([
            { text: "इनामगाँव", correct: false },
            { text: "कायथा", correct: true },
            { text: "आहार", correct: false },
            { text: "दायमाबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायथा (मध्य प्रदेश) से बड़ी संख्या में तांबे की चूड़ियां, औजार और मनके मिले हैं, जो यहाँ के ताम्रपाषाण काल के महत्व को दर्शाते हैं।"
    },
    {
        question: "'लौह युग' के बाद कौन सा काल आता है?",
        answers: shuffle([
            { text: "ताम्रपाषाण काल", correct: false },
            { text: "कांस्य युग", correct: false },
            { text: "ऐतिहासिक काल", correct: true },
            { text: "नवपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लौह युग के बाद वह काल आता है जब लिखित इतिहास उपलब्ध होता है, जिसे 'ऐतिहासिक काल' कहते हैं।"
    },
    {
        question: "'नवपाषाण काल' के औजारों की विशेषता क्या थी?",
        answers: shuffle([
            { text: "वे नुकीले और छोटे थे।", correct: false },
            { text: "वे अपरिष्कृत और बड़े थे।", correct: false },
            { text: "वे पॉलिश किए गए और घिसे हुए थे।", correct: true },
            { text: "वे धातु से बने थे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में मानव ने पत्थरों को पॉलिश करना सीख लिया था, जिससे उसके औजार अधिक प्रभावी और तेज हो गए थे।"
    },
    {
        question: "'मध्यपाषाण काल' के औजारों को 'सूक्ष्म पाषाण' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "वे बहुत छोटे होते थे।", correct: true },
            { text: "वे बहुत बड़े होते थे।", correct: false },
            { text: "वे बहुत हल्के होते थे।", correct: false },
            { text: "वे बहुत भारी होते थे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल के औजारों का आकार बहुत छोटा (1-8 सेमी) होता था, इसलिए उन्हें सूक्ष्म पाषाण (Microliths) कहते हैं।"
    },
    {
        question: "'आग का नियंत्रित उपयोग' किस काल में शुरू हुआ?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आग की खोज पुरापाषाण काल में हुई थी, लेकिन इसका नियंत्रित और व्यापक उपयोग मध्यपाषाण काल में शुरू हुआ।"
    },
    {
        question: "'कोल्डीहवा' से किस फसल के सबसे पुराने साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "जौ", correct: false },
            { text: "गेहूं", correct: false },
            { text: "चावल", correct: true },
            { text: "बाजरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्डीहवा (उत्तर प्रदेश) एक नवपाषाण कालीन स्थल है, जहाँ से चावल की खेती के सबसे पुराने साक्ष्य मिले हैं।"
    },
    {
        question: "'भीमबेटका' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "ओडिशा", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "छत्तीसगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका मध्य प्रदेश के रायसेन जिले में स्थित है, जो अपने शैलचित्रों के लिए विश्व प्रसिद्ध है।"
    },
    {
        question: "'नवपाषाण काल' में किस स्थान से 'हड्डी के औजारों' के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "चिरांद", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल के इन तीनों स्थलों (मेहरगढ़, चिरांद, बुर्जहोम) से हड्डी के औजारों के साक्ष्य मिले हैं, जो इस काल की एक महत्वपूर्ण विशेषता थी।"
    },
    {
        question: "'हस्तकुठार' (Handaxe) और 'विदारणी' (Cleaver) किस काल के प्रमुख औजार थे?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: true },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निम्न पुरापाषाण काल के दौरान मानव ने हस्तकुठार और विदारणी जैसे बड़े और अपरिष्कृत औजारों का उपयोग किया था।"
    },
    {
        question: "'ताम्रपाषाण काल' का कौन सा स्थल 'कांस्य' की प्रतिमाओं के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "इनामगाँव", correct: false },
            { text: "दायमाबाद", correct: true },
            { text: "आहार", correct: false },
            { text: "नवदाटोली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दायमाबाद (महाराष्ट्र) से कांस्य की कई प्रतिमाएं मिली हैं, जिसमें रथ, हाथी और गैंडे की प्रतिमाएं शामिल हैं।"
    },
    {
        question: "'नवपाषाण काल' में मानव ने 'कपड़ा बनाना' किस चीज से सीखा?",
        answers: shuffle([
            { text: "कपास", correct: false },
            { text: "ऊन", correct: false },
            { text: "जानवरों की खाल", correct: false },
            { text: "सन और घास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में मानव ने सन और घास के रेशों से कपड़ा बनाना सीखा था।<br><br><i class='fa-solid fa-angles-right icon'></i> कपास का उपयोग बाद में हड़प्पा सभ्यता में शुरू हुआ।"
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