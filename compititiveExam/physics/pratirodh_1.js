const questions = [
    {
        topHeading: "प्रतिरोध पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. विद्युत प्रतिरोध का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "विद्युत धारा के प्रवाह को सुगम बनाना", correct: false },
            { text: "विद्युत धारा के प्रवाह का विरोध करना", correct: true },
            { text: "विभवांतर उत्पन्न करना", correct: false },
            { text: "आवेश का भंडारण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी पदार्थ का प्रतिरोध वह गुण है जो उसमें प्रवाहित होने वाली विद्युत धारा के मार्ग में बाधा डालता है या उसका विरोध करता है।"
    },
    {
        question: "प्रश्न 2. प्रतिरोध का SI मात्रक क्या है?",
        answers: shuffle([
            { text: "वोल्ट", correct: false },
            { text: "एम्पीयर", correct: false },
            { text: "ओम", correct: true },
            { text: "सीमेन्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत प्रतिरोध का SI मात्रक ओम है, जिसे ग्रीक अक्षर ओमेगा (Ω) से दर्शाया जाता है।"
    },
    {
        question: "प्रश्न 3. किसी चालक का प्रतिरोध उसकी लंबाई पर कैसे निर्भर करता है?",
        answers: shuffle([
            { text: "लंबाई के व्युत्क्रमानुपाती होता है", correct: false },
            { text: "लंबाई के अनुक्रमानुपाती होता है", correct: true },
            { text: "लंबाई के वर्ग के अनुक्रमानुपाती होता है", correct: false },
            { text: "लंबाई पर निर्भर नहीं करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी चालक का प्रतिरोध (R) उसकी लंबाई (l) के सीधे अनुक्रमानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि तार जितना लंबा होगा, उसका प्रतिरोध उतना ही अधिक होगा।"
    },
    {
        question: "प्रश्न 4. किसी चालक का प्रतिरोध उसके अनुप्रस्थ काट के क्षेत्रफल पर कैसे निर्भर करता है?",
        answers: shuffle([
            { text: "क्षेत्रफल के व्युत्क्रमानुपाती होता है", correct: true },
            { text: "क्षेत्रफल के अनुक्रमानुपाती होता है", correct: false },
            { text: "क्षेत्रफल के वर्ग के व्युत्क्रमानुपाती होता है", correct: false },
            { text: "क्षेत्रफल पर निर्भर नहीं करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी चालक का प्रतिरोध (R) उसके अनुप्रस्थ काट के क्षेत्रफल (A) के व्युत्क्रमानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि तार जितना मोटा होगा, उसका प्रतिरोध उतना ही कम होगा।"
    },
    {
        question: "प्रश्न 5. प्रतिरोधकता (विशिष्ट प्रतिरोध) का SI मात्रक क्या है?",
        answers: shuffle([
            { text: "ओम", correct: false },
            { text: "ओम प्रति मीटर", correct: false },
            { text: "ओम-मीटर", correct: true },
            { text: "म्हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता (ρ) का SI मात्रक ओम-मीटर (Ω•m) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पदार्थ का एक आंतरिक गुण है।"
    },
    {
        question: "प्रश्न 6. किसी पदार्थ की प्रतिरोधकता किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल पदार्थ की लंबाई पर", correct: false },
            { text: "केवल पदार्थ की मोटाई पर", correct: false },
            { text: "केवल पदार्थ के आकार पर", correct: false },
            { text: "पदार्थ की प्रकृति और तापमान पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता या विशिष्ट प्रतिरोध किसी पदार्थ का अभिलाक्षणिक गुण है, जो केवल पदार्थ की प्रकृति और उसके तापमान पर निर्भर करता है, न कि उसकी विमाओं (लंबाई, क्षेत्रफल) पर।"
    },
    {
        question: "प्रश्न 7. तापमान बढ़ाने पर धात्विक चालकों का प्रतिरोध...?",
        answers: shuffle([
            { text: "घटता है", correct: false },
            { text: "बढ़ता है", correct: true },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "शून्य हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धातुओं में तापमान बढ़ाने पर परमाणुओं का कंपन बढ़ जाता है, जिससे इलेक्ट्रॉनों के प्रवाह में अधिक टक्करें होती हैं और फलस्वरूप प्रतिरोध बढ़ जाता है।"
    },
    {
        question: "प्रश्न 8. तापमान बढ़ाने पर अर्धचालकों का प्रतिरोध...?",
        answers: shuffle([
            { text: "घटता है", correct: true },
            { text: "बढ़ता है", correct: false },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "बहुत अधिक हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धचालकों में तापमान बढ़ाने से अधिक आवेश वाहक (इलेक्ट्रॉन और होल) मुक्त होते हैं, जिससे उनकी चालकता बढ़ती है और प्रतिरोध घटता है।"
    },
    {
        question: "प्रश्न 9. निम्नलिखित में से किसकी प्रतिरोधकता सबसे कम होती है?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: false },
            { text: "चांदी", correct: true },
            { text: "एल्यूमीनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चांदी विद्युत की सबसे अच्छी सुचालक है, जिसका अर्थ है कि इसकी प्रतिरोधकता सभी धातुओं में सबसे कम होती है।"
    },
    {
        question: "प्रश्न 10. अतिचालक (Superconductor) वह पदार्थ है जिसका प्रतिरोध...?",
        answers: shuffle([
            { text: "बहुत अधिक होता है", correct: false },
            { text: "अनंत होता है", correct: false },
            { text: "शून्य होता है", correct: true },
            { text: "ऋणात्मक होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अतिचालक वे पदार्थ होते हैं जो एक निश्चित क्रांतिक तापमान से नीचे ठंडा करने पर शून्य विद्युत प्रतिरोध दर्शाते हैं।"
    },
    {
        question: "प्रश्न 11. प्रतिरोधों के श्रेणीक्रम संयोजन में क्या समान रहता है?",
        answers: shuffle([
            { text: "विभवांतर", correct: false },
            { text: "धारा", correct: true },
            { text: "आवेश", correct: false },
            { text: "शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रतिरोधों को श्रेणीक्रम में जोड़ा जाता है, तो परिपथ के प्रत्येक अवयव से प्रवाहित होने वाली विद्युत धारा का मान समान रहता है।"
    },
    {
        question: "प्रश्न 12. प्रतिरोधों के समांतर क्रम संयोजन में क्या समान रहता है?",
        answers: shuffle([
            { text: "विभवांतर", correct: true },
            { text: "धारा", correct: false },
            { text: "प्रतिरोध", correct: false },
            { text: "ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रतिरोधों को समांतर क्रम में जोड़ा जाता है, तो प्रत्येक प्रतिरोधक के सिरों पर विभवांतर (वोल्टेज) का मान समान रहता है।"
    },
    {
        question: "प्रश्न 13. यदि दो समान प्रतिरोधों को श्रेणीक्रम में जोड़ा जाए तो तुल्य प्रतिरोध 4 ओम होता है। यदि उन्हें समांतर क्रम में जोड़ा जाए तो तुल्य प्रतिरोध कितना होगा?",
        answers: shuffle([
            { text: "4 ओम", correct: false },
            { text: "2 ओम", correct: false },
            { text: "1 ओम", correct: true },
            { text: "0.5 ओम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रेणीक्रम में R+R = 4, अतः प्रत्येक प्रतिरोध 2 ओम का है।<br><br><i class='fa-solid fa-angles-right icon'></i> समांतर क्रम में तुल्य प्रतिरोध (2*2)/(2+2) = 4/4 = 1 ओम होगा।"
    },
    {
        question: "प्रश्न 14. प्रतिरोध का व्युत्क्रम क्या कहलाता है?",
        answers: shuffle([
            { text: "प्रतिरोधकता", correct: false },
            { text: "चालकता", correct: false },
            { text: "चालकत्व", correct: true },
            { text: "प्रतिबाधा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकत्व (Conductance) प्रतिरोध का व्युत्क्रम होता है और यह मापता है कि कोई पदार्थ कितनी आसानी से धारा को प्रवाहित होने देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मात्रक सीमेन्स या म्हो है।"
    },
    {
        question: "प्रश्न 15. प्रतिरोधकता का व्युत्क्रम क्या कहलाता है?",
        answers: shuffle([
            { text: "प्रतिरोध", correct: false },
            { text: "चालकत्व", correct: false },
            { text: "चालकता", correct: true },
            { text: "धारिता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालकता (Conductivity) प्रतिरोधकता का व्युत्क्रम है और यह पदार्थ के चालन करने की आंतरिक क्षमता को दर्शाता है।"
    },
    {
        question: "प्रश्न 16. एक आदर्श एमीटर का प्रतिरोध कितना होना चाहिए?",
        answers: shuffle([
            { text: "शून्य", correct: true },
            { text: "अनंत", correct: false },
            { text: "एक ओम", correct: false },
            { text: "बहुत अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एमीटर को परिपथ में श्रेणीक्रम में जोड़ा जाता है ताकि वह कुल धारा माप सके।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका प्रतिरोध शून्य होना चाहिए ताकि यह परिपथ के कुल प्रतिरोध को प्रभावित न करे।"
    },
    {
        question: "प्रश्न 17. एक आदर्श वोल्टमीटर का प्रतिरोध कितना होना चाहिए?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: true },
            { text: "एक ओम", correct: false },
            { text: "बहुत कम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्टमीटर को परिपथ में समांतर क्रम में जोड़ा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका प्रतिरोध अनंत होना चाहिए ताकि यह परिपथ से कोई धारा न ले और सटीक विभवांतर माप सके।"
    },
    {
        question: "प्रश्न 18. कार्बन प्रतिरोधक में रंग कोड किसलिए उपयोग किया जाता है?",
        answers: shuffle([
            { text: "उसकी सुंदरता बढ़ाने के लिए", correct: false },
            { text: "उसके तापमान को दर्शाने के लिए", correct: false },
            { text: "उसके प्रतिरोध मान और सहनशीलता को दर्शाने के लिए", correct: true },
            { text: "उसके निर्माता को दर्शाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटे आकार के कारण कार्बन प्रतिरोधकों पर उनका मान सीधे लिखना कठिन होता है, इसलिए रंगों की धारियों (बैंड) का उपयोग करके उनका प्रतिरोध मान और सहनशीलता (tolerance) व्यक्त की जाती है।"
    },
    {
        question: "प्रश्न 19. वह कौन सा उपकरण है जिसका उपयोग परिपथ में प्रतिरोध को बदलने के लिए किया जाता है?",
        answers: shuffle([
            { text: "धारा नियंत्रक (रियोस्टेट)", correct: true },
            { text: "ट्रांसफॉर्मर", correct: false },
            { text: "गैल्वेनोमीटर", correct: false },
            { text: "मोटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धारा नियंत्रक या रियोस्टेट एक प्रकार का चर प्रतिरोधक होता है, जिसका मान बदलकर परिपथ में धारा को नियंत्रित किया जा सकता है।"
    },
    {
        question: "प्रश्न 20. यदि किसी तार को खींचकर उसकी लंबाई दोगुनी कर दी जाए, तो उसका प्रतिरोध कितना हो जाएगा?",
        answers: shuffle([
            { text: "आधा", correct: false },
            { text: "दोगुना", correct: false },
            { text: "चार गुना", correct: true },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब तार को खींचा जाता है तो उसका आयतन स्थिर रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबाई दोगुनी होने पर, क्षेत्रफल आधा हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि R ∝ l/A, नया प्रतिरोध 2 / (1/2) = 4 गुना हो जाएगा।"
    },
    {
        question: "प्रश्न 21. व्हीटस्टोन सेतु का उपयोग क्या मापने के लिए किया जाता है?",
        answers: shuffle([
            { text: "धारा", correct: false },
            { text: "विभवांतर", correct: false },
            { text: "अज्ञात प्रतिरोध", correct: true },
            { text: "शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्हीटस्टोन सेतु एक ऐसी परिपथ व्यवस्था है जो तीन ज्ञात प्रतिरोधों की सहायता से एक अज्ञात प्रतिरोध का मान बहुत सटीकता से ज्ञात करने के लिए उपयोग की जाती है।"
    },
    {
        question: "प्रश्न 22. मीटर सेतु किस सिद्धांत पर कार्य करता है?",
        answers: shuffle([
            { text: "किरचॉफ का नियम", correct: false },
            { text: "व्हीटस्टोन सेतु का सिद्धांत", correct: true },
            { text: "फैराडे का नियम", correct: false },
            { text: "ओम का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीटर सेतु व्हीटस्टोन सेतु का ही एक सरल और प्रायोगिक रूप है, जो एक मीटर लंबे तार पर संतुलन बिंदु ज्ञात करके प्रतिरोध मापता है।"
    },
    {
        question: "प्रश्न 23. प्रतिरोध किस प्रकार की ऊर्जा को किस प्रकार की ऊर्जा में परिवर्तित करता है?",
        answers: shuffle([
            { text: "विद्युत ऊर्जा को यांत्रिक ऊर्जा में", correct: false },
            { text: "विद्युत ऊर्जा को ऊष्मा ऊर्जा में", correct: true },
            { text: "यांत्रिक ऊर्जा को विद्युत ऊर्जा में", correct: false },
            { text: "ऊष्मा ऊर्जा को विद्युत ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधक में जब धारा प्रवाहित होती है, तो इलेक्ट्रॉन-आयन टक्करों के कारण विद्युत ऊर्जा का रूपांतरण ऊष्मा ऊर्जा में होता है।"
    },
    {
        question: "प्रश्न 24. मिश्र धातुओं, जैसे मैंगनिन और कॉन्स्टेंटन, का उपयोग मानक प्रतिरोधक बनाने के लिए क्यों किया जाता है?",
        answers: shuffle([
            { text: "क्योंकि वे सस्ती होती हैं", correct: false },
            { text: "क्योंकि उनकी प्रतिरोधकता उच्च होती है", correct: false },
            { text: "क्योंकि उनका प्रतिरोध ताप गुणांक नगण्य होता है", correct: true },
            { text: "क्योंकि वे बहुत हल्की होती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन मिश्र धातुओं का प्रतिरोध तापमान में परिवर्तन से लगभग अप्रभावित रहता है, जिससे वे सटीक माप के लिए स्थिर प्रतिरोधक बनाने हेतु उपयुक्त होती हैं।"
    },
    {
        question: "प्रश्न 25. 'शंट' क्या है?",
        answers: shuffle([
            { text: "एक उच्च मान का प्रतिरोध", correct: false },
            { text: "एक निम्न मान का प्रतिरोध", correct: true },
            { text: "एक प्रेरक", correct: false },
            { text: "एक संधारित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शंट एक बहुत कम मान वाला प्रतिरोध होता है जिसे किसी उपकरण (जैसे गैल्वेनोमीटर) के समांतर क्रम में जोड़ा जाता है ताकि अधिकांश धारा उससे होकर गुजर जाए।"
    },
    {
        question: "प्रश्न 26. गैल्वेनोमीटर को एमीटर में बदलने के लिए शंट को कैसे जोड़ा जाता है?",
        answers: shuffle([
            { text: "गैल्वेनोमीटर के श्रेणीक्रम में", correct: false },
            { text: "गैल्वेनोमीटर के समांतर क्रम में", correct: true },
            { text: "कैसे भी जोड़ा जा सकता है", correct: false },
            { text: "शंट का उपयोग नहीं होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैल्वेनोमीटर के समांतर क्रम में एक निम्न प्रतिरोध (शंट) लगाकर उसे एमीटर में बदला जाता है, ताकि वह अधिक मात्रा की धारा माप सके।"
    },
    {
        question: "प्रश्न 27. गैल्वेनोमीटर को वोल्टमीटर में बदलने के लिए एक उच्च प्रतिरोध को कैसे जोड़ा जाता है?",
        answers: shuffle([
            { text: "गैल्वेनोमीटर के श्रेणीक्रम में", correct: true },
            { text: "गैल्वेनोमीटर के समांतर क्रम में", correct: false },
            { text: "यह आवश्यक नहीं है", correct: false },
            { text: "शंट का उपयोग होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैल्वेनोमीटर के श्रेणीक्रम में एक उच्च मान का प्रतिरोध जोड़कर उसे वोल्टमीटर में बदला जाता है, ताकि वह उच्च विभवांतर माप सके।"
    },
    {
        question: "प्रश्न 28. किसी पदार्थ का प्रतिरोध ताप गुणांक ऋणात्मक होने का क्या अर्थ है?",
        answers: shuffle([
            { text: "तापमान बढ़ने पर प्रतिरोध बढ़ता है", correct: false },
            { text: "तापमान बढ़ने पर प्रतिरोध घटता है", correct: true },
            { text: "तापमान का प्रतिरोध पर कोई प्रभाव नहीं पड़ता", correct: false },
            { text: "पदार्थ एक अतिचालक है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धचालक और कुछ कुचालकों (जैसे कार्बन) का प्रतिरोध ताप गुणांक ऋणात्मक होता है, अर्थात गर्म करने पर उनका प्रतिरोध कम हो जाता है।"
    },
    {
        question: "प्रश्न 29. थर्मिस्टर एक ऐसा उपकरण है जिसका प्रतिरोध किस पर बहुत अधिक निर्भर करता है?",
        answers: shuffle([
            { text: "दाब", correct: false },
            { text: "प्रकाश", correct: false },
            { text: "तापमान", correct: true },
            { text: "आर्द्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थर्मिस्टर एक ऊष्मा-संवेदी प्रतिरोधक है, जिसका प्रतिरोध तापमान में थोड़े से परिवर्तन से भी बहुत अधिक बदल जाता है।"
    },
    {
        question: "प्रश्न 30. प्रतिरोध का विमीय सूत्र क्या है?",
        answers: shuffle([
            { text: "[ML²T⁻³A⁻¹]", correct: false },
            { text: "[ML²T⁻³A⁻²]", correct: true },
            { text: "[MLT⁻²A⁻²]", correct: false },
            { text: "[ML²T⁻²A⁻¹]", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम से R = V/I और V = W/q का उपयोग करके, प्रतिरोध की विमा [ML²T⁻³A⁻²] प्राप्त होती है।"
    },
    {
        question: "प्रश्न 31. ओमीय प्रतिरोधक कौन से होते हैं?",
        answers: shuffle([
            { text: "जो ओम के नियम का पालन नहीं करते हैं", correct: false },
            { text: "जो ओम के नियम का पालन करते हैं", correct: true },
            { text: "जिनका प्रतिरोध शून्य होता है", correct: false },
            { text: "जिनका प्रतिरोध अनंत होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे प्रतिरोधक जिनका विभवांतर और धारा के बीच का ग्राफ एक सीधी रेखा होता है (अर्थात जिनका प्रतिरोध स्थिर रहता है), ओमीय प्रतिरोधक कहलाते हैं।"
    },
    {
        question: "प्रश्न 32. अन-ओमीय प्रतिरोध का एक उदाहरण है?",
        answers: shuffle([
            { text: "तांबे का तार", correct: false },
            { text: "डायोड", correct: true },
            { text: "मानक प्रतिरोधक", correct: false },
            { text: "एल्यूमीनियम का तार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायोड एक अर्धचालक युक्ति है जिसका प्रतिरोध आरोपित वोल्टेज की दिशा और मान के साथ बदलता है, इसलिए यह ओम के नियम का पालन नहीं करता।"
    },
    {
        question: "प्रश्न 33. यदि किसी तार की त्रिज्या आधी कर दी जाए तो उसका प्रतिरोध कितना हो जाएगा?",
        answers: shuffle([
            { text: "आधा", correct: false },
            { text: "दोगुना", correct: false },
            { text: "चार गुना", correct: true },
            { text: "एक-चौथाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोध, क्षेत्रफल (A=πr²) के व्युत्क्रमानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> त्रिज्या आधी करने पर क्षेत्रफल एक-चौथाई हो जाएगा, जिससे प्रतिरोध चार गुना बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 34. 'लघुपथन' (शॉर्ट सर्किट) के समय परिपथ का प्रतिरोध हो जाता है?",
        answers: shuffle([
            { text: "बहुत अधिक", correct: false },
            { text: "अनंत", correct: false },
            { text: "लगभग शून्य", correct: true },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लघुपथन की स्थिति में, धारा एक बहुत कम प्रतिरोध वाले पथ से बहने लगती है, जिससे परिपथ का कुल प्रतिरोध लगभग शून्य हो जाता है और धारा अत्यधिक बढ़ जाती है।"
    },
    {
        question: "प्रश्न 35. बैटरी का आंतरिक प्रतिरोध क्या है?",
        answers: shuffle([
            { text: "बैटरी के बाहरी परिपथ का प्रतिरोध", correct: false },
            { text: "बैटरी के अंदर के रसायनों (विद्युत अपघट्य) द्वारा प्रस्तुत प्रतिरोध", correct: true },
            { text: "शून्य होता है", correct: false },
            { text: "अनंत होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैटरी के अंदर मौजूद इलेक्ट्रोलाइट और इलेक्ट्रोड भी आयनों और इलेक्ट्रॉनों के प्रवाह में कुछ बाधा उत्पन्न करते हैं, जिसे आंतरिक प्रतिरोध कहते हैं।"
    },
    {
        question: "प्रश्न 36. पोस्ट ऑफिस बॉक्स किसका एक उन्नत संस्करण है?",
        answers: shuffle([
            { text: "मीटर सेतु", correct: false },
            { text: "विभवमापी", correct: false },
            { text: "व्हीटस्टोन सेतु", correct: true },
            { text: "गैल्वेनोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोस्ट ऑफिस बॉक्स व्हीटस्टोन सेतु के सिद्धांत पर आधारित एक सुसंबद्ध उपकरण है, जिसका उपयोग अज्ञात प्रतिरोध को सटीकता से मापने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 37. प्रतिरोधों को समांतर क्रम में क्यों जोड़ा जाता है?",
        answers: shuffle([
            { text: "कुल प्रतिरोध को बढ़ाने के लिए", correct: false },
            { text: "कुल प्रतिरोध को घटाने के लिए", correct: true },
            { text: "धारा को समान रखने के लिए", correct: false },
            { text: "परिपथ को जटिल बनाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समांतर क्रम में जोड़ने पर धारा को बहने के लिए कई रास्ते मिल जाते हैं, जिससे परिपथ का कुल या तुल्य प्रतिरोध घट जाता है।"
    },
    {
        question: "प्रश्न 38. घरों की वायरिंग में उपकरणों को किस क्रम में जोड़ा जाता है?",
        answers: shuffle([
            { text: "श्रेणीक्रम में", correct: false },
            { text: "समांतर क्रम में", correct: true },
            { text: "मिश्रित क्रम में", correct: false },
            { text: "किसी भी क्रम में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपकरणों को समांतर क्रम में जोड़ा जाता है ताकि प्रत्येक उपकरण को समान विभवांतर (वोल्टेज) मिले और एक उपकरण के बंद होने या खराब होने का प्रभाव दूसरों पर न पड़े।"
    },
    {
        question: "प्रश्न 39. एक ही पदार्थ के बने दो तारों की लंबाइयाँ समान हैं, लेकिन उनकी त्रिज्याओं का अनुपात 1:2 है। उनके प्रतिरोधों का अनुपात क्या होगा?",
        answers: shuffle([
            { text: "1:2", correct: false },
            { text: "2:1", correct: false },
            { text: "1:4", correct: false },
            { text: "4:1", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोध त्रिज्या के वर्ग के व्युत्क्रमानुपाती होता है (R ∝ 1/r²)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, R₁/R₂ = (r₂/r₁)² = (2/1)² = 4/1।"
    },
    {
        question: "प्रश्न 40. मानव शरीर का प्रतिरोध (शुष्क अवस्था में) लगभग कितना होता है?",
        answers: shuffle([
            { text: "बहुत कम", correct: false },
            { text: "बहुत अधिक", correct: true },
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुष्क मानव त्वचा का प्रतिरोध काफी अधिक (कई किलो-ओम से लेकर मेगा-ओम तक) होता है, जो एक कुचालक की तरह व्यवहार करता है।"
    },
    {
        question: "प्रश्न 41. किसी चालक का प्रतिरोध निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "चालक के पदार्थ पर", correct: false },
            { text: "चालक के तापमान पर", correct: false },
            { text: "चालक की विमाओं पर", correct: false },
            { text: "चालक से प्रवाहित धारा की मात्रा पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक ओमीय चालक का प्रतिरोध उसका एक स्थिर गुण है; यह स्वयं उसमें से बहने वाली धारा पर निर्भर नहीं करता है।"
    },
    {
        question: "प्रश्न 42. प्रकाश आश्रित प्रतिरोधक (LDR) का प्रतिरोध किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "तापमान", correct: false },
            { text: "दाब", correct: false },
            { text: "आपतित प्रकाश की तीव्रता", correct: true },
            { text: "आर्द्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलडीआर एक ऐसा अर्धचालक उपकरण है जिसका प्रतिरोध उस पर पड़ने वाले प्रकाश की तीव्रता के साथ बदलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रकाश बढ़ने पर प्रतिरोध घटता है।"
    },
    {
        question: "प्रश्न 43. विशिष्ट चालकता का मात्रक क्या है?",
        answers: shuffle([
            { text: "ओम-मीटर", correct: false },
            { text: "ओम प्रति मीटर", correct: false },
            { text: "सीमेन्स-मीटर", correct: false },
            { text: "सीमेन्स प्रति मीटर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशिष्ट चालकता (σ), प्रतिरोधकता (ρ) का व्युत्क्रम है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि ρ का मात्रक ओम-मीटर है, σ का मात्रक 1/(ओम-मीटर) = (सीमेन्स प्रति मीटर) होगा।"
    },
    {
        question: "प्रश्न 44. यदि किसी तार का व्यास दोगुना कर दिया जाए, तो उसका प्रतिरोध कितना हो जाएगा?",
        answers: shuffle([
            { text: "आधा", correct: false },
            { text: "दोगुना", correct: false },
            { text: "एक-चौथाई", correct: true },
            { text: "चार गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यास दोगुना होने का अर्थ है कि त्रिज्या दोगुनी हो गई है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे क्षेत्रफल (A=πr²) चार गुना हो जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि प्रतिरोध क्षेत्रफल के व्युत्क्रमानुपाती होता है, प्रतिरोध एक-चौथाई रह जाएगा।"
    },
    {
        question: "प्रश्न 45. एक खुले परिपथ (Open circuit) का प्रतिरोध कितना होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "एक ओम", correct: false },
            { text: "बहुत कम", correct: false },
            { text: "अनंत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक खुले परिपथ में धारा का प्रवाह नहीं होता क्योंकि उसमें एक वायु अंतराल (air gap) होता है, जो अनंत प्रतिरोध प्रस्तुत करता है।"
    },
    {
        question: "प्रश्न 46. प्रतिरोध के तापीय प्रभाव का उपयोग किस उपकरण में नहीं होता है?",
        answers: shuffle([
            { text: "विद्युत हीटर", correct: false },
            { text: "विद्युत बल्ब", correct: false },
            { text: "विद्युत पंखा", correct: true },
            { text: "विद्युत प्रेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत पंखा विद्युत धारा के चुंबकीय प्रभाव पर कार्य करता है, जबकि अन्य सभी उपकरण जूल तापन (धारा के ऊष्मीय प्रभाव) के सिद्धांत पर आधारित हैं।"
    },
    {
        question: "प्रश्न 47. दो प्रतिरोधों को श्रेणीक्रम में जोड़ने पर तुल्य प्रतिरोध 25 ओम और समांतर क्रम में जोड़ने पर 4 ओम होता है। प्रतिरोधों के मान क्या हैं?",
        answers: shuffle([
            { text: "10 ओम, 15 ओम", correct: false },
            { text: "20 ओम, 5 ओम", correct: true },
            { text: "12.5 ओम, 12.5 ओम", correct: false },
            { text: "24 ओम, 1 ओम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समीकरण R₁+R₂=25 और (R₁R₂)/(R₁+R₂)=4 को हल करने पर R₁=20 और R₂=5 ओम प्राप्त होता है।"
    },
    {
        question: "प्रश्न 48. किसी चालक में मुक्त इलेक्ट्रॉनों के अनुगमन वेग और प्रतिरोध में क्या संबंध है?",
        answers: shuffle([
            { text: "अनुगमन वेग बढ़ने पर प्रतिरोध बढ़ता है", correct: false },
            { text: "अनुगमन वेग बढ़ने पर प्रतिरोध घटता है", correct: false },
            { text: "दोनों में कोई संबंध नहीं है", correct: false },
            { text: "वे एक दूसरे के व्युत्क्रमानुपाती हैं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोध का एक सूक्ष्म कारण इलेक्ट्रॉनों की आयनों से टक्कर है।<br><br><i class='fa-solid fa-angles-right icon'></i> अधिक प्रतिरोध का अर्थ है अधिक टक्करें, जिससे इलेक्ट्रॉनों का औसत अनुगमन वेग कम हो जाता है।"
    },
    {
        question: "प्रश्न 49. किस पदार्थ का प्रतिरोध ताप गुणांक लगभग शून्य होता है?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "टंगस्टन", correct: false },
            { text: "मैंगनिन", correct: true },
            { text: "सिलिकॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैंगनिन जैसी मिश्र धातुओं को विशेष रूप से इसलिए बनाया जाता है ताकि उनका प्रतिरोध तापमान के साथ नगण्य रूप से बदले।"
    },
    {
        question: "प्रश्न 50. विश्रांति काल (Relaxation Time) बढ़ने पर किसी धातु की प्रतिरोधकता पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "बढ़ती है", correct: false },
            { text: "घटती है", correct: true },
            { text: "अपरिवर्तित रहती है", correct: false },
            { text: "शून्य हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विश्रांति काल दो क्रमिक टक्करों के बीच का औसत समय है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि यह समय बढ़ता है, तो इसका मतलब है कि टक्करें कम हो रही हैं, जिससे इलेक्ट्रॉनों का प्रवाह आसान हो जाता है और प्रतिरोधकता घट जाती है।"
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