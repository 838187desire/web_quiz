const questions = [ 
    {
        topHeading: "विश्व के प्रमुख देशों की मुद्राओं पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 84)."
    },
    {
        question: "भारत की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "यूरो", correct: false },
            { text: "रुपया", correct: true },
            { text: "येन", correct: false }
        ]),
    },
    {
        question: "जापान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "युआन", correct: false },
            { text: "येन", correct: true },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "संयुक्त राज्य अमेरिका की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "यूरो", correct: false },
            { text: "रूबल", correct: false },
            { text: "पेसो", correct: false }
        ]),
    },
    {
        question: "यूनाइटेड किंगडम की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "पाउंड स्टर्लिंग", correct: true },
            { text: "यूरो", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "रूस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रूबल", correct: true },
            { text: "युआन", correct: false },
            { text: "येन", correct: false },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "चीन की मुद्रा क्या है?",
        answers: shuffle([
            { text: "येन", correct: false },
            { text: "डॉलर", correct: false },
            { text: "युआन", correct: true },
            { text: "टाका", correct: false }
        ]),
    },
    {
        question: "जर्मनी की मुद्रा क्या है?",
        answers: shuffle([
            { text: "मार्क", correct: false },
            { text: "डॉलर", correct: false },
            { text: "यूरो", correct: true },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "फ्रांस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: false },
            { text: "यूरो", correct: true },
            { text: "पाउंड", correct: false },
            { text: "लीरा", correct: false }
        ]),
    },
    {
        question: "कनाडा की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "यूरो", correct: false },
            { text: "येन", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "ऑस्ट्रेलिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: true },
            { text: "पाउंड", correct: false },
            { text: "फ्रैंक", correct: false },
            { text: "रुपया", correct: false }
        ]),
    },
    {
        question: "मेक्सिको की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "पेसो", correct: true },
            { text: "रियाल", correct: false },
            { text: "यूरो", correct: false }
        ]),
    },
    {
        question: "ब्राजील की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "पेसो", correct: false },
            { text: "रियाल", correct: true },
            { text: "यूरो", correct: false }
        ]),
    },
    {
        question: "दक्षिण अफ्रीका की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रैंड", correct: true },
            { text: "डॉलर", correct: false },
            { text: "पाउंड", correct: false },
            { text: "शिलिंग", correct: false }
        ]),
    },
    {
        question: "मिस्र की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "पाउंड", correct: true },
            { text: "दिनार", correct: false },
            { text: "यूरो", correct: false }
        ]),
    },
    {
        question: "सऊदी अरब की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रियाल", correct: true },
            { text: "दिनार", correct: false },
            { text: "दिरहम", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "अर्जेंटीना की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "यूरो", correct: false },
            { text: "पेसो", correct: true },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "दक्षिण कोरिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "येन", correct: false },
            { text: "वॉन", correct: true },
            { text: "युआन", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "तुर्की की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "लीरा", correct: true },
            { text: "दिनार", correct: false },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "पाकिस्तान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "दिनार", correct: false },
            { text: "रुपया", correct: true },
            { text: "टका", correct: false }
        ]),
    },
    {
        question: "बांग्लादेश की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रुपया", correct: false },
            { text: "टका", correct: true },
            { text: "दिनार", correct: false },
            { text: "युआन", correct: false }
        ]),
    },
    {
        question: "श्रीलंका की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रुपया", correct: true },
            { text: "टका", correct: false },
            { text: "येन", correct: false },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "नेपाल की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "रुपया", correct: true },
            { text: "टका", correct: false },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "भूटान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रुपया", correct: false },
            { text: "न्गुलट्रम", correct: true },
            { text: "डॉलर", correct: false },
            { text: "येन", correct: false }
        ]),
    },
    {
        question: "थाईलैंड की मुद्रा क्या है?",
        answers: shuffle([
            { text: "येन", correct: false },
            { text: "युआन", correct: false },
            { text: "बाट", correct: true },
            { text: "डॉलर", correct: false }
        ]),
    },
    {
        question: "सिंगापुर की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रुपया", correct: false },
            { text: "डॉलर", correct: true },
            { text: "पाउंड", correct: false },
            { text: "येन", correct: false }
        ]),
    },
    {
        question: "मलेशिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "रुपया", correct: false },
            { text: "रिंगित", correct: true },
            { text: "बाट", correct: false }
        ]),
    },
    {
        question: "इंडोनेशिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "रुपया", correct: false },
            { text: "रुपिया", correct: true },
            { text: "पेसो", correct: false }
        ]),
    },
    {
        question: "वियतनाम की मुद्रा क्या है?",
        answers: shuffle([
            { text: "युआन", correct: false },
            { text: "डोंग", correct: true },
            { text: "येन", correct: false },
            { text: "लीरा", correct: false }
        ]),
    },
    {
        question: "फिलीपींस की मुद्रा क्या है?",
        answers: shuffle([
            { text: "डॉलर", correct: false },
            { text: "पेसो", correct: true },
            { text: "रियाल", correct: false },
            { text: "रुपया", correct: false }
        ]),
    },
    {
        question: "कंबोडिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रियल", correct: true },
            { text: "डोंग", correct: false },
            { text: "बाट", correct: false },
            { text: "टाका", correct: false }
        ]),
    },
    {
        question: "इराक की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रियाल", correct: false },
            { text: "दिरहम", correct: false },
            { text: "दिनार", correct: true },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "ईरान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दीनार", correct: false },
            { text: "रियाल", correct: true },
            { text: "पाउंड", correct: false },
            { text: "लीरा", correct: false }
        ]),
    },
    {
        question: "इज़राइल की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "यूरो", correct: false },
            { text: "शेकेल", correct: true },
            { text: "दीनार", correct: false }
        ]),
    },
    {
        question: "जॉर्डन की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रियाल", correct: false },
            { text: "पाउंड", correct: false },
            { text: "दिनार", correct: true },
            { text: "दिरहम", correct: false }
        ]),
    },
    {
        question: "कुवैत की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रियाल", correct: false },
            { text: "दीनार", correct: true },
            { text: "दिरहम", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "ओमान की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रियाल", correct: true },
            { text: "दीनार", correct: false },
            { text: "दिरहम", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "कतर की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दिनार", correct: false },
            { text: "रियाल", correct: true },
            { text: "पाउंड", correct: false },
            { text: "दिरहम", correct: false }
        ]),
    },
    {
        question: "संयुक्त अरब अमीरात की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रियाल", correct: false },
            { text: "दीनार", correct: false },
            { text: "दिरहम", correct: true },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "यमन की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रियाल", correct: true },
            { text: "पाउंड", correct: false },
            { text: "दिनार", correct: false },
            { text: "दिरहम", correct: false }
        ]),
    },
    {
        question: "इथियोपिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "शिलिंग", correct: false },
            { text: "बिर", correct: true },
            { text: "नायरा", correct: false },
            { text: "रैंड", correct: false }
        ]),
    },
    {
        question: "केन्या की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रैंड", correct: false },
            { text: "शिलिंग", correct: true },
            { text: "नायरा", correct: false },
            { text: "दिनार", correct: false }
        ]),
    },
    {
        question: "नाइजीरिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "रैंड", correct: false },
            { text: "शिलिंग", correct: false },
            { text: "नायरा", correct: true },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "अल्जीरिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दिनार", correct: true },
            { text: "दिरहम", correct: false },
            { text: "पाउंड", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "मोरक्को की मुद्रा क्या है?",
        answers: shuffle([
            { text: "दिनार", correct: false },
            { text: "दिरहम", correct: true },
            { text: "पाउंड", correct: false },
            { text: "फ्रैंक", correct: false }
        ]),
    },
    {
        question: "ट्यूनीशिया की मुद्रा क्या है?",
        answers: shuffle([
            { text: "पाउंड", correct: false },
            { text: "दिनार", correct: true },
            { text: "दिरहम", correct: false },
            { text: "रियाल", correct: false }
        ]),
    },
    {
        question: "स्वीडन की मुद्रा क्या है?",
        answers: shuffle([
            { text: "क्रोना", correct: true },
            { text: "क्रोन", correct: false },
            { text: "यूरो", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "डेनमार्क की मुद्रा क्या है?",
        answers: shuffle([
            { text: "क्रोना", correct: false },
            { text: "क्रोन", correct: true },
            { text: "यूरो", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "नॉर्वे की मुद्रा क्या है?",
        answers: shuffle([
            { text: "क्रोना", correct: false },
            { text: "क्रोन", correct: true },
            { text: "यूरो", correct: false },
            { text: "पाउंड", correct: false }
        ]),
    },
    {
        question: "फिनलैंड की मुद्रा क्या है?",
        answers: shuffle([
            { text: "मार्क", correct: false },
            { text: "फ्रैंक", correct: false },
            { text: "पाउंड", correct: false },
            { text: "यूरो", correct: true }
        ]),
    },
    {
        question: "बेल्जियम की मुद्रा क्या है?",
        answers: shuffle([
            { text: "फ्रैंक", correct: false },
            { text: "पाउंड", correct: false },
            { text: "डॉलर", correct: false },
            { text: "यूरो", correct: true }
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