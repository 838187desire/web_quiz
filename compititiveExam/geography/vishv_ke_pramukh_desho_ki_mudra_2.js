const questions = [ 
    {
        topHeading: "विश्व के प्रमुख देशों की मुद्राओं पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 85)."
    },
    {
        question: "इटली की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "लीरा", correct: false },
            { text: "यूरो", correct: true },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "स्पेन की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पेसेटा", correct: false },
            { text: "यूरो", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "ग्रीस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "ड्रेकमा", correct: false },
            { text: "यूरो", correct: true },
            { text: "लीरा", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "पुर्तगाल की मुद्रा क्या है?",
        answers: shuffle([
            { text: "एस्कुडो", correct: false },
            { text: "यूरो", correct: true },
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "स्विट्ज़रलैंड की मुद्रा क्या है?",
        answers: shuffle([
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "पाउंड", correct: false },
            { text: "क्रोन", correct: false }
        ]),
    },
    {
        question: "हंगरी की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फोरिंट", correct: true },
            { text: "ज़्लॉटी", correct: false },
            { text: "कोरुन", correct: false },
            { text: "यूरो", correct: false }
        ]),
    },
    {
        question: "पोलैंड की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रूबल", correct: false },
            { text: "ज़्लॉटी", correct: true },
            { text: "यूरो", correct: false },
            { text: "फोरिंट", correct: false }
        ]),
    },
    {
        question: "चेक गणराज्य की मुद्रा क्या है?",
        answers: shuffle([
            { text: "यूरो", correct: false },
            { text: "कोरुना", correct: true },
            { text: "फोरिंट", correct: false },
            { text: "ज़्लॉटी", correct: false }
        ]),
    },
    {
        question: "आयरलैंड की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "यूरो", correct: true },
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "ऑस्ट्रिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "शिलिंग", correct: false },
            { text: "यूरो", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "लीरा", correct: false }
        ]),
    },
    {
        question: "बेलारूस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रूबल", correct: true },
            { text: "ह्रीवनिया", correct: false },
            { text: "लेव", correct: false },
            { text: "ज़्लॉटी", correct: false }
        ]),
    },
    {
        question: "यूक्रेन की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रूबल", correct: false },
            { text: "ह्रीवनिया", correct: true },
            { text: "लेव", correct: false },
            { text: "ल्यू", correct: false }
        ]),
    },
    {
        question: "रोमानिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "ल्यू", correct: true },
            { text: "लेव", correct: false },
            { text: "फोरिंट", correct: false },
            { text: "यूरो", correct: false }
        ]),
    },
    {
        question: "बुल्गारिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "ल्यू", correct: false },
            { text: "लेव", correct: true },
            { text: "दीनार", correct: false },
            { text: "यूरो", correct: false }
        ]),
    },
    {
        question: "सर्बिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दिनार", correct: true },
            { text: "लीरा", correct: false },
            { text: "फ्रैंक", correct: false },
            { text: "यूरो", correct: false }
        ]),
    },
    {
        question: "अल्बानिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "लेक", correct: true },
            { text: "लेव", correct: false },
            { text: "दीनार", correct: false },
            { text: "लारी", correct: false }
        ]),
    },
    {
        question: "जॉर्जिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "लारी", correct: true },
            { text: "द्राम", correct: false },
            { text: "मनात", correct: false },
            { text: "सोम", correct: false }
        ]),
    },
    {
        question: "आर्मेनिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "लारी", correct: false },
            { text: "द्राम", correct: true },
            { text: "मनात", correct: false },
            { text: "सोम", correct: false }
        ]),
    },
    {
        question: "अज़रबैजान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "लारी", correct: false },
            { text: "द्राम", correct: false },
            { text: "मनात", correct: true },
            { text: "तेंगे", correct: false }
        ]),
    },
    {
        question: "कजाकिस्तान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रूबल", correct: false },
            { text: "तेंगे", correct: true },
            { text: "सोम", correct: false },
            { text: "दीनार", correct: false }
        ]),
    },
    {
        question: "उज़्बेकिस्तान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "सोम", correct: true },
            { text: "तेंगे", correct: false },
            { text: "सोमोनी", correct: false },
            { text: "मनात", correct: false }
        ]),
    },
    {
        question: "ताजिकिस्तान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "सोम", correct: false },
            { text: "सोमोनी", correct: true },
            { text: "मनात", correct: false },
            { text: "तेंगे", correct: false }
        ]),
    },
    {
        question: "तुर्कमेनिस्तान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "मनात", correct: true },
            { text: "सोमोनी", correct: false },
            { text: "सोम", correct: false },
            { text: "तेंगे", correct: false }
        ]),
    },
    {
        question: "किर्गिस्तान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "मनात", correct: false },
            { text: "सोम", correct: true },
            { text: "तेंगे", correct: false },
            { text: "सोमोनी", correct: false }
        ]),
    },
    {
        question: "मॉरीशस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "रुपया", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "क्यूबा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "पेसो", correct: true },
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "हैती की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "पेसो", correct: false },
            { text: "गौर्ड", correct: true },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "जमैका की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "डॉलर", correct: true },
            { text: "पेसो", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "डोमिनिकन गणराज्य की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पेसो", correct: true },
            { text: "डॉलर", correct: false },
            { text: "लीरा", correct: false },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "गुयाना की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "पेसो", correct: false },
            { text: "पाउंड", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "सूरीनाम की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "फ्लोरीन", correct: false },
            { text: "पेसो", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "वेनेजुएला की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पेसो", correct: false },
            { text: "यूरो", correct: false },
            { text: "बोलिवर", correct: true },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "कोलंबिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पेसो", correct: true },
            { text: "बोलिवर", correct: false },
            { text: "डॉलर", correct: false },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "पेरू की मुद्रा क्या है?",
        answers: shuffle([
            { text: "लीरा", correct: false },
            { text: "सोल", correct: true },
            { text: "पेसो", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "चिली की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "यूरो", correct: false },
            { text: "पेसो", correct: true },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "बोलीविया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पेसो", correct: false },
            { text: "यूरो", correct: false },
            { text: "बोलिवियानो", correct: true },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "पराग्वे की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पेसो", correct: false },
            { text: "डॉलर", correct: false },
            { text: "गुआरानी", correct: true },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "उरुग्वे की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पेसो", correct: true },
            { text: "बोलिवियानो", correct: false },
            { text: "डॉलर", correct: false },
            { text: "गुआरानी", correct: false }
        ]),
    },
    {
        question: "मंगोलिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "तुगरिक", correct: true },
            { text: "पाटाका", correct: false },
            { text: "रूबल", correct: false },
            { text: "युआन", correct: false }
        ]),
    },
    {
        question: "लाओस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "बाट", correct: false },
            { text: "किप", correct: true },
            { text: "रियाल", correct: false },
            { text: "डोंग", correct: false }
        ]),
    },
    {
        question: "म्यांमार की मुद्रा क्या है?",
        answers: shuffle([
            { text: "बाह", correct: false },
            { text: "क्यात", correct: true },
            { text: "किप", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "मकाऊ की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पटाका", correct: true },
            { text: "डॉलर", correct: false },
            { text: "युआन", correct: false },
            { text: "रिंगित", correct: false }
        ]),
    },
    {
        question: "माल्डोवा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "ल्यू", correct: true },
            { text: "लेव", correct: false },
            { text: "फोरिंट", correct: false },
            { text: "रूबल", correct: false }
        ]),
    },
    {
        question: "लक्ज़मबर्ग की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: false },
            { text: "यूरो", correct: true },
            { text: "पाउंड", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "मोनाको की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: false },
            { text: "लीरा", correct: false },
            { text: "डॉलर", correct: false },
            { text: "यूरो", correct: true }
        ]),
    },
    {
        question: "माल्टा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "लीरा", correct: false },
            { text: "पाउंड", correct: false },
            { text: "डॉलर", correct: false },
            { text: "यूरो", correct: true }
        ]),
    },
    {
        question: "लीबिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दीनार", correct: true },
            { text: "पाउंड", correct: false },
            { text: "रियाल", correct: false },
            { text: "दिरहम", correct: false }
        ]),
    },
    {
        question: "सूडान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: true },
            { text: "दीनार", correct: false },
            { text: "शिलिंग", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "युगांडा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "फ्रैंक", correct: false },
            { text: "शिलिंग", correct: true },
            { text: "रैंड", correct: false }
        ]),
    },
    {
        question: "तंजानिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "शिलिंग", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "रैंड", correct: false }
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