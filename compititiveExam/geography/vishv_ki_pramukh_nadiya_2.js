const questions = [
    {
        topHeading: "विश्व के प्रमुख नदियों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 69)."
    },
    {
        question: "'रोम' शहर किस नदी के किनारे बसा हुआ है?",
        answers: shuffle([
            { text: "राइन", correct: false },
            { text: "थेम्स", correct: false },
            { text: "टाइबर", correct: true },
            { text: "डेन्यूब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इटली की राजधानी और ऐतिहासिक शहर रोम, टाइबर नदी के तट पर स्थित है।"
    },
    {
        question: "'कोयंबटूर' शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "कावेरी", correct: false },
            { text: "भवानी", correct: false },
            { text: "नोयाल", correct: true },
            { text: "पेरियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोयंबटूर तमिलनाडु का एक प्रमुख शहर है, जो नोयाल नदी के किनारे पर स्थित है, जो कावेरी की एक सहायक नदी है।"
    },
    {
        question: "अफ्रीका की कौन सी नदी 'विषुवत वृत्त' को दो बार काटती है?",
        answers: shuffle([
            { text: "नील", correct: false },
            { text: "कांगो", correct: true },
            { text: "नाइजर", correct: false },
            { text: "ज़ाम्बेज़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांगो नदी एकमात्र ऐसी नदी है जो विषुवत वृत्त (भूमध्य रेखा) को दो बार पार करती है।"
    },
    {
        question: "'विक्टोरिया जलप्रपात' (Victoria Falls) किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नील", correct: false },
            { text: "कांगो", correct: false },
            { text: "ज़ाम्बेज़ी", correct: true },
            { text: "लिम्पोपो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया जलप्रपात, जो दुनिया के सबसे बड़े जलप्रपातों में से एक है, अफ्रीका की ज़ाम्बेज़ी नदी पर स्थित है।"
    },
    {
        question: "किस नदी को 'यूरोप की जीवन रेखा' (Life Line of Europe) कहा जाता है?",
        answers: shuffle([
            { text: "डेन्यूब", correct: false },
            { text: "वोल्गा", correct: false },
            { text: "राइन", correct: true },
            { text: "थेम्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइन नदी को इसके महत्वपूर्ण व्यापारिक और परिवहन महत्व के कारण 'यूरोप की जीवन रेखा' कहा जाता है।"
    },
    {
        question: "'माजुली द्वीप' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "सिंधु", correct: false },
            { text: "ब्रह्मपुत्र", correct: true },
            { text: "अमेज़न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माजुली, असम, भारत में ब्रह्मपुत्र नदी पर स्थित विश्व का सबसे बड़ा नदी द्वीप है।"
    },
    {
        question: "'ग्रैंड कैन्यन' (Grand Canyon) किस नदी द्वारा बनाया गया है?",
        answers: shuffle([
            { text: "मिसिसिपी", correct: false },
            { text: "कोलोराडो", correct: true },
            { text: "कोलंबिया", correct: false },
            { text: "ओहियो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रैंड कैन्यन का निर्माण संयुक्त राज्य अमेरिका में कोलोराडो नदी के कटाव से हुआ है।"
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
        question: "'मेसोपोटामिया' की सभ्यता किन दो नदियों के बीच विकसित हुई?",
        answers: shuffle([
            { text: "नील और कांगो", correct: false },
            { text: "सिंधु और गंगा", correct: false },
            { text: "टिगरिस और यूफ्रेट्स", correct: true },
            { text: "ह्वांग हो और यांग्त्से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिगरिस और यूफ्रेट्स नदियों के बीच का क्षेत्र प्राचीन मेसोपोटामिया की सभ्यता का केंद्र था।"
    },
    {
        question: "लंदन शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "राइन", correct: false },
            { text: "सीन", correct: false },
            { text: "थेम्स", correct: true },
            { text: "वोल्गा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लंदन शहर इंग्लैंड में थेम्स नदी के किनारे स्थित है।"
    },
    {
        question: "'अलेक्जेंड्रिया' (Alexandria) शहर किस नदी के मुहाने पर स्थित है?",
        answers: shuffle([
            { text: "नील", correct: true },
            { text: "अमेजन", correct: false },
            { text: "टिगरिस", correct: false },
            { text: "यूफ्रेट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिस्र का बंदरगाह शहर अलेक्जेंड्रिया, नील नदी के मुहाने पर भूमध्य सागर के तट पर स्थित है।"
    },
    {
        question: "'वियना', 'बुडापेस्ट', और 'बेलग्रेड' जैसे प्रमुख यूरोपीय शहर किस नदी के किनारे स्थित हैं?",
        answers: shuffle([
            { text: "राइन", correct: false },
            { text: "डेन्यूब", correct: true },
            { text: "एल्बे", correct: false },
            { text: "सीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेन्यूब नदी कई महत्वपूर्ण यूरोपीय राजधानियों जैसे वियना (ऑस्ट्रिया), बुडापेस्ट (हंगरी) और बेलग्रेड (सर्बिया) से होकर बहती है।"
    },
    {
        question: "'पो' नदी किस देश में बहती है?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "जर्मनी", correct: false },
            { text: "इटली", correct: true },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पो' नदी इटली की सबसे लंबी नदी है और यह देश के उत्तरी भाग से होकर एड्रियाटिक सागर में गिरती है।"
    },
    {
        question: "'कालाहारी रेगिस्तान' में बहने वाली सबसे बड़ी नदी कौन सी है?",
        answers: shuffle([
            { text: "ऑरेंज", correct: false },
            { text: "लिम्पोपो", correct: false },
            { text: "ज़ाम्बेज़ी", correct: false },
            { text: "ओकावांगो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओकावांगो नदी कालाहारी रेगिस्तान के माध्यम से बहती है और दुनिया के सबसे बड़े अंतर्देशीय (inland) डेल्टा का निर्माण करती है।"
    },
    {
        question: "'हैनोई' (Hanoi) शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "मेकांग", correct: false },
            { text: "यांग्त्से", correct: false },
            { text: "रेड रिवर", correct: true },
            { text: "इरावदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वियतनाम की राजधानी हनोई, 'रेड रिवर' (लाल नदी) के किनारे स्थित है।"
    },
    {
        question: "'ब्रह्मपुत्र नदी' को तिब्बत में किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "जमुना", correct: false },
            { text: "पद्मा", correct: false },
            { text: "सांगपो", correct: true },
            { text: "मेघना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मपुत्र नदी का उद्गम तिब्बत में होता है, जहाँ इसे 'यारलुंग त्संगपो' या केवल 'सांगपो' के नाम से जाना जाता है।"
    },
    {
        question: "'कोलंबिया' नदी किस महासागर में गिरती है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलंबिया नदी, जो उत्तरी अमेरिका के प्रशांत उत्तर-पश्चिम क्षेत्र में बहती है, प्रशांत महासागर में गिरती है।"
    },
    {
        question: "उत्तरी अमेरिका की 'ग्रेट लेक्स' (Great Lakes) को अटलांटिक महासागर से कौन सी नदी जोड़ती है?",
        answers: shuffle([
            { text: "हडसन", correct: false },
            { text: "मिसिसिपी", correct: false },
            { text: "सेंट लॉरेंस", correct: true },
            { text: "मैकेंजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेंट लॉरेंस नदी, ग्रेट लेक्स से निकलकर अटलांटिक महासागर में गिरती है और उन्हें महासागर से जोड़ती है।"
    },
    {
        question: "'अटलांटिक महासागर' में गिरने वाली सबसे बड़ी नदी कौन सी है?",
        answers: shuffle([
            { text: "नील", correct: false },
            { text: "अमेज़न", correct: true },
            { text: "कांगो", correct: false },
            { text: "मिसिसिपी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जल आयतन के हिसाब से विश्व की सबसे बड़ी नदी अमेज़न, अटलांटिक महासागर में गिरती है।"
    },
    {
        question: "'नदी का मुहाना' (Mouth of the river) क्या होता है?",
        answers: shuffle([
            { text: "वह स्थान जहाँ नदी की धाराएँ अलग होती हैं।", correct: false },
            { text: "वह स्थान जहाँ नदी का उद्गम होता है।", correct: false },
            { text: "वह स्थान जहाँ नदी किसी सागर, झील या महासागर में मिलती है।", correct: true },
            { text: "वह स्थान जहाँ नदी सबसे गहरी होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नदी का मुहाना वह अंतिम बिंदु होता है जहाँ नदी का पानी किसी बड़े जल निकाय जैसे सागर, महासागर या झील में मिल जाता है।"
    },
    {
        question: "'कांगो नदी' का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "जायरे", correct: true },
            { text: "ऑरेंज", correct: false },
            { text: "ओकवांगो", correct: false },
            { text: "नील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांगो नदी को 'जायरे नदी' के नाम से भी जाना जाता है।"
    },
    {
        question: "चीन की 'यांग्त्से नदी' किस सागर में गिरती है?",
        answers: shuffle([
            { text: "पीला सागर (Yellow Sea)", correct: false },
            { text: "पूर्वी चीन सागर", correct: true },
            { text: "दक्षिणी चीन सागर", correct: false },
            { text: "अरब सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यांग्त्से नदी शंघाई के पास पूर्वी चीन सागर में गिरती है।"
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
        question: "'बुडापेस्ट' शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "राइन", correct: false },
            { text: "डेन्यूब", correct: true },
            { text: "वोल्गा", correct: false },
            { text: "थेम्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुडापेस्ट, हंगरी की राजधानी, डेन्यूब नदी के दोनों किनारों पर स्थित है।"
    },
    {
        question: "'नदी बेसिन' (River Basin) क्या होता है?",
        answers: shuffle([
            { text: "नदी की सबसे गहरी घाटी।", correct: false },
            { text: "नदी के उद्गम का स्थान।", correct: false },
            { text: "वह पूरा क्षेत्र जहाँ का पानी बहकर एक मुख्य नदी में आता है।", correct: true },
            { text: "नदी का डेल्टा क्षेत्र।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नदी बेसिन वह भौगोलिक क्षेत्र है, जहाँ वर्षा का जल बहकर एक मुख्य नदी और उसकी सहायक नदियों में एकत्रित होता है।"
    },
    {
        question: "'पोर्टो अलेग्रे' (Porto Alegre) शहर किस नदी के मुहाने पर स्थित है?",
        answers: shuffle([
            { text: "पराना", correct: false },
            { text: "उरुग्वे", correct: false },
            { text: "गुएबा", correct: true },
            { text: "अमेज़न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील का प्रमुख शहर पोर्टो अलेग्रे, गुएबा नदी के मुहाने पर स्थित है, जो अटलांटिक महासागर में बहती है।"
    },
    {
        question: "चीन की कौन सी नदी को 'मोतियों की नदी' (Pearl River) के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "यांग्त्से", correct: false },
            { text: "ह्वांग हो", correct: false },
            { text: "ज़ू जियांग", correct: true },
            { text: "मीकांग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज़ू जियांग नदी को चीन में 'मोतियों की नदी' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दक्षिणी चीन में बहने वाली एक प्रमुख नदी है।"
    },
    {
        question: "'बर्लिन' शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "राइन", correct: false },
            { text: "एल्बे", correct: false },
            { text: "स्पी", correct: true },
            { text: "डेन्यूब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जर्मनी की राजधानी बर्लिन, स्पी (Spree) नदी के तट पर स्थित है।"
    },
    {
        question: "'पोट्सडैम' शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "राइन", correct: false },
            { text: "स्पी", correct: false },
            { text: "हाफेल", correct: true },
            { text: "एल्बे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोट्सडैम शहर, जो बर्लिन के पास स्थित है, हाफेल नदी के तट पर स्थित है।"
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
        question: "पेरिस शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "थेम्स", correct: false },
            { text: "सीन", correct: true },
            { text: "वोल्गा", correct: false },
            { text: "राइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रांस की राजधानी पेरिस, सीन नदी के किनारे स्थित है।"
    },
    {
        question: "'यूरोप की जीवन रेखा' (Life Line of Europe) किस नदी को कहा जाता है?",
        answers: shuffle([
            { text: "डेन्यूब", correct: false },
            { text: "वोल्गा", correct: false },
            { text: "राइन", correct: true },
            { text: "थेम्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइन नदी को इसके महत्वपूर्ण व्यापारिक और परिवहन महत्व के कारण 'यूरोप की जीवन रेखा' कहा जाता है।"
    },
    {
        question: "'माजुली द्वीप' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "सिंधु", correct: false },
            { text: "ब्रह्मपुत्र", correct: true },
            { text: "अमेज़न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माजुली, असम, भारत में ब्रह्मपुत्र नदी पर स्थित विश्व का सबसे बड़ा नदी द्वीप है।"
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
        question: "किस नदी को 'यूफ्रेट्स' की सहायक नदी के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "हबोरी", correct: true },
            { text: "जॉर्डन", correct: false },
            { text: "टिगरिस", correct: false },
            { text: "यूकोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हबोरी (Khabur) नदी सीरिया और तुर्की में बहती है और यह यूफ्रेट्स की एक महत्वपूर्ण सहायक नदी है।"
    },
    {
        question: "लंदन शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "डेन्यूब", correct: false },
            { text: "वोल्गा", correct: false },
            { text: "थेम्स", correct: true },
            { text: "वोल्गा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लंदन शहर इंग्लैंड में थेम्स नदी के किनारे स्थित है।"
    },
    {
        question: "'कालाहारी रेगिस्तान' में बहने वाली सबसे बड़ी नदी कौन सी है?",
        answers: shuffle([
            { text: "ऑरेंज", correct: false },
            { text: "लिम्पोपो", correct: false },
            { text: "ज़ाम्बेज़ी", correct: false },
            { text: "ओकावांगो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओकावांगो नदी कालाहारी रेगिस्तान के माध्यम से बहती है और दुनिया के सबसे बड़े अंतर्देशीय (inland) डेल्टा का निर्माण करती है।"
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
        question: "किस नदी पर 'हीराकूद बाँध' (Hirakud Dam) स्थित है?",
        answers: shuffle([
            { text: "महानदी", correct: true },
            { text: "गोदावरी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीराकूद बाँध भारत के ओडिशा राज्य में महानदी पर बना एक महत्वपूर्ण बाँध है।"
    },
    {
        question: "एशिया की कौन सी नदी 'डेल्टा' नहीं बनाती है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "ब्रह्मपुत्र", correct: false },
            { text: "सिंधु", correct: true },
            { text: "मेकांग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु नदी का डेल्टा एक छोटा और अपूर्ण डेल्टा है, जो इसकी मुहाने पर बनता है, जबकि अन्य नदियाँ बड़े और जटिल डेल्टा बनाती हैं।"
    },
    {
        question: "'बगदाद' शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "यूफ्रेट्स", correct: false },
            { text: "टिगरिस", correct: true },
            { text: "जॉर्डन", correct: false },
            { text: "सिंधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इराक की राजधानी बगदाद, टिगरिस नदी के तट पर स्थित है।"
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
        question: "'रोटरडम' (Rotterdam) बंदरगाह किस नदी के मुहाने पर स्थित है?",
        answers: shuffle([
            { text: "डेन्यूब", correct: false },
            { text: "राइन", correct: true },
            { text: "एल्बे", correct: false },
            { text: "थेम्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीदरलैंड्स का रोटरडम बंदरगाह, जो यूरोप का सबसे बड़ा बंदरगाह है, राइन नदी के मुहाने पर स्थित है।"
    },
    {
        question: "'पो' नदी किस देश में बहती है?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "जर्मनी", correct: false },
            { text: "इटली", correct: true },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पो' नदी इटली की सबसे लंबी नदी है और यह देश के उत्तरी भाग से होकर एड्रियाटिक सागर में गिरती है।"
    },
    {
        question: "'नील नदी' का उद्गम किस झील से होता है?",
        answers: shuffle([
            { text: "टंगान्यिका झील", correct: false },
            { text: "विक्टोरिया झील", correct: true },
            { text: "मलावी झील", correct: false },
            { text: "चाड झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नील नदी का मुख्य स्रोत विक्टोरिया झील है, जो अफ्रीका की सबसे बड़ी झील है।"
    },
    {
        question: "'ऑरेंज नदी' किस महाद्वीप में बहती है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑरेंज नदी दक्षिणी अफ्रीका में बहती है और यह इस क्षेत्र की एक प्रमुख नदी है।"
    },
    {
        question: "'ओहियो' नदी किस नदी की सहायक नदी है?",
        answers: shuffle([
            { text: "सेंट लॉरेंस", correct: false },
            { text: "मिसिसिपी", correct: true },
            { text: "हडसन", correct: false },
            { text: "मैकेंजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओहियो नदी, मिसिसिपी नदी की एक प्रमुख सहायक नदी है।"
    },
    {
        question: "'टोक्यो' शहर किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "योशीनो", correct: false },
            { text: "अराकवा", correct: true },
            { text: "शिनानो", correct: false },
            { text: "इशिरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जापान की राजधानी टोक्यो, अराकवा नदी के तट पर स्थित है।"
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