const questions = [
    {
        topHeading: "तत्सम-तद्भव शब्द पर आधारित 50 बहुविकल्पीय प्रश्न part 2 (quiz_no.26)"
    },
    {
        question: "'सप्तशती' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सतसई", correct: true },
            { text: "सातों", correct: false },
            { text: "सप्तसई", correct: false },
            { text: "सताई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्तशती' एक तत्सम शब्द है जिसका तद्भव रूप 'सतसई' होता है।"
    },
    {
        question: "'संध्या' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "साँझ", correct: true },
            { text: "संध्या", correct: false },
            { text: "संध", correct: false },
            { text: "सांध्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संध्या' तत्सम शब्द है, जिसका तद्भव रूप 'साँझ' है।"
    },
    {
        question: "'शाक' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "साग", correct: true },
            { text: "साख", correct: false },
            { text: "सखा", correct: false },
            { text: "शाकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शाक' तत्सम शब्द है जिसका तद्भव रूप 'साग' होता है।"
    },
    {
        question: "'सूर्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सूरज", correct: true },
            { text: "सुरज", correct: false },
            { text: "सुर्य", correct: false },
            { text: "सुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूर्य' तत्सम शब्द है जो 'सूरज' के रूप में हिंदी में विकसित हुआ है।"
    },
    {
        question: "'कंटक' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "काँटा", correct: true },
            { text: "कंटक", correct: false },
            { text: "कांटा", correct: false },
            { text: "कंतक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कंटक' तत्सम शब्द का तद्भव रूप 'काँटा' है।"
    },
    {
        question: "'गृह' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "घर", correct: true },
            { text: "गृह", correct: false },
            { text: "गृही", correct: false },
            { text: "घाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गृह' तत्सम शब्द है, जिसका तद्भव रूप 'घर' है।"
    },
    {
        question: "'कूप' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कुआँ", correct: true },
            { text: "कूप", correct: false },
            { text: "कुपा", correct: false },
            { text: "कूपि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूप' तत्सम शब्द है, जिसका तद्भव रूप 'कुआँ' होता है।"
    },
    {
        question: "'गोमय' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गोबर", correct: true },
            { text: "गोमूत्र", correct: false },
            { text: "गाय", correct: false },
            { text: "गोया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोमय' तत्सम शब्द का तद्भव रूप 'गोबर' है।"
    },
    {
        question: "'रात्रि' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "रात", correct: true },
            { text: "रति", correct: false },
            { text: "रात", correct: false },
            { text: "रात्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रात्रि' तत्सम शब्द है, जिसका तद्भव रूप 'रात' है।"
    },
    {
        question: "'पर्ण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पत्ता", correct: true },
            { text: "पन्ना", correct: false },
            { text: "परा", correct: false },
            { text: "पर्णा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पर्ण' तत्सम शब्द है जिसका तद्भव रूप 'पत्ता' होता है।"
    },
    {
        question: "'निद्रा' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नींद", correct: true },
            { text: "निंद", correct: false },
            { text: "निन्द्रा", correct: false },
            { text: "निद्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निद्रा' तत्सम शब्द का तद्भव रूप 'नींद' है।"
    },
    {
        question: "'तैल' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "तेल", correct: true },
            { text: "तैल", correct: false },
            { text: "तैला", correct: false },
            { text: "तेला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तैल' तत्सम शब्द है, जिसका तद्भव रूप 'तेल' होता है।"
    },
    {
        question: "'मुख' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "मुँह", correct: true },
            { text: "मुख", correct: false },
            { text: "मुखा", correct: false },
            { text: "मुह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुख' तत्सम शब्द का तद्भव रूप 'मुँह' है।"
    },
    {
        question: "'चूर्ण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "चूरन", correct: true },
            { text: "चून", correct: false },
            { text: "चूर्ण", correct: false },
            { text: "चुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चूर्ण' तत्सम शब्द का तद्भव रूप 'चूरन' होता है।"
    },
    {
        question: "'काष्ठ' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "काठ", correct: true },
            { text: "काष्ट", correct: false },
            { text: "कठ", correct: false },
            { text: "काष्टा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'काष्ठ' तत्सम शब्द है जिसका तद्भव रूप 'काठ' है।"
    },
    {
        question: "'शृंग' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सींग", correct: true },
            { text: "श्रृंग", correct: false },
            { text: "सेंग", correct: false },
            { text: "सोंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शृंग' तत्सम शब्द का तद्भव रूप 'सींग' होता है।"
    },
    {
        question: "'तैल' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "तेल", correct: true },
            { text: "तैल", correct: false },
            { text: "तैला", correct: false },
            { text: "तेला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तैल' तत्सम शब्द है, जिसका तद्भव रूप 'तेल' होता है।"
    },
    {
        question: "'कूप' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कुआँ", correct: true },
            { text: "कूप", correct: false },
            { text: "कुपा", correct: false },
            { text: "कूपि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूप' तत्सम शब्द है, जिसका तद्भव रूप 'कुआँ' होता है।"
    },
    {
        question: "'सर्प' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "साँप", correct: true },
            { text: "सर्प", correct: false },
            { text: "सरप", correct: false },
            { text: "सँप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्प' तत्सम शब्द है, जिसका तद्भव रूप 'साँप' होता है।"
    },
    {
        question: "'भिक्षु' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "भिखारी", correct: true },
            { text: "भिक्षा", correct: false },
            { text: "भिखु", correct: false },
            { text: "भीख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भिक्षु' तत्सम शब्द का तद्भव रूप 'भिखारी' होता है।"
    },
    {
        question: "'यज्ञोपवीत' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "जनेऊ", correct: true },
            { text: "यज्ञ", correct: false },
            { text: "उपवीत", correct: false },
            { text: "जनेऊ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यज्ञोपवीत' तत्सम शब्द है, जिसका तद्भव रूप 'जनेऊ' है।"
    },
    {
        question: "'शृगाल' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सियार", correct: true },
            { text: "श्रृगाल", correct: false },
            { text: "श्रृंगी", correct: false },
            { text: "स्यार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शृगाल' तत्सम शब्द का तद्भव रूप 'सियार' होता है।"
    },
    {
        question: "'ग्राम' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गाँव", correct: true },
            { text: "ग्राम", correct: false },
            { text: "ग्राम्य", correct: false },
            { text: "ग्रांम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्राम' तत्सम शब्द है, जिसका तद्भव रूप 'गाँव' है।"
    },
    {
        question: "'क्षीर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "खीर", correct: true },
            { text: "क्षीर", correct: false },
            { text: "खुर", correct: false },
            { text: "खीरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षीर' तत्सम शब्द है, जिसका तद्भव रूप 'खीर' होता है।"
    },
    {
        question: "'कार्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "काम", correct: true },
            { text: "कार्य", correct: false },
            { text: "करम", correct: false },
            { text: "कारज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कार्य' तत्सम शब्द है, जिसका तद्भव रूप 'काम' होता है।"
    },
    {
        question: "'पट्टिका' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पट्टी", correct: true },
            { text: "पटिया", correct: false },
            { text: "पटका", correct: false },
            { text: "पट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पट्टिका' तत्सम शब्द है, जिसका तद्भव रूप 'पट्टी' होता है।"
    },
    {
        question: "'मृत्तिका' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "मिट्टी", correct: true },
            { text: "मटका", correct: false },
            { text: "मृत", correct: false },
            { text: "माटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृत्तिका' तत्सम शब्द का तद्भव रूप 'मिट्टी' है।"
    },
    {
        question: "'कदली' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "केला", correct: true },
            { text: "कदली", correct: false },
            { text: "कदल", correct: false },
            { text: "केले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कदली' तत्सम शब्द है, जिसका तद्भव रूप 'केला' होता है।"
    },
    {
        question: "'वधू' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "बहू", correct: true },
            { text: "वधू", correct: false },
            { text: "बहु", correct: false },
            { text: "वधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वधू' तत्सम शब्द का तद्भव रूप 'बहू' है।"
    },
    {
        question: "'कपोत' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कबूतर", correct: true },
            { text: "कपोत", correct: false },
            { text: "कोपोत", correct: false },
            { text: "कबूतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कपोत' तत्सम शब्द का तद्भव रूप 'कबूतर' है।"
    },
    {
        question: "'पाद' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पाँव", correct: true },
            { text: "पैर", correct: false },
            { text: "पाद", correct: false },
            { text: "पदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाद' तत्सम शब्द है, जिसका तद्भव रूप 'पाँव' होता है।"
    },
    {
        question: "'अट्टालिका' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अटारी", correct: true },
            { text: "अट्टाल", correct: false },
            { text: "अटाली", correct: false },
            { text: "अट्टला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अट्टालिका' तत्सम शब्द का तद्भव रूप 'अटारी' है।"
    },
    {
        question: "'शृंगार' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सिंगार", correct: true },
            { text: "श्रृंगार", correct: false },
            { text: "श्रृंगी", correct: false },
            { text: "श्रृंगार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शृंगार' तत्सम शब्द है, जिसका तद्भव रूप 'सिंगार' होता है।"
    },
    {
        question: "'अग्नि' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आग", correct: true },
            { text: "अगनि", correct: false },
            { text: "अग्न", correct: false },
            { text: "आगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्नि' तत्सम शब्द है, जिसका तद्भव रूप 'आग' है।"
    },
    {
        question: "'अष्ट' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आठ", correct: true },
            { text: "अष्टा", correct: false },
            { text: "अस्त", correct: false },
            { text: "अट्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अष्ट' तत्सम शब्द का तद्भव रूप 'आठ' होता है।"
    },
    {
        question: "'कूप' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कुआँ", correct: true },
            { text: "कूप", correct: false },
            { text: "कुपा", correct: false },
            { text: "कूपा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूप' तत्सम शब्द का तद्भव रूप 'कुआँ' है।"
    },
    {
        question: "'ओष्ठ' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "ओठ", correct: true },
            { text: "ओस्त", correct: false },
            { text: "ओष्ठ", correct: false },
            { text: "होठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ओष्ठ' तत्सम शब्द का तद्भव रूप 'ओठ' होता है।"
    },
    {
        question: "'छत्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "छाता", correct: true },
            { text: "छत्र", correct: false },
            { text: "छाता", correct: false },
            { text: "छत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छत्र' तत्सम शब्द है, जिसका तद्भव रूप 'छाता' है।"
    },
    {
        question: "'शुक' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "तोता", correct: true },
            { text: "शुक", correct: false },
            { text: "सुक", correct: false },
            { text: "तोती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शुक' तत्सम शब्द का तद्भव रूप 'तोता' होता है।"
    },
    {
        question: "'स्नेह' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नेह", correct: true },
            { text: "स्नेह", correct: false },
            { text: "सनेह", correct: false },
            { text: "नेहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्नेह' तत्सम शब्द का तद्भव रूप 'नेह' है।"
    },
    {
        question: "'लवण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नोन", correct: true },
            { text: "नमक", correct: false },
            { text: "लवण", correct: false },
            { text: "लोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लवण' तत्सम शब्द है, जिसका तद्भव रूप 'नोन' है।"
    },
    {
        question: "'क्षेत्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "खेत", correct: true },
            { text: "क्षेत्र", correct: false },
            { text: "खेत्र", correct: false },
            { text: "छेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षेत्र' तत्सम शब्द का तद्भव रूप 'खेत' होता है।"
    },
    {
        question: "'चक्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "चाक", correct: true },
            { text: "चक्का", correct: false },
            { text: "चक्र", correct: false },
            { text: "चक्कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चक्र' तत्सम शब्द का तद्भव रूप 'चाक' है।"
    },
    {
        question: "'ताम्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "ताँबा", correct: true },
            { text: "ताम्र", correct: false },
            { text: "ताम्बा", correct: false },
            { text: "तामा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ताम्र' तत्सम शब्द है, जिसका तद्भव रूप 'ताँबा' होता है।"
    },
    {
        question: "'मृत्यु' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "मौत", correct: true },
            { text: "मउत", correct: false },
            { text: "मृत्यु", correct: false },
            { text: "मरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृत्यु' तत्सम शब्द का तद्भव रूप 'मौत' है।"
    },
    {
        question: "'पक्व' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पका", correct: true },
            { text: "पक्क", correct: false },
            { text: "पक्वा", correct: false },
            { text: "पक्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पक्व' तत्सम शब्द है, जिसका तद्भव रूप 'पका' होता है।"
    },
    {
        question: "'घृत' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "घी", correct: true },
            { text: "घृत", correct: false },
            { text: "घिरत", correct: false },
            { text: "घी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घृत' तत्सम शब्द है, जिसका तद्भव रूप 'घी' होता है।"
    },
    {
        question: "'भ्रातृ' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "भाई", correct: true },
            { text: "भ्राता", correct: false },
            { text: "भ्रातृ", correct: false },
            { text: "भाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भ्रातृ' तत्सम शब्द है, जिसका तद्भव रूप 'भाई' होता है।"
    },
    {
        question: "'हस्त' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "हाथ", correct: true },
            { text: "हस्ती", correct: false },
            { text: "हस्त", correct: false },
            { text: "हाता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हस्त' तत्सम शब्द का तद्भव रूप 'हाथ' है।"
    },
    {
        question: "'दधि' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दही", correct: true },
            { text: "दध", correct: false },
            { text: "दधी", correct: false },
            { text: "दहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दधि' तत्सम शब्द है, जिसका तद्भव रूप 'दही' होता है।"
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