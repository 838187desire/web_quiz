const questions = [
    {
        topHeading: "तत्सम-तद्भव शब्द पर आधारित 26 बहुविकल्पीय प्रश्न part 3 (quiz_no.27)"
    },
    {
        question: "'प्रस्वेद' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पसीना", correct: true },
            { text: "स्वेद", correct: false },
            { text: "प्रस्वेद", correct: false },
            { text: "पस्सा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रस्वेद' तत्सम शब्द है, जिसका तद्भव रूप 'पसीना' होता है।"
    },
    {
        question: "'शृंगाल' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सियार", correct: true },
            { text: "श्रृंगार", correct: false },
            { text: "श्रृंगी", correct: false },
            { text: "सियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शृंगाल' तत्सम शब्द का तद्भव रूप 'सियार' है।"
    },
    {
        question: "'अकार्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अकाज", correct: true },
            { text: "अकारज", correct: false },
            { text: "अकार्य", correct: false },
            { text: "अकाजू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अकार्य' तत्सम शब्द का तद्भव रूप 'अकाज' है।"
    },
    {
        question: "'जम्बू' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "जामुन", correct: true },
            { text: "जामुन", correct: false },
            { text: "जम्बू", correct: false },
            { text: "जाम्बू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जम्बू' तत्सम शब्द है, जिसका तद्भव रूप 'जामुन' होता है।"
    },
    {
        question: "'पौत्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पोता", correct: true },
            { text: "पौत्र", correct: false },
            { text: "पोंत्र", correct: false },
            { text: "पोटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पौत्र' तत्सम शब्द का तद्भव रूप 'पोता' है।"
    },
    {
        question: "'कुक्कुर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कुत्ता", correct: true },
            { text: "कुक्कुर", correct: false },
            { text: "कुर", correct: false },
            { text: "कुक्कु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुक्कुर' तत्सम शब्द का तद्भव रूप 'कुत्ता' होता है।"
    },
    {
        question: "'घटिका' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "घड़ी", correct: true },
            { text: "घटिका", correct: false },
            { text: "घटि", correct: false },
            { text: "घट्टा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घटिका' तत्सम शब्द का तद्भव रूप 'घड़ी' है।"
    },
    {
        question: "'तडाग' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "तालाब", correct: true },
            { text: "तड़ाक", correct: false },
            { text: "तड़ाग", correct: false },
            { text: "तलाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तडाग' तत्सम शब्द का तद्भव रूप 'तालाब' होता है।"
    },
    {
        question: "'नयन' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नैन", correct: true },
            { text: "नयन", correct: false },
            { text: "नयनो", correct: false },
            { text: "नैनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नयन' तत्सम शब्द का तद्भव रूप 'नैन' है।"
    },
    {
        question: "'पोत्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पोता", correct: true },
            { text: "पोत", correct: false },
            { text: "पोंत", correct: false },
            { text: "पात्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पोत्र' तत्सम शब्द का तद्भव रूप 'पोता' होता है।"
    },
    {
        question: "'गोधूम' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गेहूँ", correct: true },
            { text: "गोधूम", correct: false },
            { text: "गोध", correct: false },
            { text: "गोधू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोधूम' तत्सम शब्द का तद्भव रूप 'गेहूँ' है।"
    },
    {
        question: "'कदली' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "केला", correct: true },
            { text: "कदली", correct: false },
            { text: "कदल", correct: false },
            { text: "केला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कदली' तत्सम शब्द का तद्भव रूप 'केला' है।"
    },
    {
        question: "'कूप' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कुआँ", correct: true },
            { text: "कुआ", correct: false },
            { text: "कूप", correct: false },
            { text: "कुपा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूप' तत्सम शब्द का तद्भव रूप 'कुआँ' होता है।"
    },
    {
        question: "'हस्त' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "हाथ", correct: true },
            { text: "हस्त", correct: false },
            { text: "हत्थ", correct: false },
            { text: "हत्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हस्त' तत्सम शब्द का तद्भव रूप 'हाथ' है।"
    },
    {
        question: "'नख' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नाखून", correct: true },
            { text: "नख", correct: false },
            { text: "नाखु", correct: false },
            { text: "नखा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नख' तत्सम शब्द का तद्भव रूप 'नाखून' है।"
    },
    {
        question: "'सत्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सच", correct: true },
            { text: "सत्य", correct: false },
            { text: "सत", correct: false },
            { text: "सत्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्य' तत्सम शब्द है, जिसका तद्भव रूप 'सच' है।"
    },
    {
        question: "'मृग' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "हिरण", correct: true },
            { text: "मृगा", correct: false },
            { text: "मृग", correct: false },
            { text: "हीरन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृग' तत्सम शब्द का तद्भव रूप 'हिरण' है।"
    },
    {
        question: "'कर्ण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कान", correct: true },
            { text: "कर्ण", correct: false },
            { text: "करन", correct: false },
            { text: "कारन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कर्ण' तत्सम शब्द का तद्भव रूप 'कान' है।"
    },
    {
        question: "'दुग्ध' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दूध", correct: true },
            { text: "दुध", correct: false },
            { text: "दूग्ध", correct: false },
            { text: "दुध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुग्ध' तत्सम शब्द है, जिसका तद्भव रूप 'दूध' होता है।"
    },
    {
        question: "'पाषाण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पाहन", correct: true },
            { text: "पाषाण", correct: false },
            { text: "पाषाण", correct: false },
            { text: "पाषान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाषाण' तत्सम शब्द का तद्भव रूप 'पाहन' होता है।"
    },
    {
        question: "'लौह' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "लोहा", correct: true },
            { text: "लोह", correct: false },
            { text: "लौहा", correct: false },
            { text: "लूहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लौह' तत्सम शब्द का तद्भव रूप 'लोहा' है।"
    },
    {
        question: "'कूप' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कुआँ", correct: true },
            { text: "कुआ", correct: false },
            { text: "कूप", correct: false },
            { text: "कुपी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूप' तत्सम शब्द का तद्भव रूप 'कुआँ' है।"
    },
    {
        question: "'नृत्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नाच", correct: true },
            { text: "निरत", correct: false },
            { text: "नृत्त", correct: false },
            { text: "नृत्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नृत्य' तत्सम शब्द का तद्भव रूप 'नाच' होता है।"
    },
    {
        question: "'श्वास' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "साँस", correct: true },
            { text: "श्वास", correct: false },
            { text: "स्वास", correct: false },
            { text: "ससा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्वास' तत्सम शब्द है, जिसका तद्भव रूप 'साँस' होता है।"
    },
    {
        question: "'अश्रु' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आँसू", correct: true },
            { text: "आंसू", correct: false },
            { text: "अंसु", correct: false },
            { text: "अश्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अश्रु' तत्सम शब्द है जिसका तद्भव रूप 'आँसू' होता है।"
    },
    {
        question: "'अंगुलि' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "उंगली", correct: true },
            { text: "अंगुली", correct: false },
            { text: "अँगुली", correct: false },
            { text: "अंगुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंगुलि' तत्सम शब्द का तद्भव रूप 'उंगली' है।"
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