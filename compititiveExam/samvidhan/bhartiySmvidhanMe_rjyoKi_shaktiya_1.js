const questions = [
    {
        topHeading: "राज्य की शक्तियों आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान के किस अनुच्छेद के तहत राज्य की कार्यकारी शक्ति राज्यपाल में निहित है?",
        answers: shuffle([
            { text: "अनुच्छेद 152", correct: false },
            { text: "अनुच्छेद 153", correct: false },
            { text: "अनुच्छेद 154", correct: true },
            { text: "अनुच्छेद 155", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 154 के अनुसार, राज्य की कार्यकारी शक्ति राज्यपाल में निहित होगी और वह इसका प्रयोग संविधान के अनुसार सीधे या अपने अधीनस्थ अधिकारियों के माध्यम से करेगा।"
    },
    {
        question: "प्रश्न 2. राज्य के मुख्यमंत्री की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "उच्च न्यायालय के मुख्य न्यायाधीश", correct: false },
            { text: "विधान सभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 164(1) के अनुसार, राज्यपाल मुख्यमंत्री की नियुक्ति करता है और मुख्यमंत्री की सलाह पर अन्य मंत्रियों की नियुक्ति करता है।"
    },
    {
        question: "प्रश्न 3. राज्य मंत्रिपरिषद सामूहिक रूप से किसके प्रति उत्तरदायी होती है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "विधान सभा", correct: true },
            { text: "विधान परिषद", correct: false },
            { text: "मुख्यमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 164(2) के अनुसार, राज्य की मंत्रिपरिषद सामूहिक रूप से राज्य की विधान सभा के प्रति उत्तरदायी होती है।"
    },
    {
        question: "प्रश्न 4. राज्य के महाधिवक्ता (Advocate General) की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "भारत के राष्ट्रपति", correct: false },
            { text: "राज्य के राज्यपाल", correct: true },
            { text: "राज्य के मुख्यमंत्री", correct: false },
            { text: "उच्च न्यायालय के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान के अनुच्छेद 165 के अनुसार, राज्य के महाधिवक्ता की नियुक्ति राज्यपाल द्वारा की जाती है।"
    },
    {
        question: "प्रश्न 5. राज्यपाल को अध्यादेश जारी करने की शक्ति किस अनुच्छेद में दी गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 211", correct: false },
            { text: "अनुच्छेद 213", correct: true },
            { text: "अनुच्छेद 123", correct: false },
            { text: "अनुच्छेद 200", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब राज्य विधानमंडल का सत्र न चल रहा हो, तब राज्यपाल अनुच्छेद 213 के तहत अध्यादेश जारी कर सकता है, जिसका प्रभाव कानून के समान होता है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से कौन सी शक्ति राज्यपाल के पास नहीं है?",
        answers: shuffle([
            { text: "विधान सभा को बुलाना और सत्रावसान करना", correct: false },
            { text: "मृत्युदंड को क्षमा करना", correct: true },
            { text: "मुख्यमंत्री की नियुक्ति करना", correct: false },
            { text: "राज्य लोक सेवा आयोग के सदस्यों की नियुक्ति करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत्युदंड को क्षमा करने की शक्ति केवल भारत के राष्ट्रपति के पास है (अनुच्छेद 72)।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्यपाल मृत्युदंड को निलंबित, माफ या कम कर सकता है, लेकिन पूरी तरह से क्षमा नहीं कर सकता।"
    },
    {
        question: "प्रश्न 7. राज्यपाल अपना त्यागपत्र किसे सौंपता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "उच्च न्यायालय के मुख्य न्यायाधीश", correct: false },
            { text: "विधान सभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यपाल राष्ट्रपति के प्रसादपर्यंत पद धारण करता है और अपना त्यागपत्र राष्ट्रपति को ही सौंपता है।"
    },
    {
        question: "प्रश्न 8. राज्य विधान सभा (Vidhan Sabha) की सदस्यता के लिए न्यूनतम आयु क्या है?",
        answers: shuffle([
            { text: "21 वर्ष", correct: false },
            { text: "25 वर्ष", correct: true },
            { text: "30 वर्ष", correct: false },
            { text: "35 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान के अनुच्छेद 173(b) के अनुसार, राज्य विधान सभा का सदस्य बनने के लिए न्यूनतम आयु 25 वर्ष है।"
    },
    {
        question: "प्रश्न 9. राज्य विधान परिषद (Vidhan Parishad) के सदस्यों का कार्यकाल कितना होता है?",
        answers: shuffle([
            { text: "4 वर्ष", correct: false },
            { text: "5 वर्ष", correct: false },
            { text: "6 वर्ष", correct: true },
            { text: "यह एक स्थायी सदन है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य विधान परिषद एक स्थायी सदन है और इसके सदस्य 6 वर्ष के लिए चुने जाते हैं, जिसमें से एक-तिहाई सदस्य हर दो साल में सेवानिवृत्त हो जाते हैं।"
    },
    {
        question: "प्रश्न 10. धन विधेयक (Money Bill) राज्य विधानमंडल के किस सदन में प्रस्तुत किया जाता है?",
        answers: shuffle([
            { text: "केवल विधान सभा में", correct: true },
            { text: "केवल विधान परिषद में", correct: false },
            { text: "दोनों में से किसी भी सदन में", correct: false },
            { text: "दोनों सदनों की संयुक्त बैठक में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 199 के अनुसार, धन विधेयक केवल विधान सभा में ही प्रस्तुत किया जा सकता है, विधान परिषद में नहीं।"
    },
    {
        question: "प्रश्न 11. किसी राज्य में विधान परिषद की स्थापना या समाप्ति का प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 168", correct: false },
            { text: "अनुच्छेद 169", correct: true },
            { text: "अनुच्छेद 170", correct: false },
            { text: "अनुच्छेद 171", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 169 के अनुसार, संसद किसी राज्य में विधान परिषद की स्थापना या समाप्ति कर सकती है, यदि उस राज्य की विधान सभा इस आशय का संकल्प कुल सदस्य संख्या के बहुमत तथा उपस्थित और मत देने वाले सदस्यों के दो-तिहाई बहुमत से पारित कर दे।"
    },
    {
        question: "प्रश्न 12. विधान सभा के सत्रावसान का आदेश कौन देता है?",
        answers: shuffle([
            { text: "अध्यक्ष", correct: false },
            { text: "मुख्यमंत्री", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "संसदीय कार्य मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यपाल को विधान सभा के सत्र को बुलाने, सत्रावसान करने और भंग करने की शक्ति प्राप्त है।"
    },
    {
        question: "प्रश्न 13. कोई विधेयक धन विधेयक है या नहीं, इसका अंतिम निर्णय कौन करता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "राज्यपाल", correct: false },
            { text: "विधान सभा अध्यक्ष", correct: true },
            { text: "वित्त मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य स्तर पर, विधान सभा का अध्यक्ष यह प्रमाणित करता है कि कोई विधेयक धन विधेयक है या नहीं, और उसका निर्णय अंतिम होता है।"
    },
    {
        question: "प्रश्न 14. विधान परिषद कितने सदस्यों को मनोनीत कर सकती है?",
        answers: shuffle([
            { text: "कुल सदस्यों का 1/3", correct: false },
            { text: "कुल सदस्यों का 1/6", correct: true },
            { text: "कुल सदस्यों का 1/10", correct: false },
            { text: "कुल सदस्यों का 1/12", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यपाल विधान परिषद के कुल सदस्यों के 1/6 भाग को साहित्य, कला, विज्ञान, सहकारिता आंदोलन और समाज सेवा में विशेष ज्ञान या व्यावहारिक अनुभव रखने वाले व्यक्तियों में से मनोनीत करता है।"
    },
    {
        question: "प्रश्न 15. राज्य के उच्च न्यायालय के न्यायाधीशों की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "मुख्यमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 217 के अनुसार, उच्च न्यायालय के न्यायाधीशों की नियुक्ति राष्ट्रपति द्वारा भारत के मुख्य न्यायाधीश और संबंधित राज्य के राज्यपाल के परामर्श से की जाती है।"
    },
    {
        question: "प्रश्न 16. उच्च न्यायालय के न्यायाधीशों की सेवानिवृत्ति की आयु क्या है?",
        answers: shuffle([
            { text: "60 वर्ष", correct: false },
            { text: "62 वर्ष", correct: true },
            { text: "65 वर्ष", correct: false },
            { text: "58 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च न्यायालय के न्यायाधीशों की सेवानिवृत्ति की आयु 62 वर्ष है।"
    },
    {
        question: "प्रश्न 17. उच्च न्यायालय को रिट (Writ) जारी करने की शक्ति किस अनुच्छेद के तहत प्राप्त है?",
        answers: shuffle([
            { text: "अनुच्छेद 32", correct: false },
            { text: "अनुच्छेद 226", correct: true },
            { text: "अनुच्छेद 136", correct: false },
            { text: "अनुच्छेद 143", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 226 के तहत, उच्च न्यायालय मौलिक अधिकारों के प्रवर्तन और किसी अन्य उद्देश्य के लिए रिट जारी कर सकता है।"
    },
    {
        question: "प्रश्न 18. जिला न्यायाधीशों की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "उच्च न्यायालय के मुख्य न्यायाधीश", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "राज्य लोक सेवा आयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 233 के अनुसार, जिला न्यायाधीशों की नियुक्ति राज्यपाल द्वारा संबंधित राज्य के उच्च न्यायालय के परामर्श से की जाती है।"
    },
    {
        question: "प्रश्न 19. 'शक्तियों के पृथक्करण' के सिद्धांत का क्या अर्थ है?",
        answers: shuffle([
            { text: "केंद्र और राज्यों के बीच शक्तियों का विभाजन", correct: false },
            { text: "सरकार के विभिन्न अंगों (विधायिका, कार्यपालिका, न्यायपालिका) के बीच शक्तियों का विभाजन", correct: true },
            { text: "विभिन्न सामाजिक समूहों के बीच शक्तियों का विभाजन", correct: false },
            { text: "आर्थिक और राजनीतिक शक्तियों का पृथक्करण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्तियों के पृथक्करण का सिद्धांत सरकार की शक्तियों को तीन स्वतंत्र शाखाओं - विधायिका, कार्यपालिका और न्यायपालिका - में विभाजित करता है ताकि किसी एक अंग के पास अत्यधिक शक्ति न हो।"
    },
    {
        question: "प्रश्न 20. राज्य सूची के विषयों पर कानून बनाने का अधिकार किसे है?",
        answers: shuffle([
            { text: "केवल संसद", correct: false },
            { text: "केवल राज्य विधानमंडल", correct: true },
            { text: "संसद और राज्य विधानमंडल दोनों", correct: false },
            { text: "राष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान की सातवीं अनुसूची के तहत, राज्य सूची में वर्णित विषयों पर कानून बनाने का अनन्य अधिकार राज्य विधानमंडल को है।"
    },
    {
        question: "प्रश्न 21. समवर्ती सूची (Concurrent List) के विषय पर केंद्र और राज्य के कानून में विरोधाभास होने पर क्या होता है?",
        answers: shuffle([
            { text: "राज्य का कानून मान्य होगा", correct: false },
            { text: "केंद्र का कानून मान्य होगा", correct: true },
            { text: "दोनों कानून निरस्त हो जाएंगे", correct: false },
            { text: "राष्ट्रपति का निर्णय अंतिम होगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 254 के अनुसार, यदि समवर्ती सूची के किसी विषय पर संसद और राज्य विधानमंडल द्वारा बनाए गए कानूनों में कोई विरोध होता है, तो संसद द्वारा बनाया गया कानून मान्य होगा।"
    },
    {
        question: "प्रश्न 22. अवशिष्ट शक्तियां (Residuary Powers) किसके पास हैं?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "राज्यपाल", correct: false },
            { text: "राज्य विधानमंडल", correct: false },
            { text: "संसद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 248 के अनुसार, वे सभी विषय जो संघ सूची, राज्य सूची या समवर्ती सूची में शामिल नहीं हैं, उन पर कानून बनाने की शक्ति संसद के पास है।"
    },
    {
        question: "प्रश्न 23. सरकारीया आयोग (Sarkaria Commission) का गठन किस विषय पर सुझाव देने के लिए किया गया था?",
        answers: shuffle([
            { text: "पंचायती राज सुधार", correct: false },
            { text: "केंद्र-राज्य संबंध", correct: true },
            { text: "बैंकिंग सुधार", correct: false },
            { text: "चुनावी सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्र-राज्य संबंधों की समीक्षा करने और उनमें सुधार के लिए सुझाव देने के लिए 1983 में सरकारीया आयोग का गठन किया गया था।"
    },
    {
        question: "प्रश्न 24. किस अनुच्छेद के तहत संसद राष्ट्रीय हित में राज्य सूची के विषय पर कानून बना सकती है?",
        answers: shuffle([
            { text: "अनुच्छेद 248", correct: false },
            { text: "अनुच्छेद 249", correct: true },
            { text: "अनुच्छेद 250", correct: false },
            { text: "अनुच्छेद 252", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि राज्य सभा उपस्थित और मत देने वाले सदस्यों के दो-तिहाई बहुमत से यह संकल्प पारित कर दे कि राष्ट्रीय हित में यह आवश्यक है, तो संसद राज्य सूची के किसी भी विषय पर कानून बना सकती है।"
    },
    {
        question: "प्रश्न 25. किसी राज्य में राष्ट्रपति शासन किस अनुच्छेद के तहत लगाया जाता है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 356", correct: true },
            { text: "अनुच्छेद 360", correct: false },
            { text: "अनुच्छेद 365", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 356 के तहत, यदि राष्ट्रपति को राज्यपाल की रिपोर्ट से या अन्यथा यह समाधान हो जाता है कि राज्य में संवैधानिक तंत्र विफल हो गया है, तो वह उस राज्य में राष्ट्रपति शासन लगा सकता है।"
    },
    {
        question: "प्रश्न 26. राष्ट्रपति शासन की घोषणा को संसद के दोनों सदनों द्वारा कितने समय के भीतर अनुमोदित किया जाना आवश्यक है?",
        answers: shuffle([
            { text: "एक महीना", correct: false },
            { text: "दो महीने", correct: true },
            { text: "तीन महीने", correct: false },
            { text: "छह महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति शासन की उद्घोषणा जारी होने के दो महीने के भीतर इसका संसद के दोनों सदनों द्वारा अनुमोदन हो जाना आवश्यक है।"
    },
    {
        question: "प्रश्न 27. राष्ट्रपति शासन के दौरान राज्य का शासन कौन चलाता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "राज्यपाल, राष्ट्रपति के प्रतिनिधि के रूप में", correct: true },
            { text: "मुख्य सचिव", correct: false },
            { text: "नवगठित सलाहकार समिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति शासन के दौरान, राज्य की मंत्रिपरिषद भंग कर दी जाती है और राज्य का प्रशासन सीधे राष्ट्रपति के नियंत्रण में आ जाता है, जिसका संचालन राज्यपाल करता है।"
    },
    {
        question: "प्रश्न 28. राज्य का वार्षिक वित्तीय विवरण (बजट) विधानमंडल के समक्ष कौन प्रस्तुत करवाता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "वित्त मंत्री", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "मुख्य सचिव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 202 के अनुसार, राज्यपाल प्रत्येक वित्तीय वर्ष के संबंध में राज्य के विधानमंडल के समक्ष वार्षिक वित्तीय विवरण (बजट) प्रस्तुत करवाता है।"
    },
    {
        question: "प्रश्न 29. राज्य की आकस्मिकता निधि (Contingency Fund) किसके नियंत्रण में होती है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "वित्त मंत्री", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "विधानमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य की आकस्मिकता निधि राज्यपाल के अधीन होती है और वह किसी भी अप्रत्याशित व्यय को पूरा करने के लिए इसमें से अग्रिम दे सकता है।"
    },
    {
        question: "प्रश्न 30. राज्य वित्त आयोग (State Finance Commission) का गठन कौन करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "मुख्यमंत्री", correct: false },
            { text: "केंद्रीय वित्त मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 243-I के तहत, राज्यपाल हर पांच साल में पंचायतों की वित्तीय स्थिति की समीक्षा के लिए एक राज्य वित्त आयोग का गठन करता है।"
    },
    {
        question: "प्रश्न 31. विधानमंडल से अनुमोदन के बिना राज्यपाल द्वारा जारी अध्यादेश अधिकतम कितनी अवधि तक प्रभावी रह सकता है?",
        answers: shuffle([
            { text: "6 सप्ताह", correct: false },
            { text: "6 महीने", correct: false },
            { text: "6 महीने और 6 सप्ताह", correct: true },
            { text: "1 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अध्यादेश को विधानमंडल के पुनः समवेत होने के 6 सप्ताह के भीतर अनुमोदित कराना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूंकि दो सत्रों के बीच अधिकतम अंतराल 6 महीने हो सकता है, इसलिए अधिकतम अवधि 6 महीने और 6 सप्ताह होती है।"
    },
    {
        question: "प्रश्न 32. राज्य लोक सेवा आयोग (SPSC) के अध्यक्ष और सदस्यों की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "मुख्यमंत्री", correct: false },
            { text: "संघ लोक सेवा आयोग (UPSC)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य लोक सेवा आयोग के अध्यक्ष और अन्य सदस्यों की नियुक्ति राज्य के राज्यपाल द्वारा की जाती है।"
    },
    {
        question: "प्रश्न 33. राज्य लोक सेवा आयोग के अध्यक्ष और सदस्यों को कौन हटा सकता है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "मुख्यमंत्री", correct: false },
            { text: "विधान सभा द्वारा पारित प्रस्ताव के आधार पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि नियुक्ति राज्यपाल द्वारा की जाती है, लेकिन उन्हें केवल राष्ट्रपति द्वारा हटाया जा सकता है, राज्यपाल द्वारा नहीं।"
    },
    {
        question: "प्रश्न 34. राज्य मानवाधिकार आयोग का अध्यक्ष कौन हो सकता है?",
        answers: shuffle([
            { text: "उच्च न्यायालय का कोई भी सेवारत न्यायाधीश", correct: false },
            { text: "उच्च न्यायालय का सेवानिवृत्त मुख्य न्यायाधीश", correct: true },
            { text: "सर्वोच्च न्यायालय का सेवानिवृत्त न्यायाधीश", correct: false },
            { text: "कोई भी प्रसिद्ध मानवाधिकार कार्यकर्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानवाधिकार संरक्षण (संशोधन) अधिनियम, 2019 के अनुसार, राज्य मानवाधिकार आयोग का अध्यक्ष उच्च न्यायालय का सेवानिवृत्त मुख्य न्यायाधीश या न्यायाधीश हो सकता है।"
    },
    {
        question: "प्रश्न 35. \"शक्तियों का विभाजन\" संविधान की किस अनुसूची में वर्णित है?",
        answers: shuffle([
            { text: "पाँचवीं अनुसूची", correct: false },
            { text: "छठी अनुसूची", correct: false },
            { text: "सातवीं अनुसूची", correct: true },
            { text: "आठवीं अनुसूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवीं अनुसूची में तीन सूचियाँ हैं - संघ सूची, राज्य सूची और समवर्ती सूची - जो केंद्र और राज्यों के बीच विधायी शक्तियों का विभाजन करती हैं।"
    },
    {
        question: "प्रश्न 36. राज्य सरकार के कानूनी मामलों में सलाह कौन देता है?",
        answers: shuffle([
            { text: "महान्यायवादी (Attorney General)", correct: false },
            { text: "महाधिवक्ता (Advocate General)", correct: true },
            { text: "सॉलिसिटर जनरल", correct: false },
            { text: "मुख्य कानूनी सलाहकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाधिवक्ता राज्य का सर्वोच्च विधि अधिकारी होता है और राज्य सरकार को कानूनी मामलों पर सलाह देता है।"
    },
    {
        question: "प्रश्न 37. विधान सभा का विघटन कौन कर सकता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री की सलाह पर अध्यक्ष", correct: false },
            { text: "मुख्यमंत्री", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "राष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यपाल मुख्यमंत्री की सलाह पर विधान सभा को भंग कर सकता है या यदि कोई दल सरकार बनाने की स्थिति में न हो तो स्वविवेक से भी यह निर्णय ले सकता है।"
    },
    {
        question: "प्रश्न 38. राज्य विधानमंडल द्वारा पारित किसी विधेयक को राज्यपाल किसके विचार के लिए आरक्षित रख सकता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "प्रधानमंत्री", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 200 के अनुसार, राज्यपाल किसी विधेयक को अनुमति दे सकता है, रोक सकता है या राष्ट्रपति के विचार के लिए आरक्षित रख सकता है।"
    },
    {
        question: "प्रश्न 39. एक व्यक्ति अधिकतम कितने राज्यों का राज्यपाल एक साथ बन सकता है?",
        answers: shuffle([
            { text: "केवल एक", correct: false },
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "कोई सीमा निर्धारित नहीं है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 7वें संविधान संशोधन (1956) के अनुसार, एक ही व्यक्ति को दो या दो से अधिक राज्यों का राज्यपाल नियुक्त किया जा सकता है।"
    },
    {
        question: "प्रश्न 40. राज्य के विश्वविद्यालयों का कुलाधिपति (Chancellor) कौन होता है?",
        answers: shuffle([
            { text: "शिक्षा मंत्री", correct: false },
            { text: "मुख्यमंत्री", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "उच्च न्यायालय के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यपाल पदेन राज्य के विश्वविद्यालयों का कुलाधिपति होता है।"
    },
    {
        question: "प्रश्न 41. राज्य की संचित निधि से धन की निकासी के लिए किसकी अनुमति आवश्यक है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "वित्त मंत्री", correct: false },
            { text: "राज्य विधानमंडल", correct: true },
            { text: "मुख्यमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य की संचित निधि से कोई भी धन विनियोग विधेयक (Appropriation Bill) पारित किए बिना नहीं निकाला जा सकता, जिसे राज्य विधानमंडल द्वारा पारित किया जाना आवश्यक है।"
    },
    {
        question: "प्रश्न 42. पंचायती राज किस सूची का विषय है?",
        answers: shuffle([
            { text: "संघ सूची", correct: false },
            { text: "राज्य सूची", correct: true },
            { text: "समवर्ती सूची", correct: false },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंचायती राज और स्थानीय स्वशासन राज्य सूची का विषय है, जिस पर कानून बनाने का अधिकार राज्यों को है।"
    },
    {
        question: "प्रश्न 43. राज्य विधानमंडल के किसी सदस्य की अयोग्यता से संबंधित प्रश्न पर अंतिम निर्णय कौन लेता है?",
        answers: shuffle([
            { text: "अध्यक्ष/सभापति", correct: false },
            { text: "मुख्यमंत्री", correct: false },
            { text: "राज्यपाल (चुनाव आयोग की सलाह पर)", correct: true },
            { text: "उच्च न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दल-बदल के आधार पर अयोग्यता को छोड़कर, अन्य मामलों में अनुच्छेद 192 के तहत राज्यपाल चुनाव आयोग की राय के अनुसार अंतिम निर्णय लेता है।"
    },
    {
        question: "प्रश्न 44. किसी राज्य का नाम बदलने की शक्ति किसके पास है?",
        answers: shuffle([
            { text: "राज्य विधानमंडल", correct: false },
            { text: "संसद", correct: true },
            { text: "राष्ट्रपति", correct: false },
            { text: "संबंधित राज्य की जनता (जनमत संग्रह द्वारा)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 3 के तहत, संसद को किसी भी राज्य का नाम, क्षेत्र या सीमा बदलने का अधिकार है, हालांकि इसके लिए राष्ट्रपति संबंधित राज्य विधानमंडल की राय जानने के लिए विधेयक भेजता है।"
    },
    {
        question: "प्रश्न 45. अंतर-राज्य परिषद (Inter-State Council) की स्थापना कौन करता है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "सर्वोच्च न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 263 के तहत, राष्ट्रपति को केंद्र और राज्यों के बीच या राज्यों के बीच समन्वय के लिए एक अंतर-राज्य परिषद की स्थापना करने की शक्ति है।"
    },
    {
        question: "प्रश्न 46. राज्य सरकार के कार्यों का संचालन किसके नाम पर किया जाता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "मुख्य सचिव", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "राज्य सरकार के नाम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 166 के अनुसार, राज्य सरकार की समस्त कार्यपालिका कार्रवाई राज्यपाल के नाम से की हुई कही जाएगी।"
    },
    {
        question: "प्रश्न 47. विधान परिषद धन विधेयक को अधिकतम कितने दिनों तक रोक सकती है?",
        answers: shuffle([
            { text: "14 दिन", correct: true },
            { text: "1 महीना", correct: false },
            { text: "3 महीने", correct: false },
            { text: "6 महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विधान परिषद को धन विधेयक 14 दिनों के भीतर अपनी सिफारिशों के साथ या बिना सिफारिशों के विधान सभा को लौटाना होता है।"
    },
    {
        question: "प्रश्न 48. राज्य में मंत्रियों को पद और गोपनीयता की शपथ कौन दिलाता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "विधान सभा अध्यक्ष", correct: false },
            { text: "उच्च न्यायालय के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुख्यमंत्री और अन्य मंत्रियों को उनके पद की शपथ राज्यपाल द्वारा दिलाई जाती है।"
    },
    {
        question: "प्रश्न 49. क्षेत्रीय परिषदों (Zonal Councils) का अध्यक्ष कौन होता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "केंद्रीय गृह मंत्री", correct: true },
            { text: "राष्ट्रपति", correct: false },
            { text: "संबंधित राज्यों के मुख्यमंत्री (बारी-बारी से)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षेत्रीय परिषदें सांविधिक निकाय हैं और केंद्रीय गृह मंत्री इन सभी परिषदों के पदेन अध्यक्ष होते हैं।"
    },
    {
        question: "प्रश्न 50. निम्नलिखित में से कौन राज्यपाल की विवेकाधीन शक्तियों में से एक है?",
        answers: shuffle([
            { text: "मुख्यमंत्री की नियुक्ति करना", correct: false },
            { text: "राष्ट्रपति के विचार के लिए किसी विधेयक को आरक्षित करना", correct: true },
            { text: "विधान सभा को भंग करना", correct: false },
            { text: "महाधिवक्ता की नियुक्ति करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी विधेयक को राष्ट्रपति के विचार के लिए आरक्षित रखना राज्यपाल की एक महत्वपूर्ण विवेकाधीन शक्ति है, खासकर यदि विधेयक उच्च न्यायालय की शक्तियों को कम करता हो।"
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