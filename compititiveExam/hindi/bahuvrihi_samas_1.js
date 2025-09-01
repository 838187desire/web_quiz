const questions = [
    {
        topHeading: "बहुव्रीहि समास पर आधारित 30 बहुविकल्पीय प्रश्न (quiz_no.17)"
    },
    {
        question: "'दशानन' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशानन' का विग्रह 'दस हैं आनन (मुख) जिसके' अर्थात् रावण।<br><br><i class='fa-solid fa-angles-right icon'></i> इस समास में न तो पहला पद प्रधान है, न ही दूसरा, बल्कि कोई तीसरा पद प्रधान होता है।"
    },
    {
        question: "'चतुर्भुज' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुर्भुज' का विग्रह 'चार हैं भुजाएँ जिसकी' अर्थात् विष्णु।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द किसी तीसरे अर्थ (विष्णु) की ओर संकेत कर रहा है, इसलिए यह बहुव्रीहि समास है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द बहुव्रीहि समास का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "लंबोदर", correct: false },
            { text: "नीलकंठ", correct: false },
            { text: "महावीर", correct: false },
            { text: "रामायण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रामायण' का विग्रह 'राम का अयन' (राम का चरित्र) होता है, जो तत्पुरुष समास का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द किसी विशेष व्यक्ति का बोध कराते हैं, इसलिए बहुव्रीहि हैं।"
    },
    {
        question: "'नीलकंठ' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "नीला है कंठ जिसका", correct: true },
            { text: "नीला और कंठ", correct: false },
            { text: "नीला है जो कंठ", correct: false },
            { text: "नीले रंग का कंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीलकंठ' का विग्रह 'नीला है कंठ जिसका' अर्थात् शिव।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे व्यक्ति (शिव) की ओर संकेत कर रहा है, इसलिए यह बहुव्रीहि समास है।"
    },
    {
        question: "'लंबोदर' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लंबोदर' का विग्रह 'लंबा है उदर (पेट) जिसका' अर्थात् गणेश।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत कर रहा है।"
    },
    {
        question: "किस विकल्प में बहुव्रीहि समास का सही उदाहरण है?",
        answers: shuffle([
            { text: "प्रतिदिन", correct: false },
            { text: "देशभक्ति", correct: false },
            { text: "गिरिधर", correct: true },
            { text: "चौराहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गिरिधर' का विग्रह 'गिरि को धारण करने वाला' अर्थात् कृष्ण।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे व्यक्ति की ओर संकेत करता है।"
    },
    {
        question: "'चक्रपाणि' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "चक्र और पाणि", correct: false },
            { text: "चक्र है हाथ में जिसके", correct: true },
            { text: "चक्र के लिए पाणि", correct: false },
            { text: "चक्र जैसा पाणि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चक्रपाणि' का विग्रह 'चक्र है हाथ में जिसके' अर्थात् विष्णु।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बहुव्रीहि समास है।"
    },
    {
        question: "'घनश्याम' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घनश्याम' का विग्रह 'घन (बादल) के समान श्याम (साँवला) है जो' अर्थात् कृष्ण।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे व्यक्ति की ओर संकेत कर रहा है।"
    },
    {
        question: "'अनादि' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनादि' का विग्रह 'न है आदि जिसका' अर्थात् ईश्वर।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत करता है।"
    },
    {
        question: "'त्रिलोचन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिलोचन' का विग्रह 'तीन हैं लोचन (आँखें) जिसके' अर्थात् शिव।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत कर रहा है।"
    },
    {
        question: "'मृत्युंजय' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "मृत्यु को जीतने वाला", correct: true },
            { text: "मृत्यु और जय", correct: false },
            { text: "मृत्यु के लिए जय", correct: false },
            { text: "मृत्यु जैसी जय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृत्युंजय' का विग्रह 'मृत्यु को जीतने वाला' अर्थात् शिव।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बहुव्रीहि समास है।"
    },
    {
        question: "'महावीर' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महावीर' का विग्रह 'महान है जो वीर' अर्थात् हनुमान।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे व्यक्ति की ओर संकेत कर रहा है।"
    },
    {
        question: "'पंचानन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचानन' का विग्रह 'पाँच हैं आनन (मुख) जिसके' अर्थात् शिव या ब्रह्मा।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत कर रहा है।"
    },
    {
        question: "'चक्रधर' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "चक्र को धारण करने वाला", correct: true },
            { text: "चक्र और धर", correct: false },
            { text: "चक्र जैसा धर", correct: false },
            { text: "चक्र के लिए धर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चक्रधर' का विग्रह 'चक्र को धारण करने वाला' अर्थात् विष्णु।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बहुव्रीहि समास है।"
    },
    {
        question: "'पंकज' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंकज' का विग्रह 'पंक (कीचड़) में जन्म लेने वाला' अर्थात् कमल।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ (कमल) की ओर संकेत कर रहा है।"
    },
    {
        question: "किस शब्द में बहुव्रीहि समास नहीं है?",
        answers: shuffle([
            { text: "चतुर्मुख", correct: false },
            { text: "एकदंत", correct: false },
            { text: "त्रिभुज", correct: true },
            { text: "पीतांबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिभुज' का अर्थ 'तीन भुजाओं का समूह' होता है, जो द्विगु समास का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी किसी विशेष व्यक्ति का बोध कराते हैं।"
    },
    {
        question: "'नीलकंठ' का विग्रह 'नीला है जो कंठ' हो तो कौन सा समास होगा?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि विग्रह विशेषण-विशेष्य संबंध को दर्शाता है, तो वह कर्मधारय समास होता है।"
    },
    {
        question: "'चंद्रमौली' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चंद्रमौली' का विग्रह 'चंद्र है मौलि (मस्तक) पर जिसके' अर्थात् शिव।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत कर रहा है।"
    },
    {
        question: "'मृगनयनी' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "मृग के समान नयन हैं जिसके", correct: true },
            { text: "मृग और नयन", correct: false },
            { text: "मृग के नयन", correct: false },
            { text: "मृग के लिए नयन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृगनयनी' का विग्रह 'मृग के समान नयन हैं जिसके' अर्थात् कोई स्त्री विशेष।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बहुव्रीहि समास है।"
    },
    {
        question: "'चतुरानन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुरानन' का विग्रह 'चार हैं आनन (मुख) जिसके' अर्थात् ब्रह्मा।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत कर रहा है।"
    },
    {
        question: "'पीतांबर' का विग्रह 'पीत है अंबर जिसका' हो तो कौन सा समास होगा?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "द्विगु", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब विग्रह किसी तीसरे व्यक्ति (कृष्ण या विष्णु) की ओर संकेत करता है, तो वह बहुव्रीहि समास होता है।"
    },
    {
        question: "'त्रिभुवन' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिभुवन' का अर्थ 'तीन भुवनों का समूह' होता है, जिसमें संख्या का बोध हो रहा है, इसलिए यह द्विगु समास है।"
    },
    {
        question: "'पंचवटी' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचवटी' का अर्थ 'पांच वटों का समूह' होता है, जिसमें संख्या का बोध हो रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> (यदि यह किसी विशेष स्थान का बोध कराए, तो बहुव्रीहि भी हो सकता है, लेकिन सामान्यतः द्विगु होता है)।"
    },
    {
        question: "'वज्रपाणि' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "वज्र है हाथ में जिसके", correct: true },
            { text: "वज्र और पाणि", correct: false },
            { text: "वज्र के लिए पाणि", correct: false },
            { text: "वज्र जैसा पाणि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वज्रपाणि' का विग्रह 'वज्र है हाथ में जिसके' अर्थात् इंद्र।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बहुव्रीहि समास है।"
    },
    {
        question: "'अष्टध्यायी' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: true },
            { text: "द्विगु", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अष्टध्यायी' का अर्थ 'आठ अध्यायों वाली' अर्थात् पाणिनी की पुस्तक।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत कर रहा है।"
    },
    {
        question: "'बहुव्रीहि समास' में कौन सा पद प्रधान होता है?",
        answers: shuffle([
            { text: "पहला", correct: false },
            { text: "दूसरा", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई अन्य पद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहुव्रीहि समास में दोनों पद मिलकर किसी तीसरे पद की ओर संकेत करते हैं और वही तीसरा पद प्रधान होता है।"
    },
    {
        question: "'कनफटा' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कनफटा' का विग्रह 'कान है फटा हुआ जिसका' अर्थात् एक विशेष संप्रदाय का व्यक्ति।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत करता है।"
    },
    {
        question: "'नीलकंठ' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "दोनों", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीलकंठ' कर्मधारय और बहुव्रीहि दोनों हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि इसका विग्रह 'नीला है जो कंठ' हो, तो कर्मधारय; और यदि 'नीला है कंठ जिसका' (शिव) हो, तो बहुव्रीहि।"
    },
    {
        question: "'अनादि' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनादि' का विग्रह 'न है आदि जिसका' अर्थात् ईश्वर।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत करता है।"
    },
    {
        question: "'दशानन' का विग्रह 'दस आननों का समूह' हो तो कौन सा समास होगा?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि विग्रह केवल संख्या और समूह का बोध कराता है, तो वह द्विगु समास होता है।"
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