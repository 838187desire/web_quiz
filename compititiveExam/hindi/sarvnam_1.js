const questions = [
    {
        topHeading: "सर्वनाम पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. \"मैं अपने आप काम कर लूँगा।\" इस वाक्य में 'अपने आप' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक सर्वनाम", correct: false },
            { text: "निजवाचक सर्वनाम", correct: true },
            { text: "निश्चयवाचक सर्वनाम", correct: false },
            { text: "संबंधवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपने आप' शब्द कर्ता के स्वयं के लिए प्रयुक्त हुआ है, इसलिए यह निजवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 2. \"यह मेरी पुस्तक है।\" इस वाक्य में 'यह' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक सर्वनाम", correct: false },
            { text: "निजवाचक सर्वनाम", correct: false },
            { text: "निश्चयवाचक सर्वनाम", correct: true },
            { text: "अनिश्चयवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यह' शब्द किसी निश्चित वस्तु (पुस्तक) की ओर संकेत कर रहा है, इसलिए यह निश्चयवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 3. \"दरवाजे पर कोई खड़ा है।\" इस वाक्य में 'कोई' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक सर्वनाम", correct: false },
            { text: "अनिश्चयवाचक सर्वनाम", correct: true },
            { text: "प्रश्नवाचक सर्वनाम", correct: false },
            { text: "संबंधवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोई' शब्द से किसी निश्चित व्यक्ति का बोध नहीं हो रहा है, इसलिए यह अनिश्चयवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 4. \"जैसा करोगे, वैसा भरोगे।\" इस वाक्य में कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक सर्वनाम", correct: false },
            { text: "निजवाचक सर्वनाम", correct: false },
            { text: "प्रश्नवाचक सर्वनाम", correct: false },
            { text: "संबंधवाचक सर्वनाम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जैसा' और 'वैसा' शब्द एक दूसरे से संबंध बता रहे हैं, इसलिए यह संबंधवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 5. \"आप क्या कर रहे हैं?\" इस वाक्य में 'क्या' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "प्रश्नवाचक सर्वनाम", correct: true },
            { text: "निश्चयवाचक सर्वनाम", correct: false },
            { text: "अनिश्चयवाचक सर्वनाम", correct: false },
            { text: "निजवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्या' शब्द का प्रयोग प्रश्न पूछने के लिए किया गया है, इसलिए यह प्रश्नवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से कौन सा शब्द उत्तम पुरुषवाचक सर्वनाम है?",
        answers: shuffle([
            { text: "तुम", correct: false },
            { text: "वह", correct: false },
            { text: "मैं", correct: true },
            { text: "आप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मैं' शब्द का प्रयोग वक्ता (बोलनेवाला) अपने लिए करता है, इसलिए यह उत्तम पुरुषवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से कौन सा शब्द मध्यम पुरुषवाचक सर्वनाम है?",
        answers: shuffle([
            { text: "हम", correct: false },
            { text: "वे", correct: false },
            { text: "हमारा", correct: false },
            { text: "तुम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तुम' शब्द का प्रयोग श्रोता (सुननेवाले) के लिए किया जाता है, इसलिए यह मध्यम पुरुषवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 8. \"वह कल दिल्ली जाएगा।\" इस वाक्य में 'वह' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुष", correct: false },
            { text: "मध्यम पुरुष", correct: false },
            { text: "अन्य पुरुष", correct: true },
            { text: "निजवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वह' शब्द का प्रयोग किसी तीसरे व्यक्ति के लिए किया गया है जो वहाँ उपस्थित नहीं है, इसलिए यह अन्य पुरुषवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 9. सर्वनाम के कुल कितने भेद होते हैं?",
        answers: shuffle([
            { text: "चार", correct: false },
            { text: "पाँच", correct: false },
            { text: "छः", correct: true },
            { text: "सात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्वनाम के छः मुख्य भेद होते हैं: पुरुषवाचक, निश्चयवाचक, अनिश्चयवाचक, संबंधवाचक, प्रश्नवाचक और निजवाचक।"
    },
    {
        question: "प्रश्न 10. \"मुझे कुछ खाने को दीजिए।\" इस वाक्य में 'कुछ' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक सर्वनाम", correct: false },
            { text: "निजवाचक सर्वनाम", correct: false },
            { text: "अनिश्चयवाचक सर्वनाम", correct: true },
            { text: "प्रश्नवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुछ' शब्द से किसी निश्चित वस्तु का बोध नहीं हो रहा है, इसलिए यह अनिश्चयवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 11. \"जो सोएगा, सो खोएगा।\" इस वाक्य में 'जो' और 'सो' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "संबंधवाचक सर्वनाम", correct: true },
            { text: "निश्चयवाचक सर्वनाम", correct: false },
            { text: "पुरुषवाचक सर्वनाम", correct: false },
            { text: "निजवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जो' और 'सो' एक दूसरे के साथ संबंध स्थापित कर रहे हैं, इसलिए ये संबंधवाचक सर्वनाम हैं।"
    },
    {
        question: "प्रश्न 12. \"आपकी सब राह देख रहे हैं।\" यहाँ 'आप' शब्द कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुष", correct: false },
            { text: "मध्यम पुरुष", correct: true },
            { text: "निजवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'आप' शब्द का प्रयोग सुननेवाले (श्रोता) के लिए आदरसूचक के रूप में हुआ है, इसलिए यह मध्यम पुरुषवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 13. \"वे अच्छे लोग हैं।\" इस वाक्य में 'वे' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुष", correct: false },
            { text: "मध्यम पुरुष", correct: false },
            { text: "अन्य पुरुष", correct: true },
            { text: "निश्चयवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वे' शब्द का प्रयोग उन लोगों के लिए हुआ है जो वक्ता और श्रोता के बीच उपस्थित नहीं हैं, इसलिए यह अन्य पुरुष है।"
    },
    {
        question: "प्रश्न 14. \"यह काम मैं स्वयं कर लूँगा।\" वाक्य में 'स्वयं' है:",
        answers: shuffle([
            { text: "पुरुषवाचक सर्वनाम", correct: false },
            { text: "निजवाचक सर्वनाम", correct: true },
            { text: "संबंधवाचक सर्वनाम", correct: false },
            { text: "निश्चयवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वयं' शब्द कर्ता द्वारा अपने लिए प्रयोग किया गया है, जो निजता का बोध कराता है।"
    },
    {
        question: "प्रश्न 15. \"बाहर कौन आया है?\" इस वाक्य में कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "अनिश्चयवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: true },
            { text: "पुरुषवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कौन' शब्द का प्रयोग प्रश्न पूछने के लिए किया गया है।"
    },
    {
        question: "प्रश्न 16. \"जिसकी लाठी, उसकी भैंस।\" इस वाक्य में कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक सर्वनाम", correct: false },
            { text: "निजवाचक सर्वनाम", correct: false },
            { text: "संबंधवाचक सर्वनाम", correct: true },
            { text: "अनिश्चयवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जिसकी' और 'उसकी' शब्द आपस में संबंध दर्शा रहे हैं।"
    },
    {
        question: "प्रश्न 17. \"हम कल बाजार जाएँगे।\" इस वाक्य में 'हम' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुष", correct: true },
            { text: "मध्यम पुरुष", correct: false },
            { text: "अन्य पुरुष", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हम' उत्तम पुरुष का बहुवचन रूप है, जिसका प्रयोग बोलनेवाला अपने समूह के लिए करता है।"
    },
    {
        question: "प्रश्न 18. \"तू कहाँ जा रहा है?\" इस वाक्य में 'तू' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुष", correct: false },
            { text: "मध्यम पुरुष", correct: true },
            { text: "अन्य पुरुष", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तू' शब्द का प्रयोग सुननेवाले के लिए किया जाता है, यह मध्यम पुरुष है।"
    },
    {
        question: "प्रश्न 19. \"वे जो सामने खड़े हैं, मेरे मित्र हैं।\" इस वाक्य में 'वे' क्या है?",
        answers: shuffle([
            { text: "निजवाचक सर्वनाम", correct: false },
            { text: "निश्चयवाचक सर्वनाम", correct: true },
            { text: "अनिश्चयवाचक सर्वनाम", correct: false },
            { text: "पुरुषवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'वे' शब्द निश्चित व्यक्तियों की ओर संकेत कर रहा है, इसलिए यह निश्चयवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 20. \"शायद किसी ने घंटी बजाई है।\" रेखांकित शब्द में सर्वनाम है:",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: false },
            { text: "पुरुषवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किसी ने' से यह निश्चित नहीं है कि घंटी किसने बजाई, अतः यह अनिश्चयवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 21. संज्ञा के स्थान पर प्रयुक्त होने वाले शब्द क्या कहलाते हैं?",
        answers: shuffle([
            { text: "क्रिया", correct: false },
            { text: "विशेषण", correct: false },
            { text: "सर्वनाम", correct: true },
            { text: "अव्यय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जो शब्द संज्ञा के स्थान पर प्रयोग किए जाते हैं, उन्हें सर्वनाम कहते हैं।"
    },
    {
        question: "प्रश्न 22. \"तुम्हें क्या चाहिए?\" रेखांकित शब्द का सर्वनाम भेद बताइए।",
        answers: shuffle([
            { text: "निजवाचक सर्वनाम", correct: false },
            { text: "प्रश्नवाचक सर्वनाम", correct: true },
            { text: "संबंधवाचक सर्वनाम", correct: false },
            { text: "निश्चयवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्या' शब्द का प्रयोग प्रश्न करने के लिए हुआ है, इसलिए यह प्रश्नवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 23. \"वह अपने आप ही चला गया।\" इस वाक्य में 'अपने आप' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निजवाचक", correct: true },
            { text: "निश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपने आप' कर्ता के निजत्व का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 24. \"ये कौन आ रहा है?\" इस वाक्य में 'ये' किस प्रकार का सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक सर्वनाम", correct: true },
            { text: "अनिश्चयवाचक सर्वनाम", correct: false },
            { text: "संबंधवाचक सर्वनाम", correct: false },
            { text: "पुरुषवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ये' शब्द निकट के किसी निश्चित व्यक्ति या वस्तु की ओर संकेत कर रहा है।"
    },
    {
        question: "प्रश्न 25. \"जो करेगा सो भरेगा।\" रेखांकित शब्द क्या है?",
        answers: shuffle([
            { text: "क्रिया विशेषण", correct: false },
            { text: "संकेतवाचक सर्वनाम", correct: false },
            { text: "संबंधवाचक सर्वनाम", correct: true },
            { text: "गुणवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जो' और 'सो' वाक्यों को जोड़कर संबंध स्थापित करते हैं।"
    },
    {
        question: "प्रश्न 26. \"मैं\", \"हम\", \"मुझे\", \"हमारा\" आदि कौन से पुरुष से संबंधित हैं?",
        answers: shuffle([
            { text: "उत्तम पुरुष", correct: true },
            { text: "मध्यम पुरुष", correct: false },
            { text: "अन्य पुरुष", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी सर्वनाम बोलनेवाले (वक्ता) के लिए प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 27. \"आप भला तो जग भला।\" वाक्य में 'आप' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निजवाचक", correct: true },
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'आप' का अर्थ 'स्वयं' या 'खुद' से है, इसलिए यह निजवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 28. \"दूध में कुछ पड़ा है।\" वाक्य में 'कुछ' सर्वनाम है:",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true },
            { text: "प्रश्नवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुछ' शब्द से किसी निश्चित वस्तु का ज्ञान नहीं हो रहा है।"
    },
    {
        question: "प्रश्न 29. \"यह घोड़ा बहुत तेज दौड़ता है।\" में 'यह' क्या है?",
        answers: shuffle([
            { text: "सार्वनामिक विशेषण", correct: true },
            { text: "निश्चयवाचक सर्वनाम", correct: false },
            { text: "अनिश्चयवाचक सर्वनाम", correct: false },
            { text: "संबंधवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई सर्वनाम संज्ञा शब्द (घोड़ा) से पहले आकर उसकी विशेषता बताए, तो वह सार्वनामिक विशेषण कहलाता है।"
    },
    {
        question: "प्रश्न 30. \"कोई आ रहा है।\" वाक्य में 'कोई' किस प्रकार का सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true },
            { text: "संबंधवाचक", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोई' शब्द से आनेवाले के बारे में निश्चित जानकारी नहीं मिलती।"
    },
    {
        question: "प्रश्न 31. \"तुम\" सर्वनाम का प्रयोग किस पुरुष के लिए होता है?",
        answers: shuffle([
            { text: "उत्तम पुरुष", correct: false },
            { text: "मध्यम पुरुष", correct: true },
            { text: "अन्य पुरुष", correct: false },
            { text: "प्रथम पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तुम' का प्रयोग सुननेवाले (श्रोता) के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 32. \"उसने मुझे बताया कि वह कल आएगा।\" इस वाक्य में कितने सर्वनाम हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'उसने', 'मुझे' और 'वह' - ये तीन सर्वनाम हैं।"
    },
    {
        question: "प्रश्न 33. \"आप कहाँ जा रहे थे?\" वाक्य में 'आप' है:",
        answers: shuffle([
            { text: "निजवाचक सर्वनाम", correct: false },
            { text: "निश्चयवाचक सर्वनाम", correct: false },
            { text: "मध्यम पुरुषवाचक सर्वनाम", correct: true },
            { text: "उत्तम पुरुषवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'आप' का प्रयोग आदर के साथ श्रोता के लिए हुआ है।"
    },
    {
        question: "प्रश्न 34. \"वहाँ कौन-कौन थे?\" में 'कौन-कौन' किस प्रकार का सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: true },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कौन-कौन' शब्द से प्रश्न पूछा जा रहा है।"
    },
    {
        question: "प्रश्न 35. किस वाक्य में संबंधवाचक सर्वनाम है?",
        answers: shuffle([
            { text: "कोई कुछ भी कहे, हम क्या करें?", correct: false },
            { text: "जो मेहनत करता है, वह सफल होता है।", correct: true },
            { text: "यह अच्छा काम नहीं है।", correct: false },
            { text: "आप स्वयं यह काम करें।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'जो' और 'वह' के बीच संबंध है।"
    },
    {
        question: "प्रश्न 36. \"जैसी करनी, वैसी भरनी।\" में कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "निजवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: true },
            { text: "पुरुषवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जैसी' और 'वैसी' शब्दों में संबंध दर्शाया गया है।"
    },
    {
        question: "प्रश्न 37. \"वे घूमने गए हैं।\" इस वाक्य में 'वे' सर्वनाम है:",
        answers: shuffle([
            { text: "उत्तम पुरुष, बहुवचन", correct: false },
            { text: "मध्यम पुरुष, बहुवचन", correct: false },
            { text: "अन्य पुरुष, बहुवचन", correct: true },
            { text: "निजवाचक, बहुवचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वे' सर्वनाम अन्य पुरुष का बहुवचन रूप है।"
    },
    {
        question: "प्रश्न 38. \"मैं खुद ही चला जाऊँगा।\" में 'खुद' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "निजवाचक", correct: true },
            { text: "अनिश्चयवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुद' शब्द का प्रयोग कर्ता स्वयं के लिए कर रहा है।"
    },
    {
        question: "प्रश्न 39. निश्चयवाचक सर्वनाम का उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "कौन", correct: false },
            { text: "कुछ", correct: false },
            { text: "यह", correct: true },
            { text: "जो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यह' किसी निश्चित व्यक्ति या वस्तु का बोध कराता है।"
    },
    {
        question: "प्रश्न 40. \"किसी को बुलाओ।\" वाक्य में 'किसी' सर्वनाम है:",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true },
            { text: "प्रश्नवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किसी' शब्द से निश्चित व्यक्ति का बोध नहीं होता।"
    },
    {
        question: "प्रश्न 41. \"अपना काम स्वयं करो।\" में 'अपना' और 'स्वयं' कौन से सर्वनाम हैं?",
        answers: shuffle([
            { text: "पुरुषवाचक, निजवाचक", correct: false },
            { text: "निश्चयवाचक, पुरुषवाचक", correct: false },
            { text: "निजवाचक, निजवाचक", correct: true },
            { text: "संबंधवाचक, निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'अपना' और 'स्वयं' दोनों ही कर्ता के निजत्व का बोध करा रहे हैं।"
    },
    {
        question: "प्रश्न 42. \"वह बहुत अच्छा लड़का है।\" में 'वह' है:",
        answers: shuffle([
            { text: "निश्चयवाचक सर्वनाम", correct: false },
            { text: "अनिश्चयवाचक सर्वनाम", correct: false },
            { text: "संबंधवाचक सर्वनाम", correct: false },
            { text: "अन्य पुरुषवाचक सर्वनाम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'वह' किसी लड़के (अन्य पुरुष) के लिए प्रयुक्त हुआ है।"
    },
    {
        question: "प्रश्न 43. किस समूह में सभी सर्वनाम प्रश्नवाचक हैं?",
        answers: shuffle([
            { text: "कौन, क्या, किसने", correct: true },
            { text: "जो, कोई, वह", correct: false },
            { text: "जिनका, जो, किनका", correct: false },
            { text: "जिन्होंने, उनपर, उसको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कौन', 'क्या', 'किसने' तीनों शब्दों का प्रयोग प्रश्न पूछने के लिए होता है।"
    },
    {
        question: "प्रश्न 44. \"जो आया है, सो जाएगा।\" इस वाक्य में प्रयुक्त सर्वनाम है:",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चayवाचक", correct: false },
            { text: "संबंधवाचक", correct: true },
            { text: "अनिश्चयवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जो' और 'सो' के बीच संबंध प्रदर्शित हो रहा है।"
    },
    {
        question: "प्रश्न 45. \"तुम्हारी पुस्तक कहाँ है?\" में 'तुम्हारी' है:",
        answers: shuffle([
            { text: "मध्यम पुरुषवाचक सर्वनाम", correct: true },
            { text: "उत्तम पुरुषवाचक सर्वनाम", correct: false },
            { text: "संबंधवाचक सर्वनाम", correct: false },
            { text: "प्रश्नवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तुम्हारी' शब्द 'तुम' सर्वनाम का संबंध कारक रूप है, जो मध्यम पुरुष है।"
    },
    {
        question: "प्रश्न 46. \"कोई तो होगा जो तुम्हारी सहायता करे।\" वाक्य में सर्वनाम है:",
        answers: shuffle([
            { text: "पुरुषवाचक और प्रश्नवाचक", correct: false },
            { text: "अनिश्चयवाचक और संबंधवाचक", correct: true },
            { text: "निश्चयवाचक और निजवाचक", correct: false },
            { text: "केवल अनिश्चयवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'कोई' अनिश्चयवाचक है और 'जो' संबंधवाचक सर्वनाम है।"
    },
    {
        question: "प्रश्न 47. 'आप' शब्द का प्रयोग किस सर्वनाम में होता है?",
        answers: shuffle([
            { text: "केवल मध्यम पुरुष में", correct: false },
            { text: "केवल निजवाचक में", correct: false },
            { text: "मध्यम पुरुष और निजवाचक दोनों में", correct: true },
            { text: "केवल उत्तम पुरुष में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आप' का प्रयोग श्रोता के लिए (मध्यम पुरुष) और 'स्वयं' के अर्थ में (निजवाचक) दोनों तरह से होता है।"
    },
    {
        question: "प्रश्न 48. \"इनमें से कौन सा सर्वनाम का भेद नहीं है?\"",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "गुणवाचक", correct: true },
            { text: "निजवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुणवाचक, विशेषण का एक भेद है, सर्वनाम का नहीं।"
    },
    {
        question: "प्रश्न 49. \"वह गाय है।\" इस वाक्य में 'वह' क्या है?",
        answers: shuffle([
            { text: "अन्य पुरुषवाचक सर्वनाम", correct: false },
            { text: "निश्चयवाचक सर्वनाम", correct: true },
            { text: "सार्वनामिक विशेषण", correct: false },
            { text: "संबंधवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वह' शब्द निश्चित रूप से 'गाय' की ओर संकेत कर रहा है।"
    },
    {
        question: "प्रश्न 50. \"जो जागेगा, सो पावेगा।\" में 'जो' और 'सो' हैं:",
        answers: shuffle([
            { text: "निश्चयवाचक सर्वनाम", correct: false },
            { text: "संबंधवाचक सर्वनाम", correct: true },
            { text: "पुरुषवाचक सर्वनाम", correct: false },
            { text: "अनिश्चयवाचक सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों सर्वनाम एक-दूसरे पर आश्रित हैं और संबंध बताते हैं।"
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