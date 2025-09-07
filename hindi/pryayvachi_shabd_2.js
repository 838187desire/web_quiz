const questions = [
    {
        topHeading: "पर्यायवाची शब्द पर आधारित 50 बहुविकल्पीय प्रश्न part 2 (quiz_no.33)"
    },
    {
        question: "'कमल' शब्द का पर्यायवाची इनमें से कौन सा नहीं है?",
        answers: shuffle([
            { text: "पंकज", correct: false },
            { text: "नीरज", correct: false },
            { text: "अंबुज", correct: false },
            { text: "वारिद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वारिद' बादल का पर्यायवाची है, जबकि पंकज, नीरज, और अंबुज 'कमल' के पर्यायवाची हैं।"
    },
    {
        question: "'अमृत' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "सोम", correct: false },
            { text: "सुधा", correct: false },
            { text: "पीयूष", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमृत' के पर्यायवाची सुधा, पीयूष, अमिय, सोम, सुरभोग हैं।"
    },
    {
        question: "'चक्षु' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "कान", correct: false },
            { text: "आँख", correct: true },
            { text: "हाथ", correct: false },
            { text: "पैर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चक्षु' का अर्थ आँख होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> आँख के अन्य पर्यायवाची नेत्र, नयन, लोचन, दृग हैं।"
    },
    {
        question: "'श्रोत्र' शब्द निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "कान", correct: true },
            { text: "हाथ", correct: false },
            { text: "पैर", correct: false },
            { text: "सिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्रोत्र' कान का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> कान के अन्य पर्यायवाची कर्ण, श्रवणेंद्रिय, श्रुति, श्रुतिपटल हैं।"
    },
    {
        question: "'पाणि' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पैर", correct: false },
            { text: "सिर", correct: false },
            { text: "हाथ", correct: true },
            { text: "मुँह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाणि' हाथ का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> हाथ के अन्य पर्यायवाची कर, हस्त, बाहु, भुजा हैं।"
    },
    {
        question: "'चरण' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पैर", correct: true },
            { text: "हाथ", correct: false },
            { text: "सिर", correct: false },
            { text: "मुँह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चरण' पैर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पैर के अन्य पर्यायवाची पाँव, पद, पग, गोड़ हैं।"
    },
    {
        question: "'मस्तक' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "सिर", correct: true },
            { text: "मुँह", correct: false },
            { text: "कान", correct: false },
            { text: "आँख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मस्तक' सिर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> सिर के अन्य पर्यायवाची शीश, माथा, शीर्ष, मूर्धा हैं।"
    },
    {
        question: "'वदन' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "मुँह", correct: true },
            { text: "हाथ", correct: false },
            { text: "पैर", correct: false },
            { text: "सिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वदन' मुँह का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> मुँह के अन्य पर्यायवाची मुख, आनंद, वक्त्र, चेहरा हैं।"
    },
    {
        question: "'कंचन' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "चाँदी", correct: false },
            { text: "लोहा", correct: false },
            { text: "सोना", correct: true },
            { text: "पानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कंचन' सोना का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> सोना के अन्य पर्यायवाची स्वर्ण, हेम, हिरण्य, कुंदन हैं।"
    },
    {
        question: "'रजत' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चाँदी", correct: true },
            { text: "लोहा", correct: false },
            { text: "आग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रजत' चाँदी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> चाँदी के अन्य पर्यायवाची रूपा, रौप्य, चंद्रहास, तार हैं।"
    },
    {
        question: "'लोहा' का इनमें से कौन सा पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "लौह", correct: false },
            { text: "अयस", correct: false },
            { text: "सार", correct: false },
            { text: "सारंग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सारंग' का अर्थ कई होते हैं, लेकिन 'लोहा' नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> सारंग के अर्थ में हाथी, मोर, सांप, सिंह, हिरण आदि शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> लोहा के पर्यायवाची लौह, अयस, सार, फला हैं।"
    },
    {
        question: "'अनल' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "आग", correct: true },
            { text: "पानी", correct: false },
            { text: "पहाड़", correct: false },
            { text: "नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनल' आग का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> आग के अन्य पर्यायवाची अग्नि, पावक, ज्वाला, वह्नि हैं।"
    },
    {
        question: "'सलिल' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "नदी", correct: false },
            { text: "पानी", correct: true },
            { text: "पहाड़", correct: false },
            { text: "आग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सलिल' पानी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पानी के अन्य पर्यायवाची जल, नीर, तोय, अम्बु हैं।"
    },
    {
        question: "'गिरि' निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "नदी", correct: false },
            { text: "स्त्री", correct: false },
            { text: "पहाड़", correct: true },
            { text: "पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गिरि' पहाड़ का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पहाड़ के अन्य पर्यायवाची पर्वत, शैल, नग, भूधर हैं।"
    },
    {
        question: "'तरंगिणी' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "नदी", correct: true },
            { text: "स्त्री", correct: false },
            { text: "पहाड़", correct: false },
            { text: "पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तरंगिणी' नदी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> नदी के अन्य पर्यायवाची सरिता, तटिनी, कूलंकषा, निर्झरिणी हैं।"
    },
    {
        question: "'वनिता' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "पुरुष", correct: false },
            { text: "स्त्री", correct: true },
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वनिता' स्त्री का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> स्त्री के अन्य पर्यायवाची नारी, महिला, औरत, कामिनी हैं।"
    },
    {
        question: "'मानुष' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पुरुष", correct: true },
            { text: "स्त्री", correct: false },
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मानुष' पुरुष का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पुरुष के अन्य पर्यायवाची नर, मर्द, आदमी, जन हैं।"
    },
    {
        question: "'अवबोध' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "ज्ञान", correct: true },
            { text: "अज्ञान", correct: false },
            { text: "ईश्वर", correct: false },
            { text: "कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवबोध' ज्ञान का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> ज्ञान के अन्य पर्यायवाची विद्या, इल्म, बोध, जानकारी हैं।"
    },
    {
        question: "'नासमझी' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: true },
            { text: "ईश्वर", correct: false },
            { text: "कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नासमझी' अज्ञान का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> अज्ञान के अन्य पर्यायवाची अविद्या, अजानकारी, अवबोधहीनता, मूर्खता हैं।"
    },
    {
        question: "'परमेश्वर' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: false },
            { text: "ईश्वर", correct: true },
            { text: "कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परमेश्वर' ईश्वर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> ईश्वर के अन्य पर्यायवाची भगवान, प्रभु, परमात्मा, जगदीश हैं।"
    },
    {
        question: "'सरोज' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "पानी", correct: false },
            { text: "कमल", correct: true },
            { text: "अमृत", correct: false },
            { text: "आग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सरोज' का अर्थ है सरोवर में जन्म लेने वाला, जो कमल का पर्यायवाची है।"
    },
    {
        question: "'सुरभोग' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "कमल", correct: false },
            { text: "अमृत", correct: true },
            { text: "आँख", correct: false },
            { text: "मुँह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुरभोग' का अर्थ देवताओं का भोग या अमृत होता है।"
    },
    {
        question: "'लोचन' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "हाथ", correct: false },
            { text: "पैर", correct: false },
            { text: "आँख", correct: true },
            { text: "कान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोचन' आँख का पर्यायवाची है।"
    },
    {
        question: "'श्रुतिपटल' शब्द का पर्यायवाची है:",
        answers: shuffle([
            { text: "कान", correct: true },
            { text: "सिर", correct: false },
            { text: "हाथ", correct: false },
            { text: "मुँह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्रुतिपटल' कान का एक पर्यायवाची है।"
    },
    {
        question: "'भुजा' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पैर", correct: false },
            { text: "सिर", correct: false },
            { text: "हाथ", correct: true },
            { text: "मुँह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भुजा' हाथ का पर्यायवाची है।"
    },
    {
        question: "'पग' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "हाथ", correct: false },
            { text: "पैर", correct: true },
            { text: "सिर", correct: false },
            { text: "मुँह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पग' पैर का पर्यायवाची है।"
    },
    {
        question: "'शीर्ष' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पैर", correct: false },
            { text: "सिर", correct: true },
            { text: "हाथ", correct: false },
            { text: "मुँह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शीर्ष' का अर्थ सबसे ऊपर का भाग या सिर होता है।"
    },
    {
        question: "'मुख' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "सिर", correct: false },
            { text: "मुँह", correct: true },
            { text: "कान", correct: false },
            { text: "आँख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुख' मुँह का पर्यायवाची है।"
    },
    {
        question: "'हिरण्य' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "चाँदी", correct: false },
            { text: "सोना", correct: true },
            { text: "आग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिरण्य' सोना का पर्यायवाची है।"
    },
    {
        question: "'रूपा' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चाँदी", correct: true },
            { text: "लोहा", correct: false },
            { text: "आग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रूपा' चाँदी का पर्यायवाची है।"
    },
    {
        question: "'पावक' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "पानी", correct: false },
            { text: "आग", correct: true },
            { text: "पहाड़", correct: false },
            { text: "नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पावक' आग का पर्यायवाची है।"
    },
    {
        question: "'तोय' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पानी", correct: true },
            { text: "आग", correct: false },
            { text: "पहाड़", correct: false },
            { text: "नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तोय' पानी का पर्यायवाची है।"
    },
    {
        question: "'शैल' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "नदी", correct: false },
            { text: "पहाड़", correct: true },
            { text: "स्त्री", correct: false },
            { text: "पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शैल' पहाड़ का पर्यायवाची है।"
    },
    {
        question: "'सरिता' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "पहाड़", correct: false },
            { text: "नदी", correct: true },
            { text: "स्त्री", correct: false },
            { text: "पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सरिता' नदी का पर्यायवाची है।"
    },
    {
        question: "'कामिनी' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पुरुष", correct: false },
            { text: "स्त्री", correct: true },
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कामिनी' स्त्री का पर्यायवाची है।"
    },
    {
        question: "'नर' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "पुरुष", correct: true },
            { text: "स्त्री", correct: false },
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नर' पुरुष का पर्यायवाची है।"
    },
    {
        question: "'अविद्या' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: true },
            { text: "ईश्वर", correct: false },
            { text: "कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अविद्या' अज्ञान का पर्यायवाची है।"
    },
    {
        question: "'प्रभु' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: false },
            { text: "ईश्वर", correct: true },
            { text: "कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रभु' ईश्वर का पर्यायवाची है।"
    },
    {
        question: "'जगदीश' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: false },
            { text: "ईश्वर", correct: true },
            { text: "कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जगदीश' का अर्थ जगत का ईश या ईश्वर होता है।"
    },
    {
        question: "'कंचन' का पर्यायवाची नहीं है:",
        answers: shuffle([
            { text: "स्वर्ण", correct: false },
            { text: "हेम", correct: false },
            { text: "कुंदन", correct: false },
            { text: "रजत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रजत' चाँदी का पर्यायवाची है, सोना का नहीं।"
    },
    {
        question: "'अंबु' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "बादल", correct: false },
            { text: "पानी", correct: true },
            { text: "पहाड़", correct: false },
            { text: "नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंबु' पानी का पर्यायवाची है।"
    },
    {
        question: "'भूधर' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पहाड़", correct: true },
            { text: "नदी", correct: false },
            { text: "स्त्री", correct: false },
            { text: "पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भूधर' का अर्थ भूमि को धारण करने वाला, अर्थात पहाड़ होता है।"
    },
    {
        question: "'कूलंकषा' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "पहाड़", correct: false },
            { text: "नदी", correct: true },
            { text: "स्त्री", correct: false },
            { text: "पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूलंकषा' का अर्थ किनारे को तोड़कर बहने वाली, अर्थात नदी होता है।"
    },
    {
        question: "'महिला' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "पुरुष", correct: false },
            { text: "स्त्री", correct: true },
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महिला' स्त्री का पर्यायवाची है।"
    },
    {
        question: "'मर्द' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "पुरुष", correct: true },
            { text: "स्त्री", correct: false },
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मर्द' पुरुष का पर्यायवाची है।"
    },
    {
        question: "'बोध' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "अज्ञान", correct: false },
            { text: "ज्ञान", correct: true },
            { text: "ईश्वर", correct: false },
            { text: "कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बोध' का अर्थ ज्ञान या समझ होता है।"
    },
    {
        question: "'मूर्खता' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: true },
            { text: "ईश्वर", correct: false },
            { text: "कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मूर्खता' अज्ञान का पर्यायवाची है।"
    },
    {
        question: "'परमात्मा' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "ज्ञान", correct: false },
            { text: "अज्ञान", correct: false },
            { text: "ईश्वर", correct: true },
            { text: "कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परमात्मा' ईश्वर का पर्यायवाची है।"
    },
    {
        question: "'चंद्रहास' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चाँदी", correct: true },
            { text: "लोहा", correct: false },
            { text: "आग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चंद्रहास' चाँदी का पर्यायवाची है।"
    },
    {
        question: "'वह्नि' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पानी", correct: false },
            { text: "आग", correct: true },
            { text: "पहाड़", correct: false },
            { text: "नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वह्नि' आग का पर्यायवाची है।"
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