const questions = [
    {
        topHeading: "पर्यायवाची शब्दों पर आधारित 50 MCQs, part_4 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'पद्मा' निम्नलिखित में से किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "सरस्वती", correct: false },
            { text: "पार्वती", correct: false },
            { text: "लक्ष्मी", correct: true },
            { text: "सीता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पद्मा' अर्थात् कमल पर आसन ग्रहण करने वाली, यह लक्ष्मी जी का एक नाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> कमला, रमा और श्री भी लक्ष्मी के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 2. इनमें से कौन सा शब्द 'किरण' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "रश्मि", correct: false },
            { text: "कर", correct: false },
            { text: "सारंग", correct: true },
            { text: "मरीचि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सारंग' एक अनेकार्थी शब्द है (जैसे- मोर, सर्प), यह किरण का पर्यायवाची नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> रश्मि, कर और मरीचि, किरण के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 3. 'कमला' और 'रमा' किस देवी के नाम हैं?",
        answers: shuffle([
            { text: "दुर्गा", correct: false },
            { text: "लक्ष्मी", correct: true },
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमला' (कमल वाली) और 'रमा' दोनों ही धन की देवी लक्ष्मी के प्रसिद्ध पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 4. 'गौरी' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "लक्ष्मी", correct: false },
            { text: "पार्वती", correct: true },
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गौरी' का अर्थ गौरवर्ण वाली होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नाम भगवान शिव की पत्नी पार्वती के लिए प्रयुक्त होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उमा, शिवा, भवानी भी इन्हीं के नाम हैं।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से कौन सा 'पार्वती' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "उमा", correct: false },
            { text: "शिवा", correct: false },
            { text: "कालिंदी", correct: true },
            { text: "दुर्गा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कालिंदी' यमुना नदी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> उमा, शिवा और दुर्गा, देवी पार्वती के ही विभिन्न रूप और नाम हैं।"
    },
    {
        question: "प्रश्न 6. 'भवानी' का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "गौरी, उमा, शिवा", correct: true },
            { text: "कमला, पद्मा, रमा", correct: false },
            { text: "मोहन, श्याम, मुरारी", correct: false },
            { text: "भागीरथी, जाह्नवी, सुरसरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भवानी' अर्थात् भव (शिव) की पत्नी, यह पार्वती जी का नाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> गौरी, उमा और शिवा भी उन्हीं के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 7. 'मुरारी' निम्नलिखित में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "राम", correct: false },
            { text: "इंद्र", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "कामदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुर' नामक दैत्य का संहार करने के कारण भगवान कृष्ण को 'मुरारि' (मुर + अरि) कहा जाता है।"
    },
    {
        question: "प्रश्न 8. इनमें से कौन सा शब्द 'कृष्ण' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "गोपाल", correct: false },
            { text: "केशव", correct: false },
            { text: "रघुपति", correct: true },
            { text: "श्याम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रघुपति' (रघु वंश के स्वामी) भगवान राम का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि गोपाल, केशव और श्याम, भगवान कृष्ण के नाम हैं।"
    },
    {
        question: "प्रश्न 9. 'मोहन' और 'गोपाल' किसके पर्यायवाची शब्द हैं?",
        answers: shuffle([
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: false },
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मोहन' (मन को मोहने वाला) और 'गोपाल' (गायों का पालक) दोनों ही भगवान कृष्ण के प्रसिद्ध नाम हैं।"
    },
    {
        question: "प्रश्न 10. 'राघव' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "कृष्ण", correct: false },
            { text: "राम", correct: true },
            { text: "इंद्र", correct: false },
            { text: "यमराज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रघु वंश में जन्म लेने के कारण भगवान राम को 'राघव' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रघुपति और रघुवर भी इसी कारण से उनके नाम हैं।"
    },
    {
        question: "प्रश्न 11. निम्नलिखित में से कौन सा 'राम' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "सीतापति", correct: false },
            { text: "जानकीनाथ", correct: false },
            { text: "देवराज", correct: true },
            { text: "रघुवर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देवराज' (देवताओं के राजा) इंद्र का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> सीतापति, जानकीनाथ और रघुवर भगवान राम के नाम हैं।"
    },
    {
        question: "प्रश्न 12. 'जानकीनाथ' का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "रघुपति, राघव, रघुवर", correct: true },
            { text: "मोहन, श्याम, मुरारी", correct: false },
            { text: "मदन, मनोज, अनंग", correct: false },
            { text: "सुरेश, देवेंद्र, पुरंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जानकीनाथ' (जानकी अर्थात् सीता के पति) भगवान राम का नाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> रघुपति, राघव और रघुवर भी उन्हीं के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 13. 'पुरंदर' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "कुबेर", correct: false },
            { text: "यमराज", correct: false },
            { text: "इंद्र", correct: true },
            { text: "कामदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरंदर' का अर्थ किलों को तोड़ने वाला होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देवराज इंद्र का एक प्रसिद्ध नाम है।"
    },
    {
        question: "प्रश्न 14. इनमें से कौन सा शब्द 'इंद्र' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "सुरेश", correct: false },
            { text: "शक्र", correct: false },
            { text: "धनद", correct: true },
            { text: "देवेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धनद' (धन देने वाला) कुबेर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> सुरेश, शक्र और देवेंद्र, इंद्र के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 15. 'देवराज' और 'सुरेश' किसके पर्यायवाची हैं?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "इंद्र", correct: true },
            { text: "राम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देवराज' (देवताओं के राजा) और 'सुरेश' (सुरों के ईश) दोनों ही इंद्र के लिए प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 16. 'मनोज' निम्नलिखित में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "कृष्ण", correct: false },
            { text: "इंद्र", correct: false },
            { text: "कामदेव", correct: true },
            { text: "यमराज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मनोज' (मन में जन्म लेने वाला) प्रेम के देवता कामदेव का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 17. इनमें से कौन सा शब्द 'कामदेव' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "मदन", correct: false },
            { text: "अनंग", correct: false },
            { text: "अंतक", correct: true },
            { text: "रतिपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंतक' (अंत करने वाला) यमराज का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> मदन, अनंग (बिना अंग का) और रतिपति (रति के पति) कामदेव के नाम हैं।"
    },
    {
        question: "प्रश्न 18. 'रतिपति' का अर्थ क्या है?",
        answers: shuffle([
            { text: "रति के पुत्र", correct: false },
            { text: "रति के पिता", correct: false },
            { text: "रति के पति", correct: true },
            { text: "रति के भाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवी रति को कामदेव की पत्नी माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए कामदेव को 'रतिपति' भी कहा जाता है।"
    },
    {
        question: "प्रश्न 19. 'दंडधर' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "इंद्र", correct: false },
            { text: "कुबेर", correct: false },
            { text: "कामदेव", correct: false },
            { text: "यमराज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दंडधर' अर्थात् दंड धारण करने वाला।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मृत्यु के देवता यमराज का एक नाम है।"
    },
    {
        question: "प्रश्न 20. निम्नलिखित में से कौन सा 'यमराज' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "धर्मराज", correct: false },
            { text: "सूर्यपुत्र", correct: false },
            { text: "यक्षराज", correct: true },
            { text: "अंतक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यक्षराज' (यक्षों के राजा) कुबेर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> धर्मराज, सूर्यपुत्र और अंतक, यमराज के नाम हैं।"
    },
    {
        question: "प्रश्न 21. 'सूर्यपुत्र' किस देवता को कहा जाता है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "यमराज", correct: false },
            { text: "कर्ण", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पौराणिक कथाओं के अनुसार, शनि, यमराज और कर्ण तीनों ही सूर्य के पुत्र माने जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह तीनों का पर्यायवाची हो सकता है, परंतु दिए गए विकल्पों में यमराज सर्वाधिक उपयुक्त है।"
    },
    {
        question: "प्रश्न 22. 'धनद' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "लक्ष्मी", correct: false },
            { text: "इंद्र", correct: false },
            { text: "कुबेर", correct: true },
            { text: "गणेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धनद' का अर्थ है धन देने वाला।<br><br><i class='fa-solid fa-angles-right icon'></i> यह धन के देवता कुबेर का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 23. इनमें से कौन सा शब्द 'कुबेर' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "यक्षराज", correct: false },
            { text: "किन्नरेश", correct: false },
            { text: "पुरंदर", correct: true },
            { text: "धनाधिप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरंदर' इंद्र का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> यक्षराज, किन्नरेश और धनाधिप (धन का स्वामी), कुबेर के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 24. 'यक्षराज' और 'धनाधिप' किसके नाम हैं?",
        answers: shuffle([
            { text: "यमराज", correct: false },
            { text: "कुबेर", correct: true },
            { text: "इंद्र", correct: false },
            { text: "अग्नि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यक्षराज' (यक्षों का राजा) और 'धनाधिप' (धन का स्वामी) दोनों ही कुबेर के लिए प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 25. 'पावक' निम्नलिखित में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "हवा", correct: false },
            { text: "पानी", correct: false },
            { text: "अग्नि", correct: true },
            { text: "आकाश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पावक' का अर्थ है पवित्र करने वाला।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अग्नि का एक प्रमुख पर्यायवाची है।"
    },
    {
        question: "प्रश्न 26. 'अनल' शब्द का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "हवा", correct: false },
            { text: "आग", correct: true },
            { text: "जल", correct: false },
            { text: "कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनल' का अर्थ आग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'अनिल' का अर्थ हवा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक प्रसिद्ध शब्द-युग्म है।"
    },
    {
        question: "प्रश्न 27. 'हुताशन' का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "आग, अनल, पावक", correct: true },
            { text: "भागीरथी, जाह्नवी, सुरसरि", correct: false },
            { text: "कालिंदी, तरणिजा, सूर्यसुता", correct: false },
            { text: "गौ, धेनु, सुरभि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हुताशन' अर्थात् जिसका हवन किया जाए, यह अग्नि का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> आग, अनल और पावक भी अग्नि के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 28. 'जाह्नवी' किस नदी का पर्यायवाची है?",
        answers: shuffle([
            { text: "यमुना", correct: false },
            { text: "सरस्वती", correct: false },
            { text: "नर्मदा", correct: false },
            { text: "गंगा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक कथा के अनुसार, गंगा नदी जह्नु ऋषि की पुत्री मानी जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उन्हें 'जाह्नवी' कहा जाता है।"
    },
    {
        question: "प्रश्न 29. इनमें से कौन सा शब्द 'गंगा' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "भागीरथी", correct: false },
            { text: "सुरसरि", correct: false },
            { text: "कृष्णा", correct: true },
            { text: "मंदाकिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कृष्णा' यमुना नदी का एक पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> भागीरथी, सुरसरि और मंदाकिनी, गंगा नदी के नाम हैं।"
    },
    {
        question: "प्रश्न 30. 'देवसरिता' का अर्थ क्या है?",
        answers: shuffle([
            { text: "राक्षसों की नदी", correct: false },
            { text: "मनुष्यों की नदी", correct: false },
            { text: "देवताओं की नदी", correct: true },
            { text: "नागों की नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देवसरिता' अर्थात् देवों की नदी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पवित्र गंगा नदी के लिए प्रयुक्त होता है।"
    },
    {
        question: "प्रश्न 31. 'कालिंदी' किस नदी का पर्यायवाची है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: true },
            { text: "गोदावरी", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कालिंदी' यमुना नदी का एक प्रसिद्ध नाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका जल श्याम वर्ण का होने के कारण इसे कृष्णा भी कहते हैं।"
    },
    {
        question: "प्रश्न 32. निम्नलिखित में से कौन सा 'यमुना' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "तरणिजा", correct: false },
            { text: "सूर्यसुता", correct: false },
            { text: "देवसरिता", correct: true },
            { text: "जमुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देवसरिता' गंगा नदी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> तरणिजा और सूर्यसुता (दोनों का अर्थ सूर्य की पुत्री) यमुना के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 33. 'सूर्यसुता' का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "कालिंदी, तरणिजा, जमुना", correct: true },
            { text: "भागीरथी, जाह्नवी, मंदाकिनी", correct: false },
            { text: "गौ, धेनु, पयस्विनी", correct: false },
            { text: "मयूर, केकी, शिखी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूर्यसुता' अर्थात् सूर्य की पुत्री, यह यमुना नदी का नाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> कालिंदी, तरणिजा और जमुना भी यमुना के ही पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 34. 'धेनु' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "बकरी", correct: false },
            { text: "भैंस", correct: false },
            { text: "गाय", correct: true },
            { text: "घोड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धेनु' एक संस्कृत शब्द है जिसका अर्थ गाय होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> गौ, सुरभि, पयस्विनी भी गाय के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 35. इनमें से कौन सा शब्द 'गाय' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "गौ", correct: false },
            { text: "सुरभि", correct: false },
            { text: "केकी", correct: true },
            { text: "पयस्विनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'केकी' मोर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> गौ, सुरभि और पयस्विनी (दूध देने वाली), गाय के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 36. 'पयस्विनी' का अर्थ क्या है?",
        answers: shuffle([
            { text: "विष देने वाली", correct: false },
            { text: "दूध देने वाली", correct: true },
            { text: "जल देने वाली", correct: false },
            { text: "फल देने वाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पयस्' का अर्थ दूध होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'पयस्विनी' का अर्थ है दूध देने वाली, जो गाय के लिए प्रयुक्त होता है।"
    },
    {
        question: "प्रश्न 37. 'केकी' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "कोयल", correct: false },
            { text: "तोता", correct: false },
            { text: "मोर", correct: true },
            { text: "कबूतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'केकी' मोर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> मयूर, शिखी और नीलकंठ भी मोर के अन्य नाम हैं।"
    },
    {
        question: "प्रश्न 38. निम्नलिखित में से कौन सा 'मोर' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "मयूर", correct: false },
            { text: "शिखी", correct: false },
            { text: "पिक", correct: true },
            { text: "नीलकंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिक' कोयल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> मयूर, शिखी (शिखा या कलगी वाला) और नीलकंठ (नीले कंठ वाला), मोर के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 39. 'सारंग' शब्द अनेकार्थी है, दिए गए विकल्पों में से एक अर्थ चुनें।",
        answers: shuffle([
            { text: "गाय", correct: false },
            { text: "भौंरा", correct: false },
            { text: "मोर", correct: true },
            { text: "मछली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सारंग' एक अनेकार्थी शब्द है जिसके कई अर्थ होते हैं, जैसे - मोर, सर्प, बादल, हिरण आदि।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ दिए गए विकल्पों में मोर सही है।"
    },
    {
        question: "प्रश्न 40. 'पिक' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "कौआ", correct: false },
            { text: "तोता", correct: false },
            { text: "मोर", correct: false },
            { text: "कोयल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिक' कोयल का एक प्रसिद्ध पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोकिल, श्यामा और वसंतदूती भी कोयल को ही कहते हैं।"
    },
    {
        question: "प्रश्न 41. इनमें से कौन सा शब्द 'कोयल' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "कोकिल", correct: false },
            { text: "वसंतदूती", correct: false },
            { text: "शुक", correct: true },
            { text: "काकपाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शुक' तोते का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोकिल, वसंतदूती (वसंत का संदेश देने वाली) और काकपाली (कौवे द्वारा पाली गई), कोयल के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 42. 'वसंतदूती' किस पक्षी को कहा जाता है?",
        answers: shuffle([
            { text: "मोर", correct: false },
            { text: "कबूतर", correct: false },
            { text: "कोयल", correct: true },
            { text: "तोता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वसंत ऋतु के आगमन पर कूकने के कारण कोयल को 'वसंत का दूत' या 'वसंतदूती' कहा जाता है।"
    },
    {
        question: "प्रश्न 43. 'कीर' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "कोयल", correct: false },
            { text: "तोता", correct: true },
            { text: "भौंरा", correct: false },
            { text: "मेंढक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कीर' तोते का पर्यायवाची शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> शुक और सुग्गा इसके अन्य सामान्य नाम हैं।"
    },
    {
        question: "प्रश्न 44. निम्नलिखित में से कौन सा 'तोता' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "शुक", correct: false },
            { text: "दाड़िमप्रिय", correct: false },
            { text: "पारावत", correct: true },
            { text: "रक्ततुंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पारावत' कबूतर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> शुक, दाड़िमप्रिय (अनार जिसे प्रिय हो) और रक्ततुंड (लाल चोंच वाला), तोते के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 45. 'दाड़िमप्रिय' किस पक्षी का नाम है?",
        answers: shuffle([
            { text: "कोयल", correct: false },
            { text: "मोर", correct: false },
            { text: "कबूतर", correct: false },
            { text: "तोता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दाड़िम' का अर्थ अनार होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> तोते को अनार बहुत प्रिय होता है, इसलिए उसे 'दाड़िमप्रिय' कहते हैं।"
    },
    {
        question: "प्रश्न 46. 'कपोत' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "तोता", correct: false },
            { text: "कौआ", correct: false },
            { text: "कबूतर", correct: true },
            { text: "मोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कपोत' कबूतर का तत्सम रूप और पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पारावत और परेवा भी इसके पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 47. इनमें से कौन सा शब्द 'कबूतर' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "पारावत", correct: false },
            { text: "रक्तलोचन", correct: false },
            { text: "मधुप", correct: true },
            { text: "हारीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मधुप' भौंरे का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पारावत, रक्तलोचन (लाल आँखों वाला) और हारीत, कबूतर के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 48. 'रक्तलोचन' का अर्थ क्या है?",
        answers: shuffle([
            { text: "लाल चोंच वाला", correct: false },
            { text: "लाल पंखों वाला", correct: false },
            { text: "लाल पैरों वाला", correct: false },
            { text: "लाल आँखों वाला", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रक्त' अर्थात् लाल और 'लोचन' अर्थात् आँखें।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार 'रक्तलोचन' का अर्थ लाल आँखों वाला होता है, जो कबूतर के लिए प्रयुक्त होता है।"
    },
    {
        question: "प्रश्न 49. 'मधुप' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "तितली", correct: false },
            { text: "मधुमक्खी", correct: false },
            { text: "भौंरा", correct: true },
            { text: "मच्छर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मधुप' (मधु पीने वाला) भौंरे का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> भ्रमर, अलि और मधुकर भी इसी के नाम हैं।"
    },
    {
        question: "प्रश्न 50. निम्नलिखित में से कौन सा 'भौंरा' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "भ्रमर", correct: false },
            { text: "अलि", correct: false },
            { text: "झष", correct: true },
            { text: "षट्पद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झष' मछली का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> भ्रमर, अलि और षट्पद (छह पैरों वाला), भौंरे के पर्यायवाची हैं।"
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