const questions = [
    {
        topHeading: "चालक अर्धचालक और कुचालक पर आधारित 50 MCQs part_1(quiz_no.)"
    },
    {
        question: "प्रश्न 1. ऊर्जा बैंड सिद्धांत के अनुसार, चालक, अर्धचालक और कुचालक में अंतर का मुख्य आधार क्या है?",
        answers: shuffle([
            { text: "संयोजकता बैंड और चालन बैंड के बीच वर्जित ऊर्जा अंतराल", correct: true },
            { text: "पदार्थ में परमाणुओं की संख्या", correct: false },
            { text: "पदार्थ का रंग", correct: false },
            { text: "पदार्थ का चुंबकीय गुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी पदार्थ का विद्युत चालन इस बात पर निर्भर करता है कि उसके <b>संयोजकता बैंड</b> और <b>चालन बैंड</b> के बीच <b>वर्जित ऊर्जा अंतराल (forbidden energy gap)</b> कितना है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी अंतराल के आधार पर उन्हें चालक, अर्धचालक और कुचालक में वर्गीकृत किया जाता है।"
    },
    {
        question: "प्रश्न 2. चालकों (धातुओं) में संयोजकता बैंड और चालन बैंड की स्थिति कैसी होती है?",
        answers: shuffle([
            { text: "उनके बीच बहुत बड़ा ऊर्जा अंतराल होता है", correct: false },
            { text: "वे एक-दूसरे पर अतिव्यापित (overlapped) होते हैं", correct: true },
            { text: "उनके बीच बहुत छोटा ऊर्जा अंतराल होता है", correct: false },
            { text: "चालन बैंड पूरी तरह खाली होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकों में संयोजकता बैंड और चालन बैंड <b>एक-दूसरे पर अतिव्यापित</b> होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे इलेक्ट्रॉनों को चालन बैंड में जाने के लिए कोई अतिरिक्त ऊर्जा नहीं चाहिए होती है और वे आसानी से विद्युत का चालन करते हैं।"
    },
    {
        question: "प्रश्न 3. कुचालकों (विद्युतरोधियों) में वर्जित ऊर्जा अंतराल का मान लगभग कितना होता है?",
        answers: shuffle([
            { text: "1 इलेक्ट्रॉन-वोल्ट से कम", correct: false },
            { text: "1 इलेक्ट्रॉन-वोल्ट के बराबर", correct: false },
            { text: "3 इलेक्ट्रॉन-वोल्ट से अधिक", correct: true },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुचालकों में संयोजकता बैंड और चालन बैंड के बीच का ऊर्जा अंतराल <b>बहुत अधिक (आमतौर पर 3 eV से ज्यादा)</b> होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे सामान्य परिस्थितियों में इलेक्ट्रॉन पार नहीं कर पाते।"
    },
    {
        question: "प्रश्न 4. अर्धचालकों में वर्जित ऊर्जा अंतराल का मान लगभग कितना होता है?",
        answers: shuffle([
            { text: "5 इलेक्ट्रॉन-वोल्ट से अधिक", correct: false },
            { text: "शून्य", correct: false },
            { text: "बहुत अधिक", correct: false },
            { text: "1 इलेक्ट्रॉन-वोल्ट के आस-पास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धचालकों में यह ऊर्जा अंतराल <b>बहुत कम (जैसे सिलिकॉन के लिए 1.1 eV)</b> होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे कुछ इलेक्ट्रॉन ऊष्मीय ऊर्जा पाकर इसे पार कर सकते हैं।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से कौन सा एक उत्तम चालक का उदाहरण है?",
        answers: shuffle([
            { text: "कांच", correct: false },
            { text: "चांदी", correct: true },
            { text: "सिलिकॉन", correct: false },
            { text: "रबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चांदी</b> सभी पदार्थों में सबसे अच्छी विद्युत चालक है क्योंकि इसमें बहुत बड़ी संख्या में मुक्त इलेक्ट्रॉन होते हैं और इसकी प्रतिरोधकता न्यूनतम होती है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से कौन सा एक कुचालक का उदाहरण है?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "एल्यूमीनियम", correct: false },
            { text: "जर्मेनियम", correct: false },
            { text: "अभ्रक (माइका)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अभ्रक</b> एक कुचालक पदार्थ है जिसका ऊर्जा अंतराल बहुत अधिक होता है और यह अपने में से विद्युत धारा को प्रवाहित नहीं होने देता।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से कौन सा एक अर्धचालक का उदाहरण है?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "प्लास्टिक", correct: false },
            { text: "सिलिकॉन", correct: true },
            { text: "लकड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिलिकॉन</b> और जर्मेनियम सबसे अधिक उपयोग किए जाने वाले अर्धचालक पदार्थ हैं, जिनका उपयोग इलेक्ट्रॉनिक उपकरण बनाने में किया जाता है।"
    },
    {
        question: "प्रश्न 8. चालकों का तापमान बढ़ाने पर उनकी चालकता पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "बढ़ जाती है", correct: false },
            { text: "घट जाती है", correct: true },
            { text: "अपरिवर्तित रहती है", correct: false },
            { text: "पहले बढ़ती है फिर घटती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकों का तापमान बढ़ाने पर परमाणुओं का कंपन बढ़ जाता है, जिससे इलेक्ट्रॉनों की टक्करें बढ़ जाती हैं और उनकी गति में बाधा उत्पन्न होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> फलस्वरूप चालकता <b>घटती है</b> और प्रतिरोध बढ़ता है।"
    },
    {
        question: "प्रश्न 9. अर्धचालकों का तापमान बढ़ाने पर उनकी चालकता पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "बढ़ जाती है", correct: true },
            { text: "घट जाती है", correct: false },
            { text: "अपरिवर्तित रहती है", correct: false },
            { text: "शून्य हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धचालकों का तापमान बढ़ाने पर अधिक सहसंयोजक बंध टूटते हैं, जिससे मुक्त इलेक्ट्रॉनों और होलों की संख्या बढ़ जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> परिणामस्वरूप चालकता <b>बढ़ जाती है</b>।"
    },
    {
        question: "प्रश्न 10. परम शून्य ताप (0 केल्विन) पर एक शुद्ध अर्धचालक किस प्रकार व्यवहार करता है?",
        answers: shuffle([
            { text: "एक उत्तम चालक की तरह", correct: false },
            { text: "एक अतिचालक की तरह", correct: false },
            { text: "एक आदर्श कुचालक की तरह", correct: true },
            { text: "एक मिश्र धातु की तरह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परम शून्य ताप पर, अर्धचालक के सभी इलेक्ट्रॉन संयोजकता बैंड में होते हैं और चालन के लिए कोई भी इलेक्ट्रॉन या होल उपलब्ध नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह एक <b>आदर्श कुचालक</b> की भांति व्यवहार करता है।"
    },
    {
        question: "प्रश्न 11. अर्धचालक में अशुद्धि मिलाने की प्रक्रिया को क्या कहते हैं?",
        answers: shuffle([
            { text: "आयनीकरण", correct: false },
            { text: "मादन (डोपिंग)", correct: true },
            { text: "प्रवर्धन", correct: false },
            { text: "दिष्टकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी शुद्ध अर्धचालक की चालकता को बढ़ाने के लिए उसमें नियंत्रित मात्रा में उपयुक्त अशुद्धि मिलाने की प्रक्रिया को <b>मादन या डोपिंग</b> कहते हैं।"
    },
    {
        question: "प्रश्न 12. मादन (डोपिंग) का मुख्य उद्देश्य क्या होता है?",
        answers: shuffle([
            { text: "अर्धचालक को कुचालक बनाना", correct: false },
            { text: "अर्धचालक की चालकता को इच्छानुसार नियंत्रित करना", correct: true },
            { text: "अर्धचालक का रंग बदलना", correct: false },
            { text: "अर्धचालक का वजन बढ़ाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डोपिंग के द्वारा अर्धचालक में आवेश वाहकों (इलेक्ट्रॉन या होल) की संख्या को नियंत्रित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे उसकी चालकता बहुत अधिक बढ़ जाती है और उसे विभिन्न इलेक्ट्रॉनिक उपकरणों के लिए उपयोगी बनाया जा सकता है।"
    },
    {
        question: "प्रश्न 13. N-प्रकार का अर्धचालक बनाने के लिए शुद्ध अर्धचालक में किस प्रकार की अशुद्धि मिलाई जाती है?",
        answers: shuffle([
            { text: "त्रिसंयोजी (Trivalent)", correct: false },
            { text: "पंचसंयोजी (Pentavalent)", correct: true },
            { text: "द्विसंयोजी", correct: false },
            { text: "चतुःसंयोजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सिलिकॉन या जर्मेनियम (चतुःसंयोजी) में <b>पंचसंयोजी अशुद्धि</b> (जैसे आर्सेनिक, फॉस्फोरस) मिलाई जाती है, तो एक अतिरिक्त इलेक्ट्रॉन मुक्त रहता है जो चालन में भाग लेता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे <b>N-प्रकार</b> का अर्धचालक बनता है।"
    },
    {
        question: "प्रश्न 14. P-प्रकार का अर्धचालक बनाने के लिए शुद्ध अर्धचालक में किस प्रकार की अशुद्धि मिलाई जाती है?",
        answers: shuffle([
            { text: "त्रिसंयोजी (Trivalent)", correct: true },
            { text: "पंचसंयोजी (Pentavalent)", correct: false },
            { text: "अक्रिय गैस", correct: false },
            { text: "चतुःसंयोजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सिलिकॉन या जर्मेनियम में <b>त्रिसंयोजी अशुद्धि</b> (जैसे बोरॉन, एल्यूमीनियम) मिलाई जाती है, तो एक इलेक्ट्रॉन की कमी रह जाती है, जिसे 'होल' या 'कोटर' कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह होल चालन में भाग लेता है, जिससे <b>P-प्रकार</b> का अर्धचालक बनता है।"
    },
    {
        question: "प्रश्न 15. N-प्रकार के अर्धचालक में बहुसंख्यक आवेश वाहक (majority charge carriers) कौन होते हैं?",
        answers: shuffle([
            { text: "होल (कोटर)", correct: false },
            { text: "इलेक्ट्रॉन", correct: true },
            { text: "प्रोटॉन", correct: false },
            { text: "पॉज़िट्रॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> N-प्रकार के अर्धचालक में पंचसंयोजी अशुद्धि मिलाने से <b>मुक्त इलेक्ट्रॉनों</b> की संख्या होलों की संख्या से बहुत अधिक हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इलेक्ट्रॉन बहुसंख्यक आवेश वाहक होते हैं।"
    },
    {
        question: "प्रश्न 16. P-प्रकार के अर्धचालक में बहुसंख्यक आवेश वाहक कौन होते हैं?",
        answers: shuffle([
            { text: "होल (कोटर)", correct: true },
            { text: "इलेक्ट्रॉन", correct: false },
            { text: "न्यूट्रॉन", correct: false },
            { text: "आयन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> P-प्रकार के अर्धचालक में त्रिसंयोजी अशुद्धि मिलाने से <b>होलों</b> की संख्या इलेक्ट्रॉनों की संख्या से बहुत अधिक हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए होल बहुसंख्यक आवेश वाहक होते हैं।"
    },
    {
        question: "प्रश्न 17. N-प्रकार के अर्धचालक में अल्पसंख्यक आवेश वाहक (minority charge carriers) कौन होते हैं?",
        answers: shuffle([
            { text: "होल (कोटर)", correct: true },
            { text: "इलेक्ट्रॉन", correct: false },
            { text: "प्रोटॉन", correct: false },
            { text: "आयन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्मीय ऊर्जा के कारण कुछ सहसंयोजक बंध टूटते हैं जिससे इलेक्ट्रॉन-होल युग्म उत्पन्न होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि इलेक्ट्रॉनों की संख्या पहले से ही बहुत अधिक होती है, इसलिए <b>होल</b> अल्पसंख्यक वाहक के रूप में मौजूद रहते हैं।"
    },
    {
        question: "प्रश्न 18. P-प्रकार के अर्धचालक में अल्पसंख्यक आवेश वाहक कौन होते हैं?",
        answers: shuffle([
            { text: "होल (कोटर)", correct: false },
            { text: "इलेक्ट्रॉन", correct: true },
            { text: "न्यूट्रॉन", correct: false },
            { text: "पॉज़िट्रॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> P-प्रकार के अर्धचालक में होलों की संख्या बहुत अधिक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन ऊष्मीय ऊर्जा के कारण उत्पन्न हुए कुछ मुक्त <b>इलेक्ट्रॉन</b> अल्पसंख्यक वाहक के रूप में मौजूद रहते हैं।"
    },
    {
        question: "प्रश्न 19. शुद्ध या नैज (Intrinsic) अर्धचालक में इलेक्ट्रॉन और होल की सांद्रता का अनुपात क्या होता है?",
        answers: shuffle([
            { text: "इलेक्ट्रॉन अधिक होते हैं", correct: false },
            { text: "होल अधिक होते हैं", correct: false },
            { text: "दोनों बराबर होते हैं", correct: true },
            { text: "शून्य होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक शुद्ध अर्धचालक में, जब भी एक सहसंयोजक बंध टूटता है, तो एक मुक्त इलेक्ट्रॉन और एक होल एक साथ उत्पन्न होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, उनकी संख्या या सांद्रता हमेशा <b>बराबर</b> रहती है।"
    },
    {
        question: "प्रश्न 20. पंचसंयोजी अशुद्धि परमाणु को क्या कहा जाता है?",
        answers: shuffle([
            { text: "ग्राही (Acceptor) परमाणु", correct: false },
            { text: "दाता (Donor) परमाणु", correct: true },
            { text: "निष्क्रिय परमाणु", correct: false },
            { text: "उत्तेजित परमाणु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि पंचसंयोजी अशुद्धि परमाणु अर्धचालक को एक अतिरिक्त इलेक्ट्रॉन <b>'दान'</b> करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे <b>दाता परमाणु</b> कहा जाता है।"
    },
    {
        question: "प्रश्न 21. त्रिसंयोजी अशुद्धि परमाणु को क्या कहा जाता है?",
        answers: shuffle([
            { text: "ग्राही (Acceptor) परमाणु", correct: true },
            { text: "दाता (Donor) परमाणु", correct: false },
            { text: "उदासीन परमाणु", correct: false },
            { text: "उत्तेजित परमाणु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि त्रिसंयोजी अशुद्धि परमाणु संयोजकता बैंड से एक इलेक्ट्रॉन <b>'ग्रहण'</b> करके एक होल बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे <b>ग्राही परमाणु</b> कहा जाता है।"
    },
    {
        question: "प्रश्न 22. कुचालकों का उपयोग कहाँ किया जाता है?",
        answers: shuffle([
            { text: "कनेक्टिंग तार बनाने में", correct: false },
            { text: "विद्युत उपकरणों को विद्युतरोधी बनाने में", correct: true },
            { text: "हीटिंग एलिमेंट बनाने में", correct: false },
            { text: "सौर पैनल बनाने में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुचालकों का मुख्य उपयोग विद्युत धारा को अवांछित पथों पर जाने से रोकना और <b>सुरक्षा प्रदान करना</b> है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे तारों के ऊपर प्लास्टिक का आवरण।"
    },
    {
        question: "प्रश्न 23. किसी चालक की सतह पर आवेश का वितरण कैसा होता है?",
        answers: shuffle([
            { text: "पूरे आयतन में एकसमान", correct: false },
            { text: "केवल उसकी बाहरी सतह पर", correct: true },
            { text: "केवल केंद्र में", correct: false },
            { text: "केवल नुकीले सिरों पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समान आवेशों के बीच प्रतिकर्षण के कारण, किसी चालक को दिया गया कोई भी अतिरिक्त आवेश हमेशा उसकी <b>बाहरी सतह पर फैल जाता है</b>।"
    },
    {
        question: "प्रश्न 24. अर्धचालकों में धारा का प्रवाह किसके कारण होता है?",
        answers: shuffle([
            { text: "केवल इलेक्ट्रॉनों के कारण", correct: false },
            { text: "केवल होलों के कारण", correct: false },
            { text: "इलेक्ट्रॉनों और होलों दोनों के कारण", correct: true },
            { text: "केवल आयनों के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धचालकों में विद्युत धारा का प्रवाह चालन बैंड में <b>इलेक्ट्रॉनों की गति</b> और संयोजकता बैंड में <b>होलों की गति</b>, दोनों के कारण होता है।"
    },
    {
        question: "प्रश्न 25. चालकों (धातुओं) में धारा का प्रवाह मुख्यतः किसके कारण होता है?",
        answers: shuffle([
            { text: "केवल मुक्त इलेक्ट्रॉनों के कारण", correct: true },
            { text: "केवल होलों के कारण", correct: false },
            { text: "इलेक्ट्रॉनों और होलों दोनों के कारण", correct: false },
            { text: "केवल आयनों के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धातुओं में संयोजकता बैंड में कोई होल नहीं होते हैं और चालन के लिए बहुत बड़ी संख्या में <b>मुक्त इलेक्ट्रॉन</b> उपलब्ध होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, धारा प्रवाह केवल इलेक्ट्रॉनों के कारण होता है।"
    },
    {
        question: "प्रश्न 26. ऊर्जा बैंड में 'होल' (कोटर) की अवधारणा का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक अतिरिक्त प्रोटॉन", correct: false },
            { text: "एक खाली स्थान", correct: false },
            { text: "संयोजकता बैंड में एक इलेक्ट्रॉन की अनुपस्थिति", correct: true },
            { text: "एक न्यूट्रॉन की कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई इलेक्ट्रॉन सहसंयोजक बंध तोड़कर संयोजकता बैंड से चालन बैंड में जाता है, तो संयोजकता बैंड में जो खाली स्थान बनता है, उसे <b>होल</b> कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे एक धनात्मक आवेश वाहक के रूप में माना जाता है।"
    },
    {
        question: "प्रश्न 27. किसी कुचालक पदार्थ का प्रतिरोध ताप गुणांक कैसा होता है?",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: false },
            { text: "सामान्यतः नगण्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुचालकों का प्रतिरोध बहुत अधिक होता है और तापमान के साथ उसमें बहुत कम परिवर्तन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उनका प्रतिरोध ताप गुणांक बहुत कम या <b>नगण्य</b> माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, कुछ कुचालकों का यह ऋणात्मक भी हो सकता है।"
    },
    {
        question: "प्रश्न 28. निम्नलिखित में से कौन सी युक्ति अर्धचालक से नहीं बनी है?",
        answers: shuffle([
            { text: "डायोड", correct: false },
            { text: "ट्रांजिस्टर", correct: false },
            { text: "एकीकृत परिपथ (IC)", correct: false },
            { text: "विद्युत हीटर की कुंडली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विद्युत हीटर की कुंडली</b> नाइक्रोम जैसी मिश्र धातु से बनी होती है, जो एक चालक है।<br><br><i class='fa-solid fa-angles-right icon'></i> डायोड, ट्रांजिस्टर और आईसी सभी अर्धचालक पदार्थों से बनाए जाते हैं।"
    },
    {
        question: "प्रश्न 29. फर्मी स्तर (Fermi Level) क्या है?",
        answers: shuffle([
            { text: "वह ऊर्जा स्तर जिस पर इलेक्ट्रॉन के पाए जाने की प्रायिकता शून्य होती है", correct: false },
            { text: "वह ऊर्जा स्तर जिस पर इलेक्ट्रॉन के पाए जाने की प्रायिकता एक होती है", correct: false },
            { text: "परम शून्य ताप पर उच्चतम भरा हुआ ऊर्जा स्तर", correct: true },
            { text: "संयोजकता बैंड का निम्नतम स्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फर्मी स्तर</b> वह काल्पनिक ऊर्जा स्तर है जो <b>परम शून्य ताप पर इलेक्ट्रॉनों द्वारा भरे गए उच्चतम ऊर्जा स्तर</b> को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पदार्थ की चालकता को समझने में महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 30. एक नैज (Intrinsic) अर्धचालक में फर्मी स्तर कहाँ स्थित होता है?",
        answers: shuffle([
            { text: "संयोजकता बैंड के ठीक ऊपर", correct: false },
            { text: "चालन बैंड के ठीक नीचे", correct: false },
            { text: "वर्जित ऊर्जा अंतराल के ठीक मध्य में", correct: true },
            { text: "चालन बैंड के अंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुद्ध अर्धचालक में, इलेक्ट्रॉन और होल की सांद्रता बराबर होने के कारण फर्मी स्तर लगभग संयोजकता बैंड और चालन बैंड के बीच <b>मध्य में</b> स्थित होता है।"
    },
    {
        question: "प्रश्न 31. N-प्रकार के अर्धचालक में फर्मी स्तर कहाँ स्थित होता है?",
        answers: shuffle([
            { text: "संयोजकता बैंड के निकट", correct: false },
            { text: "चालन बैंड के निकट", correct: true },
            { text: "वर्जित ऊर्जा अंतराल के मध्य में", correct: false },
            { text: "संयोजकता बैंड के अंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> N-प्रकार के अर्धचालक में चालन बैंड में इलेक्ट्रॉनों की अधिकता के कारण, फर्मी स्तर ऊर्जा अंतराल में ऊपर की ओर खिसककर <b>चालन बैंड के निकट</b> आ जाता है।"
    },
    {
        question: "प्रश्न 32. किसी कुचालक को दिया गया आवेश कहाँ रहता है?",
        answers: shuffle([
            { text: "उसकी बाहरी सतह पर फैल जाता है", correct: false },
            { text: "उसके केंद्र में चला जाता है", correct: false },
            { text: "जहाँ दिया जाता है, वहीं स्थिर रहता है", correct: true },
            { text: "तुरंत समाप्त हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि कुचालक में आवेश वाहक गति करने के लिए स्वतंत्र नहीं होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए अतिरिक्त आवेश जिस स्थान पर दिया जाता है, <b>उसी स्थान पर बना रहता है</b>।"
    },
    {
        question: "प्रश्न 33. 'अवक्षय परत' (Depletion Layer) का निर्माण कहाँ होता है?",
        answers: shuffle([
            { text: "एक शुद्ध अर्धचालक में", correct: false },
            { text: "एक P-N संधि डायोड में", correct: true },
            { text: "एक चालक में", correct: false },
            { text: "एक कुचालक में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक P-प्रकार और एक N-प्रकार के अर्धचालक को जोड़ा जाता है, तो संधि के पास के इलेक्ट्रॉन और होल आपस में मिलकर उदासीन हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे एक ऐसी परत बनती है जिसमें कोई गतिशील आवेश वाहक नहीं होते।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे <b>अवक्षय परत</b> कहते हैं।"
    },
    {
        question: "प्रश्न 34. P-N संधि में विसरण धारा (Diffusion current) का क्या कारण है?",
        answers: shuffle([
            { text: "संधि पर लगाया गया बाहरी वोल्टेज", correct: false },
            { text: "P और N क्षेत्रों में आवेश वाहकों की सांद्रता में अंतर", correct: true },
            { text: "तापमान में वृद्धि", correct: false },
            { text: "संधि पर प्रकाश का पड़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> N-क्षेत्र में इलेक्ट्रॉनों की उच्च सांद्रता और P-क्षेत्र में होलों की उच्च सांद्रता के कारण, वे <b>अधिक सांद्रता से कम सांद्रता की ओर विसरित होते हैं</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे विसरण धारा उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 35. P-N संधि में अपवाह धारा (Drift current) का क्या कारण है?",
        answers: shuffle([
            { text: "सांद्रता में अंतर", correct: false },
            { text: "अवक्षय परत में उत्पन्न विद्युत क्षेत्र", correct: true },
            { text: "बाहरी चुंबकीय क्षेत्र", correct: false },
            { text: "ऊष्मीय कंपन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवक्षय परत में मौजूद स्थिर आयनों के कारण एक <b>आंतरिक विद्युत क्षेत्र</b> उत्पन्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र अल्पसंख्यक आवेश वाहकों (N-क्षेत्र में होल और P-क्षेत्र में इलेक्ट्रॉन) को संधि के पार खींचता है, जिससे <b>अपवाह धारा</b> बनती है।"
    },
    {
        question: "प्रश्न 36. किस पदार्थ का प्रतिरोध ताप गुणांक ऋणात्मक होता है?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: false },
            { text: "अर्धचालक", correct: true },
            { text: "नाइक्रोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ऋणात्मक ताप गुणांक</b> का अर्थ है कि तापमान बढ़ने पर प्रतिरोध घटता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गुण <b>अर्धचालकों</b> और कुछ कुचालकों में पाया जाता है।"
    },
    {
        question: "प्रश्न 37. सौर सेल (Solar Cell) बनाने के लिए मुख्यतः किस पदार्थ का उपयोग होता है?",
        answers: shuffle([
            { text: "चालक", correct: false },
            { text: "कुचालक", correct: false },
            { text: "अर्धचालक", correct: true },
            { text: "मिश्र धातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर सेल बनाने के लिए <b>सिलिकॉन जैसे अर्धचालक पदार्थों</b> का उपयोग किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो प्रकाश ऊर्जा (फोटॉन) को सीधे विद्युत ऊर्जा में परिवर्तित करते हैं।"
    },
    {
        question: "प्रश्न 38. प्रकाश उत्सर्जक डायोड (LED) किस पदार्थ से बनाए जाते हैं?",
        answers: shuffle([
            { text: "शुद्ध सिलिकॉन", correct: false },
            { text: "शुद्ध जर्मेनियम", correct: false },
            { text: "गैलियम आर्सेनाइड जैसे यौगिक अर्धचालक", correct: true },
            { text: "तांबा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलईडी विशेष प्रकार के <b>यौगिक अर्धचालकों (जैसे गैलियम आर्सेनाइड)</b> से बनाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो इलेक्ट्रॉन और होल के पुनर्संयोजन पर प्रकाश उत्सर्जित करते हैं।"
    },
    {
        question: "प्रश्न 39. एक अच्छे चालक की विशेषता है?",
        answers: shuffle([
            { text: "उच्च प्रतिरोधकता", correct: false },
            { text: "निम्न चालकता", correct: false },
            { text: "बड़ी संख्या में मुक्त इलेक्ट्रॉन", correct: true },
            { text: "बड़ा ऊर्जा अंतराल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी पदार्थ की चालकता सीधे तौर पर उसमें मौजूद मुक्त आवेश वाहकों (चालकों में <b>मुक्त इलेक्ट्रॉन</b>) की संख्या पर निर्भर करती है।"
    },
    {
        question: "प्रश्न 40. एक अच्छे कुचालक की विशेषता है?",
        answers: shuffle([
            { text: "लगभग शून्य प्रतिरोधकता", correct: false },
            { text: "अतिव्यापित ऊर्जा बैंड", correct: false },
            { text: "नगण्य संख्या में मुक्त इलेक्ट्रॉन", correct: true },
            { text: "छोटा ऊर्जा अंतराल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुचालकों में इलेक्ट्रॉन अपने परमाणुओं से मजबूती से बंधे होते हैं और चालन के लिए लगभग <b>कोई भी मुक्त इलेक्ट्रॉन उपलब्ध नहीं होता है</b>।"
    },
    {
        question: "प्रश्न 41. 'होल' पर कैसा आवेश माना जाता है?",
        answers: shuffle([
            { text: "ऋणात्मक", correct: false },
            { text: "धनात्मक", correct: true },
            { text: "उदासीन", correct: false },
            { text: "परिवर्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होल संयोजकता बैंड में एक इलेक्ट्रॉन की कमी है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि इलेक्ट्रॉन ऋणात्मक होता है, उसकी कमी को एक प्रभावी <b>धनात्मक आवेश वाहक</b> के रूप में माना जाता है, जिसका परिमाण इलेक्ट्रॉन के आवेश के बराबर होता है।"
    },
    {
        question: "प्रश्न 42. निम्नलिखित में से कौन सा चतुर्थ समूह का तत्व है?",
        answers: shuffle([
            { text: "बोरॉन", correct: false },
            { text: "आर्सेनिक", correct: false },
            { text: "जर्मेनियम", correct: true },
            { text: "एल्यूमीनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त सारणी के <b>चतुर्थ समूह</b> के तत्व (जैसे कार्बन, सिलिकॉन, <b>जर्मेनियम</b>) चतुःसंयोजी होते हैं और अर्धचालकों का आधार बनते हैं।"
    },
    {
        question: "प्रश्न 43. निम्नलिखित में से कौन सा पंचम समूह का तत्व है जिसका उपयोग डोपिंग में होता है?",
        answers: shuffle([
            { text: "इंडियम", correct: false },
            { text: "गैलियम", correct: false },
            { text: "फॉस्फोरस", correct: true },
            { text: "बोरॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंचम समूह के तत्व (जैसे <b>फॉस्फोरस</b>, आर्सेनिक, एंटीमनी) पंचसंयोजी होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> और इनका उपयोग N-प्रकार के अर्धचालक बनाने के लिए दाता अशुद्धि के रूप में किया जाता है।"
    },
    {
        question: "प्रश्न 44. निम्नलिखित में से कौन सा तृतीय समूह का तत्व है जिसका उपयोग डोपिंग में होता है?",
        answers: shuffle([
            { text: "फॉस्फोरस", correct: false },
            { text: "आर्सेनिक", correct: false },
            { text: "एंटीमनी", correct: false },
            { text: "इंडियम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तृतीय समूह के तत्व (जैसे बोरॉन, एल्यूमीनियम, गैलियम, <b>इंडियम</b>) त्रिसंयोजी होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> और इनका उपयोग P-प्रकार के अर्धचालक बनाने के लिए ग्राही अशुद्धि के रूप में किया जाता है।"
    },
    {
        question: "प्रश्न 45. सहसंयोजक बंध (Covalent Bond) किस प्रकार के पदार्थों में प्रमुखता से पाए जाते हैं?",
        answers: shuffle([
            { text: "धातु (चालक)", correct: false },
            { text: "आयनिक क्रिस्टल", correct: false },
            { text: "अर्धचालक", correct: true },
            { text: "अक्रिय गैसें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिलिकॉन और जर्मेनियम जैसे <b>अर्धचालकों</b> में, प्रत्येक परमाणु अपने निकटतम चार परमाणुओं के साथ इलेक्ट्रॉनों की साझेदारी करके <b>सहसंयोजक बंध</b> बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो उनकी क्रिस्टल संरचना का आधार है।"
    },
    {
        question: "प्रश्न 46. 'अपमिश्रित अर्धचालक' (Extrinsic Semiconductor) किसे कहते हैं?",
        answers: shuffle([
            { text: "शुद्ध अर्धचालक को", correct: false },
            { text: "अशुद्धि युक्त अर्धचालक को", correct: true },
            { text: "कुचालक पदार्थ को", correct: false },
            { text: "चालक पदार्थ को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब शुद्ध (नैज) अर्धचालक में डोपिंग करके <b>अशुद्धि मिला दी जाती है</b>, तो उसे <b>अपमिश्रित या बाह्य अर्धचालक</b> कहते हैं।"
    },
    {
        question: "प्रश्न 47. किसी चालक का प्रतिरोधकता ताप गुणांक कैसा होता है?",
        answers: shuffle([
            { text: "धनात्मक", correct: true },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>धनात्मक ताप गुणांक</b> का अर्थ है कि तापमान बढ़ने पर प्रतिरोधकता <b>बढ़ती है</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> जो सभी धात्विक चालकों की विशेषता है।"
    },
    {
        question: "प्रश्न 48. विद्युतरोधी (कुचालक) पर उच्च विद्युत क्षेत्र लगाने पर क्या होता है?",
        answers: shuffle([
            { text: "वह अतिचालक बन जाता है", correct: false },
            { text: "उसका भंजन (Breakdown) हो सकता है", correct: true },
            { text: "वह अर्धचालक बन जाता है", correct: false },
            { text: "कोई प्रभाव नहीं पड़ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक निश्चित सीमा (परावैद्युत सामर्थ्य) से अधिक विद्युत क्षेत्र लगाने पर, कुचालक के सहसंयोजक बंध टूट जाते हैं और वह अचानक विद्युत का चालन करने लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस घटना को <b>'परावैद्युत भंजन'</b> कहते हैं।"
    },
    {
        question: "प्रश्न 49. ऊर्जा बैंड का निर्माण क्यों होता है?",
        answers: shuffle([
            { text: "एक अकेले परमाणु के कारण", correct: false },
            { text: "जब कई परमाणु एक साथ आकर क्रिस्टल बनाते हैं", correct: true },
            { text: "प्रकाश के आपतन के कारण", correct: false },
            { text: "उच्च दाब के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बहुत से परमाणु एक-दूसरे के निकट आते हैं, तो पाउली के अपवर्जन नियम के कारण उनके विविक्त ऊर्जा स्तर थोड़े-थोड़े भिन्न ऊर्जाओं वाले ऊर्जा स्तरों के समूह में बँट जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें <b>ऊर्जा बैंड</b> कहते हैं।"
    },
    {
        question: "प्रश्न 50. संयोजकता बैंड (Valence Band) में होते हैं?",
        answers: shuffle([
            { text: "मुक्त इलेक्ट्रॉन", correct: false },
            { text: "संयोजी इलेक्ट्रॉन", correct: true },
            { text: "होल", correct: false },
            { text: "प्रोटॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>संयोजकता बैंड</b> ऊर्जा स्तरों का वह समूह है जिसमें परमाणुओं के सबसे बाहरी कक्षा के इलेक्ट्रॉन (संयोजी इलेक्ट्रॉन) रहते हैं।"
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