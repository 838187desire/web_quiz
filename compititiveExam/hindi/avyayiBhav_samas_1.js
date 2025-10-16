const questions = [
    {
        topHeading: "अव्ययीभाव समास पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'यथाशक्ति' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष समास", correct: false },
            { text: "द्विगु समास", correct: false },
            { text: "अव्ययीभाव समास", correct: true },
            { text: "द्वंद्व समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'शक्ति के अनुसार' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ प्रथम पद 'यथा' एक अव्यय है और वही प्रधान है, इसलिए यह अव्ययीभाव समास है।"
    },
    {
        question: "प्रश्न 2. जिस समास का पहला पद (पूर्वपद) प्रधान हो और वह अव्यय हो, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "कर्मधारय समास", correct: false },
            { text: "अव्ययीभाव समास", correct: true },
            { text: "तत्पुरुष समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अव्ययीभाव समास की परिभाषा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें पहला पद प्रधान होता है और समस्त पद क्रिया-विशेषण का कार्य करता है।"
    },
    {
        question: "प्रश्न 3. 'प्रतिदिन' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "दिन और दिन", correct: false },
            { text: "प्रत्येक दिन", correct: true },
            { text: "दिन के बाद दिन", correct: false },
            { text: "दिनों में एक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रतिदिन' में 'प्रति' अव्यय है, जिसका अर्थ 'प्रत्येक' या 'हर एक' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः इसका विग्रह 'प्रत्येक दिन' या 'दिन-दिन' होगा।"
    },
    {
        question: "प्रश्न 4. 'रातोंरात' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: false },
            { text: "कर्मधारय समास", correct: false },
            { text: "अव्ययीभाव समास", correct: true },
            { text: "तत्पुरुष समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक ही शब्द की पुनरावृत्ति हो और समस्त पद क्रिया-विशेषण का काम करे, तो वहाँ अव्ययीभाव समास होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'रात ही रात में' होता है।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से कौन सा शब्द अव्ययीभाव समास का उदाहरण है?",
        answers: shuffle([
            { text: "आमरण", correct: true },
            { text: "पीताम्बर", correct: false },
            { text: "नीलकमल", correct: false },
            { text: "दाल-रोटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आमरण' का विग्रह 'मरण तक' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें पूर्वपद 'आ' अव्यय है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्प क्रमशः बहुव्रीहि/कर्मधारय, कर्मधारय और द्वंद्व समास के हैं।"
    },
    {
        question: "प्रश्न 6. 'भरपेट' का समास विग्रह होगा-",
        answers: shuffle([
            { text: "पेट में भरा हुआ", correct: false },
            { text: "पेट जैसा", correct: false },
            { text: "पेट भरकर", correct: true },
            { text: "भरा हुआ पेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भरपेट' में 'भर' एक अव्यय है और इसका अर्थ है 'पेट भरकर'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अव्ययीभाव समास है।"
    },
    {
        question: "प्रश्न 7. 'बेशक' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु समास", correct: false },
            { text: "अव्ययीभाव समास", correct: true },
            { text: "कर्मधारय समास", correct: false },
            { text: "बहुव्रीहि समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बेशक' का विग्रह 'बिना शक के' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'बे' एक उपसर्ग (अव्यय) है।"
    },
    {
        question: "प्रश्न 8. 'अनुरूप' का विग्रह क्या होगा?",
        answers: shuffle([
            { text: "रूप के अनुसार", correct: false },
            { text: "रूप के जैसा", correct: false },
            { text: "रूप के योग्य", correct: true },
            { text: "रूप से युक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुरूप' में 'अनु' अव्यय का अर्थ 'योग्य' या 'पीछे' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'रूप के योग्य' सबसे सटीक विग्रह है।"
    },
    {
        question: "प्रश्न 9. 'हाथोंहाथ' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व समास", correct: false },
            { text: "अव्ययीभाव समास", correct: true },
            { text: "तत्पुरुष समास", correct: false },
            { text: "कर्मधारय समास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'हाथ ही हाथ में' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ संज्ञा शब्द 'हाथ' की पुनरावृत्ति हुई है, अतः यह अव्ययीभाव समास है।"
    },
    {
        question: "प्रश्न 10. 'आजीवन' शब्द किस समास का उदाहरण है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: false },
            { text: "अव्ययीभाव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आजीवन' का विग्रह 'जीवन भर' या 'जीवन-पर्यंत' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' अव्यय है।"
    },
    {
        question: "प्रश्न 11. 'यथासंभव' का सही समास विग्रह है-",
        answers: shuffle([
            { text: "जैसा संभव हो", correct: false },
            { text: "जितना संभव हो", correct: true },
            { text: "संभव के अनुसार", correct: false },
            { text: "संभव और संभव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथा' अव्यय का अर्थ 'के अनुसार' होता है, इसलिए 'यथासंभव' का अर्थ है 'जितना संभव हो'।",
    },
    {
        question: "प्रश्न 12. किस विकल्प में अव्ययीभाव समास नहीं है?",
        answers: shuffle([
            { text: "प्रत्येक", correct: false },
            { text: "आजन्म", correct: false },
            { text: "यथाक्रम", correct: false },
            { text: "आपबीती", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आपबीती' का विग्रह 'आप पर बीती' है, जो कि 'में, पर' विभक्ति के कारण तत्पुरुष समास (अधिकरण) है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी अव्ययीभाव समास हैं।"
    },
    {
        question: "प्रश्न 13. 'प्रत्यक्ष' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रत्यक्ष' का विग्रह 'अक्षि (आँखों) के सामने' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें 'प्रति' अव्यय है।"
    },
    {
        question: "प्रश्न 14. 'घर-घर' का समास विग्रह होगा-",
        answers: shuffle([
            { text: "घर और घर", correct: false },
            { text: "प्रत्येक घर", correct: true },
            { text: "घर में घर", correct: false },
            { text: "घर के बाद घर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शब्दों की पुनरावृत्ति होने के कारण यह अव्ययीभाव समास है, जिसका अर्थ 'हर एक घर' होता है।"
    },
    {
        question: "प्रश्न 15. 'निर्विवाद' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'बिना विवाद के' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'निर्' एक उपसर्ग (अव्यय) है।"
    },
    {
        question: "प्रश्न 16. 'यथोचित' का समास विग्रह कीजिए।",
        answers: shuffle([
            { text: "उचित के अनुसार", correct: false },
            { text: "जो उचित है", correct: false },
            { text: "जितना उचित हो", correct: true },
            { text: "उचित है जो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यथोचित (यथा + उचित) का अर्थ है 'जितना उचित हो'।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें 'यथा' अव्यय है।"
    },
    {
        question: "प्रश्न 17. 'उपगंगम' में समास है-",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपगंगम' संस्कृत का शब्द है, जिसका विग्रह 'गंगा के समीप' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'उप' अव्यय का प्रयोग हुआ है, इसलिए यह अव्ययीभाव समास है।"
    },
    {
        question: "प्रश्न 18. 'बेखटके' शब्द किस समास का उदाहरण है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'बिना खटके के' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'बे' उपसर्ग (अव्यय) के योग से बना है।"
    },
    {
        question: "प्रश्न 19. अव्ययीभाव समास में कौन-सा पद प्रधान होता है?",
        answers: shuffle([
            { text: "उत्तर पद", correct: false },
            { text: "पूर्व पद", correct: true },
            { text: "दोनों पद", correct: false },
            { text: "कोई अन्य पद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अव्ययीभाव समास में पहला पद (पूर्व पद) प्रधान होता है और वह प्रायः अव्यय होता है।"
    },
    {
        question: "प्रश्न 20. 'प्रत्येक' का समास विग्रह है-",
        answers: shuffle([
            { text: "एक के बाद एक", correct: false },
            { text: "एक-एक", correct: false },
            { text: "हर एक", correct: true },
            { text: "एक और एक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक (प्रति + एक) में 'प्रति' अव्यय है, जिसका अर्थ 'हर एक' होता है।"
    },
    {
        question: "प्रश्न 21. 'यथामति' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'मति के अनुसार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'यथा' अव्यय है।"
    },
    {
        question: "प्रश्न 22. 'कानोंकान' बात फैल गई। रेखांकित शब्द में समास है-",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कानोंकान' का विग्रह 'कान ही कान में' है।<br><br><i class='fa-solid fa-angles-right icon'></i> शब्दों की पुनरावृत्ति के कारण यह अव्ययीभाव समास है।"
    },
    {
        question: "प्रश्न 23. 'निडर' शब्द में समास है-",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निडर' का विग्रह 'बिना डर के' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'नि' उपसर्ग (अव्यय) का प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 24. 'आमरण' का सही विग्रह क्या है?",
        answers: shuffle([
            { text: "मरण के बाद", correct: false },
            { text: "मरण तक", correct: true },
            { text: "जब तक मरण न हो", correct: false },
            { text: "मरण से पहले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' अव्यय का अर्थ 'तक' या 'पर्यंत' है।"
    },
    {
        question: "प्रश्न 25. 'लापता' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लापता' का अर्थ है 'जिसका पता न हो'।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'ला' एक विदेशी उपसर्ग (अव्यय) है।"
    },
    {
        question: "प्रश्न 26. 'साल-दर-साल' में समास है-",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'साल के बाद साल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> पुनरावृत्ति सूचक शब्दों में अव्ययीभाव समास होता है।"
    },
    {
        question: "प्रश्न 27. किस शब्द में अव्ययीभाव समास है?",
        answers: shuffle([
            { text: "सज्जन", correct: false },
            { text: "निस्संदेह", correct: true },
            { text: "नवरत्न", correct: false },
            { text: "राजपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निस्संदेह' का विग्रह 'बिना संदेह के' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'निस्' अव्यय है।"
    },
    {
        question: "प्रश्न 28. 'बाकायदा' का समास विग्रह है-",
        answers: shuffle([
            { text: "बिना कायदे के", correct: false },
            { text: "कायदे के अनुसार", correct: true },
            { text: "कायदा और कानून", correct: false },
            { text: "कायदे से रहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'बा' उपसर्ग का अर्थ 'के साथ' या 'के अनुसार' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अव्ययीभाव समास है।"
    },
    {
        question: "प्रश्न 29. 'बीचोंबीच' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'बीच ही बीच में' है।<br><br><i class='fa-solid fa-angles-right icon'></i> शब्द की पुनरावृत्ति के कारण यह अव्ययीभाव समास है।"
    },
    {
        question: "प्रश्न 30. 'यथासमय' का समास विग्रह क्या होगा?",
        answers: shuffle([
            { text: "समय के बाद", correct: false },
            { text: "समय पर", correct: false },
            { text: "समय के अनुसार", correct: true },
            { text: "समय से पहले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथा' अव्यय का अर्थ 'के अनुसार' होता है, इसलिए इसका विग्रह 'समय के अनुसार' है।"
    },
    {
        question: "प्रश्न 31. 'सपरिवार' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सपरिवार' का विग्रह 'परिवार के साथ' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'स' उपसर्ग (अव्यय) का प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 32. 'दिनोंदिन' शब्द में समास है-",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'दिन ही दिन में' या 'दिन के बाद दिन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पुनरावृत्ति वाला अव्ययीभाव समास है।"
    },
    {
        question: "प्रश्न 33. 'यथेच्छा' का सही विग्रह है-",
        answers: shuffle([
            { text: "इच्छा के अनुसार", correct: true },
            { text: "जैसी इच्छा", correct: false },
            { text: "इच्छा से", correct: false },
            { text: "जितनी इच्छा हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यथेच्छा (यथा + इच्छा) का विग्रह 'इच्छा के अनुसार' होता है।"
    },
    {
        question: "प्रश्न 34. 'यथापूर्व' का विग्रह है-",
        answers: shuffle([
            { text: "पूर्व के अनुसार", correct: false },
            { text: "जैसा पहले था", correct: true },
            { text: "पूर्व और अपर", correct: false },
            { text: "पहले जैसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'जैसा पहले था' या 'पूर्व के अनुसार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'यथा' अव्यय है।"
    },
    {
        question: "प्रश्न 35. 'अनुदिन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'दिन-प्रतिदिन' या 'हर दिन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अनु' अव्यय का प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 36. 'पल-पल' में समास बताइए।",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: false },
            { text: "अव्ययीभाव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'हर पल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ अव्यय शब्द की पुनरावृत्ति हुई है।"
    },
    {
        question: "प्रश्न 37. 'बेकाम' का समास विग्रह है-",
        answers: shuffle([
            { text: "काम से रहित", correct: false },
            { text: "काम के बिना", correct: true },
            { text: "बुरा काम", correct: false },
            { text: "काम वाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बेकाम' में 'बे' उपसर्ग का अर्थ 'बिना' है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह अव्ययीभाव समास है।"
    },
    {
        question: "प्रश्न 38. 'प्रत्युपकार' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'उपकार के बदले किया गया उपकार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'प्रति' अव्यय है।"
    },
    {
        question: "प्रश्न 39. 'यथाविधि' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "विधि के अनुसार", correct: true },
            { text: "विधि में", correct: false },
            { text: "विधि जैसी", correct: false },
            { text: "विधि और विधान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथा' अव्यय के कारण यह अव्ययीभाव समास है, जिसका अर्थ 'के अनुसार' होता है।"
    },
    {
        question: "प्रश्न 40. 'हररोज़' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'प्रत्येक रोज़' या 'हर दिन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'हर' अव्यय है।"
    },
    {
        question: "प्रश्न 41. 'सकुशल' शब्द में समास है-",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'कुशलता के साथ' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'स' उपसर्ग (अव्यय) है।"
    },
    {
        question: "प्रश्न 42. 'समक्ष' का विग्रह है-",
        answers: shuffle([
            { text: "अक्षि के सामने", correct: true },
            { text: "आँख के साथ", correct: false },
            { text: "अक्षि के साथ", correct: false },
            { text: "अक्ष से युक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समक्ष (स + अक्ष) का विग्रह 'अक्षि (आँख) के सामने' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'स' अव्यय का प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 43. 'पलक झपकाए बिना' के लिए समस्त पद होगा-",
        answers: shuffle([
            { text: "निष्पलक", correct: false },
            { text: "अपलक", correct: false },
            { text: "निर्निमेष", correct: true },
            { text: "पलकहीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निर्निमेष' का विग्रह 'बिना निमेष (पलक झपकाए) के' होता है, जो अव्ययीभाव समास है।"
    },
    {
        question: "प्रश्न 44. 'गली-गली' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संज्ञा शब्द 'गली' की पुनरावृत्ति होने के कारण यह अव्ययीभाव समास है, जिसका अर्थ 'प्रत्येक गली' है।"
    },
    {
        question: "प्रश्न 45. 'प्रतिक्षण' का सही समास विग्रह है-",
        answers: shuffle([
            { text: "हर क्षण", correct: true },
            { text: "क्षण के बाद", correct: false },
            { text: "क्षण में", correct: false },
            { text: "एक क्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रतिक्षण' में 'प्रति' अव्यय का अर्थ 'हर एक' है।"
    },
    {
        question: "प्रश्न 46. 'यथास्थान' में समास है-",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'स्थान के अनुसार' या 'जो स्थान निर्धारित है' होता है।"
    },
    {
        question: "प्रश्न 47. 'बेफायदा' का समास विग्रह क्या होगा?",
        answers: shuffle([
            { text: "फायदे से रहित", correct: false },
            { text: "फायदे के बिना", correct: true },
            { text: "फायदा नहीं है", correct: false },
            { text: "बुरा फायदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बे' उपसर्ग का अर्थ 'बिना' होता है, इसलिए यह अव्ययीभाव समास है।"
    },
    {
        question: "प्रश्न 48. 'अनजाने' का विग्रह क्या होगा?",
        answers: shuffle([
            { text: "जाने के बिना", correct: false },
            { text: "बिना जाने", correct: true },
            { text: "जो न जाने", correct: false },
            { text: "अजनबी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनजाने' में 'अन' उपसर्ग (अव्यय) है, जिसका अर्थ है 'बिना'।"
    },
    {
        question: "प्रश्न 49. 'एकाएक' में समास है-",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका विग्रह 'एक के बाद एक, अचानक' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अव्ययीभाव समास का उदाहरण है।"
    },
    {
        question: "प्रश्न 50. वह समास जिसमें समस्त पद क्रिया विशेषण का काम करता है, वह है-",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अव्ययीभाव समास से बने शब्द वाक्य में क्रिया की विशेषता बताते हैं, जैसे - वह 'प्रतिदिन' आता है।"
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