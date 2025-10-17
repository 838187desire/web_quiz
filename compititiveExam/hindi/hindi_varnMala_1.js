const questions = [
    {
        topHeading: "हिंदी वर्णमाला पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भाषा की सबसे छोटी इकाई है?",
        answers: shuffle([
            { text: "शब्द", correct: false },
            { text: "व्यंजन", correct: false },
            { text: "स्वर", correct: false },
            { text: "वर्ण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाषा की सबसे छोटी इकाई वर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके और टुकड़े नहीं किये जा सकते।"
    },
    {
        question: "प्रश्न 2. हिन्दी में मूलतः कितने वर्ण हैं?",
        answers: shuffle([
            { text: "52", correct: true },
            { text: "50", correct: false },
            { text: "40", correct: false },
            { text: "46", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिन्दी में उच्चारण के आधार पर 45 वर्ण (10 स्वर + 35 व्यंजन) एवं लेखन के आधार पर 52 वर्ण (13 स्वर + 35 व्यंजन + 4 संयुक्त व्यंजन) हैं।"
    },
    {
        question: "प्रश्न 3. हिन्दी भाषा में वे कौन-सी ध्वनियाँ हैं जो स्वतन्त्र रूप से बोली या लिखी जाती है?",
        answers: shuffle([
            { text: "स्वर", correct: true },
            { text: "व्यंजन", correct: false },
            { text: "वर्ण", correct: false },
            { text: "अक्षर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वर उन वर्णों को कहते हैं जिनका उच्चारण बिना किसी अन्य वर्ण की सहायता के होता है।"
    },
    {
        question: "प्रश्न 4. संयुक्त को छोड़कर हिन्दी में मूल वर्णों की संख्या है?",
        answers: shuffle([
            { text: "36", correct: false },
            { text: "44", correct: true },
            { text: "48", correct: false },
            { text: "53", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिन्दी वर्णमाला में 11 स्वर और 33 व्यंजन हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> कुल मिलाकर 44 मूल वर्ण हैं।"
    },
    {
        question: "प्रश्न 5. स्वर कहते हैं?",
        answers: shuffle([
            { text: "जिनका उच्चारण 'लघु' और गुरु' में होता है", correct: false },
            { text: "जिनका उच्चारण बिना अवरोध अथवा विघ्न-बाधा के होता है", correct: true },
            { text: "जिनका उच्चारण स्वरों की सहायता से होता है", correct: false },
            { text: "जिनका उच्चारण नाक और मुँह से होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वर वे ध्वनियाँ हैं जिनके उच्चारण में वायु बिना किसी रुकावट के मुख से निकलती है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से कौन-सा मूल दीर्घ स्वर नहीं है?",
        answers: shuffle([
            { text: "आ", correct: false },
            { text: "ई", correct: false },
            { text: "ऊ", correct: false },
            { text: "ओ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ओ' एक संयुक्त स्वर है, जो 'अ' और 'उ' के मेल से बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'आ', 'ई', 'ऊ' मूल दीर्घ स्वर हैं।"
    },
    {
        question: "प्रश्न 7. हिन्दी में ध्वनियाँ कितने प्रकार की होती हैं?",
        answers: shuffle([
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिन्दी में ध्वनियाँ दो प्रकार की होती हैं - स्वर और व्यंजन।"
    },
    {
        question: "प्रश्न 8. वर्णमाला में स्पर्श व्यंजनों की संख्या कितनी है?",
        answers: shuffle([
            { text: "25", correct: true },
            { text: "30", correct: false },
            { text: "20", correct: false },
            { text: "35", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पर्श व्यंजन 'क' से 'म' तक 25 होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जिन्हें पाँच वर्गों में बाँटा गया है।"
    },
    {
        question: "प्रश्न 9. मात्रा के आधार पर स्वर कितने प्रकार के होते हैं?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मात्रा के आधार पर स्वर तीन प्रकार के होते हैं - ह्रस्व, दीर्घ और प्लुत।"
    },
    {
        question: "प्रश्न 10. जिह्वा के आधार पर स्वर कितने प्रकार के होते हैं?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिह्वा की स्थिति के आधार पर स्वर तीन प्रकार के होते हैं - अग्र, मध्य और पश्च।"
    },
    {
        question: "प्रश्न 11. जिनका उच्चारण ऊपर के दाँतों पर जीभ लगाने से होता है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "कंठ्य", correct: false },
            { text: "दंत्य", correct: true },
            { text: "मूर्धन्य", correct: false },
            { text: "अनुनासिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंत्य वर्णों के उच्चारण में जीभ ऊपरी दाँतों को स्पर्श करती है, जैसे - त, थ, द, ध।"
    },
    {
        question: "प्रश्न 12. 'ए' और 'ऐ' का उच्चारण स्थान कौन-सा है?",
        answers: shuffle([
            { text: "कंठ-तालव्य", correct: true },
            { text: "मूर्धन्य", correct: false },
            { text: "ओष्ठ्य", correct: false },
            { text: "कंठोष्ठ्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ए' और 'ऐ' का उच्चारण कंठ और तालु दोनों की सहायता से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इन्हें कंठ-तालव्य कहते हैं।"
    },
    {
        question: "प्रश्न 13. 'ज्ञ' वर्ण किन वर्णों के संयोग से बना है?",
        answers: shuffle([
            { text: "ग् + ञ", correct: false },
            { text: "ज् + ञ", correct: true },
            { text: "ग् + न", correct: false },
            { text: "क् + ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्ञ' एक संयुक्त व्यंजन है जो 'ज्' और 'ञ' के मेल से बनता है।"
    },
    {
        question: "प्रश्न 14. 'श' ध्वनि का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "तालु", correct: true },
            { text: "दंत", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "दंतालु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श' का उच्चारण करते समय जीभ तालु को स्पर्श करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह तालव्य ध्वनि है।"
    },
    {
        question: "प्रश्न 15. काकल्य वर्ण कौन-सा है?",
        answers: shuffle([
            { text: "य", correct: false },
            { text: "स", correct: false },
            { text: "ह", correct: true },
            { text: "ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ह' को काकल्य वर्ण भी कहा जाता है।"
    },
    {
        question: "प्रश्न 16. 'ट' वर्ग में किस प्रकार के व्यंजन हैं?",
        answers: shuffle([
            { text: "मूर्धन्य", correct: true },
            { text: "तालव्य", correct: false },
            { text: "कंठ्य", correct: false },
            { text: "दंत्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ट' वर्ग के व्यंजनों का उच्चारण मूर्धा से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इन्हें मूर्धन्य व्यंजन कहते हैं।"
    },
    {
        question: "प्रश्न 17. अर्ध स्वर है-",
        answers: shuffle([
            { text: "य, व", correct: true },
            { text: "इ, उ", correct: false },
            { text: "ऋ, ष", correct: false },
            { text: "ऋ, ल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'य' और 'व' का उच्चारण स्वरों और व्यंजनों के बीच का होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इन्हें अर्ध स्वर कहा जाता है।"
    },
    {
        question: "प्रश्न 18. 'घ' का उच्चारण स्थान कौन-सा है?",
        answers: shuffle([
            { text: "कंठ", correct: true },
            { text: "दंत", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "तालु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घ' का उच्चारण कंठ से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह एक कंठ्य व्यंजन है।"
    },
    {
        question: "प्रश्न 19. 'क्ष' वर्ण किसके योग से बना है?",
        answers: shuffle([
            { text: "क् + ष", correct: true },
            { text: "क् + च", correct: false },
            { text: "क् + श", correct: false },
            { text: "क् + छ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्ष' एक संयुक्त व्यंजन है जो 'क्' और 'ष' के योग से बनता है।"
    },
    {
        question: "प्रश्न 20. श, ष, स ....... के अन्तगर्त आते हैं-",
        answers: shuffle([
            { text: "उष्म", correct: true },
            { text: "स्पर्श", correct: false },
            { text: "अन्तस्थ", correct: false },
            { text: "संयुक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन वर्णों के उच्चारण में मुख से गर्म हवा निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इन्हें ऊष्म व्यंजन कहते हैं।"
    },
    {
        question: "प्रश्न 21. निम्नलिखित में अघोष अल्पप्राण ध्वनि कौन-सी है?",
        answers: shuffle([
            { text: "झ", correct: false },
            { text: "ठ", correct: false },
            { text: "ज", correct: false },
            { text: "क, त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क' और 'त' अपने वर्ग के पहले वर्ण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो अघोष और अल्पप्राण दोनों होते हैं।"
    },
    {
        question: "प्रश्न 22. निम्नलिखित में असत्य कथन की पहचान कीजिए-",
        answers: shuffle([
            { text: "व्यंजन वर्गों के तीसरे, चौथे और पाँचवें व्यंजन सघोष हैं।", correct: false },
            { text: "व्यंजन वर्गों के पहले और दूसरे व्यंजन अघोष हैं।", correct: false },
            { text: "समस्त स्वर घोष ध्वनियाँ हैं।", correct: false },
            { text: "सभी विसर्ग सघोष हैं।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विसर्ग (ः) अघोष ध्वनि है।<br><br><i class='fa-solid fa-angles-right icon'></i> सघोष नहीं।"
    },
    {
        question: "प्रश्न 23. निम्नलिखित व्यंजनों में नासिक्य व्यंजन है-",
        answers: shuffle([
            { text: "न्", correct: true },
            { text: "च्", correct: false },
            { text: "द्", correct: false },
            { text: "श्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'न्' का उच्चारण नाक से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह एक नासिक्य व्यंजन है।"
    },
    {
        question: "प्रश्न 24. 'फ' का उच्चारण स्थान है-",
        answers: shuffle([
            { text: "मूर्धा", correct: false },
            { text: "ओष्ठ", correct: true },
            { text: "दन्त", correct: false },
            { text: "कंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फ' का उच्चारण होठों की सहायता से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह ओष्ठ्य व्यंजन है।"
    },
    {
        question: "प्रश्न 25. इनमें संयुक्त व्यंजन कौन-सा है?",
        answers: shuffle([
            { text: "र", correct: false },
            { text: "इ", correct: false },
            { text: "व", correct: false },
            { text: "ज्ञ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्ञ' एक संयुक्त व्यंजन है जो 'ज्' और 'ञ' के मेल से बनता है।"
    },
    {
        question: "प्रश्न 26. हिंदी वर्णमाला में स्वरों की कुल संख्या कितनी है?",
        answers: shuffle([
            { text: "12", correct: false },
            { text: "13", correct: false },
            { text: "10", correct: false },
            { text: "11", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी वर्णमाला में परंपरागत रूप से 11 स्वर माने जाते हैं।"
    },
    {
        question: "प्रश्न 27. अनुनासिक का संबंध होता है -",
        answers: shuffle([
            { text: "केवल नाक से", correct: false },
            { text: "केवल मुँह से", correct: false },
            { text: "नाक और मुँह दोनों से", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनासिक ध्वनियों के उच्चारण में वायु नाक और मुँह दोनों से निकलती है।"
    },
    {
        question: "प्रश्न 28. अनुनासिक व्यंजन कौन-से होते हैं?",
        answers: shuffle([
            { text: "वर्ग के प्रथमाक्षर", correct: false },
            { text: "वर्ग के तृतीयाक्षर", correct: false },
            { text: "वर्ग के चतुर्थाक्षर", correct: false },
            { text: "वर्ग के पंचमाक्षर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का पाँचवाँ अक्षर (ङ, ञ, ण, न, म) अनुनासिक होता है।"
    },
    {
        question: "प्रश्न 29. शुद्ध वर्तनी का चयन कीजिए -",
        answers: shuffle([
            { text: "परिणति", correct: true },
            { text: "परणति", correct: false },
            { text: "परनति", correct: false },
            { text: "परीणति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिणति' शब्द का अर्थ है - परिणाम, नतीजा।"
    },
    {
        question: "प्रश्न 30. निम्नलिखित में से कौन-सा वर्ण उच्चारण की दृष्टि से दंत्य नहीं है?",
        answers: shuffle([
            { text: "त", correct: false },
            { text: "न", correct: false },
            { text: "द", correct: false },
            { text: "ट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ट' एक मूर्धन्य व्यंजन है।<br><br><i class='fa-solid fa-angles-right icon'></i> दंत्य नहीं।"
    },
    {
        question: "प्रश्न 31. 'क्ष' वर्ण किसके योग से बना है?",
        answers: shuffle([
            { text: "क् + ष्", correct: true },
            { text: "क् + च्", correct: false },
            { text: "क् + छ्", correct: false },
            { text: "क् + श्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्ष' एक संयुक्त व्यंजन है जो 'क्' और 'ष्' के योग से बना है।"
    },
    {
        question: "प्रश्न 32. 'य' का उच्चारण स्थान है-",
        answers: shuffle([
            { text: "ओष्ठ", correct: false },
            { text: "दंत", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "तालु", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'य' एक तालव्य व्यंजन है।"
    },
    {
        question: "प्रश्न 33. निम्नलिखित में से कौन-सा पश्च स्वर है?",
        answers: shuffle([
            { text: "आ", correct: true },
            { text: "इ", correct: false },
            { text: "ज", correct: false },
            { text: "ढ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आ' का उच्चारण जीभ के पिछले भाग से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह पश्च स्वर है।"
    },
    {
        question: "प्रश्न 34. देवनागरी लिपि का विकास किससे हुआ है?",
        answers: shuffle([
            { text: "खरोष्ठी", correct: false },
            { text: "ब्राह्मी", correct: true },
            { text: "किलाक्षर", correct: false },
            { text: "हेरेटिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवनागरी लिपि ब्राह्मी लिपि से विकसित हुई है।"
    },
    {
        question: "प्रश्न 35. विसर्ग से बना शब्द कौन-सा है?",
        answers: shuffle([
            { text: "अधः", correct: false },
            { text: "निःस्पृह", correct: true },
            { text: "द्वित्व", correct: false },
            { text: "थोड़ा-सा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निःस्पृह' शब्द में विसर्ग का प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 36. इनमें से कौन-सा वर्ण स्वर है?",
        answers: shuffle([
            { text: "ऐ", correct: true },
            { text: "लृ", correct: false },
            { text: "क्", correct: false },
            { text: "ल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऐ' एक स्वर है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अन्य व्यंजन हैं।"
    },
    {
        question: "प्रश्न 37. निम्नलिखित में से अन्तस्थ व्यंजन कौन-सा है?",
        answers: shuffle([
            { text: "ड", correct: false },
            { text: "य", correct: true },
            { text: "स", correct: false },
            { text: "ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'य, र, ल, व' अन्तस्थ व्यंजन कहलाते हैं।"
    },
    {
        question: "प्रश्न 38. इनमें से 'ओ' का उच्चारण स्थल कौन-सा है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "दन्त्य", correct: false },
            { text: "कंठ-ओष्ठ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ओ' का उच्चारण कंठ और होठों दोनों की सहायता से होता है।"
    },
    {
        question: "प्रश्न 39. च और छ वर्ण का उच्चारण स्थान कौन-सा है?",
        answers: shuffle([
            { text: "तालु", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "ओष्ठ", correct: false },
            { text: "कंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'च' और 'छ' का उच्चारण तालु से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए ये तालव्य व्यंजन हैं।"
    },
    {
        question: "प्रश्न 40. 'ष' वर्ण का उच्चारण स्थान है-",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: true },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ष' एक मूर्धन्य व्यंजन है।"
    },
    {
        question: "प्रश्न 41. तालव्य व्यंजन है-",
        answers: shuffle([
            { text: "ट, ठ, ड, ढ", correct: false },
            { text: "च, छ, ज, झ", correct: true },
            { text: "त, थ, द, ध", correct: false },
            { text: "प, फ, ब, भ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'च' वर्ग के सभी व्यंजन तालव्य होते हैं।"
    },
    {
        question: "प्रश्न 42. इनमें से कौन-सा व्यंजन अल्पप्राण है?",
        answers: shuffle([
            { text: "ख", correct: false },
            { text: "थ", correct: false },
            { text: "च", correct: true },
            { text: "फ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'च' अपने वर्ग का पहला वर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो अल्पप्राण होता है।"
    },
    {
        question: "प्रश्न 43. किस शब्द में 'ऋ' स्वर नहीं है?",
        answers: shuffle([
            { text: "कृपा", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "दृष्टि", correct: false },
            { text: "आज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आज' शब्द में 'ऋ' स्वर का प्रयोग नहीं हुआ है।"
    },
    {
        question: "प्रश्न 44. किन ध्वनियों को 'अनुस्वार' कहा जाता है?",
        answers: shuffle([
            { text: "स्वर के बाद आने वाली नासिक्य ध्वनियाँ", correct: true },
            { text: "स्वतंत्र रूप से उच्चरित ध्वनियाँ", correct: false },
            { text: "स्वर के साथ आने वाली ध्वनियाँ", correct: false },
            { text: "व्यंजन के बाद आने वाली ध्वनियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुस्वार (ं) का प्रयोग स्वर के बाद आने वाली नासिक्य ध्वनि के लिए होता है।"
    },
    {
        question: "प्रश्न 45. 'ओ, औ' किस प्रकार के वर्ण हैं?",
        answers: shuffle([
            { text: "तालव्य", correct: false },
            { text: "मूर्धन्य", correct: false },
            { text: "दन्तोष्ठ्य", correct: false },
            { text: "कंठोष्ठ्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ओ' और 'औ' का उच्चारण कंठ और होठों की सहायता से होता है।"
    },
    {
        question: "प्रश्न 46. हिन्दी वर्णमाला में वर्ण हैं-",
        answers: shuffle([
            { text: "50", correct: false },
            { text: "52", correct: true },
            { text: "54", correct: false },
            { text: "55", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेखन के आधार पर हिन्दी वर्णमाला में 52 वर्ण होते हैं।"
    },
    {
        question: "प्रश्न 47. स्वर ध्वनि के प्रकार हैं-",
        answers: shuffle([
            { text: "दीर्घ", correct: false },
            { text: "प्लुत", correct: false },
            { text: "ह्रस्व", correct: false },
            { text: "उपर्युक्त तीनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मात्रा के आधार पर स्वर तीन प्रकार के होते हैं - ह्रस्व, दीर्घ और प्लुत।"
    },
    {
        question: "प्रश्न 48. इनमें से कौन-सा वर्ण स्पर्श व्यंजन नहीं है?",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "च", correct: false },
            { text: "ट", correct: false },
            { text: "य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'य' एक अन्तस्थ व्यंजन है।"
    },
    {
        question: "प्रश्न 49. निम्न में अर्ध स्वर कहलाता है-",
        answers: shuffle([
            { text: "य", correct: true },
            { text: "म", correct: false },
            { text: "र", correct: false },
            { text: "ल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'य' और 'व' को अर्ध स्वर माना जाता है।"
    },
    {
        question: "प्रश्न 50. महाप्राण ध्वनियाँ व्यंजन वर्ग में किससे संबंधित हैं?",
        answers: shuffle([
            { text: "पहला, दूसरा", correct: false },
            { text: "दूसरा, तीसरा", correct: false },
            { text: "दूसरा, चौथा", correct: true },
            { text: "पहला, चौथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का दूसरा और चौथा व्यंजन महाप्राण होता है।"
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