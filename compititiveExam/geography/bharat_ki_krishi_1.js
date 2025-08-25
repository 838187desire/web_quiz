const questions = [  
    {
        topHeading: "भारत के कृषि पर आधारित बहुविकल्पीय प्रश्न part 1  (quiz_no. 95)."
    },
    {
        question: "'हरित क्रांति' का संबंध मुख्य रूप से किस फसल से है?",
        answers: shuffle([
            { text: "चावल", correct: false },
            { text: "दालें", correct: false },
            { text: "गेहूं", correct: true },
            { text: "तिलहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरित क्रांति का मुख्य उद्देश्य गेहूं और चावल के उत्पादन को बढ़ाना था, लेकिन इसका सर्वाधिक प्रभाव गेहूं की फसल पर पड़ा, जिसके उत्पादन में भारी वृद्धि हुई।"
    },
    {
        question: "भारत में 'श्वेत क्रांति' का जनक किसे माना जाता है?",
        answers: shuffle([
            { text: "एम. एस. स्वामीनाथन", correct: false },
            { text: "वर्गीज कुरियन", correct: true },
            { text: "एस. बी. राव", correct: false },
            { text: "त्रिभुवनदास पटेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. वर्गीज कुरियन को भारत में 'श्वेत क्रांति' का जनक माना जाता है, जिसका संबंध दुग्ध उत्पादन को बढ़ाने से है।"
    },
    {
        question: "भारत में कृषि किस प्रकार की अर्थव्यवस्था का हिस्सा है?",
        answers: shuffle([
            { text: "प्राथमिक", correct: true },
            { text: "द्वितीयक", correct: false },
            { text: "तृतीयक", correct: false },
            { text: "चतुर्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय अर्थव्यवस्था के तीन मुख्य क्षेत्र हैं: प्राथमिक (कृषि), द्वितीयक (उद्योग), और तृतीयक (सेवाएं)।<br><br><i class='fa-solid fa-angles-right icon'></i> कृषि प्राथमिक क्षेत्र का हिस्सा है क्योंकि यह सीधे प्राकृतिक संसाधनों का उपयोग करती है।"
    },
    {
        question: "'झूम खेती' भारत के किस क्षेत्र में प्रचलित है?",
        answers: shuffle([
            { text: "उत्तर-पूर्वी भारत", correct: true },
            { text: "दक्षिण भारत", correct: false },
            { text: "पश्चिमी भारत", correct: false },
            { text: "मध्य भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झूम खेती एक प्रकार की स्थानांतरण कृषि है जो मुख्य रूप से उत्तर-पूर्वी राज्यों (जैसे असम, मेघालय, नागालैंड) में की जाती है।"
    },
    {
        question: "'खरीफ फसलों' का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "शीतकालीन फसलें", correct: false },
            { text: "मानसूनी फसलें", correct: true },
            { text: "वसंत फसलें", correct: false },
            { text: "जायद फसलें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खरीफ फसलें, जैसे चावल, मक्का और बाजरा, मानसून के मौसम में बोई जाती हैं, इसलिए इन्हें मानसूनी फसलें भी कहते हैं।"
    },
    {
        question: "भारत में 'रबी फसलों' को किस मौसम में बोया जाता है?",
        answers: shuffle([
            { text: "वसंत", correct: false },
            { text: "ग्रीष्म", correct: false },
            { text: "शीत", correct: true },
            { text: "मानसून", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रबी फसलें, जैसे गेहूं और जौ, अक्टूबर-नवंबर में सर्दियों की शुरुआत में बोई जाती हैं और अप्रैल-मई में काटी जाती हैं।"
    },
    {
        question: "भारत में कौन सा राज्य 'चावल का कटोरा' के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "आंध्र प्रदेश", correct: true },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णा-गोदावरी डेल्टा क्षेत्र में चावल के अत्यधिक उत्पादन के कारण आंध्र प्रदेश को 'चावल का कटोरा' कहा जाता है।"
    },
    {
        question: "भारत में किस फसल का सबसे अधिक क्षेत्र है?",
        answers: shuffle([
            { text: "गेहूं", correct: false },
            { text: "चावल", correct: true },
            { text: "गन्ना", correct: false },
            { text: "दालें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में चावल सबसे अधिक बोई जाने वाली फसल है, खासकर गंगा-ब्रह्मपुत्र के मैदानों और तटीय क्षेत्रों में।"
    },
    {
        question: "'लाल क्रांति' का संबंध किससे है?",
        answers: shuffle([
            { text: "प्याज उत्पादन", correct: false },
            { text: "टमाटर और मांस उत्पादन", correct: true },
            { text: "दूध उत्पादन", correct: false },
            { text: "उर्वरक उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल क्रांति का संबंध टमाटर और मांस के उत्पादन को बढ़ाने से है।"
    },
    {
        question: "'पीली क्रांति' का संबंध किस फसल से है?",
        answers: shuffle([
            { text: "तिलहन", correct: true },
            { text: "दलहन", correct: false },
            { text: "आलू", correct: false },
            { text: "गन्ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीली क्रांति का उद्देश्य भारत में तिलहन फसलों (जैसे सरसों, सूरजमुखी) के उत्पादन को बढ़ाकर खाद्य तेलों में आत्मनिर्भरता प्राप्त करना था।"
    },
    {
        question: "भारत में 'गन्ने' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश भारत में गन्ने का सबसे बड़ा उत्पादक राज्य है।"
    },
    {
        question: "'काली मिर्च' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "आंध्र प्रदेश", correct: false },
            { text: "केरल", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल, जिसे 'मसालों का बगीचा' भी कहा जाता है, भारत में काली मिर्च का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "भारत में 'चाय' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "पश्चिम बंगाल", correct: false },
            { text: "असम", correct: true },
            { text: "त्रिपुरा", correct: false },
            { text: "मेघालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असम भारत का सबसे बड़ा चाय उत्पादक राज्य है, जो देश के कुल उत्पादन का लगभग 50% से अधिक हिस्सा प्रदान करता है।"
    },
    {
        question: "'कॉफी' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक भारत का सबसे बड़ा कॉफी उत्पादक राज्य है, जहाँ कुल उत्पादन का 70% से अधिक होता है।"
    },
    {
        question: "'तंबाकू' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "आंध्र प्रदेश", correct: true },
            { text: "गुजरात", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश भारत में तंबाकू का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "'रेशम' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "असम", correct: false },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक भारत में रेशम का सबसे बड़ा उत्पादक राज्य है।"
    },
    {
        question: "भारत में किस मिट्टी में 'कपास' की खेती सबसे अधिक होती है?",
        answers: shuffle([
            { text: "जलोढ़ मिट्टी", correct: false },
            { text: "काली मिट्टी", correct: true },
            { text: "लाल मिट्टी", correct: false },
            { text: "लेटराइट मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी, जिसे 'रेगुर मिट्टी' भी कहते हैं, कपास की खेती के लिए सबसे उपयुक्त होती है।"
    },
    {
        question: "'ऑपरेशन फ्लड' का संबंध किससे है?",
        answers: shuffle([
            { text: "बाढ़ नियंत्रण", correct: false },
            { text: "दुग्ध उत्पादन", correct: true },
            { text: "मछली पालन", correct: false },
            { text: "सिंचाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑपरेशन फ्लड (श्वेत क्रांति) भारत में दुग्ध उत्पादन बढ़ाने के लिए चलाया गया एक कार्यक्रम था।"
    },
    {
        question: "'नीली क्रांति' का संबंध किससे है?",
        answers: shuffle([
            { text: "तिलहन उत्पादन", correct: false },
            { text: "उर्वरक उत्पादन", correct: false },
            { text: "मत्स्य उत्पादन", correct: true },
            { text: "आलू उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीली क्रांति का उद्देश्य भारत में मत्स्य उत्पादन को बढ़ाना है।"
    },
    {
        question: "'गोल क्रांति' का संबंध किससे है?",
        answers: shuffle([
            { text: "टमाटर", correct: false },
            { text: "आलू", correct: true },
            { text: "प्याज", correct: false },
            { text: "अंडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोल क्रांति का संबंध आलू के उत्पादन को बढ़ावा देने से है।"
    },
    {
        question: "'हरित क्रांति' शब्द का प्रयोग सबसे पहले किसने किया था?",
        answers: shuffle([
            { text: "नॉर्मन बोरलॉग", correct: false },
            { text: "एम. एस. स्वामीनाथन", correct: false },
            { text: "विलियम गौड", correct: true },
            { text: "वर्गीज कुरियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हरित क्रांति' शब्द का सबसे पहले प्रयोग विलियम गौड ने किया था, जबकि नॉर्मन बोरलॉग को विश्व में और एम. एस. स्वामीनाथन को भारत में इसका जनक माना जाता है।"
    },
    {
        question: "भारत में किस फसल को 'सुनहरा रेशा' (Golden Fiber) कहा जाता है?",
        answers: shuffle([
            { text: "कपास", correct: false },
            { text: "जूट", correct: true },
            { text: "चाय", correct: false },
            { text: "रेशम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जूट को उसके चमकीले सुनहरे रंग और आर्थिक महत्व के कारण 'सुनहरा रेशा' कहा जाता है।"
    },
    {
        question: "भारत में 'जूट' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "असम", correct: false },
            { text: "पश्चिम बंगाल", correct: true },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल भारत का सबसे बड़ा जूट उत्पादक राज्य है।"
    },
    {
        question: "'गहन निर्वाह कृषि' का मुख्य उद्देश्य क्या होता है?",
        answers: shuffle([
            { text: "निर्यात के लिए फसलों का उत्पादन", correct: false },
            { text: "परिवार की खपत के लिए फसलों का उत्पादन", correct: true },
            { text: "औद्योगिकीकरण को बढ़ावा देना", correct: false },
            { text: "नकदी फसलों पर ध्यान देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गहन निर्वाह कृषि में किसान अपने और अपने परिवार की जरूरतों को पूरा करने के लिए छोटी भूमि पर अधिक श्रम और निवेश के साथ खेती करते हैं।"
    },
    {
        question: "'मसालों का बगीचा' के नाम से कौन सा राज्य प्रसिद्ध है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "केरल", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल अपने विविध प्रकार के मसालों जैसे काली मिर्च, इलायची, लौंग आदि के उत्पादन के लिए प्रसिद्ध है, इसलिए इसे 'मसालों का बगीचा' कहते हैं।"
    },
    {
        question: "भारत में 'तिलहन' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "गुजरात", correct: false },
            { text: "उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश भारत में तिलहन का सबसे बड़ा उत्पादक राज्य है, जिसमें सोयाबीन, सरसों और मूंगफली का प्रमुख उत्पादन होता है।"
    },
    {
        question: "'सदाबहार क्रांति' का संबंध किससे है?",
        answers: shuffle([
            { text: "फसल विविधीकरण", correct: false },
            { text: "बागवानी", correct: false },
            { text: "जैविक खेती", correct: false },
            { text: "समग्र कृषि विकास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सदाबहार क्रांति का उद्देश्य कृषि उत्पादन को बढ़ाना है, लेकिन बिना पर्यावरण को नुकसान पहुंचाए।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका लक्ष्य समग्र कृषि विकास को सुनिश्चित करना है।"
    },
    {
        question: "'रबी फसलों' का उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "चावल और मक्का", correct: false },
            { text: "गेहूं और जौ", correct: true },
            { text: "मूंगफली और कपास", correct: false },
            { text: "गन्ना और जूट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गेहूं और जौ रबी फसलें हैं, जिन्हें सर्दियों में बोया जाता है और गर्मियों में काटा जाता है।"
    },
    {
        question: "'कृषि वर्ष' की शुरुआत किस माह से होती है?",
        answers: shuffle([
            { text: "जनवरी", correct: false },
            { text: "अप्रैल", correct: false },
            { text: "जून", correct: false },
            { text: "जुलाई", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में कृषि वर्ष 1 जुलाई से शुरू होकर 30 जून को समाप्त होता है।"
    },
    {
        question: "भारत में 'श्वेत क्रांति' की शुरुआत किस दशक में हुई?",
        answers: shuffle([
            { text: "1950 का दशक", correct: false },
            { text: "1960 का दशक", correct: false },
            { text: "1970 का दशक", correct: true },
            { text: "1980 का दशक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेत क्रांति (ऑपरेशन फ्लड) 1970 में शुरू हुआ, जिसका उद्देश्य दुग्ध उत्पादन को बढ़ाना था।"
    },
    {
        question: "'गुलाबी क्रांति' का संबंध किससे है?",
        answers: shuffle([
            { text: "मांस उत्पादन", correct: false },
            { text: "प्याज और झींगा मछली उत्पादन", correct: true },
            { text: "आलू उत्पादन", correct: false },
            { text: "उर्वरक उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुलाबी क्रांति का संबंध प्याज और झींगा मछली के उत्पादन को बढ़ाने से है।"
    },
    {
        question: "'गन्ना' किस प्रकार की फसल है?",
        answers: shuffle([
            { text: "खरीफ", correct: true },
            { text: "रबी", correct: false },
            { text: "जायद", correct: false },
            { text: "रोपण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गन्ना एक खरीफ फसल है, जिसे मानसून की शुरुआत में बोया जाता है और इसकी कटाई में लगभग एक वर्ष का समय लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक उष्णकटिबंधीय और उपोष्णकटिबंधीय फसल है।"
    },
    {
        question: "'सोयाबीन' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "मध्य प्रदेश", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोयाबीन के अत्यधिक उत्पादन के कारण मध्य प्रदेश को 'सोया प्रदेश' भी कहा जाता है।"
    },
    {
        question: "भारत में 'मिश्रित कृषि' का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक ही खेत में दो या दो से अधिक फसलों को उगाना", correct: false },
            { text: "फसल उत्पादन और पशुपालन को एक साथ करना", correct: true },
            { text: "जैविक और रासायनिक उर्वरकों का उपयोग करना", correct: false },
            { text: "नकदी फसलों और खाद्य फसलों को एक साथ उगाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिश्रित कृषि में फसल उगाने के साथ-साथ पशुपालन भी किया जाता है, जिससे किसानों की आय में वृद्धि होती है।"
    },
    {
        question: "'सुनहरी क्रांति' का संबंध किससे है?",
        answers: shuffle([
            { text: "तिलहन उत्पादन", correct: false },
            { text: "बागवानी (फल, सब्जी)", correct: true },
            { text: "जूट उत्पादन", correct: false },
            { text: "मसाले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुनहरी क्रांति का संबंध बागवानी क्षेत्र से है, जिसमें फल, सब्जियां, शहद आदि के उत्पादन को बढ़ावा देना शामिल है।"
    },
    {
        question: "'सफेद सोना' किस फसल को कहा जाता है?",
        answers: shuffle([
            { text: "गन्ना", correct: false },
            { text: "चाय", correct: false },
            { text: "कपास", correct: true },
            { text: "जूट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपास को उसके महत्व और सफेद रंग के कारण 'सफेद सोना' कहा जाता है।"
    },
    {
        question: "भारत में 'रेशम' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: true },
            { text: "असम", correct: false },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक भारत का सबसे बड़ा रेशम उत्पादक राज्य है, जो देश के कुल उत्पादन का लगभग 70% से अधिक हिस्सा प्रदान करता है।"
    },
    {
        question: "भारत में 'काली मिर्च' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "केरल", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल, जिसे 'मसालों का बगीचा' भी कहते हैं, भारत में काली मिर्च का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "'झूम कृषि' को अन्य किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "गहन कृषि", correct: false },
            { text: "रोपण कृषि", correct: false },
            { text: "स्थानांतरण कृषि", correct: true },
            { text: "व्यापारिक कृषि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झूम कृषि में किसान जंगल को साफ करके कुछ समय के लिए खेती करते हैं और फिर भूमि की उर्वरता कम होने पर दूसरी जगह चले जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'स्थानांतरण कृषि' भी कहते हैं।"
    },
    {
        question: "'गहरी काली मिट्टी' किस फसल की खेती के लिए सबसे उपयुक्त है?",
        answers: shuffle([
            { text: "गन्ना", correct: false },
            { text: "चावल", correct: false },
            { text: "कपास", correct: true },
            { text: "गेहूं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गहरी काली मिट्टी कपास की खेती के लिए बहुत उपजाऊ होती है क्योंकि इसमें नमी धारण करने की क्षमता अधिक होती है।"
    },
    {
        question: "भारत में 'गेहूं' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "हरियाणा", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश भारत में कुल गेहूं उत्पादन का सबसे बड़ा हिस्सा प्रदान करता है।"
    },
    {
        question: "'ऑपरेशन फ्लड' का संबंध किससे है?",
        answers: shuffle([
            { text: "दुग्ध उत्पादन", correct: true },
            { text: "जल संसाधन प्रबंधन", correct: false },
            { text: "कृषि उत्पादकता", correct: false },
            { text: "बाढ़ नियंत्रण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऑपरेशन फ्लड' भारत में दुग्ध उत्पादन बढ़ाने और देश को दुग्ध उत्पादन में आत्मनिर्भर बनाने के लिए शुरू किया गया एक कार्यक्रम था।"
    },
    {
        question: "'नारियल और रबर' किस प्रकार की फसलों के उदाहरण हैं?",
        answers: shuffle([
            { text: "रबी फसल", correct: false },
            { text: "खरीफ फसल", correct: false },
            { text: "रोपण फसल", correct: true },
            { text: "जायद फसल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोपण फसलें वे होती हैं जो बड़े पैमाने पर बागानों में उगाई जाती हैं, जैसे चाय, कॉफी, रबर, नारियल और गन्ना।"
    },
    {
        question: "'पीत क्रांति' का संबंध किससे है?",
        answers: shuffle([
            { text: "मछली पालन", correct: false },
            { text: "तिलहन उत्पादन", correct: true },
            { text: "आलू उत्पादन", correct: false },
            { text: "अंडा उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीत क्रांति का उद्देश्य भारत में तिलहन फसलों के उत्पादन को बढ़ाकर खाद्य तेलों में आत्मनिर्भरता प्राप्त करना है।"
    },
    {
        question: "'हरित क्रांति' के तहत किन फसलों के उत्पादन पर जोर दिया गया था?",
        answers: shuffle([
            { text: "कपास और जूट", correct: false },
            { text: "दालें और तिलहन", correct: false },
            { text: "गेहूं और चावल", correct: true },
            { text: "सब्जियां और फल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरित क्रांति के दौरान उच्च उपज वाली किस्मों (HYV) के बीजों का उपयोग मुख्य रूप से गेहूं और चावल के उत्पादन को बढ़ाने के लिए किया गया था।"
    },
    {
        question: "भारत में 'लाल मिट्टी' का रंग लाल क्यों होता है?",
        answers: shuffle([
            { text: "लोहे के ऑक्साइड की उपस्थिति के कारण", correct: true },
            { text: "एल्यूमीनियम की उपस्थिति के कारण", correct: false },
            { text: "ह्यूमस की अधिकता के कारण", correct: false },
            { text: "कार्बनिक पदार्थों की कमी के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में लोहे के ऑक्साइड की उपस्थिति के कारण इसका रंग लाल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी कम उपजाऊ होती है, लेकिन कुछ फसलों के लिए उपयुक्त है।"
    },
    {
        question: "'राष्ट्रीय कृषि विकास योजना' (RKVY) का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "कृषि में निवेश बढ़ाना", correct: true },
            { text: "किसानों को सब्सिडी देना", correct: false },
            { text: "कृषि ऋण माफ करना", correct: false },
            { text: "जैविक खेती को बढ़ावा देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय कृषि विकास योजना का उद्देश्य कृषि और संबद्ध क्षेत्रों में सार्वजनिक निवेश को बढ़ाना और राज्यों को कृषि विकास की योजना बनाने में अधिक स्वायत्तता देना है।"
    },
    {
        question: "'रबी' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "हिंदी", correct: false },
            { text: "संस्कृत", correct: false },
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रबी' शब्द अरबी भाषा से लिया गया है, जिसका अर्थ 'वसंत' होता है, क्योंकि इन फसलों की कटाई वसंत ऋतु में होती है।"
    },
    {
        question: "भारत में 'श्वेत क्रांति' की शुरुआत किस दशक में हुई?",
        answers: shuffle([
            { text: "1950 का दशक", correct: false },
            { text: "1960 का दशक", correct: false },
            { text: "1970 का दशक", correct: true },
            { text: "1980 का दशक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेत क्रांति (ऑपरेशन फ्लड) 1970 में शुरू हुआ, जिसका उद्देश्य दुग्ध उत्पादन को बढ़ाना था।"
    },
    {
        question: "'गन्ना' किस प्रकार की फसल है?",
        answers: shuffle([
            { text: "खरीफ", correct: true },
            { text: "रबी", correct: false },
            { text: "जायद", correct: false },
            { text: "रोपण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गन्ना एक खरीफ फसल है, जिसे मानसून की शुरुआत में बोया जाता है और इसकी कटाई में लगभग एक वर्ष का समय लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक उष्णकटिबंधीय और उपोष्णकटिबंधीय फसल है।"
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