const questions = [
    {
        topHeading: "पर्यायवाची शब्द पर आधारित 50 बहुविकल्पीय प्रश्न part 4 (quiz_no.35)"
    },
    {
        question: "'कुरूप' शब्द का पर्यायवाची इनमें से कौन सा नहीं है?",
        answers: shuffle([
            { text: "बदसूरत", correct: false },
            { text: "भद्दा", correct: false },
            { text: "विरूप", correct: false },
            { text: "ललित", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ललित' सुंदर का पर्यायवाची है, जबकि बदसूरत, भद्दा और विरूप 'कुरूप' के पर्यायवाची हैं।"
    },
    {
        question: "'बृहत्' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "छोटा", correct: false },
            { text: "बड़ा", correct: true },
            { text: "नया", correct: false },
            { text: "पुराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बृहत्' का अर्थ बड़ा या विशाल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बड़ा के अन्य पर्यायवाची विशाल, महान, दीर्घ, विशालकाय हैं।"
    },
    {
        question: "'न्यून' निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "बड़ा", correct: false },
            { text: "छोटा", correct: true },
            { text: "नया", correct: false },
            { text: "पुराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'न्यून' का अर्थ कम या छोटा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> छोटा के अन्य पर्यायवाची लघु, सूक्ष्म, अल्प, नन्हा हैं।"
    },
    {
        question: "'अभिनव' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पुराना", correct: false },
            { text: "नया", correct: true },
            { text: "कठिन", correct: false },
            { text: "सरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिनव' का अर्थ बिल्कुल नया होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नया के अन्य पर्यायवाची नूतन, नवीन, ताजा, नव हैं।"
    },
    {
        question: "'पुरातन' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "नया", correct: false },
            { text: "पुराना", correct: true },
            { text: "कठिन", correct: false },
            { text: "सरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरातन' पुराना का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> पुराना के अन्य पर्यायवाची प्राचीन, पूर्वकालीन, जीर्ण हैं।"
    },
    {
        question: "'क्लिष्ट' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "सरल", correct: false },
            { text: "कठिन", correct: true },
            { text: "विजय", correct: false },
            { text: "हार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्लिष्ट' का अर्थ कठिन या जटिल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कठिन के अन्य पर्यायवाची मुश्किल, दुरूह, जटिल, दुष्कर हैं।"
    },
    {
        question: "'सुगम' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "कठिन", correct: false },
            { text: "सरल", correct: true },
            { text: "विजय", correct: false },
            { text: "हार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुगम' का अर्थ आसानी से पहुँचने योग्य या सरल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सरल के अन्य पर्यायवाची आसान, सहज, सीधा, सादा हैं।"
    },
    {
        question: "'फतेह' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "हार", correct: false },
            { text: "विजय", correct: true },
            { text: "सैनिक", correct: false },
            { text: "विद्यार्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फतेह' विजय का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> विजय के अन्य पर्यायवाची जीत, जय, सफलता, कामयाबी हैं।"
    },
    {
        question: "'पराजय' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "विजय", correct: false },
            { text: "हार", correct: true },
            { text: "सैनिक", correct: false },
            { text: "विद्यार्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पराजय' हार का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> हार के अन्य पर्यायवाची शिकस्त, असफलता, परास्त, पराभव हैं।"
    },
    {
        question: "'लश्कर' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "हार", correct: false },
            { text: "सैनिक", correct: true },
            { text: "विद्यार्थी", correct: false },
            { text: "अध्यापक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लश्कर' का अर्थ सेना या सैनिक समूह होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सैनिक के अन्य पर्यायवाची सिपाही, योद्धा, जवान, फौजी हैं।"
    },
    {
        question: "'विद्यार्थी' का इनमें से कौन सा पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "छात्र", correct: false },
            { text: "शिष्य", correct: false },
            { text: "अध्येता", correct: false },
            { text: "उपाध्याय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपाध्याय' अध्यापक का पर्यायवाची है, विद्यार्थी का नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> विद्यार्थी के पर्यायवाची छात्र, शिष्य, शिक्षार्थी, अध्येता, शागिर्द हैं।"
    },
    {
        question: "'उस्ताद' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "विद्यार्थी", correct: false },
            { text: "अध्यापक", correct: true },
            { text: "किसान", correct: false },
            { text: "मजदूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उस्ताद' अध्यापक का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> अध्यापक के अन्य पर्यायवाची शिक्षक, गुरु, आचार्य हैं।"
    },
    {
        question: "'अन्नदाता' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "मजदूर", correct: false },
            { text: "किसान", correct: true },
            { text: "जंगल", correct: false },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अन्नदाता' का अर्थ अन्न देने वाला, अर्थात किसान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> किसान के अन्य पर्यायवाची कृषक, खेतिहर, हलधर, भूमिपुत्र हैं।"
    },
    {
        question: "'कर्मकार' निम्न में से किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "किसान", correct: false },
            { text: "मजदूर", correct: true },
            { text: "जंगल", correct: false },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कर्मकार' का अर्थ कार्य करने वाला, अर्थात मजदूर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मजदूर के अन्य पर्यायवाची श्रमिक, कामगार, कुली, मेहनतकश हैं।"
    },
    {
        question: "'कानन' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "मजदूर", correct: false },
            { text: "जंगल", correct: true },
            { text: "शेर", correct: false },
            { text: "मोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कानन' जंगल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जंगल के अन्य पर्यायवाची वन, अरण्य, विपिन, गहन हैं।"
    },
    {
        question: "'मृगेंद्र' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "मोर", correct: false },
            { text: "शेर", correct: true },
            { text: "कोयल", correct: false },
            { text: "उल्लू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृगेंद्र' शेर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेर के अन्य पर्यायवाची सिंह, केसरी, वनराज, शार्दूल हैं।"
    },
    {
        question: "'केकी' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "शेर", correct: false },
            { text: "मोर", correct: true },
            { text: "कोयल", correct: false },
            { text: "उल्लू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'केकी' मोर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> मोर के अन्य पर्यायवाची मयूर, कलापी, शिखी, सारंग हैं।"
    },
    {
        question: "'पिक' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "कोयल", correct: true },
            { text: "उल्लू", correct: false },
            { text: "कौआ", correct: false },
            { text: "मोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिक' कोयल का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोयल के अन्य पर्यायवाची कोकिला, श्यामा, बसंतदूत, परभृत हैं।"
    },
    {
        question: "'कौशिक' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "उल्लू", correct: true },
            { text: "कौआ", correct: false },
            { text: "कोयल", correct: false },
            { text: "मोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कौशिक' उल्लू का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> उल्लू के अन्य पर्यायवाची उलूक, घुग्घु, लक्ष्मीवाहन, निशाचर हैं।"
    },
    {
        question: "'वायस' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "उल्लू", correct: false },
            { text: "कौआ", correct: true },
            { text: "कोयल", correct: false },
            { text: "मोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वायस' कौआ का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> कौआ के अन्य पर्यायवाची काक, करट, पिशुन, काग हैं।"
    },
    {
        question: "'विशालकाय' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "छोटा", correct: false },
            { text: "बड़ा", correct: true },
            { text: "नया", correct: false },
            { text: "पुराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विशालकाय' का अर्थ बहुत बड़ा शरीर वाला, अर्थात बड़ा होता है।"
    },
    {
        question: "'सूक्ष्म' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "बड़ा", correct: false },
            { text: "छोटा", correct: true },
            { text: "नया", correct: false },
            { text: "पुराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूक्ष्म' का अर्थ बहुत छोटा होता है।"
    },
    {
        question: "'नवीन' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पुराना", correct: false },
            { text: "नया", correct: true },
            { text: "कठिन", correct: false },
            { text: "सरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नवीन' नया का पर्यायवाची है।"
    },
    {
        question: "'जीर्ण' शब्द का पर्यायवाची है:",
        answers: shuffle([
            { text: "नया", correct: false },
            { text: "पुराना", correct: true },
            { text: "कठिन", correct: false },
            { text: "सरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जीर्ण' का अर्थ पुराना या फटा-पुराना होता है।"
    },
    {
        question: "'दुष्कर' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "सरल", correct: false },
            { text: "कठिन", correct: true },
            { text: "विजय", correct: false },
            { text: "हार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुष्कर' का अर्थ जिसे करना मुश्किल हो, अर्थात कठिन होता है।"
    },
    {
        question: "'सादा' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "कठिन", correct: false },
            { text: "सरल", correct: true },
            { text: "विजय", correct: false },
            { text: "हार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सादा' सरल का पर्यायवाची है।"
    },
    {
        question: "'कामयाबी' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "हार", correct: false },
            { text: "विजय", correct: true },
            { text: "सैनिक", correct: false },
            { text: "विद्यार्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कामयाबी' विजय का पर्यायवाची है।"
    },
    {
        question: "'असफलता' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "विजय", correct: false },
            { text: "हार", correct: true },
            { text: "सैनिक", correct: false },
            { text: "विद्यार्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'असफलता' हार का पर्यायवाची है।"
    },
    {
        question: "'योद्धा' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "हार", correct: false },
            { text: "सैनिक", correct: true },
            { text: "विद्यार्थी", correct: false },
            { text: "अध्यापक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'योद्धा' सैनिक का पर्यायवाची है।"
    },
    {
        question: "'शिक्षार्थी' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "विद्यार्थी", correct: true },
            { text: "अध्यापक", correct: false },
            { text: "किसान", correct: false },
            { text: "मजदूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिक्षार्थी' का अर्थ शिक्षा ग्रहण करने वाला, अर्थात विद्यार्थी होता है।"
    },
    {
        question: "'गुरु' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "विद्यार्थी", correct: false },
            { text: "अध्यापक", correct: true },
            { text: "किसान", correct: false },
            { text: "मजदूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुरु' अध्यापक का पर्यायवाची है।"
    },
    {
        question: "'हलधर' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "मजदूर", correct: false },
            { text: "किसान", correct: true },
            { text: "जंगल", correct: false },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हलधर' का अर्थ हल धारण करने वाला, अर्थात किसान होता है।"
    },
    {
        question: "'श्रमिक' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "किसान", correct: false },
            { text: "मजदूर", correct: true },
            { text: "जंगल", correct: false },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्रमिक' मजदूर का पर्यायवाची है।"
    },
    {
        question: "'विपिन' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "मजदूर", correct: false },
            { text: "जंगल", correct: true },
            { text: "शेर", correct: false },
            { text: "मोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विपिन' जंगल का पर्यायवाची है।"
    },
    {
        question: "'सिंह' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "मोर", correct: false },
            { text: "शेर", correct: true },
            { text: "कोयल", correct: false },
            { text: "उल्लू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सिंह' शेर का पर्यायवाची है।"
    },
    {
        question: "'कलापी' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "शेर", correct: false },
            { text: "मोर", correct: true },
            { text: "कोयल", correct: false },
            { text: "उल्लू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कलापी' मोर का पर्यायवाची है।"
    },
    {
        question: "'बसंतदूत' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "कोयल", correct: true },
            { text: "उल्लू", correct: false },
            { text: "कौआ", correct: false },
            { text: "मोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बसंतदूत' का अर्थ बसंत का दूत, अर्थात कोयल होता है।"
    },
    {
        question: "'निशाचर' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "उल्लू", correct: true },
            { text: "कौआ", correct: false },
            { text: "कोयल", correct: false },
            { text: "मोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निशाचर' का अर्थ रात में चलने वाला, अर्थात उल्लू होता है।"
    },
    {
        question: "'काग' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "उल्लू", correct: false },
            { text: "कौआ", correct: true },
            { text: "कोयल", correct: false },
            { text: "मोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'काग' कौआ का पर्यायवाची है।"
    },
    {
        question: "'नूतन' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "पुराना", correct: false },
            { text: "नया", correct: true },
            { text: "कठिन", correct: false },
            { text: "सरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नूतन' का अर्थ नया होता है।"
    },
    {
        question: "'असुंदर' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "सुंदर", correct: false },
            { text: "कुरूप", correct: true },
            { text: "नया", correct: false },
            { text: "पुराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'असुंदर' का अर्थ सुंदर नहीं, अर्थात कुरूप होता है।"
    },
    {
        question: "'महान' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "बड़ा", correct: true },
            { text: "छोटा", correct: false },
            { text: "नया", correct: false },
            { text: "पुराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महान' बड़ा का पर्यायवाची है।"
    },
    {
        question: "'अल्प' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "बड़ा", correct: false },
            { text: "छोटा", correct: true },
            { text: "नया", correct: false },
            { text: "पुराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अल्प' का अर्थ थोड़ा या छोटा होता है।"
    },
    {
        question: "'जीर्ण' का पर्यायवाची नहीं है:",
        answers: shuffle([
            { text: "प्राचीन", correct: false },
            { text: "पुरातन", correct: false },
            { text: "पूर्वकालीन", correct: false },
            { text: "अभिनव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिनव' नया का पर्यायवाची है।"
    },
    {
        question: "'सहज' शब्द किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "कठिन", correct: false },
            { text: "सरल", correct: true },
            { text: "विजय", correct: false },
            { text: "हार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सहज' का अर्थ आसान या सरल होता है।"
    },
    {
        question: "'जय' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "हार", correct: false },
            { text: "विजय", correct: true },
            { text: "सैनिक", correct: false },
            { text: "विद्यार्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जय' विजय का पर्यायवाची है।"
    },
    {
        question: "'पराभव' किसका पर्यायवाची है?",
        answers: shuffle([
            { text: "विजय", correct: false },
            { text: "हार", correct: true },
            { text: "सैनिक", correct: false },
            { text: "विद्यार्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पराभव' का अर्थ हार होता है।"
    },
    {
        question: "'फौजी' किस शब्द का पर्यायवाची है?",
        answers: shuffle([
            { text: "हार", correct: false },
            { text: "सैनिक", correct: true },
            { text: "विद्यार्थी", correct: false },
            { text: "अध्यापक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फौजी' सैनिक का पर्यायवाची है।"
    },
    {
        question: "'भूमिपुत्र' का पर्यायवाची शब्द है:",
        answers: shuffle([
            { text: "मजदूर", correct: false },
            { text: "किसान", correct: true },
            { text: "जंगल", correct: false },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भूमिपुत्र' का अर्थ भूमि का पुत्र, अर्थात किसान होता है।"
    },
    {
        question: "'कौआ' का पर्यायवाची नहीं है:",
        answers: shuffle([
            { text: "काक", correct: false },
            { text: "वायस", correct: false },
            { text: "पिशुन", correct: false },
            { text: "सारंग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सारंग' मोर का पर्यायवाची है, कौआ का नहीं।"
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