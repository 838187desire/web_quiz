const questions = [
    {
        topHeading: "संज्ञा पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'हिमालय' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिमालय' एक विशेष पर्वत का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 2. 'लड़का' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़का' शब्द किसी विशेष लड़के का नहीं, बल्कि सभी लड़कों की जाति का बोध कराता है, अतः यह जातिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 3. 'क्रोध' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्रोध' एक मनोभाव का नाम है जिसे केवल अनुभव किया जा सकता है, इसलिए यह भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 4. 'गुच्छा' शब्द किस संज्ञा भेद के अंतर्गत आता है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुच्छा' शब्द चाबियों, अंगूरों आदि के एक समूह का बोध कराता है, इसलिए यह समूहवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 5. 'घी' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घी' एक तरल पदार्थ या द्रव्य का नाम है, जिसे मापा या तौला जा सकता है, अतः यह द्रव्यवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से कौन सा शब्द व्यक्तिवाचक संज्ञा है?",
        answers: shuffle([
            { text: "शहर", correct: false },
            { text: "दिल्ली", correct: true },
            { text: "इमारत", correct: false },
            { text: "नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिल्ली' एक विशेष शहर का नाम है, जबकि अन्य विकल्प अपनी पूरी जाति का बोध कराते हैं।"
    },
    {
        question: "प्रश्न 7. 'पशु' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पशु' शब्द से किसी विशेष पशु का नहीं, बल्कि संपूर्ण पशु जाति का बोध होता है।"
    },
    {
        question: "प्रश्न 8. 'मीठा' शब्द से बनी भाववाचक संज्ञा कौन सी है?",
        answers: shuffle([
            { text: "मीठी", correct: false },
            { text: "मिठाई", correct: false },
            { text: "मिठास", correct: true },
            { text: "मधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मीठा' विशेषण से 'मिठास' भाववाचक संज्ञा बनती है, जो एक गुण का बोध कराती है।"
    },
    {
        question: "प्रश्न 9. 'दल' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दल' शब्द लोगों या वस्तुओं के समूह को दर्शाता है, इसलिए यह समूहवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 10. 'पानी' शब्द किस संज्ञा का उदाहरण है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पानी' एक तरल पदार्थ है, जिसे मापा या तौला जाता है, अतः यह द्रव्यवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 11. 'गंगा' एक पवित्र नदी है। इस वाक्य में 'गंगा' कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'गंगा' एक विशेष नदी का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 12. 'गरीबी' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरीबी' एक अवस्था या भाव है, इसलिए यह भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 13. 'पुस्तक' शब्द कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुस्तक' शब्द किसी विशेष पुस्तक का नहीं, बल्कि सभी पुस्तकों की जाति का बोध कराता है।"
    },
    {
        question: "प्रश्न 14. 'झुंड' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "समूहवाचक संज्ञा", correct: true },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झुंड' शब्द प्राणियों के समूह का बोध कराता है, इसलिए यह समूहवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 15. 'लोहा' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोहा' एक धातु या द्रव्य है, इसलिए यह द्रव्यवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 16. 'गांधीजी' को राष्ट्रपिता कहा जाता है। इस वाक्य में 'गांधीजी' शब्द है:",
        answers: shuffle([
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गांधीजी' एक विशेष व्यक्ति को संबोधित करता है, अतः यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 17. 'ऊँचाई' शब्द किस संज्ञा का उदाहरण है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऊँचाई' एक गुण या अवस्था है, जिसे महसूस किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'ऊँचा' विशेषण से बनी भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 18. 'परिवार' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिवार' सदस्यों के एक समूह का बोध कराता है, इसलिए यह समूहवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 19. निम्नलिखित में से कौन सा शब्द भाववाचक संज्ञा नहीं है?",
        answers: shuffle([
            { text: "मानवता", correct: false },
            { text: "सहायता", correct: false },
            { text: "अपनापन", correct: false },
            { text: "मानव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मानव' शब्द जातिवाचक संज्ञा है, जबकि अन्य तीनों शब्द भाववाचक संज्ञा हैं।"
    },
    {
        question: "प्रश्न 20. 'पीतल' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पीतल' एक मिश्र धातु है, जो द्रव्यवाचक संज्ञा के अंतर्गत आती है।"
    },
    {
        question: "प्रश्न 21. 'रामायण' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रामायण' एक विशेष ग्रंथ का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 22. 'शत्रुता' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शत्रुता' एक भाव का नाम है, अतः यह भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 23. 'देश' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देश' शब्द किसी विशेष देश का बोध न कराकर सभी देशों की जाति का बोध कराता है।"
    },
    {
        question: "प्रश्न 24. 'सभा' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सभा' लोगों के समूह का बोध कराती है, इसलिए यह समूहवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 25. 'गेहूँ' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गेहूँ' एक अनाज है जिसे मापा-तौला जाता है, अतः यह द्रव्यवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 26. 'भारत' हमारा देश है। इस वाक्य में 'भारत' कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भारत' एक विशेष देश का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 27. 'लिखावट' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिखावट' लिखने के ढंग या भाव का बोध कराती है, इसलिए यह भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 28. 'पर्वत' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पर्वत' शब्द से सभी पर्वतों का बोध होता है, किसी विशेष पर्वत का नहीं, अतः यह जातिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 29. 'पुस्तकालय' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुस्तकालय' पुस्तकों के संग्रह या समूह का बोध कराता है, इसलिए इसे समूहवाचक संज्ञा माना जाता है।"
    },
    {
        question: "प्रश्न 30. 'दूध' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दूध' एक तरल पदार्थ है, अतः यह द्रव्यवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 31. 'ताजमहल' की सुंदरता अद्भुत है। इस वाक्य में 'ताजमहल' कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ताजमहल' एक विशेष इमारत का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 32. 'बुढ़ापा' एक अभिशाप है। इस वाक्य में 'बुढ़ापा' कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुढ़ापा' जीवन की एक अवस्था का नाम है, अतः यह भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 33. 'शिक्षक' छात्रों को पढ़ा रहे हैं। इस वाक्य में 'शिक्षक' कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिक्षक' शब्द किसी विशेष शिक्षक का नहीं, बल्कि संपूर्ण शिक्षक जाति का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 34. 'मेला' देखने बहुत लोग आए। इस वाक्य में 'मेला' कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेला' शब्द लोगों और दुकानों के समूह का बोध कराता है, अतः यह समूहवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 35. 'कोयला' में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोयला' एक पदार्थ है, जिसे तौला जाता है, अतः यह द्रव्यवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 36. 'सोहन' एक अच्छा लड़का है। इस वाक्य में 'सोहन' कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोहन' एक विशेष लड़के का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 37. 'चावल' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चावल' एक अनाज है, जिसे मापा-तौला जाता है, अतः यह द्रव्यवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 38. 'फूल' कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फूल' शब्द से किसी विशेष फूल का नहीं, बल्कि फूलों की पूरी जाति का बोध होता है।"
    },
    {
        question: "प्रश्न 39. 'आयोग' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आयोग' सदस्यों के एक समूह का बोध कराता है, इसलिए यह समूहवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 40. 'दही' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दही' एक खाद्य पदार्थ है जिसे मापा या तौला जाता है, अतः यह द्रव्यवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 41. 'कालिदास' को भारत का शेक्सपियर कहा जाता है। यहाँ 'शेक्सपियर' कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'शेक्सपियर' का प्रयोग एक विशेष व्यक्ति के लिए न होकर एक गुणी व्यक्ति की जाति के रूप में हुआ है, अतः यह जातिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 42. 'चतुराई' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: true },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुराई' एक गुण या भाव है, जो 'चतुर' विशेषण से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 43. 'महासागर' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महासागर' शब्द किसी विशेष महासागर का बोध न कराकर सभी महासागरों की जाति का बोध कराता है।"
    },
    {
        question: "प्रश्न 44. 'गिरोह' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गिरोह' शब्द अपराधियों या असामाजिक तत्वों के समूह का बोध कराता है, अतः यह समूहवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 45. 'ऑक्सीजन' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऑक्सीजन' एक गैस है, जिसे द्रव्यवाचक संज्ञा के अंतर्गत रखा जाता है।"
    },
    {
        question: "प्रश्न 46. 'सोमवार' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: true },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोमवार' सप्ताह के एक विशेष दिन का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 47. 'अपना' सर्वनाम से बनी भाववाचक संज्ञा कौन सी है?",
        answers: shuffle([
            { text: "अपनी", correct: false },
            { text: "पराया", correct: false },
            { text: "अपनापन", correct: true },
            { text: "आप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपना' सर्वनाम में 'पन' प्रत्यय लगाकर 'अपनापन' भाववाचक संज्ञा बनती है।"
    },
    {
        question: "प्रश्न 48. 'पक्षी' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पक्षी' शब्द से सभी पक्षियों का बोध होता है, किसी विशेष पक्षी का नहीं, अतः यह जातिवाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 49. 'पुलिस' जनता की रक्षा करती है। इस वाक्य में 'पुलिस' कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "समूहवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुलिस' एक विभाग या समूह का बोध कराती है, अतः इसे समूहवाचक संज्ञा माना जाता है।"
    },
    {
        question: "प्रश्न 50. 'शक्कर' शब्द में कौन सी संज्ञा है?",
        answers: shuffle([
            { text: "व्यक्तिवाचक संज्ञा", correct: false },
            { text: "जातिवाचक संज्ञा", correct: false },
            { text: "द्रव्यवाचक संज्ञा", correct: true },
            { text: "भाववाचक संज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शक्कर' एक पदार्थ है जिसे तौला जाता है, अतः यह द्रव्यवाचक संज्ञा है।"
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