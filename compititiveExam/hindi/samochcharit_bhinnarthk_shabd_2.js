const questions = [
    {
        topHeading: "समोच्चरित भिन्नार्थक शब्दों पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'धन' और 'धन्य' का सही अर्थ है-",
        answers: shuffle([
            { text: "पुण्यवान, संपत्ति", correct: false },
            { text: "संपत्ति, पुण्यवान", correct: true },
            { text: "प्रिय, संपत्ति", correct: false },
            { text: "संपत्ति, प्रिय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धन' का अर्थ संपत्ति या दौलत होता है और 'धन्य' का अर्थ पुण्यवान या कृतार्थ होता है।"
    },
    {
        question: "प्रश्न 2. 'नग' और 'नाग' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "साँप, पर्वत", correct: false },
            { text: "पर्वत, साँप", correct: true },
            { text: "नगीना, साँप", correct: false },
            { text: "पर्वत, नगीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नग' का अर्थ पर्वत या नगीना होता है और 'नाग' का अर्थ साँप होता है।"
    },
    {
        question: "प्रश्न 3. 'पथ' और 'पथ्य' का सही अर्थ है-",
        answers: shuffle([
            { text: "रोगी का भोजन, रास्ता", correct: false },
            { text: "रास्ता, रोगी का भोजन", correct: true },
            { text: "यात्रा, भोजन", correct: false },
            { text: "रास्ता, यात्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पथ' का अर्थ रास्ता या मार्ग होता है और 'पथ्य' का अर्थ रोगी के लिए उपयुक्त भोजन होता है।"
    },
    {
        question: "प्रश्न 4. 'प्रकार' और 'प्राकार' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "चहारदीवारी, किस्म", correct: false },
            { text: "किस्म, चहारदीवारी", correct: true },
            { text: "ढंग, किला", correct: false },
            { text: "किला, ढंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रकार' का अर्थ किस्म या तरह होता है और 'प्राकार' का अर्थ चहारदीवारी या परकोटा होता है।"
    },
    {
        question: "प्रश्न 5. 'फण' और 'फन' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "कला, साँप का सिर", correct: false },
            { text: "साँप का सिर, कला", correct: true },
            { text: "गुण, साँप", correct: false },
            { text: "साँप, गुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फण' का अर्थ साँप का सिर (hood) होता है और 'फन' का अर्थ कला या हुनर होता है।"
    },
    {
        question: "प्रश्न 6. 'बदन' और 'वदन' का सही अर्थ है-",
        answers: shuffle([
            { text: "मुख, शरीर", correct: false },
            { text: "शरीर, मुख", correct: true },
            { text: "तन, चेहरा", correct: false },
            { text: "चेहरा, तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बदन' का अर्थ शरीर होता है और 'वदन' का अर्थ मुख या चेहरा होता है।"
    },
    {
        question: "प्रश्न 7. 'बात' और 'वात' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "हवा, वचन", correct: false },
            { text: "वचन, हवा", correct: true },
            { text: "रोग, वचन", correct: false },
            { text: "वचन, रोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बात' का अर्थ वचन या कथन होता है और 'वात' का अर्थ हवा या वायु होता है।"
    },
    {
        question: "प्रश्न 8. 'भित्ति' और 'भीत' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "डरा हुआ, दीवार", correct: false },
            { text: "दीवार, डरा हुआ", correct: true },
            { text: "भय, दीवार", correct: false },
            { text: "दीवार, भय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भित्ति' का अर्थ दीवार होता है और 'भीत' का अर्थ डरा हुआ होता है।"
    },
    {
        question: "प्रश्न 9. 'मत' और 'मति' का सही अर्थ है-",
        answers: shuffle([
            { text: "बुद्धि, राय", correct: false },
            { text: "राय, बुद्धि", correct: true },
            { text: "नहीं, बुद्धि", correct: false },
            { text: "राय, नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मत' का अर्थ राय या वोट होता है और 'मति' का अर्थ बुद्धि होता है।"
    },
    {
        question: "प्रश्न 10. 'रंग' और 'रंक' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "निर्धन, वर्ण", correct: false },
            { text: "वर्ण, निर्धन", correct: true },
            { text: "राजा, वर्ण", correct: false },
            { text: "वर्ण, राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रंग' का अर्थ वर्ण होता है और 'रंक' का अर्थ निर्धन या गरीब होता है।"
    },
    {
        question: "प्रश्न 11. 'वसन' और 'व्यसन' का सही अर्थ है-",
        answers: shuffle([
            { text: "बुरी आदत, वस्त्र", correct: false },
            { text: "वस्त्र, बुरी आदत", correct: true },
            { text: "भोजन, वस्त्र", correct: false },
            { text: "वस्त्र, भोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वसन' का अर्थ वस्त्र या कपड़ा होता है और 'व्यसन' का अर्थ बुरी आदत या लत होता है।"
    },
    {
        question: "प्रश्न 12. 'शंकर' और 'संकर' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "मिश्रित, शिव", correct: false },
            { text: "शिव, मिश्रित", correct: true },
            { text: "जाति, शिव", correct: false },
            { text: "शिव, जाति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शंकर' भगवान शिव का नाम है, जबकि 'संकर' का अर्थ मिश्रित या दोगला (hybrid) होता है।"
    },
    {
        question: "प्रश्न 13. 'शस्त्र' और 'शास्त्र' का सही अर्थ है-",
        answers: shuffle([
            { text: "धार्मिक ग्रंथ, हथियार", correct: false },
            { text: "हथियार, धार्मिक ग्रंथ", correct: true },
            { text: "आज्ञा, हथियार", correct: false },
            { text: "हथियार, आज्ञा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शस्त्र' का अर्थ हाथ में पकड़कर चलाया जाने वाला हथियार होता है और 'शास्त्र' का अर्थ कोई विषय का क्रमबद्ध ज्ञान या धार्मिक ग्रंथ होता है।"
    },
    {
        question: "प्रश्न 14. 'सूचि' और 'सूची' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "सुई, तालिका", correct: true },
            { text: "तालिका, सुई", correct: false },
            { text: "पवित्र, तालिका", correct: false },
            { text: "सुई, पवित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूचि' (छोटी 'चि') का अर्थ सुई होता है, जबकि 'सूची' (बड़ी 'ची') का अर्थ तालिका (list) होता है।"
    },
    {
        question: "प्रश्न 15. 'सकल' और 'शकल' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "टुकड़ा, सम्पूर्ण", correct: false },
            { text: "सम्पूर्ण, टुकड़ा", correct: true },
            { text: "अंश, सारा", correct: false },
            { text: "सारा, अंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सकल' का अर्थ सम्पूर्ण या सारा होता है, जबकि 'शकल' का अर्थ टुकड़ा या अंश होता है।"
    },
    {
        question: "प्रश्न 16. 'स्व' और 'श्व' का सही अर्थ है-",
        answers: shuffle([
            { text: "आने वाला कल, अपना", correct: false },
            { text: "अपना, आने वाला कल", correct: false },
            { text: "कुत्ता, अपना", correct: false },
            { text: "अपना, कुत्ता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्व' का अर्थ 'अपना' होता है, जबकि 'श्व' का अर्थ कुत्ता होता है।"
    },
    {
        question: "प्रश्न 17. 'सर्ग' और 'स्वर्ग' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "देवलोक, अध्याय", correct: false },
            { text: "अध्याय, देवलोक", correct: true },
            { text: "सृष्टि, देवलोक", correct: false },
            { text: "अध्याय, सृष्टि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्ग' का अर्थ अध्याय या सृष्टि होता है और 'स्वर्ग' का अर्थ देवलोक होता है।"
    },
    {
        question: "प्रश्न 18. 'हंस' और 'हँस' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "हँसने की क्रिया, एक पक्षी", correct: false },
            { text: "एक पक्षी, हँसने की क्रिया", correct: true },
            { text: "प्राण, एक पक्षी", correct: false },
            { text: "एक पक्षी, प्राण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हंस' एक पक्षी का नाम है, जबकि 'हँस' (चंद्रबिंदु के साथ) हँसने की क्रिया को दर्शाता है।"
    },
    {
        question: "प्रश्न 19. 'हरि' और 'हरी' का सही अर्थ है-",
        answers: shuffle([
            { text: "हरे रंग की, विष्णु", correct: false },
            { text: "विष्णु, हरे रंग की", correct: true },
            { text: "हरण करना, हरे रंग की", correct: false },
            { text: "विष्णु, हरण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हरि' भगवान विष्णु का एक नाम है और 'हरी' का अर्थ हरे रंग की होता है।"
    },
    {
        question: "प्रश्न 20. 'अवलंब' और 'अविलंब' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "शीघ्र, सहारा", correct: false },
            { text: "सहारा, शीघ्र", correct: true },
            { text: "निर्भर, जल्दी", correct: false },
            { text: "सहारा, निर्भर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवलंब' का अर्थ सहारा होता है और 'अविलंब' का अर्थ बिना विलंब के, अर्थात शीघ्र होता है।"
    },
    {
        question: "प्रश्न 21. 'आकर' और 'आकार' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "रूप, खान", correct: false },
            { text: "खान, रूप", correct: true },
            { text: "खजाना, रूप", correct: false },
            { text: "खान, खजाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आकर' का अर्थ खान या स्रोत होता है और 'आकार' का अर्थ रूप या बनावट होता है।"
    },
    {
        question: "प्रश्न 22. 'उद्धत' और 'उद्यत' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "तैयार, उद्दंड", correct: false },
            { text: "उद्दंड, तैयार", correct: true },
            { text: "विनम्र, तैयार", correct: false },
            { text: "उद्दंड, विनम्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उद्धत' का अर्थ उद्दंड या अख्खड़ होता है, जबकि 'उद्यत' का अर्थ तैयार या तत्पर होता है।"
    },
    {
        question: "प्रश्न 23. 'कपट' और 'कपाट' का सही अर्थ है-",
        answers: shuffle([
            { text: "दरवाजा, धोखा", correct: false },
            { text: "धोखा, दरवाजा", correct: true },
            { text: "कपड़ा, धोखा", correct: false },
            { text: "धोखा, कपड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कपट' का अर्थ धोखा होता है और 'कपाट' का अर्थ किवाड़ या दरवाजा होता है।"
    },
    {
        question: "प्रश्न 24. 'ग्रहण' और 'ग्रसन' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "निगलना, लेना", correct: false },
            { text: "लेना, निगलना", correct: true },
            { text: "सूर्य ग्रहण, लेना", correct: false },
            { text: "लेना, सूर्य ग्रहण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्रहण' का अर्थ लेना या स्वीकार करना होता है, जबकि 'ग्रसन' का अर्थ निगलना होता है।"
    },
    {
        question: "प्रश्न 25. 'चषक' और 'चसक' का सही अर्थ है-",
        answers: shuffle([
            { text: "लत, प्याला", correct: false },
            { text: "प्याला, लत", correct: true },
            { text: "चश्मा, लत", correct: false },
            { text: "लत, चश्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चषक' का अर्थ प्याला होता है और 'चसक' का अर्थ लत या चस्का होता है।"
    },
    {
        question: "प्रश्न 26. 'जघन्य' और 'जघन' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "नितंब, गर्हित", correct: false },
            { text: "गर्हित, नितंब", correct: true },
            { text: "जाँघ, गर्हित", correct: false },
            { text: "गर्हित, जाँघ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जघन्य' का अर्थ बहुत बुरा या गर्हित (जैसे जघन्य अपराध) होता है और 'जघन' का अर्थ नितंब होता है।"
    },
    {
        question: "प्रश्न 27. 'ढाल' और 'ढ़ाल' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "उतार, रक्षक कवच", correct: false },
            { text: "रक्षक कवच, उतार", correct: true },
            { text: "ढक्कन, उतार", correct: false },
            { text: "उतार, ढक्कन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढाल' एक प्रकार का रक्षक कवच होता है, जबकि 'ढ़ाल' का अर्थ उतार या ढलान होता है।"
    },
    {
        question: "प्रश्न 28. 'तप्त' और 'तृप्त' का सही अर्थ है-",
        answers: shuffle([
            { text: "संतुष्ट, गर्म", correct: false },
            { text: "गर्म, संतुष्ट", correct: true },
            { text: "दुखी, गर्म", correct: false },
            { text: "गर्म, दुखी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तप्त' का अर्थ गर्म या तपा हुआ होता है और 'तृप्त' का अर्थ संतुष्ट होता है।"
    },
    {
        question: "प्रश्न 29. 'दूत' और 'द्यूत' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "जुआ, संदेशवाहक", correct: false },
            { text: "संदेशवाहक, जुआ", correct: true },
            { text: "देवता, जुआ", correct: false },
            { text: "संदेशवाहक, देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दूत' का अर्थ संदेशवाहक होता है और 'द्यूत' का अर्थ जुआ होता है (जैसे- द्यूत-क्रीड़ा)।"
    },
    {
        question: "प्रश्न 30. 'निधन' और 'निर्धन' का सही अर्थ है-",
        answers: shuffle([
            { text: "गरीब, मृत्यु", correct: false },
            { text: "मृत्यु, गरीब", correct: true },
            { text: "धनहीन, मृत्यु", correct: false },
            { text: "मृत्यु, धनहीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निधन' का अर्थ मृत्यु होता है, जबकि 'निर्धन' का अर्थ धनहीन या गरीब होता है।"
    },
    {
        question: "प्रश्न 31. 'परुष' और 'पुरुष' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "आदमी, कठोर", correct: false },
            { text: "कठोर, आदमी", correct: true },
            { text: "वीर, कठोर", correct: false },
            { text: "कठोर, वीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परुष' का अर्थ कठोर होता है और 'पुरुष' का अर्थ आदमी या नर होता है।"
    },
    {
        question: "प्रश्न 32. 'प्रहार' और 'परिहार' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "त्यागना, चोट", correct: false },
            { text: "चोट, त्यागना", correct: true },
            { text: "समाधान, चोट", correct: false },
            { text: "चोट, समाधान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रहार' का अर्थ चोट या आघात होता है और 'परिहार' का अर्थ त्यागना या छोड़ना होता है।"
    },
    {
        question: "प्रश्न 33. 'बहु' और 'बहू' का सही अर्थ है-",
        answers: shuffle([
            { text: "पुत्रवधू, बहुत", correct: false },
            { text: "बहुत, पुत्रवधू", correct: true },
            { text: "बहन, बहुत", correct: false },
            { text: "बहुत, बहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहु' (छोटा 'हु') का अर्थ 'बहुत' या 'अधिक' होता है और 'बहू' (बड़ा 'हू') का अर्थ पुत्रवधू होता है।"
    },
    {
        question: "प्रश्न 34. 'लक्ष' और 'लाख' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "संख्या, उद्देश्य", correct: false },
            { text: "उद्देश्य, संख्या", correct: false },
            { text: "दोनों का अर्थ संख्या है", correct: true },
            { text: "दोनों का अर्थ उद्देश्य है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लक्ष' और 'लाख' दोनों ही एक संख्या (सौ हजार) को दर्शाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'लक्ष' तत्सम शब्द है और 'लाख' उसका तद्भव रूप है।"
    },
    {
        question: "प्रश्न 35. 'व्यंग' और 'व्यंग्य' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "ताना, विकलांग", correct: false },
            { text: "विकलांग, ताना", correct: true },
            { text: "टेढ़ा, ताना", correct: false },
            { text: "ताना, टेढ़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्यंग' का अर्थ विकलांग या अंगहीन होता है, जबकि 'व्यंग्य' का अर्थ उपालंभ या ताना होता है।"
    },
    {
        question: "प्रश्न 36. 'शक' और 'शोक' का सही अर्थ है-",
        answers: shuffle([
            { text: "दुःख, संदेह", correct: false },
            { text: "संदेह, दुःख", correct: true },
            { text: "शक्ति, दुःख", correct: false },
            { text: "दुःख, शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शक' का अर्थ संदेह होता है और 'शोक' का अर्थ दुःख या गम होता है।"
    },
    {
        question: "प्रश्न 37. 'सम' और 'शम' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "शांति, बराबर", correct: false },
            { text: "बराबर, शांति", correct: true },
            { text: "संयम, बराबर", correct: false },
            { text: "बराबर, संयम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सम' का अर्थ बराबर होता है, और 'शम' का अर्थ शांति या इंद्रियों का निग्रह होता है।"
    },
    {
        question: "प्रश्न 38. 'स्वेद' और 'श्वेत' का सही अर्थ है-",
        answers: shuffle([
            { text: "सफेद, पसीना", correct: false },
            { text: "पसीना, सफेद", correct: true },
            { text: "रक्त, सफेद", correct: false },
            { text: "सफेद, रक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वेद' का अर्थ पसीना होता है और 'श्वेत' का अर्थ सफेद होता है।"
    },
    {
        question: "प्रश्न 39. 'अचार' और 'आचार' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "आचरण, खाने की वस्तु", correct: false },
            { text: "खाने की वस्तु, आचरण", correct: true },
            { text: "विचार, खाने की वस्तु", correct: false },
            { text: "खाने की वस्तु, विचार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अचार' एक खाद्य पदार्थ है, जबकि 'आचार' का अर्थ आचरण या व्यवहार होता है।"
    },
    {
        question: "प्रश्न 40. 'कथा' और 'कंथा' का सही अर्थ है-",
        answers: shuffle([
            { text: "गुदड़ी, कहानी", correct: false },
            { text: "कहानी, गुदड़ी", correct: true },
            { text: "कटार, कहानी", correct: false },
            { text: "कहानी, कटार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कथा' का अर्थ कहानी होता है और 'कंथा' का अर्थ गुदड़ी होता है।"
    },
    {
        question: "प्रश्न 41. 'कोर' और 'कौर' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "ग्रास, किनारा", correct: false },
            { text: "किनारा, ग्रास", correct: true },
            { text: "कड़ा, ग्रास", correct: false },
            { text: "ग्रास, कड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोर' का अर्थ किनारा होता है और 'कौर' का अर्थ ग्रास (निवाला) होता है।"
    },
    {
        question: "प्रश्न 42. 'गात' और 'घात' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "प्रहार, शरीर", correct: false },
            { text: "शरीर, प्रहार", correct: true },
            { text: "घाव, शरीर", correct: false },
            { text: "शरीर, घाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गात' का अर्थ शरीर होता है और 'घात' का अर्थ प्रहार या चोट होता है।"
    },
    {
        question: "प्रश्न 43. 'चषक' और 'चसक' का सही अर्थ है-",
        answers: shuffle([
            { text: "लत, प्याला", correct: false },
            { text: "प्याला, लत", correct: true },
            { text: "चश्मा, लत", correct: false },
            { text: "लत, चश्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चषक' का अर्थ प्याला होता है और 'चसक' का अर्थ लत या चस्का होता है।"
    },
    {
        question: "प्रश्न 44. 'जलद' और 'जलधि' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "कमल, बादल", correct: false },
            { text: "बादल, समुद्र", correct: true },
            { text: "समुद्र, बादल", correct: false },
            { text: "बादल, कमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलद' (जल देने वाला) का अर्थ बादल है और 'जलधि' (जल का भंडार) का अर्थ समुद्र है।"
    },
    {
        question: "प्रश्न 45. 'जाति' और 'जाती' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "जाने की क्रिया, वर्ण", correct: false },
            { text: "वर्ण, जाने की क्रिया", correct: true },
            { text: "समुदाय, जाने की क्रिया", correct: false },
            { text: "जाने की क्रिया, समुदाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जाति' का अर्थ वर्ण या समुदाय होता है, जबकि 'जाती' जाने की क्रिया का स्त्रीलिंग रूप है।"
    },
    {
        question: "प्रश्न 46. 'जीना' और 'जीणा' का सही अर्थ है-",
        answers: shuffle([
            { text: "पुराना, जीवन धारण करना", correct: false },
            { text: "जीवन धारण करना, पुराना", correct: true },
            { text: "जीना, सीढ़ी", correct: false },
            { text: "सीढ़ी, जीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जीना' का अर्थ जीवन धारण करना होता है और 'जीणा' का अर्थ पुराना या जर्जर (जीर्ण-शीर्ण से) होता है।"
    },
    {
        question: "प्रश्न 47. 'तक्र' और 'तर्क' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "दलील, छाछ", correct: false },
            { text: "छाछ, दलील", correct: true },
            { text: "मट्ठा, बहस", correct: false },
            { text: "बहस, मट्ठा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तक्र' का अर्थ छाछ या मट्ठा होता है और 'तर्क' का अर्थ दलील या बहस होता है।"
    },
    {
        question: "प्रश्न 48. 'द्वीप' और 'द्विप' का सही अर्थ है-",
        answers: shuffle([
            { text: "हाथी, टापू", correct: false },
            { text: "टापू, हाथी", correct: true },
            { text: "दीपक, हाथी", correct: false },
            { text: "हाथी, दीपक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्वीप' का अर्थ टापू होता है और 'द्विप' का अर्थ हाथी होता है।"
    },
    {
        question: "प्रश्न 49. 'निशित' और 'निशीथ' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "आधी रात, तीक्ष्ण", correct: false },
            { text: "तीक्ष्ण, आधी रात", correct: true },
            { text: "निश्चित, आधी रात", correct: false },
            { text: "आधी रात, निश्चित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निशित' का अर्थ तीक्ष्ण या तेज किया हुआ होता है और 'निशीथ' का अर्थ मध्यरात्रि का समय होता है।"
    },
    {
        question: "प्रश्न 50. 'पट्ट' और 'पट' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "वस्त्र, तख़्ता", correct: false },
            { text: "तख़्ता, वस्त्र", correct: true },
            { text: "उल्टा, वस्त्र", correct: false },
            { text: "तख़्ता, उल्टा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पट्ट' का अर्थ तख़्ता या पट्टी होता है और 'पट' का अर्थ वस्त्र या दरवाज़ा होता है।"
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