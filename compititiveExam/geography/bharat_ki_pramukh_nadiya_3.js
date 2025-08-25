const questions = [ 
    {
        topHeading: "भारत की प्रमुख नदियों पर आधारित बहुविकल्पीय प्रश्न part 3  (quiz_no. 90)."
    },
    {
        question: "निम्नलिखित में से कौन सी नदी गंगा की एक बाईं तट की सहायक नदी है जो हिमालय से निकलती है?",
        answers: shuffle([
            { text: "सोन", correct: false },
            { text: "यमुना", correct: false },
            { text: "गंडक", correct: true },
            { text: "चंबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंडक नदी नेपाल में हिमालय से निकलती है और गंगा के बाईं ओर से मिलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> सोन और यमुना दाहिने तट की सहायक नदियाँ हैं, जबकि चंबल यमुना की सहायक नदी है।"
    },
    {
        question: "'जायकवाड़ी परियोजना' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "कावेरी", correct: false },
            { text: "नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जायकवाड़ी परियोजना महाराष्ट्र में गोदावरी नदी पर स्थित है, जो एक महत्वपूर्ण सिंचाई परियोजना है।"
    },
    {
        question: "'प्रायद्वीपीय भारत' की कौन सी नदी सबसे बड़ी जल निकासी प्रणाली (drainage system) बनाती है?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोदावरी नदी प्रायद्वीपीय भारत की सबसे लंबी और सबसे बड़ी जल निकासी प्रणाली वाली नदी है, जिसका जलग्रहण क्षेत्र विशाल है।"
    },
    {
        question: "'वैदिक' नाम 'परुष्णी' किस नदी का था?",
        answers: shuffle([
            { text: "सतलज", correct: false },
            { text: "रावी", correct: true },
            { text: "झेलम", correct: false },
            { text: "ब्यास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में रावी नदी को 'परुष्णी' के नाम से जाना जाता था, जिसके तट पर 'दशराज्ञ युद्ध' हुआ था।"
    },
    {
        question: "'कोलकाता' बंदरगाह किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "हुगली", correct: true },
            { text: "दामोदर", correct: false },
            { text: "गंगा", correct: false },
            { text: "ब्रह्मपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलकाता बंदरगाह एक नदीय (riverine) बंदरगाह है जो हुगली नदी पर स्थित है, जो गंगा की एक वितरिका है।"
    },
    {
        question: "'कबीनी' और 'भवानी' किसकी सहायक नदियाँ हैं?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "महानदी", correct: false },
            { text: "कावेरी", correct: true },
            { text: "कृष्णा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कबीनी और भवानी दोनों कावेरी नदी की प्रमुख सहायक नदियाँ हैं, जो दक्षिण भारत में बहती हैं।"
    },
    {
        question: "'भारत की लवण नदी' के नाम से कौन सी नदी जानी जाती है?",
        answers: shuffle([
            { text: "साबरमती", correct: false },
            { text: "माही", correct: false },
            { text: "लूणी", correct: true },
            { text: "घग्गर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लूणी नदी राजस्थान के रेगिस्तानी क्षेत्र से होकर बहती है, जिसका पानी खारा होने के कारण इसे 'भारत की लवण नदी' कहते हैं।"
    },
    {
        question: "'सरदार सरोवर बांध' किस नदी पर बनाया गया है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरदार सरोवर बांध नर्मदा नदी पर बना है, जो गुजरात, राजस्थान, मध्य प्रदेश और महाराष्ट्र को लाभ पहुँचाता है।"
    },
    {
        question: "'धौलीगंगा' और 'विष्णुगंगा' का संगम किस स्थान पर होता है?",
        answers: shuffle([
            { text: "विष्णुप्रयाग", correct: true },
            { text: "कर्णप्रयाग", correct: false },
            { text: "रुद्रप्रयाग", correct: false },
            { text: "देवप्रयाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धौलीगंगा और विष्णुगंगा का संगम विष्णुप्रयाग में होता है, जिसके बाद यह नदी 'अलकनंदा' के नाम से जानी जाती है।"
    },
    {
        question: "'चंबल' नदी का उद्गम किस पहाड़ी से होता है?",
        answers: shuffle([
            { text: "जनापाव पहाड़ी", correct: true },
            { text: "अमरकंटक", correct: false },
            { text: "त्र्यंबकेश्वर", correct: false },
            { text: "महाबलेश्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंबल नदी का उद्गम मध्य प्रदेश में महू के पास जनापाव पहाड़ी से होता है।"
    },
    {
        question: "'महानंदा' नदी का उद्गम कहाँ से होता है?",
        answers: shuffle([
            { text: "गंगोत्री", correct: false },
            { text: "सिक्किम", correct: false },
            { text: "दार्जिलिंग पहाड़ियाँ", correct: true },
            { text: "नेपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानंदा नदी दार्जिलिंग पहाड़ियों से निकलती है और गंगा की सबसे पूर्वी सहायक नदी है।"
    },
    {
        question: "'तुंगभद्रा' किसकी सहायक नदी है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "कृष्णा", correct: true },
            { text: "कावेरी", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुंगभद्रा नदी, तुंगा और भद्रा नदियों के संगम से बनती है और कृष्णा की एक महत्वपूर्ण सहायक नदी है।"
    },
    {
        question: "'अयोध्या' किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सरयू", correct: true },
            { text: "गोमती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश का ऐतिहासिक शहर अयोध्या सरयू नदी के तट पर स्थित है।"
    },
    {
        question: "'इंद्रावती' नदी का उद्गम किस राज्य में होता है?",
        answers: shuffle([
            { text: "छत्तीसगढ़", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रावती नदी का उद्गम ओडिशा के कालाहांडी जिले से होता है और यह छत्तीसगढ़ से होकर बहती है।"
    },
    {
        question: "'सतलज' और 'ब्यास' नदियाँ किस स्थान पर मिलती हैं?",
        answers: shuffle([
            { text: "हरिके", correct: true },
            { text: "रोपड़", correct: false },
            { text: "फिरोजपुर", correct: false },
            { text: "लुधियाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सतलज और ब्यास नदियाँ पंजाब के हरिके में मिलती हैं, जहाँ से 'इंदिरा गांधी नहर' निकलती है।"
    },
    {
        question: "'कोयना बांध' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "गुजरात", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोयना बांध महाराष्ट्र में कोयना नदी पर स्थित है, जो कृष्णा की एक सहायक नदी है।"
    },
    {
        question: "'साबरमती' नदी का उद्गम किस पर्वतमाला से होता है?",
        answers: shuffle([
            { text: "अरावली", correct: true },
            { text: "विंध्य", correct: false },
            { text: "सतपुड़ा", correct: false },
            { text: "पश्चिमी घाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साबरमती नदी का उद्गम राजस्थान में अरावली पर्वतमाला से होता है और यह गुजरात से होकर बहती है।"
    },
    {
        question: "'महानदी' का उद्गम किस राज्य में होता है?",
        answers: shuffle([
            { text: "ओडिशा", correct: false },
            { text: "छत्तीसगढ़", correct: true },
            { text: "झारखंड", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानदी का उद्गम छत्तीसगढ़ के धमतरी जिले में सिहावा नामक स्थान से होता है।"
    },
    {
        question: "'अमरकंटक' से निकलने वाली प्रमुख नदियां कौन सी हैं?",
        answers: shuffle([
            { text: "नर्मदा और ताप्ती", correct: false },
            { text: "नर्मदा और सोन", correct: true },
            { text: "सोन और दामोदर", correct: false },
            { text: "महानदी और चंबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरकंटक पठार से नर्मदा और सोन नदियां निकलती हैं, जो विपरीत दिशाओं में बहती हैं।"
    },
    {
        question: "'तिब्बत' में 'ब्रह्मपुत्र' नदी को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "दिहांग", correct: false },
            { text: "सांगपो", correct: true },
            { text: "जमुना", correct: false },
            { text: "लोहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मपुत्र नदी तिब्बत में 'सांगपो' के नाम से जानी जाती है, जिसका अर्थ है 'शोधक'।"
    },
    {
        question: "'सरदार सरोवर परियोजना' का संबंध किस नदी से है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "ताप्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरदार सरोवर परियोजना नर्मदा नदी पर बनाई गई है और यह भारत की सबसे बड़ी नदी घाटी परियोजनाओं में से एक है।"
    },
    {
        question: "'चंबल' नदी पर कौन सा बांध स्थित नहीं है?",
        answers: shuffle([
            { text: "राणा प्रताप सागर", correct: false },
            { text: "गांधी सागर", correct: false },
            { text: "जवाहर सागर", correct: false },
            { text: "भाखड़ा नांगल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाखड़ा नांगल बांध सतलज नदी पर स्थित है, जबकि अन्य तीनों बांध चंबल नदी पर स्थित हैं।"
    },
    {
        question: "'तुंगभद्रा' परियोजना किस नदी की सहायक नदी पर स्थित है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "कृष्णा", correct: true },
            { text: "कावेरी", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुंगभद्रा परियोजना कृष्णा की सहायक नदी तुंगभद्रा पर स्थित है।"
    },
    {
        question: "'गंगा नदी' में मिलने वाली एकमात्र नदी जिसका उद्गम मैदानों में होता है, कौन सी है?",
        answers: shuffle([
            { text: "रामगंगा", correct: false },
            { text: "गोमती", correct: true },
            { text: "घाघरा", correct: false },
            { text: "कोसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोमती नदी का उद्गम उत्तर प्रदेश के पीलीभीत जिले में स्थित फुलहर झील से होता है, जो मैदानी क्षेत्र में है।"
    },
    {
        question: "'दामोदर' नदी को 'बंगाल का शोक' क्यों कहा जाता था?",
        answers: shuffle([
            { text: "इसके प्रदूषित जल के कारण", correct: false },
            { text: "इसकी तीव्र बाढ़ के कारण", correct: true },
            { text: "यह सूखा पैदा करती थी", correct: false },
            { text: "यह अपना मार्ग बदलती थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दामोदर नदी में आने वाली तीव्र बाढ़ के कारण यह बंगाल में विनाश का कारण बनती थी, इसलिए इसे 'बंगाल का शोक' कहा जाता था।"
    },
    {
        question: "'तवा नदी' किसकी सहायक नदी है?",
        answers: shuffle([
            { text: "नर्मदा", correct: true },
            { text: "ताप्ती", correct: false },
            { text: "गोदावरी", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तवा नदी नर्मदा की सबसे लंबी सहायक नदी है, जो मध्य प्रदेश से होकर बहती है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी 'विंध्य' पर्वतमाला से निकलकर यमुना में मिलती है?",
        answers: shuffle([
            { text: "केन", correct: false },
            { text: "बेतवा", correct: false },
            { text: "चंबल", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन, बेतवा और चंबल नदियां मध्य भारत में विंध्य पर्वतमाला के विभिन्न हिस्सों से निकलती हैं और उत्तर की ओर बहते हुए यमुना में मिल जाती हैं।"
    },
    {
        question: "'लुधियाना' शहर किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "रावी", correct: false },
            { text: "सतलज", correct: true },
            { text: "ब्यास", correct: false },
            { text: "चिनाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब का लुधियाना शहर सतलज नदी के तट पर स्थित है।"
    },
    {
        question: "'कपिलधारा जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "चंबल", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "ताप्ती", correct: false },
            { text: "साबरमती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपिलधारा जलप्रपात मध्य प्रदेश के अमरकंटक में नर्मदा नदी पर स्थित है।"
    },
    {
        question: "'भागीरथी' और 'भिलंगना' का संगम कहाँ होता है, जहाँ पर 'टिहरी बांध' स्थित है?",
        answers: shuffle([
            { text: "देवप्रयाग", correct: false },
            { text: "टिहरी", correct: true },
            { text: "रुद्रप्रयाग", correct: false },
            { text: "विष्णुप्रयाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भागीरथी और भिलंगना नदियों के संगम स्थल पर ही टिहरी बांध का निर्माण किया गया है।"
    },
    {
        question: "'इंद्रावती' नदी का उद्गम किस पठार से होता है?",
        answers: shuffle([
            { text: "छोटानागपुर पठार", correct: false },
            { text: "दक्कन का पठार", correct: false },
            { text: "कालाहांडी पठार", correct: false },
            { text: "दंडकारण्य पठार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रावती नदी का उद्गम दंडकारण्य पठार के कालाहांडी जिले में होता है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी कर्क रेखा को दो बार काटती है?",
        answers: shuffle([
            { text: "साबरमती", correct: false },
            { text: "माही", correct: true },
            { text: "नर्मदा", correct: false },
            { text: "लूनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माही नदी मध्य प्रदेश में निकलती है, राजस्थान से होकर बहती है और गुजरात में प्रवेश करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया में यह कर्क रेखा को दो बार काटती है।"
    },
    {
        question: "'हुगली' नदी को 'गंगा की वितरिका' कहा जाता है, यह किस स्थान पर गंगा से अलग होती है?",
        answers: shuffle([
            { text: "फरक्का", correct: true },
            { text: "कोलकाता", correct: false },
            { text: "पटना", correct: false },
            { text: "इलाहाबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फरक्का बैराज पर गंगा नदी दो भागों में विभाजित हो जाती है: एक धारा बांग्लादेश में 'पद्मा' के रूप में जाती है, जबकि दूसरी 'हुगली' के रूप में पश्चिम बंगाल में बहती है।"
    },
    {
        question: "'कृष्णा नदी' का उद्गम स्थल कहाँ है?",
        answers: shuffle([
            { text: "अमरकंटक पठार", correct: false },
            { text: "ब्रह्मगिरि पहाड़ियां", correct: false },
            { text: "महाबलेश्वर", correct: true },
            { text: "त्र्यंबकेश्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णा नदी का उद्गम महाराष्ट्र में महाबलेश्वर के पास से होता है।"
    },
    {
        question: "'जबलपुर' शहर किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "चंबल", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "ताप्ती", correct: false },
            { text: "साबरमती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जबलपुर मध्य प्रदेश का एक प्रमुख शहर है, जो नर्मदा नदी के तट पर स्थित है।"
    },
    {
        question: "'चिल्का झील' किस नदी के मुहाने पर स्थित है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "महानदी", correct: true },
            { text: "कृष्णा", correct: false },
            { text: "पेन्नार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिल्का झील ओडिशा में महानदी के डेल्टा के दक्षिण में स्थित एक खारे पानी की लैगून है।"
    },
    {
        question: "'गंगा-यमुना दोआब' किस स्थान पर समाप्त होता है?",
        answers: shuffle([
            { text: "हरिद्वार", correct: false },
            { text: "फरक्का", correct: false },
            { text: "प्रयागराज (इलाहाबाद)", correct: true },
            { text: "पटना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा और यमुना नदियों के बीच का उपजाऊ मैदान (दोआब) प्रयागराज में उनके संगम पर समाप्त होता है।"
    },
    {
        question: "'सुंदरवन डेल्टा' का निर्माण करने वाली प्रमुख नदियां कौन सी हैं?",
        answers: shuffle([
            { text: "गंगा और यमुना", correct: false },
            { text: "गंगा और ब्रह्मपुत्र", correct: true },
            { text: "कृष्णा और गोदावरी", correct: false },
            { text: "नर्मदा और ताप्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा और ब्रह्मपुत्र नदियां मिलकर दुनिया का सबसे बड़ा डेल्टा, सुंदरवन डेल्टा बनाती हैं।"
    },
    {
        question: "'सतलज' नदी का उद्गम स्थल किस देश में है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "नेपाल", correct: false },
            { text: "तिब्बत (चीन)", correct: true },
            { text: "भूटान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सतलज नदी का उद्गम तिब्बत में मानसरोवर झील के पास स्थित 'राकसताल' झील से होता है।"
    },
    {
        question: "'इंदिरा सागर परियोजना' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंदिरा सागर परियोजना मध्य प्रदेश में नर्मदा नदी पर स्थित है।"
    },
    {
        question: "'बेतवा' नदी किस नदी की सहायक नदी है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: true },
            { text: "चंबल", correct: false },
            { text: "सोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेतवा नदी मध्य प्रदेश से निकलकर उत्तर प्रदेश में यमुना नदी में मिल जाती है।"
    },
    {
        question: "'राउरकेला' शहर किस नदी के किनारे पर स्थित है?",
        answers: shuffle([
            { text: "महानदी", correct: false },
            { text: "ब्राह्मणी", correct: true },
            { text: "सुवर्णरेखा", correct: false },
            { text: "वैतरणी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा का स्टील शहर राउरकेला ब्राह्मणी नदी के किनारे पर स्थित है।"
    },
    {
        question: "'पेरियार नदी' किस राज्य की सबसे लंबी नदी है?",
        answers: shuffle([
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "केरल", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरियार केरल की सबसे लंबी और सबसे महत्वपूर्ण नदी है।"
    },
    {
        question: "'वैदिक' नाम 'वितस्ता' किस नदी का था?",
        answers: shuffle([
            { text: "झेलम", correct: true },
            { text: "चिनाब", correct: false },
            { text: "रावी", correct: false },
            { text: "ब्यास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झेलम नदी का प्राचीन वैदिक नाम 'वितस्ता' था।"
    },
    {
        question: "'नर्मदा' नदी किस दिशा में बहती है?",
        answers: shuffle([
            { text: "उत्तर-पूर्व", correct: false },
            { text: "दक्षिण-पश्चिम", correct: false },
            { text: "पश्चिम", correct: true },
            { text: "पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नर्मदा नदी पूर्व से पश्चिम की ओर बहती है और खंभात की खाड़ी (अरब सागर) में गिरती है।"
    },
    {
        question: "'रामगंगा' नदी किस राष्ट्रीय उद्यान से होकर बहती है?",
        answers: shuffle([
            { text: "कान्हा राष्ट्रीय उद्यान", correct: false },
            { text: "जिम कॉर्बेट राष्ट्रीय उद्यान", correct: true },
            { text: "रणथंभौर राष्ट्रीय उद्यान", correct: false },
            { text: "दुधवा राष्ट्रीय उद्यान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामगंगा नदी जिम कॉर्बेट राष्ट्रीय उद्यान के बीच से होकर बहती है।"
    },
    {
        question: "'भारत का सबसे ऊँचा जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "कावेरी", correct: false },
            { text: "शरावती", correct: true },
            { text: "नर्मदा", correct: false },
            { text: "कृष्णा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का सबसे ऊँचा जलप्रपात, कुंचिकल जलप्रपात, कर्नाटक में शरावती नदी पर स्थित है।"
    },
    {
        question: "'लुधियाना' शहर किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "रावी", correct: false },
            { text: "सतलज", correct: true },
            { text: "ब्यास", correct: false },
            { text: "चिनाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब का लुधियाना शहर सतलज नदी के तट पर स्थित है।"
    },
    {
        question: "'कृष्णा' और 'गोदावरी' के बीच कौन सी झील स्थित है?",
        answers: shuffle([
            { text: "चिल्का झील", correct: false },
            { text: "कोलेरू झील", correct: true },
            { text: "पुलिकट झील", correct: false },
            { text: "वुलर झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलेरू झील आंध्र प्रदेश में कृष्णा और गोदावरी नदियों के डेल्टा के बीच स्थित है।"
    },
    {
        question: "'चंबल' नदी पर स्थित 'गांधी सागर बांध' किस राज्य में है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधी सागर बांध चंबल नदी पर स्थित चार प्रमुख बांधों में से एक है और यह मध्य प्रदेश में स्थित है।"
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