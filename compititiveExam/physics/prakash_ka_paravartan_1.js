const questions = [
    {
        topHeading: "प्रकाश के परावर्तन पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जब प्रकाश की किरण एक चिकनी, चमकदार सतह पर पड़ती है और वापस लौट जाती है, तो इस घटना को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रकाश का अपवर्तन", correct: false },
            { text: "प्रकाश का परावर्तन", correct: true },
            { text: "प्रकाश का विवर्तन", correct: false },
            { text: "प्रकाश का प्रकीर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश का किसी सतह से टकराकर उसी माध्यम में वापस लौटना प्रकाश का परावर्तन कहलाता है"
    },
    {
        question: "प्रश्न 2. प्रकाश के परावर्तन के नियम के अनुसार, निम्नलिखित में से कौन सा सत्य है?",
        answers: shuffle([
            { text: "आपतन कोण, परावर्तन कोण से बड़ा होता है।", correct: false },
            { text: "आपतन कोण, परावर्तन कोण से छोटा होता है।", correct: false },
            { text: "आपतन कोण, परावर्तन कोण के बराबर होता है।", correct: true },
            { text: "दोनों कोणों में कोई संबंध नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परावर्तन का पहला नियम यह है कि आपतन कोण (i) हमेशा परावर्तन कोण (r) के बराबर होता है (∠i=∠r)"
    },
    {
        question: "प्रश्न 3. परावर्तन के दूसरे नियम के अनुसार, आपतित किरण, परावर्तित किरण और अभिलंब कहाँ स्थित होते हैं?",
        answers: shuffle([
            { text: "विभिन्न तलों में", correct: false },
            { text: "एक ही तल में", correct: true },
            { text: "एक दूसरे के समानांतर", correct: false },
            { text: "एक दूसरे के लंबवत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परावर्तन का दूसरा नियम कहता है कि आपतित किरण, परावर्तित किरण और आपतन बिंदु पर सतह का अभिलंब, सभी एक ही तल में होते हैं"
    },
    {
        question: "प्रश्न 4. समतल दर्पण द्वारा बना प्रतिबिंब कैसा होता है?",
        answers: shuffle([
            { text: "वास्तविक, उल्टा और छोटा", correct: false },
            { text: "आभासी, सीधा और वस्तु के आकार के बराबर", correct: true },
            { text: "वास्तविक, सीधा और बड़ा", correct: false },
            { text: "आभासी, उल्टा और वस्तु से छोटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समतल दर्पण हमेशा एक आभासी (जिसे पर्दे पर नहीं लिया जा सकता), सीधा और वस्तु के समान आकार का प्रतिबिंब बनाता है"
    },
    {
        question: "प्रश्न 5. वाहनों में पीछे का दृश्य देखने के लिए किस प्रकार के दर्पण का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "समतल दर्पण", correct: false },
            { text: "अवतल दर्पण", correct: false },
            { text: "उत्तल दर्पण", correct: true },
            { text: "परवलयिक दर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल दर्पण का उपयोग साइड/रियर-व्यू मिरर के रूप में किया जाता है क्योंकि यह हमेशा सीधा प्रतिबिंब बनाता है और एक व्यापक दृष्टि क्षेत्र प्रदान करता है"
    },
    {
        question: "प्रश्न 6. दाढ़ी बनाने या मेकअप करने के लिए किस दर्पण का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "उत्तल दर्पण", correct: false },
            { text: "समतल दर्पण", correct: false },
            { text: "अवतल दर्पण", correct: true },
            { text: "बेलनाकार दर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवतल दर्पण चेहरे का एक बड़ा और सीधा आभासी प्रतिबिंब बनाता है जब चेहरे को दर्पण के ध्रुव और फोकस के बीच रखा जाता है"
    },
    {
        question: "प्रश्न 7. किस दर्पण को 'अभिसारी दर्पण' भी कहा जाता है क्योंकि यह समानांतर किरणों को एक बिंदु पर केंद्रित करता है?",
        answers: shuffle([
            { text: "अवतल दर्पण", correct: true },
            { text: "उत्तल दर्पण", correct: false },
            { text: "समतल दर्पण", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवतल दर्पण अपनी परावर्तक सतह पर पड़ने वाली समानांतर प्रकाश किरणों को परावर्तन के बाद एक बिंदु (फोकस) पर अभिसरित या केंद्रित करता है"
    },
    {
        question: "प्रश्न 8. किस दर्पण को 'अपसारी दर्पण' कहा जाता है क्योंकि यह प्रकाश किरणों को फैलाता है?",
        answers: shuffle([
            { text: "अवतल दर्पण", correct: false },
            { text: "उत्तल दर्पण", correct: true },
            { text: "समतल दर्पण", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल दर्पण उस पर पड़ने वाली समानांतर प्रकाश किरणों को परावर्तन के बाद फैला देता है (अपसरित करता है), जिससे वे फोकस से आती हुई प्रतीत होती हैं"
    },
    {
        question: "प्रश्न 9. सौर भट्टियों (सोलर कुकर) में सूर्य के प्रकाश को केंद्रित करने के लिए किस दर्पण का उपयोग होता है?",
        answers: shuffle([
            { text: "उत्तल दर्पण", correct: false },
            { text: "समतल दर्पण", correct: false },
            { text: "अवतल दर्पण", correct: true },
            { text: "साधारण कांच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवतल दर्पण सूर्य से आने वाली समानांतर किरणों को अपने फोकस पर केंद्रित करता है, जिससे उच्च ताप उत्पन्न होता है और खाना पकाने में मदद मिलती है"
    },
    {
        question: "प्रश्न 10. यदि कोई वस्तु समतल दर्पण से 10 सेमी दूर रखी है, तो प्रतिबिंब दर्पण से कितनी दूर बनेगा?",
        answers: shuffle([
            { text: "5 सेमी", correct: false },
            { text: "10 सेमी", correct: true },
            { text: "20 सेमी", correct: false },
            { text: "15 सेमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समतल दर्पण में, प्रतिबिंब दर्पण के पीछे उतनी ही दूरी पर बनता है जितनी दूरी पर वस्तु दर्पण के सामने होती है"
    },
    {
        question: "प्रश्न 11. गोलीय दर्पण के परावर्तक पृष्ठ के केंद्र को क्या कहते हैं?",
        answers: shuffle([
            { text: "वक्रता केंद्र", correct: false },
            { text: "फोकस", correct: false },
            { text: "ध्रुव", correct: true },
            { text: "द्वारक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोलीय दर्पण के परावर्तक सतह के ज्यामितीय केंद्र को ध्रुव (Pole) कहा जाता है"
    },
    {
        question: "प्रश्न 12. गोलीय दर्पण जिस खोखले गोले का भाग होता है, उसके केंद्र को क्या कहते हैं?",
        answers: shuffle([
            { text: "ध्रुव", correct: false },
            { text: "वक्रता केंद्र", correct: true },
            { text: "मुख्य फोकस", correct: false },
            { text: "मुख्य अक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वक्रता केंद्र (Center of Curvature) उस गोले का केंद्र होता है जिसका गोलीय दर्पण एक हिस्सा है"
    },
    {
        question: "प्रश्न 13. गोलीय दर्पण की फोकस दूरी (f) और वक्रता त्रिज्या (R) के बीच क्या संबंध है?",
        answers: shuffle([
            { text: "f = 2R", correct: false },
            { text: "f = R", correct: false },
            { text: "R = 2f", correct: true },
            { text: "f = R/4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी गोलीय दर्पण के लिए, फोकस दूरी उसकी वक्रता त्रिज्या की आधी होती है, अर्थात् f=R/2 या R=2f"
    },
    {
        question: "प्रश्न 14. एम्बुलेंस में \"AMBULANCE\" शब्द उल्टा क्यों लिखा होता है?",
        answers: shuffle([
            { text: "यह एक डिज़ाइन है।", correct: false },
            { text: "ताकि आगे के वाहन अपने रियर-व्यू मिरर में इसे सीधा पढ़ सकें।", correct: true },
            { text: "यह लिखने में आसान होता है।", correct: false },
            { text: "यह एक अंतरराष्ट्रीय मानक है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दर्पण में पार्श्व व्युत्क्रमण (Lateral Inversion) होता है, जिससे वस्तु का बायां हिस्सा दाईं ओर और दायां हिस्सा बाईं ओर दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उल्टा लिखने से यह मिरर में सीधा दिखता है"
    },
    {
        question: "प्रश्न 15. यदि आपतन कोण शून्य डिग्री है, तो परावर्तन कोण कितना होगा?",
        answers: shuffle([
            { text: "90 डिग्री", correct: false },
            { text: "45 डिग्री", correct: false },
            { text: "0 डिग्री", correct: true },
            { text: "180 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि आपतन कोण शून्य है, तो इसका मतलब है कि प्रकाश किरण सतह पर लंबवत (अभिलंब के साथ) पड़ रही है।<br><br><i class='fa-solid fa-angles-right icon'></i> परावर्तन के नियम के अनुसार, परावर्तन कोण भी शून्य होगा और किरण उसी पथ पर वापस लौट जाएगी"
    },
    {
        question: "प्रश्न 16. दंत चिकित्सक रोगी के दांतों का बड़ा प्रतिबिंब देखने के लिए किस दर्पण का उपयोग करते हैं?",
        answers: shuffle([
            { text: "उत्तल दर्पण", correct: false },
            { text: "अवतल दर्पण", correct: true },
            { text: "समतल दर्पण", correct: false },
            { text: "द्विफोकसी दर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंत चिकित्सक दांत को अवतल दर्पण के फोकस और ध्रुव के बीच रखते हैं, जिससे दांत का एक बड़ा, सीधा और आभासी प्रतिबिंब दिखाई देता है"
    },
    {
        question: "प्रश्न 17. जब कोई वस्तु अवतल दर्पण के वक्रता केंद्र (C) पर रखी जाती है, तो उसका प्रतिबिंब कहाँ बनता है?",
        answers: shuffle([
            { text: "फोकस (F) पर", correct: false },
            { text: "वक्रता केंद्र (C) पर", correct: true },
            { text: "अनंत पर", correct: false },
            { text: "ध्रुव (P) और फोकस (F) के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वस्तु वक्रता केंद्र पर होती है, तो अवतल दर्पण द्वारा बना प्रतिबिंब भी वक्रता केंद्र पर ही बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वास्तविक, उल्टा और वस्तु के आकार के बराबर होता है"
    },
    {
        question: "प्रश्न 18. कौन सा दर्पण हमेशा वस्तु का छोटा, सीधा और आभासी प्रतिबिंब बनाता है?",
        answers: shuffle([
            { text: "अवतल दर्पण", correct: false },
            { text: "समतल दर्पण", correct: false },
            { text: "उत्तल दर्पण", correct: true },
            { text: "परवलयिक दर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल दर्पण, वस्तु की किसी भी स्थिति के लिए, हमेशा एक आभासी, सीधा और वस्तु से छोटा प्रतिबिंब बनाता है"
    },
    {
        question: "प्रश्न 19. टॉर्च, सर्चलाइट और वाहनों की हेडलाइट में बल्ब को कहाँ रखा जाता है?",
        answers: shuffle([
            { text: "दर्पण के ध्रुव पर", correct: false },
            { text: "दर्पण के वक्रता केंद्र पर", correct: false },
            { text: "दर्पण के फोकस के बहुत निकट", correct: true },
            { text: "वक्रता केंद्र से परे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल्ब को अवतल दर्पण के मुख्य फोकस पर या उसके बहुत करीब रखा जाता है ताकि परावर्तन के बाद प्रकाश की एक शक्तिशाली समानांतर किरण पुंज प्राप्त हो सके"
    },
    {
        question: "प्रश्न 20. एक वास्तविक प्रतिबिंब की क्या विशेषता होती है?",
        answers: shuffle([
            { text: "इसे पर्दे पर प्राप्त नहीं किया जा सकता।", correct: false },
            { text: "यह हमेशा सीधा होता है।", correct: false },
            { text: "इसे पर्दे पर प्राप्त किया जा सकता है।", correct: true },
            { text: "यह हमेशा आभासी होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वास्तविक प्रतिबिंब तब बनता है जब प्रकाश की किरणें परावर्तन के बाद वास्तव में एक बिंदु पर मिलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे स्क्रीन या पर्दे पर उतारा जा सकता है"
    },
    {
        question: "प्रश्न 21. खुरदरी सतहों से होने वाले परावर्तन को क्या कहते हैं?",
        answers: shuffle([
            { text: "नियमित परावर्तन", correct: false },
            { text: "विसरित परावर्तन", correct: true },
            { text: "specular परावर्तन", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रकाश किरणें किसी खुरदरी या अनियमित सतह पर पड़ती हैं, तो वे सभी दिशाओं में परावर्तित हो जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार के परावर्तन को विसरित परावर्तन कहते हैं"
    },
    {
        question: "प्रश्न 22. कमरे में सूर्य का प्रकाश खिड़की से आने पर भी पूरे कमरे में फैल जाता है, इसका कारण क्या है?",
        answers: shuffle([
            { text: "नियमित परावर्तन", correct: false },
            { text: "विसरित परावर्तन", correct: true },
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कमरे की दीवारों, फर्नीचर और अन्य वस्तुओं की सतहों से प्रकाश का विसरित परावर्तन होता है, जिससे प्रकाश पूरे कमरे में फैल जाता है"
    },
    {
        question: "प्रश्न 23. समतल दर्पण का आवर्धन (magnification) कितना होता है?",
        answers: shuffle([
            { text: "+1", correct: true },
            { text: "-1", correct: false },
            { text: "1 से अधिक", correct: false },
            { text: "1 से कम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्धन +1 का अर्थ है कि प्रतिबिंब सीधा (+) है और वस्तु के आकार के बराबर (1) है, जो समतल दर्पण की विशेषता है"
    },
    {
        question: "प्रश्न 24. यदि कोई व्यक्ति समतल दर्पण की ओर 5 मीटर/सेकंड की गति से दौड़ता है, तो उसका प्रतिबिंब उसकी ओर किस गति से आता हुआ प्रतीत होगा?",
        answers: shuffle([
            { text: "5 मीटर/सेकंड", correct: false },
            { text: "2.5 मीटर/सेकंड", correct: false },
            { text: "10 मीटर/सेकंड", correct: true },
            { text: "20 मीटर/सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यक्ति और प्रतिबिंब के बीच की सापेक्ष गति दोगुनी हो जाती है (5 m/s व्यक्ति की + 5 m/s प्रतिबिंब की), इसलिए प्रतिबिंब 10 m/s की गति से आता हुआ प्रतीत होता है"
    },
    {
        question: "प्रश्न 25. जब कोई वस्तु अवतल दर्पण के फोकस (F) पर रखी जाती है, तो प्रतिबिंब कहाँ बनता है?",
        answers: shuffle([
            { text: "वक्रता केंद्र (C) पर", correct: false },
            { text: "फोकस (F) पर", correct: false },
            { text: "अनंत पर", correct: true },
            { text: "ध्रुव (P) पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वस्तु मुख्य फोकस पर होती है, तो परावर्तित किरणें समानांतर हो जाती हैं और माना जाता है कि वे अनंत पर मिलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिबिंब अत्यधिक बड़ा और वास्तविक होता है"
    },
    {
        question: "प्रश्न 26. \"वस्तु का बायां भाग प्रतिबिंब में दायां और दायां भाग बायां दिखाई देता है।\" इस घटना को क्या कहते हैं?",
        answers: shuffle([
            { text: "व्युत्क्रमण", correct: false },
            { text: "पार्श्व व्युत्क्रमण", correct: true },
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह समतल दर्पण द्वारा प्रतिबिंब निर्माण की एक प्रमुख विशेषता है, जिसे पार्श्व व्युत्क्रमण (Lateral Inversion) कहा जाता है"
    },
    {
        question: "प्रश्न 27. पेरिस्कोप (पनडुब्बी में प्रयुक्त) बनाने में किस प्रकार के दर्पणों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "केवल अवतल दर्पण", correct: false },
            { text: "केवल उत्तल दर्पण", correct: false },
            { text: "समतल दर्पण", correct: true },
            { text: "अवतल और उत्तल दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरिस्कोप में, दो समतल दर्पण एक दूसरे के समानांतर 45 डिग्री के कोण पर लगाए जाते हैं ताकि प्रकाश को परावर्तित करके बाधा के पार देखा जा सके"
    },
    {
        question: "प्रश्न 28. एक गोलीय दर्पण की फोकस दूरी ऋणात्मक (-) है। यह दर्पण कैसा होगा?",
        answers: shuffle([
            { text: "अवतल दर्पण", correct: true },
            { text: "उत्तल दर्पण", correct: false },
            { text: "समतल दर्पण", correct: false },
            { text: "कोई भी हो सकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिह्न परिपाटी के अनुसार, अवतल दर्पण की फोकस दूरी ऋणात्मक होती है जबकि उत्तल दर्पण की फोकस दूरी धनात्मक होती है"
    },
    {
        question: "प्रश्न 29. दुकानों में सुरक्षा के उद्देश्य से बड़े क्षेत्र को देखने के लिए कौन सा दर्पण लगाया जाता है?",
        answers: shuffle([
            { text: "बड़ा समतल दर्पण", correct: false },
            { text: "बड़ा अवतल दर्पण", correct: false },
            { text: "उत्तल दर्पण", correct: true },
            { text: "बेलनाकार दर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल दर्पण का दृष्टि क्षेत्र बहुत व्यापक होता है, जिससे यह एक बड़े क्षेत्र की वस्तुओं का छोटा प्रतिबिंब दिखा सकता है, इसलिए इसका उपयोग सुरक्षा दर्पण के रूप में होता है"
    },
    {
        question: "प्रश्न 30. प्रकाश के परावर्तन की घटना में, प्रकाश की कौन सी विशेषता नहीं बदलती है?",
        answers: shuffle([
            { text: "तीव्रता", correct: false },
            { text: "आयाम", correct: false },
            { text: "आवृत्ति", correct: true },
            { text: "तरंगदैर्ध्य (यदि माध्यम न बदले)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परावर्तन के दौरान, प्रकाश की आवृत्ति (और इसलिए रंग) अपरिवर्तित रहती है क्योंकि यह प्रकाश स्रोत का गुण है।<br><br><i class='fa-solid fa-angles-right icon'></i> तीव्रता और आयाम आंशिक अवशोषण के कारण बदल सकते हैं"
    },
    {
        question: "प्रश्न 31. कैलिडोस्कोप (बहुरूपदर्शक) किस सिद्धांत पर आधारित है?",
        answers: shuffle([
            { text: "अपवर्तन", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन", correct: false },
            { text: "बहुल परावर्तन", correct: true },
            { text: "विवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैलिडोस्कोप में, तीन समतल दर्पण एक कोण पर रखे जाते हैं, जिससे उनके बीच रखी वस्तुओं के कई परावर्तन होते हैं और सुंदर पैटर्न बनते हैं"
    },
    {
        question: "प्रश्न 32. यदि एक अवतल दर्पण में बनने वाला प्रतिबिंब वास्तविक, उल्टा और वस्तु से बड़ा है, तो वस्तु कहाँ रखी है?",
        answers: shuffle([
            { text: "फोकस (F) और वक्रता केंद्र (C) के बीच", correct: true },
            { text: "वक्रता केंद्र (C) पर", correct: false },
            { text: "वक्रता केंद्र (C) से परे", correct: false },
            { text: "फोकस (F) पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वस्तु को C और F के बीच रखा जाता है, तो अवतल दर्पण C से परे एक वास्तविक, उल्टा और आवर्धित (बड़ा) प्रतिबिंब बनाता है"
    },
    {
        question: "प्रश्न 33. किस स्थिति में अवतल दर्पण एक आभासी, सीधा और बड़ा प्रतिबिंब बनाता है?",
        answers: shuffle([
            { text: "जब वस्तु अनंत पर हो", correct: false },
            { text: "जब वस्तु वक्रता केंद्र पर हो", correct: false },
            { text: "जब वस्तु ध्रुव (P) और फोकस (F) के बीच हो", correct: true },
            { text: "जब वस्तु फोकस पर हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अवतल दर्पण का एकमात्र विन्यास है जिसमें एक आभासी प्रतिबिंब बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी गुण का उपयोग शेविंग मिरर में होता है"
    },
    {
        question: "प्रश्न 34. प्रकाश की किरणें जिन पथों पर चलती हैं, उन्हें क्या कहते हैं?",
        answers: shuffle([
            { text: "पुंज", correct: false },
            { text: "किरण", correct: true },
            { text: "तरंग", correct: false },
            { text: "अक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश के गमन पथ की सीधी रेखा को प्रकाश की किरण (Ray of light) कहा जाता है"
    },
    {
        question: "प्रश्न 35. दर्पण का वह भाग जो प्रकाश को परावर्तित करने के लिए उपलब्ध होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "ध्रुव", correct: false },
            { text: "फोकस", correct: false },
            { text: "द्वारक (Aperture)", correct: true },
            { text: "अक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दर्पण के परावर्तक पृष्ठ के व्यास को उसका द्वारक कहा जाता है"
    },
    {
        question: "प्रश्न 36. अवतल दर्पण का मुख्य फोकस कहाँ स्थित होता है?",
        answers: shuffle([
            { text: "दर्पण के पीछे", correct: false },
            { text: "दर्पण के सामने", correct: true },
            { text: "दर्पण की सतह पर", correct: false },
            { text: "वक्रता केंद्र पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवतल दर्पण में, मुख्य अक्ष के समानांतर किरणें परावर्तन के बाद दर्पण के सामने एक वास्तविक बिंदु पर मिलती हैं, जिसे मुख्य फोकस कहते हैं"
    },
    {
        question: "प्रश्न 37. उत्तल दर्पण का मुख्य फोकस कहाँ होता है?",
        answers: shuffle([
            { text: "दर्पण के सामने", correct: false },
            { text: "दर्पण के पीछे", correct: true },
            { text: "ध्रुव पर", correct: false },
            { text: "अनंत पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल दर्पण में, मुख्य अक्ष के समानांतर किरणें परावर्तन के बाद फैल जाती हैं और दर्पण के पीछे एक बिंदु से आती हुई प्रतीत होती हैं, जिसे इसका (आभासी) मुख्य फोकस कहते हैं"
    },
    {
        question: "प्रश्न 38. यदि किसी वस्तु को उत्तल दर्पण के सामने कहीं भी रखा जाए, तो प्रतिबिंब की प्रकृति क्या होगी?",
        answers: shuffle([
            { text: "वास्तविक और उल्टा", correct: false },
            { text: "आभासी और सीधा", correct: true },
            { text: "वास्तविक और सीधा", correct: false },
            { text: "आभासी और उल्टा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल दर्पण सदैव आभासी, सीधा और वस्तु से छोटा प्रतिबिंब ही बनाता है, चाहे वस्तु कहीं भी रखी हो"
    },
    {
        question: "प्रश्न 39. एक आवर्धन जो ऋणात्मक (-) है, क्या इंगित करता है?",
        answers: shuffle([
            { text: "प्रतिबिंब आभासी है।", correct: false },
            { text: "प्रतिबिंब सीधा है।", correct: false },
            { text: "प्रतिबिंब वास्तविक और उल्टा है।", correct: true },
            { text: "प्रतिबिंब वस्तु से छोटा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिह्न परिपाटी में, ऋणात्मक आवर्धन का अर्थ है कि प्रतिबिंब मुख्य अक्ष के नीचे बना है, अर्थात् यह उल्टा है, और उल्टे प्रतिबिंब हमेशा वास्तविक होते हैं (दर्पणों के मामले में)"
    },
    {
        question: "प्रश्न 40. एक व्यक्ति को अपना पूरा प्रतिबिंब देखने के लिए आवश्यक समतल दर्पण की न्यूनतम ऊंचाई कितनी होनी चाहिए?",
        answers: shuffle([
            { text: "व्यक्ति की ऊंचाई के बराबर", correct: false },
            { text: "व्यक्ति की ऊंचाई की आधी", correct: true },
            { text: "व्यक्ति की ऊंचाई की दोगुनी", correct: false },
            { text: "व्यक्ति की ऊंचाई की एक चौथाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्यामिति के अनुसार, किसी व्यक्ति को अपना पूरा शरीर देखने के लिए कम से कम अपनी ऊंचाई के आधे के बराबर ऊंचाई वाले समतल दर्पण की आवश्यकता होती है"
    },
    {
        question: "प्रश्न 41. किस प्रकार का परावर्तन हमें वस्तुओं को देखने में सक्षम बनाता है जो स्वयं प्रकाश उत्सर्जित नहीं करती हैं?",
        answers: shuffle([
            { text: "नियमित परावर्तन", correct: false },
            { text: "विसरित परावर्तन", correct: true },
            { text: "अवशोषण", correct: false },
            { text: "ध्रुवीकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रकाश किसी वस्तु (जैसे कुर्सी या किताब) पर पड़ता है, तो उसकी सतह से विसरित परावर्तन होता है जो हमारी आँखों तक पहुँचता है, जिससे हम उस वस्तु को देख पाते हैं"
    },
    {
        question: "प्रश्न 42. यदि दो समतल दर्पण एक दूसरे के समानांतर रखे हों, तो उनके बीच रखी वस्तु के कितने प्रतिबिंब बनेंगे?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब दो दर्पण समानांतर होते हैं, तो एक दर्पण द्वारा बनाया गया प्रतिबिंब दूसरे दर्पण के लिए वस्तु का काम करता है, और यह प्रक्रिया बार-बार दोहराई जाती है, जिससे अनंत प्रतिबिंब बनते हैं"
    },
    {
        question: "प्रश्न 43. रिफ्लेक्टिंग टेलीस्कोप (परावर्तक दूरबीन) में किस प्रकार के दर्पण का उपयोग अभिदृश्यक के रूप में किया जाता है?",
        answers: shuffle([
            { text: "उत्तल दर्पण", correct: false },
            { text: "समतल दर्पण", correct: false },
            { text: "अवतल दर्पण", correct: true },
            { text: "समतल-उत्तल दर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परावर्तक दूरबीनों में दूर की वस्तुओं से आने वाले प्रकाश को इकट्ठा करने और केंद्रित करने के लिए एक बड़े अवतल दर्पण का उपयोग किया जाता है"
    },
    {
        question: "प्रश्न 44. चिकनी सतह जैसे शांत पानी या दर्पण से होने वाले परावर्तन को क्या कहते हैं?",
        answers: shuffle([
            { text: "विसरित परावर्तन", correct: false },
            { text: "अनियमित परावर्तन", correct: false },
            { text: "नियमित परावर्तन", correct: true },
            { text: "बहुल परावर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियमित परावर्तन (Specular Reflection) में, समानांतर आपतित किरणें परावर्तन के बाद भी एक विशेष दिशा में समानांतर रहती हैं, जिससे स्पष्ट प्रतिबिंब बनता है"
    },
    {
        question: "प्रश्न 45. एक आवर्धन जिसका मान +0.5 है, वह किस प्रकार के दर्पण से संभव है?",
        answers: shuffle([
            { text: "केवल अवतल दर्पण", correct: false },
            { text: "केवल उत्तल दर्पण", correct: true },
            { text: "समतल दर्पण", correct: false },
            { text: "अवतल और उत्तल दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> + का चिह्न दर्शाता है कि प्रतिबिंब सीधा और आभासी है, और 0.5 (1 से कम) का मान दर्शाता है कि यह छोटा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संयोजन केवल उत्तल दर्पण द्वारा ही संभव है"
    },
    {
        question: "प्रश्न 46. गोलीय दर्पण के ध्रुव और वक्रता केंद्र को मिलाने वाली सीधी रेखा क्या कहलाती है?",
        answers: shuffle([
            { text: "मुख्य अक्ष", correct: true },
            { text: "अभिलंब", correct: false },
            { text: "द्वारक", correct: false },
            { text: "फोकस दूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रेखा दर्पण के लिए समरूपता की अक्ष होती है और इसे मुख्य अक्ष (Principal Axis) कहते हैं"
    },
    {
        question: "प्रश्न 47. स्ट्रीट लाइट में परावर्तक के रूप में किस दर्पण का उपयोग किया जाता है ताकि प्रकाश एक बड़े क्षेत्र में फैल सके?",
        answers: shuffle([
            { text: "अवतल दर्पण", correct: false },
            { text: "समतल दर्पण", correct: false },
            { text: "उत्तल दर्पण", correct: true },
            { text: "परवलयिक दर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल दर्पण प्रकाश को एक विस्तृत क्षेत्र में फैलाता है (अपसरित करता है), जो सड़कों और गलियों को रोशन करने के लिए आदर्श है"
    },
    {
        question: "प्रश्न 48. यदि कोई वस्तु अनंत पर है, तो अवतल दर्पण उसका प्रतिबिंब कहाँ बनाएगा?",
        answers: shuffle([
            { text: "वक्रता केंद्र पर", correct: false },
            { text: "ध्रुव पर", correct: false },
            { text: "मुख्य फोकस पर", correct: true },
            { text: "अनंत पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनंत से आने वाली किरणें समानांतर मानी जाती हैं, और अवतल दर्पण उन्हें परावर्तन के बाद अपने मुख्य फोकस पर केंद्रित करता है"
    },
    {
        question: "प्रश्न 49. आभासी प्रतिबिंब के संबंध में क्या सत्य है?",
        answers: shuffle([
            { text: "यह हमेशा उल्टा होता है।", correct: false },
            { text: "यह हमेशा वस्तु से बड़ा होता है।", correct: false },
            { text: "इसे पर्दे पर प्राप्त नहीं किया जा सकता।", correct: true },
            { text: "यह हमेशा वास्तविक किरणों के कटान से बनता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आभासी प्रतिबिंब तब बनता है जब परावर्तित किरणें वास्तव में नहीं मिलतीं, बल्कि मिलती हुई प्रतीत होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे पर्दे पर नहीं उतारा जा सकता"
    },
    {
        question: "प्रश्न 50. जब प्रकाश की किरण समतल दर्पण पर 30° के कोण पर आपतित होती है, तो आपतन कोण और परावर्तन कोण का योग कितना होगा?",
        answers: shuffle([
            { text: "30°", correct: false },
            { text: "60°", correct: true },
            { text: "90°", correct: false },
            { text: "120°", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपतन कोण 30° है, तो परावर्तन कोण भी 30° होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों का योग 30° + 30° = 60° होगा"
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