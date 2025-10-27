const questions = [
    {
        topHeading: "ऊर्जा पर आधारित 50 बहुविकल्पीय प्रश्न,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. कार्य करने की क्षमता को क्या कहते हैं?",
        answers: shuffle([
            { text: "शक्ति", correct: false },
            { text: "ऊर्जा", correct: true },
            { text: "बल", correct: false },
            { text: "संवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु या कर्ता के कार्य करने की कुल क्षमता को उसकी ऊर्जा कहते हैं।"
    },
    {
        question: "प्रश्न 2. ऊर्जा का S.I. मात्रक क्या है?",
        answers: shuffle([
            { text: "वाट", correct: false },
            { text: "न्यूटन", correct: false },
            { text: "पास्कल", correct: false },
            { text: "जूल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतर्राष्ट्रीय मात्रक प्रणाली (SI) में ऊर्जा और कार्य दोनों का मात्रक जूल है।"
    },
    {
        question: "प्रश्न 3. ऊर्जा किस प्रकार की राशि है?",
        answers: shuffle([
            { text: "सदिश राशि", correct: false },
            { text: "अदिश राशि", correct: true },
            { text: "प्रदेश राशि", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा एक अदिश राशि है क्योंकि इसमें केवल परिमाण होता है, कोई दिशा नहीं होती है।"
    },
    {
        question: "प्रश्न 4. ऊर्जा का सीजीएस (CGS) प्रणाली में मात्रक क्या है?",
        answers: shuffle([
            { text: "डाइन", correct: false },
            { text: "अर्ग", correct: true },
            { text: "जूल", correct: false },
            { text: "न्यूटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीजीएस (सेंटीमीटर-ग्राम-सेकंड) प्रणाली में ऊर्जा का मात्रक अर्ग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 जूल = 10⁷ अर्ग।"
    },
    {
        question: "प्रश्न 5. व्यावसायिक रूप से ऊर्जा की खपत को मापने के लिए किस इकाई का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "जूल", correct: false },
            { text: "वाट", correct: false },
            { text: "किलोवाट-घंटा", correct: true },
            { text: "अर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिजली की खपत जैसी व्यावसायिक गतिविधियों में ऊर्जा को किलोवाट-घंटा (kWh) में मापा जाता है, जिसे 'यूनिट' भी कहते हैं।"
    },
    {
        question: "प्रश्न 6. किसी वस्तु में उसकी गति के कारण निहित ऊर्जा को क्या कहते हैं?",
        answers: shuffle([
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "गतिज ऊर्जा", correct: true },
            { text: "रासायनिक ऊर्जा", correct: false },
            { text: "नाभिकीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु में उसकी गति के कारण जो कार्य करने की क्षमता होती है, उसे गतिज ऊर्जा कहते हैं।"
    },
    {
        question: "प्रश्न 7. किसी वस्तु में उसकी स्थिति या आकार में परिवर्तन के कारण निहित ऊर्जा को क्या कहते हैं?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: false },
            { text: "स्थितिज ऊर्जा", correct: true },
            { text: "ध्वनि ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु की विशेष अवस्था या स्थिति के कारण उसमें संगृहीत ऊर्जा को स्थितिज ऊर्जा कहते हैं।"
    },
    {
        question: "प्रश्न 8. ऊर्जा संरक्षण का नियम क्या कहता है?",
        answers: shuffle([
            { text: "ऊर्जा को बनाया जा सकता है।", correct: false },
            { text: "ऊर्जा को नष्ट किया जा सकता है।", correct: false },
            { text: "ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है।", correct: true },
            { text: "ऊर्जा हमेशा घटती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस नियम के अनुसार, ऊर्जा केवल एक रूप से दूसरे रूप में परिवर्तित हो सकती है, ब्रह्मांड की कुल ऊर्जा स्थिर रहती है।"
    },
    {
        question: "प्रश्न 9. बहते पानी में किस प्रकार की ऊर्जा होती है?",
        answers: shuffle([
            { text: "केवल स्थितिज ऊर्जा", correct: false },
            { text: "केवल गतिज ऊर्जा", correct: true },
            { text: "विद्युत ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी के बहने (गति) के कारण उसमें गतिज ऊर्जा होती है, जिसका उपयोग टरबाइन घुमाकर बिजली बनाने में किया जाता है।"
    },
    {
        question: "प्रश्न 10. बांध में जमा पानी में कौन सी ऊर्जा होती है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "स्थितिज ऊर्जा", correct: true },
            { text: "ध्वनि ऊर्जा", correct: false },
            { text: "प्रकाश ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बांध में ऊँचाई पर रोके गए पानी में उसकी स्थिति के कारण गुरुत्वीय स्थितिज ऊर्जा संचित रहती है।"
    },
    {
        question: "प्रश्न 11. किसी वस्तु का वेग दोगुना करने पर उसकी गतिज ऊर्जा पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "आधी हो जाएगी", correct: false },
            { text: "दोगुनी हो जाएगी", correct: false },
            { text: "चार गुनी हो जाएगी", correct: true },
            { text: "अपरिवर्तित रहेगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा वेग के वर्ग के समानुपाती होती है (KE∝v²)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए वेग दोगुना करने पर गतिज ऊर्जा 2²=4 गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 12. तनी हुई स्प्रिंग या खींचे हुए धनुष में किस प्रकार की ऊर्जा होती है?",
        answers: shuffle([
            { text: "गुरुत्वीय स्थितिज ऊर्जा", correct: false },
            { text: "गतिज ऊर्जा", correct: false },
            { text: "प्रत्यास्थ स्थितिज ऊर्जा", correct: true },
            { text: "ऊष्मीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी वस्तु के आकार (विकृति) में परिवर्तन होता है, तो उसमें प्रत्यास्थ स्थितिज ऊर्जा संचित हो जाती है।"
    },
    {
        question: "प्रश्न 13. गतिज ऊर्जा और स्थितिज ऊर्जा के योग को क्या कहते हैं?",
        answers: shuffle([
            { text: "रासायनिक ऊर्जा", correct: false },
            { text: "नाभिकीय ऊर्जा", correct: false },
            { text: "यांत्रिक ऊर्जा", correct: true },
            { text: "विद्युत ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी निकाय की यांत्रिक ऊर्जा उसकी गतिज ऊर्जा तथा स्थितिज ऊर्जा का कुल योग होती है।"
    },
    {
        question: "प्रश्न 14. सूर्य से पृथ्वी तक ऊर्जा किस रूप में पहुँचती है?",
        answers: shuffle([
            { text: "ध्वनि तरंगों के रूप में", correct: false },
            { text: "ऊष्मा और प्रकाश (विद्युत चुम्बकीय विकिरण) के रूप में", correct: true },
            { text: "रासायनिक ऊर्जा के रूप में", correct: false },
            { text: "गतिज ऊर्जा के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य से ऊर्जा विकिरण द्वारा प्रकाश और ऊष्मा के रूप में हम तक पहुँचती है।"
    },
    {
        question: "प्रश्न 15. एक किलोवाट-घंटा (kWh) कितने जूल के बराबर होता है?",
        answers: shuffle([
            { text: "3600 जूल", correct: false },
            { text: "3.6 × 10⁵ जूल", correct: false },
            { text: "3.6 × 10⁶ जूल", correct: true },
            { text: "36 × 10⁶ जूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1 kWh = 1000 वाट × 3600 सेकंड = 36,00,000 जूल = 3.6 × 10⁶ जूल।"
    },
    {
        question: "प्रश्न 16. भोजन में संचित ऊर्जा किस प्रकार की ऊर्जा है?",
        answers: shuffle([
            { text: "यांत्रिक ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: true },
            { text: "नाभिकीय ऊर्जा", correct: false },
            { text: "प्रकाश ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भोजन, ईंधन और बैटरियों में ऊर्जा रासायनिक ऊर्जा के रूप में संग्रहीत होती है जो रासायनिक बंधनों में निहित होती है।"
    },
    {
        question: "प्रश्न 17. एक उड़ता हुआ हवाई जहाज में कौन सी ऊर्जा होती है?",
        answers: shuffle([
            { text: "केवल गतिज ऊर्जा", correct: false },
            { text: "केवल स्थितिज ऊर्जा", correct: false },
            { text: "स्थितिज और गतिज ऊर्जा दोनों", correct: true },
            { text: "केवल ऊष्मीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हवाई जहाज में उसकी गति के कारण गतिज ऊर्जा और पृथ्वी से ऊँचाई के कारण स्थितिज ऊर्जा, दोनों होती हैं।"
    },
    {
        question: "प्रश्न 18. निम्नलिखित में से कौन ऊर्जा का नवीकरणीय स्रोत है?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "पेट्रोलियम", correct: false },
            { text: "सौर ऊर्जा", correct: true },
            { text: "प्राकृतिक गैस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवीकरणीय ऊर्जा स्रोत वे हैं जो प्राकृतिक रूप से फिर से भर जाते हैं, जैसे सूर्य का प्रकाश, पवन, जल आदि।<br><br><i class='fa-solid fa-angles-right icon'></i> कोयला, पेट्रोल अनवीकरणीय हैं।"
    },
    {
        question: "प्रश्न 19. डायनेमो (विद्युत जनरेटर) किस ऊर्जा को किस ऊर्जा में परिवर्तित करता है?",
        answers: shuffle([
            { text: "विद्युत ऊर्जा को यांत्रिक ऊर्जा में", correct: false },
            { text: "यांत्रिक ऊर्जा को विद्युत ऊर्जा में", correct: true },
            { text: "रासायनिक ऊर्जा को विद्युत ऊर्जा में", correct: false },
            { text: "सौर ऊर्जा को विद्युत ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायनेमो घूर्णन गति (यांत्रिक ऊर्जा) का उपयोग करके विद्युत धारा (विद्युत ऊर्जा) उत्पन्न करता है।"
    },
    {
        question: "प्रश्न 20. विद्युत मोटर किस ऊर्जा को किस ऊर्जा में परिवर्तित करती है?",
        answers: shuffle([
            { text: "यांत्रिक ऊर्जा को विद्युत ऊर्जा में", correct: false },
            { text: "विद्युत ऊर्जा को यांत्रिक ऊर्जा में", correct: true },
            { text: "ऊष्मीय ऊर्जा को विद्युत ऊर्जा में", correct: false },
            { text: "विद्युत ऊर्जा को प्रकाश ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत मोटर विद्युत ऊर्जा का उपयोग करके पंखे या मशीन के पुर्जों को घुमाती है, अर्थात इसे यांत्रिक ऊर्जा में बदलती है।"
    },
    {
        question: "प्रश्न 21. परमाणु बम किस सिद्धांत पर आधारित है?",
        answers: shuffle([
            { text: "नाभिकीय संलयन", correct: false },
            { text: "नाभिकीय विखंडन", correct: true },
            { text: "रासायनिक अभिक्रिया", correct: false },
            { text: "ऊर्जा संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमाणु बम में, एक भारी नाभिक (जैसे यूरेनियम) को तोड़कर (विखंडन) अपार ऊर्जा मुक्त की जाती है।"
    },
    {
        question: "प्रश्न 22. सूर्य और तारों में ऊर्जा का स्रोत क्या है?",
        answers: shuffle([
            { text: "नाभिकीय विखंडन", correct: false },
            { text: "नाभिकीय संलयन", correct: true },
            { text: "दहन", correct: false },
            { text: "गुरुत्वाकर्षण संकुचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य में, अत्यधिक उच्च ताप और दाब पर हाइड्रोजन के हल्के नाभिक मिलकर (संलयन) हीलियम का भारी नाभिक बनाते हैं, जिससे विशाल ऊर्जा उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 23. द्रव्यमान-ऊर्जा समतुल्यता का संबंध किसने स्थापित किया?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "अल्बर्ट आइंस्टीन", correct: true },
            { text: "गैलीलियो गैलिली", correct: false },
            { text: "जेम्स वाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्बर्ट आइंस्टीन ने अपने प्रसिद्ध समीकरण E=mc² द्वारा बताया कि द्रव्यमान को ऊर्जा में और ऊर्जा को द्रव्यमान में बदला जा सकता है।"
    },
    {
        question: "प्रश्न 24. जब कोई वस्तु मुक्त रूप से गिरती है, तो उसकी कुल यांत्रिक ऊर्जा का क्या होता है?",
        answers: shuffle([
            { text: "बढ़ती है", correct: false },
            { text: "घटती है", correct: false },
            { text: "स्थिर रहती है", correct: true },
            { text: "पहले बढ़ती है फिर घटती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त पतन में, वस्तु की स्थितिज ऊर्जा गतिज ऊर्जा में परिवर्तित होती जाती है, लेकिन कुल यांत्रिक ऊर्जा (दोनों का योग) संरक्षित या स्थिर रहती है (यदि वायु प्रतिरोध नगण्य हो)।"
    },
    {
        question: "प्रश्न 25. लाउडस्पीकर में ऊर्जा का रूपांतरण कैसे होता है?",
        answers: shuffle([
            { text: "ध्वनि ऊर्जा से विद्युत ऊर्जा में", correct: false },
            { text: "विद्युत ऊर्जा से ध्वनि ऊर्जा में", correct: true },
            { text: "यांत्रिक ऊर्जा से ध्वनि ऊर्जा में", correct: false },
            { text: "विद्युत ऊर्जा से प्रकाश ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाउडस्पीकर विद्युत संकेतों को ग्रहण कर उन्हें ध्वनि तरंगों में परिवर्तित करता है।"
    },
    {
        question: "प्रश्न 26. एक चलती हुई कार का इंजन किस ऊर्जा का उपयोग करता है?",
        answers: shuffle([
            { text: "विद्युत ऊर्जा", correct: false },
            { text: "पवन ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: true },
            { text: "नाभिकीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार का इंजन पेट्रोल या डीजल (ईंधन) में संग्रहीत रासायनिक ऊर्जा को पहले ऊष्मीय और फिर यांत्रिक ऊर्जा में बदलता है।"
    },
    {
        question: "प्रश्न 27. प्रकाश संश्लेषण की प्रक्रिया में किस ऊर्जा का रूपांतरण होता है?",
        answers: shuffle([
            { text: "रासायनिक ऊर्जा का प्रकाश ऊर्जा में", correct: false },
            { text: "प्रकाश ऊर्जा का रासायनिक ऊर्जा में", correct: true },
            { text: "ऊष्मीय ऊर्जा का रासायनिक ऊर्जा में", correct: false },
            { text: "यांत्रिक ऊर्जा का प्रकाश ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरे पौधे सूर्य की प्रकाश ऊर्जा का उपयोग करके कार्बन डाइऑक्साइड और पानी को ग्लूकोज (भोजन) में परिवर्तित करते हैं, जिसमें ऊर्जा रासायनिक ऊर्जा के रूप में संचित होती है।"
    },
    {
        question: "प्रश्न 28. मोमबत्ती के जलने पर ऊर्जा का रूपांतरण कैसे होता है?",
        answers: shuffle([
            { text: "प्रकाश ऊर्जा का ऊष्मीय ऊर्जा में", correct: false },
            { text: "रासायनिक ऊर्जा का प्रकाश और ऊष्मीय ऊर्जा में", correct: true },
            { text: "विद्युत ऊर्जा का प्रकाश ऊर्जा में", correct: false },
            { text: "यांत्रिक ऊर्जा का ऊष्मीय ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोमबत्ती में संचित रासायनिक ऊर्जा दहन के पश्चात् प्रकाश और ऊष्मा ऊर्जा में परिवर्तित हो जाती है।"
    },
    {
        question: "प्रश्न 29. कार्य-ऊर्जा प्रमेय के अनुसार, किसी वस्तु पर किया गया कुल कार्य उसकी किस ऊर्जा में परिवर्तन के बराबर होता है?",
        answers: shuffle([
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "गतिज ऊर्जा", correct: true },
            { text: "कुल ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रमेय बताता है कि किसी वस्तु पर सभी बलों द्वारा किया गया शुद्ध कार्य उसकी गतिज ऊर्जा में हुए परिवर्तन के बराबर होता है।"
    },
    {
        question: "प्रश्न 30. किसी वस्तु के संवेग और गतिज ऊर्जा में क्या संबंध है?",
        answers: shuffle([
            { text: "दोनों एक दूसरे से स्वतंत्र हैं।", correct: false },
            { text: "संवेग दोगुना करने पर गतिज ऊर्जा चार गुनी हो जाती है।", correct: true },
            { text: "दोनों हमेशा बराबर होते हैं।", correct: false },
            { text: "संवेग शून्य होने पर भी गतिज ऊर्जा हो सकती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा (K) और संवेग (p) के बीच संबंध K=p²/2m है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि द्रव्यमान स्थिर है, तो गतिज ऊर्जा संवेग के वर्ग के समानुपाती होती है।"
    },
    {
        question: "प्रश्न 31. निम्नलिखित में से कौन ऊर्जा का मात्रक नहीं है?",
        answers: shuffle([
            { text: "जूल", correct: false },
            { text: "किलोवाट", correct: true },
            { text: "कैलोरी", correct: false },
            { text: "इलेक्ट्रॉन वोल्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किलोवाट शक्ति (कार्य करने की दर) का मात्रक है, न कि ऊर्जा का।<br><br><i class='fa-solid fa-angles-right icon'></i> जूल, कैलोरी और इलेक्ट्रॉन वोल्ट ऊर्जा के मात्रक हैं।"
    },
    {
        question: "प्रश्न 32. जब एक गेंद को ऊपर की ओर फेंका जाता है, तो उच्चतम बिंदु पर उसकी ऊर्जा का क्या होता है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा अधिकतम होती है।", correct: false },
            { text: "स्थितिज ऊर्जा न्यूनतम होती है।", correct: false },
            { text: "गतिज ऊर्जा शून्य हो जाती है और स्थितिज ऊर्जा अधिकतम होती है।", correct: true },
            { text: "दोनों ऊर्जाएं शून्य हो जाती हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम बिंदु पर गेंद क्षण भर के लिए रुक जाती है (गतिज ऊर्जा शून्य), और सारी गतिज ऊर्जा गुरुत्वीय स्थितिज ऊर्जा में बदल जाती है (स्थितिज ऊर्जा अधिकतम)।"
    },
    {
        question: "प्रश्न 33. भूतापीय ऊर्जा (Geothermal Energy) का स्रोत क्या है?",
        answers: shuffle([
            { text: "सूर्य", correct: false },
            { text: "बहता पानी", correct: false },
            { text: "पृथ्वी के भीतर की गर्मी", correct: true },
            { text: "जीवाश्म ईंधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूतापीय ऊर्जा पृथ्वी के आंतरिक भाग में मौजूद पिघली हुई चट्टानों (मैग्मा) की ऊष्मा से प्राप्त होती है।"
    },
    {
        question: "प्रश्न 34. सौर सेल (Solar Cell) किस ऊर्जा को किस ऊर्जा में परिवर्तित करते हैं?",
        answers: shuffle([
            { text: "प्रकाश ऊर्जा को विद्युत ऊर्जा में", correct: true },
            { text: "प्रकाश ऊर्जा को ऊष्मीय ऊर्जा में", correct: false },
            { text: "विद्युत ऊर्जा को प्रकाश ऊर्जा में", correct: false },
            { text: "रासायनिक ऊर्जा को प्रकाश ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर सेल फोटोवोल्टाइक प्रभाव का उपयोग करके सूर्य की प्रकाश ऊर्जा को सीधे विद्युत ऊर्जा में बदलते हैं।"
    },
    {
        question: "प्रश्न 35. पवन चक्की में किस ऊर्जा का उपयोग बिजली बनाने के लिए किया जाता है?",
        answers: shuffle([
            { text: "पवन की स्थितिज ऊर्जा", correct: false },
            { text: "पवन की गतिज ऊर्जा", correct: true },
            { text: "पवन की रासायनिक ऊर्जा", correct: false },
            { text: "सौर ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पवन चक्की हवा की गतिज ऊर्जा का उपयोग करके अपने ब्लेड घुमाती है, जो फिर एक जनरेटर को चलाकर बिजली पैदा करती है।"
    },
    {
        question: "प्रश्न 36. किसी वस्तु का द्रव्यमान दोगुना करने पर उसकी गतिज ऊर्जा (समान वेग पर) पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "आधी हो जाएगी", correct: false },
            { text: "दोगुनी हो जाएगी", correct: true },
            { text: "चार गुनी हो जाएगी", correct: false },
            { text: "अपरिवर्तित रहेगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा द्रव्यमान के सीधे समानुपाती होती है (KE∝m)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, द्रव्यमान दोगुना करने पर गतिज ऊर्जा भी दोगुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 37. एक कैलोरी लगभग कितने जूल के बराबर होती है?",
        answers: shuffle([
            { text: "2.4 जूल", correct: false },
            { text: "4.2 जूल", correct: true },
            { text: "1.0 जूल", correct: false },
            { text: "9.8 जूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैलोरी ऊष्मा या ऊर्जा की एक इकाई है, और 1 कैलोरी लगभग 4.184 जूल के बराबर होती है।"
    },
    {
        question: "प्रश्न 38. सितार बजाते समय किस ऊर्जा का रूपांतरण होता है?",
        answers: shuffle([
            { text: "ध्वनि ऊर्जा का यांत्रिक ऊर्जा में", correct: false },
            { text: "यांत्रिक ऊर्जा का ध्वनि ऊर्जा में", correct: true },
            { text: "विद्युत ऊर्जा का ध्वनि ऊर्जा में", correct: false },
            { text: "रासायनिक ऊर्जा का ध्वनि ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वादक तारों को खींचकर (यांत्रिक ऊर्जा) कंपन पैदा करता है, जो ध्वनि ऊर्जा में परिवर्तित हो जाती है।"
    },
    {
        question: "प्रश्न 39. निम्नलिखित में से किसे 'ऊर्जा का पिरामिड' कहा जाता है?",
        answers: shuffle([
            { text: "किसी भवन की ऊर्जा खपत का चार्ट", correct: false },
            { text: "एक पारिस्थितिक तंत्र में ऊर्जा प्रवाह का निरूपण", correct: true },
            { text: "विभिन्न ऊर्जा स्रोतों का वर्गीकरण", correct: false },
            { text: "ऊर्जा के रूपांतरण का चक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारिस्थितिकी में, ऊर्जा पिरामिड यह दर्शाता है कि कैसे ऊर्जा एक पोषण स्तर से अगले स्तर पर प्रवाहित होती है, और प्रत्येक स्तर पर घटती जाती है।"
    },
    {
        question: "प्रश्न 40. किसी वस्तु को पृथ्वी की सतह से ऊपर उठाने पर उसकी गुरुत्वीय स्थितिज ऊर्जा...",
        answers: shuffle([
            { text: "घटती है।", correct: false },
            { text: "बढ़ती है।", correct: true },
            { text: "अपरिवर्तित रहती है।", correct: false },
            { text: "शून्य हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वीय स्थितिज ऊर्जा ऊँचाई के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे-जैसे वस्तु को ऊपर उठाया जाता है, उसकी स्थितिज ऊर्जा बढ़ती जाती है।"
    },
    {
        question: "प्रश्न 41. शुष्क सेल (बैटरी) में कौन सी ऊर्जा संग्रहीत होती है?",
        answers: shuffle([
            { text: "विद्युत ऊर्जा", correct: false },
            { text: "यांत्रिक ऊर्जा", correct: false },
            { text: "नाभिकीय ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सूखी सेल बैटरी के अंदर के रसायनों में रासायनिक ऊर्जा संग्रहीत होती है, जो उपयोग के दौरान विद्युत ऊर्जा में परिवर्तित हो जाती है।"
    },
    {
        question: "प्रश्न 42. एक इलेक्ट्रॉन वोल्ट (eV) किसकी इकाई है?",
        answers: shuffle([
            { text: "विभव", correct: false },
            { text: "धारा", correct: false },
            { text: "शक्ति", correct: false },
            { text: "ऊर्जा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इलेक्ट्रॉन वोल्ट ऊर्जा की एक बहुत छोटी इकाई है, जिसका उपयोग विशेष रूप से परमाणु और कण भौतिकी में किया जाता है।"
    },
    {
        question: "प्रश्न 43. अनवीकरणीय ऊर्जा स्रोत का उदाहरण है:",
        answers: shuffle([
            { text: "बायोगैस", correct: false },
            { text: "सौर ऊर्जा", correct: false },
            { text: "पवन ऊर्जा", correct: false },
            { text: "जीवाश्म ईंधन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीवाश्म ईंधन (कोयला, पेट्रोलियम) लाखों वर्षों में बनते हैं और सीमित मात्रा में हैं, इसलिए वे अनवीकरणीय हैं।"
    },
    {
        question: "प्रश्न 44. माइक्रोफोन में किस ऊर्जा का रूपांतरण होता है?",
        answers: shuffle([
            { text: "विद्युत ऊर्जा का ध्वनि ऊर्जा में", correct: false },
            { text: "ध्वनि ऊर्जा का विद्युत ऊर्जा में", correct: true },
            { text: "यांत्रिक ऊर्जा का विद्युत ऊर्जा में", correct: false },
            { text: "ध्वनि ऊर्जा का यांत्रिक ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइक्रोफोन ध्वनि तरंगों (ध्वनि ऊर्जा) को विद्युत संकेतों (विद्युत ऊर्जा) में परिवर्तित करता है।"
    },
    {
        question: "प्रश्न 45. जब दूध से क्रीम निकाली जाती है तो दूध का घनत्व...",
        answers: shuffle([
            { text: "बढ़ता है।", correct: true },
            { text: "घटता है।", correct: false },
            { text: "अपरिवर्तित रहता है।", correct: false },
            { text: "शून्य हो जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रीम (वसा) का घनत्व दूध से कम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब कम घनत्व वाली क्रीम हटा दी जाती है, तो शेष दूध का घनत्व बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपकेन्द्री बल के सिद्धांत पर आधारित है।"
    },
    {
        question: "प्रश्न 46. हाइड्रोजन बम किस सिद्धांत पर आधारित है?",
        answers: shuffle([
            { text: "नियंत्रित नाभिकीय विखंडन", correct: false },
            { text: "अनियंत्रित नाभिकीय विखंडन", correct: false },
            { text: "नियंत्रित नाभिकीय संलयन", correct: false },
            { text: "अनियंत्रित नाभिकीय संलयन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइड्रोजन बम में, हाइड्रोजन के समस्थानिकों का अनियंत्रित नाभिकीय संलयन कराया जाता है, जिससे परमाणु बम से भी कई गुना अधिक ऊर्जा निकलती है।"
    },
    {
        question: "प्रश्न 47. किसी आदर्श या घर्षण रहित प्रणाली में यांत्रिक ऊर्जा...",
        answers: shuffle([
            { text: "हमेशा बढ़ती है।", correct: false },
            { text: "हमेशा घटती है।", correct: false },
            { text: "संरक्षित रहती है।", correct: true },
            { text: "शून्य होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि केवल संरक्षी बल (जैसे गुरुत्वाकर्षण) कार्य कर रहे हैं और कोई घर्षण नहीं है, तो कुल यांत्रिक ऊर्जा संरक्षित रहती है।"
    },
    {
        question: "प्रश्न 48. एक विद्युत बल्ब में ऊर्जा का रूपांतरण कैसे होता है?",
        answers: shuffle([
            { text: "विद्युत ऊर्जा का केवल प्रकाश ऊर्जा में", correct: false },
            { text: "विद्युत ऊर्जा का प्रकाश और ऊष्मीय ऊर्जा में", correct: true },
            { text: "प्रकाश ऊर्जा का विद्युत ऊर्जा में", correct: false },
            { text: "विद्युत ऊर्जा का रासायनिक ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बल्ब विद्युत ऊर्जा को मुख्य रूप से प्रकाश ऊर्जा में बदलता है, लेकिन इसका एक महत्वपूर्ण भाग ऊष्मीय ऊर्जा के रूप में भी व्यय होता है।"
    },
    {
        question: "प्रश्न 49. किसी गतिशील वस्तु की गतिज ऊर्जा किस पर निर्भर नहीं करती है?",
        answers: shuffle([
            { text: "वस्तु के द्रव्यमान पर", correct: false },
            { text: "वस्तु के वेग पर", correct: false },
            { text: "वस्तु के संवेग पर", correct: false },
            { text: "वस्तु की गति की दिशा पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा एक अदिश राशि है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह द्रव्यमान और वेग के परिमाण पर निर्भर करती है, लेकिन वेग की दिशा पर नहीं।"
    },
    {
        question: "प्रश्न 50. स्थितिज ऊर्जा का प्रकार नहीं है:",
        answers: shuffle([
            { text: "गुरुत्वीय स्थितिज ऊर्जा", correct: false },
            { text: "प्रत्यास्थ स्थितिज ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: true },
            { text: "स्थिरवैद्युत स्थितिज ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्मीय ऊर्जा अणुओं की यादृच्छिक गति (गतिज ऊर्जा) से संबंधित है, न कि उनकी स्थिति से।"
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