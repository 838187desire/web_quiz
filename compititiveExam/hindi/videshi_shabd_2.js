const questions = [
    {
        topHeading: "विदेशी शब्द पर आधारित 25 बहुविकल्पीय प्रश्न part 2 (quiz_no.31)"
    },
    {
        question: "'सौगात' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: true },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सौगात' फारसी भाषा का शब्द है।"
    },
    {
        question: "'चाय' शब्द किस विदेशी भाषा से आया है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "चीनी", correct: true },
            { text: "जापानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाय' शब्द चीनी भाषा का है।"
    },
    {
        question: "'कुर्सी' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुर्सी' अरबी भाषा का शब्द है।"
    },
    {
        question: "'बावर्ची' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बावर्ची' फारसी भाषा का शब्द है।"
    },
    {
        question: "'सफ़ाई' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सफ़ाई' अरबी भाषा का शब्द है।"
    },
    {
        question: "'हफ्ता' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "पुर्तगाली", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हफ्ता' फारसी भाषा का शब्द है।"
    },
    {
        question: "'इनाम' शब्द किस विदेशी भाषा से आया है?",
        answers: shuffle([
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इनाम' अरबी भाषा का शब्द है।"
    },
    {
        question: "'अखबार' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अखबार' अरबी भाषा का शब्द है।"
    },
    {
        question: "'पैदल' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पैदल' फारसी भाषा का शब्द है।"
    },
    {
        question: "'कोशिश' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोशिश' फारसी भाषा का शब्द है।"
    },
    {
        question: "'सफाई' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सफाई' अरबी भाषा का शब्द है।"
    },
    {
        question: "'तम्बू' किस विदेशी भाषा का शब्द है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "फारसी", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तम्बू' एक तुर्की शब्द है।"
    },
    {
        question: "'पजामा' शब्द किस भाषा से संबंधित है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "अंग्रेजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पजामा' शब्द फारसी भाषा का है।"
    },
    {
        question: "'इमारत' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "पुर्तगाली", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इमारत' अरबी भाषा का शब्द है।"
    },
    {
        question: "'जमीन' शब्द किस विदेशी भाषा से आया है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जमीन' फारसी भाषा का शब्द है।"
    },
    {
        question: "'हकीम' शब्द किस भाषा से संबंधित है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हकीम' अरबी भाषा का शब्द है।"
    },
    {
        question: "'चश्मा' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चश्मा' फारसी भाषा का शब्द है।"
    },
    {
        question: "'रिश्ता' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रिश्ता' फारसी भाषा का शब्द है।"
    },
    {
        question: "'किताब' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किताब' अरबी भाषा का शब्द है।"
    },
    {
        question: "'दाम' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दाम' फारसी भाषा का शब्द है।"
    },
    {
        question: "'दवाखाना' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दवाखाना' फारसी भाषा का शब्द है।"
    },
    {
        question: "'दलाल' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दलाल' अरबी भाषा का शब्द है।"
    },
    {
        question: "'चाय' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "चीनी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "जापानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाय' शब्द चीनी भाषा का है।"
    },
    {
        question: "'जुर्माना' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जुर्माना' फारसी भाषा का शब्द है।"
    },
    {
        question: "'हादसा' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हादसा' अरबी भाषा का शब्द है।"
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