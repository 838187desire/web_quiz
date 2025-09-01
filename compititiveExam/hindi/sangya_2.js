const questions = [
    {
        topHeading: "संज्ञा पर आधारित 25 बहुविकल्पीय प्रश्न part 2 (quiz_no.41)"
    },
    {
        question: "'मानव' शब्द से बनी भाववाचक संज्ञा है:",
        answers: shuffle([
            { text: "मानवता", correct: true },
            { text: "मनुष्य", correct: false },
            { text: "मनुष्यता", correct: false },
            { text: "आदमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मानवता' 'मानव' जातिवाचक संज्ञा से बनी भाववाचक संज्ञा है।"
    },
    {
        question: "'झुंड' शब्द कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true },
            { text: "व्यक्तिवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झुंड' किसी समूह को दर्शाता है।"
    },
    {
        question: "'लड़की' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़की' शब्द सभी लड़कियों की जाति का बोध कराता है।"
    },
    {
        question: "'दिल्ली' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिल्ली' एक विशेष शहर का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "'चांदी' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चांदी' एक धातु का नाम है जिसे मापा या तोला जा सकता है।"
    },
    {
        question: "'कमरा' शब्द कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमरा' शब्द सभी कमरों की जाति का बोध कराता है।"
    },
    {
        question: "'ताजमहल' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ताजमहल' एक विशेष इमारत का नाम है।"
    },
    {
        question: "'गरीब' शब्द से बनी भाववाचक संज्ञा है:",
        answers: shuffle([
            { text: "गरीबी", correct: true },
            { text: "गरीबों", correct: false },
            { text: "गरीबियत", correct: false },
            { text: "गरीबपना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरीबी' 'गरीब' विशेषण से बनी भाववाचक संज्ञा है, जो एक अवस्था को व्यक्त करती है।"
    },
    {
        question: "'कुर्सी' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुर्सी' शब्द सभी कुर्सियों की जाति का बोध कराता है।"
    },
    {
        question: "'पुस्तक' शब्द कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुस्तक' शब्द सभी पुस्तकों की जाति का बोध कराता है।"
    },
    {
        question: "'अध्यापन' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्यापन' एक क्रिया से बनी भाववाचक संज्ञा है, जो एक भाव को दर्शाती है।"
    },
    {
        question: "'भारत' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भारत' एक विशेष देश का नाम है।"
    },
    {
        question: "'सोना' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोना' एक धातु का नाम है जिसे मापा या तोला जा सकता है।"
    },
    {
        question: "'बचपन' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बचपन' एक अवस्था है, इसलिए यह भाववाचक संज्ञा है।"
    },
    {
        question: "'शत्रुता' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शत्रुता' एक भाव है, जिसे महसूस किया जा सकता है।"
    },
    {
        question: "'शिक्षक' शब्द कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिक्षक' शब्द सभी शिक्षकों की जाति का बोध कराता है।"
    },
    {
        question: "'सच्चाई' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सच्चाई' एक गुण या भाव है, जिसे महसूस किया जा सकता है।"
    },
    {
        question: "'सेना' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true },
            { text: "व्यक्तिवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सेना' सैनिकों के समूह को दर्शाती है।"
    },
    {
        question: "'मिठाई' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिठाई' शब्द सभी प्रकार की मिठाइयों की जाति का बोध कराता है।"
    },
    {
        question: "'कक्षा' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कक्षा' विद्यार्थियों के समूह को दर्शाती है।"
    },
    {
        question: "'अनाज' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनाज' एक पदार्थ का नाम है जिसे मापा या तोला जा सकता है।"
    },
    {
        question: "'गाय' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गाय' शब्द सभी गायों की जाति का बोध कराता है।"
    },
    {
        question: "'बुराई' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुराई' एक गुण या भाव है जिसे महसूस किया जा सकता है।"
    },
    {
        question: "'अरावली' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अरावली' एक विशेष पर्वतमाला का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "'चतुराई' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुराई' एक गुण या भाव है जिसे महसूस किया जा सकता है।"
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