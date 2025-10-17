const questions = [
    {
        topHeading: "शक्ति पर आधारित 50 बहुविकल्पीय प्रश्न,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. यदि कोई वस्तु मुक्त रूप से गिर रही है, तो गुरुत्वाकर्षण बल द्वारा उस पर लगाई गई शक्ति...",
        answers: shuffle([
            { text: "शून्य होती है।", correct: false },
            { text: "स्थिर रहती है।", correct: false },
            { text: "समय के साथ बढ़ती है।", correct: true },
            { text: "समय के साथ घटती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त रूप से गिरने पर वस्तु का वेग (v) लगातार बढ़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि शक्ति P=F⋅v और गुरुत्वाकर्षण बल (F) स्थिर रहता है, इसलिए वेग बढ़ने के साथ शक्ति भी बढ़ती है।"
    },
    {
        question: "प्रश्न 2. ऑप्टिकल फाइबर में प्रकाश संकेतों की शक्ति को किस इकाई में मापा जाता है?",
        answers: shuffle([
            { text: "डेसिबल-मिलीवाट (dBm)", correct: true },
            { text: "कैंडेला", correct: false },
            { text: "लक्स", correct: false },
            { text: "हर्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूरसंचार और फाइबर ऑप्टिक्स में, सिग्नल की शक्ति को अक्सर एक मिलीवाट के सापेक्ष डेसिबल में व्यक्त किया जाता है, जिसे dBm कहते हैं।"
    },
    {
        question: "प्रश्न 3. जब कोई एथलीट भाला फेंकता है, तो फेंकने के क्षण में वह अधिकतम क्या प्रदान करता है?",
        answers: shuffle([
            { text: "ऊर्जा", correct: false },
            { text: "शक्ति", correct: true },
            { text: "बल", correct: false },
            { text: "वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कम से कम समय में अधिकतम बल लगाकर अधिकतम वेग प्रदान करने के लिए, एथलीट को अधिकतम शक्ति का विस्फोट करना पड़ता है।"
    },
    {
        question: "प्रश्न 4. एक गीगावाट (GW) कितने मेगावाट (MW) के बराबर होता है?",
        answers: shuffle([
            { text: "10 MW", correct: false },
            { text: "100 MW", correct: false },
            { text: "1000 MW", correct: true },
            { text: "10000 MW", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1 गीगावाट = 10⁹ वाट और 1 मेगावाट = 10⁶ वाट।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, 1 GW = 1000 × 10⁶ W = 1000 MW।"
    },
    {
        question: "प्रश्न 5. शक्ति का ऋणात्मक मान क्या दर्शाता है?",
        answers: shuffle([
            { text: "ऊर्जा का क्षय हो रहा है।", correct: false },
            { text: "निकाय द्वारा कार्य किया जा रहा है।", correct: false },
            { text: "निकाय पर बाह्य स्रोत द्वारा कार्य किया जा रहा है।", correct: true },
            { text: "यह संभव नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋणात्मक शक्ति का अर्थ है कि ऊर्जा निकाय में प्रवेश कर रही है, न कि उससे बाहर निकल रही है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, किसी वस्तु को धीमा करते समय ब्रेक द्वारा लगाई गई शक्ति ऋणात्मक होती है।"
    },
    {
        question: "प्रश्न 6. शक्ति और बल के बीच क्या संबंध है, यदि वस्तु स्थिर वेग से चल रही हो?",
        answers: shuffle([
            { text: "शक्ति बल के समानुपाती होती है।", correct: true },
            { text: "शक्ति बल के व्युत्क्रमानुपाती होती है।", correct: false },
            { text: "शक्ति बल के वर्ग के समानुपाती होती है।", correct: false },
            { text: "शक्ति पर बल का कोई प्रभाव नहीं पड़ता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूत्र P=F⋅v के अनुसार, यदि वेग (v) स्थिर है, तो शक्ति (P) सीधे बल (F) के समानुपाती होगी।"
    },
    {
        question: "प्रश्न 7. लेंस की शक्ति का मात्रक 'डायोप्टर' है। यह भौतिकी की 'कार्य करने की दर' वाली शक्ति से कैसे भिन्न है?",
        answers: shuffle([
            { text: "यह दोनों एक ही हैं।", correct: false },
            { text: "डायोप्टर प्रकाश को मोड़ने की क्षमता मापता है, कार्य की दर नहीं।", correct: true },
            { text: "डायोप्टर ऊर्जा का मात्रक है।", correct: false },
            { text: "डायोप्टर समय का मात्रक है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंस की शक्ति (Power of a lens) एक पूरी तरह से अलग अवधारणा है जो उसकी फोकस दूरी के व्युत्क्रम के बराबर होती है और प्रकाश को अभिसरित या अपसरित करने की क्षमता को मापती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका 'वाट' वाली शक्ति से कोई संबंध नहीं है।"
    },
    {
        question: "प्रश्न 8. एमकेएस (MKS) प्रणाली में शक्ति का मात्रक क्या है?",
        answers: shuffle([
            { text: "वाट", correct: true },
            { text: "जूल", correct: false },
            { text: "न्यूटन", correct: false },
            { text: "अर्ग/सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> MKS (मीटर-किलोग्राम-सेकंड) प्रणाली SI प्रणाली का अग्रदूत है, और इसमें भी शक्ति का मात्रक वाट (या जूल/सेकंड) ही है।"
    },
    {
        question: "प्रश्न 9. यदि किसी कार्य को करने में लगा समय आधा कर दिया जाए, तो आवश्यक शक्ति...",
        answers: shuffle([
            { text: "आधी हो जाएगी।", correct: false },
            { text: "समान रहेगी।", correct: false },
            { text: "दोगुनी हो जाएगी।", correct: true },
            { text: "चौथाई रह जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति (P=W/t) समय के व्युत्क्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि समय आधा होता है, तो समान कार्य करने के लिए शक्ति को दोगुना करना होगा।"
    },
    {
        question: "प्रश्न 10. एक टरबाइन की शक्ति का क्या अर्थ है?",
        answers: shuffle([
            { text: "टरबाइन का वजन।", correct: false },
            { text: "टरबाइन की घूमने की गति।", correct: false },
            { text: "वह दर जिस पर टरबाइन तरल की ऊर्जा को घूर्णी यांत्रिक ऊर्जा में परिवर्तित करती है।", correct: true },
            { text: "टरबाइन का आकार।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टरबाइन की शक्ति रेटिंग यह दर्शाती है कि वह प्रति सेकंड कितनी ऊर्जा (जैसे भाप, पानी या हवा से) को उपयोगी यांत्रिक कार्य में बदल सकती है।"
    },
    {
        question: "प्रश्न 11. कौन सी भौतिक राशि 'शक्ति × समय' के बराबर है?",
        answers: shuffle([
            { text: "बल", correct: false },
            { text: "संवेग", correct: false },
            { text: "त्वरण", correct: false },
            { text: "कार्य या ऊर्जा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि P=W/t होता है, इसलिए W=P×t होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः शक्ति और समय का गुणनफल किए गए कार्य या स्थानांतरित ऊर्जा के बराबर होता है।"
    },
    {
        question: "प्रश्न 12. किसी वस्तु को उठाने में किया गया कार्य किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "वस्तु के द्रव्यमान पर", correct: false },
            { text: "उठाई गई ऊँचाई पर", correct: false },
            { text: "गुरुत्वीय त्वरण पर", correct: false },
            { text: "कार्य करने में लगे समय पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण के विरुद्ध किया गया कार्य (W=mgh) केवल द्रव्यमान, गुरुत्वीय त्वरण और ऊँचाई पर निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> समय केवल शक्ति को प्रभावित करता है, कार्य को नहीं।"
    },
    {
        question: "प्रश्न 13. विद्युत परिपथ में, यदि प्रतिरोध (R) और धारा (I) ज्ञात हो, तो शक्ति (P) का सूत्र क्या होगा?",
        answers: shuffle([
            { text: "P=I2R", correct: true },
            { text: "P=I/R", correct: false },
            { text: "P=R/I2", correct: false },
            { text: "P=IR", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम जानते हैं कि P=V×I और ओम के नियम से V=I×R।<br><br><i class='fa-solid fa-angles-right icon'></i> V का मान P के सूत्र में रखने पर, हमें P=(IR)×I=I2R प्राप्त होता है।"
    },
    {
        question: "प्रश्न 14. एफपीएस (FPS - फुट-पाउंड-सेकंड) प्रणाली में शक्ति का मात्रक क्या है?",
        answers: shuffle([
            { text: "वाट", correct: false },
            { text: "अश्वशक्ति (हॉर्सपावर)", correct: false },
            { text: "फुट-पाउंड/सेकंड", correct: true },
            { text: "पाउंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> FPS प्रणाली में कार्य का मात्रक फुट-पाउंड और समय का मात्रक सेकंड होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, शक्ति का मात्रक फुट-पाउंड प्रति सेकंड होता है।"
    },
    {
        question: "प्रश्न 15. एक पंखे की शक्ति बढ़ाने से क्या होता है?",
        answers: shuffle([
            { text: "वह धीमा घूमता है।", correct: false },
            { text: "वह प्रति सेकंड अधिक हवा फेंकता है।", correct: true },
            { text: "वह कम बिजली की खपत करता है।", correct: false },
            { text: "उसका जीवनकाल बढ़ जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक शक्तिशाली पंखा प्रति इकाई समय में हवा की अधिक मात्रा को विस्थापित करने में सक्षम होता है, जिससे तेज हवा लगती है।"
    },
    {
        question: "प्रश्न 16. एक आदर्श (घर्षण रहित) मशीन में, निवेशित शक्ति (Input Power) और निर्गत शक्ति (Output Power) के बीच क्या संबंध होता है?",
        answers: shuffle([
            { text: "निवेशित शक्ति हमेशा निर्गत शक्ति से अधिक होती है।", correct: false },
            { text: "निवेशित शक्ति हमेशा निर्गत शक्ति से कम होती है।", correct: false },
            { text: "निवेशित शक्ति और निर्गत शक्ति बराबर होती हैं।", correct: true },
            { text: "दोनों के बीच कोई संबंध नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श मशीन की दक्षता 100% होती है, जिसका अर्थ है कि कोई ऊर्जा हानि नहीं होती है, इसलिए इनपुट शक्ति आउटपुट शक्ति के बराबर होती है।"
    },
    {
        question: "प्रश्न 17. वास्तविक मशीनों में निर्गत शक्ति हमेशा निवेशित शक्ति से कम क्यों होती है?",
        answers: shuffle([
            { text: "ऊर्जा संरक्षण के नियम के कारण।", correct: false },
            { text: "घर्षण और अन्य प्रतिरोधों के कारण ऊर्जा की हानि होती है।", correct: true },
            { text: "मशीन के भारी होने के कारण।", correct: false },
            { text: "यह एक गलत कथन है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वास्तविक दुनिया में, घर्षण, वायु प्रतिरोध आदि के कारण कुछ ऊर्जा ऊष्मा या ध्वनि के रूप में नष्ट हो जाती है, जिससे आउटपुट शक्ति हमेशा इनपुट शक्ति से कम होती है।"
    },
    {
        question: "प्रश्न 18. शक्ति को बल और वेग के किस गुणनफल के रूप में व्यक्त किया जाता है?",
        answers: shuffle([
            { text: "सदिश गुणनफल (Cross Product)", correct: false },
            { text: "अदिश गुणनफल (Dot Product)", correct: true },
            { text: "सामान्य गुणनफल", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति एक अदिश राशि है और यह बल (सदिश) और वेग (सदिश) के अदिश गुणनफल (P=F⋅v) से प्राप्त होती है।"
    },
    {
        question: "प्रश्न 19. 'ऊर्जा दक्षता' का क्या अर्थ है?",
        answers: shuffle([
            { text: "अधिक शक्ति का उपयोग करना।", correct: false },
            { text: "कम काम करना।", correct: false },
            { text: "समान कार्य करने के लिए कम ऊर्जा या शक्ति का उपयोग करना।", correct: true },
            { text: "ऊर्जा का भंडारण करना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा दक्षता का लक्ष्य कम से कम ऊर्जा की खपत करके वांछित परिणाम (आउटपुट) प्राप्त करना है, जिससे ऊर्जा की बचत होती है।"
    },
    {
        question: "प्रश्न 20. एक भारोत्तोलक (weightlifter) वजन उठाते समय सबसे अधिक शक्ति का उपयोग कब करता है?",
        answers: shuffle([
            { text: "वजन को स्थिर पकड़े रहने पर।", correct: false },
            { text: "वजन को तेजी से ऊपर उठाने पर।", correct: true },
            { text: "वजन को धीरे-धीरे नीचे लाने पर।", correct: false },
            { text: "वजन उठाने के बाद।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति कार्य करने की दर है।<br><br><i class='fa-solid fa-angles-right icon'></i> वजन को तेजी से उठाने का मतलब है कि कम समय में समान कार्य किया जा रहा है, जिसके लिए अधिक शक्ति की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 21. नाभिकीय रिएक्टर की शक्ति का क्या अर्थ है?",
        answers: shuffle([
            { text: "रिएक्टर का भौतिक आकार।", correct: false },
            { text: "वह दर जिस पर यह ऊष्मीय ऊर्जा उत्पन्न करता है।", correct: true },
            { text: "रिएक्टर में यूरेनियम की मात्रा।", correct: false },
            { text: "रिएक्टर का जीवनकाल।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाभिकीय रिएक्टर की शक्ति, जिसे आमतौर पर मेगावाट-थर्मल (MWt) में मापा जाता है, वह दर है जिस पर नाभिकीय विखंडन से ऊष्मा ऊर्जा उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 22. यदि कोई बल विस्थापन की दिशा में एक कोण पर लगाया जाता है, तो शक्ति...",
        answers: shuffle([
            { text: "अधिकतम होती है।", correct: false },
            { text: "शून्य होती है।", correct: false },
            { text: "अधिकतम से कम होती है।", correct: true },
            { text: "ऋणात्मक होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति P=Fvcosθ होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब बल और वेग एक ही दिशा में होते हैं (θ=0°), तो cosθ=1 और शक्ति अधिकतम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> किसी अन्य कोण पर cosθ<1 होगा, इसलिए शक्ति कम होगी।"
    },
    {
        question: "प्रश्न 23. एक प्रकाश बल्ब की 'वॉट' रेटिंग क्या दर्शाती है?",
        answers: shuffle([
            { text: "यह कितनी रोशनी देता है।", correct: false },
            { text: "यह कितनी विद्युत शक्ति की खपत करता है।", correct: true },
            { text: "इसका रंग तापमान।", correct: false },
            { text: "इसका जीवन काल।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वाट रेटिंग सीधे तौर पर खपत की गई विद्युत शक्ति को दर्शाती है, न कि उत्पन्न प्रकाश की मात्रा (ल्यूमेन) को।<br><br><i class='fa-solid fa-angles-right icon'></i> एक अधिक कुशल बल्ब कम वाट पर अधिक प्रकाश दे सकता है।"
    },
    {
        question: "प्रश्न 24. किसी कार का इंजन जब उसे एक स्थिर गति से चलाता है, तो वह मुख्य रूप से किस बल के विरुद्ध शक्ति लगाता है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "घर्षण और वायु प्रतिरोध", correct: true },
            { text: "अभिकेंद्रीय बल", correct: false },
            { text: "चुंबकीय बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्थिर गति बनाए रखने के लिए, इंजन को सड़क के घर्षण और वायु प्रतिरोध जैसे विरोधी बलों को दूर करने के लिए लगातार काम करना पड़ता है।"
    },
    {
        question: "प्रश्न 25. \"बोर्ड ऑफ ट्रेड यूनिट\" (B.O.T.U.) किसका दूसरा नाम है?",
        answers: shuffle([
            { text: "वाट", correct: false },
            { text: "जूल", correct: false },
            { text: "किलोवाट-घंटा (kWh)", correct: true },
            { text: "अश्वशक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किलोवाट-घंटा, जिसे घरेलू बिजली बिलों में \"यूनिट\" कहा जाता है, को व्यावसायिक रूप से बोर्ड ऑफ ट्रेड यूनिट के रूप में भी जाना जाता है।"
    },
    {
        question: "प्रश्न 26. शक्ति की गणना के लिए क्या आवश्यक है?",
        answers: shuffle([
            { text: "केवल किया गया कार्य।", correct: false },
            { text: "केवल लगा समय।", correct: false },
            { text: "किया गया कार्य और उसमें लगा समय दोनों।", correct: true },
            { text: "केवल बल।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति की परिभाषा ही 'कार्य करने की दर' है, इसलिए इसकी गणना के लिए कार्य और समय दोनों की जानकारी होना अनिवार्य है।"
    },
    {
        question: "प्रश्न 27. एक समान वृत्तीय गति में, अभिकेंद्रीय बल द्वारा वस्तु पर लगाई गई शक्ति क्या है?",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "गति के साथ बदलती रहती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिकेंद्रीय बल हमेशा वस्तु के वेग (विस्थापन की दिशा) के लंबवत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि बल और वेग के बीच का कोण 90 डिग्री है, P=Fvcos(90°) = 0 होता है।"
    },
    {
        question: "प्रश्न 28. किसी दिए गए समय में, अधिक शक्तिशाली मशीन...",
        answers: shuffle([
            { text: "कम कार्य करेगी।", correct: false },
            { text: "अधिक कार्य करेगी।", correct: true },
            { text: "समान कार्य करेगी।", correct: false },
            { text: "कोई कार्य नहीं करेगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि W=P×t, यदि समय (t) और शक्ति (P) दोनों ज्ञात हैं, तो अधिक P का अर्थ अधिक W होगा।"
    },
    {
        question: "प्रश्न 29. यदि एक विद्युत केतली की शक्ति अधिक है, तो वह पानी को...",
        answers: shuffle([
            { text: "अधिक समय में गर्म करेगी।", correct: false },
            { text: "कम समय में गर्म करेगी।", correct: true },
            { text: "गर्म नहीं कर पाएगी।", correct: false },
            { text: "समान समय में गर्म करेगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक शक्ति का मतलब है कि केतली प्रति सेकंड अधिक विद्युत ऊर्जा को ऊष्मीय ऊर्जा में परिवर्तित कर सकती है, जिससे पानी जल्दी गर्म होता है।"
    },
    {
        question: "प्रश्न 30. एक व्यक्ति एक सूटकेस लेकर क्षैतिज प्लेटफॉर्म पर चल रहा है। गुरुत्वाकर्षण बल के विरुद्ध व्यक्ति द्वारा सूटकेस पर लगाई गई शक्ति क्या है?",
        answers: shuffle([
            { text: "बहुत अधिक", correct: false },
            { text: "शून्य", correct: true },
            { text: "व्यक्ति के वजन के बराबर", correct: false },
            { text: "सूटकेस के वजन के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यक्ति सूटकेस को ऊपर उठाने के लिए बल लगाता है, लेकिन क्षैतिज रूप से चलते समय ऊर्ध्वाधर दिशा में कोई विस्थापन नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, गुरुत्वाकर्षण के विरुद्ध किया गया कार्य और शक्ति दोनों शून्य हैं।"
    },
    {
        question: "प्रश्न 31. शक्ति का विमीय सूत्र [ML2T−3] किससे प्राप्त होता है?",
        answers: shuffle([
            { text: "बल / समय", correct: false },
            { text: "कार्य / समय", correct: true },
            { text: "ऊर्जा × समय", correct: false },
            { text: "बल × दूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य की विमा [ML²T⁻²] और समय की विमा [T] है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब कार्य की विमा को समय की विमा से विभाजित किया जाता है, तो हमें [ML²T⁻³] प्राप्त होता है।"
    },
    {
        question: "प्रश्न 32. एक हाइड्रोलिक लिफ्ट की शक्ति किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "लिफ्ट में उपयोग किए गए तरल के रंग पर।", correct: false },
            { text: "वह कितनी तेजी से भार उठा सकती है।", correct: true },
            { text: "लिफ्ट के कुल वजन पर।", correct: false },
            { text: "केवल लिफ्ट के आकार पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी लिफ्ट की तरह, एक हाइड्रोलिक लिफ्ट की शक्ति इस बात से मापी जाती है कि वह प्रति इकाई समय में कितना कार्य कर सकती है, यानी भार को कितनी तेजी से उठा सकती है।"
    },
    {
        question: "प्रश्न 33. माइक्रोवेव ओवन की शक्ति रेटिंग (जैसे 800W) का क्या अर्थ है?",
        answers: shuffle([
            { text: "यह प्रति सेकंड 800 जूल भोजन उत्पन्न करता है।", correct: false },
            { text: "यह प्रति सेकंड 800 जूल विद्युत ऊर्जा की खपत करता है।", correct: true },
            { text: "यह 800 डिग्री सेल्सियस तक गर्म कर सकता है।", correct: false },
            { text: "इसका वजन 800 ग्राम है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रेटिंग ओवन द्वारा खपत की जाने वाली विद्युत शक्ति को दर्शाती है, जिसे वह भोजन को गर्म करने के लिए माइक्रोवेव ऊर्जा में परिवर्तित करता है।"
    },
    {
        question: "प्रश्न 34. शक्ति को कभी-कभी \"ऊर्जा प्रवाह की दर\" के रूप में क्यों वर्णित किया जाता है?",
        answers: shuffle([
            { text: "क्योंकि शक्ति और ऊर्जा का प्रवाह हमेशा तरल रूप में होता है।", correct: false },
            { text: "क्योंकि शक्ति यह मापती है कि ऊर्जा कितनी तेजी से एक स्थान से दूसरे स्थान पर स्थानांतरित हो रही है या एक रूप से दूसरे रूप में परिवर्तित हो रही है।", correct: true },
            { text: "यह एक गलत वर्णन है।", correct: false },
            { text: "क्योंकि शक्ति केवल विद्युत ऊर्जा पर लागू होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाहे वह एक इंजन हो जो रासायनिक ऊर्जा को यांत्रिक ऊर्जा में बदल रहा हो या एक बल्ब जो विद्युत ऊर्जा को प्रकाश में बदल रहा हो, शक्ति हमेशा ऊर्जा के इस प्रवाह या रूपांतरण की दर होती है।"
    },
    {
        question: "प्रश्न 35. एक एयर कंडीशनर (AC) की शक्ति उसकी किस क्षमता को दर्शाती है?",
        answers: shuffle([
            { text: "A) कमरे में हवा फेंकने की दर।", correct: false },
            { text: "B) कमरे से ऊष्मा को बाहर निकालने की दर।", correct: false },
            { text: "C) बिजली की खपत करने की दर।", correct: false },
            { text: "B) और C) दोनों।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> AC की दो शक्ति रेटिंग होती हैं:<br><br><i class='fa-solid fa-angles-right icon'></i> एक कूलिंग पावर (वह दर जिस पर वह गर्मी हटाता है) और दूसरी इलेक्ट्रिकल पावर (वह दर जिस पर वह बिजली की खपत करता है)।"
    },
    {
        question: "प्रश्न 36. एक जूल प्रति सेकंड किसके बराबर है?",
        answers: shuffle([
            { text: "एक न्यूटन", correct: false },
            { text: "एक पास्कल", correct: false },
            { text: "एक वाट", correct: true },
            { text: "एक एम्पीयर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह शक्ति की इकाई 'वाट' की मूल परिभाषा है।"
    },
    {
        question: "प्रश्न 37. यदि समय 't' पर किसी वस्तु पर लगने वाला बल F(t) और उसका वेग v(t) दोनों समय के साथ बदल रहे हों, तो तात्क्षणिक शक्ति P(t) क्या होगी?",
        answers: shuffle([
            { text: "P(t)=F(t)/v(t)", correct: false },
            { text: "P(t)=F(t)×v(t)", correct: true },
            { text: "P(t)=v(t)/F(t)", correct: false },
            { text: "P(t) हमेशा स्थिर रहेगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तात्क्षणिक शक्ति किसी भी क्षण पर बल और वेग के गुणनफल के बराबर होती है, भले ही वे समय के साथ बदल रहे हों।"
    },
    {
        question: "प्रश्न 38. एक इलेक्ट्रिक कार की उच्च शक्ति का क्या परिणाम होता है?",
        answers: shuffle([
            { text: "धीमी गति", correct: false },
            { text: "बेहतर त्वरण (acceleration)", correct: true },
            { text: "लंबी बैटरी लाइफ", correct: false },
            { text: "कम चार्जिंग समय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च शक्ति इंजन या मोटर को पहियों पर अधिक तेजी से ऊर्जा स्थानांतरित करने की अनुमति देती है, जिससे कार तेजी से गति पकड़ती है (त्वरित होती है)।"
    },
    {
        question: "प्रश्न 39. शक्ति, कार्य और समय के बीच संबंध का सही प्रतिनिधित्व कौन सा विकल्प करता है?",
        answers: shuffle([
            { text: "शक्ति कार्य पर निर्भर नहीं करती है।", correct: false },
            { text: "शक्ति समय के सीधे आनुपातिक है।", correct: false },
            { text: "शक्ति कार्य के सीधे आनुपातिक और समय के व्युत्क्रमानुपाती है।", correct: true },
            { text: "शक्ति कार्य और समय दोनों के व्युत्क्रमानुपाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूत्र P=W/t स्पष्ट रूप से दिखाता है कि शक्ति (P) कार्य (W) के समानुपाती और समय (t) के व्युत्क्रमानुपाती है।"
    },
    {
        question: "प्रश्न 40. 'स्टैंडबाय पावर' या 'वैम्पायर पावर' क्या है?",
        answers: shuffle([
            { text: "किसी उपकरण की अधिकतम शक्ति।", correct: false },
            { text: "वह शक्ति जो कोई इलेक्ट्रॉनिक उपकरण बंद होने पर या स्टैंडबाय मोड में होने पर भी खपत करता है।", correct: true },
            { text: "बैटरी से मिलने वाली शक्ति।", correct: false },
            { text: "सौर ऊर्जा से प्राप्त शक्ति।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई आधुनिक उपकरण बंद होने पर भी थोड़ी मात्रा में बिजली की खपत करते रहते हैं, ताकि वे रिमोट से सिग्नल प्राप्त कर सकें।"
    },
    {
        question: "प्रश्न 41. दो व्यक्ति समान वजन लेकर समान ऊंचाई तक चढ़ते हैं। एक दूसरे से आधा समय लेता है। पहले व्यक्ति द्वारा खर्च की गई शक्ति दूसरे व्यक्ति की तुलना में...",
        answers: shuffle([
            { text: "आधी है।", correct: false },
            { text: "समान है।", correct: false },
            { text: "दोगुनी है।", correct: true },
            { text: "चार गुनी है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों समान कार्य करते हैं (W=mgh)।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि पहला व्यक्ति आधा समय लेता है, उसकी शक्ति दूसरे व्यक्ति की दोगुनी होगी।"
    },
    {
        question: "प्रश्न 42. परमाणु बम के विस्फोट में अत्यधिक मात्रा में ऊर्जा बहुत कम समय में निकलती है। यह किसका एक चरम उदाहरण है?",
        answers: shuffle([
            { text: "कम शक्ति", correct: false },
            { text: "स्थिर शक्ति", correct: false },
            { text: "अत्यधिक उच्च शक्ति", correct: true },
            { text: "शून्य शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति = ऊर्जा/समय।<br><br><i class='fa-solid fa-angles-right icon'></i> जब बहुत बड़ी मात्रा में ऊर्जा बहुत छोटे समय में जारी होती है, तो परिणामी शक्ति बहुत अधिक होती है।"
    },
    {
        question: "प्रश्न 43. मीट्रिक अश्वशक्ति (Metric Horsepower) लगभग कितने वाट के बराबर होती है?",
        answers: shuffle([
            { text: "746 वाट", correct: false },
            { text: "735.5 वाट", correct: true },
            { text: "1000 वाट", correct: false },
            { text: "550 वाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीट्रिक अश्वशक्ति (PS) लगभग 735.5 वाट के बराबर होती है, जबकि मानक (इंपीरियल) अश्वशक्ति 746 वाट होती है।"
    },
    {
        question: "प्रश्न 44. किसी स्पीकर की शक्ति रेटिंग (वाट में) क्या दर्शाती है?",
        answers: shuffle([
            { text: "वह कितना स्पष्ट संगीत बजा सकता है।", correct: false },
            { text: "वह अधिकतम शक्ति जिसे वह बिना खराब हुए संभाल सकता है।", correct: true },
            { text: "संगीत की गुणवत्ता।", correct: false },
            { text: "स्पीकर का आकार।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्पीकर की वाट रेटिंग उसकी शक्ति-हैंडलिंग क्षमता को दर्शाती है।"
    },
    {
        question: "प्रश्न 45. यदि शक्ति स्थिर है, तो समय के साथ किया गया कार्य...",
        answers: shuffle([
            { text: "घटता है।", correct: false },
            { text: "स्थिर रहता है।", correct: false },
            { text: "रैखिक रूप से बढ़ता है।", correct: true },
            { text: "तेजी से बढ़ता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूत्र W=P×t से, यदि शक्ति (P) स्थिर है, तो किया गया कार्य (W) समय (t) के साथ एक स्थिर दर से बढ़ता है।"
    },
    {
        question: "प्रश्न 46. बिजली के बिल में 'यूनिट' का मतलब क्या है?",
        answers: shuffle([
            { text: "एक वाट", correct: false },
            { text: "एक जूल", correct: false },
            { text: "एक किलोवाट", correct: false },
            { text: "एक किलोवाट-घंटा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिजली की खपत को मापने के लिए, 1 किलोवाट-घंटा (kWh) को एक 'यूनिट' माना जाता है।"
    },
    {
        question: "प्रश्न 47. किसी तारे की चमक (Luminosity) उसकी...",
        answers: shuffle([
            { text: "सतह के तापमान को मापती है।", correct: false },
            { text: "कुल शक्ति उत्पादन (प्रति सेकंड उत्सर्जित ऊर्जा) को मापती है।", correct: true },
            { text: "आयु को मापती है।", correct: false },
            { text: "पृथ्वी से दूरी को मापती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खगोल भौतिकी में, एक तारे की चमक उसकी आंतरिक शक्ति है - वह कुल ऊर्जा जो वह प्रति सेकंड सभी दिशाओं में विकीर्ण करता है।"
    },
    {
        question: "प्रश्न 48. एक शक्तिशाली इंजन...",
        answers: shuffle([
            { text: "हमेशा अधिक कुशल होता है।", correct: false },
            { text: "प्रति इकाई समय में अधिक ऊर्जा परिवर्तित कर सकता है।", correct: true },
            { text: "हमेशा आकार में बड़ा होता है।", correct: false },
            { text: "हमेशा अधिक ईंधन की खपत करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति की मूल परिभाषा ऊर्जा रूपांतरण की दर है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक शक्तिशाली इंजन तेजी से ईंधन की रासायनिक ऊर्जा को यांत्रिक कार्य में बदल सकता है।"
    },
    {
        question: "प्रश्न 49. \"कार्य-ऊर्जा प्रमेय\" क्या कहता है?",
        answers: shuffle([
            { text: "कार्य शक्ति के बराबर है।", correct: false },
            { text: "किसी वस्तु पर किया गया कुल कार्य उसकी गतिज ऊर्जा में परिवर्तन के बराबर होता है।", correct: true },
            { text: "ऊर्जा हमेशा संरक्षित रहती है।", correct: false },
            { text: "शक्ति हमेशा संरक्षित रहती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रमेय कार्य को ऊर्जा से जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> शक्ति यह बताती है कि यह ऊर्जा परिवर्तन कितनी तेजी से होता है।"
    },
    {
        question: "प्रश्न 50. एक क्रेन धीरे-धीरे एक भारी वस्तु उठा रही है। यदि वह उसी वस्तु को तेजी से उठाती है, तो क्रेन को अधिक...",
        answers: shuffle([
            { text: "बल लगाना होगा।", correct: false },
            { text: "कार्य करना होगा।", correct: false },
            { text: "शक्ति प्रदान करनी होगी।", correct: true },
            { text: "ऊर्जा की खपत करनी होगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समान कार्य को तेजी से (कम समय में) करने के लिए अधिक शक्ति (P=W/t) की आवश्यकता होती है।"
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