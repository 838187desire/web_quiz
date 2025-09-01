const questions = [
    {
        topHeading: "पर्यायवाची शब्द पर आधारित 50 बहुविकल्पीय प्रश्न part 1 (quiz_no.32)"
    },
    {
        question: "'मृगेंद्र' निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "शेर", correct: true },
            { text: "गाय", correct: false },
            { text: "बेटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृगेंद्र' शेर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेर के अन्य पर्यायवाची सिंह, केसरी, वनराज, शार्दूल हैं।"
    },
    {
        question: "'आकाश' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "अंबर", correct: false },
            { text: "व्योम", correct: false },
            { text: "गगन", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आकाश' के पर्यायवाची नभ, गगन, अंबर, व्योम, आसमान हैं।"
    },
    {
        question: "'कुसुम' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "फूल", correct: true },
            { text: "पेड़", correct: false },
            { text: "बादल", correct: false },
            { text: "रात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुसुम' का अर्थ फूल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> फूल के अन्य पर्यायवाची पुष्प, सुमन, प्रसून, पुहुप हैं।"
    },
    {
        question: "'विटप' शब्द निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "फूल", correct: false },
            { text: "पेड़", correct: true },
            { text: "दिन", correct: false },
            { text: "पक्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विटप' पेड़ का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पेड़ के अन्य पर्यायवाची वृक्ष, तरु, पादप, द्रुम हैं।"
    },
    {
        question: "'यामिनी' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "दिन", correct: false },
            { text: "रात", correct: true },
            { text: "घर", correct: false },
            { text: "गाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यामिनी' रात का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> रात के अन्य पर्यायवाची रात्रि, निशा, रजनी, शर्वरी हैं।"
    },
    {
        question: "'दिवा' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "दिन", correct: true },
            { text: "रात", correct: false },
            { text: "सागर", correct: false },
            { text: "बादल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिवा' दिन का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> दिन के अन्य पर्यायवाची दिवस, वासर, अहः, वार हैं।"
    },
    {
        question: "'पखेरू' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "गाय", correct: false },
            { text: "पक्षी", correct: true },
            { text: "हाथी", correct: false },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पखेरू' पक्षी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पक्षी के अन्य पर्यायवाची खग, विहग, पंछी, अंडज हैं।"
    },
    {
        question: "'निकेतन' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "घर", correct: true },
            { text: "दोस्त", correct: false },
            { text: "दुश्मन", correct: false },
            { text: "रानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निकेतन' घर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> घर के अन्य पर्यायवाची गृह, भवन, आलय, धाम हैं।"
    },
    {
        question: "'नृप' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "रानी", correct: false },
            { text: "राजा", correct: true },
            { text: "बेटा", correct: false },
            { text: "बेटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नृप' राजा का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> राजा के अन्य पर्यायवाची भूप, नरेश, महीप, भूपति हैं।"
    },
    {
        question: "'महिषी' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "रानी", correct: true },
            { text: "सागर", correct: false },
            { text: "हाथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महिषी' रानी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> रानी के अन्य पर्यायवाची राज्ञी, साम्राज्ञी, महारानी, रानी हैं।"
    },
    {
        question: "'सागर' का इनमें से कौनसा पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "रत्नाकर", correct: false },
            { text: "पयोधि", correct: false },
            { text: "नीरद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीरद' बादल का पर्यायवाची है, सागर का नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> सागर के पर्यायवाची समुद्र, जलधि, रत्नाकर, पयोधि, सिंधु हैं।"
    },
    {
        question: "'जलद' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "सागर", correct: false },
            { text: "बादल", correct: true },
            { text: "हाथी", correct: false },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलद' बादल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> बादल के अन्य पर्यायवाची मेघ, घन, वारिद, नीरद हैं।"
    },
        {
        question: "'कुंजर' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "हाथी", correct: true },
            { text: "गाय", correct: false },
            { text: "शेर", correct: false },
            { text: "बेटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुंजर' हाथी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> हाथी के अन्य पर्यायवाची गज, हस्ती, करी, दंती हैं।"
    },
    {
        question: "'मृगेंद्र' निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "शेर", correct: true },
            { text: "गाय", correct: false },
            { text: "बेटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृगेंद्र' शेर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेर के अन्य पर्यायवाची सिंह, केसरी, वनराज, शार्दूल हैं।"
    },
    {
        question: "'सिंही' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "रानी", correct: false },
            { text: "शेरनी", correct: true },
            { text: "गाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सिंही' शेरनी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेरनी के अन्य पर्यायवाची सिंहिनी, मृगेन्द्री, वनराजिनी, केसरी हैं।"
    },
    {
        question: "'सुरभि' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "गाय", correct: true },
            { text: "बेटी", correct: false },
            { text: "दोस्त", correct: false },
            { text: "दुश्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुरभि' गाय का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> गाय के अन्य पर्यायवाची गौ, धेनु, भद्रा, दोहनी हैं।"
    },
    {
        question: "'तनय' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "बेटा", correct: true },
            { text: "बेटी", correct: false },
            { text: "दोस्त", correct: false },
            { text: "दुश्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तनय' बेटा का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> बेटा के अन्य पर्यायवाची सुत, पुत्र, आत्मज, पूत हैं।"
    },
    {
        question: "'नंदिनी' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "बेटा", correct: false },
            { text: "बेटी", correct: true },
            { text: "गाय", correct: false },
            { text: "रानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नंदिनी' बेटी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> बेटी के अन्य पर्यायवाची सुता, पुत्री, तनया, आत्मजा हैं।"
    },
    {
        question: "'मीत' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "दुश्मन", correct: false },
            { text: "दोस्त", correct: true },
            { text: "रानी", correct: false },
            { text: "राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मीत' दोस्त का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोस्त के अन्य पर्यायवाची मित्र, सखा, साथी, सहचर हैं।"
    },
    {
        question: "'रिपु' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "दोस्त", correct: false },
            { text: "दुश्मन", correct: true },
            { text: "बेटा", correct: false },
            { text: "रानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रिपु' दुश्मन का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> दुश्मन के अन्य पर्यायवाची शत्रु, अरि, वैरी, अमित्ऱ हैं।"
    },
    {
        question: "'अनिल' शब्द किस श्रेणी का पर्यायवाची है?",
        answers: shuffle([
            { text: "पानी", correct: false },
            { text: "हवा", correct: true },
            { text: "अग्नि", correct: false },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनिल' हवा का पर्यायवाची है, जबकि 'अनल' अग्नि का होता है।"
    },
    {
        question: "'व्योम' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "धरती", correct: false },
            { text: "सागर", correct: false },
            { text: "आकाश", correct: true },
            { text: "हवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्योम' आकाश का पर्यायवाची है।"
    },
    {
        question: "'पुष्प' के पर्यायवाची शब्दों का सही समूह है:",
        answers: shuffle([
            { text: "फूल, सुमन, प्रसून", correct: true },
            { text: "फूल, तरु, पादप", correct: false },
            { text: "सुमन, गगन, पुहुप", correct: false },
            { text: "प्रसून, समीर, पुष्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी 'फूल' के पर्यायवाची हैं।"
    },
    {
        question: "'द्रुम' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "दिन", correct: false },
            { text: "रात", correct: false },
            { text: "पेड़", correct: true },
            { text: "फूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्रुम' का अर्थ पेड़ होता है।"
    },
    {
        question: "'निशा' का पर्यायवाची नहीं है:",
        answers: shuffle([
            { text: "रात", correct: false },
            { text: "रात्रि", correct: false },
            { text: "यामिनी", correct: false },
            { text: "दिवस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिवस' दिन का पर्यायवाची है, रात का नहीं।"
    },
    {
        question: "'वासर' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "रात", correct: false },
            { text: "दिन", correct: true },
            { text: "बादल", correct: false },
            { text: "सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वासर' दिन का पर्यायवाची है।"
    },
    {
        question: "'अंडज' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "घर", correct: false },
            { text: "गाय", correct: false },
            { text: "पक्षी", correct: true },
            { text: "राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंडज' का शाब्दिक अर्थ है अंडे से जन्म लेने वाला, जो पक्षी का पर्यायवाची है।"
    },
    {
        question: "'धाम' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "दोस्त", correct: false },
            { text: "दुश्मन", correct: false },
            { text: "घर", correct: true },
            { text: "रानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धाम' घर का पर्यायवाची है।"
    },
    {
        question: "'भूपति' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "राजा", correct: true },
            { text: "रानी", correct: false },
            { text: "बेटा", correct: false },
            { text: "बेटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भूपति' का अर्थ भूमि का स्वामी या राजा होता है।"
    },
    {
        question: "'साम्राज्ञी' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "रानी", correct: true },
            { text: "शेर", correct: false },
            { text: "शेरनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साम्राज्ञी' रानी का पर्यायवाची है।"
    },
    {
        question: "'जलधि' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "बादल", correct: false },
            { text: "सागर", correct: true },
            { text: "हवा", correct: false },
            { text: "आकाश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलधि' का अर्थ जल का भंडार या सागर होता है।"
    },
    {
        question: "'घन' शब्द का पर्यायवाची है:",
        answers: shuffle([
            { text: "बादल", correct: true },
            { text: "सागर", correct: false },
            { text: "पेड़", correct: false },
            { text: "फूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घन' बादल का पर्यायवाची है।"
    },
    {
        question: "'करी' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "शेर", correct: false },
            { text: "हाथी", correct: true },
            { text: "गाय", correct: false },
            { text: "बेटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'करी' हाथी का पर्यायवाची है।"
    },
    {
        question: "'वनराज' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "शेर", correct: true },
            { text: "हाथी", correct: false },
            { text: "पक्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वनराज' का अर्थ वन का राजा, अर्थात शेर होता है।"
    },
    {
        question: "'केसरी' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "शेर", correct: true },
            { text: "शेरनी", correct: false },
            { text: "राजा", correct: false },
            { text: "रानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'केसरी' शेर का पर्यायवाची है।"
    },
    {
        question: "'धेनु' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "गाय", correct: true },
            { text: "बेटी", correct: false },
            { text: "दोस्त", correct: false },
            { text: "दुश्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धेनु' गाय का पर्यायवाची है।"
    },
    {
        question: "'आत्मज' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "बेटी", correct: false },
            { text: "बेटा", correct: true },
            { text: "दोस्त", correct: false },
            { text: "दुश्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आत्मज' का अर्थ आत्मा से जन्मा या बेटा होता है।"
    },
    {
        question: "'पुत्री' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "बेटा", correct: false },
            { text: "बेटी", correct: true },
            { text: "दोस्त", correct: false },
            { text: "दुश्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुत्री' बेटी का पर्यायवाची है।"
    },
    {
        question: "'सहचर' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "दुश्मन", correct: false },
            { text: "दोस्त", correct: true },
            { text: "गाय", correct: false },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सहचर' का अर्थ साथ चलने वाला या दोस्त होता है।"
    },
    {
        question: "'वैरी' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "दोस्त", correct: false },
            { text: "दुश्मन", correct: true },
            { text: "राजा", correct: false },
            { text: "रानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वैरी' का अर्थ शत्रु या दुश्मन होता है।"
    },
    {
        question: "'समीर' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पानी", correct: false },
            { text: "हवा", correct: true },
            { text: "आकाश", correct: false },
            { text: "दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समीर' हवा का एक सामान्य पर्यायवाची है।"
    },
    {
        question: "'गगन' का पर्यायवाची नहीं है:",
        answers: shuffle([
            { text: "नभ", correct: false },
            { text: "अंबर", correct: false },
            { text: "पादप", correct: true },
            { text: "व्योम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पादप' पेड़ का पर्यायवाची है, आकाश का नहीं।"
    },
    {
        question: "'पुहुप' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "पेड़", correct: false },
            { text: "फूल", correct: true },
            { text: "पक्षी", correct: false },
            { text: "घर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुहुप' फूल का पर्यायवाची है।"
    },
    {
        question: "'वृक्ष' के पर्यायवाची शब्द हैं:",
        answers: shuffle([
            { text: "तरु, पादप, विटप", correct: true },
            { text: "तरु, पवन, यामिनी", correct: false },
            { text: "पादप, खग, तरु", correct: false },
            { text: "विटप, जलद, द्रुम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी 'वृक्ष' के पर्यायवाची हैं।"
    },
    {
        question: "'रजनी' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "दिन", correct: false },
            { text: "रात", correct: true },
            { text: "बादल", correct: false },
            { text: "सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रजनी' रात का पर्यायवाची है।"
    },
    {
        question: "'अहः' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "रात", correct: false },
            { text: "दिन", correct: true },
            { text: "घर", correct: false },
            { text: "पक्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अहः' दिन का पर्यायवाची है।"
    },
    {
        question: "'विहग' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "गाय", correct: false },
            { text: "पक्षी", correct: true },
            { text: "हाथी", correct: false },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विहग' का अर्थ पक्षी होता है।"
    },
    {
        question: "'आलय' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "दोस्त", correct: false },
            { text: "दुश्मन", correct: false },
            { text: "घर", correct: true },
            { text: "रानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आलय' का अर्थ निवास या घर होता है।"
    },
    {
        question: "'पयोधि' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "बादल", correct: false },
            { text: "सागर", correct: true },
            { text: "हवा", correct: false },
            { text: "आकाश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पयोधि' का अर्थ पय (पानी) का भंडार, अर्थात सागर होता है।"
    },
    {
        question: "'शार्दूल' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "शेर", correct: true },
            { text: "गाय", correct: false },
            { text: "बेटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शार्दूल' शेर का एक अन्य पर्यायवाची है।"
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