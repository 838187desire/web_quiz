const questions = [
    {
        topHeading: "द्विगु समास पर आधारित 30 बहुविकल्पीय प्रश्न (quiz_no.18)"
    },
    {
        question: "'चौराहा' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्विगु समास में पहला पद संख्यावाचक होता है और यह किसी समूह या समाहार का बोध कराता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'चौराहा' का विग्रह 'चार राहों का समूह' होता है, जो द्विगु समास की पहचान है।"
    },
    {
        question: "'त्रिलोक' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "तीन लोकों का समूह", correct: true },
            { text: "तीन और लोक", correct: false },
            { text: "तीन लोकों वाला", correct: false },
            { text: "तीनों लोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिलोक' में 'त्रि' (तीन) संख्यावाचक पद है और यह तीन लोकों के समूह का बोध कराता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द द्विगु समास का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "त्रिभुवन", correct: false },
            { text: "पंचवटी", correct: false },
            { text: "दशानन", correct: true },
            { text: "दोपहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशानन' का अर्थ 'दस हैं आनन जिसके' (रावण) होता है, जो बहुव्रीहि समास का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द द्विगु समास के उदाहरण हैं।"
    },
    {
        question: "'नवग्रह' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नवग्रह' का विग्रह 'नौ ग्रहों का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'नव' (नौ) संख्यावाचक है।"
    },
    {
        question: "'सप्तर्षि' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्तर्षि' का विग्रह 'सात ऋषियों का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'सप्त' (सात) संख्यावाचक पद है।"
    },
    {
        question: "किस विकल्प में द्विगु समास का सही उदाहरण है?",
        answers: shuffle([
            { text: "चरणकमल", correct: false },
            { text: "नीलगाय", correct: false },
            { text: "पंचवटी", correct: true },
            { text: "माता-पिता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचवटी' का विग्रह 'पांच वटों का समूह' होता है, जो द्विगु समास का सही उदाहरण है।"
    },
    {
        question: "'त्रिभुवन' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "तीन भुवनों का समूह", correct: true },
            { text: "तीनों भुवन", correct: false },
            { text: "तीन और भुवन", correct: false },
            { text: "भुवन और तीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिभुवन' में 'त्रि' (तीन) संख्यावाचक पद है और यह तीन भुवनों के समूह का बोध कराता है।"
    },
    {
        question: "'सप्ताह' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्ताह' का विग्रह 'सात दिनों का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'सप्त' (सात) संख्यावाचक है।"
    },
    {
        question: "'दोपहर' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "दो पहरों का समूह", correct: true },
            { text: "दोपहर और पहर", correct: false },
            { text: "दोपहर", correct: false },
            { text: "दो पहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दोपहर' में 'दो' संख्यावाचक पद है और यह दो पहरों के समूह का बोध कराता है।"
    },
    {
        question: "'अष्टाध्यायी' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अष्टाध्यायी' का अर्थ 'आठ अध्यायों वाली' (पाणिनी की पुस्तक) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत कर रहा है, इसलिए यह बहुव्रीहि समास है।"
    },
    {
        question: "'पंचामृत' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचामृत' का विग्रह 'पांच अमृतों का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'पंच' (पांच) संख्यावाचक पद है।"
    },
    {
        question: "'त्रिवेणी' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिवेणी' का विग्रह 'तीन वेणियों (नदियों) का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'त्रि' (तीन) संख्यावाचक पद है।"
    },
    {
        question: "'चतुर्वेद' का सही समास विग्रह है:",
        answers: shuffle([
            { text: "चार वेदों का समूह", correct: true },
            { text: "चार और वेद", correct: false },
            { text: "चार वेद", correct: false },
            { text: "वेदों का समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुर्वेद' में 'चतुः' (चार) संख्यावाचक पद है और यह चार वेदों के समूह का बोध कराता है।"
    },
    {
        question: "'पंचवटी' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचवटी' का विग्रह 'पांच वटों का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> (यह बहुव्रीहि भी हो सकता है, यदि यह किसी विशेष स्थान का बोध कराए, लेकिन सामान्यतः द्विगु होता है)।"
    },
    {
        question: "'सतसई' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सतसई' का विग्रह 'सात सौ का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'सत' (सात सौ) संख्यावाचक पद है।"
    },
    {
        question: "'त्रिभुज' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिभुज' का विग्रह 'तीन भुजाओं का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'त्रि' (तीन) संख्यावाचक पद है।"
    },
    {
        question: "'नवरात्र' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "नौ रातों का समूह", correct: true },
            { text: "नौ और रात्र", correct: false },
            { text: "नौ रात्रियां", correct: false },
            { text: "रातों का समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नवरात्र' में 'नव' (नौ) संख्यावाचक पद है और यह नौ रातों के समूह का बोध कराता है।"
    },
    {
        question: "'पंचतंत्र' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचतंत्र' का विग्रह 'पांच तंत्रों का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'पंच' (पांच) संख्यावाचक पद है।"
    },
    {
        question: "'दशमलव' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "दस भागों का समूह", correct: true },
            { text: "दसवां भाग", correct: false },
            { text: "दस का मूल्य", correct: false },
            { text: "दस और मूल्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशमलव' में 'दश' (दस) संख्यावाचक पद है और यह दस भागों के समूह का बोध कराता है।"
    },
    {
        question: "'षट्पद' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'षट्पद' का अर्थ 'छह पैर वाला' (भौंरा) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत कर रहा है, इसलिए यह बहुव्रीहि समास है।"
    },
    {
        question: "'द्विगु समास' में कौन सा पद प्रधान होता है?",
        answers: shuffle([
            { text: "पहला", correct: false },
            { text: "दूसरा", correct: true },
            { text: "दोनों", correct: false },
            { text: "कोई अन्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्विगु समास में पहला पद संख्यावाचक विशेषण होता है, जबकि दूसरा पद प्रधान होता है।"
    },
    {
        question: "'त्रिफला' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिफला' का विग्रह 'तीन फलों का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'त्रि' (तीन) संख्यावाचक पद है।"
    },
    {
        question: "'चौमासा' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चौमासा' का विग्रह 'चार मासों (महीनों) का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'चौ' (चार) संख्यावाचक पद है।"
    },
    {
        question: "'त्रिलोचन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिलोचन' का अर्थ 'तीन हैं लोचन (आँखें) जिसके' (शिव) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत कर रहा है।"
    },
    {
        question: "'पंचतंत्र' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "पांच तंत्रों का समूह", correct: false },
            { text: "पांच और तंत्र", correct: false },
            { text: "पांच तंत्र", correct: false },
            { text: "पांच तंत्रों का समाहार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचतंत्र' का विग्रह 'पांच तंत्रों का समाहार' होता है।"
    },
    {
        question: "'तिरंगा' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तिरंगा' का विग्रह 'तीन रंगों का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> (यह बहुव्रीहि भी हो सकता है, जब यह भारतीय ध्वज का बोध कराए)।"
    },
    {
        question: "'दशमुख' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशमुख' का अर्थ 'दस हैं मुख जिसके' (रावण) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी तीसरे अर्थ की ओर संकेत कर रहा है।"
    },
    {
        question: "'अठन्नी' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अठन्नी' का विग्रह 'आठ आनों का समूह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अठ' (आठ) संख्यावाचक है।"
    },
    {
        question: "'नवग्रह' का सही समास विग्रह है:",
        answers: shuffle([
            { text: "नौ ग्रहों का समूह", correct: true },
            { text: "नौ ग्रह", correct: false },
            { text: "नौ और ग्रह", correct: false },
            { text: "ग्रहों का समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नवग्रह' में 'नव' (नौ) संख्यावाचक है और यह नौ ग्रहों के समूह का बोध कराता है।"
    },
    {
        question: "'द्विगु समास' का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "दो गायों का समूह", correct: true },
            { text: "दो भेड़ों का समूह", correct: false },
            { text: "दो पदों का समूह", correct: false },
            { text: "दो अक्षरों का समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्विगु' का शाब्दिक अर्थ 'दो गायों का समूह' होता है, जो इस समास के संख्यावाचक होने की ओर संकेत करता है।"
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