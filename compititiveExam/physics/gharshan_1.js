const questions = [
    {
        topHeading: "घर्षण बल पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. घर्षण बल की प्रकृति कैसी होती है?",
        answers: shuffle([
            { text: "यह गति का समर्थन करता है।", correct: false },
            { text: "यह गति का विरोध करता है।", correct: true },
            { text: "यह गति के लंबवत होता है।", correct: false },
            { text: "इसका गति से कोई संबंध नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण एक ऐसा बल है जो दो सतहों के बीच होने वाली सापेक्ष गति का सदैव विरोध करता है।"
    },
    {
        question: "प्रश्न 2. घर्षण बल किस प्रकार का बल है?",
        answers: shuffle([
            { text: "असंपर्क बल", correct: false },
            { text: "संपर्क बल", correct: true },
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "नाभिकीय बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल केवल तभी उत्पन्न होता है जब दो सतहें एक दूसरे के भौतिक संपर्क में आती हैं।"
    },
    {
        question: "प्रश्न 3. घर्षण बल की दिशा हमेशा होती है:",
        answers: shuffle([
            { text: "वस्तु की गति की दिशा में।", correct: false },
            { text: "वस्तु पर लगाए गए बल की दिशा में।", correct: false },
            { text: "वस्तु की संभावित या वास्तविक गति की विपरीत दिशा में।", correct: true },
            { text: "सतह के लंबवत।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल का कार्य गति का विरोध करना है,<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह हमेशा गति की दिशा के विपरीत कार्य करता है।"
    },
    {
        question: "प्रश्न 4. निम्नलिखित में से कौन सा घर्षण का प्रकार नहीं है?",
        answers: shuffle([
            { text: "स्थैतिक घर्षण", correct: false },
            { text: "सर्पी घर्षण", correct: false },
            { text: "लोटनिक घर्षण", correct: false },
            { text: "अभिकेंद्रीय घर्षण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थैतिक, सर्पी (गतिज), और लोटनिक घर्षण के मुख्य प्रकार हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अभिकेंद्रीय एक बल है, घर्षण का प्रकार नहीं।"
    },
    {
        question: "प्रश्न 5. जब कोई वस्तु किसी सतह पर चलने की कोशिश करती है लेकिन चलती नहीं है, तो कौन सा घर्षण बल कार्य करता है?",
        answers: shuffle([
            { text: "स्थैतिक घर्षण", correct: true },
            { text: "सर्पी घर्षण", correct: false },
            { text: "लोटनिक घर्षण", correct: false },
            { text: "कोई घर्षण नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थैतिक घर्षण तब कार्य करता है जब वस्तु पर बल लगाया जाता है लेकिन वह विरामावस्था में ही रहती है।"
    },
    {
        question: "प्रश्न 6. घर्षण बल का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "सतहों का चुंबकीय गुण।", correct: false },
            { text: "सतहों का विद्युतीय गुण।", correct: false },
            { text: "सतहों की अनियमितताएँ (खुरदरापन)।", correct: true },
            { text: "सतहों का तापमान।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आणविक स्तर पर, दो सतहों के बीच की अनियमितताएँ आपस में फंस जाती हैं (अंतःपाशन), जो घर्षण का मुख्य कारण है।"
    },
    {
        question: "प्रश्न 7. किस प्रकार के घर्षण का मान सबसे अधिक होता है?",
        answers: shuffle([
            { text: "स्थैतिक घर्षण", correct: true },
            { text: "सर्पी घर्षण", correct: false },
            { text: "लोटनिक घर्षण", correct: false },
            { text: "सभी बराबर होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु को विरामावस्था से गति में लाना सबसे कठिन होता है क्योंकि स्थैतिक घर्षण का अधिकतम मान (सीमांत घर्षण) अन्य घर्षणों से अधिक होता है।"
    },
    {
        question: "प्रश्न 8. किस प्रकार के घर्षण का मान सबसे कम होता है?",
        answers: shuffle([
            { text: "स्थैतिक घर्षण", correct: false },
            { text: "सर्पी घर्षण", correct: false },
            { text: "लोटनिक घर्षण", correct: true },
            { text: "सभी बराबर होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु को लुढ़काना उसे खिसकाने से बहुत आसान होता है,<br><br><i class='fa-solid fa-angles-right icon'></i> क्योंकि लोटनिक घर्षण का मान सबसे कम होता है।"
    },
    {
        question: "प्रश्न 9. वाहनों के टायरों में खांचे (treads) क्यों बनाए जाते हैं?",
        answers: shuffle([
            { text: "घर्षण कम करने के लिए।", correct: false },
            { text: "घर्षण बढ़ाने के लिए।", correct: true },
            { text: "टायर को सुंदर बनाने के लिए।", correct: false },
            { text: "हवा का दबाव कम करने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये खांचे सड़क के साथ बेहतर पकड़ प्रदान करते हैं, खासकर गीली सतहों पर,<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे घर्षण बढ़ता है और वाहन को फिसलने से रोका जा सकता है।"
    },
    {
        question: "प्रश्न 10. कैरम बोर्ड पर पाउडर का छिड़काव क्यों किया जाता है?",
        answers: shuffle([
            { text: "घर्षण बढ़ाने के लिए।", correct: false },
            { text: "घर्षण कम करने के लिए।", correct: true },
            { text: "गोटियों को साफ करने के लिए।", correct: false },
            { text: "बोर्ड को ठंडा रखने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाउडर एक स्नेहक के रूप में कार्य करता है,<br><br><i class='fa-solid fa-angles-right icon'></i> जो सतहों के बीच की अनियमितताओं को भरकर घर्षण को कम करता है, जिससे गोटियाँ आसानी से फिसलती हैं।"
    },
    {
        question: "प्रश्न 11. घर्षण बल किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "सतहों की प्रकृति पर।", correct: false },
            { text: "अभिलंब प्रतिक्रिया बल पर।", correct: false },
            { text: "संपर्क में सतहों के क्षेत्रफल पर।", correct: true },
            { text: "वस्तु के भार पर (क्षैतिज सतह पर)।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य परिस्थितियों में, घर्षण बल संपर्क सतहों के क्षेत्रफल से लगभग स्वतंत्र होता है।"
    },
    {
        question: "प्रश्न 12. मशीनों में बॉल बेयरिंग का उपयोग क्यों किया जाता है?",
        answers: shuffle([
            { text: "सर्पी घर्षण को लोटनिक घर्षण में बदलने के लिए।", correct: true },
            { text: "लोटनिक घर्षण को सर्पी घर्षण में बदलने के लिए।", correct: false },
            { text: "मशीन का वजन बढ़ाने के लिए।", correct: false },
            { text: "स्थैतिक घर्षण को बढ़ाने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बॉल बेयरिंग घूमने वाले भागों को फिसलने के बजाय लुढ़कने देती हैं,<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे घर्षण और ऊर्जा की हानि बहुत कम हो जाती है।"
    },
    {
        question: "प्रश्न 13. स्थैतिक घर्षण एक ________ बल है।",
        answers: shuffle([
            { text: "नियत", correct: false },
            { text: "स्व-समायोजक", correct: true },
            { text: "शून्य", correct: false },
            { text: "असंपर्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थैतिक घर्षण का मान लगाए गए बल के अनुसार खुद को तब तक समायोजित करता है जब तक कि वह अपने अधिकतम (सीमांत) मान तक नहीं पहुंच जाता।"
    },
    {
        question: "प्रश्न 14. सीमांत घर्षण (Limiting Friction) क्या है?",
        answers: shuffle([
            { text: "गतिज घर्षण का न्यूनतम मान।", correct: false },
            { text: "स्थैतिक घर्षण का अधिकतम मान।", correct: true },
            { text: "लोटनिक घर्षण का मान।", correct: false },
            { text: "शून्य घर्षण की स्थिति।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वह अधिकतम घर्षण बल है जो कोई वस्तु गतिमान होने से ठीक पहले अनुभव करती है।"
    },
    {
        question: "प्रश्न 15. घर्षण के कारण कौन सी ऊर्जा उत्पन्न होती है?",
        answers: shuffle([
            { text: "प्रकाश ऊर्जा", correct: false },
            { text: "ध्वनि ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: true },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण के विरुद्ध किया गया कार्य मुख्य रूप से ऊष्मा में परिवर्तित हो जाता है,<br><br><i class='fa-solid fa-angles-right icon'></i> यही कारण है कि रगड़ने से सतहें गर्म हो जाती हैं।"
    },
    {
        question: "प्रश्न 16. तरल पदार्थों (द्रव और गैस) द्वारा लगाए गए घर्षण बल को क्या कहते हैं?",
        answers: shuffle([
            { text: "श्यानता या कर्षण", correct: true },
            { text: "पृष्ठ तनाव", correct: false },
            { text: "उत्प्लावन", correct: false },
            { text: "दाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरल पदार्थों में गति का विरोध करने वाले बल को श्यान कर्षण या ड्रैग कहते हैं,<br><br><i class='fa-solid fa-angles-right icon'></i> जो तरल की श्यानता का परिणाम है।"
    },
    {
        question: "प्रश्न 17. घर्षण गुणांक (Coefficient of Friction) की इकाई क्या है?",
        answers: shuffle([
            { text: "न्यूटन", correct: false },
            { text: "मीटर/सेकंड", correct: false },
            { text: "न्यूटन/मीटर", correct: false },
            { text: "यह एक विमाहीन राशि है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण गुणांक, घर्षण बल और अभिलंब बल का अनुपात होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दो बलों का अनुपात होने के कारण इसकी कोई इकाई नहीं होती।"
    },
    {
        question: "प्रश्न 18. हमारा चलना किस कारण संभव हो पाता है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण के कारण", correct: false },
            { text: "जड़त्व के कारण", correct: false },
            { text: "घर्षण के कारण", correct: true },
            { text: "दाब के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम अपने पैरों से जमीन को पीछे की ओर धकेलते हैं,<br><br><i class='fa-solid fa-angles-right icon'></i> और घर्षण बल प्रतिक्रिया के रूप में हमें आगे की ओर धकेलता है।"
    },
    {
        question: "प्रश्न 19. केले के छिलके पर पैर पड़ने से फिसलने की संभावना क्यों होती है?",
        answers: shuffle([
            { text: "क्योंकि घर्षण बहुत बढ़ जाता है।", correct: false },
            { text: "क्योंकि घर्षण बहुत कम हो जाता है।", correct: true },
            { text: "क्योंकि छिलका नरम होता है।", correct: false },
            { text: "क्योंकि गुरुत्वाकर्षण बढ़ जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केले का छिलका एक स्नेहक की तरह काम करता है,<br><br><i class='fa-solid fa-angles-right icon'></i> जो हमारे पैर और जमीन के बीच घर्षण गुणांक को बहुत कम कर देता है।"
    },
    {
        question: "प्रश्न 20. सर्पी घर्षण का मान स्थैतिक घर्षण के अधिकतम मान से:",
        answers: shuffle([
            { text: "हमेशा अधिक होता है।", correct: false },
            { text: "हमेशा कम होता है।", correct: true },
            { text: "हमेशा बराबर होता है।", correct: false },
            { text: "कभी कम कभी अधिक होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बार जब वस्तु गतिमान हो जाती है, तो सतहों की अनियमितताओं को एक-दूसरे में फंसने के लिए कम समय मिलता है,<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए गतिज घर्षण कम हो जाता है।"
    },
    {
        question: "प्रश्न 21. स्नेहक (Lubricants) का कार्य क्या है?",
        answers: shuffle([
            { text: "दो सतहों के बीच एक पतली परत बनाना।", correct: false },
            { text: "घर्षण को कम करना।", correct: false },
            { text: "गर्मी को दूर करना।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्नेहक (जैसे तेल, ग्रीस) सतहों को सीधे संपर्क में आने से रोकते हैं, घर्षण को कम करते हैं और उत्पन्न ऊष्मा को अवशोषित भी करते हैं।"
    },
    {
        question: "प्रश्न 22. घर्षण बल किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "सतहों की प्रकृति (खुरदरापन या चिकनापन) पर।", correct: true },
            { text: "वस्तु के वेग पर।", correct: false },
            { text: "वस्तु के आकार पर।", correct: false },
            { text: "संपर्क के समय पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सतहें जितनी अधिक खुरदरी होंगी, उनके बीच घर्षण गुणांक और घर्षण बल उतना ही अधिक होगा।"
    },
    {
        question: "प्रश्न 23. घर्षण को \"एक आवश्यक बुराई\" क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि यह हमेशा हानिकारक होता है।", correct: false },
            { text: "क्योंकि यह हमेशा लाभदायक होता है।", correct: false },
            { text: "क्योंकि यह कुछ स्थितियों में लाभदायक और कुछ में हानिकारक है।", correct: true },
            { text: "क्योंकि इसे समाप्त नहीं किया जा सकता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चलने, लिखने के लिए यह आवश्यक है (लाभदायक),<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन यह मशीनों को घिसता है और ऊर्जा बर्बाद करता है (हानिकारक)।"
    },
    {
        question: "प्रश्न 24. यदि घर्षण न हो तो क्या होगा?",
        answers: shuffle([
            { text: "हम चल नहीं पाएंगे।", correct: false },
            { text: "हम किसी वस्तु को पकड़ नहीं पाएंगे।", correct: false },
            { text: "हम लिख नहीं पाएंगे।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण के बिना, हमारे दैनिक जीवन के अधिकांश कार्य असंभव हो जाएंगे।"
    },
    {
        question: "प्रश्न 25. जब कोई वस्तु किसी नत समतल पर फिसलने वाली होती है, तो घर्षण कोण (angle of friction) और विराम कोण (angle of repose) के बीच क्या संबंध होता है?",
        answers: shuffle([
            { text: "घर्षण कोण अधिक होता है।", correct: false },
            { text: "विराम कोण अधिक होता है।", correct: false },
            { text: "वे दोनों बराबर होते हैं।", correct: true },
            { text: "उनमें कोई संबंध नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विराम कोण वह अधिकतम झुकाव कोण है जिस पर वस्तु बिना फिसले रह सकती है,<br><br><i class='fa-solid fa-angles-right icon'></i> और यह संख्यात्मक रूप से घर्षण कोण के बराबर होता है।"
    },
    {
        question: "प्रश्न 26. हवाई जहाज और कारों को एक विशेष सुव्यवस्थित (streamlined) आकार क्यों दिया जाता है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण को कम करने के लिए।", correct: false },
            { text: "तरल घर्षण (वायु कर्षण) को कम करने के लिए।", correct: true },
            { text: "जड़त्व को बढ़ाने के लिए।", correct: false },
            { text: "वाहन को भारी बनाने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुव्यवस्थित आकार हवा को आसानी से वाहन के चारों ओर से गुजरने देता है,<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे हवा का प्रतिरोध (कर्षण) कम हो जाता है।"
    },
    {
        question: "प्रश्न 27. स्थैतिक घर्षण गुणांक और गतिज घर्षण गुणांक में से कौन सा आमतौर पर बड़ा होता है?",
        answers: shuffle([
            { text: "स्थैतिक घर्षण गुणांक।", correct: true },
            { text: "गतिज घर्षण गुणांक।", correct: false },
            { text: "दोनों बराबर होते हैं।", correct: false },
            { text: "यह वस्तु पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि स्थैतिक घर्षण का अधिकतम मान गतिज घर्षण से अधिक होता है,<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए स्थैतिक घर्षण गुणांक भी गतिज घर्षण गुणांक से बड़ा होता है।"
    },
    {
        question: "प्रश्न 28. घर्षण बल मूल रूप से किस प्रकार का बल है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "नाभिकीय बल", correct: false },
            { text: "विद्युत चुंबकीय बल", correct: true },
            { text: "एक मौलिक बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आणविक स्तर पर, घर्षण संपर्क में सतहों के परमाणुओं के आवेशित कणों के बीच विद्युत चुंबकीय अंतःक्रियाओं का परिणाम है।"
    },
    {
        question: "प्रश्न 29. माचिस की तीली को माचिस की डिब्बी पर रगड़ने से आग क्यों जलती है?",
        answers: shuffle([
            { text: "ऊष्मीय ऊर्जा के कारण।", correct: false },
            { text: "घर्षण के कारण।", correct: false },
            { text: "रासायनिक अभिक्रिया के कारण।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण से ऊष्मा उत्पन्न होती है,<br><br><i class='fa-solid fa-angles-right icon'></i> जो तीली के सिरे पर मौजूद रसायनों के बीच अभिक्रिया शुरू करने के लिए आवश्यक सक्रियण ऊर्जा प्रदान करती है,<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे आग जलती है।"
    },
    {
        question: "प्रश्न 30. बर्फ पर चलना क्यों मुश्किल होता है?",
        answers: shuffle([
            { text: "क्योंकि बर्फ ठंडी होती है।", correct: false },
            { text: "क्योंकि बर्फ और हमारे जूतों के बीच घर्षण बहुत कम होता है।", correct: true },
            { text: "क्योंकि बर्फ पर दाब अधिक लगता है।", correct: false },
            { text: "क्योंकि बर्फ का घनत्व कम होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण गुणांक कम होने के कारण आवश्यक पकड़ नहीं मिल पाती, जिससे फिसलने का खतरा रहता है।"
    },
    {
        question: "प्रश्न 31. ब्रेक लगाने पर वाहन का रुकना किस बल के कारण संभव होता है?",
        answers: shuffle([
            { text: "जड़त्व", correct: false },
            { text: "गुरुत्वाकर्षण", correct: false },
            { text: "प्रतिक्रिया बल", correct: false },
            { text: "घर्षण बल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रेक पैड पहियों पर घर्षण लगाते हैं,<br><br><i class='fa-solid fa-angles-right icon'></i> और टायर सड़क पर घर्षण लगाते हैं, जो वाहन की गति का विरोध करके उसे रोकते हैं।"
    },
    {
        question: "प्रश्न 32. यदि एक बक्से को खुरदरी सतह पर धकेला जाता है, तो घर्षण बल की दिशा क्या होगी?",
        answers: shuffle([
            { text: "धकेलने की दिशा में।", correct: false },
            { text: "धकेलने की दिशा के विपरीत।", correct: true },
            { text: "सतह के ऊपर की ओर।", correct: false },
            { text: "सतह के नीचे की ओर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण हमेशा गति या गति करने के प्रयास की दिशा के विपरीत कार्य करता है।"
    },
    {
        question: "प्रश्न 33. दो सतहों के बीच अभिलंब बल बढ़ाने पर घर्षण बल:",
        answers: shuffle([
            { text: "घटता है।", correct: false },
            { text: "बढ़ता है।", correct: true },
            { text: "अपरिवर्तित रहता है।", correct: false },
            { text: "शून्य हो जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल (f = µN) अभिलंब बल (N) के सीधे समानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अभिलंब बल बढ़ाने से सतहें अधिक मजबूती से दबती हैं, जिससे घर्षण बढ़ता है।"
    },
    {
        question: "प्रश्न 34. मशीनों के पुर्जे घिस क्यों जाते हैं?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण के कारण।", correct: false },
            { text: "लगातार उपयोग के कारण।", correct: false },
            { text: "घर्षण के कारण।", correct: true },
            { text: "दाब के कारण।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चलने वाले पुर्जों के बीच लगातार घर्षण से ऊष्मा उत्पन्न होती है और सतहों से पदार्थ हटता है, जिसे घिसाव कहते हैं।"
    },
    {
        question: "प्रश्न 35. घर्षण बल का एक लाभ यह है कि यह:",
        answers: shuffle([
            { text: "ऊर्जा की बचत करता है।", correct: false },
            { text: "वस्तुओं को पकड़ने में मदद करता है।", correct: true },
            { text: "मशीनों को ठंडा रखता है।", correct: false },
            { text: "गति को बढ़ाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारे हाथों और वस्तु के बीच घर्षण के कारण ही हम किसी चीज को पकड़ पाते हैं।"
    },
    {
        question: "प्रश्न 36. घर्षण बल का एक नुकसान यह है कि यह:",
        answers: shuffle([
            { text: "ऊर्जा का क्षय करता है।", correct: true },
            { text: "हमें चलने में मदद करता है।", correct: false },
            { text: "आग जलाने में मदद करता है।", correct: false },
            { text: "वस्तुओं को उनकी जगह पर रखता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मशीनों में, उपयोगी ऊर्जा का एक बड़ा हिस्सा घर्षण पर काबू पाने में बर्बाद हो जाता है,<br><br><i class='fa-solid fa-angles-right icon'></i> जो ऊष्मा के रूप में प्रकट होता है।"
    },
    {
        question: "प्रश्न 37. पॉलिश की हुई सतहों पर घर्षण कम क्यों होता है?",
        answers: shuffle([
            { text: "क्योंकि वे भारी हो जाती हैं।", correct: false },
            { text: "क्योंकि वे नरम हो जाती हैं।", correct: false },
            { text: "क्योंकि सतह की अनियमितताएँ कम हो जाती हैं।", correct: true },
            { text: "क्योंकि उनका क्षेत्रफल बढ़ जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पॉलिश करने से सतह चिकनी हो जाती है,<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे अंतःपाशन (interlocking) कम हो जाता है और घर्षण घट जाता है।"
    },
    {
        question: "प्रश्न 38. लोटनिक घर्षण क्यों उत्पन्न होता है?",
        answers: shuffle([
            { text: "क्योंकि वस्तुएँ पूरी तरह से दृढ़ नहीं होती हैं।", correct: false },
            { text: "सतहों के दबने और विकृत होने के कारण।", correct: false },
            { text: "आसंजक बलों के कारण।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई वस्तु लुढ़कती है, तो संपर्क बिंदु पर सतह थोड़ी विकृत हो जाती है,<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे एक छोटा सा प्रतिरोध उत्पन्न होता है जिसे लोटनिक घर्षण कहते हैं।"
    },
    {
        question: "प्रश्न 39. एक भारी बक्से को धकेलने की अपेक्षा खींचना आसान क्यों होता है?",
        answers: shuffle([
            { text: "क्योंकि खींचने पर घर्षण कम हो जाता है।", correct: true },
            { text: "क्योंकि खींचने पर द्रव्यमान कम हो जाता है।", correct: false },
            { text: "क्योंकि गुरुत्वाकर्षण कम हो जाता है।", correct: false },
            { text: "यह एक भ्रम है, दोनों समान हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब हम किसी वस्तु को एक कोण पर ऊपर की ओर खींचते हैं, तो हमारे बल का एक ऊर्ध्वाधर घटक अभिलंब बल को कम कर देता है,<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे घर्षण बल भी कम हो जाता है।"
    },
    {
        question: "प्रश्न 40. पैराशूट का उपयोग करके कोई व्यक्ति सुरक्षित रूप से नीचे उतरता है क्योंकि पैराशूट:",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण को समाप्त कर देता है।", correct: false },
            { text: "व्यक्ति के द्रव्यमान को कम कर देता है।", correct: false },
            { text: "हवा के प्रतिरोध (कर्षण बल) को बहुत बढ़ा देता है।", correct: true },
            { text: "उत्प्लावन बल प्रदान करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़ा सतह क्षेत्रफल हवा के घर्षण को इतना बढ़ा देता है कि व्यक्ति एक धीमी और सुरक्षित अंतिम वेग (terminal velocity) से नीचे आता है।"
    },
    {
        question: "प्रश्न 41. गीली सतह पर घर्षण सूखी सतह की तुलना में कम क्यों होता है?",
        answers: shuffle([
            { text: "क्योंकि पानी सतह को चिकना बना देता है।", correct: false },
            { text: "पानी एक स्नेहक के रूप में कार्य करता है।", correct: false },
            { text: "पानी सतहों के बीच सीधे संपर्क को कम करता है।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी की पतली परत सतहों के बीच के अंतःपाशन को कम कर देती है,<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे घर्षण गुणांक घट जाता है।"
    },
    {
        question: "प्रश्न 42. बिना घर्षण के वृत्तीय गति में मुड़ना:",
        answers: shuffle([
            { text: "आसान होगा।", correct: false },
            { text: "संभव नहीं होगा।", correct: true },
            { text: "धीमी गति से संभव होगा।", correct: false },
            { text: "तेज गति से संभव होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृत्तीय गति के लिए आवश्यक अभिकेंद्रीय बल अक्सर घर्षण द्वारा ही प्रदान किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बिना घर्षण के, वाहन सीधा फिसल जाएगा।"
    },
    {
        question: "प्रश्न 43. घर्षण बल द्वारा किया गया कार्य हमेशा होता है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: true },
            { text: "शून्य", correct: false },
            { text: "धनात्मक या ऋणात्मक हो सकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि घर्षण बल हमेशा विस्थापन की दिशा के विपरीत होता है, उसके द्वारा किया गया कार्य (बल × विस्थापन × cos 180°) हमेशा ऋणात्मक होता है।"
    },
    {
        question: "प्रश्न 44. स्थैतिक घर्षण द्वारा किया गया कार्य:",
        answers: shuffle([
            { text: "हमेशा ऋणात्मक होता है।", correct: false },
            { text: "हमेशा धनात्मक होता है।", correct: false },
            { text: "हमेशा शून्य होता है।", correct: false },
            { text: "धनात्मक, ऋणात्मक या शून्य हो सकता है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि स्थैतिक घर्षण किसी वस्तु को त्वरित करता है (जैसे कन्वेयर बेल्ट पर रखा बक्सा), तो कार्य धनात्मक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि यह गति का विरोध करता है तो ऋणात्मक।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि कोई विस्थापन नहीं है, तो शून्य।"
    },
    {
        question: "प्रश्न 45. जब हम लिखते हैं, तो कागज और कलम की नोक के बीच ________ कार्य करता है।",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण", correct: false },
            { text: "जड़त्व", correct: false },
            { text: "घर्षण", correct: true },
            { text: "तनाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण के कारण ही स्याही या ग्रेफाइट कलम से कागज पर स्थानांतरित हो पाता है।"
    },
    {
        question: "प्रश्न 46. एक अंतरिक्ष यान को अंतरिक्ष में एक बार गति देने के बाद लगातार चलाने के लिए ईंधन की आवश्यकता क्यों नहीं होती?",
        answers: shuffle([
            { text: "क्योंकि वहाँ गुरुत्वाकर्षण नहीं है।", correct: false },
            { text: "क्योंकि वहाँ कोई घर्षण या वायु प्रतिरोध नहीं है।", correct: true },
            { text: "क्योंकि यान का द्रव्यमान कम हो जाता है।", correct: false },
            { text: "क्योंकि वहाँ दाब बहुत कम है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के पहले नियम (जड़त्व) के अनुसार, घर्षण जैसे बाहरी बलों की अनुपस्थिति में, वस्तु अपनी एकसमान गति को बनाए रखती है।"
    },
    {
        question: "प्रश्न 47. एक खुरदरी सतह पर, एक वस्तु को स्थिर रखने के लिए आवश्यक बल उसे एकसमान गति से चलाने के लिए आवश्यक बल से:",
        answers: shuffle([
            { text: "कम होता है।", correct: false },
            { text: "अधिक होता है।", correct: true },
            { text: "बराबर होता है।", correct: false },
            { text: "शून्य होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वस्तु को गति में लाने के लिए सीमांत (अधिकतम स्थैतिक) घर्षण पर काबू पाना पड़ता है,<br><br><i class='fa-solid fa-angles-right icon'></i> जो गतिज घर्षण से अधिक होता है।"
    },
    {
        question: "प्रश्न 48. तरल का घर्षण (कर्षण) किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "वस्तु के आकार पर।", correct: false },
            { text: "वस्तु की गति पर।", correct: false },
            { text: "तरल की प्रकृति (श्यानता) पर।", correct: false },
            { text: "ये सभी पर।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरल घर्षण इन सभी कारकों पर निर्भर करता है, जो इसे ठोस घर्षण से अधिक जटिल बनाता है।"
    },
    {
        question: "प्रश्न 49. सिन्थेटिक एथलेटिक ट्रैक क्यों बनाए जाते हैं?",
        answers: shuffle([
            { text: "घर्षण को बहुत कम करने के लिए।", correct: false },
            { text: "दौड़ने के लिए एक नियंत्रित और उच्च घर्षण सतह प्रदान करने के लिए।", correct: true },
            { text: "केवल सौंदर्य के लिए।", correct: false },
            { text: "लागत कम करने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये ट्रैक धावकों को फिसलने के बिना तेजी से दौड़ने के लिए आवश्यक पकड़ (घर्षण) प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 50. एक झुके हुए मोड़ (banked turn) पर, आवश्यक अभिकेंद्रीय बल का एक हिस्सा किससे प्राप्त होता है?",
        answers: shuffle([
            { text: "वाहन के भार से।", correct: false },
            { text: "अभिलंब प्रतिक्रिया बल के क्षैतिज घटक से।", correct: true },
            { text: "हवा के प्रतिरोध से।", correct: false },
            { text: "जड़त्व से।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सड़क को झुकाने से, अभिलंब बल का एक क्षैतिज घटक केंद्र की ओर कार्य करने लगता है,<br><br><i class='fa-solid fa-angles-right icon'></i> जो घर्षण के साथ मिलकर अभिकेंद्रीय बल प्रदान करता है।"
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