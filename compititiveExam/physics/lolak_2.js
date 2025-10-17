const questions = [
    {
        topHeading: "लोलक पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. क्या एक सरल लोलक निर्वात में दोलन कर सकता है?",
        answers: shuffle([
            { text: "नहीं, उसे हवा की आवश्यकता होती है।", correct: false },
            { text: "हाँ, और उसके दोलन अवमंदित नहीं होंगे।", correct: true },
            { text: "हाँ, लेकिन वह तुरंत रुक जाएगा।", correct: false },
            { text: "केवल यदि उसका द्रव्यमान बहुत अधिक हो।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निर्वात में वायु प्रतिरोध नहीं होता, इसलिए एक आदर्श लोलक बिना ऊर्जा क्षय के हमेशा के लिए दोलन करता रहेगा।"
    },
    {
        question: "प्रश्न 2. एक \"युग्मित लोलक\" (Coupled Pendulum) क्या है?",
        answers: shuffle([
            { text: "एक बहुत भारी लोलक", correct: false },
            { text: "एक बहुत लंबा लोलक", correct: false },
            { text: "दो या दो से अधिक लोलक जो एक दूसरे से जुड़े होते हैं और ऊर्जा का आदान-प्रदान कर सकते हैं", correct: true },
            { text: "एक सेकंड लोलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसमें एक लोलक की ऊर्जा दूसरे में स्थानांतरित होती है और फिर वापस, जिससे एक जटिल गति उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 3. यदि एक सरल लोलक के गोलक को उसी आकार के लेकिन अधिक घनत्व वाले गोलक से बदल दिया जाए, तो आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: true },
            { text: "यह घनत्व पर निर्भर करेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल गोलक के द्रव्यमान, घनत्व या पदार्थ पर निर्भर नहीं करता है।"
    },
    {
        question: "प्रश्न 4. एक लोलक का उपयोग किस उपकरण में समय मापने के लिए किया जाता है?",
        answers: shuffle([
            { text: "डिजिटल घड़ी", correct: false },
            { text: "स्टॉपवॉच", correct: false },
            { text: "दादाजी घड़ी (Grandfather Clock)", correct: true },
            { text: "क्वार्ट्ज घड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारंपरिक लंबी केस वाली घड़ियों में समय के नियमन के लिए एक लंबे लोलक का उपयोग किया जाता है।"
    },
    {
        question: "प्रश्न 5. किसी लोलक का आवर्त काल शून्य होने का क्या अर्थ होगा?",
        answers: shuffle([
            { text: "लोलक बहुत तेजी से दोलन कर रहा है।", correct: false },
            { text: "लोलक दोलन नहीं कर रहा है।", correct: false },
            { text: "यह एक असंभव स्थिति है।", correct: true },
            { text: "लोलक की लंबाई अनंत है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल एक भौतिक समय अंतराल है और यह शून्य नहीं हो सकता।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके लिए अनंत 'g' या शून्य लंबाई की आवश्यकता होगी, जो भौतिक रूप से संभव नहीं है।"
    },
    {
        question: "प्रश्न 6. एक लोलक की लंबाई L है। निलंबन बिंदु से कितनी दूरी पर एक कील लगाई जाए ताकि लोलक के एक तरफ का आवर्त काल दूसरी तरफ का आधा हो जाए?",
        answers: shuffle([
            { text: "L/2", correct: false },
            { text: "L/4", correct: false },
            { text: "3L/4", correct: true },
            { text: "2L/3", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल को आधा करने के लिए, लंबाई को एक-चौथाई (L/4) करना होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः कील को ऊपर से 3L/4 दूरी पर लगाना होगा ताकि शेष लंबाई L/4 हो।"
    },
    {
        question: "प्रश्न 7. एक झूले पर बैठी लड़की झूल रही है। यदि वह अपनी गोद में एक भारी बैग रख ले, तो आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: true },
            { text: "शून्य हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल द्रव्यमान पर निर्भर नहीं करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बैग रखने से कुल द्रव्यमान बढ़ता है, लेकिन गुरुत्व केंद्र और प्रभावी लंबाई लगभग वही रहती है।"
    },
    {
        question: "प्रश्न 8. एक पेंडुलम का उपयोग निम्न का मान निर्धारित करने के लिए किया जा सकता है:",
        answers: shuffle([
            { text: "पृथ्वी का द्रव्यमान", correct: false },
            { text: "वायु का घनत्व", correct: false },
            { text: "गुरुत्वीय त्वरण (g)", correct: true },
            { text: "पृथ्वी की त्रिज्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि हम एक लोलक की लंबाई (L) और उसके आवर्त काल (T) को सटीक रूप से मापते हैं, तो हम सूत्र T=2π√(L/g) का उपयोग करके 'g' की गणना कर सकते हैं।"
    },
    {
        question: "प्रश्न 9. दोलन करते लोलक के लिए कौन सी राशि शून्य नहीं हो सकती, यदि वह गति में है?",
        answers: shuffle([
            { text: "वेग", correct: false },
            { text: "त्वरण", correct: false },
            { text: "कुल यांत्रिक ऊर्जा", correct: true },
            { text: "विस्थापन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि लोलक गति में है, तो उसमें ऊर्जा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> वेग, त्वरण और विस्थापन गति के दौरान विभिन्न बिंदुओं पर शून्य हो सकते हैं, लेकिन कुल ऊर्जा स्थिर और अशून्य रहती है।"
    },
    {
        question: "प्रश्न 10. यदि एक लोलक का आयाम समय के साथ रैखिक रूप से घटता है, तो यह किस प्रकार के घर्षण को इंगित करता है?",
        answers: shuffle([
            { text: "वायु प्रतिरोध", correct: false },
            { text: "श्यान घर्षण", correct: false },
            { text: "शुष्क घर्षण (कूलम्ब घर्षण)", correct: true },
            { text: "कोई घर्षण नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य वायु प्रतिरोध (श्यान घर्षण) के कारण आयाम चरघातांकी रूप से घटता है, जबकि सतहों के बीच शुष्क घर्षण के कारण यह रैखिक रूप से घटता है।"
    },
    {
        question: "प्रश्न 11. एक लोलक के दोलन की आवृत्ति 2 हर्ट्ज है। इसका आवर्त काल क्या है?",
        answers: shuffle([
            { text: "2 सेकंड", correct: false },
            { text: "0.5 सेकंड", correct: true },
            { text: "4 सेकंड", correct: false },
            { text: "1 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल आवृत्ति का व्युत्क्रम है: T=1/f=1/2=0.5 सेकंड।"
    },
    {
        question: "प्रश्न 12. \"सरल लोलक\" एक...",
        answers: shuffle([
            { text: "वास्तविक भौतिक वस्तु है।", correct: false },
            { text: "एक आदर्श भौतिक मॉडल है।", correct: true },
            { text: "एक प्रकार की घड़ी है।", correct: false },
            { text: "एक माप की इकाई है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वास्तविक दुनिया में, कोई भी डोरी पूरी तरह से भारहीन या अवितान्य नहीं होती है और न ही गोलक एक बिंदु द्रव्यमान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गणना को सरल बनाने के लिए एक आदर्श स्थिति है।"
    },
    {
        question: "प्रश्न 13. एक लोलक का आवर्त काल पृथ्वी की सतह पर T है। पृथ्वी की त्रिज्या के बराबर ऊंचाई पर इसका आवर्त काल क्या होगा?",
        answers: shuffle([
            { text: "T", correct: false },
            { text: "2T", correct: true },
            { text: "T/2", correct: false },
            { text: "4T", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की त्रिज्या (R) के बराबर ऊँचाई पर, g का मान सतह का 1/4 हो जाता है (g′=g/4)।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि T∝1/√g, आवर्त काल √4=2 गुना, यानी 2T हो जाएगा।"
    },
    {
        question: "प्रश्न 14. किसी लोलक के लिए, ऊर्जा का कौन सा रूप हमेशा गैर-ऋणात्मक (धनात्मक या शून्य) होता है?",
        answers: shuffle([
            { text: "A) स्थितिज ऊर्जा", correct: false },
            { text: "B) गतिज ऊर्जा", correct: false },
            { text: "C) कुल यांत्रिक ऊर्जा", correct: false },
            { text: "B) और C) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा (1/2mv²) हमेशा गैर-ऋणात्मक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> स्थितिज ऊर्जा संदर्भ बिंदु के आधार पर ऋणात्मक हो सकती है, लेकिन कुल ऊर्जा (यदि दोलन हो रहा है) धनात्मक होती है।"
    },
    {
        question: "प्रश्न 15. यदि एक लोलक की लंबाई 1% बढ़ा दी जाए, तो उसके आवर्त काल में लगभग कितनी वृद्धि होगी?",
        answers: shuffle([
            { text: "1%", correct: false },
            { text: "2%", correct: false },
            { text: "0.5%", correct: true },
            { text: "4%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटी वृद्धियों के लिए, हम सन्निकटन का उपयोग कर सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि T∝L^(1/2), प्रतिशत परिवर्तन (ΔT/T) = (1/2)(ΔL/L)=(1/2)(1%)=0.5%।"
    },
    {
        question: "प्रश्न 16. एक कार एक वृत्ताकार मोड़ पर एकसमान गति से मुड़ रही है। छत से लटका लोलक...",
        answers: shuffle([
            { text: "ऊर्ध्वाधर रहेगा।", correct: false },
            { text: "मोड़ के केंद्र की ओर झुकेगा।", correct: false },
            { text: "मोड़ के केंद्र से बाहर की ओर झुकेगा।", correct: true },
            { text: "आगे की ओर झुकेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोड़ पर आवश्यक अभिकेंद्रीय त्वरण के कारण, लोलक पर बाहर की ओर एक अपकेंद्री छद्म बल लगता है, जिससे वह बाहर की ओर झुक जाता है।"
    },
    {
        question: "प्रश्न 17. लोलक द्वारा एक पूर्ण दोलन में तय की गई दूरी...",
        answers: shuffle([
            { text: "शून्य होती है।", correct: false },
            { text: "आयाम की दोगुनी होती है।", correct: false },
            { text: "आयाम की चार गुनी होती है।", correct: true },
            { text: "आयाम के बराबर होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण दोलन में, लोलक माध्य स्थिति से एक चरम तक (A), वापस माध्य तक (A), दूसरे चरम तक (A), और फिर वापस माध्य तक (A) जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुल दूरी = 4A।"
    },
    {
        question: "प्रश्न 18. लोलक द्वारा एक पूर्ण दोलन में कुल विस्थापन कितना होता है?",
        answers: shuffle([
            { text: "शून्य", correct: true },
            { text: "A", correct: false },
            { text: "2A", correct: false },
            { text: "4A", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण दोलन के बाद, लोलक अपनी प्रारंभिक स्थिति में वापस आ जाता है, इसलिए इसका कुल विस्थापन शून्य होता है।"
    },
    {
        question: "प्रश्न 19. 'काटेम्प्टेनिया' का लोलक (Kater's Pendulum) का उपयोग किसलिए किया जाता है?",
        answers: shuffle([
            { text: "समय का सटीक मापन करने के लिए।", correct: false },
            { text: "'g' का बहुत सटीक मान ज्ञात करने के लिए।", correct: true },
            { text: "पृथ्वी के घूर्णन को प्रदर्शित करने के लिए।", correct: false },
            { text: "अवमंदन का अध्ययन करने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक प्रतिवर्ती भौतिक लोलक है जिसे इस तरह से डिज़ाइन किया गया है कि गुरुत्व केंद्र के स्थान को जाने बिना 'g' का अत्यंत सटीक मापन किया जा सके।"
    },
    {
        question: "प्रश्न 20. क्या लोलक का आवर्त काल डोरी के पदार्थ पर निर्भर करता है?",
        answers: shuffle([
            { text: "हाँ, हमेशा।", correct: false },
            { text: "नहीं, कभी नहीं।", correct: false },
            { text: "केवल यदि डोरी अवितान्य न हो।", correct: true },
            { text: "केवल यदि डोरी भारी हो।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि डोरी में खिंचाव (वितान्यता) है, तो गति के दौरान उसकी प्रभावी लंबाई बदल सकती है, जिससे आवर्त काल प्रभावित होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> आदर्श लोलक में इसे नगण्य माना जाता है।"
    },
    {
        question: "प्रश्न 21. एक लोलक का आवर्त काल 4 सेकंड है। इसकी आवृत्ति क्या होगी?",
        answers: shuffle([
            { text: "4 हर्ट्ज", correct: false },
            { text: "2 हर्ट्ज", correct: false },
            { text: "0.5 हर्ट्ज", correct: false },
            { text: "0.25 हर्ट्ज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> f=1/T=1/4=0.25 हर्ट्ज।"
    },
    {
        question: "प्रश्न 22. लोलक की गति में, प्रत्यानयन बल का स्रोत क्या है?",
        answers: shuffle([
            { text: "धागे में तनाव", correct: false },
            { text: "वायु का प्रतिरोध", correct: false },
            { text: "गुरुत्वाकर्षण बल का एक घटक", correct: true },
            { text: "अभिकेंद्रीय बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल का वह घटक जो गति के पथ के स्पर्शरेखीय होता है, गोलक को हमेशा माध्य स्थिति की ओर धकेलता है और प्रत्यानयन बल के रूप में कार्य करता है।"
    },
    {
        question: "प्रश्न 23. एक लोलक जो पानी में दोलन कर रहा है, उसकी गति...",
        answers: shuffle([
            { text: "सरल आवर्त गति है।", correct: false },
            { text: "अवमंदित दोलनी गति है।", correct: true },
            { text: "प्रणोदित दोलनी गति है।", correct: false },
            { text: "अनावर्ती गति है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी का श्यान बल (drag force) एक अवमंदन बल के रूप में कार्य करता है, जो धीरे-धीरे दोलनों के आयाम को कम कर देता है।"
    },
    {
        question: "प्रश्न 24. यदि एक लोलक का गोलक चुंबक है और वह एक धातु की प्लेट के ऊपर दोलन करता है, तो दोलन...",
        answers: shuffle([
            { text: "तेज हो जाएंगे।", correct: false },
            { text: "अप्रभावित रहेंगे।", correct: false },
            { text: "अवमंदित हो जाएंगे।", correct: true },
            { text: "का आयाम बढ़ जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बदलते चुंबकीय फ्लक्स के कारण धातु की प्लेट में भंवर धाराएं (eddy currents) उत्पन्न होंगी, जो लेंज के नियम के अनुसार गति का विरोध करेंगी और दोलनों को अवमंदित करेंगी।"
    },
    {
        question: "प्रश्न 25. एक लोलक घड़ी में, ऊर्जा का क्षय रोकने के लिए कौन सी व्यवस्था होती है?",
        answers: shuffle([
            { text: "एक बैटरी", correct: false },
            { text: "एक स्प्रिंग या भार द्वारा संचालित एस्केपमेंट तंत्र", correct: true },
            { text: "एक वैक्यूम चैंबर", correct: false },
            { text: "एक चिकनाई युक्त धुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एस्केपमेंट तंत्र प्रत्येक दोलन में लोलक को एक छोटा सा धक्का देता है ताकि घर्षण के कारण हुई ऊर्जा की हानि की भरपाई हो सके।"
    },
    {
        question: "प्रश्न 26. एक लोलक की अधिकतम गति किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल लंबाई पर", correct: false },
            { text: "केवल द्रव्यमान पर", correct: false },
            { text: "आयाम और लंबाई पर", correct: true },
            { text: "केवल गुरुत्वीय त्वरण पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा संरक्षण से, अधिकतम गतिज ऊर्जा (1/2mv²_max) अधिकतम स्थितिज ऊर्जा (mgh_max) के बराबर होती है, जहाँ अधिकतम ऊँचाई आयाम और लंबाई दोनों पर निर्भर करती है।"
    },
    {
        question: "प्रश्न 27. एक लोलक का आवर्त काल मापने के लिए, कई दोलनों का समय लेना क्यों बेहतर है?",
        answers: shuffle([
            { text: "क्योंकि एक दोलन बहुत तेज होता है।", correct: false },
            { text: "समय मापने में होने वाली यादृच्छिक त्रुटि को कम करने के लिए।", correct: true },
            { text: "क्योंकि आवर्त काल बदलता रहता है।", correct: false },
            { text: "क्योंकि यह एक परंपरा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई दोलनों (जैसे 20 या 50) का समय मापकर उसे दोलनों की संख्या से विभाजित करने पर, प्रतिक्रिया समय की मानवीय त्रुटि का प्रभाव औसत होकर बहुत कम हो जाता है।"
    },
    {
        question: "प्रश्न 28. एक लोलक का आयाम 5 डिग्री है। दूसरे लोलक का आयाम 10 डिग्री है। उनके आवर्तकाल का अनुपात क्या होगा?",
        answers: shuffle([
            { text: "1:2", correct: false },
            { text: "2:1", correct: false },
            { text: "लगभग 1:1", correct: true },
            { text: "1:4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि दोनों कोण छोटे हैं, लोलक की गति लगभग सरल आवर्त गति होगी और आवर्त काल आयाम से स्वतंत्र होगा।"
    },
    {
        question: "प्रश्न 29. एक दीवार घड़ी का लोलक है:",
        answers: shuffle([
            { text: "एक सरल लोलक", correct: false },
            { text: "एक भौतिक लोलक", correct: true },
            { text: "एक ऐंठन लोलक", correct: false },
            { text: "एक सेकंड लोलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक दृढ़ पिंड है जिसका द्रव्यमान एक बिंदु पर केंद्रित नहीं है, इसलिए यह एक भौतिक लोलक है।"
    },
    {
        question: "प्रश्न 30. यदि एक लोलक की लंबाई अनंत हो जाए, तो उसका आवर्त काल...",
        answers: shuffle([
            { text: "शून्य हो जाएगा।", correct: false },
            { text: "अनंत हो जाएगा।", correct: false },
            { text: "लगभग 84.6 मिनट हो जाएगा।", correct: true },
            { text: "24 घंटे हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की वक्रता के कारण, एक अनंत लंबे लोलक का आवर्त काल पृथ्वी के केंद्र से होकर एक काल्पनिक सुरंग में दोलन करते कण के आवर्त काल के बराबर होता है, जो लगभग 84.6 मिनट है।"
    },
    {
        question: "प्रश्न 31. एक लोलक की डोरी धातु की है। यदि तापमान बढ़ता है, तो घड़ी द्वारा दिखाया गया समय...",
        answers: shuffle([
            { text: "सही समय से आगे होगा।", correct: false },
            { text: "सही समय से पीछे होगा।", correct: true },
            { text: "सही रहेगा।", correct: false },
            { text: "रुक जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तापमान बढ़ने से लंबाई बढ़ेगी, आवर्त काल बढ़ेगा, घड़ी धीमी हो जाएगी और सही समय से पीछे रह जाएगी।"
    },
    {
        question: "प्रश्न 32. दोलन करते समय लोलक के गोलक पर कौन से बल कार्य करते हैं?",
        answers: shuffle([
            { text: "केवल गुरुत्वाकर्षण", correct: false },
            { text: "केवल धागे का तनाव", correct: false },
            { text: "गुरुत्वाकर्षण और धागे का तनाव", correct: true },
            { text: "कोई बल नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोलक पर मुख्य रूप से दो बल लगते हैं: नीचे की ओर गुरुत्वाकर्षण और धागे के अनुदिश तनाव।<br><br><i class='fa-solid fa-angles-right icon'></i> वायु प्रतिरोध को अक्सर नगण्य मान लिया जाता है।"
    },
    {
        question: "प्रश्न 33. एक लोलक की लंबाई 9.8 मीटर है। पृथ्वी पर इसका आवर्त काल लगभग कितना होगा?",
        answers: shuffle([
            { text: "2π सेकंड", correct: true },
            { text: "π सेकंड", correct: false },
            { text: "1 सेकंड", correct: false },
            { text: "9.8 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> T=2π√(L/g)।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि L=9.8 मीटर और g≈9.8 मी/से², तो T=2π√(9.8/9.8)=2π सेकंड।"
    },
    {
        question: "प्रश्न 34. एक लोलक का उपयोग निम्न में से किसके अध्ययन के लिए नहीं किया जा सकता है?",
        answers: shuffle([
            { text: "सरल आवर्त गति", correct: false },
            { text: "ऊर्जा संरक्षण", correct: false },
            { text: "'g' का मान", correct: false },
            { text: "विद्युत धारा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोलक एक यांत्रिक प्रणाली है और इसका विद्युत धारा से कोई सीधा संबंध नहीं है।"
    },
    {
        question: "प्रश्न 35. यदि लोलक का गोलक गिरने लगे, तो धागे में तनाव...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "शून्य हो जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "अनंत हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त पतन की स्थिति में, गोलक और धागा दोनों एक साथ गिरेंगे और धागे में कोई खिंचाव या तनाव नहीं रहेगा।"
    },
    {
        question: "प्रश्न 36. एक लोलक की आवृत्ति 0.25 हर्ट्ज है। एक मिनट में यह कितने दोलन करेगा?",
        answers: shuffle([
            { text: "4", correct: false },
            { text: "15", correct: true },
            { text: "25", correct: false },
            { text: "60", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 0.25 हर्ट्ज का मतलब 0.25 दोलन प्रति सेकंड है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक मिनट (60 सेकंड) में दोलनों की संख्या = 0.25×60=15 दोलन।"
    },
    {
        question: "प्रश्न 37. एक भारी और एक हल्के गोलक वाले दो समान लंबाई के लोलकों को एक साथ छोड़ा जाता है। कौन पहले अपनी माध्य स्थिति पर पहुँचेगा?",
        answers: shuffle([
            { text: "भारी गोलक", correct: false },
            { text: "हल्का गोलक", correct: false },
            { text: "दोनों एक साथ", correct: true },
            { text: "यह उनके रंग पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि आवर्त काल द्रव्यमान पर निर्भर नहीं करता, दोनों एक चौथाई आवर्त काल में एक साथ अपनी माध्य स्थिति पर पहुँचेंगे।"
    },
    {
        question: "प्रश्न 38. एक लोलक का गोलक लकड़ी का है। यदि इसे लोहे के समान आकार के गोलक से बदल दिया जाए, तो वायु प्रतिरोध का प्रभाव...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: true },
            { text: "समान रहेगा।", correct: false },
            { text: "शून्य हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोहे का गोलक भारी होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> समान आकार पर समान वायु प्रतिरोध बल लगेगा, लेकिन भारी वस्तु पर इस बल का मंदक प्रभाव (त्वरण में कमी) कम होगा।"
    },
    {
        question: "प्रश्न 39. एक लोलक का आवर्त काल T है। इसकी कोणीय आवृत्ति क्या है?",
        answers: shuffle([
            { text: "T/2π", correct: false },
            { text: "2π/T", correct: true },
            { text: "2πT", correct: false },
            { text: "T", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय आवृत्ति ω=2πf होती है, और चूँकि f=1/T, इसलिए ω=2π/T।"
    },
    {
        question: "प्रश्न 40. एक लोलक को द्रव में डुबोने पर उसका आवर्त काल बढ़ जाता है। इसका मुख्य कारण है:",
        answers: shuffle([
            { text: "श्यान बल और उत्प्लावन बल", correct: true },
            { text: "केवल श्यान बल", correct: false },
            { text: "केवल उत्प्लावन बल", correct: false },
            { text: "द्रव का तापमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्प्लावन बल प्रभावी 'g' को कम करता है और श्यान बल गति को अवमंदित करता है, दोनों ही आवर्त काल को बढ़ाते हैं।"
    },
    {
        question: "प्रश्न 41. लोलक की गति एक उदाहरण है:",
        answers: shuffle([
            { text: "स्थानांतरीय गति का", correct: false },
            { text: "घूर्णी गति का", correct: false },
            { text: "दोलनी गति का", correct: true },
            { text: "यादृच्छिक गति का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोलक एक माध्य स्थिति के इर्द-गिर्द दोलन करता है।"
    },
    {
        question: "प्रश्न 42. लोलक की डोरी का अवितान्य होना क्यों महत्वपूर्ण है?",
        answers: shuffle([
            { text: "ताकि वह टूटे नहीं।", correct: false },
            { text: "ताकि उसकी लंबाई स्थिर रहे और आवर्त काल न बदले।", correct: true },
            { text: "ताकि वह हल्की रहे।", correct: false },
            { text: "ताकि वह भारी रहे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि डोरी में खिंचाव होगा, तो गति के दौरान उसकी लंबाई बदलेगी, जिससे आवर्त काल भी लगातार बदलता रहेगा और गति सरल आवर्त नहीं रहेगी।"
    },
    {
        question: "प्रश्न 43. लोलक का गोलक एक बिंदु द्रव्यमान क्यों माना जाता है?",
        answers: shuffle([
            { text: "गणना को सरल बनाने के लिए।", correct: true },
            { text: "क्योंकि वास्तविक गोलक बिंदु ही होते हैं।", correct: false },
            { text: "ताकि वह भारी हो सके।", correct: false },
            { text: "ताकि वह हवा में आसानी से घूम सके।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इससे हम गोलक के आकार और घूर्णन को नजरअंदाज कर सकते हैं और केवल उसके द्रव्यमान केंद्र की गति पर ध्यान केंद्रित कर सकते हैं।"
    },
    {
        question: "प्रश्न 44. एक लोलक का आवर्त काल 1.5 सेकंड है। इसकी आवृत्ति कितनी होगी?",
        answers: shuffle([
            { text: "1.5 हर्ट्ज", correct: false },
            { text: "0.67 हर्ट्ज", correct: true },
            { text: "3 हर्ट्ज", correct: false },
            { text: "1 हर्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> f=1/T=1/1.5=2/3≈0.67 हर्ट्ज।"
    },
    {
        question: "प्रश्न 45. दोलनों के दौरान, एक लोलक का तात्कालिक वेग शून्य कहाँ होता है?",
        answers: shuffle([
            { text: "केवल माध्य स्थिति पर", correct: false },
            { text: "केवल चरम स्थितियों पर", correct: true },
            { text: "हर जगह", correct: false },
            { text: "कहीं नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोलक अपनी दिशा बदलने के लिए चरम बिंदुओं पर क्षण भर के लिए रुकता है।"
    },
    {
        question: "प्रश्न 46. एक लोलक माध्य स्थिति से अपनी चरम स्थिति तक पहुँचता है। इस यात्रा में लगने वाला समय...",
        answers: shuffle([
            { text: "आवर्त काल (T) के बराबर है।", correct: false },
            { text: "T/2 के बराबर है।", correct: false },
            { text: "T/4 के बराबर है।", correct: true },
            { text: "2T के बराबर है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण दोलन में चार चरण होते हैं: माध्य से चरम, चरम से माध्य, माध्य से दूसरा चरम, और दूसरे चरम से माध्य।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक चरण में T/4 समय लगता है।"
    },
    {
        question: "प्रश्न 47. एक लोलक जो सही समय देता है, उसकी लंबाई थोड़ी कम कर दी जाती है। अब वह एक दिन में...",
        answers: shuffle([
            { text: "समय का लाभ करेगा।", correct: true },
            { text: "समय की हानि करेगा।", correct: false },
            { text: "सही समय देगा।", correct: false },
            { text: "रुक जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लंबाई कम होने से आवर्त काल कम हो जाएगा, घड़ी तेज चलेगी, और वह समय का लाभ करेगी (आगे निकल जाएगी)।"
    },
    {
        question: "प्रश्न 48. यदि एक लोलक का आयाम शून्य है, तो उसका आवर्त काल...",
        answers: shuffle([
            { text: "शून्य है।", correct: false },
            { text: "अनंत है।", correct: false },
            { text: "अपरिभाषित है।", correct: true },
            { text: "2 सेकंड है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शून्य आयाम का मतलब है कि लोलक दोलन नहीं कर रहा है, इसलिए आवर्त काल की अवधारणा ही लागू नहीं होती है।"
    },
    {
        question: "प्रश्न 49. एक लोलक की लंबाई L और आवर्त काल T है। एक अन्य लोलक की लंबाई 2L है। इसका आवर्त काल क्या होगा?",
        answers: shuffle([
            { text: "T", correct: false },
            { text: "T/2", correct: false },
            { text: "√2T", correct: true },
            { text: "T/√2", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि T∝√L, लंबाई को 2 गुना करने पर आवर्त काल √2 गुना हो जाएगा।"
    },
    {
        question: "प्रश्न 50. लोलक की गति के दौरान, किस बिंदु पर गोलक का त्वरण पूरी तरह से स्पर्शरेखीय होता है?",
        answers: shuffle([
            { text: "माध्य स्थिति पर", correct: false },
            { text: "चरम स्थितियों पर", correct: true },
            { text: "कभी नहीं", correct: false },
            { text: "हमेशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चरम स्थितियों पर वेग शून्य होता है, इसलिए अभिकेंद्रीय त्वरण (v²/L) शून्य होता है, और केवल प्रत्यानयन बल के कारण स्पर्शरेखीय त्वरण होता है।"
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