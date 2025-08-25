const questions = [
    {
        topHeading: "सिंधु सभ्यता पर आधारित बहुविकल्पीय प्रश्न part 4 (quiz_no.14)"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'विशाल स्नानागार' मिला है?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "लोथल", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "धौलावीरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो का विशाल स्नानागार 39 फीट लंबा, 23 फीट चौड़ा और 8 फीट गहरा था, जो संभवतः धार्मिक अनुष्ठानों के लिए उपयोग किया जाता था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'जुते हुए खेत' के सबसे पुराने साक्ष्य मिले हैं?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "कालीबंगा", correct: true },
            { text: "लोथल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान के कालीबंगा से जुते हुए खेत के साक्ष्य मिले हैं, जो यह दर्शाते हैं कि सिंधु सभ्यता के लोग कृषि कार्य में हल का उपयोग करते थे।"
    },
    {
        question: "सिंधु सभ्यता में 'तांबे' का आयात कहाँ से होता था?",
        answers: [
            { text: "मैसूर", correct: false },
            { text: "बलूचिस्तान", correct: false },
            { text: "खेतड़ी (राजस्थान)", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग राजस्थान में स्थित खेतड़ी की खानों से तांबा प्राप्त करते थे, जो उनके व्यापार का एक प्रमुख हिस्सा था।"
    },
    {
        question: "सिंधु सभ्यता का सबसे बड़ा भारतीय स्थल 'राखीगढ़ी' किस नदी के तट पर स्थित है?",
        answers: [
            { text: "सिंधु", correct: false },
            { text: "रावी", correct: false },
            { text: "घग्गर", correct: true },
            { text: "सतलुज", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राखीगढ़ी हरियाणा में घग्गर नदी के तट पर स्थित है, जिसे कभी सरस्वती नदी का हिस्सा माना जाता था।"
    },
    {
        question: "सिंधु सभ्यता के लोग किस धातु से अपरिचित थे?",
        answers: [
            { text: "तांबा", correct: false },
            { text: "कांस्य", correct: false },
            { text: "लोहा", correct: true },
            { text: "सोना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता एक कांस्य युगीन सभ्यता थी, जहाँ लोहे का उपयोग नहीं होता था।"
    },
    {
        question: "सिंधु सभ्यता की लिपि कैसी थी?",
        answers: [
            { text: "ब्राह्मी", correct: false },
            { text: "चित्रात्मक", correct: true },
            { text: "देवनागरी", correct: false },
            { text: "खरोष्ठी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की लिपि भाव-चित्रात्मक थी और इसे अभी तक पढ़ा नहीं जा सका है।"
    },
    {
        question: "सिंधु सभ्यता का कौन सा स्थल 'यूनेस्को विश्व विरासत स्थल' में शामिल है?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "धौलावीरा", correct: true },
            { text: "लोथल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात में स्थित धौलावीरा को 2021 में यूनेस्को की विश्व विरासत सूची में शामिल किया गया था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'अग्निवेदियों' के साक्ष्य मिले हैं?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "कालीबंगा", correct: true },
            { text: "उपर्युक्त सभी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगा और लोथल जैसे स्थलों से अग्निवेदियों के साक्ष्य मिले हैं, जो धार्मिक अनुष्ठानों की ओर इशारा करते हैं।"
    },
    {
        question: "सिंधु सभ्यता के लोग 'सोना' कहाँ से प्राप्त करते थे?",
        answers: [
            { text: "गुजरात", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "बलूचिस्तान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग दक्षिण भारत में स्थित कोलार की खानों (कर्नाटक) से सोने का आयात करते थे।"
    },
    {
        question: "सिंधु सभ्यता में 'मोहनजोदड़ो' का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "जीवितों का टीला", correct: false },
            { text: "महान टीला", correct: false },
            { text: "मृतकों का टीला", correct: true },
            { text: "राजा का टीला", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो का सिंधी भाषा में अर्थ 'मृतकों का टीला' (Mound of the Dead) है।"
    },
    {
        question: "सिंधु सभ्यता में 'मातृदेवी' की पूजा किस रूप में की जाती थी?",
        answers: [
            { text: "यज्ञ", correct: false },
            { text: "मूर्तियों", correct: true },
            { text: "मंदिर", correct: false },
            { text: "वृक्ष पूजा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता से मिली बड़ी संख्या में नारी की मूर्तियाँ मातृदेवी की पूजा को दर्शाती हैं, जो संभवतः प्रजनन और उर्वरता की देवी थीं।"
    },
    {
        question: "सिंधु सभ्यता में 'सड़कें' किस प्रकार की थीं?",
        answers: [
            { text: "कच्ची और टेढ़ी-मेढ़ी", correct: false },
            { text: "चौड़ी और सीधी, जो एक-दूसरे को समकोण पर काटती थीं", correct: true },
            { text: "सनकरी और घुमावदार", correct: false },
            { text: "केवल मुख्य सड़कें थीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की सड़कें ग्रिड प्रणाली पर आधारित थीं, जहाँ मुख्य सड़कें सीधी होती थीं और एक-दूसरे को समकोण (90°) पर काटती थीं।"
    },
    {
        question: "सिंधु सभ्यता का समाज किस प्रकार का था?",
        answers: [
            { text: "पितृसत्तात्मक", correct: false },
            { text: "मातृसत्तात्मक", correct: true },
            { text: "समान अधिकार वाला", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़ी संख्या में मिली नारी की मूर्तियों के कारण इतिहासकारों का मानना है कि सिंधु सभ्यता का समाज मातृसत्तात्मक था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'मनके बनाने के कारखाने' के साक्ष्य मिले हैं?",
        answers: [
            { text: "लोथल और चन्हुदड़ो", correct: true },
            { text: "मोहनजोदड़ो और हड़प्पा", correct: false },
            { text: "कालीबंगा और बनावली", correct: false },
            { text: "रोपड़ और आलमगीरपुर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और चन्हुदड़ो दोनों स्थलों से मनके बनाने के कारखाने और संबंधित उपकरण मिले हैं।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'अग्नि वेदिका' के साक्ष्य मिले हैं?",
        answers: [
            { text: "हड़प्पा और मोहनजोदड़ो", correct: false },
            { text: "लोथल और कालीबंगा", correct: true },
            { text: "रोपड़ और आलमगीरपुर", correct: false },
            { text: "बनावली और धौलावीरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और कालीबंगा में अग्नि वेदिकाएँ मिली हैं, जो धार्मिक अनुष्ठानों के लिए उपयोग की जाती थीं।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'पक्की मिट्टी का हल' मिला है?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "बनावली", correct: true },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरियाणा के बनावली से पक्की मिट्टी से बना एक हल का खिलौना मिला है।"
    },
    {
        question: "सिंधु सभ्यता के लोग किस प्रकार के वस्त्र पहनते थे?",
        answers: [
            { text: "केवल ऊनी", correct: false },
            { text: "केवल सूती", correct: false },
            { text: "ऊनी और सूती दोनों", correct: true },
            { text: "रेशमी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो में मिले सूती कपड़ों के साक्ष्य और भेड़ पालन के प्रमाण यह दर्शाते हैं कि सिंधु सभ्यता के लोग ऊनी और सूती दोनों प्रकार के वस्त्र पहनते थे।"
    },
    {
        question: "सिंधु सभ्यता में 'व्यापार' का मुख्य माध्यम क्या था?",
        answers: [
            { text: "नाव और बैलगाड़ी", correct: true },
            { text: "ऊंट और घोड़ा", correct: false },
            { text: "केवल पैदल", correct: false },
            { text: "हवाई मार्ग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग आंतरिक व्यापार के लिए बैलगाड़ी और समुद्री व्यापार के लिए नावों का उपयोग करते थे।"
    },
    {
        question: "सिंधु सभ्यता का सबसे दक्षिणी स्थल 'दायमाबाद' कहाँ स्थित है?",
        answers: [
            { text: "गुजरात", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "पंजाब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दायमाबाद महाराष्ट्र में गोदावरी नदी की सहायक प्रवरा नदी के तट पर स्थित है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'घोड़े की हड्डियों' के साक्ष्य मिले हैं?",
        answers: [
            { text: "लोथल", correct: false },
            { text: "सुरकोटदा", correct: true },
            { text: "रोपड़", correct: false },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात के सुरकोटदा में घोड़े की हड्डियां मिली हैं।"
    },
    {
        question: "सिंधु सभ्यता में 'मातृदेवी' की पूजा किस रूप में की जाती थी?",
        answers: [
            { text: "यज्ञ द्वारा", correct: false },
            { text: "मूर्तियों द्वारा", correct: true },
            { text: "मंदिर में", correct: false },
            { text: "वृक्ष पूजा द्वारा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता से मिली टेराकोटा की मूर्तियों को मातृदेवी का प्रतीक माना जाता था।"
    },
    {
        question: "सिंधु सभ्यता में 'मुहरें' किस धातु या पदार्थ से बनती थीं?",
        answers: [
            { text: "लोहा", correct: false },
            { text: "तांबा", correct: false },
            { text: "सेलखड़ी", correct: true },
            { text: "सोना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश सिंधु मुहरें सेलखड़ी नामक एक नरम पत्थर से बनी थीं।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'अग्नि वेदिका' (Fire Altar) के साक्ष्य मिले हैं?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "कालीबंगा", correct: true },
            { text: "चन्हुदड़ो", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगा से आयताकार और वृत्ताकार अग्नि वेदिकाएँ मिली हैं, जो धार्मिक अनुष्ठानों के लिए उपयोग की जाती थीं।"
    },
    {
        question: "सिंधु सभ्यता में 'पशुपति' की मुहर कहाँ से मिली है?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से एक मुहर मिली है जिसमें एक योगी जैसी मुद्रा में बैठे देवता को दर्शाया गया है, जिसे 'पशुपति' कहा गया है।"
    },
    {
        question: "सिंधु सभ्यता का सबसे बड़ा सार्वजनिक भवन कौन सा है?",
        answers: [
            { text: "विशाल स्नानागार", correct: false },
            { text: "विशाल अन्नागार", correct: true },
            { text: "सभागार", correct: false },
            { text: "आवासीय भवन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो में मिला विशाल अन्नागार सिंधु सभ्यता का सबसे बड़ा सार्वजनिक भवन था।"
    },
    {
        question: "सिंधु सभ्यता में 'तांबे' का सबसे बड़ा स्रोत कहाँ था?",
        answers: [
            { text: "कर्नाटक की कोलार खानें", correct: false },
            { text: "राजस्थान की खेतड़ी खानें", correct: true },
            { text: "बलूचिस्तान", correct: false },
            { text: "गुजरात", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग राजस्थान की खेतड़ी खानों से बड़े पैमाने पर तांबे का आयात करते थे, जो उनके लिए तांबे का सबसे महत्वपूर्ण स्रोत था।"
    },
    {
        question: "हड़प्पा सभ्यता में 'कपास' के उत्पादन के साक्ष्य कहाँ से मिले हैं?",
        answers: [
            { text: "कालीबंगा", correct: false },
            { text: "लोथल", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "बनावली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो में खुदाई के दौरान सूती कपड़े के अवशेष मिले हैं, जिससे यह सिद्ध होता है कि सिंधु सभ्यता के लोग दुनिया में सबसे पहले कपास का उत्पादन करने वाले थे।"
    },
    {
        question: "सिंधु सभ्यता में 'विदेशी व्यापार' का मुख्य केंद्र कौन सा था?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: true },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल एक बंदरगाह शहर था, जहाँ से मेसोपोटामिया जैसे विदेशी सभ्यताओं के साथ व्यापार होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ एक कृत्रिम गोदी (dockyard) भी मिली है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल को 'शिल्पियों का शहर' भी कहा जाता है?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "चन्हुदड़ो", correct: true },
            { text: "धौलावीरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चन्हुदड़ो मनके बनाने के कारखानों और विभिन्न शिल्पकलाओं के लिए प्रसिद्ध था, इसलिए इसे 'शिल्पियों का शहर' कहा जाता था।"
    },
    {
        question: "सिंधु सभ्यता का सबसे बड़ा भारतीय स्थल 'राखीगढ़ी' किस राज्य में स्थित है?",
        answers: [
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: false },
            { text: "हरियाणा", correct: true },
            { text: "पंजाब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राखीगढ़ी हरियाणा के हिसार जिले में स्थित है और यह भारत में स्थित सिंधु सभ्यता का सबसे बड़ा स्थल है।"
    },
    {
        question: "सिंधु सभ्यता में 'माप-तौल' के लिए बाट किस अनुपात में थे?",
        answers: [
            { text: "10 के अनुपात में", correct: false },
            { text: "12 के अनुपात में", correct: false },
            { text: "16 के अनुपात में", correct: true },
            { text: "20 के अनुपात में", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के बाट 16 के गुणज पर आधारित थे, जैसे 16, 32, 64 आदि, जो एक मानकीकृत मापन प्रणाली को दर्शाते हैं।"
    },
    {
        question: "सिंधु सभ्यता के पतन का एक प्रमुख कारण 'नदी मार्ग का बदलना' था। यह सिद्धांत किसने दिया?",
        answers: [
            { text: "दयाराम साहनी", correct: false },
            { text: "राखालदास बनर्जी", correct: false },
            { text: "फेयरसर्विस", correct: true },
            { text: "मार्टिमर व्हीलर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फेयरसर्विस जैसे विद्वानों ने सिंधु नदी के मार्ग में बदलाव और जलवायु परिवर्तन को सभ्यता के पतन का मुख्य कारण माना।"
    },
    {
        question: "सिंधु सभ्यता का सबसे उत्तरी स्थल कौन सा है?",
        answers: [
            { text: "दायमाबाद", correct: false },
            { text: "मांडा", correct: true },
            { text: "आलमगीरपुर", correct: false },
            { text: "सुत्कागेंडोर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मांडा जम्मू-कश्मीर में चिनाब नदी के तट पर स्थित है, जो सिंधु सभ्यता का सबसे उत्तरी स्थल है।"
    },
    {
        question: "सिंधु सभ्यता में 'नृत्य करती लड़की' की मूर्ति किससे बनी थी?",
        answers: [
            { text: "पत्थर", correct: false },
            { text: "तांबा", correct: false },
            { text: "कांस्य", correct: true },
            { text: "टेराकोटा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से मिली 'नृत्य करती लड़की' की मूर्ति कांस्य से बनी थी, जो उनकी उन्नत धातु-कला का प्रमाण है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'अग्नि वेदिका' (Fire Altar) के साक्ष्य मिले हैं?",
        answers: [
            { text: "लोथल और कालीबंगा", correct: true },
            { text: "हड़प्पा और मोहनजोदड़ो", correct: false },
            { text: "धौलावीरा और बनावली", correct: false },
            { text: "रोपड़ और आलमगीरपुर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और कालीबंगा से अग्नि वेदिकाएं मिली हैं, जो यह दर्शाती हैं कि यहाँ धार्मिक अनुष्ठान होते थे।"
    },
    {
        question: "सिंधु सभ्यता के लोग किस प्रकार के औजारों का उपयोग करते थे?",
        answers: [
            { text: "केवल पत्थर के", correct: false },
            { text: "केवल लोहे के", correct: false },
            { text: "तांबा और कांस्य के", correct: true },
            { text: "लोहा और पत्थर के", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता कांस्य युगीन सभ्यता थी, जहाँ के लोग तांबे और कांसे से बने औजारों का उपयोग करते थे।"
    },
    {
        question: "सिंधु सभ्यता के लोग किस जानवर से परिचित नहीं थे?",
        answers: [
            { text: "बाघ", correct: false },
            { text: "हाथी", correct: false },
            { text: "गेंडा", correct: false },
            { text: "गाय", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की मुहरों पर बाघ, हाथी और गेंडा जैसे जानवरों का अंकन मिलता है, लेकिन गाय का कोई स्पष्ट चित्रण नहीं मिलता है।"
    },
    {
        question: "सिंधु सभ्यता का समाज किस आधार पर विभाजित था?",
        answers: [
            { text: "जाति", correct: false },
            { text: "वर्ण", correct: false },
            { text: "व्यवसाय और निवास स्थान", correct: true },
            { text: "कोई विभाजन नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता का समाज व्यवसाय और निवास स्थान के आधार पर वर्गों में विभाजित था, जैसे पुरोहित, व्यापारी, सैनिक और श्रमिक।"
    },
    {
        question: "सिंधु सभ्यता में सबसे बड़ा भवन कौन सा था?",
        answers: [
            { text: "विशाल स्नानागार", correct: false },
            { text: "विशाल अन्नागार", correct: true },
            { text: "सभागार", correct: false },
            { text: "आवासीय भवन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो में मिला विशाल अन्नागार सिंधु सभ्यता का सबसे बड़ा भवन था।"
    },
    {
        question: "सिंधु सभ्यता का भौगोलिक विस्तार किस आकार का था?",
        answers: [
            { text: "वर्गाकार", correct: false },
            { text: "आयताकार", correct: false },
            { text: "त्रिभुजाकार", correct: true },
            { text: "वृत्ताकार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता का भौगोलिक विस्तार एक त्रिभुज के आकार का था, जो उत्तर में मांडा से लेकर दक्षिण में दायमाबाद तक और पूर्व में आलमगीरपुर से लेकर पश्चिम में सुत्कागेंडोर तक फैला हुआ था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'पक्की मिट्टी का हल' मिला है?",
        answers: [
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "बनावली", correct: true },
            { text: "रोपड़", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरियाणा के बनावली से पक्की मिट्टी से बना एक हल का खिलौना मिला है।"
    },
    {
        question: "सिंधु सभ्यता की लिपि किस प्रकार की थी?",
        answers: [
            { text: "ब्राह्मी", correct: false },
            { text: "चित्रात्मक (Pictographic)", correct: true },
            { text: "देवनागरी", correct: false },
            { text: "खरोष्ठी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की लिपि को अभी तक पढ़ा नहीं जा सका है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भाव-चित्रात्मक थी, जिसमें चित्रों का उपयोग होता था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'शवों को दफनाने के लिए लकड़ी के ताबूत' का साक्ष्य मिला है?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: false },
            { text: "हड़प्पा", correct: true },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा के कब्रिस्तान R-37 में लकड़ी के ताबूत में दफनाए गए कंकाल मिले हैं।"
    },
    {
        question: "सिंधु सभ्यता में 'कुत्ते को मानव के साथ दफनाया जाना' किस स्थल से मिला है?",
        answers: [
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "रोपड़", correct: true },
            { text: "बनावली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोपड़ (पंजाब) से एक कब्र मिली है, जिसमें एक मानव के साथ कुत्ते को दफनाया गया था।"
    },
    {
        question: "सिंधु सभ्यता में 'मातृदेवी' की पूजा किस रूप में की जाती थी?",
        answers: [
            { text: "यज्ञ द्वारा", correct: false },
            { text: "मूर्तियों द्वारा", correct: true },
            { text: "मंदिर में", correct: false },
            { text: "वृक्ष पूजा द्वारा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता से मिली टेराकोटा की मूर्तियों को मातृदेवी का प्रतीक माना जाता था।"
    },
    {
        question: "सिंधु सभ्यता का सबसे बड़ा भारतीय स्थल 'राखीगढ़ी' कहाँ स्थित है?",
        answers: [
            { text: "गुजरात", correct: false },
            { text: "पंजाब", correct: false },
            { text: "हरियाणा", correct: true },
            { text: "राजस्थान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राखीगढ़ी हरियाणा के हिसार जिले में स्थित है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'शंख का बना हुआ पैमाना' मिला है?",
        answers: [
            { text: "लोथल", correct: true },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "धौलावीरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल से शंख से बना एक पैमाना मिला है, जो दर्शाता है कि सिंधु सभ्यता के लोग मापन कला में कुशल थे।"
    },
    {
        question: "सिंधु सभ्यता के लोग किस धातु का उपयोग नहीं जानते थे?",
        answers: [
            { text: "तांबा", correct: false },
            { text: "कांस्य", correct: false },
            { text: "लोहा", correct: true },
            { text: "सोना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता एक कांस्य युगीन सभ्यता थी, जहाँ लोहे का उपयोग नहीं होता था।"
    },
    {
        question: "सिंधु सभ्यता में 'व्यापार' का मुख्य माध्यम क्या था?",
        answers: [
            { text: "नाव और बैलगाड़ी", correct: true },
            { text: "ऊंट और घोड़ा", correct: false },
            { text: "केवल पैदल", correct: false },
            { text: "हवाई मार्ग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग आंतरिक व्यापार के लिए बैलगाड़ी और समुद्री व्यापार के लिए नावों का उपयोग करते थे।"
    },
    {
        question: "सिंधु सभ्यता के पतन का एक प्रमुख कारण 'आर्यों का आक्रमण' था। यह सिद्धांत किसने दिया?",
        answers: [
            { text: "दयाराम साहनी", correct: false },
            { text: "राखालदास बनर्जी", correct: false },
            { text: "जॉन मार्शल", correct: false },
            { text: "मार्टिमर व्हीलर", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मार्टिमर व्हीलर जैसे इतिहासकारों ने मोहनजोदड़ो में मिले नरकंकालों के आधार पर सिंधु सभ्यता के पतन का कारण आर्यों के आक्रमण को माना था।"
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