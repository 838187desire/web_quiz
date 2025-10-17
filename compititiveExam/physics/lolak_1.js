const questions = [
    {
        topHeading: "लोलक पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. एक आदर्श सरल लोलक में, गोलक (bob) कैसा होना चाहिए?",
        answers: shuffle([
            { text: "एक भारी बिंदु द्रव्यमान", correct: true },
            { text: "एक हल्का विस्तारित पिंड", correct: false },
            { text: "एक खोखला गोला", correct: false },
            { text: "किसी भी आकार का पिंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श सरल लोलक की परिकल्पना में, सारा द्रव्यमान एक बिंदु पर केंद्रित माना जाता है जिसे एक भारहीन और अवितान्य डोरी से लटकाया जाता है।"
    },
    {
        question: "प्रश्न 2. एक सरल लोलक की गति, यदि कोणीय विस्थापन बहुत छोटा हो, तो क्या कहलाती है?",
        answers: shuffle([
            { text: "एकसमान गति", correct: false },
            { text: "प्रक्षेप्य गति", correct: false },
            { text: "सरल आवर्त गति", correct: true },
            { text: "वृत्तीय गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटे कोणों के लिए, लोलक पर लगने वाला प्रत्यानयन बल विस्थापन के लगभग समानुपाती होता है, जो सरल आवर्त गति की मुख्य शर्त है।"
    },
    {
        question: "प्रश्न 3. सरल लोलक का आवर्त काल किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "लोलक की लंबाई पर", correct: false },
            { text: "गुरुत्वीय त्वरण (g) पर", correct: false },
            { text: "गोलक के द्रव्यमान पर", correct: true },
            { text: "लोलक के स्थान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श सरल लोलक का आवर्त काल उसके गोलक के द्रव्यमान और पदार्थ से स्वतंत्र होता है।"
    },
    {
        question: "प्रश्न 4. यदि किसी सरल लोलक की लंबाई चार गुनी कर दी जाए, तो उसका आवर्त काल कितना हो जाएगा?",
        answers: shuffle([
            { text: "आधा", correct: false },
            { text: "दोगुना", correct: true },
            { text: "चार गुना", correct: false },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल (T) लंबाई (L) के वर्गमूल के समानुपाती होता है (T∝√L)।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः लंबाई 4 गुनी करने पर आवर्त काल √4=2 गुना हो जाएगा।"
    },
    {
        question: "प्रश्न 5. यदि किसी सरल लोलक को पृथ्वी से चंद्रमा पर ले जाया जाए, तो उसका आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: true },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "शून्य हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा पर गुरुत्वीय त्वरण (g) का मान पृथ्वी से कम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि आवर्त काल g के वर्गमूल के व्युत्क्रमानुपाती (T∝1/√g) होता है, g का मान कम होने पर आवर्त काल बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 6. \"सेकंड लोलक\" (Seconds Pendulum) का आवर्त काल कितना होता है?",
        answers: shuffle([
            { text: "1 सेकंड", correct: false },
            { text: "2 सेकंड", correct: true },
            { text: "4 सेकंड", correct: false },
            { text: "0.5 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेकंड लोलक वह लोलक है जिसका आवर्त काल ठीक 2 सेकंड होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे एक चरम स्थिति से दूसरी तक जाने में 1 सेकंड लगता है।"
    },
    {
        question: "प्रश्न 7. लोलक वाली घड़ियाँ गर्मियों में सुस्त क्यों हो जाती हैं?",
        answers: shuffle([
            { text: "गोलक भारी हो जाता है।", correct: false },
            { text: "हवा का प्रतिरोध बढ़ जाता है।", correct: false },
            { text: "लोलक की लंबाई बढ़ जाती है।", correct: true },
            { text: "गुरुत्वीय त्वरण कम हो जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्मीय प्रसार के कारण गर्मी में लोलक की लंबाई थोड़ी बढ़ जाती है, जिससे उसका आवर्त काल बढ़ जाता है और घड़ी धीमी हो जाती है।"
    },
    {
        question: "प्रश्न 8. सर्दियों में लोलक वाली घड़ियाँ तेज क्यों हो जाती हैं?",
        answers: shuffle([
            { text: "गोलक हल्का हो जाता है।", correct: false },
            { text: "हवा का प्रतिरोध कम हो जाता है।", correct: false },
            { text: "लोलक की लंबाई घट जाती है।", correct: true },
            { text: "गुरुत्वीय त्वरण बढ़ जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ठंड के कारण संकुचन से लोलक की लंबाई थोड़ी कम हो जाती है, जिससे उसका आवर्त काल घट जाता है और घड़ी तेज हो जाती है।"
    },
    {
        question: "प्रश्न 9. एक लड़की झूले पर बैठी हुई झूल रही है। यदि वह खड़ी हो जाए, तो झूले का आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "अनंत हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खड़े होने पर, निकाय का गुरुत्व केंद्र ऊपर उठ जाता है, जिससे लोलक की प्रभावी लंबाई कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबाई कम होने से आवर्त काल भी घट जाता है।"
    },
    {
        question: "प्रश्न 10. एक कृत्रिम उपग्रह के अंदर सरल लोलक का आवर्त काल कितना होगा?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: true },
            { text: "24 घंटे", correct: false },
            { text: "पृथ्वी पर आवर्त काल के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपग्रह भारहीनता की स्थिति में होता है, जहाँ प्रभावी गुरुत्वीय त्वरण (g) शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए आवर्त काल (T=2π√L/g) अनंत हो जाता है, अर्थात लोलक दोलन नहीं करेगा।"
    },
    {
        question: "प्रश्न 11. दोलन करते समय लोलक की गतिज ऊर्जा कहाँ पर अधिकतम होती है?",
        answers: shuffle([
            { text: "चरम स्थितियों पर", correct: false },
            { text: "माध्य स्थिति पर", correct: true },
            { text: "सभी बिंदुओं पर समान", correct: false },
            { text: "माध्य और चरम स्थिति के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्य स्थिति (सबसे निचला बिंदु) पर लोलक का वेग अधिकतम होता है, इसलिए उसकी गतिज ऊर्जा भी अधिकतम होती है।"
    },
    {
        question: "प्रश्न 12. दोलन करते समय लोलक की स्थितिज ऊर्जा कहाँ पर अधिकतम होती है?",
        answers: shuffle([
            { text: "चरम स्थितियों पर", correct: true },
            { text: "माध्य स्थिति पर", correct: false },
            { text: "सभी बिंदुओं पर शून्य", correct: false },
            { text: "माध्य और चरम स्थिति के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चरम स्थितियाँ (अधिकतम ऊँचाई वाले बिंदु) पर लोलक का वेग शून्य होता है और सारी ऊर्जा स्थितिज ऊर्जा के रूप में होती है।"
    },
    {
        question: "प्रश्न 13. सरल लोलक की गति में, कौन सी ऊर्जा संरक्षित रहती है (वायु प्रतिरोध को नगण्य मानने पर)?",
        answers: shuffle([
            { text: "केवल गतिज ऊर्जा", correct: false },
            { text: "केवल स्थितिज ऊर्जा", correct: false },
            { text: "कुल यांत्रिक ऊर्जा", correct: true },
            { text: "ऊष्मीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा संरक्षण के नियम के अनुसार, गतिज ऊर्जा और स्थितिज ऊर्जा का कुल योग (यांत्रिक ऊर्जा) पूरी गति के दौरान स्थिर रहता है।"
    },
    {
        question: "प्रश्न 14. लोलक के दोलन का आयाम धीरे-धीरे कम हो जाना क्या कहलाता है?",
        answers: shuffle([
            { text: "अनुनाद", correct: false },
            { text: "अवमंदन", correct: true },
            { text: "प्रणोदन", correct: false },
            { text: "आवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायु प्रतिरोध जैसे अवरोधी बलों के कारण लोलक की ऊर्जा का क्षय होता रहता है, जिससे उसका आयाम घटता जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया को अवमंदन (Damping) कहते हैं।"
    },
    {
        question: "प्रश्न 15. किसी सरल लोलक की लंबाई आधी कर देने पर, उसकी आवृत्ति...",
        answers: shuffle([
            { text: "आधी हो जाएगी।", correct: false },
            { text: "दोगुनी हो जाएगी।", correct: false },
            { text: "√2 गुनी हो जाएगी।", correct: true },
            { text: "अपरिवर्तित रहेगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल √2 गुना घट जाएगा (T∝√L)।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि आवृत्ति आवर्त काल (f=1/T) का व्युत्क्रम है, इसलिए आवृत्ति √2 गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 16. एक लोलक घड़ी को किसी गहरी खान के अंदर ले जाने पर वह...",
        answers: shuffle([
            { text: "तेज हो जाएगी।", correct: false },
            { text: "सुस्त हो जाएगी।", correct: true },
            { text: "सही समय देगी।", correct: false },
            { text: "बंद हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की सतह से नीचे जाने पर 'g' का मान घटता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'g' घटने से आवर्त काल बढ़ जाएगा, जिससे घड़ी सुस्त हो जाएगी।"
    },
    {
        question: "प्रश्न 17. दोलन करते हुए लोलक के धागे में तनाव कहाँ पर न्यूनतम होता है?",
        answers: shuffle([
            { text: "माध्य स्थिति पर", correct: false },
            { text: "चरम स्थितियों पर", correct: true },
            { text: "हर जगह समान", correct: false },
            { text: "माध्य और चरम स्थिति के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चरम स्थितियों पर, गोलक का वेग शून्य होता है और धागे में तनाव केवल गुरुत्वाकर्षण के एक घटक को संतुलित करता है, जो न्यूनतम मान है।"
    },
    {
        question: "प्रश्न 18. दोलन करते हुए लोलक के धागे में तनाव कहाँ पर अधिकतम होता है?",
        answers: shuffle([
            { text: "माध्य स्थिति पर", correct: true },
            { text: "चरम स्थितियों पर", correct: false },
            { text: "हर जगह समान", correct: false },
            { text: "माध्य और चरम स्थिति के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्य स्थिति पर, वेग अधिकतम होता है, इसलिए धागे में तनाव को गुरुत्वाकर्षण बल के साथ-साथ आवश्यक अभिकेंद्रीय बल भी प्रदान करना पड़ता है, जिससे तनाव अधिकतम हो जाता है।"
    },
    {
        question: "प्रश्न 19. यदि एक सरल लोलक किसी ऐसी लिफ्ट में है जो ऊपर की ओर त्वरित हो रही है, तो उसका आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "शून्य हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊपर की ओर त्वरण के कारण प्रभावी गुरुत्वीय त्वरण (geff​=g+a) बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रभावी 'g' बढ़ने से आवर्त काल घट जाएगा।"
    },
    {
        question: "प्रश्न 20. यदि एक सरल लोलक किसी ऐसी लिफ्ट में है जो नीचे की ओर त्वरित हो रही है, तो उसका आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: true },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "शून्य हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीचे की ओर त्वरण के कारण प्रभावी गुरुत्वीय त्वरण (geff​=g−a) घट जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रभावी 'g' घटने से आवर्त काल बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 21. यदि किसी लिफ्ट की केबल टूट जाए और वह मुक्त रूप से गिरे, तो उसमें लोलक का आवर्त काल क्या होगा?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "1 सेकंड", correct: false },
            { text: "अनंत", correct: true },
            { text: "2 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त पतन की स्थिति में, प्रभावी 'g' शून्य हो जाता है, जिससे आवर्त काल अनंत हो जाता है, और लोलक दोलन नहीं करेगा।"
    },
    {
        question: "प्रश्न 22. एक \"भौतिक लोलक\" (Physical Pendulum) क्या है?",
        answers: shuffle([
            { text: "एक आदर्श सरल लोलक", correct: false },
            { text: "कोई भी दृढ़ पिंड जो एक क्षैतिज अक्ष के परितः दोलन कर सकता है", correct: true },
            { text: "एक स्प्रिंग से लटका द्रव्यमान", correct: false },
            { text: "एक सेकंड लोलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिक लोलक एक वास्तविक पिंड होता है जिसका द्रव्यमान एक बिंदु पर केंद्रित नहीं होता, जैसे कि एक झूलता हुआ डंडा या एक दीवार घड़ी का लोलक।"
    },
    {
        question: "प्रश्न 23. भौतिक लोलक का आवर्त काल किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "पिंड के जड़त्व आघूर्ण पर", correct: false },
            { text: "पिंड के द्रव्यमान पर", correct: false },
            { text: "निलंबन बिंदु से गुरुत्व केंद्र की दूरी पर", correct: false },
            { text: "दोलन के आयाम पर (छोटे आयामों के लिए)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल लोलक की तरह ही, छोटे आयामों के लिए भौतिक लोलक का आवर्त काल भी आयाम से लगभग स्वतंत्र होता है।"
    },
    {
        question: "प्रश्न 24. \"ऐंठन लोलक\" (Torsional Pendulum) में प्रत्यानयन बल के स्थान पर क्या होता है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "प्रत्यास्थ बल", correct: false },
            { text: "प्रत्यानयन बल आघूर्ण", correct: true },
            { text: "अभिकेंद्रीय बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐंठन लोलक में, एक तार या छड़ में उत्पन्न ऐंठन एक प्रत्यानयन बल आघूर्ण लगाता है जो कोणीय विस्थापन के समानुपाती होता है।"
    },
    {
        question: "प्रश्न 25. ऐंठन लोलक का आवर्त काल किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "पिंड के जड़त्व आघूर्ण पर", correct: false },
            { text: "तार के ऐंठन नियतांक पर", correct: false },
            { text: "गुरुत्वीय त्वरण (g) पर", correct: true },
            { text: "दोलन के कोणीय आयाम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि ऐंठन लोलक की गति गुरुत्वाकर्षण के कारण नहीं होती है, इसलिए इसका आवर्त काल 'g' से स्वतंत्र होता है।"
    },
    {
        question: "प्रश्न 26. लोलक की \"तुल्य लंबाई\" (Equivalent Length) क्या है?",
        answers: shuffle([
            { text: "भौतिक लोलक की वास्तविक लंबाई", correct: false },
            { text: "उस सरल लोलक की लंबाई जिसका आवर्त काल दिए गए भौतिक लोलक के बराबर हो", correct: true },
            { text: "निलंबन बिंदु से गुरुत्व केंद्र तक की दूरी", correct: false },
            { text: "दोलन का आयाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक अवधारणा है जो भौतिक लोलक की तुलना एक सरल लोलक से करने के लिए उपयोग की जाती है।"
    },
    {
        question: "प्रश्न 27. लोलक के \"निलंबन केंद्र\" और \"दोलन केंद्र\" के बीच की दूरी को क्या कहते हैं?",
        answers: shuffle([
            { text: "आयाम", correct: false },
            { text: "आवर्त काल", correct: false },
            { text: "लोलक की तुल्य लंबाई", correct: true },
            { text: "तरंगदैर्घ्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिक लोलक में, ये दो बिंदु परस्पर परिवर्तनीय होते हैं और उनके बीच की दूरी तुल्य सरल लोलक की लंबाई के बराबर होती है।"
    },
    {
        question: "प्रश्न 28. फूको लोलक (Foucault Pendulum) का उपयोग क्या प्रदर्शित करने के लिए किया जाता है?",
        answers: shuffle([
            { text: "पृथ्वी का गुरुत्वाकर्षण", correct: false },
            { text: "पृथ्वी का घूर्णन", correct: true },
            { text: "समय का मापन", correct: false },
            { text: "ऊर्जा का संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फूको लोलक का दोलन तल अंतरिक्ष के सापेक्ष स्थिर रहता है, लेकिन पृथ्वी उसके नीचे घूमती है, जिससे हमें लोलक का तल घूमता हुआ प्रतीत होता है।"
    },
    {
        question: "प्रश्न 29. एक लोलक घड़ी विषुवत रेखा की तुलना में ध्रुवों पर...",
        answers: shuffle([
            { text: "तेज चलेगी।", correct: true },
            { text: "धीमी चलेगी।", correct: false },
            { text: "समान गति से चलेगी।", correct: false },
            { text: "रुक जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुवों पर गुरुत्वीय त्वरण (g) का मान विषुवत रेखा से अधिक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'g' का मान अधिक होने से आवर्त काल कम हो जाएगा और घड़ी तेज चलेगी।"
    },
    {
        question: "प्रश्न 30. यदि कोई लड़की झूलते हुए झूले पर मिठाई खाती है, तो झूले के आवर्त काल पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: true },
            { text: "पहले बढ़ेगा फिर घटेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिठाई खाने से निकाय के कुल द्रव्यमान में बहुत मामूली वृद्धि होती है, लेकिन आवर्त काल द्रव्यमान पर निर्भर नहीं करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> गुरुत्व केंद्र भी महत्वपूर्ण रूप से नहीं बदलता है।"
    },
    {
        question: "प्रश्न 31. एक खोखले गोले में भरे पानी से बना एक लोलक दोलन कर रहा है। यदि पानी जम जाए, तो आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "अनंत हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी के जमने पर बर्फ बनने से आयतन फैलता है, लेकिन गुरुत्व केंद्र थोड़ा ऊपर उठ जाता है (क्योंकि बर्फ केंद्र से ऊपर की ओर फैलती है)।<br><br><i class='fa-solid fa-angles-right icon'></i> गुरुत्व केंद्र ऊपर उठने से प्रभावी लंबाई कम हो जाती है, जिससे आवर्त काल घट जाता है।"
    },
    {
        question: "प्रश्न 32. लोलक की गति के दौरान, किस बिंदु पर वेग और त्वरण दोनों एक साथ शून्य होते हैं?",
        answers: shuffle([
            { text: "माध्य स्थिति पर", correct: false },
            { text: "चरम स्थितियों पर", correct: false },
            { text: "किसी भी बिंदु पर नहीं", correct: true },
            { text: "माध्य और चरम स्थिति के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वेग शून्य होता है (चरम स्थिति पर), त्वरण अधिकतम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब त्वरण शून्य होता है (माध्य स्थिति पर), वेग अधिकतम होता है।"
    },
    {
        question: "प्रश्न 33. एक सरल लोलक का आयाम दोगुना करने पर, उसकी कुल ऊर्जा...",
        answers: shuffle([
            { text: "आधी हो जाएगी।", correct: false },
            { text: "दोगुनी हो जाएगी।", correct: false },
            { text: "चार गुनी हो जाएगी।", correct: true },
            { text: "अपरिवर्तित रहेगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल आवर्त गति में कुल ऊर्जा आयाम के वर्ग के समानुपाती (E∝A²) होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, आयाम दोगुना करने पर ऊर्जा चार गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 34. एक कार की छत से एक लोलक लटका हुआ है। जब कार एकसमान वेग से चलती है, तो लोलक...",
        answers: shuffle([
            { text: "आगे की ओर झुका रहेगा।", correct: false },
            { text: "पीछे की ओर झुका रहेगा।", correct: false },
            { text: "ऊर्ध्वाधर स्थिति में रहेगा।", correct: true },
            { text: "दोलन करता रहेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वेग का अर्थ है शून्य त्वरण।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, लोलक पर कोई छद्म बल नहीं लगता और वह अपनी सामान्य ऊर्ध्वाधर साम्यावस्था में रहता है।"
    },
    {
        question: "प्रश्न 35. यदि वही कार आगे की ओर त्वरित होती है, तो लोलक...",
        answers: shuffle([
            { text: "आगे की ओर झुक जाएगा।", correct: false },
            { text: "पीछे की ओर झुक जाएगा।", correct: true },
            { text: "ऊर्ध्वाधर रहेगा।", correct: false },
            { text: "दोलन करेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार के त्वरण के कारण, लोलक पर जड़त्व के कारण पीछे की ओर एक छद्म बल लगता है, जिससे वह पीछे की ओर झुककर एक नई साम्यावस्था प्राप्त कर लेता है।"
    },
    {
        question: "प्रश्न 36. यदि वही कार ब्रेक लगाकर मंदित होती है, तो लोलक...",
        answers: shuffle([
            { text: "आगे की ओर झुक जाएगा।", correct: true },
            { text: "पीछे की ओर झुक जाएगा।", correct: false },
            { text: "ऊर्ध्वाधर रहेगा।", correct: false },
            { text: "रुक जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंदन (पीछे की ओर त्वरण) के कारण, लोलक पर आगे की ओर एक छद्म बल लगता है, जिससे वह आगे की ओर झुक जाता है।"
    },
    {
        question: "प्रश्न 37. एक यौगिक लोलक (Compound Pendulum) क्या है?",
        answers: shuffle([
            { text: "एक सरल लोलक", correct: false },
            { text: "एक सेकंड लोलक", correct: false },
            { text: "एक भौतिक लोलक का दूसरा नाम", correct: true },
            { text: "दो लोलकों का संयोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यौगिक लोलक और भौतिक लोलक एक ही चीज को संदर्भित करते हैं - कोई भी दृढ़ पिंड जो एक अक्ष के परितः दोलन करता है।"
    },
    {
        question: "प्रश्न 38. लोलक का आवर्त काल 'कालदिश' (Isochronous) होता है, इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "इसका आवर्त काल आयाम पर निर्भर करता है।", correct: false },
            { text: "इसका आवर्त काल आयाम पर निर्भर नहीं करता है।", correct: true },
            { text: "इसका आवर्त काल समय के साथ बदलता है।", correct: false },
            { text: "इसका आयाम हमेशा स्थिर रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कालदिश' का अर्थ है कि छोटे दोलनों के लिए, चाहे आयाम थोड़ा कम हो या ज्यादा, आवर्त काल समान रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> गैलीलियो ने इस गुण की खोज की थी।"
    },
    {
        question: "प्रश्न 39. लोलक के दोलन की आवृत्ति किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल द्रव्यमान पर", correct: false },
            { text: "केवल आयाम पर", correct: false },
            { text: "लंबाई और गुरुत्वीय त्वरण पर", correct: true },
            { text: "केवल डोरी के पदार्थ पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि आवृत्ति आवर्त काल का व्युत्क्रम है, यह भी उन्हीं कारकों (L और g) पर निर्भर करती है जिन पर आवर्त काल निर्भर करता है।"
    },
    {
        question: "प्रश्न 40. एक बहुत लंबे लोलक का आवर्त काल...",
        answers: shuffle([
            { text: "बहुत कम होता है।", correct: false },
            { text: "बहुत अधिक होता है।", correct: true },
            { text: "लंबाई पर निर्भर नहीं करता।", correct: false },
            { text: "शून्य होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल लंबाई के वर्गमूल के समानुपाती होता है, इसलिए बहुत लंबा लोलक बहुत धीरे-धीरे दोलन करेगा।"
    },
    {
        question: "प्रश्न 41. यदि एक लोलक की डोरी को स्प्रिंग से बदल दिया जाए, तो गति...",
        answers: shuffle([
            { text: "सरल आवर्त गति ही रहेगी।", correct: false },
            { text: "दोलनी तो होगी पर सरल आवर्त गति नहीं।", correct: true },
            { text: "वृत्तीय हो जाएगी।", correct: false },
            { text: "रुक जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गति जटिल हो जाएगी क्योंकि इसमें लोलक की गति और स्प्रिंग की गति दोनों के गुण होंगे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शुद्ध सरल आवर्त गति नहीं होगी।"
    },
    {
        question: "प्रश्न 42. \"दोलन का केंद्र\" वह बिंदु है...",
        answers: shuffle([
            { text: "जहाँ लोलक लटका होता है।", correct: false },
            { text: "जहाँ गोलक का केंद्र होता है।", correct: false },
            { text: "निलंबन बिंदु के सापेक्ष वह बिंदु जहाँ यदि सारा द्रव्यमान केंद्रित होता, तो आवर्त काल समान रहता।", correct: true },
            { text: "जहाँ तनाव अधिकतम होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भौतिक लोलक की एक अवधारणा है और निलंबन केंद्र से इसकी दूरी तुल्य सरल लोलक की लंबाई के बराबर होती है।"
    },
    {
        question: "प्रश्न 43. एक लोलक का अधिकतम कोणीय वेग कहाँ होता है?",
        answers: shuffle([
            { text: "चरम स्थितियों पर", correct: false },
            { text: "माध्य स्थिति पर", correct: true },
            { text: "हर जगह समान", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस प्रकार रैखिक वेग माध्य स्थिति पर अधिकतम होता है, उसी प्रकार कोणीय वेग भी माध्य स्थिति पर ही अधिकतम होता है।"
    },
    {
        question: "प्रश्न 44. यदि एक लोलक का गोलक पानी से भरे एक खोखले गोले का है, जिसमें एक छोटा सा छेद है, तो जैसे-जैसे पानी बाहर निकलता है, आवर्त काल...",
        answers: shuffle([
            { text: "पहले बढ़ेगा, फिर घटेगा और अपने मूल मान पर लौट आएगा।", correct: true },
            { text: "लगातार घटेगा।", correct: false },
            { text: "लगातार बढ़ेगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी के निकलने के साथ गुरुत्व केंद्र पहले नीचे जाता है (जिससे लंबाई और आवर्त काल बढ़ता है) और फिर गोला खाली होने पर वापस ऊपर अपने मूल स्थान पर आ जाता है (जिससे आवर्त काल अपने मूल मान पर लौट आता है)।"
    },
    {
        question: "प्रश्न 45. एक लोलक दोलन कर रहा है। किस बिंदु पर उसकी कुल ऊर्जा पूरी तरह से गतिज ऊर्जा होती है?",
        answers: shuffle([
            { text: "चरम स्थितियों पर", correct: false },
            { text: "माध्य स्थिति पर", correct: true },
            { text: "ऐसा कभी नहीं होता", correct: false },
            { text: "माध्य और चरम स्थिति के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्य स्थिति पर, ऊँचाई न्यूनतम होती है (स्थितिज ऊर्जा शून्य मानी जाती है), इसलिए सारी यांत्रिक ऊर्जा गतिज ऊर्जा के रूप में होती है।"
    },
    {
        question: "प्रश्न 46. किस बिंदु पर लोलक की कुल ऊर्जा पूरी तरह से स्थितिज ऊर्जा होती है?",
        answers: shuffle([
            { text: "चरम स्थितियों पर", correct: true },
            { text: "माध्य स्थिति पर", correct: false },
            { text: "ऐसा कभी नहीं होता", correct: false },
            { text: "माध्य और चरम स्थिति के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चरम स्थितियों पर, गोलक क्षण भर के लिए रुक जाता है (गतिज ऊर्जा शून्य), इसलिए सारी ऊर्जा स्थितिज ऊर्जा के रूप में होती है।"
    },
    {
        question: "प्रश्न 47. एक लोलक की गति में, त्वरण सदिश की दिशा...",
        answers: shuffle([
            { text: "हमेशा माध्य स्थिति की ओर होती है।", correct: false },
            { text: "हमेशा गति की दिशा में होती है।", correct: false },
            { text: "हमेशा धागे के अनुदिश होती है।", correct: false },
            { text: "बदलती रहती है और हमेशा माध्य स्थिति की ओर नहीं होती।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण के दो घटक होते हैं: एक स्पर्शरेखीय (जो गति को बदलता है) और एक अभिकेंद्रीय (जो दिशा बदलता है)।<br><br><i class='fa-solid fa-angles-right icon'></i> केवल माध्य स्थिति पर त्वरण पूरी तरह से अभिकेंद्रीय होता है और चरम पर पूरी तरह से स्पर्शरेखीय।"
    },
    {
        question: "प्रश्न 48. यदि एक लोलक का आयाम समय के साथ चरघातांकी रूप से घटता है, तो यह किस प्रकार का दोलन है?",
        answers: shuffle([
            { text: "मुक्त दोलन", correct: false },
            { text: "प्रणोदित दोलन", correct: false },
            { text: "अवमंदित दोलन", correct: true },
            { text: "सरल आवर्त गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य वायु प्रतिरोध जैसे अवमंदन बलों के प्रभाव में, आयाम का क्षय लगभग चरघातांकी होता है।"
    },
    {
        question: "प्रश्न 49. एक लोलक घड़ी को भूमध्य रेखा से ध्रुव पर ले जाने पर एक दिन में...",
        answers: shuffle([
            { text: "समय का लाभ होगा।", correct: true },
            { text: "समय की हानि होगी।", correct: false },
            { text: "कोई परिवर्तन नहीं होगा।", correct: false },
            { text: "12 घंटे का अंतर आएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुव पर 'g' अधिक होता है, आवर्त काल कम हो जाता है, घड़ी तेज चलती है, जिससे समय का लाभ होता है।"
    },
    {
        question: "प्रश्न 50. लोलक के नियम का प्रतिपादन किसने किया?",
        answers: shuffle([
            { text: "न्यूटन", correct: false },
            { text: "आइंस्टीन", correct: false },
            { text: "गैलीलियो गैलिली", correct: true },
            { text: "केप्लर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलीलियो ने ही सबसे पहले यह खोज की थी कि एक लोलक का आवर्त काल (छोटे दोलनों के लिए) उसके आयाम पर निर्भर नहीं करता है।"
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