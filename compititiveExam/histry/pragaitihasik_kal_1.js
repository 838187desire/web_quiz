const questions = [
    {
        topHeading: "प्रागैतिहासिक काल पर आधारित बहुविकल्पीय प्रश्न part 1 (quiz_no.1)"
    },
    {
        question: "प्रागैतिहासिक काल से क्या अभिप्राय है?",
        answers: shuffle([
            { text: "वह काल जिसमें लिखित इतिहास उपलब्ध है।", correct: false },
            { text: "वह काल जिसका कोई लिखित विवरण उपलब्ध नहीं है।", correct: true },
            { text: "वह काल जिसमें केवल साहित्यिक साक्ष्य उपलब्ध हैं।", correct: false },
            { text: "वह काल जिसमें केवल विदेशी यात्रियों के वृत्तांत मिलते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रागैतिहासिक काल (Prehistoric Period) मानव इतिहास का वह हिस्सा है जिसके लिए कोई लिखित अभिलेख या इतिहास उपलब्ध नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस काल का अध्ययन पुरातात्विक उत्खनन से प्राप्त सामग्री जैसे औजारों, मिट्टी के बर्तनों और अन्य अवशेषों के आधार पर किया जाता है।"
    },
    {
        question: "मानव सभ्यता के इतिहास में पुरापाषाण काल की अवधि क्या है?",
        answers: shuffle([
            { text: "25 लाख ई.पू. से 10,000 ई.पू.", correct: true },
            { text: "10,000 ई.पू. से 4,000 ई.पू.", correct: false },
            { text: "4,000 ई.पू. से 2,500 ई.पू.", correct: false },
            { text: "2,500 ई.पू. से 1,500 ई.पू.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल (Paleolithic Period) मानव इतिहास का सबसे लंबा और सबसे पुराना काल है, जो लगभग 25 लाख ई.पू. से 10,000 ई.पू. तक चला।<br><br><i class='fa-solid fa-angles-right icon'></i> इस काल में मानव शिकारी और खाद्य संग्राहक था।"
    },
    {
        question: "मध्यपाषाण काल के प्रमुख औजार क्या थे?",
        answers: shuffle([
            { text: "हस्तकुठार (Handaxe) और विदारणी (Cleaver)", correct: false },
            { text: "कुल्हाड़ी और चाकू", correct: false },
            { text: "सूक्ष्म पाषाण (Microliths) और नुकीले औजार", correct: true },
            { text: "पॉलिश किए गए पत्थर के औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल (Mesolithic Period) के दौरान, औजारों का आकार छोटा हो गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस काल के विशिष्ट औजार सूक्ष्म पाषाण (Microliths) थे, जो छोटे, नुकीले और ज्यामितीय आकार के होते थे।"
    },
    {
        question: "नवपाषाण काल की सबसे महत्वपूर्ण विशेषता क्या थी?",
        answers: shuffle([
            { text: "आग की खोज", correct: false },
            { text: "कृषि का आरंभ", correct: true },
            { text: "बड़े जानवरों का शिकार", correct: false },
            { text: "गुफाओं में निवास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल (Neolithic Period) की सबसे महत्वपूर्ण उपलब्धि कृषि का आरंभ थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इस क्रांति के कारण मानव स्थायी बस्तियों में रहना शुरू कर दिया और खाद्य संग्राहक से खाद्य उत्पादक बन गया।"
    },
    {
        question: "'भीमबेटका' की गुफाएं किस काल से संबंधित हैं?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false },
            { text: "इन सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका (मध्य प्रदेश) की गुफाएं पुरापाषाण काल से लेकर मध्यपाषाण काल और कुछ हद तक नवपाषाण काल तक के शैलाश्रयों और शैलचित्रों के लिए प्रसिद्ध हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ के चित्रों में शिकारी जीवन और जानवरों का चित्रण मिलता है।"
    },
    {
        question: "'मेहरगढ़' किस काल का महत्वपूर्ण पुरास्थल है?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: true },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़, जो वर्तमान पाकिस्तान में स्थित है, नवपाषाण काल का एक प्रमुख स्थल है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से कृषि और पशुपालन के सबसे पुराने साक्ष्य मिले हैं, जिनकी तिथि लगभग 7000 ई.पू. है।"
    },
    {
        question: "पुरापाषाण काल के औजार किस चीज से बनाए जाते थे?",
        answers: shuffle([
            { text: "तांबे", correct: false },
            { text: "लोहे", correct: false },
            { text: "क्वार्टजाइट और चकमक पत्थर", correct: true },
            { text: "मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल के मानव कच्चे, अपरिष्कृत पत्थरों का उपयोग करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> ये औजार मुख्य रूप से क्वार्टजाइट, चकमक पत्थर (फ्लिंट) और अन्य कठोर पत्थरों से बनाए जाते थे।"
    },
    {
        question: "'आग की खोज' किस काल की सबसे बड़ी उपलब्धि मानी जाती है?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: true },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आग की खोज पुरापाषाण काल में हुई थी, जिसका उपयोग मानव ने ठंड से बचने, जानवरों को दूर रखने और भोजन पकाने के लिए किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, इसका व्यापक उपयोग बाद में शुरू हुआ।"
    },
    {
        question: "'बुर्जहोम' पुरातात्विक स्थल कहाँ स्थित है?",
        answers: shuffle([
            { text: "जम्मू और कश्मीर", correct: true },
            { text: "राजस्थान", correct: false },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "बिहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुर्जहोम जम्मू और कश्मीर में स्थित एक नवपाषाण कालीन स्थल है, जहाँ से गर्तवास (pit-dwellings) के साक्ष्य मिले हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ के लोग गड्ढों में घर बनाकर रहते थे।"
    },
    {
        question: "'मेहरगढ़' किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "रावी", correct: false },
            { text: "बोलन", correct: true },
            { text: "सिंधु", correct: false },
            { text: "गंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़, जो नवपाषाण काल का एक महत्वपूर्ण स्थल है, वर्तमान पाकिस्तान के बलूचिस्तान प्रांत में बोलन नदी के किनारे स्थित है।"
    },
    {
        question: "'सराय नाहर राय' और 'महदहा' किस काल के पुरास्थल हैं?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सराय नाहर राय और महदहा दोनों ही उत्तर प्रदेश में स्थित महत्वपूर्ण मध्यपाषाण कालीन स्थल हैं, जहाँ से मानव कंकाल और सूक्ष्म पाषाण औजारों के साक्ष्य मिले हैं।"
    },
    {
        question: "भारत में पुरापाषाण काल की पहली खोज किसने की थी?",
        answers: shuffle([
            { text: "डॉ. एच. डी. सांकलिया", correct: false },
            { text: "रॉबर्ट ब्रूस फुट", correct: true },
            { text: "आर. बी. घोष", correct: false },
            { text: "दयाराम साहनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉबर्ट ब्रूस फुट ने 1863 में मद्रास (अब चेन्नई) के पास पल्लवरम में भारत में पहला पुरापाषाण कालीन औजार (हस्तकुठार) खोजा था।"
    },
    {
        question: "'चोपिंग-चापर संस्कृति' किस काल से संबंधित है?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: true },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोपिंग-चापर संस्कृति निम्न पुरापाषाण काल की एक प्रमुख संस्कृति थी, जो मुख्य रूप से सोहन नदी घाटी (अब पाकिस्तान) में प्रचलित थी।"
    },
    {
        question: "नवपाषाण काल में 'पहिए का आविष्कार' किस उद्देश्य के लिए हुआ था?",
        answers: shuffle([
            { text: "गाड़ी चलाने के लिए", correct: false },
            { text: "बर्तन बनाने के लिए (चाक)", correct: true },
            { text: "कुआं खोदने के लिए", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में पहिए का आविष्कार मुख्य रूप से मिट्टी के बर्तन बनाने के लिए हुआ था, जिसे बाद में परिवहन के लिए भी उपयोग किया गया।"
    },
    {
        question: "पुरापाषाण काल के मानव का मुख्य भोजन क्या था?",
        answers: shuffle([
            { text: "अनाज और फल", correct: false },
            { text: "जंगली जानवर और फल", correct: true },
            { text: "मछली और फल", correct: false },
            { text: "अनाज और सब्जियां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल का मानव शिकारी और खाद्य संग्राहक था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह जंगली जानवरों का शिकार करता था और फल, कंद-मूल आदि इकट्ठा करता था।"
    },
    {
        question: "'ताम्रपाषाण काल' का अर्थ क्या है?",
        answers: shuffle([
            { text: "वह काल जिसमें केवल तांबे का उपयोग होता था।", correct: false },
            { text: "वह काल जिसमें केवल पत्थर का उपयोग होता था।", correct: false },
            { text: "वह काल जिसमें तांबे और पत्थर दोनों का उपयोग होता था।", correct: true },
            { text: "वह काल जिसमें केवल लोहे का उपयोग होता था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाण काल (Chalcolithic Period) वह काल है जब मानव ने औजारों के लिए तांबे और पत्थर दोनों का उपयोग करना शुरू कर दिया था।"
    },
    {
        question: "'बुर्जहोम' से प्राप्त साक्ष्यों में क्या शामिल है?",
        answers: shuffle([
            { text: "गर्तवास (Pit-dwellings)", correct: false },
            { text: "मालिक के साथ कुत्ते को दफनाना", correct: false },
            { text: "पॉलिश किए गए औजार", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुर्जहोम पुरास्थल से गर्तवास, हड्डी के औजार, पॉलिश किए गए पत्थर के औजार और मालिक के साथ कुत्ते को दफनाने के साक्ष्य मिले हैं, जो इसकी अनूठी विशेषताओं को दर्शाते हैं।"
    },
    {
        question: "'मेहरगढ़' से किस फसल के सबसे पुराने साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "चावल", correct: false },
            { text: "गेहूं और जौ", correct: true },
            { text: "मक्का", correct: false },
            { text: "बाजरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़, जो नवपाषाण काल का एक महत्वपूर्ण स्थल है, से कृषि के सबसे पुराने साक्ष्य मिले हैं, जिसमें गेहूं और जौ की खेती के प्रमाण शामिल हैं।"
    },
    {
        question: "'पैलेओलिथिक' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "नया पत्थर", correct: false },
            { text: "पुराना पत्थर", correct: true },
            { text: "मध्य पत्थर", correct: false },
            { text: "धातु युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पैलेओलिथिक' शब्द ग्रीक भाषा के दो शब्दों से मिलकर बना है - 'पैलेओ' (पुराना) और 'लिथोस' (पत्थर)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, इसका अर्थ 'पुराना पत्थर' है, जो पुरापाषाण काल को दर्शाता है।"
    },
    {
        question: "'शैलचित्र' (Rock Paintings) किस काल की कला का प्रतिनिधित्व करते हैं?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैलचित्रों के साक्ष्य पुरापाषाण काल से मिलने शुरू हो जाते हैं, लेकिन मध्यपाषाण और नवपाषाण काल में भी ये कलाकृतियाँ देखने को मिलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> भीमबेटका इसका सबसे बड़ा उदाहरण है।"
    },
    {
        question: "पुरापाषाण काल के मानव किस प्रकार के औजार बनाते थे?",
        answers: shuffle([
            { text: "ज्यामितीय आकार के सूक्ष्म पाषाण", correct: false },
            { text: "पॉलिश किए गए औजार", correct: false },
            { text: "बड़े और अपरिष्कृत पत्थर के औजार", correct: true },
            { text: "धातु के औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल के दौरान, औजार बड़े और अपरिष्कृत होते थे, जिन्हें पत्थर के टुकड़ों को तोड़कर बनाया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें हस्तकुठार और विदारणी प्रमुख थे।"
    },
    {
        question: "'उच्च पुरापाषाण काल' का मानव किस प्रकार का था?",
        answers: shuffle([
            { text: "होमो इरेक्टस", correct: false },
            { text: "होमो हैबिलिस", correct: false },
            { text: "नियंडरथल", correct: false },
            { text: "होमो सेपियंस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च पुरापाषाण काल (Upper Paleolithic Period) के अंत तक आधुनिक मानव यानी होमो सेपियंस का उदय हो चुका था।"
    },
    {
        question: "'मेहरगढ़' किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "रावी", correct: false },
            { text: "बोलन", correct: true },
            { text: "सिंधु", correct: false },
            { text: "गंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़, जो नवपाषाण काल का एक महत्वपूर्ण स्थल है, वर्तमान पाकिस्तान के बलूचिस्तान प्रांत में बोलन नदी के किनारे स्थित है।"
    },
    {
        question: "'ताम्रपाषाण काल' में किस धातु का सबसे पहले उपयोग हुआ?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "सोना", correct: false },
            { text: "तांबा", correct: true },
            { text: "कांस्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाण काल की शुरुआत में मानव ने सबसे पहले तांबे धातु का उपयोग करना शुरू किया था, इसीलिए इस काल को 'ताम्र-पाषाण' काल कहा जाता है।"
    },
    {
        question: "'नवदाटोली' पुरास्थल किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "मध्य प्रदेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवदाटोली, मध्य प्रदेश में स्थित एक महत्वपूर्ण ताम्रपाषाण कालीन स्थल है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से कृषि और मिट्टी के बर्तनों के साक्ष्य मिले हैं।"
    },
    {
        question: "'कोल्डीहवा' पुरास्थल किस नदी घाटी में स्थित है?",
        answers: shuffle([
            { text: "गंगा घाटी", correct: false },
            { text: "सोन घाटी", correct: false },
            { text: "बेलन घाटी", correct: true },
            { text: "नर्मदा घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्डीहवा, उत्तर प्रदेश की बेलन घाटी में स्थित एक नवपाषाण कालीन स्थल है, जहाँ से चावल की खेती के सबसे पुराने साक्ष्य मिले हैं।"
    },
    {
        question: "ताम्रपाषाण काल के लोग किस धातु से अपरिचित थे?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: true },
            { text: "चांदी", correct: false },
            { text: "कांस्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाण काल के दौरान, मानव तांबा, कांस्य और चांदी का उपयोग करना जानता था, लेकिन लोहे का ज्ञान इस काल के बाद हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> लोहे का उपयोग लौह युग में शुरू हुआ।"
    },
    {
        question: "'कायथा संस्कृति' किस काल से संबंधित है?",
        answers: shuffle([
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: true },
            { text: "लौह युग", correct: false },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायथा संस्कृति (मध्य प्रदेश) ताम्रपाषाण काल की एक महत्वपूर्ण संस्कृति है, जहाँ से तांबे के औजारों और मिट्टी के बर्तनों के साक्ष्य मिले हैं।"
    },
    {
        question: "नवपाषाण काल को 'नवपाषाण क्रांति' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "कृषि और पशुपालन के आरंभ के कारण", correct: true },
            { text: "पहिए के आविष्कार के कारण", correct: false },
            { text: "आग के व्यापक उपयोग के कारण", correct: false },
            { text: "गुफा चित्रकला के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में मानव ने खाद्य संग्राहक से खाद्य उत्पादक बनना शुरू किया, जिससे कृषि और पशुपालन का विकास हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> इस महत्वपूर्ण बदलाव को 'नवपाषाण क्रांति' (Neolithic Revolution) कहा जाता है।"
    },
    {
        question: "'गुफकराल' नामक नवपाषाण कालीन स्थल कहाँ स्थित है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "पंजाब", correct: false },
            { text: "जम्मू और कश्मीर", correct: true },
            { text: "हरियाणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुफकराल का शाब्दिक अर्थ है 'कुम्हार की गुफा'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जम्मू और कश्मीर में स्थित एक नवपाषाण कालीन स्थल है, जहाँ से कृषि और पशुपालन के साक्ष्य मिले हैं।"
    },
    {
        question: "'अल्टामिरा गुफाएं' किस देश में स्थित हैं, जो प्रागैतिहासिक कला के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "स्पेन", correct: true },
            { text: "इटली", correct: false },
            { text: "इंग्लैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्टामिरा गुफाएं स्पेन में स्थित हैं और ये पुरापाषाण काल की गुफा चित्रकला के लिए विश्व प्रसिद्ध हैं।"
    },
    {
        question: "मध्यपाषाण काल के मानव का मुख्य व्यवसाय क्या था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "पशुपालन", correct: false },
            { text: "शिकार और खाद्य संग्रहण", correct: true },
            { text: "व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल में भी मानव पुरापाषाण काल की तरह ही मुख्य रूप से शिकारी और खाद्य संग्राहक था, लेकिन उसके औजारों में काफी सुधार हो चुका था।"
    },
    {
        question: "'ब्रह्मगिरि' किस काल का पुरातात्विक स्थल है?",
        answers: shuffle([
            { text: "नवपाषाण काल और ताम्रपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल और लौह युग", correct: true },
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मगिरि, कर्नाटक में स्थित एक पुरास्थल है, जहाँ से ताम्रपाषाण काल और लौह युग के साक्ष्य मिले हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से महापाषाण (Megalithic) कब्रों के भी प्रमाण मिले हैं।"
    },
    {
        question: "'राख का टीला' किस नवपाषाण कालीन स्थल से संबंधित है?",
        answers: shuffle([
            { text: "बुर्जहोम", correct: false },
            { text: "कोल्डीहवा", correct: false },
            { text: "संगनकल्लू", correct: true },
            { text: "चिरांद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संगनकल्लू, कर्नाटक में स्थित एक नवपाषाण कालीन स्थल है, जहाँ से 'राख का टीला' मिला है, जो दर्शाता है कि यहाँ पशुपालन होता था और वे गोबर को जलाते थे।"
    },
    {
        question: "'दक्कन के मेगालिथिक संस्कृति' (Megalithic Culture) से क्या अभिप्राय है?",
        answers: shuffle([
            { text: "बड़े पत्थरों से बने औजारों की संस्कृति", correct: false },
            { text: "बड़े पत्थरों से बनी कब्रों की संस्कृति", correct: true },
            { text: "मिट्टी के बर्तनों की संस्कृति", correct: false },
            { text: "गुफा चित्रकला की संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापाषाण (Megalithic) का अर्थ है 'बड़े पत्थर'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दक्षिण भारत में लौह युग से जुड़ी संस्कृति है, जिसमें मृतकों को बड़े पत्थरों से बनी कब्रों में दफनाया जाता था।"
    },
    {
        question: "'चिरांद' किस राज्य में स्थित नवपाषाण कालीन स्थल है?",
        answers: shuffle([
            { text: "उत्तर प्रदेश", correct: false },
            { text: "बिहार", correct: true },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "असम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिरांद बिहार में स्थित एक महत्वपूर्ण नवपाषाण कालीन स्थल है, जहाँ से हड्डी के औजारों के साक्ष्य मिले हैं।"
    },
    {
        question: "'सोन घाटी' में पुरापाषाण कालीन पुरास्थल कौन सा है?",
        answers: shuffle([
            { text: "पल्लवरम", correct: false },
            { text: "हथनौरा", correct: true },
            { text: "सराय नाहर राय", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हथनौरा (मध्य प्रदेश) सोन घाटी में स्थित एक पुरापाषाण कालीन स्थल है, जहाँ से भारत में मानव खोपड़ी का पहला जीवाश्म मिला था।"
    },
    {
        question: "किस पुरास्थल से हड्डी के औजारों की बड़ी संख्या मिली है?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "चिरांद", correct: true },
            { text: "ब्रह्मगिरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिरांद (बिहार) नवपाषाण काल का एक अनूठा स्थल है, जहाँ से हिरण के सींगों से बने बड़ी संख्या में हड्डी के औजार मिले हैं।"
    },
    {
        question: "'नवदाटोली' का उत्खनन किसने किया था?",
        answers: shuffle([
            { text: "आर. बी. घोष", correct: false },
            { text: "बी. बी. लाल", correct: false },
            { text: "एच. डी. सांकलिया", correct: true },
            { text: "वी. एस. वाकणकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवदाटोली, जो मध्य प्रदेश में स्थित एक ताम्रपाषाण कालीन स्थल है, का उत्खनन पुरातत्वविद् डॉ. एच. डी. सांकलिया द्वारा किया गया था।"
    },
    {
        question: "'ताम्रपाषाण काल' में किस धातु का सबसे पहले उपयोग हुआ?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "सोना", correct: false },
            { text: "तांबा", correct: true },
            { text: "कांस्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाण काल की शुरुआत में मानव ने सबसे पहले तांबे धातु का उपयोग करना शुरू किया था, इसीलिए इस काल को 'ताम्र-पाषाण' काल कहा जाता है।"
    },
    {
        question: "'चावल' के सबसे पुराने साक्ष्य कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "कोल्डीहवा", correct: true },
            { text: "चिरांद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्डीहवा (उत्तर प्रदेश) से चावल के सबसे पुराने साक्ष्य मिले हैं, जिनकी तिथि लगभग 6000 ई.पू. है।"
    },
    {
        question: "'अल्टीमा गुफाएं' किस काल की चित्रकला के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: true },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false },
            { text: "लौह युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेन में स्थित अल्टीमा गुफाएं पुरापाषाण काल की चित्रकला के लिए प्रसिद्ध हैं, जिसमें जानवरों और शिकार के दृश्यों का चित्रण है।"
    },
    {
        question: "'उच्च पुरापाषाण काल' का मुख्य औजार क्या था?",
        answers: shuffle([
            { text: "हस्तकुठार", correct: false },
            { text: "विदारणी", correct: false },
            { text: "ब्लेड और ब्यूरिन (Blade and Burin)", correct: true },
            { text: "पॉलिश किए गए औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च पुरापाषाण काल के दौरान औजारों के निर्माण में सुधार हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस काल के विशिष्ट औजार ब्लेड और ब्यूरिन थे, जो पतले और नुकीले होते थे।"
    },
    {
        question: "'लौह युग' की शुरुआत किस काल के बाद हुई?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लौह युग वह काल है जब मानव ने लोहे का उपयोग करना शुरू किया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ताम्रपाषाण काल के बाद आया, जब मानव ने पहले तांबा और कांस्य का उपयोग किया था।"
    },
    {
        question: "'पोटरी' (मिट्टी के बर्तन) का आविष्कार किस काल में हुआ था?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: true },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल में कृषि और स्थायी बस्तियों के विकास के साथ, भोजन को संग्रहीत करने के लिए मिट्टी के बर्तनों (पोटरी) का आविष्कार हुआ था।"
    },
    {
        question: "'बर्तन पर चित्रकला' किस काल की विशेषता है?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाण काल में मिट्टी के बर्तनों का निर्माण बड़े पैमाने पर होने लगा था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस काल के बर्तन लाल और काले रंग के होते थे और उन पर ज्यामितीय आकृतियाँ बनी होती थीं।"
    },
    {
        question: "किस पुरास्थल से महापाषाण (Megalithic) संस्कृति के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "ब्रह्मगिरि", correct: true },
            { text: "मेहरगढ़", correct: false },
            { text: "कोल्डीहवा", correct: false },
            { text: "बुर्जहोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मगिरि, कर्नाटक में स्थित एक ऐसा पुरास्थल है जहाँ से महापाषाण संस्कृति के साक्ष्य मिले हैं, जिसमें बड़े पत्थरों से बनी कब्रें शामिल हैं।"
    },
    {
        question: "'मध्यपाषाण काल' में 'हड्डियों के औजार' कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "सराय नाहर राय", correct: true },
            { text: "चिरांद", correct: false },
            { text: "आदमगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सराय नाहर राय (उत्तर प्रदेश) एक महत्वपूर्ण मध्यपाषाण कालीन स्थल है, जहाँ से हड्डी के बने कई औजार और हथियार मिले हैं।"
    },
    {
        question: "'नवपाषाण काल' में किस प्रकार के औजारों का उपयोग किया जाता था?",
        answers: shuffle([
            { text: "अपरिष्कृत पत्थर के औजार", correct: false },
            { text: "सूक्ष्म पाषाण औजार", correct: false },
            { text: "पॉलिश किए गए और घिसे हुए औजार", correct: true },
            { text: "धातु के औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल के दौरान मानव ने पत्थरों को रगड़कर और घिसकर पॉलिश करना सीख लिया था, जिससे औजारों की गुणवत्ता में सुधार हुआ।"
    },
    {
        question: "'ताम्रपाषाण संस्कृति' का एक प्रमुख स्थल 'आहार' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "मध्य प्रदेश", correct: false },
            { text: "राजस्थान", correct: true },
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार संस्कृति ताम्रपाषाण काल की एक महत्वपूर्ण संस्कृति है, जिसका प्रमुख स्थल आहार, राजस्थान में स्थित है।"
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