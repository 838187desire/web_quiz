const questions = [ 
    {
        topHeading: "विश्व के प्रमुख देशों की मुद्राओं पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 3  (quiz_no. 86)."
    },
    {
        question: "सिएरा लियोन की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: false },
            { text: "डालासी", correct: false },
            { text: "लिओन", correct: true },
            { text: "सेडी", correct: false }
        ]),
    },
    {
        question: "गैम्बिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डालासी", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "लिओन", correct: false },
            { text: "सेडी", correct: false }
        ]),
    },
    {
        question: "गिनी की मुद्रा क्या है?",
        answers: shuffle([
            { text: "सेडी", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "दिनार", correct: false },
            { text: "लिओन", correct: false }
        ]),
    },
    {
        question: "घाना की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: false },
            { text: "सेडी", correct: true },
            { text: "दिनार", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "आइवरी कोस्ट की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: true },
            { text: "दिनार", correct: false },
            { text: "सेडी", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "बुर्किना फासो की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दिनार", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "पाउंड", correct: false },
            { text: "मेटिकल", correct: false }
        ]),
    },
    {
        question: "नाइजर की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: true },
            { text: "मेटिकल", correct: false },
            { text: "पाउंड", correct: false },
            { text: "दिनार", correct: false }
        ]),
    },
    {
        question: "चाड की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: true },
            { text: "डॉलर", correct: false },
            { text: "पाउंड", correct: false },
            { text: "दीनार", correct: false }
        ]),
    },
    {
        question: "मध्य अफ्रीकी गणराज्य की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दिनार", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "क्वाचा", correct: false },
            { text: "लीरा", correct: false }
        ]),
    },
    {
        question: "कांगो गणराज्य की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "क्वाचा", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "गैबॉन की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: true },
            { text: "डॉलर", correct: false },
            { text: "यूरो", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "इक्वेटोरियल गिनी की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: true },
            { text: "यूरो", correct: false },
            { text: "डॉलर", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "केप वर्डे की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: false },
            { text: "एस्कुडो", correct: true },
            { text: "डॉलर", correct: false },
            { text: "लीरा", correct: false }
        ]),
    },
    {
        question: "अंगोला की मुद्रा क्या है?",
        answers: shuffle([
            { text: "क्वांज़ा", correct: true },
            { text: "मेटिकल", correct: false },
            { text: "क्वाचा", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "आइसलैंड की मुद्रा क्या है?",
        answers: shuffle([
            { text: "क्रोना", correct: true },
            { text: "क्रोन", correct: false },
            { text: "यूरो", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "साइप्रस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "यूरो", correct: true },
            { text: "लीरा", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "स्लोवाकिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "यूरो", correct: true },
            { text: "क्राउन", correct: false },
            { text: "फ्रैंक", correct: false },
            { text: "लीरा", correct: false }
        ]),
    },
    {
        question: "स्लोवेनिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "लीरा", correct: false },
            { text: "फ्रैंक", correct: false },
            { text: "यूरो", correct: true }
        ]),
    },
    {
        question: "एस्टोनिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false },
            { text: "यूरो", correct: true },
            { text: "क्रोन", correct: false }
        ]),
    },
    {
        question: "लातविया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रूबल", correct: false },
            { text: "लाट्स", correct: false },
            { text: "यूरो", correct: true },
            { text: "लीरा", correct: false }
        ]),
    },
    {
        question: "लिथुआनिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "लीरास", correct: false },
            { text: "यूरो", correct: true },
            { text: "रूबल", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "लेबनान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "रियाल", correct: false },
            { text: "पाउंड", correct: true },
            { text: "दिनार", correct: false }
        ]),
    },
    {
        question: "सीरिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दिनार", correct: false },
            { text: "पाउंड", correct: true },
            { text: "रियाल", correct: false },
            { text: "दिरहम", correct: false }
        ]),
    },
    {
        question: "मोज़ाम्बिक की मुद्रा क्या है?",
        answers: shuffle([
            { text: "मेटिकल", correct: true },
            { text: "क्वाचा", correct: false },
            { text: "क्वांज़ा", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "ज़ाम्बिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "क्वाचा", correct: true },
            { text: "मेटिकल", correct: false },
            { text: "क्वांज़ा", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "बोस्निया और हर्जेगोविना की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दिनार", correct: false },
            { text: "मार्क", correct: true },
            { text: "लेव", correct: false },
            { text: "यूरो", correct: false }
        ]),
    },
    {
        question: "कोसोवो की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दीनार", correct: false },
            { text: "यूरो", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "लीरा", correct: false }
        ]),
    },
    {
        question: "मोंटेनेग्रो की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दिनार", correct: false },
            { text: "यूरो", correct: true },
            { text: "लीरा", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "अंडोरा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पेसेटा", correct: false },
            { text: "फ्रैंक", correct: false },
            { text: "यूरो", correct: true },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "सैन मैरिनो की मुद्रा क्या है?",
        answers: shuffle([
            { text: "लीरा", correct: false },
            { text: "यूरो", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "वेटिकन सिटी की मुद्रा क्या है?",
        answers: shuffle([
            { text: "यूरो", correct: true },
            { text: "लीरा", correct: false },
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "लिचेंस्टीन की मुद्रा क्या है?",
        answers: shuffle([
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: true },
            { text: "डॉलर", correct: false },
            { text: "क्रोन", correct: false }
        ]),
    },
    {
        question: "पलाऊ की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "यूरो", correct: false },
            { text: "येन", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "माइक्रोनेशिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "पांगा", correct: false },
            { text: "ताला", correct: false },
            { text: "वातु", correct: false }
        ]),
    },
    {
        question: "मार्शल द्वीप की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "वातु", correct: false },
            { text: "येन", correct: false },
            { text: "पांगा", correct: false }
        ]),
    },
    {
        question: "किरिबाती की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "पांगा", correct: false },
            { text: "ताला", correct: false },
            { text: "वातु", correct: false }
        ]),
    },
    {
        question: "नौरू की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "येन", correct: false },
            { text: "यूरो", correct: false },
            { text: "पांगा", correct: false }
        ]),
    },
    {
        question: "समोआ की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "ताला", correct: true },
            { text: "पांगा", correct: false },
            { text: "वातु", correct: false }
        ]),
    },
    {
        question: "टोंगा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "ताला", correct: false },
            { text: "पांगा", correct: true },
            { text: "वातु", correct: false }
        ]),
    },
    {
        question: "फिजी की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "ताला", correct: false },
            { text: "पांगा", correct: false },
            { text: "वातु", correct: false }
        ]),
    },
    {
        question: "वानुआतु की मुद्रा क्या है?",
        answers: shuffle([
            { text: "वातु", correct: true },
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false },
            { text: "पांगा", correct: false }
        ]),
    },
    {
        question: "सोलोमन द्वीप की मुद्रा क्या है?",
        answers: shuffle([
            { text: "वातु", correct: false },
            { text: "डॉलर", correct: true },
            { text: "फ्रैंक", correct: false },
            { text: "पांगा", correct: false }
        ]),
    },
    {
        question: "पापुआ न्यू गिनी की मुद्रा क्या है?",
        answers: shuffle([
            { text: "किना", correct: true },
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false },
            { text: "पांगा", correct: false }
        ]),
    },
    {
        question: "न्यूजीलैंड की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "रुपया", correct: false },
            { text: "पाउंड", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "फ़ॉकलैंड द्वीप की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "पाउंड", correct: true },
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "जिब्राल्टर की मुद्रा क्या है?",
        answers: shuffle([
            { text: "यूरो", correct: false },
            { text: "डॉलर", correct: false },
            { text: "पाउंड", correct: true },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "जर्सी की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: true },
            { text: "यूरो", correct: false },
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "गुएर्नसे की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: true },
            { text: "यूरो", correct: false },
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "आइल ऑफ मैन की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: true },
            { text: "यूरो", correct: false },
            { text: "डॉलर", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "बारबाडोस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "यूरो", correct: false },
            { text: "पाउंड", correct: false },
            { text: "फ्रैंक", correct: false }
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