const questions = [
    {
        topHeading: "तत्सम-तद्भव शब्द पर आधारित 50 बहुविकल्पीय प्रश्न part 1 (quiz_no.25)"
    },
    {
        question: "'अंगुली' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अँगुली", correct: false },
            { text: "उंगली", correct: true },
            { text: "अंगुलि", correct: false },
            { text: "उँगुली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंगुली' एक तत्सम शब्द है जो संस्कृत से आया है, और इसका हिंदी में विकसित रूप 'उंगली' है।"
    },
    {
        question: "'अश्रु' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आँसू", correct: true },
            { text: "आंसू", correct: false },
            { text: "अंसु", correct: false },
            { text: "अश्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अश्रु' तत्सम शब्द है जिसका तद्भव रूप 'आँसू' होता है।"
    },
    {
        question: "इनमें से कौन सा शब्द तत्सम है?",
        answers: shuffle([
            { text: "घी", correct: false },
            { text: "दही", correct: false },
            { text: "आम", correct: false },
            { text: "घृत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घृत' तत्सम शब्द है, जिसका तद्भव रूप 'घी' होता है।"
    },
    {
        question: "'कार्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "काम", correct: true },
            { text: "कारज", correct: false },
            { text: "कार", correct: false },
            { text: "कर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कार्य' एक तत्सम शब्द है और इसका तद्भव रूप 'काम' होता है।"
    },
    {
        question: "'क्षेत्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "खेत्र", correct: false },
            { text: "खेत", correct: true },
            { text: "छेत्र", correct: false },
            { text: "क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षेत्र' तत्सम शब्द है, जो 'खेत' के रूप में हिंदी में विकसित हुआ है।"
    },
    {
        question: "'कूप' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कुआँ", correct: true },
            { text: "कुएँ", correct: false },
            { text: "कुआं", correct: false },
            { text: "कुपा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूप' तत्सम शब्द का तद्भव रूप 'कुआँ' है।"
    },
    {
        question: "'दुग्ध' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दूध", correct: true },
            { text: "दुध", correct: false },
            { text: "दूद", correct: false },
            { text: "दुग्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुग्ध' तत्सम शब्द है, जिसका तद्भव रूप 'दूध' होता है।"
    },
    {
        question: "'गोधूम' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गाय", correct: false },
            { text: "गोबर", correct: false },
            { text: "गोधन", correct: false },
            { text: "गेहूँ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोधूम' तत्सम शब्द का तद्भव रूप 'गेहूँ' है।"
    },
    {
        question: "इनमें से कौन सा शब्द तद्भव है?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "आँख", correct: true },
            { text: "अमृत", correct: false },
            { text: "अट्टालिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आँख' तद्भव शब्द है जिसका तत्सम रूप 'अक्षि' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अग्नि', 'अमृत', और 'अट्टालिका' तत्सम शब्द हैं।"
    },
    {
        question: "'गृह' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "घर", correct: true },
            { text: "गृह", correct: false },
            { text: "गृही", correct: false },
            { text: "घिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गृह' तत्सम शब्द है जो 'घर' के रूप में हिंदी में प्रचलित हुआ है।"
    },
    {
        question: "'कर्पूर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कपूर", correct: true },
            { text: "कर्पूर", correct: false },
            { text: "कपुरी", correct: false },
            { text: "करपूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कर्पूर' तत्सम शब्द है, और इसका तद्भव रूप 'कपूर' होता है।"
    },
    {
        question: "'नासिक' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नासा", correct: false },
            { text: "नाक", correct: true },
            { text: "नसा", correct: false },
            { text: "नासिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नासिक' तत्सम शब्द है, जिसका तद्भव रूप 'नाक' होता है।"
    },
    {
        question: "'मस्तक' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "माथा", correct: true },
            { text: "मुस्तक", correct: false },
            { text: "मस्तक", correct: false },
            { text: "मस्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मस्तक' तत्सम शब्द का तद्भव रूप 'माथा' है।"
    },
    {
        question: "'सर्प' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "साँप", correct: true },
            { text: "सर्पा", correct: false },
            { text: "सरप", correct: false },
            { text: "सँप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्प' तत्सम शब्द है, जिसका तद्भव रूप 'साँप' होता है।"
    },
    {
        question: "'चर्म' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "चर्म", correct: false },
            { text: "चम", correct: false },
            { text: "चमड़ा", correct: true },
            { text: "चर्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चर्म' तत्सम शब्द का तद्भव रूप 'चमड़ा' है।"
    },
    {
        question: "'कज्जला' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "काजल", correct: true },
            { text: "कजल", correct: false },
            { text: "काजल", correct: false },
            { text: "कज्जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कज्जला' तत्सम शब्द का तद्भव रूप 'काजल' है।"
    },
    {
        question: "'ग्राम' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गाँव", correct: true },
            { text: "ग्राम", correct: false },
            { text: "ग्राम्य", correct: false },
            { text: "गाँवो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्राम' तत्सम शब्द है जिसका तद्भव रूप 'गाँव' होता है।"
    },
    {
        question: "'सूची' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सुई", correct: true },
            { text: "सूच", correct: false },
            { text: "सूची", correct: false },
            { text: "सूचा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूची' तत्सम शब्द है, जिसका तद्भव रूप 'सुई' है।"
    },
    {
        question: "'अट्टालिका' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अटारी", correct: true },
            { text: "अट्टाल", correct: false },
            { text: "अटला", correct: false },
            { text: "अटाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अट्टालिका' तत्सम शब्द का तद्भव रूप 'अटारी' होता है।"
    },
    {
        question: "'किवाड़' का तत्सम रूप क्या है?",
        answers: shuffle([
            { text: "कपाट", correct: true },
            { text: "किवाट", correct: false },
            { text: "कपाट", correct: false },
            { text: "किवाड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किवाड़' तद्भव शब्द है जिसका तत्सम रूप 'कपाट' है।"
    },
    {
        question: "'अज्ञान' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अग्यान", correct: false },
            { text: "अजान", correct: true },
            { text: "अनजान", correct: false },
            { text: "अज्ञानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अज्ञान' तत्सम शब्द है, और 'अजान' उसका तद्भव रूप है।"
    },
    {
        question: "'मयूर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "मोर", correct: true },
            { text: "मयुर", correct: false },
            { text: "मयूरा", correct: false },
            { text: "मुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मयूर' तत्सम शब्द का तद्भव रूप 'मोर' होता है।"
    },
    {
        question: "'शृंगार' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सिंगार", correct: true },
            { text: "श्रृंगार", correct: false },
            { text: "श्रृंगार", correct: false },
            { text: "शृंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शृंगार' तत्सम शब्द है, जिसका तद्भव रूप 'सिंगार' है।"
    },
    {
        question: "'हस्त' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "हाथ", correct: true },
            { text: "हँस", correct: false },
            { text: "हस्ति", correct: false },
            { text: "हस्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हस्त' तत्सम शब्द का तद्भव रूप 'हाथ' होता है।"
    },
    {
        question: "'कर्ण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कान", correct: true },
            { text: "करना", correct: false },
            { text: "करन", correct: false },
            { text: "कर्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कर्ण' तत्सम शब्द का तद्भव रूप 'कान' है।"
    },
    {
        question: "'सत्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सच", correct: true },
            { text: "सत", correct: false },
            { text: "सत्त", correct: false },
            { text: "सत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्य' तत्सम शब्द का तद्भव रूप 'सच' होता है।"
    },
    {
        question: "'हल्दी' का तत्सम रूप क्या है?",
        answers: shuffle([
            { text: "हरिद्रा", correct: true },
            { text: "हलदी", correct: false },
            { text: "हरिद्र", correct: false },
            { text: "हरिद्रि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हल्दी' तद्भव शब्द है जिसका तत्सम रूप 'हरिद्रा' होता है।"
    },
    {
        question: "'घट' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "घड़ा", correct: true },
            { text: "घटा", correct: false },
            { text: "घट", correct: false },
            { text: "घट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घट' तत्सम शब्द का तद्भव रूप 'घड़ा' होता है।"
    },
    {
        question: "'भ्रातृ' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "भाई", correct: true },
            { text: "भ्राता", correct: false },
            { text: "भाँय", correct: false },
            { text: "भ्रातृ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भ्रातृ' तत्सम शब्द का तद्भव रूप 'भाई' है।"
    },
    {
        question: "'धैर्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "धीरज", correct: true },
            { text: "धीर", correct: false },
            { text: "धैर्यता", correct: false },
            { text: "धीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धैर्य' तत्सम शब्द का तद्भव रूप 'धीरज' होता है।"
    },
    {
        question: "'सूची' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सुई", correct: true },
            { text: "सूच", correct: false },
            { text: "सूचि", correct: false },
            { text: "सूई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूची' तत्सम शब्द का तद्भव रूप 'सुई' है।"
    },
    {
        question: "'भ्रमर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "भौंरा", correct: true },
            { text: "भ्रमर", correct: false },
            { text: "भँवर", correct: false },
            { text: "भौंर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भ्रमर' तत्सम शब्द का तद्भव रूप 'भौंरा' होता है।"
    },
    {
        question: "'अंधकार' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अँधेरा", correct: true },
            { text: "अंधेरा", correct: false },
            { text: "अंधार", correct: false },
            { text: "अँधारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंधकार' तत्सम शब्द का तद्भव रूप 'अँधेरा' है।"
    },
    {
        question: "'आम्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आम", correct: true },
            { text: "आम्", correct: false },
            { text: "अमरा", correct: false },
            { text: "अम्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आम्र' तत्सम शब्द का तद्भव रूप 'आम' होता है।"
    },
    {
        question: "'ओष्ठ' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "ओठ", correct: true },
            { text: "ओंठ", correct: false },
            { text: "होठ", correct: false },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ओष्ठ' तत्सम शब्द है जिसका तद्भव रूप 'ओठ' होता है।"
    },
    {
        question: "'कपोत' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कबूतर", correct: true },
            { text: "कपोत", correct: false },
            { text: "कबूतर", correct: false },
            { text: "कबूतरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कपोत' तत्सम शब्द का तद्भव रूप 'कबूतर' है।"
    },
    {
        question: "'छिद्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "छेद", correct: true },
            { text: "छिद्र", correct: false },
            { text: "छिद्र", correct: false },
            { text: "छिद्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छिद्र' तत्सम शब्द का तद्भव रूप 'छेद' है।"
    },
    {
        question: "'दंत' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दाँत", correct: true },
            { text: "दन्त", correct: false },
            { text: "दांत", correct: false },
            { text: "दंत्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दंत' तत्सम शब्द है, जिसका तद्भव रूप 'दाँत' होता है।"
    },
    {
        question: "'नृत्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नाच", correct: true },
            { text: "निरत", correct: false },
            { text: "नृत्त", correct: false },
            { text: "नृत्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नृत्य' तत्सम शब्द का तद्भव रूप 'नाच' है।"
    },
    {
        question: "'पक्षी' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पंछी", correct: true },
            { text: "पक्षी", correct: false },
            { text: "पाँखी", correct: false },
            { text: "पंछी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पक्षी' तत्सम शब्द का तद्भव रूप 'पंछी' होता है।"
    },
    {
        question: "'मस्तक' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "माथा", correct: true },
            { text: "मस्तक", correct: false },
            { text: "मस्त", correct: false },
            { text: "मस्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मस्तक' तत्सम शब्द का तद्भव रूप 'माथा' है।"
    },
    {
        question: "'चक्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "चक्का", correct: false },
            { text: "चक्र", correct: false },
            { text: "चक्कर", correct: false },
            { text: "चाक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चक्र' तत्सम शब्द है जिसका तद्भव रूप 'चाक' होता है।"
    },
    {
        question: "'प्रस्तर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पत्थर", correct: true },
            { text: "पाथर", correct: false },
            { text: "पत्थर", correct: false },
            { text: "प्रस्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रस्तर' तत्सम शब्द का तद्भव रूप 'पत्थर' है।"
    },
    {
        question: "'रज्जु' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "रस्सी", correct: true },
            { text: "रज्जु", correct: false },
            { text: "रस्सा", correct: false },
            { text: "रसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रज्जु' तत्सम शब्द का तद्भव रूप 'रस्सी' है।"
    },
    {
        question: "'शलाका' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सलाई", correct: true },
            { text: "शाला", correct: false },
            { text: "शलका", correct: false },
            { text: "साला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शलाका' तत्सम शब्द का तद्भव रूप 'सलाई' होता है।"
    },
    {
        question: "'लौह' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "लोहा", correct: true },
            { text: "लोह", correct: false },
            { text: "लौहा", correct: false },
            { text: "लूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लौह' तत्सम शब्द का तद्भव रूप 'लोहा' है।"
    },
    {
        question: "'सूत्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सूत", correct: true },
            { text: "सूत्र", correct: false },
            { text: "सुत", correct: false },
            { text: "सूतरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूत्र' तत्सम शब्द का तद्भव रूप 'सूत' है।"
    },
    {
        question: "'श्वसुर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "ससुर", correct: true },
            { text: "ससुर", correct: false },
            { text: "सुसर", correct: false },
            { text: "ससुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्वसुर' तत्सम शब्द का तद्भव रूप 'ससुर' होता है।"
    },
    {
        question: "'जीभ' का तत्सम रूप क्या है?",
        answers: shuffle([
            { text: "जिह्वा", correct: true },
            { text: "जिव्हा", correct: false },
            { text: "जिह्व", correct: false },
            { text: "जिभ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जीभ' तद्भव शब्द है जिसका तत्सम रूप 'जिह्वा' है।"
    },
    {
        question: "'कोकिल' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कोयल", correct: true },
            { text: "कोइल", correct: false },
            { text: "कोक", correct: false },
            { text: "कोकिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोकिल' तत्सम शब्द का तद्भव रूप 'कोयल' है।"
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