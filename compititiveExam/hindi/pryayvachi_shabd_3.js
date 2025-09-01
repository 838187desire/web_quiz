const questions = [
    {
        topHeading: "पर्यायवाची शब्द पर आधारित 50 बहुविकल्पीय प्रश्न part 3 (quiz_no.34)"
    },
    {
        question: "'जीव' शब्द का पर्यायवाची इनमें से कौन सा नहीं है?",
        answers: shuffle([
            { text: "प्राणी", correct: false },
            { text: "जंतु", correct: false },
            { text: "चेतन", correct: false },
            { text: "अचेतन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अचेतन' का अर्थ निर्जीव होता है, जबकि प्राणी, जंतु और चेतन 'जीव' के पर्यायवाची हैं।"
    },
    {
        question: "'मृत्यु' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "मरण", correct: false },
            { text: "निधन", correct: false },
            { text: "देहांत", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृत्यु' के पर्यायवाची मरण, निधन, देहांत, स्वर्गवास, इंतकाल हैं।"
    },
    {
        question: "'हयात' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "मृत्यु", correct: false },
            { text: "जीवन", correct: true },
            { text: "प्रकाश", correct: false },
            { text: "अंधकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हयात' का अर्थ जीवन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जीवन के अन्य पर्यायवाची जिंदगी, प्राण, जीवनकाल, जीवित हैं।"
    },
    {
        question: "'आलोक' शब्द निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "प्रकाश", correct: true },
            { text: "अंधकार", correct: false },
            { text: "दुख", correct: false },
            { text: "सुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आलोक' प्रकाश का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रकाश के अन्य पर्यायवाची रोशनी, उजाला, दीप्ति, प्रभा हैं।"
    },
    {
        question: "'तिमिर' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "प्रकाश", correct: false },
            { text: "अंधकार", correct: true },
            { text: "दुख", correct: false },
            { text: "सुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तिमिर' अंधकार का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> अंधकार के अन्य पर्यायवाची अँधेरा, तम, अँधियारा, तमस हैं।"
    },
    {
        question: "'वेदना' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "दुख", correct: true },
            { text: "सुख", correct: false },
            { text: "प्रेम", correct: false },
            { text: "घृणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वेदना' दुख का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> दुख के अन्य पर्यायवाची कष्ट, पीड़ा, व्यथा, शोक हैं।"
    },
    {
        question: "'हर्ष' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "दुख", correct: false },
            { text: "सुख", correct: true },
            { text: "प्रेम", correct: false },
            { text: "घृणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर्ष' सुख का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> सुख के अन्य पर्यायवाची चैन, आराम, आनंद, प्रसन्नता हैं।"
    },
    {
        question: "'मोहब्बत' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "प्रेम", correct: true },
            { text: "घृणा", correct: false },
            { text: "भय", correct: false },
            { text: "दया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मोहब्बत' प्रेम का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रेम के अन्य पर्यायवाची प्यार, स्नेह, अनुराग, प्रीति हैं।"
    },
    {
        question: "'जुगुप्सा' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "प्रेम", correct: false },
            { text: "घृणा", correct: true },
            { text: "भय", correct: false },
            { text: "दया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जुगुप्सा' घृणा का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> घृणा के अन्य पर्यायवाची नफरत, द्वेष, अरुचि, वितृष्णा हैं।"
    },
    {
        question: "'भीति' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "घृणा", correct: false },
            { text: "भय", correct: true },
            { text: "दया", correct: false },
            { text: "क्रोध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भीति' भय का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> भय के अन्य पर्यायवाची डर, खौफ, आतंक, त्रास हैं।"
    },
    {
        question: "'दया' का इनमें से कौनसा पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "करुणा", correct: false },
            { text: "रहम", correct: false },
            { text: "अनुकंपा", correct: false },
            { text: "अमर्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमर्ष' क्रोध का पर्यायवाची है, दया का नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> दया के पर्यायवाची करुणा, रहम, अनुकंपा, कृपा, सहानुभूति हैं।"
    },
    {
        question: "'कोप' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "दया", correct: false },
            { text: "क्रोध", correct: true },
            { text: "पाप", correct: false },
            { text: "पुण्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोप' क्रोध का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> क्रोध के अन्य पर्यायवाची गुस्सा, रोष, अमर्ष, तैश हैं।"
    },
    {
        question: "'दुष्कर्म' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "पुण्य", correct: false },
            { text: "पाप", correct: true },
            { text: "झूठ", correct: false },
            { text: "सच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुष्कर्म' पाप का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पाप के अन्य पर्यायवाची अधर्म, अनाचार, अशुचिता, कलुष हैं।"
    },
    {
        question: "'सुकृत' निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पाप", correct: false },
            { text: "पुण्य", correct: true },
            { text: "झूठ", correct: false },
            { text: "सच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुकृत' का अर्थ अच्छा कार्य या पुण्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> पुण्य के अन्य पर्यायवाची धर्म, शुभ, कर्म, सदाचार हैं।"
    },
    {
        question: "'मिथ्या' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "सच", correct: false },
            { text: "झूठ", correct: true },
            { text: "धन", correct: false },
            { text: "गरीब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिथ्या' झूठ का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> झूठ के अन्य पर्यायवाची असत्य, अनृत, मृषा, अप्रिय हैं।"
    },
    {
        question: "'यथार्थ' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "झूठ", correct: false },
            { text: "सच", correct: true },
            { text: "धन", correct: false },
            { text: "गरीब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथार्थ' सच का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> सच के अन्य पर्यायवाची सत्य, वास्तविकता, सही, तथ्य हैं।"
    },
    {
        question: "'वित्त' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "धन", correct: true },
            { text: "गरीब", correct: false },
            { text: "अमीर", correct: false },
            { text: "सुंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वित्त' धन का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> धन के अन्य पर्यायवाची दौलत, संपत्ति, द्रव्य, लक्ष्मी हैं।"
    },
    {
        question: "'रंक' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "अमीर", correct: false },
            { text: "गरीब", correct: true },
            { text: "सुंदर", correct: false },
            { text: "सुंदर नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रंक' गरीब का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> गरीब के अन्य पर्यायवाची निर्धन, दीन, दरिद्र, कंगाल हैं।"
    },
    {
        question: "'मालदार' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "गरीब", correct: false },
            { text: "अमीर", correct: true },
            { text: "सुंदर", correct: false },
            { text: "झूठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मालदार' अमीर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> अमीर के अन्य पर्यायवाची धनी, धनवान, समृद्ध, संपन्न हैं।"
    },
    {
        question: "'मनोरम' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "सुंदर", correct: true },
            { text: "कुरूप", correct: false },
            { text: "अमीर", correct: false },
            { text: "गरीब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मनोरम' का अर्थ मन को भाने वाला या सुंदर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सुंदर के अन्य पर्यायवाची खूबसूरत, ललित, चारु, रमणीय हैं।"
    },
    {
        question: "'जीवात्मा' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "मृत्यु", correct: false },
            { text: "जीवन", correct: false },
            { text: "जीव", correct: true },
            { text: "अंधकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जीवात्मा' जीव का पर्यायवाची है।"
    },
    {
        question: "'इंतकाल' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "जीवन", correct: false },
            { text: "मृत्यु", correct: true },
            { text: "प्रकाश", correct: false },
            { text: "अंधकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इंतकाल' का अर्थ मृत्यु होता है।"
    },
    {
        question: "'रोशनी' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "अंधकार", correct: false },
            { text: "प्रकाश", correct: true },
            { text: "सुख", correct: false },
            { text: "दुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रोशनी' प्रकाश का पर्यायवाची है।"
    },
    {
        question: "'तमस' शब्द का पर्यायवाची है:",
        answers: shuffle([
            { text: "प्रकाश", correct: false },
            { text: "अंधकार", correct: true },
            { text: "दुख", correct: false },
            { text: "सुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तमस' अंधकार का पर्यायवाची है।"
    },
    {
        question: "'पीड़ा' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "सुख", correct: false },
            { text: "दुख", correct: true },
            { text: "प्रेम", correct: false },
            { text: "घृणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पीड़ा' दुख का पर्यायवाची है।"
    },
    {
        question: "'चैन' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "दुख", correct: false },
            { text: "सुख", correct: true },
            { text: "प्रेम", correct: false },
            { text: "घृणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चैन' सुख का पर्यायवाची है।"
    },
    {
        question: "'प्रीति' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "घृणा", correct: false },
            { text: "प्रेम", correct: true },
            { text: "भय", correct: false },
            { text: "दया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रीति' प्रेम का पर्यायवाची है।"
    },
    {
        question: "'द्वेष' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "प्रेम", correct: false },
            { text: "घृणा", correct: true },
            { text: "भय", correct: false },
            { text: "दया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्वेष' घृणा का पर्यायवाची है।"
    },
    {
        question: "'खौफ' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "दया", correct: false },
            { text: "क्रोध", correct: false },
            { text: "भय", correct: true },
            { text: "पाप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खौफ' भय का पर्यायवाची है।"
    },
    {
        question: "'गुस्सा' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "दया", correct: false },
            { text: "क्रोध", correct: true },
            { text: "पाप", correct: false },
            { text: "पुण्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुस्सा' क्रोध का पर्यायवाची है।"
    },
    {
        question: "'अधर्म' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "पुण्य", correct: false },
            { text: "पाप", correct: true },
            { text: "झूठ", correct: false },
            { text: "सच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधर्म' पाप का पर्यायवाची है।"
    },
    {
        question: "'सदाचार' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पाप", correct: false },
            { text: "पुण्य", correct: true },
            { text: "झूठ", correct: false },
            { text: "सच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सदाचार' का अर्थ अच्छा आचरण या पुण्य होता है।"
    },
    {
        question: "'अनृत' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "सच", correct: false },
            { text: "झूठ", correct: true },
            { text: "धन", correct: false },
            { text: "गरीब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनृत' का अर्थ झूठ होता है।"
    },
    {
        question: "'तथ्य' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "झूठ", correct: false },
            { text: "सच", correct: true },
            { text: "धन", correct: false },
            { text: "गरीब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तथ्य' सच का पर्यायवाची है।"
    },
    {
        question: "'दौलत' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "धन", correct: true },
            { text: "गरीब", correct: false },
            { text: "अमीर", correct: false },
            { text: "सुंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दौलत' धन का पर्यायवाची है।"
    },
    {
        question: "'कंगाल' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "अमीर", correct: false },
            { text: "गरीब", correct: true },
            { text: "सुंदर", correct: false },
            { text: "झूठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कंगाल' गरीब का पर्यायवाची है।"
    },
    {
        question: "'धनी' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "गरीब", correct: false },
            { text: "अमीर", correct: true },
            { text: "सुंदर", correct: false },
            { text: "झूठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धनी' अमीर का पर्यायवाची है।"
    },
    {
        question: "'चारु' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "सुंदर", correct: true },
            { text: "कुरूप", correct: false },
            { text: "अमीर", correct: false },
            { text: "गरीब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चारु' का अर्थ सुंदर होता है।"
    },
    {
        question: "'स्नेह' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "घृणा", correct: false },
            { text: "प्रेम", correct: true },
            { text: "भय", correct: false },
            { text: "दया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्नेह' प्रेम का पर्यायवाची है।"
    },
    {
        question: "'तैश' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "दया", correct: false },
            { text: "क्रोध", correct: true },
            { text: "पाप", correct: false },
            { text: "पुण्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तैश' क्रोध का पर्यायवाची है।"
    },
    {
        question: "'जीवत' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "मृत्यु", correct: false },
            { text: "जीवन", correct: true },
            { text: "जीव", correct: false },
            { text: "अंधकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जीवत' जीवन का पर्यायवाची है।"
    },
    {
        question: "'स्वर्गवास' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "जीवन", correct: false },
            { text: "मृत्यु", correct: true },
            { text: "प्रकाश", correct: false },
            { text: "अंधकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वर्गवास' मृत्यु का एक सौम्य पर्यायवाची है।"
    },
    {
        question: "'दीप्ति' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "अंधकार", correct: false },
            { text: "प्रकाश", correct: true },
            { text: "सुख", correct: false },
            { text: "दुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दीप्ति' का अर्थ चमक या प्रकाश होता है।"
    },
    {
        question: "'अँधियारा' शब्द का पर्यायवाची है:",
        answers: shuffle([
            { text: "प्रकाश", correct: false },
            { text: "अंधकार", correct: true },
            { text: "दुख", correct: false },
            { text: "सुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अँधियारा' अंधकार का पर्यायवाची है।"
    },
    {
        question: "'शोक' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "सुख", correct: false },
            { text: "दुख", correct: true },
            { text: "प्रेम", correct: false },
            { text: "घृणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शोक' दुख का पर्यायवाची है।"
    },
    {
        question: "'आनंद' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "दुख", correct: false },
            { text: "सुख", correct: true },
            { text: "प्रेम", correct: false },
            { text: "घृणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आनंद' सुख का पर्यायवाची है।"
    },
    {
        question: "'अनुराग' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "घृणा", correct: false },
            { text: "प्रेम", correct: true },
            { text: "भय", correct: false },
            { text: "दया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुराग' प्रेम का पर्यायवाची है।"
    },
    {
        question: "'वितृष्णा' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "प्रेम", correct: false },
            { text: "घृणा", correct: true },
            { text: "भय", correct: false },
            { text: "दया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वितृष्णा' का अर्थ अरुचि या घृणा होता है।"
    },
    {
        question: "'कृपा' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "भय", correct: false },
            { text: "दया", correct: true },
            { text: "क्रोध", correct: false },
            { text: "पाप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कृपा' दया का पर्यायवाची है।"
    },
    {
        question: "'संपन्न' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "गरीब", correct: false },
            { text: "अमीर", correct: true },
            { text: "सुंदर", correct: false },
            { text: "झूठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संपन्न' अमीर का पर्यायवाची है।"
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