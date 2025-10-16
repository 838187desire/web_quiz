const questions = [
    {
        topHeading: "व्यंजन पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जिन वर्णों का उच्चारण स्वरों की सहायता से होता है, वे क्या कहलाते हैं?",
        answers: shuffle([
            { text: "स्वर", correct: false },
            { text: "व्यंजन", correct: true },
            { text: "अयोगवाह", correct: false },
            { text: "संयुक्त वर्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यंजन वे ध्वनियाँ हैं जिनके पूर्ण उच्चारण के लिए स्वरों की सहायता आवश्यक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक व्यंजन में 'अ' स्वर अंतर्निहित होता है।"
    },
    {
        question: "प्रश्न 2. हिंदी वर्णमाला में मूल व्यंजनों की संख्या कितनी है?",
        answers: shuffle([
            { text: "36", correct: false },
            { text: "35", correct: false },
            { text: "33", correct: true },
            { text: "39", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी में मूल व्यंजन 33 माने जाते हैं, जिनमें 25 स्पर्श, 4 अंतस्थ और 4 ऊष्म व्यंजन शामिल हैं।"
    },
    {
        question: "प्रश्न 3. 'क' वर्ग के व्यंजनों का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "कंठ", correct: true },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क, ख, ग, घ, ङ का उच्चारण सीधे कंठ से होता है, इसलिए इन्हें कंठ्य व्यंजन कहते हैं।"
    },
    {
        question: "प्रश्न 4. निम्नलिखित में से कौन-सा वर्ण 'ट' वर्ग का नहीं है?",
        answers: shuffle([
            { text: "ठ", correct: false },
            { text: "ड", correct: false },
            { text: "ढ", correct: false },
            { text: "ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ध' 'त' वर्ग (त, थ, द, ध, न) का वर्ण है, जबकि ट, ठ, ड, ढ, ण 'ट' वर्ग के वर्ण हैं।"
    },
    {
        question: "प्रश्न 5. 'य, र, ल, व' किस प्रकार के व्यंजन हैं?",
        answers: shuffle([
            { text: "स्पर्श व्यंजन", correct: false },
            { text: "ऊष्म व्यंजन", correct: false },
            { text: "अंतस्थ व्यंजन", correct: true },
            { text: "संयुक्त व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन व्यंजनों का उच्चारण स्वर और व्यंजन के मध्य का होता है, इसलिए इन्हें अंतस्थ व्यंजन कहा जाता है।"
    },
    {
        question: "प्रश्न 6. 'श, ष, स, ह' किस प्रकार के व्यंजन हैं?",
        answers: shuffle([
            { text: "स्पर्श व्यंजन", correct: false },
            { text: "ऊष्म व्यंजन", correct: true },
            { text: "अंतस्थ व्यंजन", correct: false },
            { text: "उत्क्षिप्त व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन व्यंजनों के उच्चारण में मुख से गर्म हवा (ऊष्मा) निकलती है, इसलिए इन्हें ऊष्म या संघर्षी व्यंजन कहते हैं।"
    },
    {
        question: "प्रश्न 7. संयुक्त व्यंजन 'क्ष' किन दो वर्णों के मेल से बना है?",
        answers: shuffle([
            { text: "क् + ष", correct: true },
            { text: "क् + श", correct: false },
            { text: "च् + ष", correct: false },
            { text: "छ् + स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्ष' एक संयुक्त व्यंजन है जिसका निर्माण आधे 'क्' और पूरे 'ष' के मेल से होता है।"
    },
    {
        question: "प्रश्न 8. संयुक्त व्यंजन 'ज्ञ' किन दो वर्णों के मेल से बना है?",
        answers: shuffle([
            { text: "ग् + य", correct: false },
            { text: "ज् + ञ", correct: true },
            { text: "ग् + ञ", correct: false },
            { text: "ज् + य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्ञ' का निर्माण आधे 'ज्' और पूरे 'ञ' के मेल से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उच्चारण 'ग्य' जैसा होता है।"
    },
    {
        question: "प्रश्न 9. निम्नलिखित में से कौन-सा व्यंजन 'ओष्ठ्य' है?",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "च", correct: false },
            { text: "त", correct: false },
            { text: "प", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प, फ, ब, भ, म का उच्चारण दोनों होंठों (ओष्ठ) के मिलने से होता है, इसलिए ये ओष्ठ्य व्यंजन हैं।"
    },
    {
        question: "प्रश्न 10. निम्नलिखित में से कौन-सा व्यंजन 'दंत्य' है?",
        answers: shuffle([
            { text: "च", correct: false },
            { text: "ट", correct: false },
            { text: "त", correct: true },
            { text: "प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त, थ, द, ध, न के उच्चारण में जिह्वा दाँतों से स्पर्श करती है, इसलिए ये दंत्य व्यंजन हैं।"
    },
    {
        question: "प्रश्न 11. 'च' और 'छ' वर्ण का उच्चारण स्थान कौन-सा है?",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "तालु", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> च, छ, ज, झ, ञ के उच्चारण में जिह्वा तालु को स्पर्श करती है, इसलिए ये तालव्य व्यंजन हैं।"
    },
    {
        question: "प्रश्न 12. 'घोषत्व' के आधार पर व्यंजन के कितने भेद होते हैं?",
        answers: shuffle([
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घोषत्व (स्वर तंत्रियों में कंपन) के आधार पर व्यंजन के दो भेद हैं - अघोष और घोष (या सघोष)।"
    },
    {
        question: "प्रश्न 13. निम्नलिखित में से कौन-सा वर्ण 'अघोष' है?",
        answers: shuffle([
            { text: "क", correct: true },
            { text: "ग", correct: false },
            { text: "ज", correct: false },
            { text: "द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का पहला और दूसरा व्यंजन (जैसे क, ख) तथा श, ष, स अघोष होते हैं, क्योंकि इनके उच्चारण में स्वर तंत्रियों में कंपन नहीं होता।"
    },
    {
        question: "प्रश्न 14. निम्नलिखित में से कौन-सा वर्ण 'घोष' (सघोष) है?",
        answers: shuffle([
            { text: "च", correct: false },
            { text: "ट", correct: false },
            { text: "त", correct: false },
            { text: "ग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का तीसरा, चौथा और पाँचवाँ व्यंजन (जैसे ग, घ, ङ), सभी अंतस्थ व्यंजन (य, र, ल, व) और 'ह' घोष वर्ण होते हैं।"
    },
    {
        question: "प्रश्न 15. 'प्राणत्व' (श्वास की मात्रा) के आधार पर व्यंजन के कितने भेद होते हैं?",
        answers: shuffle([
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "एक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राणत्व के आधार पर व्यंजन के दो भेद हैं - अल्पप्राण और महाप्राण।"
    },
    {
        question: "प्रश्न 16. निम्नलिखित में से कौन-सा व्यंजन 'अल्पप्राण' है?",
        answers: shuffle([
            { text: "ख", correct: false },
            { text: "घ", correct: false },
            { text: "छ", correct: false },
            { text: "ग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का पहला, तीसरा और पाँचवाँ व्यंजन (जैसे क, ग, ङ) तथा सभी अंतस्थ व्यंजन (य, र, ल, व) अल्पप्राण होते हैं।"
    },
    {
        question: "प्रश्न 17. निम्नलिखित में से कौन-सा व्यंजन 'महाप्राण' है?",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "ग", correct: false },
            { text: "ज", correct: false },
            { text: "ख", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का दूसरा और चौथा व्यंजन (जैसे ख, घ) तथा सभी ऊष्म व्यंजन (श, ष, स, ह) महाप्राण होते हैं।"
    },
    {
        question: "प्रश्न 18. 'र' व्यंजन किस प्रकार का है?",
        answers: shuffle([
            { text: "पार्श्विक", correct: false },
            { text: "प्रकंपित/लुंठित", correct: true },
            { text: "संघर्षी", correct: false },
            { text: "स्पर्श-संघर्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'र' के उच्चारण में जिह्वा में कंपन होता है और वह लुढ़कती-सी प्रतीत होती है, इसलिए इसे प्रकंपित या लुंठित व्यंजन कहते हैं।"
    },
    {
        question: "प्रश्न 19. 'ल' व्यंजन किस प्रकार का है?",
        answers: shuffle([
            { text: "पार्श्विक", correct: true },
            { text: "प्रकंपित", correct: false },
            { text: "उत्क्षिप्त", correct: false },
            { text: "संघर्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ल' के उच्चारण में हवा जिह्वा के बगल (पार्श्व) से निकल जाती है, इसलिए इसे पार्श्विक व्यंजन कहते हैं।"
    },
    {
        question: "प्रश्न 20. निम्नलिखित में से 'अर्धस्वर' कौन-सा है?",
        answers: shuffle([
            { text: "र", correct: false },
            { text: "ल", correct: false },
            { text: "य", correct: true },
            { text: "ह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'य' और 'व' का उच्चारण स्वरों के बहुत निकट होता है, इसलिए इन्हें अर्धस्वर भी कहा जाता है।"
    },
    {
        question: "प्रश्न 21. प्रत्येक वर्ग के पाँचवें वर्ण (ङ, ञ, ण, न, म) को क्या कहा जाता है?",
        answers: shuffle([
            { text: "अनुस्वार", correct: false },
            { text: "अनुनासिक", correct: true },
            { text: "निरनुनासिक", correct: false },
            { text: "विसर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन वर्णों का उच्चारण मुख और नाक दोनों से होता है, इसलिए इन्हें अनुनासिक या पंचमाक्षर कहते हैं।"
    },
    {
        question: "प्रश्न 22. 'ष' वर्ण का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "ओष्ठ", correct: false },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ष' के उच्चारण में जिह्वा मूर्धा को स्पर्श करती है, इसलिए यह मूर्धन्य व्यंजन है।"
    },
    {
        question: "प्रश्न 23. इनमें से संयुक्त व्यंजन कौन-सा नहीं है?",
        answers: shuffle([
            { text: "क्ष", correct: false },
            { text: "त्र", correct: false },
            { text: "ज्ञ", correct: false },
            { text: "फ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फ' एक स्पर्श व्यंजन है, जबकि क्ष, त्र, ज्ञ, श्र संयुक्त व्यंजन हैं।"
    },
    {
        question: "प्रश्न 24. 'दिल्ली' शब्द में कौन-सा व्यंजन है?",
        answers: shuffle([
            { text: "संयुक्त व्यंजन", correct: false },
            { text: "द्वित्व व्यंजन", correct: true },
            { text: "व्यंजन गुच्छ", correct: false },
            { text: "उत्क्षिप्त व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक ही व्यंजन दो बार मिलता है (जैसे ल् + ल), तो उसे द्वित्व व्यंजन कहते हैं।"
    },
    {
        question: "प्रश्न 25. 'व' वर्ण का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "ओष्ठ", correct: false },
            { text: "दंत", correct: false },
            { text: "दंतोष्ठ्य", correct: true },
            { text: "कंठोष्ठ्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व' के उच्चारण में नीचे का होंठ और ऊपर के दाँत दोनों का प्रयोग होता है, इसलिए यह दंतोष्ठ्य है।"
    },
    {
        question: "प्रश्न 26. कौन-सा वर्ण घोष और महाप्राण दोनों है?",
        answers: shuffle([
            { text: "ख", correct: false },
            { text: "ग", correct: false },
            { text: "घ", correct: true },
            { text: "क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घ' 'क' वर्ग का चौथा वर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> चौथा वर्ण घोष भी होता है और महाप्राण भी।"
    },
    {
        question: "प्रश्न 27. कौन-सा वर्ण अघोष और अल्पप्राण दोनों है?",
        answers: shuffle([
            { text: "ख", correct: false },
            { text: "छ", correct: false },
            { text: "ठ", correct: false },
            { text: "त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त' 'त' वर्ग का पहला वर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> पहला वर्ण अघोष भी होता है और अल्पप्राण भी।"
    },
    {
        question: "प्रश्न 28. 'च, छ, ज, झ' किस प्रकार के व्यंजन हैं?",
        answers: shuffle([
            { text: "संघर्षी", correct: false },
            { text: "स्पर्श-संघर्षी", correct: true },
            { text: "प्रकंपित", correct: false },
            { text: "पार्श्विक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनके उच्चारण में स्पर्श के साथ-साथ कुछ घर्षण (संघर्ष) भी होता है, इसलिए इन्हें स्पर्श-संघर्षी कहते हैं।"
    },
    {
        question: "प्रश्न 29. 'ज्ञ' को वर्णमाला में किसके बाद रखा जाता है?",
        answers: shuffle([
            { text: "ह", correct: false },
            { text: "क्ष", correct: false },
            { text: "ज", correct: true },
            { text: "त्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि 'ज्ञ' का निर्माण 'ज् + ञ' से होता है, इसलिए शब्दकोश में 'ज्ञ' से शुरू होने वाले शब्द 'ज' वाले शब्दों के बाद आते हैं।"
    },
    {
        question: "प्रश्न 30. उत्क्षिप्त व्यंजन (ड़, ढ़) शब्द के किस स्थान पर नहीं आते हैं?",
        answers: shuffle([
            { text: "मध्य में", correct: false },
            { text: "अंत में", correct: false },
            { text: "आरंभ में", correct: true },
            { text: "कहीं भी आ सकते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी के किसी भी मौलिक शब्द की शुरुआत 'ड़' या 'ढ़' से नहीं होती है।"
    },
    {
        question: "प्रश्न 31. निम्नलिखित में से पार्श्विक ध्वनि कौन-सी है?",
        answers: shuffle([
            { text: "ण", correct: false },
            { text: "ल", correct: true },
            { text: "र", correct: false },
            { text: "च", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ल' के उच्चारण में जिह्वा के दोनों बगलों से हवा निकलती है, अतः यह पार्श्विक है।"
    },
    {
        question: "प्रश्न 32. 'त्र' किन वर्णों के योग से बना है?",
        answers: shuffle([
            { text: "त् + र", correct: true },
            { text: "त + र्", correct: false },
            { text: "त् + ऋ", correct: false },
            { text: "त् + अ + र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त व्यंजन 'त्र' का निर्माण आधे 'त्' और पूरे 'र' के मेल से होता है।"
    },
    {
        question: "प्रश्न 33. हिंदी वर्णमाला में 'अं' और 'अः' को क्या कहा जाता है?",
        answers: shuffle([
            { text: "स्वर", correct: false },
            { text: "व्यंजन", correct: false },
            { text: "अयोगवाह", correct: true },
            { text: "संयुक्त व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये न तो पूरी तरह स्वर हैं और न ही व्यंजन, फिर भी अर्थ वहन करते हैं, इसलिए इन्हें अयोगवाह कहते हैं।"
    },
    {
        question: "प्रश्न 34. किस शब्द में 'र' व्यंजन नहीं है?",
        answers: shuffle([
            { text: "क्रम", correct: false },
            { text: "मातृ", correct: true },
            { text: "कर्म", correct: false },
            { text: "राष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मातृ' शब्द में 'त्' के नीचे 'ऋ' स्वर की मात्रा लगी है, यह 'र' व्यंजन नहीं है।"
    },
    {
        question: "प्रश्न 35. 'पंचमाक्षर' किसे कहते हैं?",
        answers: shuffle([
            { text: "वर्ग के पहले वर्ण को", correct: false },
            { text: "वर्ग के तीसरे वर्ण को", correct: false },
            { text: "वर्ग के पाँचवें वर्ण को", correct: true },
            { text: "अंतस्थ व्यंजनों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक स्पर्श व्यंजन वर्ग के पाँचवें वर्ण (ङ, ञ, ण, न, म) को पंचमाक्षर कहा जाता है।"
    },
    {
        question: "प्रश्न 36. 'स' व्यंजन का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "दंत/वर्त्स्य", correct: true },
            { text: "कंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स' के उच्चारण में जिह्वा दाँतों के मसूड़े (वर्त्स) को स्पर्श करती है, इसलिए इसे वर्त्स्य या दंत्य माना जाता है।"
    },
    {
        question: "प्रश्न 37. 'श' व्यंजन का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "तालु", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: false },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श' के उच्चारण में जिह्वा तालु को स्पर्श करती है, इसलिए यह तालव्य व्यंजन है।"
    },
    {
        question: "प्रश्न 38. कौन-सा व्यंजन महाप्राण और घोष दोनों है?",
        answers: shuffle([
            { text: "श", correct: false },
            { text: "ठ", correct: false },
            { text: "झ", correct: true },
            { text: "फ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झ' 'च' वर्ग का चौथा वर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> चौथा वर्ण घोष भी होता है और महाप्राण भी।"
    },
    {
        question: "प्रश्न 39. निम्नलिखित में से नासिक्य व्यंजन कौन-सा नहीं है?",
        answers: shuffle([
            { text: "ञ", correct: false },
            { text: "ण", correct: false },
            { text: "न", correct: false },
            { text: "य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'य' एक अंतस्थ व्यंजन है, जबकि ञ, ण, न, म, ङ नासिक्य (अनुनासिक) व्यंजन हैं।"
    },
    {
        question: "प्रश्न 40. 'प्रयत्न' के आधार पर 'ल' किस प्रकार की ध्वनि है?",
        answers: shuffle([
            { text: "उत्क्षिप्त", correct: false },
            { text: "प्रकंपित", correct: false },
            { text: "पार्श्विक", correct: true },
            { text: "संघर्षहीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चारण के प्रयत्न के आधार पर 'ल' को पार्श्विक ध्वनि की श्रेणी में रखा जाता है।"
    },
    {
        question: "प्रश्न 41. 'श्र' एक संयुक्त व्यंजन है, यह किन दो वर्णों से मिलकर बना है?",
        answers: shuffle([
            { text: "स् + र", correct: false },
            { text: "श् + र", correct: true },
            { text: "स् + ह", correct: false },
            { text: "श् + ऋ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्र' का निर्माण आधे 'श्' (तालव्य श) और पूरे 'र' के मेल से होता है।"
    },
    {
        question: "प्रश्न 42. 'क्ष' वर्ण किसके योग से बनता है?",
        answers: shuffle([
            { text: "क् + श", correct: false },
            { text: "क् + च", correct: false },
            { text: "क् + छ", correct: false },
            { text: "क् + ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्ष' एक संयुक्त व्यंजन है जिसका निर्माण आधे 'क्' और पूरे 'ष' (मूर्धन्य ष) के योग से होता है।"
    },
    {
        question: "प्रश्न 43. मूर्धन्य व्यंजन कौन-से हैं?",
        answers: shuffle([
            { text: "च, छ, ज, झ", correct: false },
            { text: "क, ख, ग, घ", correct: false },
            { text: "त, थ, द, ध", correct: false },
            { text: "ट, ठ, ड, ढ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन व्यंजनों के उच्चारण में जिह्वा मूर्धा (तालु का ऊपरी कठोर भाग) को स्पर्श करती है।"
    },
    {
        question: "प्रश्न 44. इनमें से अल्पप्राण वर्ण कौन-से हैं?",
        answers: shuffle([
            { text: "अ, आ", correct: false },
            { text: "क, ग", correct: true },
            { text: "थ, ध", correct: false },
            { text: "फ, भ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क' और 'ग' अपने वर्ग के क्रमशः पहले और तीसरे वर्ण हैं, जो अल्पप्राण होते हैं।"
    },
    {
        question: "प्रश्न 45. निम्नलिखित में से कौन-सा वर्ण दंत्य नहीं है?",
        answers: shuffle([
            { text: "त", correct: false },
            { text: "द", correct: false },
            { text: "ल", correct: false },
            { text: "य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'य' का उच्चारण स्थान तालु है।<br><br><i class='fa-solid fa-angles-right icon'></i> त, द और ल दंत्य/वर्त्स्य ध्वनियाँ हैं।"
    },
    {
        question: "प्रश्न 46. स्पर्श व्यंजनों की संख्या कितनी है?",
        answers: shuffle([
            { text: "20", correct: false },
            { text: "25", correct: true },
            { text: "30", correct: false },
            { text: "33", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क' वर्ग से 'प' वर्ग तक, पाँचों वर्गों में 5-5 व्यंजन होते हैं, जिनकी कुल संख्या 25 है।"
    },
    {
        question: "प्रश्न 47. 'घ' का उच्चारण स्थान कौन-सा है?",
        answers: shuffle([
            { text: "मूर्धा", correct: false },
            { text: "कंठ", correct: true },
            { text: "तालु", correct: false },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घ' 'क' वर्ग का चौथा व्यंजन है और 'क' वर्ग के सभी व्यंजन कंठ्य होते हैं।"
    },
    {
        question: "प्रश्न 48. हिंदी की स्पर्श, घोष, महाप्राण, ओष्ठ्य व्यंजन ध्वनि है?",
        answers: shuffle([
            { text: "भ", correct: true },
            { text: "थ", correct: false },
            { text: "द", correct: false },
            { text: "ह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भ' 'प' वर्ग का चौथा वर्ण है, जो स्पर्श, घोष और महाप्राण है, तथा इसका उच्चारण स्थान ओष्ठ है।"
    },
    {
        question: "प्रश्न 49. हिंदी की स्पर्श, अघोष, महाप्राण, दंत्य व्यंजन ध्वनि है?",
        answers: shuffle([
            { text: "द", correct: false },
            { text: "त", correct: false },
            { text: "थ", correct: true },
            { text: "ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थ' 'त' वर्ग का दूसरा वर्ण है, जो स्पर्श, अघोष और महाप्राण है, तथा इसका उच्चारण स्थान दंत है।"
    },
    {
        question: "प्रश्न 50. कौन-से वर्णों को स्वर और व्यंजन के बीच की कड़ी कहा जाता है?",
        answers: shuffle([
            { text: "ऊष्म व्यंजन", correct: false },
            { text: "अंतस्थ व्यंजन", correct: true },
            { text: "स्पर्श व्यंजन", correct: false },
            { text: "संयुक्त व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> य, र, ल, व का उच्चारण स्वर और व्यंजन के मध्य का होता है, इसलिए इन्हें यह संज्ञा दी जाती है।"
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