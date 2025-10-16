const questions = [
    {
        topHeading: "पर्यायवाची शब्दों पर आधारित 50 MCQs, part_3 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. निम्नलिखित में से कौन सा 'अमृत' का पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "विष", correct: false },
            { text: "पीयूष", correct: true },
            { text: "जल", correct: false },
            { text: "मदिरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पीयूष' शब्द 'अमृत' का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ होता है वह पदार्थ जिसे पीने से अमरता प्राप्त होती है।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से कौन सा शब्द 'अमृत' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "सुधा", correct: false },
            { text: "अमिय", correct: false },
            { text: "रसाल", correct: true },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रसाल' आम का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि सुधा, अमिय और सोम 'अमृत' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 3. निम्नलिखित में से कौन सा शब्द 'सरस्वती' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "शारदा", correct: false },
            { text: "वाग्देवी", correct: false },
            { text: "भारती", correct: false },
            { text: "सिंधुजा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सिंधुजा' (सिंधु से जन्मी) देवी लक्ष्मी का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 4. 'सरोवर' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "नदी", correct: false },
            { text: "समुद्र", correct: false },
            { text: "झरना", correct: false },
            { text: "तालाब", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सरोवर' शब्द 'तालाब' का एक प्रमुख पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ जल से भरा हुआ गड्ढा होता है।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से कौन सा 'तालाब' का पर्यायवाची शब्द नहीं है?",
        answers: shuffle([
            { text: "जलाशय", correct: false },
            { text: "पुष्कर", correct: false },
            { text: "जलधि", correct: true },
            { text: "तड़ाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलधि' समुद्र का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ है 'जल का भंडार'।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी तालाब के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 6. 'पुष्कर' शब्द का पर्यायवाची चुनें।",
        answers: shuffle([
            { text: "कमल", correct: false },
            { text: "तालाब", correct: true },
            { text: "सूर्य", correct: false },
            { text: "आकाश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुष्कर' शब्द का एक अर्थ 'तालाब' या 'सरोवर' भी होता है।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से कौन सा 'समुद्र' का पर्यायवाची है?",
        answers: shuffle([
            { text: "जलद", correct: false },
            { text: "रत्नाकर", correct: true },
            { text: "सरोवर", correct: false },
            { text: "हिमकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्र को रत्नों का भंडार माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसे 'रत्नाकर' भी कहते हैं।"
    },
    {
        question: "प्रश्न 8. 'उदधि' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "बादल", correct: false },
            { text: "नदी", correct: false },
            { text: "समुद्र", correct: true },
            { text: "गंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उदधि' शब्द का अर्थ है जल का भंडार।<br><br><i class='fa-solid fa-angles-right icon'></i> जो समुद्र का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 9. इनमें से कौन सा शब्द 'समुद्र' का समानार्थी नहीं है?",
        answers: shuffle([
            { text: "सागर", correct: false },
            { text: "सिंधु", correct: false },
            { text: "पयोधि", correct: false },
            { text: "नीरज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीरज' कमल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अन्य सभी शब्द समुद्र के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 10. 'कंचन' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "चाँदी", correct: false },
            { text: "हीरा", correct: false },
            { text: "ताँबा", correct: false },
            { text: "स्वर्ण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कंचन' और 'स्वर्ण' दोनों का अर्थ सोना नामक बहुमूल्य धातु है।"
    },
    {
        question: "प्रश्न 11. निम्नलिखित में से कौन सा शब्द 'सोना' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "हेम", correct: false },
            { text: "कनक", correct: false },
            { text: "हिरण्य", correct: false },
            { text: "रूपक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रूपक' चाँदी का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि हेम, कनक और हिरण्य सोने के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 12. 'वाग्देवी' किस देवी का एक नाम है?",
        answers: shuffle([
            { text: "काली", correct: false },
            { text: "सीता", correct: false },
            { text: "सरस्वती", correct: true },
            { text: "राधा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाग्देवी' का अर्थ है 'वाणी की देवी'।<br><br><i class='fa-solid fa-angles-right icon'></i> जो माँ सरस्वती हैं।"
    },
    {
        question: "प्रश्न 13. 'रजत' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "लोहा", correct: false },
            { text: "चाँदी", correct: true },
            { text: "पीतल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रजत' शब्द चाँदी का एक प्रमुख पर्यायवाची है।"
    },
    {
        question: "प्रश्न 14. निम्नलिखित में से कौन 'चाँदी' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "रूपक", correct: false },
            { text: "रूपा", correct: false },
            { text: "कलधौत", correct: false },
            { text: "हेम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हेम' सोने का पर्यायवाची है, चाँदी का नहीं।"
    },
    {
        question: "प्रश्न 15. 'चंद्रहास' शब्द का एक अर्थ चाँदी है, इसका दूसरा अर्थ क्या है?",
        answers: shuffle([
            { text: "चंद्रमा की किरण", correct: false },
            { text: "तलवार", correct: true },
            { text: "कमल", correct: false },
            { text: "मोती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चंद्रहास' शब्द चाँदी और तलवार दोनों के लिए पर्यायवाची के रूप में प्रयोग होता है।"
    },
    {
        question: "प्रश्न 16. 'वसन' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "बर्तन", correct: false },
            { text: "वास", correct: false },
            { text: "वस्त्र", correct: true },
            { text: "जंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वसन' शब्द का अर्थ 'कपड़ा' या 'वस्त्र' होता है।"
    },
    {
        question: "प्रश्न 17. निम्नलिखित में से कौन सा शब्द 'कपड़ा' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "पट", correct: false },
            { text: "अंबर", correct: false },
            { text: "चीर", correct: false },
            { text: "वात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वात' का अर्थ हवा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> पट, अंबर और चीर कपड़े के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 18. 'अंबर' शब्द का एक अर्थ 'वस्त्र' है, दूसरा अर्थ क्या है?",
        answers: shuffle([
            { text: "धरती", correct: false },
            { text: "आकाश", correct: true },
            { text: "बादल", correct: false },
            { text: "जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंबर' शब्द अनेकार्थी है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके दो प्रमुख अर्थ वस्त्र और आकाश हैं।"
    },
    {
        question: "प्रश्न 19. 'अलंकार' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "सौंदर्य", correct: false },
            { text: "गहना", correct: true },
            { text: "सजावट", correct: false },
            { text: "प्रकाश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अलंकार' का शाब्दिक अर्थ 'आभूषण' या 'गहना' होता है।"
    },
    {
        question: "प्रश्न 20. इनमें से कौन सा 'आभूषण' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "भूषण", correct: false },
            { text: "जेवर", correct: false },
            { text: "टूम", correct: false },
            { text: "वसन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वसन' का अर्थ वस्त्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अन्य सभी आभूषण के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 21. 'जेवर' शब्द किसका समानार्थी है?",
        answers: shuffle([
            { text: "हीरा", correct: false },
            { text: "मोती", correct: false },
            { text: "आभूषण", correct: true },
            { text: "माणिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जेवर' शब्द आमतौर पर शरीर पर पहने जाने वाले गहनों या आभूषणों के लिए प्रयोग किया जाता है।"
    },
    {
        question: "प्रश्न 22. 'रश्मि' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "प्रकाश", correct: false },
            { text: "किरण", correct: true },
            { text: "सूर्य", correct: false },
            { text: "चंद्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रश्मि' का अर्थ प्रकाश की रेखा अर्थात 'किरण' होता है।"
    },
    {
        question: "प्रश्न 23. निम्नलिखित में से कौन सा शब्द 'किरण' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "अंशु", correct: false },
            { text: "मरीचि", correct: false },
            { text: "मयूख", correct: false },
            { text: "तम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तम' का अर्थ अंधकार होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अन्य सभी किरण के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 24. 'मयूख' शब्द का पर्यायवाची चुनें।",
        answers: shuffle([
            { text: "मोर", correct: false },
            { text: "चंद्रमा", correct: false },
            { text: "किरण", correct: true },
            { text: "तारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मयूख' शब्द का प्रयोग प्रकाश की किरण के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 25. 'तिमिर' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "प्रकाश", correct: false },
            { text: "रात्रि", correct: false },
            { text: "अंधकार", correct: true },
            { text: "दिवस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तिमिर' शब्द का अर्थ 'अँधेरा' या 'अंधकार' होता है।"
    },
    {
        question: "प्रश्न 26. इनमें से कौन सा 'अंधकार' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "तम", correct: false },
            { text: "तमस", correct: false },
            { text: "ध्वांत", correct: false },
            { text: "द्युति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्युति' का अर्थ प्रकाश या चमक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अंधकार का विलोम है।"
    },
    {
        question: "प्रश्न 27. 'तमस' शब्द का समानार्थी क्या है?",
        answers: shuffle([
            { text: "ताम्र", correct: false },
            { text: "अंधकार", correct: true },
            { text: "गुस्सा", correct: false },
            { text: "आलस्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तमस' का अर्थ होता है गहरा अँधेरा या अज्ञान रूपी अंधकार।"
    },
    {
        question: "प्रश्न 28. 'आलोक' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "आकाश", correct: false },
            { text: "अद्भुत", correct: false },
            { text: "अंधकार", correct: false },
            { text: "प्रकाश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आलोक' का अर्थ 'उजाला' या 'प्रकाश' होता है।"
    },
    {
        question: "प्रश्न 29. निम्नलिखित में से कौन सा शब्द 'प्रकाश' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "प्रभा", correct: false },
            { text: "रोशनी", correct: false },
            { text: "तिमिर", correct: true },
            { text: "द्युति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तिमिर' का अर्थ अंधकार होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो प्रकाश का विलोम है।"
    },
    {
        question: "प्रश्न 30. 'प्रभा' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "सुबह", correct: false },
            { text: "किरण", correct: false },
            { text: "प्रकाश", correct: true },
            { text: "चमक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रभा' का अर्थ 'रोशनी' या 'प्रकाश' होता है।"
    },
    {
        question: "प्रश्न 31. 'अभिलाषा' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "आकांक्षा", correct: true },
            { text: "घृणा", correct: false },
            { text: "प्रेम", correct: false },
            { text: "क्रोध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिलाषा' और 'आकांक्षा' दोनों का अर्थ किसी वस्तु को पाने की प्रबल इच्छा होता है।"
    },
    {
        question: "प्रश्न 32. इनमें से कौन सा 'इच्छा' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "कामना", correct: false },
            { text: "चाह", correct: false },
            { text: "मनोरथ", correct: false },
            { text: "रोष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रोष' का अर्थ क्रोध या गुस्सा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अन्य सभी इच्छा के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 33. 'मनोरथ' शब्द का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "मन की शांति", correct: false },
            { text: "मन का वाहन", correct: false },
            { text: "मन की इच्छा", correct: true },
            { text: "मन का दुःख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मनोरथ' का अर्थ है मन की कामना या इच्छा।"
    },
    {
        question: "प्रश्न 34. 'उल्लास' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "दुःख", correct: false },
            { text: "भय", correct: false },
            { text: "हर्ष", correct: true },
            { text: "आश्चर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उल्लास' और 'हर्ष' दोनों का अर्थ अत्यधिक प्रसन्नता या खुशी होता है।"
    },
    {
        question: "प्रश्न 35. निम्नलिखित में से कौन सा शब्द 'आनंद' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "खुशी", correct: false },
            { text: "प्रसन्नता", correct: false },
            { text: "प्रमोद", correct: false },
            { text: "व्यथा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्यथा' का अर्थ दुःख या पीड़ा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आनंद का विलोम है।"
    },
    {
        question: "प्रश्न 36. 'प्रमोद' शब्द किसका समानार्थी है?",
        answers: shuffle([
            { text: "मनोरंजन", correct: false },
            { text: "आनंद", correct: true },
            { text: "आलस्य", correct: false },
            { text: "उत्साह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रमोद' का अर्थ आमोद-प्रमोद या गहरी खुशी व आनंद होता है।"
    },
    {
        question: "प्रश्न 37. 'वेदना' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "सुख", correct: false },
            { text: "पीड़ा", correct: true },
            { text: "संवेदना", correct: false },
            { text: "भावना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वेदना' का अर्थ शारीरिक या मानसिक कष्ट अर्थात 'पीड़ा' है।"
    },
    {
        question: "प्रश्न 38. इनमें से कौन सा 'दुःख' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "कष्ट", correct: false },
            { text: "व्यथा", correct: false },
            { text: "शोक", correct: false },
            { text: "मोद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मोद' का अर्थ आनंद या हर्ष होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो दुःख का विलोम है।"
    },
    {
        question: "प्रश्न 39. 'व्यथा' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "व्यर्थ", correct: false },
            { text: "कथा", correct: false },
            { text: "दुःख", correct: true },
            { text: "हवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्यथा' का अर्थ मन का दुःख या पीड़ा होता है।"
    },
    {
        question: "प्रश्न 40. 'कोप' का पर्यायवाची शब्द क्या है?",
        answers: shuffle([
            { text: "कृपा", correct: false },
            { text: "शांति", correct: false },
            { text: "रोष", correct: true },
            { text: "भय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोप' और 'रोष' दोनों का अर्थ अत्यधिक क्रोध या गुस्सा है।"
    },
    {
        question: "प्रश्न 41. निम्नलिखित में से कौन सा शब्द 'क्रोध' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "गुस्सा", correct: false },
            { text: "अमर्ष", correct: false },
            { text: "आक्रोश", correct: false },
            { text: "प्रीति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रीति' का अर्थ प्रेम या स्नेह होता है।"
    },
    {
        question: "प्रश्न 42. 'अमर्ष' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "हर्ष", correct: false },
            { text: "क्रोध", correct: true },
            { text: "प्रेम", correct: false },
            { text: "घृणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमर्ष' का अर्थ अपमान के कारण उत्पन्न हुआ क्रोध होता है।"
    },
    {
        question: "प्रश्न 43. 'अनुराग' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "वैराग्य", correct: false },
            { text: "द्वेष", correct: false },
            { text: "स्नेह", correct: true },
            { text: "ईर्ष्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुराग' और 'स्नेह' दोनों का अर्थ प्रेम या लगाव होता है।"
    },
    {
        question: "प्रश्न 44. इनमें से कौन सा 'प्रेम' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "प्यार", correct: false },
            { text: "प्रीति", correct: false },
            { text: "अमर्ष", correct: true },
            { text: "मोहब्बत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमर्ष' का अर्थ क्रोध होता है, प्रेम नहीं।"
    },
    {
        question: "प्रश्न 45. 'प्रीति' शब्द का समानार्थी चुनें।",
        answers: shuffle([
            { text: "रीति", correct: false },
            { text: "नीति", correct: false },
            { text: "प्रेम", correct: true },
            { text: "गीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रीति' का अर्थ स्नेह, लगाव या प्रेम होता है।"
    },
    {
        question: "प्रश्न 46. 'लंबोदर' किस देवता का पर्यायवाची है?",
        answers: shuffle([
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "गणेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लंबोदर' का अर्थ है 'लंबा है उदर (पेट) जिसका'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भगवान गणेश के लिए प्रयुक्त होता है।"
    },
    {
        question: "प्रश्न 47. निम्नलिखित में से कौन सा शब्द 'गणेश' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "गणपति", correct: false },
            { text: "गजानन", correct: false },
            { text: "चक्रपाणि", correct: true },
            { text: "एकदंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चक्रपाणि' (चक्र है हाथ में जिसके) भगवान विष्णु का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 48. 'विनायक' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "कार्तिकेय", correct: false },
            { text: "इंद्र", correct: false },
            { text: "गणेश", correct: true },
            { text: "कुबेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विनायक' विघ्नों को हरने वाले अर्थात भगवान गणेश का एक नाम है।"
    },
    {
        question: "प्रश्न 49. 'त्रिनेत्र' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "इंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिनेत्र' का अर्थ है 'तीन नेत्रों वाले'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भगवान शिव का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 50. इनमें से कौन सा 'शिव' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "महादेव", correct: false },
            { text: "शंभु", correct: false },
            { text: "भोलेनाथ", correct: false },
            { text: "दामोदर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दामोदर' भगवान कृष्ण (विष्णु का अवतार) का पर्यायवाची है।"
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