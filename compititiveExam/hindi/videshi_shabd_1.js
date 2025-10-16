const questions = [
    {
        topHeading: "विदेशी शब्दों पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1: 'अदालत' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अदालत' अरबी भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ 'न्यायालय' होता है।"
    },
    {
        question: "प्रश्न 2: 'कैंची' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "तुर्की", correct: true },
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कैंची' तुर्की भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका प्रयोग काटने के एक उपकरण के लिए होता है।"
    },
    {
        question: "प्रश्न 3: 'अलमारी' शब्द का मूल स्रोत क्या है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "डच", correct: false },
            { text: "अंग्रेज़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अलमारी' शब्द पुर्तगाली भाषा 'Armário' से हिंदी में आया है।"
    },
    {
        question: "प्रश्न 4: 'चाय' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "जापानी", correct: false },
            { text: "चीनी", correct: true },
            { text: "रूसी", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाय' और 'चीनी' दोनों शब्द चीनी भाषा से लिए गए हैं।"
    },
    {
        question: "प्रश्न 5: 'रिक्शा' शब्द किस विदेशी भाषा से संबंधित है?",
        answers: shuffle([
            { text: "चीनी", correct: false },
            { text: "जापानी", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "अंग्रेज़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रिक्शा' एक जापानी शब्द 'जिनरिक्शा' का संक्षिप्त रूप है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो अब हिंदी में बहुत प्रचलित है।"
    },
    {
        question: "प्रश्न 6: निम्नलिखित में से कौन सा शब्द फ़ारसी भाषा का है?",
        answers: shuffle([
            { text: "औरत", correct: false },
            { text: "किताब", correct: false },
            { text: "आदमी", correct: true },
            { text: "मुहावरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आदमी' फ़ारसी भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'औरत', 'किताब' और 'मुहावरा' अरबी शब्द हैं।"
    },
    {
        question: "प्रश्न 7: 'कारतूस' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "फ्रांसीसी", correct: true },
            { text: "पुर्तगाली", correct: false },
            { text: "अंग्रेज़ी", correct: false },
            { text: "डच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कारतूस' फ्रांसीसी भाषा के शब्द 'Cartouche' से लिया गया है।"
    },
    {
        question: "प्रश्न 8: 'डॉक्टर' शब्द का हिंदी में आगमन किस भाषा से हुआ है?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "लैटिन", correct: false },
            { text: "जर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डॉक्टर' (चिकित्सक) अंग्रेज़ी भाषा का एक बहुत ही प्रचलित शब्द है।"
    },
    {
        question: "प्रश्न 9: 'तोप' शब्द का मूल क्या है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तोप' शब्द तुर्की भाषा से भारतीय भाषाओं में आया है।"
    },
    {
        question: "प्रश्न 10: 'साबुन' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: true },
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "डच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साबुन' शब्द पुर्तगाली के 'Sabão' शब्द से विकसित होकर हिंदी में प्रयोग होता है।"
    },
    {
        question: "प्रश्न 11: 'गमला' और 'बाल्टी' शब्द किस एक ही विदेशी भाषा से आए हैं?",
        answers: shuffle([
            { text: "डच", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "जापानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गमला' और 'बाल्टी' दोनों ही शब्द पुर्तगाली भाषा से हिंदी में लिए गए हैं।"
    },
    {
        question: "प्रश्न 12: निम्नलिखित में से कौन सा शब्द तुर्की भाषा का नहीं है?",
        answers: shuffle([
            { text: "बेगम", correct: false },
            { text: "चेचक", correct: false },
            { text: "बारूद", correct: false },
            { text: "पैमाना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पैमाना' फ़ारसी भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'बेगम', 'चेचक', और 'बारूद' तुर्की भाषा के शब्द हैं।"
    },
    {
        question: "प्रश्न 13: 'सरकार' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सरकार' एक फ़ारसी शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका प्रयोग शासन या हुकूमत के लिए होता है।"
    },
    {
        question: "प्रश्न 14: 'मुकदमा' शब्द का स्रोत कौन सी भाषा है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "उर्दू", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुकदमा' अरबी भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ न्यायिक मामला या वाद होता है।"
    },
    {
        question: "प्रश्न 15: 'कूपन' और 'अंग्रेज' शब्द किस यूरोपीय भाषा से लिए गए हैं?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: false },
            { text: "फ्रांसीसी", correct: true },
            { text: "डच", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कूपन' और 'अंग्रेज' दोनों शब्द फ्रांसीसी भाषा से हिंदी में आए हैं।"
    },
    {
        question: "प्रश्न 16: 'आलू' शब्द किस भाषा से हिंदी में आया है?",
        answers: shuffle([
            { text: "डच", correct: false },
            { text: "चीनी", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आलू' शब्द पुर्तगाली भाषा से आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत की प्रमुख सब्जियों में से एक है।"
    },
    {
        question: "प्रश्न 17: निम्नलिखित में से अरबी भाषा का शब्द पहचानिए।",
        answers: shuffle([
            { text: "चाबी", correct: false },
            { text: "कमरा", correct: false },
            { text: "मौसम", correct: true },
            { text: "जलेबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मौसम' अरबी भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'चाबी' और 'कमरा' पुर्तगाली तथा 'जलेबी' फ़ारसी शब्द है।"
    },
    {
        question: "प्रश्न 18: 'पुलिस' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "तुर्की", correct: false },
            { text: "अंग्रेज़ी", correct: true },
            { text: "फ्रांसीसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुलिस' शब्द अंग्रेज़ी भाषा से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो अब हिंदी में पूरी तरह घुल-मिल गया है।"
    },
    {
        question: "प्रश्न 19: 'चाकू' शब्द का संबंध किस भाषा से है?",
        answers: shuffle([
            { text: "तुर्की", correct: true },
            { text: "पश्तो", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाकू' तुर्की भाषा का एक प्रचलित शब्द है।"
    },
    {
        question: "प्रश्न 20: 'चश्मा' शब्द किस भाषा का मूल है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चश्मा' शब्द फ़ारसी भाषा से हिंदी में आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ ऐनक होता है।"
    },
    {
        question: "प्रश्न 21: 'बम' शब्द किस विदेशी भाषा से लिया गया है?",
        answers: shuffle([
            { text: "रूसी", correct: false },
            { text: "डच", correct: true },
            { text: "जर्मन", correct: false },
            { text: "चीनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बम' शब्द डच भाषा से हिंदी में आया है।"
    },
    {
        question: "प्रश्न 22: 'तारीख' शब्द किस भाषा से संबंधित है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: true },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तारीख' (दिनांक) अरबी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 23: 'सुनामी' शब्द का आगमन किस भाषा से हुआ है?",
        answers: shuffle([
            { text: "चीनी", correct: false },
            { text: "कोरियाई", correct: false },
            { text: "मलय", correct: false },
            { text: "जापानी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुनामी' शब्द जापानी भाषा से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ 'बंदरगाह की लहरें' होता है।"
    },
    {
        question: "प्रश्न 24: 'बहादुर' शब्द की मूल भाषा क्या है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "मंगोली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहादुर' शब्द तुर्की भाषा का है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ वीर या साहसी होता है।"
    },
    {
        question: "प्रश्न 25: 'लीची' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "चीनी", correct: true },
            { text: "पुर्तगाली", correct: false },
            { text: "जापानी", correct: false },
            { text: "डच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लीची' फल का नाम चीनी भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 26: 'गोदाम' शब्द किस यूरोपीय भाषा से हिंदी में आया है?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: false },
            { text: "फ्रांसीसी", correct: false },
            { text: "डच", correct: false },
            { text: "पुर्तगाली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोदाम' शब्द पुर्तगाली भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 27: 'गुलाब' शब्द किस भाषा से संबंधित है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पश्तो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुलाब' एक सुंदर फूल का नाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो फ़ारसी भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 28: 'गवर्नर' शब्द किस भाषा से संबंधित है?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "लैटिन", correct: false },
            { text: "डच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गवर्नर' (राज्यपाल) अंग्रेज़ी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 29: निम्नलिखित में से कौन सा शब्द अरबी भाषा का नहीं है?",
        answers: shuffle([
            { text: "दुनिया", correct: false },
            { text: "दौलत", correct: false },
            { text: "तनख्वाह", correct: true },
            { text: "तकदीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तनख्वाह' फ़ारसी भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'दुनिया', 'दौलत' और 'तकदीर' अरबी शब्द हैं।"
    },
    {
        question: "प्रश्न 30: 'मेयर' शब्द का संबंध किस भाषा से है?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: false },
            { text: "फ्रांसीसी", correct: true },
            { text: "लैटिन", correct: false },
            { text: "जर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेयर' (महापौर) शब्द फ्रांसीसी भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 31: 'तुरूप' (ताश का पत्ता) शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "डच", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "स्पेनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताश के खेल में प्रयुक्त होने वाला शब्द 'तुरूप' डच भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 32: 'दीदार' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दीदार' (दर्शन) फ़ारसी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 33: 'तौलिया' शब्द की मूल भाषा है:",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "फ़ारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तौलिया' शब्द पुर्तगाली भाषा से हिंदी में आया है।"
    },
    {
        question: "प्रश्न 34: 'किताब' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किताब' (पुस्तक) अरबी भाषा का एक बहुत ही आम शब्द है।"
    },
    {
        question: "प्रश्न 35: 'लाश' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "पश्तो", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लाश' (मृत शरीर) तुर्की भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 36: 'जलेबी' शब्द का स्रोत क्या है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलेबी' एक मिठाई का नाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द फ़ारसी भाषा से आया है।"
    },
    {
        question: "प्रश्न 37: 'ऑफिसर' शब्द किस भाषा से हिंदी में आया है?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "डच", correct: false },
            { text: "जर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऑफिसर' (अफसर) शब्द अंग्रेज़ी भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 38: निम्नलिखित शब्दों में से पुर्तगाली शब्द कौन सा है?",
        answers: shuffle([
            { text: "औरत", correct: false },
            { text: "कुली", correct: false },
            { text: "कनस्तर", correct: true },
            { text: "चेहरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कनस्तर' पुर्तगाली शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'औरत' अरबी, 'कुली' तुर्की और 'चेहरा' फ़ारसी शब्द है।"
    },
    {
        question: "प्रश्न 39: 'ईमान' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पश्तो", correct: false },
            { text: "अरबी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ईमान' (निष्ठा, धर्म) अरबी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 40: 'जज' शब्द की मूल भाषा क्या है?",
        answers: shuffle([
            { text: "लैटिन", correct: false },
            { text: "फ्रांसीसी", correct: false },
            { text: "अंग्रेज़ी", correct: true },
            { text: "यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जज' (न्यायाधीश) शब्द अंग्रेज़ी भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 41: 'बेगम' शब्द का संबंध किस भाषा से है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "फ़ारसी", correct: false },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बेगम' और 'बादशाह' तुर्की भाषा के शब्द हैं।"
    },
    {
        question: "प्रश्न 42: 'पेंसिल' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ्रांसीसी", correct: false },
            { text: "अंग्रेज़ी", correct: true },
            { text: "पुर्तगाली", correct: false },
            { text: "डच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेंसिल' शब्द अंग्रेज़ी भाषा से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका मूल लैटिन शब्द 'पेनिसिलस' है।"
    },
    {
        question: "प्रश्न 43: 'आईना' किस भाषा का शब्द है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पश्तो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आईना' (दर्पण) फ़ारसी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 44: 'जार' (रूसी शासक) शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "जर्मन", correct: false },
            { text: "पोलिश", correct: false },
            { text: "रूसी", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जार' शब्द रूसी भाषा का है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका प्रयोग रूस के सम्राट के लिए होता था।"
    },
    {
        question: "प्रश्न 45: 'कुर्ता' शब्द की उत्पत्ति किस भाषा से हुई है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "तुर्की", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुर्ता' पहनने का एक वस्त्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द तुर्की भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 46: 'अपील' शब्द है:",
        answers: shuffle([
            { text: "देशज", correct: false },
            { text: "तत्सम", correct: false },
            { text: "विदेशज", correct: true },
            { text: "तद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपील' अंग्रेज़ी भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह विदेशज शब्द है।"
    },
    {
        question: "प्रश्न 47: 'चाबी' शब्द किस भाषा से हिंदी में आया है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "अरबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाबी' शब्द पुर्तगाली भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 48: 'जमीन' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पश्तो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जमीन' (भूमि) फ़ारसी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 49: 'इंजन' शब्द का मूल स्रोत है:",
        answers: shuffle([
            { text: "फ्रांसीसी", correct: false },
            { text: "जर्मन", correct: false },
            { text: "अंग्रेज़ी", correct: true },
            { text: "लैटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इंजन' अंग्रेज़ी भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका प्रयोग हिंदी में यंत्र के लिए होता है।"
    },
    {
        question: "प्रश्न 50: 'मुहावरा' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "उर्दू", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुहावरा' शब्द अरबी भाषा से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ 'अभ्यास' होता है।"
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