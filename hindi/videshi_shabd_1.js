const questions = [
    {
        topHeading: "विदेशी शब्द पर आधारित 50 बहुविकल्पीय प्रश्न part 1 (quiz_no.30)"
    },
    {
        question: "'इलाज' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इलाज' शब्द अरबी भाषा का है, जिसका हिंदी में व्यापक रूप से उपयोग होता है।"
    },
    {
        question: "'कमरा' शब्द हिंदी में किस विदेशी भाषा से आया है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: true },
            { text: "तुर्की", correct: false },
            { text: "फ्रेंच", correct: false },
            { text: "अंग्रेजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमरा' पुर्तगाली भाषा का शब्द है जो हिंदी में प्रचलित हो गया है।"
    },
    {
        question: "'कैंची' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कैंची' एक तुर्की शब्द है, जो हिंदी भाषा में बहुत आम है।"
    },
    {
        question: "'रेल' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "अंग्रेजी", correct: true },
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रेल' (rail) शब्द अंग्रेजी भाषा से लिया गया है।"
    },
    {
        question: "'सरकार' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सरकार' फारसी भाषा का एक शब्द है।"
    },
    {
        question: "'बाल्टी' शब्द किस विदेशी भाषा से आया है?",
        answers: shuffle([
            { text: "अंग्रेजी", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाल्टी' पुर्तगाली शब्द 'balde' से आया है।"
    },
    {
        question: "'चाकू' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाकू' एक तुर्की शब्द है।"
    },
    {
        question: "'अदालत' शब्द किस भाषा से संबंधित है?",
        answers: shuffle([
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अदालत' अरबी भाषा का शब्द है, जिसका अर्थ है 'न्यायालय'।"
    },
    {
        question: "'कूपन' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "अंग्रेजी", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "फ्रेंच", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूपन' शब्द फ्रेंच भाषा से लिया गया है।"
    },
    {
        question: "'अलमारी' किस विदेशी भाषा से लिया गया है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: true },
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अलमारी' पुर्तगाली भाषा का शब्द है।"
    },
    {
        question: "'किताब' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किताब' शब्द अरबी भाषा का है।"
    },
    {
        question: "'इश्तहार' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "अंग्रेजी", correct: false },
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इश्तहार' शब्द फारसी भाषा से आया है।"
    },
    {
        question: "'स्कूल' शब्द किस विदेशी भाषा से आया है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "अंग्रेजी", correct: true },
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्कूल' (school) शब्द अंग्रेजी भाषा का है।"
    },
    {
        question: "'अफसोस' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अफसोस' एक फारसी शब्द है।"
    },
    {
        question: "'तौलिया' शब्द किस विदेशी भाषा से आया है?",
        answers: shuffle([
            { text: "अंग्रेजी", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तौलिया' पुर्तगाली भाषा का शब्द है।"
    },
    {
        question: "'आलू' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "तुर्की", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आलू' पुर्तगाली भाषा का शब्द है।"
    },
    {
        question: "'पैजामा' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "अंग्रेजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पैजामा' शब्द फारसी भाषा का है।"
    },
    {
        question: "'दरोगा' किस विदेशी भाषा का शब्द है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "फारसी", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दरोगा' एक तुर्की शब्द है।"
    },
    {
        question: "'गमला' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "अरबी", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गमला' पुर्तगाली भाषा का शब्द है।"
    },
    {
        question: "'माचिस' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "अरबी", correct: false },
            { text: "अंग्रेजी", correct: true },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'माचिस' (matches) शब्द अंग्रेजी से लिया गया है।"
    },
    {
        question: "'जवाब' शब्द किस विदेशी भाषा से आया है?",
        answers: shuffle([
            { text: "अंग्रेजी", correct: false },
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जवाब' अरबी भाषा का शब्द है।"
    },
    {
        question: "'मेम' शब्द किस भाषा से संबंधित है?",
        answers: shuffle([
            { text: "फ्रेंच", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "अंग्रेजी", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेम' (ma'am) अंग्रेजी भाषा से लिया गया है।"
    },
    {
        question: "'तारीख' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "पुर्तगाली", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तारीख' अरबी भाषा का शब्द है।"
    },
    {
        question: "'किशमिश' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किशमिश' फारसी भाषा का शब्द है।"
    },
    {
        question: "'रिक्शा' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "चीनी", correct: false },
            { text: "जापानी", correct: true },
            { text: "पुर्तगाली", correct: false },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रिक्शा' जापानी भाषा का शब्द है।"
    },
    {
        question: "'कारतूस' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "अंग्रेजी", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "फ्रेंच", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कारतूस' फ्रेंच भाषा का शब्द है."
    },
    {
        question: "'सब्जी' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सब्जी' फारसी भाषा का शब्द है।"
    },
    {
        question: "'पपीता' किस विदेशी भाषा का शब्द है?",
        answers: shuffle([
            { text: "अंग्रेजी", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "फ्रेंच", correct: false },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पपीता' पुर्तगाली भाषा का शब्द है।"
    },
    {
        question: "'बटन' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अंग्रेजी", correct: true },
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बटन' (button) अंग्रेजी भाषा का शब्द है।"
    },
    {
        question: "'सिनेमा' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "अरबी", correct: false },
            { text: "अंग्रेजी", correct: true },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सिनेमा' (cinema) अंग्रेजी भाषा से लिया गया है।"
    },
    {
        question: "'तश्तरी' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तश्तरी' फारसी भाषा का शब्द है।"
    },
    {
        question: "'कमर' शब्द किस विदेशी भाषा से आया है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमर' फारसी भाषा का शब्द है।"
    },
    {
        question: "'शराब' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शराब' अरबी भाषा का शब्द है."
    },
    {
        question: "'गार्ड' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "अंग्रेजी", correct: true },
            { text: "फ्रेंच", correct: false },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गार्ड' (guard) शब्द अंग्रेजी से लिया गया है।"
    },
    {
        question: "'मज़दूर' शब्द किस विदेशी भाषा से आया है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मज़दूर' फारसी भाषा का शब्द है।"
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
        question: "'पैंट' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "अंग्रेजी", correct: true },
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पैंट' (pant) अंग्रेजी भाषा का शब्द है।"
    },
    {
        question: "'बाजार' शब्द किस विदेशी भाषा से आया है?",
        answers: shuffle([
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाजार' फारसी भाषा का शब्द है।"
    },
    {
        question: "'दुकान' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "अंग्रेजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुकान' फारसी भाषा का शब्द है।"
    },
    {
        question: "'डॉक्टर' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "अंग्रेजी", correct: true },
            { text: "पुर्तगाली", correct: false },
            { text: "फ्रेंच", correct: false },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डॉक्टर' (doctor) अंग्रेजी भाषा का शब्द है।"
    },
    {
        question: "'कारतूस' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "अंग्रेजी", correct: false },
            { text: "फ्रेंच", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कारतूस' शब्द फ्रेंच भाषा से लिया गया है।"
    },
    {
        question: "'किशमिश' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किशमिश' एक फारसी शब्द है।"
    },
    {
        question: "'अखबार' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अखबार' अरबी भाषा का शब्द है।"
    },
    {
        question: "'सिनेमा' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "अंग्रेजी", correct: true },
            { text: "फ्रेंच", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सिनेमा' (cinema) अंग्रेजी भाषा का शब्द है।"
    },
    {
        question: "'मुहब्बत' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुहब्बत' अरबी भाषा का शब्द है।"
    },
    {
        question: "'फकीर' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फकीर' अरबी भाषा का शब्द है।"
    },
    {
        question: "'दफ्तर' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "अरबी", correct: true },
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दफ्तर' अरबी भाषा का शब्द है।"
    },
    {
        question: "'गुलाब' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "फ्रेंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुलाब' फारसी भाषा का शब्द है।"
    },
    {
        question: "'कानून' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: true },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कानून' अरबी भाषा का शब्द है।"
    },
    {
        question: "'अमीर' शब्द किस भाषा से संबंधित है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमीर' अरबी भाषा का शब्द है।"
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