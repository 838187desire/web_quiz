const questions = [
    {
        topHeading: "विश्व के प्रमुख नदियों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 68)."
    },
    {
        question: "विश्व की सबसे लंबी नदी कौन सी है?",
        answers: shuffle([
            { text: "अमेज़न", correct: false },
            { text: "नील", correct: true },
            { text: "यांग्त्से", correct: false },
            { text: "मिसिसिपी-मिसौरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नील नदी (लगभग 6,650 किमी) को पारंपरिक रूप से विश्व की सबसे लंबी नदी माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अफ्रीका में बहती है।"
    },
    {
        question: "आयतन (Volume) के हिसाब से विश्व की सबसे बड़ी नदी कौन सी है?",
        answers: shuffle([
            { text: "नील", correct: false },
            { text: "कांगो", correct: false },
            { text: "अमेज़न", correct: true },
            { text: "ह्वांग हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेज़न नदी जल आयतन के मामले में विश्व की सबसे बड़ी नदी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दक्षिण अमेरिका में बहती है और इसका जल निकासी बेसिन भी सबसे बड़ा है।"
    },
    {
        question: "किस नदी को 'चीन का शोक' (Sorrow of China) कहा जाता है?",
        answers: shuffle([
            { text: "यांग्त्से", correct: false },
            { text: "मीकांग", correct: false },
            { text: "ह्वांग हो (पीली नदी)", correct: true },
            { text: "साल्वीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वांग हो नदी को इसके बार-बार आने वाले विनाशकारी बाढ़ के कारण 'चीन का शोक' कहा जाता है, जिसने ऐतिहासिक रूप से भारी तबाही मचाई है।"
    },
    {
        question: "कौन सी नदी विषुवत रेखा (Equator) को दो बार पार करती है?",
        answers: shuffle([
            { text: "कांगो (जायरे)", correct: true },
            { text: "नाइजर", correct: false },
            { text: "नील", correct: false },
            { text: "ज़ाम्बेज़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांगो नदी अफ्रीका की दूसरी सबसे लंबी नदी है जो विषुवत रेखा को दो बार पार करती है।"
    },
    {
        question: "लंदन किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "सीन", correct: false },
            { text: "थेम्स", correct: true },
            { text: "डेन्यूब", correct: false },
            { text: "राइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लंदन शहर इंग्लैंड में थेम्स नदी के उत्तरी किनारे पर स्थित है, जो यूरोप की एक महत्वपूर्ण नदी है।"
    },
    {
        question: "विश्व का सबसे बड़ा नदी द्वीप माजुली, किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "सिंधु", correct: false },
            { text: "ब्रह्मपुत्र", correct: true },
            { text: "अमेज़न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माजुली, असम, भारत में ब्रह्मपुत्र नदी पर स्थित एक बड़ा नदी द्वीप है, जिसे गिनीज वर्ल्ड रिकॉर्ड्स द्वारा सबसे बड़ा नदी द्वीप घोषित किया गया है।"
    },
    {
        question: "पेरिस शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "थेम्स", correct: false },
            { text: "सीन", correct: true },
            { text: "वोल्गा", correct: false },
            { text: "राइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रांस की राजधानी पेरिस, सीन नदी के किनारे स्थित है, जो फ्रांस की एक प्रमुख जलमार्ग है।"
    },
    {
        question: "रूस की सबसे लंबी नदी कौन सी है?",
        answers: shuffle([
            { text: "ओब", correct: false },
            { text: "येनिसी", correct: false },
            { text: "लेना", correct: false },
            { text: "वोल्गा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्गा नदी रूस की सबसे लंबी नदी है और यह यूरोप की भी सबसे लंबी नदी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कैस्पियन सागर में गिरती है।"
    },
    {
        question: "'डेन्यूब नदी' किस देश से होकर नहीं बहती है?",
        answers: shuffle([
            { text: "जर्मनी", correct: false },
            { text: "हंगरी", correct: false },
            { text: "इटली", correct: true },
            { text: "ऑस्ट्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेन्यूब नदी जर्मनी में शुरू होकर, कुल 10 देशों से होकर बहती है, जिसमें इटली शामिल नहीं है।"
    },
    {
        question: "न्यूयॉर्क शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "हडसन", correct: true },
            { text: "मिसिसिपी", correct: false },
            { text: "सेंट लॉरेंस", correct: false },
            { text: "कोलंबिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूयॉर्क शहर हडसन नदी के मुहाने पर स्थित है, जो अटलांटिक महासागर में मिलती है।"
    },
    {
        question: "ऑस्ट्रेलिया की सबसे लंबी नदी कौन सी है?",
        answers: shuffle([
            { text: "डार्लिंग", correct: false },
            { text: "मर्रे", correct: true },
            { text: "विक्टोरिया", correct: false },
            { text: "लचलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मर्रे नदी ऑस्ट्रेलिया की सबसे लंबी नदी है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे इसकी सहायक नदी डार्लिंग के साथ 'मर्रे-डार्लिंग नदी प्रणाली' के रूप में जाना जाता है।"
    },
    {
        question: "किस नदी को 'यूरोप की जीवन रेखा' कहा जाता है?",
        answers: shuffle([
            { text: "डेन्यूब", correct: false },
            { text: "राइन", correct: true },
            { text: "वोल्गा", correct: false },
            { text: "थेम्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइन नदी को यूरोप में इसके महत्वपूर्ण व्यापारिक और परिवहन महत्व के कारण 'यूरोप की जीवन रेखा' कहा जाता है।"
    },
    {
        question: "टिगरिस और यूफ्रेट्स नदियाँ किस देश में बहती हैं और किस सभ्यता का केंद्र थीं?",
        answers: shuffle([
            { text: "मिस्र; नील सभ्यता", correct: false },
            { text: "चीन; ह्वांग हो सभ्यता", correct: false },
            { text: "इराक; मेसोपोटामिया सभ्यता", correct: true },
            { text: "भारत; सिंधु घाटी सभ्यता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिगरिस और यूफ्रेट्स नदियाँ इराक में बहती हैं, और इनके बीच का क्षेत्र प्राचीन मेसोपोटामिया सभ्यता का केंद्र था।"
    },
    {
        question: "कौन सी नदी 'विषुवत वृत्त' को दो बार काटती है?",
        answers: shuffle([
            { text: "कांगो", correct: true },
            { text: "लिम्पोपो", correct: false },
            { text: "माही", correct: false },
            { text: "नाइजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांगो नदी एकमात्र ऐसी नदी है जो भूमध्य रेखा या विषुवत वृत्त को दो बार पार करती है।"
    },
    {
        question: "विश्व का सबसे बड़ा डेल्टा कौन सी नदियाँ बनाती हैं?",
        answers: shuffle([
            { text: "गंगा-ब्रह्मपुत्र", correct: true },
            { text: "नील", correct: false },
            { text: "अमेज़न", correct: false },
            { text: "मिसीसिपी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत और बांग्लादेश में स्थित गंगा-ब्रह्मपुत्र डेल्टा (सुंदरवन डेल्टा) विश्व का सबसे बड़ा डेल्टा है।"
    },
    {
        question: "कोलोराडो नदी पर निर्मित 'हूवर बाँध' (Hoover Dam) किस देश में स्थित है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "मेक्सिको", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हूवर बाँध संयुक्त राज्य अमेरिका में कोलोराडो नदी पर बनाया गया है, जो एक महत्वपूर्ण जलविद्युत परियोजना है।"
    },
    {
        question: "'काहिरा' (Cairo) शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "राइन", correct: false },
            { text: "टिगरिस", correct: false },
            { text: "नील", correct: true },
            { text: "अमेज़न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिस्र की राजधानी काहिरा, नील नदी के तट पर स्थित है।"
    },
    {
        question: "किस नदी को 'अफ्रीका की जीवन रेखा' कहा जाता है?",
        answers: shuffle([
            { text: "कांगो", correct: false },
            { text: "नाइजर", correct: false },
            { text: "ज़ाम्बेज़ी", correct: false },
            { text: "नील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नील नदी को इसके आसपास के क्षेत्रों में कृषि और जीवन के लिए पानी के मुख्य स्रोत के रूप में 'अफ्रीका की जीवन रेखा' कहा जाता है।"
    },
    {
        question: "यांग्त्से नदी का उद्गम किस पर्वत श्रृंखला से होता है?",
        answers: shuffle([
            { text: "हिमालय", correct: false },
            { text: "एंडीज", correct: false },
            { text: "कुनलुन पर्वत", correct: false },
            { text: "तिब्बती पठार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यांग्त्से नदी का उद्गम तिब्बत के पठार पर स्थित ग्लेशियरों से होता है।"
    },
    {
        question: "कौन सी नदी 'मकर रेखा' (Tropic of Capricorn) को दो बार पार करती है?",
        answers: shuffle([
            { text: "लिम्पोपो", correct: true },
            { text: "ऑरेंज", correct: false },
            { text: "ज़ाम्बेज़ी", correct: false },
            { text: "नाइजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अफ्रीका में बहने वाली लिम्पोपो नदी मकर रेखा को दो बार पार करती है।"
    },
    {
        question: "कौन सी नदी सबसे अधिक देशों से होकर बहती है?",
        answers: shuffle([
            { text: "अमेज़न", correct: false },
            { text: "नील", correct: false },
            { text: "डेन्यूब", correct: true },
            { text: "राइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेन्यूब नदी कुल 10 देशों (जर्मनी, ऑस्ट्रिया, स्लोवाकिया, हंगरी, क्रोएशिया, सर्बिया, रोमानिया, बुल्गारिया, मोल्दोवा और यूक्रेन) से होकर बहती है।"
    },
    {
        question: "किस नदी को 'गंगा नदी' के नाम से भी जाना जाता है, जब वह बांग्लादेश में प्रवेश करती है?",
        answers: shuffle([
            { text: "मेघना", correct: false },
            { text: "जमुना", correct: false },
            { text: "पद्मा", correct: true },
            { text: "ब्रह्मपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा नदी बांग्लादेश में प्रवेश करने के बाद 'पद्मा' के नाम से जानी जाती है।"
    },
    {
        question: "इरावदी (Irrawaddy) नदी किस देश की प्रमुख नदी है?",
        answers: shuffle([
            { text: "थाईलैंड", correct: false },
            { text: "वियतनाम", correct: false },
            { text: "म्यांमार", correct: true },
            { text: "कंबोडिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इरावदी नदी म्यांमार की सबसे लंबी और महत्वपूर्ण नदी है, जिसे 'म्यांमार की जीवन रेखा' भी कहा जाता है।"
    },
    {
        question: "उत्तरी अमेरिका की सबसे लंबी नदी प्रणाली कौन सी है?",
        answers: shuffle([
            { text: "सेंट लॉरेंस", correct: false },
            { text: "मिसिसिपी-मिसौरी", correct: true },
            { text: "मैकेंजी", correct: false },
            { text: "रियो ग्रांडे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिसिसिपी और इसकी प्रमुख सहायक नदी मिसौरी मिलकर उत्तरी अमेरिका की सबसे लंबी नदी प्रणाली बनाती हैं।"
    },
    {
        question: "मेकांग नदी किस देश में नहीं बहती है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "म्यांमार", correct: false },
            { text: "मलेशिया", correct: true },
            { text: "लाओस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेकांग नदी चीन, म्यांमार, थाईलैंड, लाओस, कंबोडिया और वियतनाम से होकर बहती है, लेकिन मलेशिया से नहीं।"
    },
    {
        question: "रूस की सबसे लंबी और यूरोप की भी सबसे लंबी नदी कौन सी है?",
        answers: shuffle([
            { text: "डेन्यूब", correct: false },
            { text: "राइन", correct: false },
            { text: "वोल्गा", correct: true },
            { text: "येनिसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्गा नदी, जिसकी लंबाई लगभग 3,530 किमी है, रूस के पश्चिमी भाग से होकर बहती है और यूरोप की सबसे लंबी नदी है।"
    },
    {
        question: "'विक्टोरिया जलप्रपात' (Victoria Falls) किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "कांगो", correct: false },
            { text: "ज़ाम्बेज़ी", correct: true },
            { text: "नाइजर", correct: false },
            { text: "ऑरेंज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया जलप्रपात, जो दुनिया के सबसे बड़े और सबसे शानदार जलप्रपातों में से एक है, अफ्रीका की ज़ाम्बेज़ी नदी पर स्थित है।"
    },
    {
        question: "बगदाद शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "यूफ्रेट्स", correct: false },
            { text: "टिगरिस", correct: true },
            { text: "जॉर्डन", correct: false },
            { text: "सिंधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इराक की राजधानी बगदाद, टिगरिस नदी के तट पर स्थित है।"
    },
    {
        question: "एशिया की सबसे लंबी नदी कौन सी है?",
        answers: shuffle([
            { text: "ह्वांग हो", correct: false },
            { text: "मेकांग", correct: false },
            { text: "यांग्त्से", correct: true },
            { text: "गंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यांग्त्से नदी (लगभग 6,300 किमी) चीन में बहती है और यह एशिया की सबसे लंबी नदी है।"
    },
    {
        question: "'असवान उच्च बाँध' (Aswan High Dam) किस नदी पर बना है?",
        answers: shuffle([
            { text: "टिगरिस", correct: false },
            { text: "नील", correct: true },
            { text: "कांगो", correct: false },
            { text: "ज़ाम्बेज़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असवान उच्च बाँध मिस्र में नील नदी पर स्थित है, जिसका निर्माण बाढ़ नियंत्रण और बिजली उत्पादन के लिए किया गया था।"
    },
    {
        question: "म्यांमार की सबसे लंबी और प्रमुख नदी कौन सी है?",
        answers: shuffle([
            { text: "मेकांग", correct: false },
            { text: "इरावदी", correct: true },
            { text: "साल्वीन", correct: false },
            { text: "चिंडविन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इरावदी नदी म्यांमार की सबसे लंबी और सबसे महत्वपूर्ण नदी है, जिसे अक्सर 'म्यांमार की जीवन रेखा' कहा जाता है।"
    },
    {
        question: "मेक्सिको और संयुक्त राज्य अमेरिका के बीच सीमा बनाने वाली नदी कौन सी है?",
        answers: shuffle([
            { text: "मिसिसिपी", correct: false },
            { text: "रियो ग्रांडे", correct: true },
            { text: "कोलंबिया", correct: false },
            { text: "युकोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रियो ग्रांडे नदी मेक्सिको और संयुक्त राज्य अमेरिका के बीच एक लंबी प्राकृतिक सीमा बनाती है।"
    },
    {
        question: "रोम शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "सीन", correct: false },
            { text: "डेन्यूब", correct: false },
            { text: "थेम्स", correct: false },
            { text: "टाइबर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इटली की राजधानी रोम, टाइबर नदी के किनारे स्थित है।"
    },
    {
        question: "'ओल्ड मैन रिवर' (Old Man River) या 'फादर ऑफ वाटर्स' (Father of Waters) के नाम से किस नदी को जाना जाता है?",
        answers: shuffle([
            { text: "अमेज़न", correct: false },
            { text: "मिसिसिपी", correct: true },
            { text: "कोलोराडो", correct: false },
            { text: "ओहियो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिसिसिपी नदी को इसके ऐतिहासिक और सांस्कृतिक महत्व के कारण 'फादर ऑफ वाटर्स' या 'महान नदी' कहा जाता है।"
    },
    {
        question: "पनामा शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "पनामा", correct: false },
            { text: "चेपो", correct: false },
            { text: "चाग्रेस", correct: true },
            { text: "ताका-चाग्रेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पनामा शहर चाग्रेस नदी के किनारे स्थित है, जो पनामा नहर के निर्माण में महत्वपूर्ण थी।"
    },
    {
        question: "'ग्रैंड कैन्यन' (Grand Canyon) का निर्माण किस नदी द्वारा किया गया है?",
        answers: shuffle([
            { text: "कोलंबिया", correct: false },
            { text: "हडसन", correct: false },
            { text: "कोलोराडो", correct: true },
            { text: "मिसिसिपी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रैंड कैन्यन, संयुक्त राज्य अमेरिका के एरिजोना राज्य में स्थित एक विशाल भू-आकृति है, जिसका निर्माण कोलोराडो नदी के कटाव से हुआ है।"
    },
    {
        question: "हनोई शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "मेकांग", correct: false },
            { text: "रेड रिवर", correct: true },
            { text: "साल्वीन", correct: false },
            { text: "यांग्त्से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वियतनाम की राजधानी हनोई, लाल नदी (Red River) के किनारे स्थित है।"
    },
    {
        question: "एशिया की कौन सी नदी तिब्बती पठार से निकलकर प्रशांत महासागर में गिरती है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "ब्रह्मपुत्र", correct: false },
            { text: "मेकांग", correct: false },
            { text: "यांग्त्से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यांग्त्से नदी तिब्बती पठार से निकलती है और चीन से बहते हुए शंघाई के पास पूर्वी चीन सागर (प्रशांत महासागर का एक हिस्सा) में गिरती है।"
    },
    {
        question: "यूरोप की कौन सी नदी जर्मनी, ऑस्ट्रिया, हंगरी, क्रोएशिया, सर्बिया आदि देशों से होकर बहती है?",
        answers: shuffle([
            { text: "राइन", correct: false },
            { text: "डेन्यूब", correct: true },
            { text: "वोल्गा", correct: false },
            { text: "सीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेन्यूब नदी 10 देशों से होकर बहती है, जिसमें जर्मनी, ऑस्ट्रिया, हंगरी, क्रोएशिया और सर्बिया प्रमुख हैं।"
    },
    {
        question: "कराची शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "सतलुज", correct: false },
            { text: "झेलम", correct: false },
            { text: "सिंधु", correct: true },
            { text: "चिनाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाकिस्तान का सबसे बड़ा शहर कराची, अरब सागर के तट पर सिंधु नदी के मुहाने के पास स्थित है।"
    },
    {
        question: "अमेरिका के पूर्वी तट पर बहने वाली और वाशिंगटन, डी.सी. के किनारे स्थित नदी का नाम क्या है?",
        answers: shuffle([
            { text: "मैकेंजी", correct: false },
            { text: "मिसौरी", correct: false },
            { text: "पोटोमैक", correct: true },
            { text: "ओहियो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोटोमैक नदी संयुक्त राज्य अमेरिका के पूर्वी तट पर बहती है और देश की राजधानी वाशिंगटन, डी.सी. इसके किनारे स्थित है।"
    },
    {
        question: "सेंट लॉरेंस नदी किस महासागर में गिरती है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "हिंद महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेंट लॉरेंस नदी कनाडा से बहकर अटलांटिक महासागर में गिरती है और यह उत्तरी अमेरिका के महान झीलों (Great Lakes) को महासागर से जोड़ती है।"
    },
    {
        question: "कौन सी नदी उत्तरी गोलार्ध में सबसे लंबी नदी है जो पूरी तरह से रूस के भीतर बहती है?",
        answers: shuffle([
            { text: "लेना", correct: false },
            { text: "येनिसी", correct: false },
            { text: "वोल्गा", correct: true },
            { text: "ओब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्गा नदी यूरोप की सबसे लंबी और उत्तरी गोलार्ध की सबसे लंबी नदियों में से एक है जो पूरी तरह से एक ही देश (रूस) के भीतर बहती है।"
    },
    {
        question: "'ओकावांगो डेल्टा' (Okavango Delta) किस नदी पर बनता है?",
        answers: shuffle([
            { text: "लिम्पोपो", correct: false },
            { text: "ज़ाम्बेज़ी", correct: false },
            { text: "ऑरेंज", correct: false },
            { text: "ओकावांगो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओकावांगो नदी बोत्सवाना में ओकावांगो डेल्टा का निर्माण करती है, जो दुनिया के सबसे बड़े अंतर्देशीय (inland) डेल्टाओं में से एक है।"
    },
    {
        question: "यूरोप की सबसे व्यस्त नदी कौन सी है जो कई औद्योगिक क्षेत्रों से होकर बहती है?",
        answers: shuffle([
            { text: "थेम्स", correct: false },
            { text: "राइन", correct: true },
            { text: "डेन्यूब", correct: false },
            { text: "सीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइन नदी को यूरोप में सबसे व्यस्त जलमार्गों में से एक माना जाता है, जो कई महत्वपूर्ण औद्योगिक क्षेत्रों से गुजरती है।"
    },
    {
        question: "'पनामा नहर' बनाने के लिए किस नदी के एक हिस्से का उपयोग किया गया था?",
        answers: shuffle([
            { text: "चाग्रेस", correct: true },
            { text: "पनामा", correct: false },
            { text: "अट्रैटो", correct: false },
            { text: "दातार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पनामा नहर का निर्माण करते समय चाग्रेस नदी के एक बड़े हिस्से को नहर के रूप में उपयोग किया गया था।"
    },
    {
        question: "'ब्रह्मपुत्र नदी' को तिब्बत में किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "जमुना", correct: false },
            { text: "पद्मा", correct: false },
            { text: "सांगपो", correct: true },
            { text: "मेघना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मपुत्र नदी का उद्गम तिब्बत में होता है, जहाँ इसे 'सांगपो' के नाम से जाना जाता है।"
    },
    {
        question: "कौन सी नदी 'विषुवत वृत्त' के पास बहती है लेकिन उसे काटती नहीं है?",
        answers: shuffle([
            { text: "नाइजर", correct: false },
            { text: "ऑरेंज", correct: false },
            { text: "नील", correct: true },
            { text: "कांगो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नील नदी का उद्गम विषुवत रेखा के पास से होता है, लेकिन यह स्वयं इस रेखा को पार नहीं करती।"
    },
    {
        question: "'इरावदी डॉल्फिन' (Irrawaddy Dolphin) किस नदी में पाई जाती है?",
        answers: shuffle([
            { text: "मेकांग", correct: false },
            { text: "इरावदी", correct: true },
            { text: "साल्वीन", correct: false },
            { text: "गंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इरावदी डॉल्फिन, एक प्रकार की मीठे पानी की डॉल्फिन है, जो विशेष रूप से इरावदी नदी में पाई जाती है।"
    },
    {
        question: "जर्मनी का 'बर्लिन' शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "राइन", correct: false },
            { text: "डेन्यूब", correct: false },
            { text: "स्पी", correct: true },
            { text: "एल्बे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जर्मनी की राजधानी बर्लिन, स्पी (Spree) नदी के तट पर स्थित है।"
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