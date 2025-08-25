const questions = [
    {
        topHeading: "सिंधु सभ्यता पर आधारित बहुविकल्पीय प्रश्न part 2 (quiz_no.12)"
    },
    {
        question: "किस हड़प्पा स्थल को उसके तीन भागों में विभाजित शहर के लिए जाना जाता है?",
        answers: [
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "धौलावीरा", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश हड़प्पा शहर दो भागों (दुर्ग और निचला शहर) में विभाजित थे, जबकि धौलावीरा तीन भागों (दुर्ग, मध्य शहर और निचला शहर) में विभाजित था, जो इसकी एक अनूठी विशेषता है।"
    },
    {
        question: "सिंधु सभ्यता में सबसे अच्छी तरह से नियोजित जल निकासी प्रणाली किस शहर में थी?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "कालीबंगा", correct: false },
            { text: "बनावली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो में एक उन्नत और कुशल जल निकासी प्रणाली थी।<br><br><i class='fa-solid fa-angles-right icon'></i> हर घर से नालियाँ मुख्य नाले में मिलती थीं, जो शहरी स्वच्छता का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल में कोई दुर्ग (Citadel) नहीं था?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "चन्हुदड़ो", correct: true },
            { text: "लोथल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चन्हुदड़ो एकमात्र ऐसा सिंधु शहर था जहाँ कोई दुर्ग नहीं था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शहर मनके बनाने और अन्य शिल्पकलाओं के लिए प्रसिद्ध था।"
    },
    {
        question: "हड़प्पावासी व्यापार के लिए किस पद्धति का उपयोग करते थे?",
        answers: [
            { text: "सिक्का", correct: false },
            { text: "क्रेडिट कार्ड", correct: false },
            { text: "वस्तु-विनिमय", correct: true },
            { text: "धातु मुद्रा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में व्यापार वस्तु-विनिमय (barter system) प्रणाली पर आधारित था, क्योंकि वहाँ से किसी भी प्रकार के सिक्के या मुद्रा का प्रमाण नहीं मिला है।"
    },
    {
        question: "किस सिंधु स्थल से 'मनके बनाने का कारखाना' मिला है?",
        answers: [
            { text: "कालीबंगा", correct: false },
            { text: "लोथल और चन्हुदड़ो", correct: true },
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और चन्हुदड़ो दोनों स्थलों से मनके बनाने के कारखाने और संबंधित उपकरण मिले हैं, जो यह दर्शाते हैं कि ये शहर शिल्पकला के प्रमुख केंद्र थे।"
    },
    {
        question: "हड़प्पा सभ्यता के लोगों का मेसोपोटामिया के साथ व्यापारिक संबंध था। मेसोपोटामिया के अभिलेखों में सिंधु क्षेत्र को क्या कहा गया है?",
        answers: [
            { text: "दिलमुन", correct: false },
            { text: "मेलुहा", correct: true },
            { text: "मगन", correct: false },
            { text: "अक्कड", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसोपोटामिया के अभिलेखों में \"मेलुहा\" नामक स्थान का उल्लेख है, जिसकी पहचान सिंधु क्षेत्र के रूप में की गई है।"
    },
    {
        question: "सिंधु सभ्यता में किस वस्तु का आयात किया जाता था?",
        answers: [
            { text: "तांबा", correct: false },
            { text: "सोना", correct: false },
            { text: "लाजवर्द (Lapis Lazuli)", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग तांबा, सोना, चाँदी, लाजवर्द और अन्य कीमती पत्थरों का आयात करते थे, क्योंकि ये वस्तुएं स्थानीय रूप से पर्याप्त मात्रा में उपलब्ध नहीं थीं।"
    },
    {
        question: "हड़प्पावासियों ने लाजवर्द (Lapis Lazuli) कहाँ से आयात किया था?",
        answers: [
            { text: "राजस्थान", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "अफगानिस्तान", correct: true },
            { text: "गुजरात", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाजवर्द का आयात अफगानिस्तान में स्थित शोरतुगई (Shortugai) से किया जाता था, जो सिंधु सभ्यता की एक महत्वपूर्ण व्यापारिक बस्ती थी।"
    },
    {
        question: "किस स्थान से 'हाथी दांत का पैमाना' मिला है?",
        answers: [
            { text: "लोथल", correct: true },
            { text: "हड़प्पा", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "मोहनजोदड़ो", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल से हाथी दांत से बना एक पैमाना मिला है, जो दर्शाता है कि यहाँ के लोग माप-तोल की प्रणाली से अच्छी तरह परिचित थे।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'अग्नि वेदी' के साक्ष्य मिले हैं?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "कालीबंगा", correct: true },
            { text: "धौलावीरा", correct: false },
            { text: "बनावली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगा से कई अग्नि वेदियों के साक्ष्य मिले हैं, जो संभवतः धार्मिक अनुष्ठानों के लिए उपयोग होती थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> लोथल से भी ऐसे साक्ष्य मिले हैं।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल पर 'तीन-स्तरीय रक्षा प्राचीर' मिली है?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: false },
            { text: "धौलावीरा", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धौलावीरा शहर तीन भागों में बंटा हुआ था और प्रत्येक भाग को एक विशाल दीवार से घेरा गया था, जिसे तीन-स्तरीय रक्षा प्राचीर कहा जाता है।"
    },
    {
        question: "हड़प्पा सभ्यता के किस स्थल पर 'एक कब्रिस्तान' मिला है जिसमें 37 कब्रें मिली हैं?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: false },
            { text: "हड़प्पा", correct: true },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा के किले के बाहर एक कब्रिस्तान मिला है, जिसे \"कब्रिस्तान आर-37\" कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से 37 कब्रें मिली हैं, जिनमें से कुछ में ताबूत भी मिले हैं।"
    },
    {
        question: "सिंधु सभ्यता में मोहरों (Seals) पर किस जानवर का चित्रण नहीं मिलता है?",
        answers: [
            { text: "बाघ", correct: false },
            { text: "हाथी", correct: false },
            { text: "घोड़ा", correct: true },
            { text: "गेंडा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की अधिकांश मोहरों पर बाघ, हाथी, गेंडा और बैल जैसे जानवरों का चित्रण है।<br><br><i class='fa-solid fa-angles-right icon'></i> घोड़े का चित्रण दुर्लभ है, और कुछ स्थलों से केवल हड्डियों के साक्ष्य मिले हैं।"
    },
    {
        question: "सिंधु सभ्यता में 'मुहरें' किस धातु या पदार्थ से बनती थीं?",
        answers: [
            { text: "तांबा", correct: false },
            { text: "सेलखड़ी (Steatite)", correct: true },
            { text: "लोहा", correct: false },
            { text: "सोना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश मुहरें सेलखड़ी नामक एक नरम पत्थर से बनी थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> कुछ मुहरें मिट्टी और हाथीदांत से भी बनी थीं।"
    },
    {
        question: "सिंधु सभ्यता के लोगों का मुख्य आहार क्या था?",
        answers: [
            { text: "केवल गेहूँ", correct: false },
            { text: "केवल जौ", correct: false },
            { text: "गेहूँ, जौ, और चावल", correct: false },
            { text: "गेहूँ और जौ", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोगों का मुख्य आहार गेहूँ और जौ था।<br><br><i class='fa-solid fa-angles-right icon'></i> चावल के साक्ष्य भी लोथल और रंगपुर से मिले हैं, लेकिन ये कम मात्रा में थे।"
    },
    {
        question: "हड़प्पा सभ्यता की खुदाई में किस प्रकार के घर पाए गए हैं?",
        answers: [
            { text: "केवल बहुमंजिला", correct: false },
            { text: "केवल एकमंजिला", correct: false },
            { text: "एकमंजिला और बहुमंजिला दोनों", correct: true },
            { text: "केवल झोपड़ियाँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु शहरों में एकमंजिला और बहुमंजिला दोनों प्रकार के घर पाए गए हैं, जो सामाजिक और आर्थिक असमानता को दर्शाते हैं।"
    },
    {
        question: "सिंधु घाटी सभ्यता के किस स्थल से 'एक पत्थर की मूर्ति' मिली है जिसमें एक पुजारी या राजा को दर्शाया गया है?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "कालीबंगा", correct: false },
            { text: "लोथल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से एक पत्थर की मूर्ति मिली है जिसे 'पुजारी राजा' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मूर्ति एक शाल ओढ़े हुए व्यक्ति को दर्शाती है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'कब्र में ताबूत' के साक्ष्य मिले हैं?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: false },
            { text: "हड़प्पा", correct: true },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा के कब्रिस्तान में लकड़ी के ताबूत में दफनाए गए कंकाल मिले हैं, जो एक विशेष प्रकार की अंतिम संस्कार पद्धति को दर्शाता है।"
    },
    {
        question: "सिंधु घाटी सभ्यता का सबसे बड़ा स्थल 'मोहनजोदड़ो' वर्तमान में कहाँ स्थित है?",
        answers: [
            { text: "भारत", correct: false },
            { text: "पाकिस्तान", correct: true },
            { text: "अफगानिस्तान", correct: false },
            { text: "नेपाल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो पाकिस्तान के सिंध प्रांत में स्थित है।"
    },
    {
        question: "सिंधु सभ्यता के लोगों का सबसे महत्वपूर्ण उद्योग क्या था?",
        answers: [
            { text: "कपड़ा उद्योग", correct: false },
            { text: "धातु उद्योग", correct: false },
            { text: "मिट्टी के बर्तन बनाना", correct: true },
            { text: "मनके बनाना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में मिट्टी के बर्तन (पॉटरी) बनाना एक प्रमुख उद्योग था।<br><br><i class='fa-solid fa-angles-right icon'></i> ये बर्तन लाल रंग के होते थे और उन पर काले रंग से चित्रकारी की जाती थी।"
    },
    {
        question: "सिंधु सभ्यता का सबसे बड़ा भवन कौन सा है?",
        answers: [
            { text: "विशाल स्नानागार", correct: false },
            { text: "अन्नागार", correct: true },
            { text: "सभागार", correct: false },
            { text: "दुर्ग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो का अन्नागार सिंधु सभ्यता का सबसे बड़ा भवन था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक विशाल इमारत थी जिसका उपयोग अनाज के भंडारण के लिए किया जाता था।"
    },
    {
        question: "सिंधु घाटी सभ्यता में 'पशुपति' की मुहर पर कौन-कौन से जानवर हैं?",
        answers: [
            { text: "हाथी, बाघ, गेंडा, भैंसा", correct: true },
            { text: "हाथी, बाघ, हिरण, बैल", correct: false },
            { text: "गाय, भैंस, हाथी, गेंडा", correct: false },
            { text: "शेर, घोड़ा, बाघ, भैंसा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो की पशुपति मुहर पर एक पुरुष आकृति के चारों ओर हाथी, बाघ, गेंडा और भैंसा को दर्शाया गया है, और उनके पैरों के पास दो हिरण हैं।"
    },
    {
        question: "हड़प्पा सभ्यता में 'टेराकोटा' (पकी हुई मिट्टी) का उपयोग किसलिए होता था?",
        answers: [
            { text: "हथियार बनाने के लिए", correct: false },
            { text: "मूर्तियाँ और खिलौने बनाने के लिए", correct: true },
            { text: "बर्तन बनाने के लिए", correct: false },
            { text: "घरों के निर्माण के लिए", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेराकोटा का उपयोग देवी-देवताओं की मूर्तियों, खिलौनों (जैसे बैलगाड़ी और पशु) और अन्य सजावटी वस्तुओं को बनाने के लिए किया जाता था।"
    },
    {
        question: "सिंधु सभ्यता के लोगों की प्रमुख धार्मिक विशेषता क्या थी?",
        answers: [
            { text: "मंदिरों में पूजा", correct: false },
            { text: "यज्ञ", correct: false },
            { text: "मूर्ति पूजा", correct: false },
            { text: "प्रकृति की पूजा", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में मंदिरों का कोई स्पष्ट प्रमाण नहीं मिला है।<br><br><i class='fa-solid fa-angles-right icon'></i> लोग मातृदेवी, पशुपति और पीपल जैसे वृक्षों की पूजा करते थे, जो प्रकृति पूजा को दर्शाता है।"
    },
    {
        question: "हड़प्पावासी किस प्रकार के औजार और हथियार बनाते थे?",
        answers: [
            { text: "लोहे के", correct: false },
            { text: "केवल पत्थर के", correct: false },
            { text: "तांबे और कांसे के", correct: true },
            { text: "तांबे, कांसे और लोहे के", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता एक कांस्य युगीन सभ्यता थी।<br><br><i class='fa-solid fa-angles-right icon'></i> लोग तांबे और कांसे से बने औजार, हथियार और बर्तन बनाते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> लोहे का ज्ञान उन्हें नहीं था।"
    },
    {
        question: "धौलावीरा में किस प्रकार का जल संचयन प्रणाली का प्रमाण मिला है?",
        answers: shuffle([
            { text: "कुएं", correct: false },
            { text: "नहरें", correct: false },
            { text: "विशाल जलाशय", correct: true },
            { text: "नदी के तटबंध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धौलावीरा में पत्थरों से बने बड़े-बड़े जलाशय मिले हैं, जो वर्षा जल को संरक्षित करने के लिए बनाए गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह यहाँ की उन्नत जल प्रबंधन तकनीक को दर्शाता है।"
    },
    {
        question: "सिंधु सभ्यता में सड़कों और नालियों के निर्माण में किस अनुपात की ईंटों का उपयोग होता था?",
        answers: shuffle([
            { text: "3:2:1", correct: false },
            { text: "4:2:1", correct: true },
            { text: "5:3:2", correct: false },
            { text: "2:1:1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में मकानों, सड़कों और नालियों के निर्माण में मानकीकृत ईंटों का उपयोग होता था, जिनका अनुपात 4:2:1 (लंबाई:चौड़ाई:ऊँचाई) था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से लगभग हर घर में कुएँ के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "लोथल", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "कालीबंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो में लगभग हर घर में अपना एक कुआँ था, जिससे पता चलता है कि वहाँ पानी की व्यवस्था बहुत उन्नत थी।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'अग्निवेशी' (Fire Altar) के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "लोथल और कालीबंगा", correct: true },
            { text: "मोहनजोदड़ो और हड़प्पा", correct: false },
            { text: "धौलावीरा और बनावली", correct: false },
            { text: "रोपड़ और आलमगीरपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और कालीबंगा दोनों स्थलों से आयताकार या वृत्ताकार अग्नि वेदियों के साक्ष्य मिले हैं, जो संभवतः धार्मिक अनुष्ठानों या यज्ञों के लिए उपयोग की जाती थीं।"
    },
    {
        question: "सिंधु सभ्यता के लोगों ने किन जानवरों को पालतू बनाया था?",
        answers: shuffle([
            { text: "कुत्ता, बिल्ली, गाय", correct: false },
            { text: "कुत्ता, बिल्ली, भैंस, भेड़", correct: true },
            { text: "घोड़ा, कुत्ता, गाय", correct: false },
            { text: "भैंसा, हाथी, ऊँट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग कुत्ता, बिल्ली, भैंस, भेड़, बकरी और सूअर जैसे जानवरों को पालते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> गाय के साक्ष्य कम मिले हैं।"
    },
    {
        question: "सिंधु सभ्यता के लोग किस धातु का आयात खेतड़ी (राजस्थान) से करते थे?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चाँदी", correct: false },
            { text: "तांबा", correct: true },
            { text: "टिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खेतड़ी (राजस्थान) की खानें तांबे के लिए प्रसिद्ध थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग यहाँ से तांबा आयात करते थे।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'चावल की भूसी' के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "हड़प्पा और मोहनजोदड़ो", correct: false },
            { text: "कालीबंगा और बनावली", correct: false },
            { text: "लोथल और रंगपुर", correct: true },
            { text: "रोपड़ और आलमगीरपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात में स्थित लोथल और रंगपुर से चावल की भूसी के साक्ष्य मिले हैं, जो यह दर्शाते हैं कि सिंधु सभ्यता के लोग चावल का भी उत्पादन करते थे।"
    },
    {
        question: "सिंधु सभ्यता में 'व्यापार' का मुख्य माध्यम क्या था?",
        answers: shuffle([
            { text: "नाव और बैलगाड़ी", correct: true },
            { text: "ऊंट और घोड़े", correct: false },
            { text: "केवल पैदल", correct: false },
            { text: "हवाई मार्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग बैलगाड़ियों का उपयोग आंतरिक व्यापार के लिए और नावों का उपयोग समुद्री व्यापार के लिए करते थे।"
    },
    {
        question: "सिंधु सभ्यता की मुहरों पर अक्सर किस प्रकार की लिपि अंकित होती थी?",
        answers: shuffle([
            { text: "देवनागरी", correct: false },
            { text: "ब्राह्मी", correct: false },
            { text: "खरोष्ठी", correct: false },
            { text: "चित्रात्मक (Pictographic)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु लिपि को अभी तक पढ़ा नहीं जा सका है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भाव-चित्रात्मक थी, जिसमें लगभग 400 से 600 चिन्ह थे।"
    },
    {
        question: "सिंधु सभ्यता का सबसे उत्तरी स्थल 'मांडा' किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "चिनाब", correct: true },
            { text: "सतलुज", correct: false },
            { text: "झेलम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मांडा जम्मू-कश्मीर में चिनाब नदी के तट पर स्थित है, जो सिंधु सभ्यता का सबसे उत्तरी स्थल है।"
    },
    {
        question: "सिंधु सभ्यता का भौगोलिक विस्तार किस आकार का था?",
        answers: shuffle([
            { text: "वर्गाकार", correct: false },
            { text: "आयताकार", correct: false },
            { text: "त्रिभुजाकार", correct: true },
            { text: "वृत्ताकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता का भौगोलिक विस्तार एक त्रिभुज के आकार का था, जिसमें उत्तर में मांडा, दक्षिण में दायमाबाद, पूर्व में आलमगीरपुर और पश्चिम में सुत्कागेंडोर था।"
    },
    {
        question: "सिंधु सभ्यता में 'मुहरों' का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "सिक्कों के रूप में", correct: false },
            { text: "गहनों के रूप में", correct: false },
            { text: "व्यापारिक पहचान और स्वामित्व के लिए", correct: true },
            { text: "धार्मिक अनुष्ठान के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहरों का उपयोग सामान को सील करने और व्यापारिक लेन-देन में पहचान के लिए किया जाता था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'एक पत्थर की मूर्ति' मिली है जो 'पुजारी राजा' के रूप में प्रसिद्ध है?",
        answers: shuffle([
            { text: "लोथल", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "हड़प्पा", correct: false },
            { text: "कालीबंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से एक पत्थर की मूर्ति मिली है, जिसे 'पुजारी राजा' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मूर्ति सभ्यता के राजनीतिक या धार्मिक नेतृत्व को दर्शाती है।"
    },
    {
        question: "सिंधु सभ्यता के पतन का 'आर्यों का आक्रमण' सिद्धांत किसने दिया था?",
        answers: shuffle([
            { text: "दयाराम साहनी", correct: false },
            { text: "राखालदास बनर्जी", correct: false },
            { text: "जॉन मार्शल", correct: false },
            { text: "मार्टिमर व्हीलर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मार्टिमर व्हीलर जैसे इतिहासकारों ने मोहनजोदड़ो में मिले नरकंकालों के आधार पर सिंधु सभ्यता के पतन का कारण आर्यों के आक्रमण को माना था।"
    },
    {
        question: "सिंधु सभ्यता का सबसे बड़ा भारतीय स्थल 'राखीगढ़ी' किस राज्य में है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: false },
            { text: "हरियाणा", correct: true },
            { text: "पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राखीगढ़ी हरियाणा के हिसार जिले में स्थित है और यह भारत में खोजा गया सबसे बड़ा सिंधु सभ्यता स्थल है।"
    },
    {
        question: "सिंधु सभ्यता के लोग किस प्रकार के मनके (Beads) बनाते थे?",
        answers: shuffle([
            { text: "सोने के", correct: false },
            { text: "चांदी के", correct: false },
            { text: "सेलखड़ी और कार्नेलियन जैसे पत्थरों के", correct: true },
            { text: "लोहे के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में मनके बनाने की कला बहुत उन्नत थी।<br><br><i class='fa-solid fa-angles-right icon'></i> ये मनके सेलखड़ी, कार्नेलियन, जैस्पर जैसे पत्थरों और तांबे से बनाए जाते थे।"
    },
    {
        question: "सिंधु सभ्यता में मातृदेवी की पूजा किस रूप में की जाती थी?",
        answers: shuffle([
            { text: "यज्ञ द्वारा", correct: false },
            { text: "मूर्तियों द्वारा", correct: true },
            { text: "चित्रकला द्वारा", correct: false },
            { text: "किसी भी रूप में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़ी संख्या में मिली मिट्टी (टेराकोटा) की नारी मूर्तियों को मातृदेवी का प्रतीक माना जाता है, जो प्रजनन और उर्वरता की देवी थीं।"
    },
    {
        question: "सिंधु लिपि में लिखने की विधि कैसी थी?",
        answers: shuffle([
            { text: "केवल बाएँ से दाएँ", correct: false },
            { text: "केवल दाएँ से बाएँ", correct: false },
            { text: "पहले दाएँ से बाएँ, फिर बाएँ से दाएँ (Boustrophedon)", correct: true },
            { text: "ऊपर से नीचे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु लिपि की लिखावट की दिशा 'बौस्ट्रोफेदोन' थी, जिसमें पहली पंक्ति दाएँ से बाएँ और दूसरी पंक्ति बाएँ से दाएँ लिखी जाती थी।"
    },
    {
        question: "सिंधु सभ्यता की सबसे महत्वपूर्ण विशेषता क्या थी?",
        answers: shuffle([
            { text: "पत्थर के औजार", correct: false },
            { text: "पशुपालन", correct: false },
            { text: "शहरी जीवन", correct: true },
            { text: "धातु के बर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता अपनी उन्नत शहरी योजना, जल निकासी प्रणाली, और पक्की ईंटों से बने घरों के कारण एक शहरी सभ्यता के रूप में जानी जाती है।"
    },
    {
        question: "सिंधु सभ्यता का ‘मांडा’ नामक स्थल किस राज्य/केंद्रशासित प्रदेश में स्थित है?",
        answers: shuffle([
            { text: "जम्मू और कश्मीर", correct: true },
            { text: "पंजाब", correct: false },
            { text: "हरियाणा", correct: false },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मांडा जम्मू-कश्मीर में चिनाब नदी के तट पर स्थित है।"
    },
    {
        question: "किस सिंधु स्थल से एक कुत्ते को मानव कंकाल के साथ दफनाया गया था?",
        answers: shuffle([
            { text: "लोथल", correct: false },
            { text: "रोपड़", correct: true },
            { text: "कालीबंगा", correct: false },
            { text: "मोहनजोदड़ो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोपड़ (पंजाब) से एक कब्र मिली है जिसमें मानव के साथ एक कुत्ते को दफनाया गया था, जो संभवतः मृत्यु के बाद जीवन की अवधारणा को दर्शाता है।"
    },
    {
        question: "हड़प्पा सभ्यता का सबसे बड़ा स्थल मोहनजोदड़ो कितने हेक्टेयर में फैला हुआ था?",
        answers: shuffle([
            { text: "50 हेक्टेयर", correct: false },
            { text: "100 हेक्टेयर", correct: false },
            { text: "150 हेक्टेयर", correct: false },
            { text: "200 हेक्टेयर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो लगभग 200 हेक्टेयर क्षेत्र में फैला हुआ था, जो इसे सिंधु सभ्यता का सबसे बड़ा शहर बनाता है।"
    },
    {
        question: "सिंधु सभ्यता का एकमात्र स्थल जिसमें निचला शहर भी किलेबंद था, कौन-सा है?",
        answers: shuffle([
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: true },
            { text: "बनावली", correct: false },
            { text: "धौलावीरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालीबंगा में निचला शहर भी दीवारों से घिरा हुआ था, जो अन्य सिंधु शहरों की तुलना में एक असामान्य विशेषता थी।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'हाथी दांत का पैमाना' मिला है?",
        answers: shuffle([
            { text: "कालीबंगा", correct: false },
            { text: "लोथल", correct: true },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल से हाथी दांत का बना एक पैमाना मिला है, जो दर्शाता है कि यहाँ के लोग माप-तोल की उन्नत प्रणाली से परिचित थे।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल को 'यूनेस्को विश्व विरासत स्थल' घोषित किया गया है?",
        answers: shuffle([
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "धौलावीरा", correct: true },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धौलावीरा को 2021 में यूनेस्को द्वारा विश्व विरासत स्थल घोषित किया गया था, जो इसकी अद्वितीय विशेषताओं के लिए महत्वपूर्ण है।"
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