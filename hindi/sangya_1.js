const questions = [
    {
        topHeading: "संज्ञा पर आधारित 25 बहुविकल्पीय प्रश्न part 1 (quiz_no.40)"
    },
    {
        question: "संज्ञा किसे कहते हैं?",
        answers: shuffle([
            { text: "किसी काम के करने या होने को", correct: false },
            { text: "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को", correct: true },
            { text: "जिन शब्दों का प्रयोग संज्ञा के स्थान पर होता है", correct: false },
            { text: "जो शब्द संज्ञा और सर्वनाम की विशेषता बताते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संज्ञा वह विकारी शब्द है, जिससे किसी व्यक्ति, वस्तु, स्थान, भाव या प्राणी के नाम का बोध होता है।"
    },
    {
        question: "'रामायण' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रामायण' एक विशेष ग्रंथ का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द भाववाचक संज्ञा है?",
        answers: shuffle([
            { text: "ममता", correct: true },
            { text: "गंगा", correct: false },
            { text: "पहाड़", correct: false },
            { text: "गाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ममता' एक भाव या गुण का नाम है, जिसे महसूस किया जा सकता है, इसलिए यह भाववाचक संज्ञा है।"
    },
    {
        question: "जिस संज्ञा से किसी जाति के संपूर्ण पदार्थों का बोध होता है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जातिवाचक संज्ञा से किसी वर्ग या जाति के सभी व्यक्तियों, वस्तुओं या स्थानों का बोध होता है।"
    },
    {
        question: "'मिठास' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "द्रव्यवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिठास' 'मीठा' विशेषण से बनी भाववाचक संज्ञा है, जो एक गुण को दर्शाती है।"
    },
    {
        question: "'लड़का' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़का' शब्द सभी लड़कों की जाति का बोध कराता है।"
    },
    {
        question: "भाववाचक संज्ञा को पहचानिए:",
        answers: shuffle([
            { text: "किताब", correct: false },
            { text: "दया", correct: true },
            { text: "भारत", correct: false },
            { text: "मेज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दया' एक भाव है, जिसे महसूस किया जा सकता है, इसलिए यह भाववाचक संज्ञा है।"
    },
    {
        question: "'पर्वत' शब्द किस प्रकार की संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समुदायवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पर्वत' शब्द सभी पर्वतों की जाति का बोध कराता है, जैसे हिमालय, विंध्य आदि।"
    },
    {
        question: "'भीड़' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भीड़' व्यक्तियों के समूह को दर्शाती है।"
    },
    {
        question: "'द्रव्यवाचक संज्ञा' का उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "पानी", correct: false },
            { text: "गेहूँ", correct: false },
            { text: "सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यवाचक संज्ञाएँ वे होती हैं जिन्हें मापा या तोला जा सके, जैसे धातु, पदार्थ या खाने-पीने की वस्तुएँ।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सोना', 'पानी' और 'गेहूँ' सभी इसी श्रेणी में आते हैं।"
    },
    {
        question: "'समूहवाचक संज्ञा' का उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "सेना", correct: true },
            { text: "स्कूल", correct: false },
            { text: "पानी", correct: false },
            { text: "शहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सेना' सैनिकों के समूह का बोध कराती है, इसलिए यह समूहवाचक संज्ञा है।"
    },
    {
        question: "'महान' शब्द से बनी भाववाचक संज्ञा है:",
        answers: shuffle([
            { text: "महानता", correct: true },
            { text: "महादेव", correct: false },
            { text: "महासागर", correct: false },
            { text: "महारानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महानता' 'महान' विशेषण से बनी भाववाचक संज्ञा है, जो 'महान' होने के गुण को व्यक्त करती है।"
    },
    {
        question: "'क्रोध' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्रोध' एक भाव है जिसे महसूस किया जा सकता है।"
    },
    {
        question: "'गंगा' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गंगा' एक विशेष नदी का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "'पंडित' शब्द से बनी भाववाचक संज्ञा है:",
        answers: shuffle([
            { text: "पाण्डित्य", correct: true },
            { text: "पंडितई", correct: false },
            { text: "पंडिता", correct: false },
            { text: "पंक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाण्डित्य' 'पंडित' जातिवाचक संज्ञा से बनी भाववाचक संज्ञा है, जो विद्वत्ता का भाव दर्शाती है।"
    },
    {
        question: "'लड़ाई' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़ाई' 'लड़ना' क्रिया से बनी भाववाचक संज्ञा है, जो एक अमूर्त अवधारणा है।"
    },
    {
        question: "'बुढ़ापा' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुढ़ापा' एक अवस्था है, इसलिए यह भाववाचक संज्ञा है।"
    },
    {
        question: "'शिशु' शब्द से बनी भाववाचक संज्ञा है:",
        answers: shuffle([
            { text: "शिशुता", correct: true },
            { text: "शिशुत्", correct: false },
            { text: "बच्चा", correct: false },
            { text: "शिशुताई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिशुता' 'शिशु' जातिवाचक संज्ञा से बनी भाववाचक संज्ञा है।"
    },
    {
        question: "'अध्यापक' शब्द कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्यापक' शब्द सभी अध्यापकों की जाति का बोध कराता है।"
    },
    {
        question: "'जवानी' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जवानी' एक अवस्था है, इसलिए यह भाववाचक संज्ञा है।"
    },
    {
        question: "'कोयला' शब्द कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोयला' एक पदार्थ है जिसे मापा या तोला जा सकता है।"
    },
    {
        question: "'ईमानदारी' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ईमानदारी' एक गुण है जिसे महसूस किया जा सकता है।"
    },
    {
        question: "'किसान' शब्द कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किसान' शब्द सभी किसानों की जाति का बोध कराता है।"
    },
    {
        question: "'अहंकार' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अहंकार' एक भाव है, जिसे महसूस किया जा सकता है।"
    },
    {
        question: "'गुलाब' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुलाब' शब्द सभी गुलाबों की जाति का बोध कराता है।"
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