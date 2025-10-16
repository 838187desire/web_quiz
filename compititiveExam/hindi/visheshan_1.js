const questions = [
    {
        topHeading: "विशेषण पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जो शब्द संज्ञा या सर्वनाम की विशेषता बताते हैं, उन्हें क्या कहते हैं?",
        answers: shuffle([
            { text: "क्रिया", correct: false },
            { text: "विशेषण", correct: true },
            { text: "सर्वनाम", correct: false },
            { text: "संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संज्ञा या सर्वनाम शब्दों की विशेषता (गुण, दोष, संख्या, परिमाण आदि) बताने वाले शब्द विशेषण कहलाते हैं।"
    },
    {
        question: "प्रश्न 2. 'काला घोड़ा दौड़ रहा है।' इस वाक्य में 'काला' क्या है?",
        answers: shuffle([
            { text: "संज्ञा", correct: false },
            { text: "सर्वनाम", correct: false },
            { text: "क्रिया", correct: false },
            { text: "विशेषण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'काला' शब्द 'घोड़ा' (संज्ञा) की विशेषता (रंग) बता रहा है, इसलिए यह विशेषण है।"
    },
    {
        question: "प्रश्न 3. 'चार लड़के' में 'चार' किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक विशेषण", correct: false },
            { text: "परिमाणवाचक विशेषण", correct: false },
            { text: "संख्यावाचक विशेषण", correct: true },
            { text: "सार्वनामिक विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चार' शब्द से 'लड़के' (संज्ञा) की निश्चित संख्या का बोध हो रहा है, अतः यह निश्चित संख्यावाचक विशेषण है।"
    },
    {
        question: "प्रश्न 4. 'यह किताब मेरी है।' इस वाक्य में 'यह' कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक विशेषण", correct: false },
            { text: "संख्यावाचक विशेषण", correct: false },
            { text: "परिमाणवाचक विशेषण", correct: false },
            { text: "सार्वनामिक विशेषण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई सर्वनाम शब्द संज्ञा शब्द से पहले आकर उसकी विशेषता बताए, तो वह सार्वनामिक विशेषण कहलाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'यह' सर्वनाम 'किताब' संज्ञा से पहले आकर उसकी ओर संकेत कर रहा है।"
    },
    {
        question: "प्रश्न 5. 'थोड़ा दूध' में 'थोड़ा' किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: false },
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "अनिश्चित परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थोड़ा' शब्द से 'दूध' की निश्चित मात्रा का बोध नहीं हो रहा है, इसलिए यह अनिश्चित परिमाणवाचक विशेषण है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से कौन-सा शब्द गुणवाचक विशेषण है?",
        answers: shuffle([
            { text: "दस", correct: false },
            { text: "कुछ", correct: false },
            { text: "ईमानदार", correct: true },
            { text: "वह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ईमानदार' शब्द किसी व्यक्ति के गुण को बता रहा है, अतः यह गुणवाचक विशेषण है।"
    },
    {
        question: "प्रश्न 7. 'प्रविशेषण' किसे कहते हैं?",
        answers: shuffle([
            { text: "विशेषण की विशेषता बताने वाला शब्द", correct: true },
            { text: "संज्ञा की विशेषता बताने वाला शब्द", correct: false },
            { text: "क्रिया की विशेषता बताने वाला शब्द", correct: false },
            { text: "सर्वनाम की विशेषता बताने वाला शब्द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जो शब्द विशेषण की भी विशेषता बताते हैं, उन्हें प्रविशेषण कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे- 'यह बहुत सुंदर फूल है।' में 'बहुत' प्रविशेषण है।"
    },
    {
        question: "प्रश्न 8. 'दो लीटर' किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: false },
            { text: "निश्चित परिमाणवाचक", correct: true },
            { text: "अनिश्चित संख्यावाचक", correct: false },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दो लीटर' से किसी तरल पदार्थ की एक निश्चित मात्रा या परिमाण का बोध होता है, अतः यह निश्चित परिमाणवाचक विशेषण है।"
    },
    {
        question: "प्रश्न 9. 'कोई आदमी' में 'कोई' कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "परिमाणवाचक", correct: false },
            { text: "गुणवाचक", correct: false },
            { text: "संख्यावाचक", correct: false },
            { text: "सार्वनामिक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोई' सर्वनाम 'आदमी' संज्ञा से पहले आकर अनिश्चितता का बोध करा रहा है, इसलिए यह अनिश्चित सार्वनामिक विशेषण है।"
    },
    {
        question: "प्रश्न 10. 'आलस्य' शब्द का विशेषण क्या है?",
        answers: shuffle([
            { text: "आलस", correct: false },
            { text: "अलस", correct: false },
            { text: "आलसी", correct: true },
            { text: "आलसीपन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आलस्य' भाववाचक संज्ञा है, इससे बनने वाला विशेषण 'आलसी' है, जैसे- 'आलसी व्यक्ति'।"
    },
    {
        question: "प्रश्न 11. विशेषण की कितनी अवस्थाएँ होती हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुलना की दृष्टि से विशेषण की तीन अवस्थाएँ होती हैं- मूलावस्था, उत्तरावस्था और उत्तमावस्था।"
    },
    {
        question: "प्रश्न 12. 'राम, मोहन से अधिक बुद्धिमान है।' यह विशेषण की कौन-सी अवस्था है?",
        answers: shuffle([
            { text: "मूलावस्था", correct: false },
            { text: "उत्तरावस्था", correct: true },
            { text: "उत्तमावस्था", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब दो व्यक्तियों या वस्तुओं के बीच तुलना की जाती है, तो वह विशेषण की उत्तरावस्था होती है।"
    },
    {
        question: "प्रश्न 13. 'कुछ लोग' में 'कुछ' किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "अनिश्चित परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुछ' शब्द से लोगों की निश्चित संख्या का पता नहीं चल रहा है, इसलिए यह अनिश्चित संख्यावाचक विशेषण है।"
    },
    {
        question: "प्रश्न 14. 'मेरा घर इसी शहर में है।' में कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: false },
            { text: "संख्यावाचक", correct: false },
            { text: "सार्वनामिक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेरा' और 'इसी' दोनों सर्वनाम शब्द संज्ञा (घर, शहर) से पहले आकर विशेषण का कार्य कर रहे हैं, अतः ये सार्वनामिक विशेषण हैं।"
    },
    {
        question: "प्रश्न 15. 'वह बहुत मधुर गाती है।' में प्रविशेषण शब्द कौन-सा है?",
        answers: shuffle([
            { text: "वह", correct: false },
            { text: "बहुत", correct: true },
            { text: "मधुर", correct: false },
            { text: "गाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'मधुर' विशेषण है और 'बहुत' शब्द इस विशेषण की विशेषता बता रहा है, इसलिए 'बहुत' प्रविशेषण है।"
    },
    {
        question: "प्रश्न 16. 'पापी' शब्द में कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "संख्यावाचक", correct: false },
            { text: "सार्वनामिक", correct: false },
            { text: "गुणवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पापी' शब्द व्यक्ति के दोष (गुण का नकारात्मक रूप) को बता रहा है, अतः यह गुणवाचक विशेषण है।"
    },
    {
        question: "प्रश्न 17. 'एक लीटर दूध' में विशेष्य क्या है?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "लीटर", correct: false },
            { text: "दूध", correct: true },
            { text: "एक लीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस संज्ञा या सर्वनाम शब्द की विशेषता बताई जाती है, उसे विशेष्य कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'दूध' की विशेषता बताई जा रही है।"
    },
    {
        question: "प्रश्न 18. 'यह चाँदी खोटी-सी लगती है।' इस वाक्य में 'खोटी-सी' किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक विशेषण", correct: true },
            { text: "संख्यावाचक विशेषण", correct: false },
            { text: "परिमाणवाचक विशेषण", correct: false },
            { text: "पूर्णांकबोधक विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खोटी-सी' शब्द चाँदी के गुण (दोष) को दर्शा रहा है, इसलिए यह गुणवाचक विशेषण है."
    },
    {
        question: "प्रश्न 19. 'इतिहास' शब्द से बना विशेषण है-",
        answers: shuffle([
            { text: "इतिवृत्त", correct: false },
            { text: "ऐतिहासिक", correct: true },
            { text: "इतिहासकार", correct: false },
            { text: "इति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इतिहास' संज्ञा में 'इक' प्रत्यय लगने से 'ऐतिहासिक' विशेषण बनता है।"
    },
    {
        question: "प्रश्न 20. 'चौगुना' शब्द में कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "क्रमवाचक", correct: false },
            { text: "गणनावाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: true },
            { text: "समुदायवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चौगुना', 'दोगुना' जैसे शब्द जो किसी वस्तु की आवृत्ति का बोध कराते हैं, आवृत्तिवाचक संख्यावाचक विशेषण कहलाते हैं।"
    },
    {
        question: "प्रश्न 21. 'दोनों भाई' में 'दोनों' कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "समुदायवाचक", correct: true },
            { text: "गणनावाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false },
            { text: "क्रमवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दोनों', 'तीनों' जैसे शब्द जो समूह या समुदाय का बोध कराते हैं, समुदायवाचक संख्यावाचक विशेषण होते हैं।"
    },
    {
        question: "प्रश्न 22. 'संस्कृति' का विशेषण क्या है?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "सुसंस्कृत", correct: false },
            { text: "संस्कार", correct: false },
            { text: "सांस्कृतिक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संस्कृति' संज्ञा से 'सांस्कृतिक' विशेषण बनता है, जैसे- 'सांस्कृतिक कार्यक्रम'।"
    },
    {
        question: "प्रश्न 23. 'अग्नि' का विशेषण शब्द है-",
        answers: shuffle([
            { text: "आग", correct: false },
            { text: "अग्निकार", correct: false },
            { text: "आग्नेय", correct: true },
            { text: "अग्निमय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्नि' का विशेषण रूप 'आग्नेय' होता है, जैसे- 'आग्नेय चट्टान'।"
    },
    {
        question: "प्रश्न 24. 'मोहन सबसे चतुर है।' यह विशेषण की कौन-सी अवस्था है?",
        answers: shuffle([
            { text: "मूलावस्था", correct: false },
            { text: "उत्तरावस्था", correct: false },
            { text: "उत्तमावस्था", correct: true },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी व्यक्ति या वस्तु को सबसे श्रेष्ठ या हीन बताया जाता है, तो वह विशेषण की उत्तमावस्था होती है।"
    },
    {
        question: "प्रश्न 25. 'गिलास में आधा पानी है।' में 'आधा' किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: false },
            { text: "संख्यावाचक", correct: false },
            { text: "सार्वनामिक", correct: false },
            { text: "परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आधा' शब्द पानी की मात्रा (परिमाण) का बोध करा रहा है, इसलिए यह परिमाणवाचक विशेषण है।"
    },
    {
        question: "प्रश्न 26. 'दूसरा लड़का' में 'दूसरा' कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "क्रमवाचक", correct: true },
            { text: "आवृत्तिवाचक", correct: false },
            { text: "समुदायवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पहला', 'दूसरा' जैसे शब्द जो क्रम का बोध कराते हैं, क्रमवाचक संख्यावाचक विशेषण कहलाते हैं।"
    },
    {
        question: "प्रश्न 27. 'जैसा देश, वैसा भेष।' में 'जैसा', 'वैसा' किस प्रकार के विशेषण हैं?",
        answers: shuffle([
            { text: "गुणवाचक", correct: false },
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "सार्वनामिक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जैसा', 'वैसा' संबंधवाचक सर्वनाम हैं जो संज्ञा (देश, भेष) से पहले आकर विशेषण का कार्य कर रहे हैं।"
    },
    {
        question: "प्रश्न 28. 'जलीय' शब्द का विशेष्य रूप क्या है?",
        answers: shuffle([
            { text: "जल", correct: true },
            { text: "जलीय जीव", correct: false },
            { text: "जलमग्न", correct: false },
            { text: "जलसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलीय' विशेषण 'जल' संज्ञा (विशेष्य) से बना है।"
    },
    {
        question: "प्रश्न 29. 'नीली साड़ी' में कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "गुणवाचक", correct: true },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीली' शब्द 'साड़ी' के रंग (गुण) को बता रहा है, इसलिए यह गुणवाचक विशेषण है।"
    },
    {
        question: "प्रश्न 30. 'भूखा आदमी' में 'भूखा' कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: true },
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भूखा' शब्द 'आदमी' की दशा (गुण) का बोध करा रहा है, अतः यह गुणवाचक विशेषण है।"
    },
    {
        question: "प्रश्न 31. 'ढाई किलो' में कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "अपूर्णांकबोधक संख्यावाचक", correct: false },
            { text: "पूर्णांकबोधक संख्यावाचक", correct: false },
            { text: "अपूर्णांकबोधक परिमाणवाचक", correct: true },
            { text: "पूर्णांकबोधक परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढाई किलो' एक अपूर्ण मात्रा है जिसे मापा-तौला जाता है, अतः यह अपूर्णांकबोधक परिमाणवाचक विशेषण है।"
    },
    {
        question: "प्रश्न 32. 'प्रत्येक व्यक्ति' में 'प्रत्येक' किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: false },
            { text: "सार्वनामिक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "संख्यावाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रत्येक' शब्द समूह में से हर एक का बोध कराता है, इसे 'प्रत्येकबोधक संख्यावाचक विशेषण' कहते हैं।"
    },
    {
        question: "प्रश्न 33. 'प्यासा कौआ' में विशेष्य कौन है?",
        answers: shuffle([
            { text: "प्यासा", correct: false },
            { text: "कौआ", correct: true },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'प्यासा' शब्द 'कौआ' (संज्ञा) की विशेषता बता रहा है, अतः 'कौआ' विशेष्य है।"
    },
    {
        question: "प्रश्न 34. 'यह आम मीठा है।' इस वाक्य में 'मीठा' कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "विशेष्य-विशेषण", correct: false },
            { text: "विधेय-विशेषण", correct: true },
            { text: "प्रविशेषण", correct: false },
            { text: "सार्वनामिक विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब विशेषण, विशेष्य के बाद और क्रिया के पहले आए, तो उसे विधेय-विशेषण कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'मीठा' विशेषण 'आम' (विशेष्य) के बाद आया है।"
    },
    {
        question: "प्रश्न 35. 'चतुर विद्यार्थी से प्रश्न पूछो।' वाक्य में विशेषण है-",
        answers: shuffle([
            { text: "विद्यार्थी", correct: false },
            { text: "प्रश्न", correct: false },
            { text: "चतुर", correct: true },
            { text: "पूछो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुर' शब्द 'विद्यार्थी' (संज्ञा) की विशेषता बता रहा है, इसलिए यह विशेषण है।"
    },
    {
        question: "प्रश्न 36. 'लाखों लोग' में कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "अनिश्चित परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लाखों' शब्द से लोगों की एक निश्चित संख्या का बोध नहीं होता, बल्कि एक अंदाज़े का पता चलता है, अतः यह अनिश्चित संख्यावाचक विशेषण है।"
    },
    {
        question: "प्रश्न 37. 'बाहरी' शब्द में कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "दशावाचक", correct: false },
            { text: "गुणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाहरी', 'भीतरी', 'ऊपरी' जैसे शब्द स्थान का बोध कराते हैं, ये गुणवाचक विशेषण के अंतर्गत स्थानबोधक विशेषण हैं।"
    },
    {
        question: "प्रश्न 38. 'प्रेम' शब्द से बना विशेषण है-",
        answers: shuffle([
            { text: "प्यार", correct: false },
            { text: "प्रेमी", correct: true },
            { text: "प्रेमिका", correct: false },
            { text: "प्रेममय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रेम' संज्ञा से 'प्रेमी' विशेषण बनता है, जैसे- 'प्रेमी स्वभाव'।"
    },
    {
        question: "प्रश्न 39. 'उजला कमीज' में विशेषण है-",
        answers: shuffle([
            { text: "कमीज", correct: false },
            { text: "उजला", correct: true },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उजला' शब्द 'कमीज' के रंग की विशेषता बता रहा है, अतः यह विशेषण है।"
    },
    {
        question: "प्रश्न 40. 'चार गज़ मलमल' में कौन-सा विशेषण है?",
        answers: shuffle([
            { text: "संख्यावाचक", correct: false },
            { text: "गुणवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चार गज़' से मलमल की निश्चित माप (परिमाण) का बोध हो रहा है, अतः यह परिमाणवाचक विशेषण है।"
    },
    {
        question: "प्रश्न 41. 'दुष्ट आदमी' में 'दुष्ट' किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: true },
            { text: "सार्वनामिक", correct: false },
            { text: "व्यक्तिवाचक", correct: false },
            { text: "संख्यावाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुष्ट' शब्द 'आदमी' के दोष (गुण) को बता रहा है, अतः यह गुणवाचक विशेषण है।"
    },
    {
        question: "प्रश्न 42. 'भारत' शब्द से बना विशेषण है-",
        answers: shuffle([
            { text: "भरत", correct: false },
            { text: "भारती", correct: false },
            { text: "भारतीय", correct: true },
            { text: "भारतवासी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भारत' संज्ञा से 'भारतीय' विशेषण बनता है, जैसे- 'भारतीय नागरिक'।"
    },
    {
        question: "प्रश्न 43. 'एक किलो चीनी' में विशेषण का कौन-सा भेद है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: false },
            { text: "संख्यावाचक", correct: false },
            { text: "निश्चित परिमाणवाचक", correct: true },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एक किलो' से चीनी की निश्चित तौल (परिमाण) का बोध हो रहा है।"
    },
    {
        question: "प्रश्न 44. 'सुगंधित कस्तूरी' में विशेष्य क्या है?",
        answers: shuffle([
            { text: "सुगंधित", correct: false },
            { text: "कस्तूरी", correct: true },
            { text: "दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ कस्तूरी की विशेषता बताई जा रही है कि वह सुगंधित है, अतः 'कस्तूरी' विशेष्य है।"
    },
    {
        question: "प्रश्न 45. 'वह लड़की बहुत अच्छी है।' वाक्य में कितने विशेषण हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में दो विशेषण हैं- 'वह' (सार्वनामिक विशेषण) और 'अच्छी' (गुणवाचक विशेषण)।<br><br><i class='fa-solid fa-angles-right icon'></i> 'बहुत' प्रविशेषण है।"
    },
    {
        question: "प्रश्न 46. 'धर्म' से बनने वाला विशेषण है-",
        answers: shuffle([
            { text: "धर्मी", correct: false },
            { text: "धर्मात्मा", correct: false },
            { text: "धार्मिक", correct: true },
            { text: "अधर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धर्म' संज्ञा शब्द में 'इक' प्रत्यय लगाकर 'धार्मिक' विशेषण बनता है।"
    },
    {
        question: "प्रश्न 47. 'समुद्री साँप' में विशेषण और विशेष्य हैं-",
        answers: shuffle([
            { text: "समुद्री (विशेष्य), साँप (विशेषण)", correct: false },
            { text: "समुद्री (विशेषण), साँप (विशेष्य)", correct: true },
            { text: "दोनों विशेषण हैं", correct: false },
            { text: "दोनों विशेष्य हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समुद्री' शब्द 'साँप' की विशेषता बता रहा है, अतः 'समुद्री' विशेषण और 'साँप' विशेष्य है।"
    },
    {
        question: "प्रश्न 48. 'लोभी' किस विधि से निर्मित विशेषण है?",
        answers: shuffle([
            { text: "संज्ञा विधि", correct: false },
            { text: "सर्वनाम विधि", correct: false },
            { text: "क्रिया विधि", correct: false },
            { text: "प्रत्यय विधि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोभ' (संज्ञा) में 'ई' प्रत्यय लगाकर 'लोभी' विशेषण बनाया गया है।"
    },
    {
        question: "प्रश्न 49. इनमें से कौन-सा शब्द विशेषण नहीं है?",
        answers: shuffle([
            { text: "शांत", correct: false },
            { text: "काला", correct: false },
            { text: "तुम", correct: true },
            { text: "आगामी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तुम' एक सर्वनाम है, विशेषण नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द विशेषण हैं।"
    },
    {
        question: "प्रश्न 50. 'बड़ा घर, छोटा आदमी, नीला वस्त्र' में विशेष्य पद कौन-कौन से हैं?",
        answers: shuffle([
            { text: "बड़ा, छोटा, नीला", correct: false },
            { text: "घर, आदमी, वस्त्र", correct: true },
            { text: "छोटा, नीला", correct: false },
            { text: "बड़ा, आदमी, वस्त्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घर', 'आदमी' और 'वस्त्र' संज्ञा शब्द हैं जिनकी विशेषता बताई जा रही है, अतः ये विशेष्य हैं।"
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