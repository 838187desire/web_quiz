const questions = [
    {
        topHeading: "क्रिया-विशेषण पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जो शब्द क्रिया की विशेषता बताते हैं, उन्हें क्या कहते हैं?",
        answers: shuffle([
            { text: "विशेषण", correct: false },
            { text: "सर्वनाम", correct: false },
            { text: "क्रिया-विशेषण", correct: true },
            { text: "संबंधबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिया की विशेषता बताने वाले अविकारी शब्दों को क्रिया-विशेषण कहते हैं।"
    },
    {
        question: "प्रश्न 2. 'घोड़ा तेज़ दौड़ता है।' इस वाक्य में 'तेज़' क्या है?",
        answers: shuffle([
            { text: "रीतिवाचक क्रिया-विशेषण", correct: true },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तेज़' शब्द क्रिया (दौड़ना) के होने की रीति या ढंग बता रहा है, इसलिए यह रीतिवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 3. 'वह कल आएगा।' वाक्य में 'कल' किस प्रकार का क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "स्थानवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "रीतिवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कल' शब्द क्रिया (आएगा) के होने का समय बता रहा है, इसलिए यह कालवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 4. 'बच्चे बाहर खेल रहे हैं।' रेखांकित शब्द कौन-सा क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "रीतिवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "स्थानवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाहर' शब्द क्रिया (खेल रहे हैं) के होने का स्थान बता रहा है, अतः यह स्थानवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 5. 'तुम बहुत बोलते हो।' इस वाक्य में 'बहुत' क्या है?",
        answers: shuffle([
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: true },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहुत' शब्द क्रिया (बोलते हो) की मात्रा या परिमाण बता रहा है, इसलिए यह परिमाणवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 6. अर्थ के अनुसार क्रिया-विशेषण के कितने भेद होते हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्थ के अनुसार क्रिया-विशेषण के चार मुख्य भेद होते हैं- कालवाचक, स्थानवाचक, रीतिवाचक और परिमाणवाचक।"
    },
    {
        question: "प्रश्न 7. 'वह अचानक आ गया।' वाक्य में 'अचानक' क्या है?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "रीतिवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अचानक' शब्द क्रिया (आ गया) के होने का तरीका बता रहा है, अतः यह रीतिवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 8. 'मैं प्रतिदिन व्यायाम करता हूँ।' रेखांकित शब्द है-",
        answers: shuffle([
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false },
            { text: "कालवाचक क्रिया-विशेषण", correct: true },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रतिदिन' शब्द क्रिया (करता हूँ) के होने की आवृत्ति या समय का बोध करा रहा है, अतः यह कालवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 9. 'कृपया यहाँ बैठिए।' वाक्य में क्रिया-विशेषण कौन-सा है?",
        answers: shuffle([
            { text: "कृपया", correct: false },
            { text: "यहाँ", correct: true },
            { text: "बैठिए", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यहाँ' शब्द बैठने की क्रिया के स्थान को इंगित कर रहा है, इसलिए यह स्थानवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 10. 'वह कम खाता है।' में कौन-सा क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "परिमाणवाचक", correct: true },
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कम' शब्द खाने की क्रिया की मात्रा का बोध करा रहा है, अतः यह परिमाणवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 11. रीतिवाचक क्रिया-विशेषण का पता करने के लिए क्रिया के साथ कौन-सा प्रश्नवाचक शब्द लगाते हैं?",
        answers: shuffle([
            { text: "कब?", correct: false },
            { text: "कहाँ?", correct: false },
            { text: "कैसे?", correct: true },
            { text: "कितना?", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिया के साथ 'कैसे?' प्रश्न करने पर जो उत्तर मिलता है, वह रीतिवाचक क्रिया-विशेषण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'वह कैसे चलता है?' उत्तर - 'धीरे-धीरे'।"
    },
    {
        question: "प्रश्न 12. 'आज बरसात होगी।' में 'आज' कौन-सा क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आज' शब्द क्रिया (होगी) के होने का समय बता रहा है, अतः यह कालवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 13. 'ईश्वर सर्वत्र व्याप्त है।' रेखांकित शब्द है-",
        answers: shuffle([
            { text: "स्थानवाचक क्रिया-विशेषण", correct: true },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्वत्र' (सब जगह) शब्द क्रिया (व्याप्त है) के स्थान का बोध करा रहा है, इसलिए यह स्थानवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 14. 'वह धीरे-धीरे चलता है।' इस वाक्य में 'धीरे-धीरे' शब्द है-",
        answers: shuffle([
            { text: "क्रिया", correct: false },
            { text: "विशेषण", correct: false },
            { text: "क्रिया-विशेषण", correct: true },
            { text: "सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धीरे-धीरे' शब्द 'चलता है' क्रिया की रीति या ढंग बता रहा है, अतः यह क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 15. परिमाणवाचक क्रिया-विशेषण का पता करने के लिए क्रिया के साथ कौन-सा प्रश्नवाचक शब्द लगाते हैं?",
        answers: shuffle([
            { text: "कब?", correct: false },
            { text: "कहाँ?", correct: false },
            { text: "कैसे?", correct: false },
            { text: "कितना?", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिया के साथ 'कितना?' प्रश्न करने पर जो उत्तर मिलता है, वह परिमाणवाचक क्रिया-विशेषण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'वह कितना खाता है?' उत्तर - 'बहुत'।"
    },
    {
        question: "प्रश्न 16. इनमें से कौन-सा शब्द कालवाचक क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "अब", correct: true },
            { text: "उधर", correct: false },
            { text: "ऐसे", correct: false },
            { text: "अत्यंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अब' शब्द समय का बोध कराता है, जबकि 'उधर' स्थान का, 'ऐसे' रीति का और 'अत्यंत' परिमाण का बोध कराता है।"
    },
    {
        question: "प्रश्न 17. 'तुम उधर मत जाओ।' में 'उधर' कौन-सा क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "रीतिवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उधर' शब्द क्रिया (जाओ) के होने की दिशा या स्थान का बोध करा रहा है, अतः यह स्थानवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 18. 'वह निसंदेह सफल होगा।' में कौन-सा क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "रीतिवाचक (निश्चयबोधक)", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निसंदेह' शब्द क्रिया के होने की रीति में निश्चय का भाव प्रकट कर रहा है, इसलिए यह रीतिवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 19. 'पानी थोड़ा-थोड़ा बरस रहा है।' रेखांकित शब्द है-",
        answers: shuffle([
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थोड़ा-थोड़ा' शब्द बरसने की क्रिया की मात्रा या परिमाण को दर्शा रहा है, अतः यह परिमाणवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 20. 'गाड़ी अभी-अभी आई है।' में 'अभी-अभी' है-",
        answers: shuffle([
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "कालवाचक क्रिया-विशेषण", correct: true },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभी-अभी' शब्द क्रिया (आई है) के होने का समय बता रहा है, इसलिए यह कालवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 21. इनमें से कौन-सा शब्द स्थानवाचक क्रिया-विशेषण नहीं है?",
        answers: shuffle([
            { text: "भीतर", correct: false },
            { text: "आज", correct: true },
            { text: "ऊपर", correct: false },
            { text: "यहाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आज' कालवाचक क्रिया-विशेषण है, जबकि 'भीतर', 'ऊपर' और 'यहाँ' स्थानवाचक क्रिया-विशेषण हैं।"
    },
    {
        question: "प्रश्न 22. 'वह शायद कल आएगा।' वाक्य में 'शायद' है-",
        answers: shuffle([
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक (अनिश्चयबोधक) क्रिया-विशेषण", correct: true },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शायद' शब्द क्रिया के होने की रीति में अनिश्चितता का भाव प्रकट कर रहा है, इसलिए यह रीतिवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 23. 'बच्चा रात भर रोता रहा।' में क्रिया-विशेषण है-",
        answers: shuffle([
            { text: "रीतिवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रात भर' शब्द रोने की क्रिया की अवधि (समय) बता रहा है, इसलिए यह कालवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 24. 'तुम किधर जा रहे हो?' में 'किधर' कौन-सा क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "प्रश्नवाचक स्थानवाचक", correct: true },
            { text: "प्रश्नवाचक कालवाचक", correct: false },
            { text: "प्रश्नवाचक रीतिवाचक", correct: false },
            { text: "प्रश्नवाचक परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किधर' शब्द क्रिया के स्थान के बारे में प्रश्न कर रहा है, अतः यह प्रश्नवाचक स्थानवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 25. 'जितना खाओ, उतना पचाओ।' में 'जितना-उतना' कौन-सा क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "रीतिवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जितना-उतना' शब्द खाने और पचाने की क्रिया के परिमाण (मात्रा) का बोध करा रहे हैं।"
    },
    {
        question: "प्रश्न 26. 'वह मन-ही-मन मुस्कुराया।' में क्रिया-विशेषण का भेद बताइए।",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "रीतिवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मन-ही-मन' शब्द मुस्कुराने की क्रिया की रीति या ढंग बता रहा है।"
    },
    {
        question: "प्रश्न 27. 'वह दिन में सोता है।' में 'दिन में' है-",
        answers: shuffle([
            { text: "कालवाचक क्रिया-विशेषण", correct: true },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिन में' वाक्यांश क्रिया (सोता है) के होने का समय बता रहा है, अतः यह कालवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 28. 'तुम मेरे सामने बैठो।' में 'सामने' किस प्रकार का क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "रीतिवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सामने' शब्द क्रिया (बैठो) के स्थान का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 29. 'वह बिल्कुल थक गया है।' में 'बिल्कुल' है-",
        answers: shuffle([
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: true },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिल्कुल' शब्द थकने की क्रिया के परिमाण (मात्रा) को बता रहा है।"
    },
    {
        question: "प्रश्न 30. 'मैं अवश्य आऊँगा।' में 'अवश्य' कौन-सा क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false },
            { text: "रीतिवाचक (निश्चयबोधक)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवश्य' शब्द क्रिया के होने की रीति में निश्चय का भाव प्रकट कर रहा है।"
    },
    {
        question: "प्रश्न 31. इनमें से कौन-सा रीतिवाचक क्रिया-विशेषण नहीं है?",
        answers: shuffle([
            { text: "सहसा", correct: false },
            { text: "कदापि", correct: false },
            { text: "यथासंभव", correct: false },
            { text: "आजकल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आजकल' कालवाचक क्रिया-विशेषण है, जबकि अन्य तीनों रीतिवाचक हैं।"
    },
    {
        question: "प्रश्न 32. 'वह हमेशा सच बोलता है।' वाक्य में 'हमेशा' है-",
        answers: shuffle([
            { text: "कालवाचक क्रिया-विशेषण", correct: true },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हमेशा' शब्द क्रिया के होने के समय (आवृत्ति) का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 33. 'पक्षी ऊपर उड़ रहे हैं।' में 'ऊपर' है-",
        answers: shuffle([
            { text: "स्थानवाचक क्रिया-विशेषण", correct: true },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऊपर' शब्द उड़ने की क्रिया के स्थान का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 34. 'सचमुच' किस प्रकार का क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "परिमाणवाचक", correct: false },
            { text: "रीतिवाचक (निश्चयबोधक)", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सचमुच' शब्द क्रिया के होने की रीति में निश्चय का भाव प्रकट करता है।"
    },
    {
        question: "प्रश्न 35. 'केवल', 'बस', 'काफी' किस प्रकार के क्रिया-विशेषण हैं?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "रीतिवाचक", correct: false },
            { text: "परिमाणवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी शब्द क्रिया की मात्रा या परिमाण का बोध कराते हैं, अतः परिमाणवाचक क्रिया-विशेषण हैं।"
    },
    {
        question: "प्रश्न 36. 'वह इधर-उधर देख रहा था।' रेखांकित शब्द है-",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "रीतिवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इधर-उधर' शब्द देखने की क्रिया के स्थान का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 37. 'तुमने ठीक कहा।' में 'ठीक' है-",
        answers: shuffle([
            { text: "रीतिवाचक (स्वीकारबोधक) क्रिया-विशेषण", correct: true },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठीक' शब्द क्रिया के प्रति स्वीकृति का भाव प्रकट कर रहा है, अतः यह रीतिवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 38. 'जब तुम आओगे, तब मैं जाऊँगा।' में क्रिया-विशेषण उपवाक्य कौन-सा है?",
        answers: shuffle([
            { text: "जब तुम आओगे", correct: true },
            { text: "तब मैं जाऊँगा", correct: false },
            { text: "मैं जाऊँगा", correct: false },
            { text: "तुम आओगे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जब तुम आओगे' यह उपवाक्य मुख्य उपवाक्य 'मैं जाऊँगा' की क्रिया के होने का समय बता रहा है, अतः यह कालवाचक क्रिया-विशेषण उपवाक्य है।"
    },
    {
        question: "प्रश्न 39. 'वह परसों गया।' में 'परसों' है-",
        answers: shuffle([
            { text: "स्थानवाचक", correct: false },
            { text: "रीतिवाचक", correct: false },
            { text: "कालवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परसों' शब्द क्रिया (गया) के होने का समय बता रहा है।"
    },
    {
        question: "प्रश्न 40. 'तुम क्यों रो रहे हो?' में 'क्यों' कौन-सा क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "स्थानवाचक", correct: false },
            { text: "कालवाचक", correct: false },
            { text: "रीतिवाचक (प्रश्नवाचक)", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्यों' शब्द क्रिया के होने का कारण पूछ रहा है, जो रीतिवाचक क्रिया-विशेषण के अंतर्गत आता है।"
    },
    {
        question: "प्रश्न 41. 'जरा', 'तिल-तिल', 'लगभग' किस प्रकार के क्रिया-विशेषण हैं?",
        answers: shuffle([
            { text: "परिमाणवाचक", correct: true },
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "रीतिवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी शब्द क्रिया की मात्रा या परिमाण का बोध कराते हैं।"
    },
    {
        question: "प्रश्न 42. 'मैं अभी आ रहा हूँ।' में 'अभी' है-",
        answers: shuffle([
            { text: "कालवाचक", correct: true },
            { text: "स्थानवाचक", correct: false },
            { text: "रीतिवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभी' शब्द क्रिया (आ रहा हूँ) के होने का समय बता रहा है।"
    },
    {
        question: "प्रश्न 43. 'दाएँ-बाएँ' किस प्रकार का क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "रीतिवाचक", correct: false },
            { text: "स्थानवाचक (दिशाबोधक)", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दाएँ-बाएँ' शब्द क्रिया के होने की दिशा (स्थान) का बोध करा रहे हैं।"
    },
    {
        question: "प्रश्न 44. 'वह झूठ-मूठ रोने लगा।' में 'झूठ-मूठ' है-",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: false },
            { text: "रीतिवाचक", correct: true },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झूठ-मूठ' शब्द रोने की क्रिया की रीति या ढंग बता रहा है।"
    },
    {
        question: "प्रश्न 45. 'उतना ही खाओ जितना पचे।' में 'जितना' है-",
        answers: shuffle([
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: true },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जितना' शब्द पचने की क्रिया की मात्रा का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 46. 'वह निरंतर प्रयास करता रहा।' रेखांकित पद है-",
        answers: shuffle([
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false },
            { text: "कालवाचक क्रिया-विशेषण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निरंतर' शब्द क्रिया के होने की अवधि (समय) का बोध करा रहा है, अतः यह कालवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 47. 'पेड़ के नीचे मत बैठो।' में 'नीचे' है-",
        answers: shuffle([
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "संबंधबोधक अव्यय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब स्थानवाचक शब्द संज्ञा (पेड़) के साथ 'के' विभक्ति के बाद आए, तो वह संबंधबोधक अव्यय कहलाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि वाक्य होता 'नीचे मत बैठो' तो यह क्रिया-विशेषण होता।"
    },
    {
        question: "प्रश्न 48. 'वह इसलिए नहीं आया क्योंकि वह बीमार था।' में 'इसलिए' क्या है?",
        answers: shuffle([
            { text: "समुच्चयबोधक", correct: true },
            { text: "संबंधबोधक", correct: false },
            { text: "क्रिया-विशेषण", correct: false },
            { text: "विस्मयादिबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इसलिए' शब्द दो उपवाक्यों को जोड़ने का कार्य कर रहा है, अतः यह समुच्चयबोधक है।"
    },
    {
        question: "प्रश्न 49. इनमें से कौन-सा शब्द यौगिक क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "यहाँ", correct: false },
            { text: "वहाँ", correct: false },
            { text: "अब", correct: false },
            { text: "मन से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जो क्रिया-विशेषण किसी दूसरे शब्द में प्रत्यय या पद जोड़ने से बनते हैं, वे यौगिक क्रिया-विशेषण कहलाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'मन से' एक यौगिक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 50. 'वह अक्सर देर से आता है।' में 'अक्सर' है-",
        answers: shuffle([
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "कालवाचक (आवृत्तिबोधक) क्रिया-विशेषण", correct: true },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अक्सर' शब्द क्रिया के बार-बार होने (आवृत्ति) का बोध करा रहा है, जो कालवाचक क्रिया-विशेषण का एक भेद है।"
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