const questions = [
    {
        topHeading: "तत्सम-तद्भव शब्दों पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1: 'कमल' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "रूढ़", correct: true },
            { text: "यौगिक", correct: false },
            { text: "योगरूढ़", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमल' शब्द के सार्थक खंड नहीं हो सकते, अतः यह रूढ़ शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तत्सम भी है।"
    },
    {
        question: "प्रश्न 2: 'पाठशाला' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "रूढ़", correct: false },
            { text: "यौगिक", correct: true },
            { text: "योगरूढ़", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाठ' और 'शाला' दो सार्थक शब्दों के योग से बना है, अतः यह यौगिक शब्द है।"
    },
    {
        question: "प्रश्न 3: 'दशानन' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "रूढ़", correct: false },
            { text: "यौगिक", correct: false },
            { text: "योगरूढ़", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशानन' (दस हैं आनन जिसके) का सामान्य अर्थ न होकर विशेष अर्थ 'रावण' है, अतः यह योगरूढ़ शब्द है।"
    },
    {
        question: "प्रश्न 4: 'क्षीर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "खीर", correct: true },
            { text: "दूध", correct: false },
            { text: "दही", correct: false },
            { text: "घी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षीर' तत्सम शब्द का तद्भव रूप 'खीर' होता है।"
    },
    {
        question: "प्रश्न 5: 'क्षेत्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "खेत", correct: true },
            { text: "मैदान", correct: false },
            { text: "बाग", correct: false },
            { text: "बगीचा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षेत्र' तत्सम शब्द का तद्भव रूप 'खेत' होता है।"
    },
    {
        question: "प्रश्न 6: 'क्षीर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "खीर", correct: true },
            { text: "क्षीण", correct: false },
            { text: "शेर", correct: false },
            { text: "चीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षीर' तत्सम शब्द का तद्भव रूप 'खीर' होता है।"
    },
    {
        question: "प्रश्न 7: 'कर्ण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कान", correct: true },
            { text: "करन", correct: false },
            { text: "कार्य", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कर्ण' तत्सम शब्द है, जिसका तद्भव रूप 'कान' होता है।"
    },
    {
        question: "प्रश्न 8: 'नासिका' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नाक", correct: true },
            { text: "नस", correct: false },
            { text: "नास", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नासिका' तत्सम शब्द का तद्भव रूप 'नाक' होता है।"
    },
    {
        question: "प्रश्न 9: 'चर्म' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "a) चाम", correct: false },
            { text: "b) चमड़ा", correct: false },
            { text: "c) चर्मकार", correct: false },
            { text: "(a) और (b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चर्म' तत्सम शब्द के तद्भव रूप 'चाम' और 'चमड़ा' दोनों ही प्रचलित हैं।"
    },
    {
        question: "प्रश्न 10: 'ग्राम' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गाँव", correct: true },
            { text: "शहर", correct: false },
            { text: "कस्बा", correct: false },
            { text: "देहात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्राम' तत्सम शब्द का तद्भव रूप 'गाँव' होता है।"
    },
    {
        question: "प्रश्न 11: 'दुग्ध' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दूध", correct: true },
            { text: "दही", correct: false },
            { text: "घी", correct: false },
            { text: "मक्खन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुग्ध' तत्सम शब्द है, जिसका तद्भव रूप 'दूध' होता है।"
    },
    {
        question: "प्रश्न 12: 'भ्राता' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "भाई", correct: true },
            { text: "भ्रातृ", correct: false },
            { text: "भतीजा", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भ्राता' तत्सम शब्द का तद्भव रूप 'भाई' होता है।"
    },
    {
        question: "प्रश्न 13: 'भगिनी' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "बहन", correct: true },
            { text: "भाभी", correct: false },
            { text: "बुआ", correct: false },
            { text: "बेटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भगिनी' तत्सम शब्द का तद्भव रूप 'बहन' है।"
    },
    {
        question: "प्रश्न 14: 'माता' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "माँ", correct: false },
            { text: "अम्मा", correct: false },
            { text: "माई", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'माता' तत्सम शब्द के लिए 'माँ', 'अम्मा', 'माई' आदि सभी तद्भव रूप प्रचलित हैं।"
    },
    {
        question: "प्रश्न 15: 'पाद' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "a) पैर", correct: false },
            { text: "b) पाँव", correct: false },
            { text: "c) पग", correct: false },
            { text: "(a) और (b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाद' तत्सम शब्द के तद्भव रूप 'पैर' और 'पाँव' दोनों ही हैं।"
    },
    {
        question: "प्रश्न 16: 'सूर्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सूरज", correct: true },
            { text: "सूर", correct: false },
            { text: "रवि", correct: false },
            { text: "दिनकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूर्य' तत्सम शब्द का तद्भव रूप 'सूरज' होता है।"
    },
    {
        question: "प्रश्न 17: 'अंगुष्ठ' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अंगूठा", correct: true },
            { text: "अँगुली", correct: false },
            { text: "हाथ", correct: false },
            { text: "कलाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंगुष्ठ' तत्सम शब्द का तद्भव रूप 'अंगूठा' होता है।"
    },
    {
        question: "प्रश्न 18: 'अश्रु' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आँसू", correct: true },
            { text: "रोना", correct: false },
            { text: "आँख", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अश्रु' तत्सम शब्द का तद्भव रूप 'आँसू' होता है।"
    },
    {
        question: "प्रश्न 19: 'श्यामल' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "साँवला", correct: true },
            { text: "काला", correct: false },
            { text: "श्याम", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्यामल' तत्सम शब्द का तद्भव रूप 'साँवला' होता है।"
    },
    {
        question: "प्रश्न 20: 'गृहिणी' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "घरनी", correct: true },
            { text: "पत्नी", correct: false },
            { text: "महिला", correct: false },
            { text: "स्त्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गृहिणी' तत्सम शब्द का तद्भव रूप 'घरनी' होता है।"
    },
    {
        question: "प्रश्न 21: 'कूप' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कुआँ", correct: true },
            { text: "तालाब", correct: false },
            { text: "गड्ढा", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूप' तत्सम शब्द का तद्भव रूप 'कुआँ' होता है।"
    },
    {
        question: "प्रश्न 22: 'स्वर्णकार' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "a) सुनार", correct: false },
            { text: "b) सोनार", correct: false },
            { text: "c) लोहार", correct: false },
            { text: "(a) और (b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वर्णकार' तत्सम शब्द के तद्भव रूप 'सुनार' और 'सोनार' दोनों ही प्रचलित हैं।"
    },
    {
        question: "प्रश्न 23: 'लौहकार' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "लोहार", correct: true },
            { text: "लुहार", correct: false },
            { text: "लोहा", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लौहकार' तत्सम शब्द का तद्भव रूप 'लोहार' होता है।"
    },
    {
        question: "प्रश्न 24: 'कुम्भकार' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कुम्हार", correct: true },
            { text: "कुम्भार", correct: false },
            { text: "कुंभ", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुम्भकार' तत्सम शब्द का तद्भव रूप 'कुम्हार' होता है।"
    },
    {
        question: "प्रश्न 25: 'चर्मकार' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "चमार", correct: true },
            { text: "मोची", correct: false },
            { text: "चमड़ा", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चर्मकार' तत्सम शब्द का तद्भव रूप 'चमार' होता है।"
    },
    {
        question: "प्रश्न 26: 'नग्न' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नंगा", correct: true },
            { text: "वस्त्रहीन", correct: false },
            { text: "निर्वस्त्र", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नग्न' तत्सम शब्द का तद्भव रूप 'नंगा' होता है।"
    },
    {
        question: "प्रश्न 27: 'नव' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "a) नया", correct: false },
            { text: "b) नौ", correct: false },
            { text: "c) नवीन", correct: false },
            { text: "(a) और (b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नव' तत्सम शब्द के दो अर्थ होते हैं - 'नया' और 'नौ'।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः दोनों ही इसके तद्भव रूप हैं।"
    },
    {
        question: "प्रश्न 28: 'पंच' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पाँच", correct: true },
            { text: "पंचम", correct: false },
            { text: "पंचायत", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंच' तत्सम शब्द का तद्भव रूप 'पाँच' होता है।"
    },
    {
        question: "प्रश्न 29: 'सप्त' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सात", correct: true },
            { text: "सप्ताह", correct: false },
            { text: "सप्तम", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्त' तत्सम शब्द का तद्भव रूप 'सात' होता है।"
    },
    {
        question: "प्रश्न 30: 'शत' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सौ", correct: true },
            { text: "शतक", correct: false },
            { text: "शतम्", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शत' तत्सम शब्द का तद्भव रूप 'सौ' होता है।"
    },
    {
        question: "प्रश्न 31: 'मित्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "मीत", correct: true },
            { text: "दोस्त", correct: false },
            { text: "सखा", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मित्र' तत्सम शब्द का तद्भव रूप 'मीत' है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'दोस्त' फारसी शब्द है।"
    },
    {
        question: "प्रश्न 32: 'वधू' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "बहू", correct: true },
            { text: "वधु", correct: false },
            { text: "दुल्हन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वधू' तत्सम शब्द का तद्भव रूप 'बहू' होता है।"
    },
    {
        question: "प्रश्न 33: 'वर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दूल्हा", correct: true },
            { text: "पति", correct: false },
            { text: "स्वामी", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वर' तत्सम शब्द का तद्भव रूप 'दूल्हा' होता है।"
    },
    {
        question: "प्रश्न 34: 'श्वसुर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "ससुर", correct: true },
            { text: "श्वसुर", correct: false },
            { text: "ससुरजी", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्वसुर' तत्सम शब्द का तद्भव रूप 'ससुर' होता है।"
    },
    {
        question: "प्रश्न 35: 'श्वश्रू' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सास", correct: true },
            { text: "सासू", correct: false },
            { text: "सासु", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्वश्रू' तत्सम शब्द का तद्भव रूप 'सास' होता है।"
    },
    {
        question: "प्रश्न 36: 'जामाता' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दामाद", correct: false },
            { text: "जवाई", correct: false },
            { text: "जमाई", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जामाता' तत्सम शब्द के लिए 'दामाद', 'जवाई', 'जमाई' सभी तद्भव रूप प्रचलित हैं।"
    },
    {
        question: "प्रश्न 37: 'कर्म' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "काम", correct: true },
            { text: "कार्य", correct: false },
            { text: "क्रिया", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कर्म' तत्सम शब्द का तद्भव रूप 'काम' होता है।"
    },
    {
        question: "प्रश्न 38: 'धूम्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "धुआँ", correct: true },
            { text: "धूम", correct: false },
            { text: "धूल", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धूम्र' तत्सम शब्द का तद्भव रूप 'धुआँ' होता है।"
    },
    {
        question: "प्रश्न 39: 'कदली' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "केला", correct: true },
            { text: "कली", correct: false },
            { text: "कोयल", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कदली' तत्सम शब्द का तद्भव रूप 'केला' होता है।"
    },
    {
        question: "प्रश्न 40: 'नारिकेल' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नारियल", correct: true },
            { text: "नारंगी", correct: false },
            { text: "नाशपाती", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नारिकेल' तत्सम शब्द का तद्भव रूप 'नारियल' होता है।"
    },
    {
        question: "प्रश्न 41: 'कच्छप' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कछुआ", correct: true },
            { text: "केकड़ा", correct: false },
            { text: "मगरमच्छ", correct: false },
            { text: "मछली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कच्छप' तत्सम शब्द का तद्भव रूप 'कछुआ' होता है।"
    },
    {
        question: "प्रश्न 42: 'अज्ञान' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अजान", correct: true },
            { text: "अनजान", correct: false },
            { text: "नासमझ", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अज्ञान' तत्सम शब्द का तद्भव रूप 'अजान' होता है।"
    },
    {
        question: "प्रश्न 43: 'अमूल्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अमोल", correct: true },
            { text: "अनमोल", correct: false },
            { text: "बहुमूल्य", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमूल्य' तत्सम शब्द का तद्भव रूप 'अमोल' होता है।"
    },
    {
        question: "प्रश्न 44: 'युवा' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "जवान", correct: true },
            { text: "युवक", correct: false },
            { text: "किशोर", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'युवा' तत्सम शब्द का तद्भव रूप 'जवान' होता है।"
    },
    {
        question: "प्रश्न 45: 'वृद्ध' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "a) बूढ़ा", correct: false },
            { text: "b) बुड्ढा", correct: false },
            { text: "c) बुजुर्ग", correct: false },
            { text: "(a) और (b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वृद्ध' तत्सम शब्द के तद्भव रूप 'बूढ़ा' और 'बुड्ढा' दोनों ही प्रचलित हैं।"
    },
    {
        question: "प्रश्न 46: 'दीप' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दीया", correct: true },
            { text: "दीपक", correct: false },
            { text: "दीवा", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दीप' तत्सम शब्द का तद्भव रूप 'दीया' होता है।"
    },
    {
        question: "प्रश्न 47: 'घृत' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "घी", correct: true },
            { text: "तेल", correct: false },
            { text: "मक्खन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घृत' तत्सम शब्द का तद्भव रूप 'घी' होता है।"
    },
    {
        question: "प्रश्न 48: 'तैल' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "तेल", correct: true },
            { text: "तैलम्", correct: false },
            { text: "तिल", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तैल' तत्सम शब्द का तद्भव रूप 'तेल' होता है।"
    },
    {
        question: "प्रश्न 49: 'आम्रचूर्ण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आमचूर", correct: false },
            { text: "अमचूर", correct: true },
            { text: "आम का चूर्ण", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आम्रचूर्ण' तत्सम शब्द का तद्भव रूप 'अमचूर' होता है।"
    },
    {
        question: "प्रश्न 50: 'इक्षु' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "ईख", correct: true },
            { text: "गन्ना", correct: false },
            { text: "इच्छु", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इक्षु' तत्सम शब्द का तद्भव रूप 'ईख' होता है।"
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