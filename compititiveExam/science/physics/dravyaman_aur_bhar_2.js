const questions = [
    {
        topHeading: "द्रव्यमान और भार पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. किसी वस्तु का घनत्व उसके द्रव्यमान को ________ से विभाजित करके प्राप्त किया जाता है।",
        answers: shuffle([
            { text: "भार", correct: false },
            { text: "आयतन", correct: true },
            { text: "क्षेत्रफल", correct: false },
            { text: "लंबाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घनत्व (rho = m/V) द्रव्यमान और आयतन के बीच का संबंध है।"
    },
    {
        question: "प्रश्न 2. किसी वस्तु का कौन सा गुण उसकी गति की अवस्था में परिवर्तन के प्रति प्रतिरोध का माप है?",
        answers: shuffle([
            { text: "भार", correct: false },
            { text: "जड़त्वीय द्रव्यमान", correct: true },
            { text: "गुरुत्वीय द्रव्यमान", correct: false },
            { text: "घनत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वीय द्रव्यमान न्यूटन के दूसरे नियम (F=ma) में प्रकट होता है और यह त्वरण के प्रति प्रतिरोध है।"
    },
    {
        question: "प्रश्न 3. किसी वस्तु का कौन सा गुण गुरुत्वाकर्षण बल के स्रोत के रूप में कार्य करता है?",
        answers: shuffle([
            { text: "भार", correct: false },
            { text: "जड़त्वीय द्रव्यमान", correct: false },
            { text: "गुरुत्वीय द्रव्यमान", correct: true },
            { text: "आयतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वीय द्रव्यमान न्यूटन के गुरुत्वाकर्षण के नियम (F = G(M₁M₂)/r²) में प्रकट होता है और यह गुरुत्वाकर्षण बल उत्पन्न करने और अनुभव करने के लिए जिम्मेदार है।"
    },
    {
        question: "प्रश्न 4. यदि कोई वस्तु संतुलन में है, तो हम निश्चित रूप से कह सकते हैं कि:",
        answers: shuffle([
            { text: "उसका द्रव्यमान शून्य है।", correct: false },
            { text: "उस पर लगने वाले सभी बलों का सदिश योग शून्य है।", correct: true },
            { text: "उसका भार शून्य है।", correct: false },
            { text: "उस पर केवल गुरुत्वाकर्षण बल लग रहा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संतुलन का अर्थ है शून्य त्वरण, जिसका अर्थ है शून्य शुद्ध बल।<br><br><i class='fa-solid fa-angles-right icon'></i> वस्तु का भार अशून्य हो सकता है, जिसे अन्य बल संतुलित कर रहे होते हैं।"
    },
    {
        question: "प्रश्न 5. किसी वस्तु का भार सीधे किसके समानुपाती होता है?",
        answers: shuffle([
            { text: "उसके द्रव्यमान के", correct: true },
            { text: "उसके आयतन के", correct: false },
            { text: "उसके घनत्व के", correct: false },
            { text: "उसकी त्रिज्या के वर्ग के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> W=mg सूत्र से, यदि 'g' स्थिर है, तो भार (W) सीधे द्रव्यमान (m) के समानुपाती होता है।"
    },
    {
        question: "प्रश्न 6. कौन सा कथन द्रव्यमान को सबसे अच्छी तरह परिभाषित करता है?",
        answers: shuffle([
            { text: "यह किसी वस्तु का गुरुत्वाकर्षण खिंचाव है।", correct: false },
            { text: "यह किसी वस्तु के जड़त्व का माप है।", correct: true },
            { text: "यह हमेशा न्यूटन में मापा जाता है।", correct: false },
            { text: "यह स्थान के साथ बदलता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह द्रव्यमान की सबसे मौलिक भौतिक परिभाषा है।"
    },
    {
        question: "प्रश्न 7. कौन सा कथन भार को सबसे अच्छी तरह परिभाषित करता है?",
        answers: shuffle([
            { text: "यह किसी वस्तु में पदार्थ की मात्रा है।", correct: false },
            { text: "यह किसी वस्तु के जड़त्व का माप है।", correct: false },
            { text: "यह किसी वस्तु पर लगने वाला गुरुत्वाकर्षण बल है।", correct: true },
            { text: "यह हमेशा किलोग्राम में मापा जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भार की सटीक भौतिक परिभाषा है।"
    },
    {
        question: "प्रश्न 8. एक अंतरिक्ष स्टेशन में, अंतरिक्ष यात्री तैरते हैं क्योंकि:",
        answers: shuffle([
            { text: "स्टेशन पर कोई गुरुत्वाकर्षण नहीं है।", correct: false },
            { text: "स्टेशन निरंतर मुक्त पतन की स्थिति में है।", correct: true },
            { text: "अंतरिक्ष यात्रियों का द्रव्यमान शून्य हो जाता है।", correct: false },
            { text: "वहाँ हवा नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेशन और अंतरिक्ष यात्री दोनों पृथ्वी के चारों ओर परिक्रमा करते हुए लगातार 'गिर' रहे हैं, जिससे भारहीनता की स्थिति उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 9. यदि किसी ग्रह का द्रव्यमान पृथ्वी से दोगुना और त्रिज्या भी दोगुनी हो, तो उस ग्रह पर किसी वस्तु का भार पृथ्वी की तुलना में:",
        answers: shuffle([
            { text: "दोगुना होगा।", correct: false },
            { text: "आधा होगा।", correct: true },
            { text: "समान रहेगा।", correct: false },
            { text: "चार गुना होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> g ∝ M/R²।<br><br><i class='fa-solid fa-angles-right icon'></i> नया g' ∝ (2M)/(2R)² = (2M)/(4R²) = (1/2)(M/R²)।<br><br><i class='fa-solid fa-angles-right icon'></i> तो नया त्वरण आधा हो जाएगा, जिससे भार भी आधा हो जाएगा।"
    },
    {
        question: "प्रश्न 10. किसी वस्तु को धक्का देने या खींचने के लिए आवश्यक बल सीधे उसके ________ पर निर्भर करता है।",
        answers: shuffle([
            { text: "भार", correct: false },
            { text: "द्रव्यमान (और जड़त्व)", correct: true },
            { text: "आयतन", correct: false },
            { text: "आकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के दूसरे नियम के अनुसार, किसी वस्तु को त्वरित करने के लिए आवश्यक बल उसके द्रव्यमान के समानुपाती होता है।"
    },
    {
        question: "प्रश्न 11. द्रव्यमान-ऊर्जा तुल्यता (E=mc²) का क्या अर्थ है?",
        answers: shuffle([
            { text: "द्रव्यमान और ऊर्जा एक ही चीज हैं।", correct: false },
            { text: "द्रव्यमान को ऊर्जा में और ऊर्जा को द्रव्यमान में परिवर्तित किया जा सकता है।", correct: true },
            { text: "द्रव्यमान हमेशा ऊर्जा से अधिक होता है।", correct: false },
            { text: "ऊर्जा भार का एक रूप है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह आइंस्टीन का प्रसिद्ध समीकरण है जो द्रव्यमान और ऊर्जा के बीच संबंध स्थापित करता है।"
    },
    {
        question: "प्रश्न 12. किसी वस्तु को एक स्थान से दूसरे स्थान पर ले जाने पर, यदि उसका भार आधा हो जाता है, तो इसका मतलब है कि नए स्थान पर 'g' का मान:",
        answers: shuffle([
            { text: "दोगुना हो गया है।", correct: false },
            { text: "आधा हो गया है।", correct: true },
            { text: "चार गुना हो गया है।", correct: false },
            { text: "अपरिवर्तित है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि W = mg और m स्थिर है, W सीधे 'g' के समानुपाती है।"
    },
    {
        question: "प्रश्न 13. एक किलोग्राम द्रव्यमान किसके बराबर है?",
        answers: shuffle([
            { text: "9.8 न्यूटन", correct: false },
            { text: "1 न्यूटन", correct: false },
            { text: "पदार्थ की वह मात्रा जिसका भार 9.8 न्यूटन हो (पृथ्वी की सतह पर)", correct: true },
            { text: "पदार्थ की वह मात्रा जो 1 मीटर/सेकंड² से त्वरित हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> W = mg से, यदि W=9.8 N और g=9.8 m/s², तो m = 1 kg।"
    },
    {
        question: "प्रश्न 14. क्या किसी वस्तु का भार उसके द्रव्यमान से कम हो सकता है (संख्यात्मक रूप से)?",
        answers: shuffle([
            { text: "हाँ, यदि 'g' का मान 1 से कम हो।", correct: true },
            { text: "नहीं, कभी नहीं।", correct: false },
            { text: "हाँ, हमेशा।", correct: false },
            { text: "केवल चंद्रमा पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> W = mg।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि गुरुत्वीय त्वरण 'g' का संख्यात्मक मान 1 m/s² से कम है, तो भार W का संख्यात्मक मान द्रव्यमान m से कम होगा।"
    },
    {
        question: "प्रश्न 15. एक वस्तु का संवेग उसके द्रव्यमान और ________ का गुणनफल होता है।",
        answers: shuffle([
            { text: "त्वरण", correct: false },
            { text: "वेग", correct: true },
            { text: "भार", correct: false },
            { text: "समय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग (p = mv) की परिभाषा के अनुसार, यह द्रव्यमान और वेग पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 16. अधिक द्रव्यमान वाली वस्तु को समान वेग तक त्वरित करने के लिए:",
        answers: shuffle([
            { text: "कम बल की आवश्यकता होती है।", correct: false },
            { text: "अधिक बल की आवश्यकता होती है।", correct: true },
            { text: "समान बल की आवश्यकता होती है।", correct: false },
            { text: "किसी बल की आवश्यकता नहीं होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> F = ma के अनुसार, अधिक द्रव्यमान (m) को समान त्वरण (a) देने के लिए अधिक बल (F) की आवश्यकता होगी।"
    },
    {
        question: "प्रश्न 17. किसी वस्तु का भार अंततः किसका परिणाम है?",
        answers: shuffle([
            { text: "विद्युत चुंबकीय बल का", correct: false },
            { text: "नाभिकीय बल का", correct: false },
            { text: "गुरुत्वाकर्षण बल का", correct: true },
            { text: "संपर्क बल का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार चार मूलभूत बलों में से एक, गुरुत्वाकर्षण, का एक प्रकटन है।"
    },
    {
        question: "प्रश्न 18. निम्नलिखित में से कौन सी एक मौलिक राशि है?",
        answers: shuffle([
            { text: "भार", correct: false },
            { text: "बल", correct: false },
            { text: "द्रव्यमान", correct: true },
            { text: "वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> SI प्रणाली में, द्रव्यमान सात मौलिक (आधार) राशियों में से एक है, जबकि अन्य व्युत्पन्न राशियाँ हैं।"
    },
    {
        question: "प्रश्न 19. एक हवाई जहाज स्थिर गति से उड़ रहा है। उसके भार को कौन सा बल संतुलित करता है?",
        answers: shuffle([
            { text: "इंजन का प्रणोद", correct: false },
            { text: "वायु का प्रतिरोध", correct: false },
            { text: "पंखों द्वारा उत्पन्न उत्थापक बल", correct: true },
            { text: "कोई बल नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्ध्वाधर दिशा में संतुलन के लिए, ऊपर की ओर लगने वाला उत्थापक बल नीचे की ओर लगने वाले भार को संतुलित करता है।"
    },
    {
        question: "प्रश्न 20. यदि किसी वस्तु का द्रव्यमान m है, तो उसका भार w है। उसी वस्तु के लिए, m/w का मान:",
        answers: shuffle([
            { text: "1/g के बराबर है", correct: true },
            { text: "g के बराबर है", correct: false },
            { text: "हमेशा 1 है", correct: false },
            { text: "m के बराबर है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> w = mg => m/w = m/mg = 1/g."
    },
    {
        question: "प्रश्न 21. किसी वस्तु का 'आभासी भार' कब बदलता है?",
        answers: shuffle([
            { text: "a) जब वस्तु त्वरित होती है।", correct: false },
            { text: "b) जब वस्तु को किसी तरल में डुबोया जाता है।", correct: false },
            { text: "(a) और (b) दोनों ही स्थितियों में।", correct: true },
            { text: "कभी नहीं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण (जैसे लिफ्ट में) और उत्प्लावन बल दोनों ही वस्तु द्वारा महसूस किए जाने वाले भार को बदल देते हैं।"
    },
    {
        question: "प्रश्न 22. भौतिकी में, द्रव्यमान को दो तरीकों से परिभाषित किया गया है: जड़त्वीय और गुरुत्वीय। प्रयोगों से पता चला है कि ये दोनों:",
        answers: shuffle([
            { text: "लगभग बराबर हैं।", correct: false },
            { text: "बिल्कुल बराबर हैं।", correct: true },
            { text: "बहुत भिन्न हैं।", correct: false },
            { text: "एक दूसरे से संबंधित नहीं हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तुल्यता का सिद्धांत है, जो सामान्य सापेक्षता की नींव है।"
    },
    {
        question: "प्रश्न 23. एक व्यक्ति का द्रव्यमान 70 किलो है। उसका भार क्या इंगित करता है?",
        answers: shuffle([
            { text: "व्यक्ति में 70 किलो पदार्थ है।", correct: false },
            { text: "पृथ्वी व्यक्ति को लगभग 700 न्यूटन के बल से खींच रही है।", correct: true },
            { text: "व्यक्ति का जड़त्व 70 है।", correct: false },
            { text: "व्यक्ति 70 मीटर/सेकंड² से गिर सकता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार बल का माप है।<br><br><i class='fa-solid fa-angles-right icon'></i> W ≈ 70 kg * 9.8 m/s² ≈ 686 N।"
    },
    {
        question: "प्रश्न 24. किसी वस्तु पर लगने वाला गुरुत्वाकर्षण बल उसके ________ के समानुपाती होता है।",
        answers: shuffle([
            { text: "गुरुत्वीय द्रव्यमान", correct: true },
            { text: "जड़त्वीय द्रव्यमान", correct: false },
            { text: "आयतन", correct: false },
            { text: "घनत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वीय द्रव्यमान को उस गुण के रूप में परिभाषित किया गया है जो गुरुत्वाकर्षण बल का अनुभव करता है।"
    },
    {
        question: "प्रश्न 25. एक वस्तु की गति की अवस्था को बदलने के लिए आवश्यक बल उसके ________ के समानुपाती होता है।",
        answers: shuffle([
            { text: "गुरुत्वीय द्रव्यमान", correct: false },
            { text: "जड़त्वीय द्रव्यमान", correct: true },
            { text: "भार", correct: false },
            { text: "आकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वीय द्रव्यमान को गति में परिवर्तन के प्रतिरोध के रूप में परिभाषित किया गया है।"
    },
    {
        question: "प्रश्न 26. द्रव्यमान की अवधारणा भार की अवधारणा से अधिक मौलिक क्यों है?",
        answers: shuffle([
            { text: "क्योंकि द्रव्यमान हमेशा अधिक होता है।", correct: false },
            { text: "क्योंकि द्रव्यमान एक सार्वभौमिक गुण है, जबकि भार स्थानीय है।", correct: true },
            { text: "क्योंकि द्रव्यमान को मापना आसान है।", correct: false },
            { text: "क्योंकि द्रव्यमान एक सदिश है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान वस्तु का अपना गुण है, जबकि भार वस्तु और एक गुरुत्वाकर्षण क्षेत्र (जैसे ग्रह) के बीच की अंतःक्रिया है।"
    },
    {
        question: "प्रश्न 27. यदि आप एक वस्तु को पृथ्वी से मंगल ग्रह पर ले जाते हैं, तो क्या बदलेगा?",
        answers: shuffle([
            { text: "केवल द्रव्यमान", correct: false },
            { text: "केवल भार", correct: true },
            { text: "द्रव्यमान और भार दोनों", correct: false },
            { text: "न तो द्रव्यमान और न ही भार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल ग्रह का गुरुत्वाकर्षण पृथ्वी से अलग है, इसलिए वस्तु का भार बदल जाएगा, लेकिन उसका द्रव्यमान स्थिर रहेगा।"
    },
    {
        question: "प्रश्न 28. किसी वस्तु का भार सीधे गुरुत्वीय क्षेत्र की ________ के समानुपाती होता है।",
        answers: shuffle([
            { text: "तीव्रता", correct: true },
            { text: "ऊर्जा", correct: false },
            { text: "क्षमता", correct: false },
            { text: "दिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वीय क्षेत्र की तीव्रता ही गुरुत्वीय त्वरण 'g' है।<br><br><i class='fa-solid fa-angles-right icon'></i> W = m * (गुरुत्वीय क्षेत्र की तीव्रता)।"
    },
    {
        question: "प्रश्न 29. दो वस्तुओं का द्रव्यमान समान है। क्या उनका भार भी हमेशा समान होगा?",
        answers: shuffle([
            { text: "हाँ, हमेशा।", correct: false },
            { text: "नहीं, यदि वे अलग-अलग स्थानों पर हैं।", correct: true },
            { text: "हाँ, यदि उनका आयतन समान है।", correct: false },
            { text: "नहीं, यदि उनका घनत्व अलग है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि एक वस्तु पृथ्वी पर है और दूसरी चंद्रमा पर, तो समान द्रव्यमान होने के बावजूद उनके भार अलग-अलग होंगे।"
    },
    {
        question: "प्रश्न 30. दो वस्तुओं का भार समान है। क्या उनका द्रव्यमान भी हमेशा समान होगा?",
        answers: shuffle([
            { text: "हाँ, यदि वे एक ही स्थान पर हैं।", correct: true },
            { text: "नहीं, कभी नहीं।", correct: false },
            { text: "हाँ, हमेशा।", correct: false },
            { text: "नहीं, यदि उनका आयतन अलग है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि दो वस्तुओं का भार (mg) एक ही स्थान ('g' समान है) पर समान है, तो उनका द्रव्यमान (m) भी समान होना चाहिए।"
    },
    {
        question: "प्रश्न 31. कौन सी इकाई द्रव्यमान की नहीं है?",
        answers: shuffle([
            { text: "ग्राम", correct: false },
            { text: "किलोग्राम", correct: false },
            { text: "स्लग", correct: false },
            { text: "डाइन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डाइन बल की CGS इकाई है, द्रव्यमान की नहीं।"
    },
    {
        question: "प्रश्न 32. कौन सी इकाई भार की नहीं है?",
        answers: shuffle([
            { text: "न्यूटन", correct: false },
            { text: "किलोग्राम-भार", correct: false },
            { text: "पाउंड (बल)", correct: false },
            { text: "किलोग्राम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किलोग्राम द्रव्यमान की SI इकाई है, भार की नहीं।"
    },
    {
        question: "प्रश्न 33. 'पदार्थ का एक ग्राम' क्या निर्दिष्ट करता है?",
        answers: shuffle([
            { text: "भार", correct: false },
            { text: "द्रव्यमान", correct: true },
            { text: "घनत्व", correct: false },
            { text: "बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्राम द्रव्यमान की एक इकाई है।"
    },
    {
        question: "प्रश्न 34. 'एक वस्तु का भार 50 न्यूटन है' यह कथन क्या निर्दिष्ट करता है?",
        answers: shuffle([
            { text: "वस्तु पर लगने वाला बल", correct: true },
            { text: "वस्तु में पदार्थ की मात्रा", correct: false },
            { text: "वस्तु का जड़त्व", correct: false },
            { text: "वस्तु का आयतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार की परिभाषा ही बल है।"
    },
    {
        question: "प्रश्न 35. एक वस्तु का द्रव्यमान दोगुना करने पर उसका भार:",
        answers: shuffle([
            { text: "आधा हो जाता है", correct: false },
            { text: "दोगुना हो जाता है", correct: true },
            { text: "चार गुना हो जाता है", correct: false },
            { text: "अपरिवर्तित रहता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> W=mg के अनुसार, भार द्रव्यमान के सीधे समानुपाती होता है।"
    },
    {
        question: "प्रश्न 36. यदि किसी स्थान पर g का मान आधा हो जाए, तो किसी वस्तु का भार:",
        answers: shuffle([
            { text: "आधा हो जाएगा", correct: true },
            { text: "दोगुना हो जाएगा", correct: false },
            { text: "अपरिवर्तित रहेगा", correct: false },
            { text: "चार गुना हो जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> W=mg के अनुसार, भार 'g' के सीधे समानुपाती होता है।"
    },
    {
        question: "प्रश्न 37. यदि किसी स्थान पर g का मान आधा हो जाए, तो किसी वस्तु का द्रव्यमान:",
        answers: shuffle([
            { text: "आधा हो जाएगा", correct: false },
            { text: "दोगुना हो जाएगा", correct: false },
            { text: "अपरिवर्तित रहेगा", correct: true },
            { text: "चार गुना हो जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान एक आंतरिक गुण है और यह 'g' के मान पर निर्भर नहीं करता है।"
    },
    {
        question: "प्रश्न 38. एक भारी वस्तु और एक हल्की वस्तु को समान बल से धकेला जाता है। किसका त्वरण अधिक होगा?",
        answers: shuffle([
            { text: "भारी वस्तु का", correct: false },
            { text: "हल्की वस्तु का", correct: true },
            { text: "दोनों का समान होगा", correct: false },
            { text: "कहा नहीं जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> a=F/m के अनुसार, जिसका द्रव्यमान (जड़त्व) कम होता है, उसका त्वरण अधिक होता है।"
    },
    {
        question: "प्रश्न 39. किसी वस्तु का द्रव्यमान एक ________ गुण है, जबकि भार एक ________ गुण है।",
        answers: shuffle([
            { text: "आंतरिक, बाह्य", correct: true },
            { text: "सदिश, अदिश", correct: false },
            { text: "परिवर्तनशील, स्थिर", correct: false },
            { text: "बल, ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान वस्तु का अपना (आंतरिक) गुण है, जबकि भार वस्तु और एक बाहरी क्षेत्र (गुरुत्वाकर्षण) के बीच की अंतःक्रिया है।"
    },
    {
        question: "प्रश्न 40. क्या भार के बिना द्रव्यमान का अस्तित्व संभव है?",
        answers: shuffle([
            { text: "हाँ", correct: true },
            { text: "नहीं", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाँ, गुरुत्वाकर्षण-मुक्त स्थान में वस्तु का द्रव्यमान तो होगा, लेकिन भार शून्य होगा।"
    },
    {
        question: "प्रश्न 41. क्या द्रव्यमान के बिना भार का अस्तित्व संभव है?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> W=mg के अनुसार, यदि द्रव्यमान (m) शून्य है, तो भार (W) भी शून्य होगा।"
    },
    {
        question: "प्रश्न 42. 'गुरुत्वीय द्रव्यमान' की अवधारणा न्यूटन के ________ नियम से आती है।",
        answers: shuffle([
            { text: "पहले", correct: false },
            { text: "दूसरे", correct: false },
            { text: "तीसरे", correct: false },
            { text: "सार्वभौमिक गुरुत्वाकर्षण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वीय द्रव्यमान वह 'आवेश' है जो गुरुत्वाकर्षण बल उत्पन्न करता है और अनुभव करता है, जैसा कि गुरुत्वाकर्षण के नियम में वर्णित है।"
    },
    {
        question: "प्रश्न 43. एक संतुलित तुला ________ को संतुलित करती है।",
        answers: shuffle([
            { text: "दो द्रव्यमानों को", correct: false },
            { text: "दो भारों को", correct: true },
            { text: "दो घनत्वों को", correct: false },
            { text: "दो आयतनों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुला वास्तव में दोनों तरफ लगने वाले गुरुत्वाकर्षण बलों (भारों) को संतुलित करती है, जिससे हम द्रव्यमान का अनुमान लगाते हैं।"
    },
    {
        question: "प्रश्न 44. किसी वस्तु पर लगने वाला गुरुत्वाकर्षण बल निर्भर करता है:",
        answers: shuffle([
            { text: "केवल वस्तु के द्रव्यमान पर।", correct: false },
            { text: "केवल ग्रह के द्रव्यमान पर।", correct: false },
            { text: "वस्तु और ग्रह दोनों के द्रव्यमान पर।", correct: true },
            { text: "केवल वस्तु के आयतन पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण का सार्वभौमिक नियम (F = G(M₁M₂)/r²) बताता है कि बल दोनों द्रव्यमानों पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 45. किसी वस्तु के लिए 'g' (गुरुत्वीय त्वरण) निर्भर करता है:",
        answers: shuffle([
            { text: "केवल वस्तु के द्रव्यमान पर।", correct: false },
            { text: "केवल ग्रह के द्रव्यमान और त्रिज्या पर।", correct: true },
            { text: "वस्तु और ग्रह दोनों के द्रव्यमान पर।", correct: false },
            { text: "केवल वस्तु के भार पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> g = GM/R²।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केवल उस ग्रह का गुण है जहाँ वस्तु स्थित है।"
    },
    {
        question: "प्रश्न 46. किसी वस्तु का द्रव्यमान परिभाषित करता है कि उसे ________ करना कितना कठिन है।",
        answers: shuffle([
            { text: "देखना", correct: false },
            { text: "उठाना", correct: false },
            { text: "त्वरित करना", correct: true },
            { text: "मापना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान जड़त्व का माप है, और जड़त्व त्वरण का विरोध करता है।"
    },
    {
        question: "प्रश्न 47. किसी वस्तु का भार परिभाषित करता है कि उसे ________ करना कितना कठिन है।",
        answers: shuffle([
            { text: "त्वरित करना", correct: false },
            { text: "रोकना", correct: false },
            { text: "गुरुत्वाकर्षण के विरुद्ध उठाना", correct: true },
            { text: "मापना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु को उठाने के लिए हमें उसके भार के बराबर बल लगाना पड़ता है।"
    },
    {
        question: "प्रश्न 48. यदि आप अपने हाथ में एक पत्थर और एक रुई का टुकड़ा रखते हैं, तो किसका द्रव्यमान अधिक है?",
        answers: shuffle([
            { text: "पत्थर का", correct: true },
            { text: "रुई का", correct: false },
            { text: "दोनों का समान हो सकता है", correct: false },
            { text: "कहा नहीं जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समान आकार के लिए, पत्थर में बहुत अधिक पदार्थ होता है, इसलिए उसका द्रव्यमान अधिक होता है।"
    },
    {
        question: "प्रश्न 49. यदि आप अपने हाथ में एक पत्थर और एक रुई का टुकड़ा रखते हैं, तो किसका भार अधिक है?",
        answers: shuffle([
            { text: "पत्थर का", correct: true },
            { text: "रुई का", correct: false },
            { text: "दोनों का समान हो सकता है", correct: false },
            { text: "कहा नहीं जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि पत्थर का द्रव्यमान अधिक है और दोनों एक ही स्थान पर हैं ('g' समान है), इसलिए उसका भार भी अधिक होगा।"
    },
    {
        question: "प्रश्न 50. एक वस्तु का पृथ्वी पर द्रव्यमान m है और भार W है। एक ग्रह पर जहाँ गुरुत्वीय त्वरण पृथ्वी का दोगुना है, वस्तु का द्रव्यमान और भार क्या होगा?",
        answers: shuffle([
            { text: "m, W", correct: false },
            { text: "2m, 2W", correct: false },
            { text: "m, 2W", correct: true },
            { text: "2m, W", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान (m) अपरिवर्तित रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नया भार W' = m(2g) = 2(mg) = 2W।"
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