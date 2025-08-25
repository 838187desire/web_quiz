const questions = [
    {
        topHeading: "प्रागैतिहासिक काल पर आधारित बहुविकल्पीय प्रश्न part 8 (quiz_no.8)"
    },
    {
        question: "'पुरापाषाण काल' का कौन सा पुरास्थल 'उच्च पुरापाषाण काल' से संबंधित है?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "बागोर", correct: false },
            { text: "रेनिगुंटा (Renigunta)", correct: true },
            { text: "कोल्डीहवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश में स्थित रेनिगुंटा पुरास्थल से उच्च पुरापाषाण काल के औजार, जैसे ब्लेड और बरिन, बड़ी संख्या में मिले हैं।"
    },
    {
        question: "'ताम्रपाषाण काल' की 'मालवा संस्कृति' किस नदी के किनारे स्थित थी?",
        answers: shuffle([
            { text: "नर्मदा", correct: true },
            { text: "चंबल", correct: false },
            { text: "तापी", correct: false },
            { text: "माही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मालवा संस्कृति ताम्रपाषाण काल की थी, जिसका विकास नर्मदा नदी के किनारे हुआ था, और इसका प्रमुख स्थल नवदाटोली था।"
    },
    {
        question: "'नवपाषाण काल' में 'पशुपालन' और 'कृषि' के साक्ष्य कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "कोल्डीहवा", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल के इन सभी स्थलों, मेहरगढ़, कोल्डीहवा और बुर्जहोम से कृषि और पशुपालन के साक्ष्य मिले हैं।"
    },
    {
        question: "'मध्यपाषाण काल' के किस स्थल से 'मानव कंकाल' के साथ 'बड़ा पत्थर' मिला है?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "महदहा", correct: false },
            { text: "सराय नाहर राय", correct: false },
            { text: "लंघनाज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात में स्थित लंघनाज नामक मध्यपाषाण कालीन स्थल से मानव कंकाल के साथ बड़े पत्थरों के टुकड़े मिले हैं।"
    },
    {
        question: "'ताम्रपाषाण काल' के 'दायमाबाद' से 'तांबे के रथ' की प्रतिमा किस संस्कृति से संबंधित है?",
        answers: shuffle([
            { text: "मालवा संस्कृति", correct: false },
            { text: "जोरवे संस्कृति", correct: true },
            { text: "आहार संस्कृति", correct: false },
            { text: "कायथा संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दायमाबाद, महाराष्ट्र में स्थित जोरवे संस्कृति का एक प्रमुख स्थल है, जहाँ से तांबे के रथ की प्रतिमा मिली है।"
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
        question: "'नवपाषाण काल' में 'बुर्जहोम' से 'गर्तवास' (pit-dwelling) किस उद्देश्य से बनाए गए थे?",
        answers: shuffle([
            { text: "शिकार के लिए", correct: false },
            { text: "भंडारण के लिए", correct: false },
            { text: "ठंड से बचाव के लिए", correct: true },
            { text: "जंगली जानवरों से बचाव के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जम्मू-कश्मीर में स्थित बुर्जहोम में लोग जमीन के अंदर गड्ढों में रहते थे, जो यहाँ की ठंडी जलवायु से बचने का एक तरीका था।"
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
        question: "'ताम्रपाषाण काल' की 'मालवा संस्कृति' किस नदी के किनारे स्थित थी?",
        answers: shuffle([
            { text: "नर्मदा", correct: true },
            { text: "चंबल", correct: false },
            { text: "तापी", correct: false },
            { text: "माही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मालवा संस्कृति ताम्रपाषाण काल की थी, जिसका विकास नर्मदा नदी के किनारे हुआ था, और इसका प्रमुख स्थल नवदाटोली था।"
    },
    {
        question: "'नवपाषाण काल' में 'पशुपालन' और 'कृषि' के साक्ष्य कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "कोल्डीहवा", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल के इन सभी स्थलों, मेहरगढ़, कोल्डीहवा और बुर्जहोम से कृषि और पशुपालन के साक्ष्य मिले हैं।"
    },
    {
        question: "'मध्यपाषाण काल' के किस स्थल से 'मानव कंकाल' के साथ 'बड़ा पत्थर' मिला है?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "महदहा", correct: false },
            { text: "सराय नाहर राय", correct: false },
            { text: "लंघनाज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात में स्थित लंघनाज नामक मध्यपाषाण कालीन स्थल से मानव कंकाल के साथ बड़े पत्थरों के टुकड़े मिले हैं।"
    },
    {
        question: "'ताम्रपाषाण काल' के 'दायमाबाद' से 'तांबे के रथ' की प्रतिमा किस संस्कृति से संबंधित है?",
        answers: shuffle([
            { text: "मालवा संस्कृति", correct: false },
            { text: "जोरवे संस्कृति", correct: true },
            { text: "आहार संस्कृति", correct: false },
            { text: "कायथा संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दायमाबाद, महाराष्ट्र में स्थित जोरवे संस्कृति का एक प्रमुख स्थल है, जहाँ से तांबे के रथ की प्रतिमा मिली है।"
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
        question: "'नवपाषाण काल' में 'बुर्जहोम' से 'गर्तवास' (pit-dwelling) किस उद्देश्य से बनाए गए थे?",
        answers: shuffle([
            { text: "शिकार के लिए", correct: false },
            { text: "भंडारण के लिए", correct: false },
            { text: "ठंड से बचाव के लिए", correct: true },
            { text: "जंगली जानवरों से बचाव के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जम्मू-कश्मीर में स्थित बुर्जहोम में लोग जमीन के अंदर गड्ढों में रहते थे, जो यहाँ की ठंडी जलवायु से बचने का एक तरीका था।"
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