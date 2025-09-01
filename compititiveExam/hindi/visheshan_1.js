const questions = [
    {
        topHeading: "विशेषण पर आधारित 25 बहुविकल्पीय प्रश्न part 1 (quiz_no.44)"
    },
    {
        question: "जो शब्द संज्ञा या सर्वनाम की विशेषता बताते हैं, उन्हें क्या कहते हैं?",
        answers: shuffle([
            { text: "क्रिया", correct: false },
            { text: "विशेषण", correct: true },
            { text: "कारक", correct: false },
            { text: "अव्यय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशेषण वे शब्द होते हैं जो किसी संज्ञा या सर्वनाम शब्द की विशेषता (गुण, दोष, संख्या, मात्रा आदि) बताते हैं।"
    },
    {
        question: "विशेषण के कितने मुख्य भेद होते हैं?",
        answers: shuffle([
            { text: "पाँच", correct: false },
            { text: "तीन", correct: false },
            { text: "छह", correct: false },
            { text: "चार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशेषण के चार मुख्य भेद होते हैं: गुणवाचक, संख्यावाचक, परिमाणवाचक और सार्वनामिक विशेषण।"
    },
    {
        question: "'सुंदर' शब्द किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "संख्यावाचक", correct: false },
            { text: "गुणवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुंदर' शब्द किसी व्यक्ति या वस्तु के गुण का बोध कराता है, इसलिए यह गुणवाचक विशेषण है।"
    },
    {
        question: "'यह घर मेरा है।' इस वाक्य में 'यह' कौन सा विशेषण है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "सार्वनामिक विशेषण", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यह' सर्वनाम शब्द 'घर' संज्ञा से पहले आकर उसकी विशेषता बता रहा है, इसलिए यह सार्वनामिक विशेषण है।"
    },
    {
        question: "जिस विशेषण से संज्ञा या सर्वनाम की संख्या का बोध होता है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "गुणवाचक विशेषण", correct: false },
            { text: "संख्यावाचक विशेषण", correct: true },
            { text: "परिमाणवाचक विशेषण", correct: false },
            { text: "सार्वनामिक विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संख्यावाचक विशेषण से संज्ञा या सर्वनाम की संख्या का बोध होता है।"
    },
    {
        question: "'मेरे पास दो दर्जन केले हैं।' इस वाक्य में 'दो दर्जन' कौन सा विशेषण है?",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: true },
            { text: "अनिश्चित संख्यावाचक", correct: false },
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "अनिश्चित परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दो दर्जन' एक निश्चित संख्या (24) का बोध करा रहा है।"
    },
    {
        question: "'कुछ लोग बैठे हैं।' इस वाक्य में 'कुछ' कौन सा विशेषण है?",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "अनिश्चित परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुछ' से लोगों की निश्चित संख्या का बोध नहीं हो रहा है, इसलिए यह अनिश्चित संख्यावाचक विशेषण है।"
    },
    {
        question: "जिस विशेषण से संज्ञा की मात्रा (माप-तौल) का बोध होता है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "संख्यावाचक विशेषण", correct: false },
            { text: "गुणवाचक विशेषण", correct: false },
            { text: "परिमाणवाचक विशेषण", correct: true },
            { text: "सार्वनामिक विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिमाणवाचक विशेषण मात्रा का बोध कराता है, जैसे - थोड़ा, बहुत, दो किलो।"
    },
    {
        question: "'मुझे दो किलो चीनी चाहिए।' इस वाक्य में 'दो किलो' कौन सा विशेषण है?",
        answers: shuffle([
            { text: "निश्चित परिमाणवाचक", correct: true },
            { text: "अनिश्चित परिमाणवाचक", correct: false },
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दो किलो' चीनी की निश्चित मात्रा बता रहा है।"
    },
    {
        question: "'थोड़ा दूध दे दो।' इस वाक्य में 'थोड़ा' कौन सा विशेषण है?",
        answers: shuffle([
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "अनिश्चित परिमाणवाचक", correct: true },
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "गुणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थोड़ा' से दूध की निश्चित मात्रा का बोध नहीं हो रहा है।"
    },
    {
        question: "'प्रविशेषण' किसे कहते हैं?",
        answers: shuffle([
            { text: "जो विशेषण की विशेषता बताए", correct: true },
            { text: "जो संज्ञा की विशेषता बताए", correct: false },
            { text: "जो क्रिया की विशेषता बताए", correct: false },
            { text: "जो सर्वनाम की विशेषता बताए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जो शब्द विशेषण की विशेषता बताते हैं, उन्हें प्रविशेषण कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे- 'बहुत' अच्छा लड़का।"
    },
    {
        question: "'यह बहुत अच्छा लड़का है।' इस वाक्य में 'बहुत' क्या है?",
        answers: shuffle([
            { text: "विशेषण", correct: false },
            { text: "प्रविशेषण", correct: true },
            { text: "क्रियाविशेषण", correct: false },
            { text: "संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहुत' शब्द 'अच्छा' विशेषण की विशेषता बता रहा है, इसलिए यह प्रविशेषण है।"
    },
    {
        question: "विशेषण की तीन अवस्थाएँ कौन-सी हैं?",
        answers: shuffle([
            { text: "मूलावस्था, उत्तरावस्था, उत्तमावस्था", correct: true },
            { text: "सामान्य, तुलनात्मक, सर्वश्रेष्ठ", correct: false },
            { text: "प्रथम, द्वितीय, तृतीय", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये विशेषणों की तुलना की तीन अवस्थाएँ हैं।"
    },
    {
        question: "'सुंदर' की उत्तरावस्था क्या है?",
        answers: shuffle([
            { text: "सुंदरतम", correct: false },
            { text: "सुंदरतर", correct: true },
            { text: "सुंदरता", correct: false },
            { text: "अधिक सुंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुंदरतर' दो की तुलना में प्रयोग होता है, जो उत्तरावस्था है।"
    },
    {
        question: "'सबसे अच्छा' किस विशेषण की अवस्था है?",
        answers: shuffle([
            { text: "मूलावस्था", correct: false },
            { text: "उत्तरावस्था", correct: false },
            { text: "उत्तमावस्था", correct: true },
            { text: "प्रविशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सबसे अच्छा' सबसे श्रेष्ठ का बोध कराता है, जो उत्तमावस्था है।"
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
        question: "'दयालु' शब्द से बनी भाववाचक संज्ञा क्या है?",
        answers: shuffle([
            { text: "दया", correct: false },
            { text: "दयापन", correct: false },
            { text: "दयालुता", correct: true },
            { text: "दयाशील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दयालुता' 'दयालु' विशेषण से बनी भाववाचक संज्ञा है।"
    },
    {
        question: "'छोटा' शब्द की उत्तमावस्था क्या है?",
        answers: shuffle([
            { text: "छोटातम", correct: false },
            { text: "छोटातर", correct: false },
            { text: "सबसे छोटा", correct: true },
            { text: "दोनों (a) और (c)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सबसे छोटा' का प्रयोग सबसे निम्न अवस्था को दर्शाने के लिए होता है।"
    },
    {
        question: "'गरीब' शब्द से बना विशेषण क्या है?",
        answers: shuffle([
            { text: "गरीब", correct: true },
            { text: "गरीबी", correct: false },
            { text: "गरीबपन", correct: false },
            { text: "गरीबियत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरीब' स्वयं एक विशेषण है जो किसी की आर्थिक स्थिति बताता है।"
    },
    {
        question: "'भारतीय' शब्द में कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक विशेषण", correct: false },
            { text: "व्यक्तिवाचक विशेषण", correct: true },
            { text: "सार्वनामिक विशेषण", correct: false },
            { text: "संख्यावाचक विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भारतीय' शब्द 'भारत' व्यक्तिवाचक संज्ञा से बना है और किसी व्यक्ति की राष्ट्रीयता बता रहा है।"
    },
    {
        question: "'यह लड़का ईमानदार है।' इस वाक्य में 'ईमानदार' क्या है?",
        answers: shuffle([
            { text: "विशेषण", correct: true },
            { text: "प्रविशेषण", correct: false },
            { text: "क्रिया", correct: false },
            { text: "संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ईमानदार' शब्द 'लड़का' के गुण का बोध करा रहा है, इसलिए यह विशेषण है।"
    },
    {
        question: "'सफेद' शब्द कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक विशेषण", correct: true },
            { text: "संख्यावाचक विशेषण", correct: false },
            { text: "परिमाणवाचक विशेषण", correct: false },
            { text: "सार्वनामिक विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सफेद' रंग का बोध करा रहा है।"
    },
    {
        question: "'पच्चीस' किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "अनिश्चित संख्यावाचक", correct: false },
            { text: "निश्चित संख्यावाचक", correct: true },
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "अनिश्चित परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पच्चीस' एक निश्चित संख्या है।"
    },
    {
        question: "'मुझे थोड़ा पानी चाहिए।' इस वाक्य में 'थोड़ा' क्या है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: false },
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: true },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थोड़ा' पानी की मात्रा (माप) बता रहा है।"
    },
    {
        question: "'यह बच्चा रो रहा है।' इस वाक्य में 'यह' कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: false },
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "सार्वनामिक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यह' सर्वनाम शब्द 'बच्चा' संज्ञा से पहले आकर उसकी विशेषता बता रहा है।"
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