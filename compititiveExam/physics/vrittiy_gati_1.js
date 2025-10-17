const questions = [
    {
        topHeading: "वृत्तीय गति पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जब कोई वस्तु एक वृत्ताकार पथ पर गति करती है, तो उसकी गति को क्या कहा जाता है?",
        answers: shuffle([
            { text: "सरल रेखीय गति", correct: false },
            { text: "दोलनी गति", correct: false },
            { text: "वृत्तीय गति", correct: true },
            { text: "घूर्णी गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक निश्चित बिंदु के चारों ओर एक वृत्ताकार पथ पर किसी वस्तु की गति को वृत्तीय गति कहते हैं।"
    },
    {
        question: "प्रश्न 2. एकसमान वृत्तीय गति में, निम्नलिखित में से कौन सी राशि स्थिर रहती है?",
        answers: shuffle([
            { text: "वेग", correct: false },
            { text: "त्वरण", correct: false },
            { text: "चाल", correct: true },
            { text: "बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वृत्तीय गति में, वस्तु के वेग का परिमाण (अर्थात चाल) तो स्थिर रहता है, लेकिन दिशा लगातार बदलने के कारण वेग परिवर्तित होता रहता है।"
    },
    {
        question: "प्रश्न 3. वृत्तीय गति में, वस्तु के वेग की दिशा क्या होती है?",
        answers: shuffle([
            { text: "वृत्त के केंद्र की ओर।", correct: false },
            { text: "वृत्त के केंद्र से बाहर की ओर।", correct: false },
            { text: "वृत्त की स्पर्शरेखा के अनुदिश।", correct: true },
            { text: "गति के लंबवत।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी क्षण पर, वृत्तीय गति कर रही वस्तु के रैखिक वेग की दिशा उस बिंदु पर खींची गई स्पर्शरेखा की दिशा में होती है।"
    },
    {
        question: "प्रश्न 4. वृत्तीय गति कर रही वस्तु को पथ पर बनाए रखने के लिए आवश्यक बल को क्या कहते हैं?",
        answers: shuffle([
            { text: "अपकेंद्री बल", correct: false },
            { text: "अभिकेंद्रीय बल", correct: true },
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "घर्षण बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिकेंद्रीय बल वह बल है जो वस्तु को वृत्ताकार पथ पर गति करने के लिए मजबूर करता है और हमेशा केंद्र की ओर निर्देशित होता है।"
    },
    {
        question: "प्रश्न 5. अभिकेंद्रीय बल की दिशा क्या होती है?",
        answers: shuffle([
            { text: "गति की दिशा में", correct: false },
            { text: "वृत्त के केंद्र से दूर", correct: false },
            { text: "वृत्त के केंद्र की ओर", correct: true },
            { text: "गति की दिशा के विपरीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिकेंद्रीय बल की दिशा हमेशा वृत्ताकार पथ के केंद्र की ओर होती है।"
    },
    {
        question: "प्रश्न 6. एकसमान वृत्तीय गति में, त्वरण की दिशा क्या होती है?",
        answers: shuffle([
            { text: "स्पर्शरेखीय", correct: false },
            { text: "केंद्र से बाहर की ओर", correct: false },
            { text: "केंद्र की ओर", correct: true },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वृत्तीय गति में केवल अभिकेंद्रीय त्वरण होता है, जो वेग की दिशा में परिवर्तन के कारण होता है और हमेशा केंद्र की ओर निर्देशित होता है।"
    },
    {
        question: "प्रश्न 7. अपकेंद्री बल (Centrifugal Force) एक ________ है।",
        answers: shuffle([
            { text: "वास्तविक बल", correct: false },
            { text: "छद्म या आभासी बल", correct: true },
            { text: "प्रतिक्रिया बल", correct: false },
            { text: "संपर्क बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपकेंद्री बल एक जड़त्वीय बल है जो केवल घूर्णन करते हुए (अजड़त्वीय) निर्देश तंत्र में अनुभव होता है, यह कोई वास्तविक बल नहीं है।"
    },
    {
        question: "प्रश्न 8. दूध से मक्खन निकालने वाली मशीन (क्रीम सेपरेटर) किस सिद्धांत पर कार्य करती है?",
        answers: shuffle([
            { text: "अभिकेंद्रीय बल", correct: false },
            { text: "अपकेंद्री बल", correct: true },
            { text: "श्यानता", correct: false },
            { text: "पृष्ठ तनाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तेजी से घूमने पर, भारी कण (दूध) केंद्र में रह जाते हैं और हल्के कण (मक्खन/क्रीम) अपकेंद्री बल के कारण बाहर की ओर चले जाते हैं।"
    },
    {
        question: "प्रश्न 9. कोणीय वेग (Angular Velocity) का एस.आई. (SI) मात्रक क्या है?",
        answers: shuffle([
            { text: "मीटर/सेकंड", correct: false },
            { text: "रेडियन/सेकंड", correct: true },
            { text: "मीटर/सेकंड²", correct: false },
            { text: "रेडियन/सेकंड²", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय वेग को प्रति इकाई समय में तय किए गए कोणीय विस्थापन के रूप में मापा जाता है, जिसका मात्रक रेडियन प्रति सेकंड है।"
    },
    {
        question: "प्रश्न 10. रैखिक वेग (v) और कोणीय वेग (ω) में क्या संबंध है?",
        answers: shuffle([
            { text: "v = ω/r", correct: false },
            { text: "ω = v/r", correct: true },
            { text: "r = vω", correct: false },
            { text: "v = r/ω", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रैखिक वेग, वृत्ताकार पथ की त्रिज्या (r) और कोणीय वेग (ω) के गुणनफल के बराबर होता है।"
    },
    {
        question: "प्रश्न 11. एक साइकिल सवार जब मोड़ पर मुड़ता है, तो वह:",
        answers: shuffle([
            { text: "बाहर की ओर झुकता है।", correct: false },
            { text: "अंदर की ओर झुकता है।", correct: true },
            { text: "सीधा रहता है।", correct: false },
            { text: "अपनी गति धीमी कर लेता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वह आवश्यक अभिकेंद्रीय बल प्राप्त करने के लिए अंदर की ओर झुकता है, ताकि उसका संतुलन बना रहे और वह फिसले नहीं।"
    },
    {
        question: "प्रश्न 12. सड़कों के मोड़ पर बाहरी किनारे को आंतरिक किनारे से ऊँचा क्यों बनाया जाता है (बैंकिंग)?",
        answers: shuffle([
            { text: "पानी की निकासी के लिए।", correct: false },
            { text: "आवश्यक अभिकेंद्रीय बल प्रदान करने के लिए।", correct: true },
            { text: "वाहनों की गति बढ़ाने के लिए।", correct: false },
            { text: "सड़क को सुंदर बनाने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सड़क की बैंकिंग से अभिलंब प्रतिक्रिया बल का एक क्षैतिज घटक प्राप्त होता है जो घर्षण के साथ मिलकर वाहन को मोड़ने के लिए आवश्यक अभिकेंद्रीय बल प्रदान करता है।"
    },
    {
        question: "प्रश्न 13. यदि कोई वस्तु असमान वृत्तीय गति कर रही है, तो:",
        answers: shuffle([
            { text: "केवल उसकी चाल बदलती है।", correct: false },
            { text: "केवल उसकी दिशा बदलती है।", correct: false },
            { text: "उसकी चाल और दिशा दोनों बदलते हैं।", correct: true },
            { text: "उसका त्वरण शून्य होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असमान वृत्तीय गति में वस्तु के वेग का परिमाण (चाल) और दिशा दोनों समय के साथ परिवर्तित होते हैं।"
    },
    {
        question: "प्रश्न 14. असमान वृत्तीय गति में, वस्तु पर कौन-कौन से त्वरण कार्य करते हैं?",
        answers: shuffle([
            { text: "केवल अभिकेंद्रीय त्वरण", correct: false },
            { text: "केवल स्पर्शीय त्वरण", correct: false },
            { text: "अभिकेंद्रीय और स्पर्शीय दोनों त्वरण", correct: true },
            { text: "कोई त्वरण नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिशा में परिवर्तन के कारण अभिकेंद्रीय त्वरण और चाल में परिवर्तन के कारण स्पर्शीय त्वरण, दोनों मौजूद होते हैं।"
    },
    {
        question: "प्रश्न 15. यदि एक पत्थर को रस्सी से बांधकर घुमाया जाए और रस्सी टूट जाए, तो पत्थर की गति क्या होगी?",
        answers: shuffle([
            { text: "वह केंद्र की ओर गिरेगा।", correct: false },
            { text: "वह वृत्ताकार पथ पर घूमता रहेगा।", correct: false },
            { text: "वह उस बिंदु पर स्पर्शरेखा की दिशा में सीधा चला जाएगा।", correct: true },
            { text: "वह तुरंत रुक जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रस्सी टूटने पर अभिकेंद्रीय बल समाप्त हो जाता है, और जड़त्व के कारण पत्थर अपने वेग की दिशा (जो स्पर्शरेखीय होती है) में गति करता है।"
    },
    {
        question: "प्रश्न 16. ग्रहों की सूर्य के चारों ओर गति किसका उदाहरण है?",
        answers: shuffle([
            { text: "अभिकेंद्रीय बल का", correct: true },
            { text: "सरलरेखीय गति का", correct: false },
            { text: "दोलनी गति का", correct: false },
            { text: "घूर्णी गति का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य और ग्रहों के बीच का गुरुत्वाकर्षण बल ग्रहों को उनकी कक्षाओं में बनाए रखने के लिए आवश्यक अभिकेंद्रीय बल प्रदान करता है।"
    },
    {
        question: "प्रश्न 17. वाशिंग मशीन का ड्रायर किस सिद्धांत पर काम करता है?",
        answers: shuffle([
            { text: "अभिकेंद्रीय बल", correct: false },
            { text: "अपकेंद्री बल", correct: true },
            { text: "पृष्ठ तनाव", correct: false },
            { text: "श्यानता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तेजी से घूमने पर, अपकेंद्री बल के कारण पानी के कण कपड़ों से अलग होकर ड्रायर के छिद्रों से बाहर निकल जाते हैं।"
    },
    {
        question: "प्रश्न 18. मौत का कुआँ (well of death) में मोटरसाइकिल सवार क्यों नहीं गिरता?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बल के कारण।", correct: false },
            { text: "दीवार द्वारा लगाए गए अभिलंब बल और घर्षण के कारण।", correct: true },
            { text: "अपकेंद्री बल के कारण।", correct: false },
            { text: "उसके भारहीन होने के कारण।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिकेंद्रीय बल के लिए दीवार एक अभिलंब बल प्रदान करती है, और यह अभिलंब बल इतना स्थैतिक घर्षण उत्पन्न करता है जो सवार के भार को संतुलित कर उसे गिरने से रोकता है।"
    },
    {
        question: "प्रश्न 19. कोणीय विस्थापन का मात्रक क्या है?",
        answers: shuffle([
            { text: "मीटर", correct: false },
            { text: "सेकंड", correct: false },
            { text: "रेडियन", correct: true },
            { text: "हर्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय विस्थापन को कोण के रूप में मापा जाता है, जिसका एस.आई. मात्रक रेडियन है।"
    },
    {
        question: "प्रश्न 20. यदि वृत्तीय गति में वस्तु की चाल दोगुनी कर दी जाए और त्रिज्या वही रहे, तो अभिकेंद्रीय बल:",
        answers: shuffle([
            { text: "आधा हो जाएगा।", correct: false },
            { text: "दोगुना हो जाएगा।", correct: false },
            { text: "चार गुना हो जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिकेंद्रीय बल (F = mv²/r) चाल (v) के वर्ग के समानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चाल को दोगुना (2v) करने पर, बल (2v)² = 4v² के समानुपाती होगा, यानी चार गुना हो जाएगा।"
    },
    {
        question: "प्रश्न 21. एकसमान वृत्तीय गति एक ________ गति है।",
        answers: shuffle([
            { text: "अत्वरित", correct: false },
            { text: "त्वरित", correct: true },
            { text: "स्थिर", correct: false },
            { text: "सरल रेखीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि चाल स्थिर रहती है, वेग की दिशा में निरंतर परिवर्तन के कारण यह एक त्वरित गति है।"
    },
    {
        question: "प्रश्न 22. ऊर्ध्वाधर वृत्त में गति के दौरान, उच्चतम बिंदु पर डोरी में तनाव न्यूनतम होने के लिए न्यूनतम चाल कितनी होनी चाहिए?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false },
            { text: "एक निश्चित न्यूनतम मान से अधिक", correct: true },
            { text: "यह त्रिज्या पर निर्भर नहीं करती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम बिंदु पर वृत्त को पूरा करने के लिए एक न्यूनतम वेग की आवश्यकता होती है ताकि डोरी में तनाव बना रहे और वह ढीली न हो।"
    },
    {
        question: "प्रश्न 23. कोणीय त्वरण की इकाई क्या है?",
        answers: shuffle([
            { text: "रेडियन/सेकंड", correct: false },
            { text: "रेडियन-सेकंड", correct: false },
            { text: "रेडियन/सेकंड²", correct: true },
            { text: "रेडियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय त्वरण को कोणीय वेग में परिवर्तन की दर के रूप में परिभाषित किया जाता है।"
    },
    {
        question: "प्रश्न 24. एक घड़ी की सेकंड की सुई की नोक की गति:",
        answers: shuffle([
            { text: "एकसमान वेग है।", correct: false },
            { text: "एकसमान वृत्तीय गति है।", correct: true },
            { text: "अत्वरित गति है।", correct: false },
            { text: "सरल रेखीय गति है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेकंड की सुई की नोक स्थिर चाल से एक वृत्ताकार पथ पर चलती है, जो एकसमान वृत्तीय गति का एक उदाहरण है।"
    },
    {
        question: "प्रश्न 25. स्पर्शीय त्वरण (Tangential Acceleration) किसके लिए जिम्मेदार है?",
        answers: shuffle([
            { text: "वेग की दिशा में परिवर्तन के लिए।", correct: false },
            { text: "वेग के परिमाण (चाल) में परिवर्तन के लिए।", correct: true },
            { text: "कोणीय वेग को स्थिर रखने के लिए।", correct: false },
            { text: "पथ को वृत्ताकार बनाए रखने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पर्शीय त्वरण तभी मौजूद होता है जब वस्तु की चाल बढ़ रही हो या घट रही हो।"
    },
    {
        question: "प्रश्न 26. एक वस्तु एक वृत्ताकार पथ पर एक चक्कर पूरा करती है। उसका कोणीय विस्थापन कितना है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "π रेडियन", correct: false },
            { text: "2π रेडियन", correct: true },
            { text: "π/2 रेडियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण चक्कर 360 डिग्री के बराबर होता है, जो 2π रेडियन के तुल्य है।"
    },
    {
        question: "प्रश्न 27. एक वस्तु एक वृत्ताकार पथ पर एक चक्कर पूरा करती है। उसका रैखिक विस्थापन कितना है?",
        answers: shuffle([
            { text: "शून्य", correct: true },
            { text: "वृत्त की त्रिज्या", correct: false },
            { text: "वृत्त का व्यास", correct: false },
            { text: "वृत्त की परिधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि वस्तु अपनी प्रारंभिक स्थिति पर वापस आ जाती है, उसका कुल रैखिक विस्थापन शून्य होता है।"
    },
    {
        question: "प्रश्न 28. वृत्तीय गति में किया गया कार्य (अभिकेंद्रीय बल द्वारा) कितना होता है?",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "चाल पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिकेंद्रीय बल हमेशा विस्थापन की दिशा के लंबवत (90 डिग्री पर) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि कार्य = बल × विस्थापन × cos(θ) और cos(90°) = 0 होता है, इसलिए किया गया कार्य शून्य होता है।"
    },
    {
        question: "प्रश्न 29. कोणीय वेग एक ________ राशि है।",
        answers: shuffle([
            { text: "अदिश", correct: false },
            { text: "अक्षीय सदिश", correct: true },
            { text: "ध्रुवीय सदिश", correct: false },
            { text: "प्रदेश (टेंसर)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय वेग की एक दिशा होती है जो घूर्णन के अक्ष के अनुदिश होती है (दाहिने हाथ के नियम द्वारा निर्धारित), इसलिए यह एक अक्षीय सदिश है।"
    },
    {
        question: "प्रश्न 30. यदि कोई पंखा स्थिर कोणीय वेग से घूम रहा है, तो उसका कोणीय त्वरण क्या होगा?",
        answers: shuffle([
            { text: "शून्य", correct: true },
            { text: "स्थिर", correct: false },
            { text: "परिवर्ती", correct: false },
            { text: "अधिकतम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थिर कोणीय वेग का अर्थ है कि कोणीय वेग में कोई परिवर्तन नहीं हो रहा है, इसलिए कोणीय त्वरण शून्य होगा।"
    },
    {
        question: "प्रश्न 31. मोड़ पर फिसलने से बचने के लिए, आवश्यक अभिकेंद्रीय बल ________ से कम या बराबर होना चाहिए।",
        answers: shuffle([
            { text: "वाहन के भार के", correct: false },
            { text: "इंजन द्वारा उत्पन्न बल के", correct: false },
            { text: "सड़क और टायरों के बीच अधिकतम घर्षण बल के", correct: true },
            { text: "हवा के प्रतिरोध के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल ही वह बल है जो सामान्यतः मोड़ पर आवश्यक अभिकेंद्रीय बल प्रदान करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि आवश्यक बल उपलब्ध घर्षण से अधिक हो जाए, तो वाहन फिसल जाएगा।"
    },
    {
        question: "प्रश्न 32. ऊर्ध्वाधर वृत्त में गति के दौरान, किस बिंदु पर वस्तु की चाल अधिकतम होती है?",
        answers: shuffle([
            { text: "उच्चतम बिंदु पर", correct: false },
            { text: "निम्नतम बिंदु पर", correct: true },
            { text: "क्षैतिज स्थिति में", correct: false },
            { text: "हर जगह समान रहती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा संरक्षण के कारण, निम्नतम बिंदु पर स्थितिज ऊर्जा न्यूनतम होती है, इसलिए गतिज ऊर्जा (और इस प्रकार चाल) अधिकतम होती है।"
    },
    {
        question: "प्रश्न 33. एक समतल सड़क पर एक कार बिना फिसले सुरक्षित रूप से मुड़ सकती है यदि उसकी गति:",
        answers: shuffle([
            { text: "बहुत अधिक हो।", correct: false },
            { text: "एक निश्चित अधिकतम सुरक्षित गति से कम हो।", correct: true },
            { text: "शून्य हो।", correct: false },
            { text: "गति पर कोई प्रतिबंध नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुरक्षित गति मोड़ की त्रिज्या और घर्षण गुणांक पर निर्भर करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे अधिक गति पर, घर्षण पर्याप्त अभिकेंद्रीय बल प्रदान नहीं कर पाता है।"
    },
    {
        question: "प्रश्न 34. अपकेंद्री बल की दिशा होती है:",
        answers: shuffle([
            { text: "केंद्र की ओर", correct: false },
            { text: "केंद्र से बाहर की ओर", correct: true },
            { text: "स्पर्शरेखीय", correct: false },
            { text: "कोई निश्चित दिशा नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह आभासी बल घूर्णन अक्ष से बाहर की ओर महसूस होता है।"
    },
    {
        question: "प्रश्न 35. वृत्तीय गति में कोणीय और रैखिक राशियों के बीच संबंध स्थापित करने वाली राशि कौन सी है?",
        answers: shuffle([
            { text: "द्रव्यमान", correct: false },
            { text: "समय", correct: false },
            { text: "त्रिज्या", correct: true },
            { text: "बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समीकरण जैसे v = rω और a = rα दिखाते हैं कि त्रिज्या (r) रैखिक और कोणीय राशियों को जोड़ती है।"
    },
    {
        question: "प्रश्न 36. जब एक कार वृत्ताकार पथ पर गति करती है, तो कार में बैठे यात्री बाहर की ओर एक बल महसूस करते हैं। यह बल है:",
        answers: shuffle([
            { text: "अभिकेंद्रीय बल", correct: false },
            { text: "जड़त्व के कारण आभासी अपकेंद्री बल", correct: true },
            { text: "घर्षण बल", correct: false },
            { text: "गुरुत्वाकर्षण बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यात्री का शरीर जड़त्व के कारण सीधी रेखा में जाने की कोशिश करता है, जबकि कार मुड़ जाती है, जिससे उसे बाहर की ओर एक धक्का महसूस होता है, जिसे अपकेंद्री बल कहते हैं।"
    },
    {
        question: "प्रश्न 37. एकसमान वृत्तीय गति में, वस्तु का ________ परिवर्तित होता रहता है।",
        answers: shuffle([
            { text: "संवेग", correct: true },
            { text: "गतिज ऊर्जा", correct: false },
            { text: "चाल", correct: false },
            { text: "द्रव्यमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग (द्रव्यमान × वेग) एक सदिश राशि है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि वेग की दिशा बदलती है, संवेग भी बदलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा (½mv²) चाल पर निर्भर करती है, जो स्थिर रहती है।"
    },
    {
        question: "प्रश्न 38. यदि कोई वस्तु एक वृत्ताकार पथ पर बढ़ती हुई चाल से गति कर रही है, तो उस पर लगने वाला शुद्ध बल:",
        answers: shuffle([
            { text: "केंद्र की ओर होगा।", correct: false },
            { text: "स्पर्शरेखा की दिशा में होगा।", correct: false },
            { text: "केंद्र और स्पर्शरेखा की दिशा के बीच में होगा।", correct: true },
            { text: "केंद्र से दूर होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुद्ध बल अभिकेंद्रीय बल (केंद्र की ओर) और स्पर्शीय बल (स्पर्शरेखा की ओर) का सदिश योग होगा।"
    },
    {
        question: "प्रश्न 39. 'आवृत्ति' और 'कोणीय वेग' में क्या संबंध है?",
        answers: shuffle([
            { text: "ω = 2πf", correct: true },
            { text: "f = 2πω", correct: false },
            { text: "ω = f/2π", correct: false },
            { text: "ω = f", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवृत्ति (f) प्रति सेकंड चक्रों की संख्या है, और प्रत्येक चक्र 2π रेडियन का होता है, इसलिए कोणीय वेग (ω) 2πf के बराबर होता है।"
    },
    {
        question: "प्रश्न 40. आवर्त काल (T) और कोणीय वेग (ω) में क्या संबंध है?",
        answers: shuffle([
            { text: "T = 2πω", correct: false },
            { text: "ω = 2π/T", correct: true },
            { text: "T = ω/2π", correct: false },
            { text: "T = ω", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल (T) एक चक्कर में लगा समय है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि एक चक्कर में 2π रेडियन होते हैं, कोणीय वेग 2π/T के बराबर होता है।"
    },
    {
        question: "प्रश्न 41. कोणीय त्वरण ________ में परिवर्तन की दर है।",
        answers: shuffle([
            { text: "कोणीय विस्थापन", correct: false },
            { text: "कोणीय वेग", correct: true },
            { text: "रैखिक वेग", correct: false },
            { text: "रैखिक त्वरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कोणीय त्वरण की परिभाषा है (α = dω/dt)।"
    },
    {
        question: "प्रश्न 42. एक कार जो एक वृत्ताकार ओवरब्रिज पर चढ़ रही है, उस पर अभिलंब प्रतिक्रिया बल उसके भार की तुलना में:",
        answers: shuffle([
            { text: "अधिक होगा।", correct: false },
            { text: "कम होगा।", correct: true },
            { text: "बराबर होगा।", correct: false },
            { text: "शून्य होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, भार का एक हिस्सा आवश्यक अभिकेंद्रीय बल (जो नीचे की ओर निर्देशित है) प्रदान करता है, इसलिए सतह द्वारा लगाया गया अभिलंब बल भार से कम होता है।"
    },
    {
        question: "प्रश्न 43. एक कार जो एक वृत्ताकार घाटी (dip) से गुजर रही है, उस पर अभिलंब प्रतिक्रिया बल उसके भार की तुलना में:",
        answers: shuffle([
            { text: "अधिक होगा।", correct: true },
            { text: "कम होगा।", correct: false },
            { text: "बराबर होगा।", correct: false },
            { text: "शून्य होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, अभिलंब बल को न केवल भार को संतुलित करना पड़ता है, बल्कि ऊपर की ओर आवश्यक अभिकेंद्रीय बल भी प्रदान करना पड़ता है, इसलिए यह भार से अधिक होता है।"
    },
    {
        question: "प्रश्न 44. कोणीय संवेग संरक्षण का नियम कब लागू होता है?",
        answers: shuffle([
            { text: "जब निकाय पर शुद्ध बाहरी बल शून्य हो।", correct: false },
            { text: "जब निकाय पर शुद्ध बाहरी बल आघूर्ण शून्य हो।", correct: true },
            { text: "जब निकाय का कोणीय वेग स्थिर हो।", correct: false },
            { text: "जब निकाय का जड़त्वाघूर्ण स्थिर हो।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कोणीय संवेग संरक्षण के सिद्धांत की मौलिक शर्त है।"
    },
    {
        question: "प्रश्न 45. एक घूमते हुए मंच पर खड़ा एक व्यक्ति अपनी बाहें फैला लेता है। निकाय का कोणीय वेग:",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "शून्य हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाहें फैलाने से जड़त्वाघूर्ण बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोणीय संवेग (L=Iω) को संरक्षित रखने के लिए, कोणीय वेग (ω) को घटना पड़ता है।"
    },
    {
        question: "प्रश्न 46. वृत्तीय गति संभव है क्योंकि:",
        answers: shuffle([
            { text: "वस्तु का वेग लगातार बदलता है।", correct: false },
            { text: "वस्तु पर एक निरंतर बल कार्य करता है।", correct: true },
            { text: "वस्तु की चाल स्थिर रहती है।", correct: false },
            { text: "वस्तु का त्वरण शून्य होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृत्तीय गति के लिए एक निरंतर अभिकेंद्रीय बल की आवश्यकता होती है जो वस्तु के पथ को मोड़ता रहे।"
    },
    {
        question: "प्रश्न 47. क्या एक वस्तु बिना बल के वृत्तीय गति कर सकती है?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिना अभिकेंद्रीय बल के, वस्तु जड़त्व के कारण सीधी रेखा में चली जाएगी।"
    },
    {
        question: "प्रश्न 48. एक पत्थर को ऊर्ध्वाधर वृत्त में घुमाया जाता है। उच्चतम बिंदु पर डोरी में तनाव ________ होता है।",
        answers: shuffle([
            { text: "अधिकतम", correct: false },
            { text: "न्यूनतम", correct: true },
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम बिंदु पर, भार और तनाव दोनों केंद्र की ओर होते हैं, जबकि निम्नतम बिंदु पर, तनाव को भार का भी विरोध करना पड़ता है, इसलिए तनाव निम्नतम बिंदु पर अधिकतम होता है।"
    },
    {
        question: "प्रश्न 49. 'अपकेंद्रित्र' (Centrifuge) का उपयोग किस लिए किया जाता है?",
        answers: shuffle([
            { text: "वस्तुओं को गर्म करने के लिए।", correct: false },
            { text: "विभिन्न घनत्वों के कणों को अलग करने के लिए।", correct: true },
            { text: "वस्तुओं को ठंडा करने के लिए।", correct: false },
            { text: "वस्तुओं का वजन करने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपकेंद्रित्र अपकेंद्री बल का उपयोग करके भारी कणों को तेजी से नीचे बैठाता है, जैसे रक्त के घटकों को अलग करना।"
    },
    {
        question: "प्रश्न 50. यदि कोई वस्तु स्थिर चाल से चल रही है, तो क्या उसमें त्वरण हो सकता है?",
        answers: shuffle([
            { text: "नहीं, कभी नहीं।", correct: false },
            { text: "हाँ, यदि वह एक सीधी रेखा में चले।", correct: false },
            { text: "हाँ, यदि वह अपनी दिशा बदल रही हो।", correct: true },
            { text: "हाँ, यदि उसका द्रव्यमान बदल रहा हो।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाँ, यह एकसमान वृत्तीय गति में होता है, जहाँ स्थिर चाल के बावजूद दिशा में परिवर्तन के कारण त्वरण (अभिकेंद्रीय त्वरण) होता है।"
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