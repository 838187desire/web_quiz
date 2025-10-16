const questions = [
    {
        topHeading: "संख्यावाचक शब्दों पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'चार दिन' में किस प्रकार का संख्यावाचक विशेषण है?",
        answers: shuffle([
            { text: "गणनावाचक", correct: true },
            { text: "क्रमवाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false },
            { text: "समुदायवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'चार' शब्द दिनों की गिनती (गणना) बता रहा है, इसलिए यह गणनावाचक है।"
    },
    {
        question: "प्रश्न 2. 'पहला व्यक्ति' में 'पहला' शब्द क्या है?",
        answers: shuffle([
            { text: "गणनावाचक विशेषण", correct: false },
            { text: "समुदायवाचक विशेषण", correct: false },
            { text: "क्रमवाचक विशेषण", correct: true },
            { text: "आवृत्तिवाचक विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पहला' शब्द व्यक्ति का क्रम बता रहा है, इसलिए यह क्रमवाचक विशेषण है।"
    },
    {
        question: "प्रश्न 3. 'कुछ लोग' में 'कुछ' किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "अनिश्चित परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुछ' शब्द लोगों की निश्चित संख्या का बोध नहीं कराता है, इसलिए यह अनिश्चित संख्यावाचक है।"
    },
    {
        question: "प्रश्न 4. 'दोनों भाई' में 'दोनों' शब्द है-",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false },
            { text: "प्रत्येकबोधक", correct: false },
            { text: "समुदायवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दोनों' शब्द भाइयों के समूह या समुदाय का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 5. 'चौगुना लगान' में 'चौगुना' कौन सा विशेषण है?",
        answers: shuffle([
            { text: "क्रमवाचक", correct: false },
            { text: "गणनावाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: true },
            { text: "समुदायवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चौगुना' शब्द चार गुना की आवृत्ति का बोध कराता है।"
    },
    {
        question: "प्रश्न 6. 'हर एक नेता' में 'हर एक' किस प्रकार का संख्यावाचक है?",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "प्रत्येकबोधक", correct: true },
            { text: "समुदायवाचक", correct: false },
            { text: "क्रमवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर एक' शब्द समूह में से प्रत्येक एक का बोध कराता है।"
    },
    {
        question: "प्रश्न 7. इनमें से कौन सा शब्द अनिश्चित संख्यावाचक विशेषण नहीं है?",
        answers: shuffle([
            { text: "कई", correct: false },
            { text: "सब कुछ", correct: false },
            { text: "दस", correct: true },
            { text: "कुछ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दस' एक निश्चित संख्या है, जबकि अन्य शब्द अनिश्चितता का बोध कराते हैं।"
    },
    {
        question: "प्रश्न 8. 'सैकड़ों लोग मारे गए' वाक्य में कौन सा विशेषण है?",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "परिमाणवाचक", correct: false },
            { text: "गुणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सैकड़ों' का अर्थ है सौ के आसपास, यह एक निश्चित संख्या नहीं है।"
    },
    {
        question: "प्रश्न 9. 'त्रिफला' में कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "समूहवाचक", correct: true },
            { text: "क्रमवाचक", correct: false },
            { text: "गुणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिफला' का अर्थ है तीन फलों का समूह, इसलिए यह समूहवाचक या समुदायवाचक है।"
    },
    {
        question: "प्रश्न 10. 'ढाई किलो चीनी' में कौन सा विशेषण है?",
        answers: shuffle([
            { text: "संख्यावाचक", correct: false },
            { text: "गुणवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'ढाई किलो' चीनी की मात्रा (परिमाण) बता रहा है, जिसे गिना नहीं जा सकता, केवल मापा या तौला जा सकता है।"
    },
    {
        question: "प्रश्न 11. 'दूसरा लड़का कहाँ गया?' वाक्य में 'दूसरा' किस प्रकार का विशेषण है?",
        answers: shuffle([
            { text: "समुदायवाचक", correct: false },
            { text: "गणनावाचक", correct: false },
            { text: "क्रमवाचक", correct: true },
            { text: "आवृत्तिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दूसरा' शब्द लड़के का क्रम सूचित कर रहा है।"
    },
    {
        question: "प्रश्न 12. 'एक दर्जन केले' में 'एक दर्जन' है-",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: true },
            { text: "अनिश्चित संख्यावाचक", correct: false },
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "अनिश्चित परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एक दर्जन' एक निश्चित संख्या (बारह) का समूह है, इसलिए यह निश्चित संख्यावाचक है।"
    },
    {
        question: "प्रश्न 13. 'कक्षा में बहुत कम छात्र उपस्थित थे।' वाक्य में विशेषण है-",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "समुदायवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहुत कम' छात्रों की कोई निश्चित संख्या नहीं बता रहा है।"
    },
    {
        question: "प्रश्न 14. 'चारों मित्र चले गए।' इस वाक्य में 'चारों' है-",
        answers: shuffle([
            { text: "आवृत्तिवाचक", correct: false },
            { text: "गणनावाचक", correct: false },
            { text: "प्रत्येकबोधक", correct: false },
            { text: "समुदायवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चारों' शब्द मित्रों के एक निश्चित समूह को इंगित करता है।"
    },
    {
        question: "प्रश्न 15. 'मुझे दुगुना लाभ हुआ।' यहाँ 'दुगुना' है-",
        answers: shuffle([
            { text: "क्रमवाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: true },
            { text: "गणनावाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुगुना' शब्द लाभ की आवृत्ति को दर्शा रहा है।"
    },
    {
        question: "प्रश्न 16. संख्यावाचक विशेषण के मुख्य कितने भेद होते हैं?",
        answers: shuffle([
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संख्यावाचक विशेषण के मुख्य दो भेद होते हैं - निश्चित संख्यावाचक और अनिश्चित संख्यावाचक।"
    },
    {
        question: "प्रश्न 17. 'प्रत्येक व्यक्ति को यह काम करना चाहिए।' में 'प्रत्येक' है-",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "समुदायवाचक", correct: false },
            { text: "प्रत्येकबोधक", correct: true },
            { text: "आवृत्तिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रत्येक' शब्द समूह में से हर एक इकाई का बोध कराता है।"
    },
    {
        question: "प्रश्न 18. इनमें से गणनावाचक विशेषण का उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "तीसरा", correct: false },
            { text: "तिगुना", correct: false },
            { text: "तीन", correct: true },
            { text: "तीनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तीन' एक गणना या गिनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'तीसरा' क्रमवाचक, 'तिगुना' आवृत्तिवाचक और 'तीनों' समुदायवाचक है।"
    },
    {
        question: "प्रश्न 19. 'मेरे पास बीस रुपये हैं।' वाक्य में विशेषण का कौन-सा भेद है?",
        answers: shuffle([
            { text: "गुणवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "निश्चित संख्यावाचक", correct: true },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बीस' एक निश्चित संख्या है और रुपये गिने जा सकते हैं।"
    },
    {
        question: "प्रश्न 20. 'थोड़ा दूध' और 'कुछ लड़के' में विशेषण का कौन सा युग्म है?",
        answers: shuffle([
            { text: "दोनों संख्यावाचक", correct: false },
            { text: "दोनों परिमाणवाचक", correct: false },
            { text: "पहला परिमाणवाचक, दूसरा संख्यावाचक", correct: true },
            { text: "पहला संख्यावाचक, दूसरा परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थोड़ा दूध' में दूध को मापा जाता है (परिमाण), जबकि 'कुछ लड़के' में लड़कों को गिना जाता है (संख्या)।"
    },
    {
        question: "प्रश्न 21. 'सातवाँ' शब्द संख्यावाचक विशेषण के किस उपभेद में आता है?",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "क्रमवाचक", correct: true },
            { text: "आवृत्तिवाचक", correct: false },
            { text: "समुदायवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सातवाँ' शब्द किसी वस्तु या व्यक्ति का क्रम बताता है।"
    },
    {
        question: "प्रश्न 22. 'पाँचों बहनें' में कौन सा संख्यावाचक विशेषण है?",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "समुदायवाचक", correct: true },
            { text: "प्रत्येकबोधक", correct: false },
            { text: "आवृत्तिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाँचों' शब्द बहनों के एक समुदाय या समूह का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 23. 'मैंने लगभग सौ रुपये खर्च किए।' वाक्य में विशेषण है-",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "परिमाणवाचक", correct: false },
            { text: "गुणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लगभग सौ' एक निश्चित संख्या का बोध नहीं कराता है, यह अनिश्चितता को दर्शाता है।"
    },
    {
        question: "प्रश्न 24. 'एक-एक करके आओ।' यहाँ 'एक-एक' है-",
        answers: shuffle([
            { text: "आवृत्तिवाचक", correct: false },
            { text: "क्रमवाचक", correct: false },
            { text: "प्रत्येकबोधक", correct: true },
            { text: "गणनावाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एक-एक' शब्द समूह में से प्रत्येक इकाई का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 25. निश्चित संख्यावाचक विशेषण का कौन-सा भेद नहीं है?",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "क्रमवाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "समुदायवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनिश्चित संख्यावाचक, संख्यावाचक विशेषण का एक मुख्य भेद है, न कि निश्चित संख्यावाचक का उपभेद।"
    },
    {
        question: "प्रश्न 26. 'दो किलो सेब' में 'दो किलो' है-",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: false },
            { text: "निश्चित परिमाणवाचक", correct: true },
            { text: "अनिश्चित परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ सेब की एक निश्चित तौल या मात्रा (परिमाण) बताई जा रही है।"
    },
    {
        question: "प्रश्न 27. 'सब छात्र चले गए।' यहाँ 'सब' है-",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "गुणवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सब' शब्द से छात्रों की कुल संख्या का बोध होता है लेकिन यह संख्या निश्चित नहीं है।"
    },
    {
        question: "प्रश्न 28. 'दसवीं कक्षा' में 'दसवीं' कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false },
            { text: "समुदायवाचक", correct: false },
            { text: "क्रमवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दसवीं' शब्द कक्षा का क्रम बता रहा है।"
    },
    {
        question: "प्रश्न 29. 'कई दर्शकगण' में कौन सा विशेषण है?",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "गुणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कई' शब्द दर्शकों की अनिश्चित संख्या को प्रकट कर रहा है।"
    },
    {
        question: "प्रश्न 30. 'इकहरा बदन' में 'इकहरा' शब्द है-",
        answers: shuffle([
            { text: "क्रमवाचक", correct: false },
            { text: "गणनावाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: true },
            { text: "समुदायवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इकहरा', 'दुहरा', 'तिहरा' आदि शब्द आवृत्तिवाचक विशेषण होते हैं।"
    },
    {
        question: "प्रश्न 31. 'आठ' शब्द का क्रमवाचक रूप क्या होगा?",
        answers: shuffle([
            { text: "आठों", correct: false },
            { text: "आठवाँ", correct: true },
            { text: "अष्ट", correct: false },
            { text: "आठ गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आठ' गणनावाचक है, इसका क्रमवाचक रूप 'आठवाँ' होता है।"
    },
    {
        question: "प्रश्न 32. 'चालीस चोर' में विशेषण है-",
        answers: shuffle([
            { text: "गणनावाचक", correct: true },
            { text: "क्रमवाचक", correct: false },
            { text: "समुदायवाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चालीस' शब्द चोरों की गिनती बता रहा है।"
    },
    {
        question: "प्रश्न 33. जिस विशेषण से संज्ञा की संख्या का बोध हो, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "गुणवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "सार्वनामिक", correct: false },
            { text: "संख्यावाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिभाषा के अनुसार, संख्या का बोध कराने वाले विशेषण संख्यावाचक कहलाते हैं।"
    },
    {
        question: "प्रश्न 34. 'पौने दो' किस प्रकार का गणनावाचक विशेषण है?",
        answers: shuffle([
            { text: "पूर्णांकबोधक", correct: false },
            { text: "अपूर्णांकबोधक", correct: true },
            { text: "क्रमबोधक", correct: false },
            { text: "समुदायबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डेढ़', 'ढाई', 'पौने दो' आदि अपूर्ण संख्याओं का बोध कराते हैं, इसलिए ये अपूर्णांकबोधक हैं।"
    },
    {
        question: "प्रश्न 35. 'युद्ध में हज़ारों सैनिक मारे गए।' विशेषण पहचानिए।",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "गुणवाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हज़ारों' शब्द से सैनिकों की एक निश्चित संख्या का पता नहीं चलता है।"
    },
    {
        question: "प्रश्न 36. 'मेरा घर तीसरी गली में है।' इस वाक्य में 'तीसरी' है-",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false },
            { text: "क्रमवाचक", correct: true },
            { text: "समुदायवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तीसरी' शब्द गली का क्रम बता रहा है।"
    },
    {
        question: "प्रश्न 37. इनमें से कौन सा शब्द समुदायवाचक विशेषण है?",
        answers: shuffle([
            { text: "प्रत्येक", correct: false },
            { text: "दुगुना", correct: false },
            { text: "पाँच", correct: false },
            { text: "दर्जनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दर्जनों' शब्द बारह के समूह का बोध कराता है, इसलिए यह समुदायवाचक है।"
    },
    {
        question: "प्रश्न 38. 'एक सौ रुपये' में कौन सा विशेषण है?",
        answers: shuffle([
            { text: "अपूर्णांकबोधक", correct: false },
            { text: "पूर्णांकबोधक गणनावाचक", correct: true },
            { text: "क्रमवाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एक सौ' एक पूर्ण संख्या की गणना है।"
    },
    {
        question: "प्रश्न 39. 'मुझे थोड़ी चाय चाहिए।' वाक्य में 'थोड़ी' शब्द है-",
        answers: shuffle([
            { text: "संख्यावाचक", correct: false },
            { text: "परिमाणवाचक", correct: true },
            { text: "गुणवाचक", correct: false },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाय को गिना नहीं जा सकता, केवल मापा जा सकता है, इसलिए 'थोड़ी' परिमाणवाचक है।"
    },
    {
        question: "प्रश्न 40. 'पाँच' शब्द का आवृत्तिवाचक रूप क्या होगा?",
        answers: shuffle([
            { text: "पाँचवाँ", correct: false },
            { text: "पाँचों", correct: false },
            { text: "पंच", correct: false },
            { text: "पाँच गुना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाँच गुना' शब्द आवृत्ति को दर्शाता है।"
    },
    {
        question: "प्रश्न 41. 'सवा' शब्द किस प्रकार का संख्यावाचक है?",
        answers: shuffle([
            { text: "पूर्णांकबोधक", correct: false },
            { text: "क्रमवाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false },
            { text: "अपूर्णांकबोधक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सवा', 'साढ़े' जैसे शब्द अपूर्ण संख्या का बोध कराते हैं।"
    },
    {
        question: "प्रश्न 42. 'तुम तीनों को यह काम करना है।' यहाँ 'तीनों' है-",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "समुदायवाचक", correct: true },
            { text: "क्रमवाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तीनों' शब्द एक समूह का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 43. कौन सा वाक्य अनिश्चित संख्यावाचक विशेषण का उदाहरण है?",
        answers: shuffle([
            { text: "मेरे पास दस आम हैं।", correct: false },
            { text: "बाज़ार से कुछ फल ले आओ।", correct: true },
            { text: "वह दूसरा लड़का है।", correct: false },
            { text: "यह चार गुना बड़ा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुछ' शब्द फलों की निश्चित संख्या नहीं बता रहा है।"
    },
    {
        question: "प्रश्न 44. गणनावाचक विशेषण का उदाहरण चुनिए।",
        answers: shuffle([
            { text: "पहला", correct: false },
            { text: "सात", correct: true },
            { text: "सातों", correct: false },
            { text: "सातवाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सात' एक गिनती है।"
    },
    {
        question: "प्रश्न 45. 'दो दर्जन संतरे' में विशेषण है-",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: true },
            { text: "अनिश्चित संख्यावाचक", correct: false },
            { text: "निश्चित परिमाणवाचक", correct: false },
            { text: "अनिश्चित परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दो दर्जन' एक निश्चित संख्या (चौबीस) को इंगित करता है।"
    },
    {
        question: "प्रश्न 46. 'बीसों लोग' में 'बीसों' है-",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "परिमाणवाचक", correct: false },
            { text: "समुदायवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बीसों' का अर्थ है बीस के लगभग, जो एक अनिश्चित संख्या है।"
    },
    {
        question: "प्रश्न 47. 'हर दूसरे व्यक्ति से पूछो।' यहाँ 'हर दूसरे' में कौन सा विशेषण है?",
        answers: shuffle([
            { text: "गणना और क्रमवाचक का मिश्रण", correct: false },
            { text: "प्रत्येकबोधक और क्रमवाचक का मिश्रण", correct: true },
            { text: "समुदाय और आवृत्तिवाचक का मिश्रण", correct: false },
            { text: "केवल क्रमवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'हर' प्रत्येकबोधक है और 'दूसरे' क्रमवाचक है।"
    },
    {
        question: "प्रश्न 48. 'चारपाई' शब्द में कौन सा संख्यावाचक विशेषण समाहित है?",
        answers: shuffle([
            { text: "समुदायवाचक", correct: false },
            { text: "गणनावाचक", correct: true },
            { text: "क्रमवाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चारपाई' का अर्थ है चार पायों वाली, यहाँ 'चार' गणनावाचक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक द्विगु समास का भी उदाहरण है।"
    },
    {
        question: "प्रश्न 49. 'लाखों की भीड़' में 'लाखों' शब्द है-",
        answers: shuffle([
            { text: "निश्चित संख्यावाचक", correct: false },
            { text: "अनिश्चित संख्यावाचक", correct: true },
            { text: "गुणवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लाखों' शब्द एक बड़ी और अनिश्चित संख्या का बोध कराता है।"
    },
    {
        question: "प्रश्न 50. 'एक जोड़ा चप्पल' में 'एक जोड़ा' है-",
        answers: shuffle([
            { text: "गणनावाचक", correct: false },
            { text: "समुदायवाचक", correct: true },
            { text: "क्रमवाचक", correct: false },
            { text: "आवृत्तिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जोड़ा' दो के समूह को दर्शाता है, इसलिए यह समुदायवाचक है।"
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