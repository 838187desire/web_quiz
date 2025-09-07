const questions = [
    {
        topHeading: "विशेषण पर आधारित 25 बहुविकल्पीय प्रश्न part 2 (quiz_no.45)"
    },
    {
        question: "'वीर' की उत्तरावस्था क्या है?",
        answers: shuffle([
            { text: "वीरतर", correct: true },
            { text: "वीरतम", correct: false },
            { text: "वीरों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वीरतर' का प्रयोग दो व्यक्तियों की वीरता की तुलना करने के लिए होता है।"
    },
    {
        question: "'वीरतम' किस विशेषण की अवस्था है?",
        answers: shuffle([
            { text: "मूलावस्था", correct: false },
            { text: "उत्तरावस्था", correct: false },
            { text: "उत्तमावस्था", correct: true },
            { text: "प्रविशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वीरतम' सबसे श्रेष्ठ वीरता का बोध कराता है।"
    },
    {
        question: "'दया' शब्द से बना विशेषण क्या है?",
        answers: shuffle([
            { text: "(a) दयालु", correct: false },
            { text: "(b) दयालुता", correct: false },
            { text: "(c) दयावान", correct: false },
            { text: "दोनों (a) और (c)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दयालु' और 'दयावान' दोनों ही 'दया' संज्ञा से बने विशेषण हैं।"
    },
    {
        question: "'भूखा' शब्द कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: true },
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भूखा' किसी व्यक्ति की अवस्था (दशा) बता रहा है।"
    },
    {
        question: "'आठवाँ' कौन सा संख्यावाचक विशेषण है?",
        answers: shuffle([
            { text: "गणवाचक", correct: false },
            { text: "क्रमवाचक", correct: true },
            { text: "समुदायवाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आठवाँ' क्रम का बोध करा रहा है।"
    },
    {
        question: "'दो गुना' कौन सा संख्यावाचक विशेषण है?",
        answers: shuffle([
            { text: "गणवाचक", correct: false },
            { text: "क्रमवाचक", correct: false },
            { text: "समुदायवाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दो गुना' आवृत्ति का बोध कराता है।"
    },
    {
        question: "'सबसे लंबा' किस विशेषण की अवस्था है?",
        answers: shuffle([
            { text: "मूलावस्था", correct: false },
            { text: "उत्तरावस्था", correct: false },
            { text: "उत्तमावस्था", correct: true },
            { text: "प्रविशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सबसे लंबा' सबसे श्रेष्ठ लंबाई का बोध करा रहा है।"
    },
    {
        question: "'यह लड़का उस लड़के से अच्छा है।' इस वाक्य में 'अच्छा' कौन सी अवस्था में है?",
        answers: shuffle([
            { text: "मूलावस्था", correct: false },
            { text: "उत्तरावस्था", correct: true },
            { text: "उत्तमावस्था", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो लड़कों की तुलना हो रही है, इसलिए यह उत्तरावस्था है।"
    },
    {
        question: "'यह सबसे अच्छा लड़का है।' इस वाक्य में 'अच्छा' कौन सी अवस्था में है?",
        answers: shuffle([
            { text: "मूलावस्था", correct: false },
            { text: "उत्तरावस्था", correct: false },
            { text: "उत्तमावस्था", correct: true },
            { text: "प्रविशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक की तुलना सभी से हो रही है, इसलिए यह उत्तमावस्था है।"
    },
    {
        question: "'लंबा' शब्द से बनी भाववाचक संज्ञा क्या है?",
        answers: shuffle([
            { text: "लम्बाई", correct: true },
            { text: "लंबापन", correct: false },
            { text: "लम्बत्व", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लम्बाई' 'लंबा' विशेषण से बनी भाववाचक संज्ञा है।"
    },
    {
        question: "'मानव' शब्द से बना विशेषण क्या है?",
        answers: shuffle([
            { text: "मानवी", correct: false },
            { text: "मानव", correct: false },
            { text: "मानवीय", correct: true },
            { text: "मनुष्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मानवीय' 'मानव' संज्ञा से बना विशेषण है।"
    },
    {
        question: "'प्यासा' शब्द कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: true },
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्यासा' किसी की अवस्था (दशा) बता रहा है।"
    },
    {
        question: "'रोगी' शब्द में कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: true },
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रोगी' किसी की दशा बता रहा है।"
    },
    {
        question: "'नया' शब्द कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: true },
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नया' किसी वस्तु की अवस्था का बोध करा रहा है।"
    },
    {
        question: "'नमक' शब्द से बना विशेषण क्या है?",
        answers: shuffle([
            { text: "नमकीन", correct: true },
            { text: "नमकीना", correct: false },
            { text: "नमकीनपन", correct: false },
            { text: "नमक वाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नमकीन' 'नमक' संज्ञा से बना विशेषण है।"
    },
    {
        question: "'प्यार' शब्द से बना विशेषण क्या है?",
        answers: shuffle([
            { text: "प्यारा", correct: true },
            { text: "प्यार", correct: false },
            { text: "प्यारी", correct: false },
            { text: "प्रिय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्यारा' 'प्यार' भाववाचक संज्ञा से बना विशेषण है।"
    },
    {
        question: "'चालाक' शब्द कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: true },
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चालाक' किसी व्यक्ति के गुण का बोध कराता है।"
    },
    {
        question: "'वह मोटा है।' इस वाक्य में 'मोटा' क्या है?",
        answers: shuffle([
            { text: "विशेष्य", correct: false },
            { text: "विशेषण", correct: true },
            { text: "क्रिया", correct: false },
            { text: "सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मोटा' 'वह' सर्वनाम की विशेषता बता रहा है।"
    },
    {
        question: "'नया' शब्द कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: true },
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नया' किसी वस्तु की अवस्था का बोध करा रहा है।"
    },
    {
        question: "'दसवाँ' कौन सा संख्यावाचक विशेषण है?",
        answers: shuffle([
            { text: "गणवाचक", correct: false },
            { text: "क्रमवाचक", correct: true },
            { text: "समुदायवाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दसवाँ' क्रम का बोध करा रहा है।"
    },
    {
        question: "'हर एक' कौन सा संख्यावाचक विशेषण है?",
        answers: shuffle([
            { text: "गणवाचक", correct: false },
            { text: "क्रमवाचक", correct: false },
            { text: "प्रत्येकबोधक", correct: true },
            { text: "आवृत्तिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर एक' से प्रत्येक व्यक्ति का बोध हो रहा है।"
    },
    {
        question: "'आधा लीटर दूध।' इस वाक्य में 'आधा लीटर' क्या है?",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: false },
            { text: "निश्चित परिमाणवाचक", correct: true },
            { text: "अनिश्चित परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आधा लीटर' दूध की निश्चित मात्रा बता रहा है।"
    },
    {
        question: "'बुद्धिमान' की उत्तरावस्था क्या है?",
        answers: shuffle([
            { text: "बुद्धिमानतम", correct: false },
            { text: "बुद्धिमानतर", correct: false },
            { text: "अधिक बुद्धिमान", correct: true },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधिक बुद्धिमान' का प्रयोग दो की तुलना में होता है।"
    },
    {
        question: "'सबसे लंबा' किस विशेषण की अवस्था है?",
        answers: shuffle([
            { text: "मूलावस्था", correct: false },
            { text: "उत्तरावस्था", correct: false },
            { text: "उत्तमावस्था", correct: true },
            { text: "प्रविशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सबसे लंबा' सबसे श्रेष्ठ लंबाई का बोध करा रहा है।"
    },
    {
        question: "'विशेष्य' का सही उदाहरण है:",
        answers: shuffle([
            { text: "वह अच्छा लड़का है।", correct: true },
            { text: "वह बहुत अच्छा लड़का है।", correct: false },
            { text: "वह बहुत अच्छा है।", correct: false },
            { text: "वह बहुत है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'लड़का' विशेष्य है जिसकी विशेषता 'अच्छा' बता रहा है।"
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