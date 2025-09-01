const questions = [
    {
        topHeading: "क्रिया विशेषण पर आधारित 25 बहुविकल्पीय प्रश्न part 1 (quiz_no.48)"
    },
    {
        question: "क्रियाविशेषण किसे कहते हैं?",
        answers: shuffle([
            { text: "जो शब्द संज्ञा या सर्वनाम की विशेषता बताते हैं", correct: false },
            { text: "जो शब्द क्रिया की विशेषता बताते हैं", correct: true },
            { text: "जो शब्द संज्ञा के स्थान पर प्रयोग होते हैं", correct: false },
            { text: "जो शब्द दो शब्दों या वाक्यों को जोड़ते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिया विशेषण वह अविकारी शब्द है जो क्रिया के होने की रीति, स्थान, काल या मात्रा का बोध कराता है।"
    },
    {
        question: "क्रियाविशेषण के कितने भेद होते हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिया विशेषण के चार भेद होते हैं: कालवाचक, स्थानवाचक, रीतिवाचक और परिमाणवाचक।"
    },
    {
        question: "जिस क्रियाविशेषण से क्रिया के होने के समय का बोध हो, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "रीतिवाचक क्रियाविशेषण", correct: false },
            { text: "कालवाचक क्रियाविशेषण", correct: true },
            { text: "स्थानवाचक क्रियाविशेषण", correct: false },
            { text: "परिमाणवाचक क्रियाविशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कब' प्रश्न का उत्तर देने वाले शब्द कालवाचक क्रियाविशेषण कहलाते हैं, जैसे- आज, कल, अभी।"
    },
    {
        question: "'वह अभी गया है।' इस वाक्य में 'अभी' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभी' शब्द क्रिया के होने के समय का बोध करा रहा है।"
    },
    {
        question: "जिस क्रियाविशेषण से क्रिया के होने के स्थान का बोध हो, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "रीतिवाचक क्रियाविशेषण", correct: false },
            { text: "कालवाचक क्रियाविशेषण", correct: false },
            { text: "स्थानवाचक क्रियाविशेषण", correct: true },
            { text: "परिमाणवाचक क्रियाविशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कहाँ' प्रश्न का उत्तर देने वाले शब्द स्थानवाचक क्रियाविशेषण कहलाते हैं, जैसे- यहाँ, वहाँ, ऊपर, नीचे।"
    },
    {
        question: "'वह बाहर बैठा है।' इस वाक्य में 'बाहर' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाहर' शब्द क्रिया के होने के स्थान का बोध करा रहा है।"
    },
    {
        question: "जिस क्रियाविशेषण से क्रिया के होने की रीति या विधि का बोध हो, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "रीतिवाचक क्रियाविशेषण", correct: true },
            { text: "कालवाचक क्रियाविशेषण", correct: false },
            { text: "स्थानवाचक क्रियाविशेषण", correct: false },
            { text: "परिमाणवाचक क्रियाविशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कैसे' प्रश्न का उत्तर देने वाले शब्द रीतिवाचक क्रियाविशेषण कहलाते हैं, जैसे- धीरे-धीरे, जल्दी, सहसा।"
    },
    {
        question: "'वह धीरे-धीरे चलता है।' इस वाक्य में 'धीरे-धीरे' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धीरे-धीरे' शब्द क्रिया के होने की रीति का बोध करा रहा है।"
    },
    {
        question: "जिस क्रियाविशेषण से क्रिया की मात्रा या परिमाण का बोध हो, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "रीतिवाचक क्रियाविशेषण", correct: false },
            { text: "कालवाचक क्रियाविशेषण", correct: false },
            { text: "स्थानवाचक क्रियाविशेषण", correct: false },
            { text: "परिमाणवाचक क्रियाविशेषण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कितना' प्रश्न का उत्तर देने वाले शब्द परिमाणवाचक क्रियाविशेषण कहलाते हैं, जैसे- बहुत, थोड़ा, इतना।"
    },
    {
        question: "'वह बहुत पढ़ता है।' इस वाक्य में 'बहुत' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहुत' शब्द क्रिया की मात्रा का बोध करा रहा है।"
    },
    {
        question: "'मैं अभी-अभी आया हूँ।' इस वाक्य में 'अभी-अभी' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभी-अभी' शब्द क्रिया के होने के समय का बोध करा रहा है।"
    },
    {
        question: "'वह यहाँ आ रहा है।' इस वाक्य में 'यहाँ' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यहाँ' शब्द क्रिया के होने के स्थान का बोध करा रहा है।"
    },
    {
        question: "'उसने मुझे भली-भाँति समझाया।' इस वाक्य में 'भली-भाँति' कौन सा क्रिया विशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भली-भाँति' शब्द क्रिया के होने की रीति का बोध करा रहा है।"
    },
    {
        question: "'अधिकारी बहुत थोड़ा बोलते हैं।' इस वाक्य में 'थोड़ा' कौन सा क्रिया विशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थोड़ा' शब्द क्रिया की मात्रा का बोध करा रहा है।"
    },
    {
        question: "'अव्यय' के कितने भेद होते हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अव्यय के चार भेद होते हैं: क्रियाविशेषण, संबंधबोधक, समुच्चयबोधक और विस्मयादिबोधक।"
    },
    {
        question: "'क्रियाविशेषण' क्या है?",
        answers: shuffle([
            { text: "विकारी शब्द", correct: false },
            { text: "अविकारी शब्द", correct: true },
            { text: "दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिया विशेषण पर लिंग, वचन, कारक आदि का कोई प्रभाव नहीं पड़ता, इसलिए यह अविकारी शब्द है।"
    },
    {
        question: "'वह अचानक आ गया।' इस वाक्य में 'अचानक' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अचानक' शब्द क्रिया के होने की रीति का बोध करा रहा है।"
    },
    {
        question: "'मैं प्रतिदिन पढ़ता हूँ।' इस वाक्य में 'प्रतिदिन' कौन सा क्रिया विशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रतिदिन' शब्द क्रिया के होने के समय का बोध करा रहा है।"
    },
    {
        question: "'ऊपर' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऊपर' शब्द क्रिया के होने के स्थान का बोध करा रहा है।"
    },
    {
        question: "'मैं बहुत कम खाता हूँ।' इस वाक्य में 'कम' कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कम' शब्द क्रिया की मात्रा का बोध करा रहा है।"
    },
    {
        question: "'वह तेज दौड़ता है।' इस वाक्य में 'तेज' कौन सा क्रिया विशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तेज' शब्द क्रिया के होने की रीति का बोध करा रहा है।"
    },
    {
        question: "'वहाँ' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वहाँ' शब्द क्रिया के होने के स्थान का बोध करा रहा है।"
    },
    {
        question: "'आज' शब्द कौन सा क्रियाविशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आज' शब्द क्रिया के होने के समय का बोध करा रहा है।"
    },
    {
        question: "'अत्यधिक' शब्द कौन सा क्रिया विशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अत्यधिक' शब्द क्रिया की मात्रा का बोध करा रहा है।"
    },
    {
        question: "'बाहर' शब्द किस प्रकार का अव्यय है?",
        answers: shuffle([
            { text: "संबंधबोधक", correct: false },
            { text: "समुच्चयबोधक", correct: false },
            { text: "क्रियाविशेषण", correct: true },
            { text: "विस्मयादिबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाहर' शब्द क्रिया के होने के स्थान का बोध करा रहा है, इसलिए यह क्रियाविशेषण है।"
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