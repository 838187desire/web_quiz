const questions = [
    {
        topHeading: "अरबी-फ़ारसी उपसर्गों पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1: 'कमज़ोर' शब्द में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "कम", correct: true },
            { text: "कब्ज़", correct: false },
            { text: "ज़ोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमज़ोर' शब्द फ़ारसी के 'कम' उपसर्ग और 'ज़ोर' मूल शब्द से मिलकर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'कम' उपसर्ग का अर्थ 'थोड़ा' या 'हीन' होता है।"
    },
    {
        question: "प्रश्न 2: निम्नलिखित में से किस शब्द में 'कम' उपसर्ग का प्रयोग नहीं हुआ है?",
        answers: shuffle([
            { text: "कमअक्ल", correct: false },
            { text: "कमसिन", correct: false },
            { text: "कमर", correct: true },
            { text: "कमबख़्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमर' एक रूढ़ शब्द है, यह शरीर का एक अंग है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें उपसर्ग का प्रयोग नहीं हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्दों में 'कम' उपसर्ग लगा है।"
    },
    {
        question: "प्रश्न 3: 'खुशबू' शब्द में प्रयुक्त उपसर्ग 'खुश' किस भाषा का है?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "हिंदी", correct: false },
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुश' उपसर्ग फ़ारसी भाषा का है, जिसका अर्थ 'अच्छा' या 'श्रेष्ठ' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'खुशबू' का अर्थ है 'अच्छी गंध'।"
    },
    {
        question: "प्रश्न 4: 'खुशहाल' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "खु", correct: false },
            { text: "शहा", correct: false },
            { text: "खुश", correct: true },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुशहाल' शब्द 'खुश' उपसर्ग और 'हाल' मूल शब्द के योग से बना है, जिसका अर्थ है 'अच्छी हालत में'।"
    },
    {
        question: "प्रश्न 5: 'गैरहाजिर' शब्द में 'गैर' उपसर्ग का क्या अर्थ है?",
        answers: shuffle([
            { text: "अपना", correct: false },
            { text: "निषेध या भिन्न", correct: true },
            { text: "भीतर", correct: false },
            { text: "साथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गैर' एक अरबी उपसर्ग है जिसका अर्थ 'निषेध, अभाव या भिन्न' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'गैरहाजिर' का अर्थ है 'जो हाजिर न हो'।"
    },
    {
        question: "प्रश्न 6: निम्नलिखित में से 'गैर' उपसर्ग से बना शब्द कौन-सा है?",
        answers: shuffle([
            { text: "गैरिक", correct: false },
            { text: "गैरकानूनी", correct: true },
            { text: "गैरव", correct: false },
            { text: "गैरेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गैरकानूनी' शब्द 'गैर' उपसर्ग और 'कानूनी' शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्प उपसर्ग रहित हैं या उनमें 'गैर' उपसर्ग नहीं है।"
    },
    {
        question: "प्रश्न 7: 'खुशमिजाज' में 'खुश' उपसर्ग का क्या अर्थ है?",
        answers: shuffle([
            { text: "बुरा", correct: false },
            { text: "कम", correct: false },
            { text: "अच्छा", correct: true },
            { text: "बिना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुश' उपसर्ग का अर्थ 'अच्छा' होता है।"
    },
    {
        question: "प्रश्न 8: 'दरअसल' में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "द", correct: false },
            { text: "दर", correct: true },
            { text: "असल", correct: false },
            { text: "सल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दरअसल' शब्द 'दर' (में) उपसर्ग और 'असल' (वास्तव) मूल शब्द से बना है, जिसका अर्थ है 'वास्तव में'।"
    },
    {
        question: "प्रश्न 9: 'नापसंद' शब्द में 'ना' उपसर्ग किस अर्थ में प्रयुक्त हुआ है?",
        answers: shuffle([
            { text: "अच्छा", correct: false },
            { text: "अधिक", correct: false },
            { text: "अभाव", correct: true },
            { text: "अपना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ना' एक फ़ारसी उपसर्ग है जिसका प्रयोग 'अभाव' या 'नहीं' के अर्थ में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'नापसंद' का अर्थ है 'जो पसंद न हो'।"
    },
    {
        question: "प्रश्न 10: किस शब्द में 'ना' उपसर्ग नहीं लगा है?",
        answers: shuffle([
            { text: "नाराज", correct: false },
            { text: "नालायक", correct: false },
            { text: "नाजुक", correct: true },
            { text: "नासमझ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नाजुक' एक मूल शब्द है, इसमें 'ना' उपसर्ग नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्दों में 'ना' उपसर्ग का प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 11: 'फिलहाल' शब्द में 'फि' उपसर्ग किस भाषा का है?",
        answers: shuffle([
            { text: "हिंदी", correct: false },
            { text: "संस्कृत", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फिलहाल' शब्द में अरबी का 'फि' उपसर्ग है, जिसका अर्थ 'में' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> (फि + अल + हाल = फिलहाल)"
    },
    {
        question: "प्रश्न 12: 'बदनाम' शब्द में उपसर्ग बताइए।",
        answers: shuffle([
            { text: "ब", correct: false },
            { text: "बद", correct: true },
            { text: "नाम", correct: false },
            { text: "बना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बदनाम' शब्द फ़ारसी के 'बद' उपसर्ग और 'नाम' मूल शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'बद' का अर्थ 'बुरा' होता है।"
    },
    {
        question: "प्रश्न 13: 'गैर-सरकारी' में उपसर्ग है-",
        answers: shuffle([
            { text: "गैर", correct: true },
            { text: "गै", correct: false },
            { text: "सर", correct: false },
            { text: "कारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गैर-सरकारी' में 'गैर' उपसर्ग है, जिसका अर्थ 'भिन्न' है।"
    },
    {
        question: "प्रश्न 14: 'बाइज़्ज़त' शब्द में 'बा' उपसर्ग का क्या अर्थ है?",
        answers: shuffle([
            { text: "बिना", correct: false },
            { text: "बुरा", correct: false },
            { text: "अनुसार या सहित", correct: true },
            { text: "बाहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बा' फ़ारसी का उपसर्ग है, जिसका अर्थ 'सहित' या 'अनुसार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'बाइज़्ज़त' का अर्थ है 'इज्ज़त के साथ'।"
    },
    {
        question: "प्रश्न 15: 'बामुलहज़ा' में प्रयुक्त उपसर्ग कौन-सा है?",
        answers: shuffle([
            { text: "बाम", correct: false },
            { text: "ब", correct: false },
            { text: "बा", correct: true },
            { text: "लहज़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बामुलहज़ा' शब्द 'बा' उपसर्ग और 'मुलहज़ा' मूल शब्द से बना है, जिसका अर्थ है 'लिहाज के साथ'।"
    },
    {
        question: "प्रश्न 16: 'बदस्तूर' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "बद", correct: false },
            { text: "ब", correct: true },
            { text: "दस्तूर", correct: false },
            { text: "बद्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बदस्तूर' शब्द 'ब' उपसर्ग (अर्थ: के अनुसार) और 'दस्तूर' (रीति) मूल शब्द से बना है।"
    },
    {
        question: "प्रश्न 17: 'बेईमान' शब्द में कौन-सा उपसर्ग लगा है?",
        answers: shuffle([
            { text: "ब", correct: false },
            { text: "बे", correct: true },
            { text: "बेई", correct: false },
            { text: "मान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बेईमान' शब्द 'बे' उपसर्ग और 'ईमान' मूल शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'बे' एक फ़ारसी उपसर्ग है जिसका अर्थ 'बिना' या 'अभाव' होता है।"
    },
    {
        question: "प्रश्न 18: निम्नलिखित में से किस शब्द में 'बे' उपसर्ग नहीं है?",
        answers: shuffle([
            { text: "बेचारा", correct: false },
            { text: "बेवकूफ़", correct: false },
            { text: "बेचान", correct: true },
            { text: "बेसमझ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बेचान' शब्द बेचने की क्रिया से संबंधित है, इसमें 'बे' उपसर्ग नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी विकल्पों में 'बे' उपसर्ग का प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 19: 'लापरवाह' शब्द में 'ला' उपसर्ग किस भाषा से आया है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "हिंदी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ला' अरबी भाषा का उपसर्ग है, जिसका अर्थ 'बिना' या 'रहित' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'लापरवाह' का अर्थ है 'जिसे कोई परवाह न हो'।"
    },
    {
        question: "प्रश्न 20: 'लावारिस' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "ला", correct: true },
            { text: "लाव", correct: false },
            { text: "वारिस", correct: false },
            { text: "स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लावारिस' शब्द 'ला' उपसर्ग और 'वारिस' मूल शब्द से मिलकर बना है।"
    },
    {
        question: "प्रश्न 21: 'सरताज' शब्द में 'सर' उपसर्ग का अर्थ है-",
        answers: shuffle([
            { text: "बुरा", correct: false },
            { text: "सहित", correct: false },
            { text: "मुख्य", correct: true },
            { text: "अभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर' फ़ारसी का उपसर्ग है जिसका अर्थ 'मुख्य' या 'श्रेष्ठ' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सरताज' का अर्थ है 'मुख्य ताज' या 'सरदार'।"
    },
    {
        question: "प्रश्न 22: 'सरकार' शब्द में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "सर", correct: true },
            { text: "कार", correct: false },
            { text: "सका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सरकार' शब्द में 'सर' (मुख्य) उपसर्ग और 'कार' (काम) शब्द जुड़ा है।"
    },
    {
        question: "प्रश्न 23: 'हमदर्द' में प्रयुक्त उपसर्ग है-",
        answers: shuffle([
            { text: "हम", correct: true },
            { text: "हम्", correct: false },
            { text: "दर्द", correct: false },
            { text: "र्द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हमदर्द' शब्द 'हम' उपसर्ग और 'दर्द' मूल शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'हम' फ़ारसी का उपसर्ग है जिसका अर्थ 'साथ' या 'बराबर' होता है।"
    },
    {
        question: "प्रश्न 24: 'हम' उपसर्ग से बना शब्द कौन-सा नहीं है?",
        answers: shuffle([
            { text: "हमराही", correct: false },
            { text: "हमउम्र", correct: false },
            { text: "हमशक्ल", correct: false },
            { text: "हमारा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हमारा' 'हम' सर्वनाम का संबंध कारक रूप है, इसमें उपसर्ग नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्दों में 'हम' उपसर्ग है।"
    },
    {
        question: "प्रश्न 25: 'हरदिन' शब्द में 'हर' उपसर्ग किस अर्थ में प्रयुक्त हुआ है?",
        answers: shuffle([
            { text: "प्रत्येक", correct: true },
            { text: "आधा", correct: false },
            { text: "कम", correct: false },
            { text: "बिना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर' फ़ारसी का उपसर्ग है, जिसका अर्थ 'प्रत्येक' या 'सभी' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'हरदिन' का अर्थ है 'प्रत्येक दिन'।"
    },
    {
        question: "प्रश्न 26: 'हर' उपसर्ग युक्त शब्द कौन-सा है?",
        answers: shuffle([
            { text: "हरियाली", correct: false },
            { text: "हरजाई", correct: true },
            { text: "हरकारा", correct: false },
            { text: "हरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हरजाई' शब्द में 'हर' उपसर्ग है, जिसका अर्थ है 'हर जगह जाने वाला'।"
    },
    {
        question: "प्रश्न 27: 'बनाम' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "बन", correct: false },
            { text: "ब", correct: true },
            { text: "नाम", correct: false },
            { text: "बना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बनाम' में 'ब' उपसर्ग है, जिसका अर्थ 'विरुद्ध' या 'साथ' होता है।"
    },
    {
        question: "प्रश्न 28: 'अलबत्ता' शब्द में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अल्", correct: false },
            { text: "अल", correct: true },
            { text: "बत्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अलबत्ता' शब्द में 'अल' उपसर्ग और 'बत्ता' मूल शब्द है।"
    },
    {
        question: "प्रश्न 29: 'ऐन' उपसर्ग का प्रयोग किस शब्द में हुआ है?",
        answers: shuffle([
            { text: "ऐनक", correct: false },
            { text: "ऐनुल", correct: false },
            { text: "ऐनवक्त", correct: true },
            { text: "ऐयार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऐन वक्त' में 'ऐन' उपसर्ग का प्रयोग हुआ है, जिसका अर्थ 'ठीक' या 'उसी समय' है।"
    },
    {
        question: "प्रश्न 30: 'बिलकुल' शब्द में 'बिल' किस भाषा का उपसर्ग है?",
        answers: shuffle([
            { text: "फ़ारसी", correct: false },
            { text: "अरबी", correct: true },
            { text: "तुर्की", correct: false },
            { text: "हिंदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिल' अरबी भाषा का उपसर्ग है, जिसका अर्थ 'के साथ' होता है।"
    },
    {
        question: "प्रश्न 31: 'बिला' उपसर्ग का क्या अर्थ है?",
        answers: shuffle([
            { text: "सहित", correct: false },
            { text: "बिना", correct: true },
            { text: "बुरा", correct: false },
            { text: "मुख्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिला' अरबी का उपसर्ग है और इसका अर्थ 'बिना' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - बिलाशक, बिलावजह।"
    },
    {
        question: "प्रश्न 32: 'बिलाशक' में उपसर्ग है-",
        answers: shuffle([
            { text: "बि", correct: false },
            { text: "बिल", correct: false },
            { text: "बिला", correct: true },
            { text: "शक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिलाशक' शब्द 'बिला' उपसर्ग और 'शक' मूल शब्द से बना है, जिसका अर्थ है 'बिना शक के'।"
    },
    {
        question: "प्रश्न 33: 'नेक' उपसर्ग से बना शब्द है-",
        answers: shuffle([
            { text: "अनेक", correct: false },
            { text: "नेकर", correct: false },
            { text: "नेकनीयत", correct: true },
            { text: "नेवला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नेकनीयत' शब्द 'नेक' (भला) उपसर्ग और 'नियत' मूल शब्द से बना है।"
    },
    {
        question: "प्रश्न 34: 'बदकिस्मत' में 'बद' उपसर्ग का अर्थ है-",
        answers: shuffle([
            { text: "अच्छी", correct: false },
            { text: "बुरी", correct: true },
            { text: "साथ", correct: false },
            { text: "बिना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बद' उपसर्ग का अर्थ 'बुरा' होता है, अतः 'बदकिस्मत' का अर्थ है 'बुरी किस्मत वाला'।"
    },
    {
        question: "प्रश्न 35: 'दरमियान' में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "द", correct: false },
            { text: "दर", correct: true },
            { text: "दरमी", correct: false },
            { text: "यान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दरमियान' शब्द में 'दर' उपसर्ग है, जिसका अर्थ 'में' होता है।"
    },
    {
        question: "प्रश्न 36: 'नामुमकिन' शब्द में उपसर्ग और मूल शब्द हैं-",
        answers: shuffle([
            { text: "ना + मुमकिन", correct: true },
            { text: "नामु + किन", correct: false },
            { text: "न + अमुमकिन", correct: false },
            { text: "नाम + मुमकिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस शब्द में 'ना' (नहीं) उपसर्ग और 'मुमकिन' (संभव) मूल शब्द है।"
    },
    {
        question: "प्रश्न 37: 'बाअदब' शब्द में उपसर्ग का अर्थ है-",
        answers: shuffle([
            { text: "अदब के बिना", correct: false },
            { text: "अदब के साथ", correct: true },
            { text: "बुरा अदब", correct: false },
            { text: "बहुत अदब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बा' उपसर्ग का अर्थ 'के साथ' होता है, इसलिए 'बाअदब' का अर्थ 'अदब के साथ' है।"
    },
    {
        question: "प्रश्न 38: 'बरखास्त' में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "ब", correct: false },
            { text: "बर", correct: true },
            { text: "बख्", correct: false },
            { text: "बरख्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बरखास्त' शब्द में 'बर' उपसर्ग है, जिसका अर्थ 'ऊपर' या 'बाहर' होता है।"
    },
    {
        question: "प्रश्न 39: 'बेघर' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "ब", correct: false },
            { text: "बे", correct: true },
            { text: "र", correct: false },
            { text: "घर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बेघर' शब्द में 'बे' (बिना) उपसर्ग और 'घर' मूल शब्द है।"
    },
    {
        question: "प्रश्न 40: 'बेगुनाह' में प्रयुक्त उपसर्ग 'बे' किस भाषा का है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "हिंदी", correct: false },
            { text: "संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बे' उपसर्ग फ़ारसी भाषा का है।"
    },
    {
        question: "प्रश्न 41: 'हमसफ़र' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "ह", correct: false },
            { text: "हम", correct: true },
            { text: "सफ़र", correct: false },
            { text: "हम्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हमसफ़र' शब्द में 'हम' (साथ) उपसर्ग और 'सफ़र' (यात्रा) मूल शब्द है।"
    },
    {
        question: "प्रश्न 42: 'हरसाल' में प्रयुक्त उपसर्ग 'हर' किस भाषा का है?",
        answers: shuffle([
            { text: "अरबी", correct: false },
            { text: "फ़ारसी", correct: true },
            { text: "हिंदी", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर' उपसर्ग फ़ारसी भाषा का है, जिसका अर्थ 'प्रत्येक' होता है।"
    },
    {
        question: "प्रश्न 43: 'खुशनसीब' में उपसर्ग है-",
        answers: shuffle([
            { text: "खु", correct: false },
            { text: "श", correct: false },
            { text: "खुश", correct: true },
            { text: "नसीब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुशनसीब' में 'खुश' (अच्छा) उपसर्ग और 'नसीब' (भाग्य) मूल शब्द है।"
    },
    {
        question: "प्रश्न 44: 'गैरजिम्मेदार' में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "गै", correct: false },
            { text: "गैर", correct: true },
            { text: "ज़िम्मे", correct: false },
            { text: "दार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस शब्द में 'गैर' (नहीं) उपसर्ग और 'जिम्मेदार' मूल शब्द है।"
    },
    {
        question: "प्रश्न 45: 'लाजवाब' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "ल", correct: false },
            { text: "ला", correct: true },
            { text: "लाज", correct: false },
            { text: "ब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लाजवाब' में 'ला' उपसर्ग है, जिसका अर्थ है 'जिसका कोई जवाब न हो'।"
    },
    {
        question: "प्रश्न 46: 'कमसिन' शब्द में 'कम' का अर्थ है-",
        answers: shuffle([
            { text: "अधिक", correct: false },
            { text: "बराबर", correct: false },
            { text: "थोड़ा", correct: true },
            { text: "बुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमसिन' में 'कम' का अर्थ है 'थोड़ा' और 'सिन' का अर्थ है 'उम्र'।"
    },
    {
        question: "प्रश्न 47: 'हमवतन' में 'हम' उपसर्ग का अर्थ है-",
        answers: shuffle([
            { text: "बराबर", correct: true },
            { text: "प्रत्येक", correct: false },
            { text: "बुरा", correct: false },
            { text: "बिना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हमवतन' का अर्थ है 'एक ही वतन के'।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'हम' का अर्थ 'समान' या 'बराबर' है।"
    },
    {
        question: "प्रश्न 48: 'बदशक्ल' में प्रयुक्त उपसर्ग है-",
        answers: shuffle([
            { text: "ब", correct: false },
            { text: "बद", correct: true },
            { text: "शक्ल", correct: false },
            { text: "बद्श", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बदशक्ल' में 'बद' (बुरा) उपसर्ग और 'शक्ल' (चेहरा) मूल शब्द है।"
    },
    {
        question: "प्रश्न 49: 'बेशर्म' में 'बे' उपसर्ग का अर्थ है-",
        answers: shuffle([
            { text: "सहित", correct: false },
            { text: "रहित", correct: true },
            { text: "अधिक", correct: false },
            { text: "मुख्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बे' उपसर्ग का अर्थ 'बिना' या 'रहित' होता है, अतः 'बेशर्म' का अर्थ है 'शर्म से रहित'।"
    },
    {
        question: "प्रश्न 50: 'लाचार' में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "ल", correct: false },
            { text: "ला", correct: true },
            { text: "चार", correct: false },
            { text: "लाचा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लाचार' में 'ला' (बिना) उपसर्ग और 'चार' (उपाय) मूल शब्द है।"
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