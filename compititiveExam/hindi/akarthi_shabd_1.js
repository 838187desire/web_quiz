const questions = [
    {
        topHeading: "एकार्थी शब्दों पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'अस्त्र' शब्द का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "हाथ में पकड़कर चलाया जाने वाला हथियार", correct: false },
            { text: "फेंककर चलाया जाने वाला हथियार", correct: true },
            { text: "एक प्रकार का कवच", correct: false },
            { text: "युद्ध में उपयोग होने वाला वाहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अस्त्र' वे हथियार होते हैं जिन्हें फेंककर शत्रु पर प्रहार किया जाता है, जैसे बाण, भाला, या बम।"
    },
    {
        question: "प्रश्न 2. 'शस्त्र' के लिए सबसे उपयुक्त विकल्प कौन-सा है?",
        answers: shuffle([
            { text: "जो हथियार मंत्रों से चलाया जाए", correct: false },
            { text: "जो हथियार फेंककर मारा जाए", correct: false },
            { text: "जो हथियार हाथ में थामकर चलाया जाए", correct: true },
            { text: "जो हथियार अदृश्य हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शस्त्र' उन हथियारों को कहते हैं जिन्हें हाथ में पकड़कर ही उपयोग किया जाता है, जैसे तलवार, गदा, या लाठी।"
    },
    {
        question: "प्रश्न 3. 'कानून का उल्लंघन करना' इस वाक्यांश के लिए सही एकार्थी शब्द क्या है?",
        answers: shuffle([
            { text: "पाप", correct: false },
            { text: "अपराध", correct: true },
            { text: "दोष", correct: false },
            { text: "भूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपराध' का अर्थ है सामाजिक और राजकीय कानूनों को तोड़ना, जिसके लिए दंड का विधान होता है।"
    },
    {
        question: "प्रश्न 4. 'नैतिक या धार्मिक नियमों को तोड़ना' क्या कहलाता है?",
        answers: shuffle([
            { text: "पाप", correct: true },
            { text: "अधर्म", correct: false },
            { text: "अन्याय", correct: false },
            { text: "गलती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाप' एक नैतिक और धार्मिक अवधारणा है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका संबंध ईश्वर या धर्म के नियमों के उल्लंघन से होता है।"
    },
    {
        question: "प्रश्न 5. 'जिसका मूल्य आँका न जा सके' के लिए एक शब्द है:",
        answers: shuffle([
            { text: "बहुमूल्य", correct: false },
            { text: "कीमती", correct: false },
            { text: "अमूल्य", correct: true },
            { text: "अनमोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमूल्य' का अर्थ है जो इतना कीमती है कि उसका कोई मूल्य ही नहीं लगाया जा सकता, जैसे- माँ का प्रेम।"
    },
    {
        question: "प्रश्न 6. 'जिसका बहुत अधिक मूल्य हो' उसे क्या कहेंगे?",
        answers: shuffle([
            { text: "अमूल्य", correct: false },
            { text: "बहुमूल्य", correct: true },
            { text: "महंगा", correct: false },
            { text: "उत्कृष्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहुमूल्य' उस वस्तु को कहते हैं जिसका बाज़ार में बहुत अधिक मूल्य होता है और उसे खरीदा या बेचा जा सकता है, जैसे- हीरा।"
    },
    {
        question: "प्रश्न 7. 'दूसरों के दुःख को देखकर उसे दूर करने की इच्छा' के लिए सही शब्द है:",
        answers: shuffle([
            { text: "कृपा", correct: false },
            { text: "करुणा", correct: false },
            { text: "दया", correct: true },
            { text: "सहानुभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दया' का भाव किसी भी दुखी व्यक्ति के प्रति हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और इसमें उसे दुःख से निकालने की भावना प्रधान होती है।"
    },
    {
        question: "प्रश्न 8. 'अपने से छोटों पर प्रसन्न होकर उनकी भलाई करने की इच्छा' क्या कहलाती है?",
        answers: shuffle([
            { text: "अनुकम्पा", correct: false },
            { text: "दया", correct: false },
            { text: "कृपा", correct: true },
            { text: "वात्सल्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कृपा' सामान्यतः बड़ों द्वारा छोटों पर की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें आशीर्वाद और प्रसन्नता का भाव निहित होता है।"
    },
    {
        question: "प्रश्न 9. किसी विवाहित पुरुष की अपनी पत्नी के लिए सही सम्बोधन क्या है?",
        answers: shuffle([
            { text: "स्त्री", correct: false },
            { text: "नारी", correct: false },
            { text: "महिला", correct: false },
            { text: "पत्नी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पत्नी' शब्द केवल किसी पुरुष की विवाहिता के लिए प्रयोग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'स्त्री' एक व्यापक शब्द है।"
    },
    {
        question: "प्रश्न 10. 'मनुष्य जाति का मादा सदस्य' के लिए सामान्य शब्द क्या है?",
        answers: shuffle([
            { text: "पत्नी", correct: false },
            { text: "स्त्री", correct: true },
            { text: "भार्या", correct: false },
            { text: "वनिता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्त्री' शब्द किसी भी उम्र की महिला या नारी के लिए प्रयुक्त हो सकता है, चाहे वह विवाहित हो या अविवाहित।"
    },
    {
        question: "प्रश्न 11. किसी संस्था के स्थायी प्रधान के लिए उपयुक्त पद है:",
        answers: shuffle([
            { text: "सभापति", correct: false },
            { text: "संयोजक", correct: false },
            { text: "अध्यक्ष", correct: true },
            { text: "संचालक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्यक्ष' किसी संस्था या संगठन का स्थायी और सर्वोच्च पदाधिकारी होता है।"
    },
    {
        question: "प्रश्न 12. किसी कार्यक्रम या बैठक की अध्यक्षता करने वाले व्यक्ति को क्या कहते हैं?",
        answers: shuffle([
            { text: "अध्यक्ष", correct: false },
            { text: "सभापति", correct: true },
            { text: "मुख्य अतिथि", correct: false },
            { text: "मॉडरेटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सभापति' केवल उस बैठक या सभा की अवधि तक के लिए ही प्रधान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अस्थायी पद है।"
    },
    {
        question: "प्रश्न 13. किसी के गुणों से प्रभावित होकर उसके प्रति सम्मान का भाव रखना:",
        answers: shuffle([
            { text: "भक्ति", correct: false },
            { text: "प्रेम", correct: false },
            { text: "श्रद्धा", correct: true },
            { text: "आस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्रद्धा' का भाव अपने से बड़ों, गुणीजनों या महापुरुषों के प्रति उनके गुणों के कारण उत्पन्न होता है।"
    },
    {
        question: "प्रश्न 14. ईश्वर या देवता के प्रति गहन प्रेम और समर्पण का भाव क्या कहलाता है?",
        answers: shuffle([
            { text: "श्रद्धा", correct: false },
            { text: "भक्ति", correct: true },
            { text: "पूजा", correct: false },
            { text: "आराधना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भक्ति' में ईश्वर के प्रति पूर्ण समर्पण और अनुराग का भाव होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें तर्क के लिए स्थान नहीं होता।"
    },
    {
        question: "प्रश्न 15. 'किसी वस्तु का सामान्य उपयोग करना' के लिए सही शब्द है:",
        answers: shuffle([
            { text: "प्रयोग", correct: false },
            { text: "उपयोग", correct: true },
            { text: "उपभोग", correct: false },
            { text: "सेवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपयोग' का अर्थ है किसी वस्तु को काम में लाना या उसकी उपयोगिता सिद्ध करना।"
    },
    {
        question: "प्रश्न 16. 'किसी वस्तु का पहली बार या विशेष रूप से परीक्षण के लिए उपयोग करना' कहलाता है:",
        answers: shuffle([
            { text: "प्रयोग", correct: true },
            { text: "उपयोग", correct: false },
            { text: "जाँच", correct: false },
            { text: "आविष्कार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रयोग' का अर्थ वैज्ञानिक परीक्षण (Experiment) या किसी नई विधि को आज़माने से है।"
    },
    {
        question: "प्रश्न 17. किसी दूसरे की उन्नति देखकर मन में होने वाली जलन को क्या कहते हैं?",
        answers: shuffle([
            { text: "द्वेष", correct: false },
            { text: "ईर्ष्या", correct: true },
            { text: "स्पर्धा", correct: false },
            { text: "डाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ईर्ष्या' में दूसरे को मिली वस्तु या सफलता को देखकर यह इच्छा होती है कि वह उसे न मिलकर मुझे मिल जाए।"
    },
    {
        question: "प्रश्न 18. किसी कारणवश किसी से शत्रुता का भाव रखना कहलाता है:",
        answers: shuffle([
            { text: "ईर्ष्या", correct: false },
            { text: "द्वेष", correct: true },
            { text: "क्रोध", correct: false },
            { text: "घृणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्वेष' का अर्थ है किसी से मनमुटाव या वैर का भाव रखना और उसका बुरा चाहना।"
    },
    {
        question: "प्रश्न 19. 'किसी नई और छिपी हुई वस्तु, स्थान या तथ्य को खोज निकालना' क्या है?",
        answers: shuffle([
            { text: "अनुसंधान", correct: false },
            { text: "आविष्कार", correct: false },
            { text: "अन्वेषण", correct: true },
            { text: "खोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अन्वेषण' (Exploration) का संबंध अज्ञात स्थानों या तथ्यों का पता लगाने से है, जैसे कोलंबस ने अमेरिका का अन्वेषण किया।"
    },
    {
        question: "प्रश्न 20. 'ज्ञात तथ्यों के आधार पर किसी विषय पर गहरा अध्ययन कर नए सिद्धांत स्थापित करना' कहलाता है:",
        answers: shuffle([
            { text: "अन्वेषण", correct: false },
            { text: "अनुसंधान", correct: true },
            { text: "विश्लेषण", correct: false },
            { text: "विवेचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुसंधान' (Research) एक व्यवस्थित प्रक्रिया है जिसमें किसी विषय पर गहन अध्ययन करके निष्कर्ष निकाले जाते हैं।"
    },
    {
        question: "प्रश्न 21. 'अपनी गलती पर होने वाला आंतरिक दुःख' के लिए एक शब्द है:",
        answers: shuffle([
            { text: "लज्जा", correct: false },
            { text: "खेद", correct: false },
            { text: "ग्लानि", correct: true },
            { text: "शोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्लानि' का अनुभव तब होता है जब व्यक्ति को अपनी ही किसी गलती या बुरे काम पर पछतावा होता है।"
    },
    {
        question: "प्रश्न 22. 'कोई अनुचित कार्य करते हुए पकड़े जाने पर या दूसरों के सामने आने पर होने वाला संकोच' क्या है?",
        answers: shuffle([
            { text: "ग्लानि", correct: false },
            { text: "शर्म", correct: false },
            { text: "लज्जा", correct: true },
            { text: "झिझक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लज्जा' का संबंध दूसरों की प्रतिक्रिया से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक सामाजिक भावना है।"
    },
    {
        question: "प्रश्न 23. 'बड़ों द्वारा छोटों को किसी काम के लिए कहना' इस भाव के लिए सही शब्द है:",
        answers: shuffle([
            { text: "अनुमति", correct: false },
            { text: "आदेश", correct: false },
            { text: "आज्ञा", correct: true },
            { text: "निवेदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आज्ञा' का प्रयोग सामान्यतः बड़ों द्वारा छोटों को, गुरु द्वारा शिष्य को या राजा द्वारा प्रजा को दिया जाता है।"
    },
    {
        question: "प्रश्न 24. 'किसी काम के लिए सहमति देना' क्या कहलाता है?",
        answers: shuffle([
            { text: "आज्ञा", correct: false },
            { text: "अनुमति", correct: true },
            { text: "स्वीकृति", correct: false },
            { text: "प्रार्थना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुमति' (Permission) में सहमति का भाव होता है, जो कोई भी किसी को दे सकता है।"
    },
    {
        question: "प्रश्न 25. किसी प्रियजन की मृत्यु पर होने वाले गहरे दुःख को कहते हैं:",
        answers: shuffle([
            { text: "दुःख", correct: false },
            { text: "शोक", correct: true },
            { text: "विषाद", correct: false },
            { text: "कष्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शोक' का प्रयोग विशेष रूप से किसी की मृत्यु या बहुत बड़ी हानि के कारण उत्पन्न हुए तीव्र दुःख के लिए होता है।"
    },
    {
        question: "प्रश्न 26. किसी सम्मानित व्यक्ति की मृत्यु के लिए कौन सा शब्द अधिक उपयुक्त है?",
        answers: shuffle([
            { text: "मृत्यु", correct: false },
            { text: "देहांत", correct: false },
            { text: "निधन", correct: true },
            { text: "स्वर्गवास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निधन' शब्द का प्रयोग किसी प्रतिष्ठित, आदरणीय या प्रसिद्ध व्यक्ति की मृत्यु के संदर्भ में सम्मानपूर्वक किया जाता है।"
    },
    {
        question: "प्रश्न 27. किसी रोगी की सेवा-टहल करने को क्या कहते हैं?",
        answers: shuffle([
            { text: "सेवा", correct: false },
            { text: "परिचर्या", correct: false },
            { text: "शुश्रूषा", correct: true },
            { text: "देखभाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शुश्रूषा' शब्द विशेष रूप से बीमार या पीड़ित व्यक्ति की सेवा के लिए प्रयोग होता है।"
    },
    {
        question: "प्रश्न 28. 'दूसरों की सहायता या अपने बड़ों की देखभाल करना' इसके लिए सामान्य शब्द है:",
        answers: shuffle([
            { text: "शुश्रूषा", correct: false },
            { text: "सेवा", correct: true },
            { text: "मदद", correct: false },
            { text: "परोपकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सेवा' एक व्यापक शब्द है जिसमें माता-पिता, देश, समाज या किसी भी व्यक्ति की सहायता का भाव निहित हो सकता है।"
    },
    {
        question: "प्रश्न 29. 'किसी से बराबर वालों जैसा प्रेमपूर्ण व्यवहार' क्या कहलाता है?",
        answers: shuffle([
            { text: "स्नेह", correct: false },
            { text: "प्रेम", correct: true },
            { text: "प्रणय", correct: false },
            { text: "आसक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रेम' एक व्यापक शब्द है जो बराबर वालों, मित्रों, या प्रेमी-प्रेमिका के बीच हो सकता है।"
    },
    {
        question: "प्रश्न 30. 'अपने से छोटों के प्रति मन में उठने वाला दुलार का भाव' है:",
        answers: shuffle([
            { text: "प्रेम", correct: false },
            { text: "वात्सल्य", correct: false },
            { text: "स्नेह", correct: true },
            { text: "करुणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्नेह' का भाव बड़ों का छोटों के प्रति होता है, जैसे माता-पिता का संतान के प्रति।"
    },
    {
        question: "प्रश्न 31. 'किसी वस्तु को देखकर उसे पाने की तीव्र इच्छा' के लिए एक शब्द:",
        answers: shuffle([
            { text: "लोभ", correct: false },
            { text: "इच्छा", correct: false },
            { text: "लालसा", correct: true },
            { text: "मोह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लालसा' में किसी वस्तु के प्रति तीव्र आकर्षण और उसे पाने की उत्कट इच्छा होती है।"
    },
    {
        question: "प्रश्न 32. 'अनुचित रूप से किसी वस्तु को प्राप्त करने की चाह' क्या कहलाती है?",
        answers: shuffle([
            { text: "लालसा", correct: false },
            { text: "लोभ", correct: true },
            { text: "तृष्णा", correct: false },
            { text: "कामना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोभ' एक नकारात्मक भाव है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें व्यक्ति नैतिक-अनैतिक का विचार किए बिना किसी वस्तु को हड़प लेना चाहता है।"
    },
    {
        question: "प्रश्न 33. 'किसी कार्य को करने की मानसिक शक्ति' को क्या कहते हैं?",
        answers: shuffle([
            { text: "योग्यता", correct: false },
            { text: "बल", correct: false },
            { text: "सामर्थ्य", correct: false },
            { text: "क्षमता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षमता' (Capacity) का संबंध किसी व्यक्ति की आंतरिक शक्ति या सामर्थ्य से है, जो बताती है कि वह कितना कार्य कर सकता है।"
    },
    {
        question: "प्रश्न 34. 'किसी कार्य को कुशलतापूर्वक करने का गुण' क्या कहलाता है?",
        answers: shuffle([
            { text: "क्षमता", correct: false },
            { text: "गुण", correct: false },
            { text: "योग्यता", correct: true },
            { text: "निपुणता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'योग्यता' (Ability/Merit) का संबंध ज्ञान, कौशल और अनुभव से होता है जो किसी कार्य को सही ढंग से पूरा करने के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 35. 'साधारण रूप से सुंदर' के लिए प्रयुक्त शब्द है:",
        answers: shuffle([
            { text: "चारु", correct: false },
            { text: "मनोहर", correct: false },
            { text: "सुंदर", correct: true },
            { text: "रमणीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुंदर' एक सामान्य शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका प्रयोग किसी भी वस्तु, व्यक्ति या स्थान के लिए किया जा सकता है जो देखने में अच्छा लगे।"
    },
    {
        question: "प्रश्न 36. 'मन को हरने वाला' या 'अत्यंत आकर्षक' के लिए एक शब्द:",
        answers: shuffle([
            { text: "सुंदर", correct: false },
            { text: "मनोहर", correct: true },
            { text: "ललित", correct: false },
            { text: "आकर्षक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मनोहर' का अर्थ है जो मन को इतना भाए कि वह उसी में रम जाए।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें आकर्षण का भाव अधिक होता है।"
    },
    {
        question: "प्रश्न 37. 'किसी के आने पर सम्मानपूर्वक उसका सत्कार करना' कहलाता है:",
        answers: shuffle([
            { text: "अभिनंदन", correct: false },
            { text: "अभिवादन", correct: false },
            { text: "स्वागत", correct: true },
            { text: "सत्कार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वागत' (Welcome) किसी अतिथि के आगमन पर किया जाता है।"
    },
    {
        question: "प्रश्न 38. 'किसी व्यक्ति की सफलता या उपलब्धि पर प्रसन्नता व्यक्त करना' क्या कहलाता है?",
        answers: shuffle([
            { text: "स्वागत", correct: false },
            { text: "अभिनंदन", correct: true },
            { text: "बधाई", correct: false },
            { text: "प्रशंसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिनंदन' (Felicitation) किसी विशेष अवसर या सफलता के लिए सम्मानपूर्वक किया जाता है।"
    },
    {
        question: "प्रश्न 39. 'किसी वस्तु या व्यक्ति के प्रति मन का झुकाव' कहलाता है:",
        answers: shuffle([
            { text: "आसक्ति", correct: false },
            { text: "मोह", correct: false },
            { text: "प्रेम", correct: false },
            { text: "लगाव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लगाव' एक सामान्य और सकारात्मक शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो किसी के प्रति स्नेहपूर्ण जुड़ाव को दर्शाता है।"
    },
    {
        question: "प्रश्न 40. 'किसी वस्तु या व्यक्ति के प्रति इतना गहरा लगाव कि उसके दोष भी न दिखें' उसे कहते हैं:",
        answers: shuffle([
            { text: "प्रेम", correct: false },
            { text: "आसक्ति", correct: false },
            { text: "मोह", correct: true },
            { text: "अंधविश्वास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मोह' में व्यक्ति विवेक खो देता है और सही-गलत का निर्णय नहीं कर पाता।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक नकारात्मक बंधन माना जाता है।"
    },
    {
        question: "प्रश्न 41. 'दो या दो से अधिक पक्षों के बीच किसी विषय पर अंतिम निश्चय' कहलाता है:",
        answers: shuffle([
            { text: "न्याय", correct: false },
            { text: "फैसला", correct: false },
            { text: "निर्णय", correct: true },
            { text: "निष्कर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निर्णय' (Decision) व्यक्तिगत या सामूहिक हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें विभिन्न विकल्पों में से किसी एक को चुना जाता है।"
    },
    {
        question: "प्रश्न 42. 'सत्य और असत्य का निर्धारण कर दोषी को दंड और निर्दोष को मुक्ति देना' कहलाता है:",
        answers: shuffle([
            { text: "निर्णय", correct: false },
            { text: "न्याय", correct: true },
            { text: "विधान", correct: false },
            { text: "आदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'न्याय' (Justice) एक कानूनी और नैतिक प्रक्रिया है जिसका उद्देश्य सत्य की स्थापना करना होता है।"
    },
    {
        question: "प्रश्न 43. 'किसी से सहायता माँगना' के लिए उपयुक्त शब्द है:",
        answers: shuffle([
            { text: "याचना", correct: true },
            { text: "प्रार्थना", correct: false },
            { text: "निवेदन", correct: false },
            { text: "विनती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'याचना' दीनतापूर्वक कुछ माँगने के लिए प्रयुक्त होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें माँगने वाला स्वयं को छोटा समझता है।"
    },
    {
        question: "प्रश्न 44. 'ईश्वर से कुछ माँगना' या 'बड़ों से आदरपूर्वक कुछ कहना' कहलाता है:",
        answers: shuffle([
            { text: "याचना", correct: false },
            { text: "प्रार्थना", correct: true },
            { text: "अनुरोध", correct: false },
            { text: "आकांक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रार्थना' में विनय और श्रद्धा का भाव होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ईश्वर या किसी सम्मानित व्यक्ति से की जाती है।"
    },
    {
        question: "प्रश्न 45. 'वह मानसिक स्थिति जिसमें व्यक्ति जल्दी कोई निर्णय नहीं ले पाता' कहलाती है:",
        answers: shuffle([
            { text: "भय", correct: false },
            { text: "संदेह", correct: false },
            { text: "दुविधा", correct: true },
            { text: "भ्रम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुविधा' में व्यक्ति दो या अधिक विकल्पों के बीच फंस जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसे समझ नहीं आता कि क्या चुनें।"
    },
    {
        question: "प्रश्न 46. 'किसी तथ्य की सत्यता के विषय में अनिश्चितता का भाव' क्या है?",
        answers: shuffle([
            { text: "दुविधा", correct: false },
            { text: "भ्रम", correct: false },
            { text: "शक", correct: false },
            { text: "संदेह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संदेह' में किसी बात पर पूरी तरह से विश्वास नहीं होता।<br><br><i class='fa-solid fa-angles-right icon'></i> मन में उसके सच या झूठ होने का संशय बना रहता है।"
    },
    {
        question: "प्रश्न 47. 'किसी वस्तु को गलती से कुछ और समझ लेना' कहलाता है:",
        answers: shuffle([
            { text: "संदेह", correct: false },
            { text: "धोखा", correct: false },
            { text: "भ्रम", correct: true },
            { text: "अज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भ्रम' (Illusion) में वास्तविकता का गलत बोध होता है, जैसे रस्सी को साँप समझ लेना।"
    },
    {
        question: "प्रश्न 48. 'किसी के मन को चोट पहुँचाने वाली बात' के लिए एक शब्द है:",
        answers: shuffle([
            { text: "निंदा", correct: false },
            { text: "आलोचना", correct: false },
            { text: "आक्षेप", correct: false },
            { text: "कटाक्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कटाक्ष' का अर्थ है व्यंग्यपूर्ण तरीके से कही गई चुभती हुई बात।"
    },
    {
        question: "प्रश्न 49. 'झूठा दोष लगाना' वाक्यांश के लिए सही शब्द है:",
        answers: shuffle([
            { text: "आक्षेप", correct: true },
            { text: "आरोप", correct: false },
            { text: "अभियोग", correct: false },
            { text: "दोषारोपण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आक्षेप' में किसी पर बिना किसी ठोस प्रमाण के, अपमानित करने के इरादे से दोष मढ़ा जाता है।"
    },
    {
        question: "प्रश्न 50. 'कानूनी रूप से किसी पर अपराध का इल्जाम लगाना' क्या है?",
        answers: shuffle([
            { text: "आक्षेप", correct: false },
            { text: "आरोप", correct: true },
            { text: "इल्जाम", correct: false },
            { text: "दोष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आरोप' (Allegation) में किसी व्यक्ति को किसी विशिष्ट अपराध के लिए जिम्मेदार ठहराया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे साबित करने की आवश्यकता होती है।"
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