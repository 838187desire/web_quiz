const questions = [
    {
        topHeading: "संविधान के सर्वोच्च कानून पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारत में 'सर्वोच्च कानून' (Supreme Law) किसे माना जाता है?",
        answers: shuffle([
            { text: "भारतीय दंड संहिता", correct: false },
            { text: "भारत का संविधान", correct: true },
            { text: "संसद द्वारा पारित अधिनियम", correct: false },
            { text: "सर्वोच्च न्यायालय के निर्णय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में संविधान को देश का सर्वोच्च कानून माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सरकार के सभी अंग (कार्यपालिका, विधायिका, न्यायपालिका) और सभी कानून इसके अधीन हैं।"
    },
    {
        question: "प्रश्न 2. 'संविधान की सर्वोच्चता' की अवधारणा किस देश के संविधान से प्रेरित है?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "कनाडा", correct: false },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान को सर्वोच्च मानने का सिद्धांत संयुक्त राज्य अमेरिका से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके विपरीत, ब्रिटेन में 'संसदीय संप्रभुता' है।"
    },
    {
        question: "प्रश्न 3. भारतीय संविधान की सर्वोच्चता का संरक्षण कौन करता है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्वोच्च न्यायालय को 'संविधान का संरक्षक' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह न्यायिक समीक्षा के माध्यम से सुनिश्चित करता है कि कोई भी कानून संविधान का उल्लंघन न करे।"
    },
    {
        question: "प्रश्न 4. 'न्यायिक समीक्षा' (Judicial Review) की शक्ति का क्या अर्थ है?",
        answers: shuffle([
            { text: "न्यायाधीशों की नियुक्ति की समीक्षा", correct: false },
            { text: "कानूनों की संवैधानिक वैधता का परीक्षण", correct: true },
            { text: "निचली अदालतों के फैसलों की समीक्षा", correct: false },
            { text: "राष्ट्रपति के कार्यों की समीक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह न्यायपालिका की वह शक्ति है जिसके द्वारा वह विधायिका द्वारा बनाए गए कानूनों और कार्यपालिका के आदेशों की जांच करती है कि वे संविधान के अनुरूप हैं या नहीं।"
    },
    {
        question: "प्रश्न 5. यदि संसद द्वारा बनाया गया कोई कानून संविधान के 'मूल ढांचे' का उल्लंघन करता है, तो क्या होगा?",
        answers: shuffle([
            { text: "राष्ट्रपति उसे बदल देंगे", correct: false },
            { text: "वह कानून स्वतः लागू हो जाएगा", correct: false },
            { text: "सर्वोच्च न्यायालय उसे शून्य घोषित कर सकता है", correct: true },
            { text: "राज्यों को उसे मानने की बाध्यता नहीं होगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केशवानंद भारती मामले (1973) के बाद, सर्वोच्च न्यायालय किसी भी ऐसे कानून या संशोधन को रद्द कर सकता है जो संविधान की 'मूल संरचना' को नष्ट करता हो।"
    },
    {
        question: "प्रश्न 6. भारत में \"कानून का शासन\" (Rule of Law) का क्या अर्थ है?",
        answers: shuffle([
            { text: "राजा का शासन", correct: false },
            { text: "कानून से ऊपर कोई नहीं है", correct: true },
            { text: "निर्वाचित प्रतिनिधियों का शासन", correct: false },
            { text: "सेना का शासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कानून के शासन का अर्थ है कि देश का हर व्यक्ति, चाहे उसका पद कुछ भी हो, कानून के अधीन है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत संविधान की सर्वोच्चता को स्थापित करता है।"
    },
    {
        question: "प्रश्न 7. भारतीय संविधान का कौन सा अनुच्छेद यह स्थापित करता है कि मौलिक अधिकारों का उल्लंघन करने वाले कानून शून्य होंगे?",
        answers: shuffle([
            { text: "अनुच्छेद 12", correct: false },
            { text: "अनुच्छेद 13", correct: true },
            { text: "अनुच्छेद 14", correct: false },
            { text: "अनुच्छेद 32", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 13 स्पष्ट रूप से घोषित करता है कि कोई भी कानून, जो मौलिक अधिकारों के साथ असंगत है या उन्हें कम करता है, उस मात्रा तक शून्य होगा।"
    },
    {
        question: "प्रश्न 8. \"संविधान की मूल संरचना\" (Basic Structure of the Constitution) का सिद्धांत किस ऐतिहासिक मुकदमे में प्रतिपादित किया गया था?",
        answers: shuffle([
            { text: "गोलकनाथ मामला", correct: false },
            { text: "केशवानंद भारती मामला", correct: true },
            { text: "मिनर्वा मिल्स मामला", correct: false },
            { text: "ए. के. गोपालन मामला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1973 में केशवानंद भारती बनाम केरल राज्य मामले में, सर्वोच्च न्यायालय ने निर्णय दिया कि संसद संविधान में संशोधन कर सकती है, लेकिन इसकी मूल संरचना को नहीं बदल सकती।"
    },
    {
        question: "प्रश्न 9. निम्नलिखित में से क्या भारतीय संविधान की मूल संरचना का हिस्सा माना जाता है?",
        answers: shuffle([
            { text: "धर्मनिरपेक्षता", correct: false },
            { text: "शक्तियों का पृथक्करण", correct: false },
            { text: "लोकतंत्र", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्वोच्च न्यायालय ने समय-समय पर अपने निर्णयों में धर्मनिरपेक्षता, लोकतंत्र, कानून का शासन और शक्तियों के पृथक्करण जैसे तत्वों को मूल संरचना का हिस्सा माना है।"
    },
    {
        question: "प्रश्न 10. सरकार के अंगों (कार्यपालिका, विधायिका, न्यायपालिका) को उनकी शक्तियाँ कहाँ से प्राप्त होती हैं?",
        answers: shuffle([
            { text: "राष्ट्रपति से", correct: false },
            { text: "जनता से", correct: false },
            { text: "संविधान से", correct: true },
            { text: "प्रधानमंत्री से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सरकार के सभी अंग अपनी शक्तियों और अधिकारों के लिए संविधान पर निर्भर हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> कोई भी अंग संविधान से ऊपर नहीं है।"
    },
    {
        question: "प्रश्न 11. एक 'संवैधानिक सरकार' वह होती है जो:",
        answers: shuffle([
            { text: "अपने सभी निर्णय बहुमत से लेती है", correct: false },
            { text: "संविधान द्वारा निर्धारित सीमाओं के भीतर कार्य करती है", correct: true },
            { text: "एक लिखित संविधान रखती है", correct: false },
            { text: "समय-समय पर चुनाव कराती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवैधानिक सरकार का अर्थ है 'सीमित सरकार', यानी ऐसी सरकार जिसकी शक्तियां असीमित नहीं, बल्कि संविधान द्वारा सीमित हैं।"
    },
    {
        question: "प्रश्न 12. संविधान की प्रस्तावना में \"हम, भारत के लोग\" (We, the People of India) वाक्यांश का क्या महत्व है?",
        answers: shuffle([
            { text: "यह एक औपचारिक शुरुआत है", correct: false },
            { text: "यह इंगित करता है कि अंतिम संप्रभुता जनता में निहित है", correct: true },
            { text: "यह संविधान सभा के सदस्यों को संदर्भित करता है", correct: false },
            { text: "यह दर्शाता है कि भारत एक लोकतांत्रिक देश है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वाक्यांश स्पष्ट करता है कि संविधान की शक्ति का स्रोत भारत की जनता है, और उसी ने इस संविधान को सर्वोच्च कानून के रूप में अंगीकार किया है।"
    },
    {
        question: "प्रश्न 13. राष्ट्रपति द्वारा संविधान के संरक्षण, परिरक्षण और प्रतिरक्षण की शपथ किस अनुच्छेद के तहत ली जाती है?",
        answers: shuffle([
            { text: "अनुच्छेद 52", correct: false },
            { text: "अनुच्छेद 56", correct: false },
            { text: "अनुच्छेद 60", correct: true },
            { text: "अनुच्छेद 74", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 60 के तहत, राष्ट्रपति पद की शपथ में संविधान और विधि की रक्षा करने का वचन लेते हैं, जो संविधान की सर्वोच्चता के प्रति उनकी भूमिका को दर्शाता है।"
    },
    {
        question: "प्रश्न 14. यदि केंद्र और राज्य के कानूनों के बीच (समवर्ती सूची पर) कोई टकराव होता है, तो:",
        answers: shuffle([
            { text: "राज्य का कानून मान्य होगा", correct: false },
            { text: "केंद्र का कानून मान्य होगा", correct: true },
            { text: "दोनों कानून शून्य हो जाएंगे", correct: false },
            { text: "राष्ट्रपति निर्णय लेंगे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 254 के अनुसार, समवर्ती सूची के विषय पर केंद्र और राज्य के कानून में विरोधाभास होने पर केंद्रीय कानून को वरीयता दी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रावधान स्वयं संविधान में है।"
    },
    {
        question: "प्रश्न 15. \"शक्तियों के पृथक्करण\" (Separation of Powers) का सिद्धांत क्यों आवश्यक है?",
        answers: shuffle([
            { text: "सरकार को अक्षम बनाने के लिए", correct: false },
            { text: "किसी एक अंग को अत्याचारी बनने से रोकने के लिए", correct: true },
            { text: "शासन में देरी करने के लिए", correct: false },
            { text: "न्यायपालिका को सर्वोच्च बनाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत सुनिश्चित करता है कि सरकार की तीनों शाखाएं एक-दूसरे की शक्तियों को संतुलित करें, ताकि कोई भी अंग अपनी सीमाओं का उल्लंघन न करे और संविधान सर्वोच्च बना रहे।"
    },
    {
        question: "प्रश्न 16. संविधान संशोधन की शक्ति संसद को किस अनुच्छेद के तहत दी गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 13", correct: false },
            { text: "अनुच्छेद 32", correct: false },
            { text: "अनुच्छेद 226", correct: false },
            { text: "अनुच्छेद 368", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 368 संसद को संविधान में संशोधन करने की प्रक्रिया और शक्ति प्रदान करता है, लेकिन यह शक्ति भी 'मूल संरचना' के सिद्धांत के अधीन है।"
    },
    {
        question: "प्रश्न 17. भारत में 'एकल नागरिकता' का प्रावधान किस विचार को मजबूत करता है?",
        answers: shuffle([
            { text: "राज्यों की स्वायत्तता", correct: false },
            { text: "एक एकीकृत राष्ट्र और संविधान की सर्वोच्चता", correct: true },
            { text: "केंद्र सरकार की तानाशाही", correct: false },
            { text: "क्षेत्रीय पहचान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकल नागरिकता यह दर्शाती है कि व्यक्ति किसी राज्य विशेष का नहीं, बल्कि भारत का नागरिक है, जो राष्ट्रीय एकता और संविधान के सर्वोच्च अधिकार को बढ़ावा देता है।"
    },
    {
        question: "प्रश्न 18. संविधान का कौन सा भाग \"भारत का मैग्ना कार्टा\" कहलाता है?",
        answers: shuffle([
            { text: "भाग I (संघ और उसका राज्यक्षेत्र)", correct: false },
            { text: "भाग II (नागरिकता)", correct: false },
            { text: "भाग III (मौलिक अधिकार)", correct: true },
            { text: "भाग IV (राज्य के नीति निदेशक तत्व)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक अधिकार नागरिकों को राज्य की शक्तियों के विरुद्ध एक सुरक्षा कवच प्रदान करते हैं, इसलिए इन्हें भारत का मैग्ना कार्टा कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संविधान की सर्वोच्चता का प्रतीक है।"
    },
    {
        question: "प्रश्न 19. 'संवैधानिक उपचारों का अधिकार' (अनुच्छेद 32) को डॉ. अंबेडकर ने 'संविधान की आत्मा और हृदय' क्यों कहा?",
        answers: shuffle([
            { text: "क्योंकि यह सबसे लंबा अनुच्छेद है", correct: false },
            { text: "क्योंकि यह अन्य सभी मौलिक अधिकारों को लागू करने का तंत्र प्रदान करता है", correct: true },
            { text: "क्योंकि यह केवल नागरिकों के लिए है", correct: false },
            { text: "क्योंकि इसे संशोधित नहीं किया जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस अधिकार के बिना अन्य मौलिक अधिकार अर्थहीन हो जाते।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अधिकार सीधे सर्वोच्च न्यायालय को संविधान द्वारा दिए गए अधिकारों की रक्षा करने की शक्ति देता है।"
    },
    {
        question: "प्रश्न 20. भारत एक 'गणराज्य' (Republic) है, जिसका अर्थ है कि:",
        answers: shuffle([
            { text: "राष्ट्र का प्रमुख वंशानुगत नहीं होता", correct: true },
            { text: "भारत एक लोकतांत्रिक देश है", correct: false },
            { text: "भारत में संसदीय प्रणाली है", correct: false },
            { text: "सभी नागरिकों को समान अधिकार हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणराज्य का तात्पर्य है कि राज्य का मुखिया (राष्ट्रपति) एक निश्चित अवधि के लिए चुना जाता है, न कि वंश के आधार पर पद धारण करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कानून के शासन को दर्शाता है।"
    },
    {
        question: "प्रश्न 21. संविधान की व्याख्या करने का अंतिम अधिकार किसके पास है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "अटॉर्नी जनरल", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के किसी भी प्रावधान के अर्थ पर विवाद होने पर, सर्वोच्च न्यायालय द्वारा की गई व्याख्या को अंतिम और सभी पर बाध्यकारी माना जाता है।"
    },
    {
        question: "प्रश्न 22. भारतीय संविधान को \"वकीलों का स्वर्ग\" क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि इसे वकीलों ने बनाया था", correct: false },
            { text: "क्योंकि इसकी भाषा जटिल और व्याख्या-उन्मुख है", correct: true },
            { text: "क्योंकि यह वकीलों को विशेष अधिकार देता है", correct: false },
            { text: "क्योंकि इसमें केवल कानूनी प्रक्रियाएं हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसकी विस्तृत और कानूनी भाषा के कारण, इसके प्रावधानों की व्याख्या के लिए अक्सर कानूनी विशेषज्ञता की आवश्यकता होती है, जिससे मुकदमेबाजी को बढ़ावा मिलता है।"
    },
    {
        question: "प्रश्न 23. संविधान की सर्वोच्चता के लिए कौन सी विशेषता महत्वपूर्ण है?",
        answers: shuffle([
            { text: "एक लचीला संविधान", correct: false },
            { text: "एक अलिखित संविधान", correct: false },
            { text: "एक लिखित संविधान", correct: true },
            { text: "एक एकात्मक प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक लिखित संविधान सरकार की शक्तियों और सीमाओं को स्पष्ट रूप से परिभाषित करता है, जिससे इसकी सर्वोच्चता को बनाए रखना और लागू करना आसान होता है।"
    },
    {
        question: "प्रश्न 24. भारत के नियंत्रक और महालेखा परीक्षक (CAG) का पद किस सिद्धांत को पुष्ट करता है?",
        answers: shuffle([
            { text: "राजनीतिक सर्वोच्चता", correct: false },
            { text: "वित्तीय जवाबदेही और संवैधानिक सर्वोच्चता", correct: true },
            { text: "संसदीय संप्रभुता", correct: false },
            { text: "न्यायिक सक्रियता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CAG यह सुनिश्चित करता है कि सरकारी खर्च संविधान और कानूनों के अनुसार हो, इस प्रकार कार्यपालिका को वित्तीय मामलों में जवाबदेह ठहराता है।"
    },
    {
        question: "प्रश्न 25. आपातकाल के दौरान भी कौन से मौलिक अधिकार निलंबित नहीं किए जा सकते?",
        answers: shuffle([
            { text: "अनुच्छेद 14 और 19", correct: false },
            { text: "अनुच्छेद 19 और 21", correct: false },
            { text: "अनुच्छेद 20 और 21", correct: true },
            { text: "अनुच्छेद 25 और 29", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संशोधन के बाद, अनुच्छेद 20 (अपराधों के लिए दोषसिद्धि के संबंध में संरक्षण) और अनुच्छेद 21 (प्राण और दैहिक स्वतंत्रता का संरक्षण) को आपातकाल में भी निलंबित नहीं किया जा सकता।<br><br><i class='fa-solid fa-angles-right icon'></i> यह व्यक्ति की गरिमा की संवैधानिक गारंटी है।"
    },
     {
        question: "प्रश्न 26. \"विधि द्वारा स्थापित प्रक्रिया\" (Procedure Established by Law) का सिद्धांत किस देश से लिया गया है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "ब्रिटेन", correct: false },
            { text: "जापान", correct: true },
            { text: "जर्मनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान के अनुच्छेद 21 में प्रयुक्त यह वाक्यांश जापान के संविधान से लिया गया है, जो यह सुनिश्चित करता है कि किसी भी व्यक्ति को कानून द्वारा निर्धारित प्रक्रिया के बिना उसके जीवन या स्वतंत्रता से वंचित नहीं किया जा सकता।"
    },
    {
        question: "प्रश्न 27. राज्य के नीति निदेशक तत्व (DPSP) का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "सरकार को अधिनायकवादी बनाना", correct: false },
            { text: "एक कल्याणकारी राज्य की स्थापना करना", correct: true },
            { text: "मौलिक अधिकारों को सीमित करना", correct: false },
            { text: "न्यायपालिका को शक्तियां प्रदान करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> DPSP देश में सामाजिक और आर्थिक लोकतंत्र स्थापित करने के लिए राज्य का मार्गदर्शन करते हैं, जो संविधान के सर्वोच्च लक्ष्यों में से एक है।"
    },
    {
        question: "प्रश्न 28. संविधान दिवस कब मनाया जाता है?",
        answers: shuffle([
            { text: "26 जनवरी", correct: false },
            { text: "15 अगस्त", correct: false },
            { text: "26 नवंबर", correct: true },
            { text: "2 अक्टूबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 26 नवंबर, 1949 को संविधान सभा ने भारत के संविधान को अपनाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी दिन की याद में इसे 'संविधान दिवस' या 'राष्ट्रीय विधि दिवस' के रूप में मनाया जाता है।"
    },
    {
        question: "प्रश्न 29. 'पंथनिरपेक्षता' शब्द को संविधान की प्रस्तावना में किस संशोधन द्वारा जोड़ा गया?",
        answers: shuffle([
            { text: "44वां संशोधन", correct: false },
            { text: "42वां संशोधन", correct: true },
            { text: "1ला संशोधन", correct: false },
            { text: "61वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1976 में 42वें संविधान संशोधन द्वारा प्रस्तावना में 'समाजवादी', 'पंथनिरपेक्ष' और 'अखंडता' शब्द जोड़े गए।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, सर्वोच्च न्यायालय ने माना है कि पंथनिरपेक्षता पहले से ही संविधान की मूल संरचना का हिस्सा थी।"
    },
    {
        question: "प्रश्न 30. स्वतंत्र भारत की संविधान सभा के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "डॉ. बी. आर. अंबेडकर", correct: false },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: true },
            { text: "सच्चिदानंद सिन्हा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. सच्चिदानंद सिन्हा संविधान सभा के अस्थायी अध्यक्ष थे, जबकि डॉ. राजेंद्र प्रसाद को इसका स्थायी अध्यक्ष चुना गया था।"
    },
    {
        question: "प्रश्न 31. संविधान का कौन सा अनुच्छेद संसद को नागरिकता से संबंधित कानून बनाने का अधिकार देता है?",
        answers: shuffle([
            { text: "अनुच्छेद 5", correct: false },
            { text: "अनुच्छेद 9", correct: false },
            { text: "अनुच्छेद 10", correct: false },
            { text: "अनुच्छेद 11", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 11 संसद को नागरिकता के अधिग्रहण और समाप्ति तथा इससे संबंधित अन्य सभी मामलों के संबंध में कोई भी प्रावधान करने की शक्ति देता है।"
    },
    {
        question: "प्रश्न 32. भारत का संविधान है:",
        answers: shuffle([
            { text: "बहुत कठोर", correct: false },
            { text: "बहुत लचीला", correct: false },
            { text: "कठोरता और लचीलेपन का मिश्रण", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसके कुछ प्रावधानों को साधारण बहुमत से (लचीला) और कुछ को विशेष बहुमत से (कठोर) संशोधित किया जा सकता है, जो इसकी अनुकूलनशीलता और स्थायित्व को दर्शाता है।"
    },
    {
        question: "प्रश्न 33. अखिल भारतीय सेवाओं (जैसे IAS, IPS) का प्रावधान संविधान की किस प्रकृति को दर्शाता है?",
        answers: shuffle([
            { text: "संघीय प्रकृति", correct: false },
            { text: "एकात्मक प्रकृति", correct: true },
            { text: "अर्ध-संघीय प्रकृति", correct: false },
            { text: "लोकतांत्रिक प्रकृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अखिल भारतीय सेवाओं पर केंद्र सरकार का नियंत्रण होता है, भले ही वे राज्यों में सेवा करते हों।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक मजबूत केंद्र और एकात्मक विशेषता का प्रतीक है।"
    },
    {
        question: "प्रश्न 34. संविधान की सातवीं अनुसूची किससे संबंधित है?",
        answers: shuffle([
            { text: "भाषाओं से", correct: false },
            { text: "राज्यों और केंद्र शासित प्रदेशों से", correct: false },
            { text: "केंद्र और राज्यों के बीच शक्तियों के वितरण से", correct: true },
            { text: "दलबदल विरोधी कानून से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसमें तीन सूचियाँ (संघ सूची, राज्य सूची, और समवर्ती सूची) हैं, जो कानून बनाने की शक्तियों को केंद्र और राज्यों के बीच विभाजित करती हैं।"
    },
    {
        question: "प्रश्न 35. किस रिट का अर्थ है \"हम आदेश देते हैं\" (We Command)?",
        answers: shuffle([
            { text: "बंदी प्रत्यक्षीकरण", correct: false },
            { text: "परमादेश", correct: true },
            { text: "अधिकार पृच्छा", correct: false },
            { text: "उत्प्रेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमादेश (Mandamus) रिट सर्वोच्च न्यायालय या उच्च न्यायालय द्वारा किसी सार्वजनिक अधिकारी को उसके आधिकारिक कर्तव्यों का पालन करने का आदेश देने के लिए जारी की जाती है, यदि वह उन्हें करने में विफल रहा है।"
    },
    {
        question: "प्रश्न 36. एक लोक हित याचिका (PIL) कहाँ दायर की जा सकती है?",
        answers: shuffle([
            { text: "केवल जिला न्यायालय में", correct: false },
            { text: "केवल उच्च न्यायालय में", correct: false },
            { text: "केवल सर्वोच्च न्यायालय में", correct: false },
            { text: "उच्च न्यायालय और सर्वोच्च न्यायालय दोनों में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनहित से जुड़े मुद्दों पर कोई भी व्यक्ति सीधे उच्च न्यायालय (अनुच्छेद 226) या सर्वोच्च न्यायालय (अनुच्छेद 32) में PIL दायर कर सकता है।"
    },
    {
        question: "प्रश्न 37. संविधान में अंतर्राष्ट्रीय शांति और सुरक्षा को बढ़ावा देना किसमें शामिल है?",
        answers: shuffle([
            { text: "प्रस्तावना में", correct: false },
            { text: "मौलिक अधिकारों में", correct: false },
            { text: "राज्य के नीति निदेशक तत्वों में", correct: true },
            { text: "मौलिक कर्तव्यों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 51 राज्य को अंतर्राष्ट्रीय शांति और सुरक्षा को बढ़ावा देने का निर्देश देता है।"
    },
    {
        question: "प्रश्न 38. यदि राष्ट्रपति और उपराष्ट्रपति दोनों का पद रिक्त हो जाए तो भारत के राष्ट्रपति के रूप में कौन कार्य करता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: true },
            { text: "गृह मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रावधान राष्ट्रपति (कर्तव्यों का निर्वहन) अधिनियम, 1969 के तहत किया गया है, जो संविधान की सर्वोच्चता और शासन की निरंतरता सुनिश्चित करता है।"
    },
    {
        question: "प्रश्न 39. सर्वोच्च न्यायालय के न्यायाधीशों को पद से कैसे हटाया जा सकता है?",
        answers: shuffle([
            { text: "राष्ट्रपति के आदेश से", correct: false },
            { text: "प्रधानमंत्री की सलाह पर", correct: false },
            { text: "संसद द्वारा महाभियोग जैसी प्रक्रिया के माध्यम से", correct: true },
            { text: "भारत के मुख्य न्यायाधीश द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यायाधीशों को हटाने की यह कठिन प्रक्रिया न्यायपालिका की स्वतंत्रता सुनिश्चित करती है, जो संविधान की सर्वोच्चता के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 40. भारतीय संविधान की मसौदा समिति (Drafting Committee) के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "सरदार पटेल", correct: false },
            { text: "डॉ. बी. आर. अंबेडकर", correct: true },
            { text: "डॉ. राजेंद्र प्रसाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. अंबेडकर ने संविधान के प्रारूप को तैयार करने वाली समिति का नेतृत्व किया, जिसके कारण उन्हें 'भारतीय संविधान का जनक' कहा जाता है।"
    },
    {
        question: "प्रश्न 41. कौन सा अनुच्छेद \"अस्पृश्यता का अंत\" से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: true },
            { text: "अनुच्छेद 18", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद सामाजिक समानता स्थापित करता है और अस्पृश्यता को एक दंडनीय अपराध घोषित करता है, जो संविधान के सर्वोच्च सामाजिक न्याय के आदर्श को दर्शाता है।"
    },
    {
        question: "प्रश्न 42. धन विधेयक (Money Bill) को किसकी सिफारिश पर ही लोकसभा में पेश किया जा सकता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "वित्त मंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "लोकसभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 110 में परिभाषित धन विधेयक को पेश करने से पहले राष्ट्रपति की पूर्व सहमति आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक संवैधानिक प्रक्रिया है।"
    },
    {
        question: "प्रश्न 43. \"संविधान एक जीवंत दस्तावेज है\" - इसका क्या तात्पर्य है?",
        answers: shuffle([
            { text: "यह कभी नहीं बदलता", correct: false },
            { text: "यह समय और समाज की जरूरतों के अनुसार विकसित होता है", correct: true },
            { text: "यह केवल जीवित व्यक्तियों पर लागू होता है", correct: false },
            { text: "इसे आसानी से नष्ट किया जा सकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि संविधान स्थिर नहीं है, बल्कि न्यायिक व्याख्याओं और संशोधनों के माध्यम से बदलती परिस्थितियों के अनुकूल होता रहता है।"
    },
    {
        question: "प्रश्न 44. भारतीय संघवाद को \"सहकारी संघवाद\" (Cooperative Federalism) किसने कहा है?",
        answers: shuffle([
            { text: "के. सी. व्हेयर", correct: false },
            { text: "मॉरिस जोन्स", correct: false },
            { text: "आइवर जेनिंग्स", correct: false },
            { text: "ग्रैनविले ऑस्टिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रैनविले ऑस्टिन ने यह विचार व्यक्त किया कि भारत में केंद्र और राज्य एक-दूसरे के साथ सहयोग करते हुए कार्य करते हैं, जो कि संविधान द्वारा स्थापित एक व्यवस्था है।"
    },
    {
        question: "प्रश्न 45. भारत के महान्यायवादी (Attorney General) की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "संसद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 76 के अनुसार, राष्ट्रपति महान्यायवादी की नियुक्ति करते हैं, जो भारत सरकार का सर्वोच्च कानूनी सलाहकार होता है।"
    },
    {
        question: "प्रश्न 46. कौन सा अनुच्छेद ग्राम पंचायतों के संगठन से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 39", correct: false },
            { text: "अनुच्छेद 40", correct: true },
            { text: "अनुच्छेद 41", correct: false },
            { text: "अनुच्छेद 44", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद (DPSP का हिस्सा) राज्य को ग्राम पंचायतों को संगठित करने और उन्हें स्व-शासन की इकाइयों के रूप में कार्य करने के लिए शक्तियां प्रदान करने का निर्देश देता है।"
    },
    {
        question: "प्रश्न 47. यदि कोई विदेशी क्षेत्र भारत का हिस्सा बन जाता है, तो उस क्षेत्र के नागरिकों को नागरिकता किस आधार पर दी जाएगी?",
        answers: shuffle([
            { text: "वे स्वतः नागरिक बन जाते हैं", correct: false },
            { text: "उन्हें आवेदन करना पड़ता है", correct: false },
            { text: "संसद द्वारा बनाए गए कानून के अनुसार", correct: true },
            { text: "उन्हें नागरिकता नहीं मिलती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान संसद को यह शक्ति देता है कि वह ऐसे मामलों में नागरिकता के लिए कानून बनाए, जैसा कि गोवा और सिक्किम के विलय के बाद किया गया था।"
    },
    {
        question: "प्रश्न 48. भारत की संचित निधि (Consolidated Fund of India) का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 266", correct: true },
            { text: "अनुच्छेद 267", correct: false },
            { text: "अनुच्छेद 112", correct: false },
            { text: "अनुच्छेद 148", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरकार को प्राप्त होने वाला सभी राजस्व इसी निधि में जमा होता है और इससे कोई भी धन संसद की अनुमति के बिना नहीं निकाला जा सकता, जो वित्तीय मामलों में कानून की सर्वोच्चता को दर्शाता है।"
    },
    {
        question: "प्रश्न 49. संसद के दो सत्रों के बीच अधिकतम स्वीकार्य अंतराल क्या है?",
        answers: shuffle([
            { text: "तीन महीने", correct: false },
            { text: "छह महीने", correct: true },
            { text: "एक साल", correct: false },
            { text: "कोई सीमा नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुसार, संसद के एक सत्र की अंतिम बैठक और अगले सत्र की पहली बैठक के बीच छह महीने से अधिक का अंतर नहीं होना चाहिए।"
    },
    {
        question: "प्रश्न 50. संविधान की ग्यारहवीं अनुसूची में पंचायतों के लिए कितने विषय सूचीबद्ध हैं?",
        answers: shuffle([
            { text: "18", correct: false },
            { text: "29", correct: true },
            { text: "47", correct: false },
            { text: "61", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 73वें संशोधन द्वारा जोड़ी गई इस अनुसूची में 29 विषय हैं, जिन पर पंचायतों को कानून बनाने और कार्य करने की शक्ति दी गई है।"
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