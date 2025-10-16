const questions = [
    {
        topHeading: "एकवचन पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'मंडली' शब्द का वचन क्या है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मंडली' एक समूहवाचक संज्ञा है और इसका प्रयोग एकवचन में होता है।"
    },
    {
        question: "प्रश्न 2. कौन सा शब्द सदैव एकवचन में प्रयुक्त होता है?",
        answers: shuffle([
            { text: "बाल", correct: false },
            { text: "लोग", correct: false },
            { text: "होश", correct: false },
            { text: "जनता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जनता' शब्द समूहवाचक संज्ञा होने के कारण सदैव एकवचन में प्रयुक्त होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'बाल', 'लोग', और 'होश' का प्रयोग बहुवचन में होता है।"
    },
    {
        question: "प्रश्न 3. 'प्रत्येक' शब्द का प्रयोग किस वचन में होता है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों में", correct: false },
            { text: "किसी में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रत्येक', 'हर एक', 'कोई' जैसे शब्दों का प्रयोग सदैव एकवचन में होता है।"
    },
    {
        question: "प्रश्न 4. 'आग' शब्द किस वचन में है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "द्विवचन", correct: false },
            { text: "नित्य बहुवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आग', 'पानी', 'हवा' जैसे शब्द सामान्यतः एकवचन में ही प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से कौन सा शब्द एकवचन है?",
        answers: shuffle([
            { text: "अक्षत", correct: false },
            { text: "दाम", correct: false },
            { text: "आकाश", correct: true },
            { text: "समाचार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आकाश' शब्द सदैव एकवचन में प्रयोग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अक्षत', 'दाम', और 'समाचार' सदैव बहुवचन में प्रयोग होते हैं।"
    },
    {
        question: "प्रश्न 6. 'घी' शब्द का वचन क्या है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घी' एक द्रव्यवाचक संज्ञा है, इसलिए यह सदैव एकवचन में प्रयुक्त होता है।"
    },
    {
        question: "प्रश्न 7. 'सोना' (धातु) शब्द किस वचन का उदाहरण है?",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "नित्य एकवचन", correct: false },
            { text: "नित्य बहुवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी धातुएं (सोना, चाँदी, लोहा) एकवचन में प्रयुक्त होती हैं।"
    },
    {
        question: "प्रश्न 8. 'क्रोध' शब्द का वचन निर्धारित करें।",
        answers: shuffle([
            { text: "सदैव बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "द्विवचन", correct: false },
            { text: "बहुवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाववाचक संज्ञाएं जैसे 'क्रोध', 'प्रेम', 'मोह' आदि एकवचन में होती हैं।"
    },
    {
        question: "प्रश्न 9. 'सहायता' शब्द किस वचन में प्रयोग होता है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों में समान", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सहायता' एक भाववाचक संज्ञा है और इसका प्रयोग एकवचन में होता है।"
    },
    {
        question: "प्रश्न 10. निम्नलिखित शब्दों में से एकवचन शब्द को पहचानिए।",
        answers: shuffle([
            { text: "ओठ", correct: false },
            { text: "प्राण", correct: false },
            { text: "प्रजा", correct: true },
            { text: "आँसू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रजा' शब्द का प्रयोग एकवचन में होता है, जबकि इसका बहुवचन 'प्रजाजन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'ओठ', 'प्राण', 'आँसू' नित्य बहुवचन शब्द हैं।"
    },
    {
        question: "प्रश्न 11. 'वर्षा' शब्द का उचित वचन कौन सा है?",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "सदैव बहुवचन", correct: false },
            { text: "द्विवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वर्षा' शब्द का प्रयोग एकवचन में ही होता है।"
    },
    {
        question: "प्रश्न 12. 'पुलिस' शब्द किस वचन का सूचक है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "सदैव एकवचन", correct: false },
            { text: "सदैव बहुवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुलिस' शब्द समूह का बोध कराने के बावजूद एकवचन में प्रयुक्त होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'पुलिस आ रही है।'"
    },
    {
        question: "प्रश्न 13. 'माल' शब्द का वचन क्या है?",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "नित्य बहुवचन", correct: false },
            { text: "वचन रहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'माल' शब्द एकवचन में प्रयोग होता है, जैसे - 'माल लूट गया'।"
    },
    {
        question: "प्रश्न 14. 'हर' शब्द का प्रयोग होता है -",
        answers: shuffle([
            { text: "एकवचन में", correct: true },
            { text: "बहुवचन में", correct: false },
            { text: "दोनों में", correct: false },
            { text: "किसी में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर', 'प्रत्येक' जैसे शब्द वितरणवाचक होने के कारण हमेशा एकवचन में प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 15. 'क्षमा' शब्द है -",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "नित्य बहुवचन", correct: false },
            { text: "नित्य एकवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षमा' भाववाचक संज्ञा है, जो एकवचन में प्रयुक्त होती है।"
    },
    {
        question: "प्रश्न 16. निम्नलिखित में से एकवचन शब्द छाँटिए।",
        answers: shuffle([
            { text: "केश", correct: false },
            { text: "रोम", correct: false },
            { text: "दूध", correct: true },
            { text: "होश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दूध' द्रव्यवाचक संज्ञा होने के कारण एकवचन है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'केश', 'रोम' और 'होश' बहुवचन हैं।"
    },
    {
        question: "प्रश्न 17. 'दल' शब्द किस वचन में आता है?",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "दोनों में", correct: false },
            { text: "वचन से परे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दल', 'समूह', 'गिरोह' जैसे शब्द समूह का बोध कराने पर भी एकवचन में ही गिने जाते हैं।"
    },
    {
        question: "प्रश्न 18. 'पानी' शब्द का वचन है -",
        answers: shuffle([
            { text: "सदैव बहुवचन", correct: false },
            { text: "सदैव एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पानी' द्रव्यवाचक संज्ञा है और इसका रूप नहीं बदलता, यह सदैव एकवचन में रहता है।"
    },
    {
        question: "प्रश्न 19. 'जनसमूह' शब्द है-",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "द्विवचन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जनसमूह' एक समूहवाचक संज्ञा है और ऐसे शब्द एकवचन में प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 20. 'लुटिया' शब्द का बहुवचन क्या होगा?",
        answers: shuffle([
            { text: "लुटियाँ", correct: true },
            { text: "लुटिए", correct: false },
            { text: "लुटियाएँ", correct: false },
            { text: "लोटिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ प्रश्न एकवचन शब्द 'लुटिया' का बहुवचन पूछ रहा है, जो 'लुटियाँ' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे एकवचन की पहचान भी होती है।"
    },
    {
        question: "प्रश्न 21. 'स्टेशन' शब्द किस वचन में है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों में समान", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विदेशी भाषाओं से आए शब्द, जैसे 'स्टेशन', 'स्कूल', 'कॉलेज', हिंदी में एकवचन में प्रयोग होते हैं।"
    },
    {
        question: "प्रश्न 22. 'हवा' शब्द का वचन बताइए।",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "सदैव बहुवचन", correct: false },
            { text: "द्विवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हवा' शब्द का प्रयोग एकवचन में किया जाता है।"
    },
    {
        question: "प्रश्न 23. 'लड़ाई' शब्द किस वचन का उदाहरण है?",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "नित्य एकवचन", correct: false },
            { text: "नित्य बहुवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़ाई', 'पिटाई', 'सिलाई' जैसी भाववाचक संज्ञाएँ एकवचन होती हैं।"
    },
    {
        question: "प्रश्न 24. निम्नलिखित में से एकवचन शब्द कौन सा है?",
        answers: shuffle([
            { text: "हालचाल", correct: false },
            { text: "लोग", correct: false },
            { text: "सामग्री", correct: true },
            { text: "हस्ताक्षर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सामग्री' शब्द का प्रयोग सदैव एकवचन में होता है।"
    },
    {
        question: "प्रश्न 25. 'भीड़' शब्द का वचन है -",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: false },
            { text: "सदैव एकवचन", correct: true },
            { text: "सदैव बहुवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भीड़' समूहवाचक संज्ञा है, जो हमेशा एकवचन में प्रयुक्त होती है।"
    },
    {
        question: "प्रश्न 26. 'जाति' शब्द का बहुवचन रूप क्या है?",
        answers: shuffle([
            { text: "जातियाँ", correct: true },
            { text: "जातियों", correct: false },
            { text: "जातिए", correct: false },
            { text: "जातिएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रश्न से 'जाति' शब्द के एकवचन होने की पुष्टि होती है।"
    },
    {
        question: "प्रश्न 27. 'क्रय' शब्द किस वचन में है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्रय', 'विक्रय' जैसे शब्द एकवचन में प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 28. 'पब्लिक' शब्द है -",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "द्विवचन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पब्लिक' (जनता) शब्द एकवचन में प्रयोग होता है।"
    },
    {
        question: "प्रश्न 29. 'पीतल' किस वचन का शब्द है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पीतल' एक धातु है और धातुवाचक संज्ञाएँ एकवचन होती हैं।"
    },
    {
        question: "प्रश्न 30. भाववाचक संज्ञाओं का प्रयोग सामान्यतः किस वचन में होता है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों में", correct: false },
            { text: "किसी में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिठास', 'बचपन', 'ईमानदारी' जैसी भाववाचक संज्ञाएँ एकवचन में होती हैं।"
    },
    {
        question: "प्रश्न 31. 'हर कोई' शब्द में कौन सा वचन है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "द्विवचन", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर कोई' का प्रयोग सदैव एकवचन कर्ता के रूप में होता है।"
    },
    {
        question: "प्रश्न 32. 'परिवार' शब्द का वचन क्या है?",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिवार' एक समूहवाचक संज्ञा है और इसका प्रयोग एकवचन में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'मेरा परिवार आया है।'"
    },
    {
        question: "प्रश्न 33. 'मिठास' शब्द है -",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "नित्य बहुवचन", correct: false },
            { text: "द्विवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिठास' एक भाववाचक संज्ञा है, जो सदैव एकवचन में रहती है।"
    },
    {
        question: "प्रश्न 34. 'सत्य' शब्द का वचन बताइए।",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "दोनों में समान", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्य', 'झूठ' जैसी भाववाचक संज्ञाएँ एकवचन में होती हैं।"
    },
    {
        question: "प्रश्न 35. 'चाँदी' शब्द का प्रयोग किस वचन में होता है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी द्रव्यवाचक और धातुवाचक संज्ञाएँ एकवचन में प्रयुक्त होती हैं।"
    },
    {
        question: "प्रश्न 36. इनमें से कौन सा शब्द एकवचन है?",
        answers: shuffle([
            { text: "गण", correct: false },
            { text: "लोग", correct: false },
            { text: "वृंद", correct: false },
            { text: "सेना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सेना' समूहवाचक संज्ञा है और इसका प्रयोग एकवचन में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'गण', 'लोग', 'वृंद' बहुवचन बनाने के लिए प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 37. 'चाय' शब्द का प्रयोग किस वचन में होता है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "द्विवचन", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाय', 'कॉफी' जैसे पेय पदार्थ द्रव्यवाचक संज्ञा होने के कारण एकवचन में होते हैं।"
    },
    {
        question: "प्रश्न 38. 'प्रेम' शब्द का वचन क्या है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रेम' एक भाववाचक संज्ञा है, जो सदैव एकवचन में प्रयुक्त होती है।"
    },
    {
        question: "प्रश्न 39. 'कागज' शब्द का वचन क्या है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कागज' शब्द का प्रयोग एकवचन में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका बहुवचन 'कागजात' होता है।"
    },
    {
        question: "प्रश्न 40. 'गुच्छा' शब्द किस वचन में है?",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "द्विवचन", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुच्छा' (जैसे - चाबियों का गुच्छा) एक समूहवाचक संज्ञा है और एकवचन में प्रयोग होती है।"
    },
    {
        question: "प्रश्न 41. 'दही' शब्द है-",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दही' द्रव्यवाचक संज्ञा होने के कारण एकवचन में प्रयुक्त होता है।"
    },
    {
        question: "प्रश्न 42. 'दया' शब्द का वचन निर्धारित करें।",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों में समान", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दया' एक भाववाचक संज्ञा है और यह एकवचन में होती है।"
    },
    {
        question: "प्रश्न 43. 'लड़का' शब्द का वचन क्या है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़का' एक जातिवाचक संज्ञा है और यहाँ यह एकवचन में है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका बहुवचन 'लड़के' होता है।"
    },
    {
        question: "प्रश्न 44. 'झूठ' शब्द किस वचन में आता है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झूठ' एक भाववाचक संज्ञा है, जो एकवचन में प्रयुक्त होती है।"
    },
    {
        question: "प्रश्न 45. 'धरती' शब्द का वचन है-",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धरती', 'आकाश', 'पाताल' जैसे शब्द एकवचन में प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 46. 'स्टील' शब्द का वचन क्या है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्टील' एक धातु है और धातुवाचक संज्ञाएँ एकवचन होती हैं।"
    },
    {
        question: "प्रश्न 47. 'पृथ्वी' शब्द है-",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पृथ्वी' व्यक्तिवाचक संज्ञा है और यह हमेशा एकवचन में रहती है।"
    },
    {
        question: "प्रश्न 48. 'कलम' शब्द का वचन क्या है?",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कलम' एकवचन शब्द है, इसका बहुवचन 'कलमें' होता है।"
    },
    {
        question: "प्रश्न 49. 'ताश' शब्द का वचन है-",
        answers: shuffle([
            { text: "बहुवचन", correct: false },
            { text: "एकवचन", correct: true },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ताश' एक खेल का नाम है और इसका प्रयोग एकवचन में होता है, जैसे - 'ताश खेला जा रहा है।'"
    },
    {
        question: "प्रश्न 50. 'अनाज' शब्द का वचन बताइए।",
        answers: shuffle([
            { text: "एकवचन", correct: true },
            { text: "बहुवचन", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनाज' शब्द का प्रयोग एकवचन में होता है।"
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