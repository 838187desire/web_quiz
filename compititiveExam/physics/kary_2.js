const questions = [
    {
        topHeading: "कार्य पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. यदि बल F और विस्थापन d के बीच का कोण θ है, तो कार्य का सूत्र है:",
        answers: shuffle([
            { text: "Fd sin(θ)", correct: false },
            { text: "Fd tan(θ)", correct: false },
            { text: "Fd cos(θ)", correct: true },
            { text: "Fd", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कार्य की सामान्य गणितीय परिभाषा है, जो बल के उस घटक को ध्यान में रखती है जो विस्थापन की दिशा में है।"
    },
    {
        question: "प्रश्न 2. कार्य करने की क्षमता को क्या कहते हैं?",
        answers: shuffle([
            { text: "शक्ति", correct: false },
            { text: "बल", correct: false },
            { text: "संवेग", correct: false },
            { text: "ऊर्जा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा को कार्य करने की क्षमता के रूप में परिभाषित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कार्य और ऊर्जा की इकाइयाँ और विमाएँ समान होती हैं।"
    },
    {
        question: "प्रश्न 3. यदि किसी वस्तु की गतिज ऊर्जा घट रही है, तो उस पर किया गया कुल कार्य है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: true },
            { text: "शून्य", correct: false },
            { text: "स्थिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य-ऊर्जा प्रमेय के अनुसार, ऋणात्मक कुल कार्य गतिज ऊर्जा में कमी का कारण बनता है (जैसे ब्रेक लगाना)।"
    },
    {
        question: "प्रश्न 4. बल और विस्थापन दोनों सदिश राशियाँ हैं, लेकिन उनका अदिश गुणनफल (कार्य) एक ________ राशि है।",
        answers: shuffle([
            { text: "सदिश", correct: false },
            { text: "अदिश", correct: true },
            { text: "शून्य", correct: false },
            { text: "इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो सदिशों का अदिश (डॉट) गुणनफल हमेशा एक अदिश राशि होता है।"
    },
    {
        question: "प्रश्न 5. कौन सा बल हमेशा एक बंद लूप में शून्य कार्य करता है?",
        answers: shuffle([
            { text: "घर्षण बल", correct: false },
            { text: "श्यान बल", correct: false },
            { text: "गुरुत्वाकर्षण बल", correct: true },
            { text: "वायु प्रतिरोध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण एक संरक्षी बल है, और संरक्षी बलों द्वारा एक बंद पथ में किया गया कुल कार्य शून्य होता है।"
    },
    {
        question: "प्रश्न 6. एक ट्रॉली को एक झुके हुए रैंप पर ऊपर खींचने में किया गया कार्य ________ के विरुद्ध होता है।",
        answers: shuffle([
            { text: "केवल घर्षण", correct: false },
            { text: "केवल गुरुत्वाकर्षण", correct: false },
            { text: "घर्षण और गुरुत्वाकर्षण दोनों", correct: true },
            { text: "केवल अभिलंब बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रॉली को ऊपर खींचने के लिए, हमें घर्षण बल और गुरुत्वाकर्षण के घटक दोनों के विरुद्ध कार्य करना पड़ता है।"
    },
    {
        question: "प्रश्न 7. कार्य की विमाएँ ________ की विमाओं के समान हैं।",
        answers: shuffle([
            { text: "बल", correct: false },
            { text: "शक्ति", correct: false },
            { text: "बल आघूर्ण", correct: true },
            { text: "संवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य (बल × दूरी) और बल आघूर्ण (बल × लंबवत दूरी) दोनों की विमाएँ [ML²T⁻²] होती हैं, हालांकि वे भौतिक रूप से अलग-अलग अवधारणाएँ हैं।"
    },
    {
        question: "प्रश्न 8. यदि किसी वस्तु पर किया गया कार्य उसकी गतिज ऊर्जा को दोगुना कर देता है, तो वस्तु का वेग:",
        answers: shuffle([
            { text: "दोगुना हो जाएगा।", correct: false },
            { text: "चार गुना हो जाएगा।", correct: false },
            { text: "√2 गुना हो जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा (KE = ½mv²) वेग के वर्ग के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि KE दोगुनी होती है, तो वेग v, √2 के कारक से बढ़ेगा।"
    },
    {
        question: "प्रश्न 9. एक व्यक्ति द्वारा एक बाल्टी पानी कुएँ से ऊपर खींचने में किया गया कार्य है:",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बल के विरुद्ध किया गया धनात्मक कार्य।", correct: true },
            { text: "गुरुत्वाकर्षण बल द्वारा किया गया धनात्मक कार्य।", correct: false },
            { text: "शून्य कार्य।", correct: false },
            { text: "ऋणात्मक कार्य।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यक्ति ऊपर की ओर बल लगा रहा है और विस्थापन भी ऊपर की ओर है, इसलिए व्यक्ति द्वारा किया गया कार्य धनात्मक है।"
    },
    {
        question: "प्रश्न 10. जब एक तीरंदाज धनुष की डोरी खींचता है, तो वह ________ करता है।",
        answers: shuffle([
            { text: "कार्य", correct: false },
            { text: "शक्ति का उपयोग", correct: false },
            { text: "ऊर्जा का भंडारण", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वह डोरी खींचने के लिए कार्य करता है, जिसमें शक्ति लगती है, और यह कार्य धनुष में प्रत्यास्थ स्थितिज ऊर्जा के रूप में संग्रहीत हो जाता है।"
    },
    {
        question: "प्रश्न 11. क्या ऋणात्मक कार्य का अर्थ है कि कोई कार्य नहीं हुआ है?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋणात्मक कार्य का अर्थ है कि बल ने वस्तु की ऊर्जा को कम किया है या उसकी गति का विरोध किया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कार्य की एक दिशात्मक प्रकृति को इंगित करता है।"
    },
    {
        question: "प्रश्न 12. एक आदर्श सरल लोलक के एक दोलन में, गुरुत्वाकर्षण बल द्वारा किया गया कुल कार्य होता है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "यह आयाम पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण दोलन एक बंद पथ है (वस्तु अपनी प्रारंभिक स्थिति में लौट आती है), और गुरुत्वाकर्षण एक संरक्षी बल है, इसलिए कुल कार्य शून्य है।"
    },
    {
        question: "प्रश्न 13. यदि किसी वस्तु पर लगने वाला बल शून्य हो जाए, तो उसके बाद उस वस्तु पर किया गया कार्य:",
        answers: shuffle([
            { text: "धनात्मक होगा।", correct: false },
            { text: "ऋणात्मक होगा।", correct: false },
            { text: "शून्य होगा।", correct: true },
            { text: "स्थिर रहेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि बल ही शून्य है, तो कोई कार्य नहीं किया जा सकता, भले ही वस्तु विस्थापित हो (एकसमान वेग से)।"
    },
    {
        question: "प्रश्न 14. यदि किसी वस्तु का विस्थापन शून्य हो जाए, तो उस वस्तु पर किया गया कार्य:",
        answers: shuffle([
            { text: "हमेशा शून्य होगा।", correct: true },
            { text: "धनात्मक हो सकता है।", correct: false },
            { text: "ऋणात्मक हो सकता है।", correct: false },
            { text: "बल पर निर्भर करेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य की परिभाषा के अनुसार, यदि विस्थापन शून्य है, तो किया गया कार्य भी शून्य होगा।"
    },
    {
        question: "प्रश्न 15. एक इंजन द्वारा किया गया कार्य मुख्य रूप से ________ ऊर्जा को ________ ऊर्जा में परिवर्तित करता है।",
        answers: shuffle([
            { text: "रासायनिक, यांत्रिक", correct: true },
            { text: "यांत्रिक, रासायनिक", correct: false },
            { text: "ऊष्मीय, प्रकाश", correct: false },
            { text: "विद्युत, ध्वनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश इंजन ईंधन (रासायनिक ऊर्जा) को जलाकर उपयोगी यांत्रिक कार्य करते हैं।"
    },
    {
        question: "प्रश्न 16. किसी वस्तु को उठाने और फिर उसे उसी स्थान पर वापस रखने में, गुरुत्वाकर्षण के विरुद्ध किया गया शुद्ध कार्य है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "वस्तु के भार के दोगुने के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक बंद पथ है, और गुरुत्वाकर्षण एक संरक्षी बल है, इसलिए कुल कार्य शून्य है।"
    },
    {
        question: "प्रश्न 17. कार्य की अवधारणा ________ और ________ की अवधारणाओं को जोड़ती है।",
        answers: shuffle([
            { text: "बल, ऊर्जा", correct: true },
            { text: "शक्ति, समय", correct: false },
            { text: "द्रव्यमान, वेग", correct: false },
            { text: "जड़त्व, संवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य वह प्रक्रिया है जिसके द्वारा बल के माध्यम से ऊर्जा एक वस्तु से दूसरी वस्तु में या एक रूप से दूसरे रूप में स्थानांतरित होती है।"
    },
    {
        question: "प्रश्न 18. एक चर बल (Variable Force) द्वारा किया गया कार्य ज्ञात करने के लिए, हमें ________ का उपयोग करना चाहिए।",
        answers: shuffle([
            { text: "सरल गुणन", correct: false },
            { text: "समाकलन (Integration)", correct: true },
            { text: "अवकलन (Differentiation)", correct: false },
            { text: "अनुपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणितीय रूप से, चर बल द्वारा किया गया कार्य बल-विस्थापन ग्राफ के अंतर्गत क्षेत्रफल की गणना करके पाया जाता है, जो समाकलन के बराबर है।"
    },
    {
        question: "प्रश्न 19. यदि किसी निकाय की कुल यांत्रिक ऊर्जा संरक्षित रहती है, तो उस पर ________ द्वारा कोई कार्य नहीं किया जा रहा है।",
        answers: shuffle([
            { text: "संरक्षी बलों", correct: false },
            { text: "असंरक्षी बलों", correct: true },
            { text: "आंतरिक बलों", correct: false },
            { text: "बाहरी बलों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यांत्रिक ऊर्जा (गतिज + स्थितिज) तभी संरक्षित रहती है जब केवल संरक्षी बल कार्य कर रहे हों<br><br><i class='fa-solid fa-angles-right icon'></i> और कोई असंरक्षी बल (जैसे घर्षण) द्वारा ऊर्जा का क्षय न हो रहा हो।"
    },
    {
        question: "प्रश्न 20. किसी वस्तु को एक खुरदरी क्षैतिज सतह पर धकेलने में किया गया कार्य किसके विरुद्ध होता है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण", correct: false },
            { text: "अभिलंब बल", correct: false },
            { text: "घर्षण बल", correct: true },
            { text: "तनाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षैतिज सतह पर, मुख्य विरोधी बल घर्षण होता है।"
    },
    {
        question: "प्रश्न 21. कौन सी स्थिति शून्य कार्य को नहीं दर्शाती है?",
        answers: shuffle([
            { text: "एक दीवार को धकेलना।", correct: false },
            { text: "सिर पर बोझ लेकर चलना।", correct: false },
            { text: "एक गेंद को ऊपर उठाना।", correct: true },
            { text: "एक उपग्रह का पृथ्वी के चारों ओर घूमना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गेंद को ऊपर उठाने में, गुरुत्वाकर्षण के विरुद्ध धनात्मक कार्य किया जाता है क्योंकि बल और विस्थापन दोनों ऊपर की ओर होते हैं।"
    },
    {
        question: "प्रश्न 22. एक व्यक्ति एक नाव को रस्सी से खींच रहा है। यदि रस्सी क्षैतिज से एक कोण बनाती है, तो व्यक्ति द्वारा किया गया कार्य ________ पर निर्भर करता है।",
        answers: shuffle([
            { text: "केवल रस्सी के तनाव पर", correct: false },
            { text: "केवल नाव के विस्थापन पर", correct: false },
            { text: "तनाव और विस्थापन के बीच के कोण पर", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य (W = Fdcosθ) इन तीनों कारकों पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 23. यदि किसी वस्तु पर किया गया कार्य शून्य है, तो उसकी गतिज ऊर्जा:",
        answers: shuffle([
            { text: "हमेशा शून्य होगी।", correct: false },
            { text: "हमेशा बढ़ेगी।", correct: false },
            { text: "हमेशा घटेगी।", correct: false },
            { text: "अपरिवर्तित रहेगी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य-ऊर्जा प्रमेय (W_net = ΔKE) के अनुसार, यदि शुद्ध कार्य शून्य है, तो गतिज ऊर्जा में परिवर्तन भी शून्य होगा।"
    },
    {
        question: "प्रश्न 24. एक किलोवॉट-घंटा (kWh) किसकी इकाई है?",
        answers: shuffle([
            { text: "शक्ति", correct: false },
            { text: "बल", correct: false },
            { text: "ऊर्जा या कार्य", correct: true },
            { text: "धारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा की एक व्यावसायिक इकाई है, जिसका उपयोग बिजली के बिलों में किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 kWh = 3.6 × 10⁶ जूल।"
    },
    {
        question: "प्रश्न 25. जब आप अपने हाथों को रगड़ते हैं, तो आप ________ के विरुद्ध कार्य करते हैं।",
        answers: shuffle([
            { text: "घर्षण", correct: true },
            { text: "गुरुत्वाकर्षण", correct: false },
            { text: "वायु प्रतिरोध", correct: false },
            { text: "अभिलंब बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाथों को रगड़ने में किया गया कार्य घर्षण के कारण ऊष्मा में परिवर्तित हो जाता है, जिससे वे गर्म महसूस होते हैं।"
    },
    {
        question: "प्रश्न 26. कार्य का मान किस निर्देश तंत्र में बदल सकता है?",
        answers: shuffle([
            { text: "सभी निर्देश तंत्रों में यह समान रहता है।", correct: false },
            { text: "यह पर्यवेक्षक की गति के आधार पर बदल सकता है।", correct: true },
            { text: "यह केवल अजड़त्वीय तंत्रों में बदलता है।", correct: false },
            { text: "यह केवल घूर्णी तंत्रों में बदलता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि विस्थापन पर्यवेक्षक पर निर्भर करता है, इसलिए अलग-अलग वेग से गतिमान पर्यवेक्षकों के लिए किए गए कार्य का मान अलग-अलग हो सकता है।"
    },
    {
        question: "प्रश्न 27. एक साइकिल सवार ब्रेक लगाता है और रुक जाता है। सड़क द्वारा टायर पर किया गया कार्य है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: true },
            { text: "शून्य", correct: false },
            { text: "साइकिल के भार के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल गति के विपरीत दिशा में कार्य करता है, जो साइकिल की गतिज ऊर्जा को कम करता है, इसलिए किया गया कार्य ऋणात्मक है।"
    },
    {
        question: "प्रश्न 28. किसी गैस के प्रसार में किया गया कार्य क्या कहलाता है?",
        answers: shuffle([
            { text: "आंतरिक ऊर्जा", correct: false },
            { text: "ऊष्मागतिक कार्य", correct: true },
            { text: "एन्थैल्पी", correct: false },
            { text: "एन्ट्रापी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई गैस फैलती है, तो वह अपने परिवेश पर कार्य करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे ऊष्मागतिकी में दाब-आयतन कार्य के रूप में जाना जाता है।"
    },
    {
        question: "प्रश्न 29. कार्य की अवधारणा हमें ________ को समझने में मदद करती है।",
        answers: shuffle([
            { text: "ऊर्जा के स्थानांतरण", correct: false },
            { text: "बल के प्रभाव", correct: false },
            { text: "गति में परिवर्तन", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य एक मौलिक अवधारणा है जो इन सभी संबंधित भौतिक घटनाओं को जोड़ती है।"
    },
    {
        question: "प्रश्न 30. किसी वस्तु को धीरे-धीरे उठाने में किया गया कार्य तेजी से उठाने में किए गए कार्य की तुलना में:",
        answers: shuffle([
            { text: "कम होता है।", correct: false },
            { text: "अधिक होता है।", correct: false },
            { text: "बराबर होता है।", correct: true },
            { text: "शून्य होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य केवल बल और विस्थापन पर निर्भर करता है, समय पर नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, तेजी से उठाने में अधिक शक्ति की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 31. यदि कोई बल F, किसी वस्तु को v वेग से अपनी ही दिशा में गति करा रहा है, तो शक्ति (Power) होगी:",
        answers: shuffle([
            { text: "F/v", correct: false },
            { text: "Fv", correct: true },
            { text: "Fv²", correct: false },
            { text: "F²v", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति = कार्य/समय = (बल × दूरी)/समय = बल × (दूरी/समय) = बल × वेग।"
    },
    {
        question: "प्रश्न 32. एक बल द्वारा कार्य किए जाने के लिए, बल का ________ विस्थापन की दिशा में होना चाहिए।",
        answers: shuffle([
            { text: "परिमाण", correct: false },
            { text: "घटक", correct: true },
            { text: "दिशा", correct: false },
            { text: "प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केवल बल का वह घटक जो विस्थापन की दिशा या उसके विपरीत दिशा में होता है, कार्य करता है।"
    },
    {
        question: "प्रश्न 33. एक इलेक्ट्रॉन नाभिक के चारों ओर एक वृत्ताकार कक्षा में घूमता है। एक चक्कर में स्थिरविद्युत बल द्वारा किया गया कार्य है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थिरविद्युत बल (अभिकेंद्रीय बल) हमेशा विस्थापन (स्पर्शरेखा) के लंबवत होता है, इसलिए किया गया कार्य शून्य है।"
    },
    {
        question: "प्रश्न 34. एक रॉकेट ऊपर की ओर त्वरित हो रहा है। रॉकेट के इंजन द्वारा किया गया कार्य है:",
        answers: shuffle([
            { text: "केवल गुरुत्वाकर्षण के विरुद्ध।", correct: false },
            { text: "केवल रॉकेट को गतिज ऊर्जा देने के लिए।", correct: false },
            { text: "गुरुत्वाकर्षण के विरुद्ध और गतिज ऊर्जा प्रदान करने दोनों के लिए।", correct: true },
            { text: "शून्य।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंजन द्वारा किया गया कार्य रॉकेट की स्थितिज ऊर्जा (गुरुत्वाकर्षण के विरुद्ध) और गतिज ऊर्जा दोनों को बढ़ाता है।"
    },
    {
        question: "प्रश्न 35. एक असंरक्षी बल के विरुद्ध एक बंद पथ में किया गया कार्य:",
        answers: shuffle([
            { text: "हमेशा शून्य होता है।", correct: false },
            { text: "हमेशा अशून्य होता है।", correct: true },
            { text: "हमेशा धनात्मक होता है।", correct: false },
            { text: "हमेशा ऋणात्मक होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असंरक्षी बल (जैसे घर्षण) द्वारा हमेशा ऊर्जा का क्षय होता है, इसलिए एक बंद लूप में कुल कार्य शून्य नहीं हो सकता।"
    },
    {
        question: "प्रश्न 36. कार्य की SI इकाई 'जूल' किस वैज्ञानिक के सम्मान में रखी गई है?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "जेम्स प्रेस्कॉट जूल", correct: true },
            { text: "जेम्स वॉट", correct: false },
            { text: "गैलीलियो गैलिली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जेम्स जूल ने ऊष्मा, कार्य और ऊर्जा के बीच संबंध स्थापित करने में महत्वपूर्ण योगदान दिया।"
    },
    {
        question: "प्रश्न 37. एक व्यक्ति अपने हाथों में एक भारी सूटकेस लेकर बस का इंतजार कर रहा है। वह थक जाता है, लेकिन भौतिकी के अनुसार उसने कितना कार्य किया है?",
        answers: shuffle([
            { text: "बहुत अधिक", correct: false },
            { text: "कुछ धनात्मक कार्य", correct: false },
            { text: "कुछ ऋणात्मक कार्य", correct: false },
            { text: "शून्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि उसकी मांसपेशियों में जैविक कार्य हो रहा है, लेकिन सूटकेस पर किया गया यांत्रिक कार्य शून्य है क्योंकि कोई विस्थापन नहीं है।"
    },
    {
        question: "प्रश्न 38. यदि किसी वस्तु की गतिज ऊर्जा अपरिवर्तित रहती है, तो उस पर किया गया कुल कार्य:",
        answers: shuffle([
            { text: "धनात्मक है।", correct: false },
            { text: "ऋणात्मक है।", correct: false },
            { text: "शून्य है।", correct: true },
            { text: "वस्तु के भार के बराबर है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य-ऊर्जा प्रमेय के अनुसार, यदि गतिज ऊर्जा में कोई परिवर्तन नहीं होता (ΔKE = 0), तो शुद्ध कार्य भी शून्य होता है।"
    },
    {
        question: "प्रश्न 39. कार्य का ________ पर कोई प्रभाव नहीं पड़ता।",
        answers: shuffle([
            { text: "वस्तु की ऊर्जा", correct: false },
            { text: "वस्तु की गति", correct: false },
            { text: "वस्तु की स्थिति", correct: false },
            { text: "वस्तु के जड़त्व", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य वस्तु की ऊर्जा और गति की अवस्था को बदल सकता है, लेकिन यह उसके आंतरिक गुण जड़त्व (द्रव्यमान) को नहीं बदलता है।"
    },
    {
        question: "प्रश्न 40. यदि बल और विस्थापन के बीच का कोण 180° है, तो किया गया कार्य:",
        answers: shuffle([
            { text: "अधिकतम धनात्मक होगा।", correct: false },
            { text: "अधिकतम ऋणात्मक होगा।", correct: true },
            { text: "शून्य होगा।", correct: false },
            { text: "अनंत होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> cos(180°) = -1 होता है, इसलिए कार्य = -Fd, जो कि अधिकतम ऋणात्मक मान है।"
    },
    {
        question: "प्रश्न 41. एक चरखी प्रणाली का उपयोग भारी वस्तु को उठाने के लिए किया जाता है क्योंकि यह:",
        answers: shuffle([
            { text: "किए जाने वाले कार्य को कम कर देती है।", correct: false },
            { text: "आवश्यक बल को कम कर देती है।", correct: true },
            { text: "वस्तु के भार को कम कर देती है।", correct: false },
            { text: "गुरुत्वाकर्षण को बदल देती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक चरखी प्रणाली यांत्रिक लाभ प्रदान करती है, जिससे हमें कम बल लगाकर वस्तु को उठाने में मदद मिलती है,<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि हमें रस्सी को अधिक दूरी तक खींचना पड़ता है, जिससे कुल कार्य समान रहता है (आदर्श स्थिति में)।"
    },
    {
        question: "प्रश्न 42. निम्नलिखित में से कौन कार्य की इकाई है?",
        answers: shuffle([
            { text: "न्यूटन-मीटर", correct: false },
            { text: "किलोवॉट-घंटा", correct: false },
            { text: "इलेक्ट्रॉन-वोल्ट", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी विभिन्न संदर्भों में उपयोग की जाने वाली कार्य और ऊर्जा की इकाइयाँ हैं।"
    },
    {
        question: "प्रश्न 43. जब कोई पिंड किसी अन्य पिंड पर कार्य करता है, तो ________ का स्थानांतरण होता है।",
        answers: shuffle([
            { text: "ऊर्जा", correct: true },
            { text: "संवेग", correct: false },
            { text: "बल", correct: false },
            { text: "शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य को ऊर्जा के स्थानांतरण की एक विधि के रूप में देखा जा सकता है।"
    },
    {
        question: "प्रश्न 44. किसी वस्तु पर किया गया कार्य ऋणात्मक हो सकता है, लेकिन उसकी गतिज ऊर्जा:",
        answers: shuffle([
            { text: "हमेशा धनात्मक होती है।", correct: true },
            { text: "ऋणात्मक हो सकती है।", correct: false },
            { text: "हमेशा शून्य होती है।", correct: false },
            { text: "धनात्मक या ऋणात्मक हो सकती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा (½mv²) में द्रव्यमान (m) और वेग का वर्ग (v²) दोनों हमेशा धनात्मक या शून्य होते हैं, इसलिए गतिज ऊर्जा कभी ऋणात्मक नहीं हो सकती।"
    },
    {
        question: "प्रश्न 45. एक संरक्षी बल द्वारा स्थिति A से B तक जाने में किया गया कार्य W है। B से A तक वापस आने में किया गया कार्य होगा:",
        answers: shuffle([
            { text: "W", correct: false },
            { text: "-W", correct: true },
            { text: "2W", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संरक्षी बल द्वारा किया गया कार्य पथ से स्वतंत्र होता है, लेकिन विस्थापन की दिशा उलटने पर उसका चिह्न उलट जाता है।"
    },
    {
        question: "प्रश्न 46. एक व्यक्ति 10 किलोग्राम का पत्थर लेकर 10 मीटर चलता है। किया गया कार्य है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "निर्धारित नहीं किया जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पत्थर को पकड़ने के लिए लगाया गया बल ऊपर की ओर है और विस्थापन क्षैतिज है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोण 90° होने के कारण कार्य शून्य है।"
    },
    {
        question: "प्रश्न 47. यदि किसी वस्तु पर किया गया कार्य केवल उसकी प्रारंभिक और अंतिम स्थिति पर निर्भर करता है, तो बल है:",
        answers: shuffle([
            { text: "घर्षण", correct: false },
            { text: "श्यान", correct: false },
            { text: "संरक्षी", correct: true },
            { text: "असंरक्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह संरक्षी बल की परिभाषा है।"
    },
    {
        question: "प्रश्न 48. एक बच्चे द्वारा खिलौना कार को धागे से खींचना ________ कार्य का एक उदाहरण है।",
        answers: shuffle([
            { text: "धनात्मक", correct: true },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल और विस्थापन के बीच का कोण 90° से कम है, इसलिए कार्य धनात्मक है।"
    },
    {
        question: "प्रश्न 49. सभी असंरक्षी बल ________ होते हैं।",
        answers: shuffle([
            { text: "वेग-निर्भर", correct: false },
            { text: "स्थिति-निर्भर", correct: false },
            { text: "पथ-निर्भर", correct: true },
            { text: "त्वरण-निर्भर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असंरक्षी बलों द्वारा किया गया कार्य तय किए गए पथ की लंबाई पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 50. जब किसी गैस का संपीडन किया जाता है, तो गैस पर किया गया कार्य होता है:",
        answers: shuffle([
            { text: "धनात्मक", correct: true },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: false },
            { text: "यह गैस पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाहरी बल और आयतन में परिवर्तन की दिशा समान होती है (दोनों अंदर की ओर), इसलिए गैस 'पर' किया गया कार्य धनात्मक होता है।"
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