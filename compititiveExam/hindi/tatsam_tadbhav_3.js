const questions = [
    {
        topHeading: "तत्सम-तद्भव शब्दों पर आधारित 50 MCQs, part_3 (quiz_no.)"
    },
    {
        question: "प्रश्न 1: 'अंध' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अँधा", correct: false },
            { text: "अंधा", correct: true },
            { text: "काना", correct: false },
            { text: "नेत्रहीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंध' तत्सम शब्द का तद्भव रूप 'अंधा' होता है।"
    },
    {
        question: "प्रश्न 2: 'अम्लिका' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "इमली", correct: true },
            { text: "आँवला", correct: false },
            { text: "अमिया", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अम्लिका' तत्सम शब्द का तद्भव रूप 'इमली' होता है।"
    },
    {
        question: "प्रश्न 3: 'एला' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "इलायची", correct: true },
            { text: "लौंग", correct: false },
            { text: "सौंफ", correct: false },
            { text: "जीरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एला' तत्सम शब्द का तद्भव रूप 'इलायची' होता है।"
    },
    {
        question: "प्रश्न 4: 'उलूक' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "उल्लू", correct: true },
            { text: "बाज", correct: false },
            { text: "चील", correct: false },
            { text: "कौआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उलूक' तत्सम शब्द का तद्भव रूप 'उल्लू' होता है।"
    },
    {
        question: "प्रश्न 5: 'ओष्ठ' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "a) होंठ", correct: false },
            { text: "b) ओठ", correct: false },
            { text: "c) होठ", correct: false },
            { text: "(a) और (b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ओष्ठ' तत्सम शब्द के तद्भव रूप 'होंठ' और 'ओठ' दोनों ही प्रचलित हैं।"
    },
    {
        question: "प्रश्न 6: 'कंकण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कंगन", correct: true },
            { text: "कंकड़", correct: false },
            { text: "पत्थर", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कंकण' तत्सम शब्द का तद्भव रूप 'कंगन' होता है।"
    },
    {
        question: "प्रश्न 7: 'काष्ठ' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "काठ", correct: true },
            { text: "लकड़ी", correct: false },
            { text: "लोहा", correct: false },
            { text: "पत्थर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'काष्ठ' तत्सम शब्द का तद्भव रूप 'काठ' होता है।"
    },
    {
        question: "प्रश्न 8: 'गोधूम' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गेहूँ", correct: true },
            { text: "जौ", correct: false },
            { text: "चना", correct: false },
            { text: "बाजरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोधूम' तत्सम शब्द का तद्भव रूप 'गेहूँ' होता है।"
    },
    {
        question: "प्रश्न 9: 'चणक' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "चना", correct: true },
            { text: "चबाना", correct: false },
            { text: "चाशनी", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चणक' तत्सम शब्द का तद्भव रूप 'चना' होता है।"
    },
    {
        question: "प्रश्न 10: 'छिद्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "छेद", correct: true },
            { text: "छेनी", correct: false },
            { text: "छेदन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छिद्र' तत्सम शब्द का तद्भव रूप 'छेद' होता है।"
    },
    {
        question: "प्रश्न 11: 'दंत' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दाँत", correct: true },
            { text: "दंतमंजन", correct: false },
            { text: "दंत चिकित्सक", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दंत' तत्सम शब्द का तद्भव रूप 'दाँत' होता है।"
    },
    {
        question: "प्रश्न 12: 'धैर्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "धीरज", correct: true },
            { text: "धीर", correct: false },
            { text: "धीरे", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धैर्य' तत्सम शब्द का तद्भव रूप 'धीरज' होता है।"
    },
    {
        question: "प्रश्न 13: 'निम्‍ब' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नीम", correct: true },
            { text: "नींबू", correct: false },
            { text: "न्योता", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निम्‍ब' तत्सम शब्द का तद्भव रूप 'नीम' होता है।"
    },
    {
        question: "प्रश्न 14: 'पक्षी' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पंछी", correct: true },
            { text: "चिड़िया", correct: false },
            { text: "खग", correct: false },
            { text: "विहग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पक्षी' तत्सम शब्द का तद्भव रूप 'पंछी' होता है।"
    },
    {
        question: "प्रश्न 15: 'पर्ण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "a) पान", correct: false },
            { text: "b) पत्ता", correct: false },
            { text: "c) पन्ना", correct: false },
            { text: "(a) और (b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पर्ण' तत्सम शब्द के तद्भव रूप 'पान' और 'पत्ता' दोनों ही होते हैं।"
    },
    {
        question: "प्रश्न 16: 'पुष्प' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "a) फूल", correct: false },
            { text: "b) पुहुप", correct: false },
            { text: "c) सुमन", correct: false },
            { text: "(a) और (b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुष्प' तत्सम शब्द के तद्भव रूप 'फूल' और 'पुहुप' दोनों ही प्रचलित हैं।"
    },
    {
        question: "प्रश्न 17: 'बधिर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "बहरा", correct: true },
            { text: "गूँगा", correct: false },
            { text: "लंगड़ा", correct: false },
            { text: "अंधा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बधिर' तत्सम शब्द का तद्भव रूप 'बहरा' होता है।"
    },
    {
        question: "प्रश्न 18: 'भिक्षा' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "भीख", correct: true },
            { text: "भिक्षुक", correct: false },
            { text: "भिखारी", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भिक्षा' तत्सम शब्द का तद्भव रूप 'भीख' होता है।"
    },
    {
        question: "प्रश्न 19: 'मस्तक' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "माथा", correct: true },
            { text: "सिर", correct: false },
            { text: "मस्तिष्क", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मस्तक' तत्सम शब्द का तद्भव रूप 'माथा' होता है।"
    },
    {
        question: "प्रश्न 20: 'लज्जा' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "लाज", correct: true },
            { text: "शर्म", correct: false },
            { text: "हया", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लज्जा' तत्सम शब्द का तद्भव रूप 'लाज' होता है।"
    },
    {
        question: "प्रश्न 21: 'वत्स' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "a) बच्चा", correct: false },
            { text: "b) बछड़ा", correct: false },
            { text: "c) बेटा", correct: false },
            { text: "(a) और (b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वत्स' तत्सम शब्द के तद्भव रूप 'बच्चा' और 'बछड़ा' दोनों ही हैं।"
    },
    {
        question: "प्रश्न 22: 'विवाह' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "ब्याह", correct: true },
            { text: "शादी", correct: false },
            { text: "निकाह", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विवाह' तत्सम शब्द का तद्भव रूप 'ब्याह' होता है।"
    },
    {
        question: "प्रश्न 23: 'शिक्षा' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सीख", correct: true },
            { text: "ज्ञान", correct: false },
            { text: "विद्या", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिक्षा' तत्सम शब्द का तद्भव रूप 'सीख' होता है।"
    },
    {
        question: "प्रश्न 24: 'श्मशान' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "मसान", correct: true },
            { text: "श्मसान", correct: false },
            { text: "मरघट", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्मशान' तत्सम शब्द का तद्भव रूप 'मसान' होता है।"
    },
    {
        question: "प्रश्न 25: 'सत्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सच", correct: true },
            { text: "सच्चा", correct: false },
            { text: "सत्यवादी", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्य' तत्सम शब्द का तद्भव रूप 'सच' होता है।"
    },
    {
        question: "प्रश्न 26: 'स्वप्न' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "सपना", correct: true },
            { text: "नींद", correct: false },
            { text: "ख्वाब", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वप्न' तत्सम शब्द का तद्भव रूप 'सपना' होता है।"
    },
    {
        question: "प्रश्न 27: 'हस्त' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "हाथ", correct: true },
            { text: "हाथी", correct: false },
            { text: "हस्ती", correct: false },
            { text: "हथियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हस्त' तत्सम शब्द का तद्भव रूप 'हाथ' होता है।"
    },
    {
        question: "प्रश्न 28: 'अंगुली' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अँगुरी", correct: false },
            { text: "उँगली", correct: true },
            { text: "अंगुली", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंगुली' तत्सम शब्द का तद्भव रूप 'उँगली' होता है।"
    },
    {
        question: "प्रश्न 29: 'आश्चर्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अचरज", correct: true },
            { text: "आश्चर्यचकित", correct: false },
            { text: "हैरानी", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आश्चर्य' तत्सम शब्द का तद्भव रूप 'अचरज' होता है।"
    },
    {
        question: "प्रश्न 30: 'आलस्य' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आलस", correct: true },
            { text: "सुस्ती", correct: false },
            { text: "काहिली", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आलस्य' तत्सम शब्द का तद्भव रूप 'आलस' होता है।"
    },
    {
        question: "प्रश्न 31: 'उच्च' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "ऊँचा", correct: true },
            { text: "बड़ा", correct: false },
            { text: "महान", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उच्च' तत्सम शब्द का तद्भव रूप 'ऊँचा' होता है।"
    },
    {
        question: "प्रश्न 32: 'एकल' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अकेला", correct: true },
            { text: "एक", correct: false },
            { text: "एकमात्र", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एकल' तत्सम शब्द का तद्भव रूप 'अकेला' होता है।"
    },
    {
        question: "प्रश्न 33: 'कथा' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "कहानी", correct: true },
            { text: "किस्सा", correct: false },
            { text: "गाथा", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कथा' तत्सम शब्द का तद्भव रूप 'कहानी' होता है।"
    },
    {
        question: "प्रश्न 34: 'अर्क' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "आक", correct: true },
            { text: "अर्क", correct: false },
            { text: "सूर्य", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्क' तत्सम शब्द का तद्भव रूप 'आक' (एक पौधा) होता है।"
    },
    {
        question: "प्रश्न 35: 'गंभीर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गहरा", correct: true },
            { text: "शांत", correct: false },
            { text: "चुप", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गंभीर' तत्सम शब्द का तद्भव रूप 'गहरा' होता है।"
    },
    {
        question: "प्रश्न 36: 'ग्रामीण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "गँवार", correct: true },
            { text: "देहाती", correct: false },
            { text: "ग्रामीण", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्रामीण' तत्सम शब्द का तद्भव रूप 'गँवार' होता है।"
    },
    {
        question: "प्रश्न 37: 'चतुर्थ' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "चौथा", correct: true },
            { text: "चार", correct: false },
            { text: "चतुर", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुर्थ' तत्सम शब्द का तद्भव रूप 'चौथा' होता है।"
    },
    {
        question: "प्रश्न 38: 'आभीर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "अहीर", correct: true },
            { text: "ग्वाला", correct: false },
            { text: "गोपाल", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आभीर' तत्सम शब्द का तद्भव रूप 'अहीर' होता है।"
    },
    {
        question: "प्रश्न 39: 'ज्येष्ठ' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "जेठ", correct: true },
            { text: "बड़ा", correct: false },
            { text: "श्रेष्ठ", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्येष्ठ' तत्सम शब्द का तद्भव रूप 'जेठ' होता है।"
    },
    {
        question: "प्रश्न 40: 'तृण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "तिनका", correct: true },
            { text: "घास", correct: false },
            { text: "पत्ती", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तृण' तत्सम शब्द का तद्भव रूप 'तिनका' होता है।"
    },
    {
        question: "प्रश्न 41: 'दक्षिण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दाहिना", correct: true },
            { text: "दक्षिण दिशा", correct: false },
            { text: "दक्षिण", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दक्षिण' तत्सम शब्द का तद्भव रूप 'दाहिना' होता है।"
    },
    {
        question: "प्रश्न 42: 'द्विगुण' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "दुगुना", correct: false },
            { text: "दोगुना", correct: false },
            { text: "दूना", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्विगुण' तत्सम शब्द के लिए 'दुगुना', 'दोगुना', 'दूना' सभी तद्भव रूप प्रचलित हैं।"
    },
    {
        question: "प्रश्न 43: 'धरती' का तत्सम रूप क्या है?",
        answers: shuffle([
            { text: "धरित्री", correct: true },
            { text: "भूमि", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धरती' तद्भव शब्द का तत्सम रूप 'धरित्री' होता है।"
    },
    {
        question: "प्रश्न 44: 'नयन' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "नैन", correct: true },
            { text: "आँख", correct: false },
            { text: "लोचन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नयन' तत्सम शब्द का तद्भव रूप 'नैन' होता है।"
    },
    {
        question: "प्रश्न 45: 'प्रस्तर' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पत्थर", correct: true },
            { text: "पाषाण", correct: false },
            { text: "शिला", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रस्तर' तत्सम शब्द का तद्भव रूप 'पत्थर' होता है।"
    },
    {
        question: "प्रश्न 46: 'पौत्र' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पोता", correct: true },
            { text: "नाती", correct: false },
            { text: "पुत्र का पुत्र", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पौत्र' तत्सम शब्द का तद्भव रूप 'पोता' होता है।"
    },
    {
        question: "प्रश्न 47: 'प्रहरी' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पहरुआ", correct: true },
            { text: "पहरेदार", correct: false },
            { text: "चौकीदार", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रहरी' तत्सम शब्द का तद्भव रूप 'पहरुआ' होता है।"
    },
    {
        question: "प्रश्न 48: 'प्रिय' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "पिया", correct: true },
            { text: "प्रियतम", correct: false },
            { text: "प्यारा", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रिय' तत्सम शब्द का तद्भव रूप 'पिया' होता है।"
    },
    {
        question: "प्रश्न 49: 'फाल्गुन' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "फागुन", correct: true },
            { text: "फाल्गुनी", correct: false },
            { text: "फाल्गुन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फाल्गुन' तत्सम शब्द का तद्भव रूप 'फागुन' होता है।"
    },
    {
        question: "प्रश्न 50: 'बिन्दु' का तद्भव रूप क्या है?",
        answers: shuffle([
            { text: "बूँद", correct: true },
            { text: "बिंदु", correct: false },
            { text: "बिंदी", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिन्दु' तत्सम शब्द का तद्भव रूप 'बूँद' होता है।"
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