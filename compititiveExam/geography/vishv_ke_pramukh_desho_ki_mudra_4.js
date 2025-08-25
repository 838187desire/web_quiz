const questions = [ 
    {
        topHeading: "विश्व के प्रमुख देशों की मुद्राओं पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 4  (quiz_no. 87)."
    },
    {
        question: "अफ़ग़ानिस्तान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रुपया", correct: false },
            { text: "अफगानी", correct: true },
            { text: "रियाल", correct: false },
            { text: "दिनार", correct: false }
        ]),
    },
    {
        question: "ब्रुनेई की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रिंगित", correct: false },
            { text: "डॉलर", correct: true },
            { text: "रुपया", correct: false },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "अल साल्वाडोर की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पेसो", correct: false },
            { text: "यूरो", correct: false },
            { text: "कोलन", correct: false },
            { text: "डॉलर", correct: true }
        ]),
    },
    {
        question: "बेलीज की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "पेसो", correct: false },
            { text: "गुआरानी", correct: false },
            { text: "लेम्पिरा", correct: false }
        ]),
    },
    {
        question: "कोस्टा रिका की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "पेसो", correct: false },
            { text: "कोलन", correct: true },
            { text: "गुआरानी", correct: false }
        ]),
    },
    {
        question: "होंडुरास की मुद्रा क्या है?",
        answers: shuffle([
            { text: "कोर्डोबा", correct: false },
            { text: "डॉलर", correct: false },
            { text: "लेम्पिरा", correct: true },
            { text: "पेसो", correct: false }
        ]),
    },
    {
        question: "निकारागुआ की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "कोर्डोबा", correct: true },
            { text: "कोलन", correct: false },
            { text: "लेम्पिरा", correct: false }
        ]),
    },
    {
        question: "पनामा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पेसो", correct: false },
            { text: "डॉलर", correct: false },
            { text: "बाल्बोआ", correct: true },
            { text: "कोलन", correct: false }
        ]),
    },
    {
        question: "इक्वाडोर की मुद्रा क्या है?",
        answers: shuffle([
            { text: "सुक्रे", correct: false },
            { text: "डॉलर", correct: true },
            { text: "पेसो", correct: false },
            { text: "यूरो", correct: false }
        ]),
    },
    {
        question: "मालदीव की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रुपया", correct: false },
            { text: "रूफिया", correct: true },
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "मलावी की मुद्रा क्या है?",
        answers: shuffle([
            { text: "शिलिंग", correct: false },
            { text: "रैंड", correct: false },
            { text: "क्वाचा", correct: true },
            { text: "पुला", correct: false }
        ]),
    },
    {
        question: "इस्वातिनी (स्वाजीलैंड) की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रैंड", correct: false },
            { text: "क्वाचा", correct: false },
            { text: "लिलंगेनी", correct: true },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "जिम्बाब्वे की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रैंड", correct: false },
            { text: "पुला", correct: false },
            { text: "डॉलर", correct: true },
            { text: "क्वाचा", correct: false }
        ]),
    },
    {
        question: "बोत्सवाना की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "रैंड", correct: false },
            { text: "पुला", correct: true },
            { text: "क्वाचा", correct: false }
        ]),
    },
    {
        question: "नामीबिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रैंड", correct: false },
            { text: "डॉलर", correct: true },
            { text: "क्वाचा", correct: false },
            { text: "पुला", correct: false }
        ]),
    },
    {
        question: "मेडागास्कर की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: false },
            { text: "एरिअरी", correct: true },
            { text: "रुपया", correct: false },
            { text: "शिलिंग", correct: false }
        ]),
    },
    {
        question: "सेशेल्स की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: false },
            { text: "रुपया", correct: true },
            { text: "शिलिंग", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "कोमोरोस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दिनार", correct: false },
            { text: "शिलिंग", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "रुपया", correct: false }
        ]),
    },
    {
        question: "सोमालिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "शिलिंग", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "दिनार", correct: false }
        ]),
    },
    {
        question: "जिबूती की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: true },
            { text: "शिलिंग", correct: false },
            { text: "दिनार", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "इरिट्रिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "नाक्फा", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "बिर", correct: false },
            { text: "शिलिंग", correct: false }
        ]),
    },
    {
        question: "बुरुंडी की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: true },
            { text: "शिलिंग", correct: false },
            { text: "दिनार", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "रवांडा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "शिलिंग", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "दिनार", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "टोगो की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दिनार", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "सेडी", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "बेनिन की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: true },
            { text: "सेडी", correct: false },
            { text: "दिनार", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "हॉन्ग कॉन्ग की मुद्रा क्या है?",
        answers: shuffle([
            { text: "युआन", correct: false },
            { text: "डॉलर", correct: true },
            { text: "पाउंड", correct: false },
            { text: "येन", correct: false }
        ]),
    },
    {
        question: "दक्षिणी वेटिकन सिटी की मुद्रा क्या है?",
        answers: shuffle([
            { text: "यूरो", correct: true },
            { text: "लीरा", correct: false },
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "अरूबा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "फ्लोरिन", correct: true },
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "बोनेयर की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्लोरिन", correct: false },
            { text: "यूरो", correct: false },
            { text: "डॉलर", correct: true },
            { text: "पेसो", correct: false }
        ]),
    },
    {
        question: "साबा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "यूरो", correct: false },
            { text: "फ्लोरिन", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "सेंट यूस्टेशियस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "यूरो", correct: false },
            { text: "डॉलर", correct: true },
            { text: "फ्लोरिन", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "सोमालिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "शिलिंग", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "दिनार", correct: false }
        ]),
    },
    {
        question: "फ्रेंच पोलिनेशिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "डॉलर", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "न्यू कैलेडोनिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "यूरो", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "वालिस और फ़्यूचूना की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "यूरो", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "सेंट हेलेना की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: true },
            { text: "डॉलर", correct: false },
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "मोंटसेराट की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "यूरो", correct: false },
            { text: "डॉलर", correct: true },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "मेडागास्कर की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: false },
            { text: "एरिअरी", correct: true },
            { text: "रुपया", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "अंगुइला की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "पाउंड", correct: false },
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "बरमूडा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "यूरो", correct: false },
            { text: "डॉलर", correct: true },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "केमैन द्वीप की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "डॉलर", correct: true },
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "ब्रिटिश वर्जिन द्वीप की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "डॉलर", correct: true },
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "दक्षिण जॉर्जिया और दक्षिण सैंडविच द्वीप समूह की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: true },
            { text: "डॉलर", correct: false },
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "सैन मैरिनो की मुद्रा क्या है?",
        answers: shuffle([
            { text: "लीरा", correct: false },
            { text: "यूरो", correct: true },
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "मोनाको की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false },
            { text: "यूरो", correct: true },
            { text: "लीरा", correct: false }
        ]),
    },
    {
        question: "मेडागास्कर की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: false },
            { text: "एरिअरी", correct: true },
            { text: "रुपया", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "सेशेल्स की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रुपया", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "पाउंड", correct: false },
            { text: "शिलिंग", correct: false }
        ]),
    },
    {
        question: "कोमोरोस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: true },
            { text: "शिलिंग", correct: false },
            { text: "दिनार", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "सोमालिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "शिलिंग", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "दिनार", correct: false }
        ]),
    },
    {
        question: "टोगो की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: true },
            { text: "सेडी", correct: false },
            { text: "दिनार", correct: false },
            { text: "पाउंड", correct: false }
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