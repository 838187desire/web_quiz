const questions = [
    {
        topHeading: "द्वंद्व समास पर आधारित 59 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'माता-पिता' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "द्वंद्व समास", correct: true },
            { text: "अव्ययीभाव समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'माता' और 'पिता' दोनों पद प्रधान हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'माता और पिता' होता है।"
    },
    {
        question: "प्रश्न 2. 'दाल-रोटी' में कौन सा द्वंद्व समास है?",
        answers: shuffle([
            { text: "इतरेतर द्वंद्व", correct: false },
            { text: "समाहार द्वंद्व", correct: true },
            { text: "वैकल्पिक द्वंद्व", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दाल-रोटी' का अर्थ केवल दाल और रोटी ही नहीं, बल्कि भोजन के अन्य पदार्थों का भी समूह है, इसलिए यह समाहार द्वंद्व है।"
    },
    {
        question: "प्रश्न 3. जिस समास के दोनों पद प्रधान होते हैं, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "तत्पुरुष समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "द्वंद्व समास", correct: true },
            { text: "द्विगु समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वंद्व समास में पूर्वपद और उत्तरपद दोनों की प्रधानता होती है।"
    },
    {
        question: "प्रश्न 4. 'पाप-पुण्य' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "पाप और पुण्य", correct: false },
            { text: "पाप या पुण्य", correct: true },
            { text: "पाप का पुण्य", correct: false },
            { text: "पाप में पुण्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वैकल्पिक द्वंद्व का उदाहरण है, जहाँ दो विलोम शब्दों के बीच 'या' का प्रयोग होता है।"
    },
    {
        question: "प्रश्न 5. 'भाई-बहन' पद में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: true },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "द्विगु समास", correct: false },
            { text: "कर्मधारय समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'भाई और बहन' है, दोनों पद प्रधान हैं।"
    },
    {
        question: "प्रश्न 6. 'देश-विदेश' शब्द का समास विग्रह है-",
        answers: shuffle([
            { text: "देश में विदेश", correct: false },
            { text: "देश और विदेश", correct: true },
            { text: "देश का विदेश", correct: false },
            { text: "देश-विदेश जैसा कुछ नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ दोनों पद समान महत्व के हैं और 'और' योजक से जुड़े हैं।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से कौन सा शब्द द्वंद्व समास का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "आजकल", correct: false },
            { text: "रात-दिन", correct: false },
            { text: "घर-घर", correct: true },
            { text: "अन्न-जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घर-घर' में एक ही शब्द की पुनरावृत्ति हो रही है, यह अव्ययीभाव समास का उदाहरण है।"
    },
    {
        question: "प्रश्न 8. 'भला-बुरा' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "द्वंद्व समास", correct: true },
            { text: "बहुव्रीहि समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'भला या बुरा' होता है, यह वैकल्पिक द्वंद्व है।"
    },
    {
        question: "प्रश्न 9. 'राम-लक्ष्मण' में कौन सा इतरेतर द्वंद्व समास है, इसका विग्रह क्या होगा?",
        answers: shuffle([
            { text: "राम या लक्ष्मण", correct: false },
            { text: "राम और लक्ष्मण", correct: true },
            { text: "राम का लक्ष्मण", correct: false },
            { text: "राम जैसा लक्ष्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतरेतर द्वंद्व में 'और' योजक का प्रयोग होता है और दोनों पद अपना स्वतंत्र अस्तित्व रखते हैं।"
    },
    {
        question: "प्रश्न 10. 'थोड़ा-बहुत' में समास है-",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "द्विगु", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'थोड़ा या बहुत' होगा, जो कि वैकल्पिक द्वंद्व है।"
    },
    {
        question: "प्रश्न 11. 'जलवायु' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: true },
            { text: "तत्पुरुष समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "अव्ययीभाव समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'जल और वायु' होता है।"
    },
    {
        question: "प्रश्न 12. 'सुख-दुःख' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "सुख और दुःख", correct: true },
            { text: "सुख से दुःख", correct: false },
            { text: "सुख में दुःख", correct: false },
            { text: "सुख का दुःख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ दोनों पद प्रधान हैं और विग्रह करने पर 'और' का प्रयोग होता है।"
    },
    {
        question: "प्रश्न 13. 'धर्माधर्म' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "अव्ययीभाव", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'धर्म या अधर्म' होता है।"
    },
    {
        question: "प्रश्न 14. 'हानि-लाभ' का सही विग्रह है-",
        answers: shuffle([
            { text: "हानि में लाभ", correct: false },
            { text: "हानि का लाभ", correct: false },
            { text: "हानि अथवा लाभ", correct: true },
            { text: "हानि और लाभ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दो विपरीतार्थक शब्दों का युग्म है, इसलिए यह वैकल्पिक द्वंद्व है।"
    },
    {
        question: "प्रश्न 15. 'लेन-देन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: true },
            { text: "द्विगु समास", correct: false },
            { text: "तत्पुरुष समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'लेन और देन' है।"
    },
    {
        question: "प्रश्न 16. 'हाथ-पाँव' में कौन सा समाहार द्वंद्व है, इसका क्या आशय है?",
        answers: shuffle([
            { text: "केवल हाथ और पाँव", correct: false },
            { text: "हाथ या पाँव", correct: false },
            { text: "हाथ, पाँव आदि (शरीर के अंग)", correct: true },
            { text: "हाथ में पाँव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समाहार द्वंद्व में पदों के अर्थ के अतिरिक्त उसी प्रकार का और भी अर्थ सूचित होता है।"
    },
    {
        question: "प्रश्न 17. 'राजा-प्रजा' में प्रयुक्त समास है-",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'राजा और प्रजा' है।"
    },
    {
        question: "प्रश्न 18. 'अपना-पराया' का विग्रह होगा-",
        answers: shuffle([
            { text: "अपना है जो पराया", correct: false },
            { text: "अपना या पराया", correct: true },
            { text: "अपना और पराया", correct: false },
            { text: "अपना में पराया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विलोम शब्दों का जोड़ा है, अतः यह वैकल्पिक द्वंद्व है।"
    },
    {
        question: "प्रश्न 19. 'कृष्णार्जुन' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कृष्ण और अर्जुन' है।"
    },
    {
        question: "प्रश्न 20. 'चाय-पानी' में समास का भेद बताइए।",
        answers: shuffle([
            { text: "वैकल्पिक द्वंद्व", correct: false },
            { text: "इतरेतर द्वंद्व", correct: false },
            { text: "समाहार द्वंद्व", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाय-पानी' का अर्थ जलपान के अन्य पदार्थों से भी है।"
    },
    {
        question: "प्रश्न 21. 'ऊँच-नीच' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: true },
            { text: "द्विगु", correct: false },
            { text: "अव्ययीभाव", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'ऊँच या नीच' है।"
    },
    {
        question: "प्रश्न 22. 'खट्टा-मीठा' का विग्रह है-",
        answers: shuffle([
            { text: "खट्टा और मीठा", correct: false },
            { text: "खट्टा है जो मीठा", correct: false },
            { text: "खट्टा जैसा मीठा", correct: false },
            { text: "खट्टा या मीठा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो विपरीत गुणों का वर्णन होने के कारण 'या' योजक का प्रयोग होगा।"
    },
    {
        question: "प्रश्न 23. 'गंगा-यमुना' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'गंगा और यमुना' है।"
    },
    {
        question: "प्रश्न 24. निम्नलिखित में से किस शब्द में द्वंद्व समास है?",
        answers: shuffle([
            { text: "पीताम्बर", correct: false },
            { text: "त्रिभुवन", correct: false },
            { text: "मारपीट", correct: true },
            { text: "यथाशक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मारपीट' का विग्रह 'मार और पीट' होता है।"
    },
    {
        question: "प्रश्न 25. 'जीवन-मरण' में कौन सा समास है?",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "द्विगु", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'जीवन या मरण' होता है।"
    },
    {
        question: "प्रश्न 26. 'अमीर-गरीब' का समास विग्रह कीजिए।",
        answers: shuffle([
            { text: "अमीर का गरीब", correct: false },
            { text: "अमीर में गरीब", correct: false },
            { text: "अमीर और गरीब", correct: true },
            { text: "अमीर है जो गरीब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ दोनों पद प्रधान हैं और 'और' से जुड़े हैं।"
    },
    {
        question: "प्रश्न 27. 'पाप-पुण्य' किस प्रकार का द्वंद्व समास है?",
        answers: shuffle([
            { text: "समाहार द्वंद्व", correct: false },
            { text: "इतरेतर द्वंद्व", correct: false },
            { text: "वैकल्पिक द्वंद्व", correct: true },
            { text: " कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्योंकि 'पाप' और 'पुण्य' एक दूसरे के विलोम हैं।"
    },
    {
        question: "प्रश्न 28. 'गाय-बैल' में प्रयुक्त समास है-",
        answers: shuffle([
            { text: "द्वंद्व", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'गाय और बैल' है।"
    },
    {
        question: "प्रश्न 29. 'बाल-बच्चे' शब्द का अर्थ है-",
        answers: shuffle([
            { text: "केवल बाल और बच्चे", correct: false },
            { text: "बाल-बच्चे आदि (परिवार)", correct: true },
            { text: "बाल या बच्चे", correct: false },
            { text: "बालों वाले बच्चे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह समाहार द्वंद्व का उदाहरण है, जो समूह का बोध कराता है।"
    },
    {
        question: "प्रश्न 30. 'यश-अपयश' में समास है-",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'यश या अपयश' होगा।"
    },
    {
        question: "प्रश्न 31. 'सीता-राम' का विग्रह क्या है?",
        answers: shuffle([
            { text: "सीता की राम", correct: false },
            { text: "सीता में राम", correct: false },
            { text: "सीता या राम", correct: false },
            { text: "सीता और राम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों पद प्रधान हैं और 'और' योजक से जुड़े हैं।"
    },
    {
        question: "प्रश्न 32. 'नदी-नाले' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: true },
            { text: "अव्ययीभाव समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "द्विगु समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'नदी और नाले' है।"
    },
    {
        question: "प्रश्न 33. 'रुपया-पैसा' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह समाहार द्वंद्व है, जिसका आशय धन-दौलत से है।"
    },
    {
        question: "प्रश्न 34. जिस समस्त पद में दोनों पदों का समान महत्व हो, वह कौन सा समास कहलाता है?",
        answers: shuffle([
            { text: "बहुव्रीहि समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "द्वंद्व समास", correct: true },
            { text: "अव्ययीभाव समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वंद्व समास की यही मुख्य पहचान है कि इसमें दोनों पद प्रधान होते हैं।"
    },
    {
        question: "प्रश्न 35. 'राधा-कृष्ण' में समास बताइए।",
        answers: shuffle([
            { text: "द्वंद्व", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'राधा और कृष्ण' है।"
    },
    {
        question: "प्रश्न 36. 'आचार-विचार' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'आचार और विचार' होता है।"
    },
    {
        question: "प्रश्न 37. 'कंद-मूल-फल' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष समास", correct: false },
            { text: "द्वंद्व समास", correct: true },
            { text: "कर्मधारय समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कंद, मूल और फल' है।"
    },
    {
        question: "प्रश्न 38. 'भूल-चूक' का विग्रह है-",
        answers: shuffle([
            { text: "भूल और चूक", correct: false },
            { text: "भूल में चूक", correct: false },
            { text: "भूल या चूक", correct: true },
            { text: "भूल की चूक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ एक ही भाव के दो शब्द विकल्प के रूप में हैं।"
    },
    {
        question: "प्रश्न 39. 'घी-शक्कर' में समास है-",
        answers: shuffle([
            { text: "द्वंद्व", correct: true },
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'घी और शक्कर' होता है।"
    },
    {
        question: "प्रश्न 40. 'अन्न-जल' में समास बताइए।",
        answers: shuffle([
            { text: "इतरेतर द्वंद्व", correct: false },
            { text: "समाहार द्वंद्व", correct: true },
            { text: "वैकल्पिक द्वंद्व", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका आशय भोजन और पानी जैसी सभी आवश्यक वस्तुओं से है।"
    },
    {
        question: "प्रश्न 41. 'पच्चीस' (25) में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'पाँच और बीस' होता है।"
    },
    {
        question: "प्रश्न 42. 'नर-नारी' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: true },
            { text: "कर्मधारय समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false },
            { text: "द्विगु समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'नर और नारी' है।"
    },
    {
        question: "प्रश्न 43. 'छल-कपट' का विग्रह होगा-",
        answers: shuffle([
            { text: "छल का कपट", correct: false },
            { text: "छल और कपट", correct: true },
            { text: "छल में कपट", correct: false },
            { text: "छल जैसा कपट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों पद समान महत्व के हैं।"
    },
    {
        question: "प्रश्न 44. 'दही-बड़ा' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: true },
            { text: "तत्पुरुष समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "द्विगु समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'दही और बड़ा' होता है, हालांकि कुछ विद्वान इसे मध्यमपदलोपी तत्पुरुष भी मानते हैं, पर सामान्यतः यह द्वंद्व में गिना जाता है।"
    },
    {
        question: "प्रश्न 45. 'सुबह-शाम' में समास है-",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'सुबह और शाम' है।"
    },
    {
        question: "प्रश्न 46. 'जन्म-मरण' का विग्रह है-",
        answers: shuffle([
            { text: "जन्म से मरण", correct: false },
            { text: "जन्म का मरण", correct: false },
            { text: "जन्म और मरण", correct: false },
            { text: "जन्म या मरण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक दूसरे के विलोम हैं, अतः वैकल्पिक द्वंद्व है।"
    },
    {
        question: "प्रश्न 47. 'तन-मन-धन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: true },
            { text: "द्विगु", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'तन, मन और धन' है।"
    },
    {
        question: "प्रश्न 48. 'लव-कुश' में समास है-",
        answers: shuffle([
            { text: "बहुव्रीहि", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'लव और कुश' है।"
    },
    {
        question: "प्रश्न 49. 'कर्तव्याकर्तव्य' का सही विग्रह है-",
        answers: shuffle([
            { text: "कर्तव्य और कर्तव्य", correct: false },
            { text: "कर्तव्य में अकर्तव्य", correct: false },
            { text: "कर्तव्य या अकर्तव्य", correct: true },
            { text: "कर्तव्य का अकर्तव्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वैकल्पिक द्वंद्व का उदाहरण है।"
    },
    {
        question: "प्रश्न 50. 'भीमार्जुन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'भीम और अर्जुन' है।"
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