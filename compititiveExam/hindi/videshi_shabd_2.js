const questions = [
    {
        topHeading: "विदेशी शब्दों पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1: निम्नलिखित में से कौन सा शब्द फ्रांसीसी भाषा का है?",
        answers: shuffle([
            { text: "रूबल", correct: false },
            { text: "रेस्तरां", correct: true },
            { text: "रिक्शा", correct: false },
            { text: "रेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रेस्तरां' (Restaurant) फ्रांसीसी भाषा का शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'रूबल' रूसी, 'रिक्शा' जापानी और 'रेल' अंग्रेज़ी शब्द है।"
    },
    {
        question: "प्रश्न 2: 'काजू' शब्द का संबंध किस भाषा से है?",
        answers: shuffle([
            { text: "जापानी", correct: false },
            { text: "चीनी", correct: false },
            { text: "फ्रांसीसी", correct: false },
            { text: "पुर्तगाली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'काजू' शब्द का आगमन पुर्तगाली भाषा से हुआ है।"
    },
    {
        question: "प्रश्न 3: 'बारूद' शब्द किस भाषा से संबंधित है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बारूद' एक विस्फोटक पदार्थ है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द तुर्की भाषा से आया है।"
    },
    {
        question: "प्रश्न 4: 'अखबार' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "अरबी", correct: true },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अखबार' शब्द अरबी भाषा के 'खबर' शब्द का बहुवचन है।"
    },
    {
        question: "प्रश्न 5: 'पपीता' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "डच", correct: false },
            { text: "चीनी", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "स्पेनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पपीता' फल का नाम पुर्तगाली भाषा से हिंदी में आया है।"
    },
    {
        question: "प्रश्न 6: 'चेचक' (बीमारी) शब्द का मूल स्रोत क्या है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चेचक' एक बीमारी का नाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द तुर्की भाषा का है।"
    },
    {
        question: "प्रश्न 7: 'आमदनी' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "हिंदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आमदनी' (आय) फ़ारसी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 8: 'हॉस्पिटल' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "जर्मन", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हॉस्पिटल' (अस्पताल) अंग्रेज़ी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 9: 'तमाशा' शब्द की मूल भाषा क्या है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "मराठी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तमाशा' (खेल, कौतुक) फ़ारसी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 10: 'रूबल' किस देश की मुद्रा है और यह शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "जापान, जापानी", correct: false },
            { text: "चीन, चीनी", correct: false },
            { text: "रूस, रूसी", correct: true },
            { text: "फ्रांस, फ्रांसीसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रूबल' रूस की मुद्रा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द रूसी भाषा का है।"
    },
    {
        question: "प्रश्न 11: 'कुली' शब्द किस भाषा से संबंधित है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "चीनी", correct: false },
            { text: "तुर्की", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुली' (भारवाहक) शब्द तुर्की भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 12: 'हलवाई' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हलवाई' शब्द अरबी भाषा के 'हलवा' शब्द से बना है।"
    },
    {
        question: "प्रश्न 13: 'गरीब' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पश्तो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरीब' (निर्धन) शब्द अरबी भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 14: 'आतिशबाजी' शब्द किस भाषा से संबंधित है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आतिशबाजी' शब्द फ़ारसी भाषा का है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो 'आतिश' (आग) और 'बाजी' (खेल) से मिलकर बना है।"
    },
    {
        question: "प्रश्न 15: 'कॉलेज' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "फ्रांसीसी", correct: false },
            { text: "डच", correct: false },
            { text: "अंग्रेज़ी", correct: true },
            { text: "जर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कॉलेज' (महाविद्यालय) अंग्रेज़ी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 16: 'सलामी' शब्द की उत्पत्ति किस भाषा से हुई है?",
        answers: shuffle([
            { text: "अरबी", correct: true },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सलामी' शब्द अरबी भाषा के 'सलाम' शब्द से बना है।"
    },
    {
        question: "प्रश्न 17: 'दरी' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "पश्तो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दरी' (गलीचा) फ़ारसी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 18: 'चम्मच' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चम्मच' शब्द तुर्की भाषा से हिंदी में आया है।"
    },
    {
        question: "प्रश्न 19: 'टिकट' शब्द का मूल स्रोत क्या है?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "डच", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'टिकट' अंग्रेज़ी भाषा का एक बहुत ही प्रचलित शब्द है।"
    },
    {
        question: "प्रश्न 20: 'ताश' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "चीनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ताश' खेलने के पत्ते होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द फ़ारसी भाषा का है।"
    },
    {
        question: "प्रश्न 21: 'पादरी' शब्द किस भाषा से हिंदी में आया है?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: false },
            { text: "डच", correct: false },
            { text: "फ्रांसीसी", correct: false },
            { text: "पुर्तगाली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पादरी' (ईसाई पुरोहित) शब्द पुर्तगाली भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 22: 'मदद' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पश्तो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मदद' (सहायता) अरबी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 23: 'मलेरिया' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "स्पेनी", correct: false },
            { text: "इतालवी", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "अंग्रेज़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मलेरिया' शब्द इतालवी भाषा से आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ 'बुरी हवा' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अंग्रेज़ी के माध्यम से प्रचलित हुआ।"
    },
    {
        question: "प्रश्न 24: 'दरोगा' शब्द का मूल क्या है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "मंगोली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दरोगा' (अधिकारी) शब्द तुर्की भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 25: 'अचार' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अचार' शब्द पुर्तगाली भाषा से हिंदी में प्रचलित हुआ है।"
    },
    {
        question: "प्रश्न 26: 'इत्र' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इत्र' (सुगंध) फ़ारसी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 27: 'वकील' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वकील' (अधिवक्ता) शब्द अरबी भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 28: 'सर्कस' शब्द का आगमन किस भाषा से हुआ है?",
        answers: shuffle([
            { text: "फ्रांसीसी", correct: false },
            { text: "अंग्रेज़ी", correct: true },
            { text: "रूसी", correct: false },
            { text: "डच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्कस' शब्द अंग्रेज़ी भाषा का है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो हिंदी में ज्यों का त्यों प्रयोग होता है।"
    },
    {
        question: "प्रश्न 29: 'मलाई' शब्द की उत्पत्ति किस भाषा से मानी जाती है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पश्तो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मलाई' शब्द फ़ारसी भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 30: 'इस्पात' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ्रांसीसी", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "डच", correct: false },
            { text: "अंग्रेज़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इस्पात' (स्टील) शब्द पुर्तगाली भाषा के 'Espada' से आया है।"
    },
    {
        question: "प्रश्न 31: 'कमरा' शब्द का स्रोत है:",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: true },
            { text: "फ़ारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमरा' (कक्ष) पुर्तगाली भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 32: 'हफ्ता' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: true },
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हफ्ता' (सप्ताह) फ़ारसी भाषा के शब्द 'हफ्त' (सात) से बना है।"
    },
    {
        question: "प्रश्न 33: 'जहर' शब्द किस भाषा से हिंदी में आया है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जहर' (विष) फ़ारसी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 34: 'उर्दू' शब्द स्वयं किस भाषा का है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "पश्तो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उर्दू' शब्द तुर्की भाषा का है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ 'शाही शिविर' या 'लश्कर' होता है।"
    },
    {
        question: "प्रश्न 35: 'चाशनी' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाशनी' शब्द फ़ारसी भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 36: 'कैप्टन' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "डच", correct: false },
            { text: "अंग्रेज़ी", correct: true },
            { text: "फ्रांसीसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कैप्टन' (कप्तान) अंग्रेज़ी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 37: 'तंबाकू' शब्द का संबंध किस भाषा से है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: true },
            { text: "स्पेनी", correct: false },
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तंबाकू' शब्द पुर्तगाली भाषा के माध्यम से भारत में आया।"
    },
    {
        question: "प्रश्न 38: 'कोर्ट' (न्यायालय) शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "लैटिन", correct: false },
            { text: "डच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोर्ट' शब्द अंग्रेज़ी भाषा का है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका प्रयोग न्यायालय के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 39: 'पिज्जा' शब्द किस भाषा से आया है?",
        answers: shuffle([
            { text: "फ्रांसीसी", correct: false },
            { text: "स्पेनी", correct: false },
            { text: "अंग्रेज़ी", correct: false },
            { text: "इतालवी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिज्जा' एक लोकप्रिय व्यंजन है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द इतालवी भाषा का है।"
    },
    {
        question: "प्रश्न 40: 'अल्लाह' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: true },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अल्लाह' शब्द अरबी भाषा का है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका प्रयोग ईश्वर के लिए होता है।"
    },
    {
        question: "प्रश्न 41: 'कालीन' शब्द का मूल स्रोत क्या है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: true },
            { text: "मंगोली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कालीन' (गलीचा) शब्द तुर्की भाषा से लिया गया है।"
    },
    {
        question: "प्रश्न 42: 'कोको' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "डच", correct: false },
            { text: "स्पेनी", correct: true },
            { text: "फ्रांसीसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोको' और 'चॉकलेट' शब्द स्पेनी भाषा के माध्यम से प्रचलित हुए हैं।"
    },
    {
        question: "प्रश्न 43: 'मजबूर' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पश्तो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मजबूर' (विवश) शब्द अरबी भाषा से हिंदी में आया है।"
    },
    {
        question: "प्रश्न 44: 'मील' (दूरी की इकाई) शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "लैटिन", correct: false },
            { text: "यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मील' (Mile) दूरी की इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अंग्रेज़ी भाषा का शब्द है।"
    },
    {
        question: "प्रश्न 45: 'समोसा' शब्द मूलतः किस भाषा का है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "पुर्तगाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का लोकप्रिय व्यंजन 'समोसा' मूल रूप से फ़ारसी शब्द 'संबोसाग' से विकसित हुआ है।"
    },
    {
        question: "प्रश्न 46: 'बिरयानी' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "पश्तो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिरयानी' शब्द फ़ारसी शब्द 'बिरियन' से आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ 'पकाने से पहले भुना हुआ' होता है।"
    },
    {
        question: "प्रश्न 47: 'हुक्म' शब्द किस भाषा का है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हुक्म' (आदेश) शब्द अरबी भाषा का है।"
    },
    {
        question: "प्रश्न 48: 'ऑक्सीजन' शब्द का स्रोत क्या है?",
        answers: shuffle([
            { text: "लैटिन", correct: false },
            { text: "जर्मन", correct: false },
            { text: "अंग्रेज़ी", correct: false },
            { text: "यूनानी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऑक्सीजन' शब्द की उत्पत्ति दो यूनानी शब्दों से हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो अंग्रेज़ी के माध्यम से प्रचलित हुआ।"
    },
    {
        question: "प्रश्न 49: 'खजाना' शब्द किस भाषा से लिया गया है?",
        answers: shuffle([
            { text: "अरबी", correct: true },
            { text: "फ़ारसी", correct: false },
            { text: "तुर्की", correct: false },
            { text: "पश्तो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खजाना' (कोष) शब्द अरबी भाषा का है।"
    },
    {
        question: "प्रश्न 50: 'बजट' शब्द का हिंदी में आगमन किस भाषा से हुआ है?",
        answers: shuffle([
            { text: "अंग्रेज़ी", correct: true },
            { text: "फ्रांसीसी", correct: false },
            { text: "जर्मन", correct: false },
            { text: "इतालवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बजट' शब्द अंग्रेज़ी भाषा से आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका मूल स्रोत फ्रांसीसी शब्द 'bougette' (छोटा थैला) है।"
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