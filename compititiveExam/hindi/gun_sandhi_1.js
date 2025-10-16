const questions = [
    {
        topHeading: "गुण संधि पर आधारित 55 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'नरेंद्र' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "नर + इंद्र", correct: true },
            { text: "नरे + इंद्र", correct: false },
            { text: "नर + ईंद्र", correct: false },
            { text: "न + रेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नरेंद्र' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'नर + इंद्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'इ' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 2. 'महेंद्र' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "महा + इंद्र", correct: true },
            { text: "महे + इंद्र", correct: false },
            { text: "महा + ईंद्र", correct: false },
            { text: "मह + इंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महेंद्र' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'महा + इंद्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'इ' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 3. 'गणेश' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "गण + ईश", correct: true },
            { text: "गणे + श", correct: false },
            { text: "गण + इश", correct: false },
            { text: "ग + णेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गणेश' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'गण + ईश' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'ई' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 4. 'रमेश' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "रमा + ईश", correct: true },
            { text: "रमे + श", correct: false },
            { text: "रम + ईश", correct: false },
            { text: "रमा + इश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रमेश' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'रमा + ईश' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'ई' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 5. 'सूर्योदय' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "सूर्य + उदय", correct: true },
            { text: "सूर्यो + दय", correct: false },
            { text: "सूर्य + ऊदय", correct: false },
            { text: "सूर + योदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूर्योदय' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'सूर्य + उदय' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 6. 'महोत्सव' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "महा + उत्सव", correct: true },
            { text: "महो + त्सव", correct: false },
            { text: "महा + ऊत्सव", correct: false },
            { text: "मह + उत्सव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महोत्सव' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'महा + उत्सव' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'उ' मिलकर 'ओ' बन जाते हैं。"
    },
    {
        question: "प्रश्न 7. 'देवर्षि' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "देव + ऋषि", correct: true },
            { text: "देवे + ऋषि", correct: false },
            { text: "देव +र्षि", correct: false },
            { text: "दे + वर्षि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देवर्षि' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'देव + ऋषि' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'ऋ' मिलकर 'अर्' बन जाते हैं।"
    },
    {
        question: "प्रश्न 8. 'महर्षि' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "महा + ऋषि", correct: true },
            { text: "महे + ऋषि", correct: false },
            { text: "महा +र्षि", correct: false },
            { text: "मह + ऋषि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महर्षि' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'महा + ऋषि' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'ऋ' मिलकर 'अर्' बन जाते हैं।"
    },
    {
        question: "प्रश्न 9. 'परमेश्वर' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "परम + ईश्वर", correct: true },
            { text: "परमे + श्वर", correct: false },
            { text: "परम + इश्वर", correct: false },
            { text: "पर + मेश्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परमेश्वर' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'परम + ईश्वर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'ई' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 10. 'जलोर्मि' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "जल + ऊर्मि", correct: true },
            { text: "जलो + र्मि", correct: false },
            { text: "जल + उर्मि", correct: false },
            { text: "ज + लोर्मि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलोर्मि' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'जल + ऊर्मि' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'ऊ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 11. 'वीरोचित' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "वीर + उचित", correct: true },
            { text: "वीरो + चित", correct: false },
            { text: "वीर + ऊचित", correct: false },
            { text: "वी + रोचित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वीरोचित' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'वीर + उचित' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 12. 'राजेंद्र' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "राजा + इंद्र", correct: true },
            { text: "राजे + इंद्र", correct: false },
            { text: "राज + इंद्र", correct: false },
            { text: "रा + जेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राजेंद्र' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'राजा + इंद्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'इ' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 13. 'सर्वोच्च' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "सर्व + उच्च", correct: true },
            { text: "सर्वोच्च + च", correct: false },
            { text: "सर्वो + च्च", correct: false },
            { text: "सर + वोच्च", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्वोच्च' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'सर्व + उच्च' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 14. 'हितोपदेश' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "हित + उपदेश", correct: true },
            { text: "हितो + पदेश", correct: false },
            { text: "हित + ऊपदेश", correct: false },
            { text: "हि + तोपदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हितोपदेश' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'हित + उपदेश' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 15. 'यथेष्ट' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "यथा + इष्ट", correct: true },
            { text: "यथे + ष्ट", correct: false },
            { text: "यथ + इष्ट", correct: false },
            { text: "य + थेष्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथेष्ट' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'यथा + इष्ट' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'इ' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 16. 'मानवेंद्र' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "मानव + इंद्र", correct: true },
            { text: "मानवे + इंद्र", correct: false },
            { text: "मानव + ईंद्र", correct: false },
            { text: "मान + वेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मानवेंद्र' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'मानव + इंद्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'इ' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 17. 'चंद्रोदय' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "चंद्र + उदय", correct: true },
            { text: "चंद्रो + दय", correct: false },
            { text: "चंद्र + ऊदय", correct: false },
            { text: "चं + द्रोदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चंद्रोदय' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'चंद्र + उदय' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 18. 'प्रश्नोत्तर' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "प्रश्न + उत्तर", correct: true },
            { text: "प्रश्नो + त्तर", correct: false },
            { text: "प्रश्न + ऊत्तर", correct: false },
            { text: "प्र + श्नोत्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रश्नोत्तर' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'प्रश्न + उत्तर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं。"
    },
    {
        question: "प्रश्न 19. 'वार्षिकोत्सव' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "वार्षिक + उत्सव", correct: true },
            { text: "वार्षिको + त्सव", correct: false },
            { text: "वार्षिक + ऊत्सव", correct: false },
            { text: "वार्षि + कोत्सव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वार्षिकोत्सव' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'वार्षिक + उत्सव' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं。"
    },
    {
        question: "प्रश्न 20. 'ज्ञानोदय' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "ज्ञान + उदय", correct: true },
            { text: "ज्ञानो + दय", correct: false },
            { text: "ज्ञान + ऊदय", correct: false },
            { text: "ज्ञा + नोदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्ञानोदय' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'ज्ञान + उदय' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं。"
    },
    {
        question: "प्रश्न 21. 'भारतेंदु' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "भारत + इंदु", correct: true },
            { text: "भारते + इंदु", correct: false },
            { text: "भारत + ईंदु", correct: false },
            { text: "भार + तेंन्दु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भारतेंदु' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'भारत + इंदु' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'इ' मिलकर 'ए' बन जाते हैं。"
    },
    {
        question: "प्रश्न 22. 'धर्मेंद्र' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "धर्म + इंद्र", correct: true },
            { text: "धर्मे + इंद्र", correct: false },
            { text: "धर्म + ईंद्र", correct: false },
            { text: "ध + र्मेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धर्मेंद्र' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'धर्म + इंद्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'इ' मिलकर 'ए' बन जाते हैं。"
    },
    {
        question: "प्रश्न 23. 'नरेश' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "नर + ईश", correct: true },
            { text: "नरे + श", correct: false },
            { text: "नर + इश", correct: false },
            { text: "न + रेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नरेश' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'नर + ईश' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'ई' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 24. 'सुरेश' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "सुर + ईश", correct: true },
            { text: "सुरे + श", correct: false },
            { text: "सुर + इश", correct: false },
            { text: "सु + रेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुरेश' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'सुर + ईश' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'ई' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 25. 'उमेश' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "उमा + ईश", correct: true },
            { text: "उमे + श", correct: false },
            { text: "उम + ईश", correct: false },
            { text: "उमा + इश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उमेश' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'उमा + ईश' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'ई' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 26. 'राकेश' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "राका + ईश", correct: true },
            { text: "राके + श", correct: false },
            { text: "राक + ईश", correct: false },
            { text: "राका + इश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राकेश' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'राका + ईश' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'ई' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 27. 'लोकोपचार' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "लोक + उपचार", correct: true },
            { text: "लोको + पचार", correct: false },
            { text: "लोक + ऊपचार", correct: false },
            { text: "लो + कोपचार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोकोपचार' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'लोक + उपचार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 28. 'परोपकार' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "पर + उपकार", correct: true },
            { text: "परो + पकार", correct: false },
            { text: "पर + ऊपकार", correct: false },
            { text: "प + रोपकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परोपकार' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'पर + उपकार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 29. 'ग्रामोत्थान' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "ग्राम + उत्थान", correct: true },
            { text: "ग्रामो + त्थान", correct: false },
            { text: "ग्राम + ऊत्थान", correct: false },
            { text: "ग्रा + मोत्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्रामोत्थान' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'ग्राम + उत्थान' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 30. 'पुरुषोत्तम' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "पुरुष + उत्तम", correct: true },
            { text: "पुरुषो + त्तम", correct: false },
            { text: "पुरुष + ऊत्तम", correct: false },
            { text: "पुरु + षोत्तम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरुषोत्तम' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'पुरुष + उत्तम' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 31. 'महोदय' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "महा + उदय", correct: true },
            { text: "महो + दय", correct: false },
            { text: "महा + ऊदय", correct: false },
            { text: "मह + उदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महोदय' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'महा + उदय' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 32. 'गंगोदक' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "गंगा + उदक", correct: true },
            { text: "गंगो + दक", correct: false },
            { text: "गंगा + ऊदक", correct: false },
            { text: "गंग + ओदक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गंगोदक' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'गंगा + उदक' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 33. 'सप्तर्षि' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "सप्त + ऋषि", correct: true },
            { text: "सप्तर् + षि", correct: false },
            { text: "सप्त +र्षि", correct: false },
            { text: "सप + तर्षि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्तर्षि' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'सप्त + ऋषि' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'ऋ' मिलकर 'अर्' बन जाते हैं।"
    },
    {
        question: "प्रश्न 34. 'ब्रह्मर्षि' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "ब्रह्म + ऋषि", correct: true },
            { text: "ब्रह्मर् + षि", correct: false },
            { text: "ब्रह्म +र्षि", correct: false },
            { text: "ब्र + ह्मर्षि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ब्रह्मर्षि' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'ब्रह्म + ऋषि' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'ऋ' मिलकर 'अर्' बन जाते हैं。"
    },
    {
        question: "प्रश्न 35. 'राजर्षि' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "राजा + ऋषि", correct: true },
            { text: "राजर् + षि", correct: false },
            { text: "राज + ऋषि", correct: false },
            { text: "रा + जर्षि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राजर्षि' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'राजा + ऋषि' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'ऋ' मिलकर 'अर्' बन जाते हैं।"
    },
    {
        question: "प्रश्न 36. 'ज्ञानोपदेश' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "ज्ञान + उपदेश", correct: true },
            { text: "ज्ञानो + पदेश", correct: false },
            { text: "ज्ञान + ऊपदेश", correct: false },
            { text: "ज्ञा + नोपदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्ञानोपदेश' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'ज्ञान + उपदेश' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं。"
    },
    {
        question: "प्रश्न 37. 'यथेच्छा' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "यथा + इच्छा", correct: true },
            { text: "यथे + च्छा", correct: false },
            { text: "यथ + इच्छा", correct: false },
            { text: "य + थेच्छा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथेच्छा' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'यथा + इच्छा' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'इ' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 38. 'धीरेंद्र' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "धीर + इंद्र", correct: true },
            { text: "धीरे + इंद्र", correct: false },
            { text: "धीर + ईंद्र", correct: false },
            { text: "धी + रेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धीरेंद्र' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'धीर + इंद्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'इ' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 39. 'महेश' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "महा + ईश", correct: true },
            { text: "महे + श", correct: false },
            { text: "मह + ईश", correct: false },
            { text: "महा + इश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महेश' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'महा + ईश' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'ई' मिलकर 'ए' बन जाते हैं。"
    },
    {
        question: "प्रश्न 40. 'सर्वेश्वर' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "सर्व + ईश्वर", correct: true },
            { text: "सर्वे + श्वर", correct: false },
            { text: "सर्व + इश्वर", correct: false },
            { text: "स + र्वेश्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्वेश्वर' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'सर्व + ईश्वर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'ई' मिलकर 'ए' बन जाते हैं。"
    },
    {
        question: "प्रश्न 41. 'दिनेश' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "दिन + ईश", correct: true },
            { text: "दिने + श", correct: false },
            { text: "दिन + इश", correct: false },
            { text: "दि +नेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिनेश' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'दिन + ईश' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'ई' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 42. 'सर्वोदय' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "सर्व + उदय", correct: true },
            { text: "सर्वो + दय", correct: false },
            { text: "सर्व + ऊदय", correct: false },
            { text: "स + र्वोदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्वोदय' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'सर्व + उदय' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 43. 'जन्मोत्सव' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "जन्म + उत्सव", correct: true },
            { text: "जन्मो + त्सव", correct: false },
            { text: "जन्म + ऊत्सव", correct: false },
            { text: "ज + न्मोत्सव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जन्मोत्सव' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'जन्म + उत्सव' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं।"
    },
    {
        question: "प्रश्न 44. 'वसंतोत्सव' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "वसंत + उत्सव", correct: true },
            { text: "वसंतो + त्सव", correct: false },
            { text: "वसंत + ऊत्सव", correct: false },
            { text: "वसं + तोत्सव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वसंतोत्सव' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'वसंत + उत्सव' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' मिलकर 'ओ' बन जाते हैं。"
    },
    {
        question: "प्रश्न 45. 'देवेंद्र' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "देव + इंद्र", correct: true },
            { text: "देवे + इंद्र", correct: false },
            { text: "देव + ईंद्र", correct: false },
            { text: "दे + वेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देवेंद्र' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'देव + इंद्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'इ' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 46. ' सुरेंद्र' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "सुर + इंद्र", correct: true },
            { text: "सुरे + इंद्र", correct: false },
            { text: "सुर + ईंद्र", correct: false },
            { text: "सु + रेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ' सुरेंद्र' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'सुर + इंद्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'इ' मिलकर 'ए' बन जाते हैं。"
    },
    {
        question: "प्रश्न 47. 'गजेंद्र' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "गज + इंद्र", correct: true },
            { text: "गजे + इंद्र", correct: false },
            { text: "गज + ईंद्र", correct: false },
            { text: "ग + जेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गजेंद्र' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'गज + इंद्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'इ' मिलकर 'ए' बन जाते हैं。"
    },
    {
        question: "प्रश्न 48. ' सत्येंद्र' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "सत्य + इंद्र", correct: true },
            { text: "सत्ये + इंद्र", correct: false },
            { text: "सत्य + ईंद्र", correct: false },
            { text: "स + त्येंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ' सत्येंद्र' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'सत्य + इंद्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'इ' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 49. 'शुभेक्षा' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "शुभ + इच्छा", correct: true },
            { text: "शुभे + क्षा", correct: false },
            { text: "शुभ + ईच्छा", correct: false },
            { text: "शु + भेच्छा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शुभेक्षा' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'शुभ + इच्छा' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'इ' मिलकर 'ए' बन जाते हैं।"
    },
    {
        question: "प्रश्न 50. 'स्वेच्छा' का संधि-विच्छेद क्या है?",
        answers: shuffle([
            { text: "स्व + इच्छा", correct: true },
            { text: "स्वे + च्छा", correct: false },
            { text: "स्व + ईच्छा", correct: false },
            { text: "स् + वेच्छा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वेच्छा' में गुण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विच्छेद 'स्व + इच्छा' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'इ' मिलकर 'ए' बन जाते हैं।"
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