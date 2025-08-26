const questions = [ 
    {
        topHeading: "नदियों के किनारे बसे विश्व के प्रमुख नगर पर आधारित 50 बहुविकल्पी प्रश्न part 1  (quiz_no. 52)."
    },
    {
        question: "लंदन किस नदी के किनारे बसा है?",
        answers: [
            { text: "थीम्स", correct: true },
            { text: "डेन्यूब", correct: false },
            { text: "नीपर", correct: false },
            { text: "सीन", correct: false }
        ]
    },
    {
        question: "पेरिस किस नदी के किनारे स्थित है?",
        answers: [
            { text: "नीपर", correct: false },
            { text: "सीन", correct: true },
            { text: "वोल्गा", correct: false },
            { text: "राइन", correct: false }
        ]
    },
    {
        question: "काहिरा किस नदी के किनारे स्थित है?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "नील", correct: true },
            { text: "अमेज़न", correct: false },
            { text: "मिसीसिपी", correct: false }
        ]
    },
    {
        question: "बुडापेस्ट किस नदी के किनारे बसा है?",
        answers: [
            { text: "वोल्गा", correct: false },
            { text: "राइन", correct: false },
            { text: "डेन्यूब", correct: true },
            { text: "थीम्स", correct: false }
        ]
    },
    {
        question: "रोम किस नदी के किनारे स्थित है?",
        answers: [
            { text: "टाइबर", correct: true },
            { text: "सीन", correct: false },
            { text: "राइन", correct: false },
            { text: "डेन्यूब", correct: false }
        ]
    },
    {
        question: "बैंकॉक किस नदी के किनारे स्थित है?",
        answers: [
            { text: "चाओ फ्राया", correct: true },
            { text: "यांग्त्ज़े", correct: false },
            { text: "मेकोंग", correct: false },
            { text: "इरावदी", correct: false }
        ]
    },
    {
        question: "बगदाद किस नदी के किनारे बसा है?",
        answers: [
            { text: "तिगरिस", correct: true },
            { text: "यूफ्रेट्स", correct: false },
            { text: "नील", correct: false },
            { text: "राइन", correct: false }
        ]
    },
    {
        question: "कराची किस नदी के किनारे स्थित है?",
        answers: [
            { text: "सिंधु", correct: true },
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "ब्रह्मपुत्र", correct: false }
        ]
    },
    {
        question: "कोलंबो किस नदी के किनारे स्थित है?",
        answers: [
            { text: "केलानी", correct: true },
            { text: "गंगा", correct: false },
            { text: "यांग्त्ज़े", correct: false },
            { text: "नील", correct: false }
        ]
    },
    {
        question: "सिडनी किस नदी के किनारे स्थित है?",
        answers: [
            { text: "पेरामाटा", correct: true },
            { text: "मुर्रे", correct: false },
            { text: "डार्लिंग", correct: false },
            { text: "हंटर", correct: false }
        ]
    },
    {
        question: "वाशिंगटन डी.सी. किस नदी के किनारे स्थित है?",
        answers: [
            { text: "पोटोमैक", correct: true },
            { text: "हडसन", correct: false },
            { text: "मिसिसिपी", correct: false },
            { text: "ओहायो", correct: false }
        ]
    },
    {
        question: "शंघाई किस नदी के किनारे बसा है?",
        answers: [
            { text: "यांग्त्ज़े", correct: true },
            { text: "मेकोंग", correct: false },
            { text: "गंगा", correct: false },
            { text: "सिंधु", correct: false }
        ]
    },
    {
        question: "न्यूयॉर्क किस नदी के किनारे स्थित है?",
        answers: [
            { text: "हडसन", correct: true },
            { text: "मिसूरी", correct: false },
            { text: "रियो ग्रांडे", correct: false },
            { text: "सेंट लॉरेंस", correct: false }
        ]
    },
    {
        question: "मॉस्को किस नदी के किनारे बसा है?",
        answers: [
            { text: "मास्कवा", correct: true },
            { text: "वोल्गा", correct: false },
            { text: "डेन्यूब", correct: false },
            { text: "नीपर", correct: false }
        ]
    },
    {
        question: "सेंट पीटर्सबर्ग किस नदी के किनारे स्थित है?",
        answers: [
            { text: "नेवा", correct: true },
            { text: "वोल्गा", correct: false },
            { text: "डॉन", correct: false },
            { text: "ओका", correct: false }
        ]
    },
    {
        question: "वियना किस नदी के किनारे स्थित है?",
        answers: [
            { text: "डेन्यूब", correct: true },
            { text: "विस्टुला", correct: false },
            { text: "एल्बे", correct: false },
            { text: "राइन", correct: false }
        ]
    },
    {
        question: "एम्स्टर्डम किस नदी के किनारे बसा है?",
        answers: [
            { text: "एम्स्टल", correct: true },
            { text: "राइन", correct: false },
            { text: "सीन", correct: false },
            { text: "टेम्स", correct: false }
        ]
    },
    {
        question: "ब्रसेल्स किस नदी के किनारे स्थित है?",
        answers: [
            { text: "सेन", correct: true },
            { text: "राइन", correct: false },
            { text: "थीम्स", correct: false },
            { text: "विस्टुला", correct: false }
        ]
    },
    {
        question: "बर्लिन किस नदी के किनारे स्थित है?",
        answers: [
            { text: "स्प्री", correct: true },
            { text: "एल्बे", correct: false },
            { text: "राइन", correct: false },
            { text: "डेन्यूब", correct: false }
        ]
    },
    {
        question: "प्राग किस नदी के किनारे स्थित है?",
        answers: [
            { text: "वल्तावा", correct: true },
            { text: "डेन्यूब", correct: false },
            { text: "राइन", correct: false },
            { text: "वोल्गा", correct: false }
        ]
    },
    {
        question: "वारसॉ किस नदी के किनारे स्थित है?",
        answers: [
            { text: "विस्टुला", correct: true },
            { text: "डेन्यूब", correct: false },
            { text: "राइन", correct: false },
            { text: "एल्बे", correct: false }
        ]
    },
    {
        question: "बुखारेस्ट किस नदी के किनारे स्थित है?",
        answers: [
            { text: "डंबोविता", correct: true },
            { text: "डेन्यूब", correct: false },
            { text: "राइन", correct: false },
            { text: "वोल्गा", correct: false }
        ]
    },
    {
        question: "बेलग्रेड किस नदी के किनारे स्थित है?",
        answers: [
            { text: "सावा", correct: true },
            { text: "डेन्यूब", correct: false },
            { text: "राइन", correct: false },
            { text: "थीम्स", correct: false }
        ]
    },
    {
        question: "हनोई किस नदी के किनारे स्थित है?",
        answers: [
            { text: "रेड", correct: true },
            { text: "मेकोंग", correct: false },
            { text: "यांग्त्ज़े", correct: false },
            { text: "गंगा", correct: false }
        ]
    },
    {
        question: "लिस्बन किस नदी के किनारे स्थित है?",
        answers: [
            { text: "टेगस", correct: true },
            { text: "डेन्यूब", correct: false },
            { text: "सीन", correct: false },
            { text: "टेम्स", correct: false }
        ]
    },
    {
        question: "अबु धाबी किस नदी के किनारे स्थित है?",
        answers: [
            { text: "खलीज", correct: false },
            { text: "कोई प्रमुख नदी नहीं", correct: true },
            { text: "यूफ्रेट्स", correct: false },
            { text: "नील", correct: false }
        ]
    },
    {
        question: "ब्रिजटाउन (बारबाडोस) किस नदी के किनारे स्थित है?",
        answers: [
            { text: "केयरन", correct: false },
            { text: "कोई प्रमुख नदी नहीं", correct: true },
            { text: "ओर्ली", correct: false },
            { text: "लुआ", correct: false }
        ]
    },
    {
        question: "लिय्योन किस नदी के किनारे स्थित है?",
        answers: [
            { text: "रोन", correct: true },
            { text: "सीन", correct: false },
            { text: "डेन्यूब", correct: false },
            { text: "राइन", correct: false }
        ]
    },
    {
        question: "जिनेवा किस नदी के किनारे स्थित है?",
        answers: [
            { text: "रोने", correct: true },
            { text: "राइन", correct: false },
            { text: "डेन्यूब", correct: false },
            { text: "सीन", correct: false }
        ]
    },
    {
        question: "बेसल किस नदी के किनारे स्थित है?",
        answers: [
            { text: "राइन", correct: true },
            { text: "सीन", correct: false },
            { text: "विस्टुला", correct: false },
            { text: "एम्स्टल", correct: false }
        ]
    },
    {
        question: "कोलोन किस नदी के किनारे स्थित है?",
        answers: [
            { text: "राइन", correct: true },
            { text: "डेन्यूब", correct: false },
            { text: "थीम्स", correct: false },
            { text: "स्प्री", correct: false }
        ]
    },
    {
        question: "डसेलडोर्फ किस नदी के किनारे स्थित है?",
        answers: [
            { text: "राइन", correct: true },
            { text: "विस्टुला", correct: false },
            { text: "टेम्स", correct: false },
            { text: "सीन", correct: false }
        ]
    },
    {
        question: "हांगकांग किस नदी के किनारे स्थित है?",
        answers: [
            { text: "पर्ल", correct: true },
            { text: "यांग्त्ज़े", correct: false },
            { text: "मेकोंग", correct: false },
            { text: "अमूर", correct: false }
        ]
    },
    {
        question: "ग्वांगझोऊ किस नदी के किनारे स्थित है?",
        answers: [
            { text: "पर्ल", correct: true },
            { text: "यांग्त्ज़े", correct: false },
            { text: "रेड", correct: false },
            { text: "मेकोंग", correct: false }
        ]
    },
    {
        question: "हनोवर किस नदी के किनारे स्थित है?",
        answers: [
            { text: "लाईने", correct: true },
            { text: "राइन", correct: false },
            { text: "डेन्यूब", correct: false },
            { text: "सीन", correct: false }
        ]
    },
    {
        question: "ब्राजीलिया किस नदी के किनारे स्थित है?",
        answers: [
            { text: "पराना", correct: false },
            { text: "कोई प्रमुख नदी नहीं", correct: true },
            { text: "अमेजन", correct: false },
            { text: "साओ फ्रांसिस्को", correct: false }
        ]
    },
    {
        question: "ब्यूनस आयर्स किस नदी के किनारे स्थित है?",
        answers: [
            { text: "ला प्लाटा", correct: true },
            { text: "अमेजन", correct: false },
            { text: "पराना", correct: false },
            { text: "ओरिनोको", correct: false }
        ]
    },
    {
        question: "ओसाका किस नदी के किनारे स्थित है?",
        answers: [
            { text: "योदो", correct: true },
            { text: "शिनानो", correct: false },
            { text: "किटाकामी", correct: false },
            { text: "तोन", correct: false }
        ]
    },
    {
        question: "कीटो किस नदी के किनारे स्थित है?",
        answers: [
            { text: "गुआयास", correct: false },
            { text: "कोई प्रमुख नदी नहीं", correct: true },
            { text: "अमेजन", correct: false },
            { text: "मग्दालेना", correct: false }
        ]
    },
    {
        question: "कराची किस नदी के किनारे स्थित है?",
        answers: [
            { text: "मलिर", correct: false },
            { text: "सिंधु", correct: true },
            { text: "हब", correct: false },
            { text: "केलानी", correct: false }
        ]
    },
    {
        question: "लाहौर किस नदी के किनारे स्थित है?",
        answers: [
            { text: "रावी", correct: true },
            { text: "सिंधु", correct: false },
            { text: "सतलुज", correct: false },
            { text: "झेलम", correct: false }
        ]
    },
    {
        question: "अम्मान किस नदी के किनारे स्थित है?",
        answers: [
            { text: "कोई प्रमुख नदी नहीं", correct: true },
            { text: "जॉर्डन", correct: false },
            { text: "यूफ्रेट्स", correct: false },
            { text: "तिगरिस", correct: false }
        ]
    },
    {
        question: "दमिश्क किस नदी के किनारे स्थित है?",
        answers: [
            { text: "बरादा", correct: true },
            { text: "यूफ्रेट्स", correct: false },
            { text: "नील", correct: false },
            { text: "टाइग्रिस", correct: false }
        ]
    },
    {
        question: "काठमांडू किस नदी के किनारे स्थित है?",
        answers: [
            { text: "बागमती", correct: true },
            { text: "गंडकी", correct: false },
            { text: "कोसी", correct: false },
            { text: "गंगा", correct: false }
        ]
    },
    {
        question: "मैड्रिड किस नदी के किनारे स्थित है?",
        answers: [
            { text: "मन्ज़ानारेस", correct: true },
            { text: "टैगस", correct: false },
            { text: "डुओरो", correct: false },
            { text: "एब्र", correct: false }
        ]
    },
    {
        question: "सेविले किस नदी के किनारे स्थित है?",
        answers: [
            { text: "ग्वाडलक्विविर", correct: true },
            { text: "टैगस", correct: false },
            { text: "डुओरो", correct: false },
            { text: "एब्र", correct: false }
        ]
    },
    {
        question: "मेक्सिको सिटी किस नदी के किनारे स्थित है?",
        answers: [
            { text: "कोई प्रमुख नदी नहीं", correct: true },
            { text: "रियो ग्रांडे", correct: false },
            { text: "उसुमासिंटा", correct: false },
            { text: "पापालोपान", correct: false }
        ]
    },
    {
        question: "किंग्स्टन (जमैका) किस नदी के किनारे स्थित है?",
        answers: [
            { text: "कोई प्रमुख नदी नहीं", correct: true },
            { text: "ब्लैक", correct: false },
            { text: "ग्रेट", correct: false },
            { text: "यलो", correct: false }
        ]
    },
    {
        question: "अबुजा किस नदी के किनारे स्थित है?",
        answers: [
            { text: "बेन्यू", correct: false },
            { text: "नाइजर", correct: false },
            { text: "कोई प्रमुख नदी नहीं", correct: true },
            { text: "कांगो", correct: false }
        ]
    },
    {
        question: "लागोस किस नदी के किनारे स्थित है?",
        answers: [
            { text: "ओगुन", correct: true },
            { text: "नाइजर", correct: false },
            { text: "कोई प्रमुख नदी नहीं", correct: false },
            { text: "कांगो", correct: false }
        ]
    }
];
