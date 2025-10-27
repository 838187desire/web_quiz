const questions = [
    {
        topHeading: "ऊर्जा संरक्षण के नियम पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. ऊर्जा संरक्षण का नियम मूल रूप से क्या कहता है?",
        answers: shuffle([
            { text: "ऊर्जा को केवल बनाया जा सकता है, नष्ट नहीं किया जा सकता।", correct: false },
            { text: "ऊर्जा को केवल नष्ट किया जा सकता है, बनाया नहीं जा सकता।", correct: false },
            { text: "ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है।", correct: true },
            { text: "ऊर्जा हमेशा एक ही रूप में रहती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नियम बताता है कि ब्रह्मांड की कुल ऊर्जा स्थिर है; इसे केवल एक रूप से दूसरे रूप में परिवर्तित किया जा सकता है।"
    },
    {
        question: "प्रश्न 2. जब कोई वस्तु मुक्त रूप से पृथ्वी की ओर गिरती है, तो उसकी कुल यांत्रिक ऊर्जा का क्या होता है?",
        answers: shuffle([
            { text: "यह बढ़ती है।", correct: false },
            { text: "यह घटती है।", correct: false },
            { text: "यह स्थिर रहती है।", correct: true },
            { text: "यह पहले बढ़ती है, फिर घटती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिरने के दौरान, वस्तु की स्थितिज ऊर्जा गतिज ऊर्जा में बदलती है, लेकिन दोनों का योग (कुल यांत्रिक ऊर्जा) संरक्षित रहता है, यदि वायु प्रतिरोध नगण्य हो।"
    },
    {
        question: "प्रश्न 3. ऊर्जा संरक्षण का नियम किस पर लागू होता है?",
        answers: shuffle([
            { text: "केवल यांत्रिक ऊर्जा पर", correct: false },
            { text: "केवल ऊष्मीय ऊर्जा पर", correct: false },
            { text: "ऊर्जा के सभी रूपों पर", correct: true },
            { text: "केवल विद्युत ऊर्जा पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक सार्वभौमिक नियम है जो ऊर्जा के सभी प्रकारों—यांत्रिक, ऊष्मीय, रासायनिक, नाभिकीय, विद्युत आदि पर लागू होता है।"
    },
    {
        question: "प्रश्न 4. एक साधारण पेंडुलम के दोलन में, उच्चतम बिंदु पर कौन सी ऊर्जा अधिकतम होती है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "स्थितिज ऊर्जा", correct: true },
            { text: "दोनों बराबर होती हैं", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम बिंदु पर पेंडुलम क्षण भर के लिए रुक जाता है, इसलिए उसकी गतिज ऊर्जा शून्य होती है और सारी यांत्रिक ऊर्जा स्थितिज ऊर्जा के रूप में होती है।"
    },
    {
        question: "प्रश्न 5. पेंडुलम जब अपनी माध्य स्थिति (सबसे निचले बिंदु) से गुजरता है, तो कौन सी ऊर्जा अधिकतम होती है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: true },
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "प्रत्यास्थ ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्य स्थिति में, पेंडुलम की ऊँचाई न्यूनतम (स्थितिज ऊर्जा न्यूनतम) और वेग अधिकतम होता है, इसलिए गतिज ऊर्जा अधिकतम होती है।"
    },
    {
        question: "प्रश्न 6. घर्षण बल द्वारा किया गया कार्य यांत्रिक ऊर्जा को किस ऊर्जा में परिवर्तित करता है?",
        answers: shuffle([
            { text: "प्रकाश ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: true },
            { text: "रासायनिक ऊर्जा", correct: false },
            { text: "नाभिकीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण एक असंरक्षी बल है जो यांत्रिक ऊर्जा का क्षय करता है और उसे मुख्य रूप से ऊष्मा (और कुछ ध्वनि) में बदल देता है।"
    },
    {
        question: "प्रश्न 7. हाइड्रोइलेक्ट्रिक पावर प्लांट (जलविद्युत संयंत्र) में ऊर्जा का रूपांतरण किस क्रम में होता है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा → स्थितिज ऊर्जा → विद्युत ऊर्जा", correct: false },
            { text: "स्थितिज ऊर्जा → गतिज ऊर्जा → विद्युत ऊर्जा", correct: true },
            { text: "विद्युत ऊर्जा → स्थितिज ऊर्जा → गतिज ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा → गतिज ऊर्जा → विद्युत ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बांध में संग्रहीत पानी की स्थितिज ऊर्जा को बहते पानी की गतिज ऊर्जा में, और फिर टरबाइन द्वारा विद्युत ऊर्जा में बदला जाता है।"
    },
    {
        question: "प्रश्न 8. एक आदर्श, घर्षण रहित प्रणाली में, कौन सी ऊर्जा हमेशा संरक्षित रहती है?",
        answers: shuffle([
            { text: "केवल गतिज ऊर्जा", correct: false },
            { text: "केवल स्थितिज ऊर्जा", correct: false },
            { text: "कुल यांत्रिक ऊर्जा", correct: true },
            { text: "ऊष्मीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई असंरक्षी बल (जैसे घर्षण) मौजूद नहीं होता, तो गतिज और स्थितिज ऊर्जा का योग, यानी कुल यांत्रिक ऊर्जा, स्थिर रहती है।"
    },
    {
        question: "प्रश्न 9. ऊर्जा संरक्षण का नियम किसके समतुल्य है?",
        answers: shuffle([
            { text: "न्यूटन का पहला नियम", correct: false },
            { text: "ऊष्मागतिकी का पहला नियम", correct: true },
            { text: "न्यूटन का गुरुत्वाकर्षण का नियम", correct: false },
            { text: "केप्लर का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्मागतिकी का पहला नियम मूल रूप से ऊर्जा संरक्षण का ही एक कथन है, जो ऊष्मा, कार्य और आंतरिक ऊर्जा के बीच संबंध स्थापित करता है।"
    },
    {
        question: "प्रश्न 10. जब एक बैटरी का उपयोग किया जाता है, तो कौन सी ऊर्जा विद्युत ऊर्जा में परिवर्तित होती है?",
        answers: shuffle([
            { text: "यांत्रिक ऊर्जा", correct: false },
            { text: "नाभिकीय ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: true },
            { text: "सौर ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैटरी अपने अंदर संग्रहीत रासायनिक ऊर्जा को एक रासायनिक अभिक्रिया के माध्यम से विद्युत ऊर्जा में परिवर्तित करती है।"
    },
    {
        question: "प्रश्न 11. एक गेंद को ऊपर की ओर फेंकने पर, ऊपर जाते समय उसकी गतिज ऊर्जा का क्या होता है?",
        answers: shuffle([
            { text: "बढ़ती है", correct: false },
            { text: "घटती है", correct: true },
            { text: "स्थिर रहती है", correct: false },
            { text: "शून्य हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे-जैसे गेंद ऊपर जाती है, उसका वेग कम होता जाता है, जिससे उसकी गतिज ऊर्जा घटती है और स्थितिज ऊर्जा में परिवर्तित होती जाती है।"
    },
    {
        question: "प्रश्न 12. प्रकाश संश्लेषण की प्रक्रिया ऊर्जा संरक्षण के नियम का पालन कैसे करती है?",
        answers: shuffle([
            { text: "यह रासायनिक ऊर्जा को प्रकाश ऊर्जा में बदलती है।", correct: false },
            { text: "यह प्रकाश ऊर्जा को रासायनिक ऊर्जा में संग्रहीत करती है।", correct: true },
            { text: "यह ऊर्जा उत्पन्न करती है।", correct: false },
            { text: "यह ऊर्जा को नष्ट करती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पौधे सूर्य की प्रकाश ऊर्जा को ग्रहण करते हैं और उसे ग्लूकोज के रासायनिक बंधनों में रासायनिक ऊर्जा के रूप में संग्रहीत करते हैं, इस प्रक्रिया में ऊर्जा संरक्षित रहती है।"
    },
    {
        question: "प्रश्न 13. एक थर्मल पावर प्लांट में, कोयले की रासायनिक ऊर्जा अंततः किस ऊर्जा में परिवर्तित होती है?",
        answers: shuffle([
            { text: "केवल ऊष्मीय ऊर्जा", correct: false },
            { text: "केवल प्रकाश ऊर्जा", correct: false },
            { text: "विद्युत ऊर्जा", correct: true },
            { text: "नाभिकीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोयले को जलाकर उसकी रासायनिक ऊर्जा से ऊष्मा उत्पन्न की जाती है, जिससे पानी की भाप बनाकर टरबाइन घुमाई जाती है और अंततः विद्युत ऊर्जा प्राप्त होती है।"
    },
    {
        question: "प्रश्न 14. असंरक्षी बल (जैसे घर्षण या वायु प्रतिरोध) की उपस्थिति में, एक निकाय की कुल यांत्रिक ऊर्जा...",
        answers: shuffle([
            { text: "संरक्षित रहती है।", correct: false },
            { text: "बढ़ती है।", correct: false },
            { text: "घटती है।", correct: true },
            { text: "शून्य हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असंरक्षी बल यांत्रिक ऊर्जा को ऊष्मा जैसे अन्य रूपों में बदल देते हैं, जिससे कुल यांत्रिक ऊर्जा का मान कम हो जाता है।"
    },
    {
        question: "प्रश्न 15. अल्बर्ट आइंस्टीन के द्रव्यमान-ऊर्जा तुल्यता सिद्धांत (E=mc²) ने ऊर्जा संरक्षण के नियम को कैसे प्रभावित किया?",
        answers: shuffle([
            { text: "इसने नियम को गलत साबित कर दिया।", correct: false },
            { text: "इसने दिखाया कि द्रव्यमान और ऊर्जा एक दूसरे में परिवर्तनीय हैं।", correct: true },
            { text: "इसने केवल नाभिकीय प्रक्रियाओं पर नियम लागू किया।", correct: false },
            { text: "इसका ऊर्जा संरक्षण से कोई संबंध नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसने ऊर्जा संरक्षण के नियम को और व्यापक बनाया, जिसमें कहा गया कि द्रव्यमान और ऊर्जा को मिलाकर बनी कुल मात्रा संरक्षित रहती है।"
    },
    {
        question: "प्रश्न 16. जब हम ताली बजाते हैं, तो हमारी यांत्रिक ऊर्जा किन रूपों में परिवर्तित होती है?",
        answers: shuffle([
            { text: "केवल प्रकाश ऊर्जा", correct: false },
            { text: "केवल ऊष्मीय ऊर्जा", correct: false },
            { text: "ध्वनि और ऊष्मीय ऊर्जा", correct: true },
            { text: "केवल रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाथों की गति की यांत्रिक ऊर्जा हवा में कंपन (ध्वनि) पैदा करती है और घर्षण के कारण कुछ ऊष्मा भी उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 17. एक \"शाश्वत गति मशीन\" (Perpetual Motion Machine) बनाना क्यों असंभव है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण के कारण", correct: false },
            { text: "ऊर्जा संरक्षण के नियम के उल्लंघन के कारण", correct: true },
            { text: "जड़त्व के नियम के कारण", correct: false },
            { text: "वायु प्रतिरोध के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐसी कोई मशीन नहीं बनाई जा सकती जो बिना ऊर्जा लिए लगातार काम करती रहे या जितनी ऊर्जा लेती है उससे अधिक काम करे, क्योंकि यह ऊर्जा संरक्षण के नियम का उल्लंघन होगा।"
    },
    {
        question: "प्रश्न 18. एक स्प्रिंग को दबाने या खींचने पर, किया गया कार्य किस ऊर्जा के रूप में संग्रहीत होता है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "प्रत्यास्थ स्थितिज ऊर्जा", correct: true },
            { text: "गुरुत्वीय स्थितिज ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्प्रिंग के आकार में परिवर्तन के कारण उसमें ऊर्जा संग्रहीत होती है, जिसे प्रत्यास्थ स्थितिज ऊर्जा कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा संरक्षण का एक उदाहरण है।"
    },
    {
        question: "प्रश्न 19. एक बंद प्रणाली में, यदि ऊर्जा एक रूप से दूसरे में बदलती है, तो प्रणाली की कुल ऊर्जा...",
        answers: shuffle([
            { text: "हमेशा बढ़ती है।", correct: false },
            { text: "हमेशा घटती है।", correct: false },
            { text: "हमेशा स्थिर रहती है।", correct: true },
            { text: "शून्य हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक विलगित (बंद) प्रणाली की परिभाषा के अनुसार, ऊर्जा न तो बाहर जा सकती है और न ही अंदर आ सकती है, इसलिए कुल ऊर्जा स्थिर रहती है।"
    },
    {
        question: "प्रश्न 20. एक माइक्रोफोन किस ऊर्जा रूपांतरण के सिद्धांत पर काम करता है?",
        answers: shuffle([
            { text: "विद्युत ऊर्जा से ध्वनि ऊर्जा", correct: false },
            { text: "ध्वनि ऊर्जा से विद्युत ऊर्जा", correct: true },
            { text: "यांत्रिक ऊर्जा से ध्वनि ऊर्जा", correct: false },
            { text: "ध्वनि ऊर्जा से यांत्रिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइक्रोफोन ध्वनि तरंगों की ऊर्जा को ग्रहण करके उन्हें समतुल्य विद्युत संकेतों में परिवर्तित करता है, इस प्रक्रिया में ऊर्जा संरक्षित रहती है।"
    },
    {
        question: "प्रश्न 21. जब कोई एथलीट दौड़ता है, तो उसके शरीर की रासायनिक ऊर्जा किसमें परिवर्तित होती है?",
        answers: shuffle([
            { text: "केवल गतिज ऊर्जा में", correct: false },
            { text: "गतिज ऊर्जा और ऊष्मीय ऊर्जा में", correct: true },
            { text: "केवल स्थितिज ऊर्जा में", correct: false },
            { text: "केवल प्रकाश ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भोजन से प्राप्त रासायनिक ऊर्जा का उपयोग दौड़ने (गतिज ऊर्जा) के लिए होता है और शरीर की चयापचय प्रक्रियाओं के कारण ऊष्मा भी उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 22. संरक्षी बल (Conservative Force) की क्या विशेषता है?",
        answers: shuffle([
            { text: "यह हमेशा गति की दिशा में होता है।", correct: false },
            { text: "इसके द्वारा किया गया कार्य पथ पर निर्भर करता है।", correct: false },
            { text: "इसके द्वारा किया गया कार्य पथ पर निर्भर नहीं करता, केवल प्रारंभिक और अंतिम स्थिति पर निर्भर करता है।", correct: true },
            { text: "यह हमेशा यांत्रिक ऊर्जा को कम करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल एक संरक्षी बल है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके प्रभाव में यांत्रिक ऊर्जा संरक्षित रहती है।"
    },
    {
        question: "प्रश्न 23. एक इलेक्ट्रिक हीटर में, विद्युत ऊर्जा मुख्य रूप से किस ऊर्जा में परिवर्तित होती है?",
        answers: shuffle([
            { text: "प्रकाश ऊर्जा", correct: false },
            { text: "ध्वनि ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: true },
            { text: "यांत्रिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीटर के प्रतिरोधक तार से धारा प्रवाहित होने पर विद्युत ऊर्जा का ऊष्मीय ऊर्जा में रूपांतरण होता है, जो ऊर्जा संरक्षण के नियम का पालन करता है।"
    },
    {
        question: "प्रश्न 24. एक रोलर कोस्टर जब पहाड़ी के ऊपर से नीचे की ओर आता है, तो...",
        answers: shuffle([
            { text: "उसकी स्थितिज ऊर्जा बढ़ती है और गतिज ऊर्जा घटती है।", correct: false },
            { text: "उसकी स्थितिज ऊर्जा घटती है और गतिज ऊर्जा बढ़ती है।", correct: true },
            { text: "दोनों ऊर्जाएँ बढ़ती हैं।", correct: false },
            { text: "दोनों ऊर्जाएँ घटती हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊँचाई कम होने से स्थितिज ऊर्जा घटती है, और ऊर्जा संरक्षण के कारण यह घटी हुई ऊर्जा गतिज ऊर्जा में परिवर्तित हो जाती है, जिससे गति बढ़ जाती है।"
    },
    {
        question: "प्रश्न 25. ऊर्जा संरक्षण का विचार सबसे पहले किसने प्रस्तुत किया?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "जूलियस रॉबर्ट वॉन मेयर", correct: true },
            { text: "अल्बर्ट आइंस्टीन", correct: false },
            { text: "गैलीलियो गैलिली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 19वीं सदी के मध्य में मेयर, जूल और हेल्महोल्त्ज़ जैसे कई वैज्ञानिकों ने स्वतंत्र रूप से ऊर्जा संरक्षण के सिद्धांत को स्थापित करने में योगदान दिया।"
    },
    {
        question: "प्रश्न 26. नाभिकीय संलयन (जैसे सूर्य में) की प्रक्रिया में, द्रव्यमान का क्या होता है?",
        answers: shuffle([
            { text: "यह बढ़ता है।", correct: false },
            { text: "यह घटता है और ऊर्जा में परिवर्तित हो जाता है।", correct: true },
            { text: "यह अपरिवर्तित रहता है।", correct: false },
            { text: "यह नष्ट हो जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब हल्के नाभिक मिलकर भारी नाभिक बनाते हैं, तो कुछ द्रव्यमान की क्षति होती है, जो E=mc² के अनुसार विशाल ऊर्जा में बदल जाती है।"
    },
    {
        question: "प्रश्न 27. एक गेंद को जमीन पर गिराने पर, वह हर बार पहले से कम ऊँचाई तक क्यों उछलती है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण कम हो जाता है।", correct: false },
            { text: "गेंद का द्रव्यमान कम हो जाता है।", correct: false },
            { text: "प्रत्येक टक्कर में ऊर्जा का क्षय ऊष्मा और ध्वनि में होता है।", correct: true },
            { text: "ऊर्जा संरक्षण का नियम लागू नहीं होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टक्कर पूर्णतः प्रत्यास्थ नहीं होती, जिससे यांत्रिक ऊर्जा संरक्षित नहीं रहती और उसका कुछ हिस्सा अन्य रूपों में बदल जाता है।"
    },
    {
        question: "प्रश्न 28. एक सौर सेल में, सौर ऊर्जा सीधे किसमें परिवर्तित होती है?",
        answers: shuffle([
            { text: "ऊष्मीय ऊर्जा", correct: false },
            { text: "यांत्रिक ऊर्जा", correct: false },
            { text: "विद्युत ऊर्जा", correct: true },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर सेल फोटोवोल्टाइक प्रभाव का उपयोग करके प्रकाश ऊर्जा को सीधे विद्युत ऊर्जा में बदलते हैं, जो ऊर्जा संरक्षण का एक उदाहरण है।"
    },
    {
        question: "प्रश्न 29. किसी विलगित निकाय (Isolated System) की कुल ऊर्जा समय के साथ...",
        answers: shuffle([
            { text: "बढ़ती है।", correct: false },
            { text: "घटती है।", correct: false },
            { text: "परिवर्तित होती रहती है।", correct: false },
            { text: "नियत रहती है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा संरक्षण के नियम के अनुसार, यदि कोई बाहरी बल या ऊर्जा का आदान-प्रदान न हो, तो निकाय की कुल ऊर्जा हमेशा स्थिर या नियत रहती है।"
    },
    {
        question: "प्रश्न 30. मोमबत्ती का जलना ऊर्जा संरक्षण को कैसे दर्शाता है?",
        answers: shuffle([
            { text: "यह ऊष्मा को रासायनिक ऊर्जा में बदलता है।", correct: false },
            { text: "यह रासायनिक ऊर्जा को ऊष्मा और प्रकाश ऊर्जा में बदलता है।", correct: true },
            { text: "यह केवल प्रकाश उत्पन्न करता है।", correct: false },
            { text: "यह ऊर्जा का निर्माण करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोम में संग्रहीत रासायनिक ऊर्जा, जलने पर ऊष्मा और प्रकाश ऊर्जा में रूपांतरित हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुल ऊर्जा की मात्रा अभिक्रिया से पहले और बाद में समान रहती है।"
    },
    {
        question: "प्रश्न 31. किसी मशीन की दक्षता (efficiency) कभी भी 100% क्यों नहीं हो सकती?",
        answers: shuffle([
            { text: "क्योंकि इनपुट ऊर्जा हमेशा आउटपुट ऊर्जा से कम होती है।", correct: false },
            { text: "क्योंकि घर्षण जैसे असंरक्षी बलों के कारण हमेशा कुछ ऊर्जा का क्षय होता है।", correct: true },
            { text: "क्योंकि मशीनें भारी होती हैं।", correct: false },
            { text: "क्योंकि ऊर्जा संरक्षण का नियम इसे रोकता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वास्तविक मशीनों में, दी गई ऊर्जा का कुछ हिस्सा हमेशा घर्षण के विरुद्ध कार्य करने में या ऊष्मा के रूप में व्यर्थ हो जाता है, जिससे आउटपुट ऊर्जा हमेशा इनपुट से कम होती है।"
    },
    {
        question: "प्रश्न 32. एक तीरंदाज जब धनुष की डोरी खींचता है, तो वह कौन सी ऊर्जा संग्रहीत करता है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "प्रत्यास्थ स्थितिज ऊर्जा", correct: true },
            { text: "गुरुत्वीय स्थितिज ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धनुष को मोड़ने में किया गया कार्य उसमें प्रत्यास्थ स्थितिज ऊर्जा के रूप में संग्रहीत हो जाता है, जो तीर छोड़ने पर गतिज ऊर्जा में बदल जाती है।"
    },
    {
        question: "प्रश्न 33. नाभिकीय विखंडन में, एक भारी नाभिक के टूटने पर ऊर्जा क्यों निकलती है?",
        answers: shuffle([
            { text: "क्योंकि उत्पाद नाभिकों का कुल द्रव्यमान मूल नाभिक से कम होता है।", correct: true },
            { text: "क्योंकि नए कण बनते हैं।", correct: false },
            { text: "क्योंकि इलेक्ट्रॉन उत्सर्जित होते हैं।", correct: false },
            { text: "क्योंकि ऊर्जा का निर्माण होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान में यह कमी E=mc² के अनुसार ऊर्जा में परिवर्तित हो जाती है, जिससे कुल द्रव्यमान-ऊर्जा संरक्षित रहती है।"
    },
    {
        question: "प्रश्न 34. यदि किसी प्रणाली पर केवल संरक्षी बल कार्य कर रहे हों, तो...",
        answers: shuffle([
            { text: "केवल गतिज ऊर्जा संरक्षित रहती है।", correct: false },
            { text: "केवल स्थितिज ऊर्जा संरक्षित रहती है।", correct: false },
            { text: "गतिज और स्थितिज ऊर्जा का योग संरक्षित रहता है।", correct: true },
            { text: "कुल ऊर्जा घट जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संरक्षी बलों के प्रभाव में, यांत्रिक ऊर्जा एक रूप से दूसरे में बदल सकती है, लेकिन उनका कुल योग (यांत्रिक ऊर्जा) स्थिर रहता है।"
    },
    {
        question: "प्रश्न 35. एक इलेक्ट्रिक मोटर में ऊर्जा रूपांतरण होता है:",
        answers: shuffle([
            { text: "यांत्रिक से विद्युत", correct: false },
            { text: "विद्युत से यांत्रिक", correct: true },
            { text: "ऊष्मा से यांत्रिक", correct: false },
            { text: "विद्युत से ऊष्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोटर विद्युत ऊर्जा का उपभोग करके घूर्णी गति (यांत्रिक ऊर्जा) उत्पन्न करती है, जिसमें ऊर्जा का कुछ भाग ऊष्मा में भी बदलता है।"
    },
    {
        question: "प्रश्न 36. जब पानी उबलकर भाप बनता है, तो दी गई ऊष्मा ऊर्जा कहाँ जाती है?",
        answers: shuffle([
            { text: "यह नष्ट हो जाती है।", correct: false },
            { text: "यह पानी के अणुओं की गतिज ऊर्जा बढ़ाती है।", correct: false },
            { text: "यह अवस्था परिवर्तन (गुप्त ऊष्मा) और अणुओं की स्थितिज ऊर्जा बढ़ाने में खर्च होती है।", correct: true },
            { text: "यह प्रकाश ऊर्जा में बदल जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वथनांक पर, दी गई ऊष्मा तापमान नहीं बढ़ाती, बल्कि द्रव को गैस में बदलने के लिए अणुओं के बीच के बंधनों को तोड़ने में उपयोग होती है।"
    },
    {
        question: "प्रश्न 37. एक बंद कमरे में एक चालू फ्रिज का दरवाजा खुला छोड़ने पर कमरे का तापमान...",
        answers: shuffle([
            { text: "घट जाएगा।", correct: false },
            { text: "बढ़ जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "पहले घटेगा फिर बढ़ेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रिज एक ऊष्मा पंप है जो अंदर से ऊष्मा निकालकर बाहर फेंकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका कंप्रेसर भी काम करते हुए ऊष्मा उत्पन्न करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुल मिलाकर, यह कमरे में ऊष्मा जोड़ता है, जिससे तापमान बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा संरक्षण पर आधारित है।"
    },
    {
        question: "प्रश्न 38. कार के ब्रेक लगाने पर, कार की गतिज ऊर्जा का क्या होता है?",
        answers: shuffle([
            { text: "वह स्थितिज ऊर्जा में बदल जाती है।", correct: false },
            { text: "वह ब्रेक पैड और डिस्क में ऊष्मीय ऊर्जा में बदल जाती है।", correct: true },
            { text: "वह नष्ट हो जाती है।", correct: false },
            { text: "वह रासायनिक ऊर्जा में बदल जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रेक घर्षण का उपयोग करके गतिज ऊर्जा को ऊष्मीय ऊर्जा में परिवर्तित करते हैं, जिससे कार रुक जाती है।"
    },
    {
        question: "प्रश्न 39. किसी पारिस्थितिकी तंत्र में ऊर्जा का प्रवाह...",
        answers: shuffle([
            { text: "चक्रीय होता है।", correct: false },
            { text: "एक-दिशात्मक होता है।", correct: true },
            { text: "ऊर्जा संरक्षित नहीं रहती।", correct: false },
            { text: "ऊर्जा का निर्माण होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा सूर्य से उत्पादकों (पौधों) में और फिर उपभोक्ताओं में एक ही दिशा में प्रवाहित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक स्तर पर ऊष्मा के रूप में ऊर्जा का क्षय होता है।"
    },
    {
        question: "प्रश्न 40. जब कोई उपग्रह पृथ्वी के चारों ओर एक वृत्ताकार कक्षा में घूमता है, तो गुरुत्वाकर्षण बल द्वारा किया गया कार्य...",
        answers: shuffle([
            { text: "धनात्मक होता है।", correct: false },
            { text: "ऋणात्मक होता है।", correct: false },
            { text: "शून्य होता है।", correct: true },
            { text: "उसकी गति पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल हमेशा उपग्रह के वेग की दिशा के लंबवत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब बल और विस्थापन लंबवत होते हैं, तो किया गया कार्य शून्य होता है, और उपग्रह की गतिज ऊर्जा (और गति) स्थिर रहती है।"
    },
    {
        question: "प्रश्न 41. \"ऊर्जा न तो उत्पन्न की जा सकती है और न ही नष्ट की जा सकती है\" - यह कथन है:",
        answers: shuffle([
            { text: "ऊष्मागतिकी का दूसरा नियम", correct: false },
            { text: "न्यूटन का तीसरा नियम", correct: false },
            { text: "ऊर्जा संरक्षण का सिद्धांत", correct: true },
            { text: "संवेग संरक्षण का सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा संरक्षण के नियम की सबसे सामान्य और सटीक परिभाषा है।"
    },
    {
        question: "प्रश्न 42. एक आदर्श स्प्रिंग-द्रव्यमान प्रणाली में, जब द्रव्यमान अपनी अधिकतम विस्थापन की स्थिति में होता है, तो...",
        answers: shuffle([
            { text: "गतिज ऊर्जा अधिकतम होती है।", correct: false },
            { text: "स्थितिज ऊर्जा शून्य होती है।", correct: false },
            { text: "स्थितिज ऊर्जा अधिकतम होती है।", correct: true },
            { text: "कुल ऊर्जा शून्य होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकतम विस्थापन पर, द्रव्यमान क्षण भर के लिए रुक जाता है, इसलिए गतिज ऊर्जा शून्य होती है और सारी यांत्रिक ऊर्जा स्प्रिंग में स्थितिज ऊर्जा के रूप में संग्रहीत होती है।"
    },
    {
        question: "प्रश्न 43. निम्नलिखित में से कौन सा बल एक संरक्षी बल नहीं है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "स्थिरवैद्युत बल", correct: false },
            { text: "श्यान बल (Viscous Force)", correct: true },
            { text: "स्प्रिंग का बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्यान बल और घर्षण बल असंरक्षी बल हैं क्योंकि वे यांत्रिक ऊर्जा को ऊष्मा में परिवर्तित करते हैं और उनके द्वारा किया गया कार्य पथ पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 44. एक ट्रांसफार्मर किस सिद्धांत पर काम करता है?",
        answers: shuffle([
            { text: "ऊर्जा निर्माण", correct: false },
            { text: "ऊर्जा क्षय", correct: false },
            { text: "ऊर्जा संरक्षण और विद्युत चुम्बकीय प्रेरण", correct: true },
            { text: "संवेग संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श ट्रांसफार्मर में, प्राथमिक कुंडली में शक्ति और द्वितीयक कुंडली में शक्ति बराबर होती है (ऊर्जा संरक्षित रहती है), यद्यपि वोल्टेज और धारा बदल जाते हैं।"
    },
    {
        question: "प्रश्न 45. एक उल्कापिंड जब पृथ्वी के वायुमंडल में प्रवेश करता है, तो वह जलने लगता है। इसका कारण है:",
        answers: shuffle([
            { text: "वायुमंडल में ऑक्सीजन की उपस्थिति।", correct: false },
            { text: "उल्कापिंड की गतिज ऊर्जा का ऊष्मा में बदलना।", correct: true },
            { text: "सूर्य का प्रकाश।", correct: false },
            { text: "उल्कापिंड की रासायनिक संरचना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायु के घर्षण के कारण, उल्कापिंड की अत्यधिक गतिज ऊर्जा बहुत तेजी से ऊष्मीय ऊर्जा में परिवर्तित होती है, जिससे वह जल उठता है।"
    },
    {
        question: "प्रश्न 46. किसी निकाय की आंतरिक ऊर्जा में परिवर्तन किसके बराबर होता है?",
        answers: shuffle([
            { text: "निकाय द्वारा किए गए कार्य के।", correct: false },
            { text: "निकाय को दी गई ऊष्मा के।", correct: false },
            { text: "निकाय को दी गई ऊष्मा और निकाय पर किए गए कार्य के योग के।", correct: true },
            { text: "केवल निकाय के तापमान के।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऊष्मागतिकी का पहला नियम है, जो ऊर्जा संरक्षण का ही एक रूप है।<br><br><i class='fa-solid fa-angles-right icon'></i> ΔU=Q+W."
    },
    {
        question: "प्रश्न 47. ऊर्जा का एक रूप से दूसरे रूप में रूपांतरण के दौरान, कुल ऊर्जा...",
        answers: shuffle([
            { text: "हमेशा घटती है।", correct: false },
            { text: "हमेशा बढ़ती है।", correct: false },
            { text: "संरक्षित रहती है।", correct: true },
            { text: "रूपांतरण के प्रकार पर निर्भर करती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि उपयोगी ऊर्जा (जैसे यांत्रिक ऊर्जा) कम हो सकती है, लेकिन ऊष्मा आदि के रूप में क्षय हुई ऊर्जा को मिलाकर कुल ऊर्जा हमेशा संरक्षित रहती है।"
    },
    {
        question: "प्रश्न 48. एक डायनेमो (जनरेटर) का कार्य सिद्धांत ऊर्जा संरक्षण से कैसे संबंधित है?",
        answers: shuffle([
            { text: "यह यांत्रिक ऊर्जा को नष्ट करके विद्युत ऊर्जा बनाता है।", correct: false },
            { text: "यह यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है।", correct: true },
            { text: "यह विद्युत ऊर्जा का उपभोग करता है।", correct: false },
            { text: "यह ऊर्जा का निर्माण करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायनेमो को घुमाने में लगाई गई यांत्रिक ऊर्जा (कार्य) ही विद्युत ऊर्जा में रूपांतरित होती है, जिससे ऊर्जा संरक्षित रहती है।"
    },
    {
        question: "प्रश्न 49. यदि पृथ्वी पर वायुमंडल न होता, तो मुक्त रूप से गिरती वस्तु की...",
        answers: shuffle([
            { text: "गतिज ऊर्जा संरक्षित रहती।", correct: false },
            { text: "स्थितिज ऊर्जा संरक्षित रहती।", correct: false },
            { text: "यांत्रिक ऊर्जा पूरी तरह से संरक्षित रहती।", correct: true },
            { text: "कुल ऊर्जा शून्य हो जाती।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायु प्रतिरोध (एक असंरक्षी बल) की अनुपस्थिति में, केवल संरक्षी गुरुत्वाकर्षण बल कार्य करता, जिससे कुल यांत्रिक ऊर्जा पूरी तरह संरक्षित रहती।"
    },
    {
        question: "प्रश्न 50. हमारे शरीर में भोजन का पाचन किस ऊर्जा रूपांतरण का उदाहरण है?",
        answers: shuffle([
            { text: "रासायनिक ऊर्जा का यांत्रिक ऊर्जा में", correct: false },
            { text: "ऊष्मीय ऊर्जा का रासायनिक ऊर्जा में", correct: false },
            { text: "रासायनिक ऊर्जा का अन्य रासायनिक रूपों और ऊष्मा में", correct: true },
            { text: "यांत्रिक ऊर्जा का रासायनिक ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाचन जटिल खाद्य अणुओं (रासायनिक ऊर्जा) को सरल अणुओं (जैसे एटीपी, एक अन्य रासायनिक ऊर्जा रूप) में तोड़ता है, इस प्रक्रिया में ऊष्मा भी निकलती है।"
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