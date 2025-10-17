const questions = [
    {
        topHeading: "घर्षण बल पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. दो सूखी सतहों के बीच घर्षण, दो गीली सतहों के बीच घर्षण से:",
        answers: shuffle([
            { text: "हमेशा कम होता है।", correct: false },
            { text: "हमेशा अधिक होता है।", correct: true },
            { text: "बराबर होता है।", correct: false },
            { text: "तुलना नहीं की जा सकती।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी एक स्नेहक के रूप में कार्य करके घर्षण को कम करता है।"
    },
    {
        question: "प्रश्न 2. घर्षण कम करने के लिए उपयोग किए जाने वाले पदार्थ कहलाते हैं:",
        answers: shuffle([
            { text: "अपघर्षक", correct: false },
            { text: "स्नेहक", correct: true },
            { text: "चालक", correct: false },
            { text: "कुचालक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्नेहक (Lubricants) वे पदार्थ हैं जो सतहों के बीच घर्षण को कम करते हैं।"
    },
    {
        question: "प्रश्न 3. जब एक टायर बिना फिसले लुढ़कता है, तो जमीन और टायर के बीच संपर्क बिंदु पर कौन सा घर्षण कार्य करता है?",
        answers: shuffle([
            { text: "गतिज घर्षण", correct: false },
            { text: "स्थैतिक घर्षण", correct: true },
            { text: "लोटनिक घर्षण", correct: false },
            { text: "कोई घर्षण नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुद्ध लुढ़कन में, संपर्क बिंदु जमीन के सापेक्ष क्षण भर के लिए स्थिर रहता है, इसलिए वहाँ स्थैतिक घर्षण कार्य करता है जो कार को आगे बढ़ाता है।"
    },
    {
        question: "प्रश्न 4. घर्षण बल संपर्क सतह के ________ कार्य करता है।",
        answers: shuffle([
            { text: "लंबवत", correct: false },
            { text: "समांतर", correct: true },
            { text: "45 डिग्री के कोण पर", correct: false },
            { text: "किसी भी कोण पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल हमेशा सतह के अनुदिश (समांतर) होता है, जबकि अभिलंब बल लंबवत होता है।"
    },
    {
        question: "प्रश्न 5. एक असंरक्षी बल (non-conservative force) का उदाहरण है:",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "स्थिरविद्युत बल", correct: false },
            { text: "घर्षण बल", correct: true },
            { text: "चुंबकीय बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असंरक्षी बल द्वारा किया गया कार्य पथ पर निर्भर करता है<br><br><i class='fa-solid fa-angles-right icon'></i> और यह यांत्रिक ऊर्जा को संरक्षित नहीं रखता (ऊष्मा में बदल देता है)।"
    },
    {
        question: "प्रश्न 6. नट और बोल्ट को कसकर एक साथ रखने में कौन सा बल मदद करता है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "चुंबकीय बल", correct: false },
            { text: "घर्षण बल", correct: true },
            { text: "तनाव बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूड़ियों के बीच स्थैतिक घर्षण उन्हें अपने आप ढीला होने से रोकता है।"
    },
    {
        question: "प्रश्न 7. यदि किसी वस्तु पर अभिलंब बल शून्य हो, तो घर्षण बल कितना होगा?",
        answers: shuffle([
            { text: "अधिकतम", correct: false },
            { text: "न्यूनतम", correct: false },
            { text: "शून्य", correct: true },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि घर्षण बल (f = µN) अभिलंब बल (N) पर निर्भर करता है, यदि N=0 है, तो घर्षण बल भी शून्य होगा (जैसे अंतरिक्ष में)।"
    },
    {
        question: "प्रश्न 8. एक बच्चा फिसलपट्टी पर नीचे की ओर फिसलता है। उसकी गति का विरोध करने वाला बल है:",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "अभिलंब बल", correct: false },
            { text: "गतिज घर्षण बल", correct: true },
            { text: "स्थैतिक घर्षण बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि बच्चा गति में है, इसलिए उसकी गति का विरोध करने वाला बल सर्पी या गतिज घर्षण है।"
    },
    {
        question: "प्रश्न 9. घर्षण के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "ट्राइबोलॉजी", correct: true },
            { text: "ऊष्मागतिकी", correct: false },
            { text: "प्रकाशिकी", correct: false },
            { text: "ध्वनिकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्राइबोलॉजी विज्ञान और इंजीनियरिंग की वह शाखा है जो परस्पर क्रिया करने वाली सतहों का अध्ययन करती है, जिसमें घर्षण, स्नेहन और घिसाव शामिल हैं।"
    },
    {
        question: "प्रश्न 10. लोटनिक घर्षण का गुणांक, सर्पी घर्षण के गुणांक से:",
        answers: shuffle([
            { text: "बहुत अधिक होता है।", correct: false },
            { text: "बहुत कम होता है।", correct: true },
            { text: "लगभग बराबर होता है।", correct: false },
            { text: "हमेशा दोगुना होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यही कारण है कि पहियों का आविष्कार एक महत्वपूर्ण तकनीकी प्रगति थी।"
    },
    {
        question: "प्रश्न 11. 'चिपकना-और-फिसलना' (stick-slip) की घटना किस कारण होती है?",
        answers: shuffle([
            { text: "स्थैतिक घर्षण का गतिज घर्षण से अधिक होने के कारण।", correct: true },
            { text: "गतिज घर्षण का स्थैतिक घर्षण से अधिक होने के कारण।", correct: false },
            { text: "लोटनिक घर्षण के कारण।", correct: false },
            { text: "स्नेहक की उपस्थिति के कारण।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वस्तु तब तक चिपकी रहती है जब तक बल स्थैतिक घर्षण से अधिक न हो जाए, फिर वह अचानक फिसलती है (जहाँ कम गतिज घर्षण कार्य करता है),<br><br><i class='fa-solid fa-angles-right icon'></i> और यह चक्र दोहराया जाता है।"
    },
    {
        question: "प्रश्न 12. क्या घर्षण के बिना आग जलाई जा सकती है?",
        answers: shuffle([
            { text: "हाँ, हमेशा।", correct: false },
            { text: "नहीं, कभी नहीं।", correct: false },
            { text: "हाँ, लेंस या रासायनिक अभिक्रियाओं से।", correct: true },
            { text: "केवल बिजली से।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि दो पत्थरों को रगड़कर आग जलाना घर्षण का उपयोग है, लेकिन आग जलाने के अन्य तरीके भी हैं जिनमें घर्षण शामिल नहीं है।"
    },
    {
        question: "प्रश्न 13. ब्रेक शू (brake shoe) बनाने के लिए उपयोग की जाने वाली सामग्री का होना चाहिए:",
        answers: shuffle([
            { text: "कम घर्षण गुणांक", correct: false },
            { text: "उच्च घर्षण गुणांक", correct: true },
            { text: "शून्य घर्षण गुणांक", correct: false },
            { text: "बहुत चिकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रेक का उद्देश्य उच्च घर्षण उत्पन्न करके गति को ऊष्मा में बदलना है, इसलिए उच्च घर्षण गुणांक वाली सामग्री का उपयोग किया जाता है।"
    },
    {
        question: "प्रश्न 14. एक्वाप्लानिंग या हाइड्रोप्लानिंग क्या है?",
        answers: shuffle([
            { text: "पानी पर नाव का चलना।", correct: false },
            { text: "गीली सड़क पर टायर और सड़क के बीच पानी की एक परत का बन जाना।", correct: true },
            { text: "पानी के नीचे घर्षण का अध्ययन।", correct: false },
            { text: "स्नेहक के रूप में पानी का उपयोग।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, घर्षण लगभग समाप्त हो जाता है<br><br><i class='fa-solid fa-angles-right icon'></i> और वाहन का स्टीयरिंग और ब्रेक पर से नियंत्रण खत्म हो जाता है।"
    },
    {
        question: "प्रश्न 15. घर्षण कोण (angle of friction) को ________ के बीच के कोण के रूप में परिभाषित किया गया है।",
        answers: shuffle([
            { text: "लगाए गए बल और घर्षण बल", correct: false },
            { text: "अभिलंब प्रतिक्रिया और परिणामी प्रतिक्रिया", correct: true },
            { text: "वस्तु के भार और घर्षण बल", correct: false },
            { text: "सतह और लगाए गए बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अभिलंब प्रतिक्रिया बल और सीमांत घर्षण व अभिलंब प्रतिक्रिया के परिणामी बल के बीच का कोण है।"
    },
    {
        question: "प्रश्न 16. दो सतहों के बीच का घर्षण बल निर्भर करता है:",
        answers: shuffle([
            { text: "सतहों को एक साथ दबाने वाले बल पर।", correct: true },
            { text: "सतहों की सापेक्ष गति पर।", correct: false },
            { text: "संपर्क में सतहों के क्षेत्रफल पर।", correct: false },
            { text: "सतहों के तापमान पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बल अभिलंब प्रतिक्रिया बल है, और घर्षण बल सीधे इसके समानुपाती होता है।"
    },
    {
        question: "प्रश्न 17. कौन सा कथन सत्य है?",
        answers: shuffle([
            { text: "घर्षण हमेशा एक असुविधा है।", correct: false },
            { text: "घर्षण को पूरी तरह से समाप्त किया जा सकता है।", correct: false },
            { text: "घर्षण एक स्व-समायोजक बल है।", correct: true },
            { text: "घर्षण गति उत्पन्न कर सकता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विशेष रूप से स्थैतिक घर्षण के लिए सत्य है, जो लगाए गए बल के बराबर होता है जब तक कि वस्तु गति न करने लगे।"
    },
    {
        question: "प्रश्न 18. क्या घर्षण बल किसी वस्तु को त्वरित कर सकता है?",
        answers: shuffle([
            { text: "नहीं, कभी नहीं, यह हमेशा गति का विरोध करता है।", correct: false },
            { text: "हाँ, जब यह गति का कारण बनता है।", correct: true },
            { text: "केवल वृत्तीय गति में।", correct: false },
            { text: "केवल निर्वात में।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, जब हम चलते हैं, तो जमीन का स्थैतिक घर्षण ही हमें आगे की ओर त्वरित करता है।"
    },
    {
        question: "प्रश्न 19. कौन सा स्नेहक उच्च तापमान और भारी भार के लिए सबसे उपयुक्त है?",
        answers: shuffle([
            { text: "पानी", correct: false },
            { text: "हवा", correct: false },
            { text: "तेल", correct: false },
            { text: "ठोस स्नेहक (जैसे ग्रेफाइट)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेफाइट जैसी परतदार संरचना वाले ठोस स्नेहक अत्यधिक परिस्थितियों में भी अपनी स्नेहक क्षमता बनाए रख सकते हैं।"
    },
    {
        question: "प्रश्न 20. एक झुके हुए तल पर, वस्तु को नीचे फिसलने से रोकने वाला बल है:",
        answers: shuffle([
            { text: "वस्तु के भार का घटक।", correct: false },
            { text: "स्थैतिक घर्षण।", correct: true },
            { text: "अभिलंब बल।", correct: false },
            { text: "हवा का प्रतिरोध।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वस्तु के भार का एक घटक उसे नीचे की ओर खींचता है,<br><br><i class='fa-solid fa-angles-right icon'></i> और स्थैतिक घर्षण ऊपर की ओर लगकर इसका विरोध करता है।"
    },
    {
        question: "प्रश्न 21. कर्षण (Traction) शब्द का प्रयोग अक्सर किसके संदर्भ में किया जाता है?",
        answers: shuffle([
            { text: "तरल पदार्थों में घर्षण।", correct: false },
            { text: "पहियों और सड़क के बीच उपयोगी घर्षण।", correct: true },
            { text: "मशीनों में घर्षण।", correct: false },
            { text: "हवा में घर्षण।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्षण वह घर्षण है जो वाहन को बिना फिसले आगे बढ़ने, मुड़ने और रुकने की अनुमति देता है।"
    },
    {
        question: "प्रश्न 22. एक लकड़ी का गुटका एक क्षैतिज सतह पर रखा है। उस पर लगने वाला अभिलंब बल किसके बराबर है?",
        answers: shuffle([
            { text: "घर्षण बल के", correct: false },
            { text: "गुटके के भार के", correct: true },
            { text: "लगाए गए बल के", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षैतिज सतह पर, ऊपर की ओर लगने वाला अभिलंब बल नीचे की ओर लगने वाले भार को संतुलित करता है।"
    },
    {
        question: "प्रश्न 23. घर्षण की अनुपस्थिति में, एक झुके हुए तल पर रखी वस्तु:",
        answers: shuffle([
            { text: "स्थिर रहेगी।", correct: false },
            { text: "एकसमान वेग से नीचे फिसलेगी।", correct: false },
            { text: "एकसमान त्वरण से नीचे फिसलेगी।", correct: true },
            { text: "ऊपर की ओर जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिना घर्षण के, वस्तु पर नीचे की ओर एक शुद्ध बल (भार का घटक) लगेगा, जो उसमें त्वरण उत्पन्न करेगा।"
    },
    {
        question: "प्रश्न 24. गतिज घर्षण का मान लगभग स्थिर रहता है और यह वस्तु की ________ पर बहुत कम निर्भर करता है।",
        answers: shuffle([
            { text: "द्रव्यमान", correct: false },
            { text: "सापेक्ष चाल", correct: true },
            { text: "आकार", correct: false },
            { text: "रंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कम चाल पर, गतिज घर्षण लगभग चाल से स्वतंत्र होता है।"
    },
    {
        question: "प्रश्न 25. घर्षण बल के कारण यांत्रिक ऊर्जा का ________ में रूपांतरण होता है।",
        answers: shuffle([
            { text: "ध्वनि ऊर्जा", correct: false },
            { text: "प्रकाश ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: true },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण एक असंरक्षी बल है जो यांत्रिक ऊर्जा का क्षय करता है, जिसे सामान्यतः ऊष्मा के रूप में देखा जाता है।"
    },
    {
        question: "प्रश्न 26. दो सतहों के बीच स्थैतिक घर्षण गुणांक का मान आमतौर पर होता है:",
        answers: shuffle([
            { text: "1 से अधिक", correct: false },
            { text: "1 से कम", correct: false },
            { text: "0", correct: false },
            { text: "0 और 1 के बीच", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश सामान्य सतहों के लिए, घर्षण गुणांक का मान 0 और 1 के बीच होता है, हालांकि कुछ मामलों में यह 1 से अधिक भी हो सकता है।"
    },
    {
        question: "प्रश्न 27. एक कार एक मोड़ पर मुड़ रही है। यदि सड़क पर तेल गिरा हो, तो कार के फिसलने की संभावना बढ़ जाती है क्योंकि:",
        answers: shuffle([
            { text: "कार का भार बढ़ जाता है।", correct: false },
            { text: "आवश्यक अभिकेंद्रीय बल बढ़ जाता है।", correct: false },
            { text: "घर्षण गुणांक कम हो जाता है।", correct: true },
            { text: "अभिलंब बल कम हो जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तेल स्नेहक का काम करता है, जिससे उपलब्ध घर्षण बल कम हो जाता है, जो आवश्यक अभिकेंद्रीय बल प्रदान करने के लिए अपर्याप्त हो सकता है।"
    },
    {
        question: "प्रश्न 28. कौन सा बल संपर्क में आने पर ही कार्य करता है?",
        answers: shuffle([
            { text: "चुंबकीय बल", correct: false },
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "घर्षण बल", correct: true },
            { text: "स्थिरविद्युत बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण की उत्पत्ति के लिए सतहों का भौतिक संपर्क में होना पहली शर्त है।"
    },
    {
        question: "प्रश्न 29. यदि घर्षण न होता, तो किसी धागे में गाँठ बाँधना:",
        answers: shuffle([
            { text: "आसान होता।", correct: false },
            { text: "असंभव होता।", correct: true },
            { text: "पहले जैसा ही होता।", correct: false },
            { text: "केवल गीले धागे में संभव होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाँठ धागे के हिस्सों के बीच घर्षण के कारण ही अपनी जगह पर टिकी रहती है।"
    },
    {
        question: "प्रश्न 30. स्कीइंग (skiing) में, बर्फ और स्की के बीच ________ को न्यूनतम करने का प्रयास किया जाता है।",
        answers: shuffle([
            { text: "स्थैतिक घर्षण", correct: false },
            { text: "गतिज घर्षण", correct: true },
            { text: "अभिलंब बल", correct: false },
            { text: "गुरुत्वाकर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्की को इस तरह से डिजाइन किया जाता है कि बर्फ पर फिसलते समय गतिज घर्षण बहुत कम हो, जिससे तेज गति संभव हो सके।"
    },
    {
        question: "प्रश्न 31. एक पुस्तक मेज पर रखी है। पुस्तक और मेज के बीच घर्षण बल:",
        answers: shuffle([
            { text: "पुस्तक के भार के बराबर है।", correct: false },
            { text: "नीचे की ओर कार्य कर रहा है।", correct: false },
            { text: "शून्य है (जब तक कोई बाहरी क्षैतिज बल न हो)।", correct: true },
            { text: "ऊपर की ओर कार्य कर रहा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण केवल तभी कार्य करता है जब गति होती है या गति का प्रयास होता है।"
    },
    {
        question: "प्रश्न 32. एक वस्तु को गतिमान करने के लिए आवश्यक न्यूनतम बल ________ पर निर्भर करता है।",
        answers: shuffle([
            { text: "गतिज घर्षण", correct: false },
            { text: "लोटनिक घर्षण", correct: false },
            { text: "सीमांत घर्षण", correct: true },
            { text: "तरल घर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वस्तु तभी गति करेगी जब लगाया गया बल स्थैतिक घर्षण के अधिकतम मान (सीमांत घर्षण) से अधिक हो।"
    },
    {
        question: "प्रश्न 33. एक चिकनी सतह का घर्षण गुणांक एक खुरदरी सतह की तुलना में:",
        answers: shuffle([
            { text: "अधिक होता है।", correct: false },
            { text: "कम होता है।", correct: true },
            { text: "बराबर होता है।", correct: false },
            { text: "शून्य होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिकनी सतहों पर अनियमितताएँ कम होती हैं, जिससे घर्षण गुणांक का मान कम हो जाता है।"
    },
    {
        question: "प्रश्न 34. हवा में चलती हुई वस्तु पर लगने वाला वायु प्रतिरोध ________ के साथ बढ़ता है।",
        answers: shuffle([
            { text: "वस्तु के द्रव्यमान", correct: false },
            { text: "वस्तु की गति", correct: true },
            { text: "वस्तु के तापमान", correct: false },
            { text: "समय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायु प्रतिरोध (कर्षण) वस्तु की गति के वर्ग के लगभग समानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वस्तु जितनी तेज चलती है, प्रतिरोध उतना ही अधिक होता है।"
    },
    {
        question: "प्रश्न 35. एक भारी ट्रक और एक हल्की कार के टायर और सड़क के बीच घर्षण गुणांक:",
        answers: shuffle([
            { text: "ट्रक का अधिक होता है।", correct: false },
            { text: "कार का अधिक होता है।", correct: false },
            { text: "लगभग समान होता है।", correct: true },
            { text: "उनके भार पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण गुणांक सतहों की प्रकृति पर निर्भर करता है (रबर और डामर), न कि वाहनों के भार पर।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, ट्रक का कुल घर्षण बल अधिक होगा क्योंकि उसका अभिलंब बल अधिक होता है।"
    },
    {
        question: "प्रश्न 36. घर्षण बल किस नियम का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "न्यूटन का पहला नियम", correct: false },
            { text: "न्यूटन का दूसरा नियम", correct: false },
            { text: "न्यूटन का तीसरा नियम", correct: false },
            { text: "ऊर्जा संरक्षण का नियम (यह एक असंरक्षी बल है)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण यांत्रिक ऊर्जा को ऊष्मा में परिवर्तित करता है, इसलिए यह यांत्रिक ऊर्जा के संरक्षण के नियम का पालन नहीं करता है।"
    },
    {
        question: "प्रश्न 37. साइकिल में चेन को तेल क्यों दिया जाता है?",
        answers: shuffle([
            { text: "a) चेन को जंग से बचाने के लिए।", correct: false },
            { text: "b) घर्षण को कम करने के लिए।", correct: false },
            { text: "c) साइकिल को चमकाने के लिए।", correct: false },
            { text: "(a) और (b) दोनों।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तेल एक स्नेहक के रूप में कार्य करता है जो चेन और गियर के बीच घर्षण को कम करता है,<br><br><i class='fa-solid fa-angles-right icon'></i> और यह धातु को हवा और नमी से बचाकर जंग को भी रोकता है।"
    },
    {
        question: "प्रश्न 38. घर्षण के बिना, पृथ्वी पर जीवन:",
        answers: shuffle([
            { text: "अधिक आरामदायक होगा।", correct: false },
            { text: "बहुत अलग और लगभग असंभव होगा।", correct: true },
            { text: "पहले जैसा ही होगा।", correct: false },
            { text: "केवल पानी में संभव होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारी लगभग हर गतिविधि, चलने से लेकर वस्तुओं को पकड़ने तक, घर्षण पर निर्भर करती है।"
    },
    {
        question: "प्रश्न 39. दो पिंडों के बीच स्थैतिक घर्षण गुणांक निर्भर करता है:",
        answers: shuffle([
            { text: "संपर्क के क्षेत्रफल पर।", correct: false },
            { text: "पिंडों की आकृति पर।", correct: false },
            { text: "संपर्क में सतहों की प्रकृति पर।", correct: true },
            { text: "पिंडों के सापेक्ष त्वरण पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण गुणांक एक स्थिरांक है जो केवल संपर्क में आने वाली सतहों की सामग्री और स्थिति पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 40. एक गेंद को फर्श पर लुढ़काया जाता है। गेंद की गति का विरोध करने वाला बल है:",
        answers: shuffle([
            { text: "स्थैतिक घर्षण", correct: false },
            { text: "सर्पी घर्षण", correct: false },
            { text: "लोटनिक घर्षण", correct: true },
            { text: "गुरुत्वाकर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई वस्तु लुढ़कती है, तो उसकी गति का विरोध करने वाला घर्षण लोटनिक घर्षण कहलाता है।"
    },
    {
        question: "प्रश्न 41. जूते के तलवों को घिसने के बाद, वे अधिक फिसलने लगते हैं क्योंकि:",
        answers: shuffle([
            { text: "उनका वजन कम हो जाता है।", correct: false },
            { text: "खांचे खत्म हो जाते हैं और घर्षण कम हो जाता है।", correct: true },
            { text: "वे नरम हो जाते हैं।", correct: false },
            { text: "उनका क्षेत्रफल बढ़ जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तलवों में बने खांचे (treads) पकड़ और घर्षण को बढ़ाने के लिए होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके घिस जाने से सतह चिकनी हो जाती है।"
    },
    {
        question: "प्रश्न 42. घर्षण बल एक ________ बल है।",
        answers: shuffle([
            { text: "संरक्षी", correct: false },
            { text: "असंरक्षी", correct: true },
            { text: "काल्पनिक", correct: false },
            { text: "नाभिकीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल द्वारा किया गया कार्य पथ पर निर्भर करता है<br><br><i class='fa-solid fa-angles-right icon'></i> और यह यांत्रिक ऊर्जा को ऊष्मा में परिवर्तित करता है।"
    },
    {
        question: "प्रश्न 43. कौन सा स्नेहक का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "तेल", correct: false },
            { text: "ग्रीस", correct: false },
            { text: "पानी", correct: false },
            { text: "रेत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेत सतहों के बीच घर्षण को बढ़ाती है, कम नहीं करती।"
    },
    {
        question: "प्रश्न 44. जब ब्रेक लगाए जाते हैं, तो कार की गतिज ऊर्जा ________ में परिवर्तित हो जाती है।",
        answers: shuffle([
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: true },
            { text: "प्रकाश ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रेक पैड और डिस्क के बीच घर्षण गतिज ऊर्जा को ऊष्मा में बदल देता है, जिससे ब्रेक गर्म हो जाते हैं और कार धीमी हो जाती है।"
    },
    {
        question: "प्रश्न 45. घर्षण का अस्तित्व निर्भर करता है:",
        answers: shuffle([
            { text: "वस्तु की गति पर।", correct: false },
            { text: "सतहों की सापेक्ष गति या गति के प्रयास पर।", correct: true },
            { text: "वस्तु के रंग पर।", correct: false },
            { text: "वस्तु के तापमान पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण केवल तभी कार्य करता है जब दो सतहें एक-दूसरे के सापेक्ष चलती हैं या चलने का प्रयास करती हैं।"
    },
    {
        question: "प्रश्न 46. एक भारी अलमारी को धकेलना शुरू करना मुश्किल है, लेकिन एक बार जब वह चलने लगती है, तो उसे धकेलते रहना आसान होता है। क्यों?",
        answers: shuffle([
            { text: "क्योंकि गतिज घर्षण स्थैतिक घर्षण से कम होता है।", correct: true },
            { text: "क्योंकि अलमारी का वजन कम हो जाता है।", correct: false },
            { text: "क्योंकि जड़त्व कम हो जाता है।", correct: false },
            { text: "क्योंकि हमारा बल बढ़ जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुरू करने के लिए हमें अधिक स्थैतिक घर्षण पर काबू पाना पड़ता है, जबकि उसे चलाते रहने के लिए हमें केवल कम गतिज घर्षण का सामना करना पड़ता है।"
    },
    {
        question: "प्रश्न 47. कौन सा कथन घर्षण के बारे में गलत है?",
        answers: shuffle([
            { text: "यह गति का विरोध करता है।", correct: false },
            { text: "यह सतहों की प्रकृति पर निर्भर करता है।", correct: false },
            { text: "यह संपर्क के क्षेत्रफल पर बहुत अधिक निर्भर करता है।", correct: true },
            { text: "यह अभिलंब बल पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्यतः, घर्षण बल संपर्क सतहों के क्षेत्रफल पर निर्भर नहीं करता है।"
    },
    {
        question: "प्रश्न 48. एक ऊर्ध्वाधर दीवार पर एक किताब को दबाकर रखने के लिए, हाथ द्वारा लगाया गया बल ________ उत्पन्न करता है।",
        answers: shuffle([
            { text: "a) एक अभिलंब बल", correct: false },
            { text: "b) एक घर्षण बल", correct: false },
            { text: "(a) और (b) दोनों", correct: true },
            { text: "कोई बल नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाथ का दबाव दीवार से एक अभिलंब बल उत्पन्न करता है,<br><br><i class='fa-solid fa-angles-right icon'></i> और यह अभिलंब बल किताब को नीचे गिरने से रोकने के लिए आवश्यक स्थैतिक घर्षण बल (किताब के भार के विरुद्ध) उत्पन्न करने की अनुमति देता है।"
    },
    {
        question: "प्रश्न 49. उल्कापिंड वायुमंडल में प्रवेश करने पर क्यों जल उठते हैं?",
        answers: shuffle([
            { text: "वायुमंडल में ऑक्सीजन के कारण।", correct: false },
            { text: "सूर्य के प्रकाश के कारण।", correct: false },
            { text: "वायु के घर्षण के कारण।", correct: true },
            { text: "उल्कापिंड के आंतरिक दबाव के कारण।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अत्यधिक उच्च गति पर, वायु का घर्षण (कर्षण) बहुत अधिक ऊष्मा उत्पन्न करता है, जिससे उल्कापिंड जलने लगता है।"
    },
    {
        question: "प्रश्न 50. घर्षण बल को कम करने की एक विधि है:",
        answers: shuffle([
            { text: "सतहों को खुरदरा बनाना।", correct: false },
            { text: "सतहों पर दबाव बढ़ाना।", correct: false },
            { text: "सतहों को पॉलिश करना।", correct: true },
            { text: "सतहों का क्षेत्रफल बढ़ाना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पॉलिश करने से सतह की अनियमितताएँ कम हो जाती हैं, जिससे घर्षण कम होता है।"
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