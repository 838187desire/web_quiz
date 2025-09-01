const questions = [
    {
        topHeading: "तद्धित प्रत्यय पर आधारित 47 बहुविकल्पीय प्रश्न (quiz_no.23)"
    },
    {
        question: "किस शब्द में 'आनी' प्रत्यय का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "देवरानी", correct: true },
            { text: "लिखानी", correct: false },
            { text: "महारानी", correct: false },
            { text: "कहानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देवरानी' शब्द में 'देवर' मूल शब्द और 'आनी' प्रत्यय है, जो एक संबंधवाचक तद्धित प्रत्यय है।"
    },
    {
        question: "'मीठास' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-आस", correct: true },
            { text: "-आ", correct: false },
            { text: "-स", correct: false },
            { text: "-टास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मीठास' शब्द में 'मीठा' विशेषण और '-आस' प्रत्यय है, जो एक भाववाचक संज्ञा का निर्माण करता है।"
    },
    {
        question: "किस शब्द में 'आई' प्रत्यय का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "सिलाई", correct: false },
            { text: "ठकुराई", correct: true },
            { text: "पढ़ाई", correct: false },
            { text: "भलाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठकुराई' शब्द में 'ठाकुर' संज्ञा है, और 'आई' प्रत्यय का प्रयोग हुआ है, जिससे यह तद्धित प्रत्यय का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्पों में क्रियाएँ हैं, इसलिए वे कृदंत प्रत्यय हैं।"
    },
    {
        question: "'लुहारिन' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-इन", correct: true },
            { text: "-इनि", correct: false },
            { text: "-नि", correct: false },
            { text: "-हारिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लुहारिन' शब्द में 'लुहार' मूल शब्द और '-इन' प्रत्यय है, जो एक स्त्रीवाचक तद्धित प्रत्यय है।"
    },
    {
        question: "निम्नलिखित में से किस शब्द में 'ईला' प्रत्यय का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "रंगीला", correct: true },
            { text: "पीला", correct: false },
            { text: "चमकीला", correct: true },
            { text: "पथरीला", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रंगीला में 'रंग' संज्ञा और 'ईला' प्रत्यय है।<br><br><i class='fa-solid fa-angles-right icon'></i> पथरीला में 'पत्थर' संज्ञा और 'ईला' प्रत्यय है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये दोनों संज्ञा से विशेषण बनाते हैं।"
    },
    {
        question: "'लठैत' शब्द में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-ऐत", correct: true },
            { text: "-एत", correct: false },
            { text: "-लैत", correct: false },
            { text: "-टैत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लठैत' में 'लाठी' (लठ) संज्ञा और '-ऐत' प्रत्यय है, जो 'करने वाला' का अर्थ देता है।"
    },
    {
        question: "किस शब्द में 'वाला' प्रत्यय का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "पैसेवाला", correct: true },
            { text: "खेलनेवाला", correct: false },
            { text: "जानेवाला", correct: false },
            { text: "पढ़नेवाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पैसेवाला' शब्द में 'पैसे' संज्ञा और 'वाला' प्रत्यय है, जो तद्धित प्रत्यय का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्प क्रिया से बने हैं, इसलिए वे कृदंत प्रत्यय हैं।"
    },
    {
        question: "'सुनारिन' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-इन", correct: true },
            { text: "-आइन", correct: false },
            { text: "-इन", correct: false },
            { text: "-रिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुनारिन' में 'सुनार' मूल शब्द और '-इन' प्रत्यय है।"
    },
    {
        question: "'रसोईया' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-इया", correct: true },
            { text: "-इया", correct: false },
            { text: "-या", correct: false },
            { text: "-सोइया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रसोईया' शब्द में 'रसोई' मूल शब्द और '-इया' प्रत्यय है, जो एक पेशावाचक तद्धित प्रत्यय है।"
    },
    {
        question: "'अपनापन' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-पन", correct: true },
            { text: "-नापन", correct: false },
            { text: "-प", correct: false },
            { text: "-न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपनापन' शब्द में 'अपना' सर्वनाम और '-पन' प्रत्यय है, जो एक भाववाचक संज्ञा बनाता है।"
    },
    {
        question: "'सपेरा' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-रा", correct: false },
            { text: "-एरा", correct: true },
            { text: "-परा", correct: false },
            { text: "-ईरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सपेरा' शब्द में 'साँप' मूल शब्द और '-एरा' प्रत्यय है, जो एक पेशावाचक तद्धित प्रत्यय है।"
    },
    {
        question: "किस शब्द में 'ई' प्रत्यय का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "गरीबी", correct: true },
            { text: "बुढ़ापा", correct: false },
            { text: "हरियाली", correct: true },
            { text: "सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गरीबी में 'गरीब' विशेषण और 'ई' प्रत्यय है।<br><br><i class='fa-solid fa-angles-right icon'></i> हरियाली में 'हरा' विशेषण और 'ई' प्रत्यय है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों भाववाचक संज्ञा बनाते हैं।"
    },
    {
        question: "'बुढ़ापा' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-पा", correct: false },
            { text: "-आपा", correct: true },
            { text: "-पा", correct: false },
            { text: "-पा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुढ़ापा' में 'बूढ़ा' विशेषण और '-आपा' प्रत्यय है, जो भाववाचक तद्धित प्रत्यय का उदाहरण है।"
    },
    {
        question: "'कठोरता' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-ता", correct: true },
            { text: "-ता", correct: false },
            { text: "-रता", correct: false },
            { text: "-ठोरता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कठोरता' में 'कठोर' विशेषण और '-ता' प्रत्यय है, जो भाववाचक संज्ञा बनाता है।"
    },
    {
        question: "किस शब्द में 'हट' प्रत्यय का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "कड़वाहट", correct: true },
            { text: "सजावट", correct: false },
            { text: "लिखावट", correct: false },
            { text: "दिखावट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कड़वाहट' में 'कड़वा' विशेषण और 'हट' प्रत्यय है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्प कृदंत प्रत्यय के उदाहरण हैं।"
    },
    {
        question: "'लड़कपन' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-पन", correct: true },
            { text: "-पन", correct: false },
            { text: "-कपन", correct: false },
            { text: "-लपन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़कपन' में 'लड़का' संज्ञा और '-पन' प्रत्यय है।"
    },
    {
        question: "किस शब्द में 'आइन' प्रत्यय का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "पंडिताइन", correct: true },
            { text: "ठकुराइन", correct: true },
            { text: "लुहारिन", correct: false },
            { text: "सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंडिताइन में 'पंडित' संज्ञा और 'आइन' प्रत्यय है।<br><br><i class='fa-solid fa-angles-right icon'></i> ठकुराइन में 'ठाकुर' संज्ञा और 'आइन' प्रत्यय है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों स्त्रीवाचक तद्धित प्रत्यय हैं।"
    },
    {
        question: "'मानवीय' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-ईय", correct: true },
            { text: "-य", correct: false },
            { text: "-वीय", correct: false },
            { text: "-ईय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मानवीय' में 'मानव' संज्ञा और '-ईय' प्रत्यय है।"
    },
    {
        question: "'चिरंजीव' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-इव", correct: false },
            { text: "-ईव", correct: false },
            { text: "-जीव", correct: false },
            { text: "कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिरंजीव' शब्द में 'चिरं' उपसर्ग और 'जीव' मूल शब्द है, इसमें कोई तद्धित प्रत्यय नहीं है।"
    },
    {
        question: "'सुनेहरा' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-हरा", correct: false },
            { text: "-एहरा", correct: true },
            { text: "-हरा", correct: false },
            { text: "-हरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुनेहरा' में 'सोना' मूल शब्द और '-एहरा' प्रत्यय है।"
    },
    {
        question: "'सुगंधित' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-इत", correct: true },
            { text: "-इत", correct: false },
            { text: "-ित", correct: false },
            { text: "-त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुगंधित' में 'सुगंध' संज्ञा और '-इत' प्रत्यय है, जो विशेषण बनाता है।"
    },
    {
        question: "'मानवता' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-ता", correct: true },
            { text: "-ता", correct: false },
            { text: "-ता", correct: false },
            { text: "-ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मानवता' में 'मानव' संज्ञा और '-ता' प्रत्यय है।"
    },
    {
        question: "किस शब्द में 'आलु' प्रत्यय का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "दयालु", correct: true },
            { text: "कृपालु", correct: true },
            { text: "शंकालु", correct: true },
            { text: "सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन सभी शब्दों में 'दया', 'कृपा' और 'शंका' संज्ञाएँ हैं, और 'आलु' प्रत्यय जुड़कर विशेषण बना है।"
    },
    {
        question: "'चिकनाहट' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-हट", correct: false },
            { text: "-आहट", correct: true },
            { text: "-ट", correct: false },
            { text: "-नाहट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिकनाहट' में 'चिकना' विशेषण और '-आहट' प्रत्यय है।"
    },
    {
        question: "'सुनारिन' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-इन", correct: true },
            { text: "-आइन", correct: false },
            { text: "-इन", correct: false },
            { text: "-रिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुनारिन' में 'सुनार' मूल शब्द और '-इन' प्रत्यय है।"
    },
    {
        question: "'मुरैना' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-ना", correct: false },
            { text: "-एना", correct: false },
            { text: "-इना", correct: true },
            { text: "-इना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुरैना' में 'मोर' संज्ञा और '-इना' प्रत्यय है, जो एक स्थानवाचक तद्धित प्रत्यय है।"
    },
    {
        question: "'परोपकारी' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-कारी", correct: true },
            { text: "-ई", correct: false },
            { text: "-री", correct: false },
            { text: "-कारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परोपकारी' में 'परोपकार' संज्ञा और '-कारी' प्रत्यय है।"
    },
    {
        question: "'पंडितानी' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-आनी", correct: true },
            { text: "-तानी", correct: false },
            { text: "-नी", correct: false },
            { text: "-नी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंडितानी' में 'पंडित' संज्ञा और '-आनी' प्रत्यय है।"
    },
    {
        question: "'सौतेला' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-ला", correct: false },
            { text: "-एला", correct: true },
            { text: "-ला", correct: false },
            { text: "-ला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सौतेला' में 'सौत' संज्ञा और '-एला' प्रत्यय है, जो संबंधवाचक तद्धित प्रत्यय है।"
    },
    {
        question: "'मानवीयता' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-ता", correct: true },
            { text: "-यता", correct: false },
            { text: "-ता", correct: false },
            { text: "-ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मानवीयता' में 'मानवीय' विशेषण और '-ता' प्रत्यय है।"
    },
    {
        question: "'घंटी' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-ई", correct: false },
            { text: "-ई", correct: true },
            { text: "-टी", correct: false },
            { text: "-ई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घंटी' में 'घंटा' मूल शब्द और '-ई' प्रत्यय है, जो लघुतावाचक प्रत्यय है।"
    },
    {
        question: "'पहाड़ी' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-डी", correct: false },
            { text: "-ई", correct: true },
            { text: "-ड़ी", correct: false },
            { text: "-ई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पहाड़ी' में 'पहाड़' संज्ञा और '-ई' प्रत्यय है, जो संज्ञा से विशेषण बनाता है।"
    },
    {
        question: "'रंगीला' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-ईला", correct: true },
            { text: "-ईला", correct: false },
            { text: "-ला", correct: false },
            { text: "-ला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रंगीला' में 'रंग' संज्ञा और '-ईला' प्रत्यय है, जो विशेषण बनाता है।"
    },
    {
        question: "'गरीबनवाज़' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-नवाज", correct: true },
            { text: "-वाज", correct: false },
            { text: "-वाज", correct: false },
            { text: "-बाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरीबनवाज़' में 'गरीब' संज्ञा और '-नवाज' प्रत्यय है।"
    },
    {
        question: "'लड़कपन' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-पन", correct: true },
            { text: "-पन", correct: false },
            { text: "-कपन", correct: false },
            { text: "-लपन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़कपन' में 'लड़का' संज्ञा और '-पन' प्रत्यय है।"
    },
    {
        question: "'दयावान' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-वान", correct: true },
            { text: "-वान", correct: false },
            { text: "-वान", correct: false },
            { text: "-वान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दयावान' में 'दया' संज्ञा और '-वान' प्रत्यय है, जो गुणवाचक विशेषण बनाता है।"
    },
    {
        question: "'बुद्धिमानी' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-मानी", correct: false },
            { text: "-मानी", correct: false },
            { text: "-आनी", correct: false },
            { text: "-ई", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुद्धिमानी' में 'बुद्धिमान' विशेषण और '-ई' प्रत्यय है, जो भाववाचक संज्ञा बनाता है।"
    },
    {
        question: "'मोटापा' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-पा", correct: false },
            { text: "-आपा", correct: true },
            { text: "-आपा", correct: false },
            { text: "-पा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मोटापा' में 'मोटा' विशेषण और '-आपा' प्रत्यय है।"
    },
    {
        question: "'बचपना' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-पन", correct: false },
            { text: "-पन", correct: true },
            { text: "-ना", correct: false },
            { text: "-ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बचपना' में 'बचपन' संज्ञा और '-पन' प्रत्यय है।"
    },
    {
        question: "'अखिल' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-इल", correct: false },
            { text: "-ल", correct: false },
            { text: "-ल", correct: false },
            { text: "कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अखिल' एक मूल शब्द है, इसमें कोई प्रत्यय नहीं है।"
    },
    {
        question: "'गरिमा' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-मा", correct: false },
            { text: "-इमा", correct: true },
            { text: "-रिमा", correct: false },
            { text: "-मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरिमा' में 'गरिम' (गुरु) मूल शब्द और '-इमा' प्रत्यय है, जो भाववाचक संज्ञा बनाता है।"
    },
    {
        question: "'सुनारिन' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-इन", correct: true },
            { text: "-आइन", correct: false },
            { text: "-इन", correct: false },
            { text: "-रिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुनारिन' में 'सुनार' मूल शब्द और '-इन' प्रत्यय है।"
    },
    {
        question: "'धार्मिक' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-इक", correct: true },
            { text: "-क", correct: false },
            { text: "-इक", correct: false },
            { text: "-िक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धार्मिक' में 'धर्म' संज्ञा और '-इक' प्रत्यय है, जो विशेषण बनाता है।"
    },
    {
        question: "'मानवतावादी' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-वादी", correct: true },
            { text: "-आदी", correct: false },
            { text: "-दी", correct: false },
            { text: "-वादी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मानवतावादी' में 'मानवता' संज्ञा और '-वादी' प्रत्यय है।"
    },
    {
        question: "'रसीला' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-ला", correct: false },
            { text: "-ईला", correct: true },
            { text: "-ला", correct: false },
            { text: "-ला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रसीला' में 'रस' संज्ञा और '-ईला' प्रत्यय है।"
    },
    {
        question: "'सौंदर्य' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-र्य", correct: false },
            { text: "-र्य", correct: false },
            { text: "-य", correct: true },
            { text: "-य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सौंदर्य' में 'सुंदर' विशेषण और '-य' प्रत्यय है।"
    },
    {
        question: "'मुरैला' में कौन सा प्रत्यय है?",
        answers: shuffle([
            { text: "-ला", correct: false },
            { text: "-एला", correct: true },
            { text: "-ला", correct: false },
            { text: "-ला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुरैला' में 'मोर' संज्ञा और '-एला' प्रत्यय है।"
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