const questions = [
    {
        topHeading: "सिंधु सभ्यता पर आधारित बहुविकल्पीय प्रश्न part 1 (quiz_no.11)"
    },
    {
        question: "हड़प्पा सभ्यता की खोज किस वर्ष में हुई थी?",
        answers: [
            { text: "1920", correct: false },
            { text: "1921", correct: true },
            { text: "1922", correct: false },
            { text: "1923", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा सभ्यता की खोज का श्रेय दयाराम साहनी को जाता है, जिन्होंने 1921 में इस स्थल की खुदाई की थी।"
    },
    {
        question: "मोहनजोदड़ो की खोज किस वर्ष में हुई थी?",
        answers: [
            { text: "1921", correct: false },
            { text: "1922", correct: true },
            { text: "1923", correct: false },
            { text: "1924", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो की खोज राखालदास बनर्जी ने 1922 में की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्थल सिंधु नदी के किनारे स्थित है।"
    },
    {
        question: "सिंधु घाटी सभ्यता के शहरों की मुख्य विशेषता क्या थी?",
        answers: [
            { text: "ग्रामीण जीवन", correct: false },
            { text: "ग्रिड प्रणाली में नियोजित सड़कें", correct: true },
            { text: "पहाड़ों पर बने घर", correct: false },
            { text: "टेढ़े-मेढ़े रास्ते", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी सभ्यता की सबसे प्रमुख विशेषता उसकी शहरी योजना थी, जिसमें सड़कें एक-दूसरे को समकोण पर काटती थीं और शहर ग्रिड प्रणाली पर आधारित था।"
    },
    {
        question: "मोहनजोदड़ो का स्थानीय नाम क्या था?",
        answers: [
            { text: "जीवितों का टीला", correct: false },
            { text: "महान टीला", correct: false },
            { text: "मृतकों का टीला", correct: true },
            { text: "राजा का टीला", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो का सिंधी भाषा में अर्थ 'मृतकों का टीला' (Mound of the Dead) है, क्योंकि यहाँ बड़ी संख्या में कंकाल मिले थे।"
    },
    {
        question: "हड़प्पा किस नदी के तट पर स्थित है?",
        answers: [
            { text: "सिंधु", correct: false },
            { text: "रावी", correct: true },
            { text: "भोगवा", correct: false },
            { text: "सतलुज", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा पाकिस्तान के पंजाब प्रांत में रावी नदी के बाएं तट पर स्थित है।"
    },
    {
        question: "मोहनजोदड़ो किस नदी के तट पर स्थित है?",
        answers: [
            { text: "रावी", correct: false },
            { text: "घग्गर", correct: false },
            { text: "सिंधु", correct: true },
            { text: "झेलम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो पाकिस्तान के सिंध प्रांत में सिंधु नदी के दाहिने तट पर स्थित है।"
    },
    {
        question: "'विशाल स्नानागार' (Great Bath) किस हड़प्पा स्थल से मिला है?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "मोहनजोदड़ो", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशाल स्नानागार मोहनजोदड़ो का एक महत्वपूर्ण सार्वजनिक भवन है, जिसका उपयोग संभवतः अनुष्ठानिक स्नान के लिए होता था।"
    },
    {
        question: "'कालीबंगा' किस राज्य में स्थित है?",
        answers: [
            { text: "गुजरात", correct: false },
            { text: "पंजाब", correct: false },
            { text: "राजस्थान", correct: true },
            { text: "हरियाणा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगा राजस्थान के हनुमानगढ़ जिले में घग्गर नदी के किनारे स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से जुते हुए खेत के साक्ष्य मिले हैं।"
    },
    {
        question: "'लोथल' किस नदी के तट पर स्थित है?",
        answers: [
            { text: "रावी", correct: false },
            { text: "भोगवा", correct: true },
            { text: "सिंधु", correct: false },
            { text: "घग्गर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल गुजरात में साबरमती नदी की सहायक नदी भोगवा के किनारे स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण बंदरगाह शहर था।"
    },
    {
        question: "सिंधु घाटी सभ्यता के लोगों का मुख्य व्यवसाय क्या था?",
        answers: [
            { text: "कृषि", correct: true },
            { text: "व्यापार", correct: false },
            { text: "शिकार", correct: false },
            { text: "मछली पकड़ना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता एक कृषि-प्रधान सभ्यता थी।<br><br><i class='fa-solid fa-angles-right icon'></i> गेहूँ, जौ, सरसों, कपास आदि यहाँ की प्रमुख फसलें थीं।"
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस धातु से परिचित नहीं थे?",
        answers: [
            { text: "तांबा", correct: false },
            { text: "कांस्य", correct: false },
            { text: "लोहा", correct: true },
            { text: "सोना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता एक कांस्य युगीन सभ्यता थी।<br><br><i class='fa-solid fa-angles-right icon'></i> लोग तांबे, कांसे, सोने और चाँदी से परिचित थे, लेकिन लोहे का ज्ञान उन्हें नहीं था।"
    },
    {
        question: "'कांस्य की नर्तकी' की मूर्ति कहाँ से प्राप्त हुई है?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से प्राप्त कांस्य की नर्तकी की मूर्ति सिंधु कला का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "'जुते हुए खेत' के साक्ष्य किस स्थल से मिले हैं?",
        answers: [
            { text: "लोथल", correct: false },
            { text: "रोपड़", correct: false },
            { text: "बनावली", correct: false },
            { text: "कालीबंगा", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगा एकमात्र ऐसा स्थल है जहाँ से जुते हुए खेत के साक्ष्य मिले हैं, जो यहाँ की उन्नत कृषि पद्धति को दर्शाता है।"
    },
    {
        question: "सिंधु घाटी सभ्यता का सबसे बड़ा भारतीय स्थल कौन सा है?",
        answers: [
            { text: "लोथल", correct: false },
            { text: "धौलावीरा", correct: false },
            { text: "राखीगढ़ी", correct: true },
            { text: "रोपड़", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राखीगढ़ी (हरियाणा) भारत में स्थित सिंधु घाटी सभ्यता का सबसे बड़ा स्थल है, जबकि पूरी सभ्यता का सबसे बड़ा स्थल मोहनजोदड़ो है।"
    },
    {
        question: "सिंधु सभ्यता में 'बंदरगाह' किस स्थल से मिला है?",
        answers: [
            { text: "कालीबंगा", correct: false },
            { text: "लोथल", correct: true },
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल एक कृत्रिम गोदी (dockyard) वाला स्थल था, जो सिंधु सभ्यता का एक महत्वपूर्ण बंदरगाह था।"
    },
    {
        question: "सिंधु सभ्यता में घरों का निर्माण किससे होता था?",
        answers: [
            { text: "मिट्टी", correct: false },
            { text: "पत्थर", correct: false },
            { text: "कच्ची ईंटें", correct: false },
            { text: "पक्की ईंटें", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की एक महत्वपूर्ण विशेषता पक्की ईंटों का उपयोग था, जो शहरी जीवन के उन्नत स्तर को दर्शाता है।"
    },
    {
        question: "सिंधु घाटी सभ्यता की लिपि कैसी थी?",
        answers: [
            { text: "चित्रात्मक", correct: true },
            { text: "ब्राह्मी", correct: false },
            { text: "देवनागरी", correct: false },
            { text: "खरोष्ठी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु लिपि को अभी तक पढ़ा नहीं जा सका है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भाव-चित्रात्मक (Pictographic) लिपि थी, जिसमें 400 से अधिक चिन्ह थे।"
    },
    {
        question: "सिंधु घाटी सभ्यता में किस जानवर का चित्रण नहीं मिलता है?",
        answers: [
            { text: "गाय", correct: true },
            { text: "हाथी", correct: false },
            { text: "बाघ", correct: false },
            { text: "गेंडा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की मोहरों पर बाघ, हाथी, गेंडा और भैंस जैसे जानवरों का चित्रण मिलता है, लेकिन गाय का चित्रण बहुत कम या बिल्कुल नहीं मिलता।"
    },
    {
        question: "सिंधु सभ्यता के लोगों का मुख्य आहार क्या था?",
        answers: [
            { text: "गेहूँ और जौ", correct: true },
            { text: "चावल और मक्का", correct: false },
            { text: "मछली और मांस", correct: false },
            { text: "फल और सब्जियाँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खुदाई में मिले अनाजों के साक्ष्यों से पता चलता है कि गेहूँ और जौ सिंधु सभ्यता के लोगों का प्रमुख आहार था।"
    },
    {
        question: "'द ग्रेट ग्रेनरी' (विशाल अन्नागार) किस स्थल से मिला है?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: true },
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा में एक विशाल अन्नागार मिला है, जो 12 छोटे-छोटे अन्नागारों का समूह था।<br><br><i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो में भी एक बड़ा अन्नागार मिला है।"
    },
    {
        question: "सिंधु सभ्यता के लोग किस देवता की पूजा करते थे?",
        answers: [
            { text: "इंद्र और वरुण", correct: false },
            { text: "ब्रह्मा और विष्णु", correct: false },
            { text: "पशुपति महादेव", correct: true },
            { text: "शिव और दुर्गा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से मिली एक मुहर पर तीन सिर वाले देवता (जिन्हें जॉन मार्शल ने 'पशुपति महादेव' नाम दिया) की आकृति मिली है, जो उनकी धार्मिक प्रथाओं को दर्शाती है।"
    },
    {
        question: "सिंधु सभ्यता का समाज कैसा था?",
        answers: [
            { text: "मातृसत्तात्मक", correct: true },
            { text: "पितृसत्तात्मक", correct: false },
            { text: "दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़ी संख्या में मिली नारी की मूर्तियों के कारण इतिहासकारों का मानना है कि सिंधु समाज मातृसत्तात्मक था।"
    },
    {
        question: "सिंधु सभ्यता की समकालीन कौन सी सभ्यता थी?",
        answers: [
            { text: "यूनानी सभ्यता", correct: false },
            { text: "रोमन सभ्यता", correct: false },
            { text: "मिस्र और मेसोपोटामिया की सभ्यता", correct: true },
            { text: "चीनी सभ्यता", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु घाटी सभ्यता का मेसोपोटामिया और मिस्र की सभ्यताओं के साथ व्यापारिक और सांस्कृतिक संबंध थे, जो उन्हें समकालीन बनाता है।"
    },
    {
        question: "सिंधु सभ्यता के लोग व्यापार में किस प्रणाली का उपयोग करते थे?",
        answers: [
            { text: "वस्तु विनिमय प्रणाली (Barter System)", correct: true },
            { text: "सिक्का प्रणाली", correct: false },
            { text: "धातु मुद्रा", correct: false },
            { text: "कागज की मुद्रा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में व्यापार वस्तु विनिमय प्रणाली पर आधारित था, क्योंकि वहाँ से किसी भी प्रकार की मुद्रा या सिक्कों का साक्ष्य नहीं मिला है।"
    },
    {
        question: "हड़प्पा सभ्यता का सबसे पूर्वी स्थल कौन सा है?",
        answers: [
            { text: "रोपड़", correct: false },
            { text: "लोथल", correct: false },
            { text: "आलमगीरपुर", correct: true },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलमगीरपुर उत्तर प्रदेश में हिंडन नदी के किनारे स्थित है और यह सिंधु सभ्यता का सबसे पूर्वी स्थल माना जाता है।"
    },
    {
        question: "धौलावीरा किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "हरियाणा", correct: false },
            { text: "गुजरात", correct: true },
            { text: "पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धौलावीरा गुजरात के कच्छ जिले में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने अद्वितीय जल प्रबंधन प्रणाली और तीन भागों में विभाजित शहर के लिए जाना जाता है।"
    },
    {
        question: "रोपड़ किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "सतलुज", correct: true },
            { text: "रावी", correct: false },
            { text: "सिंधु", correct: false },
            { text: "घग्गर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोपड़ (अब रूपनगर) पंजाब में सतलुज नदी के तट पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से मानव के साथ कुत्ते को दफनाने का साक्ष्य मिला है।"
    },
    {
        question: "हरियाणा में स्थित सिंधु सभ्यता का प्रमुख स्थल कौन सा है?",
        answers: shuffle([
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "बनावली", correct: true },
            { text: "रोपड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बनावली हरियाणा के फतेहाबाद जिले में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से मिट्टी का हल और जौ के दाने मिले हैं।"
    },
    {
        question: "किस हड़प्पा स्थल से जल प्रबंधन प्रणाली का प्रमाण मिलता है?",
        answers: shuffle([
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "धौलावीरा", correct: true },
            { text: "कालीबंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धौलावीरा अपने विशाल जलाशयों और उन्नत जल संचयन प्रणाली के लिए प्रसिद्ध था, जो इसे सिंधु सभ्यता का एक अनूठा शहर बनाता है।"
    },
    {
        question: "सिंधु सभ्यता के पतन का एक प्रमुख कारण क्या माना जाता है?",
        answers: shuffle([
            { text: "प्राकृतिक आपदाएँ (बाढ़, सूखा)", correct: false },
            { text: "आर्यों का आक्रमण", correct: false },
            { text: "व्यापार का पतन", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के पतन के कई सिद्धांत हैं, जिनमें बाढ़, जलवायु परिवर्तन, नदियों का सूखना, और आर्यों का आक्रमण जैसे कारण शामिल हैं।"
    },
    {
        question: "सिंधु सभ्यता के लोग किस प्रकार के वस्त्र पहनते थे?",
        answers: shuffle([
            { text: "केवल सूती", correct: false },
            { text: "केवल ऊनी", correct: false },
            { text: "सूती और ऊनी दोनों", correct: true },
            { text: "रेशमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो में प्राप्त सूती कपड़े के साक्ष्य और भेड़ पालन के प्रमाण यह दर्शाते हैं कि सिंधु सभ्यता के लोग सूती और ऊनी दोनों प्रकार के वस्त्र पहनते थे।"
    },
    {
        question: "सिंधु सभ्यता में माप-तोल के लिए किस अनुपात का उपयोग होता था?",
        answers: shuffle([
            { text: "10 के अनुपात में", correct: false },
            { text: "12 के अनुपात में", correct: false },
            { text: "16 के अनुपात में", correct: true },
            { text: "20 के अनुपात में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में मानक बाट और मापन की इकाइयाँ 16 के गुणक पर आधारित थीं, जैसे 16, 32, 64, 160 आदि।"
    },
    {
        question: "सिंधु सभ्यता में किस पशु को पवित्र माना जाता था?",
        answers: shuffle([
            { text: "गाय", correct: false },
            { text: "घोड़ा", correct: false },
            { text: "कूबड़ वाला बैल (हंपड बुल)", correct: true },
            { text: "भेड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कूबड़ वाले बैल का चित्रण सिंधु सभ्यता की मोहरों पर अक्सर मिलता है, जिससे यह अनुमान लगाया जाता है कि इसे पवित्र माना जाता था।"
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार की मुहरें (Seals) बनाते थे?",
        answers: shuffle([
            { text: "मिट्टी की", correct: false },
            { text: "पत्थर की", correct: false },
            { text: "सेलखड़ी (Steatite) की", correct: true },
            { text: "हाथीदांत की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की अधिकांश मुहरें सेलखड़ी नामक एक नरम पत्थर से बनी थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन पर जानवरों और प्रतीकों की आकृतियाँ उकेरी गई थीं।"
    },
    {
        question: "'गोदीवाड़ा' (Dockyard) का साक्ष्य किस स्थल से मिला है?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: true },
            { text: "धौलावीरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल में एक कृत्रिम गोदीवाड़ा मिला है, जिससे पता चलता है कि यह सिंधु सभ्यता का एक प्रमुख बंदरगाह था।"
    },
    {
        question: "'मिट्टी के हल' का खिलौना किस स्थल से प्राप्त हुआ है?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "बनावली", correct: true },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बनावली से मिट्टी से बना हुआ एक हल का खिलौना मिला है, जो इस बात का संकेत देता है कि सिंधु सभ्यता के लोग हल का उपयोग कृषि के लिए करते थे।"
    },
    {
        question: "सिंधु सभ्यता के लोग किन फसलों का उत्पादन करते थे?",
        answers: shuffle([
            { text: "गेहूँ, जौ, चावल", correct: false },
            { text: "गेहूँ, जौ, सरसों, कपास", correct: true },
            { text: "चावल, मक्का, बाजरा", correct: false },
            { text: "केवल गेहूँ और जौ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के स्थलों से गेहूँ, जौ, सरसों, तिल और कपास जैसी फसलों के साक्ष्य मिले हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> कपास का उत्पादन सबसे पहले यहीं हुआ था।"
    },
    {
        question: "सिंधु घाटी सभ्यता का सबसे दक्षिणी स्थल कौन सा है?",
        answers: shuffle([
            { text: "मांडा", correct: false },
            { text: "आलमगीरपुर", correct: false },
            { text: "सुत्कागेंडोर", correct: false },
            { text: "दायमाबाद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दायमाबाद महाराष्ट्र में गोदावरी नदी के तट पर स्थित है, जो सिंधु सभ्यता का सबसे दक्षिणी स्थल है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'अग्नि वेदी' (Fire Altar) के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "लोथल और कालीबंगा", correct: true },
            { text: "हड़प्पा और मोहनजोदड़ो", correct: false },
            { text: "धौलावीरा और बनावली", correct: false },
            { text: "रोपड़ और आलमगीरपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और कालीबंगा दोनों स्थलों से अग्नि वेदियों के साक्ष्य मिले हैं, जो संभवतः धार्मिक अनुष्ठानों के लिए उपयोग होती थीं।"
    },
    {
        question: "हड़प्पा सभ्यता के किस स्थल से घोड़े की हड्डियों के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "कालीबंगा", correct: false },
            { text: "सुरकोटदा", correct: true },
            { text: "लोथल", correct: false },
            { text: "आलमगीरपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुरकोटदा (गुजरात) एकमात्र ऐसा स्थल है जहाँ से घोड़े की हड्डियों के साक्ष्य मिले हैं, हालांकि विद्वानों में घोड़े के उपयोग को लेकर मतभेद हैं।"
    },
    {
        question: "सिंधु सभ्यता की मुहरों पर सबसे अधिक किस जानवर का अंकन है?",
        answers: shuffle([
            { text: "एक सींग वाला गेंडा (यूनिकॉर्न)", correct: true },
            { text: "बाघ", correct: false },
            { text: "हाथी", correct: false },
            { text: "बैल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सींग वाला गेंडा सिंधु सभ्यता की मुहरों पर सबसे अधिक चित्रित होने वाला जानवर था, जिसे संभवतः एक पवित्र या पौराणिक जानवर माना जाता था।"
    },
    {
        question: "हड़प्पा संस्कृति का ज्ञान कहाँ से प्राप्त हुआ है?",
        answers: shuffle([
            { text: "वेद", correct: false },
            { text: "पुरातात्विक खुदाई", correct: true },
            { text: "साहित्य", correct: false },
            { text: "यात्रा विवरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा संस्कृति के बारे में जानकारी का मुख्य स्रोत पुरातात्विक खुदाई से प्राप्त अवशेष हैं, क्योंकि इसकी लिपि को अभी तक पढ़ा नहीं जा सका है।"
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस वृक्ष की पूजा करते थे?",
        answers: shuffle([
            { text: "पीपल", correct: true },
            { text: "बरगद", correct: false },
            { text: "नीम", correct: false },
            { text: "आम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की कई मुहरों पर पीपल के वृक्ष की आकृति मिली है, जिससे यह अनुमान लगाया जाता है कि वे इसकी पूजा करते थे।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से \"नर्तकी की कांस्य प्रतिमा\" मिली है?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "लोथल", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "बनावली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से मिली \"नर्तकी की कांस्य प्रतिमा\" सिंधु सभ्यता की कला और धातु विज्ञान का उत्कृष्ट उदाहरण है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से एक कुत्ता, मानव कंकाल के साथ दफनाया गया था?",
        answers: shuffle([
            { text: "रोपड़", correct: true },
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "धौलावीरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब में स्थित रोपड़ से एक कब्र मिली है जिसमें मानव के साथ कुत्ते को दफनाया गया था, जो संभवतः मृत्यु के बाद जीवन की अवधारणा को दर्शाता है।"
    },
    {
        question: "हड़प्पावासी किस वस्तु के उत्पादन में सबसे आगे थे?",
        answers: shuffle([
            { text: "मुद्राएँ", correct: false },
            { text: "कांस्य उपकरण", correct: false },
            { text: "कपास", correct: true },
            { text: "जौ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग सबसे पहले कपास का उत्पादन करने वाले थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यूनानी लोग इसे \"सिंडन\" (Sindon) कहते थे, जो सिंधु से उत्पन्न हुआ है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से एक 'ईंट' पर बिल्ली का पीछा करते हुए कुत्ते के पैरों के निशान मिले हैं?",
        answers: shuffle([
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "चन्हुदड़ो", correct: true },
            { text: "मोहनजोदड़ो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चन्हुदड़ो (पाकिस्तान) से मिली एक ईंट पर बिल्ली का पीछा करते हुए कुत्ते के पैरों के निशान मिले हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्थल मनके बनाने के लिए प्रसिद्ध था।"
    },
    {
        question: "सिंधु घाटी सभ्यता का सबसे पश्चिमी स्थल कौन सा है?",
        answers: shuffle([
            { text: "आलमगीरपुर", correct: false },
            { text: "सुत्कागेंडोर", correct: true },
            { text: "मांडा", correct: false },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुत्कागेंडोर पाकिस्तान-ईरान सीमा पर स्थित है, जो सिंधु सभ्यता का सबसे पश्चिमी स्थल है।"
    },
    {
        question: "सिंधु सभ्यता का सबसे उत्तरी स्थल कौन सा है?",
        answers: shuffle([
            { text: "रोपड़", correct: false },
            { text: "मांडा", correct: true },
            { text: "लोथल", correct: false },
            { text: "धौलावीरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मांडा जम्मू और कश्मीर में चिनाब नदी के तट पर स्थित है, जो सिंधु सभ्यता का सबसे उत्तरी स्थल है।"
    },
    {
        question: "सिंधु सभ्यता का समाज किस आधार पर वर्गीकृत था?",
        answers: shuffle([
            { text: "जाति", correct: false },
            { text: "वर्ण", correct: false },
            { text: "वर्ग (पुरोहित, योद्धा, व्यापारी, श्रमिक)", correct: true },
            { text: "कोई वर्गीकरण नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में सामाजिक वर्गीकरण के साक्ष्य मिलते हैं, जहाँ शहरों को उच्च दुर्ग और निचले शहर में बांटा गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> पुरोहित, योद्धा, व्यापारी और श्रमिक जैसे वर्ग मौजूद थे।"
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