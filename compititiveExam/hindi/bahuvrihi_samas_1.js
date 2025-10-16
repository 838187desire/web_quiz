const questions = [
    {
        topHeading: "बहुव्रीहि समास पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'दशानन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "बहुव्रीहि समास", correct: true },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'दश हैं आनन (मुख) जिसके' होता है, अर्थात् रावण।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ दोनों पद मिलकर किसी तीसरे पद की ओर संकेत कर रहे हैं।"
    },
    {
        question: "प्रश्न 2. 'नीलकंठ' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: false },
            { text: "बहुव्रीहि समास", correct: true },
            { text: "अव्ययीभाव समास", correct: false },
            { text: "द्वंद्व समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'नीला है कंठ जिसका' होता है, अर्थात् शिव।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों पद मिलकर एक विशेष अर्थ (शिव) प्रकट कर रहे हैं।"
    },
    {
        question: "प्रश्न 3. 'चक्रपाणि' का सही विग्रह क्या है?",
        answers: shuffle([
            { text: "चक्र और पाणि", correct: false },
            { text: "चक्र है पाणि में", correct: false },
            { text: "चक्र है पाणि (हाथ) में जिसके", correct: true },
            { text: "चक्र जैसा पाणि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विग्रह भगवान विष्णु की ओर संकेत करता है, क्योंकि वे ही हाथ में चक्र धारण करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह बहुव्रीहि समास है।"
    },
    {
        question: "प्रश्न 4. 'लंबोदर' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष समास", correct: false },
            { text: "बहुव्रीहि समास", correct: true },
            { text: "कर्मधारय समास", correct: false },
            { text: "द्विगु समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'लंबा है उदर (पेट) जिसका' होता है, अर्थात् गणेश।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ दोनों पद प्रधान न होकर तीसरा पद (गणेश) प्रधान है।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से कौन सा शब्द बहुव्रीहि समास का उदाहरण है?",
        answers: shuffle([
            { text: "त्रिभुवन", correct: false },
            { text: "दशानन", correct: true },
            { text: "नवरात्र", correct: false },
            { text: "त्रिलोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशानन' का अर्थ 'रावण' है, जो एक तीसरा अर्थ है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्प द्विगु समास के उदाहरण हैं क्योंकि उनका पहला पद संख्यावाची है और वे समूह का बोध कराते हैं।"
    },
    {
        question: "प्रश्न 6. 'पीतांबर' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: false },
            { text: "बहुव्रीहि समास", correct: true },
            { text: "तत्पुरुष समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'पीत (पीले) हैं अंबर (वस्त्र) जिसके' होता है, अर्थात् कृष्ण या विष्णु।<br><br><i class='fa-solid fa-angles-right icon'></i> जब यह किसी विशेष व्यक्ति के लिए रूढ़ हो जाए, तो बहुव्रीहि होता है।"
    },
    {
        question: "प्रश्न 7. 'त्रिलोचन' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु समास", correct: false },
            { text: "द्वंद्व समास", correct: false },
            { text: "बहुव्रीहि समास", correct: true },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'तीन हैं लोचन (आँखें) जिसके' होता है, अर्थात् शिव।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक तीसरा विशेष अर्थ दे रहा है।"
    },
    {
        question: "प्रश्न 8. 'वीणापाणि' का समास विग्रह है-",
        answers: shuffle([
            { text: "वीणा और पाणि", correct: false },
            { text: "वीणा है पाणि में जिसके", correct: true },
            { text: "वीणा का पाणि", correct: false },
            { text: "पाणि में वीणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विग्रह देवी सरस्वती की ओर संकेत करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह बहुव्रीहि समास का उदाहरण है।"
    },
    {
        question: "प्रश्न 9. 'मुरलीधर' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: true },
            { text: "कर्मधारय समास", correct: false },
            { text: "द्विगु समास", correct: false },
            { text: "द्वंद्व समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'मुरली को धारण करने वाला' होता है, अर्थात् कृष्ण।"
    },
    {
        question: "प्रश्न 10. 'गजानन' शब्द में समास है-",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'गज के समान आनन है जिसका' होता है, अर्थात् गणेश।"
    },
    {
        question: "प्रश्न 11. 'चतुर्भुज' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: false },
            { text: "बहुव्रीहि समास", correct: true },
            { text: "तत्पुरुष समास", correct: false },
            { text: "द्विगु समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'चार हैं भुजाएँ जिसकी' होता है, अर्थात् विष्णु।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि यह केवल चार भुजाओं का समूह बताता तो द्विगु होता, पर यहाँ एक विशेष अर्थ है।"
    },
    {
        question: "प्रश्न 12. 'घनश्याम' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'घन के समान श्याम हैं जो' होता है, अर्थात् कृष्ण।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कृष्ण के लिए रूढ़ हो गया है, अतः बहुव्रीहि समास है।"
    },
    {
        question: "प्रश्न 13. 'पुंडरीकाक्ष' का विग्रह है-",
        answers: shuffle([
            { text: "पुंडरीक और अक्ष", correct: false },
            { text: "पुंडरीक जैसा अक्ष", correct: false },
            { text: "पुंडरीक (कमल) के समान हैं अक्षि (आँखें) जिसके", correct: true },
            { text: "पुंडरीक पर अक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भगवान विष्णु की ओर संकेत करता है, अतः यह बहुव्रीहि समास है।"
    },
    {
        question: "प्रश्न 14. 'पतझड़' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: true },
            { text: "तत्पुरुष समास", correct: false },
            { text: "द्विगु समास", correct: false },
            { text: "कर्मधारय समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'झड़ते हैं पत्ते जिसमें' होता है, अर्थात् एक विशेष ऋतु।"
    },
    {
        question: "प्रश्न 15. 'मृत्युंजय' में प्रयुक्त समास है-",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'मृत्यु को जीतने वाला' होता है, अर्थात् शिव।"
    },
    {
        question: "प्रश्न 16. 'दिगंबर' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "दिशा और अंबर", correct: false },
            { text: "दिशा ही है अंबर", correct: false },
            { text: "दिशाएँ ही हैं वस्त्र जिसके", correct: true },
            { text: "दिशा का अंबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विग्रह शिव या नग्न साधुओं की ओर संकेत करता है, अतः यह बहुव्रीहि समास है।"
    },
    {
        question: "प्रश्न 17. 'अधर्म' में नञ् तत्पुरुष के अलावा कौन सा समास हो सकता है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'नहीं है धर्म जिसमें' अर्थात् 'अधर्मी व्यक्ति' के रूप में करने पर यह बहुव्रीहि समास हो सकता है।"
    },
    {
        question: "प्रश्न 18. 'पंकज' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: true },
            { text: "द्विगु समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'पंक (कीचड़) में जन्म लेता है जो' होता है, अर्थात् कमल।"
    },
    {
        question: "प्रश्न 19. 'गिरीधर' का विग्रह होगा-",
        answers: shuffle([
            { text: "गिरी और धर", correct: false },
            { text: "गिरी को धारण करने वाला", correct: false },
            { text: "गिरी को धारण किया है जिसने", correct: true },
            { text: "गिरी जैसा धर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विग्रह कृष्ण की ओर संकेत करता है, जिन्होंने गोवर्धन पर्वत को धारण किया था।"
    },
    {
        question: "प्रश्न 20. 'अजातशत्रु' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष समास", correct: false },
            { text: "द्वंद्व समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "बहुव्रीहि समास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'नहीं पैदा हुआ है शत्रु जिसका' होता है, अर्थात् एक विशेष व्यक्ति।"
    },
    {
        question: "प्रश्न 21. 'कपीश्वर' शब्द में समास है-",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कपियों के ईश्वर हैं जो' होता है, अर्थात् हनुमान या सुग्रीव।"
    },
    {
        question: "प्रश्न 22. 'बारहसिंगा' का सही विग्रह है-",
        answers: shuffle([
            { text: "बारह और सिंगा", correct: false },
            { text: "बारह हैं सींग", correct: false },
            { text: "बारह हैं सींग जिसके", correct: true },
            { text: "बारह सींगों का समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक विशेष प्रकार के हिरण की ओर संकेत करता है, अतः यह बहुव्रीहि समास है।"
    },
    {
        question: "प्रश्न 23. 'पशुपति' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: false },
            { text: "द्विगु समास", correct: false },
            { text: "बहुव्रीहि समास", correct: true },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'पशुओं के पति (स्वामी) हैं जो' होता है, अर्थात् शिव।"
    },
    {
        question: "प्रश्न 24. 'एकदंत' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: true },
            { text: "कर्मधारय समास", correct: false },
            { text: "द्विगु समास", correct: false },
            { text: "द्वंद्व समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'एक है दंत जिसका' होता है, अर्थात् गणेश।"
    },
    {
        question: "प्रश्न 25. 'मनोज' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'मन में जन्म लेता है जो' होता है, अर्थात् कामदेव।"
    },
    {
        question: "प्रश्न 26. 'वज्रपाणि' में समास है-",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'वज्र है पाणि (हाथ) में जिसके' होता है, अर्थात् इंद्र।"
    },
    {
        question: "प्रश्न 27. 'आशुतोष' में कौन सा समास होगा?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: true },
            { text: "कर्मधारय समास", correct: false },
            { text: "तत्पुरुष समास", correct: false },
            { text: "द्विगु समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'आशु (शीघ्र) तुष्ट (प्रसन्न) हो जाते हैं जो' होता है, अर्थात् शिव।"
    },
    {
        question: "प्रश्न 28. 'सुलोचना' का विग्रह है-",
        answers: shuffle([
            { text: "सुंदर और लोचन", correct: false },
            { text: "सुंदर हैं लोचन", correct: false },
            { text: "सुंदर हैं लोचन जिसके", correct: true },
            { text: "लोचन की सुंदरता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक विशेष स्त्री (जैसे मेघनाद की पत्नी) के लिए प्रयुक्त होता है, अतः बहुव्रीहि समास है।"
    },
    {
        question: "प्रश्न 29. 'श्वेतांबरी' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: true },
            { text: "कर्मधारय समास", correct: false },
            { text: "द्वंद्व समास", correct: false },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'श्वेत हैं अंबर (वस्त्र) जिसके' होता है, अर्थात् सरस्वती।"
    },
    {
        question: "प्रश्न 30. 'विषधर' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'विष को धारण करने वाला' होता है, अर्थात् साँप या शिव।"
    },
    {
        question: "प्रश्न 31. 'हलधर' का विग्रह क्या होगा?",
        answers: shuffle([
            { text: "हल और धर", correct: false },
            { text: "हल को धारण करने वाला", correct: false },
            { text: "हल को धारण किया है जिसने", correct: true },
            { text: "हल के लिए धर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विग्रह बलराम की ओर संकेत करता है, अतः यह बहुव्रीहि समास है।"
    },
    {
        question: "प्रश्न 32. 'सपरिवार' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: true },
            { text: "द्विगु समास", correct: false },
            { text: "द्वंद्व समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'परिवार के साथ है जो' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सह बहुव्रीहि का उदाहरण है।"
    },
    {
        question: "प्रश्न 33. 'चतुरानन' शब्द का समास है-",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'चार हैं आनन जिसके' होता है, अर्थात् ब्रह्मा।"
    },
    {
        question: "प्रश्न 34. 'पद्मासना' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'पद्म (कमल) है आसन जिसका' होता है, अर्थात् लक्ष्मी या सरस्वती।"
    },
    {
        question: "प्रश्न 35. 'खगेश' का विग्रह है-",
        answers: shuffle([
            { text: "खग और ईश", correct: false },
            { text: "खगों का ईश", correct: false },
            { text: "खगों का है जो ईश", correct: true },
            { text: "खग में ईश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका अर्थ 'पक्षियों का राजा' अर्थात् गरुड़ होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह बहुव्रीहि है।"
    },
    {
        question: "प्रश्न 36. 'शूलपाणि' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: true },
            { text: "तत्पुरुष समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "द्वंद्व समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'शूल है पाणि (हाथ) में जिसके' होता है, अर्थात् शिव।"
    },
    {
        question: "प्रश्न 37. 'वाग्देवी' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'वाक् (वाणी) की देवी हैं जो' होता है, अर्थात् सरस्वती।"
    },
    {
        question: "प्रश्न 38. 'सचेत' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'चेतना के साथ है जो' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सह बहुव्रीहि का उदाहरण है।"
    },
    {
        question: "प्रश्न 39. 'निर्जन' का विग्रह है-",
        answers: shuffle([
            { text: "नहीं है जन", correct: false },
            { text: "बिना जन के", correct: false },
            { text: "नहीं हैं जन जहाँ", correct: true },
            { text: "जन का अभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक ऐसे स्थान की ओर संकेत करता है जहाँ लोग नहीं हैं, अतः यह बहुव्रीहि समास है।"
    },
    {
        question: "प्रश्न 40. 'अंशुमाली' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'अंशु (किरणें) हैं माला जिसकी' होता है, अर्थात् सूर्य।"
    },
    {
        question: "प्रश्न 41. 'रघुनंदन' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका अर्थ 'रघुकुल के नंदन' अर्थात् राम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक विशेष व्यक्ति के लिए रूढ़ है।"
    },
    {
        question: "प्रश्न 42. 'कुसुमशर' में समास है-",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कुसुम (फूल) के हैं शर (बाण) जिसके' होता है, अर्थात् कामदेव।"
    },
    {
        question: "प्रश्न 43. 'सबल' का सही विग्रह है-",
        answers: shuffle([
            { text: "बल के साथ", correct: false },
            { text: "बल के साथ है जो", correct: true },
            { text: "सबल और निर्बल", correct: false },
            { text: "बल में सब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह किसी व्यक्ति या वस्तु की विशेषता बता रहा है जो बल सहित है, अतः यह सह बहुव्रीहि है।"
    },
    {
        question: "प्रश्न 44. 'निर्विवाद' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: true },
            { text: "नञ् तत्पुरुष समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false },
            { text: "कर्मधारय समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'नहीं है विवाद जिसमें' होता है, जो किसी विषय या बात की ओर संकेत करता है।"
    },
    {
        question: "प्रश्न 45. ' जितेंद्रिय' में समास है-",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'जीत ली हैं इंद्रियाँ जिसने' होता है, अर्थात् कोई योगी या विशेष व्यक्ति।"
    },
    {
        question: "प्रश्न 46. 'उरग' का विग्रह है-",
        answers: shuffle([
            { text: "उर और ग", correct: false },
            { text: "उर पर गमन", correct: false },
            { text: "उर (छाती) के बल गमन करता है जो", correct: true },
            { text: "उर में गमन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका अर्थ 'साँप' होता है, जो एक तीसरा अर्थ है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह बहुव्रीहि समास है।"
    },
    {
        question: "प्रश्न 47. 'यशोधन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'यश ही है धन जिसका' होता है, अर्थात् यशस्वी व्यक्ति।"
    },
    {
        question: "प्रश्न 48. 'मनसिज' में कौन सा समास होगा?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'मन में जन्म लेता है जो' होता है, अर्थात् कामदेव।<br><br><i class='fa-solid fa-angles-right icon'></i> 'मनोज' का पर्यायवाची।"
    },
    {
        question: "प्रश्न 49. 'जलज' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'जल में जन्म लेता है जो' होता है, अर्थात् कमल, मोती, मछली आदि।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तीसरा अर्थ प्रदान करता है।"
    },
    {
        question: "प्रश्न 50. 'मकरध्वज' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'मकर है ध्वज पर जिसके' होता है, अर्थात् कामदेव।"
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