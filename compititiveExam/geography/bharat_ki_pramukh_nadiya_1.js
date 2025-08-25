const questions = [ 
    {
        topHeading: "भारत की प्रमुख नदियों पर आधारित बहुविकल्पीय प्रश्न part 1  (quiz_no. 88)."
    },
    {
        question: "गंगा नदी का उद्गम स्थल कहाँ है?",
        answers: shuffle([
            { text: "यमुनोत्री ग्लेशियर", correct: false },
            { text: "गंगोत्री ग्लेशियर", correct: true },
            { text: "सतोपंथ ग्लेशियर", correct: false },
            { text: "सियाचिन ग्लेशियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा नदी का उद्गम उत्तराखंड में स्थित गंगोत्री ग्लेशियर से भागीरथी के रूप में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यमुनोत्री ग्लेशियर से यमुना नदी निकलती है, जबकि सतोपंथ ग्लेशियर से अलकनंदा का उद्गम होता है।"
    },
    {
        question: "प्रायद्वीपीय भारत की सबसे लंबी नदी कौन सी है?",
        answers: shuffle([
            { text: "महानदी", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोदावरी नदी (लगभग 1465 किमी) प्रायद्वीपीय भारत की सबसे लंबी नदी है, जिसे 'दक्षिण गंगा' के नाम से भी जाना जाता है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी डेल्टा नहीं बनाती है?",
        answers: shuffle([
            { text: "महानदी", correct: false },
            { text: "गोदावरी", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "गंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नर्मदा और ताप्ती जैसी पश्चिम की ओर बहने वाली नदियां ज्वारनदमुख (estuary) बनाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> महानदी, गोदावरी और गंगा जैसी पूर्व की ओर बहने वाली नदियां डेल्टा का निर्माण करती हैं।"
    },
    {
        question: "किस नदी को 'बिहार का शोक' कहा जाता है?",
        answers: shuffle([
            { text: "दामोदर", correct: false },
            { text: "गंडक", correct: false },
            { text: "कोसी", correct: true },
            { text: "सोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोसी नदी अक्सर अपना मार्ग बदलने और बाढ़ लाने के लिए प्रसिद्ध है, जिससे बिहार में भारी तबाही होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण इसे 'बिहार का शोक' कहा जाता है।"
    },
    {
        question: "सिंधु नदी का उद्गम स्थल कहाँ है?",
        answers: shuffle([
            { text: "रोहतांग दर्रा", correct: false },
            { text: "मानसरोवर झील", correct: true },
            { text: "शेषनाग झील", correct: false },
            { text: "यमुनोत्री ग्लेशियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु नदी का उद्गम तिब्बत में स्थित मानसरोवर झील के पास से होता है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी अरब सागर में गिरती है?",
        answers: shuffle([
            { text: "महानदी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "ताप्ती", correct: true },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताप्ती नदी पश्चिम की ओर बहती है और गुजरात के पास खंभात की खाड़ी (अरब सागर का हिस्सा) में गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> महानदी, कृष्णा और गोदावरी बंगाल की खाड़ी में गिरती हैं।"
    },
    {
        question: "गंगा और ब्रह्मपुत्र की संयुक्त जलधारा किस नाम से जानी जाती है?",
        answers: shuffle([
            { text: "पद्मा", correct: false },
            { text: "जमुना", correct: false },
            { text: "मेघना", correct: true },
            { text: "माघना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बांग्लादेश में गंगा को 'पद्मा' और ब्रह्मपुत्र को 'जमुना' के नाम से जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये दोनों नदियां मिलकर 'मेघना' कहलाती हैं, जो बंगाल की खाड़ी में गिरती है।"
    },
    {
        question: "लूनी नदी किस राज्य में बहती है और कच्छ के रण में समाप्त हो जाती है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "राजस्थान", correct: true },
            { text: "गुजरात", correct: false },
            { text: "हरियाणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लूनी नदी राजस्थान के थार रेगिस्तान से होकर बहती है और अंतर्देशीय जल निकासी का उदाहरण प्रस्तुत करते हुए कच्छ के रण में विलुप्त हो जाती है।"
    },
    {
        question: "किस नदी को 'वृद्ध गंगा' के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "महानदी", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोदावरी नदी को उसकी विशालता और प्रायद्वीपीय भारत में उसकी महत्वपूर्ण भूमिका के कारण 'वृद्ध गंगा' या 'दक्षिण गंगा' कहा जाता है।"
    },
    {
        question: "तिब्बत में ब्रह्मपुत्र नदी को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "दिहांग", correct: false },
            { text: "जमुना", correct: false },
            { text: "सांगपो", correct: true },
            { text: "मेघना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मपुत्र नदी का उद्गम तिब्बत में होता है, जहाँ इसे 'सांगपो' के नाम से जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अरुणाचल प्रदेश में प्रवेश करने पर इसे 'दिहांग' कहा जाता है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी अपने मार्ग परिवर्तन के लिए कुख्यात है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "दामोदर", correct: false },
            { text: "कोसी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोसी नदी हिमालय से भारी मात्रा में गाद (silt) लाती है, जिसके कारण इसके तल की ऊंचाई बढ़ जाती है और यह अक्सर अपना मार्ग बदलती रहती है।"
    },
    {
        question: "भारत की सबसे लंबी नदी कौन सी है?",
        answers: shuffle([
            { text: "ब्रह्मपुत्र", correct: false },
            { text: "गंगा", correct: true },
            { text: "सिंधु", correct: false },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत की सबसे लंबी नदी गंगा है, जिसकी कुल लंबाई 2525 किमी है, जो पूरी तरह से भारत में बहती है।"
    },
    {
        question: "किस नदी को 'दक्षिण की गंगा' कहा जाता है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: true },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कावेरी नदी को दक्षिण भारत की पवित्रता और उपयोगिता के कारण 'दक्षिण की गंगा' कहा जाता है।"
    },
    {
        question: "सिंधु नदी जल समझौता (1960) के तहत भारत को किस नदी के जल का पूर्ण उपयोग करने की अनुमति है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "चिनाब", correct: false },
            { text: "झेलम", correct: false },
            { text: "व्यास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु जल समझौते के अनुसार, भारत को पूर्वी नदियों (रावी, व्यास और सतलज) के जल का पूर्ण उपयोग करने की अनुमति है।<br><br><i class='fa-solid fa-angles-right icon'></i> पश्चिमी नदियों (सिंधु, चिनाब और झेलम) के जल का उपयोग सीमित है।"
    },
    {
        question: "कृष्णा नदी का उद्गम स्थल कहाँ है?",
        answers: shuffle([
            { text: "महाबलेश्वर के पास", correct: true },
            { text: "त्र्यंबकेश्वर के पास", correct: false },
            { text: "ब्रह्मगिरि पहाड़ियों में", correct: false },
            { text: "अमरकंटक पहाड़ी से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णा नदी का उद्गम महाराष्ट्र में महाबलेश्वर के पास से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> त्र्यंबकेश्वर से गोदावरी और ब्रह्मगिरि से कावेरी निकलती है।"
    },
    {
        question: "भारत में सबसे बड़ी नदी द्रोणी (river basin) किस नदी की है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "ब्रह्मपुत्र", correct: false },
            { text: "गंगा", correct: true },
            { text: "सिंधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा नदी प्रणाली भारत की सबसे बड़ी नदी द्रोणी है, जो देश के एक बड़े हिस्से को कवर करती है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी 'विंध्य' और 'सतपुड़ा' श्रेणियों के बीच बहती है?",
        answers: shuffle([
            { text: "चंबल", correct: false },
            { text: "गोमती", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "साबरमती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नर्मदा नदी एक भ्रंश घाटी (rift valley) से होकर बहती है, जो उत्तर में विंध्य और दक्षिण में सतपुड़ा श्रेणियों के बीच स्थित है।"
    },
    {
        question: "भारत में किस नदी को 'खुला नाला' कहा जाता है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: true },
            { text: "साबरमती", correct: false },
            { text: "गोमती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली और उसके आसपास यमुना नदी में अत्यधिक प्रदूषण के कारण इसे 'खुला नाला' कहा जाता है।"
    },
    {
        question: "ब्रह्मपुत्र नदी भारत में किस राज्य से प्रवेश करती है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: false },
            { text: "अरुणाचल प्रदेश", correct: true },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिब्बत से बहते हुए, ब्रह्मपुत्र नदी एक गहरी खाई का निर्माण करती है और अरुणाचल प्रदेश में 'नामचा बरवा' के पास से भारत में प्रवेश करती है।"
    },
    {
        question: "दक्षिण भारत की सबसे बड़ी नदी द्रोणी किस नदी की है?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "कावेरी", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोदावरी नदी प्रायद्वीपीय भारत की सबसे लंबी नदी है और इसका जलग्रहण क्षेत्र (catchment area) भी सबसे बड़ा है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी पूर्व की ओर नहीं बहती है?",
        answers: shuffle([
            { text: "कावेरी", correct: false },
            { text: "महानदी", correct: false },
            { text: "ताप्ती", correct: true },
            { text: "कृष्णा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताप्ती (और नर्मदा) पश्चिम की ओर बहने वाली नदियां हैं, जो अरब सागर में गिरती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> बाकी सभी पूर्व की ओर बहकर बंगाल की खाड़ी में मिलती हैं।"
    },
    {
        question: "'हुंडरू जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "स्वर्णरेखा", correct: true },
            { text: "कावेरी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुंडरू जलप्रपात झारखंड के रांची में स्वर्णरेखा नदी पर स्थित एक प्रसिद्ध जलप्रपात है।"
    },
    {
        question: "भागीरथी और अलकनंदा नदियां किस स्थान पर मिलकर गंगा का निर्माण करती हैं?",
        answers: shuffle([
            { text: "कर्णप्रयाग", correct: false },
            { text: "रुद्रप्रयाग", correct: false },
            { text: "देवप्रयाग", correct: true },
            { text: "विष्णुप्रयाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भागीरथी और अलकनंदा का संगम देवप्रयाग में होता है, और इसके बाद यह संयुक्त धारा गंगा के नाम से जानी जाती है।"
    },
    {
        question: "किस नदी को 'बंगाल का शोक' कहा जाता है?",
        answers: shuffle([
            { text: "दामोदर", correct: true },
            { text: "महानदी", correct: false },
            { text: "हुगली", correct: false },
            { text: "रूपनारायण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दामोदर नदी में आने वाली विनाशकारी बाढ़ के कारण इसे 'बंगाल का शोक' कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> अब इस पर बने बांधों से बाढ़ पर काफी हद तक नियंत्रण पा लिया गया है।"
    },
    {
        question: "झेलम नदी का उद्गम स्थल कहाँ है?",
        answers: shuffle([
            { text: "मानसरोवर झील", correct: false },
            { text: "शेषनाग झील", correct: true },
            { text: "गंगोत्री ग्लेशियर", correct: false },
            { text: "रोहतांग दर्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झेलम नदी जम्मू और कश्मीर में स्थित शेषनाग झील के पास से निकलती है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी गंगा की सहायक नदी नहीं है?",
        answers: shuffle([
            { text: "सोन", correct: false },
            { text: "गोमती", correct: false },
            { text: "मानस", correct: true },
            { text: "गंडक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानस नदी ब्रह्मपुत्र की एक प्रमुख सहायक नदी है।<br><br><i class='fa-solid fa-angles-right icon'></i> सोन, गोमती और गंडक, ये सभी गंगा की सहायक नदियाँ हैं।"
    },
    {
        question: "'इंदिरा सागर बांध' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नर्मदा", correct: true },
            { text: "महानदी", correct: false },
            { text: "कावेरी", correct: false },
            { text: "कृष्णा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंदिरा सागर बांध मध्य प्रदेश में नर्मदा नदी पर स्थित एक बहुउद्देशीय परियोजना है।"
    },
    {
        question: "'पोंग बांध' किस नदी पर बनाया गया है?",
        answers: shuffle([
            { text: "झेलम", correct: false },
            { text: "रावी", correct: false },
            { text: "सतलज", correct: false },
            { text: "ब्यास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोंग बांध, जिसे महाराणा प्रताप सागर भी कहते हैं, हिमाचल प्रदेश में ब्यास नदी पर बनाया गया है।"
    },
    {
        question: "श्रीनगर किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "झेलम", correct: true },
            { text: "रावी", correct: false },
            { text: "चिनाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जम्मू-कश्मीर की राजधानी श्रीनगर झेलम नदी के तट पर स्थित है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी भारत और नेपाल के बीच सीमा बनाती है?",
        answers: shuffle([
            { text: "कोसी", correct: false },
            { text: "गंडक", correct: false },
            { text: "काली (शारदा)", correct: true },
            { text: "घाघरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली नदी, जिसे शारदा भी कहते हैं, भारत के उत्तराखंड और नेपाल के बीच एक प्राकृतिक सीमा का निर्माण करती है।"
    },
    {
        question: "'धुआंधार जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "चंबल", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "ताप्ती", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धुआंधार जलप्रपात मध्य प्रदेश के जबलपुर में नर्मदा नदी पर स्थित है।"
    },
    {
        question: "'उकाई बांध' किस नदी पर बना हुआ है?",
        answers: shuffle([
            { text: "ताप्ती", correct: true },
            { text: "साबरमती", correct: false },
            { text: "माही", correct: false },
            { text: "नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उकाई बांध गुजरात में ताप्ती नदी पर बना हुआ एक प्रमुख बांध है।"
    },
    {
        question: "निम्नलिखित में से किस नदी का उद्गम भारत में नहीं होता है?",
        answers: shuffle([
            { text: "सतलज", correct: true },
            { text: "रावी", correct: false },
            { text: "चिनाब", correct: false },
            { text: "ब्यास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सतलज नदी का उद्गम तिब्बत में स्थित मानसरोवर झील के पास राकसताल झील से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाकी सभी नदियां भारत में ही निकलती हैं।"
    },
    {
        question: "'रिहंद बांध' किस नदी की सहायक नदी पर स्थित है?",
        answers: shuffle([
            { text: "सोन", correct: true },
            { text: "चंबल", correct: false },
            { text: "बेतवा", correct: false },
            { text: "केन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रिहंद बांध, रिहंद नदी पर स्थित है, जो स्वयं गंगा की सहायक सोन नदी की सहायक है।"
    },
    {
        question: "भारत की सबसे लंबी सहायक नदी कौन सी है?",
        answers: shuffle([
            { text: "सोन", correct: false },
            { text: "चंबल", correct: false },
            { text: "यमुना", correct: true },
            { text: "ब्रह्मपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यमुना (लगभग 1376 किमी) गंगा की सबसे लंबी और सबसे महत्वपूर्ण सहायक नदी है।"
    },
    {
        question: "'प्रायद्वीपीय भारत' में पूर्व की ओर बहने वाली नदियों में सबसे बड़ी नदी कौन सी है?",
        answers: shuffle([
            { text: "गोदावरी", correct: true },
            { text: "कृष्णा", correct: false },
            { text: "महानदी", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोदावरी प्रायद्वीपीय भारत की सबसे लंबी नदी है, जो पूर्व की ओर बहती है और बंगाल की खाड़ी में गिरती है।"
    },
    {
        question: "'अलकनंदा' और 'मंदाकिनी' नदियों का संगम कहाँ होता है?",
        answers: shuffle([
            { text: "देवप्रयाग", correct: false },
            { text: "रुद्रप्रयाग", correct: true },
            { text: "कर्णप्रयाग", correct: false },
            { text: "विष्णुप्रयाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलकनंदा और मंदाकिनी नदियों का संगम रुद्रप्रयाग में होता है,<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अलकनंदा और भागीरथी का संगम देवप्रयाग में होता है।"
    },
    {
        question: "'महानदी' का उद्गम किस राज्य में होता है?",
        answers: shuffle([
            { text: "छत्तीसगढ़", correct: true },
            { text: "ओडिशा", correct: false },
            { text: "झारखंड", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानदी का उद्गम छत्तीसगढ़ के धमतरी जिले में सिहावा नामक स्थान से होता है।"
    },
    {
        question: "'सरदार सरोवर परियोजना' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "महानदी", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "कृष्णा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरदार सरोवर परियोजना नर्मदा नदी पर बनाई गई एक प्रमुख बहुउद्देशीय परियोजना है,<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका लाभ गुजरात, राजस्थान, मध्य प्रदेश और महाराष्ट्र को मिलता है।"
    },
    {
        question: "'अयोध्या' किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "सरयू", correct: true },
            { text: "यमुना", correct: false },
            { text: "घाघरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश का ऐतिहासिक शहर अयोध्या सरयू नदी के तट पर स्थित है।"
    },
    {
        question: "'पर्वतीय ढलानों' से बहते हुए जब नदी कठोर चट्टानों पर से गिरती है तो क्या बनता है?",
        answers: shuffle([
            { text: "डेल्टा", correct: false },
            { text: "जलप्रपात", correct: true },
            { text: "ज्वारनदमुख", correct: false },
            { text: "वितरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब नदी कठोर चट्टानों पर से खड़ी ढलान से नीचे गिरती है तो जलप्रपात का निर्माण होता है।"
    },
    {
        question: "'सिंधु नदी जल समझौता' भारत और किस देश के बीच हुआ था?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "नेपाल", correct: false },
            { text: "बांग्लादेश", correct: false },
            { text: "पाकिस्तान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु नदी जल समझौता 1960 में भारत और पाकिस्तान के बीच विश्व बैंक की मध्यस्थता से हुआ था।"
    },
    {
        question: "'गोदावरी' नदी का उद्गम स्थल किस राज्य में है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तेलंगाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोदावरी नदी का उद्गम महाराष्ट्र के नासिक जिले में त्र्यंबकेश्वर के पास से होता है।"
    },
    {
        question: "'कृष्णा नदी' की प्रमुख सहायक नदी 'तुंगभद्रा' का उद्गम स्थल कहाँ है?",
        answers: shuffle([
            { text: "महाबलेश्वर", correct: false },
            { text: "कर्नाटक में", correct: true },
            { text: "अमरकंटक", correct: false },
            { text: "ब्रह्मगिरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुंगभद्रा नदी, कृष्णा की एक प्रमुख सहायक नदी है,<br><br><i class='fa-solid fa-angles-right icon'></i> जो कर्नाटक में तुंगा और भद्रा नदियों के संगम से बनती है।"
    },
    {
        question: "'सोन नदी' गंगा में कहाँ आकर मिलती है?",
        answers: shuffle([
            { text: "इलाहाबाद (प्रयागराज)", correct: false },
            { text: "वाराणसी", correct: false },
            { text: "पटना", correct: true },
            { text: "भागलपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोन नदी पटना के पास गंगा नदी में मिल जाती है।"
    },
    {
        question: "'हीराकुंड बांध' किस नदी पर बना है?",
        answers: shuffle([
            { text: "महानदी", correct: true },
            { text: "गोदावरी", correct: false },
            { text: "कावेरी", correct: false },
            { text: "कृष्णा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीराकुंड बांध ओडिशा में महानदी पर बना है<br><br><i class='fa-solid fa-angles-right icon'></i> और यह दुनिया के सबसे लंबे मिट्टी के बांधों में से एक है।"
    },
    {
        question: "'कावेरी नदी जल विवाद' किन दो राज्यों के बीच है?",
        answers: shuffle([
            { text: "कर्नाटक और केरल", correct: false },
            { text: "कर्नाटक और आंध्र प्रदेश", correct: false },
            { text: "कर्नाटक और तमिलनाडु", correct: true },
            { text: "आंध्र प्रदेश और तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कावेरी नदी के जल के बंटवारे को लेकर कर्नाटक और तमिलनाडु के बीच लंबे समय से विवाद चला आ रहा है।"
    },
    {
        question: "'बेतवा' नदी किसकी सहायक नदी है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: true },
            { text: "चंबल", correct: false },
            { text: "सोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेतवा नदी मध्य प्रदेश में भोपाल के पास से निकलती है<br><br><i class='fa-solid fa-angles-right icon'></i> और उत्तर प्रदेश में हमीरपुर के पास यमुना में मिल जाती है।"
    },
    {
        question: "'पुष्कर झील' किस नदी की घाटी में स्थित है?",
        answers: shuffle([
            { text: "साबरमती", correct: false },
            { text: "लूणी", correct: true },
            { text: "माही", correct: false },
            { text: "चंबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्कर झील राजस्थान में अजमेर के पास स्थित है, जो लूणी नदी की घाटी में आती है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी 'घाघरा' की सहायक नदी है?",
        answers: shuffle([
            { text: "राप्ती", correct: false },
            { text: "शारदा", correct: false },
            { text: "गंडक", correct: false },
            { text: "ए और बी दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राप्ती और शारदा (काली) दोनों ही घाघरा की प्रमुख सहायक नदियां हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> घाघरा स्वयं गंगा की सहायक नदी है।"
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