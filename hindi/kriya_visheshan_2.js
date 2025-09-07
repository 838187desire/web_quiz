const questions = [
    {
        topHeading: "क्रिया विशेषण पर आधारित 25 बहुविकल्पीय प्रश्न part 2 (quiz_no.49)"
    },
    {
        question: "'जल्दी' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जल्दी' शब्द क्रिया के होने की रीति का बोध करा रहा है।"
    },
    {
        question: "'परसों' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परसों' शब्द क्रिया के होने के समय का बोध करा रहा है।"
    },
    {
        question: "'आगे' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आगे' शब्द क्रिया के होने के स्थान का बोध करा रहा है।"
    },
    {
        question: "'उतना' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उतना' शब्द क्रिया की मात्रा का बोध करा रहा है।"
    },
    {
        question: "'नीचे' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीचे' शब्द क्रिया के होने के स्थान का बोध करा रहा है।"
    },
    {
        question: "'वह धीरे-धीरे पढ़ता है।' इस वाक्य में 'धीरे-धीरे' शब्द क्या है?",
        answers: shuffle([
            { text: "विशेषण", correct: false },
            { text: "क्रिया", correct: false },
            { text: "क्रियाविशेषण", correct: true },
            { text: "संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धीरे-धीरे' शब्द 'पढ़ता है' क्रिया की विशेषता बता रहा है।"
    },
    {
        question: "'सुबह' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुबह' शब्द क्रिया के होने के समय का बोध करा रहा है।"
    },
    {
        question: "'इधर' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इधर' शब्द क्रिया के होने के स्थान का बोध करा रहा है।"
    },
    {
        question: "'अत्यंत' शब्द कौन सा क्रिया विशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अत्यंत' शब्द क्रिया की मात्रा का बोध करा रहा है।"
    },
    {
        question: "'रात-भर' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रात-भर' शब्द क्रिया के होने की अवधि (समय) का बोध करा रहा है।"
    },
    {
        question: "'ठीक-ठाक' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठीक-ठाक' शब्द क्रिया के होने की रीति का बोध करा रहा है।"
    },
    {
        question: "'पीछे' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पीछे' शब्द क्रिया के होने के स्थान का बोध करा रहा है।"
    },
    {
        question: "'आजकल' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आजकल' शब्द क्रिया के होने के समय का बोध करा रहा है।"
    },
    {
        question: "'बेशक' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बेशक' शब्द क्रिया के होने की रीति या स्वीकृति का बोध करा रहा है।"
    },
    {
        question: "'थोड़ा-थोड़ा' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थोड़ा-थोड़ा' शब्द क्रिया की मात्रा का बोध करा रहा है।"
    },
    {
        question: "'हमेशा' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हमेशा' शब्द क्रिया के होने की निरंतरता (समय) का बोध करा रहा है।"
    },
    {
        question: "'धीरे' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धीरे' शब्द क्रिया के होने की रीति का बोध करा रहा है।"
    },
    {
        question: "'निकट' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निकट' शब्द क्रिया के होने के स्थान का बोध करा रहा है।"
    },
    {
        question: "'ज्यों-ज्यों' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्यों-ज्यों' शब्द क्रिया के होने के समय का बोध करा रहा है।"
    },
    {
        question: "'ऊपर' और 'नीचे' कौन से क्रियाविशेषण हैं?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "रीतिवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों शब्द क्रिया के होने के स्थान का बोध कराते हैं।"
    },
    {
        question: "'जल्दी-जल्दी' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जल्दी-जल्दी' शब्द क्रिया के होने की रीति का बोध करा रहा है।"
    },
    {
        question: "'यहाँ-वहाँ' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "रीतिवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यहाँ-वहाँ' शब्द क्रिया के होने के स्थान का बोध करा रहा है।"
    },
    {
        question: "'कम' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कम' शब्द क्रिया की मात्रा का बोध करा रहा है।"
    },
    {
        question: "'आज' और 'कल' कौन से क्रियाविशेषण हैं?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों शब्द क्रिया के होने के समय का बोध कराते हैं।"
    },
    {
        question: "'चुपचाप' कौन सा क्रिया विशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चुपचाप' शब्द क्रिया के होने की रीति का बोध करा रहा है।"
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