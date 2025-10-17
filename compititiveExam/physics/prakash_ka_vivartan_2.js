const questions = [
    {
        topHeading: "प्रकाश के विवर्तन पर आधारित 50 MCQs,,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. फ्रेनेल विवर्तन में तरंगाग्र कैसा होता है?",
        answers: shuffle([
            { text: "हमेशा समतल", correct: false },
            { text: "गोलीय या बेलनाकार", correct: true },
            { text: "हमेशा अनुपस्थित", correct: false },
            { text: "हमेशा रैखिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रेनेल विवर्तन में, स्रोत और/या पर्दा विवर्तक वस्तु से सीमित दूरी पर होते हैं, इसलिए तरंगाग्र वक्रित (गोलीय या बेलनाकार) होता है।"
    },
    {
        question: "प्रश्न 2. विवर्तन की घटना सबसे प्रमुख कब होती है?",
        answers: shuffle([
            { text: "जब तरंगदैर्ध्य, अवरोध के आकार से बहुत छोटा हो।", correct: false },
            { text: "जब तरंगदैर्ध्य, अवरोध के आकार के बराबर हो।", correct: true },
            { text: "जब तरंगदैर्ध्य, अवरोध के आकार से बहुत बड़ा हो।", correct: false },
            { text: "जब प्रकाश की तीव्रता बहुत अधिक हो।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वह स्थिति है जहाँ तरंगों का मुड़ना और फैलना सबसे अधिक स्पष्ट होता है।"
    },
    {
        question: "प्रश्न 3. यदि हम पानी में एकल-स्लिट विवर्तन प्रयोग करें, तो फ्रिंज की चौड़ाई पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "बढ़ जाएगी।", correct: false },
            { text: "घट जाएगी।", correct: true },
            { text: "अपरिवर्तित रहेगी।", correct: false },
            { text: "गायब हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी में प्रकाश का तरंगदैर्ध्य हवा की तुलना में कम हो जाता है (λ′=λ/n)।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि फ्रिंज की चौड़ाई तरंगदैर्ध्य के समानुपाती होती है, इसलिए यह घट जाएगी।"
    },
    {
        question: "प्रश्न 4. किस घटना के कारण सूर्य या चंद्रमा के चारों ओर कभी-कभी एक प्रभामंडल (corona) दिखाई देता है?",
        answers: shuffle([
            { text: "अपवर्तन", correct: false },
            { text: "परावर्तन", correct: false },
            { text: "पतले बादलों में मौजूद पानी की छोटी बूंदों या बर्फ के क्रिस्टल द्वारा विवर्तन", correct: true },
            { text: "प्रकीर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रभामंडल (halo से भिन्न) विवर्तन के कारण बनता है और अक्सर इसमें इंद्रधनुषी रंग दिखाई देते हैं।"
    },
    {
        question: "प्रश्न 5. प्रकाश की सीधी रेखा में गमन की अवधारणा किसके द्वारा सबसे अच्छी तरह समझाई जा सकती है?",
        answers: shuffle([
            { text: "केवल तरंग सिद्धांत", correct: false },
            { text: "केवल कण सिद्धांत", correct: false },
            { text: "हाइगेन्स के सिद्धांत के एक अनुमान के रूप में, जब तरंगदैर्ध्य बहुत छोटा हो", correct: true },
            { text: "यह एक गलत अवधारणा है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब तरंगदैर्ध्य अवरोधों की तुलना में बहुत छोटा होता है, तो विवर्तन नगण्य होता है और तरंग लगभग सीधी रेखा में चलती है, जिसे हम किरण प्रकाशिकी में पढ़ते हैं।"
    },
    {
        question: "प्रश्न 6. व्यतिकरण में फ्रिंज की चौड़ाई...",
        answers: shuffle([
            { text: "सभी फ्रिंजों के लिए समान होती है।", correct: true },
            { text: "केंद्रीय फ्रिंज के लिए अधिकतम होती है।", correct: false },
            { text: "केंद्र से दूर जाने पर बढ़ती है।", correct: false },
            { text: "केंद्र से दूर जाने पर घटती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यंग के द्वि-स्लिट प्रयोग में, सभी दीप्त और अदीप्त फ्रिंजों की चौड़ाई समान होती है।"
    },
    {
        question: "प्रश्न 7. विवर्तन में फ्रिंज की चौड़ाई...",
        answers: shuffle([
            { text: "सभी फ्रिंजों के लिए समान होती है।", correct: false },
            { text: "केंद्रीय फ्रिंज को छोड़कर, अन्य सभी फ्रिंजों के लिए समान होती है।", correct: true },
            { text: "केंद्र से दूर जाने पर बढ़ती है।", correct: false },
            { text: "केंद्र से दूर जाने पर घटती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रीय उच्चिष्ठ, द्वितीयक उच्चिष्ठों से दोगुना चौड़ा होता है, लेकिन सभी द्वितीयक उच्चिष्ठों की चौड़ाई समान होती है।"
    },
    {
        question: "प्रश्न 8. विवर्तन प्रतिरूप में ऊर्जा का पुनर्वितरण कैसे होता है?",
        answers: shuffle([
            { text: "ऊर्जा निम्निष्ठों पर केंद्रित होती है।", correct: false },
            { text: "ऊर्जा उच्चिष्ठों पर केंद्रित होती है।", correct: true },
            { text: "ऊर्जा समान रूप से वितरित होती है।", correct: false },
            { text: "ऊर्जा नष्ट हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन, व्यतिकरण की तरह, ऊर्जा के पुनर्वितरण की एक प्रक्रिया है, जहाँ विनाशी व्यतिकरण के क्षेत्रों (निम्निष्ठ) से ऊर्जा संपोषी व्यतिकरण के क्षेत्रों (उच्चिष्ठ) में स्थानांतरित हो जाती है।"
    },
    {
        question: "प्रश्न 9. प्रकाश का तरंग सिद्धांत किसने प्रतिपादित किया?",
        answers: shuffle([
            { text: "न्यूटन", correct: false },
            { text: "आइंस्टीन", correct: false },
            { text: "हाइगेन्स", correct: true },
            { text: "प्लैंक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिस्टियान हाइगेन्स ने 17वीं शताब्दी में यह सिद्धांत दिया कि प्रकाश तरंगों से बना है, जिसने परावर्तन, अपवर्तन और विवर्तन की व्याख्या की।"
    },
    {
        question: "प्रश्न 10. क्या विवर्तन के लिए कला-संबद्ध स्रोतों की आवश्यकता होती है?",
        answers: shuffle([
            { text: "नहीं, कभी नहीं।", correct: false },
            { text: "हाँ, एक ही तरंगाग्र के विभिन्न बिंदु कला-संबद्ध स्रोतों के रूप में कार्य करते हैं।", correct: true },
            { text: "केवल फ्रॉनहॉफर विवर्तन में।", correct: false },
            { text: "केवल फ्रेनेल विवर्तन में।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक ही तरंगाग्र से उत्पन्न होने वाली सभी द्वितीयक तरंगिकाएँ स्वाभाविक रूप से कला-संबद्ध होती हैं, जिससे वे एक स्थिर व्यतिकरण (विवर्तन) प्रतिरूप बना सकती हैं।"
    },
    {
        question: "प्रश्न 11. यदि हम अपनी दो उंगलियों को बहुत पास लाकर उनके बीच की संकीर्ण खाई से दूर के प्रकाश स्रोत को देखें, तो हमें क्या दिखाई देगा?",
        answers: shuffle([
            { text: "प्रकाश स्रोत और अधिक स्पष्ट दिखाई देगा।", correct: false },
            { text: "प्रकाश स्रोत के समानांतर गहरे और चमकीले बैंड दिखाई देंगे।", correct: true },
            { text: "प्रकाश स्रोत गायब हो जाएगा।", correct: false },
            { text: "कोई विशेष प्रभाव नहीं दिखेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उंगलियों के बीच की खाई एक संकीर्ण स्लिट की तरह काम करती है, जो प्रकाश को विवर्तित करके एक विवर्तन प्रतिरूप बनाती है।"
    },
    {
        question: "प्रश्न 12. \"स्पेक्ट्रोमीटर\" में प्रकाश के तरंगदैर्ध्य को मापने के लिए किस घटक का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "लेंस", correct: false },
            { text: "प्रिज्म या विवर्तन ग्रेटिंग", correct: true },
            { text: "पोलेरॉइड", correct: false },
            { text: "दूरदर्शी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों घटक प्रकाश को उसके स्पेक्ट्रम में विभाजित करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ग्रेटिंग के मामले में, विभिन्न तरंगदैर्ध्यों के विचलन कोणों को मापकर तरंगदैर्ध्य की सटीक गणना की जा सकती है।"
    },
    {
        question: "प्रश्न 13. समुद्र की लहरें बंदरगाह में प्रवेश करने पर फैल क्यों जाती हैं?",
        answers: shuffle([
            { text: "पानी की गहराई के कारण", correct: false },
            { text: "हवा के कारण", correct: false },
            { text: "बंदरगाह के संकीर्ण प्रवेश द्वार द्वारा जल तरंगों के विवर्तन के कारण", correct: true },
            { text: "ज्वार-भाटे के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंदरगाह का प्रवेश द्वार एक द्वारक के रूप में कार्य करता है, और जल तरंगों का तरंगदैर्ध्य बड़ा होने के कारण, वे आसानी से विवर्तित होकर बंदरगाह के अंदर हर दिशा में फैल जाती हैं।"
    },
    {
        question: "प्रश्न 14. फ्रेनेल दूरी क्या है?",
        answers: shuffle([
            { text: "स्रोत और पर्दे के बीच की दूरी।", correct: false },
            { text: "वह दूरी जहाँ तक किरण प्रकाशिकी लागू होती है और जिसके बाद तरंग प्रकाशिकी (विवर्तन) प्रभावी हो जाती है।", correct: true },
            { text: "लेंस की फोकस दूरी।", correct: false },
            { text: "दो स्लिटों के बीच की दूरी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक अनुमानित सीमा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस दूरी से कम पर, विवर्तन के प्रभाव महत्वपूर्ण होते हैं और प्रकाश को सीधी रेखा में चलता हुआ नहीं माना जा सकता है।"
    },
    {
        question: "प्रश्न 15. निम्नलिखित में से कौन सी घटना प्रकाश की अनुप्रस्थ प्रकृति का प्रमाण है?",
        answers: shuffle([
            { text: "विवर्तन", correct: false },
            { text: "व्यतिकरण", correct: false },
            { text: "ध्रुवण", correct: true },
            { text: "अपवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुवण की घटना केवल अनुप्रस्थ तरंगों में संभव है क्योंकि इसमें कंपन के तल को सीमित किया जाता है, जो अनुदैर्ध्य तरंगों (जैसे ध्वनि) में संभव नहीं है।"
    },
    {
        question: "प्रश्न 16. एक दीवार के कोने के पीछे खड़े व्यक्ति की आवाज तो सुनी जा सकती है, लेकिन उसे देखा नहीं जा सकता। क्यों?",
        answers: shuffle([
            { text: "क्योंकि ध्वनि तरंगें परावर्तित होती हैं, प्रकाश नहीं।", correct: false },
            { text: "क्योंकि ध्वनि का तरंगदैर्ध्य बड़ा होता है और वह आसानी से विवर्तित हो जाती है, जबकि प्रकाश का तरंगदैर्ध्य छोटा होता है और वह लगभग सीधा चलता है।", correct: true },
            { text: "क्योंकि हमारी आंखें कानों से कमजोर होती हैं।", correct: false },
            { text: "क्योंकि प्रकाश अवशोषित हो जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ध्वनि और प्रकाश के विवर्तन में अंतर का एक उत्कृष्ट दैनिक जीवन का उदाहरण है।"
    },
    {
        question: "प्रश्न 17. क्या विवर्तन के लिए माध्यम की आवश्यकता होती है?",
        answers: shuffle([
            { text: "हाँ, हमेशा।", correct: false },
            { text: "नहीं, प्रकाश तरंगें निर्वात में भी विवर्तित हो सकती हैं।", correct: true },
            { text: "केवल सघन माध्यम में।", correct: false },
            { text: "केवल विरल माध्यम में।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन तरंग का एक ज्यामितीय गुण है और यह माध्यम की उपस्थिति या अनुपस्थिति पर निर्भर नहीं करता है।"
    },
    {
        question: "प्रश्न 18. एक पिनहोल कैमरा किस सिद्धांत पर आधारित है?",
        answers: shuffle([
            { text: "विवर्तन", correct: false },
            { text: "प्रकाश का सीधी रेखा में गमन", correct: true },
            { text: "अपवर्तन", correct: false },
            { text: "परावर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि पिनहोल से थोड़ा विवर्तन होता है, लेकिन कैमरे का मूल सिद्धांत प्रकाश का ऋजुरेखीय संचरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि छेद बहुत छोटा कर दिया जाए, तो विवर्तन के कारण छवि धुंधली हो जाएगी।"
    },
    {
        question: "प्रश्न 19. एकल-स्लिट विवर्तन में, केंद्रीय उच्चिष्ठ की तीव्रता...",
        answers: shuffle([
            { text: "सभी द्वितीयक उच्चिष्ठों के योग के बराबर होती है।", correct: false },
            { text: "किसी भी द्वितीयक उच्चिष्ठ से बहुत अधिक होती है।", correct: true },
            { text: "सभी द्वितीयक उच्चिष्ठों से कम होती है।", correct: false },
            { text: "शून्य होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग सारी प्रकाश ऊर्जा केंद्रीय उच्चिष्ठ में ही केंद्रित होती है।"
    },
    {
        question: "प्रश्न 20. विवर्तन ग्रेटिंग समीकरण (dsinθ=nλ) में 'd' क्या दर्शाता है?",
        answers: shuffle([
            { text: "ग्रेटिंग की मोटाई", correct: false },
            { text: "दो क्रमागत स्लिटों के बीच की दूरी", correct: true },
            { text: "स्लिट की चौड़ाई", correct: false },
            { text: "पर्दे की दूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'd' को ग्रेटिंग अंतराल या ग्रेटिंग तत्व कहा जाता है।"
    },
    {
        question: "प्रश्न 21. यदि हम एक लाल लेजर और एक हरे लेजर को एक ही स्लिट से गुजारें, तो किसका केंद्रीय उच्चिष्ठ अधिक चौड़ा होगा?",
        answers: shuffle([
            { text: "हरे लेजर का", correct: false },
            { text: "लाल लेजर का", correct: true },
            { text: "दोनों का बराबर होगा", correct: false },
            { text: "यह तीव्रता पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रीय उच्चिष्ठ की चौड़ाई तरंगदैर्ध्य के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि लाल प्रकाश का तरंगदैर्ध्य हरे प्रकाश से अधिक होता है, उसका केंद्रीय उच्चिष्ठ भी अधिक चौड़ा होगा।"
    },
    {
        question: "प्रश्न 22. प्रकाश का सरल रेखीय पथ से मुड़ना कहलाता है:",
        answers: shuffle([
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन", correct: true },
            { text: "परावर्तन", correct: false },
            { text: "ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विवर्तन की एक सरल परिभाषा है, जो अवरोधों के किनारों पर होती है।"
    },
    {
        question: "प्रश्न 23. पानी की सतह पर तेल की पतली परत में रंग दिखाई देने का कारण है:",
        answers: shuffle([
            { text: "विवर्तन", correct: false },
            { text: "व्यतिकरण", correct: true },
            { text: "विक्षेपण", correct: false },
            { text: "ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घटना प्रकाश के व्यतिकरण के कारण होती है, न कि विवर्तन के।<br><br><i class='fa-solid fa-angles-right icon'></i> तेल की परत की ऊपरी और निचली सतहों से परावर्तित प्रकाश में व्यतिकरण होता है।"
    },
    {
        question: "प्रश्न 24. विवर्तन तरंगों का एक... गुण है।",
        answers: shuffle([
            { text: "विशिष्ट", correct: false },
            { text: "सामान्य", correct: true },
            { text: "दुर्लभ", correct: false },
            { text: "अप्रासंगिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी प्रकार की तरंगें, चाहे वे यांत्रिक हों या विद्युत-चुंबकीय, विवर्तन का गुण प्रदर्शित करती हैं।"
    },
    {
        question: "प्रश्न 25. विवर्तन के कारण किसी यंत्र की... पर एक मौलिक सीमा लग जाती है।",
        answers: shuffle([
            { text: "आवर्धन क्षमता", correct: false },
            { text: "विभेदन क्षमता", correct: true },
            { text: "प्रकाश एकत्र करने की क्षमता", correct: false },
            { text: "फोकस दूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोई भी यंत्र सैद्धांतिक रूप से विवर्तन द्वारा लगाई गई सीमा से बेहतर विभेदन प्राप्त नहीं कर सकता है।"
    },
    {
        question: "प्रश्न 26. प्रकाश के क्वांटम सिद्धांत के अनुसार, प्रकाश किससे बना है?",
        answers: shuffle([
            { text: "तरंगों से", correct: false },
            { text: "फोटॉन नामक ऊर्जा के पैकेटों से", correct: true },
            { text: "इलेक्ट्रॉनों से", correct: false },
            { text: "प्रोटॉनों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत प्रकाश की कण प्रकृति की व्याख्या करता है, जबकि विवर्तन तरंग प्रकृति की व्याख्या करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रकाश में दोनों गुण होते हैं (द्वैत प्रकृति)।"
    },
    {
        question: "प्रश्न 27. 'किरण प्रकाशिकी' (Ray Optics) कब तक वैध है?",
        answers: shuffle([
            { text: "हमेशा", correct: false },
            { text: "जब तक अवरोधों का आकार तरंगदैर्ध्य की तुलना में बहुत बड़ा हो।", correct: true },
            { text: "जब तक प्रकाश की तीव्रता कम हो।", correct: false },
            { text: "केवल निर्वात में।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब यह शर्त पूरी होती है, तो विवर्तन के प्रभाव नगण्य होते हैं और प्रकाश को सीधी रेखा (किरण) में चलता हुआ माना जा सकता है।"
    },
    {
        question: "प्रश्न 28. फ्रेनेल और फ्रॉनहॉफर किसके प्रकार हैं?",
        answers: shuffle([
            { text: "लेंस", correct: false },
            { text: "दर्पण", correct: false },
            { text: "विवर्तन", correct: true },
            { text: "ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये विवर्तन के दो मुख्य वर्ग हैं, जो स्रोत और पर्दे की दूरी के आधार पर वर्गीकृत किए गए हैं।"
    },
    {
        question: "प्रश्न 29. एकल-स्लिट विवर्तन में, यदि स्लिट और पर्दे के बीच की दूरी बढ़ा दी जाए, तो फ्रिंज की रैखिक चौड़ाई पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "घट जाएगी।", correct: false },
            { text: "बढ़ जाएगी।", correct: true },
            { text: "अपरिवर्तित रहेगी।", correct: false },
            { text: "यह स्लिट की चौड़ाई पर निर्भर करेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रैखिक चौड़ाई, पर्दे की दूरी (D) के सीधे समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> पर्दा जितना दूर होगा, प्रतिरूप उतना ही बड़ा बनेगा।"
    },
    {
        question: "प्रश्न 30. प्रकाशिक तंतु संचार में, प्रकाश किस घटना के कारण तंतु के अंदर रहता है?",
        answers: shuffle([
            { text: "विवर्तन", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "अपवर्तन", correct: false },
            { text: "प्रकीर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश तंतु के कोर और क्लैडिंग के बीच के अंतराफलक पर बार-बार पूर्ण आंतरिक परावर्तित होता है, यह विवर्तन पर आधारित नहीं है।"
    },
    {
        question: "प्रश्न 31. विवर्तन पैटर्न में केंद्रीय उच्चिष्ठ की कोणीय चौड़ाई किसके व्युत्क्रमानुपाती होती है?",
        answers: shuffle([
            { text: "तरंगदैर्ध्य", correct: false },
            { text: "पर्दे की दूरी", correct: false },
            { text: "स्लिट की चौड़ाई", correct: true },
            { text: "प्रकाश की तीव्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक संकीर्ण स्लिट प्रकाश को अधिक फैलाती है, जिससे एक चौड़ा केंद्रीय उच्चिष्ठ बनता है।"
    },
    {
        question: "प्रश्न 32. प्रकाश का सीधी रेखा में चलना क्या कहलाता है?",
        answers: shuffle([
            { text: "विवर्तन", correct: false },
            { text: "ऋजुरेखीय संचरण", correct: true },
            { text: "अपवर्तन", correct: false },
            { text: "परावर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह किरण प्रकाशिकी का आधार है, जो तरंग प्रकाशिकी का एक विशेष मामला है जब विवर्तन नगण्य होता है।"
    },
    {
        question: "प्रश्न 33. कौन सा यंत्र तरंगदैर्ध्य के बहुत सटीक मापन के लिए उपयोग किया जाता है?",
        answers: shuffle([
            { text: "सूक्ष्मदर्शी", correct: false },
            { text: "दूरदर्शी", correct: false },
            { text: "विवर्तन ग्रेटिंग स्पेक्ट्रोमीटर", correct: true },
            { text: "पेरिस्कोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेटिंग समीकरण (dsinθ=nλ) का उपयोग करके, विचलन कोण (θ) को बहुत सटीकता से मापकर तरंगदैर्ध्य (λ) की गणना की जा सकती है।"
    },
    {
        question: "प्रश्न 34. क्या विवर्तन के लिए प्रकाश का ध्रुवित होना आवश्यक है?",
        answers: shuffle([
            { text: "हाँ, हमेशा।", correct: false },
            { text: "नहीं, अध्रुवित प्रकाश भी विवर्तित हो सकता है।", correct: true },
            { text: "केवल यदि स्लिट बहुत संकीर्ण हो।", correct: false },
            { text: "केवल क्रिस्टल के मामले में।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन प्रकाश के ध्रुवण की स्थिति पर निर्भर नहीं करता है।"
    },
    {
        question: "प्रश्न 35. किस वैज्ञानिक के कार्य ने प्रकाश की तरंग प्रकृति को मजबूती से स्थापित किया, जो न्यूटन के कणिका सिद्धांत के विरुद्ध था?",
        answers: shuffle([
            { text: "अल्बर्ट आइंस्टीन", correct: false },
            { text: "मैक्स प्लैंक", correct: false },
            { text: "थॉमस यंग (अपने द्वि-स्लिट प्रयोग के साथ)", correct: true },
            { text: "लुई डी-ब्रोग्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यंग का द्वि-स्लिट प्रयोग, जिसमें व्यतिकरण और विवर्तन दोनों शामिल थे, तरंग सिद्धांत के लिए एक निर्णायक प्रमाण माना जाता है।"
    },
    {
        question: "प्रश्न 36. विवर्तन में, ऊर्जा...",
        answers: shuffle([
            { text: "उत्पन्न होती है।", correct: false },
            { text: "नष्ट हो जाती है।", correct: false },
            { text: "का पुनर्वितरण होता है।", correct: true },
            { text: "अपरिवर्तित और समान रूप से वितरित रहती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा संरक्षण का नियम लागू होता है;<br><br><i class='fa-solid fa-angles-right icon'></i> ऊर्जा केवल उन क्षेत्रों से हट जाती है जहाँ विनाशी व्यतिकरण होता है और उन क्षेत्रों में जुड़ जाती है जहाँ संपोषी व्यतिकरण होता है।"
    },
    {
        question: "प्रश्न 37. फ्रॉनहॉफर विवर्तन में लेंस का क्या उपयोग है?",
        answers: shuffle([
            { text: "स्रोत को स्लिट के पास रखने के लिए।", correct: false },
            { text: "प्रकाश स्रोत को स्लिट से प्रभावी अनंत दूरी पर रखने और पर्दे पर विवर्तन प्रतिरूप को केंद्रित करने के लिए।", correct: true },
            { text: "प्रकाश को ध्रुवित करने के लिए।", correct: false },
            { text: "प्रकाश की तीव्रता बढ़ाने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक लेंस समानांतर किरणों (अनंत से आती हुई) को अपने फोकस पर केंद्रित करता है और अपने फोकस पर रखे बिंदु स्रोत से समानांतर किरणें बनाता है, इस प्रकार अनंत दूरी की शर्तों को पूरा करता है।"
    },
    {
        question: "प्रश्न 38. एक तीखी सुई की नोक की छाया...",
        answers: shuffle([
            { text: "बिल्कुल तीखी होती है।", correct: false },
            { text: "थोड़ी गोल या कुंद होती है।", correct: true },
            { text: "अदृश्य होती है।", correct: false },
            { text: "हमेशा चमकीली होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन के कारण, प्रकाश सुई की बहुत तीखी नोक के चारों ओर मुड़ जाता है, जिससे छाया पूरी तरह से तीखी नहीं बन पाती है।"
    },
    {
        question: "प्रश्न 39. यदि हम एक कमरे में बात कर रहे हैं और दरवाजा थोड़ा खुला है, तो बाहर का व्यक्ति हमें सुन सकता है। यह किस घटना के कारण है?",
        answers: shuffle([
            { text: "ध्वनि का परावर्तन", correct: false },
            { text: "ध्वनि का अपवर्तन", correct: false },
            { text: "ध्वनि का विवर्तन", correct: true },
            { text: "ध्वनि का व्यतिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि तरंगें दरवाजे के खुलने से विवर्तित होकर कमरे के बाहर फैल जाती हैं।"
    },
    {
        question: "प्रश्न 40. मानव बाल द्वारा विवर्तन प्रतिरूप बनाया जा सकता है क्योंकि...",
        answers: shuffle([
            { text: "यह अपारदर्शी है।", correct: false },
            { text: "यह बेलनाकार है।", correct: false },
            { text: "इसका व्यास प्रकाश के तरंगदैर्ध्य की कोटि का है।", correct: true },
            { text: "यह प्रोटीन से बना है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पतला बाल एक संकीर्ण अवरोध के रूप में कार्य करता है, जो एकल-स्लिट के विवर्तन प्रतिरूप के समान ही एक प्रतिरूप बनाता है।"
    },
    {
        question: "प्रश्न 41. विवर्तन पैटर्न में चमकीले बैंड को क्या कहा जाता है?",
        answers: shuffle([
            { text: "निम्निष्ठ (मिनिमा)", correct: false },
            { text: "उच्चिष्ठ (मैक्सिमा)", correct: true },
            { text: "फ्रिंज", correct: false },
            { text: "स्पेक्ट्रम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये वे क्षेत्र हैं जहाँ तरंगों का संपोषी व्यतिकरण होता है।"
    },
    {
        question: "प्रश्न 42. विवर्तन पैटर्न में गहरे या काले बैंड को क्या कहा जाता है?",
        answers: shuffle([
            { text: "निम्निष्ठ (मिनिमा)", correct: true },
            { text: "उच्चिष्ठ (मैक्सिमा)", correct: false },
            { text: "फ्रिंज", correct: false },
            { text: "छाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये वे क्षेत्र हैं जहाँ तरंगों का विनाशी व्यतिकरण होता है।"
    },
    {
        question: "प्रश्न 43. क्या विवर्तन के लिए प्रकाश का एकवर्णी (monochromatic) होना आवश्यक है?",
        answers: shuffle([
            { text: "हाँ, हमेशा।", correct: false },
            { text: "नहीं, सफेद प्रकाश भी विवर्तित हो सकता है, लेकिन प्रतिरूप रंगीन होगा।", correct: true },
            { text: "केवल यदि स्लिट बहुत चौड़ी हो।", correct: false },
            { text: "केवल ग्रेटिंग के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकवर्णी प्रकाश एक स्पष्ट, एकल-रंग का प्रतिरूप बनाता है, जबकि सफेद प्रकाश कई अध्यारोपित रंगीन प्रतिरूप बनाता है।"
    },
    {
        question: "प्रश्न 44. एकल स्लिट के बजाय वृत्ताकार छिद्र का उपयोग करने पर विवर्तन प्रतिरूप कैसा होता है?",
        answers: shuffle([
            { text: "रैखिक फ्रिंजों का", correct: false },
            { text: "संकेंद्री वलयों का", correct: true },
            { text: "वर्गाकार धब्बों का", correct: false },
            { text: "कोई प्रतिरूप नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृत्ताकार समरूपता के कारण, प्रतिरूप में एक केंद्रीय डिस्क (एयरी डिस्क) और उसके चारों ओर चमकीले और काले वलय होते हैं।"
    },
    {
        question: "प्रश्न 45. प्रकाश की द्वैत प्रकृति का क्या अर्थ है?",
        answers: shuffle([
            { text: "यह दो गतियों से चलता है।", correct: false },
            { text: "यह दो रंगों का होता है।", correct: false },
            { text: "यह कुछ परिस्थितियों में तरंग की तरह और कुछ में कण की तरह व्यवहार करता है।", correct: true },
            { text: "यह दो दिशाओं में मुड़ सकता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन जैसी घटनाएं इसकी तरंग प्रकृति को दर्शाती हैं, जबकि प्रकाश-विद्युत प्रभाव जैसी घटनाएं इसकी कण (फोटॉन) प्रकृति को दर्शाती हैं।"
    },
    {
        question: "प्रश्न 46. यदि स्लिट की चौड़ाई तरंगदैर्ध्य से बहुत बड़ी हो, तो क्या होगा?",
        answers: shuffle([
            { text: "विवर्तन बहुत स्पष्ट होगा।", correct: false },
            { text: "विवर्तन नगण्य होगा और एक तीक्ष्ण छाया बनेगी।", correct: true },
            { text: "कोई प्रकाश नहीं गुजरेगा।", correct: false },
            { text: "प्रकाश अपवर्तित हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, किरण प्रकाशिकी लागू होती है और प्रकाश लगभग सीधी रेखा में चलता है।"
    },
    {
        question: "प्रश्न 47. किस प्रकार की तरंगों का विवर्तन नहीं होता है?",
        answers: shuffle([
            { text: "प्रकाश तरंगें", correct: false },
            { text: "ध्वनि तरंगें", correct: false },
            { text: "जल तरंगें", correct: false },
            { text: "सभी प्रकार की तरंगों का विवर्तन होता है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन तरंगों का एक सार्वभौमिक गुण है।"
    },
    {
        question: "प्रश्न 48. किस घटना के कारण एक बंद कमरे में भी बाहर से कुछ प्रकाश आ जाता है, भले ही कोई सीधा रास्ता न हो?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन (दरवाजे के नीचे की दरार आदि से)", correct: true },
            { text: "यह संभव नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश संकीर्ण दरारों से विवर्तित होकर कमरे के अंदर फैल सकता है।"
    },
    {
        question: "प्रश्न 49. \"बाबुनेट का सिद्धांत\" किससे संबंधित है?",
        answers: shuffle([
            { text: "ध्रुवण", correct: false },
            { text: "व्यतिकरण", correct: false },
            { text: "एक द्वारक और एक पूरक अपारदर्शी वस्तु द्वारा उत्पन्न विवर्तन प्रतिरूपों के बीच संबंध।", correct: true },
            { text: "अपवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत कहता है कि एक स्लिट द्वारा उत्पन्न विवर्तन प्रतिरूप और उसी आकार के एक तार द्वारा उत्पन्न प्रतिरूप, केंद्रीय चमकीले धब्बे को छोड़कर, समान होते हैं।"
    },
    {
        question: "प्रश्न 50. विवर्तन के अध्ययन का महत्व किस क्षेत्र में है?",
        answers: shuffle([
            { text: "प्रकाशिक यंत्रों के डिजाइन में", correct: false },
            { text: "क्रिस्टल संरचना के निर्धारण में", correct: false },
            { text: "होलोग्राफी में", correct: false },
            { text: "ये सभी में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन के सिद्धांत इन सभी और कई अन्य क्षेत्रों में मौलिक रूप से महत्वपूर्ण हैं।"
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