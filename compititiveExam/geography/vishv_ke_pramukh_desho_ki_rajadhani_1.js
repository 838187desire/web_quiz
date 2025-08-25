const questions = [ 
    {
        topHeading: "विश्व के प्रमुख देशों की राजधानियों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 80)."
    },
    {
        question: "नॉर्वे की राजधानी क्या है?",
        answers: shuffle([
            { text: "स्टॉकहोम", correct: false },
            { text: "हेलसिंकी", correct: false },
            { text: "ओस्लो", correct: true },
            { text: "कोपेनहेगन", correct: false }
        ]),
    },
    {
        question: "ऑस्ट्रेलिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "सिडनी", correct: false },
            { text: "मेलबर्न", correct: false },
            { text: "कैनबरा", correct: true },
            { text: "ब्रिस्बेन", correct: false }
        ]),
    },
    {
        question: "तुर्की की राजधानी क्या है?",
        answers: shuffle([
            { text: "इस्तांबुल", correct: false },
            { text: "अंकारा", correct: true },
            { text: "इज़मिर", correct: false },
            { text: "बर्सा", correct: false }
        ]),
    },
    {
        question: "ब्राज़ील की राजधानी क्या है?",
        answers: shuffle([
            { text: "साओ पाउलो", correct: false },
            { text: "रियो डी जनेरियो", correct: false },
            { text: "ब्रासीलिया", correct: true },
            { text: "ब्यूनस आयर्स", correct: false }
        ]),
    },
    {
        question: "मिस्र की राजधानी क्या है?",
        answers: shuffle([
            { text: "अलेक्जेंड्रिया", correct: false },
            { text: "गीज़ा", correct: false },
            { text: "काहिरा", correct: true },
            { text: "लक्सर", correct: false }
        ]),
    },
    {
        question: "कनाडा की राजधानी क्या है?",
        answers: shuffle([
            { text: "टोरंटो", correct: false },
            { text: "वैंकूवर", correct: false },
            { text: "मॉन्ट्रियल", correct: false },
            { text: "ओटावा", correct: true }
        ]),
    },
    {
        question: "फ्रांस की राजधानी क्या है?",
        answers: shuffle([
            { text: "बर्लिन", correct: false },
            { text: "रोम", correct: false },
            { text: "पेरिस", correct: true },
            { text: "मैड्रिड", correct: false }
        ]),
    },
    {
        question: "जापान की राजधानी क्या है?",
        answers: shuffle([
            { text: "ओसाका", correct: false },
            { text: "टोक्यो", correct: true },
            { text: "क्योटो", correct: false },
            { text: "नागोया", correct: false }
        ]),
    },
    {
        question: "भारत की राजधानी क्या है?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "कोलकाता", correct: false },
            { text: "नई दिल्ली", correct: true }
        ]),
    },
    {
        question: "चीन की राजधानी क्या है?",
        answers: shuffle([
            { text: "शंघाई", correct: false },
            { text: "बीजिंग", correct: true },
            { text: "हांगकांग", correct: false },
            { text: "गुआंगझोउ", correct: false }
        ]),
    },
    {
        question: "संयुक्त राज्य अमेरिका की राजधानी क्या है?",
        answers: shuffle([
            { text: "न्यूयॉर्क", correct: false },
            { text: "लॉस एंजेलिस", correct: false },
            { text: "वाशिंगटन डी.सी.", correct: true },
            { text: "शिकागो", correct: false }
        ]),
    },
    {
        question: "रूस की राजधानी क्या है?",
        answers: shuffle([
            { text: "सेंट पीटर्सबर्ग", correct: false },
            { text: "मास्को", correct: true },
            { text: "कीव", correct: false },
            { text: "व्लादिवोस्तोक", correct: false }
        ]),
    },
    {
        question: "दक्षिण अफ्रीका की राजधानी क्या है?",
        answers: shuffle([
            { text: "प्रिटोरिया", correct: true },
            { text: "जोहान्सबर्ग", correct: false },
            { text: "केप टाउन", correct: false },
            { text: "डरबन", correct: false }
        ]),
    },
    {
        question: "इटली की राजधानी क्या है?",
        answers: shuffle([
            { text: "फ्लोरेंस", correct: false },
            { text: "वेनिस", correct: false },
            { text: "रोम", correct: true },
            { text: "मिलान", correct: false }
        ]),
    },
    {
        question: "जर्मनी की राजधानी क्या है?",
        answers: shuffle([
            { text: "फ्रैंकफर्ट", correct: false },
            { text: "म्यूनिख", correct: false },
            { text: "बर्लिन", correct: true },
            { text: "हैम्बर्ग", correct: false }
        ]),
    },
    {
        question: "सऊदी अरब की राजधानी क्या है?",
        answers: shuffle([
            { text: "जेद्दाह", correct: false },
            { text: "मक्का", correct: false },
            { text: "रियाद", correct: true },
            { text: "मदीना", correct: false }
        ]),
    },
    {
        question: "अर्जेंटीना की राजधानी क्या है?",
        answers: shuffle([
            { text: "ब्यूनस आयर्स", correct: true },
            { text: "सैंटियागो", correct: false },
            { text: "लीमा", correct: false },
            { text: "बोगोटा", correct: false }
        ]),
    },
    {
        question: "स्पेन की राजधानी क्या है?",
        answers: shuffle([
            { text: "बार्सिलोना", correct: false },
            { text: "मैड्रिड", correct: true },
            { text: "सेविले", correct: false },
            { text: "वालेंसिया", correct: false }
        ]),
    },
    {
        question: "मेक्सिको की राजधानी क्या है?",
        answers: shuffle([
            { text: "कैनकन", correct: false },
            { text: "मेक्सिको सिटी", correct: true },
            { text: "ग्वाडलाजारा", correct: false },
            { text: "पुएब्ला", correct: false }
        ]),
    },
    {
        question: "दक्षिण कोरिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "बुसान", correct: false },
            { text: "इंचियोन", correct: false },
            { text: "सोल", correct: true },
            { text: "देगू", correct: false }
        ]),
    },
    {
        question: "वियतनाम की राजधानी क्या है?",
        answers: shuffle([
            { text: "हो ची मिन्ह सिटी", correct: false },
            { text: "हनोई", correct: true },
            { text: "डा नांग", correct: false },
            { text: "ह्यू", correct: false }
        ]),
    },
    {
        question: "थाईलैंड की राजधानी क्या है?",
        answers: shuffle([
            { text: "चियांग माई", correct: false },
            { text: "पटाया", correct: false },
            { text: "बैंकॉक", correct: true },
            { text: "फुकेट", correct: false }
        ]),
    },
    {
        question: "मलेशिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "जॉर्ज टाउन", correct: false },
            { text: "कुआलालंपुर", correct: true },
            { text: "इपोह", correct: false },
            { text: "जोहोर बाहरू", correct: false }
        ]),
    },
    {
        question: "पुर्तगाल की राजधानी क्या है?",
        answers: shuffle([
            { text: "पोर्टो", correct: false },
            { text: "लिस्बन", correct: true },
            { text: "फातिमा", correct: false },
            { text: "कोइम्ब्रा", correct: false }
        ]),
    },
    {
        question: "न्यूजीलैंड की राजधानी क्या है?",
        answers: shuffle([
            { text: "ऑकलैंड", correct: false },
            { text: "क्राइस्टचर्च", correct: false },
            { text: "वेलिंगटन", correct: true },
            { text: "क्वीन्सटाउन", correct: false }
        ]),
    },
    {
        question: "इंडोनेशिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "बाली", correct: false },
            { text: "जकार्ता", correct: true },
            { text: "सुराबाया", correct: false },
            { text: "मेडन", correct: false }
        ]),
    },
    {
        question: "पाकिस्तान की राजधानी क्या है?",
        answers: shuffle([
            { text: "कराची", correct: false },
            { text: "लाहौर", correct: false },
            { text: "इस्लामाबाद", correct: true },
            { text: "रावलपिंडी", correct: false }
        ]),
    },
    {
        question: "ईरान की राजधानी क्या है?",
        answers: shuffle([
            { text: "इस्फहान", correct: false },
            { text: "शिराज", correct: false },
            { text: "मशहद", correct: false },
            { text: "तेहरान", correct: true }
        ]),
    },
    {
        question: "इराक की राजधानी क्या है?",
        answers: shuffle([
            { text: "बसरा", correct: false },
            { text: "मोसुल", correct: false },
            { text: "बगदाद", correct: true },
            { text: "किरकुक", correct: false }
        ]),
    },
    {
        question: "फिलीपींस की राजधानी क्या है?",
        answers: shuffle([
            { text: "सेबू", correct: false },
            { text: "दावो", correct: false },
            { text: "मनीला", correct: true },
            { text: "क्वेजोन सिटी", correct: false }
        ]),
    },
    {
        question: "पोलैंड की राजधानी क्या है?",
        answers: shuffle([
            { text: "क्राको", correct: false },
            { text: "वारसॉ", correct: true },
            { text: "लॉड्ज़", correct: false },
            { text: "व्रोकला", correct: false }
        ]),
    },
    {
        question: "नाइजीरिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "लागोस", correct: false },
            { text: "कानो", correct: false },
            { text: "अबुजा", correct: true },
            { text: "इबादन", correct: false }
        ]),
    },
    {
        question: "ग्रीस की राजधानी क्या है?",
        answers: shuffle([
            { text: "थेसालोनिकी", correct: false },
            { text: "एथेंस", correct: true },
            { text: "पटरास", correct: false },
            { text: "हेराक्लिओन", correct: false }
        ]),
    },
    {
        question: "यूक्रेन की राजधानी क्या है?",
        answers: shuffle([
            { text: "खार्किव", correct: false },
            { text: "ओडेसा", correct: false },
            { text: "कीव", correct: true },
            { text: "लविव", correct: false }
        ]),
    },
    {
        question: "इथियोपिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "अदिस अबाबा", correct: true },
            { text: "गोनदर", correct: false },
            { text: "मकले", correct: false },
            { text: "दिरे दावा", correct: false }
        ]),
    },
    {
        question: "आयरलैंड की राजधानी क्या है?",
        answers: shuffle([
            { text: "कॉर्क", correct: false },
            { text: "गैलवे", correct: false },
            { text: "डबलिन", correct: true },
            { text: "लीमरिक", correct: false }
        ]),
    },
    {
        question: "स्विट्जरलैंड की राजधानी क्या है?",
        answers: shuffle([
            { text: "ज्यूरिख", correct: false },
            { text: "जेनेवा", correct: false },
            { text: "बर्न", correct: true },
            { text: "बेसल", correct: false }
        ]),
    },
    {
        question: "बेल्जियम की राजधानी क्या है?",
        answers: shuffle([
            { text: "एंटवर्प", correct: false },
            { text: "ब्रुसेल्स", correct: true },
            { text: "गेन्ट", correct: false },
            { text: "ब्रुग", correct: false }
        ]),
    },
    {
        question: "ऑस्ट्रिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "साल्ज़बर्ग", correct: false },
            { text: "ग्राज़", correct: false },
            { text: "वियना", correct: true },
            { text: "इंसब्रुक", correct: false }
        ]),
    },
    {
        question: "नीदरलैंड्स की राजधानी क्या है?",
        answers: shuffle([
            { text: "रॉटरडैम", correct: false },
            { text: "हेग", correct: false },
            { text: "एम्स्टर्डम", correct: true },
            { text: "उट्रेच", correct: false }
        ]),
    },
    {
        question: "पुर्तगाल की राजधानी क्या है?",
        answers: shuffle([
            { text: "पोर्टो", correct: false },
            { text: "लिस्बन", correct: true },
            { text: "फातिमा", correct: false },
            { text: "कोइम्ब्रा", correct: false }
        ]),
    },
    {
        question: "फिनलैंड की राजधानी क्या है?",
        answers: shuffle([
            { text: "एस्पू", correct: false },
            { text: "हेलसिंकी", correct: true },
            { text: "टाम्परे", correct: false },
            { text: "ओउलू", correct: false }
        ]),
    },
    {
        question: "डेनमार्क की राजधानी क्या है?",
        answers: shuffle([
            { text: "आरहूस", correct: false },
            { text: "ओडेंस", correct: false },
            { text: "कोपेनहेगन", correct: true },
            { text: "आलबोर्ग", correct: false }
        ]),
    },
    {
        question: "स्वीडन की राजधानी क्या है?",
        answers: shuffle([
            { text: "गोटेबोर्ग", correct: false },
            { text: "माल्मो", correct: false },
            { text: "स्टॉकहोम", correct: true },
            { text: "उप्पसाला", correct: false }
        ]),
    },
    {
        question: "दक्षिण कोरिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "बुसान", correct: false },
            { text: "सोल", correct: true },
            { text: "इंचियोन", correct: false },
            { text: "देगू", correct: false }
        ]),
    },
    {
        question: "हंगरी की राजधानी क्या है?",
        answers: shuffle([
            { text: "देब्रेसेन", correct: false },
            { text: "सेगेद", correct: false },
            { text: "बुडापेस्ट", correct: true },
            { text: "मिस्कॉलक", correct: false }
        ]),
    },
    {
        question: "चेक गणराज्य की राजधानी क्या है?",
        answers: shuffle([
            { text: "ब्रनो", correct: false },
            { text: "ओस्ट्रावा", correct: false },
            { text: "प्लाज़ेन", correct: false },
            { text: "प्राग", correct: true }
        ]),
    },
    {
        question: "स्लोवाकिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "कोसिसे", correct: false },
            { text: "प्रेसोव", correct: false },
            { text: "ब्रातिस्लावा", correct: true },
            { text: "ज़िलिना", correct: false }
        ]),
    },
    {
        question: "क्रोएशिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "स्प्लिट", correct: false },
            { text: "ज़ाग्रेब", correct: true },
            { text: "रिजेका", correct: false },
            { text: "दुब्रोवनिक", correct: false }
        ]),
    },
    {
        question: "सर्बिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "नोवी सैड", correct: false },
            { text: "निस", correct: false },
            { text: "बेलग्रेड", correct: true },
            { text: "क्रागुजेवैक", correct: false }
        ]),
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