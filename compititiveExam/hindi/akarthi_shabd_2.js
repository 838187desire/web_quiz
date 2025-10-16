const questions = [
    {
        topHeading: "एकार्थी शब्दों पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'स्वयं को दूसरों से बड़ा समझना और दूसरों को तुच्छ जानना' कहलाता है:",
        answers: shuffle([
            { text: "अभिमान", correct: false },
            { text: "घमंड", correct: false },
            { text: "अहंकार", correct: true },
            { text: "दर्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अहंकार' एक नकारात्मक भाव है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें व्यक्ति स्वयं को सर्वश्रेष्ठ मानकर दूसरों का तिरस्कार करता है।"
    },
    {
        question: "प्रश्न 2. 'अपनी योग्यता, धन या गुणों पर उचित गर्व करना' क्या है?",
        answers: shuffle([
            { text: "अहंकार", correct: false },
            { text: "अभिमान", correct: true },
            { text: "गर्व", correct: false },
            { text: "स्वाभिमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिमान' (Pride) सकारात्मक हो सकता है, जैसे 'देश की सेना पर हमें अभिमान है'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपनी अच्छाइयों पर गर्व करने का भाव है।"
    },
    {
        question: "प्रश्न 3. 'बराबर वालों या अपने से छोटों को कोई वस्तु स्नेहवश देना' कहलाता है:",
        answers: shuffle([
            { text: "भेंट", correct: false },
            { text: "दान", correct: false },
            { text: "उपहार", correct: true },
            { text: "अनुदान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपहार' (Gift) का आदान-प्रदान समान स्तर के लोगों या बड़ों द्वारा छोटों को प्रेम प्रकट करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 4. 'श्रद्धा और सम्मान के साथ अपने से बड़ों को कोई वस्तु देना' क्या कहलाता है?",
        answers: shuffle([
            { text: "उपहार", correct: false },
            { text: "भेंट", correct: true },
            { text: "दक्षिणा", correct: false },
            { text: "नजराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भेंट' (Offering) में आदर का भाव प्रमुख होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह छोटों द्वारा बड़ों को या भक्त द्वारा भगवान को अर्पित की जाती है।"
    },
    {
        question: "प्रश्न 5. 'किसी को धन, वस्तु या श्रम से सहयोग देना' कहलाता है:",
        answers: shuffle([
            { text: "सहयोग", correct: false },
            { text: "कृपा", correct: false },
            { text: "सहायता", correct: true },
            { text: "दया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सहायता' (Help) में एक पक्ष दूसरे की मदद करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें एक पक्ष दाता और दूसरा याचक होता है।"
    },
    {
        question: "प्रश्न 6. 'मिलकर किसी कार्य को पूरा करने के लिए प्रयास करना' क्या है?",
        answers: shuffle([
            { text: " सहायता", correct: false },
            { text: "सहयोग", correct: true },
            { text: "सहभागिता", correct: false },
            { text: "साझेदारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सहयोग' (Cooperation) में सभी पक्ष बराबर की भूमिका निभाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> और मिलकर एक साझा लक्ष्य के लिए काम करते हैं।"
    },
    {
        question: "प्रश्न 7. 'प्रतियोगिता या परीक्षा में उत्कृष्ट प्रदर्शन के लिए दिया जाने वाला इनाम' कहलाता है:",
        answers: shuffle([
            { text: "पुरस्कार", correct: false },
            { text: "पारितोषिक", correct: true },
            { text: "भेंट", correct: false },
            { text: "सम्मान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पारितोषिक' (Prize) विशेष रूप से किसी प्रतियोगिता में जीतने वाले को प्रदान किया जाता है।"
    },
    {
        question: "प्रश्न 8. 'किसी अच्छे कार्य या सेवा के लिए प्रदान किया जाने वाला सम्मान' क्या है?",
        answers: shuffle([
            { text: "पारितोषिक", correct: false },
            { text: "पुरस्कार", correct: true },
            { text: "इनाम", correct: false },
            { text: "उपाधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरस्कार' (Award) किसी व्यक्ति को उसकी सेवा, साहस, या किसी विशेष योगदान के लिए सरकार या संस्था द्वारा दिया जाता है, जैसे- भारतरत्न।"
    },
    {
        question: "प्रश्न 9. 'किसी अनिष्ट या बुरी घटना के होने का डर' कहलाता है:",
        answers: shuffle([
            { text: "भय", correct: false },
            { text: "चिंता", correct: false },
            { text: "शंका", correct: false },
            { text: "आशंका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आशंका' का अर्थ है भविष्य में कुछ बुरा होने की संभावना का डर।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका कोई स्पष्ट कारण न हो।"
    },
    {
        question: "प्रश्न 10. 'किसी कार्य के बिगड़ जाने या किसी समस्या के बने रहने का मानसिक बोझ' क्या है?",
        answers: shuffle([
            { text: "आशंका", correct: false },
            { text: "तनाव", correct: false },
            { text: "चिंता", correct: true },
            { text: "सोच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिंता' (Worry) किसी वर्तमान समस्या को लेकर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके कारण मन अशांत रहता है।"
    },
    {
        question: "प्रश्न 11. 'दो या दो से अधिक लोगों के बीच उद्देश्यपूर्ण बातचीत' कहलाती है:",
        answers: shuffle([
            { text: "वार्तालाप", correct: false },
            { text: "बातचीत", correct: false },
            { text: "संवाद", correct: true },
            { text: "भाषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संवाद' (Dialogue) प्रायः किसी गंभीर विषय पर विचारों के आदान-प्रदान के लिए होता है, जैसे- गुरु-शिष्य संवाद।"
    },
    {
        question: "प्रश्न 12. 'लोगों के बीच होने वाली सामान्य अनौपचारिक बातचीत' को क्या कहते हैं?",
        answers: shuffle([
            { text: "संवाद", correct: false },
            { text: "वार्तालाप", correct: true },
            { text: "गपशप", correct: false },
            { text: "चर्चा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वार्तालाप' (Conversation) एक सामान्य और अनौपचारिक बातचीत है जो किसी भी विषय पर हो सकती है।"
    },
    {
        question: "प्रश्न 13. 'जो विशेष या असाधारण न हो' के लिए एक शब्द है:",
        answers: shuffle([
            { text: "सामान्य", correct: false },
            { text: "साधारण", correct: true },
            { text: "आम", correct: false },
            { text: "औसत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साधारण' (Ordinary/Simple) का प्रयोग व्यक्ति या वस्तु के विशेष न होने के अर्थ में होता है, जैसे- 'यह एक साधारण व्यक्ति है'।"
    },
    {
        question: "प्रश्न 14. 'जो सब पर लागू हो या अधिकतर मामलों में पाया जाए' कहलाता है:",
        answers: shuffle([
            { text: "साधारण", correct: false },
            { text: "सामान्य", correct: true },
            { text: "सार्वजनिक", correct: false },
            { text: "प्रचलित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सामान्य' (General/Normal) का अर्थ है जो नियम या व्यवहार अधिकतर स्थितियों में लागू होता है, जैसे- 'यह एक सामान्य नियम है'।"
    },
    {
        question: "प्रश्न 15. 'मन में किसी वस्तु को पाने की चाह' के लिए सामान्य शब्द है:",
        answers: shuffle([
            { text: "आकांक्षा", correct: false },
            { text: "इच्छा", correct: true },
            { text: "अभिलाषा", correct: false },
            { text: "कामना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इच्छा' (Wish/Desire) किसी भी छोटी-बड़ी चीज के लिए हो सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> और यह एक सामान्य मानवीय भाव है।"
    },
    {
        question: "प्रश्न 16. 'जीवन में कुछ बड़ा करने या कोई उच्च पद प्राप्त करने की इच्छा' क्या कहलाती है?",
        answers: shuffle([
            { text: "इच्छा", correct: false },
            { text: "अभिलाषा", correct: false },
            { text: "आकांक्षा", correct: true },
            { text: "महत्वाकांक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आकांक्षा' (Aspiration) का संबंध भविष्य के किसी बड़े लक्ष्य से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें उन्नति का भाव निहित होता है।"
    },
    {
        question: "प्रश्न 17. 'ईंट, सीमेंट आदि से बना भवन' कहलाता है:",
        answers: shuffle([
            { text: "गृह", correct: false },
            { text: "मकान", correct: true },
            { text: "आवास", correct: false },
            { text: "निवास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मकान' केवल एक भौतिक संरचना (Building) को संदर्भित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें भावनाओं का कोई स्थान नहीं होता।"
    },
    {
        question: "प्रश्न 18. 'वह स्थान जहाँ व्यक्ति अपने परिवार के साथ रहता है' कहलाता है:",
        answers: shuffle([
            { text: "मकान", correct: false },
            { text: "गृह", correct: true },
            { text: "भवन", correct: false },
            { text: "बसेरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गृह' (Home) में परिवार, प्रेम और अपनेपन का भाव होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केवल एक इमारत नहीं, बल्कि भावनाओं से जुड़ा स्थान है।"
    },
    {
        question: "प्रश्न 19. 'शारीरिक कष्ट' के लिए सबसे उपयुक्त शब्द है:",
        answers: shuffle([
            { text: "दुःख", correct: false },
            { text: "पीड़ा", correct: true },
            { text: "वेदना", correct: false },
            { text: "व्यथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पीड़ा' का संबंध मुख्यतः शरीर में होने वाले दर्द या कष्ट से होता है, जैसे- 'सिर में पीड़ा हो रही है'।"
    },
    {
        question: "प्रश्न 20. 'मन का कष्ट या मानसिक दुःख' क्या कहलाता है?",
        answers: shuffle([
            { text: "पीड़ा", correct: false },
            { text: "दुःख", correct: false },
            { text: "व्यथा", correct: true },
            { text: "क्लेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्यथा' एक गहरा मानसिक दुःख है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे व्यक्ति दूसरों से कह नहीं पाता और अंदर ही अंदर सहता है।"
    },
    {
        question: "प्रश्न 21. 'एक छोटे राज्य या क्षेत्र का शासक' कहलाता है:",
        answers: shuffle([
            { text: "सम्राट", correct: false },
            { text: "नरेश", correct: false },
            { text: "राजा", correct: true },
            { text: "नृप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राजा' सामान्यतः एक राज्य का वंशानुगत शासक होता है।"
    },
    {
        question: "प्रश्न 22. 'अनेक राजाओं को जीतने वाला या बहुत बड़े साम्राज्य का शासक' क्या कहलाता है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "महाराजा", correct: false },
            { text: "सम्राट", correct: true },
            { text: "अधिराज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सम्राट' (Emperor) का पद राजा से बड़ा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसका साम्राज्य बहुत विस्तृत होता है, जैसे- सम्राट अशोक।"
    },
    {
        question: "प्रश्न 23. 'किसी विषय पर श्रोताओं को जानकारी देने के लिए दिया गया वक्तव्य' है:",
        answers: shuffle([
            { text: "प्रवचन", correct: false },
            { text: "व्याख्यान", correct: false },
            { text: "भाषण", correct: true },
            { text: "संबोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भाषण' (Speech) सामान्यतः राजनीतिक या सामाजिक विषयों पर किसी जनसभा में दिया जाता है।"
    },
    {
        question: "प्रश्न 24. 'धर्म और आध्यात्म के विषय पर दिया जाने वाला उपदेश' कहलाता है:",
        answers: shuffle([
            { text: "भाषण", correct: false },
            { text: "उपदेश", correct: false },
            { text: "प्रवचन", correct: true },
            { text: "सत्संग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रवचन' (Discourse/Sermon) संतों, महात्माओं या धार्मिक गुरुओं द्वारा दिया जाता है।"
    },
    {
        question: "प्रश्न 25. 'किसी काम को करने का दृढ़ निश्चय' क्या कहलाता है?",
        answers: shuffle([
            { text: "प्रतिज्ञा", correct: false },
            { text: "प्रण", correct: false },
            { text: "संकल्प", correct: true },
            { text: "निश्चय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संकल्प' (Resolution) एक सकारात्मक और दृढ़ निश्चय है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे व्यक्ति अपने सुधार या किसी अच्छे काम के लिए लेता है。"
    },
    {
        question: "प्रश्न 26. 'किसी बात पर दृढ़ रहने की कठोर शपथ' को क्या कहते हैं?",
        answers: shuffle([
            { text: "संकल्प", correct: false },
            { text: "प्रतिज्ञा", correct: true },
            { text: "वादा", correct: false },
            { text: "वचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रतिज्ञा' (Vow/Pledge) एक गंभीर और अटूट शपथ होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे किसी भी परिस्थिति में पूरा करना होता है, जैसे- भीष्म प्रतिज्ञा।"
    },
    {
        question: "प्रश्न 27. 'किसी नियम, कानून या विधान में किया गया बदलाव' कहलाता है:",
        answers: shuffle([
            { text: "सुधार", correct: false },
            { text: "परिवर्तन", correct: false },
            { text: "संशोधन", correct: true },
            { text: "हेर-फेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संशोधन' (Amendment) का प्रयोग विशेषकर लिखित दस्तावेजों, जैसे- संविधान या कानून में आधिकारिक बदलाव के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 28. 'किसी वस्तु या व्यवस्था में आई खराबी को दूर कर उसे बेहतर बनाना' क्या है?",
        answers: shuffle([
            { text: "संशोधन", correct: false },
            { text: "सुधार", correct: true },
            { text: "नवीनीकरण", correct: false },
            { text: "उन्नति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुधार' (Improvement) का अर्थ है किसी चीज की कमियों को दूर कर उसे पहले से अच्छी स्थिति में लाना।"
    },
    {
        question: "प्रश्न 29. 'किसी काम के लिए किया जाने वाला शारीरिक प्रयास' कहलाता है:",
        answers: shuffle([
            { text: "प्रयत्न", correct: false },
            { text: "प्रयास", correct: false },
            { text: "चेष्टा", correct: true },
            { text: "उद्यम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चेष्टा' में शारीरिक क्रियाकलाप की प्रधानता होती है, जैसे- 'बंदर ने पेड़ पर चढ़ने की चेष्टा की'।"
    },
    {
        question: "प्रश्न 30. 'किसी लक्ष्य को प्राप्त करने के लिए किया जाने वाला हर संभव प्रयास' क्या है?",
        answers: shuffle([
            { text: "चेष्टा", correct: false },
            { text: "प्रयत्न", correct: true },
            { text: "कोशिश", correct: false },
            { text: "श्रम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रयत्न' (Effort) एक व्यापक शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें मानसिक और शारीरिक दोनों तरह के प्रयास शामिल होते हैं।"
    },
    {
        question: "प्रश्न 31. 'किसी अद्भुत या अलौकिक वस्तु को देखकर होने वाला आश्चर्य' कहलाता है:",
        answers: shuffle([
            { text: "आश्चर्य", correct: false },
            { text: "अचंभा", correct: false },
            { text: "विस्मय", correct: true },
            { text: "हैरानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विस्मय' (Awe/Wonder) में आश्चर्य के साथ-साथ प्रशंसा और श्रद्धा का भाव भी मिला होता है।"
    },
    {
        question: "प्रश्न 32. 'किसी अप्रत्याशित या अनपेक्षित घटना पर होने वाली हैरानी' क्या है?",
        answers: shuffle([
            { text: "विस्मय", correct: false },
            { text: "आश्चर्य", correct: true },
            { text: "कौतुक", correct: false },
            { text: "जिज्ञासा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आश्चर्य' (Surprise) एक सामान्य भाव है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो कुछ भी अनपेक्षित देखकर या सुनकर हो सकता है।"
    },
    {
        question: "प्रश्न 33. 'लंबे समय तक किसी कार्य को करने से प्राप्त ज्ञान या कौशल' क्या है?",
        answers: shuffle([
            { text: "अनुभूति", correct: false },
            { text: "ज्ञान", correct: false },
            { text: "अनुभव", correct: true },
            { text: "बोध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुभव' (Experience) समय के साथ और किसी कार्य को बार-बार करने से मिलता है।"
    },
    {
        question: "प्रश्न 34. 'किसी सुख-दुःख या भाव को मन की गहराई में महसूस करना' कहलाता है:",
        answers: shuffle([
            { text: "अनुभव", correct: false },
            { text: "अनुभूति", correct: true },
            { text: "संवेदना", correct: false },
            { text: "अहसास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुभूति' (Feeling/Realization) एक आंतरिक और क्षणिक एहसास है, जैसे- 'मुझे शांति की अनुभूति हो रही है'।"
    },
    {
        question: "प्रश्न 35. 'जितना मिला है, उसी में प्रसन्न रहने का भाव' क्या है?",
        answers: shuffle([
            { text: "तृप्ति", correct: false },
            { text: "परितोष", correct: false },
            { text: "संतोष", correct: true },
            { text: "सुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संतोष' (Contentment) एक मानसिक अवस्था है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें व्यक्ति अधिक की इच्छा नहीं करता और जो है, उसी में खुश रहता है।"
    },
    {
        question: "प्रश्न 36. 'किसी इच्छा या आवश्यकता के पूर्ण हो जाने पर मिलने वाली पूर्ण संतुष्टि' क्या है?",
        answers: shuffle([
            { text: "संतोष", correct: false },
            { text: "तृप्ति", correct: true },
            { text: "शांति", correct: false },
            { text: "आनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तृप्ति' (Satiation/Satisfaction) किसी कमी के पूरा हो जाने पर मिलती है, जैसे- 'भोजन से तृप्ति मिली'।"
    },
    {
        question: "प्रश्न 37. 'शारीरिक रूप से किया जाने वाला कार्य' कहलाता है:",
        answers: shuffle([
            { text: "परिश्रम", correct: false },
            { text: "मेहनत", correct: false },
            { text: "कर्म", correct: false },
            { text: "श्रम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्रम' (Labour) का सामान्य अर्थ शारीरिक मेहनत से है, जैसे- 'मजदूर श्रम करते हैं'।"
    },
    {
        question: "प्रश्न 38. 'किसी लक्ष्य को प्राप्त करने के लिए की जाने वाली बहुत अधिक मेहनत' क्या है?",
        answers: shuffle([
            { text: "श्रम", correct: false },
            { text: "परिश्रम", correct: true },
            { text: "प्रयास", correct: false },
            { text: "उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिश्रम' (Hard Work/Toil) में अधिक प्रयास और लगन की आवश्यकता होती है, जैसे- 'परीक्षा के लिए परिश्रम करना'।"
    },
    {
        question: "प्रश्न 39. 'कोई अनुचित कार्य करने की प्रवृत्ति' के लिए सही शब्द है:",
        answers: shuffle([
            { text: "पाप", correct: false },
            { text: "अपराध", correct: false },
            { text: "दोष", correct: true },
            { text: "त्रुटि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दोष' का अर्थ है कोई कमी, बुराई या नैतिक पतन।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी व्यक्ति या वस्तु के अवगुण को दर्शाता है।"
    },
    {
        question: "प्रश्न 40. 'काम में होने वाली अनजाने में हुई गलती' क्या कहलाती है?",
        answers: shuffle([
            { text: "दोष", correct: false },
            { text: "भूल", correct: false },
            { text: "त्रुटि", correct: true },
            { text: "अपराध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रुटि' (Error) का प्रयोग अक्सर गणना, लेखन या तकनीकी कार्यों में हुई गलती के लिए होता है।"
    },
    {
        question: "प्रश्न 41. 'सरकार या किसी सक्षम प्राधिकारी द्वारा जारी की गई सार्वजनिक सूचना' है:",
        answers: shuffle([
            { text: "विज्ञप्ति", correct: false },
            { text: "विज्ञापन", correct: false },
            { text: "घोषणा", correct: false },
            { text: "अधिसूचना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधिसूचना' (Notification) एक आधिकारिक और कानूनी सूचना होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो राजपत्र (Gazette) में प्रकाशित होती है।"
    },
    {
        question: "प्रश्न 42. 'किसी संस्था या व्यक्ति द्वारा किसी विषय पर दी जाने वाली आधिकारिक जानकारी' क्या है?",
        answers: shuffle([
            { text: "अधिसूचना", correct: false },
            { text: "विज्ञप्ति", correct: true },
            { text: "सूचना", correct: false },
            { text: "परिपत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विज्ञप्ति' (Communiqué/Press Release) का उद्देश्य किसी निर्णय या घटना की जानकारी आम जनता या प्रेस को देना होता है।"
    },
    {
        question: "प्रश्न 43. 'किसी विषय पर गुप्त रूप से की जाने वाली सलाह' कहलाती है:",
        answers: shuffle([
            { text: "परामर्श", correct: false },
            { text: "मंत्रणा", correct: true },
            { text: "सलाह", correct: false },
            { text: "राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मंत्रणा' में गोपनीयता का भाव होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और यह अक्सर राजनीतिक या गंभीर विषयों पर कुछ खास लोगों के बीच होती है।"
    },
    {
        question: "प्रश्न 44. 'किसी विशेषज्ञ से किसी विषय पर ली जाने वाली राय' क्या है?",
        answers: shuffle([
            { text: "मंत्रणा", correct: false },
            { text: "विचार-विमर्श", correct: false },
            { text: "परामर्श", correct: true },
            { text: "सुझाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परामर्श' (Consultation) में किसी ज्ञानी या अनुभवी व्यक्ति से सलाह ली जाती है, जैसे- डॉक्टर से परामर्श।"
    },
    {
        question: "प्रश्न 45. 'जिसकी कोई उपमा न दी जा सके' कहलाता है:",
        answers: shuffle([
            { text: "अद्वितीय", correct: false },
            { text: "अनुपम", correct: true },
            { text: "अतुलनीय", correct: false },
            { text: "अपूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुपम' का अर्थ है 'जिसकी उपमा न हो'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी वस्तु की सुंदरता या श्रेष्ठता की पराकाष्ठा को दर्शाता है।"
    },
    {
        question: "प्रश्न 46. 'तत्वों, तथ्यों और शास्त्रों की जानकारी' को क्या कहते हैं?",
        answers: shuffle([
            { text: "बुद्धि", correct: false },
            { text: "विद्या", correct: false },
            { text: "ज्ञान", correct: true },
            { text: "शिक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्ञान' (Knowledge) अध्ययन, अनुभव और अवलोकन से प्राप्त होता है।"
    },
    {
        question: "प्रश्न 47. 'किसी भी प्रकार के बाहरी बंधन का अभाव' कहलाता है:",
        answers: shuffle([
            { text: "स्वाधीनता", correct: false },
            { text: "मुक्ति", correct: false },
            { text: "आजादी", correct: false },
            { text: "स्वतंत्रता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वतंत्रता' (Freedom/Liberty) का अर्थ है अपनी इच्छा अनुसार कार्य करने की आजादी।<br><br><i class='fa-solid fa-angles-right icon'></i> जिस पर कोई बाहरी नियंत्रण न हो।"
    },
    {
        question: "प्रश्न 48. 'किसी दूसरे देश के शासन से मुक्ति, अर्थात अपना शासन' कहलाता है:",
        answers: shuffle([
            { text: "स्वतंत्रता", correct: false },
            { text: "स्वराज", correct: false },
            { text: "स्वाधीनता", correct: true },
            { text: "स्वावलंबन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वाधीनता' (Sovereignty/Independence) का प्रयोग विशेष रूप से राजनीतिक पराधीनता से मुक्ति के लिए होता है, जैसे- 'भारत की स्वाधीनता'।"
    },
    {
        question: "प्रश्न 49. 'किसी व्यक्ति के गुणों का बखान करना' कहलाता है:",
        answers: shuffle([
            { text: "स्तुति", correct: false },
            { text: "वंदना", correct: false },
            { text: "प्रशंसा", correct: true },
            { text: "अभिनंदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रशंसा' (Praise) किसी भी व्यक्ति के अच्छे कार्यों या गुणों के लिए की जा सकती है।"
    },
    {
        question: "प्रश्न 50. 'ईश्वर या देवताओं के गुणों का भक्तिपूर्वक गान करना' क्या है?",
        answers: shuffle([
            { text: "प्रशंसा", correct: false },
            { text: "आराधना", correct: false },
            { text: "स्तुति", correct: true },
            { text: "प्रार्थना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्तुति' विशेष रूप से ईश्वर के प्रति आदर और भक्ति भाव से उनके महात्म्य का वर्णन करने के लिए प्रयुक्त होती है।"
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